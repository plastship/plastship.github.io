(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,[624813,775175,e=>{var t=e.i(843476),i=e.i(271645),a=e.i(325164);e.i(311046);var n=e.i(859146);e.i(429307);var s=e.i(159255),d=e.i(997053),o=e.i(474704),l=e.i(726029),r=e.i(547905);let c=d.m`
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
`,h=d.m`
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
`,p=d.U.article.withConfig({displayName:"NewsCard.styles__Root",componentId:"sc-2d756514-0"})`
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
  ${({$roomy:e,$frameless:t,theme:i})=>e&&!t&&d.m`
      padding: ${i.margin.default};

      @media (min-width: ${o.y.breakpoints.sm}) {
        padding: ${i.margin.large};
      }
    `}

  ${({$frameless:e})=>e&&h}
`,m=d.U.div.withConfig({displayName:"NewsCard.styles__ImageWrapper",componentId:"sc-2d756514-1"})`
  position: relative;
  width: 100%;
  aspect-ratio: 704 / 396;
  overflow: hidden;
  border-radius: 12px 12px 0 0;
  background: ${({theme:e})=>e.palette.site.tint};

  img {
    object-fit: cover;
    transition: transform ${320}ms ${r.y};
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
`,g=d.U.svg.withConfig({displayName:"NewsCard.styles__Accent",componentId:"sc-2d756514-2"})`
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
    transition: stroke-dashoffset ${320}ms ${r.y};
  }

  [data-accent-body] {
    fill: ${({theme:e})=>e.palette.site.blueDark};
    transition: fill ${320}ms ${r.y};
  }

  [data-accent-arrow] {
    fill: ${({theme:e})=>e.palette.text.onAccent};
    transform-box: fill-box;
    transform-origin: center;
    transform: rotate(-45deg);
    transition: transform ${320}ms ${r.y};
  }

  @media (prefers-reduced-motion: reduce) {
    [data-accent-ring],
    [data-accent-body],
    [data-accent-arrow] {
      transition: none;
    }
  }
`,f=d.U.span.withConfig({displayName:"NewsCard.styles__DateBadge",componentId:"sc-2d756514-3"})`
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
  ${r.p}
  background: ${({theme:e})=>e.palette.site.blueDark};
  color: ${({theme:e})=>e.palette.text.onAccent};
  font-family: ${({theme:e})=>e.font.primaryFamily};
  pointer-events: none;
`,x=d.U.span.withConfig({displayName:"NewsCard.styles__DateBadgeDay",componentId:"sc-2d756514-4"})`
  font-size: 20px;
  font-weight: 700;
  line-height: 1;
`,u=d.U.span.withConfig({displayName:"NewsCard.styles__DateBadgeMonth",componentId:"sc-2d756514-5"})`
  margin-top: 2px;
  font-size: 11px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: 0.04em;
  text-transform: uppercase;
`,w=d.U.div.withConfig({displayName:"NewsCard.styles__ContentWrapper",componentId:"sc-2d756514-6"})`
  ${l.H}
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;

  /* #2229: Text bündig mit dem Bild, Luft darüber und zwischen den Zeilen aus der Skala */
  ${({$roomy:e,theme:t})=>e&&d.m`
      padding: ${t.margin.default} 0 0;
      gap: ${t.margin.extrasmall};
    `}
`,y=d.U.h3.withConfig({displayName:"NewsCard.styles__Title",componentId:"sc-2d756514-7"})`
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
  ${({$roomy:e,theme:t})=>e&&d.m`
      line-height: ${t.font.headline.five.desktop.lineHeight};

      @media (min-width: 640px) {
        font-size: ${t.font.headline.five.desktop.fontSize};
      }
    `}
`,b=d.U.div.withConfig({displayName:"NewsCard.styles__Meta",componentId:"sc-2d756514-8"})`
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
`,$=d.U.ul.withConfig({displayName:"NewsCard.styles__Tags",componentId:"sc-2d756514-9"})`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 0;
  padding: 0;
  list-style: none;
`,v=d.U.li.withConfig({displayName:"NewsCard.styles__Tag",componentId:"sc-2d756514-10"})`
  ${l.M}
`,j=(0,n.e)({x:1,y:1,width:46,height:46},(0,n.C)(46)),k=(0,n.e)({x:6,y:6,width:36,height:36},(0,n.C)(36));e.s(["f",0,e=>{let{headline:n,href:d,imageUrl:o,imageAlt:l,date:r,dateBadge:c,subtitle:h,description:_,tags:C=[],imageSizes:N="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw",roomy:I=!1,frameless:S=!1,className:z,dataTestId:U="news-card"}=e,[T,B]=(0,i.useState)(!1),K=(0,i.useCallback)(()=>{("function"!=typeof window.matchMedia||window.matchMedia("(hover: hover) and (pointer: fine)").matches)&&B(!0)},[]),A=(0,i.useCallback)(()=>B(!1),[]),H=(0,i.useCallback)(e=>{(e=>{try{return e.matches(":focus-visible")}catch{return!0}})(e.target)&&B(!0)},[]),L=(0,i.useCallback)(()=>B(!1),[]),R=S&&!!o,M=S&&!!d;return(0,t.jsxs)(p,{className:z,$roomy:I,$frameless:S,"data-testid":U,"data-linked":d?"true":"false","data-roomy":I?"true":void 0,"data-frameless":S?"true":void 0,"data-active":M?T?"true":"false":void 0,onMouseEnter:M?K:void 0,onMouseLeave:M?A:void 0,onFocus:M?H:void 0,onBlur:M?L:void 0,children:[o&&(0,t.jsxs)(m,{"data-testid":`${U}-image-wrapper`,"data-card-image":"",children:[(0,t.jsx)(a.default,{src:o,alt:l||n,fill:!0,sizes:N,"data-testid":`${U}-image`}),c&&(0,t.jsxs)(f,{"aria-hidden":"true","data-testid":`${U}-date-badge`,"data-day":c.day,"data-month":c.month,children:[(0,t.jsx)(x,{children:c.day}),(0,t.jsx)(u,{children:c.month})]}),R&&(0,t.jsxs)(g,{viewBox:"0 0 48 48","aria-hidden":"true",focusable:"false","data-testid":`${U}-accent`,children:[(0,t.jsx)("path",{"data-accent-body":"",d:k}),(0,t.jsx)("path",{"data-accent-ring":"",d:j,pathLength:1}),(0,t.jsx)("g",{transform:"translate(16 16)",children:(0,t.jsx)("path",{"data-accent-arrow":"",d:"M8.9 3.3a.9.9 0 0 1 1.3 0l4.1 4.1a.9.9 0 0 1 0 1.2l-4.1 4.1a.9.9 0 1 1-1.3-1.3l2.6-2.5H2.4a.9.9 0 1 1 0-1.8h9.1L8.9 4.6a.9.9 0 0 1 0-1.3Z"})})]})]}),(0,t.jsxs)(w,{$roomy:I,children:[(0,t.jsx)(y,{$roomy:I,"data-testid":`${U}-headline`,children:d?(0,t.jsx)(s.f,{href:d,stretched:!0,dataTestId:`${U}-link`,children:n}):n}),(r||h||_)&&(0,t.jsxs)(b,{"data-testid":`${U}-meta`,children:[(r||h)&&(0,t.jsxs)("p",{children:[r&&(0,t.jsx)("span",{"data-testid":`${U}-date`,children:r}),r&&h&&" · ",h&&(0,t.jsx)("strong",{"data-testid":`${U}-subtitle`,children:h})]}),_&&(0,t.jsx)("p",{"data-testid":`${U}-description`,children:_})]}),C.length>0&&(0,t.jsx)($,{"data-testid":`${U}-tags`,children:C.map((e,i)=>(0,t.jsx)(v,{"data-testid":`${U}-tag-${i}`,children:e},`${e}-${i}`))})]})]})}],775175),e.s([],624813)},951693,659188,e=>{var t=e.i(843476),i=e.i(997053),a=e.i(726029),n=e.i(474704);let s=i.U.header.withConfig({displayName:"SiteSectionHeader__Root",componentId:"sc-37a85c34-0"})`
  display: flex;
  /* globals.css gibt jedem header die Seitenfarbe; auf Karten und Bändern transparent bleiben */
  background: transparent;
  flex-direction: column;
  gap: ${({theme:e})=>e.margin.small};
  /* #2226: Lesebreite der Textvorgabe (8 + 2) in der Spalte des Blocks; außerhalb des Renderers 768 px */
  max-width: ${(0,n.U)(a.z)};
  ${({$align:e})=>"center"===e&&i.m`
      margin-inline: auto;
      text-align: center;
    `}
`,d=i.U.h2.withConfig({displayName:"SiteSectionHeader__H2",componentId:"sc-37a85c34-1"})`
  ${a.S}
`,o=i.U.div.withConfig({displayName:"SiteSectionHeader__Lead",componentId:"sc-37a85c34-2"})`
  ${a.b}
  white-space: pre-line;
`;e.s(["f",0,function({headline:e,description:i,align:a="left",headingLevel:n=2,dataTestId:l}){if(!e&&!i)return null;let r=i?i.split(/\n\s*\n/).map(e=>e.trim()).filter(Boolean):[];return(0,t.jsxs)(s,{$align:a,"data-testid":l,"data-align":a,children:[e&&(0,t.jsx)(d,{as:1===n?"h1":"h2","data-testid":l?`${l}-headline`:void 0,children:e}),r.length>0&&(0,t.jsx)(o,{"data-testid":l?`${l}-description`:void 0,children:r.map((e,i)=>(0,t.jsx)("p",{children:e},i))})]})}],659188),e.s([],951693)},894058,e=>{var t=e.i(843476),i=e.i(997053),a=e.i(885895);e.i(821194);var n=e.i(99222),s=e.i(507924),d=e.i(284248),o=e.i(152186),l=e.i(856337),r=e.i(33180);e.i(951693);var c=e.i(659188),h=e.i(247902),p=e.i(825969),m=e.i(499911),g=e.i(800035),f=e.i(327196),x=e.i(385914),u=e.i(177231);e.i(816017);var w=e.i(217997);let y=i.U.div.withConfig({displayName:"NewsOverviewContent__Root",componentId:"sc-e064c2d7-0"})`
  width: 100%;
  min-width: 0;
`;e.s(["default",0,function({overview:e,structuredData:i}){let{language:b}=(0,a.N)(),{tr:$}=(0,n.f)(b),v=(0,d.C)(),{latest:j,sections:k,categories:_}=e;return(0,t.jsxs)(r.f,{children:[i&&(0,t.jsx)(w.f,{data:i}),(0,t.jsx)(y,{"data-testid":"news-overview-root","data-locale":v,"data-latest-count":j.length,"data-section-count":k.length,children:(0,t.jsx)(o.f,{children:(0,t.jsxs)(l.f,{xs:12,children:[(0,t.jsx)(g.f,{dataTestId:"news-overview",headline:$("news.headline"),lead:$("news.description"),children:(0,t.jsx)(f.f,{categories:_,locale:v})}),0===j.length&&(0,t.jsx)(u.e,{"data-testid":"news-overview-empty",children:$("news.empty",{defaultValue:"Noch keine Beiträge veröffentlicht."})}),j.length>0&&(0,t.jsxs)(u.Z,{"data-testid":"news-latest","data-count":j.length,children:[(0,t.jsx)(c.f,{headline:$("news.latest.headline",{defaultValue:"Neueste Beiträge"}),dataTestId:"news-latest-header"}),(0,t.jsx)(x.f,{articles:j,locale:v,large:2,showCategory:!0,dataTestId:"news-latest-grid"})]}),k.map(({category:e,articles:i,total:a})=>{let n=(0,s.u)(e.label,v),d=`news-overview-section-${e.slug}`;return(0,t.jsxs)(u.Z,{"data-testid":"news-overview-section","data-slug":e.slug,"data-count":i.length,"data-total":a,children:[(0,t.jsx)(c.f,{headline:n,dataTestId:`${d}-header`}),(0,t.jsx)(x.f,{articles:i,locale:v,dataTestId:`${d}-grid`}),(0,t.jsx)(u.V,{children:(0,t.jsx)(h.f,{href:`/news/category/${e.slug}`,modifier:p.j.TERTIARY,icon:(0,t.jsx)(m.f,{}),iconAlign:p.W.RIGHT,dataTestId:`${d}-all`,children:$("news.allInCategory",{defaultValue:"Alle Beiträge: {{category}}",category:n})})})]},e.slug)})]})})})]})}])},327196,e=>{var t=e.i(843476);e.i(821194);var i=e.i(99222),a=e.i(507924),n=e.i(177231);e.s(["f",0,function({categories:e,locale:s,activeSlug:d,dataTestId:o="news-category-nav"}){let{tr:l}=(0,i.f)();return 0===e.length?null:(0,t.jsx)("nav",{"aria-label":l("news.categories",{defaultValue:"Kategorien"}),"data-testid":o,children:(0,t.jsx)(n.a,{children:e.map(e=>{let i=e.slug===d;return(0,t.jsx)("li",{children:(0,t.jsxs)(n.p,{href:`/news/category/${e.slug}`,$active:i,"aria-current":i?"page":void 0,"data-active":i?"true":"false","data-count":e.count,"data-testid":`${o}-${e.slug}`,children:[(0,t.jsx)("span",{children:(0,a.u)(e.label,s)}),(0,t.jsx)(n.W,{"aria-hidden":"true",children:e.count})]})},e.slug)})})})}])},800035,177231,385914,e=>{var t=e.i(843476);e.i(114178);var i=e.i(861133),a=e.i(997053);e.i(315481);var n=e.i(10003),s=e.i(726029);let d="640px",o="768px",l="1024px",r=a.U.header.withConfig({displayName:"newsSite.styles__Head",componentId:"sc-be9d79fd-0"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-block: 16px;
  min-width: 0;

  @media (min-width: ${o}) {
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

  @media (min-width: ${d}) {
    font-size: 48px;
    line-height: 1.1;
  }

  @media (min-width: ${l}) {
    font-size: 60px;
  }

  /* #2127: am Telefon eine Stufe der Theme-Skala kleiner */
  ${(0,s.A)([{ab:0,px:30},{ab:640,px:48}])}
`,h=a.U.p.withConfig({displayName:"newsSite.styles__Kicker",componentId:"sc-be9d79fd-2"})`
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
`,p=a.U.div.withConfig({displayName:"newsSite.styles__Lead",componentId:"sc-be9d79fd-3"})`
  max-width: 1024px;
  font-family: ${({theme:e})=>e.font.secondaryFamily};
  font-size: 18px;
  line-height: 28px;
  color: ${({theme:e})=>e.palette.site.text};
  overflow-wrap: break-word;

  @media (min-width: ${o}) {
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
`,g=a.U.li.withConfig({displayName:"newsSite.styles__TagItem",componentId:"sc-be9d79fd-5"})`
  ${s.M}
`,f=a.U.section.withConfig({displayName:"newsSite.styles__Section",componentId:"sc-be9d79fd-6"})`
  display: flex;
  flex-direction: column;
  gap: 32px;
  min-width: 0;
  padding-block: 48px;

  @media (min-width: ${d}) {
    padding-block: 64px;
  }

  @media (min-width: ${o}) {
    padding-block: 80px;
  }
`,x=(0,a.U)(f).withConfig({displayName:"newsSite.styles__ListSection",componentId:"sc-be9d79fd-7"})`
  padding-top: 16px;

  @media (min-width: ${o}) {
    padding-top: 24px;
  }
`,u=a.U.div.withConfig({displayName:"newsSite.styles__More",componentId:"sc-be9d79fd-8"})`
  text-align: center;

  @media (min-width: ${o}) {
    margin-top: 32px;
  }
`,w=a.U.p.withConfig({displayName:"newsSite.styles__Empty",componentId:"sc-be9d79fd-9"})`
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

  @media (min-width: ${d}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: ${o}) {
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }
`,b=a.U.li.withConfig({displayName:"newsSite.styles__GridItem",componentId:"sc-be9d79fd-11"})`
  min-width: 0;

  @media (min-width: ${d}) {
    grid-column: span ${({$gross:e})=>e?2:1};
  }

  @media (min-width: ${o}) {
    grid-column: span 3;
  }

  @media (min-width: ${l}) {
    grid-column: span ${({$gross:e})=>e?3:2};
  }
`,$=a.U.ul.withConfig({displayName:"newsSite.styles__ChipList",componentId:"sc-be9d79fd-12"})`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 0;
  padding: 0;
  list-style: none;
`,v=a.m`
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
`,j=(0,a.U)(n.NavLink).withConfig({displayName:"newsSite.styles__Chip",componentId:"sc-be9d79fd-13"})`
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

  ${({$active:e})=>e&&v}
`,k=a.U.span.withConfig({displayName:"newsSite.styles__ChipCount",componentId:"sc-be9d79fd-14"})`
  font-weight: 400;
  opacity: 0.75;
`,_=a.U.figure.withConfig({displayName:"newsSite.styles__Figure",componentId:"sc-be9d79fd-15"})`
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
  max-width: ${s.z};
  min-width: 0;
`;e.s(["R",0,C,"p",0,j,"W",0,k,"a",0,$,"e",0,w,"q",0,_,"z",0,y,"C",0,b,"E",0,c,"n",0,r,"U",0,h,"Q",0,p,"I",0,x,"V",0,u,"Z",0,f,"s",0,g,"t",0,m],177231),e.s(["f",0,function({dataTestId:e,headline:a,lead:n,breadcrumb:s,kicker:d,children:o}){return(0,t.jsxs)(r,{"data-testid":`${e}-head`,children:[s&&s.length>0&&(0,t.jsx)(i.f,{items:s,dataTestId:`${e}-breadcrumb`}),d,(0,t.jsx)(c,{"data-testid":`${e}-title`,children:a}),n&&(0,t.jsx)(p,{"data-testid":`${e}-lead`,children:(0,t.jsx)("p",{children:n})}),o]})}],800035),e.i(624813);var N=e.i(775175),I=e.i(507924);e.s(["f",0,function({articles:e,locale:i,dataTestId:a,large:n=0,showCategory:s=!1,cardTestId:d}){return(0,t.jsx)(y,{"data-testid":a,"data-count":e.length,children:e.map((e,o)=>{let l=o<n;return(0,t.jsx)(b,{$gross:l,"data-size":l?"large":"small","data-slug":e.slug,"data-testid":`${a}-item`,children:(0,t.jsx)(N.f,{headline:(0,I.u)(e.title,i),href:`/news/${e.slug}`,imageUrl:e.imageUrl??void 0,imageAlt:(0,I.u)(e.imageAlt,i)||void 0,imageSizes:l?"(max-width: 768px) 100vw, 50vw":"(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw",date:(0,I.H)(e.publishedAt,i)||void 0,subtitle:s&&e.category?(0,I.u)(e.category.label,i):void 0,description:(0,I.u)(e.excerpt,i)||void 0,tags:e.tags,dataTestId:d?d(e.slug):`${a}-card-${e.slug}`})},e.slug)})})}],385914)}],307446,e=>{e.v(t=>Promise.all(["static/chunks/16kwh4m3hzehh.js","static/chunks/1z9k6-mk4t9_g.js","static/chunks/24777coqvfozx.js","static/chunks/418xdx7k7y4kc.js","static/chunks/3h4paqtye6-p2.js","static/chunks/22khcvznnl4iy.js"].map(t=>e.l(t))).then(()=>t(293601)))},460385,e=>{e.v(t=>Promise.all(["static/chunks/2plo174a5oz2l.js","static/chunks/3t62lj8346xnb.js","static/chunks/33s1pd4g0i9is.js","static/chunks/3obqb41wyv4ax.js","static/chunks/3h4paqtye6-p2.js","static/chunks/2oq-uevcwhldh.js"].map(t=>e.l(t))).then(()=>t(851724)))},767483,e=>{e.v(t=>Promise.all(["static/chunks/0n9ww0loc64bd.js","static/chunks/0nbfwvngp7p5k.js","static/chunks/2-uxo2bcn21qb.js","static/chunks/1w92blmhcw0-f.js","static/chunks/3obqb41wyv4ax.js","static/chunks/3h4paqtye6-p2.js"].map(t=>e.l(t))).then(()=>t(806880)))}]);