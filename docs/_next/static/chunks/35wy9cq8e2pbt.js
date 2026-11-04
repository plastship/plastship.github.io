(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,[510716,980367,e=>{var t=e.i(843476),a=e.i(770703),i=e.i(997053),n=e.i(726029);let s=i.U.div.withConfig({displayName:"SiteMarkdown.styles__Root",componentId:"sc-f615d01e-0"})`
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
`,r=(0,a.default)(()=>e.A(207029).then(e=>e.SiteMarkdownContent),{loadableGenerated:{modules:[975804]}});e.s(["f",0,function({content:e,rendered:a,eagerFirstImage:i,pageHeading:n,imageAlt:d,remarkPlugins:l,dataTestId:o,className:c}){let h=void 0!==a;return(0,t.jsx)(s,{className:c,"data-testid":o,"data-rendered":h?"server":"client",children:h?a:(0,t.jsx)(r,{content:e,eagerFirstImage:i,pageHeading:n,imageAlt:d,remarkPlugins:l})})}],980367),e.s([],510716)},624813,775175,e=>{var t=e.i(843476),a=e.i(271645),i=e.i(325164);e.i(311046);var n=e.i(859146);e.i(429307);var s=e.i(159255),r=e.i(997053),d=e.i(474704),l=e.i(726029),o=e.i(547905);let c=r.m`
  [data-accent-ring] {
    stroke-dashoffset: 0;
  }

  [data-accent-body] {
    fill: ${({theme:e})=>e.palette.site.greenDark};
  }

  [data-accent-arrow] {
    transform: rotate(0deg) translateX(1px);
  }

  [data-card-image] img {
    transform: scale(1.03);
  }
`,h=r.m`
  padding: 0;
  border: 0;
  border-radius: 0;
  background: transparent;
  box-shadow: none;
  /* siteCard setzt die Bandfarben zurück (Karte bleibt hell) — frei stehend gelten sie wieder */
  --site-heading: inherit;
  --site-text: inherit;
  --site-muted: inherit;
  --site-accent: inherit;
  color: ${({theme:e})=>(0,l.N)("text",e.palette.site.text)};

  &:hover,
  &:focus-within {
    box-shadow: none;
  }

  a[data-stretched='true'] svg {
    color: ${({theme:e})=>(0,l.N)("accent",e.palette.site.blue)};
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      ${c}
    }
  }

  &:has(a:focus-visible),
  &[data-active='true'] {
    ${c}
  }
`,m=r.U.article.withConfig({displayName:"NewsCard.styles__Root",componentId:"sc-2d756514-0"})`
  ${(0,l.O)(!0)}
  /* #2176: mit Ziel ist die ganze Karte der Link (gestreckter Titel-Link) */
  ${l.Q}
  display: flex;
  flex-direction: column;
  color: ${({theme:e})=>e.palette.site.text};

  /*
   * Volle Höhe nur als einziges Kind (Rasterzelle, Spalte): so stehen Karten
   * einer Reihe gleich hoch. Untereinander gestapelt (verwandte Artikel)
   * wüchse sonst jede Karte auf die Höhe der ganzen Spalte.
   */
  height: auto;

  &:only-child {
    height: 100%;
  }

  & + & {
    margin-top: 16px;
  }

  /* #2229: Innenabstand aus der Theme-Skala — Telefon margin.default, ab sm margin.large (32 px) */
  /* #2232: rahmenlos ohne Polster — die Media Query hier ginge sonst vor (at-rules stehen hinter der Grundregel) */
  ${({$roomy:e,$frameless:t,theme:a})=>e&&!t&&r.m`
      padding: ${a.margin.default};

      @media (min-width: ${d.y.breakpoints.sm}) {
        padding: ${a.margin.large};
      }
    `}

  ${({$frameless:e})=>e&&h}
`,p=r.U.div.withConfig({displayName:"NewsCard.styles__ImageWrapper",componentId:"sc-2d756514-1"})`
  position: relative;
  width: 100%;
  aspect-ratio: 704 / 396;
  overflow: hidden;
  border-radius: 12px 12px 0 0;
  background: ${({theme:e})=>e.palette.site.tint};

  img {
    object-fit: cover;
    transition: transform ${320}ms ${o.y};
  }

  /* #2232: frei stehend rundum abgerundet — unten offen sähe abgeschnitten aus */
  [data-frameless='true'] > & {
    border-radius: 12px;
  }

  @media (prefers-reduced-motion: reduce) {
    img {
      transition: none;
    }
  }
`,g=r.U.svg.withConfig({displayName:"NewsCard.styles__Accent",componentId:"sc-2d756514-2"})`
  position: absolute;
  right: 12px;
  bottom: 12px;
  z-index: 1;
  width: 48px;
  height: 48px;
  overflow: visible;
  pointer-events: none;

  [data-accent-ring] {
    fill: none;
    stroke: ${({theme:e})=>e.palette.site.green};
    stroke-width: 2;
    stroke-linejoin: round;
    stroke-dasharray: 1;
    stroke-dashoffset: 1;
    transition: stroke-dashoffset ${320}ms ${o.y};
  }

  [data-accent-body] {
    fill: ${({theme:e})=>e.palette.site.blueDark};
    transition: fill ${320}ms ${o.y};
  }

  [data-accent-arrow] {
    fill: ${({theme:e})=>e.palette.text.onAccent};
    transform-box: fill-box;
    transform-origin: center;
    transform: rotate(-45deg);
    transition: transform ${320}ms ${o.y};
  }

  @media (prefers-reduced-motion: reduce) {
    [data-accent-ring],
    [data-accent-body],
    [data-accent-arrow] {
      transition: none;
    }
  }
`,f=r.U.span.withConfig({displayName:"NewsCard.styles__DateBadge",componentId:"sc-2d756514-3"})`
  position: absolute;
  top: 12px;
  left: 12px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  ${o.p}
  background: ${({theme:e})=>e.palette.site.blueDark};
  color: ${({theme:e})=>e.palette.text.onAccent};
  font-family: ${({theme:e})=>e.font.primaryFamily};
  pointer-events: none;
`,u=r.U.span.withConfig({displayName:"NewsCard.styles__DateBadgeDay",componentId:"sc-2d756514-4"})`
  font-size: 20px;
  font-weight: 700;
  line-height: 1;
`,x=r.U.span.withConfig({displayName:"NewsCard.styles__DateBadgeMonth",componentId:"sc-2d756514-5"})`
  margin-top: 2px;
  font-size: 11px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: 0.04em;
  text-transform: uppercase;
`,w=r.U.div.withConfig({displayName:"NewsCard.styles__ContentWrapper",componentId:"sc-2d756514-6"})`
  ${l.H}
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;

  /* #2229: Text bündig mit dem Bild, Luft darüber und zwischen den Zeilen aus der Skala */
  ${({$roomy:e,theme:t})=>e&&r.m`
      padding: ${t.margin.default} 0 0;
      gap: ${t.margin.extrasmall};
    `}
`,b=r.U.h3.withConfig({displayName:"NewsCard.styles__Title",componentId:"sc-2d756514-7"})`
  margin: 0;
  font-family: ${({theme:e})=>e.font.primaryFamily};
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0;
  text-transform: none;
  /* #2232: Bandfarbe, falls die Karte frei auf einem Band steht; die gerahmte Karte setzt die Variable zurück */
  color: ${({theme:e})=>(0,l.N)("heading",e.palette.site.text)};
  overflow-wrap: break-word;

  @media (min-width: 640px) {
    font-size: 20px;
  }

  /* #2229: Größe und Zeilenhöhe der Stufe h5 aus dem Theme (Telefon 18/26, sonst 20/26) */
  ${({$roomy:e,theme:t})=>e&&r.m`
      line-height: ${t.font.headline.five.desktop.lineHeight};

      @media (min-width: 640px) {
        font-size: ${t.font.headline.five.desktop.fontSize};
      }
    `}
`,y=r.U.div.withConfig({displayName:"NewsCard.styles__Meta",componentId:"sc-2d756514-8"})`
  font-family: ${({theme:e})=>e.font.secondaryFamily};
  font-size: 14px;
  line-height: 20px;
  color: ${({theme:e})=>(0,l.N)("muted",e.palette.site.muted)};
  overflow-wrap: break-word;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }

  p {
    margin: 0;
  }

  strong {
    font-weight: 700;
  }
`,$=r.U.ul.withConfig({displayName:"NewsCard.styles__Tags",componentId:"sc-2d756514-9"})`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 0;
  padding: 0;
  list-style: none;
`,k=r.U.li.withConfig({displayName:"NewsCard.styles__Tag",componentId:"sc-2d756514-10"})`
  ${l.M}
`,v=(0,n.e)({x:1,y:1,width:46,height:46},(0,n.C)(46)),j=(0,n.e)({x:6,y:6,width:36,height:36},(0,n.C)(36));e.s(["f",0,e=>{let{headline:n,href:r,imageUrl:d,imageAlt:l,date:o,dateBadge:c,subtitle:h,description:z,tags:C=[],imageSizes:_="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw",roomy:N=!1,frameless:I=!1,className:A,dataTestId:T="news-card"}=e,[S,U]=(0,a.useState)(!1),B=(0,a.useCallback)(()=>{("function"!=typeof window.matchMedia||window.matchMedia("(hover: hover) and (pointer: fine)").matches)&&U(!0)},[]),H=(0,a.useCallback)(()=>U(!1),[]),q=(0,a.useCallback)(e=>{(e=>{try{return e.matches(":focus-visible")}catch{return!0}})(e.target)&&U(!0)},[]),P=(0,a.useCallback)(()=>U(!1),[]),R=I&&!!d,D=I&&!!r;return(0,t.jsxs)(m,{className:A,$roomy:N,$frameless:I,"data-testid":T,"data-linked":r?"true":"false","data-roomy":N?"true":void 0,"data-frameless":I?"true":void 0,"data-active":D?S?"true":"false":void 0,onMouseEnter:D?B:void 0,onMouseLeave:D?H:void 0,onFocus:D?q:void 0,onBlur:D?P:void 0,children:[d&&(0,t.jsxs)(p,{"data-testid":`${T}-image-wrapper`,"data-card-image":"",children:[(0,t.jsx)(i.default,{src:d,alt:l||n,fill:!0,sizes:_,"data-testid":`${T}-image`}),c&&(0,t.jsxs)(f,{"aria-hidden":"true","data-testid":`${T}-date-badge`,"data-day":c.day,"data-month":c.month,children:[(0,t.jsx)(u,{children:c.day}),(0,t.jsx)(x,{children:c.month})]}),R&&(0,t.jsxs)(g,{viewBox:"0 0 48 48","aria-hidden":"true",focusable:"false","data-testid":`${T}-accent`,children:[(0,t.jsx)("path",{"data-accent-body":"",d:j}),(0,t.jsx)("path",{"data-accent-ring":"",d:v,pathLength:1}),(0,t.jsx)("g",{transform:"translate(16 16)",children:(0,t.jsx)("path",{"data-accent-arrow":"",d:"M8.9 3.3a.9.9 0 0 1 1.3 0l4.1 4.1a.9.9 0 0 1 0 1.2l-4.1 4.1a.9.9 0 1 1-1.3-1.3l2.6-2.5H2.4a.9.9 0 1 1 0-1.8h9.1L8.9 4.6a.9.9 0 0 1 0-1.3Z"})})]})]}),(0,t.jsxs)(w,{$roomy:N,children:[(0,t.jsx)(b,{$roomy:N,"data-testid":`${T}-headline`,children:r?(0,t.jsx)(s.f,{href:r,stretched:!0,dataTestId:`${T}-link`,children:n}):n}),(o||h||z)&&(0,t.jsxs)(y,{"data-testid":`${T}-meta`,children:[(o||h)&&(0,t.jsxs)("p",{children:[o&&(0,t.jsx)("span",{"data-testid":`${T}-date`,children:o}),o&&h&&" · ",h&&(0,t.jsx)("strong",{"data-testid":`${T}-subtitle`,children:h})]}),z&&(0,t.jsx)("p",{"data-testid":`${T}-description`,children:z})]}),C.length>0&&(0,t.jsx)($,{"data-testid":`${T}-tags`,children:C.map((e,a)=>(0,t.jsx)(k,{"data-testid":`${T}-tag-${a}`,children:e},`${e}-${a}`))})]})]})}],775175),e.s([],624813)},951693,659188,e=>{var t=e.i(843476),a=e.i(997053),i=e.i(726029),n=e.i(474704);let s=a.U.header.withConfig({displayName:"SiteSectionHeader__Root",componentId:"sc-37a85c34-0"})`
  display: flex;
  /* globals.css gibt jedem header die Seitenfarbe; auf Karten und Bändern transparent bleiben */
  background: transparent;
  flex-direction: column;
  gap: ${({theme:e})=>e.margin.small};
  /* #2226: Lesebreite der Textvorgabe (8 + 2) in der Spalte des Blocks; außerhalb des Renderers 768 px */
  max-width: ${(0,n.U)(i.z)};
  ${({$align:e})=>"center"===e&&a.m`
      margin-inline: auto;
      text-align: center;
    `}
`,r=a.U.h2.withConfig({displayName:"SiteSectionHeader__H2",componentId:"sc-37a85c34-1"})`
  ${i.S}
`,d=a.U.div.withConfig({displayName:"SiteSectionHeader__Lead",componentId:"sc-37a85c34-2"})`
  ${i.b}
  white-space: pre-line;
`;e.s(["f",0,function({headline:e,description:a,align:i="left",headingLevel:n=2,dataTestId:l}){if(!e&&!a)return null;let o=a?a.split(/\n\s*\n/).map(e=>e.trim()).filter(Boolean):[];return(0,t.jsxs)(s,{$align:i,"data-testid":l,"data-align":i,children:[e&&(0,t.jsx)(r,{as:1===n?"h1":"h2","data-testid":l?`${l}-headline`:void 0,children:e}),o.length>0&&(0,t.jsx)(d,{"data-testid":l?`${l}-description`:void 0,children:o.map((e,a)=>(0,t.jsx)("p",{children:e},a))})]})}],659188),e.s([],951693)},760413,e=>{var t=e.i(843476),a=e.i(325164);e.i(315481);var i=e.i(10003),n=e.i(885895);e.i(821194);var s=e.i(99222),r=e.i(507924),d=e.i(284248),l=e.i(437772);e.i(816017);var o=e.i(217997),c=e.i(152186),h=e.i(856337),m=e.i(33180);e.i(510716);var p=e.i(980367);e.i(951693);var g=e.i(659188);e.i(177607);var f=e.i(422180),u=e.i(800035),x=e.i(385914),w=e.i(177231),b=e.i(997053);let y=b.U.div.withConfig({displayName:"NewsArticleContent.styles__ArticleRoot",componentId:"sc-db4d78b6-0"})`
  width: 100%;
  min-width: 0;
`;e.i(318341);var $=e.i(864648),k=e.i(546843);e.s(["default",0,function({article:e,related:b,bodyRendered:v,structuredData:j,machineLocales:z,machineUiLocales:C}){let _,{language:N}=(0,n.N)(),{tr:I}=(0,s.f)(N),A=(0,d.C)(),T=(0,r.u)(e.title,A),S=(0,r.u)(e.body,A),U=(0,r.u)(e.excerpt,A),B=e.category,H=B?(0,r.u)(B.label,A):"",q=(0,r.H)(e.publishedAt,A);return(0,t.jsxs)(m.f,{footerEdge:k.q,children:[j&&(0,t.jsx)(o.f,{data:j}),(0,t.jsxs)(y,{"data-testid":"news-article-root","data-slug":e.slug,children:[(0,t.jsx)(c.f,{children:(0,t.jsxs)(h.f,{xs:12,children:[(0,t.jsx)(u.f,{dataTestId:"news-article",headline:T,lead:U&&!((_=U.trim().slice(0,40)).length>0&&S.trim().startsWith(_))?U:void 0,breadcrumb:[{label:I("newsDetail.breadcrumb.news"),href:"/news"},...B?[{label:H,href:`/news/category/${B.slug}`}]:[],{label:T}],kicker:(0,t.jsxs)(w.U,{"data-testid":"news-article-meta","data-slug":e.slug,children:[(0,t.jsx)("span",{"data-testid":"news-article-date",children:q}),B&&(0,t.jsxs)(t.Fragment,{children:[q&&" · ",(0,t.jsx)(i.NavLink,{href:`/news/category/${B.slug}`,"data-testid":"news-article-category",children:H})]})]}),children:e.tags.length>0&&(0,t.jsx)(w.t,{"data-testid":"news-article-tags",children:e.tags.map(e=>(0,t.jsx)(w.s,{"data-testid":`news-article-tag-${e}`,children:e},e))})}),e.imageUrl&&(0,t.jsx)(w.q,{children:(0,t.jsx)(a.default,{src:e.imageUrl,alt:(0,r.u)(e.imageAlt,A)||T,fill:!0,sizes:"(max-width: 1024px) 100vw, 1024px","data-testid":"news-article-image"})}),(0,t.jsxs)(w.R,{children:[(0,t.jsx)($.f,{locale:A,language:N,machineLocales:z,machineUiLocales:C,originalHref:`/news/${e.slug}`,testIdPrefix:"news-article"}),(0,t.jsx)(p.f,{content:S,rendered:(0,l.z)(v,A),eagerFirstImage:!e.imageUrl,imageAlt:T,dataTestId:"news-article-body"})]}),b.length>0&&(0,t.jsxs)(w.Z,{"data-testid":"news-article-related","data-count":b.length,children:[(0,t.jsx)(g.f,{headline:I("newsDetail.relatedArticles"),dataTestId:"news-article-related-header"}),(0,t.jsx)(x.f,{articles:b,locale:A,dataTestId:"news-article-related-grid",cardTestId:e=>`news-related-${e}`})]})]})}),(0,t.jsx)(f.f,{headline:I("newsDetail.cta.headline"),buttonText:I("newsDetail.cta.button"),buttonHref:"/news",dataTestId:"news-article-cta",edges:k.p})]})]})}],760413)},437772,e=>{function t(e,t){if(!e)return;if(t in e)return e[t];let a=Object.keys(e)[0];return void 0===a?void 0:e[a]}function a(e,a){return t(e,a)}e.s(["h",0,function(e,t,i,n,s){if(e)return a(e[void 0===s?`${i}:${n}`:`${i}:${n}:${s}`],t)},"z",0,a,"r",0,t])}],207029,e=>{e.v(t=>Promise.all(["static/chunks/00-i_2tf8b72s.js","static/chunks/2oq-uevcwhldh.js"].map(t=>e.l(t))).then(()=>t(975804)))},307446,e=>{e.v(t=>Promise.all(["static/chunks/0wzmo3mf_qe_3.js","static/chunks/1z9k6-mk4t9_g.js","static/chunks/418xdx7k7y4kc.js","static/chunks/22khcvznnl4iy.js","static/chunks/3h4paqtye6-p2.js"].map(t=>e.l(t))).then(()=>t(293601)))},460385,e=>{e.v(t=>Promise.all(["static/chunks/2ty5t5gn_xsof.js","static/chunks/1l8vg_08bmxql.js","static/chunks/1aq7e17w8g1p-.js","static/chunks/3h4paqtye6-p2.js","static/chunks/3obqb41wyv4ax.js","static/chunks/2oq-uevcwhldh.js"].map(t=>e.l(t))).then(()=>t(851724)))},767483,e=>{e.v(t=>Promise.all(["static/chunks/3ykrubod6w8ii.js","static/chunks/0nbfwvngp7p5k.js","static/chunks/2-uxo2bcn21qb.js","static/chunks/1w92blmhcw0-f.js","static/chunks/3h4paqtye6-p2.js","static/chunks/3obqb41wyv4ax.js"].map(t=>e.l(t))).then(()=>t(806880)))}]);