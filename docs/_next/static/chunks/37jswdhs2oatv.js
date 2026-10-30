(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,411206,173972,e=>{var t=e.i(843476),i=e.i(271645),a=e.i(618566);e.i(821194);var n=e.i(99222),o=e.i(476999),r=e.i(14431),l=e.i(713347),s=e.i(635647),d=e.i(891567),c=e.i(997053);let h=c.m`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.margin.extrasmall};
  font: inherit;
  color: inherit;
  overflow-wrap: anywhere;

  svg {
    flex-shrink: 0;
  }

  @media (pointer: coarse) {
    min-height: 44px;
  }
`,p=c.U.a.withConfig({displayName:"ContactLink.styles__Link",componentId:"sc-41592123-0"})`
  ${h}
  text-decoration: none;

  &&,
  &&:hover,
  &&:visited {
    color: inherit;
  }

  &:hover {
    text-decoration: underline;
  }

  &:focus-visible {
    outline: 2px solid currentColor;
    outline-offset: 2px;
  }
`,m=c.U.span.withConfig({displayName:"ContactLink.styles__Plain",componentId:"sc-41592123-1"})`
  ${h}
`,f={tel:{key:"contactLink.aria.tel",fallback:"Anrufen: {{value}}"},mail:{key:"contactLink.aria.mail",fallback:"E-Mail schreiben an {{value}}"},map:{key:"contactLink.aria.map",fallback:"Auf der Karte zeigen: {{value}}"}};e.s(["f",0,({kind:e,value:c,place:h,geo:g,subject:x,icon:u,children:b,dataTestId:y,className:$})=>{let{tr:v}=(0,n.f)(),w=(0,a.usePathname)(),k="string"==typeof c?c.trim():"",j=(0,l.useSiteLocale)(),C="tel"===e?(0,s.A)(k):"mail"===e?(0,s.c)(k,x):(0,s.W)({query:k,geo:g},j),_=(0,i.useCallback)(()=>{(0,o.q)(w||"/",d.F,{kind:e,place:h}),r.v({category:"contact",message:d.F,data:{kind:e,place:h}})},[w,e,h]),I=y??`contact-link-${e}`,N=(0,t.jsxs)(t.Fragment,{children:[u,b??k]});if(!k)return null;if(!C)return(0,t.jsx)(m,{className:$,"data-testid":I,"data-kind":e,"data-linked":"false",children:N});let F=k.replace(/\s*\n\s*/g,", ");return(0,t.jsx)(p,{className:$,href:C,onClick:_,"aria-label":v(f[e].key,{value:F,defaultValue:f[e].fallback}),"data-testid":I,"data-kind":e,"data-linked":"true",children:N})}],173972),e.s([],411206)},813267,e=>{var t=e.i(843476),i=e.i(997053);let a=i.U.svg.withConfig({displayName:"IconLocation.styles__Root",componentId:"sc-d4764d0b-0"})``;e.s(["f",0,e=>(0,t.jsxs)(a,{className:e.className,"data-testid":"icon-location-root",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:[(0,t.jsx)("path",{d:"M4.5 9.75768C4.5 15.5 12 22 12 22C12 22 19.5 15.5 19.5 9.75768C19.5 4.81181 15.6559 2 12 2C8.34409 2 4.5 4.81181 4.5 9.75768Z",stroke:"currentColor",strokeWidth:"2",strokeLinejoin:"round"}),(0,t.jsx)("circle",{cx:"12",cy:"9.5",r:"2.5",stroke:"currentColor",strokeWidth:"2"})]})],813267)},874142,e=>{let t=e.i(215063).f;e.s(["f",0,t])},845166,690204,836326,609588,e=>{var t=e.i(843476),i=e.i(271645),a=e.i(325164);e.i(945304);var n=e.i(977194),o=e.i(997053),r=e.i(547905);let l=o.U.span.withConfig({displayName:"CardHalo.styles__Root",componentId:"sc-c90b602d-0"})`
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
`,s=o.U.i.withConfig({displayName:"CardHalo.styles__Tile",componentId:"sc-c90b602d-1"})`
  position: absolute;
  display: block;
  ${r.p}

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
`,d=["large","medium","small"];function c({dataTestId:e="card-halo"}){return(0,t.jsx)(l,{"aria-hidden":"true","data-testid":e,children:d.map(e=>(0,t.jsx)(s,{"data-tile":e},e))})}e.s(["f",0,c],690204),e.s([],836326),e.i(429307);var h=e.i(159255),p=e.i(247902),m=e.i(825969),f=e.i(997917);e.i(311046);var g=e.i(859146),x=e.i(726029);let u=o.U.article.withConfig({displayName:"FeatureCard.styles__Root",componentId:"sc-54abcbca-0"})`
  ${({$shadow:e})=>(0,x.O)(e)}
  ${x.Q}
  /* Titelgröße folgt der Kartenbreite (siehe Title) */
  container-type: inline-size;
  display: flex;
  flex-direction: column;
  width: 100%;

  ${({$interactive:e})=>e&&o.m`
      &:hover,
      &:focus-within {
        --chip-ring-width: 14px;
      }
    `}

  /* #2187: kompakte Karten und Hervorhebungen sind niedrig — die 24-px-Rundung
     der hohen Karten wirkte dort wie eine Pille; Radius der Anliegen-Kacheln */
  ${({$compact:e,$accent:t})=>(e||t)&&o.m`
      border-radius: 16px;
    `}

  /* #2194: Ebenen (Zeigerlicht) liegen mit z-index -1 über der Kartenfläche, unter dem Inhalt */
  ${({$layered:e})=>e&&o.m`
      isolation: isolate;
    `}

  /* #2194 accent: volle Breite, Navy-Fläche, Inhalt mittig, Schrift hell */
  ${({$accent:e,theme:t})=>e&&o.m`
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
`,b=o.U.div.withConfig({displayName:"FeatureCard.styles__ImageWrapper",componentId:"sc-54abcbca-1"})`
  width: 100%;

  img {
    ${x.r}
  }
`,y=o.m`
  padding-top: ${({theme:e})=>e.margin.big};
`,$=o.U.div.withConfig({displayName:"FeatureCard.styles__Body",componentId:"sc-54abcbca-2"})`
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
  ${({$plain:e,theme:t})=>e&&o.m`
      flex: 1;
      flex-direction: row;
      align-items: center;
      gap: ${t.margin.small};
      padding-block: ${t.margin.extrasmall};
    `}
`,v=o.U.span.withConfig({displayName:"FeatureCard.styles__HexMark",componentId:"sc-54abcbca-3"})`
  position: relative;
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  margin-left: 7px;

  &::before,
  &::after {
    content: '';
    position: absolute;
    ${r.p}
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
`,w=o.U.div.withConfig({displayName:"FeatureCard.styles__IconWrapper",componentId:"sc-54abcbca-4"})`
  display: flex;
  align-items: flex-start;
  min-height: 39px;
`,k=o.U.div.withConfig({displayName:"FeatureCard.styles__CornerIcon",componentId:"sc-54abcbca-5"})`
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
`,j=o.U.span.withConfig({displayName:"FeatureCard.styles__ChipFrame",componentId:"sc-54abcbca-6"})`
  position: relative;
  display: inline-flex;
  color: ${({theme:e})=>e.palette.site.greenText};

  &[data-tone='blue'] {
    color: ${({theme:e})=>e.palette.site.blue};
  }

  &[data-tone='red'] {
    color: ${({theme:e})=>e.palette.site.red};
  }
`,C=o.U.svg.withConfig({displayName:"FeatureCard.styles__ChipOutline",componentId:"sc-54abcbca-7"})`
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
`,_=o.U.h3.withConfig({displayName:"FeatureCard.styles__Title",componentId:"sc-54abcbca-8"})`
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
`,I=o.U.p.withConfig({displayName:"FeatureCard.styles__Description",componentId:"sc-54abcbca-9"})`
  ${x.n}
  margin: 0;
`,N=o.U.div.withConfig({displayName:"FeatureCard.styles__TextBlock",componentId:"sc-54abcbca-10"})`
  ${x.n}
  ${x.Y}
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.margin.extrasmall};
  margin-top: ${({theme:e})=>e.margin.extrasmall};
`,F=o.U.p.withConfig({displayName:"FeatureCard.styles__TextLabel",componentId:"sc-54abcbca-11"})`
  margin: 0;
  ${({$list:e,theme:t})=>e&&o.m`
      margin-top: ${t.margin.extrasmall};
      font-weight: 600;
      color: ${(0,x.N)("heading",t.palette.site.heading)};
    `}
`,U=o.U.ul.withConfig({displayName:"FeatureCard.styles__TextList",componentId:"sc-54abcbca-12"})`
  margin: 0;
  padding-left: 1.25em;
`,T=o.U.div.withConfig({displayName:"FeatureCard.styles__Footer",componentId:"sc-54abcbca-13"})`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  gap: ${({theme:e})=>e.margin.small};
  margin-top: auto;
  padding-top: ${({theme:e})=>e.margin.small};
  border-top: 1px solid ${({theme:e})=>(0,x.N)("border",e.palette.site.border)};
`,K=o.U.p.withConfig({displayName:"FeatureCard.styles__Price",componentId:"sc-54abcbca-14"})`
  display: flex;
  flex-direction: column;
  margin: 0;
`,z=o.U.span.withConfig({displayName:"FeatureCard.styles__PriceLabel",componentId:"sc-54abcbca-15"})`
  ${x.n}
  font-size: 14px;
  line-height: 20px;
`,S=o.U.span.withConfig({displayName:"FeatureCard.styles__PriceAmount",componentId:"sc-54abcbca-16"})`
  font-family: ${({theme:e})=>e.font.primaryFamily};
  font-size: 28px;
  font-weight: 700;
  line-height: 1.1;
  color: ${({theme:e})=>(0,x.N)("heading",e.palette.site.navy)};
  white-space: nowrap;
`,R=/(?:\d[\d.,]*(?:\s*[–—-]\s*\d[\d.,]*)?\s*€|€\s*\d[\d.,]*(?:\s*[–—-]\s*\d[\d.,]*)?)/u,L=(0,g.e)({width:100,height:100},(0,g.C)(100));function H({icon:e,size:a="small",dataTestId:o}){return i.default.isValidElement(e)?(0,t.jsx)(n.J,{tone:"green",shape:"hex",size:a,dataTestId:o,children:e}):(0,t.jsx)(n.c,{name:e.name,tone:e.tone,shape:"hex",size:a,dataTestId:o})}function W({icon:e,size:a,dataTestId:n}){let o=f.N[a],r=2*o.pad+o.icon,l=i.default.isValidElement(e)?"green":e.tone??"green";return(0,t.jsxs)(j,{"data-tone":l,children:[(0,t.jsx)(H,{icon:e,size:a,dataTestId:n}),(0,t.jsx)(C,{$ring:o.ring,$chip:r,viewBox:"0 0 100 100","aria-hidden":"true","data-testid":n?`${n}-outline`:void 0,children:(0,t.jsx)("path",{d:L,pathLength:1})})]})}function A({text:e,dataTestId:a}){let n=e.replace(/\r\n/g,"\n").split(/\n\s*\n/).map(e=>e.trim()).filter(Boolean).map(e=>{let t=e.split("\n").map(e=>e.trim()),i=t.findIndex(e=>/^[-•]\s+/.test(e));return i<0?{label:t.join(" "),items:[]}:{label:t.slice(0,i).join(" "),items:t.slice(i).map(e=>e.replace(/^[-•]\s+/,"")).filter(Boolean)}});return 1!==n.length||n[0].items.length||n[0].label.includes("\n")?(0,t.jsx)(N,{"data-testid":a,children:n.map((e,n)=>(0,t.jsxs)(i.default.Fragment,{children:[e.label&&(0,t.jsx)(F,{$list:e.items.length>0,children:e.label}),e.items.length>0&&(0,t.jsx)(U,{"data-testid":`${a}-list-${n}`,children:e.items.map((e,i)=>(0,t.jsx)("li",{children:e},i))})]},n))}):(0,t.jsx)(I,{"data-testid":a,children:n[0].label})}let B=e=>{let n,{title:o,titleTag:r="h3",description:l,icon:s,image:d,ctaHref:f,shadow:g,compact:x=!1,accent:y=!1,stretched:j=!1,drawIcon:C=!1,layer:I,price:N,actionLabel:F,onAction:U,className:L,dataTestId:B="feature-card"}=e,P=!!(F&&f),D=!!f&&!P,M=N?(n=R.exec(N))?{label:(N.slice(0,n.index)+N.slice(n.index+n[0].length)).replace(/[:：\s]+$/u,"").trim(),amount:n[0].trim()}:{label:"",amount:N.trim()}:null,E=o.split(/(?<=\/)/).filter(Boolean).map((e,a)=>(0,t.jsxs)(i.default.Fragment,{children:[a>0&&(0,t.jsx)("wbr",{}),e]},a)),O=x&&!!s&&!d,V=x&&!s&&!d&&!y,Y=e=>s&&(C?(0,t.jsx)(W,{icon:s,size:e,dataTestId:`${B}-chip`}):(0,t.jsx)(H,{icon:s,size:e,dataTestId:`${B}-chip`}));return(0,t.jsxs)(u,{className:L,"data-testid":B,"data-linked":D,"data-compact":x?"true":void 0,"data-accent":y?"true":void 0,$shadow:g??D,$interactive:D,$accent:y,$compact:x,$layered:!!I,children:[I,D&&(0,t.jsx)(c,{dataTestId:`${B}-halo`}),d&&(0,t.jsx)(b,{"data-testid":`${B}-image`,children:(0,t.jsx)(a.default,{src:d,alt:o,width:704,height:396,sizes:"(max-width: 640px) 100vw, 33vw"})}),O&&(0,t.jsx)(k,{"data-testid":`${B}-icon`,"data-corner":"true",children:Y("large")}),(0,t.jsxs)($,{$compact:O,$plain:V,"data-card-body":"",children:[V&&(0,t.jsx)(v,{"aria-hidden":"true","data-testid":`${B}-mark`}),s&&!O&&(0,t.jsx)(w,{"data-testid":`${B}-icon`,children:Y("small")}),(0,t.jsxs)("div",{children:[(0,t.jsx)(_,{as:r,"data-testid":`${B}-title`,"data-title-tag":r,children:f&&!P?(0,t.jsx)(h.f,{href:f,stretched:j,dataTestId:`${B}-cta`,children:E}):E}),l&&(0,t.jsx)(A,{text:l,dataTestId:`${B}-description`})]}),(M||P)&&(0,t.jsxs)(T,{"data-card-footer":"","data-testid":`${B}-footer`,children:[M&&(0,t.jsxs)(K,{"data-testid":`${B}-price`,children:[M.label&&(0,t.jsx)(z,{children:M.label}),(0,t.jsx)(S,{children:M.amount})]}),P&&(0,t.jsx)(p.f,{href:f,modifier:m.j.PRIMARY,onClick:U,dataTestId:`${B}-action`,children:F})]})]})]})};e.s(["f",0,B],609588),e.s(["f",0,B],845166)},349953,645944,e=>{var t=e.i(843476),i=e.i(997053),a=e.i(547905);let n=i.U.section.withConfig({displayName:"HeroSection.styles__Root",componentId:"sc-7b18f4de-0"})`
  position: relative;
  width: 100%;
  /* Die App hat keinen globalen border-box-Reset (_reset.scss nullt nur Rand,
     Polster und Rahmen). Ohne diese Zeile ergibt width:100% plus seitliches
     Polster eine Ueberbreite von zweimal dem Polster, und <main> zeigt dafuer
     eine waagerechte Bildlaufleiste. */
  box-sizing: border-box;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${e=>e.theme.padding.large} ${e=>e.theme.padding.default};
  background-color: ${e=>e.theme.palette.default.primary};
  background-image: ${e=>e.$backgroundImage?`url(${e.$backgroundImage})`:"none"};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
  /* Wabenrand statt runder Ecken (#1188); der Inhalt bleibt aus der Randzone */
  ${e=>(0,a.n)(e.$edges)}
  ${e=>(0,a.o)("bottom",e.theme.padding.large,e.$edges)}

  ${e=>e.$overlay&&`
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(to bottom, rgba(0, 65, 110, 0.7), rgba(0, 65, 110, 0.9));
      z-index: 1;
    }
  `}
`,o=i.U.div.withConfig({displayName:"HeroSection.styles__Content",componentId:"sc-7b18f4de-1"})`
  position: relative;
  z-index: 2;
  max-width: 800px;
  /* #2126: als Flex-Kind wuchs der Inhalt sonst auf die Breite seines längsten
     Worts („Kunststoffidentifikation“ in Versalien) und lief links und rechts
     aus dem Hero (overflow: hidden schnitt ab). Mit min-width: 0 bleibt er in
     der Zeile, lange Wörter brechen innerhalb (Silbentrennung #2127). */
  min-width: 0;
  text-align: center;
`,r=i.U.div.withConfig({displayName:"HeroSection.styles__HeadlineWrapper",componentId:"sc-7b18f4de-2"})`
  margin-bottom: ${e=>e.theme.margin.default};

  h1,
  h2 {
    color: ${e=>e.theme.palette.default.white} !important;
  }
  /* #2126/#2127: am Telefon steht die h1 über die Theme-Skala eine Stufe kleiner
     (Headline-Atom, mobile Stufe = h2-Größe) — hier keine eigene Größe */
`,l=i.U.div.withConfig({displayName:"HeroSection.styles__SubheadlineWrapper",componentId:"sc-7b18f4de-3"})`
  margin-bottom: ${e=>e.theme.margin.large};

  p,
  span {
    color: rgba(255, 255, 255, 0.9) !important;
  }
`,s=i.U.div.withConfig({displayName:"HeroSection.styles__CtaWrapper",componentId:"sc-7b18f4de-4"})`
  display: flex;
  justify-content: center;
  gap: ${e=>e.theme.margin.small};
`;var d=e.i(699779),c=e.i(929842),h=e.i(703089),p=e.i(247902),m=e.i(825969);e.i(710788);var f=e.i(363451);e.i(311046);var g=e.i(499881);let x={bottom:{placement:"inner",color:"white"}};e.s(["f",0,e=>{let{headline:i,subheadline:a,backgroundImage:u,ctaText:b,ctaHref:y,overlay:$=!0,className:v,dataTestId:w="hero-section",edges:k=x}=e;return(0,t.jsxs)(n,{className:v,"data-testid":w,$backgroundImage:u,$overlay:$,$edges:k,children:[(0,g.N)(k)&&(0,t.jsx)(f.f,{edges:k,zIndex:1,dataTestId:`${w}-edge`}),(0,t.jsxs)(o,{children:[(0,t.jsx)(r,{children:(0,t.jsx)(d.f,{importance:c.D.h1,dataTestId:`${w}-headline`,children:i})}),a&&(0,t.jsx)(l,{children:(0,t.jsx)(h.p,{variant:h.g.bodybig,dataTestId:`${w}-subheadline`,children:a})}),b&&y&&(0,t.jsx)(s,{children:(0,t.jsx)(p.f,{href:y,modifier:m.j.SECONDARY,label:b,disabled:!1,loading:!1,dataTestId:`${w}-cta`,children:b})})]})]})}],645944),e.s([],349953)},538915,226129,600639,546843,e=>{var t=e.i(843476),i=e.i(997053);e.i(315481);var a=e.i(10003),n=e.i(547905),o=e.i(136717);let r=e=>(0,o.L)(e.palette.footer.backgroundEnd),l=e=>(0,o.p)(e.palette.footer.backgroundEnd),s=(e,t)=>l(e)?`rgba(255, 255, 255, ${t})`:`rgba(33, 37, 41, ${t})`,d=i.U.footer.withConfig({displayName:"Footer.styles__Root",componentId:"sc-809a1aba-0"})`
  width: 100%;
  /* #2164: Verlauf aus dem Theme, in beiden Modi dunkel; Schrift aus dem Kontrast (footerColors) */
  background: linear-gradient(
    to top,
    ${({theme:e})=>e.palette.footer.background},
    ${({theme:e})=>e.palette.footer.backgroundEnd}
  );
  color: ${({theme:e})=>r(e)};
  padding: 1rem 0;
  flex-shrink: 0;
  z-index: 10;
  margin-top: auto;
  /* Wabenrand statt runder Ecken (#1188); Logo und Copyright bleiben aus der Randzone */
  ${({$edges:e})=>(0,n.n)(e)}
  ${({$edges:e})=>(0,n.o)("top","1rem",e)}

  /* Textelemente erben die Fußschrift — Doppelklasse statt !important, schlägt globale Regeln */
  && h1,
  && h2,
  && h3,
  && h4,
  && h5,
  && p,
  && span {
    color: ${({theme:e})=>r(e)};
  }
`,c=i.U.div.withConfig({displayName:"Footer.styles__BottomBar",componentId:"sc-809a1aba-1"})`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  gap: 16px;
  margin-top: 32px;
  padding: 32px 0 ${e=>e.theme.margin.small};

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
      ${({theme:e})=>s(e,0)},
      ${({theme:e})=>s(e,.22)} 50%,
      ${({theme:e})=>s(e,0)}
    );
  }

  @media only screen and (max-width: 639px) {
    flex-direction: column-reverse;
    align-items: flex-start;
  }
`,h=i.U.span.withConfig({displayName:"Footer.styles__Copyright",componentId:"sc-809a1aba-2"})`
  white-space: nowrap;
`,p=i.U.nav.withConfig({displayName:"Footer.styles__NavMeta",componentId:"sc-809a1aba-3"})`
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
    color: ${({theme:e})=>r(e)};
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
`,m=i.U.button.withConfig({displayName:"Footer.styles__FooterMetaButton",componentId:"sc-809a1aba-4"})`
  padding: 0;
  border: 0;
  background: none;
  font: inherit;
  cursor: pointer;
  color: ${({theme:e})=>r(e)};
  text-decoration: none;

  &:hover,
  &:focus-visible {
    text-decoration: underline;
  }
`,f=(0,i.U)(a.NavLink).withConfig({displayName:"Footer.styles__FooterLink",componentId:"sc-809a1aba-5"})`
  color: inherit;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`,g=(0,i.U)(a.NavLink).withConfig({displayName:"Footer.styles__LogoLink",componentId:"sc-809a1aba-6"})`
  display: inline-block;
  text-decoration: none;
`,x=i.U.div.withConfig({displayName:"Footer.styles__FooterSection",componentId:"sc-809a1aba-7"})`
  margin-bottom: 20px;
`,u=i.U.ul.withConfig({displayName:"Footer.styles__ContactList",componentId:"sc-809a1aba-8"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 0;
  padding: 0;
  list-style: none;
`,b=i.U.li.withConfig({displayName:"Footer.styles__ContactItem",componentId:"sc-809a1aba-9"})`
  && > a {
    display: inline-flex;
    align-items: center;
    gap: ${({theme:e})=>e.margin.small};
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
    color: ${({theme:e})=>r(e)};
  }

  && > a:hover {
    text-decoration: underline;
  }
`,y=i.U.h2.withConfig({displayName:"Footer.styles__FooterSectionTitle",componentId:"sc-809a1aba-10"})`
  && {
    color: ${({theme:e})=>r(e)};
  }
  font-size: 1rem;
  font-weight: 700;
  margin: 0 0 16px;
  text-transform: uppercase;
`,$=i.U.nav.withConfig({displayName:"Footer.styles__FooterLinks",componentId:"sc-809a1aba-11"})`
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
    color: ${({theme:e})=>r(e)};
  }

  && a:hover,
  && a:focus-visible {
    text-decoration: underline;
  }
`;var v=e.i(424734),w=e.i(650868),k=e.i(224906);e.i(821194);var j=e.i(99222),C=e.i(722216),_=e.i(507924),I=e.i(284248),N=e.i(891567);let F=[{titleKey:"footer.sections.links",links:[{href:"/team",labelKey:"footer.team"},{href:"/faq",labelKey:"footer.faq"},{href:"/about",labelKey:"footer.about"},{href:"/news",labelKey:"footer.latest"},{href:"/contact-us",labelKey:"footer.contactForm"},{href:"/services",labelKey:"footer.services"}]}],U={titleKey:"footer.contact",email:N._.info,phone:N.h.central,address:N.Y},T=[{href:"/agb",labelKey:"footer.terms"},{href:"/imprint",labelKey:"footer.imprint"},{href:"/privacy",labelKey:"footer.privacy"},{href:"/email-disclaimer",labelKey:"footer.emailDisclaimer"},{href:"/accessibility",labelKey:"footer.accessibility"}];e.i(411206);var K=e.i(173972),z=e.i(317573),S=e.i(757658),R=e.i(874142),L=e.i(813267);e.i(710788);var H=e.i(363451);e.i(311046);var W=e.i(499881);let A={top:{placement:"inner",color:"white"}};e.s(["f",0,e=>{let a=e.edges??A,{tr:n}=(0,j.f)(),o=(0,i.i)(),{footer:r}=(0,C.f)(),s=(0,I.C)();return(0,t.jsxs)(d,{className:e.className,"data-testid":"footer-root",$edges:a,children:[(0,W.N)(a)&&(0,t.jsx)(H.f,{edges:a,dataTestId:"footer-root-edge"}),(0,t.jsxs)(w.f,{children:[(0,t.jsx)(k.f,{xs:12,md:3,lg:2,children:(0,t.jsx)(g,{href:"/","aria-label":n("footer.logo.ariaLabel",{defaultValue:"plastship – zur Startseite"}),"data-testid":"footer-logo-link",children:(0,t.jsx)(v.f,{inverted:!o?.palette?.footer||l(o),monochrome:!0})})}),(0,t.jsx)(t.Fragment,{children:r.length>0?r.map((e,i)=>(0,t.jsx)(k.f,{xs:12,sm:6,md:4,children:(0,t.jsxs)(x,{"data-testid":`footer-cms-section-${i}`,"data-count":e.children?.length??0,children:[(0,t.jsx)(y,{"data-testid":`footer-cms-section-${i}-title`,children:(0,_.u)(e.label,s)}),(0,t.jsx)($,{children:(e.children??[]).map((e,a)=>(0,t.jsx)(f,{href:e.href,"data-testid":`footer-cms-section-${i}-link-${a}`,children:(0,_.u)(e.label,s)},`${e.href}-${a}`))})]})},`${e.href}-${i}`)):F.map((e,i)=>(0,t.jsx)(k.f,{xs:12,sm:6,md:4,children:(0,t.jsxs)(x,{"data-testid":`footer-section-${i}`,"data-count":e.links.length,children:[(0,t.jsx)(y,{"data-testid":`footer-section-${i}-title`,children:n(e.titleKey)}),(0,t.jsx)($,{children:e.links.map(e=>(0,t.jsx)(f,{href:e.href,"data-testid":`footer-link-${e.href.replace(/^\//,"").replace(/\//g,"-")}`,children:n(e.labelKey)},e.href))})]})},e.titleKey))}),(0,t.jsx)(k.f,{xs:12,sm:6,md:5,lg:4,children:(0,t.jsxs)(x,{"data-testid":"footer-contact",children:[(0,t.jsx)(y,{"data-testid":"footer-contact-title",children:n(U.titleKey)}),(0,t.jsxs)(u,{children:[(0,t.jsx)(b,{children:(0,t.jsx)(K.f,{kind:"mail",value:U.email,place:"footer",icon:(0,t.jsx)(z.f,{}),dataTestId:"footer-contact-email"})}),(0,t.jsx)(b,{children:(0,t.jsx)(K.f,{kind:"tel",value:U.phone.e164,place:"footer",icon:(0,t.jsx)(R.f,{}),dataTestId:"footer-contact-phone",children:U.phone.international})}),(0,t.jsx)(b,{children:(0,t.jsx)(K.f,{kind:"map",value:`${U.address.name}, ${(0,N.W)(U.address)}`,geo:U.address.geo,place:"footer",icon:(0,t.jsx)(L.f,{}),dataTestId:"footer-contact-address",children:(0,N.W)(U.address)})})]})]})})]}),(0,t.jsx)(w.f,{children:(0,t.jsx)(k.f,{xs:12,children:(0,t.jsxs)(c,{children:[(0,t.jsx)(h,{"data-testid":"footer-copyright",children:"© plastship GmbH"}),(0,t.jsxs)(p,{"data-testid":"footer-meta","data-count":T.length,children:[T.map(e=>(0,t.jsx)(f,{href:e.href,"data-testid":`footer-meta-${e.href.replace(/^\//,"")}`,children:n(e.labelKey)},e.href)),(0,t.jsx)(m,{type:"button",onClick:S.e,"data-testid":"footer-cookie-settings",children:n("footer.cookieSettings",{defaultValue:"Cookie-Einstellungen"})})]})]})})})]})}],538915);var B=e.i(271645),P=e.i(247902),D=e.i(825969),M=e.i(499911);e.i(657782);var E=e.i(229132);e.i(730026);var O=e.i(262076),V=e.i(184914),Y=e.i(157067),Z=e.i(885895),q=e.i(693830),G=e.i(949108),Q=e.i(49958),J=e.i(726029);let X=(0,B.lazy)(()=>e.A(767483));e.s(["f",0,()=>{let e=(0,G.f)(),{status:i}=(0,Q.useSession)(),a=(0,q.g)(),{isLeftSidebarOpen:n,closeLeftSidebar:o}=(0,Y.i)(),{language:r}=(0,Z.N)(),{tr:l}=(0,j.f)(r);return e?(0,t.jsx)(V.f,{isOpen:n,onClose:o,mode:"guest",maxWidthPx:J.F-1,barHeightPx:J.W,footerAction:(0,t.jsx)(P.f,{href:"/login",modifier:D.j.PRIMARY,icon:(0,t.jsx)(M.f,{}),iconAlign:D.W.RIGHT,dataTestId:"mobile-menu-item-login",children:l("header.login.label",{defaultValue:"Login"})}),children:(0,t.jsx)(O.f,{"data-testid":"mobile-menu-section-public",children:(0,t.jsx)(E.f,{variant:"stacked",dataTestId:"mobile-menu-item-public"})})}):"authenticated"===i&&a?(0,t.jsx)(B.Suspense,{fallback:null,children:(0,t.jsx)(X,{barHeightPx:J.W})}):null}],226129),e.s([],600639),e.s(["p",0,{top:{placement:"inner",color:"white",depth:"section"}},"q",0,"navy","e",0,function(e){return e&&"white"!==e?{edges:{top:{placement:"inner",color:e}},flush:!0}:{edges:void 0,flush:!1}}],546843)},584391,e=>{var t=e.i(843476),i=e.i(997053),a=e.i(726029);let n=i.U.div.withConfig({displayName:"Default.styles__Root",componentId:"sc-6c8f238f-0"})`
  --page-header-offset: ${a.W}px;
  ${a.u}
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-x: clip;
`,o=i.U.main.withConfig({displayName:"Default.styles__Main",componentId:"sc-6c8f238f-1"})`
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-y: auto;
  /* Der sticky Header steht im Fluss — kein Ausgleich für einen fixen Header mehr */
  padding-top: ${({$paddingTop:e=!0})=>e?"80px":"0"};
  /* Abstand vor dem Fuß — entfällt, wenn die Seite mit einer Fläche endet
     und der Fuß direkt in sie übergeht (Befund 29.10., #2192) */
  padding-bottom: ${({$flushFooter:e})=>e?"0":"40px"};

  /* Add spacing between content elements */
  > *:not(:last-child) {
    margin-bottom: 40px;
  }
`;var r=e.i(197754),l=e.i(538915);e.i(600639);var s=e.i(226129),d=e.i(729950),c=e.i(546843);e.s(["Default",0,e=>{let{children:i,inverted:a,paddingTop:h=!0,footerEdge:p}=e,m=(0,c.e)(p);return(0,d.H)()?(0,t.jsx)(t.Fragment,{children:i}):(0,t.jsxs)(n,{className:e.className,"data-testid":"default-root",children:[(0,t.jsx)(r.f,{navigation:!1,inverted:a,site:!0}),(0,t.jsx)(s.f,{}),(0,t.jsx)(o,{$paddingTop:h,$flushFooter:m.flush,children:i}),(0,t.jsx)(l.f,{inverted:a,edges:m.edges})]})}],584391)},33180,e=>{let t=e.i(584391).Default;e.s(["f",0,t])},816017,217997,e=>{var t=e.i(843476);e.i(507924);var i=e.i(891567);i.Y.name,i.h.central.international,i._.info,i.Y;let a=String.fromCharCode(8232),n=String.fromCharCode(8233);e.s(["f",0,function({data:e}){return(0,t.jsx)("script",{type:"application/ld+json","data-testid":"structured-data",dangerouslySetInnerHTML:{__html:JSON.stringify(e).replace(/</g,"\\u003c").replace(/>/g,"\\u003e").replace(/&/g,"\\u0026").split(a).join("\\u2028").split(n).join("\\u2029")}})}],217997),e.s([],816017)}])})();