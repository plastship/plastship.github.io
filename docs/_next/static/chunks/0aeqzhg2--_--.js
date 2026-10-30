(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,371010,e=>{var t=e.i(843476),i=e.i(33180);e.i(677231);var a=e.i(302222),n=e.i(885895);e.i(821194);var r=e.i(99222),s=e.i(12780),l=e.i(507924),d=e.i(989969),o=e.i(284248);e.i(816017);var c=e.i(217997),p=e.i(261604),h=e.i(370891),m=e.i(114009),f=e.i(997053),g=e.i(726029);let u=f.U.div.withConfig({displayName:"CmsPageView.styles__PageRoot",componentId:"sc-4146e075-0"})`
  position: relative;
`,x=f.U.div.withConfig({displayName:"CmsPageView.styles__PreviewBar",componentId:"sc-4146e075-1"})`
  position: sticky;
  top: 56px;
  z-index: 150;
  padding: 8px 16px;
  text-align: center;
  font-family: ${({theme:e})=>e.font.secondaryFamily};
  font-size: 14px;
  font-weight: 600;
  color: ${({theme:e})=>e.palette.default.primary};
  background: ${({theme:e})=>e.palette.default.warning};
`,y=f.U.p.withConfig({displayName:"CmsPageView.styles__LegalLanguageNotice",componentId:"sc-4146e075-2"})`
  box-sizing: border-box;
  width: 100%;
  max-width: calc(${g.z} - 2 * ${({theme:e})=>e.padding.default});
  margin: ${({theme:e})=>e.margin.default} auto ${({theme:e})=>e.margin.big};
  padding: ${({theme:e})=>e.padding.small} ${({theme:e})=>e.padding.default};
  border-left: 3px solid ${({theme:e})=>e.palette.default.primary};
  font-family: ${({theme:e})=>e.font.secondaryFamily};
  font-size: ${({theme:e})=>e.font.text.bodysmall.desktop.fontSize};
  line-height: ${({theme:e})=>e.font.text.bodysmall.desktop.lineHeight};
  color: ${({theme:e})=>e.palette.default.primary};
`,w=f.U.div.withConfig({displayName:"CmsPageView.styles__AiNotice",componentId:"sc-4146e075-3"})`
  box-sizing: border-box;
  width: 100%;
  max-width: calc(${g.z} - 2 * ${({theme:e})=>e.padding.default});
  margin: ${({theme:e})=>e.margin.small} auto;
  padding: 0 ${({theme:e})=>e.padding.default};
  color: ${({theme:e})=>e.palette.default.primary};
`;e.s(["default",0,function({page:e,markdown:f,pageHeadingIds:g,preview:b=!1,previewLocale:$=null,machineLocales:v,machineUiLocales:k,structuredData:j}){let{language:_}=(0,n.N)(),{tr:C}=(0,r.f)(_),N=e.blocks[0],I=!!N&&!0===s.k[N.type].fullBleed,z=$??(0,l.g)(_);return(0,t.jsx)(o.R,{preview:$,children:(0,t.jsxs)(i.f,{paddingTop:!I,footerEdge:(0,p.R)(e.slug)?null:(0,d.w)(e.blocks),children:[j&&(0,t.jsx)(c.f,{data:j}),(0,t.jsxs)(u,{"data-testid":"cms-page-root","data-slug":e.slug,"data-status":e.status,"data-preview":b?"true":"false","data-version":e.version?.id??"","data-preview-locale":$??"",children:[b&&(0,t.jsx)(x,{"data-testid":"cms-preview-bar",role:"status",children:e.version?C("cms.preview.version",{defaultValue:"Vorschau: Version vom {{date}}",date:(0,l.H)(e.version.createdAt,z)}):C("cms.preview.draft",{defaultValue:"Vorschau: Entwurf, noch nicht veröffentlicht"})}),(0,m.m)(z,v)&&(0,t.jsx)(w,{children:(0,t.jsx)(h.f,{kind:"machineTranslation",dataTestId:"cms-ai-label",originalHref:e.slug})}),k?.includes(_)&&(0,t.jsx)(w,{children:(0,t.jsx)(h.f,{kind:"machineUiTranslation",dataTestId:"cms-ai-label-ui",compact:!0})}),(0,t.jsx)(a.f,{blocks:e.blocks,locale:z,title:(0,l.u)(e.title,z),markdown:f,pageHeadingIds:g}),(0,p.R)(e.slug)&&(0,t.jsx)(y,{"data-testid":"cms-legal-language-notice",role:"note",children:C("cms.legal.bindingNotice",{defaultValue:"Verbindlich ist allein die deutsche Fassung dieser Seite. Die englische Fassung ist eine unverbindliche Höflichkeitsübersetzung; übersetzt wird sie von Hand, nie maschinell."})})]})]})})}],371010)},417068,e=>{function t(e){return"plastship-dark"===e.key}function i(e,i){return t(e)?{accent:i.accentDark,accentHover:i.accentDarkHover}:{accent:i.accent,accentHover:i.accentHover}}e.s(["j",0,t,"d",0,i,"g",0,function(e,t){let{accent:a,accentHover:n}=i(e,t);return`--button-primary-bg: ${a}; --button-primary-bg-hover: ${n};`},"w",0,function(e,a){let{accent:n}=i(e,a);return{...e,boxShadow:t(e)?e.boxShadow:a.shadow,font:{...e.font,primaryFamily:a.fontFamily,secondaryFamily:a.fontFamily},palette:{...e.palette,default:{...e.palette.default,primary:n},link:{...e.palette.link,primary:n},text:{...e.palette.text,onAccent:a.onAccent}}}}])},370891,114009,e=>{var t=e.i(843476),i=e.i(495835);e.i(821194);var a=e.i(99222);let n={assistant:{key:"ai.label.assistant",defaultValue:"KI-Assistent: Antworten werden von einer KI erzeugt und können Fehler enthalten."},voice:{key:"ai.label.voice",defaultValue:"KI-Sprachfunktion: Ihre Sprache wird per KI in Text umgewandelt, Antworten liest eine synthetische Stimme vor."},machineTranslation:{key:"ai.label.machineTranslation",defaultValue:"Diese Fassung wurde mit KI maschinell übersetzt."},analysis:{key:"ai.label.analysis",defaultValue:"KI-Analyse"},machineUiTranslation:{key:"ai.label.machineUiTranslation",defaultValue:"Die Oberfläche ist in dieser Sprache teilweise maschinell übersetzt."}},r={key:"ai.label.badge",defaultValue:"KI"},s={key:"ai.label.original",defaultValue:"Zur deutschen Originalfassung"};e.s(["Z",0,r,"N",0,s,"l",0,n,"O",0,function(e){return!!(e&&(e.aiAnalyzedAt||e.aiModel))},"m",0,function(e,t){return!!t?.includes(e)}],114009);var l=e.i(178446),d=e.i(997053);let o=d.U.span.withConfig({displayName:"AiLabel.styles__Root",componentId:"sc-107ca0c3-0"})`
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  gap: ${({theme:e})=>e.margin.extrasmall};
  font-family: ${({theme:e})=>e.font.secondaryFamily};
  font-size: ${({theme:e})=>e.font.text.caption.desktop.fontSize};
  line-height: ${({theme:e})=>e.font.text.caption.desktop.lineHeight};
  color: inherit;
`,c=d.U.span.withConfig({displayName:"AiLabel.styles__Badge",componentId:"sc-107ca0c3-1"})`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.margin.extrasmall};
  padding: 0 ${({theme:e})=>e.padding.small};
  border: 1px solid currentColor;
  border-radius: 999px;
  font-weight: 700;
  white-space: nowrap;

  svg {
    width: 1em;
    height: 1em;
  }
`,p=d.U.span.withConfig({displayName:"AiLabel.styles__Text",componentId:"sc-107ca0c3-2"})``,h=d.U.a.withConfig({displayName:"AiLabel.styles__OriginalLink",componentId:"sc-107ca0c3-3"})`
  color: inherit;
  text-decoration: underline;
`;e.s(["f",0,({kind:e,dataTestId:d,compact:m=!1,originalHref:f,className:g})=>{let{tr:u}=(0,a.f)(),x=u(n[e].key,{defaultValue:n[e].defaultValue});return(0,t.jsxs)(o,{className:g,"data-testid":d??`ai-label-${e}`,"data-kind":e,role:"note",title:m?x:void 0,"aria-label":m?x:void 0,children:[(0,t.jsxs)(c,{"data-testid":`${d??`ai-label-${e}`}-badge`,children:[(0,t.jsx)(i.f,{}),u(r.key,{defaultValue:r.defaultValue})]}),!m&&(0,t.jsx)(p,{children:x}),f&&(0,t.jsx)(h,{href:(0,l.f)(f),hrefLang:"de","data-testid":`${d??`ai-label-${e}`}-original`,children:u(s.key,{defaultValue:s.defaultValue})})]})}],370891)},396971,e=>{e.i(227319).f,e.s([])},593736,e=>{var t=e.i(843476),i=e.i(997053);let a=i.U.svg.withConfig({displayName:"IconPlay.styles__Root",componentId:"sc-2afb8061-0"})``;e.s(["f",0,e=>{let i=e.color??"currentColor";return(0,t.jsxs)(a,{className:e.className,"data-testid":"icon-play-root",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:[(0,t.jsx)("title",{children:"media-play"}),(0,t.jsx)("g",{fill:i,children:(0,t.jsx)("path",{d:"M6 4V20L20 12L6 4Z",stroke:i,strokeWidth:"2",strokeLinecap:"square",fill:"none"})})]})}],593736)},239178,e=>{e.i(593736).f,e.s([])},510716,980367,e=>{var t=e.i(843476),i=e.i(770703),a=e.i(997053),n=e.i(726029);let r=a.U.div.withConfig({displayName:"SiteMarkdown.styles__Root",componentId:"sc-f615d01e-0"})`
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
`,s=(0,i.default)(()=>e.A(207029).then(e=>e.SiteMarkdownContent),{loadableGenerated:{modules:[975804]}});e.s(["f",0,function({content:e,rendered:i,eagerFirstImage:a,pageHeading:n,imageAlt:l,remarkPlugins:d,dataTestId:o,className:c}){let p=void 0!==i;return(0,t.jsx)(r,{className:c,"data-testid":o,"data-rendered":p?"server":"client",children:p?i:(0,t.jsx)(s,{content:e,eagerFirstImage:a,pageHeading:n,imageAlt:l,remarkPlugins:d})})}],980367),e.s([],510716)},597734,655750,e=>{var t=e.i(843476),i=e.i(325164),a=e.i(929842);e.i(510716);var n=e.i(980367),r=e.i(247902),s=e.i(825969),l=e.i(499911),d=e.i(997053),o=e.i(726029),c=e.i(417068);let p=d.U.article.withConfig({displayName:"MediaText.styles__Root",componentId:"sc-4af3d1c-0"})`
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
    ${({$withImage:e})=>e&&d.m`
        grid-template-columns: repeat(2, minmax(0, 1fr));
      `}
  }

  ${({$withImage:e,$imagePosition:t})=>e&&"left"===t&&d.m`
      @media (min-width: 768px) {
        > figure {
          order: -1;
        }
      }
    `}

  ${({$highlight:e,theme:t})=>e&&d.m`
      padding: 32px;
      border: 1px solid ${t.palette.site.border};
      border-radius: 24px;
      background: linear-gradient(to bottom, ${t.palette.site.tint}, ${t.palette.site.card});

      @media (min-width: 768px) {
        padding: 48px;
      }
    `}
`,h=d.U.div.withConfig({displayName:"MediaText.styles__TextColumn",componentId:"sc-4af3d1c-1"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-width: 0;
  ${({$withImage:e})=>!e&&d.m`
      max-width: ${o.z};
    `}
`,m=d.U.h2.withConfig({displayName:"MediaText.styles__Headline",componentId:"sc-4af3d1c-2"})`
  ${o.S}
`,f=d.U.div.withConfig({displayName:"MediaText.styles__Prose",componentId:"sc-4af3d1c-3"})`
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
  ${({$compactSubheadings:e})=>e&&d.m`
      && h3:not([data-render-as]),
      && [data-render-as='3'] {
        font-size: 20px;
        line-height: 1.25;
      }
    `}
`,g=e=>d.m`
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
`,u=d.U.div.withConfig({displayName:"MediaText.styles__CtaWrapper",componentId:"sc-4af3d1c-4"})`
  margin-top: 16px;

  ${({theme:e})=>(0,c.j)(e)?g("&&"):""}
  ${g("[data-surface='dark'] &&")}
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
`;var y=e.i(271645);e.i(710788);var w=e.i(599858),b=e.i(808847),$=e.i(795662),v=e.i(647835);e.i(311046);var k=e.i(650529),j=e.i(859146),_=e.i(355351),C=e.i(547905);let N=d.U.figure.withConfig({displayName:"HexFigure.styles__Root",componentId:"sc-5a6f9167-0"})`
  --hex-figure-halo: ${({theme:e})=>(0,o.N)("halo",e.palette.site.tint)};
  position: relative;
  isolation: isolate;
  margin: 0;
  min-width: 0;
`,I=d.q`
  from { transform: translateY(-${24}px); }
  to { transform: translateY(${24}px); }
`,z=d.U.div.withConfig({displayName:"HexFigure.styles__Frame",componentId:"sc-5a6f9167-1"})`
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
        animation: ${I} linear both;
        animation-timeline: view();
      }
    }
  }
`,S=d.q`
  from { opacity: 0; }
  to { opacity: 1; }
`,U=d.U.svg.withConfig({displayName:"HexFigure.styles__Halo",componentId:"sc-5a6f9167-2"})`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  display: block;
  width: 100%;
  height: 100%;
  overflow: visible;
  pointer-events: none;
  animation: ${S} 400ms ease-out both;

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
`,A=d.q`
  from { opacity: 1; transform: scale(1); }
  to { opacity: 0; transform: scale(0.4); }
`,T=d.U.svg.withConfig({displayName:"HexFigure.styles__Cover",componentId:"sc-5a6f9167-3"})`
  position: absolute;
  inset: 0;
  display: none;
  width: 100%;
  height: 100%;
  pointer-events: none;

  ${N}[data-state='idle'] &,
  ${N}[data-state='running'] & {
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

  ${N}[data-state='running'] & path {
    animation: ${A} ${450}ms ease-in var(--delay, 0ms) both;
  }
`,M=(e,t)=>{let i=Math.min(.85*e,480),a="right"===t?e-i:0;return{left:a,top:0,right:a+i,bottom:i*j.q}},H=({src:e,alt:a,priority:n,side:r,dataTestId:s})=>{let l=(0,y.useRef)(null),d=(0,$.f)(l),o=(0,y.useMemo)(()=>((e,t)=>{if(e<=0)return[];let i=M(e,t),a=(i.left+i.right)/2;return(0,b.a)(e,i.bottom,(0,_.L)(e),[i],e=>{var t,a,n;let r,s,l,d;return t=e.size/2,a=e.cx,n=e.cy,s=(r=(i.right-i.left)/2+t)*j.q,l=Math.abs(a-(i.left+i.right)/2),d=Math.abs(n-(i.top+i.bottom)/2),l<=r&&d<=s-s/(2*r)*l},k.V).filter(e=>"right"===t?e.cx<a:e.cx>a)})(d,r),[d,r]),{state:c}=(0,v.f)(l,1470,.25),p=M(d,r),h=p.right-p.left,m=(0,y.useMemo)(()=>n?[]:function(e,t,i){if(e<=0||t<=0)return[];let a=Math.max(4,Math.round(e/56)),n=(0,_.T)(e,t,a),r="right"===i?0:e,s=t/2,l=Math.max(1,...n.map(e=>Math.hypot(e.cx-r,e.cy-s)));return n.map(e=>{let t=Math.hypot(e.cx-r,e.cy-s)/l*900,i=((0,k.k)(e)+1)/2*120;return{...e,delay:Math.round(t+i)}})}(h,p.bottom,r),[n,h,p.bottom,r]);return(0,t.jsxs)(N,{ref:l,"data-testid":s,"data-shape":"hex","data-side":r,"data-loading":n?"eager":"lazy","data-state":n?"static":c,children:[o.length>0&&(0,t.jsx)(U,{"aria-hidden":"true",focusable:"false","data-testid":`${s}-halo-canvas`,children:(0,t.jsx)(w.f,{tiles:o,color:"tint",fill:"var(--hex-figure-halo)",dataTestId:`${s}-halo`})}),(0,t.jsxs)(z,{$side:r,"data-testid":`${s}-frame`,children:[(0,t.jsx)(i.default,{src:e,alt:a,width:704,height:396,sizes:"(max-width: 768px) 100vw, 50vw",loading:n?"eager":"lazy",fetchPriority:n?"high":void 0}),m.length>0&&(0,t.jsx)(T,{viewBox:`0 0 ${Math.round(h)} ${Math.round(p.bottom)}`,preserveAspectRatio:"none","aria-hidden":"true",focusable:"false","data-testid":`${s}-cover`,"data-tiles":m.length,children:m.map(e=>(0,t.jsx)("path",{d:(0,_.H)(e),style:{"--delay":`${e.delay}ms`}},e.key))})]})]})},V={[a.D.h1]:"h1",[a.D.h2]:"h2",[a.D.h3]:"h3",[a.D.h4]:"h4",[a.D.h5]:"h5"};e.s(["f",0,e=>{let{headline:d,paragraphs:o,renderedParagraphs:c,imageSrc:g,imageAlt:y,imagePosition:w="right",imageShape:b="rounded",imagePriority:$=!1,headlineImportance:v=a.D.h2,ctaText:k,ctaHref:j,highlight:_=!1,media:C,onCtaClick:N,compactSubheadings:I=!1,className:z,dataTestId:S="media-text"}=e,U=null!=C,A=U||!!g;return(0,t.jsxs)(p,{className:z,"data-testid":S,"data-image-position":A?w:"none","data-highlight":_?"true":"false",$highlight:_,$withImage:A,$imagePosition:w,children:[(0,t.jsxs)(h,{$withImage:A,children:[(0,t.jsx)(m,{as:V[v]??"h2","data-testid":`${S}-headline`,children:d}),(0,t.jsx)(f,{$compactSubheadings:I,"data-compact-subheadings":I?"true":void 0,children:o.map((e,i)=>(0,t.jsx)(n.f,{content:e,rendered:c?.[i],dataTestId:`${S}-paragraph`},i))}),k&&j&&(0,t.jsx)(u,{children:(0,t.jsx)(r.f,{href:j,modifier:s.j.SECONDARY,icon:(0,t.jsx)(l.f,{}),iconAlign:s.W.RIGHT,onClick:N,dataTestId:`${S}-cta`,children:k})})]}),U&&(0,t.jsx)(x,{"data-testid":`${S}-media`,"data-shape":"element",children:C}),!U&&g&&"hex"===b&&(0,t.jsx)(H,{src:g,alt:y??d,priority:$,side:w,dataTestId:`${S}-image`}),!U&&g&&"hex"!==b&&(0,t.jsx)(x,{"data-testid":`${S}-image`,"data-shape":"rounded","data-loading":$?"eager":"lazy",children:(0,t.jsx)(i.default,{src:g,alt:y??d,width:704,height:396,sizes:"(max-width: 768px) 100vw, 50vw",loading:$?"eager":"lazy",fetchPriority:$?"high":void 0})})]})}],655750),e.s([],597734)},624813,775175,e=>{var t=e.i(843476),i=e.i(325164);e.i(429307);var a=e.i(159255),n=e.i(997053),r=e.i(726029),s=e.i(547905);let l=n.U.article.withConfig({displayName:"NewsCard.styles__Root",componentId:"sc-2d756514-0"})`
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
`,d=n.U.div.withConfig({displayName:"NewsCard.styles__ImageWrapper",componentId:"sc-2d756514-1"})`
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
`,u=n.U.li.withConfig({displayName:"NewsCard.styles__Tag",componentId:"sc-2d756514-9"})`
  ${r.M}
`;e.s(["f",0,e=>{let{headline:n,href:r,imageUrl:s,imageAlt:x,date:y,dateBadge:w,subtitle:b,description:$,tags:v=[],imageSizes:k="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw",className:j,dataTestId:_="news-card"}=e;return(0,t.jsxs)(l,{className:j,"data-testid":_,"data-linked":r?"true":"false",children:[s&&(0,t.jsxs)(d,{"data-testid":`${_}-image-wrapper`,"data-card-image":"",children:[(0,t.jsx)(i.default,{src:s,alt:x||n,fill:!0,sizes:k,"data-testid":`${_}-image`}),w&&(0,t.jsxs)(o,{"aria-hidden":"true","data-testid":`${_}-date-badge`,"data-day":w.day,"data-month":w.month,children:[(0,t.jsx)(c,{children:w.day}),(0,t.jsx)(p,{children:w.month})]})]}),(0,t.jsxs)(h,{children:[(0,t.jsx)(m,{"data-testid":`${_}-headline`,children:r?(0,t.jsx)(a.f,{href:r,stretched:!0,dataTestId:`${_}-link`,children:n}):n}),(y||b||$)&&(0,t.jsxs)(f,{"data-testid":`${_}-meta`,children:[(y||b)&&(0,t.jsxs)("p",{children:[y&&(0,t.jsx)("span",{"data-testid":`${_}-date`,children:y}),y&&b&&" · ",b&&(0,t.jsx)("strong",{"data-testid":`${_}-subtitle`,children:b})]}),$&&(0,t.jsx)("p",{"data-testid":`${_}-description`,children:$})]}),v.length>0&&(0,t.jsx)(g,{"data-testid":`${_}-tags`,children:v.map((e,i)=>(0,t.jsx)(u,{"data-testid":`${_}-tag-${i}`,children:e},`${e}-${i}`))})]})]})}],775175),e.s([],624813)},951693,659188,e=>{var t=e.i(843476),i=e.i(997053),a=e.i(726029);let n=i.U.header.withConfig({displayName:"SiteSectionHeader__Root",componentId:"sc-37a85c34-0"})`
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
`;e.s(["f",0,function({headline:e,description:i,align:a="left",headingLevel:l=2,dataTestId:d}){if(!e&&!i)return null;let o=i?i.split(/\n\s*\n/).map(e=>e.trim()).filter(Boolean):[];return(0,t.jsxs)(n,{$align:a,"data-testid":d,"data-align":a,children:[e&&(0,t.jsx)(r,{as:1===l?"h1":"h2","data-testid":d?`${d}-headline`:void 0,children:e}),o.length>0&&(0,t.jsx)(s,{"data-testid":d?`${d}-description`:void 0,children:o.map((e,i)=>(0,t.jsx)("p",{children:e},i))})]})}],659188),e.s([],951693)},755010,e=>{var t=e.i(271645),i=e.i(618566),a=e.i(476999),n=e.i(14431),r=e.i(71845);class s extends t.default.Component{state={failed:!1};static getDerivedStateFromError(){return{failed:!0}}componentDidCatch(e,t){(0,n.v)({category:"cms-animation",message:"element-error",data:{element:this.props.element}}),(0,n.i)(e,{componentStack:t.componentStack})}render(){return this.state.failed?this.props.fallback:this.props.children}}e.s(["A",0,s,"l",0,function(e){let s=(0,i.usePathname)(),l=(0,t.useRef)(new Set);return(0,t.useCallback)(t=>{if("cta"!==t){if(l.current.has(t))return;l.current.add(t)}(0,a.q)(s||"/",r.f,{element:e,action:t}),(0,n.v)({category:"cms-animation",message:t,data:{element:e}})},[s,e])}])},795662,e=>{var t=e.i(271645);e.s(["f",0,e=>{let[i,a]=(0,t.useState)(0);return(0,t.useEffect)(()=>{let t=e.current;if(!t)return;let i=()=>{let e=t.clientWidth;a(t=>t===e?t:e)};if(i(),"u"<typeof ResizeObserver)return;let n=new ResizeObserver(i);return n.observe(t),()=>n.disconnect()},[e]),i}])},197908,e=>{var t=e.i(178446);let i=/href$/i,a=/^(null|undefined)$/i;function n(e){if("string"!=typeof e)return;let t=e.trim();if(!(""===t||a.test(t)))return t}e.s(["J",0,n,"n",0,function(e){return{...e,props:function e(a,r){if("string"==typeof a){if(null===r||!i.test(r))return a;let e=n(a);return void 0===e?void 0:(0,t.f)(e)}return Array.isArray(a)?a.map(t=>e(t,null)):a&&"object"==typeof a?Object.fromEntries(Object.entries(a).map(([t,i])=>[t,e(i,t)])):a}(e.props,null)}}])},437772,e=>{function t(e,t){if(!e)return;if(t in e)return e[t];let i=Object.keys(e)[0];return void 0===i?void 0:e[i]}function i(e,i){return t(e,i)}e.s(["h",0,function(e,t,a,n,r){if(e)return i(e[void 0===r?`${a}:${n}`:`${a}:${n}:${r}`],t)},"z",0,i,"r",0,t])},62574,687312,529080,155892,e=>{let t="cubic-bezier(0.2, 0.8, 0.2, 1)";e.s(["S",0,t,"B",0,"cubic-bezier(0.65, 0, 0.35, 1)"],62574);var i=e.i(843476),a=e.i(271645);function n(e){let t=Array.from(e),i=t.filter(e=>e>="0"&&e<="9").length;return t.map(e=>e>="0"&&e<="9"?(i-=1,{kind:"digit",digit:Number(e),order:i}):{kind:"char",char:e})}e.s(["S",0,e=>/\d/.test(e),"B",0,e=>(e.match(/\d/g)??[]).length,"p",0,n],687312);var r=e.i(997053),s=e.i(994244);let l=r.U.span.withConfig({displayName:"Odometer.styles__Root",componentId:"sc-6aa08d55-0"})`
  position: relative;
  display: inline-flex;
  align-items: flex-start;
  line-height: 1;
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
`,d=r.U.span.withConfig({displayName:"Odometer.styles__Text",componentId:"sc-6aa08d55-1"})`
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
`,m=Array.from({length:20},(e,t)=>t%10);e.s(["f",0,({value:e,state:t,delay:r=0,stagger:s=90,duration:f=1200,className:g,dataTestId:u="odometer"})=>{let x=(0,a.useMemo)(()=>n(e),[e]),y=x.filter(e=>"digit"===e.kind).length;return(0,i.jsxs)(l,{className:g,"data-testid":u,"data-state":t,"data-digits":y,children:[(0,i.jsx)(d,{children:e}),(0,i.jsx)(o,{"aria-hidden":"true",children:x.map((e,t)=>"digit"===e.kind?(0,i.jsx)(p,{"data-part":"wheel",children:(0,i.jsx)(h,{$digit:e.digit,$delay:r+e.order*s,$duration:f,children:m.map((e,t)=>(0,i.jsx)("span",{children:e},t))})},t):(0,i.jsx)(c,{children:e.char},t))})]})}],529080),e.s([],155892)},119093,e=>{let t=(e,t)=>parseInt(e.slice(t,t+2),16);e.s(["f",0,(e,i,a)=>{if(!(a>0))return e;if(a>=1)return i;let n="#";for(let r of[1,3,5]){let s=t(e,r);n+=Math.round(s+(t(i,r)-s)*a).toString(16).padStart(2,"0")}return n}])},178446,e=>{e.s(["f",0,function(e){if(!e.startsWith("/")||e.startsWith("//"))return e;let t=e.search(/[?#]/),i=-1===t?e:e.slice(0,t),a=-1===t?"":e.slice(t);return`${i.endsWith("/")||i.slice(i.lastIndexOf("/")+1).includes(".")?i:`${i}/`}${a}`}])}])})();