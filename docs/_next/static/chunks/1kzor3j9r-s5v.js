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
  /* #2226: so breit wie die Spalte (Textvorgabe 8 + 2), vorher 72rem */
  width: 100%;
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
`,g=({title:e,lead:i,breadcrumb:a,color:n,headingLevel:o=1,dataTestId:r="masthead-heading",className:s})=>(0,t.jsxs)(p,{className:s,$color:n,"data-testid":r,children:[(0,t.jsx)(d.f,{importance:1===o?l.D.h1:l.D.h2,renderAs:l.D.h1,dataTestId:`${r}-title`,children:e}),i&&(0,t.jsx)(f,{"data-testid":`${r}-lead`,children:(0,t.jsx)(c.f,{variant:m.g.bodybig,dataTestId:`${r}-lead-text`,children:i})}),a&&a.length>0&&(0,t.jsx)(u,{children:(0,t.jsx)(h.f,{items:a,dataTestId:`${r}-breadcrumb`})})]});var b=e.i(118410),x=e.i(240029),y=e.i(142207),v=e.i(587076);e.i(311046);var $=e.i(549560),w=e.i(720034),j=e.i(373386),k=e.i(547905),I=e.i(499881),_=e.i(474704);let T=a.U.section.withConfig({displayName:"Masthead.styles__Root",componentId:"sc-43ead1d3-0"})`
  ${({$edges:e})=>(0,k.n)(e)}
  ${({$outer:e})=>(0,k.n)(e)}
  position: relative;
  isolation: isolate;
  /* kein globaler border-box-Reset: Mindesthöhe samt Polster */
  box-sizing: border-box;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 22rem;
  padding: ${({theme:e})=>`${e.margin.big} 0`};
  ${({$edges:e})=>(0,_.j)("bottom",e?.bottom?.placement==="inner"?I.r[e.bottom.depth??"section"]:0)}

  @media (max-width: 768px) {
    min-height: 16rem;
    padding-top: ${({theme:e})=>e.margin.large};
  }
`,C=a.U.div.withConfig({displayName:"Masthead.styles__SurfaceBox",componentId:"sc-43ead1d3-1"})`
  position: absolute;
  inset: 0;
  z-index: 0;
  container-type: size;
  pointer-events: none;
`,N=a.U.div.withConfig({displayName:"Masthead.styles__HoverLayer",componentId:"sc-43ead1d3-2"})`
  position: absolute;
  inset: 0;
  z-index: 1;
  container-type: size;
  overflow: hidden;
  pointer-events: none;
`,z=a.U.svg.withConfig({displayName:"Masthead.styles__GradientDefs",componentId:"sc-43ead1d3-3"})`
  position: absolute;
  width: 0;
  height: 0;
  overflow: hidden;
  pointer-events: none;
`,M=a.U.div.withConfig({displayName:"Masthead.styles__Content",componentId:"sc-43ead1d3-4"})`
  position: relative;
  z-index: 4;
  width: 100%;
`;var U=e.i(152186),S=e.i(856337);let B=["hero"],L=({title:e,lead:n,breadcrumb:d,foreground:l="blue",background:c="cycleGradient",motif:m="strands",textTone:h="light",edgeStyles:p=B,edgeColor:f="white",outerEdge:u=!1,headingLevel:k=1,seedKey:I,dataTestId:L="masthead",dataAttributes:R,className:A})=>{let D=(0,a.i)(),H=(0,i.useMemo)(()=>({blue:D.palette.default.primary,navy:D.palette.site.blueDark,green:D.palette.site.green,tint:D.palette.site.tint,teal:b.h.TEAL,white:D.palette.text.onAccent,heading:D.palette.site.heading}),[D]),F=(0,i.useRef)(null),G=(0,i.useRef)(null),E=(0,x.f)(F,40),P=(0,v.f)(),K=I??`${L}|${e}`,O=(0,i.useMemo)(()=>(0,j.Z)(m,(0,j.r)(`${K}|motif`)),[m,K]),W=p.join(","),V=(0,i.useMemo)(()=>(0,j.k)(W?W.split(","):[],(0,j.r)(`${K}|edge`)),[W,K]),Z=(0,i.useMemo)(()=>V?{bottom:{placement:"inner",color:f,depth:V}}:{},[V,f]),J=(0,i.useMemo)(()=>u&&V?{bottom:{placement:"outer",color:"navy",depth:"section"}}:{},[u,V]),X=`masthead-edge-${(0,i.useId)().replace(/:/g,"")}`,Y=(0,i.useMemo)(()=>E.width>0?(0,w.F)(l,H,E.width,E.height):(0,w.F)(l,H,$.i,$.z),[l,H,E.width,E.height]),q=(0,i.useMemo)(()=>(0,j.o)(l,O,H,"stage"),[l,O,H]),Q=(0,i.useMemo)(()=>(0,j.o)(c,O,H,"tile"),[c,O,H]),ee=(0,y.f)({onMove:(e,t)=>G.current?.move(e,t),onLeave:()=>G.current?.leave()});return(0,t.jsxs)(T,{ref:F,className:A,...R,"data-testid":L,"data-foreground":l,"data-background":c,"data-motif-choice":m,"data-motif":O,"data-text-tone":h,"data-edge-styles":W,"data-edge-style":V??"","data-edge-outer":J.bottom?"true":"false","data-columns":E.columns,$edges:Z,$outer:J,...ee,children:[(0,t.jsx)(C,{children:(0,t.jsx)(o,{background:q,dataTestId:`${L}-surface`})}),(0,t.jsx)(N,{children:(0,t.jsx)(s.f,{ref:G,columns:E.columns,enabled:!P,reveal:Q,dataTestId:`${L}-hover-spot`})}),!J.bottom&&(0,t.jsx)(r.f,{edges:Z,columns:E.columns,zIndex:3,dataTestId:`${L}-edge`}),J.bottom&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(z,{"aria-hidden":"true",focusable:"false",children:(0,t.jsx)("defs",{children:(0,t.jsx)("linearGradient",{id:X,gradientUnits:"userSpaceOnUse",x1:Y.x1,x2:Y.x2,y1:0,y2:0,children:Y.stops.map(e=>(0,t.jsx)("stop",{offset:e.offset,stopColor:e.color},`${e.offset}-${e.color}`))})})}),(0,t.jsx)(r.f,{edges:J,columns:E.columns,zIndex:3,fill:{outer:`url(#${X})`},dataTestId:`${L}-edge-outer`})]}),(0,t.jsx)(M,{children:(0,t.jsx)(U.f,{dataTestId:`${L}-row`,children:(0,t.jsx)(S.f,{...(0,_.i)(_.M.text),dataTestId:`${L}-col`,children:(0,t.jsx)(g,{title:e,lead:n,breadcrumb:d,color:(0,w.k)(h,H),headingLevel:k,dataTestId:`${L}-heading`})})})})]})};var R=e.i(885895);e.i(821194);var A=e.i(99222),D=e.i(197908),H=e.i(507924);let F=/\s*[:–|]\s*/;var G=e.i(47309);e.s(["MastheadBlock",0,({block:e,locale:i,dataTestId:a,dataAttributes:n,edges:o,pageHeading:r})=>{let s,{language:d}=(0,R.N)(),{tr:l}=(0,A.f)(d),c=(0,G.C)(),{title:m,lead:h,breadcrumb:p,foreground:f,background:u,textTone:g,motif:b,edgeStyles:x}=e.props,y=(0,H.u)(m,i),v=o?.bottom;return(0,t.jsx)(L,{title:y,lead:h?(0,H.u)(h,i):void 0,breadcrumb:!1===p?void 0:[{label:l("masthead.home",{defaultValue:"Startseite"}),href:"/"},...c.map(e=>({label:(0,H.u)(e.label,i),href:(0,D.J)(e.href)})),{label:""!==(s=(0,H.u)(e.props.breadcrumbLabel,i).trim())?s:function(e,t=40){let i=e.replace(/\s+/g," ").trim();if(i.length<=t)return i;let a=i.split(F)[0]?.trim()??"";if(""!==a&&a!==i&&a.length<=t)return a;let n=(""!==a&&a!==i?a:i).slice(0,t),o=n.lastIndexOf(" "),r=(o>0?n.slice(0,o):n.slice(0,t-1)).replace(/[\s,;.&+–-]+$/,"");return`${r}…`}((0,H.u)(e.props.title,i))}],foreground:f,background:u,textTone:g,motif:b,edgeStyles:v?x:[],edgeColor:v?.color,outerEdge:v?.placement==="inner"&&"white"===v.color,dataTestId:a,dataAttributes:n,headingLevel:r?1:2})}],897498)},142207,e=>{var t=e.i(271645);e.s(["f",0,({onMove:e,onLeave:i})=>{let a=(0,t.useRef)(null);return{onPointerMove:(0,t.useCallback)(t=>{if("touch"===t.pointerType)return;a.current||(a.current=t.currentTarget.getBoundingClientRect());let i=a.current;e(t.clientX-i.left,t.clientY-i.top)},[e]),onPointerLeave:(0,t.useCallback)(()=>{a.current=null,i()},[i])}}])}],121574,function(e){e.n(e.i(897498))}]);