(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,429307,159255,e=>{var t=e.i(843476),i=e.i(997053);e.i(315481);var n=e.i(10003),r=e.i(726029),a=e.i(437992);let o=(0,i.U)(n.NavLink).withConfig({displayName:"ArrowLink__Root",componentId:"sc-c779a4e5-0"})`
  ${r.e}
  ${({$stretched:e})=>e&&r.i}
`,s=()=>(0,t.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":"true",children:(0,t.jsx)("path",{d:"M8.9 3.3a.9.9 0 0 1 1.3 0l4.1 4.1a.9.9 0 0 1 0 1.2l-4.1 4.1a.9.9 0 1 1-1.3-1.3l2.6-2.5H2.4a.9.9 0 1 1 0-1.8h9.1L8.9 4.6a.9.9 0 0 1 0-1.3Z"})}),l=i.U.span.withConfig({displayName:"ArrowLink__Nowrap",componentId:"sc-c779a4e5-1"})`
  white-space: nowrap;
`;e.s(["f",0,function({href:e,children:i,dataTestId:n,target:r,stretched:d=!1}){let c="string"==typeof i?i:null,u=c?c.lastIndexOf(" "):-1;return(0,t.jsx)(o,{href:e,"data-testid":n,"data-stretched":d?"true":void 0,$stretched:d,...(0,a.a)(e,{target:r}),children:c&&u>0?(0,t.jsxs)(t.Fragment,{children:[c.slice(0,u+1),(0,t.jsxs)(l,{children:[c.slice(u+1),(0,t.jsx)(s,{})]})]}):(0,t.jsxs)(t.Fragment,{children:[i,(0,t.jsx)(s,{})]})})}],159255),e.s([],429307)},650868,224906,e=>{let t=e.i(152186).f;e.s(["f",0,t],650868);let i=e.i(856337).f;e.s(["f",0,i],224906)},945304,997917,977194,e=>{var t=e.i(843476),i=e.i(464862),n=e.i(696986);let r=e.i(372480).f;var a=e.i(816570),o=e.i(799516),s=e.i(581717),l=e.i(488661),d=e.i(898560),c=e.i(877194),u=e.i(193732),f=e.i(122884),h=e.i(868169),p=e.i(920592),m=e.i(471480);let g=e.i(841712).f;var x=e.i(90792),y=e.i(495835),b=e.i(108939),v=e.i(351357),w=e.i(861527),k=e.i(313922),$=e.i(997053),C=e.i(547905);let j={small:{pad:8,ring:7,icon:16},large:{pad:16,ring:14,icon:32}},M=$.m`
  & > :not([data-chip-layer]) {
    position: relative;
  }
`,L=$.U.span.withConfig({displayName:"IconChip.styles__Root",componentId:"sc-3746e1bb-0"})`
  ${({theme:e,$tone:t,$size:i,$shape:n})=>{let r,a={green:e.palette.site.green,blue:e.palette.site.blue,red:e.palette.site.red}[t],o=j[i];return $.m`
      position: relative;
      left: ${o.ring}px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: ${o.pad}px;
      color: ${a};
      --chip-ring: color-mix(in srgb, ${a} 10%, transparent);
      --chip-face: color-mix(in srgb, ${a} 20%, transparent);
      ${"hex"===n?M:(r=o.ring,$.m`
  border-radius: 9999px;
  background: color-mix(in srgb, ${a} 20%, transparent);
  box-shadow: 0 0 0 var(--chip-ring-width, ${r}px) var(--chip-ring);
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
`,z=$.U.span.withConfig({displayName:"IconChip.styles__Face",componentId:"sc-3746e1bb-2"})`
  position: absolute;
  inset: 0;
  ${C.p}
  background: var(--chip-face);
`;e.s(["r",0,z,"N",0,j,"T",0,N,"F",0,L],997917);let I={plus:i.f,search:n.f,send:r,award:a.f,analysis:o.f,recycle:s.f,warning:l.f,check:d.f,chart:c.f,list:u.f,network:({color:e="currentColor",size:i=24,className:n})=>(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",className:n,children:[(0,t.jsx)("title",{children:"network-connections"}),(0,t.jsxs)("g",{fill:e,strokeLinecap:"square",strokeLinejoin:"miter",strokeMiterlimit:"10",children:[(0,t.jsx)("path",{d:"M10.5 16.5L20.5 10",stroke:e,strokeWidth:"2",fill:"none",strokeLinecap:"butt"}),(0,t.jsx)("path",{d:"M18.5 18L20.5 10",stroke:e,strokeWidth:"2",fill:"none",strokeLinecap:"butt"}),(0,t.jsx)("path",{d:"M4.5 11.5L19 8",stroke:e,strokeWidth:"2",fill:"none",strokeLinecap:"butt"}),(0,t.jsx)("path",{d:"M12 4.5L19 7",stroke:e,strokeWidth:"2",fill:"none",strokeLinecap:"butt"}),(0,t.jsx)("path",{d:"M4.5 10.5L8.5 5",stroke:e,strokeWidth:"2",fill:"none",strokeLinecap:"butt"}),(0,t.jsx)("path",{d:"M3 14C4.10457 14 5 13.1046 5 12C5 10.8954 4.10457 10 3 10C1.89543 10 1 10.8954 1 12C1 13.1046 1.89543 14 3 14Z",stroke:e,strokeWidth:"2",fill:"none"}),(0,t.jsx)("path",{d:"M10 6C11.1046 6 12 5.10457 12 4C12 2.89543 11.1046 2 10 2C8.89543 2 8 2.89543 8 4C8 5.10457 8.89543 6 10 6Z",stroke:e,strokeWidth:"2",fill:"none"}),(0,t.jsx)("path",{d:"M21 10C22.1046 10 23 9.10457 23 8C23 6.89543 22.1046 6 21 6C19.8954 6 19 6.89543 19 8C19 9.10457 19.8954 10 21 10Z",stroke:e,strokeWidth:"2",fill:"none"}),(0,t.jsx)("path",{d:"M9 20C10.1046 20 11 19.1046 11 18C11 16.8954 10.1046 16 9 16C7.89543 16 7 16.8954 7 18C7 19.1046 7.89543 20 9 20Z",stroke:e,strokeWidth:"2",fill:"none"}),(0,t.jsx)("path",{d:"M18 22C19.1046 22 20 21.1046 20 20C20 18.8954 19.1046 18 18 18C16.8954 18 16 18.8954 16 20C16 21.1046 16.8954 22 18 22Z",stroke:e,strokeWidth:"2",fill:"none"})]})]}),shield:f.f,users:h.f,contact:p.f,document:m.f,transport:g,star:x.f,sparkle:y.f,settings:b.f,database:v.f,verification:w.f,connection:k.f};function R({tone:e="green",size:i="small",shape:n="round",icon:r,dataTestId:a,children:o}){return(0,t.jsxs)(L,{$tone:e,$size:i,$shape:n,"aria-hidden":"true","data-testid":a,"data-icon":r,"data-tone":e,"data-size":i,"data-shape":n,children:["hex"===n&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(N,{$size:i,"data-chip-layer":"ring","data-testid":"chip-ring"}),(0,t.jsx)(z,{"data-chip-layer":"face","data-testid":"chip-face"})]}),o]})}e.s(["S",0,I,"c",0,function({name:e,tone:i="green",size:n="small",shape:r="round",dataTestId:a}){let o=I[e];return o?(0,t.jsx)(R,{tone:i,size:n,shape:r,icon:e,dataTestId:a,children:(0,t.jsx)(o,{})}):null},"J",0,R],977194),e.s([],945304)},816570,e=>{var t=e.i(843476),i=e.i(997053);let n=i.U.svg.withConfig({displayName:"IconAward.styles__Root",componentId:"sc-f7b63084-0"})``;e.s(["f",0,e=>(0,t.jsxs)(n,{className:e.className,"data-testid":"icon-award-root",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[(0,t.jsx)("title",{children:"award-plaque"}),(0,t.jsxs)("g",{fill:"currentColor",strokeLinecap:"square",strokeLinejoin:"miter",strokeMiterlimit:"10",children:[(0,t.jsx)("path",{d:"M22 7V4H2V20H12",stroke:"currentColor",strokeWidth:"2",fill:"none"}),(0,t.jsx)("path",{d:"M21 18.5L22 23L19 23L16 23L17 18.5",stroke:"currentColor",strokeWidth:"2",fill:"none",strokeLinecap:"butt"}),(0,t.jsx)("path",{d:"M19 19C21.2091 19 23 17.2091 23 15C23 12.7909 21.2091 11 19 11C16.7909 11 15 12.7909 15 15C15 17.2091 16.7909 19 19 19Z",stroke:"currentColor",strokeWidth:"2",fill:"none"}),(0,t.jsx)("path",{d:"M12 9L7 9",stroke:"currentColor",strokeWidth:"2",fill:"none"}),(0,t.jsx)("path",{d:"M9 13L7 13",stroke:"currentColor",strokeWidth:"2",fill:"none"})]})]})],816570)},841712,e=>{var t=e.i(843476),i=e.i(997053);let n=i.U.svg.withConfig({displayName:"IconBus.styles__Root",componentId:"sc-efb1bf1b-0"})``;e.s(["f",0,e=>(0,t.jsxs)(n,{className:e.className,"data-testid":"icon-bus-root",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,t.jsx)("title",{children:"bus-side"}),(0,t.jsxs)("g",{fill:"currentColor",strokeLinecap:"square",strokeLinejoin:"miter",strokeMiterlimit:"10",children:[(0,t.jsx)("path",{d:"M10.5 9V3",stroke:"currentColor",strokeWidth:"2",fill:"none",strokeLinecap:"butt"}),(0,t.jsx)("path",{d:"M22 7V8H24V7H22ZM18.7827 6H22V4H18.7827V6ZM22 6V7H24V6H22ZM18.7827 6H19.2827V4H18.7827V6ZM22 6H24C24 4.89543 23.1046 4 22 4V6Z",fill:"currentColor",stroke:"none"}),(0,t.jsx)("path",{d:"M3 19V14H7V19",stroke:"currentColor",strokeWidth:"2",fill:"none",strokeLinecap:"butt"}),(0,t.jsx)("path",{d:"M3 9H11.0809L14 12H20.5H20",stroke:"currentColor",strokeWidth:"2",fill:"none"}),(0,t.jsx)("path",{d:"M3 19H11H10",stroke:"currentColor",strokeWidth:"2",fill:"none"}),(0,t.jsx)("path",{d:"M3 3H14.7686C16.9753 3 18.9128 4.46773 19.5103 6.59207V6.59207C20.3297 9.50573 20.6051 12.5455 20.3226 15.559L20.085 18.0933C20.0368 18.6072 19.6055 19 19.0894 19H17H17.5",stroke:"currentColor",strokeWidth:"2",fill:"none"}),(0,t.jsx)("path",{d:"M14 22C15.6569 22 17 20.6569 17 19C17 17.3431 15.6569 16 14 16C12.3431 16 11 17.3431 11 19C11 20.6569 12.3431 22 14 22Z",stroke:"currentColor",strokeWidth:"2",fill:"none"})]})]})],841712)},898560,e=>{let t=e.i(201927).f;e.s(["f",0,t])},187824,e=>{var t=e.i(843476),i=e.i(997053);let n=i.U.svg.withConfig({displayName:"IconList.styles__Root",componentId:"sc-ed522fb6-0"})``;e.s(["f",0,e=>(0,t.jsxs)(n,{className:e.className,"data-testid":"icon-list-root",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[(0,t.jsx)("title",{children:"bullet-list"}),(0,t.jsxs)("g",{fill:"currentColor",strokeLinejoin:"miter",strokeLinecap:"butt",children:[(0,t.jsx)("circle",{cx:"4.5",cy:"5.5",r:"2.5",fill:"none",stroke:"currentColor",strokeLinecap:"square",strokeMiterlimit:"10",strokeWidth:"2"}),(0,t.jsx)("line",{x1:"11",y1:"6",x2:"22",y2:"6",fill:"none",stroke:"currentColor",strokeLinecap:"square",strokeMiterlimit:"10",strokeWidth:"2"}),(0,t.jsx)("line",{x1:"11",y1:"11",x2:"22",y2:"11",fill:"none",stroke:"currentColor",strokeLinecap:"square",strokeMiterlimit:"10",strokeWidth:"2"}),(0,t.jsx)("circle",{cx:"4.5",cy:"15.5",r:"2.5",fill:"none",stroke:"currentColor",strokeLinecap:"square",strokeMiterlimit:"10",strokeWidth:"2"}),(0,t.jsx)("line",{x1:"11",y1:"16",x2:"22",y2:"16",fill:"none",stroke:"currentColor",strokeLinecap:"square",strokeMiterlimit:"10",strokeWidth:"2"}),(0,t.jsx)("line",{x1:"11",y1:"21",x2:"22",y2:"21",fill:"none",stroke:"currentColor",strokeLinecap:"square",strokeMiterlimit:"10",strokeWidth:"2"})]})]})],187824)},193732,e=>{let t=e.i(187824).f;e.s(["f",0,t])},372480,e=>{var t=e.i(843476),i=e.i(997053);let n=i.U.svg.withConfig({displayName:"IconMailSend.styles__Root",componentId:"sc-505d54d1-0"})``;e.s(["f",0,e=>(0,t.jsxs)(n,{className:e.className,"data-testid":"icon-mail-send-root",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,t.jsx)("path",{d:"M2 5V7L12 12L22 7V5",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"square"}),(0,t.jsx)("path",{d:"M21.457 18H22L14 18",stroke:"currentColor",strokeWidth:"2",strokeMiterlimit:"10",strokeLinecap:"square"}),(0,t.jsx)("path",{d:"M18.5 21.5L22 18L18.5 14.5",stroke:"currentColor",strokeWidth:"2",strokeMiterlimit:"10",strokeLinecap:"square"}),(0,t.jsx)("path",{d:"M23 14.7607L21 12.7607V5H3V19H11V21H1V3H23V14.7607Z",fill:"currentColor",stroke:"none"})]})],372480)},464862,e=>{let t=e.i(48866).f;e.s(["f",0,t])},504554,e=>{var t=e.i(843476),i=e.i(997053);let n=i.U.svg.withConfig({displayName:"IconRefresh.styles__Root",componentId:"sc-86a28ebc-0"})``;e.s(["f",0,e=>(0,t.jsx)(n,{className:e.className,"data-testid":"icon-refresh-root",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("path",{d:"M19.4221 8.01389C18.0322 5.61438 15.4343 4 12.4588 4C9.08513 4 6.19686 6.07535 5.00433 9.01736M16.9806 9.01736H21V5.00347M5.57787 16.0417C6.96782 18.4412 9.56573 20.0556 12.5412 20.0556C15.9149 20.0556 18.8031 17.9802 19.9957 15.0382M8.0194 15.0382H4V19.0521",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})],504554)},581717,e=>{let t=e.i(504554).f;e.s(["f",0,t])},108939,e=>{let t=e.i(396832).f;e.s(["f",0,t])},495835,e=>{let t=e.i(890603).f;e.s(["f",0,t])},3338,e=>{var t=e.i(843476),i=e.i(997053);let n=i.U.svg.withConfig({displayName:"IconStar.styles__Root",componentId:"sc-ca25a9a4-0"})``;e.s(["f",0,e=>(0,t.jsx)(n,{className:e.className,"data-testid":"icon-star-root",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("polygon",{points:"12 2.245 15.039 8.403 21.836 9.39 16.918 14.185 18.079 20.954 12 17.759 5.921 20.954 7.082 14.185 2.164 9.39 8.961 8.403 12 2.245",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"square",strokeLinejoin:"miter",strokeMiterlimit:"10"})})],3338)},90792,e=>{let t=e.i(3338).f;e.s(["f",0,t])},168205,e=>{var t=e.i(843476),i=e.i(997053);let n=i.U.svg.withConfig({displayName:"IconWarning.styles__Root",componentId:"sc-cb98c6cf-0"})``;e.s(["f",0,e=>(0,t.jsxs)(n,{className:e.className,"data-testid":"icon-warning-root",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[(0,t.jsx)("title",{children:"warning-sign"}),(0,t.jsxs)("g",{fill:"currentColor",strokeLinejoin:"miter",strokeLinecap:"butt",children:[(0,t.jsx)("circle",{cx:"12",cy:"16.75",r:"1.25",fill:"currentColor",strokeWidth:"2"}),(0,t.jsx)("line",{x1:"12",y1:"13",x2:"12",y2:"9",fill:"none",stroke:"currentColor",strokeLinecap:"square",strokeMiterlimit:"10",strokeWidth:"2"}),(0,t.jsx)("path",{d:"m10.171,4.06l-7.899,13.783c-.806,1.406.209,3.157,1.829,3.157h15.798c1.62,0,2.635-1.751,1.829-3.157l-7.899-13.783c-.81-1.413-2.849-1.413-3.659,0Z",fill:"none",stroke:"currentColor",strokeLinecap:"square",strokeMiterlimit:"10",strokeWidth:"2"})]})]})],168205)},488661,e=>{let t=e.i(168205).f;e.s(["f",0,t])},177607,422180,e=>{var t=e.i(843476),i=e.i(271645);e.i(945304);var n=e.i(977194);e.i(710788);var r=e.i(363451);e.i(390517);var a=e.i(49891);e.i(352162);var o=e.i(791777);e.i(307839);var s=e.i(585584),l=e.i(647835),d=e.i(240029),c=e.i(380153);e.i(311046);var u=e.i(499881),f=e.i(997053),h=e.i(547905),p=e.i(726029),m=e.i(650868),g=e.i(224906);let x=f.U.section.withConfig({displayName:"CtaSection.styles__Root",componentId:"sc-53eb986f-0"})`
  position: relative;
  width: 100%;
  /* Ohne globalen border-box-Reset (_reset.scss) addiert content-box das
     seitliche Polster auf die 100% und das Band wird breiter als die Seite. */
  box-sizing: border-box;
  overflow: hidden;
  background-color: ${({theme:e})=>e.palette.site.navy};
  /* Wabenrand (#1188): das Band ist Host */
  ${({$edges:e})=>(0,h.n)(e)}
`,y=(e,t,i,n)=>{let r=t?.[e];return r?.placement==="inner"?f.m`
        padding-${e}: calc(${u.r[r.depth??"section"]}px + ${i});
      `:f.m`
        padding-${e}: ${n};
      `},b=f.U.div.withConfig({displayName:"CtaSection.styles__Band",componentId:"sc-53eb986f-1"})`
  position: relative;
  z-index: 2;
  box-sizing: border-box;
  /* Telefon: Zone + margin.large bzw. margin.big; ab 768 px Zone + margin.big bzw. padding.big */
  ${({$edges:e,theme:t})=>y("top",e,t.margin.large,t.margin.big)}
  ${({$edges:e,theme:t})=>y("bottom",e,t.margin.large,t.margin.big)}

  @media (min-width: 768px) {
    ${({$edges:e,theme:t})=>y("top",e,t.margin.big,t.padding.big)}
    ${({$edges:e,theme:t})=>y("bottom",e,t.margin.big,t.padding.big)}
  }
`,v=(0,f.U)(m.f).withConfig({displayName:"CtaSection.styles__Container",componentId:"sc-53eb986f-2"})`
  margin-bottom: 0;
`,w=(0,f.U)(g.f).withConfig({displayName:"CtaSection.styles__Column",componentId:"sc-53eb986f-3"})`
  margin-bottom: 0;
`,k=f.U.div.withConfig({displayName:"CtaSection.styles__Content",componentId:"sc-53eb986f-4"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({theme:e})=>e.margin.default};
  text-align: center;
`,$=f.q`
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
`,C=f.U.h2.withConfig({displayName:"CtaSection.styles__Headline",componentId:"sc-53eb986f-5"})`
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
`,j=f.U.span.withConfig({displayName:"CtaSection.styles__Word",componentId:"sc-53eb986f-6"})`
  display: inline-block;
  max-width: 100%;
`,M=f.U.div.withConfig({displayName:"CtaSection.styles__ButtonSlot",componentId:"sc-53eb986f-7"})`
  display: flex;
  justify-content: center;
  max-width: 100%;
  /* Die Kacheln des Buttons ragen eine Reihe plus Ring unter seinen Kasten —
     Luft bis zum Wabenrand des Bands */
  padding-bottom: ${({theme:e})=>e.margin.large};
`;e.s(["f",0,e=>{let{headline:f,buttonText:h,buttonHref:p,icon:m,className:g,dataTestId:y="cta-section",dataAttributes:$,edges:L,motion:N=!0,onFirstView:z,onFirstHover:I,onCtaClick:R}=e,_=(0,u.N)(L),W=(0,i.useRef)(null),H=(0,i.useRef)(null),S=(0,i.useRef)(null),A=(0,i.useMemo)(()=>f.trim().split(/\s+/).filter(Boolean),[f]),{columns:U}=(0,d.f)(W,24,44),{state:T,visible:E}=(0,l.f)(W,520+70*Math.max(0,A.length-1),.25),q=(0,c.f)("(pointer: fine)"),V=N&&q&&"static"!==T&&"pending"!==T,B=(0,i.useRef)(z);(0,i.useEffect)(()=>{B.current=z}),(0,i.useEffect)(()=>{E&&B.current?.()},[E]);let F=(0,i.useRef)(null),P=(0,i.useRef)(!1),O=(0,i.useCallback)(e=>{if(!V||"touch"===e.pointerType)return;F.current||(F.current={root:e.currentTarget.getBoundingClientRect()});let{root:t}=F.current;S.current?.move(e.clientX-t.left,e.clientY-t.top),P.current||(P.current=!0,I?.())},[V,I]),K=(0,i.useCallback)(()=>{F.current=null,S.current?.leave()},[]);(0,i.useEffect)(()=>{if(!V)return;let e=()=>{F.current=null};return window.addEventListener("scroll",e,{passive:!0}),()=>window.removeEventListener("scroll",e)},[V]);let Z=N&&"pending"!==T&&"idle"!==T?"active":"hidden";return(0,t.jsxs)(x,{ref:W,className:g,...$,"data-testid":y,"data-hex-stage":"true","data-columns":U,"data-state":N?T:"static","data-motion":N?"true":"false","data-pointer":V?"fine":"none",$edges:_?L:void 0,onPointerMove:O,onPointerLeave:K,children:[N&&(0,t.jsx)(o.K,{anchorRef:H,state:Z,duration:900,columns:U,tone:"light",dataTestId:`${y}-backdrop`}),N&&(0,t.jsx)(s.f,{ref:S,columns:U,radius:90,enabled:V,dataTestId:`${y}-hover-spot`}),_&&L&&(0,t.jsx)(r.f,{edges:L,zIndex:1,dataTestId:`${y}-edge`}),(0,t.jsx)(b,{$edges:_?L:void 0,children:(0,t.jsx)(v,{dataTestId:`${y}-row`,children:(0,t.jsx)(w,{xs:12,md:10,mdOffset:1,lg:8,lgOffset:2,dataTestId:`${y}-col`,children:(0,t.jsxs)(k,{ref:H,"data-testid":`${y}-content`,children:[m&&(0,t.jsx)(n.c,{name:m.name,tone:m.tone,size:"large",shape:"hex",dataTestId:`${y}-icon`}),(0,t.jsx)(C,{"data-testid":`${y}-headline`,"data-state":N?T:"static","data-words":A.length,children:A.map((e,n)=>(0,t.jsxs)(i.default.Fragment,{children:[n>0&&" ",(0,t.jsx)(j,{"data-word":n,style:{"--word":n},children:e})]},`${n}-${e}`))}),p&&(0,t.jsx)(M,{"data-testid":`${y}-button-slot`,children:(0,t.jsx)(a.f,{href:p,tone:"green",size:"large",onClick:R,dataTestId:`${y}-button`,children:h})})]})})})})]})}],422180),e.s([],177607)},808847,e=>{e.i(311046);var t=e.i(650529),i=e.i(355351);let n=(e,n,r,a=t.Q)=>{let o=new Map;if(0===e.length||0===r.length)return o;let s=(0,i.P)(e,n,r.length);for(let i of e){let e=s.get(i.key);if(void 0===e)continue;let n=(0,t.U)(i,e,r,a);n>.005&&o.set(i.key,Math.round(1e3*n)/1e3)}return o};e.s(["K",0,20,"v",0,(e,r,a,o,s,l=t.Q)=>{if(0===e.length||0===r.length)return[];let d=n(e,e=>r.some(t=>(0,i.D)(e,t)),a,l),c=e.filter(e=>d.has(e.key));if(0===c.length)return[];let u={left:Math.min(...c.map(e=>e.x)),top:Math.min(...c.map(e=>e.y)),right:Math.max(...c.map(e=>e.x+e.size)),bottom:Math.max(...c.map(e=>e.y+e.size))},f=.5*s;return c.map(e=>{let t=(e.cx-u.left+(u.bottom-e.cy))/(u.right-u.left+(u.bottom-u.top)||1);return{key:e.key,alpha:d.get(e.key)??0,delay:Math.round(o+Math.min(1,Math.max(0,t))*f)}})},"r",0,e=>Math.round(.5*e),"A",0,n,"a",0,(e,r,a,o,s,l=t.V,d=t.Q)=>{if(0===o.length)return[];let c=(0,i.T)(e,r,a);if(0===c.length)return[];let u=c[0].size*(l.length+2),f=Math.min(...o.map(e=>e.left))-u,h=Math.min(...o.map(e=>e.top))-u,p=Math.max(...o.map(e=>e.right))+u,m=Math.max(...o.map(e=>e.bottom))+u,g=c.filter(e=>e.x+e.size>=f&&e.x<=p&&e.y+e.size>=h&&e.y<=m),x=n(g,s,l,d);return g.flatMap(e=>{let t=x.get(e.key);return void 0===t?[]:[{...e,alpha:t}]})},"J",0,(e,i,r=t.V,a=t.Q)=>{if(0===i.length)return[];let o=new Set(i);return Array.from(n(e,e=>o.has(e.key),r,a),([e,t])=>({key:e,alpha:t}))},"L",0,(e,t,i=t)=>({left:e.left-t,top:e.top-i,right:e.right+t,bottom:e.bottom+i})])},352162,791777,515578,706994,e=>{var t=e.i(843476),i=e.i(271645);e.i(311046);var n=e.i(650529),r=e.i(355351),a=e.i(808847),o=e.i(997053),s=e.i(118410),l=e.i(547905);let d=o.q`
  from { opacity: 0; transform: scale(0) rotate(-14deg); }
  to { opacity: var(--alpha); transform: scale(1) rotate(0deg); }
`,c=o.q`
  from { opacity: var(--alpha); }
  to { opacity: 0; }
`,u=o.U.div.withConfig({displayName:"HexContentBackdrop.styles__Root",componentId:"sc-3d26f569-0"})`
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  /* Layout/Style/Paint bleiben in dieser Ebene — 1000+ Kacheln invalidieren nicht die Seite */
  contain: layout style paint;
  /* #2192: helle Waben auf dunkler Fläche liegen normal darüber */
  mix-blend-mode: ${({$tone:e})=>"light"===e?"normal":"multiply"};
`,f=o.U.div.withConfig({displayName:"HexContentBackdrop.styles__Tile",componentId:"sc-3d26f569-1"})`
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
`,h=o.U.div.withConfig({displayName:"HexContentBackdrop.styles__HaloTile",componentId:"sc-3d26f569-2"})`
  position: absolute;
  left: var(--x);
  top: var(--y);
  width: var(--size);
  height: var(--size);
  ${l.p}
  background: ${s.h.PRIMARY};
  opacity: var(--alpha);
  ${({$partial:e})=>e&&l.t}
`,p="h1, h2, h3, h4, p, button, a, [data-backdrop-leaf]",m=(e,t)=>{let i=0,n=0,r=e;for(;r&&r!==t;)i+=r.offsetLeft,n+=r.offsetTop,r=r.offsetParent;return{left:i,top:n,right:i+e.offsetWidth,bottom:n+e.offsetHeight}},g="data-hex-face",x=(e,t,n,r=a.K)=>{let[o,s]=(0,i.useState)(null),[l,d]=(0,i.useState)([]);return(0,i.useEffect)(()=>{let i=e.current;if(!i)return;let n=i.offsetParent??i.parentElement,o=()=>{let e,o,l=i.offsetWidth,c=i.offsetHeight;if(l<=0||c<=0)return;s(e=>e&&e.width===l&&e.height===c?e:{width:l,height:c});let u=t.current,f=u?(e=Array.from(u.querySelectorAll(p)),o=Array.from(u.children),(e.length>0?e:o.length>0?o:[u]).filter(e=>e.offsetWidth>0&&e.offsetHeight>0).flatMap(e=>((e,t)=>{let i=m(e,t),n=(e=>{if(!e)return null;let t=e.split(",").map(Number);if(4!==t.length||t.some(e=>!Number.isFinite(e)))return null;let[i,n,r,a]=t;return r>i&&a>n?{left:i,top:n,right:r,bottom:a}:null})(e.getAttribute(g));if(n)return[{left:i.left+n.left,top:i.top+n.top,right:i.left+n.right,bottom:i.top+n.bottom}];let r=e.tagName.toLowerCase();if("button"===r||"a"===r||"u"<typeof document||!document.createRange)return[i];let a=e.getBoundingClientRect(),o=i.left-a.left,s=i.top-a.top,l=document.createRange();l.selectNodeContents(e);let d=Array.from(l.getClientRects?.()??[]).filter(e=>e.width>0&&e.height>0).map(e=>({left:e.left+o,top:e.top+s,right:e.right+o,bottom:e.bottom+s}));return d.length>0?d:[i]})(e,n)).map(e=>(0,a.L)(e,r,r/2))):[];d(e=>JSON.stringify(e)===JSON.stringify(f)?e:f)};if(o(),"u">typeof document&&document.fonts?.ready&&document.fonts.ready.then(o).catch(()=>void 0),"u"<typeof ResizeObserver)return;let l=new ResizeObserver(o);l.observe(i);let c=t.current;c&&(l.observe(c),c.querySelectorAll(p).forEach(e=>l.observe(e)));let u=c&&"u">typeof MutationObserver?new MutationObserver(o):null;return u?.observe(c,{subtree:!0,attributes:!0,attributeFilter:[g]}),()=>{l.disconnect(),u?.disconnect()}},[e,t,n,r]),{stage:o,rects:l}};e.s(["M",0,g,"K",0,({anchorRef:e,state:o,duration:s,enterDelay:l=.2*s,enterDuration:d=.8*s,leaveDelay:c=0,leaveDuration:h=.3*s,columns:p=12,padding:m=a.K,waveAlphas:g=n.V,tone:y="primary",dataTestId:b="hex-content-backdrop",className:v})=>{let w=(0,i.useRef)(null),{stage:k,rects:$}=x(w,e,o,m),C=(0,i.useMemo)(()=>{if("hidden"===o||!k||0===$.length)return[];let e=(0,r.T)(k.width,k.height,p),t=new Map(e.map(e=>[e.key,e]));return(0,a.v)(e,$,g,l,d).flatMap(e=>{let i=t.get(e.key);return i?[{...i,x:i.x-1,y:i.y-1,size:i.size+2,alpha:e.alpha,delay:e.delay}]:[]})},[o,k,$,p,g,l,d]);return(0,t.jsx)(u,{ref:w,className:v,"data-testid":b,"data-ready":C.length>0?"true":"false","data-tiles":C.length,"data-rects":$.length,"data-tone":y,$tone:y,"aria-hidden":"true",children:C.map(e=>(0,t.jsx)(f,{$state:o,$pop:(0,a.r)(d),$leaveDelay:Math.round(c),$leave:Math.round(h),$partial:(0,n.v)(e.alpha),$tone:y,style:{"--x":`${e.x}px`,"--y":`${e.y}px`,"--size":`${e.size}px`,"--alpha":String("light"===y?+(.14*e.alpha).toFixed(3):e.alpha),"--delay":`${e.delay}ms`,"--shimmer-period":`${(0,n.g)(e).period}ms`}},e.key))})},"f",0,(e,t)=>[e.left-t.left,e.top-t.top,e.right-t.left,e.bottom-t.top].map(e=>Math.round(e)).join(","),"e",0,m,"Z",0,x],791777);var y=n;e.s(["f",0,({width:e,height:n,columns:o,keys:s,steps:l=y.V,dataTestId:d="hex-halo-backdrop",className:c})=>{let f=(0,i.useMemo)(()=>{if(e<=0||n<=0||0===s.length)return[];let t=(0,r.T)(e,n,o),i=new Map(t.map(e=>[e.key,e]));return(0,a.J)(t,s,l).flatMap(({key:e,alpha:t})=>{let n=i.get(e);return n?[{...n,alpha:t}]:[]})},[e,n,o,s,l]);return(0,t.jsx)(u,{className:c,"data-testid":d,"data-tiles":f.length,"aria-hidden":"true",children:f.map(e=>{let{period:i,offset:n}=(0,y.g)(e);return(0,t.jsx)(h,{$partial:(0,y.v)(e.alpha),style:{"--x":`${e.x-1}px`,"--y":`${e.y-1}px`,"--size":`${e.size+2}px`,"--alpha":String(e.alpha),"--shimmer-period":`${i}ms`,"--shimmer-offset":`${n}ms`}},e.key)})})}],515578),e.s([],352162);var b=e.i(626645);e.s(["f",()=>b.$],706994)},390517,404857,49891,e=>{var t=e.i(843476),i=e.i(271645),n=e.i(499911);e.i(710788);var r=e.i(599858);e.i(352162);var a=e.i(791777),o=e.i(808847);e.i(311046);var s=e.i(355351);let l=e=>{let[t,n]=(0,i.useState)(null);return(0,i.useEffect)(()=>{let t=e.current;if(!t)return;let i=t.closest("[data-hex-stage]")??t.offsetParent;if(!i)return;let r=()=>{let e=i.offsetWidth,r=i.offsetHeight;if(e<=0||r<=0||t.offsetWidth<=0)return;let o=Number(i.getAttribute("data-columns")),l=o>0?o:(0,s.L)(e),d=(0,a.e)(t,i);n(t=>t&&t.width===e&&t.height===r&&t.columns===l&&JSON.stringify(t.rect)===JSON.stringify(d)?t:{width:e,height:r,columns:l,rect:d})};if(r(),"u">typeof document&&document.fonts?.ready&&document.fonts.ready.then(r).catch(()=>void 0),"u"<typeof ResizeObserver)return;let o=new ResizeObserver(r);o.observe(i),o.observe(t);let l="u"<typeof MutationObserver?null:new MutationObserver(r);return l?.observe(i,{attributes:!0,attributeFilter:["data-columns"]}),()=>{o.disconnect(),l?.disconnect()}},[e]),t};e.s(["f",0,l],404857);var d=e.i(997053);e.i(315481);var c=e.i(10003),u=e.i(706994);let f=d.m`
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
`,h=d.m`
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
  ${({$tone:e})=>"green"===e?h:""}
  ${({$size:e})=>"large"===e?p:""}
`,g=(0,d.U)(c.NavLink).withConfig({displayName:"HexCta.styles__CtaLink",componentId:"sc-d46587ea-0"})`
  ${f}
  ${m}
`,x=d.U.button.withConfig({displayName:"HexCta.styles__CtaButton",componentId:"sc-d46587ea-1"})`
  ${f}
  ${m}
`,y=d.U.span.withConfig({displayName:"HexCta.styles__Label",componentId:"sc-d46587ea-2"})`
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
`,b=(0,d.U)(u.f).withConfig({displayName:"HexCta.styles__Tiles",componentId:"sc-d46587ea-3"})`
  z-index: -1;
  pointer-events: none;

  [data-full='true'] {
    pointer-events: visiblePainted;
  }
`,v=[1,.35];e.s(["f",0,({children:e,href:d,onClick:c,disabled:u,steps:f=v,onCellsChange:h,tone:p="light",size:m="default",className:w,dataTestId:k="hex-cta"})=>{let $=(0,i.useRef)(null),C=l($),j=(0,i.useMemo)(()=>C?(e=>{let{width:t,height:i,columns:n,rect:r}=e,a=(0,s.T)(t,i,n);if(0===a.length)return null;let o=a[0].size,l=(r.left+r.right)/2,d=(r.top+r.bottom)/2,c=a.reduce((e,t)=>Math.abs(t.cy-d)<Math.abs(e.cy-d)?t:e),u=(r.right-r.left)/2,f=(e,t)=>Math.abs(e.cx-l)<=t,h=a.filter(e=>e.row===c.row?f(e,u+.5*o):1===Math.abs(e.row-c.row)&&f(e,u));if(0===h.length)return null;let p=Math.min(...h.map(e=>e.x)),m=Math.max(...h.map(e=>e.x+e.size)),g=Math.min(...h.map(e=>e.y)),x=Math.max(...h.map(e=>e.y+e.size));return{seeds:new Set(h.map(e=>e.key)),dx:Math.round((p+m)/2-l),dy:Math.round(c.cy-d),face:{left:p,top:g,right:m,bottom:x}}})(C):null,[C]),M=(0,i.useMemo)(()=>C&&j?(0,o.a)(C.width,C.height,C.columns,[C.rect],e=>j.seeds.has(e.key),f):[],[C,j,f]),L=!!(C&&j&&M.length>0),N=(0,i.useRef)(h);(0,i.useEffect)(()=>{N.current=h}),(0,i.useEffect)(()=>{j&&N.current?.([...j.seeds])},[j]);let z=C&&j&&L?(0,a.f)(j.face,C.rect):void 0,I={[a.M]:z},R=(0,t.jsxs)(t.Fragment,{children:[C&&L&&(0,t.jsx)(b,{"aria-hidden":"true",focusable:"false","data-hex-cta-tiles":"true","data-testid":`${k}-tiles`,"data-rows":3,style:{"--edge-x":`${-C.rect.left}px`,"--edge-y":`${-C.rect.top}px`,"--edge-w":`${C.width}px`,"--edge-h":`${C.height}px`},children:(0,t.jsx)(r.f,{tiles:M,color:"onAccent"})}),(0,t.jsxs)(y,{style:{"--dx":`${j?.dx??0}px`,"--dy":`${j?.dy??0}px`},children:[(0,t.jsx)("span",{children:e}),(0,t.jsx)(n.f,{className:"hex-cta-icon"})]})]});return d?(0,t.jsx)(g,{ref:$,href:d,onClick:c,className:w,$tone:p,$size:m,"data-tone":p,"data-size":m,"data-testid":k,"data-tiles":M.length,"data-ready":L?"true":"false",...I,children:R}):(0,t.jsx)(x,{ref:$,type:"button",onClick:c,disabled:u,className:w,$tone:p,$size:m,"data-tone":p,"data-size":m,"data-testid":k,"data-tiles":M.length,"data-ready":L?"true":"false",...I,children:R})}],49891),e.s([],390517)},307839,585584,e=>{var t=e.i(843476),i=e.i(271645),n=e.i(355351),r=e.i(997053),a=e.i(118410),o=e.i(547905);let s=r.U.div.withConfig({displayName:"HexHoverSpot.styles__Root",componentId:"sc-9588288a-0"})`
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  /* Layout/Style/Paint bleiben in dieser Ebene — 1000+ Kacheln invalidieren nicht die Seite */
  contain: layout style paint;

  @media (hover: none), (prefers-reduced-motion: reduce) {
    display: none;
  }
`,l=r.q`
  from { opacity: 0; transform: scale(0) rotate(-14deg); }
  to { opacity: var(--lit, 0.6); transform: scale(1) rotate(0deg); }
`,d=r.q`
  from { opacity: var(--lit, 0.6); transform: scale(1) rotate(0deg); }
  to { opacity: 0; transform: scale(0) rotate(-14deg); }
`,c=r.U.div.withConfig({displayName:"HexHoverSpot.styles__Tile",componentId:"sc-9588288a-1"})`
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
    background: ${a.h.PRIMARY};
  }

  /* #1418: Kacheln legen die Ebene darunter frei. Der Wert steht in der
     Klasse der Kachel (für alle Kacheln dieselbe), damit var(--x)/var(--y)
     je Kachel aufgelöst werden — auf der Wurzel gesetzt, lösten sie dort auf. */
  ${({$reveal:e})=>e?`background: ${e};`:""}
`,u=(0,i.forwardRef)(function({columns:e=12,radius:r=70,enabled:a=!0,accentKeys:o,reveal:l,dataTestId:d="hex-hover-spot",className:u},f){let h=(0,i.useRef)(null),[p,m]=(0,i.useState)(null),g=(0,i.useMemo)(()=>p?(0,n.T)(p.width,p.height,e):[],[p,e]),x=(0,i.useRef)(g);x.current=g;let y=(0,i.useRef)(new Set),b=(0,i.useRef)(null),v=(0,i.useRef)(null),w=(0,i.useRef)(new Map);(0,i.useEffect)(()=>{let e=h.current;if(!e)return;let t=()=>{let t=e.getBoundingClientRect();t.width>0&&t.height>0&&m({width:t.width,height:t.height})};if(t(),"u"<typeof ResizeObserver)return;let i=new ResizeObserver(t);return i.observe(e),()=>i.disconnect()},[]);let k=e=>w.current.get(e)??null,$=()=>{for(let e of y.current){let t=k(e);t&&(t.dataset.lit="false",t.dataset.wasLit="true")}y.current.clear(),h.current?.setAttribute("data-active","false")},C=()=>{b.current=null;let e=v.current;if(!e)return;let t=new Set;for(let i of x.current){if(Math.abs(i.cx-e.x)>r||Math.abs(i.cy-e.y)>r)continue;let a=(0,n.a)(i,e.x,e.y,r);if(a<=0)continue;t.add(i.key);let o=k(i.key);o&&(o.style.setProperty("--lit",(.25+.75*a).toFixed(2)),"true"!==o.dataset.lit&&(o.dataset.lit="true"))}for(let e of y.current)if(!t.has(e)){let t=k(e);t&&(t.dataset.lit="false",t.dataset.wasLit="true")}y.current=t,h.current?.setAttribute("data-active",t.size>0?"true":"false")};return(0,i.useImperativeHandle)(f,()=>({move:(e,t)=>{a&&(v.current={x:e,y:t},"function"!=typeof requestAnimationFrame?C():null===b.current&&(b.current=requestAnimationFrame(C)))},leave:()=>{v.current=null,$()}}),[a,r]),(0,i.useEffect)(()=>{a||(v.current=null,$())},[a]),(0,i.useEffect)(()=>()=>{null!==b.current&&"function"==typeof cancelAnimationFrame&&cancelAnimationFrame(b.current)},[]),(0,t.jsx)(s,{ref:h,className:u,"data-testid":d,"data-active":"false","data-ready":p?"true":"false","data-tiles":g.length,"data-reveal":l?"true":"false","aria-hidden":"true",children:g.map(e=>{let i;return(0,t.jsx)(c,{ref:(i=e.key,e=>{e?w.current.set(i,e):w.current.delete(i)}),"data-key":e.key,"data-lit":"false","data-accent":o?.includes(e.key)?"true":void 0,$reveal:l,style:{"--x":`${e.x}px`,"--y":`${e.y}px`,"--size":`${e.size}px`}},e.key)})})});e.s(["f",0,u],585584),e.s([],307839)},371561,e=>{var t=e.i(271645);let i=["slow-2g","2g"];e.s(["f",0,()=>{let[e,n]=(0,t.useState)(!1);return(0,t.useEffect)(()=>{let e="u"<typeof navigator?void 0:navigator.connection,t=()=>n(!!e?.saveData||i.includes(e?.effectiveType??""));return t(),e?.addEventListener?.("change",t),()=>e?.removeEventListener?.("change",t)},[]),e}])},647835,764576,e=>{var t=e.i(271645),i=e.i(587076),n=e.i(394497),r=e.i(371561);function a({mounted:e,reducedMotion:t,saveData:i,seen:n,finished:r}){return e?t||i?"static":n?r?"ready":"running":"idle":"pending"}function o(e,t=0){let i=Math.max(0,Math.min(t,(e.count??1)-1));return{delay:e.start+i*(e.stagger??0),duration:e.duration}}e.s(["Q",0,e=>"ready"===e,"L",0,function(e){let t=new Set;for(let i of e){if(t.has(i.id))throw Error(`Phase "${i.id}" doppelt`);for(let e of(t.add(i.id),[i.start,i.duration,i.stagger??0,i.count??1]))if(!Number.isFinite(e)||e<0)throw Error(`Phase "${i.id}": ung\xfcltige Zeit ${e}`)}},"E",0,function(e){return e.reduce((e,t)=>Math.max(e,function(e){let{delay:t,duration:i}=o(e,(e.count??1)-1);return t+i}(t)),0)},"G",0,function(e,t){let i=e.find(e=>e.id===t);if(!i)throw Error(`Phase "${t}" fehlt`);return i},"g",0,o,"n",0,a],764576),e.s(["f",0,function(e,o,s=.35){let l=(0,n.f)(e,s),d=(0,i.f)(),c=(0,r.f)(),[u,f]=(0,t.useState)(!1),[h,p]=(0,t.useState)(!1),[m,g]=(0,t.useState)(!1);(0,t.useEffect)(()=>f(!0),[]),(0,t.useEffect)(()=>{l&&p(!0)},[l]);let x=a({mounted:u,reducedMotion:d,saveData:c,seen:h,finished:m});return(0,t.useEffect)(()=>{if("running"!==x)return;let e=window.setTimeout(()=>g(!0),o);return()=>window.clearTimeout(e)},[x,o]),{state:x,visible:l}}],647835)},587076,e=>{var t=e.i(271645);e.s(["f",0,()=>{let[e,i]=(0,t.useState)(!1);return(0,t.useEffect)(()=>{if("function"!=typeof window.matchMedia)return;let e=window.matchMedia("(prefers-reduced-motion: reduce)"),t=()=>i(e.matches);return t(),e.addEventListener("change",t),()=>e.removeEventListener("change",t)},[]),e}])},394497,e=>{var t=e.i(271645);e.s(["f",0,(e,i=.2,n)=>{let[r,a]=(0,t.useState)(!1);return(0,t.useEffect)(()=>{let t=e.current;if("u"<typeof IntersectionObserver)return void a(!0);if(!t)return;let r=new IntersectionObserver(([e])=>a(e.isIntersecting),{threshold:i,rootMargin:n});return r.observe(t),()=>r.disconnect()},[e,i,n]),r}])},891567,e=>{let t={name:"plastship GmbH",street:"Auf der Lind 10",postalCode:"65529",locality:"Waldems",region:"Hessen",countryCode:"DE",geo:{lat:50.248828,lon:8.309024}};e.s(["Y",0,t,"_",0,{info:"info@plastship.com",team:"team@plastship.com"},"h",0,{central:{e164:"+4961265898010",national:"06126 58980-10",international:"+49 6126 58980-10"}},"F",0,"contact_click","W",0,function(e=t){return`${e.street}, ${e.postalCode} ${e.locality}`}])},974924,e=>{let t=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;e.s(["d",0,20,"x",0,function(e){return"string"==typeof e&&t.test(e)},"W",0,function(e){return e.trim().toLowerCase()}])},635647,e=>{var t=e.i(974924),i=e.i(891567),n=e.i(854101);let r=/^\+?[\d\s()./–-]+$/,a=e=>`${e.lat},${e.lon}`,o=e=>e.replace(/\s+/g," ").trim(),s=e=>Number(e.toFixed(6));function l(e){return!!e&&Number.isFinite(e.lat)&&Number.isFinite(e.lon)&&90>=Math.abs(e.lat)&&180>=Math.abs(e.lon)}e.s(["a",0,function(e){let t=o(e??"").toLowerCase();if(!t)return;let{street:n,postalCode:r}=i.Y;return t.includes(n.toLowerCase())&&t.includes(r)?{...i.Y.geo}:void 0},"c",0,function(e,i){let n="string"==typeof e?e.trim():"";if(!(0,t.x)(n))return null;let r=i?.trim();return r?`mailto:${n}?subject=${encodeURIComponent(r)}`:`mailto:${n}`},"n",0,function(e,t){if(!e)return null;let i=o(e.query),n=l(e.geo)?e.geo:void 0;if(!i&&!n)return null;if("string"==typeof t&&/iPhone|iPad|iPod|Macintosh/.test(t)){let e,t;return e=o(i),t=[],e&&t.push(`q=${encodeURIComponent(e)}`),n&&t.push(`ll=${a(n)}`),`https://maps.apple.com/?${t.join("&")}`}if("string"==typeof t&&/Android/i.test(t)){let e;return e=n?a(n):"0,0",`geo:${e}?q=${encodeURIComponent(o(i))}`}return null},"W",0,function(e,t){if(!e)return null;let i=o(e.query).slice(0,300),r=l(e.geo)?e.geo:void 0;if(!i&&!r)return null;let a=[];r&&a.push(`lat=${s(r.lat)}`,`lon=${s(r.lon)}`),i&&a.push(`q=${encodeURIComponent(i)}`);let d=`/map/?${a.join("&")}`;return t?(0,n.N)(d,t):d},"R",0,function(e){let t=o(e.get("q")??"").slice(0,300),i=e.get("lat"),n=e.get("lon"),r=null!==i&&""!==i.trim()?Number(i):0/0,a=null!==n&&""!==n.trim()?Number(n):0/0,d=l({lat:r,lon:a})?{lat:s(r),lon:s(a)}:void 0;return t||d?d?{query:t,geo:d}:{query:t}:null},"A",0,function(e){let t=function(e){let t;if("string"!=typeof e)return null;let i=e.trim();if(!i||!r.test(i))return null;let n=i.replace(/^(\+\d{1,3})\s*\(0\)/,"$1"),a=n.replace(/\D/g,"");if(n.startsWith("+"))t=`+${a}`;else if(a.startsWith("00"))t=`+${a.slice(2)}`;else{if(!a.startsWith("0"))return null;t=`+49${a.slice(1)}`}let o=t.length-1;return o<6||o>15||t.startsWith("+0")?null:t}(e);return t?`tel:${t}`:null}])}])})();