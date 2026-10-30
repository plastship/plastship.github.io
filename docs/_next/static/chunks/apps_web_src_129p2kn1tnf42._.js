(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
(()=>{"use strict";return[
"[project]/apps/web/src/app/components/Scene3D/Atom/AnimatedGroup/AnimatedGroup.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnimatedGroup",
    ()=>AnimatedGroup,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$animatable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/animatable.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const LIVE_SCALE_SRC = '__liveScaleSource';
const AnimatedGroup = ({ name, position = [
    0,
    0,
    0
], rotation = [
    0,
    0,
    0
], scale = 1, visible = true, children })=>{
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$animatable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimatedApply"])({
        "AnimatedGroup.useAnimatedApply": ()=>{
            const g = ref.current;
            if (!g) return;
            const p = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$animatable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveValue"])(position);
            const r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$animatable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveValue"])(rotation);
            const s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$animatable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveValue"])(scale);
            // Striche darunter lesen den Maßstab dieses Frames (liveWorldScale, #1513);
            // neu nur, wenn sich die scale-Prop ändert — kein Anlegen je Frame
            if (g.userData[LIVE_SCALE_SRC] !== scale) {
                g.userData[LIVE_SCALE_SRC] = scale;
                g.userData[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$animatable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LIVE_SCALE_KEY"]] = ({
                    "AnimatedGroup.useAnimatedApply": ()=>{
                        const v = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$animatable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveValue"])(scale);
                        return typeof v === 'number' ? v : v[0];
                    }
                })["AnimatedGroup.useAnimatedApply"];
            }
            g.position.set(p[0], p[1], p[2]);
            g.rotation.set(r[0], r[1], r[2]);
            if (typeof s === 'number') g.scale.setScalar(s);
            else g.scale.set(s[0], s[1], s[2]);
            const show = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$animatable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveValue"])(visible);
            // Beim Einblenden die übersprungenen Bausteine im selben Frame nachziehen
            if (show && !g.visible) {
                g.visible = true;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$animatable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reapplyAnimated"])(g);
            } else g.visible = show;
        }
    }["AnimatedGroup.useAnimatedApply"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$animatable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDynamic"])(position, rotation, scale, visible), ref);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        ref: ref,
        name: name,
        children: children
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Scene3D/Atom/AnimatedGroup/AnimatedGroup.tsx",
        lineNumber: 63,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(AnimatedGroup, "+utxKS/OQIuqLVHjSdg7S2KFWGs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$animatable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimatedApply"]
    ];
});
_c = AnimatedGroup;
const __TURBOPACK__default__export__ = AnimatedGroup;
var _c;
__turbopack_context__.k.register(_c, "AnimatedGroup");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Scene3D/Atom/AnimatedGroup/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$AnimatedGroup$2f$AnimatedGroup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Atom/AnimatedGroup/AnimatedGroup.tsx [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Scene3D/Atom/Flakes/FlakeGeometryMesh.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FlakeGeometryMesh",
    ()=>FlakeGeometryMesh,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$flakeGeometry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/scene3d/flakeGeometry.ts [app-client] (ecmascript)");
'use client';
;
;
const FlakeGeometryMesh = ({ type, size, variant = 0 })=>{
    switch(type){
        case 'icosahedron':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("icosahedronGeometry", {
                args: [
                    size,
                    1
                ]
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Scene3D/Atom/Flakes/FlakeGeometryMesh.tsx",
                lineNumber: 20,
                columnNumber: 14
            }, ("TURBOPACK compile-time value", void 0));
        case 'box':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                args: [
                    size * 2,
                    size * 2,
                    size * 2
                ]
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Scene3D/Atom/Flakes/FlakeGeometryMesh.tsx",
                lineNumber: 22,
                columnNumber: 14
            }, ("TURBOPACK compile-time value", void 0));
        case 'cylinder':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("cylinderGeometry", {
                args: [
                    size,
                    size,
                    size * 1.5,
                    14
                ]
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Scene3D/Atom/Flakes/FlakeGeometryMesh.tsx",
                lineNumber: 24,
                columnNumber: 14
            }, ("TURBOPACK compile-time value", void 0));
        case 'sphere':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("sphereGeometry", {
                args: [
                    size,
                    12,
                    10
                ]
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Scene3D/Atom/Flakes/FlakeGeometryMesh.tsx",
                lineNumber: 26,
                columnNumber: 14
            }, ("TURBOPACK compile-time value", void 0));
        case 'shard':
        case 'chip':
        case 'lump':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("primitive", {
                object: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$flakeGeometry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getArchetypeGeometry"])(type, variant),
                attach: "geometry"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Scene3D/Atom/Flakes/FlakeGeometryMesh.tsx",
                lineNumber: 30,
                columnNumber: 14
            }, ("TURBOPACK compile-time value", void 0));
        default:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dodecahedronGeometry", {
                args: [
                    size,
                    0
                ]
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Scene3D/Atom/Flakes/FlakeGeometryMesh.tsx",
                lineNumber: 32,
                columnNumber: 14
            }, ("TURBOPACK compile-time value", void 0));
    }
};
_c = FlakeGeometryMesh;
const __TURBOPACK__default__export__ = FlakeGeometryMesh;
var _c;
__turbopack_context__.k.register(_c, "FlakeGeometryMesh");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Scene3D/Atom/Flakes/Flakes.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Flakes",
    ()=>Flakes,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$physics$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/physics.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$Flakes$2f$FlakeGeometryMesh$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Atom/Flakes/FlakeGeometryMesh.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const Flakes = ({ flakes, geometryType, variant = 0, physics, instanceRef, bodiesRef, gravityScale })=>{
    _s();
    const withPhysics = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$physics$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResolvedPhysics"])(physics);
    const meshRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const rp = flakes[0]?.renderingParams;
    const instances = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Flakes.useMemo[instances]": ()=>flakes.map({
                "Flakes.useMemo[instances]": (f)=>({
                        key: f.id,
                        position: f.position,
                        rotation: f.rotation,
                        scale: f.scale
                    })
            }["Flakes.useMemo[instances]"])
    }["Flakes.useMemo[instances]"], [
        flakes
    ]);
    // Farben je Instanz; ohne Physik auch die Matrizen. Läuft nach jedem Wechsel
    // der Partikel UND beim Einhängen des Meshes — mit Physik hängt es erst ein,
    // wenn Rapier nachgeladen ist, also nach dem ersten Effekt.
    const applyInstances = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Flakes.useCallback[applyInstances]": (mesh)=>{
            const color = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]();
            const matrix = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix4"]();
            const quat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"]();
            const euler = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Euler"]();
            flakes.forEach({
                "Flakes.useCallback[applyInstances]": (f, i)=>{
                    color.set(f.color);
                    mesh.setColorAt(i, color);
                    if (!withPhysics) {
                        quat.setFromEuler(euler.set(f.rotation[0], f.rotation[1], f.rotation[2]));
                        matrix.compose(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](f.position[0], f.position[1], f.position[2]), quat, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](f.scale[0], f.scale[1], f.scale[2]));
                        mesh.setMatrixAt(i, matrix);
                    }
                }
            }["Flakes.useCallback[applyInstances]"]);
            if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
            if (!withPhysics) {
                mesh.instanceMatrix.needsUpdate = true;
                mesh.computeBoundingSphere();
            }
        }
    }["Flakes.useCallback[applyInstances]"], [
        flakes,
        withPhysics
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "Flakes.useLayoutEffect": ()=>{
            if (meshRef.current) applyInstances(meshRef.current);
        }
    }["Flakes.useLayoutEffect"], [
        applyInstances
    ]);
    const setMesh = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Flakes.useCallback[setMesh]": (mesh)=>{
            meshRef.current = mesh;
            if (mesh) applyInstances(mesh);
            instanceRef?.(mesh);
        }
    }["Flakes.useCallback[setMesh]"], [
        instanceRef,
        applyInstances
    ]);
    const body = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("instancedMesh", {
        ref: setMesh,
        args: [
            undefined,
            undefined,
            flakes.length
        ],
        // Mit Physik wandern die Körper aus der Hülle, die three einmal berechnet — nie ausblenden
        frustumCulled: !withPhysics,
        castShadow: true,
        receiveShadow: true,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$Flakes$2f$FlakeGeometryMesh$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FlakeGeometryMesh"], {
                type: geometryType,
                size: 0.5,
                variant: variant
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Scene3D/Atom/Flakes/Flakes.tsx",
                lineNumber: 106,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshPhysicalMaterial", {
                roughness: rp?.roughness ?? 0.25,
                metalness: rp?.metalness ?? 0.1,
                clearcoat: rp?.clearcoat ?? 0.3,
                clearcoatRoughness: rp?.clearcoatRoughness ?? 0.2,
                transmission: rp?.transmission ?? 0,
                ior: rp?.ior ?? 1.5,
                envMapIntensity: 0.8,
                transparent: (rp?.transmission ?? 0) > 0 || (rp?.opacity ?? 1) < 1,
                opacity: rp?.opacity ?? 1
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Scene3D/Atom/Flakes/Flakes.tsx",
                lineNumber: 107,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Scene3D/Atom/Flakes/Flakes.tsx",
        lineNumber: 98,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
    if (!withPhysics) return body;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: null,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$physics$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InstancedRigidBodiesDynamic"], {
            ref: bodiesRef,
            instances: instances,
            gravityScale: gravityScale,
            colliders: "cuboid",
            mass: flakes[0]?.mass ?? 0.05,
            restitution: 0.15,
            friction: 0.5,
            linearDamping: 0.5,
            angularDamping: 3,
            canSleep: true,
            children: body
        }, void 0, false, {
            fileName: "[project]/apps/web/src/app/components/Scene3D/Atom/Flakes/Flakes.tsx",
            lineNumber: 125,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Scene3D/Atom/Flakes/Flakes.tsx",
        lineNumber: 124,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Flakes, "g24JS8HNDmJ3TewPLKstrJxrZxQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$physics$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResolvedPhysics"]
    ];
});
_c = Flakes;
const __TURBOPACK__default__export__ = Flakes;
var _c;
__turbopack_context__.k.register(_c, "Flakes");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Scene3D/Atom/Flakes/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$Flakes$2f$Flakes$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Atom/Flakes/Flakes.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$Flakes$2f$FlakeGeometryMesh$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Atom/Flakes/FlakeGeometryMesh.tsx [app-client] (ecmascript)");
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Scene3D/Atom/HexPrism/HexPrism.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HexPrism",
    ()=>HexPrism,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$hexGeometry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/scene3d/hexGeometry.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$animatable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/animatable.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$litMaterial$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/litMaterial.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const HexPrism = ({ radius, depth = 0, bevel = 0, color, opacity = 1, position, rotation, renderOrder, name })=>{
    _s();
    const extruded = depth > 0;
    const geometry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HexPrism.useMemo[geometry]": ()=>{
            const shape = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$hexGeometry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexShape"])(radius, Math.PI / 6);
            if (!extruded) return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShapeGeometry"](shape);
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExtrudeGeometry"](shape, {
                depth,
                bevelEnabled: bevel > 0,
                bevelSize: bevel,
                bevelThickness: bevel,
                bevelSegments: 2
            });
        }
    }["HexPrism.useMemo[geometry]"], [
        radius,
        depth,
        bevel,
        extruded
    ]);
    // beleuchtet wie die Pellets (#1513); die flache Wabe zweiseitig
    const material = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HexPrism.useMemo[material]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$litMaterial$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createLitMaterial"])({
                side: extruded ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FrontSide"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DoubleSide"]
            })
    }["HexPrism.useMemo[material]"], [
        extruded
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HexPrism.useEffect": ()=>({
                "HexPrism.useEffect": ()=>geometry.dispose()
            })["HexPrism.useEffect"]
    }["HexPrism.useEffect"], [
        geometry
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HexPrism.useEffect": ()=>({
                "HexPrism.useEffect": ()=>material.dispose()
            })["HexPrism.useEffect"]
    }["HexPrism.useEffect"], [
        material
    ]);
    // Veränderung nur über die Ref — der React Compiler hält useMemo-Werte für unveränderlich
    const meshRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$animatable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimatedApply"])({
        "HexPrism.useAnimatedApply": ()=>{
            const mesh = meshRef.current;
            const mat = mesh?.material;
            if (!mesh || !mat) return;
            const o = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$animatable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveValue"])(opacity);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$animatable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setColorCss"])(mat.color, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$animatable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveValue"])(color));
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$animatable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setOpacity"])(mat, o);
            mat.visible = o > 0;
            // ausgeblendete Waben werfen keinen Schatten mehr (die Schattenkarte kennt keine Deckkraft)
            mesh.castShadow = o >= __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$animatable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHADOW_OPACITY"];
        }
    }["HexPrism.useAnimatedApply"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$animatable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDynamic"])(color, opacity), meshRef);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
        ref: meshRef,
        name: name,
        geometry: geometry,
        material: material,
        position: position,
        rotation: rotation,
        renderOrder: renderOrder,
        castShadow: true,
        receiveShadow: extruded
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Scene3D/Atom/HexPrism/HexPrism.tsx",
        lineNumber: 79,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(HexPrism, "7i/QHkdkndoJkThFIXHCKAZ2a6Q=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$animatable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimatedApply"]
    ];
});
_c = HexPrism;
const __TURBOPACK__default__export__ = HexPrism;
var _c;
__turbopack_context__.k.register(_c, "HexPrism");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Scene3D/Atom/HexPrism/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$HexPrism$2f$HexPrism$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Atom/HexPrism/HexPrism.tsx [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Scene3D/Atom/LightRig/LightRig.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LIGHT_RIG_PRESETS",
    ()=>LIGHT_RIG_PRESETS,
    "LightRig",
    ()=>LightRig,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
const DEFAULT_KEY_POSITION = [
    3,
    12,
    6
];
const LIGHT_RIG_PRESETS = {
    lab: {
        ambient: 0.2,
        hemisphere: 0.15,
        key: 3,
        fill: 0.3
    },
    pile: {
        ambient: 0.35,
        hemisphere: 0.25,
        key: 2.2,
        fill: 0.4
    },
    // Bühne des Imagefilms: Motive stehen in der Bildebene — Führungslicht fast
    // von vorn, Schatten fallen kurz nach rechts unten auf die Rückwand (#1513)
    stage: {
        ambient: 0.6,
        hemisphere: 0.35,
        key: 1.4,
        fill: 0.35,
        keyPosition: [
            1.5,
            3,
            12
        ],
        shadowNormalBias: 0.05
    }
};
const LightRig = ({ preset, shadows = true })=>{
    const l = LIGHT_RIG_PRESETS[preset];
    const [kx, ky, kz] = l.keyPosition ?? DEFAULT_KEY_POSITION;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ambientLight", {
                intensity: l.ambient,
                color: "#ffffff"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Scene3D/Atom/LightRig/LightRig.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hemisphereLight", {
                args: [
                    '#ffffff',
                    '#e8e8e8',
                    l.hemisphere
                ]
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Scene3D/Atom/LightRig/LightRig.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("directionalLight", {
                position: [
                    kx,
                    ky,
                    kz
                ],
                intensity: l.key,
                color: "#ffffff",
                castShadow: shadows,
                "shadow-mapSize-width": 2048,
                "shadow-mapSize-height": 2048,
                "shadow-camera-near": 0.5,
                "shadow-camera-far": 30,
                "shadow-camera-left": -15,
                "shadow-camera-right": 15,
                "shadow-camera-top": 10,
                "shadow-camera-bottom": -10,
                "shadow-bias": -0.0005,
                "shadow-normalBias": l.shadowNormalBias ?? 0.02
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Scene3D/Atom/LightRig/LightRig.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("directionalLight", {
                position: [
                    -4,
                    5,
                    -2
                ],
                intensity: l.fill,
                color: "#ffffff"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Scene3D/Atom/LightRig/LightRig.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Scene3D/Atom/LightRig/LightRig.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = LightRig;
const __TURBOPACK__default__export__ = LightRig;
var _c;
__turbopack_context__.k.register(_c, "LightRig");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Scene3D/Atom/LightRig/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$LightRig$2f$LightRig$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Atom/LightRig/LightRig.tsx [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Scene3D/Atom/StrokePath/StrokePath.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StrokePath",
    ()=>StrokePath,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$b389eeca$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-b389eeca.esm.js [app-client] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$b389eeca$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-b389eeca.esm.js [app-client] (ecmascript) <export C as useThree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$lines$2f$Line2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/examples/jsm/lines/Line2.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$lines$2f$LineGeometry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/examples/jsm/lines/LineGeometry.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$lines$2f$LineMaterial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/examples/jsm/lines/LineMaterial.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/motion/easing.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$shapes2d$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/scene3d/shapes2d.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$tubePath$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/scene3d/tubePath.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$litMaterial$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/litMaterial.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$animatable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/animatable.ts [app-client] (ecmascript)");
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
/**
 * Beleuchtete Linie in Welteinheiten (#1513): eine Röhre mit Gehrungsecken
 * (lib/scene3d/tubePath), lit wie die Pellets. Eingezeichnet wird über den
 * Zeichenbereich der Geometrie — die Ecken bleiben auch mitten im Einzeichnen
 * sauber. Die Breite schreibt die Positionen nur neu, wenn sie sich ändert.
 */ const TubeStroke = ({ points, width, color, progress = 1, opacity = 1, castShadow = true, position, rotation, renderOrder })=>{
    _s();
    const tube = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "TubeStroke.useMemo[tube]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$tubePath$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildTubePath"])(points)
    }["TubeStroke.useMemo[tube]"], [
        points
    ]);
    const geometry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "TubeStroke.useMemo[geometry]": ()=>{
            const g = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferGeometry"]();
            g.setAttribute('position', new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferAttribute"](new Float32Array(tube.center.length), 3));
            g.setAttribute('normal', new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferAttribute"](tube.normal, 3));
            g.setIndex(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferAttribute"](tube.index, 1));
            return g;
        }
    }["TubeStroke.useMemo[geometry]"], [
        tube
    ]);
    const material = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "TubeStroke.useMemo[material]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$litMaterial$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createLitMaterial"])()
    }["TubeStroke.useMemo[material]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TubeStroke.useEffect": ()=>({
                "TubeStroke.useEffect": ()=>geometry.dispose()
            })["TubeStroke.useEffect"]
    }["TubeStroke.useEffect"], [
        geometry
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TubeStroke.useEffect": ()=>({
                "TubeStroke.useEffect": ()=>material.dispose()
            })["TubeStroke.useEffect"]
    }["TubeStroke.useEffect"], [
        material
    ]);
    // Veränderung nur über die Ref — der React Compiler hält useMemo-Werte für unveränderlich
    const meshRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    /** zuletzt geschriebener lokaler Radius */ const radiusRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(Number.NaN);
    /** Breite in Welteinheiten, Maßstab der Gruppen darüber */ const worldRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        width: 0,
        scale: 1
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "TubeStroke.useLayoutEffect": ()=>{
            radiusRef.current = Number.NaN;
        }
    }["TubeStroke.useLayoutEffect"], [
        geometry
    ]);
    /**
   * Breite wie bei Line2 in Welteinheiten, unabhängig vom Maßstab der Gruppen
   * darüber (Waben schrumpfen, Linien bleiben gleich kräftig): lokaler Radius
   * = Weltbreite / 2 / Weltmaßstab. Schreibt nur bei Änderung.
   */ const writeRadius = (mesh)=>{
        const { width: w, scale } = worldRef.current;
        const r = Math.max(0, w) / 2 / (scale > 1e-6 ? scale : 1);
        if (Math.abs(r - radiusRef.current) < 1e-7) return;
        radiusRef.current = r;
        const g = mesh.geometry;
        const attr = g.getAttribute('position');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$tubePath$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeTubePositions"])(tube, r, attr.array);
        attr.needsUpdate = true;
        g.computeBoundingSphere();
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$b389eeca$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "TubeStroke.useFrame": ()=>{
            const mesh = meshRef.current;
            if (!mesh || !mesh.visible) return;
            // Maßstab aus den Gruppen darüber, wie sie ihn in diesem Frame setzen (#1513)
            const scale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$animatable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["liveWorldScale"])(mesh);
            if (Math.abs(scale - worldRef.current.scale) < 1e-5) return;
            worldRef.current.scale = scale;
            writeRadius(mesh);
        }
    }["TubeStroke.useFrame"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$animatable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimatedApply"])({
        "TubeStroke.useAnimatedApply": ()=>{
            const mesh = meshRef.current;
            if (!mesh) return;
            const g = mesh.geometry;
            const mat = mesh.material;
            worldRef.current.width = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$animatable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveValue"])(width);
            // beim Einblenden (reapplyAnimated) stimmt der Maßstab vom letzten Frame nicht mehr
            worldRef.current.scale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$animatable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["liveWorldScale"])(mesh);
            writeRadius(mesh);
            const p = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp01"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$animatable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveValue"])(progress));
            const count = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$tubePath$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tubeDrawCount"])(tube, p);
            if (g.drawRange.count !== count) g.setDrawRange(0, count);
            const o = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$animatable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveValue"])(opacity);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$animatable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setColorCss"])(mat.color, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$animatable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveValue"])(color));
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$animatable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setOpacity"])(mat, o);
            mesh.visible = count > 0 && o > 0;
            mesh.castShadow = castShadow && o >= __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$animatable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHADOW_OPACITY"];
        }
    }["TubeStroke.useAnimatedApply"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$animatable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDynamic"])(progress, opacity, color, width), meshRef);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
        ref: meshRef,
        name: "stroke-tube",
        // Stützpunkte und Bogenlänge für Prüfungen (Tests, Werkzeuge)
        userData: {
            points,
            length: tube.length
        },
        geometry: geometry,
        material: material,
        position: position,
        rotation: rotation,
        renderOrder: renderOrder,
        frustumCulled: false
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Scene3D/Atom/StrokePath/StrokePath.tsx",
        lineNumber: 133,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(TubeStroke, "dV12lELmBU1VjTgjZgGnP97AjX8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$b389eeca$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$animatable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimatedApply"]
    ];
});
_c = TubeStroke;
/** Flache Linie in CSS-Pixeln (Line2): Strichmuster so lang wie der Zug, dessen Versatz wandert */ const FlatStroke = ({ points, width, color, progress = 1, opacity = 1, worldUnits = false, position, rotation, renderOrder })=>{
    _s1();
    const size = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$b389eeca$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])({
        "FlatStroke.useThree[size]": (s)=>s.size
    }["FlatStroke.useThree[size]"]);
    const length = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "FlatStroke.useMemo[length]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$shapes2d$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["polylineLength"])(points)
    }["FlatStroke.useMemo[length]"], [
        points
    ]);
    const line = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "FlatStroke.useMemo[line]": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$lines$2f$Line2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line2"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$lines$2f$LineGeometry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineGeometry"](), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$lines$2f$LineMaterial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineMaterial"]({
                dashed: true
            }))
    }["FlatStroke.useMemo[line]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "FlatStroke.useLayoutEffect": ()=>{
            line.geometry.setPositions(points.flat());
            line.computeLineDistances();
        }
    }["FlatStroke.useLayoutEffect"], [
        line,
        points
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FlatStroke.useEffect": ()=>({
                "FlatStroke.useEffect": ()=>{
                    line.geometry.dispose();
                    line.material.dispose();
                }
            })["FlatStroke.useEffect"]
    }["FlatStroke.useEffect"], [
        line
    ]);
    // Veränderung nur über die Ref — der React Compiler hält useMemo-Werte für unveränderlich
    const lineRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$animatable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimatedApply"])({
        "FlatStroke.useAnimatedApply": ()=>{
            const target = lineRef.current;
            if (!target) return;
            const mat = target.material;
            const p = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp01"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$animatable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveValue"])(progress));
            const o = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$animatable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveValue"])(opacity);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$animatable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setColorCss"])(mat.color, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$animatable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveValue"])(color));
            mat.linewidth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$animatable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveValue"])(width);
            mat.worldUnits = worldUnits;
            // Fertige Linien ohne Strichmuster: das Muster erzeugt an den Stößen feine Zacken
            const dashed = p < 1;
            if (mat.dashed !== dashed) mat.dashed = dashed;
            mat.dashSize = length;
            mat.gapSize = length;
            mat.dashOffset = length * (1 - p);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$animatable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setOpacity"])(mat, o);
            mat.resolution.set(size.width, size.height);
            target.visible = p > 0 && o > 0 && length > 0;
        }
    }["FlatStroke.useAnimatedApply"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$animatable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDynamic"])(progress, opacity, color, width), lineRef);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("primitive", {
        ref: lineRef,
        object: line,
        position: position,
        rotation: rotation,
        renderOrder: renderOrder
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Scene3D/Atom/StrokePath/StrokePath.tsx",
        lineNumber: 200,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(FlatStroke, "m/0Z7GD/cwMoDgroplup2cUfDHo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$b389eeca$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$animatable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimatedApply"]
    ];
});
_c1 = FlatStroke;
const StrokePath = (props)=>props.worldUnits === false ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FlatStroke, {
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Scene3D/Atom/StrokePath/StrokePath.tsx",
        lineNumber: 210,
        columnNumber: 32
    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TubeStroke, {
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Scene3D/Atom/StrokePath/StrokePath.tsx",
        lineNumber: 210,
        columnNumber: 60
    }, ("TURBOPACK compile-time value", void 0));
_c2 = StrokePath;
const __TURBOPACK__default__export__ = StrokePath;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "TubeStroke");
__turbopack_context__.k.register(_c1, "FlatStroke");
__turbopack_context__.k.register(_c2, "StrokePath");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Scene3D/Atom/StrokePath/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$StrokePath$2f$StrokePath$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Atom/StrokePath/StrokePath.tsx [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Scene3D/Atom/SvgShape/SvgShape.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SVG_SHAPE_DEPTH",
    ()=>SVG_SHAPE_DEPTH,
    "SvgShape",
    ()=>SvgShape,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$svgShapes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/scene3d/svgShapes.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$extrudeFlat$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/scene3d/extrudeFlat.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$litMaterial$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/litMaterial.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$animatable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/animatable.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
const SVG_SHAPE_DEPTH = 0.04;
const SvgShape = ({ svg, size, color, accentColor, opacity = 1, keepColors = false, depth = SVG_SHAPE_DEPTH, position, rotation, renderOrder })=>{
    _s();
    const { parts, x, y, width, height } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SvgShape.useMemo": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$svgShapes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["svgParts"])(svg, keepColors)
    }["SvgShape.useMemo"], [
        svg,
        keepColors
    ]);
    const lit = depth > 0;
    const geometries = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SvgShape.useMemo[geometries]": ()=>parts.map({
                "SvgShape.useMemo[geometries]": (p)=>lit ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$extrudeFlat$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extrudeFlat"])(p.geometry) : p.geometry
            }["SvgShape.useMemo[geometries]"])
    }["SvgShape.useMemo[geometries]"], [
        parts,
        lit
    ]);
    // Material je Teil und Instanz (Farbe und Deckkraft animieren je Icon); Geometrie geteilt
    const materials = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SvgShape.useMemo[materials]": ()=>parts.map({
                "SvgShape.useMemo[materials]": ()=>lit ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$litMaterial$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createLitMaterial"])() : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
                        side: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DoubleSide"]
                    })
            }["SvgShape.useMemo[materials]"])
    }["SvgShape.useMemo[materials]"], [
        parts,
        lit
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SvgShape.useEffect": ()=>({
                "SvgShape.useEffect": ()=>{
                    for (const m of materials)m.dispose();
                }
            })["SvgShape.useEffect"]
    }["SvgShape.useEffect"], [
        materials
    ]);
    // Veränderung nur über die Ref — der React Compiler hält useMemo-Werte für unveränderlich
    const piecesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$animatable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimatedApply"])({
        "SvgShape.useAnimatedApply": ()=>{
            const group = piecesRef.current;
            if (!group) return;
            const base = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$animatable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveValue"])(color);
            const accent = accentColor === undefined ? base : (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$animatable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveValue"])(accentColor);
            const o = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$animatable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveValue"])(opacity);
            for (const child of group.children){
                const mat = child.material;
                const { role, fileColor } = child.userData;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$animatable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setColorCss"])(mat.color, role === 'file' ? fileColor : role === 'accent' ? accent : base);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$animatable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setOpacity"])(mat, o);
                mat.visible = o > 0;
                // ausblendende Icons werfen keinen Schatten
                child.castShadow = lit && o >= 0.5;
            }
        }
    }["SvgShape.useAnimatedApply"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$animatable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDynamic"])(color, accentColor, opacity), piecesRef);
    const scale = size / Math.max(width, height);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        position: position,
        rotation: rotation,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
            scale: [
                scale,
                -scale,
                lit ? depth : scale
            ],
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                ref: piecesRef,
                position: [
                    -(x + width / 2),
                    -(y + height / 2),
                    0
                ],
                children: parts.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                        geometry: geometries[i],
                        material: materials[i],
                        renderOrder: renderOrder,
                        userData: {
                            role: p.role,
                            fileColor: p.fileColor
                        }
                    }, i, false, {
                        fileName: "[project]/apps/web/src/app/components/Scene3D/Atom/SvgShape/SvgShape.tsx",
                        lineNumber: 103,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Scene3D/Atom/SvgShape/SvgShape.tsx",
                lineNumber: 101,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/apps/web/src/app/components/Scene3D/Atom/SvgShape/SvgShape.tsx",
            lineNumber: 100,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Scene3D/Atom/SvgShape/SvgShape.tsx",
        lineNumber: 99,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(SvgShape, "yJu+gQEkpK+2JbZp9RsNK5XY1WU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$animatable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimatedApply"]
    ];
});
_c = SvgShape;
const __TURBOPACK__default__export__ = SvgShape;
var _c;
__turbopack_context__.k.register(_c, "SvgShape");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Scene3D/Atom/SvgShape/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$SvgShape$2f$SvgShape$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Atom/SvgShape/SvgShape.tsx [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Scene3D/Molecule/CameraRig/CameraRig.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CameraRig",
    ()=>CameraRig,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$b389eeca$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-b389eeca.esm.js [app-client] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$animatable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/animatable.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const CameraRig = ({ position, lookAt, fov })=>{
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$b389eeca$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "CameraRig.useFrame": (state)=>{
            const cam = state.camera;
            const p = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$animatable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveValue"])(position);
            const l = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$animatable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveValue"])(lookAt);
            cam.position.set(p[0], p[1], p[2]);
            cam.lookAt(l[0], l[1], l[2]);
            if (fov !== undefined && cam instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PerspectiveCamera"]) {
                const f = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$animatable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveValue"])(fov);
                if (cam.fov !== f) {
                    cam.fov = f;
                    cam.updateProjectionMatrix();
                }
            }
        }
    }["CameraRig.useFrame"]);
    return null;
};
_s(CameraRig, "xC67171NPRcCAzsbrenetil66NI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$b389eeca$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c = CameraRig;
const __TURBOPACK__default__export__ = CameraRig;
var _c;
__turbopack_context__.k.register(_c, "CameraRig");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Scene3D/Molecule/CameraRig/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Molecule$2f$CameraRig$2f$CameraRig$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Molecule/CameraRig/CameraRig.tsx [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Scene3D/Molecule/DeviceFrame/DeviceFrame.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DeviceFrame",
    ()=>DeviceFrame,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$shapes2d$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/scene3d/shapes2d.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$StrokePath$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Atom/StrokePath/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$StrokePath$2f$StrokePath$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Atom/StrokePath/StrokePath.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$animatable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/animatable.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
/** Seitenverhältnis Breite/Höhe und Eckenradius (Anteil der Höhe) je Gerät */ const SPEC = {
    phone: {
        aspect: 0.5,
        radius: 0.12
    },
    tablet: {
        aspect: 0.74,
        radius: 0.07
    },
    laptop: {
        aspect: 1.6,
        radius: 0.05
    }
};
/** Waagerechte Linie um die Mitte bei Höhe y */ const bar = (half, y)=>[
        [
            -half,
            y,
            0
        ],
        [
            half,
            y,
            0
        ]
    ];
const DeviceFrame = ({ type, height, color, lineWidth, progress = 1, opacity = 1, children, position, name })=>{
    _s();
    const { aspect, radius } = SPEC[type];
    const width = height * aspect;
    const outer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DeviceFrame.useMemo[outer]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$shapes2d$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["roundedRectPoints"])(width, height, height * radius, 5)
    }["DeviceFrame.useMemo[outer]"], [
        width,
        height,
        radius
    ]);
    const inset = type === 'laptop' ? height * 0.06 : height * 0.07;
    const inner = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DeviceFrame.useMemo[inner]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$shapes2d$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["roundedRectPoints"])(width - inset * 2 * (type === 'laptop' ? 1 : 0.6), height - inset * 2, height * radius * 0.5, 3)
    }["DeviceFrame.useMemo[inner]"], [
        width,
        height,
        inset,
        radius,
        type
    ]);
    const details = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DeviceFrame.useMemo[details]": ()=>{
            const top = height / 2;
            const bottom = -height / 2;
            switch(type){
                case 'phone':
                    return [
                        bar(width * 0.12, top - inset * 0.5),
                        bar(width * 0.16, bottom + inset * 0.5)
                    ];
                case 'tablet':
                    return [
                        bar(width * 0.1, bottom + inset * 0.5)
                    ];
                case 'laptop':
                    {
                        const y0 = bottom - height * 0.04;
                        const y1 = y0 - height * 0.1;
                        return [
                            [
                                [
                                    -width * 0.54,
                                    y0,
                                    0
                                ],
                                [
                                    width * 0.54,
                                    y0,
                                    0
                                ],
                                [
                                    width * 0.62,
                                    y1,
                                    0
                                ],
                                [
                                    -width * 0.62,
                                    y1,
                                    0
                                ],
                                [
                                    -width * 0.54,
                                    y0,
                                    0
                                ]
                            ]
                        ];
                    }
            }
        }
    }["DeviceFrame.useMemo[details]"], [
        type,
        width,
        height,
        inset
    ]);
    const innerOpacity = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$animatable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveValue"])(opacity) * 0.45;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        position: position,
        name: name,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$StrokePath$2f$StrokePath$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StrokePath"], {
                points: outer,
                width: lineWidth,
                color: color,
                progress: progress,
                opacity: opacity
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Scene3D/Molecule/DeviceFrame/DeviceFrame.tsx",
                lineNumber: 92,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$StrokePath$2f$StrokePath$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StrokePath"], {
                points: inner,
                width: lineWidth * 0.4,
                color: color,
                progress: progress,
                opacity: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$animatable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDynamic"])(opacity) ? innerOpacity : innerOpacity()
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Scene3D/Molecule/DeviceFrame/DeviceFrame.tsx",
                lineNumber: 93,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            details.map((points, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$StrokePath$2f$StrokePath$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StrokePath"], {
                    points: points,
                    width: lineWidth,
                    color: color,
                    progress: progress,
                    opacity: opacity
                }, i, false, {
                    fileName: "[project]/apps/web/src/app/components/Scene3D/Molecule/DeviceFrame/DeviceFrame.tsx",
                    lineNumber: 101,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Scene3D/Molecule/DeviceFrame/DeviceFrame.tsx",
        lineNumber: 91,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(DeviceFrame, "PqO8nvqS0sgLXUGDzGDQzj3WvwM=");
_c = DeviceFrame;
const __TURBOPACK__default__export__ = DeviceFrame;
var _c;
__turbopack_context__.k.register(_c, "DeviceFrame");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Scene3D/Molecule/DeviceFrame/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Molecule$2f$DeviceFrame$2f$DeviceFrame$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Molecule/DeviceFrame/DeviceFrame.tsx [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Scene3D/Molecule/DocumentCards/DocumentCards.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CardFill",
    ()=>CardFill,
    "DocumentCards",
    ()=>DocumentCards,
    "cardPosition",
    ()=>cardPosition,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/motion/easing.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$shapes2d$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/scene3d/shapes2d.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$AnimatedGroup$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Atom/AnimatedGroup/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$AnimatedGroup$2f$AnimatedGroup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Atom/AnimatedGroup/AnimatedGroup.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$StrokePath$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Atom/StrokePath/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$StrokePath$2f$StrokePath$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Atom/StrokePath/StrokePath.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$animatable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/animatable.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$litMaterial$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/litMaterial.ts [app-client] (ecmascript)");
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
/** Höhe des Bogens nach vorn (z) in der Mitte des Flugs */ const LIFT = 0.8;
/** Scratch für die Drehung: wird je Karte synchron gelesen, keine Allokation je Frame */ const ROTATION = [
    0,
    0,
    0
];
const CardFill = ({ width, height, color, opacity })=>{
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // beleuchtet wie die Pellets (#1513)
    const material = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CardFill.useMemo[material]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$litMaterial$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createLitMaterial"])({
                side: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DoubleSide"]
            })
    }["CardFill.useMemo[material]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CardFill.useEffect": ()=>({
                "CardFill.useEffect": ()=>material.dispose()
            })["CardFill.useEffect"]
    }["CardFill.useEffect"], [
        material
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$animatable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimatedApply"])({
        "CardFill.useAnimatedApply": ()=>{
            const mesh = ref.current;
            const mat = mesh?.material;
            if (!mesh || !mat) return;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$animatable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setColorCss"])(mat.color, color);
            const o = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$animatable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveValue"])(opacity);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$animatable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setOpacity"])(mat, o);
            mat.visible = o > 0;
            mesh.castShadow = o >= __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$animatable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHADOW_OPACITY"];
        }
    }["CardFill.useAnimatedApply"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$animatable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDynamic"])(opacity), ref);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
        ref: ref,
        name: "document-card-fill",
        material: material,
        castShadow: true,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("planeGeometry", {
            args: [
                width,
                height
            ]
        }, void 0, false, {
            fileName: "[project]/apps/web/src/app/components/Scene3D/Molecule/DocumentCards/DocumentCards.tsx",
            lineNumber: 69,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Scene3D/Molecule/DocumentCards/DocumentCards.tsx",
        lineNumber: 68,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(CardFill, "LIZSV1I0CCaWOgBTZbU0CiXle4U=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$animatable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimatedApply"]
    ];
});
_c = CardFill;
const cardPosition = (from, to, p, out)=>{
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_IN_OUT"])(Math.min(1, Math.max(0, p)));
    out[0] = from[0] + (to[0] - from[0]) * t;
    out[1] = from[1] + (to[1] - from[1]) * t;
    out[2] = from[2] + (to[2] - from[2]) * t + (t >= 1 ? 0 : Math.sin(Math.PI * t) * LIFT);
    return out;
};
const DocumentCards = ({ cards, to, stackOffset, width, height, progress, lineColor, fillColor, lineWidth, opacity = 1 })=>{
    _s1();
    const outline = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DocumentCards.useMemo[outline]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$shapes2d$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["roundedRectPoints"])(width, height, Math.min(width, height) * 0.08).map({
                "DocumentCards.useMemo[outline]": ([x, y])=>[
                        x,
                        y,
                        0.002
                    ]
            }["DocumentCards.useMemo[outline]"])
    }["DocumentCards.useMemo[outline]"], [
        width,
        height
    ]);
    const targets = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DocumentCards.useMemo[targets]": ()=>cards.map({
                "DocumentCards.useMemo[targets]": (_, i)=>[
                        to[0] + stackOffset[0] * i,
                        to[1] + stackOffset[1] * i,
                        to[2] + stackOffset[2] * i
                    ]
            }["DocumentCards.useMemo[targets]"])
    }["DocumentCards.useMemo[targets]"], [
        cards,
        to,
        stackOffset
    ]);
    const scratch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DocumentCards.useMemo[scratch]": ()=>cards.map({
                "DocumentCards.useMemo[scratch]": ()=>[
                        0,
                        0,
                        0
                    ]
            }["DocumentCards.useMemo[scratch]"])
    }["DocumentCards.useMemo[scratch]"], [
        cards
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        children: cards.map((card, i)=>{
            const p = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$animatable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveValue"])(progress)[i] ?? 0;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$AnimatedGroup$2f$AnimatedGroup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedGroup"], {
                name: "document-card",
                position: ()=>cardPosition(card.from, targets[i], p(), scratch[i]),
                rotation: ()=>{
                    ROTATION[2] = (1 - p()) * (i % 2 === 0 ? 0.25 : -0.25);
                    return ROTATION;
                },
                visible: ()=>p() > 0,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CardFill, {
                        width: width,
                        height: height,
                        color: fillColor,
                        opacity: opacity
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Scene3D/Molecule/DocumentCards/DocumentCards.tsx",
                        lineNumber: 124,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$StrokePath$2f$StrokePath$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StrokePath"], {
                        points: outline,
                        width: lineWidth,
                        color: lineColor,
                        opacity: opacity
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Scene3D/Molecule/DocumentCards/DocumentCards.tsx",
                        lineNumber: 125,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                        position: [
                            0,
                            0,
                            0.004
                        ],
                        children: card.children
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Scene3D/Molecule/DocumentCards/DocumentCards.tsx",
                        lineNumber: 126,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, i, true, {
                fileName: "[project]/apps/web/src/app/components/Scene3D/Molecule/DocumentCards/DocumentCards.tsx",
                lineNumber: 114,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0));
        })
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Scene3D/Molecule/DocumentCards/DocumentCards.tsx",
        lineNumber: 110,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(DocumentCards, "Jmi0x9fk8MTdS76V6c+x8XPidIY=");
_c1 = DocumentCards;
const __TURBOPACK__default__export__ = DocumentCards;
var _c, _c1;
__turbopack_context__.k.register(_c, "CardFill");
__turbopack_context__.k.register(_c1, "DocumentCards");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Scene3D/Molecule/DocumentCards/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Molecule$2f$DocumentCards$2f$DocumentCards$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Molecule/DocumentCards/DocumentCards.tsx [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Scene3D/Molecule/HexMosaicMap/HexMosaicMap.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HexMosaicMap",
    ()=>HexMosaicMap,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/colors.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/motion/easing.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$hexGeometry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/scene3d/hexGeometry.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$hexMosaic$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/scene3d/hexMosaic.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$hexRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/scene3d/hexRoute.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$StrokePath$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Atom/StrokePath/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$StrokePath$2f$StrokePath$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Atom/StrokePath/StrokePath.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$AnimatedGroup$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Atom/AnimatedGroup/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$AnimatedGroup$2f$AnimatedGroup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Atom/AnimatedGroup/AnimatedGroup.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$animatable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/animatable.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$litMaterial$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/litMaterial.ts [app-client] (ecmascript)");
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
/** Anteil der Zelle, den eine Wabe füllt — der Rest ist die Fuge (wie bei frei stehenden Routen, HexRoute) */ const TILE_SHARE = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$hexRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HEX_TILE_SHARE"];
const scratchMatrix = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix4"]();
const scratchPos = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
const scratchQuat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"]();
const scratchScale = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
const scratchColor = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]();
/** Zustand einer Wabe: Grundfarbe, markiert (Start, Ziel, Pin), von mehreren Routen überquert, ab CROSSED + i von Route i überquert */ const BASE = 0;
const MARKED = 1;
const OVERLAP = 2;
const CROSSED = 3;
/** Pin i erscheint ab diesem Anteil von pinProgress (nacheinander) */ const pinStart = (i, n)=>(n > 1 ? i / (n - 1) : 0) * 0.7;
/** Anteil des Aufdeckens, über den eine einzelne Wabe aufwächst */ const SOFT = 0.08;
const HexMosaicMap = ({ cellRadius, color, reveal, pins = [], pinProgress = 1, route, routeColor = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].SECONDARY, routeProgress = 1, routeWidth = 0.035, routeTileColor, extraRoutes, routeOverlapColor, markColor, opacity = 1, mask = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$hexMosaic$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EUROPE_MASK"], outline = false, outlineColor = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].WHITE, outlineProgress = 1, outlineWidth = 0.035 })=>{
    _s();
    const cells = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HexMosaicMap.useMemo[cells]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$hexMosaic$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mosaicCells"])(mask, cellRadius)
    }["HexMosaicMap.useMemo[cells]"], [
        mask,
        cellRadius
    ]);
    const geometry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HexMosaicMap.useMemo[geometry]": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShapeGeometry"]((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$hexGeometry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexShape"])(cellRadius * TILE_SHARE, Math.PI / 6))
    }["HexMosaicMap.useMemo[geometry]"], [
        cellRadius
    ]);
    // beleuchtet wie die Pellets (#1513); Instanzfarben fließen ins Eigenleuchten mit ein
    const material = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HexMosaicMap.useMemo[material]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$litMaterial$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createLitMaterial"])({
                side: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DoubleSide"]
            })
    }["HexMosaicMap.useMemo[material]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HexMosaicMap.useEffect": ()=>({
                "HexMosaicMap.useEffect": ()=>geometry.dispose()
            })["HexMosaicMap.useEffect"]
    }["HexMosaicMap.useEffect"], [
        geometry
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HexMosaicMap.useEffect": ()=>({
                "HexMosaicMap.useEffect": ()=>material.dispose()
            })["HexMosaicMap.useEffect"]
    }["HexMosaicMap.useEffect"], [
        material
    ]);
    // Grenze im selben Abstand zu den Waben wie Wabe zu Wabe (#1513): die
    // Zellgrenze liegt eine halbe Fuge vor dem Wabenrand, dazu noch eine halbe
    // Fuge und die halbe Linienbreite nach außen
    const outlineLoops = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HexMosaicMap.useMemo[outlineLoops]": ()=>{
            if (!outline) return [];
            const gap = Math.sqrt(3) * (1 - TILE_SHARE) * cellRadius;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$hexMosaic$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mosaicOutline"])(cells, cellRadius).map({
                "HexMosaicMap.useMemo[outlineLoops]": (loop)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$hexMosaic$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["offsetOutline"])(loop, gap / 2 + outlineWidth / 2)
            }["HexMosaicMap.useMemo[outlineLoops]"]);
        }
    }["HexMosaicMap.useMemo[outlineLoops]"], [
        outline,
        cells,
        cellRadius,
        outlineWidth
    ]);
    /** Alle Routen: die erste aus `route`/`routeProgress`, dann `extraRoutes` */ const routes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HexMosaicMap.useMemo[routes]": ()=>[
                ...route && route.length >= 2 ? [
                    {
                        route,
                        progress: routeProgress,
                        tileColor: routeTileColor
                    }
                ] : [],
                ...extraRoutes ?? []
            ]
    }["HexMosaicMap.useMemo[routes]"], [
        route,
        routeProgress,
        routeTileColor,
        extraRoutes
    ]);
    /** je Route: Index der Waben entlang des Wegs (Zelle für Zelle) und die Punkte der Linie */ const routePaths = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HexMosaicMap.useMemo[routePaths]": ()=>{
            const index = new Map(cells.map({
                "HexMosaicMap.useMemo[routePaths]": (c, i)=>[
                        c,
                        i
                    ]
            }["HexMosaicMap.useMemo[routePaths]"]));
            return routes.filter({
                "HexMosaicMap.useMemo[routePaths]": (r)=>r.route.length >= 2
            }["HexMosaicMap.useMemo[routePaths]"]).map({
                "HexMosaicMap.useMemo[routePaths]": (r)=>{
                    const path = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$hexMosaic$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routeCells"])(cells, r.route).map({
                        "HexMosaicMap.useMemo[routePaths].path": (c)=>index.get(c)
                    }["HexMosaicMap.useMemo[routePaths].path"]);
                    return {
                        path,
                        progress: r.progress,
                        tileColor: r.tileColor,
                        points: path.map({
                            "HexMosaicMap.useMemo[routePaths]": (i)=>[
                                    cells[i].x,
                                    cells[i].y,
                                    0.01
                                ]
                        }["HexMosaicMap.useMemo[routePaths]"])
                    };
                }
            }["HexMosaicMap.useMemo[routePaths]"]);
        }
    }["HexMosaicMap.useMemo[routePaths]"], [
        routes,
        cells
    ]);
    const pinCells = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HexMosaicMap.useMemo[pinCells]": ()=>pins.map({
                "HexMosaicMap.useMemo[pinCells]": (pin)=>cells.findIndex({
                        "HexMosaicMap.useMemo[pinCells]": (c)=>c.col === pin.col && c.row === pin.row
                    }["HexMosaicMap.useMemo[pinCells]"])
            }["HexMosaicMap.useMemo[pinCells]"])
    }["HexMosaicMap.useMemo[pinCells]"], [
        pins,
        cells
    ]);
    const highlight = routeTileColor !== undefined || markColor !== undefined;
    // Zustand je Wabe (geschrieben / gewünscht) und die zuletzt geschriebenen
    // Farben: Instanzfarben nur bei Änderung neu, kein Anlegen je Frame
    const tint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const meshRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$animatable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimatedApply"])({
        "HexMosaicMap.useAnimatedApply": ()=>{
            const mesh = meshRef.current;
            if (!mesh) return;
            const shown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp01"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$animatable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveValue"])(reveal)) * (1 + SOFT);
            const n = cells.length;
            for(let i = 0; i < n; i++){
                const c = cells[i];
                const s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp01"])((shown - c.order / n) / SOFT);
                scratchPos.set(c.x, c.y, 0);
                scratchScale.setScalar(s);
                mesh.setMatrixAt(i, scratchMatrix.compose(scratchPos, scratchQuat, scratchScale));
            }
            mesh.instanceMatrix.needsUpdate = true;
            const mat = mesh.material;
            if (highlight) {
                // Farbe je Wabe über Instanzfarben; das Material bleibt weiß (multipliziert)
                const base = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$animatable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveValue"])(color);
                const crossed = routeTileColor === undefined ? base : (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$animatable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveValue"])(routeTileColor);
                const palette = [
                    base,
                    markColor === undefined ? base : (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$animatable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveValue"])(markColor),
                    // Kreuzung zweier Routen (ohne eigene Farbe: wie die erste Route)
                    routeOverlapColor === undefined ? crossed : (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$animatable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveValue"])(routeOverlapColor),
                    // je Route ihre eigene Füllung der überquerten Waben
                    ...routePaths.map({
                        "HexMosaicMap.useAnimatedApply": (r)=>r.tileColor === undefined ? crossed : (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$animatable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveValue"])(r.tileColor)
                    }["HexMosaicMap.useAnimatedApply"])
                ];
                if (tint.current?.mesh !== mesh) {
                    tint.current = {
                        mesh,
                        states: new Uint8Array(n).fill(255),
                        next: new Uint8Array(n),
                        palette: []
                    };
                }
                const { states, next } = tint.current;
                const recolor = palette.some({
                    "HexMosaicMap.useAnimatedApply.recolor": (c, i)=>tint.current?.palette[i] !== c
                }["HexMosaicMap.useAnimatedApply.recolor"]);
                tint.current.palette = palette;
                next.fill(BASE);
                routePaths.forEach({
                    "HexMosaicMap.useAnimatedApply": ({ path, progress }, routeIndex)=>{
                        const rp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp01"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$animatable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveValue"])(progress));
                        for(let k = 0; k < path.length; k++){
                            // gleich lange Schritte: Wabe k ist erreicht, sobald die Linie ihr Zentrum trifft
                            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$hexRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routeReached"])(rp, k, path.length)) continue;
                            // schon von einer anderen Route überquert: Kreuzung
                            next[path[k]] = next[path[k]] === BASE ? CROSSED + routeIndex : OVERLAP;
                        }
                    }
                }["HexMosaicMap.useAnimatedApply"]);
                // Start und Ziel nach den überquerten Waben setzen: sie bleiben markiert, auch wo sich Routen kreuzen
                for (const { path, progress } of routePaths){
                    const rp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp01"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$animatable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveValue"])(progress));
                    if (rp > 0) next[path[0]] = MARKED;
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$hexRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routeArrived"])(rp)) next[path[path.length - 1]] = MARKED;
                }
                const pp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$animatable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveValue"])(pinProgress);
                pinCells.forEach({
                    "HexMosaicMap.useAnimatedApply": (cell, i)=>{
                        if (cell >= 0 && pp > pinStart(i, pinCells.length)) next[cell] = MARKED;
                    }
                }["HexMosaicMap.useAnimatedApply"]);
                let dirty = false;
                for(let i = 0; i < n; i++){
                    if (!recolor && states[i] === next[i]) continue;
                    states[i] = next[i];
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$animatable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setColorCss"])(scratchColor, palette[next[i]]);
                    mesh.setColorAt(i, scratchColor);
                    dirty = true;
                }
                if (dirty && mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
                // Weiß = Instanzfarben ungefärbt durchreichen (keine sichtbare Farbe)
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$animatable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setColorCss"])(mat.color, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].WHITE);
            } else {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$animatable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setColorCss"])(mat.color, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$animatable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveValue"])(color));
            }
            const o = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$animatable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveValue"])(opacity);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$animatable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setOpacity"])(mat, o);
            mat.visible = o > 0;
        }
    }["HexMosaicMap.useAnimatedApply"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$animatable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDynamic"])(reveal, color, opacity, routeProgress, pinProgress, routeTileColor, markColor, routeOverlapColor) || (extraRoutes?.some({
        "HexMosaicMap.useAnimatedApply": (r)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$animatable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDynamic"])(r.progress, r.tileColor)
    }["HexMosaicMap.useAnimatedApply"]) ?? false), meshRef);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("instancedMesh", {
                ref: meshRef,
                args: [
                    geometry,
                    material,
                    cells.length
                ],
                frustumCulled: false
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Scene3D/Molecule/HexMosaicMap/HexMosaicMap.tsx",
                lineNumber: 230,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            outlineLoops.map((loop, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$StrokePath$2f$StrokePath$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StrokePath"], {
                    points: loop,
                    width: outlineWidth,
                    color: outlineColor,
                    progress: outlineProgress,
                    opacity: opacity
                }, i, false, {
                    fileName: "[project]/apps/web/src/app/components/Scene3D/Molecule/HexMosaicMap/HexMosaicMap.tsx",
                    lineNumber: 232,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))),
            routePaths.map((r, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$StrokePath$2f$StrokePath$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StrokePath"], {
                    renderOrder: 1,
                    points: r.points,
                    width: routeWidth,
                    color: routeColor,
                    progress: r.progress,
                    opacity: opacity
                }, i, false, {
                    fileName: "[project]/apps/web/src/app/components/Scene3D/Molecule/HexMosaicMap/HexMosaicMap.tsx",
                    lineNumber: 242,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))),
            pins.map((pin, i)=>{
                const [x, y] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$hexMosaic$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cellCenter"])(cells, pin.col, pin.row);
                const at = pinStart(i, pins.length);
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$AnimatedGroup$2f$AnimatedGroup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedGroup"], {
                    position: [
                        x,
                        y,
                        0.02
                    ],
                    scale: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp01"])(((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$animatable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveValue"])(pinProgress) - at) / 0.3),
                    visible: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$animatable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveValue"])(pinProgress) > at,
                    children: pin.children
                }, `${pin.col}-${pin.row}`, false, {
                    fileName: "[project]/apps/web/src/app/components/Scene3D/Molecule/HexMosaicMap/HexMosaicMap.tsx",
                    lineNumber: 248,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0));
            })
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Scene3D/Molecule/HexMosaicMap/HexMosaicMap.tsx",
        lineNumber: 229,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(HexMosaicMap, "vwK9jo/TuYzmw0eoaec9F4Q8RzQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$animatable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimatedApply"]
    ];
});
_c = HexMosaicMap;
const __TURBOPACK__default__export__ = HexMosaicMap;
var _c;
__turbopack_context__.k.register(_c, "HexMosaicMap");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Scene3D/Molecule/HexMosaicMap/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Molecule$2f$HexMosaicMap$2f$HexMosaicMap$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Molecule/HexMosaicMap/HexMosaicMap.tsx [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Scene3D/Molecule/HexRoute/HexRoute.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HexRoute",
    ()=>HexRoute,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/motion/easing.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$hexGeometry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/scene3d/hexGeometry.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$hexRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/scene3d/hexRoute.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$StrokePath$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Atom/StrokePath/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$StrokePath$2f$StrokePath$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Atom/StrokePath/StrokePath.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$animatable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/animatable.ts [app-client] (ecmascript)");
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
const scratchMatrix = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix4"]();
const scratchPos = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
const scratchQuat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"]();
const scratchScale = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
const scratchGround = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]();
const scratchRest = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]();
const scratchPulse = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]();
const scratchColor = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]();
const WHITE = '#ffffff';
/** Linie knapp über den Waben */ const LINE_Z = 0.01;
const HexRoute = ({ from, to, cellRadius, tileColor, groundColor, lineColor = WHITE, lineWidth = 0.035, progress, opacity = 1, tileOpacity = 1, line = true, pulseColor, pulsePhase = 0, name = 'hex-route' })=>{
    _s();
    const [fromCol, fromRow] = from;
    const [toCol, toRow] = to;
    const cells = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HexRoute.useMemo[cells]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$hexRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexLine"])({
                col: fromCol,
                row: fromRow
            }, {
                col: toCol,
                row: toRow
            })
    }["HexRoute.useMemo[cells]"], [
        fromCol,
        fromRow,
        toCol,
        toRow
    ]);
    const centers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HexRoute.useMemo[centers]": ()=>cells.map({
                "HexRoute.useMemo[centers]": ([col, row])=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$hexRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["latticeXY"])(col, row, cellRadius)
            }["HexRoute.useMemo[centers]"])
    }["HexRoute.useMemo[centers]"], [
        cells,
        cellRadius
    ]);
    const points = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HexRoute.useMemo[points]": ()=>centers.map({
                "HexRoute.useMemo[points]": ([x, y])=>[
                        x,
                        y,
                        LINE_Z
                    ]
            }["HexRoute.useMemo[points]"])
    }["HexRoute.useMemo[points]"], [
        centers
    ]);
    const geometry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HexRoute.useMemo[geometry]": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShapeGeometry"]((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$hexGeometry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexShape"])(cellRadius * __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$hexRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HEX_TILE_SHARE"], Math.PI / 6))
    }["HexRoute.useMemo[geometry]"], [
        cellRadius
    ]);
    const material = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HexRoute.useMemo[material]": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
                side: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DoubleSide"],
                transparent: true
            })
    }["HexRoute.useMemo[material]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HexRoute.useEffect": ()=>({
                "HexRoute.useEffect": ()=>geometry.dispose()
            })["HexRoute.useEffect"]
    }["HexRoute.useEffect"], [
        geometry
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HexRoute.useEffect": ()=>({
                "HexRoute.useEffect": ()=>material.dispose()
            })["HexRoute.useEffect"]
    }["HexRoute.useEffect"], [
        material
    ]);
    const meshRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$animatable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimatedApply"])({
        "HexRoute.useAnimatedApply": ()=>{
            const mesh = meshRef.current;
            if (!mesh) return;
            const p = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp01"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$animatable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveValue"])(progress));
            const steps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$hexRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routeSteps"])(p, centers.length);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$animatable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setColorCss"])(scratchGround, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$animatable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveValue"])(groundColor));
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$animatable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setColorCss"])(scratchRest, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$animatable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveValue"])(tileColor));
            const pulsing = pulseColor !== undefined;
            if (pulsing) (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$animatable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setColorCss"])(scratchPulse, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$animatable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveValue"])(pulseColor));
            const phase = pulsing ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$animatable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveValue"])(pulsePhase) : 0;
            for(let k = 0; k < centers.length; k++){
                // Deckung der Wabe: voll hinter der Front des Wegs, davor ausgefranst wie die Wabenränder der Seite
                const cover = p > 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$hexRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routeReveal"])(k, steps, cells[k]) * tileOpacity : 0;
                scratchPos.set(centers[k][0], centers[k][1], 0);
                scratchScale.setScalar(cover > 0 ? 1 : 1e-6);
                mesh.setMatrixAt(k, scratchMatrix.compose(scratchPos, scratchQuat, scratchScale));
                scratchColor.copy(scratchRest);
                if (pulsing) scratchColor.lerp(scratchPulse, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$hexRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routePulse"])(k, phase));
                // Deckung als Mischung mit dem Grund
                mesh.setColorAt(k, scratchColor.lerpColors(scratchGround, scratchColor, cover));
            }
            mesh.instanceMatrix.needsUpdate = true;
            if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
            const mat = mesh.material;
            // Weiß = Instanzfarben ungefärbt durchreichen
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$animatable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setColorCss"])(mat.color, WHITE);
            const o = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$animatable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveValue"])(opacity);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$animatable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setOpacity"])(mat, o);
            mat.visible = o > 0 && p > 0;
        }
    }["HexRoute.useAnimatedApply"], // der Puls wandert mit der Zeit, alles andere hängt am Fortschritt
    true, meshRef);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        name: name,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("instancedMesh", {
                ref: meshRef,
                name: `${name}-tiles`,
                args: [
                    geometry,
                    material,
                    centers.length
                ],
                frustumCulled: false
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Scene3D/Molecule/HexRoute/HexRoute.tsx",
                lineNumber: 133,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            line && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$StrokePath$2f$StrokePath$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StrokePath"], {
                renderOrder: 1,
                points: points,
                width: lineWidth,
                color: lineColor,
                progress: progress,
                opacity: opacity
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Scene3D/Molecule/HexRoute/HexRoute.tsx",
                lineNumber: 134,
                columnNumber: 16
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Scene3D/Molecule/HexRoute/HexRoute.tsx",
        lineNumber: 132,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(HexRoute, "whwnDZcRxmt4VzB7U2o0a4aaakU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$animatable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimatedApply"]
    ];
});
_c = HexRoute;
const __TURBOPACK__default__export__ = HexRoute;
var _c;
__turbopack_context__.k.register(_c, "HexRoute");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Scene3D/Molecule/HexRoute/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Molecule$2f$HexRoute$2f$HexRoute$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Molecule/HexRoute/HexRoute.tsx [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Scene3D/Molecule/MonitorFrame/MonitorFrame.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MonitorFrame",
    ()=>MonitorFrame,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$shapes2d$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/scene3d/shapes2d.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$StrokePath$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Atom/StrokePath/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$StrokePath$2f$StrokePath$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Atom/StrokePath/StrokePath.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$animatable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/animatable.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
/** Seite ein- oder ausblenden; beim Einblenden die Bausteine darin nachziehen */ const showSide = (side, show)=>{
    if (!side) return;
    if (show && !side.visible) {
        side.visible = true;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$animatable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reapplyAnimated"])(side);
    } else side.visible = show;
};
const MonitorFrame = ({ width, height, color, lineWidth, progress = 1, opacity = 1, flip = 0, front, back, position })=>{
    _s();
    const outer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MonitorFrame.useMemo[outer]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$shapes2d$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["roundedRectPoints"])(width, height, height * 0.06, 6)
    }["MonitorFrame.useMemo[outer]"], [
        width,
        height
    ]);
    const inset = width * 0.035;
    const inner = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MonitorFrame.useMemo[inner]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$shapes2d$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["roundedRectPoints"])(width - inset * 2, height - inset * 2, height * 0.03, 4)
    }["MonitorFrame.useMemo[inner]"], [
        width,
        height,
        inset
    ]);
    const standTop = -height / 2;
    const standBottom = standTop - height * 0.1;
    const neck = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MonitorFrame.useMemo[neck]": ()=>[
                [
                    0,
                    standTop,
                    0
                ],
                [
                    0,
                    standBottom,
                    0
                ]
            ]
    }["MonitorFrame.useMemo[neck]"], [
        standTop,
        standBottom
    ]);
    const foot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MonitorFrame.useMemo[foot]": ()=>[
                [
                    -width * 0.14,
                    standBottom,
                    0
                ],
                [
                    width * 0.14,
                    standBottom,
                    0
                ]
            ]
    }["MonitorFrame.useMemo[foot]"], [
        width,
        standBottom
    ]);
    const bodyRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const frontRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const backRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$animatable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimatedApply"])({
        "MonitorFrame.useAnimatedApply": ()=>{
            const f = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$animatable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveValue"])(flip);
            if (bodyRef.current) bodyRef.current.rotation.y = f * Math.PI;
            showSide(frontRef.current, f < 0.5);
            showSide(backRef.current, f >= 0.5);
        }
    }["MonitorFrame.useAnimatedApply"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$animatable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDynamic"])(flip), bodyRef);
    const innerOpacity = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$animatable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveValue"])(opacity) * 0.45;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        position: position,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                ref: bodyRef,
                name: "monitor-body",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$StrokePath$2f$StrokePath$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StrokePath"], {
                        points: outer,
                        width: lineWidth,
                        color: color,
                        progress: progress,
                        opacity: opacity
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Scene3D/Molecule/MonitorFrame/MonitorFrame.tsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$StrokePath$2f$StrokePath$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StrokePath"], {
                        points: inner,
                        width: lineWidth * 0.4,
                        color: color,
                        progress: progress,
                        opacity: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$animatable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDynamic"])(opacity) ? innerOpacity : innerOpacity()
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Scene3D/Molecule/MonitorFrame/MonitorFrame.tsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                        ref: frontRef,
                        name: "monitor-front",
                        children: front
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Scene3D/Molecule/MonitorFrame/MonitorFrame.tsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                        ref: backRef,
                        name: "monitor-back",
                        rotation: [
                            0,
                            Math.PI,
                            0
                        ],
                        children: back
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Scene3D/Molecule/MonitorFrame/MonitorFrame.tsx",
                        lineNumber: 98,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/components/Scene3D/Molecule/MonitorFrame/MonitorFrame.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$StrokePath$2f$StrokePath$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StrokePath"], {
                points: neck,
                width: lineWidth,
                color: color,
                progress: progress,
                opacity: opacity
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Scene3D/Molecule/MonitorFrame/MonitorFrame.tsx",
                lineNumber: 102,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$StrokePath$2f$StrokePath$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StrokePath"], {
                points: foot,
                width: lineWidth,
                color: color,
                progress: progress,
                opacity: opacity
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Scene3D/Molecule/MonitorFrame/MonitorFrame.tsx",
                lineNumber: 103,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Scene3D/Molecule/MonitorFrame/MonitorFrame.tsx",
        lineNumber: 85,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(MonitorFrame, "b7398a3Y+y/S2Fh0PNOa0556EpE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$animatable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimatedApply"]
    ];
});
_c = MonitorFrame;
const __TURBOPACK__default__export__ = MonitorFrame;
var _c;
__turbopack_context__.k.register(_c, "MonitorFrame");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Scene3D/Molecule/MonitorFrame/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Molecule$2f$MonitorFrame$2f$MonitorFrame$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Molecule/MonitorFrame/MonitorFrame.tsx [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Scene3D/Molecule/RankingBars/RankingBars.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RankingBars",
    ()=>RankingBars,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/motion/easing.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$ranking$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/scene3d/ranking.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$animatable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/animatable.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$litMaterial$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/litMaterial.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
const scratchMatrix = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix4"]();
const scratchPos = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
const scratchQuat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"]();
const scratchScale = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
const scratchColor = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]();
const RankingBars = ({ values, valuesTo, blend = 0, riseColor, fallColor, anchors, barWidth, gap, maxHeight, color, barColors, highlight = -1, highlightColor, pulse = 0, grow = 1, stagger, opacity = 1 })=>{
    _s();
    const perGroup = values[0]?.length ?? 0;
    const count = values.length * perGroup;
    // Quader mit etwas Tiefe, beleuchtet wie die Pellets (#1513)
    const geometry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "RankingBars.useMemo[geometry]": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BoxGeometry"](1, 1, 0.06).translate(0, 0.5, -0.03)
    }["RankingBars.useMemo[geometry]"], []);
    const material = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "RankingBars.useMemo[material]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$litMaterial$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createLitMaterial"])()
    }["RankingBars.useMemo[material]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RankingBars.useEffect": ()=>({
                "RankingBars.useEffect": ()=>geometry.dispose()
            })["RankingBars.useEffect"]
    }["RankingBars.useEffect"], [
        geometry
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RankingBars.useEffect": ()=>({
                "RankingBars.useEffect": ()=>material.dispose()
            })["RankingBars.useEffect"]
    }["RankingBars.useEffect"], [
        material
    ]);
    const meshRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const painted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Richtung je Gruppe: steigt der Mittelwert von values nach valuesTo?
    const rising = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "RankingBars.useMemo[rising]": ()=>values.map({
                "RankingBars.useMemo[rising]": (v, g)=>{
                    if (!valuesTo) return 0;
                    const sum = {
                        "RankingBars.useMemo[rising].sum": (a)=>a.reduce({
                                "RankingBars.useMemo[rising].sum": (x, y)=>x + y
                            }["RankingBars.useMemo[rising].sum"], 0)
                    }["RankingBars.useMemo[rising].sum"];
                    return Math.sign(sum(valuesTo[g]) - sum(v));
                }
            }["RankingBars.useMemo[rising]"])
    }["RankingBars.useMemo[rising]"], [
        values,
        valuesTo
    ]);
    const groupWidth = perGroup * barWidth + (perGroup - 1) * gap;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$animatable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimatedApply"])({
        "RankingBars.useAnimatedApply": ()=>{
            const mesh = meshRef.current;
            if (!mesh) return;
            const groupAnchors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$animatable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveValue"])(anchors);
            const phase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$animatable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveValue"])(pulse);
            const g = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$animatable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveValue"])(grow);
            const staggered = stagger === undefined ? undefined : (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$animatable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveValue"])(stagger);
            const o = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$animatable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveValue"])(opacity);
            const base = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$animatable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveValue"])(color);
            const hi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$animatable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveValue"])(highlight);
            const b = valuesTo ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$animatable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveValue"])(blend) : 0;
            for(let group = 0; group < values.length; group += 1){
                const anchor = groupAnchors[group];
                for(let bar = 0; bar < perGroup; bar += 1){
                    const i = group * perGroup + bar;
                    const v = values[group][bar] + (valuesTo ? (valuesTo[group][bar] - values[group][bar]) * b : 0);
                    const own = staggered === undefined ? 1 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_OUT"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp01"])(staggered - bar));
                    const h = Math.max(0.0001, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$ranking$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pulsedHeight"])(v * maxHeight, phase, bar * 0.9 + group) * g * own);
                    scratchPos.set(anchor[0] - groupWidth / 2 + barWidth / 2 + bar * (barWidth + gap), anchor[1], anchor[2]);
                    // ein Balken, der noch nicht dran ist, hat auch keine Breite — sonst stünde seine Grundfläche als Strich da
                    if (own > 0) scratchScale.set(barWidth, h, 1);
                    else scratchScale.setScalar(0.0001);
                    mesh.setMatrixAt(i, scratchMatrix.compose(scratchPos, scratchQuat, scratchScale));
                }
            }
            mesh.instanceMatrix.needsUpdate = true;
            // Während sich die Werte ändern, färben sich steigende und fallende Gruppen (#1513)
            const changing = b > 0 && b < 1 && !!(riseColor || fallColor);
            const p = painted.current;
            if (!p || p.highlight !== hi || p.color !== base || p.changing !== changing) {
                for(let i = 0; i < count; i += 1){
                    const group = Math.floor(i / perGroup);
                    const fixed = barColors?.[i % perGroup];
                    if (fixed) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$animatable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setColorCss"])(scratchColor, fixed);
                        mesh.setColorAt(i, scratchColor);
                        continue;
                    }
                    const dir = rising[group];
                    const tint = changing ? dir > 0 ? riseColor : dir < 0 ? fallColor : undefined : undefined;
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$animatable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setColorCss"])(scratchColor, tint ?? (group === hi ? highlightColor : base));
                    mesh.setColorAt(i, scratchColor);
                }
                if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
                painted.current = {
                    highlight: hi,
                    color: base,
                    changing
                };
            }
            const mat = mesh.material;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$animatable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setOpacity"])(mat, o);
            mat.visible = o > 0;
            mesh.castShadow = o >= __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$animatable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHADOW_OPACITY"];
        }
    }["RankingBars.useAnimatedApply"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$animatable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDynamic"])(anchors, pulse, grow, stagger, opacity, color, highlight, blend), meshRef);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("instancedMesh", {
        ref: meshRef,
        args: [
            geometry,
            material,
            count
        ],
        frustumCulled: false,
        castShadow: true
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Scene3D/Molecule/RankingBars/RankingBars.tsx",
        lineNumber: 158,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
_s(RankingBars, "K5BnVubDLoZKaJJuRWshFEbCf4o=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$animatable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimatedApply"]
    ];
});
_c = RankingBars;
const __TURBOPACK__default__export__ = RankingBars;
var _c;
__turbopack_context__.k.register(_c, "RankingBars");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Scene3D/Molecule/RankingBars/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Molecule$2f$RankingBars$2f$RankingBars$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Molecule/RankingBars/RankingBars.tsx [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Scene3D/Molecule/Seal/Seal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Seal",
    ()=>Seal,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/motion/easing.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$hexGeometry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/scene3d/hexGeometry.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$seal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/scene3d/seal.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$AnimatedGroup$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Atom/AnimatedGroup/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$AnimatedGroup$2f$AnimatedGroup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Atom/AnimatedGroup/AnimatedGroup.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$StrokePath$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Atom/StrokePath/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$StrokePath$2f$StrokePath$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Atom/StrokePath/StrokePath.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$animatable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/animatable.ts [app-client] (ecmascript)");
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
const Seal = ({ radius, progress, color, accentColor, lineWidth, opacity = 1, children })=>{
    _s();
    const outer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Seal.useMemo[outer]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$hexGeometry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexOutlinePoints"])(radius, true, Math.PI / 6)
    }["Seal.useMemo[outer]"], [
        radius
    ]);
    const inner = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Seal.useMemo[inner]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$hexGeometry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexOutlinePoints"])(radius * 0.82, true, Math.PI / 6)
    }["Seal.useMemo[inner]"], [
        radius
    ]);
    const ring = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp01"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$animatable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveValue"])(progress) / 0.55);
    const innerRing = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp01"])(((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$animatable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveValue"])(progress) - 0.2) / 0.45);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$StrokePath$2f$StrokePath$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StrokePath"], {
                points: outer,
                width: lineWidth,
                color: color,
                progress: ring,
                opacity: opacity
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Scene3D/Molecule/Seal/Seal.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$StrokePath$2f$StrokePath$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StrokePath"], {
                points: inner,
                width: lineWidth * 0.6,
                color: accentColor,
                progress: innerRing,
                opacity: opacity
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Scene3D/Molecule/Seal/Seal.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$AnimatedGroup$2f$AnimatedGroup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedGroup"], {
                name: "seal-core",
                scale: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$seal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sealScale"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$animatable$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveValue"])(progress)),
                children: children
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Scene3D/Molecule/Seal/Seal.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Scene3D/Molecule/Seal/Seal.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Seal, "y2F8K/4T5PaO5lxWRGttJUWUzRU=");
_c = Seal;
const __TURBOPACK__default__export__ = Seal;
var _c;
__turbopack_context__.k.register(_c, "Seal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Scene3D/Molecule/Seal/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Molecule$2f$Seal$2f$Seal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Molecule/Seal/Seal.tsx [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/FilmStage.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FilmStage",
    ()=>FilmStage,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$b389eeca$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-b389eeca.esm.js [app-client] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$b389eeca$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-b389eeca.esm.js [app-client] (ecmascript) <export C as useThree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$shaderWarmup$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/shaderWarmup.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$LightRig$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Atom/LightRig/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$LightRig$2f$LightRig$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Atom/LightRig/LightRig.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$FilmTimeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/FilmTimeContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$Beat0$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/Beat0.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$BeatW$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/BeatW.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$Beat1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/Beat1.tsx [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$Beat1Stream$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/Beat1Stream.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$BeatM$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/BeatM.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$Beat2$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/Beat2.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$Beat3$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/Beat3.tsx [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$Beat4$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/Beat4.tsx [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$Beat5$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/Beat5.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$Beat6$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/Beat6.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$Beat7$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/Beat7.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$BeatS$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/BeatS.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$Beat8$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/Beat8.tsx [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$PortalMonitor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/PortalMonitor.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$FilmCamera$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/FilmCamera.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/scenes/layout.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/theme.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$slides$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/scenes/slides.ts [app-client] (ecmascript)");
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
/** Rückwand für Schatten: dicht hinter z = 0 (kurzer Versatz), größer als jedes Bühnenfenster */ const SHADOW_PLANE = {
    position: [
        0,
        0,
        -0.14
    ],
    size: [
        60,
        40
    ]
};
/** Schatten im dunklen Markenblau der Seite (Theme site.blueDark) */ const SHADOW_COLOR = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["themePlastship"].palette.site.blueDark;
/**
 * Unsichtbare Rückwand, die nur Schatten zeigt. Die Stärke setzt der
 * Organismus je Frame in `shadowRef` — im Wabenwischer folgt sie dem
 * Fortschritt, sonst verlöre ein weitergegebenes Motiv seinen Schatten (#1513).
 */ const ShadowCatcher = ({ shadowRef })=>{
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$b389eeca$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "ShadowCatcher.useFrame": ()=>{
            const mat = ref.current;
            if (!mat) return;
            const o = shadowRef?.current ?? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$slides$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHADOW_OF_SLIDE"].white;
            if (mat.opacity !== o) mat.opacity = o;
        }
    }["ShadowCatcher.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
        name: "shadow-catcher",
        position: SHADOW_PLANE.position,
        receiveShadow: true,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("planeGeometry", {
                args: SHADOW_PLANE.size
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/FilmStage.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("shadowMaterial", {
                ref: ref,
                transparent: true,
                color: SHADOW_COLOR,
                opacity: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$slides$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHADOW_OF_SLIDE"].primary
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/FilmStage.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/FilmStage.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ShadowCatcher, "8QVLrcMdYxPUkj6ry5zpyt6J6X8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$b389eeca$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c = ShadowCatcher;
/** Wurzeln der Beats, deren Puffer vor dem Start hochgeladen werden */ const PRERENDER = [
    'b0',
    'bw',
    'b1',
    'bm',
    'b2',
    'b3',
    'b4',
    'b5',
    'b6',
    'b7',
    'bs',
    'b8',
    'portal-monitor'
];
const NO_BLEED = {
    x: 0,
    y: 0
};
const FilmStage = ({ timeRef, colors, playing = true, slides = false, onReady, shadowRef, bleed = NO_BLEED, chargeSlideRef })=>{
    _s1();
    const gl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$b389eeca$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])({
        "FilmStage.useThree[gl]": (st)=>st.gl
    }["FilmStage.useThree[gl]"]);
    const scene = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$b389eeca$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])({
        "FilmStage.useThree[scene]": (st)=>st.scene
    }["FilmStage.useThree[scene]"]);
    const camera = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$b389eeca$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])({
        "FilmStage.useThree[camera]": (st)=>st.camera
    }["FilmStage.useThree[camera]"]);
    const invalidate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$b389eeca$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])({
        "FilmStage.useThree[invalidate]": (st)=>st.invalidate
    }["FilmStage.useThree[invalidate]"]);
    // Format aus der Größe der Bühne (Canvas ohne Überstand): nur bei Größenwechsel neu (#1497)
    const size = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$b389eeca$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])({
        "FilmStage.useThree[size]": (st)=>st.size
    }["FilmStage.useThree[size]"]);
    const stageHeight = Math.max(1, size.height - 2 * bleed.y);
    const aspect = Math.max(1, size.width - 2 * bleed.x) / stageHeight;
    const layout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stageLayout"])(aspect);
    // Der Blickwinkel gilt für die Canvas-Höhe: mit Überstand zoomt die Kamera so weit
    // heraus, dass die Bühne ihren Maßstab behält und darüber und darunter mehr Welt zu sehen ist
    const zoom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stageZoom"])(aspect) * (stageHeight / Math.max(1, size.height));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FilmStage.useEffect": ()=>{
            let cancelled = false;
            // Alle Shader-Varianten vor dem Start übersetzen: sonst ruckelt es, wenn
            // mitten im Film ein Material erstmals gezeichnet wird (#1496)
            // Dazu die verborgenen Beats einmal vorab zeichnen: sonst lädt three ihre
            // Puffer erst am Schnitt hoch (49 ms bei 6,0 s, #1497)
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$shaderWarmup$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["warmUpShaders"])(gl, scene, camera, {
                prerender: PRERENDER
            }).finally({
                "FilmStage.useEffect": ()=>{
                    if (!cancelled) onReady?.(invalidate);
                }
            }["FilmStage.useEffect"]);
            return ({
                "FilmStage.useEffect": ()=>{
                    cancelled = true;
                }
            })["FilmStage.useEffect"];
        }
    }["FilmStage.useEffect"], [
        gl,
        scene,
        camera,
        invalidate,
        onReady
    ]);
    // Farbwechsel (Theme) und Formatwechsel bei stehendem Takt sichtbar machen
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FilmStage.useEffect": ()=>{
            invalidate();
        }
    }["FilmStage.useEffect"], [
        colors,
        layout,
        zoom,
        invalidate
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$FilmTimeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FilmTimeProvider"], {
        timeRef: timeRef,
        colors: colors,
        playing: playing,
        slides: slides,
        layout: layout,
        zoom: zoom,
        chargeSlideRef: chargeSlideRef,
        children: [
            !slides && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("color", {
                attach: "background",
                args: [
                    colors.background
                ]
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/FilmStage.tsx",
                lineNumber: 153,
                columnNumber: 19
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$LightRig$2f$LightRig$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LightRig"], {
                preset: "stage",
                shadows: layout === 'landscape'
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/FilmStage.tsx",
                lineNumber: 156,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShadowCatcher, {
                shadowRef: shadowRef
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/FilmStage.tsx",
                lineNumber: 157,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$FilmCamera$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FilmCamera"], {}, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/FilmStage.tsx",
                lineNumber: 158,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$Beat0$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Beat0"], {}, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/FilmStage.tsx",
                lineNumber: 159,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$BeatW$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BeatW"], {}, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/FilmStage.tsx",
                lineNumber: 160,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$Beat1Stream$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Beat1Stream"], {}, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/FilmStage.tsx",
                lineNumber: 161,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$Beat1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Beat1"], {}, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/FilmStage.tsx",
                lineNumber: 162,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$BeatM$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BeatM"], {}, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/FilmStage.tsx",
                lineNumber: 163,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$Beat2$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Beat2"], {}, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/FilmStage.tsx",
                lineNumber: 164,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$Beat3$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Beat3"], {}, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/FilmStage.tsx",
                lineNumber: 165,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$Beat4$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Beat4"], {}, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/FilmStage.tsx",
                lineNumber: 166,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$Beat5$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Beat5"], {}, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/FilmStage.tsx",
                lineNumber: 167,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$Beat6$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Beat6"], {}, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/FilmStage.tsx",
                lineNumber: 168,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$PortalMonitor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PortalMonitor"], {}, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/FilmStage.tsx",
                lineNumber: 169,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$Beat7$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Beat7"], {}, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/FilmStage.tsx",
                lineNumber: 170,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$BeatS$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BeatS"], {}, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/FilmStage.tsx",
                lineNumber: 171,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$Beat8$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Beat8"], {}, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/FilmStage.tsx",
                lineNumber: 172,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/FilmStage.tsx",
        lineNumber: 142,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(FilmStage, "XlXY8wlOkXTxgy7grCS3s+tYWlU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$b389eeca$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$b389eeca$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$b389eeca$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$b389eeca$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$b389eeca$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"]
    ];
});
_c1 = FilmStage;
const __TURBOPACK__default__export__ = FilmStage;
var _c, _c1;
__turbopack_context__.k.register(_c, "ShadowCatcher");
__turbopack_context__.k.register(_c1, "FilmStage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/FilmTimeContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FilmTimeProvider",
    ()=>FilmTimeProvider,
    "useFilm",
    ()=>useFilm,
    "useFilmValue",
    ()=>useFilmValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$b389eeca$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-b389eeca.esm.js [app-client] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/motion/timeline.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$film$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/scenes/film.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$slides$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/scenes/slides.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const FilmTimeContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
const TRACKS = new Map(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$film$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FILM"].tracks.map((t)=>[
        t.id,
        t
    ]));
const FilmTimeProvider = ({ timeRef, colors, playing = true, slides = false, layout = 'landscape', zoom = 1, chargeSlideRef, children })=>{
    _s();
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "FilmTimeProvider.useMemo[value]": ()=>({
                timeRef,
                colors,
                playing,
                slides,
                layout,
                zoom,
                chargeSlideRef
            })
    }["FilmTimeProvider.useMemo[value]"], [
        timeRef,
        colors,
        playing,
        slides,
        layout,
        zoom,
        chargeSlideRef
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FilmTimeContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/FilmTimeContext.tsx",
        lineNumber: 47,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
_s(FilmTimeProvider, "tPauEVZ6EeuERV9ttvKTwQ7++Gw=");
_c = FilmTimeProvider;
const useFilmTime = ()=>{
    _s1();
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(FilmTimeContext);
    if (!ctx) throw new Error('useFilm braucht einen FilmTimeProvider');
    return ctx;
};
_s1(useFilmTime, "/dMy7t63NXD4eYACoT93CePwGrg=");
const useFilm = ()=>{
    _s2();
    const { timeRef, colors, playing = true, slides = false, layout = 'landscape', zoom = 1, chargeSlideRef } = useFilmTime();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useFilm.useMemo": ()=>{
            const f = {
                "useFilm.useMemo.f": (id)=>({
                        "useFilm.useMemo.f": ()=>{
                            const track = TRACKS.get(id);
                            if (!track) throw new Error(`Unbekannte Spur im Drehbuch: ${id}`);
                            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sample"])(track, timeRef.current);
                        }
                    })["useFilm.useMemo.f"]
            }["useFilm.useMemo.f"];
            const now = {
                "useFilm.useMemo.now": ()=>timeRef.current
            }["useFilm.useMemo.now"];
            const between = {
                "useFilm.useMemo.between": (from, to)=>({
                        "useFilm.useMemo.between": ()=>timeRef.current >= from && timeRef.current < to
                    })["useFilm.useMemo.between"]
            }["useFilm.useMemo.between"];
            /** Läuft gerade dieser Beat? Zeiten aus dem Drehbuch; der letzte Beat gilt bis einschließlich Filmende (Schlussbild) */ const inBeat = {
                "useFilm.useMemo.inBeat": (id)=>{
                    const beat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$film$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["beatOf"])(id);
                    const last = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$film$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SCENES"][__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$film$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SCENES"].length - 1] === beat;
                    return ({
                        "useFilm.useMemo.inBeat": ()=>timeRef.current >= beat.from && (last ? timeRef.current <= beat.to : timeRef.current < beat.to)
                    })["useFilm.useMemo.inBeat"];
                }
            }["useFilm.useMemo.inBeat"];
            /** Farben eines Beats: mit Folien die seiner Folie, sonst das Schema des Bands */ const colorsFor = {
                "useFilm.useMemo.colorsFor": (beatId)=>slides ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$slides$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["beatColors"])(beatId) : colors
            }["useFilm.useMemo.colorsFor"];
            const portrait = layout === 'portrait';
            // ohne Folien (Film auf festem Band): heller Grund, Rand in der Akzentfarbe des Schemas
            const fixedLook = {
                plate: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$slides$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHARGE_LOOK"].primary.plate,
                border: colors.secondary
            };
            /** Aussehen der Charge auf dem Grund, auf dem sie gerade steht (#1513) */ const chargeLook = {
                "useFilm.useMemo.chargeLook": ()=>slides ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$slides$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHARGE_LOOK"][chargeSlideRef?.current ?? 'primary'] : fixedLook
            }["useFilm.useMemo.chargeLook"];
            return {
                f,
                now,
                between,
                inBeat,
                colors,
                colorsFor,
                chargeLook,
                slides,
                playing,
                layout,
                portrait,
                zoom
            };
        }
    }["useFilm.useMemo"], [
        timeRef,
        colors,
        playing,
        slides,
        layout,
        zoom,
        chargeSlideRef
    ]);
};
_s2(useFilm, "Udctv0pCwh9mGLMXvi0vFQwt6vY=", false, function() {
    return [
        useFilmTime
    ];
});
const useFilmValue = (id)=>{
    _s3();
    const { f } = useFilm();
    const read = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useFilmValue.useMemo[read]": ()=>f(id)
    }["useFilmValue.useMemo[read]"], [
        f,
        id
    ]);
    const [value, setValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(read);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$b389eeca$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "useFilmValue.useFrame": ()=>{
            const next = read();
            if (next !== value) setValue(next);
        }
    }["useFilmValue.useFrame"]);
    return value;
};
_s3(useFilmValue, "5hsVHH4k3odW/ntQicCm5O2prhU=", false, function() {
    return [
        useFilm,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$b389eeca$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
var _c;
__turbopack_context__.k.register(_c, "FilmTimeProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/icons.generated.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* Generiert von filmIcons.sync.test.tsx (WRITE_FILM_ICONS=1) — nicht von Hand ändern (#1497) */ __turbopack_context__.s([
    "GENERATED_FILM_ICONS",
    ()=>GENERATED_FILM_ICONS
]);
const GENERATED_FILM_ICONS = {
    /** IconPlastrack */ pallet: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\"><g fill=\"currentColor\" stroke-linecap=\"square\" stroke-linejoin=\"miter\"><path d=\"M12 2V12\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\"></path><path d=\"M18 7L6 7\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\"></path><path d=\"M10 20V21H14V20\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\"></path><path d=\"M1 16H23\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\"></path><path d=\"M19 20V21H23V15L21.74 12\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\"></path><path d=\"M5 20V21H1V15L2.26 12\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\"></path><rect x=\"6\" y=\"2\" width=\"12\" height=\"10\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\" stroke-linecap=\"butt\"></rect></g></svg>",
    /** IconProductionSite */ factory: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\"><g fill=\"currentColor\" stroke-linecap=\"square\" stroke-linejoin=\"miter\" stroke-miterlimit=\"10\"><path d=\"M14.5 11L14.5 14L21 11V21H8V14L14.5 11Z\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\"></path><path d=\"M4 5C4 2.79067 6.12053 1 8.73684 1C10.24 1 11.5774 1.59333 12.445 2.51533C13.1413 1.99333 14.0484 1.66667 15.0526 1.66667C17.2324 1.66667 19 3.15933 19 5H16\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\"></path><path d=\"M3 21H8V9H4L3 21Z\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\"></path><path d=\"M17 17H16.99\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\"></path></g></svg>",
    /** IconRecyclateQualityGrade */ grade: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\"><g fill=\"none\" stroke-linecap=\"square\" stroke-linejoin=\"miter\" stroke-miterlimit=\"10\"><path d=\"M14 9.23279V14L16.5 13L19 14V9.23279\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\" stroke-linecap=\"butt\"></path><path d=\"M3 12L3 4C3 2.89543 3.89543 2 5 2L8.5 2\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\"></path><path d=\"M22 18L22 20C22 21.1046 21.1046 22 20 22L5.5 22\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\" stroke-linecap=\"butt\"></path><path d=\"M22 18L8 18L8 19.5C8 20.8807 6.88071 22 5.5 22V22C4.11929 22 3 20.8807 3 19.5L3 12\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\"></path><path d=\"M16.5 10C18.9853 10 21 7.98528 21 5.5C21 3.01472 18.9853 1 16.5 1C14.0147 1 12 3.01472 12 5.5C12 7.98528 14.0147 10 16.5 10Z\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\"></path></g></svg>",
    /** IconMaterialAnalysis */ analysis: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\"><g fill=\"currentColor\" stroke-linecap=\"square\" stroke-linejoin=\"miter\"><path d=\"M15 11.2321L14 9.5L14.185 9.82035\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"></path><path d=\"M4 17V17C2.38126 14.6981 3.06325 11.5055 5.48124 10.0659L14.2473 4.84676\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"butt\" stroke-width=\"2\"></path><path d=\"M21 21.5H3\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"></path><path d=\"M12 10.9282L8.5 4.86603C8.22386 4.38773 8.38773 3.77614 8.86603 3.5L11.4641 2C11.9424 1.72386 12.554 1.88773 12.8301 2.36603L16.3301 8.4282L12 10.9282Z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"></path><path d=\"M14.0096 16.5L19.3301 13.4282\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"></path><path d=\"M3 21.5V19.5C3 17.8431 4.34315 16.5 6 16.5V16.5C7.65685 16.5 9 17.8431 9 19.5V21.5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"></path></g></svg>",
    /** IconFileChartBar */ datasheet: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\"><g fill=\"currentColor\" stroke-linecap=\"square\" stroke-linejoin=\"miter\" stroke-miterlimit=\"10\"><path d=\"M20 10V4C20 2.89543 19.1046 2 18 2H11.0784C10.548 2 10.0393 2.21071 9.66421 2.58579L4.58579 7.66421C4.21071 8.03929 4 8.54799 4 9.07843L4 20C4 21.1046 4.89543 22 6 22H9\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\"></path><path d=\"M4 9H11V2\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\" stroke-linecap=\"butt\"></path><path d=\"M17 14V22\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\"></path><path d=\"M21 17V22\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\"></path><path d=\"M13 19V22\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\"></path></g></svg>",
    /** IconQrCode */ qr: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\"><g fill=\"currentColor\" stroke-linecap=\"square\" stroke-linejoin=\"miter\"><rect x=\"3\" y=\"3\" width=\"7\" height=\"7\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\" stroke-linecap=\"butt\"></rect><rect x=\"14\" y=\"3\" width=\"7\" height=\"7\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\" stroke-linecap=\"butt\"></rect><rect x=\"3\" y=\"14\" width=\"7\" height=\"7\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\" stroke-linecap=\"butt\"></rect><path d=\"M14 14H18M19 14V19H21M19 14H21M19 14H18M18 14V16H16\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\"></path><path d=\"M14 18V21H17\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\"></path><path d=\"M6.5 6.5H6.51\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\"></path><path d=\"M6.5 17.5H6.51\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\"></path><path d=\"M17.49 6.5H17.5\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\"></path></g></svg>",
    /** IconScan */ scan: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\"><g fill=\"currentColor\" stroke-linecap=\"square\" stroke-linejoin=\"miter\" stroke-miterlimit=\"10\"><path d=\"M3 8V5C3 3.89543 3.89543 3 5 3H8\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\"></path><path d=\"M16 3H19C20.1046 3 21 3.89543 21 5V8\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\"></path><path d=\"M21 16V19C21 20.1046 20.1046 21 19 21H16\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\"></path><path d=\"M8 21H5C3.89543 21 3 20.1046 3 19V16\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\"></path><path d=\"M23.005 11.995L1.005 11.995\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\"></path></g></svg>",
    /** IconVerification */ verified: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><g fill=\"currentColor\" stroke-linecap=\"square\" stroke-linejoin=\"miter\" stroke-miterlimit=\"10\"><path d=\"m22,12c0-1.476-.931-2.725-2.233-3.217.572-1.269.348-2.811-.695-3.854s-2.585-1.269-3.854-.695c-.492-1.304-1.742-2.233-3.217-2.233s-2.725.931-3.217,2.233c-1.269-.574-2.811-.348-3.854.695-1.043,1.043-1.268,2.585-.695,3.854-1.304.492-2.233,1.742-2.233,3.217s.931,2.725,2.233,3.217c-.572,1.269-.348,2.811.695,3.854,1.043,1.043,2.585,1.269,3.854.695.492,1.304,1.742,2.233,3.217,2.233s2.725-.931,3.217-2.233c1.269.572,2.811.348,3.854-.695s1.269-2.585.695-3.854c1.304-.492,2.233-1.742,2.233-3.217Z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"></path><polyline points=\"8 12.5 10.5 15 16 9\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"></polyline></g></svg>",
    /** IconAI */ ai: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\"><g fill=\"currentColor\" stroke-linecap=\"square\" stroke-linejoin=\"miter\" stroke-miterlimit=\"10\"><path d=\"M7.5 8.5L5 11H1.70938\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\" stroke-linecap=\"butt\"></path><path d=\"M3 17L6 14H11\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\" stroke-linecap=\"butt\"></path><path d=\"M7.50074 22V20L5.86923 19.1102C3.46042 17.7965 1.8929 15.34 1.71625 12.6019L1.68026 12.044C1.31186 6.33389 5.84394 1.5 11.5659 1.5V1.5C16.2978 1.5 20.2054 5.19653 20.4678 9.92106L20.5 10.5L22.7242 14.5036C22.8705 14.767 22.7525 15.0989 22.4727 15.2107L20.7153 15.9132L20.2252 19.3988C20.0938 20.3327 19.3279 21.048 18.3872 21.1152L13 21.5L12.6 20\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\"></path><path d=\"M13 16C14.1046 16 15 15.1046 15 14C15 12.8954 14.1046 12 13 12C11.8954 12 11 12.8954 11 14C11 15.1046 11.8954 16 13 16Z\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\"></path><path d=\"M8 9C8.55228 9 9 8.55228 9 8C9 7.44772 8.55228 7 8 7C7.44772 7 7 7.44772 7 8C7 8.55228 7.44772 9 8 9Z\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\"></path></g></svg>",
    /** IconCompanyCertificate */ certificate: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\"><g fill=\"currentColor\" stroke-linecap=\"square\" stroke-linejoin=\"miter\" stroke-miterlimit=\"10\"><path d=\"M22 7V4H2V20H12\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\"></path><path d=\"M21 18.5L22 23L19 23L16 23L17 18.5\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\" stroke-linecap=\"butt\"></path><path d=\"M19 19C21.2091 19 23 17.2091 23 15C23 12.7909 21.2091 11 19 11C16.7909 11 15 12.7909 15 15C15 17.2091 16.7909 19 19 19Z\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\"></path><path d=\"M12 9L7 9\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\"></path><path d=\"M9 13L7 13\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\"></path></g></svg>",
    /** IconServer */ server: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><g fill=\"currentColor\"><path d=\"M21 14H3V21H21V14Z\" stroke=\"currentColor\" stroke-width=\"2\" stroke-miterlimit=\"10\" stroke-linecap=\"square\" fill=\"none\"></path><path d=\"M21 3H3V10H21V3Z\" stroke=\"currentColor\" stroke-width=\"2\" stroke-miterlimit=\"10\" stroke-linecap=\"square\" fill=\"none\"></path><path d=\"M17 6.5V6.49\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"square\" fill=\"none\"></path><path d=\"M13 6.5V6.49\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"square\" fill=\"none\"></path><path d=\"M17 17.5V17.49\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"square\" fill=\"none\"></path><path d=\"M13 17.5V17.49\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"square\" fill=\"none\"></path></g></svg>",
    /** IconRecycle */ recycle: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><g fill=\"currentColor\" stroke-linecap=\"square\" stroke-linejoin=\"miter\" stroke-miterlimit=\"10\"><path d=\"M20.1467 15L22.1465 18.5044C22.5269 19.171 22.0455 20 21.278 20H12H12.55\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\"></path><path d=\"M6.29511 11.1887L6.40852 11L1.91049 18.4849C1.50995 19.1514 1.99002 20 2.76762 20H7\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\"></path><path d=\"M16.6755 10.4375L17 11L15.6535 8.66551L12.675 3.50177C12.2902 2.83463 11.3273 2.83463 10.9425 3.50177L9 6.8695\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\"></path><path d=\"M3.32578 11.8787L6.22354 11.1022L6.99998 14\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\"></path><path d=\"M17.7765 8.10224L17 11L14.1022 10.2235\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\"></path><path d=\"M14.1213 22.1213L12 20L14.1213 17.8787\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\"></path></g></svg>",
    /** IconSort */ sort: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\"><g fill=\"currentColor\"><path d=\"M18 3V21V20\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"square\" fill=\"none\"></path><path d=\"M3 8H10\" stroke=\"currentColor\" stroke-width=\"2\" stroke-miterlimit=\"10\" stroke-linecap=\"square\" fill=\"none\"></path><path d=\"M3 13H7\" stroke=\"currentColor\" stroke-width=\"2\" stroke-miterlimit=\"10\" stroke-linecap=\"square\" fill=\"none\"></path><path d=\"M3 3H13\" stroke=\"currentColor\" stroke-width=\"2\" stroke-miterlimit=\"10\" stroke-linecap=\"square\" fill=\"none\"></path><path d=\"M3 18H4\" stroke=\"currentColor\" stroke-width=\"2\" stroke-miterlimit=\"10\" stroke-linecap=\"square\" fill=\"none\"></path><path d=\"M22.5 16.5L18 21L13.5 16.5\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"square\" fill=\"none\"></path></g></svg>",
    /** IconRestore */ restore: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\"><g fill=\"currentColor\"><path d=\"M11.7568 1C5.79315 1.00021 1 5.94835 1 12C1 18.0516 5.79315 22.9998 11.7568 23C16.0561 22.9998 19.7479 20.4235 21.4717 16.7227L19.7617 15.6543C18.3939 18.8149 15.3143 20.9998 11.7568 21C6.94386 20.9998 3 16.9938 3 12C3 7.00621 6.94386 3.00021 11.7568 3C14.6106 3.00015 17.1535 4.40307 18.7568 6.59082L18.7676 6.60547L18.7783 6.61914L20.1562 8.36621L20.9414 7.74609L21.7266 7.12695L20.3486 5.38086C18.3908 2.72718 15.2743 1.00015 11.7568 1Z\" fill=\"currentColor\" stroke=\"none\"></path><path d=\"M21.5 4V8H17.5\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"square\" fill=\"none\"></path><path d=\"M8 11.9999L16 12\" stroke=\"currentColor\" stroke-width=\"2\" stroke-miterlimit=\"10\" stroke-linecap=\"square\" fill=\"none\"></path><path d=\"M12 8V16\" stroke=\"currentColor\" stroke-width=\"2\" stroke-miterlimit=\"10\" stroke-linecap=\"square\" fill=\"none\"></path></g></svg>",
    /** IconMedal */ medal: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\"><g fill=\"currentColor\" stroke-linecap=\"square\" stroke-linejoin=\"miter\" stroke-miterlimit=\"10\"><path d=\"M10.1046 8.24312L8 3H3.5V3.5L6.41186 10.7406\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\" stroke-linecap=\"butt\"></path><path d=\"M13.9003 8.24312L16 3H20.5V3.5L17.5738 10.8174\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\" stroke-linecap=\"butt\"></path><path d=\"M12 22C15.866 22 19 18.866 19 15C19 11.134 15.866 8 12 8C8.13401 8 5 11.134 5 15C5 18.866 8.13401 22 12 22Z\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\"></path><path d=\"M12 18C13.6569 18 15 16.6569 15 15C15 13.3431 13.6569 12 12 12C10.3431 12 9 13.3431 9 15C9 16.6569 10.3431 18 12 18Z\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\"></path></g></svg>",
    /** IconHandshake */ handshake: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\"><g fill=\"currentColor\"><path d=\"M13.5 9.5L9 13L7 11L12 4.5L18 6.00001H23V15H21\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"square\" fill=\"none\"></path><path d=\"M5.51855 8H2V15H3.86621L4.14551 15.2363L10.0547 20.2363L16 16.04V14.7188L13.9121 12.9785L15.457 11.7773L15.5283 11.7217L17.6406 13.4814L18 13.7812V17.0771L17.5771 17.376L10.5771 22.3174L9.94434 22.7627L9.35449 22.2637L3.13379 17H0V6H7.05664L5.51855 8Z\" fill=\"currentColor\" stroke=\"none\"></path></g></svg>",
    /** IconTeam */ team: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\"><g fill=\"currentColor\"><path d=\"M6 13V10V10.5\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"square\" fill=\"none\"></path><path d=\"M18 13V10V10.5\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"square\" fill=\"none\"></path><path d=\"M20 5C20 6.10457 19.1046 7 18 7C16.8954 7 16 6.10457 16 5C16 3.89543 16.8954 3 18 3C19.1046 3 20 3.89543 20 5Z\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\"></path><path d=\"M8 5C8 6.10457 7.10457 7 6 7C4.89543 7 4 6.10457 4 5C4 3.89543 4.89543 3 6 3C7.10457 3 8 3.89543 8 5Z\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\"></path><path d=\"M16 21V16.5L14 16V11.4408C16.3551 9.618 19.6448 9.61802 22 11.4408V16L20 16.5V21\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"square\" fill=\"none\"></path><path d=\"M4 21L4 16.5L2 16L2 11.4408C4.35515 9.618 7.64484 9.61802 10 11.4408L10 16L8 16.5L8 21\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"square\" fill=\"none\"></path></g></svg>",
    /** IconStar */ star: "<svg viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"12 2.245 15.039 8.403 21.836 9.39 16.918 14.185 18.079 20.954 12 17.759 5.921 20.954 7.082 14.185 2.164 9.39 8.961 8.403 12 2.245\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"square\" stroke-linejoin=\"miter\" stroke-miterlimit=\"10\"></polygon></svg>",
    /** IconLicense */ license: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><g fill=\"currentColor\"><path d=\"M18 22C19.6569 22 21 20.6569 21 19C21 17.3431 19.6569 16 18 16C16.3431 16 15 17.3431 15 19C15 20.6569 16.3431 22 18 22Z\" stroke=\"currentColor\" stroke-width=\"2\" stroke-miterlimit=\"10\" stroke-linecap=\"square\" fill=\"none\"></path><path d=\"M21 13.8037C20.3925 13.4523 19.718 13.2045 19 13.084V3H5V21H12.3428C12.6063 21.7454 13.0126 22.4229 13.5293 23H3V1H21V13.8037Z\" fill=\"currentColor\" stroke=\"none\"></path><path d=\"M8 11H16\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"square\" fill=\"none\"></path><path d=\"M8 7H10\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"square\" fill=\"none\"></path><path d=\"M8 18H8.01\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"square\" fill=\"none\"></path></g></svg>",
    /** IconNetwork */ network: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><g fill=\"currentColor\" stroke-linecap=\"square\" stroke-linejoin=\"miter\" stroke-miterlimit=\"10\"><path d=\"M10.5 16.5L20.5 10\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\" stroke-linecap=\"butt\"></path><path d=\"M18.5 18L20.5 10\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\" stroke-linecap=\"butt\"></path><path d=\"M4.5 11.5L19 8\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\" stroke-linecap=\"butt\"></path><path d=\"M12 4.5L19 7\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\" stroke-linecap=\"butt\"></path><path d=\"M4.5 10.5L8.5 5\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\" stroke-linecap=\"butt\"></path><path d=\"M3 14C4.10457 14 5 13.1046 5 12C5 10.8954 4.10457 10 3 10C1.89543 10 1 10.8954 1 12C1 13.1046 1.89543 14 3 14Z\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\"></path><path d=\"M10 6C11.1046 6 12 5.10457 12 4C12 2.89543 11.1046 2 10 2C8.89543 2 8 2.89543 8 4C8 5.10457 8.89543 6 10 6Z\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\"></path><path d=\"M21 10C22.1046 10 23 9.10457 23 8C23 6.89543 22.1046 6 21 6C19.8954 6 19 6.89543 19 8C19 9.10457 19.8954 10 21 10Z\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\"></path><path d=\"M9 20C10.1046 20 11 19.1046 11 18C11 16.8954 10.1046 16 9 16C7.89543 16 7 16.8954 7 18C7 19.1046 7.89543 20 9 20Z\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\"></path><path d=\"M18 22C19.1046 22 20 21.1046 20 20C20 18.8954 19.1046 18 18 18C16.8954 18 16 18.8954 16 20C16 21.1046 16.8954 22 18 22Z\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\"></path></g></svg>",
    /** IconWasteCollection */ collection: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\"><g fill=\"currentColor\" stroke-linecap=\"square\" stroke-linejoin=\"miter\" stroke-miterlimit=\"10\"><path d=\"M2 11H22\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\"></path><path d=\"M4 11L7 20H17L20 11\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\" stroke-linecap=\"butt\"></path><path d=\"M12 1.5L15.03 3.25V6.75L12 8.5L8.97 6.75V3.25L12 1.5Z\" fill=\"currentColor\" data-stroke=\"none\" stroke=\"none\"></path></g></svg>",
    /** IconSettings */ gear: "<svg viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M13.6763 4.31627C13.2488 2.56124 10.7512 2.56124 10.3237 4.31627C10.2599 4.57999 10.1347 4.82492 9.95831 5.03112C9.78194 5.23732 9.55938 5.39897 9.30874 5.50291C9.0581 5.60684 8.78646 5.65014 8.51592 5.62927C8.24538 5.60839 7.9836 5.52394 7.75187 5.38279C6.20832 4.44227 4.44201 6.20855 5.38254 7.75207C5.99006 8.74884 5.45117 10.0494 4.31713 10.325C2.56096 10.7514 2.56096 13.25 4.31713 13.6753C4.58093 13.7392 4.8259 13.8645 5.03211 14.041C5.23831 14.2175 5.39991 14.4402 5.50375 14.691C5.6076 14.9418 5.65074 15.2135 5.62968 15.4841C5.60862 15.7547 5.52394 16.0165 5.38254 16.2482C4.44201 17.7917 6.20832 19.558 7.75187 18.6175C7.98356 18.4761 8.24536 18.3914 8.51597 18.3704C8.78658 18.3493 9.05834 18.3924 9.30912 18.4963C9.5599 18.6001 9.7826 18.7617 9.95911 18.9679C10.1356 19.1741 10.2609 19.4191 10.3248 19.6829C10.7512 21.439 13.2499 21.439 13.6752 19.6829C13.7393 19.4192 13.8647 19.1744 14.0413 18.9684C14.2178 18.7623 14.4405 18.6008 14.6912 18.497C14.9419 18.3932 15.2135 18.35 15.4841 18.3709C15.7546 18.3919 16.0164 18.4764 16.2481 18.6175C17.7917 19.558 19.558 17.7917 18.6175 16.2482C18.4763 16.0165 18.3918 15.7547 18.3709 15.4842C18.35 15.2136 18.3932 14.942 18.497 14.6913C18.6008 14.4406 18.7623 14.2179 18.9683 14.0414C19.1744 13.8648 19.4192 13.7394 19.6829 13.6753C21.439 13.2489 21.439 10.7502 19.6829 10.325C19.4191 10.2611 19.1741 10.1358 18.9679 9.95928C18.7617 9.78278 18.6001 9.56007 18.4962 9.3093C18.3924 9.05853 18.3493 8.78677 18.3703 8.51617C18.3914 8.24556 18.4761 7.98376 18.6175 7.75207C19.558 6.20855 17.7917 4.44227 16.2481 5.38279C16.0164 5.52418 15.7546 5.60886 15.484 5.62992C15.2134 5.65098 14.9417 5.60784 14.6909 5.504C14.4401 5.40016 14.2174 5.23856 14.0409 5.03236C13.8644 4.82616 13.7391 4.58119 13.6752 4.3174L13.6763 4.31627Z\" stroke=\"currentColor\" stroke-width=\"2\"></path><path d=\"M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z\" stroke=\"currentColor\" stroke-width=\"2\"></path></svg>",
    /** IconRIGK */ rigk: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\"><g fill=\"currentColor\" stroke-linecap=\"square\" stroke-linejoin=\"miter\" stroke-miterlimit=\"10\"><circle cx=\"12\" cy=\"12\" r=\"3\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"></circle><circle cx=\"12\" cy=\"3\" r=\"2\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"></circle><circle cx=\"4\" cy=\"19\" r=\"2\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"></circle><circle cx=\"20\" cy=\"19\" r=\"2\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"></circle><path d=\"M12 5V9\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"></path><path d=\"M10 14L5.5 17.5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"></path><path d=\"M14 14L18.5 17.5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"></path></g></svg>",
    /** IconAccount */ company: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\"><g fill=\"currentColor\" stroke-linecap=\"square\" stroke-linejoin=\"miter\" stroke-miterlimit=\"10\"><path d=\"M6 21L2 21L2 15L6 13.6666\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\" stroke-linecap=\"butt\"></path><path d=\"M14 21L14 9L6 9L6 21L14 21Z\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\"></path><path d=\"M14 5L14 2L22 4L22 21L16 21\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\"></path><path d=\"M10.01 13L10 13\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\"></path><path d=\"M10.01 17L10 17\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\"></path><path d=\"M18 17V9\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\"></path></g></svg>",
    /** IconTruck */ truck: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\"><g fill=\"currentColor\"><path d=\"M19 18H22V12L18.5 11L17 7H12\" stroke=\"currentColor\" stroke-width=\"2\" stroke-miterlimit=\"10\" fill=\"none\"></path><path d=\"M12 18V5H2.09163V18H5\" stroke=\"currentColor\" stroke-width=\"2\" stroke-miterlimit=\"10\" fill=\"none\"></path><path d=\"M9 18H15\" stroke=\"currentColor\" stroke-width=\"2\" stroke-miterlimit=\"10\" fill=\"none\"></path><path d=\"M17 20C18.1046 20 19 19.1046 19 18C19 16.8954 18.1046 16 17 16C15.8954 16 15 16.8954 15 18C15 19.1046 15.8954 20 17 20Z\" stroke=\"currentColor\" stroke-width=\"2\" stroke-miterlimit=\"10\" stroke-linecap=\"square\" fill=\"none\"></path><path d=\"M7 20C8.10457 20 9 19.1046 9 18C9 16.8954 8.10457 16 7 16C5.89543 16 5 16.8954 5 18C5 19.1046 5.89543 20 7 20Z\" stroke=\"currentColor\" stroke-width=\"2\" stroke-miterlimit=\"10\" stroke-linecap=\"square\" fill=\"none\"></path></g></svg>",
    /** IconRefresh */ refresh: "<svg viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M19.4221 8.01389C18.0322 5.61438 15.4343 4 12.4588 4C9.08513 4 6.19686 6.07535 5.00433 9.01736M16.9806 9.01736H21V5.00347M5.57787 16.0417C6.96782 18.4412 9.56573 20.0556 12.5412 20.0556C15.9149 20.0556 18.8031 17.9802 19.9957 15.0382M8.0194 15.0382H4V19.0521\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg>",
    /** IconWrench */ wrench: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\"><g fill=\"currentColor\"><path d=\"M16.9767 21V19L20.9767 14V8L16.9767 3H15V11H9.00001V3H7.02332L3.02332 8V14L7.02332 19V21\" stroke=\"currentColor\" stroke-width=\"2\" stroke-miterlimit=\"10\" stroke-linecap=\"square\" fill=\"none\"></path></g></svg>",
    /** IconEyeSensor */ optics: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\"><g fill=\"currentColor\" stroke-linecap=\"square\" stroke-linejoin=\"miter\" stroke-miterlimit=\"10\"><path d=\"M12 12C17.157 12 20 17 20 17C20 17 17.157 22 12 22C6.84299 22 4 17 4 17C4 17 6.84299 12 12 12Z\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\"></path><path d=\"M12 19C13.1046 19 14 18.1046 14 17C14 15.8954 13.1046 15 12 15C10.8954 15 10 15.8954 10 17C10 18.1046 10.8954 19 12 19Z\" fill=\"currentColor\" data-stroke=\"none\" stroke=\"none\"></path><path d=\"M5.00001 5.07107C8.90525 1.16582 15.2369 1.16582 19.1421 5.07107\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\"></path><path d=\"M7.82843 7.8995C10.1716 5.55636 13.9706 5.55636 16.3137 7.8995\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\"></path></g></svg>",
    /** IconOdorSensor */ odor: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\"><g fill=\"currentColor\" stroke-linecap=\"square\" stroke-linejoin=\"miter\" stroke-miterlimit=\"10\"><path d=\"M7 22C5 21 5 18 7 17C9 16 9 13 7 12\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\"></path><path d=\"M12 22C10 21 10 18 12 17C14 16 14 13 12 12\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\"></path><path d=\"M17 22C15 21 15 18 17 17C19 16 19 13 17 12\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\"></path><path d=\"M5.00001 5.07107C8.90525 1.16582 15.2369 1.16582 19.1421 5.07107\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\"></path><path d=\"M7.82843 7.8995C10.1716 5.55636 13.9706 5.55636 16.3137 7.8995\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\"></path></g></svg>",
    /** IconPurity */ purity: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\"><g fill=\"currentColor\" stroke-linecap=\"square\" stroke-linejoin=\"miter\" stroke-miterlimit=\"10\"><path d=\"M12 3C12 3 5 10 5 15C5 18.866 8.134 22 12 22C15.866 22 19 18.866 19 15C19 10 12 3 12 3Z\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\"></path><path d=\"M12 18C10.3431 18 9 16.6569 9 15\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\"></path></g></svg>"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/icons.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FILM_ICONS",
    ()=>FILM_ICONS,
    "FILM_ICON_MEANING",
    ()=>FILM_ICON_MEANING
]);
/*
 * Icons des Imagefilms (#1460/#1497): Nucleo-Icons generiert aus Atom/Icons
 * (icons.generated.ts, #1497); Monitor und plastship-Zeichen von Hand.
 * Nur currentColor, zweifarbige Teile mit class="accent".
 * Als Text im Code statt als Datei unter public/, damit Szenen sie synchron und
 * ohne Nachladen in Geometrie übersetzen (SvgShape).
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$icons$2e$generated$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/icons.generated.ts [app-client] (ecmascript)");
;
/** Monitor als Linie mit Innenrahmen und Standfuß */ const monitor = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
<rect x="8" y="20" width="84" height="52.5" rx="4" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<rect x="11.5" y="23.5" width="77" height="45.5" rx="2.5" fill="none" stroke="currentColor" stroke-width="1.5"/>
<path d="M 50 72.5 V 80 M 36 80 H 64" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
/** plastship-Zeichen ohne Schriftzug: blaue Hälfte als Grundfarbe, grüne als Akzent */ const logoSign = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 89 100">
<path d="M16.157 63.1687V37.2257C16.1565 36.2097 16.4236 35.2114 16.9315 34.3314C17.4394 33.4514 18.17 32.7206 19.05 32.2127L41.168 19.4377C42.0482 18.9295 43.0466 18.662 44.063 18.662C45.0794 18.662 46.0778 18.9295 46.958 19.4377L69.418 32.4087L85.574 23.0787L46.959 0.775713C46.0788 0.267534 45.0804 0 44.064 0C43.0476 0 42.0492 0.267534 41.169 0.775713L2.895 22.8817C2.01486 23.3896 1.28395 24.1203 0.775767 25.0003C0.267579 25.8803 2.32196e-05 26.8785 0 27.8947V72.5007L16.157 63.1687Z" fill="currentColor"/>
<path class="accent" d="M71.9707 36.831V62.774C71.971 63.79 71.7038 64.7882 71.196 65.6682C70.6881 66.5481 69.9576 67.2789 69.0777 67.787L46.9577 80.562C46.0781 81.0707 45.0799 81.3385 44.0637 81.3385C43.0476 81.3385 42.0494 81.0707 41.1697 80.562L18.7107 67.59L2.55273 76.921L41.1707 99.224C42.0504 99.7328 43.0486 100.001 44.0647 100.001C45.0809 100.001 46.0791 99.7328 46.9587 99.224L85.2337 77.118C86.1139 76.6101 86.8448 75.8794 87.353 74.9994C87.8612 74.1194 88.1287 73.1212 88.1287 72.105V27.5L71.9707 36.831Z" fill="currentColor"/>
</svg>`;
/** plastship-Schriftzug ohne Zeichen (aus public/images/cms/plastship-logo-20e4ac.svg, auf den Text zugeschnitten), Schlussbild #1513 */ const logoWord = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="50.37 12.33 115.63 15.33">
<path d="M158.137 19.8609H159.953C160.861 19.8609 161.515 19.6449 161.913 19.2123C162.312 18.7792 162.511 18.1757 162.511 17.3996C162.511 17.0566 162.46 16.7439 162.357 16.4628C162.254 16.1817 162.098 15.9391 161.888 15.7372C161.678 15.5347 161.413 15.3784 161.093 15.2688C160.773 15.1592 160.393 15.1038 159.953 15.1038H158.137V19.8609ZM158.137 22.4861V27.5009H154.65V12.4987H159.953C161.012 12.4987 161.922 12.6241 162.682 12.8743C163.443 13.125 164.068 13.4702 164.56 13.9093C165.052 14.3483 165.415 14.8666 165.649 15.4642C165.883 16.0617 166 16.7065 166 17.3996C166 18.148 165.879 18.8346 165.638 19.4592C165.398 20.0839 165.03 20.6196 164.534 21.0657C164.039 21.5119 163.411 21.8597 162.651 22.111C161.891 22.3612 160.992 22.4861 159.953 22.4861H158.137ZM150.831 27.5009H147.323V12.4987H150.831V27.5009ZM143.505 27.5009H139.997V21.158H133.888V27.5009H130.379V12.4987H133.888V18.7694H139.997V12.4987H143.505V27.5009ZM126.541 15.5467C126.438 15.7111 126.33 15.8349 126.216 15.9168C126.103 15.9999 125.956 16.0406 125.778 16.0406C125.619 16.0406 125.449 15.9912 125.266 15.8919C125.084 15.792 124.878 15.6802 124.647 15.5564C124.417 15.4327 124.154 15.322 123.858 15.2227C123.562 15.1228 123.225 15.0729 122.847 15.0729C122.193 15.0729 121.707 15.2118 121.387 15.4897C121.067 15.7676 120.907 16.1437 120.907 16.6175C120.907 16.9198 121.003 17.17 121.196 17.3692C121.388 17.5684 121.641 17.7399 121.955 17.8837C122.267 18.0281 122.625 18.1599 123.028 18.2799C123.43 18.4004 123.841 18.5339 124.26 18.682C124.68 18.8297 125.091 19.0028 125.494 19.202C125.896 19.4006 126.253 19.6546 126.567 19.964C126.88 20.2728 127.132 20.6489 127.325 21.0912C127.518 21.5341 127.614 22.0682 127.614 22.6923C127.614 23.3859 127.494 24.0345 127.253 24.6385C127.012 25.2426 126.663 25.7696 126.206 26.219C125.748 26.6689 125.184 27.0222 124.514 27.2795C123.843 27.5373 123.081 27.6659 122.228 27.6659C121.76 27.6659 121.284 27.6176 120.799 27.5215C120.314 27.4255 119.844 27.2898 119.39 27.115C118.936 26.9397 118.51 26.7324 118.11 26.492C117.712 26.2515 117.364 25.984 117.069 25.6887L118.101 24.0622C118.176 23.9384 118.282 23.8391 118.42 23.7631C118.558 23.6882 118.705 23.6497 118.864 23.6497C119.07 23.6497 119.279 23.7153 119.488 23.8456C119.698 23.9764 119.936 24.1202 120.2 24.2782C120.465 24.4361 120.769 24.5805 121.114 24.7107C121.457 24.841 121.863 24.9061 122.331 24.9061C122.964 24.9061 123.456 24.7677 123.806 24.4893C124.157 24.2114 124.333 23.7707 124.333 23.1661C124.333 22.816 124.236 22.5311 124.044 22.3113C123.851 22.0915 123.599 21.9097 123.285 21.7659C122.972 21.6215 122.616 21.4945 122.217 21.3849C121.819 21.2752 121.409 21.1531 120.99 21.0191C120.57 20.8855 120.161 20.7205 119.762 20.5252C119.362 20.3292 119.006 20.072 118.693 19.7529C118.381 19.4337 118.128 19.0354 117.935 18.5583C117.743 18.0812 117.646 17.4924 117.646 16.7928C117.646 16.2294 117.76 15.6802 117.987 15.1451C118.214 14.6094 118.547 14.1323 118.988 13.7133C119.428 13.2954 119.968 12.9606 120.608 12.7093C121.247 12.4591 121.98 12.3337 122.806 12.3337C123.266 12.3337 123.715 12.3701 124.152 12.4423C124.589 12.5139 125.004 12.6208 125.396 12.7614C125.787 12.9019 126.154 13.0702 126.494 13.2656C126.835 13.4615 127.139 13.6829 127.408 13.9299L126.541 15.5467ZM115.686 12.4987V15.2579H111.456V27.5009H107.968V15.2579H103.737V12.4987H115.686ZM100.93 15.5467C100.828 15.7111 100.719 15.8349 100.606 15.9168C100.492 15.9999 100.346 16.0406 100.167 16.0406C100.009 16.0406 99.8383 15.9912 99.6566 15.8919C99.4739 15.792 99.2677 15.6802 99.0371 15.5564C98.8071 15.4327 98.5433 15.322 98.2479 15.2227C97.9515 15.1228 97.6148 15.0729 97.2368 15.0729C96.5831 15.0729 96.0963 15.2118 95.7765 15.4897C95.4567 15.7676 95.2962 16.1437 95.2962 16.6175C95.2962 16.9198 95.3925 17.17 95.5856 17.3692C95.7781 17.5684 96.031 17.7399 96.3438 17.8837C96.6565 18.0281 97.0144 18.1599 97.4169 18.2799C97.8199 18.4004 98.23 18.5339 98.6499 18.682C99.0698 18.8297 99.4809 19.0028 99.8834 19.202C100.285 19.4006 100.643 19.6546 100.957 19.964C101.269 20.2728 101.522 20.6489 101.715 21.0912C101.907 21.5341 102.004 22.0682 102.004 22.6923C102.004 23.3859 101.883 24.0345 101.642 24.6385C101.401 25.2426 101.053 25.7696 100.595 26.219C100.138 26.6689 99.5734 27.0222 98.9028 27.2795C98.2322 27.5373 97.4702 27.6659 96.6173 27.6659C96.1496 27.6659 95.6731 27.6176 95.188 27.5215C94.7034 27.4255 94.234 27.2898 93.7799 27.115C93.3257 26.9397 92.8993 26.7324 92.5001 26.492C92.1009 26.2515 91.7539 25.984 91.458 25.6887L92.4903 24.0622C92.5654 23.9384 92.672 23.8391 92.8101 23.7631C92.9477 23.6882 93.0951 23.6497 93.2534 23.6497C93.4601 23.6497 93.6678 23.7153 93.8778 23.8456C94.0877 23.9764 94.3248 24.1202 94.5897 24.2782C94.8546 24.4361 95.1586 24.5805 95.5029 24.7107C95.8467 24.841 96.2529 24.9061 96.7207 24.9061C97.3538 24.9061 97.8455 24.7677 98.1957 24.4893C98.5465 24.2114 98.7228 23.7707 98.7228 23.1661C98.7228 22.816 98.6259 22.5311 98.4334 22.3113C98.2409 22.0915 97.988 21.9097 97.6752 21.7659C97.3619 21.6215 97.0057 21.4945 96.607 21.3849C96.2078 21.2752 95.7988 21.1531 95.3789 21.0191C94.9596 20.8855 94.55 20.7205 94.1513 20.5252C93.7521 20.3292 93.3959 20.072 93.0831 19.7529C92.7699 19.4337 92.5175 19.0354 92.325 18.5583C92.1324 18.0812 92.0361 17.4924 92.0361 16.7928C92.0361 16.2294 92.1493 15.6802 92.3761 15.1451C92.6034 14.6094 92.9368 14.1323 93.3774 13.7133C93.8179 13.2954 94.358 12.9606 94.9971 12.7093C95.6373 12.4591 96.3699 12.3337 97.1955 12.3337C97.6562 12.3337 98.1049 12.3701 98.5416 12.4423C98.9784 12.5139 99.3934 12.6208 99.785 12.7614C100.177 12.9019 100.543 13.0702 100.884 13.2656C101.225 13.4615 101.529 13.6829 101.798 13.9299L100.93 15.5467ZM80.6438 21.7659H84.7507L83.3681 17.6574C83.2784 17.3963 83.1734 17.0897 83.0532 16.7358C82.9325 16.3819 82.8145 15.9999 82.6975 15.5879C82.5871 16.0064 82.4734 16.3944 82.3565 16.7515C82.2401 17.1081 82.1297 17.4169 82.0264 17.678L80.6438 21.7659ZM90.3017 27.5009H87.5991C87.2956 27.5009 87.0465 27.4303 86.8507 27.2898C86.6543 27.1492 86.5184 26.969 86.4428 26.7492L85.5557 24.1338H79.8394L78.9512 26.7492C78.8827 26.9413 78.7489 27.115 78.5493 27.2692C78.3497 27.4238 78.1054 27.5009 77.8166 27.5009H75.0923L80.9125 12.4987H84.4826L90.3017 27.5009ZM68.0549 24.7205H73.627V27.5009H64.5674V12.4987H68.0549V24.7205ZM53.8571 19.8609H55.6726C56.5809 19.8609 57.2347 19.6449 57.6334 19.2123C58.032 18.7792 58.2316 18.1757 58.2316 17.3996C58.2316 17.0566 58.1805 16.7439 58.0772 16.4628C57.9738 16.1817 57.8177 15.9391 57.6078 15.7372C57.3979 15.5347 57.133 15.3784 56.8132 15.2688C56.4928 15.1592 56.1132 15.1038 55.6726 15.1038H53.8571V19.8609ZM53.8571 22.4861V27.5009H50.3691V12.4987H55.6726C56.7321 12.4987 57.6415 12.6241 58.4019 12.8743C59.1622 13.125 59.7883 13.4702 60.2805 13.9093C60.7722 14.3483 61.1349 14.8666 61.3688 15.4642C61.6027 16.0617 61.7202 16.7065 61.7202 17.3996C61.7202 18.148 61.5994 18.8346 61.3585 19.4592C61.1181 20.0839 60.7493 20.6196 60.2544 21.0657C59.7589 21.5119 59.1312 21.8597 58.3714 22.111C57.6111 22.3612 56.712 22.4861 55.6726 22.4861H53.8571Z" fill="currentColor"/>
</svg>`;
/** PlastCert-Logo mit Schriftzug, wie Atom/Logos/LogoPlastCert: Kolben und Schrift als Grundfarbe, Füllung als Akzent */ const plastcert = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 247.6 233.15">
<path d="M98.463 0H149.188A6.412 6.412 0 0 1 153.6 11.065V57.213A10.375 10.375 0 0 0 156.598 64.508L202.363 110.788A15.875 15.875 0 0 1 206.95 121.95V163.05A15.875 15.875 0 0 1 191.075 178.925H56.575A15.875 15.875 0 0 1 40.7 163.05V121.95A15.875 15.875 0 0 1 45.287 110.788L91.052 64.508A10.375 10.375 0 0 0 94.05 57.213V11.065A6.412 6.412 0 0 1 98.463 0ZM98.463 4.25A2.162 2.162 0 0 0 98.463 8.575H149.188A2.162 2.162 0 0 0 149.188 4.25ZM98.3 57.213A14.625 14.625 0 0 1 94.074 67.497L48.309 113.776A11.625 11.625 0 0 0 44.95 121.95V163.05A11.625 11.625 0 0 0 56.575 174.675H191.075A11.625 11.625 0 0 0 202.7 163.05V121.95A11.625 11.625 0 0 0 199.341 113.776L153.576 67.497A14.625 14.625 0 0 1 149.35 57.213V12.825H98.3Z"/>
<path class="accent" d="M68.7 123.1V96.974L116.967 48.135A9.25 9.25 0 0 1 130.104 48.114L159.885 78.05H132.75V106.575L127.211 101.036A5 5 0 0 0 120.139 101.036L98.075 123.1ZM96.315 118.85L117.134 98.03A9.25 9.25 0 0 1 128.5 96.679V73.8H149.662L127.091 51.111A5 5 0 0 0 119.99 51.123L72.95 98.72V118.85ZM64.6 101.122V107.168L52.808 119.1A3.75 3.75 0 0 0 51.725 121.736V122.2A5 5 0 0 0 56.725 127.2H147.965L171.315 149.875L147.965 172.55H56.725A9.25 9.25 0 0 1 47.475 163.3V121.736A8 8 0 0 1 49.785 116.113ZM136.85 82.15H163.964L197.847 116.209A8 8 0 0 1 200.175 121.852V163.3A9.25 9.25 0 0 1 190.925 172.55H153.635L176.985 149.875L153.635 127.2H190.925A5 5 0 0 0 195.925 122.2V121.852A3.75 3.75 0 0 0 194.834 119.207L162.197 86.4H141.1V108.89L155.31 123.1H149.3L136.85 110.65Z"/>
<path d="M0 194.3H15.33C22.56 194.3 27.74 199.32 27.74 206.32C27.74 213.32 22.56 218.34 15.33 218.34H7.56V232.85H0ZM7.56 201.07V211.58H14.38C18.03 211.58 20.27 209.58 20.27 206.32C20.27 203.06 18.03 201.07 14.38 201.07ZM35.98 194.3H43.07V225.01C43.07 226 44.22 226.78 45.68 226.78H48.04V232.85H43.64C39.34 232.85 35.98 229.45 35.98 225.1ZM66.64 204.33C73.54 204.33 77.89 207.87 77.89 213.49V232.85H70.8V230.4C68.94 231.94 68.81 233.12 63.19 233.12C58.09 233.12 54.33 229.34 54.33 224.23C54.33 219.45 58.47 215.92 64.08 215.92H70.8V213.78C70.8 211.74 68.53 210.19 65.56 210.19C62.33 210.19 61.42 211.79 59.95 212.65L55.62 208.31C58.42 205.16 60.82 204.33 66.64 204.33ZM70.8 220.9H65.34C62.83 220.9 61.11 222.25 61.11 224.22C61.11 226.04 62.96 227.27 65.68 227.27C68.53 227.27 70.54 225.72 70.8 224.14ZM98.65 204.33C102.14 204.33 106.8 205.57 108.61 207.54L103.93 212.13C103.05 211.15 101.01 210.04 97.61 210.04C94.91 210.04 93.66 211.12 93.66 213.42C93.66 217.61 109.21 212.03 109.21 223.51C109.21 230.06 105.15 233.12 96.47 233.12C89.48 233.12 88.27 231.2 85.12 229.17L89.85 224.36C90.92 225.62 93.17 227.01 97.44 227.01C100.81 227.01 102.38 225.91 102.38 223.56C102.38 219.62 86.81 224.18 86.81 214.02C86.81 207.41 90.58 204.33 98.65 204.33ZM118.02 197.09H125.11V205.32H130.01V210.82H125.11V225.01C125.11 226 126.26 226.78 127.72 226.78H130.08V232.85H125.68C121.38 232.85 118.02 229.45 118.02 225.1V210.82H115.08V205.32H118.02ZM152.31 193.96C160.58 193.96 165.65 198.89 166.6 206.13H159.11C158.09 203.53 156.64 200.73 152.83 200.73C148.13 200.73 145.84 203.55 145.84 209.33V217.75C145.84 223.54 148.13 226.36 152.83 226.36C156.64 226.36 158.09 223.56 159.11 220.95H166.6C165.65 228.2 160.58 233.12 152.31 233.12C144.28 233.12 138.43 227.45 138.43 219.66V207.42C138.43 199.63 144.28 193.96 152.31 193.96ZM186.17 204.33C193.87 204.33 198.48 209.52 198.48 218.2V220.91H180.53C181.28 225.14 183.23 227.08 186.79 227.08C190.41 227.08 192.19 225.74 193.43 224.53L197.83 228.71C194.04 231.49 193.82 233.12 186.16 233.12C178.43 233.12 173.8 227.79 173.8 218.89C173.8 209.78 178.43 204.33 186.17 204.33ZM180.55 215.91H191.71C191.11 212.38 189.07 210.1 186.17 210.1C183.26 210.1 181.15 212.38 180.55 215.91ZM207.48 204.6H214.57V207.26C215.56 205.89 218.11 204.33 221.62 204.33C225 204.33 227.56 205.8 228.23 206.94L222.86 212.43C221.59 211.65 221.78 210.68 218.81 210.68C216.81 210.68 214.57 213.17 214.57 215.39V232.85H207.48ZM235.51 197.09H242.6V205.32H247.5V210.82H242.6V225.01C242.6 226 243.75 226.78 245.21 226.78H247.57V232.85H243.17C238.87 232.85 235.51 229.45 235.51 225.1V210.82H232.57V205.32H235.51Z"/>
</svg>`;
/** RIGK-Zeichen, wie Atom/Logos/LogoRigk: Pfeil, Rahmen und Buchstaben als Grundfarbe, das Band (Buchstaben ausgespart) als Akzent */ const rigkLogo = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 462 384">
<path d="M153.71 235.4H64.1V155.45L209.16 8.93A30.1 30.1 0 0 1 251.94 8.93L341.01 98.9H258.9V186.42L241.28 168.62A15.1 15.1 0 0 0 219.82 168.62ZM148.37 222.6L210.72 159.62A27.9 27.9 0 0 1 246.1 156.08V86.1H310.33L242.84 17.94A17.3 17.3 0 0 0 218.26 17.94L76.9 160.72V222.6Z"/>
<path d="M270 197.12V110.5H352.5L455.92 214.97A21 21 0 0 1 462 229.75V357A27 27 0 0 1 435 384H320.35L390.7 315.5L320.35 247H433A15 15 0 0 0 448 232V229.75A7 7 0 0 0 445.97 224.82L346.65 124.5H284V191.36L327.6 235.4H307.9Z"/>
<path d="M33 272H69.5A25.25 26 0 0 1 94.75 298A25.25 26 0 0 1 78.2 322.41L97.5 361H81L62.75 324H47V361H33ZM47 285V311H68.5A11.75 13 0 0 0 80.25 298A11.75 13 0 0 0 68.5 285ZM113 272H127V361H113ZM208.8 299H194.51A18 19.5 0 0 0 177 284A18 19.5 0 0 0 159 303.5V329.5A18 19.5 0 0 0 177 349A18 19.5 0 0 0 195 329.5V325H176V312H209V330.5A32 31.75 0 0 1 177 362.25A32 31.75 0 0 1 145 330.5V302.5A32 31.75 0 0 1 177 270.75A32 31.75 0 0 1 208.8 299ZM227 272H241V315L275 272H293L264.56 306.78L295.6 361H278.6L255.06 318.4L241 335.6V361H227Z"/>
<path class="accent" fill-rule="evenodd" d="M8.25 211.87L53 166.67V186.57L18.2 221.72A14.5 14.5 0 0 0 14 231.92V232A15 15 0 0 0 29 247H304.95L375.3 315.5L304.95 384H27A27 27 0 0 1 0 357V231.92A28.5 28.5 0 0 1 8.25 211.87ZM33 272V361H47V324H62.75L81 361H97.5L78.2 322.41A25.25 26 0 0 0 94.75 298A25.25 26 0 0 0 69.5 272ZM47 285H68.5A11.75 13 0 0 1 80.25 298A11.75 13 0 0 1 68.5 311H47ZM113 272V361H127V272ZM208.8 299A32 31.75 0 0 0 177 270.75A32 31.75 0 0 0 145 302.5V330.5A32 31.75 0 0 0 177 362.25A32 31.75 0 0 0 209 330.5V312H176V325H195V329.5A18 19.5 0 0 1 177 349A18 19.5 0 0 1 159 329.5V303.5A18 19.5 0 0 1 177 284A18 19.5 0 0 1 194.51 299ZM227 272V361H241V335.6L255.06 318.4L278.6 361H295.6L264.56 306.78L293 272H275L241 315V272Z"/>
</svg>`;
const FILM_ICONS = {
    ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$icons$2e$generated$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GENERATED_FILM_ICONS"],
    monitor,
    logoSign,
    logoWord,
    plastcert,
    rigkLogo
};
const FILM_ICON_MEANING = {
    pallet: 'Gitterbox',
    qr: 'QR-Code der Box',
    scan: 'Scan',
    truck: 'Transport',
    factory: 'Verarbeiter (Abnehmer, Herstellung)',
    company: 'Partnerunternehmen',
    team: 'Ansprechpartner',
    verified: 'von plastship geprüft',
    network: 'Markt',
    collection: 'Werksentsorgung',
    gear: 'Produktion nach Maß',
    rigk: 'Systemmengen (RIGK)',
    medal: 'Klasse',
    star: 'Klassenstufe',
    wrench: 'Mechanik',
    optics: 'Optik',
    odor: 'Geruch',
    purity: 'Reinheit',
    analysis: 'Prüflabore',
    datasheet: 'Prüfbericht',
    grade: 'Verifizierungsurkunde',
    license: 'Compliance-Nachweis',
    refresh: 'Nachhaltung',
    monitor: 'Portal',
    ai: 'PIA',
    certificate: 'ISO 9001',
    server: 'Serverstandort',
    handshake: 'Inverkehrbringen',
    recycle: 'Rücknahme',
    sort: 'Sortierung',
    restore: 'Aufbereitung',
    plastcert: 'PlastCert (Prüfung im Labor)',
    rigkLogo: 'RIGK-Verbund',
    logoSign: 'plastship-Zeichen',
    logoWord: 'plastship-Schriftzug'
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/imagefilmPalette.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CYCLE_TERMS",
    ()=>CYCLE_TERMS,
    "DIMENSION_COLORS",
    ()=>DIMENSION_COLORS,
    "DIMENSION_TONES",
    ()=>DIMENSION_TONES,
    "FILM_DIMENSIONS",
    ()=>FILM_DIMENSIONS,
    "FILM_TERMS",
    ()=>FILM_TERMS,
    "MATCH_EDGE",
    ()=>MATCH_EDGE,
    "ON_DIMENSION",
    ()=>ON_DIMENSION,
    "ON_TERM",
    ()=>ON_TERM,
    "STREAM_TERMS",
    ()=>STREAM_TERMS,
    "SURFACE_ICON_CONTRAST",
    ()=>SURFACE_ICON_CONTRAST,
    "SURFACE_LIGHTNESS_STEP",
    ()=>SURFACE_LIGHTNESS_STEP,
    "SURFACE_TEXT_CONTRAST",
    ()=>SURFACE_TEXT_CONTRAST,
    "TERMS_OF_BEAT",
    ()=>TERMS_OF_BEAT,
    "TERM_COLORS",
    ()=>TERM_COLORS,
    "WAY_TERMS",
    ()=>WAY_TERMS,
    "dimensionColor",
    ()=>dimensionColor,
    "hslOf",
    ()=>hslOf,
    "hslToHex",
    ()=>hslToHex,
    "surfaceFor",
    ()=>surfaceFor,
    "termColor",
    ()=>termColor,
    "termSurface",
    ()=>termSurface,
    "toneFor",
    ()=>toneFor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/theme.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$darkTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/darkTheme.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$helper$2f$color$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/helper/color.ts [app-client] (ecmascript)");
;
;
;
/*
 * Feste Farbe je Begriff im Imagefilm (#1964): die einzige Stelle, an der ein
 * Begriff seine Farbe bekommt. Trägt ein Begriff auf einer Folie eine Farbe,
 * trägt er sie auf jeder späteren auch (Rücknahme, Sortierung, Aufbereitung
 * auf Folie 3 und im Kreislauf am Schluss). Alle Werte kommen aus dem Theme.
 *
 * Jede Farbe ist eine Familie mit zwei Tönen: hell für dunklen Grund
 * (Markenblau, Dark Theme), dunkel für hellen Grund (weißes Band im Light
 * Theme). Welcher Ton gilt, entscheidet der Kontrast zum Grund (toneFor).
 * imagefilmPalette.test.ts prüft Name ≥ 4,5:1 und Rand ≥ 3:1 auf jedem Grund.
 *
 * Folie 2 und 3 (#1975): die Wabe eines Begriffs ist eine Fläche in seiner
 * Farbe, Motiv und Name darauf sind Weiß (ON_TERM). Ist der Ton für Weiß zu
 * hell, wird die Fläche abgedunkelt, nie das Weiß eingefärbt (termSurface).
 */ const light = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["themePlastship"].palette;
const dark = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$darkTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["themePlastshipDark"].palette;
const FILM_TERMS = [
    'market',
    'collection',
    'custom',
    'system',
    'takeback',
    'sorting',
    'reprocessing'
];
const TERM_COLORS = {
    // Markt: Gelb — Handel und Wert
    market: {
        onDark: light.default.tertiary,
        onLight: light.status.warning.text
    },
    // Werksentsorgung: Hellblau — Werk und Abholung
    collection: {
        onDark: dark.status.info.text,
        onLight: light.status.info.text
    },
    // Produktion nach Maß: Rosé — Fertigung
    custom: {
        onDark: dark.status.error.text,
        onLight: light.status.error.text
    },
    // Systemmengen: Mint — die Systeme im RIGK-Verbund
    system: {
        onDark: dark.status.success.text,
        onLight: light.status.success.text
    },
    // Rücknahme: Cyan — Sammlung
    takeback: {
        onDark: dark.default.info,
        onLight: light.default.info
    },
    // Sortierung: Silber — Trennen
    sorting: {
        onDark: dark.status.neutral.text,
        onLight: light.status.neutral.text
    },
    // Aufbereitung: Grün — daraus wird Rezyklat, der grüne Rand der Charge folgt
    reprocessing: {
        onDark: dark.default.secondary,
        onLight: light.site.greenText
    }
};
const MATCH_EDGE = {
    onDark: light.default.secondary,
    onLight: light.site.greenDark
};
const WAY_TERMS = [
    'market',
    'collection',
    'custom',
    'system'
];
const STREAM_TERMS = [
    'takeback',
    'sorting',
    'reprocessing'
];
const CYCLE_TERMS = [
    null,
    null,
    ...STREAM_TERMS,
    null
];
const TERMS_OF_BEAT = {
    bw: WAY_TERMS,
    b1: STREAM_TERMS,
    b8: CYCLE_TERMS
};
const toneFor = (tone, ground)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$helper$2f$color$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateContrast"])(tone.onDark, ground) >= (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$helper$2f$color$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateContrast"])(tone.onLight, ground) ? tone.onDark : tone.onLight;
const termColor = (term, ground)=>toneFor(TERM_COLORS[term], ground);
const ON_TERM = light.default.white;
const SURFACE_TEXT_CONTRAST = 4.5;
const SURFACE_ICON_CONTRAST = 3;
/** Schritt der Abdunklung in HSL-Helligkeit */ const SURFACE_STEP = 0.01;
const toHsl = (hex)=>{
    const [r, g, b] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$helper$2f$color$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToRgb"])(hex).map((v)=>v / 255);
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const l = (max + min) / 2;
    if (max === min) return [
        0,
        0,
        l
    ];
    const d = max - min;
    const s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    const h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
    return [
        h / 6,
        s,
        l
    ];
};
const fromHsl = ([h, s, l])=>{
    if (s === 0) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$helper$2f$color$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rgbToHex"])([
        l,
        l,
        l
    ].map((v)=>Math.round(v * 255)));
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    const channel = (t)=>{
        const u = t < 0 ? t + 1 : t > 1 ? t - 1 : t;
        if (u < 1 / 6) return p + (q - p) * 6 * u;
        if (u < 1 / 2) return q;
        if (u < 2 / 3) return p + (q - p) * (2 / 3 - u) * 6;
        return p;
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$helper$2f$color$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rgbToHex"])([
        channel(h + 1 / 3),
        channel(h),
        channel(h - 1 / 3)
    ].map((v)=>Math.round(v * 255)));
};
const surfaceFor = (color)=>{
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$helper$2f$color$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateContrast"])(ON_TERM, color) >= SURFACE_TEXT_CONTRAST) return color;
    const [h, s, l] = toHsl(color);
    for(let step = 1; l - step * SURFACE_STEP > 0; step++){
        const next = fromHsl([
            h,
            s,
            l - step * SURFACE_STEP
        ]);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$helper$2f$color$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateContrast"])(ON_TERM, next) >= SURFACE_TEXT_CONTRAST) return next;
    }
    return fromHsl([
        h,
        s,
        0
    ]);
};
const termSurface = (term, ground)=>surfaceFor(termColor(term, ground));
const hslOf = toHsl;
const hslToHex = fromHsl;
const SURFACE_LIGHTNESS_STEP = SURFACE_STEP;
const FILM_DIMENSIONS = [
    'wrench',
    'optics',
    'odor',
    'purity'
];
const DIMENSION_TONES = {
    // Mechanik: Blau (status.info.text) — kräftiger und heller als das Markenblau
    wrench: light.status.info.text,
    // Optik: Himmelblau (Dark Theme default.info), abgedunkelt zu Cyan
    optics: dark.default.info,
    // Geruch: Beere (link.primary)
    odor: light.link.primary,
    // Reinheit: Smaragd (Dark Theme status.success.border) — bläulicher und dunkler als das Markengrün
    purity: dark.status.success.border
};
const DIMENSION_COLORS = Object.fromEntries(_c1 = FILM_DIMENSIONS.map(_c = (d)=>[
        d,
        surfaceFor(DIMENSION_TONES[d])
    ]));
_c2 = DIMENSION_COLORS;
const dimensionColor = (dimension)=>DIMENSION_COLORS[dimension];
const ON_DIMENSION = ON_TERM;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "DIMENSION_COLORS$Object.fromEntries$FILM_DIMENSIONS.map");
__turbopack_context__.k.register(_c1, "DIMENSION_COLORS$Object.fromEntries");
__turbopack_context__.k.register(_c2, "DIMENSION_COLORS");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/scenes/beats.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "B0",
    ()=>B0,
    "B1",
    ()=>B1,
    "B2",
    ()=>B2,
    "B3",
    ()=>B3,
    "B4",
    ()=>B4,
    "B5",
    ()=>B5,
    "B6",
    ()=>B6,
    "B7",
    ()=>B7,
    "B8",
    ()=>B8,
    "BEATS",
    ()=>BEATS,
    "BM",
    ()=>BM,
    "BS",
    ()=>BS,
    "BW",
    ()=>BW,
    "PLATE_HANDOVER",
    ()=>PLATE_HANDOVER,
    "SHARED_TRACKS",
    ()=>SHARED_TRACKS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/motion/easing.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/motion/timeline.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/scenes/layout.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/scenes/types.ts [app-client] (ecmascript)");
;
;
;
;
/*
 * Drehbuch (#1497), seit #1513 mit rotem Faden: das plastship-Zeichen wird
 * zur Wabe und füllt sich mit Pellets — diese Charge erlebt, was plastship
 * mit einem Material tut, und wird am Ende wieder zum Zeichen.
 * Materialgeschichte mit der Charge: Auftakt (b0), vier Wege (bw), Rezyklat
 * (b1), Marktplatz (bm), Labor mit den vier Dimensionen (b3), Rating mit
 * Urkunde (b2), Box und Versand (b4). Dann vier Folien über plastship selbst,
 * ohne die Charge: Portal mit Nachweisen (b6), Partner (b5), ISO (b7), Server
 * in Deutschland (bs). Zum Schluss schließt ein Wabenweg den Kreislauf (b8),
 * die Wabe von plastship wird wieder zum Zeichen. Die Kennungen sind
 * historisch, die Reihenfolge steht in BEATS.
 *
 * Zeiten absolut, nach Lesezeit gesetzt (#1513): rund 15 Zeichen je Sekunde,
 * jeder Text steht mindestens 1 s, und solange die Zeile tippt, erscheint
 * nichts Neues, das man lesen müsste. Listen zählen in Stufen hoch (ein
 * Eintrag blendet 0,3 s ein, steht, dann der nächste), nach jedem
 * abgeschlossenen Schritt eine kurze Pause. Nach jeder Änderung an einer
 * Folie die Zeiten aller Folien prüfen (timing.test.ts).
 * Spur-Präfixe: b0…b8 je Beat; `monitor.*` für den Monitor aus b6;
 * `camera.*` für leichte Kamerafahrten (b4, b6 schräg für Tiefe).
 */ const t = (id, ...keys)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["track"])(id, keys.map((a)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["k"])(...a)));
const HOME = [
    0,
    0,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CAMERA_Z"]
];
const LOOK = [
    0,
    0,
    0
];
const TILT_SHIP = [
    1.2,
    -0.6,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CAMERA_Z"] * 0.95
];
const TILT_PORTAL = [
    -1.0,
    -0.4,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CAMERA_Z"] * 0.97
];
/**
 * Stufen einer Liste: Eintrag i blendet ab `from + i · every` über `fade`
 * Sekunden ein und steht dann, bis der nächste kommt — so hat jeder Eintrag
 * Zeit, gelesen zu werden.
 */ const steps = (from, count, every, fade = 0.3)=>Array.from({
        length: count
    }, (_, i)=>[
            [
                from + i * every,
                i
            ],
            [
                from + i * every + fade,
                i + 1
            ]
        ]).flat();
const PLATE_HANDOVER = 2.5;
const SHARED_TRACKS = [
    t('monitor.opacity', [
        66.5,
        0
    ], [
        66.6,
        1
    ], [
        73.7,
        1
    ], [
        74,
        0
    ]),
    t('monitor.progress', [
        66.6,
        0
    ], [
        67.4,
        1,
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_OUT"]
    ]),
    t('camera.position', [
        13.5,
        HOME
    ], [
        57.5,
        HOME
    ], [
        58.5,
        TILT_SHIP,
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_IN_OUT"]
    ], [
        65.7,
        TILT_SHIP
    ], [
        66.5,
        HOME,
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_IN_OUT"]
    ], [
        67.4,
        TILT_PORTAL,
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_IN_OUT"]
    ], [
        73.2,
        TILT_PORTAL
    ], [
        74,
        HOME,
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_IN_OUT"]
    ]),
    t('camera.lookAt', [
        13.5,
        LOOK
    ])
];
const B0 = {
    id: 'b0',
    from: 0,
    to: 4.5,
    tracks: [
        /** Schriftzug unter der Bildmarke */ t('b0.word', [
            0,
            1
        ], [
            2.6,
            1
        ], [
            3,
            0
        ]),
        /** das Zeichen bleibt stehen: erst das Prüfzeichen der vier Wege löst es ab (bw.logo) */ t('b0.logo', [
            0,
            1
        ], [
            4.5,
            1
        ]),
        /** die weiße Wabe bleibt stehen: ab PLATE_HANDOVER zeichnet Beat1 sie als Grund der Charge (harte Übergabe, gleiche Fläche) */ t('b0.plate', [
            0,
            1
        ], [
            PLATE_HANDOVER,
            1
        ], [
            PLATE_HANDOVER + 0.0001,
            0
        ]),
        /** grüne Welle, wenn der Schriftzug gegangen ist */ t('b0.wave', [
            3.2,
            0
        ], [
            4.3,
            1,
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_OUT"]
        ])
    ]
};
/*
 * bw Vier Wege (#1513): jeder Weg kommt mit seinem Namen und zeichnet gleich
 * darauf seine Route zur großen Wabe — erst dann kommt der nächste. Sind alle
 * vier angekommen, löst das Prüfzeichen das plastship-Zeichen ab.
 */ /** Abstand zwischen zwei Wegen und Dauer einer Route */ const WAY_EVERY = 1.1;
const WAY_ROUTE = 0.7;
const BW = {
    id: 'bw',
    from: 4.5,
    to: 13.5,
    tracks: [
        t('bw.opacity', [
            4.5,
            0
        ], [
            4.8,
            1
        ], [
            13.1,
            1
        ], [
            13.5,
            0
        ]),
        /** vier Wege zum Rohstoff, einer nach dem anderen mit seinem Namen — erst wenn die Zeile getippt ist (0–4) */ t('bw.ways', ...steps(6.9, 4, WAY_EVERY)),
        /** Routen (0–4): sobald ein Weg da ist, läuft seine Route in die Wabe von plastship; Route i zeichnet sich von i bis i + 1 */ t('bw.flow', ...steps(7.25, 4, WAY_EVERY, WAY_ROUTE)),
        /** das plastship-Zeichen steht weiter auf der Wabe, bis das Prüfzeichen es ablöst */ t('bw.logo', [
            4.5,
            1
        ], [
            11.3,
            1
        ], [
            11.7,
            0,
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_IN"]
        ]),
        /** … alle geprüft */ t('bw.check', [
            11.4,
            0
        ], [
            12,
            1,
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_POP"]
        ], [
            13.1,
            1
        ], [
            13.5,
            0
        ])
    ]
};
/*
 * b1 Rezyklat aus gesicherten Stoffströmen (#1513): rechts der großen Wabe
 * erscheinen die drei Stationen, aus denen das Rezyklat kommt; der Strom
 * läuft von einer zur nächsten und in die Wabe, dann fallen die Pellets.
 */ /** Abstand zwischen zwei Stationen und Dauer einer Strecke des Stroms */ const STREAM_EVERY = 1;
const STREAM_LEG = 0.6;
const B1 = {
    id: 'b1',
    from: 13.5,
    to: 23.5,
    tracks: [
        /**
     * Der gesicherte Stoffstrom: Rücknahme, Sortierung, Aufbereitung erscheinen nacheinander mit ihrem
     * Namen (0–3) — erst wenn die Zeile getippt ist
     */ t('b1.stations', ...steps(15.4, 3, STREAM_EVERY)),
        /** der Strom läuft von jeder Station zur nächsten, von der letzten in die große Wabe (0–3; Strecke k von k bis k + 1) */ t('b1.stream', ...steps(15.75, 3, STREAM_EVERY, STREAM_LEG)),
        /** Stationen und Strom gehen, bevor die Charge in den Marktplatz schrumpft */ t('b1.stream.opacity', [
            13.5,
            1
        ], [
            22.3,
            1
        ], [
            22.7,
            0
        ]),
        /** der grüne Rand zeichnet sich, wenn der Strom ankommt: aus der weißen Wabe des Zeichens wird die Charge */ t('b1.hex.progress', [
            18.1,
            0
        ], [
            18.8,
            1,
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_IN_OUT"]
        ]),
        /** Sekunden der vorausgerechneten Schüttung (#1513), etwas gerafft: die Pellets fallen, sobald der Strom in der Wabe ist */ t('b1.pour.clock', [
            18.35,
            0
        ], [
            22.35,
            4.4
        ]),
        /**
     * Schon in bw, während die vier Wege erscheinen, wandert die große Wabe nach links an ihren
     * späteren Platz im Marktplatz (Querformat) — der Wechsel dorthin ist dann nur noch ein Schrumpfen
     */ t('b1.shift', [
            6.2,
            0
        ], [
            7.2,
            1,
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_IN_OUT"]
        ]),
        /** Die Charge reist durch den Film (#1513): 0 = große Wabe, 1 = Angebot im Marktplatz-Raster (Hochformat: auch der Weg dorthin) */ t('b1.move', [
            22.75,
            0
        ], [
            23.45,
            1,
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_IN_OUT"]
        ]),
        /** … ins Labor (nach dem Schnitt bm → b3) … */ t('b1.toLab', [
            32.1,
            0
        ], [
            32.9,
            1,
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_IN_OUT"]
        ]),
        /** … auf ihren Platz in der Treppe des Ratings (nach dem Schnitt b3 → b2) … */ t('b1.toRank', [
            41.1,
            0
        ], [
            41.9,
            1,
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_IN_OUT"]
        ]),
        /** … und in die Gitterbox (nach dem Schnitt b2 → b4): verpackt und verschickt */ t('b1.toBox', [
            57.6,
            0
        ], [
            58.4,
            1,
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_IN_OUT"]
        ])
    ]
};
const BM = {
    id: 'bm',
    from: 23.5,
    to: 32,
    tracks: [
        t('bm.opacity', [
            23.5,
            0
        ], [
            23.8,
            1
        ], [
            31.7,
            1
        ], [
            32,
            0
        ]),
        /** eins nach dem anderen: erst zeichnen sich die Angebote … */ t('bm.grow', [
            23.7,
            0
        ], [
            24.5,
            1,
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_OUT"]
        ]),
        /** … dann fällt das Material hinein (vorausgerechnete Physik wie b1, leicht gerafft) … */ t('bm.pour.clock', [
            24.6,
            0
        ], [
            26.6,
            2.4
        ]),
        /** … dann erscheint plastship (die Zeile steht längst), und sein Suchstrahl läuft über die Angebote */ t('bm.buyer', [
            26.7,
            0
        ], [
            27.3,
            1,
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_POP"]
        ]),
        t('bm.search', [
            27.5,
            0
        ], [
            28.9,
            1,
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_IN_OUT"]
        ]),
        /** Verbindung plastship ↔ passende Angebote, die übrigen verblassen — dann steht das Ergebnis gut 1 s */ t('bm.links', [
            28.9,
            0
        ], [
            29.3,
            1,
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_OUT"]
        ], [
            31.1,
            1
        ], [
            31.4,
            0
        ]),
        t('bm.others', [
            13.5,
            1
        ], [
            29.3,
            1
        ], [
            29.9,
            0
        ]),
        /** Platz der passenden Angebote: 0 = Raster des Marktplatzes, 1 = Treppe des Ratings — springt verdeckt, während das Labor läuft */ t('bm.gather', [
            32,
            0
        ], [
            32.05,
            1
        ])
    ]
};
const B3 = {
    id: 'b3',
    from: 32,
    to: 41,
    tracks: [
        t('b3.opacity', [
            32,
            0
        ], [
            32.3,
            1
        ], [
            40.7,
            1
        ], [
            41,
            0
        ]),
        t('b3.flask.opacity', [
            32.4,
            0
        ], [
            32.8,
            1
        ]),
        /** die Probe wandert aus der Charge in den Kolben, wenn die Zeile steht */ t('b3.sample.t', [
            34.3,
            0
        ], [
            35.1,
            1,
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_IN_OUT"]
        ]),
        /** die vier Dimensionen erscheinen nacheinander: Mechanik, Optik, Geruch, Reinheit (0–4) */ t('b3.dims', ...steps(35.1, 4, 0.9)),
        /** jede Dimension füllt sich kurz nach ihrem Erscheinen in ihrer Farbe: gemessen (0–4, gefüllt ab i + 1, #1993) */ t('b3.checks', [
            35,
            0
        ], [
            38.6,
            4
        ]),
        /** die Norm unter dem Kolben, wenn alle vier gemessen sind */ t('b3.norm', [
            38.9,
            0
        ], [
            39.2,
            1
        ])
    ]
};
/** Abstand zwischen zwei Metriken im Rating und Dauer, in der eine erscheint (Wabe, Name, Balken) */ const METRIC_EVERY = 0.75;
const METRIC_FADE = 0.4;
const B2 = {
    id: 'b2',
    from: 41,
    to: 57.5,
    tracks: [
        /** Die passenden Angebote stehen im Marktplatz (bm), treten für das Labor ab und kommen im Rating wieder, alle auf einer Höhe — erst wenn die Charge aus dem Labor auf ihrem Platz links ankommt, sonst überlagern sie sich */ t('b2.opacity', [
            23.5,
            0
        ], [
            23.8,
            1
        ], [
            31.1,
            1
        ], [
            31.7,
            0
        ], [
            41.4,
            0
        ], [
            41.8,
            1
        ], [
            57.2,
            1
        ], [
            57.5,
            0
        ]),
        t('b2.material', [
            13.5,
            1
        ], [
            31.1,
            1
        ], [
            31.7,
            0,
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_IN_OUT"]
        ], [
            41.4,
            0
        ], [
            41.8,
            1,
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_OUT"]
        ], [
            57,
            1
        ], [
            57.4,
            0,
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_IN_OUT"]
        ]),
        /**
     * 1. Die vier Metriken kommen nacheinander (0–4), wenn die Zeile steht: oben die Wabe mit Namen,
     * in jeder Material-Wabe wächst zugleich ihr Balken — Metrik k von k bis k + 1
     */ t('b2.metrics', ...steps(42.9, 4, METRIC_EVERY, METRIC_FADE)),
        /** 2. Marktvergleich: die Messwerte ändern sich, steigende grün, fallende rot — 0 = Start-, 1 = neue Werte */ t('b2.values', [
            46.4,
            0
        ], [
            47.8,
            1,
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_IN_OUT"]
        ]),
        /** 3. Die Balken bleiben stehen, dann wird eingestuft: 0 = alle auf einer Höhe, 1 = aufsteigende Treppe nach den neuen Werten */ t('b2.rank.t', [
            48.6,
            0
        ], [
            50.2,
            1,
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_IN_OUT"]
        ]),
        /** Sprung statt Rampe: sonst färbt RankingBars je Frame alle Instanzen neu */ t('b2.highlight', [
            13.5,
            -1
        ], [
            50.24,
            -1
        ], [
            50.25,
            4
        ]),
        /** 4. Drei Klassen: Proven, Plus, Premium — je zwei Stufen der Treppe bekommen Farbe und Namen ihrer Klasse (0–3) */ t('b2.classes', ...steps(50.6, 3, 0.8)),
        /** die Siegerin bekommt das Klassen-Abzeichen (Monitored Materials), wenn ihre Klasse genannt ist, und trägt es weiter (#1513) */ t('b2.badge', [
            52.3,
            0
        ], [
            52.8,
            1,
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_POP"]
        ]),
        /** die übrigen Materialien, die Messbalken und die Klassen treten zurück … */ t('b2.others', [
            13.5,
            1
        ], [
            54.1,
            1
        ], [
            54.6,
            0
        ]),
        /** … die Verifizierungsurkunde von Monitored Materials skizziert sich (#1513) */ t('b2.cert', [
            54.5,
            0
        ], [
            55.7,
            1
        ])
    ]
};
const B4 = {
    id: 'b4',
    from: 57.5,
    to: 66.5,
    tracks: [
        t('b4.opacity', [
            57.5,
            0
        ], [
            57.8,
            1
        ], [
            66.2,
            1
        ], [
            66.5,
            0
        ]),
        /** Box steht, die Charge aus dem Rating wird hineingepackt (b1.toBox), dann Scan */ t('b4.box.opacity', [
            57.5,
            0
        ], [
            57.9,
            1
        ]),
        t('b4.scan.t', [
            59,
            0
        ], [
            60.2,
            1,
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_IN_OUT"]
        ]),
        /** die Karte baut sich auf, bevor die zweite Zeile tippt; Plaketten und Routen danach */ t('b4.map.reveal', [
            60.5,
            0
        ], [
            61.9,
            1,
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_OUT"]
        ]),
        t('b4.pins', [
            61.7,
            0
        ], [
            62.5,
            1
        ]),
        t('b4.route', [
            62.9,
            0
        ], [
            64.4,
            1,
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_IN_OUT"]
        ]),
        /** eine zweite Lieferung quer dazu, kurz versetzt und in die Gegenrichtung (#1993): Ware fließt in beide Richtungen */ t('b4.route2', [
            63.3,
            0
        ], [
            64.8,
            1,
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_IN_OUT"]
        ])
    ]
};
const B6 = {
    id: 'b6',
    from: 66.5,
    to: 74,
    tracks: [
        /** Flugfortschritt der drei Karten, versetzt — ab dem Ende der Zeile */ t('b6.cards', [
            68.6,
            [
                0,
                0,
                0
            ]
        ], [
            69.4,
            [
                1,
                0,
                0
            ]
        ], [
            70.2,
            [
                1,
                1,
                0
            ]
        ], [
            71,
            [
                1,
                1,
                1
            ]
        ]),
        /** Nachhaltung: die Nachweise bleiben gültig, das Zeichen dreht sich (#1513) */ t('b6.refresh', [
            71.2,
            0
        ], [
            71.7,
            1,
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_POP"]
        ], [
            73.8,
            1
        ], [
            74,
            0
        ]),
        t('b6.ai.scale', [
            72,
            0
        ], [
            72.6,
            1,
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_POP"]
        ], [
            73.8,
            1
        ], [
            74,
            0
        ]),
        /** Laptop, Tablet, Handy zeichnen sich nach dem Monitor versetzt ein („geht überall“) */ t('b6.laptop', [
            67.3,
            0
        ], [
            68.1,
            1,
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_OUT"]
        ]),
        t('b6.tablet', [
            67.6,
            0
        ], [
            68.4,
            1,
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_OUT"]
        ]),
        t('b6.phone', [
            67.9,
            0
        ], [
            68.7,
            1,
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_OUT"]
        ])
    ]
};
const B5 = {
    id: 'b5',
    from: 74,
    to: 82,
    tracks: [
        t('b5.opacity', [
            74,
            0
        ], [
            74.3,
            1
        ], [
            81.7,
            1
        ], [
            82,
            0
        ]),
        /** der Ansprechpartner steht in der Mitte */ t('b5.reveal', [
            74.1,
            0
        ], [
            74.9,
            1,
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_OUT"]
        ]),
        /** vier Partnergruppen, eine nach der anderen mit ihrem Namen — erst wenn die Zeile getippt ist (0–4) */ t('b5.partners', ...steps(75.7, 4, 0.9)),
        /** je Gruppe: die Route vom Ansprechpartner läuft zu ihr, dann das Prüfzeichen (gebrochen 0–4, Beat5 teilt es auf) */ t('b5.checks', [
            76,
            0
        ], [
            79.6,
            4
        ]),
        /** „Ein Ansprechpartner" unter der Mitte, wenn alle vier geprüft sind */ t('b5.contact', [
            79.8,
            0
        ], [
            80.1,
            1
        ])
    ]
};
const B7 = {
    id: 'b7',
    from: 82,
    to: 90,
    tracks: [
        t('b7.opacity', [
            82,
            0
        ], [
            82.3,
            1
        ], [
            89.7,
            1
        ], [
            90,
            0
        ]),
        /** ISO 9001: Siegel prägt sich ein */ t('b7.seal', [
            82.3,
            0
        ], [
            83.5,
            1
        ]),
        /** drei kurze Punkte, was die Norm bedeutet, einer nach dem anderen (0–3) */ t('b7.points', ...steps(85, 3, 1.3))
    ]
};
const BS = {
    id: 'bs',
    from: 90,
    to: 98.5,
    tracks: [
        t('bs.opacity', [
            90,
            0
        ], [
            90.3,
            1
        ], [
            98.2,
            1
        ], [
            98.5,
            0
        ]),
        /** Deutschland: Waben von innen nach außen, dann zieht sich die Grenze darum */ t('bs.map.reveal', [
            90.3,
            0
        ], [
            91.7,
            1,
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_OUT"]
        ]),
        t('bs.map.outline', [
            91.3,
            0
        ], [
            92.4,
            1,
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_IN_OUT"]
        ]),
        t('bs.pin', [
            92.4,
            0
        ], [
            92.9,
            1,
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_POP"]
        ]),
        /** drei Punkte, was gemeint ist und warum, einer nach dem anderen (0–3) */ t('bs.points', ...steps(93.2, 3, 1.3))
    ]
};
const B8 = {
    id: 'b8',
    from: 98.5,
    to: 111,
    tracks: [
        /** die Stationen erscheinen reihum, je Wabe versetzt (Beat8 verteilt den Fortschritt) */ t('b8.gather', [
            98.5,
            0
        ], [
            99.8,
            1
        ]),
        /** das RIGK-Zeichen in der Mitte */ t('b8.rigk', [
            98.6,
            0
        ], [
            99.2,
            1,
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_POP"]
        ]),
        /** eine Runde durch den Kreislauf (0–6): je Schritt eine Strecke, von plastship reihum zurück zu plastship */ t('b8.lap', [
            100.5,
            0
        ], [
            105.3,
            6
        ]),
        /** die Namen der Stationen (0–6): jeder erscheint, wenn der Weg bei seiner Station ankommt */ t('b8.names', ...steps(101.15, 6, 0.8)),
        /** die Namen gehen, bevor sich der Kreislauf zusammenzieht */ t('b8.names.opacity', [
            98.5,
            1
        ], [
            107,
            1
        ], [
            107.3,
            0
        ]),
        /** der Kreislauf zieht sich in die Mitte zusammen */ t('b8.merge', [
            107.2,
            0
        ], [
            107.8,
            1,
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_IN"]
        ]),
        /** die weiße Wabe von plastship wächst zur weißen Wabe des Schlussbilds */ t('b8.grow', [
            107.5,
            0
        ], [
            108.05,
            1,
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_IN_OUT"]
        ]),
        /** weiße Wabe springt aus dem zusammengezogenen Kreislauf, darauf das Zeichen in Blau und Grün */ t('b8.plate', [
            107.65,
            0
        ], [
            108.25,
            1,
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_POP"]
        ]),
        t('b8.logo', [
            108,
            0
        ], [
            108.65,
            1,
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_POP"]
        ]),
        /** Schriftzug unter der Bildmarke */ t('b8.word', [
            108.4,
            0
        ], [
            109.1,
            1,
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_OUT"]
        ]),
        /** zwei grüne Wellen als Wabenrand nach außen */ t('b8.wave', [
            107.75,
            0
        ], [
            109,
            1,
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_OUT"]
        ]),
        t('b8.wave2', [
            108,
            0
        ], [
            109.2,
            1,
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_OUT"]
        ]),
        /**
     * Link-Waben um das Zeichen (#1993), nach Zeichen und Schriftzug reihum im Uhrzeigersinn (0–5):
     * kurz versetzt, alle vor dem Filmende; sie bleiben stehen, solange der Film beendet ist
     */ t('b8.endlinks', ...steps(109.2, 5, 0.3, 0.25))
    ]
};
const BEATS = [
    B0,
    BW,
    B1,
    BM,
    B3,
    B2,
    B4,
    B6,
    B5,
    B7,
    BS,
    B8
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/scenes/film.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CAPTIONS",
    ()=>CAPTIONS,
    "FILM",
    ()=>FILM,
    "FILM_DURATION",
    ()=>FILM_DURATION,
    "SCENES",
    ()=>SCENES,
    "beatOf",
    ()=>beatOf,
    "beatStartAt",
    ()=>beatStartAt,
    "beatTime",
    ()=>beatTime,
    "captionAt",
    ()=>captionAt,
    "stepBeat",
    ()=>stepBeat,
    "visibleCaptionText",
    ()=>visibleCaptionText
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$typewriter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/motion/typewriter.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$beats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/scenes/beats.ts [app-client] (ecmascript)");
;
;
const FILM_DURATION = 111;
const SCENES = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$beats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BEATS"];
const FILM = {
    duration: FILM_DURATION,
    tracks: [
        ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$beats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHARED_TRACKS"],
        ...SCENES.flatMap((s)=>s.tracks)
    ],
    markers: SCENES.map((s)=>({
            id: s.id,
            at: s.from
        }))
};
const beatOf = (id)=>{
    const beat = SCENES.find((s)=>s.id === id);
    if (!beat) throw new Error(`Unbekannter Beat: ${id}`);
    return beat;
};
const beatTime = (id, seconds = 0)=>beatOf(id).from + seconds;
const beatStartAt = (time)=>{
    const t = Math.min(FILM_DURATION, Math.max(0, Number.isFinite(time) ? time : 0));
    const beat = SCENES.find((s)=>t >= s.from && t < s.to) ?? SCENES[SCENES.length - 1];
    return beat.from;
};
const stepBeat = (time, direction)=>{
    const start = beatStartAt(time);
    const index = SCENES.findIndex((s)=>s.from === start);
    if (direction > 0) return index + 1 < SCENES.length ? SCENES[index + 1].from : start;
    const nearStart = time - start < 1;
    return nearStart && index > 0 ? SCENES[index - 1].from : start;
};
const CAPTIONS = [
    // steht sofort ganz da (typeSeconds 0): derselbe Claim wie im Schlussbild, der Neustart zeigt keinen Schnitt
    {
        id: 'b0',
        from: 0,
        to: 3.7,
        typeSeconds: 0
    },
    {
        id: 'bw',
        from: 4.9,
        to: 13.3,
        typeSeconds: 1.4
    },
    {
        id: 'b1',
        from: 13.9,
        to: 23.3,
        typeSeconds: 1.4
    },
    {
        id: 'bm',
        from: 23.8,
        to: 31.8,
        typeSeconds: 1.4
    },
    {
        id: 'b3',
        from: 32.3,
        to: 40.8,
        typeSeconds: 1.4
    },
    {
        id: 'b2',
        from: 41.3,
        to: 57.3,
        typeSeconds: 1.2
    },
    {
        id: 'b4s',
        from: 57.8,
        to: 60.8,
        typeSeconds: 1.0
    },
    {
        id: 'b4',
        from: 61.1,
        to: 66.3,
        typeSeconds: 1.4
    },
    {
        id: 'b6',
        from: 66.8,
        to: 73.8,
        typeSeconds: 1.4
    },
    {
        id: 'b5',
        from: 74.3,
        to: 81.8,
        typeSeconds: 1.0
    },
    {
        id: 'b7',
        from: 82.3,
        to: 89.8,
        typeSeconds: 1.4
    },
    {
        id: 'bs',
        from: 90.3,
        to: 98.3,
        typeSeconds: 1.2
    },
    {
        id: 'b8k',
        from: 98.8,
        to: 107.3,
        typeSeconds: 1.2
    },
    {
        id: 'b8',
        from: 108.3,
        to: 111,
        typeSeconds: 1.0
    }
];
/** Bildunterschriften auf der Bühne (onScreen: false nur im Transkript) */ const ON_SCREEN = CAPTIONS.filter(_c = (c)=>c.onScreen !== false);
_c1 = ON_SCREEN;
const captionAt = (time)=>{
    if (time >= FILM_DURATION) return ON_SCREEN[ON_SCREEN.length - 1] ?? null;
    return ON_SCREEN.find((c)=>time >= c.from && time < c.to) ?? null;
};
const schedules = new Map();
const visibleCaptionText = (caption, text, time)=>{
    if (!Number.isFinite(time) || time < caption.from) return '';
    // ohne Tippdauer steht die Zeile sofort
    if (caption.typeSeconds <= 0) return text;
    const key = `${caption.typeSeconds}|${text}`;
    let schedule = schedules.get(key);
    if (!schedule) {
        schedule = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$typewriter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typingSchedule"])(text, caption.typeSeconds);
        schedules.set(key, schedule);
    }
    return text.slice(0, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$typewriter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typedChars"])(schedule, time - caption.from));
};
var _c, _c1;
__turbopack_context__.k.register(_c, "ON_SCREEN$CAPTIONS.filter");
__turbopack_context__.k.register(_c1, "ON_SCREEN");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/scenes/layout.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CAMERA_Z",
    ()=>CAMERA_Z,
    "CENTER",
    ()=>CENTER,
    "CYCLE_COUNT",
    ()=>CYCLE_COUNT,
    "CYCLE_HUB_R",
    ()=>CYCLE_HUB_R,
    "CYCLE_TILE_R",
    ()=>CYCLE_TILE_R,
    "FOV",
    ()=>FOV,
    "HEX_RADIUS",
    ()=>HEX_RADIUS,
    "ISO_POINT_COUNT",
    ()=>ISO_POINT_COUNT,
    "ISO_POINT_R",
    ()=>ISO_POINT_R,
    "LAB_DIM_COUNT",
    ()=>LAB_DIM_COUNT,
    "LAB_DIM_PORTRAIT_SCALE",
    ()=>LAB_DIM_PORTRAIT_SCALE,
    "LAB_DIM_R",
    ()=>LAB_DIM_R,
    "LAB_PORTRAIT_SCALE",
    ()=>LAB_PORTRAIT_SCALE,
    "LAB_TILE_R",
    ()=>LAB_TILE_R,
    "LEGEND_R",
    ()=>LEGEND_R,
    "LINE",
    ()=>LINE,
    "MONITOR",
    ()=>MONITOR,
    "PLATE_DEPTH",
    ()=>PLATE_DEPTH,
    "PORTAL",
    ()=>PORTAL,
    "PORTRAIT_ASPECT",
    ()=>PORTRAIT_ASPECT,
    "PORTRAIT_MAX_ASPECT",
    ()=>PORTRAIT_MAX_ASPECT,
    "PORTRAIT_QUERY",
    ()=>PORTRAIT_QUERY,
    "PORTRAIT_VIEW",
    ()=>PORTRAIT_VIEW,
    "REPLAY_SIZE",
    ()=>REPLAY_SIZE,
    "SEAL_PORTRAIT_SCALE",
    ()=>SEAL_PORTRAIT_SCALE,
    "SERVER_POINT_COUNT",
    ()=>SERVER_POINT_COUNT,
    "STAGE",
    ()=>STAGE,
    "cycleLabelFrame",
    ()=>cycleLabelFrame,
    "cycleStationAt",
    ()=>cycleStationAt,
    "isoLabelFrame",
    ()=>isoLabelFrame,
    "isoPointAt",
    ()=>isoPointAt,
    "labDimAt",
    ()=>labDimAt,
    "labDimLabelFrame",
    ()=>labDimLabelFrame,
    "labDimScale",
    ()=>labDimScale,
    "labFlaskAt",
    ()=>labFlaskAt,
    "labFlowFrom",
    ()=>labFlowFrom,
    "labMaterialAt",
    ()=>labMaterialAt,
    "labNormFrame",
    ()=>labNormFrame,
    "labelFrame",
    ()=>labelFrame,
    "legendAt",
    ()=>legendAt,
    "legendLabelFrame",
    ()=>legendLabelFrame,
    "replayFrame",
    ()=>replayFrame,
    "sealAt",
    ()=>sealAt,
    "serverLabelFrame",
    ()=>serverLabelFrame,
    "serverMapAt",
    ()=>serverMapAt,
    "serverPointAt",
    ()=>serverPointAt,
    "stageLayout",
    ()=>stageLayout,
    "stageView",
    ()=>stageView,
    "stageZoom",
    ()=>stageZoom,
    "worldToStage",
    ()=>worldToStage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$cameraFraming$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/scene3d/cameraFraming.ts [app-client] (ecmascript)");
;
const STAGE = {
    width: 16,
    height: 9
};
const FOV = 20;
const CAMERA_Z = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$cameraFraming$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["distanceForWidth"])(STAGE.width, FOV, STAGE.width / STAGE.height);
const CENTER = [
    0,
    0.9,
    0
];
const MONITOR = {
    width: 5.4,
    height: 3.3
};
const HEX_RADIUS = 2;
const PLATE_DEPTH = 0.08;
const LINE = {
    bold: 0.06,
    regular: 0.045,
    thin: 0.02
};
const PORTAL = {
    from: [
        [
            -7,
            2.5,
            0
        ],
        [
            7,
            2.2,
            0
        ],
        [
            -6.5,
            -1.5,
            0
        ]
    ],
    to: [
        -1.1,
        CENTER[1] + 0.2,
        0.05
    ],
    stack: [
        1.1,
        -0.05,
        0.01
    ]
};
const PORTRAIT_QUERY = '(max-width: 767px) and (orientation: portrait)';
const PORTRAIT_ASPECT = 4 / 5;
const PORTRAIT_MAX_ASPECT = 1.2;
const PORTRAIT_VIEW = {
    width: 9.6,
    height: 12
};
const stageLayout = (aspect)=>Number.isFinite(aspect) && aspect > 0 && aspect < PORTRAIT_MAX_ASPECT ? 'portrait' : 'landscape';
const stageZoom = (aspect)=>stageLayout(aspect) === 'landscape' ? 1 : Math.min(1, STAGE.height * aspect / PORTRAIT_VIEW.width, STAGE.height / PORTRAIT_VIEW.height);
const stageView = (layout)=>{
    if (layout === 'landscape') return STAGE;
    const height = STAGE.height / stageZoom(PORTRAIT_ASPECT);
    return {
        width: height * PORTRAIT_ASPECT,
        height
    };
};
const worldToStage = (x, y, layout)=>{
    const view = stageView(layout);
    return {
        left: 50 + x / view.width * 100,
        top: 50 - y / view.height * 100
    };
};
/**
 * Prozentwert auf drei Nachkommastellen. Die Lagen entstehen aus Sinus und
 * Kosinus; Server und Browser treffen dabei nicht immer dieselbe letzte
 * Stelle, das CSS (und damit der Klassenname) wäre verschieden und React
 * meldete beim Hydrieren einen Unterschied.
 */ const percent = (value)=>Math.round(value * 1000) / 1000;
const labelFrame = (x, y, layout, place, width)=>{
    const spot = worldToStage(x, y, layout);
    const view = stageView(layout);
    const free = place === 'right' ? 98 - spot.left : place === 'left' ? spot.left - 2 : Math.min(spot.left, 100 - spot.left) * 2 - 2;
    const wanted = width === undefined ? free : width / view.width * 100;
    return {
        left: percent(spot.left),
        top: percent(spot.top),
        width: percent(Math.max(0, Math.min(free, wanted))),
        place
    };
};
const SEAL_PORTRAIT_SCALE = 0.8;
const sealAt = (portrait)=>portrait ? [
        0,
        CENTER[1] + 2.3,
        0
    ] : [
        -2.9,
        CENTER[1],
        0
    ];
const ISO_POINT_COUNT = 3;
const ISO_POINT_R = 0.16;
const isoPointAt = (i, portrait)=>portrait ? [
        -2.9,
        CENTER[1] - 1.3 - i * 1.0,
        0
    ] : [
        0.5,
        CENTER[1] + (1 - i) * 1.05,
        0
    ];
const isoLabelFrame = (i, layout)=>{
    const [x, y] = isoPointAt(i, layout === 'portrait');
    return labelFrame(x + ISO_POINT_R + 0.3, y, layout, 'right');
};
const LAB_PORTRAIT_SCALE = 1;
const LAB_DIM_PORTRAIT_SCALE = 1.3;
const labDimScale = (portrait)=>portrait ? LAB_DIM_PORTRAIT_SCALE : 1;
const labMaterialAt = (portrait)=>portrait ? [
        -2.4,
        3.6,
        0
    ] : [
        -5.6,
        CENTER[1],
        0
    ];
const labFlaskAt = (portrait)=>portrait ? [
        1.9,
        3.6,
        0
    ] : [
        -1.7,
        CENTER[1],
        0
    ];
const LAB_DIM_COUNT = 4;
const LAB_DIM_R = 0.52;
const labDimAt = (i, portrait)=>portrait ? [
        i % 2 === 0 ? -3.6 : 0.6,
        i < 2 ? 1.0 : -1.2,
        0
    ] : [
        2.6,
        CENTER[1] + (1.5 - i) * 1.3,
        0
    ];
const labFlowFrom = (i, portrait)=>portrait && i >= 2 ? labDimAt(i - 2, portrait) : labFlaskAt(portrait);
const labDimLabelFrame = (i, layout)=>{
    const portrait = layout === 'portrait';
    const [x, y] = labDimAt(i, portrait);
    // Hochformat: linke Spalte bis vor die Wabe der rechten, rechte bis an den Rand
    return labelFrame(x + LAB_DIM_R * labDimScale(portrait) * (Math.sqrt(3) / 2) + 0.28, y, layout, 'right', portrait ? i % 2 === 0 ? 2.6 : 3.2 : undefined);
};
const LAB_TILE_R = 1.5;
const labNormFrame = (layout)=>{
    const portrait = layout === 'portrait';
    const [x, y] = labFlaskAt(portrait);
    // Hochformat: über der Wabe — darunter laufen die Ströme zu den Dimensionen
    return portrait ? labelFrame(x, y + LAB_TILE_R * LAB_PORTRAIT_SCALE + 0.12, layout, 'above', 3.6) : labelFrame(x, y - LAB_TILE_R - 0.15, layout, 'below', 4.2);
};
const LEGEND_R = 0.4;
const legendAt = (i, portrait)=>portrait ? [
        i % 2 === 0 ? -4.2 : 0.3,
        i < 2 ? 5.15 : 4.2,
        0
    ] : [
        -6.6 + i * 3.6,
        CENTER[1] + 2.95,
        0
    ];
const legendLabelFrame = (i, layout)=>{
    const portrait = layout === 'portrait';
    const [x, y] = legendAt(i, portrait);
    return labelFrame(x + LEGEND_R * (Math.sqrt(3) / 2) + 0.22, y, layout, 'right', portrait ? 3.3 : 2.5);
};
const serverMapAt = (portrait)=>portrait ? [
        0,
        2.9,
        0
    ] : [
        -2.9,
        CENTER[1],
        0
    ];
const SERVER_POINT_COUNT = 3;
const serverPointAt = (i, portrait)=>portrait ? [
        -3.2,
        -0.5 - i * 0.95,
        0
    ] : [
        1.2,
        CENTER[1] + (1 - i) * 1.05,
        0
    ];
const serverLabelFrame = (i, layout)=>{
    const [x, y] = serverPointAt(i, layout === 'portrait');
    return labelFrame(x + ISO_POINT_R + 0.3, y, layout, 'right');
};
const CYCLE_COUNT = 6;
const CYCLE_TILE_R = 0.68;
const CYCLE_HUB_R = 1.15;
/** Halbachsen der Ellipse [waagerecht, senkrecht] */ // Hochformat (#2117): waagerecht 1,3 statt 1,5 — die Namen links und rechts behalten Abstand zum Rand
const CYCLE_AXES = {
    landscape: [
        3.6,
        1.79
    ],
    portrait: [
        1.3,
        2.75
    ]
};
const cycleStationAt = (i, portrait = false)=>{
    const [rx, ry] = CYCLE_AXES[portrait ? 'portrait' : 'landscape'];
    // Hochformat: um eine Viertelrunde gedreht, Station 0 steht oben
    const a = Math.PI / 3 * i + (portrait ? Math.PI / 2 : 0);
    return [
        CENTER[0] + Math.cos(a) * rx,
        CENTER[1] + Math.sin(a) * ry,
        0
    ];
};
const cycleLabelFrame = (i, layout)=>{
    const portrait = layout === 'portrait';
    const [x, y] = cycleStationAt(i, portrait);
    // auf der Mittelachse (Hochformat oben und unten): Name über bzw. unter der Wabe
    if (Math.abs(x - CENTER[0]) < 0.01) {
        const above = y > CENTER[1];
        return labelFrame(x, y + (above ? 1 : -1) * (CYCLE_TILE_R + 0.12), layout, above ? 'above' : 'below', 4);
    }
    const right = x > CENTER[0];
    // Hochformat (#2117): Namen dichter an der Wabe, damit „Inverkehrbringen" in größerer Schrift Abstand zum Rand behält
    const reach = CYCLE_TILE_R * (Math.sqrt(3) / 2) + (portrait ? 0.12 : 0.2);
    return labelFrame(x + (right ? reach : -reach), y, layout, right ? 'right' : 'left', portrait ? undefined : 3.6);
};
const REPLAY_SIZE = 0.6;
const replayFrame = (layout)=>{
    const visibleHeight = layout === 'portrait' ? STAGE.height / stageZoom(PORTRAIT_ASPECT) : STAGE.height;
    return {
        top: 50 - CENTER[1] / visibleHeight * 100,
        size: REPLAY_SIZE / visibleHeight * 100
    };
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/scenes/slides.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CHARGE_LOOK",
    ()=>CHARGE_LOOK,
    "SHADOW_OF_SLIDE",
    ()=>SHADOW_OF_SLIDE,
    "SLIDE_COLORS",
    ()=>SLIDE_COLORS,
    "SLIDE_CUTS",
    ()=>SLIDE_CUTS,
    "SLIDE_OF_BEAT",
    ()=>SLIDE_OF_BEAT,
    "beatColors",
    ()=>beatColors,
    "slideAt",
    ()=>slideAt
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/theme.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$darkTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/darkTheme.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$beats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/scenes/beats.ts [app-client] (ecmascript)");
;
;
;
const light = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["themePlastship"].palette;
const dark = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$darkTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["themePlastshipDark"].palette;
/** Auf Blau: weiße Linien, Markengrün, Wabenflächen im hellen Blau des Dark Themes (3,9:1) */ const BLUE = {
    primary: light.default.white,
    secondary: light.default.secondary,
    line: light.default.white,
    background: light.default.primary,
    muted: dark.default.primary,
    text: light.text.onAccent
};
/**
 * Auf Weiß: Linien und Text in Markenblau (text.onLight), Grün in der dunklen
 * Variante (#37BA24 hat auf Weiß nur 2,6:1), Flächen in text.secondary
 * (6,4:1).
 */ const WHITE = {
    primary: light.default.primary,
    secondary: light.site.greenDark,
    line: light.text.onLight,
    background: light.default.white,
    muted: light.text.secondary,
    text: light.text.onLight
};
/** Hellgrau der Seite (default.greyLight), sonst wie Weiß */ const GREY = {
    ...WHITE,
    background: light.default.greyLight
};
/**
 * Auf Markengrün (#1513): alles in Weiß — bewusste Gestaltungsentscheidung.
 * Blau auf Grün wirkt unruhig; Weiß hat dort nur 2,6:1, deshalb trägt die
 * grüne Folie nur kurze, große Zeilen (Headline-Typografie) und keine Flächen.
 */ const GREEN = {
    primary: light.default.white,
    secondary: light.default.white,
    line: light.default.white,
    background: light.default.secondary,
    muted: light.default.white,
    text: light.text.onAccent
};
const SLIDE_COLORS = {
    primary: BLUE,
    white: WHITE,
    greyLight: GREY,
    secondary: GREEN
};
const CHARGE_LOOK = {
    primary: {
        plate: light.default.white,
        border: light.default.secondary
    },
    white: {
        plate: light.default.greyLight,
        border: light.site.greenDark
    },
    greyLight: {
        plate: light.default.white,
        border: light.site.greenDark
    },
    // auf Grün steht derzeit keine Charge — für den Fall: weiß mit blauem Rand
    secondary: {
        plate: light.default.white,
        border: light.default.primary
    }
};
const SLIDE_OF_BEAT = {
    // Kreislauf, vier Wege und Rezyklat auf derselben Folie: Markenblau zu Beginn,
    // die Prüf-Wabe wird nahtlos zur Wabe von b1 (#1513)
    b0: 'primary',
    bw: 'primary',
    b1: 'primary',
    // Marktplatz und Überwachung auf derselben Folie: kein Wischer, die Angebote gehen nahtlos über (#1513)
    bm: 'white',
    b2: 'white',
    b3: 'primary',
    b4: 'greyLight',
    b5: 'secondary',
    b6: 'white',
    b7: 'primary',
    bs: 'greyLight',
    b8: 'primary'
};
const SLIDE_CUTS = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$beats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BEATS"].slice(1).map((beat, i)=>({
        beat: beat.id,
        at: beat.from,
        from: SLIDE_OF_BEAT[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$beats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BEATS"][i].id],
        to: SLIDE_OF_BEAT[beat.id]
    })).filter(_c = (c)=>c.from !== c.to);
_c1 = SLIDE_CUTS;
/** Ein Objekt, das je Aufruf überschrieben wird — kein Anlegen je Frame */ const STATE = {
    slide: 'primary',
    background: BLUE.background,
    text: BLUE.text
};
const slideAt = (time)=>{
    const beat = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$beats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BEATS"].find((b)=>time >= b.from && time < b.to) ?? (time < 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$beats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BEATS"][0] : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$beats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BEATS"][__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$beats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BEATS"].length - 1]);
    const slide = SLIDE_OF_BEAT[beat.id];
    STATE.slide = slide;
    STATE.background = SLIDE_COLORS[slide].background;
    STATE.text = SLIDE_COLORS[slide].text;
    return STATE;
};
const SHADOW_OF_SLIDE = {
    primary: 0.22,
    white: 0.09,
    greyLight: 0.09,
    secondary: 0.1
};
const beatColors = (beatId)=>SLIDE_COLORS[SLIDE_OF_BEAT[beatId] ?? 'primary'];
var _c, _c1;
__turbopack_context__.k.register(_c, "SLIDE_CUTS$BEATS.slice(1)\n  .map((beat, i) => ({ beat: beat.id, at: beat.from, from: SLIDE_OF_BEAT[BEATS[i].id], to: SLIDE_OF_BEAT[beat.id] }))\n  .filter");
__turbopack_context__.k.register(_c1, "SLIDE_CUTS");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/scenes/types.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "k",
    ()=>k
]);
const k = (at, value, ease)=>({
        at,
        value,
        ease
    });
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/BakedPile.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BakedPile",
    ()=>BakedPile,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$b389eeca$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-b389eeca.esm.js [app-client] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$bakedPourFormat$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/scene3d/bakedPourFormat.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$Flakes$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Atom/Flakes/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$Flakes$2f$Flakes$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Atom/Flakes/Flakes.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$pours$2e$generated$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/pours.generated.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
const scratchMatrix = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix4"]();
const scratchPos = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
const scratchQuat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"]();
const scratchScale = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
/** Geladene Schüttungen je Spezifikation (Objektidentität) — mehrere Waben teilen sich eine Aufzeichnung */ const pours = new WeakMap();
const loadOnce = (spec, options)=>{
    let job = pours.get(spec);
    if (!job) {
        const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$bakedPourFormat$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pourId"])(spec, options);
        const file = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$pours$2e$generated$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BAKED_POUR_FILES"][id];
        job = file ? file().then((mod)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$bakedPourFormat$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decodeBakedPour"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$bakedPourFormat$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bytesFromBase64"])(mod.default), spec)) : Promise.reject(new Error(`Aufzeichnung ${id} fehlt — bakedPours.sync.test.ts mit WRITE_BAKED_POURS=1 laufen lassen`));
        pours.set(spec, job);
    }
    return job;
};
const BakedPile = ({ spec, clock, options, mirror = false })=>{
    _s();
    const [baked, setBaked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BakedPile.useEffect": ()=>{
            let cancelled = false;
            loadOnce(spec, options).then({
                "BakedPile.useEffect": (result)=>{
                    if (!cancelled) setBaked(result);
                }
            }["BakedPile.useEffect"]).catch({
                "BakedPile.useEffect": (error)=>{
                    // ohne Aufzeichnung bleibt die Wabe leer — der Film läuft weiter
                    if ("TURBOPACK compile-time truthy", 1) console.warn('[BakedPile]', error);
                }
            }["BakedPile.useEffect"]);
            return ({
                "BakedPile.useEffect": ()=>{
                    cancelled = true;
                }
            })["BakedPile.useEffect"];
        }
    }["BakedPile.useEffect"], [
        spec,
        options
    ]);
    const meshRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const lastRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(-1);
    const setMesh = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "BakedPile.useCallback[setMesh]": (mesh)=>{
            meshRef.current = mesh;
            lastRef.current = -1;
        }
    }["BakedPile.useCallback[setMesh]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$b389eeca$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "BakedPile.useFrame": ()=>{
            const mesh = meshRef.current;
            if (!mesh || !baked) return;
            const seconds = clock();
            const at = Math.min(baked.frames - 1, Math.max(0, seconds * baked.hz));
            if (at === lastRef.current) return;
            lastRef.current = at;
            const from = Math.floor(at);
            const to = Math.min(baked.frames - 1, from + 1);
            const share = at - from;
            const n = baked.flakes.length;
            const data = baked.data;
            for(let i = 0; i < n; i++){
                const f = baked.flakes[i];
                const a = (from * n + i) * __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$bakedPourFormat$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STRIDE"];
                const b = (to * n + i) * __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$bakedPourFormat$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STRIDE"];
                const shown = from >= baked.released[i] && seconds > 0;
                scratchPos.set(data[a] + (data[b] - data[a]) * share, data[a + 1] + (data[b + 1] - data[a + 1]) * share, data[a + 2] + (data[b + 2] - data[a + 2]) * share);
                // Drehung auf dem kürzeren Weg mischen, danach normieren
                const flip = data[a + 3] * data[b + 3] + data[a + 4] * data[b + 4] + data[a + 5] * data[b + 5] + data[a + 6] * data[b + 6] < 0 ? -1 : 1;
                scratchQuat.set(data[a + 3] + (data[b + 3] * flip - data[a + 3]) * share, data[a + 4] + (data[b + 4] * flip - data[a + 4]) * share, data[a + 5] + (data[b + 5] * flip - data[a + 5]) * share, data[a + 6] + (data[b + 6] * flip - data[a + 6]) * share).normalize();
                const s = shown ? 1 : 0;
                scratchScale.set(f.scale[0] * s, f.scale[1] * s, f.scale[2] * s);
                mesh.setMatrixAt(i, scratchMatrix.compose(scratchPos, scratchQuat, scratchScale));
            }
            mesh.instanceMatrix.needsUpdate = true;
            mesh.computeBoundingSphere();
        }
    }["BakedPile.useFrame"]);
    if (!baked) return null;
    const flakes = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$Flakes$2f$Flakes$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Flakes"], {
        flakes: baked.flakes,
        geometryType: spec.geometryType,
        physics: false,
        instanceRef: setMesh
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/BakedPile.tsx",
        lineNumber: 119,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
    return mirror ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        scale: [
            -1,
            1,
            1
        ],
        children: flakes
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/BakedPile.tsx",
        lineNumber: 126,
        columnNumber: 19
    }, ("TURBOPACK compile-time value", void 0)) : flakes;
};
_s(BakedPile, "rJBIHl1VMMGeUlZ35hBgBUSywEo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$b389eeca$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c = BakedPile;
const __TURBOPACK__default__export__ = BakedPile;
var _c;
__turbopack_context__.k.register(_c, "BakedPile");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/Beat0.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Beat0",
    ()=>Beat0,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/theme.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$hexGeometry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/scene3d/hexGeometry.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$AnimatedGroup$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Atom/AnimatedGroup/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$AnimatedGroup$2f$AnimatedGroup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Atom/AnimatedGroup/AnimatedGroup.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$HexPrism$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Atom/HexPrism/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$HexPrism$2f$HexPrism$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Atom/HexPrism/HexPrism.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$StrokePath$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Atom/StrokePath/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$StrokePath$2f$StrokePath$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Atom/StrokePath/StrokePath.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$FilmTimeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/FilmTimeContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/scenes/layout.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$FilmIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/FilmIcon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$Beat8$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/Beat8.tsx [app-client] (ecmascript) <locals>");
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
const BRAND = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["themePlastship"].palette.default;
/** Scratch auf Modulebene (siehe Beat2) */ const LOGO_TURN = [
    0,
    0,
    0
];
const Beat0 = ()=>{
    _s();
    const { f, inBeat, colorsFor } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$FilmTimeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFilm"])();
    const colors = colorsFor('b0');
    const word = f('b0.word');
    const logo = f('b0.logo');
    const plate = f('b0.plate');
    const wave = f('b0.wave');
    const unit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Beat0.useMemo[unit]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$hexGeometry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexOutlinePoints"])(1, true, Math.PI / 6)
    }["Beat0.useMemo[unit]"], []);
    const waveOpacity = ()=>{
        const p = wave();
        return p > 0 && p < 1 ? 1 - p : 0;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$AnimatedGroup$2f$AnimatedGroup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedGroup"], {
        name: "b0",
        position: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CENTER"],
        visible: inBeat('b0'),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$AnimatedGroup$2f$AnimatedGroup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedGroup"], {
                name: "b0-wave",
                scale: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$Beat8$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["WAVE_FROM"] + (__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$Beat8$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["WAVE_TO"] - __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$Beat8$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["WAVE_FROM"]) * wave(),
                visible: ()=>waveOpacity() > 0,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$StrokePath$2f$StrokePath$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StrokePath"], {
                    points: unit,
                    width: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LINE"].bold,
                    color: colors.secondary,
                    opacity: waveOpacity
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/Beat0.tsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/Beat0.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$AnimatedGroup$2f$AnimatedGroup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedGroup"], {
                name: "start-plate",
                visible: ()=>plate() > 0,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$HexPrism$2f$HexPrism$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexPrism"], {
                    radius: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HEX_RADIUS"],
                    depth: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PLATE_DEPTH"],
                    color: BRAND.white,
                    opacity: plate,
                    position: [
                        0,
                        0,
                        -__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PLATE_DEPTH"]
                    ]
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/Beat0.tsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/Beat0.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$AnimatedGroup$2f$AnimatedGroup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedGroup"], {
                name: "start-word",
                position: [
                    0,
                    -__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HEX_RADIUS"] - __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$Beat8$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["WORD_GAP"],
                    0.02
                ],
                visible: ()=>word() > 0,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$FilmIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FilmIcon"], {
                    name: "logoWord",
                    size: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$Beat8$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["WORD_WIDTH"],
                    color: colors.text,
                    opacity: word
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/Beat0.tsx",
                    lineNumber: 56,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/Beat0.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$AnimatedGroup$2f$AnimatedGroup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedGroup"], {
                name: "start-logo",
                scale: logo,
                rotation: ()=>{
                    LOGO_TURN[2] = (1 - logo()) * 0.6;
                    return LOGO_TURN;
                },
                visible: ()=>logo() > 0,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$FilmIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FilmIcon"], {
                    name: "logoSign",
                    size: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$Beat8$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["LOGO_SIZE"],
                    color: BRAND.primary,
                    accentColor: BRAND.secondary,
                    position: [
                        0,
                        0,
                        0.02
                    ]
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/Beat0.tsx",
                    lineNumber: 67,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/Beat0.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/Beat0.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Beat0, "Ukp7/hBPYCyxEMpacSm1i7Etm+w=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$FilmTimeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFilm"]
    ];
});
_c = Beat0;
const __TURBOPACK__default__export__ = Beat0;
var _c;
__turbopack_context__.k.register(_c, "Beat0");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/Beat1.tsx [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BADGE_AT",
    ()=>BADGE_AT,
    "BADGE_SCALE",
    ()=>BADGE_SCALE,
    "Beat1",
    ()=>Beat1,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$hexGeometry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/scene3d/hexGeometry.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$mixColor$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/scene3d/mixColor.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$AnimatedGroup$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Atom/AnimatedGroup/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$AnimatedGroup$2f$AnimatedGroup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Atom/AnimatedGroup/AnimatedGroup.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$HexPrism$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Atom/HexPrism/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$HexPrism$2f$HexPrism$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Atom/HexPrism/HexPrism.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$StrokePath$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Atom/StrokePath/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$StrokePath$2f$StrokePath$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Atom/StrokePath/StrokePath.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$FilmTimeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/FilmTimeContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$beats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/scenes/beats.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/scenes/layout.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$BakedPile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/BakedPile.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$pelletPour$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/pelletPour.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$ClassBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/ClassBadge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$rankLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/rankLayout.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$marketLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/marketLayout.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$chargePath$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/chargePath.ts [app-client] (ecmascript)");
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
const BADGE_AT = [
    1.45,
    1.4,
    0.1
];
const BADGE_SCALE = 0.75;
// Scratch auf Modulebene, je Filmzeit einmal beschrieben (wie in Beat2)
const POSITION = [
    0,
    0,
    0
];
const LEGS = {
    shift: 0,
    move: 0,
    toLab: 0,
    toRank: 0,
    rankT: 0,
    toBox: 0
};
const CACHE = {
    at: Number.NaN,
    portrait: false
};
const lerp = (a, b, t)=>a + (b - a) * t;
const Beat1 = ()=>{
    _s();
    const { f, now, chargeLook, colorsFor, portrait } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$FilmTimeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFilm"])();
    const hex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Beat1.useMemo[hex]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$hexGeometry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexOutlinePoints"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HEX_RADIUS"], true, Math.PI / 6)
    }["Beat1.useMemo[hex]"], []);
    const shift = f('b1.shift');
    const move = f('b1.move');
    const rankT = f('b2.rank.t');
    const toLab = f('b1.toLab');
    const toRank = f('b1.toRank');
    const toBox = f('b1.toBox');
    const badge = f('b2.badge');
    const market = f('bm.opacity');
    const search = f('bm.search');
    const marketLine = colorsFor('bm').line;
    // Marktplatz, Labor und Rating stehen im Hochformat verkleinert — Ziel und Größe folgen
    // #2111: Marktplatz und Reihe des Ratings haben im Hochformat eigene Maßstäbe
    const marketScale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$rankLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["marketSpace"])(portrait).scale;
    const rowScale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$rankLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rankSpace"])(portrait).scale;
    const labScale = portrait ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$chargePath$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["B3_PORTRAIT_SCALE"] : 1;
    const sizeRatio = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$rankLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RANK_HEX_R"] / __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HEX_RADIUS"];
    // je Filmzeit einmal rechnen (die Gruppe fragt die Lage je Frame ab)
    const position = ()=>{
        const at = now();
        if (at !== CACHE.at || portrait !== CACHE.portrait) {
            CACHE.at = at;
            CACHE.portrait = portrait;
            LEGS.shift = shift();
            LEGS.move = move();
            LEGS.toLab = toLab();
            LEGS.toRank = toRank();
            LEGS.rankT = rankT();
            LEGS.toBox = toBox();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$chargePath$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chargePosition"])(LEGS, portrait, POSITION);
        }
        return POSITION;
    };
    const scale = ()=>{
        // Größe je Station: Angebot im Raster, im Labor, in der Treppe (schrumpft beim Umsortieren)
        const inMarket = sizeRatio * (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$marketLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["offerScale"])(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$rankLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RANK_HEX_R"]) * marketScale;
        const inRank = sizeRatio * (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$rankLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rankScale"])(rankT(), __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$rankLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RANK_FROM_B1"]) * rowScale;
        const s = lerp(lerp(lerp(1, inMarket, move()), sizeRatio * labScale, toLab()), inRank, toRank());
        // in die Box: schrumpft hinein
        return Math.max(0.0001, s * (1 - toBox()));
    };
    // Linienbreite in Welteinheiten unabhängig vom Gruppenmaßstab
    const width = ()=>lerp(lerp(lerp(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LINE"].bold, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LINE"].regular * marketScale, move()), __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LINE"].regular * labScale, toLab()), __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LINE"].regular * rowScale, toRank());
    // Im Marktplatz ist die Charge ein Angebot wie die anderen: ihr Rand steht dort in der Linienfarbe,
    // bis der Suchstrahl sie findet — dann grün wie die übrigen Treffer (#1964). Davor und danach trägt sie ihr Grün.
    const border = ()=>{
        const m = market() * (1 - (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$marketLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["matchFound"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$rankLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RANK_FROM_B1"], search()));
        return m > 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$mixColor$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mixColor"])(chargeLook().border, marketLine, m) : chargeLook().border;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$AnimatedGroup$2f$AnimatedGroup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedGroup"], {
        name: "b1",
        position: position,
        scale: scale,
        visible: ()=>now() >= __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$beats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PLATE_HANDOVER"] && toBox() < 1,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$HexPrism$2f$HexPrism$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexPrism"], {
                name: "b1-plate",
                radius: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HEX_RADIUS"],
                depth: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PLATE_DEPTH"],
                color: ()=>chargeLook().plate,
                position: [
                    0,
                    0,
                    -__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PLATE_DEPTH"]
                ]
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/Beat1.tsx",
                lineNumber: 98,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$StrokePath$2f$StrokePath$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StrokePath"], {
                points: hex,
                width: width,
                color: border,
                progress: f('b1.hex.progress')
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/Beat1.tsx",
                lineNumber: 100,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$AnimatedGroup$2f$AnimatedGroup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedGroup"], {
                name: "b1-badge",
                position: BADGE_AT,
                scale: ()=>badge() * BADGE_SCALE,
                visible: ()=>badge() > 0,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$ClassBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClassBadge"], {}, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/Beat1.tsx",
                    lineNumber: 103,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/Beat1.tsx",
                lineNumber: 102,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$AnimatedGroup$2f$AnimatedGroup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedGroup"], {
                name: "b1-pellets",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$BakedPile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BakedPile"], {
                    spec: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$pelletPour$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PELLET_POUR"],
                    clock: f('b1.pour.clock'),
                    options: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$pelletPour$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PELLET_BAKE"]
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/Beat1.tsx",
                    lineNumber: 106,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/Beat1.tsx",
                lineNumber: 105,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/Beat1.tsx",
        lineNumber: 96,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Beat1, "whFeIyeneYM/c58RBmAFEvmZTaw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$FilmTimeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFilm"]
    ];
});
_c = Beat1;
const __TURBOPACK__default__export__ = Beat1;
var _c;
__turbopack_context__.k.register(_c, "Beat1");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/Beat1Stream.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Beat1Stream",
    ()=>Beat1Stream,
    "STREAM",
    ()=>STREAM,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/motion/easing.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$hexGeometry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/scene3d/hexGeometry.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$AnimatedGroup$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Atom/AnimatedGroup/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$AnimatedGroup$2f$AnimatedGroup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Atom/AnimatedGroup/AnimatedGroup.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$HexPrism$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Atom/HexPrism/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$HexPrism$2f$HexPrism$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Atom/HexPrism/HexPrism.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$StrokePath$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Atom/StrokePath/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$StrokePath$2f$StrokePath$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Atom/StrokePath/StrokePath.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Molecule$2f$HexRoute$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Molecule/HexRoute/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Molecule$2f$HexRoute$2f$HexRoute$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Molecule/HexRoute/HexRoute.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$FilmTimeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/FilmTimeContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/scenes/layout.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$chargePath$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/chargePath.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$FilmIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/FilmIcon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$imagefilmPalette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/imagefilmPalette.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$streamLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/streamLayout.ts [app-client] (ecmascript)");
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
const STREAM = [
    'recycle',
    'sort',
    'restore'
];
const ICON = 0.6;
/** hinter den Waben: der Strom beginnt und endet unter ihnen */ const FLOW_Z = -0.12;
/** Deckkraft der Waben, über die der Strom gelaufen ist */ const TRAIL = 0.5;
const Beat1Stream = ()=>{
    _s();
    const { f, inBeat, colorsFor, portrait } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$FilmTimeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFilm"])();
    const colors = colorsFor('b1');
    const opacity = f('b1.stream.opacity');
    const stations = f('b1.stations');
    const stream = f('b1.stream');
    const hex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Beat1Stream.useMemo[hex]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$hexGeometry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexOutlinePoints"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$streamLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STREAM_R"], true, Math.PI / 6)
    }["Beat1Stream.useMemo[hex]"], []);
    const spots = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Beat1Stream.useMemo[spots]": ()=>STREAM.map({
                "Beat1Stream.useMemo[spots]": (_, i)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$streamLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["streamAt"])(i, portrait)
            }["Beat1Stream.useMemo[spots]"])
    }["Beat1Stream.useMemo[spots]"], [
        portrait
    ]);
    const origin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Beat1Stream.useMemo[origin]": ()=>{
            const hub = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$chargePath$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hubAt"])(portrait);
            return [
                hub[0],
                hub[1],
                FLOW_Z
            ];
        }
    }["Beat1Stream.useMemo[origin]"], [
        portrait
    ]);
    const legs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Beat1Stream.useMemo[legs]": ()=>Array.from({
                length: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$streamLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STREAM_COUNT"]
            }, {
                "Beat1Stream.useMemo[legs]": (_, k)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$streamLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["streamLeg"])(k, portrait)
            }["Beat1Stream.useMemo[legs]"])
    }["Beat1Stream.useMemo[legs]"], [
        portrait
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$AnimatedGroup$2f$AnimatedGroup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedGroup"], {
        name: "b1-stream",
        visible: ()=>inBeat('b1')() && opacity() > 0,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                position: origin,
                children: legs.map((leg, k)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Molecule$2f$HexRoute$2f$HexRoute$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexRoute"], {
                        name: "b1-stream-leg",
                        from: leg.from,
                        to: leg.to,
                        cellRadius: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$streamLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STREAM_CELL_R"],
                        tileColor: colors.muted,
                        groundColor: colors.background,
                        tileOpacity: TRAIL,
                        lineColor: colors.secondary,
                        lineWidth: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LINE"].regular,
                        // Strecke k zeichnet sich, sobald ihre Station da ist (b1.stream zählt 0–3)
                        progress: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp01"])(stream() - k),
                        opacity: opacity
                    }, k, false, {
                        fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/Beat1Stream.tsx",
                        lineNumber: 52,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/Beat1Stream.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            STREAM.map((name, i)=>{
                // #2108: im Hochformat größer (streamScale)
                const appear = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_POP"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp01"])(stations() - i)) * (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$streamLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["streamScale"])(portrait);
                // jede Station in ihrer festen Farbe (#1964): Kontur und Fläche — dieselbe wie im Kreislauf am Schluss
                const tint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$imagefilmPalette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["termColor"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$imagefilmPalette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STREAM_TERMS"][i], colors.background);
                // Fläche in der Farbe des Begriffs, Motiv und Name darauf weiß (#1975); zu helle Töne dunkelt termSurface ab
                const surface = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$imagefilmPalette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["termSurface"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$imagefilmPalette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STREAM_TERMS"][i], colors.background);
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$AnimatedGroup$2f$AnimatedGroup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedGroup"], {
                    name: "b1-station",
                    position: spots[i],
                    scale: appear,
                    visible: ()=>appear() > 0,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$HexPrism$2f$HexPrism$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexPrism"], {
                            name: "b1-station-fill",
                            radius: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$streamLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STREAM_R"],
                            color: surface,
                            opacity: opacity,
                            position: [
                                0,
                                0,
                                -0.01
                            ]
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/Beat1Stream.tsx",
                            lineNumber: 79,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$StrokePath$2f$StrokePath$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StrokePath"], {
                            points: hex,
                            width: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LINE"].regular,
                            color: tint,
                            opacity: opacity
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/Beat1Stream.tsx",
                            lineNumber: 80,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$FilmIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FilmIcon"], {
                            name: name,
                            size: ICON,
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$imagefilmPalette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ON_TERM"],
                            opacity: opacity
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/Beat1Stream.tsx",
                            lineNumber: 81,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, name, true, {
                    fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/Beat1Stream.tsx",
                    lineNumber: 77,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0));
            })
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/Beat1Stream.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Beat1Stream, "zQE7qEwnMjRyTwedMfMly++9GGw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$FilmTimeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFilm"]
    ];
});
_c = Beat1Stream;
const __TURBOPACK__default__export__ = Beat1Stream;
var _c;
__turbopack_context__.k.register(_c, "Beat1Stream");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/Beat2.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Beat2",
    ()=>Beat2,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/theme.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/motion/easing.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$hexGeometry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/scene3d/hexGeometry.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$mixColor$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/scene3d/mixColor.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$AnimatedGroup$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Atom/AnimatedGroup/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$AnimatedGroup$2f$AnimatedGroup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Atom/AnimatedGroup/AnimatedGroup.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$HexPrism$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Atom/HexPrism/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$HexPrism$2f$HexPrism$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Atom/HexPrism/HexPrism.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$StrokePath$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Atom/StrokePath/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$StrokePath$2f$StrokePath$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Atom/StrokePath/StrokePath.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Molecule$2f$RankingBars$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Molecule/RankingBars/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Molecule$2f$RankingBars$2f$RankingBars$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Molecule/RankingBars/RankingBars.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$FilmTimeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/FilmTimeContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/scenes/layout.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$Beat3$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/Beat3.tsx [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$FilmIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/FilmIcon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$materialPiles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/materialPiles.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$rankLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/rankLayout.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$BakedPile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/BakedPile.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$CertificateSketch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/CertificateSketch.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$marketLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/marketLayout.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$imagefilmPalette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/imagefilmPalette.ts [app-client] (ecmascript)");
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
/** Absteiger beim Neusortieren: Kontur in Rot (Theme error), Aufsteiger in der Akzentfarbe der Folie */ const FALL_COLOR = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["themePlastship"].palette.default.error;
/** Balken je Dimension in ihrer Farbe (#1993), in der Reihenfolge von DIMENSIONS bzw. RANK_START */ const BAR_COLORS = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$Beat3$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["DIMENSIONS"].map(_c = (d)=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$imagefilmPalette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DIMENSION_COLORS"][d]);
_c1 = BAR_COLORS;
/** Messbalken oben in der Wabe, wo früher das Symbol stand (#1513) — Grundlinie knapp über der Mitte */ const BAR_OFFSET = [
    0,
    0.1,
    0.01
];
/** Balken der Klassen: knapp vor dem Grund, breiter als die Konturen */ const CLASS_BAR_WIDTH = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LINE"].bold * 1.6;
// Scratch auf Modulebene: je Filmzeit einmal beschrieben, nie neu angelegt
// (Lint react-hooks/immutability verbietet Mutation von useMemo-Werten).
// Waben, Material und Balken lesen denselben Stand.
const RANKED = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$rankLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RANK_VALUES"].map(_c2 = ()=>[
        0,
        0,
        0
    ]);
_c3 = RANKED;
const ANCHORS = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$rankLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RANK_VALUES"].map(_c4 = ()=>[
        0,
        0,
        0
    ]);
_c5 = ANCHORS;
const ANCHOR_CACHE = {
    at: Number.NaN,
    portrait: false
};
/**
 * Anker der Waben, je Filmzeit einmal berechnet (Modulebene: der
 * Compiler-Lint erlaubt hier die Mutation): vom Marktplatz-Raster zur Treppe,
 * dann umsortiert (#1513)
 */ const anchorsAt = (at, gather, rankT, portrait)=>{
    if (at !== ANCHOR_CACHE.at || portrait !== ANCHOR_CACHE.portrait) {
        ANCHOR_CACHE.at = at;
        ANCHOR_CACHE.portrait = portrait;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$marketLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["offerAnchors"])(gather(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$rankLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rankAnchors"])(rankT(), RANKED, portrait), ANCHORS, portrait);
    }
    return ANCHORS;
};
/** Wabe aus b1 zeichnet Beat1 — hier nur die übrigen fünf */ const OWN = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$rankLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RANK_VALUES"].map((_, i)=>i).filter(_c6 = (i)=>i !== __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$rankLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RANK_FROM_B1"]);
_c7 = OWN;
const Beat2 = ()=>{
    _s();
    const { f, inBeat, colorsFor, now, portrait } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$FilmTimeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFilm"])();
    const colors = colorsFor('b2');
    const opacity = f('b2.opacity');
    const rankT = f('b2.rank.t');
    const highlight = f('b2.highlight');
    const grow = f('bm.grow');
    const metrics = f('b2.metrics');
    const gather = f('bm.gather');
    const material = f('b2.material');
    const pourClock = f('bm.pour.clock');
    const blend = f('b2.values');
    const others = f('b2.others');
    const cert = f('b2.cert');
    const classes = f('b2.classes');
    const search = f('bm.search');
    const bars3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Beat2.useMemo[bars3]": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$rankLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RANK_CLASSES"].map({
                "Beat2.useMemo[bars3]": (_, tier)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$rankLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classBar"])(tier, portrait)
            }["Beat2.useMemo[bars3]"])
    }["Beat2.useMemo[bars3]"], [
        portrait
    ]);
    const fading = ()=>opacity() * others();
    const hex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Beat2.useMemo[hex]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$hexGeometry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexOutlinePoints"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$rankLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RANK_HEX_R"], true, Math.PI / 6)
    }["Beat2.useMemo[hex]"], []);
    // im Marktplatz und im Rating im Bild — dazwischen läuft das Labor ohne die Angebote
    const inMarket = inBeat('bm');
    const inRating = inBeat('b2');
    const piles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Beat2.useMemo[piles]": ()=>OWN.map({
                "Beat2.useMemo[piles]": (i)=>({
                        index: i,
                        pile: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$materialPiles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["pileSpec"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$materialPiles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["MATERIAL_OF_RANK"][i], 4100 + i)
                    })
            }["Beat2.useMemo[piles]"])
    }["Beat2.useMemo[piles]"], []);
    const anchors = ()=>anchorsAt(now(), gather, rankT, portrait);
    // Rand der Treffer nach dem Scan (#1964): grün, sobald der Suchstrahl sie gefunden hat; im Rating
    // kehrt er mit der ersten Metrik zur Linienfarbe zurück
    const matchEdge = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$imagefilmPalette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toneFor"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$imagefilmPalette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MATCH_EDGE"], colors.background);
    const found = (i)=>inMarket() ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$marketLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["matchFound"])(i, search()) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp01"])(1 - metrics());
    // Beim Neusortieren: Aufsteiger grün, Absteiger rot, sonst Linie bzw. Siegerin grün (#1513)
    const outlineColor = (i, t, hi)=>{
        if (t > 0 && t < 1) {
            const moved = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$rankLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RANK_AFTER"][i] - __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$rankLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RANK_BEFORE"][i];
            if (moved > 0) return colors.secondary;
            if (moved < 0) return FALL_COLOR;
        }
        // nach dem Einstufen: Kontur in der Farbe der Klasse, sobald sie genannt ist
        const tier = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$rankLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classOfMaterial"])(i);
        const line = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$mixColor$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mixColor"])(colors.line, matchEdge, found(i));
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$mixColor$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mixColor"])(hi === i ? colors.secondary : line, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$rankLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RANK_CLASSES"][tier].color, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp01"])(classes() - tier));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$AnimatedGroup$2f$AnimatedGroup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedGroup"], {
        name: "b2",
        visible: ()=>inMarket() || inRating(),
        children: [
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$Beat3$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["DIMENSIONS"].map((icon, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$AnimatedGroup$2f$AnimatedGroup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedGroup"], {
                    name: "b2-legend",
                    position: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["legendAt"])(i, portrait),
                    scale: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_POP"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp01"])(metrics() - i)),
                    visible: ()=>metrics() > i,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$HexPrism$2f$HexPrism$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexPrism"], {
                            name: "b2-legend-fill",
                            radius: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LEGEND_R"],
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$imagefilmPalette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DIMENSION_COLORS"][icon],
                            opacity: fading,
                            position: [
                                0,
                                0,
                                -0.01
                            ]
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/Beat2.tsx",
                            lineNumber: 139,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$FilmIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FilmIcon"], {
                            name: icon,
                            size: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LEGEND_R"] * 1.05,
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$imagefilmPalette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ON_DIMENSION"],
                            opacity: fading
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/Beat2.tsx",
                            lineNumber: 140,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, icon, true, {
                    fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/Beat2.tsx",
                    lineNumber: 132,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                name: "b2-row",
                position: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$rankLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rankSpace"])(portrait).offset,
                scale: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$rankLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rankSpace"])(portrait).scale,
                children: [
                    piles.map(({ index, pile })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$AnimatedGroup$2f$AnimatedGroup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedGroup"], {
                            name: "b2-material",
                            position: ()=>anchors()[index],
                            scale: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$marketLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["offerScale"])(gather(), __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$rankLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RANK_HEX_R"], portrait) * (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$rankLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rankScale"])(rankT(), index),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$HexPrism$2f$HexPrism$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexPrism"], {
                                    name: "b2-fill",
                                    radius: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$rankLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RANK_HEX_R"],
                                    color: colors.background,
                                    opacity: fading,
                                    position: [
                                        0,
                                        0,
                                        -0.01
                                    ]
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/Beat2.tsx",
                                    lineNumber: 153,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$StrokePath$2f$StrokePath$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StrokePath"], {
                                    points: hex,
                                    width: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LINE"].regular,
                                    color: ()=>outlineColor(index, rankT(), highlight()),
                                    progress: grow,
                                    opacity: fading
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/Beat2.tsx",
                                    lineNumber: 154,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$AnimatedGroup$2f$AnimatedGroup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedGroup"], {
                                    name: "b2-pile",
                                    scale: ()=>Math.max(0.0001, material() * others()),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$BakedPile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BakedPile"], {
                                        spec: pile,
                                        clock: pourClock
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/Beat2.tsx",
                                        lineNumber: 162,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/Beat2.tsx",
                                    lineNumber: 161,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, index, true, {
                            fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/Beat2.tsx",
                            lineNumber: 146,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                        position: BAR_OFFSET,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Molecule$2f$RankingBars$2f$RankingBars$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RankingBars"], {
                            values: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$rankLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RANK_START"],
                            valuesTo: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$rankLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RANK_END"],
                            blend: blend,
                            anchors: anchors,
                            barWidth: 0.12,
                            gap: 0.06,
                            maxHeight: 0.55,
                            color: colors.line,
                            // jeder Balken in der Farbe seiner Dimension (#1993); Auf- und Abstieg zeigt die Kontur der Wabe
                            barColors: BAR_COLORS,
                            highlight: highlight,
                            highlightColor: colors.secondary,
                            pulse: ()=>now() * 2.2,
                            // jede Metrik bringt ihren Balken mit: Balken k wächst, wenn Metrik k erscheint
                            stagger: metrics,
                            // vor dem Aufwachsen ganz aus — sonst zeigen die flachen Quader im Marktplatz Kanten
                            opacity: ()=>metrics() > 0 ? fading() : 0
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/Beat2.tsx",
                            lineNumber: 167,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/Beat2.tsx",
                        lineNumber: 166,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    bars3.map((points, tier)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                            name: "b2-class",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$StrokePath$2f$StrokePath$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StrokePath"], {
                                points: points,
                                width: CLASS_BAR_WIDTH,
                                color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$rankLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RANK_CLASSES"][tier].color,
                                progress: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp01"])(classes() - tier),
                                opacity: fading,
                                castShadow: false
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/Beat2.tsx",
                                lineNumber: 190,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        }, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$rankLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RANK_CLASSES"][tier].id, false, {
                            fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/Beat2.tsx",
                            lineNumber: 189,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$AnimatedGroup$2f$AnimatedGroup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedGroup"], {
                        name: "b2-certificate",
                        position: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$rankLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CERT_AT"],
                        scale: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$rankLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["certScale"])(portrait),
                        visible: ()=>cert() > 0,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$CertificateSketch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificateSketch"], {
                            progress: cert,
                            opacity: opacity,
                            colors: colors
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/Beat2.tsx",
                            lineNumber: 202,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/Beat2.tsx",
                        lineNumber: 201,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/Beat2.tsx",
                lineNumber: 144,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/Beat2.tsx",
        lineNumber: 125,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Beat2, "WT9hT3PH2bV9cqKv6krbvgxtldk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$FilmTimeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFilm"]
    ];
});
_c8 = Beat2;
const __TURBOPACK__default__export__ = Beat2;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8;
__turbopack_context__.k.register(_c, "BAR_COLORS$DIMENSIONS.map");
__turbopack_context__.k.register(_c1, "BAR_COLORS");
__turbopack_context__.k.register(_c2, "RANKED$RANK_VALUES.map");
__turbopack_context__.k.register(_c3, "RANKED");
__turbopack_context__.k.register(_c4, "ANCHORS$RANK_VALUES.map");
__turbopack_context__.k.register(_c5, "ANCHORS");
__turbopack_context__.k.register(_c6, "OWN$RANK_VALUES.map((_, i) => i).filter");
__turbopack_context__.k.register(_c7, "OWN");
__turbopack_context__.k.register(_c8, "Beat2");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/Beat3.tsx [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Beat3",
    ()=>Beat3,
    "DIMENSIONS",
    ()=>DIMENSIONS,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/motion/easing.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$hexGeometry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/scene3d/hexGeometry.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$hexRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/scene3d/hexRoute.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$mixColor$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/scene3d/mixColor.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$AnimatedGroup$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Atom/AnimatedGroup/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$AnimatedGroup$2f$AnimatedGroup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Atom/AnimatedGroup/AnimatedGroup.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$HexPrism$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Atom/HexPrism/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$HexPrism$2f$HexPrism$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Atom/HexPrism/HexPrism.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$StrokePath$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Atom/StrokePath/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$StrokePath$2f$StrokePath$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Atom/StrokePath/StrokePath.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Molecule$2f$HexRoute$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Molecule/HexRoute/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Molecule$2f$HexRoute$2f$HexRoute$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Molecule/HexRoute/HexRoute.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$FilmTimeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/FilmTimeContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$imagefilmPalette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/imagefilmPalette.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/scenes/layout.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$chargePath$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/chargePath.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$FilmIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/FilmIcon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$LogoTile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/LogoTile.tsx [app-client] (ecmascript)");
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
const DIMENSIONS = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$imagefilmPalette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FILM_DIMENSIONS"];
;
const INDEXES = Array.from({
    length: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LAB_DIM_COUNT"]
}, (_, i)=>i);
/** Probe: ein Pellet aus der Charge */ const SAMPLE_R = 0.13;
/** Ströme vom Labor zu den Dimensionen: Wabenwege hinter den Waben, der Puls wandert vom Labor weg */ const FLOW_Z = -0.14;
const FLOW_CELL_R = 0.22;
const FLOW_FROM = [
    0,
    0
];
/** Tempo des Pulses in Waben je Sekunde und Anteil der Pulsfarbe in den ruhenden Waben */ const FLOW_SPEED = 5;
const FLOW_REST = 0.25;
/** Scratch auf Modulebene (siehe Beat2) */ const SAMPLE_POS = [
    0,
    0,
    0.02
];
const Beat3 = ()=>{
    _s();
    const { f, now, inBeat, colorsFor, portrait } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$FilmTimeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFilm"])();
    const colors = colorsFor('b3');
    const opacity = f('b3.opacity');
    const sample = f('b3.sample.t');
    const dims = f('b3.dims');
    const checks = f('b3.checks');
    const flask = f('b3.flask.opacity');
    const size = portrait ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LAB_PORTRAIT_SCALE"] : 1;
    const material = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["labMaterialAt"])(portrait);
    const flaskAt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["labFlaskAt"])(portrait);
    const hex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Beat3.useMemo[hex]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$hexGeometry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexOutlinePoints"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LAB_DIM_R"], true, Math.PI / 6)
    }["Beat3.useMemo[hex]"], []);
    const flowRest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$mixColor$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mixColor"])(colors.background, colors.secondary, FLOW_REST);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$AnimatedGroup$2f$AnimatedGroup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedGroup"], {
        name: "b3",
        visible: inBeat('b3'),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$AnimatedGroup$2f$AnimatedGroup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedGroup"], {
                position: ()=>{
                    const s = sample();
                    SAMPLE_POS[0] = material[0] + (flaskAt[0] - material[0]) * s;
                    SAMPLE_POS[1] = material[1] + (flaskAt[1] - material[1]) * s + Math.sin(Math.PI * s) * 0.6;
                    return SAMPLE_POS;
                },
                visible: ()=>sample() > 0 && sample() < 1,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$HexPrism$2f$HexPrism$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexPrism"], {
                    name: "b3-sample",
                    radius: SAMPLE_R,
                    color: colors.secondary,
                    opacity: opacity
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/Beat3.tsx",
                    lineNumber: 72,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/Beat3.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                position: flaskAt,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$LogoTile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LogoTile"], {
                    name: "b3-lab",
                    logo: "plastcert",
                    radius: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LAB_TILE_R"] * size,
                    opacity: ()=>flask() * opacity()
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/Beat3.tsx",
                    lineNumber: 75,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/Beat3.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            INDEXES.map((i)=>{
                const at = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["labDimAt"])(i, portrait);
                const measured = ()=>checks() >= i + 1;
                const dim = DIMENSIONS[i];
                // der Strom beginnt verdeckt in der Mitte seiner Quelle (Labor, im Hochformat für die untere Reihe die Wabe darüber): dort liegt der Ursprung seines Wabengitters
                const source = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["labFlowFrom"])(i, portrait);
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                            position: [
                                source[0],
                                source[1],
                                FLOW_Z
                            ],
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Molecule$2f$HexRoute$2f$HexRoute$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexRoute"], {
                                name: "b3-flow",
                                from: FLOW_FROM,
                                to: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$hexRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["latticeCellAt"])(at[0] - source[0], at[1] - source[1], FLOW_CELL_R),
                                cellRadius: FLOW_CELL_R,
                                line: false,
                                tileColor: flowRest,
                                groundColor: colors.background,
                                pulseColor: colors.secondary,
                                pulsePhase: ()=>now() * FLOW_SPEED,
                                progress: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp01"])(dims() - i),
                                opacity: opacity
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/Beat3.tsx",
                                lineNumber: 86,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/Beat3.tsx",
                            lineNumber: 85,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$AnimatedGroup$2f$AnimatedGroup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedGroup"], {
                            name: "b3-dim",
                            position: at,
                            scale: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_POP"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp01"])(dims() - i)) * (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["labDimScale"])(portrait),
                            visible: ()=>dims() > i,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$HexPrism$2f$HexPrism$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexPrism"], {
                                    name: "b3-dim-fill",
                                    radius: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LAB_DIM_R"],
                                    color: ()=>measured() ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$imagefilmPalette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DIMENSION_COLORS"][dim] : colors.background,
                                    opacity: opacity,
                                    position: [
                                        0,
                                        0,
                                        -0.01
                                    ]
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/Beat3.tsx",
                                    lineNumber: 101,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$StrokePath$2f$StrokePath$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StrokePath"], {
                                    points: hex,
                                    width: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LINE"].regular,
                                    color: colors.line,
                                    opacity: opacity
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/Beat3.tsx",
                                    lineNumber: 108,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$FilmIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FilmIcon"], {
                                    name: dim,
                                    size: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LAB_DIM_R"] * 1.05,
                                    color: ()=>measured() ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$imagefilmPalette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ON_DIMENSION"] : colors.line,
                                    opacity: opacity
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/Beat3.tsx",
                                    lineNumber: 109,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/Beat3.tsx",
                            lineNumber: 100,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, i, true, {
                    fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/Beat3.tsx",
                    lineNumber: 84,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0));
            })
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/Beat3.tsx",
        lineNumber: 62,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Beat3, "YLrtXZkFIXPLaoGSTKrDi9me2xI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$FilmTimeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFilm"]
    ];
});
_c = Beat3;
const __TURBOPACK__default__export__ = Beat3;
var _c;
__turbopack_context__.k.register(_c, "Beat3");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/Beat4.tsx [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Beat4",
    ()=>Beat4,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$darkTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/darkTheme.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/theme.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/motion/easing.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$AnimatedGroup$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Atom/AnimatedGroup/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$AnimatedGroup$2f$AnimatedGroup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Atom/AnimatedGroup/AnimatedGroup.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$StrokePath$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Atom/StrokePath/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$StrokePath$2f$StrokePath$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Atom/StrokePath/StrokePath.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Molecule$2f$HexMosaicMap$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Molecule/HexMosaicMap/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Molecule$2f$HexMosaicMap$2f$HexMosaicMap$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Molecule/HexMosaicMap/HexMosaicMap.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$FilmTimeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/FilmTimeContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/scenes/layout.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$chargePath$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/chargePath.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$routeLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/routeLayout.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$FilmIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/FilmIcon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$MapMarker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/MapMarker.tsx [app-client] (ecmascript)");
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
/** helle Waben der zweiten Route: das helle Blau des dunklen Themes */ const ROUTE_2_TILE = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$darkTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["themePlastshipDark"].palette.default.primary;
/** Waben, auf denen sich beide Routen kreuzen: heller als beide (helles Grau der Seite) */ const ROUTE_CROSSING_TILE = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["themePlastship"].palette.default.grey;
const SCAN_HALF = 0.8;
/** Scratch auf Modulebene (siehe Beat2) */ const SCAN_POS = [
    0,
    0,
    0
];
const Beat4 = ()=>{
    _s();
    const { f, inBeat, colorsFor, portrait } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$FilmTimeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFilm"])();
    const colors = colorsFor('b4');
    const opacity = f('b4.opacity');
    const scan = f('b4.scan.t');
    const box = f('b4.box.opacity');
    // die zweite Route färbt ihre Waben hell, die erste dunkel — so bleiben beide lesbar, auch wo sie sich kreuzen
    const extraRoutes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Beat4.useMemo[extraRoutes]": ()=>[
                {
                    route: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$routeLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["B4_ROUTE_2"],
                    progress: f('b4.route2'),
                    tileColor: ROUTE_2_TILE
                }
            ]
    }["Beat4.useMemo[extraRoutes]"], [
        f
    ]);
    // Plaketten je Route (#1513): die erste läuft vom Transport zum Abnehmer, die zweite zurück (#1993) —
    // LKW in der Linienfarbe, Fabrik in Grün
    const pins = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Beat4.useMemo[pins]": ()=>{
            const { radius, lift } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$routeLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["markerSize"])(portrait);
            return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$routeLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["B4_ROUTES"].flatMap({
                "Beat4.useMemo[pins]": ({ route, start, finish })=>{
                    const [first, last] = [
                        route[0],
                        route[route.length - 1]
                    ];
                    const marker = {
                        "Beat4.useMemo[pins].marker": (name)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$MapMarker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MapMarker"], {
                                name: name,
                                fill: name === 'truck' ? colors.line : colors.secondary,
                                iconColor: colors.background,
                                ringColor: colors.background,
                                radius: radius,
                                lift: lift,
                                opacity: opacity
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/Beat4.tsx",
                                lineNumber: 44,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                    }["Beat4.useMemo[pins].marker"];
                    // Plaketten stehen immer über ihrer Wabe; die Routen sind so gelegt, dass keine verdeckt wird (routeLayout.test.ts)
                    return [
                        {
                            col: first[0],
                            row: first[1],
                            children: marker(start)
                        },
                        {
                            col: last[0],
                            row: last[1],
                            children: marker(finish)
                        }
                    ];
                }
            }["Beat4.useMemo[pins]"]);
        }
    }["Beat4.useMemo[pins]"], [
        colors,
        opacity,
        portrait
    ]);
    const scanLine = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Beat4.useMemo[scanLine]": ()=>[
                [
                    -SCAN_HALF,
                    0,
                    0.03
                ],
                [
                    SCAN_HALF,
                    0,
                    0.03
                ]
            ]
    }["Beat4.useMemo[scanLine]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$AnimatedGroup$2f$AnimatedGroup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedGroup"], {
        name: "b4",
        visible: inBeat('b4'),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                position: portrait ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$chargePath$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BOX_AT_PORTRAIT"] : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$chargePath$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BOX_AT"],
                scale: 1,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$FilmIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FilmIcon"], {
                        name: "pallet",
                        size: 1.7,
                        color: colors.line,
                        opacity: ()=>box() * opacity()
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/Beat4.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$FilmIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FilmIcon"], {
                        name: "qr",
                        size: 0.55,
                        color: colors.line,
                        opacity: opacity,
                        position: [
                            0,
                            0.35,
                            0.02
                        ]
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/Beat4.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$AnimatedGroup$2f$AnimatedGroup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedGroup"], {
                        position: ()=>{
                            SCAN_POS[1] = 0.9 - scan() * 1.4;
                            return SCAN_POS;
                        },
                        visible: ()=>scan() > 0 && scan() < 1,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$StrokePath$2f$StrokePath$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StrokePath"], {
                            points: scanLine,
                            width: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LINE"].regular,
                            color: colors.secondary
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/Beat4.tsx",
                            lineNumber: 74,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/Beat4.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$AnimatedGroup$2f$AnimatedGroup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedGroup"], {
                        position: [
                            0,
                            -1.25,
                            0
                        ],
                        scale: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp01"])((scan() - 0.9) * 10),
                        visible: ()=>scan() >= 0.9,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$FilmIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FilmIcon"], {
                            name: "scan",
                            size: 0.45,
                            color: colors.secondary,
                            opacity: opacity
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/Beat4.tsx",
                            lineNumber: 77,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/Beat4.tsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/Beat4.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                position: portrait ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$routeLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MAP_AT_PORTRAIT"] : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$routeLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MAP_AT"],
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Molecule$2f$HexMosaicMap$2f$HexMosaicMap$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexMosaicMap"], {
                    cellRadius: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$routeLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["B4_CELL"],
                    color: colors.muted,
                    reveal: f('b4.map.reveal'),
                    opacity: opacity,
                    route: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$routeLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["B4_ROUTE"],
                    routeColor: colors.secondary,
                    routeWidth: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LINE"].regular,
                    routeProgress: f('b4.route'),
                    extraRoutes: extraRoutes,
                    routeOverlapColor: ROUTE_CROSSING_TILE,
                    routeTileColor: colors.line,
                    markColor: colors.secondary,
                    pinProgress: f('b4.pins'),
                    pins: pins
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/Beat4.tsx",
                    lineNumber: 81,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/Beat4.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/Beat4.tsx",
        lineNumber: 65,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Beat4, "ncYg5rwiS1Ef2TS8Rlpdz5ElId8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$FilmTimeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFilm"]
    ];
});
_c = Beat4;
const __TURBOPACK__default__export__ = Beat4;
var _c;
__turbopack_context__.k.register(_c, "Beat4");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/Beat5.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Beat5",
    ()=>Beat5,
    "PARTNERS",
    ()=>PARTNERS,
    "default",
    ()=>__TURBOPACK__default__export__,
    "partnerBadge",
    ()=>partnerBadge,
    "partnerRoute",
    ()=>partnerRoute
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/theme.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/motion/easing.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$hexGeometry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/scene3d/hexGeometry.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$AnimatedGroup$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Atom/AnimatedGroup/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$AnimatedGroup$2f$AnimatedGroup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Atom/AnimatedGroup/AnimatedGroup.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$StrokePath$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Atom/StrokePath/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$StrokePath$2f$StrokePath$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Atom/StrokePath/StrokePath.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$HexPrism$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Atom/HexPrism/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$HexPrism$2f$HexPrism$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Atom/HexPrism/HexPrism.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Molecule$2f$HexRoute$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Molecule/HexRoute/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Molecule$2f$HexRoute$2f$HexRoute$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Molecule/HexRoute/HexRoute.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$FilmTimeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/FilmTimeContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/scenes/layout.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$FilmIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/FilmIcon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$LogoTile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/LogoTile.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$partnerLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/partnerLayout.ts [app-client] (ecmascript)");
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
const PARTNERS = [
    'restore',
    'sort',
    'analysis',
    'truck'
];
/** Theme-Farben der grünen Folie (#1513): weiße Waben, Motive der Partner in Markengrün, in der Mitte das plastship-Zeichen, Abzeichen in Gelb (warning) */ const BRAND = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["themePlastship"].palette.default;
const BADGE_COLOR = BRAND.warning;
/** Prüfabzeichen unten rechts in der Partner-Wabe */ const BADGE_AT = [
    0.3,
    -0.34,
    0.03
];
const BADGE_SIZE = 0.42;
/** Motiv etwas nach oben links, damit das Abzeichen Platz hat */ const MOTIF_AT = [
    -0.05,
    0.08,
    0
];
/** Wabenfläche: flaches Prisma knapp hinter der Kontur */ const FILL_DEPTH = 0.06;
const FILL_AT = [
    0,
    0,
    -FILL_DEPTH
];
/** Routen hinter allen Waben */ const ROUTE_Z = -0.14;
/** Ursprung des Wabengitters: der Ansprechpartner */ const ORIGIN_CELL = [
    0,
    0
];
/** Deckkraft der Waben, über die eine Route gelaufen ist */ const TRAIL = 0.3;
/** Anteil eines Prüfschritts, den die Route braucht; danach springt das Abzeichen auf */ const ROUTE_SHARE = 0.6;
const BADGE_SHARE = 0.3;
/** Welle um den Ansprechpartner, wenn „Ein Ansprechpartner" erscheint */ const PULSE_TO = 1.35;
const partnerRoute = (checks, i)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp01"])((checks - i) / ROUTE_SHARE);
const partnerBadge = (checks, i)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp01"])((checks - i - ROUTE_SHARE) / BADGE_SHARE);
const Beat5 = ()=>{
    _s();
    const { f, inBeat, colorsFor, portrait } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$FilmTimeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFilm"])();
    const colors = colorsFor('b5');
    const opacity = f('b5.opacity');
    const reveal = f('b5.reveal');
    const partners = f('b5.partners');
    const checks = f('b5.checks');
    const contact = f('b5.contact');
    const contactHex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Beat5.useMemo[contactHex]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$hexGeometry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexOutlinePoints"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$partnerLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTACT_R"], true, Math.PI / 6)
    }["Beat5.useMemo[contactHex]"], []);
    const partnerHex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Beat5.useMemo[partnerHex]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$hexGeometry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexOutlinePoints"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$partnerLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PARTNER_R"], true, Math.PI / 6)
    }["Beat5.useMemo[partnerHex]"], []);
    const center = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Beat5.useMemo[center]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$partnerLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["contactAt"])(portrait)
    }["Beat5.useMemo[center]"], [
        portrait
    ]);
    const origin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Beat5.useMemo[origin]": ()=>[
                center[0],
                center[1],
                ROUTE_Z
            ]
    }["Beat5.useMemo[origin]"], [
        center
    ]);
    const spots = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Beat5.useMemo[spots]": ()=>Array.from({
                length: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$partnerLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PARTNER_COUNT"]
            }, {
                "Beat5.useMemo[spots]": (_, i)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$partnerLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["partnerAt"])(i, portrait)
            }["Beat5.useMemo[spots]"])
    }["Beat5.useMemo[spots]"], [
        portrait
    ]);
    const pulse = ()=>{
        const p = contact();
        return p > 0 && p < 1 ? 1 - p : 0;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$AnimatedGroup$2f$AnimatedGroup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedGroup"], {
        name: "b5",
        visible: inBeat('b5'),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                position: origin,
                children: PARTNERS.map((name, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Molecule$2f$HexRoute$2f$HexRoute$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexRoute"], {
                        name: "b5-route",
                        from: ORIGIN_CELL,
                        to: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$partnerLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["partnerCell"])(i, portrait),
                        cellRadius: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$partnerLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PARTNER_CELL_R"],
                        tileColor: BRAND.white,
                        groundColor: colors.background,
                        tileOpacity: TRAIL,
                        lineColor: colors.line,
                        lineWidth: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LINE"].regular,
                        progress: ()=>partnerRoute(checks(), i),
                        opacity: opacity
                    }, name, false, {
                        fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/Beat5.tsx",
                        lineNumber: 80,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/Beat5.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                position: center,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$AnimatedGroup$2f$AnimatedGroup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedGroup"], {
                        name: "b5-pulse",
                        scale: ()=>1 + (PULSE_TO - 1) * contact(),
                        visible: ()=>pulse() > 0,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$StrokePath$2f$StrokePath$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StrokePath"], {
                            points: contactHex,
                            width: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LINE"].regular,
                            color: colors.line,
                            opacity: ()=>pulse() * opacity()
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/Beat5.tsx",
                            lineNumber: 98,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/Beat5.tsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$AnimatedGroup$2f$AnimatedGroup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedGroup"], {
                        name: "b5-contact",
                        scale: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_POP"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp01"])(reveal())),
                        visible: ()=>reveal() > 0,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$LogoTile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LogoTile"], {
                            logo: "logoSign",
                            radius: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$partnerLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTACT_R"],
                            opacity: opacity
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/Beat5.tsx",
                            lineNumber: 102,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/Beat5.tsx",
                        lineNumber: 100,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/Beat5.tsx",
                lineNumber: 96,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            PARTNERS.map((name, i)=>{
                const appear = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_POP"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp01"])(partners() - i));
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$AnimatedGroup$2f$AnimatedGroup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedGroup"], {
                    name: "b5-partner",
                    position: spots[i],
                    scale: appear,
                    visible: ()=>appear() > 0,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$HexPrism$2f$HexPrism$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexPrism"], {
                            radius: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$partnerLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PARTNER_R"],
                            depth: FILL_DEPTH,
                            color: BRAND.white,
                            opacity: opacity,
                            position: FILL_AT
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/Beat5.tsx",
                            lineNumber: 109,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$StrokePath$2f$StrokePath$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StrokePath"], {
                            points: partnerHex,
                            width: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LINE"].regular,
                            color: colors.line,
                            opacity: opacity
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/Beat5.tsx",
                            lineNumber: 110,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$FilmIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FilmIcon"], {
                            name: name,
                            size: 0.62,
                            color: BRAND.secondary,
                            opacity: opacity,
                            position: MOTIF_AT
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/Beat5.tsx",
                            lineNumber: 111,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$AnimatedGroup$2f$AnimatedGroup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedGroup"], {
                            name: "b5-badge",
                            position: BADGE_AT,
                            scale: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_POP"])(partnerBadge(checks(), i)),
                            visible: ()=>partnerBadge(checks(), i) > 0,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$FilmIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FilmIcon"], {
                                name: "verified",
                                size: BADGE_SIZE,
                                color: BADGE_COLOR,
                                opacity: opacity
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/Beat5.tsx",
                                lineNumber: 118,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/Beat5.tsx",
                            lineNumber: 112,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, name, true, {
                    fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/Beat5.tsx",
                    lineNumber: 108,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0));
            })
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/Beat5.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Beat5, "kGRGkzRE+8ErdvzDrJOU+ifts+s=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$FilmTimeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFilm"]
    ];
});
_c = Beat5;
const __TURBOPACK__default__export__ = Beat5;
var _c;
__turbopack_context__.k.register(_c, "Beat5");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/Beat6.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Beat6",
    ()=>Beat6,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/motion/easing.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$AnimatedGroup$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Atom/AnimatedGroup/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$AnimatedGroup$2f$AnimatedGroup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Atom/AnimatedGroup/AnimatedGroup.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Molecule$2f$DeviceFrame$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Molecule/DeviceFrame/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Molecule$2f$DeviceFrame$2f$DeviceFrame$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Molecule/DeviceFrame/DeviceFrame.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$FilmTimeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/FilmTimeContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/scenes/layout.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$FilmIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/FilmIcon.tsx [app-client] (ecmascript)");
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
/** Geräte neben dem Monitor, Unterkanten auf Höhe des Monitorfußes */ const DEVICES = [
    {
        type: 'laptop',
        height: 1.3,
        position: [
            -5.0,
            -0.22,
            0
        ],
        portrait: [
            -2.6,
            -2.3,
            0
        ],
        track: 'b6.laptop'
    },
    {
        type: 'tablet',
        height: 1.7,
        position: [
            4.1,
            -0.2,
            0
        ],
        portrait: [
            0.9,
            -2.1,
            0
        ],
        track: 'b6.tablet'
    },
    {
        type: 'phone',
        height: 1.2,
        position: [
            5.45,
            -0.45,
            0
        ],
        portrait: [
            2.9,
            -2.35,
            0
        ],
        track: 'b6.phone'
    }
];
/** Hochformat: Geräte in einer Reihe unter dem Monitor — seit #2113 in voller Größe (vorher 0,7, zu klein am Handy) */ const PORTRAIT_SCALE = 1;
const Beat6 = ()=>{
    _s();
    const { f, inBeat, colorsFor, portrait } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$FilmTimeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFilm"])();
    const colors = colorsFor('b6');
    const opacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Beat6.useMemo[opacity]": ()=>f('monitor.opacity')
    }["Beat6.useMemo[opacity]"], [
        f
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$AnimatedGroup$2f$AnimatedGroup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedGroup"], {
        name: "b6",
        visible: inBeat('b6'),
        children: DEVICES.map(({ type, height, position, portrait: portraitAt, track })=>{
            const progress = f(track);
            // Zeichen erscheint, wenn der Rahmen fast fertig ist
            const content = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp01"])((progress() - 0.8) * 5) * opacity();
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Molecule$2f$DeviceFrame$2f$DeviceFrame$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DeviceFrame"], {
                name: `device-${type}`,
                type: type,
                height: portrait ? height * PORTRAIT_SCALE : height,
                position: portrait ? portraitAt : position,
                color: colors.line,
                lineWidth: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LINE"].regular,
                progress: progress,
                opacity: opacity,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$FilmIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FilmIcon"], {
                    name: "logoSign",
                    size: (portrait ? height * PORTRAIT_SCALE : height) * 0.32,
                    color: colors.line,
                    accentColor: colors.secondary,
                    opacity: content
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/Beat6.tsx",
                    lineNumber: 48,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            }, type, false, {
                fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/Beat6.tsx",
                lineNumber: 37,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0));
        })
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/Beat6.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Beat6, "r6moZ/p+cXkDitfFivqCrNDGkCA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$FilmTimeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFilm"]
    ];
});
_c = Beat6;
const __TURBOPACK__default__export__ = Beat6;
var _c;
__turbopack_context__.k.register(_c, "Beat6");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/Beat7.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Beat7",
    ()=>Beat7,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/motion/easing.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$AnimatedGroup$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Atom/AnimatedGroup/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$AnimatedGroup$2f$AnimatedGroup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Atom/AnimatedGroup/AnimatedGroup.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$HexPrism$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Atom/HexPrism/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$HexPrism$2f$HexPrism$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Atom/HexPrism/HexPrism.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Molecule$2f$Seal$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Molecule/Seal/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Molecule$2f$Seal$2f$Seal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Molecule/Seal/Seal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$FilmTimeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/FilmTimeContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/scenes/layout.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$FilmIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/FilmIcon.tsx [app-client] (ecmascript)");
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
const SEAL_R = 2.1;
const POINTS = Array.from({
    length: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ISO_POINT_COUNT"]
}, (_, i)=>i);
const Beat7 = ()=>{
    _s();
    const { f, inBeat, colorsFor, portrait } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$FilmTimeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFilm"])();
    const colors = colorsFor('b7');
    const opacity = f('b7.opacity');
    const points = f('b7.points');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$AnimatedGroup$2f$AnimatedGroup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedGroup"], {
        name: "b7",
        visible: inBeat('b7'),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                position: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sealAt"])(portrait),
                scale: portrait ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEAL_PORTRAIT_SCALE"] : 1,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Molecule$2f$Seal$2f$Seal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Seal"], {
                    radius: SEAL_R,
                    progress: f('b7.seal'),
                    color: colors.line,
                    accentColor: colors.secondary,
                    lineWidth: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LINE"].bold,
                    opacity: opacity,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$FilmIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FilmIcon"], {
                        name: "certificate",
                        size: 1.7,
                        color: colors.line,
                        opacity: opacity
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/Beat7.tsx",
                        lineNumber: 29,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/Beat7.tsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/Beat7.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            POINTS.map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$AnimatedGroup$2f$AnimatedGroup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedGroup"], {
                    name: "b7-point",
                    position: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isoPointAt"])(i, portrait),
                    scale: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_POP"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp01"])(points() - i)),
                    visible: ()=>points() > i,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$HexPrism$2f$HexPrism$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexPrism"], {
                        radius: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ISO_POINT_R"],
                        color: colors.secondary,
                        opacity: opacity
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/Beat7.tsx",
                        lineNumber: 40,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, i, false, {
                    fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/Beat7.tsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/Beat7.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Beat7, "vGKsB2EmnWMkhRQRNOXu/+u55CE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$FilmTimeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFilm"]
    ];
});
_c = Beat7;
const __TURBOPACK__default__export__ = Beat7;
var _c;
__turbopack_context__.k.register(_c, "Beat7");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/Beat8.tsx [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Beat8",
    ()=>Beat8,
    "KREISLAUF",
    ()=>KREISLAUF,
    "LOGO_SIZE",
    ()=>LOGO_SIZE,
    "PLASTSHIP_STATION",
    ()=>PLASTSHIP_STATION,
    "WAVE_FROM",
    ()=>WAVE_FROM,
    "WAVE_TO",
    ()=>WAVE_TO,
    "WORD_GAP",
    ()=>WORD_GAP,
    "WORD_WIDTH",
    ()=>WORD_WIDTH,
    "default",
    ()=>__TURBOPACK__default__export__,
    "lapStation",
    ()=>lapStation,
    "stationCell",
    ()=>stationCell,
    "stationLit",
    ()=>stationLit,
    "stationPop",
    ()=>stationPop
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/motion/easing.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$hexGeometry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/scene3d/hexGeometry.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$hexRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/scene3d/hexRoute.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$mixColor$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/scene3d/mixColor.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/theme.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$AnimatedGroup$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Atom/AnimatedGroup/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$AnimatedGroup$2f$AnimatedGroup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Atom/AnimatedGroup/AnimatedGroup.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$HexPrism$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Atom/HexPrism/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$HexPrism$2f$HexPrism$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Atom/HexPrism/HexPrism.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$StrokePath$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Atom/StrokePath/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$StrokePath$2f$StrokePath$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Atom/StrokePath/StrokePath.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Molecule$2f$HexRoute$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Molecule/HexRoute/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Molecule$2f$HexRoute$2f$HexRoute$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Molecule/HexRoute/HexRoute.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$FilmTimeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/FilmTimeContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/scenes/layout.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$imagefilmPalette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/imagefilmPalette.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$FilmIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/FilmIcon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$LogoTile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/LogoTile.tsx [app-client] (ecmascript)");
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
const KREISLAUF = [
    'factory',
    'handshake',
    'recycle',
    'sort',
    'restore',
    'logoSign'
];
const PLASTSHIP_STATION = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CYCLE_COUNT"] - 1;
const TILE_R = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CYCLE_TILE_R"];
/** Kantenlänge der Motive auf den Stationen */ const ICON = 0.66;
/** Versatz und Dauer des Erscheinens je Station (Anteil von b8.gather) */ const STAGGER = 0.12;
const POP = 1 - STAGGER * (__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CYCLE_COUNT"] - 1);
/** So viele Strecken vor der Ankunft des Wegs beginnt eine Station, sich zu füllen — weich statt hart */ const LIT_FADE = 0.5;
/** Der Weg liegt hinter den Stationen: er taucht in jede ein. Die Wabe, die zum Schlussbild wächst, wartet hinter der Station von plastship */ const TRACK_Z = -0.2;
const RETURN_Z = -0.12;
/** Wabengitter des Wegs: Zelle 0,0 ist die Mitte des Kreislaufs */ const TRACK_CELL_R = 0.2;
/** Tempo des Pulses in Waben je Sekunde und Anteil der Pulsfarbe in den ruhenden Waben */ const TRACK_SPEED = 5;
const TRACK_REST = 0.25;
const WAVE_FROM = 1.1;
const WAVE_TO = 11;
/** Schlussbild (#1513): weiße Wabe auf Blau, darauf das Zeichen in den Markenfarben wie auf hellem Grund */ const BRAND = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["themePlastship"].palette.default;
;
const LOGO_SIZE = 1.9;
const WORD_WIDTH = 3.4;
const WORD_GAP = 0.55;
/** Schriftzug steigt beim Einblenden ein Stück auf */ const WORD_RISE = 0.25;
const WORD_POS = [
    0,
    0,
    0.02
];
/** Weiß der Motive auf den Stationen */ const WHITE = BRAND.white;
// Scratch auf Modulebene (Lint react-hooks/immutability): je Frame überschrieben
const SPIN = [
    0,
    0,
    0
];
const LOGO_TURN = [
    0,
    0,
    0
];
const RETURN_POS = [
    0,
    0,
    RETURN_Z
];
const stationPop = (gather, i)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp01"])((gather - i * STAGGER) / POP);
const lapStation = (k)=>(PLASTSHIP_STATION + k) % __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CYCLE_COUNT"];
const stationLit = (lap, j)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp01"])((lap - (j + 1) + LIT_FADE) / LIT_FADE);
const stationCell = (i, portrait)=>{
    const [x, y] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cycleStationAt"])(i, portrait);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$hexRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["latticeCellAt"])(x - __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CENTER"][0], y - __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CENTER"][1], TRACK_CELL_R);
};
const Beat8 = ()=>{
    _s();
    const { f, now, inBeat, colorsFor, portrait } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$FilmTimeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFilm"])();
    const colors = colorsFor('b8');
    const gather = f('b8.gather');
    const rigk = f('b8.rigk');
    const lap = f('b8.lap');
    const merge = f('b8.merge');
    const logo = f('b8.logo');
    const plate = f('b8.plate');
    const word = f('b8.word');
    const wave = f('b8.wave');
    const wave2 = f('b8.wave2');
    const grow = f('b8.grow');
    const unit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Beat8.useMemo[unit]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$hexGeometry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexOutlinePoints"])(1, true, Math.PI / 6)
    }["Beat8.useMemo[unit]"], []);
    // Stationen relativ zur Mitte des Kreislaufs
    const stations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Beat8.useMemo[stations]": ()=>KREISLAUF.map({
                "Beat8.useMemo[stations]": (_, i)=>{
                    const [x, y] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cycleStationAt"])(i, portrait);
                    return [
                        x - __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CENTER"][0],
                        y - __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CENTER"][1],
                        0
                    ];
                }
            }["Beat8.useMemo[stations]"])
    }["Beat8.useMemo[stations]"], [
        portrait
    ]);
    // Strecken der Runde: von plastship reihum zurück zu plastship, je von der Zelle einer Station zur Zelle der nächsten
    const legs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Beat8.useMemo[legs]": ()=>Array.from({
                length: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CYCLE_COUNT"]
            }, {
                "Beat8.useMemo[legs]": (_, k)=>({
                        from: stationCell(lapStation(k), portrait),
                        to: stationCell(lapStation(k + 1), portrait)
                    })
            }["Beat8.useMemo[legs]"])
    }["Beat8.useMemo[legs]"], [
        portrait
    ]);
    const trackRest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$mixColor$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mixColor"])(colors.background, colors.secondary, TRACK_REST);
    const fade = ()=>1 - merge();
    const tiles = KREISLAUF.map((name, i)=>{
        const pop = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_POP"])(stationPop(gather(), i));
        const lit = ()=>stationLit(lap(), i);
        // Rücknahme, Sortierung, Aufbereitung füllen sich in ihrer festen Farbe wie auf Folie 3 (#1964), die übrigen weiß
        const term = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$imagefilmPalette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CYCLE_TERMS"][i];
        const fill = term ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$imagefilmPalette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["termColor"])(term, colors.background) : WHITE;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$AnimatedGroup$2f$AnimatedGroup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedGroup"], {
            name: "b8-tile",
            position: stations[i],
            scale: pop,
            visible: ()=>stationPop(gather(), i) > 0,
            children: i === PLASTSHIP_STATION ? // plastship ist selbst eine Station des Kreislaufs: weiße Wabe mit dem Zeichen — Anfang und Ende des Wegs
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$LogoTile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LogoTile"], {
                logo: "logoSign",
                radius: TILE_R,
                opacity: fade
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/Beat8.tsx",
                lineNumber: 141,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0)) : // erreicht: die Wabe füllt sich weiß bzw. in der Farbe ihres Begriffs, das Motiv wechselt in die Farbe der Folie — grün ist nur der Weg
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$FilmIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TiledIcon"], {
                name: name,
                size: ICON,
                tileRadius: TILE_R,
                tileColor: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$mixColor$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mixColor"])(colors.muted, fill, lit()),
                color: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$mixColor$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mixColor"])(WHITE, colors.background, lit()),
                opacity: fade
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/Beat8.tsx",
                lineNumber: 144,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0))
        }, name, false, {
            fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/Beat8.tsx",
            lineNumber: 138,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    });
    const ring = (progress, width, strength)=>({
            scale: ()=>WAVE_FROM + (WAVE_TO - WAVE_FROM) * progress(),
            opacity: ()=>{
                const p = progress();
                return p > 0 && p < 1 ? strength * (1 - p) : 0;
            },
            width
        });
    const rings = [
        ring(wave, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LINE"].bold, 1),
        ring(wave2, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LINE"].regular, 0.6)
    ];
    // die Wabe, die zum Schlussbild wächst: so groß wie die Station von plastship, hinter der sie wartet
    const returnScale = ()=>TILE_R / __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HEX_RADIUS"] + (1 - TILE_R / __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HEX_RADIUS"]) * grow();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$AnimatedGroup$2f$AnimatedGroup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedGroup"], {
        name: "b8",
        position: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CENTER"],
        visible: inBeat('b8'),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$AnimatedGroup$2f$AnimatedGroup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedGroup"], {
                name: "b8-bloom",
                // zum Schluss dreht der Kreislauf eine Wabe weiter und zieht sich in die Mitte zusammen
                scale: ()=>Math.max(0.0001, 1 - merge()),
                rotation: ()=>{
                    SPIN[2] = Math.PI / 3 * merge();
                    return SPIN;
                },
                visible: ()=>merge() < 1,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                        position: [
                            0,
                            0,
                            TRACK_Z
                        ],
                        children: legs.map(({ from, to }, k)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Molecule$2f$HexRoute$2f$HexRoute$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexRoute"], {
                                name: "b8-leg",
                                from: from,
                                to: to,
                                cellRadius: TRACK_CELL_R,
                                line: false,
                                tileColor: trackRest,
                                groundColor: colors.background,
                                pulseColor: colors.secondary,
                                pulsePhase: ()=>now() * TRACK_SPEED,
                                progress: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp01"])(lap() - k),
                                opacity: fade
                            }, k, false, {
                                fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/Beat8.tsx",
                                lineNumber: 184,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/Beat8.tsx",
                        lineNumber: 182,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$AnimatedGroup$2f$AnimatedGroup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedGroup"], {
                        name: "b8-hub",
                        scale: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_POP"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp01"])(rigk())),
                        visible: ()=>rigk() > 0,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$LogoTile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LogoTile"], {
                            logo: "rigkLogo",
                            radius: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CYCLE_HUB_R"],
                            opacity: fade
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/Beat8.tsx",
                            lineNumber: 202,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/Beat8.tsx",
                        lineNumber: 201,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    tiles
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/Beat8.tsx",
                lineNumber: 171,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            rings.map((r, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$AnimatedGroup$2f$AnimatedGroup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedGroup"], {
                    name: "b8-wave",
                    scale: r.scale,
                    visible: ()=>r.opacity() > 0,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$StrokePath$2f$StrokePath$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StrokePath"], {
                        points: unit,
                        width: r.width,
                        color: colors.secondary,
                        opacity: r.opacity
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/Beat8.tsx",
                        lineNumber: 208,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, i, false, {
                    fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/Beat8.tsx",
                    lineNumber: 207,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$AnimatedGroup$2f$AnimatedGroup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedGroup"], {
                name: "b8-return",
                position: ()=>{
                    const keep = 1 - merge();
                    RETURN_POS[0] = stations[PLASTSHIP_STATION][0] * keep;
                    RETURN_POS[1] = stations[PLASTSHIP_STATION][1] * keep;
                    RETURN_POS[2] = RETURN_Z * keep;
                    return RETURN_POS;
                },
                scale: returnScale,
                visible: ()=>merge() > 0 && grow() < 1,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$HexPrism$2f$HexPrism$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexPrism"], {
                    name: "b8-return-plate",
                    radius: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HEX_RADIUS"],
                    depth: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PLATE_DEPTH"],
                    color: BRAND.white,
                    position: [
                        0,
                        0,
                        -__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PLATE_DEPTH"]
                    ]
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/Beat8.tsx",
                    lineNumber: 224,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/Beat8.tsx",
                lineNumber: 212,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$AnimatedGroup$2f$AnimatedGroup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedGroup"], {
                name: "end-plate",
                scale: plate,
                visible: ()=>plate() > 0,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$HexPrism$2f$HexPrism$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexPrism"], {
                    radius: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HEX_RADIUS"],
                    depth: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PLATE_DEPTH"],
                    color: BRAND.white,
                    position: [
                        0,
                        0,
                        -__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PLATE_DEPTH"]
                    ]
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/Beat8.tsx",
                    lineNumber: 227,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/Beat8.tsx",
                lineNumber: 226,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$AnimatedGroup$2f$AnimatedGroup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedGroup"], {
                name: "end-word",
                position: ()=>{
                    WORD_POS[1] = -__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HEX_RADIUS"] - WORD_GAP - WORD_RISE * (1 - word());
                    return WORD_POS;
                },
                visible: ()=>word() > 0,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$FilmIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FilmIcon"], {
                    name: "logoWord",
                    size: WORD_WIDTH,
                    color: colors.text,
                    opacity: word
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/Beat8.tsx",
                    lineNumber: 237,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/Beat8.tsx",
                lineNumber: 229,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$AnimatedGroup$2f$AnimatedGroup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedGroup"], {
                name: "end-logo",
                scale: logo,
                rotation: ()=>{
                    LOGO_TURN[2] = (1 - logo()) * -0.6;
                    return LOGO_TURN;
                },
                visible: ()=>logo() > 0,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$FilmIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FilmIcon"], {
                    name: "logoSign",
                    size: LOGO_SIZE,
                    color: BRAND.primary,
                    accentColor: BRAND.secondary,
                    position: [
                        0,
                        0,
                        0.02
                    ]
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/Beat8.tsx",
                    lineNumber: 248,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/Beat8.tsx",
                lineNumber: 239,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/Beat8.tsx",
        lineNumber: 170,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Beat8, "xW/Bk27h9OrdWBcqpL+yUPgUQe4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$FilmTimeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFilm"]
    ];
});
_c = Beat8;
const __TURBOPACK__default__export__ = Beat8;
var _c;
__turbopack_context__.k.register(_c, "Beat8");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/BeatM.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BeatM",
    ()=>BeatM,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$hexGeometry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/scene3d/hexGeometry.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$hexRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/scene3d/hexRoute.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$mixColor$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/scene3d/mixColor.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$AnimatedGroup$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Atom/AnimatedGroup/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$AnimatedGroup$2f$AnimatedGroup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Atom/AnimatedGroup/AnimatedGroup.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$HexPrism$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Atom/HexPrism/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$HexPrism$2f$HexPrism$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Atom/HexPrism/HexPrism.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$StrokePath$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Atom/StrokePath/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$StrokePath$2f$StrokePath$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Atom/StrokePath/StrokePath.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Molecule$2f$HexRoute$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Molecule/HexRoute/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Molecule$2f$HexRoute$2f$HexRoute$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Molecule/HexRoute/HexRoute.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$FilmTimeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/FilmTimeContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/scenes/layout.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$BakedPile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/BakedPile.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$LogoTile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/LogoTile.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$materialPiles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/materialPiles.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$rankLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/rankLayout.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$marketLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/marketLayout.ts [app-client] (ecmascript)");
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
/** Material der übrigen Angebote: dieselben Schüttungen wie die passenden (geteilte Rechnung), gespiegelt */ const OTHER_MATERIALS = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$materialPiles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["MATERIAL_OF_RANK"].filter(_c = (_, i)=>i !== __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$rankLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RANK_FROM_B1"]);
_c1 = OTHER_MATERIALS;
/** plastship rechts neben dem Raster: Zeichen auf weißer Wabe */ const SEEKER_R = 0.95;
/** Verbindungen hinter allen Waben (Grund der Waben bei −0,01 bzw. −PLATE_DEPTH) */ const LINK_Z = -0.12;
/** Wabengitter der Verbindungen: Zelle 0,0 ist die Mitte der plastship-Wabe */ const LINK_CELL_R = 0.22;
const LINK_ORIGIN = [
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$marketLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BUYER_AT"][0],
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$marketLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BUYER_AT"][1],
    LINK_Z
];
const LINK_FROM = [
    0,
    0
];
/** Zielzelle je Treffer: die Zelle, in der die Mitte seiner Wabe liegt */ const LINKS = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$marketLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MATCH_SLOT"].map(_c2 = (slot)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$hexRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["latticeCellAt"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$marketLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MARKET_SLOTS"][slot][0] - __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$marketLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BUYER_AT"][0], __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$marketLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MARKET_SLOTS"][slot][1] - __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$marketLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BUYER_AT"][1], LINK_CELL_R));
_c3 = LINKS;
/** Tempo des Pulses in Waben je Sekunde und Anteil der Pulsfarbe in den ruhenden Waben */ const LINK_SPEED = 5;
const LINK_REST = 0.14;
const BEAM_POS = [
    0,
    0,
    0.05
];
const BeatM = ()=>{
    _s();
    const { f, now, inBeat, colorsFor, portrait } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$FilmTimeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFilm"])();
    const colors = colorsFor('bm');
    const opacity = f('bm.opacity');
    const grow = f('bm.grow');
    const pourClock = f('bm.pour.clock');
    const buyer = f('bm.buyer');
    const search = f('bm.search');
    const links = f('bm.links');
    const others = f('bm.others');
    const linkRest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$mixColor$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mixColor"])(colors.background, colors.secondary, LINK_REST);
    const beamX = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$marketLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["beamAt"])(search());
    const hex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "BeatM.useMemo[hex]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$hexGeometry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexOutlinePoints"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$rankLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RANK_HEX_R"], true, Math.PI / 6)
    }["BeatM.useMemo[hex]"], []);
    const offers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "BeatM.useMemo[offers]": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$marketLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OTHER_SLOTS"].map({
                "BeatM.useMemo[offers]": (slot, k)=>({
                        slot,
                        spec: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$materialPiles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["pileSpec"])(OTHER_MATERIALS[k % OTHER_MATERIALS.length], 4100 + __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$materialPiles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["MATERIAL_OF_RANK"].indexOf(OTHER_MATERIALS[k % OTHER_MATERIALS.length])),
                        mirror: k % 2 === 0
                    })
            }["BeatM.useMemo[offers]"])
    }["BeatM.useMemo[offers]"], []);
    const beam = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "BeatM.useMemo[beam]": ()=>[
                [
                    0,
                    -__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$marketLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEARCH_BEAM_HALF"],
                    0
                ],
                [
                    0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$marketLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEARCH_BEAM_HALF"],
                    0
                ]
            ]
    }["BeatM.useMemo[beam]"], []);
    /** Deckkraft der Angebote, die nicht passen: hinter dem Suchstrahl blenden sie aus */ const passed = (x)=>others() * (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$marketLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scanFade"])(x, beamX());
    return(// #2109: im Hochformat eigener Raum (MARKET_SPACE) — Raster und Abnehmer so breit wie die Bühne
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$AnimatedGroup$2f$AnimatedGroup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedGroup"], {
        name: "bm",
        visible: inBeat('bm'),
        position: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$rankLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["marketSpace"])(portrait).offset,
        scale: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$rankLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["marketSpace"])(portrait).scale,
        children: [
            offers.map(({ slot, spec, mirror })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                    name: "bm-offer",
                    position: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$marketLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MARKET_SLOTS"][slot],
                    scale: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$marketLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MARKET_HEX_R"] / __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$rankLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RANK_HEX_R"],
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$HexPrism$2f$HexPrism$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexPrism"], {
                            name: "bm-offer-fill",
                            radius: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$rankLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RANK_HEX_R"],
                            color: colors.background,
                            opacity: ()=>grow() * opacity() * passed(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$marketLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MARKET_SLOTS"][slot][0]),
                            position: [
                                0,
                                0,
                                -0.01
                            ]
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/BeatM.tsx",
                            lineNumber: 89,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$StrokePath$2f$StrokePath$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StrokePath"], {
                            points: hex,
                            width: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LINE"].regular,
                            color: colors.line,
                            progress: grow,
                            opacity: ()=>opacity() * passed(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$marketLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MARKET_SLOTS"][slot][0])
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/BeatM.tsx",
                            lineNumber: 96,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$AnimatedGroup$2f$AnimatedGroup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedGroup"], {
                            name: "bm-offer-pile",
                            scale: ()=>passed(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$marketLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MARKET_SLOTS"][slot][0]),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$BakedPile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BakedPile"], {
                                spec: spec,
                                clock: pourClock,
                                mirror: mirror
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/BeatM.tsx",
                                lineNumber: 98,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/BeatM.tsx",
                            lineNumber: 97,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, slot, true, {
                    fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/BeatM.tsx",
                    lineNumber: 87,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))),
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$marketLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MARKET_FRAY"].map((tile, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                    name: "bm-fray",
                    position: tile.at,
                    scale: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$marketLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MARKET_HEX_R"] / __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$rankLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RANK_HEX_R"] * tile.scale,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$StrokePath$2f$StrokePath$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StrokePath"], {
                        points: hex,
                        width: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LINE"].regular,
                        color: colors.line,
                        progress: grow,
                        opacity: ()=>opacity() * tile.alpha * passed(tile.at[0])
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/BeatM.tsx",
                        lineNumber: 105,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, i, false, {
                    fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/BeatM.tsx",
                    lineNumber: 104,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$AnimatedGroup$2f$AnimatedGroup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedGroup"], {
                name: "bm-buyer",
                position: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$marketLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BUYER_AT"],
                scale: buyer,
                visible: ()=>buyer() > 0,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$LogoTile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LogoTile"], {
                    name: "bm-plastship",
                    logo: "logoSign",
                    radius: SEEKER_R,
                    opacity: opacity,
                    outline: colors.line
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/BeatM.tsx",
                    lineNumber: 116,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/BeatM.tsx",
                lineNumber: 114,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$AnimatedGroup$2f$AnimatedGroup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedGroup"], {
                name: "bm-search",
                position: ()=>{
                    BEAM_POS[0] = beamX();
                    BEAM_POS[1] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$marketLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BUYER_AT"][1] - 0.2;
                    return BEAM_POS;
                },
                visible: ()=>search() > 0 && search() < 1,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$StrokePath$2f$StrokePath$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StrokePath"], {
                    points: beam,
                    width: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LINE"].regular,
                    color: colors.secondary,
                    opacity: opacity
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/BeatM.tsx",
                    lineNumber: 127,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/BeatM.tsx",
                lineNumber: 118,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                position: LINK_ORIGIN,
                children: LINKS.map((to, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Molecule$2f$HexRoute$2f$HexRoute$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexRoute"], {
                        name: "bm-link",
                        from: LINK_FROM,
                        to: to,
                        cellRadius: LINK_CELL_R,
                        line: false,
                        tileColor: linkRest,
                        groundColor: colors.background,
                        pulseColor: colors.secondary,
                        pulsePhase: ()=>now() * LINK_SPEED,
                        progress: links,
                        opacity: opacity
                    }, i, false, {
                        fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/BeatM.tsx",
                        lineNumber: 132,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/BeatM.tsx",
                lineNumber: 130,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/BeatM.tsx",
        lineNumber: 85,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
};
_s(BeatM, "j9zzUNoicHY/LAIq5OpJkmj5okw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$FilmTimeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFilm"]
    ];
});
_c4 = BeatM;
const __TURBOPACK__default__export__ = BeatM;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "OTHER_MATERIALS$MATERIAL_OF_RANK.filter");
__turbopack_context__.k.register(_c1, "OTHER_MATERIALS");
__turbopack_context__.k.register(_c2, "LINKS$MATCH_SLOT.map");
__turbopack_context__.k.register(_c3, "LINKS");
__turbopack_context__.k.register(_c4, "BeatM");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/BeatS.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BeatS",
    ()=>BeatS,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/motion/easing.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$hexMosaic$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/scene3d/hexMosaic.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$AnimatedGroup$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Atom/AnimatedGroup/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$AnimatedGroup$2f$AnimatedGroup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Atom/AnimatedGroup/AnimatedGroup.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$HexPrism$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Atom/HexPrism/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$HexPrism$2f$HexPrism$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Atom/HexPrism/HexPrism.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Molecule$2f$HexMosaicMap$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Molecule/HexMosaicMap/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Molecule$2f$HexMosaicMap$2f$HexMosaicMap$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Molecule/HexMosaicMap/HexMosaicMap.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$FilmTimeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/FilmTimeContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/scenes/layout.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$MapMarker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/MapMarker.tsx [app-client] (ecmascript)");
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
const CELL = 0.175;
/** Standort etwa in der Mitte Deutschlands (Zelle aus GERMANY_MASK) */ const PIN_CELL = [
    5,
    7
];
/** Plakette über dem Standort: Radius und Höhe über dem Zellzentrum (#1513) */ const MARKER_R = 0.34;
const MARKER_LIFT = 0.68;
const POINTS = Array.from({
    length: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SERVER_POINT_COUNT"]
}, (_, i)=>i);
const BeatS = ()=>{
    _s();
    const { f, inBeat, colorsFor, portrait } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$FilmTimeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFilm"])();
    const colors = colorsFor('bs');
    const opacity = f('bs.opacity');
    const points = f('bs.points');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$AnimatedGroup$2f$AnimatedGroup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedGroup"], {
        name: "bs",
        visible: inBeat('bs'),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                name: "bs-germany",
                position: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serverMapAt"])(portrait),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Molecule$2f$HexMosaicMap$2f$HexMosaicMap$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexMosaicMap"], {
                    cellRadius: CELL,
                    mask: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$hexMosaic$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GERMANY_MASK"],
                    color: colors.muted,
                    reveal: f('bs.map.reveal'),
                    opacity: opacity,
                    outline: true,
                    outlineColor: colors.line,
                    outlineProgress: f('bs.map.outline'),
                    outlineWidth: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LINE"].regular,
                    pinProgress: f('bs.pin'),
                    markColor: colors.secondary,
                    pins: [
                        {
                            col: PIN_CELL[0],
                            row: PIN_CELL[1],
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$MapMarker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MapMarker"], {
                                name: "server",
                                fill: colors.secondary,
                                iconColor: colors.background,
                                ringColor: colors.background,
                                radius: MARKER_R,
                                lift: MARKER_LIFT,
                                opacity: opacity
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/BeatS.tsx",
                                lineNumber: 52,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        }
                    ]
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/BeatS.tsx",
                    lineNumber: 35,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/BeatS.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            POINTS.map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$AnimatedGroup$2f$AnimatedGroup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedGroup"], {
                    name: "bs-point",
                    position: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serverPointAt"])(i, portrait),
                    scale: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_POP"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp01"])(points() - i)),
                    visible: ()=>points() > i,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$HexPrism$2f$HexPrism$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexPrism"], {
                        radius: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ISO_POINT_R"],
                        color: colors.secondary,
                        opacity: opacity
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/BeatS.tsx",
                        lineNumber: 74,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, i, false, {
                    fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/BeatS.tsx",
                    lineNumber: 67,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/BeatS.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(BeatS, "vGKsB2EmnWMkhRQRNOXu/+u55CE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$FilmTimeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFilm"]
    ];
});
_c = BeatS;
const __TURBOPACK__default__export__ = BeatS;
var _c;
__turbopack_context__.k.register(_c, "BeatS");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/BeatW.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BeatW",
    ()=>BeatW,
    "WAYS",
    ()=>WAYS,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/theme.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/motion/easing.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$hexGeometry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/scene3d/hexGeometry.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$AnimatedGroup$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Atom/AnimatedGroup/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$AnimatedGroup$2f$AnimatedGroup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Atom/AnimatedGroup/AnimatedGroup.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$HexPrism$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Atom/HexPrism/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$HexPrism$2f$HexPrism$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Atom/HexPrism/HexPrism.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$StrokePath$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Atom/StrokePath/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$StrokePath$2f$StrokePath$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Atom/StrokePath/StrokePath.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Molecule$2f$HexRoute$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Molecule/HexRoute/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Molecule$2f$HexRoute$2f$HexRoute$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Molecule/HexRoute/HexRoute.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$FilmTimeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/FilmTimeContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/scenes/layout.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$chargePath$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/chargePath.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$wayLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/wayLayout.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$Beat8$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/Beat8.tsx [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$FilmIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/FilmIcon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$imagefilmPalette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/imagefilmPalette.ts [app-client] (ecmascript)");
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
const WAYS = [
    'network',
    'collection',
    'gear',
    'rigk'
];
const ICON = 0.6;
/** hinter den Waben: die Routen beginnen und enden unter ihnen (Grund der großen Wabe bei −PLATE_DEPTH) */ const FLOW_Z = -0.12;
/** Scratch auf Modulebene: Lage der großen Wabe, während sie zur Seite wandert */ const HUB_POS = [
    0,
    0,
    0
];
const CHECK_POS = [
    0,
    0,
    0.05
];
/** Ziel aller Routen: die Zelle in der Mitte der großen Wabe */ const HUB_CELL = [
    0,
    0
];
/** Deckkraft der Waben, über die eine Route gelaufen ist */ const TRAIL = 0.5;
const BRAND = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["themePlastship"].palette.default;
/** Scratch auf Modulebene (siehe Beat2) */ const LOGO_TURN = [
    0,
    0,
    0
];
const BeatW = ()=>{
    _s();
    const { f, inBeat, colorsFor, portrait } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$FilmTimeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFilm"])();
    const colors = colorsFor('bw');
    const opacity = f('bw.opacity');
    const ways = f('bw.ways');
    const flow = f('bw.flow');
    const check = f('bw.check');
    const logo = f('bw.logo');
    const shift = f('b1.shift');
    // Platz der großen Wabe am Ende des Wanderns: dort liegt der Ursprung des Wabengitters der Routen
    const hub = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "BeatW.useMemo[hub]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$chargePath$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hubAt"])(portrait)
    }["BeatW.useMemo[hub]"], [
        portrait
    ]);
    const origin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "BeatW.useMemo[origin]": ()=>[
                hub[0],
                hub[1],
                FLOW_Z
            ]
    }["BeatW.useMemo[origin]"], [
        hub
    ]);
    const hubNow = (out, z)=>()=>{
            const s = shift();
            out[0] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CENTER"][0] + (hub[0] - __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CENTER"][0]) * s;
            out[1] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CENTER"][1] + (hub[1] - __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CENTER"][1]) * s;
            out[2] = z;
            return out;
        };
    const hex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "BeatW.useMemo[hex]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$hexGeometry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexOutlinePoints"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$wayLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WAY_R"], true, Math.PI / 6)
    }["BeatW.useMemo[hex]"], []);
    const spots = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "BeatW.useMemo[spots]": ()=>WAYS.map({
                "BeatW.useMemo[spots]": (_, i)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$wayLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wayAt"])(i, portrait)
            }["BeatW.useMemo[spots]"])
    }["BeatW.useMemo[spots]"], [
        portrait
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$AnimatedGroup$2f$AnimatedGroup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedGroup"], {
        name: "bw",
        visible: inBeat('bw'),
        children: [
            WAYS.map((name, i)=>{
                const appear = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_POP"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp01"])(ways() - i));
                // jeder Weg in seiner festen Farbe (#1964): Kontur und Fläche
                const tint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$imagefilmPalette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["termColor"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$imagefilmPalette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WAY_TERMS"][i], colors.background);
                // Fläche in der Farbe des Begriffs, Motiv und Name darauf weiß (#1975); zu helle Töne dunkelt termSurface ab
                const surface = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$imagefilmPalette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["termSurface"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$imagefilmPalette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WAY_TERMS"][i], colors.background);
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$AnimatedGroup$2f$AnimatedGroup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedGroup"], {
                    name: "bw-way",
                    position: spots[i],
                    scale: appear,
                    visible: ()=>appear() > 0,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$HexPrism$2f$HexPrism$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexPrism"], {
                            name: "bw-way-fill",
                            radius: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$wayLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WAY_R"],
                            color: surface,
                            opacity: opacity,
                            position: [
                                0,
                                0,
                                -0.01
                            ]
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/BeatW.tsx",
                            lineNumber: 80,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$StrokePath$2f$StrokePath$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StrokePath"], {
                            points: hex,
                            width: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LINE"].regular,
                            color: tint,
                            opacity: opacity
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/BeatW.tsx",
                            lineNumber: 81,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$FilmIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FilmIcon"], {
                            name: name,
                            size: ICON,
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$imagefilmPalette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ON_TERM"],
                            opacity: opacity
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/BeatW.tsx",
                            lineNumber: 82,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, name, true, {
                    fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/BeatW.tsx",
                    lineNumber: 78,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0));
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                position: origin,
                children: WAYS.map((name, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Molecule$2f$HexRoute$2f$HexRoute$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexRoute"], {
                        name: "bw-route",
                        from: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$wayLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wayCell"])(i, portrait),
                        to: HUB_CELL,
                        cellRadius: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$wayLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WAY_CELL_R"],
                        tileColor: colors.muted,
                        groundColor: colors.background,
                        tileOpacity: TRAIL,
                        lineColor: colors.secondary,
                        lineWidth: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LINE"].regular,
                        // jede Route läuft, sobald ihr Weg da ist, von ihm zur großen Wabe (bw.flow zählt 0–4)
                        progress: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp01"])(flow() - i),
                        opacity: opacity
                    }, name, false, {
                        fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/BeatW.tsx",
                        lineNumber: 88,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/BeatW.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$AnimatedGroup$2f$AnimatedGroup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedGroup"], {
                name: "bw-logo",
                position: hubNow(HUB_POS, 0),
                scale: logo,
                rotation: ()=>{
                    LOGO_TURN[2] = (1 - logo()) * 0.6;
                    return LOGO_TURN;
                },
                visible: ()=>logo() > 0,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$FilmIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FilmIcon"], {
                    name: "logoSign",
                    size: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$Beat8$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["LOGO_SIZE"],
                    color: BRAND.primary,
                    accentColor: BRAND.secondary,
                    position: [
                        0,
                        0,
                        0.02
                    ]
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/BeatW.tsx",
                    lineNumber: 116,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/BeatW.tsx",
                lineNumber: 106,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$AnimatedGroup$2f$AnimatedGroup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedGroup"], {
                name: "bw-check",
                position: hubNow(CHECK_POS, 0.05),
                scale: check,
                visible: ()=>check() > 0,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$FilmIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FilmIcon"], {
                    name: "verified",
                    size: 1.6,
                    color: colors.secondary
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/BeatW.tsx",
                    lineNumber: 119,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/BeatW.tsx",
                lineNumber: 118,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/BeatW.tsx",
        lineNumber: 70,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(BeatW, "zXenNvaHvqjbBSQ4962iqnnjScg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$FilmTimeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFilm"]
    ];
});
_c = BeatW;
const __TURBOPACK__default__export__ = BeatW;
var _c;
__turbopack_context__.k.register(_c, "BeatW");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/CertificateSketch.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CertificateSketch",
    ()=>CertificateSketch,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/motion/easing.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$shapes2d$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/scene3d/shapes2d.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$AnimatedGroup$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Atom/AnimatedGroup/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$AnimatedGroup$2f$AnimatedGroup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Atom/AnimatedGroup/AnimatedGroup.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$StrokePath$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Atom/StrokePath/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$StrokePath$2f$StrokePath$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Atom/StrokePath/StrokePath.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Molecule$2f$DocumentCards$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Molecule/DocumentCards/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Molecule$2f$DocumentCards$2f$DocumentCards$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Molecule/DocumentCards/DocumentCards.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/scenes/layout.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$rankLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/rankLayout.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$Beat3$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/Beat3.tsx [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$ClassBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/ClassBadge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$FilmIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/FilmIcon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$imagefilmPalette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/imagefilmPalette.ts [app-client] (ecmascript)");
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
const HW = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$rankLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CERT"].width / 2;
const HH = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$rankLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CERT"].height / 2;
/** Anteil des Fortschritts von a bis b als 0–1 */ const seg = (p, a, b)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp01"])((p - a) / (b - a));
const line = (x1, x2, y)=>[
        [
            x1,
            y,
            0.01
        ],
        [
            x2,
            y,
            0.01
        ]
    ];
/**
 * Kopf: Datum rechts. Die Überschrift „Monitored Material" steht als lesbarer
 * Text in einer Zeile über der Bühne (certTitleFrame); darunter deutet eine
 * kurze Linie den Untertitel der Urkunde an.
 */ const DATE = line(0.75, 1.2, HH - 0.38);
const SUBTITLE = line(-0.6, 0.6, 0.62);
/** Mitte: Klassen-Abzeichen links, daneben der Gesamtscore als kräftiger Strich mit zwei Zeilen Text */ const BADGE_AT = [
    -0.72,
    -0.12,
    0.03
];
const BADGE_R = 0.52;
const SCORE = line(0.1, 0.75, 0.1);
const SCORE_TEXT = [
    line(0.1, 1.15, -0.2),
    line(0.1, 0.85, -0.4)
];
/**
 * vier Dimensionen: Wabe in der Farbe der Dimension mit weißem Motiv, wie im
 * Labor und in der Legende (#1993), darunter ihr Wert als Strich in derselben Farbe
 */ const DIMENSION_Y = -1.02;
const DIMENSION_X = [
    -1.05,
    -0.35,
    0.35,
    1.05
];
const DIMENSION_VALUE = [
    0.5,
    0.44,
    0.46,
    0.5
];
/** Umkreisradius der Wabe; das Motiv im Verhältnis der Legende (LEGEND_R × 1,05) */ const DIMENSION_TILE_R = 0.25;
const DIMENSION_SIZE = DIMENSION_TILE_R * 1.05;
/** Unterschrift unten links: Schwung über der Linie */ const SIGNATURE = [
    [
        -1.12,
        -1.74,
        0.01
    ],
    [
        -0.98,
        -1.58,
        0.01
    ],
    [
        -0.86,
        -1.76,
        0.01
    ],
    [
        -0.68,
        -1.56,
        0.01
    ],
    [
        -0.54,
        -1.74,
        0.01
    ],
    [
        -0.3,
        -1.64,
        0.01
    ]
];
const SIGNATURE_LINE = line(-1.15, -0.15, -1.86);
const CertificateSketch = ({ progress, opacity, colors, name = 'certificate' })=>{
    _s();
    const outline = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CertificateSketch.useMemo[outline]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$shapes2d$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["roundedRectPoints"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$rankLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CERT"].width, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$rankLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CERT"].height, 0.12).map({
                "CertificateSketch.useMemo[outline]": ([x, y])=>[
                        x,
                        y,
                        0.002
                    ]
            }["CertificateSketch.useMemo[outline]"])
    }["CertificateSketch.useMemo[outline]"], []);
    const shown = (a, b)=>()=>seg(progress(), a, b);
    const faded = (a, b)=>()=>seg(progress(), a, b) * opacity();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        name: name,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Molecule$2f$DocumentCards$2f$DocumentCards$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardFill"], {
                width: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$rankLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CERT"].width,
                height: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$rankLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CERT"].height,
                color: colors.background,
                opacity: faded(0.02, 0.2)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/CertificateSketch.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$StrokePath$2f$StrokePath$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StrokePath"], {
                points: outline,
                width: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LINE"].regular,
                color: colors.line,
                progress: shown(0, 0.3),
                opacity: opacity
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/CertificateSketch.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$FilmIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FilmIcon"], {
                name: "logoSign",
                size: 0.4,
                color: colors.line,
                accentColor: colors.secondary,
                opacity: faded(0.2, 0.32),
                position: [
                    -HW + 0.42,
                    HH - 0.42,
                    0.01
                ]
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/CertificateSketch.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$StrokePath$2f$StrokePath$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StrokePath"], {
                points: DATE,
                width: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LINE"].thin,
                color: colors.muted,
                progress: shown(0.24, 0.32),
                opacity: opacity
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/CertificateSketch.tsx",
                lineNumber: 92,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$StrokePath$2f$StrokePath$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StrokePath"], {
                points: SUBTITLE,
                width: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LINE"].thin,
                color: colors.muted,
                progress: shown(0.42, 0.52),
                opacity: opacity
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/CertificateSketch.tsx",
                lineNumber: 93,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$AnimatedGroup$2f$AnimatedGroup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedGroup"], {
                name: "certificate-badge",
                position: BADGE_AT,
                scale: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_POP"])(seg(progress(), 0.5, 0.66)) * BADGE_R,
                visible: ()=>progress() > 0.5,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$ClassBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClassBadge"], {
                    opacity: opacity
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/CertificateSketch.tsx",
                    lineNumber: 100,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/CertificateSketch.tsx",
                lineNumber: 94,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$StrokePath$2f$StrokePath$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StrokePath"], {
                points: SCORE,
                width: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LINE"].bold * 1.6,
                color: colors.secondary,
                progress: shown(0.58, 0.68),
                opacity: opacity
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/CertificateSketch.tsx",
                lineNumber: 102,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            SCORE_TEXT.map((points, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$StrokePath$2f$StrokePath$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StrokePath"], {
                    points: points,
                    width: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LINE"].thin,
                    color: colors.muted,
                    progress: shown(0.64 + i * 0.04, 0.72 + i * 0.04),
                    opacity: opacity
                }, i, false, {
                    fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/CertificateSketch.tsx",
                    lineNumber: 104,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))),
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$Beat3$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["DIMENSIONS"].map((icon, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                    name: "certificate-dimension",
                    position: [
                        DIMENSION_X[i],
                        DIMENSION_Y,
                        0.01
                    ],
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$FilmIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TiledIcon"], {
                            name: icon,
                            size: DIMENSION_SIZE,
                            tileRadius: DIMENSION_TILE_R,
                            tileColor: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$imagefilmPalette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DIMENSION_COLORS"][icon],
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$imagefilmPalette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ON_DIMENSION"],
                            opacity: faded(0.7 + i * 0.04, 0.78 + i * 0.04)
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/CertificateSketch.tsx",
                            lineNumber: 115,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$StrokePath$2f$StrokePath$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StrokePath"], {
                            points: line(-0.25, -0.25 + DIMENSION_VALUE[i], -0.32),
                            width: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LINE"].regular,
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$imagefilmPalette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DIMENSION_COLORS"][icon],
                            progress: shown(0.74 + i * 0.04, 0.84 + i * 0.04),
                            opacity: opacity
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/CertificateSketch.tsx",
                            lineNumber: 123,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, icon, true, {
                    fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/CertificateSketch.tsx",
                    lineNumber: 114,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$StrokePath$2f$StrokePath$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StrokePath"], {
                points: SIGNATURE,
                width: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LINE"].thin,
                color: colors.line,
                progress: shown(0.88, 1),
                opacity: opacity
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/CertificateSketch.tsx",
                lineNumber: 132,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$StrokePath$2f$StrokePath$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StrokePath"], {
                points: SIGNATURE_LINE,
                width: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LINE"].thin,
                color: colors.muted,
                progress: shown(0.86, 0.92),
                opacity: opacity
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/CertificateSketch.tsx",
                lineNumber: 133,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/CertificateSketch.tsx",
        lineNumber: 81,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(CertificateSketch, "CHAwil5PsE8x9hTn3meAwf8EiCA=");
_c = CertificateSketch;
const __TURBOPACK__default__export__ = CertificateSketch;
var _c;
__turbopack_context__.k.register(_c, "CertificateSketch");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/ClassBadge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ClassBadge",
    ()=>ClassBadge,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/theme.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$HexPrism$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Atom/HexPrism/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$HexPrism$2f$HexPrism$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Atom/HexPrism/HexPrism.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$StrokePath$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Atom/StrokePath/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$StrokePath$2f$StrokePath$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Atom/StrokePath/StrokePath.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/scenes/layout.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$FilmIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/FilmIcon.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
const BRAND = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["themePlastship"].palette.default;
const DEPTH = 0.04;
const STARS = [
    [
        -0.3,
        -0.42,
        0.03
    ],
    [
        0,
        -0.46,
        0.03
    ],
    [
        0.3,
        -0.42,
        0.03
    ]
];
/** Halbe Wabe (spitz oben) von der rechten zur linken Kantenmitte — oben oder unten herum */ const halfHex = (r, upper)=>{
    const a = Math.sqrt(3) / 2;
    const side = (deg)=>[
            r * Math.cos(deg * Math.PI / 180),
            r * Math.sin(deg * Math.PI / 180),
            0.02
        ];
    return upper ? [
        [
            r * a,
            0,
            0.02
        ],
        side(30),
        side(90),
        side(150),
        [
            -r * a,
            0,
            0.02
        ]
    ] : [
        [
            -r * a,
            0,
            0.02
        ],
        side(210),
        side(270),
        side(330),
        [
            r * a,
            0,
            0.02
        ]
    ];
};
const ClassBadge = ({ opacity = 1, name = 'class-badge' })=>{
    _s();
    const upper = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ClassBadge.useMemo[upper]": ()=>halfHex(1, true)
    }["ClassBadge.useMemo[upper]"], []);
    const lower = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ClassBadge.useMemo[lower]": ()=>halfHex(1, false)
    }["ClassBadge.useMemo[lower]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        name: name,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$HexPrism$2f$HexPrism$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexPrism"], {
                radius: 1,
                depth: DEPTH,
                color: BRAND.white,
                opacity: opacity,
                position: [
                    0,
                    0,
                    -DEPTH
                ]
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/ClassBadge.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$StrokePath$2f$StrokePath$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StrokePath"], {
                points: upper,
                width: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LINE"].regular,
                color: BRAND.primary,
                opacity: opacity
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/ClassBadge.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$StrokePath$2f$StrokePath$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StrokePath"], {
                points: lower,
                width: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LINE"].regular,
                color: BRAND.tertiary,
                opacity: opacity
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/ClassBadge.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$FilmIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FilmIcon"], {
                name: "medal",
                size: 0.8,
                color: BRAND.primary,
                opacity: opacity,
                position: [
                    0,
                    0.2,
                    0.03
                ]
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/ClassBadge.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            STARS.map((at, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$FilmIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FilmIcon"], {
                    name: "star",
                    size: 0.26,
                    color: BRAND.tertiary,
                    opacity: opacity,
                    position: at
                }, i, false, {
                    fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/ClassBadge.tsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/ClassBadge.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ClassBadge, "Yp616jIirfzncm3RKrazKIulJKI=");
_c = ClassBadge;
const __TURBOPACK__default__export__ = ClassBadge;
var _c;
__turbopack_context__.k.register(_c, "ClassBadge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/FilmCamera.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FilmCamera",
    ()=>FilmCamera,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$b389eeca$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-b389eeca.esm.js [app-client] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Molecule$2f$CameraRig$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Molecule/CameraRig/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Molecule$2f$CameraRig$2f$CameraRig$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Molecule/CameraRig/CameraRig.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$FilmTimeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/FilmTimeContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const FilmCamera = ()=>{
    _s();
    const { f, zoom } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$FilmTimeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFilm"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$b389eeca$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "FilmCamera.useFrame": (state)=>{
            const cam = state.camera;
            if (cam.zoom !== zoom) {
                cam.zoom = zoom;
                cam.updateProjectionMatrix();
            }
        }
    }["FilmCamera.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Molecule$2f$CameraRig$2f$CameraRig$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CameraRig"], {
        position: f('camera.position'),
        lookAt: f('camera.lookAt')
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/FilmCamera.tsx",
        lineNumber: 22,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
_s(FilmCamera, "sEQiOKucaN2+jLPqqDzXHxKtZqA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$FilmTimeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFilm"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$b389eeca$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c = FilmCamera;
const __TURBOPACK__default__export__ = FilmCamera;
var _c;
__turbopack_context__.k.register(_c, "FilmCamera");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/FilmIcon.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FilmIcon",
    ()=>FilmIcon,
    "TiledIcon",
    ()=>TiledIcon,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$SvgShape$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Atom/SvgShape/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$SvgShape$2f$SvgShape$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Atom/SvgShape/SvgShape.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$HexPrism$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Atom/HexPrism/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$HexPrism$2f$HexPrism$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Atom/HexPrism/HexPrism.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$icons$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/icons.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
const FilmIcon = ({ name, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$SvgShape$2f$SvgShape$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SvgShape"], {
        svg: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$icons$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FILM_ICONS"][name],
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/FilmIcon.tsx",
        lineNumber: 10,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = FilmIcon;
const TiledIcon = ({ name, tileColor, tileRadius, size, opacity, position, rotation, ...icon })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        position: position,
        rotation: rotation,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$HexPrism$2f$HexPrism$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexPrism"], {
                name: "tile",
                radius: tileRadius ?? size * 0.62,
                color: tileColor,
                opacity: opacity,
                position: [
                    0,
                    0,
                    0.004
                ]
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/FilmIcon.tsx",
                lineNumber: 27,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FilmIcon, {
                name: name,
                size: size,
                opacity: opacity,
                position: [
                    0,
                    0,
                    0.008
                ],
                ...icon
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/FilmIcon.tsx",
                lineNumber: 28,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/FilmIcon.tsx",
        lineNumber: 26,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c1 = TiledIcon;
const __TURBOPACK__default__export__ = FilmIcon;
var _c, _c1;
__turbopack_context__.k.register(_c, "FilmIcon");
__turbopack_context__.k.register(_c1, "TiledIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/LogoTile.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LOGO_BOX",
    ()=>LOGO_BOX,
    "LOGO_FIT",
    ()=>LOGO_FIT,
    "LOGO_FITS",
    ()=>LOGO_FITS,
    "LOGO_OUTLINE",
    ()=>LOGO_OUTLINE,
    "LogoTile",
    ()=>LogoTile,
    "SIGN_SIZE",
    ()=>SIGN_SIZE,
    "default",
    ()=>__TURBOPACK__default__export__,
    "hexHalfWidth",
    ()=>hexHalfWidth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/theme.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$hexGeometry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/scene3d/hexGeometry.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$HexPrism$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Atom/HexPrism/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$HexPrism$2f$HexPrism$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Atom/HexPrism/HexPrism.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$StrokePath$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Atom/StrokePath/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$StrokePath$2f$StrokePath$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Atom/StrokePath/StrokePath.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/scenes/layout.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$FilmIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/FilmIcon.tsx [app-client] (ecmascript)");
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
const PALETTE = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["themePlastship"].palette;
const LOGO_BOX = {
    logoSign: [
        89,
        100
    ],
    plastcert: [
        247.6,
        233.15
    ],
    rigkLogo: [
        462,
        384
    ]
};
/** Farben der Logos auf der weißen Wabe (nur Theme-Farben): Grundfarbe und Akzent */ const LOGO_COLORS = {
    logoSign: [
        PALETTE.default.primary,
        PALETTE.default.secondary
    ],
    // Kolben und Schriftzug dunkel, die Füllung in Markenblau
    plastcert: [
        PALETTE.text.primary,
        PALETTE.default.primary
    ],
    // Pfeil, Rahmen und Buchstaben in Markenblau, das Band in Markengrün
    rigkLogo: [
        PALETTE.default.primary,
        PALETTE.default.secondary
    ]
};
const LOGO_OUTLINE = {
    plastcert: [
        [
            29.8,
            116.6
        ],
        [
            83.1,
            -4.4
        ],
        [
            83.1,
            -62.3
        ],
        [
            123.8,
            -77.4
        ],
        [
            123.8,
            -116.6
        ]
    ],
    rigkLogo: [
        [
            45,
            192
        ],
        [
            231,
            -38
        ],
        [
            231,
            -192
        ]
    ]
};
const LOGO_FIT = 0.74;
const SIGN_SIZE = 0.95;
const hexHalfWidth = (r, y)=>Math.max(0, Math.min(Math.sqrt(3) / 2 * r, Math.sqrt(3) * (r - Math.abs(y))));
/**
 * Größtes Logo, dessen Umriss in die um LOGO_FIT verkleinerte Wabe passt —
 * einmal je Logo gerechnet: der Versatz nach oben wird durchprobiert, je
 * Versatz der Maßstab per Intervallhalbierung bestimmt.
 */ const fitOutline = (logo)=>{
    const points = LOGO_OUTLINE[logo];
    const fits = (scale, lift)=>points.every(([half, y])=>half * scale <= hexHalfWidth(LOGO_FIT, y * scale + lift) + 1e-12);
    let best = {
        scale: 0,
        lift: 0
    };
    for(let step = 0; step <= 400; step += 1){
        const lift = step / 400 * 0.4;
        let [low, high] = [
            0,
            1
        ];
        for(let i = 0; i < 40; i += 1){
            const mid = (low + high) / 2;
            if (fits(mid, lift)) low = mid;
            else high = mid;
        }
        if (low > best.scale) best = {
            scale: low,
            lift
        };
    }
    return {
        size: best.scale * Math.max(...LOGO_BOX[logo]),
        lift: best.lift
    };
};
const LOGO_FITS = {
    logoSign: {
        size: SIGN_SIZE,
        lift: 0
    },
    plastcert: fitOutline('plastcert'),
    rigkLogo: fitOutline('rigkLogo')
};
const LogoTile = ({ logo, radius, opacity = 1, outline, name = 'logo-tile' })=>{
    _s();
    const hex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "LogoTile.useMemo[hex]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$hexGeometry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexOutlinePoints"])(radius, true, Math.PI / 6)
    }["LogoTile.useMemo[hex]"], [
        radius
    ]);
    const [color, accent] = LOGO_COLORS[logo];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        name: name,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$HexPrism$2f$HexPrism$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexPrism"], {
                name: "logo-tile-plate",
                radius: radius,
                depth: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PLATE_DEPTH"],
                color: PALETTE.default.white,
                opacity: opacity,
                position: [
                    0,
                    0,
                    -__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PLATE_DEPTH"]
                ]
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/LogoTile.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            outline !== undefined && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$StrokePath$2f$StrokePath$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StrokePath"], {
                points: hex,
                width: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LINE"].regular,
                color: outline,
                opacity: opacity
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/LogoTile.tsx",
                lineNumber: 102,
                columnNumber: 33
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$FilmIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FilmIcon"], {
                name: logo,
                size: LOGO_FITS[logo].size * radius,
                color: color,
                accentColor: accent,
                opacity: opacity,
                position: [
                    0,
                    LOGO_FITS[logo].lift * radius,
                    0.02
                ]
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/LogoTile.tsx",
                lineNumber: 103,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/LogoTile.tsx",
        lineNumber: 100,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(LogoTile, "4JbN5rb+aQzyBjxai9UJ0gbWTz0=");
_c = LogoTile;
const __TURBOPACK__default__export__ = LogoTile;
var _c;
__turbopack_context__.k.register(_c, "LogoTile");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/MapMarker.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MapMarker",
    ()=>MapMarker,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$HexPrism$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Atom/HexPrism/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$HexPrism$2f$HexPrism$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Atom/HexPrism/HexPrism.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$StrokePath$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Atom/StrokePath/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$StrokePath$2f$StrokePath$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Atom/StrokePath/StrokePath.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$FilmIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/FilmIcon.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const RING = 0.05;
const STEM_WIDTH = 0.03;
const MapMarker = ({ name, fill, iconColor, ringColor, radius, lift, opacity = 1 })=>{
    _s();
    const stem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MapMarker.useMemo[stem]": ()=>[
                [
                    0,
                    0,
                    0.005
                ],
                [
                    0,
                    lift - radius,
                    0.005
                ]
            ]
    }["MapMarker.useMemo[stem]"], [
        lift,
        radius
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        name: `map-marker-${name}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$StrokePath$2f$StrokePath$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StrokePath"], {
                points: stem,
                width: STEM_WIDTH,
                color: fill,
                opacity: opacity
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/MapMarker.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                position: [
                    0,
                    lift,
                    0
                ],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$HexPrism$2f$HexPrism$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexPrism"], {
                        name: "marker-ring",
                        radius: radius + RING,
                        color: ringColor,
                        opacity: opacity,
                        position: [
                            0,
                            0,
                            0.01
                        ]
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/MapMarker.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$HexPrism$2f$HexPrism$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexPrism"], {
                        name: "marker-fill",
                        radius: radius,
                        color: fill,
                        opacity: opacity,
                        position: [
                            0,
                            0,
                            0.015
                        ]
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/MapMarker.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$FilmIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FilmIcon"], {
                        name: name,
                        size: radius * 1.1,
                        color: iconColor,
                        opacity: opacity,
                        position: [
                            0,
                            0,
                            0.02
                        ]
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/MapMarker.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/MapMarker.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/MapMarker.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(MapMarker, "6s1HLaah8jsHYoJEwHSgvF+v3bg=");
_c = MapMarker;
const __TURBOPACK__default__export__ = MapMarker;
var _c;
__turbopack_context__.k.register(_c, "MapMarker");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/PortalMonitor.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PortalMonitor",
    ()=>PortalMonitor,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$AnimatedGroup$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Atom/AnimatedGroup/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$AnimatedGroup$2f$AnimatedGroup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Atom/AnimatedGroup/AnimatedGroup.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Molecule$2f$MonitorFrame$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Molecule/MonitorFrame/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Molecule$2f$MonitorFrame$2f$MonitorFrame$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Molecule/MonitorFrame/MonitorFrame.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Molecule$2f$DocumentCards$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Molecule/DocumentCards/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Molecule$2f$DocumentCards$2f$DocumentCards$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Molecule/DocumentCards/DocumentCards.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$FilmTimeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/FilmTimeContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$film$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/scenes/film.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/scenes/layout.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$FilmIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/FilmIcon.tsx [app-client] (ecmascript)");
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
/** Nachweise der Charge (#1513): Verifizierungsurkunde, Compliance-Nachweis, Chargendokumentation */ const CARD_ICONS = [
    'grade',
    'license',
    'datasheet'
];
/** Außerhalb von b6 liegen keine Karten im Bild */ const NO_CARDS = [
    0,
    0,
    0
];
/** Nachhaltung (#1513): Zeichen über den Nachweisen, eine Umdrehung je Sekunde */ const REFRESH_AT = [
    0,
    1.12,
    0.05
];
const REFRESH_TURN = [
    0,
    0,
    0
];
/** Karten nur im Portal-Beat: bis der Monitor am Ende von b6 ausgeblendet ist */ const CARDS_UNTIL = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$film$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["beatOf"])('b6').to + 0.1;
const PortalMonitor = ()=>{
    _s();
    const { f, now, colorsFor } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$FilmTimeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFilm"])();
    const colors = colorsFor('b6');
    // stabil halten: die Karteninhalte hängen daran (useMemo unten)
    const opacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PortalMonitor.useMemo[opacity]": ()=>f('monitor.opacity')
    }["PortalMonitor.useMemo[opacity]"], [
        f
    ]);
    const cards = f('b6.cards');
    const refresh = f('b6.refresh');
    // Die Kartenspur höchstens einmal je Filmzeit lesen: DocumentCards fragt den
    // Fortschritt je Karte mehrfach ab, das Mischen der Spur legt jedes Mal ein
    // neues Array an (#1496)
    const cardsCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        at: Number.NaN,
        value: NO_CARDS
    });
    const progress = ()=>{
        const cache = cardsCache.current;
        const at = now();
        if (at !== cache.at) {
            cache.at = at;
            // Nach b6 steht die Kartenspur noch auf „gelandet“ — die Karten gehören nur zu b6
            cache.value = at >= CARDS_UNTIL ? NO_CARDS : cards();
        }
        return cache.value;
    };
    const documentCards = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PortalMonitor.useMemo[documentCards]": ()=>CARD_ICONS.map({
                "PortalMonitor.useMemo[documentCards]": (icon, i)=>({
                        from: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PORTAL"].from[i],
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$FilmIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FilmIcon"], {
                            name: icon,
                            size: 0.6,
                            color: colors.line,
                            opacity: opacity
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/PortalMonitor.tsx",
                            lineNumber: 52,
                            columnNumber: 19
                        }, ("TURBOPACK compile-time value", void 0))
                    })
            }["PortalMonitor.useMemo[documentCards]"])
    }["PortalMonitor.useMemo[documentCards]"], [
        colors.line,
        opacity
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$AnimatedGroup$2f$AnimatedGroup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedGroup"], {
        name: "portal-monitor",
        visible: ()=>opacity() > 0,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                position: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CENTER"],
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Molecule$2f$MonitorFrame$2f$MonitorFrame$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MonitorFrame"], {
                    width: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MONITOR"].width,
                    height: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MONITOR"].height,
                    color: colors.line,
                    lineWidth: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LINE"].bold,
                    progress: f('monitor.progress'),
                    opacity: opacity,
                    front: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$AnimatedGroup$2f$AnimatedGroup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedGroup"], {
                                name: "ai-icon",
                                position: [
                                    1.6,
                                    -0.7,
                                    0.05
                                ],
                                scale: f('b6.ai.scale'),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$FilmIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FilmIcon"], {
                                    name: "ai",
                                    size: 0.8,
                                    color: colors.secondary
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/PortalMonitor.tsx",
                                    lineNumber: 69,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/PortalMonitor.tsx",
                                lineNumber: 68,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Atom$2f$AnimatedGroup$2f$AnimatedGroup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedGroup"], {
                                name: "refresh-icon",
                                position: REFRESH_AT,
                                scale: refresh,
                                rotation: ()=>{
                                    REFRESH_TURN[2] = -now() * Math.PI * 2;
                                    return REFRESH_TURN;
                                },
                                visible: ()=>refresh() > 0,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$FilmIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FilmIcon"], {
                                    name: "refresh",
                                    size: 0.55,
                                    color: colors.secondary
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/PortalMonitor.tsx",
                                    lineNumber: 82,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/PortalMonitor.tsx",
                                lineNumber: 72,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/PortalMonitor.tsx",
                        lineNumber: 67,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/PortalMonitor.tsx",
                    lineNumber: 59,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/PortalMonitor.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Molecule$2f$DocumentCards$2f$DocumentCards$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DocumentCards"], {
                cards: documentCards,
                to: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PORTAL"].to,
                stackOffset: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PORTAL"].stack,
                width: 0.95,
                height: 1.2,
                progress: progress,
                lineColor: colors.line,
                fillColor: colors.background,
                lineWidth: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LINE"].thin,
                opacity: opacity
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/PortalMonitor.tsx",
                lineNumber: 88,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/PortalMonitor.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(PortalMonitor, "h71QJarckvOCwBb1S4OspJ9h66Q=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$FilmTimeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFilm"]
    ];
});
_c = PortalMonitor;
const __TURBOPACK__default__export__ = PortalMonitor;
var _c;
__turbopack_context__.k.register(_c, "PortalMonitor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/chargePath.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "B3_PORTRAIT_SCALE",
    ()=>B3_PORTRAIT_SCALE,
    "BOX_AT",
    ()=>BOX_AT,
    "BOX_AT_PORTRAIT",
    ()=>BOX_AT_PORTRAIT,
    "HUB_PORTRAIT",
    ()=>HUB_PORTRAIT,
    "chargeAt",
    ()=>chargeAt,
    "chargePosition",
    ()=>chargePosition,
    "hubAt",
    ()=>hubAt
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/motion/timeline.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$film$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/scenes/film.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/scenes/layout.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$marketLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/marketLayout.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$rankLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/rankLayout.ts [app-client] (ecmascript)");
;
;
;
;
;
const B3_PORTRAIT_SCALE = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LAB_PORTRAIT_SCALE"];
const BOX_AT = [
    -4.4,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CENTER"][1],
    0
];
const BOX_AT_PORTRAIT = [
    0,
    4.3,
    0
];
// Scratch auf Modulebene: je Aufruf überschrieben, nie neu angelegt
const RANKED = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$rankLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RANK_VALUES"].map(_c = ()=>[
        0,
        0,
        0
    ]);
_c1 = RANKED;
const lerp = (a, b, t)=>a + (b - a) * t;
const MARKET_PLACE = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$marketLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MARKET_SLOTS"][__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$marketLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MATCH_SLOT"][__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$rankLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RANK_FROM_B1"]]];
const HUB_PORTRAIT = [
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CENTER"][0],
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CENTER"][1] + 0.4,
    0
];
const hubAt = (portrait)=>portrait ? HUB_PORTRAIT : MARKET_PLACE;
const chargePosition = (t, portrait, out)=>{
    // Marktplatz und Reihe des Ratings stehen im Hochformat in eigenen Räumen (#2111)
    const marketXf = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$rankLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["marketSpace"])(portrait);
    const rankXf = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$rankLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rankSpace"])(portrait);
    const market = MARKET_PLACE;
    const hub = hubAt(portrait);
    const lab = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["labMaterialAt"])(portrait);
    const rank = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$rankLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rankAnchors"])(t.rankT, RANKED, portrait)[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$rankLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RANK_FROM_B1"]];
    const boxAt = portrait ? BOX_AT_PORTRAIT : BOX_AT;
    for(let k = 0; k < 3; k = k + 1){
        let p = lerp(lerp(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CENTER"][k], hub[k], t.shift), (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$rankLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spaceToStage"])(marketXf, market[k], k), t.move);
        if (t.toLab > 0) p = lerp(p, lab[k], t.toLab);
        if (t.toRank > 0) p = lerp(p, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$rankLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spaceToStage"])(rankXf, rank[k], k), t.toRank);
        if (t.toBox > 0) p = lerp(p, boxAt[k], t.toBox);
        out[k] = p;
    }
    return out;
};
const trackOf = (id)=>{
    const found = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$film$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FILM"].tracks.find((t)=>t.id === id);
    if (!found) throw new Error(`Unbekannte Spur im Drehbuch: ${id}`);
    return found;
};
const LEG_TRACKS = {
    shift: trackOf('b1.shift'),
    move: trackOf('b1.move'),
    toLab: trackOf('b1.toLab'),
    toRank: trackOf('b1.toRank'),
    rankT: trackOf('b2.rank.t'),
    toBox: trackOf('b1.toBox')
};
const chargeAt = (time, portrait)=>chargePosition({
        shift: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sample"])(LEG_TRACKS.shift, time),
        move: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sample"])(LEG_TRACKS.move, time),
        toLab: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sample"])(LEG_TRACKS.toLab, time),
        toRank: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sample"])(LEG_TRACKS.toRank, time),
        rankT: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sample"])(LEG_TRACKS.rankT, time),
        toBox: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sample"])(LEG_TRACKS.toBox, time)
    }, portrait, [
        0,
        0,
        0
    ]);
var _c, _c1;
__turbopack_context__.k.register(_c, "RANKED$RANK_VALUES.map");
__turbopack_context__.k.register(_c1, "RANKED");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/marketLayout.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BUYER_AT",
    ()=>BUYER_AT,
    "MARKET_FRAY",
    ()=>MARKET_FRAY,
    "MARKET_HEX_R",
    ()=>MARKET_HEX_R,
    "MARKET_SLOTS",
    ()=>MARKET_SLOTS,
    "MATCH_SLOT",
    ()=>MATCH_SLOT,
    "MIDDLE_ROW_SLOTS",
    ()=>MIDDLE_ROW_SLOTS,
    "OTHER_SLOTS",
    ()=>OTHER_SLOTS,
    "SCAN_FADE",
    ()=>SCAN_FADE,
    "SEARCH_BEAM_HALF",
    ()=>SEARCH_BEAM_HALF,
    "SEARCH_FROM",
    ()=>SEARCH_FROM,
    "SEARCH_TO",
    ()=>SEARCH_TO,
    "beamAt",
    ()=>beamAt,
    "matchFound",
    ()=>matchFound,
    "offerAnchors",
    ()=>offerAnchors,
    "offerScale",
    ()=>offerScale,
    "scanFade",
    ()=>scanFade,
    "searched",
    ()=>searched
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/motion/easing.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/scenes/layout.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$rankLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/rankLayout.ts [app-client] (ecmascript)");
;
;
;
const MARKET_HEX_R = 0.72;
const GAP = 0.14;
const COLS = 5;
const ROWS = [
    -1,
    0,
    1
];
/** Das Raster steht etwas links, rechts ist Platz für den Abnehmer */ const ORIGIN_X = -1.2;
const BUYER_AT = [
    5.4,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CENTER"][1] + 0.2,
    0
];
const SEARCH_FROM = 4.2;
const SEARCH_TO = -5.4;
const W = Math.sqrt(3) * MARKET_HEX_R + GAP;
const H = 1.5 * MARKET_HEX_R + GAP * 0.87;
const MARKET_SLOTS = ROWS.flatMap(_c = (row)=>Array.from({
        length: COLS
    }, (_, col)=>[
            ORIGIN_X + (col - (COLS - 1) / 2) * W + (row !== 0 ? W / 2 : 0),
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CENTER"][1] - row * H,
            0
        ]));
_c1 = MARKET_SLOTS;
const MATCH_SLOT = [
    1,
    3,
    10,
    12,
    6,
    14
];
const MIDDLE_ROW_SLOTS = Array.from({
    length: COLS
}, (_, col)=>COLS + col);
const FRAY = [
    [
        -2,
        0,
        0.5,
        0.3
    ],
    [
        -2,
        1,
        0.8,
        0.55
    ],
    [
        -2,
        2,
        0.6,
        0.4
    ],
    [
        -2,
        3,
        0.85,
        0.6
    ],
    [
        -2,
        4,
        0.45,
        0.25
    ],
    [
        2,
        0,
        0.75,
        0.5
    ],
    [
        2,
        1,
        0.5,
        0.3
    ],
    [
        2,
        2,
        0.85,
        0.6
    ],
    [
        2,
        3,
        0.55,
        0.35
    ],
    [
        2,
        4,
        0.7,
        0.45
    ]
];
const MARKET_FRAY = FRAY.map(_c2 = ([row, col, scale, alpha])=>({
        at: [
            ORIGIN_X + (col - (COLS - 1) / 2) * W,
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CENTER"][1] - row * H,
            0
        ],
        scale,
        alpha
    }));
_c3 = MARKET_FRAY;
const SEARCH_BEAM_HALF = 2 * H + MARKET_HEX_R * 0.9;
const OTHER_SLOTS = MARKET_SLOTS.map((_, i)=>i).filter(_c4 = (i)=>!MATCH_SLOT.includes(i));
_c5 = OTHER_SLOTS;
if (MATCH_SLOT.length !== __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$rankLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RANK_VALUES"].length) throw new Error('MATCH_SLOT braucht einen Platz je Material-Wabe');
const searched = (slot, beamX)=>MARKET_SLOTS[slot][0] + MARKET_HEX_R * 0.5 >= beamX;
const SCAN_FADE = 1.6;
const scanFade = (x, beamX)=>1 - (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp01"])((x + MARKET_HEX_R * 0.5 - beamX) / SCAN_FADE);
const beamAt = (search)=>SEARCH_FROM + (SEARCH_TO - SEARCH_FROM) * search;
const matchFound = (i, search)=>search > 0 ? 1 - scanFade(MARKET_SLOTS[MATCH_SLOT[i]][0], beamAt(search)) : 0;
const offerAnchors = (gather, ranked, out, portrait = false)=>{
    // #2111: im Hochformat haben Marktplatz und Reihe des Ratings eigene Räume
    // (MARKET_SPACE, RANK_SPACE) — der Platz im Raster wird in den Raum der Reihe umgerechnet
    const market = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$rankLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["marketSpace"])(portrait);
    const rank = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$rankLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rankSpace"])(portrait);
    for(let i = 0; i < out.length; i++){
        const slot = MARKET_SLOTS[MATCH_SLOT[i]];
        const to = ranked[i];
        for(let k = 0; k < 3; k = k + 1){
            const from = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$rankLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stageToSpace"])(rank, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$rankLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spaceToStage"])(market, slot[k], k), k);
            out[i][k] = from + (to[k] - from) * gather;
        }
    }
    return out;
};
const offerScale = (gather, rankHexR, portrait = false)=>{
    const start = MARKET_HEX_R / rankHexR * ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$rankLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["marketSpace"])(portrait).scale / (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$rankLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rankSpace"])(portrait).scale);
    return start + (1 - start) * gather;
};
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "MARKET_SLOTS$ROWS.flatMap");
__turbopack_context__.k.register(_c1, "MARKET_SLOTS");
__turbopack_context__.k.register(_c2, "MARKET_FRAY$FRAY.map");
__turbopack_context__.k.register(_c3, "MARKET_FRAY");
__turbopack_context__.k.register(_c4, "OTHER_SLOTS$MARKET_SLOTS.map((_, i) => i).filter");
__turbopack_context__.k.register(_c5, "OTHER_SLOTS");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/materialPiles.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MATERIAL_OF_RANK",
    ()=>MATERIAL_OF_RANK,
    "pileSpec",
    ()=>pileSpec
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/theme.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$darkTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/darkTheme.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$material$2d$vision$2f$flake$2d$presets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/material-vision/flake-presets.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$rankLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/rankLayout.ts [app-client] (ecmascript)");
;
;
;
;
;
const MATERIAL_OF_RANK = [
    'cylindrical_pellets',
    'irregular_flakes',
    'angular_chunks',
    'lumpy_agglomerate',
    'uniform_pellets',
    'flat_chips'
];
const PALETTE = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["themePlastship"].palette;
const DARK_PRIMARY = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$darkTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["themePlastshipDark"].palette.default.primary;
/** Rezyklat-Farben je Form, nur Theme-Farben (#1513): natur, Flaschenflakes, Mahlgut, Agglomerat, Folienchips */ const PILE_COLORS = {
    cylindrical_pellets: [
        PALETTE.default.grey,
        PALETTE.site.border,
        PALETTE.default.greyLight
    ],
    irregular_flakes: [
        PALETTE.default.primary,
        DARK_PRIMARY,
        PALETTE.default.secondary,
        PALETTE.site.tint
    ],
    angular_chunks: [
        PALETTE.text.primary,
        PALETTE.default.greyDark,
        PALETTE.text.secondary
    ],
    lumpy_agglomerate: [
        PALETTE.default.grey,
        PALETTE.site.muted,
        PALETTE.site.border
    ],
    flat_chips: [
        PALETTE.default.primary,
        PALETTE.default.grey,
        PALETTE.default.secondary,
        PALETTE.default.white
    ]
};
/** Partikeldurchmesser relativ zum Wabenradius — Pellets wie in b1 (7–10 %), Flakes und Chips größer */ const PILE_SIZE = {
    irregular_flakes: [
        0.11,
        0.15
    ],
    flat_chips: [
        0.11,
        0.15
    ],
    angular_chunks: [
        0.09,
        0.13
    ],
    lumpy_agglomerate: [
        0.1,
        0.14
    ]
};
const DEFAULT_SIZE = [
    0.07,
    0.1
];
/** Flache Teile liegen locker übereinander — weniger einfüllen, sonst reicht der Haufen bis an die Balken */ const PILE_COUNT_SHARE = {
    irregular_flakes: 0.45,
    flat_chips: 0.45
};
/** Schüttung aus b1: 95 Pellets mit 7–10 % des Radius — die anderen Waben füllen sich gleich hoch */ const B1_COUNT = 95;
const B1_SIZE = (DEFAULT_SIZE[0] + DEFAULT_SIZE[1]) / 2;
/** Innentiefe der Wabe im selben Verhältnis zum Radius wie in b1 (0,45 bei Radius 1,92) */ const DEPTH_SHARE = 0.45 / 1.92;
/**
 * Schüttung einer Form in einer Material-Wabe (#1513): dieselbe Physik wie
 * die Pellets in b1 (PelletPour) — Partikel fallen von oben in die Wabe und
 * bleiben als Haufen liegen. Größe und Anzahl so, dass der Haufen etwa so
 * hoch wird wie in b1.
 */ const specs = new Map();
const pileSpec = (key, seed)=>{
    const id = `${key}|${seed}`;
    let spec = specs.get(id);
    if (!spec) {
        spec = buildSpec(key, seed);
        specs.set(id, spec);
    }
    return spec;
};
const buildSpec = (key, seed)=>{
    const radius = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$rankLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RANK_HEX_R"] * 0.96;
    const [min, max] = PILE_SIZE[key] ?? DEFAULT_SIZE;
    const mean = (min + max) / 2;
    return {
        key,
        radius,
        depth: radius * DEPTH_SHARE,
        count: Math.round(B1_COUNT * (B1_SIZE / mean) ** 2 * (PILE_COUNT_SHARE[key] ?? 1)),
        colors: PILE_COLORS[key] ?? [
            PALETTE.default.greyDark
        ],
        sizeRange: [
            radius * min,
            radius * max
        ],
        geometryType: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$material$2d$vision$2f$flake$2d$presets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FLAKE_PRESETS"][key].geometry3d,
        seed
    };
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/partnerLayout.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CONTACT_R",
    ()=>CONTACT_R,
    "PARTNER_CELL_R",
    ()=>PARTNER_CELL_R,
    "PARTNER_COUNT",
    ()=>PARTNER_COUNT,
    "PARTNER_R",
    ()=>PARTNER_R,
    "contactAt",
    ()=>contactAt,
    "contactLabelFrame",
    ()=>contactLabelFrame,
    "partnerAt",
    ()=>partnerAt,
    "partnerCell",
    ()=>partnerCell,
    "partnerLabelFrame",
    ()=>partnerLabelFrame
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$hexRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/scene3d/hexRoute.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/scenes/layout.ts [app-client] (ecmascript)");
;
;
const PARTNER_COUNT = 4;
const CONTACT_R = 1.05;
const PARTNER_R = 0.8;
const PARTNER_CELL_R = 1.6 / 6;
const contactAt = (portrait)=>portrait ? [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CENTER"][0],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CENTER"][1] + 2,
        0
    ] : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CENTER"];
/** Zelle [Spalte, Reihe] je Gruppe: oben links, oben rechts, unten links, unten rechts */ const CELLS = {
    // ungerade Reihen sind um eine halbe Wabe versetzt: −9 und 8 liegen gleich weit links und rechts
    landscape: [
        [
            -9,
            -3
        ],
        [
            8,
            -3
        ],
        [
            -9,
            3
        ],
        [
            8,
            3
        ]
    ],
    // oben weit außen, unten eng: die Routen zu den unteren Gruppen laufen zwischen den oberen hindurch
    portrait: [
        [
            -6,
            6
        ],
        [
            6,
            6
        ],
        [
            -2,
            12
        ],
        [
            2,
            12
        ]
    ]
};
const partnerCell = (i, portrait)=>CELLS[portrait ? 'portrait' : 'landscape'][i];
const partnerAt = (i, portrait)=>{
    const origin = contactAt(portrait);
    const [x, y] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$hexRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["latticeXY"])(...partnerCell(i, portrait), PARTNER_CELL_R);
    return [
        origin[0] + x,
        origin[1] + y,
        0
    ];
};
const partnerLabelFrame = (i, layout)=>{
    const portrait = layout === 'portrait';
    const [x, y] = partnerAt(i, portrait);
    if (portrait) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["labelFrame"])(x, y - PARTNER_R - 0.12, layout, 'below', 1.8);
    const right = x >= contactAt(false)[0];
    const reach = PARTNER_R * (Math.sqrt(3) / 2) + 0.22;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["labelFrame"])(x + (right ? reach : -reach), y, layout, right ? 'right' : 'left');
};
const contactLabelFrame = (layout)=>{
    const portrait = layout === 'portrait';
    const [x, y] = contactAt(portrait);
    return portrait ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["labelFrame"])(x, y + CONTACT_R + 0.15, layout, 'above', 5) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["labelFrame"])(x, y - CONTACT_R - 0.5, layout, 'below', 5);
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/pelletPour.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PELLET_BAKE",
    ()=>PELLET_BAKE,
    "PELLET_COLORS",
    ()=>PELLET_COLORS,
    "PELLET_POUR",
    ()=>PELLET_POUR,
    "PELLET_REST",
    ()=>PELLET_REST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/theme.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/scenes/layout.ts [app-client] (ecmascript)");
;
;
const PALETTE = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["themePlastship"].palette;
const PELLET_COLORS = [
    PALETTE.default.greyDark,
    PALETTE.text.primary,
    PALETTE.default.primary,
    PALETTE.site.greenDark
];
const PELLET_POUR = {
    radius: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HEX_RADIUS"] * 0.96,
    depth: 0.45,
    count: 95,
    colors: PELLET_COLORS,
    sizeRange: [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HEX_RADIUS"] * 0.96 * 0.07,
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HEX_RADIUS"] * 0.96 * 0.1
    ],
    geometryType: 'sphere',
    seed: 2025
};
const PELLET_BAKE = {
    fillSeconds: 3.8,
    seconds: 4.4
};
const PELLET_REST = 4.4;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/pours.generated.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* Generiert von bakedPours.sync.test.ts (WRITE_BAKED_POURS=1) — nicht von Hand ändern (#1541) */ __turbopack_context__.s([
    "BAKED_POUR_FILES",
    ()=>BAKED_POUR_FILES
]);
const BAKED_POUR_FILES = {
    'pour-2025-e762f0e7': ()=>__turbopack_context__.A("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/pours/pour-2025-e762f0e7.ts [app-client] (ecmascript, async loader)"),
    'pour-4100-dc69b5b2': ()=>__turbopack_context__.A("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/pours/pour-4100-dc69b5b2.ts [app-client] (ecmascript, async loader)"),
    'pour-4101-a6a6d794': ()=>__turbopack_context__.A("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/pours/pour-4101-a6a6d794.ts [app-client] (ecmascript, async loader)"),
    'pour-4102-00c3b60a': ()=>__turbopack_context__.A("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/pours/pour-4102-00c3b60a.ts [app-client] (ecmascript, async loader)"),
    'pour-4103-2ccbafc9': ()=>__turbopack_context__.A("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/pours/pour-4103-2ccbafc9.ts [app-client] (ecmascript, async loader)"),
    'pour-4105-1d917740': ()=>__turbopack_context__.A("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/pours/pour-4105-1d917740.ts [app-client] (ecmascript, async loader)")
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/rankLayout.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CERT",
    ()=>CERT,
    "CERT_AT",
    ()=>CERT_AT,
    "CERT_TITLE_TOP",
    ()=>CERT_TITLE_TOP,
    "MARKET_SPACE",
    ()=>MARKET_SPACE,
    "RANK_AFTER",
    ()=>RANK_AFTER,
    "RANK_BEFORE",
    ()=>RANK_BEFORE,
    "RANK_CLASSES",
    ()=>RANK_CLASSES,
    "RANK_CLASS_COUNT",
    ()=>RANK_CLASS_COUNT,
    "RANK_DIMENSIONS",
    ()=>RANK_DIMENSIONS,
    "RANK_END",
    ()=>RANK_END,
    "RANK_FROM_B1",
    ()=>RANK_FROM_B1,
    "RANK_HEX_R",
    ()=>RANK_HEX_R,
    "RANK_ROW",
    ()=>RANK_ROW,
    "RANK_ROW_PORTRAIT",
    ()=>RANK_ROW_PORTRAIT,
    "RANK_SLOTS",
    ()=>RANK_SLOTS,
    "RANK_SLOTS_PORTRAIT",
    ()=>RANK_SLOTS_PORTRAIT,
    "RANK_SPACE",
    ()=>RANK_SPACE,
    "RANK_START",
    ()=>RANK_START,
    "RANK_TOP",
    ()=>RANK_TOP,
    "RANK_VALUES",
    ()=>RANK_VALUES,
    "certScale",
    ()=>certScale,
    "certTitleFrame",
    ()=>certTitleFrame,
    "classBar",
    ()=>classBar,
    "classLabelFrame",
    ()=>classLabelFrame,
    "classOfMaterial",
    ()=>classOfMaterial,
    "classOfSlot",
    ()=>classOfSlot,
    "marketSpace",
    ()=>marketSpace,
    "rankAnchors",
    ()=>rankAnchors,
    "rankScale",
    ()=>rankScale,
    "rankSpace",
    ()=>rankSpace,
    "spaceToStage",
    ()=>spaceToStage,
    "stageToSpace",
    ()=>stageToSpace
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$sealTiers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/sealTiers.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/scenes/layout.ts [app-client] (ecmascript)");
;
;
const RANK_START = [
    [
        0.75,
        0.7,
        0.8,
        0.75
    ],
    [
        0.55,
        0.5,
        0.6,
        0.55
    ],
    [
        0.4,
        0.45,
        0.35,
        0.4
    ],
    [
        0.65,
        0.6,
        0.62,
        0.62
    ],
    // die Charge aus b1 beginnt ganz links: sie kommt von links aus dem Labor und kreuzt so keine andere Wabe
    [
        0.3,
        0.25,
        0.35,
        0.3
    ],
    [
        0.5,
        0.45,
        0.48,
        0.48
    ]
];
const RANK_END = [
    [
        0.6,
        0.55,
        0.65,
        0.6
    ],
    [
        0.7,
        0.75,
        0.68,
        0.71
    ],
    [
        0.35,
        0.3,
        0.4,
        0.35
    ],
    [
        0.5,
        0.45,
        0.55,
        0.5
    ],
    [
        0.95,
        0.9,
        0.92,
        0.94
    ],
    [
        0.42,
        0.38,
        0.45,
        0.42
    ]
];
const RANK_FROM_B1 = 4;
const RANK_DIMENSIONS = RANK_START[0].length;
const RANK_VALUES = RANK_START;
const mean = (v)=>v.reduce((a, b)=>a + b, 0) / v.length;
/** Platz je Material, aufsteigend nach Mittelwert: 0 = links unten (schwächstes) */ const ascendingSlots = (values)=>{
    const order = values.map((v, i)=>({
            i,
            m: mean(v)
        })).sort((a, b)=>a.m - b.m);
    const slots = new Array(values.length);
    order.forEach(({ i }, slot)=>slots[i] = slot);
    return slots;
};
const RANK_BEFORE = ascendingSlots(RANK_START);
_c = RANK_BEFORE;
const RANK_AFTER = ascendingSlots(RANK_END);
_c1 = RANK_AFTER;
const RANK_TOP = RANK_START.length - 1;
/** Treppenstufe je Platz */ const STEP = 0.25;
const RANK_SLOTS = RANK_START.map(_c2 = (_, i)=>[
        (i - (RANK_START.length - 1) / 2) * 2.3,
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CENTER"][1] + (i - (RANK_START.length - 1) / 2) * STEP,
        0
    ]);
_c3 = RANK_SLOTS;
const RANK_ROW = RANK_SLOTS.map(_c4 = ([x, , z])=>[
        x,
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CENTER"][1],
        z
    ]);
_c5 = RANK_ROW;
/*
 * Hochformat (#2027, Kind-Task #2111): sechs Waben in einer Reihe waren auf
 * dem Handy zu klein, die Balken nicht lesbar. Hochkant stehen sie in zwei
 * Reihen à drei — jede Spalte ist eine Klasse (zwei Stufen übereinander:
 * unten die schwächere), die Spalten steigen von links nach rechts wie die
 * Treppe. Koordinaten im Raum der Reihe (vor RANK_SPACE.portrait).
 */ /** Abstand der Spalten und der zwei Reihen im Hochformat */ const PORTRAIT_COL = 2.3;
const PORTRAIT_ROW = 2.2;
/** Stufe je Spalte (Klasse) im Hochformat */ const PORTRAIT_STEP = 0.3;
const portraitSlot = (slot, step)=>{
    const col = Math.floor(slot / 2);
    const row = slot % 2;
    return [
        (col - 1) * PORTRAIT_COL,
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CENTER"][1] + (row - 0.5) * PORTRAIT_ROW + (col - 1) * step,
        0
    ];
};
const RANK_SLOTS_PORTRAIT = RANK_START.map(_c6 = (_, i)=>portraitSlot(i, PORTRAIT_STEP));
_c7 = RANK_SLOTS_PORTRAIT;
const RANK_ROW_PORTRAIT = RANK_START.map(_c8 = (_, i)=>portraitSlot(i, 0));
_c9 = RANK_ROW_PORTRAIT;
const STAGE_SPACE = {
    scale: 1,
    offset: [
        0,
        0,
        0
    ]
};
const RANK_SPACE = {
    landscape: STAGE_SPACE,
    portrait: {
        scale: 1.15,
        offset: [
            0,
            -0.34,
            0
        ]
    }
};
const MARKET_SPACE = {
    landscape: STAGE_SPACE,
    portrait: {
        scale: 0.83,
        offset: [
            -0.73,
            -0.15,
            0
        ]
    }
};
const rankSpace = (portrait)=>RANK_SPACE[portrait ? 'portrait' : 'landscape'];
const marketSpace = (portrait)=>MARKET_SPACE[portrait ? 'portrait' : 'landscape'];
const spaceToStage = (space, value, axis)=>space.offset[axis] + space.scale * value;
const stageToSpace = (space, value, axis)=>(value - space.offset[axis]) / space.scale;
const RANK_HEX_R = 1.0;
const CERT = {
    width: 3.0,
    height: 4.2
};
const certScale = (portrait)=>portrait ? CERT_PORTRAIT_STAGE_SCALE / RANK_SPACE.portrait.scale : 1.4;
const CERT_AT = [
    0,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CENTER"][1] + 0.1,
    0.2
];
const CERT_TITLE_TOP = 1.18;
/**
 * Hochformat: Maßstab des Blatts auf der Bühne (wie vor #2111: 2 × 0,66) — die
 * Reihe ist hochkant größer geworden, das Blatt bleibt so groß wie bisher
 */ const CERT_PORTRAIT_STAGE_SCALE = 1.32;
const RANK_CLASSES = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$sealTiers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEAL_TIERS"];
const RANK_CLASS_COUNT = RANK_CLASSES.length;
/** Stufen je Klasse */ const CLASS_SPAN = RANK_START.length / RANK_CLASS_COUNT;
const classOfSlot = (slot)=>Math.min(RANK_CLASS_COUNT - 1, Math.floor(slot / CLASS_SPAN));
const classOfMaterial = (i)=>classOfSlot(RANK_AFTER[i]);
/** Abstand des Balkens unter den Waben und halbe Länge über die Wabenmitten hinaus */ const CLASS_BAR_DROP = RANK_HEX_R + 0.28;
const CLASS_BAR_REACH = 0.72;
/** Halbe Länge des Balkens unter einer Spalte im Hochformat */ const CLASS_BAR_HALF_PORTRAIT = 0.85;
const classBar = (tier, portrait = false)=>{
    if (portrait) {
        const [x, y] = RANK_SLOTS_PORTRAIT[tier * CLASS_SPAN];
        const bar = y - CLASS_BAR_DROP;
        return [
            [
                x - CLASS_BAR_HALF_PORTRAIT,
                bar,
                0
            ],
            [
                x + CLASS_BAR_HALF_PORTRAIT,
                bar,
                0
            ]
        ];
    }
    const first = RANK_SLOTS[tier * CLASS_SPAN];
    const last = RANK_SLOTS[(tier + 1) * CLASS_SPAN - 1];
    const slope = (last[1] - first[1]) / (last[0] - first[0]);
    return [
        [
            first[0] - CLASS_BAR_REACH,
            first[1] - CLASS_BAR_REACH * slope - CLASS_BAR_DROP,
            0
        ],
        [
            last[0] + CLASS_BAR_REACH,
            last[1] + CLASS_BAR_REACH * slope - CLASS_BAR_DROP,
            0
        ]
    ];
};
const certTitleFrame = (layout)=>{
    const portrait = layout === 'portrait';
    const space = rankSpace(portrait);
    const sheet = certScale(portrait);
    // so breit wie das Blatt: die Überschrift steht in einer Zeile mittig darauf
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["labelFrame"])(spaceToStage(space, CERT_AT[0], 0), spaceToStage(space, CERT_AT[1] + CERT_TITLE_TOP * sheet, 1), layout, 'below', CERT.width * sheet * space.scale);
};
const classLabelFrame = (tier, layout)=>{
    const portrait = layout === 'portrait';
    const space = rankSpace(portrait);
    const [a, b] = classBar(tier, portrait);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["labelFrame"])(spaceToStage(space, (a[0] + b[0]) / 2, 0), spaceToStage(space, (a[1] + b[1]) / 2 - 0.22, 1), layout, 'below', (portrait ? PORTRAIT_COL : 4.2) * space.scale);
};
/** Bogenhöhe je gewandertem Platz (Aufsteiger oben, Absteiger unten) */ const ARC = 0.42;
/** Tiefe je gewandertem Platz: Aufsteiger kommen nach vorn, Absteiger gehen zurück */ const DEPTH = 1.0;
/** Wandernde Waben schrumpfen unterwegs um diesen Anteil — auf dem Bildschirm überdecken sie sich so kaum */ const SHRINK = 0.3;
/**
 * Weiter als so viele Plätze schwingt keine Wabe aus: die Charge steigt vom
 * ersten auf den letzten Platz und flöge sonst über die Legende und aus dem Bild
 */ const MAX_LANE = 3;
/** Bahn einer Wabe: gewanderte Plätze mit Vorzeichen, gedeckelt */ const lane = (moved)=>Math.sign(moved) * Math.min(Math.abs(moved), MAX_LANE);
/**
 * Hochformat (#2111): im Raster 2 × 3 kreuzen sich die Wege anders als in der
 * Reihe — die Bahn je Material ist fest gewählt (Aufsteiger vorn, Absteiger
 * hinten), so dass sich unterwegs keine zwei Waben überlappen (Wächtertest).
 */ const RANK_LANES_PORTRAIT = [
    -1,
    3,
    -1,
    -1,
    1,
    -3
];
/** Anteil von t, in dem die Waben zuerst nur ausweichen (bzw. am Ende nur einsinken) */ const LEAD = 0.2;
const smoothstep = (x)=>{
    const c = x <= 0 ? 0 : x >= 1 ? 1 : x;
    return c * c * (3 - 2 * c);
};
const rankAnchors = (t, out, portrait = false)=>{
    const u = smoothstep((t - LEAD) / (1 - 2 * LEAD));
    // an den Enden exakt auf den Plätzen (sin(π) ist in Gleitkomma nicht 0)
    const swing = t <= 0 || t >= 1 ? 0 : Math.sin(Math.PI * t);
    const row = portrait ? RANK_ROW_PORTRAIT : RANK_ROW;
    const slots = portrait ? RANK_SLOTS_PORTRAIT : RANK_SLOTS;
    for(let i = 0; i < out.length; i += 1){
        const from = row[RANK_BEFORE[i]];
        const to = slots[RANK_AFTER[i]];
        const moved = portrait ? RANK_LANES_PORTRAIT[i] : lane(RANK_AFTER[i] - RANK_BEFORE[i]);
        const p = out[i];
        // an den Enden exakt auf den Plätzen
        const base = u <= 0 ? from : u >= 1 ? to : null;
        p[0] = base ? base[0] : from[0] + (to[0] - from[0]) * u;
        p[1] = (base ? base[1] : from[1] + (to[1] - from[1]) * u) + ARC * moved * swing;
        p[2] = (base ? base[2] : from[2] + (to[2] - from[2]) * u) + DEPTH * moved * swing;
    }
    return out;
};
const rankScale = (t, i)=>{
    if (t <= 0 || t >= 1 || RANK_AFTER[i] === RANK_BEFORE[i]) return 1;
    return 1 - SHRINK * Math.sin(Math.PI * t);
};
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_context__.k.register(_c, "RANK_BEFORE");
__turbopack_context__.k.register(_c1, "RANK_AFTER");
__turbopack_context__.k.register(_c2, "RANK_SLOTS$RANK_START.map");
__turbopack_context__.k.register(_c3, "RANK_SLOTS");
__turbopack_context__.k.register(_c4, "RANK_ROW$RANK_SLOTS.map");
__turbopack_context__.k.register(_c5, "RANK_ROW");
__turbopack_context__.k.register(_c6, "RANK_SLOTS_PORTRAIT$RANK_START.map");
__turbopack_context__.k.register(_c7, "RANK_SLOTS_PORTRAIT");
__turbopack_context__.k.register(_c8, "RANK_ROW_PORTRAIT$RANK_START.map");
__turbopack_context__.k.register(_c9, "RANK_ROW_PORTRAIT");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/routeLayout.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "B4_CELL",
    ()=>B4_CELL,
    "B4_ROUTE",
    ()=>B4_ROUTE,
    "B4_ROUTES",
    ()=>B4_ROUTES,
    "B4_ROUTE_2",
    ()=>B4_ROUTE_2,
    "MAP_AT",
    ()=>MAP_AT,
    "MAP_AT_PORTRAIT",
    ()=>MAP_AT_PORTRAIT,
    "MARKER_LIFT",
    ()=>MARKER_LIFT,
    "MARKER_PORTRAIT_SCALE",
    ()=>MARKER_PORTRAIT_SCALE,
    "MARKER_R",
    ()=>MARKER_R,
    "destinationAt",
    ()=>destinationAt,
    "markerSize",
    ()=>markerSize
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$hexMosaic$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/scene3d/hexMosaic.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/scenes/layout.ts [app-client] (ecmascript)");
;
;
const B4_ROUTE = [
    [
        6,
        11
    ],
    [
        15,
        9
    ]
];
const B4_ROUTE_2 = [
    [
        17,
        14
    ],
    [
        8,
        5
    ]
];
const B4_ROUTES = [
    {
        route: B4_ROUTE,
        start: 'truck',
        finish: 'factory'
    },
    {
        route: B4_ROUTE_2,
        start: 'factory',
        finish: 'truck'
    }
];
const B4_CELL = 0.2;
const MARKER_R = 0.3;
const MARKER_LIFT = 0.62;
const MARKER_PORTRAIT_SCALE = 1.3;
const markerSize = (portrait)=>{
    const s = portrait ? MARKER_PORTRAIT_SCALE : 1;
    return {
        radius: MARKER_R * s,
        lift: MARKER_LIFT * s
    };
};
const MAP_AT = [
    2.4,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CENTER"][1],
    0
];
const MAP_AT_PORTRAIT = [
    0,
    -0.2,
    0
];
const FINISH = B4_ROUTE[B4_ROUTE.length - 1];
const FINISH_CELL = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$hexMosaic$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cellCenter"])(_c = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$hexMosaic$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mosaicCells"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$hexMosaic$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EUROPE_MASK"], B4_CELL), FINISH[0], FINISH[1]);
_c1 = FINISH_CELL;
const destinationAt = (portrait)=>{
    const map = portrait ? MAP_AT_PORTRAIT : MAP_AT;
    return [
        map[0] + FINISH_CELL[0],
        map[1] + FINISH_CELL[1] + markerSize(portrait).lift,
        0
    ];
};
var _c, _c1;
__turbopack_context__.k.register(_c, "FINISH_CELL$cellCenter");
__turbopack_context__.k.register(_c1, "FINISH_CELL");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/streamLayout.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "STREAM_CELL_R",
    ()=>STREAM_CELL_R,
    "STREAM_COUNT",
    ()=>STREAM_COUNT,
    "STREAM_HUB",
    ()=>STREAM_HUB,
    "STREAM_PORTRAIT_SCALE",
    ()=>STREAM_PORTRAIT_SCALE,
    "STREAM_R",
    ()=>STREAM_R,
    "streamAt",
    ()=>streamAt,
    "streamCell",
    ()=>streamCell,
    "streamLabelFrame",
    ()=>streamLabelFrame,
    "streamLeg",
    ()=>streamLeg,
    "streamScale",
    ()=>streamScale
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$hexRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/scene3d/hexRoute.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/scenes/layout.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$chargePath$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/chargePath.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$wayLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/wayLayout.ts [app-client] (ecmascript)");
;
;
;
;
const STREAM_COUNT = 3;
const STREAM_R = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$wayLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WAY_R"];
const STREAM_CELL_R = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$wayLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WAY_CELL_R"];
const STREAM_HUB = [
    0,
    0
];
const CELLS = {
    landscape: [
        [
            15,
            -4
        ],
        [
            11,
            0
        ],
        [
            7,
            4
        ]
    ],
    // über der Wabe: der Strom kommt von oben, wie die Pellets
    portrait: [
        [
            -6,
            -8
        ],
        [
            0,
            -8
        ],
        [
            6,
            -8
        ]
    ]
};
const STREAM_PORTRAIT_SCALE = 1.35;
const streamScale = (portrait)=>portrait ? STREAM_PORTRAIT_SCALE : 1;
const streamCell = (i, portrait)=>CELLS[portrait ? 'portrait' : 'landscape'][i];
const streamAt = (i, portrait)=>{
    const hub = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$chargePath$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hubAt"])(portrait);
    const [x, y] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$hexRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["latticeXY"])(...streamCell(i, portrait), STREAM_CELL_R);
    return [
        hub[0] + x,
        hub[1] + y,
        0
    ];
};
const streamLeg = (k, portrait)=>({
        from: streamCell(k, portrait),
        to: k + 1 < STREAM_COUNT ? streamCell(k + 1, portrait) : STREAM_HUB
    });
const streamLabelFrame = (i, layout)=>{
    const portrait = layout === 'portrait';
    const [x, y] = streamAt(i, portrait);
    return portrait ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["labelFrame"])(x, y + STREAM_R * STREAM_PORTRAIT_SCALE + 0.12, layout, 'above', 2.6) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["labelFrame"])(x + STREAM_R * (Math.sqrt(3) / 2) + 0.22, y, layout, 'right');
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/wayLayout.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WAY_CELL_R",
    ()=>WAY_CELL_R,
    "WAY_COUNT",
    ()=>WAY_COUNT,
    "WAY_LABEL_WIDTH_PORTRAIT",
    ()=>WAY_LABEL_WIDTH_PORTRAIT,
    "WAY_R",
    ()=>WAY_R,
    "wayAt",
    ()=>wayAt,
    "wayCell",
    ()=>wayCell,
    "wayLabelFrame",
    ()=>wayLabelFrame
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$hexRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/scene3d/hexRoute.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/scenes/layout.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$chargePath$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/chargePath.ts [app-client] (ecmascript)");
;
;
;
const WAY_R = 0.6;
const WAY_COUNT = 4;
const WAY_CELL_R = 1.6 / 6;
const WAY_SPREAD = [
    -6,
    -2,
    2,
    6
];
/**
 * Hochformat (#2107): die vier Wege im Bogen unter der großen Wabe — außen
 * höher, innen tiefer. In einer Reihe blieb für „Werksentsorgung" kein Platz,
 * der Name wurde getrennt bzw. stieß an den Nachbarn; im Bogen stehen die
 * Namen benachbarter Wege auf verschiedenen Höhen. Ungerade Reihen: dort
 * liegen die Spalten um eine halbe Wabe versetzt, der Bogen ist symmetrisch.
 */ const WAY_CELLS_PORTRAIT = [
    [
        -7,
        3
    ],
    [
        -4,
        7
    ],
    [
        3,
        7
    ],
    [
        6,
        3
    ]
];
const wayCell = (i, portrait)=>portrait ? WAY_CELLS_PORTRAIT[i] : [
        15,
        WAY_SPREAD[i]
    ];
const WAY_LABEL_WIDTH_PORTRAIT = 2.6;
const wayAt = (i, portrait)=>{
    const hub = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$chargePath$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hubAt"])(portrait);
    const [x, y] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$hexRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["latticeXY"])(...wayCell(i, portrait), WAY_CELL_R);
    return [
        hub[0] + x,
        hub[1] + y,
        0
    ];
};
const wayLabelFrame = (i, layout)=>{
    const portrait = layout === 'portrait';
    const [x, y] = wayAt(i, portrait);
    return portrait ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["labelFrame"])(x, y - WAY_R - 0.12, layout, 'below', WAY_LABEL_WIDTH_PORTRAIT) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["labelFrame"])(x + WAY_R * (Math.sqrt(3) / 2) + 0.22, y, layout, 'right');
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Scene3D/animatable.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LIVE_SCALE_KEY",
    ()=>LIVE_SCALE_KEY,
    "SHADOW_OPACITY",
    ()=>SHADOW_OPACITY,
    "isDynamic",
    ()=>isDynamic,
    "liveWorldScale",
    ()=>liveWorldScale,
    "reapplyAnimated",
    ()=>reapplyAnimated,
    "resolveValue",
    ()=>resolveValue,
    "setColorCss",
    ()=>setColorCss,
    "setOpacity",
    ()=>setOpacity,
    "useAnimatedApply",
    ()=>useAnimatedApply
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$b389eeca$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-b389eeca.esm.js [app-client] (ecmascript) <export D as useFrame>");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const resolveValue = (value)=>typeof value === 'function' ? value() : value;
const isDynamic = (...values)=>values.some((v)=>typeof v === 'function');
/** Schlüssel im userData, unter dem ein Baustein sein `apply` für das Nachziehen ablegt */ const APPLY_KEY = '__applyAnimated';
/** `apply` am three-Objekt ablegen, damit die Eltern-Gruppe es beim Einblenden nachziehen kann */ const registerApply = (object, apply)=>{
    object.userData[APPLY_KEY] = apply;
};
/** true, wenn eine Gruppe oberhalb unsichtbar ist — das Objekt selbst zählt nicht */ const hiddenAbove = (object)=>{
    for(let p = object.parent; p; p = p.parent)if (!p.visible) return true;
    return false;
};
const useAnimatedApply = (apply, dynamic, objectRef)=>{
    _s();
    const applyRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(apply);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "useAnimatedApply.useLayoutEffect": ()=>{
            applyRef.current = apply;
            apply();
            const object = objectRef?.current;
            if (object) registerApply(object, {
                "useAnimatedApply.useLayoutEffect": ()=>applyRef.current()
            }["useAnimatedApply.useLayoutEffect"]);
        }
    }["useAnimatedApply.useLayoutEffect"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$b389eeca$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "useAnimatedApply.useFrame": ()=>{
            if (!dynamic) return;
            const object = objectRef?.current;
            if (object && hiddenAbove(object)) return;
            applyRef.current();
        }
    }["useAnimatedApply.useFrame"]);
};
_s(useAnimatedApply, "8NJceW964cIN9OwIuGSh3+CIytc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$b389eeca$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
const LIVE_SCALE_KEY = '__liveScaleX';
const liveWorldScale = (object)=>{
    let scale = 1;
    for(let o = object; o; o = o.parent){
        const live = o.userData[LIVE_SCALE_KEY];
        scale *= Math.abs(live ? live() : o.scale.x);
    }
    return scale;
};
const reapplyAnimated = (root)=>{
    root.traverse((o)=>{
        if (o !== root) o.userData[APPLY_KEY]?.();
    });
};
const cssOf = new WeakMap();
const setColorCss = (target, css)=>{
    if (cssOf.get(target) === css) return;
    target.set(css);
    cssOf.set(target, css);
};
const setOpacity = (mat, opacity)=>{
    mat.opacity = opacity;
    const transparent = opacity < 1;
    if (mat.transparent !== transparent) {
        mat.transparent = transparent;
        mat.needsUpdate = true;
    }
};
const SHADOW_OPACITY = 0.5;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Scene3D/litMaterial.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LIT_GLOW",
    ()=>LIT_GLOW,
    "LIT_SURFACE",
    ()=>LIT_SURFACE,
    "createLitMaterial",
    ()=>createLitMaterial
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
;
const LIT_GLOW = 0.27;
const LIT_SURFACE = {
    roughness: 0.62,
    metalness: 0,
    clearcoat: 0.12,
    clearcoatRoughness: 0.45,
    specularIntensity: 0.35
};
const GLOW_CHUNK = '#include <emissivemap_fragment>\n\ttotalEmissiveRadiance += diffuseColor.rgb * litGlow;';
const createLitMaterial = (options = {})=>{
    const material = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshPhysicalMaterial"]({
        ...LIT_SURFACE,
        side: options.side ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FrontSide"]
    });
    const glow = {
        value: options.glow ?? LIT_GLOW
    };
    material.onBeforeCompile = (shader)=>{
        shader.uniforms.litGlow = glow;
        shader.fragmentShader = shader.fragmentShader.replace('#include <common>', '#include <common>\nuniform float litGlow;').replace('#include <emissivemap_fragment>', GLOW_CHUNK);
    };
    material.customProgramCacheKey = ()=>'lit-glow';
    material.userData.litGlow = glow;
    return material;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Scene3D/physics.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CuboidColliderDynamic",
    ()=>CuboidColliderDynamic,
    "CylinderColliderDynamic",
    ()=>CylinderColliderDynamic,
    "InstancedRigidBodiesDynamic",
    ()=>InstancedRigidBodiesDynamic,
    "PhysicsDynamic",
    ()=>PhysicsDynamic,
    "PhysicsProvider",
    ()=>PhysicsProvider,
    "RigidBodyDynamic",
    ()=>RigidBodyDynamic,
    "usePhysicsEnabled",
    ()=>usePhysicsEnabled,
    "useResolvedPhysics",
    ()=>useResolvedPhysics
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
;
;
;
;
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
const PhysicsDynamic = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_c = ()=>__turbopack_context__.A("[project]/node_modules/@react-three/rapier/dist/react-three-rapier.esm.js [app-client] (ecmascript, next/dynamic entry, async loader)").then((mod)=>mod.Physics), {
    loadableGenerated: {
        modules: [
            "[project]/node_modules/@react-three/rapier/dist/react-three-rapier.esm.js [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c1 = PhysicsDynamic;
const RigidBodyDynamic = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_c2 = ()=>__turbopack_context__.A("[project]/node_modules/@react-three/rapier/dist/react-three-rapier.esm.js [app-client] (ecmascript, next/dynamic entry, async loader)").then((mod)=>mod.RigidBody), {
    loadableGenerated: {
        modules: [
            "[project]/node_modules/@react-three/rapier/dist/react-three-rapier.esm.js [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c3 = RigidBodyDynamic;
const CylinderColliderDynamic = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_c4 = ()=>__turbopack_context__.A("[project]/node_modules/@react-three/rapier/dist/react-three-rapier.esm.js [app-client] (ecmascript, next/dynamic entry, async loader)").then((mod)=>mod.CylinderCollider), {
    loadableGenerated: {
        modules: [
            "[project]/node_modules/@react-three/rapier/dist/react-three-rapier.esm.js [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c5 = CylinderColliderDynamic;
const CuboidColliderDynamic = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_c6 = ()=>__turbopack_context__.A("[project]/node_modules/@react-three/rapier/dist/react-three-rapier.esm.js [app-client] (ecmascript, next/dynamic entry, async loader)").then((mod)=>mod.CuboidCollider), {
    loadableGenerated: {
        modules: [
            "[project]/node_modules/@react-three/rapier/dist/react-three-rapier.esm.js [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c7 = CuboidColliderDynamic;
const InstancedRigidBodiesDynamic = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lazy"])(_c8 = ()=>__turbopack_context__.A("[project]/node_modules/@react-three/rapier/dist/react-three-rapier.esm.js [app-client] (ecmascript, async loader)").then((mod)=>({
            default: mod.InstancedRigidBodies
        })));
_c9 = InstancedRigidBodiesDynamic;
const PhysicsEnabledContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(false);
const PhysicsProvider = ({ enabled, children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PhysicsEnabledContext.Provider, {
        value: enabled,
        children: children
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Scene3D/physics.tsx",
        lineNumber: 43,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c10 = PhysicsProvider;
const usePhysicsEnabled = ()=>{
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(PhysicsEnabledContext);
};
_s(usePhysicsEnabled, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
const useResolvedPhysics = (physics)=>{
    _s1();
    const fromContext = usePhysicsEnabled();
    return physics ?? fromContext;
};
_s1(useResolvedPhysics, "JtxDvLaa0CeQKwS9xi4qyYk8Odo=", false, function() {
    return [
        usePhysicsEnabled
    ];
});
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10;
__turbopack_context__.k.register(_c, "PhysicsDynamic$dynamic");
__turbopack_context__.k.register(_c1, "PhysicsDynamic");
__turbopack_context__.k.register(_c2, "RigidBodyDynamic$dynamic");
__turbopack_context__.k.register(_c3, "RigidBodyDynamic");
__turbopack_context__.k.register(_c4, "CylinderColliderDynamic$dynamic");
__turbopack_context__.k.register(_c5, "CylinderColliderDynamic");
__turbopack_context__.k.register(_c6, "CuboidColliderDynamic$dynamic");
__turbopack_context__.k.register(_c7, "CuboidColliderDynamic");
__turbopack_context__.k.register(_c8, "InstancedRigidBodiesDynamic$lazy");
__turbopack_context__.k.register(_c9, "InstancedRigidBodiesDynamic");
__turbopack_context__.k.register(_c10, "PhysicsProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Scene3D/shaderWarmup.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "warmUpShaders",
    ()=>warmUpShaders
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$lines$2f$Line2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/examples/jsm/lines/Line2.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$lines$2f$LineGeometry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/examples/jsm/lines/LineGeometry.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$lines$2f$LineMaterial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/examples/jsm/lines/LineMaterial.js [app-client] (ecmascript)");
;
;
;
;
/**
 * Materialvarianten, die Szenen erst mitten im Ablauf zeichnen (#1496):
 * Linien mit und ohne Strichmuster (StrokePath schaltet nach dem Einzeichnen
 * um), in Welteinheiten und Pixeln, dazu flache Icons und Prismen.
 */ const warmUpObjects = ()=>{
    // Beim Ein- und Ausblenden schaltet `transparent` um — eigene Programmvariante (OPAQUE)
    const opacities = [
        false,
        true
    ];
    const lines = [
        true,
        false
    ].flatMap((dashed)=>[
            true,
            false
        ].flatMap((worldUnits)=>opacities.map((transparent)=>{
                const geometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$lines$2f$LineGeometry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineGeometry"]();
                geometry.setPositions([
                    0,
                    0,
                    0,
                    1,
                    0,
                    0
                ]);
                const material = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$lines$2f$LineMaterial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineMaterial"]({
                    dashed,
                    worldUnits,
                    linewidth: 1,
                    transparent,
                    opacity: transparent ? 0.5 : 1
                });
                const line = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$lines$2f$Line2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line2"](geometry, material);
                line.computeLineDistances();
                return line;
            })));
    const plane = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlaneGeometry"](1, 1);
    const meshes = opacities.flatMap((transparent)=>{
        const opacity = transparent ? 0.5 : 1;
        return [
            new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](plane, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
                side: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DoubleSide"],
                transparent,
                opacity
            })),
            new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](plane, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
                transparent,
                opacity
            })),
            new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](plane, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
                roughness: 0.45,
                metalness: 0.1,
                transparent,
                opacity
            }))
        ];
    });
    return [
        ...lines,
        ...meshes
    ];
};
const disposeTree = (root)=>{
    root.traverse((o)=>{
        const mesh = o;
        mesh.geometry?.dispose();
        const mat = mesh.material;
        if (Array.isArray(mat)) mat.forEach((m)=>m.dispose());
        else mat?.dispose();
    });
};
/**
 * Zeichnet die genannten Teilbäume einmal vollständig in ein 1 × 1-Ziel
 * (#1497): `compile` baut nur Programme, Geometrie- und Instanzpuffer lädt
 * three erst beim ersten echten Zeichnen hoch — bei verborgenen Beats also
 * mitten im Film (Ruckler am Schnitt). Dafür kurz alles sichtbar schalten
 * (auch per Deckkraft verborgene Materialien, ohne Frustum-Culling) und
 * danach jede Einstellung exakt zurücksetzen.
 */ const prerenderHidden = (gl, scene, camera, names)=>{
    const hidden = [];
    const culled = [];
    const materials = [];
    for (const name of names){
        scene.getObjectsByProperty('name', name).forEach((root)=>root.traverse((o)=>{
                if (!o.visible) hidden.push(o);
                if (o.frustumCulled) culled.push(o);
                const mat = o.material;
                const list = Array.isArray(mat) ? mat : mat ? [
                    mat
                ] : [];
                list.forEach((m)=>{
                    if (!m.visible && !materials.includes(m)) materials.push(m);
                });
            }));
    }
    if (hidden.length === 0 && materials.length === 0) return;
    const previous = gl.getRenderTarget();
    const target = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebGLRenderTarget"](1, 1);
    hidden.forEach((o)=>o.visible = true);
    culled.forEach((o)=>o.frustumCulled = false);
    materials.forEach((m)=>m.visible = true);
    try {
        gl.setRenderTarget(target);
        gl.render(scene, camera);
    } finally{
        gl.setRenderTarget(previous);
        hidden.forEach((o)=>o.visible = false);
        culled.forEach((o)=>o.frustumCulled = true);
        materials.forEach((m)=>m.visible = false);
        target.dispose();
    }
};
const warmUpShaders = async (gl, scene, camera, { prerender = [] } = {})=>{
    const extra = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scene"]();
    for (const o of warmUpObjects())extra.add(o);
    try {
        if (typeof gl.compileAsync === 'function') {
            await gl.compileAsync(scene, camera);
            await gl.compileAsync(extra, camera, scene);
        } else {
            gl.compile(scene, camera);
            gl.compile(extra, camera, scene);
        }
    } catch  {
    // Vorwärmen ist eine Optimierung — nie ein Grund, den Film nicht zu zeigen
    } finally{
        disposeTree(extra);
    }
    try {
        if (prerender.length > 0) prerenderHidden(gl, scene, camera, prerender);
    } catch  {
    // wie oben: Vorzeichnen darf den Start nie verhindern
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/config/sealTiers.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Klassen von Monitored Materials (#1513): Proven, Plus, Premium — vom
 * Einstieg zur Spitze. Die Farben sind die der Siegel (Bronze, Silber, Gold;
 * public/images/siegel/siegel-*.svg, dieselben Dateien nutzt die
 * Verifizierungsurkunde). Die Namen sind Eigennamen und werden nicht
 * übersetzt. Schwellen des Scores: app/helper/materialGrades.ts.
 */ __turbopack_context__.s([
    "SEAL_TIERS",
    ()=>SEAL_TIERS
]);
const SEAL_TIERS = [
    {
        id: 'proven',
        name: 'Proven',
        color: '#CD7F32'
    },
    // im Siegel steht das CSS-Schlüsselwort „silver"
    {
        id: 'plus',
        name: 'Plus',
        color: '#C0C0C0'
    },
    {
        id: 'premium',
        name: 'Premium',
        color: '#D3AF37'
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/material-vision/flake-presets.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Flake presets — the canonical archetype library for material rendering.
 *
 * One predefined flake/pellet archetype per AI shape category
 * (`PRIMARY_SHAPE_VALUES`), derived from our material-vision data: the three
 * fully-analyzed production materials (MM 3232 / 2619 / 2686, see
 * RenderDemoContent), the GPT-4o calibration examples (ai-vision.ts) and the
 * form/parameter tables in analysis-context.md.
 *
 * Consumed by BOTH render paths:
 *  - 3D: Material3DRenderer (geometry type, scale range, parameter defaults)
 *  - 2D: /api/material-thumbnail (particle silhouette + size band)
 *
 * IMPORTANT: this module must stay client-safe — pure data and pure functions,
 * no runtime imports (it is imported from API routes AND 'use client'
 * components). The enums below are the single source of truth; ai-vision.ts
 * re-exports them for the analysis pipeline.
 *
 * All exported objects are deep-frozen module-level constants. This is load-
 * bearing: Material3DRenderer's `flakes` useMemo compares `renderingParams`
 * by identity, so handing out fresh objects per call would regenerate every
 * particle on every render.
 */ // ─── Enums (single source of truth for AI output validation + rendering) ────
/** German production-form categories (Salesforce `form` field domain). */ __turbopack_context__.s([
    "FLAKE_PRESETS",
    ()=>FLAKE_PRESETS,
    "FORM_MATCHERS",
    ()=>FORM_MATCHERS,
    "FORM_VALUES",
    ()=>FORM_VALUES,
    "PRIMARY_SHAPE_VALUES",
    ()=>PRIMARY_SHAPE_VALUES,
    "SHAPE_TO_FORM",
    ()=>SHAPE_TO_FORM,
    "isPrimaryShape",
    ()=>isPrimaryShape,
    "resolveFlakePreset",
    ()=>resolveFlakePreset
]);
const FORM_VALUES = [
    'Flakes',
    'Regranulat',
    'Mahlgut',
    'Agglomerat',
    'Linsen',
    'Compound',
    'Neuware',
    'Ballenware'
];
const PRIMARY_SHAPE_VALUES = [
    'irregular_flakes',
    'uniform_pellets',
    'lens_pellets',
    'angular_chunks',
    'lumpy_agglomerate',
    'blocky_bales',
    'cylindrical_pellets',
    'elongated_shards',
    'flat_chips',
    'rounded_granules',
    'powder'
];
const SHAPE_TO_FORM = Object.freeze({
    irregular_flakes: 'Flakes',
    flat_chips: 'Flakes',
    uniform_pellets: 'Regranulat',
    cylindrical_pellets: 'Regranulat',
    lens_pellets: 'Linsen',
    rounded_granules: 'Regranulat',
    angular_chunks: 'Mahlgut',
    elongated_shards: 'Mahlgut',
    lumpy_agglomerate: 'Agglomerat',
    blocky_bales: 'Ballenware',
    powder: 'Mahlgut'
});
const SHAPE_SET = new Set(PRIMARY_SHAPE_VALUES);
function isPrimaryShape(value) {
    return typeof value === 'string' && SHAPE_SET.has(value);
}
const FORM_MATCHERS = Object.freeze([
    [
        'linsen',
        'lens_pellets'
    ],
    // The English spellings and the shape words below are not hypothetical: of
    // the 760 records that carry a Form__c at all, 388 used to match nothing and
    // fell through to the 2D default circle — 'Zylinder' 176, 'Lens shaped' 98,
    // 'Kugeln' 72, 'Cylindrical' 31, 'Spherical' 11.
    [
        'lens',
        'lens_pellets'
    ],
    [
        'zylinder',
        'cylindrical_pellets'
    ],
    [
        'cylindrical',
        'cylindrical_pellets'
    ],
    [
        'kugel',
        'uniform_pellets'
    ],
    [
        'spherical',
        'uniform_pellets'
    ],
    [
        'granulat',
        'uniform_pellets'
    ],
    [
        're-granulate',
        'uniform_pellets'
    ],
    [
        'compound',
        'uniform_pellets'
    ],
    [
        'masterbatch',
        'uniform_pellets'
    ],
    [
        'neuware',
        'uniform_pellets'
    ],
    [
        'flake',
        'irregular_flakes'
    ],
    [
        'ballen',
        'blocky_bales'
    ],
    [
        'mahlgut',
        'angular_chunks'
    ],
    [
        'agglomerat',
        'lumpy_agglomerate'
    ],
    [
        'pulver',
        'powder'
    ],
    [
        'powder',
        'powder'
    ],
    [
        'staub',
        'powder'
    ],
    [
        'rolle',
        'flat_chips'
    ],
    [
        'folie',
        'flat_chips'
    ],
    [
        'wertstoff',
        'angular_chunks'
    ]
]);
/**
 * Numeric sources:
 * - uniform_pellets / irregular_flakes / angular_chunks: verbatim from the
 *   real production analyses MM 3232 / 2619 / 2686 (RenderDemoContent).
 * - cylindrical_pellets / lens_pellets: GPT-4o calibration examples 1 and 3.
 * - Remaining archetypes: "Typical Rendering Params by Material" and the form
 *   physics table in analysis-context.md.
 * - thumb2d bands for granulat/agglomerat/ballen and the 2D fallback preset
 *   (rounded_granules) replicate the legacy getParticleShape ladder exactly
 *   so existing production thumbnails stay unchanged.
 */ const PRESET_DEFS = {
    uniform_pellets: {
        labelDe: 'Regranulat-Pellets',
        descriptionDe: 'Gleichmäßige, linsenförmig gerundete Pellets mit glatter, wachsiger Oberfläche — typisches Regranulat.',
        form: 'Regranulat',
        geometry3d: 'sphere',
        geometryVariants: 1,
        rendering3d: {
            roughness: 0.2,
            metalness: 0,
            clearcoat: 0.5,
            clearcoatRoughness: 0.15,
            transmission: 0.35,
            ior: 1.5,
            opacity: 0.85,
            particleSizeVariance: 0.05,
            particleShapeVariance: 0.05,
            colorVariance: 0.08,
            flatness: 0.4,
            particleSizeRangeMm: [
                2,
                3
            ],
            particleShape: 'uniform_pellets',
            aspectRatioLW: 1.1,
            aspectRatioHW: 0.6,
            edgeRoundness: 0.95,
            shapeRegularity: 0.95,
            sizeDistribution: 'uniform',
            sizeMedianMm: 2.5,
            sizeClasses: {
                fine_pct: 0,
                small_pct: 100,
                medium_pct: 0,
                large_pct: 0,
                oversize_pct: 0
            },
            finesPresent: false,
            realDishDiameterMm: 160,
            colorPattern: 'uniform_each_particle_one_color'
        },
        thumb2d: {
            type: 'circle',
            minSize: 15,
            maxSize: 29,
            flatness: 1.0,
            edgeRoundness: 0.95
        },
        materialTypes: [
            'Regranulat',
            'Compound',
            'Neuware',
            'Masterbatch'
        ]
    },
    cylindrical_pellets: {
        labelDe: 'Zylinder-Granulat',
        descriptionDe: 'Stranggranulat: kurze Zylinder mit flachen Schnittkappen, sehr einheitlich — frisch extrudiertes Granulat.',
        form: 'Regranulat',
        geometry3d: 'cylinder',
        geometryVariants: 1,
        rendering3d: {
            roughness: 0.26,
            metalness: 0,
            clearcoat: 0.48,
            clearcoatRoughness: 0.18,
            transmission: 0,
            ior: 1.49,
            opacity: 1,
            particleSizeVariance: 0.1,
            particleShapeVariance: 0.08,
            colorVariance: 0.1,
            flatness: 0.05,
            particleSizeRangeMm: [
                2,
                5
            ],
            particleShape: 'cylindrical_pellets',
            aspectRatioLW: 1.1,
            aspectRatioHW: 0.8,
            edgeRoundness: 0.9,
            shapeRegularity: 0.95,
            sizeDistribution: 'uniform',
            sizeMedianMm: 3,
            sizeClasses: {
                fine_pct: 0,
                small_pct: 90,
                medium_pct: 10,
                large_pct: 0,
                oversize_pct: 0
            },
            finesPresent: false,
            realDishDiameterMm: 160,
            colorPattern: 'uniform_each_particle_one_color'
        },
        thumb2d: {
            type: 'rect',
            minSize: 15,
            maxSize: 27,
            flatness: 0.75,
            edgeRoundness: 0.9
        },
        materialTypes: [
            'Regranulat'
        ]
    },
    lens_pellets: {
        labelDe: 'Linsen',
        descriptionDe: 'Bikonvexe, linsenförmige Pellets mit stark gerundeten Kanten und glänzender Oberfläche.',
        form: 'Linsen',
        geometry3d: 'sphere',
        geometryVariants: 1,
        rendering3d: {
            roughness: 0.18,
            metalness: 0,
            clearcoat: 0.65,
            clearcoatRoughness: 0.12,
            transmission: 0.2,
            ior: 1.51,
            opacity: 0.85,
            particleSizeVariance: 0.08,
            particleShapeVariance: 0.06,
            colorVariance: 0.06,
            flatness: 0.55,
            particleSizeRangeMm: [
                2.5,
                4
            ],
            particleShape: 'lens_pellets',
            aspectRatioLW: 1.0,
            aspectRatioHW: 0.45,
            edgeRoundness: 0.95,
            shapeRegularity: 0.92,
            sizeDistribution: 'uniform',
            sizeMedianMm: 3,
            sizeClasses: {
                fine_pct: 0,
                small_pct: 95,
                medium_pct: 5,
                large_pct: 0,
                oversize_pct: 0
            },
            finesPresent: false,
            realDishDiameterMm: 160,
            colorPattern: 'uniform_each_particle_one_color'
        },
        thumb2d: {
            type: 'circle',
            minSize: 16,
            maxSize: 24,
            flatness: 1.0,
            edgeRoundness: 0.95
        },
        materialTypes: []
    },
    rounded_granules: {
        labelDe: 'Rundgranulat',
        descriptionDe: 'Rundliche, leicht unregelmäßige Körner mit matter Oberfläche — Virgin-/Neuware-Granulat.',
        form: 'Regranulat',
        geometry3d: 'icosahedron',
        geometryVariants: 1,
        rendering3d: {
            roughness: 0.35,
            metalness: 0,
            clearcoat: 0.3,
            clearcoatRoughness: 0.25,
            transmission: 0,
            ior: 1.51,
            opacity: 1,
            particleSizeVariance: 0.15,
            particleShapeVariance: 0.12,
            colorVariance: 0.1,
            flatness: 0.1,
            particleSizeRangeMm: [
                2,
                4
            ],
            particleShape: 'rounded_granules',
            aspectRatioLW: 1.0,
            aspectRatioHW: 0.9,
            edgeRoundness: 0.85,
            shapeRegularity: 0.8,
            sizeDistribution: 'uniform',
            sizeMedianMm: 3,
            sizeClasses: {
                fine_pct: 0,
                small_pct: 85,
                medium_pct: 15,
                large_pct: 0,
                oversize_pct: 0
            },
            finesPresent: false,
            realDishDiameterMm: 160,
            colorPattern: 'uniform_each_particle_one_color'
        },
        // 2D fallback preset: replicates the legacy default branch (circle 19–37)
        // byte-identically so unknown forms keep today's thumbnails.
        thumb2d: {
            type: 'circle',
            minSize: 19,
            maxSize: 37,
            flatness: 1.0,
            edgeRoundness: 0.85
        },
        materialTypes: []
    },
    irregular_flakes: {
        labelDe: 'Flakes (unregelmäßig)',
        descriptionDe: 'Dünne, flach geschredderte Flakes mit scharfen, kantigen Rändern und stark streuender Größe.',
        form: 'Flakes',
        geometry3d: 'shard',
        geometryVariants: 5,
        rendering3d: {
            roughness: 0.25,
            metalness: 0,
            clearcoat: 0.4,
            clearcoatRoughness: 0.15,
            transmission: 0,
            ior: 1.5,
            opacity: 1,
            particleSizeVariance: 0.6,
            particleShapeVariance: 0.7,
            colorVariance: 0.3,
            flatness: 0.9,
            particleSizeRangeMm: [
                5,
                25
            ],
            particleShape: 'irregular_flakes',
            aspectRatioLW: 3.0,
            aspectRatioHW: 0.1,
            edgeRoundness: 0.15,
            shapeRegularity: 0.35,
            sizeDistribution: 'wide_spread',
            sizeMedianMm: 12,
            sizeClasses: {
                fine_pct: 3,
                small_pct: 20,
                medium_pct: 50,
                large_pct: 25,
                oversize_pct: 2
            },
            finesPresent: true,
            realDishDiameterMm: 160,
            colorPattern: 'uniform_each_particle_one_color'
        },
        thumb2d: {
            type: 'polygon',
            minSize: 21,
            maxSize: 45,
            flatness: 0.35,
            edgeRoundness: 0.15,
            sides: 6,
            irregularity: 0.35
        },
        materialTypes: [
            'Flakes'
        ]
    },
    flat_chips: {
        labelDe: 'Flache Chips',
        descriptionDe: 'Flache, teils transparente Chips mit gerundeten Kanten — z. B. PET-Flakes oder Folienschnitt.',
        form: 'Flakes',
        geometry3d: 'chip',
        geometryVariants: 5,
        rendering3d: {
            roughness: 0.3,
            metalness: 0,
            clearcoat: 0.5,
            clearcoatRoughness: 0.2,
            transmission: 0.6,
            ior: 1.57,
            opacity: 0.6,
            particleSizeVariance: 0.3,
            particleShapeVariance: 0.25,
            colorVariance: 0.1,
            flatness: 0.85,
            particleSizeRangeMm: [
                4,
                12
            ],
            particleShape: 'flat_chips',
            aspectRatioLW: 1.6,
            aspectRatioHW: 0.08,
            edgeRoundness: 0.4,
            shapeRegularity: 0.6,
            sizeDistribution: 'normal',
            sizeMedianMm: 8,
            sizeClasses: {
                fine_pct: 2,
                small_pct: 30,
                medium_pct: 55,
                large_pct: 13,
                oversize_pct: 0
            },
            finesPresent: false,
            realDishDiameterMm: 160,
            colorPattern: 'uniform_each_particle_one_color'
        },
        thumb2d: {
            type: 'polygon',
            minSize: 18,
            maxSize: 34,
            flatness: 0.5,
            edgeRoundness: 0.4,
            sides: 5,
            irregularity: 0.15
        },
        materialTypes: [
            'Rollenware',
            'Rolle auf Palette'
        ]
    },
    elongated_shards: {
        labelDe: 'Längliche Splitter',
        descriptionDe: 'Lange, schmale Bruchsplitter mit scharfen Kanten — spröde Polymere wie PS/ABS nach dem Schreddern.',
        form: 'Mahlgut',
        geometry3d: 'shard',
        geometryVariants: 5,
        rendering3d: {
            roughness: 0.45,
            metalness: 0,
            clearcoat: 0.15,
            clearcoatRoughness: 0.3,
            transmission: 0,
            ior: 1.59,
            opacity: 1,
            particleSizeVariance: 0.5,
            particleShapeVariance: 0.55,
            colorVariance: 0.2,
            flatness: 0.65,
            particleSizeRangeMm: [
                6,
                22
            ],
            particleShape: 'elongated_shards',
            aspectRatioLW: 3.5,
            aspectRatioHW: 0.35,
            edgeRoundness: 0.2,
            shapeRegularity: 0.3,
            sizeDistribution: 'wide_spread',
            sizeMedianMm: 12,
            sizeClasses: {
                fine_pct: 3,
                small_pct: 25,
                medium_pct: 45,
                large_pct: 25,
                oversize_pct: 2
            },
            finesPresent: true,
            realDishDiameterMm: 160,
            colorPattern: 'uniform_each_particle_one_color'
        },
        thumb2d: {
            type: 'polygon',
            minSize: 20,
            maxSize: 42,
            flatness: 0.3,
            edgeRoundness: 0.2,
            sides: 6,
            irregularity: 0.4
        },
        materialTypes: []
    },
    angular_chunks: {
        labelDe: 'Kantige Bruchstücke',
        descriptionDe: 'Kompakte, kantige Bruchstücke mit teils angeschmolzenen Rändern — klassisches Mahlgut.',
        form: 'Mahlgut',
        geometry3d: 'dodecahedron',
        geometryVariants: 1,
        rendering3d: {
            roughness: 0.5,
            metalness: 0,
            clearcoat: 0.15,
            clearcoatRoughness: 0.3,
            transmission: 0,
            ior: 1.49,
            opacity: 1,
            particleSizeVariance: 0.5,
            particleShapeVariance: 0.6,
            colorVariance: 0.25,
            flatness: 0.4,
            particleSizeRangeMm: [
                5,
                20
            ],
            particleShape: 'angular_chunks',
            aspectRatioLW: 1.5,
            aspectRatioHW: 0.5,
            edgeRoundness: 0.6,
            shapeRegularity: 0.4,
            sizeDistribution: 'wide_spread',
            sizeMedianMm: 10,
            sizeClasses: {
                fine_pct: 2,
                small_pct: 25,
                medium_pct: 55,
                large_pct: 18,
                oversize_pct: 0
            },
            finesPresent: false,
            realDishDiameterMm: 160,
            colorPattern: 'uniform_each_particle_one_color'
        },
        thumb2d: {
            type: 'polygon',
            minSize: 17,
            maxSize: 37,
            flatness: 0.7,
            edgeRoundness: 0.6,
            sides: 7,
            irregularity: 0.25
        },
        materialTypes: [
            'Mahlgut',
            'Wertstoff'
        ]
    },
    lumpy_agglomerate: {
        labelDe: 'Agglomerat-Klumpen',
        descriptionDe: 'Unregelmäßige, verschmolzene Klumpen mit rauer, poriger Oberfläche — agglomerierte Folien.',
        form: 'Agglomerat',
        geometry3d: 'lump',
        geometryVariants: 5,
        rendering3d: {
            roughness: 0.8,
            metalness: 0,
            clearcoat: 0,
            clearcoatRoughness: 0.4,
            transmission: 0,
            ior: 1.51,
            opacity: 1,
            particleSizeVariance: 0.45,
            particleShapeVariance: 0.5,
            colorVariance: 0.2,
            flatness: 0.3,
            particleSizeRangeMm: [
                4,
                15
            ],
            particleShape: 'lumpy_agglomerate',
            aspectRatioLW: 1.3,
            aspectRatioHW: 0.7,
            edgeRoundness: 0.5,
            shapeRegularity: 0.2,
            sizeDistribution: 'skewed_large',
            sizeMedianMm: 8,
            sizeClasses: {
                fine_pct: 2,
                small_pct: 20,
                medium_pct: 45,
                large_pct: 28,
                oversize_pct: 5
            },
            finesPresent: false,
            realDishDiameterMm: 160,
            colorPattern: 'uniform_each_particle_one_color'
        },
        thumb2d: {
            type: 'ellipse',
            minSize: 29,
            maxSize: 53,
            flatness: 0.8,
            edgeRoundness: 0.5
        },
        materialTypes: [
            'Agglomerat'
        ]
    },
    blocky_bales: {
        labelDe: 'Ballen',
        descriptionDe: 'Große, gepresste quaderförmige Ballen mit scharfen Presskanten.',
        form: 'Ballenware',
        geometry3d: 'box',
        geometryVariants: 1,
        rendering3d: {
            roughness: 0.7,
            metalness: 0,
            clearcoat: 0,
            clearcoatRoughness: 0.5,
            transmission: 0,
            ior: 1.51,
            opacity: 1,
            particleSizeVariance: 0.35,
            particleShapeVariance: 0.3,
            colorVariance: 0.35,
            flatness: 0.2,
            particleSizeRangeMm: [
                20,
                45
            ],
            particleShape: 'blocky_bales',
            aspectRatioLW: 1.4,
            aspectRatioHW: 0.8,
            edgeRoundness: 0.1,
            shapeRegularity: 0.5,
            sizeDistribution: 'normal',
            sizeMedianMm: 30,
            sizeClasses: {
                fine_pct: 0,
                small_pct: 5,
                medium_pct: 30,
                large_pct: 45,
                oversize_pct: 20
            },
            finesPresent: false,
            realDishDiameterMm: 400,
            colorPattern: 'uniform_each_particle_one_color'
        },
        thumb2d: {
            type: 'rect',
            minSize: 35,
            maxSize: 60,
            flatness: 0.7,
            edgeRoundness: 0.1
        },
        materialTypes: [
            'Ballenware'
        ]
    },
    powder: {
        labelDe: 'Pulver',
        descriptionDe: 'Sehr feines Pulver mit staubigem, mattem Erscheinungsbild — Feinstanteil unter 1 mm.',
        form: 'Mahlgut',
        geometry3d: 'icosahedron',
        geometryVariants: 1,
        rendering3d: {
            roughness: 0.9,
            metalness: 0,
            clearcoat: 0,
            clearcoatRoughness: 0.6,
            transmission: 0,
            ior: 1.54,
            opacity: 1,
            particleSizeVariance: 0.4,
            particleShapeVariance: 0.3,
            colorVariance: 0.05,
            flatness: 0.2,
            particleSizeRangeMm: [
                0.3,
                0.9
            ],
            particleShape: 'powder',
            aspectRatioLW: 1.0,
            aspectRatioHW: 0.8,
            edgeRoundness: 0.7,
            shapeRegularity: 0.6,
            sizeDistribution: 'skewed_small',
            sizeMedianMm: 0.5,
            sizeClasses: {
                fine_pct: 70,
                small_pct: 25,
                medium_pct: 5,
                large_pct: 0,
                oversize_pct: 0
            },
            finesPresent: true,
            realDishDiameterMm: 60,
            colorPattern: 'uniform_each_particle_one_color'
        },
        thumb2d: {
            type: 'circle',
            minSize: 3,
            maxSize: 7,
            flatness: 1.0,
            edgeRoundness: 0.7,
            maxCount: 900
        },
        materialTypes: []
    }
};
// ─── Assembly + deep freeze ─────────────────────────────────────────────────
function deepFreeze(value) {
    if (value && typeof value === 'object' && !Object.isFrozen(value)) {
        Object.freeze(value);
        for (const nested of Object.values(value)){
            deepFreeze(nested);
        }
    }
    return value;
}
function buildPresets() {
    const presets = {};
    for (const key of PRIMARY_SHAPE_VALUES){
        const { materialTypes, ...def } = PRESET_DEFS[key];
        presets[key] = {
            key,
            ...def,
            match: {
                formSubstrings: FORM_MATCHERS.filter(([, k])=>k === key).map(([s])=>s),
                materialTypes
            }
        };
    }
    return deepFreeze(presets);
}
const FLAKE_PRESETS = buildPresets();
function resolveFlakePreset(input, fallbackKey) {
    if (isPrimaryShape(input.particleShape)) {
        return FLAKE_PRESETS[input.particleShape];
    }
    const form = input.form?.toLowerCase();
    if (form) {
        for (const [substring, key] of FORM_MATCHERS){
            if (form.includes(substring)) return FLAKE_PRESETS[key];
        }
    }
    return FLAKE_PRESETS[fallbackKey];
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/motion/easing.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Zeitfunktionen als reine Funktionen — dieselben cubic-bezier-Kurven wie in
 * den CSS-Animationen des HeroSliders, damit WebGL-Wabe und 3D-Szenen dieselbe
 * Bewegung zeigen. Lösung wie in Browsern: Newton, notfalls Bisektion.
 *
 * Seit #1454 hier in lib/motion; `Organism/HoneycombSlider/easing.ts` reicht
 * die Exporte nur noch durch.
 */ __turbopack_context__.s([
    "EASE_IN",
    ()=>EASE_IN,
    "EASE_IN_OUT",
    ()=>EASE_IN_OUT,
    "EASE_LINEAR",
    ()=>EASE_LINEAR,
    "EASE_OUT",
    ()=>EASE_OUT,
    "EASE_POP",
    ()=>EASE_POP,
    "EASE_REVEAL",
    ()=>EASE_REVEAL,
    "EASE_STANDARD",
    ()=>EASE_STANDARD,
    "clamp01",
    ()=>clamp01,
    "cubicBezier",
    ()=>cubicBezier,
    "easingTable",
    ()=>easingTable,
    "tableAt",
    ()=>tableAt
]);
const clamp01 = (t)=>t <= 0 ? 0 : t >= 1 ? 1 : t;
const NEWTON_ITERATIONS = 6;
const NEWTON_MIN_SLOPE = 0.001;
const BISECTION_ITERATIONS = 24;
const a = (a1, a2)=>1 - 3 * a2 + 3 * a1;
const b = (a1, a2)=>3 * a2 - 6 * a1;
const c = (a1)=>3 * a1;
const bezier = (t, a1, a2)=>((a(a1, a2) * t + b(a1, a2)) * t + c(a1)) * t;
const slope = (t, a1, a2)=>3 * a(a1, a2) * t * t + 2 * b(a1, a2) * t + c(a1);
const cubicBezier = (x1, y1, x2, y2)=>{
    if (x1 === y1 && x2 === y2) return clamp01;
    const solveT = (x)=>{
        let t = x;
        for(let i = 0; i < NEWTON_ITERATIONS; i += 1){
            const s = slope(t, x1, x2);
            if (s < NEWTON_MIN_SLOPE) break;
            t -= (bezier(t, x1, x2) - x) / s;
            if (t <= 0) return 0;
            if (t >= 1) return 1;
        }
        if (Math.abs(bezier(t, x1, x2) - x) < 1e-5) return t;
        let lo = 0;
        let hi = 1;
        for(let i = 0; i < BISECTION_ITERATIONS; i += 1){
            t = (lo + hi) / 2;
            if (bezier(t, x1, x2) < x) lo = t;
            else hi = t;
        }
        return t;
    };
    return (x)=>{
        if (x <= 0) return 0;
        if (x >= 1) return 1;
        return bezier(solveT(x), y1, y2);
    };
};
const EASE_POP = cubicBezier(0.2, 0.8, 0.2, 1);
const EASE_REVEAL = cubicBezier(0.65, 0, 0.35, 1);
const EASE_IN = cubicBezier(0.42, 0, 1, 1);
const EASE_STANDARD = cubicBezier(0.25, 0.1, 0.25, 1);
const EASE_OUT = cubicBezier(0, 0, 0.58, 1);
const EASE_IN_OUT = cubicBezier(0.42, 0, 0.58, 1);
const EASE_LINEAR = clamp01;
const easingTable = (easing, steps = 256)=>{
    const table = new Float32Array(steps + 1);
    for(let i = 0; i <= steps; i += 1)table[i] = easing(i / steps);
    return table;
};
const tableAt = (table, t)=>{
    const steps = table.length - 1;
    const x = clamp01(t) * steps;
    const i = Math.floor(x);
    if (i >= steps) return table[steps];
    const f = x - i;
    return table[i] * (1 - f) + table[i + 1] * f;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/motion/timeline.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "lerpArray",
    ()=>lerpArray,
    "lerpHex",
    ()=>lerpHex,
    "lerpNumber",
    ()=>lerpNumber,
    "markerAt",
    ()=>markerAt,
    "offsetTrack",
    ()=>offsetTrack,
    "sample",
    ()=>sample,
    "sampleAll",
    ()=>sampleAll,
    "track",
    ()=>track,
    "typewriter",
    ()=>typewriter
]);
/**
 * Zeitachsen-Motor (#1454): Keyframes, Spuren und Marker als reine Daten,
 * ohne Uhr, ohne React, ohne WebGL. Eine Szene baut ihre Spuren relativ zu
 * ihrem Anfang und hängt sie mit `offsetTrack` absolut in den Film ein; der
 * Organismus sampelt je Frame mit `sampleAll`.
 *
 * Regeln: Werte halten vor dem ersten und nach dem letzten Key. Zwischen zwei
 * Keys wirkt das Easing des Ziel-Keys auf den Anteil, dann der Lerp der Spur
 * (Standard: Zahlen linear, Zahlenfelder elementweise, Hex-Farben über RGB,
 * alles andere hält bis zum nächsten Key).
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/motion/easing.ts [app-client] (ecmascript)");
;
const lerpNumber = (a, b, t)=>a + (b - a) * t;
const lerpArray = (a, b, t)=>a.map((v, i)=>v + ((b[i] ?? v) - v) * t);
const hexToRgb = (hex)=>{
    const h = hex.replace('#', '');
    const full = h.length === 3 ? h.split('').map((ch)=>ch + ch).join('') : h;
    return [
        parseInt(full.slice(0, 2), 16),
        parseInt(full.slice(2, 4), 16),
        parseInt(full.slice(4, 6), 16)
    ];
};
const rgbToHex = (r, g, b)=>'#' + [
        r,
        g,
        b
    ].map((v)=>Math.round(Math.max(0, Math.min(255, v))).toString(16).padStart(2, '0')).join('');
const lerpHex = (a, b, t)=>{
    const [r1, g1, b1] = hexToRgb(a);
    const [r2, g2, b2] = hexToRgb(b);
    return rgbToHex(r1 + (r2 - r1) * t, g1 + (g2 - g1) * t, b1 + (b2 - b1) * t);
};
const isHex = (v)=>typeof v === 'string' && /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(v);
const isNumberArray = (v)=>Array.isArray(v) && v.every((x)=>typeof x === 'number');
/** Standard-Lerp nach Wertetyp; unbekannte Typen halten den Startwert. */ const defaultLerp = (a, b, t)=>{
    if (typeof a === 'number' && typeof b === 'number') return lerpNumber(a, b, t);
    if (isNumberArray(a) && isNumberArray(b)) return lerpArray(a, b, t);
    if (isHex(a) && isHex(b)) return lerpHex(a, b, t);
    return a;
};
const track = (id, keys, lerp)=>{
    if (keys.length === 0) throw new Error(`Spur "${id}" hat keine Keys`);
    const sorted = [
        ...keys
    ].sort((x, y)=>x.at - y.at);
    for(let i = 1; i < sorted.length; i += 1){
        if (!(sorted[i].at > sorted[i - 1].at)) {
            throw new Error(`Spur "${id}": doppelte Zeit ${sorted[i].at}`);
        }
    }
    for (const k of sorted){
        if (!Number.isFinite(k.at)) throw new Error(`Spur "${id}": ungültige Zeit ${k.at}`);
    }
    return {
        id,
        keys: sorted,
        lerp
    };
};
const sample = (t, time)=>{
    const { keys } = t;
    const first = keys[0];
    if (!Number.isFinite(time) || time <= first.at) return first.value;
    const last = keys[keys.length - 1];
    if (time >= last.at) return last.value;
    // Ziel-Key: erster Key mit at > time
    let hi = 1;
    while(keys[hi].at <= time)hi += 1;
    const from = keys[hi - 1];
    const to = keys[hi];
    const raw = (time - from.at) / (to.at - from.at);
    const eased = to.ease ? to.ease((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp01"])(raw)) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp01"])(raw);
    const lerp = t.lerp ?? defaultLerp;
    return lerp(from.value, to.value, eased);
};
const sampleAll = (tl, time)=>{
    const out = {};
    for (const t of tl.tracks)out[t.id] = sample(t, time);
    return out;
};
const markerAt = (tl, time)=>{
    if (!Number.isFinite(time)) return null;
    let found = null;
    for (const m of tl.markers){
        if (m.at <= time && (found === null || m.at >= found.at)) found = m;
    }
    return found;
};
const typewriter = (text, from, cps, time)=>{
    if (!Number.isFinite(time) || time < from) return 0;
    return Math.min(text.length, Math.floor((time - from) * cps));
};
const offsetTrack = (t, seconds)=>({
        ...t,
        keys: t.keys.map((k)=>({
                ...k,
                at: k.at + seconds
            }))
    });
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/motion/typewriter.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "typedChars",
    ()=>typedChars,
    "typingSchedule",
    ()=>typingSchedule
]);
/**
 * Menschlicher Tipprhythmus (#1463): statt gleichmäßiger Zeichenrate schwanken
 * die Abstände je Zeichen, nach Wortende, Komma, Gedankenstrich und Satzende
 * gibt es Lesepausen. Der Rhythmus ist deterministisch (Pseudozufall aus der
 * Zeichenposition) und wird auf die vorgegebene Tippdauer skaliert, damit das
 * Drehbuch seine Zeitfenster behält.
 */ /** Relative Dauer je Zeichen, bevor auf die Tippdauer skaliert wird */ const BASE = 1;
const AFTER_SPACE = 0.9;
const AFTER_COMMA = 5;
const AFTER_DASH = 4;
const AFTER_SENTENCE = 9;
/** Schwankung je Buchstabe (± Anteil) */ const JITTER = 0.45;
/** Pseudozufall 0–1 aus einer Ganzzahl (Hash), gleich bei jedem Aufruf */ const noise = (i)=>{
    let h = Math.imul(i ^ 0x9e3779b9, 0x85ebca6b);
    h ^= h >>> 13;
    h = Math.imul(h, 0xc2b2ae35);
    h ^= h >>> 16;
    return (h >>> 0) / 4294967296;
};
const pauseAfter = (ch)=>{
    if (ch === '.' || ch === '!' || ch === '?' || ch === ':') return AFTER_SENTENCE;
    if (ch === ',' || ch === ';') return AFTER_COMMA;
    if (ch === '–' || ch === '—') return AFTER_DASH;
    if (ch === ' ') return AFTER_SPACE;
    return 0;
};
const typingSchedule = (text, seconds)=>{
    if (text.length === 0) return [];
    const weights = [];
    for(let i = 0; i < text.length; i += 1){
        const jitter = 1 + (noise(i + text.length * 31) * 2 - 1) * JITTER;
        // die Pause gehört vor das nächste Zeichen: erst lesen, dann weitertippen
        const pause = i > 0 ? pauseAfter(text[i - 1]) : 0;
        weights.push(BASE * jitter + pause);
    }
    const total = weights.reduce((a, b)=>a + b, 0);
    const scale = seconds / total;
    const out = [];
    let t = 0;
    for (const w of weights){
        t += w * scale;
        out.push(t);
    }
    out[out.length - 1] = seconds;
    return out;
};
const typedChars = (schedule, elapsed)=>{
    if (!Number.isFinite(elapsed) || elapsed <= 0) return 0;
    let lo = 0;
    let hi = schedule.length;
    while(lo < hi){
        const mid = lo + hi >> 1;
        if (schedule[mid] <= elapsed) lo = mid + 1;
        else hi = mid;
    }
    return lo;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/scene3d/bakedPourFormat.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FILE_HZ",
    ()=>FILE_HZ,
    "FORMAT_VERSION",
    ()=>FORMAT_VERSION,
    "STRIDE",
    ()=>STRIDE,
    "bytesFromBase64",
    ()=>bytesFromBase64,
    "decodeBakedPour",
    ()=>decodeBakedPour,
    "encodeBakedPour",
    ()=>encodeBakedPour,
    "pourId",
    ()=>pourId
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$pour$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/scene3d/pour.ts [app-client] (ecmascript)");
;
const STRIDE = 7;
const FILE_HZ = 30;
const FORMAT_VERSION = 1;
const MAGIC = 0x31425050 // "PPB1"
;
const HEADER_BYTES = 16;
const INT16_MAX = 32767;
/** FNV-1a über die Zeichen, als acht Hex-Stellen */ const fnv1a = (text)=>{
    let hash = 0x811c9dc5;
    for(let i = 0; i < text.length; i++){
        hash ^= text.charCodeAt(i);
        hash = Math.imul(hash, 0x01000193);
    }
    return (hash >>> 0).toString(16).padStart(8, '0');
};
const pourId = (spec, options = {})=>{
    const key = JSON.stringify([
        FORMAT_VERSION,
        FILE_HZ,
        spec.seed,
        spec.count,
        spec.radius,
        spec.depth,
        spec.sizeRange,
        options.fillSeconds ?? null,
        options.seconds ?? null,
        options.hz ?? null
    ]);
    return `pour-${spec.seed}-${fnv1a(key)}`;
};
const encodeBakedPour = (baked)=>{
    const step = baked.hz / FILE_HZ;
    if (!Number.isInteger(step) || step < 1) throw new Error(`Bildrate ${baked.hz} ist kein Vielfaches von ${FILE_HZ}`);
    const n = baked.flakes.length;
    // der letzte gerechnete Frame (Ruhelage) ist immer der letzte der Datei
    const frames = Math.ceil((baked.frames - 1) / step) + 1;
    const source = (frame)=>Math.min(baked.frames - 1, frame * step);
    let reach = 0;
    for(let frame = 0; frame < frames; frame++){
        const base = source(frame) * n * STRIDE;
        for(let i = 0; i < n; i++){
            for(let c = 0; c < 3; c++)reach = Math.max(reach, Math.abs(baked.data[base + i * STRIDE + c]));
        }
    }
    const scale = reach > 0 ? reach * 1.0001 : 1;
    const bytes = new Uint8Array(HEADER_BYTES + n * 2 + frames * n * STRIDE * 2);
    const view = new DataView(bytes.buffer);
    view.setUint32(0, MAGIC, true);
    view.setUint16(4, FILE_HZ, true);
    view.setUint16(6, frames, true);
    view.setUint16(8, n, true);
    view.setUint16(10, STRIDE, true);
    view.setFloat32(12, scale, true);
    for(let i = 0; i < n; i++)view.setUint16(HEADER_BYTES + i * 2, Math.min(frames - 1, Math.ceil(baked.released[i] / step)), true);
    const quantized = new Int16Array(n * STRIDE);
    const previous = new Int16Array(n * STRIDE);
    const delta = new Int16Array(1);
    let offset = HEADER_BYTES + n * 2;
    for(let frame = 0; frame < frames; frame++){
        const base = source(frame) * n * STRIDE;
        for(let k = 0; k < n * STRIDE; k++){
            const value = baked.data[base + k];
            const unit = k % STRIDE < 3 ? value / scale : value;
            quantized[k] = Math.round(Math.max(-1, Math.min(1, unit)) * INT16_MAX);
            // Differenz mit Überlauf in Int16 — beim Lesen läuft die Summe genauso über
            delta[0] = quantized[k] - previous[k];
            view.setInt16(offset, delta[0], true);
            offset += 2;
        }
        previous.set(quantized);
    }
    return bytes;
};
const decodeBakedPour = (bytes, spec)=>{
    const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
    if (bytes.byteLength < HEADER_BYTES || view.getUint32(0, true) !== MAGIC) throw new Error('Keine aufgezeichnete Schüttung');
    const hz = view.getUint16(4, true);
    const frames = view.getUint16(6, true);
    const n = view.getUint16(8, true);
    const stride = view.getUint16(10, true);
    const scale = view.getFloat32(12, true);
    if (stride !== STRIDE || bytes.byteLength !== HEADER_BYTES + n * 2 + frames * n * STRIDE * 2) {
        throw new Error('Aufgezeichnete Schüttung ist unvollständig');
    }
    const flakes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$pour$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pourFlakes"])({
        seed: spec.seed,
        count: spec.count,
        radius: spec.radius,
        depth: spec.depth,
        sizeRange: spec.sizeRange,
        colors: spec.colors,
        geometryType: spec.geometryType,
        batch: 0,
        batches: 1
    });
    if (flakes.length !== n) throw new Error('Aufgezeichnete Schüttung passt nicht zur Spezifikation');
    const released = new Uint16Array(n);
    for(let i = 0; i < n; i++)released[i] = view.getUint16(HEADER_BYTES + i * 2, true);
    const data = new Float32Array(frames * n * STRIDE);
    const current = new Int16Array(n * STRIDE);
    let offset = HEADER_BYTES + n * 2;
    for(let frame = 0; frame < frames; frame++){
        const base = frame * n * STRIDE;
        for(let k = 0; k < n * STRIDE; k++){
            current[k] += view.getInt16(offset, true);
            offset += 2;
            data[base + k] = current[k] / INT16_MAX * (k % STRIDE < 3 ? scale : 1);
        }
    }
    return {
        flakes,
        hz,
        frames,
        data,
        released
    };
};
const bytesFromBase64 = (text)=>{
    const binary = atob(text);
    const bytes = new Uint8Array(binary.length);
    for(let i = 0; i < binary.length; i++)bytes[i] = binary.charCodeAt(i);
    return bytes;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/scene3d/cameraFraming.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "distanceForHeight",
    ()=>distanceForHeight,
    "distanceForWidth",
    ()=>distanceForWidth
]);
/**
 * Kamera-Rahmung (#1455): welcher Abstand füllt bei gegebenem vertikalem
 * Öffnungswinkel eine Höhe bzw. Breite in Weltmaßen. Reine Mathematik.
 */ const toRad = (deg)=>deg * Math.PI / 180;
const distanceForHeight = (heightUnits, fovDeg)=>heightUnits / 2 / Math.tan(toRad(fovDeg) / 2);
const distanceForWidth = (widthUnits, fovDeg, aspect)=>distanceForHeight(widthUnits / aspect, fovDeg);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/scene3d/extrudeFlat.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "extrudeFlat",
    ()=>extrudeFlat
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
;
/**
 * Flaches Dreiecksnetz in die Tiefe ziehen (#1513) — für SVG-Icons, deren
 * Striche als fertige Dreiecke kommen (keine Shapes, die ExtrudeGeometry
 * bräuchte). Vorderseite bleibt bei z = 0 (die Ebene des flachen Icons, damit
 * die Schichtung der Bausteine gleich bleibt), Rückseite bei z = -1; Wände an
 * allen Kanten, die nur ein Dreieck nutzt. Tiefe wird über die z-Skalierung
 * gesetzt. Überlappende Strichdreiecke erzeugen innere Wände — verdeckt, harmlos.
 */ const cache = new WeakMap();
const KEY_SCALE = 1e4;
const keyOf = (x, y)=>`${Math.round(x * KEY_SCALE)},${Math.round(y * KEY_SCALE)}`;
const extrudeFlat = (flat)=>{
    const hit = cache.get(flat);
    if (hit) return hit;
    const source = flat.index ? flat.toNonIndexed() : flat;
    const raw = source.getAttribute('position');
    const triCount = Math.floor(raw.count / 3);
    // Dreiecke einheitlich gegen den Uhrzeigersinn (SVG-Striche kommen gemischt):
    // dann zeigen Vorderseiten nach +z und Randkanten laufen außen herum
    const xy = new Float32Array(triCount * 6);
    for(let t = 0; t < triCount; t += 1){
        const ax = raw.getX(t * 3);
        const ay = raw.getY(t * 3);
        const bx = raw.getX(t * 3 + 1);
        const by = raw.getY(t * 3 + 1);
        const cx = raw.getX(t * 3 + 2);
        const cy = raw.getY(t * 3 + 2);
        const ccw = (bx - ax) * (cy - ay) - (by - ay) * (cx - ax) >= 0;
        xy.set(ccw ? [
            ax,
            ay,
            bx,
            by,
            cx,
            cy
        ] : [
            ax,
            ay,
            cx,
            cy,
            bx,
            by
        ], t * 6);
    }
    const pos = {
        getX: (i)=>xy[i * 2],
        getY: (i)=>xy[i * 2 + 1]
    };
    // Kanten zählen (über verschweißte Punkte); Randkanten = genau einmal benutzt, mit Richtung
    const edges = new Map();
    for(let t = 0; t < triCount; t += 1){
        for(let e = 0; e < 3; e += 1){
            const i = t * 3 + e;
            const j = t * 3 + (e + 1) % 3;
            const ax = pos.getX(i);
            const ay = pos.getY(i);
            const bx = pos.getX(j);
            const by = pos.getY(j);
            const ka = keyOf(ax, ay);
            const kb = keyOf(bx, by);
            if (ka === kb) continue;
            const key = ka < kb ? `${ka}|${kb}` : `${kb}|${ka}`;
            const hitEdge = edges.get(key);
            if (hitEdge) hitEdge.n += 1;
            else edges.set(key, {
                n: 1,
                ax,
                ay,
                bx,
                by
            });
        }
    }
    const border = [
        ...edges.values()
    ].filter((e)=>e.n === 1);
    const vertexCount = triCount * 6 + border.length * 6;
    const positions = new Float32Array(vertexCount * 3);
    const normals = new Float32Array(vertexCount * 3);
    let w = 0;
    const put = (x, y, z, nx, ny, nz)=>{
        positions[w] = x;
        positions[w + 1] = y;
        positions[w + 2] = z;
        normals[w] = nx;
        normals[w + 1] = ny;
        normals[w + 2] = nz;
        w += 3;
    };
    // Vorder- und Rückseite
    for(let t = 0; t < triCount; t += 1){
        for(let e = 0; e < 3; e += 1)put(pos.getX(t * 3 + e), pos.getY(t * 3 + e), 0, 0, 0, 1);
    }
    for(let t = 0; t < triCount; t += 1){
        for(let e = 2; e >= 0; e -= 1)put(pos.getX(t * 3 + e), pos.getY(t * 3 + e), -1, 0, 0, -1);
    }
    // Wände: Kante a→b läuft gegen den Uhrzeigersinn um ihr Dreieck, außen liegt rechts (dy, -dx)
    for (const { ax, ay, bx, by } of border){
        const dx = bx - ax;
        const dy = by - ay;
        const l = Math.hypot(dx, dy) || 1;
        const nx = dy / l;
        const ny = -dx / l;
        put(ax, ay, 0, nx, ny, 0);
        put(ax, ay, -1, nx, ny, 0);
        put(bx, by, 0, nx, ny, 0);
        put(bx, by, 0, nx, ny, 0);
        put(ax, ay, -1, nx, ny, 0);
        put(bx, by, -1, nx, ny, 0);
    }
    const out = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferGeometry"]();
    out.setAttribute('position', new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferAttribute"](positions, 3));
    out.setAttribute('normal', new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferAttribute"](normals, 3));
    out.computeBoundingSphere();
    cache.set(flat, out);
    return out;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/scene3d/flakeGeometry.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildPolygonExtrudeGeometry",
    ()=>buildPolygonExtrudeGeometry,
    "getArchetypeGeometry",
    ()=>getArchetypeGeometry,
    "hashStringToSeed",
    ()=>hashStringToSeed,
    "mulberry32",
    ()=>mulberry32
]);
/**
 * Archetyp-Geometrien der Flakes (#1455) — aus dem Material3DRenderer
 * verschoben, damit Renderer und Imagefilm dieselben Formen teilen. Alles
 * deterministisch: Hash → PRNG → Jitter, gecacht je Typ und Variante.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
;
function mulberry32(seed) {
    let a = seed >>> 0;
    return ()=>{
        a = a + 0x6d2b79f5 | 0;
        let t = Math.imul(a ^ a >>> 15, 1 | a);
        t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
        return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
}
function hashStringToSeed(str) {
    let h = 2166136261;
    for(let i = 0; i < str.length; i += 1){
        h ^= str.charCodeAt(i);
        h = Math.imul(h, 16777619);
    }
    return h >>> 0;
}
function buildPolygonExtrudeGeometry(rng, vertexCount, jitter, depth, bevelSize) {
    const baseRadius = 0.5;
    const shape = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Shape"]();
    for(let i = 0; i < vertexCount; i += 1){
        const angle = i / vertexCount * Math.PI * 2;
        const r = baseRadius * (1 + (rng() - 0.5) * 2 * jitter);
        const x = Math.cos(angle) * r;
        const y = Math.sin(angle) * r;
        if (i === 0) shape.moveTo(x, y);
        else shape.lineTo(x, y);
    }
    shape.closePath();
    const geometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExtrudeGeometry"](shape, {
        depth,
        bevelEnabled: true,
        bevelThickness: 0.02,
        bevelSize,
        bevelSegments: 1
    });
    geometry.rotateX(-Math.PI / 2);
    geometry.center();
    return geometry;
}
const archetypeGeometryCache = new Map();
function getArchetypeGeometry(type, variant) {
    const cacheKey = `${type}:${variant}`;
    const cached = archetypeGeometryCache.get(cacheKey);
    if (cached) return cached;
    const rng = mulberry32(hashStringToSeed(cacheKey));
    let geometry;
    if (type === 'shard') {
        // 6–8 Ecken, gezackt, dünn extrudiert, scharfe Fase
        const vertexCount = 6 + Math.floor(rng() * 3);
        geometry = buildPolygonExtrudeGeometry(rng, vertexCount, 0.35, 0.12, 0.02);
    } else if (type === 'chip') {
        // 5 Ecken, fast regelmäßig, dünner, rundere Fase
        geometry = buildPolygonExtrudeGeometry(rng, 5, 0.12, 0.08, 0.04);
    } else {
        // lump: radial verschobener Ikosaeder (80 Dreiecke). PolyhedronGeometry ist
        // nicht indiziert; Verschiebung je eindeutiger Position hält zusammenfallende
        // Vertices zusammen (keine Risse, kein mergeVertices nötig).
        geometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IcosahedronGeometry"](0.5, 1);
        const pos = geometry.getAttribute('position');
        const factorByVertex = new Map();
        const v = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
        for(let i = 0; i < pos.count; i += 1){
            v.fromBufferAttribute(pos, i);
            const posKey = `${v.x.toFixed(4)},${v.y.toFixed(4)},${v.z.toFixed(4)}`;
            let factor = factorByVertex.get(posKey);
            if (factor === undefined) {
                factor = 1 + (rng() - 0.5) * 2 * 0.18;
                factorByVertex.set(posKey, factor);
            }
            v.multiplyScalar(factor);
            pos.setXYZ(i, v.x, v.y, v.z);
        }
        geometry.computeVertexNormals();
        geometry.center();
    }
    archetypeGeometryCache.set(cacheKey, geometry);
    return geometry;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/scene3d/hexGeometry.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HEX_CORNER_RATIO",
    ()=>HEX_CORNER_RATIO,
    "hexBoundaryPoint",
    ()=>hexBoundaryPoint,
    "hexOutlinePoints",
    ()=>hexOutlinePoints,
    "hexRoundedVertices",
    ()=>hexRoundedVertices,
    "hexShape",
    ()=>hexShape,
    "hexVertices",
    ()=>hexVertices,
    "hexWallSegments",
    ()=>hexWallSegments
]);
/**
 * Sechseck-Geometrie als reine Daten (#1455) — Eckpunkte, Wandsegmente für
 * Kollider und Konturen für Strichpfade. Ohne Canvas, ohne React; three nur
 * für `THREE.Shape`.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
;
const hexVertices = (radius, offsetRad = 0)=>Array.from({
        length: 6
    }, (_, i)=>{
        const a = Math.PI / 3 * i + offsetRad;
        return [
            Math.cos(a) * radius,
            Math.sin(a) * radius
        ];
    });
const HEX_CORNER_RATIO = 0.114;
/** Stücke je Eckbogen */ const CORNER_SEGMENTS = 6;
const hexRoundedVertices = (radius, offsetRad = 0, corner = HEX_CORNER_RATIO)=>{
    if (!(corner > 0)) return hexVertices(radius, offsetRad);
    const r = radius * corner;
    // der Bogenmittelpunkt liegt r / cos 30° vor der scharfen Ecke
    const center = radius - r / Math.cos(Math.PI / 6);
    const out = [];
    for(let i = 0; i < 6; i += 1){
        const a = Math.PI / 3 * i + offsetRad;
        const cx = Math.cos(a) * center;
        const cy = Math.sin(a) * center;
        for(let s = 0; s <= CORNER_SEGMENTS; s += 1){
            const phi = a - Math.PI / 6 + Math.PI / 3 * s / CORNER_SEGMENTS;
            out.push([
                cx + Math.cos(phi) * r,
                cy + Math.sin(phi) * r
            ]);
        }
    }
    return out;
};
const hexWallSegments = (radius, offsetRad = Math.PI / 6)=>Array.from({
        length: 6
    }, (_, i)=>{
        const a1 = Math.PI / 3 * i + offsetRad;
        const a2 = Math.PI / 3 * ((i + 1) % 6) + offsetRad;
        const x1 = Math.cos(a1) * radius;
        const z1 = Math.sin(a1) * radius;
        const x2 = Math.cos(a2) * radius;
        const z2 = Math.sin(a2) * radius;
        return {
            mx: (x1 + x2) / 2,
            mz: (z1 + z2) / 2,
            angle: Math.atan2(z2 - z1, x2 - x1),
            len: Math.hypot(x2 - x1, z2 - z1)
        };
    });
const hexOutlinePoints = (radius, closed = true, offsetRad = 0, corner = HEX_CORNER_RATIO)=>{
    const pts = hexRoundedVertices(radius, offsetRad, corner).map(([x, y])=>[
            x,
            y,
            0
        ]);
    return closed ? [
        ...pts,
        pts[0]
    ] : pts;
};
const hexBoundaryPoint = (radius, angle)=>{
    const sector = Math.PI / 3;
    const apothem = radius * Math.cos(Math.PI / 6);
    // Winkelabstand zur nächsten Kantennormale (Normalen bei 0° + k·60°)
    const offset = ((angle + sector / 2) % sector + sector) % sector - sector / 2;
    const r = apothem / Math.cos(offset);
    return [
        Math.cos(angle) * r,
        Math.sin(angle) * r,
        0
    ];
};
const hexShape = (radius, offsetRad = 0, corner = HEX_CORNER_RATIO)=>{
    const shape = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Shape"]();
    hexRoundedVertices(radius, offsetRad, corner).forEach(([x, y], i)=>{
        if (i === 0) shape.moveTo(x, y);
        else shape.lineTo(x, y);
    });
    shape.closePath();
    return shape;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/scene3d/hexMosaic.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EUROPE_MASK",
    ()=>EUROPE_MASK,
    "GERMANY_MASK",
    ()=>GERMANY_MASK,
    "cellCenter",
    ()=>cellCenter,
    "cellNeighbors",
    ()=>cellNeighbors,
    "mosaicCells",
    ()=>mosaicCells,
    "mosaicOutline",
    ()=>mosaicOutline,
    "offsetOutline",
    ()=>offsetOutline,
    "routeCells",
    ()=>routeCells
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$hexRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/scene3d/hexRoute.ts [app-client] (ecmascript)");
;
const EUROPE_MASK = [
    '...........##.........',
    '..........##..........',
    '..........##..........',
    '........##............',
    '........###...#.......',
    '.......###..##........',
    '.......####..##.......',
    '....#..###..###.......',
    '...###...####.######..',
    '..###..#############..',
    '.......#############..',
    '.....##############...',
    '......##############..',
    '...#####.##.####.#....',
    '....####...#...###....',
    '....##....##...##.....',
    '....#......#...#......'
];
const GERMANY_MASK = [
    '...##.......',
    '...##..#....',
    '.##.######..',
    '.##########.',
    '.##########.',
    '###########.',
    '###########.',
    '###########.',
    '##########..',
    '.########...',
    '.########...',
    '..#######...',
    '..########..',
    '..########..',
    '..########..',
    '..##.####...'
];
const mosaicCells = (mask, radius)=>{
    const w = Math.sqrt(3) * radius;
    const h = 1.5 * radius;
    const raw = [];
    mask.forEach((line, row)=>{
        ;
        [
            ...line
        ].forEach((ch, col)=>{
            if (ch !== '#') return;
            raw.push({
                col,
                row,
                x: col * w + (row % 2 === 1 ? w / 2 : 0),
                y: -row * h
            });
        });
    });
    const xs = raw.map((c)=>c.x);
    const ys = raw.map((c)=>c.y);
    const cx = (Math.min(...xs) + Math.max(...xs)) / 2;
    const cy = (Math.min(...ys) + Math.max(...ys)) / 2;
    const centered = raw.map((c)=>({
            ...c,
            x: c.x - cx,
            y: c.y - cy
        }));
    const ranked = [
        ...centered
    ].sort((a, b)=>Math.hypot(a.x, a.y) - Math.hypot(b.x, b.y));
    return centered.map((c)=>({
            ...c,
            order: ranked.indexOf(c)
        }));
};
const cellCenter = (cells, col, row)=>{
    const c = cells.find((cell)=>cell.col === col && cell.row === row);
    if (!c) throw new Error(`Keine Wabe bei Spalte ${col}, Reihe ${row}`);
    return [
        c.x,
        c.y
    ];
};
const cellNeighbors = (col, row)=>{
    const shift = row % 2 === 1 ? 0 : -1;
    return [
        [
            col - 1,
            row
        ],
        [
            col + 1,
            row
        ],
        [
            col + shift,
            row - 1
        ],
        [
            col + shift + 1,
            row - 1
        ],
        [
            col + shift,
            row + 1
        ],
        [
            col + shift + 1,
            row + 1
        ]
    ];
};
const routeCells = (cells, waypoints)=>{
    const key = (col, row)=>`${col},${row}`;
    const byKey = new Map(cells.map((c)=>[
            key(c.col, c.row),
            c
        ]));
    const at = (col, row)=>{
        const c = byKey.get(key(col, row));
        if (!c) throw new Error(`Keine Wabe bei Spalte ${col}, Reihe ${row}`);
        return c;
    };
    const leg = (from, to)=>{
        const straight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$hexRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexLine"])(from, to).map(([c, r])=>byKey.get(key(c, r)));
        if (straight.every((c)=>c !== undefined)) return straight;
        const prev = new Map([
            [
                key(from.col, from.row),
                null
            ]
        ]);
        const queue = [
            from
        ];
        for(let i = 0; i < queue.length; i++){
            const cur = queue[i];
            if (cur === to) break;
            const next = cellNeighbors(cur.col, cur.row).map(([c, r])=>byKey.get(key(c, r))).filter((c)=>c !== undefined && !prev.has(key(c.col, c.row))).sort((a, b)=>Math.hypot(a.x - to.x, a.y - to.y) - Math.hypot(b.x - to.x, b.y - to.y));
            for (const n of next){
                prev.set(key(n.col, n.row), cur);
                queue.push(n);
            }
        }
        if (!prev.has(key(to.col, to.row))) return [
            from,
            to
        ];
        const path = [];
        for(let c = to; c; c = prev.get(key(c.col, c.row)))path.unshift(c);
        return path;
    };
    const stops = waypoints.map(([c, r])=>at(c, r));
    const out = stops.slice(0, 1);
    for(let i = 1; i < stops.length; i++)out.push(...leg(stops[i - 1], stops[i]).slice(1));
    return out;
};
/** Höhe der Kontur über den Waben (die liegen bei z = 0) */ const OUTLINE_Z = 0.01;
const mosaicOutline = (cells, radius)=>{
    // Ecken liegen auf einem festen Gitter (x in Viertel-Wabenbreiten, y in
    // Viertelradien — das Zentrieren verschiebt um halbe Schritte) — auf das Gitter runden statt auf
    // feste Nachkommastellen: dort fiel je nach Radius eine Ecke auf die
    // Rundungsgrenze und die Kontur zerfiel in Stücke (#1513, Radius 0,175)
    const stepX = Math.sqrt(3) * radius / 4;
    const stepY = radius / 4;
    const key = (x, y)=>`${Math.round(x / stepX)},${Math.round(y / stepY)}`;
    const points = new Map();
    const edges = new Map();
    for (const c of cells){
        const ids = [];
        for(let i = 0; i < 6; i++){
            const a = Math.PI / 6 + Math.PI / 3 * i;
            const x = c.x + Math.cos(a) * radius;
            const y = c.y + Math.sin(a) * radius;
            const id = key(x, y);
            if (!points.has(id)) points.set(id, [
                x,
                y,
                OUTLINE_Z
            ]);
            ids.push(id);
        }
        for(let i = 0; i < 6; i++){
            const from = ids[i];
            const to = ids[(i + 1) % 6];
            const undirected = from < to ? `${from}|${to}` : `${to}|${from}`;
            const edge = edges.get(undirected);
            if (edge) edge.count++;
            else edges.set(undirected, {
                from,
                to,
                count: 1
            });
        }
    }
    // Randkanten gerichtet: Startecke → Endecke
    const next = new Map();
    for (const e of edges.values())if (e.count === 1) next.set(e.from, e.to);
    const loops = [];
    const done = new Set();
    for (const start of next.keys()){
        if (done.has(start)) continue;
        const loop = [];
        let at = start;
        while(at !== undefined && !done.has(at)){
            done.add(at);
            loop.push(points.get(at));
            at = next.get(at);
        }
        loop.push(loop[0]);
        loops.push(loop);
    }
    return loops;
};
const offsetOutline = (loop, distance)=>{
    const pts = loop.slice(0, -1);
    const n = pts.length;
    if (n < 3 || distance === 0) return loop.map((p)=>[
            ...p
        ]);
    let area = 0;
    for(let i = 0; i < n; i++){
        const [x1, y1] = pts[i];
        const [x2, y2] = pts[(i + 1) % n];
        area += x1 * y2 - x2 * y1;
    }
    // gegen den Uhrzeigersinn: außen liegt rechts der Laufrichtung
    const side = area > 0 ? 1 : -1;
    const normal = (a, b)=>{
        const dx = b[0] - a[0];
        const dy = b[1] - a[1];
        const len = Math.hypot(dx, dy) || 1;
        return [
            dy / len * side,
            -dx / len * side
        ];
    };
    const out = pts.map((p, i)=>{
        const [ax, ay] = normal(pts[(i - 1 + n) % n], p);
        const [bx, by] = normal(p, pts[(i + 1) % n]);
        const k = distance / (1 + ax * bx + ay * by);
        return [
            p[0] + (ax + bx) * k,
            p[1] + (ay + by) * k,
            p[2]
        ];
    });
    out.push(out[0]);
    return out;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/scene3d/hexRoute.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HEX_TILE_SHARE",
    ()=>HEX_TILE_SHARE,
    "PULSE_PERIOD",
    ()=>PULSE_PERIOD,
    "hexLine",
    ()=>hexLine,
    "latticeCellAt",
    ()=>latticeCellAt,
    "latticeXY",
    ()=>latticeXY,
    "routeArrived",
    ()=>routeArrived,
    "routePulse",
    ()=>routePulse,
    "routeReached",
    ()=>routeReached,
    "routeReveal",
    ()=>routeReveal,
    "routeSteps",
    ()=>routeSteps
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$fray$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/hex/fray.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/motion/easing.ts [app-client] (ecmascript)");
;
;
const HEX_TILE_SHARE = 0.86;
const latticeXY = (col, row, radius)=>{
    const w = Math.sqrt(3) * radius;
    // 0 − … statt −…: sonst steht in Reihe 0 eine negative Null
    return [
        col * w + ((row & 1) === 1 ? w / 2 : 0),
        0 - row * 1.5 * radius
    ];
};
const latticeCellAt = (x, y, radius)=>{
    const row = Math.round(-y / (1.5 * radius));
    const w = Math.sqrt(3) * radius;
    const col = Math.round((x - ((row & 1) === 1 ? w / 2 : 0)) / w);
    // + 0: keine negative Null
    return [
        col + 0,
        row + 0
    ];
};
const hexLine = (a, b)=>{
    const cube = (col, row)=>{
        const x = col - (row - (row & 1)) / 2;
        return [
            x,
            -x - row,
            row
        ];
    };
    const [ax, ay, az] = cube(a.col, a.row);
    const [bx, by, bz] = cube(b.col, b.row);
    const n = Math.max(Math.abs(ax - bx), Math.abs(ay - by), Math.abs(az - bz));
    const out = [];
    for(let i = 0; i <= n; i++){
        const t = n === 0 ? 0 : i / n;
        // kleiner Versatz: Punkte genau auf einer Kante fallen immer auf dieselbe Seite
        const fx = ax + (bx - ax) * t + 1e-6;
        const fy = ay + (by - ay) * t + 2e-6;
        const fz = az + (bz - az) * t - 3e-6;
        let rx = Math.round(fx);
        let ry = Math.round(fy);
        let rz = Math.round(fz);
        const dx = Math.abs(rx - fx);
        const dy = Math.abs(ry - fy);
        const dz = Math.abs(rz - fz);
        if (dx > dy && dx > dz) rx = -ry - rz;
        else if (dy > dz) ry = -rx - rz;
        else rz = -rx - ry;
        // + 0: keine negative Null in den Zellkoordinaten
        out.push([
            rx + (rz - (rz & 1)) / 2 + 0,
            rz + 0
        ]);
    }
    return out;
};
const routeSteps = (progress, count)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp01"])(progress) * Math.max(0, count - 1);
const routeReached = (progress, k, count)=>progress > 0 && k <= routeSteps(progress, count) + 1e-6;
const routeReveal = (k, steps, cell)=>{
    const ahead = k - steps;
    if (ahead <= 0) return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$fray$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_FRAY_STEPS"][0];
    // der Versatz wächst mit dem Abstand zur Front: direkt an ihr reißt die Deckung nicht ab
    const jitter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$fray$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cellNoise"])({
        col: cell[0],
        row: cell[1]
    }) * __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$fray$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_FRAY_JITTER"] * Math.min(1, ahead);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$fray$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stepAt"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$fray$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_FRAY_STEPS"], Math.max(0, ahead + jitter));
};
const PULSE_PERIOD = 4;
const routePulse = (k, phase, period = PULSE_PERIOD)=>{
    const wave = 0.5 + 0.5 * Math.cos(2 * Math.PI * (k - phase) / period);
    // quadriert: kürzere helle Striche, längere Lücken
    return wave * wave;
};
const routeArrived = (progress)=>progress >= 1 - 1e-6;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/scene3d/pour.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Schüttung in eine aufrechte Wabe (#1458) — reine Daten für die Pellet-Szene
 * des Imagefilms: deterministische Startplätze je Welle und die Wände einer
 * spitz stehenden Wabe in der Bildebene (Schwerkraft −y, Tiefe entlang z).
 */ __turbopack_context__.s([
    "pourFlakes",
    ()=>pourFlakes,
    "restingLayout",
    ()=>restingLayout,
    "uprightHexWalls",
    ()=>uprightHexWalls
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$flakeGeometry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/scene3d/flakeGeometry.ts [app-client] (ecmascript)");
;
const pourFlakes = (o)=>{
    const out = [];
    for(let i = o.batch; i < o.count; i += o.batches){
        const rng = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$flakeGeometry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mulberry32"])(o.seed * 7919 + i);
        const s = o.sizeRange[0] + rng() * (o.sizeRange[1] - o.sizeRange[0]);
        out.push({
            id: `pour-${o.seed}-${i}`,
            position: [
                (rng() - 0.5) * 0.8 * o.radius,
                (0.25 + rng() * 0.45) * o.radius,
                (rng() - 0.5) * 0.6 * o.depth
            ],
            rotation: [
                rng() * Math.PI,
                rng() * Math.PI * 2,
                rng() * Math.PI
            ],
            scale: [
                s,
                s * 0.85,
                s
            ],
            color: o.colors[Math.floor(rng() * o.colors.length) % o.colors.length],
            isContamination: false,
            mass: 0.05,
            createdAt: 0,
            geometryType: o.geometryType,
            geometryVariant: 0,
            opacity: 1
        });
    }
    return out;
};
const uprightHexWalls = (radius)=>Array.from({
        length: 6
    }, (_, i)=>{
        const a1 = Math.PI / 6 + Math.PI / 3 * i;
        const a2 = Math.PI / 6 + Math.PI / 3 * (i + 1);
        const x1 = Math.cos(a1) * radius;
        const y1 = Math.sin(a1) * radius;
        const x2 = Math.cos(a2) * radius;
        const y2 = Math.sin(a2) * radius;
        return {
            x: (x1 + x2) / 2,
            y: (y1 + y2) / 2,
            angle: Math.atan2(y2 - y1, x2 - x1),
            len: Math.hypot(x2 - x1, y2 - y1)
        };
    });
const restingLayout = (flakes, radius, depth)=>{
    const d = Math.max(0.01, ...flakes.map((f)=>f.scale[0]));
    const slope = Math.tan(Math.PI / 3);
    const halfWidth = (y)=>y < -radius / 2 ? (y + radius) * slope : radius * Math.cos(Math.PI / 6);
    const zs = [
        -depth * 0.2,
        depth * 0.2
    ];
    const out = [];
    let y = -radius + d * 1.1;
    let i = 0;
    while(i < flakes.length){
        const w = halfWidth(y - d / 2) - d * 0.55;
        const perRow = Math.max(1, Math.floor(2 * w / d) + 1);
        for (const z of zs){
            for(let k = 0; k < perRow && i < flakes.length; k += 1){
                const x = perRow === 1 ? 0 : -w + 2 * w * k / (perRow - 1);
                out.push({
                    ...flakes[i],
                    position: [
                        x,
                        y,
                        z
                    ]
                });
                i += 1;
            }
        }
        y += d * 0.9;
    }
    return out;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/scene3d/ranking.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Rangliste als Bewegung (#1497): die Lage je Gruppe beim Umsortieren kommt
 * aus der Szene (Imagefilm `stage/rankLayout.ts`); hier nur das Atmen der
 * Messbalken.
 */ /** Messbalken, der ruhig atmet: 75–100 % der Grundhöhe */ __turbopack_context__.s([
    "pulsedHeight",
    ()=>pulsedHeight
]);
const pulsedHeight = (base, phase, offset)=>base * (0.75 + 0.25 * (0.5 + 0.5 * Math.sin(phase + offset)));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/scene3d/seal.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sealScale",
    ()=>sealScale
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/motion/easing.ts [app-client] (ecmascript)");
;
const sealScale = (p)=>{
    if (p <= 0.55) return 0;
    if (p <= 0.8) return 1.15 * (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_OUT"])((p - 0.55) / 0.25);
    if (p < 1) return 1.15 - 0.15 * ((p - 0.8) / 0.2);
    return 1;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/scene3d/shapes2d.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Linienzüge in der XY-Ebene (z = 0) für Striche mit Zeichenfortschritt (#1461):
 * Länge, abgerundetes Rechteck (Monitorrahmen), Kreisbogen (Pfeile).
 */ __turbopack_context__.s([
    "arcPoints",
    ()=>arcPoints,
    "pointAlongPolyline",
    ()=>pointAlongPolyline,
    "polylineLength",
    ()=>polylineLength,
    "roundedRectPoints",
    ()=>roundedRectPoints
]);
const polylineLength = (points)=>{
    let sum = 0;
    for(let i = 1; i < points.length; i += 1){
        const [x1, y1, z1] = points[i - 1];
        const [x2, y2, z2] = points[i];
        sum += Math.hypot(x2 - x1, y2 - y1, z2 - z1);
    }
    return sum;
};
const pointAlongPolyline = (points, u)=>{
    if (points.length === 0) return [
        0,
        0,
        0
    ];
    const total = polylineLength(points);
    if (!(u > 0) || total === 0) return [
        ...points[0]
    ];
    if (u >= 1) return [
        ...points[points.length - 1]
    ];
    let remaining = u * total;
    for(let i = 1; i < points.length; i += 1){
        const a = points[i - 1];
        const b = points[i];
        const seg = Math.hypot(b[0] - a[0], b[1] - a[1], b[2] - a[2]);
        if (remaining <= seg) {
            const t = seg === 0 ? 0 : remaining / seg;
            return [
                a[0] + (b[0] - a[0]) * t,
                a[1] + (b[1] - a[1]) * t,
                a[2] + (b[2] - a[2]) * t
            ];
        }
        remaining -= seg;
    }
    return [
        ...points[points.length - 1]
    ];
};
const arcPoints = (radius, start, end, segments)=>Array.from({
        length: segments + 1
    }, (_, i)=>{
        const a = start + (end - start) * i / segments;
        return [
            Math.cos(a) * radius,
            Math.sin(a) * radius,
            0
        ];
    });
const roundedRectPoints = (width, height, radius, segmentsPerCorner = 6)=>{
    const hw = width / 2;
    const hh = height / 2;
    if (radius <= 0) {
        const corners = [
            [
                hw,
                hh,
                0
            ],
            [
                -hw,
                hh,
                0
            ],
            [
                -hw,
                -hh,
                0
            ],
            [
                hw,
                -hh,
                0
            ]
        ];
        return [
            ...corners,
            corners[0]
        ];
    }
    const r = Math.min(radius, hw, hh);
    const centers = [
        [
            hw - r,
            hh - r,
            0
        ],
        [
            -hw + r,
            hh - r,
            0
        ],
        [
            -hw + r,
            -hh + r,
            Math.PI
        ],
        [
            hw - r,
            -hh + r,
            Math.PI * 1.5
        ]
    ];
    const pts = [];
    centers.forEach(([cx, cy], i)=>{
        const start = Math.PI / 2 * i;
        for (const [x, y] of arcPoints(r, start, start + Math.PI / 2, segmentsPerCorner))pts.push([
            cx + x,
            cy + y,
            0
        ]);
    });
    pts.push(pts[0]);
    return pts;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/scene3d/svgShapes.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseSvgShapes",
    ()=>parseSvgShapes,
    "svgParts",
    ()=>svgParts
]);
/**
 * SVG → three-Formen (#1455): Füllungen als `THREE.Shape`, Striche als fertige
 * Strich-Geometrie über `SVGLoader.pointsToStroke`. Elemente mit
 * `class="accent"` werden markiert, damit ein Icon zwei Farben tragen kann
 * (navy Grundform, grüner Akzent wie im Imagefilm).
 *
 * Braucht einen DOMParser (Browser oder jsdom) — der SVGLoader parst per DOM.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$loaders$2f$SVGLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/examples/jsm/loaders/SVGLoader.js [app-client] (ecmascript)");
;
;
const viewBoxOf = (svgText)=>{
    const m = /viewBox\s*=\s*"([^"]+)"/i.exec(svgText);
    if (!m) return {
        x: 0,
        y: 0,
        width: 100,
        height: 100
    };
    const parts = m[1].trim().split(/[\s,]+/).map(Number);
    return {
        x: parts[0] || 0,
        y: parts[1] || 0,
        width: parts[2] || 100,
        height: parts[3] || 100
    };
};
const isAccent = (node)=>!!node && (node.getAttribute('class') ?? '').split(/\s+/).includes('accent');
const parseSvgShapes = (svgText)=>{
    const loader = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$loaders$2f$SVGLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SVGLoader"]();
    const data = loader.parse(svgText);
    const fills = [];
    const strokes = [];
    for (const path of data.paths){
        const style = path.userData?.style;
        const node = path.userData?.node;
        const accent = isAccent(node);
        const fill = style?.fill;
        const stroke = style?.stroke;
        const fillColor = typeof fill === 'string' ? fill : 'currentColor';
        const strokeColor = typeof stroke === 'string' ? stroke : 'currentColor';
        if (fill !== undefined && fill !== 'none') {
            for (const shape of __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$loaders$2f$SVGLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SVGLoader"].createShapes(path))fills.push({
                shape,
                color: fillColor,
                accent
            });
        }
        if (stroke !== undefined && stroke !== 'none') {
            for (const subPath of path.subPaths){
                const geometry = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$loaders$2f$SVGLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SVGLoader"].pointsToStroke(subPath.getPoints(), path.userData.style);
                if (geometry) strokes.push({
                    geometry,
                    color: strokeColor,
                    accent
                });
            }
        }
    }
    return {
        fills,
        strokes,
        ...viewBoxOf(svgText)
    };
};
const partsCache = new Map();
const positionsOnly = (geometry)=>{
    const flat = geometry.index ? geometry.toNonIndexed() : geometry;
    const out = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferGeometry"]();
    out.setAttribute('position', flat.getAttribute('position'));
    return out;
};
const mergePositions = (geometries)=>{
    const arrays = geometries.map((g)=>g.getAttribute('position').array);
    const merged = new Float32Array(arrays.reduce((n, a)=>n + a.length, 0));
    let offset = 0;
    for (const a of arrays){
        merged.set(a, offset);
        offset += a.length;
    }
    const out = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferGeometry"]();
    out.setAttribute('position', new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferAttribute"](merged, 3));
    out.computeBoundingSphere();
    return out;
};
const svgParts = (svgText, keepColors = false)=>{
    const key = `${keepColors ? 1 : 0}|${svgText}`;
    const hit = partsCache.get(key);
    if (hit) return hit;
    const parsed = parseSvgShapes(svgText);
    const groups = new Map();
    const add = (geometry, accent, fileColor)=>{
        const role = keepColors && fileColor !== 'currentColor' ? 'file' : accent ? 'accent' : 'base';
        const id = role === 'file' ? `file:${fileColor}` : role;
        const group = groups.get(id) ?? {
            role,
            fileColor,
            geometries: []
        };
        group.geometries.push(positionsOnly(geometry));
        groups.set(id, group);
    };
    for (const f of parsed.fills)add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShapeGeometry"](f.shape), f.accent, f.color);
    for (const s of parsed.strokes)add(s.geometry, s.accent, s.color);
    const result = {
        parts: [
            ...groups.values()
        ].map((g)=>({
                role: g.role,
                fileColor: g.fileColor,
                geometry: mergePositions(g.geometries)
            })),
        x: parsed.x,
        y: parsed.y,
        width: parsed.width,
        height: parsed.height
    };
    partsCache.set(key, result);
    return result;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/scene3d/tubePath.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Röhre entlang eines Linienzugs (#1513) — die beleuchtete Linie der
 * Szenenbausteine. Ecken sind auf Gehrung geschnitten (der Ring an der Ecke
 * steht auf der Winkelhalbierenden und ist gestreckt), geschlossene Züge
 * schließen nahtlos. Die Ringe liegen in kurzen Schritten entlang des Zugs und
 * die Dreiecke in Zugrichtung: das Einzeichnen ist ein Zeichenbereich
 * (drawRange) bis zum Schritt, der zur Bogenlänge passt — saubere Ecken auch
 * mitten im Einzeichnen.
 *
 * Positionen = Mitte + Radius · Versatz; `center` und `offset` bleiben
 * erhalten, damit sich die Breite ohne neues Anlegen ändern lässt.
 */ __turbopack_context__.s([
    "buildTubePath",
    ()=>buildTubePath,
    "tubeDrawCount",
    ()=>tubeDrawCount,
    "writeTubePositions",
    ()=>writeTubePositions
]);
const sub = (a, b)=>[
        a[0] - b[0],
        a[1] - b[1],
        a[2] - b[2]
    ];
const len = (a)=>Math.hypot(a[0], a[1], a[2]);
const norm = (a)=>{
    const l = len(a);
    return l > 1e-12 ? [
        a[0] / l,
        a[1] / l,
        a[2] / l
    ] : [
        0,
        0,
        0
    ];
};
const cross = (a, b)=>[
        a[1] * b[2] - a[2] * b[1],
        a[2] * b[0] - a[0] * b[2],
        a[0] * b[1] - a[1] * b[0]
    ];
const dot = (a, b)=>a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
/** Seitenvektor in der Bildebene (Züge liegen meist in xy); senkrechte Züge nehmen x */ const sideOf = (t)=>Math.abs(t[2]) > 0.99 ? [
        1,
        0,
        0
    ] : norm(cross(t, [
        0,
        0,
        1
    ]));
/** Größte Streckung an spitzen Ecken (sonst schießt die Gehrung ins Unendliche) */ const MAX_MITER = 2.5;
const buildTubePath = (points, options = {})=>{
    const radial = Math.max(3, options.radial ?? 8);
    const step = options.step ?? 0.05;
    // doppelte Punkte entfernen
    const pts = [];
    for (const p of points)if (pts.length === 0 || len(sub(p, pts[pts.length - 1])) > 1e-9) pts.push(p);
    const segs = pts.length - 1;
    if (segs < 1) {
        return {
            center: new Float32Array(0),
            offset: new Float32Array(0),
            normal: new Float32Array(0),
            index: new Uint32Array(0),
            stepEnds: new Float32Array(0),
            indicesPerStep: radial * 6,
            length: 0,
            radial
        };
    }
    const closed = segs > 2 && len(sub(pts[0], pts[segs])) < 1e-6;
    const dirs = Array.from({
        length: segs
    }, (_, i)=>norm(sub(pts[i + 1], pts[i])));
    /** Rahmen am Punkt i: Tangente (Halbierende), Seite mit Gehrungsfaktor */ const vertexFrame = (i)=>{
        const prev = i > 0 ? dirs[i - 1] : closed ? dirs[segs - 1] : null;
        const next = i < segs ? dirs[i] : closed ? dirs[0] : null;
        const a = prev ?? next;
        const b = next ?? prev;
        let t = norm([
            a[0] + b[0],
            a[1] + b[1],
            a[2] + b[2]
        ]);
        if (len(t) < 1e-9) t = b;
        const miter = Math.min(MAX_MITER, 1 / Math.max(1 / MAX_MITER, dot(t, b)));
        return {
            t,
            side: sideOf(t),
            miter
        };
    };
    // Ringe: Punkt 0, dann je Strecke Zwischenringe und der Endpunkt
    const rings = [];
    let at = 0;
    const f0 = vertexFrame(0);
    rings.push({
        c: pts[0],
        ...f0,
        at
    });
    for(let i = 0; i < segs; i += 1){
        const a = pts[i];
        const d = sub(pts[i + 1], a);
        const l = len(d);
        const n = Math.max(1, Math.ceil(l / step));
        const segFrame = {
            t: dirs[i],
            side: sideOf(dirs[i]),
            miter: 1
        };
        for(let k = 1; k < n; k += 1){
            const s = k / n;
            rings.push({
                c: [
                    a[0] + d[0] * s,
                    a[1] + d[1] * s,
                    a[2] + d[2] * s
                ],
                ...segFrame,
                at: at + l * s
            });
        }
        at += l;
        rings.push({
            c: pts[i + 1],
            ...vertexFrame(i + 1),
            at
        });
    }
    const ringCount = rings.length;
    const verts = ringCount * radial;
    const center = new Float32Array(verts * 3);
    const offset = new Float32Array(verts * 3);
    const normal = new Float32Array(verts * 3);
    rings.forEach((r, k)=>{
        const up = norm(cross(r.side, r.t));
        for(let j = 0; j < radial; j += 1){
            const a = j / radial * Math.PI * 2;
            const cu = Math.cos(a);
            const su = Math.sin(a);
            const o = (k * radial + j) * 3;
            for(let q = 0; q < 3; q += 1){
                center[o + q] = r.c[q];
                offset[o + q] = up[q] * cu + r.side[q] * su * r.miter;
                normal[o + q] = up[q] * cu + r.side[q] * su;
            }
        }
    });
    const steps = ringCount - 1;
    const index = new Uint32Array(steps * radial * 6);
    const stepEnds = new Float32Array(steps);
    let w = 0;
    for(let k = 0; k < steps; k += 1){
        stepEnds[k] = rings[k + 1].at;
        for(let j = 0; j < radial; j += 1){
            const a = k * radial + j;
            const b = k * radial + (j + 1) % radial;
            const c = (k + 1) * radial + j;
            const d = (k + 1) * radial + (j + 1) % radial;
            // gegen den Uhrzeigersinn von außen gesehen: Normalen zeigen nach außen
            index[w++] = a;
            index[w++] = b;
            index[w++] = c;
            index[w++] = b;
            index[w++] = d;
            index[w++] = c;
        }
    }
    return {
        center,
        offset,
        normal,
        index,
        stepEnds,
        indicesPerStep: radial * 6,
        length: at,
        radial
    };
};
const writeTubePositions = (tube, radius, out)=>{
    const { center, offset } = tube;
    for(let i = 0; i < center.length; i += 1)out[i] = center[i] + offset[i] * radius;
    return out;
};
const tubeDrawCount = (tube, progress)=>{
    if (progress <= 0 || tube.length <= 0) return 0;
    if (progress >= 1) return tube.index.length;
    const target = progress * tube.length;
    // erster Schritt, dessen Ende hinter dem Ziel liegt; halbe Schritte runden
    let lo = 0;
    let hi = tube.stepEnds.length;
    while(lo < hi){
        const mid = lo + hi >> 1;
        if (tube.stepEnds[mid] < target) lo = mid + 1;
        else hi = mid;
    }
    const start = lo > 0 ? tube.stepEnds[lo - 1] : 0;
    const end = tube.stepEnds[lo] ?? tube.length;
    const steps = lo + (target - start >= (end - start) / 2 ? 1 : 0);
    return Math.min(tube.index.length, steps * tube.indicesPerStep);
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]})(),
"[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/FilmStage.tsx [app-client] (ecmascript, next/dynamic entry)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/FilmStage.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=apps_web_src_129p2kn1tnf42._.js.map