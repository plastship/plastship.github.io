(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,[624813,775175,e=>{var t=e.i(843476),i=e.i(325164);e.i(429307);var a=e.i(159255),n=e.i(997053),s=e.i(726029),d=e.i(547905);let l=n.U.article.withConfig({displayName:"NewsCard.styles__Root",componentId:"sc-2d756514-0"})`
  ${(0,s.O)(!0)}
  /* #2176: mit Ziel ist die ganze Karte der Link (gestreckter Titel-Link) */
  ${s.Q}
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
`,o=n.U.div.withConfig({displayName:"NewsCard.styles__ImageWrapper",componentId:"sc-2d756514-1"})`
  position: relative;
  width: 100%;
  aspect-ratio: 704 / 396;
  overflow: hidden;
  border-radius: 12px 12px 0 0;
  background: ${({theme:e})=>e.palette.site.tint};

  img {
    object-fit: cover;
  }
`,r=n.U.span.withConfig({displayName:"NewsCard.styles__DateBadge",componentId:"sc-2d756514-2"})`
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
  ${d.p}
  background: ${({theme:e})=>e.palette.site.blueDark};
  color: ${({theme:e})=>e.palette.text.onAccent};
  font-family: ${({theme:e})=>e.font.primaryFamily};
  pointer-events: none;
`,p=n.U.span.withConfig({displayName:"NewsCard.styles__DateBadgeDay",componentId:"sc-2d756514-3"})`
  font-size: 20px;
  font-weight: 700;
  line-height: 1;
`,c=n.U.span.withConfig({displayName:"NewsCard.styles__DateBadgeMonth",componentId:"sc-2d756514-4"})`
  margin-top: 2px;
  font-size: 11px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: 0.04em;
  text-transform: uppercase;
`,h=n.U.div.withConfig({displayName:"NewsCard.styles__ContentWrapper",componentId:"sc-2d756514-5"})`
  ${s.H}
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
`,m=n.U.h3.withConfig({displayName:"NewsCard.styles__Title",componentId:"sc-2d756514-6"})`
  margin: 0;
  font-family: ${({theme:e})=>e.font.primaryFamily};
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0;
  text-transform: none;
  color: ${({theme:e})=>e.palette.site.text};
  overflow-wrap: break-word;

  @media (min-width: 640px) {
    font-size: 20px;
  }
`,g=n.U.div.withConfig({displayName:"NewsCard.styles__Meta",componentId:"sc-2d756514-7"})`
  font-family: ${({theme:e})=>e.font.secondaryFamily};
  font-size: 14px;
  line-height: 20px;
  color: ${({theme:e})=>e.palette.site.muted};
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
`,f=n.U.ul.withConfig({displayName:"NewsCard.styles__Tags",componentId:"sc-2d756514-8"})`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 0;
  padding: 0;
  list-style: none;
`,x=n.U.li.withConfig({displayName:"NewsCard.styles__Tag",componentId:"sc-2d756514-9"})`
  ${s.M}
`;e.s(["f",0,e=>{let{headline:n,href:s,imageUrl:d,imageAlt:w,date:u,dateBadge:y,subtitle:b,description:$,tags:v=[],imageSizes:j="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw",className:_,dataTestId:k="news-card"}=e;return(0,t.jsxs)(l,{className:_,"data-testid":k,"data-linked":s?"true":"false",children:[d&&(0,t.jsxs)(o,{"data-testid":`${k}-image-wrapper`,"data-card-image":"",children:[(0,t.jsx)(i.default,{src:d,alt:w||n,fill:!0,sizes:j,"data-testid":`${k}-image`}),y&&(0,t.jsxs)(r,{"aria-hidden":"true","data-testid":`${k}-date-badge`,"data-day":y.day,"data-month":y.month,children:[(0,t.jsx)(p,{children:y.day}),(0,t.jsx)(c,{children:y.month})]})]}),(0,t.jsxs)(h,{children:[(0,t.jsx)(m,{"data-testid":`${k}-headline`,children:s?(0,t.jsx)(a.f,{href:s,stretched:!0,dataTestId:`${k}-link`,children:n}):n}),(u||b||$)&&(0,t.jsxs)(g,{"data-testid":`${k}-meta`,children:[(u||b)&&(0,t.jsxs)("p",{children:[u&&(0,t.jsx)("span",{"data-testid":`${k}-date`,children:u}),u&&b&&" · ",b&&(0,t.jsx)("strong",{"data-testid":`${k}-subtitle`,children:b})]}),$&&(0,t.jsx)("p",{"data-testid":`${k}-description`,children:$})]}),v.length>0&&(0,t.jsx)(f,{"data-testid":`${k}-tags`,children:v.map((e,i)=>(0,t.jsx)(x,{"data-testid":`${k}-tag-${i}`,children:e},`${e}-${i}`))})]})]})}],775175),e.s([],624813)},951693,659188,e=>{var t=e.i(843476),i=e.i(997053),a=e.i(726029);let n=i.U.header.withConfig({displayName:"SiteSectionHeader__Root",componentId:"sc-37a85c34-0"})`
  display: flex;
  /* globals.css gibt jedem header die Seitenfarbe; auf Karten und Bändern transparent bleiben */
  background: transparent;
  flex-direction: column;
  gap: 16px;
  max-width: ${a.z};
  ${({$align:e})=>"center"===e&&i.m`
      margin-inline: auto;
      text-align: center;
    `}
`,s=i.U.h2.withConfig({displayName:"SiteSectionHeader__H2",componentId:"sc-37a85c34-1"})`
  ${a.S}
`,d=i.U.div.withConfig({displayName:"SiteSectionHeader__Lead",componentId:"sc-37a85c34-2"})`
  ${a.b}
  white-space: pre-line;
`;e.s(["f",0,function({headline:e,description:i,align:a="left",headingLevel:l=2,dataTestId:o}){if(!e&&!i)return null;let r=i?i.split(/\n\s*\n/).map(e=>e.trim()).filter(Boolean):[];return(0,t.jsxs)(n,{$align:a,"data-testid":o,"data-align":a,children:[e&&(0,t.jsx)(s,{as:1===l?"h1":"h2","data-testid":o?`${o}-headline`:void 0,children:e}),r.length>0&&(0,t.jsx)(d,{"data-testid":o?`${o}-description`:void 0,children:r.map((e,i)=>(0,t.jsx)("p",{children:e},i))})]})}],659188),e.s([],951693)},894058,e=>{var t=e.i(843476),i=e.i(997053),a=e.i(885895);e.i(821194);var n=e.i(99222),s=e.i(507924),d=e.i(284248),l=e.i(152186),o=e.i(856337),r=e.i(33180);e.i(951693);var p=e.i(659188),c=e.i(247902),h=e.i(825969),m=e.i(499911),g=e.i(800035),f=e.i(327196),x=e.i(385914),w=e.i(177231);e.i(816017);var u=e.i(217997);let y=i.U.div.withConfig({displayName:"NewsOverviewContent__Root",componentId:"sc-e064c2d7-0"})`
  width: 100%;
  min-width: 0;
`;e.s(["default",0,function({overview:e,structuredData:i}){let{language:b}=(0,a.N)(),{tr:$}=(0,n.f)(b),v=(0,d.C)(),{latest:j,sections:_,categories:k}=e;return(0,t.jsxs)(r.f,{children:[i&&(0,t.jsx)(u.f,{data:i}),(0,t.jsx)(y,{"data-testid":"news-overview-root","data-locale":v,"data-latest-count":j.length,"data-section-count":_.length,children:(0,t.jsx)(l.f,{children:(0,t.jsxs)(o.f,{xs:12,children:[(0,t.jsx)(g.f,{dataTestId:"news-overview",headline:$("news.headline"),lead:$("news.description"),children:(0,t.jsx)(f.f,{categories:k,locale:v})}),0===j.length&&(0,t.jsx)(w.e,{"data-testid":"news-overview-empty",children:$("news.empty",{defaultValue:"Noch keine Beiträge veröffentlicht."})}),j.length>0&&(0,t.jsxs)(w.Z,{"data-testid":"news-latest","data-count":j.length,children:[(0,t.jsx)(p.f,{headline:$("news.latest.headline",{defaultValue:"Neueste Beiträge"}),dataTestId:"news-latest-header"}),(0,t.jsx)(x.f,{articles:j,locale:v,large:2,showCategory:!0,dataTestId:"news-latest-grid"})]}),_.map(({category:e,articles:i,total:a})=>{let n=(0,s.u)(e.label,v),d=`news-overview-section-${e.slug}`;return(0,t.jsxs)(w.Z,{"data-testid":"news-overview-section","data-slug":e.slug,"data-count":i.length,"data-total":a,children:[(0,t.jsx)(p.f,{headline:n,dataTestId:`${d}-header`}),(0,t.jsx)(x.f,{articles:i,locale:v,dataTestId:`${d}-grid`}),(0,t.jsx)(w.V,{children:(0,t.jsx)(c.f,{href:`/news/category/${e.slug}`,modifier:h.j.TERTIARY,icon:(0,t.jsx)(m.f,{}),iconAlign:h.W.RIGHT,dataTestId:`${d}-all`,children:$("news.allInCategory",{defaultValue:"Alle Beiträge: {{category}}",category:n})})})]},e.slug)})]})})})]})}])},327196,e=>{var t=e.i(843476);e.i(821194);var i=e.i(99222),a=e.i(507924),n=e.i(177231);e.s(["f",0,function({categories:e,locale:s,activeSlug:d,dataTestId:l="news-category-nav"}){let{tr:o}=(0,i.f)();return 0===e.length?null:(0,t.jsx)("nav",{"aria-label":o("news.categories",{defaultValue:"Kategorien"}),"data-testid":l,children:(0,t.jsx)(n.a,{children:e.map(e=>{let i=e.slug===d;return(0,t.jsx)("li",{children:(0,t.jsxs)(n.p,{href:`/news/category/${e.slug}`,$active:i,"aria-current":i?"page":void 0,"data-active":i?"true":"false","data-count":e.count,"data-testid":`${l}-${e.slug}`,children:[(0,t.jsx)("span",{children:(0,a.u)(e.label,s)}),(0,t.jsx)(n.W,{"aria-hidden":"true",children:e.count})]})},e.slug)})})})}])},800035,177231,385914,e=>{var t=e.i(843476);e.i(114178);var i=e.i(861133),a=e.i(997053);e.i(315481);var n=e.i(10003),s=e.i(726029);let d="640px",l="768px",o="1024px",r=a.U.header.withConfig({displayName:"newsSite.styles__Head",componentId:"sc-be9d79fd-0"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-block: 16px;
  min-width: 0;

  @media (min-width: ${l}) {
    padding-block: 32px 24px;
  }
`,p=a.U.h1.withConfig({displayName:"newsSite.styles__H1",componentId:"sc-be9d79fd-1"})`
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

  @media (min-width: ${o}) {
    font-size: 60px;
  }

  /* #2127: am Telefon eine Stufe der Theme-Skala kleiner */
  ${(0,s.A)([{ab:0,px:30},{ab:640,px:48}])}
`,c=a.U.p.withConfig({displayName:"newsSite.styles__Kicker",componentId:"sc-be9d79fd-2"})`
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
`,h=a.U.div.withConfig({displayName:"newsSite.styles__Lead",componentId:"sc-be9d79fd-3"})`
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

  @media (min-width: ${l}) {
    padding-block: 80px;
  }
`,x=(0,a.U)(f).withConfig({displayName:"newsSite.styles__ListSection",componentId:"sc-be9d79fd-7"})`
  padding-top: 16px;

  @media (min-width: ${l}) {
    padding-top: 24px;
  }
`,w=a.U.div.withConfig({displayName:"newsSite.styles__More",componentId:"sc-be9d79fd-8"})`
  text-align: center;

  @media (min-width: ${l}) {
    margin-top: 32px;
  }
`,u=a.U.p.withConfig({displayName:"newsSite.styles__Empty",componentId:"sc-be9d79fd-9"})`
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

  @media (min-width: ${l}) {
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }
`,b=a.U.li.withConfig({displayName:"newsSite.styles__GridItem",componentId:"sc-be9d79fd-11"})`
  min-width: 0;

  @media (min-width: ${d}) {
    grid-column: span ${({$gross:e})=>e?2:1};
  }

  @media (min-width: ${l}) {
    grid-column: span 3;
  }

  @media (min-width: ${o}) {
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
`,_=a.U.span.withConfig({displayName:"newsSite.styles__ChipCount",componentId:"sc-be9d79fd-14"})`
  font-weight: 400;
  opacity: 0.75;
`,k=a.U.figure.withConfig({displayName:"newsSite.styles__Figure",componentId:"sc-be9d79fd-15"})`
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
`;e.s(["R",0,C,"p",0,j,"W",0,_,"a",0,$,"e",0,u,"q",0,k,"z",0,y,"C",0,b,"E",0,p,"n",0,r,"U",0,c,"Q",0,h,"I",0,x,"V",0,w,"Z",0,f,"s",0,g,"t",0,m],177231),e.s(["f",0,function({dataTestId:e,headline:a,lead:n,breadcrumb:s,kicker:d,children:l}){return(0,t.jsxs)(r,{"data-testid":`${e}-head`,children:[s&&s.length>0&&(0,t.jsx)(i.f,{items:s,dataTestId:`${e}-breadcrumb`}),d,(0,t.jsx)(p,{"data-testid":`${e}-title`,children:a}),n&&(0,t.jsx)(h,{"data-testid":`${e}-lead`,children:(0,t.jsx)("p",{children:n})}),l]})}],800035),e.i(624813);var I=e.i(775175),N=e.i(507924);e.s(["f",0,function({articles:e,locale:i,dataTestId:a,large:n=0,showCategory:s=!1,cardTestId:d}){return(0,t.jsx)(y,{"data-testid":a,"data-count":e.length,children:e.map((e,l)=>{let o=l<n;return(0,t.jsx)(b,{$gross:o,"data-size":o?"large":"small","data-slug":e.slug,"data-testid":`${a}-item`,children:(0,t.jsx)(I.f,{headline:(0,N.u)(e.title,i),href:`/news/${e.slug}`,imageUrl:e.imageUrl??void 0,imageAlt:(0,N.u)(e.imageAlt,i)||void 0,imageSizes:o?"(max-width: 768px) 100vw, 50vw":"(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw",date:(0,N.H)(e.publishedAt,i)||void 0,subtitle:s&&e.category?(0,N.u)(e.category.label,i):void 0,description:(0,N.u)(e.excerpt,i)||void 0,tags:e.tags,dataTestId:d?d(e.slug):`${a}-card-${e.slug}`})},e.slug)})})}],385914)}],307446,e=>{e.v(t=>Promise.all(["static/chunks/16kwh4m3hzehh.js","static/chunks/1z9k6-mk4t9_g.js","static/chunks/24777coqvfozx.js","static/chunks/418xdx7k7y4kc.js","static/chunks/3h4paqtye6-p2.js","static/chunks/22khcvznnl4iy.js"].map(t=>e.l(t))).then(()=>t(293601)))},460385,e=>{e.v(t=>Promise.all(["static/chunks/3hsotnybl4262.js","static/chunks/3t62lj8346xnb.js","static/chunks/33s1pd4g0i9is.js","static/chunks/3obqb41wyv4ax.js","static/chunks/3h4paqtye6-p2.js","static/chunks/2oq-uevcwhldh.js"].map(t=>e.l(t))).then(()=>t(851724)))},767483,e=>{e.v(t=>Promise.all(["static/chunks/0n9ww0loc64bd.js","static/chunks/2aczwenenywb8.js","static/chunks/2-uxo2bcn21qb.js","static/chunks/17ii97gpladp2.js","static/chunks/3obqb41wyv4ax.js","static/chunks/3h4paqtye6-p2.js"].map(t=>e.l(t))).then(()=>t(806880)))}]);