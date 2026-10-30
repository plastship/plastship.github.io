(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,429307,159255,e=>{var t=e.i(843476),i=e.i(997053);e.i(315481);var n=e.i(10003),a=e.i(726029),r=e.i(437992);let o=(0,i.U)(n.NavLink).withConfig({displayName:"ArrowLink__Root",componentId:"sc-c779a4e5-0"})`
  ${a.e}
  ${({$stretched:e})=>e&&a.i}
`,s=()=>(0,t.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":"true",children:(0,t.jsx)("path",{d:"M8.9 3.3a.9.9 0 0 1 1.3 0l4.1 4.1a.9.9 0 0 1 0 1.2l-4.1 4.1a.9.9 0 1 1-1.3-1.3l2.6-2.5H2.4a.9.9 0 1 1 0-1.8h9.1L8.9 4.6a.9.9 0 0 1 0-1.3Z"})}),l=i.U.span.withConfig({displayName:"ArrowLink__Nowrap",componentId:"sc-c779a4e5-1"})`
  white-space: nowrap;
`;e.s(["f",0,function({href:e,children:i,dataTestId:n,target:a,stretched:d=!1}){let c="string"==typeof i?i:null,f=c?c.lastIndexOf(" "):-1;return(0,t.jsx)(o,{href:e,"data-testid":n,"data-stretched":d?"true":void 0,$stretched:d,...(0,r.a)(e,{target:a}),children:c&&f>0?(0,t.jsxs)(t.Fragment,{children:[c.slice(0,f+1),(0,t.jsxs)(l,{children:[c.slice(f+1),(0,t.jsx)(s,{})]})]}):(0,t.jsxs)(t.Fragment,{children:[i,(0,t.jsx)(s,{})]})})}],159255),e.s([],429307)},650868,224906,e=>{let t=e.i(152186).f;e.s(["f",0,t],650868);let i=e.i(856337).f;e.s(["f",0,i],224906)},945304,997917,977194,e=>{var t=e.i(843476),i=e.i(464862),n=e.i(696986);let a=e.i(372480).f;var r=e.i(816570),o=e.i(799516),s=e.i(581717),l=e.i(488661),d=e.i(898560),c=e.i(877194),f=e.i(193732),h=e.i(122884),u=e.i(868169),p=e.i(920592),m=e.i(471480);let g=e.i(841712).f;var x=e.i(90792),b=e.i(495835),y=e.i(108939),v=e.i(351357),w=e.i(861527),$=e.i(313922),k=e.i(997053),C=e.i(547905);let M={small:{pad:8,ring:7,icon:16},large:{pad:16,ring:14,icon:32}},j=k.m`
  & > :not([data-chip-layer]) {
    position: relative;
  }
`,z=k.U.span.withConfig({displayName:"IconChip.styles__Root",componentId:"sc-3746e1bb-0"})`
  ${({theme:e,$tone:t,$size:i,$shape:n})=>{let a,r={green:e.palette.site.green,blue:e.palette.site.blue,red:e.palette.site.red}[t],o=M[i];return k.m`
      position: relative;
      left: ${o.ring}px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: ${o.pad}px;
      color: ${r};
      --chip-ring: color-mix(in srgb, ${r} 10%, transparent);
      --chip-face: color-mix(in srgb, ${r} 20%, transparent);
      ${"hex"===n?j:(a=o.ring,k.m`
  border-radius: 9999px;
  background: color-mix(in srgb, ${r} 20%, transparent);
  box-shadow: 0 0 0 var(--chip-ring-width, ${a}px) var(--chip-ring);
  transition: box-shadow 150ms ease;
`)}

      svg {
        display: block;
        width: ${o.icon}px;
        height: ${o.icon}px;
      }

      /* Die Icon-Atome färben sich uneinheitlich (fill, stroke, eigene Farben) —
         CSS schlägt die Präsentationsattribute, also hier einheitlich die Tonfarbe. */
      svg [fill]:not([fill='none']) {
        fill: currentColor;
      }

      svg [stroke]:not([stroke='none']) {
        stroke: currentColor;
      }
    `}}
`,L=k.U.span.withConfig({displayName:"IconChip.styles__Ring",componentId:"sc-3746e1bb-1"})`
  position: absolute;
  inset: calc(-1 * var(--chip-ring-width, ${({$size:e})=>M[e].ring}px));
  ${C.p}
  background: var(--chip-ring);
  transition: inset 150ms ease;

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,N=k.U.span.withConfig({displayName:"IconChip.styles__Face",componentId:"sc-3746e1bb-2"})`
  position: absolute;
  inset: 0;
  ${C.p}
  background: var(--chip-face);
`;e.s(["r",0,N,"N",0,M,"T",0,L,"F",0,z],997917);let R={plus:i.f,search:n.f,send:a,award:r.f,analysis:o.f,recycle:s.f,warning:l.f,check:d.f,chart:c.f,list:f.f,network:({color:e="currentColor",size:i=24,className:n})=>(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",className:n,children:[(0,t.jsx)("title",{children:"network-connections"}),(0,t.jsxs)("g",{fill:e,strokeLinecap:"square",strokeLinejoin:"miter",strokeMiterlimit:"10",children:[(0,t.jsx)("path",{d:"M10.5 16.5L20.5 10",stroke:e,strokeWidth:"2",fill:"none",strokeLinecap:"butt"}),(0,t.jsx)("path",{d:"M18.5 18L20.5 10",stroke:e,strokeWidth:"2",fill:"none",strokeLinecap:"butt"}),(0,t.jsx)("path",{d:"M4.5 11.5L19 8",stroke:e,strokeWidth:"2",fill:"none",strokeLinecap:"butt"}),(0,t.jsx)("path",{d:"M12 4.5L19 7",stroke:e,strokeWidth:"2",fill:"none",strokeLinecap:"butt"}),(0,t.jsx)("path",{d:"M4.5 10.5L8.5 5",stroke:e,strokeWidth:"2",fill:"none",strokeLinecap:"butt"}),(0,t.jsx)("path",{d:"M3 14C4.10457 14 5 13.1046 5 12C5 10.8954 4.10457 10 3 10C1.89543 10 1 10.8954 1 12C1 13.1046 1.89543 14 3 14Z",stroke:e,strokeWidth:"2",fill:"none"}),(0,t.jsx)("path",{d:"M10 6C11.1046 6 12 5.10457 12 4C12 2.89543 11.1046 2 10 2C8.89543 2 8 2.89543 8 4C8 5.10457 8.89543 6 10 6Z",stroke:e,strokeWidth:"2",fill:"none"}),(0,t.jsx)("path",{d:"M21 10C22.1046 10 23 9.10457 23 8C23 6.89543 22.1046 6 21 6C19.8954 6 19 6.89543 19 8C19 9.10457 19.8954 10 21 10Z",stroke:e,strokeWidth:"2",fill:"none"}),(0,t.jsx)("path",{d:"M9 20C10.1046 20 11 19.1046 11 18C11 16.8954 10.1046 16 9 16C7.89543 16 7 16.8954 7 18C7 19.1046 7.89543 20 9 20Z",stroke:e,strokeWidth:"2",fill:"none"}),(0,t.jsx)("path",{d:"M18 22C19.1046 22 20 21.1046 20 20C20 18.8954 19.1046 18 18 18C16.8954 18 16 18.8954 16 20C16 21.1046 16.8954 22 18 22Z",stroke:e,strokeWidth:"2",fill:"none"})]})]}),shield:h.f,users:u.f,contact:p.f,document:m.f,transport:g,star:x.f,sparkle:b.f,settings:y.f,database:v.f,verification:w.f,connection:$.f};function _({tone:e="green",size:i="small",shape:n="round",icon:a,dataTestId:r,children:o}){return(0,t.jsxs)(z,{$tone:e,$size:i,$shape:n,"aria-hidden":"true","data-testid":r,"data-icon":a,"data-tone":e,"data-size":i,"data-shape":n,children:["hex"===n&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(L,{$size:i,"data-chip-layer":"ring","data-testid":"chip-ring"}),(0,t.jsx)(N,{"data-chip-layer":"face","data-testid":"chip-face"})]}),o]})}e.s(["S",0,R,"c",0,function({name:e,tone:i="green",size:n="small",shape:a="round",dataTestId:r}){let o=R[e];return o?(0,t.jsx)(_,{tone:i,size:n,shape:a,icon:e,dataTestId:r,children:(0,t.jsx)(o,{})}):null},"J",0,_],977194),e.s([],945304)},841712,e=>{var t=e.i(843476),i=e.i(997053);let n=i.U.svg.withConfig({displayName:"IconBus.styles__Root",componentId:"sc-efb1bf1b-0"})``;e.s(["f",0,e=>(0,t.jsxs)(n,{className:e.className,"data-testid":"icon-bus-root",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,t.jsx)("title",{children:"bus-side"}),(0,t.jsxs)("g",{fill:"currentColor",strokeLinecap:"square",strokeLinejoin:"miter",strokeMiterlimit:"10",children:[(0,t.jsx)("path",{d:"M10.5 9V3",stroke:"currentColor",strokeWidth:"2",fill:"none",strokeLinecap:"butt"}),(0,t.jsx)("path",{d:"M22 7V8H24V7H22ZM18.7827 6H22V4H18.7827V6ZM22 6V7H24V6H22ZM18.7827 6H19.2827V4H18.7827V6ZM22 6H24C24 4.89543 23.1046 4 22 4V6Z",fill:"currentColor",stroke:"none"}),(0,t.jsx)("path",{d:"M3 19V14H7V19",stroke:"currentColor",strokeWidth:"2",fill:"none",strokeLinecap:"butt"}),(0,t.jsx)("path",{d:"M3 9H11.0809L14 12H20.5H20",stroke:"currentColor",strokeWidth:"2",fill:"none"}),(0,t.jsx)("path",{d:"M3 19H11H10",stroke:"currentColor",strokeWidth:"2",fill:"none"}),(0,t.jsx)("path",{d:"M3 3H14.7686C16.9753 3 18.9128 4.46773 19.5103 6.59207V6.59207C20.3297 9.50573 20.6051 12.5455 20.3226 15.559L20.085 18.0933C20.0368 18.6072 19.6055 19 19.0894 19H17H17.5",stroke:"currentColor",strokeWidth:"2",fill:"none"}),(0,t.jsx)("path",{d:"M14 22C15.6569 22 17 20.6569 17 19C17 17.3431 15.6569 16 14 16C12.3431 16 11 17.3431 11 19C11 20.6569 12.3431 22 14 22Z",stroke:"currentColor",strokeWidth:"2",fill:"none"})]})]})],841712)},193732,e=>{let t=e.i(187824).f;e.s(["f",0,t])},372480,e=>{var t=e.i(843476),i=e.i(997053);let n=i.U.svg.withConfig({displayName:"IconMailSend.styles__Root",componentId:"sc-505d54d1-0"})``;e.s(["f",0,e=>(0,t.jsxs)(n,{className:e.className,"data-testid":"icon-mail-send-root",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,t.jsx)("path",{d:"M2 5V7L12 12L22 7V5",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"square"}),(0,t.jsx)("path",{d:"M21.457 18H22L14 18",stroke:"currentColor",strokeWidth:"2",strokeMiterlimit:"10",strokeLinecap:"square"}),(0,t.jsx)("path",{d:"M18.5 21.5L22 18L18.5 14.5",stroke:"currentColor",strokeWidth:"2",strokeMiterlimit:"10",strokeLinecap:"square"}),(0,t.jsx)("path",{d:"M23 14.7607L21 12.7607V5H3V19H11V21H1V3H23V14.7607Z",fill:"currentColor",stroke:"none"})]})],372480)},464862,e=>{let t=e.i(48866).f;e.s(["f",0,t])},504554,e=>{var t=e.i(843476),i=e.i(997053);let n=i.U.svg.withConfig({displayName:"IconRefresh.styles__Root",componentId:"sc-86a28ebc-0"})``;e.s(["f",0,e=>(0,t.jsx)(n,{className:e.className,"data-testid":"icon-refresh-root",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("path",{d:"M19.4221 8.01389C18.0322 5.61438 15.4343 4 12.4588 4C9.08513 4 6.19686 6.07535 5.00433 9.01736M16.9806 9.01736H21V5.00347M5.57787 16.0417C6.96782 18.4412 9.56573 20.0556 12.5412 20.0556C15.9149 20.0556 18.8031 17.9802 19.9957 15.0382M8.0194 15.0382H4V19.0521",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})],504554)},581717,e=>{let t=e.i(504554).f;e.s(["f",0,t])},90792,e=>{let t=e.i(3338).f;e.s(["f",0,t])},177607,422180,e=>{var t=e.i(843476),i=e.i(271645);e.i(945304);var n=e.i(977194);e.i(710788);var a=e.i(363451);e.i(390517);var r=e.i(49891);e.i(352162);var o=e.i(791777);e.i(307839);var s=e.i(585584),l=e.i(647835),d=e.i(240029),c=e.i(380153);e.i(311046);var f=e.i(499881),h=e.i(997053),u=e.i(547905),p=e.i(726029),m=e.i(650868),g=e.i(224906);let x=h.U.section.withConfig({displayName:"CtaSection.styles__Root",componentId:"sc-53eb986f-0"})`
  position: relative;
  width: 100%;
  /* Ohne globalen border-box-Reset (_reset.scss) addiert content-box das
     seitliche Polster auf die 100% und das Band wird breiter als die Seite. */
  box-sizing: border-box;
  overflow: hidden;
  background-color: ${({theme:e})=>e.palette.site.navy};
  /* Wabenrand (#1188): das Band ist Host */
  ${({$edges:e})=>(0,u.n)(e)}
`,b=(e,t,i,n)=>{let a=t?.[e];return a?.placement==="inner"?h.m`
        padding-${e}: calc(${f.r[a.depth??"section"]}px + ${i});
      `:h.m`
        padding-${e}: ${n};
      `},y=h.U.div.withConfig({displayName:"CtaSection.styles__Band",componentId:"sc-53eb986f-1"})`
  position: relative;
  z-index: 2;
  box-sizing: border-box;
  /* Telefon: Zone + margin.large bzw. margin.big; ab 768 px Zone + margin.big bzw. padding.big */
  ${({$edges:e,theme:t})=>b("top",e,t.margin.large,t.margin.big)}
  ${({$edges:e,theme:t})=>b("bottom",e,t.margin.large,t.margin.big)}

  @media (min-width: 768px) {
    ${({$edges:e,theme:t})=>b("top",e,t.margin.big,t.padding.big)}
    ${({$edges:e,theme:t})=>b("bottom",e,t.margin.big,t.padding.big)}
  }
`,v=(0,h.U)(m.f).withConfig({displayName:"CtaSection.styles__Container",componentId:"sc-53eb986f-2"})`
  margin-bottom: 0;
`,w=(0,h.U)(g.f).withConfig({displayName:"CtaSection.styles__Column",componentId:"sc-53eb986f-3"})`
  margin-bottom: 0;
`,$=h.U.div.withConfig({displayName:"CtaSection.styles__Content",componentId:"sc-53eb986f-4"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({theme:e})=>e.margin.default};
  text-align: center;
`,k=h.q`
  from {
    clip-path: inset(0 100% 0 0);
    opacity: 0;
    transform: translateY(0.25em);
  }
  to {
    clip-path: inset(0 0 0 0);
    opacity: 1;
    transform: none;
  }
`,C=h.U.h2.withConfig({displayName:"CtaSection.styles__Headline",componentId:"sc-53eb986f-5"})`
  max-width: 100%;
  margin: 0;
  font-family: ${({theme:e})=>e.font.primaryFamily};
  font-size: 30px;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: 0;
  text-transform: none;
  color: ${({theme:e})=>e.palette.text.onAccent};
  /* Kreislaufwirtschaft läuft am Telefon sonst über den Rand; Silbentrennung verhindert das */
  hyphens: auto;
  overflow-wrap: break-word;

  @media (min-width: 640px) {
    font-size: 36px;
    line-height: 40px;
  }

  /* #2127: am Telefon eine Stufe der Theme-Skala kleiner */
  ${(0,p.A)([{ab:0,px:30},{ab:640,px:36}])}

  @media (min-width: 768px) {
    font-size: 48px;
    line-height: 1.1;
  }

  @media (min-width: 1280px) {
    font-size: 60px;
    line-height: 1.1;
  }

  &[data-state='idle'] [data-word] {
    opacity: 0;
    clip-path: inset(0 100% 0 0);
  }

  &[data-state='running'] [data-word] {
    animation: ${k} ${520}ms cubic-bezier(0.2, 0.8, 0.2, 1) both;
    animation-delay: calc(var(--word, 0) * ${70}ms);
  }

  @media (prefers-reduced-motion: reduce) {
    &[data-state] [data-word] {
      animation: none;
      opacity: 1;
      clip-path: none;
    }
  }
`,M=h.U.span.withConfig({displayName:"CtaSection.styles__Word",componentId:"sc-53eb986f-6"})`
  display: inline-block;
  max-width: 100%;
`,j=h.U.div.withConfig({displayName:"CtaSection.styles__ButtonSlot",componentId:"sc-53eb986f-7"})`
  display: flex;
  justify-content: center;
  max-width: 100%;
  /* Die Kacheln des Buttons ragen eine Reihe plus Ring unter seinen Kasten —
     Luft bis zum Wabenrand des Bands */
  padding-bottom: ${({theme:e})=>e.margin.large};
`;e.s(["f",0,e=>{let{headline:h,buttonText:u,buttonHref:p,icon:m,className:g,dataTestId:b="cta-section",dataAttributes:k,edges:z,motion:L=!0,onFirstView:N,onFirstHover:R,onCtaClick:_}=e,I=(0,f.N)(z),H=(0,i.useRef)(null),S=(0,i.useRef)(null),T=(0,i.useRef)(null),A=(0,i.useMemo)(()=>h.trim().split(/\s+/).filter(Boolean),[h]),{columns:E}=(0,d.f)(H,24,44),{state:W,visible:U}=(0,l.f)(H,520+70*Math.max(0,A.length-1),.25),V=(0,c.f)("(pointer: fine)"),B=L&&V&&"static"!==W&&"pending"!==W,F=(0,i.useRef)(N);(0,i.useEffect)(()=>{F.current=N}),(0,i.useEffect)(()=>{U&&F.current?.()},[U]);let O=(0,i.useRef)(null),P=(0,i.useRef)(!1),K=(0,i.useCallback)(e=>{if(!B||"touch"===e.pointerType)return;O.current||(O.current={root:e.currentTarget.getBoundingClientRect()});let{root:t}=O.current;T.current?.move(e.clientX-t.left,e.clientY-t.top),P.current||(P.current=!0,R?.())},[B,R]),Z=(0,i.useCallback)(()=>{O.current=null,T.current?.leave()},[]);(0,i.useEffect)(()=>{if(!B)return;let e=()=>{O.current=null};return window.addEventListener("scroll",e,{passive:!0}),()=>window.removeEventListener("scroll",e)},[B]);let q=L&&"pending"!==W&&"idle"!==W?"active":"hidden";return(0,t.jsxs)(x,{ref:H,className:g,...k,"data-testid":b,"data-hex-stage":"true","data-columns":E,"data-state":L?W:"static","data-motion":L?"true":"false","data-pointer":B?"fine":"none",$edges:I?z:void 0,onPointerMove:K,onPointerLeave:Z,children:[L&&(0,t.jsx)(o.K,{anchorRef:S,state:q,duration:900,columns:E,tone:"light",dataTestId:`${b}-backdrop`}),L&&(0,t.jsx)(s.f,{ref:T,columns:E,radius:90,enabled:B,dataTestId:`${b}-hover-spot`}),I&&z&&(0,t.jsx)(a.f,{edges:z,zIndex:1,dataTestId:`${b}-edge`}),(0,t.jsx)(y,{$edges:I?z:void 0,children:(0,t.jsx)(v,{dataTestId:`${b}-row`,children:(0,t.jsx)(w,{xs:12,md:10,mdOffset:1,lg:8,lgOffset:2,dataTestId:`${b}-col`,children:(0,t.jsxs)($,{ref:S,"data-testid":`${b}-content`,children:[m&&(0,t.jsx)(n.c,{name:m.name,tone:m.tone,size:"large",shape:"hex",dataTestId:`${b}-icon`}),(0,t.jsx)(C,{"data-testid":`${b}-headline`,"data-state":L?W:"static","data-words":A.length,children:A.map((e,n)=>(0,t.jsxs)(i.default.Fragment,{children:[n>0&&" ",(0,t.jsx)(M,{"data-word":n,style:{"--word":n},children:e})]},`${n}-${e}`))}),p&&(0,t.jsx)(j,{"data-testid":`${b}-button-slot`,children:(0,t.jsx)(r.f,{href:p,tone:"green",size:"large",onClick:_,dataTestId:`${b}-button`,children:u})})]})})})})]})}],422180),e.s([],177607)},808847,e=>{e.i(311046);var t=e.i(650529),i=e.i(355351);let n=(e,n,a,r=t.Q)=>{let o=new Map;if(0===e.length||0===a.length)return o;let s=(0,i.P)(e,n,a.length);for(let i of e){let e=s.get(i.key);if(void 0===e)continue;let n=(0,t.U)(i,e,a,r);n>.005&&o.set(i.key,Math.round(1e3*n)/1e3)}return o};e.s(["K",0,20,"v",0,(e,a,r,o,s,l=t.Q)=>{if(0===e.length||0===a.length)return[];let d=n(e,e=>a.some(t=>(0,i.D)(e,t)),r,l),c=e.filter(e=>d.has(e.key));if(0===c.length)return[];let f={left:Math.min(...c.map(e=>e.x)),top:Math.min(...c.map(e=>e.y)),right:Math.max(...c.map(e=>e.x+e.size)),bottom:Math.max(...c.map(e=>e.y+e.size))},h=.5*s;return c.map(e=>{let t=(e.cx-f.left+(f.bottom-e.cy))/(f.right-f.left+(f.bottom-f.top)||1);return{key:e.key,alpha:d.get(e.key)??0,delay:Math.round(o+Math.min(1,Math.max(0,t))*h)}})},"r",0,e=>Math.round(.5*e),"A",0,n,"a",0,(e,a,r,o,s,l=t.V,d=t.Q)=>{if(0===o.length)return[];let c=(0,i.T)(e,a,r);if(0===c.length)return[];let f=c[0].size*(l.length+2),h=Math.min(...o.map(e=>e.left))-f,u=Math.min(...o.map(e=>e.top))-f,p=Math.max(...o.map(e=>e.right))+f,m=Math.max(...o.map(e=>e.bottom))+f,g=c.filter(e=>e.x+e.size>=h&&e.x<=p&&e.y+e.size>=u&&e.y<=m),x=n(g,s,l,d);return g.flatMap(e=>{let t=x.get(e.key);return void 0===t?[]:[{...e,alpha:t}]})},"J",0,(e,i,a=t.V,r=t.Q)=>{if(0===i.length)return[];let o=new Set(i);return Array.from(n(e,e=>o.has(e.key),a,r),([e,t])=>({key:e,alpha:t}))},"L",0,(e,t,i=t)=>({left:e.left-t,top:e.top-i,right:e.right+t,bottom:e.bottom+i})])},352162,791777,515578,706994,e=>{var t=e.i(843476),i=e.i(271645);e.i(311046);var n=e.i(650529),a=e.i(355351),r=e.i(808847),o=e.i(997053),s=e.i(118410),l=e.i(547905);let d=o.q`
  from { opacity: 0; transform: scale(0) rotate(-14deg); }
  to { opacity: var(--alpha); transform: scale(1) rotate(0deg); }
`,c=o.q`
  from { opacity: var(--alpha); }
  to { opacity: 0; }
`,f=o.U.div.withConfig({displayName:"HexContentBackdrop.styles__Root",componentId:"sc-3d26f569-0"})`
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  /* Layout/Style/Paint bleiben in dieser Ebene — 1000+ Kacheln invalidieren nicht die Seite */
  contain: layout style paint;
  /* #2192: helle Waben auf dunkler Fläche liegen normal darüber */
  mix-blend-mode: ${({$tone:e})=>"light"===e?"normal":"multiply"};
`,h=o.U.div.withConfig({displayName:"HexContentBackdrop.styles__Tile",componentId:"sc-3d26f569-1"})`
  position: absolute;
  left: var(--x);
  top: var(--y);
  width: var(--size);
  height: var(--size);
  ${l.p}
  background: ${({$tone:e,theme:t})=>"light"===e?t.palette.text.onAccent:s.h.PRIMARY};
  opacity: 0;
  will-change: transform, opacity;

  ${({$state:e,$pop:t,$partial:i})=>"active"===e&&(i?o.m`
          animation:
            ${d} ${t}ms cubic-bezier(0.2, 0.8, 0.2, 1) var(--delay) both,
            ${l.H} var(--shimmer-period) ease-in-out calc(var(--delay) + ${t}ms) infinite;
        `:o.m`
          animation: ${d} ${t}ms cubic-bezier(0.2, 0.8, 0.2, 1) both;
          animation-delay: var(--delay);
        `)}

  ${({$state:e,$leave:t,$leaveDelay:i})=>"leaving"===e&&o.m`
      animation: ${c} ${t}ms ease-in ${i}ms both;
    `}

  @media (prefers-reduced-motion: reduce) {
    /* nur die erste Animation (pop bzw. fadeOut) — kein Atmen */
    animation-name: ${({$state:e})=>"leaving"===e?c:d};
    animation-duration: 200ms;
    animation-delay: 0ms;
  }
`,u=o.U.div.withConfig({displayName:"HexContentBackdrop.styles__HaloTile",componentId:"sc-3d26f569-2"})`
  position: absolute;
  left: var(--x);
  top: var(--y);
  width: var(--size);
  height: var(--size);
  ${l.p}
  background: ${s.h.PRIMARY};
  opacity: var(--alpha);
  ${({$partial:e})=>e&&l.t}
`,p="h1, h2, h3, h4, p, button, a, [data-backdrop-leaf]",m=(e,t)=>{let i=0,n=0,a=e;for(;a&&a!==t;)i+=a.offsetLeft,n+=a.offsetTop,a=a.offsetParent;return{left:i,top:n,right:i+e.offsetWidth,bottom:n+e.offsetHeight}},g="data-hex-face",x=(e,t,n,a=r.K)=>{let[o,s]=(0,i.useState)(null),[l,d]=(0,i.useState)([]);return(0,i.useEffect)(()=>{let i=e.current;if(!i)return;let n=i.offsetParent??i.parentElement,o=()=>{let e,o,l=i.offsetWidth,c=i.offsetHeight;if(l<=0||c<=0)return;s(e=>e&&e.width===l&&e.height===c?e:{width:l,height:c});let f=t.current,h=f?(e=Array.from(f.querySelectorAll(p)),o=Array.from(f.children),(e.length>0?e:o.length>0?o:[f]).filter(e=>e.offsetWidth>0&&e.offsetHeight>0).flatMap(e=>((e,t)=>{let i=m(e,t),n=(e=>{if(!e)return null;let t=e.split(",").map(Number);if(4!==t.length||t.some(e=>!Number.isFinite(e)))return null;let[i,n,a,r]=t;return a>i&&r>n?{left:i,top:n,right:a,bottom:r}:null})(e.getAttribute(g));if(n)return[{left:i.left+n.left,top:i.top+n.top,right:i.left+n.right,bottom:i.top+n.bottom}];let a=e.tagName.toLowerCase();if("button"===a||"a"===a||"u"<typeof document||!document.createRange)return[i];let r=e.getBoundingClientRect(),o=i.left-r.left,s=i.top-r.top,l=document.createRange();l.selectNodeContents(e);let d=Array.from(l.getClientRects?.()??[]).filter(e=>e.width>0&&e.height>0).map(e=>({left:e.left+o,top:e.top+s,right:e.right+o,bottom:e.bottom+s}));return d.length>0?d:[i]})(e,n)).map(e=>(0,r.L)(e,a,a/2))):[];d(e=>JSON.stringify(e)===JSON.stringify(h)?e:h)};if(o(),"u">typeof document&&document.fonts?.ready&&document.fonts.ready.then(o).catch(()=>void 0),"u"<typeof ResizeObserver)return;let l=new ResizeObserver(o);l.observe(i);let c=t.current;c&&(l.observe(c),c.querySelectorAll(p).forEach(e=>l.observe(e)));let f=c&&"u">typeof MutationObserver?new MutationObserver(o):null;return f?.observe(c,{subtree:!0,attributes:!0,attributeFilter:[g]}),()=>{l.disconnect(),f?.disconnect()}},[e,t,n,a]),{stage:o,rects:l}};e.s(["M",0,g,"K",0,({anchorRef:e,state:o,duration:s,enterDelay:l=.2*s,enterDuration:d=.8*s,leaveDelay:c=0,leaveDuration:u=.3*s,columns:p=12,padding:m=r.K,waveAlphas:g=n.V,tone:b="primary",dataTestId:y="hex-content-backdrop",className:v})=>{let w=(0,i.useRef)(null),{stage:$,rects:k}=x(w,e,o,m),C=(0,i.useMemo)(()=>{if("hidden"===o||!$||0===k.length)return[];let e=(0,a.T)($.width,$.height,p),t=new Map(e.map(e=>[e.key,e]));return(0,r.v)(e,k,g,l,d).flatMap(e=>{let i=t.get(e.key);return i?[{...i,x:i.x-1,y:i.y-1,size:i.size+2,alpha:e.alpha,delay:e.delay}]:[]})},[o,$,k,p,g,l,d]);return(0,t.jsx)(f,{ref:w,className:v,"data-testid":y,"data-ready":C.length>0?"true":"false","data-tiles":C.length,"data-rects":k.length,"data-tone":b,$tone:b,"aria-hidden":"true",children:C.map(e=>(0,t.jsx)(h,{$state:o,$pop:(0,r.r)(d),$leaveDelay:Math.round(c),$leave:Math.round(u),$partial:(0,n.v)(e.alpha),$tone:b,style:{"--x":`${e.x}px`,"--y":`${e.y}px`,"--size":`${e.size}px`,"--alpha":String("light"===b?+(.14*e.alpha).toFixed(3):e.alpha),"--delay":`${e.delay}ms`,"--shimmer-period":`${(0,n.g)(e).period}ms`}},e.key))})},"f",0,(e,t)=>[e.left-t.left,e.top-t.top,e.right-t.left,e.bottom-t.top].map(e=>Math.round(e)).join(","),"e",0,m,"Z",0,x],791777);var b=n;e.s(["f",0,({width:e,height:n,columns:o,keys:s,steps:l=b.V,dataTestId:d="hex-halo-backdrop",className:c})=>{let h=(0,i.useMemo)(()=>{if(e<=0||n<=0||0===s.length)return[];let t=(0,a.T)(e,n,o),i=new Map(t.map(e=>[e.key,e]));return(0,r.J)(t,s,l).flatMap(({key:e,alpha:t})=>{let n=i.get(e);return n?[{...n,alpha:t}]:[]})},[e,n,o,s,l]);return(0,t.jsx)(f,{className:c,"data-testid":d,"data-tiles":h.length,"aria-hidden":"true",children:h.map(e=>{let{period:i,offset:n}=(0,b.g)(e);return(0,t.jsx)(u,{$partial:(0,b.v)(e.alpha),style:{"--x":`${e.x-1}px`,"--y":`${e.y-1}px`,"--size":`${e.size+2}px`,"--alpha":String(e.alpha),"--shimmer-period":`${i}ms`,"--shimmer-offset":`${n}ms`}},e.key)})})}],515578),e.s([],352162);var y=e.i(626645);e.s(["f",()=>y.$],706994)},390517,404857,49891,e=>{var t=e.i(843476),i=e.i(271645),n=e.i(499911);e.i(710788);var a=e.i(599858);e.i(352162);var r=e.i(791777),o=e.i(808847);e.i(311046);var s=e.i(355351);let l=e=>{let[t,n]=(0,i.useState)(null);return(0,i.useEffect)(()=>{let t=e.current;if(!t)return;let i=t.closest("[data-hex-stage]")??t.offsetParent;if(!i)return;let a=()=>{let e=i.offsetWidth,a=i.offsetHeight;if(e<=0||a<=0||t.offsetWidth<=0)return;let o=Number(i.getAttribute("data-columns")),l=o>0?o:(0,s.L)(e),d=(0,r.e)(t,i);n(t=>t&&t.width===e&&t.height===a&&t.columns===l&&JSON.stringify(t.rect)===JSON.stringify(d)?t:{width:e,height:a,columns:l,rect:d})};if(a(),"u">typeof document&&document.fonts?.ready&&document.fonts.ready.then(a).catch(()=>void 0),"u"<typeof ResizeObserver)return;let o=new ResizeObserver(a);o.observe(i),o.observe(t);let l="u"<typeof MutationObserver?null:new MutationObserver(a);return l?.observe(i,{attributes:!0,attributeFilter:["data-columns"]}),()=>{o.disconnect(),l?.disconnect()}},[e]),t};e.s(["f",0,l],404857);var d=e.i(997053);e.i(315481);var c=e.i(10003),f=e.i(706994);let h=d.m`
  position: relative;
  isolation: isolate;
  display: inline-flex;
  align-items: center;
  /* #1441: nie breiter als der Platz — auf 360 px ragte ein langer Text sonst hinaus */
  box-sizing: border-box;
  max-width: 100%;
  padding: 10px 18px;
  margin: 0;
  /* #1416: zwei Kachelreihen Abstand zum Text darüber (vorher eine) */
  margin-top: ${2*s.V*s.E}px;
  border: 0;
  background: transparent;
  color: ${({theme:e})=>e.palette.text.onLight};
  font-family: ${({theme:e})=>e.font.secondaryFamily};
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover,
  &:focus-visible {
    color: ${({theme:e})=>e.palette.text.onAccent};
  }

  &:hover > svg[data-hex-cta-tiles] g,
  &:focus-visible > svg[data-hex-cta-tiles] g {
    color: ${({theme:e})=>e.palette.default.secondary};
  }

  &:hover svg.hex-cta-icon,
  &:focus-visible svg.hex-cta-icon {
    transform: translateX(3px);
  }

  &:focus-visible {
    outline: none;
  }

  &:disabled {
    cursor: default;
  }

  /* Die globalen a-Regeln (Farbe, Hover-Farbe) gelten hier nicht */
  &&:link,
  &&:visited {
    color: ${({theme:e})=>e.palette.text.onLight};
  }

  &&:hover,
  &&:focus-visible {
    color: ${({theme:e})=>e.palette.text.onAccent};
  }
`,u=d.m`
  > svg[data-hex-cta-tiles] g {
    color: ${({theme:e})=>e.palette.site.greenDark};
  }

  &&,
  &&:link,
  &&:visited {
    color: ${({theme:e})=>e.palette.text.onAccent};
  }

  &&:hover,
  &&:focus-visible {
    color: ${({theme:e})=>e.palette.site.navy};
  }

  &:hover > svg[data-hex-cta-tiles] g,
  &:focus-visible > svg[data-hex-cta-tiles] g {
    color: ${({theme:e})=>e.palette.text.onAccent};
  }
`,p=d.m`
  padding: 14px 24px;
  font-size: 20px;
  line-height: 28px;

  svg.hex-cta-icon {
    width: 24px;
    height: 24px;
  }
`,m=d.m`
  ${({$tone:e})=>"green"===e?u:""}
  ${({$size:e})=>"large"===e?p:""}
`,g=(0,d.U)(c.NavLink).withConfig({displayName:"HexCta.styles__CtaLink",componentId:"sc-d46587ea-0"})`
  ${h}
  ${m}
`,x=d.U.button.withConfig({displayName:"HexCta.styles__CtaButton",componentId:"sc-d46587ea-1"})`
  ${h}
  ${m}
`,b=d.U.span.withConfig({displayName:"HexCta.styles__Label",componentId:"sc-d46587ea-2"})`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  transform: translate(var(--dx, 0), var(--dy, 0));
  /* umbrechen statt überlaufen, wenn der Button an max-width stößt */
  white-space: normal;
  overflow-wrap: anywhere;
  min-width: 0;

  svg.hex-cta-icon {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
    transition: transform 0.2s ease;
  }
`,y=(0,d.U)(f.f).withConfig({displayName:"HexCta.styles__Tiles",componentId:"sc-d46587ea-3"})`
  z-index: -1;
  pointer-events: none;

  [data-full='true'] {
    pointer-events: visiblePainted;
  }
`,v=[1,.35];e.s(["f",0,({children:e,href:d,onClick:c,disabled:f,steps:h=v,onCellsChange:u,tone:p="light",size:m="default",className:w,dataTestId:$="hex-cta"})=>{let k=(0,i.useRef)(null),C=l(k),M=(0,i.useMemo)(()=>C?(e=>{let{width:t,height:i,columns:n,rect:a}=e,r=(0,s.T)(t,i,n);if(0===r.length)return null;let o=r[0].size,l=(a.left+a.right)/2,d=(a.top+a.bottom)/2,c=r.reduce((e,t)=>Math.abs(t.cy-d)<Math.abs(e.cy-d)?t:e),f=(a.right-a.left)/2,h=(e,t)=>Math.abs(e.cx-l)<=t,u=r.filter(e=>e.row===c.row?h(e,f+.5*o):1===Math.abs(e.row-c.row)&&h(e,f));if(0===u.length)return null;let p=Math.min(...u.map(e=>e.x)),m=Math.max(...u.map(e=>e.x+e.size)),g=Math.min(...u.map(e=>e.y)),x=Math.max(...u.map(e=>e.y+e.size));return{seeds:new Set(u.map(e=>e.key)),dx:Math.round((p+m)/2-l),dy:Math.round(c.cy-d),face:{left:p,top:g,right:m,bottom:x}}})(C):null,[C]),j=(0,i.useMemo)(()=>C&&M?(0,o.a)(C.width,C.height,C.columns,[C.rect],e=>M.seeds.has(e.key),h):[],[C,M,h]),z=!!(C&&M&&j.length>0),L=(0,i.useRef)(u);(0,i.useEffect)(()=>{L.current=u}),(0,i.useEffect)(()=>{M&&L.current?.([...M.seeds])},[M]);let N=C&&M&&z?(0,r.f)(M.face,C.rect):void 0,R={[r.M]:N},_=(0,t.jsxs)(t.Fragment,{children:[C&&z&&(0,t.jsx)(y,{"aria-hidden":"true",focusable:"false","data-hex-cta-tiles":"true","data-testid":`${$}-tiles`,"data-rows":3,style:{"--edge-x":`${-C.rect.left}px`,"--edge-y":`${-C.rect.top}px`,"--edge-w":`${C.width}px`,"--edge-h":`${C.height}px`},children:(0,t.jsx)(a.f,{tiles:j,color:"onAccent"})}),(0,t.jsxs)(b,{style:{"--dx":`${M?.dx??0}px`,"--dy":`${M?.dy??0}px`},children:[(0,t.jsx)("span",{children:e}),(0,t.jsx)(n.f,{className:"hex-cta-icon"})]})]});return d?(0,t.jsx)(g,{ref:k,href:d,onClick:c,className:w,$tone:p,$size:m,"data-tone":p,"data-size":m,"data-testid":$,"data-tiles":j.length,"data-ready":z?"true":"false",...R,children:_}):(0,t.jsx)(x,{ref:k,type:"button",onClick:c,disabled:f,className:w,$tone:p,$size:m,"data-tone":p,"data-size":m,"data-testid":$,"data-tiles":j.length,"data-ready":z?"true":"false",...R,children:_})}],49891),e.s([],390517)},307839,585584,e=>{var t=e.i(843476),i=e.i(271645),n=e.i(355351),a=e.i(997053),r=e.i(118410),o=e.i(547905);let s=a.U.div.withConfig({displayName:"HexHoverSpot.styles__Root",componentId:"sc-9588288a-0"})`
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  /* Layout/Style/Paint bleiben in dieser Ebene — 1000+ Kacheln invalidieren nicht die Seite */
  contain: layout style paint;

  @media (hover: none), (prefers-reduced-motion: reduce) {
    display: none;
  }
`,l=a.q`
  from { opacity: 0; transform: scale(0) rotate(-14deg); }
  to { opacity: var(--lit, 0.6); transform: scale(1) rotate(0deg); }
`,d=a.q`
  from { opacity: var(--lit, 0.6); transform: scale(1) rotate(0deg); }
  to { opacity: 0; transform: scale(0) rotate(-14deg); }
`,c=a.U.div.withConfig({displayName:"HexHoverSpot.styles__Tile",componentId:"sc-9588288a-1"})`
  position: absolute;
  left: var(--x);
  top: var(--y);
  width: var(--size);
  height: var(--size);
  ${o.p}
  background: rgba(255, 255, 255, 0.55);
  opacity: 0;
  transform: scale(0) rotate(-14deg);
  will-change: transform, opacity;

  &[data-lit='true'] {
    animation: ${l} 420ms cubic-bezier(0.2, 0.8, 0.2, 1) both;
  }

  &[data-lit='false'][data-was-lit='true'] {
    animation: ${d} 650ms cubic-bezier(0.2, 0.8, 0.2, 1) both;
  }

  /* Pfeil-Kacheln leuchten blau statt weiß */
  &[data-accent='true'] {
    background: ${r.h.PRIMARY};
  }

  /* #1418: Kacheln legen die Ebene darunter frei. Der Wert steht in der
     Klasse der Kachel (für alle Kacheln dieselbe), damit var(--x)/var(--y)
     je Kachel aufgelöst werden — auf der Wurzel gesetzt, lösten sie dort auf. */
  ${({$reveal:e})=>e?`background: ${e};`:""}
`,f=(0,i.forwardRef)(function({columns:e=12,radius:a=70,enabled:r=!0,accentKeys:o,reveal:l,dataTestId:d="hex-hover-spot",className:f},h){let u=(0,i.useRef)(null),[p,m]=(0,i.useState)(null),g=(0,i.useMemo)(()=>p?(0,n.T)(p.width,p.height,e):[],[p,e]),x=(0,i.useRef)(g);x.current=g;let b=(0,i.useRef)(new Set),y=(0,i.useRef)(null),v=(0,i.useRef)(null),w=(0,i.useRef)(new Map);(0,i.useEffect)(()=>{let e=u.current;if(!e)return;let t=()=>{let t=e.getBoundingClientRect();t.width>0&&t.height>0&&m({width:t.width,height:t.height})};if(t(),"u"<typeof ResizeObserver)return;let i=new ResizeObserver(t);return i.observe(e),()=>i.disconnect()},[]);let $=e=>w.current.get(e)??null,k=()=>{for(let e of b.current){let t=$(e);t&&(t.dataset.lit="false",t.dataset.wasLit="true")}b.current.clear(),u.current?.setAttribute("data-active","false")},C=()=>{y.current=null;let e=v.current;if(!e)return;let t=new Set;for(let i of x.current){if(Math.abs(i.cx-e.x)>a||Math.abs(i.cy-e.y)>a)continue;let r=(0,n.a)(i,e.x,e.y,a);if(r<=0)continue;t.add(i.key);let o=$(i.key);o&&(o.style.setProperty("--lit",(.25+.75*r).toFixed(2)),"true"!==o.dataset.lit&&(o.dataset.lit="true"))}for(let e of b.current)if(!t.has(e)){let t=$(e);t&&(t.dataset.lit="false",t.dataset.wasLit="true")}b.current=t,u.current?.setAttribute("data-active",t.size>0?"true":"false")};return(0,i.useImperativeHandle)(h,()=>({move:(e,t)=>{r&&(v.current={x:e,y:t},"function"!=typeof requestAnimationFrame?C():null===y.current&&(y.current=requestAnimationFrame(C)))},leave:()=>{v.current=null,k()}}),[r,a]),(0,i.useEffect)(()=>{r||(v.current=null,k())},[r]),(0,i.useEffect)(()=>()=>{null!==y.current&&"function"==typeof cancelAnimationFrame&&cancelAnimationFrame(y.current)},[]),(0,t.jsx)(s,{ref:u,className:f,"data-testid":d,"data-active":"false","data-ready":p?"true":"false","data-tiles":g.length,"data-reveal":l?"true":"false","aria-hidden":"true",children:g.map(e=>{let i;return(0,t.jsx)(c,{ref:(i=e.key,e=>{e?w.current.set(i,e):w.current.delete(i)}),"data-key":e.key,"data-lit":"false","data-accent":o?.includes(e.key)?"true":void 0,$reveal:l,style:{"--x":`${e.x}px`,"--y":`${e.y}px`,"--size":`${e.size}px`}},e.key)})})});e.s(["f",0,f],585584),e.s([],307839)},371561,e=>{var t=e.i(271645);let i=["slow-2g","2g"];e.s(["f",0,()=>{let[e,n]=(0,t.useState)(!1);return(0,t.useEffect)(()=>{let e="u"<typeof navigator?void 0:navigator.connection,t=()=>n(!!e?.saveData||i.includes(e?.effectiveType??""));return t(),e?.addEventListener?.("change",t),()=>e?.removeEventListener?.("change",t)},[]),e}])},647835,764576,e=>{var t=e.i(271645),i=e.i(587076),n=e.i(394497),a=e.i(371561);function r({mounted:e,reducedMotion:t,saveData:i,seen:n,finished:a}){return e?t||i?"static":n?a?"ready":"running":"idle":"pending"}function o(e,t=0){let i=Math.max(0,Math.min(t,(e.count??1)-1));return{delay:e.start+i*(e.stagger??0),duration:e.duration}}e.s(["Q",0,e=>"ready"===e,"L",0,function(e){let t=new Set;for(let i of e){if(t.has(i.id))throw Error(`Phase "${i.id}" doppelt`);for(let e of(t.add(i.id),[i.start,i.duration,i.stagger??0,i.count??1]))if(!Number.isFinite(e)||e<0)throw Error(`Phase "${i.id}": ung\xfcltige Zeit ${e}`)}},"E",0,function(e){return e.reduce((e,t)=>Math.max(e,function(e){let{delay:t,duration:i}=o(e,(e.count??1)-1);return t+i}(t)),0)},"G",0,function(e,t){let i=e.find(e=>e.id===t);if(!i)throw Error(`Phase "${t}" fehlt`);return i},"g",0,o,"n",0,r],764576),e.s(["f",0,function(e,o,s=.35){let l=(0,n.f)(e,s),d=(0,i.f)(),c=(0,a.f)(),[f,h]=(0,t.useState)(!1),[u,p]=(0,t.useState)(!1),[m,g]=(0,t.useState)(!1);(0,t.useEffect)(()=>h(!0),[]),(0,t.useEffect)(()=>{l&&p(!0)},[l]);let x=r({mounted:f,reducedMotion:d,saveData:c,seen:u,finished:m});return(0,t.useEffect)(()=>{if("running"!==x)return;let e=window.setTimeout(()=>g(!0),o);return()=>window.clearTimeout(e)},[x,o]),{state:x,visible:l}}],647835)},587076,e=>{var t=e.i(271645);e.s(["f",0,()=>{let[e,i]=(0,t.useState)(!1);return(0,t.useEffect)(()=>{if("function"!=typeof window.matchMedia)return;let e=window.matchMedia("(prefers-reduced-motion: reduce)"),t=()=>i(e.matches);return t(),e.addEventListener("change",t),()=>e.removeEventListener("change",t)},[]),e}])},394497,e=>{var t=e.i(271645);e.s(["f",0,(e,i=.2,n)=>{let[a,r]=(0,t.useState)(!1);return(0,t.useEffect)(()=>{let t=e.current;if("u"<typeof IntersectionObserver)return void r(!0);if(!t)return;let a=new IntersectionObserver(([e])=>r(e.isIntersecting),{threshold:i,rootMargin:n});return a.observe(t),()=>a.disconnect()},[e,i,n]),a}])}])})();