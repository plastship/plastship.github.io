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
"[project]/apps/web/src/app/components/Molecule/TestimonialSlider/TestimonialSlider.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Caption",
    ()=>Caption,
    "Card",
    ()=>Card,
    "Carousel",
    ()=>Carousel,
    "Dot",
    ()=>Dot,
    "DotRow",
    ()=>DotRow,
    "Figure",
    ()=>Figure,
    "Photo",
    ()=>Photo,
    "Quote",
    ()=>Quote,
    "QuoteMark",
    ()=>QuoteMark,
    "Root",
    ()=>Root,
    "Slide",
    ()=>Slide,
    "Track",
    ()=>Track
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$hex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/hex.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/site.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$CardSlider$2f$CardSlider$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/CardSlider/CardSlider.styles.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
/*
 * Zitate wie auf plastship.com (#1199, Quelle: /entsorger-circle-recycling-netzwerk,
 * Abschnitt Gemeinsam erfolgreich): Kopf zentriert, darunter eine waagerechte
 * Reihe mit Scroll-Snap (flex snap-x snap-mandatory overflow-x-auto no-scrollbar
 * pb-8 scroll-smooth), je Zitat eine Karte w-[calc(98vw-4rem)] md:w-[48vw]
 * 2xl:w-[31vw] snap-center — am Desktop stehen knapp zwei Karten im Bild, die
 * Reihe läuft bis an den Rand der Seite. Darunter die Punkte.
 */ const bp = {
    sm: '640px',
    md: '768px',
    xxl: '1536px'
};
const Root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].section.withConfig({
    displayName: "TestimonialSlider.styles__Root",
    componentId: "sc-198e7264-0"
})`
  display: flex;
  flex-direction: column;
  gap: 32px;
  background-color: transparent;
`;
const Carousel = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "TestimonialSlider.styles__Carousel",
    componentId: "sc-198e7264-1"
})`
  display: flex;
  flex-direction: column;
`;
const Track = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "TestimonialSlider.styles__Track",
    componentId: "sc-198e7264-2"
})`
  position: relative;
  display: flex;
  justify-content: ${({ $single })=>$single ? 'center' : 'flex-start'};
  gap: 16px;
  margin-inline: calc(-1 * var(--bleed-start, 0px)) calc(-1 * var(--bleed-end, 0px));
  padding: 0 var(--bleed-end, 0px) 32px var(--bleed-start, 0px);
  overflow-x: auto;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;
  scroll-padding-inline: var(--bleed-start, 0px) var(--bleed-end, 0px);
  scroll-behavior: smooth;
  scrollbar-width: none;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    display: none;
  }

  &:focus-visible {
    outline: 2px solid ${({ theme })=>theme.palette.site.blue};
    outline-offset: -2px;
  }

  @media (prefers-reduced-motion: reduce) {
    scroll-behavior: auto;
  }
`;
const Slide = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "TestimonialSlider.styles__Slide",
    componentId: "sc-198e7264-3"
})`
  flex: 0 0 auto;
  box-sizing: border-box;
  width: calc(98vw - 4rem);
  scroll-snap-align: center;

  @media (min-width: ${bp.md}) {
    width: 48vw;
  }

  @media (min-width: ${bp.xxl}) {
    width: 31vw;
  }
`;
const Card = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "TestimonialSlider.styles__Card",
    componentId: "sc-198e7264-4"
})`
  ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteCard"])(false)}
  /* #1959: Randfarbe vom Band (C2 setzt --site-card-border), sonst blue-100 */
  border-color: var(--site-card-border, ${({ theme })=>theme.palette.site.border});
  padding-bottom: 24px;

  @media (min-width: ${bp.sm}) {
    padding-bottom: 48px;
  }
`;
const Figure = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].figure.withConfig({
    displayName: "TestimonialSlider.styles__Figure",
    componentId: "sc-198e7264-5"
})`
  position: relative;
  margin: 0;
  padding: 16px 8px;
`;
const QuoteMark = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "TestimonialSlider.styles__QuoteMark",
    componentId: "sc-198e7264-6"
})`
  position: absolute;
  top: 0;
  right: 0;
  width: 120px;
  height: 120px;
  ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$hex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["roundedHexagonMask"]}
  background: ${({ theme })=>`color-mix(in srgb, ${theme.palette.site.tint} 70%, ${theme.palette.site.card})`};
  pointer-events: none;

  &::before {
    content: '\\201C';
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 40px;
    font-family: ${({ theme })=>theme.font.primaryFamily};
    font-size: 96px;
    font-weight: 700;
    line-height: 1;
    color: ${({ theme })=>theme.palette.site.border};
  }
`;
const Photo = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "TestimonialSlider.styles__Photo",
    componentId: "sc-198e7264-7"
})`
  position: relative;
  width: 80px;
  height: 80px;
  overflow: hidden;
  /* #1781: Personenbild als Wabe wie überall */
  ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$hex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["portraitHexagonMask"]}
  background: ${({ theme })=>theme.palette.site.tint};

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const Quote = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].blockquote.withConfig({
    displayName: "TestimonialSlider.styles__Quote",
    componentId: "sc-198e7264-8"
})`
  position: relative;
  margin: 8px 0 0;
  padding: 0;
  border: 0;
  font-family: ${({ theme })=>theme.font.secondaryFamily};
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  font-style: normal;
  color: ${({ theme })=>theme.palette.site.text};

  p {
    margin: 0;
  }

  @media (min-width: ${bp.sm}) {
    margin-top: 20px;
    font-size: 20px;
  }
`;
const Caption = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].figcaption.withConfig({
    displayName: "TestimonialSlider.styles__Caption",
    componentId: "sc-198e7264-9"
})`
  position: relative;
  margin-top: 8px;
  font-family: ${({ theme })=>theme.font.secondaryFamily};
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  font-style: normal;
  color: ${({ theme })=>theme.palette.site.text};

  @media (min-width: ${bp.sm}) {
    margin-top: 20px;
    font-size: 16px;
    line-height: 24px;
  }
`;
const DotRow = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "TestimonialSlider.styles__DotRow",
    componentId: "sc-198e7264-10"
})`
  display: flex;
  justify-content: center;
`;
const Dot = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "TestimonialSlider.styles__Dot",
    componentId: "sc-198e7264-11"
})`
  ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$CardSlider$2f$CardSlider$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sliderDot"]}
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/TestimonialSlider/TestimonialSlider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TestimonialSlider",
    ()=>TestimonialSlider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/image-component.js [app-client] (ecmascript) <export Image as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$SiteSectionHeader$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/SiteSectionHeader/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$SiteSectionHeader$2f$SiteSectionHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/SiteSectionHeader/SiteSectionHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useSnapCarousel$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/useSnapCarousel.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$TestimonialSlider$2f$TestimonialSlider$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/TestimonialSlider/TestimonialSlider.styles.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
/**
 * Zitate als Karussell wie auf plastship.com (#1199): zentrierter Kopf, darunter
 * eine waagerechte Reihe mit Scroll-Snap bis an den Seitenrand — je Zitat eine
 * Karte mit rundem Foto, Zitat fett und „Person, Funktion" darunter. Wischen,
 * Trackpad und Pfeiltasten (Reihe fokussierbar) übernimmt der Browser; die Punkte
 * folgen der Scrollposition und scrollen per Klick zum Zitat. Ein einzelnes
 * Zitat steht ohne Punkte mittig.
 */ const TestimonialSlider = ({ headline, description, items, className, dataTestId = 'testimonial-slider' })=>{
    _s();
    const { tr } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useClientTranslation"])();
    const count = items.length;
    const { trackRef, activeIndex, goTo, bleed } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useSnapCarousel$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSnapCarousel"])(count, {
        bleed: count > 1
    });
    if (count === 0) return null;
    const label = (index)=>tr('cms.testimonial.slideOf', {
            defaultValue: 'Zitat {{index}} von {{count}}',
            index: index + 1,
            count
        });
    // Gemessene Abstände zum Seitenrand als CSS-Variablen (ändern sich mit jeder
    // Fensterbreite, deshalb nicht als styled-Prop — das erzeugte je Wert eine Klasse)
    const bleedVars = {
        '--bleed-start': `${bleed.start}px`,
        '--bleed-end': `${bleed.end}px`
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$TestimonialSlider$2f$TestimonialSlider$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        className: className,
        "data-testid": dataTestId,
        "data-count": count,
        "data-active-index": activeIndex,
        role: "region",
        "aria-roledescription": tr('cms.slider.roledescription', {
            defaultValue: 'Karussell'
        }),
        "aria-label": headline || tr('cms.testimonial.label', {
            defaultValue: 'Zitate'
        }),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$SiteSectionHeader$2f$SiteSectionHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiteSectionHeader"], {
                headline: headline,
                description: description,
                align: "center",
                dataTestId: `${dataTestId}-header`
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Molecule/TestimonialSlider/TestimonialSlider.tsx",
                lineNumber: 85,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$TestimonialSlider$2f$TestimonialSlider$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Carousel"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$TestimonialSlider$2f$TestimonialSlider$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"], {
                        ref: trackRef,
                        $single: count === 1,
                        style: bleedVars,
                        tabIndex: count > 1 ? 0 : undefined,
                        "data-testid": `${dataTestId}-track`,
                        "data-bleed-start": bleed.start,
                        "data-bleed-end": bleed.end,
                        children: items.map((item, index)=>{
                            const id = `${dataTestId}-slide-${index}`;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$TestimonialSlider$2f$TestimonialSlider$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slide"], {
                                "data-testid": id,
                                "data-index": index,
                                "data-active": index === activeIndex,
                                role: "group",
                                "aria-roledescription": tr('cms.testimonial.slide', {
                                    defaultValue: 'Zitat'
                                }),
                                "aria-label": label(index),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$TestimonialSlider$2f$TestimonialSlider$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$TestimonialSlider$2f$TestimonialSlider$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Figure"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$TestimonialSlider$2f$TestimonialSlider$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QuoteMark"], {
                                                "data-part": "quote-mark",
                                                "aria-hidden": "true"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/components/Molecule/TestimonialSlider/TestimonialSlider.tsx",
                                                lineNumber: 116,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            item.photoUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$TestimonialSlider$2f$TestimonialSlider$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Photo"], {
                                                "data-testid": `${id}-photo`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__["default"], {
                                                    src: item.photoUrl,
                                                    alt: item.author ?? '',
                                                    width: 80,
                                                    height: 80
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/app/components/Molecule/TestimonialSlider/TestimonialSlider.tsx",
                                                    lineNumber: 120,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/components/Molecule/TestimonialSlider/TestimonialSlider.tsx",
                                                lineNumber: 118,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$TestimonialSlider$2f$TestimonialSlider$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quote"], {
                                                "data-testid": `${id}-quote`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: item.quote
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/app/components/Molecule/TestimonialSlider/TestimonialSlider.tsx",
                                                    lineNumber: 124,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/components/Molecule/TestimonialSlider/TestimonialSlider.tsx",
                                                lineNumber: 123,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            (item.author || item.role) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$TestimonialSlider$2f$TestimonialSlider$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Caption"], {
                                                "data-testid": `${id}-caption`,
                                                children: [
                                                    item.author && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        "data-testid": `${id}-author`,
                                                        children: item.author
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/app/components/Molecule/TestimonialSlider/TestimonialSlider.tsx",
                                                        lineNumber: 128,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    item.author && item.role && ', ',
                                                    item.role && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        "data-testid": `${id}-role`,
                                                        children: item.role
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/app/components/Molecule/TestimonialSlider/TestimonialSlider.tsx",
                                                        lineNumber: 130,
                                                        columnNumber: 39
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/src/app/components/Molecule/TestimonialSlider/TestimonialSlider.tsx",
                                                lineNumber: 127,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/app/components/Molecule/TestimonialSlider/TestimonialSlider.tsx",
                                        lineNumber: 114,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/components/Molecule/TestimonialSlider/TestimonialSlider.tsx",
                                    lineNumber: 113,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, index, false, {
                                fileName: "[project]/apps/web/src/app/components/Molecule/TestimonialSlider/TestimonialSlider.tsx",
                                lineNumber: 104,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0));
                        })
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Molecule/TestimonialSlider/TestimonialSlider.tsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    count > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$TestimonialSlider$2f$TestimonialSlider$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DotRow"], {
                        "data-testid": `${dataTestId}-dots`,
                        children: items.map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$TestimonialSlider$2f$TestimonialSlider$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dot"], {
                                type: "button",
                                onClick: ()=>goTo(index),
                                "aria-label": label(index),
                                "aria-current": index === activeIndex ? 'true' : undefined,
                                "data-active": index === activeIndex,
                                "data-testid": `${dataTestId}-dot-${index}`
                            }, index, false, {
                                fileName: "[project]/apps/web/src/app/components/Molecule/TestimonialSlider/TestimonialSlider.tsx",
                                lineNumber: 142,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Molecule/TestimonialSlider/TestimonialSlider.tsx",
                        lineNumber: 140,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/components/Molecule/TestimonialSlider/TestimonialSlider.tsx",
                lineNumber: 91,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Molecule/TestimonialSlider/TestimonialSlider.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(TestimonialSlider, "d+Jh0/gNY0J8FXtzU3CLiqKGZTY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useClientTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useSnapCarousel$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSnapCarousel"]
    ];
});
_c = TestimonialSlider;
;
var _c;
__turbopack_context__.k.register(_c, "TestimonialSlider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/TestimonialSlider/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$TestimonialSlider$2f$TestimonialSlider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/TestimonialSlider/TestimonialSlider.tsx [app-client] (ecmascript)");
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$TestimonialSlider$2f$TestimonialSlider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TestimonialSlider"];
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/TestimonialBlock.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TestimonialBlock",
    ()=>TestimonialBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$TestimonialSlider$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/TestimonialSlider/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$TestimonialSlider$2f$TestimonialSlider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/TestimonialSlider/TestimonialSlider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$links$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/cmsBlocks/links.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$localize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/cmsBlocks/localize.ts [app-client] (ecmascript)");
;
;
;
;
const TestimonialBlock = ({ block, locale, dataTestId })=>{
    const { headline, description, items } = block.props;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$TestimonialSlider$2f$TestimonialSlider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TestimonialSlider"], {
        headline: headline ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$localize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cmsText"])(headline, locale) : undefined,
        description: description ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$localize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cmsText"])(description, locale) : undefined,
        items: items.map((item)=>({
                quote: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$localize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cmsText"])(item.quote, locale),
                author: item.author,
                role: item.role ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$localize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cmsText"])(item.role, locale) : undefined,
                photoUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$links$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cmsHref"])(item.photoUrl)
            })),
        dataTestId: `${dataTestId}-slider`
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/TestimonialBlock.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = TestimonialBlock;
var _c;
__turbopack_context__.k.register(_c, "TestimonialBlock");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/hooks/useSnapCarousel.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "useSnapCarousel",
    ()=>useSnapCarousel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$usePrefersReducedMotion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/usePrefersReducedMotion.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const KEIN_RAND = {
    start: 0,
    end: 0
};
/**
 * Nächster Vorfahr, der waagerecht beschneidet (auf den öffentlichen Seiten
 * `main` mit overflow auto). Bis zu dessen Innenkante darf die Spur reichen,
 * ohne dass etwas waagerecht scrollt; fehlt er, gilt die Ansicht.
 */ function clipEdges(el) {
    let node = el.parentElement;
    while(node && node !== document.body && node !== document.documentElement){
        if (getComputedStyle(node).overflowX !== 'visible') {
            const rect = node.getBoundingClientRect();
            const left = rect.left + node.clientLeft;
            return {
                left,
                right: left + node.clientWidth
            };
        }
        node = node.parentElement;
    }
    return {
        left: 0,
        right: document.documentElement.clientWidth
    };
}
/**
 * Wie weit der Kasten um die Spur (ihr Elternelement) vom Rand des sichtbaren
 * Bereichs entfernt ist. Die Spur zieht sich um genau diese Werte nach außen
 * (negativer Rand) und rückt ihren Inhalt um dieselben Werte wieder ein —
 * so beginnt die erste Karte bündig mit dem Inhalt, die folgenden laufen bis
 * an den Rand der Seite. Gemessen statt `100vw`: `100vw` zählt die senkrechte
 * Scrollleiste mit und ließe die Seite dort waagerecht scrollen.
 */ function measureBleed(track) {
    const box = track.parentElement;
    if (!box) return KEIN_RAND;
    const rect = box.getBoundingClientRect();
    const edges = clipEdges(box);
    // abgerundet: lieber ein Pixel vor dem Rand enden als einen darüber hinaus
    return {
        start: Math.max(0, Math.floor(rect.left - edges.left)),
        end: Math.max(0, Math.floor(edges.right - rect.right))
    };
}
function slidesOf(track) {
    return Array.from(track.children);
}
/** Slide, dessen Mitte der Mitte der Spur am nächsten liegt; Anfang/Ende eindeutig */ function centeredIndex(track) {
    const slides = slidesOf(track);
    if (slides.length === 0) return 0;
    const max = track.scrollWidth - track.clientWidth;
    if (max <= 1 || track.scrollLeft <= 1) return 0;
    if (track.scrollLeft >= max - 1) return slides.length - 1;
    const mitte = track.scrollLeft + track.clientWidth / 2;
    let best = 0;
    let abstand = Number.POSITIVE_INFINITY;
    slides.forEach((slide, index)=>{
        const d = Math.abs(slide.offsetLeft + slide.offsetWidth / 2 - mitte);
        if (d < abstand) {
            abstand = d;
            best = index;
        }
    });
    return best;
}
function useSnapCarousel(count, { bleed: withBleed = false } = {}) {
    _s();
    const trackRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [activeIndex, setActiveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [bleed, setBleed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(KEIN_RAND);
    const reducedMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$usePrefersReducedMotion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePrefersReducedMotion"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useSnapCarousel.useEffect": ()=>{
            const track = trackRef.current;
            if (!track) return undefined;
            let frame = 0;
            const sync = {
                "useSnapCarousel.useEffect.sync": ()=>{
                    frame = 0;
                    setActiveIndex(centeredIndex(track));
                    if (withBleed) {
                        const next = measureBleed(track);
                        setBleed({
                            "useSnapCarousel.useEffect.sync": (prev)=>prev.start === next.start && prev.end === next.end ? prev : next
                        }["useSnapCarousel.useEffect.sync"]);
                    }
                }
            }["useSnapCarousel.useEffect.sync"];
            const schedule = {
                "useSnapCarousel.useEffect.schedule": ()=>{
                    if (frame) return;
                    frame = window.requestAnimationFrame(sync);
                }
            }["useSnapCarousel.useEffect.schedule"];
            sync();
            track.addEventListener('scroll', schedule, {
                passive: true
            });
            window.addEventListener('resize', schedule);
            const observer = typeof ResizeObserver === 'function' ? new ResizeObserver(schedule) : null;
            if (observer && track.parentElement) observer.observe(track.parentElement);
            return ({
                "useSnapCarousel.useEffect": ()=>{
                    if (frame) window.cancelAnimationFrame(frame);
                    track.removeEventListener('scroll', schedule);
                    window.removeEventListener('resize', schedule);
                    observer?.disconnect();
                }
            })["useSnapCarousel.useEffect"];
        }
    }["useSnapCarousel.useEffect"], [
        count,
        withBleed
    ]);
    const goTo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSnapCarousel.useCallback[goTo]": (index)=>{
            const track = trackRef.current;
            if (!track) return;
            const ziel = Math.max(0, Math.min(count - 1, index));
            const slide = slidesOf(track)[ziel];
            if (!slide) return;
            const left = slide.offsetLeft + slide.offsetWidth / 2 - track.clientWidth / 2;
            if (typeof track.scrollTo === 'function') {
                track.scrollTo({
                    left,
                    behavior: reducedMotion ? 'auto' : 'smooth'
                });
            } else {
                track.scrollLeft = left;
            }
            setActiveIndex(ziel);
        }
    }["useSnapCarousel.useCallback[goTo]"], [
        count,
        reducedMotion
    ]);
    return {
        trackRef,
        activeIndex,
        goTo,
        bleed
    };
}
_s(useSnapCarousel, "FhkmQEBYjiHVQUuiEysO8EFjLks=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$usePrefersReducedMotion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePrefersReducedMotion"]
    ];
});
const __TURBOPACK__default__export__ = useSnapCarousel;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]})(),
"[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/TestimonialBlock.tsx [app-client] (ecmascript, next/dynamic entry)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/TestimonialBlock.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=apps_web_src_app_0jv6fe4mgej-s._.js.map