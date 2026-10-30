(()=>{"use strict";(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/apps/web/src/app/components/Molecule/CardGrid/CardGrid.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BalancedItem",
    ()=>BalancedItem,
    "BalancedList",
    ()=>BalancedList,
    "Item",
    ()=>Item,
    "List",
    ()=>List,
    "REVEAL_MS",
    ()=>REVEAL_MS,
    "REVEAL_STAGGER_MS",
    ()=>REVEAL_STAGGER_MS,
    "Root",
    ()=>Root,
    "revealList",
    ()=>revealList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
'use client';
;
/** Tailwind-Stufen der Quelle (sm, md, lg) — wie in assets/theme/site.ts */ const SM = '640px';
const MD = '768px';
const LG = '1024px';
const Root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].section.withConfig({
    displayName: "CardGrid.styles__Root",
    componentId: "sc-c6fe4948-0"
})`
  display: flex;
  flex-direction: column;
  gap: ${({ theme })=>theme.margin.large};
  width: 100%;
`;
const List = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ul.withConfig({
    displayName: "CardGrid.styles__List",
    componentId: "sc-c6fe4948-1"
})`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 16px;
  margin: 0;
  padding: 0;
  list-style: none;

  @media (min-width: ${SM}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  ${({ $columns })=>$columns >= 3 && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
      @media (min-width: ${MD}) {
        grid-template-columns: repeat(3, minmax(0, 1fr));
      }
    `}

  ${({ $columns })=>$columns === 4 && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
      @media (min-width: ${LG}) {
        grid-template-columns: repeat(4, minmax(0, 1fr));
      }
    `}
`;
const Item = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].li.withConfig({
    displayName: "CardGrid.styles__Item",
    componentId: "sc-c6fe4948-2"
})`
  min-width: 0;

  > * {
    height: 100%;
  }
`;
const BalancedList = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ul.withConfig({
    displayName: "CardGrid.styles__BalancedList",
    componentId: "sc-c6fe4948-3"
})`
  --cols: 1;
  --gap: ${({ theme })=>theme.margin.small};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--gap);
  margin: 0;
  padding: 0;
  list-style: none;

  @media (min-width: ${SM}) {
    --cols: ${({ $steps })=>$steps.sm};
  }

  @media (min-width: ${MD}) {
    --cols: ${({ $steps })=>$steps.md};
  }

  @media (min-width: ${LG}) {
    --cols: ${({ $steps })=>$steps.lg};
  }
`;
const BalancedItem = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].li.withConfig({
    displayName: "CardGrid.styles__BalancedItem",
    componentId: "sc-c6fe4948-4"
})`
  flex: 0 0 calc((100% - (var(--cols) - 1) * var(--gap)) / var(--cols));
  min-width: 0;

  &[data-wide='true'] {
    flex-basis: 100%;
  }

  > * {
    height: 100%;
  }
`;
const REVEAL_MS = 520;
const REVEAL_STAGGER_MS = 60;
/** So viele Karten bekommen eine eigene Verzögerung; danach kommen alle zugleich */ const REVEAL_STAGGER_MAX = 12;
const hexOpen = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframes"]`
  from {
    opacity: 0;
    clip-path: polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%);
  }
  40% {
    opacity: 1;
  }
  to {
    opacity: 1;
    /* Sechseck weit über die Karte hinaus: am Ende deckt es sie ganz */
    clip-path: polygon(50% -40%, 140% 5%, 140% 95%, 50% 140%, -40% 95%, -40% 5%);
  }
`;
const revealList = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
  &[data-state='idle'] > li {
    opacity: 0;
  }

  &[data-state='running'] > li {
    /* backwards: Startpose während der Verzögerung, danach ohne clip-path (Schatten) */
    animation: ${hexOpen} ${REVEAL_MS}ms cubic-bezier(0.2, 0.8, 0.2, 1) backwards;
  }

  ${Array.from({
    length: REVEAL_STAGGER_MAX
}, (_, i)=>`&[data-state='running'] > li:nth-child(${i + 1}) { animation-delay: ${i * REVEAL_STAGGER_MS}ms; }`).join('\n')}

  &[data-state='running'] > li:nth-child(n + ${REVEAL_STAGGER_MAX + 1}) {
    animation-delay: ${REVEAL_STAGGER_MAX * REVEAL_STAGGER_MS}ms;
  }

  @media (prefers-reduced-motion: reduce) {
    &[data-state] > li {
      animation: none;
      opacity: 1;
    }
  }
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/CardGrid/CardGrid.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CardGrid",
    ()=>CardGrid,
    "balancedSteps",
    ()=>balancedSteps
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$SiteSectionHeader$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/SiteSectionHeader/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$SiteSectionHeader$2f$SiteSectionHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/SiteSectionHeader/SiteSectionHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$CardGrid$2f$CardGrid$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/CardGrid/CardGrid.styles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$CardGrid$2f$balancedColumns$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/CardGrid/balancedColumns.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$CardGrid$2f$CardGridReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/CardGrid/CardGridReveal.tsx [app-client] (ecmascript)");
;
;
;
;
;
;
function balancedSteps(count, columns, wide) {
    const run = Math.max(1, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$CardGrid$2f$balancedColumns$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["longestRun"])(count, wide));
    return {
        sm: Math.min(2, run),
        md: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$CardGrid$2f$balancedColumns$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["balancedColumns"])(run, Math.min(3, columns)),
        lg: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$CardGrid$2f$balancedColumns$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["balancedColumns"])(run, columns)
    };
}
/**
 * Karten-Raster mit optionaler Überschrift: der zweithäufigste Sektionstyp auf plastship.com
 * (rund 40 von 246 gemessenen Sektionen). Seit #1199 wie die Quelle: Abschnittskopf
 * (`SiteSectionHeader`), 32 px darunter ein `ul.grid.gap-4` mit einer Karte je Zelle.
 */ const CardGrid = (props)=>{
    const { headline, description, headerAlign = 'left', columns = 3, children, balanced = false, wideItems, reveal = false, onFirstView, className, dataTestId = 'card-grid' } = props;
    const items = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Children.toArray(children);
    const wide = new Set(balanced ? wideItems ?? [] : []);
    const steps = balanced ? balancedSteps(items.length, columns, wide) : undefined;
    const ItemTag = balanced ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$CardGrid$2f$CardGrid$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BalancedItem"] : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$CardGrid$2f$CardGrid$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"];
    const cells = items.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ItemTag, {
            "data-testid": `${dataTestId}-item`,
            "data-wide": wide.has(index) ? 'true' : undefined,
            children: item
        }, index, false, {
            fileName: "[project]/apps/web/src/app/components/Molecule/CardGrid/CardGrid.tsx",
            lineNumber: 75,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$CardGrid$2f$CardGrid$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        className: className,
        "data-testid": dataTestId,
        "data-columns": columns,
        "data-cols-md": steps?.md,
        "data-cols-lg": steps?.lg,
        children: [
            (headline || description) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$SiteSectionHeader$2f$SiteSectionHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiteSectionHeader"], {
                headline: headline,
                description: description,
                align: headerAlign,
                dataTestId: `${dataTestId}-header`
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Molecule/CardGrid/CardGrid.tsx",
                lineNumber: 93,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            reveal ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$CardGrid$2f$CardGridReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardGridReveal"], {
                columns: columns,
                steps: steps,
                count: items.length,
                onFirstView: onFirstView,
                dataTestId: `${dataTestId}-list`,
                children: cells
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Molecule/CardGrid/CardGrid.tsx",
                lineNumber: 101,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)) : steps ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$CardGrid$2f$CardGrid$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BalancedList"], {
                $steps: steps,
                "data-testid": `${dataTestId}-list`,
                "data-balanced": "true",
                children: cells
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Molecule/CardGrid/CardGrid.tsx",
                lineNumber: 111,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$CardGrid$2f$CardGrid$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["List"], {
                $columns: columns,
                "data-testid": `${dataTestId}-list`,
                children: cells
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Molecule/CardGrid/CardGrid.tsx",
                lineNumber: 115,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Molecule/CardGrid/CardGrid.tsx",
        lineNumber: 85,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = CardGrid;
;
var _c;
__turbopack_context__.k.register(_c, "CardGrid");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/CardGrid/CardGridReveal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CardGridReveal",
    ()=>CardGridReveal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useEntranceAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/useEntranceAnimation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$CardGrid$2f$CardGrid$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/CardGrid/CardGrid.styles.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const RevealGrid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$CardGrid$2f$CardGrid$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["List"]).withConfig({
    displayName: "CardGridReveal__RevealGrid",
    componentId: "sc-d786b5b8-0"
})`
  ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$CardGrid$2f$CardGrid$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["revealList"]}
`;
_c = RevealGrid;
const RevealBalanced = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$CardGrid$2f$CardGrid$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BalancedList"]).withConfig({
    displayName: "CardGridReveal__RevealBalanced",
    componentId: "sc-d786b5b8-1"
})`
  ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$CardGrid$2f$CardGrid$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["revealList"]}
`;
_c1 = RevealBalanced;
function CardGridReveal({ columns, steps, count, onFirstView, dataTestId, children }) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { state, visible } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useEntranceAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEntranceAnimation"])(ref, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$CardGrid$2f$CardGrid$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["REVEAL_MS"] + Math.max(0, Math.min(count, 13) - 1) * __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$CardGrid$2f$CardGrid$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["REVEAL_STAGGER_MS"], 0.15);
    const viewHandler = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(onFirstView);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CardGridReveal.useEffect": ()=>{
            viewHandler.current = onFirstView;
        }
    }["CardGridReveal.useEffect"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CardGridReveal.useEffect": ()=>{
            if (visible) viewHandler.current?.();
        }
    }["CardGridReveal.useEffect"], [
        visible
    ]);
    const common = {
        ref,
        'data-testid': dataTestId,
        'data-state': state,
        'data-reveal': 'true'
    };
    return steps ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RevealBalanced, {
        ...common,
        $steps: steps,
        "data-balanced": "true",
        children: children
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Molecule/CardGrid/CardGridReveal.tsx",
        lineNumber: 55,
        columnNumber: 5
    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RevealGrid, {
        ...common,
        $columns: columns,
        children: children
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Molecule/CardGrid/CardGridReveal.tsx",
        lineNumber: 59,
        columnNumber: 5
    }, this);
}
_s(CardGridReveal, "jSRXArrCX6+aVJj8blJhWO+oF6E=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useEntranceAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEntranceAnimation"]
    ];
});
_c2 = CardGridReveal;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "RevealGrid");
__turbopack_context__.k.register(_c1, "RevealBalanced");
__turbopack_context__.k.register(_c2, "CardGridReveal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/CardGrid/balancedColumns.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * #2194 „kein Waisenkind": Spaltenzahl eines Kartenrasters aus der Zahl der
 * Karten und der gewünschten Spaltenzahl (2–4). Ziel: keine letzte Reihe mit
 * einer einzelnen Karte (5 → 3 + 2, nie 4 + 1), möglichst volle Reihen.
 * Kandidaten sind die gewünschte Zahl und ihre Nachbarn (2–4); bewertet wird
 * die letzte Reihe — voll ist am besten, eine einzelne Karte am schlechtesten,
 * sonst zählt die Lücke — plus die Abweichung von der gewünschten Zahl. Bei
 * Gleichstand gewinnt die gewünschte Zahl, dann die größere. Weniger Karten als Spalten: so viele Spalten wie Karten.
 * Rein, ohne DOM.
 */ __turbopack_context__.s([
    "BALANCED_MAX_COLUMNS",
    ()=>BALANCED_MAX_COLUMNS,
    "BALANCED_MIN_COLUMNS",
    ()=>BALANCED_MIN_COLUMNS,
    "balancedColumns",
    ()=>balancedColumns,
    "longestRun",
    ()=>longestRun
]);
const BALANCED_MIN_COLUMNS = 2;
const BALANCED_MAX_COLUMNS = 4;
function balancedColumns(count, wanted) {
    if (count <= 1) return 1;
    const ziel = Math.min(Math.max(wanted, BALANCED_MIN_COLUMNS), BALANCED_MAX_COLUMNS);
    if (count <= ziel) return count;
    const kandidaten = [
        ziel,
        ziel + 1,
        ziel - 1,
        ziel + 2,
        ziel - 2
    ].filter((k)=>k >= BALANCED_MIN_COLUMNS && k <= BALANCED_MAX_COLUMNS);
    const wertung = (k)=>{
        const rest = count % k;
        const reihe = rest === 0 ? 0 : rest === 1 ? 100 : k - rest;
        // Abweichung von der gewünschten Zahl kostet etwas mehr als eine Lücke
        return reihe + Math.abs(k - ziel) * 1.5;
    };
    return kandidaten.reduce((best, k)=>wertung(k) < wertung(best) ? k : best);
}
function longestRun(count, wide) {
    let best = 0;
    let run = 0;
    for(let i = 0; i < count; i++){
        if (wide.has(i)) {
            run = 0;
            continue;
        }
        run += 1;
        best = Math.max(best, run);
    }
    return best;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/CardGrid/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$CardGrid$2f$CardGrid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/CardGrid/CardGrid.tsx [app-client] (ecmascript)");
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$CardGrid$2f$CardGrid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardGrid"];
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/CardSpotlight/CardSpotlight.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Root",
    ()=>Root
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
'use client';
;
const Root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "CardSpotlight.styles__Root",
    componentId: "sc-5157933b-0"
})`
  position: absolute;
  inset: 0;
  z-index: -1;
  overflow: hidden;
  border-radius: 24px;
  pointer-events: none;
  --card-spot: color-mix(in srgb, ${({ theme })=>theme.palette.site.blue} 22%, transparent);

  @media (hover: none), (pointer: coarse), (prefers-reduced-motion: reduce) {
    display: none;
  }
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/CardSpotlight/CardSpotlight.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CARD_SPOT_COLUMNS",
    ()=>CARD_SPOT_COLUMNS,
    "CARD_SPOT_RADIUS",
    ()=>CARD_SPOT_RADIUS,
    "CardSpotlight",
    ()=>CardSpotlight,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexHoverSpot$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/HexHoverSpot/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexHoverSpot$2f$HexHoverSpot$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/HexHoverSpot/HexHoverSpot.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useMediaQuery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/useMediaQuery.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$usePrefersReducedMotion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/usePrefersReducedMotion.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$CardSpotlight$2f$CardSpotlight$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/CardSpotlight/CardSpotlight.styles.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const CARD_SPOT_COLUMNS = 14;
const CARD_SPOT_RADIUS = 56;
function CardSpotlight({ onFirstHover, onLinkClick, dataTestId = 'card-spotlight' }) {
    _s();
    const rootRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const spot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const finePointer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useMediaQuery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMediaQuery"])('(hover: hover) and (pointer: fine)');
    const reducedMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$usePrefersReducedMotion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePrefersReducedMotion"])();
    const enabled = finePointer && !reducedMotion;
    const [built, setBuilt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handlers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        onFirstHover,
        onLinkClick
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CardSpotlight.useEffect": ()=>{
            handlers.current = {
                onFirstHover,
                onLinkClick
            };
        }
    }["CardSpotlight.useEffect"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CardSpotlight.useEffect": ()=>{
            const card = rootRef.current?.parentElement;
            if (!card) return;
            let hovered = false;
            let rect = null;
            const onEnter = {
                "CardSpotlight.useEffect.onEnter": (event)=>{
                    if (!enabled || event.pointerType === 'touch') return;
                    rect = card.getBoundingClientRect();
                    setBuilt(true);
                    if (!hovered) {
                        hovered = true;
                        handlers.current.onFirstHover?.();
                    }
                }
            }["CardSpotlight.useEffect.onEnter"];
            const onMove = {
                "CardSpotlight.useEffect.onMove": (event)=>{
                    if (!enabled || event.pointerType === 'touch') return;
                    if (!rect) rect = card.getBoundingClientRect();
                    spot.current?.move(event.clientX - rect.left, event.clientY - rect.top);
                }
            }["CardSpotlight.useEffect.onMove"];
            const onLeave = {
                "CardSpotlight.useEffect.onLeave": ()=>{
                    rect = null;
                    spot.current?.leave();
                }
            }["CardSpotlight.useEffect.onLeave"];
            const onClick = {
                "CardSpotlight.useEffect.onClick": (event)=>{
                    const target = event.target;
                    if (target?.closest('a[href], [href]')) handlers.current.onLinkClick?.();
                }
            }["CardSpotlight.useEffect.onClick"];
            card.addEventListener('pointerenter', onEnter);
            card.addEventListener('pointermove', onMove);
            card.addEventListener('pointerleave', onLeave);
            card.addEventListener('click', onClick);
            return ({
                "CardSpotlight.useEffect": ()=>{
                    card.removeEventListener('pointerenter', onEnter);
                    card.removeEventListener('pointermove', onMove);
                    card.removeEventListener('pointerleave', onLeave);
                    card.removeEventListener('click', onClick);
                }
            })["CardSpotlight.useEffect"];
        }
    }["CardSpotlight.useEffect"], [
        enabled
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$CardSpotlight$2f$CardSpotlight$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        ref: rootRef,
        "aria-hidden": "true",
        "data-testid": dataTestId,
        "data-enabled": enabled ? 'true' : 'false',
        "data-built": built ? 'true' : 'false',
        children: built && enabled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexHoverSpot$2f$HexHoverSpot$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexHoverSpot"], {
            ref: spot,
            columns: CARD_SPOT_COLUMNS,
            radius: CARD_SPOT_RADIUS,
            reveal: "var(--card-spot)",
            dataTestId: `${dataTestId}-spot`
        }, void 0, false, {
            fileName: "[project]/apps/web/src/app/components/Molecule/CardSpotlight/CardSpotlight.tsx",
            lineNumber: 93,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Molecule/CardSpotlight/CardSpotlight.tsx",
        lineNumber: 85,
        columnNumber: 5
    }, this);
}
_s(CardSpotlight, "ijWNTxkY7iW1mwdbPNIOFpjY36E=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useMediaQuery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMediaQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$usePrefersReducedMotion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePrefersReducedMotion"]
    ];
});
_c = CardSpotlight;
const __TURBOPACK__default__export__ = CardSpotlight;
var _c;
__turbopack_context__.k.register(_c, "CardSpotlight");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/CardSpotlight/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$CardSpotlight$2f$CardSpotlight$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/CardSpotlight/CardSpotlight.tsx [app-client] (ecmascript)");
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/ComparisonList/ComparisonList.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Arrow",
    ()=>Arrow,
    "Board",
    ()=>Board,
    "Face",
    ()=>Face,
    "FaceIcon",
    ()=>FaceIcon,
    "Flip",
    ()=>Flip,
    "Flipper",
    ()=>Flipper,
    "HeadArrow",
    ()=>HeadArrow,
    "HeadProblem",
    ()=>HeadProblem,
    "HeadSolution",
    ()=>HeadSolution,
    "Heads",
    ()=>Heads,
    "Hub",
    ()=>Hub,
    "Pair",
    ()=>Pair,
    "Pairs",
    ()=>Pairs,
    "Problem",
    ()=>Problem,
    "Root",
    ()=>Root,
    "Solution",
    ()=>Solution,
    "SolutionText",
    ()=>SolutionText,
    "comparisonPalette",
    ()=>comparisonPalette
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$brands$2f$partnerTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/brands/partnerTheme.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/site.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easingCss$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/motion/easingCss.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$mixColor$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/scene3d/mixColor.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$ComparisonList$2f$comparisonTimeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/ComparisonList/comparisonTimeline.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
/**
 * #2193 „Kippwabe". Bewegung nur über `data-state` am Root
 * (lib/motion/entrance): idle = Waben rot (Warnzeichen), Lösung und Pfeil
 * weg, keine Kette; running = Zeile für Zeile kippt die Wabe auf Grün (Haken),
 * Pfeil zeichnet sich, Lösung blendet ein, danach schließt sich die Kette;
 * ready/pending/static = Endbild (static ohne jede Bewegung). Unter dem
 * Zeiger (`data-replay` an der Zeile, nur ab `ready`) dreht die Wabe zurück
 * auf Rot und wieder auf Grün.
 *
 * Ab 768 px Zeilen „Problem | Wabe | Lösung" mit der Kette durch die Waben;
 * darunter je Paar eine Karte (Wabe am Rand, Problem durchgestrichen, Lösung
 * darunter). `data-surface` = Fläche des Blocks, `data-dark` = Navy-Band.
 */ /** Site-Stufe md (768 px) wie assets/theme/site.ts: ab hier Zeilen statt Karten */ const MD = '768px';
const FEIN_ZEIGER = '@media (hover: hover) and (pointer: fine)';
const ms = (wert)=>`${wert}ms`;
function comparisonPalette(theme, band = false) {
    const site = theme.palette.site;
    if (band) {
        return {
            badText: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$mixColor$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mixColor"])(site.red, '#ffffff', 0.5),
            badFace: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$mixColor$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mixColor"])(site.red, site.navy, 0.8),
            badRim: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$mixColor$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mixColor"])(site.red, '#ffffff', 0.3),
            badIcon: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$mixColor$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mixColor"])(site.red, '#ffffff', 0.3),
            goodText: '#ffffff',
            ground: site.navy
        };
    }
    const dunkel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$brands$2f$partnerTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDarkTheme"])(theme);
    return {
        badText: dunkel ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$mixColor$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mixColor"])(site.red, site.text, 0.3) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$mixColor$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mixColor"])(site.red, site.text, 0.5),
        badFace: dunkel ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$mixColor$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mixColor"])(site.red, site.card, 0.8) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$mixColor$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mixColor"])(site.red, site.card, 0.85),
        badRim: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$mixColor$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mixColor"])(site.red, site.card, 0.5),
        badIcon: dunkel ? site.red : (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$mixColor$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mixColor"])(site.red, '#000000', 0.2),
        goodText: dunkel ? site.greenText : site.greenOnTint,
        ground: site.tint
    };
}
const kippen = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframes"]`
  from { transform: rotateY(0deg); }
  to { transform: rotateY(180deg); }
`;
/* zurück auf Rot (360° = Vorderseite), kurz halten, weiter auf Grün (540° ≙ 180°) */ const nochmal = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframes"]`
  0% { transform: rotateY(180deg); }
  40% { transform: rotateY(360deg); }
  60% { transform: rotateY(360deg); }
  100% { transform: rotateY(540deg); }
`;
const zeichnen = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframes"]`
  from { stroke-dashoffset: 1; }
  to { stroke-dashoffset: 0; }
`;
const einblenden = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframes"]`
  from { opacity: 0; transform: translateX(calc(-1 * var(--cmp-shift))); }
  to { opacity: 1; transform: none; }
`;
const streichen = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframes"]`
  from { text-decoration-color: transparent; }
  to { text-decoration-color: var(--cmp-strike); }
`;
const wachsen = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframes"]`
  from { transform: scaleY(0); }
  to { transform: scaleY(1); }
`;
const farben = (theme, band = false)=>{
    const p = comparisonPalette(theme, band);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
    --cmp-bad-text: ${p.badText};
    --cmp-bad-face: ${p.badFace};
    --cmp-bad-rim: ${p.badRim};
    --cmp-bad-icon: ${p.badIcon};
    --cmp-good-text: ${p.goodText};
    --cmp-strike: ${p.badText};
  `;
};
const Root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].section.withConfig({
    displayName: "ComparisonList.styles__Root",
    componentId: "sc-a8b8661-0"
})`
  ${({ theme })=>farben(theme)}
  --cmp-good-face: ${({ theme })=>theme.palette.site.greenDark};
  --cmp-good-icon: #ffffff;
  --cmp-line: ${({ theme })=>theme.palette.site.green};
  --cmp-card: ${({ theme })=>theme.palette.site.tint};
  --cmp-hex: 2.75rem;
  --cmp-shift: ${({ theme })=>theme.margin.extrasmall};

  display: flex;
  flex-direction: column;
  gap: ${({ theme })=>theme.margin.big};
  width: 100%;
  /* globals.css färbt section mit der Seitenfarbe — auf Bändern durchscheinen lassen */
  background-color: transparent;

  /* auf der Tönung heben sich die Karten (Telefon) in Kartenfarbe ab */
  &[data-surface='tint'] {
    --cmp-card: ${({ theme })=>theme.palette.site.card};
  }

  /* Band (Navy in beiden Themes) */
  &[data-dark='true'] {
    ${({ theme })=>farben(theme, true)}
    --cmp-card: color-mix(in srgb, #ffffff 8%, transparent);
  }

  @media (min-width: ${MD}) {
    --cmp-hex: 3.5rem;
  }
`;
const Board = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "ComparisonList.styles__Board",
    componentId: "sc-a8b8661-1"
})`
  display: flex;
  flex-direction: column;
  gap: ${({ theme })=>theme.margin.default};
  width: 100%;
  max-width: 60rem;
  margin-inline: auto;
`;
/** Gleiches Raster für Titelzeile und Paare: Problem | Wabe | Lösung */ const zeile = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
  display: grid;
  grid-template-columns: minmax(0, 1fr) var(--cmp-hex) minmax(0, 1fr);
  column-gap: ${({ theme })=>theme.margin.large};
  align-items: center;
`;
const Heads = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "ComparisonList.styles__Heads",
    componentId: "sc-a8b8661-2"
})`
  ${zeile}
  column-gap: ${({ theme })=>theme.margin.small};

  @media (min-width: ${MD}) {
    column-gap: ${({ theme })=>theme.margin.large};
  }
`;
const kopf = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
  ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteMuted"]}
  margin: 0;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
`;
const HeadProblem = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].h3.withConfig({
    displayName: "ComparisonList.styles__HeadProblem",
    componentId: "sc-a8b8661-3"
})`
  ${kopf}
  text-align: right;
  color: var(--cmp-bad-text);
`;
const HeadSolution = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].h3.withConfig({
    displayName: "ComparisonList.styles__HeadSolution",
    componentId: "sc-a8b8661-4"
})`
  ${kopf}
  color: var(--cmp-good-text);
`;
const HeadArrow = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].svg.withConfig({
    displayName: "ComparisonList.styles__HeadArrow",
    componentId: "sc-a8b8661-5"
})`
  justify-self: center;
  width: 100%;
  height: auto;
  fill: none;
  stroke: var(--cmp-line);
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
`;
const Pairs = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ul.withConfig({
    displayName: "ComparisonList.styles__Pairs",
    componentId: "sc-a8b8661-6"
})`
  display: flex;
  flex-direction: column;
  gap: ${({ theme })=>theme.margin.small};
  margin: 0;
  padding: 0;
  list-style: none;

  @media (min-width: ${MD}) {
    gap: 0;
  }
`;
const Pair = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].li.withConfig({
    displayName: "ComparisonList.styles__Pair",
    componentId: "sc-a8b8661-7"
})`
  display: grid;
  grid-template-columns: var(--cmp-hex) minmax(0, 1fr);
  grid-template-areas:
    'hub problem'
    'hub solution';
  column-gap: ${({ theme })=>theme.margin.small};
  row-gap: ${({ theme })=>theme.margin.extrasmall};
  align-items: center;
  padding: ${({ theme })=>theme.padding.small};
  border-radius: ${({ theme })=>theme.borderRadius.box};
  background: var(--cmp-card);

  @media (min-width: ${MD}) {
    ${zeile}
    grid-template-areas: 'problem hub solution';
    padding: ${({ theme })=>theme.padding.extrasmall} 0;
    border-radius: 0;
    background: none;
  }
`;
const Problem = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].p.withConfig({
    displayName: "ComparisonList.styles__Problem",
    componentId: "sc-a8b8661-8"
})`
  ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteMuted"]}
  grid-area: problem;
  margin: 0;
  color: var(--cmp-bad-text);
  text-decoration: line-through;
  text-decoration-color: var(--cmp-strike);
  text-decoration-thickness: 1px;

  [data-state='idle'] & {
    text-decoration-color: transparent;
  }
  [data-state='running'] & {
    animation: ${streichen} ${ms(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$ComparisonList$2f$comparisonTimeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMPARISON_TIMING"].solution.duration)} ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easingCss$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_REVEAL_CSS"]}
      ${({ $index })=>ms((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$ComparisonList$2f$comparisonTimeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["comparisonSolutionDelay"])($index))} both;
  }

  /* ab md bleibt das Problem lesbar stehen, gedämpft rot, rechtsbündig zur Wabe */
  @media (min-width: ${MD}) {
    text-align: right;
    text-decoration: none;
    font-size: 18px;
    line-height: 1.4;
  }
`;
const Hub = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "ComparisonList.styles__Hub",
    componentId: "sc-a8b8661-9"
})`
  grid-area: hub;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: stretch;

  @media (min-width: ${MD}) {
    &::before,
    &::after {
      content: '';
      position: absolute;
      left: 50%;
      width: 2px;
      margin-left: -1px;
      background: var(--cmp-line);
      transform-origin: top;
    }
    /* Teilstück j läuft von Zeile j (untere Hälfte) in Zeile j + 1 (obere Hälfte) */
    &::before {
      top: calc(-1 * ${({ theme })=>theme.padding.extrasmall});
      bottom: 50%;
      display: ${({ $index })=>$index === 0 ? 'none' : 'block'};
    }
    &::after {
      top: 50%;
      bottom: calc(-1 * ${({ theme })=>theme.padding.extrasmall});
      display: ${({ $index, $count })=>$index === $count - 1 ? 'none' : 'block'};
    }

    [data-state='idle'] &::before,
    [data-state='idle'] &::after {
      transform: scaleY(0);
    }
    [data-state='running'] &::after {
      animation: ${wachsen} ${ms(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$ComparisonList$2f$comparisonTimeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMPARISON_TIMING"].chain.duration / 2)} linear
        ${({ $index, $count })=>ms((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$ComparisonList$2f$comparisonTimeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["comparisonChainDelay"])($count, $index))} both;
    }
    [data-state='running'] &::before {
      animation: ${wachsen} ${ms(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$ComparisonList$2f$comparisonTimeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMPARISON_TIMING"].chain.duration / 2)} linear
        ${({ $index, $count })=>ms((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$ComparisonList$2f$comparisonTimeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["comparisonChainDelay"])($count, Math.max(0, $index - 1)) + __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$ComparisonList$2f$comparisonTimeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMPARISON_TIMING"].chain.duration / 2)}
        both;
    }
  }
`;
const Flip = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "ComparisonList.styles__Flip",
    componentId: "sc-a8b8661-10"
})`
  position: relative;
  z-index: 1;
  display: block;
  width: var(--cmp-hex);
  height: var(--cmp-hex);
  perspective: calc(var(--cmp-hex) * 6);
`;
const Flipper = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "ComparisonList.styles__Flipper",
    componentId: "sc-a8b8661-11"
})`
  position: absolute;
  inset: 0;
  transform-style: preserve-3d;
  transform: rotateY(180deg);

  [data-state='idle'] & {
    transform: rotateY(0deg);
  }
  [data-state='running'] & {
    animation: ${kippen} ${ms(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$ComparisonList$2f$comparisonTimeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMPARISON_TIMING"].flip.duration)} ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easingCss$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_POP_CSS"]}
      ${({ $index })=>ms((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$ComparisonList$2f$comparisonTimeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["comparisonFlipDelay"])($index))} both;
  }
  ${FEIN_ZEIGER} {
    [data-state='ready'] [data-replay='true'] & {
      animation: ${nochmal} ${ms(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$ComparisonList$2f$comparisonTimeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMPARISON_TIMING"].replay.duration)} ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easingCss$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_REVEAL_CSS"]} both;
    }
  }
`;
const Face = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "ComparisonList.styles__Face",
    componentId: "sc-a8b8661-12"
})`
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  color: ${({ $side })=>$side === 'bad' ? 'var(--cmp-bad-icon)' : 'var(--cmp-good-icon)'};
  transform: ${({ $side })=>$side === 'good' ? 'rotateY(180deg)' : 'none'};

  svg[data-part='hex'] {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    overflow: visible;
  }
  svg[data-part='hex'] path {
    fill: ${({ $side })=>$side === 'bad' ? 'var(--cmp-bad-face)' : 'var(--cmp-good-face)'};
    stroke: ${({ $side })=>$side === 'bad' ? 'var(--cmp-bad-rim)' : 'var(--cmp-good-face)'};
    stroke-width: 2;
  }
`;
const FaceIcon = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "ComparisonList.styles__FaceIcon",
    componentId: "sc-a8b8661-13"
})`
  position: relative;
  display: grid;
  place-items: center;
  width: 46%;
  height: 46%;

  svg {
    width: 100%;
    height: 100%;
  }
`;
const Solution = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "ComparisonList.styles__Solution",
    componentId: "sc-a8b8661-14"
})`
  grid-area: solution;
  display: flex;
  align-items: center;
  gap: ${({ theme })=>theme.margin.small};
  min-width: 0;

  [data-state='idle'] & {
    opacity: 0;
  }
  [data-state='running'] & {
    animation: ${einblenden} ${ms(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$ComparisonList$2f$comparisonTimeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMPARISON_TIMING"].solution.duration)} ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easingCss$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_REVEAL_CSS"]}
      ${({ $index })=>ms((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$ComparisonList$2f$comparisonTimeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["comparisonSolutionDelay"])($index))} both;
  }
`;
const Arrow = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].svg.withConfig({
    displayName: "ComparisonList.styles__Arrow",
    componentId: "sc-a8b8661-15"
})`
  display: none;
  flex: none;
  width: ${({ theme })=>theme.margin.large};
  height: auto;
  overflow: visible;
  fill: none;
  stroke: var(--cmp-line);
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;

  path {
    stroke-dasharray: 1 1;
    stroke-dashoffset: 0;
  }
  [data-state='idle'] & path {
    stroke-dashoffset: 1;
  }
  [data-state='running'] & path {
    animation: ${zeichnen} ${ms(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$ComparisonList$2f$comparisonTimeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMPARISON_TIMING"].arrow.duration)} ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easingCss$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_REVEAL_CSS"]}
      ${({ $index })=>ms((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$ComparisonList$2f$comparisonTimeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["comparisonArrowDelay"])($index))} both;
  }

  @media (min-width: ${MD}) {
    display: block;
  }
`;
const SolutionText = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].p.withConfig({
    displayName: "ComparisonList.styles__SolutionText",
    componentId: "sc-a8b8661-16"
})`
  ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteH3"]}
  margin: 0;
  color: ${({ theme })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteVar"])('heading', theme.palette.site.heading)};
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/ComparisonList/ComparisonList.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ComparisonList",
    ()=>ComparisonList,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$SiteSectionHeader$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/SiteSectionHeader/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$SiteSectionHeader$2f$SiteSectionHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/SiteSectionHeader/SiteSectionHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$IconChip$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/IconChip/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$IconChip$2f$IconChip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/IconChip/IconChip.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useEntranceAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/useEntranceAnimation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/lib/hex/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$shape$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/hex/shape.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$ComparisonList$2f$comparisonTimeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/ComparisonList/comparisonTimeline.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$ComparisonList$2f$ComparisonList$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/ComparisonList/ComparisonList.styles.ts [app-client] (ecmascript)");
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
/* Wabe im 100er-Rahmen, Rand für die Kante */ const WABE = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$shape$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["roundedHexagonPath"])({
    x: 2,
    y: 2,
    width: 96,
    height: 96
}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$shape$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexCornerRadius"])(96));
const Warnung = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$IconChip$2f$IconChip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CMS_ICON_COMPONENTS"].warning;
const Haken = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$IconChip$2f$IconChip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CMS_ICON_COMPONENTS"].check;
function HexFace({ side }) {
    const Icon = side === 'bad' ? Warnung : Haken;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$ComparisonList$2f$ComparisonList$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Face"], {
        $side: side,
        "data-face": side,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                "data-part": "hex",
                viewBox: "0 0 100 100",
                "aria-hidden": "true",
                focusable: "false",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: WABE
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Molecule/ComparisonList/ComparisonList.tsx",
                    lineNumber: 65,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Molecule/ComparisonList/ComparisonList.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$ComparisonList$2f$ComparisonList$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaceIcon"], {
                "aria-hidden": "true",
                children: Icon ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {}, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Molecule/ComparisonList/ComparisonList.tsx",
                    lineNumber: 67,
                    columnNumber: 44
                }, this) : null
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Molecule/ComparisonList/ComparisonList.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Molecule/ComparisonList/ComparisonList.tsx",
        lineNumber: 63,
        columnNumber: 5
    }, this);
}
_c = HexFace;
function ComparisonList({ headline, description, problemTitle, solutionTitle, pairs, surface = 'white', onFirstView, onFirstReplay, dataTestId = 'comparison-list' }) {
    _s();
    const rootRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { state, visible } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useEntranceAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEntranceAnimation"])(rootRef, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$ComparisonList$2f$comparisonTimeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["comparisonEntranceMs"])(pairs.length));
    const [nochmal, setNochmal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const timer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const gemeldet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ComparisonList.useEffect": ()=>{
            if (!visible || gemeldet.current) return;
            gemeldet.current = true;
            onFirstView?.();
        }
    }["ComparisonList.useEffect"], [
        visible,
        onFirstView
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ComparisonList.useEffect": ()=>({
                "ComparisonList.useEffect": ()=>{
                    if (timer.current !== null) window.clearTimeout(timer.current);
                }
            })["ComparisonList.useEffect"]
    }["ComparisonList.useEffect"], []);
    const nachspielen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ComparisonList.useCallback[nachspielen]": (index, event)=>{
            if (event.pointerType !== 'mouse' || state !== 'ready' || nochmal !== null) return;
            setNochmal(index);
            onFirstReplay?.();
            timer.current = window.setTimeout({
                "ComparisonList.useCallback[nachspielen]": ()=>{
                    timer.current = null;
                    setNochmal(null);
                }
            }["ComparisonList.useCallback[nachspielen]"], __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$ComparisonList$2f$comparisonTimeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMPARISON_TIMING"].replay.duration);
        }
    }["ComparisonList.useCallback[nachspielen]"], [
        state,
        nochmal,
        onFirstReplay
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$ComparisonList$2f$ComparisonList$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        ref: rootRef,
        "data-testid": dataTestId,
        "data-state": state,
        "data-count": pairs.length,
        "data-surface": surface,
        "data-dark": surface === 'dark' ? 'true' : 'false',
        "data-element": "comparison",
        children: [
            (headline || description) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$SiteSectionHeader$2f$SiteSectionHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiteSectionHeader"], {
                headline: headline,
                description: description,
                align: "center",
                dataTestId: `${dataTestId}-header`
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Molecule/ComparisonList/ComparisonList.tsx",
                lineNumber: 142,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$ComparisonList$2f$ComparisonList$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Board"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$ComparisonList$2f$ComparisonList$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Heads"], {
                        "data-testid": `${dataTestId}-heads`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$ComparisonList$2f$ComparisonList$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeadProblem"], {
                                "data-testid": `${dataTestId}-problem-title`,
                                children: problemTitle
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Molecule/ComparisonList/ComparisonList.tsx",
                                lineNumber: 151,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$ComparisonList$2f$ComparisonList$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeadArrow"], {
                                viewBox: "0 0 32 16",
                                "aria-hidden": "true",
                                focusable: "false",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M2 8 H29 M23 3 L29 8 L23 13"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/components/Molecule/ComparisonList/ComparisonList.tsx",
                                    lineNumber: 153,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Molecule/ComparisonList/ComparisonList.tsx",
                                lineNumber: 152,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$ComparisonList$2f$ComparisonList$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeadSolution"], {
                                "data-testid": `${dataTestId}-solution-title`,
                                children: solutionTitle
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Molecule/ComparisonList/ComparisonList.tsx",
                                lineNumber: 155,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/app/components/Molecule/ComparisonList/ComparisonList.tsx",
                        lineNumber: 150,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$ComparisonList$2f$ComparisonList$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Pairs"], {
                        children: pairs.map((pair, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$ComparisonList$2f$ComparisonList$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Pair"], {
                                "data-testid": `${dataTestId}-pair`,
                                "data-pair": index + 1,
                                "data-replay": nochmal === index ? 'true' : 'false',
                                onPointerEnter: (event)=>nachspielen(index, event),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$ComparisonList$2f$ComparisonList$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Problem"], {
                                        $index: index,
                                        "data-testid": `${dataTestId}-pair-problem`,
                                        children: pair.problem
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/components/Molecule/ComparisonList/ComparisonList.tsx",
                                        lineNumber: 166,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$ComparisonList$2f$ComparisonList$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hub"], {
                                        $index: index,
                                        $count: pairs.length,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$ComparisonList$2f$ComparisonList$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Flip"], {
                                            "data-testid": `${dataTestId}-pair-hex`,
                                            "aria-hidden": "true",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$ComparisonList$2f$ComparisonList$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Flipper"], {
                                                $index: index,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HexFace, {
                                                        side: "bad"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/app/components/Molecule/ComparisonList/ComparisonList.tsx",
                                                        lineNumber: 172,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HexFace, {
                                                        side: "good"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/app/components/Molecule/ComparisonList/ComparisonList.tsx",
                                                        lineNumber: 173,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/src/app/components/Molecule/ComparisonList/ComparisonList.tsx",
                                                lineNumber: 171,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/components/Molecule/ComparisonList/ComparisonList.tsx",
                                            lineNumber: 170,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/components/Molecule/ComparisonList/ComparisonList.tsx",
                                        lineNumber: 169,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$ComparisonList$2f$ComparisonList$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Solution"], {
                                        $index: index,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$ComparisonList$2f$ComparisonList$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Arrow"], {
                                                $index: index,
                                                viewBox: "0 0 32 16",
                                                "aria-hidden": "true",
                                                focusable: "false",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M2 8 H29 M23 3 L29 8 L23 13",
                                                    pathLength: 1
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/app/components/Molecule/ComparisonList/ComparisonList.tsx",
                                                    lineNumber: 179,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/components/Molecule/ComparisonList/ComparisonList.tsx",
                                                lineNumber: 178,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$ComparisonList$2f$ComparisonList$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SolutionText"], {
                                                "data-testid": `${dataTestId}-pair-solution`,
                                                children: pair.solution
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/components/Molecule/ComparisonList/ComparisonList.tsx",
                                                lineNumber: 181,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/app/components/Molecule/ComparisonList/ComparisonList.tsx",
                                        lineNumber: 177,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, index, true, {
                                fileName: "[project]/apps/web/src/app/components/Molecule/ComparisonList/ComparisonList.tsx",
                                lineNumber: 159,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Molecule/ComparisonList/ComparisonList.tsx",
                        lineNumber: 157,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/components/Molecule/ComparisonList/ComparisonList.tsx",
                lineNumber: 149,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Molecule/ComparisonList/ComparisonList.tsx",
        lineNumber: 132,
        columnNumber: 5
    }, this);
}
_s(ComparisonList, "vr2KnKnlcSoPLFbceSfdMXXx+6c=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useEntranceAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEntranceAnimation"]
    ];
});
_c1 = ComparisonList;
const __TURBOPACK__default__export__ = ComparisonList;
var _c, _c1;
__turbopack_context__.k.register(_c, "HexFace");
__turbopack_context__.k.register(_c1, "ComparisonList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/ComparisonList/comparisonTimeline.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Eintritt der Kippwabe (#2193), Zeiten in ms ab dem ersten Sichtbarwerden.
 * Zeile i kippt ihre Wabe (rot/Warnzeichen → grün/Haken); in der zweiten
 * Hälfte des Kippens zeichnet sich der Pfeil und die Lösung blendet ein. Nach
 * der letzten Zeile schließt sich die Kette: die senkrechte Linie läuft
 * Teilstück für Teilstück durch alle grünen Waben (nur ab 768 px sichtbar).
 *
 * | Teil     | Beginn                        | Dauer | Inhalt                              |
 * | -------- | ----------------------------: | ----: | ----------------------------------- |
 * | flip     | 150 + i × 320                 |   650 | Wabe dreht sich um die Senkrechte   |
 * | arrow    | flip(i) + 300                 |   350 | Pfeil zeichnet sich nach rechts     |
 * | solution | flip(i) + 300                 |   400 | Lösung blendet ein                  |
 * | chain    | Ende flip(n − 1) + j × 160    |   160 | Teilstück j (Zeile j → j + 1)        |
 * | replay   | unter dem Zeiger, ab `ready`  |   900 | dreht zurück auf Rot, wieder Grün   |
 */ __turbopack_context__.s([
    "COMPARISON_TIMING",
    ()=>COMPARISON_TIMING,
    "comparisonArrowDelay",
    ()=>comparisonArrowDelay,
    "comparisonChainDelay",
    ()=>comparisonChainDelay,
    "comparisonChainStart",
    ()=>comparisonChainStart,
    "comparisonEntranceMs",
    ()=>comparisonEntranceMs,
    "comparisonFlipDelay",
    ()=>comparisonFlipDelay,
    "comparisonSolutionDelay",
    ()=>comparisonSolutionDelay
]);
const COMPARISON_TIMING = {
    flip: {
        start: 150,
        duration: 650,
        stagger: 320
    },
    arrow: {
        offset: 300,
        duration: 350
    },
    solution: {
        offset: 300,
        duration: 400
    },
    chain: {
        duration: 160
    },
    replay: {
        duration: 900
    }
};
const comparisonFlipDelay = (index)=>COMPARISON_TIMING.flip.start + index * COMPARISON_TIMING.flip.stagger;
const comparisonArrowDelay = (index)=>comparisonFlipDelay(index) + COMPARISON_TIMING.arrow.offset;
const comparisonSolutionDelay = (index)=>comparisonFlipDelay(index) + COMPARISON_TIMING.solution.offset;
const comparisonChainStart = (count)=>comparisonFlipDelay(Math.max(0, count - 1)) + COMPARISON_TIMING.flip.duration;
const comparisonChainDelay = (count, segment)=>comparisonChainStart(count) + segment * COMPARISON_TIMING.chain.duration;
function comparisonEntranceMs(count) {
    if (count <= 0) return 0;
    const zeile = Math.max(comparisonFlipDelay(count - 1) + COMPARISON_TIMING.flip.duration, comparisonSolutionDelay(count - 1) + COMPARISON_TIMING.solution.duration, comparisonArrowDelay(count - 1) + COMPARISON_TIMING.arrow.duration);
    if (count === 1) return zeile;
    return Math.max(zeile, comparisonChainDelay(count, count - 2) + COMPARISON_TIMING.chain.duration);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/ComparisonList/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$ComparisonList$2f$ComparisonList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/ComparisonList/ComparisonList.tsx [app-client] (ecmascript)");
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$ComparisonList$2f$ComparisonList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComparisonList"];
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/CtaSection/CtaSection.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Band",
    ()=>Band,
    "ButtonSlot",
    ()=>ButtonSlot,
    "Column",
    ()=>Column,
    "Container",
    ()=>Container,
    "Content",
    ()=>Content,
    "Headline",
    ()=>Headline,
    "Root",
    ()=>Root,
    "WORD_STAGGER_MS",
    ()=>WORD_STAGGER_MS,
    "WORD_WIPE_MS",
    ()=>WORD_WIPE_MS,
    "Word",
    ()=>Word
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$hex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/hex.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/site.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$edge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/hex/edge.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Grid$2f$Row$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Grid/Row/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Grid$2f$Col$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Grid/Col/index.tsx [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
const Root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].section.withConfig({
    displayName: "CtaSection.styles__Root",
    componentId: "sc-53eb986f-0"
})`
  position: relative;
  width: 100%;
  /* Ohne globalen border-box-Reset (_reset.scss) addiert content-box das
     seitliche Polster auf die 100% und das Band wird breiter als die Seite. */
  box-sizing: border-box;
  overflow: hidden;
  background-color: ${({ theme })=>theme.palette.site.navy};
  /* Wabenrand (#1188): das Band ist Host */
  ${({ $edges })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$hex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hexEdgeHost"])($edges)}
`;
/**
 * Luft über bzw. unter dem Inhalt (Befund 29.10.: eine Stufe mehr). Mit
 * innerem Wabenrand stand der Inhalt bisher direkt an der Randzone
 * (max(Polster, Zone) ergab immer die Zone) — jetzt Zone plus die Stufe.
 * Ohne Rand an dieser Seite (z. B. unten, wenn der Fuß den Übergang
 * zeichnet) die nächste Stufe der Skala.
 */ const bandAir = (side, edges, withEdge, plain)=>{
    const spec = edges?.[side];
    return spec?.placement === 'inner' ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
        padding-${side}: calc(${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$edge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EDGE_ZONE_MAX_PX"][spec.depth ?? 'section']}px + ${withEdge});
      ` : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
        padding-${side}: ${plain};
      `;
};
const Band = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "CtaSection.styles__Band",
    componentId: "sc-53eb986f-1"
})`
  position: relative;
  z-index: 2;
  box-sizing: border-box;
  /* Telefon: Zone + margin.large bzw. margin.big; ab 768 px Zone + margin.big bzw. padding.big */
  ${({ $edges, theme })=>bandAir('top', $edges, theme.margin.large, theme.margin.big)}
  ${({ $edges, theme })=>bandAir('bottom', $edges, theme.margin.large, theme.margin.big)}

  @media (min-width: 768px) {
    ${({ $edges, theme })=>bandAir('top', $edges, theme.margin.big, theme.padding.big)}
    ${({ $edges, theme })=>bandAir('bottom', $edges, theme.margin.big, theme.padding.big)}
  }
`;
const Container = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Grid$2f$Row$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]).withConfig({
    displayName: "CtaSection.styles__Container",
    componentId: "sc-53eb986f-2"
})`
  margin-bottom: 0;
`;
const Column = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Grid$2f$Col$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]).withConfig({
    displayName: "CtaSection.styles__Column",
    componentId: "sc-53eb986f-3"
})`
  margin-bottom: 0;
`;
const Content = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "CtaSection.styles__Content",
    componentId: "sc-53eb986f-4"
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme })=>theme.margin.default};
  text-align: center;
`;
const wipeIn = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframes"]`
  from {
    clip-path: inset(0 100% 0 0);
    opacity: 0;
    transform: translateY(0.25em);
  }
  to {
    clip-path: inset(0 0 0 0);
    opacity: 1;
    transform: none;
  }
`;
const WORD_STAGGER_MS = 70;
const WORD_WIPE_MS = 520;
const Headline = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].h2.withConfig({
    displayName: "CtaSection.styles__Headline",
    componentId: "sc-53eb986f-5"
})`
  max-width: 100%;
  margin: 0;
  font-family: ${({ theme })=>theme.font.primaryFamily};
  font-size: 30px;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: 0;
  text-transform: none;
  color: ${({ theme })=>theme.palette.text.onAccent};
  /* Kreislaufwirtschaft läuft am Telefon sonst über den Rand; Silbentrennung verhindert das */
  hyphens: auto;
  overflow-wrap: break-word;

  @media (min-width: 640px) {
    font-size: 36px;
    line-height: 40px;
  }

  /* #2127: am Telefon eine Stufe der Theme-Skala kleiner */
  ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sitePhoneHeadingStepDown"])([
    {
        ab: 0,
        px: 30
    },
    {
        ab: 640,
        px: 36
    }
])}

  @media (min-width: 768px) {
    font-size: 48px;
    line-height: 1.1;
  }

  @media (min-width: 1280px) {
    font-size: 60px;
    line-height: 1.1;
  }

  &[data-state='idle'] [data-word] {
    opacity: 0;
    clip-path: inset(0 100% 0 0);
  }

  &[data-state='running'] [data-word] {
    animation: ${wipeIn} ${WORD_WIPE_MS}ms cubic-bezier(0.2, 0.8, 0.2, 1) both;
    animation-delay: calc(var(--word, 0) * ${WORD_STAGGER_MS}ms);
  }

  @media (prefers-reduced-motion: reduce) {
    &[data-state] [data-word] {
      animation: none;
      opacity: 1;
      clip-path: none;
    }
  }
`;
const Word = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "CtaSection.styles__Word",
    componentId: "sc-53eb986f-6"
})`
  display: inline-block;
  max-width: 100%;
`;
const ButtonSlot = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "CtaSection.styles__ButtonSlot",
    componentId: "sc-53eb986f-7"
})`
  display: flex;
  justify-content: center;
  max-width: 100%;
  /* Die Kacheln des Buttons ragen eine Reihe plus Ring unter seinen Kasten —
     Luft bis zum Wabenrand des Bands */
  padding-bottom: ${({ theme })=>theme.margin.large};
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/CtaSection/CtaSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CTA_TILE_SIZE_PX",
    ()=>CTA_TILE_SIZE_PX,
    "CtaSection",
    ()=>CtaSection,
    "headlineWords",
    ()=>headlineWords
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$IconChip$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/IconChip/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$IconChip$2f$IconChip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/IconChip/IconChip.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$HexEdge$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/HexEdge/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$HexEdge$2f$HexEdge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/HexEdge/HexEdge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexCta$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/HexCta/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexCta$2f$HexCta$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/HexCta/HexCta.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexContentBackdrop$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/HexContentBackdrop/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexContentBackdrop$2f$HexContentBackdrop$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/HexContentBackdrop/HexContentBackdrop.tsx [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexHoverSpot$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/HexHoverSpot/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexHoverSpot$2f$HexHoverSpot$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/HexHoverSpot/HexHoverSpot.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useEntranceAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/useEntranceAnimation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useHexStageSize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/useHexStageSize.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useMediaQuery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/useMediaQuery.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/lib/hex/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$edge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/hex/edge.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$CtaSection$2f$CtaSection$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/CtaSection/CtaSection.styles.ts [app-client] (ecmascript)");
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
/** Kacheln je Reihe vor der ersten Messung (SSR) */ const CTA_FALLBACK_COLUMNS = 24;
const CTA_TILE_SIZE_PX = 44;
/** Einlaufen des Rasters (ms), danach steht es */ const CTA_BACKDROP_MS = 900;
/** Reichweite des Zeigerlichts (px) */ const CTA_SPOT_RADIUS = 90;
const headlineWords = (headline)=>headline.trim().split(/\s+/).filter(Boolean);
/**
 * Call-to-Action als Schluss-Band (#2192 „Wabenband"): Navy über die volle
 * Breite, Wabenfransen der Nachbarn oben und unten, darin mittig Icon,
 * weiße Überschrift (wischt Wort für Wort herein) und ein großer grüner
 * Waben-Button. Hinter dem Inhalt ein lockeres helles Wabenraster; bei feinem
 * Zeiger leuchten Waben um den Zeiger auf. Der Button bleibt beim Hover
 * stehen (Befund 29.10.: kein Magnet, kein Positionssprung) — er hebt sich
 * nur über die Farbe ab. Reduzierte Bewegung: alles steht, kein Licht.
 *
 * Testids: Wurzel `dataTestId` (`data-state`, `data-motion`), `-headline`,
 * `-button`, `-button-slot`, `-backdrop`, `-hover-spot`, `-icon`, `-edge`.
 */ const CtaSection = (props)=>{
    _s();
    const { headline, buttonText, buttonHref, icon, className, dataTestId = 'cta-section', dataAttributes, edges, motion = true, onFirstView, onFirstHover, onCtaClick } = props;
    const withEdge = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$edge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasEdges"])(edges);
    const rootRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const contentRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const hoverSpot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const words = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CtaSection.useMemo[words]": ()=>headlineWords(headline)
    }["CtaSection.useMemo[words]"], [
        headline
    ]);
    const { columns } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useHexStageSize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHexStageSize"])(rootRef, CTA_FALLBACK_COLUMNS, CTA_TILE_SIZE_PX);
    const { state, visible } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useEntranceAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEntranceAnimation"])(rootRef, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$CtaSection$2f$CtaSection$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WORD_WIPE_MS"] + Math.max(0, words.length - 1) * __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$CtaSection$2f$CtaSection$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WORD_STAGGER_MS"], 0.25);
    const finePointer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useMediaQuery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMediaQuery"])('(pointer: fine)');
    const pointerEffects = motion && finePointer && state !== 'static' && state !== 'pending';
    const viewHandler = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(onFirstView);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CtaSection.useEffect": ()=>{
            viewHandler.current = onFirstView;
        }
    }["CtaSection.useEffect"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CtaSection.useEffect": ()=>{
            if (visible) viewHandler.current?.();
        }
    }["CtaSection.useEffect"], [
        visible
    ]);
    // Lage des Bands je Zeiger-Sitzung einmal gelesen (kein Layout-Flush je Bewegung)
    const session = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const hovered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const onPointerMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CtaSection.useCallback[onPointerMove]": (event)=>{
            if (!pointerEffects || event.pointerType === 'touch') return;
            if (!session.current) session.current = {
                root: event.currentTarget.getBoundingClientRect()
            };
            const { root } = session.current;
            hoverSpot.current?.move(event.clientX - root.left, event.clientY - root.top);
            if (!hovered.current) {
                hovered.current = true;
                onFirstHover?.();
            }
        }
    }["CtaSection.useCallback[onPointerMove]"], [
        pointerEffects,
        onFirstHover
    ]);
    const onPointerLeave = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CtaSection.useCallback[onPointerLeave]": ()=>{
            session.current = null;
            hoverSpot.current?.leave();
        }
    }["CtaSection.useCallback[onPointerLeave]"], []);
    // Scrollen verschiebt das Band gegen den Bildschirm — Lage neu lesen
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CtaSection.useEffect": ()=>{
            if (!pointerEffects) return;
            const reset = {
                "CtaSection.useEffect.reset": ()=>{
                    session.current = null;
                }
            }["CtaSection.useEffect.reset"];
            window.addEventListener('scroll', reset, {
                passive: true
            });
            return ({
                "CtaSection.useEffect": ()=>window.removeEventListener('scroll', reset)
            })["CtaSection.useEffect"];
        }
    }["CtaSection.useEffect"], [
        pointerEffects
    ]);
    const backdropState = motion && state !== 'pending' && state !== 'idle' ? 'active' : 'hidden';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$CtaSection$2f$CtaSection$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        ref: rootRef,
        className: className,
        ...dataAttributes,
        "data-testid": dataTestId,
        "data-hex-stage": "true",
        "data-columns": columns,
        "data-state": motion ? state : 'static',
        "data-motion": motion ? 'true' : 'false',
        "data-pointer": pointerEffects ? 'fine' : 'none',
        $edges: withEdge ? edges : undefined,
        onPointerMove: onPointerMove,
        onPointerLeave: onPointerLeave,
        children: [
            motion && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexContentBackdrop$2f$HexContentBackdrop$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HexContentBackdrop"], {
                anchorRef: contentRef,
                state: backdropState,
                duration: CTA_BACKDROP_MS,
                columns: columns,
                tone: "light",
                dataTestId: `${dataTestId}-backdrop`
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Molecule/CtaSection/CtaSection.tsx",
                lineNumber: 168,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            motion && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexHoverSpot$2f$HexHoverSpot$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexHoverSpot"], {
                ref: hoverSpot,
                columns: columns,
                radius: CTA_SPOT_RADIUS,
                enabled: pointerEffects,
                dataTestId: `${dataTestId}-hover-spot`
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Molecule/CtaSection/CtaSection.tsx",
                lineNumber: 178,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            withEdge && edges && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$HexEdge$2f$HexEdge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexEdge"], {
                edges: edges,
                zIndex: 1,
                dataTestId: `${dataTestId}-edge`
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Molecule/CtaSection/CtaSection.tsx",
                lineNumber: 187,
                columnNumber: 29
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$CtaSection$2f$CtaSection$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Band"], {
                $edges: withEdge ? edges : undefined,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$CtaSection$2f$CtaSection$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Container"], {
                    dataTestId: `${dataTestId}-row`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$CtaSection$2f$CtaSection$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Column"], {
                        xs: 12,
                        md: 10,
                        mdOffset: 1,
                        lg: 8,
                        lgOffset: 2,
                        dataTestId: `${dataTestId}-col`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$CtaSection$2f$CtaSection$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                            ref: contentRef,
                            "data-testid": `${dataTestId}-content`,
                            children: [
                                icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$IconChip$2f$IconChip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconChip"], {
                                    name: icon.name,
                                    tone: icon.tone,
                                    size: "large",
                                    shape: "hex",
                                    dataTestId: `${dataTestId}-icon`
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/components/Molecule/CtaSection/CtaSection.tsx",
                                    lineNumber: 193,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$CtaSection$2f$CtaSection$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Headline"], {
                                    "data-testid": `${dataTestId}-headline`,
                                    "data-state": motion ? state : 'static',
                                    "data-words": words.length,
                                    children: words.map((word, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
                                            children: [
                                                index > 0 && ' ',
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$CtaSection$2f$CtaSection$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Word"], {
                                                    "data-word": index,
                                                    style: {
                                                        '--word': index
                                                    },
                                                    children: word
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/app/components/Molecule/CtaSection/CtaSection.tsx",
                                                    lineNumber: 209,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, `${index}-${word}`, true, {
                                            fileName: "[project]/apps/web/src/app/components/Molecule/CtaSection/CtaSection.tsx",
                                            lineNumber: 207,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/components/Molecule/CtaSection/CtaSection.tsx",
                                    lineNumber: 201,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                buttonHref && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$CtaSection$2f$CtaSection$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ButtonSlot"], {
                                    "data-testid": `${dataTestId}-button-slot`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexCta$2f$HexCta$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexCta"], {
                                        href: buttonHref,
                                        tone: "green",
                                        size: "large",
                                        onClick: onCtaClick,
                                        dataTestId: `${dataTestId}-button`,
                                        children: buttonText
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/components/Molecule/CtaSection/CtaSection.tsx",
                                        lineNumber: 217,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/components/Molecule/CtaSection/CtaSection.tsx",
                                    lineNumber: 216,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/app/components/Molecule/CtaSection/CtaSection.tsx",
                            lineNumber: 191,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Molecule/CtaSection/CtaSection.tsx",
                        lineNumber: 190,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Molecule/CtaSection/CtaSection.tsx",
                    lineNumber: 189,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Molecule/CtaSection/CtaSection.tsx",
                lineNumber: 188,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Molecule/CtaSection/CtaSection.tsx",
        lineNumber: 153,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(CtaSection, "V5wOHcoj1ztiOGoAQ2lbwI/V9Tg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useHexStageSize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHexStageSize"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useEntranceAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEntranceAnimation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useMediaQuery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMediaQuery"]
    ];
});
_c = CtaSection;
;
var _c;
__turbopack_context__.k.register(_c, "CtaSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/CtaSection/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$CtaSection$2f$CtaSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/CtaSection/CtaSection.tsx [app-client] (ecmascript)");
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$CtaSection$2f$CtaSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CtaSection"];
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/FeatureCard/FeatureCard.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Body",
    ()=>Body,
    "CORNER_OFFSET",
    ()=>CORNER_OFFSET,
    "ChipFrame",
    ()=>ChipFrame,
    "ChipOutline",
    ()=>ChipOutline,
    "CornerIcon",
    ()=>CornerIcon,
    "Description",
    ()=>Description,
    "Footer",
    ()=>Footer,
    "HexMark",
    ()=>HexMark,
    "IconWrapper",
    ()=>IconWrapper,
    "ImageWrapper",
    ()=>ImageWrapper,
    "Price",
    ()=>Price,
    "PriceAmount",
    ()=>PriceAmount,
    "PriceLabel",
    ()=>PriceLabel,
    "Root",
    ()=>Root,
    "TextBlock",
    ()=>TextBlock,
    "TextLabel",
    ()=>TextLabel,
    "TextList",
    ()=>TextList,
    "Title",
    ()=>Title,
    "compactBody",
    ()=>compactBody
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$hex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/hex.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/site.ts [app-client] (ecmascript)");
'use client';
;
;
;
const Root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].article.withConfig({
    displayName: "FeatureCard.styles__Root",
    componentId: "sc-54abcbca-0"
})`
  ${({ $shadow })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteCard"])($shadow)}
  ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteLinkedCard"]}
  /* Titelgröße folgt der Kartenbreite (siehe Title) */
  container-type: inline-size;
  display: flex;
  flex-direction: column;
  width: 100%;

  ${({ $interactive })=>$interactive && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
      &:hover,
      &:focus-within {
        --chip-ring-width: 14px;
      }
    `}

  /* #2187: kompakte Karten und Hervorhebungen sind niedrig — die 24-px-Rundung
     der hohen Karten wirkte dort wie eine Pille; Radius der Anliegen-Kacheln */
  ${({ $compact, $accent })=>($compact || $accent) && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
      border-radius: 16px;
    `}

  /* #2194: Ebenen (Zeigerlicht) liegen mit z-index -1 über der Kartenfläche, unter dem Inhalt */
  ${({ $layered })=>$layered && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
      isolation: isolate;
    `}

  /* #2194 accent: volle Breite, Navy-Fläche, Inhalt mittig, Schrift hell */
  ${({ $accent, theme })=>$accent && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
      border-color: ${theme.palette.site.navy};
      background: ${theme.palette.site.navy};
      text-align: center;
      --site-heading: ${theme.palette.text.onAccent};
      --site-text: ${theme.palette.text.onAccent};
      --site-muted: ${theme.palette.text.onAccent};
      --site-accent: ${theme.palette.text.onAccent};

      [data-card-body] {
        align-items: center;
        /* #2187: Höhe nach Inhalt — kein Innenabstand über dem der Karte */
        padding-block: 0;
      }
    `}
`;
const ImageWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "FeatureCard.styles__ImageWrapper",
    componentId: "sc-54abcbca-1"
})`
  width: 100%;

  img {
    ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteCardImage"]}
  }
`;
const compactBody = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
  padding-top: ${({ theme })=>theme.margin.big};
`;
const Body = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "FeatureCard.styles__Body",
    componentId: "sc-54abcbca-2"
})`
  ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteCardBody"]}
  display: flex;
  flex-direction: column;
  gap: 24px;

  /* #2197: mit Fußzeile (Preis, Button) füllt der Innenraum die Karte — die Fußzeile sitzt unten */
  &:has(> [data-card-footer]) {
    flex: 1;
  }
  ${({ $compact })=>$compact && compactBody}

  /* #2187: kompakte Karte ohne Icon — kleine Wabe links, Titel daneben
     senkrecht mittig, die Karte so hoch wie ihr Inhalt (in der Reihe gleich hoch) */
  ${({ $plain, theme })=>$plain && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
      flex: 1;
      flex-direction: row;
      align-items: center;
      gap: ${theme.margin.small};
      padding-block: ${theme.margin.extrasmall};
    `}
`;
const HexMark = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "FeatureCard.styles__HexMark",
    componentId: "sc-54abcbca-3"
})`
  position: relative;
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  margin-left: 7px;

  &::before,
  &::after {
    content: '';
    position: absolute;
    ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$hex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["roundedHexagonMask"]}
  }

  /* Ring */
  &::before {
    inset: -7px;
    background: color-mix(in srgb, ${({ theme })=>theme.palette.site.blue} 10%, transparent);
  }

  /* Fläche */
  &::after {
    inset: 0;
    background: color-mix(in srgb, ${({ theme })=>theme.palette.site.blue} 20%, transparent);
  }
`;
const IconWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "FeatureCard.styles__IconWrapper",
    componentId: "sc-54abcbca-4"
})`
  display: flex;
  align-items: flex-start;
  min-height: 39px;
`;
const CORNER_OFFSET = 16;
const CornerIcon = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "FeatureCard.styles__CornerIcon",
    componentId: "sc-54abcbca-5"
})`
  position: absolute;
  top: 0;
  left: 0;
  width: ${({ theme })=>theme.padding.large};
  height: ${({ theme })=>theme.padding.large};
  overflow: hidden;
  border-top-left-radius: 23px;
  pointer-events: none;

  > * {
    position: absolute;
    top: -${CORNER_OFFSET}px;
    left: -${CORNER_OFFSET}px;
  }
`;
const ChipFrame = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "FeatureCard.styles__ChipFrame",
    componentId: "sc-54abcbca-6"
})`
  position: relative;
  display: inline-flex;
  color: ${({ theme })=>theme.palette.site.greenText};

  &[data-tone='blue'] {
    color: ${({ theme })=>theme.palette.site.blue};
  }

  &[data-tone='red'] {
    color: ${({ theme })=>theme.palette.site.red};
  }
`;
const ChipOutline = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].svg.withConfig({
    displayName: "FeatureCard.styles__ChipOutline",
    componentId: "sc-54abcbca-7"
})`
  position: absolute;
  top: -6px;
  left: ${({ $ring })=>$ring - 6}px;
  width: ${({ $chip })=>$chip + 12}px;
  height: ${({ $chip })=>$chip + 12}px;
  overflow: visible;
  pointer-events: none;

  path {
    fill: none;
    stroke: currentColor;
    stroke-width: 3;
    stroke-linejoin: round;
    stroke-dasharray: 1;
    stroke-dashoffset: 1;
    opacity: 0;
    transition:
      stroke-dashoffset 600ms cubic-bezier(0.2, 0.8, 0.2, 1),
      opacity 150ms ease;
  }

  @media (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference) {
    article:hover &,
    article:focus-within & {
      path {
        stroke-dashoffset: 0;
        opacity: 1;
      }
    }
  }
`;
const Title = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].h3.withConfig({
    displayName: "FeatureCard.styles__Title",
    componentId: "sc-54abcbca-8"
})`
  ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteH3"]}
  /* gemessen: text-lg und text-xl der Quelle, beide mit 28 px Zeilenhöhe */
  line-height: 28px;
  /* #2197: ganze Wörter — kein „Ge-ruch"; Umbruch an Wortgrenzen und nach „/"
     (<wbr>). Nur ein Wort breiter als die Karte bricht notfalls ohne Strich;
     anywhere (statt break-word) zählt in die Mindestbreite, sonst schöbe ein
     langes Wort die Rasterspalte über den Rand (768 px). */
  hyphens: manual;
  -webkit-hyphens: manual;
  overflow-wrap: anywhere;

  /* Quelle: text-lg md:text-base lg:text-xl je nach Spaltenbreite — hier an der
     Kartenbreite gemessen: schmale Karten (md, drei Spalten) 16 px, Raster mit
     vier Spalten und Smartphone 18 px, breite Karten 20 px. */
  @container (max-width: 229.98px) {
    font-size: 16px;
  }

  @container (min-width: 230px) and (max-width: 339.98px) {
    font-size: 18px;
  }

  @container (min-width: 340px) {
    font-size: 20px;
  }
`;
const Description = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].p.withConfig({
    displayName: "FeatureCard.styles__Description",
    componentId: "sc-54abcbca-9"
})`
  ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteMuted"]}
  margin: 0;
`;
const TextBlock = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "FeatureCard.styles__TextBlock",
    componentId: "sc-54abcbca-10"
})`
  ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteMuted"]}
  ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteHexBullets"]}
  display: flex;
  flex-direction: column;
  gap: ${({ theme })=>theme.margin.extrasmall};
  margin-top: ${({ theme })=>theme.margin.extrasmall};
`;
const TextLabel = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].p.withConfig({
    displayName: "FeatureCard.styles__TextLabel",
    componentId: "sc-54abcbca-11"
})`
  margin: 0;
  ${({ $list, theme })=>$list && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
      margin-top: ${theme.margin.extrasmall};
      font-weight: 600;
      color: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteVar"])('heading', theme.palette.site.heading)};
    `}
`;
const TextList = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ul.withConfig({
    displayName: "FeatureCard.styles__TextList",
    componentId: "sc-54abcbca-12"
})`
  margin: 0;
  padding-left: 1.25em;
`;
const Footer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "FeatureCard.styles__Footer",
    componentId: "sc-54abcbca-13"
})`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  gap: ${({ theme })=>theme.margin.small};
  margin-top: auto;
  padding-top: ${({ theme })=>theme.margin.small};
  border-top: 1px solid ${({ theme })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteVar"])('border', theme.palette.site.border)};
`;
const Price = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].p.withConfig({
    displayName: "FeatureCard.styles__Price",
    componentId: "sc-54abcbca-14"
})`
  display: flex;
  flex-direction: column;
  margin: 0;
`;
const PriceLabel = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "FeatureCard.styles__PriceLabel",
    componentId: "sc-54abcbca-15"
})`
  ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteMuted"]}
  font-size: 14px;
  line-height: 20px;
`;
const PriceAmount = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "FeatureCard.styles__PriceAmount",
    componentId: "sc-54abcbca-16"
})`
  font-family: ${({ theme })=>theme.font.primaryFamily};
  font-size: 28px;
  font-weight: 700;
  line-height: 1.1;
  color: ${({ theme })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteVar"])('heading', theme.palette.site.navy)};
  white-space: nowrap;
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/FeatureCard/FeatureCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CardIconChip",
    ()=>CardIconChip,
    "FeatureCard",
    ()=>FeatureCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/image-component.js [app-client] (ecmascript) <export Image as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$IconChip$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/IconChip/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$IconChip$2f$IconChip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/IconChip/IconChip.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$CardHalo$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/CardHalo/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$CardHalo$2f$CardHalo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/CardHalo/CardHalo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$ArrowLink$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/ArrowLink/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$ArrowLink$2f$ArrowLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/ArrowLink/ArrowLink.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$LinkButton$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/LinkButton/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Button$2f$Button$2e$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Button/Button.types.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$IconChip$2f$IconChip$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/IconChip/IconChip.styles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/lib/hex/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$shape$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/hex/shape.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$FeatureCard$2f$FeatureCard$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/FeatureCard/FeatureCard.styles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$FeatureCard$2f$cardText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/FeatureCard/cardText.ts [app-client] (ecmascript)");
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
/** #2194: Rand der Icon-Wabe zum Nachzeichnen (viewBox 100 × 100, Form wie die Chip-Maske) */ const OUTLINE_PATH = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$shape$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["roundedHexagonPath"])({
    width: 100,
    height: 100
}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$shape$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexCornerRadius"])(100));
function CardIconChip({ icon, size = 'small', dataTestId }) {
    if (/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isValidElement(icon)) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$IconChip$2f$IconChip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconChipFrame"], {
            tone: "green",
            shape: "hex",
            size: size,
            dataTestId: dataTestId,
            children: icon
        }, void 0, false, {
            fileName: "[project]/apps/web/src/app/components/Molecule/FeatureCard/FeatureCard.tsx",
            lineNumber: 64,
            columnNumber: 7
        }, this);
    }
    const spec = icon;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$IconChip$2f$IconChip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconChip"], {
        name: spec.name,
        tone: spec.tone,
        shape: "hex",
        size: size,
        dataTestId: dataTestId
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Molecule/FeatureCard/FeatureCard.tsx",
        lineNumber: 71,
        columnNumber: 5
    }, this);
}
_c = CardIconChip;
/** #2194: Chip mit Rand, der sich beim Hover der Karte nachzeichnet */ function DrawnChip({ icon, size, dataTestId }) {
    const m = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$IconChip$2f$IconChip$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MASSE"][size];
    const chip = 2 * m.pad + m.icon;
    const tone = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isValidElement(icon) ? 'green' : icon.tone ?? 'green';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$FeatureCard$2f$FeatureCard$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChipFrame"], {
        "data-tone": tone,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CardIconChip, {
                icon: icon,
                size: size,
                dataTestId: dataTestId
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Molecule/FeatureCard/FeatureCard.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$FeatureCard$2f$FeatureCard$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChipOutline"], {
                $ring: m.ring,
                $chip: chip,
                viewBox: "0 0 100 100",
                "aria-hidden": "true",
                "data-testid": dataTestId ? `${dataTestId}-outline` : undefined,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: OUTLINE_PATH,
                    pathLength: 1
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Molecule/FeatureCard/FeatureCard.tsx",
                    lineNumber: 90,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Molecule/FeatureCard/FeatureCard.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Molecule/FeatureCard/FeatureCard.tsx",
        lineNumber: 81,
        columnNumber: 5
    }, this);
}
_c1 = DrawnChip;
/** Beschreibung: ein Absatz wie bisher; mit Leerzeilen Absätze, Zeilen „- …" als Liste (#2197) */ function CardDescription({ text, dataTestId }) {
    const bloecke = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$FeatureCard$2f$cardText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cardTextBlocks"])(text);
    if (bloecke.length === 1 && !bloecke[0].items.length && !bloecke[0].label.includes('\n')) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$FeatureCard$2f$FeatureCard$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"], {
        "data-testid": dataTestId,
        children: bloecke[0].label
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Molecule/FeatureCard/FeatureCard.tsx",
        lineNumber: 152,
        columnNumber: 12
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$FeatureCard$2f$FeatureCard$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextBlock"], {
        "data-testid": dataTestId,
        children: bloecke.map((block, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
                children: [
                    block.label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$FeatureCard$2f$FeatureCard$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextLabel"], {
                        $list: block.items.length > 0,
                        children: block.label
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Molecule/FeatureCard/FeatureCard.tsx",
                        lineNumber: 157,
                        columnNumber: 27
                    }, this),
                    block.items.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$FeatureCard$2f$FeatureCard$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextList"], {
                        "data-testid": `${dataTestId}-list-${i}`,
                        children: block.items.map((item, k)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: item
                            }, k, false, {
                                fileName: "[project]/apps/web/src/app/components/Molecule/FeatureCard/FeatureCard.tsx",
                                lineNumber: 161,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Molecule/FeatureCard/FeatureCard.tsx",
                        lineNumber: 159,
                        columnNumber: 13
                    }, this)
                ]
            }, i, true, {
                fileName: "[project]/apps/web/src/app/components/Molecule/FeatureCard/FeatureCard.tsx",
                lineNumber: 156,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Molecule/FeatureCard/FeatureCard.tsx",
        lineNumber: 154,
        columnNumber: 5
    }, this);
}
_c2 = CardDescription;
/**
 * Karte im Stil von plastship.com (#1199): optional Bild oben, Icon-Chip,
 * Titel (verlinkt mit Pfeil, wenn `ctaHref` gesetzt ist) und graue Beschreibung.
 */ const FeatureCard = (props)=>{
    const { title, titleTag = 'h3', description, icon, image, ctaHref, shadow, compact = false, accent = false, stretched = false, drawIcon = false, layer, price, actionLabel, onAction, className, dataTestId = 'feature-card' } = props;
    // #2197: sichtbarer Button statt verlinktem Titel
    const knopf = Boolean(actionLabel && ctaHref);
    const verlinkt = Boolean(ctaHref) && !knopf;
    const preis = price ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$FeatureCard$2f$cardText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitPrice"])(price) : null;
    // #2197: Umbruch nach Schrägstrich erlauben, sonst nur an Wortgrenzen
    const titel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$FeatureCard$2f$cardText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["titleBreakParts"])(title).map((stueck, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
            children: [
                i > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("wbr", {}, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Molecule/FeatureCard/FeatureCard.tsx",
                    lineNumber: 202,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                stueck
            ]
        }, i, true, {
            fileName: "[project]/apps/web/src/app/components/Molecule/FeatureCard/FeatureCard.tsx",
            lineNumber: 201,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)));
    const ecke = compact && Boolean(icon) && !image;
    // #2187: kompakt ohne Icon und ohne Hervorhebung — leere Wabe, Titel mittig
    const schlicht = compact && !icon && !image && !accent;
    const chip = (size)=>icon && (drawIcon ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DrawnChip, {
            icon: icon,
            size: size,
            dataTestId: `${dataTestId}-chip`
        }, void 0, false, {
            fileName: "[project]/apps/web/src/app/components/Molecule/FeatureCard/FeatureCard.tsx",
            lineNumber: 212,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CardIconChip, {
            icon: icon,
            size: size,
            dataTestId: `${dataTestId}-chip`
        }, void 0, false, {
            fileName: "[project]/apps/web/src/app/components/Molecule/FeatureCard/FeatureCard.tsx",
            lineNumber: 214,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0)));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$FeatureCard$2f$FeatureCard$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        className: className,
        "data-testid": dataTestId,
        "data-linked": verlinkt,
        "data-compact": compact ? 'true' : undefined,
        "data-accent": accent ? 'true' : undefined,
        $shadow: shadow ?? verlinkt,
        $interactive: verlinkt,
        $accent: accent,
        $compact: compact,
        $layered: Boolean(layer),
        children: [
            layer,
            verlinkt && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$CardHalo$2f$CardHalo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHalo"], {
                dataTestId: `${dataTestId}-halo`
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Molecule/FeatureCard/FeatureCard.tsx",
                lineNumber: 232,
                columnNumber: 20
            }, ("TURBOPACK compile-time value", void 0)),
            image && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$FeatureCard$2f$FeatureCard$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ImageWrapper"], {
                "data-testid": `${dataTestId}-image`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__["default"], {
                    src: image,
                    alt: title,
                    width: 704,
                    height: 396,
                    sizes: "(max-width: 640px) 100vw, 33vw"
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Molecule/FeatureCard/FeatureCard.tsx",
                    lineNumber: 235,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Molecule/FeatureCard/FeatureCard.tsx",
                lineNumber: 234,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            ecke && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$FeatureCard$2f$FeatureCard$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CornerIcon"], {
                "data-testid": `${dataTestId}-icon`,
                "data-corner": "true",
                children: chip('large')
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Molecule/FeatureCard/FeatureCard.tsx",
                lineNumber: 246,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$FeatureCard$2f$FeatureCard$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Body"], {
                $compact: ecke,
                $plain: schlicht,
                "data-card-body": "",
                children: [
                    schlicht && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$FeatureCard$2f$FeatureCard$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexMark"], {
                        "aria-hidden": "true",
                        "data-testid": `${dataTestId}-mark`
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Molecule/FeatureCard/FeatureCard.tsx",
                        lineNumber: 252,
                        columnNumber: 22
                    }, ("TURBOPACK compile-time value", void 0)),
                    icon && !ecke && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$FeatureCard$2f$FeatureCard$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconWrapper"], {
                        "data-testid": `${dataTestId}-icon`,
                        children: chip('small')
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Molecule/FeatureCard/FeatureCard.tsx",
                        lineNumber: 254,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$FeatureCard$2f$FeatureCard$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
                                as: titleTag,
                                "data-testid": `${dataTestId}-title`,
                                "data-title-tag": titleTag,
                                children: ctaHref && !knopf ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$ArrowLink$2f$ArrowLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowLink"], {
                                    href: ctaHref,
                                    stretched: stretched,
                                    dataTestId: `${dataTestId}-cta`,
                                    children: titel
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/components/Molecule/FeatureCard/FeatureCard.tsx",
                                    lineNumber: 260,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)) : titel
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Molecule/FeatureCard/FeatureCard.tsx",
                                lineNumber: 258,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CardDescription, {
                                text: description,
                                dataTestId: `${dataTestId}-description`
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Molecule/FeatureCard/FeatureCard.tsx",
                                lineNumber: 268,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/app/components/Molecule/FeatureCard/FeatureCard.tsx",
                        lineNumber: 257,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    (preis || knopf) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$FeatureCard$2f$FeatureCard$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Footer"], {
                        "data-card-footer": "",
                        "data-testid": `${dataTestId}-footer`,
                        children: [
                            preis && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$FeatureCard$2f$FeatureCard$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Price"], {
                                "data-testid": `${dataTestId}-price`,
                                children: [
                                    preis.label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$FeatureCard$2f$FeatureCard$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PriceLabel"], {
                                        children: preis.label
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/components/Molecule/FeatureCard/FeatureCard.tsx",
                                        lineNumber: 275,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$FeatureCard$2f$FeatureCard$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PriceAmount"], {
                                        children: preis.amount
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/components/Molecule/FeatureCard/FeatureCard.tsx",
                                        lineNumber: 276,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/app/components/Molecule/FeatureCard/FeatureCard.tsx",
                                lineNumber: 274,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            knopf && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$LinkButton$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: ctaHref,
                                modifier: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Button$2f$Button$2e$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ButtonModifier"].PRIMARY,
                                onClick: onAction,
                                dataTestId: `${dataTestId}-action`,
                                children: actionLabel
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Molecule/FeatureCard/FeatureCard.tsx",
                                lineNumber: 280,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/app/components/Molecule/FeatureCard/FeatureCard.tsx",
                        lineNumber: 272,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/components/Molecule/FeatureCard/FeatureCard.tsx",
                lineNumber: 251,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Molecule/FeatureCard/FeatureCard.tsx",
        lineNumber: 218,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c3 = FeatureCard;
;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "CardIconChip");
__turbopack_context__.k.register(_c1, "DrawnChip");
__turbopack_context__.k.register(_c2, "CardDescription");
__turbopack_context__.k.register(_c3, "FeatureCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/FeatureCard/cardText.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * #2197: Text einer Karte — reine Regeln ohne DOM.
 *
 * Beschreibung: Absätze durch Leerzeilen; in einem Absatz werden Zeilen mit
 * „- " zur Liste, die Zeile davor ist ihre Beschriftung („Nutzen:").
 * Preis: „Preis: 250€" → Beschriftung und Betrag (der Betrag steht groß).
 */ __turbopack_context__.s([
    "cardTextBlocks",
    ()=>cardTextBlocks,
    "splitPrice",
    ()=>splitPrice,
    "titleBreakParts",
    ()=>titleBreakParts
]);
function cardTextBlocks(text) {
    return text.replace(/\r\n/g, '\n').split(/\n\s*\n/).map((a)=>a.trim()).filter(Boolean).map((absatz)=>{
        const zeilen = absatz.split('\n').map((z)=>z.trim());
        const ersteListe = zeilen.findIndex((z)=>/^[-•]\s+/.test(z));
        if (ersteListe < 0) return {
            label: zeilen.join(' '),
            items: []
        };
        return {
            label: zeilen.slice(0, ersteListe).join(' '),
            items: zeilen.slice(ersteListe).map((z)=>z.replace(/^[-•]\s+/, '')).filter(Boolean)
        };
    });
}
/** Betrag mit Euro: „250€", „40-675 €", „€ 250" */ const BETRAG = /(?:\d[\d.,]*(?:\s*[–—-]\s*\d[\d.,]*)?\s*€|€\s*\d[\d.,]*(?:\s*[–—-]\s*\d[\d.,]*)?)/u;
function splitPrice(price) {
    const treffer = BETRAG.exec(price);
    if (!treffer) return {
        label: '',
        amount: price.trim()
    };
    const label = (price.slice(0, treffer.index) + price.slice(treffer.index + treffer[0].length)).replace(/[:：\s]+$/u, '').trim();
    return {
        label,
        amount: treffer[0].trim()
    };
}
function titleBreakParts(title) {
    return title.split(/(?<=\/)/).filter(Boolean);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/FeatureCard/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$FeatureCard$2f$FeatureCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/FeatureCard/FeatureCard.tsx [app-client] (ecmascript)");
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$FeatureCard$2f$FeatureCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FeatureCard"];
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/HexContentBackdrop/HexContentBackdrop.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HaloTile",
    ()=>HaloTile,
    "Root",
    ()=>Root,
    "Tile",
    ()=>Tile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/colors.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$hex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/hex.ts [app-client] (ecmascript) <locals>");
'use client';
;
;
;
/* Dieselbe Bewegung wie die Kacheln des Übergangs; Zielhelligkeit je Kachel aus --alpha. */ const pop = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframes"]`
  from { opacity: 0; transform: scale(0) rotate(-14deg); }
  to { opacity: var(--alpha); transform: scale(1) rotate(0deg); }
`;
const fadeOut = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframes"]`
  from { opacity: var(--alpha); }
  to { opacity: 0; }
`;
const Root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "HexContentBackdrop.styles__Root",
    componentId: "sc-3d26f569-0"
})`
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  /* Layout/Style/Paint bleiben in dieser Ebene — 1000+ Kacheln invalidieren nicht die Seite */
  contain: layout style paint;
  /* #2192: helle Waben auf dunkler Fläche liegen normal darüber */
  mix-blend-mode: ${({ $tone })=>$tone === 'light' ? 'normal' : 'multiply'};
`;
const Tile = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "HexContentBackdrop.styles__Tile",
    componentId: "sc-3d26f569-1"
})`
  position: absolute;
  left: var(--x);
  top: var(--y);
  width: var(--size);
  height: var(--size);
  ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$hex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["roundedHexagonMask"]}
  background: ${({ $tone, theme })=>$tone === 'light' ? theme.palette.text.onAccent : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].PRIMARY};
  opacity: 0;
  will-change: transform, opacity;

  ${({ $state, $pop, $partial })=>$state === 'active' && ($partial ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
          animation:
            ${pop} ${$pop}ms cubic-bezier(0.2, 0.8, 0.2, 1) var(--delay) both,
            ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$hex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hexShimmer"]} var(--shimmer-period) ease-in-out calc(var(--delay) + ${$pop}ms) infinite;
        ` : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
          animation: ${pop} ${$pop}ms cubic-bezier(0.2, 0.8, 0.2, 1) both;
          animation-delay: var(--delay);
        `)}

  ${({ $state, $leave, $leaveDelay })=>$state === 'leaving' && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
      animation: ${fadeOut} ${$leave}ms ease-in ${$leaveDelay}ms both;
    `}

  @media (prefers-reduced-motion: reduce) {
    /* nur die erste Animation (pop bzw. fadeOut) — kein Atmen */
    animation-name: ${({ $state })=>$state === 'leaving' ? fadeOut : pop};
    animation-duration: 200ms;
    animation-delay: 0ms;
  }
`;
const HaloTile = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "HexContentBackdrop.styles__HaloTile",
    componentId: "sc-3d26f569-2"
})`
  position: absolute;
  left: var(--x);
  top: var(--y);
  width: var(--size);
  height: var(--size);
  ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$hex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["roundedHexagonMask"]}
  background: ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].PRIMARY};
  opacity: var(--alpha);
  ${({ $partial })=>$partial && __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$hex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hexShimmerAnimation"]}
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/HexContentBackdrop/HexContentBackdrop.tsx [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BACKDROP_LEAF_ATTRIBUTE",
    ()=>BACKDROP_LEAF_ATTRIBUTE,
    "HEX_FACE_ATTRIBUTE",
    ()=>HEX_FACE_ATTRIBUTE,
    "HexContentBackdrop",
    ()=>HexContentBackdrop,
    "LIGHT_TONE_ALPHA",
    ()=>LIGHT_TONE_ALPHA,
    "default",
    ()=>__TURBOPACK__default__export__,
    "formatHexFace",
    ()=>formatHexFace,
    "layoutRect",
    ()=>layoutRect,
    "measureAnchor",
    ()=>measureAnchor,
    "parseHexFace",
    ()=>parseHexFace,
    "useContentRects",
    ()=>useContentRects,
    "visibleRects",
    ()=>visibleRects
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/lib/hex/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$fray$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/hex/fray.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$grid$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/hex/grid.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexContentBackdrop$2f$backdropCells$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/HexContentBackdrop/backdropCells.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexContentBackdrop$2f$HexContentBackdrop$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/HexContentBackdrop/HexContentBackdrop.styles.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const LIGHT_TONE_ALPHA = 0.14;
const BACKDROP_LEAF_ATTRIBUTE = 'data-backdrop-leaf';
const LEAF_SELECTOR = `h1, h2, h3, h4, p, button, a, [${BACKDROP_LEAF_ATTRIBUTE}]`;
const layoutRect = (el, until)=>{
    let left = 0;
    let top = 0;
    let node = el;
    while(node && node !== until){
        left += node.offsetLeft;
        top += node.offsetTop;
        node = node.offsetParent;
    }
    return {
        left,
        top,
        right: left + el.offsetWidth,
        bottom: top + el.offsetHeight
    };
};
const HEX_FACE_ATTRIBUTE = 'data-hex-face';
const formatHexFace = (face, box)=>[
        face.left - box.left,
        face.top - box.top,
        face.right - box.left,
        face.bottom - box.top
    ].map((v)=>Math.round(v)).join(',');
const parseHexFace = (value)=>{
    if (!value) return null;
    const parts = value.split(',').map(Number);
    if (parts.length !== 4 || parts.some((v)=>!Number.isFinite(v))) return null;
    const [left, top, right, bottom] = parts;
    return right > left && bottom > top ? {
        left,
        top,
        right,
        bottom
    } : null;
};
const visibleRects = (el, stageEl)=>{
    const base = layoutRect(el, stageEl);
    const face = parseHexFace(el.getAttribute(HEX_FACE_ATTRIBUTE));
    if (face) {
        return [
            {
                left: base.left + face.left,
                top: base.top + face.top,
                right: base.left + face.right,
                bottom: base.top + face.bottom
            }
        ];
    }
    const tag = el.tagName.toLowerCase();
    if (tag === 'button' || tag === 'a' || typeof document === 'undefined' || !document.createRange) return [
        base
    ];
    const client = el.getBoundingClientRect();
    const dx = base.left - client.left;
    const dy = base.top - client.top;
    const range = document.createRange();
    range.selectNodeContents(el);
    const lines = Array.from(range.getClientRects?.() ?? []).filter((r)=>r.width > 0 && r.height > 0).map((r)=>({
            left: r.left + dx,
            top: r.top + dy,
            right: r.right + dx,
            bottom: r.bottom + dy
        }));
    return lines.length > 0 ? lines : [
        base
    ];
};
const measureAnchor = (anchor, stageEl, pad)=>{
    const leaves = Array.from(anchor.querySelectorAll(LEAF_SELECTOR));
    const children = Array.from(anchor.children);
    const targets = leaves.length > 0 ? leaves : children.length > 0 ? children : [
        anchor
    ];
    return targets.filter((el)=>el.offsetWidth > 0 && el.offsetHeight > 0).flatMap((el)=>visibleRects(el, stageEl)).map((r)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexContentBackdrop$2f$backdropCells$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["padRect"])(r, pad, pad / 2));
};
const useContentRects = (frameRef, anchorRef, state, padding = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexContentBackdrop$2f$backdropCells$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_PADDING"])=>{
    _s();
    const [stage, setStage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [rects, setRects] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useContentRects.useEffect": ()=>{
            const frame = frameRef.current;
            if (!frame) return;
            // Der Rahmen füllt die Bühne; sein offsetParent ist die Ebene, auf die
            // auch die Inhalte bezogen sind → gleiche Koordinaten für Zellen und Rechtecke.
            const stageEl = frame.offsetParent ?? frame.parentElement;
            const measure = {
                "useContentRects.useEffect.measure": ()=>{
                    const width = frame.offsetWidth;
                    const height = frame.offsetHeight;
                    if (width <= 0 || height <= 0) return;
                    setStage({
                        "useContentRects.useEffect.measure": (prev)=>prev && prev.width === width && prev.height === height ? prev : {
                                width,
                                height
                            }
                    }["useContentRects.useEffect.measure"]);
                    const anchor = anchorRef.current;
                    const next = anchor ? measureAnchor(anchor, stageEl, padding) : [];
                    setRects({
                        "useContentRects.useEffect.measure": (prev)=>JSON.stringify(prev) === JSON.stringify(next) ? prev : next
                    }["useContentRects.useEffect.measure"]);
                }
            }["useContentRects.useEffect.measure"];
            measure();
            // Webfonts ändern Zeilenumbrüche und Höhen → nach dem Laden nachmessen
            if (typeof document !== 'undefined' && document.fonts?.ready) {
                document.fonts.ready.then(measure).catch({
                    "useContentRects.useEffect": ()=>undefined
                }["useContentRects.useEffect"]);
            }
            if (typeof ResizeObserver === 'undefined') return;
            const observer = new ResizeObserver(measure);
            observer.observe(frame);
            const anchor = anchorRef.current;
            if (anchor) {
                observer.observe(anchor);
                anchor.querySelectorAll(LEAF_SELECTOR).forEach({
                    "useContentRects.useEffect": (el)=>observer.observe(el)
                }["useContentRects.useEffect"]);
            }
            // Der Waben-Button misst sich erst nach diesem Effekt und meldet seine
            // Fläche danach per Attribut — ohne Größenänderung, darum eigens beobachten
            const faces = anchor && typeof MutationObserver !== 'undefined' ? new MutationObserver(measure) : null;
            faces?.observe(anchor, {
                subtree: true,
                attributes: true,
                attributeFilter: [
                    HEX_FACE_ATTRIBUTE
                ]
            });
            return ({
                "useContentRects.useEffect": ()=>{
                    observer.disconnect();
                    faces?.disconnect();
                }
            })["useContentRects.useEffect"];
        }
    }["useContentRects.useEffect"], [
        frameRef,
        anchorRef,
        state,
        padding
    ]);
    return {
        stage,
        rects
    };
};
_s(useContentRects, "8Iw534O54Ve1TbbNM5khj2tvW0A=");
const HexContentBackdrop = ({ anchorRef, state, duration, enterDelay = duration * 0.2, enterDuration = duration * 0.8, leaveDelay = 0, leaveDuration = duration * 0.3, columns = 12, padding = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexContentBackdrop$2f$backdropCells$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_PADDING"], waveAlphas = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$fray$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_FRAY_STEPS"], tone = 'primary', dataTestId = 'hex-content-backdrop', className })=>{
    _s1();
    const rootRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { stage, rects } = useContentRects(rootRef, anchorRef, state, padding);
    const tiles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HexContentBackdrop.useMemo[tiles]": ()=>{
            // Verborgene Slides halten keine Kacheln im DOM — bei acht Slides wären das
            // sonst mehrere hundert unnötige Knoten.
            if (state === 'hidden' || !stage || rects.length === 0) return [];
            const cells = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$grid$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexGridCells"])(stage.width, stage.height, columns);
            const byKey = new Map(cells.map({
                "HexContentBackdrop.useMemo[tiles]": (c)=>[
                        c.key,
                        c
                    ]
            }["HexContentBackdrop.useMemo[tiles]"]));
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexContentBackdrop$2f$backdropCells$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["backdropCells"])(cells, rects, waveAlphas, enterDelay, enterDuration).flatMap({
                "HexContentBackdrop.useMemo[tiles]": (spec)=>{
                    const cell = byKey.get(spec.key);
                    if (!cell) return [];
                    // 1 px Überstand je Seite gegen Haarlinien zwischen den Kacheln
                    return [
                        {
                            ...cell,
                            x: cell.x - 1,
                            y: cell.y - 1,
                            size: cell.size + 2,
                            alpha: spec.alpha,
                            delay: spec.delay
                        }
                    ];
                }
            }["HexContentBackdrop.useMemo[tiles]"]);
        }
    }["HexContentBackdrop.useMemo[tiles]"], [
        state,
        stage,
        rects,
        columns,
        waveAlphas,
        enterDelay,
        enterDuration
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexContentBackdrop$2f$HexContentBackdrop$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        ref: rootRef,
        className: className,
        "data-testid": dataTestId,
        "data-ready": tiles.length > 0 ? 'true' : 'false',
        "data-tiles": tiles.length,
        "data-rects": rects.length,
        "data-tone": tone,
        $tone: tone,
        "aria-hidden": "true",
        children: tiles.map((tile)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexContentBackdrop$2f$HexContentBackdrop$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tile"], {
                $state: state,
                $pop: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexContentBackdrop$2f$backdropCells$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["backdropPopDuration"])(enterDuration),
                $leaveDelay: Math.round(leaveDelay),
                $leave: Math.round(leaveDuration),
                $partial: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$fray$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPartial"])(tile.alpha),
                $tone: tone,
                style: {
                    '--x': `${tile.x}px`,
                    '--y': `${tile.y}px`,
                    '--size': `${tile.size}px`,
                    '--alpha': String(tone === 'light' ? +(tile.alpha * LIGHT_TONE_ALPHA).toFixed(3) : tile.alpha),
                    '--delay': `${tile.delay}ms`,
                    '--shimmer-period': `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$fray$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shimmerTiming"])(tile).period}ms`
                }
            }, tile.key, false, {
                fileName: "[project]/apps/web/src/app/components/Molecule/HexContentBackdrop/HexContentBackdrop.tsx",
                lineNumber: 281,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)))
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Molecule/HexContentBackdrop/HexContentBackdrop.tsx",
        lineNumber: 269,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(HexContentBackdrop, "MFzBzLTyj5G2auNg4YaLIOFWCsQ=", false, function() {
    return [
        useContentRects
    ];
});
_c = HexContentBackdrop;
const __TURBOPACK__default__export__ = HexContentBackdrop;
var _c;
__turbopack_context__.k.register(_c, "HexContentBackdrop");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/HexContentBackdrop/HexHaloBackdrop.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HexHaloBackdrop",
    ()=>HexHaloBackdrop,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/lib/hex/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$fray$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/hex/fray.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$grid$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/hex/grid.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexContentBackdrop$2f$backdropCells$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/HexContentBackdrop/backdropCells.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexContentBackdrop$2f$HexContentBackdrop$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/HexContentBackdrop/HexContentBackdrop.styles.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const HexHaloBackdrop = ({ width, height, columns, keys, steps = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$fray$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_FRAY_STEPS"], dataTestId = 'hex-halo-backdrop', className })=>{
    _s();
    const tiles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HexHaloBackdrop.useMemo[tiles]": ()=>{
            if (width <= 0 || height <= 0 || keys.length === 0) return [];
            const cells = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$grid$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexGridCells"])(width, height, columns);
            const byKey = new Map(cells.map({
                "HexHaloBackdrop.useMemo[tiles]": (c)=>[
                        c.key,
                        c
                    ]
            }["HexHaloBackdrop.useMemo[tiles]"]));
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexContentBackdrop$2f$backdropCells$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["haloCells"])(cells, keys, steps).flatMap({
                "HexHaloBackdrop.useMemo[tiles]": ({ key, alpha })=>{
                    const cell = byKey.get(key);
                    return cell ? [
                        {
                            ...cell,
                            alpha
                        }
                    ] : [];
                }
            }["HexHaloBackdrop.useMemo[tiles]"]);
        }
    }["HexHaloBackdrop.useMemo[tiles]"], [
        width,
        height,
        columns,
        keys,
        steps
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexContentBackdrop$2f$HexContentBackdrop$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        className: className,
        "data-testid": dataTestId,
        "data-tiles": tiles.length,
        "aria-hidden": "true",
        children: tiles.map((tile)=>{
            const { period, offset } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$fray$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shimmerTiming"])(tile);
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexContentBackdrop$2f$HexContentBackdrop$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HaloTile"], {
                $partial: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$fray$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPartial"])(tile.alpha),
                style: {
                    // 1 px Überstand je Seite gegen Haarlinien zwischen den Kacheln
                    '--x': `${tile.x - 1}px`,
                    '--y': `${tile.y - 1}px`,
                    '--size': `${tile.size + 2}px`,
                    '--alpha': String(tile.alpha),
                    '--shimmer-period': `${period}ms`,
                    '--shimmer-offset': `${offset}ms`
                }
            }, tile.key, false, {
                fileName: "[project]/apps/web/src/app/components/Molecule/HexContentBackdrop/HexHaloBackdrop.tsx",
                lineNumber: 52,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0));
        })
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Molecule/HexContentBackdrop/HexHaloBackdrop.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(HexHaloBackdrop, "qa8oTNShHyWfFoT18sRGAHwTCMc=");
_c = HexHaloBackdrop;
const __TURBOPACK__default__export__ = HexHaloBackdrop;
var _c;
__turbopack_context__.k.register(_c, "HexHaloBackdrop");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/HexContentBackdrop/backdropCells.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_PADDING",
    ()=>DEFAULT_PADDING,
    "backdropCells",
    ()=>backdropCells,
    "backdropPopDuration",
    ()=>backdropPopDuration,
    "frayedCoverage",
    ()=>frayedCoverage,
    "haloAroundRects",
    ()=>haloAroundRects,
    "haloAroundSeeds",
    ()=>haloAroundSeeds,
    "haloCells",
    ()=>haloCells,
    "padRect",
    ()=>padRect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/lib/hex/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$fray$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/hex/fray.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$grid$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/hex/grid.ts [app-client] (ecmascript)");
;
const DEFAULT_PADDING = 20;
const padRect = (r, pad, padY = pad)=>({
        left: r.left - pad,
        top: r.top - padY,
        right: r.right + pad,
        bottom: r.bottom + padY
    });
const backdropPopDuration = (enterDuration)=>Math.round(enterDuration * 0.5);
const frayedCoverage = (cells, isSeed, steps, jitter = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$fray$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_FRAY_JITTER"])=>{
    const result = new Map();
    if (cells.length === 0 || steps.length === 0) return result;
    const waves = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$grid$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["waveDistances"])(cells, isSeed, steps.length);
    for (const cell of cells){
        const wave = waves.get(cell.key);
        if (wave === undefined) continue;
        const alpha = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$fray$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frayedLevel"])(cell, wave, steps, jitter);
        if (alpha > 0.005) result.set(cell.key, Math.round(alpha * 1000) / 1000);
    }
    return result;
};
const backdropCells = (cells, rects, waveAlphas, enterDelay, enterDuration, jitter = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$fray$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_FRAY_JITTER"])=>{
    if (cells.length === 0 || rects.length === 0) return [];
    const levels = frayedCoverage(cells, (cell)=>rects.some((r)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$grid$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexIntersectsRect"])(cell, r)), waveAlphas, jitter);
    const lit = cells.filter((c)=>levels.has(c.key));
    if (lit.length === 0) return [];
    const bounds = {
        left: Math.min(...lit.map((c)=>c.x)),
        top: Math.min(...lit.map((c)=>c.y)),
        right: Math.max(...lit.map((c)=>c.x + c.size)),
        bottom: Math.max(...lit.map((c)=>c.y + c.size))
    };
    const spread = enterDuration * 0.5;
    return lit.map((cell)=>{
        const along = (cell.cx - bounds.left + (bounds.bottom - cell.cy)) / (bounds.right - bounds.left + (bounds.bottom - bounds.top) || 1);
        return {
            key: cell.key,
            alpha: levels.get(cell.key) ?? 0,
            delay: Math.round(enterDelay + Math.min(1, Math.max(0, along)) * spread)
        };
    });
};
const haloCells = (cells, keys, steps = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$fray$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_FRAY_STEPS"], jitter = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$fray$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_FRAY_JITTER"])=>{
    if (keys.length === 0) return [];
    const seeds = new Set(keys);
    const levels = frayedCoverage(cells, (cell)=>seeds.has(cell.key), steps, jitter);
    return Array.from(levels, ([key, alpha])=>({
            key,
            alpha
        }));
};
const haloAroundRects = (width, height, columns, rects, steps = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$fray$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_FRAY_STEPS"], jitter = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$fray$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_FRAY_JITTER"])=>{
    if (rects.length === 0) return [];
    return haloAroundSeeds(width, height, columns, rects, (cell)=>rects.some((r)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$grid$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexIntersectsRect"])(cell, r)), steps, jitter);
};
const haloAroundSeeds = (width, height, columns, near, isSeed, steps = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$fray$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_FRAY_STEPS"], jitter = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$fray$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_FRAY_JITTER"])=>{
    if (near.length === 0) return [];
    const all = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$grid$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexGridCells"])(width, height, columns);
    if (all.length === 0) return [];
    const reach = all[0].size * (steps.length + 2);
    const left = Math.min(...near.map((r)=>r.left)) - reach;
    const top = Math.min(...near.map((r)=>r.top)) - reach;
    const right = Math.max(...near.map((r)=>r.right)) + reach;
    const bottom = Math.max(...near.map((r)=>r.bottom)) + reach;
    const cells = all.filter((c)=>c.x + c.size >= left && c.x <= right && c.y + c.size >= top && c.y <= bottom);
    const levels = frayedCoverage(cells, isSeed, steps, jitter);
    return cells.flatMap((cell)=>{
        const alpha = levels.get(cell.key);
        return alpha === undefined ? [] : [
            {
                ...cell,
                alpha
            }
        ];
    });
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/HexContentBackdrop/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexContentBackdrop$2f$HexContentBackdrop$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/HexContentBackdrop/HexContentBackdrop.tsx [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexContentBackdrop$2f$backdropCells$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/HexContentBackdrop/backdropCells.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexContentBackdrop$2f$HexHaloBackdrop$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/HexContentBackdrop/HexHaloBackdrop.tsx [app-client] (ecmascript)");
;
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/HexCounter/HexCounter.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Detail",
    ()=>Detail,
    "Face",
    ()=>Face,
    "Figure",
    ()=>Figure,
    "Item",
    ()=>Item,
    "Label",
    ()=>Label,
    "List",
    ()=>List,
    "Pellet",
    ()=>Pellet,
    "Pellets",
    ()=>Pellets,
    "Rim",
    ()=>Rim,
    "SealCheck",
    ()=>SealCheck,
    "SealRing",
    ()=>SealRing,
    "Shimmer",
    ()=>Shimmer,
    "Svg",
    ()=>Svg,
    "Value",
    ()=>Value
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/site.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easingCss$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/motion/easingCss.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexCounter$2f$hexCounterTimeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/HexCounter/hexCounterTimeline.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
/**
 * #2190: Zählwerk in Waben. Bewegung nur über `data-state` am Root
 * (lib/motion/entrance): idle = Startpose (Wabe weg, Rollen auf 0, leer),
 * running = Teile nach hexCounterTimeline.ts, ready = Endbild plus Kippen
 * unter dem Zeiger, pending = Endbild (Server, ohne JS), static = Endbild
 * ohne Füllung und ohne jede Bewegung („Bewegung reduzieren").
 *
 * `data-tone`: `band` auf dunkler Fläche (Navy in beiden Themes), sonst
 * `plain`; `data-surface="tint"` hebt die Wabe auf der Tönung weiß ab.
 */ const FEIN_ZEIGER = '@media (hover: hover) and (pointer: fine)';
const ms = (wert)=>`${wert}ms`;
const lauf = (part, index)=>`${ms(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexCounter$2f$hexCounterTimeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HEX_COUNTER_TIMING"][part].duration)} ${ms((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexCounter$2f$hexCounterTimeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexCounterDelay"])(part, index))}`;
const aufspringen = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframes"]`
  from { opacity: 0; transform: scale(0.85); }
  to { opacity: 1; transform: scale(1); }
`;
const zeichnen = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframes"]`
  from { stroke-dashoffset: 1; }
  to { stroke-dashoffset: 0; }
`;
const fuellen = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframes"]`
  from { transform: scaleY(0); }
  to { transform: scaleY(1); }
`;
const schimmern = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframes"]`
  0% { transform: translateX(-100px); opacity: 0; }
  15% { opacity: 1; }
  85% { opacity: 1; }
  100% { transform: translateX(100px); opacity: 0; }
`;
const spalte = (cols)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
  flex-basis: calc((100% - ${cols - 1} * var(--hex-counter-gap)) / ${cols});
`;
const List = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ul.withConfig({
    displayName: "HexCounter.styles__List",
    componentId: "sc-718d90a0-0"
})`
  --hex-counter-gap: ${({ theme })=>theme.margin.large};
  --hex-face: ${({ theme })=>theme.palette.site.tint};
  --hex-rim: ${({ theme })=>theme.palette.site.border};
  --hex-pellet: ${({ theme })=>theme.palette.site.green};
  --hex-pellet-opacity: 0.3;
  --hex-value: ${({ theme })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteVar"])('accent', theme.palette.site.blue)};
  --hex-check: ${({ theme })=>theme.palette.site.green};

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${({ theme })=>theme.margin.large} var(--hex-counter-gap);
  margin: 0;
  padding: 0;
  list-style: none;

  &[data-surface='tint'] {
    --hex-face: ${({ theme })=>theme.palette.site.card};
  }

  &[data-tone='band'] {
    --hex-face: color-mix(in srgb, #ffffff 8%, transparent);
    --hex-rim: color-mix(in srgb, #ffffff 32%, transparent);
    --hex-pellet-opacity: 0.32;
    --hex-check: var(--hex-value);
  }

  @media (min-width: 640px) {
    row-gap: ${({ theme })=>theme.margin.big};
  }

  > li {
    ${({ $count })=>spalte((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexCounter$2f$hexCounterTimeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexCounterColumns"])($count).phone)}

    @media (min-width: 640px) {
      ${({ $count })=>spalte((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexCounter$2f$hexCounterTimeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexCounterColumns"])($count).tablet)}
    }

    @media (min-width: ${({ theme })=>theme.device.tablet}) {
      ${({ $count })=>spalte((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexCounter$2f$hexCounterTimeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexCounterColumns"])($count).desktop)}
    }
  }
`;
const Item = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].li.withConfig({
    displayName: "HexCounter.styles__Item",
    componentId: "sc-718d90a0-1"
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme })=>theme.margin.small};
  min-width: 0;
  max-width: 22rem;
  text-align: center;
`;
const Figure = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "HexCounter.styles__Figure",
    componentId: "sc-718d90a0-2"
})`
  position: relative;
  width: 9rem;
  aspect-ratio: 1;
  container-type: inline-size;
  transition: transform 300ms ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easingCss$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_POP_CSS"]};

  @media (min-width: 640px) {
    width: 10rem;
  }

  @media (min-width: ${({ theme })=>theme.device.tablet}) {
    width: 12rem;
  }

  /* Kippen wie die Neigung von Siegel und Kreislauf — nur mit feinem Zeiger, nach dem Eintritt */
  ${FEIN_ZEIGER} {
    [data-state='ready'] ${Item}:hover & {
      transform: perspective(600px) rotateX(10deg) rotateY(-14deg);
    }
  }
`;
const Svg = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].svg.withConfig({
    displayName: "HexCounter.styles__Svg",
    componentId: "sc-718d90a0-3"
})`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: visible;
`;
const Face = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].path.withConfig({
    displayName: "HexCounter.styles__Face",
    componentId: "sc-718d90a0-4"
})`
  fill: var(--hex-face);
  transform-origin: 50px 50px;

  [data-state='idle'] & {
    opacity: 0;
  }
  [data-state='running'] & {
    animation: ${aufspringen} ${({ $index })=>lauf('face', $index)} ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easingCss$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_POP_CSS"]} both;
  }
`;
const Rim = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].path.withConfig({
    displayName: "HexCounter.styles__Rim",
    componentId: "sc-718d90a0-5"
})`
  fill: none;
  stroke: var(--hex-rim);
  stroke-width: 1.5;
  stroke-dasharray: 1 1;
  stroke-dashoffset: 0;

  [data-state='idle'] & {
    stroke-dashoffset: 1;
  }
  [data-state='running'] & {
    animation: ${zeichnen} ${({ $index })=>lauf('rim', $index)} ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easingCss$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_REVEAL_CSS"]} both;
  }
`;
const Pellets = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].rect.withConfig({
    displayName: "HexCounter.styles__Pellets",
    componentId: "sc-718d90a0-6"
})`
  opacity: var(--hex-pellet-opacity);
  transform-box: fill-box;
  transform-origin: 50% 100%;

  [data-state='idle'] & {
    transform: scaleY(0);
  }
  [data-state='running'] & {
    animation: ${fuellen} ${({ $index })=>lauf('fill', $index)} ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easingCss$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_REVEAL_CSS"]} both;
  }
  /* „Bewegung reduzieren": Endwerte, keine Füllung */
  [data-state='static'] & {
    display: none;
  }
`;
const Pellet = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].circle.withConfig({
    displayName: "HexCounter.styles__Pellet",
    componentId: "sc-718d90a0-7"
})`
  fill: var(--hex-pellet);
`;
const Shimmer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].rect.withConfig({
    displayName: "HexCounter.styles__Shimmer",
    componentId: "sc-718d90a0-8"
})`
  opacity: 0;

  [data-state='running'] & {
    animation: ${schimmern} ${({ $index })=>lauf('shimmer', $index)} linear both;
  }
`;
const SealRing = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].path.withConfig({
    displayName: "HexCounter.styles__SealRing",
    componentId: "sc-718d90a0-9"
})`
  fill: none;
  stroke: var(--hex-check);
  stroke-width: 2.5;
  stroke-dasharray: 1 1;
  stroke-dashoffset: 0;

  [data-state='idle'] & {
    stroke-dashoffset: 1;
  }
  [data-state='running'] & {
    animation: ${zeichnen} ${({ $index })=>lauf('seal', $index)} ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easingCss$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_REVEAL_CSS"]} both;
  }
`;
const SealCheck = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].path.withConfig({
    displayName: "HexCounter.styles__SealCheck",
    componentId: "sc-718d90a0-10"
})`
  fill: none;
  stroke: var(--hex-check);
  stroke-width: 4;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 1 1;
  stroke-dashoffset: 0;

  [data-state='idle'] & {
    stroke-dashoffset: 1;
  }
  [data-state='running'] & {
    animation: ${zeichnen} ${({ $index })=>`${ms(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexCounter$2f$hexCounterTimeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HEX_COUNTER_TIMING"].seal.duration / 2)} ${ms((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexCounter$2f$hexCounterTimeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexCounterDelay"])('seal', $index) + __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexCounter$2f$hexCounterTimeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HEX_COUNTER_TIMING"].seal.duration / 2)}`}
      ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easingCss$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_POP_CSS"]} both;
  }
`;
const Value = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "HexCounter.styles__Value",
    componentId: "sc-718d90a0-11"
})`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${({ theme })=>theme.font.primaryFamily};
  font-weight: 700;
  line-height: 1;
  color: var(--hex-value);

  ${({ $chars, $seal })=>$seal ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
          align-items: flex-end;
          padding-bottom: 20cqi;
          font-size: min(1rem, ${(118 / Math.max(1, $chars)).toFixed(2)}cqi);
          letter-spacing: 0.04em;
          text-transform: uppercase;
        ` : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
          font-size: min(2rem, ${(132 / Math.max(1, $chars)).toFixed(2)}cqi);

          @media (min-width: 640px) {
            font-size: min(2.25rem, ${(132 / Math.max(1, $chars)).toFixed(2)}cqi);
          }

          @media (min-width: ${({ theme })=>theme.device.tablet}) {
            font-size: min(2.75rem, ${(132 / Math.max(1, $chars)).toFixed(2)}cqi);
          }
        `}
`;
const Label = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "HexCounter.styles__Label",
    componentId: "sc-718d90a0-12"
})`
  font-family: ${({ theme })=>theme.font.primaryFamily};
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 1.4;
  color: ${({ theme })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteVar"])('heading', theme.palette.site.heading)};
  hyphens: manual;
  overflow-wrap: normal;
  text-wrap: balance;

  @media (min-width: 640px) {
    font-size: 1.25rem;
  }
`;
const Detail = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "HexCounter.styles__Detail",
    componentId: "sc-718d90a0-13"
})`
  font-family: ${({ theme })=>theme.font.secondaryFamily};
  font-size: 1rem;
  line-height: 1.5;
  color: ${({ theme })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteVar"])('muted', theme.palette.site.muted)};
  hyphens: manual;
  text-wrap: balance;
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/HexCounter/HexCounter.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HexCounter",
    ()=>HexCounter,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useEntranceAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/useEntranceAnimation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Odometer$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Odometer/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Odometer$2f$Odometer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Odometer/Odometer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Odometer$2f$odometerParts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Odometer/odometerParts.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/lib/hex/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$shape$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/hex/shape.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexCounter$2f$hexCounterTimeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/HexCounter/hexCounterTimeline.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexCounter$2f$HexCounter$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/HexCounter/HexCounter.styles.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
/* Wabe im 100er-Rahmen, Rand für die Kante */ const WABE = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$shape$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["roundedHexagonPath"])({
    x: 2,
    y: 2,
    width: 96,
    height: 96
}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$shape$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexCornerRadius"])(96));
/* Siegel: kleiner Ring im oberen Teil, Haken darin */ const SIEGEL_RING = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$shape$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["roundedHexagonPath"])({
    x: 30,
    y: 14,
    width: 40,
    height: 40
}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$shape$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexCornerRadius"])(40));
const SIEGEL_HAKEN = 'M41 34 L47.5 40.5 L59 28';
const HexCounter = ({ items, surface = 'white', onFirstView, onFirstTilt, className, dataTestId = 'hex-counter' })=>{
    _s();
    const rootRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const maxDigits = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HexCounter.useMemo[maxDigits]": ()=>Math.max(0, ...items.map({
                "HexCounter.useMemo[maxDigits]": (item)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Odometer$2f$odometerParts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["odometerDigits"])(item.value)
            }["HexCounter.useMemo[maxDigits]"]))
    }["HexCounter.useMemo[maxDigits]"], [
        items
    ]);
    const { state, visible } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useEntranceAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEntranceAnimation"])(rootRef, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexCounter$2f$hexCounterTimeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexCounterEntranceMs"])(items.length, maxDigits));
    const uid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])().replace(/[^a-zA-Z0-9_-]/g, '');
    const gemeldet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HexCounter.useEffect": ()=>{
            if (!visible || gemeldet.current) return;
            gemeldet.current = true;
            onFirstView?.();
        }
    }["HexCounter.useEffect"], [
        visible,
        onFirstView
    ]);
    const kippen = (event)=>{
        if (event.pointerType === 'mouse' && state === 'ready') onFirstTilt?.();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexCounter$2f$HexCounter$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["List"], {
        ref: rootRef,
        className: className,
        $count: items.length,
        "data-testid": `${dataTestId}-grid-list`,
        "data-count": items.length,
        "data-state": state,
        "data-visible": visible ? 'true' : 'false',
        "data-tone": surface === 'dark' ? 'band' : 'plain',
        "data-surface": surface,
        "data-element": "stats",
        children: items.map((item, index)=>{
            const seal = !(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Odometer$2f$odometerParts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasDigit"])(item.value);
            const statId = `${dataTestId}-stat-${index}`;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexCounter$2f$HexCounter$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"], {
                "data-testid": `${dataTestId}-grid-item`,
                onPointerEnter: kippen,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexCounter$2f$HexCounter$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Figure"], {
                        "data-testid": statId,
                        "data-kind": seal ? 'seal' : 'number',
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexCounter$2f$HexCounter$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Svg"], {
                                viewBox: "0 0 100 100",
                                "aria-hidden": "true",
                                focusable: "false",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("clipPath", {
                                                id: `${uid}-wabe-${index}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: WABE
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/app/components/Molecule/HexCounter/HexCounter.tsx",
                                                    lineNumber: 110,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/components/Molecule/HexCounter/HexCounter.tsx",
                                                lineNumber: 109,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pattern", {
                                                id: `${uid}-pellets-${index}`,
                                                width: "8",
                                                height: "7",
                                                patternUnits: "userSpaceOnUse",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexCounter$2f$HexCounter$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Pellet"], {
                                                        cx: "2",
                                                        cy: "1.75",
                                                        r: "1.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/app/components/Molecule/HexCounter/HexCounter.tsx",
                                                        lineNumber: 113,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexCounter$2f$HexCounter$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Pellet"], {
                                                        cx: "6",
                                                        cy: "5.25",
                                                        r: "1.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/app/components/Molecule/HexCounter/HexCounter.tsx",
                                                        lineNumber: 114,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/src/app/components/Molecule/HexCounter/HexCounter.tsx",
                                                lineNumber: 112,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                                id: `${uid}-schimmer-${index}`,
                                                x1: "0",
                                                x2: "1",
                                                y1: "0",
                                                y2: "0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                        offset: "0",
                                                        stopColor: "#fff",
                                                        stopOpacity: "0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/app/components/Molecule/HexCounter/HexCounter.tsx",
                                                        lineNumber: 117,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                        offset: "0.5",
                                                        stopColor: "#fff",
                                                        stopOpacity: "0.35"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/app/components/Molecule/HexCounter/HexCounter.tsx",
                                                        lineNumber: 118,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                        offset: "1",
                                                        stopColor: "#fff",
                                                        stopOpacity: "0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/app/components/Molecule/HexCounter/HexCounter.tsx",
                                                        lineNumber: 119,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/src/app/components/Molecule/HexCounter/HexCounter.tsx",
                                                lineNumber: 116,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/app/components/Molecule/HexCounter/HexCounter.tsx",
                                        lineNumber: 108,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexCounter$2f$HexCounter$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Face"], {
                                        d: WABE,
                                        $index: index
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/components/Molecule/HexCounter/HexCounter.tsx",
                                        lineNumber: 122,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                        clipPath: `url(#${uid}-wabe-${index})`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexCounter$2f$HexCounter$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Pellets"], {
                                                x: "0",
                                                y: "0",
                                                width: "100",
                                                height: "100",
                                                fill: `url(#${uid}-pellets-${index})`,
                                                $index: index
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/components/Molecule/HexCounter/HexCounter.tsx",
                                                lineNumber: 124,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexCounter$2f$HexCounter$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Shimmer"], {
                                                x: "0",
                                                y: "0",
                                                width: "40",
                                                height: "100",
                                                fill: `url(#${uid}-schimmer-${index})`,
                                                $index: index
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/components/Molecule/HexCounter/HexCounter.tsx",
                                                lineNumber: 125,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/app/components/Molecule/HexCounter/HexCounter.tsx",
                                        lineNumber: 123,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexCounter$2f$HexCounter$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Rim"], {
                                        d: WABE,
                                        pathLength: 1,
                                        $index: index
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/components/Molecule/HexCounter/HexCounter.tsx",
                                        lineNumber: 127,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    seal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexCounter$2f$HexCounter$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SealRing"], {
                                                d: SIEGEL_RING,
                                                pathLength: 1,
                                                $index: index
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/components/Molecule/HexCounter/HexCounter.tsx",
                                                lineNumber: 130,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexCounter$2f$HexCounter$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SealCheck"], {
                                                d: SIEGEL_HAKEN,
                                                pathLength: 1,
                                                $index: index
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/components/Molecule/HexCounter/HexCounter.tsx",
                                                lineNumber: 131,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/app/components/Molecule/HexCounter/HexCounter.tsx",
                                        lineNumber: 129,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/app/components/Molecule/HexCounter/HexCounter.tsx",
                                lineNumber: 107,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexCounter$2f$HexCounter$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Value"], {
                                "data-testid": `${statId}-value`,
                                "data-numeric": seal ? 'false' : 'true',
                                $chars: Array.from(item.value).length,
                                $seal: seal,
                                children: seal ? item.value : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Odometer$2f$Odometer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Odometer"], {
                                    value: item.value,
                                    state: state,
                                    delay: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexCounter$2f$hexCounterTimeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexCounterDelay"])('roll', index),
                                    stagger: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexCounter$2f$hexCounterTimeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HEX_COUNTER_TIMING"].roll.digitStagger,
                                    duration: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexCounter$2f$hexCounterTimeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HEX_COUNTER_TIMING"].roll.duration,
                                    dataTestId: `${statId}-odometer`
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/components/Molecule/HexCounter/HexCounter.tsx",
                                    lineNumber: 144,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Molecule/HexCounter/HexCounter.tsx",
                                lineNumber: 135,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/app/components/Molecule/HexCounter/HexCounter.tsx",
                        lineNumber: 106,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexCounter$2f$HexCounter$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                        "data-testid": `${statId}-label`,
                        children: item.label
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Molecule/HexCounter/HexCounter.tsx",
                        lineNumber: 155,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    item.detail && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexCounter$2f$HexCounter$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Detail"], {
                        "data-testid": `${statId}-detail`,
                        children: item.detail
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Molecule/HexCounter/HexCounter.tsx",
                        lineNumber: 156,
                        columnNumber: 29
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, index, true, {
                fileName: "[project]/apps/web/src/app/components/Molecule/HexCounter/HexCounter.tsx",
                lineNumber: 105,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0));
        })
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Molecule/HexCounter/HexCounter.tsx",
        lineNumber: 89,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(HexCounter, "5JujPxnkQdRhjTH4ZePSa2LIH6A=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useEntranceAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEntranceAnimation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"]
    ];
});
_c = HexCounter;
const __TURBOPACK__default__export__ = HexCounter;
var _c;
__turbopack_context__.k.register(_c, "HexCounter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/HexCounter/hexCounterTimeline.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Eintritt des Zählwerks in Waben (#2190), Zeiten in ms ab dem ersten
 * Sichtbarwerden des Blocks. Jede Zahl beginnt `ITEM_STAGGER` nach der
 * vorigen (links nach rechts), innerhalb der Zahl laufen die Rollen von
 * rechts nach links an (`roll.digitStagger`).
 *
 * | Teil    | Beginn | Dauer | Inhalt                                          |
 * | ------- | -----: | ----: | ----------------------------------------------- |
 * | face    |      0 |   450 | blasse Wabe springt auf (0,85 → 1)              |
 * | rim     |    100 |   700 | Wabenkante zeichnet sich                        |
 * | roll    |    200 |  1200 | Ziffern rollen von 0 auf den Wert               |
 * | fill    |    200 |  1300 | Pellet-Punkte füllen die Wabe von unten         |
 * | seal    |    500 |   700 | Wert ohne Ziffer: Siegelring und Haken zeichnen |
 * | shimmer |   1500 |   700 | Lichtstreif läuft einmal über die Wabe          |
 */ __turbopack_context__.s([
    "HEX_COUNTER_ITEM_STAGGER",
    ()=>HEX_COUNTER_ITEM_STAGGER,
    "HEX_COUNTER_TIMING",
    ()=>HEX_COUNTER_TIMING,
    "hexCounterColumns",
    ()=>hexCounterColumns,
    "hexCounterDelay",
    ()=>hexCounterDelay,
    "hexCounterEntranceMs",
    ()=>hexCounterEntranceMs
]);
const HEX_COUNTER_ITEM_STAGGER = 150;
const HEX_COUNTER_TIMING = {
    face: {
        start: 0,
        duration: 450
    },
    rim: {
        start: 100,
        duration: 700
    },
    roll: {
        start: 200,
        duration: 1200,
        digitStagger: 90
    },
    fill: {
        start: 200,
        duration: 1300
    },
    seal: {
        start: 500,
        duration: 700
    },
    shimmer: {
        start: 1500,
        duration: 700
    }
};
const hexCounterDelay = (part, index)=>HEX_COUNTER_TIMING[part].start + index * HEX_COUNTER_ITEM_STAGGER;
function hexCounterEntranceMs(count, maxDigits) {
    if (count <= 0) return 0;
    const last = count - 1;
    const { roll, shimmer, seal } = HEX_COUNTER_TIMING;
    const rollEnd = hexCounterDelay('roll', last) + Math.max(0, maxDigits - 1) * roll.digitStagger + roll.duration;
    return Math.max(rollEnd, hexCounterDelay('shimmer', last) + shimmer.duration, hexCounterDelay('seal', last) + seal.duration);
}
function hexCounterColumns(count) {
    const n = Math.max(1, count);
    return {
        phone: n === 1 ? 1 : 2,
        tablet: n === 4 ? 2 : Math.min(n, 3),
        desktop: Math.min(n, 4)
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/HexCounter/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexCounter$2f$HexCounter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/HexCounter/HexCounter.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexCounter$2f$hexCounterTimeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/HexCounter/hexCounterTimeline.ts [app-client] (ecmascript)");
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/HexCta/HexCta.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CtaButton",
    ()=>CtaButton,
    "CtaLink",
    ()=>CtaLink,
    "Label",
    ()=>Label,
    "Tiles",
    ()=>Tiles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$NavLink$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/NavLink/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$NavLink$2f$NavLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/NavLink/NavLink.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$HexEdge$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/HexEdge/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$HexEdge$2f$HexEdge$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Canvas__as__HexTileCanvas$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/HexEdge/HexEdge.styles.ts [app-client] (ecmascript) <export Canvas as HexTileCanvas>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/lib/hex/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$grid$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/hex/grid.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
/*
 * #1411: Button als Waben — die Schaltfläche selbst ist durchsichtig, ihre
 * drei Kachelreihen liegen darunter (weiß, runde Ecken), darum ein blasser
 * Ring. `isolation` macht den Button zum eigenen Stapelkontext: die
 * Kachelebene (z-index −1) liegt über allem dahinter, aber unter dem Label.
 * Hover und Fokus färben alle Kacheln gemeinsam grün, das Label wird weiß.
 */ const face = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
  position: relative;
  isolation: isolate;
  display: inline-flex;
  align-items: center;
  /* #1441: nie breiter als der Platz — auf 360 px ragte ein langer Text sonst hinaus */
  box-sizing: border-box;
  max-width: 100%;
  padding: 10px 18px;
  margin: 0;
  /* #1416: zwei Kachelreihen Abstand zum Text darüber (vorher eine) */
  margin-top: ${2 * __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$grid$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ROW_STEP"] * __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$grid$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_TILE_SIZE_PX"]}px;
  border: 0;
  background: transparent;
  color: ${({ theme })=>theme.palette.text.onLight};
  font-family: ${({ theme })=>theme.font.secondaryFamily};
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover,
  &:focus-visible {
    color: ${({ theme })=>theme.palette.text.onAccent};
  }

  &:hover > svg[data-hex-cta-tiles] g,
  &:focus-visible > svg[data-hex-cta-tiles] g {
    color: ${({ theme })=>theme.palette.default.secondary};
  }

  &:hover svg.hex-cta-icon,
  &:focus-visible svg.hex-cta-icon {
    transform: translateX(3px);
  }

  &:focus-visible {
    outline: none;
  }

  &:disabled {
    cursor: default;
  }

  /* Die globalen a-Regeln (Farbe, Hover-Farbe) gelten hier nicht */
  &&:link,
  &&:visited {
    color: ${({ theme })=>theme.palette.text.onLight};
  }

  &&:hover,
  &&:focus-visible {
    color: ${({ theme })=>theme.palette.text.onAccent};
  }
`;
/*
 * #2192: grüner Waben-Button für dunkle Flächen (Schluss-Band): Kacheln in
 * site.greenDark — in beiden Themes dunkel genug für weiße Schrift (3,6 : 1,
 * genügt für die große fette Schrift der Fassung `large`; greenText wird im
 * Dunkelmodus hell). Hover/Fokus färbt sie weiß und die Schrift navy. Die
 * Regeln wiegen mit Attribut und Element mehr als die Farbe der Kachelgruppe.
 */ const greenTone = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
  > svg[data-hex-cta-tiles] g {
    color: ${({ theme })=>theme.palette.site.greenDark};
  }

  &&,
  &&:link,
  &&:visited {
    color: ${({ theme })=>theme.palette.text.onAccent};
  }

  &&:hover,
  &&:focus-visible {
    color: ${({ theme })=>theme.palette.site.navy};
  }

  &:hover > svg[data-hex-cta-tiles] g,
  &:focus-visible > svg[data-hex-cta-tiles] g {
    color: ${({ theme })=>theme.palette.text.onAccent};
  }
`;
/* #2192: große Fassung — Schrift eine Stufe größer, der Kachelblock wächst mit */ const largeSize = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
  padding: 14px 24px;
  font-size: 20px;
  line-height: 28px;

  svg.hex-cta-icon {
    width: 24px;
    height: 24px;
  }
`;
const variants = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
  ${({ $tone })=>$tone === 'green' ? greenTone : ''}
  ${({ $size })=>$size === 'large' ? largeSize : ''}
`;
const CtaLink = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$NavLink$2f$NavLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavLink"]).withConfig({
    displayName: "HexCta.styles__CtaLink",
    componentId: "sc-d46587ea-0"
})`
  ${face}
  ${variants}
`;
const CtaButton = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "HexCta.styles__CtaButton",
    componentId: "sc-d46587ea-1"
})`
  ${face}
  ${variants}
`;
const Label = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "HexCta.styles__Label",
    componentId: "sc-d46587ea-2"
})`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  transform: translate(var(--dx, 0), var(--dy, 0));
  /* umbrechen statt überlaufen, wenn der Button an max-width stößt */
  white-space: normal;
  overflow-wrap: anywhere;
  min-width: 0;

  svg.hex-cta-icon {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
    transition: transform 0.2s ease;
  }
`;
const Tiles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$HexEdge$2f$HexEdge$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Canvas__as__HexTileCanvas$3e$__["HexTileCanvas"]).withConfig({
    displayName: "HexCta.styles__Tiles",
    componentId: "sc-d46587ea-3"
})`
  z-index: -1;
  pointer-events: none;

  [data-full='true'] {
    pointer-events: visiblePainted;
  }
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/HexCta/HexCta.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HEX_CTA_STEPS",
    ()=>HEX_CTA_STEPS,
    "HexCta",
    ()=>HexCta,
    "default",
    ()=>__TURBOPACK__default__export__,
    "hexCtaShape",
    ()=>hexCtaShape
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconArrowRight$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconArrowRight/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$HexEdge$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/HexEdge/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$HexEdge$2f$HexTileGroup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/HexEdge/HexTileGroup.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexContentBackdrop$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/HexContentBackdrop/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexContentBackdrop$2f$HexContentBackdrop$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/HexContentBackdrop/HexContentBackdrop.tsx [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexContentBackdrop$2f$backdropCells$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/HexContentBackdrop/backdropCells.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useHexStagePlacement$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/useHexStagePlacement.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/lib/hex/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$grid$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/hex/grid.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexCta$2f$HexCta$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/HexCta/HexCta.styles.ts [app-client] (ecmascript)");
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
const HEX_CTA_STEPS = [
    1,
    0.35
];
const hexCtaShape = (placement)=>{
    const { width, height, columns, rect } = placement;
    const cells = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$grid$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexGridCells"])(width, height, columns);
    if (cells.length === 0) return null;
    const size = cells[0].size;
    const centerX = (rect.left + rect.right) / 2;
    const centerY = (rect.top + rect.bottom) / 2;
    const middle = cells.reduce((best, cell)=>Math.abs(cell.cy - centerY) < Math.abs(best.cy - centerY) ? cell : best);
    const halfText = (rect.right - rect.left) / 2;
    const inRow = (cell, reach)=>Math.abs(cell.cx - centerX) <= reach;
    const seedCells = cells.filter((cell)=>{
        if (cell.row === middle.row) return inRow(cell, halfText + size * 0.5);
        if (Math.abs(cell.row - middle.row) === 1) return inRow(cell, halfText);
        return false;
    });
    if (seedCells.length === 0) return null;
    const left = Math.min(...seedCells.map((c)=>c.x));
    const right = Math.max(...seedCells.map((c)=>c.x + c.size));
    const top = Math.min(...seedCells.map((c)=>c.y));
    const bottom = Math.max(...seedCells.map((c)=>c.y + c.size));
    return {
        seeds: new Set(seedCells.map((c)=>c.key)),
        dx: Math.round((left + right) / 2 - centerX),
        dy: Math.round(middle.cy - centerY),
        face: {
            left,
            top,
            right,
            bottom
        }
    };
};
const HexCta = ({ children, href, onClick, disabled, steps = HEX_CTA_STEPS, onCellsChange, tone = 'light', size = 'default', className, dataTestId = 'hex-cta' })=>{
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const placement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useHexStagePlacement$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHexStagePlacement"])(ref);
    const shape = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HexCta.useMemo[shape]": ()=>placement ? hexCtaShape(placement) : null
    }["HexCta.useMemo[shape]"], [
        placement
    ]);
    const tiles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HexCta.useMemo[tiles]": ()=>placement && shape ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexContentBackdrop$2f$backdropCells$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["haloAroundSeeds"])(placement.width, placement.height, placement.columns, [
                placement.rect
            ], {
                "HexCta.useMemo[tiles]": (cell)=>shape.seeds.has(cell.key)
            }["HexCta.useMemo[tiles]"], steps) : []
    }["HexCta.useMemo[tiles]"], [
        placement,
        shape,
        steps
    ]);
    const ready = Boolean(placement && shape && tiles.length > 0);
    const cellsHandler = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(onCellsChange);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HexCta.useEffect": ()=>{
            cellsHandler.current = onCellsChange;
        }
    }["HexCta.useEffect"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HexCta.useEffect": ()=>{
            if (shape) cellsHandler.current?.([
                ...shape.seeds
            ]);
        }
    }["HexCta.useEffect"], [
        shape
    ]);
    // Sichtbare Fläche für die blaue Kante dahinter (HexContentBackdrop, WebGL-Wabe):
    // die Kachelreihen statt des unsichtbaren Element-Kastens (#1437)
    const face = placement && shape && ready ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexContentBackdrop$2f$HexContentBackdrop$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["formatHexFace"])(shape.face, placement.rect) : undefined;
    const faceProps = {
        [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexContentBackdrop$2f$HexContentBackdrop$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HEX_FACE_ATTRIBUTE"]]: face
    };
    const content = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            placement && ready && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexCta$2f$HexCta$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tiles"], {
                "aria-hidden": "true",
                focusable: "false",
                "data-hex-cta-tiles": "true",
                "data-testid": `${dataTestId}-tiles`,
                "data-rows": 3,
                style: {
                    '--edge-x': `${-placement.rect.left}px`,
                    '--edge-y': `${-placement.rect.top}px`,
                    '--edge-w': `${placement.width}px`,
                    '--edge-h': `${placement.height}px`
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$HexEdge$2f$HexTileGroup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexTileGroup"], {
                    tiles: tiles,
                    color: "onAccent"
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Molecule/HexCta/HexCta.tsx",
                    lineNumber: 162,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Molecule/HexCta/HexCta.tsx",
                lineNumber: 147,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexCta$2f$HexCta$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                style: {
                    '--dx': `${shape?.dx ?? 0}px`,
                    '--dy': `${shape?.dy ?? 0}px`
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Molecule/HexCta/HexCta.tsx",
                        lineNumber: 173,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconArrowRight$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        className: "hex-cta-icon"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Molecule/HexCta/HexCta.tsx",
                        lineNumber: 174,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/components/Molecule/HexCta/HexCta.tsx",
                lineNumber: 165,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Molecule/HexCta/HexCta.tsx",
        lineNumber: 145,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
    if (href) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexCta$2f$HexCta$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CtaLink"], {
            ref: ref,
            href: href,
            onClick: onClick,
            className: className,
            $tone: tone,
            $size: size,
            "data-tone": tone,
            "data-size": size,
            "data-testid": dataTestId,
            "data-tiles": tiles.length,
            "data-ready": ready ? 'true' : 'false',
            ...faceProps,
            children: content
        }, void 0, false, {
            fileName: "[project]/apps/web/src/app/components/Molecule/HexCta/HexCta.tsx",
            lineNumber: 181,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexCta$2f$HexCta$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CtaButton"], {
        ref: ref,
        type: "button",
        onClick: onClick,
        disabled: disabled,
        className: className,
        $tone: tone,
        $size: size,
        "data-tone": tone,
        "data-size": size,
        "data-testid": dataTestId,
        "data-tiles": tiles.length,
        "data-ready": ready ? 'true' : 'false',
        ...faceProps,
        children: content
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Molecule/HexCta/HexCta.tsx",
        lineNumber: 200,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(HexCta, "JLuVAAA4RSWwQ7Z8NiDqVRJ29ro=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useHexStagePlacement$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHexStagePlacement"]
    ];
});
_c = HexCta;
const __TURBOPACK__default__export__ = HexCta;
var _c;
__turbopack_context__.k.register(_c, "HexCta");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/HexCta/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexCta$2f$HexCta$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/HexCta/HexCta.tsx [app-client] (ecmascript)");
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexCta$2f$HexCta$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexCta"];
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/HexHoverSpot/HexHoverSpot.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Root",
    ()=>Root,
    "Tile",
    ()=>Tile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/colors.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$hex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/hex.ts [app-client] (ecmascript) <locals>");
'use client';
;
;
;
const Root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "HexHoverSpot.styles__Root",
    componentId: "sc-9588288a-0"
})`
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  /* Layout/Style/Paint bleiben in dieser Ebene — 1000+ Kacheln invalidieren nicht die Seite */
  contain: layout style paint;

  @media (hover: none), (prefers-reduced-motion: reduce) {
    display: none;
  }
`;
/* Dieselbe Bewegung wie die Kacheln des Übergangs, als Keyframes. (Anlass
   war die frühere globale transition-!important-Regel; seit #1216 gilt sie
   nur noch während eines Theme-Wechsels.) */ const popIn = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframes"]`
  from { opacity: 0; transform: scale(0) rotate(-14deg); }
  to { opacity: var(--lit, 0.6); transform: scale(1) rotate(0deg); }
`;
const popOut = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframes"]`
  from { opacity: var(--lit, 0.6); transform: scale(1) rotate(0deg); }
  to { opacity: 0; transform: scale(0) rotate(-14deg); }
`;
const Tile = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "HexHoverSpot.styles__Tile",
    componentId: "sc-9588288a-1"
})`
  position: absolute;
  left: var(--x);
  top: var(--y);
  width: var(--size);
  height: var(--size);
  ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$hex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["roundedHexagonMask"]}
  background: rgba(255, 255, 255, 0.55);
  opacity: 0;
  transform: scale(0) rotate(-14deg);
  will-change: transform, opacity;

  &[data-lit='true'] {
    animation: ${popIn} 420ms cubic-bezier(0.2, 0.8, 0.2, 1) both;
  }

  &[data-lit='false'][data-was-lit='true'] {
    animation: ${popOut} 650ms cubic-bezier(0.2, 0.8, 0.2, 1) both;
  }

  /* Pfeil-Kacheln leuchten blau statt weiß */
  &[data-accent='true'] {
    background: ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].PRIMARY};
  }

  /* #1418: Kacheln legen die Ebene darunter frei. Der Wert steht in der
     Klasse der Kachel (für alle Kacheln dieselbe), damit var(--x)/var(--y)
     je Kachel aufgelöst werden — auf der Wurzel gesetzt, lösten sie dort auf. */
  ${({ $reveal })=>$reveal ? `background: ${$reveal};` : ''}
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/HexHoverSpot/HexHoverSpot.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HexHoverSpot",
    ()=>HexHoverSpot,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$grid$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/hex/grid.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexHoverSpot$2f$HexHoverSpot$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/HexHoverSpot/HexHoverSpot.styles.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const HexHoverSpot = /*#__PURE__*/ _s((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = _s(function HexHoverSpot({ columns = 12, radius = 70, enabled = true, accentKeys, reveal, dataTestId = 'hex-hover-spot', className }, ref) {
    _s();
    const rootRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [stage, setStage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const cells = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HexHoverSpot.HexHoverSpot.useMemo[cells]": ()=>stage ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$grid$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexGridCells"])(stage.width, stage.height, columns) : []
    }["HexHoverSpot.HexHoverSpot.useMemo[cells]"], [
        stage,
        columns
    ]);
    const cellsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(cells);
    cellsRef.current = cells;
    const lit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Set());
    const frame = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const pending = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Kachel-Elemente per Ref-Callback gesammelt — querySelector je Kachel und
    // Frame wäre bei 1300+ Kacheln quadratisch (458-ms-Tasks im Übergang).
    const tileEls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    const registerTile = (key)=>(el)=>{
            if (el) tileEls.current.set(key, el);
            else tileEls.current.delete(key);
        };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HexHoverSpot.HexHoverSpot.useEffect": ()=>{
            const el = rootRef.current;
            if (!el) return;
            const measure = {
                "HexHoverSpot.HexHoverSpot.useEffect.measure": ()=>{
                    const rect = el.getBoundingClientRect();
                    if (rect.width > 0 && rect.height > 0) setStage({
                        width: rect.width,
                        height: rect.height
                    });
                }
            }["HexHoverSpot.HexHoverSpot.useEffect.measure"];
            measure();
            if (typeof ResizeObserver === 'undefined') return;
            const observer = new ResizeObserver(measure);
            observer.observe(el);
            return ({
                "HexHoverSpot.HexHoverSpot.useEffect": ()=>observer.disconnect()
            })["HexHoverSpot.HexHoverSpot.useEffect"];
        }
    }["HexHoverSpot.HexHoverSpot.useEffect"], []);
    const tileEl = (key)=>tileEls.current.get(key) ?? null;
    const clearAll = ()=>{
        for (const key of lit.current){
            const el = tileEl(key);
            if (el) {
                el.dataset.lit = 'false';
                el.dataset.wasLit = 'true';
            }
        }
        lit.current.clear();
        rootRef.current?.setAttribute('data-active', 'false');
    };
    const apply = ()=>{
        frame.current = null;
        const p = pending.current;
        if (!p) return;
        const next = new Set();
        for (const cell of cellsRef.current){
            // grober Vorfilter über den Radius-Kasten, bevor gerechnet wird
            if (Math.abs(cell.cx - p.x) > radius || Math.abs(cell.cy - p.y) > radius) continue;
            const level = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$grid$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["litLevel"])(cell, p.x, p.y, radius);
            if (level <= 0) continue;
            next.add(cell.key);
            const el = tileEl(cell.key);
            if (!el) continue;
            el.style.setProperty('--lit', (0.25 + level * 0.75).toFixed(2));
            if (el.dataset.lit !== 'true') el.dataset.lit = 'true';
        }
        for (const key of lit.current){
            if (!next.has(key)) {
                const el = tileEl(key);
                if (el) {
                    el.dataset.lit = 'false';
                    // markiert die Auslauf-Animation; frisch gemountete Kacheln bleiben still
                    el.dataset.wasLit = 'true';
                }
            }
        }
        lit.current = next;
        rootRef.current?.setAttribute('data-active', next.size > 0 ? 'true' : 'false');
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"])(ref, {
        "HexHoverSpot.HexHoverSpot.useImperativeHandle": ()=>({
                move: ({
                    "HexHoverSpot.HexHoverSpot.useImperativeHandle": (x, y)=>{
                        if (!enabled) return;
                        pending.current = {
                            x,
                            y
                        };
                        if (typeof requestAnimationFrame !== 'function') {
                            apply();
                        } else if (frame.current === null) {
                            frame.current = requestAnimationFrame(apply);
                        }
                    }
                })["HexHoverSpot.HexHoverSpot.useImperativeHandle"],
                leave: ({
                    "HexHoverSpot.HexHoverSpot.useImperativeHandle": ()=>{
                        pending.current = null;
                        clearAll();
                    }
                })["HexHoverSpot.HexHoverSpot.useImperativeHandle"]
            })
    }["HexHoverSpot.HexHoverSpot.useImperativeHandle"], // eslint-disable-next-line react-hooks/exhaustive-deps
    [
        enabled,
        radius
    ]);
    // Deaktiviert → alle Kacheln sofort zurückziehen
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HexHoverSpot.HexHoverSpot.useEffect": ()=>{
            if (!enabled) {
                pending.current = null;
                clearAll();
            }
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["HexHoverSpot.HexHoverSpot.useEffect"], [
        enabled
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HexHoverSpot.HexHoverSpot.useEffect": ()=>({
                "HexHoverSpot.HexHoverSpot.useEffect": ()=>{
                    if (frame.current !== null && typeof cancelAnimationFrame === 'function') cancelAnimationFrame(frame.current);
                }
            })["HexHoverSpot.HexHoverSpot.useEffect"]
    }["HexHoverSpot.HexHoverSpot.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexHoverSpot$2f$HexHoverSpot$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        ref: rootRef,
        className: className,
        "data-testid": dataTestId,
        "data-active": "false",
        "data-ready": stage ? 'true' : 'false',
        "data-tiles": cells.length,
        "data-reveal": reveal ? 'true' : 'false',
        "aria-hidden": "true",
        children: cells.map((cell)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexHoverSpot$2f$HexHoverSpot$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tile"], {
                ref: registerTile(cell.key),
                "data-key": cell.key,
                "data-lit": "false",
                "data-accent": accentKeys?.includes(cell.key) ? 'true' : undefined,
                $reveal: reveal,
                style: {
                    '--x': `${cell.x}px`,
                    '--y': `${cell.y}px`,
                    '--size': `${cell.size}px`
                }
            }, cell.key, false, {
                fileName: "[project]/apps/web/src/app/components/Molecule/HexHoverSpot/HexHoverSpot.tsx",
                lineNumber: 176,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Molecule/HexHoverSpot/HexHoverSpot.tsx",
        lineNumber: 165,
        columnNumber: 5
    }, this);
}, "mY3EUBGHZPnE2uWVyjDptJwDNZc=")), "mY3EUBGHZPnE2uWVyjDptJwDNZc=");
_c1 = HexHoverSpot;
const __TURBOPACK__default__export__ = HexHoverSpot;
var _c, _c1;
__turbopack_context__.k.register(_c, "HexHoverSpot$forwardRef");
__turbopack_context__.k.register(_c1, "HexHoverSpot");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/HexHoverSpot/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexHoverSpot$2f$HexHoverSpot$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/HexHoverSpot/HexHoverSpot.tsx [app-client] (ecmascript)");
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/HexLogoWall/HexLogoWall.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Face",
    ()=>Face,
    "Logo",
    ()=>Logo,
    "LogoLink",
    ()=>LogoLink,
    "Marquee",
    ()=>Marquee,
    "MarqueeItem",
    ()=>MarqueeItem,
    "MarqueeToggle",
    ()=>MarqueeToggle,
    "MarqueeTrack",
    ()=>MarqueeTrack,
    "Ring",
    ()=>Ring,
    "Root",
    ()=>Root,
    "Slot",
    ()=>Slot,
    "Tile",
    ()=>Tile,
    "Wall",
    ()=>Wall,
    "marqueeDurationMs",
    ()=>marqueeDurationMs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$hex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/hex.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$brands$2f$partnerTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/brands/partnerTheme.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easingCss$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/motion/easingCss.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexLogoWall$2f$hexLogoWallRows$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/HexLogoWall/hexLogoWallRows.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
;
/** Site-Stufen wie assets/theme/site.ts (Tailwind sm, lg der Quelle) */ const SM = '640px';
const LG = '1024px';
/** #2199: unter SM läuft das Laufband statt des Rasters — nur mit Bewegung */ const LAUFBAND = `(max-width: 639.98px) and (prefers-reduced-motion: no-preference)`;
/** Größte Kachel: darüber würden die Logos wieder zu Riesenkarten (Spec Nr. 7) */ const TILE_MAX_PX = 168;
/** Breite des Rings um die helle Fläche */ const RING_PX = 2;
/** Logo-Anteil an der Kachel (62 %) als Einzug je Seite */ const LOGO_INSET = '19%';
/** Hub der Kachel beim Zeigen */ const LIFT_PX = 4;
/** Kachel im Laufband (Telefon) */ const MARQUEE_TILE = '6rem';
/** Ein Durchlauf des Laufbands je Logo — langsam, gut lesbar */ const MARQUEE_MS_PER_ITEM = 3500;
const marqueeDurationMs = (count)=>Math.max(4, count) * MARQUEE_MS_PER_ITEM;
/**
 * Raster einer Stufe: 2 × perRow Halbspalten, jede Kachel spannt zwei; Startlinie
 * aus `data-col-<stufe>`. Die Wand ist höchstens perRow Kacheln breit und steht mittig.
 * Unten ein Viertel Kachel Polster — so weit ragt die Spitze der letzten Reihe hinaus.
 */ const stufe = (name, perRow, gap)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
  grid-template-columns: repeat(${2 * perRow}, minmax(0, 1fr));
  max-width: calc(${perRow} * ${TILE_MAX_PX}px + ${perRow - 1} * ${gap});
  /* Prozent = Breite des Abschnitts; die Kachel ist höchstens TILE_MAX_PX breit */
  padding-bottom: calc(min(${TILE_MAX_PX}px, (100% - ${perRow - 1} * ${gap}) / ${perRow}) / 4);

  > li {
    ${Array.from({
        length: 2 * perRow - 1
    }, (_, i)=>`&[data-col-${name}='${i + 1}'] { grid-column: ${i + 1} / span 2; }`).join('\n')}
  }
`;
/**
 * #2199: Farben der Waben. Hell: Ring in Rahmenfarbe, helle Fläche, Logo grau.
 * Dunkelmodus oder Navy-Band (`data-dark`): Fläche aufgehelltes Navy, feine
 * helle Kante, Logo hell und einfarbig — beim Zeigen hell mit Logo in Farbe.
 */ const hellWaben = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
  --wall-ring: ${({ theme })=>theme.palette.site.border};
  --wall-face: ${({ theme })=>theme.palette.site.logoPlate};
`;
const dunkelWaben = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
  --wall-ring: rgb(255 255 255 / 0.22);
  --wall-face: color-mix(in srgb, ${({ theme })=>theme.palette.site.navy} 82%, #ffffff);
`;
const Root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].section.withConfig({
    displayName: "HexLogoWall.styles__Root",
    componentId: "sc-56a3e0f0-0"
})`
  ${({ theme })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$brands$2f$partnerTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDarkTheme"])(theme) ? dunkelWaben : hellWaben}
  --wall-ring-hover: ${({ theme })=>theme.palette.site.green};
  --wall-face-hover: ${({ theme })=>theme.palette.site.logoPlate};

  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${({ theme })=>theme.margin.large};
  width: 100%;
  background-color: transparent;

  &[data-dark='true'] {
    ${dunkelWaben}
  }
`;
/** Dunkelmodus oder Navy-Band; `data-dark` setzen Wabenwand und Gruppenbild (PartnerGroup teilt diese Waben) */ const dunkel = (regeln)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
  ${({ theme })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$brands$2f$partnerTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDarkTheme"])(theme) ? regeln : ''}
  [data-dark='true'] & {
    ${regeln}
  }
`;
const Wall = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ul.withConfig({
    displayName: "HexLogoWall.styles__Wall",
    componentId: "sc-56a3e0f0-1"
})`
  display: grid;
  column-gap: ${({ theme })=>theme.margin.small};
  row-gap: ${({ theme })=>theme.margin.extrasmall};
  width: 100%;
  margin: 0 auto;
  padding: 0;
  list-style: none;
  ${({ $columns, theme })=>{
    const perRow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexLogoWall$2f$hexLogoWallRows$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexLogoWallPerRow"])($columns);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
      ${stufe('base', perRow.base, theme.margin.small)}

      @media (min-width: ${SM}) {
        ${stufe('sm', perRow.sm, theme.margin.small)}
      }

      @media (min-width: ${LG}) {
        ${stufe('lg', perRow.lg, theme.margin.small)}
      }
    `;
}}

  /* #2199: am Telefon mit Bewegung läuft stattdessen das Band */
  @media ${LAUFBAND} {
    ${Root}[data-state='pending'] &,
    ${Root}[data-state='idle'] &,
    ${Root}[data-state='running'] &,
    ${Root}[data-state='ready'] & {
      display: none;
    }
  }
`;
const zusammenfuegen = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframes"]`
  from {
    opacity: 0;
    transform: translate(calc(var(--wall-dx) * 60%), calc(var(--wall-dy) * 60%)) scale(0.9);
  }
  to {
    opacity: 1;
    transform: none;
  }
`;
const Slot = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].li.withConfig({
    displayName: "HexLogoWall.styles__Slot",
    componentId: "sc-56a3e0f0-2"
})`
  --wall-dx: ${({ $dx })=>$dx};
  --wall-dy: ${({ $dy })=>$dy};
  min-width: 0;
  margin-bottom: -25%;

  /* #2199: Eintritt — die Waben fügen sich vom Rand her zusammen */
  ${Root}[data-state='idle'] & {
    opacity: 0;
  }
  ${Root}[data-state='running'] & {
    animation: ${zusammenfuegen} ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexLogoWall$2f$hexLogoWallRows$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HEX_LOGO_WALL_TILE_MS"]}ms ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easingCss$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_POP_CSS"]} ${({ $delay })=>$delay}ms both;
  }
`;
const Tile = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "HexLogoWall.styles__Tile",
    componentId: "sc-56a3e0f0-3"
})`
  position: relative;
  aspect-ratio: 1;
  transition: transform 200ms ease;

  li:hover > &,
  li:focus-within > & {
    transform: translateY(-${LIFT_PX}px);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    li:hover > &,
    li:focus-within > & {
      transform: none;
    }
  }
`;
const Ring = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "HexLogoWall.styles__Ring",
    componentId: "sc-56a3e0f0-4"
})`
  position: absolute;
  inset: 0;
  ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$hex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["roundedHexagonMask"]}
  background: var(--wall-ring);
  transition: background-color 200ms ease;

  li:hover &,
  li:focus-within & {
    background: var(--wall-ring-hover);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;
const Face = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "HexLogoWall.styles__Face",
    componentId: "sc-56a3e0f0-5"
})`
  position: absolute;
  inset: ${RING_PX}px;
  ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$hex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["roundedHexagonMask"]}
  background: var(--wall-face);
  transition: background-color 200ms ease;

  ${dunkel(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
    inset: 1px;
  `)}

  li:hover &,
  li:focus-within & {
    background: var(--wall-face-hover);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;
const Logo = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "HexLogoWall.styles__Logo",
    componentId: "sc-56a3e0f0-6"
})`
  /* Einzug statt translate: ein transform hier wäre ein eigener Stapelkontext, und
     mix-blend-mode fände die Fläche darunter nicht mehr */
  position: absolute;
  inset: ${LOGO_INSET};

  img {
    object-fit: contain;
    /* Logos mit weißem Grund (TecPart, NHS) gehen in der Fläche auf statt als Kasten zu stehen */
    mix-blend-mode: multiply;
    filter: grayscale(1);
    opacity: 0.8;
    transition:
      filter 200ms ease,
      opacity 200ms ease;
  }

  /* #2199: dunkel — umgekehrt und „screen": weißer Grund verschwindet, Schrift wird hell */
  ${dunkel(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
    img {
      mix-blend-mode: screen;
      filter: grayscale(1) invert(1);
      opacity: 0.9;
    }
  `)}

  li:hover & img,
  li:focus-within & img {
    mix-blend-mode: multiply;
    filter: none;
    opacity: 1;
  }

  @media (prefers-reduced-motion: reduce) {
    img {
      transition: none;
    }
  }
`;
const LogoLink = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].a.withConfig({
    displayName: "HexLogoWall.styles__LogoLink",
    componentId: "sc-56a3e0f0-7"
})`
  position: absolute;
  inset: 0;
  display: block;
  border-radius: 24px;

  &:focus-visible {
    outline: 2px solid ${({ theme })=>theme.palette.site.green};
    outline-offset: 2px;
  }
`;
/* Eine Folge weit: count × (Kachel + Abstand); die Kopie dahinter schließt nahtlos an */ const laufen = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframes"]`
  from { transform: translateX(0); }
  to { transform: translateX(calc(-1 * var(--wall-marquee-shift))); }
`;
const Marquee = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "HexLogoWall.styles__Marquee",
    componentId: "sc-56a3e0f0-8"
})`
  display: none;
  overflow: hidden;
  /* Auslaufen an den Rändern statt harter Kante */
  mask-image: linear-gradient(to right, transparent, #000 8%, #000 92%, transparent);

  @media ${LAUFBAND} {
    ${Root}[data-state='pending'] &,
    ${Root}[data-state='idle'] &,
    ${Root}[data-state='running'] &,
    ${Root}[data-state='ready'] & {
      display: block;
    }
  }
`;
const MarqueeTrack = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ul.withConfig({
    displayName: "HexLogoWall.styles__MarqueeTrack",
    componentId: "sc-56a3e0f0-9"
})`
  --wall-marquee-shift: calc(${({ $count })=>$count} * (${MARQUEE_TILE} + ${({ theme })=>theme.margin.small}));
  display: flex;
  gap: ${({ theme })=>theme.margin.small};
  /* so breit wie das Band; die Kacheln laufen darüber hinaus und werden vom
     Band beschnitten — keine Box breiter als die Ansicht (Wächter
     public-no-horizontal-scroll) */
  width: 100%;
  margin: 0;
  padding: ${({ theme })=>theme.margin.extrasmall} 0;
  list-style: none;
  animation: ${laufen} ${({ $count })=>marqueeDurationMs($count)}ms linear infinite;

  [data-paused='true'] > &,
  ${Marquee}:hover > &,
  ${Marquee}:active > &,
  ${Marquee}:focus-within > &,
  ${Root}[data-visible='false'] & {
    animation-play-state: paused;
  }
`;
const MarqueeItem = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].li.withConfig({
    displayName: "HexLogoWall.styles__MarqueeItem",
    componentId: "sc-56a3e0f0-10"
})`
  flex: 0 0 ${MARQUEE_TILE};
  width: ${MARQUEE_TILE};
`;
const MarqueeToggle = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "HexLogoWall.styles__MarqueeToggle",
    componentId: "sc-56a3e0f0-11"
})`
  display: none;
  align-self: center;
  align-items: center;
  justify-content: center;
  width: 2.75rem;
  height: 2.75rem;
  padding: 0;
  border: 1px solid var(--wall-ring);
  border-radius: 50%;
  background: transparent;
  color: ${({ theme })=>theme.palette.site.heading};
  cursor: pointer;

  ${Root}[data-dark='true'] & {
    color: #ffffff;
  }

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }

  &:focus-visible {
    outline: 2px solid ${({ theme })=>theme.palette.site.green};
    outline-offset: 2px;
  }

  @media ${LAUFBAND} {
    [data-state='pending'] > &,
    [data-state='idle'] > &,
    [data-state='running'] > &,
    [data-state='ready'] > & {
      display: inline-flex;
    }
  }
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/HexLogoWall/HexLogoWall.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HexLogoWall",
    ()=>HexLogoWall
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/image-component.js [app-client] (ecmascript) <export Image as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$SiteSectionHeader$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/SiteSectionHeader/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$SiteSectionHeader$2f$SiteSectionHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/SiteSectionHeader/SiteSectionHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/ClientTranslation.tsx [app-client] (ecmascript) <export useClientSafeTranslation as useClientTranslation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useEntranceAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/useEntranceAnimation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconPause$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconPause/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconPause$2f$IconPause$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconPause/IconPause.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconPlay$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconPlay/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconPlay$2f$IconPlay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconPlay/IconPlay.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$url$2f$externalLink$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/url/externalLink.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexLogoWall$2f$hexLogoWallRows$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/HexLogoWall/hexLogoWallRows.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexLogoWall$2f$HexLogoWall$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/HexLogoWall/HexLogoWall.styles.ts [app-client] (ecmascript)");
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
const LogoBild = ({ item, testId, sizes })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexLogoWall$2f$HexLogoWall$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logo"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__["default"], {
            src: item.logoUrl,
            alt: `${item.companyName} logo`,
            fill: true,
            sizes: sizes,
            "data-testid": testId
        }, void 0, false, {
            fileName: "[project]/apps/web/src/app/components/Molecule/HexLogoWall/HexLogoWall.tsx",
            lineNumber: 67,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Molecule/HexLogoWall/HexLogoWall.tsx",
        lineNumber: 66,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = LogoBild;
/**
 * #1957: Logo-Wand als Wabe — jedes Logo in einer Sechseck-Kachel (Ring in
 * Rahmenfarbe, helle Fläche), Reihen versetzt wie Bienenwaben (4-3-4 …). Logo
 * grau, beim Zeigen farbig, die Kachel hebt sich. Lage jeder Kachel je
 * Bildschirmstufe aus `hexLogoWallLayout`, als `data-col-*` an der Kachel.
 *
 * #2199 „Wabenwand atmet":
 * - Dunkelmodus und Navy-Band: Waben in aufgehelltem Navy mit feiner Kante,
 *   Logos hell und einfarbig (Umkehrung, `screen`); beim Zeigen hell mit
 *   Logo in Farbe.
 * - Eintritt: die Waben fügen sich vom Rand her zusammen (`data-state`,
 *   lib/motion/entrance; Versatz je Kachel aus `hexLogoWallEntrance`).
 * - Telefon: statt eines Turms eine Reihe als langsamer Endlos-Lauf; hält
 *   bei Berührung, Fokus und über den Knopf (WCAG 2.2.2). „Bewegung
 *   reduzieren": kein Lauf, Raster drei breit.
 */ const HexLogoWall = (props)=>{
    _s();
    const { items, columns, headline, description, surface, onFirstView, onFirstHover, onMarqueeToggle, className, dataTestId = 'hex-logo-wall', itemDataTestIdPrefix } = props;
    const { tr } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"])();
    const prefix = itemDataTestIdPrefix ?? dataTestId;
    const perRow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexLogoWall$2f$hexLogoWallRows$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexLogoWallPerRow"])(columns);
    const lagen = {
        base: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexLogoWall$2f$hexLogoWallRows$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexLogoWallLayout"])(items.length, perRow.base),
        sm: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexLogoWall$2f$hexLogoWallRows$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexLogoWallLayout"])(items.length, perRow.sm),
        lg: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexLogoWall$2f$hexLogoWallRows$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexLogoWallLayout"])(items.length, perRow.lg)
    };
    const eintritt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexLogoWall$2f$hexLogoWallRows$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexLogoWallEntrance"])(lagen.lg, perRow.lg);
    const rootRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { state, visible } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useEntranceAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEntranceAnimation"])(rootRef, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexLogoWall$2f$hexLogoWallRows$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HEX_LOGO_WALL_ENTRANCE_MS"], 0.2);
    const gesehen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HexLogoWall.useEffect": ()=>{
            if (!visible || gesehen.current) return;
            gesehen.current = true;
            onFirstView?.();
        }
    }["HexLogoWall.useEffect"], [
        visible,
        onFirstView
    ]);
    const gehovert = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const onPointerEnter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "HexLogoWall.useCallback[onPointerEnter]": (event)=>{
            if (event.pointerType !== 'mouse' || gehovert.current) return;
            gehovert.current = true;
            onFirstHover?.();
        }
    }["HexLogoWall.useCallback[onPointerEnter]"], [
        onFirstHover
    ]);
    const [angehalten, setAngehalten] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const umschalten = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "HexLogoWall.useCallback[umschalten]": ()=>{
            const neu = !angehalten;
            setAngehalten(neu);
            onMarqueeToggle?.(neu);
        }
    }["HexLogoWall.useCallback[umschalten]"], [
        angehalten,
        onMarqueeToggle
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexLogoWall$2f$HexLogoWall$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        ref: rootRef,
        className: className,
        "data-testid": dataTestId,
        "data-columns": columns,
        "data-count": items.length,
        "data-rows": (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexLogoWall$2f$hexLogoWallRows$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexLogoWallRows"])(items.length, perRow.lg).length,
        "data-state": state,
        "data-visible": visible ? 'true' : 'false',
        "data-dark": surface === 'dark' ? 'true' : 'false',
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$SiteSectionHeader$2f$SiteSectionHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiteSectionHeader"], {
                headline: headline,
                description: description,
                align: "center",
                dataTestId: `${dataTestId}-header`
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Molecule/HexLogoWall/HexLogoWall.tsx",
                lineNumber: 149,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexLogoWall$2f$HexLogoWall$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Wall"], {
                $columns: columns,
                "data-testid": `${dataTestId}-wall`,
                children: items.map((item, i)=>{
                    const id = `${prefix}-partner-${i}`;
                    const logo = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LogoBild, {
                        item: item,
                        testId: `${id}-logo`,
                        sizes: "(max-width: 640px) 30vw, 130px"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Molecule/HexLogoWall/HexLogoWall.tsx",
                        lineNumber: 158,
                        columnNumber: 24
                    }, ("TURBOPACK compile-time value", void 0));
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexLogoWall$2f$HexLogoWall$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"], {
                        "data-testid": id,
                        "data-row": lagen.lg[i].row,
                        "data-col-base": lagen.base[i].col,
                        "data-col-sm": lagen.sm[i].col,
                        "data-col-lg": lagen.lg[i].col,
                        $dx: eintritt[i].dx,
                        $dy: eintritt[i].dy,
                        $delay: eintritt[i].delay,
                        onPointerEnter: onPointerEnter,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexLogoWall$2f$HexLogoWall$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tile"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexLogoWall$2f$HexLogoWall$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ring"], {
                                    "aria-hidden": "true"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/components/Molecule/HexLogoWall/HexLogoWall.tsx",
                                    lineNumber: 173,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexLogoWall$2f$HexLogoWall$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Face"], {
                                    "aria-hidden": "true"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/components/Molecule/HexLogoWall/HexLogoWall.tsx",
                                    lineNumber: 174,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                item.websiteUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexLogoWall$2f$HexLogoWall$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LogoLink"], {
                                    href: item.websiteUrl,
                                    ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$url$2f$externalLink$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EXTERNAL_LINK_PROPS"],
                                    "aria-label": item.companyName,
                                    "data-testid": `${id}-link`,
                                    children: logo
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/components/Molecule/HexLogoWall/HexLogoWall.tsx",
                                    lineNumber: 176,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0)) : logo
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/app/components/Molecule/HexLogoWall/HexLogoWall.tsx",
                            lineNumber: 172,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    }, i, false, {
                        fileName: "[project]/apps/web/src/app/components/Molecule/HexLogoWall/HexLogoWall.tsx",
                        lineNumber: 160,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0));
                })
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Molecule/HexLogoWall/HexLogoWall.tsx",
                lineNumber: 155,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexLogoWall$2f$HexLogoWall$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Marquee"], {
                "data-testid": `${dataTestId}-marquee`,
                "data-paused": angehalten ? 'true' : 'false',
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexLogoWall$2f$HexLogoWall$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MarqueeTrack"], {
                    "data-part": "track",
                    $count: items.length,
                    children: [
                        0,
                        1
                    ].map((runde)=>items.map((item, i)=>{
                            const kopie = runde === 1;
                            const logo = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LogoBild, {
                                item: item,
                                sizes: "96px"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Molecule/HexLogoWall/HexLogoWall.tsx",
                                lineNumber: 199,
                                columnNumber: 28
                            }, ("TURBOPACK compile-time value", void 0));
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexLogoWall$2f$HexLogoWall$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MarqueeItem"], {
                                "aria-hidden": kopie ? 'true' : undefined,
                                "data-testid": kopie ? undefined : `${prefix}-marquee-partner-${i}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexLogoWall$2f$HexLogoWall$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tile"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexLogoWall$2f$HexLogoWall$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ring"], {
                                            "aria-hidden": "true"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/components/Molecule/HexLogoWall/HexLogoWall.tsx",
                                            lineNumber: 207,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexLogoWall$2f$HexLogoWall$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Face"], {
                                            "aria-hidden": "true"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/components/Molecule/HexLogoWall/HexLogoWall.tsx",
                                            lineNumber: 208,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        item.websiteUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexLogoWall$2f$HexLogoWall$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LogoLink"], {
                                            href: item.websiteUrl,
                                            ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$url$2f$externalLink$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EXTERNAL_LINK_PROPS"],
                                            "aria-label": item.companyName,
                                            tabIndex: kopie ? -1 : undefined,
                                            children: logo
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/components/Molecule/HexLogoWall/HexLogoWall.tsx",
                                            lineNumber: 210,
                                            columnNumber: 23
                                        }, ("TURBOPACK compile-time value", void 0)) : logo
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/app/components/Molecule/HexLogoWall/HexLogoWall.tsx",
                                    lineNumber: 206,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0))
                            }, `${runde}-${i}`, false, {
                                fileName: "[project]/apps/web/src/app/components/Molecule/HexLogoWall/HexLogoWall.tsx",
                                lineNumber: 201,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0));
                        }))
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Molecule/HexLogoWall/HexLogoWall.tsx",
                    lineNumber: 195,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Molecule/HexLogoWall/HexLogoWall.tsx",
                lineNumber: 194,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexLogoWall$2f$HexLogoWall$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MarqueeToggle"], {
                type: "button",
                onClick: umschalten,
                "aria-pressed": angehalten,
                "aria-label": angehalten ? tr('imagefilm.play', {
                    defaultValue: 'Abspielen'
                }) : tr('imagefilm.pause', {
                    defaultValue: 'Pause'
                }),
                "data-testid": `${dataTestId}-marquee-toggle`,
                children: angehalten ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconPlay$2f$IconPlay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconPlay"], {}, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Molecule/HexLogoWall/HexLogoWall.tsx",
                    lineNumber: 235,
                    columnNumber: 23
                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconPause$2f$IconPause$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconPause"], {}, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Molecule/HexLogoWall/HexLogoWall.tsx",
                    lineNumber: 235,
                    columnNumber: 38
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Molecule/HexLogoWall/HexLogoWall.tsx",
                lineNumber: 228,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Molecule/HexLogoWall/HexLogoWall.tsx",
        lineNumber: 138,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(HexLogoWall, "mYlhxxv4ilDOJ9Hw2M/9MNyxMZw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useEntranceAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEntranceAnimation"]
    ];
});
_c1 = HexLogoWall;
;
var _c, _c1;
__turbopack_context__.k.register(_c, "LogoBild");
__turbopack_context__.k.register(_c1, "HexLogoWall");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/HexLogoWall/hexLogoWallRows.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * #1957: Rechnung der Wabenwand (Molecule/HexLogoWall) — rein, ohne DOM.
 *
 * Die Wand ist ein CSS-Raster aus 2 × perRow Halbspalten; jede Kachel spannt
 * zwei davon. So liegt jede zweite Reihe um eine halbe Kachel versetzt in den
 * Lücken der Reihe darüber (Wabe, Spitze oben). Die Reihen wechseln zwischen
 * perRow und perRow − 1 Kacheln, die letzte darf kürzer sein und steht mittig.
 */ __turbopack_context__.s([
    "HEX_LOGO_WALL_ENTRANCE_MS",
    ()=>HEX_LOGO_WALL_ENTRANCE_MS,
    "HEX_LOGO_WALL_RING_MS",
    ()=>HEX_LOGO_WALL_RING_MS,
    "HEX_LOGO_WALL_TILE_MS",
    ()=>HEX_LOGO_WALL_TILE_MS,
    "hexLogoWallEntrance",
    ()=>hexLogoWallEntrance,
    "hexLogoWallLayout",
    ()=>hexLogoWallLayout,
    "hexLogoWallPerRow",
    ()=>hexLogoWallPerRow,
    "hexLogoWallRows",
    ()=>hexLogoWallRows
]);
const hexLogoWallPerRow = (columns)=>({
        base: Math.min(columns, 3),
        sm: Math.min(columns, 3),
        lg: columns
    });
const hexLogoWallRows = (count, perRow)=>{
    const rows = [];
    const lang = Math.max(1, perRow);
    const kurz = Math.max(1, perRow - 1);
    let rest = Math.max(0, count);
    while(rest > 0){
        const soll = rows.length % 2 === 0 ? lang : kurz;
        const n = Math.min(soll, rest);
        rows.push(n);
        rest -= n;
    }
    return rows;
};
const hexLogoWallLayout = (count, perRow)=>{
    const slots = [];
    hexLogoWallRows(count, perRow).forEach((m, row)=>{
        const versatz = perRow - m;
        const start = versatz + 1 + (versatz % 2 === row % 2 ? 0 : 1);
        for(let i = 0; i < m; i++)slots.push({
            row,
            col: start + 2 * i
        });
    });
    return slots;
};
const HEX_LOGO_WALL_TILE_MS = 600;
const HEX_LOGO_WALL_RING_MS = 120;
/** höchstens so viele Ringe (Wände bis 4 × 3 Reihen) */ const MAX_RINGE = 4;
const HEX_LOGO_WALL_ENTRANCE_MS = HEX_LOGO_WALL_TILE_MS + MAX_RINGE * HEX_LOGO_WALL_RING_MS;
const r2 = (n)=>Math.round(n * 100) / 100;
const hexLogoWallEntrance = (slots, perRow)=>{
    if (slots.length === 0) return [];
    const reihen = Math.max(...slots.map((s)=>s.row)) + 1;
    // Mitte einer Kachel in Kachelbreiten: Halbspalte col…col+1 → (col)/2; Mitte der Wand perRow/2
    const mitte = {
        x: perRow / 2,
        y: (reihen - 1) / 2
    };
    const lagen = slots.map((s)=>({
            x: s.col / 2 - mitte.x,
            y: s.row - mitte.y
        }));
    const weiteste = Math.max(...lagen.map((l)=>Math.hypot(l.x, l.y)), 0.0001);
    return lagen.map((l)=>{
        const abstand = Math.hypot(l.x, l.y);
        // genau in der Mitte: von unten
        const richtung = abstand < 0.01 ? {
            x: 0,
            y: 1
        } : {
            x: l.x / abstand,
            y: l.y / abstand
        };
        const ring = Math.round((1 - abstand / weiteste) * MAX_RINGE);
        return {
            dx: r2(richtung.x),
            dy: r2(richtung.y),
            delay: Math.min(MAX_RINGE, ring) * HEX_LOGO_WALL_RING_MS
        };
    });
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/HexLogoWall/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexLogoWall$2f$HexLogoWall$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/HexLogoWall/HexLogoWall.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexLogoWall$2f$hexLogoWallRows$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/HexLogoWall/hexLogoWallRows.ts [app-client] (ecmascript)");
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexLogoWall$2f$HexLogoWall$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexLogoWall"];
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/HexTileLinks/HexTileLinks.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Content",
    ()=>Content,
    "Face",
    ()=>Face,
    "HEX_TILE_MAX_PX",
    ()=>HEX_TILE_MAX_PX,
    "Item",
    ()=>Item,
    "List",
    ()=>List,
    "Ring",
    ()=>Ring,
    "Root",
    ()=>Root,
    "TileLink",
    ()=>TileLink,
    "Title",
    ()=>Title
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$NavLink$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/NavLink/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$NavLink$2f$NavLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/NavLink/NavLink.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$hex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/hex.ts [app-client] (ecmascript) <locals>");
'use client';
;
;
;
const HEX_TILE_MAX_PX = 300;
/** Breite des Rings um die Fläche — wie die Logo-Wand (HexLogoWall) */ const RING_PX = 2;
/** Hub der Wabe beim Zeigen */ const LIFT_PX = 4;
const Root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].section.withConfig({
    displayName: "HexTileLinks.styles__Root",
    componentId: "sc-9b72c459-0"
})`
  display: flex;
  flex-direction: column;
  gap: ${({ theme })=>theme.margin.large};
  width: 100%;
`;
const List = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ul.withConfig({
    displayName: "HexTileLinks.styles__List",
    componentId: "sc-9b72c459-1"
})`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${({ theme })=>theme.margin.large};
  margin: 0;
  padding: 0;
  list-style: none;
`;
const Item = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].li.withConfig({
    displayName: "HexTileLinks.styles__Item",
    componentId: "sc-9b72c459-2"
})`
  flex: 0 1 ${HEX_TILE_MAX_PX}px;
  min-width: 0;
`;
const Ring = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "HexTileLinks.styles__Ring",
    componentId: "sc-9b72c459-3"
})`
  position: absolute;
  inset: 0;
  ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$hex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["roundedHexagonMask"]}
  background: ${({ theme })=>theme.palette.site.border};
  transition: background-color 200ms ease;
`;
const Face = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "HexTileLinks.styles__Face",
    componentId: "sc-9b72c459-4"
})`
  position: absolute;
  inset: ${RING_PX}px;
  ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$hex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["roundedHexagonMask"]}
  background: ${({ theme })=>theme.palette.site.card};
  transition: background-color 200ms ease;
`;
const Content = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "HexTileLinks.styles__Content",
    componentId: "sc-9b72c459-5"
})`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme })=>theme.margin.default};
  height: 100%;
  /* Text bleibt im Sechseck: links und rechts die Schrägen frei */
  padding: 0 12%;
  text-align: center;

  /* Chip mittig: IconChip rückt sonst um die Ringbreite nach rechts */
  > span[data-size] {
    left: 0;
  }
`;
const Title = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "HexTileLinks.styles__Title",
    componentId: "sc-9b72c459-6"
})`
  font-family: ${({ theme })=>theme.font.primaryFamily};
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  color: ${({ theme })=>theme.palette.site.heading};
  /* ganze Wörter: Trennstriche mitten im Titel wirken in der Wabe unruhig */
  hyphens: manual;
  overflow-wrap: break-word;
  transition: color 200ms ease;

  svg {
    display: inline-block;
    margin-left: ${({ theme })=>theme.margin.extrasmall};
    vertical-align: -2px;
    color: ${({ theme })=>theme.palette.site.blue};
    transition: transform 150ms ease;
  }
`;
const TileLink = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$NavLink$2f$NavLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavLink"]).withConfig({
    displayName: "HexTileLinks.styles__TileLink",
    componentId: "sc-9b72c459-7"
})`
  position: relative;
  display: block;
  aspect-ratio: 1;
  text-decoration: none;
  transition: transform 200ms ease;

  &&,
  &&:hover {
    color: inherit;
  }

  &:focus-visible {
    outline: none;
  }

  &:focus-visible ${Ring} {
    background: ${({ theme })=>theme.palette.default.primary};
  }

  &:hover,
  &:focus-visible {
    transform: translateY(-${LIFT_PX}px);
  }

  &:hover ${Ring}, &:focus-visible ${Ring}, &:hover ${Face}, &:focus-visible ${Face} {
    background: ${({ theme })=>theme.palette.site.greenDark};
  }

  &:hover ${Title}, &:focus-visible ${Title} {
    color: ${({ theme })=>theme.palette.text.onAccent};
  }

  &:hover ${Title} svg,
  &:focus-visible ${Title} svg {
    color: ${({ theme })=>theme.palette.text.onAccent};
    transform: translateX(4px);
  }

  &:hover span[data-size],
  &:focus-visible span[data-size] {
    color: ${({ theme })=>theme.palette.text.onAccent};
    --chip-face: color-mix(in srgb, ${({ theme })=>theme.palette.text.onAccent} 20%, transparent);
    --chip-ring: color-mix(in srgb, ${({ theme })=>theme.palette.text.onAccent} 12%, transparent);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &:hover,
    &:focus-visible {
      transform: none;
    }

    ${Ring}, ${Face}, ${Title} {
      transition: none;
    }
  }
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/HexTileLinks/HexTileLinks.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HexTileLinks",
    ()=>HexTileLinks,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$IconChip$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/IconChip/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$IconChip$2f$IconChip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/IconChip/IconChip.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$SiteSectionHeader$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/SiteSectionHeader/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$SiteSectionHeader$2f$SiteSectionHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/SiteSectionHeader/SiteSectionHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexTileLinks$2f$HexTileLinks$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/HexTileLinks/HexTileLinks.styles.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const Pfeil = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "16",
        height: "16",
        viewBox: "0 0 16 16",
        fill: "currentColor",
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M8.9 3.3a.9.9 0 0 1 1.3 0l4.1 4.1a.9.9 0 0 1 0 1.2l-4.1 4.1a.9.9 0 1 1-1.3-1.3l2.6-2.5H2.4a.9.9 0 1 1 0-1.8h9.1L8.9 4.6a.9.9 0 0 1 0-1.3Z"
        }, void 0, false, {
            fileName: "[project]/apps/web/src/app/components/Molecule/HexTileLinks/HexTileLinks.tsx",
            lineNumber: 29,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Molecule/HexTileLinks/HexTileLinks.tsx",
        lineNumber: 28,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = Pfeil;
function HexTileLinks({ headline, description, items, onFirstHover, onLinkClick, className, dataTestId = 'hex-tile-links' }) {
    _s();
    const hovered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const onPointerEnter = (event)=>{
        if (event.pointerType === 'touch' || hovered.current) return;
        hovered.current = true;
        onFirstHover?.();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexTileLinks$2f$HexTileLinks$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        className: className,
        "data-testid": dataTestId,
        children: [
            (headline || description) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$SiteSectionHeader$2f$SiteSectionHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiteSectionHeader"], {
                headline: headline,
                description: description,
                align: "center",
                dataTestId: `${dataTestId}-header`
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Molecule/HexTileLinks/HexTileLinks.tsx",
                lineNumber: 57,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexTileLinks$2f$HexTileLinks$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["List"], {
                "data-testid": `${dataTestId}-list`,
                children: items.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexTileLinks$2f$HexTileLinks$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"], {
                        "data-testid": `${dataTestId}-item`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexTileLinks$2f$HexTileLinks$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TileLink"], {
                            href: item.href,
                            "data-testid": `${dataTestId}-link-${index}`,
                            onPointerEnter: onPointerEnter,
                            onClick: ()=>onLinkClick?.(),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexTileLinks$2f$HexTileLinks$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ring"], {
                                    "aria-hidden": "true"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/components/Molecule/HexTileLinks/HexTileLinks.tsx",
                                    lineNumber: 73,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexTileLinks$2f$HexTileLinks$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Face"], {
                                    "aria-hidden": "true"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/components/Molecule/HexTileLinks/HexTileLinks.tsx",
                                    lineNumber: 74,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexTileLinks$2f$HexTileLinks$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$IconChip$2f$IconChip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconChip"], {
                                            name: item.icon.name,
                                            tone: item.icon.tone,
                                            size: "large",
                                            shape: "hex",
                                            dataTestId: `${dataTestId}-icon-${index}`
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/components/Molecule/HexTileLinks/HexTileLinks.tsx",
                                            lineNumber: 76,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexTileLinks$2f$HexTileLinks$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
                                            "data-testid": `${dataTestId}-title-${index}`,
                                            children: [
                                                item.title,
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Pfeil, {}, void 0, false, {
                                                    fileName: "[project]/apps/web/src/app/components/Molecule/HexTileLinks/HexTileLinks.tsx",
                                                    lineNumber: 85,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/app/components/Molecule/HexTileLinks/HexTileLinks.tsx",
                                            lineNumber: 83,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/app/components/Molecule/HexTileLinks/HexTileLinks.tsx",
                                    lineNumber: 75,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/app/components/Molecule/HexTileLinks/HexTileLinks.tsx",
                            lineNumber: 67,
                            columnNumber: 13
                        }, this)
                    }, index, false, {
                        fileName: "[project]/apps/web/src/app/components/Molecule/HexTileLinks/HexTileLinks.tsx",
                        lineNumber: 66,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Molecule/HexTileLinks/HexTileLinks.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Molecule/HexTileLinks/HexTileLinks.tsx",
        lineNumber: 55,
        columnNumber: 5
    }, this);
}
_s(HexTileLinks, "WIEc9+QUiugixDOC6daOPCwysRc=");
_c1 = HexTileLinks;
const __TURBOPACK__default__export__ = HexTileLinks;
var _c, _c1;
__turbopack_context__.k.register(_c, "Pfeil");
__turbopack_context__.k.register(_c1, "HexTileLinks");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/HexTileLinks/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexTileLinks$2f$HexTileLinks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/HexTileLinks/HexTileLinks.tsx [app-client] (ecmascript)");
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/LanguageSwitcher/LanguageSwitcher.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Code",
    ()=>Code,
    "Empty",
    ()=>Empty,
    "List",
    ()=>List,
    "Option",
    ()=>Option,
    "OptionCode",
    ()=>OptionCode,
    "Panel",
    ()=>Panel,
    "Root",
    ()=>Root,
    "SearchWrap",
    ()=>SearchWrap,
    "Trigger",
    ()=>Trigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$zIndex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/zIndex.ts [app-client] (ecmascript)");
'use client';
;
;
const Root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "LanguageSwitcher.styles__Root",
    componentId: "sc-15df00de-0"
})`
  position: relative;
  display: inline-flex;
`;
const Trigger = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "LanguageSwitcher.styles__Trigger",
    componentId: "sc-15df00de-1"
})`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 36px;
  padding: 0 8px;
  border: none;
  border-radius: 18px;
  background: ${({ $open, theme })=>$open ? theme.palette.surface.subtle : 'transparent'};
  /* #1497: im durchsichtigen Header über blauer Folie hell (--header-fg); offen/überfahren auf hellem Grund */
  color: ${({ $open, theme })=>$open ? theme.palette.default.primary : `var(--header-fg, ${theme.palette.text.secondary})`};
  font-family: ${({ theme })=>theme.font.secondaryFamily};
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.04em;
  cursor: pointer;
  transition:
    background 0.15s ease,
    color 0.15s ease;

  &:hover,
  &:focus-visible {
    background: ${({ theme })=>theme.palette.surface.subtle};
    color: ${({ theme })=>theme.palette.default.primary};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme })=>theme.palette.default.primary};
    outline-offset: 2px;
  }

  svg {
    width: 16px;
    height: 16px;
    transition: transform 0.2s ease;
    transform: rotate(${({ $open })=>$open ? '180deg' : '0deg'});
  }
`;
const Code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "LanguageSwitcher.styles__Code",
    componentId: "sc-15df00de-2"
})`
  text-transform: uppercase;
  line-height: 1;
`;
const Panel = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "LanguageSwitcher.styles__Panel",
    componentId: "sc-15df00de-3"
})`
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  z-index: ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$zIndex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Z_INDEX"].dropdown};
  width: 280px;
  max-width: calc(100vw - 32px);
  display: flex;
  flex-direction: column;
  padding: 8px;
  background: ${({ theme })=>theme.palette.default.white};
  border: 1px solid ${({ theme })=>theme.palette.border.default};
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.14);

  /* #1561: der Link-Modus hält das Feld geschlossen im DOM — display:flex schlüge sonst hidden */
  &[hidden] {
    display: none;
  }
`;
const SearchWrap = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "LanguageSwitcher.styles__SearchWrap",
    componentId: "sc-15df00de-4"
})`
  padding: 0 4px 8px;
  border-bottom: 1px solid ${({ theme })=>theme.palette.border.default};
  margin-bottom: 4px;
`;
const List = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ul.withConfig({
    displayName: "LanguageSwitcher.styles__List",
    componentId: "sc-15df00de-5"
})`
  max-height: min(50vh, 360px);
  overflow-y: auto;
  margin: 0;
  padding: 0;
  list-style: none;
`;
const Empty = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].li.withConfig({
    displayName: "LanguageSwitcher.styles__Empty",
    componentId: "sc-15df00de-6"
})`
  padding: 12px;
  color: ${({ theme })=>theme.palette.text.muted};
  font-family: ${({ theme })=>theme.font.secondaryFamily};
  font-size: 13px;
  text-align: center;
`;
const Option = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "LanguageSwitcher.styles__Option",
    componentId: "sc-15df00de-7"
})`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  box-sizing: border-box;
  padding: 9px 12px;
  border: none;
  border-radius: 6px;
  background: ${({ $active, theme })=>$active ? theme.palette.surface.subtle : 'transparent'};
  color: ${({ theme })=>theme.palette.text.primary};
  font-family: ${({ theme })=>theme.font.secondaryFamily};
  font-size: 13px;
  font-weight: ${({ $active })=>$active ? 600 : 500};
  text-align: left;
  text-decoration: none;
  cursor: pointer;
  transition: background 0.15s;

  /* #1561: im Link-Modus ein <a> — gegen die globalen a-Regeln (Farbe, Unterstrich) */
  && {
    color: ${({ theme })=>theme.palette.text.primary};
    text-decoration: none;
  }

  &:hover,
  &:focus-visible {
    background: ${({ theme })=>theme.palette.surface.subtle};
    outline: none;
  }
`;
const OptionCode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "LanguageSwitcher.styles__OptionCode",
    componentId: "sc-15df00de-8"
})`
  margin-left: auto;
  color: ${({ theme })=>theme.palette.text.muted};
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.04em;
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/LanguageSwitcher/LanguageSwitcher.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LINK_SEARCH_FROM",
    ()=>LINK_SEARCH_FROM,
    "LanguageSwitcher",
    ()=>LanguageSwitcher,
    "default",
    ()=>__TURBOPACK__default__export__,
    "matchesLanguage",
    ()=>matchesLanguage,
    "orderLanguages",
    ()=>orderLanguages,
    "shortCode",
    ()=>shortCode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Flag$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Flag/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Flag$2f$Flag$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Flag/Flag.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconChevronDown$2f$IconChevronDown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconChevronDown/IconChevronDown.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$settings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/settings.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$LanguageSwitcher$2f$LanguageSwitcher$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/LanguageSwitcher/LanguageSwitcher.styles.ts [app-client] (ecmascript)");
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
/**
 * #1478: Das Suchfeld (FilterField → EditableField mit allen Eingabetypen,
 * Markdown-Editor, Datei-Upload, …) erst laden, wenn das Menü aufgeht — der
 * Sprachwechsel steht im Kopf jeder öffentlichen Seite.
 */ const FilterField = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/apps/web/src/app/components/Molecule/FilterField/index.ts [app-client] (ecmascript, next/dynamic entry, async loader)").then((m)=>m.FilterField), {
    loadableGenerated: {
        modules: [
            "[project]/apps/web/src/app/components/Molecule/FilterField/index.ts [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c = FilterField;
const LINK_SEARCH_FROM = 9;
/** Wie oft (Frames) auf das nachgeladene Suchfeld gewartet wird, um es zu fokussieren. */ const FOKUS_VERSUCHE = 120;
const matchesLanguage = (locale, query)=>{
    const q = query.trim().toLowerCase();
    if (!q) return true;
    const info = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$settings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localeInfo"][locale];
    return locale.toLowerCase().includes(q) || (info?.native ?? '').toLowerCase().includes(q) || (info?.english ?? '').toLowerCase().includes(q);
};
const shortCode = (locale)=>locale.split('-')[0].toUpperCase();
const PINNED = [
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$settings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fallbackLng"],
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$settings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fallbackLngForMissing"],
    'en-US'
];
const orderLanguages = (locales)=>{
    const pinned = PINNED.filter((locale)=>locales.includes(locale));
    const rest = locales.filter((locale)=>!pinned.includes(locale)).sort((a, b)=>(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$settings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localeInfo"][a]?.english ?? a).localeCompare(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$settings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localeInfo"][b]?.english ?? b));
    return [
        ...pinned,
        ...rest
    ];
};
const LanguageSwitcher = ({ value, onChange, options = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$settings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["languages"], ariaLabel = 'Sprache wählen', searchPlaceholder = 'Sprache suchen…', noResultsText = 'Keine Sprache gefunden', dataTestId = 'language-switcher', className, links })=>{
    _s();
    const linkModus = links !== undefined && links.length > 0;
    // #2090: Suche im Link-Modus erst ab LINK_SEARCH_FROM Sprachen (mehr als 8)
    const linkSuche = linkModus && (links ?? []).length >= LINK_SEARCH_FROM;
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const rootRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const triggerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const panelRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const listRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const listId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    const ordered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "LanguageSwitcher.useMemo[ordered]": ()=>linkModus ? (links ?? []).map({
                "LanguageSwitcher.useMemo[ordered]": (link)=>link.language
            }["LanguageSwitcher.useMemo[ordered]"]) : orderLanguages(options)
    }["LanguageSwitcher.useMemo[ordered]"], [
        linkModus,
        links,
        options
    ]);
    const visible = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "LanguageSwitcher.useMemo[visible]": ()=>ordered.filter({
                "LanguageSwitcher.useMemo[visible]": (locale)=>matchesLanguage(locale, query)
            }["LanguageSwitcher.useMemo[visible]"])
    }["LanguageSwitcher.useMemo[visible]"], [
        ordered,
        query
    ]);
    const close = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LanguageSwitcher.useCallback[close]": (refocus = false)=>{
            setOpen(false);
            setQuery('');
            if (refocus) triggerRef.current?.focus();
        }
    }["LanguageSwitcher.useCallback[close]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LanguageSwitcher.useEffect": ()=>{
            if (!open) return;
            const onPointerDown = {
                "LanguageSwitcher.useEffect.onPointerDown": (event)=>{
                    if (!rootRef.current?.contains(event.target)) close();
                }
            }["LanguageSwitcher.useEffect.onPointerDown"];
            document.addEventListener('mousedown', onPointerDown);
            document.addEventListener('touchstart', onPointerDown);
            return ({
                "LanguageSwitcher.useEffect": ()=>{
                    document.removeEventListener('mousedown', onPointerDown);
                    document.removeEventListener('touchstart', onPointerDown);
                }
            })["LanguageSwitcher.useEffect"];
        }
    }["LanguageSwitcher.useEffect"], [
        open,
        close
    ]);
    // Beim Öffnen landet der Fokus im Suchfeld
    // (#1478: das Feld wird nachgeladen — bis es da ist, je Frame erneut versuchen)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LanguageSwitcher.useEffect": ()=>{
            if (!open) return undefined;
            let frame = 0;
            let versuche = 0;
            const fokussiere = {
                "LanguageSwitcher.useEffect.fokussiere": ()=>{
                    // #2090: mit Suche (auch im Link-Modus) zuerst ins Suchfeld
                    const input = panelRef.current?.querySelector(linkSuche ? 'input' : 'input, a');
                    if (input) {
                        input.focus();
                        return;
                    }
                    if (versuche++ < FOKUS_VERSUCHE) frame = requestAnimationFrame(fokussiere);
                }
            }["LanguageSwitcher.useEffect.fokussiere"];
            fokussiere();
            return ({
                "LanguageSwitcher.useEffect": ()=>cancelAnimationFrame(frame)
            })["LanguageSwitcher.useEffect"];
        }
    }["LanguageSwitcher.useEffect"], [
        open,
        linkSuche
    ]);
    const moveFocus = (delta)=>{
        // #2090: verborgene Links (kein Treffer der Suche) überspringen
        const items = Array.from(listRef.current?.querySelectorAll('button, a') ?? []).filter((item)=>!item.closest('li')?.hidden);
        if (items.length === 0) return;
        const index = items.findIndex((item)=>item === document.activeElement);
        // Aus dem Suchfeld (index -1) führt ArrowDown auf den ersten, ArrowUp auf den letzten Eintrag
        const next = index === -1 ? delta > 0 ? 0 : items.length - 1 : (index + delta + items.length) % items.length;
        items[next]?.focus();
    };
    const handleKeyDown = (event)=>{
        switch(event.key){
            case 'Escape':
                if (open) {
                    event.preventDefault();
                    close(true);
                }
                break;
            case 'ArrowDown':
                event.preventDefault();
                if (!open) setOpen(true);
                else moveFocus(1);
                break;
            case 'Enter':
                // Enter im Suchfeld wählt den einzigen/ersten Treffer
                if (open && event.target.tagName === 'INPUT' && visible.length > 0) {
                    event.preventDefault();
                    // #2090: im Link-Modus führt der erste Treffer auf seine Adresse
                    const treffer = linkModus ? links?.find((link)=>link.language === visible[0]) : undefined;
                    if (treffer) {
                        if (treffer.language !== value) onChange(treffer.language);
                        window.location.assign(treffer.href);
                        return;
                    }
                    select(visible[0]);
                }
                break;
            case 'ArrowUp':
                event.preventDefault();
                if (open) moveFocus(-1);
                break;
            default:
        }
    };
    const select = (locale)=>{
        if (locale !== value) onChange(locale);
        close(true);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$LanguageSwitcher$2f$LanguageSwitcher$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        ref: rootRef,
        className: className,
        "data-testid": dataTestId,
        "data-value": value,
        "data-open": open ? 'true' : 'false',
        "data-mode": linkModus ? 'links' : 'select',
        "data-searchable": !linkModus || linkSuche ? 'true' : 'false',
        onKeyDown: handleKeyDown,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$LanguageSwitcher$2f$LanguageSwitcher$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
                ref: triggerRef,
                type: "button",
                $open: open,
                // #1949: sichtbares Kürzel vorn im Namen (WCAG 2.5.3 Label in Name)
                "aria-label": `${shortCode(value)} – ${ariaLabel}`,
                "aria-haspopup": linkModus ? 'true' : 'listbox',
                "aria-expanded": open,
                "aria-controls": open ? listId : undefined,
                "data-testid": `${dataTestId}-trigger`,
                onClick: ()=>setOpen((current)=>!current),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Flag$2f$Flag$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Flag"], {
                        locale: value,
                        size: "sm",
                        decorative: true
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Molecule/LanguageSwitcher/LanguageSwitcher.tsx",
                        lineNumber: 230,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$LanguageSwitcher$2f$LanguageSwitcher$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Code"], {
                        children: shortCode(value)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Molecule/LanguageSwitcher/LanguageSwitcher.tsx",
                        lineNumber: 231,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconChevronDown$2f$IconChevronDown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconChevronDown"], {}, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Molecule/LanguageSwitcher/LanguageSwitcher.tsx",
                        lineNumber: 232,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/components/Molecule/LanguageSwitcher/LanguageSwitcher.tsx",
                lineNumber: 217,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            linkModus && // #1561: immer im DOM (Crawler sehen die Links), geschlossen per `hidden`
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$LanguageSwitcher$2f$LanguageSwitcher$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Panel"], {
                ref: panelRef,
                "data-testid": `${dataTestId}-panel`,
                hidden: !open,
                children: [
                    linkSuche && open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$LanguageSwitcher$2f$LanguageSwitcher$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SearchWrap"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FilterField, {
                            name: "language-search",
                            hideLabel: true,
                            value: query,
                            onChange: (next)=>setQuery(typeof next === 'string' ? next : ''),
                            placeholder: searchPlaceholder,
                            dataTestId: `${dataTestId}-search`
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Molecule/LanguageSwitcher/LanguageSwitcher.tsx",
                            lineNumber: 239,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Molecule/LanguageSwitcher/LanguageSwitcher.tsx",
                        lineNumber: 238,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$LanguageSwitcher$2f$LanguageSwitcher$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["List"], {
                        ref: listRef,
                        id: listId,
                        "aria-label": ariaLabel,
                        children: [
                            linkSuche && visible.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$LanguageSwitcher$2f$LanguageSwitcher$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Empty"], {
                                "data-testid": `${dataTestId}-empty`,
                                children: noResultsText
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Molecule/LanguageSwitcher/LanguageSwitcher.tsx",
                                lineNumber: 251,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            (links ?? []).map((link)=>{
                                const active = link.language === value;
                                const info = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$settings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localeInfo"][link.language];
                                // #2090: Treffer der Suche; die übrigen bleiben als Link im DOM (Crawler), nur verborgen
                                const sichtbar = !linkSuche || visible.includes(link.language);
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    hidden: !sichtbar,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$LanguageSwitcher$2f$LanguageSwitcher$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Option"], {
                                        as: "a",
                                        href: link.href,
                                        hrefLang: link.language.split('-')[0],
                                        lang: link.language,
                                        $active: active,
                                        "aria-current": active ? 'page' : undefined,
                                        "data-testid": `${dataTestId}-option-${link.language}`,
                                        "data-active": active ? 'true' : 'false',
                                        onClick: ()=>{
                                            if (!active) onChange(link.language);
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Flag$2f$Flag$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Flag"], {
                                                locale: link.language,
                                                size: "sm"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/components/Molecule/LanguageSwitcher/LanguageSwitcher.tsx",
                                                lineNumber: 273,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: info?.native ?? link.language
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/components/Molecule/LanguageSwitcher/LanguageSwitcher.tsx",
                                                lineNumber: 274,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$LanguageSwitcher$2f$LanguageSwitcher$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionCode"], {
                                                "aria-hidden": "true",
                                                children: shortCode(link.language)
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/components/Molecule/LanguageSwitcher/LanguageSwitcher.tsx",
                                                lineNumber: 275,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/app/components/Molecule/LanguageSwitcher/LanguageSwitcher.tsx",
                                        lineNumber: 260,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, link.language, false, {
                                    fileName: "[project]/apps/web/src/app/components/Molecule/LanguageSwitcher/LanguageSwitcher.tsx",
                                    lineNumber: 259,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0));
                            })
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/app/components/Molecule/LanguageSwitcher/LanguageSwitcher.tsx",
                        lineNumber: 249,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/components/Molecule/LanguageSwitcher/LanguageSwitcher.tsx",
                lineNumber: 236,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            !linkModus && open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$LanguageSwitcher$2f$LanguageSwitcher$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Panel"], {
                ref: panelRef,
                "data-testid": `${dataTestId}-panel`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$LanguageSwitcher$2f$LanguageSwitcher$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SearchWrap"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FilterField, {
                            name: "language-search",
                            hideLabel: true,
                            value: query,
                            onChange: (next)=>setQuery(typeof next === 'string' ? next : ''),
                            placeholder: searchPlaceholder,
                            dataTestId: `${dataTestId}-search`
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Molecule/LanguageSwitcher/LanguageSwitcher.tsx",
                            lineNumber: 286,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Molecule/LanguageSwitcher/LanguageSwitcher.tsx",
                        lineNumber: 285,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$LanguageSwitcher$2f$LanguageSwitcher$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["List"], {
                        ref: listRef,
                        id: listId,
                        role: "listbox",
                        "aria-label": ariaLabel,
                        children: [
                            visible.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$LanguageSwitcher$2f$LanguageSwitcher$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Empty"], {
                                "data-testid": `${dataTestId}-empty`,
                                children: noResultsText
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Molecule/LanguageSwitcher/LanguageSwitcher.tsx",
                                lineNumber: 296,
                                columnNumber: 38
                            }, ("TURBOPACK compile-time value", void 0)),
                            visible.map((locale)=>{
                                const active = locale === value;
                                const info = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$settings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localeInfo"][locale];
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    role: "none",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$LanguageSwitcher$2f$LanguageSwitcher$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Option"], {
                                        type: "button",
                                        role: "option",
                                        "aria-selected": active,
                                        $active: active,
                                        "data-testid": `${dataTestId}-option-${locale}`,
                                        "data-active": active ? 'true' : 'false',
                                        onClick: ()=>select(locale),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Flag$2f$Flag$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Flag"], {
                                                locale: locale,
                                                size: "sm",
                                                decorative: true
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/components/Molecule/LanguageSwitcher/LanguageSwitcher.tsx",
                                                lineNumber: 311,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: info?.native ?? locale
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/components/Molecule/LanguageSwitcher/LanguageSwitcher.tsx",
                                                lineNumber: 312,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$LanguageSwitcher$2f$LanguageSwitcher$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionCode"], {
                                                "aria-hidden": "true",
                                                children: locale
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/components/Molecule/LanguageSwitcher/LanguageSwitcher.tsx",
                                                lineNumber: 313,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/app/components/Molecule/LanguageSwitcher/LanguageSwitcher.tsx",
                                        lineNumber: 302,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, locale, false, {
                                    fileName: "[project]/apps/web/src/app/components/Molecule/LanguageSwitcher/LanguageSwitcher.tsx",
                                    lineNumber: 301,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0));
                            })
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/app/components/Molecule/LanguageSwitcher/LanguageSwitcher.tsx",
                        lineNumber: 295,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/components/Molecule/LanguageSwitcher/LanguageSwitcher.tsx",
                lineNumber: 284,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Molecule/LanguageSwitcher/LanguageSwitcher.tsx",
        lineNumber: 207,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(LanguageSwitcher, "ys/XvxPYzdwqMuVGRMGmD1hKEjg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"]
    ];
});
_c1 = LanguageSwitcher;
const __TURBOPACK__default__export__ = LanguageSwitcher;
var _c, _c1;
__turbopack_context__.k.register(_c, "FilterField");
__turbopack_context__.k.register(_c1, "LanguageSwitcher");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/LanguageSwitcher/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$LanguageSwitcher$2f$LanguageSwitcher$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/LanguageSwitcher/LanguageSwitcher.tsx [app-client] (ecmascript)");
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/LeadStatement/LeadStatement.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LEAD_FALLBACK_FADE_MS",
    ()=>LEAD_FALLBACK_FADE_MS,
    "LEAD_FALLBACK_STAGGER_MS",
    ()=>LEAD_FALLBACK_STAGGER_MS,
    "LEAD_RANGE_SPAN",
    ()=>LEAD_RANGE_SPAN,
    "LEAD_RANGE_START",
    ()=>LEAD_RANGE_START,
    "LEAD_RANGE_STEP",
    ()=>LEAD_RANGE_STEP,
    "Rest",
    ()=>Rest,
    "Root",
    ()=>Root,
    "ShortLine",
    ()=>ShortLine,
    "Statement",
    ()=>Statement,
    "Word",
    ()=>Word
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/site.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$brands$2f$partnerTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/brands/partnerTheme.ts [app-client] (ecmascript)");
'use client';
;
;
;
const LEAD_RANGE_START = 18;
const LEAD_RANGE_SPAN = 30;
const LEAD_RANGE_STEP = 6;
const LEAD_FALLBACK_STAGGER_MS = 35;
const LEAD_FALLBACK_FADE_MS = 420;
/** Farben: hell Grau → Navy, dunkel Grau → Weiß; Kurzwörter enden in Textgrün */ const farben = ({ theme })=>{
    const dunkel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$brands$2f$partnerTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDarkTheme"])(theme);
    const site = theme.palette.site;
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
    --lead-from: ${dunkel ? `color-mix(in srgb, ${site.muted} 45%, transparent)` : site.border};
    --lead-to: ${dunkel ? site.heading : site.navy};
    --lead-green: ${site.greenText};
  `;
};
const faerben = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframes"]`
  from {
    color: var(--lead-from);
  }
  to {
    color: var(--word-to, var(--lead-to));
  }
`;
/** Scroll-gebundene Färbung je Wort — nur, wo der Browser `animation-timeline: view()` kann */ const scrollFaerbung = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
  [data-lead-word] {
    animation: ${faerben} linear both;
    animation-timeline: --lead-statement;
    animation-range: cover calc(${LEAD_RANGE_START}% + var(--share, 0) * ${LEAD_RANGE_SPAN}%)
      cover calc(${LEAD_RANGE_START + LEAD_RANGE_STEP}% + var(--share, 0) * ${LEAD_RANGE_SPAN}%);
  }
`;
const Root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "LeadStatement.styles__Root",
    componentId: "sc-d0290513-0"
})`
  ${farben}
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme })=>theme.margin.default};
  width: 100%;
  max-width: calc(${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SITE_TEXT_MAX_WIDTH"]} * 1.25);
  margin-inline: auto;
  text-align: center;
  view-timeline-name: --lead-statement;

  /* Vor dem Einhängen und im Modus scroll: rein per CSS, ohne Flackern beim Laden */
  &:is([data-mode='pending'], [data-mode='scroll']) {
    @media (prefers-reduced-motion: no-preference) {
      @supports (animation-timeline: view()) {
        ${scrollFaerbung}
      }
    }
  }

  /* Rückfall ohne Scroll-Zeitachse: grau, bis der Satz durch die Mitte läuft */
  &[data-mode='observer'] [data-lead-word] {
    color: var(--lead-from);
    transition: color ${LEAD_FALLBACK_FADE_MS}ms ease-out;
    transition-delay: calc(var(--word, 0) * ${LEAD_FALLBACK_STAGGER_MS}ms);
  }

  &[data-mode='observer'][data-lit='true'] [data-lead-word] {
    color: var(--word-to, var(--lead-to));
  }

  @media (prefers-reduced-motion: reduce) {
    [data-lead-word] {
      animation: none;
      transition: none;
      color: var(--word-to, var(--lead-to));
    }
  }
`;
const Statement = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].p.withConfig({
    displayName: "LeadStatement.styles__Statement",
    componentId: "sc-d0290513-1"
})`
  margin: 0;
  font-family: ${({ theme })=>theme.font.primaryFamily};
  font-weight: 700;
  letter-spacing: -0.01em;
  text-wrap: balance;
  overflow-wrap: break-word;
  ${({ $long })=>$long ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
          font-size: clamp(1.375rem, 1.1rem + 0.9vw, 1.75rem);
          line-height: 1.4;
        ` : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
          font-size: clamp(1.75rem, 1.1rem + 2.2vw, 3rem);
          line-height: 1.2;
        `}
`;
const Word = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "LeadStatement.styles__Word",
    componentId: "sc-d0290513-2"
})`
  color: var(--word-to, var(--lead-to));
`;
const ShortLine = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].p.withConfig({
    displayName: "LeadStatement.styles__ShortLine",
    componentId: "sc-d0290513-3"
})`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  column-gap: ${({ theme })=>theme.margin.small};
  row-gap: ${({ theme })=>theme.margin.extrasmall};
  margin: 0;
  font-family: ${({ theme })=>theme.font.primaryFamily};
  font-size: clamp(1.125rem, 0.95rem + 0.7vw, 1.5rem);
  font-weight: 700;
  line-height: 1.3;
  --word-to: var(--lead-green);
`;
const Rest = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "LeadStatement.styles__Rest",
    componentId: "sc-d0290513-4"
})`
  ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteProse"]}
  max-width: ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SITE_TEXT_MAX_WIDTH"]};
  font-size: 18px;
  line-height: 30px;
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/LeadStatement/LeadStatement.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LeadStatement",
    ()=>LeadStatement,
    "default",
    ()=>__TURBOPACK__default__export__,
    "supportsScrollTimeline",
    ()=>supportsScrollTimeline
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$usePrefersReducedMotion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/usePrefersReducedMotion.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useSceneVisibility$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/useSceneVisibility.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$leadText2195$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/cmsBlocks/leadText2195.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$LeadStatement$2f$LeadStatement$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/LeadStatement/LeadStatement.styles.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const supportsScrollTimeline = ()=>typeof CSS !== 'undefined' && typeof CSS.supports === 'function' && CSS.supports('animation-timeline: view()');
/** Band in der Mitte des Bildschirms, in dem der Satz „durchläuft" (Rückfall und Messung) */ const MITTE = '-35% 0px -35% 0px';
function LeadStatement({ text, motion = true, onFirstView, dataTestId = 'lead-statement' }) {
    _s();
    const parts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "LeadStatement.useMemo[parts]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$leadText2195$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["leadTextParts"])(text)
    }["LeadStatement.useMemo[parts]"], [
        text
    ]);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const reduced = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$usePrefersReducedMotion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePrefersReducedMotion"])();
    const inMitte = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useSceneVisibility$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSceneVisibility"])(ref, 0, MITTE);
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('pending');
    const [lit, setLit] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LeadStatement.useEffect": ()=>{
            setMode(!motion || reduced ? 'static' : supportsScrollTimeline() ? 'scroll' : 'observer');
        }
    }["LeadStatement.useEffect"], [
        motion,
        reduced
    ]);
    const viewHandler = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(onFirstView);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LeadStatement.useEffect": ()=>{
            viewHandler.current = onFirstView;
        }
    }["LeadStatement.useEffect"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LeadStatement.useEffect": ()=>{
            if (!inMitte || lit) return;
            setLit(true);
            viewHandler.current?.();
        }
    }["LeadStatement.useEffect"], [
        inMitte,
        lit
    ]);
    if (!parts.lead) return null;
    const leadWords = parts.lead.split(/\s+/).filter(Boolean);
    // Anteil (0…1) über Leitsatz und Kurzwörter zusammen: die grüne Zeile färbt sich zuletzt
    const gesamt = leadWords.length + parts.short.length;
    const anteil = (i)=>gesamt > 1 ? i / (gesamt - 1) : 0;
    const wortStil = (i)=>({
            '--word': i,
            '--share': anteil(i).toFixed(3)
        });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$LeadStatement$2f$LeadStatement$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        ref: ref,
        "data-testid": dataTestId,
        "data-mode": mode,
        "data-lit": lit ? 'true' : 'false',
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$LeadStatement$2f$LeadStatement$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Statement"], {
                $long: parts.long,
                "data-long": parts.long ? 'true' : 'false',
                "data-testid": `${dataTestId}-statement`,
                children: leadWords.map((wort, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$LeadStatement$2f$LeadStatement$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Word"], {
                                "data-lead-word": "",
                                "data-testid": `${dataTestId}-word-${i}`,
                                style: wortStil(i),
                                children: wort
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Molecule/LeadStatement/LeadStatement.tsx",
                                lineNumber: 91,
                                columnNumber: 13
                            }, this),
                            i < leadWords.length - 1 ? ' ' : null
                        ]
                    }, i, true, {
                        fileName: "[project]/apps/web/src/app/components/Molecule/LeadStatement/LeadStatement.tsx",
                        lineNumber: 89,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Molecule/LeadStatement/LeadStatement.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, this),
            parts.short.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$LeadStatement$2f$LeadStatement$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShortLine"], {
                "data-testid": `${dataTestId}-short`,
                children: parts.short.map((kurz, k)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$LeadStatement$2f$LeadStatement$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Word"], {
                        "data-lead-word": "",
                        "data-testid": `${dataTestId}-short-${k}`,
                        style: wortStil(leadWords.length + k),
                        children: kurz
                    }, k, false, {
                        fileName: "[project]/apps/web/src/app/components/Molecule/LeadStatement/LeadStatement.tsx",
                        lineNumber: 101,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Molecule/LeadStatement/LeadStatement.tsx",
                lineNumber: 99,
                columnNumber: 9
            }, this),
            parts.rest.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$LeadStatement$2f$LeadStatement$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Rest"], {
                "data-testid": `${dataTestId}-rest`,
                children: parts.rest.map((absatz, k)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: absatz
                    }, k, false, {
                        fileName: "[project]/apps/web/src/app/components/Molecule/LeadStatement/LeadStatement.tsx",
                        lineNumber: 115,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Molecule/LeadStatement/LeadStatement.tsx",
                lineNumber: 113,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Molecule/LeadStatement/LeadStatement.tsx",
        lineNumber: 77,
        columnNumber: 5
    }, this);
}
_s(LeadStatement, "m8lgMAUnkI7tDQgsu8xnFm+hLVo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$usePrefersReducedMotion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePrefersReducedMotion"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useSceneVisibility$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSceneVisibility"]
    ];
});
_c = LeadStatement;
const __TURBOPACK__default__export__ = LeadStatement;
var _c;
__turbopack_context__.k.register(_c, "LeadStatement");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/LeadStatement/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$LeadStatement$2f$LeadStatement$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/LeadStatement/LeadStatement.tsx [app-client] (ecmascript)");
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/MediaText/HexFigure.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Cover",
    ()=>Cover,
    "Frame",
    ()=>Frame,
    "HEX_FIGURE_HALO_FILL",
    ()=>HEX_FIGURE_HALO_FILL,
    "HEX_FIGURE_MAX_WIDTH_PX",
    ()=>HEX_FIGURE_MAX_WIDTH_PX,
    "HEX_FIGURE_PARALLAX_PX",
    ()=>HEX_FIGURE_PARALLAX_PX,
    "HEX_FIGURE_WIDTH_SHARE",
    ()=>HEX_FIGURE_WIDTH_SHARE,
    "Halo",
    ()=>Halo,
    "Root",
    ()=>Root
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$hex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/hex.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/site.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$MediaText$2f$hexFigureReveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/MediaText/hexFigureReveal.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
const HEX_FIGURE_WIDTH_SHARE = 0.85;
const HEX_FIGURE_MAX_WIDTH_PX = 480;
const HEX_FIGURE_HALO_FILL = 'var(--hex-figure-halo)';
const Root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].figure.withConfig({
    displayName: "HexFigure.styles__Root",
    componentId: "sc-5a6f9167-0"
})`
  --hex-figure-halo: ${({ theme })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteVar"])('halo', theme.palette.site.tint)};
  position: relative;
  isolation: isolate;
  margin: 0;
  min-width: 0;
`;
const HEX_FIGURE_PARALLAX_PX = 24;
const wandern = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframes"]`
  from { transform: translateY(-${HEX_FIGURE_PARALLAX_PX}px); }
  to { transform: translateY(${HEX_FIGURE_PARALLAX_PX}px); }
`;
const Frame = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "HexFigure.styles__Frame",
    componentId: "sc-5a6f9167-1"
})`
  position: relative;
  width: min(${HEX_FIGURE_WIDTH_SHARE * 100}%, ${HEX_FIGURE_MAX_WIDTH_PX}px);
  aspect-ratio: ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$hex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PORTRAIT_HEX_ASPECT_RATIO"]};
  margin-left: ${({ $side })=>$side === 'right' ? 'auto' : '0'};
  overflow: hidden;
  ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$hex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["portraitHexagonMask"]}

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  /* #2200: Parallaxe — das Bild ist 2 × 24 px höher als die Maske und wandert
     beim Durchscrollen von −24 bis +24 px; nur wo der Browser die
     Scroll-Zeitleiste kennt und Bewegung erwünscht ist */
  @supports (animation-timeline: view()) {
    @media (prefers-reduced-motion: no-preference) {
      img {
        height: calc(100% + ${2 * HEX_FIGURE_PARALLAX_PX}px);
        margin-top: -${HEX_FIGURE_PARALLAX_PX}px;
        animation: ${wandern} linear both;
        animation-timeline: view();
      }
    }
  }
`;
const fadeIn = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframes"]`
  from { opacity: 0; }
  to { opacity: 1; }
`;
const Halo = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].svg.withConfig({
    displayName: "HexFigure.styles__Halo",
    componentId: "sc-5a6f9167-2"
})`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  display: block;
  width: 100%;
  height: 100%;
  overflow: visible;
  pointer-events: none;
  animation: ${fadeIn} 400ms ease-out both;

  path[data-rounded='true'],
  path[data-full='true'] {
    opacity: var(--alpha);
  }

  [data-partial='true'] {
    ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$hex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hexShimmerAnimation"]}
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;
const aufloesen = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframes"]`
  from { opacity: 1; transform: scale(1); }
  to { opacity: 0; transform: scale(0.4); }
`;
const Cover = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].svg.withConfig({
    displayName: "HexFigure.styles__Cover",
    componentId: "sc-5a6f9167-3"
})`
  position: absolute;
  inset: 0;
  display: none;
  width: 100%;
  height: 100%;
  pointer-events: none;

  ${Root}[data-state='idle'] &,
  ${Root}[data-state='running'] & {
    display: block;
  }

  path {
    fill: var(--hex-figure-halo);
    /* Haarfugen zwischen den Kacheln schließen */
    stroke: var(--hex-figure-halo);
    stroke-width: 1;
    transform-box: fill-box;
    transform-origin: center;
  }

  ${Root}[data-state='running'] & path {
    animation: ${aufloesen} ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$MediaText$2f$hexFigureReveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HEX_FIGURE_REVEAL_TILE_MS"]}ms ease-in var(--delay, 0ms) both;
  }
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/MediaText/HexFigure.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HexFigure",
    ()=>HexFigure,
    "default",
    ()=>__TURBOPACK__default__export__,
    "hexFigureFrame",
    ()=>hexFigureFrame,
    "hexFigureTiles",
    ()=>hexFigureTiles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/image-component.js [app-client] (ecmascript) <export Image as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$HexEdge$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/HexEdge/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$HexEdge$2f$HexTileGroup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/HexEdge/HexTileGroup.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexContentBackdrop$2f$backdropCells$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/HexContentBackdrop/backdropCells.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useElementWidth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/useElementWidth.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useEntranceAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/useEntranceAnimation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/lib/hex/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$fray$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/hex/fray.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$shape$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/hex/shape.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$grid$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/hex/grid.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$MediaText$2f$hexFigureReveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/MediaText/hexFigureReveal.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$MediaText$2f$HexFigure$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/MediaText/HexFigure.styles.ts [app-client] (ecmascript)");
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
const hexFigureFrame = (width, side)=>{
    const frameWidth = Math.min(width * __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$MediaText$2f$HexFigure$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HEX_FIGURE_WIDTH_SHARE"], __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$MediaText$2f$HexFigure$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HEX_FIGURE_MAX_WIDTH_PX"]);
    const left = side === 'right' ? width - frameWidth : 0;
    return {
        left,
        top: 0,
        right: left + frameWidth,
        bottom: frameWidth * __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$shape$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HEX_REGULAR_HEIGHT_RATIO"]
    };
};
/**
 * Liegt der Punkt im Sechseck (Spitze oben) des Rahmens, um `margin` px
 * nach außen vergrößert? Halbe Breite a, halbe Höhe b = a · 2/√3; die
 * schrägen Kanten fallen von der Spitze (0, b) bis (a, b/2).
 */ const inHexagon = (frame, margin, x, y)=>{
    const a = (frame.right - frame.left) / 2 + margin;
    const b = a * __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$shape$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HEX_REGULAR_HEIGHT_RATIO"];
    const dx = Math.abs(x - (frame.left + frame.right) / 2);
    const dy = Math.abs(y - (frame.top + frame.bottom) / 2);
    return dx <= a && dy <= b - dx * (b / (2 * a));
};
const hexFigureTiles = (width, side)=>{
    if (width <= 0) return [];
    const frame = hexFigureFrame(width, side);
    const middle = (frame.left + frame.right) / 2;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexContentBackdrop$2f$backdropCells$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["haloAroundSeeds"])(width, frame.bottom, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$grid$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["columnsForWidth"])(width), [
        frame
    ], (cell)=>inHexagon(frame, cell.size / 2, cell.cx, cell.cy), __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$fray$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_FRAY_STEPS"]).filter((tile)=>side === 'right' ? tile.cx < middle : tile.cx > middle);
};
const HexFigure = ({ src, alt, priority, side, dataTestId })=>{
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const width = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useElementWidth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useElementWidth"])(ref);
    const tiles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HexFigure.useMemo[tiles]": ()=>hexFigureTiles(width, side)
    }["HexFigure.useMemo[tiles]"], [
        width,
        side
    ]);
    const { state } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useEntranceAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEntranceAnimation"])(ref, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$MediaText$2f$hexFigureReveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HEX_FIGURE_REVEAL_MS"], 0.25);
    const rahmen = hexFigureFrame(width, side);
    const rahmenBreite = rahmen.right - rahmen.left;
    const decke = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HexFigure.useMemo[decke]": ()=>priority ? [] : (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$MediaText$2f$hexFigureReveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexFigureRevealTiles"])(rahmenBreite, rahmen.bottom, side)
    }["HexFigure.useMemo[decke]"], [
        priority,
        rahmenBreite,
        rahmen.bottom,
        side
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$MediaText$2f$HexFigure$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        ref: ref,
        "data-testid": dataTestId,
        "data-shape": "hex",
        "data-side": side,
        "data-loading": priority ? 'eager' : 'lazy',
        "data-state": priority ? 'static' : state,
        children: [
            tiles.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$MediaText$2f$HexFigure$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Halo"], {
                "aria-hidden": "true",
                focusable: "false",
                "data-testid": `${dataTestId}-halo-canvas`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$HexEdge$2f$HexTileGroup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexTileGroup"], {
                    tiles: tiles,
                    color: "tint",
                    fill: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$MediaText$2f$HexFigure$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HEX_FIGURE_HALO_FILL"],
                    dataTestId: `${dataTestId}-halo`
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Molecule/MediaText/HexFigure.tsx",
                    lineNumber: 119,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Molecule/MediaText/HexFigure.tsx",
                lineNumber: 118,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$MediaText$2f$HexFigure$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Frame"], {
                $side: side,
                "data-testid": `${dataTestId}-frame`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__["default"], {
                        src: src,
                        alt: alt,
                        width: 704,
                        height: 396,
                        sizes: "(max-width: 768px) 100vw, 50vw",
                        loading: priority ? 'eager' : 'lazy',
                        fetchPriority: priority ? 'high' : undefined
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Molecule/MediaText/HexFigure.tsx",
                        lineNumber: 131,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    decke.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$MediaText$2f$HexFigure$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cover"], {
                        viewBox: `0 0 ${Math.round(rahmenBreite)} ${Math.round(rahmen.bottom)}`,
                        preserveAspectRatio: "none",
                        "aria-hidden": "true",
                        focusable: "false",
                        "data-testid": `${dataTestId}-cover`,
                        "data-tiles": decke.length,
                        children: decke.map((tile)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$grid$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexSubpath"])(tile),
                                style: {
                                    '--delay': `${tile.delay}ms`
                                }
                            }, tile.key, false, {
                                fileName: "[project]/apps/web/src/app/components/Molecule/MediaText/HexFigure.tsx",
                                lineNumber: 150,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Molecule/MediaText/HexFigure.tsx",
                        lineNumber: 141,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/components/Molecule/MediaText/HexFigure.tsx",
                lineNumber: 127,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Molecule/MediaText/HexFigure.tsx",
        lineNumber: 109,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(HexFigure, "ZxaiW4xuai6Yx/0ObwOpMfdSJQU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useElementWidth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useElementWidth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useEntranceAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEntranceAnimation"]
    ];
});
_c = HexFigure;
const __TURBOPACK__default__export__ = HexFigure;
var _c;
__turbopack_context__.k.register(_c, "HexFigure");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/MediaText/MediaText.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CtaWrapper",
    ()=>CtaWrapper,
    "Figure",
    ()=>Figure,
    "Headline",
    ()=>Headline,
    "Prose",
    ()=>Prose,
    "Root",
    ()=>Root,
    "TextColumn",
    ()=>TextColumn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/site.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$brands$2f$partnerTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/brands/partnerTheme.ts [app-client] (ecmascript)");
'use client';
;
;
;
const Root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].article.withConfig({
    displayName: "MediaText.styles__Root",
    componentId: "sc-4af3d1c-0"
})`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  align-items: center;
  gap: 32px;
  width: 100%;
  /* Kein globaler border-box-Reset (_reset.scss): Breite plus Polster der
     Hervorhebung dürfen nicht über die Spalte hinausragen. */
  box-sizing: border-box;

  @media (min-width: 768px) {
    gap: 64px;
    ${({ $withImage })=>$withImage && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
        grid-template-columns: repeat(2, minmax(0, 1fr));
      `}
  }

  ${({ $withImage, $imagePosition })=>$withImage && $imagePosition === 'left' && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
      @media (min-width: 768px) {
        > figure {
          order: -1;
        }
      }
    `}

  ${({ $highlight, theme })=>$highlight && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
      padding: 32px;
      border: 1px solid ${theme.palette.site.border};
      border-radius: 24px;
      background: linear-gradient(to bottom, ${theme.palette.site.tint}, ${theme.palette.site.card});

      @media (min-width: 768px) {
        padding: 48px;
      }
    `}
`;
const TextColumn = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "MediaText.styles__TextColumn",
    componentId: "sc-4af3d1c-1"
})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-width: 0;
  ${({ $withImage })=>!$withImage && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
      max-width: ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SITE_TEXT_MAX_WIDTH"]};
    `}
`;
const Headline = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].h2.withConfig({
    displayName: "MediaText.styles__Headline",
    componentId: "sc-4af3d1c-2"
})`
  ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteH2"]}
`;
const Prose = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "MediaText.styles__Prose",
    componentId: "sc-4af3d1c-3"
})`
  > * + * {
    margin-top: 20px;
  }

  /* doppelte Klasse: schlägt die prose-Abstände von SiteMarkdown (p + ul) */
  && {
    p:has(+ ul),
    p:has(+ ol) {
      margin-bottom: 0;
    }

    ul,
    ol,
    p + ul,
    p + ol {
      margin: 0;
      padding-left: 0;
      list-style-position: inside;
    }

    /*
     * #1959: Sechseck-Punkt aus siteProse (::before, 1.25em links vom Text)
     * statt des Quadrats — die Liste rückt dafür um 1.25em ein.
     */
    ul,
    p + ul {
      padding-left: 1.25em;
      list-style: none;
    }

    li,
    li + li {
      margin: 0;
      padding-left: 0;
    }
  }

  /*
   * #2196: Zwischenüberschriften eine Stufe kleiner (Größe der h4 aus
   * SiteMarkdown, 20 px) — neben dem Element waren 24/30 px zu wuchtig.
   * Doppelte Klasse schlägt die Größe aus SiteMarkdown; Balken bleibt.
   */
  ${({ $compactSubheadings })=>$compactSubheadings && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
      && h3:not([data-render-as]),
      && [data-render-as='3'] {
        font-size: 20px;
        line-height: 1.25;
      }
    `}
`;
/** !mt-8 der Quelle: 32px über dem Knopf (16px Spaltenabstand plus 16px) */ /**
 * #2200: auf dunklen Flächen (Dunkelmodus, Navy-Band) verschwand der
 * Navy-Knopf fast — dort hell: weiße Kontur und Schrift, beim Zeigen weiß
 * gefüllt mit Navy-Schrift. Doppelte Klasse gegen die Hover-Regel des
 * Knopfs und die globalen Linkfarben des Dunkelmodus.
 */ const hellerKnopf = (vor)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
  ${vor} > a {
    background-color: transparent;
    color: #ffffff;
    --button-fg: #ffffff;
    box-shadow: inset 0 0 0 2px #ffffff;
  }
  ${vor} > a:hover:not(:disabled),
  ${vor} > a:focus-visible {
    background-color: #ffffff;
    color: ${({ theme })=>theme.palette.site.navy};
    --button-fg: ${({ theme })=>theme.palette.site.navy};
  }
`;
const CtaWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "MediaText.styles__CtaWrapper",
    componentId: "sc-4af3d1c-4"
})`
  margin-top: 16px;

  ${({ theme })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$brands$2f$partnerTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDarkTheme"])(theme) ? hellerKnopf('&&') : ''}
  ${hellerKnopf("[data-surface='dark'] &&")}
`;
const Figure = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].figure.withConfig({
    displayName: "MediaText.styles__Figure",
    componentId: "sc-4af3d1c-5"
})`
  margin: 0;
  min-width: 0;

  img {
    display: block;
    width: 100%;
    height: auto;
    border-radius: 24px;
    overflow: hidden;
  }
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/MediaText/MediaText.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MediaText",
    ()=>MediaText
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/image-component.js [app-client] (ecmascript) <export Image as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Headline$2f$Headline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Headline/Headline.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$SiteMarkdown$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/SiteMarkdown/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$SiteMarkdown$2f$SiteMarkdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/SiteMarkdown/SiteMarkdown.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$LinkButton$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/LinkButton/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Button$2f$Button$2e$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Button/Button.types.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconArrowRight$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconArrowRight/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$MediaText$2f$MediaText$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/MediaText/MediaText.styles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$MediaText$2f$HexFigure$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/MediaText/HexFigure.tsx [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
const HEADLINE_TAGS = {
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Headline$2f$Headline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeadlineImportances"].h1]: 'h1',
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Headline$2f$Headline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeadlineImportances"].h2]: 'h2',
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Headline$2f$Headline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeadlineImportances"].h3]: 'h3',
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Headline$2f$Headline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeadlineImportances"].h4]: 'h4',
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Headline$2f$Headline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeadlineImportances"].h5]: 'h5'
};
/**
 * Bild-Text-Split — der häufigste Sektionstyp auf plastship.com (#1199):
 * Überschrift in Versalien, Absätze als prose, Knopf in Blau, Bild mit
 * rounded-3xl. Zwei Spalten ab 768px, gestapelt Text über Bild.
 * #1958: mit `imageShape="hex"` steht das Bild als Sechseck mit Wabenhof da.
 */ const MediaText = (props)=>{
    const { headline, paragraphs, renderedParagraphs, imageSrc, imageAlt, imagePosition = 'right', imageShape = 'rounded', imagePriority = false, headlineImportance = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Headline$2f$Headline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeadlineImportances"].h2, ctaText, ctaHref, highlight = false, media, onCtaClick, compactSubheadings = false, className, dataTestId = 'media-text' } = props;
    const withMedia = media !== undefined && media !== null;
    const withImage = withMedia || Boolean(imageSrc);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$MediaText$2f$MediaText$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        className: className,
        "data-testid": dataTestId,
        "data-image-position": withImage ? imagePosition : 'none',
        "data-highlight": highlight ? 'true' : 'false',
        $highlight: highlight,
        $withImage: withImage,
        $imagePosition: imagePosition,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$MediaText$2f$MediaText$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextColumn"], {
                $withImage: withImage,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$MediaText$2f$MediaText$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Headline"], {
                        as: HEADLINE_TAGS[headlineImportance] ?? 'h2',
                        "data-testid": `${dataTestId}-headline`,
                        children: headline
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Molecule/MediaText/MediaText.tsx",
                        lineNumber: 108,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$MediaText$2f$MediaText$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Prose"], {
                        $compactSubheadings: compactSubheadings,
                        "data-compact-subheadings": compactSubheadings ? 'true' : undefined,
                        children: paragraphs.map((paragraph, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$SiteMarkdown$2f$SiteMarkdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiteMarkdown"], {
                                content: paragraph,
                                rendered: renderedParagraphs?.[index],
                                dataTestId: `${dataTestId}-paragraph`
                            }, index, false, {
                                fileName: "[project]/apps/web/src/app/components/Molecule/MediaText/MediaText.tsx",
                                lineNumber: 116,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Molecule/MediaText/MediaText.tsx",
                        lineNumber: 114,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    ctaText && ctaHref && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$MediaText$2f$MediaText$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CtaWrapper"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$LinkButton$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: ctaHref,
                            modifier: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Button$2f$Button$2e$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ButtonModifier"].SECONDARY,
                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconArrowRight$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Molecule/MediaText/MediaText.tsx",
                                lineNumber: 129,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            iconAlign: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Button$2f$Button$2e$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconAligns"].RIGHT,
                            onClick: onCtaClick,
                            dataTestId: `${dataTestId}-cta`,
                            children: ctaText
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Molecule/MediaText/MediaText.tsx",
                            lineNumber: 126,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Molecule/MediaText/MediaText.tsx",
                        lineNumber: 125,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/components/Molecule/MediaText/MediaText.tsx",
                lineNumber: 107,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            withMedia && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$MediaText$2f$MediaText$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Figure"], {
                "data-testid": `${dataTestId}-media`,
                "data-shape": "element",
                children: media
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Molecule/MediaText/MediaText.tsx",
                lineNumber: 140,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            !withMedia && imageSrc && imageShape === 'hex' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$MediaText$2f$HexFigure$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexFigure"], {
                src: imageSrc,
                alt: imageAlt ?? headline,
                priority: imagePriority,
                side: imagePosition,
                dataTestId: `${dataTestId}-image`
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Molecule/MediaText/MediaText.tsx",
                lineNumber: 145,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            !withMedia && imageSrc && imageShape !== 'hex' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$MediaText$2f$MediaText$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Figure"], {
                "data-testid": `${dataTestId}-image`,
                "data-shape": "rounded",
                "data-loading": imagePriority ? 'eager' : 'lazy',
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__["default"], {
                    src: imageSrc,
                    alt: imageAlt ?? headline,
                    width: 704,
                    height: 396,
                    sizes: "(max-width: 768px) 100vw, 50vw",
                    loading: imagePriority ? 'eager' : 'lazy',
                    fetchPriority: imagePriority ? 'high' : undefined
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Molecule/MediaText/MediaText.tsx",
                    lineNumber: 162,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Molecule/MediaText/MediaText.tsx",
                lineNumber: 154,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Molecule/MediaText/MediaText.tsx",
        lineNumber: 98,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = MediaText;
;
var _c;
__turbopack_context__.k.register(_c, "MediaText");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/MediaText/hexFigureReveal.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HEX_FIGURE_REVEAL_JITTER_MS",
    ()=>HEX_FIGURE_REVEAL_JITTER_MS,
    "HEX_FIGURE_REVEAL_MS",
    ()=>HEX_FIGURE_REVEAL_MS,
    "HEX_FIGURE_REVEAL_SPREAD_MS",
    ()=>HEX_FIGURE_REVEAL_SPREAD_MS,
    "HEX_FIGURE_REVEAL_TILE_MS",
    ()=>HEX_FIGURE_REVEAL_TILE_MS,
    "HEX_FIGURE_REVEAL_TILE_PX",
    ()=>HEX_FIGURE_REVEAL_TILE_PX,
    "hexFigureRevealTiles",
    ()=>hexFigureRevealTiles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/lib/hex/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$fray$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/hex/fray.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$grid$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/hex/grid.ts [app-client] (ecmascript)");
;
const HEX_FIGURE_REVEAL_TILE_PX = 56;
const HEX_FIGURE_REVEAL_TILE_MS = 450;
const HEX_FIGURE_REVEAL_SPREAD_MS = 900;
const HEX_FIGURE_REVEAL_JITTER_MS = 120;
const HEX_FIGURE_REVEAL_MS = HEX_FIGURE_REVEAL_TILE_MS + HEX_FIGURE_REVEAL_SPREAD_MS + HEX_FIGURE_REVEAL_JITTER_MS;
function hexFigureRevealTiles(width, height, side) {
    if (width <= 0 || height <= 0) return [];
    const columns = Math.max(4, Math.round(width / HEX_FIGURE_REVEAL_TILE_PX));
    const cells = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$grid$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexGridCells"])(width, height, columns);
    const ox = side === 'right' ? 0 : width;
    const oy = height / 2;
    const weiteste = Math.max(1, ...cells.map((c)=>Math.hypot(c.cx - ox, c.cy - oy)));
    return cells.map((cell)=>{
        const welle = Math.hypot(cell.cx - ox, cell.cy - oy) / weiteste * HEX_FIGURE_REVEAL_SPREAD_MS;
        const zufall = ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$fray$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cellNoise"])(cell) + 1) / 2 * HEX_FIGURE_REVEAL_JITTER_MS;
        return {
            ...cell,
            delay: Math.round(welle + zufall)
        };
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/MediaText/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$MediaText$2f$MediaText$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/MediaText/MediaText.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$MediaText$2f$HexFigure$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/MediaText/HexFigure.tsx [app-client] (ecmascript)");
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$MediaText$2f$MediaText$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaText"];
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/NewsCard/NewsCard.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ContentWrapper",
    ()=>ContentWrapper,
    "DateBadge",
    ()=>DateBadge,
    "DateBadgeDay",
    ()=>DateBadgeDay,
    "DateBadgeMonth",
    ()=>DateBadgeMonth,
    "ImageWrapper",
    ()=>ImageWrapper,
    "Meta",
    ()=>Meta,
    "Root",
    ()=>Root,
    "Tag",
    ()=>Tag,
    "Tags",
    ()=>Tags,
    "Title",
    ()=>Title
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/site.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$hex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/hex.ts [app-client] (ecmascript) <locals>");
'use client';
;
;
;
const Root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].article.withConfig({
    displayName: "NewsCard.styles__Root",
    componentId: "sc-2d756514-0"
})`
  ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteCard"])(true)}
  /* #2176: mit Ziel ist die ganze Karte der Link (gestreckter Titel-Link) */
  ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteLinkedCard"]}
  display: flex;
  flex-direction: column;
  color: ${({ theme })=>theme.palette.site.text};

  /*
   * Volle Höhe nur als einziges Kind (Rasterzelle, Spalte): so stehen Karten
   * einer Reihe gleich hoch. Untereinander gestapelt (verwandte Artikel)
   * wüchse sonst jede Karte auf die Höhe der ganzen Spalte.
   */
  height: auto;

  &:only-child {
    height: 100%;
  }

  & + & {
    margin-top: 16px;
  }
`;
const ImageWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "NewsCard.styles__ImageWrapper",
    componentId: "sc-2d756514-1"
})`
  position: relative;
  width: 100%;
  aspect-ratio: 704 / 396;
  overflow: hidden;
  border-radius: 12px 12px 0 0;
  background: ${({ theme })=>theme.palette.site.tint};

  img {
    object-fit: cover;
  }
`;
const DateBadge = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "NewsCard.styles__DateBadge",
    componentId: "sc-2d756514-2"
})`
  position: absolute;
  top: 12px;
  left: 12px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$hex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["roundedHexagonMask"]}
  background: ${({ theme })=>theme.palette.site.blueDark};
  color: ${({ theme })=>theme.palette.text.onAccent};
  font-family: ${({ theme })=>theme.font.primaryFamily};
  pointer-events: none;
`;
const DateBadgeDay = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "NewsCard.styles__DateBadgeDay",
    componentId: "sc-2d756514-3"
})`
  font-size: 20px;
  font-weight: 700;
  line-height: 1;
`;
const DateBadgeMonth = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "NewsCard.styles__DateBadgeMonth",
    componentId: "sc-2d756514-4"
})`
  margin-top: 2px;
  font-size: 11px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: 0.04em;
  text-transform: uppercase;
`;
const ContentWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "NewsCard.styles__ContentWrapper",
    componentId: "sc-2d756514-5"
})`
  ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteCardBody"]}
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
`;
const Title = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].h3.withConfig({
    displayName: "NewsCard.styles__Title",
    componentId: "sc-2d756514-6"
})`
  margin: 0;
  font-family: ${({ theme })=>theme.font.primaryFamily};
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0;
  text-transform: none;
  color: ${({ theme })=>theme.palette.site.text};
  overflow-wrap: break-word;

  @media (min-width: 640px) {
    font-size: 20px;
  }
`;
const Meta = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "NewsCard.styles__Meta",
    componentId: "sc-2d756514-7"
})`
  font-family: ${({ theme })=>theme.font.secondaryFamily};
  font-size: 14px;
  line-height: 20px;
  color: ${({ theme })=>theme.palette.site.muted};
  overflow-wrap: break-word;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }

  p {
    margin: 0;
  }

  strong {
    font-weight: 700;
  }
`;
const Tags = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ul.withConfig({
    displayName: "NewsCard.styles__Tags",
    componentId: "sc-2d756514-8"
})`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 0;
  padding: 0;
  list-style: none;
`;
const Tag = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].li.withConfig({
    displayName: "NewsCard.styles__Tag",
    componentId: "sc-2d756514-9"
})`
  ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteTag"]}
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/NewsCard/NewsCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NewsCard",
    ()=>NewsCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/image-component.js [app-client] (ecmascript) <export Image as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$ArrowLink$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/ArrowLink/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$ArrowLink$2f$ArrowLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/ArrowLink/ArrowLink.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$NewsCard$2f$NewsCard$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/NewsCard/NewsCard.styles.ts [app-client] (ecmascript)");
;
;
;
;
/**
 * Nachrichtenkarte der öffentlichen Seiten im Stil von plastship.com (#1199):
 * Bild, Titel als Pfeil-Link, graue Datumszeile, Beschreibung, Schlagworte.
 * #1959: optional das Datum als Wabenkachel über der Bildecke.
 */ const NewsCard = (props)=>{
    const { headline, href, imageUrl, imageAlt, date, dateBadge, subtitle, description, tags = [], imageSizes = '(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw', className, dataTestId = 'news-card' } = props;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$NewsCard$2f$NewsCard$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        className: className,
        "data-testid": dataTestId,
        "data-linked": href ? 'true' : 'false',
        children: [
            imageUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$NewsCard$2f$NewsCard$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ImageWrapper"], {
                "data-testid": `${dataTestId}-image-wrapper`,
                "data-card-image": "",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__["default"], {
                        src: imageUrl,
                        alt: imageAlt || headline,
                        fill: true,
                        sizes: imageSizes,
                        "data-testid": `${dataTestId}-image`
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Molecule/NewsCard/NewsCard.tsx",
                        lineNumber: 67,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    dateBadge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$NewsCard$2f$NewsCard$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DateBadge"], {
                        "aria-hidden": "true",
                        "data-testid": `${dataTestId}-date-badge`,
                        "data-day": dateBadge.day,
                        "data-month": dateBadge.month,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$NewsCard$2f$NewsCard$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DateBadgeDay"], {
                                children: dateBadge.day
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Molecule/NewsCard/NewsCard.tsx",
                                lineNumber: 81,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$NewsCard$2f$NewsCard$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DateBadgeMonth"], {
                                children: dateBadge.month
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Molecule/NewsCard/NewsCard.tsx",
                                lineNumber: 82,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/app/components/Molecule/NewsCard/NewsCard.tsx",
                        lineNumber: 75,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/components/Molecule/NewsCard/NewsCard.tsx",
                lineNumber: 66,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$NewsCard$2f$NewsCard$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContentWrapper"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$NewsCard$2f$NewsCard$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
                        "data-testid": `${dataTestId}-headline`,
                        children: href ? // #2176: einziger Link der Karte — gestreckt, die ganze Kachel ist klickbar
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$ArrowLink$2f$ArrowLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowLink"], {
                            href: href,
                            stretched: true,
                            dataTestId: `${dataTestId}-link`,
                            children: headline
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Molecule/NewsCard/NewsCard.tsx",
                            lineNumber: 92,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)) : headline
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Molecule/NewsCard/NewsCard.tsx",
                        lineNumber: 89,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    (date || subtitle || description) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$NewsCard$2f$NewsCard$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Meta"], {
                        "data-testid": `${dataTestId}-meta`,
                        children: [
                            (date || subtitle) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    date && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        "data-testid": `${dataTestId}-date`,
                                        children: date
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/components/Molecule/NewsCard/NewsCard.tsx",
                                        lineNumber: 104,
                                        columnNumber: 26
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    date && subtitle && ' · ',
                                    subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        "data-testid": `${dataTestId}-subtitle`,
                                        children: subtitle
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/components/Molecule/NewsCard/NewsCard.tsx",
                                        lineNumber: 106,
                                        columnNumber: 30
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/app/components/Molecule/NewsCard/NewsCard.tsx",
                                lineNumber: 103,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                "data-testid": `${dataTestId}-description`,
                                children: description
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Molecule/NewsCard/NewsCard.tsx",
                                lineNumber: 109,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/app/components/Molecule/NewsCard/NewsCard.tsx",
                        lineNumber: 101,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    tags.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$NewsCard$2f$NewsCard$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tags"], {
                        "data-testid": `${dataTestId}-tags`,
                        children: tags.map((tag, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$NewsCard$2f$NewsCard$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tag"], {
                                "data-testid": `${dataTestId}-tag-${index}`,
                                children: tag
                            }, `${tag}-${index}`, false, {
                                fileName: "[project]/apps/web/src/app/components/Molecule/NewsCard/NewsCard.tsx",
                                lineNumber: 116,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Molecule/NewsCard/NewsCard.tsx",
                        lineNumber: 114,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/components/Molecule/NewsCard/NewsCard.tsx",
                lineNumber: 88,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Molecule/NewsCard/NewsCard.tsx",
        lineNumber: 64,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = NewsCard;
;
var _c;
__turbopack_context__.k.register(_c, "NewsCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/NewsCard/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$NewsCard$2f$NewsCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/NewsCard/NewsCard.tsx [app-client] (ecmascript)");
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$NewsCard$2f$NewsCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NewsCard"];
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/PartnerCard/PartnerCard.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Body",
    ()=>Body,
    "CheckWrapper",
    ()=>CheckWrapper,
    "Description",
    ()=>Description,
    "LogoLink",
    ()=>LogoLink,
    "LogoWrapper",
    ()=>LogoWrapper,
    "Name",
    ()=>Name,
    "Role",
    ()=>Role,
    "Root",
    ()=>Root,
    "RowBody",
    ()=>RowBody,
    "RowLogo",
    ()=>RowLogo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/site.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$hex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/hex.ts [app-client] (ecmascript) <locals>");
'use client';
;
;
;
/** #1957: Logo-Spalte der liegenden Karte (Breite × Höhe der Logo-Box) */ const ROW_LOGO_WIDTH = '120px';
const ROW_LOGO_HEIGHT = '80px';
/** #1957: Kantenlänge der Sechseck-Marke im Rollen-Schlagwort */ const ROLE_MARK_SIZE = '8px';
const Root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].article.withConfig({
    displayName: "PartnerCard.styles__Root",
    componentId: "sc-8fae0cdf-0"
})`
  ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteCard"])(true)}
  /* #2176: mit Website ist die ganze Karte der Link (gestreckter Name-Link) */
  ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteLinkedCard"]}
  container-type: inline-size;
  display: flex;
  flex-direction: column;
  width: 100%;

  &:hover,
  &:focus-within {
    --chip-ring-width: 14px;
  }

  /* #1957: liegende Karte — Logo links in fester Spalte, Text rechts */
  ${({ $row, theme })=>$row && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
      display: grid;
      grid-template-columns: ${ROW_LOGO_WIDTH} minmax(0, 1fr);
      gap: ${theme.margin.default};
      align-items: center;
      padding: ${theme.padding.default};
    `}
`;
const RowLogo = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "PartnerCard.styles__RowLogo",
    componentId: "sc-8fae0cdf-1"
})`
  position: relative;
  box-sizing: border-box;
  width: ${ROW_LOGO_WIDTH};
  height: ${ROW_LOGO_HEIGHT};
  border-radius: 12px;
  background: ${({ theme })=>theme.palette.site.logoPlate};

  img {
    box-sizing: border-box;
    padding: ${({ theme })=>theme.padding.extrasmall};
    object-fit: contain;
    /* Logos mit weißem Grund gehen in der Unterlage auf (Dunkelmodus) */
    mix-blend-mode: multiply;
  }
`;
const RowBody = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "PartnerCard.styles__RowBody",
    componentId: "sc-8fae0cdf-2"
})`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({ theme })=>theme.margin.extrasmall};
  min-width: 0;
`;
const Role = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "PartnerCard.styles__Role",
    componentId: "sc-8fae0cdf-3"
})`
  ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteTag"]}
  gap: ${({ theme })=>theme.margin.extrasmall};

  &::before {
    content: '';
    flex: none;
    width: ${ROLE_MARK_SIZE};
    height: ${ROLE_MARK_SIZE};
    background: ${({ theme })=>theme.palette.site.green};
    ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$hex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["roundedHexagonMask"]}
  }
`;
const LogoWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "PartnerCard.styles__LogoWrapper",
    componentId: "sc-8fae0cdf-4"
})`
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  border-radius: 12px 12px 0 0;

  img {
    object-fit: contain;
  }
`;
const LogoLink = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].a.withConfig({
    displayName: "PartnerCard.styles__LogoLink",
    componentId: "sc-8fae0cdf-5"
})`
  position: absolute;
  inset: 0;
  display: block;
`;
const Body = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "PartnerCard.styles__Body",
    componentId: "sc-8fae0cdf-6"
})`
  ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteCardBody"]}
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
const CheckWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "PartnerCard.styles__CheckWrapper",
    componentId: "sc-8fae0cdf-7"
})`
  display: flex;
  align-items: flex-start;
  min-height: 39px;
`;
const Name = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].h3.withConfig({
    displayName: "PartnerCard.styles__Name",
    componentId: "sc-8fae0cdf-8"
})`
  ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteH3"]}
  font-size: 18px;
  /* gemessen: text-lg der Quelle mit 28 px Zeilenhöhe */
  line-height: 28px;
  hyphens: auto;
  -webkit-hyphens: auto;
  overflow-wrap: break-word;

  /* siteH3 springt ab lg per Media Query auf 20 px; Container-Regeln stehen
     danach und halten den Namen bei 18 px. */
  @container (min-width: 0px) {
    font-size: 18px;
  }

  @container (max-width: 229.98px) {
    font-size: 16px;
  }
`;
const Description = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].p.withConfig({
    displayName: "PartnerCard.styles__Description",
    componentId: "sc-8fae0cdf-9"
})`
  ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteMuted"]}
  margin: 0;
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/PartnerCard/PartnerCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PartnerCard",
    ()=>PartnerCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/image-component.js [app-client] (ecmascript) <export Image as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$IconChip$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/IconChip/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$IconChip$2f$IconChip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/IconChip/IconChip.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$ArrowLink$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/ArrowLink/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$ArrowLink$2f$ArrowLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/ArrowLink/ArrowLink.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$CardHalo$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/CardHalo/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$CardHalo$2f$CardHalo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/CardHalo/CardHalo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PartnerCard$2f$PartnerCard$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/PartnerCard/PartnerCard.styles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$url$2f$externalLink$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/url/externalLink.ts [app-client] (ecmascript)");
;
;
;
;
;
;
;
/** Partnerkarte im Stil von plastship.com (#1199). */ const PartnerCard = (props)=>{
    const { companyName, logoUrl, logoAlt, description, websiteUrl, variant = 'full', role, headingLevel = 3, className, dataTestId = 'partner-card' } = props;
    const nurLogo = variant === 'logo' && Boolean(logoUrl);
    const name = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PartnerCard$2f$PartnerCard$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Name"], {
        as: headingLevel === 2 ? 'h2' : 'h3',
        "data-testid": `${dataTestId}-name`,
        "data-heading-level": headingLevel,
        children: websiteUrl ? // #2176: einziger Link der Karte — gestreckt, die ganze Kachel ist klickbar
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$ArrowLink$2f$ArrowLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowLink"], {
            href: websiteUrl,
            target: "_blank",
            stretched: true,
            dataTestId: `${dataTestId}-link`,
            children: companyName
        }, void 0, false, {
            fileName: "[project]/apps/web/src/app/components/Molecule/PartnerCard/PartnerCard.tsx",
            lineNumber: 74,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0)) : companyName
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Molecule/PartnerCard/PartnerCard.tsx",
        lineNumber: 67,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
    const beschreibung = description ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PartnerCard$2f$PartnerCard$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"], {
        "data-testid": `${dataTestId}-description`,
        children: description
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Molecule/PartnerCard/PartnerCard.tsx",
        lineNumber: 83,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)) : null;
    if (variant === 'row') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PartnerCard$2f$PartnerCard$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
            className: className,
            "data-testid": dataTestId,
            "data-variant": "row",
            "data-linked": websiteUrl ? 'true' : 'false',
            $row: true,
            children: [
                websiteUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$CardHalo$2f$CardHalo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHalo"], {
                    dataTestId: `${dataTestId}-halo`
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Molecule/PartnerCard/PartnerCard.tsx",
                    lineNumber: 95,
                    columnNumber: 24
                }, ("TURBOPACK compile-time value", void 0)),
                logoUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PartnerCard$2f$PartnerCard$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RowLogo"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__["default"], {
                        src: logoUrl,
                        alt: logoAlt || `${companyName} logo`,
                        fill: true,
                        sizes: "120px",
                        "data-testid": `${dataTestId}-logo`
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Molecule/PartnerCard/PartnerCard.tsx",
                        lineNumber: 98,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Molecule/PartnerCard/PartnerCard.tsx",
                    lineNumber: 97,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PartnerCard$2f$PartnerCard$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RowBody"], {
                    children: [
                        role && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PartnerCard$2f$PartnerCard$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Role"], {
                            "data-testid": `${dataTestId}-role`,
                            children: role
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Molecule/PartnerCard/PartnerCard.tsx",
                            lineNumber: 108,
                            columnNumber: 20
                        }, ("TURBOPACK compile-time value", void 0)),
                        name,
                        beschreibung
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/app/components/Molecule/PartnerCard/PartnerCard.tsx",
                    lineNumber: 107,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/src/app/components/Molecule/PartnerCard/PartnerCard.tsx",
            lineNumber: 88,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    const logo = logoUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__["default"], {
        src: logoUrl,
        alt: logoAlt || `${companyName} logo`,
        fill: true,
        sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw",
        "data-testid": `${dataTestId}-logo`
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Molecule/PartnerCard/PartnerCard.tsx",
        lineNumber: 117,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)) : null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PartnerCard$2f$PartnerCard$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        className: className,
        "data-testid": dataTestId,
        "data-variant": nurLogo ? 'logo' : 'full',
        "data-linked": websiteUrl ? 'true' : 'false',
        children: [
            websiteUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$CardHalo$2f$CardHalo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHalo"], {
                dataTestId: `${dataTestId}-halo`
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Molecule/PartnerCard/PartnerCard.tsx",
                lineNumber: 134,
                columnNumber: 22
            }, ("TURBOPACK compile-time value", void 0)),
            logo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PartnerCard$2f$PartnerCard$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LogoWrapper"], {
                children: nurLogo && websiteUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PartnerCard$2f$PartnerCard$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LogoLink"], {
                    href: websiteUrl,
                    ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$url$2f$externalLink$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EXTERNAL_LINK_PROPS"],
                    "aria-label": companyName,
                    "data-testid": `${dataTestId}-link`,
                    children: logo
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Molecule/PartnerCard/PartnerCard.tsx",
                    lineNumber: 138,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0)) : logo
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Molecule/PartnerCard/PartnerCard.tsx",
                lineNumber: 136,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PartnerCard$2f$PartnerCard$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Body"], {
                children: !nurLogo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PartnerCard$2f$PartnerCard$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckWrapper"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$IconChip$2f$IconChip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconChip"], {
                                name: "check",
                                tone: "green",
                                shape: "hex",
                                dataTestId: `${dataTestId}-check`
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Molecule/PartnerCard/PartnerCard.tsx",
                                lineNumber: 156,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Molecule/PartnerCard/PartnerCard.tsx",
                            lineNumber: 155,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                name,
                                beschreibung
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/app/components/Molecule/PartnerCard/PartnerCard.tsx",
                            lineNumber: 158,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/app/components/Molecule/PartnerCard/PartnerCard.tsx",
                    lineNumber: 154,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Molecule/PartnerCard/PartnerCard.tsx",
                lineNumber: 152,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Molecule/PartnerCard/PartnerCard.tsx",
        lineNumber: 127,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = PartnerCard;
;
var _c;
__turbopack_context__.k.register(_c, "PartnerCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/PartnerCard/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PartnerCard$2f$PartnerCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/PartnerCard/PartnerCard.tsx [app-client] (ecmascript)");
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PartnerCard$2f$PartnerCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PartnerCard"];
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/PartnerGroup/PartnerGroup.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Caption",
    ()=>Caption,
    "Center",
    ()=>Center,
    "CenterCaption",
    ()=>CenterCaption,
    "Face",
    ()=>Face,
    "Line",
    ()=>Line,
    "Lines",
    ()=>Lines,
    "Logo",
    ()=>Logo,
    "LogoLink",
    ()=>LogoLink,
    "Member",
    ()=>Member,
    "Members",
    ()=>Members,
    "Name",
    ()=>Name,
    "Pulse",
    ()=>Pulse,
    "Ring",
    ()=>Ring,
    "Role",
    ()=>Role,
    "Root",
    ()=>Root,
    "Stage",
    ()=>Stage,
    "Tile",
    ()=>Tile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/site.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$brands$2f$partnerTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/brands/partnerTheme.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easingCss$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/motion/easingCss.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$entrance$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/motion/entrance.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexLogoWall$2f$HexLogoWall$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/HexLogoWall/HexLogoWall.styles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PartnerGroup$2f$partnerGroupTimeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/PartnerGroup/partnerGroupTimeline.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
/**
 * #2199: Gruppenbild. Bewegung nur über `data-state` (lib/motion/entrance).
 * Waben wie die Wabenwand (Ring, Fläche, Logo; dunkel: aufgehelltes Navy,
 * Logo hell). Breit ab 640 px, darunter die kompakte Bühne (`data-variant`).
 */ const SM = '640px';
const FEIN_ZEIGER = '@media (hover: hover) and (pointer: fine)';
const ms = (wert)=>`${wert}ms`;
const center = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$entrance$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findPhase"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PartnerGroup$2f$partnerGroupTimeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PARTNER_GROUP_PHASES"], 'center');
const lines = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$entrance$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findPhase"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PartnerGroup$2f$partnerGroupTimeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PARTNER_GROUP_PHASES"], 'lines');
const members = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$entrance$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findPhase"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PartnerGroup$2f$partnerGroupTimeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PARTNER_GROUP_PHASES"], 'members');
const aufspringen = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframes"]`
  from { opacity: 0; transform: scale(0.7); }
  to { opacity: 1; transform: scale(1); }
`;
const zeichnen = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframes"]`
  from { stroke-dashoffset: 1; }
  to { stroke-dashoffset: 0; }
`;
const LICHT = 0.12;
/** Lichtpunkt einer Linie: läuft im eigenen Anteil (1/count) des Umlaufs, sonst geparkt */ const puls = (count)=>{
    const ende = Math.round(100 / Math.max(1, count) * 100) / 100;
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframes"]`
    0% { stroke-dashoffset: ${1 + LICHT}; opacity: 0; }
    ${ende * 0.1}% { opacity: 1; }
    ${ende * 0.9}% { opacity: 1; }
    ${ende}% { stroke-dashoffset: ${-LICHT}; opacity: 0; }
    100% { stroke-dashoffset: ${-LICHT}; opacity: 0; }
  `;
};
const hellWaben = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
  --wall-ring: ${({ theme })=>theme.palette.site.border};
  --wall-face: ${({ theme })=>theme.palette.site.logoPlate};
`;
const dunkelWaben = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
  --wall-ring: rgb(255 255 255 / 0.22);
  --wall-face: color-mix(in srgb, ${({ theme })=>theme.palette.site.navy} 82%, #ffffff);
`;
const Root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].section.withConfig({
    displayName: "PartnerGroup.styles__Root",
    componentId: "sc-ad331ac6-0"
})`
  ${({ theme })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$brands$2f$partnerTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDarkTheme"])(theme) ? dunkelWaben : hellWaben}
  --wall-ring-hover: ${({ theme })=>theme.palette.site.green};
  --wall-face-hover: ${({ theme })=>theme.palette.site.logoPlate};
  --group-line: ${({ theme })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$brands$2f$partnerTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDarkTheme"])(theme) ? theme.palette.site.muted : theme.palette.site.border};
  --group-line-active: ${({ theme })=>theme.palette.site.green};
  --group-heading: ${({ theme })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteVar"])('heading', theme.palette.site.heading)};
  --group-text: ${({ theme })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteVar"])('text', theme.palette.site.text)};
  --group-muted: ${({ theme })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteVar"])('muted', theme.palette.site.muted)};

  display: flex;
  flex-direction: column;
  gap: ${({ theme })=>theme.margin.large};
  width: 100%;

  &[data-dark='true'] {
    ${dunkelWaben}
    --group-line: rgb(255 255 255 / 0.35);
  }
`;
const Stage = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "PartnerGroup.styles__Stage",
    componentId: "sc-ad331ac6-1"
})`
  position: relative;
  width: 100%;
  max-width: 56rem;
  margin: 0 auto;
  aspect-ratio: ${({ $compact })=>`${$compact.width} / ${$compact.height}`};

  @media (min-width: ${SM}) {
    aspect-ratio: ${({ $wide })=>`${$wide.width} / ${$wide.height}`};
  }
`;
const Lines = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].svg.withConfig({
    displayName: "PartnerGroup.styles__Lines",
    componentId: "sc-ad331ac6-2"
})`
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
  overflow: visible;

  /* Strichstärke in viewBox-Einheiten (Breite 100): die Bühne skaliert
     gleichmäßig, darum ohne non-scaling-stroke — der bräche pathLength und
     damit das Zeichnen. Breit ≈ 900 px → 0,22 ≈ 2 px, kompakt ≈ 360 px → 0,55. */
  --group-stroke: 0.55;

  &[data-variant='wide'] {
    display: none;
    --group-stroke: 0.22;
  }
  @media (min-width: ${SM}) {
    &[data-variant='wide'] {
      display: block;
    }
    &[data-variant='compact'] {
      display: none;
    }
  }
`;
const linienRegeln = (i)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
  ${Root}[data-state='running'] & {
    animation: ${zeichnen} ${ms((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$entrance$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["phaseSlot"])(lines, i).duration)} ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easingCss$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_REVEAL_CSS"]} ${ms((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$entrance$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["phaseSlot"])(lines, i).delay)}
      both;
  }
`;
const Line = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].path.withConfig({
    displayName: "PartnerGroup.styles__Line",
    componentId: "sc-ad331ac6-3"
})`
  fill: none;
  stroke: var(--group-line);
  stroke-width: var(--group-stroke);
  stroke-linecap: round;
  stroke-dasharray: 1 1;
  stroke-dashoffset: 0;
  transition:
    stroke 200ms ease,
    stroke-width 200ms ease;

  ${Root}[data-state='idle'] & {
    stroke-dashoffset: 1;
  }
  ${({ $index })=>linienRegeln($index)}

  &[data-active='true'] {
    stroke: var(--group-line-active);
    stroke-width: calc(var(--group-stroke) * 1.5);
  }
`;
const Pulse = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].path.withConfig({
    displayName: "PartnerGroup.styles__Pulse",
    componentId: "sc-ad331ac6-4"
})`
  fill: none;
  stroke: var(--group-line-active);
  stroke-width: calc(var(--group-stroke) * 2);
  stroke-linecap: round;
  stroke-dasharray: ${LICHT} ${2 - LICHT};
  stroke-dashoffset: ${1 + LICHT};
  opacity: 0;

  ${Root}[data-state='ready'] & {
    animation: ${({ $count })=>puls($count)} ${({ $count })=>ms(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PartnerGroup$2f$partnerGroupTimeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PARTNER_GROUP_PULSE_MS"] * $count)} linear infinite;
    animation-delay: ${({ $index })=>ms($index * __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PartnerGroup$2f$partnerGroupTimeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PARTNER_GROUP_PULSE_MS"])};
  }
  ${Root}[data-state='ready'][data-visible='false'] & {
    animation-play-state: paused;
  }
`;
const Center = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "PartnerGroup.styles__Center",
    componentId: "sc-ad331ac6-5"
})`
  position: absolute;
  top: 0;
  left: 50%;
  width: ${({ $compact })=>$compact.center.size}%;
  transform: translateX(-50%);

  @media (min-width: ${SM}) {
    width: ${({ $wide })=>$wide.center.size}%;
  }

  ${Root}[data-state='idle'] & {
    opacity: 0;
  }
  ${Root}[data-state='running'] & {
    animation: ${aufspringen} ${ms(center.duration)} ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easingCss$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_POP_CSS"]} ${ms(center.start)} both;
  }
`;
/** Platz rechts der großen Wabe in Prozent ihrer Breite: (100 − Größe) / 2 / Größe */ const platzRechts = (stage)=>Math.floor((100 - stage.center.size) / 2 / stage.center.size * 100) - 8;
const CenterCaption = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "PartnerGroup.styles__CenterCaption",
    componentId: "sc-ad331ac6-6"
})`
  position: absolute;
  top: 50%;
  left: calc(100% + ${({ theme })=>theme.margin.extrasmall});
  width: max-content;
  max-width: ${({ $compact })=>platzRechts($compact)}%;

  @media (min-width: ${SM}) {
    left: calc(100% + ${({ theme })=>theme.margin.small});
    max-width: min(16rem, ${({ $wide })=>platzRechts($wide)}%);
  }

  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
  text-align: left;
`;
const Members = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ul.withConfig({
    displayName: "PartnerGroup.styles__Members",
    componentId: "sc-ad331ac6-7"
})`
  display: grid;
  grid-template-columns: repeat(${({ $count })=>Math.max(1, $count)}, minmax(0, 1fr));
  column-gap: ${({ theme })=>theme.margin.small};
  width: 100%;
  max-width: 56rem;
  /* die Linien enden an der Spitze der Mitglieder-Waben */
  margin: calc(-1 * ${({ theme })=>theme.margin.large}) auto 0;
  padding: 0;
  list-style: none;
`;
const mitgliedRegeln = (i)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
  ${Root}[data-state='running'] & {
    animation: ${aufspringen} ${ms((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$entrance$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["phaseSlot"])(members, i).duration)} ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easingCss$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_POP_CSS"]}
      ${ms((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$entrance$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["phaseSlot"])(members, i).delay)} both;
  }
`;
const Member = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].li.withConfig({
    displayName: "PartnerGroup.styles__Member",
    componentId: "sc-ad331ac6-8"
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.125rem;
  min-width: 0;
  text-align: center;

  ${Root}[data-state='idle'] & {
    opacity: 0;
  }
  ${({ $index })=>mitgliedRegeln($index)}

  > div:first-child {
    width: min(9rem, 80%);
    margin-bottom: ${({ theme })=>theme.margin.extrasmall};
  }
`;
const Tile = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "PartnerGroup.styles__Tile",
    componentId: "sc-ad331ac6-9"
})`
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  transition: transform 200ms ease;

  ${FEIN_ZEIGER} {
    li:hover > &,
    li:focus-within > & {
      transform: translateY(-4px);
    }
  }
  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;
const Ring = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexLogoWall$2f$HexLogoWall$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ring"]).withConfig({
    displayName: "PartnerGroup.styles__Ring",
    componentId: "sc-ad331ac6-10"
})``;
const Face = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexLogoWall$2f$HexLogoWall$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Face"]).withConfig({
    displayName: "PartnerGroup.styles__Face",
    componentId: "sc-ad331ac6-11"
})``;
const Logo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexLogoWall$2f$HexLogoWall$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logo"]).withConfig({
    displayName: "PartnerGroup.styles__Logo",
    componentId: "sc-ad331ac6-12"
})``;
const LogoLink = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexLogoWall$2f$HexLogoWall$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LogoLink"]).withConfig({
    displayName: "PartnerGroup.styles__LogoLink",
    componentId: "sc-ad331ac6-13"
})``;
const Role = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "PartnerGroup.styles__Role",
    componentId: "sc-ad331ac6-14"
})`
  font-family: ${({ theme })=>theme.font.secondaryFamily};
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: ${({ theme })=>theme.palette.site.greenText};

  ${Root}[data-dark='true'] & {
    color: ${({ theme })=>theme.palette.site.green};
  }
`;
const Name = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "PartnerGroup.styles__Name",
    componentId: "sc-ad331ac6-15"
})`
  font-family: ${({ theme })=>theme.font.primaryFamily};
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.3;
  color: var(--group-heading);
  overflow-wrap: break-word;

  @media (max-width: ${SM}) {
    font-size: 0.875rem;
  }
`;
const Caption = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "PartnerGroup.styles__Caption",
    componentId: "sc-ad331ac6-16"
})`
  font-family: ${({ theme })=>theme.font.secondaryFamily};
  font-size: 0.875rem;
  line-height: 1.4;
  color: var(--group-muted);
  overflow-wrap: break-word;
  hyphens: auto;

  @media (max-width: ${SM}) {
    font-size: 0.75rem;
  }
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/PartnerGroup/PartnerGroup.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PartnerGroup",
    ()=>PartnerGroup,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/image-component.js [app-client] (ecmascript) <export Image as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$SiteSectionHeader$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/SiteSectionHeader/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$SiteSectionHeader$2f$SiteSectionHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/SiteSectionHeader/SiteSectionHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useEntranceAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/useEntranceAnimation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$url$2f$externalLink$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/url/externalLink.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PartnerGroup$2f$partnerGroupGeometry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/PartnerGroup/partnerGroupGeometry.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PartnerGroup$2f$partnerGroupTimeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/PartnerGroup/partnerGroupTimeline.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PartnerGroup$2f$PartnerGroup$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/PartnerGroup/PartnerGroup.styles.ts [app-client] (ecmascript)");
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
const Wabe = ({ item, sizes, testId })=>{
    const logo = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PartnerGroup$2f$PartnerGroup$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logo"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__["default"], {
            src: item.logoUrl,
            alt: `${item.companyName} logo`,
            fill: true,
            sizes: sizes
        }, void 0, false, {
            fileName: "[project]/apps/web/src/app/components/Molecule/PartnerGroup/PartnerGroup.tsx",
            lineNumber: 58,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Molecule/PartnerGroup/PartnerGroup.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PartnerGroup$2f$PartnerGroup$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tile"], {
        "data-testid": `${testId}-tile`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PartnerGroup$2f$PartnerGroup$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ring"], {
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Molecule/PartnerGroup/PartnerGroup.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PartnerGroup$2f$PartnerGroup$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Face"], {
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Molecule/PartnerGroup/PartnerGroup.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            item.websiteUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PartnerGroup$2f$PartnerGroup$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LogoLink"], {
                href: item.websiteUrl,
                ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$url$2f$externalLink$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EXTERNAL_LINK_PROPS"],
                "aria-label": item.companyName,
                "data-testid": `${testId}-link`,
                children: logo
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Molecule/PartnerGroup/PartnerGroup.tsx",
                lineNumber: 66,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)) : logo
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Molecule/PartnerGroup/PartnerGroup.tsx",
        lineNumber: 62,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Wabe;
const Beschriftung = ({ item })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            item.role && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PartnerGroup$2f$PartnerGroup$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Role"], {
                children: item.role
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Molecule/PartnerGroup/PartnerGroup.tsx",
                lineNumber: 78,
                columnNumber: 19
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PartnerGroup$2f$PartnerGroup$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Name"], {
                children: item.companyName
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Molecule/PartnerGroup/PartnerGroup.tsx",
                lineNumber: 79,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            item.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PartnerGroup$2f$PartnerGroup$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Caption"], {
                children: item.description
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Molecule/PartnerGroup/PartnerGroup.tsx",
                lineNumber: 80,
                columnNumber: 26
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Molecule/PartnerGroup/PartnerGroup.tsx",
        lineNumber: 77,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c1 = Beschriftung;
const PartnerGroup = ({ items, headline, description, surface, onFirstView, onFirstHover, className, dataTestId = 'partner-group' })=>{
    _s();
    const [kopf, ...mitglieder] = items;
    const weit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PartnerGroup.useMemo[weit]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PartnerGroup$2f$partnerGroupGeometry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["partnerGroupStage"])(mitglieder.length, false)
    }["PartnerGroup.useMemo[weit]"], [
        mitglieder.length
    ]);
    const eng = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PartnerGroup.useMemo[eng]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PartnerGroup$2f$partnerGroupGeometry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["partnerGroupStage"])(mitglieder.length, true)
    }["PartnerGroup.useMemo[eng]"], [
        mitglieder.length
    ]);
    const rootRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { state, visible } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useEntranceAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEntranceAnimation"])(rootRef, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PartnerGroup$2f$partnerGroupTimeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PARTNER_GROUP_ENTRANCE_MS"], 0.3);
    const [aktiv, setAktiv] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const gesehen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PartnerGroup.useEffect": ()=>{
            if (!visible || gesehen.current) return;
            gesehen.current = true;
            onFirstView?.();
        }
    }["PartnerGroup.useEffect"], [
        visible,
        onFirstView
    ]);
    const gehovert = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const zeigen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PartnerGroup.useCallback[zeigen]": (index)=>({
                "PartnerGroup.useCallback[zeigen]": (event)=>{
                    if (event.pointerType !== 'mouse') return;
                    setAktiv(index);
                    if (gehovert.current) return;
                    gehovert.current = true;
                    onFirstHover?.();
                }
            })["PartnerGroup.useCallback[zeigen]"]
    }["PartnerGroup.useCallback[zeigen]"], [
        onFirstHover
    ]);
    const weg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PartnerGroup.useCallback[weg]": ()=>setAktiv(null)
    }["PartnerGroup.useCallback[weg]"], []);
    if (!kopf) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Molecule/PartnerGroup/PartnerGroup.tsx",
        lineNumber: 135,
        columnNumber: 21
    }, ("TURBOPACK compile-time value", void 0));
    const linien = (stage, variante)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PartnerGroup$2f$PartnerGroup$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Lines"], {
            viewBox: `0 0 ${stage.width} ${stage.height}`,
            preserveAspectRatio: "none",
            "aria-hidden": "true",
            focusable: "false",
            "data-variant": variante,
            children: stage.lines.map((d, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PartnerGroup$2f$PartnerGroup$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
                            d: d,
                            pathLength: 1,
                            "data-line": i,
                            "data-active": aktiv === i ? 'true' : 'false',
                            $index: i
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Molecule/PartnerGroup/PartnerGroup.tsx",
                            lineNumber: 147,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PartnerGroup$2f$PartnerGroup$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Pulse"], {
                            d: d,
                            pathLength: 1,
                            "data-part": "pulse",
                            $index: i,
                            $count: stage.lines.length
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Molecule/PartnerGroup/PartnerGroup.tsx",
                            lineNumber: 148,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, i, true, {
                    fileName: "[project]/apps/web/src/app/components/Molecule/PartnerGroup/PartnerGroup.tsx",
                    lineNumber: 146,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)))
        }, void 0, false, {
            fileName: "[project]/apps/web/src/app/components/Molecule/PartnerGroup/PartnerGroup.tsx",
            lineNumber: 138,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PartnerGroup$2f$PartnerGroup$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        ref: rootRef,
        className: className,
        "data-testid": dataTestId,
        "data-state": state,
        "data-visible": visible ? 'true' : 'false',
        "data-dark": surface === 'dark' ? 'true' : 'false',
        "data-active": aktiv ?? '',
        "data-count": mitglieder.length,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$SiteSectionHeader$2f$SiteSectionHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiteSectionHeader"], {
                headline: headline,
                description: description,
                align: "center",
                dataTestId: `${dataTestId}-header`
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Molecule/PartnerGroup/PartnerGroup.tsx",
                lineNumber: 165,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PartnerGroup$2f$PartnerGroup$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stage"], {
                $wide: weit,
                $compact: eng,
                children: [
                    linien(weit, 'wide'),
                    linien(eng, 'compact'),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PartnerGroup$2f$PartnerGroup$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Center"], {
                        "data-testid": `${dataTestId}-center`,
                        $wide: weit,
                        $compact: eng,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Wabe, {
                                item: kopf,
                                sizes: "(max-width: 640px) 40vw, 220px",
                                testId: `${dataTestId}-center`
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Molecule/PartnerGroup/PartnerGroup.tsx",
                                lineNumber: 170,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PartnerGroup$2f$PartnerGroup$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CenterCaption"], {
                                $wide: weit,
                                $compact: eng,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Beschriftung, {
                                    item: kopf
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/components/Molecule/PartnerGroup/PartnerGroup.tsx",
                                    lineNumber: 172,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Molecule/PartnerGroup/PartnerGroup.tsx",
                                lineNumber: 171,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/app/components/Molecule/PartnerGroup/PartnerGroup.tsx",
                        lineNumber: 169,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/components/Molecule/PartnerGroup/PartnerGroup.tsx",
                lineNumber: 166,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PartnerGroup$2f$PartnerGroup$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Members"], {
                $count: mitglieder.length,
                children: mitglieder.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PartnerGroup$2f$PartnerGroup$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Member"], {
                        "data-testid": `${dataTestId}-member-${i}`,
                        "data-active": aktiv === i ? 'true' : 'false',
                        $index: i,
                        onPointerEnter: zeigen(i),
                        onPointerLeave: weg,
                        onFocus: ()=>setAktiv(i),
                        onBlur: weg,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Wabe, {
                                item: item,
                                sizes: "(max-width: 640px) 28vw, 150px",
                                testId: `${dataTestId}-member-${i}`
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Molecule/PartnerGroup/PartnerGroup.tsx",
                                lineNumber: 188,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Beschriftung, {
                                item: item
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Molecule/PartnerGroup/PartnerGroup.tsx",
                                lineNumber: 189,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, i, true, {
                        fileName: "[project]/apps/web/src/app/components/Molecule/PartnerGroup/PartnerGroup.tsx",
                        lineNumber: 178,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Molecule/PartnerGroup/PartnerGroup.tsx",
                lineNumber: 176,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Molecule/PartnerGroup/PartnerGroup.tsx",
        lineNumber: 155,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(PartnerGroup, "ccDR8EBqiByMIfnXk9V99vlc3io=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useEntranceAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEntranceAnimation"]
    ];
});
_c2 = PartnerGroup;
const __TURBOPACK__default__export__ = PartnerGroup;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "Wabe");
__turbopack_context__.k.register(_c1, "Beschriftung");
__turbopack_context__.k.register(_c2, "PartnerGroup");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/PartnerGroup/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PartnerGroup$2f$PartnerGroup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/PartnerGroup/PartnerGroup.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PartnerGroup$2f$partnerGroupGeometry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/PartnerGroup/partnerGroupGeometry.ts [app-client] (ecmascript)");
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PartnerGroup$2f$PartnerGroup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PartnerGroup"];
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/PartnerGroup/partnerGroupGeometry.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * #2199: Gruppenbild (partnerLogos, Darstellung `group`) — Bühne über der
 * Reihe der Mitglieder, rein, ohne DOM. Der erste Partner (Gesellschafter)
 * steht oben mittig in der großen Wabe; die Mitglieder stehen darunter in
 * einem Raster aus `count` gleich breiten Spalten. Jede Linie läuft als
 * weiche S-Kurve von der Unterkante der großen Wabe zur Mitte ihrer Spalte
 * am unteren Rand der Bühne — dort beginnt die Wabe des Mitglieds.
 *
 * Koordinaten: Breite 100 (= Breite des Rasters), Höhe aus dem Abstand.
 * Die Bühne trägt das Seitenverhältnis der viewBox, die große Wabe liegt
 * in Prozent darüber; so skalieren Linien und Waben deckungsgleich.
 */ __turbopack_context__.s([
    "partnerGroupColumnCenter",
    ()=>partnerGroupColumnCenter,
    "partnerGroupStage",
    ()=>partnerGroupStage
]);
const r2 = (n)=>Math.round(n * 100) / 100;
const partnerGroupColumnCenter = (i, count)=>r2((i + 0.5) / Math.max(1, count) * 100);
function partnerGroupStage(count, compact = false) {
    const n = Math.max(1, count);
    const size = compact ? 36 : 22;
    const gap = compact ? 14 : 12;
    const centerBottom = size;
    const height = r2(centerBottom + gap);
    const ends = Array.from({
        length: n
    }, (_, i)=>partnerGroupColumnCenter(i, n));
    const mid = r2((centerBottom + height) / 2);
    const lines = ends.map((x)=>`M 50 ${r2(centerBottom)} C 50 ${mid} ${x} ${mid} ${x} ${height}`);
    return {
        width: 100,
        height,
        center: {
            cx: 50,
            top: 0,
            size
        },
        ends,
        lines
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/PartnerGroup/partnerGroupTimeline.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PARTNER_GROUP_ENTRANCE_MS",
    ()=>PARTNER_GROUP_ENTRANCE_MS,
    "PARTNER_GROUP_PHASES",
    ()=>PARTNER_GROUP_PHASES,
    "PARTNER_GROUP_PULSE_MS",
    ()=>PARTNER_GROUP_PULSE_MS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$entrance$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/motion/entrance.ts [app-client] (ecmascript)");
;
const PARTNER_GROUP_PHASES = [
    {
        id: 'center',
        start: 0,
        duration: 500
    },
    {
        id: 'lines',
        start: 350,
        duration: 800,
        count: 4,
        stagger: 180
    },
    {
        id: 'members',
        start: 900,
        duration: 450,
        count: 4,
        stagger: 180
    }
];
(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$entrance$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertPhases"])(PARTNER_GROUP_PHASES);
const PARTNER_GROUP_ENTRANCE_MS = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$entrance$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["entranceDuration"])(PARTNER_GROUP_PHASES);
_c = PARTNER_GROUP_ENTRANCE_MS;
const PARTNER_GROUP_PULSE_MS = 2400;
var _c;
__turbopack_context__.k.register(_c, "PARTNER_GROUP_ENTRANCE_MS");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/PublicNav/PublicNav.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Flyout",
    ()=>Flyout,
    "FlyoutItem",
    ()=>FlyoutItem,
    "FlyoutLink",
    ()=>FlyoutLink,
    "FlyoutList",
    ()=>FlyoutList,
    "Item",
    ()=>Item,
    "ItemLink",
    ()=>ItemLink,
    "List",
    ()=>List,
    "Root",
    ()=>Root,
    "Row",
    ()=>Row,
    "Toggle",
    ()=>Toggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$NavLink$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/NavLink/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$NavLink$2f$NavLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/NavLink/NavLink.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/site.ts [app-client] (ecmascript)");
'use client';
;
;
;
/*
 * #1211: wie das Hauptmenü auf plastship.com, gemessen an den berechneten
 * Stilen der Quelle (Tailwind-Vorbild jeweils dabei, Farben in
 * `theme.palette.site`: text = grey-500, tint = blue-50, border = blue-100).
 *
 * `bar`: waagerechte Liste im Header, Kinder als Flyout unter dem Eintrag.
 * `stacked`: mittige Liste im mobilen Gästemenü, Kinder klappen darunter auf
 * einem Band in blue-50 über die volle Breite auf.
 */ /** Die globalen Regeln a:hover und [data-theme='dark'] a wiegen mehr als eine Klasse */ const linkfarbe = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
  &&,
  &&:hover {
    color: ${({ theme })=>theme.palette.site.text};
  }
`;
const Root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].nav.withConfig({
    displayName: "PublicNav.styles__Root",
    componentId: "sc-e3587ca3-0"
})`
  /* globals.css gibt jedem nav den Seitengrund — über dem Hero muss er durchsichtig sein */
  background: transparent;
  ${({ $variant })=>$variant === 'bar' && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
      display: flex;
      align-items: center;
    `}
`;
const listReset = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
  margin: 0;
  padding: 0;
  list-style: none;
`;
const List = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ul.withConfig({
    displayName: "PublicNav.styles__List",
    componentId: "sc-e3587ca3-1"
})`
  ${listReset}
  ${({ $variant })=>$variant === 'bar' ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
          display: flex;
          align-items: center;
          gap: 8px;

          ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["guestNavCompact"]} {
            gap: 2px;
          }
        ` : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
          display: flex;
          flex-direction: column;
        `}
`;
const Item = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].li.withConfig({
    displayName: "PublicNav.styles__Item",
    componentId: "sc-e3587ca3-2"
})`
  position: relative;
  ${({ $variant, theme })=>$variant === 'stacked' && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
      margin: 0 24px;
      padding: 8px 0;

      /* nicht "& + &": das setzt styled-components auf die Komponentenklasse um und träfe auch die andere Variante */
      &:not(:first-child) {
        border-top: 1px solid ${theme.palette.site.tint};
      }
    `}
`;
const Row = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "PublicNav.styles__Row",
    componentId: "sc-e3587ca3-3"
})`
  display: flex;
  gap: 1px;
  ${({ $variant })=>$variant === 'stacked' && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
      position: relative;
      display: block;
    `}
`;
const zeile = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
  font-family: ${({ theme })=>theme.font.secondaryFamily};
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  text-decoration: none;
  transition: background-color 150ms ease;
`;
const ItemLink = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$NavLink$2f$NavLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavLink"]).withConfig({
    displayName: "PublicNav.styles__ItemLink",
    componentId: "sc-e3587ca3-4"
})`
  ${zeile}
  ${linkfarbe}
  /* #1497: oberste Ebene im Header folgt --header-fg (helle Schrift über blauer
     Folie); überfahren/offen liegt sie auf dem hellen Tint und nimmt die Themefarbe */
  ${({ $variant, theme })=>$variant === 'bar' && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
      && {
        color: var(--header-fg, ${theme.palette.site.text});
      }
      ${Item}:hover &&,
      ${Item}[data-open='true'] && {
        color: ${theme.palette.site.text};
      }
    `}
  display: flex;
  align-items: center;
  ${({ $variant, $withToggle, theme })=>$variant === 'bar' ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
          padding: ${$withToggle ? '12px 8px 12px 12px' : '12px'};
          border-radius: ${$withToggle ? '12px 0 0 12px' : '12px'};
          white-space: nowrap;

          ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["guestNavCompact"]} {
            padding: ${$withToggle ? '12px 4px 12px 8px' : '12px 8px'};
          }

          ${Item}:hover &,
          ${Item}[data-open='true'] & {
            background: ${theme.palette.site.tint};
          }
        ` : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
          justify-content: center;
          padding: 16px 48px;
          border-radius: 12px;
          text-align: center;

          &:hover,
          &:focus-visible {
            background: ${theme.palette.site.border};
          }
        `}
`;
const Toggle = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "PublicNav.styles__Toggle",
    componentId: "sc-e3587ca3-5"
})`
  display: grid;
  place-items: center;
  border: 0;
  background: transparent;
  color: ${({ theme, $variant })=>$variant === 'bar' ? `var(--header-fg, ${theme.palette.site.heading})` : theme.palette.site.heading};
  cursor: pointer;
  transition: background-color 150ms ease;

  svg {
    display: block;
    transition: transform 150ms ease;
    transform: rotate(${({ $open })=>$open ? '-180deg' : '0deg'});
  }

  &:focus-visible {
    outline: 2px solid ${({ theme })=>theme.palette.site.blue};
    outline-offset: -2px;
  }

  ${({ $variant, theme })=>$variant === 'bar' ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
          /* p-3 pl-2 rounded-r-xl, Pfeil 12 × 7 */
          padding: 12px 12px 12px 8px;
          border-radius: 0 12px 12px 0;

          ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["guestNavCompact"]} {
            padding: 12px 8px 12px 4px;
          }

          svg {
            width: 14px;
            height: 14px;
          }

          ${Item}:hover &,
          ${Item}[data-open='true'] & {
            background: ${theme.palette.site.tint};
            color: ${theme.palette.site.heading};
          }
        ` : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
          /* absolute right-0 top-0 p-4 rounded-xl, Pfeil 16 × 16 */
          position: absolute;
          top: 0;
          right: 0;
          padding: 16px;
          border-radius: 12px;

          svg {
            width: 18px;
            height: 18px;
          }

          &:hover,
          &:focus-visible,
          &[aria-expanded='true'] {
            background: ${theme.palette.site.tint};
          }
        `}
`;
const Flyout = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "PublicNav.styles__Flyout",
    componentId: "sc-e3587ca3-6"
})`
  ${({ $variant, $open })=>$variant === 'bar' ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
          position: absolute;
          top: 100%;
          left: 0;
          z-index: 210;
          min-width: 100%;
          width: max-content;
          max-width: 300px;
          padding-top: 8px;
          visibility: ${$open ? 'visible' : 'hidden'};
          opacity: ${$open ? 1 : 0};
          transform: translateY(${$open ? '0' : '-8px'});
          transition:
            opacity 150ms ease,
            transform 150ms ease,
            visibility 150ms;
        ` : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
          display: ${$open ? 'block' : 'none'};
          padding-top: 8px;
        `}
`;
const FlyoutList = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ul.withConfig({
    displayName: "PublicNav.styles__FlyoutList",
    componentId: "sc-e3587ca3-7"
})`
  ${listReset}
  ${({ $variant, theme })=>$variant === 'bar' ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
          padding: 16px;
          border: 1px solid ${theme.palette.site.tint};
          border-radius: 12px;
          background: ${theme.palette.site.card};
          box-shadow: ${theme.palette.site.shadow};
        ` : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin: 0 -24px;
          padding: 16px 24px;
          background: ${theme.palette.site.tint};
        `}
`;
const FlyoutItem = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].li.withConfig({
    displayName: "PublicNav.styles__FlyoutItem",
    componentId: "sc-e3587ca3-8"
})`
  ${({ $variant, theme })=>$variant === 'bar' && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
      padding: 8px 0;

      &:not(:first-child) {
        border-top: 1px solid ${theme.palette.site.tint};
      }
    `}
`;
const FlyoutLink = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$NavLink$2f$NavLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavLink"]).withConfig({
    displayName: "PublicNav.styles__FlyoutLink",
    componentId: "sc-e3587ca3-9"
})`
  ${zeile}
  ${linkfarbe}
  display: flex;
  border-radius: 12px;
  ${({ $variant })=>$variant === 'bar' ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
          padding: 8px 16px;
          line-height: 24px;
        ` : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
          justify-content: center;
          padding: 16px 0;
          text-align: center;
        `}

  &:hover,
  &:focus-visible {
    background: ${({ theme })=>theme.palette.site.border};
  }
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/PublicNav/PublicNav.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CmsPublicNav",
    ()=>CmsPublicNav,
    "PublicNav",
    ()=>PublicNav,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconChevronDown$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconChevronDown/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useCmsNavigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/useCmsNavigation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$UserPreferencesContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/context/UserPreferencesContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/ClientTranslation.tsx [app-client] (ecmascript) <export useClientSafeTranslation as useClientTranslation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$headerNavigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/config/headerNavigation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$localize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/cmsBlocks/localize.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$CmsContentLocaleContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/context/CmsContentLocaleContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PublicNav$2f$PublicNav$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/PublicNav/PublicNav.styles.ts [app-client] (ecmascript)");
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
const PublicNav = ({ items, locale, variant = 'bar', ariaLabel, toggleLabel = 'Unterseiten', source, dataTestId = 'public-nav', className })=>{
    _s();
    const [offen, setOffen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const bar = variant === 'bar';
    // Kopfleiste: höchstens ein Flyout; gestapelt: jeder Eintrag für sich
    const schalte = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PublicNav.useCallback[schalte]": (i)=>setOffen({
                "PublicNav.useCallback[schalte]": (prev)=>prev.includes(i) ? prev.filter({
                        "PublicNav.useCallback[schalte]": (x)=>x !== i
                    }["PublicNav.useCallback[schalte]"]) : bar ? [
                        i
                    ] : [
                        ...prev,
                        i
                    ]
            }["PublicNav.useCallback[schalte]"])
    }["PublicNav.useCallback[schalte]"], [
        bar
    ]);
    const schliesse = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PublicNav.useCallback[schliesse]": (i)=>setOffen({
                "PublicNav.useCallback[schliesse]": (prev)=>prev.filter({
                        "PublicNav.useCallback[schliesse]": (x)=>x !== i
                    }["PublicNav.useCallback[schliesse]"])
            }["PublicNav.useCallback[schliesse]"])
    }["PublicNav.useCallback[schliesse]"], []);
    if (items.length === 0) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PublicNav$2f$PublicNav$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        className: className,
        $variant: variant,
        "aria-label": ariaLabel,
        "data-testid": dataTestId,
        "data-variant": variant,
        "data-count": items.length,
        "data-source": source,
        onKeyDown: (e)=>{
            if (e.key === 'Escape') setOffen([]);
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PublicNav$2f$PublicNav$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["List"], {
            $variant: variant,
            children: items.map((item, i)=>{
                const kinder = item.children ?? [];
                const hatKinder = kinder.length > 0;
                const istOffen = offen.includes(i);
                const label = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$localize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cmsText"])(item.label, locale);
                const flyoutId = `${dataTestId}-flyout-${i}`;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PublicNav$2f$PublicNav$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"], {
                    $variant: variant,
                    $open: istOffen,
                    "data-testid": `${dataTestId}-item-${i}`,
                    "data-href": item.href,
                    "data-children": kinder.length,
                    "data-open": hatKinder ? istOffen ? 'true' : 'false' : undefined,
                    // Nur die Maus öffnet beim Überfahren — ein Tipp auf dem Tablet
                    // löst pointerenter und click aus und schlösse sofort wieder.
                    onPointerEnter: bar && hatKinder ? (e)=>{
                        if (e.pointerType === 'mouse') setOffen([
                            i
                        ]);
                    } : undefined,
                    onPointerLeave: bar && hatKinder ? (e)=>{
                        if (e.pointerType === 'mouse') schliesse(i);
                    } : undefined,
                    onBlur: bar && hatKinder ? (e)=>{
                        if (!e.currentTarget.contains(e.relatedTarget)) schliesse(i);
                    } : undefined,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PublicNav$2f$PublicNav$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Row"], {
                            $variant: variant,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PublicNav$2f$PublicNav$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemLink"], {
                                    href: item.href,
                                    $variant: variant,
                                    $withToggle: hatKinder,
                                    children: label
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/components/Molecule/PublicNav/PublicNav.tsx",
                                    lineNumber: 129,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                hatKinder && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PublicNav$2f$PublicNav$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toggle"], {
                                    type: "button",
                                    $variant: variant,
                                    $open: istOffen,
                                    "aria-expanded": istOffen,
                                    "aria-controls": flyoutId,
                                    "aria-label": `${toggleLabel}: ${label}`,
                                    "data-testid": `${dataTestId}-item-${i}-toggle`,
                                    onClick: ()=>schalte(i),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconChevronDown$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {}, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/components/Molecule/PublicNav/PublicNav.tsx",
                                        lineNumber: 143,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/components/Molecule/PublicNav/PublicNav.tsx",
                                    lineNumber: 133,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/app/components/Molecule/PublicNav/PublicNav.tsx",
                            lineNumber: 128,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)),
                        hatKinder && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PublicNav$2f$PublicNav$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Flyout"], {
                            id: flyoutId,
                            $variant: variant,
                            $open: istOffen,
                            "data-testid": `${dataTestId}-item-${i}-children`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PublicNav$2f$PublicNav$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FlyoutList"], {
                                $variant: variant,
                                children: kinder.map((kind, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PublicNav$2f$PublicNav$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FlyoutItem"], {
                                        $variant: variant,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PublicNav$2f$PublicNav$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FlyoutLink"], {
                                            href: kind.href,
                                            $variant: variant,
                                            "data-testid": `${dataTestId}-item-${i}-child-${j}`,
                                            // Kopfleiste: Flyout weg, bevor die nächste Seite kommt
                                            onClick: bar ? ()=>setOffen([]) : undefined,
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$localize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cmsText"])(kind.label, locale)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/components/Molecule/PublicNav/PublicNav.tsx",
                                            lineNumber: 157,
                                            columnNumber: 25
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, `${kind.href}-${j}`, false, {
                                        fileName: "[project]/apps/web/src/app/components/Molecule/PublicNav/PublicNav.tsx",
                                        lineNumber: 156,
                                        columnNumber: 23
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Molecule/PublicNav/PublicNav.tsx",
                                lineNumber: 154,
                                columnNumber: 19
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Molecule/PublicNav/PublicNav.tsx",
                            lineNumber: 148,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, `${item.href}-${i}`, true, {
                    fileName: "[project]/apps/web/src/app/components/Molecule/PublicNav/PublicNav.tsx",
                    lineNumber: 96,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0));
            })
        }, void 0, false, {
            fileName: "[project]/apps/web/src/app/components/Molecule/PublicNav/PublicNav.tsx",
            lineNumber: 88,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Molecule/PublicNav/PublicNav.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(PublicNav, "3BXNMtFFj/Mdz4N5CX4PCUutrbI=");
_c = PublicNav;
const CmsPublicNav = ({ variant, dataTestId, className })=>{
    _s1();
    const { header } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useCmsNavigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCmsNavigation"])();
    const { language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$UserPreferencesContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserPreferences"])();
    const { tr } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"])(language);
    // #2083: Inhaltssprache (Vorschau `?lang=` der Redaktion vor der Oberflächensprache)
    const contentLocale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$CmsContentLocaleContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCmsContentLocale"])();
    const ausCms = header.length > 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PublicNav, {
        items: ausCms ? header : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$headerNavigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HEADER_NAV_ITEMS"],
        source: ausCms ? 'cms' : 'default',
        locale: contentLocale,
        variant: variant,
        ariaLabel: tr('cms.nav.ariaLabel', {
            defaultValue: 'Hauptmenü'
        }),
        toggleLabel: tr('nav.expand', {
            defaultValue: 'Ausklappen'
        }),
        dataTestId: dataTestId,
        className: className
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Molecule/PublicNav/PublicNav.tsx",
        lineNumber: 197,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(CmsPublicNav, "TXRU3nfqVbEVcHcuShJoMAPgPu4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useCmsNavigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCmsNavigation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$UserPreferencesContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserPreferences"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$CmsContentLocaleContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCmsContentLocale"]
    ];
});
_c1 = CmsPublicNav;
const __TURBOPACK__default__export__ = PublicNav;
var _c, _c1;
__turbopack_context__.k.register(_c, "PublicNav");
__turbopack_context__.k.register(_c1, "CmsPublicNav");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/PublicNav/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PublicNav$2f$PublicNav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/PublicNav/PublicNav.tsx [app-client] (ecmascript)");
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/SiteBand/SiteBand.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Root",
    ()=>Root
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$hex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/hex.ts [app-client] (ecmascript) <locals>");
'use client';
;
;
/**
 * Variablen je Fläche (#1954), gelesen von den Site-Fragmenten
 * (assets/theme/site.ts) und vom Band selbst (`--site-surface`).
 *
 * - white: keine — das Theme gilt wie ohne Band;
 * - tint: Fläche site.tint, Kartenrand aus (die Karte hebt sich durch ihre Fläche ab),
 *   Wabenhof (#1958) halb zur Kartenfläche hin aufgehellt — in tint wäre er unsichtbar;
 * - dark: Fläche site.navy (in beiden Themes dunkel — die Primärfarbe ist im
 *   Dunkelmodus hell, weiße Schrift darauf hätte nur 2,8 : 1), Schrift weiß,
 *   Akzent ein aufgehelltes Markengrün (5,5 : 1 auf Navy; site.green 4,2 : 1),
 *   Trennlinien (`--site-border`, #1955 Zahlenband) weiß mit 24 % Deckung,
 *   Wabenhof als zarter heller Schleier.
 */ const surfaceVariables = (theme, surface)=>{
    const site = theme.palette.site;
    switch(surface){
        case 'tint':
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
        --site-surface: ${site.tint};
        --site-card-border: transparent;
        --site-halo: color-mix(in srgb, ${site.tint} 50%, ${site.card});
      `;
        case 'dark':
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
        --site-surface: ${site.navy};
        --site-heading: #ffffff;
        --site-text: color-mix(in srgb, #ffffff 85%, transparent);
        --site-muted: color-mix(in srgb, #ffffff 70%, transparent);
        --site-accent: color-mix(in srgb, ${site.green} 70%, #ffffff);
        --site-card-border: transparent;
        --site-border: color-mix(in srgb, #ffffff 24%, transparent);
        --site-halo: color-mix(in srgb, #ffffff 12%, transparent);
      `;
        default:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]``;
    }
};
/*
 * Unter einem inneren Wabenrand endet die Fläche 1 px vor der Kante: das Band
 * liegt meist auf einer gebrochenen Pixelzeile, die Kacheln zeichnen ohne
 * Kantenglättung (crispEdges) — die halb gedeckte Zeile der Fläche bliebe als
 * feine Linie stehen. Dort liegt ohnehin die Nachbarfarbe.
 */ const innerCut = (edges, side)=>edges?.[side]?.placement === 'inner' ? '1px' : '0';
const Root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].section.withConfig({
    displayName: "SiteBand.styles__Root",
    componentId: "sc-f642966b-0"
})`
  position: relative;
  isolation: isolate;
  display: flow-root;
  background-color: transparent;
  ${({ theme, $surface })=>surfaceVariables(theme, $surface)}

  ${({ $surface, $edges })=>$surface !== 'white' && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
      &::before {
        content: '';
        position: absolute;
        inset: 0;
        z-index: -2;
        background: var(--site-surface);
        box-shadow: 0 0 0 100vmax var(--site-surface);
        clip-path: inset(${innerCut($edges, 'top')} -100vmax ${innerCut($edges, 'bottom')});
        pointer-events: none;
      }
    `}

  /*
   * globals.css färbt main, header, nav, aside, section und article mit der
   * Seitenfarbe. Im Band: header/nav/aside in jeder Tiefe durchsichtig
   * (Abschnittskopf SiteSectionHeader ist ein <header>), section/article nur
   * als Wurzel eines Blocks — Karten (siteCard, PartnerCard …) sind oft
   * <article> und behalten ihre Fläche; eine tiefe Regel wöge mehr als ihre Klasse.
   */
  [data-block-id] :is(header, nav, aside),
  [data-block-id] > :is(section, article) {
    background-color: transparent;
  }

  /* Wabenrand (#1188): das Band ist Host; Polster reserviert die Randzone vor der Messung (CLS 0) */
  ${({ $edges })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$hex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hexEdgeHost"])($edges)}
  ${({ $edges })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$hex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hexEdgeInset"])('top', '0px', $edges)}
  ${({ $edges })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$hex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hexEdgeInset"])('bottom', '0px', $edges)}
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/SiteBand/SiteBand.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SiteBand",
    ()=>SiteBand,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$HexEdge$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/HexEdge/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$HexEdge$2f$HexEdge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/HexEdge/HexEdge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/lib/hex/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$edge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/hex/edge.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$SiteBand$2f$SiteBand$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/SiteBand/SiteBand.styles.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
const SiteBand = ({ surface, edges, headerBg, dataTestId = 'site-band', children })=>{
    const mitRand = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$edge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasEdges"])(edges) ? edges : undefined;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$SiteBand$2f$SiteBand$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        $surface: surface,
        $edges: mitRand,
        "data-testid": dataTestId,
        "data-surface": surface,
        "data-header-bg": headerBg ?? undefined,
        children: [
            mitRand && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$HexEdge$2f$HexEdge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexEdge"], {
                edges: mitRand,
                dataTestId: `${dataTestId}-edge`
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Molecule/SiteBand/SiteBand.tsx",
                lineNumber: 46,
                columnNumber: 19
            }, ("TURBOPACK compile-time value", void 0)),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Molecule/SiteBand/SiteBand.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = SiteBand;
const __TURBOPACK__default__export__ = SiteBand;
var _c;
__turbopack_context__.k.register(_c, "SiteBand");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/SiteBand/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$SiteBand$2f$SiteBand$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/SiteBand/SiteBand.tsx [app-client] (ecmascript)");
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$SiteBand$2f$SiteBand$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiteBand"];
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/SiteFaqList/SiteFaqList.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Item",
    ()=>Item,
    "List",
    ()=>List,
    "Marker",
    ()=>Marker,
    "Panel",
    ()=>Panel,
    "Question",
    ()=>Question,
    "QuestionText",
    ()=>QuestionText,
    "Toggle",
    ()=>Toggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/site.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$hex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/hex.ts [app-client] (ecmascript) <locals>");
'use client';
;
;
;
const List = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ul.withConfig({
    displayName: "SiteFaqList.styles__List",
    componentId: "sc-1973ab1d-0"
})`
  margin: 0;
  padding: 0;
  list-style: none;
`;
const Item = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].li.withConfig({
    displayName: "SiteFaqList.styles__Item",
    componentId: "sc-1973ab1d-1"
})`
  padding: 16px 0;
  transition: background-color 150ms ease;

  & + & {
    border-top: 1px solid ${({ theme })=>theme.palette.site.border};
  }

  &[data-open='true'] {
    padding-right: 16px;
    padding-left: 16px;
    border-radius: 12px;
    background: ${({ theme })=>`color-mix(in srgb, ${theme.palette.site.tint} 60%, ${theme.palette.site.card})`};
    box-shadow: inset 4px 0 0 var(--site-accent, ${({ theme })=>theme.palette.site.green});
  }

  /* Die Fläche ersetzt die Trennlinien an der offenen Frage */
  &[data-open='true'],
  &[data-open='true'] + & {
    border-top-color: transparent;
  }

  /* Ab sm wächst die Fläche nach außen — der Fragetext springt beim Öffnen nicht */
  @media (min-width: 640px) {
    &[data-open='true'] {
      margin-right: -16px;
      margin-left: -16px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;
const Question = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].h3.withConfig({
    displayName: "SiteFaqList.styles__Question",
    componentId: "sc-1973ab1d-2"
})`
  margin: 0;
  font-family: ${({ theme })=>theme.font.primaryFamily};
  font-size: 18px;
  font-weight: 700;
  line-height: 1.25;
  letter-spacing: 0;
  text-transform: none;
  color: ${({ theme })=>theme.palette.site.text};

  @media (min-width: 640px) {
    font-size: 20px;
    line-height: 28px;
  }
`;
const Marker = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "SiteFaqList.styles__Marker",
    componentId: "sc-1973ab1d-3"
})`
  position: relative;
  flex-shrink: 0;
  display: block;
  box-sizing: border-box;
  width: 24px;
  height: 24px;
  ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$hex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["roundedHexagonMask"]}
  background: ${({ theme })=>theme.palette.site.tint};
  transition: transform 150ms ease;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 11px;
    left: 6px;
    width: 12px;
    height: 2px;
    border-radius: 1px;
    background: ${({ theme })=>theme.palette.site.blue};
  }

  &::after {
    transform: rotate(90deg);
  }

  @media (min-width: 640px) {
    top: 2px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;
const Toggle = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "SiteFaqList.styles__Toggle",
    componentId: "sc-1973ab1d-4"
})`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
  box-sizing: border-box;
  width: 100%;
  margin: 0;
  padding: 0;
  border: 0;
  background: none;
  font: inherit;
  line-height: inherit;
  color: inherit;
  text-align: left;
  cursor: pointer;

  &:focus-visible {
    outline: 2px solid ${({ theme })=>theme.palette.site.blue};
    outline-offset: 4px;
    border-radius: 4px;
  }

  /* Offen: auf der getönten Fläche hebt sich die Marke in Kartenfarbe ab */
  &[aria-expanded='true'] ${Marker} {
    transform: rotate(45deg);
    background: ${({ theme })=>theme.palette.site.card};
  }
`;
const QuestionText = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "SiteFaqList.styles__QuestionText",
    componentId: "sc-1973ab1d-5"
})`
  min-width: 0;
  overflow-wrap: break-word;
`;
const Panel = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "SiteFaqList.styles__Panel",
    componentId: "sc-1973ab1d-6"
})`
  ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteProse"]}
  padding-top: 16px;
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/SiteFaqList/SiteFaqList.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SiteFaqList",
    ()=>SiteFaqList,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$SiteFaqList$2f$SiteFaqList$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/SiteFaqList/SiteFaqList.styles.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function FaqEntry({ item, index, open, onToggle, idBase, dataTestId }) {
    const knopfId = `${idBase}-q${index}`;
    const antwortId = `${idBase}-a${index}`;
    const zeile = `${dataTestId}-item-${index}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$SiteFaqList$2f$SiteFaqList$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"], {
        "data-testid": zeile,
        "data-open": open ? 'true' : 'false',
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$SiteFaqList$2f$SiteFaqList$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Question"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$SiteFaqList$2f$SiteFaqList$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toggle"], {
                    type: "button",
                    id: knopfId,
                    "aria-expanded": open,
                    "aria-controls": antwortId,
                    onClick: onToggle,
                    "data-testid": `${zeile}-header`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$SiteFaqList$2f$SiteFaqList$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QuestionText"], {
                            children: item.question
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Molecule/SiteFaqList/SiteFaqList.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$SiteFaqList$2f$SiteFaqList$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Marker"], {
                            "data-part": "marker",
                            "aria-hidden": "true"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Molecule/SiteFaqList/SiteFaqList.tsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/app/components/Molecule/SiteFaqList/SiteFaqList.tsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Molecule/SiteFaqList/SiteFaqList.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$SiteFaqList$2f$SiteFaqList$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Panel"], {
                id: antwortId,
                role: "region",
                "aria-labelledby": knopfId,
                hidden: !open,
                "data-testid": `${zeile}-body`,
                children: item.answer
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Molecule/SiteFaqList/SiteFaqList.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Molecule/SiteFaqList/SiteFaqList.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_c = FaqEntry;
function SiteFaqList({ items, defaultOpenIndex, dataTestId = 'site-faq' }) {
    _s();
    const idBase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    const [offen, setOffen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "SiteFaqList.useState": ()=>new Set(defaultOpenIndex === undefined ? [] : [
                defaultOpenIndex
            ])
    }["SiteFaqList.useState"]);
    const umschalten = (index)=>setOffen((alt)=>{
            const neu = new Set(alt);
            if (neu.has(index)) neu.delete(index);
            else neu.add(index);
            return neu;
        });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$SiteFaqList$2f$SiteFaqList$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["List"], {
        "data-testid": `${dataTestId}-list`,
        "data-count": items.length,
        children: items.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FaqEntry, {
                item: item,
                index: index,
                open: offen.has(index),
                onToggle: ()=>umschalten(index),
                idBase: idBase,
                dataTestId: dataTestId
            }, index, false, {
                fileName: "[project]/apps/web/src/app/components/Molecule/SiteFaqList/SiteFaqList.tsx",
                lineNumber: 87,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Molecule/SiteFaqList/SiteFaqList.tsx",
        lineNumber: 85,
        columnNumber: 5
    }, this);
}
_s(SiteFaqList, "RWGtCTuceg7vm/RfwPxN8OZzvMU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"]
    ];
});
_c1 = SiteFaqList;
const __TURBOPACK__default__export__ = SiteFaqList;
var _c, _c1;
__turbopack_context__.k.register(_c, "FaqEntry");
__turbopack_context__.k.register(_c1, "SiteFaqList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/SiteFaqList/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$SiteFaqList$2f$SiteFaqList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/SiteFaqList/SiteFaqList.tsx [app-client] (ecmascript)");
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/SiteLocaleHint/SiteLocaleHint.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HintBar",
    ()=>HintBar,
    "HintClose",
    ()=>HintClose,
    "HintLink",
    ()=>HintLink
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$zIndex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/zIndex.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/site.ts [app-client] (ecmascript)");
'use client';
;
;
;
const HintBar = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "SiteLocaleHint.styles__HintBar",
    componentId: "sc-f04b7de7-0"
})`
  position: fixed;
  top: ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SITE_HEADER_HEIGHT_PX"]}px;
  left: 0;
  right: 0;
  z-index: ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$zIndex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Z_INDEX"].sticky};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme })=>theme.margin.small};
  padding: ${({ theme })=>theme.padding.extrasmall} ${({ theme })=>theme.padding.small};
  font-family: ${({ theme })=>theme.font.secondaryFamily};
  font-size: 14px;
  color: ${({ theme })=>theme.palette.status.info.text};
  background: ${({ theme })=>theme.palette.status.info.bg};
  border-bottom: 1px solid ${({ theme })=>theme.palette.status.info.border};
`;
const HintLink = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].a.withConfig({
    displayName: "SiteLocaleHint.styles__HintLink",
    componentId: "sc-f04b7de7-1"
})`
  font-weight: 600;
  color: inherit;
  text-decoration: underline;

  &:focus-visible {
    outline: 2px solid currentColor;
    outline-offset: 2px;
  }
`;
const HintClose = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "SiteLocaleHint.styles__HintClose",
    componentId: "sc-f04b7de7-2"
})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  padding: 0;
  border: none;
  border-radius: 50%;
  background: transparent;
  color: inherit;
  cursor: pointer;

  svg {
    width: 14px;
    height: 14px;
  }

  &:hover,
  &:focus-visible {
    background: ${({ theme })=>theme.palette.surface.muted};
  }
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/SiteLocaleHint/SiteLocaleHint.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SiteLocaleHint",
    ()=>SiteLocaleHint,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconClose$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconClose/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$SiteLocaleContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/context/SiteLocaleContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/ClientTranslation.tsx [app-client] (ecmascript) <export useClientSafeTranslation as useClientTranslation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$settings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/settings.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useUsagePageview$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/useUsagePageview.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$i18n$2f$siteLocaleHint$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/i18n/siteLocaleHint.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$i18n$2f$siteLocales$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/i18n/siteLocales.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$SiteLocaleHint$2f$SiteLocaleHint$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/SiteLocaleHint/SiteLocaleHint.styles.ts [app-client] (ecmascript)");
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
/** Weggeklickt: für diese Sitzung des Browsers kein Hinweis mehr. */ const AUSGEBLENDET = 'plastship.siteLocaleHint.dismissed';
const ausgeblendet = ()=>{
    try {
        return window.sessionStorage.getItem(AUSGEBLENDET) === '1';
    } catch  {
        return false;
    }
};
function SiteLocaleHint() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const { status } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const { locale: pathLocale, missing } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$SiteLocaleContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSiteLocaleContext"])();
    const { tr } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"])();
    const spracheBeimLaden = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$SiteLocaleContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguageCookieAtLoad"])();
    const [ziel, setZiel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SiteLocaleHint.useEffect": ()=>{
            if (status !== 'unauthenticated' || ausgeblendet()) {
                setZiel(null);
                return;
            }
            setZiel((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$i18n$2f$siteLocaleHint$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteLocaleHintTarget"])({
                pathname,
                pathLocale,
                cookieLanguage: spracheBeimLaden,
                missingStart: {
                    "SiteLocaleHint.useEffect": (locale)=>Boolean(missing[locale]?.has('/'))
                }["SiteLocaleHint.useEffect"]
            }));
        }
    }["SiteLocaleHint.useEffect"], [
        pathname,
        pathLocale,
        missing,
        status,
        spracheBeimLaden
    ]);
    if (!ziel) return null;
    const sprache = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$settings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localeInfo"][(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$i18n$2f$siteLocales$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uiLanguageFor"])(ziel.locale)]?.native ?? ziel.locale;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$SiteLocaleHint$2f$SiteLocaleHint$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HintBar"], {
        "data-testid": "site-locale-hint",
        "data-locale": ziel.locale,
        role: "note",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: tr('cms.siteLocaleHint.text', {
                    defaultValue: 'Diese Seite gibt es auch auf {{language}}.',
                    language: sprache
                })
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Molecule/SiteLocaleHint/SiteLocaleHint.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$SiteLocaleHint$2f$SiteLocaleHint$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HintLink"], {
                href: ziel.href,
                hrefLang: ziel.locale,
                "data-testid": "site-locale-hint-link",
                onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useUsagePageview$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sendeNutzungsereignis"])(pathname ?? '/', __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$i18n$2f$siteLocaleHint$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SITE_LOCALE_HINT_EVENT"], {
                        locale: ziel.locale
                    }),
                children: tr('cms.siteLocaleHint.link', {
                    defaultValue: 'Zur Fassung auf {{language}}',
                    language: sprache
                })
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Molecule/SiteLocaleHint/SiteLocaleHint.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$SiteLocaleHint$2f$SiteLocaleHint$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HintClose"], {
                type: "button",
                "aria-label": tr('cms.siteLocaleHint.close', {
                    defaultValue: 'Hinweis schließen'
                }),
                "data-testid": "site-locale-hint-close",
                onClick: ()=>{
                    try {
                        window.sessionStorage.setItem(AUSGEBLENDET, '1');
                    } catch  {
                    // ohne Speicher bleibt es beim Schließen für diese Ansicht
                    }
                    setZiel(null);
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconClose$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Molecule/SiteLocaleHint/SiteLocaleHint.tsx",
                    lineNumber: 92,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Molecule/SiteLocaleHint/SiteLocaleHint.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Molecule/SiteLocaleHint/SiteLocaleHint.tsx",
        lineNumber: 64,
        columnNumber: 5
    }, this);
}
_s(SiteLocaleHint, "cRCBEvgPmkhoyTIo2k17/wn5G4Y=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$SiteLocaleContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSiteLocaleContext"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$SiteLocaleContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguageCookieAtLoad"]
    ];
});
_c = SiteLocaleHint;
const __TURBOPACK__default__export__ = SiteLocaleHint;
var _c;
__turbopack_context__.k.register(_c, "SiteLocaleHint");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/SiteLocaleHint/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$SiteLocaleHint$2f$SiteLocaleHint$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/SiteLocaleHint/SiteLocaleHint.tsx [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/SiteSectionHeader/SiteSectionHeader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SiteSectionHeader",
    ()=>SiteSectionHeader,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/site.ts [app-client] (ecmascript)");
'use client';
;
;
;
function SiteSectionHeader({ headline, description, align = 'left', headingLevel = 2, dataTestId }) {
    if (!headline && !description) return null;
    const absaetze = description ? description.split(/\n\s*\n/).map((a)=>a.trim()).filter(Boolean) : [];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Root, {
        $align: align,
        "data-testid": dataTestId,
        "data-align": align,
        children: [
            headline && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(H2, {
                as: headingLevel === 1 ? 'h1' : 'h2',
                "data-testid": dataTestId ? `${dataTestId}-headline` : undefined,
                children: headline
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Molecule/SiteSectionHeader/SiteSectionHeader.tsx",
                lineNumber: 42,
                columnNumber: 9
            }, this),
            absaetze.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Lead, {
                "data-testid": dataTestId ? `${dataTestId}-description` : undefined,
                children: absaetze.map((absatz, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: absatz
                    }, i, false, {
                        fileName: "[project]/apps/web/src/app/components/Molecule/SiteSectionHeader/SiteSectionHeader.tsx",
                        lineNumber: 52,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Molecule/SiteSectionHeader/SiteSectionHeader.tsx",
                lineNumber: 50,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Molecule/SiteSectionHeader/SiteSectionHeader.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
_c = SiteSectionHeader;
const Root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].header.withConfig({
    displayName: "SiteSectionHeader__Root",
    componentId: "sc-37a85c34-0"
})`
  display: flex;
  /* globals.css gibt jedem header die Seitenfarbe; auf Karten und Bändern transparent bleiben */
  background: transparent;
  flex-direction: column;
  gap: 16px;
  max-width: ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SITE_TEXT_MAX_WIDTH"]};
  ${({ $align })=>$align === 'center' && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
      margin-inline: auto;
      text-align: center;
    `}
`;
_c1 = Root;
const H2 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].h2.withConfig({
    displayName: "SiteSectionHeader__H2",
    componentId: "sc-37a85c34-1"
})`
  ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteH2"]}
`;
_c2 = H2;
const Lead = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "SiteSectionHeader__Lead",
    componentId: "sc-37a85c34-2"
})`
  ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteProse"]}
  white-space: pre-line;
`;
_c3 = Lead;
const __TURBOPACK__default__export__ = SiteSectionHeader;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "SiteSectionHeader");
__turbopack_context__.k.register(_c1, "Root");
__turbopack_context__.k.register(_c2, "H2");
__turbopack_context__.k.register(_c3, "Lead");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/SiteSectionHeader/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$SiteSectionHeader$2f$SiteSectionHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/SiteSectionHeader/SiteSectionHeader.tsx [app-client] (ecmascript)");
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/SpecTable/SpecTable.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Cell",
    ()=>Cell,
    "HeadCell",
    ()=>HeadCell,
    "Root",
    ()=>Root,
    "RowHeadCell",
    ()=>RowHeadCell,
    "Scroll",
    ()=>Scroll,
    "Table",
    ()=>Table
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/site.ts [app-client] (ecmascript)");
'use client';
;
;
const Root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].section.withConfig({
    displayName: "SpecTable.styles__Root",
    componentId: "sc-b0630cd5-0"
})`
  display: flex;
  flex-direction: column;
  gap: 32px;
  box-sizing: border-box;
  width: 100%;
  /* max-w-screen-md abzüglich des Containerpolsters der Quelle (2 × 24px) */
  max-width: calc(${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SITE_TEXT_MAX_WIDTH"]} - 48px);
  margin-inline: auto;
`;
const Scroll = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "SpecTable.styles__Scroll",
    componentId: "sc-b0630cd5-1"
})`
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
`;
const Table = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].table.withConfig({
    displayName: "SpecTable.styles__Table",
    componentId: "sc-b0630cd5-2"
})`
  width: 100%;
  border-collapse: collapse;
  background-color: transparent;
  font-family: ${({ theme })=>theme.font.secondaryFamily};
  font-size: 14px;
  line-height: 24px;
  color: ${({ theme })=>theme.palette.site.text};

  /*
   * Zebra halbdurchsichtig über dem Band statt mit der Kartenfarbe gemischt:
   * dunkel liegt die Tabelle auf #1F2937 (Seite/Band), dort verschwände eine
   * Mischung aus tint und site.card (#111827) — hell sieht beides gleich aus.
   */
  && tbody tr:nth-child(even) {
    background: ${({ theme })=>`color-mix(in srgb, ${theme.palette.site.tint} 70%, transparent)`};
  }
`;
const HeadCell = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].th.withConfig({
    displayName: "SpecTable.styles__HeadCell",
    componentId: "sc-b0630cd5-3"
})`
  padding: 16px;
  font-weight: 700;
  text-align: left;
  vertical-align: bottom;
  color: ${({ theme })=>theme.palette.text.onAccent};
  background: ${({ theme })=>theme.palette.site.blueDark};
`;
const RowHeadCell = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].th.withConfig({
    displayName: "SpecTable.styles__RowHeadCell",
    componentId: "sc-b0630cd5-4"
})`
  padding: 16px;
  font-weight: 700;
  text-align: left;
  vertical-align: baseline;
  color: ${({ theme })=>theme.palette.site.heading};
  background-color: transparent;
`;
const Cell = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].td.withConfig({
    displayName: "SpecTable.styles__Cell",
    componentId: "sc-b0630cd5-5"
})`
  padding: 16px;
  vertical-align: baseline;
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/SpecTable/SpecTable.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SpecTable",
    ()=>SpecTable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$SiteSectionHeader$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/SiteSectionHeader/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$SiteSectionHeader$2f$SiteSectionHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/SiteSectionHeader/SiteSectionHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$SpecTable$2f$SpecTable$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/SpecTable/SpecTable.styles.ts [app-client] (ecmascript)");
;
;
;
/**
 * Spezifikationstabelle (plastship.com: technische Daten eines Showroom-Produkts),
 * im Stil der Quelle (#1199): schmaler, mittiger Block, Kopf links. #1959:
 * dunkelblaue Kopfzeile, Zebra-Zeilen, kompakte Höhe. Die erste Spalte ist
 * Zeilenkopf (für Screenreader) und steht fett. Auf schmalen
 * Bildschirmen scrollt die Tabelle waagerecht statt die Seite zu verbreitern.
 */ const SpecTable = (props)=>{
    const { headline, description, columns, rows, className, dataTestId = 'spec-table' } = props;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$SpecTable$2f$SpecTable$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        className: className,
        "data-testid": dataTestId,
        "data-columns": columns.length,
        "data-rows": rows.length,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$SiteSectionHeader$2f$SiteSectionHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiteSectionHeader"], {
                headline: headline,
                description: description,
                dataTestId: `${dataTestId}-header`
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Molecule/SpecTable/SpecTable.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$SpecTable$2f$SpecTable$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scroll"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$SpecTable$2f$SpecTable$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Table"], {
                    "data-testid": `${dataTestId}-table`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: columns.map((column, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$SpecTable$2f$SpecTable$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeadCell"], {
                                        scope: "col",
                                        "data-testid": `${dataTestId}-column`,
                                        children: column
                                    }, index, false, {
                                        fileName: "[project]/apps/web/src/app/components/Molecule/SpecTable/SpecTable.tsx",
                                        lineNumber: 38,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Molecule/SpecTable/SpecTable.tsx",
                                lineNumber: 36,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Molecule/SpecTable/SpecTable.tsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            children: rows.map((row, rowIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    "data-testid": `${dataTestId}-row`,
                                    children: columns.map((_, cellIndex)=>cellIndex === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$SpecTable$2f$SpecTable$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RowHeadCell"], {
                                            scope: "row",
                                            "data-testid": `${dataTestId}-cell`,
                                            children: row[cellIndex] ?? ''
                                        }, cellIndex, false, {
                                            fileName: "[project]/apps/web/src/app/components/Molecule/SpecTable/SpecTable.tsx",
                                            lineNumber: 49,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$SpecTable$2f$SpecTable$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cell"], {
                                            "data-testid": `${dataTestId}-cell`,
                                            children: row[cellIndex] ?? ''
                                        }, cellIndex, false, {
                                            fileName: "[project]/apps/web/src/app/components/Molecule/SpecTable/SpecTable.tsx",
                                            lineNumber: 53,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, rowIndex, false, {
                                    fileName: "[project]/apps/web/src/app/components/Molecule/SpecTable/SpecTable.tsx",
                                    lineNumber: 46,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Molecule/SpecTable/SpecTable.tsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/app/components/Molecule/SpecTable/SpecTable.tsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Molecule/SpecTable/SpecTable.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Molecule/SpecTable/SpecTable.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = SpecTable;
;
var _c;
__turbopack_context__.k.register(_c, "SpecTable");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/SpecTable/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$SpecTable$2f$SpecTable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/SpecTable/SpecTable.tsx [app-client] (ecmascript)");
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$SpecTable$2f$SpecTable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SpecTable"];
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/StepList/StepList.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Content",
    ()=>Content,
    "Light",
    ()=>Light,
    "List",
    ()=>List,
    "Node",
    ()=>Node,
    "NodeContent",
    ()=>NodeContent,
    "NodeFace",
    ()=>NodeFace,
    "NodeSvg",
    ()=>NodeSvg,
    "PathSvg",
    ()=>PathSvg,
    "Root",
    ()=>Root,
    "Segment",
    ()=>Segment,
    "Step",
    ()=>Step,
    "StepNumber",
    ()=>StepNumber,
    "StepText",
    ()=>StepText,
    "StepTitle",
    ()=>StepTitle,
    "Track",
    ()=>Track,
    "horizontalFrom",
    ()=>horizontalFrom,
    "stepGoalFace",
    ()=>stepGoalFace,
    "trailColor",
    ()=>trailColor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$brands$2f$partnerTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/brands/partnerTheme.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/site.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easingCss$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/motion/easingCss.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$mixColor$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/scene3d/mixColor.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$StepList$2f$stepListTimeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/StepList/stepListTimeline.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
/**
 * #2191 „Wabenweg". Bewegung nur über `data-state` am Root
 * (lib/motion/entrance): idle = blasse Knoten, kein Weg; running = Knoten
 * springen auf, der Weg zeichnet sich Stück für Stück, jeder Knoten füllt
 * sich, wenn der Strich ihn erreicht, danach läuft der Lichtpunkt einmal ab;
 * ready/pending/static = fertiger Weg, gefüllte Knoten (static ohne jede
 * Bewegung). `data-dark` = Block auf dunkler Fläche (Navy).
 */ const ms = (wert)=>`${wert}ms`;
const trailColor = (theme)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$brands$2f$partnerTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDarkTheme"])(theme) ? theme.palette.site.muted : theme.palette.site.border;
const stepGoalFace = (theme)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$mixColor$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mixColor"])(theme.palette.site.greenDark, '#000000', 0.15);
const horizontalFrom = (count)=>count <= 3 ? 640 : 1024;
const aufspringen = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframes"]`
  from { opacity: 0; transform: scale(0.7); }
  to { opacity: 1; transform: scale(1); }
`;
const zeichnen = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframes"]`
  from { stroke-dashoffset: 1; }
  to { stroke-dashoffset: 0; }
`;
const fuellen = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframes"]`
  from { fill: var(--node-face-idle); stroke: var(--node-rim-idle); }
  to { fill: var(--node-face-done); stroke: var(--node-face-done); }
`;
const zielFuellen = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframes"]`
  from { fill: var(--node-face-idle); stroke: var(--node-rim-idle); }
  to { fill: var(--node-goal-done); stroke: var(--node-goal-done); }
`;
const iconFaerben = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframes"]`
  from { color: var(--node-icon-idle); }
  to { color: var(--node-icon-done); }
`;
/* Ziel: endet auf der Zielfarbe — sonst springt die Nummer bei `ready` um (dunkel: Grün → Weiß) */ const zielIconFaerben = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframes"]`
  from { color: var(--node-icon-idle); }
  to { color: var(--node-goal-icon); }
`;
/** Lichtpunkt: Strich der Länge 0,06 läuft einmal von vorn nach hinten und verlischt am Ziel */ const LICHT = 0.06;
const licht = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframes"]`
  0% { stroke-dashoffset: ${LICHT}; opacity: 0; }
  8% { opacity: 1; }
  88% { opacity: 1; }
  100% { stroke-dashoffset: -1; opacity: 0; }
`;
const Root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].section.withConfig({
    displayName: "StepList.styles__Root",
    componentId: "sc-7c7ae546-0"
})`
  display: flex;
  flex-direction: column;
  gap: ${({ theme })=>theme.margin.big};
  width: 100%;
  /* globals.css färbt section mit der Seitenfarbe — auf Bändern durchscheinen lassen */
  background-color: transparent;

  --step-path: ${({ theme })=>trailColor(theme)};
  --step-path-lit: ${({ theme })=>theme.palette.site.green};
  --node-face-idle: ${({ theme })=>theme.palette.site.tint};
  --node-rim-idle: ${({ theme })=>theme.palette.site.border};
  --node-face-done: ${({ theme })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$brands$2f$partnerTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDarkTheme"])(theme) ? theme.palette.site.navy : theme.palette.site.blue};
  --node-goal-done: ${({ theme })=>stepGoalFace(theme)};
  --node-icon-idle: ${({ theme })=>theme.palette.site.blue};
  --node-icon-done: ${({ theme })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$brands$2f$partnerTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDarkTheme"])(theme) ? theme.palette.site.greenText : '#ffffff'};
  --node-goal-icon: #ffffff;

  /* Band (Navy in beiden Themes): Knoten hell, Weg weiß gedämpft */
  &[data-dark='true'] {
    --step-path: color-mix(in srgb, #ffffff 40%, transparent);
    --node-face-idle: color-mix(in srgb, #ffffff 10%, transparent);
    --node-rim-idle: color-mix(in srgb, #ffffff 32%, transparent);
    --node-face-done: ${({ theme })=>theme.palette.site.logoPlate};
    --node-icon-idle: #ffffff;
    --node-icon-done: ${({ theme })=>theme.palette.site.navy};
  }
`;
const Track = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "StepList.styles__Track",
    componentId: "sc-7c7ae546-1"
})`
  position: relative;
  width: 100%;
`;
const PathSvg = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].svg.withConfig({
    displayName: "StepList.styles__PathSvg",
    componentId: "sc-7c7ae546-2"
})`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: visible;
  pointer-events: none;
`;
const Segment = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].path.withConfig({
    displayName: "StepList.styles__Segment",
    componentId: "sc-7c7ae546-3"
})`
  fill: none;
  stroke: var(--step-path);
  stroke-width: 2;
  stroke-linejoin: round;
  stroke-linecap: round;
  stroke-dasharray: 1 1;
  stroke-dashoffset: 0;
  transition: stroke 250ms ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easingCss$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_REVEAL_CSS"]};

  &[data-lit='true'] {
    stroke: var(--step-path-lit);
    stroke-width: 3;
  }

  [data-state='idle'] & {
    stroke-dashoffset: 1;
  }
  [data-state='running'] & {
    animation: ${zeichnen} ${ms(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$StepList$2f$stepListTimeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STEP_PATH_TIMING"].path.duration)} ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easingCss$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_REVEAL_CSS"]}
      ${({ $index })=>ms((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$StepList$2f$stepListTimeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stepSegmentDelay"])($index))} both;
  }
  [data-state='static'] & {
    transition: none;
  }
`;
const Light = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].path.withConfig({
    displayName: "StepList.styles__Light",
    componentId: "sc-7c7ae546-4"
})`
  fill: none;
  stroke: var(--step-path-lit);
  stroke-width: 6;
  stroke-linecap: round;
  stroke-dasharray: ${LICHT} ${2 - LICHT};
  stroke-dashoffset: ${LICHT};
  opacity: 0;

  [data-state='running'] & {
    animation: ${licht} ${ms(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$StepList$2f$stepListTimeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STEP_PATH_TIMING"].light.duration)} ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easingCss$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_REVEAL_CSS"]}
      ${({ $count })=>ms((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$StepList$2f$stepListTimeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stepLightDelay"])($count))} both;
  }
`;
/** Senkrechter Weg (Telefon und `vertical`): Knoten links, Text daneben */ const senkrecht = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
  grid-template-columns: minmax(0, 1fr);
  row-gap: ${({ theme })=>theme.margin.large};
  max-width: ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SITE_TEXT_MAX_WIDTH"]};
  margin-inline: auto;

  & > li {
    display: grid;
    grid-template-columns: var(--node-size) minmax(0, 1fr);
    column-gap: ${({ theme })=>theme.margin.default};
    align-items: start;
  }
`;
/** Prozess in einer Reihe: so viele Spalten wie Schritte, Knoten mittig oben, Text darunter */ const waagrecht = (count)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
  @media (min-width: ${horizontalFrom(count)}px) {
    grid-template-columns: repeat(${count}, minmax(0, 1fr));
    column-gap: ${({ theme })=>theme.margin.large};
    max-width: none;

    & > li {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: ${({ theme })=>theme.margin.default};
    }

    /* Titel mittig unter dem Knoten, die Beschreibung linksbündig */
    & [data-part='content'] {
      padding-top: 0;
    }

    & [data-part='title'] {
      text-align: center;
    }

    --node-size: 6rem;
  }

  @media (min-width: 1024px) {
    --node-size: 7.5rem;
  }
`;
const List = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ol.withConfig({
    displayName: "StepList.styles__List",
    componentId: "sc-7c7ae546-5"
})`
  --node-size: 4rem;
  position: relative;
  display: grid;
  margin: 0;
  padding: 0;
  list-style: none;

  @media (min-width: 640px) {
    --node-size: 5rem;
  }

  ${senkrecht}
  ${({ $orientation, $count })=>$orientation === 'horizontal' && waagrecht($count)}
`;
const Step = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].li.withConfig({
    displayName: "StepList.styles__Step",
    componentId: "sc-7c7ae546-6"
})`
  position: relative;
  min-width: 0;
`;
const Node = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "StepList.styles__Node",
    componentId: "sc-7c7ae546-7"
})`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: none;
  width: var(--node-size);
  height: var(--node-size);
  transition: transform 250ms ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easingCss$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_POP_CSS"]};

  [data-state='idle'] & {
    opacity: 0;
  }
  [data-state='running'] & {
    animation: ${aufspringen} ${ms(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$StepList$2f$stepListTimeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STEP_PATH_TIMING"].nodes.duration)} ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easingCss$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_POP_CSS"]}
      ${({ $index })=>ms((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$StepList$2f$stepListTimeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stepNodeDelay"])($index))} both;
  }

  @media (hover: hover) and (pointer: fine) {
    [data-state='ready'] li[data-active='true'] > & {
      transform: translateY(-6%) scale(1.06);
    }
  }
`;
const NodeSvg = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].svg.withConfig({
    displayName: "StepList.styles__NodeSvg",
    componentId: "sc-7c7ae546-8"
})`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: visible;
`;
const NodeFace = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].path.withConfig({
    displayName: "StepList.styles__NodeFace",
    componentId: "sc-7c7ae546-9"
})`
  fill: ${({ $goal })=>$goal ? 'var(--node-goal-done)' : 'var(--node-face-done)'};
  stroke: ${({ $goal })=>$goal ? 'var(--node-goal-done)' : 'var(--node-face-done)'};
  stroke-width: 2;

  [data-state='idle'] & {
    fill: var(--node-face-idle);
    stroke: var(--node-rim-idle);
  }
  [data-state='running'] & {
    animation: ${({ $goal })=>$goal ? zielFuellen : fuellen} ${ms(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$StepList$2f$stepListTimeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STEP_PATH_TIMING"].fill.duration)}
      ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easingCss$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_REVEAL_CSS"]} ${({ $index })=>ms((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$StepList$2f$stepListTimeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stepFillDelay"])($index))} both;
  }
`;
const NodeContent = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "StepList.styles__NodeContent",
    componentId: "sc-7c7ae546-10"
})`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ $goal })=>$goal ? 'var(--node-goal-icon)' : 'var(--node-icon-done)'};

  [data-state='idle'] & {
    color: var(--node-icon-idle);
  }
  [data-state='running'] & {
    animation: ${({ $goal })=>$goal ? zielIconFaerben : iconFaerben} ${ms(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$StepList$2f$stepListTimeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STEP_PATH_TIMING"].fill.duration)}
      ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easingCss$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_REVEAL_CSS"]} ${({ $index })=>ms((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$StepList$2f$stepListTimeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stepFillDelay"])($index))} both;
  }

  svg {
    display: block;
    width: calc(var(--node-size) * 0.4);
    height: calc(var(--node-size) * 0.4);
  }

  /* Die Icon-Atome färben sich uneinheitlich — hier einheitlich die Farbe des Knotens */
  svg [fill]:not([fill='none']) {
    fill: currentColor;
  }

  svg [stroke]:not([stroke='none']) {
    stroke: currentColor;
  }
`;
const StepNumber = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "StepList.styles__StepNumber",
    componentId: "sc-7c7ae546-11"
})`
  font-family: ${({ theme })=>theme.font.primaryFamily};
  font-size: calc(var(--node-size) * 0.28);
  font-weight: 700;
  line-height: 1;
  font-variant-numeric: tabular-nums;
`;
const Content = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "StepList.styles__Content",
    componentId: "sc-7c7ae546-12"
})`
  display: flex;
  flex-direction: column;
  gap: ${({ theme })=>theme.margin.extrasmall};
  min-width: 0;
  /* Titel auf Höhe der Knotenmitte (Zeilenhöhe 28 px) */
  padding-top: calc((var(--node-size) - 1.75rem) / 2);

  @media (min-width: 640px) {
    li > & {
      max-width: 20rem;
    }
  }
`;
const StepTitle = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].h3.withConfig({
    displayName: "StepList.styles__StepTitle",
    componentId: "sc-7c7ae546-13"
})`
  ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteH3"]}
  margin: 0;
  font-size: 1.125rem;
  line-height: 1.75rem;
  hyphens: manual;
  overflow-wrap: break-word;
  text-wrap: balance;
`;
const StepText = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "StepList.styles__StepText",
    componentId: "sc-7c7ae546-14"
})`
  ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteMuted"]}
  color: ${({ theme })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteVar"])('muted', theme.palette.site.muted)};

  p,
  ul,
  ol {
    margin: 0;
  }

  p + p,
  p + ul,
  ul + p {
    margin-top: ${({ theme })=>theme.margin.extrasmall};
  }

  ul {
    padding-left: ${({ theme })=>theme.padding.default};
    list-style: disc;
  }

  li::marker {
    color: ${({ theme })=>theme.palette.site.green};
  }

  strong {
    font-weight: 700;
    color: ${({ theme })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteVar"])('heading', theme.palette.site.heading)};
  }

  li + li {
    margin-top: ${({ theme })=>theme.margin.extrasmall};
  }
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/StepList/StepList.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StepList",
    ()=>StepList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$SiteSectionHeader$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/SiteSectionHeader/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$SiteSectionHeader$2f$SiteSectionHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/SiteSectionHeader/SiteSectionHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$IconChip$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/IconChip/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$IconChip$2f$IconChip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/IconChip/IconChip.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useEntranceAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/useEntranceAnimation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/lib/hex/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$shape$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/hex/shape.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$StepList$2f$stepPathGeometry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/StepList/stepPathGeometry.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$StepList$2f$stepListTimeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/StepList/stepListTimeline.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$StepList$2f$StepList$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/StepList/StepList.styles.ts [app-client] (ecmascript)");
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
/** #1956: Ton ohne eigenen Ton — das Ziel (letzter Schritt) grün, die Schritte davor blau. */ const positionTone = (index, count)=>index === count - 1 ? 'green' : 'blue';
/* Knoten im 100er-Rahmen, Rand für die Kante */ const KNOTEN = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$shape$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["roundedHexagonPath"])({
    x: 2,
    y: 2,
    width: 96,
    height: 96
}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$shape$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexCornerRadius"])(96));
const gleicherWeg = (a, b)=>!!a && a.width === b.width && a.height === b.height && a.full === b.full;
/** Inhalt des Knotens: CMS-Icon, Icon-Atom oder die zweistellige Nummer (01…) */ function NodeMark({ icon, index, count, dataTestId }) {
    const tone = positionTone(index, count);
    const goal = index === count - 1;
    if (icon && !/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isValidElement(icon)) {
        const spec = icon;
        const Icon = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$IconChip$2f$IconChip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CMS_ICON_COMPONENTS"][spec.name];
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$StepList$2f$StepList$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeContent"], {
            $index: index,
            $goal: goal,
            "data-testid": dataTestId,
            "data-icon": spec.name,
            "data-tone": spec.tone ?? tone,
            "data-shape": "hex",
            "aria-hidden": "true",
            children: Icon ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {}, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Molecule/StepList/StepList.tsx",
                lineNumber: 105,
                columnNumber: 17
            }, this) : null
        }, void 0, false, {
            fileName: "[project]/apps/web/src/app/components/Molecule/StepList/StepList.tsx",
            lineNumber: 96,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$StepList$2f$StepList$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeContent"], {
        $index: index,
        $goal: goal,
        "data-testid": dataTestId,
        "data-tone": tone,
        "data-shape": "hex",
        children: icon ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            "aria-hidden": "true",
            children: icon
        }, void 0, false, {
            fileName: "[project]/apps/web/src/app/components/Molecule/StepList/StepList.tsx",
            lineNumber: 112,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$StepList$2f$StepList$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StepNumber"], {
            $tone: tone,
            "data-testid": `${dataTestId}-number`,
            "data-tone": tone,
            children: String(index + 1).padStart(2, '0')
        }, void 0, false, {
            fileName: "[project]/apps/web/src/app/components/Molecule/StepList/StepList.tsx",
            lineNumber: 114,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Molecule/StepList/StepList.tsx",
        lineNumber: 110,
        columnNumber: 5
    }, this);
}
_c = NodeMark;
/**
 * Schritt- oder Leistungsliste, seit #2191 als „Wabenweg": große
 * Wabenknoten (Icon oder Nummer), verbunden durch einen Weg aus Wabenkanten
 * (Zickzack, stepPathGeometry.ts). Beim Eintritt zeichnet sich der Weg vom
 * ersten zum letzten Knoten, jeder Knoten füllt sich, wenn der Strich ihn
 * erreicht (blass → Navy, das Ziel Grün), danach läuft ein Lichtpunkt den
 * Weg einmal ab. Unter dem Zeiger bzw. mit dem Fokus hebt sich ein Knoten
 * und die Strecke bis dorthin leuchtet. Telefon: Weg senkrecht links.
 * „Bewegung reduzieren": fertiger Weg, gefüllte Knoten.
 *
 * Testids (Präfix `dataTestId`): Wurzel (`data-state`, `data-count`,
 * `data-orientation`, `data-path` = Zahl der Teilstücke), `-step`
 * (`data-step`, `data-active`), `-marker`, `-chip` (`data-icon`,
 * `data-tone`), `-chip-number`, `-step-title`, `-step-description`,
 * `-path-segment`.
 */ const StepList = ({ headline, description, steps, orientation = 'horizontal', surface = 'white', onFirstView, onFirstStep, className, dataTestId = 'step-list' })=>{
    _s();
    const rootRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const trackRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const nodeRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const { state, visible } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useEntranceAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEntranceAnimation"])(rootRef, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$StepList$2f$stepListTimeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stepPathEntranceMs"])(steps.length));
    const [weg, setWeg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [aktiv, setAktiv] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const gemeldet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StepList.useEffect": ()=>{
            if (!visible || gemeldet.current) return;
            gemeldet.current = true;
            onFirstView?.();
        }
    }["StepList.useEffect"], [
        visible,
        onFirstView
    ]);
    // Knotenmitten messen und den Weg neu legen, sobald sich die Bühne ändert
    const messen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "StepList.useCallback[messen]": ()=>{
            const track = trackRef.current;
            if (!track) return;
            const box = track.getBoundingClientRect();
            const punkte = nodeRefs.current.slice(0, steps.length).filter({
                "StepList.useCallback[messen].punkte": (n)=>!!n
            }["StepList.useCallback[messen].punkte"]).map({
                "StepList.useCallback[messen].punkte": (n)=>{
                    const r = n.getBoundingClientRect();
                    return {
                        x: r.left - box.left + r.width / 2,
                        y: r.top - box.top + r.height / 2
                    };
                }
            }["StepList.useCallback[messen].punkte"]);
            const segments = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$StepList$2f$stepPathGeometry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stepPathSegments"])(punkte);
            const neu = {
                width: Math.round(box.width),
                height: Math.round(box.height),
                segments,
                full: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$StepList$2f$stepPathGeometry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stepPathFull"])(segments)
            };
            setWeg({
                "StepList.useCallback[messen]": (alt)=>gleicherWeg(alt, neu) ? alt : neu
            }["StepList.useCallback[messen]"]);
        }
    }["StepList.useCallback[messen]"], [
        steps.length
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StepList.useEffect": ()=>{
            messen();
            const track = trackRef.current;
            if (!track || typeof ResizeObserver === 'undefined') return;
            const beobachter = new ResizeObserver({
                "StepList.useEffect": ()=>messen()
            }["StepList.useEffect"]);
            beobachter.observe(track);
            return ({
                "StepList.useEffect": ()=>beobachter.disconnect()
            })["StepList.useEffect"];
        }
    }["StepList.useEffect"], [
        messen
    ]);
    const hervorheben = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "StepList.useCallback[hervorheben]": (index)=>{
            setAktiv(index);
            if (index !== null) onFirstStep?.();
        }
    }["StepList.useCallback[hervorheben]"], [
        onFirstStep
    ]);
    const segmente = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "StepList.useMemo[segmente]": ()=>weg?.segments ?? []
    }["StepList.useMemo[segmente]"], [
        weg
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$StepList$2f$StepList$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        ref: rootRef,
        className: className,
        "data-testid": dataTestId,
        "data-orientation": orientation,
        "data-count": steps.length,
        "data-trail": orientation,
        "data-state": state,
        "data-path": segmente.length,
        "data-dark": surface === 'dark' ? 'true' : 'false',
        "data-element": "stepList",
        children: [
            (headline || description) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$SiteSectionHeader$2f$SiteSectionHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiteSectionHeader"], {
                headline: headline,
                description: description,
                align: "center",
                dataTestId: `${dataTestId}-header`
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Molecule/StepList/StepList.tsx",
                lineNumber: 218,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$StepList$2f$StepList$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"], {
                ref: trackRef,
                children: [
                    weg && segmente.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$StepList$2f$StepList$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PathSvg"], {
                        viewBox: `0 0 ${weg.width} ${weg.height}`,
                        "aria-hidden": "true",
                        focusable: "false",
                        children: [
                            segmente.map((d, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$StepList$2f$StepList$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Segment"], {
                                    d: d,
                                    pathLength: 1,
                                    $index: index,
                                    "data-testid": `${dataTestId}-path-segment`,
                                    "data-lit": aktiv !== null && index < aktiv ? 'true' : 'false'
                                }, index, false, {
                                    fileName: "[project]/apps/web/src/app/components/Molecule/StepList/StepList.tsx",
                                    lineNumber: 229,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$StepList$2f$StepList$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Light"], {
                                d: weg.full,
                                pathLength: 1,
                                $count: steps.length,
                                "data-part": "light"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Molecule/StepList/StepList.tsx",
                                lineNumber: 238,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/app/components/Molecule/StepList/StepList.tsx",
                        lineNumber: 227,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$StepList$2f$StepList$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["List"], {
                        $orientation: orientation,
                        $count: steps.length,
                        children: steps.map((step, index)=>{
                            const text = step.renderedDescription ?? step.description;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$StepList$2f$StepList$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Step"], {
                                "data-testid": `${dataTestId}-step`,
                                "data-step": index + 1,
                                "data-active": aktiv === index ? 'true' : 'false',
                                onPointerEnter: (event)=>event.pointerType === 'mouse' && hervorheben(index),
                                onPointerLeave: ()=>hervorheben(null),
                                onFocus: ()=>hervorheben(index),
                                onBlur: ()=>hervorheben(null),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$StepList$2f$StepList$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node"], {
                                        ref: (el)=>{
                                            nodeRefs.current[index] = el;
                                        },
                                        $index: index,
                                        "data-testid": `${dataTestId}-marker`,
                                        "data-marker": step.icon ? 'icon' : 'number',
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$StepList$2f$StepList$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeSvg"], {
                                                viewBox: "0 0 100 100",
                                                "aria-hidden": "true",
                                                focusable: "false",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$StepList$2f$StepList$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeFace"], {
                                                    d: KNOTEN,
                                                    $index: index,
                                                    $goal: index === steps.length - 1
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/app/components/Molecule/StepList/StepList.tsx",
                                                    lineNumber: 264,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/components/Molecule/StepList/StepList.tsx",
                                                lineNumber: 263,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NodeMark, {
                                                icon: step.icon,
                                                index: index,
                                                count: steps.length,
                                                dataTestId: `${dataTestId}-chip`
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/components/Molecule/StepList/StepList.tsx",
                                                lineNumber: 266,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/app/components/Molecule/StepList/StepList.tsx",
                                        lineNumber: 255,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$StepList$2f$StepList$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                                        "data-part": "content",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$StepList$2f$StepList$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StepTitle"], {
                                                "data-part": "title",
                                                "data-testid": `${dataTestId}-step-title`,
                                                children: step.title
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/components/Molecule/StepList/StepList.tsx",
                                                lineNumber: 269,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            text && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$StepList$2f$StepList$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StepText"], {
                                                "data-testid": `${dataTestId}-step-description`,
                                                children: text
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/components/Molecule/StepList/StepList.tsx",
                                                lineNumber: 272,
                                                columnNumber: 28
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/app/components/Molecule/StepList/StepList.tsx",
                                        lineNumber: 268,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, index, true, {
                                fileName: "[project]/apps/web/src/app/components/Molecule/StepList/StepList.tsx",
                                lineNumber: 245,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0));
                        })
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Molecule/StepList/StepList.tsx",
                        lineNumber: 241,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/components/Molecule/StepList/StepList.tsx",
                lineNumber: 225,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Molecule/StepList/StepList.tsx",
        lineNumber: 205,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(StepList, "WWgGlcrTUqf3krQnupL7cmIoI20=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useEntranceAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEntranceAnimation"]
    ];
});
_c1 = StepList;
;
var _c, _c1;
__turbopack_context__.k.register(_c, "NodeMark");
__turbopack_context__.k.register(_c1, "StepList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/StepList/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$StepList$2f$StepList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/StepList/StepList.tsx [app-client] (ecmascript)");
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$StepList$2f$StepList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StepList"];
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/StepList/stepListTimeline.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Eintritt des Wabenwegs (#2191), Zeiten in ms ab dem ersten Sichtbarwerden.
 * Knoten i füllt sich, sobald der Strich ihn erreicht: Teilstück i − 1 endet.
 *
 * | Teil  | Beginn                 | Dauer | Inhalt                                       |
 * | ----- | ---------------------: | ----: | -------------------------------------------- |
 * | nodes | i × 90                 |   400 | blasse Knoten springen auf                   |
 * | path  | 350 + i × 550          |   550 | Teilstück i zeichnet sich (Knoten i → i + 1) |
 * | fill  | 350 + i × 550          |   350 | Knoten i füllt sich (Navy bzw. Grün)         |
 * | light | 350 + (n − 1) × 550    |  1400 | Lichtpunkt läuft den Weg einmal ab           |
 */ __turbopack_context__.s([
    "STEP_PATH_TIMING",
    ()=>STEP_PATH_TIMING,
    "stepFillDelay",
    ()=>stepFillDelay,
    "stepLightDelay",
    ()=>stepLightDelay,
    "stepNodeDelay",
    ()=>stepNodeDelay,
    "stepPathEntranceMs",
    ()=>stepPathEntranceMs,
    "stepSegmentDelay",
    ()=>stepSegmentDelay
]);
const STEP_PATH_TIMING = {
    nodes: {
        start: 0,
        duration: 400,
        stagger: 90
    },
    path: {
        start: 350,
        duration: 550
    },
    fill: {
        duration: 350
    },
    light: {
        duration: 1400
    }
};
const stepNodeDelay = (index)=>STEP_PATH_TIMING.nodes.start + index * STEP_PATH_TIMING.nodes.stagger;
const stepSegmentDelay = (index)=>STEP_PATH_TIMING.path.start + index * STEP_PATH_TIMING.path.duration;
const stepFillDelay = (index)=>stepSegmentDelay(index);
const stepLightDelay = (count)=>stepSegmentDelay(Math.max(0, count - 1));
function stepPathEntranceMs(count) {
    if (count <= 0) return 0;
    if (count === 1) return stepFillDelay(0) + STEP_PATH_TIMING.fill.duration;
    return stepLightDelay(count) + STEP_PATH_TIMING.light.duration;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/StepList/stepPathGeometry.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * #2191 „Wabenweg": Verbindung der Schrittknoten als Zickzack entlang der
 * Wabenkanten (Steigung 0,5 wie die Schrägen der Waben in lib/hex). Reine
 * Funktionen in Pixeln — die Komponente misst die Knotenmitten und legt den
 * Weg in ein SVG über die Liste.
 */ __turbopack_context__.s([
    "STEP_PATH_SLOPE",
    ()=>STEP_PATH_SLOPE,
    "STEP_PATH_TOOTH_PX",
    ()=>STEP_PATH_TOOTH_PX,
    "pathAxis",
    ()=>pathAxis,
    "stepPathFull",
    ()=>stepPathFull,
    "stepPathSegments",
    ()=>stepPathSegments,
    "zigzagSegment",
    ()=>zigzagSegment
]);
const STEP_PATH_TOOTH_PX = 20;
const STEP_PATH_SLOPE = 0.5;
const r = (n)=>Math.round(n * 100) / 100 + 0;
function pathAxis(a, b) {
    if (Math.abs(a.y - b.y) < 1) return 'x';
    if (Math.abs(a.x - b.x) < 1) return 'y';
    return null;
}
function zigzagSegment(a, b, tooth = STEP_PATH_TOOTH_PX) {
    const axis = pathAxis(a, b);
    if (!axis) return `M${r(a.x)} ${r(a.y)} L${r(b.x)} ${r(b.y)}`;
    const d = axis === 'x' ? b.x - a.x : b.y - a.y;
    const n = 2 * Math.max(1, Math.round(Math.abs(d) / (2 * tooth)));
    const step = d / n;
    const amp = Math.abs(step) * STEP_PATH_SLOPE;
    const teile = [
        `M${r(a.x)} ${r(a.y)}`
    ];
    for(let k = 1; k <= n; k++){
        const aus = k % 2 === 1 ? amp : 0;
        teile.push(axis === 'x' ? `L${r(a.x + k * step)} ${r(a.y - aus)}` : `L${r(a.x + aus)} ${r(a.y + k * step)}`);
    }
    return teile.join(' ');
}
function stepPathSegments(points, tooth = STEP_PATH_TOOTH_PX) {
    const segmente = [];
    for(let i = 0; i + 1 < points.length; i++)segmente.push(zigzagSegment(points[i], points[i + 1], tooth));
    return segmente;
}
function stepPathFull(segmente) {
    return segmente.map((s, i)=>i === 0 ? s : s.replace(/^M[^L]*/, '')).join(' ');
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/ThemeToggleButton/ThemeToggleButton.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IconSlot",
    ()=>IconSlot,
    "Root",
    ()=>Root
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
'use client';
;
const Root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "ThemeToggleButton.styles__Root",
    componentId: "sc-bd651b21-0"
})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  padding: 0;
  margin: 0;
  border: none;
  border-radius: ${({ theme })=>theme.borderRadius.icon};
  background: transparent;
  color: ${({ theme })=>`var(--header-fg, ${theme.palette.text.secondary})`};
  cursor: pointer;
  transition:
    background 0.15s ease,
    color 0.15s ease;

  &:hover,
  &:focus-visible {
    background: ${({ theme })=>theme.palette.surface.subtle};
    color: ${({ theme })=>theme.palette.default.primary};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme })=>theme.palette.default.primary};
    outline-offset: 2px;
  }

  /* #2175: Standardgröße unserer Icons */
  svg {
    width: 24px;
    height: 24px;
  }
`;
const IconSlot = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "ThemeToggleButton.styles__IconSlot",
    componentId: "sc-bd651b21-1"
})`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &[data-icon='sun'] {
    display: none;
  }

  :root[data-theme='dark'] &[data-icon='sun'] {
    display: inline-flex;
  }

  :root[data-theme='dark'] &[data-icon='moon'] {
    display: none;
  }
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/ThemeToggleButton/ThemeToggleButton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeToggleButton",
    ()=>ThemeToggleButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$ThemeMode$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/ThemeMode.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconMoon$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconMoon/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconMoon$2f$IconMoon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconMoon/IconMoon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconSun$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconSun/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconSun$2f$IconSun$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconSun/IconSun.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$ThemeToggleButton$2f$ThemeToggleButton$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/ThemeToggleButton/ThemeToggleButton.styles.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
;
/**
 * #2164: Hell/Dunkel-Schalter als Icon-Knopf (Kopf für Besucher und neben dem
 * Profilbild). `role="switch"`, `aria-checked` = dunkel.
 *
 * Das Symbol zeigt das **Ziel** des Klicks, nicht den Zustand: im hellen Modus
 * der Mond (→ dunkel), im dunklen die Sonne (→ hell) — wie bei den meisten
 * Seiten mit solchem Knopf. Den Zustand tragen `aria-checked` und `data-mode`.
 *
 * #2175: Beide Symbole stehen im Markup, sichtbar ist eines per CSS über
 * `data-theme` an `<html>` — das setzt das Inline-Skript vor dem ersten
 * Zeichnen. Der Server kennt den Modus nicht (rendert hell); vorher sprang
 * das Symbol im Dunkelmodus nach der Hydration vom Mond zur Sonne.
 */ const ThemeToggleButton = ({ value, onChange, ariaLabel, title, dataTestId = 'theme-toggle-button', className })=>{
    const isDark = value === __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$ThemeMode$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeMode"].DARK;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$ThemeToggleButton$2f$ThemeToggleButton$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        type: "button",
        role: "switch",
        "aria-checked": isDark,
        "aria-label": ariaLabel,
        title: title,
        className: className,
        "data-testid": dataTestId,
        "data-mode": value,
        onClick: ()=>onChange(isDark ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$ThemeMode$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeMode"].LIGHT : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$ThemeMode$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeMode"].DARK),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$ThemeToggleButton$2f$ThemeToggleButton$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconSlot"], {
                "data-icon": "moon",
                "data-testid": `${dataTestId}-icon-moon`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconMoon$2f$IconMoon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconMoon"], {}, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Molecule/ThemeToggleButton/ThemeToggleButton.tsx",
                    lineNumber: 59,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Molecule/ThemeToggleButton/ThemeToggleButton.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$ThemeToggleButton$2f$ThemeToggleButton$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconSlot"], {
                "data-icon": "sun",
                "data-testid": `${dataTestId}-icon-sun`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconSun$2f$IconSun$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconSun"], {}, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Molecule/ThemeToggleButton/ThemeToggleButton.tsx",
                    lineNumber: 62,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Molecule/ThemeToggleButton/ThemeToggleButton.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Molecule/ThemeToggleButton/ThemeToggleButton.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = ThemeToggleButton;
;
var _c;
__turbopack_context__.k.register(_c, "ThemeToggleButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/ThemeToggleButton/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$ThemeToggleButton$2f$ThemeToggleButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/ThemeToggleButton/ThemeToggleButton.tsx [app-client] (ecmascript)");
;
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$ThemeToggleButton$2f$ThemeToggleButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeToggleButton"];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);})()

//# sourceMappingURL=apps_web_src_app_components_Molecule_04y75xkeymja4._.js.map