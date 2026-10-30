(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,677231,302222,e=>{"use strict";var t=e.i(843476),a=e.i(271645),i=e.i(152186),n=e.i(856337),r=e.i(12780),s=e.i(507924),o=e.i(989969),l=e.i(913148);let d=["masthead"],c={hero:(e,t)=>(0,s.u)(e.props.slides[0]?.headline,t),mediaText:(e,t)=>(0,s.u)(e.props.headline,t),animationText:(e,t)=>(0,s.u)(e.props.headline,t),stats:(e,t)=>(0,s.u)(e.props.headline,t),team:(e,t)=>(0,s.u)(e.props.headline,t),faq:(e,t)=>(0,s.u)(e.props.headline,t),newsTeaser:(e,t)=>(0,s.u)(e.props.headline,t),richText:(e,t)=>{let a,i;return a=(0,s.u)(e.props.content,t).split("\n").find(e=>""!==e.trim())??"",i=/^ {0,3}#{1,6}[ \t]+(.+?)[ \t#]*$/.exec(a),i?.[1]?.trim()??""}};Object.keys(c);var m=e.i(197908);e.i(311046);var p=e.i(499881),h=e.i(437772);e.i(710788);var f=e.i(363451),u=e.i(997053),g=e.i(547905);let x=(e,t)=>e?.[t]?.placement==="inner"?"1px":"0",$=u.U.section.withConfig({displayName:"SiteBand.styles__Root",componentId:"sc-f642966b-0"})`
  position: relative;
  isolation: isolate;
  display: flow-root;
  background-color: transparent;
  ${({theme:e,$surface:t})=>((e,t)=>{let a=e.palette.site;switch(t){case"tint":return u.m`
        --site-surface: ${a.tint};
        --site-card-border: transparent;
        --site-halo: color-mix(in srgb, ${a.tint} 50%, ${a.card});
      `;case"dark":return u.m`
        --site-surface: ${a.navy};
        --site-heading: #ffffff;
        --site-text: color-mix(in srgb, #ffffff 85%, transparent);
        --site-muted: color-mix(in srgb, #ffffff 70%, transparent);
        --site-accent: color-mix(in srgb, ${a.green} 70%, #ffffff);
        --site-card-border: transparent;
        --site-border: color-mix(in srgb, #ffffff 24%, transparent);
        --site-halo: color-mix(in srgb, #ffffff 12%, transparent);
      `;default:return u.m``}})(e,t)}

  ${({$surface:e,$edges:t})=>"white"!==e&&u.m`
      &::before {
        content: '';
        position: absolute;
        inset: 0;
        z-index: -2;
        background: var(--site-surface);
        box-shadow: 0 0 0 100vmax var(--site-surface);
        clip-path: inset(${x(t,"top")} -100vmax ${x(t,"bottom")});
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

  /* Wabenrand (#1188): das Band ist Host; Polster reserviert die Randzone vor der Messung (CLS 0) */
  ${({$edges:e})=>(0,g.n)(e)}
  ${({$edges:e})=>(0,g.o)("top","0px",e)}
  ${({$edges:e})=>(0,g.o)("bottom","0px",e)}
`,b=({surface:e,edges:a,headerBg:i,dataTestId:n="site-band",children:r})=>{let s=(0,p.N)(a)?a:void 0;return(0,t.jsxs)($,{$surface:e,$edges:s,"data-testid":n,"data-surface":e,"data-header-bg":i??void 0,children:[s&&(0,t.jsx)(f.f,{edges:s,dataTestId:`${n}-edge`}),r]})};e.i(951693);var y=e.i(659188);let w="640px",v="768px",k="1024px",j=u.U.section.withConfig({displayName:"CardGrid.styles__Root",componentId:"sc-c6fe4948-0"})`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.margin.large};
  width: 100%;
`,_=u.U.ul.withConfig({displayName:"CardGrid.styles__List",componentId:"sc-c6fe4948-1"})`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 16px;
  margin: 0;
  padding: 0;
  list-style: none;

  @media (min-width: ${w}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  ${({$columns:e})=>e>=3&&u.m`
      @media (min-width: ${v}) {
        grid-template-columns: repeat(3, minmax(0, 1fr));
      }
    `}

  ${({$columns:e})=>4===e&&u.m`
      @media (min-width: ${k}) {
        grid-template-columns: repeat(4, minmax(0, 1fr));
      }
    `}
`,C=u.U.li.withConfig({displayName:"CardGrid.styles__Item",componentId:"sc-c6fe4948-2"})`
  min-width: 0;

  > * {
    height: 100%;
  }
`,I=u.U.ul.withConfig({displayName:"CardGrid.styles__BalancedList",componentId:"sc-c6fe4948-3"})`
  --cols: 1;
  --gap: ${({theme:e})=>e.margin.small};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--gap);
  margin: 0;
  padding: 0;
  list-style: none;

  @media (min-width: ${w}) {
    --cols: ${({$steps:e})=>e.sm};
  }

  @media (min-width: ${v}) {
    --cols: ${({$steps:e})=>e.md};
  }

  @media (min-width: ${k}) {
    --cols: ${({$steps:e})=>e.lg};
  }
`,N=u.U.li.withConfig({displayName:"CardGrid.styles__BalancedItem",componentId:"sc-c6fe4948-4"})`
  flex: 0 0 calc((100% - (var(--cols) - 1) * var(--gap)) / var(--cols));
  min-width: 0;

  &[data-wide='true'] {
    flex-basis: 100%;
  }

  > * {
    height: 100%;
  }
`,T=u.q`
  from {
    opacity: 0;
    clip-path: polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%);
  }
  40% {
    opacity: 1;
  }
  to {
    opacity: 1;
    /* Sechseck weit über die Karte hinaus: am Ende deckt es sie ganz */
    clip-path: polygon(50% -40%, 140% 5%, 140% 95%, 50% 140%, -40% 95%, -40% 5%);
  }
`,U=u.m`
  &[data-state='idle'] > li {
    opacity: 0;
  }

  &[data-state='running'] > li {
    /* backwards: Startpose während der Verzögerung, danach ohne clip-path (Schatten) */
    animation: ${T} ${520}ms cubic-bezier(0.2, 0.8, 0.2, 1) backwards;
  }

  ${Array.from({length:12},(e,t)=>`&[data-state='running'] > li:nth-child(${t+1}) { animation-delay: ${60*t}ms; }`).join("\n")}

  &[data-state='running'] > li:nth-child(n + ${13}) {
    animation-delay: ${720}ms;
  }

  @media (prefers-reduced-motion: reduce) {
    &[data-state] > li {
      animation: none;
      opacity: 1;
    }
  }
`;function L(e,t){if(e<=1)return 1;let a=Math.min(Math.max(t,2),4);if(e<=a)return e;let i=[a,a+1,a-1,a+2,a-2].filter(e=>e>=2&&e<=4),n=t=>{let i=e%t;return(0===i?0:1===i?100:t-i)+1.5*Math.abs(t-a)};return i.reduce((e,t)=>n(t)<n(e)?t:e)}var S=e.i(647835);let z=(0,u.U)(_).withConfig({displayName:"CardGridReveal__RevealGrid",componentId:"sc-d786b5b8-0"})`
  ${U}
`,B=(0,u.U)(I).withConfig({displayName:"CardGridReveal__RevealBalanced",componentId:"sc-d786b5b8-1"})`
  ${U}
`;function M({columns:e,steps:i,count:n,onFirstView:r,dataTestId:s,children:o}){let l=(0,a.useRef)(null),{state:d,visible:c}=(0,S.f)(l,520+60*Math.max(0,Math.min(n,13)-1),.15),m=(0,a.useRef)(r);(0,a.useEffect)(()=>{m.current=r}),(0,a.useEffect)(()=>{c&&m.current?.()},[c]);let p={ref:l,"data-testid":s,"data-state":d,"data-reveal":"true"};return i?(0,t.jsx)(B,{...p,$steps:i,"data-balanced":"true",children:o}):(0,t.jsx)(z,{...p,$columns:e,children:o})}let R=e=>{var i;let n,{headline:r,description:s,headerAlign:o="left",columns:l=3,children:d,balanced:c=!1,wideItems:m,reveal:p=!1,onFirstView:h,className:f,dataTestId:u="card-grid"}=e,g=a.default.Children.toArray(d),x=new Set(c?m??[]:[]),$=c?(i=g.length,{sm:Math.min(2,n=Math.max(1,function(e,t){let a=0,i=0;for(let n=0;n<e;n++){if(t.has(n)){i=0;continue}i+=1,a=Math.max(a,i)}return a}(i,x))),md:L(n,Math.min(3,l)),lg:L(n,l)}):void 0,b=c?N:C,w=g.map((e,a)=>(0,t.jsx)(b,{"data-testid":`${u}-item`,"data-wide":x.has(a)?"true":void 0,children:e},a));return(0,t.jsxs)(j,{className:f,"data-testid":u,"data-columns":l,"data-cols-md":$?.md,"data-cols-lg":$?.lg,children:[(r||s)&&(0,t.jsx)(y.f,{headline:r,description:s,align:o,dataTestId:`${u}-header`}),p?(0,t.jsx)(M,{columns:l,steps:$,count:g.length,onFirstView:h,dataTestId:`${u}-list`,children:w}):$?(0,t.jsx)(I,{$steps:$,"data-testid":`${u}-list`,"data-balanced":"true",children:w}):(0,t.jsx)(_,{$columns:l,"data-testid":`${u}-list`,children:w})]})};e.i(307839);var F=e.i(585584),H=e.i(380153),A=e.i(587076);let P=u.U.div.withConfig({displayName:"CardSpotlight.styles__Root",componentId:"sc-5157933b-0"})`
  position: absolute;
  inset: 0;
  z-index: -1;
  overflow: hidden;
  border-radius: 24px;
  pointer-events: none;
  --card-spot: color-mix(in srgb, ${({theme:e})=>e.palette.site.blue} 22%, transparent);

  @media (hover: none), (pointer: coarse), (prefers-reduced-motion: reduce) {
    display: none;
  }
`;function q({onFirstHover:e,onLinkClick:i,dataTestId:n="card-spotlight"}){let r=(0,a.useRef)(null),s=(0,a.useRef)(null),o=(0,H.f)("(hover: hover) and (pointer: fine)"),l=(0,A.f)(),d=o&&!l,[c,m]=(0,a.useState)(!1),p=(0,a.useRef)({onFirstHover:e,onLinkClick:i});return(0,a.useEffect)(()=>{p.current={onFirstHover:e,onLinkClick:i}}),(0,a.useEffect)(()=>{let e=r.current?.parentElement;if(!e)return;let t=!1,a=null,i=i=>{d&&"touch"!==i.pointerType&&(a=e.getBoundingClientRect(),m(!0),t||(t=!0,p.current.onFirstHover?.()))},n=t=>{d&&"touch"!==t.pointerType&&(a||(a=e.getBoundingClientRect()),s.current?.move(t.clientX-a.left,t.clientY-a.top))},o=()=>{a=null,s.current?.leave()},l=e=>{let t=e.target;t?.closest("a[href], [href]")&&p.current.onLinkClick?.()};return e.addEventListener("pointerenter",i),e.addEventListener("pointermove",n),e.addEventListener("pointerleave",o),e.addEventListener("click",l),()=>{e.removeEventListener("pointerenter",i),e.removeEventListener("pointermove",n),e.removeEventListener("pointerleave",o),e.removeEventListener("click",l)}},[d]),(0,t.jsx)(P,{ref:r,"aria-hidden":"true","data-testid":n,"data-enabled":d?"true":"false","data-built":c?"true":"false",children:c&&d&&(0,t.jsx)(F.f,{ref:s,columns:14,radius:56,reveal:"var(--card-spot)",dataTestId:`${n}-spot`})})}e.i(845166);var G=e.i(609588);e.i(945304);var E=e.i(977194);e.i(315481);var W=e.i(10003);let K=u.U.section.withConfig({displayName:"HexTileLinks.styles__Root",componentId:"sc-9b72c459-0"})`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.margin.large};
  width: 100%;
`,Y=u.U.ul.withConfig({displayName:"HexTileLinks.styles__List",componentId:"sc-9b72c459-1"})`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${({theme:e})=>e.margin.large};
  margin: 0;
  padding: 0;
  list-style: none;
`,D=u.U.li.withConfig({displayName:"HexTileLinks.styles__Item",componentId:"sc-9b72c459-2"})`
  flex: 0 1 ${300}px;
  min-width: 0;
`,V=u.U.span.withConfig({displayName:"HexTileLinks.styles__Ring",componentId:"sc-9b72c459-3"})`
  position: absolute;
  inset: 0;
  ${g.p}
  background: ${({theme:e})=>e.palette.site.border};
  transition: background-color 200ms ease;
`,Z=u.U.span.withConfig({displayName:"HexTileLinks.styles__Face",componentId:"sc-9b72c459-4"})`
  position: absolute;
  inset: ${2}px;
  ${g.p}
  background: ${({theme:e})=>e.palette.site.card};
  transition: background-color 200ms ease;
`,O=u.U.span.withConfig({displayName:"HexTileLinks.styles__Content",componentId:"sc-9b72c459-5"})`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({theme:e})=>e.margin.default};
  height: 100%;
  /* Text bleibt im Sechseck: links und rechts die Schrägen frei */
  padding: 0 12%;
  text-align: center;

  /* Chip mittig: IconChip rückt sonst um die Ringbreite nach rechts */
  > span[data-size] {
    left: 0;
  }
`,X=u.U.span.withConfig({displayName:"HexTileLinks.styles__Title",componentId:"sc-9b72c459-6"})`
  font-family: ${({theme:e})=>e.font.primaryFamily};
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  color: ${({theme:e})=>e.palette.site.heading};
  /* ganze Wörter: Trennstriche mitten im Titel wirken in der Wabe unruhig */
  hyphens: manual;
  overflow-wrap: break-word;
  transition: color 200ms ease;

  svg {
    display: inline-block;
    margin-left: ${({theme:e})=>e.margin.extrasmall};
    vertical-align: -2px;
    color: ${({theme:e})=>e.palette.site.blue};
    transition: transform 150ms ease;
  }
`,J=(0,u.U)(W.NavLink).withConfig({displayName:"HexTileLinks.styles__TileLink",componentId:"sc-9b72c459-7"})`
  position: relative;
  display: block;
  aspect-ratio: 1;
  text-decoration: none;
  transition: transform 200ms ease;

  &&,
  &&:hover {
    color: inherit;
  }

  &:focus-visible {
    outline: none;
  }

  &:focus-visible ${V} {
    background: ${({theme:e})=>e.palette.default.primary};
  }

  &:hover,
  &:focus-visible {
    transform: translateY(-${4}px);
  }

  &:hover ${V}, &:focus-visible ${V}, &:hover ${Z}, &:focus-visible ${Z} {
    background: ${({theme:e})=>e.palette.site.greenDark};
  }

  &:hover ${X}, &:focus-visible ${X} {
    color: ${({theme:e})=>e.palette.text.onAccent};
  }

  &:hover ${X} svg,
  &:focus-visible ${X} svg {
    color: ${({theme:e})=>e.palette.text.onAccent};
    transform: translateX(4px);
  }

  &:hover span[data-size],
  &:focus-visible span[data-size] {
    color: ${({theme:e})=>e.palette.text.onAccent};
    --chip-face: color-mix(in srgb, ${({theme:e})=>e.palette.text.onAccent} 20%, transparent);
    --chip-ring: color-mix(in srgb, ${({theme:e})=>e.palette.text.onAccent} 12%, transparent);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &:hover,
    &:focus-visible {
      transform: none;
    }

    ${V}, ${Z}, ${X} {
      transition: none;
    }
  }
`,Q=()=>(0,t.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":"true",children:(0,t.jsx)("path",{d:"M8.9 3.3a.9.9 0 0 1 1.3 0l4.1 4.1a.9.9 0 0 1 0 1.2l-4.1 4.1a.9.9 0 1 1-1.3-1.3l2.6-2.5H2.4a.9.9 0 1 1 0-1.8h9.1L8.9 4.6a.9.9 0 0 1 0-1.3Z"})});function ee({headline:e,description:i,items:n,onFirstHover:r,onLinkClick:s,className:o,dataTestId:l="hex-tile-links"}){let d=(0,a.useRef)(!1),c=e=>{"touch"===e.pointerType||d.current||(d.current=!0,r?.())};return(0,t.jsxs)(K,{className:o,"data-testid":l,children:[(e||i)&&(0,t.jsx)(y.f,{headline:e,description:i,align:"center",dataTestId:`${l}-header`}),(0,t.jsx)(Y,{"data-testid":`${l}-list`,children:n.map((e,a)=>(0,t.jsx)(D,{"data-testid":`${l}-item`,children:(0,t.jsxs)(J,{href:e.href,"data-testid":`${l}-link-${a}`,onPointerEnter:c,onClick:()=>s?.(),children:[(0,t.jsx)(V,{"aria-hidden":"true"}),(0,t.jsx)(Z,{"aria-hidden":"true"}),(0,t.jsxs)(O,{children:[(0,t.jsx)(E.c,{name:e.icon.name,tone:e.icon.tone,size:"large",shape:"hex",dataTestId:`${l}-icon-${a}`}),(0,t.jsxs)(X,{"data-testid":`${l}-title-${a}`,children:[e.title,(0,t.jsx)(Q,{})]})]})]})},a))})]})}var et=e.i(755010);function ea({block:e,locale:a,dataTestId:i,effects:n}){let{headline:r,description:o,columns:l,cards:d}=e.props,c=d.flatMap((e,t)=>e.accent?[t]:[]),p=d.some(e=>e.price);return(0,t.jsx)(R,{headline:r?(0,s.u)(r,a):void 0,description:o?(0,s.u)(o,a):void 0,headerAlign:"center",columns:l,balanced:!0,wideItems:c,reveal:!!n,onFirstView:n?.onView,dataTestId:`${i}-grid`,children:d.map((e,r)=>{let o=(0,m.J)(e.cta?.href),l=e.description?(0,s.u)(e.description,a):void 0;return(0,t.jsx)(G.f,{title:(0,s.u)(e.title,a),description:l,icon:e.icon,image:e.image,ctaText:e.cta&&o?(0,s.u)(e.cta.label,a):void 0,ctaHref:o,price:e.price?(0,s.u)(e.price,a):void 0,actionLabel:p&&e.cta&&o?(0,s.u)(e.cta.label,a):void 0,compact:!l&&!e.image,accent:!!e.accent,stretched:!0,drawIcon:!!n,layer:n&&!e.accent?(0,t.jsx)(q,{onFirstHover:n.onHover,onLinkClick:n.onLink,dataTestId:`${i}-card-${r}-spotlight`}):void 0,dataTestId:`${i}-card-${r}`},r)})})}var ei=e.i(859146);let en=150,er=650,es=320,eo=300,el=350,ed=300,ec=400,em=160,ep=900,eh=e=>{let t;return t=e,en+t*es+eo},ef=e=>{let t;return t=e,en+t*es+ed},eu=(e,t)=>{let a;return a=Math.max(0,e-1),en+a*es+er+t*em};var eg=e.i(417068),ex=e.i(726029),e$=e.i(62574),eb=e.i(119093);let ey="768px",ew=e=>`${e}ms`,ev=u.q`
  from { transform: rotateY(0deg); }
  to { transform: rotateY(180deg); }
`,ek=u.q`
  0% { transform: rotateY(180deg); }
  40% { transform: rotateY(360deg); }
  60% { transform: rotateY(360deg); }
  100% { transform: rotateY(540deg); }
`,ej=u.q`
  from { stroke-dashoffset: 1; }
  to { stroke-dashoffset: 0; }
`,e_=u.q`
  from { opacity: 0; transform: translateX(calc(-1 * var(--cmp-shift))); }
  to { opacity: 1; transform: none; }
`,eC=u.q`
  from { text-decoration-color: transparent; }
  to { text-decoration-color: var(--cmp-strike); }
`,eI=u.q`
  from { transform: scaleY(0); }
  to { transform: scaleY(1); }
`,eN=(e,t=!1)=>{let a=function(e,t=!1){let a=e.palette.site;if(t)return{badText:(0,eb.f)(a.red,"#ffffff",.5),badFace:(0,eb.f)(a.red,a.navy,.8),badRim:(0,eb.f)(a.red,"#ffffff",.3),badIcon:(0,eb.f)(a.red,"#ffffff",.3),goodText:"#ffffff",ground:a.navy};let i=(0,eg.j)(e);return{badText:i?(0,eb.f)(a.red,a.text,.3):(0,eb.f)(a.red,a.text,.5),badFace:i?(0,eb.f)(a.red,a.card,.8):(0,eb.f)(a.red,a.card,.85),badRim:(0,eb.f)(a.red,a.card,.5),badIcon:i?a.red:(0,eb.f)(a.red,"#000000",.2),goodText:i?a.greenText:a.greenOnTint,ground:a.tint}}(e,t);return u.m`
    --cmp-bad-text: ${a.badText};
    --cmp-bad-face: ${a.badFace};
    --cmp-bad-rim: ${a.badRim};
    --cmp-bad-icon: ${a.badIcon};
    --cmp-good-text: ${a.goodText};
    --cmp-strike: ${a.badText};
  `},eT=u.U.section.withConfig({displayName:"ComparisonList.styles__Root",componentId:"sc-a8b8661-0"})`
  ${({theme:e})=>eN(e)}
  --cmp-good-face: ${({theme:e})=>e.palette.site.greenDark};
  --cmp-good-icon: #ffffff;
  --cmp-line: ${({theme:e})=>e.palette.site.green};
  --cmp-card: ${({theme:e})=>e.palette.site.tint};
  --cmp-hex: 2.75rem;
  --cmp-shift: ${({theme:e})=>e.margin.extrasmall};

  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.margin.big};
  width: 100%;
  /* globals.css färbt section mit der Seitenfarbe — auf Bändern durchscheinen lassen */
  background-color: transparent;

  /* auf der Tönung heben sich die Karten (Telefon) in Kartenfarbe ab */
  &[data-surface='tint'] {
    --cmp-card: ${({theme:e})=>e.palette.site.card};
  }

  /* Band (Navy in beiden Themes) */
  &[data-dark='true'] {
    ${({theme:e})=>eN(e,!0)}
    --cmp-card: color-mix(in srgb, #ffffff 8%, transparent);
  }

  @media (min-width: ${ey}) {
    --cmp-hex: 3.5rem;
  }
`,eU=u.U.div.withConfig({displayName:"ComparisonList.styles__Board",componentId:"sc-a8b8661-1"})`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.margin.default};
  width: 100%;
  max-width: 60rem;
  margin-inline: auto;
`,eL=u.m`
  display: grid;
  grid-template-columns: minmax(0, 1fr) var(--cmp-hex) minmax(0, 1fr);
  column-gap: ${({theme:e})=>e.margin.large};
  align-items: center;
`,eS=u.U.div.withConfig({displayName:"ComparisonList.styles__Heads",componentId:"sc-a8b8661-2"})`
  ${eL}
  column-gap: ${({theme:e})=>e.margin.small};

  @media (min-width: ${ey}) {
    column-gap: ${({theme:e})=>e.margin.large};
  }
`,ez=u.m`
  ${ex.n}
  margin: 0;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
`,eB=u.U.h3.withConfig({displayName:"ComparisonList.styles__HeadProblem",componentId:"sc-a8b8661-3"})`
  ${ez}
  text-align: right;
  color: var(--cmp-bad-text);
`,eM=u.U.h3.withConfig({displayName:"ComparisonList.styles__HeadSolution",componentId:"sc-a8b8661-4"})`
  ${ez}
  color: var(--cmp-good-text);
`,eR=u.U.svg.withConfig({displayName:"ComparisonList.styles__HeadArrow",componentId:"sc-a8b8661-5"})`
  justify-self: center;
  width: 100%;
  height: auto;
  fill: none;
  stroke: var(--cmp-line);
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
`,eF=u.U.ul.withConfig({displayName:"ComparisonList.styles__Pairs",componentId:"sc-a8b8661-6"})`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.margin.small};
  margin: 0;
  padding: 0;
  list-style: none;

  @media (min-width: ${ey}) {
    gap: 0;
  }
`,eH=u.U.li.withConfig({displayName:"ComparisonList.styles__Pair",componentId:"sc-a8b8661-7"})`
  display: grid;
  grid-template-columns: var(--cmp-hex) minmax(0, 1fr);
  grid-template-areas:
    'hub problem'
    'hub solution';
  column-gap: ${({theme:e})=>e.margin.small};
  row-gap: ${({theme:e})=>e.margin.extrasmall};
  align-items: center;
  padding: ${({theme:e})=>e.padding.small};
  border-radius: ${({theme:e})=>e.borderRadius.box};
  background: var(--cmp-card);

  @media (min-width: ${ey}) {
    ${eL}
    grid-template-areas: 'problem hub solution';
    padding: ${({theme:e})=>e.padding.extrasmall} 0;
    border-radius: 0;
    background: none;
  }
`,eA=u.U.p.withConfig({displayName:"ComparisonList.styles__Problem",componentId:"sc-a8b8661-8"})`
  ${ex.n}
  grid-area: problem;
  margin: 0;
  color: var(--cmp-bad-text);
  text-decoration: line-through;
  text-decoration-color: var(--cmp-strike);
  text-decoration-thickness: 1px;

  [data-state='idle'] & {
    text-decoration-color: transparent;
  }
  [data-state='running'] & {
    animation: ${eC} ${ew(ec)} ${e$.B}
      ${({$index:e})=>ew(ef(e))} both;
  }

  /* ab md bleibt das Problem lesbar stehen, gedämpft rot, rechtsbündig zur Wabe */
  @media (min-width: ${ey}) {
    text-align: right;
    text-decoration: none;
    font-size: 18px;
    line-height: 1.4;
  }
`,eP=u.U.div.withConfig({displayName:"ComparisonList.styles__Hub",componentId:"sc-a8b8661-9"})`
  grid-area: hub;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: stretch;

  @media (min-width: ${ey}) {
    &::before,
    &::after {
      content: '';
      position: absolute;
      left: 50%;
      width: 2px;
      margin-left: -1px;
      background: var(--cmp-line);
      transform-origin: top;
    }
    /* Teilstück j läuft von Zeile j (untere Hälfte) in Zeile j + 1 (obere Hälfte) */
    &::before {
      top: calc(-1 * ${({theme:e})=>e.padding.extrasmall});
      bottom: 50%;
      display: ${({$index:e})=>0===e?"none":"block"};
    }
    &::after {
      top: 50%;
      bottom: calc(-1 * ${({theme:e})=>e.padding.extrasmall});
      display: ${({$index:e,$count:t})=>e===t-1?"none":"block"};
    }

    [data-state='idle'] &::before,
    [data-state='idle'] &::after {
      transform: scaleY(0);
    }
    [data-state='running'] &::after {
      animation: ${eI} ${ew(em/2)} linear
        ${({$index:e,$count:t})=>ew(eu(t,e))} both;
    }
    [data-state='running'] &::before {
      animation: ${eI} ${ew(em/2)} linear
        ${({$index:e,$count:t})=>ew(eu(t,Math.max(0,e-1))+em/2)}
        both;
    }
  }
`,eq=u.U.span.withConfig({displayName:"ComparisonList.styles__Flip",componentId:"sc-a8b8661-10"})`
  position: relative;
  z-index: 1;
  display: block;
  width: var(--cmp-hex);
  height: var(--cmp-hex);
  perspective: calc(var(--cmp-hex) * 6);
`,eG=u.U.span.withConfig({displayName:"ComparisonList.styles__Flipper",componentId:"sc-a8b8661-11"})`
  position: absolute;
  inset: 0;
  transform-style: preserve-3d;
  transform: rotateY(180deg);

  [data-state='idle'] & {
    transform: rotateY(0deg);
  }
  [data-state='running'] & {
    animation: ${ev} ${ew(er)} ${e$.S}
      ${({$index:e})=>{let t;return ew((t=e,en+t*es))}} both;
  }
  ${"@media (hover: hover) and (pointer: fine)"} {
    [data-state='ready'] [data-replay='true'] & {
      animation: ${ek} ${ew(ep)} ${e$.B} both;
    }
  }
`,eE=u.U.span.withConfig({displayName:"ComparisonList.styles__Face",componentId:"sc-a8b8661-12"})`
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  color: ${({$side:e})=>"bad"===e?"var(--cmp-bad-icon)":"var(--cmp-good-icon)"};
  transform: ${({$side:e})=>"good"===e?"rotateY(180deg)":"none"};

  svg[data-part='hex'] {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    overflow: visible;
  }
  svg[data-part='hex'] path {
    fill: ${({$side:e})=>"bad"===e?"var(--cmp-bad-face)":"var(--cmp-good-face)"};
    stroke: ${({$side:e})=>"bad"===e?"var(--cmp-bad-rim)":"var(--cmp-good-face)"};
    stroke-width: 2;
  }
`,eW=u.U.span.withConfig({displayName:"ComparisonList.styles__FaceIcon",componentId:"sc-a8b8661-13"})`
  position: relative;
  display: grid;
  place-items: center;
  width: 46%;
  height: 46%;

  svg {
    width: 100%;
    height: 100%;
  }
`,eK=u.U.div.withConfig({displayName:"ComparisonList.styles__Solution",componentId:"sc-a8b8661-14"})`
  grid-area: solution;
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.margin.small};
  min-width: 0;

  [data-state='idle'] & {
    opacity: 0;
  }
  [data-state='running'] & {
    animation: ${e_} ${ew(ec)} ${e$.B}
      ${({$index:e})=>ew(ef(e))} both;
  }
`,eY=u.U.svg.withConfig({displayName:"ComparisonList.styles__Arrow",componentId:"sc-a8b8661-15"})`
  display: none;
  flex: none;
  width: ${({theme:e})=>e.margin.large};
  height: auto;
  overflow: visible;
  fill: none;
  stroke: var(--cmp-line);
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;

  path {
    stroke-dasharray: 1 1;
    stroke-dashoffset: 0;
  }
  [data-state='idle'] & path {
    stroke-dashoffset: 1;
  }
  [data-state='running'] & path {
    animation: ${ej} ${ew(el)} ${e$.B}
      ${({$index:e})=>ew(eh(e))} both;
  }

  @media (min-width: ${ey}) {
    display: block;
  }
`,eD=u.U.p.withConfig({displayName:"ComparisonList.styles__SolutionText",componentId:"sc-a8b8661-16"})`
  ${ex.Z}
  margin: 0;
  color: ${({theme:e})=>(0,ex.N)("heading",e.palette.site.heading)};
`,eV=(0,ei.e)({x:2,y:2,width:96,height:96},(0,ei.C)(96)),eZ=E.S.warning,eO=E.S.check;function eX({side:e}){let a="bad"===e?eZ:eO;return(0,t.jsxs)(eE,{$side:e,"data-face":e,children:[(0,t.jsx)("svg",{"data-part":"hex",viewBox:"0 0 100 100","aria-hidden":"true",focusable:"false",children:(0,t.jsx)("path",{d:eV})}),(0,t.jsx)(eW,{"aria-hidden":"true",children:a?(0,t.jsx)(a,{}):null})]})}function eJ({headline:e,description:i,problemTitle:n,solutionTitle:r,pairs:s,surface:o="white",onFirstView:l,onFirstReplay:d,dataTestId:c="comparison-list"}){let m=(0,a.useRef)(null),{state:p,visible:h}=(0,S.f)(m,function(e){let t;if(e<=0)return 0;let a=Math.max((t=e-1,en+t*es+er),ef(e-1)+ec,eh(e-1)+el);return 1===e?a:Math.max(a,eu(e,e-2)+em)}(s.length)),[f,u]=(0,a.useState)(null),g=(0,a.useRef)(null),x=(0,a.useRef)(!1);(0,a.useEffect)(()=>{h&&!x.current&&(x.current=!0,l?.())},[h,l]),(0,a.useEffect)(()=>()=>{null!==g.current&&window.clearTimeout(g.current)},[]);let $=(0,a.useCallback)((e,t)=>{"mouse"===t.pointerType&&"ready"===p&&null===f&&(u(e),d?.(),g.current=window.setTimeout(()=>{g.current=null,u(null)},ep))},[p,f,d]);return(0,t.jsxs)(eT,{ref:m,"data-testid":c,"data-state":p,"data-count":s.length,"data-surface":o,"data-dark":"dark"===o?"true":"false","data-element":"comparison",children:[(e||i)&&(0,t.jsx)(y.f,{headline:e,description:i,align:"center",dataTestId:`${c}-header`}),(0,t.jsxs)(eU,{children:[(0,t.jsxs)(eS,{"data-testid":`${c}-heads`,children:[(0,t.jsx)(eB,{"data-testid":`${c}-problem-title`,children:n}),(0,t.jsx)(eR,{viewBox:"0 0 32 16","aria-hidden":"true",focusable:"false",children:(0,t.jsx)("path",{d:"M2 8 H29 M23 3 L29 8 L23 13"})}),(0,t.jsx)(eM,{"data-testid":`${c}-solution-title`,children:r})]}),(0,t.jsx)(eF,{children:s.map((e,a)=>(0,t.jsxs)(eH,{"data-testid":`${c}-pair`,"data-pair":a+1,"data-replay":f===a?"true":"false",onPointerEnter:e=>$(a,e),children:[(0,t.jsx)(eA,{$index:a,"data-testid":`${c}-pair-problem`,children:e.problem}),(0,t.jsx)(eP,{$index:a,$count:s.length,children:(0,t.jsx)(eq,{"data-testid":`${c}-pair-hex`,"aria-hidden":"true",children:(0,t.jsxs)(eG,{$index:a,children:[(0,t.jsx)(eX,{side:"bad"}),(0,t.jsx)(eX,{side:"good"})]})})}),(0,t.jsxs)(eK,{$index:a,children:[(0,t.jsx)(eY,{$index:a,viewBox:"0 0 32 16","aria-hidden":"true",focusable:"false",children:(0,t.jsx)("path",{d:"M2 8 H29 M23 3 L29 8 L23 13",pathLength:1})}),(0,t.jsx)(eD,{"data-testid":`${c}-pair-solution`,children:e.solution})]})]},a))})]})]})}let eQ=e=>Math.round(100*e)/100+0,e0=0,e1=400,e2=90,e5=350,e6=550,e4=350,e3=1400,e7=e=>{let t;return t=Math.max(0,e-1),e5+t*e6},e9=e=>`${e}ms`,e8=u.q`
  from { opacity: 0; transform: scale(0.7); }
  to { opacity: 1; transform: scale(1); }
`,te=u.q`
  from { stroke-dashoffset: 1; }
  to { stroke-dashoffset: 0; }
`,tt=u.q`
  from { fill: var(--node-face-idle); stroke: var(--node-rim-idle); }
  to { fill: var(--node-face-done); stroke: var(--node-face-done); }
`,ta=u.q`
  from { fill: var(--node-face-idle); stroke: var(--node-rim-idle); }
  to { fill: var(--node-goal-done); stroke: var(--node-goal-done); }
`,ti=u.q`
  from { color: var(--node-icon-idle); }
  to { color: var(--node-icon-done); }
`,tn=u.q`
  from { color: var(--node-icon-idle); }
  to { color: var(--node-goal-icon); }
`,tr=u.q`
  0% { stroke-dashoffset: ${.06}; opacity: 0; }
  8% { opacity: 1; }
  88% { opacity: 1; }
  100% { stroke-dashoffset: -1; opacity: 0; }
`,ts=u.U.section.withConfig({displayName:"StepList.styles__Root",componentId:"sc-7c7ae546-0"})`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.margin.big};
  width: 100%;
  /* globals.css färbt section mit der Seitenfarbe — auf Bändern durchscheinen lassen */
  background-color: transparent;

  --step-path: ${({theme:e})=>(0,eg.j)(e)?e.palette.site.muted:e.palette.site.border};
  --step-path-lit: ${({theme:e})=>e.palette.site.green};
  --node-face-idle: ${({theme:e})=>e.palette.site.tint};
  --node-rim-idle: ${({theme:e})=>e.palette.site.border};
  --node-face-done: ${({theme:e})=>(0,eg.j)(e)?e.palette.site.navy:e.palette.site.blue};
  --node-goal-done: ${({theme:e})=>(0,eb.f)(e.palette.site.greenDark,"#000000",.15)};
  --node-icon-idle: ${({theme:e})=>e.palette.site.blue};
  --node-icon-done: ${({theme:e})=>(0,eg.j)(e)?e.palette.site.greenText:"#ffffff"};
  --node-goal-icon: #ffffff;

  /* Band (Navy in beiden Themes): Knoten hell, Weg weiß gedämpft */
  &[data-dark='true'] {
    --step-path: color-mix(in srgb, #ffffff 40%, transparent);
    --node-face-idle: color-mix(in srgb, #ffffff 10%, transparent);
    --node-rim-idle: color-mix(in srgb, #ffffff 32%, transparent);
    --node-face-done: ${({theme:e})=>e.palette.site.logoPlate};
    --node-icon-idle: #ffffff;
    --node-icon-done: ${({theme:e})=>e.palette.site.navy};
  }
`,to=u.U.div.withConfig({displayName:"StepList.styles__Track",componentId:"sc-7c7ae546-1"})`
  position: relative;
  width: 100%;
`,tl=u.U.svg.withConfig({displayName:"StepList.styles__PathSvg",componentId:"sc-7c7ae546-2"})`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: visible;
  pointer-events: none;
`,td=u.U.path.withConfig({displayName:"StepList.styles__Segment",componentId:"sc-7c7ae546-3"})`
  fill: none;
  stroke: var(--step-path);
  stroke-width: 2;
  stroke-linejoin: round;
  stroke-linecap: round;
  stroke-dasharray: 1 1;
  stroke-dashoffset: 0;
  transition: stroke 250ms ${e$.B};

  &[data-lit='true'] {
    stroke: var(--step-path-lit);
    stroke-width: 3;
  }

  [data-state='idle'] & {
    stroke-dashoffset: 1;
  }
  [data-state='running'] & {
    animation: ${te} ${e9(e6)} ${e$.B}
      ${({$index:e})=>{let t;return e9((t=e,e5+t*e6))}} both;
  }
  [data-state='static'] & {
    transition: none;
  }
`,tc=u.U.path.withConfig({displayName:"StepList.styles__Light",componentId:"sc-7c7ae546-4"})`
  fill: none;
  stroke: var(--step-path-lit);
  stroke-width: 6;
  stroke-linecap: round;
  stroke-dasharray: ${.06} ${1.94};
  stroke-dashoffset: ${.06};
  opacity: 0;

  [data-state='running'] & {
    animation: ${tr} ${e9(e3)} ${e$.B}
      ${({$count:e})=>e9(e7(e))} both;
  }
`,tm=u.m`
  grid-template-columns: minmax(0, 1fr);
  row-gap: ${({theme:e})=>e.margin.large};
  max-width: ${ex.z};
  margin-inline: auto;

  & > li {
    display: grid;
    grid-template-columns: var(--node-size) minmax(0, 1fr);
    column-gap: ${({theme:e})=>e.margin.default};
    align-items: start;
  }
`,tp=u.U.ol.withConfig({displayName:"StepList.styles__List",componentId:"sc-7c7ae546-5"})`
  --node-size: 4rem;
  position: relative;
  display: grid;
  margin: 0;
  padding: 0;
  list-style: none;

  @media (min-width: 640px) {
    --node-size: 5rem;
  }

  ${tm}
  ${({$orientation:e,$count:t})=>{let a;return"horizontal"===e&&(a=t,u.m`
  @media (min-width: ${a<=3?640:1024}px) {
    grid-template-columns: repeat(${a}, minmax(0, 1fr));
    column-gap: ${({theme:e})=>e.margin.large};
    max-width: none;

    & > li {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: ${({theme:e})=>e.margin.default};
    }

    /* Titel mittig unter dem Knoten, die Beschreibung linksbündig */
    & [data-part='content'] {
      padding-top: 0;
    }

    & [data-part='title'] {
      text-align: center;
    }

    --node-size: 6rem;
  }

  @media (min-width: 1024px) {
    --node-size: 7.5rem;
  }
`)}}
`,th=u.U.li.withConfig({displayName:"StepList.styles__Step",componentId:"sc-7c7ae546-6"})`
  position: relative;
  min-width: 0;
`,tf=u.U.div.withConfig({displayName:"StepList.styles__Node",componentId:"sc-7c7ae546-7"})`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: none;
  width: var(--node-size);
  height: var(--node-size);
  transition: transform 250ms ${e$.S};

  [data-state='idle'] & {
    opacity: 0;
  }
  [data-state='running'] & {
    animation: ${e8} ${e9(e1)} ${e$.S}
      ${({$index:e})=>e9(e0+e*e2)} both;
  }

  @media (hover: hover) and (pointer: fine) {
    [data-state='ready'] li[data-active='true'] > & {
      transform: translateY(-6%) scale(1.06);
    }
  }
`,tu=u.U.svg.withConfig({displayName:"StepList.styles__NodeSvg",componentId:"sc-7c7ae546-8"})`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: visible;
`,tg=u.U.path.withConfig({displayName:"StepList.styles__NodeFace",componentId:"sc-7c7ae546-9"})`
  fill: ${({$goal:e})=>e?"var(--node-goal-done)":"var(--node-face-done)"};
  stroke: ${({$goal:e})=>e?"var(--node-goal-done)":"var(--node-face-done)"};
  stroke-width: 2;

  [data-state='idle'] & {
    fill: var(--node-face-idle);
    stroke: var(--node-rim-idle);
  }
  [data-state='running'] & {
    animation: ${({$goal:e})=>e?ta:tt} ${e9(e4)}
      ${e$.B} ${({$index:e})=>{let t;return e9((t=e,e5+t*e6))}} both;
  }
`,tx=u.U.span.withConfig({displayName:"StepList.styles__NodeContent",componentId:"sc-7c7ae546-10"})`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({$goal:e})=>e?"var(--node-goal-icon)":"var(--node-icon-done)"};

  [data-state='idle'] & {
    color: var(--node-icon-idle);
  }
  [data-state='running'] & {
    animation: ${({$goal:e})=>e?tn:ti} ${e9(e4)}
      ${e$.B} ${({$index:e})=>{let t;return e9((t=e,e5+t*e6))}} both;
  }

  svg {
    display: block;
    width: calc(var(--node-size) * 0.4);
    height: calc(var(--node-size) * 0.4);
  }

  /* Die Icon-Atome färben sich uneinheitlich — hier einheitlich die Farbe des Knotens */
  svg [fill]:not([fill='none']) {
    fill: currentColor;
  }

  svg [stroke]:not([stroke='none']) {
    stroke: currentColor;
  }
`,t$=u.U.span.withConfig({displayName:"StepList.styles__StepNumber",componentId:"sc-7c7ae546-11"})`
  font-family: ${({theme:e})=>e.font.primaryFamily};
  font-size: calc(var(--node-size) * 0.28);
  font-weight: 700;
  line-height: 1;
  font-variant-numeric: tabular-nums;
`,tb=u.U.div.withConfig({displayName:"StepList.styles__Content",componentId:"sc-7c7ae546-12"})`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.margin.extrasmall};
  min-width: 0;
  /* Titel auf Höhe der Knotenmitte (Zeilenhöhe 28 px) */
  padding-top: calc((var(--node-size) - 1.75rem) / 2);

  @media (min-width: 640px) {
    li > & {
      max-width: 20rem;
    }
  }
`,ty=u.U.h3.withConfig({displayName:"StepList.styles__StepTitle",componentId:"sc-7c7ae546-13"})`
  ${ex.Z}
  margin: 0;
  font-size: 1.125rem;
  line-height: 1.75rem;
  hyphens: manual;
  overflow-wrap: break-word;
  text-wrap: balance;
`,tw=u.U.div.withConfig({displayName:"StepList.styles__StepText",componentId:"sc-7c7ae546-14"})`
  ${ex.n}
  color: ${({theme:e})=>(0,ex.N)("muted",e.palette.site.muted)};

  p,
  ul,
  ol {
    margin: 0;
  }

  p + p,
  p + ul,
  ul + p {
    margin-top: ${({theme:e})=>e.margin.extrasmall};
  }

  ul {
    padding-left: ${({theme:e})=>e.padding.default};
    list-style: disc;
  }

  li::marker {
    color: ${({theme:e})=>e.palette.site.green};
  }

  strong {
    font-weight: 700;
    color: ${({theme:e})=>(0,ex.N)("heading",e.palette.site.heading)};
  }

  li + li {
    margin-top: ${({theme:e})=>e.margin.extrasmall};
  }
`,tv=(0,ei.e)({x:2,y:2,width:96,height:96},(0,ei.C)(96));function tk({icon:e,index:i,count:n,dataTestId:r}){let s=i===n-1?"green":"blue",o=i===n-1;if(e&&!a.default.isValidElement(e)){let a=E.S[e.name];return(0,t.jsx)(tx,{$index:i,$goal:o,"data-testid":r,"data-icon":e.name,"data-tone":e.tone??s,"data-shape":"hex","aria-hidden":"true",children:a?(0,t.jsx)(a,{}):null})}return(0,t.jsx)(tx,{$index:i,$goal:o,"data-testid":r,"data-tone":s,"data-shape":"hex",children:e?(0,t.jsx)("span",{"aria-hidden":"true",children:e}):(0,t.jsx)(t$,{$tone:s,"data-testid":`${r}-number`,"data-tone":s,children:String(i+1).padStart(2,"0")})})}let tj=({headline:e,description:i,steps:n,orientation:r="horizontal",surface:s="white",onFirstView:o,onFirstStep:l,className:d,dataTestId:c="step-list"})=>{var m;let p=(0,a.useRef)(null),h=(0,a.useRef)(null),f=(0,a.useRef)([]),{state:u,visible:g}=(0,S.f)(p,(m=n.length)<=0?0:1===m?e5+0*e6+e4:e7(m)+e3),[x,$]=(0,a.useState)(null),[b,w]=(0,a.useState)(null),v=(0,a.useRef)(!1);(0,a.useEffect)(()=>{g&&!v.current&&(v.current=!0,o?.())},[g,o]);let k=(0,a.useCallback)(()=>{let e=h.current;if(!e)return;let t=e.getBoundingClientRect(),a=function(e,t=20){let a=[];for(let i=0;i+1<e.length;i++)a.push(function(e,t,a=20){let i=1>Math.abs(e.y-t.y)?"x":1>Math.abs(e.x-t.x)?"y":null;if(!i)return`M${eQ(e.x)} ${eQ(e.y)} L${eQ(t.x)} ${eQ(t.y)}`;let n="x"===i?t.x-e.x:t.y-e.y,r=2*Math.max(1,Math.round(Math.abs(n)/(2*a))),s=n/r,o=.5*Math.abs(s),l=[`M${eQ(e.x)} ${eQ(e.y)}`];for(let t=1;t<=r;t++){let a=t%2==1?o:0;l.push("x"===i?`L${eQ(e.x+t*s)} ${eQ(e.y-a)}`:`L${eQ(e.x+a)} ${eQ(e.y+t*s)}`)}return l.join(" ")}(e[i],e[i+1],t));return a}(f.current.slice(0,n.length).filter(e=>!!e).map(e=>{let a=e.getBoundingClientRect();return{x:a.left-t.left+a.width/2,y:a.top-t.top+a.height/2}})),i={width:Math.round(t.width),height:Math.round(t.height),segments:a,full:a.map((e,t)=>0===t?e:e.replace(/^M[^L]*/,"")).join(" ")};$(e=>e&&e.width===i.width&&e.height===i.height&&e.full===i.full?e:i)},[n.length]);(0,a.useEffect)(()=>{k();let e=h.current;if(!e||"u"<typeof ResizeObserver)return;let t=new ResizeObserver(()=>k());return t.observe(e),()=>t.disconnect()},[k]);let j=(0,a.useCallback)(e=>{w(e),null!==e&&l?.()},[l]),_=(0,a.useMemo)(()=>x?.segments??[],[x]);return(0,t.jsxs)(ts,{ref:p,className:d,"data-testid":c,"data-orientation":r,"data-count":n.length,"data-trail":r,"data-state":u,"data-path":_.length,"data-dark":"dark"===s?"true":"false","data-element":"stepList",children:[(e||i)&&(0,t.jsx)(y.f,{headline:e,description:i,align:"center",dataTestId:`${c}-header`}),(0,t.jsxs)(to,{ref:h,children:[x&&_.length>0&&(0,t.jsxs)(tl,{viewBox:`0 0 ${x.width} ${x.height}`,"aria-hidden":"true",focusable:"false",children:[_.map((e,a)=>(0,t.jsx)(td,{d:e,pathLength:1,$index:a,"data-testid":`${c}-path-segment`,"data-lit":null!==b&&a<b?"true":"false"},a)),(0,t.jsx)(tc,{d:x.full,pathLength:1,$count:n.length,"data-part":"light"})]}),(0,t.jsx)(tp,{$orientation:r,$count:n.length,children:n.map((e,a)=>{let i=e.renderedDescription??e.description;return(0,t.jsxs)(th,{"data-testid":`${c}-step`,"data-step":a+1,"data-active":b===a?"true":"false",onPointerEnter:e=>"mouse"===e.pointerType&&j(a),onPointerLeave:()=>j(null),onFocus:()=>j(a),onBlur:()=>j(null),children:[(0,t.jsxs)(tf,{ref:e=>{f.current[a]=e},$index:a,"data-testid":`${c}-marker`,"data-marker":e.icon?"icon":"number",children:[(0,t.jsx)(tu,{viewBox:"0 0 100 100","aria-hidden":"true",focusable:"false",children:(0,t.jsx)(tg,{d:tv,$index:a,$goal:a===n.length-1})}),(0,t.jsx)(tk,{icon:e.icon,index:a,count:n.length,dataTestId:`${c}-chip`})]}),(0,t.jsxs)(tb,{"data-part":"content",children:[(0,t.jsx)(ty,{"data-part":"title","data-testid":`${c}-step-title`,children:e.title}),i&&(0,t.jsx)(tw,{"data-testid":`${c}-step-description`,children:i})]})]},a)})})]})]})},t_=u.U.ul.withConfig({displayName:"SiteFaqList.styles__List",componentId:"sc-1973ab1d-0"})`
  margin: 0;
  padding: 0;
  list-style: none;
`,tC=u.U.li.withConfig({displayName:"SiteFaqList.styles__Item",componentId:"sc-1973ab1d-1"})`
  padding: 16px 0;
  transition: background-color 150ms ease;

  & + & {
    border-top: 1px solid ${({theme:e})=>e.palette.site.border};
  }

  &[data-open='true'] {
    padding-right: 16px;
    padding-left: 16px;
    border-radius: 12px;
    background: ${({theme:e})=>`color-mix(in srgb, ${e.palette.site.tint} 60%, ${e.palette.site.card})`};
    box-shadow: inset 4px 0 0 var(--site-accent, ${({theme:e})=>e.palette.site.green});
  }

  /* Die Fläche ersetzt die Trennlinien an der offenen Frage */
  &[data-open='true'],
  &[data-open='true'] + & {
    border-top-color: transparent;
  }

  /* Ab sm wächst die Fläche nach außen — der Fragetext springt beim Öffnen nicht */
  @media (min-width: 640px) {
    &[data-open='true'] {
      margin-right: -16px;
      margin-left: -16px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,tI=u.U.h3.withConfig({displayName:"SiteFaqList.styles__Question",componentId:"sc-1973ab1d-2"})`
  margin: 0;
  font-family: ${({theme:e})=>e.font.primaryFamily};
  font-size: 18px;
  font-weight: 700;
  line-height: 1.25;
  letter-spacing: 0;
  text-transform: none;
  color: ${({theme:e})=>e.palette.site.text};

  @media (min-width: 640px) {
    font-size: 20px;
    line-height: 28px;
  }
`,tN=u.U.span.withConfig({displayName:"SiteFaqList.styles__Marker",componentId:"sc-1973ab1d-3"})`
  position: relative;
  flex-shrink: 0;
  display: block;
  box-sizing: border-box;
  width: 24px;
  height: 24px;
  ${g.p}
  background: ${({theme:e})=>e.palette.site.tint};
  transition: transform 150ms ease;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 11px;
    left: 6px;
    width: 12px;
    height: 2px;
    border-radius: 1px;
    background: ${({theme:e})=>e.palette.site.blue};
  }

  &::after {
    transform: rotate(90deg);
  }

  @media (min-width: 640px) {
    top: 2px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,tT=u.U.button.withConfig({displayName:"SiteFaqList.styles__Toggle",componentId:"sc-1973ab1d-4"})`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
  box-sizing: border-box;
  width: 100%;
  margin: 0;
  padding: 0;
  border: 0;
  background: none;
  font: inherit;
  line-height: inherit;
  color: inherit;
  text-align: left;
  cursor: pointer;

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.palette.site.blue};
    outline-offset: 4px;
    border-radius: 4px;
  }

  /* Offen: auf der getönten Fläche hebt sich die Marke in Kartenfarbe ab */
  &[aria-expanded='true'] ${tN} {
    transform: rotate(45deg);
    background: ${({theme:e})=>e.palette.site.card};
  }
`,tU=u.U.span.withConfig({displayName:"SiteFaqList.styles__QuestionText",componentId:"sc-1973ab1d-5"})`
  min-width: 0;
  overflow-wrap: break-word;
`,tL=u.U.div.withConfig({displayName:"SiteFaqList.styles__Panel",componentId:"sc-1973ab1d-6"})`
  ${ex.b}
  padding-top: 16px;
`;function tS({item:e,index:a,open:i,onToggle:n,idBase:r,dataTestId:s}){let o=`${r}-q${a}`,l=`${r}-a${a}`,d=`${s}-item-${a}`;return(0,t.jsxs)(tC,{"data-testid":d,"data-open":i?"true":"false",children:[(0,t.jsx)(tI,{children:(0,t.jsxs)(tT,{type:"button",id:o,"aria-expanded":i,"aria-controls":l,onClick:n,"data-testid":`${d}-header`,children:[(0,t.jsx)(tU,{children:e.question}),(0,t.jsx)(tN,{"data-part":"marker","aria-hidden":"true"})]})}),(0,t.jsx)(tL,{id:l,role:"region","aria-labelledby":o,hidden:!i,"data-testid":`${d}-body`,children:e.answer})]})}function tz({items:e,defaultOpenIndex:i,dataTestId:n="site-faq"}){let r=(0,a.useId)(),[s,o]=(0,a.useState)(()=>new Set(void 0===i?[]:[i]));return(0,t.jsx)(t_,{"data-testid":`${n}-list`,"data-count":e.length,children:e.map((e,a)=>(0,t.jsx)(tS,{item:e,index:a,open:s.has(a),onToggle:()=>o(e=>{let t=new Set(e);return t.has(a)?t.delete(a):t.add(a),t}),idBase:r,dataTestId:n},a))})}e.i(510716);var tB=e.i(980367);let tM=u.U.div.withConfig({displayName:"blocks.styles__NarrowColumn",componentId:"sc-9b542e02-0"})`
  box-sizing: border-box;
  width: 100%;
  max-width: calc(${ex.z} - 48px);
  margin-inline: auto;
`,tR=(0,u.U)(tM).withConfig({displayName:"blocks.styles__FaqColumn",componentId:"sc-9b542e02-1"})`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;e.i(177607);var tF=e.i(422180),tH=e.i(394497);function tA(e){return e.replace(/!\[[^\]]*\]\([^)]*\)/g,"").replace(/\[([^\]]*)\]\([^)]*\)/g,"$1").replace(/^\s{0,3}#{1,6}\s+/gm,"").replace(/(\*\*|__)(.+?)\1/g,"$2").replace(/(^|[\s(])[*_]([^*_\s][^*_]*?)[*_](?=[\s).,!?:;]|$)/g,"$1$2").replace(/\s+/g," ").trim()}let tP=e=>e.split(/(?<=[.!?。！？])\s+/u).map(e=>e.trim()).filter(Boolean),tq=u.q`
  from {
    color: var(--lead-from);
  }
  to {
    color: var(--word-to, var(--lead-to));
  }
`,tG=u.m`
  [data-lead-word] {
    animation: ${tq} linear both;
    animation-timeline: --lead-statement;
    animation-range: cover calc(${18}% + var(--share, 0) * ${30}%)
      cover calc(${24}% + var(--share, 0) * ${30}%);
  }
`,tE=u.U.div.withConfig({displayName:"LeadStatement.styles__Root",componentId:"sc-d0290513-0"})`
  ${({theme:e})=>{let t=(0,eg.j)(e),a=e.palette.site;return u.m`
    --lead-from: ${t?`color-mix(in srgb, ${a.muted} 45%, transparent)`:a.border};
    --lead-to: ${t?a.heading:a.navy};
    --lead-green: ${a.greenText};
  `}}
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({theme:e})=>e.margin.default};
  width: 100%;
  max-width: calc(${ex.z} * 1.25);
  margin-inline: auto;
  text-align: center;
  view-timeline-name: --lead-statement;

  /* Vor dem Einhängen und im Modus scroll: rein per CSS, ohne Flackern beim Laden */
  &:is([data-mode='pending'], [data-mode='scroll']) {
    @media (prefers-reduced-motion: no-preference) {
      @supports (animation-timeline: view()) {
        ${tG}
      }
    }
  }

  /* Rückfall ohne Scroll-Zeitachse: grau, bis der Satz durch die Mitte läuft */
  &[data-mode='observer'] [data-lead-word] {
    color: var(--lead-from);
    transition: color ${420}ms ease-out;
    transition-delay: calc(var(--word, 0) * ${35}ms);
  }

  &[data-mode='observer'][data-lit='true'] [data-lead-word] {
    color: var(--word-to, var(--lead-to));
  }

  @media (prefers-reduced-motion: reduce) {
    [data-lead-word] {
      animation: none;
      transition: none;
      color: var(--word-to, var(--lead-to));
    }
  }
`,tW=u.U.p.withConfig({displayName:"LeadStatement.styles__Statement",componentId:"sc-d0290513-1"})`
  margin: 0;
  font-family: ${({theme:e})=>e.font.primaryFamily};
  font-weight: 700;
  letter-spacing: -0.01em;
  text-wrap: balance;
  overflow-wrap: break-word;
  ${({$long:e})=>e?u.m`
          font-size: clamp(1.375rem, 1.1rem + 0.9vw, 1.75rem);
          line-height: 1.4;
        `:u.m`
          font-size: clamp(1.75rem, 1.1rem + 2.2vw, 3rem);
          line-height: 1.2;
        `}
`,tK=u.U.span.withConfig({displayName:"LeadStatement.styles__Word",componentId:"sc-d0290513-2"})`
  color: var(--word-to, var(--lead-to));
`,tY=u.U.p.withConfig({displayName:"LeadStatement.styles__ShortLine",componentId:"sc-d0290513-3"})`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  column-gap: ${({theme:e})=>e.margin.small};
  row-gap: ${({theme:e})=>e.margin.extrasmall};
  margin: 0;
  font-family: ${({theme:e})=>e.font.primaryFamily};
  font-size: clamp(1.125rem, 0.95rem + 0.7vw, 1.5rem);
  font-weight: 700;
  line-height: 1.3;
  --word-to: var(--lead-green);
`,tD=u.U.div.withConfig({displayName:"LeadStatement.styles__Rest",componentId:"sc-d0290513-4"})`
  ${ex.b}
  max-width: ${ex.z};
  font-size: 18px;
  line-height: 30px;
`;function tV({text:e,motion:i=!0,onFirstView:n,dataTestId:r="lead-statement"}){let s=(0,a.useMemo)(()=>(function(e){let[t="",...a]=e.split(/\n\s*\n/).map(tA).filter(Boolean),i=[],n=[];for(let e of a)0===i.length&&function(e){let t=tP(e);return t.length>=2&&t.length<=5&&t.every(e=>e.split(/\s+/).filter(Boolean).length<=5)}(e)?i=tP(e):n.push(e);return{lead:t,short:i,rest:n,long:t.length>160}})(e),[e]),o=(0,a.useRef)(null),l=(0,A.f)(),d=(0,tH.f)(o,0,"-35% 0px -35% 0px"),[c,m]=(0,a.useState)("pending"),[p,h]=(0,a.useState)(!1);(0,a.useEffect)(()=>{m(!i||l?"static":"u">typeof CSS&&"function"==typeof CSS.supports&&CSS.supports("animation-timeline: view()")?"scroll":"observer")},[i,l]);let f=(0,a.useRef)(n);if((0,a.useEffect)(()=>{f.current=n}),(0,a.useEffect)(()=>{d&&!p&&(h(!0),f.current?.())},[d,p]),!s.lead)return null;let u=s.lead.split(/\s+/).filter(Boolean),g=u.length+s.short.length,x=e=>({"--word":e,"--share":(g>1?e/(g-1):0).toFixed(3)});return(0,t.jsxs)(tE,{ref:o,"data-testid":r,"data-mode":c,"data-lit":p?"true":"false",children:[(0,t.jsx)(tW,{$long:s.long,"data-long":s.long?"true":"false","data-testid":`${r}-statement`,children:u.map((e,i)=>(0,t.jsxs)(a.default.Fragment,{children:[(0,t.jsx)(tK,{"data-lead-word":"","data-testid":`${r}-word-${i}`,style:x(i),children:e}),i<u.length-1?" ":null]},i))}),s.short.length>0&&(0,t.jsx)(tY,{"data-testid":`${r}-short`,children:s.short.map((e,a)=>(0,t.jsx)(tK,{"data-lead-word":"","data-testid":`${r}-short-${a}`,style:x(u.length+a),children:e},a))}),s.rest.length>0&&(0,t.jsx)(tD,{"data-testid":`${r}-rest`,children:s.rest.map((e,a)=>(0,t.jsx)("p",{children:e},a))})]})}function tZ({block:e,locale:i,dataTestId:n}){let r=(0,et.l)("leadText"),o=(0,a.useCallback)(()=>r("view"),[r]),l=(0,s.u)(e.props.content,i),d=`${n}-lead`;return(0,t.jsx)(et.A,{element:"leadText",fallback:(0,t.jsx)(tV,{text:l,motion:!1,dataTestId:d}),children:(0,t.jsx)(tV,{text:l,onFirstView:o,dataTestId:d})})}e.i(155892);var tO=e.i(529080),tX=e.i(687312);let tJ={face:{start:0,duration:450},rim:{start:100,duration:700},roll:{start:200,duration:1200,digitStagger:90},fill:{start:200,duration:1300},seal:{start:500,duration:700},shimmer:{start:1500,duration:700}},tQ=(e,t)=>tJ[e].start+150*t;function t0(e){let t=Math.max(1,e);return{phone:1===t?1:2,tablet:4===t?2:Math.min(t,3),desktop:Math.min(t,4)}}let t1=e=>`${e}ms`,t2=(e,t)=>`${t1(tJ[e].duration)} ${t1(tQ(e,t))}`,t5=u.q`
  from { opacity: 0; transform: scale(0.85); }
  to { opacity: 1; transform: scale(1); }
`,t6=u.q`
  from { stroke-dashoffset: 1; }
  to { stroke-dashoffset: 0; }
`,t4=u.q`
  from { transform: scaleY(0); }
  to { transform: scaleY(1); }
`,t3=u.q`
  0% { transform: translateX(-100px); opacity: 0; }
  15% { opacity: 1; }
  85% { opacity: 1; }
  100% { transform: translateX(100px); opacity: 0; }
`,t7=e=>u.m`
  flex-basis: calc((100% - ${e-1} * var(--hex-counter-gap)) / ${e});
`,t9=u.U.ul.withConfig({displayName:"HexCounter.styles__List",componentId:"sc-718d90a0-0"})`
  --hex-counter-gap: ${({theme:e})=>e.margin.large};
  --hex-face: ${({theme:e})=>e.palette.site.tint};
  --hex-rim: ${({theme:e})=>e.palette.site.border};
  --hex-pellet: ${({theme:e})=>e.palette.site.green};
  --hex-pellet-opacity: 0.3;
  --hex-value: ${({theme:e})=>(0,ex.N)("accent",e.palette.site.blue)};
  --hex-check: ${({theme:e})=>e.palette.site.green};

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${({theme:e})=>e.margin.large} var(--hex-counter-gap);
  margin: 0;
  padding: 0;
  list-style: none;

  &[data-surface='tint'] {
    --hex-face: ${({theme:e})=>e.palette.site.card};
  }

  &[data-tone='band'] {
    --hex-face: color-mix(in srgb, #ffffff 8%, transparent);
    --hex-rim: color-mix(in srgb, #ffffff 32%, transparent);
    --hex-pellet-opacity: 0.32;
    --hex-check: var(--hex-value);
  }

  @media (min-width: 640px) {
    row-gap: ${({theme:e})=>e.margin.big};
  }

  > li {
    ${({$count:e})=>t7(t0(e).phone)}

    @media (min-width: 640px) {
      ${({$count:e})=>t7(t0(e).tablet)}
    }

    @media (min-width: ${({theme:e})=>e.device.tablet}) {
      ${({$count:e})=>t7(t0(e).desktop)}
    }
  }
`,t8=u.U.li.withConfig({displayName:"HexCounter.styles__Item",componentId:"sc-718d90a0-1"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({theme:e})=>e.margin.small};
  min-width: 0;
  max-width: 22rem;
  text-align: center;
`,ae=u.U.div.withConfig({displayName:"HexCounter.styles__Figure",componentId:"sc-718d90a0-2"})`
  position: relative;
  width: 9rem;
  aspect-ratio: 1;
  container-type: inline-size;
  transition: transform 300ms ${e$.S};

  @media (min-width: 640px) {
    width: 10rem;
  }

  @media (min-width: ${({theme:e})=>e.device.tablet}) {
    width: 12rem;
  }

  /* Kippen wie die Neigung von Siegel und Kreislauf — nur mit feinem Zeiger, nach dem Eintritt */
  ${"@media (hover: hover) and (pointer: fine)"} {
    [data-state='ready'] ${t8}:hover & {
      transform: perspective(600px) rotateX(10deg) rotateY(-14deg);
    }
  }
`,at=u.U.svg.withConfig({displayName:"HexCounter.styles__Svg",componentId:"sc-718d90a0-3"})`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: visible;
`,aa=u.U.path.withConfig({displayName:"HexCounter.styles__Face",componentId:"sc-718d90a0-4"})`
  fill: var(--hex-face);
  transform-origin: 50px 50px;

  [data-state='idle'] & {
    opacity: 0;
  }
  [data-state='running'] & {
    animation: ${t5} ${({$index:e})=>t2("face",e)} ${e$.S} both;
  }
`,ai=u.U.path.withConfig({displayName:"HexCounter.styles__Rim",componentId:"sc-718d90a0-5"})`
  fill: none;
  stroke: var(--hex-rim);
  stroke-width: 1.5;
  stroke-dasharray: 1 1;
  stroke-dashoffset: 0;

  [data-state='idle'] & {
    stroke-dashoffset: 1;
  }
  [data-state='running'] & {
    animation: ${t6} ${({$index:e})=>t2("rim",e)} ${e$.B} both;
  }
`,an=u.U.rect.withConfig({displayName:"HexCounter.styles__Pellets",componentId:"sc-718d90a0-6"})`
  opacity: var(--hex-pellet-opacity);
  transform-box: fill-box;
  transform-origin: 50% 100%;

  [data-state='idle'] & {
    transform: scaleY(0);
  }
  [data-state='running'] & {
    animation: ${t4} ${({$index:e})=>t2("fill",e)} ${e$.B} both;
  }
  /* „Bewegung reduzieren": Endwerte, keine Füllung */
  [data-state='static'] & {
    display: none;
  }
`,ar=u.U.circle.withConfig({displayName:"HexCounter.styles__Pellet",componentId:"sc-718d90a0-7"})`
  fill: var(--hex-pellet);
`,as=u.U.rect.withConfig({displayName:"HexCounter.styles__Shimmer",componentId:"sc-718d90a0-8"})`
  opacity: 0;

  [data-state='running'] & {
    animation: ${t3} ${({$index:e})=>t2("shimmer",e)} linear both;
  }
`,ao=u.U.path.withConfig({displayName:"HexCounter.styles__SealRing",componentId:"sc-718d90a0-9"})`
  fill: none;
  stroke: var(--hex-check);
  stroke-width: 2.5;
  stroke-dasharray: 1 1;
  stroke-dashoffset: 0;

  [data-state='idle'] & {
    stroke-dashoffset: 1;
  }
  [data-state='running'] & {
    animation: ${t6} ${({$index:e})=>t2("seal",e)} ${e$.B} both;
  }
`,al=u.U.path.withConfig({displayName:"HexCounter.styles__SealCheck",componentId:"sc-718d90a0-10"})`
  fill: none;
  stroke: var(--hex-check);
  stroke-width: 4;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 1 1;
  stroke-dashoffset: 0;

  [data-state='idle'] & {
    stroke-dashoffset: 1;
  }
  [data-state='running'] & {
    animation: ${t6} ${({$index:e})=>`${t1(tJ.seal.duration/2)} ${t1(tQ("seal",e)+tJ.seal.duration/2)}`}
      ${e$.S} both;
  }
`,ad=u.U.span.withConfig({displayName:"HexCounter.styles__Value",componentId:"sc-718d90a0-11"})`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${({theme:e})=>e.font.primaryFamily};
  font-weight: 700;
  line-height: 1;
  color: var(--hex-value);

  ${({$chars:e,$seal:t})=>t?u.m`
          align-items: flex-end;
          padding-bottom: 20cqi;
          font-size: min(1rem, ${(118/Math.max(1,e)).toFixed(2)}cqi);
          letter-spacing: 0.04em;
          text-transform: uppercase;
        `:u.m`
          font-size: min(2rem, ${(132/Math.max(1,e)).toFixed(2)}cqi);

          @media (min-width: 640px) {
            font-size: min(2.25rem, ${(132/Math.max(1,e)).toFixed(2)}cqi);
          }

          @media (min-width: ${({theme:e})=>e.device.tablet}) {
            font-size: min(2.75rem, ${(132/Math.max(1,e)).toFixed(2)}cqi);
          }
        `}
`,ac=u.U.span.withConfig({displayName:"HexCounter.styles__Label",componentId:"sc-718d90a0-12"})`
  font-family: ${({theme:e})=>e.font.primaryFamily};
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 1.4;
  color: ${({theme:e})=>(0,ex.N)("heading",e.palette.site.heading)};
  hyphens: manual;
  overflow-wrap: normal;
  text-wrap: balance;

  @media (min-width: 640px) {
    font-size: 1.25rem;
  }
`,am=u.U.span.withConfig({displayName:"HexCounter.styles__Detail",componentId:"sc-718d90a0-13"})`
  font-family: ${({theme:e})=>e.font.secondaryFamily};
  font-size: 1rem;
  line-height: 1.5;
  color: ${({theme:e})=>(0,ex.N)("muted",e.palette.site.muted)};
  hyphens: manual;
  text-wrap: balance;
`,ap=(0,ei.e)({x:2,y:2,width:96,height:96},(0,ei.C)(96)),ah=(0,ei.e)({x:30,y:14,width:40,height:40},(0,ei.C)(40)),af=({items:e,surface:i="white",onFirstView:n,onFirstTilt:r,className:s,dataTestId:o="hex-counter"})=>{let l=(0,a.useRef)(null),d=(0,a.useMemo)(()=>Math.max(0,...e.map(e=>(0,tX.B)(e.value))),[e]),{state:c,visible:m}=(0,S.f)(l,function(e,t){if(e<=0)return 0;let a=e-1,{roll:i,shimmer:n,seal:r}=tJ;return Math.max(tQ("roll",a)+Math.max(0,t-1)*i.digitStagger+i.duration,tQ("shimmer",a)+n.duration,tQ("seal",a)+r.duration)}(e.length,d)),p=(0,a.useId)().replace(/[^a-zA-Z0-9_-]/g,""),h=(0,a.useRef)(!1);(0,a.useEffect)(()=>{m&&!h.current&&(h.current=!0,n?.())},[m,n]);let f=e=>{"mouse"===e.pointerType&&"ready"===c&&r?.()};return(0,t.jsx)(t9,{ref:l,className:s,$count:e.length,"data-testid":`${o}-grid-list`,"data-count":e.length,"data-state":c,"data-visible":m?"true":"false","data-tone":"dark"===i?"band":"plain","data-surface":i,"data-element":"stats",children:e.map((e,a)=>{let i=!(0,tX.S)(e.value),n=`${o}-stat-${a}`;return(0,t.jsxs)(t8,{"data-testid":`${o}-grid-item`,onPointerEnter:f,children:[(0,t.jsxs)(ae,{"data-testid":n,"data-kind":i?"seal":"number",children:[(0,t.jsxs)(at,{viewBox:"0 0 100 100","aria-hidden":"true",focusable:"false",children:[(0,t.jsxs)("defs",{children:[(0,t.jsx)("clipPath",{id:`${p}-wabe-${a}`,children:(0,t.jsx)("path",{d:ap})}),(0,t.jsxs)("pattern",{id:`${p}-pellets-${a}`,width:"8",height:"7",patternUnits:"userSpaceOnUse",children:[(0,t.jsx)(ar,{cx:"2",cy:"1.75",r:"1.5"}),(0,t.jsx)(ar,{cx:"6",cy:"5.25",r:"1.5"})]}),(0,t.jsxs)("linearGradient",{id:`${p}-schimmer-${a}`,x1:"0",x2:"1",y1:"0",y2:"0",children:[(0,t.jsx)("stop",{offset:"0",stopColor:"#fff",stopOpacity:"0"}),(0,t.jsx)("stop",{offset:"0.5",stopColor:"#fff",stopOpacity:"0.35"}),(0,t.jsx)("stop",{offset:"1",stopColor:"#fff",stopOpacity:"0"})]})]}),(0,t.jsx)(aa,{d:ap,$index:a}),(0,t.jsxs)("g",{clipPath:`url(#${p}-wabe-${a})`,children:[(0,t.jsx)(an,{x:"0",y:"0",width:"100",height:"100",fill:`url(#${p}-pellets-${a})`,$index:a}),(0,t.jsx)(as,{x:"0",y:"0",width:"40",height:"100",fill:`url(#${p}-schimmer-${a})`,$index:a})]}),(0,t.jsx)(ai,{d:ap,pathLength:1,$index:a}),i&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(ao,{d:ah,pathLength:1,$index:a}),(0,t.jsx)(al,{d:"M41 34 L47.5 40.5 L59 28",pathLength:1,$index:a})]})]}),(0,t.jsx)(ad,{"data-testid":`${n}-value`,"data-numeric":i?"false":"true",$chars:Array.from(e.value).length,$seal:i,children:i?e.value:(0,t.jsx)(tO.f,{value:e.value,state:c,delay:tQ("roll",a),stagger:tJ.roll.digitStagger,duration:tJ.roll.duration,dataTestId:`${n}-odometer`})})]}),(0,t.jsx)(ac,{"data-testid":`${n}-label`,children:e.label}),e.detail&&(0,t.jsx)(am,{"data-testid":`${n}-detail`,children:e.detail})]},a)})})},au=u.U.div.withConfig({displayName:"StatsBlock__Root",componentId:"sc-8ab0af8b-0"})`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.margin.big};
`,ag=u.U.ul.withConfig({displayName:"StatsBlock__Fallback",componentId:"sc-8ab0af8b-1"})`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${({theme:e})=>e.margin.large};
  margin: 0;
  padding: 0;
  list-style: none;
  color: ${({theme:e})=>(0,ex.N)("heading",e.palette.site.heading)};
`;var ax=e.i(325164);e.i(821194);var a$=e.i(99222);e.i(396971);var ab=e.i(227319);e.i(239178);var ay=e.i(593736),aw=e.i(437992);let av=e=>({base:Math.min(e,3),sm:Math.min(e,3),lg:e}),ak=(e,t)=>{let a=[],i=Math.max(1,t),n=Math.max(1,t-1),r=Math.max(0,e);for(;r>0;){let e=Math.min(a.length%2==0?i:n,r);a.push(e),r-=e}return a},aj=(e,t)=>{let a=[];return ak(e,t).forEach((e,i)=>{let n=t-e,r=n+1+ +(n%2!=i%2);for(let t=0;t<e;t++)a.push({row:i,col:r+2*t})}),a},a_=e=>Math.round(100*e)/100,aC="(max-width: 639.98px) and (prefers-reduced-motion: no-preference)",aI="6rem",aN=(e,t,a)=>u.m`
  grid-template-columns: repeat(${2*t}, minmax(0, 1fr));
  max-width: calc(${t} * ${168}px + ${t-1} * ${a});
  /* Prozent = Breite des Abschnitts; die Kachel ist höchstens TILE_MAX_PX breit */
  padding-bottom: calc(min(${168}px, (100% - ${t-1} * ${a}) / ${t}) / 4);

  > li {
    ${Array.from({length:2*t-1},(t,a)=>`&[data-col-${e}='${a+1}'] { grid-column: ${a+1} / span 2; }`).join("\n")}
  }
`,aT=u.m`
  --wall-ring: ${({theme:e})=>e.palette.site.border};
  --wall-face: ${({theme:e})=>e.palette.site.logoPlate};
`,aU=u.m`
  --wall-ring: rgb(255 255 255 / 0.22);
  --wall-face: color-mix(in srgb, ${({theme:e})=>e.palette.site.navy} 82%, #ffffff);
`,aL=u.U.section.withConfig({displayName:"HexLogoWall.styles__Root",componentId:"sc-56a3e0f0-0"})`
  ${({theme:e})=>(0,eg.j)(e)?aU:aT}
  --wall-ring-hover: ${({theme:e})=>e.palette.site.green};
  --wall-face-hover: ${({theme:e})=>e.palette.site.logoPlate};

  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.margin.large};
  width: 100%;
  background-color: transparent;

  &[data-dark='true'] {
    ${aU}
  }
`,aS=e=>u.m`
  ${({theme:t})=>(0,eg.j)(t)?e:""}
  [data-dark='true'] & {
    ${e}
  }
`,az=u.U.ul.withConfig({displayName:"HexLogoWall.styles__Wall",componentId:"sc-56a3e0f0-1"})`
  display: grid;
  column-gap: ${({theme:e})=>e.margin.small};
  row-gap: ${({theme:e})=>e.margin.extrasmall};
  width: 100%;
  margin: 0 auto;
  padding: 0;
  list-style: none;
  ${({$columns:e,theme:t})=>{let a=av(e);return u.m`
      ${aN("base",a.base,t.margin.small)}

      @media (min-width: ${"640px"}) {
        ${aN("sm",a.sm,t.margin.small)}
      }

      @media (min-width: ${"1024px"}) {
        ${aN("lg",a.lg,t.margin.small)}
      }
    `}}

  /* #2199: am Telefon mit Bewegung läuft stattdessen das Band */
  @media ${aC} {
    ${aL}[data-state='pending'] &,
    ${aL}[data-state='idle'] &,
    ${aL}[data-state='running'] &,
    ${aL}[data-state='ready'] & {
      display: none;
    }
  }
`,aB=u.q`
  from {
    opacity: 0;
    transform: translate(calc(var(--wall-dx) * 60%), calc(var(--wall-dy) * 60%)) scale(0.9);
  }
  to {
    opacity: 1;
    transform: none;
  }
`,aM=u.U.li.withConfig({displayName:"HexLogoWall.styles__Slot",componentId:"sc-56a3e0f0-2"})`
  --wall-dx: ${({$dx:e})=>e};
  --wall-dy: ${({$dy:e})=>e};
  min-width: 0;
  margin-bottom: -25%;

  /* #2199: Eintritt — die Waben fügen sich vom Rand her zusammen */
  ${aL}[data-state='idle'] & {
    opacity: 0;
  }
  ${aL}[data-state='running'] & {
    animation: ${aB} ${600}ms ${e$.S} ${({$delay:e})=>e}ms both;
  }
`,aR=u.U.div.withConfig({displayName:"HexLogoWall.styles__Tile",componentId:"sc-56a3e0f0-3"})`
  position: relative;
  aspect-ratio: 1;
  transition: transform 200ms ease;

  li:hover > &,
  li:focus-within > & {
    transform: translateY(-${4}px);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    li:hover > &,
    li:focus-within > & {
      transform: none;
    }
  }
`,aF=u.U.span.withConfig({displayName:"HexLogoWall.styles__Ring",componentId:"sc-56a3e0f0-4"})`
  position: absolute;
  inset: 0;
  ${g.p}
  background: var(--wall-ring);
  transition: background-color 200ms ease;

  li:hover &,
  li:focus-within & {
    background: var(--wall-ring-hover);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,aH=u.U.span.withConfig({displayName:"HexLogoWall.styles__Face",componentId:"sc-56a3e0f0-5"})`
  position: absolute;
  inset: ${2}px;
  ${g.p}
  background: var(--wall-face);
  transition: background-color 200ms ease;

  ${aS(u.m`
    inset: 1px;
  `)}

  li:hover &,
  li:focus-within & {
    background: var(--wall-face-hover);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,aA=u.U.span.withConfig({displayName:"HexLogoWall.styles__Logo",componentId:"sc-56a3e0f0-6"})`
  /* Einzug statt translate: ein transform hier wäre ein eigener Stapelkontext, und
     mix-blend-mode fände die Fläche darunter nicht mehr */
  position: absolute;
  inset: ${"19%"};

  img {
    object-fit: contain;
    /* Logos mit weißem Grund (TecPart, NHS) gehen in der Fläche auf statt als Kasten zu stehen */
    mix-blend-mode: multiply;
    filter: grayscale(1);
    opacity: 0.8;
    transition:
      filter 200ms ease,
      opacity 200ms ease;
  }

  /* #2199: dunkel — umgekehrt und „screen": weißer Grund verschwindet, Schrift wird hell */
  ${aS(u.m`
    img {
      mix-blend-mode: screen;
      filter: grayscale(1) invert(1);
      opacity: 0.9;
    }
  `)}

  li:hover & img,
  li:focus-within & img {
    mix-blend-mode: multiply;
    filter: none;
    opacity: 1;
  }

  @media (prefers-reduced-motion: reduce) {
    img {
      transition: none;
    }
  }
`,aP=u.U.a.withConfig({displayName:"HexLogoWall.styles__LogoLink",componentId:"sc-56a3e0f0-7"})`
  position: absolute;
  inset: 0;
  display: block;
  border-radius: 24px;

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.palette.site.green};
    outline-offset: 2px;
  }
`,aq=u.q`
  from { transform: translateX(0); }
  to { transform: translateX(calc(-1 * var(--wall-marquee-shift))); }
`,aG=u.U.div.withConfig({displayName:"HexLogoWall.styles__Marquee",componentId:"sc-56a3e0f0-8"})`
  display: none;
  overflow: hidden;
  /* Auslaufen an den Rändern statt harter Kante */
  mask-image: linear-gradient(to right, transparent, #000 8%, #000 92%, transparent);

  @media ${aC} {
    ${aL}[data-state='pending'] &,
    ${aL}[data-state='idle'] &,
    ${aL}[data-state='running'] &,
    ${aL}[data-state='ready'] & {
      display: block;
    }
  }
`,aE=u.U.ul.withConfig({displayName:"HexLogoWall.styles__MarqueeTrack",componentId:"sc-56a3e0f0-9"})`
  --wall-marquee-shift: calc(${({$count:e})=>e} * (${aI} + ${({theme:e})=>e.margin.small}));
  display: flex;
  gap: ${({theme:e})=>e.margin.small};
  /* so breit wie das Band; die Kacheln laufen darüber hinaus und werden vom
     Band beschnitten — keine Box breiter als die Ansicht (Wächter
     public-no-horizontal-scroll) */
  width: 100%;
  margin: 0;
  padding: ${({theme:e})=>e.margin.extrasmall} 0;
  list-style: none;
  animation: ${aq} ${({$count:e})=>3500*Math.max(4,e)}ms linear infinite;

  [data-paused='true'] > &,
  ${aG}:hover > &,
  ${aG}:active > &,
  ${aG}:focus-within > &,
  ${aL}[data-visible='false'] & {
    animation-play-state: paused;
  }
`,aW=u.U.li.withConfig({displayName:"HexLogoWall.styles__MarqueeItem",componentId:"sc-56a3e0f0-10"})`
  flex: 0 0 ${aI};
  width: ${aI};
`,aK=u.U.button.withConfig({displayName:"HexLogoWall.styles__MarqueeToggle",componentId:"sc-56a3e0f0-11"})`
  display: none;
  align-self: center;
  align-items: center;
  justify-content: center;
  width: 2.75rem;
  height: 2.75rem;
  padding: 0;
  border: 1px solid var(--wall-ring);
  border-radius: 50%;
  background: transparent;
  color: ${({theme:e})=>e.palette.site.heading};
  cursor: pointer;

  ${aL}[data-dark='true'] & {
    color: #ffffff;
  }

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.palette.site.green};
    outline-offset: 2px;
  }

  @media ${aC} {
    [data-state='pending'] > &,
    [data-state='idle'] > &,
    [data-state='running'] > &,
    [data-state='ready'] > & {
      display: inline-flex;
    }
  }
`,aY=({item:e,testId:a,sizes:i})=>(0,t.jsx)(aA,{children:(0,t.jsx)(ax.default,{src:e.logoUrl,alt:`${e.companyName} logo`,fill:!0,sizes:i,"data-testid":a})}),aD=e=>{let{items:i,columns:n,headline:r,description:s,surface:o,onFirstView:l,onFirstHover:d,onMarqueeToggle:c,className:m,dataTestId:p="hex-logo-wall",itemDataTestIdPrefix:h}=e,{tr:f}=(0,a$.f)(),u=h??p,g=av(n),x={base:aj(i.length,g.base),sm:aj(i.length,g.sm),lg:aj(i.length,g.lg)},$=((e,t)=>{if(0===e.length)return[];let a={x:t/2,y:(Math.max(...e.map(e=>e.row))+1-1)/2},i=e.map(e=>({x:e.col/2-a.x,y:e.row-a.y})),n=Math.max(...i.map(e=>Math.hypot(e.x,e.y)),1e-4);return i.map(e=>{let t=Math.hypot(e.x,e.y),a=t<.01?{x:0,y:1}:{x:e.x/t,y:e.y/t},i=Math.round((1-t/n)*4);return{dx:a_(a.x),dy:a_(a.y),delay:120*Math.min(4,i)}})})(x.lg,g.lg),b=(0,a.useRef)(null),{state:w,visible:v}=(0,S.f)(b,1080,.2),k=(0,a.useRef)(!1);(0,a.useEffect)(()=>{v&&!k.current&&(k.current=!0,l?.())},[v,l]);let j=(0,a.useRef)(!1),_=(0,a.useCallback)(e=>{"mouse"!==e.pointerType||j.current||(j.current=!0,d?.())},[d]),[C,I]=(0,a.useState)(!1),N=(0,a.useCallback)(()=>{let e=!C;I(e),c?.(e)},[C,c]);return(0,t.jsxs)(aL,{ref:b,className:m,"data-testid":p,"data-columns":n,"data-count":i.length,"data-rows":ak(i.length,g.lg).length,"data-state":w,"data-visible":v?"true":"false","data-dark":"dark"===o?"true":"false",children:[(0,t.jsx)(y.f,{headline:r,description:s,align:"center",dataTestId:`${p}-header`}),(0,t.jsx)(az,{$columns:n,"data-testid":`${p}-wall`,children:i.map((e,a)=>{let i=`${u}-partner-${a}`,n=(0,t.jsx)(aY,{item:e,testId:`${i}-logo`,sizes:"(max-width: 640px) 30vw, 130px"});return(0,t.jsx)(aM,{"data-testid":i,"data-row":x.lg[a].row,"data-col-base":x.base[a].col,"data-col-sm":x.sm[a].col,"data-col-lg":x.lg[a].col,$dx:$[a].dx,$dy:$[a].dy,$delay:$[a].delay,onPointerEnter:_,children:(0,t.jsxs)(aR,{children:[(0,t.jsx)(aF,{"aria-hidden":"true"}),(0,t.jsx)(aH,{"aria-hidden":"true"}),e.websiteUrl?(0,t.jsx)(aP,{href:e.websiteUrl,...aw.d,"aria-label":e.companyName,"data-testid":`${i}-link`,children:n}):n]})},a)})}),(0,t.jsx)(aG,{"data-testid":`${p}-marquee`,"data-paused":C?"true":"false",children:(0,t.jsx)(aE,{"data-part":"track",$count:i.length,children:[0,1].map(e=>i.map((a,i)=>{let n=1===e,r=(0,t.jsx)(aY,{item:a,sizes:"96px"});return(0,t.jsx)(aW,{"aria-hidden":n?"true":void 0,"data-testid":n?void 0:`${u}-marquee-partner-${i}`,children:(0,t.jsxs)(aR,{children:[(0,t.jsx)(aF,{"aria-hidden":"true"}),(0,t.jsx)(aH,{"aria-hidden":"true"}),a.websiteUrl?(0,t.jsx)(aP,{href:a.websiteUrl,...aw.d,"aria-label":a.companyName,tabIndex:n?-1:void 0,children:r}):r]})},`${e}-${i}`)}))})}),(0,t.jsx)(aK,{type:"button",onClick:N,"aria-pressed":C,"aria-label":C?f("imagefilm.play",{defaultValue:"Abspielen"}):f("imagefilm.pause",{defaultValue:"Pause"}),"data-testid":`${p}-marquee-toggle`,children:C?(0,t.jsx)(ay.f,{}):(0,t.jsx)(ab.f,{})})]})};e.i(4185);var aV=e.i(566457);let aZ=e=>Math.round(100*e)/100;function aO(e,t=!1){let a=Math.max(1,e),i=t?36:22,n=aZ(i+(t?14:12)),r=Array.from({length:a},(e,t)=>aZ((t+.5)/Math.max(1,a)*100)),s=aZ((i+n)/2),o=r.map(e=>`M 50 ${aZ(i)} C 50 ${s} ${e} ${s} ${e} ${n}`);return{width:100,height:n,center:{cx:50,top:0,size:i},ends:r,lines:o}}var aX=e.i(764576);let aJ=[{id:"center",start:0,duration:500},{id:"lines",start:350,duration:800,count:4,stagger:180},{id:"members",start:900,duration:450,count:4,stagger:180}];(0,aX.L)(aJ);let aQ=(0,aX.E)(aJ),a0="640px",a1=e=>`${e}ms`,a2=(0,aX.G)(aJ,"center"),a5=(0,aX.G)(aJ,"lines"),a6=(0,aX.G)(aJ,"members"),a4=u.q`
  from { opacity: 0; transform: scale(0.7); }
  to { opacity: 1; transform: scale(1); }
`,a3=u.q`
  from { stroke-dashoffset: 1; }
  to { stroke-dashoffset: 0; }
`,a7=u.m`
  --wall-ring: ${({theme:e})=>e.palette.site.border};
  --wall-face: ${({theme:e})=>e.palette.site.logoPlate};
`,a9=u.m`
  --wall-ring: rgb(255 255 255 / 0.22);
  --wall-face: color-mix(in srgb, ${({theme:e})=>e.palette.site.navy} 82%, #ffffff);
`,a8=u.U.section.withConfig({displayName:"PartnerGroup.styles__Root",componentId:"sc-ad331ac6-0"})`
  ${({theme:e})=>(0,eg.j)(e)?a9:a7}
  --wall-ring-hover: ${({theme:e})=>e.palette.site.green};
  --wall-face-hover: ${({theme:e})=>e.palette.site.logoPlate};
  --group-line: ${({theme:e})=>(0,eg.j)(e)?e.palette.site.muted:e.palette.site.border};
  --group-line-active: ${({theme:e})=>e.palette.site.green};
  --group-heading: ${({theme:e})=>(0,ex.N)("heading",e.palette.site.heading)};
  --group-text: ${({theme:e})=>(0,ex.N)("text",e.palette.site.text)};
  --group-muted: ${({theme:e})=>(0,ex.N)("muted",e.palette.site.muted)};

  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.margin.large};
  width: 100%;

  &[data-dark='true'] {
    ${a9}
    --group-line: rgb(255 255 255 / 0.35);
  }
`,ie=u.U.div.withConfig({displayName:"PartnerGroup.styles__Stage",componentId:"sc-ad331ac6-1"})`
  position: relative;
  width: 100%;
  max-width: 56rem;
  margin: 0 auto;
  aspect-ratio: ${({$compact:e})=>`${e.width} / ${e.height}`};

  @media (min-width: ${a0}) {
    aspect-ratio: ${({$wide:e})=>`${e.width} / ${e.height}`};
  }
`,it=u.U.svg.withConfig({displayName:"PartnerGroup.styles__Lines",componentId:"sc-ad331ac6-2"})`
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
  overflow: visible;

  /* Strichstärke in viewBox-Einheiten (Breite 100): die Bühne skaliert
     gleichmäßig, darum ohne non-scaling-stroke — der bräche pathLength und
     damit das Zeichnen. Breit ≈ 900 px → 0,22 ≈ 2 px, kompakt ≈ 360 px → 0,55. */
  --group-stroke: 0.55;

  &[data-variant='wide'] {
    display: none;
    --group-stroke: 0.22;
  }
  @media (min-width: ${a0}) {
    &[data-variant='wide'] {
      display: block;
    }
    &[data-variant='compact'] {
      display: none;
    }
  }
`,ia=u.U.path.withConfig({displayName:"PartnerGroup.styles__Line",componentId:"sc-ad331ac6-3"})`
  fill: none;
  stroke: var(--group-line);
  stroke-width: var(--group-stroke);
  stroke-linecap: round;
  stroke-dasharray: 1 1;
  stroke-dashoffset: 0;
  transition:
    stroke 200ms ease,
    stroke-width 200ms ease;

  ${a8}[data-state='idle'] & {
    stroke-dashoffset: 1;
  }
  ${({$index:e})=>u.m`
  ${a8}[data-state='running'] & {
    animation: ${a3} ${a1((0,aX.g)(a5,e).duration)} ${e$.B} ${a1((0,aX.g)(a5,e).delay)}
      both;
  }
`}

  &[data-active='true'] {
    stroke: var(--group-line-active);
    stroke-width: calc(var(--group-stroke) * 1.5);
  }
`,ii=u.U.path.withConfig({displayName:"PartnerGroup.styles__Pulse",componentId:"sc-ad331ac6-4"})`
  fill: none;
  stroke: var(--group-line-active);
  stroke-width: calc(var(--group-stroke) * 2);
  stroke-linecap: round;
  stroke-dasharray: ${.12} ${1.88};
  stroke-dashoffset: ${1.12};
  opacity: 0;

  ${a8}[data-state='ready'] & {
    animation: ${({$count:e})=>{let t;return t=Math.round(100/Math.max(1,e)*100)/100,u.q`
    0% { stroke-dashoffset: ${1.12}; opacity: 0; }
    ${.1*t}% { opacity: 1; }
    ${.9*t}% { opacity: 1; }
    ${t}% { stroke-dashoffset: ${-.12}; opacity: 0; }
    100% { stroke-dashoffset: ${-.12}; opacity: 0; }
  `}} ${({$count:e})=>a1(2400*e)} linear infinite;
    animation-delay: ${({$index:e})=>a1(2400*e)};
  }
  ${a8}[data-state='ready'][data-visible='false'] & {
    animation-play-state: paused;
  }
`,ir=u.U.div.withConfig({displayName:"PartnerGroup.styles__Center",componentId:"sc-ad331ac6-5"})`
  position: absolute;
  top: 0;
  left: 50%;
  width: ${({$compact:e})=>e.center.size}%;
  transform: translateX(-50%);

  @media (min-width: ${a0}) {
    width: ${({$wide:e})=>e.center.size}%;
  }

  ${a8}[data-state='idle'] & {
    opacity: 0;
  }
  ${a8}[data-state='running'] & {
    animation: ${a4} ${a1(a2.duration)} ${e$.S} ${a1(a2.start)} both;
  }
`,is=e=>Math.floor((100-e.center.size)/2/e.center.size*100)-8,io=u.U.div.withConfig({displayName:"PartnerGroup.styles__CenterCaption",componentId:"sc-ad331ac6-6"})`
  position: absolute;
  top: 50%;
  left: calc(100% + ${({theme:e})=>e.margin.extrasmall});
  width: max-content;
  max-width: ${({$compact:e})=>is(e)}%;

  @media (min-width: ${a0}) {
    left: calc(100% + ${({theme:e})=>e.margin.small});
    max-width: min(16rem, ${({$wide:e})=>is(e)}%);
  }

  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
  text-align: left;
`,il=u.U.ul.withConfig({displayName:"PartnerGroup.styles__Members",componentId:"sc-ad331ac6-7"})`
  display: grid;
  grid-template-columns: repeat(${({$count:e})=>Math.max(1,e)}, minmax(0, 1fr));
  column-gap: ${({theme:e})=>e.margin.small};
  width: 100%;
  max-width: 56rem;
  /* die Linien enden an der Spitze der Mitglieder-Waben */
  margin: calc(-1 * ${({theme:e})=>e.margin.large}) auto 0;
  padding: 0;
  list-style: none;
`,id=u.U.li.withConfig({displayName:"PartnerGroup.styles__Member",componentId:"sc-ad331ac6-8"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.125rem;
  min-width: 0;
  text-align: center;

  ${a8}[data-state='idle'] & {
    opacity: 0;
  }
  ${({$index:e})=>u.m`
  ${a8}[data-state='running'] & {
    animation: ${a4} ${a1((0,aX.g)(a6,e).duration)} ${e$.S}
      ${a1((0,aX.g)(a6,e).delay)} both;
  }
`}

  > div:first-child {
    width: min(9rem, 80%);
    margin-bottom: ${({theme:e})=>e.margin.extrasmall};
  }
`,ic=u.U.div.withConfig({displayName:"PartnerGroup.styles__Tile",componentId:"sc-ad331ac6-9"})`
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  transition: transform 200ms ease;

  ${"@media (hover: hover) and (pointer: fine)"} {
    li:hover > &,
    li:focus-within > & {
      transform: translateY(-4px);
    }
  }
  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,im=(0,u.U)(aF).withConfig({displayName:"PartnerGroup.styles__Ring",componentId:"sc-ad331ac6-10"})``,ip=(0,u.U)(aH).withConfig({displayName:"PartnerGroup.styles__Face",componentId:"sc-ad331ac6-11"})``,ih=(0,u.U)(aA).withConfig({displayName:"PartnerGroup.styles__Logo",componentId:"sc-ad331ac6-12"})``,iu=(0,u.U)(aP).withConfig({displayName:"PartnerGroup.styles__LogoLink",componentId:"sc-ad331ac6-13"})``,ig=u.U.span.withConfig({displayName:"PartnerGroup.styles__Role",componentId:"sc-ad331ac6-14"})`
  font-family: ${({theme:e})=>e.font.secondaryFamily};
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.palette.site.greenText};

  ${a8}[data-dark='true'] & {
    color: ${({theme:e})=>e.palette.site.green};
  }
`,ix=u.U.span.withConfig({displayName:"PartnerGroup.styles__Name",componentId:"sc-ad331ac6-15"})`
  font-family: ${({theme:e})=>e.font.primaryFamily};
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.3;
  color: var(--group-heading);
  overflow-wrap: break-word;

  @media (max-width: ${a0}) {
    font-size: 0.875rem;
  }
`,i$=u.U.span.withConfig({displayName:"PartnerGroup.styles__Caption",componentId:"sc-ad331ac6-16"})`
  font-family: ${({theme:e})=>e.font.secondaryFamily};
  font-size: 0.875rem;
  line-height: 1.4;
  color: var(--group-muted);
  overflow-wrap: break-word;
  hyphens: auto;

  @media (max-width: ${a0}) {
    font-size: 0.75rem;
  }
`,ib=({item:e,sizes:a,testId:i})=>{let n=(0,t.jsx)(ih,{children:(0,t.jsx)(ax.default,{src:e.logoUrl,alt:`${e.companyName} logo`,fill:!0,sizes:a})});return(0,t.jsxs)(ic,{"data-testid":`${i}-tile`,children:[(0,t.jsx)(im,{"aria-hidden":"true"}),(0,t.jsx)(ip,{"aria-hidden":"true"}),e.websiteUrl?(0,t.jsx)(iu,{href:e.websiteUrl,...aw.d,"aria-label":e.companyName,"data-testid":`${i}-link`,children:n}):n]})},iy=({item:e})=>(0,t.jsxs)(t.Fragment,{children:[e.role&&(0,t.jsx)(ig,{children:e.role}),(0,t.jsx)(ix,{children:e.companyName}),e.description&&(0,t.jsx)(i$,{children:e.description})]}),iw=({items:e,headline:i,description:n,surface:r,onFirstView:s,onFirstHover:o,className:l,dataTestId:d="partner-group"})=>{let[c,...m]=e,p=(0,a.useMemo)(()=>aO(m.length,!1),[m.length]),h=(0,a.useMemo)(()=>aO(m.length,!0),[m.length]),f=(0,a.useRef)(null),{state:u,visible:g}=(0,S.f)(f,aQ,.3),[x,$]=(0,a.useState)(null),b=(0,a.useRef)(!1);(0,a.useEffect)(()=>{g&&!b.current&&(b.current=!0,s?.())},[g,s]);let w=(0,a.useRef)(!1),v=(0,a.useCallback)(e=>t=>{"mouse"!==t.pointerType||($(e),w.current||(w.current=!0,o?.()))},[o]),k=(0,a.useCallback)(()=>$(null),[]);if(!c)return(0,t.jsx)(t.Fragment,{});let j=(e,a)=>(0,t.jsx)(it,{viewBox:`0 0 ${e.width} ${e.height}`,preserveAspectRatio:"none","aria-hidden":"true",focusable:"false","data-variant":a,children:e.lines.map((a,i)=>(0,t.jsxs)("g",{children:[(0,t.jsx)(ia,{d:a,pathLength:1,"data-line":i,"data-active":x===i?"true":"false",$index:i}),(0,t.jsx)(ii,{d:a,pathLength:1,"data-part":"pulse",$index:i,$count:e.lines.length})]},i))});return(0,t.jsxs)(a8,{ref:f,className:l,"data-testid":d,"data-state":u,"data-visible":g?"true":"false","data-dark":"dark"===r?"true":"false","data-active":x??"","data-count":m.length,children:[(0,t.jsx)(y.f,{headline:i,description:n,align:"center",dataTestId:`${d}-header`}),(0,t.jsxs)(ie,{$wide:p,$compact:h,children:[j(p,"wide"),j(h,"compact"),(0,t.jsxs)(ir,{"data-testid":`${d}-center`,$wide:p,$compact:h,children:[(0,t.jsx)(ib,{item:c,sizes:"(max-width: 640px) 40vw, 220px",testId:`${d}-center`}),(0,t.jsx)(io,{$wide:p,$compact:h,children:(0,t.jsx)(iy,{item:c})})]})]}),(0,t.jsx)(il,{$count:m.length,children:m.map((e,a)=>(0,t.jsxs)(id,{"data-testid":`${d}-member-${a}`,"data-active":x===a?"true":"false",$index:a,onPointerEnter:v(a),onPointerLeave:k,onFocus:()=>$(a),onBlur:k,children:[(0,t.jsx)(ib,{item:e,sizes:"(max-width: 640px) 28vw, 150px",testId:`${d}-member-${a}`}),(0,t.jsx)(iy,{item:e})]},a))})]})};function iv({block:e,locale:a,dataTestId:i}){let{headline:n,description:r,partners:o}=e.props;return(0,t.jsx)(R,{headline:n?(0,s.u)(n,a):void 0,description:r?(0,s.u)(r,a):void 0,headerAlign:"center",columns:2,dataTestId:`${i}-grid`,children:o.map((e,n)=>(0,t.jsx)(aV.f,{companyName:e.companyName,logoUrl:e.logoUrl,description:e.description?(0,s.u)(e.description,a):void 0,websiteUrl:e.websiteUrl,role:e.role?(0,s.u)(e.role,a):void 0,variant:"row",dataTestId:`${i}-partner-${n}`},n))})}e.i(624813);var ik=e.i(775175),ij=e.i(247902),i_=e.i(825969),iC=e.i(499911),iI=e.i(696984);let iN=u.U.div.withConfig({displayName:"NewsTeaserBlock__Root",componentId:"sc-f46a5f0-0"})`
  display: flex;
  flex-direction: column;
  gap: 32px;
`,iT=u.U.ul.withConfig({displayName:"NewsTeaserBlock__Grid",componentId:"sc-f46a5f0-1"})`
  --gap: ${({theme:e})=>e.margin.small};
  /* #2202: Breite des Rasters für die gemeinsame Bildhöhe (cqw) */
  container-type: inline-size;
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: var(--gap);
  margin: 0;
  padding: 0;
  list-style: none;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(6, minmax(0, 1fr));

    /* #2202: alle Bilder so hoch wie die der kleinen Karten (ein Drittel der
       Breite im Seitenverhältnis) — die großen Karten schneiden breiter zu,
       die Bildkante springt zwischen erster und zweiter Reihe nicht mehr. */
    [data-card-image] {
      aspect-ratio: auto;
      height: calc((100cqw - 2 * var(--gap)) / 3 * ${.5625});
    }
  }
`,iU=u.U.li.withConfig({displayName:"NewsTeaserBlock__Item",componentId:"sc-f46a5f0-2"})`
  min-width: 0;

  @media (min-width: 640px) {
    grid-column: span ${({$gross:e})=>e?2:1};
  }

  @media (min-width: 768px) {
    grid-column: span ${({$gross:e})=>e?3:2};
  }
`,iL=u.U.div.withConfig({displayName:"NewsTeaserBlock__More",componentId:"sc-f46a5f0-3"})`
  text-align: center;

  @media (min-width: 768px) {
    margin-top: 32px;
  }
`,iS=u.U.section.withConfig({displayName:"SpecTable.styles__Root",componentId:"sc-b0630cd5-0"})`
  display: flex;
  flex-direction: column;
  gap: 32px;
  box-sizing: border-box;
  width: 100%;
  /* max-w-screen-md abzüglich des Containerpolsters der Quelle (2 × 24px) */
  max-width: calc(${ex.z} - 48px);
  margin-inline: auto;
`,iz=u.U.div.withConfig({displayName:"SpecTable.styles__Scroll",componentId:"sc-b0630cd5-1"})`
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
`,iB=u.U.table.withConfig({displayName:"SpecTable.styles__Table",componentId:"sc-b0630cd5-2"})`
  width: 100%;
  border-collapse: collapse;
  background-color: transparent;
  font-family: ${({theme:e})=>e.font.secondaryFamily};
  font-size: 14px;
  line-height: 24px;
  color: ${({theme:e})=>e.palette.site.text};

  /*
   * Zebra halbdurchsichtig über dem Band statt mit der Kartenfarbe gemischt:
   * dunkel liegt die Tabelle auf #1F2937 (Seite/Band), dort verschwände eine
   * Mischung aus tint und site.card (#111827) — hell sieht beides gleich aus.
   */
  && tbody tr:nth-child(even) {
    background: ${({theme:e})=>`color-mix(in srgb, ${e.palette.site.tint} 70%, transparent)`};
  }
`,iM=u.U.th.withConfig({displayName:"SpecTable.styles__HeadCell",componentId:"sc-b0630cd5-3"})`
  padding: 16px;
  font-weight: 700;
  text-align: left;
  vertical-align: bottom;
  color: ${({theme:e})=>e.palette.text.onAccent};
  background: ${({theme:e})=>e.palette.site.blueDark};
`,iR=u.U.th.withConfig({displayName:"SpecTable.styles__RowHeadCell",componentId:"sc-b0630cd5-4"})`
  padding: 16px;
  font-weight: 700;
  text-align: left;
  vertical-align: baseline;
  color: ${({theme:e})=>e.palette.site.heading};
  background-color: transparent;
`,iF=u.U.td.withConfig({displayName:"SpecTable.styles__Cell",componentId:"sc-b0630cd5-5"})`
  padding: 16px;
  vertical-align: baseline;
`,iH=e=>{let{headline:a,description:i,columns:n,rows:r,className:s,dataTestId:o="spec-table"}=e;return(0,t.jsxs)(iS,{className:s,"data-testid":o,"data-columns":n.length,"data-rows":r.length,children:[(0,t.jsx)(y.f,{headline:a,description:i,dataTestId:`${o}-header`}),(0,t.jsx)(iz,{children:(0,t.jsxs)(iB,{"data-testid":`${o}-table`,children:[(0,t.jsx)("thead",{children:(0,t.jsx)("tr",{children:n.map((e,a)=>(0,t.jsx)(iM,{scope:"col","data-testid":`${o}-column`,children:e},a))})}),(0,t.jsx)("tbody",{children:r.map((e,a)=>(0,t.jsx)("tr",{"data-testid":`${o}-row`,children:n.map((a,i)=>0===i?(0,t.jsx)(iR,{scope:"row","data-testid":`${o}-cell`,children:e[i]??""},i):(0,t.jsx)(iF,{"data-testid":`${o}-cell`,children:e[i]??""},i))},a))})]})})]})};e.i(597734);var iA=e.i(655750),iP=e.i(929842),iq=e.i(770703);let iG=(0,iq.default)(()=>e.A(794345).then(e=>e.HeroBlock),{loadableGenerated:{modules:[167495]}}),iE=(0,iq.default)(()=>e.A(475226).then(e=>e.CardSliderBlock),{loadableGenerated:{modules:[535566]}}),iW=(0,iq.default)(()=>e.A(465624).then(e=>e.VideoBlock),{loadableGenerated:{modules:[367999]}}),iK=(0,iq.default)(()=>e.A(485551).then(e=>e.ImagefilmBlock),{loadableGenerated:{modules:[396374]}}),iY=(0,iq.default)(()=>e.A(675425).then(e=>e.TeamBlock),{loadableGenerated:{modules:[452967]}}),iD=(0,iq.default)(()=>e.A(749344).then(e=>e.TestimonialBlock),{loadableGenerated:{modules:[347218]}}),iV=(0,iq.default)(()=>e.A(81262).then(e=>e.MastheadBlock),{loadableGenerated:{modules:[121574]}}),iZ=(0,iq.default)(()=>e.A(773694).then(e=>e.ContactFormBlock),{loadableGenerated:{modules:[567553]}}),iO={hero:iG,video:iW,imagefilm:iK,mediaText:({block:e,locale:a,dataTestId:i,pageHeading:n,first:r,markdown:o})=>{let{headline:l,paragraphs:d,image:c,imagePosition:p,imageShape:f,cta:u,highlight:g}=e.props,x=f=>(0,t.jsx)(iA.f,{headline:(0,s.u)(l,a),paragraphs:(0,s.L)(d,a),renderedParagraphs:o?d.map((t,i)=>(0,h.h)(o,a,e.id,"paragraph",i)):void 0,imageSrc:c?.src,imageAlt:c?.alt?(0,s.u)(c.alt,a):void 0,imagePosition:p,imageShape:f,imagePriority:r,ctaText:u&&(0,m.J)(u.href)?(0,s.u)(u.label,a):void 0,ctaHref:(0,m.J)(u?.href),highlight:g,headlineImportance:n?iP.D.h1:iP.D.h2,dataTestId:`${i}-media-text`});return"hex"!==f?x(f):(0,t.jsx)(et.A,{element:"mediaText",fallback:x("rounded"),children:x("hex")})},animationText:(0,iq.default)(()=>e.A(315259).then(e=>e.AnimationTextBlock),{loadableGenerated:{modules:[718943]}}),cardGrid:e=>{var i;let{block:n,locale:r,dataTestId:o}=e,l=(0,et.l)("cardGrid"),d=(0,a.useCallback)(()=>l("view"),[l]),c=(0,a.useCallback)(()=>l("hover"),[l]),p=(0,a.useCallback)(()=>l("cta"),[l]),{headline:h,description:f,cards:u}=n.props;if(i=e=>!!(0,m.J)(e),0!==u.length&&!(u.length>3)&&u.every(e=>{var t;return!!e.icon&&!e.image&&!e.accent&&!((t=e.description)&&"object"==typeof t&&Object.values(t).some(e=>"string"==typeof e&&""!==e.trim()))&&i(e.cta?.href)})){let e=u.map(e=>({title:(0,s.u)(e.title,r),href:(0,m.J)(e.cta?.href),icon:e.icon}));return(0,t.jsx)(ee,{headline:h?(0,s.u)(h,r):void 0,description:f?(0,s.u)(f,r):void 0,items:e,onFirstHover:c,onLinkClick:p,dataTestId:`${o}-tiles`})}return(0,t.jsx)(et.A,{element:"cardGrid",fallback:(0,t.jsx)(ea,{...e}),children:(0,t.jsx)(ea,{...e,effects:{onView:d,onHover:c,onLink:p}})})},comparison:({block:e,locale:i,dataTestId:n})=>{let{headline:r,description:o,leftTitle:d,rightTitle:c,items:m}=e.props,p=(0,et.l)("comparison"),h=(0,a.useCallback)(()=>p("view"),[p]),f=(0,a.useCallback)(()=>p("replay"),[p]),u=m.map(e=>({problem:(0,s.u)(e.problem,i),solution:(0,s.u)(e.solution,i)}));return(0,t.jsx)(et.A,{element:"comparison",fallback:(0,t.jsx)("ul",{"data-testid":`${n}-comparison-fallback`,children:u.map((e,a)=>(0,t.jsxs)("li",{children:[e.problem," → ",e.solution]},a))}),children:(0,t.jsx)(eJ,{headline:r?(0,s.u)(r,i):void 0,description:o?(0,s.u)(o,i):void 0,problemTitle:(0,s.u)(d,i),solutionTitle:(0,s.u)(c,i),pairs:u,surface:(0,l.f)(e),onFirstView:h,onFirstReplay:f,dataTestId:`${n}-comparison`})})},stepList:({block:e,locale:i,dataTestId:n,markdown:r})=>{let{headline:o,description:d,steps:c,orientation:m}=e.props,p=(0,et.l)("stepList"),f=(0,a.useCallback)(()=>p("view"),[p]),u=(0,a.useCallback)(()=>p("step"),[p]),g=c.map((t,a)=>({title:(0,s.u)(t.title,i),description:t.description&&(0,s.u)(t.description,i)||void 0,renderedDescription:r?(0,h.h)(r,i,e.id,"step",a):void 0,icon:t.icon}));return(0,t.jsx)(et.A,{element:"stepList",fallback:(0,t.jsx)("ol",{"data-testid":`${n}-steps-fallback`,children:g.map((e,a)=>(0,t.jsx)("li",{children:e.title},a))}),children:(0,t.jsx)(tj,{headline:o?(0,s.u)(o,i):void 0,description:d?(0,s.u)(d,i):void 0,steps:g,orientation:m,surface:(0,l.f)(e),onFirstView:f,onFirstStep:u,dataTestId:`${n}-steps`})})},cardSlider:iE,faq:({block:e,locale:a,dataTestId:i,pageHeading:n,markdown:r})=>{let{headline:o,description:l,items:d}=e.props;return(0,t.jsxs)(tR,{"data-count":d.length,children:[(0,t.jsx)(y.f,{headline:o?(0,s.u)(o,a):void 0,headingLevel:n?1:2,description:l?(0,s.u)(l,a):void 0,align:"center",dataTestId:`${i}-header`}),(0,t.jsx)(tz,{dataTestId:i,items:d.map((n,o)=>({question:(0,s.u)(n.question,a),answer:(0,t.jsx)(tB.f,{content:(0,s.u)(n.answer,a),rendered:(0,h.h)(r,a,e.id,"answer",o),dataTestId:`${i}-answer-${o}`})}))})]})},cta:({block:e,locale:i,dataTestId:n,dataAttributes:r,edges:o})=>{let{headline:l,button:d,icon:c}=e.props,p=(0,et.l)("ctaBand"),h=(0,a.useCallback)(()=>p("view"),[p]),f=(0,a.useCallback)(()=>p("hover"),[p]),u=(0,a.useCallback)(()=>p("cta"),[p]),g={headline:(0,s.u)(l,i),buttonText:(0,s.u)(d.label,i),buttonHref:(0,m.J)(d.href),icon:c,dataTestId:n,dataAttributes:r,edges:o};return(0,t.jsx)(et.A,{element:"ctaBand",fallback:(0,t.jsx)(tF.f,{...g,motion:!1}),children:(0,t.jsx)(tF.f,{...g,onFirstView:h,onFirstHover:f,onCtaClick:u})})},richText:e=>{let{block:a,locale:i,dataTestId:n,pageHeading:r,first:o,markdown:l}=e;return"lead"===a.props.variant?(0,t.jsx)(tZ,{...e}):(0,t.jsx)(tM,{children:(0,t.jsx)(tB.f,{content:(0,s.u)(a.props.content,i),rendered:(0,h.h)(l,i,a.id,"content"),eagerFirstImage:o,pageHeading:r,dataTestId:`${n}-markdown`})})},stats:({block:e,locale:i,dataTestId:n,pageHeading:r})=>{let{headline:o,items:d}=e.props,c=(0,l.f)(e),m=(0,et.l)("stats"),p=(0,a.useCallback)(()=>m("view"),[m]),h=(0,a.useCallback)(()=>m("tilt"),[m]),f=d.map(e=>({value:(0,s.u)(e.value,i),label:(0,s.u)(e.label,i),detail:e.detail?(0,s.u)(e.detail,i):void 0}));return(0,t.jsxs)(au,{"data-testid":`${n}-grid`,"data-columns":t0(d.length).desktop,children:[(0,t.jsx)(y.f,{headline:o?(0,s.u)(o,i):void 0,headingLevel:r?1:2,align:"center",dataTestId:`${n}-grid-header`}),(0,t.jsx)(et.A,{element:"stats",fallback:(0,t.jsx)(ag,{"data-testid":`${n}-grid-fallback`,children:f.map((e,a)=>(0,t.jsxs)("li",{children:[(0,t.jsx)("strong",{children:e.value})," ",e.label]},a))}),children:(0,t.jsx)(af,{items:f,surface:c,onFirstView:p,onFirstTilt:h,dataTestId:n})})]})},team:iY,partnerLogos:e=>{let{block:i,locale:n,dataTestId:r}=e,{headline:o,description:l,columns:d,partners:c,variant:m,surface:p}=i.props,h=(0,et.l)("partnerLogos"),f=(0,a.useCallback)(()=>h("view"),[h]),u=(0,a.useCallback)(()=>h("hover"),[h]),g=(0,a.useCallback)(e=>{e&&h("pause")},[h]),x=o?(0,s.u)(o,n):void 0,$=l?(0,s.u)(l,n):void 0,b=c.every(e=>!e.description);return"group"===m&&c.length>1?(0,t.jsx)(et.A,{element:"partnerLogos",fallback:(0,t.jsx)(iv,{...e}),children:(0,t.jsx)(iw,{headline:x,description:$,surface:p,items:c.map(e=>({companyName:e.companyName,logoUrl:e.logoUrl,websiteUrl:e.websiteUrl,description:e.description?(0,s.u)(e.description,n):void 0,role:e.role?(0,s.u)(e.role,n):void 0})),onFirstView:f,onFirstHover:u,dataTestId:`${r}-group`})}):b?(0,t.jsx)(et.A,{element:"partnerLogos",fallback:(0,t.jsx)(iv,{...e}),children:(0,t.jsx)(aD,{headline:x,description:$,columns:d??4,surface:p,items:c.map(({companyName:e,logoUrl:t,websiteUrl:a})=>({companyName:e,logoUrl:t,websiteUrl:a})),onFirstView:f,onFirstHover:u,onMarqueeToggle:g,dataTestId:`${r}-grid`,itemDataTestIdPrefix:r})}):(0,t.jsx)(iv,{...e})},newsTeaser:({block:e,locale:a,dataTestId:i,pageHeading:n})=>{let{tr:r}=(0,iI.w)(),{headline:o,description:l,items:d}=e.props;return(0,t.jsxs)(iN,{"data-testid":`${i}-grid`,"data-columns":6,children:[(0,t.jsx)(y.f,{headline:o?(0,s.u)(o,a):void 0,headingLevel:n?1:2,align:"center",description:l?(0,s.u)(l,a):void 0,dataTestId:`${i}-grid-header`}),(0,t.jsx)(iT,{"data-testid":`${i}-grid-list`,"data-count":d.length,children:d.map((e,n)=>{let r=n<2;return(0,t.jsx)(iU,{$gross:r,"data-size":r?"large":"small","data-testid":`${i}-grid-item`,children:(0,t.jsx)(ik.f,{headline:(0,s.u)(e.headline,a),href:(0,m.J)(e.href),imageUrl:e.imageUrl,imageSizes:r?"(max-width: 768px) 100vw, 50vw":"(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw",date:e.date?(0,s.H)(e.date,a):void 0,dateBadge:(0,s.J)(e.date,a),description:e.description?(0,s.u)(e.description,a):void 0,tags:e.tags?(0,s.L)(e.tags,a):void 0,dataTestId:`${i}-item-${n}`})},n)})}),(0,t.jsx)(iL,{children:(0,t.jsx)(ij.f,{href:"/news",modifier:i_.j.TERTIARY,icon:(0,t.jsx)(iC.f,{}),iconAlign:i_.W.RIGHT,dataTestId:`${i}-all`,children:r("cms.newsTeaser.allNews",{defaultValue:"Aktuelle Nachrichten"})})})]})},testimonial:iD,specTable:({block:e,locale:a,dataTestId:i})=>{let{headline:n,description:r,columns:o,rows:l}=e.props;return(0,t.jsx)(iH,{headline:n?(0,s.u)(n,a):void 0,description:r?(0,s.u)(r,a):void 0,columns:(0,s.L)(o,a),rows:l.map(e=>(0,s.L)(e,a)),dataTestId:`${i}-table`})},masthead:iV,contactForm:iZ};var iX=e.i(994244);let iJ=u.U.div.withConfig({displayName:"CmsBlockRenderer.styles__Root",componentId:"sc-21371517-0"})`
  width: 100%;

  /*
   * Abstand der Rasterblöcke. Er lag früher auf einem Trage-Div je Block; das
   * ist mit #1178 entfallen, damit im Markup ein Element weniger je Block
   * steht. Jetzt trägt ihn die Spalte, die den Block ohnehin umschließt.
   *
   * Nur die Spalten der eigenen Reihen: eine Blockansicht darf intern eigene
   * Rows mitbringen, die hier nicht mitzählen. Die Blockkennung grenzt sie ab.
   *
   * #1199: Abstand je Abschnitt (seit #2187 aus der Theme-Skala, siehe
   * siteSection), als Innenabstand der Spalte (Außenabstände der Flex-Spalten
   * fielen nicht zusammen, der Innenabstand ergibt dieselben Lücken).
   *
   * #1954: ohne Kind-Kombinator — Reihen mit Fläche stehen in einem SiteBand.
   * Spalten der Ansichten tragen keine Blockkennung und zählen weiter nicht.
   */
  [data-testid='Row-root'] > [data-block-id] {
    ${ex.a}
  }

  /*
   * #1955: Das Zahlenband reserviert über und unter sich schon die Randzone
   * der Waben (SiteBand, hexEdgeInset) — mit vollem Abschnittsabstand dazu
   * stünden die Zahlen über 250 px unter der Kante. Auf einem Band nur der
   * halbe Abstand.
   */
  [data-surface] [data-testid='Row-root'] > [data-block-type='stats'] {
    ${ex.D}
  }

  /*
   * #2195: Der Leitsatz steht direkt unter dem Seitenkopf — der volle
   * Abschnittsabstand (128 px oben und unten) ließ ihn wie einen vergessenen
   * Absatz schweben. Halber Abstand aus dem Theme.
   */
  [data-testid='Row-root'] > [data-block-variant='lead'] {
    ${ex.D}
  }
`,iQ=u.U.h1.withConfig({displayName:"CmsBlockRenderer.styles__HiddenPageHeading",componentId:"sc-21371517-1"})`
  ${iX.p}
`,i0=e=>{let t=(0,o.P)(e),a=e.props.variant;return{"data-block-type":e.type,"data-block-id":e.id,..."string"==typeof a?{"data-block-variant":a}:{},...t?{"data-header-bg":t}:{}}},i1=e=>`cms-block-${e.id}`;function i2({block:e,locale:a,edges:i,pageHeading:n,first:s,markdown:o}){let l=iO[e.type];return(0,t.jsx)(l,{block:e,locale:a,dataTestId:i1(e),dataAttributes:r.k[e.type].fullBleed?i0(e):void 0,edges:(0,p.N)(i)?i:void 0,pageHeading:n,first:s||void 0,markdown:o})}function i5({group:e,locale:a,edgesById:r,headingId:s,firstId:l,markdown:d}){let c=e.blocks[0],m=c?r.get(c.id):void 0,h=!!c&&("white"!==e.surface||(0,p.N)(m)),f=(0,t.jsx)(i.f,{children:e.blocks.map(e=>(0,t.jsx)(n.f,{dataTestId:i1(e),dataAttributes:i0(e),xs:e.layout?.xs??12,sm:e.layout?.sm,md:e.layout?.md,lg:e.layout?.lg,children:(0,t.jsx)(i2,{block:e,locale:a,edges:h?void 0:r.get(e.id),pageHeading:e.id===s,first:e.id===l,markdown:d})},e.id))});return h&&c?(0,t.jsx)(b,{surface:e.surface,edges:m,headerBg:(0,o.P)(c),dataTestId:`${i1(c)}-band`,children:f}):f}e.s(["f",0,({blocks:e,locale:i,title:n,markdown:p,pageHeadingIds:f,dataTestId:u="cms-page"})=>{let g=(0,a.useMemo)(()=>e.map(m.n),[e]),x=function(e){let t=[],a=null;for(let i of e){if(r.k[i.type].fullBleed){a=null,t.push({kind:"bare",block:i});continue}if(i.layout){a||(a=[],t.push({kind:"row",blocks:a,surface:(0,l.f)(i)})),a.push(i);continue}a=null,t.push({kind:"row",blocks:[i],surface:(0,l.f)(i)})}return t}(g),$=new Map(g.map((e,t)=>[e.id,(0,o.u)(g,t)])),b=g[0]?.id,y=(0,h.r)(f,i),w=void 0!==y?y:function(e,t){let a,i=e.find(e=>d.includes(e.type));if(i)return i.id;let n=e[0];return n&&""!==((a=c[n.type])?a(n,t).trim():"")?n.id:null}(g,i),v=null===w&&n?n.trim():"";return(0,t.jsxs)(iJ,{"data-testid":u,"data-locale":i,"data-block-count":g.length,"data-block-types":(0,s.n)(g).join(","),"data-page-heading":w??(v?"title":""),children:[v&&(0,t.jsx)(iQ,{"data-testid":`${u}-title`,children:v}),x.map((e,a)=>"bare"===e.kind?(0,t.jsx)(i2,{block:e.block,locale:i,edges:$.get(e.block.id),pageHeading:e.block.id===w,first:e.block.id===b,markdown:p},e.block.id):(0,t.jsx)(i5,{group:e,locale:i,edgesById:$,headingId:w,firstId:b,markdown:p},`row-${a}`))]})}],302222),e.s([],677231)}]);