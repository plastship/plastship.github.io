(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,198630,808216,e=>{var t=e.i(843476),i=e.i(997053);let a=i.U.svg.withConfig({displayName:"IconMore.styles__Root",componentId:"sc-11beb1c-0"})``;e.s(["f",0,e=>(0,t.jsxs)(a,{className:e.className,"data-testid":"icon-more-root",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,t.jsx)("circle",{cx:"12",cy:"5",r:"1.5",fill:"currentColor"}),(0,t.jsx)("circle",{cx:"12",cy:"12",r:"1.5",fill:"currentColor"}),(0,t.jsx)("circle",{cx:"12",cy:"19",r:"1.5",fill:"currentColor"})]})],808216),e.s([],198630)},587862,e=>{var t=e.i(843476),i=e.i(997053);let a=i.U.div.withConfig({displayName:"LogoPlastrack.styles__Root",componentId:"sc-8a9c61c3-0"})``;e.s(["f",0,e=>{let{className:i,size:o=100,...n}=e;return(0,t.jsx)(a,{className:i,"data-testid":"logo-plastrack-root",children:(0,t.jsxs)("svg",{viewBox:"0 0 100 100",width:o,height:o,fill:"none",...n,children:[(0,t.jsx)("path",{d:"M50 15 L85 35 L85 50 L50 30 L15 50 L15 35 Z",fill:"#1e3a8a"}),(0,t.jsx)("path",{d:"M50 85 L15 65 L15 50 L50 70 L85 50 L85 65 Z",fill:"#22c55e"})]})})}],587862)},969328,29901,e=>{var t=e.i(843476),i=e.i(271645),a=e.i(174080),o=e.i(748659),n=e.i(458668),l=e.i(997053),s=e.i(351754);let c=l.q`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,r=l.q`
  from {
    transform: scale(0.5);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`,d=l.q`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,u=l.U.div.withConfig({displayName:"QuickWheel.styles__Overlay",componentId:"sc-9d3611c5-0"})`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: ${s.f.floating};
  pointer-events: ${({$isOpen:e})=>e?"auto":"none"};
  opacity: ${({$isOpen:e})=>+!!e};
  background: ${({$isOpen:e})=>e?"rgba(0, 0, 0, 0.4)":"transparent"};
  outline: none;
  transition:
    opacity 0.15s ease-out,
    background 0.15s ease-out;
`,p=l.U.div.withConfig({displayName:"QuickWheel.styles__WheelContainer",componentId:"sc-9d3611c5-1"})`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: ${({$isOpen:e})=>e?"auto":"none"};
  opacity: ${({$isOpen:e})=>+!!e};
  transition: opacity 0.15s ease-out;
  outline: none;

  ${({$isOpen:e})=>e&&l.m`
      animation: ${r} 0.2s ease-out;
    `}
`,h=l.U.div.withConfig({displayName:"QuickWheel.styles__CenterElement",componentId:"sc-9d3611c5-2"})`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: ${({theme:e})=>e.palette.default.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  outline: none;
  opacity: ${({$isOpen:e})=>+!!e};
  transition:
    opacity 0.15s ease-out,
    box-shadow 0.2s ease-out;
  box-shadow: ${({$isLoading:e})=>e?"0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 3px rgba(255, 255, 255, 0.5)":"0 4px 16px rgba(0, 0, 0, 0.2)"};

  svg {
    width: 24px;
    height: 24px;
    color: ${({theme:e})=>e.palette.default.black};
  }
`,f=l.U.span.withConfig({displayName:"QuickWheel.styles__CenterLabel",componentId:"sc-9d3611c5-3"})`
  font-size: 12px;
  font-weight: 500;
  font-family: ${({theme:e})=>e.font.secondaryFamily};
  color: ${({theme:e})=>e.palette.default.primary};
  max-width: 80px;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  line-height: 1.2;
`,k=l.U.div.withConfig({displayName:"QuickWheel.styles__ActionWrapper",componentId:"sc-9d3611c5-4"})`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(calc(-50% + ${({$x:e})=>e}px), calc(-50% + ${({$y:e})=>e}px));
  transition:
    transform 0.1s ease-out,
    opacity 0.15s ease-out;
  opacity: ${({$isLoading:e})=>e?.4:1};
  pointer-events: ${({$isLoading:e})=>e?"none":"auto"};

  ${({$isOpen:e,$delay:t})=>e&&l.m`
      animation: ${c} 0.15s ease-out;
      animation-delay: ${t}s;
      animation-fill-mode: backwards;
    `}

  ${({$isSelected:e,$x:t,$y:i,$isLoading:a})=>e&&!a&&l.m`
      transform: translate(calc(-50% + ${t}px), calc(-50% + ${i}px)) scale(1.15);
    `}
`,m=l.U.div.withConfig({displayName:"QuickWheel.styles__LoadingSpinner",componentId:"sc-9d3611c5-5"})`
  width: 32px;
  height: 32px;
  border: 3px solid ${({theme:e})=>e.palette.default.greyLight||"#e0e0e0"};
  border-top-color: ${({theme:e})=>e.palette.default.primary};
  border-radius: 50%;
  animation: ${d} 0.8s linear infinite;
`,x=l.q`
  from {
    transform: translate(
      calc(-50% + var(--x) * 0.5),
      calc(-50% + var(--y) * 0.5)
    ) scale(0);
    opacity: 0;
  }
  to {
    transform: translate(
      calc(-50% + var(--x)),
      calc(-50% + var(--y))
    ) scale(1);
    opacity: 1;
  }
`,b=l.U.div.withConfig({displayName:"QuickWheel.styles__OuterRingWrapper",componentId:"sc-9d3611c5-6"})`
  --x: ${({$x:e})=>e}px;
  --y: ${({$y:e})=>e}px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(calc(-50% + ${({$x:e})=>e}px), calc(-50% + ${({$y:e})=>e}px));
  transition:
    transform 0.1s ease-out,
    opacity 0.15s ease-out;
  opacity: ${({$isLoading:e})=>e?.4:1};
  pointer-events: ${({$isLoading:e})=>e?"none":"auto"};

  ${({$isOpen:e,$delay:t})=>e&&l.m`
      animation: ${x} 0.2s ease-out;
      animation-delay: ${t}s;
      animation-fill-mode: backwards;
    `}

  ${({$isSelected:e,$x:t,$y:i,$isLoading:a})=>e&&!a&&l.m`
      transform: translate(calc(-50% + ${t}px), calc(-50% + ${i}px)) scale(1.15);
    `}
`;var y=e.i(535004),g=e.i(912792);let C=[g.C.core,g.C.materials,g.C.orders,g.C.invoices,g.C.accounts,g.C.suppliers,g.C.samples,g.C.projects],v=100;e.s(["f",0,({actions:e,triggerKey:l="q",centerElement:s,onOpen:c,onClose:r,className:d})=>{let{isWheelOpen:x,openWheel:g,closeWheel:w}=(0,o.W)(),j=x(l),[$,W]=(0,i.useState)(!1),[_,S]=(0,i.useState)(null),[q,T]=(0,i.useState)(!1),[M,A]=(0,i.useState)(null),[I,L]=(0,i.useState)(null),[R,O]=(0,i.useState)(null),[E,N]=(0,i.useState)(null),P=(0,i.useRef)(null),V=(0,i.useRef)({x:0,y:0}),U=(0,i.useRef)({x:0,y:0}),B=(0,i.useRef)(!1),H=(0,i.useRef)(!1),K=e.slice(0,8),z=(e,t,i=v)=>{let a=-90+360/t*e,o=a*Math.PI/180;return{x:Math.cos(o)*i,y:Math.sin(o)*i,angle:a}},D=(0,i.useCallback)((e,t)=>{let i=e-V.current.x,a=t-V.current.y,o=Math.sqrt(i*i+a*a);if(o<30)return{inner:null,outer:null};let n=180/Math.PI*Math.atan2(a,i);if(I&&I.length>0&&o>(v+180)/2){let e=0,t=1/0;I.forEach((i,a)=>{let{angle:o}=z(a,I.length,180),l=Math.abs(n-o);l>180&&(l=360-l),l<t&&(t=l,e=a)});let i=180/I.length;if(t<=i)return{inner:null,outer:e}}let l=0,s=1/0;K.forEach((e,t)=>{let{angle:i}=z(t,K.length),a=Math.abs(n-i);a>180&&(a=360-a),a<s&&(s=a,l=t)});let c=180/K.length;return s<=c?{inner:l,outer:null}:{inner:null,outer:null}},[K,I]),Q=(0,i.useCallback)(()=>{V.current={x:window.innerWidth/2,y:window.innerHeight/2},g(l);let e=D(U.current.x,U.current.y);S(e.inner),N(e.outer),c?.()},[l,g,c,D]),F=(0,i.useCallback)((e=!1)=>{if(e&&null!==_){let e=K[_];e&&!e.disabled&&e.onClick()}B.current&&(H.current=!0),w(),S(null),N(null),L(null),O(null),T(!1),A(null),r?.()},[_,K,w,r]),Y=(0,i.useCallback)(()=>{L(null),O(null),N(null)},[]),J=(0,i.useCallback)(async(e,t)=>{if(!e.disabled&&!q){if(e.subActions&&e.subActions.length>0){L(e.subActions),O(t),N(null);return}T(!0),A(e.label);try{await e.onClick()}catch(e){console.error("Quick action failed:",e)}finally{T(!1),A(null),F(!1)}}},[F,q]),G=(0,i.useCallback)(async e=>{if(!e.disabled&&!q){T(!0),A(e.label);try{await e.onClick()}catch(e){console.error("Quick action failed:",e)}finally{T(!1),A(null),F(!1)}}},[F,q]);(0,i.useEffect)(()=>{let e=(0,n.I)(),t=t=>{if(t.key&&!t.ctrlKey&&!t.metaKey&&!t.altKey){if(t.key.toLowerCase()===l.toLowerCase()){if(e.get()||(0,n.e)()||(t.preventDefault(),t.repeat))return;B.current=!0,j||H.current||Q()}"Escape"===t.key&&j&&!q&&F(!1)}},i=e=>{if(e.key&&e.key.toLowerCase()===l.toLowerCase()&&B.current&&(B.current=!1,H.current=!1,j&&!q)){if(!I||!(I.length>0))F(!1)}},a=e=>{if(U.current={x:e.clientX,y:e.clientY},j&&!q){let t=D(e.clientX,e.clientY);S(t.inner),N(t.outer)}},o=()=>{B.current=!1,H.current=!1,j&&!q&&F(!1)};return document.addEventListener("keydown",t),document.addEventListener("keyup",i),document.addEventListener("mousemove",a),window.addEventListener("blur",o),()=>{document.removeEventListener("keydown",t),document.removeEventListener("keyup",i),document.removeEventListener("mousemove",a),window.removeEventListener("blur",o),e.dispose()}},[j,q,l,Q,F,D,I]);let X=(0,i.useCallback)(e=>{e.target!==e.currentTarget||q||F(!1)},[F,q]),Z=(0,i.useCallback)(e=>{e.stopPropagation(),q||(I?Y():F(!1))},[F,q,I,Y]),ee=(0,i.useCallback)(e=>{e.stopPropagation(),q||F(!1)},[F,q]);if((0,i.useEffect)(()=>{W(!0)},[]),!$||0===K.length)return null;let et=(0,t.jsx)(u,{$isOpen:j,onClick:X,"data-testid":`quick-wheel-overlay-${l}`,children:(0,t.jsxs)(p,{ref:P,className:d,$isOpen:j,onClick:ee,"data-testid":`quick-wheel-root-${l}`,children:[(0,t.jsxs)(h,{$isOpen:j,$isLoading:q,onClick:Z,"data-testid":`quick-wheel-center-${l}`,children:[q?(0,t.jsx)(m,{"data-testid":`quick-wheel-loading-${l}`}):s,q&&M?(0,t.jsx)(f,{children:M}):null!==E&&I?(0,t.jsx)(f,{children:I[E]?.label}):null!==_?(0,t.jsx)(f,{children:K[_]?.label}):null]}),K.map((e,i)=>{let{x:a,y:o}=z(i,K.length),n=_===i;return(0,t.jsx)(k,{$x:a,$y:o,$isOpen:j,$delay:.03*i,$isSelected:n,$isLoading:q,onClick:e=>e.stopPropagation(),children:(0,t.jsx)(y._,{icon:e.icon,onClick:()=>J(e,i),ariaLabel:e.label,isDisabled:e.disabled||q,isActive:n&&!q,color:C[i%C.length],dataTestId:`quick-wheel-action-${e.id}`})},e.id)}),I&&I.map((e,i)=>{let{x:a,y:o}=z(i,I.length,180),n=E===i;return(0,t.jsx)(b,{$x:a,$y:o,$isOpen:!0,$delay:.03*i,$isSelected:n,$isLoading:q,onClick:e=>e.stopPropagation(),children:(0,t.jsx)(y._,{icon:e.icon,onClick:()=>G(e),ariaLabel:e.label,isDisabled:e.disabled||q,isActive:n&&!q,color:C[i%C.length],dataTestId:`quick-wheel-outer-action-${e.id}`})},e.id)})]})});return(0,a.createPortal)(et,document.body)}],29901),e.s([],969328)},932823,175783,e=>{var t=e.i(843476),i=e.i(792245),a=e.i(197754),o=e.i(618566),n=e.i(157067),l=e.i(271645);e.i(683694);var s=e.i(974719),c=e.i(806880),r=e.i(380153),d=e.i(692504),u=e.i(770703);e.i(969328);var p=e.i(29901),h=e.i(890603),f=e.i(790490),k=e.i(24024),m=e.i(640997),x=e.i(288872),b=e.i(501496);e.i(339806);var y=e.i(946049);e.i(535016);var g=e.i(866757),C=e.i(858350),v=e.i(145896),w=e.i(164223);e.i(821194);var j=e.i(99222),$=e.i(997053);let W=$.q`
  from {
    opacity: 0;
    transform: translateY(-40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,_=$.U.div.withConfig({displayName:"SearchOverlay.styles__SearchContent",componentId:"sc-f0d9960d-0"})`
  width: 100%;
  max-width: 600px;
  padding: 0 1rem;
  animation: ${e=>e.$isOpen?$.m`
          ${W} 0.2s ease-out
        `:"none"};
`,S=$.U.div.withConfig({displayName:"SearchOverlay.styles__KeyboardHint",componentId:"sc-f0d9960d-1"})`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
  color: ${({theme:e})=>e.palette.default.white};
  font-size: 0.875rem;
  opacity: 0.8;

  kbd {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 24px;
    height: 24px;
    padding: 0 6px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 4px;
    font-family: ${({theme:e})=>e.font.secondaryFamily};
    font-size: 0.75rem;
    font-weight: 500;
  }
`,q=({dataTestId:e="search-overlay"})=>{let{tr:i}=(0,j.f)(),a=(0,o.useRouter)(),{isOverlayOpen:n,closeOverlay:s}=(0,x.S)(),c=n(x.v.SEARCH),[r,d]=(0,l.useState)(""),[u,p]=(0,l.useState)([]),[h,f]=(0,l.useState)([]),[k,m]=(0,l.useState)(!1),$=(0,l.useRef)(null),{label:W}=(0,C.f)(),q=W(null).text,T=(0,v.V)(),M=r.trim().length>=2,A=(0,l.useMemo)(()=>(M?u:h).map(e=>({...e,label:(0,w.f)(e.label)??q,...e.secondaryLabel?{secondaryLabel:T.text(e.secondaryLabel)}:{}})),[M,u,h,q,T]);(0,l.useEffect)(()=>{c||(d(""),p([]))},[c]),(0,l.useEffect)(()=>{if(!c)return;let e=!1;return(async()=>{try{let t=await b.k.get("/user/recent-activity");e||f(t.data.suggestions||[])}catch{e||f([])}})(),()=>{e=!0}},[c,W]);let I=(0,l.useCallback)(e=>{(d(e),$.current&&clearTimeout($.current),e.length<2)?p([]):$.current=setTimeout(async()=>{m(!0);try{let t=await b.k.get(`/search/suggestions?q=${encodeURIComponent(e)}`);p(t.data.suggestions||[])}catch{p([])}finally{m(!1)}},300)},[]),L=(0,l.useCallback)(e=>{e.trim().length>=2&&(s(),a.push(`/search?q=${encodeURIComponent(e.trim())}`))},[s,a]),R=(0,l.useCallback)(e=>{s(),e.value.startsWith("/")?a.push(e.value):a.push(`/search?q=${encodeURIComponent(e.label)}`)},[s,a]);return(0,t.jsx)(y.f,{isOpen:c,onClose:s,variant:"bare",placement:"top",ariaLabel:i("search.headline",{defaultValue:"Suche"}),dataTestId:e,children:(0,t.jsxs)(_,{$isOpen:c,children:[(0,t.jsx)(g.f,{placeholder:i("search.placeholder",{defaultValue:"Suchen..."}),value:r,onChange:d,onSearch:I,onSubmit:L,suggestions:A,onSuggestionSelect:R,loadingSuggestions:k,highlightMatches:!0,minChars:2,noResultsText:i("search.overlay.noSuggestions",{defaultValue:"Keine Vorschläge"}),variant:"overlay",showClearButton:!0,autoFocus:c,noMargin:!0,dataTestId:"search-overlay-input"}),(0,t.jsxs)(S,{"data-testid":"keyboard-hint",children:[(0,t.jsx)("kbd",{children:"Enter"})," ",i("search.overlay.hintSearch",{defaultValue:"zum Suchen"})," ·"," ",(0,t.jsx)("kbd",{children:"ESC"})," ",i("search.overlay.hintClose",{defaultValue:"zum Schließen"})," ·"," ",(0,t.jsx)("kbd",{children:"⌘K"})," /"," ",(0,t.jsx)("kbd",{children:i("search.overlay.ctrlK",{defaultValue:"Strg+K"})})," ",i("search.overlay.hintOpen",{defaultValue:"zum Öffnen"})]})]})})};var T=e.i(49958),M=e.i(885895),A=e.i(748659),I=e.i(727827),L=e.i(118410),R=e.i(406039);e.i(823987);var O=e.i(515090),E=e.i(166506);let N=$.U.svg.withConfig({displayName:"IconScan.styles__Root",componentId:"sc-c83459cc-0"})``,P=e=>(0,t.jsxs)(N,{className:e.className,"data-testid":"icon-scan-root",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[(0,t.jsx)("title",{children:"scan-target"}),(0,t.jsxs)("g",{fill:"currentColor",strokeLinecap:"square",strokeLinejoin:"miter",strokeMiterlimit:"10",children:[(0,t.jsx)("path",{d:"M3 8V5C3 3.89543 3.89543 3 5 3H8",stroke:"currentColor",strokeWidth:"2",fill:"none"}),(0,t.jsx)("path",{d:"M16 3H19C20.1046 3 21 3.89543 21 5V8",stroke:"currentColor",strokeWidth:"2",fill:"none"}),(0,t.jsx)("path",{d:"M21 16V19C21 20.1046 20.1046 21 19 21H16",stroke:"currentColor",strokeWidth:"2",fill:"none"}),(0,t.jsx)("path",{d:"M8 21H5C3.89543 21 3 20.1046 3 19V16",stroke:"currentColor",strokeWidth:"2",fill:"none"}),(0,t.jsx)("path",{d:"M23.005 11.995L1.005 11.995",stroke:"currentColor",strokeWidth:"2",fill:"none"})]})]});e.s(["f",0,P],175783);var V=e.i(882458),U=e.i(317573),B=e.i(471480),H=e.i(63309);e.i(832063);var K=e.i(329531),z=e.i(635769),D=e.i(26819);e.i(198630);var Q=e.i(808216),F=e.i(138837),Y=e.i(646684),J=e.i(351754);let G=$.U.nav.withConfig({displayName:"BottomTabBar.styles__Root",componentId:"sc-15a4b9e7-0"})`
  display: none;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
  padding-bottom: env(safe-area-inset-bottom, 0px);
  background: ${e=>e.theme.palette.default.white};
  border-top: 1px solid ${e=>e.theme.palette.default.grey};
  z-index: ${J.f.floating};
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  @media only screen and (max-width: 1024px) {
    display: flex;
  }
`,X=$.U.button.withConfig({displayName:"BottomTabBar.styles__TabButton",componentId:"sc-15a4b9e7-1"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  height: 100%;
  border: none;
  background: none;
  cursor: pointer;
  padding: 4px 0;
  gap: 2px;
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
      stroke: ${e=>e.$isActive?e.$color||e.theme.palette.default.primary:e.theme.palette.default.greyDark};
      transition: stroke 0.15s ease-in-out;
    }

    /* For icons using fill instead of stroke (like IconMore) */
    circle[fill] {
      fill: ${e=>e.$isActive?e.$color||e.theme.palette.default.primary:e.theme.palette.default.greyDark};
      stroke: none;
      transition: fill 0.15s ease-in-out;
    }
  }
`,Z=$.U.span.withConfig({displayName:"BottomTabBar.styles__TabLabel",componentId:"sc-15a4b9e7-2"})`
  font-size: 10px;
  line-height: 1;
  color: ${e=>e.$isActive?e.$color||e.theme.palette.default.primary:e.theme.palette.default.greyDark};
  transition: color 0.15s ease-in-out;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 64px;
`,ee=$.U.div.withConfig({displayName:"BottomTabBar.styles__Backdrop",componentId:"sc-15a4b9e7-3"})`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 999;
`,et=$.U.div.withConfig({displayName:"BottomTabBar.styles__MoreSheet",componentId:"sc-15a4b9e7-4"})`
  position: fixed;
  bottom: calc(50px + env(safe-area-inset-bottom, 0px));
  left: 0;
  right: 0;
  background: ${e=>e.theme.palette.default.white};
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.15);
  z-index: ${J.f.floating+1};
  padding: 16px 0 8px;
`,ei=$.U.button.withConfig({displayName:"BottomTabBar.styles__MoreSheetItem",componentId:"sc-15a4b9e7-5"})`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  width: 100%;
  border: none;
  background: none;
  cursor: pointer;
  padding: 12px 20px;
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
      stroke: ${e=>e.$isActive?e.$color||e.theme.palette.default.primary:e.theme.palette.default.greyDark};
    }
  }

  &:active {
    background: ${e=>e.theme.palette.default.greyLight};
  }
`,ea=$.U.span.withConfig({displayName:"BottomTabBar.styles__MoreSheetLabel",componentId:"sc-15a4b9e7-6"})`
  font-size: 15px;
  color: ${e=>e.$isActive?e.$color||e.theme.palette.default.primary:e.theme.palette.default.black};
`,eo=$.U.div.withConfig({displayName:"BottomTabBar.styles__MoreSheetHandle",componentId:"sc-15a4b9e7-7"})`
  width: 36px;
  height: 4px;
  border-radius: 2px;
  background: ${e=>e.theme.palette.default.grey};
  margin: 0 auto 12px;
`,en=()=>{let[e,i]=(0,l.useState)(!1),[a,n]=(0,l.useState)(!1),s=(0,o.useRouter)(),c=(0,o.usePathname)(),{language:r}=(0,M.N)(),{tr:d}=(0,j.f)(r),{revision:u}=(0,v.V)(),{openWheel:p}=(0,A.W)(),{userContext:f}=(0,k.f)(),{outlookLinked:x,isStaffOrAdmin:b,isAuthenticated:y}=(0,I.f)(),g=f?.modules||[],C=(0,l.useMemo)(()=>{if(!y)return[];let e=[];return b&&e.push({id:"operations",label:d("header.operations.tooltip",{defaultValue:"Operations"}),icon:(0,t.jsx)(R.f,{}),href:"/operations",color:L.h.ORANGE}),b&&x&&e.push({id:"mail",label:d("header.mail.tooltip",{defaultValue:"Mail"}),icon:(0,t.jsx)(U.f,{}),href:"/mail",color:L.h.MICROSOFT}),b&&e.push({id:"documents",label:d("header.documents.tooltip",{defaultValue:"Documents"}),icon:(0,t.jsx)(B.f,{}),href:"/documents",color:L.h.PRIMARY}),b&&e.push({id:"weekly",label:d("header.weekly.tooltip",{defaultValue:"Weekly"}),icon:(0,t.jsx)(H.f,{}),href:"/weekly",color:L.h.PURPLE}),b&&x&&e.push({id:"chat",label:d("header.messages.tooltip",{defaultValue:"Chat"}),icon:(0,t.jsx)(z.f,{}),href:"/chat",color:L.h.MICROSOFT}),b&&x&&e.push({id:"calendar",label:d("header.calendar.tooltip",{defaultValue:"Calendar"}),icon:(0,t.jsx)(D.f,{}),href:"/calendar",color:L.h.MICROSOFT}),e},[y,b,x,d,u]),w=y&&(b||g.includes("plastrack")),$=y&&g.includes("rigk"),W=(0,l.useMemo)(()=>c?.startsWith("/plastrack")||!1,[c]),_=C.length>2,S=_?C.slice(0,1):C.slice(0,2),q=(0,l.useMemo)(()=>_?C.slice(1):[],[_,C]),N=(0,l.useCallback)(()=>{i(!1),n(!1)},[]),J=(0,l.useCallback)(e=>{N(),s.push(e)},[s,N]),en=(0,l.useCallback)(()=>{N(),p("q")},[p,N]),el=(0,l.useCallback)(()=>{i(!1),n(e=>!e)},[]),es=(0,l.useCallback)(()=>{n(!1),i(e=>!e)},[]),ec=(0,l.useCallback)(()=>{N()},[N]),er=(0,l.useCallback)(async()=>{N(),await (0,T.signOut)({redirect:!1}),s.push("/login")},[N,s]),ed=(0,l.useCallback)(e=>c?.startsWith(e)||!1,[c]),eu=(0,l.useMemo)(()=>q.some(e=>c?.startsWith(e.href))||c?.startsWith("/profile")||!1,[q,c]);return(0,t.jsxs)(t.Fragment,{children:[(e||a)&&(0,t.jsx)(ee,{onClick:ec,"data-testid":"bottom-tab-backdrop"}),e&&(0,t.jsxs)(et,{"data-testid":"bottom-tab-more-sheet",children:[(0,t.jsx)(eo,{}),q.map(e=>(0,t.jsxs)(ei,{$isActive:ed(e.href),$color:e.color,onClick:()=>J(e.href),"data-testid":`bottom-tab-more-${e.id}`,children:[e.icon,(0,t.jsx)(ea,{$isActive:ed(e.href),$color:e.color,children:e.label})]},e.id)),(0,t.jsxs)(ei,{$isActive:c?.startsWith("/profile")||!1,$color:L.h.PRIMARY,onClick:()=>J("/profile"),"data-testid":"bottom-tab-more-profile",children:[(0,t.jsx)(F.f,{}),(0,t.jsx)(ea,{$isActive:c?.startsWith("/profile")||!1,$color:L.h.PRIMARY,children:d("header.profile",{defaultValue:"Profile"})})]}),(0,t.jsxs)(ei,{onClick:er,"data-testid":"bottom-tab-more-logout",children:[(0,t.jsx)(Y.f,{}),(0,t.jsx)(ea,{children:d("header.logout",{defaultValue:"Logout"})})]})]}),a&&(0,t.jsxs)(et,{"data-testid":"bottom-tab-plastrack-sheet",children:[(0,t.jsx)(eo,{}),(0,t.jsxs)(ei,{$isActive:"/plastrack"===c,$color:L.h.SECONDARY,onClick:()=>J("/plastrack"),"data-testid":"bottom-tab-plastrack-scan",children:[(0,t.jsx)(E.f,{}),(0,t.jsx)(ea,{$isActive:"/plastrack"===c,$color:L.h.SECONDARY,children:d("plastrack.scan",{defaultValue:"Scan QR Code"})})]}),(0,t.jsxs)(ei,{$isActive:c?.startsWith("/plastrack/scans")||!1,$color:L.h.SECONDARY,onClick:()=>J("/plastrack/scans"),"data-testid":"bottom-tab-plastrack-scans",children:[(0,t.jsx)(P,{}),(0,t.jsx)(ea,{$isActive:c?.startsWith("/plastrack/scans")||!1,$color:L.h.SECONDARY,children:d("plastrack.scans",{defaultValue:"Scans"})})]}),(0,t.jsxs)(ei,{$isActive:c?.startsWith("/plastrack/boxes")||!1,$color:L.h.SECONDARY,onClick:()=>J("/plastrack/boxes"),"data-testid":"bottom-tab-plastrack-boxes",children:[(0,t.jsx)(V.f,{}),(0,t.jsx)(ea,{$isActive:c?.startsWith("/plastrack/boxes")||!1,$color:L.h.SECONDARY,children:d("plastrack.boxes",{defaultValue:"Boxes"})})]})]}),(0,t.jsxs)(G,{"data-testid":"bottom-tab-bar",children:[(0,m.f)(f?.role)&&(0,t.jsxs)(X,{onClick:en,"data-testid":"bottom-tab-actions",children:[(0,t.jsx)(h.f,{}),(0,t.jsx)(Z,{suppressHydrationWarning:!0,children:d("header.actions",{defaultValue:"Actions"})})]}),w&&(0,t.jsxs)(X,{$isActive:W||a,$color:L.h.SECONDARY,onClick:el,"data-testid":"bottom-tab-plastrack",children:[(0,t.jsx)(O.f,{}),(0,t.jsx)(Z,{$isActive:W||a,$color:L.h.SECONDARY,suppressHydrationWarning:!0,children:d("header.plastrack.tooltip",{defaultValue:"Plastrack"})})]}),$&&(0,t.jsxs)(X,{$isActive:ed("/rigk"),$color:L.h.SUCCESS,onClick:()=>J("/rigk"),"data-testid":"bottom-tab-rigk",children:[(0,t.jsx)(K.f,{}),(0,t.jsx)(Z,{$isActive:ed("/rigk"),$color:L.h.SUCCESS,suppressHydrationWarning:!0,children:d("header.rigk.tooltip",{defaultValue:"RIGK"})})]}),S.map(e=>(0,t.jsxs)(X,{$isActive:ed(e.href),$color:e.color,onClick:()=>J(e.href),"data-testid":`bottom-tab-${e.id}`,children:[e.icon,(0,t.jsx)(Z,{$isActive:ed(e.href),$color:e.color,suppressHydrationWarning:!0,children:e.label})]},e.id)),y&&(0,t.jsxs)(X,{$isActive:eu||e,$color:L.h.PRIMARY,onClick:es,"data-testid":"bottom-tab-more",children:[(0,t.jsx)(Q.f,{}),(0,t.jsx)(Z,{$isActive:eu||e,$color:L.h.PRIMARY,suppressHydrationWarning:!0,children:d("header.more",{defaultValue:"More"})})]})]})]})};var el=e.i(458668);let es=(0,u.default)(()=>e.A(147903),{loadableGenerated:{modules:[330260]},ssr:!1});e.s(["f",0,e=>{let{children:u,inverted:b,paddingTop:y=!1}=e,g=(0,o.usePathname)(),{isLeftSidebarOpen:C,toggleLeftSidebar:v,isRightSidebarOpen:w,rightSidebarData:j,closeRightSidebar:$,leftSidebarScrollRef:W}=(0,n.i)(),_=(0,l.useRef)(null),S=(0,l.useRef)(null),T=(0,r.f)(`(max-width: ${d.h}px)`);(0,l.useEffect)(()=>{S.current?.scrollTo?.({top:0})},[g]);let{contextActions:M}=(0,f.R)(),{openOverlay:A}=(0,x.S)(),{userContext:I}=(0,k.f)(),L=(0,m.f)(I?.role);(0,l.useEffect)(()=>{let e=_.current;if(!e)return;e.scrollTop=W.current;let t=()=>{W.current=e.scrollTop};return e.addEventListener("scroll",t,{passive:!0}),()=>{e.removeEventListener("scroll",t)}},[W]),(0,l.useEffect)(()=>{let e=(0,el.I)(),t=t=>{if(!t.key)return;let i=t.key.toLowerCase(),a="k"===i&&(t.ctrlKey||t.metaKey)&&!t.altKey;(a||!t.ctrlKey&&!t.metaKey&&!t.altKey&&"s"===i)&&(!a&&e.get()||(0,el.e)()||(t.preventDefault(),A(x.v.SEARCH)))};return document.addEventListener("keydown",t),()=>{document.removeEventListener("keydown",t),e.dispose()}},[A]);let R=(0,l.useCallback)(e=>{let t=e.target;t.closest("a")||t.closest("button")||v()},[v]);return(0,t.jsxs)(i.F,{className:e.className,"data-testid":"with-sidebar-root","data-frame":e.framed?"app":"page",children:[(0,t.jsx)(a.f,{navigation:!1,inverted:b}),(0,t.jsxs)(i.s,{children:[(0,t.jsx)(i.r,{ref:_,$isOpen:C,onClick:R,"data-testid":"sidebar-left","data-open":C?"true":"false",children:!T&&(0,t.jsx)(s.f,{pathname:g,isSidebarOpen:C})}),(0,t.jsx)(i.v,{ref:S,$isOpen:C,$isRightOpen:w,$paddingTop:y,children:u}),(0,t.jsx)(i.I,{$isOpen:w,"data-testid":"sidebar-right",children:w&&j&&(0,t.jsx)(es,{data:j,onClose:$})})]}),L&&(0,t.jsx)(p.f,{triggerKey:"q",actions:M,centerElement:(0,t.jsx)(h.f,{})}),(0,t.jsx)(c.AppMobileMenu,{}),(0,t.jsx)(q,{}),(0,t.jsx)(en,{})]})}],932823)},792245,683694,e=>{var t=e.i(997053),i=e.i(551195);let a="0 0 12px rgba(0, 0, 0, 0.08)",o=t.m`
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`,n=t.U.div.withConfig({displayName:"WithSidebar.styles__Root",componentId:"sc-c0fa53b5-0"})`
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  /* #1081: Mobil scrollt das Dokument (Header und BottomTabBar sind fixed,
     MainWrapper trägt dafür padding-top/-bottom). Mit 100vh + overflow hidden
     war die Seite unter 1024 px gar nicht scrollbar — und jedes fokussierte
     Element (z. B. das Seitengrößen-Feld der Pagination) zog den versteckten
     Überlauf ans Ende der Liste. */
  @media only screen and (max-width: 1024px) {
    height: auto;
    min-height: 100vh;
    overflow: visible;
  }
`,l=t.U.div.withConfig({displayName:"WithSidebar.styles__MainWrapper",componentId:"sc-c0fa53b5-1"})`
  flex: 1;
  display: flex;
  flex-direction: row;
  height: calc(100vh - 56px);
  overflow: hidden;
  position: relative;

  @media only screen and (max-width: 1024px) {
    flex-direction: column;
    padding-top: 56px;
    padding-bottom: calc(50px + env(safe-area-inset-bottom, 0px));
    height: auto;
    overflow: visible;
  }
`,s=t.U.aside.withConfig({displayName:"WithSidebar.styles__SidebarLeft",componentId:"sc-c0fa53b5-2"})`
  /* #1074: ohne border-box ist das Element 100% + padding-top hoch; MainWrapper
     (overflow: hidden) schnitt dadurch den unteren Rand — den sticky Footer mit
     dem Collapse-Button — ab. Die mobile Variante nutzt fixed top/bottom und
     bleibt davon unberührt. */
  box-sizing: border-box;
  padding-top: 20px;
  display: flex;
  background: linear-gradient(
    to right,
    ${({theme:e})=>e.palette.sidebar.gradientStart},
    ${({theme:e})=>e.palette.sidebar.gradientEnd}
  );
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  position: relative;
  z-index: 60;
  box-shadow: ${a};
  cursor: ${e=>e.$isOpen?"w-resize":"e-resize"};

  /* #2029: schmal keine Überlagerung mehr — die Navigation steht im mobilen
     Menü (AppMobileMenu im MobileMenuShell), die Leiste bleibt verborgen. */
  @media only screen and (max-width: 1024px) {
    display: none;
  }

  /* Desktop: toggle width — ab 1025 px, bei 1024 px gilt das mobile Menü (#2029) */
  @media only screen and (min-width: 1025px) {
    display: flex;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    ${o}
    width: ${e=>e.$isOpen?"265px":"50px"};
    transition: width 0.3s ease-in-out;
  }

  ${i.s} {
    cursor: pointer;

    /* Style text labels, but not tooltips */
    span:not([data-testid='tooltip-root']) {
      display: ${e=>e.$isOpen?"flex":"none"};
      margin-left: 10px;
    }
  }
`,c=t.U.aside.withConfig({displayName:"WithSidebar.styles__SidebarRight",componentId:"sc-c0fa53b5-3"})`
  /* #1748: Theme-Fläche statt festem Weiß — im Dark Mode blieb die Vorschau sonst weiß */
  background-color: ${e=>e.theme.palette.default.white};
  border-left: 1px solid ${e=>e.theme.palette.default.greyLight};
  box-shadow: ${e=>e.$isOpen?a:"none"};
  overflow-y: auto;
  overflow-x: hidden;
  transition:
    width 0.3s ease-in-out,
    min-width 0.3s ease-in-out;
  position: relative;
  z-index: 50;

  /* Desktop: integrated in flex row */
  @media only screen and (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: ${e=>e.$isOpen?"400px":"0"};
    min-width: ${e=>e.$isOpen?"400px":"0"};
  }

  /* Mobile: integrated in layout flow */
  @media only screen and (max-width: 1024px) {
    position: fixed;
    top: 56px;
    right: 0;
    bottom: calc(50px + env(safe-area-inset-bottom, 0px));
    width: ${e=>e.$isOpen?"100%":"0"};
    max-width: 400px;
    z-index: 200;
  }
`,r=t.U.main.withConfig({displayName:"WithSidebar.styles__Main",componentId:"sc-c0fa53b5-4"})`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-top: ${e=>!1!==e.$paddingTop?"80px":"20px"};
  padding-bottom: 80px;
  position: relative;
  overflow-y: auto;
  ${o}
  box-shadow:
    inset 0 0 12px rgba(0, 0, 0, 0.08),
    ${e=>e.$isRightOpen?"inset 0 0 12px rgba(0, 0, 0, 0.08)":"inset 0 0 0 transparent"};

  /* Mobile: full width with default theme padding */
  @media only screen and (max-width: 1024px) {
    width: 100%;
    padding-top: ${e=>e.theme.padding.default};
  }

  /* Desktop: adjust width based on sidebar state (ab 1025 px wie SidebarLeft, #2029) */
  @media only screen and (min-width: 1025px) {
    width: ${e=>{let t=e.$isOpen?265:50,i=400*!!e.$isRightOpen;return`calc(100% - ${t}px - ${i}px)`}};
    transition: width 0.3s ease-in-out;
  }
`,d=t.U.div.withConfig({displayName:"WithSidebar.styles__MainTopSpacer",componentId:"sc-c0fa53b5-5"})`
  flex-shrink: 0;
  height: 60px;

  @media only screen and (max-width: 1024px) {
    display: none;
  }
`;e.s(["v",0,r,"u",0,d,"s",0,l,"F",0,n,"r",0,s,"I",0,c],792245),e.i(974719),e.i(806880),e.s([],683694)},288872,e=>{var t=e.i(843476),i=e.i(271645);let a=(0,i.createContext)(void 0);e.s(["v",0,{SEARCH:"search",QUICK_WHEEL_Q:"quickwheel-q",QUICK_WHEEL_E:"quickwheel-e",QUICK_WHEEL_A:"quickwheel-a",MODAL:"modal",PIA_CHAT:"pia-chat"},"F",0,function({children:e}){let[o,n]=(0,i.useState)(null),l=(0,i.useCallback)(e=>{n(e)},[]),s=(0,i.useCallback)(()=>{n(null)},[]),c=(0,i.useCallback)(e=>o===e,[o]);return(0,t.jsx)(a.Provider,{value:{activeOverlayId:o,openOverlay:l,closeOverlay:s,isOverlayOpen:c},children:e})},"S",0,function(){let e=(0,i.useContext)(a);if(void 0===e)throw Error("useOverlay must be used within an OverlayProvider");return e}])},790490,406039,82854,142060,166506,e=>{var t=e.i(843476),i=e.i(271645),a=e.i(618566),o=e.i(770703),n=e.i(894113),l=e.i(765691),s=e.i(674781),c=e.i(223963),r=e.i(844771),d=e.i(216579),u=e.i(912792),p=e.i(293655),h=e.i(912381),f=e.i(201927),k=e.i(959116),m=e.i(160225),x=e.i(29272),b=e.i(727578),y=e.i(963645),g=e.i(215063),C=e.i(997053);let v=C.U.svg.withConfig({displayName:"IconFire.styles__Root",componentId:"sc-27e9052c-0"})``,w=e=>(0,t.jsxs)(v,{className:e.className,"data-testid":"icon-fire-root",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:[(0,t.jsx)("title",{children:"energy"}),(0,t.jsx)("g",{fill:"currentColor",strokeLinejoin:"miter",strokeLinecap:"butt",children:(0,t.jsx)("path",{d:"M14.182,9.966S15.125,4.412,11.273,2A6.8,6.8,0,0,1,8.709,6.92C7.063,8.368,3.967,11.616,4,15.089a7.962,7.962,0,0,0,4.368,7.164,5.046,5.046,0,0,1,1.765-3.487A4.113,4.113,0,0,0,11.71,16a7.412,7.412,0,0,1,3.926,6.179V22.2a7.449,7.449,0,0,0,4.336-6.463A11.574,11.574,0,0,0,17.309,8",fill:"none",stroke:"currentColor",strokeLinecap:"square",strokeMiterlimit:"10",strokeWidth:"2"})})]});w.displayName="IconFire",e.s(["f",0,w],406039);var j=e.i(227319),$=e.i(26819),W=e.i(217568),_=e.i(246601);let S=C.U.svg.withConfig({displayName:"IconCorrelation.styles__Root",componentId:"sc-b6398bce-0"})``,q=e=>(0,t.jsxs)(S,{className:e.className,"data-testid":"icon-correlation-root",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[(0,t.jsx)("title",{children:"chart-stacked-line"}),(0,t.jsxs)("g",{fill:"currentColor",strokeLinecap:"square",strokeLinejoin:"miter",strokeMiterlimit:"10",children:[(0,t.jsx)("path",{d:"M2 14L17.2727 21L22 12",stroke:"currentColor",strokeWidth:"2",fill:"none"}),(0,t.jsx)("path",{d:"M2.0001 22L8.50006 10.3306L12.0449 11.9689L15.5897 13.6073L22.0001 2",stroke:"currentColor",strokeWidth:"2",fill:"none"})]})]});e.s(["f",0,q],82854);var T=e.i(513865),M=e.i(696986),A=e.i(437992);let I=function(){let e={};for(let[t,i]of Object.entries(c.j))if(i)for(let a of Object.keys(i)){let i=e[a]??[];i.push(t),e[a]=i}return e}();function L(e){let t={};for(let[i,a]of Object.entries(e))null!=a&&""!==a&&(t[i]=a);return t}function R(e,t,i){let a=r.i[e]?.targets.find(e=>e.id===t);return a&&i?(0,r._)(a,i):{}}function O(e){return"create"!==e.actionType||!e.entityType||(0,c.s)(e.entityType)}function E(e,t){return[{id:"home",label:t("quickWheel.actions.home"),icon:d.J.Home,onClick:()=>e.push("/")},{id:"search",label:t("quickWheel.actions.search"),icon:d.J.Search,onClick:()=>e.push("/search")},{id:"tasks",label:t("quickWheel.actions.tasks"),icon:d.J.Tasks,onClick:()=>e.push(u.n.TASKS)},{id:"cases",label:t("quickWheel.actions.cases"),icon:d.J.Cases,onClick:()=>e.push(u.n.CASES)},{id:"accounts",label:t("quickWheel.actions.accounts"),icon:d.J.Accounts,onClick:()=>e.push(u.n.ACCOUNTS)},{id:"opportunities",label:t("quickWheel.actions.opportunities"),icon:d.J.Opportunities,onClick:()=>e.push(u.n.OPPORTUNITIES)},{id:"orders",label:t("quickWheel.actions.orders"),icon:d.J.Orders,onClick:()=>e.push(u.n.ORDERS)}]}let N=["/","/search","/tasks","/cases","/accounts","/contacts","/opportunities","/orders","/admin"];var P=e.i(882109);function V(e,t,i){return!!e?.role&&!!t&&(0,P.A)(e,t,i)}e.s(["y",0,V,"h",0,function(e,t){return!!e&&t.includes(e)}],142060);var U=e.i(24024),B=e.i(408797);e.i(821194);var H=e.i(99222),K=e.i(145896),z=e.i(885895),D=e.i(993510),Q=e.i(48866),F=e.i(132692),Y=e.i(198883),J=e.i(43856),G=e.i(93338),X=e.i(193508),Z=e.i(202355);e.i(456637);var ee=e.i(208947),et=e.i(275578),ei=e.i(252662),ea=e.i(587862),eo=e.i(74950);let en=C.U.svg.withConfig({displayName:"IconQrCode.styles__Root",componentId:"sc-e6de92a1-0"})``,el=e=>(0,t.jsxs)(en,{className:e.className,"data-testid":"icon-qrcode-root",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[(0,t.jsx)("title",{children:"qrcode"}),(0,t.jsxs)("g",{fill:"currentColor",strokeLinecap:"square",strokeLinejoin:"miter",children:[(0,t.jsx)("rect",{x:"3",y:"3",width:"7",height:"7",stroke:"currentColor",strokeWidth:"2",fill:"none",strokeLinecap:"butt"}),(0,t.jsx)("rect",{x:"14",y:"3",width:"7",height:"7",stroke:"currentColor",strokeWidth:"2",fill:"none",strokeLinecap:"butt"}),(0,t.jsx)("rect",{x:"3",y:"14",width:"7",height:"7",stroke:"currentColor",strokeWidth:"2",fill:"none",strokeLinecap:"butt"}),(0,t.jsx)("path",{d:"M14 14H18M19 14V19H21M19 14H21M19 14H18M18 14V16H16",stroke:"currentColor",strokeWidth:"2",fill:"none"}),(0,t.jsx)("path",{d:"M14 18V21H17",stroke:"currentColor",strokeWidth:"2",fill:"none"}),(0,t.jsx)("path",{d:"M6.5 6.5H6.51",stroke:"currentColor",strokeWidth:"2",fill:"none"}),(0,t.jsx)("path",{d:"M6.5 17.5H6.51",stroke:"currentColor",strokeWidth:"2",fill:"none"}),(0,t.jsx)("path",{d:"M17.49 6.5H17.5",stroke:"currentColor",strokeWidth:"2",fill:"none"})]})]});e.s(["f",0,el],166506);let es=C.U.svg.withConfig({displayName:"IconBug.styles__Root",componentId:"sc-c144c230-0"})``,ec=e=>(0,t.jsxs)(es,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",className:e.className,"data-testid":"icon-bug-root",children:[(0,t.jsx)("path",{d:"M8 8V7a4 4 0 1 1 8 0v1",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",fill:"none"}),(0,t.jsx)("rect",{x:"6",y:"8",width:"12",height:"12",rx:"6",stroke:"currentColor",strokeWidth:"2",fill:"none"}),(0,t.jsx)("line",{x1:"12",y1:"8",x2:"12",y2:"20",stroke:"currentColor",strokeWidth:"2"}),(0,t.jsx)("line",{x1:"6",y1:"14",x2:"18",y2:"14",stroke:"currentColor",strokeWidth:"2"}),(0,t.jsx)("path",{d:"M5 11L2 9",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}),(0,t.jsx)("path",{d:"M19 11L22 9",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}),(0,t.jsx)("path",{d:"M5 17L2 19",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}),(0,t.jsx)("path",{d:"M19 17L22 19",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}),(0,t.jsx)("path",{d:"M5 14H2",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}),(0,t.jsx)("path",{d:"M22 14H19",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})]});var er=e.i(357346);function ed(e){let[t,a]=(0,i.useState)(e);return e&&!t&&a(!0),t||e}let eu=(0,o.default)(()=>e.A(288489).then(e=>e.QRScannerModal),{loadableGenerated:{modules:[817254]},ssr:!1}),ep=(0,o.default)(()=>e.A(636086).then(e=>e.BugReportModal),{loadableGenerated:{modules:[124382]},ssr:!1}),eh=(0,i.createContext)(void 0);e.s(["Y",0,function({children:e}){let o=(0,a.useRouter)(),{pageIdentity:r}=(0,s.s)(),C=r.pathname,{openCreateModal:v}=(0,n.E)(),{language:S}=(0,z.N)(),{tr:P}=(0,H.f)(S),{revision:en}=(0,K.V)(),[es,ef]=(0,i.useState)(!1),[ek,em]=(0,i.useState)(!1),ex=ed(es),eb=ed(ek),ey=(0,D.f)(),eg=(0,i.useCallback)(e=>{o.push(`/plastrack?box=${encodeURIComponent(e)}`)},[o]),{userContext:eC}=(0,U.f)(),ev=eC?.role==="admin",ew=(0,i.useCallback)(e=>V(eC,(0,B.f)(e),"create"),[eC]),ej=(0,i.useCallback)(e=>V(eC,(0,B.f)(e),"edit"),[eC]),e$=(0,i.useMemo)(()=>[{entityType:l.f.Task,labelKey:"quickWheel.create.task",icon:(0,t.jsx)(b.f,{})},{entityType:l.f.Case,labelKey:"quickWheel.create.case",icon:(0,t.jsx)(J.f,{})},{entityType:l.f.Project,labelKey:"quickWheel.create.project",icon:(0,t.jsx)(X.f,{})},{entityType:l.f.Account,labelKey:"quickWheel.create.account",icon:(0,t.jsx)(x.f,{})},{entityType:l.f.Contact,labelKey:"quickWheel.create.contact",icon:(0,t.jsx)(m.f,{})},{entityType:l.f.Order,labelKey:"quickWheel.create.order",icon:(0,t.jsx)(Z.f,{})},{entityType:l.f.Opportunity,labelKey:"quickWheel.create.opportunity",icon:(0,t.jsx)(G.f,{})},{entityType:l.f.SampleSending,labelKey:"quickWheel.create.sample",icon:(0,t.jsx)(W.f,{})}].filter(e=>ew(e.entityType)).map(e=>({id:`create-${e.entityType.toLowerCase()}`,label:P(e.labelKey),icon:e.icon,onClick:()=>v({entityType:e.entityType})})),[v,P,en,ew]),eW=(0,i.useMemo)(()=>[{id:"admin-dashboard",label:P("quickWheel.admin.admin"),icon:(0,t.jsx)(F.f,{}),onClick:()=>o.push("/admin")},{id:"admin-finance",label:P("quickWheel.admin.finance"),icon:(0,t.jsx)(ee.f,{}),onClick:()=>o.push("/finance")},{id:"admin-git",label:P("quickWheel.admin.git"),icon:(0,t.jsx)(et.f,{}),onClick:()=>o.push("/git")},{id:"admin-usage",label:P("quickWheel.admin.usage",{defaultValue:"Nutzung"}),icon:(0,t.jsx)(Y.f,{}),onClick:()=>o.push(u.n.USAGE)},{id:"admin-access-management",label:P("quickWheel.admin.accessManagement"),icon:(0,t.jsx)(ei.f,{}),onClick:()=>o.push("/access-management")},{id:"admin-plastrack",label:P("quickWheel.admin.plastrack"),icon:(0,t.jsx)(ea.f,{size:24}),onClick:()=>o.push("/plastrack")},{id:"admin-users",label:P("quickWheel.admin.users"),icon:(0,t.jsx)(eo.f,{}),onClick:()=>o.push(u.n.USERS)}],[o,P,en]),[e_,eS]=(0,i.useState)(null),eq=(0,i.useRef)(void 0),eT=(0,i.useCallback)((e,t)=>{eq.current=t,eS(t=>t===e?t:e)},[]),eM=(0,i.useMemo)(()=>{var e,i,a,n;let s=[];e$.length>0&&s.push({id:"create-menu",label:P("quickWheel.actions.create")||"Create",icon:(0,t.jsx)(Q.f,{}),onClick:()=>{},subActions:e$}),ev&&s.push({id:"admin-menu",label:P("quickWheel.actions.admin")||"Admin",icon:(0,t.jsx)(F.f,{}),onClick:()=>{},subActions:eW}),s.push({id:"qr-scan",label:P("quickWheel.actions.scanQR",{defaultValue:"Scan QR"}),icon:(0,t.jsx)(el,{}),onClick:()=>ef(!0)}),ev&&s.push({id:"report-bug",label:P("quickWheel.actions.reportBug",{defaultValue:"Report Bug"}),icon:(0,t.jsx)(ec,{}),onClick:()=>em(!0)}),ew(l.f.Prozessfeedback)&&s.push({id:"prozessfeedback",label:P("quickWheel.actions.prozessfeedback",{defaultValue:"Prozessfeedback"}),icon:(0,t.jsx)(er.f,{}),onClick:ey});let u=[];if(r.entityType&&r.entityId&&(e=C||"/",N.includes(e)||1===e.split("/").filter(Boolean).length?0:1)){let e=(i=r.entityType,(function(e,i,a,o){var n,s,c,r,u,h,C,v,S,I,O,E,N,P,V,U,B,H,K,z,D,Q,F,Y,J,G,X,Z,ee,et,ei,ea,eo,en,el,es,ec,er,ed,eu,ep,eh,ef,ek,em,ex,eb,ey,eg,eC,ev,ew,ej,e$,eW,e_,eS,eq,eT,eM,eA,eI,eL,eR,eO,eE,eN;let{router:eP,tr:eV,onStatusChange:eU,onFileUpload:eB,openCreateModal:eH}=o;switch(e){case l.f.Account:let eK,ez;return n=i,s=a,c=eP,(eK=[]).push({id:"view-contacts",label:(r=eV)("quickWheel.actions.contacts"),icon:(0,t.jsx)(m.f,{}),actionType:"navigate",onClick:()=>c.push(`/contacts?accountId=${n}`)}),eK.push({id:"view-opportunities",label:r("quickWheel.actions.opportunities"),icon:d.J.Opportunities,actionType:"navigate",onClick:()=>c.push(`/opportunities?accountId=${n}`)}),eK.push({id:"view-cases",label:r("quickWheel.actions.cases"),icon:d.J.Cases,actionType:"navigate",onClick:()=>c.push(`/cases?accountId=${n}`)}),eK.push({id:"view-orders",label:r("quickWheel.actions.orders"),icon:d.J.Orders,actionType:"navigate",onClick:()=>c.push(`/orders?accountId=${n}`)}),(ez=s?.Email__c)&&eK.push({id:"send-email",label:r("quickWheel.actions.email"),icon:(0,t.jsx)(y.f,{}),actionType:"navigate",onClick:()=>(0,A.i)(`mailto:${ez}`)}),eK;case l.f.Contact:let eD,eQ,eF,eY;return u=i,h=a,C=eP,v=eV,S=eH,eD=[],(eQ=h?.AccountId)&&eD.push({id:"view-account",label:v("quickWheel.actions.account"),icon:(0,t.jsx)(x.f,{}),actionType:"navigate",onClick:()=>C.push(`/account/${eQ}`)}),(eF=h?.Phone)&&eD.push({id:"call-contact",label:v("quickWheel.actions.call"),icon:(0,t.jsx)(g.f,{}),actionType:"navigate",onClick:()=>(0,A.i)(`tel:${eF}`)}),(eY=h?.Email)&&eD.push({id:"send-email",label:v("quickWheel.actions.email"),icon:(0,t.jsx)(y.f,{}),actionType:"navigate",onClick:()=>(0,A.i)(`mailto:${eY}`)}),S&&eD.push({id:"log-activity",label:v("quickWheel.actions.logActivity"),icon:(0,t.jsx)(b.f,{}),actionType:"create",entityType:l.f.Task,onClick:()=>S({entityType:l.f.Task,initialValues:L({WhoId:u,WhatId:eQ})})}),eD;case l.f.Opportunity:let eJ,eG,eX,eZ;return I=a,O=eP,E=eV,N=eU,eJ=[],(eG=I?.AccountId)&&eJ.push({id:"view-account",label:E("quickWheel.actions.account"),icon:(0,t.jsx)(x.f,{}),actionType:"navigate",onClick:()=>O.push(`/account/${eG}`)}),(eX=I?.ContactId)&&eJ.push({id:"view-contact",label:E("quickWheel.actions.contact"),icon:(0,t.jsx)(m.f,{}),actionType:"navigate",onClick:()=>O.push(`/contact/${eX}`)}),eZ=I?.StageName,N&&"Closed Won"!==eZ&&"Closed Lost"!==eZ&&(eJ.push({id:"mark-won",label:E("quickWheel.actions.won"),icon:(0,t.jsx)(f.f,{}),onClick:()=>N("Closed Won")}),eJ.push({id:"mark-lost",label:E("quickWheel.actions.lost"),icon:(0,t.jsx)(k.f,{}),onClick:()=>N("Closed Lost")})),eJ;case l.f.Case:let e0,e1,e2,e5;return P=a,V=eP,U=eV,B=eU,e0=[],(e1=P?.AccountId)&&e0.push({id:"view-account",label:U("quickWheel.actions.account"),icon:(0,t.jsx)(x.f,{}),actionType:"navigate",onClick:()=>V.push(`/account/${e1}`)}),(e2=P?.ContactId)&&e0.push({id:"view-contact",label:U("quickWheel.actions.contact"),icon:(0,t.jsx)(m.f,{}),actionType:"navigate",onClick:()=>V.push(`/contact/${e2}`)}),e5=P?.Status,B&&("Closed"!==e5&&e0.push({id:"resolve-case",label:U("quickWheel.actions.resolve"),icon:(0,t.jsx)(f.f,{}),onClick:()=>B("Closed")}),"Escalated"!==e5&&e0.push({id:"escalate-case",label:U("quickWheel.actions.escalate"),icon:(0,t.jsx)(w,{}),onClick:()=>B("Escalated")})),e0;case l.f.Task:return function(e,i,a,o,n){let s=[];"Completed"!==e?.Status&&o&&s.push({id:"complete-task",label:a("quickWheel.actions.complete"),icon:(0,t.jsx)(f.f,{}),onClick:()=>o("Completed")});let c=e?.WhoId;if(c){let e=(0,p.G)(c);e&&s.push({id:"view-contact",label:a("quickWheel.actions.contact"),icon:(0,t.jsx)(m.f,{}),actionType:"navigate",onClick:()=>i.push(e)})}let r=e?.WhatId;if(r){let e=(0,p.G)(r);e&&s.push({id:"view-related",label:a("quickWheel.actions.related"),icon:(0,t.jsx)(x.f,{}),actionType:"navigate",onClick:()=>i.push(e)})}return n&&s.push({id:"create-followup",label:a("quickWheel.actions.followUp"),icon:(0,t.jsx)(b.f,{}),actionType:"create",entityType:l.f.Task,onClick:()=>n({entityType:l.f.Task,initialValues:L({WhoId:c,WhatId:r,Subject:`Follow-up: ${e?.Subject||"Task"}`})})}),s.push({id:"reschedule",label:a("quickWheel.actions.reschedule"),icon:(0,t.jsx)($.f,{}),onClick:()=>{let e=document.querySelector('[data-field-name="ActivityDate"]');if(e){e.scrollIntoView({behavior:"smooth",block:"center"});let t=e.querySelector("[data-editable]");t&&t.click()}}}),s}(a,eP,eV,eU,eH);case l.f.Order:let e4,e6,e9;return H=a,K=eP,z=eV,D=eB,e4=[],(e6=H?.AccountId)&&e4.push({id:"view-account",label:z("quickWheel.actions.account"),icon:(0,t.jsx)(x.f,{}),actionType:"navigate",onClick:()=>K.push(`/account/${e6}`)}),(e9=H?.OpportunityId)&&e4.push({id:"view-opportunity",label:z("quickWheel.actions.opportunity"),icon:d.J.Opportunities,actionType:"navigate",onClick:()=>K.push(`/opportunity/${e9}`)}),D&&e4.push({id:"upload-file",label:z("quickWheel.actions.upload"),icon:(0,t.jsx)(T.f,{}),onClick:D}),e4;case l.f.Invoice:let e8,e3,e7,te;return Q=a,F=eP,Y=eV,J=eU,G=eB,e8=[],(e3=Q?.Order__c)&&e8.push({id:"view-order",label:Y("quickWheel.actions.order"),icon:d.J.Orders,actionType:"navigate",onClick:()=>F.push(`/order/${e3}`)}),(e7=Q?.Account__c)&&e8.push({id:"view-account",label:Y("quickWheel.actions.account"),icon:(0,t.jsx)(x.f,{}),actionType:"navigate",onClick:()=>F.push(`/account/${e7}`)}),G&&e8.push({id:"upload-file",label:Y("quickWheel.actions.upload"),icon:(0,t.jsx)(T.f,{}),onClick:G}),te=Q?.Status_der_Abrechnung__c,J&&"Bezahlt"!==te&&e8.push({id:"mark-paid",label:Y("quickWheel.actions.paid"),icon:(0,t.jsx)(f.f,{}),onClick:()=>J("Bezahlt")}),e8;case l.f.Project:let tt,ti,ta;return X=i,Z=a,ee=eP,et=eV,ei=eU,ea=eB,tt=[],(ti=Z?.Account__c)&&tt.push({id:"view-account",label:et("quickWheel.actions.account"),icon:(0,t.jsx)(x.f,{}),actionType:"navigate",onClick:()=>ee.push(`/account/${ti}`)}),ea&&tt.push({id:"upload-file",label:et("quickWheel.actions.upload"),icon:(0,t.jsx)(T.f,{}),onClick:ea}),ta=Z?.Status__c,ei&&("Inaktiv"!==ta&&tt.push({id:"complete-project",label:et("quickWheel.actions.complete"),icon:(0,t.jsx)(f.f,{}),onClick:()=>ei("Inaktiv")}),"Pausiert"!==ta&&tt.push({id:"hold-project",label:et("quickWheel.actions.hold"),icon:(0,t.jsx)(j.f,{}),onClick:()=>ei("Pausiert")})),tt.push({id:"view-timeline",label:et("quickWheel.actions.timeline"),icon:(0,t.jsx)($.f,{}),actionType:"navigate",onClick:()=>ee.push(`/project/${X}/timeline`)}),tt;case l.f.MaterialProposal:let to,tn,tl;return eo=a,en=eP,el=eV,es=eU,ec=eH,to=[],(tn=eo?.Account__c)&&to.push({id:"view-account",label:el("quickWheel.actions.account"),icon:(0,t.jsx)(x.f,{}),onClick:()=>en.push(`/account/${tn}`)}),tl=eo?.Status__c,es&&("Accepted"!==tl&&to.push({id:"accept-proposal",label:el("quickWheel.actions.accept"),icon:(0,t.jsx)(f.f,{}),onClick:()=>es("Approved")}),"Rejected"!==tl&&to.push({id:"reject-proposal",label:el("quickWheel.actions.reject"),icon:(0,t.jsx)(k.f,{}),onClick:()=>es("Rejected")})),ec&&to.push({id:"create-sample",label:el("quickWheel.actions.sample"),icon:(0,t.jsx)(W.f,{}),actionType:"create",entityType:l.f.SampleSending,onClick:()=>ec({entityType:l.f.SampleSending,initialValues:R("Material_Proposal__c","ss-musterversand",eo)})}),to;case l.f.MaterialAnalysis:let ts,tc;return er=i,ed=a,eu=eP,ep=eV,eh=eB,ts=[],(tc=ed?.Account__c)&&ts.push({id:"view-account",label:ep("quickWheel.actions.account"),icon:(0,t.jsx)(x.f,{}),actionType:"navigate",onClick:()=>eu.push(`/account/${tc}`)}),eh&&ts.push({id:"upload-file",label:ep("quickWheel.actions.upload"),icon:(0,t.jsx)(T.f,{}),onClick:eh}),ts.push({id:"view-analytics",label:ep("quickWheel.actions.analytics"),icon:d.J.Analytics,actionType:"navigate",onClick:()=>eu.push(`/material-analysis/${er}/analytics`)}),ts;case l.f.MonitoredMaterial:let tr,td;return ef=i,ek=a,em=eP,ex=eV,eb=eH,tr=[],(td=ek?.Lieferant__c)&&tr.push({id:"view-supplier",label:ex("quickWheel.actions.supplier"),icon:(0,t.jsx)(x.f,{}),onClick:()=>em.push(`/account/${td}`)}),eb&&(tr.push({id:"add-pricing",label:ex("quickWheel.actions.price"),icon:d.J.Orders,actionType:"create",entityType:l.f.AktuellerPreisUndVerfugbarkeit,onClick:()=>eb({entityType:l.f.AktuellerPreisUndVerfugbarkeit,initialValues:L({Produkt__c:ek?.Produkt__c})})}),tr.push({id:"create-proposal",label:ex("quickWheel.actions.proposal"),icon:(0,d.H)(l.f.MaterialProposal),actionType:"create",entityType:l.f.MaterialProposal,onClick:()=>eb({entityType:l.f.MaterialProposal,initialValues:L({Product__c:ek?.Produkt__c})})})),tr.push({id:"update-material",label:ex("quickWheel.actions.update"),icon:(0,t.jsx)($.f,{}),onClick:()=>{let e=document.querySelector('[data-field-name="Lagerort__c"]')||document.querySelector('[data-field-name="Menge_Lager__c"]')||document.querySelector('[data-field-name="Price__c"]');if(e){e.scrollIntoView({behavior:"smooth",block:"center"});let t=e.querySelector("[data-editable]");t&&t.click()}}}),tr.push({id:"view-analytics",label:ex("quickWheel.actions.analytics"),icon:d.J.Analytics,onClick:()=>em.push(`/monitored-material/${ef}/analytics`)}),tr.push({id:"quality-correlations",label:ex("quickWheel.actions.quality"),icon:(0,t.jsx)(q,{}),onClick:()=>em.push("/quality-correlations")}),tr;case l.f.Requirement:let tu,tp;return ey=i,eg=a,eC=eP,ev=eV,ew=eB,ej=eH,tu=[],(tp=eg?.Account__c)&&tu.push({id:"view-account",label:ev("quickWheel.actions.account"),icon:(0,t.jsx)(x.f,{}),actionType:"navigate",onClick:()=>eC.push(`/account/${tp}`)}),ej&&tu.push({id:"create-proposal",label:ev("quickWheel.actions.proposal"),icon:(0,d.H)(l.f.MaterialProposal),actionType:"create",entityType:l.f.MaterialProposal,onClick:()=>ej({entityType:l.f.MaterialProposal,initialValues:{...L({F_r_Bedarf__c:ey}),...R("Bedarfe__c","material-proposal",eg)}})}),ew&&tu.push({id:"upload-file",label:ev("quickWheel.actions.upload"),icon:(0,t.jsx)(T.f,{}),onClick:ew}),tu.push({id:"find-materials",label:ev("quickWheel.actions.materials"),icon:(0,t.jsx)(M.f,{}),actionType:"navigate",onClick:()=>eC.push(`/monitored-materials?requirementId=${ey}`)}),tu;case l.f.SampleSending:let th,tf,tk,tm;return e$=i,eW=a,e_=eP,eS=eV,eq=eU,eT=eH,eM=eB,th=[],(tf=eW?.Account__c)&&th.push({id:"view-account",label:eS("quickWheel.actions.account"),icon:(0,t.jsx)(x.f,{}),actionType:"navigate",onClick:()=>e_.push(`/account/${tf}`)}),(tk=eW?.Contact__c)&&th.push({id:"view-contact",label:eS("quickWheel.actions.contact"),icon:(0,t.jsx)(m.f,{}),actionType:"navigate",onClick:()=>e_.push(`/contact/${tk}`)}),eM&&th.push({id:"upload-file",label:eS("quickWheel.actions.upload"),icon:(0,t.jsx)(T.f,{}),onClick:eM}),tm=eW?.Status__c,eq&&"Delivered"!==tm&&th.push({id:"mark-delivered",label:eS("quickWheel.actions.delivered"),icon:(0,t.jsx)(f.f,{}),onClick:()=>eq("Received")}),eT&&th.push({id:"request-feedback",label:eS("quickWheel.actions.feedback"),icon:(0,t.jsx)(_.f,{}),actionType:"create",entityType:l.f.SampleFeedback,onClick:()=>eT({entityType:l.f.SampleFeedback,initialValues:L({Sample_Sending__c:e$})})}),th;case l.f.SampleFeedback:let tx,tb,ty;return eA=a,eI=eP,eL=eV,eR=eU,tx=[],(tb=eA?.Sample_Sending__c)&&tx.push({id:"view-sample",label:eL("quickWheel.actions.sample"),icon:(0,t.jsx)(W.f,{}),onClick:()=>eI.push(`/sample-sending/${tb}`)}),ty=eA?.Status__c,eR&&"Submitted"!==ty&&tx.push({id:"submit-feedback",label:eL("quickWheel.actions.submit"),icon:(0,t.jsx)(f.f,{}),onClick:()=>eR("Sent")}),tx;case l.f.Onboarding:let tg,tC,tv;return eO=a,eE=eP,eN=eV,tg=[],(tC=eO?.Case__c)&&tg.push({id:"view-case",label:eN("quickWheel.actions.case"),icon:d.J.Cases,onClick:()=>eE.push(`/case/${tC}`)}),(tv=eO?.Account__c)&&tg.push({id:"view-account",label:eN("quickWheel.actions.account"),icon:(0,t.jsx)(x.f,{}),onClick:()=>eE.push(`/account/${tv}`)}),tg;default:return[]}})(i,r.entityId,e_||null,{router:o,tr:P,onStatusChange:eq.current,openCreateModal:v}).filter(O)).filter(e=>"navigate"===e.actionType||"view"===e.actionType||("create"===e.actionType&&e.entityType?ew(e.entityType):!!e.actionType||!r.entityType||ej(r.entityType)));if(e.length>0)u=e;else{let e=(a=r.entityType,n=r.entityId,(I[a]||[]).slice(0,8).filter(c.s).map(e=>({id:`create-${e.toLowerCase()}`,label:P?(0,h.m)(P,c.p[e]||e):c.p[e]||e,icon:(0,d.H)(e),entityType:e,actionType:"create",onClick:()=>v({entityType:e,parentEntityType:a,parentEntityId:n})}))).filter(e=>!e.entityType||ew(e.entityType));u=e.length>0?e:E(o,P)}}else u=E(o,P);let S=8-s.length;return s.push(...u.slice(0,S)),s},[e_,C,o,P,en,v,ew,ej,e$,eW,ev,r,ey]);return(0,t.jsxs)(eh.Provider,{value:{updateEntityData:eT,contextActions:eM},children:[e,ex&&(0,t.jsx)(eu,{isOpen:es,onClose:()=>ef(!1),onScan:eg}),eb&&(0,t.jsx)(ep,{isOpen:ek,onClose:()=>em(!1)})]})},"R",0,function(){let e=(0,i.useContext)(eh);if(void 0===e)throw Error("useQuickWheelActions must be used within a QuickWheelActionsProvider");return e}],790490)},748659,e=>{var t=e.i(843476),i=e.i(271645);let a=(0,i.createContext)(void 0);e.s(["M",0,function({children:e}){let[o,n]=(0,i.useState)(null),l=(0,i.useCallback)(e=>{n(e)},[]),s=(0,i.useCallback)(()=>{n(null)},[]),c=(0,i.useCallback)(e=>o===e,[o]);return(0,t.jsx)(a.Provider,{value:{activeWheelId:o,openWheel:l,closeWheel:s,isWheelOpen:c},children:e})},"W",0,function(){let e=(0,i.useContext)(a);if(void 0===e)throw Error("useQuickWheel must be used within a QuickWheelProvider");return e}])},640997,e=>{e.s(["f",0,function(e){return"admin"===e}])}])})();