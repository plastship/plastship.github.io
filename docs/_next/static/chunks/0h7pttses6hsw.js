(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,411206,173972,e=>{var t=e.i(843476),a=e.i(271645),i=e.i(618566);e.i(821194);var n=e.i(99222),o=e.i(476999),l=e.i(14431),r=e.i(713347),s=e.i(635647),d=e.i(891567),c=e.i(997053);let h=c.m`
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
`,f=c.U.span.withConfig({displayName:"ContactLink.styles__Plain",componentId:"sc-41592123-1"})`
  ${h}
`,m={tel:{key:"contactLink.aria.tel",fallback:"Anrufen: {{value}}"},mail:{key:"contactLink.aria.mail",fallback:"E-Mail schreiben an {{value}}"},map:{key:"contactLink.aria.map",fallback:"Auf der Karte zeigen: {{value}}"}};e.s(["f",0,({kind:e,value:c,place:h,geo:u,subject:g,icon:y,children:x,dataTestId:b,className:v})=>{let{tr:$}=(0,n.f)(),k=(0,i.usePathname)(),w="string"==typeof c?c.trim():"",j=(0,r.useSiteLocale)(),C="tel"===e?(0,s.A)(w):"mail"===e?(0,s.c)(w,g):(0,s.W)({query:w,geo:u},j),F=(0,a.useCallback)(()=>{(0,o.q)(k||"/",d.F,{kind:e,place:h}),l.v({category:"contact",message:d.F,data:{kind:e,place:h}})},[k,e,h]),P=b??`contact-link-${e}`,_=(0,t.jsxs)(t.Fragment,{children:[y,x??w]});if(!w)return null;if(!C)return(0,t.jsx)(f,{className:v,"data-testid":P,"data-kind":e,"data-linked":"false",children:_});let N=w.replace(/\s*\n\s*/g,", ");return(0,t.jsx)(p,{className:v,href:C,onClick:F,"aria-label":$(m[e].key,{value:N,defaultValue:m[e].fallback}),"data-testid":P,"data-kind":e,"data-linked":"true",children:_})}],173972),e.s([],411206)},710788,964687,240029,626645,599858,363451,e=>{var t=e.i(843476),a=e.i(271645);e.i(311046);var i=e.i(549560),n=e.i(499881),o=e.i(627430),l=e.i(250384),r=e.i(618566),s=e.i(997053),d=e.i(859146),c=e.i(593283),h=e.i(547905);Object.fromEntries(l.K.map(e=>[(0,l.i)(e),`/polymere/${(0,l.i)(e)}`]));let p=(e,t,a,i)=>({key:`polymer.${e}.${t}`,de:a,en:i}),f=(e,t,a,i,n)=>{let o=(0,l.i)(e);return{code:e,key:o,repeatUnit:t,name:p(o,"name",...a),uses:p(o,"uses",...i),recycling:p(o,"recycling",...n)}},m={PE:f("PE","–[CH₂–CH₂]–",["Polyethylen","Polyethylene"],["Folien, Flaschen, Behälter, Rohre (PE-LD, PE-HD)","Films, bottles, containers, pipes (PE-LD, PE-HD)"],["Kennnummer 2 (PE-HD) bzw. 4 (PE-LD) nach Entscheidung 97/129/EG","Identification code 2 (PE-HD) or 4 (PE-LD) under Decision 97/129/EC"]),PP:f("PP","–[CH₂–CH(CH₃)]–",["Polypropylen","Polypropylene"],["Verpackungen, Automobilteile, Haushaltswaren","Packaging, automotive parts, household goods"],["Kennnummer 5 nach Entscheidung 97/129/EG","Identification code 5 under Decision 97/129/EC"]),PVC:f("PVC","–[CH₂–CHCl]–",["Polyvinylchlorid","Polyvinyl chloride"],["Fensterprofile, Rohre, Bodenbeläge, Kabel","Window profiles, pipes, floor coverings, cables"],["Kennnummer 3 nach Entscheidung 97/129/EG","Identification code 3 under Decision 97/129/EC"]),PS:f("PS","–[CH₂–CH(C₆H₅)]–",["Polystyrol","Polystyrene"],["Verpackungen, Dämmstoff (EPS), Gehäuse","Packaging, insulation (EPS), housings"],["Kennnummer 6 nach Entscheidung 97/129/EG","Identification code 6 under Decision 97/129/EC"]),PET:f("PET","–[O–CH₂–CH₂–O–CO–C₆H₄–CO]–",["Polyethylenterephthalat","Polyethylene terephthalate"],["Flaschen, Fasern, Folien","Bottles, fibres, films"],["Kennnummer 1 nach Entscheidung 97/129/EG; Bottle-to-Bottle-Recycling","Identification code 1 under Decision 97/129/EC; bottle-to-bottle recycling"]),"PA 6":f("PA 6","–[NH–(CH₂)₅–CO]–",["Polyamid 6","Polyamide 6"],["Technische Teile, Fasern, Textilien","Technical parts, fibres, textiles"],["Keine eigene Kennnummer nach Entscheidung 97/129/EG","No identification code of its own under Decision 97/129/EC"])},u={repeatUnit:{key:"polymer.repeatUnit",de:"Wiederholeinheit",en:"Repeat unit"},uses:{key:"polymer.uses",de:"Anwendung",en:"Applications"},recycling:{key:"polymer.recycling",de:"Recycling",en:"Recycling"},open:{key:"polymer.open",de:"Zur Polymerseite",en:"Go to polymer page"},chain:{key:"polymer.chain",de:"Polymerkette",en:"Polymer chain"}};[...Object.values(m).flatMap(e=>[e.name,e.uses,e.recycling]),...Object.values(u)];let g="polymer_hover";var y=e.i(476999),x=e.i(14431);e.i(821194);var b=e.i(99222),v=e.i(885895);let $=s.U.div.withConfig({displayName:"PolymerChains.styles__Layer",componentId:"sc-3c953a1d-0"})`
  position: absolute;
  inset: 0;
  z-index: 2;
  pointer-events: none;
  /* Hof und Rand ragen an der Seitenkante um ein paar Pixel über das Band: waagerecht kappen
     (kein waagerechtes Scrollen), senkrecht frei für die Karte */
  overflow-x: clip;
  overflow-y: visible;
`,k=s.m`
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
`,w=s.U.a.withConfig({displayName:"PolymerChains.styles__ChainLink",componentId:"sc-3c953a1d-1"})`
  ${k}
`,j=s.U.button.withConfig({displayName:"PolymerChains.styles__ChainButton",componentId:"sc-3c953a1d-2"})`
  ${k}
`,C=s.U.text.withConfig({displayName:"PolymerChains.styles__CodeText",componentId:"sc-3c953a1d-3"})`
  font-family: ${({theme:e})=>e.font.secondaryFamily};
  font-weight: 700;
  pointer-events: none;
`,F=s.U.text.withConfig({displayName:"PolymerChains.styles__ElementText",componentId:"sc-3c953a1d-4"})`
  font-family: ${({theme:e})=>e.font.secondaryFamily};
  font-weight: 700;
  pointer-events: none;
`,P=s.U.div.withConfig({displayName:"PolymerChains.styles__Card",componentId:"sc-3c953a1d-5"})`
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
`,_=s.U.p.withConfig({displayName:"PolymerChains.styles__CardTitle",componentId:"sc-3c953a1d-6"})`
  margin: 0 0 ${({theme:e})=>e.margin.extrasmall};
  font-weight: 700;
`,N=s.U.span.withConfig({displayName:"PolymerChains.styles__Formula",componentId:"sc-3c953a1d-7"})`
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
`,I=(0,a.createContext)({}),M=I.Provider,E=(e,t)=>(0,d.e)({x:e.x-t,y:e.y-t,width:e.size+2*t,height:e.size+2*t},(0,d.C)(e.size+2*t)),z=({chains:e,side:i,width:n,height:l,spec:d,dataTestId:p,seamY:f})=>{let k=(0,s.i)(),M=(0,a.useContext)(I),z=(0,r.usePathname)(),{language:K}=(0,v.N)(),{tr:R}=(0,b.f)(K),U=(0,a.useId)().replace(/:/g,""),[S,L]=(0,a.useState)(null),[D,T]=(0,a.useState)(null),A=(0,a.useRef)(new Set),W=(0,a.useMemo)(()=>{let e=(0,h.m)(k,d.color),t=(0,h.m)(k,d.own??"white"),a=k.palette.site.navy,i=k.palette.default.secondary,n=(0,c.Y)(t);return{neighbour:e,own:t,ink:n?"#ffffff":a,navy:a,green:i,white:"#ffffff",...d.polymerTone?{tone:{from:i,to:(0,c.p)(i,"#ffffff",.5)}}:{}}},[k,d.color,d.own,d.polymerTone]),O=(0,a.useCallback)((e,t)=>{if(t===g){if(A.current.has(e.id))return;A.current.add(e.id)}(0,y.q)(z||"/",t,{polymer:e.key}),(0,x.v)({category:"polymer-chain",message:t,data:{polymer:e.key}})},[z]);return 0===e.length||n<=0?null:(0,t.jsx)($,{"data-testid":"hex-edge-polymer","data-edge":p,"data-side":i,"data-chains":e.length,"data-placement":"seam","data-seam-y":f,children:e.map(e=>{var r;let s,d,h,p,f=m[e.code],y=M[e.key]??null,x=(s=Math.min(...(r=e.atoms).map(e=>e.x))-4,d=Math.min(...r.map(e=>e.y))-4,h=Math.max(...r.map(e=>e.x+e.size))+4,{minX:s,minY:d,maxX:h,maxY:p=Math.max(...r.map(e=>e.y+e.size))+4,w:h-s,h:p-d}),b=e.atoms.map(e=>(0,c.K)(W,e.element,(0,c.m)(e.r,(0,o.c)(i)))),v=`${U}-${e.id}-info`,$=S===e.id||D===e.id,k=e=>$?e.rim:e.restRim,I=R(f.name.key,{defaultValue:f.name.de}),z=`${R(u.chain.key,{defaultValue:u.chain.de})} ${e.code} – ${I}`,K=Math.min(320,n-16),A=Math.max(8,Math.min(n-K-8,x.minX)),B="top"===i?x.maxY+8:l-x.minY+8,V=e.atoms[0],Y=(0,t.jsxs)("svg",{width:x.w,height:x.h,viewBox:`${x.minX} ${x.minY} ${x.w} ${x.h}`,"aria-hidden":"true",focusable:"false",children:[(0,t.jsx)("g",{"data-part":"hit",children:[...e.atoms,...e.rings].map(e=>(0,t.jsx)("path",{d:E(e,4),fill:W.ink},e.key))}),(0,t.jsx)("g",{"data-part":"halo",children:e.atoms.map((e,a)=>(0,t.jsx)("path",{d:E(e,3.5),fill:b[a].halo},e.key))}),(0,t.jsxs)("g",{"data-part":"bonds",strokeLinecap:"round",strokeWidth:3,children:[e.bonds.map(([a,i,n])=>{let o=e.atoms[a],l=e.atoms[i],r=(0,c.p)(k(b[a]),k(b[i]),.5);if(2===n){let e=l.cx-o.cx,n=l.cy-o.cy,s=Math.hypot(e,n)||1,d=-n/s*3.2,c=e/s*3.2;return(0,t.jsxs)("g",{stroke:r,"data-order":"2",children:[(0,t.jsx)("line",{x1:o.cx+d,y1:o.cy+c,x2:l.cx+d,y2:l.cy+c}),(0,t.jsx)("line",{x1:o.cx-d,y1:o.cy-c,x2:l.cx-d,y2:l.cy-c})]},`${a}-${i}`)}return(0,t.jsx)("line",{x1:o.cx,y1:o.cy,x2:l.cx,y2:l.cy,stroke:r},`${a}-${i}`)}),e.rings.map(e=>(0,t.jsx)("circle",{cx:e.cx,cy:e.cy,r:.36*e.size,fill:"none",strokeWidth:2.5,stroke:k(b[0]),"data-ring":"aromatic"},e.key))]}),(0,t.jsx)("g",{"data-part":"atoms",strokeWidth:1.4,children:e.atoms.map((a,i)=>(0,t.jsx)("path",{d:E(a,-.2),fill:$?b[i].fill:b[i].restFill,stroke:k(b[i]),strokeOpacity:e.rimAlpha,"data-element":a.element},a.key))}),e.atoms.map((e,a)=>"C"===e.element?null:(0,t.jsx)(F,{x:e.cx,y:e.cy+.12*e.size,textAnchor:"middle",fontSize:Math.round(.32*e.size),fill:$?b[a].label:b[a].restLabel,"data-part":"element",children:e.element},`el-${e.key}`)),(0,t.jsx)(C,{"data-part":"code",x:V.cx,y:"top"===i?x.minY-2:x.maxY+H(V)+2,fontSize:H(V)+2,fill:W.ink,children:e.code})]}),G={"data-testid":`polymer-chain-${e.key}`,"data-chain":e.id,"data-linked":y?"true":"false","data-active":$?"true":"false","data-units":e.units,"data-atoms":e.atoms.length,"aria-label":z,"aria-describedby":v,style:{"--chain-x":`${x.minX}px`,"--chain-y":`${x.minY}px`,"--chain-w":`${x.w}px`,"--chain-h":`${x.h}px`},onPointerEnter:()=>{L(e.id),O(e,g)},onPointerLeave:()=>L(t=>t===e.id?null:t),onFocus:()=>{L(e.id),O(e,g)},onBlur:()=>{L(t=>t===e.id?null:t),T(t=>t===e.id?null:t)}};return(0,t.jsxs)(a.default.Fragment,{children:[y?(0,t.jsx)(w,{...G,href:y,onClick:()=>O(e,"polymer_click"),children:Y}):(0,t.jsx)(j,{...G,type:"button","aria-expanded":D===e.id,onClick:()=>T(t=>t===e.id?null:e.id),onKeyDown:e=>{"Escape"===e.key&&T(null)},children:Y}),(0,t.jsxs)(P,{id:v,role:"tooltip","data-testid":`polymer-info-${e.key}`,"data-open":$?"true":"false","data-side":i,style:{"--card-x":`${A}px`,"--card-w":`${K}px`,"--card-y":`${B}px`},children:[(0,t.jsxs)(_,{children:[e.code," · ",I]}),(0,t.jsxs)("dl",{children:[(0,t.jsx)("dt",{children:R(u.repeatUnit.key,{defaultValue:u.repeatUnit.de})}),(0,t.jsx)("dd",{children:(0,t.jsx)(N,{children:f.repeatUnit})}),(0,t.jsx)("dt",{children:R(u.uses.key,{defaultValue:u.uses.de})}),(0,t.jsx)("dd",{children:R(f.uses.key,{defaultValue:f.uses.de})}),(0,t.jsx)("dt",{children:R(u.recycling.key,{defaultValue:u.recycling.de})}),(0,t.jsx)("dd",{children:R(f.recycling.key,{defaultValue:f.recycling.de})})]}),y&&(0,t.jsxs)(_,{as:"p","data-part":"open",children:[R(u.open.key,{defaultValue:u.open.de})," →"]})]})]},e.id)})})},H=e=>Math.round(.32*e.size);e.s(["a",0,z,"V",0,M],964687);var K=e.i(355351);let R=(e,t,i=K.E)=>{let[n,o]=(0,a.useState)({width:0,height:0,columns:t});return(0,a.useEffect)(()=>{let t=e.current;if(!t)return;let a=()=>{let e=t.getBoundingClientRect(),a=Math.max(t.offsetWidth,Math.ceil(e.width-.01)),n=Math.max(t.offsetHeight,Math.ceil(e.height-.01));a<=0||n<=0||o(e=>e.width===a&&e.height===n?e:{width:a,height:n,columns:(0,K.L)(a,i)})};if(a(),"u"<typeof ResizeObserver)return;let n=new ResizeObserver(a);return n.observe(t),()=>n.disconnect()},[e,i]),n};e.s(["f",0,R],240029);var U=e.i(380153),S=e.i(345712);let L=s.U.div.withConfig({displayName:"HexEdge.styles__Root",componentId:"sc-9795135c-0"})`
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

  @media (max-width: ${S.p.tabletportrait}px) {
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
`,A=e=>!!e&&e.startsWith("url("),W=s.U.g.withConfig({displayName:"HexEdge.styles__TileGroup",componentId:"sc-9795135c-3"})`
  color: ${({theme:e,$color:t,$fill:a})=>(a&&!A(a)?a:void 0)??("mask"===t?"#ffffff":"onAccent"===t?e.palette.text.onAccent:"tint"===t||"navy"===t||"navyDark"===t?(0,h.m)(e,t):e.palette.default[t])};
  /* Mit eigener Füllfarbe folgt die Gruppe ihrer Quelle im selben Frame, ohne Nachlauf (#1497) */
  transition: ${({$fill:e})=>e?"none":"color 0.2s ease"};
  /* Nachtrag #2186: Verlauf (Seitenkopf-Außenrand) direkt als Füllung */
  fill: ${({$fill:e})=>A(e)?e:"currentColor"};
  stroke: none;
  shape-rendering: crispEdges;

  /* Mit eigener Füllfarbe geht der Rand nahtlos in die Fläche des Hosts über:
     volle Kacheln schließen die Rasterfugen mit einer Kontur in ihrer Farbe (#1497) */
  ${({$fill:e})=>e&&s.m`
      [data-full='true'] {
        stroke: ${A(e)?e:"currentColor"};
        stroke-width: 1px;
      }
    `}
`;e.s(["$",0,D,"o",0,T,"F",0,L,"z",0,W],626645);var O=e.i(650529);let B=([e,t])=>`${Math.round(4*e)}:${Math.round(4*t)}`,V=(e,t,a=0,i=0)=>(0,d.M)((0,K.F)(e,a,i)).map(e=>t.has(B(e))),Y=({tiles:e,color:i,offsetX:n=0,offsetY:o=0,clipPath:l,fill:r,dataTestId:s})=>{let c=(0,a.useMemo)(()=>((e,t,a)=>{let i=new Map;for(let n of e){if(n.alpha<.995||n.flicker||n.transition)continue;let e=i.get(n.alpha)??{alpha:n.alpha,parts:[]};e.parts.push((0,K.H)(n,t,a)),i.set(n.alpha,e)}return[...i.values()].map(e=>({alpha:e.alpha,count:e.parts.length,d:e.parts.join(" ")}))})(e,n,o),[e,n,o]),h=(0,a.useMemo)(()=>e.filter(e=>(0,O.v)(e.alpha)&&!e.flicker&&!e.transition),[e]),p=(0,a.useMemo)(()=>e.filter(e=>e.flicker&&e.alpha>.005),[e]),f=(0,a.useMemo)(()=>e.filter(e=>e.transition&&!e.flicker),[e]),m=(0,a.useMemo)(()=>((e,t=0,a=0)=>{let i=new Set;for(let n of e)if(!(n.alpha<.995))for(let e of(0,d.M)((0,K.F)(n,t,a)))i.add(B(e));return i})(e,n,o),[e,n,o]);return(0,t.jsxs)(W,{$color:i,$fill:r,clipPath:l,"data-testid":s,"data-count":e.length,"data-elements":c.length+h.length+p.length+f.length,"data-fill":r,children:[c.map(e=>(0,t.jsx)("path",{d:e.d,"data-full":"true","data-count":e.count,"data-alpha":e.alpha,fillRule:"nonzero",style:{"--alpha":String(e.alpha)}},`full-${e.alpha}`)),h.map(e=>{let a=(0,O.g)(e),i=V(e,m,n,o),l=i.filter(Boolean).length;return(0,t.jsx)("path",{d:(0,d.e)((0,K.F)(e,n,o),(0,d.C)(e.size),i),"data-rounded":"true","data-sharp":l>0?l:void 0,"data-partial":"true",style:{"--alpha":String(e.alpha),"--shimmer-period":`${a.period}ms`,"--shimmer-offset":`${a.offset}ms`}},e.key)}),p.map(e=>{let a=(0,O.O)(e),i=e.alpha>=.995,l=i?[]:V(e,m,n,o);return(0,t.jsx)("path",{d:i?(0,K.H)(e,n,o):(0,d.e)((0,K.F)(e,n,o),(0,d.C)(e.size),l),"data-rounded":i?void 0:"true","data-full":i?"true":void 0,"data-flicker":"true",style:{"--alpha":String(e.alpha),"--flicker-period":`${a.period}ms`,"--flicker-offset":`${a.offset}ms`}},e.key)}),f.map(e=>{let a=(0,O.v)(e.alpha),i=(0,O.g)(e);return(0,t.jsx)("path",{d:(0,K.H)(e,n,o),"data-ring":"true","data-partial":a?"true":void 0,style:{"--alpha":String(e.alpha),"--ring-delay":`${e.transition?.delay??0}ms`,"--ring-duration":`${e.transition?.duration??0}ms`,...a?{"--shimmer-period":`${i.period}ms`,"--shimmer-offset":`${i.offset}ms`}:{}}},e.key)})]})};e.s(["f",0,Y],599858);let G=e=>{let t=new Map;for(let a of e){let e=a.image?`${a.placement}-image-${a.image}`:`${a.placement}-${a.color}`,i=t.get(e)??{key:e,placement:a.placement,color:a.color,...a.image?{image:a.image}:{},cells:[]};i.cells.push(a),t.set(e,i)}return[...t.values()]},q=e=>{let t={};for(let a of Object.keys(e)){let i=e[a];i&&(t[a]={placement:i.placement,color:i.color,depth:i.depth,overlap:i.overlap,...i.contrast?{contrast:i.contrast}:{}})}return t},Z=(e,t)=>{try{return t(e)}catch(a){if(!Object.values(e).some(e=>e?.style&&"fransen"!==e.style))throw a;return(0,x.y)(a),t(q(e))}},X=({edges:e,columns:r,zIndex:s=-1,fill:d,dataTestId:c="hex-edge",className:h})=>{let p=(0,a.useRef)(null),f=R(p,40),m=r??f.columns,u=(e=>{let[t,i]=(0,a.useState)(!0);return(0,a.useEffect)(()=>{let t=e.current;if(!t||"u"<typeof IntersectionObserver)return;let a=new IntersectionObserver(([e])=>i(e.isIntersecting),{rootMargin:"200px"});return a.observe(t),()=>a.disconnect()},[e]),t})(p),g=(0,U.f)(`(max-width: ${S.p.tabletportrait}px)`),y=(0,a.useId)().replace(/:/g,""),x=g?(0,n.Q)(e):e,b=JSON.stringify(x),{layout:v,ketten:$}=(0,a.useMemo)(()=>Z(JSON.parse(b),e=>({layout:(0,n.T)(f.width,f.height,m,e),ketten:((e,t,a,i)=>{if(t<=0||a<=0)return[];let n=[];for(let r of["top","bottom"]){let s=e[r];if(!s||"polymer"!==(0,o.N)(r,s))continue;let{chains:d,seamY:c}=(0,l.C)(t,a,i,r,s);d.length>0&&null!==c&&n.push({side:r,spec:s,chains:d,seamY:c})}return n})(e,f.width,f.height,m)})),[f.width,f.height,m,b]),k=(0,a.useMemo)(()=>G(v.cells),[v]),{width:w,height:j,offsetX:C,offsetY:F}=v,P=JSON.stringify(e),_=(0,a.useMemo)(()=>f.width>0?[]:Z(JSON.parse(P),e=>(0,i.r)(e)),[f.width,P]);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(L,{ref:p,className:h,$zIndex:s,"aria-hidden":"true","data-testid":c,"data-edges":(0,n.a)(x),"data-style":(0,n.C)(x),"data-tiles":v.cells.length,"data-measured":f.width>0?"true":"false",children:[_.map(e=>{let{x:a,y:i,width:n,height:o}=e.viewBox;return(0,t.jsx)(T,{viewBox:`${a} ${i} ${n} ${o}`,preserveAspectRatio:"xMidYMid slice",focusable:"false","data-side":e.side,"data-placement":e.placement,"data-testid":`${c}-fallback-${e.key}`,$depth:e.depth,children:G(e.cells).map(a=>(0,t.jsx)(Y,{tiles:a.cells,color:a.color,fill:d?.[a.placement],dataTestId:`${c}-fallback-${e.key}-${a.color}`},a.key))},e.key)}),v.cells.length>0&&(0,t.jsxs)(D,{focusable:"false","data-testid":`${c}-svg`,"data-paused":u?"false":"true","data-width":w,"data-height":j,style:{"--edge-x":`${-C}px`,"--edge-y":`${-F}px`,"--edge-w":`${w}px`,"--edge-h":`${j}px`},children:[(0,t.jsxs)("defs",{children:[(0,t.jsx)("clipPath",{id:`${y}-inner`,children:(0,t.jsx)("rect",{x:C,y:F,width:f.width,height:f.height})}),(0,t.jsx)("clipPath",{id:`${y}-outer`,children:(0,t.jsx)("path",{clipRule:"evenodd",d:`M0 0H${w}V${j}H0Z M${C} ${F}v${f.height}h${f.width}v${-f.height}Z`})})]}),Object.keys(x).filter(e=>x[e]?.placement==="inner").map(e=>{let a=x[e];if(!a)return null;let i=((e,t,a,i,n)=>{switch(e){case"top":return{x:t,y:a-1,width:i,height:3};case"bottom":return{x:t,y:a+n-2,width:i,height:3};case"left":return{x:t-1,y:a,width:3,height:n};default:return{x:t+i-2,y:a,width:3,height:n}}})(e,C,F,f.width,f.height);return(0,t.jsx)(W,{$color:a.color,$fill:d?.inner,"data-testid":`${c}-seam-${e}`,children:(0,t.jsx)("rect",{...i})},`seam-${e}`)}),k.map((e,a)=>{var i;let n,o;return e.image?(0,t.jsxs)("g",{clipPath:`url(#${y}-${e.placement})`,"data-testid":`${c}-${e.placement}-image`,"data-count":e.cells.length,children:[(0,t.jsx)("mask",{id:`${y}-bild-${a}`,maskUnits:"userSpaceOnUse",x:0,y:0,width:w,height:j,children:(0,t.jsx)(Y,{tiles:e.cells,color:"mask",offsetX:C,offsetY:F})}),(0,t.jsx)("image",{href:e.image,...(i=e.cells,n=Math.min(...i.map(e=>e.x)),o=Math.min(...i.map(e=>e.y)),{x:n+C,y:o+F,width:Math.max(...i.map(e=>e.x+e.size))-n,height:Math.max(...i.map(e=>e.y+e.size))-o}),preserveAspectRatio:"xMidYMid slice",mask:`url(#${y}-bild-${a})`})]},e.key):(0,t.jsx)(Y,{tiles:e.cells,color:e.color,offsetX:C,offsetY:F,clipPath:`url(#${y}-${e.placement})`,fill:d?.[e.placement],dataTestId:`${c}-${e.placement}-${e.color}`},e.key)})]})]}),$.map(({side:e,spec:a,chains:i,seamY:n})=>(0,t.jsx)(z,{chains:i,side:e,seamY:n,width:f.width,height:f.height,spec:a,dataTestId:c},`polymer-${e}`))]})};class J extends a.default.Component{state={failed:!1};static getDerivedStateFromError(){return{failed:!0}}componentDidCatch(e,t){(0,x.v)({category:"hex-edge",message:"render-error",data:{stufe:this.props.stufe}}),(0,x.i)(e,{componentStack:t.componentStack})}render(){return this.state.failed?this.props.ersatz:this.props.children}}e.s(["f",0,e=>(0,t.jsx)(J,{stufe:"fransen",ersatz:null,children:(0,t.jsx)(J,{stufe:"arten",ersatz:(0,t.jsx)(X,{...e,edges:q(e.edges)}),children:(0,t.jsx)(X,{...e})})})],363451),e.s([],710788)},813267,e=>{var t=e.i(843476),a=e.i(997053);let i=a.U.svg.withConfig({displayName:"IconLocation.styles__Root",componentId:"sc-d4764d0b-0"})``;e.s(["f",0,e=>(0,t.jsxs)(i,{className:e.className,"data-testid":"icon-location-root",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:[(0,t.jsx)("path",{d:"M4.5 9.75768C4.5 15.5 12 22 12 22C12 22 19.5 15.5 19.5 9.75768C19.5 4.81181 15.6559 2 12 2C8.34409 2 4.5 4.81181 4.5 9.75768Z",stroke:"currentColor",strokeWidth:"2",strokeLinejoin:"round"}),(0,t.jsx)("circle",{cx:"12",cy:"9.5",r:"2.5",stroke:"currentColor",strokeWidth:"2"})]})],813267)},874142,e=>{let t=e.i(215063).f;e.s(["f",0,t])},538915,226129,600639,546843,e=>{var t=e.i(843476),a=e.i(997053);e.i(315481);var i=e.i(10003),n=e.i(547905),o=e.i(136717);let l=e=>(0,o.L)(e.palette.footer.backgroundEnd),r=e=>(0,o.p)(e.palette.footer.backgroundEnd),s=(e,t)=>r(e)?`rgba(255, 255, 255, ${t})`:`rgba(33, 37, 41, ${t})`;var d=e.i(474704),c=e.i(807897);let h=a.U.footer.withConfig({displayName:"Footer.styles__Root",componentId:"sc-809a1aba-0"})`
  width: 100%;
  /* #2164: Verlauf aus dem Theme, in beiden Modi dunkel; Schrift aus dem Kontrast (footerColors) */
  background: linear-gradient(
    to top,
    ${({theme:e})=>e.palette.footer.background},
    ${({theme:e})=>e.palette.footer.backgroundEnd}
  );
  color: ${({theme:e})=>l(e)};
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
    color: ${({theme:e})=>l(e)};
  }
`,p=a.U.div.withConfig({displayName:"Footer.styles__BottomBar",componentId:"sc-809a1aba-1"})`
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
    color: ${({theme:e})=>l(e)};
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
  color: ${({theme:e})=>l(e)};
  text-decoration: none;

  &:hover,
  &:focus-visible {
    text-decoration: underline;
  }
`,g=(0,a.U)(i.NavLink).withConfig({displayName:"Footer.styles__FooterLink",componentId:"sc-809a1aba-5"})`
  color: inherit;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`,y=(c.s.height-c.m)/c.s.width*133,x=(0,a.U)(i.NavLink).withConfig({displayName:"Footer.styles__LogoLink",componentId:"sc-809a1aba-6"})`
  display: inline-block;
  /* gestapelt: Luft zur ersten Gruppe; unter der Grundlinie, verschiebt sie nicht */
  padding-bottom: ${({theme:e})=>e.margin.small};
  text-decoration: none;

  && svg {
    display: inline;
    width: ${133}px;
    height: auto;
    vertical-align: baseline;
    margin-bottom: ${-y}px;
  }
`,b=a.U.div.withConfig({displayName:"Footer.styles__FooterRow",componentId:"sc-809a1aba-7"})`
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
`,$=a.U.div.withConfig({displayName:"Footer.styles__FooterSection",componentId:"sc-809a1aba-9"})`
  margin-bottom: 20px;
`,k=a.U.ul.withConfig({displayName:"Footer.styles__ContactList",componentId:"sc-809a1aba-10"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 0;
  padding: 0;
  list-style: none;
`,w=a.U.li.withConfig({displayName:"Footer.styles__ContactItem",componentId:"sc-809a1aba-11"})`
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
    color: ${({theme:e})=>l(e)};
  }

  && > a:hover {
    text-decoration: underline;
  }
`,j=a.U.h2.withConfig({displayName:"Footer.styles__FooterSectionTitle",componentId:"sc-809a1aba-12"})`
  && {
    color: ${({theme:e})=>l(e)};
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
    color: ${({theme:e})=>l(e)};
  }

  && a:hover,
  && a:focus-visible {
    text-decoration: underline;
  }
`;var F=e.i(424734);e.i(821194);var P=e.i(99222),_=e.i(722216),N=e.i(507924),I=e.i(284248),M=e.i(891567);let E=[{titleKey:"footer.sections.links",links:[{href:"/team",labelKey:"footer.team"},{href:"/faq",labelKey:"footer.faq"},{href:"/about",labelKey:"footer.about"},{href:"/news",labelKey:"footer.latest"},{href:"/contact-us",labelKey:"footer.contactForm"},{href:"/services",labelKey:"footer.services"}]}],z={titleKey:"footer.contact",email:M._.info,phone:M.h.central,address:M.Y},H=[{href:"/agb",labelKey:"footer.terms"},{href:"/imprint",labelKey:"footer.imprint"},{href:"/privacy",labelKey:"footer.privacy"},{href:"/email-disclaimer",labelKey:"footer.emailDisclaimer"},{href:"/accessibility",labelKey:"footer.accessibility"}];e.i(411206);var K=e.i(173972),R=e.i(317573),U=e.i(757658),S=e.i(874142),L=e.i(813267);e.i(710788);var D=e.i(363451);e.i(311046);var T=e.i(499881);let A={logo:{xs:{span:12,offset:0},md:{span:3,offset:0},lg:{span:2,offset:0}},section:{xs:{span:12,offset:0},sm:{span:6,offset:0},md:{span:4,offset:0}},contact:{xs:{span:12,offset:0},sm:{span:6,offset:0},md:{span:5,offset:0},lg:{span:4,offset:0}},bottom:{xs:{span:12,offset:0}}},W=e=>({$columns:A[e],"data-columns":(0,d.m)(A[e])}),O={top:{placement:"inner",color:"white"}};e.s(["f",0,e=>{let i=e.edges??O,{tr:n}=(0,P.f)(),o=(0,a.i)(),{footer:l}=(0,_.f)(),s=(0,I.C)();return(0,t.jsxs)(h,{className:e.className,"data-testid":"footer-root","data-edge-contrast":i.top?.contrast??"",$edges:i,children:[(0,T.N)(i)&&(0,t.jsx)(D.f,{edges:i,dataTestId:"footer-root-edge"}),(0,t.jsxs)(b,{"data-testid":"footer-row","data-site-row":"true",children:[(0,t.jsx)(v,{"data-testid":"footer-logo-column",...W("logo"),children:(0,t.jsx)(x,{href:"/","aria-label":n("footer.logo.ariaLabel",{defaultValue:"plastship – zur Startseite"}),"data-testid":"footer-logo-link",children:(0,t.jsx)(F.f,{inverted:!o?.palette?.footer||r(o),monochrome:!0})})}),(0,t.jsx)(t.Fragment,{children:l.length>0?l.map((e,a)=>(0,t.jsx)(v,{...W("section"),children:(0,t.jsxs)($,{"data-testid":`footer-cms-section-${a}`,"data-count":e.children?.length??0,children:[(0,t.jsx)(j,{"data-testid":`footer-cms-section-${a}-title`,children:(0,N.u)(e.label,s)}),(0,t.jsx)(C,{children:(e.children??[]).map((e,i)=>(0,t.jsx)(g,{href:e.href,"data-testid":`footer-cms-section-${a}-link-${i}`,children:(0,N.u)(e.label,s)},`${e.href}-${i}`))})]})},`${e.href}-${a}`)):E.map((e,a)=>(0,t.jsx)(v,{...W("section"),children:(0,t.jsxs)($,{"data-testid":`footer-section-${a}`,"data-count":e.links.length,children:[(0,t.jsx)(j,{"data-testid":`footer-section-${a}-title`,children:n(e.titleKey)}),(0,t.jsx)(C,{children:e.links.map(e=>(0,t.jsx)(g,{href:e.href,"data-testid":`footer-link-${e.href.replace(/^\//,"").replace(/\//g,"-")}`,children:n(e.labelKey)},e.href))})]})},e.titleKey))}),(0,t.jsx)(v,{"data-testid":"footer-contact-column",...W("contact"),children:(0,t.jsxs)($,{"data-testid":"footer-contact",children:[(0,t.jsx)(j,{"data-testid":"footer-contact-title",children:n(z.titleKey)}),(0,t.jsxs)(k,{children:[(0,t.jsx)(w,{children:(0,t.jsx)(K.f,{kind:"mail",value:z.email,place:"footer",icon:(0,t.jsx)(R.f,{}),dataTestId:"footer-contact-email"})}),(0,t.jsx)(w,{children:(0,t.jsx)(K.f,{kind:"tel",value:z.phone.e164,place:"footer",icon:(0,t.jsx)(S.f,{}),dataTestId:"footer-contact-phone",children:z.phone.international})}),(0,t.jsx)(w,{children:(0,t.jsx)(K.f,{kind:"map",value:`${z.address.name}, ${(0,M.W)(z.address)}`,geo:z.address.geo,place:"footer",icon:(0,t.jsx)(L.f,{}),dataTestId:"footer-contact-address",children:(0,M.W)(z.address)})})]})]})})]}),(0,t.jsx)(b,{"data-testid":"footer-bottom-row","data-site-row":"true",children:(0,t.jsx)(v,{...W("bottom"),children:(0,t.jsxs)(p,{children:[(0,t.jsx)(f,{"data-testid":"footer-copyright",children:"© plastship GmbH"}),(0,t.jsxs)(m,{"data-testid":"footer-meta","data-count":H.length,children:[H.map(e=>(0,t.jsx)(g,{href:e.href,"data-testid":`footer-meta-${e.href.replace(/^\//,"")}`,children:n(e.labelKey)},e.href)),(0,t.jsx)(u,{type:"button",onClick:U.e,"data-testid":"footer-cookie-settings",children:n("footer.cookieSettings",{defaultValue:"Cookie-Einstellungen"})})]})]})})})]})}],538915);var B=e.i(271645),V=e.i(247902),Y=e.i(825969),G=e.i(499911);e.i(657782);var q=e.i(229132);e.i(730026);var Z=e.i(262076),X=e.i(184914),J=e.i(157067),Q=e.i(885895),ee=e.i(693830),et=e.i(949108),ea=e.i(49958),ei=e.i(726029);let en=(0,B.lazy)(()=>e.A(767483));e.s(["f",0,()=>{let e=(0,et.f)(),{status:a}=(0,ea.useSession)(),i=(0,ee.g)(),{isLeftSidebarOpen:n,closeLeftSidebar:o}=(0,J.i)(),{language:l}=(0,Q.N)(),{tr:r}=(0,P.f)(l);return e?(0,t.jsx)(X.f,{isOpen:n,onClose:o,mode:"guest",maxWidthPx:ei.F-1,barHeightPx:ei.W,footerAction:(0,t.jsx)(V.f,{href:"/login",modifier:Y.j.PRIMARY,icon:(0,t.jsx)(G.f,{}),iconAlign:Y.W.RIGHT,dataTestId:"mobile-menu-item-login",children:r("header.login.label",{defaultValue:"Login"})}),children:(0,t.jsx)(Z.f,{"data-testid":"mobile-menu-section-public",children:(0,t.jsx)(q.f,{variant:"stacked",dataTestId:"mobile-menu-item-public"})})}):"authenticated"===a&&i?(0,t.jsx)(B.Suspense,{fallback:null,children:(0,t.jsx)(en,{barHeightPx:ei.W})}):null}],226129),e.s([],600639),e.s(["p",0,{top:{placement:"inner",color:"white",depth:"section"}},"q",0,"navy","e",0,function(e){return e&&"object"==typeof e?{edges:{top:e},flush:!0}:e&&"white"!==e?{edges:{top:{placement:"inner",color:e}},flush:!0}:{edges:void 0,flush:!1}}],546843)},584391,e=>{var t=e.i(843476),a=e.i(997053),i=e.i(726029);let n=a.U.div.withConfig({displayName:"Default.styles__Root",componentId:"sc-6c8f238f-0"})`
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
`;var l=e.i(197754),r=e.i(538915);e.i(600639);var s=e.i(226129),d=e.i(729950),c=e.i(546843);e.s(["Default",0,e=>{let{children:a,inverted:i,paddingTop:h=!0,footerEdge:p}=e,f=(0,c.e)(p);return(0,d.H)()?(0,t.jsx)(t.Fragment,{children:a}):(0,t.jsxs)(n,{className:e.className,"data-testid":"default-root",children:[(0,t.jsx)(l.f,{navigation:!1,inverted:i,site:!0}),(0,t.jsx)(s.f,{}),(0,t.jsx)(o,{$paddingTop:h,$flushFooter:f.flush,children:a}),(0,t.jsx)(r.f,{inverted:i,edges:f.edges})]})}],584391)},729950,e=>{var t=e.i(271645);let a=(0,t.createContext)(null);e.s(["R",0,a,"H",0,function(){return(0,t.useContext)(a)}])},891567,e=>{let t={name:"plastship GmbH",street:"Auf der Lind 10",postalCode:"65529",locality:"Waldems",region:"Hessen",countryCode:"DE",geo:{lat:50.248828,lon:8.309024}};e.s(["Y",0,t,"_",0,{info:"info@plastship.com",team:"team@plastship.com"},"h",0,{central:{e164:"+4961265898010",national:"06126 58980-10",international:"+49 6126 58980-10"}},"F",0,"contact_click","W",0,function(e=t){return`${e.street}, ${e.postalCode} ${e.locality}`}])},974924,e=>{let t=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;e.s(["d",0,20,"x",0,function(e){return"string"==typeof e&&t.test(e)},"W",0,function(e){return e.trim().toLowerCase()}])},635647,e=>{var t=e.i(974924),a=e.i(891567),i=e.i(854101);let n=/^\+?[\d\s()./–-]+$/,o=e=>`${e.lat},${e.lon}`,l=e=>e.replace(/\s+/g," ").trim(),r=e=>Number(e.toFixed(6));function s(e){return!!e&&Number.isFinite(e.lat)&&Number.isFinite(e.lon)&&90>=Math.abs(e.lat)&&180>=Math.abs(e.lon)}e.s(["a",0,function(e){let t=l(e??"").toLowerCase();if(!t)return;let{street:i,postalCode:n}=a.Y;return t.includes(i.toLowerCase())&&t.includes(n)?{...a.Y.geo}:void 0},"c",0,function(e,a){let i="string"==typeof e?e.trim():"";if(!(0,t.x)(i))return null;let n=a?.trim();return n?`mailto:${i}?subject=${encodeURIComponent(n)}`:`mailto:${i}`},"n",0,function(e,t){if(!e)return null;let a=l(e.query),i=s(e.geo)?e.geo:void 0;if(!a&&!i)return null;if("string"==typeof t&&/iPhone|iPad|iPod|Macintosh/.test(t)){let e,t;return e=l(a),t=[],e&&t.push(`q=${encodeURIComponent(e)}`),i&&t.push(`ll=${o(i)}`),`https://maps.apple.com/?${t.join("&")}`}if("string"==typeof t&&/Android/i.test(t)){let e;return e=i?o(i):"0,0",`geo:${e}?q=${encodeURIComponent(l(a))}`}return null},"W",0,function(e,t){if(!e)return null;let a=l(e.query).slice(0,300),n=s(e.geo)?e.geo:void 0;if(!a&&!n)return null;let o=[];n&&o.push(`lat=${r(n.lat)}`,`lon=${r(n.lon)}`),a&&o.push(`q=${encodeURIComponent(a)}`);let d=`/map/?${o.join("&")}`;return t?(0,i.N)(d,t):d},"R",0,function(e){let t=l(e.get("q")??"").slice(0,300),a=e.get("lat"),i=e.get("lon"),n=null!==a&&""!==a.trim()?Number(a):0/0,o=null!==i&&""!==i.trim()?Number(i):0/0,d=s({lat:n,lon:o})?{lat:r(n),lon:r(o)}:void 0;return t||d?d?{query:t,geo:d}:{query:t}:null},"A",0,function(e){let t=function(e){let t;if("string"!=typeof e)return null;let a=e.trim();if(!a||!n.test(a))return null;let i=a.replace(/^(\+\d{1,3})\s*\(0\)/,"$1"),o=i.replace(/\D/g,"");if(i.startsWith("+"))t=`+${o}`;else if(o.startsWith("00"))t=`+${o.slice(2)}`;else{if(!o.startsWith("0"))return null;t=`+49${o.slice(1)}`}let l=t.length-1;return l<6||l>15||t.startsWith("+0")?null:t}(e);return t?`tel:${t}`:null}])}])})();