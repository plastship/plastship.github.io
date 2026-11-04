(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,411206,173972,e=>{var t=e.i(843476),a=e.i(271645),i=e.i(618566);e.i(821194);var n=e.i(99222),o=e.i(476999),r=e.i(14431),s=e.i(713347),l=e.i(635647),d=e.i(891567),c=e.i(997053);let p=c.m`
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
`,h=c.U.a.withConfig({displayName:"ContactLink.styles__Link",componentId:"sc-41592123-0"})`
  ${p}
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
`,f=c.U.span.withConfig({displayName:"ContactLink.styles__Plain",componentId:"sc-41592123-1"})`
  ${p}
`,m={tel:{key:"contactLink.aria.tel",fallback:"Anrufen: {{value}}"},mail:{key:"contactLink.aria.mail",fallback:"E-Mail schreiben an {{value}}"},map:{key:"contactLink.aria.map",fallback:"Auf der Karte zeigen: {{value}}"}};e.s(["f",0,({kind:e,value:c,place:p,geo:g,subject:x,icon:u,children:b,dataTestId:y,className:v})=>{let{tr:w}=(0,n.f)(),$=(0,i.usePathname)(),j="string"==typeof c?c.trim():"",k=(0,s.useSiteLocale)(),C="tel"===e?(0,l.A)(j):"mail"===e?(0,l.c)(j,x):(0,l.W)({query:j,geo:g},k),_=(0,a.useCallback)(()=>{(0,o.q)($||"/",d.F,{kind:e,place:p}),r.v({category:"contact",message:d.F,data:{kind:e,place:p}})},[$,e,p]),I=y??`contact-link-${e}`,F=(0,t.jsxs)(t.Fragment,{children:[u,b??j]});if(!j)return null;if(!C)return(0,t.jsx)(f,{className:v,"data-testid":I,"data-kind":e,"data-linked":"false",children:F});let N=j.replace(/\s*\n\s*/g,", ");return(0,t.jsx)(h,{className:v,href:C,onClick:_,"aria-label":w(m[e].key,{value:N,defaultValue:m[e].fallback}),"data-testid":I,"data-kind":e,"data-linked":"true",children:F})}],173972),e.s([],411206)},813267,e=>{var t=e.i(843476),a=e.i(997053);let i=a.U.svg.withConfig({displayName:"IconLocation.styles__Root",componentId:"sc-d4764d0b-0"})``;e.s(["f",0,e=>(0,t.jsxs)(i,{className:e.className,"data-testid":"icon-location-root",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:[(0,t.jsx)("path",{d:"M4.5 9.75768C4.5 15.5 12 22 12 22C12 22 19.5 15.5 19.5 9.75768C19.5 4.81181 15.6559 2 12 2C8.34409 2 4.5 4.81181 4.5 9.75768Z",stroke:"currentColor",strokeWidth:"2",strokeLinejoin:"round"}),(0,t.jsx)("circle",{cx:"12",cy:"9.5",r:"2.5",stroke:"currentColor",strokeWidth:"2"})]})],813267)},874142,e=>{let t=e.i(215063).f;e.s(["f",0,t])},845166,690204,836326,609588,e=>{var t=e.i(843476),a=e.i(271645),i=e.i(325164);e.i(945304);var n=e.i(977194),o=e.i(997053),r=e.i(547905);let s=o.U.span.withConfig({displayName:"CardHalo.styles__Root",componentId:"sc-c90b602d-0"})`
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
`,l=o.U.i.withConfig({displayName:"CardHalo.styles__Tile",componentId:"sc-c90b602d-1"})`
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
`,d=["large","medium","small"];function c({dataTestId:e="card-halo"}){return(0,t.jsx)(s,{"aria-hidden":"true","data-testid":e,children:d.map(e=>(0,t.jsx)(l,{"data-tile":e},e))})}e.s(["f",0,c],690204),e.s([],836326),e.i(429307);var p=e.i(159255),h=e.i(247902),f=e.i(825969),m=e.i(997917);e.i(311046);var g=e.i(859146),x=e.i(726029);let u=o.U.article.withConfig({displayName:"FeatureCard.styles__Root",componentId:"sc-54abcbca-0"})`
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
`,v=o.U.div.withConfig({displayName:"FeatureCard.styles__Body",componentId:"sc-54abcbca-2"})`
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
`,w=o.U.span.withConfig({displayName:"FeatureCard.styles__HexMark",componentId:"sc-54abcbca-3"})`
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
`,$=o.U.div.withConfig({displayName:"FeatureCard.styles__IconWrapper",componentId:"sc-54abcbca-4"})`
  display: flex;
  align-items: flex-start;
  min-height: 39px;
`,j=o.U.div.withConfig({displayName:"FeatureCard.styles__CornerIcon",componentId:"sc-54abcbca-5"})`
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
`,k=o.U.span.withConfig({displayName:"FeatureCard.styles__ChipFrame",componentId:"sc-54abcbca-6"})`
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
`,F=o.U.div.withConfig({displayName:"FeatureCard.styles__TextBlock",componentId:"sc-54abcbca-10"})`
  ${x.n}
  ${x.Y}
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.margin.extrasmall};
  margin-top: ${({theme:e})=>e.margin.extrasmall};
`,N=o.U.p.withConfig({displayName:"FeatureCard.styles__TextLabel",componentId:"sc-54abcbca-11"})`
  margin: 0;
  ${({$list:e,theme:t})=>e&&o.m`
      margin-top: ${t.margin.extrasmall};
      font-weight: 600;
      color: ${(0,x.N)("heading",t.palette.site.heading)};
    `}
`,U=o.U.ul.withConfig({displayName:"FeatureCard.styles__TextList",componentId:"sc-54abcbca-12"})`
  margin: 0;
  padding-left: 1.25em;
`,K=o.U.div.withConfig({displayName:"FeatureCard.styles__Footer",componentId:"sc-54abcbca-13"})`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  gap: ${({theme:e})=>e.margin.small};
  margin-top: auto;
  padding-top: ${({theme:e})=>e.margin.small};
  border-top: 1px solid ${({theme:e})=>(0,x.N)("border",e.palette.site.border)};
`,T=o.U.p.withConfig({displayName:"FeatureCard.styles__Price",componentId:"sc-54abcbca-14"})`
  display: flex;
  flex-direction: column;
  margin: 0;
`,z=o.U.span.withConfig({displayName:"FeatureCard.styles__PriceLabel",componentId:"sc-54abcbca-15"})`
  ${x.n}
  font-size: 14px;
  line-height: 20px;
`,L=o.U.span.withConfig({displayName:"FeatureCard.styles__PriceAmount",componentId:"sc-54abcbca-16"})`
  font-family: ${({theme:e})=>e.font.primaryFamily};
  font-size: 28px;
  font-weight: 700;
  line-height: 1.1;
  color: ${({theme:e})=>(0,x.N)("heading",e.palette.site.navy)};
  white-space: nowrap;
`,R=/(?:\d[\d.,]*(?:\s*[–—-]\s*\d[\d.,]*)?\s*€|€\s*\d[\d.,]*(?:\s*[–—-]\s*\d[\d.,]*)?)/u,A=(0,g.e)({width:100,height:100},(0,g.C)(100));function S({icon:e,size:i="small",dataTestId:o}){return a.default.isValidElement(e)?(0,t.jsx)(n.J,{tone:"green",shape:"hex",size:i,dataTestId:o,children:e}):(0,t.jsx)(n.c,{name:e.name,tone:e.tone,shape:"hex",size:i,dataTestId:o})}function W({icon:e,size:i,dataTestId:n}){let o=m.N[i],r=2*o.pad+o.icon,s=a.default.isValidElement(e)?"green":e.tone??"green";return(0,t.jsxs)(k,{"data-tone":s,children:[(0,t.jsx)(S,{icon:e,size:i,dataTestId:n}),(0,t.jsx)(C,{$ring:o.ring,$chip:r,viewBox:"0 0 100 100","aria-hidden":"true","data-testid":n?`${n}-outline`:void 0,children:(0,t.jsx)("path",{d:A,pathLength:1})})]})}function H({text:e,dataTestId:i}){let n=e.replace(/\r\n/g,"\n").split(/\n\s*\n/).map(e=>e.trim()).filter(Boolean).map(e=>{let t=e.split("\n").map(e=>e.trim()),a=t.findIndex(e=>/^[-•]\s+/.test(e));return a<0?{label:t.join(" "),items:[]}:{label:t.slice(0,a).join(" "),items:t.slice(a).map(e=>e.replace(/^[-•]\s+/,"")).filter(Boolean)}});return 1!==n.length||n[0].items.length||n[0].label.includes("\n")?(0,t.jsx)(F,{"data-testid":i,children:n.map((e,n)=>(0,t.jsxs)(a.default.Fragment,{children:[e.label&&(0,t.jsx)(N,{$list:e.items.length>0,children:e.label}),e.items.length>0&&(0,t.jsx)(U,{"data-testid":`${i}-list-${n}`,children:e.items.map((e,a)=>(0,t.jsx)("li",{children:e},a))})]},n))}):(0,t.jsx)(I,{"data-testid":i,children:n[0].label})}let B=e=>{let n,{title:o,titleTag:r="h3",description:s,icon:l,image:d,ctaHref:m,shadow:g,compact:x=!1,accent:y=!1,stretched:k=!1,drawIcon:C=!1,layer:I,price:F,actionLabel:N,onAction:U,className:A,dataTestId:B="feature-card",dataAttributes:P}=e,D=!!(N&&m),M=!!m&&!D,E=F?(n=R.exec(F))?{label:(F.slice(0,n.index)+F.slice(n.index+n[0].length)).replace(/[:：\s]+$/u,"").trim(),amount:n[0].trim()}:{label:"",amount:F.trim()}:null,V=o.split(/(?<=\/)/).filter(Boolean).map((e,i)=>(0,t.jsxs)(a.default.Fragment,{children:[i>0&&(0,t.jsx)("wbr",{}),e]},i)),G=x&&!!l&&!d,O=x&&!l&&!d&&!y,Y=e=>l&&(C?(0,t.jsx)(W,{icon:l,size:e,dataTestId:`${B}-chip`}):(0,t.jsx)(S,{icon:l,size:e,dataTestId:`${B}-chip`}));return(0,t.jsxs)(u,{...P,className:A,"data-testid":B,"data-linked":M,"data-compact":x?"true":void 0,"data-accent":y?"true":void 0,$shadow:g??M,$interactive:M,$accent:y,$compact:x,$layered:!!I,children:[I,M&&(0,t.jsx)(c,{dataTestId:`${B}-halo`}),d&&(0,t.jsx)(b,{"data-testid":`${B}-image`,children:(0,t.jsx)(i.default,{src:d,alt:o,width:704,height:396,sizes:"(max-width: 640px) 100vw, 33vw"})}),G&&(0,t.jsx)(j,{"data-testid":`${B}-icon`,"data-corner":"true",children:Y("large")}),(0,t.jsxs)(v,{$compact:G,$plain:O,"data-card-body":"",children:[O&&(0,t.jsx)(w,{"aria-hidden":"true","data-testid":`${B}-mark`}),l&&!G&&(0,t.jsx)($,{"data-testid":`${B}-icon`,children:Y("small")}),(0,t.jsxs)("div",{children:[(0,t.jsx)(_,{as:r,"data-testid":`${B}-title`,"data-title-tag":r,children:m&&!D?(0,t.jsx)(p.f,{href:m,stretched:k,dataTestId:`${B}-cta`,children:V}):V}),s&&(0,t.jsx)(H,{text:s,dataTestId:`${B}-description`})]}),(E||D)&&(0,t.jsxs)(K,{"data-card-footer":"","data-testid":`${B}-footer`,children:[E&&(0,t.jsxs)(T,{"data-testid":`${B}-price`,children:[E.label&&(0,t.jsx)(z,{children:E.label}),(0,t.jsx)(L,{children:E.amount})]}),D&&(0,t.jsx)(h.f,{href:m,modifier:f.j.PRIMARY,onClick:U,dataTestId:`${B}-action`,children:N})]})]})]})};e.s(["f",0,B],609588),e.s(["f",0,B],845166)},538915,226129,600639,546843,e=>{var t=e.i(843476),a=e.i(997053);e.i(315481);var i=e.i(10003),n=e.i(547905),o=e.i(136717);let r=e=>(0,o.L)(e.palette.footer.backgroundEnd),s=e=>(0,o.p)(e.palette.footer.backgroundEnd),l=(e,t)=>s(e)?`rgba(255, 255, 255, ${t})`:`rgba(33, 37, 41, ${t})`;var d=e.i(474704),c=e.i(807897);let p=a.U.footer.withConfig({displayName:"Footer.styles__Root",componentId:"sc-809a1aba-0"})`
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
`,h=a.U.div.withConfig({displayName:"Footer.styles__BottomBar",componentId:"sc-809a1aba-1"})`
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
      ${({theme:e})=>l(e,0)},
      ${({theme:e})=>l(e,.22)} 50%,
      ${({theme:e})=>l(e,0)}
    );
  }

  @media only screen and (max-width: 639px) {
    flex-direction: column-reverse;
    align-items: flex-start;
  }
`,f=a.U.span.withConfig({displayName:"Footer.styles__Copyright",componentId:"sc-809a1aba-2"})`
  white-space: nowrap;
`,m=a.U.nav.withConfig({displayName:"Footer.styles__NavMeta",componentId:"sc-809a1aba-3"})`
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
`,g=a.U.button.withConfig({displayName:"Footer.styles__FooterMetaButton",componentId:"sc-809a1aba-4"})`
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
`,x=(0,a.U)(i.NavLink).withConfig({displayName:"Footer.styles__FooterLink",componentId:"sc-809a1aba-5"})`
  color: inherit;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`,u=(c.s.height-c.m)/c.s.width*133,b=(0,a.U)(i.NavLink).withConfig({displayName:"Footer.styles__LogoLink",componentId:"sc-809a1aba-6"})`
  display: inline-block;
  /* gestapelt: Luft zur ersten Gruppe; unter der Grundlinie, verschiebt sie nicht */
  padding-bottom: ${({theme:e})=>e.margin.small};
  text-decoration: none;

  && svg {
    display: inline;
    width: ${133}px;
    height: auto;
    vertical-align: baseline;
    margin-bottom: ${-u}px;
  }
`,y=a.U.div.withConfig({displayName:"Footer.styles__FooterRow",componentId:"sc-809a1aba-7"})`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  /* gestapelt (Telefon): Abstand zwischen Logo und erster Gruppe */
  row-gap: ${({theme:e})=>e.margin.small};
  width: 100%;
  margin: 0 auto;
  ${d.K}

  /* Abstand Inhalt → Fußzeile (früher margin-bottom von Row und Col) */
  &:not(:last-child) {
    margin-bottom: ${({theme:e})=>e.margin.default};
  }
`,v=a.U.div.withConfig({displayName:"Footer.styles__FooterColumn",componentId:"sc-809a1aba-8"})`
  ${({$columns:e})=>(0,d.D)(e)}
`,w=a.U.div.withConfig({displayName:"Footer.styles__FooterSection",componentId:"sc-809a1aba-9"})`
  margin-bottom: 20px;
`,$=a.U.ul.withConfig({displayName:"Footer.styles__ContactList",componentId:"sc-809a1aba-10"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 0;
  padding: 0;
  list-style: none;
`,j=a.U.li.withConfig({displayName:"Footer.styles__ContactItem",componentId:"sc-809a1aba-11"})`
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
`,k=a.U.h2.withConfig({displayName:"Footer.styles__FooterSectionTitle",componentId:"sc-809a1aba-12"})`
  && {
    color: ${({theme:e})=>r(e)};
  }
  font-size: 1rem;
  font-weight: 700;
  margin: 0 0 16px;
  text-transform: uppercase;
`,C=a.U.nav.withConfig({displayName:"Footer.styles__FooterLinks",componentId:"sc-809a1aba-13"})`
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
`;var _=e.i(424734);e.i(821194);var I=e.i(99222),F=e.i(722216),N=e.i(507924),U=e.i(284248),K=e.i(891567);let T=[{titleKey:"footer.sections.links",links:[{href:"/team",labelKey:"footer.team"},{href:"/faq",labelKey:"footer.faq"},{href:"/about",labelKey:"footer.about"},{href:"/news",labelKey:"footer.latest"},{href:"/contact-us",labelKey:"footer.contactForm"},{href:"/services",labelKey:"footer.services"}]}],z={titleKey:"footer.contact",email:K._.info,phone:K.h.central,address:K.Y},L=[{href:"/agb",labelKey:"footer.terms"},{href:"/imprint",labelKey:"footer.imprint"},{href:"/privacy",labelKey:"footer.privacy"},{href:"/email-disclaimer",labelKey:"footer.emailDisclaimer"},{href:"/accessibility",labelKey:"footer.accessibility"}];e.i(411206);var R=e.i(173972),A=e.i(317573),S=e.i(757658),W=e.i(874142),H=e.i(813267);e.i(710788);var B=e.i(363451);e.i(311046);var P=e.i(499881);let D={logo:{xs:{span:12,offset:0},md:{span:3,offset:0},lg:{span:2,offset:0}},section:{xs:{span:12,offset:0},sm:{span:6,offset:0},md:{span:4,offset:0}},contact:{xs:{span:12,offset:0},sm:{span:6,offset:0},md:{span:5,offset:0},lg:{span:4,offset:0}},bottom:{xs:{span:12,offset:0}}},M=e=>({$columns:D[e],"data-columns":(0,d.m)(D[e])}),E={top:{placement:"inner",color:"white"}};e.s(["f",0,e=>{let i=e.edges??E,{tr:n}=(0,I.f)(),o=(0,a.i)(),{footer:r}=(0,F.f)(),l=(0,U.C)();return(0,t.jsxs)(p,{className:e.className,"data-testid":"footer-root","data-edge-contrast":i.top?.contrast??"",$edges:i,children:[(0,P.N)(i)&&(0,t.jsx)(B.f,{edges:i,dataTestId:"footer-root-edge"}),(0,t.jsxs)(y,{"data-testid":"footer-row","data-site-row":"true",children:[(0,t.jsx)(v,{"data-testid":"footer-logo-column",...M("logo"),children:(0,t.jsx)(b,{href:"/","aria-label":n("footer.logo.ariaLabel",{defaultValue:"plastship – zur Startseite"}),"data-testid":"footer-logo-link",children:(0,t.jsx)(_.f,{inverted:!o?.palette?.footer||s(o),monochrome:!0})})}),(0,t.jsx)(t.Fragment,{children:r.length>0?r.map((e,a)=>(0,t.jsx)(v,{...M("section"),children:(0,t.jsxs)(w,{"data-testid":`footer-cms-section-${a}`,"data-count":e.children?.length??0,children:[(0,t.jsx)(k,{"data-testid":`footer-cms-section-${a}-title`,children:(0,N.u)(e.label,l)}),(0,t.jsx)(C,{children:(e.children??[]).map((e,i)=>(0,t.jsx)(x,{href:e.href,"data-testid":`footer-cms-section-${a}-link-${i}`,children:(0,N.u)(e.label,l)},`${e.href}-${i}`))})]})},`${e.href}-${a}`)):T.map((e,a)=>(0,t.jsx)(v,{...M("section"),children:(0,t.jsxs)(w,{"data-testid":`footer-section-${a}`,"data-count":e.links.length,children:[(0,t.jsx)(k,{"data-testid":`footer-section-${a}-title`,children:n(e.titleKey)}),(0,t.jsx)(C,{children:e.links.map(e=>(0,t.jsx)(x,{href:e.href,"data-testid":`footer-link-${e.href.replace(/^\//,"").replace(/\//g,"-")}`,children:n(e.labelKey)},e.href))})]})},e.titleKey))}),(0,t.jsx)(v,{"data-testid":"footer-contact-column",...M("contact"),children:(0,t.jsxs)(w,{"data-testid":"footer-contact",children:[(0,t.jsx)(k,{"data-testid":"footer-contact-title",children:n(z.titleKey)}),(0,t.jsxs)($,{children:[(0,t.jsx)(j,{children:(0,t.jsx)(R.f,{kind:"mail",value:z.email,place:"footer",icon:(0,t.jsx)(A.f,{}),dataTestId:"footer-contact-email"})}),(0,t.jsx)(j,{children:(0,t.jsx)(R.f,{kind:"tel",value:z.phone.e164,place:"footer",icon:(0,t.jsx)(W.f,{}),dataTestId:"footer-contact-phone",children:z.phone.international})}),(0,t.jsx)(j,{children:(0,t.jsx)(R.f,{kind:"map",value:`${z.address.name}, ${(0,K.W)(z.address)}`,geo:z.address.geo,place:"footer",icon:(0,t.jsx)(H.f,{}),dataTestId:"footer-contact-address",children:(0,K.W)(z.address)})})]})]})})]}),(0,t.jsx)(y,{"data-testid":"footer-bottom-row","data-site-row":"true",children:(0,t.jsx)(v,{...M("bottom"),children:(0,t.jsxs)(h,{children:[(0,t.jsx)(f,{"data-testid":"footer-copyright",children:"© plastship GmbH"}),(0,t.jsxs)(m,{"data-testid":"footer-meta","data-count":L.length,children:[L.map(e=>(0,t.jsx)(x,{href:e.href,"data-testid":`footer-meta-${e.href.replace(/^\//,"")}`,children:n(e.labelKey)},e.href)),(0,t.jsx)(g,{type:"button",onClick:S.e,"data-testid":"footer-cookie-settings",children:n("footer.cookieSettings",{defaultValue:"Cookie-Einstellungen"})})]})]})})})]})}],538915);var V=e.i(271645),G=e.i(247902),O=e.i(825969),Y=e.i(499911);e.i(657782);var q=e.i(229132);e.i(730026);var Z=e.i(262076),Q=e.i(184914),J=e.i(157067),X=e.i(885895),ee=e.i(693830),et=e.i(949108),ea=e.i(49958),ei=e.i(726029);let en=(0,V.lazy)(()=>e.A(767483));e.s(["f",0,()=>{let e=(0,et.f)(),{status:a}=(0,ea.useSession)(),i=(0,ee.g)(),{isLeftSidebarOpen:n,closeLeftSidebar:o}=(0,J.i)(),{language:r}=(0,X.N)(),{tr:s}=(0,I.f)(r);return e?(0,t.jsx)(Q.f,{isOpen:n,onClose:o,mode:"guest",maxWidthPx:ei.F-1,barHeightPx:ei.W,footerAction:(0,t.jsx)(G.f,{href:"/login",modifier:O.j.PRIMARY,icon:(0,t.jsx)(Y.f,{}),iconAlign:O.W.RIGHT,dataTestId:"mobile-menu-item-login",children:s("header.login.label",{defaultValue:"Login"})}),children:(0,t.jsx)(Z.f,{"data-testid":"mobile-menu-section-public",children:(0,t.jsx)(q.f,{variant:"stacked",dataTestId:"mobile-menu-item-public"})})}):"authenticated"===a&&i?(0,t.jsx)(V.Suspense,{fallback:null,children:(0,t.jsx)(en,{barHeightPx:ei.W})}):null}],226129),e.s([],600639),e.s(["p",0,{top:{placement:"inner",color:"white",depth:"section"}},"q",0,"navy","e",0,function(e){return e&&"object"==typeof e?{edges:{top:e},flush:!0}:e&&"white"!==e?{edges:{top:{placement:"inner",color:e}},flush:!0}:{edges:void 0,flush:!1}}],546843)},584391,e=>{var t=e.i(843476),a=e.i(997053),i=e.i(726029);let n=a.U.div.withConfig({displayName:"Default.styles__Root",componentId:"sc-6c8f238f-0"})`
  --page-header-offset: ${i.W}px;
  ${i.u}
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-x: clip;
`,o=a.U.main.withConfig({displayName:"Default.styles__Main",componentId:"sc-6c8f238f-1"})`
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
`;var r=e.i(197754),s=e.i(538915);e.i(600639);var l=e.i(226129),d=e.i(729950),c=e.i(546843);e.s(["Default",0,e=>{let{children:a,inverted:i,paddingTop:p=!0,footerEdge:h}=e,f=(0,c.e)(h);return(0,d.H)()?(0,t.jsx)(t.Fragment,{children:a}):(0,t.jsxs)(n,{className:e.className,"data-testid":"default-root",children:[(0,t.jsx)(r.f,{navigation:!1,inverted:i,site:!0}),(0,t.jsx)(l.f,{}),(0,t.jsx)(o,{$paddingTop:p,$flushFooter:f.flush,children:a}),(0,t.jsx)(s.f,{inverted:i,edges:f.edges})]})}],584391)},33180,e=>{let t=e.i(584391).Default;e.s(["f",0,t])},816017,217997,e=>{var t=e.i(843476);e.i(507924);var a=e.i(891567);a.Y.name,a.h.central.international,a._.info,a.Y;let i=String.fromCharCode(8232),n=String.fromCharCode(8233);e.s(["f",0,function({data:e}){return(0,t.jsx)("script",{type:"application/ld+json","data-testid":"structured-data",dangerouslySetInnerHTML:{__html:JSON.stringify(e).replace(/</g,"\\u003c").replace(/>/g,"\\u003e").replace(/&/g,"\\u0026").split(i).join("\\u2028").split(n).join("\\u2029")}})}],217997),e.s([],816017)}])})();