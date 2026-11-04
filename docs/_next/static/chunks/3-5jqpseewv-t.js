(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,[125166,155423,e=>{e.s(["j",()=>x,"F",()=>b],125166),e.s(["x",()=>m,"W",()=>h,"F",()=>p],155423);var t,r=e.i(843476),o=e.i(997053),a=e.i(136717),i=e.i(10059),n=e.i(547905);let s=(e,t)=>{let r=(0,a.p)(e);return o.m`
    background: ${e};
    border: 0.0625rem solid ${e};
    color: ${r?"white":"black"};
    a {
      color: ${r?"white":"inherit"} !important;
      text-decoration: underline;
      &:hover {
        opacity: 0.8;
      }
    }
    ${h} {
      background: ${t??e};
      border: 0.4375rem solid ${t??"white"};
      svg {
        path,
        circle,
        rect {
          stroke: ${r?"white":"black"};
        }
      }
    }
  `},l=e=>o.m`
    ${t=>s(t.theme.palette.default.white,e)}
  `,d=e=>{let{background:t,backgroundIcon:r}=e;if((0,a.J)(t))return o.m`
      background: ${t};
      border: 0.0625rem solid ${t};
      color: ${(0,a.p)(t)?"white":"black"};
      a {
        color: ${(0,a.p)(t)?"white":"black"};
      }
      ${h} {
        background: ${t};
        border: 0.4375rem solid white;
        svg {
          path,
          circle,
          rect {
            stroke: ${(0,a.p)(t)?"white":"black"};
          }
        }
      }
    `;switch(t){case b.BLACK:return o.m`
    ${e=>s(e.theme.palette.default.black,r)}
  `;case b.WHITE:return l(r);case b.GREYLIGHT:return o.m`
    ${e=>s(e.theme.palette.default.greyLight,r)}
  `;case b.GREY:return o.m`
    ${e=>s(e.theme.palette.default.grey,r)}
  `;case b.GREYDARK:return o.m`
    ${e=>s(e.theme.palette.default.greyDark,r)}
  `;case b.PRIMARY:return o.m`
    ${e=>s(e.theme.palette.default.primary,r)}
  `;case b.SECONDARY:return o.m`
    ${e=>s(e.theme.palette.default.secondary,r)}
  `;case b.TERTIARY:return o.m`
    ${e=>s(e.theme.palette.default.tertiary,r)}
  `;case b.ERROR:return o.m`
    ${e=>s(e.theme.palette.default.error,r)}
    box-shadow: none;
  `;case b.WARNING:return o.m`
    ${e=>s(e.theme.palette.default.warning,r)}
    box-shadow: none;
  `;case b.SUCCESS:return o.m`
    ${e=>s(e.theme.palette.default.success,r)}
    box-shadow: none;
  `;case b.TRANSPARENT:return o.m`
    background: transparent;
    border: none;
    color: ${e=>e.theme.palette.default.black};
    box-shadow: none;
    ${h} {
      background: ${e=>e.theme.palette.default.primary};
      border: 0.4375rem solid ${e=>e.theme.palette.default.white};
      svg {
        path,
        circle,
        rect {
          stroke: ${e=>(0,a.p)(e.theme.palette.default.primary)?"white":"black"};
        }
      }
    }
  `;default:return l(r)}},c="3rem",u="2rem",p=o.U.div.withConfig({displayName:"Box.styles__Root",componentId:"sc-d40c8c4-0"})`
  display: flex;
  flex-direction: column;
  width: calc(100% - 4rem);
  padding: ${c} ${u} ${c} ${u};
  max-width: 100%;
  margin: ${e=>e.$icon?e.theme.margin.default:0} 0
    ${e=>e.theme.margin.large} 0;
  border-radius: ${"8px"};
  transition: box-shadow 0.15s ease-in-out;
  box-shadow: 0rem 0rem 1.875rem 0rem rgba(151, 151, 151, 0.15);
  ${({$edges:e})=>(0,n.n)(e)}
  ${e=>d({background:e.$background,backgroundIcon:e.backgroundIcon})}

  /* Link styles based on background */
  a {
    color: ${e=>{let t=e.$background;if((0,a.J)(t))return(0,a.p)(t)?"white":"inherit";switch(t){case b.PRIMARY:case b.SECONDARY:case b.BLACK:case b.GREYDARK:return"white";default:return"inherit"}}};
    text-decoration: underline;
    &:hover {
      opacity: 0.8;
    }
  }

  ${i.f} {
    @media (min-width: ${e=>e.theme.device.tablet}) {
      width: 100%;
      height: auto;
      max-width: 100%;
    }
  }
  &::before {
    position: absolute;
    top: 0;
    left: 0;
    content: '';
    height: 100%;
    width: 100%;
    border-radius: 8px;
    background: ${e=>e.$background};
    opacity: 0.85;
    display: ${e=>e.backgroundImage&&e.backgroundTransparency?"block":"none"};
    z-index: 10;
  }
`,h=o.U.div.withConfig({displayName:"Box.styles__Icon",componentId:"sc-d40c8c4-1"})`
  position: absolute;
  top: -2rem;
  left: 1.5rem;
  z-index: 30;
  ${e=>d({background:e.$background,backgroundIcon:e.backgroundIcon})}
  background: none;
  border-radius: 8px;
  padding: 0.3825rem 1.125rem;
  border: 0.1875rem solid white;
  display: flex;
  justify-content: center;
  align-items: center;
`,m=o.U.div.withConfig({displayName:"Box.styles__Children",componentId:"sc-d40c8c4-2"})`
  position: relative;
  z-index: 20;
  height: 100%;
  display: flex;
  flex-direction: column;
`;e.i(710788);var g=e.i(363451);e.i(311046);var f=e.i(499881),b=((t={}).PRIMARY="primary",t.SECONDARY="secondary",t.TERTIARY="tertiary",t.WHITE="white",t.BLACK="black",t.GREYLIGHT="greyLight",t.GREY="grey",t.GREYDARK="greyDark",t.ERROR="error",t.WARNING="warning",t.SUCCESS="success",t.TRANSPARENT="transparent",t);let x=e=>{let{children:t,dataTestId:o,background:a,backgroundIcon:i,icon:n,backgroundImage:s,backgroundImageOffset:l,backgroundTransparency:d,onClick:c,edges:u}=e,b=(0,f.N)(u);return(0,r.jsxs)(p,{className:e.className,"data-testid":o||"box-root",$edges:b?u:void 0,$background:a||"white",backgroundIcon:i,$icon:n,backgroundImage:s,backgroundImageOffset:l,backgroundTransparency:d,onClick:()=>void(c&&c()),style:{backgroundImage:e.backgroundImage?`url(${e.backgroundImage})`:void 0,backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center center"},children:[b&&u&&(0,r.jsx)(g.f,{edges:u,dataTestId:`${o??"box-root"}-edge`}),n&&(0,r.jsx)(h,{$background:a||"white",children:n}),(0,r.jsx)(m,{children:t})]})}},197152,e=>{var t=e.i(843476),r=e.i(997053);let o=r.U.svg.withConfig({displayName:"IconShare.styles__Root",componentId:"sc-daf5445-0"})``;e.s(["f",0,e=>(0,t.jsxs)(o,{className:e.className,"data-testid":"icon-share-root",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,t.jsx)("line",{x1:"7.6",y1:"10.5",x2:"16.4",y2:"5.5",stroke:"currentColor",strokeWidth:"2"}),(0,t.jsx)("line",{x1:"7.6",y1:"13.5",x2:"16.4",y2:"18.5",stroke:"currentColor",strokeWidth:"2"}),(0,t.jsx)("circle",{cx:"5",cy:"12",r:"3",stroke:"currentColor",strokeWidth:"2",fill:"none"}),(0,t.jsx)("circle",{cx:"19",cy:"4",r:"3",stroke:"currentColor",strokeWidth:"2",fill:"none"}),(0,t.jsx)("circle",{cx:"19",cy:"20",r:"3",stroke:"currentColor",strokeWidth:"2",fill:"none"})]})],197152)},933027,e=>{let t=e.i(197152).f;e.s(["f",0,t])},48574,e=>{var t=e.i(843476),r=e.i(997053);let o=r.U.svg.withConfig({displayName:"IconVolume.styles__Root",componentId:"sc-e7c1eb72-0"})``;e.s(["f",0,e=>(0,t.jsxs)(o,{className:e.className,"data-testid":"icon-volume-root",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,t.jsx)("title",{children:"volume-up"}),(0,t.jsxs)("g",{strokeLinecap:"square",strokeLinejoin:"miter",strokeMiterlimit:"10",children:[(0,t.jsx)("path",{d:"M14 21L8 16H4C2.89543 16 2 15.1046 2 14V10C2 8.89543 2.89543 8 4 8H8L14 3V21Z",stroke:"currentColor",strokeWidth:"2",fill:"none"}),(0,t.jsx)("path",{d:"M17.5355 8.46448C18.4403 9.3693 19 10.6193 19 12C19 13.3807 18.4403 14.6307 17.5355 15.5355",stroke:"currentColor",strokeWidth:"2",fill:"none"}),(0,t.jsx)("path",{d:"M20.364 5.63605C21.9926 7.26473 23 9.51473 23 12C23 14.4853 21.9926 16.7353 20.364 18.364",stroke:"currentColor",strokeWidth:"2",fill:"none"})]})]})],48574)},763132,e=>{var t=e.i(843476),r=e.i(271645),o=e.i(997053),a=e.i(125166),i=e.i(547905),n=e.i(474704),s=e.i(499881);let l=(e,t)=>{let r=e?.[t];return r?.placement==="inner"?s.r[r.depth??"section"]:0},d=o.U.section.withConfig({displayName:"Video.styles__VideoSection",componentId:"sc-574ba49a-0"})`
  width: 100%;
  /*
   * #2226: Sektionspolster aus dem Theme (#2253: Telefon 64, Desktop 96 px; vorher
   * 140 px plus 50 px Abstand nach unten); an einer Seite mit Wabenzone
   * Zone + Polster (#2224; #2253: das ganze statt des halben).
   */
  padding-inline: 0;
  ${({$edges:e})=>(0,n.j)("top",l(e,"top"))}
  ${({$edges:e})=>(0,n.j)("bottom",l(e,"bottom"))}
  background: ${({$background:e,theme:t})=>((e,t)=>{if(!e)return"transparent";switch(e){case a.F.PRIMARY:return t.palette.default.primary;case a.F.SECONDARY:return t.palette.default.secondary;case a.F.TERTIARY:return t.palette.default.tertiary;case a.F.WHITE:return t.palette.default.white;case a.F.BLACK:return t.palette.default.black;case a.F.GREY:return t.palette.default.grey;case a.F.GREYLIGHT:return t.palette.default.greyLight;case a.F.GREYDARK:return t.palette.default.greyDark;case a.F.TRANSPARENT:default:return"transparent"}})(e,t)};
  /* Wabenrand (#1188): das Band ist Host */
  ${({$edges:e})=>(0,i.n)(e)}
`,c=o.U.div.withConfig({displayName:"Video.styles__VideoContainer",componentId:"sc-574ba49a-1"})`
  width: 100%;
  position: relative;
  cursor: pointer;
  border-radius: 8px;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 120px;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.6) 0%, transparent 100%);
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 5;
  }

  &:hover::after {
    opacity: 1;
  }
`,u=o.U.video.withConfig({displayName:"Video.styles__StyledVideo",componentId:"sc-574ba49a-2"})`
  width: 100%;
  height: auto;
  display: block;
`,p=o.U.button.withConfig({displayName:"Video.styles__PlayPauseOverlay",componentId:"sc-574ba49a-3"})`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: none;
  background: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition:
    opacity 0.3s ease,
    transform 0.2s ease;
  opacity: ${({$isPlaying:e})=>+!e};
  z-index: 10;

  ${c}:hover & {
    opacity: 1;
  }

  &:hover {
    transform: translate(-50%, -50%) scale(1.1);
  }

  svg {
    width: 40px;
    height: 40px;

    path {
      stroke: ${({theme:e})=>e.palette.default.white};
    }
  }
`,h=o.U.div.withConfig({displayName:"Video.styles__ControlsWrapper",componentId:"sc-574ba49a-4"})`
  position: absolute;
  bottom: 43px;
  right: 16px;
  display: flex;
  align-items: flex-end;
  gap: 8px;
  z-index: 10;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${c}:hover & {
    opacity: 1;
  }
`,m=o.U.button.withConfig({displayName:"Video.styles__VideoControlButton",componentId:"sc-574ba49a-5"})`
  width: 40px;
  height: 40px;
  border-radius: 4px;
  border: none;
  background: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }

  svg {
    width: 24px;
    height: 24px;
    color: ${({theme:e})=>e.palette.default.white};

    path,
    rect,
    line,
    circle {
      stroke: ${({theme:e})=>e.palette.default.white};
    }
  }
`,g=o.U.div.withConfig({displayName:"Video.styles__ProgressBarContainer",componentId:"sc-574ba49a-6"})`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 24px;
  padding: 3px 12px 13px;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 10;

  ${c}:hover & {
    opacity: 1;
  }
`,f=o.U.div.withConfig({displayName:"Video.styles__ProgressBarTrack",componentId:"sc-574ba49a-7"})`
  position: relative;
  width: 100%;
  height: 4px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 2px;
`,b=o.U.div.withConfig({displayName:"Video.styles__ProgressBarFill",componentId:"sc-574ba49a-8"})`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: ${({$progress:e})=>e}%;
  background: ${({theme:e})=>e.palette.default.white};
  border-radius: 2px;
  transition: width 0.1s linear;
`,x=o.U.div.withConfig({displayName:"Video.styles__ProgressBarHandle",componentId:"sc-574ba49a-9"})`
  position: absolute;
  top: 50%;
  left: ${({$progress:e})=>e}%;
  transform: translate(-50%, -50%);
  width: 12px;
  height: 12px;
  background: ${({theme:e})=>e.palette.default.white};
  border-radius: 50%;
  cursor: grab;
  transition: transform 0.2s ease;

  &:active {
    cursor: grabbing;
    transform: translate(-50%, -50%) scale(1.2);
  }
`,k=o.U.div.withConfig({displayName:"Video.styles__VolumeControlWrapper",componentId:"sc-574ba49a-10"})`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover > div:first-child {
    opacity: 1;
    max-height: 150px;
    padding-bottom: 8px;
  }
`,y=o.U.div.withConfig({displayName:"Video.styles__VolumeBarContainer",componentId:"sc-574ba49a-11"})`
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  max-height: 0;
  overflow: hidden;
  padding: 0 14px;
  cursor: pointer;
  opacity: 0;
  transition:
    opacity 0.3s ease,
    max-height 0.3s ease,
    padding 0.3s ease;
  display: flex;
  justify-content: center;
`,w=o.U.div.withConfig({displayName:"Video.styles__VolumeBarTrack",componentId:"sc-574ba49a-12"})`
  position: relative;
  width: 4px;
  height: 120px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 2px;
`,v=o.U.div.withConfig({displayName:"Video.styles__VolumeBarFill",componentId:"sc-574ba49a-13"})`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: ${({$volume:e})=>e}%;
  background: ${({theme:e})=>e.palette.default.white};
  border-radius: 2px;
  transition: height 0.1s linear;
`,C=o.U.div.withConfig({displayName:"Video.styles__VolumeBarHandle",componentId:"sc-574ba49a-14"})`
  position: absolute;
  left: 50%;
  bottom: ${({$volume:e})=>e}%;
  transform: translate(-50%, 50%);
  width: 12px;
  height: 12px;
  background: ${({theme:e})=>e.palette.default.white};
  border-radius: 50%;
  cursor: grab;
  transition: transform 0.2s ease;

  &:active {
    cursor: grabbing;
    transform: translate(-50%, 50%) scale(1.2);
  }
`;e.i(239178);var $=e.i(593736);e.i(396971);var j=e.i(227319),R=a,I=e.i(650868),N=e.i(224906);let _=o.U.svg.withConfig({displayName:"IconFullscreen.styles__Root",componentId:"sc-397f37a3-0"})``,E=e=>(0,t.jsxs)(_,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",className:e.className,"data-testid":"icon-fullscreen-root",children:[(0,t.jsx)("rect",{x:"6",y:"8",width:"12",height:"8",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"square",strokeLinejoin:"miter"}),(0,t.jsx)("path",{d:"m2,9v-3c0-1.105.895-2,2-2h3",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"square",strokeLinejoin:"miter"}),(0,t.jsx)("path",{d:"m17,4h3c1.105,0,2,.895,2,2v3",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"square",strokeLinejoin:"miter"}),(0,t.jsx)("path",{d:"m22,15v3c0,1.105-.895,2-2,2h-3",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"square",strokeLinejoin:"miter"}),(0,t.jsx)("path",{d:"m7,20h-3c-1.105,0-2-.895-2-2v-3",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"square",strokeLinejoin:"miter"})]});var L=e.i(933027),T=e.i(48574);let V=o.U.svg.withConfig({displayName:"IconMute.styles__Root",componentId:"sc-8a27c83-0"})``,A=e=>(0,t.jsxs)(V,{className:e.className,"data-testid":"icon-mute-root",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,t.jsx)("title",{children:"volume-mute"}),(0,t.jsxs)("g",{strokeLinecap:"square",strokeLinejoin:"miter",strokeMiterlimit:"10",children:[(0,t.jsx)("path",{d:"M14 21L8 16H4C2.89543 16 2 15.1046 2 14V10C2 8.89543 2.89543 8 4 8H8L14 3V21Z",stroke:"currentColor",strokeWidth:"2",fill:"none"}),(0,t.jsx)("path",{d:"M18 10L22 14",stroke:"currentColor",strokeWidth:"2",fill:"none"}),(0,t.jsx)("path",{d:"M22 10L18 14",stroke:"currentColor",strokeWidth:"2",fill:"none"})]})]});e.i(821194);var U=e.i(99222);let W=({videoRef:e,containerRef:o,initialMuted:a=!0})=>{let{tr:i}=(0,U.f)(),n=(0,r.useRef)(null),[s,l]=(0,r.useState)(+!a),[d,c]=(0,r.useState)(a),[u,p]=(0,r.useState)(!1),g=(0,r.useCallback)(async()=>{let e={title:"Plastship Video",url:window.location.href};navigator.share?await navigator.share(e):await navigator.clipboard.writeText(window.location.href)},[]),f=(0,r.useCallback)(()=>{o.current&&(document.fullscreenElement?document.exitFullscreen():o.current.requestFullscreen())},[o]),b=(0,r.useCallback)(()=>{e.current&&(d?(e.current.muted=!1,e.current.volume=s||1,c(!1),0===s&&l(1)):(e.current.muted=!0,c(!0)))},[d,s,e]),x=(0,r.useCallback)(t=>{if(!e.current||!n.current)return;let r=n.current.getBoundingClientRect(),o=Math.max(0,Math.min(1,(r.bottom-t)/r.height));e.current.volume=o,e.current.muted=0===o,l(o),c(0===o)},[e]),$=(0,r.useCallback)(e=>{x(e.clientY)},[x]),j=(0,r.useCallback)(e=>{e.preventDefault(),e.stopPropagation(),p(!0),x(e.clientY)},[x]);return(0,r.useEffect)(()=>{if(!u)return;let e=e=>{x(e.clientY)},t=()=>{p(!1)};return document.addEventListener("mousemove",e),document.addEventListener("mouseup",t),()=>{document.removeEventListener("mousemove",e),document.removeEventListener("mouseup",t)}},[u,x]),(0,t.jsxs)(h,{children:[(0,t.jsx)(m,{onClick:g,"aria-label":i("common.video.share",{defaultValue:"Share video"}),children:(0,t.jsx)(L.f,{})}),(0,t.jsxs)(k,{children:[(0,t.jsx)(y,{ref:n,onClick:$,children:(0,t.jsxs)(w,{children:[(0,t.jsx)(v,{$volume:d?0:100*s}),(0,t.jsx)(C,{$volume:d?0:100*s,onMouseDown:j})]})}),(0,t.jsx)(m,{onClick:b,"aria-label":d?i("common.video.unmute",{defaultValue:"Unmute"}):i("common.video.mute",{defaultValue:"Mute"}),children:d?(0,t.jsx)(A,{}):(0,t.jsx)(T.f,{})})]}),(0,t.jsx)(m,{onClick:f,"aria-label":i("common.video.fullscreen",{defaultValue:"Toggle fullscreen"}),children:(0,t.jsx)(E,{})})]})};e.i(710788);var S=e.i(363451);e.i(311046);let B=({src:e,poster:o,autoPlay:a=!1,muted:i=!0,loop:l=!1,controls:h=!1,playsInline:m=!0,dataTestId:k="video",dataAttributes:y,background:w=R.F.WHITE,className:v,edges:C})=>{let{tr:_}=(0,U.f)(),E=(0,r.useRef)(null),L=(0,r.useRef)(null),T=(0,r.useRef)(null),[V,A]=(0,r.useState)(a),[B,P]=(0,r.useState)(0),[Y,M]=(0,r.useState)(!1),F=(0,r.useCallback)(()=>{E.current&&(V?(E.current.pause(),A(!1)):(E.current.play(),A(!0)))},[V]),G=(0,r.useCallback)(()=>A(!0),[]),D=(0,r.useCallback)(()=>A(!1),[]),H=(0,r.useCallback)(()=>{if(!E.current||Y)return;let{currentTime:e,duration:t}=E.current;t>0&&P(e/t*100)},[Y]),z=(0,r.useCallback)(e=>{if(!E.current||!T.current)return;let t=T.current.getBoundingClientRect(),r=Math.max(0,Math.min(1,(e-t.left)/t.width));Number.isFinite(E.current.duration)&&(E.current.currentTime=r*E.current.duration,P(100*r))},[]),K=(0,r.useCallback)(e=>{z(e.clientX)},[z]),O=(0,r.useCallback)(e=>{e.preventDefault(),M(!0),z(e.clientX)},[z]);return(0,r.useEffect)(()=>{if(!Y)return;let e=e=>{z(e.clientX)},t=()=>{M(!1)};return document.addEventListener("mousemove",e),document.addEventListener("mouseup",t),()=>{document.removeEventListener("mousemove",e),document.removeEventListener("mouseup",t)}},[Y,z]),(0,t.jsxs)(d,{className:v,...y,"data-testid":k,$background:w,$edges:(0,s.N)(C)?C:void 0,children:[C&&(0,s.N)(C)&&(0,t.jsx)(S.f,{edges:C,dataTestId:`${k}-edge`}),(0,t.jsx)(I.f,{children:(0,t.jsx)(N.f,{...(0,n.i)(n.M.text),children:(0,t.jsxs)(c,{ref:L,children:[(0,t.jsx)(u,{ref:E,autoPlay:a,muted:i,loop:l,controls:h,playsInline:m,poster:o,onPlay:G,onPause:D,onTimeUpdate:H,children:(0,t.jsx)("source",{src:e,type:"video/mp4"})}),(0,t.jsx)(p,{$isPlaying:V,onClick:F,"aria-label":V?_("common.video.pause",{defaultValue:"Pause video"}):_("common.video.play",{defaultValue:"Play video"}),"data-testid":`${k}-play-toggle`,"data-playing":V?"true":"false",children:V?(0,t.jsx)(j.f,{}):(0,t.jsx)($.f,{})}),(0,t.jsx)(W,{videoRef:E,containerRef:L,initialMuted:i}),(0,t.jsx)(g,{ref:T,onClick:K,children:(0,t.jsxs)(f,{children:[(0,t.jsx)(b,{$progress:B}),(0,t.jsx)(x,{$progress:B,onMouseDown:O})]})})]})})})]})},P={primary:a.F.PRIMARY,white:a.F.WHITE,greyLight:a.F.GREYLIGHT};e.s(["VideoBlock",0,({block:e,dataTestId:r,dataAttributes:o,edges:a})=>{let{src:i,poster:n,background:s="primary"}=e.props;return(0,t.jsx)(B,{src:i,poster:n,background:P[s],dataTestId:r,dataAttributes:o,edges:a})}],763132)}],367999,function(e){e.n(e.i(763132))}]);