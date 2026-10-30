(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,[118410,e=>{let t={PRIMARY:"#00416E",SECONDARY:"#37BA24",WHITE:"#FFFFFF",BLACK:"#000000",GREY_LIGHT:"#F8F8F8",GREY:"#D8D8D8",GREY_DARK:"#687074",ERROR:"#DC0000",SUCCESS:"#37BA24",INFO:"#00416E",WARNING:"#FFCD00",BUTTON_PRIMARY_BG:"#292929",BUTTON_PRIMARY_TEXT:"#FFFFFF",BUTTON_SECONDARY_BG:"#EFCD00",BUTTON_SECONDARY_TEXT:"#292929",BUTTON_TERTIARY_BORDER:"#292929",BUTTON_DANGER_BG:"#E22F2F",HEADER_BG:"#F1FCFF",FOOTER_BG:"#1F2937",LINK_PRIMARY:"#8A2163",TEAL:"#5DE8D2",ORANGE:"#FF8A75",CORAL:"#FFBA4D",PURPLE:"#B97AFF",TRAFFIC_GREEN:"#22C55E",TRAFFIC_YELLOW:"#EAB308",TRAFFIC_RED:"#EF4444",TRAFFIC_GREY:"#D1D5DB",AUCTION:"#EF4444",MICROSOFT:"#4DA3FF"},i={COLOR_1:"#e8c1a0",COLOR_2:"#f47560",COLOR_3:"#f1e15b",COLOR_4:"#e8a838",COLOR_5:"#61cdbb",COLOR_6:"#97e3d5",COLOR_7:"#b5cf6b",COLOR_8:"#d6e685",COLOR_9:"#a6d854",COLOR_10:"#8dd1e1"},o={plastship:[t.PRIMARY,t.SECONDARY,t.WARNING,t.LINK_PRIMARY,t.BUTTON_PRIMARY_BG,t.BUTTON_SECONDARY_BG,t.GREY_DARK,t.INFO,t.SUCCESS,t.ERROR],categorical:["#2a78d6","#eb6834","#1baf7a","#eda100","#e87ba4","#008300","#4a3aa7","#e34948"],status:[t.SUCCESS,t.INFO,t.WARNING,t.ERROR],nivo:[i.COLOR_1,i.COLOR_2,i.COLOR_3,i.COLOR_4,i.COLOR_5,i.COLOR_6,i.COLOR_7,i.COLOR_8,i.COLOR_9,i.COLOR_10]},a={"#00416e":"#60A0E8","#292929":"#BDC3C7","#000000":"#E5E7EB","#687074":"#9CA3AF","#889396":"#9CA3AF","#8a2163":"#D38AB1","#4a3aa7":"#8F84E8","#008300":"#3FBF3F"};e.s(["W",0,i,"g",0,o,"h",0,t,"C",0,(e,t)=>t?a[e.toLowerCase()]??e:e,"T",0,(e,t)=>{let i=e.replace("#",""),o=parseInt(i.substring(0,2),16),a=parseInt(i.substring(2,4),16),l=parseInt(i.substring(4,6),16);return`rgba(${o}, ${a}, ${l}, ${t})`}])},10059,e=>{var t=e.i(997053);let i=t.U.div.withConfig({displayName:"Row.styles__Root",componentId:"sc-3e89f65f-0"})`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 20px;
  container-type: inline-size;
  container-name: grid-row;

  @media (min-width: ${e=>e.theme.device.tablet}) {
    width: 100%;
    height: auto;
    max-width: 94%;
  }
`;e.s(["f",0,i])},152186,856337,e=>{var t=e.i(843476),i=e.i(10059);e.s(["f",0,e=>{let{children:o,dataTestId:a}=e;return(0,t.jsx)(i.f,{className:[e.className,"row"].filter(Boolean).join(" "),"data-testid":a||"Row-root",children:o})}],152186);var o=e.i(997053);let a=e=>`${e/12*100}%`,l=e=>Array.from({length:12},(t,i)=>`&.col-${e}-offset-${i} { margin-left: ${a(i)}; }`).join("\n  "),r=o.U.div.withConfig({displayName:"Col.styles__Root",componentId:"sc-8cb234a0-0"})`
  container-type: inline-size;
  container-name: grid-col;
  box-sizing: border-box;
  padding: 0 12px;
  margin-bottom: 12px;

  /* XS - Mobile (default) */
  &.col-xs-1 { flex: 0 0 ${a(1)}; max-width: ${a(1)}; }
  &.col-xs-2 { flex: 0 0 ${a(2)}; max-width: ${a(2)}; }
  &.col-xs-3 { flex: 0 0 ${a(3)}; max-width: ${a(3)}; }
  &.col-xs-4 { flex: 0 0 ${a(4)}; max-width: ${a(4)}; }
  &.col-xs-5 { flex: 0 0 ${a(5)}; max-width: ${a(5)}; }
  &.col-xs-6 { flex: 0 0 ${a(6)}; max-width: ${a(6)}; }
  &.col-xs-7 { flex: 0 0 ${a(7)}; max-width: ${a(7)}; }
  &.col-xs-8 { flex: 0 0 ${a(8)}; max-width: ${a(8)}; }
  &.col-xs-9 { flex: 0 0 ${a(9)}; max-width: ${a(9)}; }
  &.col-xs-10 { flex: 0 0 ${a(10)}; max-width: ${a(10)}; }
  &.col-xs-11 { flex: 0 0 ${a(11)}; max-width: ${a(11)}; }
  &.col-xs-12 { flex: 0 0 ${a(12)}; max-width: ${a(12)}; }

  ${l("xs")}

  /* SM - Tablet (min-width: 576px) */
  @media (min-width: 576px) {
    &.col-sm-1 { flex: 0 0 ${a(1)}; max-width: ${a(1)}; }
    &.col-sm-2 { flex: 0 0 ${a(2)}; max-width: ${a(2)}; }
    &.col-sm-3 { flex: 0 0 ${a(3)}; max-width: ${a(3)}; }
    &.col-sm-4 { flex: 0 0 ${a(4)}; max-width: ${a(4)}; }
    &.col-sm-5 { flex: 0 0 ${a(5)}; max-width: ${a(5)}; }
    &.col-sm-6 { flex: 0 0 ${a(6)}; max-width: ${a(6)}; }
    &.col-sm-7 { flex: 0 0 ${a(7)}; max-width: ${a(7)}; }
    &.col-sm-8 { flex: 0 0 ${a(8)}; max-width: ${a(8)}; }
    &.col-sm-9 { flex: 0 0 ${a(9)}; max-width: ${a(9)}; }
    &.col-sm-10 { flex: 0 0 ${a(10)}; max-width: ${a(10)}; }
    &.col-sm-11 { flex: 0 0 ${a(11)}; max-width: ${a(11)}; }
    &.col-sm-12 { flex: 0 0 ${a(12)}; max-width: ${a(12)}; }

    ${l("sm")}
  }

  /* MD - Desktop (min-width: 768px) */
  @media (min-width: 768px) {
    &.col-md-1 { flex: 0 0 ${a(1)}; max-width: ${a(1)}; }
    &.col-md-2 { flex: 0 0 ${a(2)}; max-width: ${a(2)}; }
    &.col-md-3 { flex: 0 0 ${a(3)}; max-width: ${a(3)}; }
    &.col-md-4 { flex: 0 0 ${a(4)}; max-width: ${a(4)}; }
    &.col-md-5 { flex: 0 0 ${a(5)}; max-width: ${a(5)}; }
    &.col-md-6 { flex: 0 0 ${a(6)}; max-width: ${a(6)}; }
    &.col-md-7 { flex: 0 0 ${a(7)}; max-width: ${a(7)}; }
    &.col-md-8 { flex: 0 0 ${a(8)}; max-width: ${a(8)}; }
    &.col-md-9 { flex: 0 0 ${a(9)}; max-width: ${a(9)}; }
    &.col-md-10 { flex: 0 0 ${a(10)}; max-width: ${a(10)}; }
    &.col-md-11 { flex: 0 0 ${a(11)}; max-width: ${a(11)}; }
    &.col-md-12 { flex: 0 0 ${a(12)}; max-width: ${a(12)}; }

    ${l("md")}
  }

  /* LG - Large Desktop (min-width: 992px) */
  @media (min-width: 992px) {
    &.col-lg-1 { flex: 0 0 ${a(1)}; max-width: ${a(1)}; }
    &.col-lg-2 { flex: 0 0 ${a(2)}; max-width: ${a(2)}; }
    &.col-lg-3 { flex: 0 0 ${a(3)}; max-width: ${a(3)}; }
    &.col-lg-4 { flex: 0 0 ${a(4)}; max-width: ${a(4)}; }
    &.col-lg-5 { flex: 0 0 ${a(5)}; max-width: ${a(5)}; }
    &.col-lg-6 { flex: 0 0 ${a(6)}; max-width: ${a(6)}; }
    &.col-lg-7 { flex: 0 0 ${a(7)}; max-width: ${a(7)}; }
    &.col-lg-8 { flex: 0 0 ${a(8)}; max-width: ${a(8)}; }
    &.col-lg-9 { flex: 0 0 ${a(9)}; max-width: ${a(9)}; }
    &.col-lg-10 { flex: 0 0 ${a(10)}; max-width: ${a(10)}; }
    &.col-lg-11 { flex: 0 0 ${a(11)}; max-width: ${a(11)}; }
    &.col-lg-12 { flex: 0 0 ${a(12)}; max-width: ${a(12)}; }

    ${l("lg")}
  }
`;e.s(["f",0,e=>{let{xs:i,xsOffset:o,sm:a,smOffset:l,md:d,mdOffset:n,lg:s,lgOffset:m,children:c,dataTestId:h,dataAttributes:x}=e,f=[void 0!==i&&`col-xs-${i}`,void 0!==o&&`col-xs-offset-${o}`,void 0!==a&&`col-sm-${a}`,void 0!==l&&`col-sm-offset-${l}`,void 0!==d&&`col-md-${d}`,void 0!==n&&`col-md-offset-${n}`,void 0!==s&&`col-lg-${s}`,void 0!==m&&`col-lg-offset-${m}`].filter(Boolean);return(0,t.jsx)(r,{className:[e.className,...f].filter(Boolean).join(" "),...x,"data-testid":h??"Col-root",children:c})}],856337)},929842,619249,e=>{e.s(["K",()=>s,"D",()=>n],929842),e.s(["W",()=>d,"B",()=>l],619249);var t,i=e.i(843476),o=e.i(997053);let a=o.m`
  word-wrap: break-word;
  width: 100%;
  margin-bottom: ${({theme:e})=>e.margin.default};
  font-family: ${({theme:e})=>e.font.primaryFamily};
  text-transform: uppercase;
  word-wrap: break-word;
`,l=(e,t="desktop")=>o.m`
  ${({theme:i})=>{let a=i.font.headline[(e=>{switch(e){case n.h1:return"one";case n.h2:return"two";case n.h3:return"three";case n.h4:return"four";case n.h5:return"five";default:return"one"}})(e)][t];return o.m`
      font-size: ${a.fontSize};
      line-height: ${a.lineHeight};
      font-weight: ${a.fontWeight};
      letter-spacing: ${a.letterSpacing};
    `}}
`,r=o.m`
  ${a}
  ${({$styleLevel:e})=>l(e,"mobile")}

  @media screen and (min-width: ${({theme:e})=>e.device.mobile}) {
    ${({$styleLevel:e})=>l(e,"desktop")}
  }
`,d=o.U.h1.withConfig({displayName:"Headline.styles__StyledHeadline",componentId:"sc-aba532a1-0"})`
  ${r}
`;var n=((t={})[t.h1=1]="h1",t[t.h2=2]="h2",t[t.h3=3]="h3",t[t.h4=4]="h4",t[t.h5=5]="h5",t);let s=e=>{let{children:t,className:o,importance:a,renderAs:l,dataTestId:r}=e;return(0,i.jsx)(d,{as:(e=>{switch(e){case 1:default:return"h1";case 2:return"h2";case 3:return"h3";case 4:return"h4";case 5:return"h5"}})(a),$styleLevel:l||a,className:o,"data-testid":r||"Headline-root",children:t})}},699779,e=>{let t=e.i(929842).K;e.s(["f",0,t])},504554,e=>{var t=e.i(843476),i=e.i(997053);let o=i.U.svg.withConfig({displayName:"IconRefresh.styles__Root",componentId:"sc-86a28ebc-0"})``;e.s(["f",0,e=>(0,t.jsx)(o,{className:e.className,"data-testid":"icon-refresh-root",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("path",{d:"M19.4221 8.01389C18.0322 5.61438 15.4343 4 12.4588 4C9.08513 4 6.19686 6.07535 5.00433 9.01736M16.9806 9.01736H21V5.00347M5.57787 16.0417C6.96782 18.4412 9.56573 20.0556 12.5412 20.0556C15.9149 20.0556 18.8031 17.9802 19.9957 15.0382M8.0194 15.0382H4V19.0521",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})],504554)},581717,e=>{let t=e.i(504554).f;e.s(["f",0,t])},559173,e=>{e.s(["p",()=>l,"$",()=>o]);var t=e.i(997053),i=e.i(703089);let o=(e=i.g.body)=>t.m`
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
  `,a=t.m`
  margin-bottom: ${e=>e.$variant===i.g.caption?0:e.theme.margin.default};
  max-width: 700px;
  ${e=>o(e.$variant)}
`,l=t.U.p.withConfig({displayName:"Text.styles__Text",componentId:"sc-18bfeccb-0"})`
  ${a}
`},703089,e=>{e.s(["p",()=>l,"g",()=>a]);var t,i=e.i(843476),o=e.i(559173),a=((t={}).bodybig="bodybig",t.body="body",t.bodysmall="bodysmall",t.button="button",t.caption="caption",t.navigation="navigation",t);let l=({children:e,dataTestId:t="text-root",variant:a,className:l})=>(0,i.jsx)(o.p,{"data-testid":t,className:l,$variant:a,children:e})},852590,e=>{let t=e.i(703089).p;e.s(["f",0,t])},716816,e=>{let t=(0,e.i(770703).default)(()=>e.A(949557).then(e=>e.Default),{loadableGenerated:{modules:[672099]}});e.s(["DefaultLazy",0,t])},371653,e=>{var t=e.i(843476),i=e.i(271645),o=e.i(14431),a=e.i(997053),l=e.i(152186),r=e.i(856337),d=e.i(699779),n=e.i(929842),s=e.i(852590),m=e.i(703089);e.i(36380);var c=e.i(285393),h=e.i(825969),x=e.i(581717),f=e.i(118410);e.i(821194);var $=e.i(99222),g=e.i(716816);let w=a.U.div.withConfig({displayName:"error__ErrorContainer",componentId:"sc-217d736c-0"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 2rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  margin-top: 2rem;
`,p=a.U.div.withConfig({displayName:"error__IconWrapper",componentId:"sc-217d736c-1"})`
  margin-bottom: 1.5rem;
  color: ${f.h.ERROR};
  background: ${f.h.ERROR}15;
  border-radius: 50%;
  padding: 1rem;
`,R=a.U.div.withConfig({displayName:"error__ErrorCode",componentId:"sc-217d736c-2"})`
  font-size: 4rem;
  font-weight: 700;
  color: ${f.h.ERROR};
  margin-bottom: 0.5rem;
`,u=a.U.div.withConfig({displayName:"error__StyledText",componentId:"sc-217d736c-3"})`
  margin: 1rem 0 2rem;
  max-width: 400px;
`,O=a.U.div.withConfig({displayName:"error__DigestText",componentId:"sc-217d736c-4"})`
  font-size: 0.875rem;
  color: ${f.h.GREY_DARK};
  margin-bottom: 1.5rem;
`,C=a.U.div.withConfig({displayName:"error__ButtonGroup",componentId:"sc-217d736c-5"})`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
`;e.s(["default",0,function({error:e,reset:a}){let{tr:f}=(0,$.f)();return(0,i.useEffect)(()=>{console.error("Error:",e),o.y(e,{tags:{digest:e.digest}})},[e]),(0,t.jsx)(g.DefaultLazy,{children:(0,t.jsx)(l.f,{children:(0,t.jsx)(r.f,{xs:12,sm:12,mdOffset:3,md:6,lgOffset:4,lg:4,children:(0,t.jsxs)(w,{"data-testid":"error-page",children:[(0,t.jsx)(p,{children:(0,t.jsx)(x.f,{size:64})}),(0,t.jsx)(R,{"data-testid":"error-code",children:"500"}),(0,t.jsx)(d.f,{importance:n.D.h2,children:f("common.errorPage.error.title",{defaultValue:"Ein Fehler ist aufgetreten"})}),(0,t.jsx)(u,{children:(0,t.jsx)(s.f,{variant:m.g.body,children:f("common.errorPage.error.text",{defaultValue:"Es tut uns leid, aber ein unerwarteter Fehler ist aufgetreten. Bitte versuchen Sie es erneut oder kontaktieren Sie den Support, wenn das Problem weiterhin besteht."})})}),e.digest&&(0,t.jsx)(O,{children:f("common.errorPage.error.digest",{defaultValue:"Fehler-ID: {{digest}}",digest:e.digest})}),(0,t.jsxs)(C,{children:[(0,t.jsx)(c.f,{modifier:h.j.PRIMARY,onClick:()=>a(),dataTestId:"retry-button",children:f("common.errorPage.error.retry",{defaultValue:"Erneut versuchen"})}),(0,t.jsx)(c.f,{modifier:h.j.SECONDARY,onClick:()=>{window.location.href="/"},dataTestId:"home-button",children:f("common.errorPage.toHome",{defaultValue:"Zur Startseite"})})]})]})})})})}])}],949557,e=>{e.v(t=>Promise.all(["static/chunks/3jlbik5c7l9su.js","static/chunks/1vsovk6ou4bo9.js","static/chunks/2n8-ompxk03z5.js"].map(t=>e.l(t))).then(()=>t(672099)))}]);