(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,417068,e=>{function t(e){return"plastship-dark"===e.key}function i(e,i){return t(e)?{accent:i.accentDark,accentHover:i.accentDarkHover}:{accent:i.accent,accentHover:i.accentHover}}e.s(["j",0,t,"d",0,i,"g",0,function(e,t){let{accent:a,accentHover:n}=i(e,t);return`--button-primary-bg: ${a}; --button-primary-bg-hover: ${n};`},"w",0,function(e,a){let{accent:n}=i(e,a);return{...e,boxShadow:t(e)?e.boxShadow:a.shadow,font:{...e.font,primaryFamily:a.fontFamily,secondaryFamily:a.fontFamily},palette:{...e.palette,default:{...e.palette.default,primary:n},link:{...e.palette.link,primary:n},text:{...e.palette.text,onAccent:a.onAccent}}}}])},396971,e=>{e.i(227319).f,e.s([])},593736,e=>{var t=e.i(843476),i=e.i(997053);let a=i.U.svg.withConfig({displayName:"IconPlay.styles__Root",componentId:"sc-2afb8061-0"})``;e.s(["f",0,e=>{let i=e.color??"currentColor";return(0,t.jsxs)(a,{className:e.className,"data-testid":"icon-play-root",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:[(0,t.jsx)("title",{children:"media-play"}),(0,t.jsx)("g",{fill:i,children:(0,t.jsx)("path",{d:"M6 4V20L20 12L6 4Z",stroke:i,strokeWidth:"2",strokeLinecap:"square",fill:"none"})})]})}],593736)},239178,e=>{e.i(593736).f,e.s([])},510716,980367,e=>{var t=e.i(843476),i=e.i(770703),a=e.i(997053),n=e.i(726029);let r=a.U.div.withConfig({displayName:"SiteMarkdown.styles__Root",componentId:"sc-f615d01e-0"})`
  ${n.b}
  box-sizing: border-box;
  max-width: 100%;
  overflow-wrap: break-word;

  p {
    margin: 0 0 20px;
  }

  /* _reset.scss nimmt den Listen die Punkte — hier wie prose zurück */
  ul,
  ol {
    margin: 20px 0;
    padding-left: 26px;
  }

  /* #1959: Aufzählungen tragen den Sechseck-Punkt aus siteProse (::before) */
  ul {
    list-style-type: none;
  }

  ol {
    list-style-type: decimal;
  }

  li {
    margin: 8px 0;
    padding-left: 6px;
  }

  li + li {
    margin-top: 8px;
  }

  li > p {
    margin: 0;
  }

  ol li::marker {
    color: ${({theme:e})=>e.palette.site.text};
  }

  /*
   * #1538: Element und Aussehen sind getrennt wie bei Headline (importance /
   * renderAs). rehypeHeadingOrder zieht eine Überschrift mit Sprung auf die
   * nächste erlaubte Ebene und schreibt die gewählte in data-render-as — das
   * Aussehen folgt dem Attribut, sonst dem Element.
   * #1563: Die Seitenüberschrift im Fließtext (h1, rehypePageHeading) trägt
   * ihr Aussehen ebenso in data-render-as — eine Raute (#) sieht aus wie die h2.
   */
  h2:not([data-render-as]),
  [data-render-as='2'] {
    ${n.S}
    margin: 48px 0 32px;
  }

  h3,
  h4,
  [data-render-as='3'],
  [data-render-as='4'] {
    margin: 48px 0 18px;
    font-family: ${({theme:e})=>e.font.primaryFamily};
    font-size: 24px;
    font-weight: 700;
    line-height: 1.6;
    letter-spacing: 0;
    text-transform: none;
    color: ${({theme:e})=>e.palette.site.heading};
    hyphens: auto;

    @media (min-width: 640px) {
      font-size: 30px;
    }
  }

  /*
   * #1959: Zwischenüberschrift mit grünem Balken links — gliedert lange Texte
   * (Qualität: 1 260 px Fließtext) ohne zusätzliche Fläche. Akzent des Bandes,
   * sonst Markengrün.
   */
  h3:not([data-render-as]),
  [data-render-as='3'] {
    padding-left: 16px;
    /* Langschrift: die Kurzform mit var() ließe jsdom im Stiltest fallen */
    border-left-width: 4px;
    border-left-style: solid;
    border-left-color: var(--site-accent, ${({theme:e})=>e.palette.site.green});
  }

  h4:not([data-render-as]),
  [data-render-as='4'] {
    font-size: 20px;

    @media (min-width: 640px) {
      font-size: 20px;
    }
  }

  /* Bilder aus dem Crawl sind oft breiter als die Spalte */
  img {
    display: block;
    max-width: 100%;
    height: auto;
    margin: 32px 0;
    border-radius: 24px;
  }

  /* #1562: Zitate und Tabellen der alten Artikel- und Produktseiten (prose) */
  blockquote {
    margin: 32px 0;
    padding-left: 20px;
    border-left: 4px solid ${({theme:e})=>e.palette.site.border};
    font-style: italic;
  }

  blockquote > :last-child {
    margin-bottom: 0;
  }

  table {
    display: block;
    max-width: 100%;
    margin: 32px 0;
    overflow-x: auto;
    border-collapse: collapse;
  }

  th,
  td {
    padding: 12px 14px;
    border-bottom: 1px solid ${({theme:e})=>e.palette.site.border};
    text-align: left;
    vertical-align: top;
  }

  th {
    background: ${({theme:e})=>e.palette.site.tint};
  }

  > :first-child {
    margin-top: 0;
  }

  > :last-child {
    margin-bottom: 0;
  }
`,s=(0,i.default)(()=>e.A(207029).then(e=>e.SiteMarkdownContent),{loadableGenerated:{modules:[975804]}});e.s(["f",0,function({content:e,rendered:i,eagerFirstImage:a,pageHeading:n,imageAlt:d,remarkPlugins:l,dataTestId:o,className:c}){let p=void 0!==i;return(0,t.jsx)(r,{className:c,"data-testid":o,"data-rendered":p?"server":"client",children:p?i:(0,t.jsx)(s,{content:e,eagerFirstImage:a,pageHeading:n,imageAlt:d,remarkPlugins:l})})}],980367),e.s([],510716)},845166,690204,836326,609588,e=>{var t=e.i(843476),i=e.i(271645),a=e.i(325164);e.i(945304);var n=e.i(977194),r=e.i(997053),s=e.i(547905);let d=r.U.span.withConfig({displayName:"CardHalo.styles__Root",componentId:"sc-c90b602d-0"})`
  position: absolute;
  top: -10px;
  left: -10px;
  z-index: 1;
  width: 56px;
  height: 56px;
  pointer-events: none;
  opacity: 0;
  transform: translate(4px, 4px);
  transition:
    opacity 200ms ease,
    transform 200ms ease;

  article:hover > &,
  article:focus-within > & {
    opacity: 1;
    transform: translate(0, 0);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    transform: none;

    article:hover > &,
    article:focus-within > & {
      transform: none;
    }
  }
`,l=r.U.i.withConfig({displayName:"CardHalo.styles__Tile",componentId:"sc-c90b602d-1"})`
  position: absolute;
  display: block;
  ${s.p}

  &[data-tile='large'] {
    top: 0;
    left: 0;
    width: 28px;
    height: 28px;
    background: color-mix(in srgb, ${({theme:e})=>e.palette.site.green} 35%, transparent);
  }

  &[data-tile='medium'] {
    top: -6px;
    left: 30px;
    width: 20px;
    height: 20px;
    background: ${({theme:e})=>e.palette.site.tint};
  }

  &[data-tile='small'] {
    top: 30px;
    left: -6px;
    width: 14px;
    height: 14px;
    background: ${({theme:e})=>e.palette.site.border};
  }
`,o=["large","medium","small"];function c({dataTestId:e="card-halo"}){return(0,t.jsx)(d,{"aria-hidden":"true","data-testid":e,children:o.map(e=>(0,t.jsx)(l,{"data-tile":e},e))})}e.s(["f",0,c],690204),e.s([],836326),e.i(429307);var p=e.i(159255),h=e.i(247902),m=e.i(825969),f=e.i(997917);e.i(311046);var g=e.i(859146),x=e.i(726029);let u=r.U.article.withConfig({displayName:"FeatureCard.styles__Root",componentId:"sc-54abcbca-0"})`
  ${({$shadow:e})=>(0,x.O)(e)}
  ${x.Q}
  /* Titelgröße folgt der Kartenbreite (siehe Title) */
  container-type: inline-size;
  display: flex;
  flex-direction: column;
  width: 100%;

  ${({$interactive:e})=>e&&r.m`
      &:hover,
      &:focus-within {
        --chip-ring-width: 14px;
      }
    `}

  /* #2187: kompakte Karten und Hervorhebungen sind niedrig — die 24-px-Rundung
     der hohen Karten wirkte dort wie eine Pille; Radius der Anliegen-Kacheln */
  ${({$compact:e,$accent:t})=>(e||t)&&r.m`
      border-radius: 16px;
    `}

  /* #2194: Ebenen (Zeigerlicht) liegen mit z-index -1 über der Kartenfläche, unter dem Inhalt */
  ${({$layered:e})=>e&&r.m`
      isolation: isolate;
    `}

  /* #2194 accent: volle Breite, Navy-Fläche, Inhalt mittig, Schrift hell */
  ${({$accent:e,theme:t})=>e&&r.m`
      border-color: ${t.palette.site.navy};
      background: ${t.palette.site.navy};
      text-align: center;
      --site-heading: ${t.palette.text.onAccent};
      --site-text: ${t.palette.text.onAccent};
      --site-muted: ${t.palette.text.onAccent};
      --site-accent: ${t.palette.text.onAccent};

      [data-card-body] {
        align-items: center;
        /* #2187: Höhe nach Inhalt — kein Innenabstand über dem der Karte */
        padding-block: 0;
      }
    `}
`,b=r.U.div.withConfig({displayName:"FeatureCard.styles__ImageWrapper",componentId:"sc-54abcbca-1"})`
  width: 100%;

  img {
    ${x.r}
  }
`,y=r.m`
  padding-top: ${({theme:e})=>e.margin.big};
`,w=r.U.div.withConfig({displayName:"FeatureCard.styles__Body",componentId:"sc-54abcbca-2"})`
  ${x.H}
  display: flex;
  flex-direction: column;
  gap: 24px;

  /* #2197: mit Fußzeile (Preis, Button) füllt der Innenraum die Karte — die Fußzeile sitzt unten */
  &:has(> [data-card-footer]) {
    flex: 1;
  }
  ${({$compact:e})=>e&&y}

  /* #2187: kompakte Karte ohne Icon — kleine Wabe links, Titel daneben
     senkrecht mittig, die Karte so hoch wie ihr Inhalt (in der Reihe gleich hoch) */
  ${({$plain:e,theme:t})=>e&&r.m`
      flex: 1;
      flex-direction: row;
      align-items: center;
      gap: ${t.margin.small};
      padding-block: ${t.margin.extrasmall};
    `}
`,$=r.U.span.withConfig({displayName:"FeatureCard.styles__HexMark",componentId:"sc-54abcbca-3"})`
  position: relative;
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  margin-left: 7px;

  &::before,
  &::after {
    content: '';
    position: absolute;
    ${s.p}
  }

  /* Ring */
  &::before {
    inset: -7px;
    background: color-mix(in srgb, ${({theme:e})=>e.palette.site.blue} 10%, transparent);
  }

  /* Fläche */
  &::after {
    inset: 0;
    background: color-mix(in srgb, ${({theme:e})=>e.palette.site.blue} 20%, transparent);
  }
`,v=r.U.div.withConfig({displayName:"FeatureCard.styles__IconWrapper",componentId:"sc-54abcbca-4"})`
  display: flex;
  align-items: flex-start;
  min-height: 39px;
`,k=r.U.div.withConfig({displayName:"FeatureCard.styles__CornerIcon",componentId:"sc-54abcbca-5"})`
  position: absolute;
  top: 0;
  left: 0;
  width: ${({theme:e})=>e.padding.large};
  height: ${({theme:e})=>e.padding.large};
  overflow: hidden;
  border-top-left-radius: 23px;
  pointer-events: none;

  > * {
    position: absolute;
    top: -${16}px;
    left: -${16}px;
  }
`,j=r.U.span.withConfig({displayName:"FeatureCard.styles__ChipFrame",componentId:"sc-54abcbca-6"})`
  position: relative;
  display: inline-flex;
  color: ${({theme:e})=>e.palette.site.greenText};

  &[data-tone='blue'] {
    color: ${({theme:e})=>e.palette.site.blue};
  }

  &[data-tone='red'] {
    color: ${({theme:e})=>e.palette.site.red};
  }
`,_=r.U.svg.withConfig({displayName:"FeatureCard.styles__ChipOutline",componentId:"sc-54abcbca-7"})`
  position: absolute;
  top: -6px;
  left: ${({$ring:e})=>e-6}px;
  width: ${({$chip:e})=>e+12}px;
  height: ${({$chip:e})=>e+12}px;
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
`,C=r.U.h3.withConfig({displayName:"FeatureCard.styles__Title",componentId:"sc-54abcbca-8"})`
  ${x.Z}
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
`,I=r.U.p.withConfig({displayName:"FeatureCard.styles__Description",componentId:"sc-54abcbca-9"})`
  ${x.n}
  margin: 0;
`,N=r.U.div.withConfig({displayName:"FeatureCard.styles__TextBlock",componentId:"sc-54abcbca-10"})`
  ${x.n}
  ${x.Y}
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.margin.extrasmall};
  margin-top: ${({theme:e})=>e.margin.extrasmall};
`,z=r.U.p.withConfig({displayName:"FeatureCard.styles__TextLabel",componentId:"sc-54abcbca-11"})`
  margin: 0;
  ${({$list:e,theme:t})=>e&&r.m`
      margin-top: ${t.margin.extrasmall};
      font-weight: 600;
      color: ${(0,x.N)("heading",t.palette.site.heading)};
    `}
`,U=r.U.ul.withConfig({displayName:"FeatureCard.styles__TextList",componentId:"sc-54abcbca-12"})`
  margin: 0;
  padding-left: 1.25em;
`,T=r.U.div.withConfig({displayName:"FeatureCard.styles__Footer",componentId:"sc-54abcbca-13"})`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  gap: ${({theme:e})=>e.margin.small};
  margin-top: auto;
  padding-top: ${({theme:e})=>e.margin.small};
  border-top: 1px solid ${({theme:e})=>(0,x.N)("border",e.palette.site.border)};
`,S=r.U.p.withConfig({displayName:"FeatureCard.styles__Price",componentId:"sc-54abcbca-14"})`
  display: flex;
  flex-direction: column;
  margin: 0;
`,F=r.U.span.withConfig({displayName:"FeatureCard.styles__PriceLabel",componentId:"sc-54abcbca-15"})`
  ${x.n}
  font-size: 14px;
  line-height: 20px;
`,M=r.U.span.withConfig({displayName:"FeatureCard.styles__PriceAmount",componentId:"sc-54abcbca-16"})`
  font-family: ${({theme:e})=>e.font.primaryFamily};
  font-size: 28px;
  font-weight: 700;
  line-height: 1.1;
  color: ${({theme:e})=>(0,x.N)("heading",e.palette.site.navy)};
  white-space: nowrap;
`,R=/(?:\d[\d.,]*(?:\s*[–—-]\s*\d[\d.,]*)?\s*€|€\s*\d[\d.,]*(?:\s*[–—-]\s*\d[\d.,]*)?)/u,P=(0,g.e)({width:100,height:100},(0,g.C)(100));function H({icon:e,size:a="small",dataTestId:r}){return i.default.isValidElement(e)?(0,t.jsx)(n.J,{tone:"green",shape:"hex",size:a,dataTestId:r,children:e}):(0,t.jsx)(n.c,{name:e.name,tone:e.tone,shape:"hex",size:a,dataTestId:r})}function A({icon:e,size:a,dataTestId:n}){let r=f.N[a],s=2*r.pad+r.icon,d=i.default.isValidElement(e)?"green":e.tone??"green";return(0,t.jsxs)(j,{"data-tone":d,children:[(0,t.jsx)(H,{icon:e,size:a,dataTestId:n}),(0,t.jsx)(_,{$ring:r.ring,$chip:s,viewBox:"0 0 100 100","aria-hidden":"true","data-testid":n?`${n}-outline`:void 0,children:(0,t.jsx)("path",{d:P,pathLength:1})})]})}function B({text:e,dataTestId:a}){let n=e.replace(/\r\n/g,"\n").split(/\n\s*\n/).map(e=>e.trim()).filter(Boolean).map(e=>{let t=e.split("\n").map(e=>e.trim()),i=t.findIndex(e=>/^[-•]\s+/.test(e));return i<0?{label:t.join(" "),items:[]}:{label:t.slice(0,i).join(" "),items:t.slice(i).map(e=>e.replace(/^[-•]\s+/,"")).filter(Boolean)}});return 1!==n.length||n[0].items.length||n[0].label.includes("\n")?(0,t.jsx)(N,{"data-testid":a,children:n.map((e,n)=>(0,t.jsxs)(i.default.Fragment,{children:[e.label&&(0,t.jsx)(z,{$list:e.items.length>0,children:e.label}),e.items.length>0&&(0,t.jsx)(U,{"data-testid":`${a}-list-${n}`,children:e.items.map((e,i)=>(0,t.jsx)("li",{children:e},i))})]},n))}):(0,t.jsx)(I,{"data-testid":a,children:n[0].label})}let K=e=>{let n,{title:r,titleTag:s="h3",description:d,icon:l,image:o,ctaHref:f,shadow:g,compact:x=!1,accent:y=!1,stretched:j=!1,drawIcon:_=!1,layer:I,price:N,actionLabel:z,onAction:U,className:P,dataTestId:K="feature-card"}=e,D=!!(z&&f),L=!!f&&!D,O=N?(n=R.exec(N))?{label:(N.slice(0,n.index)+N.slice(n.index+n[0].length)).replace(/[:：\s]+$/u,"").trim(),amount:n[0].trim()}:{label:"",amount:N.trim()}:null,W=r.split(/(?<=\/)/).filter(Boolean).map((e,a)=>(0,t.jsxs)(i.default.Fragment,{children:[a>0&&(0,t.jsx)("wbr",{}),e]},a)),E=x&&!!l&&!o,Z=x&&!l&&!o&&!y,q=e=>l&&(_?(0,t.jsx)(A,{icon:l,size:e,dataTestId:`${K}-chip`}):(0,t.jsx)(H,{icon:l,size:e,dataTestId:`${K}-chip`}));return(0,t.jsxs)(u,{className:P,"data-testid":K,"data-linked":L,"data-compact":x?"true":void 0,"data-accent":y?"true":void 0,$shadow:g??L,$interactive:L,$accent:y,$compact:x,$layered:!!I,children:[I,L&&(0,t.jsx)(c,{dataTestId:`${K}-halo`}),o&&(0,t.jsx)(b,{"data-testid":`${K}-image`,children:(0,t.jsx)(a.default,{src:o,alt:r,width:704,height:396,sizes:"(max-width: 640px) 100vw, 33vw"})}),E&&(0,t.jsx)(k,{"data-testid":`${K}-icon`,"data-corner":"true",children:q("large")}),(0,t.jsxs)(w,{$compact:E,$plain:Z,"data-card-body":"",children:[Z&&(0,t.jsx)($,{"aria-hidden":"true","data-testid":`${K}-mark`}),l&&!E&&(0,t.jsx)(v,{"data-testid":`${K}-icon`,children:q("small")}),(0,t.jsxs)("div",{children:[(0,t.jsx)(C,{as:s,"data-testid":`${K}-title`,"data-title-tag":s,children:f&&!D?(0,t.jsx)(p.f,{href:f,stretched:j,dataTestId:`${K}-cta`,children:W}):W}),d&&(0,t.jsx)(B,{text:d,dataTestId:`${K}-description`})]}),(O||D)&&(0,t.jsxs)(T,{"data-card-footer":"","data-testid":`${K}-footer`,children:[O&&(0,t.jsxs)(S,{"data-testid":`${K}-price`,children:[O.label&&(0,t.jsx)(F,{children:O.label}),(0,t.jsx)(M,{children:O.amount})]}),D&&(0,t.jsx)(h.f,{href:f,modifier:m.j.PRIMARY,onClick:U,dataTestId:`${K}-action`,children:z})]})]})]})};e.s(["f",0,K],609588),e.s(["f",0,K],845166)},597734,655750,e=>{var t=e.i(843476),i=e.i(325164),a=e.i(929842);e.i(510716);var n=e.i(980367),r=e.i(247902),s=e.i(825969),d=e.i(499911),l=e.i(997053),o=e.i(726029),c=e.i(417068);let p=l.U.article.withConfig({displayName:"MediaText.styles__Root",componentId:"sc-4af3d1c-0"})`
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
    ${({$withImage:e})=>e&&l.m`
        grid-template-columns: repeat(2, minmax(0, 1fr));
      `}
  }

  ${({$withImage:e,$imagePosition:t})=>e&&"left"===t&&l.m`
      @media (min-width: 768px) {
        > figure {
          order: -1;
        }
      }
    `}

  ${({$highlight:e,theme:t})=>e&&l.m`
      padding: 32px;
      border: 1px solid ${t.palette.site.border};
      border-radius: 24px;
      background: linear-gradient(to bottom, ${t.palette.site.tint}, ${t.palette.site.card});

      @media (min-width: 768px) {
        padding: 48px;
      }
    `}
`,h=l.U.div.withConfig({displayName:"MediaText.styles__TextColumn",componentId:"sc-4af3d1c-1"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-width: 0;
  ${({$withImage:e})=>!e&&l.m`
      max-width: ${o.z};
    `}
`,m=l.U.h2.withConfig({displayName:"MediaText.styles__Headline",componentId:"sc-4af3d1c-2"})`
  ${o.S}
`,f=l.U.div.withConfig({displayName:"MediaText.styles__Prose",componentId:"sc-4af3d1c-3"})`
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
  ${({$compactSubheadings:e})=>e&&l.m`
      && h3:not([data-render-as]),
      && [data-render-as='3'] {
        font-size: 20px;
        line-height: 1.25;
      }
    `}
`,g=e=>l.m`
  ${e} > a {
    background-color: transparent;
    color: #ffffff;
    --button-fg: #ffffff;
    box-shadow: inset 0 0 0 2px #ffffff;
  }
  ${e} > a:hover:not(:disabled),
  ${e} > a:focus-visible {
    background-color: #ffffff;
    color: ${({theme:e})=>e.palette.site.navy};
    --button-fg: ${({theme:e})=>e.palette.site.navy};
  }
`,x=l.U.div.withConfig({displayName:"MediaText.styles__CtaWrapper",componentId:"sc-4af3d1c-4"})`
  margin-top: 16px;

  ${({theme:e})=>(0,c.j)(e)?g("&&"):""}
  ${g("[data-surface='dark'] &&")}
`,u=l.U.figure.withConfig({displayName:"MediaText.styles__Figure",componentId:"sc-4af3d1c-5"})`
  margin: 0;
  min-width: 0;

  img {
    display: block;
    width: 100%;
    height: auto;
    border-radius: 24px;
    overflow: hidden;
  }
`;var b=e.i(271645);e.i(710788);var y=e.i(599858),w=e.i(808847),$=e.i(795662),v=e.i(647835);e.i(311046);var k=e.i(650529),j=e.i(859146),_=e.i(355351),C=e.i(547905);let I=l.U.figure.withConfig({displayName:"HexFigure.styles__Root",componentId:"sc-5a6f9167-0"})`
  --hex-figure-halo: ${({theme:e})=>(0,o.N)("halo",e.palette.site.tint)};
  position: relative;
  isolation: isolate;
  margin: 0;
  min-width: 0;
`,N=l.q`
  from { transform: translateY(-${24}px); }
  to { transform: translateY(${24}px); }
`,z=l.U.div.withConfig({displayName:"HexFigure.styles__Frame",componentId:"sc-5a6f9167-1"})`
  position: relative;
  width: min(${85}%, ${480}px);
  aspect-ratio: ${C.w};
  margin-left: ${({$side:e})=>"right"===e?"auto":"0"};
  overflow: hidden;
  ${C.q}

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
        height: calc(100% + ${48}px);
        margin-top: -${24}px;
        animation: ${N} linear both;
        animation-timeline: view();
      }
    }
  }
`,U=l.q`
  from { opacity: 0; }
  to { opacity: 1; }
`,T=l.U.svg.withConfig({displayName:"HexFigure.styles__Halo",componentId:"sc-5a6f9167-2"})`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  display: block;
  width: 100%;
  height: 100%;
  overflow: visible;
  pointer-events: none;
  animation: ${U} 400ms ease-out both;

  path[data-rounded='true'],
  path[data-full='true'] {
    opacity: var(--alpha);
  }

  [data-partial='true'] {
    ${C.t}
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,S=l.q`
  from { opacity: 1; transform: scale(1); }
  to { opacity: 0; transform: scale(0.4); }
`,F=l.U.svg.withConfig({displayName:"HexFigure.styles__Cover",componentId:"sc-5a6f9167-3"})`
  position: absolute;
  inset: 0;
  display: none;
  width: 100%;
  height: 100%;
  pointer-events: none;

  ${I}[data-state='idle'] &,
  ${I}[data-state='running'] & {
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

  ${I}[data-state='running'] & path {
    animation: ${S} ${450}ms ease-in var(--delay, 0ms) both;
  }
`,M=(e,t)=>{let i=Math.min(.85*e,480),a="right"===t?e-i:0;return{left:a,top:0,right:a+i,bottom:i*j.q}},R=({src:e,alt:a,priority:n,side:r,dataTestId:s})=>{let d=(0,b.useRef)(null),l=(0,$.f)(d),o=(0,b.useMemo)(()=>((e,t)=>{if(e<=0)return[];let i=M(e,t),a=(i.left+i.right)/2;return(0,w.a)(e,i.bottom,(0,_.L)(e),[i],e=>{var t,a,n;let r,s,d,l;return t=e.size/2,a=e.cx,n=e.cy,s=(r=(i.right-i.left)/2+t)*j.q,d=Math.abs(a-(i.left+i.right)/2),l=Math.abs(n-(i.top+i.bottom)/2),d<=r&&l<=s-s/(2*r)*d},k.V).filter(e=>"right"===t?e.cx<a:e.cx>a)})(l,r),[l,r]),{state:c}=(0,v.f)(d,1470,.25),p=M(l,r),h=p.right-p.left,m=(0,b.useMemo)(()=>n?[]:function(e,t,i){if(e<=0||t<=0)return[];let a=Math.max(4,Math.round(e/56)),n=(0,_.T)(e,t,a),r="right"===i?0:e,s=t/2,d=Math.max(1,...n.map(e=>Math.hypot(e.cx-r,e.cy-s)));return n.map(e=>{let t=Math.hypot(e.cx-r,e.cy-s)/d*900,i=((0,k.k)(e)+1)/2*120;return{...e,delay:Math.round(t+i)}})}(h,p.bottom,r),[n,h,p.bottom,r]);return(0,t.jsxs)(I,{ref:d,"data-testid":s,"data-shape":"hex","data-side":r,"data-loading":n?"eager":"lazy","data-state":n?"static":c,children:[o.length>0&&(0,t.jsx)(T,{"aria-hidden":"true",focusable:"false","data-testid":`${s}-halo-canvas`,children:(0,t.jsx)(y.f,{tiles:o,color:"tint",fill:"var(--hex-figure-halo)",dataTestId:`${s}-halo`})}),(0,t.jsxs)(z,{$side:r,"data-testid":`${s}-frame`,children:[(0,t.jsx)(i.default,{src:e,alt:a,width:704,height:396,sizes:"(max-width: 768px) 100vw, 50vw",loading:n?"eager":"lazy",fetchPriority:n?"high":void 0}),m.length>0&&(0,t.jsx)(F,{viewBox:`0 0 ${Math.round(h)} ${Math.round(p.bottom)}`,preserveAspectRatio:"none","aria-hidden":"true",focusable:"false","data-testid":`${s}-cover`,"data-tiles":m.length,children:m.map(e=>(0,t.jsx)("path",{d:(0,_.H)(e),style:{"--delay":`${e.delay}ms`}},e.key))})]})]})},P={[a.D.h1]:"h1",[a.D.h2]:"h2",[a.D.h3]:"h3",[a.D.h4]:"h4",[a.D.h5]:"h5"};e.s(["f",0,e=>{let{headline:l,paragraphs:o,renderedParagraphs:c,imageSrc:g,imageAlt:b,imagePosition:y="right",imageShape:w="rounded",imagePriority:$=!1,headlineImportance:v=a.D.h2,ctaText:k,ctaHref:j,highlight:_=!1,media:C,onCtaClick:I,compactSubheadings:N=!1,className:z,dataTestId:U="media-text"}=e,T=null!=C,S=T||!!g;return(0,t.jsxs)(p,{className:z,"data-testid":U,"data-image-position":S?y:"none","data-highlight":_?"true":"false",$highlight:_,$withImage:S,$imagePosition:y,children:[(0,t.jsxs)(h,{$withImage:S,children:[(0,t.jsx)(m,{as:P[v]??"h2","data-testid":`${U}-headline`,children:l}),(0,t.jsx)(f,{$compactSubheadings:N,"data-compact-subheadings":N?"true":void 0,children:o.map((e,i)=>(0,t.jsx)(n.f,{content:e,rendered:c?.[i],dataTestId:`${U}-paragraph`},i))}),k&&j&&(0,t.jsx)(x,{children:(0,t.jsx)(r.f,{href:j,modifier:s.j.SECONDARY,icon:(0,t.jsx)(d.f,{}),iconAlign:s.W.RIGHT,onClick:I,dataTestId:`${U}-cta`,children:k})})]}),T&&(0,t.jsx)(u,{"data-testid":`${U}-media`,"data-shape":"element",children:C}),!T&&g&&"hex"===w&&(0,t.jsx)(R,{src:g,alt:b??l,priority:$,side:y,dataTestId:`${U}-image`}),!T&&g&&"hex"!==w&&(0,t.jsx)(u,{"data-testid":`${U}-image`,"data-shape":"rounded","data-loading":$?"eager":"lazy",children:(0,t.jsx)(i.default,{src:g,alt:b??l,width:704,height:396,sizes:"(max-width: 768px) 100vw, 50vw",loading:$?"eager":"lazy",fetchPriority:$?"high":void 0})})]})}],655750),e.s([],597734)},624813,775175,e=>{var t=e.i(843476),i=e.i(325164);e.i(429307);var a=e.i(159255),n=e.i(997053),r=e.i(726029),s=e.i(547905);let d=n.U.article.withConfig({displayName:"NewsCard.styles__Root",componentId:"sc-2d756514-0"})`
  ${(0,r.O)(!0)}
  /* #2176: mit Ziel ist die ganze Karte der Link (gestreckter Titel-Link) */
  ${r.Q}
  display: flex;
  flex-direction: column;
  color: ${({theme:e})=>e.palette.site.text};

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
`,l=n.U.div.withConfig({displayName:"NewsCard.styles__ImageWrapper",componentId:"sc-2d756514-1"})`
  position: relative;
  width: 100%;
  aspect-ratio: 704 / 396;
  overflow: hidden;
  border-radius: 12px 12px 0 0;
  background: ${({theme:e})=>e.palette.site.tint};

  img {
    object-fit: cover;
  }
`,o=n.U.span.withConfig({displayName:"NewsCard.styles__DateBadge",componentId:"sc-2d756514-2"})`
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
  ${s.p}
  background: ${({theme:e})=>e.palette.site.blueDark};
  color: ${({theme:e})=>e.palette.text.onAccent};
  font-family: ${({theme:e})=>e.font.primaryFamily};
  pointer-events: none;
`,c=n.U.span.withConfig({displayName:"NewsCard.styles__DateBadgeDay",componentId:"sc-2d756514-3"})`
  font-size: 20px;
  font-weight: 700;
  line-height: 1;
`,p=n.U.span.withConfig({displayName:"NewsCard.styles__DateBadgeMonth",componentId:"sc-2d756514-4"})`
  margin-top: 2px;
  font-size: 11px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: 0.04em;
  text-transform: uppercase;
`,h=n.U.div.withConfig({displayName:"NewsCard.styles__ContentWrapper",componentId:"sc-2d756514-5"})`
  ${r.H}
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
`,m=n.U.h3.withConfig({displayName:"NewsCard.styles__Title",componentId:"sc-2d756514-6"})`
  margin: 0;
  font-family: ${({theme:e})=>e.font.primaryFamily};
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0;
  text-transform: none;
  color: ${({theme:e})=>e.palette.site.text};
  overflow-wrap: break-word;

  @media (min-width: 640px) {
    font-size: 20px;
  }
`,f=n.U.div.withConfig({displayName:"NewsCard.styles__Meta",componentId:"sc-2d756514-7"})`
  font-family: ${({theme:e})=>e.font.secondaryFamily};
  font-size: 14px;
  line-height: 20px;
  color: ${({theme:e})=>e.palette.site.muted};
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
`,g=n.U.ul.withConfig({displayName:"NewsCard.styles__Tags",componentId:"sc-2d756514-8"})`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 0;
  padding: 0;
  list-style: none;
`,x=n.U.li.withConfig({displayName:"NewsCard.styles__Tag",componentId:"sc-2d756514-9"})`
  ${r.M}
`;e.s(["f",0,e=>{let{headline:n,href:r,imageUrl:s,imageAlt:u,date:b,dateBadge:y,subtitle:w,description:$,tags:v=[],imageSizes:k="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw",className:j,dataTestId:_="news-card"}=e;return(0,t.jsxs)(d,{className:j,"data-testid":_,"data-linked":r?"true":"false",children:[s&&(0,t.jsxs)(l,{"data-testid":`${_}-image-wrapper`,"data-card-image":"",children:[(0,t.jsx)(i.default,{src:s,alt:u||n,fill:!0,sizes:k,"data-testid":`${_}-image`}),y&&(0,t.jsxs)(o,{"aria-hidden":"true","data-testid":`${_}-date-badge`,"data-day":y.day,"data-month":y.month,children:[(0,t.jsx)(c,{children:y.day}),(0,t.jsx)(p,{children:y.month})]})]}),(0,t.jsxs)(h,{children:[(0,t.jsx)(m,{"data-testid":`${_}-headline`,children:r?(0,t.jsx)(a.f,{href:r,stretched:!0,dataTestId:`${_}-link`,children:n}):n}),(b||w||$)&&(0,t.jsxs)(f,{"data-testid":`${_}-meta`,children:[(b||w)&&(0,t.jsxs)("p",{children:[b&&(0,t.jsx)("span",{"data-testid":`${_}-date`,children:b}),b&&w&&" · ",w&&(0,t.jsx)("strong",{"data-testid":`${_}-subtitle`,children:w})]}),$&&(0,t.jsx)("p",{"data-testid":`${_}-description`,children:$})]}),v.length>0&&(0,t.jsx)(g,{"data-testid":`${_}-tags`,children:v.map((e,i)=>(0,t.jsx)(x,{"data-testid":`${_}-tag-${i}`,children:e},`${e}-${i}`))})]})]})}],775175),e.s([],624813)},4185,566457,e=>{var t=e.i(843476),i=e.i(325164);e.i(945304);var a=e.i(977194);e.i(429307);var n=e.i(159255);e.i(836326);var r=e.i(690204),s=e.i(997053),d=e.i(726029),l=e.i(547905);let o="120px",c=s.U.article.withConfig({displayName:"PartnerCard.styles__Root",componentId:"sc-8fae0cdf-0"})`
  ${(0,d.O)(!0)}
  /* #2176: mit Website ist die ganze Karte der Link (gestreckter Name-Link) */
  ${d.Q}
  container-type: inline-size;
  display: flex;
  flex-direction: column;
  width: 100%;

  &:hover,
  &:focus-within {
    --chip-ring-width: 14px;
  }

  /* #1957: liegende Karte — Logo links in fester Spalte, Text rechts */
  ${({$row:e,theme:t})=>e&&s.m`
      display: grid;
      grid-template-columns: ${o} minmax(0, 1fr);
      gap: ${t.margin.default};
      align-items: center;
      padding: ${t.padding.default};
    `}
`,p=s.U.div.withConfig({displayName:"PartnerCard.styles__RowLogo",componentId:"sc-8fae0cdf-1"})`
  position: relative;
  box-sizing: border-box;
  width: ${o};
  height: ${"80px"};
  border-radius: 12px;
  background: ${({theme:e})=>e.palette.site.logoPlate};

  img {
    box-sizing: border-box;
    padding: ${({theme:e})=>e.padding.extrasmall};
    object-fit: contain;
    /* Logos mit weißem Grund gehen in der Unterlage auf (Dunkelmodus) */
    mix-blend-mode: multiply;
  }
`,h=s.U.div.withConfig({displayName:"PartnerCard.styles__RowBody",componentId:"sc-8fae0cdf-2"})`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({theme:e})=>e.margin.extrasmall};
  min-width: 0;
`,m=s.U.span.withConfig({displayName:"PartnerCard.styles__Role",componentId:"sc-8fae0cdf-3"})`
  ${d.M}
  gap: ${({theme:e})=>e.margin.extrasmall};

  &::before {
    content: '';
    flex: none;
    width: ${"8px"};
    height: ${"8px"};
    background: ${({theme:e})=>e.palette.site.green};
    ${l.p}
  }
`,f=s.U.div.withConfig({displayName:"PartnerCard.styles__LogoWrapper",componentId:"sc-8fae0cdf-4"})`
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  border-radius: 12px 12px 0 0;

  img {
    object-fit: contain;
  }
`,g=s.U.a.withConfig({displayName:"PartnerCard.styles__LogoLink",componentId:"sc-8fae0cdf-5"})`
  position: absolute;
  inset: 0;
  display: block;
`,x=s.U.div.withConfig({displayName:"PartnerCard.styles__Body",componentId:"sc-8fae0cdf-6"})`
  ${d.H}
  display: flex;
  flex-direction: column;
  gap: 24px;
`,u=s.U.div.withConfig({displayName:"PartnerCard.styles__CheckWrapper",componentId:"sc-8fae0cdf-7"})`
  display: flex;
  align-items: flex-start;
  min-height: 39px;
`,b=s.U.h3.withConfig({displayName:"PartnerCard.styles__Name",componentId:"sc-8fae0cdf-8"})`
  ${d.Z}
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
`,y=s.U.p.withConfig({displayName:"PartnerCard.styles__Description",componentId:"sc-8fae0cdf-9"})`
  ${d.n}
  margin: 0;
`;var w=e.i(437992);e.s(["f",0,e=>{let{companyName:s,logoUrl:d,logoAlt:l,description:o,websiteUrl:$,variant:v="full",role:k,headingLevel:j=3,className:_,dataTestId:C="partner-card"}=e,I="logo"===v&&!!d,N=(0,t.jsx)(b,{as:2===j?"h2":"h3","data-testid":`${C}-name`,"data-heading-level":j,children:$?(0,t.jsx)(n.f,{href:$,target:"_blank",stretched:!0,dataTestId:`${C}-link`,children:s}):s}),z=o?(0,t.jsx)(y,{"data-testid":`${C}-description`,children:o}):null;if("row"===v)return(0,t.jsxs)(c,{className:_,"data-testid":C,"data-variant":"row","data-linked":$?"true":"false",$row:!0,children:[$&&(0,t.jsx)(r.f,{dataTestId:`${C}-halo`}),d&&(0,t.jsx)(p,{children:(0,t.jsx)(i.default,{src:d,alt:l||`${s} logo`,fill:!0,sizes:"120px","data-testid":`${C}-logo`})}),(0,t.jsxs)(h,{children:[k&&(0,t.jsx)(m,{"data-testid":`${C}-role`,children:k}),N,z]})]});let U=d?(0,t.jsx)(i.default,{src:d,alt:l||`${s} logo`,fill:!0,sizes:"(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw","data-testid":`${C}-logo`}):null;return(0,t.jsxs)(c,{className:_,"data-testid":C,"data-variant":I?"logo":"full","data-linked":$?"true":"false",children:[$&&(0,t.jsx)(r.f,{dataTestId:`${C}-halo`}),U&&(0,t.jsx)(f,{children:I&&$?(0,t.jsx)(g,{href:$,...w.d,"aria-label":s,"data-testid":`${C}-link`,children:U}):U}),(0,t.jsx)(x,{children:!I&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(u,{children:(0,t.jsx)(a.c,{name:"check",tone:"green",shape:"hex",dataTestId:`${C}-check`})}),(0,t.jsxs)("div",{children:[N,z]})]})})]})}],566457),e.s([],4185)},951693,659188,e=>{var t=e.i(843476),i=e.i(997053),a=e.i(726029);let n=i.U.header.withConfig({displayName:"SiteSectionHeader__Root",componentId:"sc-37a85c34-0"})`
  display: flex;
  /* globals.css gibt jedem header die Seitenfarbe; auf Karten und Bändern transparent bleiben */
  background: transparent;
  flex-direction: column;
  gap: 16px;
  max-width: ${a.z};
  ${({$align:e})=>"center"===e&&i.m`
      margin-inline: auto;
      text-align: center;
    `}
`,r=i.U.h2.withConfig({displayName:"SiteSectionHeader__H2",componentId:"sc-37a85c34-1"})`
  ${a.S}
`,s=i.U.div.withConfig({displayName:"SiteSectionHeader__Lead",componentId:"sc-37a85c34-2"})`
  ${a.b}
  white-space: pre-line;
`;e.s(["f",0,function({headline:e,description:i,align:a="left",headingLevel:d=2,dataTestId:l}){if(!e&&!i)return null;let o=i?i.split(/\n\s*\n/).map(e=>e.trim()).filter(Boolean):[];return(0,t.jsxs)(n,{$align:a,"data-testid":l,"data-align":a,children:[e&&(0,t.jsx)(r,{as:1===d?"h1":"h2","data-testid":l?`${l}-headline`:void 0,children:e}),o.length>0&&(0,t.jsx)(s,{"data-testid":l?`${l}-description`:void 0,children:o.map((e,i)=>(0,t.jsx)("p",{children:e},i))})]})}],659188),e.s([],951693)},755010,e=>{var t=e.i(271645),i=e.i(618566),a=e.i(476999),n=e.i(14431),r=e.i(71845);class s extends t.default.Component{state={failed:!1};static getDerivedStateFromError(){return{failed:!0}}componentDidCatch(e,t){(0,n.v)({category:"cms-animation",message:"element-error",data:{element:this.props.element}}),(0,n.i)(e,{componentStack:t.componentStack})}render(){return this.state.failed?this.props.fallback:this.props.children}}e.s(["A",0,s,"l",0,function(e){let s=(0,i.usePathname)(),d=(0,t.useRef)(new Set);return(0,t.useCallback)(t=>{if("cta"!==t){if(d.current.has(t))return;d.current.add(t)}(0,a.q)(s||"/",r.f,{element:e,action:t}),(0,n.v)({category:"cms-animation",message:t,data:{element:e}})},[s,e])}])},795662,e=>{var t=e.i(271645);e.s(["f",0,e=>{let[i,a]=(0,t.useState)(0);return(0,t.useEffect)(()=>{let t=e.current;if(!t)return;let i=()=>{let e=t.clientWidth;a(t=>t===e?t:e)};if(i(),"u"<typeof ResizeObserver)return;let n=new ResizeObserver(i);return n.observe(t),()=>n.disconnect()},[e]),i}])},197908,e=>{var t=e.i(178446);let i=/href$/i,a=/^(null|undefined)$/i;function n(e){if("string"!=typeof e)return;let t=e.trim();if(!(""===t||a.test(t)))return t}e.s(["J",0,n,"n",0,function(e){return{...e,props:function e(a,r){if("string"==typeof a){if(null===r||!i.test(r))return a;let e=n(a);return void 0===e?void 0:(0,t.f)(e)}return Array.isArray(a)?a.map(t=>e(t,null)):a&&"object"==typeof a?Object.fromEntries(Object.entries(a).map(([t,i])=>[t,e(i,t)])):a}(e.props,null)}}])},437772,e=>{function t(e,t){if(!e)return;if(t in e)return e[t];let i=Object.keys(e)[0];return void 0===i?void 0:e[i]}function i(e,i){return t(e,i)}e.s(["h",0,function(e,t,a,n,r){if(e)return i(e[void 0===r?`${a}:${n}`:`${a}:${n}:${r}`],t)},"z",0,i,"r",0,t])},62574,687312,529080,155892,e=>{let t="cubic-bezier(0.2, 0.8, 0.2, 1)";e.s(["S",0,t,"B",0,"cubic-bezier(0.65, 0, 0.35, 1)"],62574);var i=e.i(843476),a=e.i(271645);function n(e){let t=Array.from(e),i=t.filter(e=>e>="0"&&e<="9").length;return t.map(e=>e>="0"&&e<="9"?(i-=1,{kind:"digit",digit:Number(e),order:i}):{kind:"char",char:e})}e.s(["S",0,e=>/\d/.test(e),"B",0,e=>(e.match(/\d/g)??[]).length,"p",0,n],687312);var r=e.i(997053),s=e.i(994244);let d=r.U.span.withConfig({displayName:"Odometer.styles__Root",componentId:"sc-6aa08d55-0"})`
  position: relative;
  display: inline-flex;
  align-items: flex-start;
  line-height: 1;
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
`,l=r.U.span.withConfig({displayName:"Odometer.styles__Text",componentId:"sc-6aa08d55-1"})`
  ${s.p}
`,o=r.U.span.withConfig({displayName:"Odometer.styles__Visual",componentId:"sc-6aa08d55-2"})`
  display: inline-flex;
  align-items: flex-start;
`,c=r.U.span.withConfig({displayName:"Odometer.styles__Char",componentId:"sc-6aa08d55-3"})`
  display: inline-block;
  height: 1em;
  white-space: pre;
`,p=r.U.span.withConfig({displayName:"Odometer.styles__Wheel",componentId:"sc-6aa08d55-4"})`
  display: inline-block;
  height: 1em;
  overflow: hidden;
`,h=r.U.span.withConfig({displayName:"Odometer.styles__Strip",componentId:"sc-6aa08d55-5"})`
  display: flex;
  flex-direction: column;
  transform: translateY(${({$digit:e})=>-(10+e)}em);

  > span {
    display: block;
    height: 1em;
  }

  [data-state='idle'] > ${o} > ${p} > & {
    transform: translateY(0);
  }

  [data-state='running'] > ${o} > ${p} > & {
    ${({$delay:e,$duration:i})=>r.m`
      transition: transform ${i}ms ${t} ${e}ms;
    `}
  }
`,m=Array.from({length:20},(e,t)=>t%10);e.s(["f",0,({value:e,state:t,delay:r=0,stagger:s=90,duration:f=1200,className:g,dataTestId:x="odometer"})=>{let u=(0,a.useMemo)(()=>n(e),[e]),b=u.filter(e=>"digit"===e.kind).length;return(0,i.jsxs)(d,{className:g,"data-testid":x,"data-state":t,"data-digits":b,children:[(0,i.jsx)(l,{children:e}),(0,i.jsx)(o,{"aria-hidden":"true",children:u.map((e,t)=>"digit"===e.kind?(0,i.jsx)(p,{"data-part":"wheel",children:(0,i.jsx)(h,{$digit:e.digit,$delay:r+e.order*s,$duration:f,children:m.map((e,t)=>(0,i.jsx)("span",{children:e},t))})},t):(0,i.jsx)(c,{children:e.char},t))})]})}],529080),e.s([],155892)},119093,e=>{let t=(e,t)=>parseInt(e.slice(t,t+2),16);e.s(["f",0,(e,i,a)=>{if(!(a>0))return e;if(a>=1)return i;let n="#";for(let r of[1,3,5]){let s=t(e,r);n+=Math.round(s+(t(i,r)-s)*a).toString(16).padStart(2,"0")}return n}])},178446,e=>{e.s(["f",0,function(e){if(!e.startsWith("/")||e.startsWith("//"))return e;let t=e.search(/[?#]/),i=-1===t?e:e.slice(0,t),a=-1===t?"":e.slice(t);return`${i.endsWith("/")||i.slice(i.lastIndexOf("/")+1).includes(".")?i:`${i}/`}${a}`}])}])})();