(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
(()=>{"use strict";return[
"[project]/apps/web/src/app/components/Atom/SiteMarkdown/SiteMarkdownContent.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SiteMarkdownContent",
    ()=>SiteMarkdownContent,
    "SiteMarkdownLink",
    ()=>SiteMarkdownLink,
    "default",
    ()=>__TURBOPACK__default__export__,
    "siteRehypePlugins",
    ()=>siteRehypePlugins,
    "siteUrlTransform",
    ()=>siteUrlTransform
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$NavLink$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/NavLink/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$NavLink$2f$NavLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/NavLink/NavLink.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$LinkPurpose$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/LinkPurpose/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$LinkPurpose$2f$LinkPurpose$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/LinkPurpose/LinkPurpose.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$a11y$2f$linkPurpose$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/a11y/linkPurpose.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$markdown$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Markdown__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/react-markdown/lib/index.js [app-client] (ecmascript) <export Markdown as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$markdown$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-markdown/lib/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$images$2f$rehypeSiteImages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/images/rehypeSiteImages.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$markdown$2f$rehypeHeadingOrder$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/markdown/rehypeHeadingOrder.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$markdown$2f$rehypeImageAlt$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/markdown/rehypeImageAlt.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$markdown$2f$rehypePageHeading$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/markdown/rehypePageHeading.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$markdown$2f$siteMarkdownText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/markdown/siteMarkdownText.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$url$2f$trailingSlash$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/url/trailingSlash.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$markdown$2f$rehypeExternalLinks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/markdown/rehypeExternalLinks.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$url$2f$externalLink$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/url/externalLink.ts [app-client] (ecmascript)");
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
/*
 * Der Renderer des Fließtexts — bewusst OHNE 'use client' (#1531).
 *
 * Öffentliche Seiten rendern Markdown auf dem Server (lib/cms/cmsMarkdown.tsx)
 * und reichen die fertigen Elemente an `SiteMarkdown` (`rendered`); der Browser
 * lädt react-markdown dann gar nicht. Ohne fertige Elemente (Storybook, Tests,
 * reine Client-Verwendung) holt `SiteMarkdown` diese Datei per next/dynamic
 * nach — derselbe Code, dieselbe Ausgabe.
 *
 * Deshalb gilt hier: keine Hooks, kein Zustand, kein Browser-API. Was im
 * Browser laufen muss (Router-Links, Bilder), steht als eigene Komponente mit
 * 'use client' in der Zuordnung unten — der Server reicht sie als Verweis durch.
 * Client-Code importiert diese Datei nie statisch (Wächter:
 * tests/guards/public-shell-imports.test.ts).
 */ /** Telefonnummer als Linkziel: `tel:` und danach nur Ziffern, Leerzeichen und übliche Trenner */ const TEL = /^tel:\+?[\d\s()./-]+$/i;
const siteUrlTransform = (url)=>TEL.test(url) ? url : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$markdown$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultUrlTransform"])(url);
/** #1562: Dateien unter public/ (/downloads/….pdf) nicht über den Router — der kennt sie nicht */ const istDatei = (ziel)=>/\.[a-z0-9]{2,5}$/i.test(ziel.split(/[?#]/)[0] ?? '');
function SiteMarkdownLink({ href, children }) {
    const ziel = href ?? '#';
    const zweck = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$LinkPurpose$2f$LinkPurpose$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinkPurpose"], {
        text: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$a11y$2f$linkPurpose$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["textOfChildren"])(children),
        href: ziel
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Atom/SiteMarkdown/SiteMarkdownContent.tsx",
        lineNumber: 92,
        columnNumber: 17
    }, this);
    if (ziel.startsWith('/') && !ziel.startsWith('//') && !istDatei(ziel)) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$NavLink$2f$NavLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavLink"], {
            href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$url$2f$trailingSlash$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ensureTrailingSlashHref"])(ziel),
            children: [
                children,
                zweck
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/src/app/components/Atom/SiteMarkdown/SiteMarkdownContent.tsx",
            lineNumber: 95,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        href: ziel,
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$url$2f$externalLink$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["externalLinkProps"])(ziel),
        children: [
            children,
            zweck
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Atom/SiteMarkdown/SiteMarkdownContent.tsx",
        lineNumber: 102,
        columnNumber: 5
    }, this);
}
_c = SiteMarkdownLink;
const components = {
    a: SiteMarkdownLink
};
/**
 * rehype-Plugins des Fließtexts, je Aufruf aus den Optionen gebaut. Einzige
 * Stelle dafür: Server- und Client-Weg laufen beide hier durch, ein Plugin
 * gilt also für beide (#1533 trägt hier die Bildbehandlung ein).
 */ const REHYPE_PLUGINS = [
    // #1563: `#` → h2, mit `pageHeading` die erste Überschrift → h1 (vor der Reihenfolge,
    // damit die nur noch die eine H1 sieht und alles Weitere darunter einordnet)
    ({ pageHeading }, content)=>[
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$markdown$2f$rehypePageHeading$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rehypePageHeading"],
            {
                pageHeadingLine: pageHeading ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$markdown$2f$siteMarkdownText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["firstContentLine"])(content) : null
            }
        ],
    // #1533: Maße, lazy und srcset an jedem Bild; nur das erste lädt auf Wunsch sofort
    ({ eagerFirstImage })=>[
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$images$2f$rehypeSiteImages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rehypeSiteImages"],
            {
                eagerFirst: eagerFirstImage === true
            }
        ],
    // #1566: Alt-Text aus dem Abschnitt, wenn das Bild keinen eigenen trägt
    ({ imageAlt }, content)=>[
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$markdown$2f$rehypeImageAlt$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rehypeImageAlt"],
            {
                content,
                fallback: imageAlt
            }
        ],
    // #1538: Überschriften ohne Sprung in der Reihenfolge; das gewählte Aussehen bleibt (data-render-as)
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$markdown$2f$rehypeHeadingOrder$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rehypeHeadingOrder"],
    // #2158: externe Links ohne Referrer (neuer Tab, noopener noreferrer, referrerpolicy)
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$markdown$2f$rehypeExternalLinks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rehypeExternalLinks"]
];
const siteRehypePlugins = (options, content = '')=>REHYPE_PLUGINS.map((plugin)=>plugin(options, content));
function SiteMarkdownContent({ content, eagerFirstImage = false, pageHeading = false, imageAlt, remarkPlugins }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$markdown$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Markdown__as__default$3e$__["default"], {
        components: components,
        urlTransform: siteUrlTransform,
        remarkPlugins: remarkPlugins,
        rehypePlugins: siteRehypePlugins({
            eagerFirstImage,
            pageHeading,
            imageAlt
        }, content),
        children: content
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Atom/SiteMarkdown/SiteMarkdownContent.tsx",
        lineNumber: 151,
        columnNumber: 5
    }, this);
}
_c1 = SiteMarkdownContent;
const __TURBOPACK__default__export__ = SiteMarkdownContent;
var _c, _c1;
__turbopack_context__.k.register(_c, "SiteMarkdownLink");
__turbopack_context__.k.register(_c1, "SiteMarkdownContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/images/cmsImageSizes.generated.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* Generiert von cmsImageSizes.sync.test.ts (WRITE_CMS_IMAGE_SIZES=1) — nicht von Hand ändern (#1533) */ __turbopack_context__.s([
    "CMS_IMAGE_SIZES",
    ()=>CMS_IMAGE_SIZES
]);
const CMS_IMAGE_SIZES = {
    '0708-textor-kuta-df7932.webp': [
        704,
        528
    ],
    '1922-b4f27b.webp': [
        1280,
        640
    ],
    '2021-smakurez-projekt-827f86.webp': [
        1280,
        640
    ],
    '2021-smakurez-projekt-849f4e.webp': [
        704,
        396
    ],
    '20230925-logo-entsorger-circle-gr-n-rgb-7d829c.webp': [
        704,
        528
    ],
    '20230925-logo-entsorger-circle-grun-rgb-7d829c.webp': [
        704,
        528
    ],
    '20241204-stoffstrombild-kunststoffe-580x-0decd5.webp': [
        704,
        396
    ],
    '20241204-stoffstrombild-kunststoffe-580x-4d036c.webp': [
        1280,
        640
    ],
    '20241204-stoffstrombild-kunststoffe-580x-52b61f.webp': [
        704,
        396
    ],
    '20241204-stoffstrombild-kunststoffe-580x-bea46e.webp': [
        704,
        528
    ],
    '20241212-kiss-projekt-2-580x375-16x9-3945f0.webp': [
        704,
        396
    ],
    '20241212-kiss-projekt-2-580x375-plastshi-a1389e.webp': [
        1280,
        640
    ],
    '20250611-kiss-577x375-ps-430e99.webp': [
        1280,
        640
    ],
    '20251016-werksentsorgung-boxen-580x327-9fd234.webp': [
        704,
        396
    ],
    '20260325-rigk-auf-den-messen-ifat-und-pr-03d1e4.webp': [
        1280,
        640,
        704
    ],
    '20260325-rigk-auf-den-messen-ifat-und-pr-c5cdec.webp': [
        704,
        396
    ],
    '2197-e49ca0.webp': [
        704,
        528
    ],
    '2564-c0a76b.webp': [
        704,
        528
    ],
    '2565-a13005.webp': [
        704,
        528
    ],
    '3340-02cc62.webp': [
        704,
        528
    ],
    '51091d8a-3077-42d3-b957-c52cb01df32f-4ef743.webp': [
        704,
        704
    ],
    '5a5a1a8e-c9b0-11ef-aa64-000000000000-6-4e7dea.webp': [
        468,
        60
    ],
    '5f7b2c32bc535912004205-138845.webp': [
        535,
        350
    ],
    '61581c65788d4953037008-b78875.webp': [
        478,
        400
    ],
    '61582f3148a06403300448-fa6938.webp': [
        1183,
        1183
    ],
    '62838c56206ea082506691-7990a3.webp': [
        437,
        437
    ],
    '64ca19af7fb75792749827-908a98.webp': [
        1280,
        640
    ],
    '64ca19af801f5005460366-3d4c4c.webp': [
        704,
        528
    ],
    '64ca19af806dd451478134-2f4134.webp': [
        704,
        528
    ],
    '64df3a1b07e34940978566-2024-06-12-135346-a5fe4b.webp': [
        536,
        304
    ],
    '64e875f609a75760893870-06cadf.webp': [
        1280,
        640
    ],
    '6531363eeec13476527790-70f241.webp': [
        333,
        142
    ],
    '6531392e8813c664732364-2024-06-12-125603-fab135.webp': [
        358,
        358
    ],
    '6531392e8813c664732364-91f8c2.webp': [
        358,
        358
    ],
    '65cb6936d6c01120390840-b205b1.webp': [
        1280,
        640
    ],
    '65cb6936d70ac798025438-2024-06-12-125139-9285af.webp': [
        768,
        512
    ],
    '65faef8087f49697243418-2024-06-12-125554-1d6942.webp': [
        1280,
        640
    ],
    '65faef8087f49697243418-84dff9.webp': [
        1280,
        640
    ],
    '66702c6738ea8503497332-d383f0.webp': [
        189,
        190
    ],
    '66704bd53cdb5109665329-28dd80.webp': [
        504,
        170
    ],
    '6687acab588d1762921503-99ad19.webp': [
        1200,
        234
    ],
    '6687b4eac87cd373490563-9ef30f.webp': [
        350,
        350
    ],
    '66bc5f6a2d680314368542-fc6542.webp': [
        1200,
        155
    ],
    '66f4ff0d7e75d038733318-137df7.webp': [
        1200,
        600
    ],
    '66fd474561267661624710-a92112.webp': [
        350,
        350
    ],
    '6a4baac03b751818800979-e38b1a.webp': [
        1200,
        484
    ],
    '869a3305-e694df.webp': [
        704,
        396
    ],
    'a91isr3c5-129d0zv-ppw-9e25ee.webp': [
        704,
        396
    ],
    'a91sjcl4p-129d0x6-ppw-2024-10-17-105738-d0a147.webp': [
        704,
        396
    ],
    'a9gfbrsg-129d0x2-ppw-3ff328.webp': [
        704,
        396
    ],
    'a9gfbrsg-129d0x2-ppw-7da9e4.webp': [
        1280,
        640
    ],
    'a9r2c53h-129d0wt-ppw-14470c.webp': [
        704,
        396
    ],
    'a9r9jdib-129d0x4-ppw-2024-10-17-104320-p-c2c57f.webp': [
        704,
        396
    ],
    'a9v6r1y2-1uqs41y-sf4-afb6c7.webp': [
        80,
        80
    ],
    'analyses-madscan-1-fa9a51.webp': [
        504,
        512
    ],
    'analyses-madscan-2-c54efb.webp': [
        504,
        512
    ],
    'analyses-madscan-3-2c4fcf.webp': [
        605,
        482
    ],
    'andi-quer-efc258.webp': [
        704,
        396
    ],
    'asrjhzea-63ec80.webp': [
        704,
        528
    ],
    'b-htai-innovate-hessen-plastshio-0271-e502c0.webp': [
        704,
        396
    ],
    'bench-analyzer-2-9a66c1.webp': [
        605,
        863
    ],
    'bench-analyzer-77a739.webp': [
        1280,
        640
    ],
    'bild-1-9ba154.webp': [
        704,
        396
    ],
    'bild1-16f77f.webp': [
        704,
        528
    ],
    'bild8-406bd8.webp': [
        605,
        340
    ],
    'bottle-7595561-1280-47893c.webp': [
        704,
        396
    ],
    'buntes-granulat-nur-f-r-presse-beschreib-f18707.webp': [
        704,
        396
    ],
    'buntes-granulat-nur-fur-presse-beschreib-97d8af.webp': [
        1280,
        640
    ],
    'buntes-granulat-nur-fur-presse-beschreib-dfd81d.webp': [
        1280,
        640
    ],
    'case-1-packaging-2026-04-24-081030-uhlq-f9deb5.webp': [
        704,
        396
    ],
    'case-2-automotive-70a51e.webp': [
        704,
        396
    ],
    'case-3-tech-43bbdc.webp': [
        704,
        396
    ],
    'ces-render-second-view-1-1-1-1d4fee.webp': [
        704,
        528
    ],
    'd21-005-trinamix-folie-09-2021-zm-17d2f0.webp': [
        1280,
        640
    ],
    'd21-005-trinamix-folie-09-2021-zm-483f6a.webp': [
        704,
        396
    ],
    'dfgh-da119c.webp': [
        704,
        396
    ],
    'drzfutghj-09b4d8.webp': [
        704,
        528
    ],
    'dsc04308-red-c045f9.webp': [
        1280,
        640
    ],
    'emilio-quer-56fc62.webp': [
        704,
        396
    ],
    'eod-1971-2025-small-1024x748-0d10a3.webp': [
        704,
        528
    ],
    'eucertplast-b15093.webp': [
        1280,
        640
    ],
    'firefly-community-synergien-kooperation--1eee75.webp': [
        704,
        396
    ],
    'firefly-community-synergien-kooperation--88bf4a.webp': [
        704,
        528
    ],
    'firefly-fullsstoff-kunststoff-rezyklat-h-0143be.webp': [
        1280,
        640
    ],
    'firefly-fullsstoff-kunststoff-rezyklat-h-f4abbb.webp': [
        1280,
        640
    ],
    'firefly-hand-die-granulat-halt-pp-regran-16d1c8.webp': [
        1280,
        640
    ],
    'firefly-hand-die-granulat-halt-pp-regran-5b8e23.webp': [
        704,
        396
    ],
    'firefly-kunststoff-rezyklat-h-ndesch-tte-4a0f40.webp': [
        704,
        396
    ],
    'firefly-kunststoff-rezyklat-h-ndesch-tte-eea93f.webp': [
        704,
        528
    ],
    'firefly-kunststoff-rezyklat-handeschutte-4a0f40.webp': [
        704,
        396
    ],
    'firefly-kunststoff-rezyklat-handeschutte-d5652f.webp': [
        1280,
        640
    ],
    'firefly-kunststoff-rezyklat-handeschutte-e3c701.webp': [
        704,
        704
    ],
    'firefly-kunststoff-rezyklat-handeschutte-eea93f.webp': [
        704,
        528
    ],
    'firefly-marketing-und-kommunikation-rezy-3e89a0.webp': [
        704,
        528
    ],
    'firefly-marketing-und-kommunikation-rezy-5dee07.webp': [
        704,
        396
    ],
    'firefly-markt-digital-trends-rezyklat-ku-12f835.webp': [
        704,
        396
    ],
    'firefly-markt-digital-trends-rezyklat-ku-82a390.webp': [
        704,
        528
    ],
    'firefly-markt-verkauf-lupe-kunststoff-ab-d380f0.webp': [
        1280,
        640
    ],
    'firefly-materialvermarktung-plattform-ha-60d109.webp': [
        704,
        396
    ],
    'firefly-monitored-materials-database-for-75e965.webp': [
        704,
        528
    ],
    'firefly-monitored-materials-database-for-81140b.webp': [
        704,
        396
    ],
    'firefly-verkauf-rezyklat-kunststoffgranu-2effdc.webp': [
        704,
        396
    ],
    'firefly-verkauf-rezyklat-kunststoffgranu-76a615.webp': [
        704,
        528
    ],
    'firefly-werksentsorgung-analyse-34677-bb41a5.webp': [
        704,
        704
    ],
    'firefly-zusatzartikel-digital-trends-rez-8aba75.webp': [
        704,
        396
    ],
    'grafik-iii-2026-03-16-134402-vrnd-413b6e.webp': [
        704,
        528
    ],
    'granulat-mit-hand-ohne-logo-e34ff2.webp': [
        1280,
        640
    ],
    'granulat-mit-hand-ohne-logo-recyclabilit-e6b403.webp': [
        1280,
        640
    ],
    'granulat-mit-hand-ohne-logo-recycled-pla-7b14fb.webp': [
        1280,
        640
    ],
    'granulat-mit-hand-ohne-logo-recycling-pr-679ffb.webp': [
        1280,
        640
    ],
    'hpf-00aa5e.webp': [
        704,
        396
    ],
    'htai-innovate-hessen-plastship-0026-labo-26ccef.webp': [
        704,
        528
    ],
    'htai-innovate-hessen-plastship-0026-labo-7fa74e.webp': [
        704,
        396
    ],
    'htai-innovate-hessen-plastship-0034-geru-721106.webp': [
        704,
        528
    ],
    'htai-innovate-hessen-plastship-0034-geru-95e308.webp': [
        704,
        396
    ],
    'htai-innovate-hessen-plastship-0034-geru-ab4832.webp': [
        704,
        704
    ],
    'htai-innovate-hessen-plastship-0053-labo-487142.webp': [
        704,
        528
    ],
    'htai-innovate-hessen-plastship-0053-labo-754f27.webp': [
        704,
        396
    ],
    'htai-innovate-hessen-plastship-0053-labo-e15664.webp': [
        704,
        704
    ],
    'htai-innovate-hessen-plastship-0062-labo-34ec44.webp': [
        704,
        528
    ],
    'htai-innovate-hessen-plastship-0062-labo-e0f3c8.webp': [
        704,
        704
    ],
    'htai-innovate-hessen-plastship-0062-labo-eff889.webp': [
        704,
        396
    ],
    'htai-innovate-hessen-plastship-0308-ki-d-4af005.webp': [
        704,
        396
    ],
    'htai-innovate-hessen-plastship-0364-andr-d62b9b.webp': [
        704,
        396
    ],
    'htai-innovate-hessen-plastship-0364-andr-e9c300.webp': [
        704,
        396
    ],
    'htai-innovate-hessen-plastship-0500-rezy-51ed96.webp': [
        704,
        396
    ],
    'htai-innovate-hessen-plastship-0500-rezy-a190ef.webp': [
        704,
        528
    ],
    'img-0071-5dd99a.webp': [
        704,
        528
    ],
    'img-0361-c9b3f6.webp': [
        704,
        396
    ],
    'img-122845-5441f6.webp': [
        704,
        396
    ],
    'img-170576-787257.webp': [
        704,
        396
    ],
    'img-186450-e5b96e.webp': [
        704,
        396
    ],
    'img-190007-909895.webp': [
        704,
        396
    ],
    'img-198255-61a05d.webp': [
        704,
        396
    ],
    'img-244530-e379da.webp': [
        704,
        396
    ],
    'img-275275-83650f.webp': [
        704,
        396
    ],
    'img-328151-dd0f73.webp': [
        704,
        396
    ],
    'img-378290-147f03.webp': [
        704,
        396
    ],
    'img-389728-93bd2d.webp': [
        1280,
        640,
        704
    ],
    'img-389728-94ef1d.webp': [
        704,
        396
    ],
    'img-411955-a3632d.webp': [
        704,
        396
    ],
    'img-416858-5cb9d6.webp': [
        704,
        396
    ],
    'img-427569-7edea1.webp': [
        704,
        396
    ],
    'img-427569-91a8b8.webp': [
        704,
        704
    ],
    'img-427569-bb7aa3.webp': [
        704,
        528
    ],
    'img-452374-351b2a.webp': [
        704,
        396
    ],
    'img-452613-23fd69.webp': [
        704,
        528
    ],
    'img-464442-726a6e.webp': [
        704,
        396
    ],
    'img-469423-946409.webp': [
        704,
        396
    ],
    'img-474733-d3347b.webp': [
        704,
        396
    ],
    'img-490393-783b85.webp': [
        704,
        396
    ],
    'img-494538-eab6c9.webp': [
        704,
        396
    ],
    'img-524906-921bc8.webp': [
        704,
        396
    ],
    'img-533024-9e1b94.webp': [
        704,
        396
    ],
    'img-557228-b6ebd0.webp': [
        704,
        396
    ],
    'img-573432-2ba702.webp': [
        704,
        704
    ],
    'img-620828-d95b16.webp': [
        704,
        396
    ],
    'img-690073-3030c9.webp': [
        704,
        396
    ],
    'img-723993-136cb1.webp': [
        704,
        528
    ],
    'img-7811-76f4b5.webp': [
        704,
        396
    ],
    'img-859999-fa8c1a.webp': [
        704,
        396
    ],
    'img-878868-5d4c38.webp': [
        1280,
        640,
        704
    ],
    'img-878868-6fedad.webp': [
        704,
        396
    ],
    'img-881388-45a14b.webp': [
        704,
        528
    ],
    'img-901606-6d84c0.webp': [
        704,
        396
    ],
    'img-908483-3ebfa5.webp': [
        704,
        396
    ],
    'img-918640-411082.webp': [
        704,
        396
    ],
    'img-9372-191333.webp': [
        704,
        396
    ],
    'img-941355-e00bd2.webp': [
        704,
        396
    ],
    'img-975932-143eb7.webp': [
        704,
        396
    ],
    'img-983743-cda540.webp': [
        704,
        528
    ],
    'img-992931-1ad3eb.webp': [
        704,
        396
    ],
    'istock-1147780617-2f23f3.webp': [
        1280,
        640
    ],
    'jeroen-glansdorp-ms5-6595-0c29cd.webp': [
        704,
        396
    ],
    'kette-7e7310.webp': [
        704,
        704
    ],
    'kijudzhs-66991a.webp': [
        1280,
        640
    ],
    'kijudzhs-6b5915.webp': [
        704,
        396
    ],
    'logo-bvse-negativ-4c-claim-unten-bec40d.webp': [
        1000,
        500
    ],
    'logo-hannawald-350x350-c13397.webp': [
        704,
        528
    ],
    'logo-nhs-535x350-468dd1.webp': [
        704,
        528
    ],
    'logo-plastcert-350x350-9f2d99.webp': [
        704,
        528
    ],
    'logo-plastics-recyclers-europe-535x350-2a73b3.webp': [
        704,
        528
    ],
    'logo-plastics-recyclers-europe-535x350-5b9bd2.webp': [
        704,
        396
    ],
    'logo-plastship-350x350-6719a8.webp': [
        704,
        528
    ],
    'logo-ram-350x350-4bba79.webp': [
        704,
        528
    ],
    'logo-recovinyl-535x350-9b2a26.webp': [
        704,
        528
    ],
    'logo-recyclass-535x350-ed3ed2.webp': [
        704,
        528
    ],
    'logo-rigk-350x350-0f79d3.webp': [
        704,
        528
    ],
    'logo-rigk-350x350-87b1dd.webp': [
        704,
        704
    ],
    'louisa-quer-97469d.webp': [
        704,
        396
    ],
    'madscan-2-a9f861.webp': [
        704,
        528
    ],
    'madscan-2-ac3683.webp': [
        605,
        454
    ],
    'madscan-analysis-3503e4.webp': [
        1387,
        926
    ],
    'mirco-quer-526c55.webp': [
        704,
        396
    ],
    'monika-quer-55cb2d.webp': [
        704,
        396
    ],
    'moritz-quer-e8a30c.webp': [
        704,
        396
    ],
    'moritzl-quer-403f18.webp': [
        704,
        396
    ],
    'nadelformiger-wollastonit-d669f7.webp': [
        1300,
        883
    ],
    'nicht-benannt-39-10a5de.webp': [
        1280,
        640
    ],
    'nicht-benannt-39-8298f3.webp': [
        704,
        528
    ],
    'ocs-800x533-2c3318.webp': [
        1280,
        640
    ],
    'pexels-freestocksorg-113885-kopie-fd1941.webp': [
        704,
        704
    ],
    'plastic-pellets-unsplash-free-use-80c17d.webp': [
        800,
        600
    ],
    'plastship-grafik-youtube-format-fbb95c.webp': [
        704,
        396
    ],
    'plastship-header-website-b5e462.webp': [
        1280,
        640
    ],
    'plastship-illustrations-1920x650px-netzw-a59e1b.webp': [
        704,
        396
    ],
    'plastship-logo-color-rgb-v-claim-new-1c21c5.webp': [
        704,
        528
    ],
    'plastship-odour-measurement-in-recyclate-495301.webp': [
        704,
        528
    ],
    'plastship-siegel-quality-all-grades-colo-3470df.webp': [
        704,
        528
    ],
    'plastship-siegel-quality-all-grades-colo-377b9e.webp': [
        704,
        704
    ],
    'plastship-siegel-quality-all-grades-colo-5dc84f.webp': [
        704,
        396
    ],
    'portfolioauswertung-deckblatt-710edc.webp': [
        704,
        396
    ],
    'pq-mex-bild-3be787.webp': [
        1280,
        640
    ],
    'pq-mex-bild-8fb05f.webp': [
        704,
        528
    ],
    'pq-mex-screenshot-result-a04b1b.webp': [
        800,
        600
    ],
    'prevent-waste-alliance-2024-06-03-100719-fafbeb.webp': [
        704,
        528
    ],
    'projekt-collage-erstellen-076065.webp': [
        704,
        528
    ],
    'qgwefg-0aed17.webp': [
        1280,
        640
    ],
    'rahh-d9bce7.webp': [
        704,
        396
    ],
    'recyclass-logo03-a-67a5c1.webp': [
        704,
        704
    ],
    'recyclass-recycledplastic-01-100-2024-07-8efbee.webp': [
        704,
        528
    ],
    'recyclass-recycling-process-1-553c35.webp': [
        704,
        528
    ],
    'recycling-forum-d7bba8.webp': [
        1280,
        640
    ],
    'recycling-illu-hand-thinkstockphotos-538-c58279.webp': [
        704,
        528
    ],
    'regranulat-granulat-shutterstock-2457711-bdd97c.webp': [
        704,
        528
    ],
    'rezyklat-bunt-05a400.webp': [
        1280,
        640
    ],
    'rezyklat-bunt-968ca5.webp': [
        704,
        396
    ],
    'schneider-lukas-quer-17e116.webp': [
        80,
        80
    ],
    'screenshot-2025-05-19-135225-8af64b.webp': [
        704,
        396
    ],
    'screenshot-2025-05-19-135622-8dc23c.webp': [
        704,
        396
    ],
    'screenshot-2025-05-19-140039-9112b4.webp': [
        704,
        396
    ],
    'screenshot-2026-04-28-115746-793fcf.webp': [
        704,
        704
    ],
    'sfhahegf-2024-10-17-113912-hzov-24a3fc.webp': [
        704,
        396
    ],
    'shutterstock-1627991785-994542.webp': [
        1280,
        640
    ],
    'srgdaega-fa55d6.webp': [
        704,
        396
    ],
    'tecpart-logo-350x350-564712.webp': [
        350,
        350
    ],
    'tecpart-logo-350x350-6b6ea8.webp': [
        704,
        528
    ],
    'tezgtrwg-67b191.webp': [
        704,
        396
    ],
    'tezgtrwg-b42b41.webp': [
        704,
        528
    ],
    'trx-devices-mockup-plastics0-web-v4-40d279.webp': [
        704,
        528
    ],
    'trx-devices-mockup-plastics0-web-v4-full-4d1651.webp': [
        704,
        528
    ],
    'trx-pastics-foil-recycling-screen-rz-1-2-890ed3.webp': [
        1280,
        640
    ],
    'trx-pastics-foil-recycling-screen-rz-1-698038.webp': [
        704,
        396
    ],
    'ufiguohijo-d909ea.webp': [
        704,
        704
    ],
    'unbenannt-1-4-163221.webp': [
        1280,
        640
    ],
    'unbenannt-1-4-c75fa0.webp': [
        704,
        396
    ],
    'unbenannt-10-2025-10-01-080729-hsjb-6f429a.webp': [
        704,
        528
    ],
    'unbenannt-12-4d6112.webp': [
        1280,
        640,
        704
    ],
    'unbenannt-16-158935.webp': [
        704,
        396
    ],
    'unbenannt-16-3d8c30.webp': [
        1280,
        640
    ],
    'unbenannt-17-2024-10-17-151639-xlrb-044b14.webp': [
        1280,
        640
    ],
    'unbenannt-2-11-d99eaa.webp': [
        1280,
        640
    ],
    'unbenannt-2-17-f495e5.webp': [
        704,
        528
    ],
    'unbenannt-23-d5a441.webp': [
        1280,
        640
    ],
    'unbenannt-24-c94cfb.webp': [
        1280,
        640
    ],
    'unbenannt-3-9-6d3f52.webp': [
        1280,
        640
    ],
    'unbenannt-38-19e1dd.webp': [
        704,
        396
    ],
    'unbenannt-4-b4b0e1.webp': [
        1280,
        640
    ],
    'unbenannt-50-03072c.webp': [
        704,
        396
    ],
    'unbenannt-50-890ceb.webp': [
        1280,
        640
    ],
    'unbenannt-55-58e10a.webp': [
        704,
        396
    ],
    'unbenannt-55-f9acb3.webp': [
        1280,
        640
    ],
    'unbenannt-7-e2bdd3.webp': [
        1280,
        640
    ],
    'unbenannt-9-7af3cd.webp': [
        704,
        396
    ],
    'unbenanntes-bild-9d140a.webp': [
        921,
        611
    ],
    'unbenanntes-bild-c3da26.webp': [
        1280,
        640
    ],
    'verarbeiter2-2024-05-28-163657-xnwd-f46bc7.webp': [
        704,
        396
    ],
    'veridis-logo-350x350-jpg-875e6d.webp': [
        704,
        528
    ],
    'whatsapp-image-2023-05-11-at-14-06-29-5b0e03.webp': [
        1280,
        640
    ],
    'whitpaper-auswertung-2cd070.webp': [
        704,
        528
    ],
    'whitpaper-intro-576c66.webp': [
        704,
        528
    ],
    'wiesbadener-kurhaus-fotolia-71847068-l-1bcf60.webp': [
        704,
        396
    ],
    'wse5drfgtzhujikol-6a9b12.webp': [
        704,
        396
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/images/cmsImageSizes.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CMS_IMAGE_PREFIX",
    ()=>CMS_IMAGE_PREFIX,
    "CMS_IMAGE_SIBLING_WIDTH",
    ()=>CMS_IMAGE_SIBLING_WIDTH,
    "cmsImageInfo",
    ()=>cmsImageInfo,
    "cmsImageSibling",
    ()=>cmsImageSibling,
    "isCmsImageSibling",
    ()=>isCmsImageSibling
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$images$2f$cmsImageSizes$2e$generated$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/images/cmsImageSizes.generated.ts [app-client] (ecmascript)");
;
const CMS_IMAGE_PREFIX = '/images/cms/';
const CMS_IMAGE_SIBLING_WIDTH = 704;
const cmsImageSibling = (file, width)=>file.replace(/(\.[a-z0-9]+)$/i, `.w${width}$1`);
const isCmsImageSibling = (file)=>/\.w\d+\.[a-z0-9]+$/i.test(file);
function cmsImageInfo(src) {
    if (!src.startsWith(CMS_IMAGE_PREFIX)) return undefined;
    const file = src.slice(CMS_IMAGE_PREFIX.length);
    if (!Object.prototype.hasOwnProperty.call(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$images$2f$cmsImageSizes$2e$generated$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CMS_IMAGE_SIZES"], file)) return undefined;
    const [width, height, siblingWidth] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$images$2f$cmsImageSizes$2e$generated$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CMS_IMAGE_SIZES"][file] ?? [];
    if (!width || !height) return undefined;
    if (!siblingWidth) return {
        width,
        height
    };
    const sibling = `${CMS_IMAGE_PREFIX}${cmsImageSibling(file, siblingWidth)}`;
    return {
        width,
        height,
        srcSet: `${sibling} ${siblingWidth}w, ${src} ${width}w`
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/images/rehypeSiteImages.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SITE_IMAGE_SIZES",
    ()=>SITE_IMAGE_SIZES,
    "rehypeSiteImages",
    ()=>rehypeSiteImages,
    "siteImageProperties",
    ()=>siteImageProperties
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$images$2f$cmsImageSizes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/images/cmsImageSizes.ts [app-client] (ecmascript)");
;
const SITE_IMAGE_SIZES = '(max-width: 768px) calc(100vw - 24px), 768px';
function siteImageProperties(src, index, options = {}) {
    const eager = options.eagerFirst === true && index === 0;
    const properties = {
        loading: eager ? 'eager' : 'lazy',
        decoding: 'async'
    };
    if (eager) properties['fetchPriority'] = 'high';
    const info = typeof src === 'string' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$images$2f$cmsImageSizes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cmsImageInfo"])(src) : undefined;
    if (info) {
        properties['width'] = info.width;
        properties['height'] = info.height;
        if (info.srcSet) {
            properties['srcSet'] = info.srcSet;
            properties['sizes'] = SITE_IMAGE_SIZES;
        }
    }
    return properties;
}
const isElement = (node)=>node.type === 'element';
function rehypeSiteImages(options = {}) {
    return (tree)=>{
        let index = 0;
        const visit = (nodes)=>{
            for (const node of nodes){
                if (!isElement(node)) continue;
                if (node.tagName === 'img') {
                    Object.assign(node.properties, siteImageProperties(node.properties['src'], index, options));
                    index += 1;
                }
                visit(node.children);
            }
        };
        visit(tree.children);
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/markdown/rehypeExternalLinks.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "rehypeExternalLinks",
    ()=>rehypeExternalLinks
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$url$2f$externalLink$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/url/externalLink.ts [app-client] (ecmascript)");
;
/**
 * #2158: Externe Links im Markdown — neuer Tab, `rel="noopener noreferrer"`
 * (vorhandene Werte bleiben), `referrerpolicy="no-referrer"`. Erkennung
 * zentral über `isExternalHref` (lib/url/externalLink.ts); `mailto:`, `tel:`
 * und eigene Seiten bleiben, wie sie sind.
 *
 * Hängt in jeder Markdown-Pipeline der Web-Oberfläche: Fließtext der
 * öffentlichen Seiten (SiteMarkdownContent: CMS, News, Partner) und der
 * App-Renderer (MarkdownRenderer: Wiki, Pia, Felder). Deren `a`-Komponenten
 * rechnen dieselben Attribute über die Link-Atome noch einmal — das Plugin
 * gilt auch für jeden Weg ohne eigene `a`-Komponente.
 */ const isElement = (node)=>node.type === 'element';
/** `rel` aus hast (Liste oder Text) als Liste */ const relListe = (wert)=>{
    if (Array.isArray(wert)) return wert.map(String);
    if (typeof wert === 'string') return wert.split(/\s+/).filter(Boolean);
    return [];
};
function rehypeExternalLinks() {
    return (tree)=>{
        const visit = (nodes)=>{
            for (const node of nodes){
                if (!isElement(node)) continue;
                if (node.tagName === 'a') {
                    const href = node.properties['href'];
                    if (typeof href === 'string' && (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$url$2f$externalLink$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isExternalHref"])(href)) {
                        const rel = relListe(node.properties['rel']);
                        for (const noetig of __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$url$2f$externalLink$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NO_REFERRER_REL"].split(' ')){
                            if (!rel.some((r)=>r.toLowerCase() === noetig)) rel.push(noetig);
                        }
                        node.properties['rel'] = rel;
                        node.properties['target'] = '_blank';
                        node.properties['referrerPolicy'] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$url$2f$externalLink$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NO_REFERRER_POLICY"];
                    }
                }
                visit(node.children);
            }
        };
        visit(tree.children);
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/markdown/rehypeHeadingOrder.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "headingLevel",
    ()=>headingLevel,
    "rehypeHeadingOrder",
    ()=>rehypeHeadingOrder
]);
const HEADING = /^h([1-6])$/;
const isElement = (node)=>node.type === 'element';
const headingLevel = (chosen, previous)=>Math.min(chosen, previous + 1);
function rehypeHeadingOrder(options = {}) {
    return (tree)=>{
        let previous = options.parentLevel ?? 1;
        const visit = (nodes)=>{
            for (const node of nodes){
                if (!isElement(node)) continue;
                const match = HEADING.exec(node.tagName);
                if (match) {
                    const chosen = Number(match[1]);
                    const level = headingLevel(chosen, previous);
                    if (level !== chosen) {
                        node.tagName = `h${level}`;
                        node.properties['data-render-as'] = String(chosen);
                    }
                    previous = level;
                    continue;
                }
                visit(node.children);
            }
        };
        visit(tree.children);
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/markdown/rehypeImageAlt.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "rehypeImageAlt",
    ()=>rehypeImageAlt
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$markdown$2f$siteMarkdownText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/markdown/siteMarkdownText.ts [app-client] (ecmascript)");
;
const isElement = (node)=>node.type === 'element';
function rehypeImageAlt(options = {}) {
    const content = options.content ?? '';
    const quelle = {
        headings: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$markdown$2f$siteMarkdownText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["markdownHeadings"])(content),
        lead: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$markdown$2f$siteMarkdownText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["markdownLead"])(content)
    };
    return (tree)=>{
        const visit = (nodes)=>{
            for (const node of nodes){
                if (!isElement(node)) continue;
                if (node.tagName === 'img') {
                    const eigener = node.properties['alt'];
                    node.properties['alt'] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$markdown$2f$siteMarkdownText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["imageAltFor"])(typeof eigener === 'string' ? eigener : undefined, node.position?.start.line, quelle, options.fallback);
                }
                visit(node.children);
            }
        };
        visit(tree.children);
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/markdown/rehypePageHeading.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "rehypePageHeading",
    ()=>rehypePageHeading
]);
const HEADING = /^h([1-6])$/;
const isElement = (node)=>node.type === 'element';
function rehypePageHeading(options = {}) {
    const zeile = options.pageHeadingLine ?? null;
    return (tree)=>{
        const visit = (nodes)=>{
            for (const node of nodes){
                if (!isElement(node)) continue;
                const match = HEADING.exec(node.tagName);
                if (match) {
                    // `#` sieht aus wie die h2, aus der es jetzt wird
                    const aussehen = Math.max(2, Number(match[1]));
                    if (zeile !== null && node.position?.start.line === zeile) {
                        node.tagName = 'h1';
                        node.properties['data-render-as'] = String(aussehen);
                    } else if (node.tagName === 'h1') {
                        node.tagName = 'h2';
                    }
                    continue;
                }
                visit(node.children);
            }
        };
        visit(tree.children);
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/markdown/siteMarkdownText.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Text-Helfer des Fließtexts der öffentlichen Seiten (#1563, #1566) — rein,
 * ohne React und ohne 'use client', damit Server-Renderer
 * (SiteMarkdownContent, lib/cms/cmsMarkdown.tsx), rehype-Plugins und Tests
 * dieselben Funktionen nutzen. Vorher standen sie in SiteMarkdown.tsx; seit
 * #1531 rendert der Server, und aus einem 'use client'-Modul bekäme er nur
 * Verweise statt Funktionen.
 */ /** Erste nicht leere Zeile (1-basiert) — dort steht die Überschrift, die die Seite eröffnet. */ __turbopack_context__.s([
    "firstContentLine",
    ()=>firstContentLine,
    "imageAltFor",
    ()=>imageAltFor,
    "markdownHeadings",
    ()=>markdownHeadings,
    "markdownLead",
    ()=>markdownLead
]);
function firstContentLine(markdown) {
    return markdown.split('\n').findIndex((zeile)=>zeile.trim() !== '') + 1;
}
/** Markdown-Auszeichnung entfernen: Links, Bilder, Betonung, Code. */ const reinerText = (text)=>text.replace(/!?\[([^\]]*)\]\([^)]*\)/g, '$1').replace(/[*_`~]/g, '').replace(/\s+/g, ' ').trim();
function markdownHeadings(markdown) {
    const ergebnis = [];
    markdown.split('\n').forEach((zeile, index)=>{
        const treffer = /^\s{0,3}#{1,6}\s+(.+?)\s*#*\s*$/.exec(zeile);
        const text = treffer?.[1] ? reinerText(treffer[1]) : '';
        if (text) ergebnis.push({
            line: index + 1,
            text
        });
    });
    return ergebnis;
}
function markdownLead(markdown) {
    const ersteZeile = markdown.split('\n').find((zeile)=>zeile.trim() !== '') ?? '';
    const treffer = /^\s*\*\*(.+?)\*\*/.exec(ersteZeile);
    return treffer?.[1] ? reinerText(treffer[1]).replace(/[:.]$/, '').trim() : '';
}
function imageAltFor(eigener, zeile, quelle, fallback) {
    const gepflegt = eigener?.trim();
    if (gepflegt) return gepflegt;
    const davor = zeile === undefined ? undefined : [
        ...quelle.headings
    ].reverse().find((u)=>u.line < zeile);
    return davor?.text ?? (fallback?.trim() || quelle.lead || quelle.headings[0]?.text || '');
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]})(),
"[project]/apps/web/src/app/components/Atom/SiteMarkdown/SiteMarkdownContent.tsx [app-client] (ecmascript, next/dynamic entry)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/apps/web/src/app/components/Atom/SiteMarkdown/SiteMarkdownContent.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=apps_web_src_1lzpogzpes_1u._.js.map