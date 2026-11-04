(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,[349953,645944,e=>{var t=e.i(843476),i=e.i(997053),a=e.i(547905);let n=i.U.section.withConfig({displayName:"HeroSection.styles__Root",componentId:"sc-7b18f4de-0"})`
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
  ${e=>(0,a.n)(e.$edges)}
  ${e=>(0,a.o)("bottom",e.theme.padding.large,e.$edges)}

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
`,s=i.U.div.withConfig({displayName:"HeroSection.styles__Content",componentId:"sc-7b18f4de-1"})`
  position: relative;
  z-index: 2;
  max-width: 800px;
  /* #2126: als Flex-Kind wuchs der Inhalt sonst auf die Breite seines längsten
     Worts („Kunststoffidentifikation“ in Versalien) und lief links und rechts
     aus dem Hero (overflow: hidden schnitt ab). Mit min-width: 0 bleibt er in
     der Zeile, lange Wörter brechen innerhalb (Silbentrennung #2127). */
  min-width: 0;
  text-align: center;
`,r=i.U.div.withConfig({displayName:"HeroSection.styles__HeadlineWrapper",componentId:"sc-7b18f4de-2"})`
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
`;var l=e.i(699779),c=e.i(929842),h=e.i(703089),p=e.i(247902),m=e.i(825969);e.i(710788);var g=e.i(363451);e.i(311046);var f=e.i(499881);let u={bottom:{placement:"inner",color:"white"}};e.s(["f",0,e=>{let{headline:i,subheadline:a,backgroundImage:x,ctaText:b,ctaHref:j,overlay:w=!0,className:y,dataTestId:$="hero-section",edges:k=u}=e;return(0,t.jsxs)(n,{className:y,"data-testid":$,$backgroundImage:x,$overlay:w,$edges:k,children:[(0,f.N)(k)&&(0,t.jsx)(g.f,{edges:k,zIndex:1,dataTestId:`${$}-edge`}),(0,t.jsxs)(s,{children:[(0,t.jsx)(r,{children:(0,t.jsx)(l.f,{importance:c.D.h1,dataTestId:`${$}-headline`,children:i})}),a&&(0,t.jsx)(d,{children:(0,t.jsx)(h.p,{variant:h.g.bodybig,dataTestId:`${$}-subheadline`,children:a})}),b&&j&&(0,t.jsx)(o,{children:(0,t.jsx)(p.f,{href:j,modifier:m.j.SECONDARY,label:b,disabled:!1,loading:!1,dataTestId:`${$}-cta`,children:b})})]})]})}],645944),e.s([],349953)},4185,566457,e=>{var t=e.i(843476),i=e.i(325164);e.i(945304);var a=e.i(977194);e.i(429307);var n=e.i(159255);e.i(836326);var s=e.i(690204),r=e.i(997053),d=e.i(726029),o=e.i(547905);let l="120px",c=r.U.article.withConfig({displayName:"PartnerCard.styles__Root",componentId:"sc-8fae0cdf-0"})`
  ${(0,d.O)(!0)}
  /* #2176: mit Website ist die ganze Karte der Link (gestreckter Name-Link) */
  ${d.Q}
  container-type: inline-size;
  display: flex;
  flex-direction: column;
  width: 100%;

  &:hover,
  &:focus-within {
    --chip-ring-width: 14px;
  }

  /* #1957: liegende Karte — Logo links in fester Spalte, Text rechts */
  ${({$row:e,theme:t})=>e&&r.m`
      display: grid;
      grid-template-columns: ${l} minmax(0, 1fr);
      gap: ${t.margin.default};
      align-items: center;
      padding: ${t.padding.default};
    `}
`,h=r.U.div.withConfig({displayName:"PartnerCard.styles__RowLogo",componentId:"sc-8fae0cdf-1"})`
  position: relative;
  box-sizing: border-box;
  width: ${l};
  height: ${"80px"};
  border-radius: 12px;
  background: ${({theme:e})=>e.palette.site.logoPlate};

  img {
    box-sizing: border-box;
    padding: ${({theme:e})=>e.padding.extrasmall};
    object-fit: contain;
    /* Logos mit weißem Grund gehen in der Unterlage auf (Dunkelmodus) */
    mix-blend-mode: multiply;
  }
`,p=r.U.div.withConfig({displayName:"PartnerCard.styles__RowBody",componentId:"sc-8fae0cdf-2"})`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({theme:e})=>e.margin.extrasmall};
  min-width: 0;
`,m=r.U.span.withConfig({displayName:"PartnerCard.styles__Role",componentId:"sc-8fae0cdf-3"})`
  ${d.M}
  gap: ${({theme:e})=>e.margin.extrasmall};

  &::before {
    content: '';
    flex: none;
    width: ${"8px"};
    height: ${"8px"};
    background: ${({theme:e})=>e.palette.site.green};
    ${o.p}
  }
`,g=r.U.div.withConfig({displayName:"PartnerCard.styles__LogoWrapper",componentId:"sc-8fae0cdf-4"})`
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  border-radius: 12px 12px 0 0;

  img {
    object-fit: contain;
  }
`,f=r.U.a.withConfig({displayName:"PartnerCard.styles__LogoLink",componentId:"sc-8fae0cdf-5"})`
  position: absolute;
  inset: 0;
  display: block;
`,u=r.U.div.withConfig({displayName:"PartnerCard.styles__Body",componentId:"sc-8fae0cdf-6"})`
  ${d.H}
  display: flex;
  flex-direction: column;
  gap: 24px;
`,x=r.U.div.withConfig({displayName:"PartnerCard.styles__CheckWrapper",componentId:"sc-8fae0cdf-7"})`
  display: flex;
  align-items: flex-start;
  min-height: 39px;
`,b=r.U.h3.withConfig({displayName:"PartnerCard.styles__Name",componentId:"sc-8fae0cdf-8"})`
  ${d.Z}
  font-size: 18px;
  /* gemessen: text-lg der Quelle mit 28 px Zeilenhöhe */
  line-height: 28px;
  hyphens: auto;
  -webkit-hyphens: auto;
  overflow-wrap: break-word;

  /* siteH3 springt ab lg per Media Query auf 20 px; Container-Regeln stehen
     danach und halten den Namen bei 18 px. */
  @container (min-width: 0px) {
    font-size: 18px;
  }

  @container (max-width: 229.98px) {
    font-size: 16px;
  }
`,j=r.U.p.withConfig({displayName:"PartnerCard.styles__Description",componentId:"sc-8fae0cdf-9"})`
  ${d.n}
  margin: 0;
`;var w=e.i(437992);e.s(["f",0,e=>{let{companyName:r,logoUrl:d,logoAlt:o,description:l,websiteUrl:y,variant:$="full",role:k,headingLevel:v=3,className:_,dataTestId:I="partner-card"}=e,C="logo"===$&&!!d,N=(0,t.jsx)(b,{as:2===v?"h2":"h3","data-testid":`${I}-name`,"data-heading-level":v,children:y?(0,t.jsx)(n.f,{href:y,target:"_blank",stretched:!0,dataTestId:`${I}-link`,children:r}):r}),U=l?(0,t.jsx)(j,{"data-testid":`${I}-description`,children:l}):null;if("row"===$)return(0,t.jsxs)(c,{className:_,"data-testid":I,"data-variant":"row","data-linked":y?"true":"false",$row:!0,children:[y&&(0,t.jsx)(s.f,{dataTestId:`${I}-halo`}),d&&(0,t.jsx)(h,{children:(0,t.jsx)(i.default,{src:d,alt:o||`${r} logo`,fill:!0,sizes:"120px","data-testid":`${I}-logo`})}),(0,t.jsxs)(p,{children:[k&&(0,t.jsx)(m,{"data-testid":`${I}-role`,children:k}),N,U]})]});let T=d?(0,t.jsx)(i.default,{src:d,alt:o||`${r} logo`,fill:!0,sizes:"(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw","data-testid":`${I}-logo`}):null;return(0,t.jsxs)(c,{className:_,"data-testid":I,"data-variant":C?"logo":"full","data-linked":y?"true":"false",children:[y&&(0,t.jsx)(s.f,{dataTestId:`${I}-halo`}),T&&(0,t.jsx)(g,{children:C&&y?(0,t.jsx)(f,{href:y,...w.d,"aria-label":r,"data-testid":`${I}-link`,children:T}):T}),(0,t.jsx)(u,{children:!C&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(x,{children:(0,t.jsx)(a.c,{name:"check",tone:"green",shape:"hex",dataTestId:`${I}-check`})}),(0,t.jsxs)("div",{children:[N,U]})]})})]})}],566457),e.s([],4185)},766724,e=>{var t=e.i(843476),i=e.i(885895);e.i(821194);var a=e.i(99222),n=e.i(507924),s=e.i(284248);e.i(816017);var r=e.i(217997),d=e.i(152186),o=e.i(856337),l=e.i(33180),c=e.i(699779),h=e.i(929842);e.i(114178);var p=e.i(861133);e.i(349953);var m=e.i(645944);e.i(177607);var g=e.i(422180);e.i(845166);var f=e.i(609588);e.i(4185);var u=e.i(566457),x=e.i(546843);e.s(["default",0,function({partner:e,structuredData:b}){let{language:j}=(0,i.N)(),{tr:w}=(0,a.f)(j),y=(0,s.C)();return(0,t.jsxs)(l.f,{footerEdge:x.q,children:[b&&(0,t.jsx)(r.f,{data:b}),(0,t.jsx)(d.f,{children:(0,t.jsx)(o.f,{xs:12,md:12,children:(0,t.jsx)(p.f,{items:[{label:w("partnerShowroom.breadcrumb.partners"),href:"/partners/"},{label:e.name}],dataTestId:"partner-brand-breadcrumb"})})}),(0,t.jsx)(m.f,{headline:e.name,dataTestId:"partner-brand-hero"}),(0,t.jsxs)(d.f,{children:[(0,t.jsxs)(o.f,{xs:12,lg:8,children:[(0,t.jsx)(c.f,{importance:h.D.h2,children:w("partnerShowroom.brand.products")}),(0,t.jsx)(d.f,{dataTestId:"partner-brand-products",children:e.products.map(i=>(0,t.jsx)(o.f,{xs:12,md:6,children:(0,t.jsx)(f.f,{title:(0,n.u)(i.title,y),description:(0,n.u)(i.description,y),ctaHref:`/partners/${e.slug}/${i.slug}/`,dataTestId:`partner-brand-product-${i.slug}`})},i.slug))})]}),(0,t.jsx)(o.f,{xs:12,lg:4,children:(0,t.jsx)(u.f,{companyName:e.name,logoUrl:e.logoUrl??void 0,logoAlt:(0,n.u)(e.logoAlt,y)||void 0,websiteUrl:e.websiteUrl??void 0,dataTestId:"partner-brand-card"})})]}),(0,t.jsx)(g.f,{headline:w("partnerShowroom.brand.ctaHeadline"),buttonText:w("partnerShowroom.cta.button"),buttonHref:"/contact-us/",dataTestId:"partner-brand-cta",edges:x.p})]})}])}],307446,e=>{e.v(t=>Promise.all(["static/chunks/0fdkyhd6myy0b.js","static/chunks/1z9k6-mk4t9_g.js","static/chunks/3h4paqtye6-p2.js","static/chunks/418xdx7k7y4kc.js","static/chunks/22khcvznnl4iy.js"].map(t=>e.l(t))).then(()=>t(293601)))},460385,e=>{e.v(t=>Promise.all(["static/chunks/2ty5t5gn_xsof.js","static/chunks/1_9_-npd70217.js","static/chunks/1aq7e17w8g1p-.js","static/chunks/3obqb41wyv4ax.js","static/chunks/3h4paqtye6-p2.js","static/chunks/2oq-uevcwhldh.js"].map(t=>e.l(t))).then(()=>t(851724)))},767483,e=>{e.v(t=>Promise.all(["static/chunks/2_i37j2td-_b6.js","static/chunks/0nbfwvngp7p5k.js","static/chunks/2-uxo2bcn21qb.js","static/chunks/1w92blmhcw0-f.js","static/chunks/3h4paqtye6-p2.js","static/chunks/3obqb41wyv4ax.js"].map(t=>e.l(t))).then(()=>t(806880)))}]);