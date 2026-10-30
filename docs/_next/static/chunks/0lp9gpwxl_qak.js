(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,552830,692504,e=>{var t=e.i(843476),a=e.i(997053);let i=a.U.button.withConfig({displayName:"Burger.styles__Root",componentId:"sc-b55b8f76-0"})`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  gap: 5px;
  width: ${48}px;
  height: ${48}px;
  padding: 0;
  border: none;
  border-radius: 9999px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  background: linear-gradient(
    to bottom,
    ${({theme:e})=>e.palette.site.green},
    ${({theme:e})=>e.palette.site.greenDark}
  );

  &:hover,
  &:focus-visible {
    background: linear-gradient(
      to top,
      ${({theme:e})=>e.palette.site.green},
      ${({theme:e})=>e.palette.site.greenDark}
    );
  }

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.palette.site.text};
    outline-offset: 2px;
  }
`,o=a.U.span.withConfig({displayName:"Burger.styles__Line",componentId:"sc-b55b8f76-1"})`
  display: block;
  width: 18px;
  height: 2px;
  /* Fest weiß auf dem grünen Grund — invertiert im Dark Mode nicht */
  background-color: ${({theme:e})=>e.palette.text.onAccent};
  border-radius: 2px;
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }

  ${e=>e.$isOpen&&"top"===e.$position&&a.m`
      transform: translateY(7px) rotate(45deg);
    `}

  ${e=>e.$isOpen&&"middle"===e.$position&&a.m`
      opacity: 0;
    `}

  ${e=>e.$isOpen&&"bottom"===e.$position&&a.m`
      transform: translateY(-7px) rotate(-45deg);
    `}
`;e.i(821194);var n=e.i(99222);e.s(["f",0,e=>{let{isOpen:a=!1,onClick:r,controlsId:s,trigger:l=!0,autoFocusMarker:d=!1,dataTestId:p="mobile-menu-open"}=e,{tr:h}=(0,n.f)();return(0,t.jsxs)(i,{type:"button",className:e.className,"data-testid":p,"data-mobile-menu-trigger":l?"":void 0,"data-autofocus":d?"":void 0,"data-open":a?"true":"false",onClick:r,$isOpen:a,"aria-expanded":l?a:void 0,"aria-controls":l?s:void 0,"aria-haspopup":l?"dialog":void 0,"aria-label":a?h("header.menu.close",{defaultValue:"Close menu"}):h("header.menu.open",{defaultValue:"Open menu"}),children:[(0,t.jsx)(o,{$isOpen:a,$position:"top"}),(0,t.jsx)(o,{$isOpen:a,$position:"middle"}),(0,t.jsx)(o,{$isOpen:a,$position:"bottom"})]})}],552830),e.s(["h",0,1024,"x",0,"mobile_menu","X",0,"mobile-menu"],692504)},710788,240029,626645,599858,363451,e=>{var t=e.i(843476),a=e.i(271645);e.i(311046);var i=e.i(549560),o=e.i(499881),n=e.i(355351);let r=(e,t,i=n.E)=>{let[o,r]=(0,a.useState)({width:0,height:0,columns:t});return(0,a.useEffect)(()=>{let t=e.current;if(!t)return;let a=()=>{let e=t.getBoundingClientRect(),a=Math.max(t.offsetWidth,Math.ceil(e.width-.01)),o=Math.max(t.offsetHeight,Math.ceil(e.height-.01));a<=0||o<=0||r(e=>e.width===a&&e.height===o?e:{width:a,height:o,columns:(0,n.L)(a,i)})};if(a(),"u"<typeof ResizeObserver)return;let o=new ResizeObserver(a);return o.observe(t),()=>o.disconnect()},[e,i]),o};e.s(["f",0,r],240029);var s=e.i(380153),l=e.i(345712),d=e.i(997053),p=e.i(547905);let h=d.U.div.withConfig({displayName:"HexEdge.styles__Root",componentId:"sc-9795135c-0"})`
  position: absolute;
  inset: 0;
  z-index: ${({$zIndex:e})=>e};
  pointer-events: none;
  contain: layout style;
`,c=d.U.svg.withConfig({displayName:"HexEdge.styles__Canvas",componentId:"sc-9795135c-1"})`
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
    ${p.t}
  }

  &[data-paused='true'] [data-partial='true'] {
    animation-play-state: paused;
  }
`,u=d.U.svg.withConfig({displayName:"HexEdge.styles__FallbackStrip",componentId:"sc-9795135c-2"})`
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

  @media (max-width: ${l.p.tabletportrait}px) {
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
    ${p.t}
  }
`,f=e=>!!e&&e.startsWith("url("),g=d.U.g.withConfig({displayName:"HexEdge.styles__TileGroup",componentId:"sc-9795135c-3"})`
  color: ${({theme:e,$color:t,$fill:a})=>(a&&!f(a)?a:void 0)??("mask"===t?"#ffffff":"onAccent"===t?e.palette.text.onAccent:"tint"===t||"navy"===t?(0,p.m)(e,t):e.palette.default[t])};
  /* Mit eigener Füllfarbe folgt die Gruppe ihrer Quelle im selben Frame, ohne Nachlauf (#1497) */
  transition: ${({$fill:e})=>e?"none":"color 0.2s ease"};
  /* Nachtrag #2186: Verlauf (Seitenkopf-Außenrand) direkt als Füllung */
  fill: ${({$fill:e})=>f(e)?e:"currentColor"};
  stroke: none;
  shape-rendering: crispEdges;

  /* Mit eigener Füllfarbe geht der Rand nahtlos in die Fläche des Hosts über:
     volle Kacheln schließen die Rasterfugen mit einer Kontur in ihrer Farbe (#1497) */
  ${({$fill:e})=>e&&d.m`
      [data-full='true'] {
        stroke: ${f(e)?e:"currentColor"};
        stroke-width: 1px;
      }
    `}
`;e.s(["$",0,c,"o",0,u,"F",0,h,"z",0,g],626645);var m=e.i(859146),x=e.i(650529);let y=([e,t])=>`${Math.round(4*e)}:${Math.round(4*t)}`,w=({tiles:e,color:i,offsetX:o=0,offsetY:r=0,clipPath:s,fill:l,dataTestId:d})=>{let p=(0,a.useMemo)(()=>((e,t,a)=>{let i=new Map;for(let o of e){if(o.alpha<.995)continue;let e=i.get(o.alpha)??{alpha:o.alpha,parts:[]};e.parts.push((0,n.H)(o,t,a)),i.set(o.alpha,e)}return[...i.values()].map(e=>({alpha:e.alpha,count:e.parts.length,d:e.parts.join(" ")}))})(e,o,r),[e,o,r]),h=(0,a.useMemo)(()=>e.filter(e=>(0,x.v)(e.alpha)),[e]),c=(0,a.useMemo)(()=>((e,t=0,a=0)=>{let i=new Set;for(let o of e)if(!(o.alpha<.995))for(let e of(0,m.M)((0,n.F)(o,t,a)))i.add(y(e));return i})(e,o,r),[e,o,r]);return(0,t.jsxs)(g,{$color:i,$fill:l,clipPath:s,"data-testid":d,"data-count":e.length,"data-elements":p.length+h.length,"data-fill":l,children:[p.map(e=>(0,t.jsx)("path",{d:e.d,"data-full":"true","data-count":e.count,"data-alpha":e.alpha,fillRule:"nonzero",style:{"--alpha":String(e.alpha)}},`full-${e.alpha}`)),h.map(e=>{let a=(0,x.g)(e),i=((e,t,a=0,i=0)=>(0,m.M)((0,n.F)(e,a,i)).map(e=>t.has(y(e))))(e,c,o,r),s=i.filter(Boolean).length;return(0,t.jsx)("path",{d:(0,m.e)((0,n.F)(e,o,r),(0,m.C)(e.size),i),"data-rounded":"true","data-sharp":s>0?s:void 0,"data-partial":"true",style:{"--alpha":String(e.alpha),"--shimmer-period":`${a.period}ms`,"--shimmer-offset":`${a.offset}ms`}},e.key)})]})};e.s(["f",0,w],599858);let $=e=>{let t=new Map;for(let a of e){let e=`${a.placement}-${a.color}`,i=t.get(e)??{key:e,placement:a.placement,color:a.color,cells:[]};i.cells.push(a),t.set(e,i)}return[...t.values()]};e.s(["f",0,({edges:e,columns:n,zIndex:d=-1,fill:p,dataTestId:f="hex-edge",className:m})=>{let x=(0,a.useRef)(null),y=r(x,40),b=n??y.columns,v=(e=>{let[t,i]=(0,a.useState)(!0);return(0,a.useEffect)(()=>{let t=e.current;if(!t||"u"<typeof IntersectionObserver)return;let a=new IntersectionObserver(([e])=>i(e.isIntersecting),{rootMargin:"200px"});return a.observe(t),()=>a.disconnect()},[e]),t})(x),k=(0,s.f)(`(max-width: ${l.p.tabletportrait}px)`),C=(0,a.useId)().replace(/:/g,""),j=k?(0,o.Q)(e):e,_=JSON.stringify(j),N=(0,a.useMemo)(()=>(0,o.T)(y.width,y.height,b,JSON.parse(_)),[y.width,y.height,b,_]),L=(0,a.useMemo)(()=>$(N.cells),[N]),{width:M,height:I,offsetX:H,offsetY:R}=N,S=JSON.stringify(e),U=(0,a.useMemo)(()=>y.width>0?[]:(0,i.r)(JSON.parse(S)),[y.width,S]);return(0,t.jsxs)(h,{ref:x,className:m,$zIndex:d,"aria-hidden":"true","data-testid":f,"data-edges":(0,o.a)(j),"data-tiles":N.cells.length,"data-measured":y.width>0?"true":"false",children:[U.map(e=>{let{x:a,y:i,width:o,height:n}=e.viewBox;return(0,t.jsx)(u,{viewBox:`${a} ${i} ${o} ${n}`,preserveAspectRatio:"xMidYMid slice",focusable:"false","data-side":e.side,"data-placement":e.placement,"data-testid":`${f}-fallback-${e.key}`,$depth:e.depth,children:$(e.cells).map(a=>(0,t.jsx)(w,{tiles:a.cells,color:a.color,fill:p?.[a.placement],dataTestId:`${f}-fallback-${e.key}-${a.color}`},a.key))},e.key)}),N.cells.length>0&&(0,t.jsxs)(c,{focusable:"false","data-testid":`${f}-svg`,"data-paused":v?"false":"true","data-width":M,"data-height":I,style:{"--edge-x":`${-H}px`,"--edge-y":`${-R}px`,"--edge-w":`${M}px`,"--edge-h":`${I}px`},children:[(0,t.jsxs)("defs",{children:[(0,t.jsx)("clipPath",{id:`${C}-inner`,children:(0,t.jsx)("rect",{x:H,y:R,width:y.width,height:y.height})}),(0,t.jsx)("clipPath",{id:`${C}-outer`,children:(0,t.jsx)("path",{clipRule:"evenodd",d:`M0 0H${M}V${I}H0Z M${H} ${R}v${y.height}h${y.width}v${-y.height}Z`})})]}),Object.keys(j).filter(e=>j[e]?.placement==="inner").map(e=>{let a=j[e];if(!a)return null;let i=((e,t,a,i,o)=>{switch(e){case"top":return{x:t,y:a-1,width:i,height:3};case"bottom":return{x:t,y:a+o-2,width:i,height:3};case"left":return{x:t-1,y:a,width:3,height:o};default:return{x:t+i-2,y:a,width:3,height:o}}})(e,H,R,y.width,y.height);return(0,t.jsx)(g,{$color:a.color,$fill:p?.inner,"data-testid":`${f}-seam-${e}`,children:(0,t.jsx)("rect",{...i})},`seam-${e}`)}),L.map(e=>(0,t.jsx)(w,{tiles:e.cells,color:e.color,offsetX:H,offsetY:R,clipPath:`url(#${C}-${e.placement})`,fill:p?.[e.placement],dataTestId:`${f}-${e.placement}-${e.color}`},e.key))]})]})}],363451),e.s([],710788)},499911,436596,e=>{var t=e.i(843476),a=e.i(997053);let i=a.U.svg.withConfig({displayName:"IconArrowRight.styles__Root",componentId:"sc-a9169b31-0"})``,o=e=>(0,t.jsx)(i,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",className:e.className,"data-testid":"icon-arrow-right-root",children:(0,t.jsx)("path",{d:"M13.3333 5L20 12M20 12L13.3333 19M20 12L4 12",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})});e.s(["f",0,o],436596),e.s(["f",0,o],499911)},963645,e=>{var t=e.i(843476),a=e.i(997053);let i=a.U.svg.withConfig({displayName:"IconEmail.styles__Root",componentId:"sc-8da3560d-0"})``;e.s(["f",0,e=>(0,t.jsx)(i,{className:e.className,"data-testid":"icon-email-root",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("path",{d:"M4.6875 6.75L11.3596 11.5403C11.7449 11.8168 12.2551 11.8168 12.6404 11.5403L19.3125 6.75M5.25 19H18.75C19.9926 19 21 17.9553 21 16.6667V7.33333C21 6.04467 19.9926 5 18.75 5H5.25C4.00736 5 3 6.04467 3 7.33333V16.6667C3 17.9553 4.00736 19 5.25 19Z",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})],963645)},317573,e=>{let t=e.i(963645).f;e.s(["f",0,t])},215063,e=>{var t=e.i(843476),a=e.i(997053);let i=a.U.svg.withConfig({displayName:"IconPhone.styles__Root",componentId:"sc-35bded17-0"})``;e.s(["f",0,e=>(0,t.jsx)(i,{className:e.className,"data-testid":"icon-phone-root",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("path",{d:"M16.094 2.71582L21.5979 2.71582M21.5979 2.71582L21.6004 7.57935M21.5979 2.71582L15.3449 8.96885M20.4369 19.0225C20.4369 19.0225 19.2449 20.1932 18.9528 20.5364C18.477 21.0442 17.9164 21.284 17.1814 21.284C17.1108 21.284 17.0354 21.284 16.9647 21.2793C15.5655 21.1899 14.2652 20.6445 13.29 20.1791C10.6234 18.8908 8.28192 17.0619 6.33619 14.744C4.72966 12.8117 3.6555 11.0251 2.94411 9.10682C2.50596 7.93613 2.34578 7.02402 2.41645 6.16362C2.46356 5.61354 2.67557 5.15748 3.0666 4.76725L4.67313 3.16401C4.90398 2.94773 5.14896 2.83019 5.38923 2.83019C5.68604 2.83019 5.92631 3.00885 6.07707 3.1593C6.08178 3.16401 6.08649 3.16871 6.0912 3.17341C6.37859 3.4414 6.65184 3.71879 6.93922 4.01499C7.08527 4.16545 7.23603 4.3159 7.38679 4.47105L8.67295 5.75459C9.17234 6.25295 9.17234 6.71371 8.67295 7.21208C8.53633 7.34843 8.40441 7.48477 8.26779 7.61642C7.87204 8.02075 8.18292 7.71051 7.77305 8.07723C7.76363 8.08664 7.7542 8.09134 7.74949 8.10074C7.34433 8.50508 7.41971 8.90001 7.50451 9.168C7.50922 9.18211 7.51393 9.19621 7.51864 9.21032C7.85314 10.019 8.32426 10.7807 9.04037 11.6881L9.04508 11.6928C10.3454 13.2913 11.7163 14.5372 13.2286 15.4917C13.4218 15.6139 13.6197 15.7126 13.8081 15.8067C13.9777 15.8913 14.1379 15.9712 14.2745 16.0558C14.2934 16.0652 14.3122 16.0793 14.3311 16.0888C14.4912 16.1687 14.642 16.2063 14.7975 16.2063C15.1885 16.2063 15.4335 15.9618 15.5136 15.8819L16.437 14.9603C16.5972 14.8005 16.8516 14.6077 17.1484 14.6077C17.4405 14.6077 17.6808 14.7911 17.8269 14.9509C17.8316 14.9556 17.8316 14.9556 17.8363 14.9603L20.4322 17.5509C20.9174 18.0305 20.4369 19.0225 20.4369 19.0225Z",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})],215063)},858145,e=>{var t=e.i(997053);e.i(315481);var a=e.i(10003),i=e.i(351754),o=e.i(547905),n=e.i(552830),r=e.i(726029);let s=`@media only screen and (max-width: ${r.F-1}px)`,l=t.U.header.withConfig({displayName:"Header.styles__Root",componentId:"sc-8494ddd5-0"})`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  height: 56px;
  position: relative;
  z-index: 200;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.08);
  label {
    display: none;
  }

  @media only screen and (max-width: 1024px) {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    min-height: 56px;
    background: ${e=>e.theme.palette.default.white};
    will-change: transform, opacity;
  }

  /* #1211: Site-Header (öffentliche Seiten) wie auf plastship.com — 80 px,
     sticky auf jeder Breite, shadow-xl. Doppelklasse gegen die mobile Regel
     oben; das Overlay darunter setzt fixed darüber. */
  ${({$site:e,theme:a})=>e&&t.m`
      && {
        position: sticky;
        top: 0;
        height: ${r.W}px;
        min-height: ${r.W}px;
        gap: 16px;
        padding: 0 24px;
        background: ${a.palette.default.white};
        box-shadow: ${a.palette.site.shadowHover};
        will-change: auto;
      }

      ${r.X} {
        && {
          gap: 8px;
        }
      }
    `}

  /* Overlay (Frontpage): fest oben auf jeder Breite, der Inhalt läuft darunter.
     Doppelklasse, damit es die mobile Regel oben sicher übertrifft. */
  ${({$overlay:e,theme:a})=>e&&t.m`
      && {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        background: ${a.palette.default.white};
        transition:
          background-color 250ms ease,
          box-shadow 250ms ease;
      }
    `}

  /* Über dem Seiten-Hero: ohne Grund und Schatten, das Bild läuft durch */
  ${({$transparent:e})=>e&&t.m`
      && {
        background: transparent;
        box-shadow: none;
      }
    `}

  /* #1497, #2175: durchsichtig über einem Block die Schrift nach dessen Farbe
     (headerTone) — hell oder dunkel, in beiden Themes. Menü, Sprachwahl und
     Schalter lesen --header-fg nur an der obersten Ebene; Flyouts behalten
     ihre Farben. Mit Grund (gescrollt) ohne Variable: Theme-Default. */
  ${({$fg:e})=>e&&t.m`
      --header-fg: ${e};
    `}
`,d=t.U.nav.withConfig({displayName:"Header.styles__Nav",componentId:"sc-8494ddd5-1"})`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
  visibility: ${e=>e.$isLoading?"hidden":"visible"};

  @media only screen and (max-width: 1024px) {
    display: none;
  }
`,p=t.U.div.withConfig({displayName:"Header.styles__BurgerWrapper",componentId:"sc-8494ddd5-2"})`
  display: none;

  @media only screen and (max-width: 1024px) {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;t.U.button.withConfig({displayName:"Header.styles__SearchButton",componentId:"sc-8494ddd5-3"})`
  display: none;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  -webkit-tap-highlight-color: transparent;

  svg {
    width: 22px;
    height: 22px;

    path,
    rect,
    line,
    circle,
    polyline,
    polygon {
      stroke: ${e=>e.theme.palette.default.greyDark};
    }
  }

  &:active {
    opacity: 0.6;
  }
`;let h=t.U.div.withConfig({displayName:"Header.styles__Controls",componentId:"sc-8494ddd5-4"})`
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;
  flex: 1;
  min-width: 200px;
  max-width: 500px;
  margin: 0 1rem;
  visibility: ${e=>e.$isLoading?"hidden":"visible"};

  @media only screen and (max-width: 767px) {
    display: none;
  }
`,c=(0,o.F)(36),u=(0,o.F)(32,(0,o.X)(36,2)),f=(0,o.F)(30,(0,o.X)(36,3)),g=t.U.div.withConfig({displayName:"Header.styles__AvatarContainer",componentId:"sc-8494ddd5-5"})`
  position: relative;
  width: ${36}px;
  height: ${36}px;
  padding-bottom: 8px;
  margin-bottom: -8px;
`,m=t.U.div.withConfig({displayName:"Header.styles__AvatarWrapper",componentId:"sc-8494ddd5-6"})`
  cursor: pointer;
  position: relative;
  width: ${36}px;
  height: ${36}px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.15s ease-in-out;

  /* Hexagon outline - outer shape */
  &::before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: ${36}px;
    height: ${36}px;
    clip-path: ${c};
    background: ${e=>e.theme.palette.default.primary};
    opacity: ${e=>e.$isActive?1:.6};
    z-index: 0;
    transition: 0.15s ease-in-out;
  }

  /* Hexagon outline - inner cutout (creates outline effect) */
  &::after {
    position: absolute;
    content: '';
    top: ${2}px;
    left: ${2}px;
    width: ${32}px;
    height: ${32}px;
    clip-path: ${u};
    background: ${e=>e.$isActive?e.theme.palette.default.primary:e.theme.palette.default.white};
    opacity: ${e=>e.$isActive?.15:1};
    z-index: 0;
    transition: 0.15s ease-in-out;
  }

  &:hover {
    &::before {
      opacity: 1;
    }
    &::after {
      background: ${e=>e.theme.palette.default.primary};
      opacity: 0.15;
    }
  }
`,x=t.U.div.withConfig({displayName:"Header.styles__AvatarImage",componentId:"sc-8494ddd5-7"})`
  position: relative;
  width: ${30}px;
  height: ${30}px;
  clip-path: ${f};
  overflow: hidden;
  z-index: 1;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,y=t.U.div.withConfig({displayName:"Header.styles__AvatarFallback",componentId:"sc-8494ddd5-8"})`
  width: ${30}px;
  height: ${30}px;
  display: flex;
  align-items: center;
  justify-content: center;
  clip-path: ${f};
  background-color: ${e=>e.theme.palette.default.primary};
  color: ${e=>e.theme.palette.default.white};
  z-index: 1;

  svg {
    width: 18px;
    height: 18px;

    path,
    rect,
    line,
    circle,
    polyline,
    polygon {
      stroke: ${e=>e.theme.palette.default.white};
    }
  }
`,w=t.U.div.withConfig({displayName:"Header.styles__Dropdown",componentId:"sc-8494ddd5-9"})`
  position: absolute;
  top: 100%;
  right: 0;
  min-width: 180px;
  padding: 8px;
  background: ${({theme:e})=>e.palette.default.white};
  border: 1px solid ${({theme:e})=>e.palette.border.default};
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.14);
  z-index: ${i.f.dropdown};
`,$=t.m`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  box-sizing: border-box;
  padding: 9px 12px;
  border-radius: 6px;
  font-family: ${({theme:e})=>e.font.secondaryFamily};
  font-size: 13px;
  cursor: pointer;
  transition: background 0.15s ease;
`,b=t.U.div.withConfig({displayName:"Header.styles__DropdownHeader",componentId:"sc-8494ddd5-10"})`
  ${$}
  color: ${({theme:e})=>e.palette.text.primary};
  font-weight: 600;

  &:hover {
    background: ${({theme:e})=>e.palette.surface.subtle};
  }
`,v=t.U.div.withConfig({displayName:"Header.styles__DropdownItem",componentId:"sc-8494ddd5-11"})`
  ${$}
  color: ${({theme:e})=>e.palette.status.error.text};
  font-weight: 500;

  svg {
    width: 16px;
    height: 16px;
  }

  path,
  line,
  polyline {
    stroke: currentColor;
  }

  &:hover {
    background: ${({theme:e})=>e.palette.status.error.bg};
  }
`,k=t.U.div.withConfig({displayName:"Header.styles__NotificationBellWrapper",componentId:"sc-8494ddd5-12"})`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`,C=(0,t.U)(a.NavLink).withConfig({displayName:"Header.styles__LogoLink",componentId:"sc-8494ddd5-13"})`
  display: inline-flex;
  flex-shrink: 0;
  text-decoration: none;
  color: inherit;

  /* #1211: Logo wie auf plastship.com 166 × 40 */
  ${({$site:e})=>e&&t.m`
      svg {
        display: block;
        width: 166px;
        height: auto;
      }

      ${r.X} {
        svg {
          width: 133px;
        }
      }
    `}
`,j=t.U.div.withConfig({displayName:"Header.styles__GuestNavBar",componentId:"sc-8494ddd5-14"})`
  display: flex;
  flex: 1;
  justify-content: center;
  min-width: 0;

  ${s} {
    display: none;
  }
`,_=t.U.div.withConfig({displayName:"Header.styles__GuestActions",componentId:"sc-8494ddd5-15"})`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;

  ${r.X} {
    gap: 4px;
  }

  ${s} {
    display: none;
  }
`,N=(0,t.U)(n.f).withConfig({displayName:"Header.styles__GuestBurger",componentId:"sc-8494ddd5-16"})`
  /* Doppelklasse: schlägt display der Burger-Wurzel sicher */
  && {
    display: none;
  }

  ${s} {
    && {
      display: flex;
    }
  }
`;e.s(["E",0,g,"b",0,y,"Z",0,x,"N",0,m,"R",0,p,"P",0,h,"x",0,w,"t",0,b,"z",0,v,"v",0,_,"o",0,N,"T",0,j,"_",0,C,"w",0,d,"y",0,k,"F",0,l])},197754,949108,768227,e=>{var t=e.i(843476),a=e.i(271645),i=e.i(997053);e.i(821194);var o=e.i(99222),n=e.i(885895),r=e.i(713347),s=e.i(157067),l=e.i(693830),d=e.i(49958);function p(){let{data:e,status:t}=(0,d.useSession)(),a=(0,l.g)();return"unauthenticated"===t||"loading"===t&&!e&&!a}e.s(["f",0,p],949108);var h=e.i(375519),c=e.i(508650),u=e.i(858145),f=e.i(136717);let g=["primary","secondary","white","greyLight","tint","navy"],m="#212529",x=(e,t)=>"dark"===e?t.text.onAccent:m,y=e=>e===c.ThemeMode.DARK?"dark":"light",w=(e,t)=>(0,f.n)(x("dark",t),e)>(0,f.n)(m,e)?"dark":"light";e.s(["$",0,x,"y",0,y,"l",0,(e,t,a)=>e?w("tint"===e?a.site.tint:"navy"===e?a.site.navy:a.default[e],a):y(t),"z",0,w,"H",0,e=>"string"==typeof e&&g.includes(e),"P",0,e=>"light"===e||"dark"===e,"q",0,e=>"string"==typeof e&&/^#(?:[0-9a-f]{3}|[0-9a-f]{6})$/i.test(e)],768227);var $=e.i(424734),b=e.i(692504);e.i(558629);var v=e.i(845183);let k=i.U.svg.withConfig({displayName:"IconMoon.styles__Root",componentId:"sc-904208f6-0"})``,C=e=>(0,t.jsx)(k,{className:e.className,"data-testid":"icon-moon-root",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:(0,t.jsx)("path",{d:"M3 11.9232C3 17.4885 7.5372 22 13.1341 22C16.9486 22 20.2708 19.9045 22 16.8081C21.4246 16.909 20.8325 16.9616 20.228 16.9616C14.6311 16.9616 10.0939 12.4501 10.0939 6.88486C10.0939 5.11247 10.5541 3.44695 11.3621 2C6.61007 2.83329 3 6.95906 3 11.9232Z",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"square",fill:"none",strokeMiterlimit:"10",strokeLinejoin:"bevel"})}),j=i.U.svg.withConfig({displayName:"IconSun.styles__Root",componentId:"sc-c5b43764-0"})``,_=e=>(0,t.jsxs)(j,{className:e.className,"data-testid":"icon-sun-root",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:[(0,t.jsx)("path",{d:"M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"square",fill:"none",strokeMiterlimit:"10"}),(0,t.jsx)("path",{d:"M12 1V3",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"square",fill:"none"}),(0,t.jsx)("path",{d:"M12 21V23",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"square",fill:"none"}),(0,t.jsx)("path",{d:"M23.005 11.995L21.005 11.995",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"square",fill:"none"}),(0,t.jsx)("path",{d:"M3.005 11.995L1.005 11.995",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"square",fill:"none"}),(0,t.jsx)("path",{d:"M4.2233 4.22534L5.63751 5.63956",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"square",fill:"none"}),(0,t.jsx)("path",{d:"M18.3654 18.3676L19.7796 19.7818",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"square",fill:"none"}),(0,t.jsx)("path",{d:"M19.7796 4.21826L18.3654 5.63248",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"square",fill:"none"}),(0,t.jsx)("path",{d:"M5.63751 18.3605L4.2233 19.7747",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"square",fill:"none"})]}),N=i.U.button.withConfig({displayName:"ThemeToggleButton.styles__Root",componentId:"sc-bd651b21-0"})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  padding: 0;
  margin: 0;
  border: none;
  border-radius: ${({theme:e})=>e.borderRadius.icon};
  background: transparent;
  color: ${({theme:e})=>`var(--header-fg, ${e.palette.text.secondary})`};
  cursor: pointer;
  transition:
    background 0.15s ease,
    color 0.15s ease;

  &:hover,
  &:focus-visible {
    background: ${({theme:e})=>e.palette.surface.subtle};
    color: ${({theme:e})=>e.palette.default.primary};
  }

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.palette.default.primary};
    outline-offset: 2px;
  }

  /* #2175: Standardgröße unserer Icons */
  svg {
    width: 24px;
    height: 24px;
  }
`,L=i.U.span.withConfig({displayName:"ThemeToggleButton.styles__IconSlot",componentId:"sc-bd651b21-1"})`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &[data-icon='sun'] {
    display: none;
  }

  :root[data-theme='dark'] &[data-icon='sun'] {
    display: inline-flex;
  }

  :root[data-theme='dark'] &[data-icon='moon'] {
    display: none;
  }
`,M=({value:e,onChange:a,ariaLabel:i,title:o,dataTestId:n="theme-toggle-button",className:r})=>{let s=e===c.ThemeMode.DARK;return(0,t.jsxs)(N,{type:"button",role:"switch","aria-checked":s,"aria-label":i,title:o,className:r,"data-testid":n,"data-mode":e,onClick:()=>a(s?c.ThemeMode.LIGHT:c.ThemeMode.DARK),children:[(0,t.jsx)(L,{"data-icon":"moon","data-testid":`${n}-icon-moon`,children:(0,t.jsx)(C,{})}),(0,t.jsx)(L,{"data-icon":"sun","data-testid":`${n}-icon-sun`,children:(0,t.jsx)(_,{})})]})};e.i(657782);var I=e.i(229132),H=e.i(247902),R=e.i(499911),S=e.i(825969);let U=(0,a.lazy)(()=>e.A(460385)),T=(0,t.jsx)(u.P,{$isLoading:!0,"data-testid":"header-app-placeholder"}),A=(0,a.forwardRef)((e,d)=>{let{className:f,overlay:g=!1,transparent:m=!1,site:w=!1,tone:k="light"}=e,C=(0,a.useRef)(null),{themeMode:j,setThemeMode:_,language:N,setLanguage:L}=(0,n.N)(),A=(0,i.i)(),{tr:B}=(0,o.f)(N),{isLeftSidebarOpen:F,toggleLeftSidebar:z}=(0,s.i)(),O=(0,r.useLanguageSwitcherLinks)();(0,a.useEffect)(()=>{if(g||w)return;let e=window.scrollY,t=0;if(F){let e=C.current;e&&(t=0,e.style.transform="translateY(0)",e.style.opacity="1")}let a=()=>{if(F)return;let a=C.current;if(!a)return;let i=window.scrollY,o=i-e,n=a.offsetHeight,r=(t=Math.min(Math.max(t+o,0),n))/n;a.style.transform=`translateY(-${t}px)`,a.style.opacity=`${1-r}`,e=i};return window.addEventListener("scroll",a,{passive:!0}),()=>window.removeEventListener("scroll",a)},[F,g,w]);let{isAuthenticated:W,isSessionLoading:D}=(0,h.N)(),V=(0,l.g)()&&(W||!w&&D),E=p(),P=j===c.ThemeMode.DARK,q=g&&m&&!F,G=q?k:y(j);return(0,t.jsxs)(u.F,{className:f,ref:e=>{C.current=e,"function"==typeof d?d(e):d&&(d.current=e)},"data-testid":"header-root","data-overlay":g?"true":void 0,"data-transparent":g?q?"true":"false":void 0,"data-tone":g?G:void 0,"data-site":w?"true":void 0,"data-guest":E?"true":void 0,$overlay:g,$transparent:q,$fg:q?x(k,A.palette):void 0,$site:w,children:[(0,t.jsx)(u._,{href:W?"/dashboard":"/",$site:w,"aria-label":W?B("header.logo.dashboardAriaLabel",{defaultValue:"plastship – zum Dashboard"}):B("header.logo.ariaLabel",{defaultValue:"plastship – zur Startseite"}),"data-testid":"header-logo-link",children:(0,t.jsx)($.f,{inverted:q?"dark"===k:P})}),E&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(u.T,{children:(0,t.jsx)(I.f,{variant:"bar",dataTestId:"header-public-nav"})}),(0,t.jsxs)(u.v,{children:[(0,t.jsx)(v.a,{value:N,onChange:L,links:O,ariaLabel:B("header.language.ariaLabel",{defaultValue:"Sprache wählen"}),searchPlaceholder:B("header.language.searchPlaceholder",{defaultValue:"Sprache suchen…"}),noResultsText:B("header.language.noResults",{defaultValue:"Keine Sprache gefunden"}),dataTestId:"header-language-switcher"}),(0,t.jsx)(M,{value:j,onChange:_,ariaLabel:B("profile.themeMode",{defaultValue:"Darstellung"}),title:P?B("profile.theme.light",{defaultValue:"Hell"}):B("profile.theme.dark",{defaultValue:"Dunkel"}),dataTestId:"header-theme-toggle"}),(0,t.jsx)(H.f,{href:"/login",modifier:S.j.PRIMARY,icon:(0,t.jsx)(R.f,{}),iconAlign:S.W.RIGHT,dataTestId:"header-login",children:B("header.login.label",{defaultValue:"Login"})})]}),(0,t.jsx)(u.o,{isOpen:F,onClick:z,controlsId:b.X})]}),!E&&(V?(0,t.jsx)(a.Suspense,{fallback:T,children:(0,t.jsx)(U,{})}):T)]})});A.displayName="Header",e.s(["f",0,A],197754)},729950,e=>{var t=e.i(271645);let a=(0,t.createContext)(null);e.s(["R",0,a,"H",0,function(){return(0,t.useContext)(a)}])},375519,e=>{var t=e.i(49958);let a=(e,t)=>({isAuthenticated:"authenticated"===e||"loading"===e&&t,isSessionLoading:"loading"===e&&!t});e.s(["V",0,a,"N",0,function(){let{data:e,status:i}=(0,t.useSession)();return a(i,!!e)}])}])})();