(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,278393,e=>{"use strict";var t=e.i(843476),a=e.i(271645),i=e.i(770703),r=e.i(618566),n=e.i(997053),l=e.i(696984),o=e.i(885895),s=e.i(508650),d=e.i(125166),c=e.i(650868),u=e.i(224906);e.i(710788);var m=e.i(363451);e.i(239178);var f=e.i(593736);e.i(396971);var p=e.i(227319),h=e.i(380153);e.i(311046);var g=e.i(499881),b=e.i(457518),y=e.i(941408),x=e.i(118410),w=e.i(345712),v=e.i(635307);let k=w.G.palette,$=v.f.palette,C={primary:x.h.PRIMARY,secondary:x.h.SECONDARY,line:x.h.PRIMARY,background:x.h.WHITE,muted:k.site.border,text:k.text.secondary},M={primary:$.default.primary,secondary:$.default.secondary,line:$.default.primary,background:$.default.white,muted:$.default.grey,text:k.border.default},j={primary:x.h.WHITE,secondary:x.h.SECONDARY,line:x.h.WHITE,background:x.h.PRIMARY,muted:$.default.primary,text:x.h.WHITE};var R=e.i(371561);let I="/images/cms/imagefilm/poster-2360-b6bc60.webp",E="/images/cms/imagefilm/poster-1280-f03b24.webp 1280w, /images/cms/imagefilm/poster-2360-b6bc60.webp 2360w",z=2360,S=1328,A="/images/cms/imagefilm/poster-portrait-640-40f465.webp 640w, /images/cms/imagefilm/poster-portrait-1098-a46a99.webp 1098w";var _=a,L=e.i(587076),V=e.i(394497);let N=["wheel","pointerdown","touchstart","keydown"],P=n.U.div.withConfig({displayName:"SceneCanvas.styles__Root",componentId:"sc-b7d05beb-0"})`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: ${({$bleed:e})=>e?"visible":"hidden"};
`,T=n.U.div.withConfig({displayName:"SceneCanvas.styles__Layer",componentId:"sc-b7d05beb-1"})`
  position: absolute;
  inset: 0;
`,F=(0,n.U)(T).withConfig({displayName:"SceneCanvas.styles__CanvasLayer",componentId:"sc-b7d05beb-2"})`
  ${({$bleed:e})=>e?"inset: calc(-1 * var(--scene-bleed-y, 0px)) calc(-1 * var(--scene-bleed-x, 0px));":""}
`;class W extends _.default.Component{state={failed:!1};static getDerivedStateFromError(){return{failed:!0}}componentDidCatch(e){this.props.onError()}render(){return this.state.failed?null:this.props.children}}let U=(0,i.default)(()=>e.A(887280).then(e=>e.Canvas),{loadableGenerated:{modules:[272700]},ssr:!1}),B=(0,i.default)(()=>e.A(626580),{loadableGenerated:{modules:[770329]},ssr:!1}),H={antialias:!0,alpha:!0,powerPreference:"default"},D=[1,1.5],G=_.default.memo(({children:e,fallback:i,placeholder:r,holdPlaceholder:n=!1,bleed:l=!1,deferPreload:o=!1,still:s=!1,dataTestId:d,className:c,camera:u,shadows:m=!0,frameloop:f="always",dpr:p=D,flat:h=!0,onStateChange:g,onVisibilityChange:b})=>{let y=(0,_.useRef)(null),x=(0,L.f)(),w=(0,V.f)(y),v=(0,V.f)(y,0,"400px"),k=((e=!0)=>{let[t,i]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{if(!e)return;let t=()=>i(!0),a={once:!0,passive:!0,capture:!0};for(let e of N)window.addEventListener(e,t,a);return window.addEventListener("scroll",t,{once:!0,passive:!0}),()=>{for(let e of N)window.removeEventListener(e,t,a);window.removeEventListener("scroll",t)}},[e]),t||!e})(o),[$,C]=(0,_.useState)(!1);(0,_.useEffect)(()=>{if($)return;if(v&&k||w&&!o)return void C(!0);if(!w)return;let e=setTimeout(()=>C(!0),600);return()=>clearTimeout(e)},[$,v,k,w,o]);let[M,j]=(0,_.useState)(null),[R,I]=(0,_.useState)("loading");(0,_.useEffect)(()=>{j((()=>{if("u"<typeof document)return!1;try{let e=document.createElement("canvas").getContext("webgl2");return e?.getExtension("WEBGL_lose_context")?.loseContext(),!!e}catch{return!1}})())},[]);let E="lost"===R?"lost":!1===M||x||s?"fallback":R,z=$&&!0===M&&!x&&!s&&"lost"!==R;(0,_.useEffect)(()=>{g?.(E)},[E,g]),(0,_.useEffect)(()=>{b?.(w)},[w,b]);let S=(0,_.useRef)(null);(0,_.useEffect)(()=>{z||(S.current=null)},[z]);let A=(0,_.useCallback)(({gl:e})=>{let t=e.domElement;S.current=t,I("ready"),t.addEventListener("webglcontextlost",()=>{S.current===t&&I("lost")},{once:!0})},[]),G=(0,_.useCallback)(()=>I("lost"),[]);return(0,t.jsxs)(P,{ref:y,className:c,$bleed:l,"data-testid":d,"data-scene":E,"data-visible":w?"true":"false","data-armed":$?"true":"false",children:[z&&(0,t.jsx)(F,{$bleed:l,"data-testid":`${d}-canvas`,"data-bleed":l?"true":"false",children:(0,t.jsx)(W,{onError:G,children:(0,t.jsxs)(U,{camera:u,shadows:m,frameloop:w?f:"never",dpr:p,flat:h,gl:H,onCreated:A,children:[(0,t.jsx)(B,{max:Array.isArray(p)?p[1]:p}),e]})})}),("loading"===E||n&&"ready"===E)&&r&&(0,t.jsx)(T,{"data-testid":`${d}-placeholder`,children:r}),("fallback"===E||"lost"===E)&&(0,t.jsx)(T,{"data-testid":`${d}-fallback`,children:i})]})});var K=e.i(558932),Y=e.i(459380);let q=e=>{let t=e;for(let a of Y.C)e>=a.at&&(t+=1);return t},O=e=>{let t=0,a=0;for(let i of Y.C){let r=i.at+t;if(e<r-1e-6)break;if(e<r+1-1e-6)return i.at-1e-4;t+=1,a=i.at}return Math.max(a,e-t)},Z=q(K.l);var X=e.i(813304),J=e.i(964078),Q=e.i(990519),ee=e.i(160693),et=e.i(381569),ea=e.i(135841),ei=e.i(86811),er=e.i(775143);let en=e=>({from:"charge",at:t=>(0,ea.j)((er.e.find(t=>t.id===e)?.from??0)-1e-4,t)}),el={from:"focus",at:()=>X.j},eo={bm:en("bm"),b3:en("b3"),b2:en("b2"),b4:en("b4"),b6:{from:"focus",at:ei.H},b5:el,b7:el};var es=e.i(180509),ed=e.i(738278);let ec=[{id:"search",href:"/material-search/",labelKey:"imagefilm.endlink.search",defaultLabel:"Rezyklate finden"},{id:"monitored",href:"/monitored-material-system/",labelKey:"imagefilm.endlink.monitored",defaultLabel:"Monitored Materials"},{id:"laboratory",href:"/laboratory-services/",labelKey:"imagefilm.endlink.laboratory",defaultLabel:"Laborleistungen"},{id:"raas",href:"/end-to-end-supply/",labelKey:"imagefilm.endlink.raas",defaultLabel:"Recycling as a Service"},{id:"contact",href:`/contact-us/?${ed.J}=buy_recyclate`,labelKey:"imagefilm.endlink.contact",defaultLabel:"Kontakt aufnehmen"}];var eu=e.i(696986);let em=n.U.svg.withConfig({displayName:"IconMedal.styles__Root",componentId:"sc-8b555373-0"})``,ef=n.U.svg.withConfig({displayName:"IconFlask.styles__Root",componentId:"sc-94871178-0"})``;var ep=e.i(13365),eh=e.i(920592),eg=e.i(476999);let eb={landscape:X.s/4,portrait:.6},ey=[90,30,-30,-90,-150,150],ex=ey.map((e,t)=>t).filter(e=>3!==e),ew=e=>Math.round(1e3*e)/1e3,ev={landscape:3.6,portrait:2.8},ek=(e,t)=>{let a,i,r,n,l=ex[e],[o,s]=(a=eb[t],i=ey[l]*Math.PI/180,r=3*a*2,[X.j[0]+Math.cos(i)*r,X.j[1]+Math.sin(i)*r]),d=eb[t],c=(0,X.$)(t),u=(0,X.A)(o,s,t),m=90===(n=ey[l])?"right":"portrait"===t?n>0?"below":"above":90>Math.abs(n)?"right":"left",f=Math.sqrt(3)/2*d*2,p={place:m,gap:ew("below"===m||"above"===m?.09/(2*d)*100:.18/f*100),width:ew(ev[t]/f*100)};return{left:ew(u.left),top:ew(u.top),width:ew(f/c.width*100),height:ew(2*d/c.height*100),label:p}};var e$=e.i(10003),eC=e.i(547905);let eM=({left:e,top:t,width:a,height:i})=>`left: ${e}%;
top: ${t}%;
width: ${a}%;
height: ${i}%;`,ej=({label:e})=>{if("below"===e.place||"above"===e.place)return["left: 50%;\nright: auto;","below"===e.place?`top: calc(100% + ${e.gap}%); bottom: auto;`:`bottom: calc(100% + ${e.gap}%); top: auto;`,`width: ${e.width}%;`,"transform: translateX(-50%);\ntext-align: center;"].join("\n");let t="right"===e.place?"left":"right",a="right"===e.place?"right":"left";return`${t}: calc(100% + ${e.gap}%);
${a}: auto;
top: 50%;
bottom: auto;
width: ${e.width}%;
transform: translateY(-50%);
text-align: ${"right"===e.place?"left":"right"};`},eR=n.U.nav.withConfig({displayName:"EndLinks.styles__Tiles",componentId:"sc-c748eae-0"})`
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 2;
  /* globals.css gibt jedem nav den Grund des Theme — die Gruppe liegt durchsichtig über der Bühne */
  background-color: transparent;
`,eI=n.U.span.withConfig({displayName:"EndLinks.styles__Slot",componentId:"sc-c748eae-1"})`
  position: absolute;
  ${({$landscape:e})=>eM(e)}
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: transform 0.2s ease;

  &[data-shown='false'] {
    visibility: hidden;
  }

  /* Hebt die Wabe beim Zeigen und mit Tastaturfokus — wie die Hero-Pagination eine Stufe heller, dazu ein Stück nach oben */
  &:hover,
  &:focus-within {
    transform: translate(-50%, -50%) translateY(-4px);
  }

  > a {
    position: absolute;
    inset: 0;
    display: block;
    color: ${({$tone:e,theme:t})=>"light"===e?t.palette.site.blue:x.h.WHITE};
    text-decoration: none;
    pointer-events: auto;
    outline: none;
  }

  /* Trefferfläche mindestens 44 px, auch wenn die Kachel kleiner gezeichnet ist */
  > a::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    width: max(100%, 44px);
    height: max(100%, 44px);
    transform: translate(-50%, -50%);
  }

  @media ${X.G} {
    ${({$portrait:e})=>eM(e)}
  }
`,eE=n.U.span.withConfig({displayName:"EndLinks.styles__Tile",componentId:"sc-c748eae-2"})`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  ${eC.p}
  background: ${({$tone:e,theme:t})=>"light"===e?t.palette.site.tint:`color-mix(in srgb, ${x.h.WHITE} 22%, transparent)`};
  transition: background 0.2s ease;

  svg {
    width: 46%;
    height: 46%;
  }

  ${eI}:hover &,
  a:focus-visible > & {
    background: ${({$tone:e,theme:t})=>"light"===e?t.palette.site.blue:`color-mix(in srgb, ${x.h.WHITE} 48%, transparent)`};
    color: ${({$tone:e})=>"light"===e?x.h.WHITE:"inherit"};
  }
`,ez=n.U.span.withConfig({displayName:"EndLinks.styles__Label",componentId:"sc-c748eae-3"})`
  position: absolute;
  ${({$landscape:e})=>ej(e)}
  font-family: ${({theme:e})=>e.font.primaryFamily};
  font-weight: 700;
  font-size: clamp(12px, 1.4vw, 20px);
  line-height: 1.2;
  -webkit-font-smoothing: antialiased;
  color: ${({$text:e})=>e};

  ${eI}:hover &,
  a:focus-visible > & {
    text-decoration: underline;
    text-underline-offset: 3px;
  }

  @media ${X.G} {
    ${({$portrait:e})=>ej(e)}
    font-size: clamp(10px, 3vw, 13px);
    line-height: 1.15;
  }
`,eS=n.U.span.withConfig({displayName:"EndLinks.styles__FocusRing",componentId:"sc-c748eae-4"})`
  position: absolute;
  inset: -4px;
  border: 2px solid ${({$text:e})=>e};
  border-radius: 8px;
  opacity: 0;
  pointer-events: none;

  a:focus-visible > & {
    opacity: 1;
  }
`,eA={search:eu.f,monitored:e=>(0,t.jsxs)(em,{className:e.className,"data-testid":"icon-medal-root",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[(0,t.jsx)("title",{children:"award-medal"}),(0,t.jsxs)("g",{fill:"currentColor",strokeLinecap:"square",strokeLinejoin:"miter",strokeMiterlimit:"10",children:[(0,t.jsx)("path",{d:"M10.1046 8.24312L8 3H3.5V3.5L6.41186 10.7406",stroke:"currentColor",strokeWidth:"2",fill:"none",strokeLinecap:"butt"}),(0,t.jsx)("path",{d:"M13.9003 8.24312L16 3H20.5V3.5L17.5738 10.8174",stroke:"currentColor",strokeWidth:"2",fill:"none",strokeLinecap:"butt"}),(0,t.jsx)("path",{d:"M12 22C15.866 22 19 18.866 19 15C19 11.134 15.866 8 12 8C8.13401 8 5 11.134 5 15C5 18.866 8.13401 22 12 22Z",stroke:"currentColor",strokeWidth:"2",fill:"none"}),(0,t.jsx)("path",{d:"M12 18C13.6569 18 15 16.6569 15 15C15 13.3431 13.6569 12 12 12C10.3431 12 9 13.3431 9 15C9 16.6569 10.3431 18 12 18Z",stroke:"currentColor",strokeWidth:"2",fill:"none"})]})]}),laboratory:({className:e,children:a,...i})=>(0,t.jsxs)(ef,{...i,className:e,"data-testid":"icon-flask-root",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,t.jsx)("path",{d:"M5 16L5.80474 16.503C7.80916 17.7557 10.2963 17.9599 12.4782 17.0508C14.1043 16.3732 15.9206 16.3069 17.5918 16.8639L19.5 17.5",stroke:"currentColor",strokeWidth:"2",fill:"none"}),(0,t.jsx)("path",{d:"M8 2H10V11C6.3228 12.8386 4 16.597 4 20.7082V22H20V20.7082C20 16.597 17.6772 12.8386 14 11V2H16",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"square",fill:"none"})]}),raas:ep.f,contact:eh.f},e_=ec.map((e,t)=>({landscape:ek(t,"landscape"),portrait:ek(t,"portrait")})),eL=({dataTestId:e,labels:i,tone:r,textColor:n,linkRefs:l,pathname:o,navLabel:s})=>{let d=(0,a.useCallback)(e=>(0,eg.q)(o,"imagefilm_endlink",{link:e}),[o]);return(0,t.jsx)(eR,{"aria-label":s,"data-testid":`${e}-endlinks`,children:ec.map((a,o)=>{let s=eA[a.id];return(0,t.jsx)(eI,{$landscape:e_[o].landscape,$portrait:e_[o].portrait,$tone:r,"data-shown":"false",children:(0,t.jsxs)(e$.NavLink,{ref:e=>{l.current[o]=e},href:a.href,"data-testid":`${e}-endlink-${o}`,"data-link":a.id,"data-shown":"false",onClick:()=>d(a.id),onAuxClick:e=>{1===e.button&&d(a.id)},children:[(0,t.jsx)(eE,{$tone:r,"aria-hidden":"true",children:(0,t.jsx)(s,{})}),(0,t.jsx)(eS,{$text:n,"aria-hidden":"true"}),(0,t.jsx)(ez,{$landscape:e_[o].landscape,$portrait:e_[o].portrait,$text:n,children:i[a.id]})]})},a.id)})})};var eV=e.i(355351);let eN=-14*Math.PI/180,eP=.4-.1,eT=(e,t,a)=>Math.max(Math.hypot(a.x,a.y),Math.hypot(e-a.x,a.y),Math.hypot(a.x,t-a.y),Math.hypot(e-a.x,t-a.y)),eF=(e,t,a,i,r=0)=>{let n;if(a<=0)return 0;if(a>=.9)return 1;let l=t>0?1-Math.min(1,Math.max(0,e.cx/t)):0,o=(a-((i?r>0?Math.min(1,Math.hypot(e.cx-i.x,e.cy-i.y)/r):0:l)*.5+((n=43758.5453*Math.sin(12.9898*e.row+78.233*e.col))-Math.floor(n))*.1))/eP;return o<=0?0:o>=1?1:1-(1-o)**3},eW=e=>(e.match(/M[^M]*/g)??[]).map(e=>{let t=e.trim(),a=(t.match(/-?\d+(?:\.\d+)?(?:e-?\d+)?/gi)??[]).map(Number),i=1/0,r=1/0,n=-1/0,l=-1/0;for(let e=0;e+1<a.length;e+=2)i=Math.min(i,a[e]),n=Math.max(n,a[e]),r=Math.min(r,a[e+1]),l=Math.max(l,a[e+1]);return{d:t,left:i,top:r,right:n,bottom:l}}),eU=e=>[...e].sort((e,t)=>Math.abs(e.cy-t.cy)>1?e.cy-t.cy:e.cx-t.cx),eB=(e,t,a)=>{let i=t.filter(t=>t.full===e&&t.flipped).map(e=>e.d).join(" ");if(!e.overlay){let t=e.path.ownerDocument.createElementNS("http://www.w3.org/2000/svg","path");t.setAttribute("data-full","true"),t.setAttribute("data-wipe","true"),t.setAttribute("fill-rule","nonzero"),t.style.setProperty("--alpha",e.path.style.getPropertyValue("--alpha")||"1"),e.path.parentNode?.appendChild(t),e.overlay=t}e.overlay.setAttribute("d",i),e.overlay.style.color=a,e.overlay.style.fill=a};var eH=e.i(929842),eD=e.i(619249);let eG=`@media ${X.G}`,eK="140px",eY="4rem",eq=n.U.section.withConfig({displayName:"Imagefilm.styles__Section",componentId:"sc-2b988240-0"})`
  /* Bezug für die Wisch-Ebene (#1513); eigener Stapelkontext, damit sie über dem Grund und unter dem Wabenrand liegt */
  position: relative;
  isolation: isolate;
  /* globals.css blendet background-color auf allen Elementen 0,3 s über —
     nach dem Wabenwischer schiene sonst die alte Folie durch (#1513) */
  transition: none;
  width: 100%;
  padding: ${eK} 0;
  margin-bottom: 50px;
  background: ${({$background:e})=>e};
  ${({$edges:e})=>(0,eC.n)(e)}
  ${({$edges:e})=>(0,eC.o)("top",eK,e)}
  ${({$edges:e})=>(0,eC.o)("bottom",eK,e)}

  /* #2027: hochkant stand die Bühne zwischen je 140 px leerem Band — der Wabenrand behält seine Zone (hexEdgeInset) */
  ${eG} {
    padding: ${eY} 0;
    ${({$edges:e})=>(0,eC.o)("top",eY,e)}
    ${({$edges:e})=>(0,eC.o)("bottom",eY,e)}
  }
`,eO=n.U.canvas.withConfig({displayName:"Imagefilm.styles__WipeLayer",componentId:"sc-2b988240-1"})`
  position: absolute;
  inset: 0;
  z-index: -2;
  width: 100%;
  height: 100%;
  pointer-events: none;
`,eZ=n.U.div.withConfig({displayName:"Imagefilm.styles__Stage",componentId:"sc-2b988240-2"})`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  background: ${({$background:e})=>e};

  /* Handy hochkant: höhere Bühne, die Beats stapeln ihre Motive (#1497) */
  ${eG} {
    aspect-ratio: ${X.l};
  }
`,eX=n.U.img.withConfig({displayName:"Imagefilm.styles__Poster",componentId:"sc-2b988240-3"})`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`,eJ="44px",eQ=n.U.p.withConfig({displayName:"Imagefilm.styles__Caption",componentId:"sc-2b988240-4"})`
  position: absolute;
  left: 5%;
  right: 5%;
  bottom: ${"56px"};
  margin: 0;
  text-align: center;
  font-family: ${({theme:e})=>e.font.primaryFamily};
  ${(0,eD.B)(eH.D.h5)}
  font-size: ${({theme:e})=>e.font.text.body.mobile.fontSize};
  line-height: ${({theme:e})=>e.font.text.body.mobile.lineHeight};
  -webkit-font-smoothing: antialiased;
  text-wrap: balance;
  color: ${({$color:e})=>e};
  pointer-events: none;
  z-index: 2;

  @media screen and (min-width: ${({theme:e})=>e.device.mobile}) {
    left: 10%;
    right: 10%;
    /* über der Steuerleiste (Touch: 44-px-Knopf + 2 × 10 px) */
    bottom: max(9%, 64px);
    ${(0,eD.B)(eH.D.h5)}
  }

  @media screen and (min-width: ${({theme:e})=>e.device.tablet}) {
    ${(0,eD.B)(eH.D.h4)}
  }

  @media screen and (min-width: ${({theme:e})=>e.device.desktop}) {
    ${(0,eD.B)(eH.D.h3)}
  }

  &[data-typing='true']::after {
    content: '';
    display: inline-block;
    width: 0.5em;
    height: 1.05em;
    margin-left: 0.08em;
    vertical-align: text-bottom;
    background: currentColor;
    animation: imagefilm-caret 0.8s steps(1) infinite;
  }

  @keyframes imagefilm-caret {
    50% {
      opacity: 0;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    &[data-typing='true']::after {
      animation: none;
    }
  }
`,e0=({left:e,top:t,width:a,place:i})=>{let r="right"===i||"left"===i;return`left: ${"left"===i?e-a:e}%;
top: ${t}%;
width: ${a}%;
transform: ${r?"translateY(-50%)":"above"===i?"translate(-50%, -100%)":"translateX(-50%)"};
text-align: ${r?"left"===i?"right":"left":"center"};`},e1={small:["clamp(11px, 1.55vw, 22px)","clamp(11px, 3.1vw, 13px)"],medium:["clamp(12px, 1.8vw, 26px)","clamp(11px, 3.1vw, 13px)"],large:["clamp(14px, 2.3vw, 34px)","clamp(13px, 3.8vw, 17px)"],cycle:["clamp(12px, 1.8vw, 26px)","clamp(11px, 2.9vw, 12px)"],sheet:["clamp(12px, 1.85vw, 34px)","clamp(11px, 3vw, 14px)"]},e2=w.G.palette.text.primary,e5=w.G.palette.default.white,e3={right:"flex-start",left:"flex-end",below:"center",above:"center"},e8=n.U.span.withConfig({displayName:"Imagefilm.styles__StageLabel",componentId:"sc-2b988240-5"})`
  position: absolute;
  ${({$landscape:e})=>e0(e)}
  opacity: 0;
  font-family: ${({theme:e})=>e.font.primaryFamily};
  font-weight: 700;
  font-size: ${({$size:e="small"})=>e1[e][0]};
  line-height: 1.2;
  -webkit-font-smoothing: antialiased;
  hyphens: auto;
  overflow-wrap: anywhere;
  color: ${({$color:e})=>e};
  pointer-events: none;
  z-index: 2;

  /* Überschrift auf einem Blatt: nie umbrechen, nie trennen */
  ${({$size:e})=>"sheet"===e?"white-space: nowrap; hyphens: none;":""}

  &[data-shown='false'] {
    visibility: hidden;
  }

  ${eG} {
    ${({$portrait:e})=>e0(e)}
    font-size: ${({$size:e="small"})=>e1[e][1]};
    line-height: 1.15;
    /* #2107: hochkant keine Silbentrennung („Werksent-sorgung") — die Rahmen
       sind dort so breit wie das längste Wort; umbrochen wird nur an Leerzeichen */
    hyphens: manual;
    overflow-wrap: normal;
    /* reicht ein einzelnes Wort doch über den Rahmen, ragt es zur Seite ohne
       Motiv hinaus (links stehende Namen nach links, mittige gleichmäßig) —
       nie in die eigene Wabe */
    display: flex;
    justify-content: ${({$portrait:e})=>e3[e.place]};

    /* #2114: auf der grünen Folie (Partner) dunkle Schrift statt Weiß — Weiß hat
       auf Markengrün nur 2,6:1, text.primary 6:1 (WCAG AA für kleine Schrift) */
    ${"[data-bg='secondary'] &"} {
      color: ${e2};
    }

    /* #2117: Begriffe mit eigener Farbe auf dem blauen Band (Kreislauf) in Weiß —
       das helle Cyan von „Rücknahme" stand auf Markenblau zu schwach; die Waben
       tragen die Farbe des Begriffs weiter */
    ${"[data-bg='primary'] &[data-name-tone='term']"} {
      color: ${e5};
    }
  }
`,e4=n.U.div.withConfig({displayName:"Imagefilm.styles__Controls",componentId:"sc-2b988240-6"})`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 6px 10px;
  z-index: 3;
  opacity: 0;
  transition: opacity 0.25s ease;

  @media screen and (min-width: ${({theme:e})=>e.device.mobile}) {
    padding: 10px 14px;
  }

  ${eZ}:hover &,
  &:focus-within {
    opacity: 1;
  }

  /* Touch-Geräte kennen kein Hover: Steuerung immer zeigen */
  @media (hover: none) {
    opacity: 1;
  }
`,e6="[data-bg='white'] &, [data-bg='greyLight'] &",e9="[data-bg='secondary'] &",e7=n.U.button.withConfig({displayName:"Imagefilm.styles__PlayToggle",componentId:"sc-2b988240-7"})`
  width: 34px;
  height: 34px;
  flex: 0 0 34px;
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: ${({theme:e})=>e.palette.default.secondary};

  ${e6} {
    background: ${({theme:e})=>e.palette.site.greenDark};
  }

  ${e9} {
    background: ${({theme:e})=>e.palette.default.white};

    svg path {
      stroke: ${({theme:e})=>e.palette.default.secondary};
    }
  }

  /* Touch: Tippziel mindestens 44 px */
  @media (hover: none) {
    width: ${eJ};
    height: ${eJ};
    flex-basis: ${eJ};
  }

  svg {
    width: 18px;
    height: 18px;

    path {
      stroke: ${({theme:e})=>e.palette.default.white};
    }
  }
`,te=(0,X.u)("landscape"),tt=(0,X.u)("portrait"),ta=n.U.button.withConfig({displayName:"Imagefilm.styles__Replay",componentId:"sc-2b988240-8"})`
  position: absolute;
  left: 50%;
  top: ${te.top}%;
  height: ${te.size}%;
  aspect-ratio: 1;
  min-height: 28px;
  padding: 0;
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transform: translate(-50%, -50%);
  background: ${({theme:e})=>e.palette.default.secondary};
  z-index: 3;
  animation: imagefilm-replay-in 0.5s ease both;
  transition: transform 0.2s ease;

  ${eG} {
    top: ${tt.top}%;
    height: ${tt.size}%;
  }

  /* Tippziel mindestens 44 px, auch wenn der Knopf kleiner gezeichnet ist */
  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    width: max(100%, ${eJ});
    height: max(100%, ${eJ});
    transform: translate(-50%, -50%);
  }

  &:hover {
    transform: translate(-50%, -50%) scale(1.08);
  }

  &:focus-visible {
    outline: 3px solid ${({theme:e})=>e.palette.default.white};
    outline-offset: 3px;
  }

  svg {
    width: 50%;
    height: 50%;
    /* optische Mitte des Dreiecks */
    margin-left: 8%;

    path {
      stroke: ${({theme:e})=>e.palette.default.white};
    }
  }

  @keyframes imagefilm-replay-in {
    from {
      opacity: 0;
      transform: translate(-50%, -50%) scale(0.6);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    transition: none;
  }
`,ti=n.U.div.withConfig({displayName:"Imagefilm.styles__ProgressTrack",componentId:"sc-2b988240-9"})`
  position: relative;
  flex: 1 1 auto;
  height: 6px;
  border-radius: 3px;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.28);
  transition: background-color 0.4s ease;

  /* unsichtbare Trefferfläche: 44 px hoch trotz 6-px-Leiste */
  &::before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    height: ${eJ};
    transform: translateY(-50%);
  }

  ${e6} {
    background: rgba(0, 65, 110, 0.18);
  }

  ${e9} {
    background: rgba(255, 255, 255, 0.35);
  }
`,tr=n.U.div.attrs(({$progress:e})=>({style:{width:`${Math.round(1e3*e)/10}%`}})).withConfig({displayName:"Imagefilm.styles__ProgressFill",componentId:"sc-2b988240-10"})`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  border-radius: 3px;
  background: ${({theme:e})=>e.palette.default.secondary};

  ${e6} {
    background: ${({theme:e})=>e.palette.site.greenDark};
  }

  ${e9} {
    background: ${({theme:e})=>e.palette.default.white};
  }
`,tn=n.U.span.withConfig({displayName:"Imagefilm.styles__SceneMark",componentId:"sc-2b988240-11"})`
  position: absolute;
  top: -3px;
  bottom: -3px;
  width: 2px;
  left: ${({$at:e})=>`${100*e}%`};
  background: ${({theme:e})=>e.palette.default.white};
  opacity: 0.6;

  ${e6} {
    background: ${({theme:e})=>e.palette.default.primary};
    opacity: 0.45;
  }
`,tl=n.U.ol.withConfig({displayName:"Imagefilm.styles__Transcript",componentId:"sc-2b988240-12"})`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
  border: 0;
`,to=(0,i.default)(()=>e.A(641719),{loadableGenerated:{modules:[164522]},ssr:!1}),ts={x:0,y:0},td={position:[0,0,X.i],fov:X.S,near:.1,far:200},tc="100vw",tu=e=>{let t=K.T.tracks.find(t=>t.id===e);if(!t)throw Error(`Unbekannte Spur im Drehbuch: ${e}`);return t},tm=(e,t)=>Array.from({length:e},(e,a)=>({landscape:t(a,"landscape"),portrait:t(a,"portrait")})),tf=[{id:"way",frames:tm(J.D,J.Z),progress:tu("bw.ways"),gain:1,opacity:tu("bw.opacity"),size:"small",beat:"bw",white:!0},{id:"stream",frames:tm(Q.L,Q.A),progress:tu("b1.stations"),gain:1,opacity:tu("b1.stream.opacity"),size:"small",beat:"b1",white:!0},{id:"dim",frames:tm(X.P,X.Q),progress:tu("b3.dims"),gain:1,opacity:tu("b3.opacity"),size:"large"},{id:"norm",frames:tm(1,(e,t)=>(0,X.F)(t)),progress:tu("b3.norm"),gain:1,opacity:tu("b3.opacity"),size:"small"},{id:"legend",frames:tm(X.P,X.L),progress:tu("b2.metrics"),gain:1,opacity:tu("b2.others"),size:"large"},{id:"class",frames:tm(ee.K,ee.z),progress:tu("b2.classes"),gain:1,opacity:tu("b2.others"),size:"large"},{id:"cert",frames:tm(1,(e,t)=>(0,ee.C)(t)),progress:tu("b2.cert"),gain:3,opacity:tu("b2.opacity"),size:"sheet"},{id:"partner",frames:tm(et.D,et.J),progress:tu("b5.partners"),gain:1,opacity:tu("b5.opacity"),size:"medium"},{id:"contact",frames:tm(1,(e,t)=>(0,et.l)(t)),progress:tu("b5.contact"),gain:1,opacity:tu("b5.opacity"),size:"large"},{id:"iso",frames:tm(X.U,X.y),progress:tu("b7.points"),gain:1,opacity:tu("b7.opacity"),size:"large"},{id:"server",frames:tm(X.d,X._),progress:tu("bs.points"),gain:1,opacity:tu("bs.opacity"),size:"large"},{id:"cycle",frames:tm(X.m,X.x),progress:tu("b8.names"),gain:1,opacity:tu("b8.names.opacity"),size:"cycle",beat:"b8"}],tp=tu("b8.endlinks"),th=ee.w.map(e=>e.name),tg=(e,t,a)=>e.forEach((e,i)=>{if(!e)return;let r=((0,y.Y)(t-i)*a).toFixed(2);e.style.opacity!==r&&(e.style.opacity=r),ty(e,"shown","0.00"===r?"false":"true")}),tb={outer:"var(--film-bg)"},ty=(e,t,a)=>{e.dataset[t]!==a&&(e.dataset[t]=a)},tx=({autoplay:e=!0,startAt:i=0,background:x=d.F.PRIMARY,dataTestId:w="imagefilm",dataAttributes:v,edges:k,className:$})=>{let _=(0,n.i)(),{themeMode:L,language:V}=(0,o.N)(),{tr:N}=(0,l.w)(V),P=[N("imagefilm.claim"),N("imagefilm.beat.bw"),N("imagefilm.beat.b1v2"),N("imagefilm.beat.bmv2"),N("imagefilm.beat.b3v3"),N("imagefilm.beat.b2v4"),N("imagefilm.beat.b4"),N("imagefilm.beat.b4v2"),N("imagefilm.beat.b6v2"),N("imagefilm.beat.b5"),N("imagefilm.beat.b7v2"),N("imagefilm.beat.bs"),N("imagefilm.beat.b0"),N("imagefilm.claim")],T=[N("imagefilm.dim.mechanics",{defaultValue:"Mechanik"}),N("imagefilm.dim.optics",{defaultValue:"Optik"}),N("imagefilm.dim.odor",{defaultValue:"Geruch"}),N("imagefilm.dim.purity",{defaultValue:"Reinheit"})],F=[N("imagefilm.cycle.production",{defaultValue:"Herstellung"}),N("imagefilm.cycle.market",{defaultValue:"Inverkehrbringen"}),N("imagefilm.cycle.takeback",{defaultValue:"Rücknahme"}),N("imagefilm.cycle.sorting",{defaultValue:"Sortierung"}),N("imagefilm.cycle.reprocessing",{defaultValue:"Aufbereitung"}),N("imagefilm.cycle.use",{defaultValue:"Vermarktung und Einsatz"})],W=Object.fromEntries(ec.map(e=>[e.id,N(e.labelKey,{defaultValue:e.defaultLabel})])),U=(0,r.usePathname)(),B={stream:F.slice(2,5),way:[N("imagefilm.way.market",{defaultValue:"Markt"}),N("imagefilm.way.collection",{defaultValue:"Werksentsorgung"}),N("imagefilm.way.custom",{defaultValue:"Produktion nach Maß"}),N("imagefilm.way.system",{defaultValue:"Systemmengen"})],dim:T,norm:["ISO · DIN EN 18065"],legend:T,class:th,cert:["Monitored Material"],partner:[N("imagefilm.partner.recycler",{defaultValue:"Recycler"}),N("imagefilm.partner.sorters",{defaultValue:"Sortierer"}),N("imagefilm.partner.labs",{defaultValue:"Prüflabore"}),N("imagefilm.partner.logistics",{defaultValue:"Logistik"})],contact:[N("imagefilm.partner.contact",{defaultValue:"Ein Ansprechpartner"})],iso:[N("imagefilm.iso.documented",{defaultValue:"Dokumentierte Prozesse"}),N("imagefilm.iso.audited",{defaultValue:"Unabhängig auditiert"}),N("imagefilm.iso.improved",{defaultValue:"Laufend verbessert"})],server:[N("imagefilm.server.datacenters",{defaultValue:"Rechenzentren in Deutschland"}),N("imagefilm.server.backups",{defaultValue:"Sicherungen in der EU"}),N("imagefilm.server.privacy",{defaultValue:"Europäischer Datenschutz"})],cycle:F},H=P.join("\0"),D=(0,a.useMemo)(()=>Object.fromEntries(H.split("\0").map((e,t)=>[K.P[t].id,e])),[H]),J=x===d.F.PRIMARY?"onPrimary":L===s.ThemeMode.DARK?"dark":"light",Q=(0,a.useMemo)(()=>"onPrimary"===J?j:"dark"===J?M:C,[J]),ee=x===d.F.PRIMARY,et=(0,h.f)(X.G)?"portrait":"landscape",ea=(0,R.f)(),[ei,er]=(0,a.useState)("loading"),[en,el]=(0,a.useState)(!1),[ed,eu]=(0,a.useState)(!1),em=(0,a.useRef)(null),[ef,ep]=(0,a.useState)(!1),eh=(0,a.useCallback)(e=>{em.current=e,eu(!0),em.current?.();let t=3,a=()=>{(t-=1)>0?requestAnimationFrame(a):ep(!0)};requestAnimationFrame(a)},[]),eg="ready"===ei&&ed,{timeRef:eb,playing:ey,progress:ex,play:ew,toggle:ev,seek:ek}=((e,{autoplay:t=!1,rate:i=1,hold:r=!1}={})=>{let n=(0,a.useRef)(0),l=(0,a.useRef)(0),[o,s]=(0,a.useState)(t),[d,c]=(0,a.useState)(0),[u,m]=(0,a.useState)(!1);(0,a.useEffect)(()=>{if("u"<typeof document)return;let e=()=>m(document.hidden);return document.addEventListener("visibilitychange",e),()=>document.removeEventListener("visibilitychange",e)},[]);let f=(0,a.useCallback)(()=>{l.current=n.current,c(e>0?n.current/e:0)},[e]);(0,a.useEffect)(()=>{if(!o||r||u)return;let t=0,a=null,d=r=>{if(null!==a){let t=n.current+Math.min(.1,(r-a)/1e3)*i;if(t>=e){n.current=e,f(),s(!1);return}n.current=t,Math.abs(t-l.current)>=.05-1e-9&&f()}a=r,t=requestAnimationFrame(d)};return t=requestAnimationFrame(d),()=>cancelAnimationFrame(t)},[o,r,u,e,i,f]);let p=(0,a.useCallback)(()=>{n.current>=e&&(n.current=0,f()),s(!0)},[e,f]),h=(0,a.useCallback)(()=>{s(!1),f()},[f]),g=(0,a.useCallback)(()=>o?h():p(),[o,h,p]),b=(0,a.useCallback)(t=>{Number.isFinite(t)&&(n.current=Math.min(e,Math.max(0,t)),f())},[e,f]);return{timeRef:n,playing:o,progress:d,play:p,pause:h,toggle:g,seek:b}})(Z,{hold:!en||!eg}),e$=(0,a.useMemo)(()=>({get current(){return O(eb.current)},set current(e){}}),[eb]),eC=(0,a.useCallback)(e=>{ek(q(e)),em.current?.()},[ek]),eM=(0,a.useRef)(i);(0,a.useEffect)(()=>{eM.current>0&&eC(eM.current)},[eC]);let ej=(0,a.useRef)(!1);(0,a.useEffect)(()=>{e&&en&&eg&&!ej.current&&(ej.current=!0,ew())},[e,en,eg,ew]);let eR=k&&(0,g.N)(k)?k:void 0,eI=(0,a.useRef)(null),eE=(0,a.useRef)(null),ez=(0,a.useRef)({}),eS=(0,a.useRef)([]),eA=(0,a.useRef)(null),e_=(0,a.useRef)(Y.V.white),eP=(0,a.useRef)("primary"),eH=(0,a.useRef)(null),eD=(0,a.useRef)(null),eG=(0,a.useRef)(null),[eK,eY]=(0,a.useState)(ts);(0,a.useEffect)(()=>{let e=eI.current,t=eG.current;if(!e||!t||"u"<typeof ResizeObserver)return;let a=()=>{let a=e.getBoundingClientRect(),i=t.getBoundingClientRect(),r=Math.max(0,Math.floor(Math.min(i.left-a.left,a.right-i.right))),n=Math.max(0,Math.floor(Math.min(i.top-a.top,a.bottom-i.bottom)));t.style.setProperty("--scene-bleed-x",`${r}px`),t.style.setProperty("--scene-bleed-y",`${n}px`),eY(e=>e.x===r&&e.y===n?e:{x:r,y:n})};a();let i=new ResizeObserver(a);return i.observe(e),i.observe(t),()=>i.disconnect()},[]);let eJ=(0,a.useRef)([]),e0=(0,a.useCallback)((e,t,a)=>{let i=eA.current,r=eI.current;if(!i||!r)return;if(e<0){if(eH.current){let e=eH.current;for(let e of(eH.current=null,eJ.current))e.full?e.full.overlay?.remove():(e.el.style.color="",e.el.style.fill="");eJ.current=[],requestAnimationFrame(()=>requestAnimationFrame(()=>{eH.current||i.getContext("2d")?.clearRect(0,0,e.width,e.height)}))}return}let n=i.getContext("2d");if(!n)return;if(!eH.current){let e,t,l=Math.min(2,window.devicePixelRatio||1),o={width:e=r.clientWidth,height:t=r.clientHeight,cells:(0,eV.T)(e,t,(0,eV.L)(e))};i.width=Math.round(o.width*l),i.height=Math.round(o.height*l),n.setTransform(l,0,0,l,0,0),eH.current=o,eD.current=null;let s=a?eo[a.beat]:void 0,d=eG.current,c=r.getBoundingClientRect();if(eJ.current=((e,t,a)=>{let i=[];for(let r of Array.from(e.querySelectorAll(`[data-testid^="${t}-edge-outer-"]`))){let e=[];for(let t of Array.from(r.querySelectorAll(":scope > path")))if("true"!==t.getAttribute("data-wipe"))if("true"===t.getAttribute("data-full")){let i=t.ownerSVGElement?.getBoundingClientRect(),r=(i?.left??0)-a.left,n=(i?.top??0)-a.top,l={path:t,overlay:null};for(let a of eW(t.getAttribute("d")??""))e.push({el:t,full:l,d:a.d,flipped:!1,cx:r+(a.left+a.right)/2,cy:n+(a.top+a.bottom)/2,top:n+a.top})}else{let i=t.getBoundingClientRect();e.push({el:t,flipped:!1,cx:i.left-a.left+i.width/2,cy:i.top-a.top+i.height/2,top:i.top-a.top})}for(let{top:t,...a}of eU(e))i.push({...a,row:Math.round(t),col:i.length})}return i})(r,w,c),s&&d){let e=d.getBoundingClientRect(),t=(0,X.I)(e.width/Math.max(1,e.height)),[a,i]=s.at("portrait"===t),r=(0,X.A)(a,i,t);eD.current={x:e.left-c.left+r.left/100*e.width,y:e.top-c.top+r.top/100*e.height}}}((e,t,a,i,r)=>{if(e.clearRect(0,0,t.width,t.height),a<=0)return;if(e.fillStyle=i,a>=.9)return e.fillRect(0,0,t.width,t.height);let n=r?eT(t.width,t.height,r):0;for(let i of(e.beginPath(),t.cells)){let l=eF(i,t.width,a,r,n);if(l<=0)continue;let o=(i.size/2+1)*l*1.25,s=eN*(1-l),d=Math.cos(s),c=Math.sin(s);[[0,-o],[o,-o/2],[o,o/2],[0,o],[-o,o/2],[-o,-o/2]].forEach(([t,a],r)=>{let n=i.cx+d*t-c*a,l=i.cy+c*t+d*a;0===r?e.moveTo(n,l):e.lineTo(n,l)}),e.closePath()}e.fill()})(n,eH.current,e,t,eD.current);let l=eJ.current;if(l.length>0){var o,s;let a,i=(o=eH.current,a=(s=eD.current)?eT(o.width,o.height,s):0,l.map(t=>eF(t,o.width,e,s,a)>=.5)),r=new Set;for(let e of(l.forEach((e,a)=>{if(e.flipped!==i[a]){if(e.flipped=i[a],e.full)return void r.add(e.full);e.el.style.color=i[a]?t:"",e.el.style.fill=i[a]?t:""}}),r))eB(e,l,t)}},[w]),e1=(0,a.useCallback)(()=>{let e,t,a=e$.current,i=(0,K.g)(a),r=eE.current;if(r){let e=i?(0,K.h)(i,D[i.id]??"",a):"";r.textContent!==e&&(r.textContent=e);let t=i?(D[i.id]??"").length:0;ty(r,"captionId",i?.id??""),ty(r,"visibleChars",String(e.length)),ty(r,"typing",i&&e.length<t?"true":"false")}for(let e of tf){let t=ez.current[e.id];t&&tg(t,(0,b.M)(e.progress,a)*e.gain,(0,b.M)(e.opacity,a))}e=eS.current,t=(0,b.M)(tp,a),e.forEach((e,a)=>{let i=e?.parentElement;if(!e||!i)return;let r=(0,y.Y)(t-a).toFixed(2);i.style.opacity!==r&&(i.style.opacity=r);let n="0.00"===r?"false":"true";i.dataset.shown!==n&&(i.dataset.shown=n),e.dataset.shown!==n&&(e.dataset.shown=n)});let n=eI.current;if(n&&(ty(n,"sceneId",(0,b.i)(K.T,a)?.id??""),ee)){let e=(e=>{let t=0;for(let a of Y.C){let i=a.at+t;if(e<i)break;if(e<i+1)return{cut:a,progress:(e-i)/1};t+=1}return null})(eb.current),t=(0,Y.F)(a),i=e?e.progress>=.5?e.cut.to:e.cut.from:t.slide,r=e?Y.N[e.cut.from].background:t.background,l=Y.N[i].text;e0(e?e.progress:-1,e?Y.N[e.cut.to].background:r,e?.cut),e_.current=e?Y.V[e.cut.from]+(Y.V[e.cut.to]-Y.V[e.cut.from])*e.progress:Y.V[t.slide],ty(n,"bg",i),ty(n,"headerHex",Y.N[i].background),ty(n,"wipe",e?"true":"false");let o=e?eo[e.cut.beat]?.from??"edge":"";ty(n,"wipeFrom",o),eP.current=e?e.progress>=("charge"===o?.15:.5)?e.cut.to:e.cut.from:t.slide,eR&&ty(n,"edgeColor",i),n.style.getPropertyValue("--film-bg")!==r&&n.style.setProperty("--film-bg",r),n.style.getPropertyValue("--film-text")!==l&&n.style.setProperty("--film-text",l)}},[e$,eb,D,ee,eR,e0]),e2="fallback"===ei||"lost"===ei,e5=eg&&!ey&&ex>=1,e3=ey&&en&&eg;(0,a.useEffect)(()=>{if(e2||!e3)return;let e=0,t=()=>{e1(),e=requestAnimationFrame(t)};return e=requestAnimationFrame(t),()=>cancelAnimationFrame(e)},[e2,e3,e1]),(0,a.useEffect)(()=>{e2||e3||e1()},[e2,e3,ex,e1]);let e6=(0,a.useCallback)(e=>{let t=e.currentTarget.getBoundingClientRect();if(t.width<=0)return;let a=Math.min(1,Math.max(0,(e.clientX-t.left)/t.width));eC((0,K.I)(O(a*Z)))},[eC]),e9=(0,a.useMemo)(()=>[...new Set(K.P.map(e=>D[e.id]).filter(Boolean))],[D]),te=D[K.P[K.P.length-1].id]??"",tt=_.palette.default,tu=ee?`var(--film-bg, ${Q.background})`:((e,t)=>{switch(e){case d.F.PRIMARY:return t.primary;case d.F.GREYLIGHT:return t.greyLight;case d.F.WHITE:return t.white;default:return"transparent"}})(x,tt),tm=ee?"transparent":Q.background,tx=ee?`var(--film-text, ${Q.text})`:Q.text,tw=(0,a.useMemo)(()=>(0,t.jsxs)("picture",{children:[(0,t.jsx)("source",{media:X.G,srcSet:A,sizes:tc}),(0,t.jsx)(eX,{src:I,srcSet:E,sizes:tc,width:z,height:S,decoding:"async",alt:""})]}),[]),tv=(0,a.useMemo)(()=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("picture",{children:[(0,t.jsx)("source",{media:X.G,srcSet:A,sizes:tc,"data-testid":`${w}-fallback-poster-portrait`}),(0,t.jsx)(eX,{"data-testid":`${w}-fallback-poster`,src:I,srcSet:E,sizes:tc,width:z,height:S,decoding:"async",alt:""})]}),(0,t.jsx)(eQ,{as:"p",$color:tx,"data-testid":`${w}-fallback-caption`,children:te}),(0,t.jsx)(tl,{"data-testid":`${w}-fallback-transcript`,"data-captions":e9.length,children:e9.map((e,a)=>(0,t.jsx)("li",{children:e},a))})]}),[w,tx,te,e9]),tk=(0,a.useMemo)(()=>(0,t.jsx)(to,{timeRef:e$,colors:Q,playing:ey,slides:ee,onReady:eh,shadowRef:e_,bleed:eK,chargeSlideRef:eP}),[e$,Q,ey,ee,eh,eK]);return(0,t.jsxs)(eq,{ref:eI,className:$,...v,"data-testid":w,"data-playing":ey?"true":"false","data-scene-state":ei,"data-color-scheme":J,"data-slides":ee?"true":"false","data-layout":et,"data-save-data":ea?"true":"false","data-ended":e5?"true":"false",$background:tu,$edges:eR,children:[ee&&(0,t.jsx)(eO,{ref:eA,"aria-hidden":"true","data-testid":`${w}-wipe`}),eR&&(0,t.jsx)(m.f,{edges:eR,fill:ee?tb:void 0,dataTestId:`${w}-edge`}),(0,t.jsx)(c.f,{children:(0,t.jsx)(u.f,{xs:12,children:(0,t.jsxs)(eZ,{ref:eG,$background:tm,"data-layout":et,children:[(0,t.jsx)(G,{dataTestId:`${w}-stage`,camera:td,shadows:!0,frameloop:ey?"always":"demand",onStateChange:er,onVisibilityChange:el,placeholder:tw,holdPlaceholder:!ef,bleed:!0,deferPreload:!0,still:ea,fallback:tv,children:tk}),!e2&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(eQ,{ref:eE,$color:tx,"data-testid":`${w}-caption`,"data-typing":"false","aria-live":"off"}),tf.map(e=>e.frames.map((a,i)=>{let r=e.beat?es.F[e.beat]?.[i]??null:null,n=ee&&e.beat?(0,Y.z)(e.beat).background:Q.background,l=e.white?ee?es.L:tx:r?(0,es._)(r,n):tx;return(0,t.jsx)(e8,{ref:t=>{let a=ez.current[e.id]??[];a[i]=t,ez.current[e.id]=a},$landscape:a.landscape,$portrait:a.portrait,$size:e.size,$color:l,"data-testid":`${w}-${e.id}-${i}`,"data-term":r??void 0,"data-name-tone":e.white?"white":r?"term":void 0,"data-shown":"false",children:B[e.id][i]},`${e.id}-${i}`)})),(0,t.jsx)(eL,{dataTestId:w,labels:W,navLabel:N("imagefilm.endlinks",{defaultValue:"Weiter auf plastship"}),tone:ee||"dark"===J?"overlay":"light",textColor:ee?es.L:tx,linkRefs:eS,pathname:U??"/"}),e5&&(0,t.jsx)(ta,{type:"button",onClick:ew,"data-testid":`${w}-replay`,"aria-label":N("imagefilm.replay",{defaultValue:"Noch einmal abspielen"}),children:(0,t.jsx)(f.f,{})}),(0,t.jsxs)(e4,{children:[(0,t.jsx)(e7,{type:"button",$playing:ey,onClick:ev,"data-testid":`${w}-play-toggle`,"data-playing":ey?"true":"false","aria-label":ey?N("imagefilm.pause",{defaultValue:"Pause"}):N("imagefilm.play",{defaultValue:"Abspielen"}),children:ey?(0,t.jsx)(p.f,{}):(0,t.jsx)(f.f,{})}),(0,t.jsxs)(ti,{role:"slider",tabIndex:0,"aria-label":N("imagefilm.progress",{defaultValue:"Fortschritt"}),"aria-valuemin":0,"aria-valuemax":Math.round(Z),"aria-valuenow":Math.round(ex*Z),"data-testid":`${w}-progress`,"data-progress":ex.toFixed(3),onClick:e6,onKeyDown:e=>{"ArrowRight"===e.key&&eC((0,K.D)(e$.current,1)),"ArrowLeft"===e.key&&eC((0,K.D)(e$.current,-1))},children:[(0,t.jsx)(tr,{$progress:ex}),K.T.markers.slice(1).map(e=>(0,t.jsx)(tn,{$at:q(e.at)/Z,"data-testid":`${w}-mark-${e.id}`},e.id))]})]})]})]})})})]})};K.P.map(e=>e.id);let tw=({dataTestId:e,dataAttributes:a,edges:i})=>(0,t.jsx)(tx,{dataTestId:e,dataAttributes:{...a,"data-page-hero-follow":"true",...i?.bottom?.placement==="inner"?{"data-page-hero-edge":i.bottom.depth??"section"}:{}},edges:i});e.s(["ImagefilmBlock",0,tw,"default",0,tw],278393)},396374,function(e){e.n(e.i(278393))}]);