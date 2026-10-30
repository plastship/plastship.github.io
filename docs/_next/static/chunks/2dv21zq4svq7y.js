(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,388354,798119,e=>{var i=e.i(843476),t=e.i(271645),a=e.i(864988),l=e.i(997053),d=e.i(547905);let s=l.q`
  from {
    opacity: 0;
    transform: scale(0) rotate(-14deg);
  }
  60% {
    opacity: 1;
  }
  to {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
`,r=l.U.div.withConfig({displayName:"HexTileReveal.styles__Root",componentId:"sc-7b3c4462-0"})`
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  /* Layout/Style/Paint bleiben in dieser Ebene — 1000+ Kacheln invalidieren nicht die Seite */
  contain: layout style paint;
`,n=l.U.div.withConfig({displayName:"HexTileReveal.styles__Tile",componentId:"sc-7b3c4462-1"})`
  position: absolute;
  left: var(--x);
  top: var(--y);
  width: var(--size);
  height: var(--size);
  transform: scale(0);
  opacity: 0;
  /* will-change bleibt: ohne Vorab-Ebene hebt Chromium jede Kachel erst beim
     Animationsstart auf den Compositor und malt neu — gemessen 41 statt 56 fps */
  will-change: transform, opacity;
  animation: ${s} var(--tile-duration) cubic-bezier(0.2, 0.8, 0.2, 1) both;
  animation-delay: var(--delay);
`,o=l.U.div.withConfig({displayName:"HexTileReveal.styles__TileFace",componentId:"sc-7b3c4462-2"})`
  position: absolute;
  inset: 0;
  ${d.p}
  background-image: var(--image);
  background-repeat: no-repeat;
  background-size: var(--bg-size);
  background-position: var(--bg-pos);
`;e.s(["f",0,({image:e,direction:l,duration:d,delay:s=0,columns:c=12,focusX:u=50,focusY:h=50,dataTestId:g="hex-tile-reveal",className:v})=>{let m=(0,t.useRef)(null),[p,f]=(0,t.useState)(null),x=(e=>{let[i,a]=(0,t.useState)(null);return(0,t.useEffect)(()=>{a(null);let i=new window.Image,t=!1;return i.onload=()=>{!t&&i.naturalWidth>0&&a({width:i.naturalWidth,height:i.naturalHeight})},i.src=e,i.complete&&i.naturalWidth>0&&a({width:i.naturalWidth,height:i.naturalHeight}),()=>{t=!0}},[e]),i})(e);(0,t.useEffect)(()=>{let e=m.current;if(!e)return;let i=()=>{let i=e.getBoundingClientRect();i.width>0&&i.height>0&&f({width:i.width,height:i.height})};if(i(),"u"<typeof ResizeObserver)return;let t=new ResizeObserver(i);return t.observe(e),()=>t.disconnect()},[]);let b=(0,t.useMemo)(()=>p&&x?(0,a.E)({width:p.width,height:p.height,imageWidth:x.width,imageHeight:x.height,columns:c,direction:l,duration:d,focus:{x:u,y:h}}):null,[p,x,c,l,d,u,h]);return(0,i.jsx)(r,{ref:m,className:v,"data-testid":g,"data-ready":b?"true":"false","data-tiles":b?.tiles.length??0,"aria-hidden":"true",children:b?.tiles.map(t=>(0,i.jsx)(n,{style:{"--x":`${t.x}px`,"--y":`${t.y}px`,"--size":`${t.size}px`,"--delay":`${s+t.delay}ms`,"--tile-duration":`${b.tileDuration}ms`,"--image":`url("${e}")`,"--bg-size":`${b.bgWidth}px ${b.bgHeight}px`,"--bg-pos":`${t.bgX}px ${t.bgY}px`},children:(0,i.jsx)(o,{"data-role":t.role,"data-side":t.side})},t.key))})}],798119),e.s([],388354)},114691,e=>{var i=e.i(843476),t=e.i(197908),a=e.i(271645),l=e.i(618566);e.i(352162);var d=e.i(515578);e.i(710788);var s=e.i(363451);e.i(307839);var r=e.i(585584);e.i(388354);var n=e.i(798119),o=e.i(587076),c=e.i(885895);e.i(821194);var u=e.i(99222),h=e.i(561695),g=e.i(435417),v=e.i(590464),m=e.i(829486),p=e.i(272038),f=e.i(693249),x=e.i(463437),b=e.i(720900),y=e.i(88255),$=e.i(240029),w=e.i(142207);e.i(311046);var j=e.i(52422),I=e.i(355351),S=e.i(691423);let T=({slides:e,autoplay:T=!0,autoplayDelay:z=7e3,transitionDuration:R=2400,tileColumns:C,initialIndex:V=0,onCtaClick:k,dataTestId:H="hero-slider",dataAttributes:P,pageHeading:L=!1,className:N,edges:_})=>{let A=(0,l.useRouter)(),{language:E}=(0,c.N)(),{tr:M}=(0,u.f)(E),W=e.length,K=(0,a.useRef)(null),O=(0,b.f)(K),U=(0,o.f)(),B=(0,p.f)({count:W,autoplay:T&&!U,autoplayDelay:z,transitionDuration:R,initialIndex:V,inView:O}),D=(0,x.f)(B.activeIndex,W),F=(0,a.useMemo)(()=>(0,m.J)(R),[R]),J=(0,a.useMemo)(()=>(0,m.g)(R),[R]),X=(0,a.useRef)(null),Y=(0,$.f)(K,40),q=C??Y.columns,G=(0,a.useMemo)(()=>(0,S.V)((0,j.L)(_),Y.width),[_,Y.width]),Q=Y.width>0?(0,j.w)(G,Y.width,q):(0,j.f)(G),Z=(0,g.V)(Y.width),ee=e[B.activeIndex]?.cta,{accentKeys:ei,onCellsChange:et}=(0,g.v)(!!ee),ea=(0,f.f)(B),el=(0,w.f)({onMove:(e,i)=>X.current?.move(e,i),onLeave:()=>X.current?.leave()}),ed=e=>e===B.activeIndex?"active":e===B.previousIndex?"leaving":"hidden";if(0===W)return null;let es=e=>M("heroSlider.slideOf",{defaultValue:"Slide {{index}} von {{count}}",index:e+1,count:W});return(0,i.jsxs)(h.F,{ref:K,className:N,...P,"data-testid":H,"data-columns":q,"data-active-index":B.activeIndex,"data-header-tone":e[B.activeIndex]?.tone,"data-transitioning":B.isTransitioning?"true":"false","data-edge-padding":Q,"data-page-hero":"true","data-hex-stage":"true",style:{"--edge-padding":`${Q}px`,"--hex-cell":`${(0,I.z)(Y.width,q)}px`},role:"region","aria-roledescription":M("heroSlider.roleCarousel",{defaultValue:"carousel"}),"aria-label":M("heroSlider.label",{defaultValue:"Bildergalerie"}),...ea.root,...el,children:[(0,i.jsxs)(h.A,{...ea.stage,children:[e.map((e,t)=>{let a=ed(t),l="active"!==a||0===B.cycle||U?"none":e.image?"tiles":"mask",d="tiles"===l&&B.isTransitioning&&!!e.image,s=e.alt??e.headline??"",r=D.has(t),o=e.image?(0,y.a)(e.image,y.f):void 0;return(0,i.jsxs)(h.E,{id:`${H}-slide-${t}`,"data-testid":`${H}-slide-${t}`,"data-state":a,role:"group","aria-roledescription":M("heroSlider.roleSlide",{defaultValue:"slide"}),"aria-label":es(t),"aria-hidden":"active"!==a,$state:a,$phase:F.image,$reveal:l,children:[(0,i.jsx)(h.G,{$state:a,$phase:F.image,$reveal:l,$hidden:d,children:e.video?(0,i.jsx)(h.M,{autoPlay:!0,muted:!0,loop:!0,playsInline:!0,preload:r?"auto":"none","aria-label":s,"data-testid":`${H}-slide-${t}-video`,children:r&&(0,i.jsx)("source",{src:e.video,type:"video/mp4","data-testid":`${H}-slide-${t}-video-source`})}):o?(0,i.jsx)(h.L,{src:r?o:void 0,srcSet:r&&e.image?(0,y.l)(e.image):void 0,sizes:y.r,alt:s,$focal:(0,S.A)(e.focalPoint),loading:r?"eager":"lazy",fetchPriority:r&&"active"!==a?"low":void 0,decoding:"async",draggable:!1,"data-testid":`${H}-slide-${t}-image`}):null}),d&&o&&(0,i.jsx)(h._,{children:(0,i.jsx)(n.f,{image:o,direction:B.direction,delay:F.image.delay,duration:F.image.duration,columns:q,focusX:(0,S.v)(e.focalPoint).x,focusY:(0,S.v)(e.focalPoint).y,dataTestId:`${H}-slide-${t}-tiles`})})]},t)}),ei.length>0&&(0,i.jsx)(h.R,{children:(0,i.jsx)(d.f,{width:Y.width,height:Y.height,columns:q,keys:ei,dataTestId:`${H}-halo`})}),W>0&&(0,i.jsx)(h.p,{children:(0,i.jsx)(r.f,{ref:X,columns:q,enabled:!U,accentKeys:ei,dataTestId:`${H}-hover-spot`})}),(0,i.jsx)(s.f,{edges:G,columns:q,zIndex:3,dataTestId:`${H}-edge`})]}),(0,i.jsxs)(h.k,{children:[e.map((e,t)=>e.headline||e.text||W>1?(0,i.jsx)(v.f,{slide:e,index:t,state:ed(t),timeline:0===B.cycle?J:F,columns:q,dataTestId:H,pageHeading:L&&0===t,cornerCta:!!e.cta,reservePagination:W>1?W:0,reserveArrows:Z},t):null),W>1&&(0,i.jsx)(g.I,{count:W,arrows:Z,slider:B,progressDuration:T?z:void 0,getLabel:es,prevLabel:M("heroSlider.previous",{defaultValue:"Vorheriger Slide"}),nextLabel:M("heroSlider.next",{defaultValue:"Nächster Slide"}),dataTestId:H})]}),ee&&(0,i.jsx)(g.S,{label:ee.label,activeIndex:B.activeIndex,onClick:()=>(i=>{let a=e[i];if(k)k(a,i);else{let e=(0,t.J)(a?.cta?.href);e&&A.push(e)}})(B.activeIndex),onCellsChange:et,dataTestId:H})]})};e.s(["HeroSlider",0,T,"default",0,T])}])})();