(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,[411206,173972,e=>{var t=e.i(843476),i=e.i(271645),n=e.i(618566);e.i(821194);var o=e.i(99222),a=e.i(476999),l=e.i(14431),s=e.i(713347),r=e.i(635647),c=e.i(891567),d=e.i(997053);let f=d.m`
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
`,h=d.U.a.withConfig({displayName:"ContactLink.styles__Link",componentId:"sc-41592123-0"})`
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
`,u=d.U.span.withConfig({displayName:"ContactLink.styles__Plain",componentId:"sc-41592123-1"})`
  ${f}
`,p={tel:{key:"contactLink.aria.tel",fallback:"Anrufen: {{value}}"},mail:{key:"contactLink.aria.mail",fallback:"E-Mail schreiben an {{value}}"},map:{key:"contactLink.aria.map",fallback:"Auf der Karte zeigen: {{value}}"}};e.s(["f",0,({kind:e,value:d,place:f,geo:m,subject:g,icon:x,children:b,dataTestId:y,className:k})=>{let{tr:v}=(0,o.f)(),j=(0,n.usePathname)(),$="string"==typeof d?d.trim():"",w=(0,s.useSiteLocale)(),C="tel"===e?(0,r.A)($):"mail"===e?(0,r.c)($,g):(0,r.W)({query:$,geo:m},w),F=(0,i.useCallback)(()=>{(0,a.q)(j||"/",c.F,{kind:e,place:f}),l.v({category:"contact",message:c.F,data:{kind:e,place:f}})},[j,e,f]),_=y??`contact-link-${e}`,N=(0,t.jsxs)(t.Fragment,{children:[x,b??$]});if(!$)return null;if(!C)return(0,t.jsx)(u,{className:k,"data-testid":_,"data-kind":e,"data-linked":"false",children:N});let I=$.replace(/\s*\n\s*/g,", ");return(0,t.jsx)(h,{className:k,href:C,onClick:F,"aria-label":v(p[e].key,{value:I,defaultValue:p[e].fallback}),"data-testid":_,"data-kind":e,"data-linked":"true",children:N})}],173972),e.s([],411206)},650868,224906,e=>{let t=e.i(152186).f;e.s(["f",0,t],650868);let i=e.i(856337).f;e.s(["f",0,i],224906)},813267,e=>{var t=e.i(843476),i=e.i(997053);let n=i.U.svg.withConfig({displayName:"IconLocation.styles__Root",componentId:"sc-d4764d0b-0"})``;e.s(["f",0,e=>(0,t.jsxs)(n,{className:e.className,"data-testid":"icon-location-root",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:[(0,t.jsx)("path",{d:"M4.5 9.75768C4.5 15.5 12 22 12 22C12 22 19.5 15.5 19.5 9.75768C19.5 4.81181 15.6559 2 12 2C8.34409 2 4.5 4.81181 4.5 9.75768Z",stroke:"currentColor",strokeWidth:"2",strokeLinejoin:"round"}),(0,t.jsx)("circle",{cx:"12",cy:"9.5",r:"2.5",stroke:"currentColor",strokeWidth:"2"})]})],813267)},874142,e=>{let t=e.i(215063).f;e.s(["f",0,t])},538915,226129,600639,546843,e=>{var t=e.i(843476),i=e.i(997053);e.i(315481);var n=e.i(10003),o=e.i(547905),a=e.i(136717);let l=e=>(0,a.L)(e.palette.footer.backgroundEnd),s=e=>(0,a.p)(e.palette.footer.backgroundEnd),r=(e,t)=>s(e)?`rgba(255, 255, 255, ${t})`:`rgba(33, 37, 41, ${t})`,c=i.U.footer.withConfig({displayName:"Footer.styles__Root",componentId:"sc-809a1aba-0"})`
  width: 100%;
  /* #2164: Verlauf aus dem Theme, in beiden Modi dunkel; Schrift aus dem Kontrast (footerColors) */
  background: linear-gradient(
    to top,
    ${({theme:e})=>e.palette.footer.background},
    ${({theme:e})=>e.palette.footer.backgroundEnd}
  );
  color: ${({theme:e})=>l(e)};
  padding: 1rem 0;
  flex-shrink: 0;
  z-index: 10;
  margin-top: auto;
  /* Wabenrand statt runder Ecken (#1188); Logo und Copyright bleiben aus der Randzone */
  ${({$edges:e})=>(0,o.n)(e)}
  ${({$edges:e})=>(0,o.o)("top","1rem",e)}

  /* Textelemente erben die Fußschrift — Doppelklasse statt !important, schlägt globale Regeln */
  && h1,
  && h2,
  && h3,
  && h4,
  && h5,
  && p,
  && span {
    color: ${({theme:e})=>l(e)};
  }
`,d=i.U.div.withConfig({displayName:"Footer.styles__BottomBar",componentId:"sc-809a1aba-1"})`
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
    color: ${({theme:e})=>l(e)};
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
  color: ${({theme:e})=>l(e)};
  text-decoration: none;

  &:hover,
  &:focus-visible {
    text-decoration: underline;
  }
`,p=(0,i.U)(n.NavLink).withConfig({displayName:"Footer.styles__FooterLink",componentId:"sc-809a1aba-5"})`
  color: inherit;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`,m=(0,i.U)(n.NavLink).withConfig({displayName:"Footer.styles__LogoLink",componentId:"sc-809a1aba-6"})`
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
    color: ${({theme:e})=>l(e)};
  }

  && > a:hover {
    text-decoration: underline;
  }
`,y=i.U.h2.withConfig({displayName:"Footer.styles__FooterSectionTitle",componentId:"sc-809a1aba-10"})`
  && {
    color: ${({theme:e})=>l(e)};
  }
  font-size: 1rem;
  font-weight: 700;
  margin: 0 0 16px;
  text-transform: uppercase;
`,k=i.U.nav.withConfig({displayName:"Footer.styles__FooterLinks",componentId:"sc-809a1aba-11"})`
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
    color: ${({theme:e})=>l(e)};
  }

  && a:hover,
  && a:focus-visible {
    text-decoration: underline;
  }
`;var v=e.i(424734),j=e.i(650868),$=e.i(224906);e.i(821194);var w=e.i(99222),C=e.i(722216),F=e.i(507924),_=e.i(284248),N=e.i(891567);let I=[{titleKey:"footer.sections.links",links:[{href:"/team",labelKey:"footer.team"},{href:"/faq",labelKey:"footer.faq"},{href:"/about",labelKey:"footer.about"},{href:"/news",labelKey:"footer.latest"},{href:"/contact-us",labelKey:"footer.contactForm"},{href:"/services",labelKey:"footer.services"}]}],L={titleKey:"footer.contact",email:N._.info,phone:N.h.central,address:N.Y},K=[{href:"/agb",labelKey:"footer.terms"},{href:"/imprint",labelKey:"footer.imprint"},{href:"/privacy",labelKey:"footer.privacy"},{href:"/email-disclaimer",labelKey:"footer.emailDisclaimer"},{href:"/accessibility",labelKey:"footer.accessibility"}];e.i(411206);var U=e.i(173972),q=e.i(317573),W=e.i(757658),R=e.i(874142),A=e.i(813267);e.i(710788);var T=e.i(363451);e.i(311046);var P=e.i(499881);let z={top:{placement:"inner",color:"white"}};e.s(["f",0,e=>{let n=e.edges??z,{tr:o}=(0,w.f)(),a=(0,i.i)(),{footer:l}=(0,C.f)(),r=(0,_.C)();return(0,t.jsxs)(c,{className:e.className,"data-testid":"footer-root",$edges:n,children:[(0,P.N)(n)&&(0,t.jsx)(T.f,{edges:n,dataTestId:"footer-root-edge"}),(0,t.jsxs)(j.f,{children:[(0,t.jsx)($.f,{xs:12,md:3,lg:2,children:(0,t.jsx)(m,{href:"/","aria-label":o("footer.logo.ariaLabel",{defaultValue:"plastship – zur Startseite"}),"data-testid":"footer-logo-link",children:(0,t.jsx)(v.f,{inverted:!a?.palette?.footer||s(a),monochrome:!0})})}),(0,t.jsx)(t.Fragment,{children:l.length>0?l.map((e,i)=>(0,t.jsx)($.f,{xs:12,sm:6,md:4,children:(0,t.jsxs)(g,{"data-testid":`footer-cms-section-${i}`,"data-count":e.children?.length??0,children:[(0,t.jsx)(y,{"data-testid":`footer-cms-section-${i}-title`,children:(0,F.u)(e.label,r)}),(0,t.jsx)(k,{children:(e.children??[]).map((e,n)=>(0,t.jsx)(p,{href:e.href,"data-testid":`footer-cms-section-${i}-link-${n}`,children:(0,F.u)(e.label,r)},`${e.href}-${n}`))})]})},`${e.href}-${i}`)):I.map((e,i)=>(0,t.jsx)($.f,{xs:12,sm:6,md:4,children:(0,t.jsxs)(g,{"data-testid":`footer-section-${i}`,"data-count":e.links.length,children:[(0,t.jsx)(y,{"data-testid":`footer-section-${i}-title`,children:o(e.titleKey)}),(0,t.jsx)(k,{children:e.links.map(e=>(0,t.jsx)(p,{href:e.href,"data-testid":`footer-link-${e.href.replace(/^\//,"").replace(/\//g,"-")}`,children:o(e.labelKey)},e.href))})]})},e.titleKey))}),(0,t.jsx)($.f,{xs:12,sm:6,md:5,lg:4,children:(0,t.jsxs)(g,{"data-testid":"footer-contact",children:[(0,t.jsx)(y,{"data-testid":"footer-contact-title",children:o(L.titleKey)}),(0,t.jsxs)(x,{children:[(0,t.jsx)(b,{children:(0,t.jsx)(U.f,{kind:"mail",value:L.email,place:"footer",icon:(0,t.jsx)(q.f,{}),dataTestId:"footer-contact-email"})}),(0,t.jsx)(b,{children:(0,t.jsx)(U.f,{kind:"tel",value:L.phone.e164,place:"footer",icon:(0,t.jsx)(R.f,{}),dataTestId:"footer-contact-phone",children:L.phone.international})}),(0,t.jsx)(b,{children:(0,t.jsx)(U.f,{kind:"map",value:`${L.address.name}, ${(0,N.W)(L.address)}`,geo:L.address.geo,place:"footer",icon:(0,t.jsx)(A.f,{}),dataTestId:"footer-contact-address",children:(0,N.W)(L.address)})})]})]})})]}),(0,t.jsx)(j.f,{children:(0,t.jsx)($.f,{xs:12,children:(0,t.jsxs)(d,{children:[(0,t.jsx)(f,{"data-testid":"footer-copyright",children:"© plastship GmbH"}),(0,t.jsxs)(h,{"data-testid":"footer-meta","data-count":K.length,children:[K.map(e=>(0,t.jsx)(p,{href:e.href,"data-testid":`footer-meta-${e.href.replace(/^\//,"")}`,children:o(e.labelKey)},e.href)),(0,t.jsx)(u,{type:"button",onClick:W.e,"data-testid":"footer-cookie-settings",children:o("footer.cookieSettings",{defaultValue:"Cookie-Einstellungen"})})]})]})})})]})}],538915);var D=e.i(271645),H=e.i(247902),S=e.i(825969),M=e.i(499911);e.i(657782);var B=e.i(229132);e.i(730026);var E=e.i(262076),V=e.i(184914),Y=e.i(157067),G=e.i(885895),O=e.i(693830),Z=e.i(949108),J=e.i(49958),Q=e.i(726029);let X=(0,D.lazy)(()=>e.A(767483));e.s(["f",0,()=>{let e=(0,Z.f)(),{status:i}=(0,J.useSession)(),n=(0,O.g)(),{isLeftSidebarOpen:o,closeLeftSidebar:a}=(0,Y.i)(),{language:l}=(0,G.N)(),{tr:s}=(0,w.f)(l);return e?(0,t.jsx)(V.f,{isOpen:o,onClose:a,mode:"guest",maxWidthPx:Q.F-1,barHeightPx:Q.W,footerAction:(0,t.jsx)(H.f,{href:"/login",modifier:S.j.PRIMARY,icon:(0,t.jsx)(M.f,{}),iconAlign:S.W.RIGHT,dataTestId:"mobile-menu-item-login",children:s("header.login.label",{defaultValue:"Login"})}),children:(0,t.jsx)(E.f,{"data-testid":"mobile-menu-section-public",children:(0,t.jsx)(B.f,{variant:"stacked",dataTestId:"mobile-menu-item-public"})})}):"authenticated"===i&&n?(0,t.jsx)(D.Suspense,{fallback:null,children:(0,t.jsx)(X,{barHeightPx:Q.W})}):null}],226129),e.s([],600639),e.s(["p",0,{top:{placement:"inner",color:"white",depth:"section"}},"q",0,"navy","e",0,function(e){return e&&"white"!==e?{edges:{top:{placement:"inner",color:e}},flush:!0}:{edges:void 0,flush:!1}}],546843)},584391,e=>{var t=e.i(843476),i=e.i(997053),n=e.i(726029);let o=i.U.div.withConfig({displayName:"Default.styles__Root",componentId:"sc-6c8f238f-0"})`
  --page-header-offset: ${n.W}px;
  ${n.u}
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-x: clip;
`,a=i.U.main.withConfig({displayName:"Default.styles__Main",componentId:"sc-6c8f238f-1"})`
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
`;var l=e.i(197754),s=e.i(538915);e.i(600639);var r=e.i(226129),c=e.i(729950),d=e.i(546843);e.s(["Default",0,e=>{let{children:i,inverted:n,paddingTop:f=!0,footerEdge:h}=e,u=(0,d.e)(h);return(0,c.H)()?(0,t.jsx)(t.Fragment,{children:i}):(0,t.jsxs)(o,{className:e.className,"data-testid":"default-root",children:[(0,t.jsx)(l.f,{navigation:!1,inverted:n,site:!0}),(0,t.jsx)(r.f,{}),(0,t.jsx)(a,{$paddingTop:f,$flushFooter:u.flush,children:i}),(0,t.jsx)(s.f,{inverted:n,edges:u.edges})]})}],584391)},891567,e=>{let t={name:"plastship GmbH",street:"Auf der Lind 10",postalCode:"65529",locality:"Waldems",region:"Hessen",countryCode:"DE",geo:{lat:50.248828,lon:8.309024}};e.s(["Y",0,t,"_",0,{info:"info@plastship.com",team:"team@plastship.com"},"h",0,{central:{e164:"+4961265898010",national:"06126 58980-10",international:"+49 6126 58980-10"}},"F",0,"contact_click","W",0,function(e=t){return`${e.street}, ${e.postalCode} ${e.locality}`}])},974924,e=>{let t=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;e.s(["d",0,20,"x",0,function(e){return"string"==typeof e&&t.test(e)},"W",0,function(e){return e.trim().toLowerCase()}])},635647,e=>{var t=e.i(974924),i=e.i(891567),n=e.i(854101);let o=/^\+?[\d\s()./–-]+$/,a=e=>`${e.lat},${e.lon}`,l=e=>e.replace(/\s+/g," ").trim(),s=e=>Number(e.toFixed(6));function r(e){return!!e&&Number.isFinite(e.lat)&&Number.isFinite(e.lon)&&90>=Math.abs(e.lat)&&180>=Math.abs(e.lon)}e.s(["a",0,function(e){let t=l(e??"").toLowerCase();if(!t)return;let{street:n,postalCode:o}=i.Y;return t.includes(n.toLowerCase())&&t.includes(o)?{...i.Y.geo}:void 0},"c",0,function(e,i){let n="string"==typeof e?e.trim():"";if(!(0,t.x)(n))return null;let o=i?.trim();return o?`mailto:${n}?subject=${encodeURIComponent(o)}`:`mailto:${n}`},"n",0,function(e,t){if(!e)return null;let i=l(e.query),n=r(e.geo)?e.geo:void 0;if(!i&&!n)return null;if("string"==typeof t&&/iPhone|iPad|iPod|Macintosh/.test(t)){let e,t;return e=l(i),t=[],e&&t.push(`q=${encodeURIComponent(e)}`),n&&t.push(`ll=${a(n)}`),`https://maps.apple.com/?${t.join("&")}`}if("string"==typeof t&&/Android/i.test(t)){let e;return e=n?a(n):"0,0",`geo:${e}?q=${encodeURIComponent(l(i))}`}return null},"W",0,function(e,t){if(!e)return null;let i=l(e.query).slice(0,300),o=r(e.geo)?e.geo:void 0;if(!i&&!o)return null;let a=[];o&&a.push(`lat=${s(o.lat)}`,`lon=${s(o.lon)}`),i&&a.push(`q=${encodeURIComponent(i)}`);let c=`/map/?${a.join("&")}`;return t?(0,n.N)(c,t):c},"R",0,function(e){let t=l(e.get("q")??"").slice(0,300),i=e.get("lat"),n=e.get("lon"),o=null!==i&&""!==i.trim()?Number(i):0/0,a=null!==n&&""!==n.trim()?Number(n):0/0,c=r({lat:o,lon:a})?{lat:s(o),lon:s(a)}:void 0;return t||c?c?{query:t,geo:c}:{query:t}:null},"A",0,function(e){let t=function(e){let t;if("string"!=typeof e)return null;let i=e.trim();if(!i||!o.test(i))return null;let n=i.replace(/^(\+\d{1,3})\s*\(0\)/,"$1"),a=n.replace(/\D/g,"");if(n.startsWith("+"))t=`+${a}`;else if(a.startsWith("00"))t=`+${a.slice(2)}`;else{if(!a.startsWith("0"))return null;t=`+49${a.slice(1)}`}let l=t.length-1;return l<6||l>15||t.startsWith("+0")?null:t}(e);return t?`tel:${t}`:null}])}],307446,e=>{e.v(t=>Promise.all(["static/chunks/1xsu1bxk1l5ub.js","static/chunks/1z9k6-mk4t9_g.js","static/chunks/22khcvznnl4iy.js","static/chunks/418xdx7k7y4kc.js","static/chunks/3h4paqtye6-p2.js"].map(t=>e.l(t))).then(()=>t(293601)))},460385,e=>{e.v(t=>Promise.all(["static/chunks/3hsotnybl4262.js","static/chunks/0yv2loygyhcfa.js","static/chunks/1aq7e17w8g1p-.js","static/chunks/3obqb41wyv4ax.js","static/chunks/3h4paqtye6-p2.js","static/chunks/2oq-uevcwhldh.js"].map(t=>e.l(t))).then(()=>t(851724)))},767483,e=>{e.v(t=>Promise.all(["static/chunks/0cjg6mrmw5hfy.js","static/chunks/2aczwenenywb8.js","static/chunks/2-uxo2bcn21qb.js","static/chunks/17ii97gpladp2.js","static/chunks/3obqb41wyv4ax.js","static/chunks/3h4paqtye6-p2.js"].map(t=>e.l(t))).then(()=>t(806880)))},672099,function(e){e.n(e.i(584391))}]);