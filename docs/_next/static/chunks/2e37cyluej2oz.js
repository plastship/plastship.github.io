(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,677231,655953,e=>{"use strict";var t=e.i(843476),a=e.i(271645),i=e.i(152186),n=e.i(12780),r=e.i(507924),o=e.i(989969),s=e.i(545198);let d=["masthead"],l={hero:(e,t)=>(0,r.u)(e.props.slides[0]?.headline,t),mediaText:(e,t)=>(0,r.u)(e.props.headline,t),animationText:(e,t)=>(0,r.u)(e.props.headline,t),stats:(e,t)=>(0,r.u)(e.props.headline,t),team:(e,t)=>(0,r.u)(e.props.headline,t),faq:(e,t)=>(0,r.u)(e.props.headline,t),newsTeaser:(e,t)=>(0,r.u)(e.props.headline,t),richText:(e,t)=>{let a,i;return a=(0,r.u)(e.props.content,t).split("\n").find(e=>""!==e.trim())??"",i=/^ {0,3}#{1,6}[ \t]+(.+?)[ \t#]*$/.exec(a),i?.[1]?.trim()??""}};Object.keys(l);var c=e.i(197908),m=e.i(126217),p=e.i(618322);e.i(311046);var h=e.i(499881),g=e.i(437772);e.i(407030);var f=e.i(382445);e.i(710788);var u=e.i(964687),x=e.i(47309);e.i(951693);var $=e.i(659188),b=e.i(997053),w=e.i(474704);let y="640px",v="768px",k="1024px",j=b.U.section.withConfig({displayName:"CardGrid.styles__Root",componentId:"sc-c6fe4948-0"})`
  display: flex;
  flex-direction: column;
  gap: ${w.y.stackGap};
  width: 100%;
`,_=b.U.ul.withConfig({displayName:"CardGrid.styles__List",componentId:"sc-c6fe4948-1"})`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: ${w.y.gutter};
  margin: 0;
  padding: 0;
  list-style: none;

  @media (min-width: ${y}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  ${({$columns:e})=>e>=3&&b.m`
      @media (min-width: ${v}) {
        grid-template-columns: repeat(3, minmax(0, 1fr));
      }
    `}

  ${({$columns:e})=>4===e&&b.m`
      @media (min-width: ${k}) {
        grid-template-columns: repeat(4, minmax(0, 1fr));
      }
    `}
`,C=b.U.li.withConfig({displayName:"CardGrid.styles__Item",componentId:"sc-c6fe4948-2"})`
  min-width: 0;

  > * {
    height: 100%;
  }
`,I=b.U.ul.withConfig({displayName:"CardGrid.styles__BalancedList",componentId:"sc-c6fe4948-3"})`
  --cols: 1;
  /* #2226: Gutter der Seite (vorher margin.small = 16 px) */
  --gap: ${w.y.gutter};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--gap);
  margin: 0;
  padding: 0;
  list-style: none;

  @media (min-width: ${y}) {
    --cols: ${({$steps:e})=>e.sm};
  }

  @media (min-width: ${v}) {
    --cols: ${({$steps:e})=>e.md};
  }

  @media (min-width: ${k}) {
    --cols: ${({$steps:e})=>e.lg};
  }
`,N=b.U.li.withConfig({displayName:"CardGrid.styles__BalancedItem",componentId:"sc-c6fe4948-4"})`
  flex: 0 0 calc((100% - (var(--cols) - 1) * var(--gap)) / var(--cols));
  min-width: 0;

  &[data-wide='true'] {
    flex-basis: 100%;
  }

  > * {
    height: 100%;
  }
`,T=b.q`
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
`,U=b.m`
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
`;function z(e,t){if(e<=1)return 1;let a=Math.min(Math.max(t,2),4);if(e<=a)return e;let i=[a,a+1,a-1,a+2,a-2].filter(e=>e>=2&&e<=4),n=t=>{let i=e%t;return(0===i?0:1===i?100:t-i)+1.5*Math.abs(t-a)};return i.reduce((e,t)=>n(t)<n(e)?t:e)}var S=e.i(647835);let L=(0,b.U)(_).withConfig({displayName:"CardGridReveal__RevealGrid",componentId:"sc-d786b5b8-0"})`
  ${U}
`,M=(0,b.U)(I).withConfig({displayName:"CardGridReveal__RevealBalanced",componentId:"sc-d786b5b8-1"})`
  ${U}
`;function B({columns:e,steps:i,count:n,onFirstView:r,dataTestId:o,children:s}){let d=(0,a.useRef)(null),{state:l,visible:c}=(0,S.f)(d,520+60*Math.max(0,Math.min(n,13)-1),.15),m=(0,a.useRef)(r);(0,a.useEffect)(()=>{m.current=r}),(0,a.useEffect)(()=>{c&&m.current?.()},[c]);let p={ref:d,"data-testid":o,"data-state":l,"data-reveal":"true"};return i?(0,t.jsx)(M,{...p,$steps:i,"data-balanced":"true",children:s}):(0,t.jsx)(L,{...p,$columns:e,children:s})}let F=e=>{var i;let n,{headline:r,description:o,headerAlign:s="left",columns:d=3,children:l,balanced:c=!1,wideItems:m,reveal:p=!1,onFirstView:h,className:g,dataTestId:f="card-grid"}=e,u=a.default.Children.toArray(l),x=new Set(c?m??[]:[]),b=c?(i=u.length,{sm:Math.min(2,n=Math.max(1,function(e,t){let a=0,i=0;for(let n=0;n<e;n++){if(t.has(n)){i=0;continue}i+=1,a=Math.max(a,i)}return a}(i,x))),md:z(n,Math.min(3,d)),lg:z(n,d)}):void 0,w=c?N:C,y=u.map((e,a)=>(0,t.jsx)(w,{"data-testid":`${f}-item`,"data-wide":x.has(a)?"true":void 0,children:e},a));return(0,t.jsxs)(j,{className:g,"data-testid":f,"data-columns":d,"data-cols-md":b?.md,"data-cols-lg":b?.lg,children:[(r||o)&&(0,t.jsx)($.f,{headline:r,description:o,align:s,dataTestId:`${f}-header`}),p?(0,t.jsx)(B,{columns:d,steps:b,count:u.length,onFirstView:h,dataTestId:`${f}-list`,children:y}):b?(0,t.jsx)(I,{$steps:b,"data-testid":`${f}-list`,"data-balanced":"true",children:y}):(0,t.jsx)(_,{$columns:d,"data-testid":`${f}-list`,children:y})]})};e.i(307839);var R=e.i(585584),P=e.i(380153),G=e.i(587076);let H=b.U.div.withConfig({displayName:"CardSpotlight.styles__Root",componentId:"sc-5157933b-0"})`
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
`;function q({onFirstHover:e,onLinkClick:i,dataTestId:n="card-spotlight"}){let r=(0,a.useRef)(null),o=(0,a.useRef)(null),s=(0,P.f)("(hover: hover) and (pointer: fine)"),d=(0,G.f)(),l=s&&!d,[c,m]=(0,a.useState)(!1),p=(0,a.useRef)({onFirstHover:e,onLinkClick:i});return(0,a.useEffect)(()=>{p.current={onFirstHover:e,onLinkClick:i}}),(0,a.useEffect)(()=>{let e=r.current?.parentElement;if(!e)return;let t=!1,a=null,i=i=>{l&&"touch"!==i.pointerType&&(a=e.getBoundingClientRect(),m(!0),t||(t=!0,p.current.onFirstHover?.()))},n=t=>{l&&"touch"!==t.pointerType&&(a||(a=e.getBoundingClientRect()),o.current?.move(t.clientX-a.left,t.clientY-a.top))},s=()=>{a=null,o.current?.leave()},d=e=>{let t=e.target;t?.closest("a[href], [href]")&&p.current.onLinkClick?.()};return e.addEventListener("pointerenter",i),e.addEventListener("pointermove",n),e.addEventListener("pointerleave",s),e.addEventListener("click",d),()=>{e.removeEventListener("pointerenter",i),e.removeEventListener("pointermove",n),e.removeEventListener("pointerleave",s),e.removeEventListener("click",d)}},[l]),(0,t.jsx)(H,{ref:r,"aria-hidden":"true","data-testid":n,"data-enabled":l?"true":"false","data-built":c?"true":"false",children:c&&l&&(0,t.jsx)(R.f,{ref:o,columns:14,radius:56,reveal:"var(--card-spot)",dataTestId:`${n}-spot`})})}e.i(845166);var A=e.i(609588);e.i(945304);var E=e.i(977194);e.i(315481);var W=e.i(10003),K=e.i(547905);let D=b.U.section.withConfig({displayName:"HexTileLinks.styles__Root",componentId:"sc-9b72c459-0"})`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.margin.large};
  width: 100%;
`,V=b.U.ul.withConfig({displayName:"HexTileLinks.styles__List",componentId:"sc-9b72c459-1"})`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${({theme:e})=>e.margin.large};
  margin: 0;
  padding: 0;
  list-style: none;
`,Y=b.U.li.withConfig({displayName:"HexTileLinks.styles__Item",componentId:"sc-9b72c459-2"})`
  flex: 0 1 ${300}px;
  min-width: 0;
`,O=b.U.span.withConfig({displayName:"HexTileLinks.styles__Ring",componentId:"sc-9b72c459-3"})`
  position: absolute;
  inset: 0;
  ${K.p}
  background: ${({theme:e})=>e.palette.site.border};
  transition: background-color 200ms ease;
`,Z=b.U.span.withConfig({displayName:"HexTileLinks.styles__Face",componentId:"sc-9b72c459-4"})`
  position: absolute;
  inset: ${2}px;
  ${K.p}
  background: ${({theme:e})=>e.palette.site.card};
  transition: background-color 200ms ease;
`,X=b.U.span.withConfig({displayName:"HexTileLinks.styles__Content",componentId:"sc-9b72c459-5"})`
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
`,J=b.U.span.withConfig({displayName:"HexTileLinks.styles__Title",componentId:"sc-9b72c459-6"})`
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
`,Q=(0,b.U)(W.NavLink).withConfig({displayName:"HexTileLinks.styles__TileLink",componentId:"sc-9b72c459-7"})`
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

  &:focus-visible ${O} {
    background: ${({theme:e})=>e.palette.default.primary};
  }

  &:hover,
  &:focus-visible {
    transform: translateY(-${4}px);
  }

  &:hover ${O}, &:focus-visible ${O}, &:hover ${Z}, &:focus-visible ${Z} {
    background: ${({theme:e})=>e.palette.site.greenDark};
  }

  &:hover ${J}, &:focus-visible ${J} {
    color: ${({theme:e})=>e.palette.text.onAccent};
  }

  &:hover ${J} svg,
  &:focus-visible ${J} svg {
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

    ${O}, ${Z}, ${J} {
      transition: none;
    }
  }
`,ee=()=>(0,t.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":"true",children:(0,t.jsx)("path",{d:"M8.9 3.3a.9.9 0 0 1 1.3 0l4.1 4.1a.9.9 0 0 1 0 1.2l-4.1 4.1a.9.9 0 1 1-1.3-1.3l2.6-2.5H2.4a.9.9 0 1 1 0-1.8h9.1L8.9 4.6a.9.9 0 0 1 0-1.3Z"})});function et({headline:e,description:i,items:n,onFirstHover:r,onLinkClick:o,className:s,dataTestId:d="hex-tile-links"}){let l=(0,a.useRef)(!1),c=e=>{"touch"===e.pointerType||l.current||(l.current=!0,r?.())};return(0,t.jsxs)(D,{className:s,"data-testid":d,children:[(e||i)&&(0,t.jsx)($.f,{headline:e,description:i,align:"center",dataTestId:`${d}-header`}),(0,t.jsx)(V,{"data-testid":`${d}-list`,children:n.map((e,a)=>(0,t.jsx)(Y,{"data-testid":`${d}-item`,children:(0,t.jsxs)(Q,{href:e.href,"data-testid":`${d}-link-${a}`,onPointerEnter:c,onClick:()=>o?.(),children:[(0,t.jsx)(O,{"aria-hidden":"true"}),(0,t.jsx)(Z,{"aria-hidden":"true"}),(0,t.jsxs)(X,{children:[(0,t.jsx)(E.c,{name:e.icon.name,tone:e.icon.tone,size:"large",shape:"hex",dataTestId:`${d}-icon-${a}`}),(0,t.jsxs)(J,{"data-testid":`${d}-title-${a}`,children:[e.title,(0,t.jsx)(ee,{})]})]})]})},a))})]})}var ea=e.i(755010);function ei({block:e,locale:a,dataTestId:i,effects:n}){let{headline:o,description:s,columns:d,cards:l}=e.props,m=l.flatMap((e,t)=>e.accent?[t]:[]),p=l.some(e=>e.price);return(0,t.jsx)(F,{headline:o?(0,r.u)(o,a):void 0,description:s?(0,r.u)(s,a):void 0,headerAlign:"center",columns:d,balanced:!0,wideItems:m,reveal:!!n,onFirstView:n?.onView,dataTestId:`${i}-grid`,children:l.map((e,o)=>{let s=(0,c.J)(e.cta?.href),d=e.description?(0,r.u)(e.description,a):void 0;return(0,t.jsx)(A.f,{title:(0,r.u)(e.title,a),description:d,icon:e.icon,image:e.image,ctaText:e.cta&&s?(0,r.u)(e.cta.label,a):void 0,ctaHref:s,price:e.price?(0,r.u)(e.price,a):void 0,actionLabel:p&&e.cta&&s?(0,r.u)(e.cta.label,a):void 0,compact:!d&&!e.image,accent:!!e.accent,stretched:!0,drawIcon:!!n,layer:n&&!e.accent?(0,t.jsx)(q,{onFirstHover:n.onHover,onLinkClick:n.onLink,dataTestId:`${i}-card-${o}-spotlight`}):void 0,dataTestId:`${i}-card-${o}`},o)})})}var en=e.i(859146);let er=150,eo=650,es=320,ed=300,el=350,ec=300,em=400,ep=160,eh=900,eg=e=>{let t;return t=e,er+t*es+ed},ef=e=>{let t;return t=e,er+t*es+ec},eu=(e,t)=>{let a;return a=Math.max(0,e-1),er+a*es+eo+t*ep};var ex=e.i(417068),e$=e.i(726029),eb=e.i(62574),ew=e.i(119093);let ey="768px",ev=e=>`${e}ms`,ek=b.q`
  from { transform: rotateY(0deg); }
  to { transform: rotateY(180deg); }
`,ej=b.q`
  0% { transform: rotateY(180deg); }
  40% { transform: rotateY(360deg); }
  60% { transform: rotateY(360deg); }
  100% { transform: rotateY(540deg); }
`,e_=b.q`
  from { stroke-dashoffset: 1; }
  to { stroke-dashoffset: 0; }
`,eC=b.q`
  from { opacity: 0; transform: translateX(calc(-1 * var(--cmp-shift))); }
  to { opacity: 1; transform: none; }
`,eI=b.q`
  from { text-decoration-color: transparent; }
  to { text-decoration-color: var(--cmp-strike); }
`,eN=b.q`
  from { transform: scaleY(0); }
  to { transform: scaleY(1); }
`,eT=(e,t=!1)=>{let a=function(e,t=!1){let a=e.palette.site;if(t)return{badText:(0,ew.f)(a.red,"#ffffff",.5),badFace:(0,ew.f)(a.red,a.navy,.8),badRim:(0,ew.f)(a.red,"#ffffff",.3),badIcon:(0,ew.f)(a.red,"#ffffff",.3),goodText:"#ffffff",ground:a.navy};let i=(0,ex.j)(e);return{badText:i?(0,ew.f)(a.red,a.text,.3):(0,ew.f)(a.red,a.text,.5),badFace:i?(0,ew.f)(a.red,a.card,.8):(0,ew.f)(a.red,a.card,.85),badRim:(0,ew.f)(a.red,a.card,.5),badIcon:i?a.red:(0,ew.f)(a.red,"#000000",.2),goodText:i?a.greenText:a.greenOnTint,ground:a.tint}}(e,t);return b.m`
    --cmp-bad-text: ${a.badText};
    --cmp-bad-face: ${a.badFace};
    --cmp-bad-rim: ${a.badRim};
    --cmp-bad-icon: ${a.badIcon};
    --cmp-good-text: ${a.goodText};
    --cmp-strike: ${a.badText};
  `},eU=b.U.section.withConfig({displayName:"ComparisonList.styles__Root",componentId:"sc-a8b8661-0"})`
  ${({theme:e})=>eT(e)}
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
    ${({theme:e})=>eT(e,!0)}
    --cmp-card: color-mix(in srgb, #ffffff 8%, transparent);
  }

  @media (min-width: ${ey}) {
    --cmp-hex: 3.5rem;
  }
`,ez=b.U.div.withConfig({displayName:"ComparisonList.styles__Board",componentId:"sc-a8b8661-1"})`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.margin.default};
  width: 100%;
  /* #2226: so breit wie die Spalte (Textvorgabe 8 + 2), vorher 60rem */
  margin-inline: auto;
`,eS=b.m`
  display: grid;
  grid-template-columns: minmax(0, 1fr) var(--cmp-hex) minmax(0, 1fr);
  column-gap: ${({theme:e})=>e.margin.large};
  align-items: center;
`,eL=b.U.div.withConfig({displayName:"ComparisonList.styles__Heads",componentId:"sc-a8b8661-2"})`
  ${eS}
  column-gap: ${({theme:e})=>e.margin.small};

  @media (min-width: ${ey}) {
    column-gap: ${({theme:e})=>e.margin.large};
  }
`,eM=b.m`
  ${e$.n}
  margin: 0;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
`,eB=b.U.h3.withConfig({displayName:"ComparisonList.styles__HeadProblem",componentId:"sc-a8b8661-3"})`
  ${eM}
  text-align: right;
  color: var(--cmp-bad-text);
`,eF=b.U.h3.withConfig({displayName:"ComparisonList.styles__HeadSolution",componentId:"sc-a8b8661-4"})`
  ${eM}
  color: var(--cmp-good-text);
`,eR=b.U.svg.withConfig({displayName:"ComparisonList.styles__HeadArrow",componentId:"sc-a8b8661-5"})`
  justify-self: center;
  width: 100%;
  height: auto;
  fill: none;
  stroke: var(--cmp-line);
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
`,eP=b.U.ul.withConfig({displayName:"ComparisonList.styles__Pairs",componentId:"sc-a8b8661-6"})`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.margin.small};
  margin: 0;
  padding: 0;
  list-style: none;

  @media (min-width: ${ey}) {
    gap: 0;
  }
`,eG=b.U.li.withConfig({displayName:"ComparisonList.styles__Pair",componentId:"sc-a8b8661-7"})`
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
    ${eS}
    grid-template-areas: 'problem hub solution';
    padding: ${({theme:e})=>e.padding.extrasmall} 0;
    border-radius: 0;
    background: none;
  }
`,eH=b.U.p.withConfig({displayName:"ComparisonList.styles__Problem",componentId:"sc-a8b8661-8"})`
  ${e$.n}
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
    animation: ${eI} ${ev(em)} ${eb.B}
      ${({$index:e})=>ev(ef(e))} both;
  }

  /* ab md bleibt das Problem lesbar stehen, gedämpft rot, rechtsbündig zur Wabe */
  @media (min-width: ${ey}) {
    text-align: right;
    text-decoration: none;
    font-size: 18px;
    line-height: 1.4;
  }
`,eq=b.U.div.withConfig({displayName:"ComparisonList.styles__Hub",componentId:"sc-a8b8661-9"})`
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
      animation: ${eN} ${ev(ep/2)} linear
        ${({$index:e,$count:t})=>ev(eu(t,e))} both;
    }
    [data-state='running'] &::before {
      animation: ${eN} ${ev(ep/2)} linear
        ${({$index:e,$count:t})=>ev(eu(t,Math.max(0,e-1))+ep/2)}
        both;
    }
  }
`,eA=b.U.span.withConfig({displayName:"ComparisonList.styles__Flip",componentId:"sc-a8b8661-10"})`
  position: relative;
  z-index: 1;
  display: block;
  width: var(--cmp-hex);
  height: var(--cmp-hex);
  perspective: calc(var(--cmp-hex) * 6);
`,eE=b.U.span.withConfig({displayName:"ComparisonList.styles__Flipper",componentId:"sc-a8b8661-11"})`
  position: absolute;
  inset: 0;
  transform-style: preserve-3d;
  transform: rotateY(180deg);

  [data-state='idle'] & {
    transform: rotateY(0deg);
  }
  [data-state='running'] & {
    animation: ${ek} ${ev(eo)} ${eb.S}
      ${({$index:e})=>{let t;return ev((t=e,er+t*es))}} both;
  }
  ${"@media (hover: hover) and (pointer: fine)"} {
    [data-state='ready'] [data-replay='true'] & {
      animation: ${ej} ${ev(eh)} ${eb.B} both;
    }
  }
`,eW=b.U.span.withConfig({displayName:"ComparisonList.styles__Face",componentId:"sc-a8b8661-12"})`
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
`,eK=b.U.span.withConfig({displayName:"ComparisonList.styles__FaceIcon",componentId:"sc-a8b8661-13"})`
  position: relative;
  display: grid;
  place-items: center;
  width: 46%;
  height: 46%;

  svg {
    width: 100%;
    height: 100%;
  }
`,eD=b.U.div.withConfig({displayName:"ComparisonList.styles__Solution",componentId:"sc-a8b8661-14"})`
  grid-area: solution;
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.margin.small};
  min-width: 0;

  [data-state='idle'] & {
    opacity: 0;
  }
  [data-state='running'] & {
    animation: ${eC} ${ev(em)} ${eb.B}
      ${({$index:e})=>ev(ef(e))} both;
  }
`,eV=b.U.svg.withConfig({displayName:"ComparisonList.styles__Arrow",componentId:"sc-a8b8661-15"})`
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
    animation: ${e_} ${ev(el)} ${eb.B}
      ${({$index:e})=>ev(eg(e))} both;
  }

  @media (min-width: ${ey}) {
    display: block;
  }
`,eY=b.U.p.withConfig({displayName:"ComparisonList.styles__SolutionText",componentId:"sc-a8b8661-16"})`
  ${e$.Z}
  margin: 0;
  color: ${({theme:e})=>(0,e$.N)("heading",e.palette.site.heading)};
`,eO=(0,en.e)({x:2,y:2,width:96,height:96},(0,en.C)(96)),eZ=E.S.warning,eX=E.S.check;function eJ({side:e}){let a="bad"===e?eZ:eX;return(0,t.jsxs)(eW,{$side:e,"data-face":e,children:[(0,t.jsx)("svg",{"data-part":"hex",viewBox:"0 0 100 100","aria-hidden":"true",focusable:"false",children:(0,t.jsx)("path",{d:eO})}),(0,t.jsx)(eK,{"aria-hidden":"true",children:a?(0,t.jsx)(a,{}):null})]})}function eQ({headline:e,description:i,problemTitle:n,solutionTitle:r,pairs:o,surface:s="white",onFirstView:d,onFirstReplay:l,dataTestId:c="comparison-list"}){let m=(0,a.useRef)(null),{state:p,visible:h}=(0,S.f)(m,function(e){let t;if(e<=0)return 0;let a=Math.max((t=e-1,er+t*es+eo),ef(e-1)+em,eg(e-1)+el);return 1===e?a:Math.max(a,eu(e,e-2)+ep)}(o.length)),[g,f]=(0,a.useState)(null),u=(0,a.useRef)(null),x=(0,a.useRef)(!1);(0,a.useEffect)(()=>{h&&!x.current&&(x.current=!0,d?.())},[h,d]),(0,a.useEffect)(()=>()=>{null!==u.current&&window.clearTimeout(u.current)},[]);let b=(0,a.useCallback)((e,t)=>{"mouse"===t.pointerType&&"ready"===p&&null===g&&(f(e),l?.(),u.current=window.setTimeout(()=>{u.current=null,f(null)},eh))},[p,g,l]);return(0,t.jsxs)(eU,{ref:m,"data-testid":c,"data-state":p,"data-count":o.length,"data-surface":s,"data-dark":"dark"===s?"true":"false","data-element":"comparison",children:[(e||i)&&(0,t.jsx)($.f,{headline:e,description:i,align:"center",dataTestId:`${c}-header`}),(0,t.jsxs)(ez,{children:[(0,t.jsxs)(eL,{"data-testid":`${c}-heads`,children:[(0,t.jsx)(eB,{"data-testid":`${c}-problem-title`,children:n}),(0,t.jsx)(eR,{viewBox:"0 0 32 16","aria-hidden":"true",focusable:"false",children:(0,t.jsx)("path",{d:"M2 8 H29 M23 3 L29 8 L23 13"})}),(0,t.jsx)(eF,{"data-testid":`${c}-solution-title`,children:r})]}),(0,t.jsx)(eP,{children:o.map((e,a)=>(0,t.jsxs)(eG,{"data-testid":`${c}-pair`,"data-pair":a+1,"data-replay":g===a?"true":"false",onPointerEnter:e=>b(a,e),children:[(0,t.jsx)(eH,{$index:a,"data-testid":`${c}-pair-problem`,children:e.problem}),(0,t.jsx)(eq,{$index:a,$count:o.length,children:(0,t.jsx)(eA,{"data-testid":`${c}-pair-hex`,"aria-hidden":"true",children:(0,t.jsxs)(eE,{$index:a,children:[(0,t.jsx)(eJ,{side:"bad"}),(0,t.jsx)(eJ,{side:"good"})]})})}),(0,t.jsxs)(eD,{$index:a,children:[(0,t.jsx)(eV,{$index:a,viewBox:"0 0 32 16","aria-hidden":"true",focusable:"false",children:(0,t.jsx)("path",{d:"M2 8 H29 M23 3 L29 8 L23 13",pathLength:1})}),(0,t.jsx)(eY,{"data-testid":`${c}-pair-solution`,children:e.solution})]})]},a))})]})]})}var e0=e.i(913148);let e1=e=>Math.round(100*e)/100+0,e2=0,e5=400,e6=90,e4=350,e3=550,e9=350,e7=1400,e8=e=>{let t;return t=Math.max(0,e-1),e4+t*e3},te=e=>`${e}ms`,tt=b.q`
  from { opacity: 0; transform: scale(0.7); }
  to { opacity: 1; transform: scale(1); }
`,ta=b.q`
  from { stroke-dashoffset: 1; }
  to { stroke-dashoffset: 0; }
`,ti=b.q`
  from { fill: var(--node-face-idle); stroke: var(--node-rim-idle); }
  to { fill: var(--node-face-done); stroke: var(--node-face-done); }
`,tn=b.q`
  from { fill: var(--node-face-idle); stroke: var(--node-rim-idle); }
  to { fill: var(--node-goal-done); stroke: var(--node-goal-done); }
`,tr=b.q`
  from { color: var(--node-icon-idle); }
  to { color: var(--node-icon-done); }
`,to=b.q`
  from { color: var(--node-icon-idle); }
  to { color: var(--node-goal-icon); }
`,ts=b.q`
  0% { stroke-dashoffset: ${.06}; opacity: 0; }
  8% { opacity: 1; }
  88% { opacity: 1; }
  100% { stroke-dashoffset: -1; opacity: 0; }
`,td=b.U.section.withConfig({displayName:"StepList.styles__Root",componentId:"sc-7c7ae546-0"})`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.margin.big};
  width: 100%;
  /* globals.css färbt section mit der Seitenfarbe — auf Bändern durchscheinen lassen */
  background-color: transparent;

  --step-path: ${({theme:e})=>(0,ex.j)(e)?e.palette.site.muted:e.palette.site.border};
  --step-path-lit: ${({theme:e})=>e.palette.site.green};
  --node-face-idle: ${({theme:e})=>e.palette.site.tint};
  --node-rim-idle: ${({theme:e})=>e.palette.site.border};
  --node-face-done: ${({theme:e})=>(0,ex.j)(e)?e.palette.site.navy:e.palette.site.blue};
  --node-goal-done: ${({theme:e})=>(0,ew.f)(e.palette.site.greenDark,"#000000",.15)};
  --node-icon-idle: ${({theme:e})=>e.palette.site.blue};
  --node-icon-done: ${({theme:e})=>(0,ex.j)(e)?e.palette.site.greenText:"#ffffff"};
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
`,tl=b.U.div.withConfig({displayName:"StepList.styles__Track",componentId:"sc-7c7ae546-1"})`
  position: relative;
  width: 100%;
`,tc=b.U.svg.withConfig({displayName:"StepList.styles__PathSvg",componentId:"sc-7c7ae546-2"})`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: visible;
  pointer-events: none;
`,tm=b.U.path.withConfig({displayName:"StepList.styles__Segment",componentId:"sc-7c7ae546-3"})`
  fill: none;
  stroke: var(--step-path);
  stroke-width: 2;
  stroke-linejoin: round;
  stroke-linecap: round;
  stroke-dasharray: 1 1;
  stroke-dashoffset: 0;
  transition: stroke 250ms ${eb.B};

  &[data-lit='true'] {
    stroke: var(--step-path-lit);
    stroke-width: 3;
  }

  [data-state='idle'] & {
    stroke-dashoffset: 1;
  }
  [data-state='running'] & {
    animation: ${ta} ${te(e3)} ${eb.B}
      ${({$index:e})=>{let t;return te((t=e,e4+t*e3))}} both;
  }
  [data-state='static'] & {
    transition: none;
  }
`,tp=b.U.path.withConfig({displayName:"StepList.styles__Light",componentId:"sc-7c7ae546-4"})`
  fill: none;
  stroke: var(--step-path-lit);
  stroke-width: 6;
  stroke-linecap: round;
  stroke-dasharray: ${.06} ${1.94};
  stroke-dashoffset: ${.06};
  opacity: 0;

  [data-state='running'] & {
    animation: ${ts} ${te(e7)} ${eb.B}
      ${({$count:e})=>te(e8(e))} both;
  }
`,th=b.m`
  grid-template-columns: minmax(0, 1fr);
  row-gap: ${({theme:e})=>e.margin.large};
  /* #2226: so breit wie die Spalte (Textvorgabe 8 + 2), vorher 768 px */

  & > li {
    display: grid;
    grid-template-columns: var(--node-size) minmax(0, 1fr);
    column-gap: ${({theme:e})=>e.margin.default};
    align-items: start;
  }
`,tg=b.U.ol.withConfig({displayName:"StepList.styles__List",componentId:"sc-7c7ae546-5"})`
  --node-size: 4rem;
  position: relative;
  display: grid;
  margin: 0;
  padding: 0;
  list-style: none;

  @media (min-width: 640px) {
    --node-size: 5rem;
  }

  ${th}
  ${({$orientation:e,$count:t})=>{let a;return"horizontal"===e&&(a=t,b.m`
  @media (min-width: ${a<=3?640:1024}px) {
    grid-template-columns: repeat(${a}, minmax(0, 1fr));
    /* #2226: Gutter der Seite (vorher margin.large = 32 px) */
    column-gap: ${w.y.gutter};

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
`,tf=b.U.li.withConfig({displayName:"StepList.styles__Step",componentId:"sc-7c7ae546-6"})`
  position: relative;
  min-width: 0;
`,tu=b.U.div.withConfig({displayName:"StepList.styles__Node",componentId:"sc-7c7ae546-7"})`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: none;
  width: var(--node-size);
  height: var(--node-size);
  transition: transform 250ms ${eb.S};

  [data-state='idle'] & {
    opacity: 0;
  }
  [data-state='running'] & {
    animation: ${tt} ${te(e5)} ${eb.S}
      ${({$index:e})=>te(e2+e*e6)} both;
  }

  @media (hover: hover) and (pointer: fine) {
    [data-state='ready'] li[data-active='true'] > & {
      transform: translateY(-6%) scale(1.06);
    }
  }
`,tx=b.U.svg.withConfig({displayName:"StepList.styles__NodeSvg",componentId:"sc-7c7ae546-8"})`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: visible;
`,t$=b.U.path.withConfig({displayName:"StepList.styles__NodeFace",componentId:"sc-7c7ae546-9"})`
  fill: ${({$goal:e})=>e?"var(--node-goal-done)":"var(--node-face-done)"};
  stroke: ${({$goal:e})=>e?"var(--node-goal-done)":"var(--node-face-done)"};
  stroke-width: 2;

  [data-state='idle'] & {
    fill: var(--node-face-idle);
    stroke: var(--node-rim-idle);
  }
  [data-state='running'] & {
    animation: ${({$goal:e})=>e?tn:ti}
      ${te(e9)} ${eb.B}
      ${({$index:e})=>{let t;return te((t=e,e4+t*e3))}} both;
  }
`,tb=b.U.span.withConfig({displayName:"StepList.styles__NodeContent",componentId:"sc-7c7ae546-10"})`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({$goal:e})=>e?"var(--node-goal-icon)":"var(--node-icon-done)"};

  [data-state='idle'] & {
    color: var(--node-icon-idle);
  }
  [data-state='running'] & {
    animation: ${({$goal:e})=>e?to:tr}
      ${te(e9)} ${eb.B}
      ${({$index:e})=>{let t;return te((t=e,e4+t*e3))}} both;
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
`,tw=b.U.span.withConfig({displayName:"StepList.styles__StepNumber",componentId:"sc-7c7ae546-11"})`
  font-family: ${({theme:e})=>e.font.primaryFamily};
  font-size: calc(var(--node-size) * 0.28);
  font-weight: 700;
  line-height: 1;
  font-variant-numeric: tabular-nums;
`,ty=b.U.div.withConfig({displayName:"StepList.styles__Content",componentId:"sc-7c7ae546-12"})`
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
`,tv=b.U.h3.withConfig({displayName:"StepList.styles__StepTitle",componentId:"sc-7c7ae546-13"})`
  ${e$.Z}
  margin: 0;
  font-size: 1.125rem;
  line-height: 1.75rem;
  hyphens: manual;
  overflow-wrap: break-word;
  text-wrap: balance;
`,tk=b.U.div.withConfig({displayName:"StepList.styles__StepText",componentId:"sc-7c7ae546-14"})`
  ${e$.n}
  color: ${({theme:e})=>(0,e$.N)("muted",e.palette.site.muted)};

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
    color: ${({theme:e})=>(0,e$.N)("heading",e.palette.site.heading)};
  }

  li + li {
    margin-top: ${({theme:e})=>e.margin.extrasmall};
  }
`,tj=(0,en.e)({x:2,y:2,width:96,height:96},(0,en.C)(96));function t_({icon:e,index:i,count:n,dataTestId:r}){let o=i===n-1?"green":"blue",s=i===n-1;if(e&&!a.default.isValidElement(e)){let a=E.S[e.name];return(0,t.jsx)(tb,{$index:i,$goal:s,"data-testid":r,"data-icon":e.name,"data-tone":e.tone??o,"data-shape":"hex","aria-hidden":"true",children:a?(0,t.jsx)(a,{}):null})}return(0,t.jsx)(tb,{$index:i,$goal:s,"data-testid":r,"data-tone":o,"data-shape":"hex",children:e?(0,t.jsx)("span",{"aria-hidden":"true",children:e}):(0,t.jsx)(tw,{$tone:o,"data-testid":`${r}-number`,"data-tone":o,children:String(i+1).padStart(2,"0")})})}let tC=({headline:e,description:i,steps:n,orientation:r="horizontal",surface:o="white",onFirstView:s,onFirstStep:d,className:l,dataTestId:c="step-list"})=>{var m;let p=(0,a.useRef)(null),h=(0,a.useRef)(null),g=(0,a.useRef)([]),{state:f,visible:u}=(0,S.f)(p,(m=n.length)<=0?0:1===m?e4+0*e3+e9:e8(m)+e7),[x,b]=(0,a.useState)(null),[w,y]=(0,a.useState)(null),v=(0,a.useRef)(!1);(0,a.useEffect)(()=>{u&&!v.current&&(v.current=!0,s?.())},[u,s]);let k=(0,a.useCallback)(()=>{let e=h.current;if(!e)return;let t=e.getBoundingClientRect(),a=function(e,t=20){let a=[];for(let i=0;i+1<e.length;i++)a.push(function(e,t,a=20){let i=1>Math.abs(e.y-t.y)?"x":1>Math.abs(e.x-t.x)?"y":null;if(!i)return`M${e1(e.x)} ${e1(e.y)} L${e1(t.x)} ${e1(t.y)}`;let n="x"===i?t.x-e.x:t.y-e.y,r=2*Math.max(1,Math.round(Math.abs(n)/(2*a))),o=n/r,s=.5*Math.abs(o),d=[`M${e1(e.x)} ${e1(e.y)}`];for(let t=1;t<=r;t++){let a=t%2==1?s:0;d.push("x"===i?`L${e1(e.x+t*o)} ${e1(e.y-a)}`:`L${e1(e.x+a)} ${e1(e.y+t*o)}`)}return d.join(" ")}(e[i],e[i+1],t));return a}(g.current.slice(0,n.length).filter(e=>!!e).map(e=>{let a=e.getBoundingClientRect();return{x:a.left-t.left+a.width/2,y:a.top-t.top+a.height/2}})),i={width:Math.round(t.width),height:Math.round(t.height),segments:a,full:a.map((e,t)=>0===t?e:e.replace(/^M[^L]*/,"")).join(" ")};b(e=>e&&e.width===i.width&&e.height===i.height&&e.full===i.full?e:i)},[n.length]);(0,a.useEffect)(()=>{k();let e=h.current;if(!e||"u"<typeof ResizeObserver)return;let t=new ResizeObserver(()=>k());return t.observe(e),()=>t.disconnect()},[k]);let j=(0,a.useCallback)(e=>{y(e),null!==e&&d?.()},[d]),_=(0,a.useMemo)(()=>x?.segments??[],[x]);return(0,t.jsxs)(td,{ref:p,className:l,"data-testid":c,"data-orientation":r,"data-count":n.length,"data-trail":r,"data-state":f,"data-path":_.length,"data-dark":"dark"===o?"true":"false","data-element":"stepList",children:[(e||i)&&(0,t.jsx)($.f,{headline:e,description:i,align:"center",dataTestId:`${c}-header`}),(0,t.jsxs)(tl,{ref:h,children:[x&&_.length>0&&(0,t.jsxs)(tc,{viewBox:`0 0 ${x.width} ${x.height}`,"aria-hidden":"true",focusable:"false",children:[_.map((e,a)=>(0,t.jsx)(tm,{d:e,pathLength:1,$index:a,"data-testid":`${c}-path-segment`,"data-lit":null!==w&&a<w?"true":"false"},a)),(0,t.jsx)(tp,{d:x.full,pathLength:1,$count:n.length,"data-part":"light"})]}),(0,t.jsx)(tg,{$orientation:r,$count:n.length,children:n.map((e,a)=>{let i=e.renderedDescription??e.description;return(0,t.jsxs)(tf,{"data-testid":`${c}-step`,"data-step":a+1,"data-active":w===a?"true":"false",onPointerEnter:e=>"mouse"===e.pointerType&&j(a),onPointerLeave:()=>j(null),onFocus:()=>j(a),onBlur:()=>j(null),children:[(0,t.jsxs)(tu,{ref:e=>{g.current[a]=e},$index:a,"data-testid":`${c}-marker`,"data-marker":e.icon?"icon":"number",children:[(0,t.jsx)(tx,{viewBox:"0 0 100 100","aria-hidden":"true",focusable:"false",children:(0,t.jsx)(t$,{d:tj,$index:a,$goal:a===n.length-1})}),(0,t.jsx)(t_,{icon:e.icon,index:a,count:n.length,dataTestId:`${c}-chip`})]}),(0,t.jsxs)(ty,{"data-part":"content",children:[(0,t.jsx)(tv,{"data-part":"title","data-testid":`${c}-step-title`,children:e.title}),i&&(0,t.jsx)(tk,{"data-testid":`${c}-step-description`,children:i})]})]},a)})})]})]})},tI=b.U.ul.withConfig({displayName:"SiteFaqList.styles__List",componentId:"sc-1973ab1d-0"})`
  margin: 0;
  padding: 0;
  list-style: none;
`,tN=b.U.li.withConfig({displayName:"SiteFaqList.styles__Item",componentId:"sc-1973ab1d-1"})`
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
`,tT=b.U.h3.withConfig({displayName:"SiteFaqList.styles__Question",componentId:"sc-1973ab1d-2"})`
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
`,tU=b.U.span.withConfig({displayName:"SiteFaqList.styles__Marker",componentId:"sc-1973ab1d-3"})`
  position: relative;
  flex-shrink: 0;
  display: block;
  box-sizing: border-box;
  width: 24px;
  height: 24px;
  ${K.p}
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
`,tz=b.U.button.withConfig({displayName:"SiteFaqList.styles__Toggle",componentId:"sc-1973ab1d-4"})`
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
  &[aria-expanded='true'] ${tU} {
    transform: rotate(45deg);
    background: ${({theme:e})=>e.palette.site.card};
  }
`,tS=b.U.span.withConfig({displayName:"SiteFaqList.styles__QuestionText",componentId:"sc-1973ab1d-5"})`
  min-width: 0;
  overflow-wrap: break-word;
`,tL=b.U.div.withConfig({displayName:"SiteFaqList.styles__Panel",componentId:"sc-1973ab1d-6"})`
  ${e$.b}
  padding-top: 16px;
`;function tM({item:e,index:a,open:i,onToggle:n,idBase:r,dataTestId:o}){let s=`${r}-q${a}`,d=`${r}-a${a}`,l=`${o}-item-${a}`;return(0,t.jsxs)(tN,{"data-testid":l,"data-open":i?"true":"false",children:[(0,t.jsx)(tT,{children:(0,t.jsxs)(tz,{type:"button",id:s,"aria-expanded":i,"aria-controls":d,onClick:n,"data-testid":`${l}-header`,children:[(0,t.jsx)(tS,{children:e.question}),(0,t.jsx)(tU,{"data-part":"marker","aria-hidden":"true"})]})}),(0,t.jsx)(tL,{id:d,role:"region","aria-labelledby":s,hidden:!i,"data-testid":`${l}-body`,children:e.answer})]})}function tB({items:e,defaultOpenIndex:i,dataTestId:n="site-faq"}){let r=(0,a.useId)(),[o,s]=(0,a.useState)(()=>new Set(void 0===i?[]:[i]));return(0,t.jsx)(tI,{"data-testid":`${n}-list`,"data-count":e.length,children:e.map((e,a)=>(0,t.jsx)(tM,{item:e,index:a,open:o.has(a),onToggle:()=>s(e=>{let t=new Set(e);return t.has(a)?t.delete(a):t.add(a),t}),idBase:r,dataTestId:n},a))})}e.i(510716);var tF=e.i(980367);let tR=b.U.div.withConfig({displayName:"blocks.styles__NarrowColumn",componentId:"sc-9b542e02-0"})`
  box-sizing: border-box;
  width: 100%;
`,tP=(0,b.U)(tR).withConfig({displayName:"blocks.styles__FaqColumn",componentId:"sc-9b542e02-1"})`
  display: flex;
  flex-direction: column;
  gap: ${w.y.stackGap};
`;e.i(177607);var tG=e.i(422180),tH=e.i(399831),tq=e.i(394497);function tA(e){return e.replace(/!\[[^\]]*\]\([^)]*\)/g,"").replace(/\[([^\]]*)\]\([^)]*\)/g,"$1").replace(/^\s{0,3}#{1,6}\s+/gm,"").replace(/(\*\*|__)(.+?)\1/g,"$2").replace(/(^|[\s(])[*_]([^*_\s][^*_]*?)[*_](?=[\s).,!?:;]|$)/g,"$1$2").replace(/\s+/g," ").trim()}let tE=e=>e.split(/(?<=[.!?。！？])\s+/u).map(e=>e.trim()).filter(Boolean),tW=b.q`
  from {
    color: var(--lead-from);
  }
  to {
    color: var(--word-to, var(--lead-to));
  }
`,tK=b.m`
  [data-lead-word] {
    animation: ${tW} linear both;
    animation-timeline: --lead-statement;
    animation-range: cover calc(${18}% + var(--share, 0) * ${30}%) cover
      calc(${24}% + var(--share, 0) * ${30}%);
  }
`,tD=b.U.div.withConfig({displayName:"LeadStatement.styles__Root",componentId:"sc-d0290513-0"})`
  ${({theme:e})=>{let t=(0,ex.j)(e),a=e.palette.site;return b.m`
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
  /* #2226: so breit wie die Spalte (Textvorgabe 8 + 2), vorher 960 px */
  margin-inline: auto;
  text-align: center;
  view-timeline-name: --lead-statement;

  /* Vor dem Einhängen und im Modus scroll: rein per CSS, ohne Flackern beim Laden */
  &:is([data-mode='pending'], [data-mode='scroll']) {
    @media (prefers-reduced-motion: no-preference) {
      @supports (animation-timeline: view()) {
        ${tK}
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
`,tV=b.U.p.withConfig({displayName:"LeadStatement.styles__Statement",componentId:"sc-d0290513-1"})`
  margin: 0;
  font-family: ${({theme:e})=>e.font.primaryFamily};
  font-weight: 700;
  letter-spacing: -0.01em;
  text-wrap: balance;
  overflow-wrap: break-word;
  ${({$long:e})=>e?b.m`
          font-size: clamp(1.375rem, 1.1rem + 0.9vw, 1.75rem);
          line-height: 1.4;
        `:b.m`
          font-size: clamp(1.75rem, 1.1rem + 2.2vw, 3rem);
          line-height: 1.2;
        `}
`,tY=b.U.span.withConfig({displayName:"LeadStatement.styles__Word",componentId:"sc-d0290513-2"})`
  color: var(--word-to, var(--lead-to));
`,tO=b.U.p.withConfig({displayName:"LeadStatement.styles__ShortLine",componentId:"sc-d0290513-3"})`
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
`,tZ=b.U.div.withConfig({displayName:"LeadStatement.styles__Rest",componentId:"sc-d0290513-4"})`
  ${e$.b}
  max-width: ${(0,w.U)(e$.z)};
  font-size: 18px;
  line-height: 30px;
`;function tX({text:e,motion:i=!0,onFirstView:n,dataTestId:r="lead-statement"}){let o=(0,a.useMemo)(()=>(function(e){let[t="",...a]=e.split(/\n\s*\n/).map(tA).filter(Boolean),i=[],n=[];for(let e of a)0===i.length&&function(e){let t=tE(e);return t.length>=2&&t.length<=5&&t.every(e=>e.split(/\s+/).filter(Boolean).length<=5)}(e)?i=tE(e):n.push(e);return{lead:t,short:i,rest:n,long:t.length>160}})(e),[e]),s=(0,a.useRef)(null),d=(0,G.f)(),l=(0,tq.f)(s,0,"-35% 0px -35% 0px"),[c,m]=(0,a.useState)("pending"),[p,h]=(0,a.useState)(!1);(0,a.useEffect)(()=>{m(!i||d?"static":"u">typeof CSS&&"function"==typeof CSS.supports&&CSS.supports("animation-timeline: view()")?"scroll":"observer")},[i,d]);let g=(0,a.useRef)(n);if((0,a.useEffect)(()=>{g.current=n}),(0,a.useEffect)(()=>{l&&!p&&(h(!0),g.current?.())},[l,p]),!o.lead)return null;let f=o.lead.split(/\s+/).filter(Boolean),u=f.length+o.short.length,x=e=>({"--word":e,"--share":(u>1?e/(u-1):0).toFixed(3)});return(0,t.jsxs)(tD,{ref:s,"data-testid":r,"data-mode":c,"data-lit":p?"true":"false",children:[(0,t.jsx)(tV,{$long:o.long,"data-long":o.long?"true":"false","data-testid":`${r}-statement`,children:f.map((e,i)=>(0,t.jsxs)(a.default.Fragment,{children:[(0,t.jsx)(tY,{"data-lead-word":"","data-testid":`${r}-word-${i}`,style:x(i),children:e}),i<f.length-1?" ":null]},i))}),o.short.length>0&&(0,t.jsx)(tO,{"data-testid":`${r}-short`,children:o.short.map((e,a)=>(0,t.jsx)(tY,{"data-lead-word":"","data-testid":`${r}-short-${a}`,style:x(f.length+a),children:e},a))}),o.rest.length>0&&(0,t.jsx)(tZ,{"data-testid":`${r}-rest`,children:o.rest.map((e,a)=>(0,t.jsx)("p",{children:e},a))})]})}function tJ({block:e,locale:i,dataTestId:n}){let o=(0,ea.l)("leadText"),s=(0,a.useCallback)(()=>o("view"),[o]),d=(0,r.u)(e.props.content,i),l=`${n}-lead`;return(0,t.jsx)(ea.A,{element:"leadText",fallback:(0,t.jsx)(tX,{text:d,motion:!1,dataTestId:l}),children:(0,t.jsx)(tX,{text:d,onFirstView:s,dataTestId:l})})}e.i(155892);var tQ=e.i(529080),t0=e.i(687312);let t1={face:{start:0,duration:450},rim:{start:100,duration:700},roll:{start:200,duration:1200,digitStagger:90},fill:{start:200,duration:1300},seal:{start:500,duration:700},shimmer:{start:1500,duration:700}},t2=(e,t)=>t1[e].start+150*t;function t5(e){let t=Math.max(1,e);return{phone:1===t?1:2,tablet:4===t?2:Math.min(t,3),desktop:Math.min(t,4)}}let t6=e=>`${e}ms`,t4=(e,t)=>`${t6(t1[e].duration)} ${t6(t2(e,t))}`,t3=b.q`
  from { opacity: 0; transform: scale(0.85); }
  to { opacity: 1; transform: scale(1); }
`,t9=b.q`
  from { stroke-dashoffset: 1; }
  to { stroke-dashoffset: 0; }
`,t7=b.q`
  from { transform: scaleY(0); }
  to { transform: scaleY(1); }
`,t8=b.q`
  0% { transform: translateX(-100px); opacity: 0; }
  15% { opacity: 1; }
  85% { opacity: 1; }
  100% { transform: translateX(100px); opacity: 0; }
`,ae=e=>b.m`
  flex-basis: calc((100% - ${e-1} * var(--hex-counter-gap)) / ${e});
`,at=b.U.ul.withConfig({displayName:"HexCounter.styles__List",componentId:"sc-718d90a0-0"})`
  /* #2226: Gutter der Seite (vorher margin.large = 32 px) */
  --hex-counter-gap: ${w.y.gutter};
  --hex-face: ${({theme:e})=>e.palette.site.tint};
  --hex-rim: ${({theme:e})=>e.palette.site.border};
  --hex-pellet: ${({theme:e})=>e.palette.site.green};
  --hex-pellet-opacity: 0.3;
  --hex-value: ${({theme:e})=>(0,e$.N)("accent",e.palette.site.blue)};
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
    ${({$count:e})=>ae(t5(e).phone)}

    @media (min-width: 640px) {
      ${({$count:e})=>ae(t5(e).tablet)}
    }

    @media (min-width: ${({theme:e})=>e.device.tablet}) {
      ${({$count:e})=>ae(t5(e).desktop)}
    }
  }
`,aa=b.U.li.withConfig({displayName:"HexCounter.styles__Item",componentId:"sc-718d90a0-1"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({theme:e})=>e.margin.small};
  min-width: 0;
  max-width: 22rem;
  text-align: center;
`,ai=b.U.div.withConfig({displayName:"HexCounter.styles__Figure",componentId:"sc-718d90a0-2"})`
  position: relative;
  width: 9rem;
  aspect-ratio: 1;
  container-type: inline-size;
  transition: transform 300ms ${eb.S};

  @media (min-width: 640px) {
    width: 10rem;
  }

  @media (min-width: ${({theme:e})=>e.device.tablet}) {
    width: 12rem;
  }

  /* Kippen wie die Neigung von Siegel und Kreislauf — nur mit feinem Zeiger, nach dem Eintritt */
  ${"@media (hover: hover) and (pointer: fine)"} {
    [data-state='ready'] ${aa}:hover & {
      transform: perspective(600px) rotateX(10deg) rotateY(-14deg);
    }
  }
`,an=b.U.svg.withConfig({displayName:"HexCounter.styles__Svg",componentId:"sc-718d90a0-3"})`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: visible;
`,ar=b.U.path.withConfig({displayName:"HexCounter.styles__Face",componentId:"sc-718d90a0-4"})`
  fill: var(--hex-face);
  transform-origin: 50px 50px;

  [data-state='idle'] & {
    opacity: 0;
  }
  [data-state='running'] & {
    animation: ${t3} ${({$index:e})=>t4("face",e)} ${eb.S} both;
  }
`,ao=b.U.path.withConfig({displayName:"HexCounter.styles__Rim",componentId:"sc-718d90a0-5"})`
  fill: none;
  stroke: var(--hex-rim);
  stroke-width: 1.5;
  stroke-dasharray: 1 1;
  stroke-dashoffset: 0;

  [data-state='idle'] & {
    stroke-dashoffset: 1;
  }
  [data-state='running'] & {
    animation: ${t9} ${({$index:e})=>t4("rim",e)} ${eb.B} both;
  }
`,as=b.U.rect.withConfig({displayName:"HexCounter.styles__Pellets",componentId:"sc-718d90a0-6"})`
  opacity: var(--hex-pellet-opacity);
  transform-box: fill-box;
  transform-origin: 50% 100%;

  [data-state='idle'] & {
    transform: scaleY(0);
  }
  [data-state='running'] & {
    animation: ${t7} ${({$index:e})=>t4("fill",e)} ${eb.B} both;
  }
  /* „Bewegung reduzieren": Endwerte, keine Füllung */
  [data-state='static'] & {
    display: none;
  }
`,ad=b.U.circle.withConfig({displayName:"HexCounter.styles__Pellet",componentId:"sc-718d90a0-7"})`
  fill: var(--hex-pellet);
`,al=b.U.rect.withConfig({displayName:"HexCounter.styles__Shimmer",componentId:"sc-718d90a0-8"})`
  opacity: 0;

  [data-state='running'] & {
    animation: ${t8} ${({$index:e})=>t4("shimmer",e)} linear both;
  }
`,ac=b.U.path.withConfig({displayName:"HexCounter.styles__SealRing",componentId:"sc-718d90a0-9"})`
  fill: none;
  stroke: var(--hex-check);
  stroke-width: 2.5;
  stroke-dasharray: 1 1;
  stroke-dashoffset: 0;

  [data-state='idle'] & {
    stroke-dashoffset: 1;
  }
  [data-state='running'] & {
    animation: ${t9} ${({$index:e})=>t4("seal",e)} ${eb.B} both;
  }
`,am=b.U.path.withConfig({displayName:"HexCounter.styles__SealCheck",componentId:"sc-718d90a0-10"})`
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
    animation: ${t9}
      ${({$index:e})=>`${t6(t1.seal.duration/2)} ${t6(t2("seal",e)+t1.seal.duration/2)}`}
      ${eb.S} both;
  }
`,ap=b.U.span.withConfig({displayName:"HexCounter.styles__Value",componentId:"sc-718d90a0-11"})`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${({theme:e})=>e.font.primaryFamily};
  font-weight: 700;
  line-height: 1;
  color: var(--hex-value);

  ${({$chars:e,$seal:t})=>t?b.m`
          align-items: flex-end;
          padding-bottom: 20cqi;
          font-size: min(1rem, ${(118/Math.max(1,e)).toFixed(2)}cqi);
          letter-spacing: 0.04em;
          text-transform: uppercase;
        `:b.m`
          font-size: min(2rem, ${(132/Math.max(1,e)).toFixed(2)}cqi);

          @media (min-width: 640px) {
            font-size: min(2.25rem, ${(132/Math.max(1,e)).toFixed(2)}cqi);
          }

          @media (min-width: ${({theme:e})=>e.device.tablet}) {
            font-size: min(2.75rem, ${(132/Math.max(1,e)).toFixed(2)}cqi);
          }
        `}
`,ah=b.U.span.withConfig({displayName:"HexCounter.styles__Label",componentId:"sc-718d90a0-12"})`
  font-family: ${({theme:e})=>e.font.primaryFamily};
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 1.4;
  color: ${({theme:e})=>(0,e$.N)("heading",e.palette.site.heading)};
  hyphens: manual;
  overflow-wrap: normal;
  text-wrap: balance;

  @media (min-width: 640px) {
    font-size: 1.25rem;
  }
`,ag=b.U.span.withConfig({displayName:"HexCounter.styles__Detail",componentId:"sc-718d90a0-13"})`
  font-family: ${({theme:e})=>e.font.secondaryFamily};
  font-size: 1rem;
  line-height: 1.5;
  color: ${({theme:e})=>(0,e$.N)("muted",e.palette.site.muted)};
  hyphens: manual;
  text-wrap: balance;
`,af=(0,en.e)({x:2,y:2,width:96,height:96},(0,en.C)(96)),au=(0,en.e)({x:30,y:14,width:40,height:40},(0,en.C)(40)),ax=({items:e,surface:i="white",onFirstView:n,onFirstTilt:r,className:o,dataTestId:s="hex-counter"})=>{let d=(0,a.useRef)(null),l=(0,a.useMemo)(()=>Math.max(0,...e.map(e=>(0,t0.B)(e.value))),[e]),{state:c,visible:m}=(0,S.f)(d,function(e,t){if(e<=0)return 0;let a=e-1,{roll:i,shimmer:n,seal:r}=t1;return Math.max(t2("roll",a)+Math.max(0,t-1)*i.digitStagger+i.duration,t2("shimmer",a)+n.duration,t2("seal",a)+r.duration)}(e.length,l)),p=(0,a.useId)().replace(/[^a-zA-Z0-9_-]/g,""),h=(0,a.useRef)(!1);(0,a.useEffect)(()=>{m&&!h.current&&(h.current=!0,n?.())},[m,n]);let g=e=>{"mouse"===e.pointerType&&"ready"===c&&r?.()};return(0,t.jsx)(at,{ref:d,className:o,$count:e.length,"data-testid":`${s}-grid-list`,"data-count":e.length,"data-state":c,"data-visible":m?"true":"false","data-tone":"dark"===i?"band":"plain","data-surface":i,"data-element":"stats",children:e.map((e,a)=>{let i=!(0,t0.S)(e.value),n=`${s}-stat-${a}`;return(0,t.jsxs)(aa,{"data-testid":`${s}-grid-item`,onPointerEnter:g,children:[(0,t.jsxs)(ai,{"data-testid":n,"data-kind":i?"seal":"number",children:[(0,t.jsxs)(an,{viewBox:"0 0 100 100","aria-hidden":"true",focusable:"false",children:[(0,t.jsxs)("defs",{children:[(0,t.jsx)("clipPath",{id:`${p}-wabe-${a}`,children:(0,t.jsx)("path",{d:af})}),(0,t.jsxs)("pattern",{id:`${p}-pellets-${a}`,width:"8",height:"7",patternUnits:"userSpaceOnUse",children:[(0,t.jsx)(ad,{cx:"2",cy:"1.75",r:"1.5"}),(0,t.jsx)(ad,{cx:"6",cy:"5.25",r:"1.5"})]}),(0,t.jsxs)("linearGradient",{id:`${p}-schimmer-${a}`,x1:"0",x2:"1",y1:"0",y2:"0",children:[(0,t.jsx)("stop",{offset:"0",stopColor:"#fff",stopOpacity:"0"}),(0,t.jsx)("stop",{offset:"0.5",stopColor:"#fff",stopOpacity:"0.35"}),(0,t.jsx)("stop",{offset:"1",stopColor:"#fff",stopOpacity:"0"})]})]}),(0,t.jsx)(ar,{d:af,$index:a}),(0,t.jsxs)("g",{clipPath:`url(#${p}-wabe-${a})`,children:[(0,t.jsx)(as,{x:"0",y:"0",width:"100",height:"100",fill:`url(#${p}-pellets-${a})`,$index:a}),(0,t.jsx)(al,{x:"0",y:"0",width:"40",height:"100",fill:`url(#${p}-schimmer-${a})`,$index:a})]}),(0,t.jsx)(ao,{d:af,pathLength:1,$index:a}),i&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(ac,{d:au,pathLength:1,$index:a}),(0,t.jsx)(am,{d:"M41 34 L47.5 40.5 L59 28",pathLength:1,$index:a})]})]}),(0,t.jsx)(ap,{"data-testid":`${n}-value`,"data-numeric":i?"false":"true",$chars:Array.from(e.value).length,$seal:i,children:i?e.value:(0,t.jsx)(tQ.f,{value:e.value,state:c,delay:t2("roll",a),stagger:t1.roll.digitStagger,duration:t1.roll.duration,dataTestId:`${n}-odometer`})})]}),(0,t.jsx)(ah,{"data-testid":`${n}-label`,children:e.label}),e.detail&&(0,t.jsx)(ag,{"data-testid":`${n}-detail`,children:e.detail})]},a)})})},a$=b.U.div.withConfig({displayName:"StatsBlock__Root",componentId:"sc-8ab0af8b-0"})`
  display: flex;
  flex-direction: column;
  gap: ${w.y.stackGap};
`,ab=b.U.ul.withConfig({displayName:"StatsBlock__Fallback",componentId:"sc-8ab0af8b-1"})`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${w.y.gutter};
  margin: 0;
  padding: 0;
  list-style: none;
  color: ${({theme:e})=>(0,e$.N)("heading",e.palette.site.heading)};
`;var aw=e.i(325164);e.i(821194);var ay=e.i(99222);e.i(396971);var av=e.i(227319);e.i(239178);var ak=e.i(593736),aj=e.i(437992);let a_=e=>({base:Math.min(e,3),sm:Math.min(e,3),lg:e}),aC=(e,t)=>{let a=[],i=Math.max(1,t),n=Math.max(1,t-1),r=Math.max(0,e);for(;r>0;){let e=Math.min(a.length%2==0?i:n,r);a.push(e),r-=e}return a},aI=(e,t)=>{let a=[];return aC(e,t).forEach((e,i)=>{let n=t-e,r=n+1+ +(n%2!=i%2);for(let t=0;t<e;t++)a.push({row:i,col:r+2*t})}),a},aN=e=>Math.round(100*e)/100,aT="center center",aU="(max-width: 639.98px) and (prefers-reduced-motion: no-preference)",az="6rem",aS=(e,t,a)=>b.m`
  grid-template-columns: repeat(${2*t}, minmax(0, 1fr));
  max-width: calc(${t} * ${168}px + ${t-1} * ${a});
  /* Prozent = Breite des Abschnitts; die Kachel ist höchstens TILE_MAX_PX breit */
  padding-bottom: calc(min(${168}px, (100% - ${t-1} * ${a}) / ${t}) / 4);

  > li {
    ${Array.from({length:2*t-1},(t,a)=>`&[data-col-${e}='${a+1}'] { grid-column: ${a+1} / span 2; }`).join("\n")}
  }
`,aL=b.m`
  --wall-ring: ${({theme:e})=>e.palette.site.border};
  --wall-face: ${({theme:e})=>e.palette.site.logoPlate};
`,aM=b.m`
  --wall-ring: rgb(255 255 255 / 0.22);
  --wall-face: color-mix(in srgb, ${({theme:e})=>e.palette.site.navy} 82%, #ffffff);
`,aB=b.U.section.withConfig({displayName:"HexLogoWall.styles__Root",componentId:"sc-56a3e0f0-0"})`
  ${({theme:e})=>(0,ex.j)(e)?aM:aL}
  --wall-ring-hover: ${({theme:e})=>e.palette.site.green};
  --wall-face-hover: ${({theme:e})=>e.palette.site.logoPlate};

  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.margin.large};
  width: 100%;
  background-color: transparent;

  &[data-dark='true'] {
    ${aM}
  }
`,aF=e=>b.m`
  ${({theme:t})=>(0,ex.j)(t)?e:""}
  [data-dark='true'] & {
    ${e}
  }
`,aR=b.U.ul.withConfig({displayName:"HexLogoWall.styles__Wall",componentId:"sc-56a3e0f0-1"})`
  display: grid;
  column-gap: ${({theme:e})=>e.margin.small};
  row-gap: ${({theme:e})=>e.margin.extrasmall};
  width: 100%;
  margin: 0 auto;
  padding: 0;
  list-style: none;
  ${({$columns:e,theme:t})=>{let a=a_(e);return b.m`
      ${aS("base",a.base,t.margin.small)}

      @media (min-width: ${"640px"}) {
        ${aS("sm",a.sm,t.margin.small)}
      }

      @media (min-width: ${"1024px"}) {
        ${aS("lg",a.lg,t.margin.small)}
      }
    `}}

  /* #2199: am Telefon mit Bewegung läuft stattdessen das Band */
  @media ${aU} {
    ${aB}[data-state='pending'] &,
    ${aB}[data-state='idle'] &,
    ${aB}[data-state='running'] &,
    ${aB}[data-state='ready'] & {
      display: none;
    }
  }
`,aP=b.q`
  from {
    opacity: 0;
    transform: translate(calc(var(--wall-dx) * 60%), calc(var(--wall-dy) * 60%)) scale(0.9);
  }
  to {
    opacity: 1;
    transform: none;
  }
`,aG=b.U.li.withConfig({displayName:"HexLogoWall.styles__Slot",componentId:"sc-56a3e0f0-2"})`
  --wall-dx: ${({$dx:e})=>e};
  --wall-dy: ${({$dy:e})=>e};
  position: relative;
  z-index: 0;
  min-width: 0;
  margin-bottom: -25%;
  transition: z-index 0s linear ${220}ms;

  &[data-zoom='true'] {
    z-index: 2;
    transition-delay: 0s;
  }

  /* #2199: Eintritt — die Waben fügen sich vom Rand her zusammen */
  ${aB}[data-state='idle'] & {
    opacity: 0;
  }
  ${aB}[data-state='running'] & {
    animation: ${aP} ${600}ms ${eb.S} ${({$delay:e})=>e}ms both;
  }
`,aH=b.U.div.withConfig({displayName:"HexLogoWall.styles__Tile",componentId:"sc-56a3e0f0-3"})`
  position: relative;
  aspect-ratio: 1;
  transform-origin: ${aT};
  transition: transform ${220}ms ease;

  li[data-zoom='true'] > & {
    transform: scale(${1.4});
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,aq=b.U.span.withConfig({displayName:"HexLogoWall.styles__Ring",componentId:"sc-56a3e0f0-4"})`
  position: absolute;
  inset: 0;
  ${K.p}
  background: var(--wall-ring);
  transition: background-color 200ms ease;

  li:hover &,
  li:focus-within & {
    background: var(--wall-ring-hover);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,aA=b.U.span.withConfig({displayName:"HexLogoWall.styles__Face",componentId:"sc-56a3e0f0-5"})`
  position: absolute;
  inset: ${2}px;
  ${K.p}
  background: var(--wall-face);
  transition: background-color 200ms ease;

  ${aF(b.m`
    inset: 1px;
  `)}

  li:hover &,
  li:focus-within & {
    background: var(--wall-face-hover);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,aE=b.U.span.withConfig({displayName:"HexLogoWall.styles__Logo",componentId:"sc-56a3e0f0-6"})`
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
  ${aF(b.m`
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
`,aW=b.U.a.withConfig({displayName:"HexLogoWall.styles__LogoLink",componentId:"sc-56a3e0f0-7"})`
  position: absolute;
  inset: 0;
  display: block;
  border-radius: 24px;

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.palette.site.green};
    outline-offset: 2px;
  }
`,aK=b.q`
  from { transform: translateX(0); }
  to { transform: translateX(calc(-1 * var(--wall-marquee-shift))); }
`,aD=b.U.div.withConfig({displayName:"HexLogoWall.styles__Marquee",componentId:"sc-56a3e0f0-8"})`
  display: none;
  overflow: hidden;
  /* Auslaufen an den Rändern statt harter Kante */
  mask-image: linear-gradient(to right, transparent, #000 8%, #000 92%, transparent);

  @media ${aU} {
    ${aB}[data-state='pending'] &,
    ${aB}[data-state='idle'] &,
    ${aB}[data-state='running'] &,
    ${aB}[data-state='ready'] & {
      display: block;
    }
  }
`,aV=b.U.ul.withConfig({displayName:"HexLogoWall.styles__MarqueeTrack",componentId:"sc-56a3e0f0-9"})`
  --wall-marquee-shift: calc(${({$count:e})=>e} * (${az} + ${({theme:e})=>e.margin.small}));
  display: flex;
  gap: ${({theme:e})=>e.margin.small};
  /* so breit wie das Band; die Kacheln laufen darüber hinaus und werden vom
     Band beschnitten — keine Box breiter als die Ansicht (Wächter
     public-no-horizontal-scroll) */
  width: 100%;
  margin: 0;
  padding: ${({theme:e})=>e.margin.extrasmall} 0;
  list-style: none;
  animation: ${aK} ${({$count:e})=>3500*Math.max(4,e)}ms linear infinite;

  [data-paused='true'] > &,
  ${aD}:hover > &,
  ${aD}:active > &,
  ${aD}:focus-within > &,
  ${aB}[data-visible='false'] & {
    animation-play-state: paused;
  }
`,aY=b.U.li.withConfig({displayName:"HexLogoWall.styles__MarqueeItem",componentId:"sc-56a3e0f0-10"})`
  flex: 0 0 ${az};
  width: ${az};
`,aO=b.U.button.withConfig({displayName:"HexLogoWall.styles__MarqueeToggle",componentId:"sc-56a3e0f0-11"})`
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

  ${aB}[data-dark='true'] & {
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

  @media ${aU} {
    [data-state='pending'] > &,
    [data-state='idle'] > &,
    [data-state='running'] > &,
    [data-state='ready'] > & {
      display: inline-flex;
    }
  }
`,aZ=({item:e,testId:a,sizes:i})=>(0,t.jsx)(aE,{children:(0,t.jsx)(aw.default,{src:e.logoUrl,alt:`${e.companyName} logo`,fill:!0,sizes:i,"data-testid":a})}),aX=e=>{let{items:i,columns:n,headline:r,description:o,surface:s,onFirstView:d,onFirstHover:l,onMarqueeToggle:c,className:m,dataTestId:p="hex-logo-wall",itemDataTestIdPrefix:h}=e,{tr:g}=(0,ay.f)(),f=h??p,u=a_(n),x={base:aI(i.length,u.base),sm:aI(i.length,u.sm),lg:aI(i.length,u.lg)},b=((e,t)=>{if(0===e.length)return[];let a={x:t/2,y:(Math.max(...e.map(e=>e.row))+1-1)/2},i=e.map(e=>({x:e.col/2-a.x,y:e.row-a.y})),n=Math.max(...i.map(e=>Math.hypot(e.x,e.y)),1e-4);return i.map(e=>{let t=Math.hypot(e.x,e.y),a=t<.01?{x:0,y:1}:{x:e.x/t,y:e.y/t},i=Math.round((1-t/n)*4);return{dx:aN(a.x),dy:aN(a.y),delay:120*Math.min(4,i)}})})(x.lg,u.lg),[w,y]=(0,a.useState)(null),v=(0,a.useRef)(null),{state:k,visible:j}=(0,S.f)(v,1080,.2),_=(0,a.useRef)(!1);(0,a.useEffect)(()=>{j&&!_.current&&(_.current=!0,d?.())},[j,d]);let C=(0,a.useRef)(!1),I=(0,a.useCallback)(e=>t=>{"mouse"!==t.pointerType||(y(e),C.current||(C.current=!0,l?.()))},[l]),N=(0,a.useCallback)(e=>t=>{(e=>{try{return e.matches(":focus-visible")}catch{return!0}})(t.target)&&y(e)},[]),T=(0,a.useCallback)(()=>y(null),[]),[U,z]=(0,a.useState)(!1),L=(0,a.useCallback)(()=>{let e=!U;z(e),c?.(e)},[U,c]);return(0,t.jsxs)(aB,{ref:v,className:m,"data-testid":p,"data-columns":n,"data-count":i.length,"data-rows":aC(i.length,u.lg).length,"data-state":k,"data-visible":j?"true":"false","data-dark":"dark"===s?"true":"false",children:[(0,t.jsx)($.f,{headline:r,description:o,align:"center",dataTestId:`${p}-header`}),(0,t.jsx)(aR,{$columns:n,"data-testid":`${p}-wall`,children:i.map((e,a)=>{let i=`${f}-partner-${a}`,n=(0,t.jsx)(aZ,{item:e,testId:`${i}-logo`,sizes:"(max-width: 640px) 60vw, 260px"});return(0,t.jsx)(aG,{"data-testid":i,"data-row":x.lg[a].row,"data-col-base":x.base[a].col,"data-col-sm":x.sm[a].col,"data-col-lg":x.lg[a].col,"data-zoom":w===a?"true":"false","data-zoom-origin":aT,$dx:b[a].dx,$dy:b[a].dy,$delay:b[a].delay,onPointerEnter:I(a),onPointerLeave:T,onFocus:N(a),onBlur:T,children:(0,t.jsxs)(aH,{children:[(0,t.jsx)(aq,{"aria-hidden":"true"}),(0,t.jsx)(aA,{"aria-hidden":"true"}),e.websiteUrl?(0,t.jsx)(aW,{href:e.websiteUrl,...aj.d,"aria-label":e.companyName,"data-testid":`${i}-link`,children:n}):n]})},a)})}),(0,t.jsx)(aD,{"data-testid":`${p}-marquee`,"data-paused":U?"true":"false",children:(0,t.jsx)(aV,{"data-part":"track",$count:i.length,children:[0,1].map(e=>i.map((a,i)=>{let n=1===e,r=(0,t.jsx)(aZ,{item:a,sizes:"96px"});return(0,t.jsx)(aY,{"aria-hidden":n?"true":void 0,"data-testid":n?void 0:`${f}-marquee-partner-${i}`,children:(0,t.jsxs)(aH,{children:[(0,t.jsx)(aq,{"aria-hidden":"true"}),(0,t.jsx)(aA,{"aria-hidden":"true"}),a.websiteUrl?(0,t.jsx)(aW,{href:a.websiteUrl,...aj.d,"aria-label":a.companyName,tabIndex:n?-1:void 0,children:r}):r]})},`${e}-${i}`)}))})}),(0,t.jsx)(aO,{type:"button",onClick:L,"aria-pressed":U,"aria-label":U?g("imagefilm.play",{defaultValue:"Abspielen"}):g("imagefilm.pause",{defaultValue:"Pause"}),"data-testid":`${p}-marquee-toggle`,children:U?(0,t.jsx)(ak.f,{}):(0,t.jsx)(av.f,{})})]})};e.i(4185);var aJ=e.i(566457);let aQ=e=>Math.round(100*e)/100,a0=e=>aQ(e.center.cx-e.center.size/2);function a1(e,t=!1){let a=Math.max(1,e),i=t?36:22,n=aQ(i+(t?14:12)),r=Array.from({length:a},(e,t)=>aQ((t+.5)/Math.max(1,a)*100)),o=aQ((i+n)/2),s=r.map(e=>`M 50 ${aQ(i)} C 50 ${o} ${e} ${o} ${e} ${n}`);return{width:100,height:n,center:{cx:50,top:0,size:i},ends:r,lines:s}}var a2=e.i(764576);let a5=[{id:"center",start:0,duration:500},{id:"lines",start:350,duration:800,count:4,stagger:180},{id:"members",start:900,duration:450,count:4,stagger:180}];(0,a2.L)(a5);let a6=(0,a2.E)(a5),a4="640px",a3=e=>`${e}ms`,a9=(0,a2.G)(a5,"center"),a7=(0,a2.G)(a5,"lines"),a8=(0,a2.G)(a5,"members"),ie=b.q`
  from { opacity: 0; transform: scale(0.7); }
  to { opacity: 1; transform: scale(1); }
`,it=b.q`
  from { stroke-dashoffset: 1; }
  to { stroke-dashoffset: 0; }
`,ia=e=>{let t=Math.round(100/Math.max(1,e)*100)/100;return b.q`
    0% { stroke-dashoffset: ${1.12}; opacity: 0; }
    ${.1*t}% { opacity: 1; }
    ${.9*t}% { opacity: 1; }
    ${t}% { stroke-dashoffset: ${-.12}; opacity: 0; }
    100% { stroke-dashoffset: ${-.12}; opacity: 0; }
  `},ii=b.m`
  --wall-ring: ${({theme:e})=>e.palette.site.border};
  --wall-face: ${({theme:e})=>e.palette.site.logoPlate};
`,ir=b.m`
  --wall-ring: rgb(255 255 255 / 0.22);
  --wall-face: color-mix(in srgb, ${({theme:e})=>e.palette.site.navy} 82%, #ffffff);
`,io=b.U.section.withConfig({displayName:"PartnerGroup.styles__Root",componentId:"sc-ad331ac6-0"})`
  ${({theme:e})=>(0,ex.j)(e)?ir:ii}
  --wall-ring-hover: ${({theme:e})=>e.palette.site.green};
  --wall-face-hover: ${({theme:e})=>e.palette.site.logoPlate};
  --group-line: ${({theme:e})=>(0,ex.j)(e)?e.palette.site.muted:e.palette.site.border};
  --group-line-active: ${({theme:e})=>e.palette.site.green};
  /* #2231: Ring der mit hervorgehobenen Partnerwabe — Markenfarbe, leichter
     (#2246: nur noch RIGK, wenn eine Tochter gezeigt ist) */
  --group-ring-linked: color-mix(in srgb, ${({theme:e})=>e.palette.site.green} 55%, transparent);
  --group-heading: ${({theme:e})=>(0,e$.N)("heading",e.palette.site.heading)};
  --group-text: ${({theme:e})=>(0,e$.N)("text",e.palette.site.text)};
  --group-muted: ${({theme:e})=>(0,e$.N)("muted",e.palette.site.muted)};

  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.margin.large};
  width: 100%;

  &[data-dark='true'] {
    ${ir}
    --group-line: rgb(255 255 255 / 0.35);
  }
`,is=b.U.div.withConfig({displayName:"PartnerGroup.styles__Stage",componentId:"sc-ad331ac6-1"})`
  position: relative;
  width: 100%;
  /* #2226: Lesebreite der Textvorgabe (8 + 2) im Rasterblock, vorher 56rem */
  max-width: ${(0,w.U)("100%")};
  margin: 0 auto;
  aspect-ratio: ${({$compact:e})=>`${e.width} / ${e.height}`};

  @media (min-width: ${a4}) {
    aspect-ratio: ${({$wide:e})=>`${e.width} / ${e.height}`};
  }
`,id=b.U.svg.withConfig({displayName:"PartnerGroup.styles__Lines",componentId:"sc-ad331ac6-2"})`
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
  @media (min-width: ${a4}) {
    &[data-variant='wide'] {
      display: block;
    }
    &[data-variant='compact'] {
      display: none;
    }
  }
`,il=b.U.path.withConfig({displayName:"PartnerGroup.styles__Line",componentId:"sc-ad331ac6-3"})`
  fill: none;
  stroke: var(--group-line);
  stroke-width: var(--group-stroke);
  stroke-linecap: round;
  stroke-dasharray: 1 1;
  stroke-dashoffset: 0;
  transition:
    stroke 200ms ease,
    stroke-width 200ms ease;

  ${io}[data-state='idle'] & {
    stroke-dashoffset: 1;
  }
  ${({$index:e})=>b.m`
  ${io}[data-state='running'] & {
    animation: ${it} ${a3((0,a2.g)(a7,e).duration)} ${eb.B}
      ${a3((0,a2.g)(a7,e).delay)} both;
  }
`}

  &[data-active='true'] {
    stroke: var(--group-line-active);
    stroke-width: calc(var(--group-stroke) * 1.5);
  }
`,ic=b.U.path.withConfig({displayName:"PartnerGroup.styles__Pulse",componentId:"sc-ad331ac6-4"})`
  fill: none;
  stroke: var(--group-line-active);
  stroke-width: calc(var(--group-stroke) * 2);
  stroke-linecap: round;
  stroke-dasharray: ${.12} ${1.88};
  stroke-dashoffset: ${1.12};
  opacity: 0;

  ${io}[data-state='ready'] & {
    animation: ${({$count:e})=>ia(e)}
      ${({$count:e})=>a3(2400*e)} linear infinite;
    animation-delay: ${({$index:e})=>a3(2400*e)};
  }
  /* #2231: Gesellschafter gezeigt — alle Lichtpunkte laufen gemeinsam zu den Mitgliedern */
  ${io}[data-state='ready'][data-active='center'] & {
    animation: ${ia(1)} ${a3(2400)} linear infinite;
    animation-delay: 0ms;
  }
  ${io}[data-state='ready'][data-visible='false'] & {
    animation-play-state: paused;
  }
  @media (prefers-reduced-motion: reduce) {
    ${io}[data-state] & {
      animation: none;
      opacity: 0;
    }
  }
`,im=b.U.div.withConfig({displayName:"PartnerGroup.styles__Center",componentId:"sc-ad331ac6-5"})`
  position: absolute;
  top: 0;
  left: ${({$compact:e})=>a0(e)}%;
  width: ${({$compact:e})=>e.center.size}%;

  @media (min-width: ${a4}) {
    left: ${({$wide:e})=>a0(e)}%;
    width: ${({$wide:e})=>e.center.size}%;
  }

  ${io}[data-state='idle'] & {
    opacity: 0;
  }
  ${io}[data-state='running'] & {
    animation: ${ie} ${a3(a9.duration)} ${eb.S} ${a3(a9.start)} both;
  }
`,ip=e=>Math.floor((100-e.center.size)/2/e.center.size*100)-8,ih=b.U.div.withConfig({displayName:"PartnerGroup.styles__CenterCaption",componentId:"sc-ad331ac6-6"})`
  position: absolute;
  top: 50%;
  left: calc(100% + ${({theme:e})=>e.margin.extrasmall});
  width: max-content;
  max-width: ${({$compact:e})=>ip(e)}%;

  @media (min-width: ${a4}) {
    left: calc(100% + ${({theme:e})=>e.margin.small});
    max-width: min(16rem, ${({$wide:e})=>ip(e)}%);
  }

  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
  text-align: left;
`,ig=b.U.ul.withConfig({displayName:"PartnerGroup.styles__Members",componentId:"sc-ad331ac6-7"})`
  display: grid;
  grid-template-columns: repeat(${({$count:e})=>Math.max(1,e)}, minmax(0, 1fr));
  column-gap: ${({theme:e})=>e.margin.small};
  width: 100%;
  max-width: ${(0,w.U)("100%")};
  /* die Linien enden an der Spitze der Mitglieder-Waben */
  margin: calc(-1 * ${({theme:e})=>e.margin.large}) auto 0;
  padding: 0;
  list-style: none;
`,iu=b.U.li.withConfig({displayName:"PartnerGroup.styles__Member",componentId:"sc-ad331ac6-8"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.125rem;
  min-width: 0;
  text-align: center;

  ${io}[data-state='idle'] & {
    opacity: 0;
  }
  ${({$index:e})=>b.m`
  ${io}[data-state='running'] & {
    animation: ${ie} ${a3((0,a2.g)(a8,e).duration)} ${eb.S}
      ${a3((0,a2.g)(a8,e).delay)} both;
  }
`}

  > div:first-child {
    width: min(9rem, 80%);
    margin-bottom: ${({theme:e})=>e.margin.extrasmall};
  }
`,ix=b.U.div.withConfig({displayName:"PartnerGroup.styles__Tile",componentId:"sc-ad331ac6-9"})`
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  transition: transform 200ms ease;

  ${"@media (hover: hover) and (pointer: fine)"} {
    li:hover > &,
    li:focus-within > &,
    &[data-highlight='active'] {
      transform: translateY(-4px);
    }
  }
  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,i$=(0,b.U)(aq).withConfig({displayName:"PartnerGroup.styles__Ring",componentId:"sc-ad331ac6-10"})`
  [data-highlight='linked'] > & {
    background: var(--group-ring-linked);
  }
  [data-highlight='active'] > & {
    background: var(--wall-ring-hover);
  }
`,ib=(0,b.U)(aA).withConfig({displayName:"PartnerGroup.styles__Face",componentId:"sc-ad331ac6-11"})`
  [data-highlight='active'] > & {
    background: var(--wall-face-hover);
  }
`,iw=(0,b.U)(aE).withConfig({displayName:"PartnerGroup.styles__Logo",componentId:"sc-ad331ac6-12"})`
  [data-highlight='active'] > & img,
  [data-highlight='active'] > a > & img {
    mix-blend-mode: multiply;
    filter: none;
    opacity: 1;
  }
`,iy=(0,b.U)(aW).withConfig({displayName:"PartnerGroup.styles__LogoLink",componentId:"sc-ad331ac6-13"})``,iv=b.U.span.withConfig({displayName:"PartnerGroup.styles__Role",componentId:"sc-ad331ac6-14"})`
  font-family: ${({theme:e})=>e.font.secondaryFamily};
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.palette.site.greenText};

  ${io}[data-dark='true'] & {
    color: ${({theme:e})=>e.palette.site.green};
  }
`,ik=b.U.span.withConfig({displayName:"PartnerGroup.styles__Name",componentId:"sc-ad331ac6-15"})`
  font-family: ${({theme:e})=>e.font.primaryFamily};
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.3;
  color: var(--group-heading);
  overflow-wrap: break-word;

  @media (max-width: ${a4}) {
    font-size: 0.875rem;
  }
`,ij=b.U.span.withConfig({displayName:"PartnerGroup.styles__Caption",componentId:"sc-ad331ac6-16"})`
  font-family: ${({theme:e})=>e.font.secondaryFamily};
  font-size: 0.875rem;
  line-height: 1.4;
  color: var(--group-muted);
  overflow-wrap: break-word;
  hyphens: auto;

  @media (max-width: ${a4}) {
    font-size: 0.75rem;
  }
`,i_=({item:e,sizes:a,testId:i,highlight:n})=>{let r=(0,t.jsx)(iw,{children:(0,t.jsx)(aw.default,{src:e.logoUrl,alt:`${e.companyName} logo`,fill:!0,sizes:a})});return(0,t.jsxs)(ix,{"data-testid":`${i}-tile`,"data-highlight":n,children:[(0,t.jsx)(i$,{"aria-hidden":"true"}),(0,t.jsx)(ib,{"aria-hidden":"true"}),e.websiteUrl?(0,t.jsx)(iy,{href:e.websiteUrl,...aj.d,"aria-label":e.companyName,"data-testid":`${i}-link`,children:r}):r]})},iC=({item:e})=>(0,t.jsxs)(t.Fragment,{children:[e.role&&(0,t.jsx)(iv,{children:e.role}),(0,t.jsx)(ik,{children:e.companyName}),e.description&&(0,t.jsx)(ij,{children:e.description})]}),iI=({items:e,headline:i,description:n,surface:r,onFirstView:o,onFirstHover:s,className:d,dataTestId:l="partner-group"})=>{let[c,...m]=e,p=(0,a.useMemo)(()=>a1(m.length,!1),[m.length]),h=(0,a.useMemo)(()=>a1(m.length,!0),[m.length]),g=(0,a.useRef)(null),{state:f,visible:u}=(0,S.f)(g,a6,.3),[x,b]=(0,a.useState)(null),w=(0,a.useRef)(!1);(0,a.useEffect)(()=>{u&&!w.current&&(w.current=!0,o?.())},[u,o]);let y=(0,a.useRef)(!1),v=(0,a.useCallback)(e=>t=>{"mouse"!==t.pointerType||(b(e),y.current||(y.current=!0,s?.()))},[s]),k=(0,a.useCallback)(()=>b(null),[]);if(!c)return(0,t.jsx)(t.Fragment,{});let j="center"===x,_="number"==typeof x,C=(e,a)=>(0,t.jsx)(id,{viewBox:`0 0 ${e.width} ${e.height}`,preserveAspectRatio:"none","aria-hidden":"true",focusable:"false","data-variant":a,children:e.lines.map((a,i)=>(0,t.jsxs)("g",{children:[(0,t.jsx)(il,{d:a,pathLength:1,"data-line":i,"data-active":x===i||"center"===x?"true":"false",$index:i}),(0,t.jsx)(ic,{d:a,pathLength:1,"data-part":"pulse",$index:i,$count:e.lines.length})]},i))});return(0,t.jsxs)(io,{ref:g,className:d,"data-testid":l,"data-state":f,"data-visible":u?"true":"false","data-dark":"dark"===r?"true":"false","data-active":null===x?"":String(x),"data-count":m.length,children:[(0,t.jsx)($.f,{headline:i,description:n,align:"center",dataTestId:`${l}-header`}),(0,t.jsxs)(is,{$wide:p,$compact:h,children:[C(p,"wide"),C(h,"compact"),(0,t.jsxs)(im,{"data-testid":`${l}-center`,"data-active":j?"true":"false","data-linked":_?"true":"false",$wide:p,$compact:h,onPointerEnter:v("center"),onPointerLeave:k,onFocus:()=>b("center"),onBlur:k,children:[(0,t.jsx)(i_,{item:c,sizes:"(max-width: 640px) 40vw, 220px",testId:`${l}-center`,highlight:j?"active":_?"linked":"none"}),(0,t.jsx)(ih,{$wide:p,$compact:h,children:(0,t.jsx)(iC,{item:c})})]})]}),(0,t.jsx)(ig,{$count:m.length,children:m.map((e,a)=>(0,t.jsxs)(iu,{"data-testid":`${l}-member-${a}`,"data-active":x===a?"true":"false",$index:a,onPointerEnter:v(a),onPointerLeave:k,onFocus:()=>b(a),onBlur:k,children:[(0,t.jsx)(i_,{item:e,sizes:"(max-width: 640px) 28vw, 150px",testId:`${l}-member-${a}`,highlight:x===a?"active":"none"}),(0,t.jsx)(iC,{item:e})]},a))})]})};function iN({block:e,locale:a,dataTestId:i}){let{headline:n,description:o,partners:s}=e.props;return(0,t.jsx)(F,{headline:n?(0,r.u)(n,a):void 0,description:o?(0,r.u)(o,a):void 0,headerAlign:"center",columns:2,dataTestId:`${i}-grid`,children:s.map((e,n)=>(0,t.jsx)(aJ.f,{companyName:e.companyName,logoUrl:e.logoUrl,description:e.description?(0,r.u)(e.description,a):void 0,websiteUrl:e.websiteUrl,role:e.role?(0,r.u)(e.role,a):void 0,variant:"row",dataTestId:`${i}-partner-${n}`},n))})}e.i(624813);var iT=e.i(775175),iU=e.i(247902),iz=e.i(825969),iS=e.i(499911),iL=e.i(696984),iM=e.i(900490);let iB=b.U.div.withConfig({displayName:"NewsTeaserBlock__Root",componentId:"sc-f46a5f0-0"})`
  display: flex;
  flex-direction: column;
  gap: ${w.y.stackGap};
`,iF=b.U.ul.withConfig({displayName:"NewsTeaserBlock__Grid",componentId:"sc-f46a5f0-1"})`
  /* #2229 (Moritz 03.11.: „mehr Luft"): Kartenabstand stackGap (32 px) statt Gutter */
  --gap: ${w.y.stackGap};
  /* #2232: Karten ohne Rahmen (NewsCard frameless) — kein Innenabstand, kein Rand */
  --card-pad: 0px;
  --card-border: 0px;
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

  /* #2229: Kartenbilder 16:9 */
  [data-card-image] {
    aspect-ratio: ${w.y.cardImageRatio};
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(6, minmax(0, 1fr));

    /* #2202/#2229 (Entscheidung 03.11.: weniger Bildfläche): alle Bilder so
       hoch wie die der kleinen Karten — Drittel des Rasters (seit #2232 ohne
       Innenabstand und Rand), im Verhältnis 16:9. Die großen Karten schneiden flacher zu
       (bei 1440 rund 2,9 : 1); ein festes Verhältnis passte nur bei einer Breite. */
    [data-card-image] {
      aspect-ratio: auto;
      height: calc(
        ((100cqw - 2 * var(--gap)) / 3 - 2 * var(--card-pad) - 2 * var(--card-border)) /
          (${w.y.cardImageRatio})
      );
    }
  }
`,iR=b.U.li.withConfig({displayName:"NewsTeaserBlock__Item",componentId:"sc-f46a5f0-2"})`
  min-width: 0;

  @media (min-width: 640px) {
    grid-column: span ${({$gross:e})=>e?2:1};
  }

  @media (min-width: 768px) {
    grid-column: span ${({$gross:e})=>e?3:2};
  }
`,iP=b.U.div.withConfig({displayName:"NewsTeaserBlock__More",componentId:"sc-f46a5f0-3"})`
  text-align: center;
  ${({$cta:e})=>(0,iM.h)(e)}

  @media (min-width: ${w.y.breakpoints.md}) {
    margin-top: ${w.y.stackGap};
  }
`,iG=b.U.section.withConfig({displayName:"SpecTable.styles__Root",componentId:"sc-b0630cd5-0"})`
  display: flex;
  flex-direction: column;
  gap: ${w.y.stackGap};
  box-sizing: border-box;
  width: 100%;
`,iH=b.U.div.withConfig({displayName:"SpecTable.styles__Scroll",componentId:"sc-b0630cd5-1"})`
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
`,iq=b.U.table.withConfig({displayName:"SpecTable.styles__Table",componentId:"sc-b0630cd5-2"})`
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
`,iA=b.U.th.withConfig({displayName:"SpecTable.styles__HeadCell",componentId:"sc-b0630cd5-3"})`
  padding: ${({theme:e})=>e.padding.small};
  font-weight: 700;
  text-align: left;
  vertical-align: bottom;
  color: ${({theme:e})=>e.palette.text.onAccent};
  background: ${({theme:e})=>e.palette.site.blueDark};
`,iE=b.U.th.withConfig({displayName:"SpecTable.styles__RowHeadCell",componentId:"sc-b0630cd5-4"})`
  padding: ${({theme:e})=>e.padding.small};
  font-weight: 700;
  text-align: left;
  vertical-align: baseline;
  color: ${({theme:e})=>e.palette.site.heading};
  background-color: transparent;
`,iW=b.U.td.withConfig({displayName:"SpecTable.styles__Cell",componentId:"sc-b0630cd5-5"})`
  padding: ${({theme:e})=>e.padding.small};
  vertical-align: baseline;
`,iK=e=>{let{headline:a,description:i,columns:n,rows:r,className:o,dataTestId:s="spec-table"}=e;return(0,t.jsxs)(iG,{className:o,"data-testid":s,"data-columns":n.length,"data-rows":r.length,children:[(0,t.jsx)($.f,{headline:a,description:i,dataTestId:`${s}-header`}),(0,t.jsx)(iH,{children:(0,t.jsxs)(iq,{"data-testid":`${s}-table`,children:[(0,t.jsx)("thead",{children:(0,t.jsx)("tr",{children:n.map((e,a)=>(0,t.jsx)(iA,{scope:"col","data-testid":`${s}-column`,children:e},a))})}),(0,t.jsx)("tbody",{children:r.map((e,a)=>(0,t.jsx)("tr",{"data-testid":`${s}-row`,children:n.map((a,i)=>0===i?(0,t.jsx)(iE,{scope:"row","data-testid":`${s}-cell`,children:e[i]??""},i):(0,t.jsx)(iW,{"data-testid":`${s}-cell`,children:e[i]??""},i))},a))})]})})]})};e.i(597734);var iD=e.i(655750),iV=e.i(153120),iY=e.i(691423),iO=e.i(356127);let iZ=b.U.div.withConfig({displayName:"DissolvePhoto.styles__PhotoArea",componentId:"sc-99e3472c-0"})`
  position: relative;
  width: 100%;
  height: 100%;
  min-width: 0;
`,iX=b.U.svg.withConfig({displayName:"DissolvePhoto.styles__ClipDefs",componentId:"sc-99e3472c-1"})`
  position: absolute;
  width: 0;
  height: 0;
  overflow: hidden;
`,iJ=b.q`
  from { opacity: 0; }
  to { opacity: 1; }
`,iQ=b.U.div.withConfig({displayName:"DissolvePhoto.styles__PhotoClip",componentId:"sc-99e3472c-2"})`
  position: absolute;
  inset: 0;

  &[data-state='pending'] {
    opacity: 0;
  }

  &[data-state='shown'] {
    animation: ${iJ} 400ms ease-out both;

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  }

  img {
    object-fit: cover;
    object-position: ${({$focal:e})=>e};
  }
`,i0=b.U.svg.withConfig({displayName:"DissolvePhoto.styles__SparkLayer",componentId:"sc-99e3472c-3"})`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;

  path[data-tone='green'] {
    fill: ${({theme:e})=>e.palette.site.green};
  }

  path[data-tone='navy'] {
    fill: ${({theme:e,$tone:t})=>"band"===t?`color-mix(in srgb, ${e.palette.site.navy} 65%, #ffffff)`:e.palette.site.blue};
  }
`;var i1=e.i(468864);let i2=({src:e,alt:i,sizes:n,priority:r=!1,direction:o,stacked:s,zoneTiles:d,sparks:l,seed:c,focal:p,tone:h,onOrientation:g,band:f,className:u,dataTestId:x})=>{let $,b=(0,a.useRef)(null),{width:w,height:y}=(e=>{let[t,i]=(0,a.useState)({width:0,height:0});return(0,a.useEffect)(()=>{let t=e.current;if(!t)return;let a=()=>{let e=t.clientWidth,a=t.clientHeight;i(t=>t.width===e&&t.height===a?t:{width:e,height:a})};if(a(),"u"<typeof ResizeObserver)return;let n=new ResizeObserver(a);return n.observe(t),()=>n.disconnect()},[e]),t})(b),v=(0,i1.f)(b,f?.ref),k=($=(0,a.useId)(),`mt-dissolve-${$.replace(/[^a-zA-Z0-9_-]/g,"")}`),j=s?"down":o,_=f?.zoneTop,C=f?.zoneBottom,I=void 0!==f,N=(0,a.useMemo)(()=>I?{...v,zoneTop:_,zoneBottom:C}:void 0,[I,v,_,C]),T=(0,a.useMemo)(()=>(0,iO.C)({width:w,height:y,direction:j,seed:c,zoneTiles:d,sparks:l,lattice:N}),[w,y,j,c,d,l,N]),U=(0,a.useMemo)(()=>(0,iO.B)(T),[T]),z=U.length>0,S=g?e=>{let{naturalWidth:t,naturalHeight:a}=e.currentTarget;t>0&&a>0&&g((0,m.D)(t,a))}:void 0;return(0,t.jsxs)(iZ,{ref:b,className:u,"data-testid":x,"data-direction":j,"data-measured":z?"true":"false","data-tiles":T.tiles.length,"data-zone-tiles":T.zoneTiles,"data-sparks":T.sparks.length,"data-tile-size":T.size?T.size.toFixed(2):void 0,"data-lattice":N?"band":"photo","data-edge-cells":T.edgeCells,children:[z&&(0,t.jsx)(iX,{"aria-hidden":"true",focusable:"false",width:"0",height:"0",children:(0,t.jsx)("defs",{children:(0,t.jsx)("clipPath",{id:k,clipPathUnits:"userSpaceOnUse",children:(0,t.jsx)("path",{d:U})})})}),z&&T.sparks.length>0&&(0,t.jsx)(i0,{$tone:h,viewBox:`0 0 ${Math.round(w)} ${Math.round(y)}`,preserveAspectRatio:"none","aria-hidden":"true",focusable:"false","data-testid":`${x}-sparks`,children:T.sparks.map(e=>(0,t.jsx)("path",{d:(0,iO.t)(e),"data-tone":e.tone},e.key))}),(0,t.jsx)(iQ,{$focal:(0,iY.A)(p),"data-state":z?"shown":"pending",style:z?{clipPath:`url(#${k})`}:void 0,children:(0,t.jsx)(aw.default,{src:e,alt:i,fill:!0,sizes:n,loading:r?"eager":"lazy",fetchPriority:r?"high":void 0,onLoad:S})})]})};var i5=e.i(313275);let i6=b.U.div.withConfig({displayName:"HexPhoto.styles__PhotoFrame",componentId:"sc-cf03ab86-0"})`
  position: relative;
  width: 100%;
  aspect-ratio: ${({$orientation:e})=>"portrait"===e?K.w:"1 / 1"};
  overflow: hidden;
  ${({$orientation:e})=>"portrait"===e?K.q:K.p}

  img {
    object-fit: cover;
    object-position: ${({$focal:e})=>e};
    ${({$zoom:e,$focal:t})=>e&&b.m`
        transform: scale(${e});
        transform-origin: ${t};
      `}
  }
`,i4=b.U.div.withConfig({displayName:"HexPhoto.styles__GraphicFrame",componentId:"sc-cf03ab86-1"})`
  position: relative;
  width: 100%;

  img {
    display: block;
    width: 100%;
    height: auto;
    object-fit: contain;
  }
`,i3=({src:e,alt:a,sizes:i,priority:n=!1,orientation:r,focal:o,graphic:s=!1,zoom:d,onOrientation:l,className:c,dataTestId:p})=>{let h=n?"eager":"lazy",g=n?"high":void 0,f=l?e=>{let{naturalWidth:t,naturalHeight:a}=e.currentTarget;t>0&&a>0&&l((0,m.D)(t,a))}:void 0;if(s){let n=(0,i5.f)(e);return(0,t.jsx)(i4,{className:c,"data-testid":p,"data-shape":"graphic","data-loading":h,children:(0,t.jsx)(aw.default,{src:e,alt:a,width:n?.width??704,height:n?.height??396,sizes:i,loading:h,fetchPriority:g,onLoad:f})})}return(0,t.jsx)(i6,{className:c,$orientation:r,$focal:(0,iY.A)(o),$zoom:d,"data-testid":p,"data-shape":"hex","data-orientation":r,"data-loading":h,children:(0,t.jsx)(aw.default,{src:e,alt:a,fill:!0,sizes:i,loading:h,fetchPriority:g,onLoad:f})})},i9=w.y.breakpoints.md,i7=w.y.breakpoints.lg,i8=w.y.breakpoints.row,ne=w.M.media.lg.span,nt=w.y.columns;w.y.sectionPadding.phone;let na=w.y.rowWidth,ni=w.y.gutter,nn=(e,t)=>b.m`
  padding-${e}: calc(${w.y.sectionPadding.phone} * ${t});

  @media (min-width: ${w.y.breakpoints.section}) {
    padding-${e}: calc(${w.y.sectionPadding.desktop} * ${t});
  }
`,nr="(max-width: 767px) 40vw, (max-width: 991px) 20vw, min(15vw, 14rem)",no=(e,t)=>`${e} / span ${t}`,ns=b.U.article.withConfig({displayName:"MediaTextForm.styles__FormRoot",componentId:"sc-e49304da-0"})`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  align-items: center;
  gap: ${ni};
  width: 100%;
  box-sizing: border-box;

  > [data-testid$='-figure'] {
    order: -1;
  }

  ${({$variant:e})=>"magazin"===e&&b.m`
      align-items: start;

      > :first-child {
        order: -2;
      }
    `}

  @media (min-width: ${i9}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));

    > [data-testid$='-figure'] {
      order: ${({$side:e})=>"left"===e?-1:0};
    }

    > [data-testid$='-note'] {
      grid-column: ${({$side:e})=>"left"===e?"2":"1"};
    }

    ${({$variant:e})=>"magazin"===e&&b.m`
        > :first-child {
          grid-column: 1 / -1;
        }
      `}
  }

  @media (min-width: ${i7}) {
    grid-template-columns: repeat(${ne}, minmax(0, 1fr));
    ${({$variant:e,$side:t,$withNote:a})=>{let i=((e,t,a)=>{let i="left"===t;switch(e){case"grosswabe":return i?{figure:no(1,5),text:no(6,5)}:{figure:no(6,5),text:no(1,5)};case"dreiklang":if(!a)return i?{figure:no(1,4),text:no(5,6)}:{figure:no(7,4),text:no(1,6)};return i?{figure:no(1,4),text:no(5,4),note:no(9,2)}:{figure:no(7,4),text:no(1,4),note:no(5,2)};case"stapel":return i?{figure:no(1,5),text:no(7,4)}:{figure:no(6,5),text:no(1,4)};default:return i?{figure:no(1,4),text:no(5,6)}:{figure:no(7,4),text:no(1,6)}}})(e,t,a),n="magazin"===e?2:1;return b.m`
        > [data-testid$='-figure'] {
          grid-column: ${i.figure};
          grid-row: ${n};
          order: 0;
        }

        > [data-testid$='-text'] {
          grid-column: ${i.text};
          grid-row: ${n};
        }

        > [data-testid$='-note'] {
          grid-column: ${i.note??"auto"};
          grid-row: ${n};
        }
      `}}
  }
`,nd=b.U.div.withConfig({displayName:"MediaTextForm.styles__FormText",componentId:"sc-e49304da-1"})`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.margin.small};
  min-width: 0;
`,nl={grosswabe:{main:{landscape:{outer:0,top:6,width:78},portrait:{outer:4,top:2,width:64}},crop:{landscape:{inner:2,top:0,width:30},portrait:{inner:2,top:4,width:32}},fact:{landscape:{inner:6,bottom:4,width:26},portrait:{inner:4,bottom:6,width:30}},dot:{landscape:{outer:1,bottom:3,width:12},portrait:{outer:0,top:58,width:12}}},stapel:{main:{landscape:{outer:6,top:0,width:72},portrait:{outer:8,top:0,width:60}},small:{landscape:{inner:0,bottom:6,width:42},portrait:{inner:0,bottom:0,width:38}},badge:{landscape:{outer:0,bottom:14,width:26},portrait:{outer:0,bottom:8,width:24}}}},nc={grosswabe:{landscape:"1.08",portrait:"0.92"},stapel:{landscape:"1.05",portrait:"1.05"}},nm=b.U.div.withConfig({displayName:"MediaTextForm.styles__Composition",componentId:"sc-e49304da-2"})`
  position: relative;
  min-width: 0;
  ${({$variant:e,$orientation:t})=>("grosswabe"===e||"stapel"===e)&&b.m`
      aspect-ratio: ${nc[e][t]};
    `}

  /* Dreiklang: Wabe leicht nach oben versetzt (bricht die Mittelachse) — nur ab lg */
  ${({$variant:e})=>"dreiklang"===e&&b.m`
      @media (min-width: ${i7}) {
        /* Rand unten statt Verschieben: die Wabe steht höher und bleibt im Kasten des Blocks */
        margin-bottom: ${({theme:e})=>e.margin.big};
      }
    `}
`,np=b.U.div.withConfig({displayName:"MediaTextForm.styles__Satellite",componentId:"sc-e49304da-3"})`
  position: absolute;
  z-index: ${({$slot:e})=>+("main"!==e)};
  ${({$variant:e,$slot:t,$side:a,$orientation:i})=>{var n;let r=nl[e][t];return r?(n=r[i],b.m`
    width: ${n.width}%;
    ${void 0!==n.outer?`${"left"===a?"left":"right"}: ${n.outer}%;`:""}
    ${void 0!==n.inner?`${"left"===a?"right":"left"}: ${n.inner}%;`:""}
    ${void 0!==n.top?`top: ${n.top}%;`:""}
    ${void 0!==n.bottom?`bottom: ${n.bottom}%;`:""}
  `):""}}

  ${({$tile:e,theme:t})=>e&&b.m`
      display: grid;
      place-items: center;
      aspect-ratio: 1 / 1;
      box-sizing: border-box;
      padding: 12%;
      color: #ffffff;
      text-align: center;
      background: ${"green"===e?t.palette.site.green:t.palette.site.navy};
      ${K.p}
    `}

  /* Siegel (Stapel): kurzer Text in der Navy-Wabe */
  ${({$slot:e,theme:t})=>"badge"===e&&b.m`
      font-family: ${t.font.secondaryFamily};
      font-size: clamp(0.6875rem, 1.1vw, 0.9375rem);
      font-weight: 600;
      line-height: 1.2;
      /* Text über die Breite der Wabe (sonst schrumpft er im Raster auf ein Zeichen) */
      justify-items: stretch;
      overflow-wrap: break-word;
    `}
`,nh=b.U.div.withConfig({displayName:"MediaTextForm.styles__SmallFrame",componentId:"sc-e49304da-4"})`
  box-sizing: border-box;
  width: 100%;
  padding: 5%;
  aspect-ratio: ${({$orientation:e})=>"portrait"===e?K.w:"1 / 1"};
  /* Rand: auf Weiß in tint (sonst unsichtbar), auf getönten und dunklen Bändern in deren Farbe */
  background: ${({theme:e})=>e.palette.site.tint};
  ${({$orientation:e})=>"portrait"===e?K.q:K.p}

  [data-surface='tint'] &,
  [data-surface='dark'] & {
    background: ${({theme:e})=>`var(--site-surface, ${e.palette.default.white})`};
  }
`,ng=b.U.p.withConfig({displayName:"MediaTextForm.styles__FactText",componentId:"sc-e49304da-5"})`
  display: grid;
  gap: ${({theme:e})=>e.margin.extrasmall};
  margin: 0;

  b {
    font-family: ${({theme:e})=>e.font.primaryFamily};
    font-size: clamp(2rem, 3.4vw, 3.5rem);
    font-weight: 700;
    line-height: 1;
    letter-spacing: -0.02em;
    color: ${({theme:e})=>e.palette.site.green};
  }

  span {
    font-size: 0.875rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: ${({theme:e})=>(0,e$.N)("muted",e.palette.site.muted)};
  }

  /* in der grünen Wabe: weiß und kleiner */
  ${np} & {
    gap: 0.25em;

    b {
      font-size: clamp(1.125rem, 2.2vw, 1.875rem);
      color: #ffffff;
    }

    span {
      font-size: clamp(0.5625rem, 0.8vw, 0.6875rem);
      color: #ffffff;
    }
  }
`,nf=b.U.div.withConfig({displayName:"MediaTextForm.styles__SideNote",componentId:"sc-e49304da-6"})`
  align-self: center;
  min-width: 0;
  padding-top: ${({theme:e})=>e.margin.small};
  border-top: 2px solid ${({theme:e})=>e.palette.site.green};

  @media (min-width: ${i7}) {
    padding-top: 0;
    padding-bottom: ${({theme:e})=>e.margin.extrasmall};
    padding-left: ${({theme:e})=>e.margin.small};
    border-top: 0;
    border-left: 2px solid ${({theme:e})=>e.palette.site.green};
  }

  blockquote {
    margin: 0;
  }
`,nu=b.U.p.withConfig({displayName:"MediaTextForm.styles__QuoteText",componentId:"sc-e49304da-7"})`
  margin: 0;
  font-family: ${({theme:e})=>e.font.primaryFamily};
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.35;
  color: ${({theme:e})=>(0,e$.N)("heading",e.palette.site.heading)};
`,nx=b.U.span.withConfig({displayName:"MediaTextForm.styles__QuoteSource",componentId:"sc-e49304da-8"})`
  display: block;
  margin-top: ${({theme:e})=>e.margin.extrasmall};
  font-size: 0.875rem;
  font-style: normal;
  color: ${({theme:e})=>(0,e$.N)("muted",e.palette.site.muted)};
`,n$=b.U.div.withConfig({displayName:"MediaTextForm.styles__MagazinHead",componentId:"sc-e49304da-9"})`
  min-width: 0;

  @media (min-width: ${i7}) {
    grid-column: 1 / -1;
    grid-row: 1;

    h1,
    h2 {
      font-size: 2.75rem;
      line-height: 1.12;
    }
  }
`,nb=b.U.div.withConfig({displayName:"MediaTextForm.styles__DotLine",componentId:"sc-e49304da-10"})`
  height: 0.875rem;
  margin-top: ${({theme:e})=>e.margin.small};
  background-image: ${({theme:e})=>{var t;let a;return t=e.palette.site.green,a=`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22 14'><path d='${(0,en.e)({x:6,y:2,width:10,height:10},(0,en.C)(10))}' fill='${t}'/></svg>`,`url("data:image/svg+xml,${encodeURIComponent(a)}")`}};
  background-repeat: repeat-x;
  background-size: 1.375rem 0.875rem;
`,nw=(0,b.U)(iV.c).withConfig({displayName:"MediaTextForm.styles__MagazinProse",componentId:"sc-e49304da-11"})`
  @media (min-width: ${i7}) {
    columns: 2;
    column-gap: ${ni};

    > * {
      break-inside: avoid;
    }
  }
`,ny={randlos:{landscape:{photo:6,textStart:8,textEnd:12},portrait:{photo:5,textStart:7,textEnd:12}},band:{landscape:{photo:6,textStart:1,textEnd:6},portrait:{photo:5,textStart:1,textEnd:6}}},nv=b.U.div.withConfig({displayName:"MediaTextForm.styles__BleedGrid",componentId:"sc-e49304da-12"})`
  --mt-content: calc(min(100%, ${w.y.rowMaxWidth}) - ${ni});
  --mt-col: calc((var(--mt-content) - ${nt-1} * ${ni}) / ${nt});
  display: grid;
  grid-template-columns:
    [full-start] minmax(0, 1fr)
    repeat(${nt-1}, [col-start] var(--mt-col) [col-end] ${ni})
    [col-start] var(--mt-col) [col-end] minmax(0, 1fr) [full-end];
  align-items: stretch;
  position: relative;

  @media (min-width: ${i8}) {
    --mt-content: calc(min(${na}, ${w.y.rowMaxWidth}) - ${ni});
  }

  /* Telefon: Foto oben über die volle Breite, darunter der Text auf den Spalten */
  > [data-mt-part='photo'] {
    grid-column: full-start / full-end;
    grid-row: 1;
    /* Telefon: um die eigene Zone höher, damit unter den Kacheln oben nichts fehlt */
    height: calc(
      ${({$orientation:e})=>"portrait"===e?"min(120vw, 34rem)":"min(72vw, 26rem)"} +
        ${({$bleedTop:e})=>e}px
    );
  }

  > [data-mt-part='text'] {
    grid-column: col-start 1 / col-end 12;
    grid-row: 2;
  }

  @media (min-width: ${i9}) {
    ${({$variant:e,$side:t,$orientation:a})=>{let i=ny[e][a];if("left"===t){let t="band"===e?nt+1-i.textEnd:i.textStart,a="band"===e?nt+1-i.textStart:i.textEnd;return b.m`
          > [data-mt-part='photo'] {
            grid-column: full-start / col-end ${i.photo};
            grid-row: 1;
            height: auto;
          }

          > [data-mt-part='text'] {
            grid-column: col-start ${t} / col-end ${a};
            grid-row: 1;
          }
        `}let n=nt-i.photo+1,r="band"===e?i.textStart:nt+1-i.textEnd,o="band"===e?i.textEnd:nt+1-i.textStart;return b.m`
        > [data-mt-part='photo'] {
          grid-column: col-start ${n} / full-end;
          grid-row: 1;
          height: auto;
        }

        > [data-mt-part='text'] {
          grid-column: col-start ${r} / col-end ${o};
          grid-row: 1;
        }
      `}}
  }
`,nk=b.U.div.withConfig({displayName:"MediaTextForm.styles__BleedText",componentId:"sc-e49304da-13"})`
  position: relative;
  z-index: 1;
  /* #2224: oben bündig mit dem Foto (Entwurf: Sektionspolster, kein Extraversatz durch Zentrieren) */
  align-self: start;
  min-width: 0;
  /* #2253: an einer Seite mit Wabenzone ZONE_PAD_SHARE × Polster (seit #2253 das ganze; #2224: die Hälfte) */
  ${({$zoneTop:e})=>nn("top",e?w.G:1)}
  ${({$zoneBottom:e})=>nn("bottom",e?w.G:1)}

  @media (max-width: calc(${i9} - 1px)) {
    padding-top: ${({theme:e})=>e.margin.large};
  }
`,nj=b.U.div.withConfig({displayName:"MediaTextForm.styles__BleedPhoto",componentId:"sc-e49304da-14"})`
  position: relative;
  z-index: -2;
  min-width: 0;
  margin-top: ${({$bleedTop:e})=>-e}px;

  @media (min-width: ${i9}) {
    margin-bottom: ${({$bleedBottom:e})=>-e}px;
    min-height: calc(
      ${({$variant:e})=>"band"===e?"30rem":"28rem"} +
        ${({$bleedTop:e,$bleedBottom:t})=>e+t}px
    );

    [data-orientation='portrait'] & {
      min-height: calc(36rem + ${({$bleedTop:e,$bleedBottom:t})=>e+t}px);
    }
  }
`,n_=e=>{let[t,i]=(0,a.useState)(e??"landscape");return[t,e?void 0:i]},nC=e=>{let{variant:i,side:n,headline:r,headlineTag:o,paragraphs:s,renderedParagraphs:d,image:l,secondImage:c,focalPoint:m,graphic:p=!1,fact:g,quote:u,badge:x,sparks:$=!0,ctaText:b,ctaHref:w,onCtaClick:y,onFirstView:v,priority:k=!1,seed:j,surface:_="white",surfaceGradient:C,edges:I,seamZones:N,dataAttributes:T,dataTestId:U,rootTestId:z=U}=e,S=N?.top??!1,L=N?.bottom??!1,M=e=>{let t=I?.[e];return t?.placement==="inner"?h.r[t.depth??"section"]:0},B=e=>I?.[e]?.placement==="inner"?I[e]?.depth??"section":void 0,F=M("top"),R=M("bottom"),G=(0,a.useRef)(null),H=(0,tq.f)(G,.25),q=(0,a.useRef)(v);(0,a.useEffect)(()=>{q.current=v});let A=(0,a.useRef)(!1);(0,a.useEffect)(()=>{H&&!A.current&&(A.current=!0,q.current?.())},[H]);let E=(0,iM.g)("band"===i?"dark":_,"main"),[W,K]=n_(l.orientation),[D,V]=n_(c?.orientation),Y=(0,P.f)(`(min-width: ${i9})`),O=(0,t.jsxs)(nd,{$variant:i,"data-testid":`${U}-text`,children:["magazin"!==i&&(0,t.jsx)(iV.K,{as:o,"data-testid":`${U}-headline`,children:r}),"magazin"===i?(0,t.jsx)(nw,{"data-testid":`${U}-prose`,children:s.map((e,a)=>(0,t.jsx)(tF.f,{content:e,rendered:d?.[a],dataTestId:`${U}-paragraph`},a))}):(0,t.jsx)(iV.c,{children:s.map((e,a)=>(0,t.jsx)(tF.f,{content:e,rendered:d?.[a],dataTestId:`${U}-paragraph`},a))}),b&&w&&(0,t.jsx)(iV.V,{$cta:E,"data-cta-tone":E.tone,"data-cta-fill":E.fill,children:(0,t.jsx)(iU.f,{href:w,modifier:E.modifier,icon:(0,t.jsx)(iS.f,{}),iconAlign:iz.W.RIGHT,onClick:y,dataTestId:`${U}-cta`,children:b})})]}),Z={"data-variant":i,"data-side":n,"data-orientation":W,"data-graphic":p?"true":void 0};if("randlos"===i||"band"===i){let e="band"===i;return(0,t.jsx)(f.t,{ref:G,surface:e?"dark":_,gradient:e?void 0:C,edges:I,dataTestId:`${z??U}-band`,headerBg:T?.["data-header-bg"],children:(0,t.jsxs)(nv,{$variant:i,$side:n,$orientation:W,...T,$bleedTop:F,$bleedBottom:R,"data-zone-top":S?"true":void 0,"data-zone-bottom":L?"true":void 0,"data-testid":z??U,...nI(Z),children:[(0,t.jsx)(nk,{$variant:i,$zoneTop:S,$zoneBottom:L,"data-mt-part":"text",children:O}),(0,t.jsx)(nj,{$variant:i,$bleedTop:F,$bleedBottom:R,"data-mt-part":"photo","data-testid":`${U}-figure`,children:(0,t.jsx)(i2,{src:l.src,alt:l.alt,sizes:"(max-width: 767px) 100vw, 60vw",priority:k,direction:"right"===n?"left":"right",stacked:!Y,zoneTiles:e?3.5:2,sparks:$,seed:j,focal:m,tone:e?"band":"page",onOrientation:K,band:{ref:G,zoneTop:B("top"),zoneBottom:B("bottom")},dataTestId:`${U}-image`})})]})})}let X=e=>(0,t.jsx)(i3,{src:l.src,alt:l.alt,sizes:e,priority:k,orientation:W,focal:m,graphic:p,onOrientation:K,dataTestId:`${U}-image`}),J=g&&(0,t.jsxs)(ng,{"data-testid":`${U}-fact`,children:[(0,t.jsx)("b",{children:g.value}),g.label&&(0,t.jsx)("span",{children:g.label})]}),Q=e=>({$variant:e,$side:n,$orientation:W}),ee=null,et=null;return"grosswabe"===i?ee=(0,t.jsxs)(nm,{$variant:"grosswabe",$side:n,$orientation:W,"data-testid":`${U}-figure`,children:[(0,t.jsx)(np,{...Q("grosswabe"),$slot:"main",children:X("(max-width: 767px) 92vw, (max-width: 991px) 46vw, min(34vw, 33rem)")}),!p&&(0,t.jsx)(np,{...Q("grosswabe"),$slot:"crop",children:(0,t.jsx)(i3,{src:l.src,alt:"",sizes:nr,orientation:"landscape",focal:m,zoom:1.8,dataTestId:`${U}-crop`})}),(0,t.jsx)(np,{...Q("grosswabe"),$slot:"fact",$tile:"green","data-testid":`${U}-fact-tile`,children:J}),(0,t.jsx)(np,{...Q("grosswabe"),$slot:"dot",$tile:"navy","data-testid":`${U}-dot`})]}):"dreiklang"===i?(ee=(0,t.jsx)(nm,{$variant:"dreiklang",$side:n,$orientation:W,"data-testid":`${U}-figure`,children:X("(max-width: 767px) 92vw, (max-width: 991px) 46vw, min(30vw, 28rem)")}),(g||u)&&(et=(0,t.jsx)(nf,{"data-testid":`${U}-note`,children:g?J:(0,t.jsxs)("blockquote",{"data-testid":`${U}-quote`,children:[(0,t.jsx)(nu,{children:u?.text}),u?.source&&(0,t.jsx)(nx,{children:u.source})]})}))):ee="stapel"===i&&c?(0,t.jsxs)(nm,{$variant:"stapel",$side:n,$orientation:W,"data-testid":`${U}-figure`,children:[(0,t.jsx)(np,{...Q("stapel"),$slot:"main",children:X("(max-width: 767px) 92vw, (max-width: 991px) 46vw, min(32vw, 31rem)")}),(0,t.jsx)(np,{...Q("stapel"),$slot:"small",children:(0,t.jsx)(nh,{$orientation:D,children:(0,t.jsx)(i3,{src:c.src,alt:c.alt,sizes:nr,orientation:D,onOrientation:V,dataTestId:`${U}-second-image`})})}),(0,t.jsx)(np,{...Q("stapel"),$slot:"badge",$tile:"navy","data-testid":`${U}-badge`,children:x&&(0,t.jsx)("span",{children:x})})]}):(0,t.jsx)(nm,{$variant:"magazin",$side:n,$orientation:W,"data-testid":`${U}-figure`,children:X("(max-width: 767px) 92vw, (max-width: 991px) 46vw, min(30vw, 28rem)")}),(0,t.jsxs)(ns,{ref:G,$variant:i,$side:n,$withNote:!!et,"data-testid":z,...nI(Z),children:["magazin"===i&&(0,t.jsxs)(n$,{children:[(0,t.jsx)(iV.K,{as:o,"data-testid":`${U}-headline`,children:r}),(0,t.jsx)(nb,{"aria-hidden":"true","data-testid":`${U}-dots`})]}),ee,O,et]})},nI=e=>Object.fromEntries(Object.entries(e).filter(e=>void 0!==e[1]));var nN=e.i(929842),nT=e.i(71845),nU=e.i(125176),nz=e.i(627430),nS=e.i(770703);let nL=(0,nS.default)(()=>e.A(794345).then(e=>e.HeroBlock),{loadableGenerated:{modules:[167495]}}),nM=(0,nS.default)(()=>e.A(475226).then(e=>e.CardSliderBlock),{loadableGenerated:{modules:[535566]}}),nB=(0,nS.default)(()=>e.A(465624).then(e=>e.VideoBlock),{loadableGenerated:{modules:[367999]}}),nF=(0,nS.default)(()=>e.A(485551).then(e=>e.ImagefilmBlock),{loadableGenerated:{modules:[396374]}}),nR=(0,nS.default)(()=>e.A(675425).then(e=>e.TeamBlock),{loadableGenerated:{modules:[452967]}}),nP=(0,nS.default)(()=>e.A(749344).then(e=>e.TestimonialBlock),{loadableGenerated:{modules:[347218]}}),nG=(0,nS.default)(()=>e.A(81262).then(e=>e.MastheadBlock),{loadableGenerated:{modules:[121574]}}),nH=(0,nS.default)(()=>e.A(773694).then(e=>e.ContactFormBlock),{loadableGenerated:{modules:[567553]}}),nq=(0,nS.default)(()=>e.A(956423).then(e=>e.ApplicationFormBlock),{loadableGenerated:{modules:[666916]}}),nA={hero:nL,video:nB,imagefilm:nF,mediaText:({block:e,locale:i,dataTestId:n,dataAttributes:o,edges:s,pageHeading:d,first:l,markdown:p,zones:h})=>{let f=e.props,{headline:u,paragraphs:x,image:$,imagePosition:b,imageShape:w,cta:y,highlight:v}=f,k=nU.l.includes(f.variant??"")?(0,m.l)(f.variant,e):(0,m.u)([e]).get(e.id)?.variant,j=(0,ea.l)((0,nT.D)(k??"grosswabe")),_=(0,a.useCallback)(()=>j("view"),[j]),C=(0,a.useCallback)(()=>j("cta"),[j]),I=(0,r.u)(u,i),N=(0,r.L)(x,i),T=p?x.map((t,a)=>(0,g.h)(p,i,e.id,"paragraph",a)):void 0,U=y&&(0,c.J)(y.href)?(0,r.u)(y.label,i):void 0,z=(0,c.J)(y?.href),S=$?.alt?(0,r.u)($.alt,i):I,L=a=>(0,t.jsx)(iD.f,{headline:I,paragraphs:N,renderedParagraphs:T,imageSrc:$?.src,imageAlt:$?.alt?(0,r.u)($.alt,i):void 0,imagePosition:b,imageShape:a,imagePriority:l,ctaText:U,ctaHref:z,highlight:!k&&v,headlineImportance:d?nN.D.h1:nN.D.h2,surface:(0,e0.G)(e),dataTestId:`${n}-media-text`});if(!$?.src||!k)return L(w);let M=f.secondImage?.src?{src:f.secondImage.src,alt:f.secondImage.alt?(0,r.u)(f.secondImage.alt,i):"",orientation:(0,m.X)(f.secondImage.src)}:void 0;return(0,t.jsx)(ea.A,{element:(0,nT.D)(k),fallback:L("rounded"),children:(0,t.jsx)(nC,{variant:k,side:b??"right",headline:I,headlineTag:d?"h1":"h2",paragraphs:N,renderedParagraphs:T,image:{src:$.src,alt:S,orientation:(0,m.X)($.src)},secondImage:M,focalPoint:f.focalPoint,graphic:"hex"!==w,fact:f.fact?{value:(0,r.u)(f.fact.value,i),label:f.fact.label?(0,r.u)(f.fact.label,i):void 0}:void 0,quote:f.quote?{text:(0,r.u)(f.quote.text,i),source:f.quote.source}:void 0,badge:f.badge?(0,r.u)(f.badge,i):void 0,sparks:f.sparks??!0,ctaText:U,ctaHref:z,onCtaClick:C,onFirstView:_,priority:l,seed:(0,nz.Z)(e.id),surface:(0,e0.G)(e),surfaceGradient:(0,tH.o)(e),edges:s,seamZones:h?{top:h.ownTop>0||h.neighbourTop>0,bottom:h.ownBottom>0||h.neighbourBottom>0}:void 0,dataAttributes:o,dataTestId:`${n}-media-text`,rootTestId:o?n:void 0})})},animationText:(0,nS.default)(()=>e.A(315259).then(e=>e.AnimationTextBlock),{loadableGenerated:{modules:[718943]}}),cardGrid:e=>{var i;let{block:n,locale:o,dataTestId:s}=e,d=(0,ea.l)("cardGrid"),l=(0,a.useCallback)(()=>d("view"),[d]),m=(0,a.useCallback)(()=>d("hover"),[d]),p=(0,a.useCallback)(()=>d("cta"),[d]),{headline:h,description:g,cards:f}=n.props;if(i=e=>!!(0,c.J)(e),0!==f.length&&!(f.length>3)&&f.every(e=>{var t;return!!e.icon&&!e.image&&!e.accent&&!((t=e.description)&&"object"==typeof t&&Object.values(t).some(e=>"string"==typeof e&&""!==e.trim()))&&i(e.cta?.href)})){let e=f.map(e=>({title:(0,r.u)(e.title,o),href:(0,c.J)(e.cta?.href),icon:e.icon}));return(0,t.jsx)(et,{headline:h?(0,r.u)(h,o):void 0,description:g?(0,r.u)(g,o):void 0,items:e,onFirstHover:m,onLinkClick:p,dataTestId:`${s}-tiles`})}return(0,t.jsx)(ea.A,{element:"cardGrid",fallback:(0,t.jsx)(ei,{...e}),children:(0,t.jsx)(ei,{...e,effects:{onView:l,onHover:m,onLink:p}})})},comparison:({block:e,locale:i,dataTestId:n})=>{let{headline:o,description:s,leftTitle:d,rightTitle:l,items:c}=e.props,m=(0,ea.l)("comparison"),p=(0,a.useCallback)(()=>m("view"),[m]),h=(0,a.useCallback)(()=>m("replay"),[m]),g=c.map(e=>({problem:(0,r.u)(e.problem,i),solution:(0,r.u)(e.solution,i)}));return(0,t.jsx)(ea.A,{element:"comparison",fallback:(0,t.jsx)("ul",{"data-testid":`${n}-comparison-fallback`,children:g.map((e,a)=>(0,t.jsxs)("li",{children:[e.problem," → ",e.solution]},a))}),children:(0,t.jsx)(eQ,{headline:o?(0,r.u)(o,i):void 0,description:s?(0,r.u)(s,i):void 0,problemTitle:(0,r.u)(d,i),solutionTitle:(0,r.u)(l,i),pairs:g,surface:(0,e0.G)(e),onFirstView:p,onFirstReplay:h,dataTestId:`${n}-comparison`})})},stepList:({block:e,locale:i,dataTestId:n,markdown:o})=>{let{headline:s,description:d,steps:l,orientation:c}=e.props,m=(0,ea.l)("stepList"),p=(0,a.useCallback)(()=>m("view"),[m]),h=(0,a.useCallback)(()=>m("step"),[m]),f=l.map((t,a)=>({title:(0,r.u)(t.title,i),description:t.description&&(0,r.u)(t.description,i)||void 0,renderedDescription:o?(0,g.h)(o,i,e.id,"step",a):void 0,icon:t.icon}));return(0,t.jsx)(ea.A,{element:"stepList",fallback:(0,t.jsx)("ol",{"data-testid":`${n}-steps-fallback`,children:f.map((e,a)=>(0,t.jsx)("li",{children:e.title},a))}),children:(0,t.jsx)(tC,{headline:s?(0,r.u)(s,i):void 0,description:d?(0,r.u)(d,i):void 0,steps:f,orientation:c,surface:(0,e0.G)(e),onFirstView:p,onFirstStep:h,dataTestId:`${n}-steps`})})},cardSlider:nM,faq:({block:e,locale:a,dataTestId:i,pageHeading:n,markdown:o})=>{let{headline:s,description:d,items:l}=e.props;return(0,t.jsxs)(tP,{"data-count":l.length,children:[(0,t.jsx)($.f,{headline:s?(0,r.u)(s,a):void 0,headingLevel:n?1:2,description:d?(0,r.u)(d,a):void 0,align:"center",dataTestId:`${i}-header`}),(0,t.jsx)(tB,{dataTestId:i,items:l.map((n,s)=>({question:(0,r.u)(n.question,a),answer:(0,t.jsx)(tF.f,{content:(0,r.u)(n.answer,a),rendered:(0,g.h)(o,a,e.id,"answer",s),dataTestId:`${i}-answer-${s}`})}))})]})},cta:({block:e,locale:i,dataTestId:n,dataAttributes:o,edges:s})=>{let{headline:d,headlineSize:l,button:m,icon:p}=e.props,h=(0,ea.l)("ctaBand"),g=(0,a.useCallback)(()=>h("view"),[h]),f=(0,a.useCallback)(()=>h("hover"),[h]),u=(0,a.useCallback)(()=>h("cta"),[h]),x={headline:(0,r.u)(d,i),headlineSize:l,buttonText:(0,r.u)(m.label,i),buttonHref:(0,c.J)(m.href),icon:p,dataTestId:n,dataAttributes:o,edges:s,surface:(0,e0.G)(e),gradient:(0,tH.o)(e)};return(0,t.jsx)(ea.A,{element:"ctaBand",fallback:(0,t.jsx)(tG.f,{...x,motion:!1}),children:(0,t.jsx)(tG.f,{...x,onFirstView:g,onFirstHover:f,onCtaClick:u})})},richText:e=>{let{block:a,locale:i,dataTestId:n,pageHeading:o,first:s,markdown:d}=e;return"lead"===a.props.variant?(0,t.jsx)(tJ,{...e}):(0,t.jsx)(tR,{children:(0,t.jsx)(tF.f,{content:(0,r.u)(a.props.content,i),rendered:(0,g.h)(d,i,a.id,"content"),eagerFirstImage:s,pageHeading:o,dataTestId:`${n}-markdown`})})},stats:({block:e,locale:i,dataTestId:n,pageHeading:o})=>{let{headline:s,items:d}=e.props,l=(0,e0.G)(e),c=(0,ea.l)("stats"),m=(0,a.useCallback)(()=>c("view"),[c]),p=(0,a.useCallback)(()=>c("tilt"),[c]),h=d.map(e=>({value:(0,r.u)(e.value,i),label:(0,r.u)(e.label,i),detail:e.detail?(0,r.u)(e.detail,i):void 0}));return(0,t.jsxs)(a$,{"data-testid":`${n}-grid`,"data-columns":t5(d.length).desktop,children:[(0,t.jsx)($.f,{headline:s?(0,r.u)(s,i):void 0,headingLevel:o?1:2,align:"center",dataTestId:`${n}-grid-header`}),(0,t.jsx)(ea.A,{element:"stats",fallback:(0,t.jsx)(ab,{"data-testid":`${n}-grid-fallback`,children:h.map((e,a)=>(0,t.jsxs)("li",{children:[(0,t.jsx)("strong",{children:e.value})," ",e.label]},a))}),children:(0,t.jsx)(ax,{items:h,surface:l,onFirstView:m,onFirstTilt:p,dataTestId:n})})]})},team:nR,partnerLogos:e=>{let{block:i,locale:n,dataTestId:o}=e,{headline:s,description:d,columns:l,partners:c,variant:m}=i.props,p=(0,e0.G)(i),h=(0,ea.l)("partnerLogos"),g=(0,a.useCallback)(()=>h("view"),[h]),f=(0,a.useCallback)(()=>h("hover"),[h]),u=(0,a.useCallback)(e=>{e&&h("pause")},[h]),x=s?(0,r.u)(s,n):void 0,$=d?(0,r.u)(d,n):void 0,b=c.every(e=>!e.description);return"group"===m&&c.length>1?(0,t.jsx)(ea.A,{element:"partnerLogos",fallback:(0,t.jsx)(iN,{...e}),children:(0,t.jsx)(iI,{headline:x,description:$,surface:p,items:c.map(e=>({companyName:e.companyName,logoUrl:e.logoUrl,websiteUrl:e.websiteUrl,description:e.description?(0,r.u)(e.description,n):void 0,role:e.role?(0,r.u)(e.role,n):void 0})),onFirstView:g,onFirstHover:f,dataTestId:`${o}-group`})}):b?(0,t.jsx)(ea.A,{element:"partnerLogos",fallback:(0,t.jsx)(iN,{...e}),children:(0,t.jsx)(aX,{headline:x,description:$,columns:l??4,surface:p,items:c.map(({companyName:e,logoUrl:t,websiteUrl:a})=>({companyName:e,logoUrl:t,websiteUrl:a})),onFirstView:g,onFirstHover:f,onMarqueeToggle:u,dataTestId:`${o}-grid`,itemDataTestIdPrefix:o})}):(0,t.jsx)(iN,{...e})},newsTeaser:({block:e,locale:a,dataTestId:i,pageHeading:n})=>{let{tr:o}=(0,iL.w)(),{headline:s,description:d,items:l}=e.props,m=(0,iM.g)((0,e0.G)(e),"main");return(0,t.jsxs)(iB,{"data-testid":`${i}-grid`,"data-columns":6,children:[(0,t.jsx)($.f,{headline:s?(0,r.u)(s,a):void 0,headingLevel:n?1:2,align:"center",description:d?(0,r.u)(d,a):void 0,dataTestId:`${i}-grid-header`}),(0,t.jsx)(iF,{"data-testid":`${i}-grid-list`,"data-count":l.length,children:l.map((e,n)=>{let o=n<2;return(0,t.jsx)(iR,{$gross:o,"data-size":o?"large":"small","data-testid":`${i}-grid-item`,children:(0,t.jsx)(iT.f,{headline:(0,r.u)(e.headline,a),href:(0,c.J)(e.href),imageUrl:e.imageUrl,imageSizes:o?"(max-width: 640px) 100vw, (max-width: 1500px) 45vw, 640px":"(max-width: 640px) 100vw, (max-width: 768px) 45vw, (max-width: 1500px) 28vw, 420px",roomy:!0,frameless:!0,date:e.date?(0,r.H)(e.date,a):void 0,dateBadge:(0,r.J)(e.date,a),description:e.description?(0,r.u)(e.description,a):void 0,tags:e.tags?(0,r.L)(e.tags,a):void 0,dataTestId:`${i}-item-${n}`})},n)})}),(0,t.jsx)(iP,{$cta:m,"data-testid":`${i}-more`,"data-cta-tone":m.tone,"data-cta-fill":m.fill,children:(0,t.jsx)(iU.f,{href:"/news",modifier:m.modifier,icon:(0,t.jsx)(iS.f,{}),iconAlign:iz.W.RIGHT,dataTestId:`${i}-all`,children:o("cms.newsTeaser.allNews",{defaultValue:"Aktuelle Nachrichten"})})})]})},testimonial:nP,specTable:({block:e,locale:a,dataTestId:i})=>{let{headline:n,description:o,columns:s,rows:d}=e.props;return(0,t.jsx)(iK,{headline:n?(0,r.u)(n,a):void 0,description:o?(0,r.u)(o,a):void 0,columns:(0,r.L)(s,a),rows:d.map(e=>(0,r.L)(e,a)),dataTestId:`${i}-table`})},masthead:nG,contactForm:nH,applicationForm:nq};var nE=e.i(994244);let nW=b.U.div.withConfig({displayName:"CmsBlockRenderer.styles__Root",componentId:"sc-21371517-0"})`
  width: 100%;
  /* #2226/#2253: Sektionspolster je Stufe (Telefon 64, ab 768 px 96) — Spalten und Bänder lesen es */
  ${w.n}

  /*
   * #2226: Reihen der öffentlichen Seite ohne den festen Zeilenabstand des
   * App-Rasters (Atom/Grid Row 20 px, Col 12 px) und nie breiter als
   * theme.row.maxWidth (90rem). Gilt auch für Reihen in den Bändern (CTA,
   * Video, Seitenkopf); die eingeloggte App behält Row/Col unverändert.
   * Doppelte Klasse: schlägt die Regeln von Row und Col.
   */
  && .row {
    margin-bottom: 0;
    ${w.K}
  }

  && .row > * {
    margin-bottom: 0;
  }
`,nK=(e,t,a)=>b.m`
  padding-${e}: ${t>0||a>0?`calc(${w.$} * ${w.G})`:w.$};
`,nD=(e,t,a)=>{let i=(0,w.C)(e)[a],n=(0,w.C)(t)[a];return b.m`
    flex: 0 0 ${(0,w.J)(i.span)};
    max-width: ${(0,w.J)(i.span)};
    margin-left: ${i.offset?(0,w.J)(i.offset):"0"};
    --site-measure: ${(0,w.t)(i.span,n.span)};
  `},nV=b.U.div.withConfig({displayName:"CmsBlockRenderer.styles__SiteColumn",componentId:"sc-21371517-1"})`
  box-sizing: border-box;
  min-width: 0;
  padding-inline: calc(${w.y.gutter} / 2);
  ${({$zones:e})=>nK("top",e.ownTop,e.neighbourTop)}
  ${({$zones:e})=>nK("bottom",e.ownBottom,e.neighbourBottom)}
  ${({$columns:e,$text:t})=>nD(e,t,"xs")}

  ${({$columns:e,$text:t})=>w.L.filter(e=>"xs"!==e).map(a=>b.m`
        @media (min-width: ${w.y.breakpoints[a]}) {
          ${nD(e,t,a)}
        }
      `)}
`,nY=b.U.h1.withConfig({displayName:"CmsBlockRenderer.styles__HiddenPageHeading",componentId:"sc-21371517-2"})`
  ${nE.p}
`;function nO(e){return"mediaText"!==e.type||e.props.image?.src?w.e[e.type]:"text"}let nZ=w.M.text,nX={},nJ=e=>{let t=(0,o.P)(e),a=e.props.variant;return{"data-block-type":e.type,"data-block-id":e.id,..."string"==typeof a?{"data-block-variant":a}:{},...t?{"data-header-bg":t}:{}}},nQ=e=>`cms-block-${e.id}`;function n0({block:e,locale:a,edges:i,pageHeading:r,first:o,markdown:s,zones:d}){let l=nA[e.type];return(0,t.jsx)(l,{block:e,locale:a,dataTestId:nQ(e),dataAttributes:n.k[e.type].fullBleed||(0,m.Y)(e)?nJ(e):void 0,edges:(0,h.N)(i)?i:void 0,pageHeading:r,first:o||void 0,markdown:s,zones:d})}function n1({group:e,locale:a,edgesById:n,headingId:r,firstId:s,markdown:d,zones:l}){let c=e.blocks[0],m=c?n.get(c.id):void 0,p=!!c&&("white"!==e.surface||!!e.gradient||(0,h.N)(m)),g=(0,t.jsx)(i.f,{children:e.blocks.map(e=>{let i=function(e){let t=e.layout;if(t){let e=e=>void 0===e?void 0:{span:e,offset:0};return{xs:{span:t.xs??12,offset:0},...void 0!==t.sm?{sm:e(t.sm)}:{},...void 0!==t.md?{md:e(t.md)}:{},...void 0!==t.lg?{lg:e(t.lg)}:{}}}return(0,w._)(nO(e))}(e);return(0,t.jsx)(nV,{"data-testid":nQ(e),...nJ(e),"data-cms-column":e.layout?"layout":nO(e)??"grid","data-columns":(0,w.m)(i),$columns:i,$text:nZ,$zones:l,children:(0,t.jsx)(n0,{block:e,locale:a,edges:p?void 0:n.get(e.id),pageHeading:e.id===r,first:e.id===s,markdown:d})},e.id)})});return p&&c?(0,t.jsx)(f.t,{surface:e.surface,gradient:e.gradient,edges:m,headerBg:(0,o.P)(c),dataTestId:`${nQ(c)}-band`,children:g}):g}e.s(["f",0,({blocks:e,locale:i,title:n,markdown:f,pageHeadingIds:$,polymerLinks:b=nX,breadcrumbParents:w=x.I,dataTestId:y="cms-page"})=>{let v=(0,a.useMemo)(()=>(0,p.E)((0,m.E)(e.map(c.n))),[e]),k=v.blocks,j=(0,s.M)(k),{edges:_,seams:C}=(0,a.useMemo)(()=>(0,o.m)(k),[k]),I=k[0]?.id,N=(e,t)=>{let a=e?"bare"===e.kind?e.block:e.blocks[0]:void 0;var i=a?_.get(a.id):void 0;if(!a)return 0;let n=function(e,t){let a=e?.[t];if(!a)return 0;let i=a.depth??"section";return"inner"===a.placement?h.r[i]:a.overlap?0:h.u[i]}(i,t),r=i?.bottom;return"bottom"===t&&"masthead"===a.type&&r?.placement==="inner"&&"white"===r.color?n+h.u.section:n},T=e=>({ownTop:N(j[e],"top"),ownBottom:N(j[e],"bottom"),neighbourTop:N(j[e-1],"bottom"),neighbourBottom:N(j[e+1],"top")}),U=(0,g.r)($,i),z=void 0!==U?U:function(e,t){let a,i=e.find(e=>d.includes(e.type));if(i)return i.id;let n=e[0];return n&&""!==((a=l[n.type])?a(n,t).trim():"")?n.id:null}(k,i),S=null===z&&n?n.trim():"";return(0,t.jsx)(u.V,{value:b,children:(0,t.jsx)(x.m,{value:w,children:(0,t.jsxs)(nW,{"data-testid":y,"data-locale":i,"data-block-count":k.length,"data-block-types":(0,r.n)(k).join(","),"data-page-heading":z??(S?"title":""),"data-seam-styles":C.map(e=>e.style??"none").join(","),"data-surface-auto":[...v.auto].map(([e,t])=>`${e}:${t}`).join(","),"data-surface-clashes":v.clashes.map(e=>`${e.upperId}:${e.lowerId??"footer"}`).join(","),children:[S&&(0,t.jsx)(nY,{"data-testid":`${y}-title`,children:S}),j.map((e,a)=>"bare"===e.kind?(0,t.jsx)(n0,{block:e.block,locale:i,edges:_.get(e.block.id),pageHeading:e.block.id===z,first:e.block.id===I,markdown:f,zones:T(a)},e.block.id):(0,t.jsx)(n1,{group:e,locale:i,edgesById:_,headingId:z,firstId:I,markdown:f,zones:T(a)},`row-${a}`))]})})})}],655953),e.s([],677231)}]);