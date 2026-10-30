(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,429307,159255,e=>{var t=e.i(843476),a=e.i(997053);e.i(315481);var i=e.i(10003),l=e.i(726029),o=e.i(437992);let n=(0,a.U)(i.NavLink).withConfig({displayName:"ArrowLink__Root",componentId:"sc-c779a4e5-0"})`
  ${l.e}
  ${({$stretched:e})=>e&&l.i}
`,r=()=>(0,t.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":"true",children:(0,t.jsx)("path",{d:"M8.9 3.3a.9.9 0 0 1 1.3 0l4.1 4.1a.9.9 0 0 1 0 1.2l-4.1 4.1a.9.9 0 1 1-1.3-1.3l2.6-2.5H2.4a.9.9 0 1 1 0-1.8h9.1L8.9 4.6a.9.9 0 0 1 0-1.3Z"})}),s=a.U.span.withConfig({displayName:"ArrowLink__Nowrap",componentId:"sc-c779a4e5-1"})`
  white-space: nowrap;
`;e.s(["f",0,function({href:e,children:a,dataTestId:i,target:l,stretched:d=!1}){let c="string"==typeof a?a:null,f=c?c.lastIndexOf(" "):-1;return(0,t.jsx)(n,{href:e,"data-testid":i,"data-stretched":d?"true":void 0,$stretched:d,...(0,o.a)(e,{target:l}),children:c&&f>0?(0,t.jsxs)(t.Fragment,{children:[c.slice(0,f+1),(0,t.jsxs)(s,{children:[c.slice(f+1),(0,t.jsx)(r,{})]})]}):(0,t.jsxs)(t.Fragment,{children:[a,(0,t.jsx)(r,{})]})})}],159255),e.s([],429307)},114178,861133,e=>{var t=e.i(843476);e.i(315481);var a=e.i(10003),i=e.i(997053);let l=i.U.nav.withConfig({displayName:"Breadcrumb.styles__Root",componentId:"sc-1af95cf5-0"})`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  font-family: ${e=>e.theme.font.primaryFamily};
  font-size: 14px;
  margin-bottom: ${e=>e.theme.margin.small};
`,o=i.U.span.withConfig({displayName:"Breadcrumb.styles__BreadcrumbItem",componentId:"sc-1af95cf5-1"})`
  display: inline-flex;
  align-items: center;
`,n=(0,i.U)(a.NavLink).withConfig({displayName:"Breadcrumb.styles__BreadcrumbLink",componentId:"sc-1af95cf5-2"})`
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
`;e.i(821194);var d=e.i(99222);e.s(["f",0,e=>{let{items:a,className:i,dataTestId:c="breadcrumb"}=e,{tr:f}=(0,d.f)();return(0,t.jsx)(l,{className:i,"data-testid":c,"aria-label":f("common.breadcrumb",{defaultValue:"Breadcrumb"}),children:a.map((e,i)=>{let l=i===a.length-1;return(0,t.jsxs)(o,{children:[e.href&&!l?(0,t.jsx)(n,{href:e.href,"data-testid":`${c}-link-${i}`,children:e.label}):(0,t.jsx)(r,{"data-testid":`${c}-text-${i}`,"aria-current":l?"page":void 0,children:e.label}),!l&&(0,t.jsx)(s,{"aria-hidden":"true",children:"/"})]},`${e.label}-${i}`)})})}],861133),e.s([],114178)},411206,173972,e=>{var t=e.i(843476),a=e.i(271645),i=e.i(618566);e.i(821194);var l=e.i(99222),o=e.i(476999),n=e.i(14431),r=e.i(713347),s=e.i(635647),d=e.i(891567),c=e.i(997053);let f=c.m`
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
  ${f}
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
  ${f}
`,p={tel:{key:"contactLink.aria.tel",fallback:"Anrufen: {{value}}"},mail:{key:"contactLink.aria.mail",fallback:"E-Mail schreiben an {{value}}"},map:{key:"contactLink.aria.map",fallback:"Auf der Karte zeigen: {{value}}"}};e.s(["f",0,({kind:e,value:c,place:f,geo:u,subject:x,icon:g,children:$,dataTestId:w,className:y})=>{let{tr:b}=(0,l.f)(),v=(0,i.usePathname)(),j="string"==typeof c?c.trim():"",k=(0,r.useSiteLocale)(),C="tel"===e?(0,s.A)(j):"mail"===e?(0,s.c)(j,x):(0,s.W)({query:j,geo:u},k),_=(0,a.useCallback)(()=>{(0,o.q)(v||"/",d.F,{kind:e,place:f}),n.v({category:"contact",message:d.F,data:{kind:e,place:f}})},[v,e,f]),N=w??`contact-link-${e}`,I=(0,t.jsxs)(t.Fragment,{children:[g,$??j]});if(!j)return null;if(!C)return(0,t.jsx)(m,{className:y,"data-testid":N,"data-kind":e,"data-linked":"false",children:I});let F=j.replace(/\s*\n\s*/g,", ");return(0,t.jsx)(h,{className:y,href:C,onClick:_,"aria-label":b(p[e].key,{value:F,defaultValue:p[e].fallback}),"data-testid":N,"data-kind":e,"data-linked":"true",children:I})}],173972),e.s([],411206)},10059,e=>{var t=e.i(997053);let a=t.U.div.withConfig({displayName:"Row.styles__Root",componentId:"sc-3e89f65f-0"})`
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
`;e.s(["f",0,a])},152186,856337,e=>{var t=e.i(843476),a=e.i(10059);e.s(["f",0,e=>{let{children:i,dataTestId:l}=e;return(0,t.jsx)(a.f,{className:[e.className,"row"].filter(Boolean).join(" "),"data-testid":l||"Row-root",children:i})}],152186);var i=e.i(997053);let l=e=>`${e/12*100}%`,o=e=>Array.from({length:12},(t,a)=>`&.col-${e}-offset-${a} { margin-left: ${l(a)}; }`).join("\n  "),n=i.U.div.withConfig({displayName:"Col.styles__Root",componentId:"sc-8cb234a0-0"})`
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

  ${o("xs")}

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

    ${o("sm")}
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

    ${o("md")}
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

    ${o("lg")}
  }
`;e.s(["f",0,e=>{let{xs:a,xsOffset:i,sm:l,smOffset:o,md:r,mdOffset:s,lg:d,lgOffset:c,children:f,dataTestId:h,dataAttributes:m}=e,p=[void 0!==a&&`col-xs-${a}`,void 0!==i&&`col-xs-offset-${i}`,void 0!==l&&`col-sm-${l}`,void 0!==o&&`col-sm-offset-${o}`,void 0!==r&&`col-md-${r}`,void 0!==s&&`col-md-offset-${s}`,void 0!==d&&`col-lg-${d}`,void 0!==c&&`col-lg-offset-${c}`].filter(Boolean);return(0,t.jsx)(n,{className:[e.className,...p].filter(Boolean).join(" "),...m,"data-testid":h??"Col-root",children:f})}],856337)},650868,224906,e=>{let t=e.i(152186).f;e.s(["f",0,t],650868);let a=e.i(856337).f;e.s(["f",0,a],224906)},710788,240029,626645,599858,363451,e=>{var t=e.i(843476),a=e.i(271645);e.i(311046);var i=e.i(549560),l=e.i(499881),o=e.i(355351);let n=(e,t,i=o.E)=>{let[l,n]=(0,a.useState)({width:0,height:0,columns:t});return(0,a.useEffect)(()=>{let t=e.current;if(!t)return;let a=()=>{let e=t.getBoundingClientRect(),a=Math.max(t.offsetWidth,Math.ceil(e.width-.01)),l=Math.max(t.offsetHeight,Math.ceil(e.height-.01));a<=0||l<=0||n(e=>e.width===a&&e.height===l?e:{width:a,height:l,columns:(0,o.L)(a,i)})};if(a(),"u"<typeof ResizeObserver)return;let l=new ResizeObserver(a);return l.observe(t),()=>l.disconnect()},[e,i]),l};e.s(["f",0,n],240029);var r=e.i(380153),s=e.i(345712),d=e.i(997053),c=e.i(547905);let f=d.U.div.withConfig({displayName:"HexEdge.styles__Root",componentId:"sc-9795135c-0"})`
  position: absolute;
  inset: 0;
  z-index: ${({$zIndex:e})=>e};
  pointer-events: none;
  contain: layout style;
`,h=d.U.svg.withConfig({displayName:"HexEdge.styles__Canvas",componentId:"sc-9795135c-1"})`
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
`,m=d.U.svg.withConfig({displayName:"HexEdge.styles__FallbackStrip",componentId:"sc-9795135c-2"})`
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

  @media (max-width: ${s.p.tabletportrait}px) {
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
`,p=e=>!!e&&e.startsWith("url("),u=d.U.g.withConfig({displayName:"HexEdge.styles__TileGroup",componentId:"sc-9795135c-3"})`
  color: ${({theme:e,$color:t,$fill:a})=>(a&&!p(a)?a:void 0)??("mask"===t?"#ffffff":"onAccent"===t?e.palette.text.onAccent:"tint"===t||"navy"===t?(0,c.m)(e,t):e.palette.default[t])};
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
`;e.s(["$",0,h,"o",0,m,"F",0,f,"z",0,u],626645);var x=e.i(859146),g=e.i(650529);let $=([e,t])=>`${Math.round(4*e)}:${Math.round(4*t)}`,w=({tiles:e,color:i,offsetX:l=0,offsetY:n=0,clipPath:r,fill:s,dataTestId:d})=>{let c=(0,a.useMemo)(()=>((e,t,a)=>{let i=new Map;for(let l of e){if(l.alpha<.995)continue;let e=i.get(l.alpha)??{alpha:l.alpha,parts:[]};e.parts.push((0,o.H)(l,t,a)),i.set(l.alpha,e)}return[...i.values()].map(e=>({alpha:e.alpha,count:e.parts.length,d:e.parts.join(" ")}))})(e,l,n),[e,l,n]),f=(0,a.useMemo)(()=>e.filter(e=>(0,g.v)(e.alpha)),[e]),h=(0,a.useMemo)(()=>((e,t=0,a=0)=>{let i=new Set;for(let l of e)if(!(l.alpha<.995))for(let e of(0,x.M)((0,o.F)(l,t,a)))i.add($(e));return i})(e,l,n),[e,l,n]);return(0,t.jsxs)(u,{$color:i,$fill:s,clipPath:r,"data-testid":d,"data-count":e.length,"data-elements":c.length+f.length,"data-fill":s,children:[c.map(e=>(0,t.jsx)("path",{d:e.d,"data-full":"true","data-count":e.count,"data-alpha":e.alpha,fillRule:"nonzero",style:{"--alpha":String(e.alpha)}},`full-${e.alpha}`)),f.map(e=>{let a=(0,g.g)(e),i=((e,t,a=0,i=0)=>(0,x.M)((0,o.F)(e,a,i)).map(e=>t.has($(e))))(e,h,l,n),r=i.filter(Boolean).length;return(0,t.jsx)("path",{d:(0,x.e)((0,o.F)(e,l,n),(0,x.C)(e.size),i),"data-rounded":"true","data-sharp":r>0?r:void 0,"data-partial":"true",style:{"--alpha":String(e.alpha),"--shimmer-period":`${a.period}ms`,"--shimmer-offset":`${a.offset}ms`}},e.key)})]})};e.s(["f",0,w],599858);let y=e=>{let t=new Map;for(let a of e){let e=`${a.placement}-${a.color}`,i=t.get(e)??{key:e,placement:a.placement,color:a.color,cells:[]};i.cells.push(a),t.set(e,i)}return[...t.values()]};e.s(["f",0,({edges:e,columns:o,zIndex:d=-1,fill:c,dataTestId:p="hex-edge",className:x})=>{let g=(0,a.useRef)(null),$=n(g,40),b=o??$.columns,v=(e=>{let[t,i]=(0,a.useState)(!0);return(0,a.useEffect)(()=>{let t=e.current;if(!t||"u"<typeof IntersectionObserver)return;let a=new IntersectionObserver(([e])=>i(e.isIntersecting),{rootMargin:"200px"});return a.observe(t),()=>a.disconnect()},[e]),t})(g),j=(0,r.f)(`(max-width: ${s.p.tabletportrait}px)`),k=(0,a.useId)().replace(/:/g,""),C=j?(0,l.Q)(e):e,_=JSON.stringify(C),N=(0,a.useMemo)(()=>(0,l.T)($.width,$.height,b,JSON.parse(_)),[$.width,$.height,b,_]),I=(0,a.useMemo)(()=>y(N.cells),[N]),{width:F,height:M,offsetX:U,offsetY:L}=N,R=JSON.stringify(e),S=(0,a.useMemo)(()=>$.width>0?[]:(0,i.r)(JSON.parse(R)),[$.width,R]);return(0,t.jsxs)(f,{ref:g,className:x,$zIndex:d,"aria-hidden":"true","data-testid":p,"data-edges":(0,l.a)(C),"data-tiles":N.cells.length,"data-measured":$.width>0?"true":"false",children:[S.map(e=>{let{x:a,y:i,width:l,height:o}=e.viewBox;return(0,t.jsx)(m,{viewBox:`${a} ${i} ${l} ${o}`,preserveAspectRatio:"xMidYMid slice",focusable:"false","data-side":e.side,"data-placement":e.placement,"data-testid":`${p}-fallback-${e.key}`,$depth:e.depth,children:y(e.cells).map(a=>(0,t.jsx)(w,{tiles:a.cells,color:a.color,fill:c?.[a.placement],dataTestId:`${p}-fallback-${e.key}-${a.color}`},a.key))},e.key)}),N.cells.length>0&&(0,t.jsxs)(h,{focusable:"false","data-testid":`${p}-svg`,"data-paused":v?"false":"true","data-width":F,"data-height":M,style:{"--edge-x":`${-U}px`,"--edge-y":`${-L}px`,"--edge-w":`${F}px`,"--edge-h":`${M}px`},children:[(0,t.jsxs)("defs",{children:[(0,t.jsx)("clipPath",{id:`${k}-inner`,children:(0,t.jsx)("rect",{x:U,y:L,width:$.width,height:$.height})}),(0,t.jsx)("clipPath",{id:`${k}-outer`,children:(0,t.jsx)("path",{clipRule:"evenodd",d:`M0 0H${F}V${M}H0Z M${U} ${L}v${$.height}h${$.width}v${-$.height}Z`})})]}),Object.keys(C).filter(e=>C[e]?.placement==="inner").map(e=>{let a=C[e];if(!a)return null;let i=((e,t,a,i,l)=>{switch(e){case"top":return{x:t,y:a-1,width:i,height:3};case"bottom":return{x:t,y:a+l-2,width:i,height:3};case"left":return{x:t-1,y:a,width:3,height:l};default:return{x:t+i-2,y:a,width:3,height:l}}})(e,U,L,$.width,$.height);return(0,t.jsx)(u,{$color:a.color,$fill:c?.inner,"data-testid":`${p}-seam-${e}`,children:(0,t.jsx)("rect",{...i})},`seam-${e}`)}),I.map(e=>(0,t.jsx)(w,{tiles:e.cells,color:e.color,offsetX:U,offsetY:L,clipPath:`url(#${k}-${e.placement})`,fill:c?.[e.placement],dataTestId:`${p}-${e.placement}-${e.color}`},e.key))]})]})}],363451),e.s([],710788)},813267,e=>{var t=e.i(843476),a=e.i(997053);let i=a.U.svg.withConfig({displayName:"IconLocation.styles__Root",componentId:"sc-d4764d0b-0"})``;e.s(["f",0,e=>(0,t.jsxs)(i,{className:e.className,"data-testid":"icon-location-root",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:[(0,t.jsx)("path",{d:"M4.5 9.75768C4.5 15.5 12 22 12 22C12 22 19.5 15.5 19.5 9.75768C19.5 4.81181 15.6559 2 12 2C8.34409 2 4.5 4.81181 4.5 9.75768Z",stroke:"currentColor",strokeWidth:"2",strokeLinejoin:"round"}),(0,t.jsx)("circle",{cx:"12",cy:"9.5",r:"2.5",stroke:"currentColor",strokeWidth:"2"})]})],813267)},874142,e=>{let t=e.i(215063).f;e.s(["f",0,t])},538915,226129,600639,546843,e=>{var t=e.i(843476),a=e.i(997053);e.i(315481);var i=e.i(10003),l=e.i(547905),o=e.i(136717);let n=e=>(0,o.L)(e.palette.footer.backgroundEnd),r=e=>(0,o.p)(e.palette.footer.backgroundEnd),s=(e,t)=>r(e)?`rgba(255, 255, 255, ${t})`:`rgba(33, 37, 41, ${t})`,d=a.U.footer.withConfig({displayName:"Footer.styles__Root",componentId:"sc-809a1aba-0"})`
  width: 100%;
  /* #2164: Verlauf aus dem Theme, in beiden Modi dunkel; Schrift aus dem Kontrast (footerColors) */
  background: linear-gradient(
    to top,
    ${({theme:e})=>e.palette.footer.background},
    ${({theme:e})=>e.palette.footer.backgroundEnd}
  );
  color: ${({theme:e})=>n(e)};
  padding: 1rem 0;
  flex-shrink: 0;
  z-index: 10;
  margin-top: auto;
  /* Wabenrand statt runder Ecken (#1188); Logo und Copyright bleiben aus der Randzone */
  ${({$edges:e})=>(0,l.n)(e)}
  ${({$edges:e})=>(0,l.o)("top","1rem",e)}

  /* Textelemente erben die Fußschrift — Doppelklasse statt !important, schlägt globale Regeln */
  && h1,
  && h2,
  && h3,
  && h4,
  && h5,
  && p,
  && span {
    color: ${({theme:e})=>n(e)};
  }
`,c=a.U.div.withConfig({displayName:"Footer.styles__BottomBar",componentId:"sc-809a1aba-1"})`
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
`,h=a.U.nav.withConfig({displayName:"Footer.styles__NavMeta",componentId:"sc-809a1aba-3"})`
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
    color: ${({theme:e})=>n(e)};
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
`,m=a.U.button.withConfig({displayName:"Footer.styles__FooterMetaButton",componentId:"sc-809a1aba-4"})`
  padding: 0;
  border: 0;
  background: none;
  font: inherit;
  cursor: pointer;
  color: ${({theme:e})=>n(e)};
  text-decoration: none;

  &:hover,
  &:focus-visible {
    text-decoration: underline;
  }
`,p=(0,a.U)(i.NavLink).withConfig({displayName:"Footer.styles__FooterLink",componentId:"sc-809a1aba-5"})`
  color: inherit;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`,u=(0,a.U)(i.NavLink).withConfig({displayName:"Footer.styles__LogoLink",componentId:"sc-809a1aba-6"})`
  display: inline-block;
  text-decoration: none;
`,x=a.U.div.withConfig({displayName:"Footer.styles__FooterSection",componentId:"sc-809a1aba-7"})`
  margin-bottom: 20px;
`,g=a.U.ul.withConfig({displayName:"Footer.styles__ContactList",componentId:"sc-809a1aba-8"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 0;
  padding: 0;
  list-style: none;
`,$=a.U.li.withConfig({displayName:"Footer.styles__ContactItem",componentId:"sc-809a1aba-9"})`
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
    color: ${({theme:e})=>n(e)};
  }

  && > a:hover {
    text-decoration: underline;
  }
`,w=a.U.h2.withConfig({displayName:"Footer.styles__FooterSectionTitle",componentId:"sc-809a1aba-10"})`
  && {
    color: ${({theme:e})=>n(e)};
  }
  font-size: 1rem;
  font-weight: 700;
  margin: 0 0 16px;
  text-transform: uppercase;
`,y=a.U.nav.withConfig({displayName:"Footer.styles__FooterLinks",componentId:"sc-809a1aba-11"})`
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
    color: ${({theme:e})=>n(e)};
  }

  && a:hover,
  && a:focus-visible {
    text-decoration: underline;
  }
`;var b=e.i(424734),v=e.i(650868),j=e.i(224906);e.i(821194);var k=e.i(99222),C=e.i(722216),_=e.i(507924),N=e.i(284248),I=e.i(891567);let F=[{titleKey:"footer.sections.links",links:[{href:"/team",labelKey:"footer.team"},{href:"/faq",labelKey:"footer.faq"},{href:"/about",labelKey:"footer.about"},{href:"/news",labelKey:"footer.latest"},{href:"/contact-us",labelKey:"footer.contactForm"},{href:"/services",labelKey:"footer.services"}]}],M={titleKey:"footer.contact",email:I._.info,phone:I.h.central,address:I.Y},U=[{href:"/agb",labelKey:"footer.terms"},{href:"/imprint",labelKey:"footer.imprint"},{href:"/privacy",labelKey:"footer.privacy"},{href:"/email-disclaimer",labelKey:"footer.emailDisclaimer"},{href:"/accessibility",labelKey:"footer.accessibility"}];e.i(411206);var L=e.i(173972),R=e.i(317573),S=e.i(757658),K=e.i(874142),B=e.i(813267);e.i(710788);var H=e.i(363451);e.i(311046);var A=e.i(499881);let T={top:{placement:"inner",color:"white"}};e.s(["f",0,e=>{let i=e.edges??T,{tr:l}=(0,k.f)(),o=(0,a.i)(),{footer:n}=(0,C.f)(),s=(0,N.C)();return(0,t.jsxs)(d,{className:e.className,"data-testid":"footer-root",$edges:i,children:[(0,A.N)(i)&&(0,t.jsx)(H.f,{edges:i,dataTestId:"footer-root-edge"}),(0,t.jsxs)(v.f,{children:[(0,t.jsx)(j.f,{xs:12,md:3,lg:2,children:(0,t.jsx)(u,{href:"/","aria-label":l("footer.logo.ariaLabel",{defaultValue:"plastship – zur Startseite"}),"data-testid":"footer-logo-link",children:(0,t.jsx)(b.f,{inverted:!o?.palette?.footer||r(o),monochrome:!0})})}),(0,t.jsx)(t.Fragment,{children:n.length>0?n.map((e,a)=>(0,t.jsx)(j.f,{xs:12,sm:6,md:4,children:(0,t.jsxs)(x,{"data-testid":`footer-cms-section-${a}`,"data-count":e.children?.length??0,children:[(0,t.jsx)(w,{"data-testid":`footer-cms-section-${a}-title`,children:(0,_.u)(e.label,s)}),(0,t.jsx)(y,{children:(e.children??[]).map((e,i)=>(0,t.jsx)(p,{href:e.href,"data-testid":`footer-cms-section-${a}-link-${i}`,children:(0,_.u)(e.label,s)},`${e.href}-${i}`))})]})},`${e.href}-${a}`)):F.map((e,a)=>(0,t.jsx)(j.f,{xs:12,sm:6,md:4,children:(0,t.jsxs)(x,{"data-testid":`footer-section-${a}`,"data-count":e.links.length,children:[(0,t.jsx)(w,{"data-testid":`footer-section-${a}-title`,children:l(e.titleKey)}),(0,t.jsx)(y,{children:e.links.map(e=>(0,t.jsx)(p,{href:e.href,"data-testid":`footer-link-${e.href.replace(/^\//,"").replace(/\//g,"-")}`,children:l(e.labelKey)},e.href))})]})},e.titleKey))}),(0,t.jsx)(j.f,{xs:12,sm:6,md:5,lg:4,children:(0,t.jsxs)(x,{"data-testid":"footer-contact",children:[(0,t.jsx)(w,{"data-testid":"footer-contact-title",children:l(M.titleKey)}),(0,t.jsxs)(g,{children:[(0,t.jsx)($,{children:(0,t.jsx)(L.f,{kind:"mail",value:M.email,place:"footer",icon:(0,t.jsx)(R.f,{}),dataTestId:"footer-contact-email"})}),(0,t.jsx)($,{children:(0,t.jsx)(L.f,{kind:"tel",value:M.phone.e164,place:"footer",icon:(0,t.jsx)(K.f,{}),dataTestId:"footer-contact-phone",children:M.phone.international})}),(0,t.jsx)($,{children:(0,t.jsx)(L.f,{kind:"map",value:`${M.address.name}, ${(0,I.W)(M.address)}`,geo:M.address.geo,place:"footer",icon:(0,t.jsx)(B.f,{}),dataTestId:"footer-contact-address",children:(0,I.W)(M.address)})})]})]})})]}),(0,t.jsx)(v.f,{children:(0,t.jsx)(j.f,{xs:12,children:(0,t.jsxs)(c,{children:[(0,t.jsx)(f,{"data-testid":"footer-copyright",children:"© plastship GmbH"}),(0,t.jsxs)(h,{"data-testid":"footer-meta","data-count":U.length,children:[U.map(e=>(0,t.jsx)(p,{href:e.href,"data-testid":`footer-meta-${e.href.replace(/^\//,"")}`,children:l(e.labelKey)},e.href)),(0,t.jsx)(m,{type:"button",onClick:S.e,"data-testid":"footer-cookie-settings",children:l("footer.cookieSettings",{defaultValue:"Cookie-Einstellungen"})})]})]})})})]})}],538915);var W=e.i(271645),z=e.i(247902),D=e.i(825969),P=e.i(499911);e.i(657782);var E=e.i(229132);e.i(730026);var O=e.i(262076),q=e.i(184914),Y=e.i(157067),V=e.i(885895),G=e.i(693830),J=e.i(949108),Z=e.i(49958),Q=e.i(726029);let X=(0,W.lazy)(()=>e.A(767483));e.s(["f",0,()=>{let e=(0,J.f)(),{status:a}=(0,Z.useSession)(),i=(0,G.g)(),{isLeftSidebarOpen:l,closeLeftSidebar:o}=(0,Y.i)(),{language:n}=(0,V.N)(),{tr:r}=(0,k.f)(n);return e?(0,t.jsx)(q.f,{isOpen:l,onClose:o,mode:"guest",maxWidthPx:Q.F-1,barHeightPx:Q.W,footerAction:(0,t.jsx)(z.f,{href:"/login",modifier:D.j.PRIMARY,icon:(0,t.jsx)(P.f,{}),iconAlign:D.W.RIGHT,dataTestId:"mobile-menu-item-login",children:r("header.login.label",{defaultValue:"Login"})}),children:(0,t.jsx)(O.f,{"data-testid":"mobile-menu-section-public",children:(0,t.jsx)(E.f,{variant:"stacked",dataTestId:"mobile-menu-item-public"})})}):"authenticated"===a&&i?(0,t.jsx)(W.Suspense,{fallback:null,children:(0,t.jsx)(X,{barHeightPx:Q.W})}):null}],226129),e.s([],600639),e.s(["p",0,{top:{placement:"inner",color:"white",depth:"section"}},"q",0,"navy","e",0,function(e){return e&&"white"!==e?{edges:{top:{placement:"inner",color:e}},flush:!0}:{edges:void 0,flush:!1}}],546843)},584391,e=>{var t=e.i(843476),a=e.i(997053),i=e.i(726029);let l=a.U.div.withConfig({displayName:"Default.styles__Root",componentId:"sc-6c8f238f-0"})`
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
`;var n=e.i(197754),r=e.i(538915);e.i(600639);var s=e.i(226129),d=e.i(729950),c=e.i(546843);e.s(["Default",0,e=>{let{children:a,inverted:i,paddingTop:f=!0,footerEdge:h}=e,m=(0,c.e)(h);return(0,d.H)()?(0,t.jsx)(t.Fragment,{children:a}):(0,t.jsxs)(l,{className:e.className,"data-testid":"default-root",children:[(0,t.jsx)(n.f,{navigation:!1,inverted:i,site:!0}),(0,t.jsx)(s.f,{}),(0,t.jsx)(o,{$paddingTop:f,$flushFooter:m.flush,children:a}),(0,t.jsx)(r.f,{inverted:i,edges:m.edges})]})}],584391)},33180,e=>{let t=e.i(584391).Default;e.s(["f",0,t])},729950,e=>{var t=e.i(271645);let a=(0,t.createContext)(null);e.s(["R",0,a,"H",0,function(){return(0,t.useContext)(a)}])},816017,217997,e=>{var t=e.i(843476);e.i(507924);var a=e.i(891567);a.Y.name,a.h.central.international,a._.info,a.Y;let i=String.fromCharCode(8232),l=String.fromCharCode(8233);e.s(["f",0,function({data:e}){return(0,t.jsx)("script",{type:"application/ld+json","data-testid":"structured-data",dangerouslySetInnerHTML:{__html:JSON.stringify(e).replace(/</g,"\\u003c").replace(/>/g,"\\u003e").replace(/&/g,"\\u0026").split(i).join("\\u2028").split(l).join("\\u2029")}})}],217997),e.s([],816017)},891567,e=>{let t={name:"plastship GmbH",street:"Auf der Lind 10",postalCode:"65529",locality:"Waldems",region:"Hessen",countryCode:"DE",geo:{lat:50.248828,lon:8.309024}};e.s(["Y",0,t,"_",0,{info:"info@plastship.com",team:"team@plastship.com"},"h",0,{central:{e164:"+4961265898010",national:"06126 58980-10",international:"+49 6126 58980-10"}},"F",0,"contact_click","W",0,function(e=t){return`${e.street}, ${e.postalCode} ${e.locality}`}])},974924,e=>{let t=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;e.s(["d",0,20,"x",0,function(e){return"string"==typeof e&&t.test(e)},"W",0,function(e){return e.trim().toLowerCase()}])},635647,e=>{var t=e.i(974924),a=e.i(891567),i=e.i(854101);let l=/^\+?[\d\s()./–-]+$/,o=e=>`${e.lat},${e.lon}`,n=e=>e.replace(/\s+/g," ").trim(),r=e=>Number(e.toFixed(6));function s(e){return!!e&&Number.isFinite(e.lat)&&Number.isFinite(e.lon)&&90>=Math.abs(e.lat)&&180>=Math.abs(e.lon)}e.s(["a",0,function(e){let t=n(e??"").toLowerCase();if(!t)return;let{street:i,postalCode:l}=a.Y;return t.includes(i.toLowerCase())&&t.includes(l)?{...a.Y.geo}:void 0},"c",0,function(e,a){let i="string"==typeof e?e.trim():"";if(!(0,t.x)(i))return null;let l=a?.trim();return l?`mailto:${i}?subject=${encodeURIComponent(l)}`:`mailto:${i}`},"n",0,function(e,t){if(!e)return null;let a=n(e.query),i=s(e.geo)?e.geo:void 0;if(!a&&!i)return null;if("string"==typeof t&&/iPhone|iPad|iPod|Macintosh/.test(t)){let e,t;return e=n(a),t=[],e&&t.push(`q=${encodeURIComponent(e)}`),i&&t.push(`ll=${o(i)}`),`https://maps.apple.com/?${t.join("&")}`}if("string"==typeof t&&/Android/i.test(t)){let e;return e=i?o(i):"0,0",`geo:${e}?q=${encodeURIComponent(n(a))}`}return null},"W",0,function(e,t){if(!e)return null;let a=n(e.query).slice(0,300),l=s(e.geo)?e.geo:void 0;if(!a&&!l)return null;let o=[];l&&o.push(`lat=${r(l.lat)}`,`lon=${r(l.lon)}`),a&&o.push(`q=${encodeURIComponent(a)}`);let d=`/map/?${o.join("&")}`;return t?(0,i.N)(d,t):d},"R",0,function(e){let t=n(e.get("q")??"").slice(0,300),a=e.get("lat"),i=e.get("lon"),l=null!==a&&""!==a.trim()?Number(a):0/0,o=null!==i&&""!==i.trim()?Number(i):0/0,d=s({lat:l,lon:o})?{lat:r(l),lon:r(o)}:void 0;return t||d?d?{query:t,geo:d}:{query:t}:null},"A",0,function(e){let t=function(e){let t;if("string"!=typeof e)return null;let a=e.trim();if(!a||!l.test(a))return null;let i=a.replace(/^(\+\d{1,3})\s*\(0\)/,"$1"),o=i.replace(/\D/g,"");if(i.startsWith("+"))t=`+${o}`;else if(o.startsWith("00"))t=`+${o.slice(2)}`;else{if(!o.startsWith("0"))return null;t=`+49${o.slice(1)}`}let n=t.length-1;return n<6||n>15||t.startsWith("+0")?null:t}(e);return t?`tel:${t}`:null}])}])})();