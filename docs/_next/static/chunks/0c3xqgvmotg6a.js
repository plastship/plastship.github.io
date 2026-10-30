(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,[879822,e=>{var i=e.i(997053),t=e.i(726029),a=e.i(547905);let n="640px",r="768px",l="48px",o="64px",s="32px",d="50px",c=i.U.section.withConfig({displayName:"CardSlider.styles__Root",componentId:"sc-9062f506-0"})`
  display: flex;
  flex-direction: column;
  gap: 32px;
  background-color: transparent;
`,p=i.U.div.withConfig({displayName:"CardSlider.styles__Stage",componentId:"sc-9062f506-1"})`
  position: relative;
  padding-top: ${s};

  @media (min-width: ${n}) {
    padding-top: 0;
  }
`,u=i.U.div.withConfig({displayName:"CardSlider.styles__Band",componentId:"sc-9062f506-2"})`
  position: relative;
  isolation: isolate;
  display: flow-root;
  padding-bottom: 64px;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: -1;
    background: ${({theme:e})=>e.palette.site.tint};
    box-shadow: 0 0 0 100vmax ${({theme:e})=>e.palette.site.tint};
    clip-path: inset(0 -100vmax);
  }

  @media (min-width: ${n}) {
    padding-top: ${l};
    padding-bottom: 0;
  }

  @media (min-width: ${r}) {
    padding-top: ${o};
  }
`,m=i.U.div.withConfig({displayName:"CardSlider.styles__Slides",componentId:"sc-9062f506-3"})`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  margin-top: -${s};
  touch-action: pan-y;

  @media (min-width: ${n}) {
    margin-top: 0;
    margin-bottom: -${l};
  }

  @media (min-width: ${r}) {
    margin-bottom: -${o};
  }
`,h=i.m`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 32px;

  @media (min-width: ${n}) {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }

  @media (min-width: ${r}) {
    gap: 64px;
  }
`,g=i.U.div.withConfig({displayName:"CardSlider.styles__Slide",componentId:"sc-9062f506-4"})`
  ${h}
  grid-area: 1 / 1;
  position: relative;
  z-index: 0;
  background-color: transparent;
  visibility: hidden;

  &[data-active='true'] {
    z-index: 1;
    visibility: visible;
  }

  /* #1214: die verlassene Karte bleibt unter der neuen sichtbar, bis deren Wabe aufgewachsen ist */
  &[data-leaving='true'] {
    visibility: visible;
  }
`,f=i.U.figure.withConfig({displayName:"CardSlider.styles__Figure",componentId:"sc-9062f506-5"})`
  position: relative;
  box-sizing: border-box;
  align-self: stretch;
  margin: 0;
  overflow: hidden;
  border-radius: 24px;
  aspect-ratio: 704 / 396;
  background: ${({theme:e,$tiling:i})=>i?"transparent":e.palette.site.border};
  user-select: none;

  img {
    object-fit: cover;
    opacity: ${({$tiling:e})=>+!e};
  }

  [data-leaving='true'] > & img {
    ${(0,a.x)(1200)}
  }

  @media (min-width: ${n}) {
    grid-column: span 2;
  }

  @media (prefers-reduced-motion: reduce) {
    && img {
      animation: none;
    }
  }
`,b=i.U.div.withConfig({displayName:"CardSlider.styles__Body",componentId:"sc-9062f506-6"})`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  min-width: 0;
  opacity: 0;
  transition: opacity 150ms ease;

  [data-active='true'] > & {
    opacity: 1;
    transition: opacity 300ms ease;
  }

  @media (min-width: ${n}) {
    grid-column: ${({$fullWidth:e})=>e?"1 / -1":"span 3"};
    padding-bottom: calc(${l} + ${d} / 2 + 16px);
  }

  @media (min-width: ${r}) {
    padding-bottom: calc(${o} + ${d} / 2 + 16px);
  }

  @media (prefers-reduced-motion: reduce) {
    &,
    [data-active='true'] > & {
      transition: none;
    }
  }
`,x=i.U.h3.withConfig({displayName:"CardSlider.styles__Title",componentId:"sc-9062f506-7"})`
  margin: 0;
  font-family: ${({theme:e})=>e.font.primaryFamily};
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0;
  text-transform: uppercase;
  color: ${({theme:e})=>e.palette.site.text};
  hyphens: auto;

  @media (min-width: ${r}) {
    font-size: 20px;
  }

  @media (min-width: ${"1024px"}) {
    font-size: 30px;
    line-height: 36px;
  }
`,$=i.U.div.withConfig({displayName:"CardSlider.styles__Text",componentId:"sc-9062f506-8"})`
  ${t.n}

  p {
    margin: 0;
  }

  p + p {
    margin-top: 1em;
  }
`,v=i.U.div.withConfig({displayName:"CardSlider.styles__CtaWrapper",componentId:"sc-9062f506-9"})`
  padding-top: 8px;
`,y=i.U.div.withConfig({displayName:"CardSlider.styles__Controls",componentId:"sc-9062f506-10"})`
  /* über dem Band (das mit isolation eine eigene Ebene bildet); die leere
     Fläche lässt Zeiger zum überhängenden Bild durch */
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 22px;
  pointer-events: none;

  button {
    pointer-events: auto;
  }

  ${({$media:e})=>e&&i.m`
      @media (min-width: ${n}) {
        display: grid;
        grid-template-columns: repeat(5, minmax(0, 1fr));
        gap: 32px;
        align-items: start;
      }

      @media (min-width: ${r}) {
        gap: 64px;
      }
    `}
`,w=i.U.div.withConfig({displayName:"CardSlider.styles__Arrows",componentId:"sc-9062f506-11"})`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-top: calc(${d} / -2);

  ${({$media:e})=>e&&i.m`
      @media (min-width: ${n}) {
        grid-row: 1;
        grid-column: 3 / span 3;
        justify-content: flex-start;
      }
    `}
`,k=i.U.div.withConfig({displayName:"CardSlider.styles__DotRow",componentId:"sc-9062f506-12"})`
  display: flex;
  justify-content: center;
  gap: 4px;

  ${({$media:e})=>e&&i.m`
      @media (min-width: ${n}) {
        grid-row: 1;
        grid-column: 1 / span 2;
        padding-top: calc(${l} + 21px);
      }

      @media (min-width: ${r}) {
        padding-top: calc(${o} + 21px);
      }
    `}
`,C=i.U.button.withConfig({displayName:"CardSlider.styles__ArrowButton",componentId:"sc-9062f506-13"})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-sizing: border-box;
  width: ${d};
  height: ${d};
  padding: 0;
  border: 0;
  clip-path: ${(0,a.F)(50)};
  color: #ffffff;
  background: ${({theme:e})=>e.palette.site.blue};
  cursor: pointer;
  transition: background-color 150ms ease;

  &:hover,
  &:focus-visible {
    background: ${({theme:e})=>e.palette.site.blueDark};
    outline: none;
  }

  svg {
    display: block;
  }
`,I=i.m`
  position: relative;
  display: block;
  flex-shrink: 0;
  box-sizing: border-box;
  width: 24px;
  height: 24px;
  padding: 0;
  border: 0;
  background: transparent;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    top: 5px;
    left: 5px;
    width: 14px;
    height: 14px;
    clip-path: ${(0,a.F)(14)};
    background: ${({theme:e})=>e.palette.site.border};
    transform: scale(0.5);
    transition:
      transform 150ms ease,
      background-color 150ms ease;
  }

  &[data-active='true']::before {
    background: ${({theme:e})=>e.palette.site.blue};
    transform: scale(1);
  }

  /* Fokus wie bisher über volle Größe und Farbe der Wabe */
  &:focus-visible {
    outline: none;
  }

  &:focus-visible::before {
    background: ${({theme:e})=>e.palette.site.blueDark};
    transform: scale(1);
  }

  @media (prefers-reduced-motion: reduce) {
    &::before {
      transition: none;
    }
  }
`;i.U.button.withConfig({displayName:"CardSlider.styles__Dot",componentId:"sc-9062f506-14"})`
  ${I}
`,e.s(["m",0,C,"H",0,w,"G",0,u,"F",0,b,"P",0,10,"v",0,1200,"Q",0,y,"V",0,v,"I",0,k,"p",0,f,"J",0,c,"l",0,g,"U",0,m,"A",0,p,"q",0,$,"Z",0,x,"w",0,I])},490644,936077,568840,e=>{var i=e.i(843476),t=e.i(997053),a=e.i(118410),n=e.i(547905);e.i(311046);let r=e.i(355351).E,l=4,o=t.q`
  from { transform: scaleY(0); }
  to { transform: scaleY(1); }
`,s=t.U.div.withConfig({displayName:"HexPagination.styles__Root",componentId:"sc-99a21391-0"})`
  position: absolute;
  inset: 0;
  pointer-events: none;
  /* #1473: bis zur Messung verborgen statt an falscher Stelle (Layout-Shift) */
  visibility: ${({$placed:e})=>e?"visible":"hidden"};

  /* Ohne Messung (SSR, Tests): Reihe unten rechts */
  ${({$fallback:e})=>e&&`
    inset: auto 2rem 2rem auto;
    display: flex;
    gap: ${l}px;
  `}

  /* #1214: im Fluss, z. B. unter einer Karte */
  ${({$inline:e,$gap:i=l})=>e&&`
    position: static;
    inset: auto;
    display: flex;
    gap: ${i}px;
  `}
`,d=t.U.button.withConfig({displayName:"HexPagination.styles__Tile",componentId:"sc-99a21391-1"})`
  position: ${({$fallback:e})=>e?"relative":"absolute"};
  left: var(--x);
  top: var(--y);
  width: var(--size, ${r}px);
  height: var(--size, ${r}px);
  padding: 0;
  margin: 0;
  border: 0;
  ${n.p}
  /* Trefferfläche: Masken schneiden Zeigerereignisse nicht zu, ohne clip-path wäre der ganze Kasten klickbar. Das spitze Polygon bleibt die Trefferform; die runde Maske liegt ganz darin. */
  clip-path: ${n.O};
  background: ${({$active:e})=>e?a.h.WHITE:"rgba(0, 65, 110, 0.45)"};
  color: ${({$active:e})=>e?a.h.PRIMARY:a.h.WHITE};
  font-family: ${({theme:e})=>e.font.secondaryFamily};
  font-size: calc(var(--size, ${r}px) * 0.3);
  font-variant-numeric: tabular-nums;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  pointer-events: auto;
  overflow: hidden;

  &:hover,
  &:focus-visible {
    background: ${({$active:e})=>e?a.h.WHITE:a.h.PRIMARY};
    outline: none;
  }

  /* #1214: heller Grund — aktiv sattes Blau mit weißer Nummer, sonst hellblau */
  ${({$tone:e,$active:i,theme:t})=>"light"===e&&`
    background: ${i?t.palette.site.blue:t.palette.site.tint};
    color: ${i?a.h.WHITE:t.palette.site.blue};

    &:hover,
    &:focus-visible {
      background: ${t.palette.site.blue};
      color: ${a.h.WHITE};
    }
  `}

  /* #1747: auf dem blauen Overlay hinter dem Hero-Text — übrige Kacheln durchscheinend weiß, Zeigen eine deutliche Stufe heller; aktiv weiß mit blauer Nummer */
  /* Feste Farben statt Theme-Weiß: das Overlay bleibt auch im Dark Mode Marineblau (PlastshipColors.PRIMARY), default.white würde dort dunkelgrau. */
  ${({$tone:e,$active:i})=>"overlay"===e&&`
    background: ${i?a.h.WHITE:`color-mix(in srgb, ${a.h.WHITE} 22%, transparent)`};
    color: ${i?a.h.PRIMARY:a.h.WHITE};

    &:hover,
    &:focus-visible {
      background: ${i?a.h.WHITE:`color-mix(in srgb, ${a.h.WHITE} 48%, transparent)`};
    }
  `}

  span {
    position: relative;
    z-index: 1;
  }
`,c=t.U.span.withConfig({displayName:"HexPagination.styles__Progress",componentId:"sc-99a21391-2"})`
  position: absolute;
  inset: 0;
  z-index: 0;
  /* Blau auf der weißen aktiven Kachel — invertiert wie Grund und Nummer */
  background: rgba(0, 65, 110, 0.25);
  transform-origin: 50% 100%;
  transform: scaleY(0);
  animation: ${o} ${({$duration:e})=>e}ms linear both;
  animation-play-state: ${({$paused:e})=>e?"paused":"running"};

  @media (prefers-reduced-motion: reduce) {
    animation-duration: 0ms;
    transform: scaleY(1);
    opacity: 0.6;
  }
`;e.s(["R",0,l,"e",0,r,"f",0,c,"F",0,s,"B",0,d],936077),e.s(["f",0,({count:e,activeIndex:t,cells:a,onSelect:n,progressDuration:r,paused:o=!1,progressKey:p,controlsIdPrefix:u,getLabel:m,tone:h="dark",inline:g=!1,measured:f,gap:b=l,dataTestId:x="hex-pagination",className:$})=>{if(e<1)return null;let v=g||a.length<e,y=g||(f??a.length>0);return(0,i.jsx)(s,{className:$,role:"tablist","data-testid":x,"data-fallback":v?"true":"false","data-placed":y?"true":"false","data-tone":h,$fallback:v,$inline:g,$placed:y,$gap:b,children:Array.from({length:e},(e,l)=>{let s=l===t,g=v?null:a[l],f=String(l+1).padStart(2,"0");return(0,i.jsxs)(d,{type:"button",role:"tab","aria-selected":s,"aria-controls":u?`${u}-${l}`:void 0,"aria-label":`${f} – ${m?m(l):String(l+1)}`,tabIndex:s?0:-1,$active:s,$fallback:v,$tone:h,"data-testid":`${x}-item-${l}`,"data-active":s?"true":"false",onClick:()=>n?.(l),style:g?{"--x":`${g.x}px`,"--y":`${g.y}px`,"--size":`${g.size}px`}:void 0,children:[s&&void 0!==r&&(0,i.jsx)(c,{$duration:r,$paused:o,"data-testid":`${x}-progress`,"data-paused":o?"true":"false"},p??t),(0,i.jsx)("span",{"aria-hidden":"true",children:f})]},l)})})}],568840),e.s([],490644)},864988,e=>{var i=e.i(355351);let t={x:50,y:50},a=(e,i,a,n,r=t)=>{let l=Math.max(e/a,i/n),o=a*l,s=n*l;return{bgWidth:o,bgHeight:s,offsetX:(e-o)*r.x/100,offsetY:(i-s)*r.y/100}};e.s(["E",0,({width:e,height:t,imageWidth:n,imageHeight:r,columns:l,direction:o,duration:s,bleed:d=1,focus:c})=>{let p=Math.round(.42*s);if(e<=0||t<=0||n<=0||r<=0||l<1)return{tiles:[],tileDuration:p,bgWidth:0,bgHeight:0};let{size:u,rowStep:m,originX:h,originY:g,shiftOf:f,baseCenterX:b,baseCenterY:x}=(0,i.l)(e,t,l),$=Math.ceil(t/m)+1,{bgWidth:v,bgHeight:y,offsetX:w,offsetY:k}=a(e,t,n,r,c),C=Math.max(0,s-p),I=e+.35*t,j=1.05*u,_=[];for(let i=-1;i<=$;i+=1)for(let a=-1;a<=l+1;a+=1){let n,r=b(i,a)+h,l=x(i)+g,c=r-u/2,p=l-u/2;if(c>=e||p>=t||c+u<=0||p+u<=0)continue;let m=Math.round(Math.min(1,Math.max(0,(("next"===o?e-r:r)+.35*l)/I*.92+(7*Math.abs(i)+13*Math.abs(a))%11/11*.08))*C),f=r-e/2,$=l-t/2,v=Math.hypot(f,$),y="plain";v<.5?y="center":v<j&&(y=f+$<0?"ring-blue":"ring-green",n=Math.abs($)<.1*u?f<0?"w":"e":$<0?f<0?"nw":"ne":f<0?"sw":"se");let S=c-d,z=p-d;_.push({key:`${i}-${a}`,role:y,side:n,x:S,y:z,size:u+2*d,delay:m,tintDuration:Math.max(0,s-m),bgX:w-S,bgY:k-z})}return{tiles:_,tileDuration:p,bgWidth:v,bgHeight:y}},"P",0,a])},388354,798119,e=>{var i=e.i(843476),t=e.i(271645),a=e.i(864988),n=e.i(997053),r=e.i(547905);let l=n.q`
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
`,o=n.U.div.withConfig({displayName:"HexTileReveal.styles__Root",componentId:"sc-7b3c4462-0"})`
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  /* Layout/Style/Paint bleiben in dieser Ebene — 1000+ Kacheln invalidieren nicht die Seite */
  contain: layout style paint;
`,s=n.U.div.withConfig({displayName:"HexTileReveal.styles__Tile",componentId:"sc-7b3c4462-1"})`
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
  animation: ${l} var(--tile-duration) cubic-bezier(0.2, 0.8, 0.2, 1) both;
  animation-delay: var(--delay);
`,d=n.U.div.withConfig({displayName:"HexTileReveal.styles__TileFace",componentId:"sc-7b3c4462-2"})`
  position: absolute;
  inset: 0;
  ${r.p}
  background-image: var(--image);
  background-repeat: no-repeat;
  background-size: var(--bg-size);
  background-position: var(--bg-pos);
`;e.s(["f",0,({image:e,direction:n,duration:r,delay:l=0,columns:c=12,focusX:p=50,focusY:u=50,dataTestId:m="hex-tile-reveal",className:h})=>{let g=(0,t.useRef)(null),[f,b]=(0,t.useState)(null),x=(e=>{let[i,a]=(0,t.useState)(null);return(0,t.useEffect)(()=>{a(null);let i=new window.Image,t=!1;return i.onload=()=>{!t&&i.naturalWidth>0&&a({width:i.naturalWidth,height:i.naturalHeight})},i.src=e,i.complete&&i.naturalWidth>0&&a({width:i.naturalWidth,height:i.naturalHeight}),()=>{t=!0}},[e]),i})(e);(0,t.useEffect)(()=>{let e=g.current;if(!e)return;let i=()=>{let i=e.getBoundingClientRect();i.width>0&&i.height>0&&b({width:i.width,height:i.height})};if(i(),"u"<typeof ResizeObserver)return;let t=new ResizeObserver(i);return t.observe(e),()=>t.disconnect()},[]);let $=(0,t.useMemo)(()=>f&&x?(0,a.E)({width:f.width,height:f.height,imageWidth:x.width,imageHeight:x.height,columns:c,direction:n,duration:r,focus:{x:p,y:u}}):null,[f,x,c,n,r,p,u]);return(0,i.jsx)(o,{ref:g,className:h,"data-testid":m,"data-ready":$?"true":"false","data-tiles":$?.tiles.length??0,"aria-hidden":"true",children:$?.tiles.map(t=>(0,i.jsx)(s,{style:{"--x":`${t.x}px`,"--y":`${t.y}px`,"--size":`${t.size}px`,"--delay":`${l+t.delay}ms`,"--tile-duration":`${$.tileDuration}ms`,"--image":`url("${e}")`,"--bg-size":`${$.bgWidth}px ${$.bgHeight}px`,"--bg-pos":`${t.bgX}px ${t.bgY}px`},children:(0,i.jsx)(d,{"data-role":t.role,"data-side":t.side})},t.key))})}],798119),e.s([],388354)},286504,e=>{var i=e.i(843476),t=e.i(271645),a=e.i(325164);e.i(951693);var n=e.i(659188),r=e.i(247902),l=e.i(825969),o=e.i(499911);e.i(945304);var s=e.i(977194);e.i(490644);var d=e.i(568840);e.i(388354);var c=e.i(798119),p=e.i(587076),u=e.i(696984),m=e.i(879822);let h=()=>(0,i.jsx)("svg",{width:"16",height:"14",viewBox:"0 0 16 14",fill:"none","aria-hidden":"true",focusable:"false",children:(0,i.jsx)("path",{d:"M6.89019 1.1665L1.33464 6.99984M1.33464 6.99984L6.89019 12.8332M1.33464 6.99984L14.668 6.99984",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),g=()=>(0,i.jsx)("svg",{width:"18",height:"16",viewBox:"0 0 18 16",fill:"none","aria-hidden":"true",focusable:"false",children:(0,i.jsx)("path",{d:"M10.3333 1L17 8M17 8L10.3333 15M17 8L1 8",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),f=({headline:e,description:f,items:b,className:x,dataTestId:$="card-slider"})=>{let{tr:v}=(0,u.w)(),[y,w]=(0,t.useState)(0),k=(0,t.useRef)(null),C=(0,t.useId)(),I=b.length,j=b.some(e=>!!e.image),_=(0,p.f)(),[S,z]=(0,t.useState)(null),[T,M]=(0,t.useState)("next"),N=(0,t.useCallback)(e=>{let i=(e%I+I)%I;i!==y&&(M(e>y?"next":"prev"),z(_?null:y),w(i))},[I,y,_]);(0,t.useEffect)(()=>{if(null===S)return;let e=window.setTimeout(()=>z(null),m.v);return()=>window.clearTimeout(e)},[S,y]);let R=(0,t.useCallback)(()=>N(y-1),[N,y]),U=(0,t.useCallback)(()=>N(y+1),[N,y]);return 0===I?null:(0,i.jsxs)(m.J,{className:x,"data-testid":$,"data-count":I,"data-active-index":y,role:"region","aria-roledescription":v("cms.slider.roledescription",{defaultValue:"Karussell"}),"aria-label":e||v("cms.slider.label",{defaultValue:"Karten"}),onKeyDown:e=>{I<2||e.target.closest('input, textarea, select, [contenteditable="true"]')||("ArrowLeft"===e.key?(e.preventDefault(),R()):"ArrowRight"===e.key&&(e.preventDefault(),U()))},children:[(0,i.jsx)(n.f,{headline:e,description:f,align:"center",dataTestId:`${$}-header`}),(0,i.jsxs)(m.A,{children:[(0,i.jsx)(m.G,{"data-testid":`${$}-band`,children:(0,i.jsx)(m.U,{id:C,"aria-live":"polite",onPointerDown:e=>{"mouse"!==e.pointerType&&(k.current={x:e.clientX,y:e.clientY,id:e.pointerId})},onPointerUp:e=>{let i=k.current;if(k.current=null,!i||i.id!==e.pointerId||I<2)return;let t=e.clientX-i.x,a=e.clientY-i.y;40>Math.abs(t)||Math.abs(t)<Math.abs(a)||(t<0?U():R())},onPointerCancel:()=>{k.current=null},children:b.map((e,t)=>{let n=t===y,d=`${$}-slide-${t}`;return(0,i.jsxs)(m.l,{"data-testid":d,"data-index":t,"data-active":n,"data-leaving":t===S?"true":void 0,"aria-hidden":!n,role:"group","aria-roledescription":v("cms.slider.slide",{defaultValue:"Karte"}),"aria-label":v("cms.slider.slideOf",{defaultValue:"{{index}} von {{count}}",index:t+1,count:I}),children:[e.image&&(0,i.jsxs)(m.p,{"data-testid":`${d}-image`,"data-tiling":n&&null!==S?"true":"false",$tiling:n&&null!==S,children:[(0,i.jsx)(a.default,{src:e.image,alt:e.title,fill:!0,draggable:!1,sizes:"(max-width: 640px) 100vw, 40vw"}),n&&null!==S&&(0,i.jsx)(c.f,{image:e.image,direction:T,duration:m.v,columns:m.P,dataTestId:`${d}-tiles`},y)]}),(0,i.jsxs)(m.F,{$fullWidth:!e.image,children:[e.icon&&(0,i.jsx)(s.c,{name:e.icon.name,tone:e.icon.tone,shape:"hex",dataTestId:`${d}-icon`}),(0,i.jsx)(m.Z,{"data-testid":`${d}-title`,children:e.title}),e.description&&(0,i.jsx)(m.q,{"data-testid":`${d}-description`,children:e.description.split(/\n\s*\n/).map(e=>e.trim()).filter(Boolean).map((e,t)=>(0,i.jsx)("p",{children:e},t))}),e.cta&&(0,i.jsx)(m.V,{children:(0,i.jsx)(r.f,{href:e.cta.href,modifier:l.j.SECONDARY,icon:(0,i.jsx)(o.f,{}),iconAlign:l.W.RIGHT,dataTestId:`${d}-cta`,children:e.cta.label})})]})]},t)})})}),I>1&&(0,i.jsxs)(m.Q,{$media:j,"data-testid":`${$}-controls`,children:[(0,i.jsxs)(m.H,{$media:j,children:[(0,i.jsx)(m.m,{type:"button",onClick:R,"aria-controls":C,"aria-label":v("cms.slider.previous",{defaultValue:"Vorherige Karte"}),title:b[(y-1+I)%I]?.title,"data-testid":`${$}-prev`,children:(0,i.jsx)(h,{})}),(0,i.jsx)(m.m,{type:"button",onClick:U,"aria-controls":C,"aria-label":v("cms.slider.next",{defaultValue:"Nächste Karte"}),title:b[(y+1)%I]?.title,"data-testid":`${$}-next`,children:(0,i.jsx)(g,{})})]}),(0,i.jsx)(m.I,{$media:j,children:(0,i.jsx)(d.f,{count:I,activeIndex:y,cells:[],inline:!0,tone:"light",onSelect:N,getLabel:e=>b[e]?.title??String(e+1),dataTestId:`${$}-pagination`})})]})]})]})};var b=e.i(507924),x=e.i(866482);e.s(["CardSliderBlock",0,({block:e,locale:t,dataTestId:a})=>{let{headline:n,description:r,cards:l}=e.props;return(0,i.jsx)(f,{headline:n?(0,b.u)(n,t):void 0,description:r?(0,b.u)(r,t):void 0,items:l.map(e=>({title:(0,b.u)(e.title,t),description:e.description?(0,b.u)(e.description,t):void 0,image:e.image,icon:e.icon,cta:(0,x.f)(e.cta,t)})),dataTestId:`${a}-slider`})}],286504)},866482,e=>{var i=e.i(197908),t=e.i(507924);e.s(["f",0,function(e,a){let n=(0,i.J)(e?.href);return e&&n?{label:(0,t.u)(e.label,a),href:n}:void 0}])}],535566,function(e){e.n(e.i(286504))}]);