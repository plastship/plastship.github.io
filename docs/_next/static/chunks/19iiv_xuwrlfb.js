(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,370891,114009,e=>{var t=e.i(843476),i=e.i(495835);e.i(821194);var a=e.i(99222);let n={assistant:{key:"ai.label.assistant",defaultValue:"KI-Assistent: Antworten werden von einer KI erzeugt und können Fehler enthalten."},voice:{key:"ai.label.voice",defaultValue:"KI-Sprachfunktion: Ihre Sprache wird per KI in Text umgewandelt, Antworten liest eine synthetische Stimme vor."},machineTranslation:{key:"ai.label.machineTranslation",defaultValue:"Diese Fassung wurde mit KI maschinell übersetzt."},analysis:{key:"ai.label.analysis",defaultValue:"KI-Analyse"},machineUiTranslation:{key:"ai.label.machineUiTranslation",defaultValue:"Die Oberfläche ist in dieser Sprache teilweise maschinell übersetzt."}},o={key:"ai.label.badge",defaultValue:"KI"},s={key:"ai.label.original",defaultValue:"Zur deutschen Originalfassung"};e.s(["Z",0,o,"N",0,s,"l",0,n,"O",0,function(e){return!!(e&&(e.aiAnalyzedAt||e.aiModel))},"m",0,function(e,t){return!!t?.includes(e)}],114009);var l=e.i(178446),r=e.i(997053);let d=r.U.span.withConfig({displayName:"AiLabel.styles__Root",componentId:"sc-107ca0c3-0"})`
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  gap: ${({theme:e})=>e.margin.extrasmall};
  font-family: ${({theme:e})=>e.font.secondaryFamily};
  font-size: ${({theme:e})=>e.font.text.caption.desktop.fontSize};
  line-height: ${({theme:e})=>e.font.text.caption.desktop.lineHeight};
  color: inherit;
`,c=r.U.span.withConfig({displayName:"AiLabel.styles__Badge",componentId:"sc-107ca0c3-1"})`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.margin.extrasmall};
  padding: 0 ${({theme:e})=>e.padding.small};
  border: 1px solid currentColor;
  border-radius: 999px;
  font-weight: 700;
  white-space: nowrap;

  svg {
    width: 1em;
    height: 1em;
  }
`,p=r.U.span.withConfig({displayName:"AiLabel.styles__Text",componentId:"sc-107ca0c3-2"})``,f=r.U.a.withConfig({displayName:"AiLabel.styles__OriginalLink",componentId:"sc-107ca0c3-3"})`
  color: inherit;
  text-decoration: underline;
`;e.s(["f",0,({kind:e,dataTestId:r,compact:m=!1,originalHref:h,className:g})=>{let{tr:u}=(0,a.f)(),x=u(n[e].key,{defaultValue:n[e].defaultValue});return(0,t.jsxs)(d,{className:g,"data-testid":r??`ai-label-${e}`,"data-kind":e,role:"note",title:m?x:void 0,"aria-label":m?x:void 0,children:[(0,t.jsxs)(c,{"data-testid":`${r??`ai-label-${e}`}-badge`,children:[(0,t.jsx)(i.f,{}),u(o.key,{defaultValue:o.defaultValue})]}),!m&&(0,t.jsx)(p,{children:x}),h&&(0,t.jsx)(f,{href:(0,l.f)(h),hrefLang:"de","data-testid":`${r??`ai-label-${e}`}-original`,children:u(s.key,{defaultValue:s.defaultValue})})]})}],370891)},411206,173972,e=>{var t=e.i(843476),i=e.i(271645),a=e.i(618566);e.i(821194);var n=e.i(99222),o=e.i(476999),s=e.i(14431),l=e.i(713347),r=e.i(635647),d=e.i(891567),c=e.i(997053);let p=c.m`
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
`,f=c.U.a.withConfig({displayName:"ContactLink.styles__Link",componentId:"sc-41592123-0"})`
  ${p}
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
`,m=c.U.span.withConfig({displayName:"ContactLink.styles__Plain",componentId:"sc-41592123-1"})`
  ${p}
`,h={tel:{key:"contactLink.aria.tel",fallback:"Anrufen: {{value}}"},mail:{key:"contactLink.aria.mail",fallback:"E-Mail schreiben an {{value}}"},map:{key:"contactLink.aria.map",fallback:"Auf der Karte zeigen: {{value}}"}};e.s(["f",0,({kind:e,value:c,place:p,geo:g,subject:u,icon:x,children:b,dataTestId:y,className:w})=>{let{tr:v}=(0,n.f)(),$=(0,a.usePathname)(),k="string"==typeof c?c.trim():"",_=(0,l.useSiteLocale)(),j="tel"===e?(0,r.A)(k):"mail"===e?(0,r.c)(k,u):(0,r.W)({query:k,geo:g},_),C=(0,i.useCallback)(()=>{(0,o.q)($||"/",d.F,{kind:e,place:p}),s.v({category:"contact",message:d.F,data:{kind:e,place:p}})},[$,e,p]),I=y??`contact-link-${e}`,N=(0,t.jsxs)(t.Fragment,{children:[x,b??k]});if(!k)return null;if(!j)return(0,t.jsx)(m,{className:w,"data-testid":I,"data-kind":e,"data-linked":"false",children:N});let U=k.replace(/\s*\n\s*/g,", ");return(0,t.jsx)(f,{className:w,href:j,onClick:C,"aria-label":v(h[e].key,{value:U,defaultValue:h[e].fallback}),"data-testid":I,"data-kind":e,"data-linked":"true",children:N})}],173972),e.s([],411206)},813267,e=>{var t=e.i(843476),i=e.i(997053);let a=i.U.svg.withConfig({displayName:"IconLocation.styles__Root",componentId:"sc-d4764d0b-0"})``;e.s(["f",0,e=>(0,t.jsxs)(a,{className:e.className,"data-testid":"icon-location-root",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:[(0,t.jsx)("path",{d:"M4.5 9.75768C4.5 15.5 12 22 12 22C12 22 19.5 15.5 19.5 9.75768C19.5 4.81181 15.6559 2 12 2C8.34409 2 4.5 4.81181 4.5 9.75768Z",stroke:"currentColor",strokeWidth:"2",strokeLinejoin:"round"}),(0,t.jsx)("circle",{cx:"12",cy:"9.5",r:"2.5",stroke:"currentColor",strokeWidth:"2"})]})],813267)},874142,e=>{let t=e.i(215063).f;e.s(["f",0,t])},318341,864648,e=>{var t=e.i(843476),i=e.i(370891),a=e.i(114009),n=e.i(997053);let o=n.U.div.withConfig({displayName:"CmsAiNotices.styles__Root",componentId:"sc-99743ee3-0"})`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.margin.extrasmall};
  margin-bottom: ${({theme:e})=>e.margin.small};
`;e.s(["f",0,({locale:e,language:n,machineLocales:s,machineUiLocales:l,originalHref:r,testIdPrefix:d})=>{let c=(0,a.m)(e,s),p=!!l?.includes(n);return c||p?(0,t.jsxs)(o,{"data-testid":`${d}-ai-notices`,children:[c&&(0,t.jsx)(i.f,{kind:"machineTranslation",dataTestId:`${d}-ai-label`,originalHref:r}),p&&(0,t.jsx)(i.f,{kind:"machineUiTranslation",dataTestId:`${d}-ai-label-ui`,compact:!0})]}):null}],864648),e.s([],318341)},538915,226129,600639,546843,e=>{var t=e.i(843476),i=e.i(997053);e.i(315481);var a=e.i(10003),n=e.i(547905),o=e.i(136717);let s=e=>(0,o.L)(e.palette.footer.backgroundEnd),l=e=>(0,o.p)(e.palette.footer.backgroundEnd),r=(e,t)=>l(e)?`rgba(255, 255, 255, ${t})`:`rgba(33, 37, 41, ${t})`;var d=e.i(474704),c=e.i(807897);let p=i.U.footer.withConfig({displayName:"Footer.styles__Root",componentId:"sc-809a1aba-0"})`
  width: 100%;
  /* #2164: Verlauf aus dem Theme, in beiden Modi dunkel; Schrift aus dem Kontrast (footerColors) */
  background: linear-gradient(
    to top,
    ${({theme:e})=>e.palette.footer.background},
    ${({theme:e})=>e.palette.footer.backgroundEnd}
  );
  color: ${({theme:e})=>s(e)};
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
    color: ${({theme:e})=>s(e)};
  }
`,f=i.U.div.withConfig({displayName:"Footer.styles__BottomBar",componentId:"sc-809a1aba-1"})`
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
      ${({theme:e})=>r(e,0)},
      ${({theme:e})=>r(e,.22)} 50%,
      ${({theme:e})=>r(e,0)}
    );
  }

  @media only screen and (max-width: 639px) {
    flex-direction: column-reverse;
    align-items: flex-start;
  }
`,m=i.U.span.withConfig({displayName:"Footer.styles__Copyright",componentId:"sc-809a1aba-2"})`
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
    color: ${({theme:e})=>s(e)};
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
`,g=i.U.button.withConfig({displayName:"Footer.styles__FooterMetaButton",componentId:"sc-809a1aba-4"})`
  padding: 0;
  border: 0;
  background: none;
  font: inherit;
  cursor: pointer;
  color: ${({theme:e})=>s(e)};
  text-decoration: none;

  &:hover,
  &:focus-visible {
    text-decoration: underline;
  }
`,u=(0,i.U)(a.NavLink).withConfig({displayName:"Footer.styles__FooterLink",componentId:"sc-809a1aba-5"})`
  color: inherit;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`,x=(c.s.height-c.m)/c.s.width*133,b=(0,i.U)(a.NavLink).withConfig({displayName:"Footer.styles__LogoLink",componentId:"sc-809a1aba-6"})`
  display: inline-block;
  /* gestapelt: Luft zur ersten Gruppe; unter der Grundlinie, verschiebt sie nicht */
  padding-bottom: ${({theme:e})=>e.margin.small};
  text-decoration: none;

  && svg {
    display: inline;
    width: ${133}px;
    height: auto;
    vertical-align: baseline;
    margin-bottom: ${-x}px;
  }
`,y=i.U.div.withConfig({displayName:"Footer.styles__FooterRow",componentId:"sc-809a1aba-7"})`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  /* gestapelt (Telefon): Abstand zwischen Logo und erster Gruppe */
  row-gap: ${({theme:e})=>e.margin.small};
  width: 100%;
  margin: 0 auto;
  ${d.K}

  /* Abstand Inhalt → Fußzeile (früher margin-bottom von Row und Col) */
  &:not(:last-child) {
    margin-bottom: ${({theme:e})=>e.margin.default};
  }
`,w=i.U.div.withConfig({displayName:"Footer.styles__FooterColumn",componentId:"sc-809a1aba-8"})`
  ${({$columns:e})=>(0,d.D)(e)}
`,v=i.U.div.withConfig({displayName:"Footer.styles__FooterSection",componentId:"sc-809a1aba-9"})`
  margin-bottom: 20px;
`,$=i.U.ul.withConfig({displayName:"Footer.styles__ContactList",componentId:"sc-809a1aba-10"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 0;
  padding: 0;
  list-style: none;
`,k=i.U.li.withConfig({displayName:"Footer.styles__ContactItem",componentId:"sc-809a1aba-11"})`
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
    color: ${({theme:e})=>s(e)};
  }

  && > a:hover {
    text-decoration: underline;
  }
`,_=i.U.h2.withConfig({displayName:"Footer.styles__FooterSectionTitle",componentId:"sc-809a1aba-12"})`
  && {
    color: ${({theme:e})=>s(e)};
  }
  font-size: 1rem;
  font-weight: 700;
  margin: 0 0 16px;
  text-transform: uppercase;
`,j=i.U.nav.withConfig({displayName:"Footer.styles__FooterLinks",componentId:"sc-809a1aba-13"})`
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
    color: ${({theme:e})=>s(e)};
  }

  && a:hover,
  && a:focus-visible {
    text-decoration: underline;
  }
`;var C=e.i(424734);e.i(821194);var I=e.i(99222),N=e.i(722216),U=e.i(507924),F=e.i(284248),S=e.i(891567);let L=[{titleKey:"footer.sections.links",links:[{href:"/team",labelKey:"footer.team"},{href:"/faq",labelKey:"footer.faq"},{href:"/about",labelKey:"footer.about"},{href:"/news",labelKey:"footer.latest"},{href:"/contact-us",labelKey:"footer.contactForm"},{href:"/services",labelKey:"footer.services"}]}],K={titleKey:"footer.contact",email:S._.info,phone:S.h.central,address:S.Y},T=[{href:"/agb",labelKey:"footer.terms"},{href:"/imprint",labelKey:"footer.imprint"},{href:"/privacy",labelKey:"footer.privacy"},{href:"/email-disclaimer",labelKey:"footer.emailDisclaimer"},{href:"/accessibility",labelKey:"footer.accessibility"}];e.i(411206);var z=e.i(173972),A=e.i(317573),V=e.i(757658),R=e.i(874142),D=e.i(813267);e.i(710788);var H=e.i(363451);e.i(311046);var W=e.i(499881);let M={logo:{xs:{span:12,offset:0},md:{span:3,offset:0},lg:{span:2,offset:0}},section:{xs:{span:12,offset:0},sm:{span:6,offset:0},md:{span:4,offset:0}},contact:{xs:{span:12,offset:0},sm:{span:6,offset:0},md:{span:5,offset:0},lg:{span:4,offset:0}},bottom:{xs:{span:12,offset:0}}},B=e=>({$columns:M[e],"data-columns":(0,d.m)(M[e])}),O={top:{placement:"inner",color:"white"}};e.s(["f",0,e=>{let a=e.edges??O,{tr:n}=(0,I.f)(),o=(0,i.i)(),{footer:s}=(0,N.f)(),r=(0,F.C)();return(0,t.jsxs)(p,{className:e.className,"data-testid":"footer-root","data-edge-contrast":a.top?.contrast??"",$edges:a,children:[(0,W.N)(a)&&(0,t.jsx)(H.f,{edges:a,dataTestId:"footer-root-edge"}),(0,t.jsxs)(y,{"data-testid":"footer-row","data-site-row":"true",children:[(0,t.jsx)(w,{"data-testid":"footer-logo-column",...B("logo"),children:(0,t.jsx)(b,{href:"/","aria-label":n("footer.logo.ariaLabel",{defaultValue:"plastship – zur Startseite"}),"data-testid":"footer-logo-link",children:(0,t.jsx)(C.f,{inverted:!o?.palette?.footer||l(o),monochrome:!0})})}),(0,t.jsx)(t.Fragment,{children:s.length>0?s.map((e,i)=>(0,t.jsx)(w,{...B("section"),children:(0,t.jsxs)(v,{"data-testid":`footer-cms-section-${i}`,"data-count":e.children?.length??0,children:[(0,t.jsx)(_,{"data-testid":`footer-cms-section-${i}-title`,children:(0,U.u)(e.label,r)}),(0,t.jsx)(j,{children:(e.children??[]).map((e,a)=>(0,t.jsx)(u,{href:e.href,"data-testid":`footer-cms-section-${i}-link-${a}`,children:(0,U.u)(e.label,r)},`${e.href}-${a}`))})]})},`${e.href}-${i}`)):L.map((e,i)=>(0,t.jsx)(w,{...B("section"),children:(0,t.jsxs)(v,{"data-testid":`footer-section-${i}`,"data-count":e.links.length,children:[(0,t.jsx)(_,{"data-testid":`footer-section-${i}-title`,children:n(e.titleKey)}),(0,t.jsx)(j,{children:e.links.map(e=>(0,t.jsx)(u,{href:e.href,"data-testid":`footer-link-${e.href.replace(/^\//,"").replace(/\//g,"-")}`,children:n(e.labelKey)},e.href))})]})},e.titleKey))}),(0,t.jsx)(w,{"data-testid":"footer-contact-column",...B("contact"),children:(0,t.jsxs)(v,{"data-testid":"footer-contact",children:[(0,t.jsx)(_,{"data-testid":"footer-contact-title",children:n(K.titleKey)}),(0,t.jsxs)($,{children:[(0,t.jsx)(k,{children:(0,t.jsx)(z.f,{kind:"mail",value:K.email,place:"footer",icon:(0,t.jsx)(A.f,{}),dataTestId:"footer-contact-email"})}),(0,t.jsx)(k,{children:(0,t.jsx)(z.f,{kind:"tel",value:K.phone.e164,place:"footer",icon:(0,t.jsx)(R.f,{}),dataTestId:"footer-contact-phone",children:K.phone.international})}),(0,t.jsx)(k,{children:(0,t.jsx)(z.f,{kind:"map",value:`${K.address.name}, ${(0,S.W)(K.address)}`,geo:K.address.geo,place:"footer",icon:(0,t.jsx)(D.f,{}),dataTestId:"footer-contact-address",children:(0,S.W)(K.address)})})]})]})})]}),(0,t.jsx)(y,{"data-testid":"footer-bottom-row","data-site-row":"true",children:(0,t.jsx)(w,{...B("bottom"),children:(0,t.jsxs)(f,{children:[(0,t.jsx)(m,{"data-testid":"footer-copyright",children:"© plastship GmbH"}),(0,t.jsxs)(h,{"data-testid":"footer-meta","data-count":T.length,children:[T.map(e=>(0,t.jsx)(u,{href:e.href,"data-testid":`footer-meta-${e.href.replace(/^\//,"")}`,children:n(e.labelKey)},e.href)),(0,t.jsx)(g,{type:"button",onClick:V.e,"data-testid":"footer-cookie-settings",children:n("footer.cookieSettings",{defaultValue:"Cookie-Einstellungen"})})]})]})})})]})}],538915);var E=e.i(271645),P=e.i(247902),G=e.i(825969),q=e.i(499911);e.i(657782);var Y=e.i(229132);e.i(730026);var Z=e.i(262076),J=e.i(184914),Q=e.i(157067),X=e.i(885895),ee=e.i(693830),et=e.i(949108),ei=e.i(49958),ea=e.i(726029);let en=(0,E.lazy)(()=>e.A(767483));e.s(["f",0,()=>{let e=(0,et.f)(),{status:i}=(0,ei.useSession)(),a=(0,ee.g)(),{isLeftSidebarOpen:n,closeLeftSidebar:o}=(0,Q.i)(),{language:s}=(0,X.N)(),{tr:l}=(0,I.f)(s);return e?(0,t.jsx)(J.f,{isOpen:n,onClose:o,mode:"guest",maxWidthPx:ea.F-1,barHeightPx:ea.W,footerAction:(0,t.jsx)(P.f,{href:"/login",modifier:G.j.PRIMARY,icon:(0,t.jsx)(q.f,{}),iconAlign:G.W.RIGHT,dataTestId:"mobile-menu-item-login",children:l("header.login.label",{defaultValue:"Login"})}),children:(0,t.jsx)(Z.f,{"data-testid":"mobile-menu-section-public",children:(0,t.jsx)(Y.f,{variant:"stacked",dataTestId:"mobile-menu-item-public"})})}):"authenticated"===i&&a?(0,t.jsx)(E.Suspense,{fallback:null,children:(0,t.jsx)(en,{barHeightPx:ea.W})}):null}],226129),e.s([],600639),e.s(["p",0,{top:{placement:"inner",color:"white",depth:"section"}},"q",0,"navy","e",0,function(e){return e&&"object"==typeof e?{edges:{top:e},flush:!0}:e&&"white"!==e?{edges:{top:{placement:"inner",color:e}},flush:!0}:{edges:void 0,flush:!1}}],546843)},584391,e=>{var t=e.i(843476),i=e.i(997053),a=e.i(726029);let n=i.U.div.withConfig({displayName:"Default.styles__Root",componentId:"sc-6c8f238f-0"})`
  --page-header-offset: ${a.W}px;
  ${a.u}
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-x: clip;
`,o=i.U.main.withConfig({displayName:"Default.styles__Main",componentId:"sc-6c8f238f-1"})`
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-y: auto;
  /* Der sticky Header steht im Fluss — kein Ausgleich für einen fixen Header mehr */
  padding-top: ${({$paddingTop:e=!0})=>e?"80px":"0"};
  /* Abstand vor dem Fuß — entfällt, wenn die Seite mit einer Fläche endet
     und der Fuß direkt in sie übergeht (Befund 29.10., #2192) */
  padding-bottom: ${({$flushFooter:e})=>e?"0":"40px"};

  /* Add spacing between content elements */
  > *:not(:last-child) {
    margin-bottom: 40px;
  }
`;var s=e.i(197754),l=e.i(538915);e.i(600639);var r=e.i(226129),d=e.i(729950),c=e.i(546843);e.s(["Default",0,e=>{let{children:i,inverted:a,paddingTop:p=!0,footerEdge:f}=e,m=(0,c.e)(f);return(0,d.H)()?(0,t.jsx)(t.Fragment,{children:i}):(0,t.jsxs)(n,{className:e.className,"data-testid":"default-root",children:[(0,t.jsx)(s.f,{navigation:!1,inverted:a,site:!0}),(0,t.jsx)(r.f,{}),(0,t.jsx)(o,{$paddingTop:p,$flushFooter:m.flush,children:i}),(0,t.jsx)(l.f,{inverted:a,edges:m.edges})]})}],584391)},33180,e=>{let t=e.i(584391).Default;e.s(["f",0,t])},816017,217997,e=>{var t=e.i(843476);e.i(507924);var i=e.i(891567);i.Y.name,i.h.central.international,i._.info,i.Y;let a=String.fromCharCode(8232),n=String.fromCharCode(8233);e.s(["f",0,function({data:e}){return(0,t.jsx)("script",{type:"application/ld+json","data-testid":"structured-data",dangerouslySetInnerHTML:{__html:JSON.stringify(e).replace(/</g,"\\u003c").replace(/>/g,"\\u003e").replace(/&/g,"\\u0026").split(a).join("\\u2028").split(n).join("\\u2029")}})}],217997),e.s([],816017)},800035,177231,385914,e=>{var t=e.i(843476);e.i(114178);var i=e.i(861133),a=e.i(997053);e.i(315481);var n=e.i(10003),o=e.i(726029);let s="640px",l="768px",r="1024px",d=a.U.header.withConfig({displayName:"newsSite.styles__Head",componentId:"sc-be9d79fd-0"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-block: 16px;
  min-width: 0;

  @media (min-width: ${l}) {
    padding-block: 32px 24px;
  }
`,c=a.U.h1.withConfig({displayName:"newsSite.styles__H1",componentId:"sc-be9d79fd-1"})`
  margin: 0;
  max-width: 1024px;
  font-family: ${({theme:e})=>e.font.primaryFamily};
  font-size: 30px;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: 0;
  text-transform: none;
  color: ${({theme:e})=>e.palette.site.heading};
  overflow-wrap: break-word;
  hyphens: auto;
  hyphenate-limit-chars: 10 5 5;

  @media (min-width: ${s}) {
    font-size: 48px;
    line-height: 1.1;
  }

  @media (min-width: ${r}) {
    font-size: 60px;
  }

  /* #2127: am Telefon eine Stufe der Theme-Skala kleiner */
  ${(0,o.A)([{ab:0,px:30},{ab:640,px:48}])}
`,p=a.U.p.withConfig({displayName:"newsSite.styles__Kicker",componentId:"sc-be9d79fd-2"})`
  margin: 0;
  font-family: ${({theme:e})=>e.font.secondaryFamily};
  font-size: 16px;
  line-height: 24px;
  color: ${({theme:e})=>e.palette.site.blue};
  overflow-wrap: break-word;

  /* Doppelte Klasse gegen die globalen Regeln a:hover und [data-theme='dark'] a */
  && a,
  && a:hover {
    font-weight: 700;
    color: inherit;
    text-decoration: underline;
  }
`,f=a.U.div.withConfig({displayName:"newsSite.styles__Lead",componentId:"sc-be9d79fd-3"})`
  max-width: 1024px;
  font-family: ${({theme:e})=>e.font.secondaryFamily};
  font-size: 18px;
  line-height: 28px;
  color: ${({theme:e})=>e.palette.site.text};
  overflow-wrap: break-word;

  @media (min-width: ${l}) {
    font-size: 24px;
    line-height: 32px;
  }

  p {
    margin: 0;
  }
`,m=a.U.ul.withConfig({displayName:"newsSite.styles__TagList",componentId:"sc-be9d79fd-4"})`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 0;
  padding: 0;
  list-style: none;
`,h=a.U.li.withConfig({displayName:"newsSite.styles__TagItem",componentId:"sc-be9d79fd-5"})`
  ${o.M}
`,g=a.U.section.withConfig({displayName:"newsSite.styles__Section",componentId:"sc-be9d79fd-6"})`
  display: flex;
  flex-direction: column;
  gap: 32px;
  min-width: 0;
  padding-block: 48px;

  @media (min-width: ${s}) {
    padding-block: 64px;
  }

  @media (min-width: ${l}) {
    padding-block: 80px;
  }
`,u=(0,a.U)(g).withConfig({displayName:"newsSite.styles__ListSection",componentId:"sc-be9d79fd-7"})`
  padding-top: 16px;

  @media (min-width: ${l}) {
    padding-top: 24px;
  }
`,x=a.U.div.withConfig({displayName:"newsSite.styles__More",componentId:"sc-be9d79fd-8"})`
  text-align: center;

  @media (min-width: ${l}) {
    margin-top: 32px;
  }
`,b=a.U.p.withConfig({displayName:"newsSite.styles__Empty",componentId:"sc-be9d79fd-9"})`
  margin: 0;
  font-family: ${({theme:e})=>e.font.secondaryFamily};
  font-size: 16px;
  line-height: 28px;
  color: ${({theme:e})=>e.palette.site.muted};
`,y=a.U.ul.withConfig({displayName:"newsSite.styles__Grid",componentId:"sc-be9d79fd-10"})`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 16px;
  margin: 0;
  padding: 0;
  list-style: none;

  @media (min-width: ${s}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: ${l}) {
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }
`,w=a.U.li.withConfig({displayName:"newsSite.styles__GridItem",componentId:"sc-be9d79fd-11"})`
  min-width: 0;

  @media (min-width: ${s}) {
    grid-column: span ${({$gross:e})=>e?2:1};
  }

  @media (min-width: ${l}) {
    grid-column: span 3;
  }

  @media (min-width: ${r}) {
    grid-column: span ${({$gross:e})=>e?3:2};
  }
`,v=a.U.ul.withConfig({displayName:"newsSite.styles__ChipList",componentId:"sc-be9d79fd-12"})`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 0;
  padding: 0;
  list-style: none;
`,$=a.m`
  &,
  &:hover,
  &:focus-visible {
    background: ${({theme:e})=>e.palette.site.blue};
    box-shadow: inset 0 0 0 1px ${({theme:e})=>e.palette.site.blue};
  }

  /* Schrift in Kartenfarbe: weiß auf dunkelblau, im Dunkelmodus dunkel auf hellblau */
  &&,
  &&:hover {
    color: ${({theme:e})=>e.palette.site.card};
  }
`,k=(0,a.U)(n.NavLink).withConfig({displayName:"newsSite.styles__Chip",componentId:"sc-be9d79fd-13"})`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  box-sizing: border-box;
  max-width: 100%;
  min-height: 40px;
  padding: 8px 16px;
  border-radius: 9999px;
  background: ${({theme:e})=>e.palette.site.card};
  box-shadow: inset 0 0 0 1px ${({theme:e})=>e.palette.site.border};
  font-family: ${({theme:e})=>e.font.secondaryFamily};
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  text-decoration: none;
  overflow-wrap: anywhere;
  transition:
    background 150ms ease,
    box-shadow 150ms ease;

  &&,
  &&:hover {
    color: ${({theme:e})=>e.palette.site.blue};
  }

  &:hover,
  &:focus-visible {
    background: ${({theme:e})=>e.palette.site.tint};
    box-shadow: inset 0 0 0 1px ${({theme:e})=>e.palette.site.blue};
  }

  ${({$active:e})=>e&&$}
`,_=a.U.span.withConfig({displayName:"newsSite.styles__ChipCount",componentId:"sc-be9d79fd-14"})`
  font-weight: 400;
  opacity: 0.75;
`,j=a.U.figure.withConfig({displayName:"newsSite.styles__Figure",componentId:"sc-be9d79fd-15"})`
  position: relative;
  max-width: 1024px;
  margin: 0 0 32px;
  aspect-ratio: 2 / 1;
  overflow: hidden;
  border-radius: 24px;
  background: ${({theme:e})=>e.palette.site.tint};

  img {
    object-fit: cover;
  }
`,C=a.U.div.withConfig({displayName:"newsSite.styles__BodyColumn",componentId:"sc-be9d79fd-16"})`
  max-width: ${o.z};
  min-width: 0;
`;e.s(["R",0,C,"p",0,k,"W",0,_,"a",0,v,"e",0,b,"q",0,j,"z",0,y,"C",0,w,"E",0,c,"n",0,d,"U",0,p,"Q",0,f,"I",0,u,"V",0,x,"Z",0,g,"s",0,h,"t",0,m],177231),e.s(["f",0,function({dataTestId:e,headline:a,lead:n,breadcrumb:o,kicker:s,children:l}){return(0,t.jsxs)(d,{"data-testid":`${e}-head`,children:[o&&o.length>0&&(0,t.jsx)(i.f,{items:o,dataTestId:`${e}-breadcrumb`}),s,(0,t.jsx)(c,{"data-testid":`${e}-title`,children:a}),n&&(0,t.jsx)(f,{"data-testid":`${e}-lead`,children:(0,t.jsx)("p",{children:n})}),l]})}],800035),e.i(624813);var I=e.i(775175),N=e.i(507924);e.s(["f",0,function({articles:e,locale:i,dataTestId:a,large:n=0,showCategory:o=!1,cardTestId:s}){return(0,t.jsx)(y,{"data-testid":a,"data-count":e.length,children:e.map((e,l)=>{let r=l<n;return(0,t.jsx)(w,{$gross:r,"data-size":r?"large":"small","data-slug":e.slug,"data-testid":`${a}-item`,children:(0,t.jsx)(I.f,{headline:(0,N.u)(e.title,i),href:`/news/${e.slug}`,imageUrl:e.imageUrl??void 0,imageAlt:(0,N.u)(e.imageAlt,i)||void 0,imageSizes:r?"(max-width: 768px) 100vw, 50vw":"(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw",date:(0,N.H)(e.publishedAt,i)||void 0,subtitle:o&&e.category?(0,N.u)(e.category.label,i):void 0,description:(0,N.u)(e.excerpt,i)||void 0,tags:e.tags,dataTestId:s?s(e.slug):`${a}-card-${e.slug}`})},e.slug)})})}],385914)},178446,e=>{e.s(["f",0,function(e){if(!e.startsWith("/")||e.startsWith("//"))return e;let t=e.search(/[?#]/),i=-1===t?e:e.slice(0,t),a=-1===t?"":e.slice(t);return`${i.endsWith("/")||i.slice(i.lastIndexOf("/")+1).includes(".")?i:`${i}/`}${a}`}])}])})();