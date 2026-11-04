(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,[370891,114009,e=>{var i=e.i(843476),t=e.i(495835);e.i(821194);var a=e.i(99222);let n={assistant:{key:"ai.label.assistant",defaultValue:"KI-Assistent: Antworten werden von einer KI erzeugt und können Fehler enthalten."},voice:{key:"ai.label.voice",defaultValue:"KI-Sprachfunktion: Ihre Sprache wird per KI in Text umgewandelt, Antworten liest eine synthetische Stimme vor."},machineTranslation:{key:"ai.label.machineTranslation",defaultValue:"Diese Fassung wurde mit KI maschinell übersetzt."},analysis:{key:"ai.label.analysis",defaultValue:"KI-Analyse"},machineUiTranslation:{key:"ai.label.machineUiTranslation",defaultValue:"Die Oberfläche ist in dieser Sprache teilweise maschinell übersetzt."}},s={key:"ai.label.badge",defaultValue:"KI"},l={key:"ai.label.original",defaultValue:"Zur deutschen Originalfassung"};e.s(["Z",0,s,"N",0,l,"l",0,n,"O",0,function(e){return!!(e&&(e.aiAnalyzedAt||e.aiModel))},"m",0,function(e,i){return!!i?.includes(e)}],114009);var d=e.i(178446),o=e.i(997053);let r=o.U.span.withConfig({displayName:"AiLabel.styles__Root",componentId:"sc-107ca0c3-0"})`
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  gap: ${({theme:e})=>e.margin.extrasmall};
  font-family: ${({theme:e})=>e.font.secondaryFamily};
  font-size: ${({theme:e})=>e.font.text.caption.desktop.fontSize};
  line-height: ${({theme:e})=>e.font.text.caption.desktop.lineHeight};
  color: inherit;
`,c=o.U.span.withConfig({displayName:"AiLabel.styles__Badge",componentId:"sc-107ca0c3-1"})`
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
`,p=o.U.span.withConfig({displayName:"AiLabel.styles__Text",componentId:"sc-107ca0c3-2"})``,h=o.U.a.withConfig({displayName:"AiLabel.styles__OriginalLink",componentId:"sc-107ca0c3-3"})`
  color: inherit;
  text-decoration: underline;
`;e.s(["f",0,({kind:e,dataTestId:o,compact:m=!1,originalHref:g,className:f})=>{let{tr:u}=(0,a.f)(),w=u(n[e].key,{defaultValue:n[e].defaultValue});return(0,i.jsxs)(r,{className:f,"data-testid":o??`ai-label-${e}`,"data-kind":e,role:"note",title:m?w:void 0,"aria-label":m?w:void 0,children:[(0,i.jsxs)(c,{"data-testid":`${o??`ai-label-${e}`}-badge`,children:[(0,i.jsx)(t.f,{}),u(s.key,{defaultValue:s.defaultValue})]}),!m&&(0,i.jsx)(p,{children:w}),g&&(0,i.jsx)(h,{href:(0,d.f)(g),hrefLang:"de","data-testid":`${o??`ai-label-${e}`}-original`,children:u(l.key,{defaultValue:l.defaultValue})})]})}],370891)},318341,864648,e=>{var i=e.i(843476),t=e.i(370891),a=e.i(114009),n=e.i(997053);let s=n.U.div.withConfig({displayName:"CmsAiNotices.styles__Root",componentId:"sc-99743ee3-0"})`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.margin.extrasmall};
  margin-bottom: ${({theme:e})=>e.margin.small};
`;e.s(["f",0,({locale:e,language:n,machineLocales:l,machineUiLocales:d,originalHref:o,testIdPrefix:r})=>{let c=(0,a.m)(e,l),p=!!d?.includes(n);return c||p?(0,i.jsxs)(s,{"data-testid":`${r}-ai-notices`,children:[c&&(0,i.jsx)(t.f,{kind:"machineTranslation",dataTestId:`${r}-ai-label`,originalHref:o}),p&&(0,i.jsx)(t.f,{kind:"machineUiTranslation",dataTestId:`${r}-ai-label-ui`,compact:!0})]}):null}],864648),e.s([],318341)},327196,e=>{var i=e.i(843476);e.i(821194);var t=e.i(99222),a=e.i(507924),n=e.i(177231);e.s(["f",0,function({categories:e,locale:s,activeSlug:l,dataTestId:d="news-category-nav"}){let{tr:o}=(0,t.f)();return 0===e.length?null:(0,i.jsx)("nav",{"aria-label":o("news.categories",{defaultValue:"Kategorien"}),"data-testid":d,children:(0,i.jsx)(n.a,{children:e.map(e=>{let t=e.slug===l;return(0,i.jsx)("li",{children:(0,i.jsxs)(n.p,{href:`/news/category/${e.slug}`,$active:t,"aria-current":t?"page":void 0,"data-active":t?"true":"false","data-count":e.count,"data-testid":`${d}-${e.slug}`,children:[(0,i.jsx)("span",{children:(0,a.u)(e.label,s)}),(0,i.jsx)(n.W,{"aria-hidden":"true",children:e.count})]})},e.slug)})})})}])},800035,177231,385914,e=>{var i=e.i(843476);e.i(114178);var t=e.i(861133),a=e.i(997053);e.i(315481);var n=e.i(10003),s=e.i(726029);let l="640px",d="768px",o="1024px",r=a.U.header.withConfig({displayName:"newsSite.styles__Head",componentId:"sc-be9d79fd-0"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-block: 16px;
  min-width: 0;

  @media (min-width: ${d}) {
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

  @media (min-width: ${l}) {
    font-size: 48px;
    line-height: 1.1;
  }

  @media (min-width: ${o}) {
    font-size: 60px;
  }

  /* #2127: am Telefon eine Stufe der Theme-Skala kleiner */
  ${(0,s.A)([{ab:0,px:30},{ab:640,px:48}])}
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
`,h=a.U.div.withConfig({displayName:"newsSite.styles__Lead",componentId:"sc-be9d79fd-3"})`
  max-width: 1024px;
  font-family: ${({theme:e})=>e.font.secondaryFamily};
  font-size: 18px;
  line-height: 28px;
  color: ${({theme:e})=>e.palette.site.text};
  overflow-wrap: break-word;

  @media (min-width: ${d}) {
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

  @media (min-width: ${l}) {
    padding-block: 64px;
  }

  @media (min-width: ${d}) {
    padding-block: 80px;
  }
`,u=(0,a.U)(f).withConfig({displayName:"newsSite.styles__ListSection",componentId:"sc-be9d79fd-7"})`
  padding-top: 16px;

  @media (min-width: ${d}) {
    padding-top: 24px;
  }
`,w=a.U.div.withConfig({displayName:"newsSite.styles__More",componentId:"sc-be9d79fd-8"})`
  text-align: center;

  @media (min-width: ${d}) {
    margin-top: 32px;
  }
`,x=a.U.p.withConfig({displayName:"newsSite.styles__Empty",componentId:"sc-be9d79fd-9"})`
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

  @media (min-width: ${l}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: ${d}) {
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }
`,b=a.U.li.withConfig({displayName:"newsSite.styles__GridItem",componentId:"sc-be9d79fd-11"})`
  min-width: 0;

  @media (min-width: ${l}) {
    grid-column: span ${({$gross:e})=>e?2:1};
  }

  @media (min-width: ${d}) {
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

  ${({$active:e})=>e&&v}
`,j=a.U.span.withConfig({displayName:"newsSite.styles__ChipCount",componentId:"sc-be9d79fd-14"})`
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
`,I=a.U.div.withConfig({displayName:"newsSite.styles__BodyColumn",componentId:"sc-be9d79fd-16"})`
  max-width: ${s.z};
  min-width: 0;
`;e.s(["R",0,I,"p",0,k,"W",0,j,"a",0,$,"e",0,x,"q",0,_,"z",0,y,"C",0,b,"E",0,c,"n",0,r,"U",0,p,"Q",0,h,"I",0,u,"V",0,w,"Z",0,f,"s",0,g,"t",0,m],177231),e.s(["f",0,function({dataTestId:e,headline:a,lead:n,breadcrumb:s,kicker:l,children:d}){return(0,i.jsxs)(r,{"data-testid":`${e}-head`,children:[s&&s.length>0&&(0,i.jsx)(t.f,{items:s,dataTestId:`${e}-breadcrumb`}),l,(0,i.jsx)(c,{"data-testid":`${e}-title`,children:a}),n&&(0,i.jsx)(h,{"data-testid":`${e}-lead`,children:(0,i.jsx)("p",{children:n})}),d]})}],800035),e.i(624813);var C=e.i(775175),U=e.i(507924);e.s(["f",0,function({articles:e,locale:t,dataTestId:a,large:n=0,showCategory:s=!1,cardTestId:l}){return(0,i.jsx)(y,{"data-testid":a,"data-count":e.length,children:e.map((e,d)=>{let o=d<n;return(0,i.jsx)(b,{$gross:o,"data-size":o?"large":"small","data-slug":e.slug,"data-testid":`${a}-item`,children:(0,i.jsx)(C.f,{headline:(0,U.u)(e.title,t),href:`/news/${e.slug}`,imageUrl:e.imageUrl??void 0,imageAlt:(0,U.u)(e.imageAlt,t)||void 0,imageSizes:o?"(max-width: 768px) 100vw, 50vw":"(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw",date:(0,U.H)(e.publishedAt,t)||void 0,subtitle:s&&e.category?(0,U.u)(e.category.label,t):void 0,description:(0,U.u)(e.excerpt,t)||void 0,tags:e.tags,dataTestId:l?l(e.slug):`${a}-card-${e.slug}`})},e.slug)})})}],385914)},602085,e=>{var i=e.i(843476),t=e.i(885895);e.i(318341);var a=e.i(864648);e.i(821194);var n=e.i(99222),s=e.i(507924),l=e.i(284248);e.i(816017);var d=e.i(217997),o=e.i(152186),r=e.i(856337),c=e.i(33180);e.i(177607);var p=e.i(422180),h=e.i(800035),m=e.i(327196),g=e.i(385914),f=e.i(177231),u=e.i(997053),w=e.i(994244);let x=u.U.div.withConfig({displayName:"NewsCategoryContent.styles__CategoryRoot",componentId:"sc-d0536dee-0"})``,y=u.U.h2.withConfig({displayName:"NewsCategoryContent.styles__ListHeadline",componentId:"sc-d0536dee-1"})`
  ${w.p}
`;var b=e.i(546843);e.s(["default",0,function({category:e,articles:u,categories:w=[],structuredData:$,machineLocales:v,machineUiLocales:k}){let{language:j}=(0,t.N)(),{tr:_}=(0,n.f)(j),I=(0,l.C)(),C=(0,s.u)(e.label,I);return(0,i.jsxs)(c.f,{footerEdge:b.q,children:[$&&(0,i.jsx)(d.f,{data:$}),(0,i.jsxs)(x,{"data-testid":"news-category-root","data-slug":e.slug,"data-count":u.length,children:[(0,i.jsx)(o.f,{children:(0,i.jsxs)(r.f,{xs:12,children:[(0,i.jsx)(h.f,{dataTestId:"news-category",headline:C,breadcrumb:[{label:_("newsCategory.breadcrumb.news"),href:"/news"},{label:C}],children:(0,i.jsx)(m.f,{categories:w,locale:I,activeSlug:e.slug})}),(0,i.jsx)(a.f,{locale:I,language:j,machineLocales:v,machineUiLocales:k,originalHref:`/news/category/${e.slug}`,testIdPrefix:"news-category"}),(0,i.jsxs)(f.I,{"data-testid":"news-category-list","data-count":u.length,"aria-labelledby":"news-category-list-headline",children:[(0,i.jsx)(y,{id:"news-category-list-headline","data-testid":"news-category-list-headline",children:_("newsCategory.list.headline",{defaultValue:"Beiträge in {{category}}",category:C})}),u.length>0?(0,i.jsx)(g.f,{articles:u,locale:I,dataTestId:"news-category-grid",cardTestId:e=>`news-category-card-${e}`}):(0,i.jsx)(f.e,{"data-testid":"news-category-empty",children:_("news.empty",{defaultValue:"Noch keine Beiträge veröffentlicht."})})]})]})}),(0,i.jsx)(p.f,{headline:_("newsCategory.cta.headline"),buttonText:_("newsCategory.cta.button"),buttonHref:"/news",dataTestId:"news-category-cta",edges:b.p})]})]})}],602085)},178446,e=>{e.s(["f",0,function(e){if(!e.startsWith("/")||e.startsWith("//"))return e;let i=e.search(/[?#]/),t=-1===i?e:e.slice(0,i),a=-1===i?"":e.slice(i);return`${t.endsWith("/")||t.slice(t.lastIndexOf("/")+1).includes(".")?t:`${t}/`}${a}`}])}],307446,e=>{e.v(i=>Promise.all(["static/chunks/0wzmo3mf_qe_3.js","static/chunks/1z9k6-mk4t9_g.js","static/chunks/418xdx7k7y4kc.js","static/chunks/22khcvznnl4iy.js","static/chunks/3h4paqtye6-p2.js"].map(i=>e.l(i))).then(()=>i(293601)))},460385,e=>{e.v(i=>Promise.all(["static/chunks/2ty5t5gn_xsof.js","static/chunks/1l8vg_08bmxql.js","static/chunks/1aq7e17w8g1p-.js","static/chunks/3h4paqtye6-p2.js","static/chunks/3obqb41wyv4ax.js","static/chunks/2oq-uevcwhldh.js"].map(i=>e.l(i))).then(()=>i(851724)))},767483,e=>{e.v(i=>Promise.all(["static/chunks/3ykrubod6w8ii.js","static/chunks/0nbfwvngp7p5k.js","static/chunks/2-uxo2bcn21qb.js","static/chunks/1w92blmhcw0-f.js","static/chunks/3h4paqtye6-p2.js","static/chunks/3obqb41wyv4ax.js"].map(i=>e.l(i))).then(()=>i(806880)))}]);