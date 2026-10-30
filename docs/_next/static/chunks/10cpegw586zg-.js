(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,429307,159255,e=>{var t=e.i(843476),i=e.i(997053);e.i(315481);var a=e.i(10003),n=e.i(726029),r=e.i(437992);let o=(0,i.U)(a.NavLink).withConfig({displayName:"ArrowLink__Root",componentId:"sc-c779a4e5-0"})`
  ${n.e}
  ${({$stretched:e})=>e&&n.i}
`,s=()=>(0,t.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":"true",children:(0,t.jsx)("path",{d:"M8.9 3.3a.9.9 0 0 1 1.3 0l4.1 4.1a.9.9 0 0 1 0 1.2l-4.1 4.1a.9.9 0 1 1-1.3-1.3l2.6-2.5H2.4a.9.9 0 1 1 0-1.8h9.1L8.9 4.6a.9.9 0 0 1 0-1.3Z"})}),l=i.U.span.withConfig({displayName:"ArrowLink__Nowrap",componentId:"sc-c779a4e5-1"})`
  white-space: nowrap;
`;e.s(["f",0,function({href:e,children:i,dataTestId:a,target:n,stretched:d=!1}){let c="string"==typeof i?i:null,f=c?c.lastIndexOf(" "):-1;return(0,t.jsx)(o,{href:e,"data-testid":a,"data-stretched":d?"true":void 0,$stretched:d,...(0,r.a)(e,{target:n}),children:c&&f>0?(0,t.jsxs)(t.Fragment,{children:[c.slice(0,f+1),(0,t.jsxs)(l,{children:[c.slice(f+1),(0,t.jsx)(s,{})]})]}):(0,t.jsxs)(t.Fragment,{children:[i,(0,t.jsx)(s,{})]})})}],159255),e.s([],429307)},411206,173972,e=>{var t=e.i(843476),i=e.i(271645),a=e.i(618566);e.i(821194);var n=e.i(99222),r=e.i(476999),o=e.i(14431),s=e.i(713347),l=e.i(635647),d=e.i(891567),c=e.i(997053);let f=c.m`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.margin.extrasmall};
  font: inherit;
  color: inherit;
  overflow-wrap: anywhere;

  svg {
    flex-shrink: 0;
  }

  @media (pointer: coarse) {
    min-height: 44px;
  }
`,h=c.U.a.withConfig({displayName:"ContactLink.styles__Link",componentId:"sc-41592123-0"})`
  ${f}
  text-decoration: none;

  &&,
  &&:hover,
  &&:visited {
    color: inherit;
  }

  &:hover {
    text-decoration: underline;
  }

  &:focus-visible {
    outline: 2px solid currentColor;
    outline-offset: 2px;
  }
`,u=c.U.span.withConfig({displayName:"ContactLink.styles__Plain",componentId:"sc-41592123-1"})`
  ${f}
`,p={tel:{key:"contactLink.aria.tel",fallback:"Anrufen: {{value}}"},mail:{key:"contactLink.aria.mail",fallback:"E-Mail schreiben an {{value}}"},map:{key:"contactLink.aria.map",fallback:"Auf der Karte zeigen: {{value}}"}};e.s(["f",0,({kind:e,value:c,place:f,geo:m,subject:g,icon:x,children:b,dataTestId:y,className:v})=>{let{tr:w}=(0,n.f)(),k=(0,a.usePathname)(),$="string"==typeof c?c.trim():"",C=(0,s.useSiteLocale)(),j="tel"===e?(0,l.A)($):"mail"===e?(0,l.c)($,g):(0,l.W)({query:$,geo:m},C),M=(0,i.useCallback)(()=>{(0,r.q)(k||"/",d.F,{kind:e,place:f}),o.v({category:"contact",message:d.F,data:{kind:e,place:f}})},[k,e,f]),_=y??`contact-link-${e}`,N=(0,t.jsxs)(t.Fragment,{children:[x,b??$]});if(!$)return null;if(!j)return(0,t.jsx)(u,{className:v,"data-testid":_,"data-kind":e,"data-linked":"false",children:N});let L=$.replace(/\s*\n\s*/g,", ");return(0,t.jsx)(h,{className:v,href:j,onClick:M,"aria-label":w(p[e].key,{value:L,defaultValue:p[e].fallback}),"data-testid":_,"data-kind":e,"data-linked":"true",children:N})}],173972),e.s([],411206)},650868,224906,e=>{let t=e.i(152186).f;e.s(["f",0,t],650868);let i=e.i(856337).f;e.s(["f",0,i],224906)},945304,997917,977194,e=>{var t=e.i(843476),i=e.i(464862),a=e.i(696986);let n=e.i(372480).f;var r=e.i(816570),o=e.i(799516),s=e.i(581717),l=e.i(488661),d=e.i(898560),c=e.i(877194),f=e.i(193732),h=e.i(122884),u=e.i(868169),p=e.i(920592),m=e.i(471480);let g=e.i(841712).f;var x=e.i(90792),b=e.i(495835),y=e.i(108939),v=e.i(351357),w=e.i(861527),k=e.i(313922),$=e.i(997053),C=e.i(547905);let j={small:{pad:8,ring:7,icon:16},large:{pad:16,ring:14,icon:32}},M=$.m`
  & > :not([data-chip-layer]) {
    position: relative;
  }
`,_=$.U.span.withConfig({displayName:"IconChip.styles__Root",componentId:"sc-3746e1bb-0"})`
  ${({theme:e,$tone:t,$size:i,$shape:a})=>{let n,r={green:e.palette.site.green,blue:e.palette.site.blue,red:e.palette.site.red}[t],o=j[i];return $.m`
      position: relative;
      left: ${o.ring}px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: ${o.pad}px;
      color: ${r};
      --chip-ring: color-mix(in srgb, ${r} 10%, transparent);
      --chip-face: color-mix(in srgb, ${r} 20%, transparent);
      ${"hex"===a?M:(n=o.ring,$.m`
  border-radius: 9999px;
  background: color-mix(in srgb, ${r} 20%, transparent);
  box-shadow: 0 0 0 var(--chip-ring-width, ${n}px) var(--chip-ring);
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
`,N=$.U.span.withConfig({displayName:"IconChip.styles__Ring",componentId:"sc-3746e1bb-1"})`
  position: absolute;
  inset: calc(-1 * var(--chip-ring-width, ${({$size:e})=>j[e].ring}px));
  ${C.p}
  background: var(--chip-ring);
  transition: inset 150ms ease;

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,L=$.U.span.withConfig({displayName:"IconChip.styles__Face",componentId:"sc-3746e1bb-2"})`
  position: absolute;
  inset: 0;
  ${C.p}
  background: var(--chip-face);
`;e.s(["r",0,L,"N",0,j,"T",0,N,"F",0,_],997917);let I={plus:i.f,search:a.f,send:n,award:r.f,analysis:o.f,recycle:s.f,warning:l.f,check:d.f,chart:c.f,list:f.f,network:({color:e="currentColor",size:i=24,className:a})=>(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",className:a,children:[(0,t.jsx)("title",{children:"network-connections"}),(0,t.jsxs)("g",{fill:e,strokeLinecap:"square",strokeLinejoin:"miter",strokeMiterlimit:"10",children:[(0,t.jsx)("path",{d:"M10.5 16.5L20.5 10",stroke:e,strokeWidth:"2",fill:"none",strokeLinecap:"butt"}),(0,t.jsx)("path",{d:"M18.5 18L20.5 10",stroke:e,strokeWidth:"2",fill:"none",strokeLinecap:"butt"}),(0,t.jsx)("path",{d:"M4.5 11.5L19 8",stroke:e,strokeWidth:"2",fill:"none",strokeLinecap:"butt"}),(0,t.jsx)("path",{d:"M12 4.5L19 7",stroke:e,strokeWidth:"2",fill:"none",strokeLinecap:"butt"}),(0,t.jsx)("path",{d:"M4.5 10.5L8.5 5",stroke:e,strokeWidth:"2",fill:"none",strokeLinecap:"butt"}),(0,t.jsx)("path",{d:"M3 14C4.10457 14 5 13.1046 5 12C5 10.8954 4.10457 10 3 10C1.89543 10 1 10.8954 1 12C1 13.1046 1.89543 14 3 14Z",stroke:e,strokeWidth:"2",fill:"none"}),(0,t.jsx)("path",{d:"M10 6C11.1046 6 12 5.10457 12 4C12 2.89543 11.1046 2 10 2C8.89543 2 8 2.89543 8 4C8 5.10457 8.89543 6 10 6Z",stroke:e,strokeWidth:"2",fill:"none"}),(0,t.jsx)("path",{d:"M21 10C22.1046 10 23 9.10457 23 8C23 6.89543 22.1046 6 21 6C19.8954 6 19 6.89543 19 8C19 9.10457 19.8954 10 21 10Z",stroke:e,strokeWidth:"2",fill:"none"}),(0,t.jsx)("path",{d:"M9 20C10.1046 20 11 19.1046 11 18C11 16.8954 10.1046 16 9 16C7.89543 16 7 16.8954 7 18C7 19.1046 7.89543 20 9 20Z",stroke:e,strokeWidth:"2",fill:"none"}),(0,t.jsx)("path",{d:"M18 22C19.1046 22 20 21.1046 20 20C20 18.8954 19.1046 18 18 18C16.8954 18 16 18.8954 16 20C16 21.1046 16.8954 22 18 22Z",stroke:e,strokeWidth:"2",fill:"none"})]})]}),shield:h.f,users:u.f,contact:p.f,document:m.f,transport:g,star:x.f,sparkle:b.f,settings:y.f,database:v.f,verification:w.f,connection:k.f};function z({tone:e="green",size:i="small",shape:a="round",icon:n,dataTestId:r,children:o}){return(0,t.jsxs)(_,{$tone:e,$size:i,$shape:a,"aria-hidden":"true","data-testid":r,"data-icon":n,"data-tone":e,"data-size":i,"data-shape":a,children:["hex"===a&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(N,{$size:i,"data-chip-layer":"ring","data-testid":"chip-ring"}),(0,t.jsx)(L,{"data-chip-layer":"face","data-testid":"chip-face"})]}),o]})}e.s(["S",0,I,"c",0,function({name:e,tone:i="green",size:a="small",shape:n="round",dataTestId:r}){let o=I[e];return o?(0,t.jsx)(z,{tone:i,size:a,shape:n,icon:e,dataTestId:r,children:(0,t.jsx)(o,{})}):null},"J",0,z],977194),e.s([],945304)},841712,e=>{var t=e.i(843476),i=e.i(997053);let a=i.U.svg.withConfig({displayName:"IconBus.styles__Root",componentId:"sc-efb1bf1b-0"})``;e.s(["f",0,e=>(0,t.jsxs)(a,{className:e.className,"data-testid":"icon-bus-root",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,t.jsx)("title",{children:"bus-side"}),(0,t.jsxs)("g",{fill:"currentColor",strokeLinecap:"square",strokeLinejoin:"miter",strokeMiterlimit:"10",children:[(0,t.jsx)("path",{d:"M10.5 9V3",stroke:"currentColor",strokeWidth:"2",fill:"none",strokeLinecap:"butt"}),(0,t.jsx)("path",{d:"M22 7V8H24V7H22ZM18.7827 6H22V4H18.7827V6ZM22 6V7H24V6H22ZM18.7827 6H19.2827V4H18.7827V6ZM22 6H24C24 4.89543 23.1046 4 22 4V6Z",fill:"currentColor",stroke:"none"}),(0,t.jsx)("path",{d:"M3 19V14H7V19",stroke:"currentColor",strokeWidth:"2",fill:"none",strokeLinecap:"butt"}),(0,t.jsx)("path",{d:"M3 9H11.0809L14 12H20.5H20",stroke:"currentColor",strokeWidth:"2",fill:"none"}),(0,t.jsx)("path",{d:"M3 19H11H10",stroke:"currentColor",strokeWidth:"2",fill:"none"}),(0,t.jsx)("path",{d:"M3 3H14.7686C16.9753 3 18.9128 4.46773 19.5103 6.59207V6.59207C20.3297 9.50573 20.6051 12.5455 20.3226 15.559L20.085 18.0933C20.0368 18.6072 19.6055 19 19.0894 19H17H17.5",stroke:"currentColor",strokeWidth:"2",fill:"none"}),(0,t.jsx)("path",{d:"M14 22C15.6569 22 17 20.6569 17 19C17 17.3431 15.6569 16 14 16C12.3431 16 11 17.3431 11 19C11 20.6569 12.3431 22 14 22Z",stroke:"currentColor",strokeWidth:"2",fill:"none"})]})]})],841712)},813267,e=>{var t=e.i(843476),i=e.i(997053);let a=i.U.svg.withConfig({displayName:"IconLocation.styles__Root",componentId:"sc-d4764d0b-0"})``;e.s(["f",0,e=>(0,t.jsxs)(a,{className:e.className,"data-testid":"icon-location-root",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:[(0,t.jsx)("path",{d:"M4.5 9.75768C4.5 15.5 12 22 12 22C12 22 19.5 15.5 19.5 9.75768C19.5 4.81181 15.6559 2 12 2C8.34409 2 4.5 4.81181 4.5 9.75768Z",stroke:"currentColor",strokeWidth:"2",strokeLinejoin:"round"}),(0,t.jsx)("circle",{cx:"12",cy:"9.5",r:"2.5",stroke:"currentColor",strokeWidth:"2"})]})],813267)},372480,e=>{var t=e.i(843476),i=e.i(997053);let a=i.U.svg.withConfig({displayName:"IconMailSend.styles__Root",componentId:"sc-505d54d1-0"})``;e.s(["f",0,e=>(0,t.jsxs)(a,{className:e.className,"data-testid":"icon-mail-send-root",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,t.jsx)("path",{d:"M2 5V7L12 12L22 7V5",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"square"}),(0,t.jsx)("path",{d:"M21.457 18H22L14 18",stroke:"currentColor",strokeWidth:"2",strokeMiterlimit:"10",strokeLinecap:"square"}),(0,t.jsx)("path",{d:"M18.5 21.5L22 18L18.5 14.5",stroke:"currentColor",strokeWidth:"2",strokeMiterlimit:"10",strokeLinecap:"square"}),(0,t.jsx)("path",{d:"M23 14.7607L21 12.7607V5H3V19H11V21H1V3H23V14.7607Z",fill:"currentColor",stroke:"none"})]})],372480)},874142,e=>{let t=e.i(215063).f;e.s(["f",0,t])},504554,e=>{var t=e.i(843476),i=e.i(997053);let a=i.U.svg.withConfig({displayName:"IconRefresh.styles__Root",componentId:"sc-86a28ebc-0"})``;e.s(["f",0,e=>(0,t.jsx)(a,{className:e.className,"data-testid":"icon-refresh-root",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("path",{d:"M19.4221 8.01389C18.0322 5.61438 15.4343 4 12.4588 4C9.08513 4 6.19686 6.07535 5.00433 9.01736M16.9806 9.01736H21V5.00347M5.57787 16.0417C6.96782 18.4412 9.56573 20.0556 12.5412 20.0556C15.9149 20.0556 18.8031 17.9802 19.9957 15.0382M8.0194 15.0382H4V19.0521",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})],504554)},581717,e=>{let t=e.i(504554).f;e.s(["f",0,t])},90792,e=>{let t=e.i(3338).f;e.s(["f",0,t])},177607,422180,e=>{var t=e.i(843476),i=e.i(271645);e.i(945304);var a=e.i(977194);e.i(710788);var n=e.i(363451);e.i(390517);var r=e.i(49891);e.i(352162);var o=e.i(791777);e.i(307839);var s=e.i(585584),l=e.i(647835),d=e.i(240029),c=e.i(380153);e.i(311046);var f=e.i(499881),h=e.i(997053),u=e.i(547905),p=e.i(726029),m=e.i(650868),g=e.i(224906);let x=h.U.section.withConfig({displayName:"CtaSection.styles__Root",componentId:"sc-53eb986f-0"})`
  position: relative;
  width: 100%;
  /* Ohne globalen border-box-Reset (_reset.scss) addiert content-box das
     seitliche Polster auf die 100% und das Band wird breiter als die Seite. */
  box-sizing: border-box;
  overflow: hidden;
  background-color: ${({theme:e})=>e.palette.site.navy};
  /* Wabenrand (#1188): das Band ist Host */
  ${({$edges:e})=>(0,u.n)(e)}
`,b=(e,t,i,a)=>{let n=t?.[e];return n?.placement==="inner"?h.m`
        padding-${e}: calc(${f.r[n.depth??"section"]}px + ${i});
      `:h.m`
        padding-${e}: ${a};
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
`,k=h.U.div.withConfig({displayName:"CtaSection.styles__Content",componentId:"sc-53eb986f-4"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({theme:e})=>e.margin.default};
  text-align: center;
`,$=h.q`
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
    animation: ${$} ${520}ms cubic-bezier(0.2, 0.8, 0.2, 1) both;
    animation-delay: calc(var(--word, 0) * ${70}ms);
  }

  @media (prefers-reduced-motion: reduce) {
    &[data-state] [data-word] {
      animation: none;
      opacity: 1;
      clip-path: none;
    }
  }
`,j=h.U.span.withConfig({displayName:"CtaSection.styles__Word",componentId:"sc-53eb986f-6"})`
  display: inline-block;
  max-width: 100%;
`,M=h.U.div.withConfig({displayName:"CtaSection.styles__ButtonSlot",componentId:"sc-53eb986f-7"})`
  display: flex;
  justify-content: center;
  max-width: 100%;
  /* Die Kacheln des Buttons ragen eine Reihe plus Ring unter seinen Kasten —
     Luft bis zum Wabenrand des Bands */
  padding-bottom: ${({theme:e})=>e.margin.large};
`;e.s(["f",0,e=>{let{headline:h,buttonText:u,buttonHref:p,icon:m,className:g,dataTestId:b="cta-section",dataAttributes:$,edges:_,motion:N=!0,onFirstView:L,onFirstHover:I,onCtaClick:z}=e,R=(0,f.N)(_),S=(0,i.useRef)(null),H=(0,i.useRef)(null),F=(0,i.useRef)(null),T=(0,i.useMemo)(()=>h.trim().split(/\s+/).filter(Boolean),[h]),{columns:U}=(0,d.f)(S,24,44),{state:A,visible:W}=(0,l.f)(S,520+70*Math.max(0,T.length-1),.25),K=(0,c.f)("(pointer: fine)"),E=N&&K&&"static"!==A&&"pending"!==A,V=(0,i.useRef)(L);(0,i.useEffect)(()=>{V.current=L}),(0,i.useEffect)(()=>{W&&V.current?.()},[W]);let P=(0,i.useRef)(null),B=(0,i.useRef)(!1),O=(0,i.useCallback)(e=>{if(!E||"touch"===e.pointerType)return;P.current||(P.current={root:e.currentTarget.getBoundingClientRect()});let{root:t}=P.current;F.current?.move(e.clientX-t.left,e.clientY-t.top),B.current||(B.current=!0,I?.())},[E,I]),q=(0,i.useCallback)(()=>{P.current=null,F.current?.leave()},[]);(0,i.useEffect)(()=>{if(!E)return;let e=()=>{P.current=null};return window.addEventListener("scroll",e,{passive:!0}),()=>window.removeEventListener("scroll",e)},[E]);let Z=N&&"pending"!==A&&"idle"!==A?"active":"hidden";return(0,t.jsxs)(x,{ref:S,className:g,...$,"data-testid":b,"data-hex-stage":"true","data-columns":U,"data-state":N?A:"static","data-motion":N?"true":"false","data-pointer":E?"fine":"none",$edges:R?_:void 0,onPointerMove:O,onPointerLeave:q,children:[N&&(0,t.jsx)(o.K,{anchorRef:H,state:Z,duration:900,columns:U,tone:"light",dataTestId:`${b}-backdrop`}),N&&(0,t.jsx)(s.f,{ref:F,columns:U,radius:90,enabled:E,dataTestId:`${b}-hover-spot`}),R&&_&&(0,t.jsx)(n.f,{edges:_,zIndex:1,dataTestId:`${b}-edge`}),(0,t.jsx)(y,{$edges:R?_:void 0,children:(0,t.jsx)(v,{dataTestId:`${b}-row`,children:(0,t.jsx)(w,{xs:12,md:10,mdOffset:1,lg:8,lgOffset:2,dataTestId:`${b}-col`,children:(0,t.jsxs)(k,{ref:H,"data-testid":`${b}-content`,children:[m&&(0,t.jsx)(a.c,{name:m.name,tone:m.tone,size:"large",shape:"hex",dataTestId:`${b}-icon`}),(0,t.jsx)(C,{"data-testid":`${b}-headline`,"data-state":N?A:"static","data-words":T.length,children:T.map((e,a)=>(0,t.jsxs)(i.default.Fragment,{children:[a>0&&" ",(0,t.jsx)(j,{"data-word":a,style:{"--word":a},children:e})]},`${a}-${e}`))}),p&&(0,t.jsx)(M,{"data-testid":`${b}-button-slot`,children:(0,t.jsx)(r.f,{href:p,tone:"green",size:"large",onClick:z,dataTestId:`${b}-button`,children:u})})]})})})})]})}],422180),e.s([],177607)},808847,e=>{e.i(311046);var t=e.i(650529),i=e.i(355351);let a=(e,a,n,r=t.Q)=>{let o=new Map;if(0===e.length||0===n.length)return o;let s=(0,i.P)(e,a,n.length);for(let i of e){let e=s.get(i.key);if(void 0===e)continue;let a=(0,t.U)(i,e,n,r);a>.005&&o.set(i.key,Math.round(1e3*a)/1e3)}return o};e.s(["K",0,20,"v",0,(e,n,r,o,s,l=t.Q)=>{if(0===e.length||0===n.length)return[];let d=a(e,e=>n.some(t=>(0,i.D)(e,t)),r,l),c=e.filter(e=>d.has(e.key));if(0===c.length)return[];let f={left:Math.min(...c.map(e=>e.x)),top:Math.min(...c.map(e=>e.y)),right:Math.max(...c.map(e=>e.x+e.size)),bottom:Math.max(...c.map(e=>e.y+e.size))},h=.5*s;return c.map(e=>{let t=(e.cx-f.left+(f.bottom-e.cy))/(f.right-f.left+(f.bottom-f.top)||1);return{key:e.key,alpha:d.get(e.key)??0,delay:Math.round(o+Math.min(1,Math.max(0,t))*h)}})},"r",0,e=>Math.round(.5*e),"A",0,a,"a",0,(e,n,r,o,s,l=t.V,d=t.Q)=>{if(0===o.length)return[];let c=(0,i.T)(e,n,r);if(0===c.length)return[];let f=c[0].size*(l.length+2),h=Math.min(...o.map(e=>e.left))-f,u=Math.min(...o.map(e=>e.top))-f,p=Math.max(...o.map(e=>e.right))+f,m=Math.max(...o.map(e=>e.bottom))+f,g=c.filter(e=>e.x+e.size>=h&&e.x<=p&&e.y+e.size>=u&&e.y<=m),x=a(g,s,l,d);return g.flatMap(e=>{let t=x.get(e.key);return void 0===t?[]:[{...e,alpha:t}]})},"J",0,(e,i,n=t.V,r=t.Q)=>{if(0===i.length)return[];let o=new Set(i);return Array.from(a(e,e=>o.has(e.key),n,r),([e,t])=>({key:e,alpha:t}))},"L",0,(e,t,i=t)=>({left:e.left-t,top:e.top-i,right:e.right+t,bottom:e.bottom+i})])},352162,791777,515578,706994,e=>{var t=e.i(843476),i=e.i(271645);e.i(311046);var a=e.i(650529),n=e.i(355351),r=e.i(808847),o=e.i(997053),s=e.i(118410),l=e.i(547905);let d=o.q`
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
`,p="h1, h2, h3, h4, p, button, a, [data-backdrop-leaf]",m=(e,t)=>{let i=0,a=0,n=e;for(;n&&n!==t;)i+=n.offsetLeft,a+=n.offsetTop,n=n.offsetParent;return{left:i,top:a,right:i+e.offsetWidth,bottom:a+e.offsetHeight}},g="data-hex-face",x=(e,t,a,n=r.K)=>{let[o,s]=(0,i.useState)(null),[l,d]=(0,i.useState)([]);return(0,i.useEffect)(()=>{let i=e.current;if(!i)return;let a=i.offsetParent??i.parentElement,o=()=>{let e,o,l=i.offsetWidth,c=i.offsetHeight;if(l<=0||c<=0)return;s(e=>e&&e.width===l&&e.height===c?e:{width:l,height:c});let f=t.current,h=f?(e=Array.from(f.querySelectorAll(p)),o=Array.from(f.children),(e.length>0?e:o.length>0?o:[f]).filter(e=>e.offsetWidth>0&&e.offsetHeight>0).flatMap(e=>((e,t)=>{let i=m(e,t),a=(e=>{if(!e)return null;let t=e.split(",").map(Number);if(4!==t.length||t.some(e=>!Number.isFinite(e)))return null;let[i,a,n,r]=t;return n>i&&r>a?{left:i,top:a,right:n,bottom:r}:null})(e.getAttribute(g));if(a)return[{left:i.left+a.left,top:i.top+a.top,right:i.left+a.right,bottom:i.top+a.bottom}];let n=e.tagName.toLowerCase();if("button"===n||"a"===n||"u"<typeof document||!document.createRange)return[i];let r=e.getBoundingClientRect(),o=i.left-r.left,s=i.top-r.top,l=document.createRange();l.selectNodeContents(e);let d=Array.from(l.getClientRects?.()??[]).filter(e=>e.width>0&&e.height>0).map(e=>({left:e.left+o,top:e.top+s,right:e.right+o,bottom:e.bottom+s}));return d.length>0?d:[i]})(e,a)).map(e=>(0,r.L)(e,n,n/2))):[];d(e=>JSON.stringify(e)===JSON.stringify(h)?e:h)};if(o(),"u">typeof document&&document.fonts?.ready&&document.fonts.ready.then(o).catch(()=>void 0),"u"<typeof ResizeObserver)return;let l=new ResizeObserver(o);l.observe(i);let c=t.current;c&&(l.observe(c),c.querySelectorAll(p).forEach(e=>l.observe(e)));let f=c&&"u">typeof MutationObserver?new MutationObserver(o):null;return f?.observe(c,{subtree:!0,attributes:!0,attributeFilter:[g]}),()=>{l.disconnect(),f?.disconnect()}},[e,t,a,n]),{stage:o,rects:l}};e.s(["M",0,g,"K",0,({anchorRef:e,state:o,duration:s,enterDelay:l=.2*s,enterDuration:d=.8*s,leaveDelay:c=0,leaveDuration:u=.3*s,columns:p=12,padding:m=r.K,waveAlphas:g=a.V,tone:b="primary",dataTestId:y="hex-content-backdrop",className:v})=>{let w=(0,i.useRef)(null),{stage:k,rects:$}=x(w,e,o,m),C=(0,i.useMemo)(()=>{if("hidden"===o||!k||0===$.length)return[];let e=(0,n.T)(k.width,k.height,p),t=new Map(e.map(e=>[e.key,e]));return(0,r.v)(e,$,g,l,d).flatMap(e=>{let i=t.get(e.key);return i?[{...i,x:i.x-1,y:i.y-1,size:i.size+2,alpha:e.alpha,delay:e.delay}]:[]})},[o,k,$,p,g,l,d]);return(0,t.jsx)(f,{ref:w,className:v,"data-testid":y,"data-ready":C.length>0?"true":"false","data-tiles":C.length,"data-rects":$.length,"data-tone":b,$tone:b,"aria-hidden":"true",children:C.map(e=>(0,t.jsx)(h,{$state:o,$pop:(0,r.r)(d),$leaveDelay:Math.round(c),$leave:Math.round(u),$partial:(0,a.v)(e.alpha),$tone:b,style:{"--x":`${e.x}px`,"--y":`${e.y}px`,"--size":`${e.size}px`,"--alpha":String("light"===b?+(.14*e.alpha).toFixed(3):e.alpha),"--delay":`${e.delay}ms`,"--shimmer-period":`${(0,a.g)(e).period}ms`}},e.key))})},"f",0,(e,t)=>[e.left-t.left,e.top-t.top,e.right-t.left,e.bottom-t.top].map(e=>Math.round(e)).join(","),"e",0,m,"Z",0,x],791777);var b=a;e.s(["f",0,({width:e,height:a,columns:o,keys:s,steps:l=b.V,dataTestId:d="hex-halo-backdrop",className:c})=>{let h=(0,i.useMemo)(()=>{if(e<=0||a<=0||0===s.length)return[];let t=(0,n.T)(e,a,o),i=new Map(t.map(e=>[e.key,e]));return(0,r.J)(t,s,l).flatMap(({key:e,alpha:t})=>{let a=i.get(e);return a?[{...a,alpha:t}]:[]})},[e,a,o,s,l]);return(0,t.jsx)(f,{className:c,"data-testid":d,"data-tiles":h.length,"aria-hidden":"true",children:h.map(e=>{let{period:i,offset:a}=(0,b.g)(e);return(0,t.jsx)(u,{$partial:(0,b.v)(e.alpha),style:{"--x":`${e.x-1}px`,"--y":`${e.y-1}px`,"--size":`${e.size+2}px`,"--alpha":String(e.alpha),"--shimmer-period":`${i}ms`,"--shimmer-offset":`${a}ms`}},e.key)})})}],515578),e.s([],352162);var y=e.i(626645);e.s(["f",()=>y.$],706994)},390517,404857,49891,e=>{var t=e.i(843476),i=e.i(271645),a=e.i(499911);e.i(710788);var n=e.i(599858);e.i(352162);var r=e.i(791777),o=e.i(808847);e.i(311046);var s=e.i(355351);let l=e=>{let[t,a]=(0,i.useState)(null);return(0,i.useEffect)(()=>{let t=e.current;if(!t)return;let i=t.closest("[data-hex-stage]")??t.offsetParent;if(!i)return;let n=()=>{let e=i.offsetWidth,n=i.offsetHeight;if(e<=0||n<=0||t.offsetWidth<=0)return;let o=Number(i.getAttribute("data-columns")),l=o>0?o:(0,s.L)(e),d=(0,r.e)(t,i);a(t=>t&&t.width===e&&t.height===n&&t.columns===l&&JSON.stringify(t.rect)===JSON.stringify(d)?t:{width:e,height:n,columns:l,rect:d})};if(n(),"u">typeof document&&document.fonts?.ready&&document.fonts.ready.then(n).catch(()=>void 0),"u"<typeof ResizeObserver)return;let o=new ResizeObserver(n);o.observe(i),o.observe(t);let l="u"<typeof MutationObserver?null:new MutationObserver(n);return l?.observe(i,{attributes:!0,attributeFilter:["data-columns"]}),()=>{o.disconnect(),l?.disconnect()}},[e]),t};e.s(["f",0,l],404857);var d=e.i(997053);e.i(315481);var c=e.i(10003),f=e.i(706994);let h=d.m`
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
`,v=[1,.35];e.s(["f",0,({children:e,href:d,onClick:c,disabled:f,steps:h=v,onCellsChange:u,tone:p="light",size:m="default",className:w,dataTestId:k="hex-cta"})=>{let $=(0,i.useRef)(null),C=l($),j=(0,i.useMemo)(()=>C?(e=>{let{width:t,height:i,columns:a,rect:n}=e,r=(0,s.T)(t,i,a);if(0===r.length)return null;let o=r[0].size,l=(n.left+n.right)/2,d=(n.top+n.bottom)/2,c=r.reduce((e,t)=>Math.abs(t.cy-d)<Math.abs(e.cy-d)?t:e),f=(n.right-n.left)/2,h=(e,t)=>Math.abs(e.cx-l)<=t,u=r.filter(e=>e.row===c.row?h(e,f+.5*o):1===Math.abs(e.row-c.row)&&h(e,f));if(0===u.length)return null;let p=Math.min(...u.map(e=>e.x)),m=Math.max(...u.map(e=>e.x+e.size)),g=Math.min(...u.map(e=>e.y)),x=Math.max(...u.map(e=>e.y+e.size));return{seeds:new Set(u.map(e=>e.key)),dx:Math.round((p+m)/2-l),dy:Math.round(c.cy-d),face:{left:p,top:g,right:m,bottom:x}}})(C):null,[C]),M=(0,i.useMemo)(()=>C&&j?(0,o.a)(C.width,C.height,C.columns,[C.rect],e=>j.seeds.has(e.key),h):[],[C,j,h]),_=!!(C&&j&&M.length>0),N=(0,i.useRef)(u);(0,i.useEffect)(()=>{N.current=u}),(0,i.useEffect)(()=>{j&&N.current?.([...j.seeds])},[j]);let L=C&&j&&_?(0,r.f)(j.face,C.rect):void 0,I={[r.M]:L},z=(0,t.jsxs)(t.Fragment,{children:[C&&_&&(0,t.jsx)(y,{"aria-hidden":"true",focusable:"false","data-hex-cta-tiles":"true","data-testid":`${k}-tiles`,"data-rows":3,style:{"--edge-x":`${-C.rect.left}px`,"--edge-y":`${-C.rect.top}px`,"--edge-w":`${C.width}px`,"--edge-h":`${C.height}px`},children:(0,t.jsx)(n.f,{tiles:M,color:"onAccent"})}),(0,t.jsxs)(b,{style:{"--dx":`${j?.dx??0}px`,"--dy":`${j?.dy??0}px`},children:[(0,t.jsx)("span",{children:e}),(0,t.jsx)(a.f,{className:"hex-cta-icon"})]})]});return d?(0,t.jsx)(g,{ref:$,href:d,onClick:c,className:w,$tone:p,$size:m,"data-tone":p,"data-size":m,"data-testid":k,"data-tiles":M.length,"data-ready":_?"true":"false",...I,children:z}):(0,t.jsx)(x,{ref:$,type:"button",onClick:c,disabled:f,className:w,$tone:p,$size:m,"data-tone":p,"data-size":m,"data-testid":k,"data-tiles":M.length,"data-ready":_?"true":"false",...I,children:z})}],49891),e.s([],390517)},307839,585584,e=>{var t=e.i(843476),i=e.i(271645),a=e.i(355351),n=e.i(997053),r=e.i(118410),o=e.i(547905);let s=n.U.div.withConfig({displayName:"HexHoverSpot.styles__Root",componentId:"sc-9588288a-0"})`
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  /* Layout/Style/Paint bleiben in dieser Ebene — 1000+ Kacheln invalidieren nicht die Seite */
  contain: layout style paint;

  @media (hover: none), (prefers-reduced-motion: reduce) {
    display: none;
  }
`,l=n.q`
  from { opacity: 0; transform: scale(0) rotate(-14deg); }
  to { opacity: var(--lit, 0.6); transform: scale(1) rotate(0deg); }
`,d=n.q`
  from { opacity: var(--lit, 0.6); transform: scale(1) rotate(0deg); }
  to { opacity: 0; transform: scale(0) rotate(-14deg); }
`,c=n.U.div.withConfig({displayName:"HexHoverSpot.styles__Tile",componentId:"sc-9588288a-1"})`
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
`,f=(0,i.forwardRef)(function({columns:e=12,radius:n=70,enabled:r=!0,accentKeys:o,reveal:l,dataTestId:d="hex-hover-spot",className:f},h){let u=(0,i.useRef)(null),[p,m]=(0,i.useState)(null),g=(0,i.useMemo)(()=>p?(0,a.T)(p.width,p.height,e):[],[p,e]),x=(0,i.useRef)(g);x.current=g;let b=(0,i.useRef)(new Set),y=(0,i.useRef)(null),v=(0,i.useRef)(null),w=(0,i.useRef)(new Map);(0,i.useEffect)(()=>{let e=u.current;if(!e)return;let t=()=>{let t=e.getBoundingClientRect();t.width>0&&t.height>0&&m({width:t.width,height:t.height})};if(t(),"u"<typeof ResizeObserver)return;let i=new ResizeObserver(t);return i.observe(e),()=>i.disconnect()},[]);let k=e=>w.current.get(e)??null,$=()=>{for(let e of b.current){let t=k(e);t&&(t.dataset.lit="false",t.dataset.wasLit="true")}b.current.clear(),u.current?.setAttribute("data-active","false")},C=()=>{y.current=null;let e=v.current;if(!e)return;let t=new Set;for(let i of x.current){if(Math.abs(i.cx-e.x)>n||Math.abs(i.cy-e.y)>n)continue;let r=(0,a.a)(i,e.x,e.y,n);if(r<=0)continue;t.add(i.key);let o=k(i.key);o&&(o.style.setProperty("--lit",(.25+.75*r).toFixed(2)),"true"!==o.dataset.lit&&(o.dataset.lit="true"))}for(let e of b.current)if(!t.has(e)){let t=k(e);t&&(t.dataset.lit="false",t.dataset.wasLit="true")}b.current=t,u.current?.setAttribute("data-active",t.size>0?"true":"false")};return(0,i.useImperativeHandle)(h,()=>({move:(e,t)=>{r&&(v.current={x:e,y:t},"function"!=typeof requestAnimationFrame?C():null===y.current&&(y.current=requestAnimationFrame(C)))},leave:()=>{v.current=null,$()}}),[r,n]),(0,i.useEffect)(()=>{r||(v.current=null,$())},[r]),(0,i.useEffect)(()=>()=>{null!==y.current&&"function"==typeof cancelAnimationFrame&&cancelAnimationFrame(y.current)},[]),(0,t.jsx)(s,{ref:u,className:f,"data-testid":d,"data-active":"false","data-ready":p?"true":"false","data-tiles":g.length,"data-reveal":l?"true":"false","aria-hidden":"true",children:g.map(e=>{let i;return(0,t.jsx)(c,{ref:(i=e.key,e=>{e?w.current.set(i,e):w.current.delete(i)}),"data-key":e.key,"data-lit":"false","data-accent":o?.includes(e.key)?"true":void 0,$reveal:l,style:{"--x":`${e.x}px`,"--y":`${e.y}px`,"--size":`${e.size}px`}},e.key)})})});e.s(["f",0,f],585584),e.s([],307839)},538915,226129,600639,546843,e=>{var t=e.i(843476),i=e.i(997053);e.i(315481);var a=e.i(10003),n=e.i(547905),r=e.i(136717);let o=e=>(0,r.L)(e.palette.footer.backgroundEnd),s=e=>(0,r.p)(e.palette.footer.backgroundEnd),l=(e,t)=>s(e)?`rgba(255, 255, 255, ${t})`:`rgba(33, 37, 41, ${t})`,d=i.U.footer.withConfig({displayName:"Footer.styles__Root",componentId:"sc-809a1aba-0"})`
  width: 100%;
  /* #2164: Verlauf aus dem Theme, in beiden Modi dunkel; Schrift aus dem Kontrast (footerColors) */
  background: linear-gradient(
    to top,
    ${({theme:e})=>e.palette.footer.background},
    ${({theme:e})=>e.palette.footer.backgroundEnd}
  );
  color: ${({theme:e})=>o(e)};
  padding: 1rem 0;
  flex-shrink: 0;
  z-index: 10;
  margin-top: auto;
  /* Wabenrand statt runder Ecken (#1188); Logo und Copyright bleiben aus der Randzone */
  ${({$edges:e})=>(0,n.n)(e)}
  ${({$edges:e})=>(0,n.o)("top","1rem",e)}

  /* Textelemente erben die Fußschrift — Doppelklasse statt !important, schlägt globale Regeln */
  && h1,
  && h2,
  && h3,
  && h4,
  && h5,
  && p,
  && span {
    color: ${({theme:e})=>o(e)};
  }
`,c=i.U.div.withConfig({displayName:"Footer.styles__BottomBar",componentId:"sc-809a1aba-1"})`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  gap: 16px;
  margin-top: 32px;
  padding: 32px 0 ${e=>e.theme.margin.small};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    /* #2164: dekorativ (footerRule), in der Schriftfarbe */
    background: linear-gradient(
      to right,
      ${({theme:e})=>l(e,0)},
      ${({theme:e})=>l(e,.22)} 50%,
      ${({theme:e})=>l(e,0)}
    );
  }

  @media only screen and (max-width: 639px) {
    flex-direction: column-reverse;
    align-items: flex-start;
  }
`,f=i.U.span.withConfig({displayName:"Footer.styles__Copyright",componentId:"sc-809a1aba-2"})`
  white-space: nowrap;
`,h=i.U.nav.withConfig({displayName:"Footer.styles__NavMeta",componentId:"sc-809a1aba-3"})`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: center;
  /* #1212: gap-6 wie auf plastship.com, statt margin-left — sonst rückt schmal der erste Link ein */
  gap: 24px;
  background: none;

  /* #2164: Fußschrift auch bei Hover/Fokus (Doppelklasse schlägt globales a:hover) */
  && a,
  && a:hover,
  && a:focus-visible {
    color: ${({theme:e})=>o(e)};
  }

  && a {
    text-decoration: none;
  }

  && a:hover,
  && a:focus-visible {
    text-decoration: underline;
  }

  @media only screen and (max-width: 639px) {
    justify-content: flex-start;
  }
`,u=i.U.button.withConfig({displayName:"Footer.styles__FooterMetaButton",componentId:"sc-809a1aba-4"})`
  padding: 0;
  border: 0;
  background: none;
  font: inherit;
  cursor: pointer;
  color: ${({theme:e})=>o(e)};
  text-decoration: none;

  &:hover,
  &:focus-visible {
    text-decoration: underline;
  }
`,p=(0,i.U)(a.NavLink).withConfig({displayName:"Footer.styles__FooterLink",componentId:"sc-809a1aba-5"})`
  color: inherit;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`,m=(0,i.U)(a.NavLink).withConfig({displayName:"Footer.styles__LogoLink",componentId:"sc-809a1aba-6"})`
  display: inline-block;
  text-decoration: none;
`,g=i.U.div.withConfig({displayName:"Footer.styles__FooterSection",componentId:"sc-809a1aba-7"})`
  margin-bottom: 20px;
`,x=i.U.ul.withConfig({displayName:"Footer.styles__ContactList",componentId:"sc-809a1aba-8"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 0;
  padding: 0;
  list-style: none;
`,b=i.U.li.withConfig({displayName:"Footer.styles__ContactItem",componentId:"sc-809a1aba-9"})`
  && > a {
    display: inline-flex;
    align-items: center;
    gap: ${({theme:e})=>e.margin.small};
    font-size: 1rem;
    line-height: 1.5;
    text-decoration: none;
  }

  && > a svg {
    flex-shrink: 0;
    width: 20px;
    height: 20px;
  }

  /* Doppelklasse: globale a- und a:hover-Regeln wiegen mehr als eine Klasse */
  && > a,
  && > a:hover,
  && > a:focus-visible {
    color: ${({theme:e})=>o(e)};
  }

  && > a:hover {
    text-decoration: underline;
  }
`,y=i.U.h2.withConfig({displayName:"Footer.styles__FooterSectionTitle",componentId:"sc-809a1aba-10"})`
  && {
    color: ${({theme:e})=>o(e)};
  }
  font-size: 1rem;
  font-weight: 700;
  margin: 0 0 16px;
  text-transform: uppercase;
`,v=i.U.nav.withConfig({displayName:"Footer.styles__FooterLinks",componentId:"sc-809a1aba-11"})`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  background: none;

  && a {
    text-decoration: none;
    font-size: 1rem;
    line-height: 1.5;
    transition: color 0.2s ease;
  }

  /* #2164: Fußschrift auch bei Hover/Fokus (Doppelklasse schlägt globales a:hover) */
  && a,
  && a:hover,
  && a:focus-visible {
    color: ${({theme:e})=>o(e)};
  }

  && a:hover,
  && a:focus-visible {
    text-decoration: underline;
  }
`;var w=e.i(424734),k=e.i(650868),$=e.i(224906);e.i(821194);var C=e.i(99222),j=e.i(722216),M=e.i(507924),_=e.i(284248),N=e.i(891567);let L=[{titleKey:"footer.sections.links",links:[{href:"/team",labelKey:"footer.team"},{href:"/faq",labelKey:"footer.faq"},{href:"/about",labelKey:"footer.about"},{href:"/news",labelKey:"footer.latest"},{href:"/contact-us",labelKey:"footer.contactForm"},{href:"/services",labelKey:"footer.services"}]}],I={titleKey:"footer.contact",email:N._.info,phone:N.h.central,address:N.Y},z=[{href:"/agb",labelKey:"footer.terms"},{href:"/imprint",labelKey:"footer.imprint"},{href:"/privacy",labelKey:"footer.privacy"},{href:"/email-disclaimer",labelKey:"footer.emailDisclaimer"},{href:"/accessibility",labelKey:"footer.accessibility"}];e.i(411206);var R=e.i(173972),S=e.i(317573),H=e.i(757658),F=e.i(874142),T=e.i(813267);e.i(710788);var U=e.i(363451);e.i(311046);var A=e.i(499881);let W={top:{placement:"inner",color:"white"}};e.s(["f",0,e=>{let a=e.edges??W,{tr:n}=(0,C.f)(),r=(0,i.i)(),{footer:o}=(0,j.f)(),l=(0,_.C)();return(0,t.jsxs)(d,{className:e.className,"data-testid":"footer-root",$edges:a,children:[(0,A.N)(a)&&(0,t.jsx)(U.f,{edges:a,dataTestId:"footer-root-edge"}),(0,t.jsxs)(k.f,{children:[(0,t.jsx)($.f,{xs:12,md:3,lg:2,children:(0,t.jsx)(m,{href:"/","aria-label":n("footer.logo.ariaLabel",{defaultValue:"plastship – zur Startseite"}),"data-testid":"footer-logo-link",children:(0,t.jsx)(w.f,{inverted:!r?.palette?.footer||s(r),monochrome:!0})})}),(0,t.jsx)(t.Fragment,{children:o.length>0?o.map((e,i)=>(0,t.jsx)($.f,{xs:12,sm:6,md:4,children:(0,t.jsxs)(g,{"data-testid":`footer-cms-section-${i}`,"data-count":e.children?.length??0,children:[(0,t.jsx)(y,{"data-testid":`footer-cms-section-${i}-title`,children:(0,M.u)(e.label,l)}),(0,t.jsx)(v,{children:(e.children??[]).map((e,a)=>(0,t.jsx)(p,{href:e.href,"data-testid":`footer-cms-section-${i}-link-${a}`,children:(0,M.u)(e.label,l)},`${e.href}-${a}`))})]})},`${e.href}-${i}`)):L.map((e,i)=>(0,t.jsx)($.f,{xs:12,sm:6,md:4,children:(0,t.jsxs)(g,{"data-testid":`footer-section-${i}`,"data-count":e.links.length,children:[(0,t.jsx)(y,{"data-testid":`footer-section-${i}-title`,children:n(e.titleKey)}),(0,t.jsx)(v,{children:e.links.map(e=>(0,t.jsx)(p,{href:e.href,"data-testid":`footer-link-${e.href.replace(/^\//,"").replace(/\//g,"-")}`,children:n(e.labelKey)},e.href))})]})},e.titleKey))}),(0,t.jsx)($.f,{xs:12,sm:6,md:5,lg:4,children:(0,t.jsxs)(g,{"data-testid":"footer-contact",children:[(0,t.jsx)(y,{"data-testid":"footer-contact-title",children:n(I.titleKey)}),(0,t.jsxs)(x,{children:[(0,t.jsx)(b,{children:(0,t.jsx)(R.f,{kind:"mail",value:I.email,place:"footer",icon:(0,t.jsx)(S.f,{}),dataTestId:"footer-contact-email"})}),(0,t.jsx)(b,{children:(0,t.jsx)(R.f,{kind:"tel",value:I.phone.e164,place:"footer",icon:(0,t.jsx)(F.f,{}),dataTestId:"footer-contact-phone",children:I.phone.international})}),(0,t.jsx)(b,{children:(0,t.jsx)(R.f,{kind:"map",value:`${I.address.name}, ${(0,N.W)(I.address)}`,geo:I.address.geo,place:"footer",icon:(0,t.jsx)(T.f,{}),dataTestId:"footer-contact-address",children:(0,N.W)(I.address)})})]})]})})]}),(0,t.jsx)(k.f,{children:(0,t.jsx)($.f,{xs:12,children:(0,t.jsxs)(c,{children:[(0,t.jsx)(f,{"data-testid":"footer-copyright",children:"© plastship GmbH"}),(0,t.jsxs)(h,{"data-testid":"footer-meta","data-count":z.length,children:[z.map(e=>(0,t.jsx)(p,{href:e.href,"data-testid":`footer-meta-${e.href.replace(/^\//,"")}`,children:n(e.labelKey)},e.href)),(0,t.jsx)(u,{type:"button",onClick:H.e,"data-testid":"footer-cookie-settings",children:n("footer.cookieSettings",{defaultValue:"Cookie-Einstellungen"})})]})]})})})]})}],538915);var K=e.i(271645),E=e.i(247902),V=e.i(825969),P=e.i(499911);e.i(657782);var B=e.i(229132);e.i(730026);var O=e.i(262076),q=e.i(184914),Z=e.i(157067),D=e.i(885895),Y=e.i(693830),J=e.i(949108),Q=e.i(49958),G=e.i(726029);let X=(0,K.lazy)(()=>e.A(767483));e.s(["f",0,()=>{let e=(0,J.f)(),{status:i}=(0,Q.useSession)(),a=(0,Y.g)(),{isLeftSidebarOpen:n,closeLeftSidebar:r}=(0,Z.i)(),{language:o}=(0,D.N)(),{tr:s}=(0,C.f)(o);return e?(0,t.jsx)(q.f,{isOpen:n,onClose:r,mode:"guest",maxWidthPx:G.F-1,barHeightPx:G.W,footerAction:(0,t.jsx)(E.f,{href:"/login",modifier:V.j.PRIMARY,icon:(0,t.jsx)(P.f,{}),iconAlign:V.W.RIGHT,dataTestId:"mobile-menu-item-login",children:s("header.login.label",{defaultValue:"Login"})}),children:(0,t.jsx)(O.f,{"data-testid":"mobile-menu-section-public",children:(0,t.jsx)(B.f,{variant:"stacked",dataTestId:"mobile-menu-item-public"})})}):"authenticated"===i&&a?(0,t.jsx)(K.Suspense,{fallback:null,children:(0,t.jsx)(X,{barHeightPx:G.W})}):null}],226129),e.s([],600639),e.s(["p",0,{top:{placement:"inner",color:"white",depth:"section"}},"q",0,"navy","e",0,function(e){return e&&"white"!==e?{edges:{top:{placement:"inner",color:e}},flush:!0}:{edges:void 0,flush:!1}}],546843)},371561,e=>{var t=e.i(271645);let i=["slow-2g","2g"];e.s(["f",0,()=>{let[e,a]=(0,t.useState)(!1);return(0,t.useEffect)(()=>{let e="u"<typeof navigator?void 0:navigator.connection,t=()=>a(!!e?.saveData||i.includes(e?.effectiveType??""));return t(),e?.addEventListener?.("change",t),()=>e?.removeEventListener?.("change",t)},[]),e}])},816017,217997,e=>{var t=e.i(843476);e.i(507924);var i=e.i(891567);i.Y.name,i.h.central.international,i._.info,i.Y;let a=String.fromCharCode(8232),n=String.fromCharCode(8233);e.s(["f",0,function({data:e}){return(0,t.jsx)("script",{type:"application/ld+json","data-testid":"structured-data",dangerouslySetInnerHTML:{__html:JSON.stringify(e).replace(/</g,"\\u003c").replace(/>/g,"\\u003e").replace(/&/g,"\\u0026").split(a).join("\\u2028").split(n).join("\\u2029")}})}],217997),e.s([],816017)},647835,764576,e=>{var t=e.i(271645),i=e.i(587076),a=e.i(394497),n=e.i(371561);function r({mounted:e,reducedMotion:t,saveData:i,seen:a,finished:n}){return e?t||i?"static":a?n?"ready":"running":"idle":"pending"}function o(e,t=0){let i=Math.max(0,Math.min(t,(e.count??1)-1));return{delay:e.start+i*(e.stagger??0),duration:e.duration}}e.s(["Q",0,e=>"ready"===e,"L",0,function(e){let t=new Set;for(let i of e){if(t.has(i.id))throw Error(`Phase "${i.id}" doppelt`);for(let e of(t.add(i.id),[i.start,i.duration,i.stagger??0,i.count??1]))if(!Number.isFinite(e)||e<0)throw Error(`Phase "${i.id}": ung\xfcltige Zeit ${e}`)}},"E",0,function(e){return e.reduce((e,t)=>Math.max(e,function(e){let{delay:t,duration:i}=o(e,(e.count??1)-1);return t+i}(t)),0)},"G",0,function(e,t){let i=e.find(e=>e.id===t);if(!i)throw Error(`Phase "${t}" fehlt`);return i},"g",0,o,"n",0,r],764576),e.s(["f",0,function(e,o,s=.35){let l=(0,a.f)(e,s),d=(0,i.f)(),c=(0,n.f)(),[f,h]=(0,t.useState)(!1),[u,p]=(0,t.useState)(!1),[m,g]=(0,t.useState)(!1);(0,t.useEffect)(()=>h(!0),[]),(0,t.useEffect)(()=>{l&&p(!0)},[l]);let x=r({mounted:f,reducedMotion:d,saveData:c,seen:u,finished:m});return(0,t.useEffect)(()=>{if("running"!==x)return;let e=window.setTimeout(()=>g(!0),o);return()=>window.clearTimeout(e)},[x,o]),{state:x,visible:l}}],647835)},587076,e=>{var t=e.i(271645);e.s(["f",0,()=>{let[e,i]=(0,t.useState)(!1);return(0,t.useEffect)(()=>{if("function"!=typeof window.matchMedia)return;let e=window.matchMedia("(prefers-reduced-motion: reduce)"),t=()=>i(e.matches);return t(),e.addEventListener("change",t),()=>e.removeEventListener("change",t)},[]),e}])},394497,e=>{var t=e.i(271645);e.s(["f",0,(e,i=.2,a)=>{let[n,r]=(0,t.useState)(!1);return(0,t.useEffect)(()=>{let t=e.current;if("u"<typeof IntersectionObserver)return void r(!0);if(!t)return;let n=new IntersectionObserver(([e])=>r(e.isIntersecting),{threshold:i,rootMargin:a});return n.observe(t),()=>n.disconnect()},[e,i,a]),n}])}])})();