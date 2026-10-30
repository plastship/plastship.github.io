(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,118410,e=>{let t={PRIMARY:"#00416E",SECONDARY:"#37BA24",WHITE:"#FFFFFF",BLACK:"#000000",GREY_LIGHT:"#F8F8F8",GREY:"#D8D8D8",GREY_DARK:"#687074",ERROR:"#DC0000",SUCCESS:"#37BA24",INFO:"#00416E",WARNING:"#FFCD00",BUTTON_PRIMARY_BG:"#292929",BUTTON_PRIMARY_TEXT:"#FFFFFF",BUTTON_SECONDARY_BG:"#EFCD00",BUTTON_SECONDARY_TEXT:"#292929",BUTTON_TERTIARY_BORDER:"#292929",BUTTON_DANGER_BG:"#E22F2F",HEADER_BG:"#F1FCFF",FOOTER_BG:"#1F2937",LINK_PRIMARY:"#8A2163",TEAL:"#5DE8D2",ORANGE:"#FF8A75",CORAL:"#FFBA4D",PURPLE:"#B97AFF",TRAFFIC_GREEN:"#22C55E",TRAFFIC_YELLOW:"#EAB308",TRAFFIC_RED:"#EF4444",TRAFFIC_GREY:"#D1D5DB",AUCTION:"#EF4444",MICROSOFT:"#4DA3FF"},a={COLOR_1:"#e8c1a0",COLOR_2:"#f47560",COLOR_3:"#f1e15b",COLOR_4:"#e8a838",COLOR_5:"#61cdbb",COLOR_6:"#97e3d5",COLOR_7:"#b5cf6b",COLOR_8:"#d6e685",COLOR_9:"#a6d854",COLOR_10:"#8dd1e1"},r={plastship:[t.PRIMARY,t.SECONDARY,t.WARNING,t.LINK_PRIMARY,t.BUTTON_PRIMARY_BG,t.BUTTON_SECONDARY_BG,t.GREY_DARK,t.INFO,t.SUCCESS,t.ERROR],categorical:["#2a78d6","#eb6834","#1baf7a","#eda100","#e87ba4","#008300","#4a3aa7","#e34948"],status:[t.SUCCESS,t.INFO,t.WARNING,t.ERROR],nivo:[a.COLOR_1,a.COLOR_2,a.COLOR_3,a.COLOR_4,a.COLOR_5,a.COLOR_6,a.COLOR_7,a.COLOR_8,a.COLOR_9,a.COLOR_10]},o={"#00416e":"#60A0E8","#292929":"#BDC3C7","#000000":"#E5E7EB","#687074":"#9CA3AF","#889396":"#9CA3AF","#8a2163":"#D38AB1","#4a3aa7":"#8F84E8","#008300":"#3FBF3F"};e.s(["W",0,a,"g",0,r,"h",0,t,"C",0,(e,t)=>t?o[e.toLowerCase()]??e:e,"T",0,(e,t)=>{let a=e.replace("#",""),r=parseInt(a.substring(0,2),16),o=parseInt(a.substring(2,4),16),i=parseInt(a.substring(4,6),16);return`rgba(${r}, ${o}, ${i}, ${t})`}])},882006,387506,594339,596804,e=>{var t=e.i(997053),a=e.i(351754);let r=t.m`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: ${a.f.popover};
  max-height: 18.75rem;
  overflow-y: auto;
  margin: 0.25rem 0 0 0;
  padding: 0;
  background: ${({theme:e})=>e.palette.default.white};
  border-radius: ${({theme:e})=>e.borderRadius.input};
  outline: 1px solid ${({theme:e})=>e.palette.default.grey};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  list-style: none;
`,o=t.m`
  cursor: pointer;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  font-weight: 300;
  line-height: 1.5rem;
  transition: all 200ms ease-in-out;
  border-bottom: 1px solid ${({theme:e})=>e.palette.default.greyLight};

  &:last-child {
    border-bottom: none;
  }
`,i=t.U.ul.withConfig({displayName:"dropdownStyles__DropdownList",componentId:"sc-9bb914e4-0"})`
  ${r}
  display: ${({$visible:e})=>!1===e?"none":"block"};
`,n=t.U.li.withConfig({displayName:"dropdownStyles__DropdownItem",componentId:"sc-9bb914e4-1"})`
  ${o}
  color: ${({$active:e,theme:t})=>e?t.palette.default.white:t.palette.default.black};
  background: ${({$active:e,theme:t})=>e?t.palette.default.primary:t.palette.default.white};

  &:hover {
    color: ${({theme:e})=>e.palette.default.black};
    background: ${({theme:e})=>e.palette.default.greyLight};
  }
`,l=t.U.div.withConfig({displayName:"dropdownStyles__DropdownItemPrimary",componentId:"sc-9bb914e4-2"})`
  font-weight: 500;
  color: inherit;
`,c=t.U.div.withConfig({displayName:"dropdownStyles__DropdownItemSecondary",componentId:"sc-9bb914e4-3"})`
  font-size: 0.75rem;
  color: ${({theme:e})=>e.palette.default.greyDark};
  margin-top: 0.125rem;
`,d=t.m`
  padding: 0.75rem;
  color: ${({theme:e})=>e.palette.default.greyDark};
  font-size: 0.875rem;
  text-align: center;
`,_=t.U.div.withConfig({displayName:"dropdownStyles__NoResults",componentId:"sc-9bb914e4-4"})`
  ${d}
`;e.s(["z",0,n,"u",0,l,"N",0,c,"i",0,i,"O",0,_,"f",0,r,"o",0,d],387506);let s=t.U.div.withConfig({displayName:"adornment__AdornedInputWrapper",componentId:"sc-cf83c0e4-0"})`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`,u=t.U.span.withConfig({displayName:"adornment__InputAdornment",componentId:"sc-cf83c0e4-1"})`
  position: absolute;
  ${({$position:e})=>"start"===e?"left":"right"}: 0.5rem;
  top: 50%;
  transform: translateY(-50%);
  font-size: 0.9rem;
  color: ${({theme:e})=>e.palette.default.greyDark};
  font-weight: 500;
  pointer-events: none;
`;e.s(["h",0,s,"f",0,u,"d",0,"1.75rem"],594339),e.s([],882006);let p=e=>t.m`
  border-color: ${({theme:t})=>e?t.palette.default.error:t.palette.default.primary};
  box-shadow: 0 0 0 0.2rem
    ${({theme:t})=>(e?t.palette.default.error:t.palette.default.primary)+"40"};
`;e.s(["a",0,p,"B",0,e=>t.m`
  box-sizing: border-box;
  width: 100%;
  min-height: 38px;
  padding: 0.375rem 0.5rem;
  font-family: inherit;
  font-size: 0.9rem;
  color: ${({theme:e})=>e.palette.default.black};
  background-color: ${({theme:e})=>e.palette.default.white};
  border: 1px solid
    ${({theme:t})=>e?.error?t.palette.default.error:t.palette.default.grey};
  border-radius: ${({theme:e})=>e.borderRadius.input};
  outline: none;
  color-scheme: light;

  &::placeholder {
    color: ${({theme:e})=>e.palette.default.greyDark};
    opacity: 0.7;
  }

  &:focus {
    ${p(e?.error)}
  }

  &:disabled {
    background-color: ${({theme:e})=>e.palette.default.greyLight};
    cursor: not-allowed;
  }
`],596804)},201927,e=>{var t=e.i(843476),a=e.i(997053);let r=a.U.svg.withConfig({displayName:"IconCheck.styles__Root",componentId:"sc-8d552d59-0"})``;e.s(["f",0,e=>{let a=e.color??"currentColor";return(0,t.jsxs)(r,{className:e.className,"data-testid":"icon-check-root",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[(0,t.jsx)("title",{children:"check"}),(0,t.jsx)("g",{fill:a,strokeLinejoin:"miter",strokeLinecap:"butt",children:(0,t.jsx)("polyline",{points:"3 13 8 19 21 5",fill:"none",stroke:a,strokeLinecap:"square",strokeMiterlimit:10,strokeWidth:"2"})})]})}],201927)},559173,e=>{e.s(["p",()=>i,"$",()=>r]);var t=e.i(997053),a=e.i(703089);let r=(e=a.g.body)=>t.m`
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
  `,o=t.m`
  margin-bottom: ${e=>e.$variant===a.g.caption?0:e.theme.margin.default};
  max-width: 700px;
  ${e=>r(e.$variant)}
`,i=t.U.p.withConfig({displayName:"Text.styles__Text",componentId:"sc-18bfeccb-0"})`
  ${o}
`},703089,e=>{e.s(["p",()=>i,"g",()=>o]);var t,a=e.i(843476),r=e.i(559173),o=((t={}).bodybig="bodybig",t.body="body",t.bodysmall="bodysmall",t.button="button",t.caption="caption",t.navigation="navigation",t);let i=({children:e,dataTestId:t="text-root",variant:o,className:i})=>(0,a.jsx)(r.p,{"data-testid":t,className:i,$variant:o,children:e})},535004,e=>{var t,a=e.i(843476),r=e.i(271645),o=e.i(997053),i=e.i(547905),n=e.i(136717);let l={small:{outer:28,inner:24,inset:2,iconScale:.55},medium:{outer:36,inner:32,inset:2,iconScale:.8},large:{outer:48,inner:44,inset:2,iconScale:1}},c=(e,t)=>t?(0,n.J)(t)?(0,n.L)(t):e.palette.text.onAccent:e.palette.default.white,d=o.U.div.withConfig({displayName:"IconButton.styles__TooltipWrapper",componentId:"sc-9416e081-0"})`
  position: relative;
  display: inline-flex;
`,_=o.U.button.withConfig({displayName:"IconButton.styles__Root",componentId:"sc-9416e081-1"})`
  width: ${e=>l[e.$size||"medium"].outer}px;
  height: ${e=>l[e.$size||"medium"].outer}px;
  min-width: ${e=>l[e.$size||"medium"].outer}px;
  min-height: ${e=>l[e.$size||"medium"].outer}px;
  padding: 0;
  margin: 0;
  border: none;
  outline: none;
  background: none;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.15s ease-in-out;

  /* All children get position and z-index */
  & > * {
    position: relative;
    z-index: 1;
  }

  /* SVG icons - use block display and scale by size */
  & > svg {
    flex-shrink: 0;
    display: block;
    transform: scale(${e=>l[e.$size||"medium"].iconScale});
  }

  /* Icon components (non-SVG) and text spans, but not tooltip */
  & > :not(svg):not([data-testid='tooltip-root']) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Icon color: black by default */
  path,
  rect,
  line,
  circle,
  polyline,
  polygon {
    stroke: ${e=>e.theme.palette.default.black};
  }

  /* Hexagon outline - outer shape */
  &::before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: ${e=>l[e.$size||"medium"].outer}px;
    height: ${e=>l[e.$size||"medium"].outer}px;
    clip-path: ${e=>{let t;return t=e.$size||"medium",(0,i.F)(l[t].outer)}};
    background: ${e=>e.color||e.theme.palette.default.greyDark};
    opacity: 0.6;
    z-index: 0;
    transition: 0.15s ease-in-out;
  }

  /* Hexagon outline - inner cutout (creates outline effect) */
  &::after {
    position: absolute;
    content: '';
    top: ${e=>l[e.$size||"medium"].inset}px;
    left: ${e=>l[e.$size||"medium"].inset}px;
    width: ${e=>l[e.$size||"medium"].inner}px;
    height: ${e=>l[e.$size||"medium"].inner}px;
    clip-path: ${e=>(e=>{let{outer:t,inner:a,inset:r}=l[e];return(0,i.F)(a,(0,i.X)(t,r))})(e.$size||"medium")};
    background: ${e=>e.theme.palette.default.white};
    z-index: 0;
    transition: 0.15s ease-in-out;
  }

  /* Text label for children, exclude tooltip */
  & > span:not([data-testid='tooltip-root']) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Apply the same hover styles for active state — Farben siehe fillTextColor */
  ${e=>e.$isActive&&`
    color: ${c(e.theme,e.color)};
    path,
    rect,
    line,
    circle,
    polyline,
    polygon {
      stroke: ${c(e.theme,e.color)};
    }
    &::before {
      opacity: 1;
      background: ${e.theme.palette.default.white};
    }
    &::after {
      background: ${e.color||e.theme.palette.default.primary};
      opacity: 1;
    }
  `}

  /* #1863: Gesperrter Knopf (natives disabled) sieht gesperrt aus — Sechseck
     und Icon gedaempft, kein Zeiger, kein Hover-Effekt. Der Tooltip am
     TooltipWrapper bleibt und nennt den Grund. */
  &:disabled {
    cursor: not-allowed;
    opacity: 0.35;
    pointer-events: none;
  }

  &:hover {
    color: ${e=>c(e.theme,e.color)};
    path,
    rect,
    line,
    circle,
    polyline,
    polygon {
      stroke: ${e=>c(e.theme,e.color)};
    }
    &::before {
      opacity: 1;
      background: ${e=>e.theme.palette.default.white};
    }
    &::after {
      background: ${e=>e.color||e.theme.palette.default.primary};
      opacity: 1;
    }
  }
`;var s=e.i(118410);e.i(849871);var u=e.i(352706);let p={primary:s.h.PRIMARY,secondary:s.h.SECONDARY,white:s.h.WHITE,greyLight:s.h.GREY_LIGHT,grey:s.h.GREY,greyDark:s.h.GREY_DARK,black:s.h.BLACK,error:s.h.ERROR,success:s.h.SUCCESS,info:s.h.INFO,warning:s.h.WARNING,linkPrimary:s.h.LINK_PRIMARY,buttonPrimaryBg:s.h.BUTTON_PRIMARY_BG,buttonSecondaryBg:s.h.BUTTON_SECONDARY_BG,teal:s.h.TEAL,orange:s.h.ORANGE,coral:s.h.CORAL,purple:s.h.PURPLE,microsoft:s.h.MICROSOFT};var f=((t={}).LEFT="left",t.RIGHT="right",t);e.s(["V",()=>f,"_",0,e=>{let{icon:t,onClick:o,tooltip:i,tooltipPosition:n="bottom",ariaLabel:l,color:c,style:s,isDisabled:p,isActive:f,forceTooltip:m,iconAlign:g,children:h,dataTestId:y,dataState:b,size:I}=e,[C,A]=(0,r.useState)(!1);(0,r.useEffect)(()=>{A(!0)},[]);let[k,S]=(0,r.useState)(!1),O=(0,r.useRef)(null);return(0,a.jsxs)(d,{ref:O,onMouseEnter:()=>S(!0),onMouseLeave:()=>S(!1),children:[(0,a.jsxs)(_,{type:"button",onClick:o,className:e.className,"data-testid":y||"icon-button-root","data-state":b,"data-shape":"rounded-hex","data-disabled":p?"true":void 0,"aria-label":C?l||i:"",color:c,style:s,$isDisabled:p,$isActive:f,$hasChildren:!!h,$size:I,disabled:p,children:["left"===g&&t,h&&(0,a.jsx)("span",{children:h}),(!g||"right"===g)&&t]}),C&&i&&(0,a.jsx)(u.f,{content:i,isVisible:m||k&&!f,position:n,backgroundColor:c,anchorRef:O})]})},"Z",0,p],535004)},805885,e=>{let t=e.i(535004)._;e.s(["f",0,t])},867428,793300,e=>{var t=e.i(843476),a=e.i(997053);let r=a.q`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,o=a.U.div.withConfig({displayName:"LoadingSpinner.styles__LoadingContainer",componentId:"sc-ec6f4daf-0"})`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${e=>e.$padding||"2rem"};
  min-height: ${e=>e.$fullHeight?"100%":"auto"};
`,i=a.U.p.withConfig({displayName:"LoadingSpinner.styles__LoadingMessage",componentId:"sc-ec6f4daf-1"})`
  margin-top: 1rem;
  font-size: 0.875rem;
  color: ${e=>e.theme.palette.default.greyDark};
  text-align: center;
`,n=a.U.div.withConfig({displayName:"LoadingSpinner.styles__SpinnerWrapper",componentId:"sc-ec6f4daf-2"})`
  display: flex;
  align-items: center;
  justify-content: center;

  ${e=>e.$useLogo&&a.m`
      animation: ${r} 3s ease-in-out infinite;
      animation-delay: 0.5s;
      /* Hardware acceleration for smooth animation */
      will-change: transform;
      transform: translateZ(0);
      backface-visibility: hidden;
      perspective: 1000px;
    `}

  svg {
    width: ${e=>{switch(e.$size){case"small":return"16px";case"large":return e.$useLogo?"100px":"48px";default:return"24px"}}};
    height: ${e=>{switch(e.$size){case"small":return"16px";case"large":return e.$useLogo?"112px":"48px";default:return"24px"}}};
  }
`;var l=e.i(646145);let c=a.U.div.withConfig({displayName:"LogoPlastshipNoText.styles__Root",componentId:"sc-af92995f-0"})``,d=e=>{let{className:a,width:r=89,height:o=100,...i}=e;return(0,t.jsx)(c,{className:a,"data-testid":"logo-plastship-no-text-root",children:(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:r,height:o,viewBox:"0 0 89 100",fill:"none",shapeRendering:"geometricPrecision",...i,children:[(0,t.jsxs)("g",{clipPath:"url(#clip0_2_2)",children:[(0,t.jsx)("path",{d:"M16.157 63.1687V37.2257C16.1565 36.2097 16.4236 35.2114 16.9315 34.3314C17.4394 33.4514 18.17 32.7206 19.05 32.2127L41.168 19.4377C42.0482 18.9295 43.0466 18.662 44.063 18.662C45.0794 18.662 46.0778 18.9295 46.958 19.4377L69.418 32.4087L85.574 23.0787L46.959 0.775713C46.0788 0.267534 45.0804 0 44.064 0C43.0476 0 42.0492 0.267534 41.169 0.775713L2.895 22.8817C2.01486 23.3896 1.28395 24.1203 0.775767 25.0003C0.267579 25.8803 2.32196e-05 26.8785 0 27.8947L0 72.5007L16.157 63.1687Z",fill:"#00416E"}),(0,t.jsx)("path",{d:"M71.9698 36.831V62.774C71.97 63.79 71.7028 64.7882 71.195 65.6682C70.6872 66.5481 69.9566 67.2789 69.0768 67.787L46.9568 80.562C46.0771 81.0707 45.0789 81.3385 44.0628 81.3385C43.0466 81.3385 42.0484 81.0707 41.1688 80.562L18.7098 67.59L2.55176 76.921L41.1698 99.224C42.0494 99.7328 43.0476 100.001 44.0638 100.001C45.0799 100.001 46.0781 99.7328 46.9578 99.224L85.2328 77.118C86.1129 76.6101 86.8438 75.8794 87.352 74.9994C87.8602 74.1194 88.1277 73.1212 88.1278 72.105V27.5L71.9698 36.831Z",fill:"#37BA24"})]}),(0,t.jsx)("defs",{children:(0,t.jsx)("clipPath",{id:"clip0_2_2",children:(0,t.jsx)("rect",{width:"89",height:"100.001",fill:"white"})})})]})})};e.s(["f",0,({message:e,size:a="medium",inverted:r=!1,padding:c="2rem",fullHeight:_=!1,dataTestId:s="loading-spinner",className:u})=>(0,t.jsxs)(o,{$padding:c,$fullHeight:_,className:u,"data-testid":s,children:[(0,t.jsx)(n,{$size:a,$useLogo:"large"===a,children:"large"===a?(0,t.jsx)(d,{width:100,height:112}):(0,t.jsx)(l.f,{inverted:r})}),e&&(0,t.jsx)(i,{"data-testid":`${s}-message`,children:e})]})],793300),e.s([],867428)},849871,352706,e=>{var t=e.i(843476),a=e.i(271645),r=e.i(174080),o=e.i(997053),i=e.i(136717);let n=o.U.span.withConfig({displayName:"Tooltip.styles__Root",componentId:"sc-3975a79f-0"})`
  position: ${e=>e.$fixed?"fixed":"absolute"};
  white-space: pre-line;
  padding: 8px 12px;
  background: ${e=>e.$backgroundColor||e.theme.palette.default.primary};
  color: ${e=>{var t,a,r;return t=e.theme,a=e.$backgroundColor,(r=e.$textColor)?r:a?(0,i.J)(a)?(0,i.L)(a):t.palette.text.onAccent:t.palette.default.white}};
  border-radius: 4px;
  font-size: 16px;
  font-family: ${e=>e.theme.font.secondaryFamily};
  line-height: 24px;
  opacity: ${e=>+!!e.$isVisible};
  visibility: ${e=>e.$isVisible?"visible":"hidden"};
  transition:
    opacity 0.2s ease-in-out,
    visibility 0.2s ease-in-out;
  z-index: ${e=>e.$fixed?9999:100};
  pointer-events: ${e=>e.$interactive?"auto":"none"};

  /* Position variants with dynamic offset adjustments */
  ${e=>{if(e.$fixed)return`
        top: ${e.$top||0}px;
        left: ${e.$left||0}px;
      `;let t=e.$offsetX||0,a=e.$offsetY||0;switch(e.$position){case"top":return`
          bottom: 100%;
          left: 50%;
          transform: translateX(calc(-50% + ${t}px)) translateY(${a}px);
          margin-bottom: 8px;
        `;case"bottom":default:return`
          top: 100%;
          left: 50%;
          transform: translateX(calc(-50% + ${t}px)) translateY(${a}px);
          margin-top: 8px;
        `;case"left":return`
          right: 100%;
          top: 50%;
          transform: translateY(calc(-50% + ${a}px)) translateX(${t}px);
          margin-right: 8px;
        `;case"right":return`
          left: 100%;
          top: 50%;
          transform: translateY(calc(-50% + ${a}px)) translateX(${t}px);
          margin-left: 8px;
        `}}}
`;e.s(["f",0,e=>{let{content:o,isVisible:i=!1,position:l="bottom",backgroundColor:c,textColor:d,anchorRef:_,interactive:s=!1,onMouseEnter:u,onMouseLeave:p,align:f="center",dataTestId:m="tooltip-root"}=e,g=(0,a.useRef)(null),[h,y]=(0,a.useState)(l),[b,I]=(0,a.useState)({x:0,y:0}),[C,A]=(0,a.useState)({top:0,left:0}),[k,S]=(0,a.useState)(!1),[O,P]=(0,a.useState)(!1);(0,a.useEffect)(()=>{P(!0)},[]);let $=!!_,D="string"==typeof o?o:"node";if((0,a.useEffect)(()=>{if(!i||!g.current){y(l),I({x:0,y:0}),S(!1);return}requestAnimationFrame(()=>{if(g.current)if($&&_?.current){let e=_.current,t=g.current,a=e.getBoundingClientRect(),r=t.getBoundingClientRect(),o=r.width,i=r.height,n=window.innerWidth,c=window.innerHeight,d=0,s=0;switch(l){case"top":d=a.top-i-8,s=a.left+a.width/2-o/2;break;case"bottom":d=a.bottom+8,s=a.left+a.width/2-o/2;break;case"left":d="start"===f?a.top:a.top+a.height/2-i/2,s=a.left-o-8;break;case"right":d="start"===f?a.top:a.top+a.height/2-i/2,s=a.right+8}s+o>n-8&&(s=n-o-8),s<8&&(s=8),d+i>c-8&&"bottom"===l&&(d=a.top-i-8),d<8&&"top"===l&&(d=a.bottom+8),d+i>c-8&&(d=Math.max(8,c-i-8)),A({top:d,left:s}),S(!0)}else{let e=g.current.getBoundingClientRect(),t=window.innerWidth,a=window.innerHeight,r=l,o=0,i=0;e.right>t&&("bottom"===l||"top"===l?o=t-e.right-8:"right"===l&&(r="left")),e.left<0&&("bottom"===l||"top"===l?o=-e.left+8:"left"===l&&(r="right")),e.bottom>a&&("bottom"===l?r="top":("left"===l||"right"===l)&&(i=a-e.bottom-8)),e.top<0&&("top"===l?r="bottom":("left"===l||"right"===l)&&(i=-e.top+8)),y(r),I({x:o,y:i}),S(!0)}})},[i,l,f,D,$,_,O]),!o)return(0,t.jsx)(t.Fragment,{});if($){let a=(0,t.jsx)(n,{ref:g,className:e.className,$isVisible:i&&k,$position:l,$backgroundColor:c,$textColor:d,$fixed:!0,$top:C.top,$left:C.left,$interactive:s,as:s?"div":"span",style:{top:C.top,left:C.left},onMouseEnter:s?u:void 0,onMouseLeave:s?p:void 0,"data-testid":m,"data-visible":i?"true":"false","data-interactive":s?"true":"false",children:o});return O&&"u">typeof document?(0,r.createPortal)(a,document.body):(0,t.jsx)(t.Fragment,{})}return(0,t.jsx)(n,{ref:g,className:e.className,$isVisible:i&&k,$position:h,$backgroundColor:c,$textColor:d,$offsetX:b.x,$offsetY:b.y,$interactive:s,onMouseEnter:s?u:void 0,onMouseLeave:s?p:void 0,"data-testid":m,"data-visible":i?"true":"false","data-interactive":s?"true":"false",children:o})}],352706),e.s([],849871)},225120,e=>{var t=e.i(271645);let a=(0,t.createContext)({userContext:null,loading:!0,error:null});e.s(["p",0,a,"U",0,()=>(0,t.useContext)(a)])},858350,164223,e=>{var t=e.i(271645);e.i(821194);var a=e.i(99222);function r(...e){for(let t of e)if("string"==typeof t&&""!==t.trim())return t;return null}e.s(["f",0,r],164223),e.s(["f",0,function(){let{tr:e}=(0,a.f)();return{label:(0,t.useCallback)((...t)=>{let a=r(...t);return null!==a?{text:a,unnamed:!1}:{text:e("common.unnamedRecord",{defaultValue:"Unnamed"}),unnamed:!0}},[e])}}],858350)},912381,19900,e=>{let t={Verh_ltnis__c:"Verhältnis",Standard_Gesch_ftsablauf__c:"Standard Geschäftsablauf",Anzahl_KISS_Pr_fungen_avisiert__c:"Anzahl KISS-Prüfungen avisiert",Kunde_Materialpr_fung__c:"Kunde Materialprüfung",Ma_nahmen__c:"Maßnahmen",Ust_ID__c:"USt-ID",Zust_ndiger_Kontakt_Lieferant__c:"Zuständiger Kontakt Lieferant",Zust_ndiger_Kontakt_Kunde__c:"Zuständiger Kontakt Kunde",Vorlage_AB_Stra_e__c:"Vorlage AB Straße",Hinweis_Auftragsbest_tigung__c:"Hinweis Auftragsbestätigung",Verpackung_bersetzung_EN_del__c:"Verpackung Übersetzung EN",Tats_chliche_Liefermenge__c:"Tatsächliche Liefermenge",Tats_chliches_Abholdatum__c:"Tatsächliches Abholdatum",Tats_chliches_Lieferdatum__c:"Tatsächliches Lieferdatum",AVV_Nummer_Anzeige__c:"AVV-Nummer Anzeige",Voralge_Dispo_Transp_PLZ_Text__c:"Vorlage Dispo Transport PLZ Text",Ergebnis_ben_tigt_bis__c:"Ergebnis benötigt bis",Kategorie_f_r_Qualit_tseinsch_tzung__c:"Kategorie für Qualitätseinschätzung",Sch_ttdichte__c:"Schüttdichte",Beschreibung_Analysen_Optische_Qualit_t__c:"Beschreibung Analysen Optische Qualität",Anzahl_Datens_tze_Optische_Qualit_t__c:"Anzahl Datensätze Optische Qualität",Anzahl_Datens_tze_Geruch__c:"Anzahl Datensätze Geruch",Gesamtqualit_t__c:"Gesamtqualität",Optische_Qualit_t__c:"Optische Qualität",Mechanische_Qualit_t__c:"Mechanische Qualität",Polymerqualit_t__c:"Polymerqualität",Geruchsqualit_t__c:"Geruchsqualität",Summe_Defekte_gro__c:"Summe Defekte groß",Oberfl_chenfeuchte_Test_Standard_IS__c:"Oberflächenfeuchte Test Standard ISO",Kerbschlagz_higkeit_Charpy__c:"Kerbschlagzähigkeit Charpy",Projektpriorit_t__c:"Projektpriorität",Risikoabsch_tzung__c:"Risikoabschätzung",Potenzialabsch_tzung__c:"Potenzialabschätzung",Jahresmengenbest_tigung__c:"Jahresmengenbestätigung",Begr_ndung_der_Bewertung__c:"Begründung der Bewertung",PLZ__c:"PLZ (Postleitzahl)",AVV_Nummer__c:"AVV-Nummer",MFR_kg__c:"MFR (kg)",MVR__c:"MVR (Melt Volume Rate)",TDS_check_up__c:"TDS Check-up",PCF_Virgin_Material_kg_CO2_eq__c:"PCF Virgin Material (kg CO₂ eq)",Product_Carbon_Footprint_kg_CO2_eq__c:"Product Carbon Footprint (kg CO₂ eq)",Potential_CO2e_savings__c:"Potenzial CO₂e Einsparung",Document_Order_attached__c:"Bestellung angehängt",Document_Order_Confirmation_attached__c:"Auftragsbestätigung angehängt",Document_Order_to_Supplier_attached__c:"Bestellung an Lieferant angehängt",Document_Transport_Order_attached__c:"Transportauftrag angehängt",Document_Pickup_Note_attached__c:"Abholschein angehängt",Document_Delivery_Note_attached__c:"Lieferschein angehängt",Document_CoA_attached__c:"CoA angehängt",Document_Annex_VII_attached__c:"Anlage VII angehängt",Document_Weighing_Note_Supplier_attached__c:"Wiegeschein Lieferant angehängt",Document_Weighing_Note_Customer_attached__c:"Wiegeschein Kunde angehängt",Document_CMR_attached__c:"CMR angehängt",Document_Original_TDS_attached__c:"Original TDS angehängt",Document_plastship_TDS_attached__c:"plastship TDS angehängt",Document_Original_MSDS_attached__c:"Original MSDS angehängt",Document_plastship_MSDS_attached__c:"plastship MSDS angehängt",Document_Additional_Analysis_attached__c:"Zusätzliche Analyse angehängt",TotalInformation_rate__c:"Gesamtinformationen (%)",AccountInformation_rate__c:"Account-Informationen (%)",ContactInformation_rate__c:"Kontakt-Informationen (%)",AdditionalInformation_rate__c:"Zusätzliche Informationen (%)",InvoiceInformation_rate__c:"Rechnungsinformationen (%)",ResearchInformation_rate__c:"Recherche-Informationen (%)",Processing_Status_percent__c:"Bearbeitungsstatus (%)",MP_Progress_percent__c:"MP Fortschritt (%)",Versandart_Muster__c:"Versandart Muster",Empf_nger_Account__c:"Empfänger Account",Sichtbar_f_r_Kunden__c:"Sichtbar für Kunden",F_llstoff_Text__c:"Füllstoff Text",Hauptpolymer__c:"Hauptpolymer",Materialform__c:"Materialform",Recyclatdefinition__c:"Rezyklat-Definition",Stra_e__c:"Straße",Stra_e_Nummer__c:"Straßen-Nummer"};function a(e){return t[e]?t[e]:e.replace(/__c$/,"").replace(/__r$/,"").replace(/_/g," ").replace(/([a-z])([A-Z])/g,"$1 $2").trim()}e.s(["U",0,t,"V",0,a],19900);let r={ä:"ae",ö:"oe",ü:"ue",Ä:"Ae",Ö:"Oe",Ü:"Ue",ß:"ss"},o=(e,t,a)=>{let o;return t?e(a??(o=t.replace(/[äöüÄÖÜß]/g,e=>r[e]).replace(/[^A-Za-z0-9]+/g,"_").replace(/^_+|_+$/g,"").slice(0,40),`entityFields.${o?`${o}_`:""}${(e=>{let t=0x811c9dc5;for(let a=0;a<e.length;a++)t^=e.charCodeAt(a),t=Math.imul(t,0x1000193);return(t>>>0).toString(16).padStart(8,"0")})(t)}`),{defaultValue:t}):t},i=(e,t)=>e.map(e=>({...e,label:o(t,e.label,e.labelKey)})),n=(e,t)=>({...e,label:o(t,e.label??a(e.apiName),e.labelKey),...e.helpText?{helpText:o(t,e.helpText)}:{},...e.placeholder?{placeholder:o(t,e.placeholder)}:{},...e.picklistOptions?{picklistOptions:i(e.picklistOptions,t)}:{}}),l=(e,t)=>({...e,label:o(t,e.label,e.labelKey),fields:e.fields.map(e=>n(e,t))}),c=(e,t)=>({...e,label:o(t,e.label,e.labelKey)}),d=(e,t)=>({...e,label:o(t,e.label)});e.s(["H",0,(e,t)=>({...e,entityLabel:o(t,e.entityLabel,e.entityLabelKey),sections:e.sections.map(e=>l(e,t)),...e.createSections?{createSections:e.createSections.map(e=>l(e,t))}:{},...e.tabGroups?{tabGroups:e.tabGroups.map(e=>d(e,t))}:{},...e.relatedLists?{relatedLists:e.relatedLists.map(e=>c(e,t))}:{},...e.relatedListTabGroups?{relatedListTabGroups:e.relatedListTabGroups.map(e=>d(e,t))}:{}}),"B",0,n,"i",0,i,"f",0,c,"p",0,l,"j",0,d,"m",0,o,"L",0,(e,t)=>o(e,a(t))],912381)},844771,393194,e=>{var t=e.i(765691),a=e.i(354477);let r={Account:{requiredFields:["Name"],hiddenInCreate:["Id","CreatedDate","LastModifiedDate","SystemModstamp","OwnerId","PhotoUrl"],allowFileUpload:!0,relatedObjects:[{entityType:t.f.Contact,label:"Kontakt",labelPlural:"Kontakte",parentField:"AccountId",fields:["Salutation","FirstName","LastName","Email","Phone"]}]},Contact:{requiredFields:["LastName"],hiddenInCreate:["Id","CreatedDate","LastModifiedDate","SystemModstamp","OwnerId","PhotoUrl"],allowFileUpload:!0},Opportunity:{requiredFields:["Name","StageName","CloseDate","AccountId"],hiddenInCreate:["Id","CreatedDate","LastModifiedDate","IsClosed","IsWon","ExpectedRevenue","ForecastCategory","OwnerId"],allowFileUpload:!0},Case:{requiredFields:["Subject","Type","Status","Priority","Origin"],hiddenInCreate:["Id","CaseNumber","CreatedDate","LastModifiedDate","IsClosed","ClosedDate","OwnerId"],allowFileUpload:!0},Task:{requiredFields:["Subject","Status","Priority","Type","ActivityDate"],hiddenInCreate:["Id","CreatedDate","LastModifiedDate","IsClosed","CompletedDateTime","IsRecurrence","OwnerId","WhatId"],createDefaults:{Status:"Not Started",Priority:"Normal"}},Order:{requiredFields:["Type","Status","AccountId","EffectiveDate"],hiddenInCreate:["Id","OrderNumber","CreatedDate","LastModifiedDate","TotalAmount","ActivatedDate","OwnerId"],allowFileUpload:!0,relatedObjects:[{entityType:t.f.OrderItem,label:"Auftragsposition",labelPlural:"Auftragspositionen",parentField:"OrderId",fields:["Product2Id","Quantity","UnitPrice","Einkaufspreis_pro_t__c","Description"],requiredFields:["Product2Id","Quantity","UnitPrice"]}]},Contract:{requiredFields:["AccountId","Status","StartDate"],hiddenInCreate:["Id","ContractNumber","EndDate","ActivatedDate","OwnerId","Projektzuordnung_Typ__c"]},OrderItem:{requiredFields:["Quantity","UnitPrice"],hiddenInCreate:["Id","CreatedDate","LastModifiedDate","TotalPrice","ListPrice"]},Project:{requiredFields:["Name","Projekttyp__c","Status__c"],hiddenInCreate:["Id","CreatedDate","LastModifiedDate","OwnerId"]},Invoice:{requiredFields:[],hiddenInCreate:["Id","CreatedDate","LastModifiedDate","OwnerId"]},MaterialAnalysis:{requiredFields:[],hiddenInCreate:["Id","CreatedDate","LastModifiedDate","OwnerId"]},MaterialProposal:{requiredFields:["Name"],hiddenInCreate:["Id","CreatedDate","LastModifiedDate","OwnerId"]},MonitoredMaterial:{requiredFields:["Name"],hiddenInCreate:["Id","CreatedDate","LastModifiedDate","OwnerId"]},Requirement:{requiredFields:["Name"],hiddenInCreate:["Id","CreatedDate","LastModifiedDate","OwnerId"]},SampleFeedback:{requiredFields:["Sample_Sending__c"],hiddenInCreate:["Id","CreatedDate","LastModifiedDate","OwnerId"]},SampleSending:{requiredFields:["Account__c"],hiddenInCreate:["Id","CreatedDate","LastModifiedDate","OwnerId"],allowFileUpload:!0,relatedObjects:[{entityType:t.f.SampleFeedback,label:"Feedback",labelPlural:"Feedbacks",parentField:"Sample_Sending__c",fields:["Name","Status__c","Feedback_Date__c"]}]},Onboarding:{requiredFields:["Name","Account__c"],hiddenInCreate:["Id","CreatedDate","LastModifiedDate","OwnerId"]},ContactHandover:{requiredFields:["Name","Contact__c"],hiddenInCreate:["Id","CreatedDate","LastModifiedDate","OwnerId"]},Product:{requiredFields:["Name"],createDefaults:{IsActive:!0},hiddenInCreate:["Id","CreatedDate","LastModifiedDate","Product_Name__c","Abweichende_Laborwerte_gefunden__c","Datum_letzter_Labortest__c"]},AktuellerPreisUndVerfugbarkeit:{requiredFields:["Preis_pro_Tonne__c","Tonnen__c"],hiddenInCreate:["Id","CreatedDate","LastModifiedDate","OwnerId"]},User:{requiredFields:["firstName","lastName"],hiddenInCreate:["id","name","createdAt","updatedAt","emailVerified"]},TravelExpense:{requiredFields:["title","startDate","endDate"],hiddenInCreate:["id","totalAmount","reimbursementStatus","submittedAt","approvedAt","createdAt","updatedAt"]},Reklamation:{requiredFields:["Status__c"],hiddenInCreate:[]},Prozessfeedback:{requiredFields:["Description__c"],hiddenInCreate:["Id","CreatedDate","LastModifiedDate","SystemModstamp","OwnerId","Status__c","X5_Why__c","Core_Reason__c","Zust_ndig_f_r_Ursachenanalyse__c","Ursachenanalyse_durchgef_hrt__c","Gleiche_Ursache_wie__c","Gleiche_L_sung_wie__c","Evaluation_of_Impact_by_Admin__c","Evaluation_of_Effort_by_Admin__c","Implementation_Priority_Set__c","Implementation_Type__c","Implementation_Deadline_Set_by_Admin__c","Dscription_of_Implementation__c","Ready_for_Implementation__c","Implementation_Success_Date__c","Further_Measures__c","Further_Measures_Expected_by__c","Further_Measures_Deadline__c","Further_Measures_Success_Date__c","Further_Measures_Success_Category__c"]}};function o(e){return r[e]}e.s(["f",0,o],393194);let i={Order:"Order",Auftrag__c:"Order",MaterialProposal:"Material_Proposal__c",Invoice:"Abrechnung__c",SampleSending:"Sample_Sending__c",Requirement:"Bedarfe__c",Project:"Projekt__c",Product:"Product2"},n={Material_Proposal__c:{apiName:"Material_Proposal__c",sourceEntityType:t.f.MaterialProposal,entityPath:"material-proposals",duplicate:{excludeFields:["Status__c"]},targets:[{id:"contract",targetEntityType:t.f.Contract,label:"Vertrag anlegen",fieldMap:[{to:"Material_Proposal__c",from:"Id"},{to:"AccountId",from:"Account__c"},{to:"Produkt__c",from:"Product__c"},{to:"Projektzuordnung__c",from:"Projekt__c"}]},{id:"order",targetEntityType:t.f.Order,label:"Auftrag anlegen",fieldMap:[{to:"Material_Proposal__c",from:"Id"},{to:"AccountId",from:"Account__c"},{to:"Lieferant__c",from:"Supplier__c"},{to:"Zust_ndiger_Kontakt_Lieferant__c",from:"Supplier_Contact__c"},{to:"Produktionsstandort__c",from:"Loading_Location__c"},{to:"Produktion_Delivery__c",from:"Delivery_Location__c"},{to:"Transporteur_NEU__c",from:"Carrier__c"},{to:"Transporteur_Ansprechpartner_NEU__c",from:"Carrier_Contact__c"},{to:"Produkt__c",from:"Product__c"},{to:"Incoterm__c",from:"Delivery_Terms_Offer__c"},{to:"Projekt__c",from:"Projekt__c"},{to:"CustomerAuthorizedById",from:"Account_Contact__c"}],relatedObjectsSeed:{relatedEntityType:t.f.OrderItem,fieldMap:[{to:"Product2Id",from:"Product__c"},{to:"_Product2Id_label",from:"Product__r.Name"},{to:"UnitPrice",from:"Sales_Price_per_ton__c"},{to:"Einkaufspreis_pro_t__c",from:"Purchasing_price_per_ton__c"},{to:"Quantity",from:"Tonnage_per_truck__c"}]}},{id:"ss-musterbestellung",targetEntityType:t.f.SampleSending,label:"Musterbestellung anlegen",fieldMap:[{to:"Typ__c",value:"Order"},{to:"Load_from__c",from:"Supplier__c"},{to:"Loading_Produktion__c",from:"Loading_Location__c"},{to:"Produkt__c",from:"Product__c"},{to:"Carrier__c",from:"Carrier__c"},{to:"Carrier_Contact__c",from:"Carrier_Contact__c"},{to:"Projekt__c",from:"Projekt__c"}],writeBack:{sourceField:"Sample_Order_from_Supplier__c"}},{id:"ss-musterversand",targetEntityType:t.f.SampleSending,label:"Musterversand anlegen",fieldMap:[{to:"Typ__c",value:"Sending"},{to:"Deliver_to__c",from:"Account__c"},{to:"Delivery_Produktion__c",from:"Delivery_Location__c"},{to:"Kontakt_Anlieferung__c",from:"Account_Contact__c"},{to:"Load_from__c",from:"Supplier__c"},{to:"Produkt__c",from:"Product__c"},{to:"Projekt__c",from:"Projekt__c"}],writeBack:{sourceField:"Sample_Sending_to_Account__c"}}]},Order:{apiName:"Order",sourceEntityType:t.f.Order,entityPath:"order",duplicate:{excludeFields:["Status","Truck_Nr__c","PoNumber","Wiegeschein_Kunde_t__c","Wiegeschein_Kunde_Nr__c","Wiegeschein_Lieferant_t__c","Wiegeschein_Lieferant_Nr__c","Document_Order_attached__c","Document_Order_Confirmation_attached__c","Document_Order_to_Supplier_attached__c","Document_Transport_Order_attached__c","Document_Pickup_Note_attached__c","Document_Delivery_Note_attached__c","Document_Weighing_Note_Supplier_attached__c","Document_Weighing_Note_Customer_attached__c"],batch:!0,createDefaults:{Status:"Draft"},relatedObjectsSeed:{relatedEntityType:t.f.OrderItem,fromRelationship:"OrderItems",copyFields:["Product2Id",{from:"Produktcode__c",to:"_Product2Id_label"},"Quantity","UnitPrice","Einkaufspreis_pro_t__c","Description"]}},targets:[{id:"invoice",targetEntityType:t.f.Invoice,label:"Abrechnung anlegen",fieldMap:[{to:"Auftrag__c",from:"Id"},{to:"Account__c",from:"AccountId"},{to:"Ust__c",from:"Ust__c"},{to:"Kostenstelle__c",from:"Kostenstelle__c"},{to:"Rechnungsbetrag__c",from:"TotalAmount"}]},{id:"reklamation",targetEntityType:t.f.Reklamation,label:"Reklamation anlegen",fieldMap:[{to:"Ausl_sender_Auftrag__c",from:"Id"},{to:"Account__c",from:"AccountId"},{to:"Kontakt__c",from:"CustomerAuthorizedById"}],writeBack:{sourceField:"Reklamation__c"}}]},Contract:{apiName:"Contract",sourceEntityType:t.f.Contract,entityPath:"contract",targets:[{id:"order",targetEntityType:t.f.Order,label:"Auftrag anlegen",fieldMap:[{to:"ContractId",from:"Id"},{to:"AccountId",from:"AccountId"},{to:"Produkt__c",from:"Produkt__c"},{to:"Material_Proposal__c",from:"Material_Proposal__c"},{to:"Projekt__c",from:"Projektzuordnung__c"}],warnUnless:{field:"Status",value:"Activated",message:"Der Vertrag ist noch nicht aktiviert — Salesforce lehnt den Auftrag bis zur Aktivierung ab."}}]},Abrechnung__c:{apiName:"Abrechnung__c",sourceEntityType:t.f.Invoice,entityPath:"invoice",duplicate:{excludeFields:["Status_der_Abrechnung__c","Belegnummer__c"],extraMappings:[{to:"Duplicate_Of__c",from:"Id"}]},targets:[]},Bedarfe__c:{apiName:"Bedarfe__c",sourceEntityType:t.f.Requirement,entityPath:"requirement",targets:[{id:"material-proposal",targetEntityType:t.f.MaterialProposal,label:"Material Proposal anlegen",fieldMap:[{to:"F_r_Bedarf__c",from:"Id"},{to:"Account__c",from:"Account__c"},{to:"Projekt__c",from:"Projekt__c"},{to:"Kundenvorgang__c",from:"Kundenvorgang__c"},{to:"Amount_monthly_t_offered__c",from:"Monatsbedarf_t__c"},{to:"Sales_Price_per_ton__c",from:"Zielpreis__c"}]}]},Case:{apiName:"Case",sourceEntityType:t.f.Case,entityPath:"case",targets:[{id:"account",targetEntityType:t.f.Account,label:"Account anlegen",fieldMap:[],writeBack:{sourceField:"AccountId"}},{id:"contact",targetEntityType:t.f.Contact,label:"Kontakt anlegen",fieldMap:[{to:"AccountId",from:"AccountId"}],writeBack:{sourceField:"ContactId"}},{id:"requirement",targetEntityType:t.f.Requirement,label:"Bedarf anlegen",fieldMap:[{to:"Account__c",from:"AccountId"},{to:"Kundenvorgang__c",from:"Id"}],writeBack:{sourceField:"Bedarfe__c"}},{id:"product",targetEntityType:t.f.Product,label:"Produkt anlegen",fieldMap:[{to:"Account__c",from:"AccountId"}],writeBack:{sourceField:"Produkt__c"}},{id:"onboarding",targetEntityType:t.f.Onboarding,label:"Onboarding anlegen",fieldMap:[{to:"Kundenvorgang__c",from:"Id"},{to:"Account__c",from:"AccountId"},{to:"Kontakt__c",from:"ContactId"}],writeBack:{sourceField:"Onboarding__c"}},{id:"contact-handover",targetEntityType:t.f.ContactHandover,label:"Kontaktübergabe anlegen",fieldMap:[{to:"Kundenvorgang__c",from:"Id"},{to:"Account_bergeben__c",from:"AccountId"},{to:"Kontakt_bergeben__c",from:"ContactId"}]},{id:"material-proposal",targetEntityType:t.f.MaterialProposal,label:"Material Proposal anlegen",fieldMap:[{to:"Kundenvorgang__c",from:"Id"},{to:"Account__c",from:"AccountId"},{to:"Account_Contact__c",from:"ContactId"},{to:"F_r_Bedarf__c",from:"Bedarfe__c"},{to:"Product__c",from:"Produkt__c"}]}]},Projekt__c:{apiName:"Projekt__c",sourceEntityType:t.f.Project,entityPath:"project",targets:[{id:"contract",targetEntityType:t.f.Contract,label:"Vertrag anlegen",fieldMap:[{to:"Projektzuordnung__c",from:"Id"},{to:"AccountId",from:"Hauptkunde__c"}]},{id:"material-proposal",targetEntityType:t.f.MaterialProposal,label:"Material Proposal anlegen",fieldMap:[{to:"Projekt__c",from:"Id"},{to:"Account__c",from:"Hauptkunde__c"},{to:"Supplier__c",from:"Hauptlieferant__c"},{to:"Product__c",from:"Produkt__c"},{to:"F_r_Bedarf__c",from:"Bedarfe__c"}]},{id:"sample-sending",targetEntityType:t.f.SampleSending,label:"Sample Sending anlegen",fieldMap:[{to:"Projekt__c",from:"Id"},{to:"Produkt__c",from:"Produkt__c"},{to:"Loading_Produktion__c",from:"Loading_Site__c"}]}]},Product2:{apiName:"Product2",sourceEntityType:t.f.Product,entityPath:"product",targets:[{id:"material-proposal",targetEntityType:t.f.MaterialProposal,label:"Material Proposal anlegen",fieldMap:[{to:"Product__c",from:"Id"},{to:"Supplier__c",from:"Account__c"},{to:"Loading_Location__c",from:"Produktionsstandort__c"}]},{id:"material-analysis",targetEntityType:t.f.MaterialAnalysis,label:"Materialanalyse anlegen",fieldMap:[{to:"Material_ID__c",from:"Id"}]}]},Account:{apiName:"Account",sourceEntityType:t.f.Account,entityPath:"account",targets:[{id:"supplier-audit",targetEntityType:t.f.SupplierAudit,label:"Supplier Audit anlegen",fieldMap:[{to:"Account__c",from:"Id"}]},{id:"company-certificate",targetEntityType:t.f.CompanyCertificate,label:"Unternehmenszertifikat anlegen",fieldMap:[{to:"Account__c",from:"Id"}]},{id:"contract",targetEntityType:t.f.Contract,label:"Vertrag anlegen",fieldMap:[{to:"AccountId",from:"Id"}]},{id:"production-site",targetEntityType:t.f.ProductionSite,label:"Produktionsstandort anlegen",fieldMap:[{to:"Account__c",from:"Id"}]},{id:"lohn",targetEntityType:t.f.Lohn,label:"Lohn anlegen",fieldMap:[{to:"Account__c",from:"Id"}]},{id:"product",targetEntityType:t.f.Product,label:"Produkt anlegen",fieldMap:[{to:"Account__c",from:"Id"}]},{id:"requirement",targetEntityType:t.f.Requirement,label:"Bedarf anlegen",fieldMap:[{to:"Account__c",from:"Id"}]}]}};function l(e){return null==e||""===e}function c(e,t){if(!e)return{};let a=[];if(e.fieldMap)a=[d(e.fieldMap,t)];else if(e.fromRelationship){let r=t[e.fromRelationship];a=(Array.isArray(r)?r:r?.records??[]).map(t=>{let a={};for(let r of e.copyFields??[]){let e="string"==typeof r?r:r.from,o="string"==typeof r?r:r.to;l(t[e])||(a[o]=t[e])}return a})}return 0===(a=a.filter(e=>Object.keys(e).length>0)).length?{}:{_relatedObjects:{[e.relatedEntityType]:a}}}function d(e,t){let a={};for(let r of e){let e=void 0!==r.from?r.from.split(".").reduce((e,t)=>{if(e&&"object"==typeof e)return e[t]},t):r.value;l(e)||(a[r.to]=e)}return a}e.s(["i",0,n,"J",0,function(e,t,r={}){if(!e.duplicate)return{};let i=new Set(o(e.sourceEntityType)?.hiddenInCreate??[]),n=new Set([...e.duplicate.excludeFields,...r.batch?[]:e.duplicate.formOnlyExcludeFields??[]]),_={};for(let r of(0,a.h)(e.apiName)){if(i.has(r)||n.has(r))continue;let e=t[r];l(e)||(_[r]=e)}return{..._,...e.duplicate.createDefaults??{},...d(e.duplicate.extraMappings??[],t),...c(e.duplicate.relatedObjectsSeed,t)}},"_",0,function(e,t){return{...d(e.fieldMap,t),...c(e.relatedObjectsSeed,t)}},"h",0,function(e,t){return{...d(e.fieldMap,t),...c(e.relatedObjectsSeed,t)}},"K",0,function(e){return n[i[e]??e]},"V",0,function(e){let t=[],a=new Set;for(let r of Object.values(n))for(let o of r.targets){if(o.targetEntityType!==e)continue;let i=o.fieldMap.find(e=>"Id"===e.from);if(!i)continue;let n=o.fieldMap.filter(e=>e!==i);(0!==n.length||o.relatedObjectsSeed)&&(a.has(i.to)||(a.add(i.to),t.push({lookupField:i.to,entityPath:r.entityPath,fieldMap:n,relatedObjectsSeed:o.relatedObjectsSeed})))}return t}],844771)},354477,e=>{var t=e.i(862078);let a=new Set(["Id","OwnerId","CreatedById","CreatedDate","LastModifiedById","LastModifiedDate","SystemModstamp","IsDeleted"]),r=(()=>{let e={};for(let a of Object.values(t.K))a&&"string"==typeof a.entityType&&(e[a.entityType]=a);let a=e["Kontakt_Übergaben__c"];return a&&!e.Kontakt_bergaben__c&&(e.Kontakt_bergaben__c=a),e})();function o(e){return!!(a.has(e)||e.endsWith("__r")||e.includes("."))}function i(e,t){return!e.visibleForRoles||e.visibleForRoles.includes(t)}e.s(["Z",0,function(e){return r[e]},"h",0,function(e){let t=r[e];if(!t)return console.warn(`[getCreateableFields] No EntityFieldConfig found for entityType "${e}". Returning empty list.`),[];let a=new Set;for(let e of t.sections??[])for(let t of e.fields??[]){if(t?.readOnly)continue;let e=t?.apiName;"string"!=typeof e||o(e)||a.add(e)}return Array.from(a)},"a",0,function(e,t){let a=r[e];if(!a)return console.warn(`[getUpdatableFields] No EntityFieldConfig found for entityType "${e}". Returning empty allowlist; caller should fall back to existing behavior.`),[];let n=new Set;for(let e of a.sections??[])if(!t||i(e,t))for(let a of e.fields??[]){if(t&&!i(a,t)||a?.readOnly||a?.readOnlyOnEdit)continue;let e=a?.apiName;"string"!=typeof e||"OwnerId"!==e&&o(e)||n.add(e)}return Array.from(n)}])}])})();