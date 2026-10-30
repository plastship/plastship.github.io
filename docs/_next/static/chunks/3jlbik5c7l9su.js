(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,[411206,173972,e=>{var t=e.i(843476),a=e.i(271645),i=e.i(618566);e.i(821194);var n=e.i(99222),l=e.i(476999),o=e.i(14431),s=e.i(713347),r=e.i(635647),d=e.i(891567),c=e.i(997053);let h=c.m`
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
`,f=c.U.a.withConfig({displayName:"ContactLink.styles__Link",componentId:"sc-41592123-0"})`
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
`,u={tel:{key:"contactLink.aria.tel",fallback:"Anrufen: {{value}}"},mail:{key:"contactLink.aria.mail",fallback:"E-Mail schreiben an {{value}}"},map:{key:"contactLink.aria.map",fallback:"Auf der Karte zeigen: {{value}}"}};e.s(["f",0,({kind:e,value:c,place:h,geo:m,subject:g,icon:x,children:b,dataTestId:y,className:v})=>{let{tr:$}=(0,n.f)(),k=(0,i.usePathname)(),j="string"==typeof c?c.trim():"",w=(0,s.useSiteLocale)(),C="tel"===e?(0,r.A)(j):"mail"===e?(0,r.c)(j,g):(0,r.W)({query:j,geo:m},w),F=(0,a.useCallback)(()=>{(0,l.q)(k||"/",d.F,{kind:e,place:h}),o.v({category:"contact",message:d.F,data:{kind:e,place:h}})},[k,e,h]),N=y??`contact-link-${e}`,_=(0,t.jsxs)(t.Fragment,{children:[x,b??j]});if(!j)return null;if(!C)return(0,t.jsx)(p,{className:v,"data-testid":N,"data-kind":e,"data-linked":"false",children:_});let I=j.replace(/\s*\n\s*/g,", ");return(0,t.jsx)(f,{className:v,href:C,onClick:F,"aria-label":$(u[e].key,{value:I,defaultValue:u[e].fallback}),"data-testid":N,"data-kind":e,"data-linked":"true",children:_})}],173972),e.s([],411206)},650868,224906,e=>{let t=e.i(152186).f;e.s(["f",0,t],650868);let a=e.i(856337).f;e.s(["f",0,a],224906)},710788,240029,626645,599858,363451,e=>{var t=e.i(843476),a=e.i(271645);e.i(311046);var i=e.i(549560),n=e.i(499881),l=e.i(355351);let o=(e,t,i=l.E)=>{let[n,o]=(0,a.useState)({width:0,height:0,columns:t});return(0,a.useEffect)(()=>{let t=e.current;if(!t)return;let a=()=>{let e=t.getBoundingClientRect(),a=Math.max(t.offsetWidth,Math.ceil(e.width-.01)),n=Math.max(t.offsetHeight,Math.ceil(e.height-.01));a<=0||n<=0||o(e=>e.width===a&&e.height===n?e:{width:a,height:n,columns:(0,l.L)(a,i)})};if(a(),"u"<typeof ResizeObserver)return;let n=new ResizeObserver(a);return n.observe(t),()=>n.disconnect()},[e,i]),n};e.s(["f",0,o],240029);var s=e.i(380153),r=e.i(345712),d=e.i(997053),c=e.i(547905);let h=d.U.div.withConfig({displayName:"HexEdge.styles__Root",componentId:"sc-9795135c-0"})`
  position: absolute;
  inset: 0;
  z-index: ${({$zIndex:e})=>e};
  pointer-events: none;
  contain: layout style;
`,f=d.U.svg.withConfig({displayName:"HexEdge.styles__Canvas",componentId:"sc-9795135c-1"})`
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
`,p=d.U.svg.withConfig({displayName:"HexEdge.styles__FallbackStrip",componentId:"sc-9795135c-2"})`
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

  @media (max-width: ${r.p.tabletportrait}px) {
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
`,u=e=>!!e&&e.startsWith("url("),m=d.U.g.withConfig({displayName:"HexEdge.styles__TileGroup",componentId:"sc-9795135c-3"})`
  color: ${({theme:e,$color:t,$fill:a})=>(a&&!u(a)?a:void 0)??("mask"===t?"#ffffff":"onAccent"===t?e.palette.text.onAccent:"tint"===t||"navy"===t?(0,c.m)(e,t):e.palette.default[t])};
  /* Mit eigener Füllfarbe folgt die Gruppe ihrer Quelle im selben Frame, ohne Nachlauf (#1497) */
  transition: ${({$fill:e})=>e?"none":"color 0.2s ease"};
  /* Nachtrag #2186: Verlauf (Seitenkopf-Außenrand) direkt als Füllung */
  fill: ${({$fill:e})=>u(e)?e:"currentColor"};
  stroke: none;
  shape-rendering: crispEdges;

  /* Mit eigener Füllfarbe geht der Rand nahtlos in die Fläche des Hosts über:
     volle Kacheln schließen die Rasterfugen mit einer Kontur in ihrer Farbe (#1497) */
  ${({$fill:e})=>e&&d.m`
      [data-full='true'] {
        stroke: ${u(e)?e:"currentColor"};
        stroke-width: 1px;
      }
    `}
`;e.s(["$",0,f,"o",0,p,"F",0,h,"z",0,m],626645);var g=e.i(859146),x=e.i(650529);let b=([e,t])=>`${Math.round(4*e)}:${Math.round(4*t)}`,y=({tiles:e,color:i,offsetX:n=0,offsetY:o=0,clipPath:s,fill:r,dataTestId:d})=>{let c=(0,a.useMemo)(()=>((e,t,a)=>{let i=new Map;for(let n of e){if(n.alpha<.995)continue;let e=i.get(n.alpha)??{alpha:n.alpha,parts:[]};e.parts.push((0,l.H)(n,t,a)),i.set(n.alpha,e)}return[...i.values()].map(e=>({alpha:e.alpha,count:e.parts.length,d:e.parts.join(" ")}))})(e,n,o),[e,n,o]),h=(0,a.useMemo)(()=>e.filter(e=>(0,x.v)(e.alpha)),[e]),f=(0,a.useMemo)(()=>((e,t=0,a=0)=>{let i=new Set;for(let n of e)if(!(n.alpha<.995))for(let e of(0,g.M)((0,l.F)(n,t,a)))i.add(b(e));return i})(e,n,o),[e,n,o]);return(0,t.jsxs)(m,{$color:i,$fill:r,clipPath:s,"data-testid":d,"data-count":e.length,"data-elements":c.length+h.length,"data-fill":r,children:[c.map(e=>(0,t.jsx)("path",{d:e.d,"data-full":"true","data-count":e.count,"data-alpha":e.alpha,fillRule:"nonzero",style:{"--alpha":String(e.alpha)}},`full-${e.alpha}`)),h.map(e=>{let a=(0,x.g)(e),i=((e,t,a=0,i=0)=>(0,g.M)((0,l.F)(e,a,i)).map(e=>t.has(b(e))))(e,f,n,o),s=i.filter(Boolean).length;return(0,t.jsx)("path",{d:(0,g.e)((0,l.F)(e,n,o),(0,g.C)(e.size),i),"data-rounded":"true","data-sharp":s>0?s:void 0,"data-partial":"true",style:{"--alpha":String(e.alpha),"--shimmer-period":`${a.period}ms`,"--shimmer-offset":`${a.offset}ms`}},e.key)})]})};e.s(["f",0,y],599858);let v=e=>{let t=new Map;for(let a of e){let e=`${a.placement}-${a.color}`,i=t.get(e)??{key:e,placement:a.placement,color:a.color,cells:[]};i.cells.push(a),t.set(e,i)}return[...t.values()]};e.s(["f",0,({edges:e,columns:l,zIndex:d=-1,fill:c,dataTestId:u="hex-edge",className:g})=>{let x=(0,a.useRef)(null),b=o(x,40),$=l??b.columns,k=(e=>{let[t,i]=(0,a.useState)(!0);return(0,a.useEffect)(()=>{let t=e.current;if(!t||"u"<typeof IntersectionObserver)return;let a=new IntersectionObserver(([e])=>i(e.isIntersecting),{rootMargin:"200px"});return a.observe(t),()=>a.disconnect()},[e]),t})(x),j=(0,s.f)(`(max-width: ${r.p.tabletportrait}px)`),w=(0,a.useId)().replace(/:/g,""),C=j?(0,n.Q)(e):e,F=JSON.stringify(C),N=(0,a.useMemo)(()=>(0,n.T)(b.width,b.height,$,JSON.parse(F)),[b.width,b.height,$,F]),_=(0,a.useMemo)(()=>v(N.cells),[N]),{width:I,height:M,offsetX:R,offsetY:U}=N,K=JSON.stringify(e),L=(0,a.useMemo)(()=>b.width>0?[]:(0,i.r)(JSON.parse(K)),[b.width,K]);return(0,t.jsxs)(h,{ref:x,className:g,$zIndex:d,"aria-hidden":"true","data-testid":u,"data-edges":(0,n.a)(C),"data-tiles":N.cells.length,"data-measured":b.width>0?"true":"false",children:[L.map(e=>{let{x:a,y:i,width:n,height:l}=e.viewBox;return(0,t.jsx)(p,{viewBox:`${a} ${i} ${n} ${l}`,preserveAspectRatio:"xMidYMid slice",focusable:"false","data-side":e.side,"data-placement":e.placement,"data-testid":`${u}-fallback-${e.key}`,$depth:e.depth,children:v(e.cells).map(a=>(0,t.jsx)(y,{tiles:a.cells,color:a.color,fill:c?.[a.placement],dataTestId:`${u}-fallback-${e.key}-${a.color}`},a.key))},e.key)}),N.cells.length>0&&(0,t.jsxs)(f,{focusable:"false","data-testid":`${u}-svg`,"data-paused":k?"false":"true","data-width":I,"data-height":M,style:{"--edge-x":`${-R}px`,"--edge-y":`${-U}px`,"--edge-w":`${I}px`,"--edge-h":`${M}px`},children:[(0,t.jsxs)("defs",{children:[(0,t.jsx)("clipPath",{id:`${w}-inner`,children:(0,t.jsx)("rect",{x:R,y:U,width:b.width,height:b.height})}),(0,t.jsx)("clipPath",{id:`${w}-outer`,children:(0,t.jsx)("path",{clipRule:"evenodd",d:`M0 0H${I}V${M}H0Z M${R} ${U}v${b.height}h${b.width}v${-b.height}Z`})})]}),Object.keys(C).filter(e=>C[e]?.placement==="inner").map(e=>{let a=C[e];if(!a)return null;let i=((e,t,a,i,n)=>{switch(e){case"top":return{x:t,y:a-1,width:i,height:3};case"bottom":return{x:t,y:a+n-2,width:i,height:3};case"left":return{x:t-1,y:a,width:3,height:n};default:return{x:t+i-2,y:a,width:3,height:n}}})(e,R,U,b.width,b.height);return(0,t.jsx)(m,{$color:a.color,$fill:c?.inner,"data-testid":`${u}-seam-${e}`,children:(0,t.jsx)("rect",{...i})},`seam-${e}`)}),_.map(e=>(0,t.jsx)(y,{tiles:e.cells,color:e.color,offsetX:R,offsetY:U,clipPath:`url(#${w}-${e.placement})`,fill:c?.[e.placement],dataTestId:`${u}-${e.placement}-${e.color}`},e.key))]})]})}],363451),e.s([],710788)},813267,e=>{var t=e.i(843476),a=e.i(997053);let i=a.U.svg.withConfig({displayName:"IconLocation.styles__Root",componentId:"sc-d4764d0b-0"})``;e.s(["f",0,e=>(0,t.jsxs)(i,{className:e.className,"data-testid":"icon-location-root",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:[(0,t.jsx)("path",{d:"M4.5 9.75768C4.5 15.5 12 22 12 22C12 22 19.5 15.5 19.5 9.75768C19.5 4.81181 15.6559 2 12 2C8.34409 2 4.5 4.81181 4.5 9.75768Z",stroke:"currentColor",strokeWidth:"2",strokeLinejoin:"round"}),(0,t.jsx)("circle",{cx:"12",cy:"9.5",r:"2.5",stroke:"currentColor",strokeWidth:"2"})]})],813267)},874142,e=>{let t=e.i(215063).f;e.s(["f",0,t])},538915,226129,600639,546843,e=>{var t=e.i(843476),a=e.i(997053);e.i(315481);var i=e.i(10003),n=e.i(547905),l=e.i(136717);let o=e=>(0,l.L)(e.palette.footer.backgroundEnd),s=e=>(0,l.p)(e.palette.footer.backgroundEnd),r=(e,t)=>s(e)?`rgba(255, 255, 255, ${t})`:`rgba(33, 37, 41, ${t})`,d=a.U.footer.withConfig({displayName:"Footer.styles__Root",componentId:"sc-809a1aba-0"})`
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
      ${({theme:e})=>r(e,0)},
      ${({theme:e})=>r(e,.22)} 50%,
      ${({theme:e})=>r(e,0)}
    );
  }

  @media only screen and (max-width: 639px) {
    flex-direction: column-reverse;
    align-items: flex-start;
  }
`,h=a.U.span.withConfig({displayName:"Footer.styles__Copyright",componentId:"sc-809a1aba-2"})`
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
`,p=a.U.button.withConfig({displayName:"Footer.styles__FooterMetaButton",componentId:"sc-809a1aba-4"})`
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
`,u=(0,a.U)(i.NavLink).withConfig({displayName:"Footer.styles__FooterLink",componentId:"sc-809a1aba-5"})`
  color: inherit;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`,m=(0,a.U)(i.NavLink).withConfig({displayName:"Footer.styles__LogoLink",componentId:"sc-809a1aba-6"})`
  display: inline-block;
  text-decoration: none;
`,g=a.U.div.withConfig({displayName:"Footer.styles__FooterSection",componentId:"sc-809a1aba-7"})`
  margin-bottom: 20px;
`,x=a.U.ul.withConfig({displayName:"Footer.styles__ContactList",componentId:"sc-809a1aba-8"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 0;
  padding: 0;
  list-style: none;
`,b=a.U.li.withConfig({displayName:"Footer.styles__ContactItem",componentId:"sc-809a1aba-9"})`
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
`,y=a.U.h2.withConfig({displayName:"Footer.styles__FooterSectionTitle",componentId:"sc-809a1aba-10"})`
  && {
    color: ${({theme:e})=>o(e)};
  }
  font-size: 1rem;
  font-weight: 700;
  margin: 0 0 16px;
  text-transform: uppercase;
`,v=a.U.nav.withConfig({displayName:"Footer.styles__FooterLinks",componentId:"sc-809a1aba-11"})`
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
`;var $=e.i(424734),k=e.i(650868),j=e.i(224906);e.i(821194);var w=e.i(99222),C=e.i(722216),F=e.i(507924),N=e.i(284248),_=e.i(891567);let I=[{titleKey:"footer.sections.links",links:[{href:"/team",labelKey:"footer.team"},{href:"/faq",labelKey:"footer.faq"},{href:"/about",labelKey:"footer.about"},{href:"/news",labelKey:"footer.latest"},{href:"/contact-us",labelKey:"footer.contactForm"},{href:"/services",labelKey:"footer.services"}]}],M={titleKey:"footer.contact",email:_._.info,phone:_.h.central,address:_.Y},R=[{href:"/agb",labelKey:"footer.terms"},{href:"/imprint",labelKey:"footer.imprint"},{href:"/privacy",labelKey:"footer.privacy"},{href:"/email-disclaimer",labelKey:"footer.emailDisclaimer"},{href:"/accessibility",labelKey:"footer.accessibility"}];e.i(411206);var U=e.i(173972),K=e.i(317573),L=e.i(757658),S=e.i(874142),H=e.i(813267);e.i(710788);var W=e.i(363451);e.i(311046);var A=e.i(499881);let P={top:{placement:"inner",color:"white"}};e.s(["f",0,e=>{let i=e.edges??P,{tr:n}=(0,w.f)(),l=(0,a.i)(),{footer:o}=(0,C.f)(),r=(0,N.C)();return(0,t.jsxs)(d,{className:e.className,"data-testid":"footer-root",$edges:i,children:[(0,A.N)(i)&&(0,t.jsx)(W.f,{edges:i,dataTestId:"footer-root-edge"}),(0,t.jsxs)(k.f,{children:[(0,t.jsx)(j.f,{xs:12,md:3,lg:2,children:(0,t.jsx)(m,{href:"/","aria-label":n("footer.logo.ariaLabel",{defaultValue:"plastship – zur Startseite"}),"data-testid":"footer-logo-link",children:(0,t.jsx)($.f,{inverted:!l?.palette?.footer||s(l),monochrome:!0})})}),(0,t.jsx)(t.Fragment,{children:o.length>0?o.map((e,a)=>(0,t.jsx)(j.f,{xs:12,sm:6,md:4,children:(0,t.jsxs)(g,{"data-testid":`footer-cms-section-${a}`,"data-count":e.children?.length??0,children:[(0,t.jsx)(y,{"data-testid":`footer-cms-section-${a}-title`,children:(0,F.u)(e.label,r)}),(0,t.jsx)(v,{children:(e.children??[]).map((e,i)=>(0,t.jsx)(u,{href:e.href,"data-testid":`footer-cms-section-${a}-link-${i}`,children:(0,F.u)(e.label,r)},`${e.href}-${i}`))})]})},`${e.href}-${a}`)):I.map((e,a)=>(0,t.jsx)(j.f,{xs:12,sm:6,md:4,children:(0,t.jsxs)(g,{"data-testid":`footer-section-${a}`,"data-count":e.links.length,children:[(0,t.jsx)(y,{"data-testid":`footer-section-${a}-title`,children:n(e.titleKey)}),(0,t.jsx)(v,{children:e.links.map(e=>(0,t.jsx)(u,{href:e.href,"data-testid":`footer-link-${e.href.replace(/^\//,"").replace(/\//g,"-")}`,children:n(e.labelKey)},e.href))})]})},e.titleKey))}),(0,t.jsx)(j.f,{xs:12,sm:6,md:5,lg:4,children:(0,t.jsxs)(g,{"data-testid":"footer-contact",children:[(0,t.jsx)(y,{"data-testid":"footer-contact-title",children:n(M.titleKey)}),(0,t.jsxs)(x,{children:[(0,t.jsx)(b,{children:(0,t.jsx)(U.f,{kind:"mail",value:M.email,place:"footer",icon:(0,t.jsx)(K.f,{}),dataTestId:"footer-contact-email"})}),(0,t.jsx)(b,{children:(0,t.jsx)(U.f,{kind:"tel",value:M.phone.e164,place:"footer",icon:(0,t.jsx)(S.f,{}),dataTestId:"footer-contact-phone",children:M.phone.international})}),(0,t.jsx)(b,{children:(0,t.jsx)(U.f,{kind:"map",value:`${M.address.name}, ${(0,_.W)(M.address)}`,geo:M.address.geo,place:"footer",icon:(0,t.jsx)(H.f,{}),dataTestId:"footer-contact-address",children:(0,_.W)(M.address)})})]})]})})]}),(0,t.jsx)(k.f,{children:(0,t.jsx)(j.f,{xs:12,children:(0,t.jsxs)(c,{children:[(0,t.jsx)(h,{"data-testid":"footer-copyright",children:"© plastship GmbH"}),(0,t.jsxs)(f,{"data-testid":"footer-meta","data-count":R.length,children:[R.map(e=>(0,t.jsx)(u,{href:e.href,"data-testid":`footer-meta-${e.href.replace(/^\//,"")}`,children:n(e.labelKey)},e.href)),(0,t.jsx)(p,{type:"button",onClick:L.e,"data-testid":"footer-cookie-settings",children:n("footer.cookieSettings",{defaultValue:"Cookie-Einstellungen"})})]})]})})})]})}],538915);var T=e.i(271645),q=e.i(247902),z=e.i(825969),E=e.i(499911);e.i(657782);var D=e.i(229132);e.i(730026);var O=e.i(262076),B=e.i(184914),V=e.i(157067),Y=e.i(885895),G=e.i(693830),J=e.i(949108),Z=e.i(49958),Q=e.i(726029);let X=(0,T.lazy)(()=>e.A(767483));e.s(["f",0,()=>{let e=(0,J.f)(),{status:a}=(0,Z.useSession)(),i=(0,G.g)(),{isLeftSidebarOpen:n,closeLeftSidebar:l}=(0,V.i)(),{language:o}=(0,Y.N)(),{tr:s}=(0,w.f)(o);return e?(0,t.jsx)(B.f,{isOpen:n,onClose:l,mode:"guest",maxWidthPx:Q.F-1,barHeightPx:Q.W,footerAction:(0,t.jsx)(q.f,{href:"/login",modifier:z.j.PRIMARY,icon:(0,t.jsx)(E.f,{}),iconAlign:z.W.RIGHT,dataTestId:"mobile-menu-item-login",children:s("header.login.label",{defaultValue:"Login"})}),children:(0,t.jsx)(O.f,{"data-testid":"mobile-menu-section-public",children:(0,t.jsx)(D.f,{variant:"stacked",dataTestId:"mobile-menu-item-public"})})}):"authenticated"===a&&i?(0,t.jsx)(T.Suspense,{fallback:null,children:(0,t.jsx)(X,{barHeightPx:Q.W})}):null}],226129),e.s([],600639),e.s(["p",0,{top:{placement:"inner",color:"white",depth:"section"}},"q",0,"navy","e",0,function(e){return e&&"white"!==e?{edges:{top:{placement:"inner",color:e}},flush:!0}:{edges:void 0,flush:!1}}],546843)},584391,e=>{var t=e.i(843476),a=e.i(997053),i=e.i(726029);let n=a.U.div.withConfig({displayName:"Default.styles__Root",componentId:"sc-6c8f238f-0"})`
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
`;var o=e.i(197754),s=e.i(538915);e.i(600639);var r=e.i(226129),d=e.i(729950),c=e.i(546843);e.s(["Default",0,e=>{let{children:a,inverted:i,paddingTop:h=!0,footerEdge:f}=e,p=(0,c.e)(f);return(0,d.H)()?(0,t.jsx)(t.Fragment,{children:a}):(0,t.jsxs)(n,{className:e.className,"data-testid":"default-root",children:[(0,t.jsx)(o.f,{navigation:!1,inverted:i,site:!0}),(0,t.jsx)(r.f,{}),(0,t.jsx)(l,{$paddingTop:h,$flushFooter:p.flush,children:a}),(0,t.jsx)(s.f,{inverted:i,edges:p.edges})]})}],584391)},729950,e=>{var t=e.i(271645);let a=(0,t.createContext)(null);e.s(["R",0,a,"H",0,function(){return(0,t.useContext)(a)}])},891567,e=>{let t={name:"plastship GmbH",street:"Auf der Lind 10",postalCode:"65529",locality:"Waldems",region:"Hessen",countryCode:"DE",geo:{lat:50.248828,lon:8.309024}};e.s(["Y",0,t,"_",0,{info:"info@plastship.com",team:"team@plastship.com"},"h",0,{central:{e164:"+4961265898010",national:"06126 58980-10",international:"+49 6126 58980-10"}},"F",0,"contact_click","W",0,function(e=t){return`${e.street}, ${e.postalCode} ${e.locality}`}])},974924,e=>{let t=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;e.s(["d",0,20,"x",0,function(e){return"string"==typeof e&&t.test(e)},"W",0,function(e){return e.trim().toLowerCase()}])},635647,e=>{var t=e.i(974924),a=e.i(891567),i=e.i(854101);let n=/^\+?[\d\s()./–-]+$/,l=e=>`${e.lat},${e.lon}`,o=e=>e.replace(/\s+/g," ").trim(),s=e=>Number(e.toFixed(6));function r(e){return!!e&&Number.isFinite(e.lat)&&Number.isFinite(e.lon)&&90>=Math.abs(e.lat)&&180>=Math.abs(e.lon)}e.s(["a",0,function(e){let t=o(e??"").toLowerCase();if(!t)return;let{street:i,postalCode:n}=a.Y;return t.includes(i.toLowerCase())&&t.includes(n)?{...a.Y.geo}:void 0},"c",0,function(e,a){let i="string"==typeof e?e.trim():"";if(!(0,t.x)(i))return null;let n=a?.trim();return n?`mailto:${i}?subject=${encodeURIComponent(n)}`:`mailto:${i}`},"n",0,function(e,t){if(!e)return null;let a=o(e.query),i=r(e.geo)?e.geo:void 0;if(!a&&!i)return null;if("string"==typeof t&&/iPhone|iPad|iPod|Macintosh/.test(t)){let e,t;return e=o(a),t=[],e&&t.push(`q=${encodeURIComponent(e)}`),i&&t.push(`ll=${l(i)}`),`https://maps.apple.com/?${t.join("&")}`}if("string"==typeof t&&/Android/i.test(t)){let e;return e=i?l(i):"0,0",`geo:${e}?q=${encodeURIComponent(o(a))}`}return null},"W",0,function(e,t){if(!e)return null;let a=o(e.query).slice(0,300),n=r(e.geo)?e.geo:void 0;if(!a&&!n)return null;let l=[];n&&l.push(`lat=${s(n.lat)}`,`lon=${s(n.lon)}`),a&&l.push(`q=${encodeURIComponent(a)}`);let d=`/map/?${l.join("&")}`;return t?(0,i.N)(d,t):d},"R",0,function(e){let t=o(e.get("q")??"").slice(0,300),a=e.get("lat"),i=e.get("lon"),n=null!==a&&""!==a.trim()?Number(a):0/0,l=null!==i&&""!==i.trim()?Number(i):0/0,d=r({lat:n,lon:l})?{lat:s(n),lon:s(l)}:void 0;return t||d?d?{query:t,geo:d}:{query:t}:null},"A",0,function(e){let t=function(e){let t;if("string"!=typeof e)return null;let a=e.trim();if(!a||!n.test(a))return null;let i=a.replace(/^(\+\d{1,3})\s*\(0\)/,"$1"),l=i.replace(/\D/g,"");if(i.startsWith("+"))t=`+${l}`;else if(l.startsWith("00"))t=`+${l.slice(2)}`;else{if(!l.startsWith("0"))return null;t=`+49${l.slice(1)}`}let o=t.length-1;return o<6||o>15||t.startsWith("+0")?null:t}(e);return t?`tel:${t}`:null}])}],307446,e=>{e.v(t=>Promise.all(["static/chunks/1xsu1bxk1l5ub.js","static/chunks/1z9k6-mk4t9_g.js","static/chunks/22khcvznnl4iy.js","static/chunks/418xdx7k7y4kc.js","static/chunks/3h4paqtye6-p2.js"].map(t=>e.l(t))).then(()=>t(293601)))},460385,e=>{e.v(t=>Promise.all(["static/chunks/3hsotnybl4262.js","static/chunks/0yv2loygyhcfa.js","static/chunks/33s1pd4g0i9is.js","static/chunks/3obqb41wyv4ax.js","static/chunks/3h4paqtye6-p2.js","static/chunks/2oq-uevcwhldh.js"].map(t=>e.l(t))).then(()=>t(851724)))},767483,e=>{e.v(t=>Promise.all(["static/chunks/0cjg6mrmw5hfy.js","static/chunks/2aczwenenywb8.js","static/chunks/2-uxo2bcn21qb.js","static/chunks/17ii97gpladp2.js","static/chunks/3obqb41wyv4ax.js","static/chunks/3h4paqtye6-p2.js"].map(t=>e.l(t))).then(()=>t(806880)))},672099,function(e){e.n(e.i(584391))}]);