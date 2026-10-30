(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,[114178,861133,e=>{var t=e.i(843476);e.i(315481);var i=e.i(10003),a=e.i(997053);let n=a.U.nav.withConfig({displayName:"Breadcrumb.styles__Root",componentId:"sc-1af95cf5-0"})`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  font-family: ${e=>e.theme.font.primaryFamily};
  font-size: 14px;
  margin-bottom: ${e=>e.theme.margin.small};
`,o=a.U.span.withConfig({displayName:"Breadcrumb.styles__BreadcrumbItem",componentId:"sc-1af95cf5-1"})`
  display: inline-flex;
  align-items: center;
`,r=(0,a.U)(i.NavLink).withConfig({displayName:"Breadcrumb.styles__BreadcrumbLink",componentId:"sc-1af95cf5-2"})`
  color: ${e=>e.theme.palette.default.primary};
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: ${e=>e.theme.palette.default.secondary};
    text-decoration: underline;
  }
`,s=a.U.span.withConfig({displayName:"Breadcrumb.styles__BreadcrumbText",componentId:"sc-1af95cf5-3"})`
  color: ${e=>e.theme.palette.default.greyDark};
`,d=a.U.span.withConfig({displayName:"Breadcrumb.styles__Separator",componentId:"sc-1af95cf5-4"})`
  margin: 0 8px;
  color: ${e=>e.theme.palette.default.greyDark};
  opacity: 0.5;
`;e.i(821194);var l=e.i(99222);e.s(["f",0,e=>{let{items:i,className:a,dataTestId:c="breadcrumb"}=e,{tr:m}=(0,l.f)();return(0,t.jsx)(n,{className:a,"data-testid":c,"aria-label":m("common.breadcrumb",{defaultValue:"Breadcrumb"}),children:i.map((e,a)=>{let n=a===i.length-1;return(0,t.jsxs)(o,{children:[e.href&&!n?(0,t.jsx)(r,{href:e.href,"data-testid":`${c}-link-${a}`,children:e.label}):(0,t.jsx)(s,{"data-testid":`${c}-text-${a}`,"aria-current":n?"page":void 0,children:e.label}),!n&&(0,t.jsx)(d,{"aria-hidden":"true",children:"/"})]},`${e.label}-${a}`)})})}],861133),e.s([],114178)},699779,e=>{let t=e.i(929842).K;e.s(["f",0,t])},559173,e=>{e.s(["p",()=>o,"$",()=>a]);var t=e.i(997053),i=e.i(703089);let a=(e=i.g.body)=>t.m`
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
  `,n=t.m`
  margin-bottom: ${e=>e.$variant===i.g.caption?0:e.theme.margin.default};
  max-width: 700px;
  ${e=>a(e.$variant)}
`,o=t.U.p.withConfig({displayName:"Text.styles__Text",componentId:"sc-18bfeccb-0"})`
  ${n}
`},703089,e=>{e.s(["p",()=>o,"g",()=>n]);var t,i=e.i(843476),a=e.i(559173),n=((t={}).bodybig="bodybig",t.body="body",t.bodysmall="bodysmall",t.button="button",t.caption="caption",t.navigation="navigation",t);let o=({children:e,dataTestId:t="text-root",variant:n,className:o})=>(0,i.jsx)(a.p,{"data-testid":t,className:o,$variant:n,children:e})},852590,e=>{let t=e.i(703089).p;e.s(["f",0,t])},897498,e=>{var t=e.i(843476),i=e.i(271645),a=e.i(997053);let n=a.U.div.withConfig({displayName:"SurfaceLayer.styles__Root",componentId:"sc-78514c75-0"})`
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  background: ${({$background:e})=>e};
  transition: background 0.4s ease;

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,o=({background:e,dataTestId:i="surface-layer",className:a})=>(0,t.jsx)(n,{className:a,$background:e,"data-testid":i,"aria-hidden":"true"});e.i(710788);var r=e.i(363451);e.i(307839);var s=e.i(585584),d=e.i(699779),l=e.i(929842),c=e.i(852590),m=e.i(703089);e.i(114178);var h=e.i(861133);let p=a.U.div.withConfig({displayName:"MastheadHeading.styles__Root",componentId:"sc-754e5d2-0"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({theme:e})=>e.margin.small};
  width: 100%;
  max-width: 72rem;
  margin: 0 auto;
  text-align: center;
  color: ${({$color:e})=>e};

  /* #1563: als zweiter Seitenkopf h2 — gleiches Aussehen */
  && h1,
  && h2 {
    margin: 0;
    color: inherit;
    text-wrap: balance;
    /* lange Komposita (GESCHÄFTSBEDINGUNGEN) trennt der Browser nach Sprache statt mitten im Wort */
    hyphens: auto;
    overflow-wrap: break-word;

    /* Am Telefon die Größe der h3 (Desktop-Wert: die mobilen Theme-Stufen sind
       seit #2127 schon eine Stufe kleiner — nicht doppelt verkleinern) */
    @media (max-width: 768px) {
      font-size: ${({theme:e})=>e.font.headline.three.desktop.fontSize};
      line-height: ${({theme:e})=>e.font.headline.three.desktop.lineHeight};
    }
  }
`,f=a.U.div.withConfig({displayName:"MastheadHeading.styles__Lead",componentId:"sc-754e5d2-1"})`
  max-width: 40rem;
  color: inherit;

  && > * {
    margin: 0;
    color: inherit;
    /* #1563: das Feld ist mehrzeilig (Textarea) — Absätze der Unterzeile bleiben Zeilen */
    white-space: pre-line;
  }
`,u=a.U.div.withConfig({displayName:"MastheadHeading.styles__Crumbs",componentId:"sc-754e5d2-2"})`
  && > * {
    justify-content: center;
    margin: ${({theme:e})=>e.margin.small} 0 0;
    background: transparent;
    color: inherit;
  }

  && a,
  && a:hover,
  && span {
    color: inherit;
  }

  && a {
    font-weight: 700;
    text-decoration: underline;
  }

  && a:hover {
    opacity: 0.8;
  }
`,g=({title:e,lead:i,breadcrumb:a,color:n,headingLevel:o=1,dataTestId:r="masthead-heading",className:s})=>(0,t.jsxs)(p,{className:s,$color:n,"data-testid":r,children:[(0,t.jsx)(d.f,{importance:1===o?l.D.h1:l.D.h2,renderAs:l.D.h1,dataTestId:`${r}-title`,children:e}),i&&(0,t.jsx)(f,{"data-testid":`${r}-lead`,children:(0,t.jsx)(c.f,{variant:m.g.bodybig,dataTestId:`${r}-lead-text`,children:i})}),a&&a.length>0&&(0,t.jsx)(u,{children:(0,t.jsx)(h.f,{items:a,dataTestId:`${r}-breadcrumb`})})]});var b=e.i(118410),x=e.i(240029),y=e.i(142207),$=e.i(587076);e.i(311046);var v=e.i(549560),w=e.i(720034),k=e.i(373386),j=e.i(547905);let I=a.U.section.withConfig({displayName:"Masthead.styles__Root",componentId:"sc-43ead1d3-0"})`
  ${({$edges:e})=>(0,j.n)(e)}
  ${({$outer:e})=>(0,j.n)(e)}
  position: relative;
  isolation: isolate;
  /* kein globaler border-box-Reset: Mindesthöhe samt Polster */
  box-sizing: border-box;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 22rem;
  padding: ${({theme:e})=>`${e.margin.big} ${e.margin.default}`};
  ${({$edges:e})=>(0,j.o)("bottom","4rem",e)}

  @media (max-width: 768px) {
    min-height: 16rem;
    padding-top: ${({theme:e})=>e.margin.large};
  }
`,_=a.U.div.withConfig({displayName:"Masthead.styles__SurfaceBox",componentId:"sc-43ead1d3-1"})`
  position: absolute;
  inset: 0;
  z-index: 0;
  container-type: size;
  pointer-events: none;
`,C=a.U.div.withConfig({displayName:"Masthead.styles__HoverLayer",componentId:"sc-43ead1d3-2"})`
  position: absolute;
  inset: 0;
  z-index: 1;
  container-type: size;
  overflow: hidden;
  pointer-events: none;
`,N=a.U.svg.withConfig({displayName:"Masthead.styles__GradientDefs",componentId:"sc-43ead1d3-3"})`
  position: absolute;
  width: 0;
  height: 0;
  overflow: hidden;
  pointer-events: none;
`,T=a.U.div.withConfig({displayName:"Masthead.styles__Content",componentId:"sc-43ead1d3-4"})`
  position: relative;
  z-index: 4;
  width: 100%;
`,z=["hero"],U=({title:e,lead:n,breadcrumb:d,foreground:l="blue",background:c="cycleGradient",motif:m="strands",textTone:h="light",edgeStyles:p=z,edgeColor:f="white",outerEdge:u=!1,headingLevel:j=1,seedKey:U,dataTestId:M="masthead",dataAttributes:S,className:B})=>{let L=(0,a.i)(),R=(0,i.useMemo)(()=>({blue:L.palette.default.primary,navy:L.palette.site.blueDark,green:L.palette.site.green,tint:L.palette.site.tint,teal:b.h.TEAL,white:L.palette.text.onAccent,heading:L.palette.site.heading}),[L]),A=(0,i.useRef)(null),D=(0,i.useRef)(null),H=(0,x.f)(A,40),F=(0,$.f)(),G=U??`${M}|${e}`,E=(0,i.useMemo)(()=>(0,k.Z)(m,(0,k.r)(`${G}|motif`)),[m,G]),P=p.join(","),K=(0,i.useMemo)(()=>(0,k.k)(P?P.split(","):[],(0,k.r)(`${G}|edge`)),[P,G]),O=(0,i.useMemo)(()=>K?{bottom:{placement:"inner",color:f,depth:K}}:{},[K,f]),W=(0,i.useMemo)(()=>u&&K?{bottom:{placement:"outer",color:"navy",depth:"section"}}:{},[u,K]),V=`masthead-edge-${(0,i.useId)().replace(/:/g,"")}`,Z=(0,i.useMemo)(()=>H.width>0?(0,w.F)(l,R,H.width,H.height):(0,w.F)(l,R,v.i,v.z),[l,R,H.width,H.height]),X=(0,i.useMemo)(()=>(0,k.o)(l,E,R,"stage"),[l,E,R]),Y=(0,i.useMemo)(()=>(0,k.o)(c,E,R,"tile"),[c,E,R]),q=(0,y.f)({onMove:(e,t)=>D.current?.move(e,t),onLeave:()=>D.current?.leave()});return(0,t.jsxs)(I,{ref:A,className:B,...S,"data-testid":M,"data-foreground":l,"data-background":c,"data-motif-choice":m,"data-motif":E,"data-text-tone":h,"data-edge-styles":P,"data-edge-style":K??"","data-edge-outer":W.bottom?"true":"false","data-columns":H.columns,$edges:O,$outer:W,...q,children:[(0,t.jsx)(_,{children:(0,t.jsx)(o,{background:X,dataTestId:`${M}-surface`})}),(0,t.jsx)(C,{children:(0,t.jsx)(s.f,{ref:D,columns:H.columns,enabled:!F,reveal:Y,dataTestId:`${M}-hover-spot`})}),!W.bottom&&(0,t.jsx)(r.f,{edges:O,columns:H.columns,zIndex:3,dataTestId:`${M}-edge`}),W.bottom&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(N,{"aria-hidden":"true",focusable:"false",children:(0,t.jsx)("defs",{children:(0,t.jsx)("linearGradient",{id:V,gradientUnits:"userSpaceOnUse",x1:Z.x1,x2:Z.x2,y1:0,y2:0,children:Z.stops.map(e=>(0,t.jsx)("stop",{offset:e.offset,stopColor:e.color},`${e.offset}-${e.color}`))})})}),(0,t.jsx)(r.f,{edges:W,columns:H.columns,zIndex:3,fill:{outer:`url(#${V})`},dataTestId:`${M}-edge-outer`})]}),(0,t.jsx)(T,{children:(0,t.jsx)(g,{title:e,lead:n,breadcrumb:d,color:(0,w.k)(h,R),headingLevel:j,dataTestId:`${M}-heading`})})]})};var M=e.i(885895);e.i(821194);var S=e.i(99222),B=e.i(507924);let L=/\s*[:–|]\s*/;e.s(["MastheadBlock",0,({block:e,locale:i,dataTestId:a,dataAttributes:n,edges:o,pageHeading:r})=>{let s,{language:d}=(0,M.N)(),{tr:l}=(0,S.f)(d),{title:c,lead:m,breadcrumb:h,foreground:p,background:f,textTone:u,motif:g,edgeStyles:b}=e.props,x=(0,B.u)(c,i),y=o?.bottom;return(0,t.jsx)(U,{title:x,lead:m?(0,B.u)(m,i):void 0,breadcrumb:!1===h?void 0:[{label:l("masthead.home",{defaultValue:"Startseite"}),href:"/"},{label:""!==(s=(0,B.u)(e.props.breadcrumbLabel,i).trim())?s:function(e,t=40){let i=e.replace(/\s+/g," ").trim();if(i.length<=t)return i;let a=i.split(L)[0]?.trim()??"";if(""!==a&&a!==i&&a.length<=t)return a;let n=(""!==a&&a!==i?a:i).slice(0,t),o=n.lastIndexOf(" "),r=(o>0?n.slice(0,o):n.slice(0,t-1)).replace(/[\s,;.&+–-]+$/,"");return`${r}…`}((0,B.u)(e.props.title,i))}],foreground:p,background:f,textTone:u,motif:g,edgeStyles:y?b:[],edgeColor:y?.color,outerEdge:y?.placement==="inner"&&"white"===y.color,dataTestId:a,dataAttributes:n,headingLevel:r?1:2})}],897498)},142207,e=>{var t=e.i(271645);e.s(["f",0,({onMove:e,onLeave:i})=>{let a=(0,t.useRef)(null);return{onPointerMove:(0,t.useCallback)(t=>{if("touch"===t.pointerType)return;a.current||(a.current=t.currentTarget.getBoundingClientRect());let i=a.current;e(t.clientX-i.left,t.clientY-i.top)},[e]),onPointerLeave:(0,t.useCallback)(()=>{a.current=null,i()},[i])}}])}],121574,function(e){e.n(e.i(897498))}]);