(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,900490,e=>{var t=e.i(997053),i=e.i(825969),a=e.i(417068),n=e.i(136717);function r(e,t,i){let n=e.palette.site,r=e.palette.text.onAccent;return"dark"===t||(0,a.j)(e)?{bg:"transparent",fg:r,ring:r,hoverBg:r,hoverFg:n.navy}:"outlined"===i?{bg:"transparent",fg:n.blueDark,ring:n.blueDark,hoverBg:n.blueDark,hoverFg:r}:{bg:n.blueDark,fg:r,hoverBg:`color-mix(in srgb, ${n.blueDark} 80%, #000000)`,hoverFg:r}}let s=e=>t.m`
  --button-secondary-bg: ${e.bg};
  --button-secondary-fg: ${e.fg};
  --button-secondary-ring: ${e.ring?`inset 0 0 0 2px ${e.ring}`:"none"};
  --button-secondary-bg-hover: ${e.hoverBg};
  --button-secondary-fg-hover: ${e.hoverFg};
`;e.s(["h",0,e=>t.m`
  ${({theme:t})=>s(r(t,e.tone,e.fill))}

  [data-surface='dark'] & {
    ${({theme:t})=>s(r(t,"dark",e.fill))}
  }
`,"g",0,function(e,t="main",a={}){return{modifier:i.j.SECONDARY,tone:function(e,t={}){if(t.colorAtButton){var i;return i=t.colorAtButton,(0,n.n)(i,"#ffffff")>=3?"dark":"light"}return"dark"===e?"dark":"light"}(e,a),fill:"more"===t?"outlined":"filled"}}])},396971,e=>{e.i(227319).f,e.s([])},593736,e=>{var t=e.i(843476),i=e.i(997053);let a=i.U.svg.withConfig({displayName:"IconPlay.styles__Root",componentId:"sc-2afb8061-0"})``;e.s(["f",0,e=>{let i=e.color??"currentColor";return(0,t.jsxs)(a,{className:e.className,"data-testid":"icon-play-root",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:[(0,t.jsx)("title",{children:"media-play"}),(0,t.jsx)("g",{fill:i,children:(0,t.jsx)("path",{d:"M6 4V20L20 12L6 4Z",stroke:i,strokeWidth:"2",strokeLinecap:"square",fill:"none"})})]})}],593736)},239178,e=>{e.i(593736).f,e.s([])},510716,980367,e=>{var t=e.i(843476),i=e.i(770703),a=e.i(997053),n=e.i(726029);let r=a.U.div.withConfig({displayName:"SiteMarkdown.styles__Root",componentId:"sc-f615d01e-0"})`
  ${n.b}
  box-sizing: border-box;
  max-width: 100%;
  overflow-wrap: break-word;

  p {
    margin: 0 0 20px;
  }

  /*
   * _reset.scss nimmt den Listen die Punkte — siteProse gibt sie zurück:
   * Wabenmarke an Aufzählungen (#1959), Nummern fett in Textfarbe, Einzug und
   * Abstand der Punkte aus dem Theme (#2235, vorher 26 + 6 px und 8 px).
   * Hier nur der Abstand zum Absatz davor und danach (prose-Rhythmus).
   */
  ul,
  ol {
    margin: 1.25em 0;
  }

  li > ul,
  li > ol {
    margin-bottom: 0;
  }

  li > p {
    margin: 0;
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
    /* #2226: Abstände aus der Theme-Skala (vorher 48 px darüber, 32 px darunter) */
    margin: ${({theme:e})=>`${e.margin.big} 0 ${e.margin.large}`};
  }

  /*
   * #2226: der erste Inhalt beginnt an der Blockkante — das Sektionspolster
   * setzt den Abstand. Doppelte Klasse: die Regel unten (> :first-child)
   * wog weniger als die h2-Regel, die Überschrift behielt ihre 48 px.
   */
  && > :first-child {
    margin-top: 0;
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
`,s=(0,i.default)(()=>e.A(207029).then(e=>e.SiteMarkdownContent),{loadableGenerated:{modules:[975804]}});e.s(["f",0,function({content:e,rendered:i,eagerFirstImage:a,pageHeading:n,imageAlt:o,remarkPlugins:l,dataTestId:d,className:h}){let c=void 0!==i;return(0,t.jsx)(r,{className:h,"data-testid":d,"data-rendered":c?"server":"client",children:c?i:(0,t.jsx)(s,{content:e,eagerFirstImage:a,pageHeading:n,imageAlt:o,remarkPlugins:l})})}],980367),e.s([],510716)},468864,e=>{var t=e.i(271645);let i={width:0,height:0,offsetX:0,offsetY:0};e.s(["f",0,(e,a)=>{let[n,r]=(0,t.useState)(i);return(0,t.useEffect)(()=>{let t=e.current,i=a?.current;if(!t||!i)return;let n=()=>{let e=i.getBoundingClientRect(),a=t.getBoundingClientRect(),n=Math.max(i.offsetWidth,Math.ceil(e.width-.01)),s=Math.max(i.offsetHeight,Math.ceil(e.height-.01));if(n<=0||s<=0)return;let o={width:n,height:s,offsetX:a.left-e.left,offsetY:a.top-e.top};r(e=>e.width===o.width&&e.height===o.height&&.5>Math.abs(e.offsetX-o.offsetX)&&.5>Math.abs(e.offsetY-o.offsetY)?e:o)};if(n(),"u"<typeof ResizeObserver)return;let s=new ResizeObserver(n);return s.observe(i),s.observe(t),()=>s.disconnect()},[e,a]),n}])},597734,153120,655750,e=>{var t=e.i(843476),i=e.i(325164),a=e.i(929842);e.i(510716);var n=e.i(980367),r=e.i(247902),s=e.i(825969),o=e.i(900490),l=e.i(499911),d=e.i(997053),h=e.i(726029),c=e.i(474704);let f=d.U.article.withConfig({displayName:"MediaText.styles__Root",componentId:"sc-4af3d1c-0"})`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  align-items: center;
  gap: ${c.y.gutter};
  width: 100%;
  /* Kein globaler border-box-Reset (_reset.scss): Breite plus Polster der
     Hervorhebung dürfen nicht über die Spalte hinausragen. */
  box-sizing: border-box;

  @media (min-width: ${c.y.breakpoints.md}) {
    ${({$withImage:e})=>e&&d.m`
        grid-template-columns: repeat(2, minmax(0, 1fr));
      `}
  }

  ${({$withImage:e,$imagePosition:t})=>e&&"left"===t&&d.m`
      @media (min-width: ${c.y.breakpoints.md}) {
        > figure {
          order: -1;
        }
      }
    `}

  ${({$highlight:e,theme:t})=>e&&d.m`
      padding: ${t.margin.large};
      border: 1px solid ${t.palette.site.border};
      border-radius: 24px;
      background: linear-gradient(
        to bottom,
        ${t.palette.site.tint},
        ${t.palette.site.card}
      );

      @media (min-width: ${c.y.breakpoints.md}) {
        padding: ${t.padding.large};
      }
    `}
`,p=d.U.div.withConfig({displayName:"MediaText.styles__TextColumn",componentId:"sc-4af3d1c-1"})`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.margin.small};
  min-width: 0;
`,m=d.U.h2.withConfig({displayName:"MediaText.styles__Headline",componentId:"sc-4af3d1c-2"})`
  ${h.S}
`,g=d.U.div.withConfig({displayName:"MediaText.styles__Prose",componentId:"sc-4af3d1c-3"})`
  /* prose-Abstand wie siteProse (1.25em = 20 px bei 16 px Schrift) */
  > * + * {
    margin-top: 1.25em;
  }

  /* doppelte Klasse: schlägt die prose-Abstände von SiteMarkdown (p + ul) */
  && {
    p:has(+ ul),
    p:has(+ ol) {
      margin-bottom: 0;
    }

    ul,
    ol {
      margin: 0;
    }

    p + ul,
    p + ol,
    li > ul,
    li > ol {
      margin-top: ${({theme:e})=>e.margin.extrasmall};
    }
  }

  /*
   * #2196: Zwischenüberschriften eine Stufe kleiner (Größe der h4 aus
   * SiteMarkdown, 20 px) — neben dem Element waren 24/30 px zu wuchtig.
   * Doppelte Klasse schlägt die Größe aus SiteMarkdown; Balken bleibt.
   */
  ${({$compactSubheadings:e})=>e&&d.m`
      && h3:not([data-render-as]),
      && [data-render-as='3'] {
        font-size: 20px;
        line-height: 1.25;
      }
    `}
`,u=d.U.div.withConfig({displayName:"MediaText.styles__CtaWrapper",componentId:"sc-4af3d1c-4"})`
  margin-top: ${({theme:e})=>e.margin.small};
  ${({$cta:e})=>(0,o.h)(e??{tone:"light",fill:"filled"})}
`,x=d.U.figure.withConfig({displayName:"MediaText.styles__Figure",componentId:"sc-4af3d1c-5"})`
  margin: 0;
  min-width: 0;

  img {
    display: block;
    width: 100%;
    height: auto;
    border-radius: 24px;
    overflow: hidden;
  }
`;e.s(["V",0,u,"p",0,x,"K",0,m,"c",0,g,"F",0,f,"v",0,p],153120);var b=e.i(271645);e.i(710788);var $=e.i(599858),v=e.i(808847),w=e.i(795662),y=e.i(647835);e.i(311046);var k=e.i(650529),j=e.i(859146),C=e.i(355351),_=e.i(547905);let z=d.U.figure.withConfig({displayName:"HexFigure.styles__Root",componentId:"sc-5a6f9167-0"})`
  --hex-figure-halo: ${({theme:e})=>(0,h.N)("halo",e.palette.site.tint)};
  position: relative;
  isolation: isolate;
  margin: 0;
  min-width: 0;
`,S=d.q`
  from { transform: translateY(-${24}px); }
  to { transform: translateY(${24}px); }
`,I=d.U.div.withConfig({displayName:"HexFigure.styles__Frame",componentId:"sc-5a6f9167-1"})`
  position: relative;
  width: ${100}%;
  aspect-ratio: ${_.w};
  margin-left: ${({$side:e})=>"right"===e?"auto":"0"};
  overflow: hidden;
  ${_.q}

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
        animation: ${S} linear both;
        animation-timeline: view();
      }
    }
  }
`,N=d.q`
  from { opacity: 0; }
  to { opacity: 1; }
`,M=d.U.svg.withConfig({displayName:"HexFigure.styles__Halo",componentId:"sc-5a6f9167-2"})`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  display: block;
  width: 100%;
  height: 100%;
  overflow: visible;
  pointer-events: none;
  animation: ${N} 400ms ease-out both;

  path[data-rounded='true'],
  path[data-full='true'] {
    opacity: var(--alpha);
  }

  [data-partial='true'] {
    ${_.t}
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,P=d.q`
  from { opacity: 1; transform: scale(1); }
  to { opacity: 0; transform: scale(0.4); }
`,R=d.U.svg.withConfig({displayName:"HexFigure.styles__Cover",componentId:"sc-5a6f9167-3"})`
  position: absolute;
  inset: 0;
  display: none;
  width: 100%;
  height: 100%;
  pointer-events: none;

  ${z}[data-state='idle'] &,
  ${z}[data-state='running'] & {
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

  ${z}[data-state='running'] & path {
    animation: ${P} ${450}ms ease-in var(--delay, 0ms) both;
  }
`,U=(e,t)=>{let i=+e,a="right"===t?e-i:0;return{left:a,top:0,right:a+i,bottom:i*j.q}},B=({src:e,alt:a,priority:n,side:r,dataTestId:s})=>{let o=(0,b.useRef)(null),l=(0,w.f)(o),d=(0,b.useMemo)(()=>((e,t)=>{if(e<=0)return[];let i=U(e,t),a=(i.left+i.right)/2;return(0,v.a)(e,i.bottom,(0,C.L)(e),[i],e=>{var t,a,n;let r,s,o,l;return t=e.size/2,a=e.cx,n=e.cy,s=(r=(i.right-i.left)/2+t)*j.q,o=Math.abs(a-(i.left+i.right)/2),l=Math.abs(n-(i.top+i.bottom)/2),o<=r&&l<=s-s/(2*r)*o},k.V).filter(e=>"right"===t?e.cx<a:e.cx>a)})(l,r),[l,r]),{state:h}=(0,y.f)(o,1470,.25),c=U(l,r),f=c.right-c.left,p=(0,b.useMemo)(()=>n?[]:function(e,t,i){if(e<=0||t<=0)return[];let a=Math.max(4,Math.round(e/56)),n=(0,C.T)(e,t,a),r="right"===i?0:e,s=t/2,o=Math.max(1,...n.map(e=>Math.hypot(e.cx-r,e.cy-s)));return n.map(e=>{let t=Math.hypot(e.cx-r,e.cy-s)/o*900,i=((0,k.k)(e)+1)/2*120;return{...e,delay:Math.round(t+i)}})}(f,c.bottom,r),[n,f,c.bottom,r]);return(0,t.jsxs)(z,{ref:o,"data-testid":s,"data-shape":"hex","data-side":r,"data-loading":n?"eager":"lazy","data-state":n?"static":h,children:[d.length>0&&(0,t.jsx)(M,{"aria-hidden":"true",focusable:"false","data-testid":`${s}-halo-canvas`,children:(0,t.jsx)($.f,{tiles:d,color:"tint",fill:"var(--hex-figure-halo)",dataTestId:`${s}-halo`})}),(0,t.jsxs)(I,{$side:r,"data-testid":`${s}-frame`,children:[(0,t.jsx)(i.default,{src:e,alt:a,width:704,height:396,sizes:"(max-width: 768px) 100vw, 50vw",loading:n?"eager":"lazy",fetchPriority:n?"high":void 0}),p.length>0&&(0,t.jsx)(R,{viewBox:`0 0 ${Math.round(f)} ${Math.round(c.bottom)}`,preserveAspectRatio:"none","aria-hidden":"true",focusable:"false","data-testid":`${s}-cover`,"data-tiles":p.length,children:p.map(e=>(0,t.jsx)("path",{d:(0,C.H)(e),style:{"--delay":`${e.delay}ms`}},e.key))})]})]})},A={[a.D.h1]:"h1",[a.D.h2]:"h2",[a.D.h3]:"h3",[a.D.h4]:"h4",[a.D.h5]:"h5"};e.s(["f",0,e=>{let{headline:d,paragraphs:h,renderedParagraphs:c,imageSrc:b,imageAlt:$,imagePosition:v="right",imageShape:w="rounded",imagePriority:y=!1,headlineImportance:k=a.D.h2,ctaText:j,ctaHref:C,highlight:_=!1,media:z,onCtaClick:S,compactSubheadings:I=!1,surface:N="white",className:M,dataTestId:P="media-text"}=e,R=null!=z,U=(0,o.g)(N,"main"),T=R||!!b;return(0,t.jsxs)(f,{className:M,"data-testid":P,"data-image-position":T?v:"none","data-highlight":_?"true":"false",$highlight:_,$withImage:T,$imagePosition:v,children:[(0,t.jsxs)(p,{$withImage:T,children:[(0,t.jsx)(m,{as:A[k]??"h2","data-testid":`${P}-headline`,children:d}),(0,t.jsx)(g,{$compactSubheadings:I,"data-compact-subheadings":I?"true":void 0,children:h.map((e,i)=>(0,t.jsx)(n.f,{content:e,rendered:c?.[i],dataTestId:`${P}-paragraph`},i))}),j&&C&&(0,t.jsx)(u,{$cta:U,"data-cta-tone":U.tone,"data-cta-fill":U.fill,children:(0,t.jsx)(r.f,{href:C,modifier:U.modifier,icon:(0,t.jsx)(l.f,{}),iconAlign:s.W.RIGHT,onClick:S,dataTestId:`${P}-cta`,children:j})})]}),R&&(0,t.jsx)(x,{"data-testid":`${P}-media`,"data-shape":"element",children:z}),!R&&b&&"hex"===w&&(0,t.jsx)(B,{src:b,alt:$??d,priority:y,side:v,dataTestId:`${P}-image`}),!R&&b&&"hex"!==w&&(0,t.jsx)(x,{"data-testid":`${P}-image`,"data-shape":"rounded","data-loading":y?"eager":"lazy",children:(0,t.jsx)(i.default,{src:b,alt:$??d,width:704,height:396,sizes:"(max-width: 768px) 100vw, 50vw",loading:y?"eager":"lazy",fetchPriority:y?"high":void 0})})]})}],655750),e.s([],597734)},4185,566457,e=>{var t=e.i(843476),i=e.i(325164);e.i(945304);var a=e.i(977194);e.i(429307);var n=e.i(159255);e.i(836326);var r=e.i(690204),s=e.i(997053),o=e.i(726029),l=e.i(547905);let d="120px",h=s.U.article.withConfig({displayName:"PartnerCard.styles__Root",componentId:"sc-8fae0cdf-0"})`
  ${(0,o.O)(!0)}
  /* #2176: mit Website ist die ganze Karte der Link (gestreckter Name-Link) */
  ${o.Q}
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
      grid-template-columns: ${d} minmax(0, 1fr);
      gap: ${t.margin.default};
      align-items: center;
      padding: ${t.padding.default};
    `}
`,c=s.U.div.withConfig({displayName:"PartnerCard.styles__RowLogo",componentId:"sc-8fae0cdf-1"})`
  position: relative;
  box-sizing: border-box;
  width: ${d};
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
`,f=s.U.div.withConfig({displayName:"PartnerCard.styles__RowBody",componentId:"sc-8fae0cdf-2"})`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({theme:e})=>e.margin.extrasmall};
  min-width: 0;
`,p=s.U.span.withConfig({displayName:"PartnerCard.styles__Role",componentId:"sc-8fae0cdf-3"})`
  ${o.M}
  gap: ${({theme:e})=>e.margin.extrasmall};

  &::before {
    content: '';
    flex: none;
    width: ${"8px"};
    height: ${"8px"};
    background: ${({theme:e})=>e.palette.site.green};
    ${l.p}
  }
`,m=s.U.div.withConfig({displayName:"PartnerCard.styles__LogoWrapper",componentId:"sc-8fae0cdf-4"})`
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
`,u=s.U.div.withConfig({displayName:"PartnerCard.styles__Body",componentId:"sc-8fae0cdf-6"})`
  ${o.H}
  display: flex;
  flex-direction: column;
  gap: 24px;
`,x=s.U.div.withConfig({displayName:"PartnerCard.styles__CheckWrapper",componentId:"sc-8fae0cdf-7"})`
  display: flex;
  align-items: flex-start;
  min-height: 39px;
`,b=s.U.h3.withConfig({displayName:"PartnerCard.styles__Name",componentId:"sc-8fae0cdf-8"})`
  ${o.Z}
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
`,$=s.U.p.withConfig({displayName:"PartnerCard.styles__Description",componentId:"sc-8fae0cdf-9"})`
  ${o.n}
  margin: 0;
`;var v=e.i(437992);e.s(["f",0,e=>{let{companyName:s,logoUrl:o,logoAlt:l,description:d,websiteUrl:w,variant:y="full",role:k,headingLevel:j=3,className:C,dataTestId:_="partner-card"}=e,z="logo"===y&&!!o,S=(0,t.jsx)(b,{as:2===j?"h2":"h3","data-testid":`${_}-name`,"data-heading-level":j,children:w?(0,t.jsx)(n.f,{href:w,target:"_blank",stretched:!0,dataTestId:`${_}-link`,children:s}):s}),I=d?(0,t.jsx)($,{"data-testid":`${_}-description`,children:d}):null;if("row"===y)return(0,t.jsxs)(h,{className:C,"data-testid":_,"data-variant":"row","data-linked":w?"true":"false",$row:!0,children:[w&&(0,t.jsx)(r.f,{dataTestId:`${_}-halo`}),o&&(0,t.jsx)(c,{children:(0,t.jsx)(i.default,{src:o,alt:l||`${s} logo`,fill:!0,sizes:"120px","data-testid":`${_}-logo`})}),(0,t.jsxs)(f,{children:[k&&(0,t.jsx)(p,{"data-testid":`${_}-role`,children:k}),S,I]})]});let N=o?(0,t.jsx)(i.default,{src:o,alt:l||`${s} logo`,fill:!0,sizes:"(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw","data-testid":`${_}-logo`}):null;return(0,t.jsxs)(h,{className:C,"data-testid":_,"data-variant":z?"logo":"full","data-linked":w?"true":"false",children:[w&&(0,t.jsx)(r.f,{dataTestId:`${_}-halo`}),N&&(0,t.jsx)(m,{children:z&&w?(0,t.jsx)(g,{href:w,...v.d,"aria-label":s,"data-testid":`${_}-link`,children:N}):N}),(0,t.jsx)(u,{children:!z&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(x,{children:(0,t.jsx)(a.c,{name:"check",tone:"green",shape:"hex",dataTestId:`${_}-check`})}),(0,t.jsxs)("div",{children:[S,I]})]})})]})}],566457),e.s([],4185)},407030,382445,e=>{var t=e.i(843476),i=e.i(271645);e.i(710788);var a=e.i(363451);e.i(311046);var n=e.i(499881),r=e.i(997053),s=e.i(547905),o=e.i(964372);let l=(e,t)=>e?.[t]?.placement==="inner"?"1px":"0",d=r.U.section.withConfig({displayName:"SiteBand.styles__Root",componentId:"sc-f642966b-0"})`
  position: relative;
  isolation: isolate;
  display: flow-root;
  background-color: transparent;
  ${({theme:e,$surface:t})=>((e,t)=>{let i=e.palette.site;switch(t){case"tint":return r.m`
        --site-surface: ${i.tint};
        --site-card-border: transparent;
        --site-halo: color-mix(in srgb, ${i.tint} 50%, ${i.card});
      `;case"dark":return r.m`
        --site-surface: ${i.navy};
        --site-heading: #ffffff;
        --site-text: color-mix(in srgb, #ffffff 85%, transparent);
        --site-muted: color-mix(in srgb, #ffffff 70%, transparent);
        --site-accent: color-mix(in srgb, ${i.green} 70%, #ffffff);
        --site-card-border: transparent;
        --site-border: color-mix(in srgb, #ffffff 24%, transparent);
        --site-halo: color-mix(in srgb, #ffffff 12%, transparent);
      `;default:return r.m``}})(e,t)}

  ${({$surface:e,$gradient:t,$edges:i})=>"white"!==e&&!t&&r.m`
      &::before {
        content: '';
        position: absolute;
        inset: 0;
        z-index: -2;
        background: var(--site-surface);
        box-shadow: 0 0 0 100vmax var(--site-surface);
        clip-path: inset(${l(i,"top")} -100vmax ${l(i,"bottom")});
        pointer-events: none;
      }
    `}

  /*
   * #2228: Verlauf — ein Schatten kann keinen Verlauf fortsetzen, deshalb
   * steht die Fläche selbst über die Fensterbreite (mittig, 100vw); der
   * Verlauf läuft so über die ganze Breite wie im Fuß.
   */
  ${({theme:e,$gradient:t,$edges:i})=>t&&r.m`
      &::before {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 50%;
        width: 100vw;
        transform: translateX(-50%);
        z-index: -2;
        background: ${(0,o.f)(e,t)};
        clip-path: inset(${l(i,"top")} 0 ${l(i,"bottom")});
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

  /*
   * Wabenrand (#1188): das Band ist Host; Polster reserviert die volle Randzone
   * vor der Messung (CLS 0). Die Zone zählt als Sektionspolster (#2226,
   * Entscheidung 1): die Spalte im CmsBlockRenderer zieht sie von ihrem
   * Polster ab, das Band legt deshalb nichts darüber hinaus dazu.
   */
  ${({$edges:e})=>(0,s.n)(e)}
  ${({$edges:e})=>(0,s.o)("top","0px",e)}
  ${({$edges:e})=>(0,s.o)("bottom","0px",e)}
`,h=(0,i.createContext)(null),c=i.default.forwardRef(function({surface:e,gradient:r,edges:s,headerBg:o,dataTestId:l="site-band",dataAttributes:c,children:f},p){let m=(0,n.N)(s)?s:void 0,g=(0,i.useRef)(null),u=(0,i.useCallback)(e=>{g.current=e,"function"==typeof p?p(e):p&&(p.current=e)},[p]);return(0,t.jsx)(h.Provider,{value:g,children:(0,t.jsxs)(d,{ref:u,...c,$surface:e,$gradient:r,$edges:m,"data-testid":l,"data-surface":e,"data-gradient":r?`${r.from}-${r.to}-${r.direction}`:void 0,"data-header-bg":o??c?.["data-header-bg"]??void 0,children:[m&&(0,t.jsx)(a.f,{edges:m,dataTestId:`${l}-edge`}),f]})})});e.s(["t",0,c,"J",0,()=>(0,i.useContext)(h)],382445),e.s([],407030)},951693,659188,e=>{var t=e.i(843476),i=e.i(997053),a=e.i(726029),n=e.i(474704);let r=i.U.header.withConfig({displayName:"SiteSectionHeader__Root",componentId:"sc-37a85c34-0"})`
  display: flex;
  /* globals.css gibt jedem header die Seitenfarbe; auf Karten und Bändern transparent bleiben */
  background: transparent;
  flex-direction: column;
  gap: ${({theme:e})=>e.margin.small};
  /* #2226: Lesebreite der Textvorgabe (8 + 2) in der Spalte des Blocks; außerhalb des Renderers 768 px */
  max-width: ${(0,n.U)(a.z)};
  ${({$align:e})=>"center"===e&&i.m`
      margin-inline: auto;
      text-align: center;
    `}
`,s=i.U.h2.withConfig({displayName:"SiteSectionHeader__H2",componentId:"sc-37a85c34-1"})`
  ${a.S}
`,o=i.U.div.withConfig({displayName:"SiteSectionHeader__Lead",componentId:"sc-37a85c34-2"})`
  ${a.b}
  white-space: pre-line;
`;e.s(["f",0,function({headline:e,description:i,align:a="left",headingLevel:n=2,dataTestId:l}){if(!e&&!i)return null;let d=i?i.split(/\n\s*\n/).map(e=>e.trim()).filter(Boolean):[];return(0,t.jsxs)(r,{$align:a,"data-testid":l,"data-align":a,children:[e&&(0,t.jsx)(s,{as:1===n?"h1":"h2","data-testid":l?`${l}-headline`:void 0,children:e}),d.length>0&&(0,t.jsx)(o,{"data-testid":l?`${l}-description`:void 0,children:d.map((e,i)=>(0,t.jsx)("p",{children:e},i))})]})}],659188),e.s([],951693)},47309,e=>{var t=e.i(271645);let i=[],a=(0,t.createContext)(i),n=a.Provider;e.s(["m",0,n,"I",0,i,"C",0,()=>(0,t.useContext)(a)])},755010,e=>{var t=e.i(271645),i=e.i(618566),a=e.i(476999),n=e.i(14431),r=e.i(71845);let s=new Set(["cta","submit","success","error"]);class o extends t.default.Component{state={failed:!1};static getDerivedStateFromError(){return{failed:!0}}componentDidCatch(e,t){(0,n.v)({category:"cms-animation",message:"element-error",data:{element:this.props.element}}),(0,n.i)(e,{componentStack:t.componentStack})}render(){return this.state.failed?this.props.fallback:this.props.children}}e.s(["A",0,o,"l",0,function(e){let o=(0,i.usePathname)(),l=(0,t.useRef)(new Set);return(0,t.useCallback)(t=>{if(!s.has(t)){if(l.current.has(t))return;l.current.add(t)}(0,a.q)(o||"/",r.v,{element:e,action:t}),(0,n.v)({category:"cms-animation",message:t,data:{element:e}})},[o,e])}])},691423,e=>{var t=e.i(345712);let i=t.p.tabletportrait,a=`(max-width: ${i}px)`,n=e=>e>0&&e<=i,r=t.G.margin.default,s="five",o="bodysmall",l={headline:{fontSize:t.G.font.headline[s].mobile.fontSize,lineHeight:t.G.font.headline[s].mobile.lineHeight},text:{fontSize:t.G.font.text[o].mobile.fontSize,lineHeight:t.G.font.text[o].mobile.lineHeight},cta:{fontSize:t.G.font.text[o].mobile.fontSize,lineHeight:t.G.font.text[o].mobile.lineHeight}},d=e=>e&&(e.depth??"hero")==="hero"?{...e,depth:"section"}:e,h=(e,t)=>"number"==typeof e&&Number.isFinite(e)?Math.min(100,Math.max(0,e)):t,c=e=>({x:h(e?.x,50),y:h(e?.y,50)});e.s(["x",0,{desktop:{height:"calc(100svh - var(--page-header-offset, 56px))",fallback:"calc(100vh - var(--page-header-offset, 56px))",min:480,max:1e3},phone:{height:"82svh",fallback:"82vh",min:480,max:760}},"J",0,{hyphens:"auto",limitChars:"12 6 6"},"h",0,a,"i",0,r,"j",0,l,"v",0,c,"W",0,e=>`height: calc(${e.fallback} + var(--edge-padding, 0px));
height: calc(${e.height} + var(--edge-padding, 0px));
min-height: calc(${e.min}px + var(--edge-padding, 0px));
max-height: calc(${e.max}px + var(--edge-padding, 0px));`,"A",0,e=>{let{x:t,y:i}=c(e);return`${t}% ${i}%`},"V",0,(e,t)=>{if(!n(t))return e;let i={};for(let t of Object.keys(e)){let a=e[t];a&&(i[t]=d(a))}return i},"k",0,n])},795662,e=>{var t=e.i(271645);e.s(["f",0,e=>{let[i,a]=(0,t.useState)(0);return(0,t.useEffect)(()=>{let t=e.current;if(!t)return;let i=()=>{let e=t.clientWidth;a(t=>t===e?t:e)};if(i(),"u"<typeof ResizeObserver)return;let n=new ResizeObserver(i);return n.observe(t),()=>n.disconnect()},[e]),i}])},197908,e=>{var t=e.i(178446);let i=/href$/i,a=/^(null|undefined)$/i;function n(e){if("string"!=typeof e)return;let t=e.trim();if(!(""===t||a.test(t)))return t}e.s(["J",0,n,"n",0,function(e){return{...e,props:function e(a,r){if("string"==typeof a){if(null===r||!i.test(r))return a;let e=n(a);return void 0===e?void 0:(0,t.f)(e)}return Array.isArray(a)?a.map(t=>e(t,null)):a&&"object"==typeof a?Object.fromEntries(Object.entries(a).map(([t,i])=>[t,e(i,t)])):a}(e.props,null)}}])},437772,e=>{function t(e,t){if(!e)return;if(t in e)return e[t];let i=Object.keys(e)[0];return void 0===i?void 0:e[i]}function i(e,i){return t(e,i)}e.s(["h",0,function(e,t,a,n,r){if(e)return i(e[void 0===r?`${a}:${n}`:`${a}:${n}:${r}`],t)},"z",0,i,"r",0,t])},618322,e=>{var t=e.i(627430),i=e.i(989969),a=e.i(12780),n=e.i(913148),r=e.i(188077);let s=["tint","white"],o=e=>a.k[e.type].fields.some(e=>"surface"===e.name),l=(e,t)=>({...e,props:{...e.props,surface:t}});function d(e){let t=[...e],a=new Map;for(let e=0;e<t.length;e++){let d=t[e];if(!o(d)||(0,n.s)(d))continue;let h=e>0?(0,i.P)(t[e-1],"bottom"):null,c=e+1<t.length?(0,i.P)(t[e+1],"top"):null,f=e+1<t.length?(0,r.X)(c):r.V,p=e=>{let t=(0,r.X)((0,i.P)(e,"top")),a=(0,r.X)((0,i.P)(e,"bottom")),n=(0,r.X)(h);return"page"!==t&&null!==t&&t===n||"page"!==a&&null!==a&&a===f};if(!p(d))continue;let m=s.map(e=>l(d,e)).find(e=>!p(e));m&&(t[e]=m,a.set(d.id,m.props.surface))}let d=[];for(let e=0;e<t.length;e++){let a=(0,i.P)(t[e],"bottom");e+1<t.length?null!==a&&(0,r.x)(a,(0,i.P)(t[e+1],"top"))&&d.push({upperId:t[e].id,lowerId:t[e+1].id,color:a}):null!==a&&(0,r.X)(a)===r.V&&d.push({upperId:t[e].id,lowerId:null,color:a})}return{blocks:t,auto:a,clashes:d}}e.s(["S",0,function(e){let a=d(e),n=a.blocks[a.blocks.length-1],s=n?(0,i.P)(n,"bottom"):null;return n&&null!==s?a.clashes.some(e=>null===e.lowerId)?{placement:"inner",color:s,depth:"section",style:"strom",seed:(0,t.Z)(`${n.id}:footer`),own:"navyDark",contrast:(0,r.S)(s)}:s:null},"M",0,function(e){let t=new Map(e.blocks.map(e=>[e.id,e])),i=new Set;for(let a of e.clashes){let e=[a.upperId,a.lowerId].filter(e=>null!==e),r=e.filter(e=>{let i=t.get(e);return!!i&&(0,n.s)(i)});for(let t of r.length>0?r:e)i.add(t)}return i},"E",0,d])},62574,687312,529080,155892,e=>{let t="cubic-bezier(0.2, 0.8, 0.2, 1)";e.s(["S",0,t,"B",0,"cubic-bezier(0.65, 0, 0.35, 1)"],62574);var i=e.i(843476),a=e.i(271645);function n(e){let t=Array.from(e),i=t.filter(e=>e>="0"&&e<="9").length;return t.map(e=>e>="0"&&e<="9"?(i-=1,{kind:"digit",digit:Number(e),order:i}):{kind:"char",char:e})}e.s(["S",0,e=>/\d/.test(e),"B",0,e=>(e.match(/\d/g)??[]).length,"p",0,n],687312);var r=e.i(997053),s=e.i(994244);let o=r.U.span.withConfig({displayName:"Odometer.styles__Root",componentId:"sc-6aa08d55-0"})`
  position: relative;
  display: inline-flex;
  align-items: flex-start;
  line-height: 1;
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
`,l=r.U.span.withConfig({displayName:"Odometer.styles__Text",componentId:"sc-6aa08d55-1"})`
  ${s.p}
`,d=r.U.span.withConfig({displayName:"Odometer.styles__Visual",componentId:"sc-6aa08d55-2"})`
  display: inline-flex;
  align-items: flex-start;
`,h=r.U.span.withConfig({displayName:"Odometer.styles__Char",componentId:"sc-6aa08d55-3"})`
  display: inline-block;
  height: 1em;
  white-space: pre;
`,c=r.U.span.withConfig({displayName:"Odometer.styles__Wheel",componentId:"sc-6aa08d55-4"})`
  display: inline-block;
  height: 1em;
  overflow: hidden;
`,f=r.U.span.withConfig({displayName:"Odometer.styles__Strip",componentId:"sc-6aa08d55-5"})`
  display: flex;
  flex-direction: column;
  transform: translateY(${({$digit:e})=>-(10+e)}em);

  > span {
    display: block;
    height: 1em;
  }

  [data-state='idle'] > ${d} > ${c} > & {
    transform: translateY(0);
  }

  [data-state='running'] > ${d} > ${c} > & {
    ${({$delay:e,$duration:i})=>r.m`
      transition: transform ${i}ms ${t} ${e}ms;
    `}
  }
`,p=Array.from({length:20},(e,t)=>t%10);e.s(["f",0,({value:e,state:t,delay:r=0,stagger:s=90,duration:m=1200,className:g,dataTestId:u="odometer"})=>{let x=(0,a.useMemo)(()=>n(e),[e]),b=x.filter(e=>"digit"===e.kind).length;return(0,i.jsxs)(o,{className:g,"data-testid":u,"data-state":t,"data-digits":b,children:[(0,i.jsx)(l,{children:e}),(0,i.jsx)(d,{"aria-hidden":"true",children:x.map((e,t)=>"digit"===e.kind?(0,i.jsx)(c,{"data-part":"wheel",children:(0,i.jsx)(f,{$digit:e.digit,$delay:r+e.order*s,$duration:m,children:p.map((e,t)=>(0,i.jsx)("span",{children:e},t))})},t):(0,i.jsx)(h,{children:e.char},t))})]})}],529080),e.s([],155892)},119093,e=>{let t=(e,t)=>parseInt(e.slice(t,t+2),16);e.s(["f",0,(e,i,a)=>{if(!(a>0))return e;if(a>=1)return i;let n="#";for(let r of[1,3,5]){let s=t(e,r);n+=Math.round(s+(t(i,r)-s)*a).toString(16).padStart(2,"0")}return n}])},178446,e=>{e.s(["f",0,function(e){if(!e.startsWith("/")||e.startsWith("//"))return e;let t=e.search(/[?#]/),i=-1===t?e:e.slice(0,t),a=-1===t?"":e.slice(t);return`${i.endsWith("/")||i.slice(i.lastIndexOf("/")+1).includes(".")?i:`${i}/`}${a}`}])}])})();