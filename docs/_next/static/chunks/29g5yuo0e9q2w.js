(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,118410,e=>{let t={PRIMARY:"#00416E",SECONDARY:"#37BA24",WHITE:"#FFFFFF",BLACK:"#000000",GREY_LIGHT:"#F8F8F8",GREY:"#D8D8D8",GREY_DARK:"#687074",ERROR:"#DC0000",SUCCESS:"#37BA24",INFO:"#00416E",WARNING:"#FFCD00",BUTTON_PRIMARY_BG:"#292929",BUTTON_PRIMARY_TEXT:"#FFFFFF",BUTTON_SECONDARY_BG:"#EFCD00",BUTTON_SECONDARY_TEXT:"#292929",BUTTON_TERTIARY_BORDER:"#292929",BUTTON_DANGER_BG:"#E22F2F",HEADER_BG:"#F1FCFF",FOOTER_BG:"#1F2937",LINK_PRIMARY:"#8A2163",TEAL:"#5DE8D2",ORANGE:"#FF8A75",CORAL:"#FFBA4D",PURPLE:"#B97AFF",TRAFFIC_GREEN:"#22C55E",TRAFFIC_YELLOW:"#EAB308",TRAFFIC_RED:"#EF4444",TRAFFIC_GREY:"#D1D5DB",AUCTION:"#EF4444",MICROSOFT:"#4DA3FF"},i={COLOR_1:"#e8c1a0",COLOR_2:"#f47560",COLOR_3:"#f1e15b",COLOR_4:"#e8a838",COLOR_5:"#61cdbb",COLOR_6:"#97e3d5",COLOR_7:"#b5cf6b",COLOR_8:"#d6e685",COLOR_9:"#a6d854",COLOR_10:"#8dd1e1"},o={plastship:[t.PRIMARY,t.SECONDARY,t.WARNING,t.LINK_PRIMARY,t.BUTTON_PRIMARY_BG,t.BUTTON_SECONDARY_BG,t.GREY_DARK,t.INFO,t.SUCCESS,t.ERROR],categorical:["#2a78d6","#eb6834","#1baf7a","#eda100","#e87ba4","#008300","#4a3aa7","#e34948"],status:[t.SUCCESS,t.INFO,t.WARNING,t.ERROR],nivo:[i.COLOR_1,i.COLOR_2,i.COLOR_3,i.COLOR_4,i.COLOR_5,i.COLOR_6,i.COLOR_7,i.COLOR_8,i.COLOR_9,i.COLOR_10]},l={"#00416e":"#60A0E8","#292929":"#BDC3C7","#000000":"#E5E7EB","#687074":"#9CA3AF","#889396":"#9CA3AF","#8a2163":"#D38AB1","#4a3aa7":"#8F84E8","#008300":"#3FBF3F"};e.s(["W",0,i,"g",0,o,"h",0,t,"C",0,(e,t)=>t?l[e.toLowerCase()]??e:e,"T",0,(e,t)=>{let i=e.replace("#",""),o=parseInt(i.substring(0,2),16),l=parseInt(i.substring(2,4),16),a=parseInt(i.substring(4,6),16);return`rgba(${o}, ${l}, ${a}, ${t})`}])},114178,861133,e=>{var t=e.i(843476);e.i(315481);var i=e.i(10003),o=e.i(997053);let l=o.U.nav.withConfig({displayName:"Breadcrumb.styles__Root",componentId:"sc-1af95cf5-0"})`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  font-family: ${e=>e.theme.font.primaryFamily};
  font-size: 14px;
  margin-bottom: ${e=>e.theme.margin.small};
`,a=o.U.span.withConfig({displayName:"Breadcrumb.styles__BreadcrumbItem",componentId:"sc-1af95cf5-1"})`
  display: inline-flex;
  align-items: center;
`,s=(0,o.U)(i.NavLink).withConfig({displayName:"Breadcrumb.styles__BreadcrumbLink",componentId:"sc-1af95cf5-2"})`
  color: ${e=>e.theme.palette.default.primary};
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: ${e=>e.theme.palette.default.secondary};
    text-decoration: underline;
  }
`,r=o.U.span.withConfig({displayName:"Breadcrumb.styles__BreadcrumbText",componentId:"sc-1af95cf5-3"})`
  color: ${e=>e.theme.palette.default.greyDark};
`,n=o.U.span.withConfig({displayName:"Breadcrumb.styles__Separator",componentId:"sc-1af95cf5-4"})`
  margin: 0 8px;
  color: ${e=>e.theme.palette.default.greyDark};
  opacity: 0.5;
`;e.i(821194);var d=e.i(99222);e.s(["f",0,e=>{let{items:i,className:o,dataTestId:c="breadcrumb"}=e,{tr:h}=(0,d.f)();return(0,t.jsx)(l,{className:o,"data-testid":c,"aria-label":h("common.breadcrumb",{defaultValue:"Breadcrumb"}),children:i.map((e,o)=>{let l=o===i.length-1;return(0,t.jsxs)(a,{children:[e.href&&!l?(0,t.jsx)(s,{href:e.href,"data-testid":`${c}-link-${o}`,children:e.label}):(0,t.jsx)(r,{"data-testid":`${c}-text-${o}`,"aria-current":l?"page":void 0,children:e.label}),!l&&(0,t.jsx)(n,{"aria-hidden":"true",children:"/"})]},`${e.label}-${o}`)})})}],861133),e.s([],114178)},10059,e=>{var t=e.i(997053);let i=t.U.div.withConfig({displayName:"Row.styles__Root",componentId:"sc-3e89f65f-0"})`
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
`;e.s(["f",0,i])},152186,856337,e=>{var t=e.i(843476),i=e.i(10059);e.s(["f",0,e=>{let{children:o,dataTestId:l}=e;return(0,t.jsx)(i.f,{className:[e.className,"row"].filter(Boolean).join(" "),"data-testid":l||"Row-root",children:o})}],152186);var o=e.i(997053);let l=e=>`${e/12*100}%`,a=e=>Array.from({length:12},(t,i)=>`&.col-${e}-offset-${i} { margin-left: ${l(i)}; }`).join("\n  "),s=o.U.div.withConfig({displayName:"Col.styles__Root",componentId:"sc-8cb234a0-0"})`
  container-type: inline-size;
  container-name: grid-col;
  box-sizing: border-box;
  padding: 0 12px;
  margin-bottom: 12px;

  /* XS - Mobile (default) */
  &.col-xs-1 { flex: 0 0 ${l(1)}; max-width: ${l(1)}; }
  &.col-xs-2 { flex: 0 0 ${l(2)}; max-width: ${l(2)}; }
  &.col-xs-3 { flex: 0 0 ${l(3)}; max-width: ${l(3)}; }
  &.col-xs-4 { flex: 0 0 ${l(4)}; max-width: ${l(4)}; }
  &.col-xs-5 { flex: 0 0 ${l(5)}; max-width: ${l(5)}; }
  &.col-xs-6 { flex: 0 0 ${l(6)}; max-width: ${l(6)}; }
  &.col-xs-7 { flex: 0 0 ${l(7)}; max-width: ${l(7)}; }
  &.col-xs-8 { flex: 0 0 ${l(8)}; max-width: ${l(8)}; }
  &.col-xs-9 { flex: 0 0 ${l(9)}; max-width: ${l(9)}; }
  &.col-xs-10 { flex: 0 0 ${l(10)}; max-width: ${l(10)}; }
  &.col-xs-11 { flex: 0 0 ${l(11)}; max-width: ${l(11)}; }
  &.col-xs-12 { flex: 0 0 ${l(12)}; max-width: ${l(12)}; }

  ${a("xs")}

  /* SM - Tablet (min-width: 576px) */
  @media (min-width: 576px) {
    &.col-sm-1 { flex: 0 0 ${l(1)}; max-width: ${l(1)}; }
    &.col-sm-2 { flex: 0 0 ${l(2)}; max-width: ${l(2)}; }
    &.col-sm-3 { flex: 0 0 ${l(3)}; max-width: ${l(3)}; }
    &.col-sm-4 { flex: 0 0 ${l(4)}; max-width: ${l(4)}; }
    &.col-sm-5 { flex: 0 0 ${l(5)}; max-width: ${l(5)}; }
    &.col-sm-6 { flex: 0 0 ${l(6)}; max-width: ${l(6)}; }
    &.col-sm-7 { flex: 0 0 ${l(7)}; max-width: ${l(7)}; }
    &.col-sm-8 { flex: 0 0 ${l(8)}; max-width: ${l(8)}; }
    &.col-sm-9 { flex: 0 0 ${l(9)}; max-width: ${l(9)}; }
    &.col-sm-10 { flex: 0 0 ${l(10)}; max-width: ${l(10)}; }
    &.col-sm-11 { flex: 0 0 ${l(11)}; max-width: ${l(11)}; }
    &.col-sm-12 { flex: 0 0 ${l(12)}; max-width: ${l(12)}; }

    ${a("sm")}
  }

  /* MD - Desktop (min-width: 768px) */
  @media (min-width: 768px) {
    &.col-md-1 { flex: 0 0 ${l(1)}; max-width: ${l(1)}; }
    &.col-md-2 { flex: 0 0 ${l(2)}; max-width: ${l(2)}; }
    &.col-md-3 { flex: 0 0 ${l(3)}; max-width: ${l(3)}; }
    &.col-md-4 { flex: 0 0 ${l(4)}; max-width: ${l(4)}; }
    &.col-md-5 { flex: 0 0 ${l(5)}; max-width: ${l(5)}; }
    &.col-md-6 { flex: 0 0 ${l(6)}; max-width: ${l(6)}; }
    &.col-md-7 { flex: 0 0 ${l(7)}; max-width: ${l(7)}; }
    &.col-md-8 { flex: 0 0 ${l(8)}; max-width: ${l(8)}; }
    &.col-md-9 { flex: 0 0 ${l(9)}; max-width: ${l(9)}; }
    &.col-md-10 { flex: 0 0 ${l(10)}; max-width: ${l(10)}; }
    &.col-md-11 { flex: 0 0 ${l(11)}; max-width: ${l(11)}; }
    &.col-md-12 { flex: 0 0 ${l(12)}; max-width: ${l(12)}; }

    ${a("md")}
  }

  /* LG - Large Desktop (min-width: 992px) */
  @media (min-width: 992px) {
    &.col-lg-1 { flex: 0 0 ${l(1)}; max-width: ${l(1)}; }
    &.col-lg-2 { flex: 0 0 ${l(2)}; max-width: ${l(2)}; }
    &.col-lg-3 { flex: 0 0 ${l(3)}; max-width: ${l(3)}; }
    &.col-lg-4 { flex: 0 0 ${l(4)}; max-width: ${l(4)}; }
    &.col-lg-5 { flex: 0 0 ${l(5)}; max-width: ${l(5)}; }
    &.col-lg-6 { flex: 0 0 ${l(6)}; max-width: ${l(6)}; }
    &.col-lg-7 { flex: 0 0 ${l(7)}; max-width: ${l(7)}; }
    &.col-lg-8 { flex: 0 0 ${l(8)}; max-width: ${l(8)}; }
    &.col-lg-9 { flex: 0 0 ${l(9)}; max-width: ${l(9)}; }
    &.col-lg-10 { flex: 0 0 ${l(10)}; max-width: ${l(10)}; }
    &.col-lg-11 { flex: 0 0 ${l(11)}; max-width: ${l(11)}; }
    &.col-lg-12 { flex: 0 0 ${l(12)}; max-width: ${l(12)}; }

    ${a("lg")}
  }
`;e.s(["f",0,e=>{let{xs:i,xsOffset:o,sm:l,smOffset:a,md:r,mdOffset:n,lg:d,lgOffset:c,children:h,dataTestId:m,dataAttributes:f}=e,p=[void 0!==i&&`col-xs-${i}`,void 0!==o&&`col-xs-offset-${o}`,void 0!==l&&`col-sm-${l}`,void 0!==a&&`col-sm-offset-${a}`,void 0!==r&&`col-md-${r}`,void 0!==n&&`col-md-offset-${n}`,void 0!==d&&`col-lg-${d}`,void 0!==c&&`col-lg-offset-${c}`].filter(Boolean);return(0,t.jsx)(s,{className:[e.className,...p].filter(Boolean).join(" "),...f,"data-testid":m??"Col-root",children:h})}],856337)},929842,619249,e=>{e.s(["K",()=>d,"D",()=>n],929842),e.s(["W",()=>r,"B",()=>a],619249);var t,i=e.i(843476),o=e.i(997053);let l=o.m`
  word-wrap: break-word;
  width: 100%;
  margin-bottom: ${({theme:e})=>e.margin.default};
  font-family: ${({theme:e})=>e.font.primaryFamily};
  text-transform: uppercase;
  word-wrap: break-word;
`,a=(e,t="desktop")=>o.m`
  ${({theme:i})=>{let l=i.font.headline[(e=>{switch(e){case n.h1:return"one";case n.h2:return"two";case n.h3:return"three";case n.h4:return"four";case n.h5:return"five";default:return"one"}})(e)][t];return o.m`
      font-size: ${l.fontSize};
      line-height: ${l.lineHeight};
      font-weight: ${l.fontWeight};
      letter-spacing: ${l.letterSpacing};
    `}}
`,s=o.m`
  ${l}
  ${({$styleLevel:e})=>a(e,"mobile")}

  @media screen and (min-width: ${({theme:e})=>e.device.mobile}) {
    ${({$styleLevel:e})=>a(e,"desktop")}
  }
`,r=o.U.h1.withConfig({displayName:"Headline.styles__StyledHeadline",componentId:"sc-aba532a1-0"})`
  ${s}
`;var n=((t={})[t.h1=1]="h1",t[t.h2=2]="h2",t[t.h3=3]="h3",t[t.h4=4]="h4",t[t.h5=5]="h5",t);let d=e=>{let{children:t,className:o,importance:l,renderAs:a,dataTestId:s}=e;return(0,i.jsx)(r,{as:(e=>{switch(e){case 1:default:return"h1";case 2:return"h2";case 3:return"h3";case 4:return"h4";case 5:return"h5"}})(l),$styleLevel:a||l,className:o,"data-testid":s||"Headline-root",children:t})}},699779,e=>{let t=e.i(929842).K;e.s(["f",0,t])},710788,240029,626645,599858,363451,e=>{var t=e.i(843476),i=e.i(271645);e.i(311046);var o=e.i(549560),l=e.i(499881),a=e.i(355351);let s=(e,t,o=a.E)=>{let[l,s]=(0,i.useState)({width:0,height:0,columns:t});return(0,i.useEffect)(()=>{let t=e.current;if(!t)return;let i=()=>{let e=t.getBoundingClientRect(),i=Math.max(t.offsetWidth,Math.ceil(e.width-.01)),l=Math.max(t.offsetHeight,Math.ceil(e.height-.01));i<=0||l<=0||s(e=>e.width===i&&e.height===l?e:{width:i,height:l,columns:(0,a.L)(i,o)})};if(i(),"u"<typeof ResizeObserver)return;let l=new ResizeObserver(i);return l.observe(t),()=>l.disconnect()},[e,o]),l};e.s(["f",0,s],240029);var r=e.i(380153),n=e.i(345712),d=e.i(997053),c=e.i(547905);let h=d.U.div.withConfig({displayName:"HexEdge.styles__Root",componentId:"sc-9795135c-0"})`
  position: absolute;
  inset: 0;
  z-index: ${({$zIndex:e})=>e};
  pointer-events: none;
  contain: layout style;
`,m=d.U.svg.withConfig({displayName:"HexEdge.styles__Canvas",componentId:"sc-9795135c-1"})`
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

  [data-partial='true'] {
    ${c.t}
  }

  &[data-paused='true'] [data-partial='true'] {
    animation-play-state: paused;
  }
`,f=d.U.svg.withConfig({displayName:"HexEdge.styles__FallbackStrip",componentId:"sc-9795135c-2"})`
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

  @media (max-width: ${n.p.tabletportrait}px) {
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
    ${c.t}
  }
`,p=e=>!!e&&e.startsWith("url("),x=d.U.g.withConfig({displayName:"HexEdge.styles__TileGroup",componentId:"sc-9795135c-3"})`
  color: ${({theme:e,$color:t,$fill:i})=>(i&&!p(i)?i:void 0)??("mask"===t?"#ffffff":"onAccent"===t?e.palette.text.onAccent:"tint"===t||"navy"===t?(0,c.m)(e,t):e.palette.default[t])};
  /* Mit eigener Füllfarbe folgt die Gruppe ihrer Quelle im selben Frame, ohne Nachlauf (#1497) */
  transition: ${({$fill:e})=>e?"none":"color 0.2s ease"};
  /* Nachtrag #2186: Verlauf (Seitenkopf-Außenrand) direkt als Füllung */
  fill: ${({$fill:e})=>p(e)?e:"currentColor"};
  stroke: none;
  shape-rendering: crispEdges;

  /* Mit eigener Füllfarbe geht der Rand nahtlos in die Fläche des Hosts über:
     volle Kacheln schließen die Rasterfugen mit einer Kontur in ihrer Farbe (#1497) */
  ${({$fill:e})=>e&&d.m`
      [data-full='true'] {
        stroke: ${p(e)?e:"currentColor"};
        stroke-width: 1px;
      }
    `}
`;e.s(["$",0,m,"o",0,f,"F",0,h,"z",0,x],626645);var g=e.i(859146),u=e.i(650529);let w=([e,t])=>`${Math.round(4*e)}:${Math.round(4*t)}`,$=({tiles:e,color:o,offsetX:l=0,offsetY:s=0,clipPath:r,fill:n,dataTestId:d})=>{let c=(0,i.useMemo)(()=>((e,t,i)=>{let o=new Map;for(let l of e){if(l.alpha<.995)continue;let e=o.get(l.alpha)??{alpha:l.alpha,parts:[]};e.parts.push((0,a.H)(l,t,i)),o.set(l.alpha,e)}return[...o.values()].map(e=>({alpha:e.alpha,count:e.parts.length,d:e.parts.join(" ")}))})(e,l,s),[e,l,s]),h=(0,i.useMemo)(()=>e.filter(e=>(0,u.v)(e.alpha)),[e]),m=(0,i.useMemo)(()=>((e,t=0,i=0)=>{let o=new Set;for(let l of e)if(!(l.alpha<.995))for(let e of(0,g.M)((0,a.F)(l,t,i)))o.add(w(e));return o})(e,l,s),[e,l,s]);return(0,t.jsxs)(x,{$color:o,$fill:n,clipPath:r,"data-testid":d,"data-count":e.length,"data-elements":c.length+h.length,"data-fill":n,children:[c.map(e=>(0,t.jsx)("path",{d:e.d,"data-full":"true","data-count":e.count,"data-alpha":e.alpha,fillRule:"nonzero",style:{"--alpha":String(e.alpha)}},`full-${e.alpha}`)),h.map(e=>{let i=(0,u.g)(e),o=((e,t,i=0,o=0)=>(0,g.M)((0,a.F)(e,i,o)).map(e=>t.has(w(e))))(e,m,l,s),r=o.filter(Boolean).length;return(0,t.jsx)("path",{d:(0,g.e)((0,a.F)(e,l,s),(0,g.C)(e.size),o),"data-rounded":"true","data-sharp":r>0?r:void 0,"data-partial":"true",style:{"--alpha":String(e.alpha),"--shimmer-period":`${i.period}ms`,"--shimmer-offset":`${i.offset}ms`}},e.key)})]})};e.s(["f",0,$],599858);let C=e=>{let t=new Map;for(let i of e){let e=`${i.placement}-${i.color}`,o=t.get(e)??{key:e,placement:i.placement,color:i.color,cells:[]};o.cells.push(i),t.set(e,o)}return[...t.values()]};e.s(["f",0,({edges:e,columns:a,zIndex:d=-1,fill:c,dataTestId:p="hex-edge",className:g})=>{let u=(0,i.useRef)(null),w=s(u,40),k=a??w.columns,v=(e=>{let[t,o]=(0,i.useState)(!0);return(0,i.useEffect)(()=>{let t=e.current;if(!t||"u"<typeof IntersectionObserver)return;let i=new IntersectionObserver(([e])=>o(e.isIntersecting),{rootMargin:"200px"});return i.observe(t),()=>i.disconnect()},[e]),t})(u),y=(0,r.f)(`(max-width: ${n.p.tabletportrait}px)`),b=(0,i.useId)().replace(/:/g,""),j=y?(0,l.Q)(e):e,L=JSON.stringify(j),R=(0,i.useMemo)(()=>(0,l.T)(w.width,w.height,k,JSON.parse(L)),[w.width,w.height,k,L]),_=(0,i.useMemo)(()=>C(R.cells),[R]),{width:N,height:O,offsetX:I,offsetY:M}=R,F=JSON.stringify(e),B=(0,i.useMemo)(()=>w.width>0?[]:(0,o.r)(JSON.parse(F)),[w.width,F]);return(0,t.jsxs)(h,{ref:u,className:g,$zIndex:d,"aria-hidden":"true","data-testid":p,"data-edges":(0,l.a)(j),"data-tiles":R.cells.length,"data-measured":w.width>0?"true":"false",children:[B.map(e=>{let{x:i,y:o,width:l,height:a}=e.viewBox;return(0,t.jsx)(f,{viewBox:`${i} ${o} ${l} ${a}`,preserveAspectRatio:"xMidYMid slice",focusable:"false","data-side":e.side,"data-placement":e.placement,"data-testid":`${p}-fallback-${e.key}`,$depth:e.depth,children:C(e.cells).map(i=>(0,t.jsx)($,{tiles:i.cells,color:i.color,fill:c?.[i.placement],dataTestId:`${p}-fallback-${e.key}-${i.color}`},i.key))},e.key)}),R.cells.length>0&&(0,t.jsxs)(m,{focusable:"false","data-testid":`${p}-svg`,"data-paused":v?"false":"true","data-width":N,"data-height":O,style:{"--edge-x":`${-I}px`,"--edge-y":`${-M}px`,"--edge-w":`${N}px`,"--edge-h":`${O}px`},children:[(0,t.jsxs)("defs",{children:[(0,t.jsx)("clipPath",{id:`${b}-inner`,children:(0,t.jsx)("rect",{x:I,y:M,width:w.width,height:w.height})}),(0,t.jsx)("clipPath",{id:`${b}-outer`,children:(0,t.jsx)("path",{clipRule:"evenodd",d:`M0 0H${N}V${O}H0Z M${I} ${M}v${w.height}h${w.width}v${-w.height}Z`})})]}),Object.keys(j).filter(e=>j[e]?.placement==="inner").map(e=>{let i=j[e];if(!i)return null;let o=((e,t,i,o,l)=>{switch(e){case"top":return{x:t,y:i-1,width:o,height:3};case"bottom":return{x:t,y:i+l-2,width:o,height:3};case"left":return{x:t-1,y:i,width:3,height:l};default:return{x:t+o-2,y:i,width:3,height:l}}})(e,I,M,w.width,w.height);return(0,t.jsx)(x,{$color:i.color,$fill:c?.inner,"data-testid":`${p}-seam-${e}`,children:(0,t.jsx)("rect",{...o})},`seam-${e}`)}),_.map(e=>(0,t.jsx)($,{tiles:e.cells,color:e.color,offsetX:I,offsetY:M,clipPath:`url(#${b}-${e.placement})`,fill:c?.[e.placement],dataTestId:`${p}-${e.placement}-${e.color}`},e.key))]})]})}],363451),e.s([],710788)},877194,62871,e=>{var t=e.i(843476),i=e.i(997053);let o=i.U.svg.withConfig({displayName:"IconChartBarTrendUp.styles__Root",componentId:"sc-f80b9650-0"})``,l=e=>(0,t.jsxs)(o,{className:e.className,"data-testid":"icon-chart-bar-trend-up-root",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[(0,t.jsx)("title",{children:"chart-bar-trend-up"}),(0,t.jsxs)("g",{fill:"currentColor",strokeLinecap:"square",strokeLinejoin:"miter",children:[(0,t.jsx)("path",{d:"M10 12H14V21H10V12Z",stroke:"currentColor",strokeWidth:"2",fill:"none",strokeLinecap:"butt"}),(0,t.jsx)("path",{d:"M18 8H22V21H18V8Z",stroke:"currentColor",strokeWidth:"2",fill:"none",strokeLinecap:"butt"}),(0,t.jsx)("path",{d:"M2 16H6V21H2V16Z",stroke:"currentColor",strokeWidth:"2",fill:"none",strokeLinecap:"butt"}),(0,t.jsx)("path",{d:"M2 7L6 3L10 7L15 2",stroke:"currentColor",strokeWidth:"2",fill:"none"})]})]});e.s(["f",0,l],62871),e.s(["f",0,l],877194)},201927,e=>{var t=e.i(843476),i=e.i(997053);let o=i.U.svg.withConfig({displayName:"IconCheck.styles__Root",componentId:"sc-8d552d59-0"})``;e.s(["f",0,e=>{let i=e.color??"currentColor";return(0,t.jsxs)(o,{className:e.className,"data-testid":"icon-check-root",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[(0,t.jsx)("title",{children:"check"}),(0,t.jsx)("g",{fill:i,strokeLinejoin:"miter",strokeLinecap:"butt",children:(0,t.jsx)("polyline",{points:"3 13 8 19 21 5",fill:"none",stroke:i,strokeLinecap:"square",strokeMiterlimit:10,strokeWidth:"2"})})]})}],201927)},106833,e=>{var t=e.i(843476),i=e.i(997053);let o=i.U.svg.withConfig({displayName:"IconConnection.styles__Root",componentId:"sc-72619d0d-0"})``;e.s(["f",0,e=>(0,t.jsx)(o,{className:e.className,"data-testid":"icon-connection-root",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:(0,t.jsxs)("g",{strokeLinecap:"round",strokeWidth:2,fill:"none",stroke:"currentColor",strokeLinejoin:"round",children:[(0,t.jsx)("circle",{cx:"6",cy:"12",r:"3"}),(0,t.jsx)("circle",{cx:"18",cy:"12",r:"3"}),(0,t.jsx)("path",{d:"M9 12h6"})]})})],106833)},920592,160225,e=>{var t=e.i(843476),i=e.i(997053);let o=i.U.svg.withConfig({displayName:"IconContact.styles__Root",componentId:"sc-1aa3d944-0"})``,l=e=>{let i=e.color??"currentColor";return(0,t.jsxs)(o,{className:e.className,"data-testid":"icon-contact-root",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[(0,t.jsx)("title",{children:"address-book"}),(0,t.jsxs)("g",{fill:i,strokeLinecap:"square",strokeLinejoin:"miter",strokeMiterlimit:10,children:[(0,t.jsx)("path",{d:"m3,2h14c1.105,0,2,.895,2,2v16c0,1.105-.895,2-2,2H3V2Z",fill:"none",stroke:i,strokeWidth:"2"}),(0,t.jsx)("line",{x1:"23",y1:"5",x2:"23",y2:"9",fill:"none",stroke:i,strokeWidth:"2"}),(0,t.jsx)("circle",{cx:"11",cy:"8",r:"2",fill:"none",stroke:i,strokeWidth:"2",strokeLinecap:"butt"}),(0,t.jsx)("path",{d:"m15.45,17c-.252-2.247-2.136-4-4.45-4s-4.198,1.753-4.45,4h8.899Z",fill:"none",stroke:i,strokeWidth:"2"})]})]})};e.s(["f",0,l],160225),e.s(["f",0,l],920592)},351357,e=>{var t=e.i(843476),i=e.i(997053);let o=i.U.svg.withConfig({displayName:"IconDatabase.styles__Root",componentId:"sc-7a89b44d-0"})``;e.s(["f",0,e=>(0,t.jsx)(o,{className:e.className,"data-testid":"icon-database-root",xmlns:"http://www.w3.org/2000/svg",height:"24",width:"24",viewBox:"0 0 24 24",children:(0,t.jsxs)("g",{strokeLinecap:"round",strokeWidth:"1.5",fill:"none",stroke:"currentColor",strokeLinejoin:"round",children:[(0,t.jsx)("ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}),(0,t.jsx)("path",{d:"M3 5v14c0 1.7 4 3 9 3s9-1.3 9-3V5"}),(0,t.jsx)("path",{d:"M21 12c0 1.7-4 3-9 3s-9-1.3-9-3"})]})})],351357)},853374,e=>{var t=e.i(843476),i=e.i(997053);let o=i.U.svg.withConfig({displayName:"IconDocument.styles__Root",componentId:"sc-d1c0c1f0-0"})``;e.s(["f",0,e=>(0,t.jsxs)(o,{className:e.className,"data-testid":"icon-document-root",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:[(0,t.jsx)("title",{children:"file-content"}),(0,t.jsxs)("g",{fill:"currentColor",strokeLinecap:"square",strokeLinejoin:"miter",strokeMiterlimit:"10",children:[(0,t.jsx)("path",{d:"M20 4C20 2.89543 19.1046 2 18 2H11.0784C10.548 2 10.0393 2.21071 9.66421 2.58579L4.58579 7.66421C4.21071 8.03929 4 8.54799 4 9.07843L4 20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V4Z",stroke:"currentColor",strokeWidth:"2",fill:"none"}),(0,t.jsx)("path",{d:"M4 9H11V2",stroke:"currentColor",strokeWidth:"2",fill:"none",strokeLinecap:"butt"}),(0,t.jsx)("path",{d:"M15 9H16",stroke:"currentColor",strokeWidth:"2",fill:"none"}),(0,t.jsx)("path",{d:"M8 13H16",stroke:"currentColor",strokeWidth:"2",fill:"none"}),(0,t.jsx)("path",{d:"M8 17H16",stroke:"currentColor",strokeWidth:"2",fill:"none"})]})]})],853374)},471480,e=>{let t=e.i(853374).f;e.s(["f",0,t])},347317,e=>{var t=e.i(843476),i=e.i(997053);let o=i.U.svg.withConfig({displayName:"IconMaterialAnalysis.styles__Root",componentId:"sc-69c37cd6-0"})``;e.s(["f",0,e=>{let i=e.color??"currentColor";return(0,t.jsxs)(o,{className:e.className,"data-testid":"icon-material-analysis-root",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[(0,t.jsx)("title",{children:"microscope"}),(0,t.jsxs)("g",{fill:i,strokeLinecap:"square",strokeLinejoin:"miter",children:[(0,t.jsx)("path",{d:"M15 11.2321L14 9.5L14.185 9.82035",fill:"none",stroke:i,strokeWidth:"2"}),(0,t.jsx)("path",{d:"M4 17V17C2.38126 14.6981 3.06325 11.5055 5.48124 10.0659L14.2473 4.84676",fill:"none",stroke:i,strokeLinecap:"butt",strokeWidth:"2"}),(0,t.jsx)("path",{d:"M21 21.5H3",fill:"none",stroke:i,strokeWidth:"2"}),(0,t.jsx)("path",{d:"M12 10.9282L8.5 4.86603C8.22386 4.38773 8.38773 3.77614 8.86603 3.5L11.4641 2C11.9424 1.72386 12.554 1.88773 12.8301 2.36603L16.3301 8.4282L12 10.9282Z",fill:"none",stroke:i,strokeWidth:"2"}),(0,t.jsx)("path",{d:"M14.0096 16.5L19.3301 13.4282",fill:"none",stroke:i,strokeWidth:"2"}),(0,t.jsx)("path",{d:"M3 21.5V19.5C3 17.8431 4.34315 16.5 6 16.5V16.5C7.65685 16.5 9 17.8431 9 19.5V21.5",fill:"none",stroke:i,strokeWidth:"2"})]})]})}],347317)},799516,313922,e=>{let t=e.i(347317).f;e.s(["f",0,t],799516);let i=e.i(106833).f;e.s(["f",0,i],313922)},48866,e=>{var t=e.i(843476),i=e.i(997053);let o=i.U.svg.withConfig({displayName:"IconPlus.styles__Root",componentId:"sc-18087acd-0"})``;e.s(["f",0,e=>{let i=e.color??"currentColor";return(0,t.jsxs)(o,{className:e.className,"data-testid":"icon-plus-root",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:[(0,t.jsx)("title",{children:"e-add"}),(0,t.jsxs)("g",{fill:i,strokeLinejoin:"miter",strokeLinecap:"butt",children:[(0,t.jsx)("line",{x1:"21",y1:"12",x2:"3",y2:"12",fill:"none",stroke:i,strokeLinecap:"square",strokeMiterlimit:10,strokeWidth:"2"}),(0,t.jsx)("line",{x1:"12",y1:"3",x2:"12",y2:"21",fill:"none",stroke:i,strokeLinecap:"square",strokeMiterlimit:10,strokeWidth:"2"})]})]})}],48866)},160458,e=>{var t=e.i(843476),i=e.i(997053);let o=i.U.svg.withConfig({displayName:"IconSearch.styles__Root",componentId:"sc-b6a7d21c-0"})``;e.s(["f",0,e=>(0,t.jsx)(o,{...e,width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:e.className,"data-testid":"icon-search-root",children:(0,t.jsx)("path",{d:"M16.9265 17.0401L20.3996 20.4001M11.3996 7.2001C13.3878 7.2001 14.9996 8.81187 14.9996 10.8001M19.2796 11.4401C19.2796 15.77 15.7695 19.2801 11.4396 19.2801C7.1097 19.2801 3.59961 15.77 3.59961 11.4401C3.59961 7.11018 7.1097 3.6001 11.4396 3.6001C15.7695 3.6001 19.2796 7.11018 19.2796 11.4401Z",stroke:e.strokeColor||"currentColor",strokeWidth:"2",strokeLinecap:"round"})})],160458)},696986,e=>{let t=e.i(160458).f;e.s(["f",0,t])},396832,e=>{var t=e.i(843476),i=e.i(997053);let o=i.U.svg.withConfig({displayName:"IconSettings.styles__Root",componentId:"sc-8bc4e240-0"})``;e.s(["f",0,e=>(0,t.jsxs)(o,{className:e.className,"data-testid":"icon-settings-root",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,t.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13.6763 4.31627C13.2488 2.56124 10.7512 2.56124 10.3237 4.31627C10.2599 4.57999 10.1347 4.82492 9.95831 5.03112C9.78194 5.23732 9.55938 5.39897 9.30874 5.50291C9.0581 5.60684 8.78646 5.65014 8.51592 5.62927C8.24538 5.60839 7.9836 5.52394 7.75187 5.38279C6.20832 4.44227 4.44201 6.20855 5.38254 7.75207C5.99006 8.74884 5.45117 10.0494 4.31713 10.325C2.56096 10.7514 2.56096 13.25 4.31713 13.6753C4.58093 13.7392 4.8259 13.8645 5.03211 14.041C5.23831 14.2175 5.39991 14.4402 5.50375 14.691C5.6076 14.9418 5.65074 15.2135 5.62968 15.4841C5.60862 15.7547 5.52394 16.0165 5.38254 16.2482C4.44201 17.7917 6.20832 19.558 7.75187 18.6175C7.98356 18.4761 8.24536 18.3914 8.51597 18.3704C8.78658 18.3493 9.05834 18.3924 9.30912 18.4963C9.5599 18.6001 9.7826 18.7617 9.95911 18.9679C10.1356 19.1741 10.2609 19.4191 10.3248 19.6829C10.7512 21.439 13.2499 21.439 13.6752 19.6829C13.7393 19.4192 13.8647 19.1744 14.0413 18.9684C14.2178 18.7623 14.4405 18.6008 14.6912 18.497C14.9419 18.3932 15.2135 18.35 15.4841 18.3709C15.7546 18.3919 16.0164 18.4764 16.2481 18.6175C17.7917 19.558 19.558 17.7917 18.6175 16.2482C18.4763 16.0165 18.3918 15.7547 18.3709 15.4842C18.35 15.2136 18.3932 14.942 18.497 14.6913C18.6008 14.4406 18.7623 14.2179 18.9683 14.0414C19.1744 13.8648 19.4192 13.7394 19.6829 13.6753C21.439 13.2489 21.439 10.7502 19.6829 10.325C19.4191 10.2611 19.1741 10.1358 18.9679 9.95928C18.7617 9.78278 18.6001 9.56007 18.4962 9.3093C18.3924 9.05853 18.3493 8.78677 18.3703 8.51617C18.3914 8.24556 18.4761 7.98376 18.6175 7.75207C19.558 6.20855 17.7917 4.44227 16.2481 5.38279C16.0164 5.52418 15.7546 5.60886 15.484 5.62992C15.2134 5.65098 14.9417 5.60784 14.6909 5.504C14.4401 5.40016 14.2174 5.23856 14.0409 5.03236C13.8644 4.82616 13.7391 4.58119 13.6752 4.3174L13.6763 4.31627Z",stroke:"currentColor",strokeWidth:"2"}),(0,t.jsx)("path",{d:"M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z",stroke:"currentColor",strokeWidth:"2"})]})],396832)},122884,e=>{var t=e.i(843476),i=e.i(997053);let o=i.U.svg.withConfig({displayName:"IconShield.styles__Root",componentId:"sc-5deab35-0"})``;e.s(["f",0,e=>(0,t.jsx)(o,{className:e.className,"data-testid":"icon-shield-root",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsxs)("g",{stroke:"currentColor",strokeLinecap:"square",strokeLinejoin:"miter",strokeMiterlimit:10,children:[(0,t.jsx)("rect",{x:"8",y:"11",width:"8",height:"5",rx:"1",ry:"1",fill:"none",strokeWidth:"2"}),(0,t.jsx)("path",{d:"m10,11v-3c.003-1.103.897-1.997,2-2h0c1.103.003,1.997.897,2,2v3",fill:"none",strokeWidth:"2"}),(0,t.jsx)("path",{d:"m12,22s9-2,9-11v-7c-3.203,0-6.11-.731-9-2-2.89,1.269-5.797,2-9,2v7c0,9,9,11,9,11Z",fill:"none",strokeWidth:"2"})]})})],122884)},890603,e=>{var t=e.i(843476),i=e.i(997053);let o=i.U.svg.withConfig({displayName:"IconSparkle.styles__Root",componentId:"sc-21a091f9-0"})``;e.s(["f",0,e=>(0,t.jsxs)(o,{className:e.className,"data-testid":"icon-sparkle-root",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[(0,t.jsx)("title",{children:"sparkle"}),(0,t.jsxs)("g",{fill:"currentColor",strokeLinecap:"square",strokeLinejoin:"miter",children:[(0,t.jsx)("path",{d:"M17.85 15.15L16.5 12L15.15 15.15L12 16.5L15.15 17.85L16.5 21L17.85 17.85L21 16.5L17.85 15.15Z",stroke:"currentColor",strokeWidth:"2",fill:"none",strokeLinecap:"butt"}),(0,t.jsx)("path",{d:"M8.85 6.15L7.5 3L6.15 6.15L3 7.5L6.15 8.85L7.5 12L8.85 8.85L12 7.5L8.85 6.15Z",stroke:"currentColor",strokeWidth:"2",fill:"none",strokeLinecap:"butt"}),(0,t.jsx)("path",{d:"M20.2 3.8L19 1L17.8 3.8L15 5L17.8 6.2L19 9L20.2 6.2L23 5L20.2 3.8Z",fill:"currentColor",stroke:"none"}),(0,t.jsx)("path",{d:"M6.2 17.8L5 15L3.8 17.8L1 19L3.8 20.2L5 23L6.2 20.2L9 19L6.2 17.8Z",fill:"currentColor",stroke:"none"})]})]})],890603)},74950,e=>{var t=e.i(843476),i=e.i(997053);let o=i.U.svg.withConfig({displayName:"IconUsers.styles__Root",componentId:"sc-39cb49dd-0"})``;e.s(["f",0,e=>{let i=e.color??"currentColor";return(0,t.jsxs)(o,{className:e.className,"data-testid":"icon-users-root",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[(0,t.jsx)("title",{children:"crowd"}),(0,t.jsxs)("g",{fill:i,strokeLinecap:"square",strokeLinejoin:"miter",strokeMiterlimit:10,children:[(0,t.jsx)("circle",{cx:"5",cy:"13",r:"2",fill:"none",stroke:i,strokeWidth:"2"}),(0,t.jsx)("path",{d:"m5,18c-2.209,0-4,1.791-4,4h8c0-2.209-1.791-4-4-4Z",fill:"none",stroke:i,strokeWidth:"2"}),(0,t.jsx)("path",{d:"m19,18c-2.209,0-4,1.791-4,4h8c0-2.209-1.791-4-4-4Z",fill:"none",stroke:i,strokeWidth:"2"}),(0,t.jsx)("circle",{cx:"19",cy:"13",r:"2",fill:"none",stroke:i,strokeWidth:"2"}),(0,t.jsx)("circle",{cx:"12",cy:"3",r:"2",fill:"none",stroke:i,strokeWidth:"2"}),(0,t.jsx)("path",{d:"m15,9.354c-.733-.831-1.805-1.354-3-1.354s-2.267.524-3,1.354",fill:"none",stroke:i,strokeWidth:"2"})]})]})}],74950)},868169,e=>{let t=e.i(74950).f;e.s(["f",0,t])},861527,e=>{var t=e.i(843476),i=e.i(997053);let o=i.U.svg.withConfig({displayName:"IconVerification.styles__Root",componentId:"sc-1f6bc4b5-0"})`
  color: ${({$color:e})=>e||"currentColor"};
`;e.s(["f",0,e=>{let{color:i,size:l=24}=e;return(0,t.jsx)(o,{className:e.className,"data-testid":"icon-verification-root",xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",$color:i,children:(0,t.jsxs)("g",{fill:"currentColor",strokeLinecap:"square",strokeLinejoin:"miter",strokeMiterlimit:"10",children:[(0,t.jsx)("path",{d:"m22,12c0-1.476-.931-2.725-2.233-3.217.572-1.269.348-2.811-.695-3.854s-2.585-1.269-3.854-.695c-.492-1.304-1.742-2.233-3.217-2.233s-2.725.931-3.217,2.233c-1.269-.574-2.811-.348-3.854.695-1.043,1.043-1.268,2.585-.695,3.854-1.304.492-2.233,1.742-2.233,3.217s.931,2.725,2.233,3.217c-.572,1.269-.348,2.811.695,3.854,1.043,1.043,2.585,1.269,3.854.695.492,1.304,1.742,2.233,3.217,2.233s2.725-.931,3.217-2.233c1.269.572,2.811.348,3.854-.695s1.269-2.585.695-3.854c1.304-.492,2.233-1.742,2.233-3.217Z",fill:"none",stroke:"currentColor",strokeWidth:"2"}),(0,t.jsx)("polyline",{points:"8 12.5 10.5 15 16 9",fill:"none",stroke:"currentColor",strokeWidth:"2"})]})})}],861527)},559173,e=>{e.s(["p",()=>a,"$",()=>o]);var t=e.i(997053),i=e.i(703089);let o=(e=i.g.body)=>t.m`
    font-family: ${e=>e.theme.font.secondaryFamily};
    font-size: ${t=>t.theme.font.text[e].mobile.fontSize};
    line-height: ${t=>t.theme.font.text[e].mobile.lineHeight};
    font-weight: ${t=>t.theme.font.text[e].mobile.fontWeight};
    letter-spacing: ${t=>t.theme.font.text[e].mobile.letterSpacing};
    -webkit-font-smoothing: antialiased;
    word-wrap: break-word;

    a {
      text-decoration: underline;
      &:link,
      &:active,
      &:visited {
        color: ${e=>e.theme.palette.link.primary};
      }
    }

    b,
    strong {
      font-weight: bold;
    }

    @media screen and (min-width: ${e=>e.theme.device.mobile}) {
      font-size: ${t=>t.theme.font.text[e].desktop.fontSize};
      line-height: ${t=>t.theme.font.text[e].desktop.lineHeight};
      font-weight: ${t=>t.theme.font.text[e].desktop.fontWeight};
      letter-spacing: ${t=>t.theme.font.text[e].desktop.letterSpacing};
    }
  `,l=t.m`
  margin-bottom: ${e=>e.$variant===i.g.caption?0:e.theme.margin.default};
  max-width: 700px;
  ${e=>o(e.$variant)}
`,a=t.U.p.withConfig({displayName:"Text.styles__Text",componentId:"sc-18bfeccb-0"})`
  ${l}
`},703089,e=>{e.s(["p",()=>a,"g",()=>l]);var t,i=e.i(843476),o=e.i(559173),l=((t={}).bodybig="bodybig",t.body="body",t.bodysmall="bodysmall",t.button="button",t.caption="caption",t.navigation="navigation",t);let a=({children:e,dataTestId:t="text-root",variant:l,className:a})=>(0,i.jsx)(o.p,{"data-testid":t,className:a,$variant:l,children:e})},729950,e=>{var t=e.i(271645);let i=(0,t.createContext)(null);e.s(["R",0,i,"H",0,function(){return(0,t.useContext)(i)}])}])})();