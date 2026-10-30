(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,307446,e=>{e.v(t=>Promise.all(["static/chunks/0fdkyhd6myy0b.js","static/chunks/1z9k6-mk4t9_g.js","static/chunks/3h4paqtye6-p2.js","static/chunks/418xdx7k7y4kc.js","static/chunks/22khcvznnl4iy.js"].map(t=>e.l(t))).then(()=>t(293601)))},349953,645944,e=>{"use strict";var t=e.i(843476),i=e.i(997053),n=e.i(547905);let a=i.U.section.withConfig({displayName:"HeroSection.styles__Root",componentId:"sc-7b18f4de-0"})`
  position: relative;
  width: 100%;
  /* Die App hat keinen globalen border-box-Reset (_reset.scss nullt nur Rand,
     Polster und Rahmen). Ohne diese Zeile ergibt width:100% plus seitliches
     Polster eine Ueberbreite von zweimal dem Polster, und <main> zeigt dafuer
     eine waagerechte Bildlaufleiste. */
  box-sizing: border-box;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${e=>e.theme.padding.large} ${e=>e.theme.padding.default};
  background-color: ${e=>e.theme.palette.default.primary};
  background-image: ${e=>e.$backgroundImage?`url(${e.$backgroundImage})`:"none"};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
  /* Wabenrand statt runder Ecken (#1188); der Inhalt bleibt aus der Randzone */
  ${e=>(0,n.n)(e.$edges)}
  ${e=>(0,n.o)("bottom",e.theme.padding.large,e.$edges)}

  ${e=>e.$overlay&&`
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(to bottom, rgba(0, 65, 110, 0.7), rgba(0, 65, 110, 0.9));
      z-index: 1;
    }
  `}
`,r=i.U.div.withConfig({displayName:"HeroSection.styles__Content",componentId:"sc-7b18f4de-1"})`
  position: relative;
  z-index: 2;
  max-width: 800px;
  /* #2126: als Flex-Kind wuchs der Inhalt sonst auf die Breite seines längsten
     Worts („Kunststoffidentifikation“ in Versalien) und lief links und rechts
     aus dem Hero (overflow: hidden schnitt ab). Mit min-width: 0 bleibt er in
     der Zeile, lange Wörter brechen innerhalb (Silbentrennung #2127). */
  min-width: 0;
  text-align: center;
`,s=i.U.div.withConfig({displayName:"HeroSection.styles__HeadlineWrapper",componentId:"sc-7b18f4de-2"})`
  margin-bottom: ${e=>e.theme.margin.default};

  h1,
  h2 {
    color: ${e=>e.theme.palette.default.white} !important;
  }
  /* #2126/#2127: am Telefon steht die h1 über die Theme-Skala eine Stufe kleiner
     (Headline-Atom, mobile Stufe = h2-Größe) — hier keine eigene Größe */
`,d=i.U.div.withConfig({displayName:"HeroSection.styles__SubheadlineWrapper",componentId:"sc-7b18f4de-3"})`
  margin-bottom: ${e=>e.theme.margin.large};

  p,
  span {
    color: rgba(255, 255, 255, 0.9) !important;
  }
`,o=i.U.div.withConfig({displayName:"HeroSection.styles__CtaWrapper",componentId:"sc-7b18f4de-4"})`
  display: flex;
  justify-content: center;
  gap: ${e=>e.theme.margin.small};
`;var l=e.i(699779),c=e.i(929842),h=e.i(703089),p=e.i(247902),u=e.i(825969);e.i(710788);var b=e.i(363451);e.i(311046);var m=e.i(499881);let g={bottom:{placement:"inner",color:"white"}};e.s(["f",0,e=>{let{headline:i,subheadline:n,backgroundImage:f,ctaText:x,ctaHref:j,overlay:k=!0,className:v,dataTestId:y="hero-section",edges:w=g}=e;return(0,t.jsxs)(a,{className:v,"data-testid":y,$backgroundImage:f,$overlay:k,$edges:w,children:[(0,m.N)(w)&&(0,t.jsx)(b.f,{edges:w,zIndex:1,dataTestId:`${y}-edge`}),(0,t.jsxs)(r,{children:[(0,t.jsx)(s,{children:(0,t.jsx)(l.f,{importance:c.D.h1,dataTestId:`${y}-headline`,children:i})}),n&&(0,t.jsx)(d,{children:(0,t.jsx)(h.p,{variant:h.g.bodybig,dataTestId:`${y}-subheadline`,children:n})}),x&&j&&(0,t.jsx)(o,{children:(0,t.jsx)(p.f,{href:j,modifier:u.j.SECONDARY,label:x,disabled:!1,loading:!1,dataTestId:`${y}-cta`,children:x})})]})]})}],645944),e.s([],349953)},460385,e=>{e.v(t=>Promise.all(["static/chunks/1-h4x15wuzj1l.js","static/chunks/1_9_-npd70217.js","static/chunks/1aq7e17w8g1p-.js","static/chunks/3obqb41wyv4ax.js","static/chunks/3h4paqtye6-p2.js","static/chunks/2oq-uevcwhldh.js"].map(t=>e.l(t))).then(()=>t(851724)))},767483,e=>{e.v(t=>Promise.all(["static/chunks/2_i37j2td-_b6.js","static/chunks/2aczwenenywb8.js","static/chunks/2-uxo2bcn21qb.js","static/chunks/17ii97gpladp2.js","static/chunks/3h4paqtye6-p2.js","static/chunks/3obqb41wyv4ax.js"].map(t=>e.l(t))).then(()=>t(806880)))},766724,e=>{"use strict";var t=e.i(843476),i=e.i(885895);e.i(821194);var n=e.i(99222),a=e.i(507924),r=e.i(284248);e.i(816017);var s=e.i(217997),d=e.i(152186),o=e.i(856337),l=e.i(33180),c=e.i(699779),h=e.i(929842);e.i(114178);var p=e.i(861133);e.i(349953);var u=e.i(645944);e.i(177607);var b=e.i(422180);e.i(845166);var m=e.i(609588);e.i(4185);var g=e.i(566457),f=e.i(546843);e.s(["default",0,function({partner:e,structuredData:x}){let{language:j}=(0,i.N)(),{tr:k}=(0,n.f)(j),v=(0,r.C)();return(0,t.jsxs)(l.f,{footerEdge:f.q,children:[x&&(0,t.jsx)(s.f,{data:x}),(0,t.jsx)(d.f,{children:(0,t.jsx)(o.f,{xs:12,md:12,children:(0,t.jsx)(p.f,{items:[{label:k("partnerShowroom.breadcrumb.partners"),href:"/partners/"},{label:e.name}],dataTestId:"partner-brand-breadcrumb"})})}),(0,t.jsx)(u.f,{headline:e.name,dataTestId:"partner-brand-hero"}),(0,t.jsxs)(d.f,{children:[(0,t.jsxs)(o.f,{xs:12,lg:8,children:[(0,t.jsx)(c.f,{importance:h.D.h2,children:k("partnerShowroom.brand.products")}),(0,t.jsx)(d.f,{dataTestId:"partner-brand-products",children:e.products.map(i=>(0,t.jsx)(o.f,{xs:12,md:6,children:(0,t.jsx)(m.f,{title:(0,a.u)(i.title,v),description:(0,a.u)(i.description,v),ctaHref:`/partners/${e.slug}/${i.slug}/`,dataTestId:`partner-brand-product-${i.slug}`})},i.slug))})]}),(0,t.jsx)(o.f,{xs:12,lg:4,children:(0,t.jsx)(g.f,{companyName:e.name,logoUrl:e.logoUrl??void 0,logoAlt:(0,a.u)(e.logoAlt,v)||void 0,websiteUrl:e.websiteUrl??void 0,dataTestId:"partner-brand-card"})})]}),(0,t.jsx)(b.f,{headline:k("partnerShowroom.brand.ctaHeadline"),buttonText:k("partnerShowroom.cta.button"),buttonHref:"/contact-us/",dataTestId:"partner-brand-cta",edges:f.p})]})}])}]);