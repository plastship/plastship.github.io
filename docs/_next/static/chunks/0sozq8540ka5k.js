(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,[699779,e=>{let t=e.i(929842).K;e.s(["f",0,t])},573236,920754,e=>{var t=e.i(843476),i=e.i(997053);let r=i.U.svg.withConfig({displayName:"IconArrowLeft.styles__Root",componentId:"sc-6d9f062c-0"})``,n=e=>(0,t.jsx)(r,{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",className:e.className,"data-testid":"icon-arrow-left-root",children:(0,t.jsx)("path",{d:"M10.6667 19L4 12M4 12L10.6667 5M4 12L20 12",stroke:e.strokeColor||"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})});e.s(["f",0,n],920754),e.s(["f",0,n],573236)},559173,e=>{e.s(["p",()=>a,"$",()=>r]);var t=e.i(997053),i=e.i(703089);let r=(e=i.g.body)=>t.m`
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
  ${e=>r(e.$variant)}
`,a=t.U.p.withConfig({displayName:"Text.styles__Text",componentId:"sc-18bfeccb-0"})`
  ${n}
`},703089,e=>{e.s(["p",()=>a,"g",()=>n]);var t,i=e.i(843476),r=e.i(559173),n=((t={}).bodybig="bodybig",t.body="body",t.bodysmall="bodysmall",t.button="button",t.caption="caption",t.navigation="navigation",t);let a=({children:e,dataTestId:t="text-root",variant:n,className:a})=>(0,i.jsx)(r.p,{"data-testid":t,className:a,$variant:n,children:e})},852590,e=>{let t=e.i(703089).p;e.s(["f",0,t])},490644,936077,568840,e=>{var t=e.i(843476),i=e.i(997053),r=e.i(118410),n=e.i(547905);e.i(311046);let a=e.i(355351).E,l=4,o=i.q`
  from { transform: scaleY(0); }
  to { transform: scaleY(1); }
`,s=i.U.div.withConfig({displayName:"HexPagination.styles__Root",componentId:"sc-99a21391-0"})`
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
  ${({$inline:e,$gap:t=l})=>e&&`
    position: static;
    inset: auto;
    display: flex;
    gap: ${t}px;
  `}
`,d=i.U.button.withConfig({displayName:"HexPagination.styles__Tile",componentId:"sc-99a21391-1"})`
  position: ${({$fallback:e})=>e?"relative":"absolute"};
  left: var(--x);
  top: var(--y);
  width: var(--size, ${a}px);
  height: var(--size, ${a}px);
  padding: 0;
  margin: 0;
  border: 0;
  ${n.p}
  /* Trefferfläche: Masken schneiden Zeigerereignisse nicht zu, ohne clip-path wäre der ganze Kasten klickbar. Das spitze Polygon bleibt die Trefferform; die runde Maske liegt ganz darin. */
  clip-path: ${n.O};
  background: ${({$active:e})=>e?r.h.WHITE:"rgba(0, 65, 110, 0.45)"};
  color: ${({$active:e})=>e?r.h.PRIMARY:r.h.WHITE};
  font-family: ${({theme:e})=>e.font.secondaryFamily};
  font-size: calc(var(--size, ${a}px) * 0.3);
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
    background: ${({$active:e})=>e?r.h.WHITE:r.h.PRIMARY};
    outline: none;
  }

  /* #1214: heller Grund — aktiv sattes Blau mit weißer Nummer, sonst hellblau */
  ${({$tone:e,$active:t,theme:i})=>"light"===e&&`
    background: ${t?i.palette.site.blue:i.palette.site.tint};
    color: ${t?r.h.WHITE:i.palette.site.blue};

    &:hover,
    &:focus-visible {
      background: ${i.palette.site.blue};
      color: ${r.h.WHITE};
    }
  `}

  /* #1747: auf dem blauen Overlay hinter dem Hero-Text — übrige Kacheln durchscheinend weiß, Zeigen eine deutliche Stufe heller; aktiv weiß mit blauer Nummer */
  /* Feste Farben statt Theme-Weiß: das Overlay bleibt auch im Dark Mode Marineblau (PlastshipColors.PRIMARY), default.white würde dort dunkelgrau. */
  ${({$tone:e,$active:t})=>"overlay"===e&&`
    background: ${t?r.h.WHITE:`color-mix(in srgb, ${r.h.WHITE} 22%, transparent)`};
    color: ${t?r.h.PRIMARY:r.h.WHITE};

    &:hover,
    &:focus-visible {
      background: ${t?r.h.WHITE:`color-mix(in srgb, ${r.h.WHITE} 48%, transparent)`};
    }
  `}

  span {
    position: relative;
    z-index: 1;
  }
`,u=i.U.span.withConfig({displayName:"HexPagination.styles__Progress",componentId:"sc-99a21391-2"})`
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
`;e.s(["R",0,l,"e",0,a,"f",0,u,"F",0,s,"B",0,d],936077),e.s(["f",0,({count:e,activeIndex:i,cells:r,onSelect:n,progressDuration:a,paused:o=!1,progressKey:c,controlsIdPrefix:h,getLabel:f,tone:m="dark",inline:p=!1,measured:g,gap:x=l,dataTestId:v="hex-pagination",className:b})=>{if(e<1)return null;let y=p||r.length<e,T=p||(g??r.length>0);return(0,t.jsx)(s,{className:b,role:"tablist","data-testid":v,"data-fallback":y?"true":"false","data-placed":T?"true":"false","data-tone":m,$fallback:y,$inline:p,$placed:T,$gap:x,children:Array.from({length:e},(e,l)=>{let s=l===i,p=y?null:r[l],g=String(l+1).padStart(2,"0");return(0,t.jsxs)(d,{type:"button",role:"tab","aria-selected":s,"aria-controls":h?`${h}-${l}`:void 0,"aria-label":`${g} – ${f?f(l):String(l+1)}`,tabIndex:s?0:-1,$active:s,$fallback:y,$tone:m,"data-testid":`${v}-item-${l}`,"data-active":s?"true":"false",onClick:()=>n?.(l),style:p?{"--x":`${p.x}px`,"--y":`${p.y}px`,"--size":`${p.size}px`}:void 0,children:[s&&void 0!==a&&(0,t.jsx)(u,{$duration:a,$paused:o,"data-testid":`${v}-progress`,"data-paused":o?"true":"false"},c??i),(0,t.jsx)("span",{"aria-hidden":"true",children:g})]},l)})})}],568840),e.s([],490644)},864988,e=>{var t=e.i(355351);let i={x:50,y:50},r=(e,t,r,n,a=i)=>{let l=Math.max(e/r,t/n),o=r*l,s=n*l;return{bgWidth:o,bgHeight:s,offsetX:(e-o)*a.x/100,offsetY:(t-s)*a.y/100}};e.s(["E",0,({width:e,height:i,imageWidth:n,imageHeight:a,columns:l,direction:o,duration:s,bleed:d=1,focus:u})=>{let c=Math.round(.42*s);if(e<=0||i<=0||n<=0||a<=0||l<1)return{tiles:[],tileDuration:c,bgWidth:0,bgHeight:0};let{size:h,rowStep:f,originX:m,originY:p,shiftOf:g,baseCenterX:x,baseCenterY:v}=(0,t.l)(e,i,l),b=Math.ceil(i/f)+1,{bgWidth:y,bgHeight:T,offsetX:w,offsetY:S}=r(e,i,n,a,u),E=Math.max(0,s-c),$=e+.35*i,k=1.05*h,A=[];for(let t=-1;t<=b;t+=1)for(let r=-1;r<=l+1;r+=1){let n,a=x(t,r)+m,l=v(t)+p,u=a-h/2,c=l-h/2;if(u>=e||c>=i||u+h<=0||c+h<=0)continue;let f=Math.round(Math.min(1,Math.max(0,(("next"===o?e-a:a)+.35*l)/$*.92+(7*Math.abs(t)+13*Math.abs(r))%11/11*.08))*E),g=a-e/2,b=l-i/2,y=Math.hypot(g,b),T="plain";y<.5?T="center":y<k&&(T=g+b<0?"ring-blue":"ring-green",n=Math.abs(b)<.1*h?g<0?"w":"e":b<0?g<0?"nw":"ne":g<0?"sw":"se");let R=u-d,I=c-d;A.push({key:`${t}-${r}`,role:T,side:n,x:R,y:I,size:h+2*d,delay:f,tintDuration:Math.max(0,s-f),bgX:w-R,bgY:S-I})}return{tiles:A,tileDuration:c,bgWidth:y,bgHeight:T}},"P",0,r])},589013,e=>{var t=e.i(843476),i=e.i(197908),r=e.i(271645),n=e.i(618566),a=e.i(435417),l=e.i(590464),o=e.i(561695),s=e.i(829486),d=e.i(272038),u=e.i(463437),c=e.i(693249),h=e.i(240029);e.i(311046);var f=e.i(52422),m=e.i(355351),p=e.i(142207),g=e.i(499881),x=e.i(587076),v=e.i(885895);e.i(821194);var b=e.i(99222),y=e.i(88255),T=e.i(14431),w=e.i(997053);let S=w.U.div.withConfig({displayName:"HoneycombSlider.styles__CanvasStage",componentId:"sc-81fb4a70-0"})`
  position: absolute;
  inset: 0;
  z-index: 1;
  touch-action: pan-y;

  & > canvas {
    position: absolute;
    inset: 0;
    display: block;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }
`,E=w.U.div.withConfig({displayName:"HoneycombSlider.styles__SlideMarker",componentId:"sc-81fb4a70-1"})`
  position: absolute;
  inset: 0;
  opacity: 0;
  pointer-events: none;
`;var $=e.i(808847),k=e.i(864988),A=e.i(650529),R=e.i(691423),I=e.i(941408);let _=()=>({width:0,height:0,columns:0,size:0,rowStep:0,originX:0,originY:0,texWidth:1,texHeight:1,cells:[],index:new Map}),C=(e,t,i)=>(e+1)*i+(t+1),M=e=>Math.round(255*(0,I.Y)(e));class B{grid=_();texA=new Uint8Array(4);texB=new Uint8Array(4);texS=new Uint8Array(4);transition=null;activeBackdrop=null;leavingBackdrop=null;hover=new Map;accentKeys=[];edges=f.Z;shimmer=A.H;dirtyA=!0;dirtyB=!0;dirtyS=!0;pop=(0,I.j)(I.m);reveal=(0,I.j)(I.T);easeIn=(0,I.j)(I.D);standard=(0,I.j)(I.O);resize(e,t,i){this.grid=((e,t,i)=>{if(e<=0||t<=0||i<1)return _();let r=(0,m.T)(e,t,i),{size:n,rowStep:a,originX:l,originY:o}=(0,m.l)(e,t,i),s=Math.ceil(t/a)+1,d=i+3,u=new Map;for(let e of r)u.set(e.key,C(e.row,e.col,d));return{width:e,height:t,columns:i,size:n,rowStep:a,originX:l,originY:o,texWidth:d,texHeight:s+2,cells:r,index:u}})(e,t,i);let r=this.grid.texWidth*this.grid.texHeight*4;this.texA=new Uint8Array(r),this.texB=new Uint8Array(r),this.texS=new Uint8Array(r),this.fillReveal(255*!this.transition?.reveal),this.transition?.reveal&&(this.transition.reveal=this.buildReveal(this.transition.spec)),this.applyEdge(),this.applyAccent(),this.activeBackdrop=null,this.leavingBackdrop=null,this.hover.clear(),this.dirtyA=!0,this.dirtyB=!0,this.dirtyS=!0}fillReveal(e){for(let t=0;t<this.texA.length;t+=4)this.texA[t]=e,this.texA[t+1]=e}applyEdge(){for(let e=0;e<this.texS.length;e+=4)this.texS[e]=0;let{width:e,height:t,columns:i,index:r}=this.grid;if(!(e<=0))for(let n of(0,g.T)(e,t,i,(0,g.t)(this.edges)).cells){let e=r.get(n.key);void 0!==e&&(this.texS[4*e]=M(n.alpha))}}setEdges(e){this.edges=e,this.applyEdge(),this.dirtyS=!0}applyAccent(){for(let e=0;e<this.texS.length;e+=4)this.texS[e+1]=0,this.texS[e+2]=0;for(let e of this.accentKeys){let t=this.grid.index.get(e);void 0!==t&&(this.texS[4*t+1]=255)}for(let e of(0,$.J)(this.grid.cells,this.accentKeys)){let t=this.grid.index.get(e.key);void 0!==t&&(this.texS[4*t+2]=M(e.alpha))}}setAccentKeys(e){this.accentKeys=e,this.applyAccent(),this.dirtyS=!0}buildReveal(e){let{width:t,height:i,columns:r,index:n,texWidth:a,texHeight:l}=this.grid,o=new Float32Array(a*l).fill(-1);if(t<=0)return{delays:o,duration:1};let s=(0,k.E)({width:t,height:i,imageWidth:t,imageHeight:i,columns:r,direction:e.direction,duration:e.timeline.image.duration});for(let e of s.tiles){let t=n.get(e.key);void 0!==t&&(o[t]=e.delay)}return{delays:o,duration:Math.max(1,s.tileDuration)}}startTransition(e){let t=e.timeline;this.transition={spec:e,end:e.start+t.total,imageStart:e.start+t.image.delay,imageDuration:Math.max(1,t.image.duration),reveal:"tiles"===e.mode?this.buildReveal(e):null},this.fillReveal(255*("tiles"!==e.mode)),this.dirtyA=!0}endTransition(){if(this.transition||this.leavingBackdrop){this.transition=null,this.leavingBackdrop=null,this.fillReveal(255);for(let e=0;e<this.texB.length;e+=4)this.texB[e]=0;this.dirtyA=!0,this.dirtyB=!0}}isTransitioning(){return null!==this.transition}setActiveBackdrop(e,t,i){for(let e=2;e<this.texA.length;e+=4)this.texA[e]=0,this.texA[e+1]=0;let r=[],n=t;for(let a of e){let e=this.grid.index.get(a.key);void 0!==e&&(r.push({index:e,alpha:a.alpha,delay:a.delay}),this.texA[4*e+2]=M(a.alpha),n=Math.max(n,t+a.delay+i))}this.activeBackdrop={cells:r,start:t,pop:Math.max(1,i),end:n,done:!1},this.dirtyA=!0}setLeavingBackdrop(e,t,i,r){for(let e=0;e<this.texB.length;e+=4)this.texB[e]=0;let n=[];for(let t of e){let e=this.grid.index.get(t.key);void 0!==e&&(n.push({index:e,alpha:t.alpha}),this.texB[4*e]=M(t.alpha))}this.leavingBackdrop={cells:n,start:t+i,duration:Math.max(1,r),end:t+i+r,done:!1},this.dirtyB=!0}clearBackdrops(){for(let e=0;e<this.texA.length;e+=4)this.texA[e+2]=0,this.texA[e+3]=0,this.texB[e]=0;this.activeBackdrop=null,this.leavingBackdrop=null,this.dirtyA=!0,this.dirtyB=!0}setPointer(e,t,i){let r=new Set;for(let n of this.grid.cells){if(Math.abs(n.cx-e)>70||Math.abs(n.cy-t)>70)continue;let a=(0,m.a)(n,e,t,70);if(a<=0)continue;let l=this.grid.index.get(n.key);if(void 0===l)continue;r.add(l);let o=.25+.75*a,s=this.hover.get(l);s&&"out"!==s.phase?s.lit=o:this.hover.set(l,{index:l,lit:o,phase:"in",start:i,fromO:s?.o??0,fromT:s?.t??0,o:s?.o??0,t:s?.t??0})}for(let e of this.hover.values())"in"!==e.phase||r.has(e.index)||this.release(e,i)}clearPointer(e){for(let t of this.hover.values())"in"===t.phase&&this.release(t,e)}release(e,t){e.phase="out",e.start=t,e.fromO=e.o,e.fromT=e.t}hoverCount(){return this.hover.size}tick(e){let t={mode:0,recede:0,settle:1,maskT:0,fade:0,time:e/1e3,shimmer:this.shimmer,shimmerMin:A.e[0]/1e3,shimmerMax:A.e[1]/1e3},i=!1,r=this.transition;if(r)if(e>=r.end)this.endTransition();else{i=!0;let n=(0,I.Y)((e-r.imageStart)/r.imageDuration);if("tiles"===r.spec.mode&&r.reveal){t.mode=1,t.recede=(0,I.b)(this.reveal,n);let{delays:i,duration:a}=r.reveal;for(let t=0;t<i.length;t+=1){let n=i[t];if(n<0)continue;let l=(0,I.Y)((e-r.imageStart-n)/a);this.texA[4*t]=M((0,I.b)(this.pop,l)),this.texA[4*t+1]=M((0,I.b)(this.pop,Math.min(1,l/.6)))}this.dirtyA=!0}else if("mask"===r.spec.mode){t.mode=2,t.recede=(0,I.b)(this.reveal,n),t.maskT=(0,I.b)(this.reveal,n);let i=(0,I.Y)((e-r.imageStart)/(1.4*r.imageDuration));t.settle=1.08-(1.08-1)*(0,I.b)(this.pop,i)}else t.mode=3,t.fade=(0,I.b)(this.standard,(0,I.Y)((e-r.spec.start)/400))}let n=this.activeBackdrop;if(n&&n.cells.length>0&&!n.done){for(let t of n.cells){let i=(0,I.Y)((e-n.start-t.delay)/n.pop);this.texA[4*t.index+3]=M((0,I.b)(this.pop,i))}this.dirtyA=!0,e<n.end?i=!0:n.done=!0}let a=this.leavingBackdrop;if(a&&a.cells.length>0&&!a.done){let t=1-(0,I.b)(this.easeIn,(0,I.Y)((e-a.start)/a.duration));for(let e of a.cells)this.texB[4*e.index]=M(e.alpha*t);this.dirtyB=!0,e<a.end?i=!0:a.done=!0}if(this.hover.size>0){for(let t of this.hover.values()){if("in"===t.phase){let i=(0,I.b)(this.pop,(0,I.Y)((e-t.start)/420));t.t=t.fromT+(1-t.fromT)*i,t.o=t.fromO+(t.lit-t.fromO)*i}else{let i=(0,I.Y)((e-t.start)/650),r=(0,I.b)(this.pop,i);t.t=t.fromT*(1-r),t.o=t.fromO*(1-r),i>=1&&(t.t=0,t.o=0,this.hover.delete(t.index))}this.texB[4*t.index+1]=M(t.o),this.texB[4*t.index+2]=M(t.t)}this.dirtyB=!0,this.hover.size>0&&(i=!0)}let l={uniforms:t,dirtyA:this.dirtyA,dirtyB:this.dirtyB,dirtyS:this.dirtyS,animating:i,transitioning:null!==this.transition};return this.dirtyA=!1,this.dirtyB=!1,this.dirtyS=!1,l}}var P=e.i(118410);let D=`#version 300 es
in vec2 aPosition;
void main() {
  gl_Position = vec4(aPosition, 0.0, 1.0);
}
`,H=`#version 300 es
precision highp float;
precision highp int;

uniform vec2 uSize;
uniform float uDpr;
uniform vec2 uOrigin;
uniform float uCell;
uniform float uRowStep;
uniform ivec2 uTexDims;
uniform sampler2D uCellsA;
uniform sampler2D uCellsB;
uniform sampler2D uCellsS;
uniform sampler2D uImgA;
uniform sampler2D uImgB;
uniform vec4 uCoverA;
uniform vec4 uCoverB;
uniform float uHasA;
uniform float uHasB;
uniform int uMode;
uniform float uRecede;
uniform float uSettle;
uniform float uMaskT;
uniform float uFade;
uniform vec3 uBlue;
uniform vec3 uFill;
uniform float uTime;
uniform float uShimmer;
uniform float uShimmerMin; // Periode des Atmens je Zelle in s, aus SHIMMER_PERIOD_MS (#1721)
uniform float uShimmerMax;
out vec4 outColor;

const float TILT = 0.2443461; // 14\xb0 im Bogenma\xdf
const float MASK_GROWTH = 3.2;        // mask-size 320 %
const float MASK_HEX = 100.0 / 140.0; // Sechseck in der gepolsterten viewBox
const float MASK_BLUR = 5.0 / 140.0;  // feGaussianBlur stdDeviation 5
const float BLEED = 1.0;              // 1 px \xdcberstand je Seite wie die DOM-Kacheln (gegen Haarlinien)
const float TAU = 6.2831853;

vec3 sampleCover(sampler2D img, vec4 cover, vec2 p) {
  vec2 uv = (p - cover.xy) / cover.zw;
  return texture(img, clamp(uv, 0.0, 1.0)).rgb;
}

// Sechseck mit Spitze oben in einem Quadrat der halben Kantenl\xe4nge h (clip-path der Kacheln)
bool inHex(vec2 d, float h) {
  return abs(d.x) <= h && abs(d.y) <= h - 0.5 * abs(d.x);
}

// Zufall 0…1 je Zelle, stabil \xfcber Frames
float cellSeed(float row, float col) {
  return fract(sin(dot(vec2(row, col), vec2(12.9898, 78.233))) * 43758.5453);
}

// Atmen einer teiltransparenten Randkachel: \xb1uShimmer ihrer Deckung, volle und leere stehen
float shimmer(float v, float seed) {
  if (uShimmer <= 0.0 || v <= 0.005 || v >= 0.995) return v;
  float period = uShimmerMin + (uShimmerMax - uShimmerMin) * fract(seed * 7.13);
  return clamp(v * (1.0 + uShimmer * sin(TAU * (uTime / period + seed))), 0.0, 1.0);
}

// Umkehrung von scale(t) rotate(a) um die Zellmitte, a = -14\xb0 \xb7 (1 - t)
vec2 untransform(vec2 d, float t) {
  float a = -TILT * (1.0 - t);
  float c = cos(a);
  float s = sin(a);
  vec2 r = vec2(c * d.x + s * d.y, -s * d.x + c * d.y);
  return r / max(t, 1e-4);
}

void main() {
  vec2 p = vec2(gl_FragCoord.x / uDpr, uSize.y - gl_FragCoord.y / uDpr);
  float s = uCell;
  float h = 0.5 * s;

  // Zelle des Pixels: zwei Reihen- und zwei Spaltenkandidaten, exakter Sechsecktest
  float row = 0.0;
  float col = 0.0;
  vec2 ctr = p;
  bool found = false;
  float rf = floor((p.y - uOrigin.y - 0.25 * s) / uRowStep);
  for (int i = 0; i < 2; i++) {
    if (found) break;
    float r = rf + float(i);
    float shift = (mod(abs(r), 2.0) == 1.0) ? h : 0.0;
    float cf = floor((p.x - uOrigin.x + shift - h) / s);
    for (int j = 0; j < 2; j++) {
      float c = cf + float(j);
      vec2 cc = vec2(c * s - shift + h + uOrigin.x, r * uRowStep + 0.25 * s + uOrigin.y);
      if (inHex(p - cc, h)) {
        row = r;
        col = c;
        ctr = cc;
        found = true;
        break;
      }
    }
  }
  ivec2 ti = ivec2(int(col) + 1, int(row) + 1);
  bool inTex = found && ti.x >= 0 && ti.y >= 0 && ti.x < uTexDims.x && ti.y < uTexDims.y;
  vec4 ca = inTex ? texelFetch(uCellsA, ti, 0) : vec4(1.0, 1.0, 0.0, 0.0);
  vec4 cb = inTex ? texelFetch(uCellsB, ti, 0) : vec4(0.0);
  vec4 cs = inTex ? texelFetch(uCellsS, ti, 0) : vec4(0.0);
  vec2 d = p - ctr;
  vec2 centre = 0.5 * uSize;
  float seed = cellSeed(row, col);

  // alter Slide weicht zur\xfcck: scale 1 → 1,06, brightness 1 → 0,55
  float recedeScale = 1.0 + 0.06 * uRecede;
  vec3 leaving = uHasB > 0.5
    ? sampleCover(uImgB, uCoverB, centre + (p - centre) / recedeScale) * (1.0 - 0.45 * uRecede)
    : uFill;
  vec3 activePlain = uHasA > 0.5 ? sampleCover(uImgA, uCoverA, p) : uFill;

  vec3 media;
  if (uMode == 1) {
    // Kachel um Kachel: die Kachel zeigt den neuen Slide deckungsgleich, poppt skaliert/gedreht auf
    media = leaving;
    float t = ca.r;
    if (t > 0.002 && uHasA > 0.5) {
      vec2 d0 = untransform(d, t);
      if (inHex(d0, h + BLEED)) media = mix(leaving, sampleCover(uImgA, uCoverA, ctr + d0), ca.g);
    }
  } else if (uMode == 2) {
    // wachsende Sechseck-Maske mit weichem Rand (Videos, Slides ohne Bild)
    vec2 ps = centre + (p - centre) / uSettle;
    vec3 act = uHasA > 0.5 ? sampleCover(uImgA, uCoverA, ps) : uFill;
    float maskWidth = uMaskT * MASK_GROWTH * uSize.x;
    float halfW = 0.5 * maskWidth * MASK_HEX;
    float sigma = max(maskWidth * MASK_BLUR, 0.5);
    vec2 dm = abs(p - centre);
    float sd = max(dm.x - halfW, dm.y - (halfW - 0.5 * dm.x));
    float cov = 1.0 - smoothstep(-1.5 * sigma, 1.5 * sigma, sd);
    media = mix(leaving, act, cov);
  } else if (uMode == 3) {
    media = mix(leaving, activePlain, uFade);
  } else {
    media = activePlain;
  }

  // Fester Rand um Pfeile und Pagination: multipliziert Blau ein, unter dem Hover-Licht;
  // teiltransparente Kacheln hier, hinter dem Text und an der Unterkante atmen (shimmer)
  float halo = shimmer(cs.b, seed);
  if (halo > 0.002) media *= mix(vec3(1.0), uBlue, halo);

  // Hover-Licht: wei\xdfe Kachel (Akzentzellen blau), poppt um die Zellmitte auf
  float ho = cb.g;
  float ht = cb.b;
  if (ho > 0.002 && ht > 0.002) {
    vec2 dh = untransform(d, ht);
    if (inHex(dh, h)) media = cs.g > 0.5 ? mix(media, uBlue, ho) : mix(media, vec3(1.0), 0.55 * ho);
  }

  // Overlay hinter Headline, Text und CTA: multipliziert Blau ein — aktiver Slide poppt, alter blendet aus
  float ba = shimmer(ca.b, seed);
  float bp = ca.a;
  if (ba > 0.002 && bp > 0.002) {
    vec2 db = untransform(d, bp);
    if (inHex(db, h + BLEED)) media *= mix(vec3(1.0), uBlue, ba * bp);
  }
  float lo = cb.r;
  if (lo > 0.002) media *= mix(vec3(1.0), uBlue, lo);

  // Unterkante: herausgeschnittene Zellen lassen den Rahmen durchscheinen (premultipliziert)
  float alpha = 1.0 - shimmer(cs.r, seed);
  outColor = vec4(media * alpha, alpha);
}
`,U=e=>{},z=(e,t,i)=>{let r=e.createShader(t);if(!r)throw Error("honeycomb: shader allocation failed");if(e.shaderSource(r,i),e.compileShader(r),!e.getShaderParameter(r,e.COMPILE_STATUS)){let t=e.getShaderInfoLog(r)??"";throw e.deleteShader(r),Error(`honeycomb: shader compile failed: ${t}`)}return r},L=["uSize","uDpr","uOrigin","uCell","uRowStep","uTexDims","uCellsA","uCellsB","uCellsS","uImgA","uImgB","uCoverA","uCoverB","uHasA","uHasB","uMode","uRecede","uSettle","uMaskT","uFade","uBlue","uFill","uTime","uShimmer","uShimmerMin","uShimmerMax"],N=()=>"u">typeof performance?performance.now():Date.now(),j=(e,t)=>new Promise(i=>{let r=()=>{for(let i of t)e.removeEventListener(i,r);i()};for(let i of t)e.addEventListener(i,r,{once:!0})});var W=e.i(720900);let X=i=>{let[n,a]=(0,r.useState)(null),l=(0,r.useCallback)(()=>{e.A(28217).then(e=>e.HeroSlider).then(e=>a(()=>e),e=>(0,T.y)(e,{tags:{component:"HoneycombSlider"}}))},[]);return n?(0,t.jsx)(n,{...i,dataTestId:i.dataTestId??"honeycomb-slider"}):(0,t.jsx)(F,{...i,onUnsupported:l})},F=({slides:e,autoplay:T=!0,autoplayDelay:w=7e3,transitionDuration:I=2400,tileColumns:_,initialIndex:C=0,onCtaClick:M,dataTestId:X="honeycomb-slider",dataAttributes:F,className:O,edges:G,pageHeading:K=!1,onUnsupported:Y})=>{let V=(0,n.useRouter)(),{language:Z}=(0,v.N)(),{tr:J}=(0,b.f)(Z),q=e.length,Q=(0,r.useRef)(null),ee=(0,W.f)(Q),et=(0,x.f)(),ei=(0,d.f)({count:q,autoplay:T&&!et,autoplayDelay:w,transitionDuration:I,initialIndex:C,inView:ee}),er=(0,u.f)(ei.activeIndex,q),en=(0,r.useMemo)(()=>(0,s.J)(I),[I]),ea=(0,r.useMemo)(()=>(0,s.g)(I),[I]),el=(0,r.useRef)(null),eo=(0,r.useRef)(new Map),es=(0,h.f)(Q,40),ed=_??es.columns,eu=(0,r.useMemo)(()=>(0,R.V)((0,f.L)(G),es.width),[G,es.width]),ec=es.width>0?(0,f.w)(eu,es.width,ed):(0,f.f)(eu),eh=(0,a.V)(es.width),ef=e[ei.activeIndex]?.cta,{accentKeys:em,onCellsChange:ep}=(0,a.v)(!!ef),eg=(0,c.f)(ei),ex=(({canvasRef:e,width:t,height:i,columns:n,slides:a,slider:l,transitionDuration:o,reducedMotion:d,accentKeys:u,edges:c,mediaRefs:h,onUnsupported:f})=>{let[m,p]=(0,r.useState)(!1),g=(0,r.useRef)(null),x=(0,r.useRef)(null),v=(0,r.useRef)(new Map),b=(0,r.useRef)(new Map),y=(0,r.useRef)(new Map),T=(0,r.useRef)(new Map),w=(0,r.useRef)(null),S=(0,r.useRef)(new Map),E=(0,r.useRef)(null),I=(0,r.useRef)(null),_=(0,r.useRef)(!0),C=(0,r.useRef)(()=>void 0),M=(0,r.useRef)(f),W=(0,r.useRef)({width:t,height:i,active:l.activeIndex,leaving:l.previousIndex,cycle:l.cycle,reduced:d,count:a.length,slides:a});(0,r.useEffect)(()=>{W.current={width:t,height:i,active:l.activeIndex,leaving:l.previousIndex,cycle:l.cycle,reduced:d,count:a.length,slides:a},M.current=f});let X=(0,r.useCallback)(e=>{E.current=null;let t=g.current,i=x.current;if(!t||!i)return;let r=i.tick(e);r.dirtyA&&t.uploadCells("A",i.texA),r.dirtyB&&t.uploadCells("B",i.texB),r.dirtyS&&t.uploadCells("S",i.texS);let{width:n,height:a,active:l,leaving:o}=W.current,s=!1,d=(e,i)=>{let r=null===i?void 0:v.current.get(i);if(!r)return void t.setImage(e,null);"video"===r.kind&&(t.updateVideoTexture(r.texture,r.element),s=!0);let l=(0,R.v)(W.current.slides[i]?.focalPoint),o=(0,k.P)(Math.max(n,1),Math.max(a,1),r.width,r.height,l);t.setImage(e,r.texture,o)};d("A",l),d("B",r.transitioning?o:null),t.render(r.uniforms),_.current&&(r.animating||s?C.current():i.shimmer>0&&_.current&&null===I.current&&(I.current=setTimeout(()=>{I.current=null,C.current()},50)))},[]),F=(0,r.useCallback)(()=>{null!==E.current||"function"!=typeof requestAnimationFrame||g.current&&(E.current=requestAnimationFrame(X))},[X]);(0,r.useEffect)(()=>{C.current=F},[F]);let O=(0,r.useCallback)(()=>{let e=g.current;if(!e)return;let{active:t,leaving:i,count:r}=W.current,n=Math.max(r,1),a=new Set([t,i??-1,(t+1)%n,(t-1+n)%n]);for(let[t,i]of v.current)a.has(t)||(e.deleteTexture(i.texture),v.current.delete(t))},[]),G=(0,r.useCallback)(e=>{if(v.current.has(e)||b.current.has(e))return;let t=h.current?.get(e);if(!t||!g.current)return;let i=(async()=>{if(t instanceof HTMLVideoElement){if(t.readyState<2&&await j(t,["loadeddata","error"]),!g.current||t.readyState<2||v.current.has(e))return;v.current.set(e,{texture:g.current.createVideoTexture(),width:t.videoWidth||16,height:t.videoHeight||9,kind:"video",element:t})}else{if(t.complete||await j(t,["load","error"]),!t.naturalWidth)return;if("function"==typeof t.decode)try{await t.decode()}catch{}if(!g.current||v.current.has(e))return;v.current.set(e,{texture:g.current.createImageTexture(t),width:t.naturalWidth,height:t.naturalHeight,kind:"image",element:t})}O(),C.current()})().finally(()=>{b.current.delete(e)});b.current.set(e,i)},[O,h]),K=(0,r.useCallback)((e,t,i)=>{let r=x.current;if(!r)return[];let n=T.current.get(e);if(n&&n.rects===t)return n.cells;let a=(0,$.v)(r.grid.cells,t,A.V,0,i);return T.current.set(e,{rects:t,cells:a}),a},[]),Y=(0,r.useCallback)((e,t,i,r)=>{let n=x.current;if(!n)return;let a=y.current.get(e);if(!a){w.current={index:e,start:t,timeline:i,cycle:r};return}w.current=null;let l=K(e,a,i.backdropIn.duration).map(e=>({...e,delay:e.delay+i.backdropIn.delay})),o=(0,$.r)(i.backdropIn.duration);W.current.reduced&&(l=l.map(e=>({...e,delay:0})),o=200),n.setActiveBackdrop(l,t,o),S.current.set(e,r)},[K]),V=(0,r.useCallback)((e,t)=>{y.current.set(e,t);let{active:i,cycle:r}=W.current;if(e!==i)return;let n=w.current;n&&n.index===e?Y(e,n.start,n.timeline,n.cycle):S.current.get(e)===r?Y(e,N()-6e4,(0,s.J)(o),r):Y(e,N(),(0,s.g)(o),r),C.current()},[Y,o]);(0,r.useEffect)(()=>{let t=e.current;if(!t)return;let i=((e,t={})=>{let i,r,n=null;try{n=e.getContext("webgl2",{alpha:!0,premultipliedAlpha:!0,antialias:!1,depth:!1,stencil:!1,powerPreference:"high-performance"})}catch{n=null}if(!n)return U("WebGL2 nicht verfügbar"),null;let a=n;try{let e=z(a,a.VERTEX_SHADER,D),t=z(a,a.FRAGMENT_SHADER,H),i=a.createProgram();if(!i)return null;if(a.attachShader(i,e),a.attachShader(i,t),a.linkProgram(i),a.deleteShader(e),a.deleteShader(t),!a.getProgramParameter(i,a.LINK_STATUS))return U(`Programm nicht gelinkt: ${a.getProgramInfoLog(i)??""}`),a.deleteProgram(i),null;r=i}catch(e){return U(e instanceof Error?e.message:String(e)),null}let l={};for(let e of L)l[e]=a.getUniformLocation(r,e);let o=a.createVertexArray(),s=a.createBuffer();a.bindVertexArray(o),a.bindBuffer(a.ARRAY_BUFFER,s),a.bufferData(a.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),a.STATIC_DRAW);let d=a.getAttribLocation(r,"aPosition");a.enableVertexAttribArray(d),a.vertexAttribPointer(d,2,a.FLOAT,!1,0,0),a.bindVertexArray(null);let u=()=>{let e=a.createTexture();if(!e)throw Error("honeycomb: texture allocation failed");return a.bindTexture(a.TEXTURE_2D,e),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MAG_FILTER,a.NEAREST),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE),a.texImage2D(a.TEXTURE_2D,0,a.RGBA8,1,1,0,a.RGBA,a.UNSIGNED_BYTE,new Uint8Array([255,255,0,0])),e},c={A:u(),B:u(),S:u()},h={width:1,height:1},f={A:{texture:null,cover:{offsetX:0,offsetY:0,bgWidth:1,bgHeight:1}},B:{texture:null,cover:{offsetX:0,offsetY:0,bgWidth:1,bgHeight:1}}},m=u(),p={width:1,height:1,dpr:1},g=null,x=!1,[v,b,y]=[parseInt((i=P.h.PRIMARY.replace("#","")).slice(0,2),16)/255,parseInt(i.slice(2,4),16)/255,parseInt(i.slice(4,6),16)/255],T=e=>{e.preventDefault(),x=!0,t.onContextLost?.()};e.addEventListener("webglcontextlost",T),a.pixelStorei(a.UNPACK_ALIGNMENT,1),a.disable(a.BLEND),a.disable(a.DEPTH_TEST),a.clearColor(0,0,0,0);let w=(e,t)=>{a.activeTexture(a.TEXTURE0+t),a.bindTexture(a.TEXTURE_2D,f[e].texture??m)};return{resize(t,i,r){let n=Math.max(1,Math.min(r,2)),l=Math.round((p={width:Math.max(1,t),height:Math.max(1,i),dpr:n}).width*n),o=Math.round(p.height*n);e.width!==l&&(e.width=l),e.height!==o&&(e.height=o),a.viewport(0,0,l,o)},setGrid(e){if(g=e,e.texWidth!==h.width||e.texHeight!==h.height)for(let t of(h={width:e.texWidth,height:e.texHeight},Object.values(c)))a.bindTexture(a.TEXTURE_2D,t),a.texImage2D(a.TEXTURE_2D,0,a.RGBA8,h.width,h.height,0,a.RGBA,a.UNSIGNED_BYTE,null)},uploadCells(e,t){x||t.length===h.width*h.height*4&&(a.bindTexture(a.TEXTURE_2D,c[e]),a.texSubImage2D(a.TEXTURE_2D,0,0,0,h.width,h.height,a.RGBA,a.UNSIGNED_BYTE,t))},createImageTexture(e){let t=a.createTexture();if(!t)throw Error("honeycomb: texture allocation failed");return a.bindTexture(a.TEXTURE_2D,t),a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,!1),a.texImage2D(a.TEXTURE_2D,0,a.RGBA,a.RGBA,a.UNSIGNED_BYTE,e),a.generateMipmap(a.TEXTURE_2D),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR_MIPMAP_LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MAG_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE),t},createVideoTexture(){let e=a.createTexture();if(!e)throw Error("honeycomb: texture allocation failed");return a.bindTexture(a.TEXTURE_2D,e),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MAG_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE),a.texImage2D(a.TEXTURE_2D,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,new Uint8Array([0,65,110,255])),e},updateVideoTexture(e,t){x||t.readyState<2||(a.bindTexture(a.TEXTURE_2D,e),a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,!1),a.texImage2D(a.TEXTURE_2D,0,a.RGBA,a.RGBA,a.UNSIGNED_BYTE,t))},deleteTexture(e){f.A.texture===e&&(f.A.texture=null),f.B.texture===e&&(f.B.texture=null),a.deleteTexture(e)},setImage(e,t,i){f[e].texture=t,i&&(f[e].cover=i)},render(e){if(x||!g)return;a.useProgram(r),a.bindVertexArray(o),a.activeTexture(a.TEXTURE0),a.bindTexture(a.TEXTURE_2D,c.A),a.activeTexture(a.TEXTURE1),a.bindTexture(a.TEXTURE_2D,c.B),a.activeTexture(a.TEXTURE2),a.bindTexture(a.TEXTURE_2D,c.S),w("A",3),w("B",4),a.uniform1i(l.uCellsA,0),a.uniform1i(l.uCellsB,1),a.uniform1i(l.uCellsS,2),a.uniform1i(l.uImgA,3),a.uniform1i(l.uImgB,4),a.uniform2f(l.uSize,p.width,p.height),a.uniform1f(l.uDpr,p.dpr),a.uniform2f(l.uOrigin,g.originX,g.originY),a.uniform1f(l.uCell,Math.max(g.size,.001)),a.uniform1f(l.uRowStep,Math.max(g.rowStep,.001)),a.uniform2i(l.uTexDims,h.width,h.height);let t=f.A.cover,i=f.B.cover;a.uniform4f(l.uCoverA,t.offsetX,t.offsetY,t.bgWidth,t.bgHeight),a.uniform4f(l.uCoverB,i.offsetX,i.offsetY,i.bgWidth,i.bgHeight),a.uniform1f(l.uHasA,+!!f.A.texture),a.uniform1f(l.uHasB,+!!f.B.texture),a.uniform1i(l.uMode,e.mode),a.uniform1f(l.uRecede,e.recede),a.uniform1f(l.uSettle,e.settle),a.uniform1f(l.uMaskT,e.maskT),a.uniform1f(l.uFade,e.fade),a.uniform3f(l.uBlue,v,b,y),a.uniform3f(l.uFill,v,b,y),a.uniform1f(l.uTime,e.time),a.uniform1f(l.uShimmer,e.shimmer),a.uniform1f(l.uShimmerMin,e.shimmerMin),a.uniform1f(l.uShimmerMax,e.shimmerMax),a.clear(a.COLOR_BUFFER_BIT),a.drawArrays(a.TRIANGLES,0,3),a.bindVertexArray(null)},dispose(){if(e.removeEventListener("webglcontextlost",T),!x){for(let e of Object.values(c))a.deleteTexture(e);a.deleteTexture(m),f.A.texture&&a.deleteTexture(f.A.texture),f.B.texture&&f.B.texture!==f.A.texture&&a.deleteTexture(f.B.texture),a.deleteBuffer(s),a.deleteVertexArray(o),a.deleteProgram(r)}}}})(t,{onContextLost:()=>M.current()});if(!i)return void M.current();g.current=i,x.current=new B;let r=v.current,n=b.current;return p(!0),()=>{for(let e of(null!==E.current&&"function"==typeof cancelAnimationFrame&&cancelAnimationFrame(E.current),E.current=null,null!==I.current&&clearTimeout(I.current),I.current=null,r.values()))i.deleteTexture(e.texture);r.clear(),n.clear(),i.dispose(),g.current=null,x.current=null,p(!1)}},[e]),(0,r.useEffect)(()=>{let e=x.current,r=g.current;if(!e||!r||t<=0||i<=0)return;e.resize(t,i,n),T.current.clear(),r.resize(t,i,window.devicePixelRatio||1),r.setGrid(e.grid),e.setAccentKeys(u);let{active:a,cycle:l}=W.current;if(y.current.has(a)){let e=S.current.get(a)===l;Y(a,e?N()-6e4:N(),e?(0,s.J)(o):(0,s.g)(o),l)}C.current()},[t,i,n,m,Y,o]),(0,r.useEffect)(()=>{x.current?.setAccentKeys(u),C.current()},[u,m]);let Z=JSON.stringify(c);(0,r.useEffect)(()=>{x.current?.setEdges(JSON.parse(Z)),C.current()},[Z,m]),(0,r.useEffect)(()=>{let e=x.current;e&&(e.shimmer=d?0:A.H,C.current())},[d,m]),(0,r.useEffect)(()=>{let t=e.current;if(!t||"u"<typeof IntersectionObserver)return;let i=new IntersectionObserver(([e])=>{_.current=e?.isIntersecting??!0,_.current&&C.current()});return i.observe(t),()=>i.disconnect()},[e,m]);let{activeIndex:J,previousIndex:q,cycle:Q,direction:ee}=l;return(0,r.useEffect)(()=>{let e=x.current;if(!e)return;let t=N();if(null!==q){let i=(0,s.J)(o),r=d?"fade":a[J]?.image?"tiles":"mask";e.startTransition({mode:r,direction:ee,start:t,timeline:i});let n=y.current.get(q),l=n?K(q,n,i.backdropIn.duration):[];e.setLeavingBackdrop(l,t,i.textOut.delay,i.textOut.duration),Y(J,t,i,Q)}else e.endTransition(),0!==Q||S.current.has(J)||Y(J,t,(0,s.g)(o),0);G(J),null===q&&a.length>1&&G((J+1)%a.length),C.current()},[J,q,Q,ee,a,o,d,m,Y,K,G]),{ready:m,movePointer:(0,r.useCallback)((e,t)=>{let i=x.current;i&&!W.current.reduced&&(i.setPointer(e,t,N()),C.current())},[]),leavePointer:(0,r.useCallback)(()=>{x.current?.clearPointer(N()),C.current()},[]),reportRects:V}})({canvasRef:el,width:es.width,height:es.height,columns:ed,slides:e,slider:ei,transitionDuration:I,reducedMotion:et,accentKeys:em,edges:eu,mediaRefs:eo,onUnsupported:Y}),ev=(0,p.f)({onMove:(e,t)=>ex.movePointer(e,t),onLeave:()=>ex.leavePointer()}),eb=e=>t=>{t?eo.current.set(e,t):eo.current.delete(e)},ey=e=>e===ei.activeIndex?"active":e===ei.previousIndex?"leaving":"hidden";if(0===q)return null;let eT=e=>J("heroSlider.slideOf",{defaultValue:"Slide {{index}} von {{count}}",index:e+1,count:q});return(0,t.jsxs)(o.F,{ref:Q,className:O,$edgeColor:(0,f.k)(eu),...F,"data-testid":X,"data-renderer":"webgl","data-ready":ex.ready?"true":"false","data-columns":ed,"data-active-index":ei.activeIndex,"data-header-tone":e[ei.activeIndex]?.tone,"data-transitioning":ei.isTransitioning?"true":"false","data-edge-padding":ec,"data-edges":(0,g.a)(eu),"data-page-hero":"true","data-hex-stage":"true",style:{"--edge-padding":`${ec}px`,"--hex-cell":`${(0,m.z)(es.width,ed)}px`},role:"region","aria-roledescription":J("heroSlider.roleCarousel",{defaultValue:"carousel"}),"aria-label":J("heroSlider.label",{defaultValue:"Bildergalerie"}),...eg.root,...ev,children:[(0,t.jsxs)(S,{...eg.stage,children:[(0,t.jsx)("canvas",{ref:el,"data-testid":`${X}-canvas`,"aria-hidden":"true"}),e.map((e,i)=>{let r=ey(i),n=e.alt??e.headline??"",a=er.has(i);return(0,t.jsx)(E,{id:`${X}-slide-${i}`,"data-testid":`${X}-slide-${i}`,"data-state":r,role:"group","aria-roledescription":J("heroSlider.roleSlide",{defaultValue:"slide"}),"aria-label":eT(i),"aria-hidden":"active"!==r,children:e.video?(0,t.jsx)(o.M,{ref:eb(i),autoPlay:!0,muted:!0,loop:!0,playsInline:!0,preload:a?"auto":"none","aria-label":n,"data-testid":`${X}-slide-${i}-video`,children:a&&(0,t.jsx)("source",{src:e.video,type:"video/mp4","data-testid":`${X}-slide-${i}-video-source`})}):e.image?(0,t.jsx)(o.L,{ref:eb(i),src:a?(0,y.a)(e.image,y.f):void 0,srcSet:a?(0,y.l)(e.image):void 0,sizes:y.r,alt:n,$focal:(0,R.A)(e.focalPoint),loading:a?"eager":"lazy",fetchPriority:a&&"active"!==r?"low":void 0,decoding:"async",draggable:!1,"data-testid":`${X}-slide-${i}-image`}):null},i)})]}),(0,t.jsxs)(o.k,{children:[e.map((e,i)=>e.headline||e.text||q>1?(0,t.jsx)(l.f,{slide:e,index:i,state:ey(i),timeline:0===ei.cycle?ea:en,columns:ed,dataTestId:X,backdrop:"none",onRectsChange:ex.reportRects,pageHeading:K&&0===i,cornerCta:!!e.cta,reservePagination:q>1?q:0,reserveArrows:eh},i):null),q>1&&(0,t.jsx)(a.I,{count:q,arrows:eh,slider:ei,progressDuration:T?w:void 0,getLabel:eT,prevLabel:J("heroSlider.previous",{defaultValue:"Vorheriger Slide"}),nextLabel:J("heroSlider.next",{defaultValue:"Nächster Slide"}),dataTestId:X})]}),ef&&(0,t.jsx)(a.S,{label:ef.label,activeIndex:ei.activeIndex,onClick:()=>(t=>{let r=e[t];if(M)M(r,t);else{let e=(0,i.J)(r?.cta?.href);e&&V.push(e)}})(ei.activeIndex),onCellsChange:ep,dataTestId:X})]})},O=({dataTestId:e="hero-slider",...i})=>(0,t.jsx)(X,{dataTestId:e,...i});var G=e.i(507924),K=e.i(866482);e.s(["HeroBlock",0,({block:e,locale:i,dataTestId:r,dataAttributes:n,edges:a,pageHeading:l})=>{let{slides:o,autoplay:s,autoplayDelay:d}=e.props,u=o.map(e=>({image:e.image,video:e.video,alt:e.alt?(0,G.u)(e.alt,i):void 0,headline:e.headline?(0,G.u)(e.headline,i):void 0,text:e.text?(0,G.u)(e.text,i):void 0,cta:(0,K.f)(e.cta,i),focalPoint:e.focalPoint,tone:e.tone}));return(0,t.jsx)(O,{slides:u,autoplay:s??u.length>1,autoplayDelay:d,dataTestId:r,dataAttributes:n,pageHeading:l,edges:a??{}})}],589013)},866482,e=>{var t=e.i(197908),i=e.i(507924);e.s(["f",0,function(e,r){let n=(0,t.J)(e?.href);return e&&n?{label:(0,i.u)(e.label,r),href:n}:void 0}])},435417,691423,561695,590464,829486,272038,e=>{var t=e.i(843476),i=e.i(271645),r=e.i(573236),n=e.i(499911);e.i(390517);var a=e.i(49891);e.i(490644);var l=e.i(568840),o=e.i(404857);e.i(311046);var s=e.i(355351),d=e.i(345712);let u=d.p.tabletportrait,c=`(max-width: ${u}px)`,h=e=>e>0&&e<=u,f={desktop:{height:"calc(100svh - var(--page-header-offset, 56px))",fallback:"calc(100vh - var(--page-header-offset, 56px))",min:480,max:1e3},phone:{height:"82svh",fallback:"82vh",min:480,max:760}},m=e=>`height: calc(${e.fallback} + var(--edge-padding, 0px));
height: calc(${e.height} + var(--edge-padding, 0px));
min-height: calc(${e.min}px + var(--edge-padding, 0px));
max-height: calc(${e.max}px + var(--edge-padding, 0px));`,p=d.G.margin.default,g="five",x="bodysmall",v={headline:{fontSize:d.G.font.headline[g].mobile.fontSize,lineHeight:d.G.font.headline[g].mobile.lineHeight},text:{fontSize:d.G.font.text[x].mobile.fontSize,lineHeight:d.G.font.text[x].mobile.lineHeight},cta:{fontSize:d.G.font.text[x].mobile.fontSize,lineHeight:d.G.font.text[x].mobile.lineHeight}},b={hyphens:"auto",limitChars:"12 6 6"},y=e=>e&&(e.depth??"hero")==="hero"?{...e,depth:"section"}:e,T=(e,t)=>"number"==typeof e&&Number.isFinite(e)?Math.min(100,Math.max(0,e)):t,w=e=>({x:T(e?.x,50),y:T(e?.y,50)});e.s(["x",0,f,"J",0,b,"h",0,c,"i",0,p,"j",0,v,"v",0,w,"W",0,m,"A",0,e=>{let{x:t,y:i}=w(e);return`${t}% ${i}%`},"V",0,(e,t)=>{if(!h(t))return e;let i={};for(let t of Object.keys(e)){let r=e[t];r&&(i[t]=y(r))}return i},"k",0,h],691423);var S=e.i(997053),E=e.i(547905),$=e.i(118410);let k=S.m`
  position: relative;
  width: 100%;
  ${m(f.desktop)}
  overflow: hidden;
  /* WebGL-Bühne: die Löcher des Randes zeigen diesen Hintergrund (heroEdgeColor) */
  background: ${({theme:e,$edgeColor:t})=>(0,E.m)(e,t??"primary")};
  color: ${({theme:e})=>e.palette.default.white};
  /* Verhindert Blitzer der Nachbarn beim Kanten-Antialiasing der Maske */
  isolation: isolate;
  /* Vollflächiger Hero ohne Abstand nach unten — das Default-Template gibt
     Kindern per Kind-Selektor (not(:last-child)) 40px; die Doppelklasse übertrifft
     diese Spezifität ohne !important. */
  && {
    margin-bottom: 0;
  }

  @media ${c} {
    ${m(f.phone)}
  }
`,A="0.25rem",R="clamp(1.5rem, 8vw, 7rem)",I=S.m`
  position: absolute;
  left: 0;
  /* an der Falz verankert, nicht am unteren Bühnenrand (Randzone darunter) */
  bottom: var(--edge-padding, 0px);
  padding: 0 ${R} clamp(6rem, 14vh, 9rem);

  @media ${c} {
    padding: 0 ${p} ${({$withControls:e})=>e?`calc(5.5rem + ${s.E}px)`:"5.5rem"};
  }
`,_=S.m`
  ${I}
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${A};
  /* Headline-Spalte 1,3 × der früheren 46rem — der Text darunter bleibt bei 38rem */
  max-width: calc(46rem * 1.3);
  pointer-events: none;

  /* Die Atome sind direkte Kinder (keine Wrapper) — Maße und Positionen
     von Headline, Text und CTA sind damit exakt die der Elemente selbst. */
  & > :is(h1, h2, h3) {
    color: ${({theme:e})=>e.palette.default.white};
    margin-bottom: ${({theme:e})=>e.margin.small};
    text-shadow: 0 2px 16px rgba(0, 0, 0, 0.35);
    text-wrap: balance;
    /* Keine automatische Silbentrennung: mit balance trennt der Browser sonst
       Wörter, die auf die Zeile passen, nur um die Zeilen anzugleichen
       („Monit-ored"). Umbrochen wird an Leerzeichen und an weichen
       Trennstrichen (&shy;) aus dem CMS; ein Wort, das allein breiter als die
       Zeile ist („Schlagzähigkeitsprüfung" am Telefon), bricht im Notfall
       ohne Trennstrich, statt den Rahmen zu sprengen. */
    hyphens: manual;
    overflow-wrap: anywhere;

    /* #2027 Abnahme: am Telefon Stufe h5 der Theme-Skala (semantisch bleibt es
       die Überschrift) und Silbentrennung nach <html lang> nur als Rückfall
       für sehr lange Wörter (HERO_PHONE_HYPHENS) */
    @media ${c} {
      font-size: ${v.headline.fontSize};
      line-height: ${v.headline.lineHeight};
      -webkit-hyphens: ${b.hyphens};
      hyphens: ${b.hyphens};
      hyphenate-limit-chars: ${b.limitChars};
    }
  }

  & > p {
    color: rgba(255, 255, 255, 0.92);
    margin-bottom: ${({theme:e})=>e.margin.default};
    max-width: 38rem;
    text-shadow: 0 1px 8px rgba(0, 0, 0, 0.35);

    @media ${c} {
      font-size: ${v.text.fontSize};
      line-height: ${v.text.lineHeight};
    }
  }

  /* #2027: die WebGL-Wabe zeichnet ihr Overlay immer in Marineblau (PlastshipColors.PRIMARY,
     honeycombRenderer) — im Dark Mode wäre default.white dort #1F2937, dunkle Schrift auf
     dunklem Blau. Über der WebGL-Bühne steht die Headline deshalb fest in Weiß. */
  [data-renderer='webgl'] & > :is(h1, h2, h3) {
    color: ${$.h.WHITE};
  }

  & > button,
  & > a {
    pointer-events: auto;
  }

  /* Das letzte Element trägt keinen Rand nach unten — in jeder Kombination
     (nur Headline, Headline + Text, mit CTA) endet der Block mit dem Inhalt. */
  & > :last-child {
    margin-bottom: 0;
  }
`;var C=s,M=e.i(936077);let B=S.q`
  from { opacity: 1; }
  to { opacity: 0; }
`,P=S.q`
  from { opacity: 0; }
  to { opacity: 1; }
`,D=S.U.section.withConfig({displayName:"HeroSlider.styles__Root",componentId:"sc-f25f50e9-0"})`
  ${k}
`,H=S.U.div.withConfig({displayName:"HeroSlider.styles__Stage",componentId:"sc-f25f50e9-1"})`
  position: absolute;
  inset: 0;
  touch-action: pan-y;
  /* Eigener Stapelkontext: alles im Stage (Medien, Wabe, Hover-Kacheln)
     bleibt unter dem Vordergrund (z-index 2) mit Text, CTA und Overlay. */
  z-index: 1;
`,U={active:S.m`
    z-index: 2;
    visibility: visible;
    ${({$reveal:e,$phase:t})=>"mask"===e&&S.m`
        ${(0,E.V)(t.duration,t.delay)}
      `}
  `,leaving:S.m`
    z-index: 1;
    visibility: visible;
    ${({$phase:e})=>(0,E.x)(e.duration,e.delay)}
  `,hidden:S.m`
    z-index: 0;
    visibility: hidden;
  `},z=S.U.div.withConfig({displayName:"HeroSlider.styles__Layer",componentId:"sc-f25f50e9-2"})`
  position: absolute;
  inset: 0;
  overflow: hidden;
  ${({$state:e})=>U[e]}

  @media (prefers-reduced-motion: reduce) {
    -webkit-mask-image: none;
    mask-image: none;
    animation: ${({$state:e,$phase:t})=>"active"===e&&t.duration?S.m`
            ${P} 400ms ease both
          `:"none"};
  }
`,L=S.U.div.withConfig({displayName:"HeroSlider.styles__Media",componentId:"sc-f25f50e9-3"})`
  position: absolute;
  inset: 0;
  /* Während die Wabe läuft, bleibt das echte Bild unsichtbar und übernimmt
     deckungsgleich, sobald alle Kacheln stehen. */
  opacity: ${({$hidden:e})=>+!e};
  ${({$state:e,$reveal:t,$phase:i})=>"active"===e&&"mask"===t&&S.m`
      ${(0,E.T)(i.duration,i.delay)}
    `}

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,N=S.U.div.withConfig({displayName:"HeroSlider.styles__HaloWrap",componentId:"sc-f25f50e9-4"})`
  position: absolute;
  inset: 0;
  z-index: 3;
  pointer-events: none;
`,j=S.U.div.withConfig({displayName:"HeroSlider.styles__HoverSpotWrap",componentId:"sc-f25f50e9-5"})`
  position: absolute;
  inset: 0;
  z-index: 3;
  pointer-events: none;
`,W=S.U.div.withConfig({displayName:"HeroSlider.styles__TilesWrap",componentId:"sc-f25f50e9-6"})`
  position: absolute;
  inset: 0;
  z-index: 1;
`,X=S.U.img.withConfig({displayName:"HeroSlider.styles__SlideImage",componentId:"sc-f25f50e9-7"})`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: ${({$focal:e})=>e??"center"};
`,F=S.U.video.withConfig({displayName:"HeroSlider.styles__SlideVideo",componentId:"sc-f25f50e9-8"})`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`,O=S.U.div.withConfig({displayName:"HeroSlider.styles__Foreground",componentId:"sc-f25f50e9-9"})`
  position: absolute;
  inset: 0;
  z-index: 2;
  pointer-events: none;
`,G=S.U.div.withConfig({displayName:"HeroSlider.styles__ForegroundLayer",componentId:"sc-f25f50e9-10"})`
  position: absolute;
  inset: 0;
  z-index: ${({$state:e})=>"active"===e?2:+("leaving"===e)};
  visibility: ${({$state:e})=>"hidden"===e?"hidden":"visible"};
`,K=S.U.div.withConfig({displayName:"HeroSlider.styles__Content",componentId:"sc-f25f50e9-11"})`
  ${_}

  /* #1768: der Abstand zur Reihe kommt allein aus dem Platzhalter (eine Kachel) — kein Rand des Texts davor */
  ${({$withSpacer:e})=>e&&S.m`
      & > :nth-last-child(2) {
        margin-bottom: 0;
      }
    `}

  & > * {
    animation-duration: ${({$in:e})=>e.duration}ms;
    animation-timing-function: ease;
    animation-fill-mode: both;
  }

  /* $instant (#1541): der beim Laden aktive Slide steht sofort da, ohne Einblenden */
  ${({$state:e,$in:t,$instant:i})=>"active"===e&&!i&&S.m`
      & > * {
        animation-name: ${P};
        animation-delay: ${t.delay}ms;
      }
    `}

  ${({$state:e,$out:t})=>"leaving"===e&&S.m`
      & > * {
        animation-name: ${B};
        animation-delay: ${t.delay}ms;
        animation-duration: ${t.duration}ms;
      }
    `}

  @media (prefers-reduced-motion: reduce) {
    & > * {
      animation-delay: 0ms;
      animation-duration: 200ms;
    }
  }
`,Y=`@media ${c}`,V=`var(--hex-cell, ${C.E}px)`,Z=(e,t)=>e+2*!!t,J=(e,t,i=C.E)=>Z(e,t)*i,q=S.U.div.withConfig({displayName:"HeroSlider.styles__PaginationSpacer",componentId:"sc-f25f50e9-12"})`
  width: calc(${V} * ${({$count:e,$arrows:t})=>Z(e,t)});
  height: calc(2 * ${V} - ${A});
  flex-shrink: 0;
  pointer-events: none;

  ${Y} {
    width: calc(${V} * ${({$count:e})=>Z(e,!1)});
  }
`,Q=S.U.div.attrs({$withControls:!0}).withConfig({displayName:"HeroSlider.styles__PaginationSlot",componentId:"sc-f25f50e9-13"})`
  ${I}
  z-index: 3;
  --size: ${V};
  pointer-events: none;
`,ee=S.U.div.withConfig({displayName:"HeroSlider.styles__ControlRow",componentId:"sc-f25f50e9-14"})`
  display: flex;
  align-items: center;
  gap: calc(${0} * var(--size, ${M.e}px));
  transform: translate(var(--snap-x, 0px), var(--snap-y, 0px));
  pointer-events: none;
`,et=S.U.button.withConfig({displayName:"HeroSlider.styles__NavTile",componentId:"sc-f25f50e9-15"})`
  flex-shrink: 0;
  width: var(--size, ${M.e}px);
  height: var(--size, ${M.e}px);
  padding: 0;
  margin: 0;
  border: 0;
  ${E.p}
  /* Trefferfläche: Masken schneiden Zeigerereignisse nicht zu, ohne clip-path wäre der ganze Kasten klickbar. Das spitze Polygon bleibt die Trefferform; die runde Maske liegt ganz darin. */
  clip-path: ${E.O};
  /* #1768: feste Farben wie die Pagination im Ton overlay — das Overlay bleibt auch im Dark Mode Marineblau, Theme-Weiß wäre dort dunkelgrau */
  background: ${$.h.PRIMARY};
  color: ${$.h.WHITE};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  pointer-events: auto;

  svg {
    width: 45%;
    height: 45%;
  }

  &:hover,
  &:focus-visible {
    background: ${$.h.PRIMARY};
    outline: none;
  }

  ${Y} {
    display: none;
  }
`,ei=`calc(var(--edge-padding, 0px) + ${2*C.V} * ${V})`,er=S.U.div.withConfig({displayName:"HeroSlider.styles__CtaCorner",componentId:"sc-f25f50e9-16"})`
  position: absolute;
  left: ${R};
  right: ${R};
  /* #1984: zwei Kachelreihen über der Falz, damit der Button auch bei hoher Bühne im Viewport steht; HexCta rastet weiter ein */
  bottom: ${ei};
  height: ${C.E*(1+2*C.V)}px;
  z-index: 4;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  pointer-events: none;

  & > button,
  & > a {
    margin-top: 0;
    pointer-events: auto;
  }

  /* Telefon (#1984): direkt an der Falz, die Bühne passt dort immer in den Viewport */
  ${Y} {
    left: ${p};
    right: ${p};
    bottom: var(--edge-padding, 0px);

    /* #2178: Knopf nur so breit wie sein Label, mittig; die Kacheln folgen der Breite (hexCtaShape) */
    justify-content: center;

    /* #2027 Abnahme: der Knopf ist am Telefon genau eine Zeile hoch — kleinere
       Stufe der Theme-Skala, kein Umbruch; reicht der Platz nicht, endet das
       Label (inneres span von HexCta) mit Auslassungspunkten */
    & > button,
    & > a {
      max-width: 100%;
      font-size: ${v.cta.fontSize};
      line-height: ${v.cta.lineHeight};
      white-space: nowrap;
    }

    & > button > span,
    & > a > span {
      max-width: 100%;
      white-space: nowrap;
    }

    & > button > span > span,
    & > a > span > span {
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
`;e.s(["c",0,K,"N",0,ee,"h",0,er,"k",0,O,"n",0,G,"e",0,0,"R",0,N,"p",0,j,"E",0,z,"G",0,L,"W",0,et,"t",0,Q,"K",0,q,"F",0,D,"L",0,X,"M",0,F,"A",0,H,"_",0,W,"o",0,J],561695);let en=[],ea=({count:e,slider:i,progressDuration:r,getLabel:n,dataTestId:a})=>(0,t.jsx)(l.f,{count:e,activeIndex:i.activeIndex,cells:[],inline:!0,onSelect:e=>i.goTo(e),progressDuration:r,paused:i.isPaused,progressKey:i.cycle,controlsIdPrefix:`${a}-slide`,getLabel:n,tone:"overlay",gap:0,dataTestId:`${a}-pagination`});e.s(["I",0,({arrows:e,slider:a,prevLabel:l,nextLabel:d,dataTestId:u,...c})=>{let h=(0,i.useRef)(null),f=(0,o.f)(h),m=(0,i.useMemo)(()=>f?(({width:e,height:t,columns:i,rect:r})=>{let n=(0,s.z)(e,i),a=r.left+n/2,l=(r.top+r.bottom)/2,o=(0,s.i)(e,t,i,a,l);return o?{dx:o.cx-a,dy:o.cy-l,size:n}:null})(f):null,[f]),p=m?.size??(0,s.z)(0,0);return(0,t.jsx)(Q,{"data-testid":`${u}-pagination-slot`,"data-arrows":e?"true":"false","data-gap":0*p,children:(0,t.jsxs)(ee,{ref:h,"data-testid":`${u}-control-row`,"data-snapped":m?"true":"false","data-cell":p,style:m?{"--snap-x":`${m.dx}px`,"--snap-y":`${m.dy}px`}:void 0,children:[e&&(0,t.jsx)(et,{type:"button",onClick:a.prev,"aria-label":l,"data-testid":`${u}-prev`,children:(0,t.jsx)(r.f,{strokeColor:"currentColor"})}),(0,t.jsx)(ea,{...c,slider:a,dataTestId:u}),e&&(0,t.jsx)(et,{type:"button",onClick:a.next,"aria-label":d,"data-testid":`${u}-next`,children:(0,t.jsx)(n.f,{})})]})})},"S",0,({label:e,activeIndex:i,onClick:r,onCellsChange:n,dataTestId:l})=>(0,t.jsx)(er,{"data-testid":`${l}-cta-corner`,children:(0,t.jsx)(a.f,{onClick:r,onCellsChange:n,dataTestId:`${l}-slide-${i}-cta`,children:e})}),"V",0,e=>!h(e),"v",0,e=>{let[t,r]=(0,i.useState)(en);return{accentKeys:(0,i.useMemo)(()=>e?t:en,[e,t]),onCellsChange:r}}],435417);var el=e.i(699779),eo=e.i(929842),es=e.i(852590),ed=e.i(703089);e.i(352162);var eu=e.i(791777);let ec=({frameRef:e,anchorRef:t,state:r,index:n,onChange:a})=>{let{rects:l}=(0,eu.Z)(e,t,r),o=(0,i.useRef)(a);return(0,i.useEffect)(()=>{o.current=a}),(0,i.useEffect)(()=>{o.current?.(n,l)},[n,l]),null};e.s(["f",0,({slide:e,index:r,state:n,timeline:a,columns:l,dataTestId:o,cornerCta:s=!1,reservePagination:d=0,reserveArrows:u=!1,backdrop:c="tiles",onRectsChange:h,pageHeading:f=!1})=>{let m=(0,i.useRef)(null),p=(0,i.useRef)(null),g=`${o}-slide-${r}`,[x,v]=(0,i.useState)("none"===c&&"active"===n);return(0,i.useEffect)(()=>{"active"!==n&&v(!1)},[n]),(0,t.jsxs)(G,{ref:p,$state:n,"data-testid":`${g}-foreground`,"data-state":n,"aria-hidden":"active"!==n,children:["tiles"===c?(0,t.jsx)(eu.K,{anchorRef:m,state:n,duration:a.total,enterDelay:a.backdropIn.delay,enterDuration:a.backdropIn.duration,leaveDelay:a.textOut.delay,leaveDuration:a.textOut.duration,columns:l,dataTestId:`${g}-backdrop`}):(0,t.jsx)(ec,{frameRef:p,anchorRef:m,state:n,index:r,onChange:h}),(0,t.jsxs)(K,{ref:m,$state:n,$in:a.textIn,$out:a.textOut,$instant:x,$withControls:d>0||s,$withSpacer:d>0,"data-testid":`${g}-content`,"data-instant":x?"true":"false",children:[e.headline&&(0,t.jsx)(el.f,{importance:f?eo.D.h1:eo.D.h2,renderAs:eo.D.h2,dataTestId:`${g}-headline`,children:e.headline}),e.text&&(0,t.jsx)(es.f,{variant:ed.g.bodybig,dataTestId:`${g}-text`,children:e.text}),d>0&&(0,t.jsx)(q,{$count:d,$arrows:u,"aria-hidden":"true","data-backdrop-leaf":"","data-arrows":u?"true":"false","data-width":J(d,u),"data-gap":M.e,"data-testid":`${g}-pagination-spacer`})]})]})}],590464);let eh=[0,.18],ef=[.12,.7],em=[.62,.84],ep=[.82,1],eg=(e,[t,i])=>({delay:Math.round(e*t),duration:Math.round(e*(i-t))}),ex=e=>({total:e,textOut:eg(e,eh),image:eg(e,ef),backdropIn:eg(e,em),textIn:eg(e,ep)});e.s(["J",0,ex,"g",0,e=>{let t=ex(e),i=t.backdropIn.delay;return{...t,backdropIn:{...t.backdropIn,delay:0},textIn:{...t.textIn,delay:t.textIn.delay-i}}}],829486);let ev=(e,t)=>(e%t+t)%t;e.s(["f",0,({count:e,autoplay:t,autoplayDelay:r,transitionDuration:n,initialIndex:a=0,inView:l=!0})=>{let[o,s]=(0,i.useState)({active:e>0?ev(a,e):0,previous:null,direction:"next",cycle:0}),[d,u]=(0,i.useState)(!1),[c,h]=(0,i.useState)(!1),f=(0,i.useRef)(null),m=(0,i.useCallback)((t,i)=>{if(e<2)return;let r=ev(t,e);s(e=>r===e.active?e:{active:r,previous:e.active,direction:i??(r>e.active?"next":"prev"),cycle:e.cycle+1})},[e]),p=(0,i.useCallback)(()=>{s(t=>({active:ev(t.active+1,e),previous:t.active,direction:"next",cycle:t.cycle+1}))},[e]),g=(0,i.useCallback)(()=>{s(t=>({active:ev(t.active-1,e),previous:t.active,direction:"prev",cycle:t.cycle+1}))},[e]);(0,i.useEffect)(()=>{if(null!==o.previous)return f.current&&clearTimeout(f.current),f.current=setTimeout(()=>{s(e=>null===e.previous?e:{...e,previous:null})},n),()=>{f.current&&clearTimeout(f.current)}},[o.active,o.cycle,o.previous,n]),(0,i.useEffect)(()=>{if("u"<typeof document)return;let e=()=>h("hidden"===document.visibilityState);return e(),document.addEventListener("visibilitychange",e),()=>document.removeEventListener("visibilitychange",e)},[]);let x=!t||e<2||d||c||!l,v=(0,i.useRef)(l);(0,i.useEffect)(()=>{l&&!v.current&&s(e=>({...e,cycle:e.cycle+1})),v.current=l},[l]);let b=(0,i.useCallback)(e=>{u(t=>t===e?t:(e||s(e=>({...e,cycle:e.cycle+1})),e))},[]);return(0,i.useEffect)(()=>{if(x)return;let e=setTimeout(p,r);return()=>clearTimeout(e)},[x,r,p,o.active,o.cycle]),{activeIndex:e>0?ev(o.active,e):0,previousIndex:o.previous,direction:o.direction,isTransitioning:null!==o.previous,isPaused:x,cycle:o.cycle,goTo:m,next:p,prev:g,setInteractionPaused:b}}],272038)},720900,e=>{var t=e.i(271645);e.s(["f",0,(e,i=.25)=>{let[r,n]=(0,t.useState)(!0);return(0,t.useEffect)(()=>{let t=e.current;if(!t||"u"<typeof IntersectionObserver)return;let r=new IntersectionObserver(e=>{let t=e[e.length-1];if(!t)return;let r="number"==typeof t.intersectionRatio?t.intersectionRatio:+!!t.isIntersecting;n(t.isIntersecting&&r>=i)},{threshold:[0,i,1]});return r.observe(t),()=>r.disconnect()},[e,i]),r}])},463437,e=>{var t=e.i(271645);let i=(e,t,i)=>{if(t<=0)return[];if(1===t)return[e];let r=[e,(e+1)%t];return i&&r.push((e-1+t)%t),r};e.s(["f",0,(e,r)=>{let[n,a]=(0,t.useState)(!1),[l,o]=(0,t.useState)(()=>new Set(i(e,r,!1)));(0,t.useEffect)(()=>(e=>{if("function"==typeof window.requestIdleCallback){let t=window.requestIdleCallback(e);return()=>window.cancelIdleCallback(t)}let t=setTimeout(e,200);return()=>clearTimeout(t)})(()=>a(!0)),[]);let s=i(e,r,n).filter(e=>!l.has(e));if(0===s.length)return l;let d=new Set([...l,...s]);return o(d),d}])},693249,e=>{var t=e.i(271645);e.s(["f",0,e=>{let i=(0,t.useRef)(null),r=(0,t.useRef)(-1/0),n=(0,t.useCallback)(t=>{"ArrowRight"===t.key?(t.preventDefault(),e.next()):"ArrowLeft"===t.key&&(t.preventDefault(),e.prev())},[e]),a=e=>"touch"===e.pointerType||"pen"===e.pointerType,l=t=>{!a(t)||(r.current=Date.now(),t.currentTarget.contains(document.activeElement)||e.setInteractionPaused(!1))},o=()=>Date.now()-r.current<800;return{root:{onMouseEnter:()=>{o()||e.setInteractionPaused(!0)},onMouseLeave:()=>{o()||e.setInteractionPaused(!1)},onFocus:()=>e.setInteractionPaused(!0),onBlur:t=>{t.currentTarget.contains(t.relatedTarget)||e.setInteractionPaused(!1)},onKeyDown:n,onPointerDownCapture:t=>{a(t)&&(r.current=Date.now(),e.setInteractionPaused(!0))},onPointerUpCapture:l,onPointerCancelCapture:l},stage:{onPointerDown:e=>{("mouse"!==e.pointerType||0===e.button)&&(i.current={x:e.clientX,y:e.clientY})},onPointerUp:t=>{let r=i.current;if(null===r)return;i.current=null;let n=t.clientX-r.x,a=t.clientY-r.y;48>Math.abs(n)||Math.abs(n)<=Math.abs(a)||(n<0?e.next():e.prev())},onPointerCancel:()=>{i.current=null}}}}])},142207,e=>{var t=e.i(271645);e.s(["f",0,({onMove:e,onLeave:i})=>{let r=(0,t.useRef)(null);return{onPointerMove:(0,t.useCallback)(t=>{if("touch"===t.pointerType)return;r.current||(r.current=t.currentTarget.getBoundingClientRect());let i=r.current;e(t.clientX-i.left,t.clientY-i.top)},[e]),onPointerLeave:(0,t.useCallback)(()=>{r.current=null,i()},[i])}}])},88255,e=>{let t=[640,1080,1920],i=["/IH/","/team/","/images/","/api/cms/media/"];function r(e,t){return!i.some(t=>e.startsWith(t))||/\.svg(?:$|[?#])/i.test(e)?e:`/_next/image/?url=${encodeURIComponent(e)}&w=${t}&q=75`}e.s(["r",0,"100vw","f",0,1920,"l",0,function(e,i=t){if(r(e,i[0]??1920)!==e)return i.map(t=>`${r(e,t)} ${t}w`).join(", ")},"a",0,r])},941408,e=>{let t=e=>e<=0?0:e>=1?1:e,i=(e,t)=>1-3*t+3*e,r=(e,t)=>3*t-6*e,n=(e,t,n)=>((i(t,n)*e+r(t,n))*e+3*t)*e,a=(e,t,n)=>3*i(t,n)*e*e+2*r(t,n)*e+3*t,l=(e,i,r,l)=>e===i&&r===l?t:t=>t<=0?0:t>=1?1:n((t=>{let i=t;for(let l=0;l<6;l+=1){let l=a(i,e,r);if(l<.001)break;if((i-=(n(i,e,r)-t)/l)<=0)return 0;if(i>=1)return 1}if(1e-5>Math.abs(n(i,e,r)-t))return i;let l=0,o=1;for(let a=0;a<24;a+=1)n(i=(l+o)/2,e,r)<t?l=i:o=i;return i})(t),i,l),o=l(.2,.8,.2,1),s=l(.65,0,.35,1),d=l(.42,0,1,1),u=l(.25,.1,.25,1),c=l(0,0,.58,1),h=l(.42,0,.58,1);e.s(["D",0,d,"G",0,h,"w",0,c,"m",0,o,"T",0,s,"O",0,u,"Y",0,t,"j",0,(e,t=256)=>{let i=new Float32Array(t+1);for(let r=0;r<=t;r+=1)i[r]=e(r/t);return i},"b",0,(e,i)=>{let r=e.length-1,n=t(i)*r,a=Math.floor(n);if(a>=r)return e[r];let l=n-a;return e[a]*(1-l)+e[a+1]*l}])}],167495,function(e){e.n(e.i(589013))}]);