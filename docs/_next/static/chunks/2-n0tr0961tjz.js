(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,879822,e=>{"use strict";var t=e.i(997053),i=e.i(726029),n=e.i(547905);let o="640px",a="768px",r="48px",l="64px",d="32px",s="50px",p=t.U.section.withConfig({displayName:"CardSlider.styles__Root",componentId:"sc-9062f506-0"})`
  display: flex;
  flex-direction: column;
  gap: 32px;
  background-color: transparent;
`,c=t.U.div.withConfig({displayName:"CardSlider.styles__Stage",componentId:"sc-9062f506-1"})`
  position: relative;
  padding-top: ${d};

  @media (min-width: ${o}) {
    padding-top: 0;
  }
`,m=t.U.div.withConfig({displayName:"CardSlider.styles__Band",componentId:"sc-9062f506-2"})`
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

  @media (min-width: ${o}) {
    padding-top: ${r};
    padding-bottom: 0;
  }

  @media (min-width: ${a}) {
    padding-top: ${l};
  }
`,f=t.U.div.withConfig({displayName:"CardSlider.styles__Slides",componentId:"sc-9062f506-3"})`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  margin-top: -${d};
  touch-action: pan-y;

  @media (min-width: ${o}) {
    margin-top: 0;
    margin-bottom: -${r};
  }

  @media (min-width: ${a}) {
    margin-bottom: -${l};
  }
`,u=t.m`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 32px;

  @media (min-width: ${o}) {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }

  @media (min-width: ${a}) {
    gap: 64px;
  }
`,h=t.U.div.withConfig({displayName:"CardSlider.styles__Slide",componentId:"sc-9062f506-4"})`
  ${u}
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
`,g=t.U.figure.withConfig({displayName:"CardSlider.styles__Figure",componentId:"sc-9062f506-5"})`
  position: relative;
  box-sizing: border-box;
  align-self: stretch;
  margin: 0;
  overflow: hidden;
  border-radius: 24px;
  aspect-ratio: 704 / 396;
  background: ${({theme:e,$tiling:t})=>t?"transparent":e.palette.site.border};
  user-select: none;

  img {
    object-fit: cover;
    opacity: ${({$tiling:e})=>+!e};
  }

  [data-leaving='true'] > & img {
    ${(0,n.x)(1200)}
  }

  @media (min-width: ${o}) {
    grid-column: span 2;
  }

  @media (prefers-reduced-motion: reduce) {
    && img {
      animation: none;
    }
  }
`,x=t.U.div.withConfig({displayName:"CardSlider.styles__Body",componentId:"sc-9062f506-6"})`
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

  @media (min-width: ${o}) {
    grid-column: ${({$fullWidth:e})=>e?"1 / -1":"span 3"};
    padding-bottom: calc(${r} + ${s} / 2 + 16px);
  }

  @media (min-width: ${a}) {
    padding-bottom: calc(${l} + ${s} / 2 + 16px);
  }

  @media (prefers-reduced-motion: reduce) {
    &,
    [data-active='true'] > & {
      transition: none;
    }
  }
`,b=t.U.h3.withConfig({displayName:"CardSlider.styles__Title",componentId:"sc-9062f506-7"})`
  margin: 0;
  font-family: ${({theme:e})=>e.font.primaryFamily};
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0;
  text-transform: uppercase;
  color: ${({theme:e})=>e.palette.site.text};
  hyphens: auto;

  @media (min-width: ${a}) {
    font-size: 20px;
  }

  @media (min-width: ${"1024px"}) {
    font-size: 30px;
    line-height: 36px;
  }
`,y=t.U.div.withConfig({displayName:"CardSlider.styles__Text",componentId:"sc-9062f506-8"})`
  ${i.n}

  p {
    margin: 0;
  }

  p + p {
    margin-top: 1em;
  }
`,v=t.U.div.withConfig({displayName:"CardSlider.styles__CtaWrapper",componentId:"sc-9062f506-9"})`
  padding-top: 8px;
`,w=t.U.div.withConfig({displayName:"CardSlider.styles__Controls",componentId:"sc-9062f506-10"})`
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

  ${({$media:e})=>e&&t.m`
      @media (min-width: ${o}) {
        display: grid;
        grid-template-columns: repeat(5, minmax(0, 1fr));
        gap: 32px;
        align-items: start;
      }

      @media (min-width: ${a}) {
        gap: 64px;
      }
    `}
`,$=t.U.div.withConfig({displayName:"CardSlider.styles__Arrows",componentId:"sc-9062f506-11"})`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-top: calc(${s} / -2);

  ${({$media:e})=>e&&t.m`
      @media (min-width: ${o}) {
        grid-row: 1;
        grid-column: 3 / span 3;
        justify-content: flex-start;
      }
    `}
`,C=t.U.div.withConfig({displayName:"CardSlider.styles__DotRow",componentId:"sc-9062f506-12"})`
  display: flex;
  justify-content: center;
  gap: 4px;

  ${({$media:e})=>e&&t.m`
      @media (min-width: ${o}) {
        grid-row: 1;
        grid-column: 1 / span 2;
        padding-top: calc(${r} + 21px);
      }

      @media (min-width: ${a}) {
        padding-top: calc(${l} + 21px);
      }
    `}
`,_=t.U.button.withConfig({displayName:"CardSlider.styles__ArrowButton",componentId:"sc-9062f506-13"})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-sizing: border-box;
  width: ${s};
  height: ${s};
  padding: 0;
  border: 0;
  clip-path: ${(0,n.F)(50)};
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
`,S=t.m`
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
    clip-path: ${(0,n.F)(14)};
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
`;t.U.button.withConfig({displayName:"CardSlider.styles__Dot",componentId:"sc-9062f506-14"})`
  ${S}
`,e.s(["m",0,_,"H",0,$,"G",0,m,"F",0,x,"P",0,10,"v",0,1200,"Q",0,w,"V",0,v,"I",0,C,"p",0,g,"J",0,p,"l",0,h,"U",0,f,"A",0,c,"q",0,y,"Z",0,b,"w",0,S])},575858,e=>{"use strict";var t=e.i(843476),i=e.i(325164);e.i(951693);var n=e.i(659188),o=e.i(696984),a=e.i(271645),r=e.i(587076);let l={start:0,end:0};function d(e){return Array.from(e.children)}var s=e.i(997053),p=e.i(547905),c=e.i(726029),m=e.i(879822);let f="640px",u=s.U.section.withConfig({displayName:"TestimonialSlider.styles__Root",componentId:"sc-198e7264-0"})`
  display: flex;
  flex-direction: column;
  gap: 32px;
  background-color: transparent;
`,h=s.U.div.withConfig({displayName:"TestimonialSlider.styles__Carousel",componentId:"sc-198e7264-1"})`
  display: flex;
  flex-direction: column;
`,g=s.U.div.withConfig({displayName:"TestimonialSlider.styles__Track",componentId:"sc-198e7264-2"})`
  position: relative;
  display: flex;
  justify-content: ${({$single:e})=>e?"center":"flex-start"};
  gap: 16px;
  margin-inline: calc(-1 * var(--bleed-start, 0px)) calc(-1 * var(--bleed-end, 0px));
  padding: 0 var(--bleed-end, 0px) 32px var(--bleed-start, 0px);
  overflow-x: auto;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;
  scroll-padding-inline: var(--bleed-start, 0px) var(--bleed-end, 0px);
  scroll-behavior: smooth;
  scrollbar-width: none;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    display: none;
  }

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.palette.site.blue};
    outline-offset: -2px;
  }

  @media (prefers-reduced-motion: reduce) {
    scroll-behavior: auto;
  }
`,x=s.U.div.withConfig({displayName:"TestimonialSlider.styles__Slide",componentId:"sc-198e7264-3"})`
  flex: 0 0 auto;
  box-sizing: border-box;
  width: calc(98vw - 4rem);
  scroll-snap-align: center;

  @media (min-width: ${"768px"}) {
    width: 48vw;
  }

  @media (min-width: ${"1536px"}) {
    width: 31vw;
  }
`,b=s.U.div.withConfig({displayName:"TestimonialSlider.styles__Card",componentId:"sc-198e7264-4"})`
  ${(0,c.O)(!1)}
  /* #1959: Randfarbe vom Band (C2 setzt --site-card-border), sonst blue-100 */
  border-color: var(--site-card-border, ${({theme:e})=>e.palette.site.border});
  padding-bottom: 24px;

  @media (min-width: ${f}) {
    padding-bottom: 48px;
  }
`,y=s.U.figure.withConfig({displayName:"TestimonialSlider.styles__Figure",componentId:"sc-198e7264-5"})`
  position: relative;
  margin: 0;
  padding: 16px 8px;
`,v=s.U.span.withConfig({displayName:"TestimonialSlider.styles__QuoteMark",componentId:"sc-198e7264-6"})`
  position: absolute;
  top: 0;
  right: 0;
  width: 120px;
  height: 120px;
  ${p.p}
  background: ${({theme:e})=>`color-mix(in srgb, ${e.palette.site.tint} 70%, ${e.palette.site.card})`};
  pointer-events: none;

  &::before {
    content: '\\201C';
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 40px;
    font-family: ${({theme:e})=>e.font.primaryFamily};
    font-size: 96px;
    font-weight: 700;
    line-height: 1;
    color: ${({theme:e})=>e.palette.site.border};
  }
`,w=s.U.div.withConfig({displayName:"TestimonialSlider.styles__Photo",componentId:"sc-198e7264-7"})`
  position: relative;
  width: 80px;
  height: 80px;
  overflow: hidden;
  /* #1781: Personenbild als Wabe wie überall */
  ${p.q}
  background: ${({theme:e})=>e.palette.site.tint};

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,$=s.U.blockquote.withConfig({displayName:"TestimonialSlider.styles__Quote",componentId:"sc-198e7264-8"})`
  position: relative;
  margin: 8px 0 0;
  padding: 0;
  border: 0;
  font-family: ${({theme:e})=>e.font.secondaryFamily};
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  font-style: normal;
  color: ${({theme:e})=>e.palette.site.text};

  p {
    margin: 0;
  }

  @media (min-width: ${f}) {
    margin-top: 20px;
    font-size: 20px;
  }
`,C=s.U.figcaption.withConfig({displayName:"TestimonialSlider.styles__Caption",componentId:"sc-198e7264-9"})`
  position: relative;
  margin-top: 8px;
  font-family: ${({theme:e})=>e.font.secondaryFamily};
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  font-style: normal;
  color: ${({theme:e})=>e.palette.site.text};

  @media (min-width: ${f}) {
    margin-top: 20px;
    font-size: 16px;
    line-height: 24px;
  }
`,_=s.U.div.withConfig({displayName:"TestimonialSlider.styles__DotRow",componentId:"sc-198e7264-10"})`
  display: flex;
  justify-content: center;
`,S=s.U.button.withConfig({displayName:"TestimonialSlider.styles__Dot",componentId:"sc-198e7264-11"})`
  ${m.w}
`,U=({headline:e,description:s,items:p,className:c,dataTestId:m="testimonial-slider"})=>{let{tr:f}=(0,o.w)(),U=p.length,{trackRef:k,activeIndex:I,goTo:j,bleed:N}=function(e,{bleed:t=!1}={}){let i=(0,a.useRef)(null),[n,o]=(0,a.useState)(0),[s,p]=(0,a.useState)(l),c=(0,r.f)();(0,a.useEffect)(()=>{let e=i.current;if(!e)return;let n=0,a=()=>{if(n=0,o(function(e){let t=d(e);if(0===t.length)return 0;let i=e.scrollWidth-e.clientWidth;if(i<=1||e.scrollLeft<=1)return 0;if(e.scrollLeft>=i-1)return t.length-1;let n=e.scrollLeft+e.clientWidth/2,o=0,a=1/0;return t.forEach((e,t)=>{let i=Math.abs(e.offsetLeft+e.offsetWidth/2-n);i<a&&(a=i,o=t)}),o}(e)),t){let t=function(e){let t=e.parentElement;if(!t)return l;let i=t.getBoundingClientRect(),n=function(e){let t=e.parentElement;for(;t&&t!==document.body&&t!==document.documentElement;){if("visible"!==getComputedStyle(t).overflowX){let e=t.getBoundingClientRect().left+t.clientLeft;return{left:e,right:e+t.clientWidth}}t=t.parentElement}return{left:0,right:document.documentElement.clientWidth}}(t);return{start:Math.max(0,Math.floor(i.left-n.left)),end:Math.max(0,Math.floor(n.right-i.right))}}(e);p(e=>e.start===t.start&&e.end===t.end?e:t)}},r=()=>{n||(n=window.requestAnimationFrame(a))};a(),e.addEventListener("scroll",r,{passive:!0}),window.addEventListener("resize",r);let s="function"==typeof ResizeObserver?new ResizeObserver(r):null;return s&&e.parentElement&&s.observe(e.parentElement),()=>{n&&window.cancelAnimationFrame(n),e.removeEventListener("scroll",r),window.removeEventListener("resize",r),s?.disconnect()}},[e,t]);let m=(0,a.useCallback)(t=>{let n=i.current;if(!n)return;let a=Math.max(0,Math.min(e-1,t)),r=d(n)[a];if(!r)return;let l=r.offsetLeft+r.offsetWidth/2-n.clientWidth/2;"function"==typeof n.scrollTo?n.scrollTo({left:l,behavior:c?"auto":"smooth"}):n.scrollLeft=l,o(a)},[e,c]);return{trackRef:i,activeIndex:n,goTo:m,bleed:s}}(U,{bleed:U>1});if(0===U)return null;let T=e=>f("cms.testimonial.slideOf",{defaultValue:"Zitat {{index}} von {{count}}",index:e+1,count:U}),z={"--bleed-start":`${N.start}px`,"--bleed-end":`${N.end}px`};return(0,t.jsxs)(u,{className:c,"data-testid":m,"data-count":U,"data-active-index":I,role:"region","aria-roledescription":f("cms.slider.roledescription",{defaultValue:"Karussell"}),"aria-label":e||f("cms.testimonial.label",{defaultValue:"Zitate"}),children:[(0,t.jsx)(n.f,{headline:e,description:s,align:"center",dataTestId:`${m}-header`}),(0,t.jsxs)(h,{children:[(0,t.jsx)(g,{ref:k,$single:1===U,style:z,tabIndex:U>1?0:void 0,"data-testid":`${m}-track`,"data-bleed-start":N.start,"data-bleed-end":N.end,children:p.map((e,n)=>{let o=`${m}-slide-${n}`;return(0,t.jsx)(x,{"data-testid":o,"data-index":n,"data-active":n===I,role:"group","aria-roledescription":f("cms.testimonial.slide",{defaultValue:"Zitat"}),"aria-label":T(n),children:(0,t.jsx)(b,{children:(0,t.jsxs)(y,{children:[(0,t.jsx)(v,{"data-part":"quote-mark","aria-hidden":"true"}),e.photoUrl&&(0,t.jsx)(w,{"data-testid":`${o}-photo`,children:(0,t.jsx)(i.default,{src:e.photoUrl,alt:e.author??"",width:80,height:80})}),(0,t.jsx)($,{"data-testid":`${o}-quote`,children:(0,t.jsx)("p",{children:e.quote})}),(e.author||e.role)&&(0,t.jsxs)(C,{"data-testid":`${o}-caption`,children:[e.author&&(0,t.jsx)("span",{"data-testid":`${o}-author`,children:e.author}),e.author&&e.role&&", ",e.role&&(0,t.jsx)("span",{"data-testid":`${o}-role`,children:e.role})]})]})})},n)})}),U>1&&(0,t.jsx)(_,{"data-testid":`${m}-dots`,children:p.map((e,i)=>(0,t.jsx)(S,{type:"button",onClick:()=>j(i),"aria-label":T(i),"aria-current":i===I?"true":void 0,"data-active":i===I,"data-testid":`${m}-dot-${i}`},i))})]})]})};var k=e.i(197908),I=e.i(507924);e.s(["TestimonialBlock",0,({block:e,locale:i,dataTestId:n})=>{let{headline:o,description:a,items:r}=e.props;return(0,t.jsx)(U,{headline:o?(0,I.u)(o,i):void 0,description:a?(0,I.u)(a,i):void 0,items:r.map(e=>({quote:(0,I.u)(e.quote,i),author:e.author,role:e.role?(0,I.u)(e.role,i):void 0,photoUrl:(0,k.J)(e.photoUrl)})),dataTestId:`${n}-slider`})}],575858)},347218,function(e){e.n(e.i(575858))}]);