(()=>{"use strict";(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/CmsBlockRenderer.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HiddenPageHeading",
    ()=>HiddenPageHeading,
    "Root",
    ()=>Root
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/site.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$mixins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/mixins.ts [app-client] (ecmascript)");
'use client';
;
;
;
const Root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "CmsBlockRenderer.styles__Root",
    componentId: "sc-21371517-0"
})`
  width: 100%;

  /*
   * Abstand der Rasterblöcke. Er lag früher auf einem Trage-Div je Block; das
   * ist mit #1178 entfallen, damit im Markup ein Element weniger je Block
   * steht. Jetzt trägt ihn die Spalte, die den Block ohnehin umschließt.
   *
   * Nur die Spalten der eigenen Reihen: eine Blockansicht darf intern eigene
   * Rows mitbringen, die hier nicht mitzählen. Die Blockkennung grenzt sie ab.
   *
   * #1199: Abstand je Abschnitt (seit #2187 aus der Theme-Skala, siehe
   * siteSection), als Innenabstand der Spalte (Außenabstände der Flex-Spalten
   * fielen nicht zusammen, der Innenabstand ergibt dieselben Lücken).
   *
   * #1954: ohne Kind-Kombinator — Reihen mit Fläche stehen in einem SiteBand.
   * Spalten der Ansichten tragen keine Blockkennung und zählen weiter nicht.
   */
  [data-testid='Row-root'] > [data-block-id] {
    ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteSection"]}
  }

  /*
   * #1955: Das Zahlenband reserviert über und unter sich schon die Randzone
   * der Waben (SiteBand, hexEdgeInset) — mit vollem Abschnittsabstand dazu
   * stünden die Zahlen über 250 px unter der Kante. Auf einem Band nur der
   * halbe Abstand.
   */
  [data-surface] [data-testid='Row-root'] > [data-block-type='stats'] {
    ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteSectionCompact"]}
  }

  /*
   * #2195: Der Leitsatz steht direkt unter dem Seitenkopf — der volle
   * Abschnittsabstand (128 px oben und unten) ließ ihn wie einen vergessenen
   * Absatz schweben. Halber Abstand aus dem Theme.
   */
  [data-testid='Row-root'] > [data-block-variant='lead'] {
    ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteSectionCompact"]}
  }
`;
const HiddenPageHeading = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].h1.withConfig({
    displayName: "CmsBlockRenderer.styles__HiddenPageHeading",
    componentId: "sc-21371517-1"
})`
  ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$mixins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["visuallyHidden"]}
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/CmsBlockRenderer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CmsBlockRenderer",
    ()=>CmsBlockRenderer,
    "default",
    ()=>__TURBOPACK__default__export__,
    "groupCmsBlocks",
    ()=>groupCmsBlocks
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Grid$2f$Row$2f$Row$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Grid/Row/Row.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Grid$2f$Col$2f$Col$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Grid/Col/Col.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/cmsBlocks/registry.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$localize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/cmsBlocks/localize.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$edges$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/cmsBlocks/edges.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$surface$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/cmsBlocks/surface.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$headings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/cmsBlocks/headings.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$links$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/cmsBlocks/links.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/lib/hex/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$edge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/hex/edge.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$markdownSlots$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/cmsBlocks/markdownSlots.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$SiteBand$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/SiteBand/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$SiteBand$2f$SiteBand$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/SiteBand/SiteBand.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$CmsBlockRenderer$2f$cmsBlockCatalog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/cmsBlockCatalog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$CmsBlockRenderer$2f$CmsBlockRenderer$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/CmsBlockRenderer.styles.ts [app-client] (ecmascript)");
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
function groupCmsBlocks(blocks) {
    const groups = [];
    let offeneReihe = null;
    for (const block of blocks){
        if (__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CMS_BLOCK_REGISTRY"][block.type].fullBleed) {
            offeneReihe = null;
            groups.push({
                kind: 'bare',
                block
            });
            continue;
        }
        if (block.layout) {
            if (!offeneReihe) {
                offeneReihe = [];
                groups.push({
                    kind: 'row',
                    blocks: offeneReihe,
                    surface: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$surface$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cmsBlockSurfaceOf"])(block)
                });
            }
            offeneReihe.push(block);
            continue;
        }
        offeneReihe = null;
        groups.push({
            kind: 'row',
            blocks: [
                block
            ],
            surface: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$surface$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cmsBlockSurfaceOf"])(block)
        });
    }
    return groups;
}
/**
 * Die Kennung eines Blocks im Markup — am Element, das den Block ohnehin trägt.
 * #2195: dazu seine Darstellung (`data-block-variant`), falls gesetzt.
 * #2175: dazu seine Farbe nach außen (`data-header-bg`, cmsBlockBand); der
 * durchsichtige Header wählt danach seine Schrift. Ohne feste Farbe (Bild) fehlt sie.
 */ const blockAttributes = (block)=>{
    const band = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$edges$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cmsBlockBand"])(block);
    // #2195: Darstellung des Blocks (Fließtext als Leitsatz) — der Abstand der Spalte folgt ihr
    const variant = block.props.variant;
    return {
        'data-block-type': block.type,
        'data-block-id': block.id,
        ...typeof variant === 'string' ? {
            'data-block-variant': variant
        } : {},
        ...band ? {
            'data-header-bg': band
        } : {}
    };
};
const blockTestId = (block)=>`cms-block-${block.id}`;
function BlockView({ block, locale, edges, pageHeading, first, markdown }) {
    // Der Katalog ist je Typ streng typisiert; hier trifft ein beliebiger Block
    // auf seine Ansicht, deshalb die Weitung auf die allgemeine Props-Form.
    const View = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$CmsBlockRenderer$2f$cmsBlockCatalog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CMS_BLOCK_CATALOG"][block.type];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(View, {
        block: block,
        locale: locale,
        dataTestId: blockTestId(block),
        // Nur vollbreit: dort steht keine Spalte über dem Block, also setzt die
        // Ansicht die Kennung auf ihre eigene Wurzel. Im Raster trägt sie die
        // Spalte — sonst stünde die Kennung doppelt im Markup.
        dataAttributes: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CMS_BLOCK_REGISTRY"][block.type].fullBleed ? blockAttributes(block) : undefined,
        edges: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$edge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasEdges"])(edges) ? edges : undefined,
        pageHeading: pageHeading,
        first: first || undefined,
        markdown: markdown
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/CmsBlockRenderer.tsx",
        lineNumber: 152,
        columnNumber: 5
    }, this);
}
_c = BlockView;
/** Eine Reihe des Rasters; mit Fläche oder Rand auf einem SiteBand (#1954). */ function BlockRow({ group, locale, edgesById, headingId, firstId, markdown }) {
    const erster = group.blocks[0];
    const bandEdges = erster ? edgesById.get(erster.id) : undefined;
    const aufBand = !!erster && (group.surface !== 'white' || (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$edge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasEdges"])(bandEdges));
    const row = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Grid$2f$Row$2f$Row$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Row"], {
        children: group.blocks.map((block)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Grid$2f$Col$2f$Col$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Col"], {
                dataTestId: blockTestId(block),
                dataAttributes: blockAttributes(block),
                xs: block.layout?.xs ?? 12,
                sm: block.layout?.sm,
                md: block.layout?.md,
                lg: block.layout?.lg,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BlockView, {
                    block: block,
                    locale: locale,
                    // Auf dem Band zeichnet das Band den Rand, nicht die Ansicht
                    edges: aufBand ? undefined : edgesById.get(block.id),
                    pageHeading: block.id === headingId,
                    first: block.id === firstId,
                    markdown: markdown
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/CmsBlockRenderer.tsx",
                    lineNumber: 199,
                    columnNumber: 11
                }, this)
            }, block.id, false, {
                fileName: "[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/CmsBlockRenderer.tsx",
                lineNumber: 190,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/CmsBlockRenderer.tsx",
        lineNumber: 188,
        columnNumber: 5
    }, this);
    if (!aufBand || !erster) return row;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$SiteBand$2f$SiteBand$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiteBand"], {
        surface: group.surface,
        edges: bandEdges,
        headerBg: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$edges$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cmsBlockBand"])(erster),
        dataTestId: `${blockTestId(erster)}-band`,
        children: row
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/CmsBlockRenderer.tsx",
        lineNumber: 214,
        columnNumber: 5
    }, this);
}
_c1 = BlockRow;
const CmsBlockRenderer = ({ blocks: rohBloecke, locale, title, markdown, pageHeadingIds, dataTestId = 'cms-page' })=>{
    _s();
    const blocks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CmsBlockRenderer.useMemo[blocks]": ()=>rohBloecke.map(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$links$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withTrailingSlashLinks"])
    }["CmsBlockRenderer.useMemo[blocks]"], [
        rohBloecke
    ]);
    const groups = groupCmsBlocks(blocks);
    const edgesById = new Map(blocks.map((block, index)=>[
            block.id,
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$edges$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveBlockEdges"])(blocks, index)
        ]));
    const firstId = blocks[0]?.id;
    // #1563: vom Server bestimmt, wenn er den Fließtext gerendert hat (dessen Quelltext ist hier leer)
    // #2083: nur in den Sprachen der Anfrage bestimmt — sonst die erste vorhandene
    const vomServer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$markdownSlots$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pickForLocale"])(pageHeadingIds, locale);
    const headingId = vomServer !== undefined ? vomServer : (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$headings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveCmsPageHeadingBlockId"])(blocks, locale);
    const verdeckterTitel = headingId === null && title ? title.trim() : '';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$CmsBlockRenderer$2f$CmsBlockRenderer$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-testid": dataTestId,
        "data-locale": locale,
        "data-block-count": blocks.length,
        "data-block-types": (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$localize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cmsBlockTypesOf"])(blocks).join(','),
        "data-page-heading": headingId ?? (verdeckterTitel ? 'title' : ''),
        children: [
            verdeckterTitel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$CmsBlockRenderer$2f$CmsBlockRenderer$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiddenPageHeading"], {
                "data-testid": `${dataTestId}-title`,
                children: verdeckterTitel
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/CmsBlockRenderer.tsx",
                lineNumber: 254,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            groups.map((group, index)=>group.kind === 'bare' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BlockView, {
                    block: group.block,
                    locale: locale,
                    edges: edgesById.get(group.block.id),
                    pageHeading: group.block.id === headingId,
                    first: group.block.id === firstId,
                    markdown: markdown
                }, group.block.id, false, {
                    fileName: "[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/CmsBlockRenderer.tsx",
                    lineNumber: 258,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BlockRow, {
                    group: group,
                    locale: locale,
                    edgesById: edgesById,
                    headingId: headingId,
                    firstId: firstId,
                    markdown: markdown
                }, `row-${index}`, false, {
                    fileName: "[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/CmsBlockRenderer.tsx",
                    lineNumber: 268,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/CmsBlockRenderer.tsx",
        lineNumber: 246,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(CmsBlockRenderer, "nd6C4hmDbs2/EoxuL7agDZQb4A4=");
_c2 = CmsBlockRenderer;
const __TURBOPACK__default__export__ = CmsBlockRenderer;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "BlockView");
__turbopack_context__.k.register(_c1, "BlockRow");
__turbopack_context__.k.register(_c2, "CmsBlockRenderer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/CardGridBlock.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CardGridBlock",
    ()=>CardGridBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$CardGrid$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/CardGrid/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$CardGrid$2f$CardGrid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/CardGrid/CardGrid.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$CardSpotlight$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/CardSpotlight/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$CardSpotlight$2f$CardSpotlight$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/CardSpotlight/CardSpotlight.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$FeatureCard$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/FeatureCard/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$FeatureCard$2f$FeatureCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/FeatureCard/FeatureCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexTileLinks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/HexTileLinks/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexTileLinks$2f$HexTileLinks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/HexTileLinks/HexTileLinks.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$cardGrid2194$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/cmsBlocks/cardGrid2194.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$links$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/cmsBlocks/links.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$localize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/cmsBlocks/localize.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$CmsBlockRenderer$2f$blocks$2f$cmsAnimationReport$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/cmsAnimationReport.tsx [app-client] (ecmascript)");
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
/** Raster aus FeatureCards; `effects` fehlt im Ersatz (ohne Bewegung und Licht) */ function Raster({ block, locale, dataTestId, effects }) {
    const { headline, description, columns, cards } = block.props;
    const wide = cards.flatMap((card, index)=>card.accent ? [
            index
        ] : []);
    // #2197 Prüfkatalog: trägt eine Karte einen Preis, führen alle Ziele über einen Button
    const katalog = cards.some((card)=>card.price);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$CardGrid$2f$CardGrid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardGrid"], {
        headline: headline ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$localize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cmsText"])(headline, locale) : undefined,
        description: description ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$localize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cmsText"])(description, locale) : undefined,
        headerAlign: "center",
        columns: columns,
        balanced: true,
        wideItems: wide,
        reveal: Boolean(effects),
        onFirstView: effects?.onView,
        dataTestId: `${dataTestId}-grid`,
        children: cards.map((card, index)=>{
            // #2018: Karte ohne gültiges Ziel bleibt unverlinkt
            const ziel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$links$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cmsHref"])(card.cta?.href);
            const text = card.description ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$localize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cmsText"])(card.description, locale) : undefined;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$FeatureCard$2f$FeatureCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FeatureCard"], {
                title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$localize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cmsText"])(card.title, locale),
                description: text,
                icon: card.icon,
                image: card.image,
                ctaText: card.cta && ziel ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$localize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cmsText"])(card.cta.label, locale) : undefined,
                ctaHref: ziel,
                price: card.price ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$localize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cmsText"])(card.price, locale) : undefined,
                actionLabel: katalog && card.cta && ziel ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$localize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cmsText"])(card.cta.label, locale) : undefined,
                compact: !text && !card.image,
                accent: Boolean(card.accent),
                stretched: true,
                drawIcon: Boolean(effects),
                layer: effects && !card.accent ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$CardSpotlight$2f$CardSpotlight$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardSpotlight"], {
                    onFirstHover: effects.onHover,
                    onLinkClick: effects.onLink,
                    dataTestId: `${dataTestId}-card-${index}-spotlight`
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/CardGridBlock.tsx",
                    lineNumber: 61,
                    columnNumber: 17
                }, this) : undefined,
                dataTestId: `${dataTestId}-card-${index}`
            }, index, false, {
                fileName: "[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/CardGridBlock.tsx",
                lineNumber: 45,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/CardGridBlock.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
_c = Raster;
const CardGridBlock = (props)=>{
    _s();
    const { block, locale, dataTestId } = props;
    const melden = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$CmsBlockRenderer$2f$blocks$2f$cmsAnimationReport$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCmsAnimationReport"])('cardGrid');
    const onView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CardGridBlock.useCallback[onView]": ()=>melden('view')
    }["CardGridBlock.useCallback[onView]"], [
        melden
    ]);
    const onHover = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CardGridBlock.useCallback[onHover]": ()=>melden('hover')
    }["CardGridBlock.useCallback[onHover]"], [
        melden
    ]);
    const onLink = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CardGridBlock.useCallback[onLink]": ()=>melden('cta')
    }["CardGridBlock.useCallback[onLink]"], [
        melden
    ]);
    const { headline, description, cards } = block.props;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$cardGrid2194$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHexTileGrid"])(cards, (href)=>Boolean((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$links$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cmsHref"])(href)))) {
        const items = cards.map((card)=>({
                title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$localize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cmsText"])(card.title, locale),
                href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$links$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cmsHref"])(card.cta?.href),
                icon: card.icon
            }));
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexTileLinks$2f$HexTileLinks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexTileLinks"], {
            headline: headline ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$localize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cmsText"])(headline, locale) : undefined,
            description: description ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$localize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cmsText"])(description, locale) : undefined,
            items: items,
            onFirstHover: onHover,
            onLinkClick: onLink,
            dataTestId: `${dataTestId}-tiles`
        }, void 0, false, {
            fileName: "[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/CardGridBlock.tsx",
            lineNumber: 106,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$CmsBlockRenderer$2f$blocks$2f$cmsAnimationReport$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CmsAnimationBoundary"], {
        element: "cardGrid",
        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Raster, {
            ...props
        }, void 0, false, {
            fileName: "[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/CardGridBlock.tsx",
            lineNumber: 118,
            columnNumber: 56
        }, ("TURBOPACK compile-time value", void 0)),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Raster, {
            ...props,
            effects: {
                onView,
                onHover,
                onLink
            }
        }, void 0, false, {
            fileName: "[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/CardGridBlock.tsx",
            lineNumber: 119,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/CardGridBlock.tsx",
        lineNumber: 118,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(CardGridBlock, "OL4l5svJaIIvdDb/51qtRVEDF+A=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$CmsBlockRenderer$2f$blocks$2f$cmsAnimationReport$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCmsAnimationReport"]
    ];
});
_c1 = CardGridBlock;
var _c, _c1;
__turbopack_context__.k.register(_c, "Raster");
__turbopack_context__.k.register(_c1, "CardGridBlock");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/ComparisonBlock.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ComparisonBlock",
    ()=>ComparisonBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$ComparisonList$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/ComparisonList/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$ComparisonList$2f$ComparisonList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/ComparisonList/ComparisonList.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$localize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/cmsBlocks/localize.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$surface$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/cmsBlocks/surface.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$CmsBlockRenderer$2f$blocks$2f$cmsAnimationReport$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/cmsAnimationReport.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const ComparisonBlock = ({ block, locale, dataTestId })=>{
    _s();
    const { headline, description, leftTitle, rightTitle, items } = block.props;
    const melden = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$CmsBlockRenderer$2f$blocks$2f$cmsAnimationReport$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCmsAnimationReport"])('comparison');
    const gesehen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ComparisonBlock.useCallback[gesehen]": ()=>melden('view')
    }["ComparisonBlock.useCallback[gesehen]"], [
        melden
    ]);
    const nachgespielt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ComparisonBlock.useCallback[nachgespielt]": ()=>melden('replay')
    }["ComparisonBlock.useCallback[nachgespielt]"], [
        melden
    ]);
    const paare = items.map((item)=>({
            problem: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$localize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cmsText"])(item.problem, locale),
            solution: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$localize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cmsText"])(item.solution, locale)
        }));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$CmsBlockRenderer$2f$blocks$2f$cmsAnimationReport$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CmsAnimationBoundary"], {
        element: "comparison",
        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
            "data-testid": `${dataTestId}-comparison-fallback`,
            children: paare.map((paar, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    children: [
                        paar.problem,
                        " → ",
                        paar.solution
                    ]
                }, index, true, {
                    fileName: "[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/ComparisonBlock.tsx",
                    lineNumber: 39,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0)))
        }, void 0, false, {
            fileName: "[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/ComparisonBlock.tsx",
            lineNumber: 37,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0)),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$ComparisonList$2f$ComparisonList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComparisonList"], {
            headline: headline ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$localize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cmsText"])(headline, locale) : undefined,
            description: description ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$localize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cmsText"])(description, locale) : undefined,
            problemTitle: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$localize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cmsText"])(leftTitle, locale),
            solutionTitle: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$localize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cmsText"])(rightTitle, locale),
            pairs: paare,
            surface: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$surface$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cmsBlockSurfaceOf"])(block),
            onFirstView: gesehen,
            onFirstReplay: nachgespielt,
            dataTestId: `${dataTestId}-comparison`
        }, void 0, false, {
            fileName: "[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/ComparisonBlock.tsx",
            lineNumber: 46,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/ComparisonBlock.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ComparisonBlock, "/10oZ9v0QE8KnXOCkfQQ1jRUGWE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$CmsBlockRenderer$2f$blocks$2f$cmsAnimationReport$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCmsAnimationReport"]
    ];
});
_c = ComparisonBlock;
var _c;
__turbopack_context__.k.register(_c, "ComparisonBlock");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/CtaBlock.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CtaBlock",
    ()=>CtaBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$CtaSection$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/CtaSection/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$CtaSection$2f$CtaSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/CtaSection/CtaSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$links$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/cmsBlocks/links.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$localize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/cmsBlocks/localize.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$CmsBlockRenderer$2f$blocks$2f$cmsAnimationReport$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/cmsAnimationReport.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const CtaBlock = ({ block, locale, dataTestId, dataAttributes, edges })=>{
    _s();
    const { headline, button, icon } = block.props;
    const melden = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$CmsBlockRenderer$2f$blocks$2f$cmsAnimationReport$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCmsAnimationReport"])('ctaBand');
    const gesehen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CtaBlock.useCallback[gesehen]": ()=>melden('view')
    }["CtaBlock.useCallback[gesehen]"], [
        melden
    ]);
    const beruehrt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CtaBlock.useCallback[beruehrt]": ()=>melden('hover')
    }["CtaBlock.useCallback[beruehrt]"], [
        melden
    ]);
    const geklickt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CtaBlock.useCallback[geklickt]": ()=>melden('cta')
    }["CtaBlock.useCallback[geklickt]"], [
        melden
    ]);
    const common = {
        headline: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$localize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cmsText"])(headline, locale),
        buttonText: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$localize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cmsText"])(button.label, locale),
        buttonHref: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$links$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cmsHref"])(button.href),
        icon,
        dataTestId,
        dataAttributes,
        edges
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$CmsBlockRenderer$2f$blocks$2f$cmsAnimationReport$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CmsAnimationBoundary"], {
        element: "ctaBand",
        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$CtaSection$2f$CtaSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CtaSection"], {
            ...common,
            motion: false
        }, void 0, false, {
            fileName: "[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/CtaBlock.tsx",
            lineNumber: 41,
            columnNumber: 55
        }, ("TURBOPACK compile-time value", void 0)),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$CtaSection$2f$CtaSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CtaSection"], {
            ...common,
            onFirstView: gesehen,
            onFirstHover: beruehrt,
            onCtaClick: geklickt
        }, void 0, false, {
            fileName: "[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/CtaBlock.tsx",
            lineNumber: 42,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/CtaBlock.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(CtaBlock, "mB16Jx1z4KCRqIcvAT99sxV7epE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$CmsBlockRenderer$2f$blocks$2f$cmsAnimationReport$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCmsAnimationReport"]
    ];
});
_c = CtaBlock;
var _c;
__turbopack_context__.k.register(_c, "CtaBlock");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/FaqBlock.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FaqBlock",
    ()=>FaqBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$SiteSectionHeader$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/SiteSectionHeader/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$SiteSectionHeader$2f$SiteSectionHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/SiteSectionHeader/SiteSectionHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$SiteFaqList$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/SiteFaqList/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$SiteFaqList$2f$SiteFaqList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/SiteFaqList/SiteFaqList.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$SiteMarkdown$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/SiteMarkdown/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$SiteMarkdown$2f$SiteMarkdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/SiteMarkdown/SiteMarkdown.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$localize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/cmsBlocks/localize.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$markdownSlots$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/cmsBlocks/markdownSlots.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$CmsBlockRenderer$2f$blocks$2f$blocks$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/blocks.styles.ts [app-client] (ecmascript)");
;
;
;
;
;
;
;
const FaqBlock = ({ block, locale, dataTestId, pageHeading, markdown })=>{
    const { headline, description, items } = block.props;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$CmsBlockRenderer$2f$blocks$2f$blocks$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaqColumn"], {
        "data-count": items.length,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$SiteSectionHeader$2f$SiteSectionHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiteSectionHeader"], {
                headline: headline ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$localize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cmsText"])(headline, locale) : undefined,
                // #1563: oben auf der Seite die Seitenüberschrift (h1 im Aussehen der h2)
                headingLevel: pageHeading ? 1 : 2,
                description: description ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$localize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cmsText"])(description, locale) : undefined,
                align: "center",
                dataTestId: `${dataTestId}-header`
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/FaqBlock.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$SiteFaqList$2f$SiteFaqList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiteFaqList"], {
                dataTestId: dataTestId,
                items: items.map((item, index)=>({
                        question: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$localize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cmsText"])(item.question, locale),
                        answer: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$SiteMarkdown$2f$SiteMarkdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiteMarkdown"], {
                            content: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$localize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cmsText"])(item.answer, locale),
                            rendered: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$markdownSlots$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cmsMarkdownOf"])(markdown, locale, block.id, 'answer', index),
                            dataTestId: `${dataTestId}-answer-${index}`
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/FaqBlock.tsx",
                            lineNumber: 41,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/FaqBlock.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/FaqBlock.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = FaqBlock;
var _c;
__turbopack_context__.k.register(_c, "FaqBlock");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/MediaTextBlock.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MediaTextBlock",
    ()=>MediaTextBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$MediaText$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/MediaText/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$MediaText$2f$MediaText$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/MediaText/MediaText.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Headline$2f$Headline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Headline/Headline.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$links$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/cmsBlocks/links.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$localize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/cmsBlocks/localize.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$markdownSlots$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/cmsBlocks/markdownSlots.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$CmsBlockRenderer$2f$blocks$2f$cmsAnimationReport$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/cmsAnimationReport.tsx [app-client] (ecmascript)");
;
;
;
;
;
;
;
const MediaTextBlock = ({ block, locale, dataTestId, pageHeading, first, markdown })=>{
    const { headline, paragraphs, image, imagePosition, imageShape, cta, highlight } = block.props;
    const ansicht = (form)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$MediaText$2f$MediaText$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaText"], {
            headline: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$localize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cmsText"])(headline, locale),
            paragraphs: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$localize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cmsTexts"])(paragraphs, locale),
            renderedParagraphs: markdown ? paragraphs.map((_, index)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$markdownSlots$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cmsMarkdownOf"])(markdown, locale, block.id, 'paragraph', index)) : undefined,
            imageSrc: image?.src,
            imageAlt: image?.alt ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$localize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cmsText"])(image.alt, locale) : undefined,
            imagePosition: imagePosition,
            imageShape: form,
            imagePriority: first,
            // #2018: Knopf nur mit gültigem Ziel
            ctaText: cta && (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$links$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cmsHref"])(cta.href) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$localize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cmsText"])(cta.label, locale) : undefined,
            ctaHref: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$links$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cmsHref"])(cta?.href),
            highlight: highlight,
            // #1563: oben auf der Seite die Seitenüberschrift — h1 im Aussehen der h2
            headlineImportance: pageHeading ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Headline$2f$Headline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeadlineImportances"].h1 : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Headline$2f$Headline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeadlineImportances"].h2,
            dataTestId: `${dataTestId}-media-text`
        }, void 0, false, {
            fileName: "[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/MediaTextBlock.tsx",
            lineNumber: 32,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0));
    if (imageShape !== 'hex') return ansicht(imageShape);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$CmsBlockRenderer$2f$blocks$2f$cmsAnimationReport$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CmsAnimationBoundary"], {
        element: "mediaText",
        fallback: ansicht('rounded'),
        children: ansicht('hex')
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/MediaTextBlock.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = MediaTextBlock;
var _c;
__turbopack_context__.k.register(_c, "MediaTextBlock");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/NewsTeaserBlock.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NewsTeaserBlock",
    ()=>NewsTeaserBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$SiteSectionHeader$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/SiteSectionHeader/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$SiteSectionHeader$2f$SiteSectionHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/SiteSectionHeader/SiteSectionHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$NewsCard$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/NewsCard/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$NewsCard$2f$NewsCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/NewsCard/NewsCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$LinkButton$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/LinkButton/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Button$2f$Button$2e$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Button/Button.types.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconArrowRight$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconArrowRight/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$links$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/cmsBlocks/links.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$localize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/cmsBlocks/localize.ts [app-client] (ecmascript)");
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
/** Die ersten zwei Karten nehmen je die halbe Breite ein, alle weiteren ein Drittel. */ const GROSSE_KARTEN = 2;
const NewsTeaserBlock = ({ block, locale, dataTestId, pageHeading })=>{
    _s();
    const { tr } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useClientTranslation"])();
    const { headline, description, items } = block.props;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Root, {
        "data-testid": `${dataTestId}-grid`,
        "data-columns": 6,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$SiteSectionHeader$2f$SiteSectionHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiteSectionHeader"], {
                headline: headline ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$localize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cmsText"])(headline, locale) : undefined,
                // #1563: oben auf der Seite die Seitenüberschrift (h1 im Aussehen der h2)
                headingLevel: pageHeading ? 1 : 2,
                // #2187: Blocküberschrift zentriert (Querschnittsregel)
                align: "center",
                description: description ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$localize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cmsText"])(description, locale) : undefined,
                dataTestId: `${dataTestId}-grid-header`
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/NewsTeaserBlock.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Grid, {
                "data-testid": `${dataTestId}-grid-list`,
                "data-count": items.length,
                children: items.map((item, index)=>{
                    const gross = index < GROSSE_KARTEN;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Item, {
                        $gross: gross,
                        "data-size": gross ? 'large' : 'small',
                        "data-testid": `${dataTestId}-grid-item`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$NewsCard$2f$NewsCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NewsCard"], {
                            headline: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$localize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cmsText"])(item.headline, locale),
                            href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$links$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cmsHref"])(item.href),
                            imageUrl: item.imageUrl,
                            imageSizes: gross ? '(max-width: 768px) 100vw, 50vw' : '(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw',
                            date: item.date ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$localize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCmsDate"])(item.date, locale) : undefined,
                            dateBadge: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$localize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCmsDateBadge"])(item.date, locale),
                            description: item.description ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$localize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cmsText"])(item.description, locale) : undefined,
                            tags: item.tags ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$localize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cmsTexts"])(item.tags, locale) : undefined,
                            dataTestId: `${dataTestId}-item-${index}`
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/NewsTeaserBlock.tsx",
                            lineNumber: 54,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    }, index, false, {
                        fileName: "[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/NewsTeaserBlock.tsx",
                        lineNumber: 48,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0));
                })
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/NewsTeaserBlock.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(More, {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$LinkButton$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/news",
                    modifier: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Button$2f$Button$2e$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ButtonModifier"].TERTIARY,
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconArrowRight$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/NewsTeaserBlock.tsx",
                        lineNumber: 77,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    iconAlign: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Button$2f$Button$2e$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconAligns"].RIGHT,
                    dataTestId: `${dataTestId}-all`,
                    children: tr('cms.newsTeaser.allNews', {
                        defaultValue: 'Aktuelle Nachrichten'
                    })
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/NewsTeaserBlock.tsx",
                    lineNumber: 74,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/NewsTeaserBlock.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/NewsTeaserBlock.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(NewsTeaserBlock, "A48qdLdlHx0As3VD+PF2fl+BV48=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useClientTranslation"]
    ];
});
_c = NewsTeaserBlock;
/* Kopf und Raster: space-y-8 der Quelle */ const Root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "NewsTeaserBlock__Root",
    componentId: "sc-f46a5f0-0"
})`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
_c1 = Root;
/** Seitenverhältnis der Kartenbilder (NewsCard ImageWrapper) */ const BILD_HOEHE_ZU_BREITE = 396 / 704;
const Grid = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ul.withConfig({
    displayName: "NewsTeaserBlock__Grid",
    componentId: "sc-f46a5f0-1"
})`
  --gap: ${({ theme })=>theme.margin.small};
  /* #2202: Breite des Rasters für die gemeinsame Bildhöhe (cqw) */
  container-type: inline-size;
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: var(--gap);
  margin: 0;
  padding: 0;
  list-style: none;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(6, minmax(0, 1fr));

    /* #2202: alle Bilder so hoch wie die der kleinen Karten (ein Drittel der
       Breite im Seitenverhältnis) — die großen Karten schneiden breiter zu,
       die Bildkante springt zwischen erster und zweiter Reihe nicht mehr. */
    [data-card-image] {
      aspect-ratio: auto;
      height: calc((100cqw - 2 * var(--gap)) / 3 * ${BILD_HOEHE_ZU_BREITE});
    }
  }
`;
_c2 = Grid;
/* sm:col-span-2 md:col-span-3 für die großen, md:col-span-2 für die übrigen Karten */ const Item = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].li.withConfig({
    displayName: "NewsTeaserBlock__Item",
    componentId: "sc-f46a5f0-2"
})`
  min-width: 0;

  @media (min-width: 640px) {
    grid-column: span ${({ $gross })=>$gross ? 2 : 1};
  }

  @media (min-width: 768px) {
    grid-column: span ${({ $gross })=>$gross ? 3 : 2};
  }
`;
_c3 = Item;
/* text-center !mt-8 md:!mt-16 — 32 px liefert der Abstand von Root, ab md 32 px dazu */ const More = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "NewsTeaserBlock__More",
    componentId: "sc-f46a5f0-3"
})`
  text-align: center;

  @media (min-width: 768px) {
    margin-top: 32px;
  }
`;
_c4 = More;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "NewsTeaserBlock");
__turbopack_context__.k.register(_c1, "Root");
__turbopack_context__.k.register(_c2, "Grid");
__turbopack_context__.k.register(_c3, "Item");
__turbopack_context__.k.register(_c4, "More");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/PartnerLogosBlock.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PartnerLogosBlock",
    ()=>PartnerLogosBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$CardGrid$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/CardGrid/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$CardGrid$2f$CardGrid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/CardGrid/CardGrid.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexLogoWall$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/HexLogoWall/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexLogoWall$2f$HexLogoWall$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/HexLogoWall/HexLogoWall.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PartnerCard$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/PartnerCard/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PartnerCard$2f$PartnerCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/PartnerCard/PartnerCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PartnerGroup$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/PartnerGroup/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PartnerGroup$2f$PartnerGroup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/PartnerGroup/PartnerGroup.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$localize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/cmsBlocks/localize.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$CmsBlockRenderer$2f$blocks$2f$cmsAnimationReport$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/cmsAnimationReport.tsx [app-client] (ecmascript)");
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
/** Liegende Karten — Partner mit Kurzbeschreibung; zugleich der Ersatz ohne Bewegung */ function Karten({ block, locale, dataTestId }) {
    const { headline, description, partners } = block.props;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$CardGrid$2f$CardGrid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardGrid"], {
        headline: headline ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$localize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cmsText"])(headline, locale) : undefined,
        description: description ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$localize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cmsText"])(description, locale) : undefined,
        // #2199 (Abnahme 29.10.): Blocküberschriften zentriert
        headerAlign: "center",
        columns: 2,
        dataTestId: `${dataTestId}-grid`,
        children: partners.map((partner, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PartnerCard$2f$PartnerCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PartnerCard"], {
                companyName: partner.companyName,
                logoUrl: partner.logoUrl,
                description: partner.description ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$localize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cmsText"])(partner.description, locale) : undefined,
                websiteUrl: partner.websiteUrl,
                role: partner.role ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$localize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cmsText"])(partner.role, locale) : undefined,
                variant: "row",
                dataTestId: `${dataTestId}-partner-${index}`
            }, index, false, {
                fileName: "[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/PartnerLogosBlock.tsx",
                lineNumber: 27,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/PartnerLogosBlock.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_c = Karten;
const PartnerLogosBlock = (props)=>{
    _s();
    const { block, locale, dataTestId } = props;
    const { headline, description, columns, partners, variant, surface } = block.props;
    const melden = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$CmsBlockRenderer$2f$blocks$2f$cmsAnimationReport$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCmsAnimationReport"])('partnerLogos');
    const gesehen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PartnerLogosBlock.useCallback[gesehen]": ()=>melden('view')
    }["PartnerLogosBlock.useCallback[gesehen]"], [
        melden
    ]);
    const gehovert = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PartnerLogosBlock.useCallback[gehovert]": ()=>melden('hover')
    }["PartnerLogosBlock.useCallback[gehovert]"], [
        melden
    ]);
    const angehalten = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PartnerLogosBlock.useCallback[angehalten]": (pause)=>{
            if (pause) melden('pause');
        }
    }["PartnerLogosBlock.useCallback[angehalten]"], [
        melden
    ]);
    const kopf = headline ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$localize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cmsText"])(headline, locale) : undefined;
    const einleitung = description ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$localize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cmsText"])(description, locale) : undefined;
    const logoWand = partners.every((partner)=>!partner.description);
    if (variant === 'group' && partners.length > 1) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$CmsBlockRenderer$2f$blocks$2f$cmsAnimationReport$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CmsAnimationBoundary"], {
            element: "partnerLogos",
            fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Karten, {
                ...props
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/PartnerLogosBlock.tsx",
                lineNumber: 75,
                columnNumber: 62
            }, ("TURBOPACK compile-time value", void 0)),
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PartnerGroup$2f$PartnerGroup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PartnerGroup"], {
                headline: kopf,
                description: einleitung,
                surface: surface,
                items: partners.map((p)=>({
                        companyName: p.companyName,
                        logoUrl: p.logoUrl,
                        websiteUrl: p.websiteUrl,
                        description: p.description ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$localize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cmsText"])(p.description, locale) : undefined,
                        role: p.role ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$localize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cmsText"])(p.role, locale) : undefined
                    })),
                onFirstView: gesehen,
                onFirstHover: gehovert,
                dataTestId: `${dataTestId}-group`
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/PartnerLogosBlock.tsx",
                lineNumber: 76,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/PartnerLogosBlock.tsx",
            lineNumber: 75,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    if (logoWand) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$CmsBlockRenderer$2f$blocks$2f$cmsAnimationReport$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CmsAnimationBoundary"], {
            element: "partnerLogos",
            fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Karten, {
                ...props
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/PartnerLogosBlock.tsx",
                lineNumber: 97,
                columnNumber: 62
            }, ("TURBOPACK compile-time value", void 0)),
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexLogoWall$2f$HexLogoWall$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexLogoWall"], {
                headline: kopf,
                description: einleitung,
                columns: columns ?? 4,
                surface: surface,
                items: partners.map(({ companyName, logoUrl, websiteUrl })=>({
                        companyName,
                        logoUrl,
                        websiteUrl
                    })),
                onFirstView: gesehen,
                onFirstHover: gehovert,
                onMarqueeToggle: angehalten,
                dataTestId: `${dataTestId}-grid`,
                itemDataTestIdPrefix: dataTestId
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/PartnerLogosBlock.tsx",
                lineNumber: 98,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/PartnerLogosBlock.tsx",
            lineNumber: 97,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Karten, {
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/PartnerLogosBlock.tsx",
        lineNumber: 114,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
_s(PartnerLogosBlock, "VN72KkiWLwCamIN4zE2WAMwhCl8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$CmsBlockRenderer$2f$blocks$2f$cmsAnimationReport$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCmsAnimationReport"]
    ];
});
_c1 = PartnerLogosBlock;
var _c, _c1;
__turbopack_context__.k.register(_c, "Karten");
__turbopack_context__.k.register(_c1, "PartnerLogosBlock");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/RichTextBlock.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RichTextBlock",
    ()=>RichTextBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$SiteMarkdown$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/SiteMarkdown/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$SiteMarkdown$2f$SiteMarkdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/SiteMarkdown/SiteMarkdown.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$LeadStatement$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/LeadStatement/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$LeadStatement$2f$LeadStatement$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/LeadStatement/LeadStatement.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$localize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/cmsBlocks/localize.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$markdownSlots$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/cmsBlocks/markdownSlots.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$CmsBlockRenderer$2f$blocks$2f$cmsAnimationReport$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/cmsAnimationReport.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$CmsBlockRenderer$2f$blocks$2f$blocks$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/blocks.styles.ts [app-client] (ecmascript)");
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
/**
 * #2195 Leitsatz (`variant: 'lead'`): groß, mittig, Wörter färben sich beim
 * Scrollen. Nutzungsmessung `cms_animation` mit `element: leadText` (`view`
 * einmal, wenn der Satz durch die Mitte läuft); wirft die gestaltete Fassung,
 * meldet die Grenze nach Sentry und zeigt den Satz ohne Färbung.
 */ function LeadTextBlock({ block, locale, dataTestId }) {
    _s();
    const melden = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$CmsBlockRenderer$2f$blocks$2f$cmsAnimationReport$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCmsAnimationReport"])('leadText');
    const gesehen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LeadTextBlock.useCallback[gesehen]": ()=>melden('view')
    }["LeadTextBlock.useCallback[gesehen]"], [
        melden
    ]);
    const text = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$localize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cmsText"])(block.props.content, locale);
    const testId = `${dataTestId}-lead`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$CmsBlockRenderer$2f$blocks$2f$cmsAnimationReport$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CmsAnimationBoundary"], {
        element: "leadText",
        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$LeadStatement$2f$LeadStatement$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LeadStatement"], {
            text: text,
            motion: false,
            dataTestId: testId
        }, void 0, false, {
            fileName: "[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/RichTextBlock.tsx",
            lineNumber: 28,
            columnNumber: 17
        }, this),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$LeadStatement$2f$LeadStatement$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LeadStatement"], {
            text: text,
            onFirstView: gesehen,
            dataTestId: testId
        }, void 0, false, {
            fileName: "[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/RichTextBlock.tsx",
            lineNumber: 30,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/RichTextBlock.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_s(LeadTextBlock, "Q+ndSAUviFJ39/OOu17XWY9Pyfk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$CmsBlockRenderer$2f$blocks$2f$cmsAnimationReport$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCmsAnimationReport"]
    ];
});
_c = LeadTextBlock;
const RichTextBlock = (props)=>{
    const { block, locale, dataTestId, pageHeading, first, markdown } = props;
    if (block.props.variant === 'lead') return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LeadTextBlock, {
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/RichTextBlock.tsx",
        lineNumber: 50,
        columnNumber: 46
    }, ("TURBOPACK compile-time value", void 0));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$CmsBlockRenderer$2f$blocks$2f$blocks$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NarrowColumn"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$SiteMarkdown$2f$SiteMarkdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiteMarkdown"], {
            content: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$localize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cmsText"])(block.props.content, locale),
            rendered: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$markdownSlots$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cmsMarkdownOf"])(markdown, locale, block.id, 'content'),
            eagerFirstImage: first,
            pageHeading: pageHeading,
            dataTestId: `${dataTestId}-markdown`
        }, void 0, false, {
            fileName: "[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/RichTextBlock.tsx",
            lineNumber: 55,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/RichTextBlock.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c1 = RichTextBlock;
var _c, _c1;
__turbopack_context__.k.register(_c, "LeadTextBlock");
__turbopack_context__.k.register(_c1, "RichTextBlock");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/SpecTableBlock.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SpecTableBlock",
    ()=>SpecTableBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$SpecTable$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/SpecTable/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$SpecTable$2f$SpecTable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/SpecTable/SpecTable.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$localize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/cmsBlocks/localize.ts [app-client] (ecmascript)");
;
;
;
const SpecTableBlock = ({ block, locale, dataTestId })=>{
    const { headline, description, columns, rows } = block.props;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$SpecTable$2f$SpecTable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SpecTable"], {
        headline: headline ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$localize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cmsText"])(headline, locale) : undefined,
        description: description ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$localize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cmsText"])(description, locale) : undefined,
        columns: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$localize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cmsTexts"])(columns, locale),
        rows: rows.map((row)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$localize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cmsTexts"])(row, locale)),
        dataTestId: `${dataTestId}-table`
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/SpecTableBlock.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = SpecTableBlock;
var _c;
__turbopack_context__.k.register(_c, "SpecTableBlock");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/StatsBlock.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StatsBlock",
    ()=>StatsBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$SiteSectionHeader$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/SiteSectionHeader/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$SiteSectionHeader$2f$SiteSectionHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/SiteSectionHeader/SiteSectionHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexCounter$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/HexCounter/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexCounter$2f$HexCounter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/HexCounter/HexCounter.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexCounter$2f$hexCounterTimeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/HexCounter/hexCounterTimeline.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$localize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/cmsBlocks/localize.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$surface$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/cmsBlocks/surface.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/site.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$CmsBlockRenderer$2f$blocks$2f$cmsAnimationReport$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/cmsAnimationReport.tsx [app-client] (ecmascript)");
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
const StatsBlock = ({ block, locale, dataTestId, pageHeading })=>{
    _s();
    const { headline, items } = block.props;
    const surface = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$surface$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cmsBlockSurfaceOf"])(block);
    const melden = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$CmsBlockRenderer$2f$blocks$2f$cmsAnimationReport$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCmsAnimationReport"])('stats');
    const gesehen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "StatsBlock.useCallback[gesehen]": ()=>melden('view')
    }["StatsBlock.useCallback[gesehen]"], [
        melden
    ]);
    const gekippt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "StatsBlock.useCallback[gekippt]": ()=>melden('tilt')
    }["StatsBlock.useCallback[gekippt]"], [
        melden
    ]);
    const werte = items.map((item)=>({
            value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$localize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cmsText"])(item.value, locale),
            label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$localize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cmsText"])(item.label, locale),
            detail: item.detail ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$localize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cmsText"])(item.detail, locale) : undefined
        }));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Root, {
        "data-testid": `${dataTestId}-grid`,
        "data-columns": (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexCounter$2f$hexCounterTimeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexCounterColumns"])(items.length).desktop,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$SiteSectionHeader$2f$SiteSectionHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiteSectionHeader"], {
                headline: headline ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$localize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cmsText"])(headline, locale) : undefined,
                // #1563: oben auf der Seite die Seitenüberschrift (h1 im Aussehen der h2)
                headingLevel: pageHeading ? 1 : 2,
                align: "center",
                dataTestId: `${dataTestId}-grid-header`
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/StatsBlock.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$CmsBlockRenderer$2f$blocks$2f$cmsAnimationReport$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CmsAnimationBoundary"], {
                element: "stats",
                fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Fallback, {
                    "data-testid": `${dataTestId}-grid-fallback`,
                    children: werte.map((wert, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: wert.value
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/StatsBlock.tsx",
                                    lineNumber: 56,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                " ",
                                wert.label
                            ]
                        }, index, true, {
                            fileName: "[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/StatsBlock.tsx",
                            lineNumber: 55,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/StatsBlock.tsx",
                    lineNumber: 53,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexCounter$2f$HexCounter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexCounter"], {
                    items: werte,
                    surface: surface,
                    onFirstView: gesehen,
                    onFirstTilt: gekippt,
                    dataTestId: dataTestId
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/StatsBlock.tsx",
                    lineNumber: 62,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/StatsBlock.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/StatsBlock.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(StatsBlock, "q/6GSZeFSSUMWWhjB1bAW1HsBvU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$CmsBlockRenderer$2f$blocks$2f$cmsAnimationReport$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCmsAnimationReport"]
    ];
});
_c = StatsBlock;
const Root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "StatsBlock__Root",
    componentId: "sc-8ab0af8b-0"
})`
  display: flex;
  flex-direction: column;
  gap: ${({ theme })=>theme.margin.big};
`;
_c1 = Root;
const Fallback = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ul.withConfig({
    displayName: "StatsBlock__Fallback",
    componentId: "sc-8ab0af8b-1"
})`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${({ theme })=>theme.margin.large};
  margin: 0;
  padding: 0;
  list-style: none;
  color: ${({ theme })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteVar"])('heading', theme.palette.site.heading)};
`;
var _c, _c1;
__turbopack_context__.k.register(_c, "StatsBlock");
__turbopack_context__.k.register(_c1, "Root");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/StepListBlock.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StepListBlock",
    ()=>StepListBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$StepList$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/StepList/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$StepList$2f$StepList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/StepList/StepList.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$localize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/cmsBlocks/localize.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$markdownSlots$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/cmsBlocks/markdownSlots.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$surface$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/cmsBlocks/surface.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$CmsBlockRenderer$2f$blocks$2f$cmsAnimationReport$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/cmsAnimationReport.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
const StepListBlock = ({ block, locale, dataTestId, markdown })=>{
    _s();
    const { headline, description, steps, orientation } = block.props;
    const melden = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$CmsBlockRenderer$2f$blocks$2f$cmsAnimationReport$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCmsAnimationReport"])('stepList');
    const gesehen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "StepListBlock.useCallback[gesehen]": ()=>melden('view')
    }["StepListBlock.useCallback[gesehen]"], [
        melden
    ]);
    const hervorgehoben = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "StepListBlock.useCallback[hervorgehoben]": ()=>melden('step')
    }["StepListBlock.useCallback[hervorgehoben]"], [
        melden
    ]);
    const schritte = steps.map((step, index)=>({
            title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$localize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cmsText"])(step.title, locale),
            description: step.description ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$localize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cmsText"])(step.description, locale) || undefined : undefined,
            renderedDescription: markdown ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$markdownSlots$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cmsMarkdownOf"])(markdown, locale, block.id, 'step', index) : undefined,
            icon: step.icon
        }));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$CmsBlockRenderer$2f$blocks$2f$cmsAnimationReport$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CmsAnimationBoundary"], {
        element: "stepList",
        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
            "data-testid": `${dataTestId}-steps-fallback`,
            children: schritte.map((schritt, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    children: schritt.title
                }, index, false, {
                    fileName: "[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/StepListBlock.tsx",
                    lineNumber: 42,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0)))
        }, void 0, false, {
            fileName: "[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/StepListBlock.tsx",
            lineNumber: 40,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0)),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$StepList$2f$StepList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StepList"], {
            headline: headline ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$localize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cmsText"])(headline, locale) : undefined,
            description: description ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$localize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cmsText"])(description, locale) : undefined,
            steps: schritte,
            orientation: orientation,
            surface: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$surface$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cmsBlockSurfaceOf"])(block),
            onFirstView: gesehen,
            onFirstStep: hervorgehoben,
            dataTestId: `${dataTestId}-steps`
        }, void 0, false, {
            fileName: "[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/StepListBlock.tsx",
            lineNumber: 47,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/StepListBlock.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(StepListBlock, "6E/NgYmScs1uaHnZVSQWNjTSXvI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$CmsBlockRenderer$2f$blocks$2f$cmsAnimationReport$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCmsAnimationReport"]
    ];
});
_c = StepListBlock;
var _c;
__turbopack_context__.k.register(_c, "StepListBlock");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/blocks.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FaqColumn",
    ()=>FaqColumn,
    "NarrowColumn",
    ()=>NarrowColumn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/site.ts [app-client] (ecmascript)");
'use client';
;
;
const NarrowColumn = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "blocks.styles__NarrowColumn",
    componentId: "sc-9b542e02-0"
})`
  box-sizing: border-box;
  width: 100%;
  max-width: calc(${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SITE_TEXT_MAX_WIDTH"]} - 48px);
  margin-inline: auto;
`;
const FaqColumn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(NarrowColumn).withConfig({
    displayName: "blocks.styles__FaqColumn",
    componentId: "sc-9b542e02-1"
})`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/cmsAnimationReport.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CmsAnimationBoundary",
    ()=>CmsAnimationBoundary,
    "useCmsAnimationReport",
    ()=>useCmsAnimationReport
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useUsagePageview$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/useUsagePageview.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$sentry$2f$browser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/sentry/browser.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$animationText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/cmsBlocks/animationText.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function useCmsAnimationReport(element) {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const gemeldet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Set());
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useCmsAnimationReport.useCallback": (action)=>{
            if (action !== 'cta') {
                if (gemeldet.current.has(action)) return;
                gemeldet.current.add(action);
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useUsagePageview$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sendeNutzungsereignis"])(pathname || '/', __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$animationText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CMS_ANIMATION_EVENT"], {
                element,
                action
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$sentry$2f$browser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addBreadcrumb"])({
                category: 'cms-animation',
                message: action,
                data: {
                    element
                }
            });
        }
    }["useCmsAnimationReport.useCallback"], [
        pathname,
        element
    ]);
}
_s(useCmsAnimationReport, "hCkCHg8vPqlpxK4oIAc+JGqmoJc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
class CmsAnimationBoundary extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Component {
    state = {
        failed: false
    };
    static getDerivedStateFromError() {
        return {
            failed: true
        };
    }
    componentDidCatch(error, info) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$sentry$2f$browser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addBreadcrumb"])({
            category: 'cms-animation',
            message: 'element-error',
            data: {
                element: this.props.element
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$sentry$2f$browser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["captureReactException"])(error, {
            componentStack: info.componentStack
        });
    }
    render() {
        return this.state.failed ? this.props.fallback : this.props.children;
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/cmsBlockCatalog.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CMS_BLOCK_CATALOG",
    ()=>CMS_BLOCK_CATALOG
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$CmsBlockRenderer$2f$blocks$2f$CardGridBlock$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/CardGridBlock.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$CmsBlockRenderer$2f$blocks$2f$ComparisonBlock$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/ComparisonBlock.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$CmsBlockRenderer$2f$blocks$2f$StepListBlock$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/StepListBlock.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$CmsBlockRenderer$2f$blocks$2f$FaqBlock$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/FaqBlock.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$CmsBlockRenderer$2f$blocks$2f$CtaBlock$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/CtaBlock.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$CmsBlockRenderer$2f$blocks$2f$RichTextBlock$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/RichTextBlock.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$CmsBlockRenderer$2f$blocks$2f$StatsBlock$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/StatsBlock.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$CmsBlockRenderer$2f$blocks$2f$PartnerLogosBlock$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/PartnerLogosBlock.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$CmsBlockRenderer$2f$blocks$2f$NewsTeaserBlock$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/NewsTeaserBlock.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$CmsBlockRenderer$2f$blocks$2f$SpecTableBlock$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/SpecTableBlock.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$CmsBlockRenderer$2f$blocks$2f$MediaTextBlock$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/MediaTextBlock.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
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
/**
 * #1478: Blöcke mit eigenen schweren Abhängigkeiten als eigener Chunk — eine
 * Seite lädt sie nur, wenn sie sie rendert: Kontaktformular (zod, ALTCHA),
 * Hero/Waben-Slider (WebGL), Karten-Slider, Video, Team, Testimonial, Masthead,
 * Animation und Text (#2180). next/dynamic
 * mit SSR: sie stehen weiter im Server-HTML, ihre Chunks lädt Next vor der
 * Hydration. Die leichten Blöcke bleiben gebündelt — getrennt kopierte
 * Turbopack die gemeinsamen Teile (CMS-Icons) in jeden Block-Chunk (gemessen:
 * Startseite +33 KB).
 */ const HeroBlock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_c = ()=>__turbopack_context__.A("[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/HeroBlock.tsx [app-client] (ecmascript, next/dynamic entry, async loader)").then((m)=>m.HeroBlock), {
    loadableGenerated: {
        modules: [
            "[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/HeroBlock.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    }
});
_c1 = HeroBlock;
const CardSliderBlock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_c2 = ()=>__turbopack_context__.A("[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/CardSliderBlock.tsx [app-client] (ecmascript, next/dynamic entry, async loader)").then((m)=>m.CardSliderBlock), {
    loadableGenerated: {
        modules: [
            "[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/CardSliderBlock.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    }
});
_c3 = CardSliderBlock;
const VideoBlock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_c4 = ()=>__turbopack_context__.A("[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/VideoBlock.tsx [app-client] (ecmascript, next/dynamic entry, async loader)").then((m)=>m.VideoBlock), {
    loadableGenerated: {
        modules: [
            "[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/VideoBlock.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    }
});
_c5 = VideoBlock;
const ImagefilmBlock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_c6 = ()=>__turbopack_context__.A("[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/ImagefilmBlock.tsx [app-client] (ecmascript, next/dynamic entry, async loader)").then((m)=>m.ImagefilmBlock), {
    loadableGenerated: {
        modules: [
            "[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/ImagefilmBlock.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    }
});
_c7 = ImagefilmBlock;
const TeamBlock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_c8 = ()=>__turbopack_context__.A("[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/TeamBlock.tsx [app-client] (ecmascript, next/dynamic entry, async loader)").then((m)=>m.TeamBlock), {
    loadableGenerated: {
        modules: [
            "[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/TeamBlock.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    }
});
_c9 = TeamBlock;
const TestimonialBlock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_c10 = ()=>__turbopack_context__.A("[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/TestimonialBlock.tsx [app-client] (ecmascript, next/dynamic entry, async loader)").then((m)=>m.TestimonialBlock), {
    loadableGenerated: {
        modules: [
            "[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/TestimonialBlock.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    }
});
_c11 = TestimonialBlock;
const MastheadBlock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_c12 = ()=>__turbopack_context__.A("[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/MastheadBlock.tsx [app-client] (ecmascript, next/dynamic entry, async loader)").then((m)=>m.MastheadBlock), {
    loadableGenerated: {
        modules: [
            "[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/MastheadBlock.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    }
});
_c13 = MastheadBlock;
const ContactFormBlock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_c14 = ()=>__turbopack_context__.A("[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/ContactFormBlock.tsx [app-client] (ecmascript, next/dynamic entry, async loader)").then((m)=>m.ContactFormBlock), {
    loadableGenerated: {
        modules: [
            "[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/ContactFormBlock.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    }
});
_c15 = ContactFormBlock;
// #2180: Siegel/Kreislauf — eigener Chunk, nur Seiten mit dem Block laden ihn
const AnimationTextBlock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_c16 = ()=>__turbopack_context__.A("[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/AnimationTextBlock.tsx [app-client] (ecmascript, next/dynamic entry, async loader)").then((m)=>m.AnimationTextBlock), {
    loadableGenerated: {
        modules: [
            "[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/AnimationTextBlock.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    }
});
_c17 = AnimationTextBlock;
const CMS_BLOCK_CATALOG = {
    hero: HeroBlock,
    video: VideoBlock,
    imagefilm: ImagefilmBlock,
    mediaText: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$CmsBlockRenderer$2f$blocks$2f$MediaTextBlock$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaTextBlock"],
    animationText: AnimationTextBlock,
    cardGrid: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$CmsBlockRenderer$2f$blocks$2f$CardGridBlock$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardGridBlock"],
    comparison: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$CmsBlockRenderer$2f$blocks$2f$ComparisonBlock$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComparisonBlock"],
    stepList: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$CmsBlockRenderer$2f$blocks$2f$StepListBlock$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StepListBlock"],
    cardSlider: CardSliderBlock,
    faq: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$CmsBlockRenderer$2f$blocks$2f$FaqBlock$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaqBlock"],
    cta: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$CmsBlockRenderer$2f$blocks$2f$CtaBlock$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CtaBlock"],
    richText: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$CmsBlockRenderer$2f$blocks$2f$RichTextBlock$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RichTextBlock"],
    stats: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$CmsBlockRenderer$2f$blocks$2f$StatsBlock$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StatsBlock"],
    team: TeamBlock,
    partnerLogos: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$CmsBlockRenderer$2f$blocks$2f$PartnerLogosBlock$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PartnerLogosBlock"],
    newsTeaser: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$CmsBlockRenderer$2f$blocks$2f$NewsTeaserBlock$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NewsTeaserBlock"],
    testimonial: TestimonialBlock,
    specTable: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$CmsBlockRenderer$2f$blocks$2f$SpecTableBlock$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SpecTableBlock"],
    masthead: MastheadBlock,
    contactForm: ContactFormBlock
};
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17;
__turbopack_context__.k.register(_c, "HeroBlock$dynamic");
__turbopack_context__.k.register(_c1, "HeroBlock");
__turbopack_context__.k.register(_c2, "CardSliderBlock$dynamic");
__turbopack_context__.k.register(_c3, "CardSliderBlock");
__turbopack_context__.k.register(_c4, "VideoBlock$dynamic");
__turbopack_context__.k.register(_c5, "VideoBlock");
__turbopack_context__.k.register(_c6, "ImagefilmBlock$dynamic");
__turbopack_context__.k.register(_c7, "ImagefilmBlock");
__turbopack_context__.k.register(_c8, "TeamBlock$dynamic");
__turbopack_context__.k.register(_c9, "TeamBlock");
__turbopack_context__.k.register(_c10, "TestimonialBlock$dynamic");
__turbopack_context__.k.register(_c11, "TestimonialBlock");
__turbopack_context__.k.register(_c12, "MastheadBlock$dynamic");
__turbopack_context__.k.register(_c13, "MastheadBlock");
__turbopack_context__.k.register(_c14, "ContactFormBlock$dynamic");
__turbopack_context__.k.register(_c15, "ContactFormBlock");
__turbopack_context__.k.register(_c16, "AnimationTextBlock$dynamic");
__turbopack_context__.k.register(_c17, "AnimationTextBlock");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$CmsBlockRenderer$2f$CmsBlockRenderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/CmsBlockRenderer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$CmsBlockRenderer$2f$cmsBlockCatalog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/cmsBlockCatalog.tsx [app-client] (ecmascript)");
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Organism/Footer/Footer.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BottomBar",
    ()=>BottomBar,
    "ContactItem",
    ()=>ContactItem,
    "ContactList",
    ()=>ContactList,
    "Copyright",
    ()=>Copyright,
    "FooterLink",
    ()=>FooterLink,
    "FooterLinks",
    ()=>FooterLinks,
    "FooterMetaButton",
    ()=>FooterMetaButton,
    "FooterSection",
    ()=>FooterSection,
    "FooterSectionTitle",
    ()=>FooterSectionTitle,
    "LogoLink",
    ()=>LogoLink,
    "NavMeta",
    ()=>NavMeta,
    "Root",
    ()=>Root
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$NavLink$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/NavLink/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$NavLink$2f$NavLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/NavLink/NavLink.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$hex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/hex.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$Footer$2f$footerColors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/Footer/footerColors.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
const Root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].footer.withConfig({
    displayName: "Footer.styles__Root",
    componentId: "sc-809a1aba-0"
})`
  width: 100%;
  /* #2164: Verlauf aus dem Theme, in beiden Modi dunkel; Schrift aus dem Kontrast (footerColors) */
  background: linear-gradient(
    to top,
    ${({ theme })=>theme.palette.footer.background},
    ${({ theme })=>theme.palette.footer.backgroundEnd}
  );
  color: ${({ theme })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$Footer$2f$footerColors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["footerText"])(theme)};
  padding: 1rem 0;
  flex-shrink: 0;
  z-index: 10;
  margin-top: auto;
  /* Wabenrand statt runder Ecken (#1188); Logo und Copyright bleiben aus der Randzone */
  ${({ $edges })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$hex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hexEdgeHost"])($edges)}
  ${({ $edges })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$hex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hexEdgeInset"])('top', '1rem', $edges)}

  /* Textelemente erben die Fußschrift — Doppelklasse statt !important, schlägt globale Regeln */
  && h1,
  && h2,
  && h3,
  && h4,
  && h5,
  && p,
  && span {
    color: ${({ theme })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$Footer$2f$footerColors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["footerText"])(theme)};
  }
`;
const BottomBar = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Footer.styles__BottomBar",
    componentId: "sc-809a1aba-1"
})`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  gap: 16px;
  margin-top: 32px;
  padding: 32px 0 ${(props)=>props.theme.margin.small};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    /* #2164: dekorativ (footerRule), in der Schriftfarbe */
    background: linear-gradient(
      to right,
      ${({ theme })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$Footer$2f$footerColors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["footerRule"])(theme, 0)},
      ${({ theme })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$Footer$2f$footerColors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["footerRule"])(theme, 0.22)} 50%,
      ${({ theme })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$Footer$2f$footerColors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["footerRule"])(theme, 0)}
    );
  }

  @media only screen and (max-width: 639px) {
    flex-direction: column-reverse;
    align-items: flex-start;
  }
`;
const Copyright = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "Footer.styles__Copyright",
    componentId: "sc-809a1aba-2"
})`
  white-space: nowrap;
`;
const NavMeta = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].nav.withConfig({
    displayName: "Footer.styles__NavMeta",
    componentId: "sc-809a1aba-3"
})`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: center;
  /* #1212: gap-6 wie auf plastship.com, statt margin-left — sonst rückt schmal der erste Link ein */
  gap: 24px;
  background: none;

  /* #2164: Fußschrift auch bei Hover/Fokus (Doppelklasse schlägt globales a:hover) */
  && a,
  && a:hover,
  && a:focus-visible {
    color: ${({ theme })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$Footer$2f$footerColors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["footerText"])(theme)};
  }

  && a {
    text-decoration: none;
  }

  && a:hover,
  && a:focus-visible {
    text-decoration: underline;
  }

  @media only screen and (max-width: 639px) {
    justify-content: flex-start;
  }
`;
const FooterMetaButton = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "Footer.styles__FooterMetaButton",
    componentId: "sc-809a1aba-4"
})`
  padding: 0;
  border: 0;
  background: none;
  font: inherit;
  cursor: pointer;
  color: ${({ theme })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$Footer$2f$footerColors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["footerText"])(theme)};
  text-decoration: none;

  &:hover,
  &:focus-visible {
    text-decoration: underline;
  }
`;
const FooterLink = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$NavLink$2f$NavLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavLink"]).withConfig({
    displayName: "Footer.styles__FooterLink",
    componentId: "sc-809a1aba-5"
})`
  color: inherit;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
const LogoLink = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$NavLink$2f$NavLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavLink"]).withConfig({
    displayName: "Footer.styles__LogoLink",
    componentId: "sc-809a1aba-6"
})`
  display: inline-block;
  text-decoration: none;
`;
const FooterSection = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Footer.styles__FooterSection",
    componentId: "sc-809a1aba-7"
})`
  margin-bottom: 20px;
`;
const ContactList = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ul.withConfig({
    displayName: "Footer.styles__ContactList",
    componentId: "sc-809a1aba-8"
})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 0;
  padding: 0;
  list-style: none;
`;
const ContactItem = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].li.withConfig({
    displayName: "Footer.styles__ContactItem",
    componentId: "sc-809a1aba-9"
})`
  && > a {
    display: inline-flex;
    align-items: center;
    gap: ${({ theme })=>theme.margin.small};
    font-size: 1rem;
    line-height: 1.5;
    text-decoration: none;
  }

  && > a svg {
    flex-shrink: 0;
    width: 20px;
    height: 20px;
  }

  /* Doppelklasse: globale a- und a:hover-Regeln wiegen mehr als eine Klasse */
  && > a,
  && > a:hover,
  && > a:focus-visible {
    color: ${({ theme })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$Footer$2f$footerColors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["footerText"])(theme)};
  }

  && > a:hover {
    text-decoration: underline;
  }
`;
const FooterSectionTitle = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].h2.withConfig({
    displayName: "Footer.styles__FooterSectionTitle",
    componentId: "sc-809a1aba-10"
})`
  && {
    color: ${({ theme })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$Footer$2f$footerColors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["footerText"])(theme)};
  }
  font-size: 1rem;
  font-weight: 700;
  margin: 0 0 16px;
  text-transform: uppercase;
`;
const FooterLinks = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].nav.withConfig({
    displayName: "Footer.styles__FooterLinks",
    componentId: "sc-809a1aba-11"
})`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  background: none;

  && a {
    text-decoration: none;
    font-size: 1rem;
    line-height: 1.5;
    transition: color 0.2s ease;
  }

  /* #2164: Fußschrift auch bei Hover/Fokus (Doppelklasse schlägt globales a:hover) */
  && a,
  && a:hover,
  && a:focus-visible {
    color: ${({ theme })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$Footer$2f$footerColors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["footerText"])(theme)};
  }

  && a:hover,
  && a:focus-visible {
    text-decoration: underline;
  }
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Organism/Footer/Footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FOOTER_DEFAULT_EDGES",
    ()=>FOOTER_DEFAULT_EDGES,
    "Footer",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$Footer$2f$Footer$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/Footer/Footer.styles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Logos$2f$LogoPlastship$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Logos/LogoPlastship/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Grid$2f$Row$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Grid/Row/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Grid$2f$Col$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Grid/Col/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/ClientTranslation.tsx [app-client] (ecmascript) <export useClientSafeTranslation as useClientTranslation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useCmsNavigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/useCmsNavigation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$localize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/cmsBlocks/localize.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$CmsContentLocaleContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/context/CmsContentLocaleContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$footerNavigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/config/footerNavigation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$companyContact$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/companyContact.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$ContactLink$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/ContactLink/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$ContactLink$2f$ContactLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/ContactLink/ContactLink.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconEmail$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconEmail/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$CookieBanner$2f$consent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/CookieBanner/consent.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconPhone$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconPhone/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconLocation$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconLocation/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$HexEdge$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/HexEdge/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$HexEdge$2f$HexEdge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/HexEdge/HexEdge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/lib/hex/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$edge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/hex/edge.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$Footer$2f$footerColors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/Footer/footerColors.ts [app-client] (ecmascript)");
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
const FOOTER_DEFAULT_EDGES = {
    top: {
        placement: 'inner',
        color: 'white'
    }
};
const Footer = (props)=>{
    _s();
    const edges = props.edges ?? FOOTER_DEFAULT_EDGES;
    // #1542: Texte stehen schon im Server-HTML. Früher kamen sie erst nach dem
    // Mount (Schutz vor einem Hydration-Fehler); Überschriften und Links waren
    // bis dahin leer und ohne Höhe, die Spalte wuchs beim Hydrieren um rund
    // 100 px und verschob den Fuß. Seit dem i18n-Seed (#1477/#1494) rendern
    // Server und Client denselben Text, wie Header und Gast-Menü auch.
    const { tr } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"])();
    // #2164: Logo in der Fußschrift — hell nur, wenn der Kontrast zum Fußgrund es verlangt
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    // #1156: Menügruppen aus CmsNavigation (Schlüssel footer): jeder Eintrag der
    // ersten Ebene ist eine Spalte, seine Kinder die Links. Ohne gepflegte
    // Einträge bleibt die eingebaute Spalte „Weitere Links" (#1212).
    const { footer: cmsSections } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useCmsNavigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCmsNavigation"])();
    // #2083: Inhaltssprache (Vorschau `?lang=` der Redaktion vor der Oberflächensprache)
    const locale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$CmsContentLocaleContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCmsContentLocale"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$Footer$2f$Footer$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        className: props['className'],
        "data-testid": 'footer-root',
        $edges: edges,
        children: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$edge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasEdges"])(edges) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$HexEdge$2f$HexEdge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexEdge"], {
                edges: edges,
                dataTestId: "footer-root-edge"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Organism/Footer/Footer.tsx",
                lineNumber: 69,
                columnNumber: 27
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Grid$2f$Row$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Grid$2f$Col$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        xs: 12,
                        md: 3,
                        lg: 2,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$Footer$2f$Footer$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LogoLink"], {
                            href: "/",
                            "aria-label": tr('footer.logo.ariaLabel', {
                                defaultValue: 'plastship – zur Startseite'
                            }),
                            "data-testid": "footer-logo-link",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Logos$2f$LogoPlastship$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                inverted: theme?.palette?.footer ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$Footer$2f$footerColors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["footerTextIsLight"])(theme) : true,
                                monochrome: true
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Organism/Footer/Footer.tsx",
                                lineNumber: 81,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Organism/Footer/Footer.tsx",
                            lineNumber: 76,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Organism/Footer/Footer.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: cmsSections.length > 0 ? cmsSections.map((section, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Grid$2f$Col$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                xs: 12,
                                sm: 6,
                                md: 4,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$Footer$2f$Footer$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FooterSection"], {
                                    "data-testid": `footer-cms-section-${i}`,
                                    "data-count": section.children?.length ?? 0,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$Footer$2f$Footer$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FooterSectionTitle"], {
                                            "data-testid": `footer-cms-section-${i}-title`,
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$localize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cmsText"])(section.label, locale)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/components/Organism/Footer/Footer.tsx",
                                            lineNumber: 95,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$Footer$2f$Footer$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FooterLinks"], {
                                            children: (section.children ?? []).map((link, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$Footer$2f$Footer$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FooterLink"], {
                                                    href: link.href,
                                                    "data-testid": `footer-cms-section-${i}-link-${j}`,
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$localize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cmsText"])(link.label, locale)
                                                }, `${link.href}-${j}`, false, {
                                                    fileName: "[project]/apps/web/src/app/components/Organism/Footer/Footer.tsx",
                                                    lineNumber: 100,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/components/Organism/Footer/Footer.tsx",
                                            lineNumber: 98,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/app/components/Organism/Footer/Footer.tsx",
                                    lineNumber: 91,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0))
                            }, `${section.href}-${i}`, false, {
                                fileName: "[project]/apps/web/src/app/components/Organism/Footer/Footer.tsx",
                                lineNumber: 90,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))) : // hält jeden dieser Links öffentlich (PUBLIC_PREFIXES).
                        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$footerNavigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FOOTER_SECTIONS"].map((section, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Grid$2f$Col$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                xs: 12,
                                sm: 6,
                                md: 4,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$Footer$2f$Footer$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FooterSection"], {
                                    "data-testid": `footer-section-${i}`,
                                    "data-count": section.links.length,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$Footer$2f$Footer$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FooterSectionTitle"], {
                                            "data-testid": `footer-section-${i}-title`,
                                            children: tr(section.titleKey)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/components/Organism/Footer/Footer.tsx",
                                            lineNumber: 120,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$Footer$2f$Footer$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FooterLinks"], {
                                            children: section.links.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$Footer$2f$Footer$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FooterLink"], {
                                                    href: link.href,
                                                    "data-testid": `footer-link-${link.href.replace(/^\//, '').replace(/\//g, '-')}`,
                                                    children: tr(link.labelKey)
                                                }, link.href, false, {
                                                    fileName: "[project]/apps/web/src/app/components/Organism/Footer/Footer.tsx",
                                                    lineNumber: 125,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/components/Organism/Footer/Footer.tsx",
                                            lineNumber: 123,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/app/components/Organism/Footer/Footer.tsx",
                                    lineNumber: 116,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0))
                            }, section.titleKey, false, {
                                fileName: "[project]/apps/web/src/app/components/Organism/Footer/Footer.tsx",
                                lineNumber: 115,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Organism/Footer/Footer.tsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Grid$2f$Col$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        xs: 12,
                        sm: 6,
                        md: 5,
                        lg: 4,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$Footer$2f$Footer$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FooterSection"], {
                            "data-testid": "footer-contact",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$Footer$2f$Footer$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FooterSectionTitle"], {
                                    "data-testid": "footer-contact-title",
                                    children: tr(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$footerNavigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FOOTER_CONTACT"].titleKey)
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/components/Organism/Footer/Footer.tsx",
                                    lineNumber: 140,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$Footer$2f$Footer$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContactList"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$Footer$2f$Footer$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContactItem"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$ContactLink$2f$ContactLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContactLink"], {
                                                kind: "mail",
                                                value: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$footerNavigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FOOTER_CONTACT"].email,
                                                place: "footer",
                                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconEmail$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                    fileName: "[project]/apps/web/src/app/components/Organism/Footer/Footer.tsx",
                                                    lineNumber: 150,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                dataTestId: "footer-contact-email"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/components/Organism/Footer/Footer.tsx",
                                                lineNumber: 146,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/components/Organism/Footer/Footer.tsx",
                                            lineNumber: 145,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$Footer$2f$Footer$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContactItem"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$ContactLink$2f$ContactLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContactLink"], {
                                                kind: "tel",
                                                value: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$footerNavigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FOOTER_CONTACT"].phone.e164,
                                                place: "footer",
                                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconPhone$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                    fileName: "[project]/apps/web/src/app/components/Organism/Footer/Footer.tsx",
                                                    lineNumber: 159,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                dataTestId: "footer-contact-phone",
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$footerNavigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FOOTER_CONTACT"].phone.international
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/components/Organism/Footer/Footer.tsx",
                                                lineNumber: 155,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/components/Organism/Footer/Footer.tsx",
                                            lineNumber: 154,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$Footer$2f$Footer$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContactItem"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$ContactLink$2f$ContactLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContactLink"], {
                                                kind: "map",
                                                value: `${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$footerNavigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FOOTER_CONTACT"].address.name}, ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$companyContact$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addressOneLine"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$footerNavigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FOOTER_CONTACT"].address)}`,
                                                geo: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$footerNavigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FOOTER_CONTACT"].address.geo,
                                                place: "footer",
                                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconLocation$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                    fileName: "[project]/apps/web/src/app/components/Organism/Footer/Footer.tsx",
                                                    lineNumber: 171,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                dataTestId: "footer-contact-address",
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$companyContact$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addressOneLine"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$footerNavigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FOOTER_CONTACT"].address)
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/components/Organism/Footer/Footer.tsx",
                                                lineNumber: 166,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/components/Organism/Footer/Footer.tsx",
                                            lineNumber: 165,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/app/components/Organism/Footer/Footer.tsx",
                                    lineNumber: 143,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/app/components/Organism/Footer/Footer.tsx",
                            lineNumber: 139,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Organism/Footer/Footer.tsx",
                        lineNumber: 138,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/components/Organism/Footer/Footer.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Grid$2f$Row$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Grid$2f$Col$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    xs: 12,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$Footer$2f$Footer$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BottomBar"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$Footer$2f$Footer$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Copyright"], {
                                "data-testid": "footer-copyright",
                                children: "© plastship GmbH"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Organism/Footer/Footer.tsx",
                                lineNumber: 184,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$Footer$2f$Footer$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavMeta"], {
                                "data-testid": "footer-meta",
                                "data-count": __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$footerNavigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FOOTER_META_LINKS"].length,
                                children: [
                                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$footerNavigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FOOTER_META_LINKS"].map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$Footer$2f$Footer$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FooterLink"], {
                                            href: link.href,
                                            "data-testid": `footer-meta-${link.href.replace(/^\//, '')}`,
                                            children: tr(link.labelKey)
                                        }, link.href, false, {
                                            fileName: "[project]/apps/web/src/app/components/Organism/Footer/Footer.tsx",
                                            lineNumber: 187,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$Footer$2f$Footer$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FooterMetaButton"], {
                                        type: "button",
                                        onClick: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$CookieBanner$2f$consent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["oeffneConsentEinstellungen"],
                                        "data-testid": "footer-cookie-settings",
                                        children: tr('footer.cookieSettings', {
                                            defaultValue: 'Cookie-Einstellungen'
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/components/Organism/Footer/Footer.tsx",
                                        lineNumber: 195,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/app/components/Organism/Footer/Footer.tsx",
                                lineNumber: 185,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/app/components/Organism/Footer/Footer.tsx",
                        lineNumber: 183,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Organism/Footer/Footer.tsx",
                    lineNumber: 182,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Organism/Footer/Footer.tsx",
                lineNumber: 181,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Organism/Footer/Footer.tsx",
        lineNumber: 68,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Footer, "yAdm1ftpSMdB1TkD1TqySxieyWc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useCmsNavigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCmsNavigation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$CmsContentLocaleContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCmsContentLocale"]
    ];
});
_c = Footer;
;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Organism/Footer/footerColors.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "footerRule",
    ()=>footerRule,
    "footerText",
    ()=>footerText,
    "footerTextIsLight",
    ()=>footerTextIsLight
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$helper$2f$color$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/helper/color.ts [app-client] (ecmascript)");
;
const footerText = (theme)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$helper$2f$color$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContrastTextColor"])(theme.palette.footer.backgroundEnd);
const footerTextIsLight = (theme)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$helper$2f$color$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shouldUseWhiteText"])(theme.palette.footer.backgroundEnd);
const footerRule = (theme, alpha)=>footerTextIsLight(theme) ? `rgba(255, 255, 255, ${alpha})` : `rgba(33, 37, 41, ${alpha})`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Organism/Footer/index.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$Footer$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/Footer/Footer.tsx [app-client] (ecmascript)");
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$Footer$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Footer"];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Organism/GuestMenu/GuestMenu.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GuestMenu",
    ()=>GuestMenu,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$LinkButton$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/LinkButton/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Button$2f$Button$2e$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Button/Button.types.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconArrowRight$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconArrowRight/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PublicNav$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/PublicNav/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PublicNav$2f$PublicNav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/PublicNav/PublicNav.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$MobileMenuShell$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/MobileMenuShell/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$MobileMenuShell$2f$MobileMenuShell$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Section__as__MobileMenuSection$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/MobileMenuShell/MobileMenuShell.styles.ts [app-client] (ecmascript) <export Section as MobileMenuSection>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$MobileMenuShell$2f$MobileMenuShell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/MobileMenuShell/MobileMenuShell.tsx [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$SidebarContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/context/SidebarContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$UserPreferencesContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/context/UserPreferencesContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$AppShellActiveContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/context/AppShellActiveContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/ClientTranslation.tsx [app-client] (ecmascript) <export useClientSafeTranslation as useClientTranslation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useIsGuest$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/useIsGuest.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/site.ts [app-client] (ecmascript)");
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
/**
 * #1478/#2029: Das App-Menü zieht Rollen-Navigation, UserContext und axios —
 * Besucher ohne Konto laden davon nichts (React.lazy wie HeaderAppControls im
 * Header, Wächter tests/guards/public-shell-imports).
 */ const AppMobileMenu = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lazy"])(()=>__turbopack_context__.A("[project]/apps/web/src/app/components/Organism/SidebarNavigation/AppMobileMenu.tsx [app-client] (ecmascript, async loader)"));
_c = AppMobileMenu;
const GuestMenu = ()=>{
    _s();
    // #1563: wie der Header — Gäste ohne Session-Cookie schon im Server-HTML
    const isGuest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useIsGuest$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsGuest"])();
    const { status } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const appShellActive = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$AppShellActiveContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppShellActive"])();
    const { isLeftSidebarOpen, closeLeftSidebar } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$SidebarContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSidebar"])();
    const { language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$UserPreferencesContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserPreferences"])();
    const { tr } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"])(language);
    if (!isGuest) {
        // Eingeloggt: Burger und Menü erst mit den App-Providern (useUserContext)
        if (status !== 'authenticated' || !appShellActive) return null;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
            fallback: null,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AppMobileMenu, {
                barHeightPx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SITE_HEADER_HEIGHT_PX"]
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Organism/GuestMenu/GuestMenu.tsx",
                lineNumber: 50,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/apps/web/src/app/components/Organism/GuestMenu/GuestMenu.tsx",
            lineNumber: 49,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$MobileMenuShell$2f$MobileMenuShell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["MobileMenuShell"], {
        isOpen: isLeftSidebarOpen,
        onClose: closeLeftSidebar,
        mode: "guest",
        maxWidthPx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GUEST_NAV_MIN_WIDTH_PX"] - 1,
        barHeightPx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SITE_HEADER_HEIGHT_PX"],
        footerAction: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$LinkButton$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/login",
            modifier: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Button$2f$Button$2e$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ButtonModifier"].PRIMARY,
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconArrowRight$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Organism/GuestMenu/GuestMenu.tsx",
                lineNumber: 66,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            iconAlign: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Button$2f$Button$2e$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconAligns"].RIGHT,
            dataTestId: "mobile-menu-item-login",
            children: tr('header.login.label', {
                defaultValue: 'Login'
            })
        }, void 0, false, {
            fileName: "[project]/apps/web/src/app/components/Organism/GuestMenu/GuestMenu.tsx",
            lineNumber: 63,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0)),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$MobileMenuShell$2f$MobileMenuShell$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Section__as__MobileMenuSection$3e$__["MobileMenuSection"], {
            "data-testid": "mobile-menu-section-public",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PublicNav$2f$PublicNav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CmsPublicNav"], {
                variant: "stacked",
                dataTestId: "mobile-menu-item-public"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Organism/GuestMenu/GuestMenu.tsx",
                lineNumber: 77,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/apps/web/src/app/components/Organism/GuestMenu/GuestMenu.tsx",
            lineNumber: 74,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Organism/GuestMenu/GuestMenu.tsx",
        lineNumber: 56,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(GuestMenu, "0jOhxjp8rcOkOqfVJ2yBMoZx+mg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useIsGuest$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsGuest"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$AppShellActiveContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppShellActive"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$SidebarContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSidebar"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$UserPreferencesContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserPreferences"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"]
    ];
});
_c1 = GuestMenu;
const __TURBOPACK__default__export__ = GuestMenu;
var _c, _c1;
__turbopack_context__.k.register(_c, "AppMobileMenu");
__turbopack_context__.k.register(_c1, "GuestMenu");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Organism/GuestMenu/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$GuestMenu$2f$GuestMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/GuestMenu/GuestMenu.tsx [app-client] (ecmascript)");
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Organism/Header/Header.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AvatarContainer",
    ()=>AvatarContainer,
    "AvatarFallback",
    ()=>AvatarFallback,
    "AvatarImage",
    ()=>AvatarImage,
    "AvatarWrapper",
    ()=>AvatarWrapper,
    "BurgerWrapper",
    ()=>BurgerWrapper,
    "Controls",
    ()=>Controls,
    "Dropdown",
    ()=>Dropdown,
    "DropdownHeader",
    ()=>DropdownHeader,
    "DropdownItem",
    ()=>DropdownItem,
    "GuestActions",
    ()=>GuestActions,
    "GuestBurger",
    ()=>GuestBurger,
    "GuestNavBar",
    ()=>GuestNavBar,
    "LogoLink",
    ()=>LogoLink,
    "Nav",
    ()=>Nav,
    "NotificationBellWrapper",
    ()=>NotificationBellWrapper,
    "Root",
    ()=>Root,
    "SearchButton",
    ()=>SearchButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$NavLink$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/NavLink/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$NavLink$2f$NavLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/NavLink/NavLink.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$zIndex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/zIndex.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$hex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/hex.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Burger$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Burger/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/site.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
const guestNarrow = `@media only screen and (max-width: ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GUEST_NAV_MIN_WIDTH_PX"] - 1}px)`;
const Root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].header.withConfig({
    displayName: "Header.styles__Root",
    componentId: "sc-8494ddd5-0"
})`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  height: 56px;
  position: relative;
  z-index: 200;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.08);
  label {
    display: none;
  }

  @media only screen and (max-width: 1024px) {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    min-height: 56px;
    background: ${(props)=>props.theme.palette.default.white};
    will-change: transform, opacity;
  }

  /* #1211: Site-Header (öffentliche Seiten) wie auf plastship.com — 80 px,
     sticky auf jeder Breite, shadow-xl. Doppelklasse gegen die mobile Regel
     oben; das Overlay darunter setzt fixed darüber. */
  ${({ $site, theme })=>$site && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
      && {
        position: sticky;
        top: 0;
        height: ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SITE_HEADER_HEIGHT_PX"]}px;
        min-height: ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SITE_HEADER_HEIGHT_PX"]}px;
        gap: 16px;
        padding: 0 24px;
        background: ${theme.palette.default.white};
        box-shadow: ${theme.palette.site.shadowHover};
        will-change: auto;
      }

      ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["guestNavCompact"]} {
        && {
          gap: 8px;
        }
      }
    `}

  /* Overlay (Frontpage): fest oben auf jeder Breite, der Inhalt läuft darunter.
     Doppelklasse, damit es die mobile Regel oben sicher übertrifft. */
  ${({ $overlay, theme })=>$overlay && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
      && {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        background: ${theme.palette.default.white};
        transition:
          background-color 250ms ease,
          box-shadow 250ms ease;
      }
    `}

  /* Über dem Seiten-Hero: ohne Grund und Schatten, das Bild läuft durch */
  ${({ $transparent })=>$transparent && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
      && {
        background: transparent;
        box-shadow: none;
      }
    `}

  /* #1497, #2175: durchsichtig über einem Block die Schrift nach dessen Farbe
     (headerTone) — hell oder dunkel, in beiden Themes. Menü, Sprachwahl und
     Schalter lesen --header-fg nur an der obersten Ebene; Flyouts behalten
     ihre Farben. Mit Grund (gescrollt) ohne Variable: Theme-Default. */
  ${({ $fg })=>$fg && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
      --header-fg: ${$fg};
    `}
`;
const Nav = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].nav.withConfig({
    displayName: "Header.styles__Nav",
    componentId: "sc-8494ddd5-1"
})`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
  visibility: ${(props)=>props.$isLoading ? 'hidden' : 'visible'};

  @media only screen and (max-width: 1024px) {
    display: none;
  }
`;
const BurgerWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Header.styles__BurgerWrapper",
    componentId: "sc-8494ddd5-2"
})`
  display: none;

  @media only screen and (max-width: 1024px) {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;
const SearchButton = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "Header.styles__SearchButton",
    componentId: "sc-8494ddd5-3"
})`
  display: none;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  -webkit-tap-highlight-color: transparent;

  svg {
    width: 22px;
    height: 22px;

    path,
    rect,
    line,
    circle,
    polyline,
    polygon {
      stroke: ${(props)=>props.theme.palette.default.greyDark};
    }
  }

  &:active {
    opacity: 0.6;
  }
`;
const Controls = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Header.styles__Controls",
    componentId: "sc-8494ddd5-4"
})`
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;
  flex: 1;
  min-width: 200px;
  max-width: 500px;
  margin: 0 1rem;
  visibility: ${(props)=>props.$isLoading ? 'hidden' : 'visible'};

  @media only screen and (max-width: 767px) {
    display: none;
  }
`;
// Avatar and dropdown styled components
/*
 * #1742: Kopf-Avatar als Sechseck mit runden Ecken wie im Logo. Rahmen,
 * Ring-Ausschnitt (2 px Abstand) und Bild (3 px Abstand) teilen sich diese
 * Maße mit ihren clip-paths; die inneren Formen runden konzentrisch zur
 * äußeren (concentricHexCornerRadius).
 */ const AVATAR_OUTER = 36;
const AVATAR_RING_INSET = 2;
const AVATAR_RING = AVATAR_OUTER - 2 * AVATAR_RING_INSET;
const AVATAR_IMAGE_INSET = 3;
const AVATAR_IMAGE = AVATAR_OUTER - 2 * AVATAR_IMAGE_INSET;
const AVATAR_OUTER_CLIP_PATH = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$hex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["roundedHexagonClipPath"])(AVATAR_OUTER);
_c = AVATAR_OUTER_CLIP_PATH;
const AVATAR_RING_CLIP_PATH = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$hex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["roundedHexagonClipPath"])(AVATAR_RING, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$hex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["concentricHexCornerRadius"])(AVATAR_OUTER, AVATAR_RING_INSET));
_c1 = AVATAR_RING_CLIP_PATH;
const AVATAR_IMAGE_CLIP_PATH = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$hex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["roundedHexagonClipPath"])(AVATAR_IMAGE, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$hex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["concentricHexCornerRadius"])(AVATAR_OUTER, AVATAR_IMAGE_INSET));
_c2 = AVATAR_IMAGE_CLIP_PATH;
const AvatarContainer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Header.styles__AvatarContainer",
    componentId: "sc-8494ddd5-5"
})`
  position: relative;
  width: ${AVATAR_OUTER}px;
  height: ${AVATAR_OUTER}px;
  padding-bottom: 8px;
  margin-bottom: -8px;
`;
const AvatarWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Header.styles__AvatarWrapper",
    componentId: "sc-8494ddd5-6"
})`
  cursor: pointer;
  position: relative;
  width: ${AVATAR_OUTER}px;
  height: ${AVATAR_OUTER}px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.15s ease-in-out;

  /* Hexagon outline - outer shape */
  &::before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: ${AVATAR_OUTER}px;
    height: ${AVATAR_OUTER}px;
    clip-path: ${AVATAR_OUTER_CLIP_PATH};
    background: ${(props)=>props.theme.palette.default.primary};
    opacity: ${(props)=>props.$isActive ? 1 : 0.6};
    z-index: 0;
    transition: 0.15s ease-in-out;
  }

  /* Hexagon outline - inner cutout (creates outline effect) */
  &::after {
    position: absolute;
    content: '';
    top: ${AVATAR_RING_INSET}px;
    left: ${AVATAR_RING_INSET}px;
    width: ${AVATAR_RING}px;
    height: ${AVATAR_RING}px;
    clip-path: ${AVATAR_RING_CLIP_PATH};
    background: ${(props)=>props.$isActive ? props.theme.palette.default.primary : props.theme.palette.default.white};
    opacity: ${(props)=>props.$isActive ? 0.15 : 1};
    z-index: 0;
    transition: 0.15s ease-in-out;
  }

  &:hover {
    &::before {
      opacity: 1;
    }
    &::after {
      background: ${(props)=>props.theme.palette.default.primary};
      opacity: 0.15;
    }
  }
`;
const AvatarImage = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Header.styles__AvatarImage",
    componentId: "sc-8494ddd5-7"
})`
  position: relative;
  width: ${AVATAR_IMAGE}px;
  height: ${AVATAR_IMAGE}px;
  clip-path: ${AVATAR_IMAGE_CLIP_PATH};
  overflow: hidden;
  z-index: 1;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const AvatarFallback = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Header.styles__AvatarFallback",
    componentId: "sc-8494ddd5-8"
})`
  width: ${AVATAR_IMAGE}px;
  height: ${AVATAR_IMAGE}px;
  display: flex;
  align-items: center;
  justify-content: center;
  clip-path: ${AVATAR_IMAGE_CLIP_PATH};
  background-color: ${(props)=>props.theme.palette.default.primary};
  color: ${(props)=>props.theme.palette.default.white};
  z-index: 1;

  svg {
    width: 18px;
    height: 18px;

    path,
    rect,
    line,
    circle,
    polyline,
    polygon {
      stroke: ${(props)=>props.theme.palette.default.white};
    }
  }
`;
const Dropdown = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Header.styles__Dropdown",
    componentId: "sc-8494ddd5-9"
})`
  position: absolute;
  top: 100%;
  right: 0;
  min-width: 180px;
  padding: 8px;
  background: ${({ theme })=>theme.palette.default.white};
  border: 1px solid ${({ theme })=>theme.palette.border.default};
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.14);
  z-index: ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$zIndex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Z_INDEX"].dropdown};
`;
const dropdownEntry = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  box-sizing: border-box;
  padding: 9px 12px;
  border-radius: 6px;
  font-family: ${({ theme })=>theme.font.secondaryFamily};
  font-size: 13px;
  cursor: pointer;
  transition: background 0.15s ease;
`;
const DropdownHeader = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Header.styles__DropdownHeader",
    componentId: "sc-8494ddd5-10"
})`
  ${dropdownEntry}
  color: ${({ theme })=>theme.palette.text.primary};
  font-weight: 600;

  &:hover {
    background: ${({ theme })=>theme.palette.surface.subtle};
  }
`;
const DropdownItem = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Header.styles__DropdownItem",
    componentId: "sc-8494ddd5-11"
})`
  ${dropdownEntry}
  color: ${({ theme })=>theme.palette.status.error.text};
  font-weight: 500;

  svg {
    width: 16px;
    height: 16px;
  }

  path,
  line,
  polyline {
    stroke: currentColor;
  }

  &:hover {
    background: ${({ theme })=>theme.palette.status.error.bg};
  }
`;
const NotificationBellWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Header.styles__NotificationBellWrapper",
    componentId: "sc-8494ddd5-12"
})`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const LogoLink = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$NavLink$2f$NavLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavLink"]).withConfig({
    displayName: "Header.styles__LogoLink",
    componentId: "sc-8494ddd5-13"
})`
  display: inline-flex;
  flex-shrink: 0;
  text-decoration: none;
  color: inherit;

  /* #1211: Logo wie auf plastship.com 166 × 40 */
  ${({ $site })=>$site && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
      svg {
        display: block;
        width: 166px;
        height: auto;
      }

      ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["guestNavCompact"]} {
        svg {
          width: 133px;
        }
      }
    `}
`;
const GuestNavBar = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Header.styles__GuestNavBar",
    componentId: "sc-8494ddd5-14"
})`
  display: flex;
  flex: 1;
  justify-content: center;
  min-width: 0;

  ${guestNarrow} {
    display: none;
  }
`;
const GuestActions = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Header.styles__GuestActions",
    componentId: "sc-8494ddd5-15"
})`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;

  ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["guestNavCompact"]} {
    gap: 4px;
  }

  ${guestNarrow} {
    display: none;
  }
`;
const GuestBurger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Burger$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]).withConfig({
    displayName: "Header.styles__GuestBurger",
    componentId: "sc-8494ddd5-16"
})`
  /* Doppelklasse: schlägt display der Burger-Wurzel sicher */
  && {
    display: none;
  }

  ${guestNarrow} {
    && {
      display: flex;
    }
  }
`;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "AVATAR_OUTER_CLIP_PATH");
__turbopack_context__.k.register(_c1, "AVATAR_RING_CLIP_PATH");
__turbopack_context__.k.register(_c2, "AVATAR_IMAGE_CLIP_PATH");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Organism/Header/Header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/ClientTranslation.tsx [app-client] (ecmascript) <export useClientSafeTranslation as useClientTranslation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$UserPreferencesContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/context/UserPreferencesContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$SiteLocaleContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/context/SiteLocaleContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$SidebarContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/context/SidebarContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$AppShellActiveContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/context/AppShellActiveContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useIsGuest$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/useIsGuest.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useSessionFlags$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/useSessionFlags.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$ThemeMode$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/ThemeMode.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$Header$2f$Header$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/Header/Header.styles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$Header$2f$headerTone$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/Header/headerTone.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Logos$2f$LogoPlastship$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Logos/LogoPlastship/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$mobileMenu$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/mobileMenu.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$LanguageSwitcher$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/LanguageSwitcher/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$LanguageSwitcher$2f$LanguageSwitcher$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/LanguageSwitcher/LanguageSwitcher.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$ThemeToggleButton$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/ThemeToggleButton/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$ThemeToggleButton$2f$ThemeToggleButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/ThemeToggleButton/ThemeToggleButton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PublicNav$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/PublicNav/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PublicNav$2f$PublicNav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/PublicNav/PublicNav.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$LinkButton$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/LinkButton/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconArrowRight$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconArrowRight/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Button$2f$Button$2e$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Button/Button.types.ts [app-client] (ecmascript)");
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
/**
 * #1478: Suche, Glocke, Timer, Outlook und Avatar gibt es nur mit Konto — und
 * sie ziehen Notifications, Timer, Outlook-Status und Markdown mit. Als
 * eigener Chunk bekommen Besucher der öffentlichen Seiten davon nichts.
 * Während des Ladens steht der unsichtbare Platzhalter an ihrem Platz.
 */ const HeaderAppControls = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lazy"])(()=>__turbopack_context__.A("[project]/apps/web/src/app/components/Organism/Header/HeaderAppControls.tsx [app-client] (ecmascript, async loader)"));
_c = HeaderAppControls;
/**
 * #1924: React.lazy statt next/dynamic. Seit dem App-Rahmen im Root-Layout
 * (#1919) rendert der Kopf auf jeder App-Seite im Layout; Turbopack schreibt
 * für ein next/dynamic dort Chunk-Namen in die react-loadable-manifest der
 * Seite, die es nie ausgibt. Jede App-Seite lud deshalb drei
 * `<link rel="preload">` ins Leere (404 in der Konsole). React.lazy braucht
 * kein Manifest: der Server rendert die Steuerung mit, der Client lädt den
 * Chunk über den eigenen Import — eigener Chunk für Besucher bleibt (#1478).
 */ const appControlsPlaceholder = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$Header$2f$Header$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Controls"], {
    $isLoading: true,
    "data-testid": "header-app-placeholder"
}, void 0, false, {
    fileName: "[project]/apps/web/src/app/components/Organism/Header/Header.tsx",
    lineNumber: 41,
    columnNumber: 32
}, ("TURBOPACK compile-time value", void 0));
const Header = /*#__PURE__*/ _s((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c1 = _s((props, ref)=>{
    _s();
    const { className, overlay = false, transparent = false, site = false, tone = 'light' } = props;
    const headerElRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { themeMode, setThemeMode, language, setLanguage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$UserPreferencesContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserPreferences"])();
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const { tr } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"])(language);
    const { isLeftSidebarOpen, toggleLeftSidebar } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$SidebarContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSidebar"])();
    // #1561: auf Sprachseiten echte Links auf die andere Sprachfassung
    const sprachLinks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$SiteLocaleContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguageSwitcherLinks"])();
    // Scroll-linked header hide/show — slides and fades at scroll speed (mobile only)
    // When sidebar is open, header stays fully visible. Overlay- und Site-Header bleiben immer stehen.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            if (overlay || site) return;
            let lastScrollY = window.scrollY;
            let headerOffset = 0;
            if (isLeftSidebarOpen) {
                const el = headerElRef.current;
                if (el) {
                    headerOffset = 0;
                    el.style.transform = 'translateY(0)';
                    el.style.opacity = '1';
                }
            }
            const handleScroll = {
                "Header.useEffect.handleScroll": ()=>{
                    if (isLeftSidebarOpen) return;
                    const el = headerElRef.current;
                    if (!el) return;
                    const currentScrollY = window.scrollY;
                    const delta = currentScrollY - lastScrollY;
                    const headerHeight = el.offsetHeight;
                    // Accumulate offset clamped between 0 and headerHeight
                    headerOffset = Math.min(Math.max(headerOffset + delta, 0), headerHeight);
                    const progress = headerOffset / headerHeight;
                    el.style.transform = `translateY(-${headerOffset}px)`;
                    el.style.opacity = `${1 - progress}`;
                    lastScrollY = currentScrollY;
                }
            }["Header.useEffect.handleScroll"];
            window.addEventListener('scroll', handleScroll, {
                passive: true
            });
            return ({
                "Header.useEffect": ()=>window.removeEventListener('scroll', handleScroll)
            })["Header.useEffect"];
        }
    }["Header.useEffect"], [
        isLeftSidebarOpen,
        overlay,
        site
    ]);
    // #2175: eine Auffrischung der Sitzung (Theme-/Sprachwechsel) zählt als angemeldet
    const { isAuthenticated, isSessionLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useSessionFlags$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSessionFlags"])();
    // #1478: Die App-Bedienelemente brauchen die App-Shell-Provider
    // (Notifications, Timer, UserContext). Ohne sie (öffentliche Seite ohne
    // Sitzung, bis die Shell nachgeladen ist) nur der Platzhalter. Auf
    // öffentlichen Seiten (site) erst mit Sitzung — Besucher ohne Konto laden
    // sie nie; in der App wie bisher auch während die Sitzung lädt.
    const appShellActive = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$AppShellActiveContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppShellActive"])();
    const showAppControls = appShellActive && (isAuthenticated || !site && isSessionLoading);
    // #1211: Besucher ohne Konto bekommen den Kopf von plastship.com — Menü,
    // Sprache, Login-Pille, schmal ein grüner Burger; keine Suche (sie findet
    // ohne Konto nichts).
    // #1563: schon beim Server-Rendern, wenn kein Session-Cookie da ist — sonst
    // fehlten die Menü-Links im HTML, das Crawler sehen.
    const isGuest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useIsGuest$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsGuest"])();
    const inverted = themeMode === __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$ThemeMode$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeMode"].DARK;
    // Offenes Gast-Menü liegt unter dem Header: dann braucht er seinen Grund
    const seeThrough = overlay && transparent && !isLeftSidebarOpen;
    // #2175: durchsichtig gilt der Ton des Grunds (Frontpage misst ihn), mit Grund der Theme-Default
    const shownTone = seeThrough ? tone : (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$Header$2f$headerTone$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["headerToneDefault"])(themeMode);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$Header$2f$Header$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        className: className,
        ref: (node)=>{
            headerElRef.current = node;
            if (typeof ref === 'function') ref(node);
            else if (ref) ref.current = node;
        },
        "data-testid": 'header-root',
        "data-overlay": overlay ? 'true' : undefined,
        "data-transparent": overlay ? seeThrough ? 'true' : 'false' : undefined,
        "data-tone": overlay ? shownTone : undefined,
        "data-site": site ? 'true' : undefined,
        "data-guest": isGuest ? 'true' : undefined,
        $overlay: overlay,
        $transparent: seeThrough,
        $fg: seeThrough ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$Header$2f$headerTone$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["headerFg"])(tone, theme.palette) : undefined,
        $site: site,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$Header$2f$Header$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LogoLink"], {
                href: isAuthenticated ? '/dashboard' : '/',
                $site: site,
                "aria-label": isAuthenticated ? tr('header.logo.dashboardAriaLabel', {
                    defaultValue: 'plastship – zum Dashboard'
                }) : tr('header.logo.ariaLabel', {
                    defaultValue: 'plastship – zur Startseite'
                }),
                "data-testid": "header-logo-link",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Logos$2f$LogoPlastship$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    inverted: seeThrough ? tone === 'dark' : inverted
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Organism/Header/Header.tsx",
                    lineNumber: 170,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Organism/Header/Header.tsx",
                lineNumber: 159,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            isGuest && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$Header$2f$Header$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GuestNavBar"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PublicNav$2f$PublicNav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CmsPublicNav"], {
                            variant: "bar",
                            dataTestId: "header-public-nav"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Organism/Header/Header.tsx",
                            lineNumber: 177,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Organism/Header/Header.tsx",
                        lineNumber: 174,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$Header$2f$Header$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GuestActions"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$LanguageSwitcher$2f$LanguageSwitcher$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LanguageSwitcher"], {
                                value: language,
                                onChange: setLanguage,
                                links: sprachLinks,
                                ariaLabel: tr('header.language.ariaLabel', {
                                    defaultValue: 'Sprache wählen'
                                }),
                                searchPlaceholder: tr('header.language.searchPlaceholder', {
                                    defaultValue: 'Sprache suchen…'
                                }),
                                noResultsText: tr('header.language.noResults', {
                                    defaultValue: 'Keine Sprache gefunden'
                                }),
                                dataTestId: "header-language-switcher"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Organism/Header/Header.tsx",
                                lineNumber: 182,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$ThemeToggleButton$2f$ThemeToggleButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeToggleButton"], {
                                value: themeMode,
                                onChange: setThemeMode,
                                ariaLabel: tr('profile.themeMode', {
                                    defaultValue: 'Darstellung'
                                }),
                                title: inverted ? tr('profile.theme.light', {
                                    defaultValue: 'Hell'
                                }) : tr('profile.theme.dark', {
                                    defaultValue: 'Dunkel'
                                }),
                                dataTestId: "header-theme-toggle"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Organism/Header/Header.tsx",
                                lineNumber: 197,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$LinkButton$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/login",
                                modifier: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Button$2f$Button$2e$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ButtonModifier"].PRIMARY,
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconArrowRight$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/components/Organism/Header/Header.tsx",
                                    lineNumber: 211,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0)),
                                iconAlign: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Button$2f$Button$2e$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconAligns"].RIGHT,
                                dataTestId: "header-login",
                                children: tr('header.login.label', {
                                    defaultValue: 'Login'
                                })
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Organism/Header/Header.tsx",
                                lineNumber: 208,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/app/components/Organism/Header/Header.tsx",
                        lineNumber: 179,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$Header$2f$Header$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GuestBurger"], {
                        isOpen: isLeftSidebarOpen,
                        onClick: toggleLeftSidebar,
                        controlsId: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$mobileMenu$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOBILE_MENU_ID"]
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Organism/Header/Header.tsx",
                        lineNumber: 219,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/components/Organism/Header/Header.tsx",
                lineNumber: 173,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            !isGuest && (showAppControls ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
                fallback: appControlsPlaceholder,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HeaderAppControls, {}, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Organism/Header/Header.tsx",
                    lineNumber: 229,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Organism/Header/Header.tsx",
                lineNumber: 228,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0)) : // Ohne App-Shell (öffentliche Seite, Sitzung lädt): unsichtbarer Platzhalter
            appControlsPlaceholder)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Organism/Header/Header.tsx",
        lineNumber: 140,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
}, "IwIEl24oF7oajl1RHQkHraDo64A=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$UserPreferencesContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserPreferences"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$SidebarContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSidebar"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$SiteLocaleContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguageSwitcherLinks"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useSessionFlags$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSessionFlags"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$AppShellActiveContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppShellActive"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useIsGuest$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsGuest"]
    ];
})), "IwIEl24oF7oajl1RHQkHraDo64A=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$UserPreferencesContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserPreferences"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$SidebarContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSidebar"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$SiteLocaleContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguageSwitcherLinks"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useSessionFlags$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSessionFlags"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$AppShellActiveContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppShellActive"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useIsGuest$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsGuest"]
    ];
});
_c2 = Header;
Header.displayName = 'Header';
;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "HeaderAppControls");
__turbopack_context__.k.register(_c1, "Header$forwardRef");
__turbopack_context__.k.register(_c2, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Organism/Header/headerTone.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HEADER_BG_TOKENS",
    ()=>HEADER_BG_TOKENS,
    "HEADER_FG_DARK",
    ()=>HEADER_FG_DARK,
    "HEADER_TONES",
    ()=>HEADER_TONES,
    "headerBgHex",
    ()=>headerBgHex,
    "headerFg",
    ()=>headerFg,
    "headerToneDefault",
    ()=>headerToneDefault,
    "headerToneFor",
    ()=>headerToneFor,
    "headerToneForHex",
    ()=>headerToneForHex,
    "isHeaderBgToken",
    ()=>isHeaderBgToken,
    "isHeaderTone",
    ()=>isHeaderTone,
    "isHexColor",
    ()=>isHexColor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$ThemeMode$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/ThemeMode.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$helper$2f$color$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/helper/color.ts [app-client] (ecmascript)");
;
;
const HEADER_TONES = [
    'light',
    'dark'
];
const HEADER_BG_TOKENS = [
    'primary',
    'secondary',
    'white',
    'greyLight',
    'tint',
    'navy'
];
const isHeaderBgToken = (value)=>typeof value === 'string' && HEADER_BG_TOKENS.includes(value);
const isHeaderTone = (value)=>value === 'light' || value === 'dark';
const HEADER_FG_DARK = '#212529';
const headerFg = (tone, palette)=>tone === 'dark' ? palette.text.onAccent : HEADER_FG_DARK;
const headerBgHex = (token, palette)=>token === 'tint' ? palette.site.tint : token === 'navy' ? palette.site.navy : palette.default[token];
const headerToneDefault = (themeMode)=>themeMode === __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$ThemeMode$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeMode"].DARK ? 'dark' : 'light';
const headerToneFor = (token, themeMode, palette)=>token ? headerToneForHex(headerBgHex(token, palette), palette) : headerToneDefault(themeMode);
const isHexColor = (value)=>typeof value === 'string' && /^#(?:[0-9a-f]{3}|[0-9a-f]{6})$/i.test(value);
const headerToneForHex = (grund, palette)=>{
    const hell = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$helper$2f$color$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateContrast"])(headerFg('dark', palette), grund);
    const dunkel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$helper$2f$color$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateContrast"])(HEADER_FG_DARK, grund);
    return hell > dunkel ? 'dark' : 'light';
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Organism/Header/index.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$Header$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/Header/Header.tsx [app-client] (ecmascript)");
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$Header$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Header"];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Organism/MobileMenuShell/MobileMenuShell.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Bar",
    ()=>Bar,
    "Body",
    ()=>Body,
    "Footer",
    ()=>Footer,
    "FooterAction",
    ()=>FooterAction,
    "FooterLabel",
    ()=>FooterLabel,
    "FooterRow",
    ()=>FooterRow,
    "HomeLink",
    ()=>HomeLink,
    "MOBILE_MENU_PANEL_MAX_WIDTH_PX",
    ()=>MOBILE_MENU_PANEL_MAX_WIDTH_PX,
    "Panel",
    ()=>Panel,
    "Section",
    ()=>Section,
    "SectionTitle",
    ()=>SectionTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$NavLink$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/NavLink/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$NavLink$2f$NavLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/NavLink/NavLink.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/site.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$zIndex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/zIndex.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
const MOBILE_MENU_PANEL_MAX_WIDTH_PX = 420;
const hereinschieben = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframes"]`
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
`;
const Panel = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "MobileMenuShell.styles__Panel",
    componentId: "sc-93d97f09-0"
})`
  ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sitePrimaryButton"]}
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  max-width: ${MOBILE_MENU_PANEL_MAX_WIDTH_PX}px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overscroll-behavior: contain;
  background: ${({ theme })=>theme.palette.site.card};
  color: ${({ theme })=>theme.palette.site.text};
  box-shadow: ${({ theme })=>theme.palette.site.shadowHover};
  animation: ${hereinschieben} 0.25s ease-out;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;
const Bar = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "MobileMenuShell.styles__Bar",
    componentId: "sc-93d97f09-1"
})`
  position: sticky;
  top: 0;
  /* über den Einträgen: die Navigation der Seitenleiste trägt z-index 50 */
  z-index: ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$zIndex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Z_INDEX"].sticky};
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme })=>theme.margin.small};
  min-height: ${({ $height })=>$height}px;
  padding: 0 ${({ theme })=>theme.padding.default};
  background: ${({ theme })=>theme.palette.site.card};
  border-bottom: 1px solid ${({ theme })=>theme.palette.site.tint};
`;
const HomeLink = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$NavLink$2f$NavLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavLink"]).withConfig({
    displayName: "MobileMenuShell.styles__HomeLink",
    componentId: "sc-93d97f09-2"
})`
  display: inline-flex;
  flex-shrink: 0;
  text-decoration: none;
  color: inherit;

  svg {
    display: block;
    width: 133px;
    height: auto;
  }
`;
const Body = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "MobileMenuShell.styles__Body",
    componentId: "sc-93d97f09-3"
})`
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  gap: ${({ theme })=>theme.margin.small};
  padding: ${({ theme })=>theme.padding.small} 0;
`;
const Section = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].section.withConfig({
    displayName: "MobileMenuShell.styles__Section",
    componentId: "sc-93d97f09-4"
})`
  display: flex;
  flex-direction: column;
  /* globals.css färbt section mit --color-background — hier gilt die Fläche des Rahmens */
  background: transparent;
  color: inherit;

  & + & {
    border-top: 1px solid ${({ theme })=>theme.palette.site.tint};
    padding-top: ${({ theme })=>theme.padding.small};
  }
`;
const SectionTitle = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].h3.withConfig({
    displayName: "MobileMenuShell.styles__SectionTitle",
    componentId: "sc-93d97f09-5"
})`
  margin: 0 ${({ theme })=>theme.margin.default} ${({ theme })=>theme.margin.extrasmall};
  color: ${({ theme })=>theme.palette.site.muted};
  font-family: ${({ theme })=>theme.font.secondaryFamily};
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
`;
const Footer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "MobileMenuShell.styles__Footer",
    componentId: "sc-93d97f09-6"
})`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: ${({ theme })=>theme.margin.small};
  margin: 0 ${({ theme })=>theme.margin.default};
  padding: ${({ theme })=>theme.padding.default} 0
    calc(${({ theme })=>theme.padding.default} + env(safe-area-inset-bottom, 0px));
  border-top: 1px solid ${({ theme })=>theme.palette.site.tint};
`;
const FooterRow = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "MobileMenuShell.styles__FooterRow",
    componentId: "sc-93d97f09-7"
})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme })=>theme.margin.small};
`;
const FooterLabel = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "MobileMenuShell.styles__FooterLabel",
    componentId: "sc-93d97f09-8"
})`
  color: ${({ theme })=>theme.palette.site.text};
  font-family: ${({ theme })=>theme.font.secondaryFamily};
  font-size: 16px;
`;
const FooterAction = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "MobileMenuShell.styles__FooterAction",
    componentId: "sc-93d97f09-9"
})`
  display: flex;
  justify-content: center;
  padding-top: ${({ theme })=>theme.padding.extrasmall};
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Organism/MobileMenuShell/MobileMenuShell.styles.ts [app-client] (ecmascript) <export Section as MobileMenuSection>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MobileMenuSection",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$MobileMenuShell$2f$MobileMenuShell$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$MobileMenuShell$2f$MobileMenuShell$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/MobileMenuShell/MobileMenuShell.styles.ts [app-client] (ecmascript)");
}),
"[project]/apps/web/src/app/components/Organism/MobileMenuShell/MobileMenuShell.tsx [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MobileMenuShell",
    ()=>MobileMenuShell,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Modal$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Modal/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Modal$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Modal/Modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Burger$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Burger/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Logos$2f$LogoPlastship$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Logos/LogoPlastship/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$SegmentedToggle$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/SegmentedToggle/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$SegmentedToggle$2f$SegmentedToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/SegmentedToggle/SegmentedToggle.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$LanguageSwitcher$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/LanguageSwitcher/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$LanguageSwitcher$2f$LanguageSwitcher$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/LanguageSwitcher/LanguageSwitcher.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$UserPreferencesContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/context/UserPreferencesContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$SiteLocaleContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/context/SiteLocaleContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/ClientTranslation.tsx [app-client] (ecmascript) <export useClientSafeTranslation as useClientTranslation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useMediaQuery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/useMediaQuery.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useUsagePageview$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/useUsagePageview.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$ThemeMode$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/ThemeMode.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/site.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$zIndex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/zIndex.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$mobileMenu$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/mobileMenu.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$sentry$2f$browser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/sentry/browser.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$MobileMenuShell$2f$MobileMenuShell$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/MobileMenuShell/MobileMenuShell.styles.ts [app-client] (ecmascript)");
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
/** Fokussierbare Elemente innerhalb des Menüs (Fokusfalle) */ const FOKUSSIERBAR = 'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';
const sichtbar = (el)=>el.getClientRects().length > 0;
const MobileMenuShell = ({ isOpen, onClose, mode, maxWidthPx, barHeightPx = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SITE_HEADER_HEIGHT_PX"], children, footerAction })=>{
    _s();
    const schmal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useMediaQuery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMediaQuery"])(`(max-width: ${maxWidthPx}px)`);
    const aktiv = isOpen && schmal;
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const { language, setLanguage, themeMode, setThemeMode } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$UserPreferencesContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserPreferences"])();
    const { tr } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"])(language);
    // #1561: auf Sprachseiten echte Links auf die andere Sprachfassung
    const sprachLinks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$SiteLocaleContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguageSwitcherLinks"])();
    const panelRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const melde = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MobileMenuShell.useCallback[melde]": (action)=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useUsagePageview$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sendeNutzungsereignis"])(pathname || '/', __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$mobileMenu$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOBILE_MENU_EVENT"], {
                mode,
                action
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$sentry$2f$browser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addBreadcrumb"]({
                category: 'mobile-menu',
                message: action,
                data: {
                    mode
                }
            });
        }
    }["MobileMenuShell.useCallback[melde]"], [
        pathname,
        mode
    ]);
    // Öffnen melden; beim Schließen den Fokus auf den Burger, falls der Dialog
    // ihn nicht schon zurückgegeben hat (iOS fokussiert Knöpfe beim Tippen nicht).
    const warAktiv = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MobileMenuShell.useEffect": ()=>{
            if (aktiv && !warAktiv.current) melde('open');
            // Anfangsfokus auf Schließen. Der Modal-Hintergrund blendet `visibility`
            // per Transition ein — im ersten Frame ist er noch verborgen und der
            // Fokus des Dialogs greift nicht. Deshalb je Frame erneut, bis er sitzt.
            let frame = 0;
            if (aktiv && !warAktiv.current) {
                let versuche = 0;
                const setzeFokus = {
                    "MobileMenuShell.useEffect.setzeFokus": ()=>{
                        const panel = panelRef.current;
                        if (!panel || panel.contains(document.activeElement)) return;
                        panel.querySelector('[data-autofocus]')?.focus({
                            preventScroll: true
                        });
                        if (!panel.contains(document.activeElement) && versuche++ < 30) {
                            frame = requestAnimationFrame(setzeFokus);
                        }
                    }
                }["MobileMenuShell.useEffect.setzeFokus"];
                setzeFokus();
            }
            if (!aktiv && warAktiv.current) {
                const fokus = document.activeElement;
                if (!fokus || fokus === document.body) {
                    const burger = Array.from(document.querySelectorAll('[data-mobile-menu-trigger]')).find(sichtbar);
                    burger?.focus({
                        preventScroll: true
                    });
                }
            }
            warAktiv.current = aktiv;
            return ({
                "MobileMenuShell.useEffect": ()=>cancelAnimationFrame(frame)
            })["MobileMenuShell.useEffect"];
        // melde nur beim Wechsel des Zustands, nicht bei neuer Identität
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["MobileMenuShell.useEffect"], [
        aktiv
    ]);
    // Seitenwechsel schließt das Menü — nur wenn es wirklich offen ist (breit ist
    // `isOpen` eingeloggt die aufgeklappte Seitenleiste).
    const letzterPfad = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(pathname);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MobileMenuShell.useEffect": ()=>{
            if (letzterPfad.current === pathname) return;
            letzterPfad.current = pathname;
            if (aktiv) onClose();
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["MobileMenuShell.useEffect"], [
        pathname
    ]);
    // Klick auf einen Link im Menü: messen und schließen, auch wenn das Ziel die
    // aktuelle Seite ist (dann ändert sich der Pfad nicht).
    const beiKlick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MobileMenuShell.useCallback[beiKlick]": (event)=>{
            const ziel = event.target;
            if (!ziel?.closest('a[href]')) return;
            melde('navigate');
            onClose();
        }
    }["MobileMenuShell.useCallback[beiKlick]"], [
        melde,
        onClose
    ]);
    // Fokusfalle: Tab und Umschalt+Tab bleiben im Menü
    const beiTaste = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MobileMenuShell.useCallback[beiTaste]": (event)=>{
            if (event.key !== 'Tab' || !panelRef.current) return;
            const elemente = Array.from(panelRef.current.querySelectorAll(FOKUSSIERBAR)).filter(sichtbar);
            if (elemente.length === 0) return;
            const erstes = elemente[0];
            const letztes = elemente[elemente.length - 1];
            const aktuell = document.activeElement;
            if (event.shiftKey && (aktuell === erstes || !panelRef.current.contains(aktuell))) {
                event.preventDefault();
                letztes.focus();
            } else if (!event.shiftKey && (aktuell === letztes || !panelRef.current.contains(aktuell))) {
                event.preventDefault();
                erstes.focus();
            }
        }
    }["MobileMenuShell.useCallback[beiTaste]"], []);
    const titel = tr('header.menu.ariaLabel', {
        defaultValue: 'Menü'
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Modal$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
        isOpen: aktiv,
        onClose: onClose,
        variant: "bare",
        ariaLabel: titel,
        zIndex: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$zIndex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Z_INDEX"].overlay,
        dataTestId: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$mobileMenu$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOBILE_MENU_ID"],
        children: aktiv && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$MobileMenuShell$2f$MobileMenuShell$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Panel"], {
            ref: panelRef,
            id: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$mobileMenu$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOBILE_MENU_ID"],
            "data-testid": "mobile-menu-root",
            "data-mode": mode,
            onClickCapture: beiKlick,
            onKeyDown: beiTaste,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$MobileMenuShell$2f$MobileMenuShell$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                    $height: barHeightPx,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$MobileMenuShell$2f$MobileMenuShell$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HomeLink"], {
                            href: "/",
                            "aria-label": tr('header.logo.ariaLabel', {
                                defaultValue: 'plastship – zur Startseite'
                            }),
                            "data-testid": "mobile-menu-logo-link",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Logos$2f$LogoPlastship$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                inverted: themeMode === __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$ThemeMode$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeMode"].DARK
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Organism/MobileMenuShell/MobileMenuShell.tsx",
                                lineNumber: 204,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Organism/MobileMenuShell/MobileMenuShell.tsx",
                            lineNumber: 199,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Burger$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            isOpen: true,
                            trigger: false,
                            onClick: onClose,
                            dataTestId: "mobile-menu-close",
                            autoFocusMarker: true
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Organism/MobileMenuShell/MobileMenuShell.tsx",
                            lineNumber: 206,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/app/components/Organism/MobileMenuShell/MobileMenuShell.tsx",
                    lineNumber: 197,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$MobileMenuShell$2f$MobileMenuShell$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Body"], {
                    children: children
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Organism/MobileMenuShell/MobileMenuShell.tsx",
                    lineNumber: 214,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$MobileMenuShell$2f$MobileMenuShell$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Footer"], {
                    "data-testid": "mobile-menu-footer",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$MobileMenuShell$2f$MobileMenuShell$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FooterRow"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$MobileMenuShell$2f$MobileMenuShell$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FooterLabel"], {
                                    children: tr('profile.language', {
                                        defaultValue: 'Sprache'
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/components/Organism/MobileMenuShell/MobileMenuShell.tsx",
                                    lineNumber: 217,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$LanguageSwitcher$2f$LanguageSwitcher$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LanguageSwitcher"], {
                                    value: language,
                                    onChange: setLanguage,
                                    links: sprachLinks,
                                    ariaLabel: tr('header.language.ariaLabel', {
                                        defaultValue: 'Sprache wählen'
                                    }),
                                    searchPlaceholder: tr('header.language.searchPlaceholder', {
                                        defaultValue: 'Sprache suchen…'
                                    }),
                                    noResultsText: tr('header.language.noResults', {
                                        defaultValue: 'Keine Sprache gefunden'
                                    }),
                                    dataTestId: "mobile-menu-language"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/components/Organism/MobileMenuShell/MobileMenuShell.tsx",
                                    lineNumber: 218,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/app/components/Organism/MobileMenuShell/MobileMenuShell.tsx",
                            lineNumber: 216,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        mode === 'guest' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$MobileMenuShell$2f$MobileMenuShell$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FooterRow"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$MobileMenuShell$2f$MobileMenuShell$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FooterLabel"], {
                                    children: tr('profile.themeMode', {
                                        defaultValue: 'Darstellung'
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/components/Organism/MobileMenuShell/MobileMenuShell.tsx",
                                    lineNumber: 235,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$SegmentedToggle$2f$SegmentedToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SegmentedToggle"], {
                                    options: [
                                        {
                                            value: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$ThemeMode$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeMode"].LIGHT,
                                            label: tr('profile.theme.light', {
                                                defaultValue: 'Hell'
                                            })
                                        },
                                        {
                                            value: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$ThemeMode$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeMode"].DARK,
                                            label: tr('profile.theme.dark', {
                                                defaultValue: 'Dunkel'
                                            })
                                        }
                                    ],
                                    value: themeMode,
                                    onChange: setThemeMode,
                                    ariaLabel: tr('profile.themeMode', {
                                        defaultValue: 'Darstellung'
                                    }),
                                    dataTestId: "mobile-menu-theme"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/components/Organism/MobileMenuShell/MobileMenuShell.tsx",
                                    lineNumber: 236,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/app/components/Organism/MobileMenuShell/MobileMenuShell.tsx",
                            lineNumber: 234,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)),
                        footerAction && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$MobileMenuShell$2f$MobileMenuShell$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FooterAction"], {
                            children: footerAction
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Organism/MobileMenuShell/MobileMenuShell.tsx",
                            lineNumber: 254,
                            columnNumber: 30
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/app/components/Organism/MobileMenuShell/MobileMenuShell.tsx",
                    lineNumber: 215,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/src/app/components/Organism/MobileMenuShell/MobileMenuShell.tsx",
            lineNumber: 189,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Organism/MobileMenuShell/MobileMenuShell.tsx",
        lineNumber: 180,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(MobileMenuShell, "hvCcHRmFaltgoIIakuWEvTD3rNQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useMediaQuery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMediaQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$UserPreferencesContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserPreferences"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$SiteLocaleContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguageSwitcherLinks"]
    ];
});
_c = MobileMenuShell;
;
const __TURBOPACK__default__export__ = MobileMenuShell;
var _c;
__turbopack_context__.k.register(_c, "MobileMenuShell");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Organism/MobileMenuShell/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$MobileMenuShell$2f$MobileMenuShell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/MobileMenuShell/MobileMenuShell.tsx [app-client] (ecmascript) <locals>");
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);})()

//# sourceMappingURL=apps_web_src_app_components_Organism_0r-d7e267et2r._.js.map