(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,[370891,114009,e=>{var t=e.i(843476),a=e.i(495835);e.i(821194);var i=e.i(99222);let n={assistant:{key:"ai.label.assistant",defaultValue:"KI-Assistent: Antworten werden von einer KI erzeugt und können Fehler enthalten."},voice:{key:"ai.label.voice",defaultValue:"KI-Sprachfunktion: Ihre Sprache wird per KI in Text umgewandelt, Antworten liest eine synthetische Stimme vor."},machineTranslation:{key:"ai.label.machineTranslation",defaultValue:"Diese Fassung wurde mit KI maschinell übersetzt."},analysis:{key:"ai.label.analysis",defaultValue:"KI-Analyse"},machineUiTranslation:{key:"ai.label.machineUiTranslation",defaultValue:"Die Oberfläche ist in dieser Sprache teilweise maschinell übersetzt."}},r={key:"ai.label.badge",defaultValue:"KI"},s={key:"ai.label.original",defaultValue:"Zur deutschen Originalfassung"};e.s(["Z",0,r,"N",0,s,"l",0,n,"O",0,function(e){return!!(e&&(e.aiAnalyzedAt||e.aiModel))},"m",0,function(e,t){return!!t?.includes(e)}],114009);var d=e.i(178446),l=e.i(997053);let o=l.U.span.withConfig({displayName:"AiLabel.styles__Root",componentId:"sc-107ca0c3-0"})`
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  gap: ${({theme:e})=>e.margin.extrasmall};
  font-family: ${({theme:e})=>e.font.secondaryFamily};
  font-size: ${({theme:e})=>e.font.text.caption.desktop.fontSize};
  line-height: ${({theme:e})=>e.font.text.caption.desktop.lineHeight};
  color: inherit;
`,c=l.U.span.withConfig({displayName:"AiLabel.styles__Badge",componentId:"sc-107ca0c3-1"})`
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
`,h=l.U.span.withConfig({displayName:"AiLabel.styles__Text",componentId:"sc-107ca0c3-2"})``,p=l.U.a.withConfig({displayName:"AiLabel.styles__OriginalLink",componentId:"sc-107ca0c3-3"})`
  color: inherit;
  text-decoration: underline;
`;e.s(["f",0,({kind:e,dataTestId:l,compact:m=!1,originalHref:u,className:f})=>{let{tr:g}=(0,i.f)(),x=g(n[e].key,{defaultValue:n[e].defaultValue});return(0,t.jsxs)(o,{className:f,"data-testid":l??`ai-label-${e}`,"data-kind":e,role:"note",title:m?x:void 0,"aria-label":m?x:void 0,children:[(0,t.jsxs)(c,{"data-testid":`${l??`ai-label-${e}`}-badge`,children:[(0,t.jsx)(a.f,{}),g(r.key,{defaultValue:r.defaultValue})]}),!m&&(0,t.jsx)(h,{children:x}),u&&(0,t.jsx)(p,{href:(0,d.f)(u),hrefLang:"de","data-testid":`${l??`ai-label-${e}`}-original`,children:g(s.key,{defaultValue:s.defaultValue})})]})}],370891)},510716,980367,e=>{var t=e.i(843476),a=e.i(770703),i=e.i(997053),n=e.i(726029);let r=i.U.div.withConfig({displayName:"SiteMarkdown.styles__Root",componentId:"sc-f615d01e-0"})`
  ${n.b}
  box-sizing: border-box;
  max-width: 100%;
  overflow-wrap: break-word;

  p {
    margin: 0 0 20px;
  }

  /*
   * _reset.scss nimmt den Listen die Punkte — siteProse gibt sie zurück:
   * Wabenmarke an Aufzählungen (#1959), Nummern fett in Textfarbe, Einzug und
   * Abstand der Punkte aus dem Theme (#2235, vorher 26 + 6 px und 8 px).
   * Hier nur der Abstand zum Absatz davor und danach (prose-Rhythmus).
   */
  ul,
  ol {
    margin: 1.25em 0;
  }

  li > ul,
  li > ol {
    margin-bottom: 0;
  }

  li > p {
    margin: 0;
  }

  /*
   * #1538: Element und Aussehen sind getrennt wie bei Headline (importance /
   * renderAs). rehypeHeadingOrder zieht eine Überschrift mit Sprung auf die
   * nächste erlaubte Ebene und schreibt die gewählte in data-render-as — das
   * Aussehen folgt dem Attribut, sonst dem Element.
   * #1563: Die Seitenüberschrift im Fließtext (h1, rehypePageHeading) trägt
   * ihr Aussehen ebenso in data-render-as — eine Raute (#) sieht aus wie die h2.
   */
  h2:not([data-render-as]),
  [data-render-as='2'] {
    ${n.S}
    /* #2226: Abstände aus der Theme-Skala (vorher 48 px darüber, 32 px darunter) */
    margin: ${({theme:e})=>`${e.margin.big} 0 ${e.margin.large}`};
  }

  /*
   * #2226: der erste Inhalt beginnt an der Blockkante — das Sektionspolster
   * setzt den Abstand. Doppelte Klasse: die Regel unten (> :first-child)
   * wog weniger als die h2-Regel, die Überschrift behielt ihre 48 px.
   */
  && > :first-child {
    margin-top: 0;
  }

  h3,
  h4,
  [data-render-as='3'],
  [data-render-as='4'] {
    margin: 48px 0 18px;
    font-family: ${({theme:e})=>e.font.primaryFamily};
    font-size: 24px;
    font-weight: 700;
    line-height: 1.6;
    letter-spacing: 0;
    text-transform: none;
    color: ${({theme:e})=>e.palette.site.heading};
    hyphens: auto;

    @media (min-width: 640px) {
      font-size: 30px;
    }
  }

  /*
   * #1959: Zwischenüberschrift mit grünem Balken links — gliedert lange Texte
   * (Qualität: 1 260 px Fließtext) ohne zusätzliche Fläche. Akzent des Bandes,
   * sonst Markengrün.
   */
  h3:not([data-render-as]),
  [data-render-as='3'] {
    padding-left: 16px;
    /* Langschrift: die Kurzform mit var() ließe jsdom im Stiltest fallen */
    border-left-width: 4px;
    border-left-style: solid;
    border-left-color: var(--site-accent, ${({theme:e})=>e.palette.site.green});
  }

  h4:not([data-render-as]),
  [data-render-as='4'] {
    font-size: 20px;

    @media (min-width: 640px) {
      font-size: 20px;
    }
  }

  /* Bilder aus dem Crawl sind oft breiter als die Spalte */
  img {
    display: block;
    max-width: 100%;
    height: auto;
    margin: 32px 0;
    border-radius: 24px;
  }

  /* #1562: Zitate und Tabellen der alten Artikel- und Produktseiten (prose) */
  blockquote {
    margin: 32px 0;
    padding-left: 20px;
    border-left: 4px solid ${({theme:e})=>e.palette.site.border};
    font-style: italic;
  }

  blockquote > :last-child {
    margin-bottom: 0;
  }

  table {
    display: block;
    max-width: 100%;
    margin: 32px 0;
    overflow-x: auto;
    border-collapse: collapse;
  }

  th,
  td {
    padding: 12px 14px;
    border-bottom: 1px solid ${({theme:e})=>e.palette.site.border};
    text-align: left;
    vertical-align: top;
  }

  th {
    background: ${({theme:e})=>e.palette.site.tint};
  }

  > :first-child {
    margin-top: 0;
  }

  > :last-child {
    margin-bottom: 0;
  }
`,s=(0,a.default)(()=>e.A(207029).then(e=>e.SiteMarkdownContent),{loadableGenerated:{modules:[975804]}});e.s(["f",0,function({content:e,rendered:a,eagerFirstImage:i,pageHeading:n,imageAlt:d,remarkPlugins:l,dataTestId:o,className:c}){let h=void 0!==a;return(0,t.jsx)(r,{className:c,"data-testid":o,"data-rendered":h?"server":"client",children:h?a:(0,t.jsx)(s,{content:e,eagerFirstImage:i,pageHeading:n,imageAlt:d,remarkPlugins:l})})}],980367),e.s([],510716)},318341,864648,e=>{var t=e.i(843476),a=e.i(370891),i=e.i(114009),n=e.i(997053);let r=n.U.div.withConfig({displayName:"CmsAiNotices.styles__Root",componentId:"sc-99743ee3-0"})`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.margin.extrasmall};
  margin-bottom: ${({theme:e})=>e.margin.small};
`;e.s(["f",0,({locale:e,language:n,machineLocales:s,machineUiLocales:d,originalHref:l,testIdPrefix:o})=>{let c=(0,i.m)(e,s),h=!!d?.includes(n);return c||h?(0,t.jsxs)(r,{"data-testid":`${o}-ai-notices`,children:[c&&(0,t.jsx)(a.f,{kind:"machineTranslation",dataTestId:`${o}-ai-label`,originalHref:l}),h&&(0,t.jsx)(a.f,{kind:"machineUiTranslation",dataTestId:`${o}-ai-label-ui`,compact:!0})]}):null}],864648),e.s([],318341)},349953,645944,e=>{var t=e.i(843476),a=e.i(997053),i=e.i(547905);let n=a.U.section.withConfig({displayName:"HeroSection.styles__Root",componentId:"sc-7b18f4de-0"})`
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
  ${e=>(0,i.n)(e.$edges)}
  ${e=>(0,i.o)("bottom",e.theme.padding.large,e.$edges)}

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
`,r=a.U.div.withConfig({displayName:"HeroSection.styles__Content",componentId:"sc-7b18f4de-1"})`
  position: relative;
  z-index: 2;
  max-width: 800px;
  /* #2126: als Flex-Kind wuchs der Inhalt sonst auf die Breite seines längsten
     Worts („Kunststoffidentifikation“ in Versalien) und lief links und rechts
     aus dem Hero (overflow: hidden schnitt ab). Mit min-width: 0 bleibt er in
     der Zeile, lange Wörter brechen innerhalb (Silbentrennung #2127). */
  min-width: 0;
  text-align: center;
`,s=a.U.div.withConfig({displayName:"HeroSection.styles__HeadlineWrapper",componentId:"sc-7b18f4de-2"})`
  margin-bottom: ${e=>e.theme.margin.default};

  h1,
  h2 {
    color: ${e=>e.theme.palette.default.white} !important;
  }
  /* #2126/#2127: am Telefon steht die h1 über die Theme-Skala eine Stufe kleiner
     (Headline-Atom, mobile Stufe = h2-Größe) — hier keine eigene Größe */
`,d=a.U.div.withConfig({displayName:"HeroSection.styles__SubheadlineWrapper",componentId:"sc-7b18f4de-3"})`
  margin-bottom: ${e=>e.theme.margin.large};

  p,
  span {
    color: rgba(255, 255, 255, 0.9) !important;
  }
`,l=a.U.div.withConfig({displayName:"HeroSection.styles__CtaWrapper",componentId:"sc-7b18f4de-4"})`
  display: flex;
  justify-content: center;
  gap: ${e=>e.theme.margin.small};
`;var o=e.i(699779),c=e.i(929842),h=e.i(703089),p=e.i(247902),m=e.i(825969);e.i(710788);var u=e.i(363451);e.i(311046);var f=e.i(499881);let g={bottom:{placement:"inner",color:"white"}};e.s(["f",0,e=>{let{headline:a,subheadline:i,backgroundImage:x,ctaText:b,ctaHref:y,overlay:w=!0,className:k,dataTestId:$="hero-section",edges:v=g}=e;return(0,t.jsxs)(n,{className:k,"data-testid":$,$backgroundImage:x,$overlay:w,$edges:v,children:[(0,f.N)(v)&&(0,t.jsx)(u.f,{edges:v,zIndex:1,dataTestId:`${$}-edge`}),(0,t.jsxs)(r,{children:[(0,t.jsx)(s,{children:(0,t.jsx)(o.f,{importance:c.D.h1,dataTestId:`${$}-headline`,children:a})}),i&&(0,t.jsx)(d,{children:(0,t.jsx)(h.p,{variant:h.g.bodybig,dataTestId:`${$}-subheadline`,children:i})}),b&&y&&(0,t.jsx)(l,{children:(0,t.jsx)(p.f,{href:y,modifier:m.j.SECONDARY,label:b,disabled:!1,loading:!1,dataTestId:`${$}-cta`,children:b})})]})]})}],645944),e.s([],349953)},4185,566457,e=>{var t=e.i(843476),a=e.i(325164);e.i(945304);var i=e.i(977194);e.i(429307);var n=e.i(159255);e.i(836326);var r=e.i(690204),s=e.i(997053),d=e.i(726029),l=e.i(547905);let o="120px",c=s.U.article.withConfig({displayName:"PartnerCard.styles__Root",componentId:"sc-8fae0cdf-0"})`
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
  ${({$row:e,theme:t})=>e&&s.m`
      display: grid;
      grid-template-columns: ${o} minmax(0, 1fr);
      gap: ${t.margin.default};
      align-items: center;
      padding: ${t.padding.default};
    `}
`,h=s.U.div.withConfig({displayName:"PartnerCard.styles__RowLogo",componentId:"sc-8fae0cdf-1"})`
  position: relative;
  box-sizing: border-box;
  width: ${o};
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
`,p=s.U.div.withConfig({displayName:"PartnerCard.styles__RowBody",componentId:"sc-8fae0cdf-2"})`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({theme:e})=>e.margin.extrasmall};
  min-width: 0;
`,m=s.U.span.withConfig({displayName:"PartnerCard.styles__Role",componentId:"sc-8fae0cdf-3"})`
  ${d.M}
  gap: ${({theme:e})=>e.margin.extrasmall};

  &::before {
    content: '';
    flex: none;
    width: ${"8px"};
    height: ${"8px"};
    background: ${({theme:e})=>e.palette.site.green};
    ${l.p}
  }
`,u=s.U.div.withConfig({displayName:"PartnerCard.styles__LogoWrapper",componentId:"sc-8fae0cdf-4"})`
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  border-radius: 12px 12px 0 0;

  img {
    object-fit: contain;
  }
`,f=s.U.a.withConfig({displayName:"PartnerCard.styles__LogoLink",componentId:"sc-8fae0cdf-5"})`
  position: absolute;
  inset: 0;
  display: block;
`,g=s.U.div.withConfig({displayName:"PartnerCard.styles__Body",componentId:"sc-8fae0cdf-6"})`
  ${d.H}
  display: flex;
  flex-direction: column;
  gap: 24px;
`,x=s.U.div.withConfig({displayName:"PartnerCard.styles__CheckWrapper",componentId:"sc-8fae0cdf-7"})`
  display: flex;
  align-items: flex-start;
  min-height: 39px;
`,b=s.U.h3.withConfig({displayName:"PartnerCard.styles__Name",componentId:"sc-8fae0cdf-8"})`
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
`,y=s.U.p.withConfig({displayName:"PartnerCard.styles__Description",componentId:"sc-8fae0cdf-9"})`
  ${d.n}
  margin: 0;
`;var w=e.i(437992);e.s(["f",0,e=>{let{companyName:s,logoUrl:d,logoAlt:l,description:o,websiteUrl:k,variant:$="full",role:v,headingLevel:j=3,className:I,dataTestId:_="partner-card"}=e,C="logo"===$&&!!d,z=(0,t.jsx)(b,{as:2===j?"h2":"h3","data-testid":`${_}-name`,"data-heading-level":j,children:k?(0,t.jsx)(n.f,{href:k,target:"_blank",stretched:!0,dataTestId:`${_}-link`,children:s}):s}),P=o?(0,t.jsx)(y,{"data-testid":`${_}-description`,children:o}):null;if("row"===$)return(0,t.jsxs)(c,{className:I,"data-testid":_,"data-variant":"row","data-linked":k?"true":"false",$row:!0,children:[k&&(0,t.jsx)(r.f,{dataTestId:`${_}-halo`}),d&&(0,t.jsx)(h,{children:(0,t.jsx)(a.default,{src:d,alt:l||`${s} logo`,fill:!0,sizes:"120px","data-testid":`${_}-logo`})}),(0,t.jsxs)(p,{children:[v&&(0,t.jsx)(m,{"data-testid":`${_}-role`,children:v}),z,P]})]});let N=d?(0,t.jsx)(a.default,{src:d,alt:l||`${s} logo`,fill:!0,sizes:"(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw","data-testid":`${_}-logo`}):null;return(0,t.jsxs)(c,{className:I,"data-testid":_,"data-variant":C?"logo":"full","data-linked":k?"true":"false",children:[k&&(0,t.jsx)(r.f,{dataTestId:`${_}-halo`}),N&&(0,t.jsx)(u,{children:C&&k?(0,t.jsx)(f,{href:k,...w.d,"aria-label":s,"data-testid":`${_}-link`,children:N}):N}),(0,t.jsx)(g,{children:!C&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(x,{children:(0,t.jsx)(i.c,{name:"check",tone:"green",shape:"hex",dataTestId:`${_}-check`})}),(0,t.jsxs)("div",{children:[z,P]})]})})]})}],566457),e.s([],4185)},496693,e=>{var t=e.i(843476),a=e.i(885895);e.i(318341);var i=e.i(864648);e.i(821194);var n=e.i(99222),r=e.i(507924),s=e.i(284248),d=e.i(437772);e.i(816017);var l=e.i(217997),o=e.i(152186),c=e.i(856337),h=e.i(33180),p=e.i(703089),m=e.i(699779),u=e.i(929842);e.i(114178);var f=e.i(861133);e.i(349953);var g=e.i(645944);e.i(177607);var x=e.i(422180);e.i(845166);var b=e.i(609588);e.i(4185);var y=e.i(566457);e.i(315481);var w=e.i(10003);e.i(510716);var k=e.i(980367),$=e.i(997053);let v=$.U.nav.withConfig({displayName:"PartnerProductContent.styles__MoreProducts",componentId:"sc-347ebac4-0"})`
  margin-top: ${({theme:e})=>e.margin.default};
`,j=$.U.ul.withConfig({displayName:"PartnerProductContent.styles__MoreProductsList",componentId:"sc-347ebac4-1"})`
  margin: 0;
  padding: 0;
  list-style: none;

  li + li {
    margin-top: 8px;
  }
`;e.i(411206);var I=e.i(173972),_=e.i(891567);e.s(["default",0,function({product:e,structuredData:$,bodyRendered:C,machineLocales:z,machineUiLocales:P}){let{language:N}=(0,a.N)(),{tr:T}=(0,n.f)(N),S=(0,s.C)(),U=(0,r.u)(e.title,S),A=(0,r.u)(e.description,S),L=(0,r.u)(e.body,S);return(0,t.jsxs)(h.f,{children:[$&&(0,t.jsx)(l.f,{data:$}),(0,t.jsx)(o.f,{children:(0,t.jsx)(c.f,{xs:12,md:12,children:(0,t.jsx)(f.f,{items:[{label:T("partnerShowroom.breadcrumb.partners"),href:"/partners/"},{label:e.partner.name,href:`/partners/${e.partner.slug}/`},{label:U}],dataTestId:"partner-product-breadcrumb"})})}),(0,t.jsx)(g.f,{headline:U,subheadline:A,dataTestId:"partner-product-hero"}),(0,t.jsxs)(o.f,{children:[(0,t.jsxs)(c.f,{xs:12,md:8,children:[(0,t.jsx)(i.f,{locale:S,language:N,machineLocales:z,machineUiLocales:P,originalHref:`/partners/${e.partner.slug}/${e.slug}`,testIdPrefix:"partner-product"}),L&&(0,t.jsx)(k.f,{content:L,rendered:(0,d.z)(C,S),eagerFirstImage:!0,dataTestId:"partner-product-body"}),e.features.length>0&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(m.f,{importance:u.D.h2,children:T("partnerShowroom.features.headline")}),(0,t.jsx)(o.f,{children:e.features.map((e,a)=>(0,t.jsx)(c.f,{xs:12,md:6,children:(0,t.jsx)(b.f,{title:(0,r.u)(e.title,S),description:(0,r.u)(e.description,S),dataTestId:`partner-product-feature-${a}`})},a))})]})]}),(0,t.jsxs)(c.f,{xs:12,md:4,children:[(0,t.jsx)(y.f,{companyName:e.partner.name,logoUrl:e.partner.logoUrl??void 0,logoAlt:(0,r.u)(e.partner.logoAlt,S)||void 0,description:A,websiteUrl:e.partner.websiteUrl??void 0,headingLevel:2,dataTestId:"partner-product-card"}),e.partner.otherProducts.length>0&&(0,t.jsxs)(v,{"aria-labelledby":"partner-product-more-headline","data-testid":"partner-product-more","data-count":e.partner.otherProducts.length,children:[(0,t.jsx)(m.f,{importance:u.D.h3,children:(0,t.jsx)("span",{id:"partner-product-more-headline",children:T("partnerShowroom.moreProducts",{defaultValue:"Weitere Produkte von {{partner}}",partner:e.partner.name})})}),(0,t.jsx)(j,{children:e.partner.otherProducts.map((a,i)=>(0,t.jsx)("li",{children:(0,t.jsx)(w.NavLink,{href:`/partners/${e.partner.slug}/${a.slug}`,"data-testid":`partner-product-more-${i}`,children:(0,r.u)(a.title,S)})},a.slug))})]})]})]}),(0,t.jsx)(x.f,{headline:T("partnerShowroom.cta.headline"),buttonText:T("partnerShowroom.cta.button"),buttonHref:"/contact-us",dataTestId:"partner-product-cta"}),(0,t.jsx)(o.f,{children:(0,t.jsxs)(c.f,{xs:12,md:12,children:[(0,t.jsx)(m.f,{importance:u.D.h2,children:T("partnerShowroom.contact.headline")}),(0,t.jsxs)(p.p,{variant:p.g.body,children:[T("partnerShowroom.contact.phone"),":"," ",(0,t.jsx)(I.f,{kind:"tel",value:_.h.central.e164,place:"partnerProduct",dataTestId:"partner-product-contact-phone",children:_.h.central.international}),(0,t.jsx)("br",{}),T("partnerShowroom.contact.email"),":"," ",(0,t.jsx)(I.f,{kind:"mail",value:_._.info,place:"partnerProduct",dataTestId:"partner-product-contact-email"})]})]})})]})}],496693)},437772,e=>{function t(e,t){if(!e)return;if(t in e)return e[t];let a=Object.keys(e)[0];return void 0===a?void 0:e[a]}function a(e,a){return t(e,a)}e.s(["h",0,function(e,t,i,n,r){if(e)return a(e[void 0===r?`${i}:${n}`:`${i}:${n}:${r}`],t)},"z",0,a,"r",0,t])},178446,e=>{e.s(["f",0,function(e){if(!e.startsWith("/")||e.startsWith("//"))return e;let t=e.search(/[?#]/),a=-1===t?e:e.slice(0,t),i=-1===t?"":e.slice(t);return`${a.endsWith("/")||a.slice(a.lastIndexOf("/")+1).includes(".")?a:`${a}/`}${i}`}])}],207029,e=>{e.v(t=>Promise.all(["static/chunks/00-i_2tf8b72s.js","static/chunks/2oq-uevcwhldh.js"].map(t=>e.l(t))).then(()=>t(975804)))},307446,e=>{e.v(t=>Promise.all(["static/chunks/0fdkyhd6myy0b.js","static/chunks/1z9k6-mk4t9_g.js","static/chunks/3h4paqtye6-p2.js","static/chunks/418xdx7k7y4kc.js","static/chunks/22khcvznnl4iy.js"].map(t=>e.l(t))).then(()=>t(293601)))},460385,e=>{e.v(t=>Promise.all(["static/chunks/2ty5t5gn_xsof.js","static/chunks/1_9_-npd70217.js","static/chunks/1aq7e17w8g1p-.js","static/chunks/3obqb41wyv4ax.js","static/chunks/3h4paqtye6-p2.js","static/chunks/2oq-uevcwhldh.js"].map(t=>e.l(t))).then(()=>t(851724)))},767483,e=>{e.v(t=>Promise.all(["static/chunks/2_i37j2td-_b6.js","static/chunks/0nbfwvngp7p5k.js","static/chunks/2-uxo2bcn21qb.js","static/chunks/1w92blmhcw0-f.js","static/chunks/3h4paqtye6-p2.js","static/chunks/3obqb41wyv4ax.js"].map(t=>e.l(t))).then(()=>t(806880)))}]);