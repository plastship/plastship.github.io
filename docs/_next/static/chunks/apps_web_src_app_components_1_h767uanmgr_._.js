(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
(()=>{"use strict";return[
"[project]/apps/web/src/app/components/Molecule/CardSlider/CardSlider.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArrowButton",
    ()=>ArrowButton,
    "Arrows",
    ()=>Arrows,
    "Band",
    ()=>Band,
    "Body",
    ()=>Body,
    "CARD_REVEAL_COLUMNS",
    ()=>CARD_REVEAL_COLUMNS,
    "CARD_REVEAL_MS",
    ()=>CARD_REVEAL_MS,
    "Controls",
    ()=>Controls,
    "CtaWrapper",
    ()=>CtaWrapper,
    "Dot",
    ()=>Dot,
    "DotRow",
    ()=>DotRow,
    "Figure",
    ()=>Figure,
    "Root",
    ()=>Root,
    "Slide",
    ()=>Slide,
    "Slides",
    ()=>Slides,
    "Stage",
    ()=>Stage,
    "Text",
    ()=>Text,
    "Title",
    ()=>Title,
    "sliderDot",
    ()=>sliderDot
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/site.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$hex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/hex.ts [app-client] (ecmascript) <locals>");
'use client';
;
;
;
/*
 * Karten-Slider wie auf plastship.com (#1199, Quelle:
 * /entsorger-circle-recycling-netzwerk, Abschnitt Wissen, Erfahrung und Partner):
 * Kopf zentriert, darunter ein Band bg-blue-50 über die ganze Seitenbreite. Im
 * Band steht je Karte ein Raster grid sm:grid-cols-5 gap-8 md:gap-16 mit Bild
 * (rounded-3xl, col-span-2) und Text (space-y-4, col-span-3). Eine Karte ist
 * sichtbar, die übrigen liegen in derselben Rasterzelle und blenden über.
 *
 * Das Bild hängt über den Rand des Bands: mobil 32 px nach oben, ab sm 48 px,
 * ab md 64 px nach unten (Quelle: article top-[-32px] sm:top-[48px]
 * md:top-[64px], Bandhöhe = höchste Karte). Die runden Pfeilknöpfe sitzen mittig
 * auf der Unterkante des Bands, die Punkte unter dem Bild.
 */ const bp = {
    sm: '640px',
    md: '768px',
    lg: '1024px'
};
/** Überhang des Bildes unter dem Band (ab sm) */ const UEBERHANG_SM = '48px';
const UEBERHANG_MD = '64px';
/** Überhang über dem Band (mobil) */ const UEBERHANG_MOBIL = '32px';
/** Pfeilknopf: h-12 plus 1 px Rand der Quelle */ const KNOPF_PX = 50;
const KNOPF = `${KNOPF_PX}px`;
const CARD_REVEAL_MS = 1200;
const CARD_REVEAL_COLUMNS = 10;
const Root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].section.withConfig({
    displayName: "CardSlider.styles__Root",
    componentId: "sc-9062f506-0"
})`
  display: flex;
  flex-direction: column;
  gap: 32px;
  background-color: transparent;
`;
const Stage = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "CardSlider.styles__Stage",
    componentId: "sc-9062f506-1"
})`
  position: relative;
  padding-top: ${UEBERHANG_MOBIL};

  @media (min-width: ${bp.sm}) {
    padding-top: 0;
  }
`;
const Band = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "CardSlider.styles__Band",
    componentId: "sc-9062f506-2"
})`
  position: relative;
  isolation: isolate;
  display: flow-root;
  padding-bottom: 64px;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: -1;
    background: ${({ theme })=>theme.palette.site.tint};
    box-shadow: 0 0 0 100vmax ${({ theme })=>theme.palette.site.tint};
    clip-path: inset(0 -100vmax);
  }

  @media (min-width: ${bp.sm}) {
    padding-top: ${UEBERHANG_SM};
    padding-bottom: 0;
  }

  @media (min-width: ${bp.md}) {
    padding-top: ${UEBERHANG_MD};
  }
`;
const Slides = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "CardSlider.styles__Slides",
    componentId: "sc-9062f506-3"
})`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  margin-top: -${UEBERHANG_MOBIL};
  touch-action: pan-y;

  @media (min-width: ${bp.sm}) {
    margin-top: 0;
    margin-bottom: -${UEBERHANG_SM};
  }

  @media (min-width: ${bp.md}) {
    margin-bottom: -${UEBERHANG_MD};
  }
`;
/* Raster je Karte; alle Karten liegen in derselben Zelle übereinander */ const raster = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 32px;

  @media (min-width: ${bp.sm}) {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }

  @media (min-width: ${bp.md}) {
    gap: 64px;
  }
`;
const Slide = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "CardSlider.styles__Slide",
    componentId: "sc-9062f506-4"
})`
  ${raster}
  grid-area: 1 / 1;
  position: relative;
  z-index: 0;
  background-color: transparent;
  visibility: hidden;

  &[data-active='true'] {
    z-index: 1;
    visibility: visible;
  }

  /* #1214: die verlassene Karte bleibt unter der neuen sichtbar, bis deren Wabe aufgewachsen ist */
  &[data-leaving='true'] {
    visibility: visible;
  }
`;
const Figure = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].figure.withConfig({
    displayName: "CardSlider.styles__Figure",
    componentId: "sc-9062f506-5"
})`
  position: relative;
  box-sizing: border-box;
  align-self: stretch;
  margin: 0;
  overflow: hidden;
  border-radius: 24px;
  aspect-ratio: 704 / 396;
  background: ${({ theme, $tiling })=>$tiling ? 'transparent' : theme.palette.site.border};
  user-select: none;

  img {
    object-fit: cover;
    opacity: ${({ $tiling })=>$tiling ? 0 : 1};
  }

  [data-leaving='true'] > & img {
    ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$hex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hexRevealRecede"])(CARD_REVEAL_MS)}
  }

  @media (min-width: ${bp.sm}) {
    grid-column: span 2;
  }

  @media (prefers-reduced-motion: reduce) {
    && img {
      animation: none;
    }
  }
`;
const Body = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "CardSlider.styles__Body",
    componentId: "sc-9062f506-6"
})`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  min-width: 0;
  opacity: 0;
  transition: opacity 150ms ease;

  [data-active='true'] > & {
    opacity: 1;
    transition: opacity 300ms ease;
  }

  @media (min-width: ${bp.sm}) {
    grid-column: ${({ $fullWidth })=>$fullWidth ? '1 / -1' : 'span 3'};
    padding-bottom: calc(${UEBERHANG_SM} + ${KNOPF} / 2 + 16px);
  }

  @media (min-width: ${bp.md}) {
    padding-bottom: calc(${UEBERHANG_MD} + ${KNOPF} / 2 + 16px);
  }

  @media (prefers-reduced-motion: reduce) {
    &,
    [data-active='true'] > & {
      transition: none;
    }
  }
`;
const Title = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].h3.withConfig({
    displayName: "CardSlider.styles__Title",
    componentId: "sc-9062f506-7"
})`
  margin: 0;
  font-family: ${({ theme })=>theme.font.primaryFamily};
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0;
  text-transform: uppercase;
  color: ${({ theme })=>theme.palette.site.text};
  hyphens: auto;

  @media (min-width: ${bp.md}) {
    font-size: 20px;
  }

  @media (min-width: ${bp.lg}) {
    font-size: 30px;
    line-height: 36px;
  }
`;
const Text = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "CardSlider.styles__Text",
    componentId: "sc-9062f506-8"
})`
  ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteMuted"]}

  p {
    margin: 0;
  }

  p + p {
    margin-top: 1em;
  }
`;
const CtaWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "CardSlider.styles__CtaWrapper",
    componentId: "sc-9062f506-9"
})`
  padding-top: 8px;
`;
const Controls = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "CardSlider.styles__Controls",
    componentId: "sc-9062f506-10"
})`
  /* über dem Band (das mit isolation eine eigene Ebene bildet); die leere
     Fläche lässt Zeiger zum überhängenden Bild durch */
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 22px;
  pointer-events: none;

  button {
    pointer-events: auto;
  }

  ${({ $media })=>$media && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
      @media (min-width: ${bp.sm}) {
        display: grid;
        grid-template-columns: repeat(5, minmax(0, 1fr));
        gap: 32px;
        align-items: start;
      }

      @media (min-width: ${bp.md}) {
        gap: 64px;
      }
    `}
`;
const Arrows = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "CardSlider.styles__Arrows",
    componentId: "sc-9062f506-11"
})`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-top: calc(${KNOPF} / -2);

  ${({ $media })=>$media && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
      @media (min-width: ${bp.sm}) {
        grid-row: 1;
        grid-column: 3 / span 3;
        justify-content: flex-start;
      }
    `}
`;
const DotRow = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "CardSlider.styles__DotRow",
    componentId: "sc-9062f506-12"
})`
  display: flex;
  justify-content: center;
  gap: 4px;

  ${({ $media })=>$media && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
      @media (min-width: ${bp.sm}) {
        grid-row: 1;
        grid-column: 1 / span 2;
        padding-top: calc(${UEBERHANG_SM} + 21px);
      }

      @media (min-width: ${bp.md}) {
        padding-top: calc(${UEBERHANG_MD} + 21px);
      }
    `}
`;
const ArrowButton = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "CardSlider.styles__ArrowButton",
    componentId: "sc-9062f506-13"
})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-sizing: border-box;
  width: ${KNOPF};
  height: ${KNOPF};
  padding: 0;
  border: 0;
  clip-path: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$hex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["roundedHexagonClipPath"])(KNOPF_PX)};
  color: #ffffff;
  background: ${({ theme })=>theme.palette.site.blue};
  cursor: pointer;
  transition: background-color 150ms ease;

  &:hover,
  &:focus-visible {
    background: ${({ theme })=>theme.palette.site.blueDark};
    outline: none;
  }

  svg {
    display: block;
  }
`;
const sliderDot = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
  position: relative;
  display: block;
  flex-shrink: 0;
  box-sizing: border-box;
  width: 24px;
  height: 24px;
  padding: 0;
  border: 0;
  background: transparent;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    top: 5px;
    left: 5px;
    width: 14px;
    height: 14px;
    clip-path: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$hex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["roundedHexagonClipPath"])(14)};
    background: ${({ theme })=>theme.palette.site.border};
    transform: scale(0.5);
    transition:
      transform 150ms ease,
      background-color 150ms ease;
  }

  &[data-active='true']::before {
    background: ${({ theme })=>theme.palette.site.blue};
    transform: scale(1);
  }

  /* Fokus wie bisher über volle Größe und Farbe der Wabe */
  &:focus-visible {
    outline: none;
  }

  &:focus-visible::before {
    background: ${({ theme })=>theme.palette.site.blueDark};
    transform: scale(1);
  }

  @media (prefers-reduced-motion: reduce) {
    &::before {
      transition: none;
    }
  }
`;
const Dot = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "CardSlider.styles__Dot",
    componentId: "sc-9062f506-14"
})`
  ${sliderDot}
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/CardSlider/CardSlider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CardSlider",
    ()=>CardSlider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/image-component.js [app-client] (ecmascript) <export Image as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$SiteSectionHeader$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/SiteSectionHeader/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$SiteSectionHeader$2f$SiteSectionHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/SiteSectionHeader/SiteSectionHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$LinkButton$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/LinkButton/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Button$2f$Button$2e$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Button/Button.types.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconArrowRight$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconArrowRight/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$IconChip$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/IconChip/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$IconChip$2f$IconChip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/IconChip/IconChip.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexPagination$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/HexPagination/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexPagination$2f$HexPagination$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/HexPagination/HexPagination.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexTileReveal$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/HexTileReveal/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexTileReveal$2f$HexTileReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/HexTileReveal/HexTileReveal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$usePrefersReducedMotion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/usePrefersReducedMotion.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$CardSlider$2f$CardSlider$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/CardSlider/CardSlider.styles.ts [app-client] (ecmascript)");
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
/** Mindestweg (px) einer Wischgeste, bevor sie blättert */ const WISCHEN = 40;
const ArrowLeft = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "16",
        height: "14",
        viewBox: "0 0 16 14",
        fill: "none",
        "aria-hidden": "true",
        focusable: "false",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M6.89019 1.1665L1.33464 6.99984M1.33464 6.99984L6.89019 12.8332M1.33464 6.99984L14.668 6.99984",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }, void 0, false, {
            fileName: "[project]/apps/web/src/app/components/Molecule/CardSlider/CardSlider.tsx",
            lineNumber: 56,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Molecule/CardSlider/CardSlider.tsx",
        lineNumber: 55,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = ArrowLeft;
const ArrowRight = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "18",
        height: "16",
        viewBox: "0 0 18 16",
        fill: "none",
        "aria-hidden": "true",
        focusable: "false",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M10.3333 1L17 8M17 8L10.3333 15M17 8L1 8",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }, void 0, false, {
            fileName: "[project]/apps/web/src/app/components/Molecule/CardSlider/CardSlider.tsx",
            lineNumber: 68,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Molecule/CardSlider/CardSlider.tsx",
        lineNumber: 67,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c1 = ArrowRight;
const absaetze = (text)=>text.split(/\n\s*\n/).map((a)=>a.trim()).filter(Boolean);
/**
 * Karten-Slider wie auf plastship.com (#1199): zentrierter Kopf, darunter ein
 * Band über die ganze Seitenbreite mit genau einer Karte (Bild links, Titel und
 * Text rechts), runde Pfeilknöpfe auf der Bandkante, Punkte unter dem Bild.
 * Die Karten blenden über; Pfeiltasten, Knöpfe, Punkte und Wischen blättern
 * (am Ende wieder von vorn wie die Quelle). „Bewegung reduzieren" schaltet
 * die Überblendung ab.
 */ const CardSlider = ({ headline, description, items, className, dataTestId = 'card-slider' })=>{
    _s();
    const { tr } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useClientTranslation"])();
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const wisch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const slidesId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    const count = items.length;
    const mitBild = items.some((item)=>Boolean(item.image));
    // #1214: Kartenwechsel wie die Bilder im HeroSlider — das neue Bild baut sich
    // Wabe um Wabe auf (HexTileReveal), die verlassene Karte bleibt so lange
    // darunter sichtbar und weicht zurück (data-leaving). Eine verzögerte
    // visibility-Transition ginge nicht: globals.css überschreibt jede
    // `transition` mit !important. Beim Laden steht die erste Karte ruhig da.
    const reducedMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$usePrefersReducedMotion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePrefersReducedMotion"])();
    const [verlassen, setVerlassen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [richtung, setRichtung] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('next');
    const goTo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CardSlider.useCallback[goTo]": (index)=>{
            const ziel = (index % count + count) % count;
            if (ziel === active) return;
            setRichtung(index > active ? 'next' : 'prev');
            setVerlassen(reducedMotion ? null : active);
            setActive(ziel);
        }
    }["CardSlider.useCallback[goTo]"], [
        count,
        active,
        reducedMotion
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CardSlider.useEffect": ()=>{
            if (verlassen === null) return;
            const timer = window.setTimeout({
                "CardSlider.useEffect.timer": ()=>setVerlassen(null)
            }["CardSlider.useEffect.timer"], __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$CardSlider$2f$CardSlider$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CARD_REVEAL_MS"]);
            return ({
                "CardSlider.useEffect": ()=>window.clearTimeout(timer)
            })["CardSlider.useEffect"];
        }
    }["CardSlider.useEffect"], [
        verlassen,
        active
    ]);
    const prev = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CardSlider.useCallback[prev]": ()=>goTo(active - 1)
    }["CardSlider.useCallback[prev]"], [
        goTo,
        active
    ]);
    const next = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CardSlider.useCallback[next]": ()=>goTo(active + 1)
    }["CardSlider.useCallback[next]"], [
        goTo,
        active
    ]);
    if (count === 0) return null;
    const onKeyDown = (event)=>{
        if (count < 2) return;
        const ziel = event.target;
        if (ziel.closest('input, textarea, select, [contenteditable="true"]')) return;
        if (event.key === 'ArrowLeft') {
            event.preventDefault();
            prev();
        } else if (event.key === 'ArrowRight') {
            event.preventDefault();
            next();
        }
    };
    const onPointerDown = (event)=>{
        if (event.pointerType === 'mouse') return;
        wisch.current = {
            x: event.clientX,
            y: event.clientY,
            id: event.pointerId
        };
    };
    const onPointerUp = (event)=>{
        const start = wisch.current;
        wisch.current = null;
        if (!start || start.id !== event.pointerId || count < 2) return;
        const dx = event.clientX - start.x;
        const dy = event.clientY - start.y;
        if (Math.abs(dx) < WISCHEN || Math.abs(dx) < Math.abs(dy)) return;
        if (dx < 0) next();
        else prev();
    };
    const slideLabel = (index)=>tr('cms.slider.slideOf', {
            defaultValue: '{{index}} von {{count}}',
            index: index + 1,
            count
        });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$CardSlider$2f$CardSlider$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        className: className,
        "data-testid": dataTestId,
        "data-count": count,
        "data-active-index": active,
        role: "region",
        "aria-roledescription": tr('cms.slider.roledescription', {
            defaultValue: 'Karussell'
        }),
        "aria-label": headline || tr('cms.slider.label', {
            defaultValue: 'Karten'
        }),
        onKeyDown: onKeyDown,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$SiteSectionHeader$2f$SiteSectionHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiteSectionHeader"], {
                headline: headline,
                description: description,
                align: "center",
                dataTestId: `${dataTestId}-header`
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Molecule/CardSlider/CardSlider.tsx",
                lineNumber: 181,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$CardSlider$2f$CardSlider$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stage"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$CardSlider$2f$CardSlider$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Band"], {
                        "data-testid": `${dataTestId}-band`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$CardSlider$2f$CardSlider$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slides"], {
                            id: slidesId,
                            "aria-live": "polite",
                            onPointerDown: onPointerDown,
                            onPointerUp: onPointerUp,
                            onPointerCancel: ()=>{
                                wisch.current = null;
                            },
                            children: items.map((item, index)=>{
                                const aktiv = index === active;
                                const id = `${dataTestId}-slide-${index}`;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$CardSlider$2f$CardSlider$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slide"], {
                                    "data-testid": id,
                                    "data-index": index,
                                    "data-active": aktiv,
                                    "data-leaving": index === verlassen ? 'true' : undefined,
                                    "aria-hidden": !aktiv,
                                    role: "group",
                                    "aria-roledescription": tr('cms.slider.slide', {
                                        defaultValue: 'Karte'
                                    }),
                                    "aria-label": slideLabel(index),
                                    children: [
                                        item.image && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$CardSlider$2f$CardSlider$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Figure"], {
                                            "data-testid": `${id}-image`,
                                            "data-tiling": aktiv && verlassen !== null ? 'true' : 'false',
                                            $tiling: aktiv && verlassen !== null,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__["default"], {
                                                    src: item.image,
                                                    alt: item.title,
                                                    fill: true,
                                                    draggable: false,
                                                    sizes: "(max-width: 640px) 100vw, 40vw"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/app/components/Molecule/CardSlider/CardSlider.tsx",
                                                    lineNumber: 220,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                aktiv && verlassen !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexTileReveal$2f$HexTileReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexTileReveal"], {
                                                    image: item.image,
                                                    direction: richtung,
                                                    duration: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$CardSlider$2f$CardSlider$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CARD_REVEAL_MS"],
                                                    columns: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$CardSlider$2f$CardSlider$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CARD_REVEAL_COLUMNS"],
                                                    dataTestId: `${id}-tiles`
                                                }, active, false, {
                                                    fileName: "[project]/apps/web/src/app/components/Molecule/CardSlider/CardSlider.tsx",
                                                    lineNumber: 228,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/app/components/Molecule/CardSlider/CardSlider.tsx",
                                            lineNumber: 214,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$CardSlider$2f$CardSlider$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Body"], {
                                            $fullWidth: !item.image,
                                            children: [
                                                item.icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$IconChip$2f$IconChip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconChip"], {
                                                    name: item.icon.name,
                                                    tone: item.icon.tone,
                                                    shape: "hex",
                                                    dataTestId: `${id}-icon`
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/app/components/Molecule/CardSlider/CardSlider.tsx",
                                                    lineNumber: 241,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$CardSlider$2f$CardSlider$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
                                                    "data-testid": `${id}-title`,
                                                    children: item.title
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/app/components/Molecule/CardSlider/CardSlider.tsx",
                                                    lineNumber: 248,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                item.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$CardSlider$2f$CardSlider$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                                    "data-testid": `${id}-description`,
                                                    children: absaetze(item.description).map((absatz, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            children: absatz
                                                        }, i, false, {
                                                            fileName: "[project]/apps/web/src/app/components/Molecule/CardSlider/CardSlider.tsx",
                                                            lineNumber: 252,
                                                            columnNumber: 27
                                                        }, ("TURBOPACK compile-time value", void 0)))
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/app/components/Molecule/CardSlider/CardSlider.tsx",
                                                    lineNumber: 250,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                item.cta && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$CardSlider$2f$CardSlider$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CtaWrapper"], {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$LinkButton$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: item.cta.href,
                                                        modifier: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Button$2f$Button$2e$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ButtonModifier"].SECONDARY,
                                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconArrowRight$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                            fileName: "[project]/apps/web/src/app/components/Molecule/CardSlider/CardSlider.tsx",
                                                            lineNumber: 261,
                                                            columnNumber: 33
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        iconAlign: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Button$2f$Button$2e$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconAligns"].RIGHT,
                                                        dataTestId: `${id}-cta`,
                                                        children: item.cta.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/app/components/Molecule/CardSlider/CardSlider.tsx",
                                                        lineNumber: 258,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/app/components/Molecule/CardSlider/CardSlider.tsx",
                                                    lineNumber: 257,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/app/components/Molecule/CardSlider/CardSlider.tsx",
                                            lineNumber: 239,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, index, true, {
                                    fileName: "[project]/apps/web/src/app/components/Molecule/CardSlider/CardSlider.tsx",
                                    lineNumber: 202,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0));
                            })
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Molecule/CardSlider/CardSlider.tsx",
                            lineNumber: 189,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Molecule/CardSlider/CardSlider.tsx",
                        lineNumber: 188,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    count > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$CardSlider$2f$CardSlider$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Controls"], {
                        $media: mitBild,
                        "data-testid": `${dataTestId}-controls`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$CardSlider$2f$CardSlider$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Arrows"], {
                                $media: mitBild,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$CardSlider$2f$CardSlider$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowButton"], {
                                        type: "button",
                                        onClick: prev,
                                        "aria-controls": slidesId,
                                        "aria-label": tr('cms.slider.previous', {
                                            defaultValue: 'Vorherige Karte'
                                        }),
                                        title: items[(active - 1 + count) % count]?.title,
                                        "data-testid": `${dataTestId}-prev`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ArrowLeft, {}, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/components/Molecule/CardSlider/CardSlider.tsx",
                                            lineNumber: 286,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/components/Molecule/CardSlider/CardSlider.tsx",
                                        lineNumber: 278,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$CardSlider$2f$CardSlider$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowButton"], {
                                        type: "button",
                                        onClick: next,
                                        "aria-controls": slidesId,
                                        "aria-label": tr('cms.slider.next', {
                                            defaultValue: 'Nächste Karte'
                                        }),
                                        title: items[(active + 1) % count]?.title,
                                        "data-testid": `${dataTestId}-next`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ArrowRight, {}, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/components/Molecule/CardSlider/CardSlider.tsx",
                                            lineNumber: 296,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/components/Molecule/CardSlider/CardSlider.tsx",
                                        lineNumber: 288,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/app/components/Molecule/CardSlider/CardSlider.tsx",
                                lineNumber: 277,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$CardSlider$2f$CardSlider$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DotRow"], {
                                $media: mitBild,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexPagination$2f$HexPagination$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexPagination"], {
                                    count: count,
                                    activeIndex: active,
                                    cells: [],
                                    inline: true,
                                    tone: "light",
                                    onSelect: goTo,
                                    getLabel: (index)=>items[index]?.title ?? String(index + 1),
                                    dataTestId: `${dataTestId}-pagination`
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/components/Molecule/CardSlider/CardSlider.tsx",
                                    lineNumber: 301,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Molecule/CardSlider/CardSlider.tsx",
                                lineNumber: 299,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/app/components/Molecule/CardSlider/CardSlider.tsx",
                        lineNumber: 276,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/components/Molecule/CardSlider/CardSlider.tsx",
                lineNumber: 187,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Molecule/CardSlider/CardSlider.tsx",
        lineNumber: 171,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(CardSlider, "cbAsUfst3sXGcl0CmZx9Vccr6RI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useClientTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$usePrefersReducedMotion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePrefersReducedMotion"]
    ];
});
_c2 = CardSlider;
;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "ArrowLeft");
__turbopack_context__.k.register(_c1, "ArrowRight");
__turbopack_context__.k.register(_c2, "CardSlider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/CardSlider/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$CardSlider$2f$CardSlider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/CardSlider/CardSlider.tsx [app-client] (ecmascript)");
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$CardSlider$2f$CardSlider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardSlider"];
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/HexPagination/HexPagination.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HEX_PAGINATION_GAP_PX",
    ()=>HEX_PAGINATION_GAP_PX,
    "HEX_PAGINATION_TILE_PX",
    ()=>HEX_PAGINATION_TILE_PX,
    "Progress",
    ()=>Progress,
    "Root",
    ()=>Root,
    "Tile",
    ()=>Tile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/colors.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$hex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/hex.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/lib/hex/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$grid$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/hex/grid.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
const HEX_PAGINATION_TILE_PX = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$grid$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_TILE_SIZE_PX"];
const HEX_PAGINATION_GAP_PX = 4;
/* Autoplay-Fortschritt füllt die aktive Kachel von unten nach oben. */ const fillUp = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframes"]`
  from { transform: scaleY(0); }
  to { transform: scaleY(1); }
`;
const Root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "HexPagination.styles__Root",
    componentId: "sc-99a21391-0"
})`
  position: absolute;
  inset: 0;
  pointer-events: none;
  /* #1473: bis zur Messung verborgen statt an falscher Stelle (Layout-Shift) */
  visibility: ${({ $placed })=>$placed ? 'visible' : 'hidden'};

  /* Ohne Messung (SSR, Tests): Reihe unten rechts */
  ${({ $fallback })=>$fallback && `
    inset: auto 2rem 2rem auto;
    display: flex;
    gap: ${HEX_PAGINATION_GAP_PX}px;
  `}

  /* #1214: im Fluss, z. B. unter einer Karte */
  ${({ $inline, $gap = HEX_PAGINATION_GAP_PX })=>$inline && `
    position: static;
    inset: auto;
    display: flex;
    gap: ${$gap}px;
  `}
`;
const Tile = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "HexPagination.styles__Tile",
    componentId: "sc-99a21391-1"
})`
  position: ${({ $fallback })=>$fallback ? 'relative' : 'absolute'};
  left: var(--x);
  top: var(--y);
  width: var(--size, ${HEX_PAGINATION_TILE_PX}px);
  height: var(--size, ${HEX_PAGINATION_TILE_PX}px);
  padding: 0;
  margin: 0;
  border: 0;
  ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$hex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["roundedHexagonMask"]}
  /* Trefferfläche: Masken schneiden Zeigerereignisse nicht zu, ohne clip-path wäre der ganze Kasten klickbar. Das spitze Polygon bleibt die Trefferform; die runde Maske liegt ganz darin. */
  clip-path: ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$hex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HEXAGON_CLIP_PATH"]};
  background: ${({ $active })=>$active ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].WHITE : 'rgba(0, 65, 110, 0.45)'};
  color: ${({ $active })=>$active ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].PRIMARY : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].WHITE};
  font-family: ${({ theme })=>theme.font.secondaryFamily};
  font-size: calc(var(--size, ${HEX_PAGINATION_TILE_PX}px) * 0.3);
  font-variant-numeric: tabular-nums;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  pointer-events: auto;
  overflow: hidden;

  &:hover,
  &:focus-visible {
    background: ${({ $active })=>$active ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].WHITE : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].PRIMARY};
    outline: none;
  }

  /* #1214: heller Grund — aktiv sattes Blau mit weißer Nummer, sonst hellblau */
  ${({ $tone, $active, theme })=>$tone === 'light' && `
    background: ${$active ? theme.palette.site.blue : theme.palette.site.tint};
    color: ${$active ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].WHITE : theme.palette.site.blue};

    &:hover,
    &:focus-visible {
      background: ${theme.palette.site.blue};
      color: ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].WHITE};
    }
  `}

  /* #1747: auf dem blauen Overlay hinter dem Hero-Text — übrige Kacheln durchscheinend weiß, Zeigen eine deutliche Stufe heller; aktiv weiß mit blauer Nummer */
  /* Feste Farben statt Theme-Weiß: das Overlay bleibt auch im Dark Mode Marineblau (PlastshipColors.PRIMARY), default.white würde dort dunkelgrau. */
  ${({ $tone, $active })=>$tone === 'overlay' && `
    background: ${$active ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].WHITE : `color-mix(in srgb, ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].WHITE} 22%, transparent)`};
    color: ${$active ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].PRIMARY : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].WHITE};

    &:hover,
    &:focus-visible {
      background: ${$active ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].WHITE : `color-mix(in srgb, ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].WHITE} 48%, transparent)`};
    }
  `}

  span {
    position: relative;
    z-index: 1;
  }
`;
const Progress = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "HexPagination.styles__Progress",
    componentId: "sc-99a21391-2"
})`
  position: absolute;
  inset: 0;
  z-index: 0;
  /* Blau auf der weißen aktiven Kachel — invertiert wie Grund und Nummer */
  background: rgba(0, 65, 110, 0.25);
  transform-origin: 50% 100%;
  transform: scaleY(0);
  animation: ${fillUp} ${({ $duration })=>$duration}ms linear both;
  animation-play-state: ${({ $paused })=>$paused ? 'paused' : 'running'};

  @media (prefers-reduced-motion: reduce) {
    animation-duration: 0ms;
    transform: scaleY(1);
    opacity: 0.6;
  }
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/HexPagination/HexPagination.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HexPagination",
    ()=>HexPagination,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexPagination$2f$HexPagination$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/HexPagination/HexPagination.styles.ts [app-client] (ecmascript)");
'use client';
;
;
const HexPagination = ({ count, activeIndex, cells, onSelect, progressDuration, paused = false, progressKey, controlsIdPrefix, getLabel, tone = 'dark', inline = false, measured, gap = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexPagination$2f$HexPagination$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HEX_PAGINATION_GAP_PX"], dataTestId = 'hex-pagination', className })=>{
    if (count < 1) return null;
    const fallback = inline || cells.length < count;
    // #1473: ohne Messung (SSR, erster Frame) verborgen — die Ersatzreihe unten
    // rechts sprang sonst beim Messen an ihre Rasterstelle (CLS 0,77 auf der Startseite).
    // Nach der Messung immer sichtbar, auch wenn die Bühne keine Reihe hergibt.
    const placed = inline || (measured ?? cells.length > 0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexPagination$2f$HexPagination$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        className: className,
        role: "tablist",
        "data-testid": dataTestId,
        "data-fallback": fallback ? 'true' : 'false',
        "data-placed": placed ? 'true' : 'false',
        "data-tone": tone,
        $fallback: fallback,
        $inline: inline,
        $placed: placed,
        $gap: gap,
        children: Array.from({
            length: count
        }, (_, index)=>{
            const active = index === activeIndex;
            const cell = fallback ? null : cells[index];
            // #1949: sichtbare Nummer vorn im Namen (WCAG 2.5.3 Label in Name)
            const nummer = String(index + 1).padStart(2, '0');
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexPagination$2f$HexPagination$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tile"], {
                type: "button",
                role: "tab",
                "aria-selected": active,
                "aria-controls": controlsIdPrefix ? `${controlsIdPrefix}-${index}` : undefined,
                "aria-label": `${nummer} – ${getLabel ? getLabel(index) : String(index + 1)}`,
                tabIndex: active ? 0 : -1,
                $active: active,
                $fallback: fallback,
                $tone: tone,
                "data-testid": `${dataTestId}-item-${index}`,
                "data-active": active ? 'true' : 'false',
                onClick: ()=>onSelect?.(index),
                style: cell ? {
                    '--x': `${cell.x}px`,
                    '--y': `${cell.y}px`,
                    '--size': `${cell.size}px`
                } : undefined,
                children: [
                    active && progressDuration !== undefined && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexPagination$2f$HexPagination$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Progress"], {
                        $duration: progressDuration,
                        $paused: paused,
                        "data-testid": `${dataTestId}-progress`,
                        "data-paused": paused ? 'true' : 'false'
                    }, progressKey ?? activeIndex, false, {
                        fileName: "[project]/apps/web/src/app/components/Molecule/HexPagination/HexPagination.tsx",
                        lineNumber: 117,
                        columnNumber: 15
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        "aria-hidden": "true",
                        children: nummer
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Molecule/HexPagination/HexPagination.tsx",
                        lineNumber: 125,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, index, true, {
                fileName: "[project]/apps/web/src/app/components/Molecule/HexPagination/HexPagination.tsx",
                lineNumber: 92,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0));
        })
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Molecule/HexPagination/HexPagination.tsx",
        lineNumber: 74,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = HexPagination;
const __TURBOPACK__default__export__ = HexPagination;
var _c;
__turbopack_context__.k.register(_c, "HexPagination");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/HexPagination/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexPagination$2f$HexPagination$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/HexPagination/HexPagination.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexPagination$2f$HexPagination$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/HexPagination/HexPagination.styles.ts [app-client] (ecmascript)");
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/HexTileReveal/HexTileReveal.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Root",
    ()=>Root,
    "Tile",
    ()=>Tile,
    "TileFace",
    ()=>TileFace
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$hex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/hex.ts [app-client] (ecmascript) <locals>");
'use client';
;
;
const pop = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframes"]`
  from {
    opacity: 0;
    transform: scale(0) rotate(-14deg);
  }
  60% {
    opacity: 1;
  }
  to {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
`;
const Root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "HexTileReveal.styles__Root",
    componentId: "sc-7b3c4462-0"
})`
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  /* Layout/Style/Paint bleiben in dieser Ebene — 1000+ Kacheln invalidieren nicht die Seite */
  contain: layout style paint;
`;
const Tile = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "HexTileReveal.styles__Tile",
    componentId: "sc-7b3c4462-1"
})`
  position: absolute;
  left: var(--x);
  top: var(--y);
  width: var(--size);
  height: var(--size);
  transform: scale(0);
  opacity: 0;
  /* will-change bleibt: ohne Vorab-Ebene hebt Chromium jede Kachel erst beim
     Animationsstart auf den Compositor und malt neu — gemessen 41 statt 56 fps */
  will-change: transform, opacity;
  animation: ${pop} var(--tile-duration) cubic-bezier(0.2, 0.8, 0.2, 1) both;
  animation-delay: var(--delay);
`;
const TileFace = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "HexTileReveal.styles__TileFace",
    componentId: "sc-7b3c4462-2"
})`
  position: absolute;
  inset: 0;
  ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$hex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["roundedHexagonMask"]}
  background-image: var(--image);
  background-repeat: no-repeat;
  background-size: var(--bg-size);
  background-position: var(--bg-pos);
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/HexTileReveal/HexTileReveal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HexTileReveal",
    ()=>HexTileReveal,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexTileReveal$2f$hexTiles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/HexTileReveal/hexTiles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexTileReveal$2f$HexTileReveal$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/HexTileReveal/HexTileReveal.styles.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
/** Natürliche Bildmaße; der Browser hat das Bild in der Regel schon im Cache. */ const useImageSize = (src)=>{
    _s();
    const [size, setSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useImageSize.useEffect": ()=>{
            setSize(null);
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            const img = new window.Image();
            let cancelled = false;
            img.onload = ({
                "useImageSize.useEffect": ()=>{
                    if (!cancelled && img.naturalWidth > 0) {
                        setSize({
                            width: img.naturalWidth,
                            height: img.naturalHeight
                        });
                    }
                }
            })["useImageSize.useEffect"];
            img.src = src;
            if (img.complete && img.naturalWidth > 0) {
                setSize({
                    width: img.naturalWidth,
                    height: img.naturalHeight
                });
            }
            return ({
                "useImageSize.useEffect": ()=>{
                    cancelled = true;
                }
            })["useImageSize.useEffect"];
        }
    }["useImageSize.useEffect"], [
        src
    ]);
    return size;
};
_s(useImageSize, "VfyA+VXrXg3t9CuFIcn4WoTl07c=");
const HexTileReveal = ({ image, direction, duration, delay = 0, columns = 12, focusX = 50, focusY = 50, dataTestId = 'hex-tile-reveal', className })=>{
    _s1();
    const rootRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [stage, setStage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const imageSize = useImageSize(image);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HexTileReveal.useEffect": ()=>{
            const el = rootRef.current;
            if (!el) return;
            const measure = {
                "HexTileReveal.useEffect.measure": ()=>{
                    const rect = el.getBoundingClientRect();
                    if (rect.width > 0 && rect.height > 0) setStage({
                        width: rect.width,
                        height: rect.height
                    });
                }
            }["HexTileReveal.useEffect.measure"];
            measure();
            if (typeof ResizeObserver === 'undefined') return;
            const observer = new ResizeObserver(measure);
            observer.observe(el);
            return ({
                "HexTileReveal.useEffect": ()=>observer.disconnect()
            })["HexTileReveal.useEffect"];
        }
    }["HexTileReveal.useEffect"], []);
    const grid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HexTileReveal.useMemo[grid]": ()=>{
            if (!stage || !imageSize) return null;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexTileReveal$2f$hexTiles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildHexGrid"])({
                width: stage.width,
                height: stage.height,
                imageWidth: imageSize.width,
                imageHeight: imageSize.height,
                columns,
                direction,
                duration,
                focus: {
                    x: focusX,
                    y: focusY
                }
            });
        }
    }["HexTileReveal.useMemo[grid]"], [
        stage,
        imageSize,
        columns,
        direction,
        duration,
        focusX,
        focusY
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexTileReveal$2f$HexTileReveal$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        ref: rootRef,
        className: className,
        "data-testid": dataTestId,
        "data-ready": grid ? 'true' : 'false',
        "data-tiles": grid?.tiles.length ?? 0,
        "aria-hidden": "true",
        children: grid?.tiles.map((tile)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexTileReveal$2f$HexTileReveal$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tile"], {
                style: {
                    '--x': `${tile.x}px`,
                    '--y': `${tile.y}px`,
                    '--size': `${tile.size}px`,
                    '--delay': `${delay + tile.delay}ms`,
                    '--tile-duration': `${grid.tileDuration}ms`,
                    '--image': `url("${image}")`,
                    '--bg-size': `${grid.bgWidth}px ${grid.bgHeight}px`,
                    '--bg-pos': `${tile.bgX}px ${tile.bgY}px`
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexTileReveal$2f$HexTileReveal$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TileFace"], {
                    "data-role": tile.role,
                    "data-side": tile.side
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Molecule/HexTileReveal/HexTileReveal.tsx",
                    lineNumber: 128,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, tile.key, false, {
                fileName: "[project]/apps/web/src/app/components/Molecule/HexTileReveal/HexTileReveal.tsx",
                lineNumber: 113,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)))
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Molecule/HexTileReveal/HexTileReveal.tsx",
        lineNumber: 104,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(HexTileReveal, "T2HdivguqxwWiPjQCxgGETLlyt4=", false, function() {
    return [
        useImageSize
    ];
});
_c = HexTileReveal;
const __TURBOPACK__default__export__ = HexTileReveal;
var _c;
__turbopack_context__.k.register(_c, "HexTileReveal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/HexTileReveal/hexTiles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TILE_DURATION_RATIO",
    ()=>TILE_DURATION_RATIO,
    "buildHexGrid",
    ()=>buildHexGrid,
    "coverBox",
    ()=>coverBox,
    "paginationRow",
    ()=>paginationRow
]);
/**
 * Geometrie für die Wabe des Slide-Übergangs: gleiche Sechseckform wie der
 * IconButton (Spitze oben, quadratischer Rahmen), versetzt gestapelt wie ein
 * Bienenwabenmuster. Jede Kachel zeigt den Ausschnitt des neuen Bildes an
 * ihrer Position (object-fit: cover nachgerechnet) und blendet mit eigener
 * Verzögerung ein — Kachel um Kachel von einer Seite zur anderen, bis das
 * ganze Bild steht. Das Raster selbst liegt in `@/lib/hex/grid` (#1188).
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$grid$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/hex/grid.ts [app-client] (ecmascript)");
;
const TILE_DURATION_RATIO = 0.42;
const CENTER_FOCUS = {
    x: 50,
    y: 50
};
const coverBox = (width, height, imageWidth, imageHeight, focus = CENTER_FOCUS)=>{
    const scale = Math.max(width / imageWidth, height / imageHeight);
    const bgWidth = imageWidth * scale;
    const bgHeight = imageHeight * scale;
    return {
        bgWidth,
        bgHeight,
        offsetX: (width - bgWidth) * focus.x / 100,
        offsetY: (height - bgHeight) * focus.y / 100
    };
};
/**
 * Aufteilungen der Pagination-Reihe, beste zuerst: je eine leere Kachel
 * zwischen Pfeil und Slide-Kacheln (`gap`) und eine zum rechten Rand
 * (`border`). Reicht die Reihe nicht, entfällt zuerst der Randabstand, dann
 * der Abstand der Pfeile.
 */ const ROW_LAYOUTS = [
    {
        gap: 1,
        border: 1
    },
    {
        gap: 1,
        border: 0
    },
    {
        gap: 0,
        border: 0
    }
];
const paginationRow = (width, height, columns, count, bottom = height, arrows = true)=>{
    if (count < 1) return {
        prev: null,
        pages: [],
        next: null
    };
    const inside = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$grid$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexGridCells"])(width, height, columns).filter((c)=>c.x >= 0 && c.x + c.size <= width && c.y >= 0 && c.y + c.size <= Math.min(height, bottom));
    if (inside.length === 0) return {
        prev: null,
        pages: [],
        next: null
    };
    const rowYs = [
        ...new Set(inside.map((c)=>Math.round(c.cy * 10) / 10))
    ].sort((a, b)=>b - a);
    const rowY = rowYs[1] ?? rowYs[0];
    const row = inside.filter((c)=>Math.abs(c.cy - rowY) < 0.5).sort((a, b)=>a.x - b.x);
    for (const { gap, border } of arrows ? ROW_LAYOUTS : []){
        const need = count + 2 + gap * 2 + border;
        if (row.length < need) continue;
        const cells = row.slice(row.length - need, row.length - border);
        return {
            prev: cells[0],
            pages: cells.slice(1 + gap, 1 + gap + count),
            next: cells[cells.length - 1]
        };
    }
    const withoutBorder = row.length > count ? row.slice(0, -1) : row;
    const pages = withoutBorder.slice(-count);
    if (!arrows) return {
        prev: null,
        pages,
        next: null
    };
    const below = rowYs.length > 1 ? inside.filter((c)=>Math.abs(c.cy - rowYs[0]) < 0.5) : [];
    if (pages.length === 0 || below.length < 2) return {
        prev: null,
        pages,
        next: null
    };
    // versetzte unterste Reihe: die Nachbarn unten links der ersten und unten rechts der letzten Slide-Zelle
    const half = pages[0].size / 2;
    const nearest = (x)=>below.reduce((best, c)=>Math.abs(c.cx - x) < Math.abs(best.cx - x) ? c : best);
    const prev = nearest(pages[0].cx - half);
    const next = nearest(pages[pages.length - 1].cx + half);
    return prev.key === next.key ? {
        prev: null,
        pages,
        next: null
    } : {
        prev,
        pages,
        next
    };
};
const buildHexGrid = ({ width, height, imageWidth, imageHeight, columns, direction, duration, bleed = 1, focus })=>{
    const tileDuration = Math.round(duration * TILE_DURATION_RATIO);
    if (width <= 0 || height <= 0 || imageWidth <= 0 || imageHeight <= 0 || columns < 1) {
        return {
            tiles: [],
            tileDuration,
            bgWidth: 0,
            bgHeight: 0
        };
    }
    const { size, rowStep, originX, originY, shiftOf, baseCenterX, baseCenterY } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$grid$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexGridOrigin"])(width, height, columns);
    const rows = Math.ceil(height / rowStep) + 1;
    const { bgWidth, bgHeight, offsetX, offsetY } = coverBox(width, height, imageWidth, imageHeight, focus);
    // Die Verzögerung wächst mit dem Weg über die Bühne (leicht diagonal),
    // Richtung siehe `along` unten; ein kleiner deterministischer Versatz je
    // Kachel nimmt der Front die Linealkante. Alle Kacheln sind spätestens bei
    // `duration` fertig.
    const spread = Math.max(0, duration - tileDuration);
    const diagonalWeight = 0.35;
    const maxPath = width + height * diagonalWeight;
    const neighbourRadius = size * 1.05;
    const tiles = [];
    for(let row = -1; row <= rows; row += 1){
        for(let col = -1; col <= columns + 1; col += 1){
            const cx = baseCenterX(row, col) + originX;
            const cy = baseCenterY(row) + originY;
            const x = cx - size / 2;
            const y = cy - size / 2;
            if (x >= width || y >= height || x + size <= 0 || y + size <= 0) continue;
            const along = direction === 'next' ? width - cx : cx;
            const path = (along + cy * diagonalWeight) / maxPath;
            const jitter = (Math.abs(row) * 7 + Math.abs(col) * 13) % 11 / 11 * 0.08;
            const delay = Math.round(Math.min(1, Math.max(0, path * 0.92 + jitter)) * spread);
            const dx = cx - width / 2;
            const dy = cy - height / 2;
            const dist = Math.hypot(dx, dy);
            let role = 'plain';
            let side;
            if (dist < 0.5) role = 'center';
            else if (dist < neighbourRadius) {
                role = dx + dy < 0 ? 'ring-blue' : 'ring-green';
                if (Math.abs(dy) < size * 0.1) side = dx < 0 ? 'w' : 'e';
                else if (dy < 0) side = dx < 0 ? 'nw' : 'ne';
                else side = dx < 0 ? 'sw' : 'se';
            }
            const bx = x - bleed;
            const by = y - bleed;
            tiles.push({
                key: `${row}-${col}`,
                role,
                side,
                x: bx,
                y: by,
                size: size + bleed * 2,
                delay,
                tintDuration: Math.max(0, duration - delay),
                bgX: offsetX - bx,
                bgY: offsetY - by
            });
        }
    }
    return {
        tiles,
        tileDuration,
        bgWidth,
        bgHeight
    };
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/HexTileReveal/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexTileReveal$2f$HexTileReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/HexTileReveal/HexTileReveal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexTileReveal$2f$hexTiles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/HexTileReveal/hexTiles.ts [app-client] (ecmascript)");
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/CardSliderBlock.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CardSliderBlock",
    ()=>CardSliderBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$CardSlider$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/CardSlider/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$CardSlider$2f$CardSlider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/CardSlider/CardSlider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$localize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/cmsBlocks/localize.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$CmsBlockRenderer$2f$blocks$2f$cmsCta$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/cmsCta.ts [app-client] (ecmascript)");
;
;
;
;
const CardSliderBlock = ({ block, locale, dataTestId })=>{
    const { headline, description, cards } = block.props;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$CardSlider$2f$CardSlider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardSlider"], {
        headline: headline ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$localize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cmsText"])(headline, locale) : undefined,
        description: description ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$localize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cmsText"])(description, locale) : undefined,
        items: cards.map((card)=>({
                title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$localize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cmsText"])(card.title, locale),
                description: card.description ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$localize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cmsText"])(card.description, locale) : undefined,
                image: card.image,
                icon: card.icon,
                cta: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$CmsBlockRenderer$2f$blocks$2f$cmsCta$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cmsCta"])(card.cta, locale)
            })),
        dataTestId: `${dataTestId}-slider`
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/CardSliderBlock.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = CardSliderBlock;
var _c;
__turbopack_context__.k.register(_c, "CardSliderBlock");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/cmsCta.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cmsCta",
    ()=>cmsCta
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$links$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/cmsBlocks/links.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$localize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/cmsBlocks/localize.ts [app-client] (ecmascript)");
;
;
function cmsCta(cta, locale) {
    const href = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$links$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cmsHref"])(cta?.href);
    return cta && href ? {
        label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$localize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cmsText"])(cta.label, locale),
        href
    } : undefined;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]})(),
"[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/CardSliderBlock.tsx [app-client] (ecmascript, next/dynamic entry)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/CardSliderBlock.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=apps_web_src_app_components_1_h767uanmgr_._.js.map