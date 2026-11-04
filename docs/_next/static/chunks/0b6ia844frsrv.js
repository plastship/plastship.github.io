(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,429307,159255,e=>{var t=e.i(843476),a=e.i(997053);e.i(315481);var i=e.i(10003),n=e.i(726029),l=e.i(437992);let o=(0,a.U)(i.NavLink).withConfig({displayName:"ArrowLink__Root",componentId:"sc-c779a4e5-0"})`
  ${n.e}
  ${({$stretched:e})=>e&&n.i}
`,r=()=>(0,t.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":"true",children:(0,t.jsx)("path",{d:"M8.9 3.3a.9.9 0 0 1 1.3 0l4.1 4.1a.9.9 0 0 1 0 1.2l-4.1 4.1a.9.9 0 1 1-1.3-1.3l2.6-2.5H2.4a.9.9 0 1 1 0-1.8h9.1L8.9 4.6a.9.9 0 0 1 0-1.3Z"})}),s=a.U.span.withConfig({displayName:"ArrowLink__Nowrap",componentId:"sc-c779a4e5-1"})`
  white-space: nowrap;
`;e.s(["f",0,function({href:e,children:a,dataTestId:i,target:n,stretched:d=!1}){let c="string"==typeof a?a:null,h=c?c.lastIndexOf(" "):-1;return(0,t.jsx)(o,{href:e,"data-testid":i,"data-stretched":d?"true":void 0,$stretched:d,...(0,l.a)(e,{target:n}),children:c&&h>0?(0,t.jsxs)(t.Fragment,{children:[c.slice(0,h+1),(0,t.jsxs)(s,{children:[c.slice(h+1),(0,t.jsx)(r,{})]})]}):(0,t.jsxs)(t.Fragment,{children:[a,(0,t.jsx)(r,{})]})})}],159255),e.s([],429307)},114178,861133,e=>{var t=e.i(843476);e.i(315481);var a=e.i(10003),i=e.i(997053);let n=i.U.nav.withConfig({displayName:"Breadcrumb.styles__Root",componentId:"sc-1af95cf5-0"})`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  font-family: ${e=>e.theme.font.primaryFamily};
  font-size: 14px;
  margin-bottom: ${e=>e.theme.margin.small};
`,l=i.U.span.withConfig({displayName:"Breadcrumb.styles__BreadcrumbItem",componentId:"sc-1af95cf5-1"})`
  display: inline-flex;
  align-items: center;
`,o=(0,i.U)(a.NavLink).withConfig({displayName:"Breadcrumb.styles__BreadcrumbLink",componentId:"sc-1af95cf5-2"})`
  color: ${e=>e.theme.palette.default.primary};
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: ${e=>e.theme.palette.default.secondary};
    text-decoration: underline;
  }
`,r=i.U.span.withConfig({displayName:"Breadcrumb.styles__BreadcrumbText",componentId:"sc-1af95cf5-3"})`
  color: ${e=>e.theme.palette.default.greyDark};
`,s=i.U.span.withConfig({displayName:"Breadcrumb.styles__Separator",componentId:"sc-1af95cf5-4"})`
  margin: 0 8px;
  color: ${e=>e.theme.palette.default.greyDark};
  opacity: 0.5;
`;e.i(821194);var d=e.i(99222);e.s(["f",0,e=>{let{items:a,className:i,dataTestId:c="breadcrumb"}=e,{tr:h}=(0,d.f)();return(0,t.jsx)(n,{className:i,"data-testid":c,"aria-label":h("common.breadcrumb",{defaultValue:"Breadcrumb"}),children:a.map((e,i)=>{let n=i===a.length-1;return(0,t.jsxs)(l,{children:[e.href&&!n?(0,t.jsx)(o,{href:e.href,"data-testid":`${c}-link-${i}`,children:e.label}):(0,t.jsx)(r,{"data-testid":`${c}-text-${i}`,"aria-current":n?"page":void 0,children:e.label}),!n&&(0,t.jsx)(s,{"aria-hidden":"true",children:"/"})]},`${e.label}-${i}`)})})}],861133),e.s([],114178)},411206,173972,e=>{var t=e.i(843476),a=e.i(271645),i=e.i(618566);e.i(821194);var n=e.i(99222),l=e.i(476999),o=e.i(14431),r=e.i(713347),s=e.i(635647),d=e.i(891567),c=e.i(997053);let h=c.m`
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
`,m=c.U.a.withConfig({displayName:"ContactLink.styles__Link",componentId:"sc-41592123-0"})`
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
`,p=c.U.span.withConfig({displayName:"ContactLink.styles__Plain",componentId:"sc-41592123-1"})`
  ${h}
`,f={tel:{key:"contactLink.aria.tel",fallback:"Anrufen: {{value}}"},mail:{key:"contactLink.aria.mail",fallback:"E-Mail schreiben an {{value}}"},map:{key:"contactLink.aria.map",fallback:"Auf der Karte zeigen: {{value}}"}};e.s(["f",0,({kind:e,value:c,place:h,geo:u,subject:x,icon:g,children:y,dataTestId:$,className:b})=>{let{tr:w}=(0,n.f)(),v=(0,i.usePathname)(),k="string"==typeof c?c.trim():"",j=(0,r.useSiteLocale)(),C="tel"===e?(0,s.A)(k):"mail"===e?(0,s.c)(k,x):(0,s.W)({query:k,geo:u},j),_=(0,a.useCallback)(()=>{(0,l.q)(v||"/",d.F,{kind:e,place:h}),o.v({category:"contact",message:d.F,data:{kind:e,place:h}})},[v,e,h]),N=$??`contact-link-${e}`,F=(0,t.jsxs)(t.Fragment,{children:[g,y??k]});if(!k)return null;if(!C)return(0,t.jsx)(p,{className:b,"data-testid":N,"data-kind":e,"data-linked":"false",children:F});let P=k.replace(/\s*\n\s*/g,", ");return(0,t.jsx)(m,{className:b,href:C,onClick:_,"aria-label":w(f[e].key,{value:P,defaultValue:f[e].fallback}),"data-testid":N,"data-kind":e,"data-linked":"true",children:F})}],173972),e.s([],411206)},10059,e=>{var t=e.i(997053);let a=t.U.div.withConfig({displayName:"Row.styles__Root",componentId:"sc-3e89f65f-0"})`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 20px;
  container-type: inline-size;
  container-name: grid-row;

  @media (min-width: ${e=>e.theme.device.tablet}) {
    width: 100%;
    height: auto;
    max-width: 94%;
  }
`;e.s(["f",0,a])},152186,856337,e=>{var t=e.i(843476),a=e.i(10059);e.s(["f",0,e=>{let{children:i,dataTestId:n}=e;return(0,t.jsx)(a.f,{className:[e.className,"row"].filter(Boolean).join(" "),"data-testid":n||"Row-root",children:i})}],152186);var i=e.i(997053);let n=e=>`${e/12*100}%`,l=e=>Array.from({length:12},(t,a)=>`&.col-${e}-offset-${a} { margin-left: ${n(a)}; }`).join("\n  "),o=i.U.div.withConfig({displayName:"Col.styles__Root",componentId:"sc-8cb234a0-0"})`
  container-type: inline-size;
  container-name: grid-col;
  box-sizing: border-box;
  padding: 0 12px;
  margin-bottom: 12px;

  /* XS - Mobile (default) */
  &.col-xs-1 { flex: 0 0 ${n(1)}; max-width: ${n(1)}; }
  &.col-xs-2 { flex: 0 0 ${n(2)}; max-width: ${n(2)}; }
  &.col-xs-3 { flex: 0 0 ${n(3)}; max-width: ${n(3)}; }
  &.col-xs-4 { flex: 0 0 ${n(4)}; max-width: ${n(4)}; }
  &.col-xs-5 { flex: 0 0 ${n(5)}; max-width: ${n(5)}; }
  &.col-xs-6 { flex: 0 0 ${n(6)}; max-width: ${n(6)}; }
  &.col-xs-7 { flex: 0 0 ${n(7)}; max-width: ${n(7)}; }
  &.col-xs-8 { flex: 0 0 ${n(8)}; max-width: ${n(8)}; }
  &.col-xs-9 { flex: 0 0 ${n(9)}; max-width: ${n(9)}; }
  &.col-xs-10 { flex: 0 0 ${n(10)}; max-width: ${n(10)}; }
  &.col-xs-11 { flex: 0 0 ${n(11)}; max-width: ${n(11)}; }
  &.col-xs-12 { flex: 0 0 ${n(12)}; max-width: ${n(12)}; }

  ${l("xs")}

  /* SM - Tablet (min-width: 576px) */
  @media (min-width: 576px) {
    &.col-sm-1 { flex: 0 0 ${n(1)}; max-width: ${n(1)}; }
    &.col-sm-2 { flex: 0 0 ${n(2)}; max-width: ${n(2)}; }
    &.col-sm-3 { flex: 0 0 ${n(3)}; max-width: ${n(3)}; }
    &.col-sm-4 { flex: 0 0 ${n(4)}; max-width: ${n(4)}; }
    &.col-sm-5 { flex: 0 0 ${n(5)}; max-width: ${n(5)}; }
    &.col-sm-6 { flex: 0 0 ${n(6)}; max-width: ${n(6)}; }
    &.col-sm-7 { flex: 0 0 ${n(7)}; max-width: ${n(7)}; }
    &.col-sm-8 { flex: 0 0 ${n(8)}; max-width: ${n(8)}; }
    &.col-sm-9 { flex: 0 0 ${n(9)}; max-width: ${n(9)}; }
    &.col-sm-10 { flex: 0 0 ${n(10)}; max-width: ${n(10)}; }
    &.col-sm-11 { flex: 0 0 ${n(11)}; max-width: ${n(11)}; }
    &.col-sm-12 { flex: 0 0 ${n(12)}; max-width: ${n(12)}; }

    ${l("sm")}
  }

  /* MD - Desktop (min-width: 768px) */
  @media (min-width: 768px) {
    &.col-md-1 { flex: 0 0 ${n(1)}; max-width: ${n(1)}; }
    &.col-md-2 { flex: 0 0 ${n(2)}; max-width: ${n(2)}; }
    &.col-md-3 { flex: 0 0 ${n(3)}; max-width: ${n(3)}; }
    &.col-md-4 { flex: 0 0 ${n(4)}; max-width: ${n(4)}; }
    &.col-md-5 { flex: 0 0 ${n(5)}; max-width: ${n(5)}; }
    &.col-md-6 { flex: 0 0 ${n(6)}; max-width: ${n(6)}; }
    &.col-md-7 { flex: 0 0 ${n(7)}; max-width: ${n(7)}; }
    &.col-md-8 { flex: 0 0 ${n(8)}; max-width: ${n(8)}; }
    &.col-md-9 { flex: 0 0 ${n(9)}; max-width: ${n(9)}; }
    &.col-md-10 { flex: 0 0 ${n(10)}; max-width: ${n(10)}; }
    &.col-md-11 { flex: 0 0 ${n(11)}; max-width: ${n(11)}; }
    &.col-md-12 { flex: 0 0 ${n(12)}; max-width: ${n(12)}; }

    ${l("md")}
  }

  /* LG - Large Desktop (min-width: 992px) */
  @media (min-width: 992px) {
    &.col-lg-1 { flex: 0 0 ${n(1)}; max-width: ${n(1)}; }
    &.col-lg-2 { flex: 0 0 ${n(2)}; max-width: ${n(2)}; }
    &.col-lg-3 { flex: 0 0 ${n(3)}; max-width: ${n(3)}; }
    &.col-lg-4 { flex: 0 0 ${n(4)}; max-width: ${n(4)}; }
    &.col-lg-5 { flex: 0 0 ${n(5)}; max-width: ${n(5)}; }
    &.col-lg-6 { flex: 0 0 ${n(6)}; max-width: ${n(6)}; }
    &.col-lg-7 { flex: 0 0 ${n(7)}; max-width: ${n(7)}; }
    &.col-lg-8 { flex: 0 0 ${n(8)}; max-width: ${n(8)}; }
    &.col-lg-9 { flex: 0 0 ${n(9)}; max-width: ${n(9)}; }
    &.col-lg-10 { flex: 0 0 ${n(10)}; max-width: ${n(10)}; }
    &.col-lg-11 { flex: 0 0 ${n(11)}; max-width: ${n(11)}; }
    &.col-lg-12 { flex: 0 0 ${n(12)}; max-width: ${n(12)}; }

    ${l("lg")}
  }
`;e.s(["f",0,e=>{let{xs:a,xsOffset:i,sm:n,smOffset:l,md:r,mdOffset:s,lg:d,lgOffset:c,children:h,dataTestId:m,dataAttributes:p}=e,f=[void 0!==a&&`col-xs-${a}`,void 0!==i&&`col-xs-offset-${i}`,void 0!==n&&`col-sm-${n}`,void 0!==l&&`col-sm-offset-${l}`,void 0!==r&&`col-md-${r}`,void 0!==s&&`col-md-offset-${s}`,void 0!==d&&`col-lg-${d}`,void 0!==c&&`col-lg-offset-${c}`].filter(Boolean);return(0,t.jsx)(o,{className:[e.className,...f].filter(Boolean).join(" "),...p,"data-testid":m??"Col-root",children:h})}],856337)},710788,964687,240029,626645,599858,363451,e=>{var t=e.i(843476),a=e.i(271645);e.i(311046);var i=e.i(549560),n=e.i(499881),l=e.i(627430),o=e.i(250384),r=e.i(618566),s=e.i(997053),d=e.i(859146),c=e.i(593283),h=e.i(547905);Object.fromEntries(o.K.map(e=>[(0,o.i)(e),`/polymere/${(0,o.i)(e)}`]));let m=(e,t,a,i)=>({key:`polymer.${e}.${t}`,de:a,en:i}),p=(e,t,a,i,n)=>{let l=(0,o.i)(e);return{code:e,key:l,repeatUnit:t,name:m(l,"name",...a),uses:m(l,"uses",...i),recycling:m(l,"recycling",...n)}},f={PE:p("PE","–[CH₂–CH₂]–",["Polyethylen","Polyethylene"],["Folien, Flaschen, Behälter, Rohre (PE-LD, PE-HD)","Films, bottles, containers, pipes (PE-LD, PE-HD)"],["Kennnummer 2 (PE-HD) bzw. 4 (PE-LD) nach Entscheidung 97/129/EG","Identification code 2 (PE-HD) or 4 (PE-LD) under Decision 97/129/EC"]),PP:p("PP","–[CH₂–CH(CH₃)]–",["Polypropylen","Polypropylene"],["Verpackungen, Automobilteile, Haushaltswaren","Packaging, automotive parts, household goods"],["Kennnummer 5 nach Entscheidung 97/129/EG","Identification code 5 under Decision 97/129/EC"]),PVC:p("PVC","–[CH₂–CHCl]–",["Polyvinylchlorid","Polyvinyl chloride"],["Fensterprofile, Rohre, Bodenbeläge, Kabel","Window profiles, pipes, floor coverings, cables"],["Kennnummer 3 nach Entscheidung 97/129/EG","Identification code 3 under Decision 97/129/EC"]),PS:p("PS","–[CH₂–CH(C₆H₅)]–",["Polystyrol","Polystyrene"],["Verpackungen, Dämmstoff (EPS), Gehäuse","Packaging, insulation (EPS), housings"],["Kennnummer 6 nach Entscheidung 97/129/EG","Identification code 6 under Decision 97/129/EC"]),PET:p("PET","–[O–CH₂–CH₂–O–CO–C₆H₄–CO]–",["Polyethylenterephthalat","Polyethylene terephthalate"],["Flaschen, Fasern, Folien","Bottles, fibres, films"],["Kennnummer 1 nach Entscheidung 97/129/EG; Bottle-to-Bottle-Recycling","Identification code 1 under Decision 97/129/EC; bottle-to-bottle recycling"]),"PA 6":p("PA 6","–[NH–(CH₂)₅–CO]–",["Polyamid 6","Polyamide 6"],["Technische Teile, Fasern, Textilien","Technical parts, fibres, textiles"],["Keine eigene Kennnummer nach Entscheidung 97/129/EG","No identification code of its own under Decision 97/129/EC"])},u={repeatUnit:{key:"polymer.repeatUnit",de:"Wiederholeinheit",en:"Repeat unit"},uses:{key:"polymer.uses",de:"Anwendung",en:"Applications"},recycling:{key:"polymer.recycling",de:"Recycling",en:"Recycling"},open:{key:"polymer.open",de:"Zur Polymerseite",en:"Go to polymer page"},chain:{key:"polymer.chain",de:"Polymerkette",en:"Polymer chain"}};[...Object.values(f).flatMap(e=>[e.name,e.uses,e.recycling]),...Object.values(u)];let x="polymer_hover";var g=e.i(476999),y=e.i(14431);e.i(821194);var $=e.i(99222),b=e.i(885895);let w=s.U.div.withConfig({displayName:"PolymerChains.styles__Layer",componentId:"sc-3c953a1d-0"})`
  position: absolute;
  inset: 0;
  z-index: 2;
  pointer-events: none;
  /* Hof und Rand ragen an der Seitenkante um ein paar Pixel über das Band: waagerecht kappen
     (kein waagerechtes Scrollen), senkrecht frei für die Karte */
  overflow-x: clip;
  overflow-y: visible;
`,v=s.m`
  position: absolute;
  left: var(--chain-x);
  top: var(--chain-y);
  width: var(--chain-w);
  height: var(--chain-h);
  display: block;
  margin: 0;
  padding: 0;
  border: 0;
  background: none;
  color: inherit;
  font: inherit;
  cursor: pointer;
  pointer-events: none;
  -webkit-tap-highlight-color: transparent;

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.palette.default.secondary};
    outline-offset: 2px;
  }

  svg {
    display: block;
    overflow: visible;
  }

  [data-part='halo'] path,
  [data-part='atoms'] path,
  [data-part='hit'] path {
    pointer-events: visiblePainted;
  }

  /* #2249 Suchbild: unsichtbare Trefferfläche über Waben und Ringmitten samt kleinem Rand, damit
     der Zeiger die blasse Kette beim Streifen über die Naht findet (fill gesetzt, Deckkraft 0) */
  [data-part='hit'] path {
    fill-opacity: 0;
  }

  /* #2249 Suchbild: in Ruhe kaum von den Fransen zu unterscheiden (Werte in lib/hex/polymerColors.ts), aktiv wie bisher */
  [data-part='halo'] path {
    fill-opacity: ${c.w};
  }

  [data-part='bonds'] {
    opacity: ${c.d};
  }

  [data-part='element'] {
    opacity: ${c.z};
  }

  [data-part='code'] {
    opacity: 0;
  }

  [data-part='halo'] path,
  [data-part='atoms'] path,
  [data-part='bonds'],
  [data-part='code'],
  [data-part='element'] {
    transition:
      opacity ${c.y}ms ease,
      fill ${c.y}ms ease,
      stroke ${c.y}ms ease,
      fill-opacity ${c.y}ms ease,
      stroke-opacity ${c.y}ms ease,
      filter ${c.y}ms ease;

    @media (prefers-reduced-motion: reduce) {
      transition: none;
    }
  }

  /* Hover, Fokus, aufgeklappt: Kette nach vorn — Rand und Bindungen voll, Hof kräftiger, Kürzel ein */
  &[data-active='true'] {
    [data-part='atoms'] path {
      stroke-opacity: 1;
      filter: brightness(1.08);
    }
    [data-part='halo'] path {
      fill-opacity: 0.32;
    }
    [data-part='bonds'],
    [data-part='code'],
    [data-part='element'] {
      opacity: 1;
    }
  }
`,k=s.U.a.withConfig({displayName:"PolymerChains.styles__ChainLink",componentId:"sc-3c953a1d-1"})`
  ${v}
`,j=s.U.button.withConfig({displayName:"PolymerChains.styles__ChainButton",componentId:"sc-3c953a1d-2"})`
  ${v}
`,C=s.U.text.withConfig({displayName:"PolymerChains.styles__CodeText",componentId:"sc-3c953a1d-3"})`
  font-family: ${({theme:e})=>e.font.secondaryFamily};
  font-weight: 700;
  pointer-events: none;
`,_=s.U.text.withConfig({displayName:"PolymerChains.styles__ElementText",componentId:"sc-3c953a1d-4"})`
  font-family: ${({theme:e})=>e.font.secondaryFamily};
  font-weight: 700;
  pointer-events: none;
`,N=s.U.div.withConfig({displayName:"PolymerChains.styles__Card",componentId:"sc-3c953a1d-5"})`
  position: absolute;
  left: var(--card-x);
  width: var(--card-w);
  box-sizing: border-box;
  padding: ${({theme:e})=>e.padding.small};
  border: 1px solid ${({theme:e})=>e.palette.site.border};
  border-radius: ${({theme:e})=>e.margin.extrasmall};
  background: ${({theme:e})=>e.palette.site.card};
  box-shadow: ${({theme:e})=>e.palette.site.shadow};
  color: ${({theme:e})=>e.palette.site.text};
  font-family: ${({theme:e})=>e.font.secondaryFamily};
  font-size: 0.875rem;
  line-height: 1.4;
  pointer-events: none;
  opacity: 0;
  visibility: hidden;
  transition:
    opacity 160ms ease,
    visibility 0s linear 160ms;

  &[data-side='top'] {
    top: var(--card-y);
  }
  &[data-side='bottom'] {
    bottom: var(--card-y);
  }

  &[data-open='true'] {
    opacity: 1;
    visibility: visible;
    transition: opacity 160ms ease;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &[data-open='true'] {
      transition: none;
    }
  }

  dl {
    margin: 0;
  }
  dt {
    font-weight: 600;
  }
  dd {
    margin: 0 0 ${({theme:e})=>e.margin.extrasmall};
  }
  dd:last-child {
    margin-bottom: 0;
  }
`,F=s.U.p.withConfig({displayName:"PolymerChains.styles__CardTitle",componentId:"sc-3c953a1d-6"})`
  margin: 0 0 ${({theme:e})=>e.margin.extrasmall};
  font-weight: 700;
`,P=s.U.span.withConfig({displayName:"PolymerChains.styles__Formula",componentId:"sc-3c953a1d-7"})`
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
`,I=(0,a.createContext)({}),M=I.Provider,U=(e,t)=>(0,d.e)({x:e.x-t,y:e.y-t,width:e.size+2*t,height:e.size+2*t},(0,d.C)(e.size+2*t)),E=({chains:e,side:i,width:n,height:o,spec:d,dataTestId:m,seamY:p})=>{let v=(0,s.i)(),M=(0,a.useContext)(I),E=(0,r.usePathname)(),{language:R}=(0,b.N)(),{tr:S}=(0,$.f)(R),H=(0,a.useId)().replace(/:/g,""),[L,K]=(0,a.useState)(null),[D,T]=(0,a.useState)(null),B=(0,a.useRef)(new Set),A=(0,a.useMemo)(()=>{let e=(0,h.m)(v,d.color),t=(0,h.m)(v,d.own??"white"),a=v.palette.site.navy,i=v.palette.default.secondary,n=(0,c.Y)(t);return{neighbour:e,own:t,ink:n?"#ffffff":a,navy:a,green:i,white:"#ffffff",...d.polymerTone?{tone:{from:i,to:(0,c.p)(i,"#ffffff",.5)}}:{}}},[v,d.color,d.own,d.polymerTone]),W=(0,a.useCallback)((e,t)=>{if(t===x){if(B.current.has(e.id))return;B.current.add(e.id)}(0,g.q)(E||"/",t,{polymer:e.key}),(0,y.v)({category:"polymer-chain",message:t,data:{polymer:e.key}})},[E]);return 0===e.length||n<=0?null:(0,t.jsx)(w,{"data-testid":"hex-edge-polymer","data-edge":m,"data-side":i,"data-chains":e.length,"data-placement":"seam","data-seam-y":p,children:e.map(e=>{var r;let s,d,h,m,p=f[e.code],g=M[e.key]??null,y=(s=Math.min(...(r=e.atoms).map(e=>e.x))-4,d=Math.min(...r.map(e=>e.y))-4,h=Math.max(...r.map(e=>e.x+e.size))+4,{minX:s,minY:d,maxX:h,maxY:m=Math.max(...r.map(e=>e.y+e.size))+4,w:h-s,h:m-d}),$=e.atoms.map(e=>(0,c.K)(A,e.element,(0,c.m)(e.r,(0,l.c)(i)))),b=`${H}-${e.id}-info`,w=L===e.id||D===e.id,v=e=>w?e.rim:e.restRim,I=S(p.name.key,{defaultValue:p.name.de}),E=`${S(u.chain.key,{defaultValue:u.chain.de})} ${e.code} – ${I}`,R=Math.min(320,n-16),B=Math.max(8,Math.min(n-R-8,y.minX)),O="top"===i?y.maxY+8:o-y.minY+8,V=e.atoms[0],Y=(0,t.jsxs)("svg",{width:y.w,height:y.h,viewBox:`${y.minX} ${y.minY} ${y.w} ${y.h}`,"aria-hidden":"true",focusable:"false",children:[(0,t.jsx)("g",{"data-part":"hit",children:[...e.atoms,...e.rings].map(e=>(0,t.jsx)("path",{d:U(e,4),fill:A.ink},e.key))}),(0,t.jsx)("g",{"data-part":"halo",children:e.atoms.map((e,a)=>(0,t.jsx)("path",{d:U(e,3.5),fill:$[a].halo},e.key))}),(0,t.jsxs)("g",{"data-part":"bonds",strokeLinecap:"round",strokeWidth:3,children:[e.bonds.map(([a,i,n])=>{let l=e.atoms[a],o=e.atoms[i],r=(0,c.p)(v($[a]),v($[i]),.5);if(2===n){let e=o.cx-l.cx,n=o.cy-l.cy,s=Math.hypot(e,n)||1,d=-n/s*3.2,c=e/s*3.2;return(0,t.jsxs)("g",{stroke:r,"data-order":"2",children:[(0,t.jsx)("line",{x1:l.cx+d,y1:l.cy+c,x2:o.cx+d,y2:o.cy+c}),(0,t.jsx)("line",{x1:l.cx-d,y1:l.cy-c,x2:o.cx-d,y2:o.cy-c})]},`${a}-${i}`)}return(0,t.jsx)("line",{x1:l.cx,y1:l.cy,x2:o.cx,y2:o.cy,stroke:r},`${a}-${i}`)}),e.rings.map(e=>(0,t.jsx)("circle",{cx:e.cx,cy:e.cy,r:.36*e.size,fill:"none",strokeWidth:2.5,stroke:v($[0]),"data-ring":"aromatic"},e.key))]}),(0,t.jsx)("g",{"data-part":"atoms",strokeWidth:1.4,children:e.atoms.map((a,i)=>(0,t.jsx)("path",{d:U(a,-.2),fill:w?$[i].fill:$[i].restFill,stroke:v($[i]),strokeOpacity:e.rimAlpha,"data-element":a.element},a.key))}),e.atoms.map((e,a)=>"C"===e.element?null:(0,t.jsx)(_,{x:e.cx,y:e.cy+.12*e.size,textAnchor:"middle",fontSize:Math.round(.32*e.size),fill:w?$[a].label:$[a].restLabel,"data-part":"element",children:e.element},`el-${e.key}`)),(0,t.jsx)(C,{"data-part":"code",x:V.cx,y:"top"===i?y.minY-2:y.maxY+z(V)+2,fontSize:z(V)+2,fill:A.ink,children:e.code})]}),G={"data-testid":`polymer-chain-${e.key}`,"data-chain":e.id,"data-linked":g?"true":"false","data-active":w?"true":"false","data-units":e.units,"data-atoms":e.atoms.length,"aria-label":E,"aria-describedby":b,style:{"--chain-x":`${y.minX}px`,"--chain-y":`${y.minY}px`,"--chain-w":`${y.w}px`,"--chain-h":`${y.h}px`},onPointerEnter:()=>{K(e.id),W(e,x)},onPointerLeave:()=>K(t=>t===e.id?null:t),onFocus:()=>{K(e.id),W(e,x)},onBlur:()=>{K(t=>t===e.id?null:t),T(t=>t===e.id?null:t)}};return(0,t.jsxs)(a.default.Fragment,{children:[g?(0,t.jsx)(k,{...G,href:g,onClick:()=>W(e,"polymer_click"),children:Y}):(0,t.jsx)(j,{...G,type:"button","aria-expanded":D===e.id,onClick:()=>T(t=>t===e.id?null:e.id),onKeyDown:e=>{"Escape"===e.key&&T(null)},children:Y}),(0,t.jsxs)(N,{id:b,role:"tooltip","data-testid":`polymer-info-${e.key}`,"data-open":w?"true":"false","data-side":i,style:{"--card-x":`${B}px`,"--card-w":`${R}px`,"--card-y":`${O}px`},children:[(0,t.jsxs)(F,{children:[e.code," · ",I]}),(0,t.jsxs)("dl",{children:[(0,t.jsx)("dt",{children:S(u.repeatUnit.key,{defaultValue:u.repeatUnit.de})}),(0,t.jsx)("dd",{children:(0,t.jsx)(P,{children:p.repeatUnit})}),(0,t.jsx)("dt",{children:S(u.uses.key,{defaultValue:u.uses.de})}),(0,t.jsx)("dd",{children:S(p.uses.key,{defaultValue:p.uses.de})}),(0,t.jsx)("dt",{children:S(u.recycling.key,{defaultValue:u.recycling.de})}),(0,t.jsx)("dd",{children:S(p.recycling.key,{defaultValue:p.recycling.de})})]}),g&&(0,t.jsxs)(F,{as:"p","data-part":"open",children:[S(u.open.key,{defaultValue:u.open.de})," →"]})]})]},e.id)})})},z=e=>Math.round(.32*e.size);e.s(["a",0,E,"V",0,M],964687);var R=e.i(355351);let S=(e,t,i=R.E)=>{let[n,l]=(0,a.useState)({width:0,height:0,columns:t});return(0,a.useEffect)(()=>{let t=e.current;if(!t)return;let a=()=>{let e=t.getBoundingClientRect(),a=Math.max(t.offsetWidth,Math.ceil(e.width-.01)),n=Math.max(t.offsetHeight,Math.ceil(e.height-.01));a<=0||n<=0||l(e=>e.width===a&&e.height===n?e:{width:a,height:n,columns:(0,R.L)(a,i)})};if(a(),"u"<typeof ResizeObserver)return;let n=new ResizeObserver(a);return n.observe(t),()=>n.disconnect()},[e,i]),n};e.s(["f",0,S],240029);var H=e.i(380153),L=e.i(345712);let K=s.U.div.withConfig({displayName:"HexEdge.styles__Root",componentId:"sc-9795135c-0"})`
  position: absolute;
  inset: 0;
  z-index: ${({$zIndex:e})=>e};
  pointer-events: none;
  contain: layout style;
`,D=s.U.svg.withConfig({displayName:"HexEdge.styles__Canvas",componentId:"sc-9795135c-1"})`
  position: absolute;
  left: var(--edge-x, 0);
  top: var(--edge-y, 0);
  width: var(--edge-w, 0);
  height: var(--edge-h, 0);
  display: block;
  overflow: visible;

  /* #1952: volle Kacheln liegen gebündelt in einem Pfad je Gruppe und Deckkraft */
  path[data-rounded='true'],
  path[data-full='true'] {
    opacity: var(--alpha);
  }

  /* #2234: Kacheln zwischen zwei Zuständen blenden je Kachel versetzt */
  path[data-ring='true'] {
    opacity: var(--alpha);
    transition: opacity var(--ring-duration, 0ms) ease-out var(--ring-delay, 0ms);

    @media (prefers-reduced-motion: reduce) {
      transition: none;
    }
  }

  [data-partial='true'] {
    ${h.t}
  }

  /* #2224: Flackern einzelner Kacheln (Pollenflug, Strom) */
  [data-flicker='true'] {
    ${h.Q}
  }

  &[data-paused='true'] :is([data-partial='true'], [data-flicker='true']) {
    animation-play-state: paused;
  }
`,T=s.U.svg.withConfig({displayName:"HexEdge.styles__FallbackStrip",componentId:"sc-9795135c-2"})`
  position: absolute;
  display: block;

  &[data-side='bottom'],
  &[data-side='top'] {
    left: 0;
    width: 100%;
    height: ${({$depth:e})=>e}px;
  }
  &[data-side='left'],
  &[data-side='right'] {
    top: 0;
    height: 100%;
    width: ${({$depth:e})=>e}px;
  }
  &[data-side='bottom'][data-placement='inner'] {
    bottom: 0;
  }
  &[data-side='bottom'][data-placement='outer'] {
    top: 100%;
  }
  &[data-side='top'][data-placement='inner'] {
    top: 0;
  }
  &[data-side='top'][data-placement='outer'] {
    bottom: 100%;
  }
  &[data-side='left'][data-placement='inner'] {
    left: 0;
  }
  &[data-side='left'][data-placement='outer'] {
    right: 100%;
  }
  &[data-side='right'][data-placement='inner'] {
    right: 0;
  }
  &[data-side='right'][data-placement='outer'] {
    left: 100%;
  }

  @media (max-width: ${L.p.tabletportrait}px) {
    &[data-side='left'],
    &[data-side='right'] {
      display: none;
    }
  }

  path[data-rounded='true'],
  path[data-full='true'] {
    opacity: var(--alpha);
  }

  [data-partial='true'] {
    ${h.t}
  }

  [data-flicker='true'] {
    ${h.Q}
  }
`,B=e=>!!e&&e.startsWith("url("),A=s.U.g.withConfig({displayName:"HexEdge.styles__TileGroup",componentId:"sc-9795135c-3"})`
  color: ${({theme:e,$color:t,$fill:a})=>(a&&!B(a)?a:void 0)??("mask"===t?"#ffffff":"onAccent"===t?e.palette.text.onAccent:"tint"===t||"navy"===t||"navyDark"===t?(0,h.m)(e,t):e.palette.default[t])};
  /* Mit eigener Füllfarbe folgt die Gruppe ihrer Quelle im selben Frame, ohne Nachlauf (#1497) */
  transition: ${({$fill:e})=>e?"none":"color 0.2s ease"};
  /* Nachtrag #2186: Verlauf (Seitenkopf-Außenrand) direkt als Füllung */
  fill: ${({$fill:e})=>B(e)?e:"currentColor"};
  stroke: none;
  shape-rendering: crispEdges;

  /* Mit eigener Füllfarbe geht der Rand nahtlos in die Fläche des Hosts über:
     volle Kacheln schließen die Rasterfugen mit einer Kontur in ihrer Farbe (#1497) */
  ${({$fill:e})=>e&&s.m`
      [data-full='true'] {
        stroke: ${B(e)?e:"currentColor"};
        stroke-width: 1px;
      }
    `}
`;e.s(["$",0,D,"o",0,T,"F",0,K,"z",0,A],626645);var W=e.i(650529);let O=([e,t])=>`${Math.round(4*e)}:${Math.round(4*t)}`,V=(e,t,a=0,i=0)=>(0,d.M)((0,R.F)(e,a,i)).map(e=>t.has(O(e))),Y=({tiles:e,color:i,offsetX:n=0,offsetY:l=0,clipPath:o,fill:r,dataTestId:s})=>{let c=(0,a.useMemo)(()=>((e,t,a)=>{let i=new Map;for(let n of e){if(n.alpha<.995||n.flicker||n.transition)continue;let e=i.get(n.alpha)??{alpha:n.alpha,parts:[]};e.parts.push((0,R.H)(n,t,a)),i.set(n.alpha,e)}return[...i.values()].map(e=>({alpha:e.alpha,count:e.parts.length,d:e.parts.join(" ")}))})(e,n,l),[e,n,l]),h=(0,a.useMemo)(()=>e.filter(e=>(0,W.v)(e.alpha)&&!e.flicker&&!e.transition),[e]),m=(0,a.useMemo)(()=>e.filter(e=>e.flicker&&e.alpha>.005),[e]),p=(0,a.useMemo)(()=>e.filter(e=>e.transition&&!e.flicker),[e]),f=(0,a.useMemo)(()=>((e,t=0,a=0)=>{let i=new Set;for(let n of e)if(!(n.alpha<.995))for(let e of(0,d.M)((0,R.F)(n,t,a)))i.add(O(e));return i})(e,n,l),[e,n,l]);return(0,t.jsxs)(A,{$color:i,$fill:r,clipPath:o,"data-testid":s,"data-count":e.length,"data-elements":c.length+h.length+m.length+p.length,"data-fill":r,children:[c.map(e=>(0,t.jsx)("path",{d:e.d,"data-full":"true","data-count":e.count,"data-alpha":e.alpha,fillRule:"nonzero",style:{"--alpha":String(e.alpha)}},`full-${e.alpha}`)),h.map(e=>{let a=(0,W.g)(e),i=V(e,f,n,l),o=i.filter(Boolean).length;return(0,t.jsx)("path",{d:(0,d.e)((0,R.F)(e,n,l),(0,d.C)(e.size),i),"data-rounded":"true","data-sharp":o>0?o:void 0,"data-partial":"true",style:{"--alpha":String(e.alpha),"--shimmer-period":`${a.period}ms`,"--shimmer-offset":`${a.offset}ms`}},e.key)}),m.map(e=>{let a=(0,W.O)(e),i=e.alpha>=.995,o=i?[]:V(e,f,n,l);return(0,t.jsx)("path",{d:i?(0,R.H)(e,n,l):(0,d.e)((0,R.F)(e,n,l),(0,d.C)(e.size),o),"data-rounded":i?void 0:"true","data-full":i?"true":void 0,"data-flicker":"true",style:{"--alpha":String(e.alpha),"--flicker-period":`${a.period}ms`,"--flicker-offset":`${a.offset}ms`}},e.key)}),p.map(e=>{let a=(0,W.v)(e.alpha),i=(0,W.g)(e);return(0,t.jsx)("path",{d:(0,R.H)(e,n,l),"data-ring":"true","data-partial":a?"true":void 0,style:{"--alpha":String(e.alpha),"--ring-delay":`${e.transition?.delay??0}ms`,"--ring-duration":`${e.transition?.duration??0}ms`,...a?{"--shimmer-period":`${i.period}ms`,"--shimmer-offset":`${i.offset}ms`}:{}}},e.key)})]})};e.s(["f",0,Y],599858);let G=e=>{let t=new Map;for(let a of e){let e=a.image?`${a.placement}-image-${a.image}`:`${a.placement}-${a.color}`,i=t.get(e)??{key:e,placement:a.placement,color:a.color,...a.image?{image:a.image}:{},cells:[]};i.cells.push(a),t.set(e,i)}return[...t.values()]},q=e=>{let t={};for(let a of Object.keys(e)){let i=e[a];i&&(t[a]={placement:i.placement,color:i.color,depth:i.depth,overlap:i.overlap,...i.contrast?{contrast:i.contrast}:{}})}return t},Z=(e,t)=>{try{return t(e)}catch(a){if(!Object.values(e).some(e=>e?.style&&"fransen"!==e.style))throw a;return(0,y.y)(a),t(q(e))}},X=({edges:e,columns:r,zIndex:s=-1,fill:d,dataTestId:c="hex-edge",className:h})=>{let m=(0,a.useRef)(null),p=S(m,40),f=r??p.columns,u=(e=>{let[t,i]=(0,a.useState)(!0);return(0,a.useEffect)(()=>{let t=e.current;if(!t||"u"<typeof IntersectionObserver)return;let a=new IntersectionObserver(([e])=>i(e.isIntersecting),{rootMargin:"200px"});return a.observe(t),()=>a.disconnect()},[e]),t})(m),x=(0,H.f)(`(max-width: ${L.p.tabletportrait}px)`),g=(0,a.useId)().replace(/:/g,""),y=x?(0,n.Q)(e):e,$=JSON.stringify(y),{layout:b,ketten:w}=(0,a.useMemo)(()=>Z(JSON.parse($),e=>({layout:(0,n.T)(p.width,p.height,f,e),ketten:((e,t,a,i)=>{if(t<=0||a<=0)return[];let n=[];for(let r of["top","bottom"]){let s=e[r];if(!s||"polymer"!==(0,l.N)(r,s))continue;let{chains:d,seamY:c}=(0,o.C)(t,a,i,r,s);d.length>0&&null!==c&&n.push({side:r,spec:s,chains:d,seamY:c})}return n})(e,p.width,p.height,f)})),[p.width,p.height,f,$]),v=(0,a.useMemo)(()=>G(b.cells),[b]),{width:k,height:j,offsetX:C,offsetY:_}=b,N=JSON.stringify(e),F=(0,a.useMemo)(()=>p.width>0?[]:Z(JSON.parse(N),e=>(0,i.r)(e)),[p.width,N]);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(K,{ref:m,className:h,$zIndex:s,"aria-hidden":"true","data-testid":c,"data-edges":(0,n.a)(y),"data-style":(0,n.C)(y),"data-tiles":b.cells.length,"data-measured":p.width>0?"true":"false",children:[F.map(e=>{let{x:a,y:i,width:n,height:l}=e.viewBox;return(0,t.jsx)(T,{viewBox:`${a} ${i} ${n} ${l}`,preserveAspectRatio:"xMidYMid slice",focusable:"false","data-side":e.side,"data-placement":e.placement,"data-testid":`${c}-fallback-${e.key}`,$depth:e.depth,children:G(e.cells).map(a=>(0,t.jsx)(Y,{tiles:a.cells,color:a.color,fill:d?.[a.placement],dataTestId:`${c}-fallback-${e.key}-${a.color}`},a.key))},e.key)}),b.cells.length>0&&(0,t.jsxs)(D,{focusable:"false","data-testid":`${c}-svg`,"data-paused":u?"false":"true","data-width":k,"data-height":j,style:{"--edge-x":`${-C}px`,"--edge-y":`${-_}px`,"--edge-w":`${k}px`,"--edge-h":`${j}px`},children:[(0,t.jsxs)("defs",{children:[(0,t.jsx)("clipPath",{id:`${g}-inner`,children:(0,t.jsx)("rect",{x:C,y:_,width:p.width,height:p.height})}),(0,t.jsx)("clipPath",{id:`${g}-outer`,children:(0,t.jsx)("path",{clipRule:"evenodd",d:`M0 0H${k}V${j}H0Z M${C} ${_}v${p.height}h${p.width}v${-p.height}Z`})})]}),Object.keys(y).filter(e=>y[e]?.placement==="inner").map(e=>{let a=y[e];if(!a)return null;let i=((e,t,a,i,n)=>{switch(e){case"top":return{x:t,y:a-1,width:i,height:3};case"bottom":return{x:t,y:a+n-2,width:i,height:3};case"left":return{x:t-1,y:a,width:3,height:n};default:return{x:t+i-2,y:a,width:3,height:n}}})(e,C,_,p.width,p.height);return(0,t.jsx)(A,{$color:a.color,$fill:d?.inner,"data-testid":`${c}-seam-${e}`,children:(0,t.jsx)("rect",{...i})},`seam-${e}`)}),v.map((e,a)=>{var i;let n,l;return e.image?(0,t.jsxs)("g",{clipPath:`url(#${g}-${e.placement})`,"data-testid":`${c}-${e.placement}-image`,"data-count":e.cells.length,children:[(0,t.jsx)("mask",{id:`${g}-bild-${a}`,maskUnits:"userSpaceOnUse",x:0,y:0,width:k,height:j,children:(0,t.jsx)(Y,{tiles:e.cells,color:"mask",offsetX:C,offsetY:_})}),(0,t.jsx)("image",{href:e.image,...(i=e.cells,n=Math.min(...i.map(e=>e.x)),l=Math.min(...i.map(e=>e.y)),{x:n+C,y:l+_,width:Math.max(...i.map(e=>e.x+e.size))-n,height:Math.max(...i.map(e=>e.y+e.size))-l}),preserveAspectRatio:"xMidYMid slice",mask:`url(#${g}-bild-${a})`})]},e.key):(0,t.jsx)(Y,{tiles:e.cells,color:e.color,offsetX:C,offsetY:_,clipPath:`url(#${g}-${e.placement})`,fill:d?.[e.placement],dataTestId:`${c}-${e.placement}-${e.color}`},e.key)})]})]}),w.map(({side:e,spec:a,chains:i,seamY:n})=>(0,t.jsx)(E,{chains:i,side:e,seamY:n,width:p.width,height:p.height,spec:a,dataTestId:c},`polymer-${e}`))]})};class J extends a.default.Component{state={failed:!1};static getDerivedStateFromError(){return{failed:!0}}componentDidCatch(e,t){(0,y.v)({category:"hex-edge",message:"render-error",data:{stufe:this.props.stufe}}),(0,y.i)(e,{componentStack:t.componentStack})}render(){return this.state.failed?this.props.ersatz:this.props.children}}e.s(["f",0,e=>(0,t.jsx)(J,{stufe:"fransen",ersatz:null,children:(0,t.jsx)(J,{stufe:"arten",ersatz:(0,t.jsx)(X,{...e,edges:q(e.edges)}),children:(0,t.jsx)(X,{...e})})})],363451),e.s([],710788)},813267,e=>{var t=e.i(843476),a=e.i(997053);let i=a.U.svg.withConfig({displayName:"IconLocation.styles__Root",componentId:"sc-d4764d0b-0"})``;e.s(["f",0,e=>(0,t.jsxs)(i,{className:e.className,"data-testid":"icon-location-root",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:[(0,t.jsx)("path",{d:"M4.5 9.75768C4.5 15.5 12 22 12 22C12 22 19.5 15.5 19.5 9.75768C19.5 4.81181 15.6559 2 12 2C8.34409 2 4.5 4.81181 4.5 9.75768Z",stroke:"currentColor",strokeWidth:"2",strokeLinejoin:"round"}),(0,t.jsx)("circle",{cx:"12",cy:"9.5",r:"2.5",stroke:"currentColor",strokeWidth:"2"})]})],813267)},874142,e=>{let t=e.i(215063).f;e.s(["f",0,t])},538915,226129,600639,546843,e=>{var t=e.i(843476),a=e.i(997053);e.i(315481);var i=e.i(10003),n=e.i(547905),l=e.i(136717);let o=e=>(0,l.L)(e.palette.footer.backgroundEnd),r=e=>(0,l.p)(e.palette.footer.backgroundEnd),s=(e,t)=>r(e)?`rgba(255, 255, 255, ${t})`:`rgba(33, 37, 41, ${t})`;var d=e.i(474704),c=e.i(807897);let h=a.U.footer.withConfig({displayName:"Footer.styles__Root",componentId:"sc-809a1aba-0"})`
  width: 100%;
  /* #2164: Verlauf aus dem Theme, in beiden Modi dunkel; Schrift aus dem Kontrast (footerColors) */
  background: linear-gradient(
    to top,
    ${({theme:e})=>e.palette.footer.background},
    ${({theme:e})=>e.palette.footer.backgroundEnd}
  );
  color: ${({theme:e})=>o(e)};
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
    color: ${({theme:e})=>o(e)};
  }
`,m=a.U.div.withConfig({displayName:"Footer.styles__BottomBar",componentId:"sc-809a1aba-1"})`
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
`,p=a.U.span.withConfig({displayName:"Footer.styles__Copyright",componentId:"sc-809a1aba-2"})`
  white-space: nowrap;
`,f=a.U.nav.withConfig({displayName:"Footer.styles__NavMeta",componentId:"sc-809a1aba-3"})`
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
    color: ${({theme:e})=>o(e)};
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
`,u=a.U.button.withConfig({displayName:"Footer.styles__FooterMetaButton",componentId:"sc-809a1aba-4"})`
  padding: 0;
  border: 0;
  background: none;
  font: inherit;
  cursor: pointer;
  color: ${({theme:e})=>o(e)};
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
`,g=(c.s.height-c.m)/c.s.width*133,y=(0,a.U)(i.NavLink).withConfig({displayName:"Footer.styles__LogoLink",componentId:"sc-809a1aba-6"})`
  display: inline-block;
  /* gestapelt: Luft zur ersten Gruppe; unter der Grundlinie, verschiebt sie nicht */
  padding-bottom: ${({theme:e})=>e.margin.small};
  text-decoration: none;

  && svg {
    display: inline;
    width: ${133}px;
    height: auto;
    vertical-align: baseline;
    margin-bottom: ${-g}px;
  }
`,$=a.U.div.withConfig({displayName:"Footer.styles__FooterRow",componentId:"sc-809a1aba-7"})`
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
`,b=a.U.div.withConfig({displayName:"Footer.styles__FooterColumn",componentId:"sc-809a1aba-8"})`
  ${({$columns:e})=>(0,d.D)(e)}
`,w=a.U.div.withConfig({displayName:"Footer.styles__FooterSection",componentId:"sc-809a1aba-9"})`
  margin-bottom: 20px;
`,v=a.U.ul.withConfig({displayName:"Footer.styles__ContactList",componentId:"sc-809a1aba-10"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 0;
  padding: 0;
  list-style: none;
`,k=a.U.li.withConfig({displayName:"Footer.styles__ContactItem",componentId:"sc-809a1aba-11"})`
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
    color: ${({theme:e})=>o(e)};
  }

  && > a:hover {
    text-decoration: underline;
  }
`,j=a.U.h2.withConfig({displayName:"Footer.styles__FooterSectionTitle",componentId:"sc-809a1aba-12"})`
  && {
    color: ${({theme:e})=>o(e)};
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
    color: ${({theme:e})=>o(e)};
  }

  && a:hover,
  && a:focus-visible {
    text-decoration: underline;
  }
`;var _=e.i(424734);e.i(821194);var N=e.i(99222),F=e.i(722216),P=e.i(507924),I=e.i(284248),M=e.i(891567);let U=[{titleKey:"footer.sections.links",links:[{href:"/team",labelKey:"footer.team"},{href:"/faq",labelKey:"footer.faq"},{href:"/about",labelKey:"footer.about"},{href:"/news",labelKey:"footer.latest"},{href:"/contact-us",labelKey:"footer.contactForm"},{href:"/services",labelKey:"footer.services"}]}],E={titleKey:"footer.contact",email:M._.info,phone:M.h.central,address:M.Y},z=[{href:"/agb",labelKey:"footer.terms"},{href:"/imprint",labelKey:"footer.imprint"},{href:"/privacy",labelKey:"footer.privacy"},{href:"/email-disclaimer",labelKey:"footer.emailDisclaimer"},{href:"/accessibility",labelKey:"footer.accessibility"}];e.i(411206);var R=e.i(173972),S=e.i(317573),H=e.i(757658),L=e.i(874142),K=e.i(813267);e.i(710788);var D=e.i(363451);e.i(311046);var T=e.i(499881);let B={logo:{xs:{span:12,offset:0},md:{span:3,offset:0},lg:{span:2,offset:0}},section:{xs:{span:12,offset:0},sm:{span:6,offset:0},md:{span:4,offset:0}},contact:{xs:{span:12,offset:0},sm:{span:6,offset:0},md:{span:5,offset:0},lg:{span:4,offset:0}},bottom:{xs:{span:12,offset:0}}},A=e=>({$columns:B[e],"data-columns":(0,d.m)(B[e])}),W={top:{placement:"inner",color:"white"}};e.s(["f",0,e=>{let i=e.edges??W,{tr:n}=(0,N.f)(),l=(0,a.i)(),{footer:o}=(0,F.f)(),s=(0,I.C)();return(0,t.jsxs)(h,{className:e.className,"data-testid":"footer-root","data-edge-contrast":i.top?.contrast??"",$edges:i,children:[(0,T.N)(i)&&(0,t.jsx)(D.f,{edges:i,dataTestId:"footer-root-edge"}),(0,t.jsxs)($,{"data-testid":"footer-row","data-site-row":"true",children:[(0,t.jsx)(b,{"data-testid":"footer-logo-column",...A("logo"),children:(0,t.jsx)(y,{href:"/","aria-label":n("footer.logo.ariaLabel",{defaultValue:"plastship – zur Startseite"}),"data-testid":"footer-logo-link",children:(0,t.jsx)(_.f,{inverted:!l?.palette?.footer||r(l),monochrome:!0})})}),(0,t.jsx)(t.Fragment,{children:o.length>0?o.map((e,a)=>(0,t.jsx)(b,{...A("section"),children:(0,t.jsxs)(w,{"data-testid":`footer-cms-section-${a}`,"data-count":e.children?.length??0,children:[(0,t.jsx)(j,{"data-testid":`footer-cms-section-${a}-title`,children:(0,P.u)(e.label,s)}),(0,t.jsx)(C,{children:(e.children??[]).map((e,i)=>(0,t.jsx)(x,{href:e.href,"data-testid":`footer-cms-section-${a}-link-${i}`,children:(0,P.u)(e.label,s)},`${e.href}-${i}`))})]})},`${e.href}-${a}`)):U.map((e,a)=>(0,t.jsx)(b,{...A("section"),children:(0,t.jsxs)(w,{"data-testid":`footer-section-${a}`,"data-count":e.links.length,children:[(0,t.jsx)(j,{"data-testid":`footer-section-${a}-title`,children:n(e.titleKey)}),(0,t.jsx)(C,{children:e.links.map(e=>(0,t.jsx)(x,{href:e.href,"data-testid":`footer-link-${e.href.replace(/^\//,"").replace(/\//g,"-")}`,children:n(e.labelKey)},e.href))})]})},e.titleKey))}),(0,t.jsx)(b,{"data-testid":"footer-contact-column",...A("contact"),children:(0,t.jsxs)(w,{"data-testid":"footer-contact",children:[(0,t.jsx)(j,{"data-testid":"footer-contact-title",children:n(E.titleKey)}),(0,t.jsxs)(v,{children:[(0,t.jsx)(k,{children:(0,t.jsx)(R.f,{kind:"mail",value:E.email,place:"footer",icon:(0,t.jsx)(S.f,{}),dataTestId:"footer-contact-email"})}),(0,t.jsx)(k,{children:(0,t.jsx)(R.f,{kind:"tel",value:E.phone.e164,place:"footer",icon:(0,t.jsx)(L.f,{}),dataTestId:"footer-contact-phone",children:E.phone.international})}),(0,t.jsx)(k,{children:(0,t.jsx)(R.f,{kind:"map",value:`${E.address.name}, ${(0,M.W)(E.address)}`,geo:E.address.geo,place:"footer",icon:(0,t.jsx)(K.f,{}),dataTestId:"footer-contact-address",children:(0,M.W)(E.address)})})]})]})})]}),(0,t.jsx)($,{"data-testid":"footer-bottom-row","data-site-row":"true",children:(0,t.jsx)(b,{...A("bottom"),children:(0,t.jsxs)(m,{children:[(0,t.jsx)(p,{"data-testid":"footer-copyright",children:"© plastship GmbH"}),(0,t.jsxs)(f,{"data-testid":"footer-meta","data-count":z.length,children:[z.map(e=>(0,t.jsx)(x,{href:e.href,"data-testid":`footer-meta-${e.href.replace(/^\//,"")}`,children:n(e.labelKey)},e.href)),(0,t.jsx)(u,{type:"button",onClick:H.e,"data-testid":"footer-cookie-settings",children:n("footer.cookieSettings",{defaultValue:"Cookie-Einstellungen"})})]})]})})})]})}],538915);var O=e.i(271645),V=e.i(247902),Y=e.i(825969),G=e.i(499911);e.i(657782);var q=e.i(229132);e.i(730026);var Z=e.i(262076),X=e.i(184914),J=e.i(157067),Q=e.i(885895),ee=e.i(693830),et=e.i(949108),ea=e.i(49958),ei=e.i(726029);let en=(0,O.lazy)(()=>e.A(767483));e.s(["f",0,()=>{let e=(0,et.f)(),{status:a}=(0,ea.useSession)(),i=(0,ee.g)(),{isLeftSidebarOpen:n,closeLeftSidebar:l}=(0,J.i)(),{language:o}=(0,Q.N)(),{tr:r}=(0,N.f)(o);return e?(0,t.jsx)(X.f,{isOpen:n,onClose:l,mode:"guest",maxWidthPx:ei.F-1,barHeightPx:ei.W,footerAction:(0,t.jsx)(V.f,{href:"/login",modifier:Y.j.PRIMARY,icon:(0,t.jsx)(G.f,{}),iconAlign:Y.W.RIGHT,dataTestId:"mobile-menu-item-login",children:r("header.login.label",{defaultValue:"Login"})}),children:(0,t.jsx)(Z.f,{"data-testid":"mobile-menu-section-public",children:(0,t.jsx)(q.f,{variant:"stacked",dataTestId:"mobile-menu-item-public"})})}):"authenticated"===a&&i?(0,t.jsx)(O.Suspense,{fallback:null,children:(0,t.jsx)(en,{barHeightPx:ei.W})}):null}],226129),e.s([],600639),e.s(["p",0,{top:{placement:"inner",color:"white",depth:"section"}},"q",0,"navy","e",0,function(e){return e&&"object"==typeof e?{edges:{top:e},flush:!0}:e&&"white"!==e?{edges:{top:{placement:"inner",color:e}},flush:!0}:{edges:void 0,flush:!1}}],546843)},584391,e=>{var t=e.i(843476),a=e.i(997053),i=e.i(726029);let n=a.U.div.withConfig({displayName:"Default.styles__Root",componentId:"sc-6c8f238f-0"})`
  --page-header-offset: ${i.W}px;
  ${i.u}
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-x: clip;
`,l=a.U.main.withConfig({displayName:"Default.styles__Main",componentId:"sc-6c8f238f-1"})`
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
`;var o=e.i(197754),r=e.i(538915);e.i(600639);var s=e.i(226129),d=e.i(729950),c=e.i(546843);e.s(["Default",0,e=>{let{children:a,inverted:i,paddingTop:h=!0,footerEdge:m}=e,p=(0,c.e)(m);return(0,d.H)()?(0,t.jsx)(t.Fragment,{children:a}):(0,t.jsxs)(n,{className:e.className,"data-testid":"default-root",children:[(0,t.jsx)(o.f,{navigation:!1,inverted:i,site:!0}),(0,t.jsx)(s.f,{}),(0,t.jsx)(l,{$paddingTop:h,$flushFooter:p.flush,children:a}),(0,t.jsx)(r.f,{inverted:i,edges:p.edges})]})}],584391)},33180,e=>{let t=e.i(584391).Default;e.s(["f",0,t])},729950,e=>{var t=e.i(271645);let a=(0,t.createContext)(null);e.s(["R",0,a,"H",0,function(){return(0,t.useContext)(a)}])},816017,217997,e=>{var t=e.i(843476);e.i(507924);var a=e.i(891567);a.Y.name,a.h.central.international,a._.info,a.Y;let i=String.fromCharCode(8232),n=String.fromCharCode(8233);e.s(["f",0,function({data:e}){return(0,t.jsx)("script",{type:"application/ld+json","data-testid":"structured-data",dangerouslySetInnerHTML:{__html:JSON.stringify(e).replace(/</g,"\\u003c").replace(/>/g,"\\u003e").replace(/&/g,"\\u0026").split(i).join("\\u2028").split(n).join("\\u2029")}})}],217997),e.s([],816017)},891567,e=>{let t={name:"plastship GmbH",street:"Auf der Lind 10",postalCode:"65529",locality:"Waldems",region:"Hessen",countryCode:"DE",geo:{lat:50.248828,lon:8.309024}};e.s(["Y",0,t,"_",0,{info:"info@plastship.com",team:"team@plastship.com"},"h",0,{central:{e164:"+4961265898010",national:"06126 58980-10",international:"+49 6126 58980-10"}},"F",0,"contact_click","W",0,function(e=t){return`${e.street}, ${e.postalCode} ${e.locality}`}])},974924,e=>{let t=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;e.s(["d",0,20,"x",0,function(e){return"string"==typeof e&&t.test(e)},"W",0,function(e){return e.trim().toLowerCase()}])},635647,e=>{var t=e.i(974924),a=e.i(891567),i=e.i(854101);let n=/^\+?[\d\s()./–-]+$/,l=e=>`${e.lat},${e.lon}`,o=e=>e.replace(/\s+/g," ").trim(),r=e=>Number(e.toFixed(6));function s(e){return!!e&&Number.isFinite(e.lat)&&Number.isFinite(e.lon)&&90>=Math.abs(e.lat)&&180>=Math.abs(e.lon)}e.s(["a",0,function(e){let t=o(e??"").toLowerCase();if(!t)return;let{street:i,postalCode:n}=a.Y;return t.includes(i.toLowerCase())&&t.includes(n)?{...a.Y.geo}:void 0},"c",0,function(e,a){let i="string"==typeof e?e.trim():"";if(!(0,t.x)(i))return null;let n=a?.trim();return n?`mailto:${i}?subject=${encodeURIComponent(n)}`:`mailto:${i}`},"n",0,function(e,t){if(!e)return null;let a=o(e.query),i=s(e.geo)?e.geo:void 0;if(!a&&!i)return null;if("string"==typeof t&&/iPhone|iPad|iPod|Macintosh/.test(t)){let e,t;return e=o(a),t=[],e&&t.push(`q=${encodeURIComponent(e)}`),i&&t.push(`ll=${l(i)}`),`https://maps.apple.com/?${t.join("&")}`}if("string"==typeof t&&/Android/i.test(t)){let e;return e=i?l(i):"0,0",`geo:${e}?q=${encodeURIComponent(o(a))}`}return null},"W",0,function(e,t){if(!e)return null;let a=o(e.query).slice(0,300),n=s(e.geo)?e.geo:void 0;if(!a&&!n)return null;let l=[];n&&l.push(`lat=${r(n.lat)}`,`lon=${r(n.lon)}`),a&&l.push(`q=${encodeURIComponent(a)}`);let d=`/map/?${l.join("&")}`;return t?(0,i.N)(d,t):d},"R",0,function(e){let t=o(e.get("q")??"").slice(0,300),a=e.get("lat"),i=e.get("lon"),n=null!==a&&""!==a.trim()?Number(a):0/0,l=null!==i&&""!==i.trim()?Number(i):0/0,d=s({lat:n,lon:l})?{lat:r(n),lon:r(l)}:void 0;return t||d?d?{query:t,geo:d}:{query:t}:null},"A",0,function(e){let t=function(e){let t;if("string"!=typeof e)return null;let a=e.trim();if(!a||!n.test(a))return null;let i=a.replace(/^(\+\d{1,3})\s*\(0\)/,"$1"),l=i.replace(/\D/g,"");if(i.startsWith("+"))t=`+${l}`;else if(l.startsWith("00"))t=`+${l.slice(2)}`;else{if(!l.startsWith("0"))return null;t=`+49${l.slice(1)}`}let o=t.length-1;return o<6||o>15||t.startsWith("+0")?null:t}(e);return t?`tel:${t}`:null}])}])})();