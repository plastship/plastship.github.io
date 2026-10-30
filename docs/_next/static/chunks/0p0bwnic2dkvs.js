(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,[370891,114009,e=>{var t=e.i(843476),a=e.i(495835);e.i(821194);var i=e.i(99222);let n={assistant:{key:"ai.label.assistant",defaultValue:"KI-Assistent: Antworten werden von einer KI erzeugt und können Fehler enthalten."},voice:{key:"ai.label.voice",defaultValue:"KI-Sprachfunktion: Ihre Sprache wird per KI in Text umgewandelt, Antworten liest eine synthetische Stimme vor."},machineTranslation:{key:"ai.label.machineTranslation",defaultValue:"Diese Fassung wurde mit KI maschinell übersetzt."},analysis:{key:"ai.label.analysis",defaultValue:"KI-Analyse"},machineUiTranslation:{key:"ai.label.machineUiTranslation",defaultValue:"Die Oberfläche ist in dieser Sprache teilweise maschinell übersetzt."}},r={key:"ai.label.badge",defaultValue:"KI"},s={key:"ai.label.original",defaultValue:"Zur deutschen Originalfassung"};e.s(["Z",0,r,"N",0,s,"l",0,n,"O",0,function(e){return!!(e&&(e.aiAnalyzedAt||e.aiModel))},"m",0,function(e,t){return!!t?.includes(e)}],114009);var l=e.i(178446),d=e.i(997053);let o=d.U.span.withConfig({displayName:"AiLabel.styles__Root",componentId:"sc-107ca0c3-0"})`
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  gap: ${({theme:e})=>e.margin.extrasmall};
  font-family: ${({theme:e})=>e.font.secondaryFamily};
  font-size: ${({theme:e})=>e.font.text.caption.desktop.fontSize};
  line-height: ${({theme:e})=>e.font.text.caption.desktop.lineHeight};
  color: inherit;
`,c=d.U.span.withConfig({displayName:"AiLabel.styles__Badge",componentId:"sc-107ca0c3-1"})`
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
`,p=d.U.span.withConfig({displayName:"AiLabel.styles__Text",componentId:"sc-107ca0c3-2"})``,h=d.U.a.withConfig({displayName:"AiLabel.styles__OriginalLink",componentId:"sc-107ca0c3-3"})`
  color: inherit;
  text-decoration: underline;
`;e.s(["f",0,({kind:e,dataTestId:d,compact:m=!1,originalHref:u,className:f})=>{let{tr:g}=(0,i.f)(),x=g(n[e].key,{defaultValue:n[e].defaultValue});return(0,t.jsxs)(o,{className:f,"data-testid":d??`ai-label-${e}`,"data-kind":e,role:"note",title:m?x:void 0,"aria-label":m?x:void 0,children:[(0,t.jsxs)(c,{"data-testid":`${d??`ai-label-${e}`}-badge`,children:[(0,t.jsx)(a.f,{}),g(r.key,{defaultValue:r.defaultValue})]}),!m&&(0,t.jsx)(p,{children:x}),u&&(0,t.jsx)(h,{href:(0,l.f)(u),hrefLang:"de","data-testid":`${d??`ai-label-${e}`}-original`,children:g(s.key,{defaultValue:s.defaultValue})})]})}],370891)},510716,980367,e=>{var t=e.i(843476),a=e.i(770703),i=e.i(997053),n=e.i(726029);let r=i.U.div.withConfig({displayName:"SiteMarkdown.styles__Root",componentId:"sc-f615d01e-0"})`
  ${n.b}
  box-sizing: border-box;
  max-width: 100%;
  overflow-wrap: break-word;

  p {
    margin: 0 0 20px;
  }

  /* _reset.scss nimmt den Listen die Punkte — hier wie prose zurück */
  ul,
  ol {
    margin: 20px 0;
    padding-left: 26px;
  }

  /* #1959: Aufzählungen tragen den Sechseck-Punkt aus siteProse (::before) */
  ul {
    list-style-type: none;
  }

  ol {
    list-style-type: decimal;
  }

  li {
    margin: 8px 0;
    padding-left: 6px;
  }

  li + li {
    margin-top: 8px;
  }

  li > p {
    margin: 0;
  }

  ol li::marker {
    color: ${({theme:e})=>e.palette.site.text};
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
    margin: 48px 0 32px;
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
`,s=(0,a.default)(()=>e.A(207029).then(e=>e.SiteMarkdownContent),{loadableGenerated:{modules:[975804]}});e.s(["f",0,function({content:e,rendered:a,eagerFirstImage:i,pageHeading:n,imageAlt:l,remarkPlugins:d,dataTestId:o,className:c}){let p=void 0!==a;return(0,t.jsx)(r,{className:c,"data-testid":o,"data-rendered":p?"server":"client",children:p?a:(0,t.jsx)(s,{content:e,eagerFirstImage:i,pageHeading:n,imageAlt:l,remarkPlugins:d})})}],980367),e.s([],510716)},318341,864648,e=>{var t=e.i(843476),a=e.i(370891),i=e.i(114009),n=e.i(997053);let r=n.U.div.withConfig({displayName:"CmsAiNotices.styles__Root",componentId:"sc-99743ee3-0"})`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.margin.extrasmall};
  margin-bottom: ${({theme:e})=>e.margin.small};
`;e.s(["f",0,({locale:e,language:n,machineLocales:s,machineUiLocales:l,originalHref:d,testIdPrefix:o})=>{let c=(0,i.m)(e,s),p=!!l?.includes(n);return c||p?(0,t.jsxs)(r,{"data-testid":`${o}-ai-notices`,children:[c&&(0,t.jsx)(a.f,{kind:"machineTranslation",dataTestId:`${o}-ai-label`,originalHref:d}),p&&(0,t.jsx)(a.f,{kind:"machineUiTranslation",dataTestId:`${o}-ai-label-ui`,compact:!0})]}):null}],864648),e.s([],318341)},4185,566457,e=>{var t=e.i(843476),a=e.i(325164);e.i(945304);var i=e.i(977194);e.i(429307);var n=e.i(159255);e.i(836326);var r=e.i(690204),s=e.i(997053),l=e.i(726029),d=e.i(547905);let o="120px",c=s.U.article.withConfig({displayName:"PartnerCard.styles__Root",componentId:"sc-8fae0cdf-0"})`
  ${(0,l.O)(!0)}
  /* #2176: mit Website ist die ganze Karte der Link (gestreckter Name-Link) */
  ${l.Q}
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
`,p=s.U.div.withConfig({displayName:"PartnerCard.styles__RowLogo",componentId:"sc-8fae0cdf-1"})`
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
`,h=s.U.div.withConfig({displayName:"PartnerCard.styles__RowBody",componentId:"sc-8fae0cdf-2"})`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({theme:e})=>e.margin.extrasmall};
  min-width: 0;
`,m=s.U.span.withConfig({displayName:"PartnerCard.styles__Role",componentId:"sc-8fae0cdf-3"})`
  ${l.M}
  gap: ${({theme:e})=>e.margin.extrasmall};

  &::before {
    content: '';
    flex: none;
    width: ${"8px"};
    height: ${"8px"};
    background: ${({theme:e})=>e.palette.site.green};
    ${d.p}
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
  ${l.H}
  display: flex;
  flex-direction: column;
  gap: 24px;
`,x=s.U.div.withConfig({displayName:"PartnerCard.styles__CheckWrapper",componentId:"sc-8fae0cdf-7"})`
  display: flex;
  align-items: flex-start;
  min-height: 39px;
`,b=s.U.h3.withConfig({displayName:"PartnerCard.styles__Name",componentId:"sc-8fae0cdf-8"})`
  ${l.Z}
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
  ${l.n}
  margin: 0;
`;var w=e.i(437992);e.s(["f",0,e=>{let{companyName:s,logoUrl:l,logoAlt:d,description:o,websiteUrl:k,variant:j="full",role:v,headingLevel:$=3,className:I,dataTestId:_="partner-card"}=e,C="logo"===j&&!!l,P=(0,t.jsx)(b,{as:2===$?"h2":"h3","data-testid":`${_}-name`,"data-heading-level":$,children:k?(0,t.jsx)(n.f,{href:k,target:"_blank",stretched:!0,dataTestId:`${_}-link`,children:s}):s}),z=o?(0,t.jsx)(y,{"data-testid":`${_}-description`,children:o}):null;if("row"===j)return(0,t.jsxs)(c,{className:I,"data-testid":_,"data-variant":"row","data-linked":k?"true":"false",$row:!0,children:[k&&(0,t.jsx)(r.f,{dataTestId:`${_}-halo`}),l&&(0,t.jsx)(p,{children:(0,t.jsx)(a.default,{src:l,alt:d||`${s} logo`,fill:!0,sizes:"120px","data-testid":`${_}-logo`})}),(0,t.jsxs)(h,{children:[v&&(0,t.jsx)(m,{"data-testid":`${_}-role`,children:v}),P,z]})]});let N=l?(0,t.jsx)(a.default,{src:l,alt:d||`${s} logo`,fill:!0,sizes:"(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw","data-testid":`${_}-logo`}):null;return(0,t.jsxs)(c,{className:I,"data-testid":_,"data-variant":C?"logo":"full","data-linked":k?"true":"false",children:[k&&(0,t.jsx)(r.f,{dataTestId:`${_}-halo`}),N&&(0,t.jsx)(u,{children:C&&k?(0,t.jsx)(f,{href:k,...w.d,"aria-label":s,"data-testid":`${_}-link`,children:N}):N}),(0,t.jsx)(g,{children:!C&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(x,{children:(0,t.jsx)(i.c,{name:"check",tone:"green",shape:"hex",dataTestId:`${_}-check`})}),(0,t.jsxs)("div",{children:[P,z]})]})})]})}],566457),e.s([],4185)},496693,e=>{var t=e.i(843476),a=e.i(885895);e.i(318341);var i=e.i(864648);e.i(821194);var n=e.i(99222),r=e.i(507924),s=e.i(284248),l=e.i(437772);e.i(816017);var d=e.i(217997),o=e.i(152186),c=e.i(856337),p=e.i(33180),h=e.i(703089),m=e.i(699779),u=e.i(929842);e.i(114178);var f=e.i(861133);e.i(349953);var g=e.i(645944);e.i(177607);var x=e.i(422180);e.i(845166);var b=e.i(609588);e.i(4185);var y=e.i(566457);e.i(315481);var w=e.i(10003);e.i(510716);var k=e.i(980367),j=e.i(997053);let v=j.U.nav.withConfig({displayName:"PartnerProductContent.styles__MoreProducts",componentId:"sc-347ebac4-0"})`
  margin-top: ${({theme:e})=>e.margin.default};
`,$=j.U.ul.withConfig({displayName:"PartnerProductContent.styles__MoreProductsList",componentId:"sc-347ebac4-1"})`
  margin: 0;
  padding: 0;
  list-style: none;

  li + li {
    margin-top: 8px;
  }
`;e.i(411206);var I=e.i(173972),_=e.i(891567);e.s(["default",0,function({product:e,structuredData:j,bodyRendered:C,machineLocales:P,machineUiLocales:z}){let{language:N}=(0,a.N)(),{tr:T}=(0,n.f)(N),U=(0,s.C)(),A=(0,r.u)(e.title,U),S=(0,r.u)(e.description,U),L=(0,r.u)(e.body,U);return(0,t.jsxs)(p.f,{children:[j&&(0,t.jsx)(d.f,{data:j}),(0,t.jsx)(o.f,{children:(0,t.jsx)(c.f,{xs:12,md:12,children:(0,t.jsx)(f.f,{items:[{label:T("partnerShowroom.breadcrumb.partners"),href:"/partners/"},{label:e.partner.name,href:`/partners/${e.partner.slug}/`},{label:A}],dataTestId:"partner-product-breadcrumb"})})}),(0,t.jsx)(g.f,{headline:A,subheadline:S,dataTestId:"partner-product-hero"}),(0,t.jsxs)(o.f,{children:[(0,t.jsxs)(c.f,{xs:12,md:8,children:[(0,t.jsx)(i.f,{locale:U,language:N,machineLocales:P,machineUiLocales:z,originalHref:`/partners/${e.partner.slug}/${e.slug}`,testIdPrefix:"partner-product"}),L&&(0,t.jsx)(k.f,{content:L,rendered:(0,l.z)(C,U),eagerFirstImage:!0,dataTestId:"partner-product-body"}),e.features.length>0&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(m.f,{importance:u.D.h2,children:T("partnerShowroom.features.headline")}),(0,t.jsx)(o.f,{children:e.features.map((e,a)=>(0,t.jsx)(c.f,{xs:12,md:6,children:(0,t.jsx)(b.f,{title:(0,r.u)(e.title,U),description:(0,r.u)(e.description,U),dataTestId:`partner-product-feature-${a}`})},a))})]})]}),(0,t.jsxs)(c.f,{xs:12,md:4,children:[(0,t.jsx)(y.f,{companyName:e.partner.name,logoUrl:e.partner.logoUrl??void 0,logoAlt:(0,r.u)(e.partner.logoAlt,U)||void 0,description:S,websiteUrl:e.partner.websiteUrl??void 0,headingLevel:2,dataTestId:"partner-product-card"}),e.partner.otherProducts.length>0&&(0,t.jsxs)(v,{"aria-labelledby":"partner-product-more-headline","data-testid":"partner-product-more","data-count":e.partner.otherProducts.length,children:[(0,t.jsx)(m.f,{importance:u.D.h3,children:(0,t.jsx)("span",{id:"partner-product-more-headline",children:T("partnerShowroom.moreProducts",{defaultValue:"Weitere Produkte von {{partner}}",partner:e.partner.name})})}),(0,t.jsx)($,{children:e.partner.otherProducts.map((a,i)=>(0,t.jsx)("li",{children:(0,t.jsx)(w.NavLink,{href:`/partners/${e.partner.slug}/${a.slug}`,"data-testid":`partner-product-more-${i}`,children:(0,r.u)(a.title,U)})},a.slug))})]})]})]}),(0,t.jsx)(x.f,{headline:T("partnerShowroom.cta.headline"),buttonText:T("partnerShowroom.cta.button"),buttonHref:"/contact-us",dataTestId:"partner-product-cta"}),(0,t.jsx)(o.f,{children:(0,t.jsxs)(c.f,{xs:12,md:12,children:[(0,t.jsx)(m.f,{importance:u.D.h2,children:T("partnerShowroom.contact.headline")}),(0,t.jsxs)(h.p,{variant:h.g.body,children:[T("partnerShowroom.contact.phone"),":"," ",(0,t.jsx)(I.f,{kind:"tel",value:_.h.central.e164,place:"partnerProduct",dataTestId:"partner-product-contact-phone",children:_.h.central.international}),(0,t.jsx)("br",{}),T("partnerShowroom.contact.email"),":"," ",(0,t.jsx)(I.f,{kind:"mail",value:_._.info,place:"partnerProduct",dataTestId:"partner-product-contact-email"})]})]})})]})}],496693)},437772,e=>{function t(e,t){if(!e)return;if(t in e)return e[t];let a=Object.keys(e)[0];return void 0===a?void 0:e[a]}function a(e,a){return t(e,a)}e.s(["h",0,function(e,t,i,n,r){if(e)return a(e[void 0===r?`${i}:${n}`:`${i}:${n}:${r}`],t)},"z",0,a,"r",0,t])},178446,e=>{e.s(["f",0,function(e){if(!e.startsWith("/")||e.startsWith("//"))return e;let t=e.search(/[?#]/),a=-1===t?e:e.slice(0,t),i=-1===t?"":e.slice(t);return`${a.endsWith("/")||a.slice(a.lastIndexOf("/")+1).includes(".")?a:`${a}/`}${i}`}])}],207029,e=>{e.v(t=>Promise.all(["static/chunks/2ck35kk6udevc.js","static/chunks/2oq-uevcwhldh.js"].map(t=>e.l(t))).then(()=>t(975804)))},307446,e=>{e.v(t=>Promise.all(["static/chunks/0fdkyhd6myy0b.js","static/chunks/1z9k6-mk4t9_g.js","static/chunks/3h4paqtye6-p2.js","static/chunks/418xdx7k7y4kc.js","static/chunks/22khcvznnl4iy.js"].map(t=>e.l(t))).then(()=>t(293601)))},460385,e=>{e.v(t=>Promise.all(["static/chunks/1-h4x15wuzj1l.js","static/chunks/1_9_-npd70217.js","static/chunks/1aq7e17w8g1p-.js","static/chunks/3obqb41wyv4ax.js","static/chunks/3h4paqtye6-p2.js","static/chunks/2oq-uevcwhldh.js"].map(t=>e.l(t))).then(()=>t(851724)))},767483,e=>{e.v(t=>Promise.all(["static/chunks/2_i37j2td-_b6.js","static/chunks/2aczwenenywb8.js","static/chunks/2-uxo2bcn21qb.js","static/chunks/17ii97gpladp2.js","static/chunks/3h4paqtye6-p2.js","static/chunks/3obqb41wyv4ax.js"].map(t=>e.l(t))).then(()=>t(806880)))}]);