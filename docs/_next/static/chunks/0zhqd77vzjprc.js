(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,[118410,e=>{let t={PRIMARY:"#00416E",SECONDARY:"#37BA24",WHITE:"#FFFFFF",BLACK:"#000000",GREY_LIGHT:"#F8F8F8",GREY:"#D8D8D8",GREY_DARK:"#687074",ERROR:"#DC0000",SUCCESS:"#37BA24",INFO:"#00416E",WARNING:"#FFCD00",BUTTON_PRIMARY_BG:"#292929",BUTTON_PRIMARY_TEXT:"#FFFFFF",BUTTON_SECONDARY_BG:"#EFCD00",BUTTON_SECONDARY_TEXT:"#292929",BUTTON_TERTIARY_BORDER:"#292929",BUTTON_DANGER_BG:"#E22F2F",HEADER_BG:"#F1FCFF",FOOTER_BG:"#1F2937",LINK_PRIMARY:"#8A2163",TEAL:"#5DE8D2",ORANGE:"#FF8A75",CORAL:"#FFBA4D",PURPLE:"#B97AFF",TRAFFIC_GREEN:"#22C55E",TRAFFIC_YELLOW:"#EAB308",TRAFFIC_RED:"#EF4444",TRAFFIC_GREY:"#D1D5DB",AUCTION:"#EF4444",MICROSOFT:"#4DA3FF"},i={COLOR_1:"#e8c1a0",COLOR_2:"#f47560",COLOR_3:"#f1e15b",COLOR_4:"#e8a838",COLOR_5:"#61cdbb",COLOR_6:"#97e3d5",COLOR_7:"#b5cf6b",COLOR_8:"#d6e685",COLOR_9:"#a6d854",COLOR_10:"#8dd1e1"},o={plastship:[t.PRIMARY,t.SECONDARY,t.WARNING,t.LINK_PRIMARY,t.BUTTON_PRIMARY_BG,t.BUTTON_SECONDARY_BG,t.GREY_DARK,t.INFO,t.SUCCESS,t.ERROR],categorical:["#2a78d6","#eb6834","#1baf7a","#eda100","#e87ba4","#008300","#4a3aa7","#e34948"],status:[t.SUCCESS,t.INFO,t.WARNING,t.ERROR],nivo:[i.COLOR_1,i.COLOR_2,i.COLOR_3,i.COLOR_4,i.COLOR_5,i.COLOR_6,i.COLOR_7,i.COLOR_8,i.COLOR_9,i.COLOR_10]},n={"#00416e":"#60A0E8","#292929":"#BDC3C7","#000000":"#E5E7EB","#687074":"#9CA3AF","#889396":"#9CA3AF","#8a2163":"#D38AB1","#4a3aa7":"#8F84E8","#008300":"#3FBF3F"};e.s(["W",0,i,"g",0,o,"h",0,t,"C",0,(e,t)=>t?n[e.toLowerCase()]??e:e,"T",0,(e,t)=>{let i=e.replace("#",""),o=parseInt(i.substring(0,2),16),n=parseInt(i.substring(2,4),16),a=parseInt(i.substring(4,6),16);return`rgba(${o}, ${n}, ${a}, ${t})`}])},994244,e=>{var t=e.i(997053);let i=t.m`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  white-space: nowrap;
  border: 0;
`;e.s(["m",0,()=>t.m`
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`,"p",0,i])},10059,e=>{var t=e.i(997053);let i=t.U.div.withConfig({displayName:"Row.styles__Root",componentId:"sc-3e89f65f-0"})`
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
`;e.s(["f",0,i])},152186,856337,e=>{var t=e.i(843476),i=e.i(10059);e.s(["f",0,e=>{let{children:o,dataTestId:n}=e;return(0,t.jsx)(i.f,{className:[e.className,"row"].filter(Boolean).join(" "),"data-testid":n||"Row-root",children:o})}],152186);var o=e.i(997053);let n=e=>`${e/12*100}%`,a=e=>Array.from({length:12},(t,i)=>`&.col-${e}-offset-${i} { margin-left: ${n(i)}; }`).join("\n  "),l=o.U.div.withConfig({displayName:"Col.styles__Root",componentId:"sc-8cb234a0-0"})`
  container-type: inline-size;
  container-name: grid-col;
  box-sizing: border-box;
  padding: 0 12px;
  margin-bottom: 12px;

  /* XS - Mobile (default) */
  &.col-xs-1 { flex: 0 0 ${n(1)}; max-width: ${n(1)}; }
  &.col-xs-2 { flex: 0 0 ${n(2)}; max-width: ${n(2)}; }
  &.col-xs-3 { flex: 0 0 ${n(3)}; max-width: ${n(3)}; }
  &.col-xs-4 { flex: 0 0 ${n(4)}; max-width: ${n(4)}; }
  &.col-xs-5 { flex: 0 0 ${n(5)}; max-width: ${n(5)}; }
  &.col-xs-6 { flex: 0 0 ${n(6)}; max-width: ${n(6)}; }
  &.col-xs-7 { flex: 0 0 ${n(7)}; max-width: ${n(7)}; }
  &.col-xs-8 { flex: 0 0 ${n(8)}; max-width: ${n(8)}; }
  &.col-xs-9 { flex: 0 0 ${n(9)}; max-width: ${n(9)}; }
  &.col-xs-10 { flex: 0 0 ${n(10)}; max-width: ${n(10)}; }
  &.col-xs-11 { flex: 0 0 ${n(11)}; max-width: ${n(11)}; }
  &.col-xs-12 { flex: 0 0 ${n(12)}; max-width: ${n(12)}; }

  ${a("xs")}

  /* SM - Tablet (min-width: 576px) */
  @media (min-width: 576px) {
    &.col-sm-1 { flex: 0 0 ${n(1)}; max-width: ${n(1)}; }
    &.col-sm-2 { flex: 0 0 ${n(2)}; max-width: ${n(2)}; }
    &.col-sm-3 { flex: 0 0 ${n(3)}; max-width: ${n(3)}; }
    &.col-sm-4 { flex: 0 0 ${n(4)}; max-width: ${n(4)}; }
    &.col-sm-5 { flex: 0 0 ${n(5)}; max-width: ${n(5)}; }
    &.col-sm-6 { flex: 0 0 ${n(6)}; max-width: ${n(6)}; }
    &.col-sm-7 { flex: 0 0 ${n(7)}; max-width: ${n(7)}; }
    &.col-sm-8 { flex: 0 0 ${n(8)}; max-width: ${n(8)}; }
    &.col-sm-9 { flex: 0 0 ${n(9)}; max-width: ${n(9)}; }
    &.col-sm-10 { flex: 0 0 ${n(10)}; max-width: ${n(10)}; }
    &.col-sm-11 { flex: 0 0 ${n(11)}; max-width: ${n(11)}; }
    &.col-sm-12 { flex: 0 0 ${n(12)}; max-width: ${n(12)}; }

    ${a("sm")}
  }

  /* MD - Desktop (min-width: 768px) */
  @media (min-width: 768px) {
    &.col-md-1 { flex: 0 0 ${n(1)}; max-width: ${n(1)}; }
    &.col-md-2 { flex: 0 0 ${n(2)}; max-width: ${n(2)}; }
    &.col-md-3 { flex: 0 0 ${n(3)}; max-width: ${n(3)}; }
    &.col-md-4 { flex: 0 0 ${n(4)}; max-width: ${n(4)}; }
    &.col-md-5 { flex: 0 0 ${n(5)}; max-width: ${n(5)}; }
    &.col-md-6 { flex: 0 0 ${n(6)}; max-width: ${n(6)}; }
    &.col-md-7 { flex: 0 0 ${n(7)}; max-width: ${n(7)}; }
    &.col-md-8 { flex: 0 0 ${n(8)}; max-width: ${n(8)}; }
    &.col-md-9 { flex: 0 0 ${n(9)}; max-width: ${n(9)}; }
    &.col-md-10 { flex: 0 0 ${n(10)}; max-width: ${n(10)}; }
    &.col-md-11 { flex: 0 0 ${n(11)}; max-width: ${n(11)}; }
    &.col-md-12 { flex: 0 0 ${n(12)}; max-width: ${n(12)}; }

    ${a("md")}
  }

  /* LG - Large Desktop (min-width: 992px) */
  @media (min-width: 992px) {
    &.col-lg-1 { flex: 0 0 ${n(1)}; max-width: ${n(1)}; }
    &.col-lg-2 { flex: 0 0 ${n(2)}; max-width: ${n(2)}; }
    &.col-lg-3 { flex: 0 0 ${n(3)}; max-width: ${n(3)}; }
    &.col-lg-4 { flex: 0 0 ${n(4)}; max-width: ${n(4)}; }
    &.col-lg-5 { flex: 0 0 ${n(5)}; max-width: ${n(5)}; }
    &.col-lg-6 { flex: 0 0 ${n(6)}; max-width: ${n(6)}; }
    &.col-lg-7 { flex: 0 0 ${n(7)}; max-width: ${n(7)}; }
    &.col-lg-8 { flex: 0 0 ${n(8)}; max-width: ${n(8)}; }
    &.col-lg-9 { flex: 0 0 ${n(9)}; max-width: ${n(9)}; }
    &.col-lg-10 { flex: 0 0 ${n(10)}; max-width: ${n(10)}; }
    &.col-lg-11 { flex: 0 0 ${n(11)}; max-width: ${n(11)}; }
    &.col-lg-12 { flex: 0 0 ${n(12)}; max-width: ${n(12)}; }

    ${a("lg")}
  }
`;e.s(["f",0,e=>{let{xs:i,xsOffset:o,sm:n,smOffset:a,md:r,mdOffset:d,lg:s,lgOffset:m,children:c,dataTestId:h,dataAttributes:f}=e,x=[void 0!==i&&`col-xs-${i}`,void 0!==o&&`col-xs-offset-${o}`,void 0!==n&&`col-sm-${n}`,void 0!==a&&`col-sm-offset-${a}`,void 0!==r&&`col-md-${r}`,void 0!==d&&`col-md-offset-${d}`,void 0!==s&&`col-lg-${s}`,void 0!==m&&`col-lg-offset-${m}`].filter(Boolean);return(0,t.jsx)(l,{className:[e.className,...x].filter(Boolean).join(" "),...f,"data-testid":h??"Col-root",children:c})}],856337)},929842,619249,e=>{e.s(["K",()=>s,"D",()=>d],929842),e.s(["W",()=>r,"B",()=>a],619249);var t,i=e.i(843476),o=e.i(997053);let n=o.m`
  word-wrap: break-word;
  width: 100%;
  margin-bottom: ${({theme:e})=>e.margin.default};
  font-family: ${({theme:e})=>e.font.primaryFamily};
  text-transform: uppercase;
  word-wrap: break-word;
`,a=(e,t="desktop")=>o.m`
  ${({theme:i})=>{let n=i.font.headline[(e=>{switch(e){case d.h1:return"one";case d.h2:return"two";case d.h3:return"three";case d.h4:return"four";case d.h5:return"five";default:return"one"}})(e)][t];return o.m`
      font-size: ${n.fontSize};
      line-height: ${n.lineHeight};
      font-weight: ${n.fontWeight};
      letter-spacing: ${n.letterSpacing};
    `}}
`,l=o.m`
  ${n}
  ${({$styleLevel:e})=>a(e,"mobile")}

  @media screen and (min-width: ${({theme:e})=>e.device.mobile}) {
    ${({$styleLevel:e})=>a(e,"desktop")}
  }
`,r=o.U.h1.withConfig({displayName:"Headline.styles__StyledHeadline",componentId:"sc-aba532a1-0"})`
  ${l}
`;var d=((t={})[t.h1=1]="h1",t[t.h2=2]="h2",t[t.h3=3]="h3",t[t.h4=4]="h4",t[t.h5=5]="h5",t);let s=e=>{let{children:t,className:o,importance:n,renderAs:a,dataTestId:l}=e;return(0,i.jsx)(r,{as:(e=>{switch(e){case 1:default:return"h1";case 2:return"h2";case 3:return"h3";case 4:return"h4";case 5:return"h5"}})(n),$styleLevel:a||n,className:o,"data-testid":l||"Headline-root",children:t})}},699779,e=>{let t=e.i(929842).K;e.s(["f",0,t])},160458,e=>{var t=e.i(843476),i=e.i(997053);let o=i.U.svg.withConfig({displayName:"IconSearch.styles__Root",componentId:"sc-b6a7d21c-0"})``;e.s(["f",0,e=>(0,t.jsx)(o,{...e,width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:e.className,"data-testid":"icon-search-root",children:(0,t.jsx)("path",{d:"M16.9265 17.0401L20.3996 20.4001M11.3996 7.2001C13.3878 7.2001 14.9996 8.81187 14.9996 10.8001M19.2796 11.4401C19.2796 15.77 15.7695 19.2801 11.4396 19.2801C7.1097 19.2801 3.59961 15.77 3.59961 11.4401C3.59961 7.11018 7.1097 3.6001 11.4396 3.6001C15.7695 3.6001 19.2796 7.11018 19.2796 11.4401Z",stroke:e.strokeColor||"currentColor",strokeWidth:"2",strokeLinecap:"round"})})],160458)},696986,e=>{let t=e.i(160458).f;e.s(["f",0,t])},247902,609946,646436,e=>{var t=e.i(843476),i=e.i(271645),o=e.i(130629),n=e.i(818579),a=e.i(83608),l=e.i(825969);e.i(315481);var r=e.i(10003),d=e.i(997053);let s=(0,d.U)(r.NavLink).withConfig({displayName:"LinkButton.styles__StyledLink",componentId:"sc-9fe03ebd-0"})`
  ${n.X}
  text-decoration: none;
  /* Browser-Vorgabe für fokussierte Links ist 1px Abstand — der Button hat keinen */
  outline-offset: 0;

  ${n.I}
  ${n.R}

  /*
   * Schriftfarbe der Variante halten: globale a- und a:hover-Regeln (0,1,1) schlagen eine
   * Klasse, deshalb die doppelte. Atom/Box färbt Links darin mit !important (#1519) —
   * dagegen gewinnt nur !important auf der höheren Spezifität.
   */
  &&,
  &&:hover {
    color: var(--button-fg) !important;
    text-decoration: none;
  }

  ${({$disabled:e})=>e?d.m`
          opacity: 0.5;
          cursor: not-allowed;
          pointer-events: none;
        `:d.m`
          /* Atom/Box blendet Links darin beim Hover ab (0,2,1) — ein Knopf bleibt deckend */
          &&:hover {
            opacity: 1;
          }
        `}
`;e.s(["f",0,s],609946),e.i(942673);var m=e.i(271409),c=e.i(138749),h=e.i(437992);let f=({children:e,href:r,modifier:d=l.j.PRIMARY,icon:f,iconAlign:x,loading:$=!1,disabled:p=!1,background:u,target:w,label:g,tooltip:b,isActive:R,color:C,onClick:_,className:O,dataTestId:v="link-button-root"})=>{let A=p||$,k=$&&(x||l.W.RIGHT),F=f&&!$&&x,y=f?i.default.cloneElement(f,{color:(0,a.U)(d)}):null;return(0,t.jsxs)(s,{href:r,className:O,"data-testid":v,"data-modifier":d,"aria-label":g,"aria-disabled":A||void 0,tabIndex:A?-1:void 0,...(0,h.a)(r,{target:w}),title:b,onClick:_,$modifier:d,$background:u,$icon:void 0!==f,$isActive:R,$color:C,$disabled:A,children:[(k||F)&&x===l.W.LEFT&&(0,t.jsx)(n.m,{children:$?(0,t.jsx)(o.f,{}):y}),(0,t.jsx)(n.p,{$background:u,children:e}),!g&&(0,t.jsx)(m.LinkPurpose,{text:(0,c.A)(e),href:r,dataTestId:`${v}-purpose`}),(k||F)&&x===l.W.RIGHT&&(0,t.jsx)(n.w,{children:$?(0,t.jsx)(o.f,{}):y}),$&&!x&&(0,t.jsx)(n.w,{children:(0,t.jsx)(o.f,{})})]})};e.s(["f",0,f],646436),e.s(["f",0,f],247902)},271409,138749,e=>{var t=e.i(843476);let i=new Set(["hier","hier klicken","klicken sie hier","hier entlang","mehr","mehr dazu","mehr erfahren","mehr infos","mehr informationen","weiter","weiterlesen","link","dieser link","zum link","here","click here","click this","go","learn more","more","more info","more information","read more","right here","start","this","this link"]),o="https://plastship.invalid",n={pdf:"PDF",doc:"DOC",docx:"DOCX",xls:"XLS",xlsx:"XLSX",csv:"CSV",zip:"ZIP",ppt:"PPT",pptx:"PPTX"};function a(e,t){let a;return""!==(a=e.replace(/\s+/g," ").trim().replace(/^[\s.,;:!?»«„“”"'()[\]…→>-]+|[\s.,;:!?»«„“”"'()[\]…→>-]+$/g,"").toLowerCase())&&i.has(a)?function(e){let t;if(!e)return null;let i=e.trim();if(""===i||i.startsWith("#")||/^(mailto|tel|javascript):/i.test(i))return null;try{t=new URL(i,o)}catch{return null}let a=t.pathname.split("/").filter(Boolean),l=a.length>0?decodeURIComponent(a[a.length-1]):"",r=/\.([a-z0-9]{2,5})$/i.exec(l)?.[1]?.toLowerCase(),d=r?n[r]:void 0,s=t.origin!==o&&!/(^|\.)plastship\.(com|de|org)$/i.test(t.hostname),m=t.hostname.replace(/^www\./i,""),c=[];d&&c.push(d),s?c.push(m):!d&&l&&c.push(l.replace(/\.[a-z0-9]{2,5}$/i,"").replace(/[-_]+/g," ").trim());let h=c.filter(Boolean).join(", ");return""===h?null:h}(t):null}e.s(["j",0,a,"A",0,function e(t){if(null==t||"boolean"==typeof t)return"";if("string"==typeof t||"number"==typeof t)return String(t);if(Array.isArray(t))return t.map(e).join("");if("object"==typeof t&&"props"in t){let i=t.props;return e(i?.children)}return""}],138749);var l=e.i(997053),r=e.i(994244);let d=l.U.span.withConfig({displayName:"LinkPurpose.styles__Hint",componentId:"sc-bae58da4-0"})`
  ${r.p}
`;e.s(["LinkPurpose",0,function({text:e,href:i,dataTestId:o="link-purpose"}){let n=a(e,i);return n?(0,t.jsx)(d,{"data-testid":o,children:` (${n})`}):null}],271409)},942673,e=>{e.i(271409),e.s([])},559173,e=>{e.s(["p",()=>a,"$",()=>o]);var t=e.i(997053),i=e.i(703089);let o=(e=i.g.body)=>t.m`
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
  ${e=>o(e.$variant)}
`,a=t.U.p.withConfig({displayName:"Text.styles__Text",componentId:"sc-18bfeccb-0"})`
  ${n}
`},703089,e=>{e.s(["p",()=>a,"g",()=>n]);var t,i=e.i(843476),o=e.i(559173),n=((t={}).bodybig="bodybig",t.body="body",t.bodysmall="bodysmall",t.button="button",t.caption="caption",t.navigation="navigation",t);let a=({children:e,dataTestId:t="text-root",variant:n,className:a})=>(0,i.jsx)(o.p,{"data-testid":t,className:a,$variant:n,children:e})},852590,e=>{let t=e.i(703089).p;e.s(["f",0,t])},716816,e=>{let t=(0,e.i(770703).default)(()=>e.A(949557).then(e=>e.Default),{loadableGenerated:{modules:[672099]}});e.s(["DefaultLazy",0,t])},805510,e=>{var t=e.i(843476),i=e.i(618566),o=e.i(997053),n=e.i(152186),a=e.i(856337),l=e.i(699779),r=e.i(929842),d=e.i(852590),s=e.i(703089);e.i(36380);var m=e.i(285393),c=e.i(247902),h=e.i(825969),f=e.i(696986),x=e.i(118410),$=e.i(696984);let p=o.U.div.withConfig({displayName:"not-found-content__ErrorContainer",componentId:"sc-5dc3d51f-0"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 2rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  margin-top: 2rem;
`,u=o.U.div.withConfig({displayName:"not-found-content__IconWrapper",componentId:"sc-5dc3d51f-1"})`
  margin-bottom: 1.5rem;
  color: ${x.h.GREY_DARK};
  background: ${x.h.GREY_LIGHT};
  border-radius: 50%;
  padding: 1rem;
`,w=o.U.div.withConfig({displayName:"not-found-content__ErrorCode",componentId:"sc-5dc3d51f-2"})`
  font-size: 4rem;
  font-weight: 700;
  color: ${x.h.GREY_DARK};
  margin-bottom: 0.5rem;
`,g=o.U.div.withConfig({displayName:"not-found-content__StyledText",componentId:"sc-5dc3d51f-3"})`
  margin: 1rem 0 2rem;
  max-width: 400px;
`,b=o.U.div.withConfig({displayName:"not-found-content__ButtonGroup",componentId:"sc-5dc3d51f-4"})`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
`;e.s(["default",0,function(){let e=(0,i.useRouter)(),{tr:o}=(0,$.w)();return(0,t.jsx)(n.f,{children:(0,t.jsx)(a.f,{xs:12,sm:12,mdOffset:3,md:6,lgOffset:4,lg:4,children:(0,t.jsxs)(p,{"data-testid":"not-found-error-page",children:[(0,t.jsx)(u,{children:(0,t.jsx)(f.f,{size:64})}),(0,t.jsx)(w,{"data-testid":"error-code",children:"404"}),(0,t.jsx)(l.f,{importance:r.D.h1,renderAs:r.D.h2,dataTestId:"not-found-heading",children:o("common.errorPage.notFound.title",{defaultValue:"Seite nicht gefunden"})}),(0,t.jsx)(g,{"data-testid":"not-found-text",children:(0,t.jsx)(d.f,{variant:s.g.body,children:o("common.errorPage.notFound.text",{defaultValue:"Die angeforderte Seite konnte nicht gefunden werden. Möglicherweise wurde sie verschoben oder existiert nicht mehr."})})}),(0,t.jsxs)(b,{children:[(0,t.jsx)(c.f,{href:"/dashboard/",modifier:h.j.PRIMARY,dataTestId:"dashboard-button",children:o("common.errorPage.toDashboard",{defaultValue:"Zum Dashboard"})}),(0,t.jsx)(c.f,{href:"/",modifier:h.j.SECONDARY,dataTestId:"home-button",children:o("common.errorPage.toHome",{defaultValue:"Zur Startseite"})}),(0,t.jsx)(m.f,{modifier:h.j.SECONDARY,onClick:()=>{e.back()},dataTestId:"back-button",children:o("common.back",{defaultValue:"Zurück"})})]})]})})})}])}],949557,e=>{e.v(t=>Promise.all(["static/chunks/2rwofn_109kog.js","static/chunks/0lp9gpwxl_qak.js","static/chunks/2n8-ompxk03z5.js","static/chunks/2xw-f_ynh4y18.js"].map(t=>e.l(t))).then(()=>t(672099)))}]);