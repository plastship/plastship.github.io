(()=>{"use strict";(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/apps/web/src/config/cms/legalPages.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * #2141 (Entscheidung Moritz 26.10.): Rechtsseiten — EINE Liste für
 *   - den Ausschluss aus der automatischen CMS-Übersetzung (nur Deutsch als
 *     verbindliche Fassung und Englisch als Höflichkeitsübersetzung werden
 *     gepflegt; alle anderen Sprachen zeigen die englische Fassung),
 *   - den Hinweis auf jeder Rechtsseite, dass nur die deutsche Fassung gilt
 *     (CmsPageView, Testid `cms-legal-language-notice`).
 *
 * Ohne Alias-Importe: Übersetzungslauf, Patch-Skripte (tsx) und Jest laden
 * dieselbe Datei.
 */ __turbopack_context__.s([
    "LEGAL_PAGE_LOCALES",
    ()=>LEGAL_PAGE_LOCALES,
    "LEGAL_PAGE_SLUGS",
    ()=>LEGAL_PAGE_SLUGS,
    "isLegalCmsEntity",
    ()=>isLegalCmsEntity,
    "isLegalPageSlug",
    ()=>isLegalPageSlug,
    "legalCmsDelivery",
    ()=>legalCmsDelivery,
    "legalPageLocalesOf",
    ()=>legalPageLocalesOf
]);
const LEGAL_PAGE_SLUGS = [
    '/agb',
    '/imprint',
    '/privacy',
    '/email-disclaimer',
    // #2141: Erklärung zur Barrierefreiheit (freiwillig, WCAG 2.2 AA als Hausstandard)
    '/accessibility'
];
const LEGAL_PAGE_LOCALES = [
    'de',
    'en'
];
function isLegalPageSlug(slug) {
    if (typeof slug !== 'string') return false;
    const normal = `/${slug.replace(/^\/+|\/+$/g, '')}`;
    return LEGAL_PAGE_SLUGS.includes(normal);
}
function isLegalCmsEntity(type, record) {
    if (type !== 'page' || !record) return false;
    // #2157: Schalter der Redaktion (cms_page.is_legal) ist die Quelle der
    // Wahrheit; die Liste oben nur Startwert (Seed-Schritt cms-legal-flag-2157)
    // und Rückfall, wo die Spalte nicht mitgeladen ist (Paket-Schlüssel)
    if (typeof record.isLegal === 'boolean') return record.isLegal;
    return isLegalPageSlug(typeof record.slug === 'string' ? record.slug : null);
}
function legalPageLocalesOf(locales) {
    return locales.filter((locale)=>LEGAL_PAGE_LOCALES.includes(locale));
}
function legalCmsDelivery(legal, delivery) {
    const { preview } = delivery;
    const recht = typeof legal === 'boolean' ? legal : isLegalPageSlug(legal);
    if (!recht || !preview || LEGAL_PAGE_LOCALES.includes(preview)) {
        return delivery;
    }
    const en = 'en';
    const mit = (liste)=>liste.includes(en) ? liste : [
            ...liste,
            en
        ];
    return {
        ...delivery,
        preview: en,
        delivered: mit(delivery.delivered),
        render: mit(delivery.render)
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/config/cmsBlocks/animationText.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CMS_ANIMATION_ACTIONS",
    ()=>CMS_ANIMATION_ACTIONS,
    "CMS_ANIMATION_BLOCK_ELEMENTS",
    ()=>CMS_ANIMATION_BLOCK_ELEMENTS,
    "CMS_ANIMATION_EVENT",
    ()=>CMS_ANIMATION_EVENT,
    "START_ANIMATION_BLOCKS_2180",
    ()=>START_ANIMATION_BLOCKS_2180,
    "alsAnimation",
    ()=>alsAnimation,
    "isCmsAnimationAction",
    ()=>isCmsAnimationAction,
    "isCmsAnimationElement",
    ()=>isCmsAnimationElement,
    "isCmsAnimationEventElement",
    ()=>isCmsAnimationEventElement,
    "patchStartAnimations2180",
    ()=>patchStartAnimations2180
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/cmsBlocks/types.ts [app-client] (ecmascript)");
;
const START_ANIMATION_BLOCKS_2180 = {
    'start-einsatz': {
        image: '/images/cms/plastship-illustrations-1920x650px-netzw-a59e1b.webp',
        element: 'cycle'
    },
    'start-monitored-materials': {
        image: '/images/cms/plastship-siegel-quality-all-grades-colo-5dc84f.webp',
        element: 'seal'
    }
};
const CMS_ANIMATION_EVENT = 'cms_animation';
const CMS_ANIMATION_ACTIONS = [
    'view',
    'cta',
    'spread',
    'hover',
    'tilt',
    'step',
    'replay',
    'pause'
];
const CMS_ANIMATION_BLOCK_ELEMENTS = [
    'ctaBand',
    'cardGrid',
    'stats',
    'stepList',
    'comparison',
    'leadText',
    'partnerLogos',
    'mediaText',
    'contactMember'
];
const isCmsAnimationElement = (value)=>typeof value === 'string' && __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CMS_ANIMATION_ELEMENTS"].includes(value);
const isCmsAnimationEventElement = (value)=>isCmsAnimationElement(value) || typeof value === 'string' && CMS_ANIMATION_BLOCK_ELEMENTS.includes(value);
const isCmsAnimationAction = (value)=>typeof value === 'string' && CMS_ANIMATION_ACTIONS.includes(value);
function alsAnimation(block, element) {
    const p = block.props ?? {};
    const props = {
        headline: p.headline,
        paragraphs: p.paragraphs,
        element
    };
    if (p.imagePosition !== undefined) props.elementPosition = p.imagePosition;
    if (p.cta !== undefined) props.cta = p.cta;
    if (p.surface !== undefined) props.surface = p.surface;
    return {
        id: block.id,
        type: 'animationText',
        props,
        ...block.layout !== undefined ? {
            layout: block.layout
        } : {},
        ...block.edge !== undefined ? {
            edge: block.edge
        } : {}
    };
}
function patchStartAnimations2180(blocks) {
    const liste = blocks;
    const next = [
        ...liste
    ];
    let gefunden = 0;
    let umgestellt = 0;
    let schon = 0;
    const abweichend = [];
    for (const [id, { image, element }] of Object.entries(START_ANIMATION_BLOCKS_2180)){
        const index = liste.findIndex((b)=>b?.id === id);
        if (index < 0) continue;
        gefunden += 1;
        const block = liste[index];
        if (block.type === 'animationText') {
            schon += 1;
            continue;
        }
        const bild = block.props?.image?.src;
        if (block.type !== 'mediaText' || bild !== image) {
            abweichend.push(id);
            continue;
        }
        next[index] = alsAnimation(block, element);
        umgestellt += 1;
    }
    const extra = abweichend.length > 0 ? {
        abweichend
    } : {};
    if (umgestellt > 0) return {
        blocks: next,
        changed: true,
        reason: 'umgestellt',
        ...extra
    };
    if (gefunden === 0) return {
        blocks: liste,
        changed: false,
        reason: 'fehlt'
    };
    if (schon === gefunden) return {
        blocks: liste,
        changed: false,
        reason: 'schon umgestellt'
    };
    return {
        blocks: liste,
        changed: false,
        reason: 'geändert',
        ...extra
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/config/cmsBlocks/cardGrid2194.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * #2194 Karten-Raster „Waben-Spotlight und kein Waisenkind": reine Regeln
 * ohne DOM und Datenbank.
 *
 * - Waben-Kontaktkacheln: Ein Raster aus höchstens drei Karten, die alle nur
 *   Titel, Icon und Ziel tragen (keine Beschreibung, kein Bild, keine
 *   Hervorhebung), ist ein Wegweiser (Startseite „Kontaktieren Sie uns!") —
 *   es erscheint als große Sechsecke (HexTileLinks). Kein eigenes Feld: das
 *   kostete einen neuen Text in 70 Sprachen, und die Form folgt eindeutig aus
 *   dem Inhalt.
 * - Labor-Patch: Auf /laboratory-services standen Zwischenüberschriften und
 *   ein „Ziel" als Karten im Raster (vier Karten plus eine einsame fünfte).
 *   Sie bekommen `accent` (volle Breite, Navy) — der Text bleibt, nur das
 *   Flag kommt dazu, die Übersetzungen bleiben gültig.
 */ __turbopack_context__.s([
    "HEX_TILE_MAX_CARDS",
    ()=>HEX_TILE_MAX_CARDS,
    "LAB_ACCENT_CARDS",
    ()=>LAB_ACCENT_CARDS,
    "LAB_ACCENT_PAGE",
    ()=>LAB_ACCENT_PAGE,
    "isHexTileGrid",
    ()=>isHexTileGrid,
    "patchLabAccent2194",
    ()=>patchLabAccent2194
]);
const HEX_TILE_MAX_CARDS = 3;
const hatText = (value)=>{
    if (!value || typeof value !== 'object') return false;
    return Object.values(value).some((v)=>typeof v === 'string' && v.trim() !== '');
};
function isHexTileGrid(cards, hrefOk) {
    if (cards.length === 0 || cards.length > HEX_TILE_MAX_CARDS) return false;
    return cards.every((raw)=>{
        const card = raw;
        return Boolean(card.icon) && !card.image && !card.accent && !hatText(card.description) && hrefOk(card.cta?.href);
    });
}
const LAB_ACCENT_PAGE = '/laboratory-services';
const LAB_ACCENT_CARDS = {
    'laboratory-services-8-cardGrid': [
        {
            index: 4,
            de: 'Ziel'
        }
    ],
    'laboratory-services-10-cardGrid': [
        {
            index: 0,
            de: 'Materialanalysen sind Teil eines Gesamtsystems:'
        },
        {
            index: 4,
            de: 'So stellen wir sicher, dass:'
        }
    ]
};
function patchLabAccent2194(blocks) {
    const liste = [
        ...blocks
    ];
    const abweichend = [];
    let gefunden = 0;
    let geaendert = false;
    for (const [id, ziele] of Object.entries(LAB_ACCENT_CARDS)){
        const index = liste.findIndex((b)=>b?.id === id);
        if (index < 0) continue;
        gefunden += 1;
        const block = liste[index];
        const cards = Array.isArray(block.props?.cards) ? [
            ...block.props?.cards
        ] : null;
        if (block.type !== 'cardGrid' || !cards) {
            abweichend.push(id);
            continue;
        }
        let blockGeaendert = false;
        for (const ziel of ziele){
            const card = cards[ziel.index];
            if (!card || card.title?.de !== ziel.de) {
                abweichend.push(`${id}#${ziel.index}`);
                continue;
            }
            if (card.accent === true) continue;
            cards[ziel.index] = {
                ...card,
                accent: true
            };
            blockGeaendert = true;
        }
        if (blockGeaendert) {
            liste[index] = {
                ...block,
                props: {
                    ...block.props,
                    cards
                }
            };
            geaendert = true;
        }
    }
    if (gefunden === 0) return {
        blocks: liste,
        changed: false,
        reason: 'fehlt'
    };
    const rest = abweichend.length ? {
        abweichend
    } : {};
    if (geaendert) return {
        blocks: liste,
        changed: true,
        reason: 'umgestellt',
        ...rest
    };
    return {
        blocks: liste,
        changed: false,
        reason: abweichend.length ? 'geändert' : 'schon umgestellt',
        ...rest
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/config/cmsBlocks/edges.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CMS_DEFAULT_EDGE",
    ()=>CMS_DEFAULT_EDGE,
    "cmsBlockBand",
    ()=>cmsBlockBand,
    "cmsBlockSurface",
    ()=>cmsBlockSurface,
    "cmsEdgeModes",
    ()=>cmsEdgeModes,
    "cmsEndsOnBand",
    ()=>cmsEndsOnBand,
    "cmsFooterEdgeColor",
    ()=>cmsFooterEdgeColor,
    "resolveBlockEdges",
    ()=>resolveBlockEdges
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$edge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/hex/edge.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/cmsBlocks/registry.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$surface$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/cmsBlocks/surface.ts [app-client] (ecmascript)");
;
;
;
/**
 * Wabenrand der CMS-Blöcke (#1188, Plan docs/plans/HEX_EDGE.md 3.4): aus dem
 * Feld `edge` eines Blocks und seinen Nachbarn wird der Rand, den die Ansicht
 * zeichnet. Farben wählt niemand im Editor:
 *
 * - innen oben/unten = Fläche des Blocks darüber/darunter (erster/letzter
 *   Block: die Seite), innen links/rechts = die Seite;
 * - außen = die eigene Fläche;
 * - ohne feste Farbe (Hero-Bild) entfällt der Rand dieser Seite;
 * - außen oben direkt unter einem Hero: in Hero-Tiefe und `overlap` — die
 *   Kacheln wachsen in die Zone, die die Hero-Bühne unter der Falz freihält.
 *
 * „Seite" ist das Theme-`white` — im Dunkelmodus der dunkle Grund.
 */ const PAGE = 'white';
/** #1954: Randfarbe je Fläche eines Rasterblocks — weiß ist die Seite */ const SURFACE_COLOR = {
    white: PAGE,
    tint: 'tint',
    dark: 'navy'
};
const CMS_DEFAULT_EDGE = {
    hero: {
        bottom: 'inner'
    },
    // #1418: Seitenkopf wie der Hero — Wabenrand unten, innen
    masthead: {
        bottom: 'inner'
    },
    // #2192: Schluss-Band (Wabenband) — Fransen der Nachbarflächen oben und unten
    cta: {
        top: 'inner',
        bottom: 'inner'
    }
};
function cmsEdgeModes(block) {
    const allowed = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CMS_BLOCK_REGISTRY"][block.type].edges;
    const edge = block.edge ?? CMS_DEFAULT_EDGE[block.type] ?? {};
    const result = {
        top: 'none',
        right: 'none',
        bottom: 'none',
        left: 'none'
    };
    if (!allowed) return result;
    for (const side of __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$edge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HEX_EDGE_SIDES"]){
        const mode = edge[side] ?? edge.all ?? 'none';
        result[side] = mode === 'outer' && allowed !== 'innerOuter' ? 'none' : mode;
    }
    return result;
}
function cmsBlockBand(block) {
    switch(block.type){
        case 'hero':
        case 'masthead':
            // Bild bzw. wählbare Fläche (auch Verlauf) — keine feste Farbe
            return null;
        case 'video':
        case 'imagefilm':
            return block.props.background ?? 'primary';
        case 'cta':
            // #2192: Navy-Band (site.navy) — im Dunkelmodus bleibt es navy, `primary` hellt dort auf
            return 'navy';
        default:
            // #1954: Rasterblöcke — ihre Fläche (SiteBand), ohne Angabe die Seite
            return SURFACE_COLOR[(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$surface$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cmsBlockSurfaceOf"])(block)];
    }
}
function cmsBlockSurface(block) {
    switch(block.type){
        case 'video':
        case 'imagefilm':
            return block.props.background ?? 'primary';
        case 'cta':
            return 'navy';
        case 'hero':
        case 'masthead':
            return null;
        default:
            // #1954: Rasterblöcke — ihr Band in seiner Fläche (Außenrand am SiteBand)
            return SURFACE_COLOR[(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$surface$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cmsBlockSurfaceOf"])(block)];
    }
}
/**
 * Nachbarfarbe einer Seite für einen inneren Rand. `null` = kein Rand.
 *
 * Befund 29.10. (#2192): Unter dem letzten Block steht der Fuß, nicht die
 * Seite. Früher franste der letzte Block unten in Seitenfarbe aus und der Fuß
 * oben ebenfalls — dazwischen stand ein Streifen Seitengrund (im Dunkelmodus
 * eine schwarze Zeile unter jedem farbigen Schlussblock). Jetzt zeichnet nur
 * der Fuß den Übergang, in der Farbe des letzten Blocks (cmsFooterEdgeColor);
 * der letzte Block lässt seinen unteren Rand weg. Nur ein Block ohne feste
 * Farbe (Bild) behält ihn — der Fuß kann seine Farbe nicht aufnehmen.
 */ function neighbourColor(blocks, index, side) {
    if (side === 'left' || side === 'right') return PAGE;
    const neighbour = blocks[side === 'top' ? index - 1 : index + 1];
    if (neighbour) return cmsBlockBand(neighbour);
    if (side === 'bottom' && cmsFooterEdgeColor(blocks) !== null) return null;
    return PAGE;
}
function cmsFooterEdgeColor(blocks) {
    const last = blocks[blocks.length - 1];
    return last ? cmsBlockBand(last) : null;
}
function cmsEndsOnBand(blocks) {
    const color = cmsFooterEdgeColor(blocks);
    return color !== null && color !== PAGE;
}
function resolveBlockEdges(blocks, index) {
    const block = blocks[index];
    if (!block) return {};
    const modes = cmsEdgeModes(block);
    const depth = block.type === 'hero' ? 'hero' : 'section';
    const edges = {};
    for (const side of __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$edge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HEX_EDGE_SIDES"]){
        const mode = modes[side];
        if (mode === 'none') continue;
        const color = mode === 'inner' ? neighbourColor(blocks, index, side) : cmsBlockSurface(block);
        if (!color) continue;
        // #1497: Außenrand oben direkt unter dem Hero — der hält die Zone unter der Falz frei
        edges[side] = mode === 'outer' && side === 'top' && blocks[index - 1]?.type === 'hero' ? {
            placement: mode,
            color,
            depth: 'hero',
            overlap: true
        } : {
            placement: mode,
            color,
            depth
        };
    }
    return edges;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/config/cmsBlocks/headings.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CMS_PAGE_HEADING_TYPES",
    ()=>CMS_PAGE_HEADING_TYPES,
    "CMS_PROMOTABLE_HEADING_TYPES",
    ()=>CMS_PROMOTABLE_HEADING_TYPES,
    "markdownLeadingHeading",
    ()=>markdownLeadingHeading,
    "resolveCmsPageHeadingBlockId",
    ()=>resolveCmsPageHeadingBlockId
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$localize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/cmsBlocks/localize.ts [app-client] (ecmascript)");
;
const CMS_PAGE_HEADING_TYPES = [
    'masthead'
];
/** Überschrift eines Blocks, der als erster Block die H1 tragen kann. */ const UEBERSCHRIFT = {
    hero: (block, locale)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$localize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cmsText"])(block.props.slides[0]?.headline, locale),
    mediaText: (block, locale)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$localize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cmsText"])(block.props.headline, locale),
    animationText: (block, locale)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$localize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cmsText"])(block.props.headline, locale),
    stats: (block, locale)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$localize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cmsText"])(block.props.headline, locale),
    team: (block, locale)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$localize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cmsText"])(block.props.headline, locale),
    faq: (block, locale)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$localize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cmsText"])(block.props.headline, locale),
    newsTeaser: (block, locale)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$localize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cmsText"])(block.props.headline, locale),
    richText: (block, locale)=>markdownLeadingHeading((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$localize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cmsText"])(block.props.content, locale))
};
const CMS_PROMOTABLE_HEADING_TYPES = Object.keys(UEBERSCHRIFT);
_c = CMS_PROMOTABLE_HEADING_TYPES;
function markdownLeadingHeading(markdown) {
    const ersteZeile = markdown.split('\n').find((zeile)=>zeile.trim() !== '') ?? '';
    const treffer = /^ {0,3}#{1,6}[ \t]+(.+?)[ \t#]*$/.exec(ersteZeile);
    return treffer?.[1]?.trim() ?? '';
}
function ueberschriftVon(block, locale) {
    const lesen = UEBERSCHRIFT[block.type];
    return lesen ? lesen(block, locale).trim() : '';
}
function resolveCmsPageHeadingBlockId(blocks, locale) {
    const kopf = blocks.find((block)=>CMS_PAGE_HEADING_TYPES.includes(block.type));
    if (kopf) return kopf.id;
    const erster = blocks[0];
    if (erster && ueberschriftVon(erster, locale) !== '') return erster.id;
    return null;
}
var _c;
__turbopack_context__.k.register(_c, "CMS_PROMOTABLE_HEADING_TYPES");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/config/cmsBlocks/icons.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Icons der Inhaltselemente (#1199): feste Auswahl für Karten, Schritte und CTA.
 * plastship.com setzt an diese Stellen einen Icon-Chip (farbiger Kreis mit Ring);
 * die Namen hier zeigen auf vorhandene Atome unter `Atom/Icons` (Zuordnung in
 * `Atom/IconChip`). Abhängigkeitsfrei, damit die zod-Schemas sie nutzen können.
 */ __turbopack_context__.s([
    "CMS_ICON_NAMES",
    ()=>CMS_ICON_NAMES,
    "CMS_ICON_TONES",
    ()=>CMS_ICON_TONES
]);
const CMS_ICON_NAMES = [
    'plus',
    'search',
    'send',
    'award',
    'analysis',
    'recycle',
    'warning',
    'check',
    'chart',
    'list',
    'network',
    'shield',
    'users',
    'contact',
    'document',
    'transport',
    'star',
    'sparkle',
    'settings',
    'database',
    'verification',
    'connection'
];
const CMS_ICON_TONES = [
    'green',
    'blue',
    'red'
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/config/cmsBlocks/leadText2195.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * #2195 Leitsatz: reine Regeln ohne DOM und Datenbank.
 *
 * Der Kernsatz jeder Unterseite steht als Fließtext direkt unter dem
 * Seitenkopf (Blöcke `<seite>-lead`, angelegt von patch-cms-masthead-1563 über
 * `buildLeadTextBlock`). Er bekommt die Darstellung `variant: 'lead'`:
 *
 * - erster Absatz = Leitsatz (groß, mittig), sehr lange Absätze eine Stufe kleiner;
 * - ein folgender Absatz aus Kurzwörtern („Planen. Absichern. Verlässlich
 *   liefern.") = grüne Zeile, je Kurzsatz ein Eintrag;
 * - jeder andere folgende Absatz = ruhiger Begleittext.
 *
 * Kein neuer Text: die Variante ist ein Feld, die Übersetzungen bleiben gültig.
 * Datenpatch `patchLeadVariant2195` (Schritt in scripts/patch-cms-startseite-1948.ts,
 * Marker `cms-patch:lead-2195:<slug>`), frische Datenbanken bekommen die
 * Variante schon von `buildLeadTextBlock`.
 */ /** Seiten mit Leitsatz-Block (Stand 29.10., aus der Datenbank) */ __turbopack_context__.s([
    "LEAD_LONG_CHARS",
    ()=>LEAD_LONG_CHARS,
    "LEAD_PAGES",
    ()=>LEAD_PAGES,
    "isShortWords",
    ()=>isShortWords,
    "leadBlockIdOf",
    ()=>leadBlockIdOf,
    "leadTextParts",
    ()=>leadTextParts,
    "leadWords",
    ()=>leadWords,
    "patchLeadVariant2195",
    ()=>patchLeadVariant2195,
    "plainLeadText",
    ()=>plainLeadText
]);
const LEAD_PAGES = [
    '/end-to-end-supply',
    '/laboratory-services',
    '/material-quality',
    '/partners',
    '/recyclate-performance',
    '/recycler-circle',
    '/story',
    '/waste-disposal'
];
const leadBlockIdOf = (slug)=>`${slug.replace(/^\//, '')}-lead`;
const LEAD_LONG_CHARS = 160;
/** Kurzwörter: höchstens so viele Sätze … */ const KURZ_MAX_SAETZE = 5;
/** … mit höchstens so vielen Wörtern je Satz */ const KURZ_MAX_WOERTER = 5;
function plainLeadText(markdown) {
    return markdown.replace(/!\[[^\]]*\]\([^)]*\)/g, '').replace(/\[([^\]]*)\]\([^)]*\)/g, '$1').replace(/^\s{0,3}#{1,6}\s+/gm, '').replace(/(\*\*|__)(.+?)\1/g, '$2').replace(/(^|[\s(])[*_]([^*_\s][^*_]*?)[*_](?=[\s).,!?:;]|$)/g, '$1$2').replace(/\s+/g, ' ').trim();
}
/** Sätze eines Absatzes (Satzzeichen bleibt am Satz) */ const saetze = (absatz)=>absatz.split(/(?<=[.!?。！？])\s+/u).map((s)=>s.trim()).filter(Boolean);
const woerter = (text)=>text.split(/\s+/).filter(Boolean);
function isShortWords(absatz) {
    const liste = saetze(absatz);
    return liste.length >= 2 && liste.length <= KURZ_MAX_SAETZE && liste.every((s)=>woerter(s).length <= KURZ_MAX_WOERTER);
}
function leadTextParts(markdown) {
    const absaetze = markdown.split(/\n\s*\n/).map(plainLeadText).filter(Boolean);
    const [lead = '', ...folgende] = absaetze;
    let short = [];
    const rest = [];
    for (const absatz of folgende){
        if (short.length === 0 && isShortWords(absatz)) short = saetze(absatz);
        else rest.push(absatz);
    }
    return {
        lead,
        short,
        rest,
        long: lead.length > LEAD_LONG_CHARS
    };
}
function leadWords(text) {
    const liste = woerter(text);
    const n = liste.length;
    return liste.map((word, index)=>({
            word,
            index,
            share: n > 1 ? index / (n - 1) : 0
        }));
}
function patchLeadVariant2195(slug, blocks) {
    const liste = [
        ...blocks
    ];
    const id = leadBlockIdOf(slug);
    const index = liste.findIndex((b)=>b?.id === id);
    if (index < 0) return {
        blocks: liste,
        changed: false,
        reason: 'fehlt'
    };
    const block = liste[index];
    if (block.type !== 'richText' || !block.props) return {
        blocks: liste,
        changed: false,
        reason: 'geändert',
        abweichend: [
            id
        ]
    };
    if (block.props.variant === 'lead') return {
        blocks: liste,
        changed: false,
        reason: 'schon umgestellt'
    };
    if (block.props.variant !== undefined) return {
        blocks: liste,
        changed: false,
        reason: 'geändert',
        abweichend: [
            id
        ]
    };
    liste[index] = {
        ...block,
        props: {
            ...block.props,
            variant: 'lead'
        }
    };
    return {
        blocks: liste,
        changed: true,
        reason: 'umgestellt'
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/config/cmsBlocks/links.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cmsHref",
    ()=>cmsHref,
    "withTrailingSlashLinks",
    ()=>withTrailingSlashLinks
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$url$2f$trailingSlash$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/url/trailingSlash.ts [app-client] (ecmascript)");
;
/**
 * #1563: Interne Linkziele aus CMS-Inhalten einheitlich mit Schluss-Slash.
 * `next.config` hat `trailingSlash: true` — `/privacy` kostet sonst einen 308,
 * bevor der Besucher (oder Crawler) die Seite bekommt. `next/link` hängt den
 * Slash selbst an, schlichte `<a>` (Datenschutz-Link im Kontaktformular) nicht;
 * deshalb normalisiert der Renderer die Ziele, bevor sie eine Ansicht sieht.
 *
 * Erfasst wird jedes Feld, dessen Name auf `href` endet (`href`, `privacyHref`
 * …), in beliebiger Tiefe (CTA, Karten, Slides, News). Markdown-Links richtet
 * `SiteMarkdown` selbst. Externe Adressen, Anker, Query und Dateien bleiben
 * unverändert (`ensureTrailingSlashHref`).
 */ const IST_LINKFELD = /href$/i;
/** Werte, die als Text gespeichert ein leeres Ziel meinen (#2018) */ const LEERES_ZIEL = /^(null|undefined)$/i;
function cmsHref(wert) {
    if (typeof wert !== 'string') return undefined;
    const ziel = wert.trim();
    if (ziel === '' || LEERES_ZIEL.test(ziel)) return undefined;
    return ziel;
}
function normalisiere(wert, schluessel) {
    if (typeof wert === 'string') {
        if (schluessel === null || !IST_LINKFELD.test(schluessel)) return wert;
        const ziel = cmsHref(wert);
        return ziel === undefined ? undefined : (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$url$2f$trailingSlash$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ensureTrailingSlashHref"])(ziel);
    }
    if (Array.isArray(wert)) return wert.map((eintrag)=>normalisiere(eintrag, null));
    if (wert && typeof wert === 'object') {
        return Object.fromEntries(Object.entries(wert).map(([key, inhalt])=>[
                key,
                normalisiere(inhalt, key)
            ]));
    }
    return wert;
}
function withTrailingSlashLinks(block) {
    return {
        ...block,
        props: normalisiere(block.props, null)
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/config/cmsBlocks/markdownSlots.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cmsMarkdownKey",
    ()=>cmsMarkdownKey,
    "cmsMarkdownOf",
    ()=>cmsMarkdownOf,
    "pickCmsMarkdown",
    ()=>pickCmsMarkdown,
    "pickForLocale",
    ()=>pickForLocale
]);
function cmsMarkdownKey(blockId, field, index) {
    return index === undefined ? `${blockId}:${field}` : `${blockId}:${field}:${index}`;
}
function pickForLocale(werte, locale) {
    if (!werte) return undefined;
    if (locale in werte) return werte[locale];
    const erster = Object.keys(werte)[0];
    return erster === undefined ? undefined : werte[erster];
}
function pickCmsMarkdown(slot, locale) {
    return pickForLocale(slot, locale);
}
function cmsMarkdownOf(slots, locale, blockId, field, index) {
    if (!slots) return undefined;
    return pickCmsMarkdown(slots[cmsMarkdownKey(blockId, field, index)], locale);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/config/cmsBlocks/registry.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CMS_BLOCK_REGISTRY",
    ()=>CMS_BLOCK_REGISTRY,
    "cmsBlockFieldLabelKey",
    ()=>cmsBlockFieldLabelKey,
    "cmsSharedFieldLabelKey",
    ()=>cmsSharedFieldLabelKey
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/cmsBlocks/types.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$icons$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/cmsBlocks/icons.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$masthead$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/lib/masthead/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$masthead$2f$layers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/masthead/layers.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$masthead$2f$motifs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/masthead/motifs.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$masthead$2f$surfaces$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/masthead/surfaces.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$contact$2f$contactTopics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/contact/contactTopics.ts [app-client] (ecmascript)");
;
;
;
;
const cmsSharedFieldLabelKey = (name)=>`cms.blocks.fields.${name}`;
const cmsBlockFieldLabelKey = (block, path)=>`cms.blocks.${block}.fields.${path.join('.')}`;
const feld = (name, type, labelDefault, // Heißt der Feldname in anderen Blöcken etwas anderes (#2014, Test
// cmsBlockFieldLabels): `ownLabelKey: true` für einen Schlüssel je Block,
// oder `labelKey: cmsSharedFieldLabelKey(<anderer Name>)`, wenn ein geteilter
// Schlüssel genau diese Bedeutung schon trägt (`quotes`, `item`, `title` …).
extra = {})=>({
        name,
        type,
        labelKey: cmsSharedFieldLabelKey(name),
        labelDefault,
        ...extra
    });
/** #2014: `ownLabelKey` in Schlüssel je Blocktyp und Pfad auflösen, rekursiv. */ const mitBlockSchluesseln = (block, felder, pfad = [])=>felder.map((f)=>{
        const hier = [
            ...pfad,
            f.name
        ];
        return {
            ...f,
            ...f.ownLabelKey ? {
                labelKey: cmsBlockFieldLabelKey(block, hier)
            } : {},
            ...f.repeater ? {
                repeater: mitBlockSchluesseln(block, f.repeater, hier)
            } : {}
        };
    });
const lokalisiert = (name, type, labelDefault, required = false)=>feld(name, type, labelDefault, {
        localized: true,
        required
    });
const cta = [
    lokalisiert('label', 'text', 'Beschriftung', true),
    feld('href', 'url', 'Ziel', {
        required: true
    })
];
const HEADLINE = lokalisiert('headline', 'text', 'Überschrift');
const DESCRIPTION = lokalisiert('description', 'textarea', 'Einleitung');
const COLUMNS = feld('columns', 'picklist', 'Spalten', {
    options: [
        '2',
        '3',
        '4'
    ]
});
/**
 * #1954: Fläche (Flächenrhythmus) — letztes Feld der Rasterblöcke. Ein
 * Block mit Fläche steht auf einem Band über die volle Breite; sein Wabenrand
 * (`edges: 'innerOuter'`) sitzt am Band (SiteBand).
 */ const SURFACE = feld('surface', 'picklist', 'Fläche', {
    options: [
        ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CMS_SURFACES"]
    ]
});
/** #1199: Icon-Chip (Name + Ton) — Auswahl aus icons.ts */ const ICON = feld('icon', 'text', 'Icon', {
    repeater: [
        feld('name', 'picklist', 'Symbol', {
            required: true,
            options: [
                ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$icons$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CMS_ICON_NAMES"]
            ],
            labelKey: 'cms.blocks.fields.iconName'
        }),
        feld('tone', 'picklist', 'Farbe', {
            options: [
                ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$icons$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CMS_ICON_TONES"]
            ],
            labelKey: 'cms.blocks.fields.iconTone'
        })
    ]
});
/**
 * #2014: Beschreibung einer Karte, eines Schritts oder Partners, nicht die
 * Einleitung des Blocks (`cms.blocks.fields.description`). Gleiche Bedeutung
 * in vier Blöcken, darum ein geteilter Schlüssel statt vier eigener.
 */ const BESCHREIBUNG = feld('description', 'textarea', 'Beschreibung', {
    localized: true,
    labelKey: cmsSharedFieldLabelKey('itemDescription')
});
/** Person im Team-Block (#1199) und Ansprechpartner im Kontaktformular (#2207) */ const PERSON = [
    feld('name', 'text', 'Name', {
        required: true
    }),
    lokalisiert('jobTitle', 'text', 'Funktion', true),
    feld('photoUrl', 'image', 'Foto'),
    feld('phone', 'text', 'Telefon'),
    feld('email', 'text', 'E-Mail')
];
const KARTEN = feld('cards', 'text', 'Karten', {
    required: true,
    repeater: [
        lokalisiert('title', 'text', 'Titel', true),
        BESCHREIBUNG,
        feld('image', 'image', 'Bild'),
        ICON,
        feld('cta', 'text', 'Button', {
            repeater: cta
        }),
        // #2194: volle Breite, Navy — geteilter Schlüssel „Hervorheben" (kein neuer Text)
        feld('accent', 'boolean', 'Hervorheben', {
            labelKey: cmsSharedFieldLabelKey('highlight')
        }),
        // #2197: Preis (Prüfkatalog); Übersetzungen aus dem Feldnamen „Preis" (entityFields) übernommen
        feld('price', 'text', 'Preis', {
            localized: true
        })
    ]
});
const REGISTRY_ROH = {
    // Die Ansicht nimmt `HeroSlider` aus dem Organism-Index — seit #1146 die
    // WebGL-Wabe (HoneycombSlider) mit DOM-Rückfall; hier ändert sich dafür nichts.
    hero: {
        labelKey: 'cms.blocks.hero',
        labelDefault: 'Hero-Slider (Sechseck-Wabe)',
        fullBleed: true,
        edges: 'inner',
        fields: [
            feld('slides', 'text', 'Slides', {
                required: true,
                repeater: [
                    lokalisiert('headline', 'text', 'Überschrift'),
                    lokalisiert('text', 'textarea', 'Text'),
                    feld('image', 'image', 'Bild'),
                    feld('video', 'url', 'Video'),
                    lokalisiert('alt', 'text', 'Alternativtext'),
                    feld('cta', 'text', 'Button', {
                        repeater: cta
                    }),
                    // #2027: Bildfokus in Prozent, Vorgabe Mitte (50/50)
                    feld('focalPoint', 'text', 'Bildfokus', {
                        repeater: [
                            feld('x', 'number', 'Fokus waagerecht (%)', {
                                ownLabelKey: true
                            }),
                            feld('y', 'number', 'Fokus senkrecht (%)', {
                                ownLabelKey: true
                            })
                        ]
                    }),
                    // #2175: Bilder haben keine feste Farbe — der Ton sagt der Kopfzeile, ob helle oder dunkle Schrift
                    feld('tone', 'picklist', 'Bildton für die Kopfzeile', {
                        options: [
                            'light',
                            'dark'
                        ],
                        ownLabelKey: true
                    })
                ]
            }),
            feld('autoplay', 'boolean', 'Automatisch weiterschalten'),
            feld('autoplayDelay', 'number', 'Standzeit je Slide (ms)')
        ]
    },
    video: {
        labelKey: 'cms.blocks.video',
        labelDefault: 'Video',
        fullBleed: true,
        edges: 'innerOuter',
        fields: [
            feld('src', 'url', 'Videodatei', {
                required: true
            }),
            feld('poster', 'image', 'Vorschaubild'),
            feld('background', 'picklist', 'Hintergrund', {
                options: [
                    'primary',
                    'white',
                    'greyLight'
                ]
            })
        ]
    },
    imagefilm: {
        labelKey: 'cms.blocks.imagefilm',
        labelDefault: 'Imagefilm (3D)',
        fullBleed: true,
        edges: 'innerOuter',
        // keine Felder: Inhalt aus dem Code, #1497
        fields: []
    },
    mediaText: {
        labelKey: 'cms.blocks.mediaText',
        labelDefault: 'Bild und Text',
        fullBleed: false,
        edges: 'innerOuter',
        fields: [
            lokalisiert('headline', 'text', 'Überschrift', true),
            feld('paragraphs', 'textarea', 'Absätze', {
                required: true,
                repeater: [
                    lokalisiert('de', 'textarea', 'Absatz', true)
                ]
            }),
            feld('image', 'image', 'Bild', {
                repeater: [
                    feld('src', 'image', 'Bilddatei', {
                        ownLabelKey: true
                    }),
                    lokalisiert('alt', 'text', 'Alternativtext')
                ]
            }),
            feld('imagePosition', 'picklist', 'Bildposition', {
                options: [
                    'left',
                    'right'
                ]
            }),
            feld('imageShape', 'picklist', 'Bildform', {
                options: [
                    ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CMS_IMAGE_SHAPES"]
                ]
            }),
            feld('cta', 'text', 'Button', {
                repeater: cta
            }),
            feld('highlight', 'boolean', 'Hervorheben'),
            SURFACE
        ]
    },
    /** #2180: Animation und Text — das Element (Siegel, Kreislauf) steht im Code, nicht änderbar */ animationText: {
        labelKey: 'cms.blocks.animationText',
        labelDefault: 'Animation und Text',
        fullBleed: false,
        edges: 'innerOuter',
        fields: [
            lokalisiert('headline', 'text', 'Überschrift', true),
            feld('paragraphs', 'textarea', 'Absätze', {
                required: true,
                repeater: [
                    lokalisiert('de', 'textarea', 'Absatz', true)
                ]
            }),
            feld('element', 'picklist', 'Animation', {
                required: true,
                options: [
                    ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CMS_ANIMATION_ELEMENTS"]
                ],
                ownLabelKey: true
            }),
            feld('elementPosition', 'picklist', 'Seite der Animation', {
                options: [
                    'left',
                    'right'
                ],
                ownLabelKey: true
            }),
            feld('cta', 'text', 'Button', {
                repeater: cta
            }),
            SURFACE
        ]
    },
    cardGrid: {
        labelKey: 'cms.blocks.cardGrid',
        labelDefault: 'Karten-Raster',
        fullBleed: false,
        edges: 'innerOuter',
        fields: [
            HEADLINE,
            DESCRIPTION,
            COLUMNS,
            KARTEN,
            SURFACE
        ]
    },
    /** #1960: Gegenüberstellung; seit #2193 Paare (Problem, Lösung) statt zweier Listen */ comparison: {
        labelKey: 'cms.blocks.comparison',
        labelDefault: 'Gegenüberstellung',
        fullBleed: false,
        edges: 'innerOuter',
        fields: [
            HEADLINE,
            DESCRIPTION,
            lokalisiert('leftTitle', 'text', 'Linke Spalte: Titel', true),
            lokalisiert('rightTitle', 'text', 'Rechte Spalte: Titel', true),
            // #2193: Paare statt zweier Listen — je Zeile Problem und Lösung
            feld('items', 'text', 'Paare', {
                required: true,
                ownLabelKey: true,
                repeater: [
                    feld('problem', 'text', 'Problem', {
                        localized: true,
                        required: true,
                        ownLabelKey: true
                    }),
                    feld('solution', 'text', 'Lösung', {
                        localized: true,
                        required: true,
                        ownLabelKey: true
                    })
                ]
            }),
            SURFACE
        ]
    },
    stepList: {
        labelKey: 'cms.blocks.stepList',
        labelDefault: 'Schritt-Liste',
        fullBleed: false,
        edges: 'innerOuter',
        fields: [
            HEADLINE,
            DESCRIPTION,
            feld('steps', 'text', 'Schritte', {
                required: true,
                repeater: [
                    lokalisiert('title', 'text', 'Titel', true),
                    BESCHREIBUNG,
                    ICON
                ]
            }),
            feld('orientation', 'picklist', 'Ausrichtung', {
                options: [
                    'horizontal',
                    'vertical'
                ]
            }),
            SURFACE
        ]
    },
    cardSlider: {
        labelKey: 'cms.blocks.cardSlider',
        labelDefault: 'Karten-Slider',
        fullBleed: false,
        edges: 'innerOuter',
        fields: [
            HEADLINE,
            DESCRIPTION,
            KARTEN,
            SURFACE
        ]
    },
    faq: {
        labelKey: 'cms.blocks.faq',
        labelDefault: 'Häufige Fragen',
        fullBleed: false,
        edges: 'innerOuter',
        fields: [
            HEADLINE,
            DESCRIPTION,
            feld('items', 'text', 'Fragen', {
                required: true,
                repeater: [
                    lokalisiert('question', 'text', 'Frage', true),
                    lokalisiert('answer', 'markdown', 'Antwort', true)
                ]
            }),
            SURFACE
        ]
    },
    cta: {
        labelKey: 'cms.blocks.cta',
        labelDefault: 'Call-to-Action',
        fullBleed: true,
        edges: 'innerOuter',
        fields: [
            lokalisiert('headline', 'text', 'Überschrift', true),
            feld('button', 'text', 'Button', {
                required: true,
                repeater: cta
            }),
            ICON,
            feld('backgroundImage', 'image', 'Hintergrundbild')
        ]
    },
    richText: {
        labelKey: 'cms.blocks.richText',
        labelDefault: 'Fließtext',
        fullBleed: false,
        edges: 'innerOuter',
        fields: [
            lokalisiert('content', 'markdown', 'Inhalt', true),
            // #2195: Leitsatz — geteilter Schlüssel „Hervorheben" (kein neuer Text in 70 Sprachen)
            feld('variant', 'picklist', 'Hervorheben', {
                options: [
                    ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CMS_RICH_TEXT_VARIANTS"]
                ],
                labelKey: cmsSharedFieldLabelKey('highlight')
            }),
            SURFACE
        ]
    },
    stats: {
        labelKey: 'cms.blocks.stats',
        labelDefault: 'Zahlen und Fakten',
        fullBleed: false,
        edges: 'innerOuter',
        fields: [
            HEADLINE,
            feld('items', 'text', 'Kennzahlen', {
                required: true,
                ownLabelKey: true,
                repeater: [
                    lokalisiert('value', 'text', 'Wert', true),
                    lokalisiert('label', 'text', 'Beschriftung', true),
                    lokalisiert('detail', 'text', 'Erläuterung')
                ]
            }),
            SURFACE
        ]
    },
    team: {
        labelKey: 'cms.blocks.team',
        labelDefault: 'Team',
        fullBleed: false,
        edges: 'innerOuter',
        fields: [
            HEADLINE,
            DESCRIPTION,
            feld('members', 'text', 'Personen', {
                required: true,
                repeater: PERSON
            }),
            SURFACE
        ]
    },
    partnerLogos: {
        labelKey: 'cms.blocks.partnerLogos',
        labelDefault: 'Partner-Logos',
        fullBleed: false,
        edges: 'innerOuter',
        fields: [
            HEADLINE,
            DESCRIPTION,
            COLUMNS,
            feld('partners', 'text', 'Partner', {
                required: true,
                repeater: [
                    feld('companyName', 'text', 'Unternehmen', {
                        required: true
                    }),
                    feld('logoUrl', 'image', 'Logo', {
                        required: true
                    }),
                    BESCHREIBUNG,
                    feld('websiteUrl', 'url', 'Website'),
                    // #1957: Schlüssel cms.blocks.fields.role teilt sich das Feld mit dem Zitat-Block („Funktion")
                    lokalisiert('role', 'text', 'Funktion')
                ]
            }),
            // #2199: leer = Wabenwand (ohne Beschreibungen) bzw. Karten; `group` = Gruppenbild
            feld('variant', 'picklist', 'Darstellung', {
                options: [
                    ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CMS_PARTNER_LOGOS_VARIANTS"]
                ],
                ownLabelKey: true
            }),
            SURFACE
        ]
    },
    newsTeaser: {
        labelKey: 'cms.blocks.newsTeaser',
        labelDefault: 'News-Teaser',
        fullBleed: false,
        edges: 'innerOuter',
        fields: [
            HEADLINE,
            DESCRIPTION,
            feld('items', 'text', 'Artikel', {
                required: true,
                ownLabelKey: true,
                repeater: [
                    // #2014: Titel eines Artikels, nicht die Überschrift des Blocks
                    feld('headline', 'text', 'Titel', {
                        localized: true,
                        required: true,
                        labelKey: cmsSharedFieldLabelKey('title')
                    }),
                    feld('href', 'url', 'Link', {
                        required: true,
                        ownLabelKey: true
                    }),
                    feld('imageUrl', 'image', 'Bild'),
                    feld('date', 'date', 'Datum'),
                    feld('description', 'textarea', 'Anriss', {
                        localized: true,
                        ownLabelKey: true
                    }),
                    feld('tags', 'text', 'Schlagworte', {
                        repeater: [
                            feld('de', 'text', 'Schlagwort', {
                                localized: true,
                                required: true,
                                ownLabelKey: true
                            })
                        ]
                    })
                ]
            }),
            SURFACE
        ]
    },
    testimonial: {
        labelKey: 'cms.blocks.testimonial',
        labelDefault: 'Zitat',
        fullBleed: false,
        edges: 'innerOuter',
        fields: [
            HEADLINE,
            DESCRIPTION,
            feld('items', 'text', 'Zitate', {
                required: true,
                labelKey: 'cms.blocks.fields.quotes',
                repeater: [
                    lokalisiert('quote', 'textarea', 'Zitat', true),
                    feld('author', 'text', 'Person'),
                    lokalisiert('role', 'text', 'Funktion'),
                    feld('photoUrl', 'image', 'Foto')
                ]
            }),
            SURFACE
        ]
    },
    specTable: {
        labelKey: 'cms.blocks.specTable',
        labelDefault: 'Spezifikationstabelle',
        fullBleed: false,
        edges: 'innerOuter',
        fields: [
            HEADLINE,
            DESCRIPTION,
            feld('columns', 'text', 'Spaltenköpfe', {
                required: true,
                ownLabelKey: true,
                repeater: [
                    feld('de', 'text', 'Spalte', {
                        localized: true,
                        required: true,
                        ownLabelKey: true
                    })
                ]
            }),
            feld('rows', 'text', 'Zeilen', {
                required: true,
                repeater: [
                    feld('de', 'text', 'Zelle', {
                        localized: true,
                        required: true,
                        ownLabelKey: true
                    })
                ]
            }),
            SURFACE
        ]
    },
    // #1418: Seitenkopf der Unterseiten; Rand nur innen (Fläche kann ein Verlauf sein)
    masthead: {
        labelKey: 'cms.blocks.masthead',
        labelDefault: 'Seitenkopf',
        fullBleed: true,
        edges: 'inner',
        fields: [
            lokalisiert('title', 'text', 'Titel', true),
            lokalisiert('lead', 'textarea', 'Einleitung'),
            feld('breadcrumb', 'boolean', 'Brotkrumen anzeigen'),
            // #1563: leer = Titel gekürzt (am ersten Trenner, sonst an einer Wortgrenze)
            lokalisiert('breadcrumbLabel', 'text', 'Name in den Brotkrumen (leer = Titel gekürzt)'),
            feld('foreground', 'picklist', 'Vordergrund', {
                options: [
                    ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$masthead$2f$surfaces$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MASTHEAD_SURFACES"]
                ],
                labelKey: 'cms.blocks.fields.mastheadForeground'
            }),
            feld('background', 'picklist', 'Hintergrund (legt der Hover frei)', {
                options: [
                    ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$masthead$2f$surfaces$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MASTHEAD_SURFACES"]
                ],
                labelKey: 'cms.blocks.fields.mastheadBackground'
            }),
            feld('textTone', 'picklist', 'Textfarbe', {
                options: [
                    ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$masthead$2f$surfaces$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MASTHEAD_TEXT_TONES"]
                ]
            }),
            feld('motif', 'picklist', 'Motiv', {
                options: [
                    ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$masthead$2f$motifs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MASTHEAD_MOTIF_CHOICES"]
                ]
            }),
            feld('edgeStyles', 'multipicklist', 'Unterkanten (je Aufruf eine davon)', {
                options: [
                    ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$masthead$2f$layers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MASTHEAD_EDGE_STYLES"]
                ]
            })
        ]
    },
    /** #1435: Kontaktformular — Felder im Code, hier nur Auswahl und Texte */ contactForm: {
        labelKey: 'cms.blocks.contactForm',
        labelDefault: 'Kontaktformular',
        fullBleed: false,
        fields: [
            HEADLINE,
            DESCRIPTION,
            feld('topics', 'multipicklist', 'Anliegen (leer = alle, Reihenfolge wie gewählt)', {
                options: [
                    ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$contact$2f$contactTopics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTACT_TOPICS"]
                ],
                labelKey: 'cms.blocks.fields.contactTopics'
            }),
            feld('privacyHref', 'url', 'Link zur Datenschutzerklärung'),
            lokalisiert('successTitle', 'text', 'Überschrift nach dem Absenden'),
            lokalisiert('successText', 'textarea', 'Text nach dem Absenden'),
            lokalisiert('asideTitle', 'text', 'Überschrift der Kontaktkarte'),
            feld('phone', 'text', 'Telefon'),
            feld('email', 'text', 'E-Mail'),
            lokalisiert('address', 'textarea', 'Adresse'),
            lokalisiert('hours', 'text', 'Erreichbarkeit'),
            // #2207: eine Person wie im Team-Block, als Teamkachel unter der Kontaktkarte
            feld('contact', 'text', 'Ansprechpartner', {
                ownLabelKey: true,
                repeater: PERSON
            })
        ]
    }
};
const CMS_BLOCK_REGISTRY = {};
for (const block of Object.keys(REGISTRY_ROH)){
    const meta = REGISTRY_ROH[block];
    CMS_BLOCK_REGISTRY[block] = {
        ...meta,
        fields: mitBlockSchluesseln(block, meta.fields)
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/config/cmsBlocks/surface.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cmsBlockSurfaceOf",
    ()=>cmsBlockSurfaceOf
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/cmsBlocks/registry.ts [app-client] (ecmascript)");
;
function cmsBlockSurfaceOf(block) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CMS_BLOCK_REGISTRY"][block.type].fullBleed) return 'white';
    const surface = block.props?.surface;
    return surface ?? 'white';
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/config/cmsBlocks/types.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CMS_ANIMATION_ELEMENTS",
    ()=>CMS_ANIMATION_ELEMENTS,
    "CMS_BLOCK_TYPES",
    ()=>CMS_BLOCK_TYPES,
    "CMS_BLOCK_TYPES_OHNE_STARTSEITE",
    ()=>CMS_BLOCK_TYPES_OHNE_STARTSEITE,
    "CMS_EDGE_KEYS",
    ()=>CMS_EDGE_KEYS,
    "CMS_EDGE_MODES",
    ()=>CMS_EDGE_MODES,
    "CMS_IMAGE_SHAPES",
    ()=>CMS_IMAGE_SHAPES,
    "CMS_LOCALES",
    ()=>CMS_LOCALES,
    "CMS_PARTNER_LOGOS_VARIANTS",
    ()=>CMS_PARTNER_LOGOS_VARIANTS,
    "CMS_RICH_TEXT_VARIANTS",
    ()=>CMS_RICH_TEXT_VARIANTS,
    "CMS_SURFACES",
    ()=>CMS_SURFACES,
    "CMS_SURFACE_BLOCK_TYPES",
    ()=>CMS_SURFACE_BLOCK_TYPES
]);
/**
 * CMS-Blöcke (#1147/#1152) — Vokabular und Grundtypen, React-frei.
 *
 * Diese Datei hat keine Laufzeit-Imports außer der importfreien Sprachliste
 * (lib/i18n/siteLocales.ts), damit Jest (node), Playwright und der Browser
 * dieselbe Liste lesen (wie `app/config/dashboardRegistry.ts`).
 * Die zod-Schemas je Typ stehen in `schemas.ts`, Editor-Metadaten in
 * `registry.ts`, die Zuordnung Typ → Komponente im Katalog
 * `Organism/CmsBlockRenderer/cmsBlockCatalog.tsx` — dort ein volles Record,
 * ein neuer Typ ohne Komponente bricht tsc.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$i18n$2f$siteLocales$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/i18n/siteLocales.ts [app-client] (ecmascript)");
;
const CMS_LOCALES = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$i18n$2f$siteLocales$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTENT_LOCALES"];
const CMS_BLOCK_TYPES = [
    'hero',
    'video',
    'imagefilm',
    'mediaText',
    'animationText',
    'cardGrid',
    'comparison',
    'stepList',
    'cardSlider',
    'faq',
    'cta',
    'richText',
    'stats',
    'team',
    'partnerLogos',
    'newsTeaser',
    'testimonial',
    'specTable',
    'masthead',
    'contactForm'
];
const CMS_BLOCK_TYPES_OHNE_STARTSEITE = [
    'masthead',
    'contactForm',
    'video'
];
const CMS_SURFACES = [
    'white',
    'tint',
    'dark'
];
const CMS_PARTNER_LOGOS_VARIANTS = [
    'group'
];
const CMS_IMAGE_SHAPES = [
    'rounded',
    'hex'
];
const CMS_SURFACE_BLOCK_TYPES = [
    'mediaText',
    'animationText',
    'cardGrid',
    'comparison',
    'stepList',
    'cardSlider',
    'faq',
    'richText',
    'stats',
    'team',
    'partnerLogos',
    'newsTeaser',
    'testimonial',
    'specTable'
];
const CMS_ANIMATION_ELEMENTS = [
    'seal',
    'cycle',
    'benchmark',
    'certificate'
];
const CMS_RICH_TEXT_VARIANTS = [
    'lead'
];
const CMS_EDGE_MODES = [
    'none',
    'inner',
    'outer'
];
const CMS_EDGE_KEYS = [
    'all',
    'top',
    'right',
    'bottom',
    'left'
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/config/companyContact.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * #2054: Kontaktdaten der Firma — EINE Quelle für Telefon, E-Mail und
 * Anschrift. Footer, Kontaktseiten, RIGK-/Partnerseiten, Leistungs-CTAs und
 * die strukturierten Daten (`lib/seo/structuredData.ts`) lesen von hier; der
 * Wächter `tests/guards/company-contact-single-source.test.ts` hält feste
 * Nummern und die Anschrift aus allen anderen Dateien heraus.
 *
 * Reine Daten, React- und Server-frei. Links baut `lib/url/contactLinks.ts`,
 * die Anzeige `Atom/ContactLink`.
 *
 * Telefon: gespeichert in E.164 (Link `tel:+49…` ohne Leerzeichen), dazu die
 * Schreibweisen nach DIN 5008 — national für die Anzeige, international für
 * schema.org und Besucher aus dem Ausland. Weitere Durchwahlen kommen als
 * eigener Eintrag hinzu, erfunden wird keine.
 *
 * Nicht von hier gespeist (Bericht #2054): PDF-Vorlagen (`docker/pdf-service/
 * templates/partials/company.json`, eigener Dienst) und die Mailvorlagen
 * (`templates/email/footer.html`, Absender in `lib/email.ts`).
 */ __turbopack_context__.s([
    "COMPANY_ADDRESS",
    ()=>COMPANY_ADDRESS,
    "COMPANY_EMAILS",
    ()=>COMPANY_EMAILS,
    "COMPANY_PHONES",
    ()=>COMPANY_PHONES,
    "CONTACT_CLICK_EVENT",
    ()=>CONTACT_CLICK_EVENT,
    "CONTACT_LINK_KINDS",
    ()=>CONTACT_LINK_KINDS,
    "CONTACT_LINK_PLACES",
    ()=>CONTACT_LINK_PLACES,
    "addressOneLine",
    ()=>addressOneLine,
    "isContactLinkKind",
    ()=>isContactLinkKind,
    "isContactLinkPlace",
    ()=>isContactLinkPlace
]);
const COMPANY_PHONES = {
    /** Zentrale (Vertrieb, allgemeine Anfragen) */ central: {
        e164: '+4961265898010',
        national: '06126 58980-10',
        international: '+49 6126 58980-10'
    }
};
const COMPANY_EMAILS = {
    /** allgemeine Anfragen, Footer, Leistungs-CTAs */ info: 'info@plastship.com',
    /** Vertriebsteam (RIGK-Sales-Kanal) */ team: 'team@plastship.com'
};
const COMPANY_ADDRESS = {
    name: 'plastship GmbH',
    street: 'Auf der Lind 10',
    postalCode: '65529',
    locality: 'Waldems',
    region: 'Hessen',
    countryCode: 'DE',
    geo: {
        lat: 50.248828,
        lon: 8.309024
    }
};
function addressOneLine(address = COMPANY_ADDRESS) {
    return `${address.street}, ${address.postalCode} ${address.locality}`;
}
const CONTACT_LINK_KINDS = [
    'tel',
    'mail',
    'map'
];
const CONTACT_LINK_PLACES = [
    'footer',
    'contactForm',
    'teamCard',
    'accountCard',
    'rigk',
    'partnerProduct',
    'other'
];
const CONTACT_CLICK_EVENT = 'contact_click';
const isContactLinkKind = (value)=>typeof value === 'string' && CONTACT_LINK_KINDS.includes(value);
const isContactLinkPlace = (value)=>typeof value === 'string' && CONTACT_LINK_PLACES.includes(value);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/config/mobileMenu.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * #2029: Ein mobiles Menü für ausgeloggt und eingeloggt (`Organism/MobileMenuShell`).
 *
 * Nutzungsmessung: `mobile_menu` mit genau zwei festen Kennungen — `mode`
 * (Zustand des Menüs) und `action` (Öffnen oder Wechsel auf eine Seite aus dem
 * Menü). Das Ziel einer Navigation steht schon im folgenden Seitenaufruf
 * (`pageview` mit `from`), deshalb hier kein Pfad.
 */ __turbopack_context__.s([
    "APP_MOBILE_MAX_WIDTH_PX",
    ()=>APP_MOBILE_MAX_WIDTH_PX,
    "MOBILE_MENU_ACTIONS",
    ()=>MOBILE_MENU_ACTIONS,
    "MOBILE_MENU_EVENT",
    ()=>MOBILE_MENU_EVENT,
    "MOBILE_MENU_ID",
    ()=>MOBILE_MENU_ID,
    "MOBILE_MENU_MODES",
    ()=>MOBILE_MENU_MODES,
    "isMobileMenuAction",
    ()=>isMobileMenuAction,
    "isMobileMenuMode",
    ()=>isMobileMenuMode
]);
const MOBILE_MENU_MODES = [
    'guest',
    'app'
];
const MOBILE_MENU_ACTIONS = [
    'open',
    'navigate'
];
const MOBILE_MENU_EVENT = 'mobile_menu';
const isMobileMenuMode = (value)=>typeof value === 'string' && MOBILE_MENU_MODES.includes(value);
const isMobileMenuAction = (value)=>typeof value === 'string' && MOBILE_MENU_ACTIONS.includes(value);
const APP_MOBILE_MAX_WIDTH_PX = 1024;
const MOBILE_MENU_ID = 'mobile-menu';
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/a11y/linkPurpose.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "describeLinkTarget",
    ()=>describeLinkTarget,
    "isNonDescriptiveLinkText",
    ()=>isNonDescriptiveLinkText,
    "linkPurposeHint",
    ()=>linkPurposeHint,
    "normalizeLinkText",
    ()=>normalizeLinkText,
    "textOfChildren",
    ()=>textOfChildren
]);
/**
 * #2131: Zweck eines Links mit nichtssagendem Text („hier“, „here“, „Learn
 * more“). Solche Texte kommen auf der öffentlichen Seite aus dem CMS (Fließtext
 * und Knopf-Beschriftungen der Redaktion); geändert werden sie dort. Bis dahin
 * hängt der Renderer einen nur für Screenreader sichtbaren Zusatz an, der das
 * Ziel nennt (Atom `LinkPurpose`) — er steht im `innerText` des Links und damit
 * auch in dem, was Suchmaschinen und Lighthouse (`link-text`) lesen.
 *
 * Rein, ohne React und ohne Browser-API: läuft im Server-Renderer des
 * Fließtexts (SiteMarkdownContent) genauso wie im Browser.
 */ /**
 * Nichtssagende Linktexte, Deutsch und Englisch, kleingeschrieben. Abgeleitet
 * aus der Liste von Lighthouse (`link-text`, Sprachen de und en) plus den
 * Varianten, die die Redaktion nutzt.
 */ const NICHTSSAGEND = new Set([
    // Deutsch
    'hier',
    'hier klicken',
    'klicken sie hier',
    'hier entlang',
    'mehr',
    'mehr dazu',
    'mehr erfahren',
    'mehr infos',
    'mehr informationen',
    'weiter',
    'weiterlesen',
    'link',
    'dieser link',
    'zum link',
    // Englisch
    'here',
    'click here',
    'click this',
    'go',
    'learn more',
    'more',
    'more info',
    'more information',
    'read more',
    'right here',
    'start',
    'this',
    'this link'
]);
function normalizeLinkText(text) {
    return text.replace(/\s+/g, ' ').trim().replace(/^[\s.,;:!?»«„“”"'()[\]…→>-]+|[\s.,;:!?»«„“”"'()[\]…→>-]+$/g, '').toLowerCase();
}
function isNonDescriptiveLinkText(text) {
    const norm = normalizeLinkText(text);
    return norm !== '' && NICHTSSAGEND.has(norm);
}
function textOfChildren(children) {
    if (children === null || children === undefined || typeof children === 'boolean') return '';
    if (typeof children === 'string' || typeof children === 'number') return String(children);
    if (Array.isArray(children)) return children.map(textOfChildren).join('');
    if (typeof children === 'object' && 'props' in children) {
        const props = children.props;
        return textOfChildren(props?.children);
    }
    return '';
}
/** Basis für relative Ziele — nur zum Zerlegen, der Host erscheint nie im Zusatz */ const BASIS = 'https://plastship.invalid';
/** Dateiendungen, die als Art des Ziels genannt werden */ const DATEIARTEN = {
    pdf: 'PDF',
    doc: 'DOC',
    docx: 'DOCX',
    xls: 'XLS',
    xlsx: 'XLSX',
    csv: 'CSV',
    zip: 'ZIP',
    ppt: 'PPT',
    pptx: 'PPTX'
};
function describeLinkTarget(href) {
    if (!href) return null;
    const ziel = href.trim();
    if (ziel === '' || ziel.startsWith('#') || /^(mailto|tel|javascript):/i.test(ziel)) return null;
    let url;
    try {
        url = new URL(ziel, BASIS);
    } catch  {
        return null;
    }
    const teile = url.pathname.split('/').filter(Boolean);
    const letzter = teile.length > 0 ? decodeURIComponent(teile[teile.length - 1]) : '';
    const endung = /\.([a-z0-9]{2,5})$/i.exec(letzter)?.[1]?.toLowerCase();
    const dateiart = endung ? DATEIARTEN[endung] : undefined;
    const extern = url.origin !== BASIS && !/(^|\.)plastship\.(com|de|org)$/i.test(url.hostname);
    const host = url.hostname.replace(/^www\./i, '');
    const teileText = [];
    if (dateiart) teileText.push(dateiart);
    if (extern) {
        teileText.push(host);
    } else if (!dateiart && letzter) {
        teileText.push(letzter.replace(/\.[a-z0-9]{2,5}$/i, '').replace(/[-_]+/g, ' ').trim());
    }
    const text = teileText.filter(Boolean).join(', ');
    return text === '' ? null : text;
}
function linkPurposeHint(text, href) {
    if (!isNonDescriptiveLinkText(text)) return null;
    return describeLinkTarget(href);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/ai/aiLabel.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * #2141 (Art. 50 KI-Verordnung, Entscheidung Moritz): EINE Regel, wann die
 * Oberfläche eine KI-Kennzeichnung zeigt — abgeleitet aus den Daten, nie je
 * Seite fest verdrahtet. Gezeigt wird sie von Atom/AiLabel.
 *
 *   assistant           Chat mit PIA: Hinweis, dass man mit einer KI spricht (Art. 50 Abs. 1)
 *   voice               Sprachein-/-ausgabe von PIA: synthetische Stimme, KI-Spracherkennung
 *   machineTranslation  Inhalt in dieser Sprache ist eine Maschinenübersetzung
 *                       (cms_translation_state.status = 'machine'), mit Link auf das Original
 *   analysis            von einer KI erzeugte Bildanalyse (Materialbilder, aiAnalyzedAt gesetzt)
 *   machineUiTranslation  Oberfläche in dieser Sprache teilweise maschinell übersetzt
 *                       (#2147: translations.updated_by ai-bulk/ai-suggest, lib/i18n/machineUiTranslations)
 *
 * Ohne Alias-Importe, damit Server, Client und Jest dieselbe Datei laden.
 */ __turbopack_context__.s([
    "AI_LABEL_BADGE",
    ()=>AI_LABEL_BADGE,
    "AI_LABEL_KINDS",
    ()=>AI_LABEL_KINDS,
    "AI_LABEL_ORIGINAL",
    ()=>AI_LABEL_ORIGINAL,
    "AI_LABEL_TEXT",
    ()=>AI_LABEL_TEXT,
    "isAiAnalysis",
    ()=>isAiAnalysis,
    "machineTranslatedLocales",
    ()=>machineTranslatedLocales,
    "showsMachineTranslation",
    ()=>showsMachineTranslation
]);
const AI_LABEL_KINDS = [
    'assistant',
    'voice',
    'machineTranslation',
    'analysis',
    'machineUiTranslation'
];
const AI_LABEL_TEXT = {
    assistant: {
        key: 'ai.label.assistant',
        defaultValue: 'KI-Assistent: Antworten werden von einer KI erzeugt und können Fehler enthalten.'
    },
    voice: {
        key: 'ai.label.voice',
        defaultValue: 'KI-Sprachfunktion: Ihre Sprache wird per KI in Text umgewandelt, Antworten liest eine synthetische Stimme vor.'
    },
    machineTranslation: {
        key: 'ai.label.machineTranslation',
        defaultValue: 'Diese Fassung wurde mit KI maschinell übersetzt.'
    },
    analysis: {
        key: 'ai.label.analysis',
        defaultValue: 'KI-Analyse'
    },
    machineUiTranslation: {
        key: 'ai.label.machineUiTranslation',
        defaultValue: 'Die Oberfläche ist in dieser Sprache teilweise maschinell übersetzt.'
    }
};
const AI_LABEL_BADGE = {
    key: 'ai.label.badge',
    defaultValue: 'KI'
};
const AI_LABEL_ORIGINAL = {
    key: 'ai.label.original',
    defaultValue: 'Zur deutschen Originalfassung'
};
function machineTranslatedLocales(states, hasText, sourceLocale) {
    const out = new Set();
    for (const s of states){
        if (s.status !== 'machine' || s.locale === sourceLocale) continue;
        if (hasText(s.fieldPath, s.locale)) out.add(s.locale);
    }
    return [
        ...out
    ].sort();
}
function showsMachineTranslation(locale, machineLocales) {
    return Boolean(machineLocales?.includes(locale));
}
function isAiAnalysis(record) {
    return Boolean(record && (record.aiAnalyzedAt || record.aiModel));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/contact/contactTopics.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CONTACT_DETAIL_VALUE_LABELS",
    ()=>CONTACT_DETAIL_VALUE_LABELS,
    "CONTACT_MATERIALS",
    ()=>CONTACT_MATERIALS,
    "CONTACT_MATERIAL_FORMS",
    ()=>CONTACT_MATERIAL_FORMS,
    "CONTACT_TOPICS",
    ()=>CONTACT_TOPICS,
    "CONTACT_TOPIC_DEFS",
    ()=>CONTACT_TOPIC_DEFS,
    "CONTACT_TOPIC_QUERY_PARAM",
    ()=>CONTACT_TOPIC_QUERY_PARAM,
    "CONTACT_VOLUMES",
    ()=>CONTACT_VOLUMES,
    "contactTopicFromSearch",
    ()=>contactTopicFromSearch,
    "isContactTopic",
    ()=>isContactTopic
]);
const CONTACT_TOPICS = [
    'buy_recyclate',
    'sell_material',
    'quality_lab',
    'partnership',
    'press',
    'career',
    'other'
];
const isContactTopic = (value)=>typeof value === 'string' && CONTACT_TOPICS.includes(value);
const CONTACT_TOPIC_QUERY_PARAM = 'anliegen';
function contactTopicFromSearch(search, allowed = CONTACT_TOPICS) {
    let wert;
    try {
        wert = new URLSearchParams(search).get(CONTACT_TOPIC_QUERY_PARAM);
    } catch  {
        return null;
    }
    return isContactTopic(wert) && allowed.includes(wert) ? wert : null;
}
const CONTACT_MATERIALS = [
    'PP',
    'PE-HD',
    'PE-LD',
    'PET',
    'PS',
    'ABS',
    'PA',
    'PC',
    'mixed',
    'other'
];
const CONTACT_MATERIAL_FORMS = [
    'regrind',
    'regranulate',
    'bales',
    'production_waste',
    'post_consumer',
    'other'
];
const CONTACT_VOLUMES = [
    'lt1',
    '1to10',
    '10to50',
    '50to200',
    'gt200'
];
const CONTACT_DETAIL_VALUE_LABELS = {
    material: {
        mixed: 'Mischkunststoff',
        other: 'Anderer'
    },
    materialForm: {
        regrind: 'Mahlgut',
        regranulate: 'Regranulat',
        bales: 'Ballenware',
        production_waste: 'Produktionsabfall',
        post_consumer: 'Post-Consumer',
        other: 'Andere Form'
    },
    volume: {
        lt1: 'unter 1 t',
        '1to10': '1–10 t',
        '10to50': '10–50 t',
        '50to200': '50–200 t',
        gt200: 'über 200 t'
    }
};
const CONTACT_TOPIC_DEFS = {
    buy_recyclate: {
        key: 'buy_recyclate',
        icon: 'search',
        labelKey: 'contact.topic.buy_recyclate',
        labelDefault: 'Rezyklat beziehen',
        hintKey: 'contact.topic.buy_recyclate.hint',
        hintDefault: 'Sie suchen Rezyklat in fester Qualität und Menge.',
        details: [
            'material',
            'materialForm',
            'volume',
            'application'
        ]
    },
    sell_material: {
        key: 'sell_material',
        icon: 'recycle',
        labelKey: 'contact.topic.sell_material',
        labelDefault: 'Kunststoffe abgeben',
        hintKey: 'contact.topic.sell_material.hint',
        hintDefault: 'Sie haben Produktionsabfälle, Mahlgut oder Ballenware.',
        details: [
            'material',
            'materialForm',
            'volume',
            'postalCode'
        ]
    },
    quality_lab: {
        key: 'quality_lab',
        icon: 'analysis',
        labelKey: 'contact.topic.quality_lab',
        labelDefault: 'Materialqualität & Labor',
        hintKey: 'contact.topic.quality_lab.hint',
        hintDefault: 'Fragen zu Prüfungen, Kennwerten und Datenblättern.',
        details: [
            'material'
        ]
    },
    partnership: {
        key: 'partnership',
        icon: 'network',
        labelKey: 'contact.topic.partnership',
        labelDefault: 'Partnerschaft',
        hintKey: 'contact.topic.partnership.hint',
        hintDefault: 'Recycler, Verarbeiter oder Dienstleister im Netzwerk.',
        details: []
    },
    press: {
        key: 'press',
        icon: 'document',
        labelKey: 'contact.topic.press',
        labelDefault: 'Presse',
        hintKey: 'contact.topic.press.hint',
        hintDefault: 'Interviews, Bildmaterial und Hintergründe.',
        details: []
    },
    career: {
        key: 'career',
        icon: 'users',
        labelKey: 'contact.topic.career',
        labelDefault: 'Karriere',
        hintKey: 'contact.topic.career.hint',
        hintDefault: 'Fragen zu offenen Stellen und Initiativbewerbungen.',
        details: []
    },
    other: {
        key: 'other',
        icon: 'contact',
        labelKey: 'contact.topic.other',
        labelDefault: 'Sonstiges',
        hintKey: 'contact.topic.other.hint',
        hintDefault: 'Alles andere — wir leiten Ihre Nachricht weiter.',
        details: []
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/mail/address.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * #964: Prüfung von Mail-Adressen — eine Quelle für die Empfänger-Felder
 * (SendViaMailModal, MailComposeModal) und die Mail-Routen. Rein, ohne
 * Server-Importe.
 */ /** Gleiche Prüfung wie die Empfänger-Eingabe im Versand-Modal (#1807). */ __turbopack_context__.s([
    "MAIL_ADDRESS_PATTERN",
    ()=>MAIL_ADDRESS_PATTERN,
    "MAX_MAIL_RECIPIENTS",
    ()=>MAX_MAIL_RECIPIENTS,
    "isMailAddress",
    ()=>isMailAddress,
    "normalizeMailAddress",
    ()=>normalizeMailAddress
]);
const MAIL_ADDRESS_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_MAIL_RECIPIENTS = 20;
function isMailAddress(value) {
    return typeof value === 'string' && MAIL_ADDRESS_PATTERN.test(value);
}
function normalizeMailAddress(value) {
    return value.trim().toLowerCase();
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/masthead/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$masthead$2f$surfaces$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/masthead/surfaces.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$masthead$2f$motifs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/masthead/motifs.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$masthead$2f$layers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/masthead/layers.ts [app-client] (ecmascript)");
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/masthead/layers.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MASTHEAD_EDGE_STYLES",
    ()=>MASTHEAD_EDGE_STYLES,
    "mastheadLayer",
    ()=>mastheadLayer,
    "pickRandom",
    ()=>pickRandom,
    "resolveMotif",
    ()=>resolveMotif,
    "seededRandom",
    ()=>seededRandom
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$masthead$2f$surfaces$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/masthead/surfaces.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$masthead$2f$motifs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/masthead/motifs.ts [app-client] (ecmascript)");
;
;
;
const W = 'var(--masthead-w, 100cqw)';
const H = 'var(--masthead-h, 100cqh)';
const shift = (expr, mode, axis)=>mode === 'tile' ? `calc(${expr} - var(--${axis}))` : `calc(${expr})`;
const svgUrl = (svg)=>`url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
const spriteLayer = (sprite, mode)=>{
    const size = `${sprite.width}px ${sprite.height}px`;
    if (sprite.repeat) {
        return `${svgUrl(sprite.svg)} ${shift('0px', mode, 'x')} ${shift('0px', mode, 'y')} / ${size} repeat`;
    }
    const x = shift(`${W} * ${sprite.fx} - ${sprite.width * sprite.alignX}px`, mode, 'x');
    const y = shift(`${H} * ${sprite.fy} - ${sprite.height * sprite.alignY}px`, mode, 'y');
    return `${svgUrl(sprite.svg)} ${x} ${y} / ${size} no-repeat`;
};
const mastheadLayer = (surface, motif, palette, mode)=>{
    const fill = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$masthead$2f$surfaces$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mastheadFill"])(surface, palette);
    // auf Grün wäre ein grüner Akzent unsichtbar
    const accent = surface === 'green' || surface === 'cycleGradient' ? palette.white : palette.green;
    const ink = fill.dark ? {
        ink: palette.white,
        accent
    } : {
        ink: palette.blue,
        accent: palette.green
    };
    const sprites = motif ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$masthead$2f$motifs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motifSprites"])(motif, ink).map((sprite)=>spriteLayer(sprite, mode)) : [];
    const fillLayer = `${fill.image} ${shift('0px', mode, 'x')} ${shift('0px', mode, 'y')} / ${W} ${H} no-repeat`;
    return [
        ...sprites,
        fillLayer
    ].join(', ');
};
const pickRandom = (items, rand = Math.random)=>items.length === 0 ? undefined : items[Math.min(items.length - 1, Math.floor(rand() * items.length))];
const seededRandom = (key)=>{
    let h = 0x811c9dc5;
    for(let i = 0; i < key.length; i++){
        h ^= key.charCodeAt(i);
        h = Math.imul(h, 0x01000193);
    }
    let state = h >>> 0;
    return ()=>{
        state = state + 0x6d2b79f5 >>> 0;
        let t = state;
        t = Math.imul(t ^ t >>> 15, t | 1);
        t ^= t + Math.imul(t ^ t >>> 7, t | 61);
        return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
};
const resolveMotif = (choice, rand = Math.random)=>choice === 'random' ? pickRandom(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$masthead$2f$motifs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MASTHEAD_MOTIFS"], rand) ?? 'strands' : choice;
const MASTHEAD_EDGE_STYLES = [
    'hero',
    'section',
    'swell'
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/masthead/motifs.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Motive des Seitenkopfs (#1418): drei Grafiken über der Fläche, frei nach
 * dem Kopf von plastship.com (Linienbündel im Kreis, Punktraster) und dem
 * Thema Kunststoffkreislauf. Jedes Motiv ist eine Liste von SVG-Sprites mit
 * Lage relativ zur Bühne — so lässt es sich als CSS-Hintergrund an jede
 * Stelle legen, auch versetzt in eine einzelne Hover-Kachel (layers.ts).
 */ __turbopack_context__.s([
    "MASTHEAD_MOTIFS",
    ()=>MASTHEAD_MOTIFS,
    "MASTHEAD_MOTIF_CHOICES",
    ()=>MASTHEAD_MOTIF_CHOICES,
    "motifSprites",
    ()=>motifSprites
]);
const MASTHEAD_MOTIFS = [
    'strands',
    'granules',
    'rings'
];
const MASTHEAD_MOTIF_CHOICES = [
    ...MASTHEAD_MOTIFS,
    'random'
];
const svg = (width, height, body)=>`<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" fill="none">${body}</svg>`;
/**
 * Linienbündel im Kreis: ein Fächer aus 18 Kurven, jede gegen die vorige
 * versetzt und gestreckt — dieselbe Geometrie wie die Grafik im Kopf von
 * plastship.com, wie Fasern im Schmelzestrom.
 */ const strandsCircle = ({ accent })=>{
    const r = (v)=>Math.round(v * 100) / 100;
    const curves = Array.from({
        length: 18
    }, (_, k)=>{
        const y0 = r(98.82 + 17.84 * k);
        return `<path d="M-58 ${y0}C-58 ${y0} ${r(-11.55 + 10.54 * k)} ${r(88.21 + 16.2 * k)} ${r(0.47 + 13.26 * k)} ${r(51.1 + 8.52 * k)}` + `C${r(11.96 + 15.8 * k)} ${r(15.52 + 1.34 * k)} ${r(59.29 + 26.49 * k)} 5.95 ${r(59.29 + 26.49 * k)} 5.95" stroke="${accent}" stroke-width="2"/>`;
    }).join('');
    return svg(200, 200, `<defs><clipPath id="c"><circle cx="100" cy="100" r="99"/></clipPath></defs><g clip-path="url(#c)" opacity="0.35">${curves}</g>`);
};
/** Punktraster 7 × 5, wie rechts im Kopf von plastship.com. */ const dotGrid = ({ ink })=>{
    const dots = [];
    for(let row = 0; row < 5; row++){
        for(let col = 0; col < 7; col++)dots.push(`<circle cx="${2.5 + col * 21}" cy="${2.5 + row * 21}" r="2.5"/>`);
    }
    return svg(131, 89, `<g fill="${ink}" opacity="0.3">${dots.join('')}</g>`);
};
/** Granulat: gestreute Körner in drei Größen, einige im Akzent — kachelt über die Fläche. */ const granulePattern = ({ ink, accent })=>{
    const grains = [
        // x, y, rx, Drehung, gefüllt, Akzent
        [
            22,
            24,
            7,
            20,
            true,
            false
        ],
        [
            78,
            14,
            5,
            -35,
            false,
            false
        ],
        [
            132,
            38,
            8,
            60,
            true,
            true
        ],
        [
            48,
            72,
            5,
            -10,
            false,
            false
        ],
        [
            104,
            88,
            7,
            35,
            true,
            false
        ],
        [
            160,
            104,
            5,
            -50,
            false,
            true
        ],
        [
            18,
            118,
            6,
            75,
            false,
            false
        ],
        [
            70,
            128,
            4,
            10,
            true,
            false
        ],
        [
            150,
            6,
            4,
            0,
            true,
            false
        ]
    ];
    const body = grains.map(([x, y, rx, rot, filled, isAccent])=>{
        const color = isAccent ? accent : ink;
        const paint = filled ? `fill="${color}"` : `stroke="${color}" stroke-width="1.5"`;
        return `<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${Math.round(rx * 0.72 * 10) / 10}" transform="rotate(${rot} ${x} ${y})" ${paint}/>`;
    }).join('');
    return svg(180, 140, `<g opacity="0.22">${body}</g>`);
};
/** Kreislauf: konzentrische, unterbrochene Ringe mit Pfeilspitzen. */ const ringSet = ({ ink, accent }, size)=>{
    const c = size / 2;
    const radii = [
        0.2,
        0.32,
        0.44
    ].map((f)=>f * size);
    const rings = radii.map((r, i)=>{
        const circumference = 2 * Math.PI * r;
        const dash = Math.round(circumference * 0.28);
        const gap = Math.round(circumference * 0.05);
        const color = i === 1 ? accent : ink;
        return `<circle cx="${c}" cy="${c}" r="${r}" stroke="${color}" stroke-width="${i === 1 ? 3 : 2}" stroke-dasharray="${dash} ${gap}" stroke-linecap="round" transform="rotate(${i * 40} ${c} ${c})"/>`;
    }).join('');
    // Pfeilspitze am mittleren Ring, im Uhrzeigersinn
    const r = radii[1];
    const tip = `<path d="M${c + r - 7} ${c - 8}L${c + r} ${c + 2}L${c + r + 8} ${c - 7}" stroke="${accent}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>`;
    return svg(size, size, `<g opacity="0.3">${rings}${tip}</g>`);
};
const motifSprites = (motif, ink)=>{
    switch(motif){
        case 'strands':
            return [
                {
                    svg: strandsCircle(ink),
                    width: 200,
                    height: 200,
                    fx: 0.1,
                    fy: 0.08,
                    alignX: 0,
                    alignY: 0
                },
                {
                    svg: dotGrid(ink),
                    width: 131,
                    height: 89,
                    fx: 0.9,
                    fy: 0.5,
                    alignX: 1,
                    alignY: 0.5
                }
            ];
        case 'granules':
            return [
                {
                    svg: granulePattern(ink),
                    width: 180,
                    height: 140,
                    fx: 0,
                    fy: 0,
                    alignX: 0,
                    alignY: 0,
                    repeat: true
                }
            ];
        case 'rings':
            return [
                {
                    svg: ringSet(ink, 420),
                    width: 420,
                    height: 420,
                    fx: 0.88,
                    fy: 0.45,
                    alignX: 0.5,
                    alignY: 0.5
                },
                {
                    svg: ringSet(ink, 160),
                    width: 160,
                    height: 160,
                    fx: 0.06,
                    fy: 0.12,
                    alignX: 0,
                    alignY: 0
                }
            ];
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/masthead/surfaces.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Flächen des Seitenkopfs (#1418): Vordergrund und Hintergrund wählen je eine
 * davon — Vollton oder Verlauf. React-frei, damit zod-Schema, Editor und
 * Ansicht dieselbe Liste lesen. Farben kommen als MastheadPalette aus dem
 * Theme, damit der Dunkelmodus mitgeht.
 */ __turbopack_context__.s([
    "MASTHEAD_GRADIENTS",
    ()=>MASTHEAD_GRADIENTS,
    "MASTHEAD_SURFACES",
    ()=>MASTHEAD_SURFACES,
    "MASTHEAD_TEXT_TONES",
    ()=>MASTHEAD_TEXT_TONES,
    "mastheadBottomGradient",
    ()=>mastheadBottomGradient,
    "mastheadFill",
    ()=>mastheadFill,
    "mastheadTextColor",
    ()=>mastheadTextColor
]);
const MASTHEAD_SURFACES = [
    'blue',
    'navy',
    'green',
    'tint',
    'oceanGradient',
    'cycleGradient',
    'lagoonGradient'
];
const MASTHEAD_TEXT_TONES = [
    'light',
    'dark',
    'brand'
];
const solid = (color)=>`linear-gradient(${color}, ${color})`;
const MASTHEAD_GRADIENTS = {
    oceanGradient: {
        angle: 135,
        stops: [
            {
                color: 'blue',
                at: 0
            },
            {
                color: 'navy',
                at: 1
            }
        ]
    },
    // Kreislauf: Blau → Grün, wie Material, das zurückkommt
    cycleGradient: {
        angle: 120,
        stops: [
            {
                color: 'blue',
                at: 0
            },
            {
                color: 'green',
                at: 1
            }
        ]
    },
    lagoonGradient: {
        angle: 160,
        stops: [
            {
                color: 'teal',
                at: 0
            },
            {
                color: 'blue',
                at: 0.55
            },
            {
                color: 'navy',
                at: 1
            }
        ]
    }
};
/** Volltöne: Fläche → Farbe der Palette */ const SOLID_SURFACES = {
    blue: 'blue',
    navy: 'navy',
    green: 'green',
    tint: 'tint'
};
const prozent = (at)=>`${Math.round(at * 10000) / 100}%`;
const mastheadFill = (surface, palette)=>{
    const gradient = MASTHEAD_GRADIENTS[surface];
    if (gradient) {
        const stops = gradient.stops.map((stop)=>`${palette[stop.color]} ${prozent(stop.at)}`).join(', ');
        return {
            image: `linear-gradient(${gradient.angle}deg, ${stops})`,
            dark: true
        };
    }
    const color = SOLID_SURFACES[surface] ?? 'blue';
    return {
        image: solid(palette[color]),
        dark: surface !== 'tint'
    };
};
const mastheadBottomGradient = (surface, palette, width, height)=>{
    const gradient = MASTHEAD_GRADIENTS[surface];
    const ende = Math.max(1, width);
    if (!gradient) {
        const color = palette[SOLID_SURFACES[surface] ?? 'blue'];
        return {
            x1: 0,
            x2: ende,
            stops: [
                {
                    offset: 0,
                    color
                }
            ]
        };
    }
    const winkel = gradient.angle * Math.PI / 180;
    const dx = Math.sin(winkel);
    const dy = -Math.cos(winkel);
    const laenge = Math.abs(width * dx) + Math.abs(height * dy);
    const stops = gradient.stops.map((stop)=>({
            offset: stop.at,
            color: palette[stop.color]
        }));
    // Lage auf der Verlaufslinie (0…1) eines Punkts der Unterkante
    const t = (x)=>((x - width / 2) * dx + height / 2 * dy) / laenge + 0.5;
    const t0 = t(0);
    const t1 = t(width);
    if (laenge <= 0 || Math.abs(t1 - t0) < 1e-6) {
        // senkrechter Verlauf: die ganze Unterkante hat eine Farbe — der nächste Stopp
        const naechster = [
            ...stops
        ].sort((a, b)=>Math.abs(a.offset - t0) - Math.abs(b.offset - t0))[0];
        return {
            x1: 0,
            x2: ende,
            stops: [
                {
                    offset: 0,
                    color: naechster?.color ?? palette.blue
                }
            ]
        };
    }
    // x, an dem die Verlaufslinie 0 bzw. 1 erreicht
    const x1 = -t0 / (t1 - t0) * width;
    const x2 = (1 - t0) / (t1 - t0) * width;
    const rund = (v)=>Math.round(v * 100) / 100;
    return {
        x1: rund(x1),
        x2: rund(x2),
        stops
    };
};
const mastheadTextColor = (tone, palette)=>tone === 'light' ? palette.white : tone === 'dark' ? palette.heading : palette.blue;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/motion/easingCss.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * #2180: die Kurven aus lib/motion/easing.ts als CSS-Zeitfunktion — dieselben
 * Werte wie EASE_POP und EASE_REVEAL, damit Siegel und Kreislauf wie
 * HeroSlider und Imagefilm anfahren.
 */ __turbopack_context__.s([
    "EASE_LINEAR_CSS",
    ()=>EASE_LINEAR_CSS,
    "EASE_POP_CSS",
    ()=>EASE_POP_CSS,
    "EASE_REVEAL_CSS",
    ()=>EASE_REVEAL_CSS
]);
const EASE_POP_CSS = 'cubic-bezier(0.2, 0.8, 0.2, 1)';
const EASE_REVEAL_CSS = 'cubic-bezier(0.65, 0, 0.35, 1)';
const EASE_LINEAR_CSS = 'linear';
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/motion/entrance.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Eintritts-Animationen (#2180): Zustand und Phasen der festen
 * Animationselemente im CMS (Siegel, Kreislauf) als reine Funktionen — ohne
 * Uhr, ohne React. Die Elemente spielen ihre Phasen als CSS-Animationen
 * (Verzögerung und Dauer aus der Phasentabelle); hier steht nur, WANN was
 * läuft und welcher Zustand gilt.
 *
 * Zustände (`data-state` am Element, E2E liest nur ihn):
 *   pending  Server und erster Render — Schlussbild, damit ohne JavaScript
 *            und vor der Hydration alles dasteht
 *   idle     im Browser, Bewegung erlaubt, noch nicht im Bild: Startpose
 *   running  im Bild gewesen, die Phasen laufen
 *   ready    alle Phasen fertig: Schlussbild, danach nur noch Ruhebewegung
 *   static   „Bewegung reduzieren" oder Datensparmodus: Schlussbild ohne
 *            jede Bewegung (Regel wie beim Imagefilm, #2027)
 */ __turbopack_context__.s([
    "allowsIdleMotion",
    ()=>allowsIdleMotion,
    "assertPhases",
    ()=>assertPhases,
    "entranceDuration",
    ()=>entranceDuration,
    "findPhase",
    ()=>findPhase,
    "phaseEnd",
    ()=>phaseEnd,
    "phaseProgress",
    ()=>phaseProgress,
    "phaseSlot",
    ()=>phaseSlot,
    "resolveEntranceState",
    ()=>resolveEntranceState
]);
function resolveEntranceState({ mounted, reducedMotion, saveData, seen, finished }) {
    if (!mounted) return 'pending';
    if (reducedMotion || saveData) return 'static';
    if (!seen) return 'idle';
    return finished ? 'ready' : 'running';
}
const allowsIdleMotion = (state)=>state === 'ready';
function phaseSlot(phase, index = 0) {
    const i = Math.max(0, Math.min(index, (phase.count ?? 1) - 1));
    return {
        delay: phase.start + i * (phase.stagger ?? 0),
        duration: phase.duration
    };
}
function phaseEnd(phase) {
    const { delay, duration } = phaseSlot(phase, (phase.count ?? 1) - 1);
    return delay + duration;
}
function entranceDuration(phases) {
    return phases.reduce((max, phase)=>Math.max(max, phaseEnd(phase)), 0);
}
function findPhase(phases, id) {
    const phase = phases.find((p)=>p.id === id);
    if (!phase) throw new Error(`Phase "${id}" fehlt`);
    return phase;
}
function phaseProgress(phase, ms, index = 0) {
    const { delay, duration } = phaseSlot(phase, index);
    if (duration <= 0) return ms >= delay ? 1 : 0;
    return Math.max(0, Math.min(1, (ms - delay) / duration));
}
function assertPhases(phases) {
    const ids = new Set();
    for (const p of phases){
        if (ids.has(p.id)) throw new Error(`Phase "${p.id}" doppelt`);
        ids.add(p.id);
        for (const wert of [
            p.start,
            p.duration,
            p.stagger ?? 0,
            p.count ?? 1
        ]){
            if (!Number.isFinite(wert) || wert < 0) throw new Error(`Phase "${p.id}": ungültige Zeit ${wert}`);
        }
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/scene3d/mixColor.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mixColor",
    ()=>mixColor
]);
/*
 * Weicher Farbwechsel (#1513): mischt zwei Theme-Farben, statt hart
 * umzuschalten. Nur sechsstellige Hex-Farben (#rrggbb), wie das Theme sie
 * liefert.
 */ const channel = (hex, at)=>parseInt(hex.slice(at, at + 2), 16);
const mixColor = (from, to, t)=>{
    if (!(t > 0)) return from;
    if (t >= 1) return to;
    let out = '#';
    for (const at of [
        1,
        3,
        5
    ]){
        const a = channel(from, at);
        const b = channel(to, at);
        out += Math.round(a + (b - a) * t).toString(16).padStart(2, '0');
    }
    return out;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/seo/structuredData.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_ARTICLE_IMAGE",
    ()=>DEFAULT_ARTICLE_IMAGE,
    "PLASTSHIP_ORGANIZATION",
    ()=>PLASTSHIP_ORGANIZATION,
    "articleJsonLd",
    ()=>articleJsonLd,
    "assetUrl",
    ()=>assetUrl,
    "brandJsonLd",
    ()=>brandJsonLd,
    "breadcrumbNode",
    ()=>breadcrumbNode,
    "categoryJsonLd",
    ()=>categoryJsonLd,
    "cmsPageJsonLd",
    ()=>cmsPageJsonLd,
    "newsOverviewJsonLd",
    ()=>newsOverviewJsonLd,
    "organizationId",
    ()=>organizationId,
    "organizationNode",
    ()=>organizationNode,
    "pageUrl",
    ()=>pageUrl,
    "productJsonLd",
    ()=>productJsonLd,
    "serializeJsonLd",
    ()=>serializeJsonLd,
    "siteBaseUrl",
    ()=>siteBaseUrl,
    "startPageJsonLd",
    ()=>startPageJsonLd,
    "webSiteId",
    ()=>webSiteId,
    "webSiteNode",
    ()=>webSiteNode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * #1564: strukturierte Daten (JSON-LD, schema.org) der öffentlichen Seiten — an
 * einer Stelle, React-frei und ohne Datenbank, damit jeder Typ einzeln testbar
 * ist. Die Seiten (page.tsx, Server) bauen die Daten, die Ansichten geben sie
 * über `components/Utility/JsonLd` als `<script type="application/ld+json">`
 * im Server-HTML aus.
 *
 * Vorbild ist die alte Seite (Craft/SEOmatic): Organization, WebSite und auf
 * jeder Unterseite BreadcrumbList; Artikel zusätzlich als NewsArticle. Die
 * Brotkrumen nennen dieselben Stufen wie die sichtbaren der Seiten, dazu vorn
 * die Startseite.
 *
 * Die Sprache ist ein Parameter: heute liefern alle Seiten Deutsch, die
 * englischen Pfade (`/en/…`) kommen mit eigenem Paket — dann reicht
 * `locale: 'en'` und das passende `pfadPraefix`.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$url$2f$trailingSlash$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/url/trailingSlash.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$localize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/cmsBlocks/localize.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$companyContact$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/companyContact.ts [app-client] (ecmascript)");
;
;
;
const text = (wert, locale)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$localize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cmsText"])(wert, locale);
function siteBaseUrl() {
    const basis = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env['NEXTAUTH_URL'] || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env['NEXT_PUBLIC_SITE_URL'] || 'https://plastship.com';
    return basis.replace(/\/+$/, '');
}
function pageUrl(base, pfad) {
    if (/^https?:\/\//.test(pfad)) return pfad;
    const mitAnfang = pfad.startsWith('/') ? pfad : `/${pfad}`;
    return `${base}${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$url$2f$trailingSlash$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ensureTrailingSlash"])(mitAnfang)}`;
}
function assetUrl(base, adresse) {
    if (/^https?:\/\//.test(adresse)) return adresse;
    return `${base}${adresse.startsWith('/') ? '' : '/'}${adresse}`;
}
const PLASTSHIP_ORGANIZATION = {
    name: 'Plastship',
    legalName: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$companyContact$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMPANY_ADDRESS"].name,
    telephone: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$companyContact$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMPANY_PHONES"].central.international,
    email: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$companyContact$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMPANY_EMAILS"].info,
    address: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$companyContact$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMPANY_ADDRESS"],
    /** Quadratisch, 512 px — Google verlangt mindestens 112 × 112 px. */ logo: {
        path: '/favicon/android-chrome-512x512.png',
        width: 512,
        height: 512
    }
};
const DEFAULT_ARTICLE_IMAGE = '/images/og-default.jpg';
/** Texte der Brotkrumen-Stufen, die keine Seite der Redaktion sind. */ const STUFEN = {
    de: {
        start: 'Start',
        news: 'Neuigkeiten',
        partners: 'Partner'
    },
    en: {
        start: 'Home',
        news: 'News',
        partners: 'Partners'
    }
};
const organizationId = (base)=>`${base}/#organization`;
const webSiteId = (base)=>`${base}/#website`;
const dokument = (...knoten)=>({
        '@context': 'https://schema.org',
        '@graph': knoten
    });
function organizationNode(base) {
    const o = PLASTSHIP_ORGANIZATION;
    return {
        '@type': 'Organization',
        '@id': organizationId(base),
        name: o.name,
        legalName: o.legalName,
        url: `${base}/`,
        logo: {
            '@type': 'ImageObject',
            url: assetUrl(base, o.logo.path),
            width: o.logo.width,
            height: o.logo.height
        },
        email: o.email,
        telephone: o.telephone,
        // #2054: Anschrift und Koordinaten aus derselben Quelle wie Footer und Kartenlink
        address: {
            '@type': 'PostalAddress',
            streetAddress: o.address.street,
            postalCode: o.address.postalCode,
            addressLocality: o.address.locality,
            addressRegion: o.address.region,
            addressCountry: o.address.countryCode
        },
        location: {
            '@type': 'Place',
            geo: {
                '@type': 'GeoCoordinates',
                latitude: o.address.geo.lat,
                longitude: o.address.geo.lon
            }
        },
        contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'customer service',
            telephone: o.telephone,
            email: o.email
        }
    };
}
function webSiteNode(base, locale) {
    return {
        '@type': 'WebSite',
        '@id': webSiteId(base),
        url: `${base}/`,
        name: PLASTSHIP_ORGANIZATION.name,
        inLanguage: locale,
        publisher: {
            '@id': organizationId(base)
        }
    };
}
function breadcrumbNode(base, stufen) {
    return {
        '@type': 'BreadcrumbList',
        itemListElement: stufen.map((stufe, index)=>({
                '@type': 'ListItem',
                position: index + 1,
                name: stufe.name,
                item: pageUrl(base, stufe.pfad)
            }))
    };
}
const mitPraefix = (praefix, pfad)=>praefix ? `${praefix}${pfad}` : pfad;
const startStufe = ({ locale, pfadPraefix })=>({
        name: STUFEN[locale].start,
        pfad: mitPraefix(pfadPraefix, '/')
    });
const newsStufe = ({ locale, pfadPraefix })=>({
        name: STUFEN[locale].news,
        pfad: mitPraefix(pfadPraefix, '/news/')
    });
const partnerStufe = ({ locale, pfadPraefix })=>({
        name: STUFEN[locale].partners,
        pfad: mitPraefix(pfadPraefix, '/partners/')
    });
function startPageJsonLd(basis) {
    return dokument(organizationNode(basis.base), webSiteNode(basis.base, basis.locale));
}
function cmsPageJsonLd(basis) {
    if (basis.pfad === '/') return startPageJsonLd(basis);
    return dokument(breadcrumbNode(basis.base, [
        startStufe(basis),
        {
            name: text(basis.titel, basis.locale),
            pfad: mitPraefix(basis.pfadPraefix, basis.pfad)
        }
    ]));
}
function articleJsonLd(basis) {
    const { base, locale, artikel } = basis;
    const pfad = mitPraefix(basis.pfadPraefix, `/news/${artikel.slug}/`);
    const url = pageUrl(base, pfad);
    const titel = text(artikel.title, locale);
    const kategorie = artikel.category;
    const herausgeber = {
        '@type': 'Organization',
        '@id': organizationId(base),
        name: PLASTSHIP_ORGANIZATION.name,
        url: `${base}/`,
        logo: {
            '@type': 'ImageObject',
            url: assetUrl(base, PLASTSHIP_ORGANIZATION.logo.path)
        }
    };
    const anreisser = text(artikel.excerpt, locale);
    const artikelKnoten = {
        '@type': 'NewsArticle',
        headline: titel,
        ...anreisser ? {
            description: anreisser
        } : {},
        // Ohne Veröffentlichungsdatum (ältere Importe) zählt die letzte Änderung
        datePublished: artikel.publishedAt ?? artikel.updatedAt,
        dateModified: artikel.updatedAt,
        image: [
            assetUrl(base, artikel.imageUrl ?? DEFAULT_ARTICLE_IMAGE)
        ],
        inLanguage: locale,
        author: herausgeber,
        publisher: herausgeber,
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': url
        },
        url,
        ...kategorie ? {
            articleSection: text(kategorie.label, locale)
        } : {},
        ...artikel.tags.length ? {
            keywords: artikel.tags.join(', ')
        } : {}
    };
    return dokument(breadcrumbNode(base, [
        startStufe(basis),
        newsStufe(basis),
        ...kategorie ? [
            {
                name: text(kategorie.label, locale),
                pfad: mitPraefix(basis.pfadPraefix, `/news/category/${kategorie.slug}/`)
            }
        ] : [],
        {
            name: titel,
            pfad
        }
    ]), artikelKnoten);
}
function newsOverviewJsonLd(basis) {
    return dokument(breadcrumbNode(basis.base, [
        startStufe(basis),
        newsStufe(basis)
    ]));
}
function categoryJsonLd(basis) {
    const { kategorie } = basis;
    return dokument(breadcrumbNode(basis.base, [
        startStufe(basis),
        newsStufe(basis),
        {
            name: text(kategorie.label, basis.locale),
            pfad: mitPraefix(basis.pfadPraefix, `/news/category/${kategorie.slug}/`)
        }
    ]));
}
function brandJsonLd(basis) {
    const { marke } = basis;
    return dokument(breadcrumbNode(basis.base, [
        startStufe(basis),
        partnerStufe(basis),
        {
            name: marke.name,
            pfad: mitPraefix(basis.pfadPraefix, `/partners/${marke.slug}/`)
        }
    ]));
}
function productJsonLd(basis) {
    const { produkt } = basis;
    const marke = mitPraefix(basis.pfadPraefix, `/partners/${produkt.partner.slug}/`);
    return dokument(breadcrumbNode(basis.base, [
        startStufe(basis),
        partnerStufe(basis),
        {
            name: produkt.partner.name,
            pfad: marke
        },
        {
            name: text(produkt.title, basis.locale),
            pfad: `${marke}${produkt.slug}/`
        }
    ]));
}
// Als Zeichencode statt Literal: ein rohes U+2028 im Quelltext beendet für
// manche Werkzeuge die Zeile
const ZEILENTRENNER = String.fromCharCode(0x2028);
const ABSATZTRENNER = String.fromCharCode(0x2029);
function serializeJsonLd(daten) {
    return JSON.stringify(daten).replace(/</g, '\\u003c').replace(/>/g, '\\u003e').replace(/&/g, '\\u0026').split(ZEILENTRENNER).join('\\u2028').split(ABSATZTRENNER).join('\\u2029');
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/url/contactLinks.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MAP_PAGE_PATH",
    ()=>MAP_PAGE_PATH,
    "MAP_QUERY_MAX",
    ()=>MAP_QUERY_MAX,
    "androidGeoHref",
    ()=>androidGeoHref,
    "appleMapsHref",
    ()=>appleMapsHref,
    "isAndroidPlatform",
    ()=>isAndroidPlatform,
    "isApplePlatform",
    ()=>isApplePlatform,
    "isValidGeo",
    ()=>isValidGeo,
    "knownGeoFor",
    ()=>knownGeoFor,
    "mailtoHref",
    ()=>mailtoHref,
    "mapAppHref",
    ()=>mapAppHref,
    "mapPageHref",
    ()=>mapPageHref,
    "parseMapPageParams",
    ()=>parseMapPageParams,
    "phoneToE164",
    ()=>phoneToE164,
    "telHref",
    ()=>telHref
]);
/**
 * #2054: Linkziele für Telefon, E-Mail und Anschrift — rein, ohne React. Die
 * Firmenwerte kommen aus `config/companyContact.ts`; Werte aus
 * Redaktionsdaten (CMS-Kontaktkarte, Teamkarten, Konten) werden hier
 * erkannt: passt ein Wert nicht zum Muster, gibt es kein Linkziel und die
 * Anzeige bleibt Text.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$mail$2f$address$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/mail/address.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$companyContact$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/companyContact.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$i18n$2f$siteLocales$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/i18n/siteLocales.ts [app-client] (ecmascript)");
;
;
;
/** Zeichen, die eine geschriebene Telefonnummer enthalten darf */ const PHONE_TEXT = /^\+?[\d\s()./–-]+$/;
/** E.164: höchstens 15 Ziffern; unter 6 Ziffern ist es keine Rufnummer */ const MIN_DIGITS = 6;
const MAX_DIGITS = 15;
/** Ländervorwahl für national geschriebene Nummern (`06126 …`) */ const DEFAULT_COUNTRY_CODE = '49';
function phoneToE164(text) {
    if (typeof text !== 'string') return null;
    const roh = text.trim();
    if (!roh || !PHONE_TEXT.test(roh)) return null;
    const ohneNull = roh.replace(/^(\+\d{1,3})\s*\(0\)/, '$1');
    const ziffern = ohneNull.replace(/\D/g, '');
    let e164;
    if (ohneNull.startsWith('+')) e164 = `+${ziffern}`;
    else if (ziffern.startsWith('00')) e164 = `+${ziffern.slice(2)}`;
    else if (ziffern.startsWith('0')) e164 = `+${DEFAULT_COUNTRY_CODE}${ziffern.slice(1)}`;
    else return null;
    const anzahl = e164.length - 1;
    if (anzahl < MIN_DIGITS || anzahl > MAX_DIGITS || e164.startsWith('+0')) return null;
    return e164;
}
function telHref(phone) {
    const e164 = phoneToE164(phone);
    return e164 ? `tel:${e164}` : null;
}
function mailtoHref(address, subject) {
    const adresse = typeof address === 'string' ? address.trim() : '';
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$mail$2f$address$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMailAddress"])(adresse)) return null;
    const betreff = subject?.trim();
    return betreff ? `mailto:${adresse}?subject=${encodeURIComponent(betreff)}` : `mailto:${adresse}`;
}
const koordinaten = (geo)=>`${geo.lat},${geo.lon}`;
const einzeilig = (query)=>query.replace(/\s+/g, ' ').trim();
const MAP_PAGE_PATH = '/map/';
const MAP_QUERY_MAX = 300;
/** Nachkommastellen der Koordinaten im Link (6 ≈ 10 cm) */ const GEO_STELLEN = 6;
const runde = (wert)=>Number(wert.toFixed(GEO_STELLEN));
function isValidGeo(geo) {
    return !!geo && Number.isFinite(geo.lat) && Number.isFinite(geo.lon) && Math.abs(geo.lat) <= 90 && Math.abs(geo.lon) <= 180;
}
function mapPageHref(target, locale) {
    if (!target) return null;
    const text = einzeilig(target.query).slice(0, MAP_QUERY_MAX);
    const geo = isValidGeo(target.geo) ? target.geo : undefined;
    if (!text && !geo) return null;
    // Von Hand kodiert (encodeURIComponent, Leerzeichen %20): URLSearchParams
    // schreibt je Umgebung `+` oder `%20` — der Link soll überall gleich sein.
    const teile = [];
    if (geo) teile.push(`lat=${runde(geo.lat)}`, `lon=${runde(geo.lon)}`);
    if (text) teile.push(`q=${encodeURIComponent(text)}`);
    const pfad = `${MAP_PAGE_PATH}?${teile.join('&')}`;
    return locale ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$i18n$2f$siteLocales$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localizePath"])(pfad, locale) : pfad;
}
function parseMapPageParams(params) {
    const query = einzeilig(params.get('q') ?? '').slice(0, MAP_QUERY_MAX);
    const latRoh = params.get('lat');
    const lonRoh = params.get('lon');
    const lat = latRoh !== null && latRoh.trim() !== '' ? Number(latRoh) : NaN;
    const lon = lonRoh !== null && lonRoh.trim() !== '' ? Number(lonRoh) : NaN;
    const geo = isValidGeo({
        lat,
        lon
    }) ? {
        lat: runde(lat),
        lon: runde(lon)
    } : undefined;
    if (!query && !geo) return null;
    return geo ? {
        query,
        geo
    } : {
        query
    };
}
function knownGeoFor(query) {
    const text = einzeilig(query ?? '').toLowerCase();
    if (!text) return undefined;
    const { street, postalCode } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$companyContact$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMPANY_ADDRESS"];
    return text.includes(street.toLowerCase()) && text.includes(postalCode) ? {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$companyContact$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMPANY_ADDRESS"].geo
    } : undefined;
}
function androidGeoHref(query, geo) {
    const ziel = geo ? koordinaten(geo) : '0,0';
    return `geo:${ziel}?q=${encodeURIComponent(einzeilig(query))}`;
}
function appleMapsHref(query, geo) {
    const text = einzeilig(query);
    const teile = [];
    if (text) teile.push(`q=${encodeURIComponent(text)}`);
    if (geo) teile.push(`ll=${koordinaten(geo)}`);
    return `https://maps.apple.com/?${teile.join('&')}`;
}
function isApplePlatform(userAgent) {
    return typeof userAgent === 'string' && /iPhone|iPad|iPod|Macintosh/.test(userAgent);
}
function isAndroidPlatform(userAgent) {
    return typeof userAgent === 'string' && /Android/i.test(userAgent);
}
function mapAppHref(target, userAgent) {
    if (!target) return null;
    const text = einzeilig(target.query);
    const geo = isValidGeo(target.geo) ? target.geo : undefined;
    if (!text && !geo) return null;
    if (isApplePlatform(userAgent)) return appleMapsHref(text, geo);
    if (isAndroidPlatform(userAgent)) return androidGeoHref(text, geo);
    return null;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/url/trailingSlash.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ensureTrailingSlash",
    ()=>ensureTrailingSlash,
    "ensureTrailingSlashHref",
    ()=>ensureTrailingSlashHref
]);
/**
 * #1475: next.config hat `trailingSlash: true`; ein Redirect-Ziel ohne
 * Schluss-Slash kostet einen zweiten 308. Middleware-Ziele laufen darüber.
 *
 * Edge-sicher (kein Node-Import): läuft in der Middleware.
 */ /** Letztes Segment mit Punkt = Datei (`/favicon.ico`), die bekommt keinen Slash. */ function istDatei(pathname) {
    const letztes = pathname.slice(pathname.lastIndexOf('/') + 1);
    return letztes.includes('.');
}
function ensureTrailingSlash(pathname) {
    if (pathname.endsWith('/') || istDatei(pathname)) return pathname;
    return `${pathname}/`;
}
function ensureTrailingSlashHref(href) {
    if (!href.startsWith('/') || href.startsWith('//')) return href;
    const ende = href.search(/[?#]/);
    const pfad = ende === -1 ? href : href.slice(0, ende);
    const rest = ende === -1 ? '' : href.slice(ende);
    return `${ensureTrailingSlash(pfad)}${rest}`;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);})()

//# sourceMappingURL=apps_web_src_1-h11p0bggyjn._.js.map