(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,371010,e=>{var t=e.i(843476),i=e.i(33180);e.i(677231);var n=e.i(655953),a=e.i(885895);e.i(821194);var r=e.i(99222),l=e.i(12780),o=e.i(507924),s=e.i(618322),d=e.i(284248);e.i(816017);var c=e.i(217997),u=e.i(261604),p=e.i(370891),m=e.i(114009),h=e.i(997053),f=e.i(726029);let g=h.U.div.withConfig({displayName:"CmsPageView.styles__PageRoot",componentId:"sc-4146e075-0"})`
  position: relative;
`,y=h.U.div.withConfig({displayName:"CmsPageView.styles__PreviewBar",componentId:"sc-4146e075-1"})`
  position: sticky;
  top: 56px;
  z-index: 150;
  padding: 8px 16px;
  text-align: center;
  font-family: ${({theme:e})=>e.font.secondaryFamily};
  font-size: 14px;
  font-weight: 600;
  color: ${({theme:e})=>e.palette.default.primary};
  background: ${({theme:e})=>e.palette.default.warning};
`,w=h.U.p.withConfig({displayName:"CmsPageView.styles__LegalLanguageNotice",componentId:"sc-4146e075-2"})`
  box-sizing: border-box;
  width: 100%;
  max-width: calc(${f.z} - 2 * ${({theme:e})=>e.padding.default});
  margin: ${({theme:e})=>e.margin.default} auto ${({theme:e})=>e.margin.big};
  padding: ${({theme:e})=>e.padding.small} ${({theme:e})=>e.padding.default};
  border-left: 3px solid ${({theme:e})=>e.palette.default.primary};
  font-family: ${({theme:e})=>e.font.secondaryFamily};
  font-size: ${({theme:e})=>e.font.text.bodysmall.desktop.fontSize};
  line-height: ${({theme:e})=>e.font.text.bodysmall.desktop.lineHeight};
  color: ${({theme:e})=>e.palette.default.primary};
`,x=h.U.div.withConfig({displayName:"CmsPageView.styles__AiNotice",componentId:"sc-4146e075-3"})`
  box-sizing: border-box;
  width: 100%;
  max-width: calc(${f.z} - 2 * ${({theme:e})=>e.padding.default});
  margin: ${({theme:e})=>e.margin.small} auto;
  padding: 0 ${({theme:e})=>e.padding.default};
  color: ${({theme:e})=>e.palette.default.primary};
`;e.s(["default",0,function({page:e,markdown:h,pageHeadingIds:f,preview:k=!1,previewLocale:b=null,machineLocales:v,machineUiLocales:$,structuredData:C,polymerLinks:j,breadcrumbParents:N}){let{language:I}=(0,a.N)(),{tr:_}=(0,r.f)(I),L=e.blocks[0],z=!!L&&!0===l.k[L.type].fullBleed,T=b??(0,o.g)(I);return(0,t.jsx)(d.R,{preview:b,children:(0,t.jsxs)(i.f,{paddingTop:!z,footerEdge:(0,u.R)(e.slug)?null:(0,s.S)(e.blocks),children:[C&&(0,t.jsx)(c.f,{data:C}),(0,t.jsxs)(g,{"data-testid":"cms-page-root","data-slug":e.slug,"data-status":e.status,"data-preview":k?"true":"false","data-version":e.version?.id??"","data-preview-locale":b??"",children:[k&&(0,t.jsx)(y,{"data-testid":"cms-preview-bar",role:"status",children:e.version?_("cms.preview.version",{defaultValue:"Vorschau: Version vom {{date}}",date:(0,o.H)(e.version.createdAt,T)}):_("cms.preview.draft",{defaultValue:"Vorschau: Entwurf, noch nicht veröffentlicht"})}),(0,m.m)(T,v)&&(0,t.jsx)(x,{children:(0,t.jsx)(p.f,{kind:"machineTranslation",dataTestId:"cms-ai-label",originalHref:e.slug})}),$?.includes(I)&&(0,t.jsx)(x,{children:(0,t.jsx)(p.f,{kind:"machineUiTranslation",dataTestId:"cms-ai-label-ui",compact:!0})}),(0,t.jsx)(n.f,{blocks:e.blocks,locale:T,title:(0,o.u)(e.title,T),markdown:h,pageHeadingIds:f,polymerLinks:j,breadcrumbParents:N}),(0,u.R)(e.slug)&&(0,t.jsx)(w,{"data-testid":"cms-legal-language-notice",role:"note",children:_("cms.legal.bindingNotice",{defaultValue:"Verbindlich ist allein die deutsche Fassung dieser Seite. Die englische Fassung ist eine unverbindliche Höflichkeitsübersetzung; übersetzt wird sie von Hand, nie maschinell."})})]})]})})}],371010)},964372,e=>{var t=e.i(399831);let i=(e,t)=>{switch(t){case"navy":return e.palette.site.navy;case"navyDark":return e.palette.footer.background;case"green":return e.palette.site.green;case"tint":return e.palette.site.tint;default:return e.palette.default.white}};e.s(["f",0,(e,n)=>`linear-gradient(${t.I[n.direction]}, ${i(e,n.from)}, ${i(e,n.to)})`])},370891,114009,e=>{var t=e.i(843476),i=e.i(495835);e.i(821194);var n=e.i(99222);let a={assistant:{key:"ai.label.assistant",defaultValue:"KI-Assistent: Antworten werden von einer KI erzeugt und können Fehler enthalten."},voice:{key:"ai.label.voice",defaultValue:"KI-Sprachfunktion: Ihre Sprache wird per KI in Text umgewandelt, Antworten liest eine synthetische Stimme vor."},machineTranslation:{key:"ai.label.machineTranslation",defaultValue:"Diese Fassung wurde mit KI maschinell übersetzt."},analysis:{key:"ai.label.analysis",defaultValue:"KI-Analyse"},machineUiTranslation:{key:"ai.label.machineUiTranslation",defaultValue:"Die Oberfläche ist in dieser Sprache teilweise maschinell übersetzt."}},r={key:"ai.label.badge",defaultValue:"KI"},l={key:"ai.label.original",defaultValue:"Zur deutschen Originalfassung"};e.s(["Z",0,r,"N",0,l,"l",0,a,"O",0,function(e){return!!(e&&(e.aiAnalyzedAt||e.aiModel))},"m",0,function(e,t){return!!t?.includes(e)}],114009);var o=e.i(178446),s=e.i(997053);let d=s.U.span.withConfig({displayName:"AiLabel.styles__Root",componentId:"sc-107ca0c3-0"})`
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  gap: ${({theme:e})=>e.margin.extrasmall};
  font-family: ${({theme:e})=>e.font.secondaryFamily};
  font-size: ${({theme:e})=>e.font.text.caption.desktop.fontSize};
  line-height: ${({theme:e})=>e.font.text.caption.desktop.lineHeight};
  color: inherit;
`,c=s.U.span.withConfig({displayName:"AiLabel.styles__Badge",componentId:"sc-107ca0c3-1"})`
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
`,u=s.U.span.withConfig({displayName:"AiLabel.styles__Text",componentId:"sc-107ca0c3-2"})``,p=s.U.a.withConfig({displayName:"AiLabel.styles__OriginalLink",componentId:"sc-107ca0c3-3"})`
  color: inherit;
  text-decoration: underline;
`;e.s(["f",0,({kind:e,dataTestId:s,compact:m=!1,originalHref:h,className:f})=>{let{tr:g}=(0,n.f)(),y=g(a[e].key,{defaultValue:a[e].defaultValue});return(0,t.jsxs)(d,{className:f,"data-testid":s??`ai-label-${e}`,"data-kind":e,role:"note",title:m?y:void 0,"aria-label":m?y:void 0,children:[(0,t.jsxs)(c,{"data-testid":`${s??`ai-label-${e}`}-badge`,children:[(0,t.jsx)(i.f,{}),g(r.key,{defaultValue:r.defaultValue})]}),!m&&(0,t.jsx)(u,{children:y}),h&&(0,t.jsx)(p,{href:(0,o.f)(h),hrefLang:"de","data-testid":`${s??`ai-label-${e}`}-original`,children:g(l.key,{defaultValue:l.defaultValue})})]})}],370891)},816570,e=>{var t=e.i(843476),i=e.i(997053);let n=i.U.svg.withConfig({displayName:"IconAward.styles__Root",componentId:"sc-f7b63084-0"})``;e.s(["f",0,e=>(0,t.jsxs)(n,{className:e.className,"data-testid":"icon-award-root",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[(0,t.jsx)("title",{children:"award-plaque"}),(0,t.jsxs)("g",{fill:"currentColor",strokeLinecap:"square",strokeLinejoin:"miter",strokeMiterlimit:"10",children:[(0,t.jsx)("path",{d:"M22 7V4H2V20H12",stroke:"currentColor",strokeWidth:"2",fill:"none"}),(0,t.jsx)("path",{d:"M21 18.5L22 23L19 23L16 23L17 18.5",stroke:"currentColor",strokeWidth:"2",fill:"none",strokeLinecap:"butt"}),(0,t.jsx)("path",{d:"M19 19C21.2091 19 23 17.2091 23 15C23 12.7909 21.2091 11 19 11C16.7909 11 15 12.7909 15 15C15 17.2091 16.7909 19 19 19Z",stroke:"currentColor",strokeWidth:"2",fill:"none"}),(0,t.jsx)("path",{d:"M12 9L7 9",stroke:"currentColor",strokeWidth:"2",fill:"none"}),(0,t.jsx)("path",{d:"M9 13L7 13",stroke:"currentColor",strokeWidth:"2",fill:"none"})]})]})],816570)},898560,e=>{let t=e.i(201927).f;e.s(["f",0,t])},187824,e=>{var t=e.i(843476),i=e.i(997053);let n=i.U.svg.withConfig({displayName:"IconList.styles__Root",componentId:"sc-ed522fb6-0"})``;e.s(["f",0,e=>(0,t.jsxs)(n,{className:e.className,"data-testid":"icon-list-root",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[(0,t.jsx)("title",{children:"bullet-list"}),(0,t.jsxs)("g",{fill:"currentColor",strokeLinejoin:"miter",strokeLinecap:"butt",children:[(0,t.jsx)("circle",{cx:"4.5",cy:"5.5",r:"2.5",fill:"none",stroke:"currentColor",strokeLinecap:"square",strokeMiterlimit:"10",strokeWidth:"2"}),(0,t.jsx)("line",{x1:"11",y1:"6",x2:"22",y2:"6",fill:"none",stroke:"currentColor",strokeLinecap:"square",strokeMiterlimit:"10",strokeWidth:"2"}),(0,t.jsx)("line",{x1:"11",y1:"11",x2:"22",y2:"11",fill:"none",stroke:"currentColor",strokeLinecap:"square",strokeMiterlimit:"10",strokeWidth:"2"}),(0,t.jsx)("circle",{cx:"4.5",cy:"15.5",r:"2.5",fill:"none",stroke:"currentColor",strokeLinecap:"square",strokeMiterlimit:"10",strokeWidth:"2"}),(0,t.jsx)("line",{x1:"11",y1:"16",x2:"22",y2:"16",fill:"none",stroke:"currentColor",strokeLinecap:"square",strokeMiterlimit:"10",strokeWidth:"2"}),(0,t.jsx)("line",{x1:"11",y1:"21",x2:"22",y2:"21",fill:"none",stroke:"currentColor",strokeLinecap:"square",strokeMiterlimit:"10",strokeWidth:"2"})]})]})],187824)},193732,e=>{let t=e.i(187824).f;e.s(["f",0,t])},464862,e=>{let t=e.i(48866).f;e.s(["f",0,t])},108939,e=>{let t=e.i(396832).f;e.s(["f",0,t])},495835,e=>{let t=e.i(890603).f;e.s(["f",0,t])},3338,e=>{var t=e.i(843476),i=e.i(997053);let n=i.U.svg.withConfig({displayName:"IconStar.styles__Root",componentId:"sc-ca25a9a4-0"})``;e.s(["f",0,e=>(0,t.jsx)(n,{className:e.className,"data-testid":"icon-star-root",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("polygon",{points:"12 2.245 15.039 8.403 21.836 9.39 16.918 14.185 18.079 20.954 12 17.759 5.921 20.954 7.082 14.185 2.164 9.39 8.961 8.403 12 2.245",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"square",strokeLinejoin:"miter",strokeMiterlimit:"10"})})],3338)},168205,e=>{var t=e.i(843476),i=e.i(997053);let n=i.U.svg.withConfig({displayName:"IconWarning.styles__Root",componentId:"sc-cb98c6cf-0"})``;e.s(["f",0,e=>(0,t.jsxs)(n,{className:e.className,"data-testid":"icon-warning-root",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[(0,t.jsx)("title",{children:"warning-sign"}),(0,t.jsxs)("g",{fill:"currentColor",strokeLinejoin:"miter",strokeLinecap:"butt",children:[(0,t.jsx)("circle",{cx:"12",cy:"16.75",r:"1.25",fill:"currentColor",strokeWidth:"2"}),(0,t.jsx)("line",{x1:"12",y1:"13",x2:"12",y2:"9",fill:"none",stroke:"currentColor",strokeLinecap:"square",strokeMiterlimit:"10",strokeWidth:"2"}),(0,t.jsx)("path",{d:"m10.171,4.06l-7.899,13.783c-.806,1.406.209,3.157,1.829,3.157h15.798c1.62,0,2.635-1.751,1.829-3.157l-7.899-13.783c-.81-1.413-2.849-1.413-3.659,0Z",fill:"none",stroke:"currentColor",strokeLinecap:"square",strokeMiterlimit:"10",strokeWidth:"2"})]})]})],168205)},488661,e=>{let t=e.i(168205).f;e.s(["f",0,t])},624813,775175,e=>{var t=e.i(843476),i=e.i(271645),n=e.i(325164);e.i(311046);var a=e.i(859146);e.i(429307);var r=e.i(159255),l=e.i(997053),o=e.i(474704),s=e.i(726029),d=e.i(547905);let c=l.m`
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
`,u=l.m`
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
  color: ${({theme:e})=>(0,s.N)("text",e.palette.site.text)};

  &:hover,
  &:focus-within {
    box-shadow: none;
  }

  a[data-stretched='true'] svg {
    color: ${({theme:e})=>(0,s.N)("accent",e.palette.site.blue)};
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
`,p=l.U.article.withConfig({displayName:"NewsCard.styles__Root",componentId:"sc-2d756514-0"})`
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

  /* #2229: Innenabstand aus der Theme-Skala — Telefon margin.default, ab sm margin.large (32 px) */
  /* #2232: rahmenlos ohne Polster — die Media Query hier ginge sonst vor (at-rules stehen hinter der Grundregel) */
  ${({$roomy:e,$frameless:t,theme:i})=>e&&!t&&l.m`
      padding: ${i.margin.default};

      @media (min-width: ${o.y.breakpoints.sm}) {
        padding: ${i.margin.large};
      }
    `}

  ${({$frameless:e})=>e&&u}
`,m=l.U.div.withConfig({displayName:"NewsCard.styles__ImageWrapper",componentId:"sc-2d756514-1"})`
  position: relative;
  width: 100%;
  aspect-ratio: 704 / 396;
  overflow: hidden;
  border-radius: 12px 12px 0 0;
  background: ${({theme:e})=>e.palette.site.tint};

  img {
    object-fit: cover;
    transition: transform ${320}ms ${d.y};
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
`,h=l.U.svg.withConfig({displayName:"NewsCard.styles__Accent",componentId:"sc-2d756514-2"})`
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
    transition: stroke-dashoffset ${320}ms ${d.y};
  }

  [data-accent-body] {
    fill: ${({theme:e})=>e.palette.site.blueDark};
    transition: fill ${320}ms ${d.y};
  }

  [data-accent-arrow] {
    fill: ${({theme:e})=>e.palette.text.onAccent};
    transform-box: fill-box;
    transform-origin: center;
    transform: rotate(-45deg);
    transition: transform ${320}ms ${d.y};
  }

  @media (prefers-reduced-motion: reduce) {
    [data-accent-ring],
    [data-accent-body],
    [data-accent-arrow] {
      transition: none;
    }
  }
`,f=l.U.span.withConfig({displayName:"NewsCard.styles__DateBadge",componentId:"sc-2d756514-3"})`
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
`,g=l.U.span.withConfig({displayName:"NewsCard.styles__DateBadgeDay",componentId:"sc-2d756514-4"})`
  font-size: 20px;
  font-weight: 700;
  line-height: 1;
`,y=l.U.span.withConfig({displayName:"NewsCard.styles__DateBadgeMonth",componentId:"sc-2d756514-5"})`
  margin-top: 2px;
  font-size: 11px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: 0.04em;
  text-transform: uppercase;
`,w=l.U.div.withConfig({displayName:"NewsCard.styles__ContentWrapper",componentId:"sc-2d756514-6"})`
  ${s.H}
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;

  /* #2229: Text bündig mit dem Bild, Luft darüber und zwischen den Zeilen aus der Skala */
  ${({$roomy:e,theme:t})=>e&&l.m`
      padding: ${t.margin.default} 0 0;
      gap: ${t.margin.extrasmall};
    `}
`,x=l.U.h3.withConfig({displayName:"NewsCard.styles__Title",componentId:"sc-2d756514-7"})`
  margin: 0;
  font-family: ${({theme:e})=>e.font.primaryFamily};
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0;
  text-transform: none;
  /* #2232: Bandfarbe, falls die Karte frei auf einem Band steht; die gerahmte Karte setzt die Variable zurück */
  color: ${({theme:e})=>(0,s.N)("heading",e.palette.site.text)};
  overflow-wrap: break-word;

  @media (min-width: 640px) {
    font-size: 20px;
  }

  /* #2229: Größe und Zeilenhöhe der Stufe h5 aus dem Theme (Telefon 18/26, sonst 20/26) */
  ${({$roomy:e,theme:t})=>e&&l.m`
      line-height: ${t.font.headline.five.desktop.lineHeight};

      @media (min-width: 640px) {
        font-size: ${t.font.headline.five.desktop.fontSize};
      }
    `}
`,k=l.U.div.withConfig({displayName:"NewsCard.styles__Meta",componentId:"sc-2d756514-8"})`
  font-family: ${({theme:e})=>e.font.secondaryFamily};
  font-size: 14px;
  line-height: 20px;
  color: ${({theme:e})=>(0,s.N)("muted",e.palette.site.muted)};
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
`,b=l.U.ul.withConfig({displayName:"NewsCard.styles__Tags",componentId:"sc-2d756514-9"})`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 0;
  padding: 0;
  list-style: none;
`,v=l.U.li.withConfig({displayName:"NewsCard.styles__Tag",componentId:"sc-2d756514-10"})`
  ${s.M}
`,$=(0,a.e)({x:1,y:1,width:46,height:46},(0,a.C)(46)),C=(0,a.e)({x:6,y:6,width:36,height:36},(0,a.C)(36));e.s(["f",0,e=>{let{headline:a,href:l,imageUrl:o,imageAlt:s,date:d,dateBadge:c,subtitle:u,description:j,tags:N=[],imageSizes:I="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw",roomy:_=!1,frameless:L=!1,className:z,dataTestId:T="news-card"}=e,[M,U]=(0,i.useState)(!1),V=(0,i.useCallback)(()=>{("function"!=typeof window.matchMedia||window.matchMedia("(hover: hover) and (pointer: fine)").matches)&&U(!0)},[]),W=(0,i.useCallback)(()=>U(!1),[]),A=(0,i.useCallback)(e=>{(e=>{try{return e.matches(":focus-visible")}catch{return!0}})(e.target)&&U(!0)},[]),D=(0,i.useCallback)(()=>U(!1),[]),S=L&&!!o,q=L&&!!l;return(0,t.jsxs)(p,{className:z,$roomy:_,$frameless:L,"data-testid":T,"data-linked":l?"true":"false","data-roomy":_?"true":void 0,"data-frameless":L?"true":void 0,"data-active":q?M?"true":"false":void 0,onMouseEnter:q?V:void 0,onMouseLeave:q?W:void 0,onFocus:q?A:void 0,onBlur:q?D:void 0,children:[o&&(0,t.jsxs)(m,{"data-testid":`${T}-image-wrapper`,"data-card-image":"",children:[(0,t.jsx)(n.default,{src:o,alt:s||a,fill:!0,sizes:I,"data-testid":`${T}-image`}),c&&(0,t.jsxs)(f,{"aria-hidden":"true","data-testid":`${T}-date-badge`,"data-day":c.day,"data-month":c.month,children:[(0,t.jsx)(g,{children:c.day}),(0,t.jsx)(y,{children:c.month})]}),S&&(0,t.jsxs)(h,{viewBox:"0 0 48 48","aria-hidden":"true",focusable:"false","data-testid":`${T}-accent`,children:[(0,t.jsx)("path",{"data-accent-body":"",d:C}),(0,t.jsx)("path",{"data-accent-ring":"",d:$,pathLength:1}),(0,t.jsx)("g",{transform:"translate(16 16)",children:(0,t.jsx)("path",{"data-accent-arrow":"",d:"M8.9 3.3a.9.9 0 0 1 1.3 0l4.1 4.1a.9.9 0 0 1 0 1.2l-4.1 4.1a.9.9 0 1 1-1.3-1.3l2.6-2.5H2.4a.9.9 0 1 1 0-1.8h9.1L8.9 4.6a.9.9 0 0 1 0-1.3Z"})})]})]}),(0,t.jsxs)(w,{$roomy:_,children:[(0,t.jsx)(x,{$roomy:_,"data-testid":`${T}-headline`,children:l?(0,t.jsx)(r.f,{href:l,stretched:!0,dataTestId:`${T}-link`,children:a}):a}),(d||u||j)&&(0,t.jsxs)(k,{"data-testid":`${T}-meta`,children:[(d||u)&&(0,t.jsxs)("p",{children:[d&&(0,t.jsx)("span",{"data-testid":`${T}-date`,children:d}),d&&u&&" · ",u&&(0,t.jsx)("strong",{"data-testid":`${T}-subtitle`,children:u})]}),j&&(0,t.jsx)("p",{"data-testid":`${T}-description`,children:j})]}),N.length>0&&(0,t.jsx)(b,{"data-testid":`${T}-tags`,children:N.map((e,i)=>(0,t.jsx)(v,{"data-testid":`${T}-tag-${i}`,children:e},`${e}-${i}`))})]})]})}],775175),e.s([],624813)},261604,e=>{let t=["/agb","/imprint","/privacy","/email-disclaimer","/accessibility"];e.s(["N",0,["de","en"],"R",0,function(e){if("string"!=typeof e)return!1;let i=`/${e.replace(/^\/+|\/+$/g,"")}`;return t.includes(i)}])},989969,545198,188077,e=>{var t=e.i(499881),i=e.i(627430),n=e.i(12780),a=e.i(913148),r=e.i(399831),l=e.i(126217);let o=e=>{let t=(0,r.o)(e);return t?{surface:(0,a.G)(e),gradient:t}:{surface:(0,a.G)(e)}};function s(e){let t=[],i=null;for(let a of e){if(n.k[a.type].fullBleed||(0,l.Y)(a)){i=null,t.push({kind:"bare",block:a});continue}if(a.layout){i||(i=[],t.push({kind:"row",blocks:i,...o(a)})),i.push(a);continue}i=null,t.push({kind:"row",blocks:[a],...o(a)})}return t}let d=e=>"bare"===e.kind?e.block:e.blocks[0],c=e=>"bare"===e.kind?e.block:e.blocks[e.blocks.length-1];function u(e){switch(e){case null:case void 0:return null;case"white":return"page";case"tint":case"greyLight":return"light";case"secondary":return"green";default:return"navy"}}e.s(["n",0,d,"g",0,c,"M",0,s],545198);let p=(e,t)=>{let i=u(e);return null!==i&&"page"!==i&&i===u(t)};function m(e){return"navy"===u(e)?"secondary":"primary"}e.s(["V",0,"navy","x",0,p,"S",0,m,"X",0,u],188077);let h="white",f={white:h,tint:"tint",dark:"navy"},g={hero:{bottom:"inner"},masthead:{bottom:"inner"},cta:{top:"inner",bottom:"inner"}},y=e=>"bottom"===e?"bottom":"top",w=(e,t)=>{let i=(0,r.o)(e);return i?(0,r.b)(i,t):f[(0,a.G)(e)]};function x(e,t="top"){switch(e.type){case"hero":case"masthead":return null;case"video":case"imagefilm":return e.props.background??"primary";default:return w(e,t)}}function k(e,t="top"){switch(e.type){case"video":case"imagefilm":return e.props.background??"primary";case"cta":default:return w(e,t);case"hero":case"masthead":return null}}let b=["hero","masthead","imagefilm"],v=["fransen","verzahnung","schraege","pollen","strom"],$="polymer",C=["strom","pollen"],j=["schraege","verzahnung","pollen","bruchkante","durchblick"],N=["schraege","bruchkante"];function I(e){switch(e.type){case"hero":return e.props.slides.find(e=>e.image)?.image??null;case"video":return e.props.poster??null;case"mediaText":return e.props.image?.src&&"white"!==(0,a.G)(e)?e.props.image.src:null;default:return null}}let _=e=>!!n.k[e.type].edges,L=e=>b.includes(e.type),z=(e,t)=>{let i=e?x(e):null;return null!==i&&t.includes(i)},T=["white","tint","greyLight"],M=["navy","navyDark","primary"];function U(e,a){let r=s(e),o=r.map(d),u=r.map(c),f=new Map;o.forEach((i,a)=>f.set(i.id,function(e,i,a,r){let l=function(e){let i=n.k[e.type].edges,a=e.edge??g[e.type]??{},r={top:"none",right:"none",bottom:"none",left:"none"};if(!i)return r;for(let e of t.K){let t=a[e]??a.all??"none";r[e]="outer"===t&&"innerOuter"!==i?"none":t}return r}(i),o="hero"===i.type?"hero":"section",s={};for(let n of t.K){let t=l[n];if("none"===t)continue;let d="inner"===t?function(e,t,i,n){if("left"===t||"right"===t)return h;let a="top"===t?i:n;return a?x(a,"top"===t?"bottom":"top"):"bottom"===t&&null!==function(e){let t=e[e.length-1];return t?x(t,"bottom"):null}(e)?null:h}(e,n,a,r):k(i,y(n));d&&(s[n]="outer"===t&&"top"===n&&a?.type==="hero"?{placement:t,color:d,depth:"hero",overlap:!0}:{placement:t,color:d,depth:o})}return s}(e,i,u[a-1],o[a+1])));let w=[],b=e[0]?(0,i.Z)(e[0].id)%v.length:0,z=null,T=0,M=0;for(let e=0;e+1<r.length;e++){let t=o[e],n=u[e],r=o[e+1],s={...f.get(t.id)??{}},d={...f.get(r.id)??{}},c=s.bottom,h=d.top,g={upperId:n.id,lowerId:r.id,drawer:null,style:null,explicit:!1};c?.placement==="inner"&&h?.placement==="inner"&&(L(r)?h=void 0:c=void 0);let y=x(n,"bottom"),U=x(r,"top"),V=t===n&&(0,l.Y)(t)&&_(t),W=(0,l.Y)(r)&&_(r);!W||V||h||c?.placement!=="inner"||L(t)||null===y?!V||W||c||h?.placement!=="inner"||L(r)||null===U||(c={placement:"inner",color:U,depth:h.depth??"section"},h=void 0):(h={placement:"inner",color:y,depth:c.depth??"section"},c=void 0);let A=!!(c||h),D=_(r)&&!L(r)&&null!==y,S=_(t)&&null!==U,q=e=>(0,i.i)(e.edge?.style),R=(A&&c&&!h?q(t)??q(r):q(r)??q(t))??null,B=I(n),K=I(r),F=h?"lower":c?"upper":null,G=null,H=()=>"lower"===F?h:"upper"===F?c:void 0,P=()=>{let e=H();return L("lower"===F?r:t)||e?.placement==="outer"||e?.depth==="hero"||!!e?.overlap};if(!A){let e=null!==B&&D,i=null!==K&&S&&!L(t);"durchblick"===R&&(i||e)?(F=i?"upper":"lower",G="durchblick"):F=V&&S&&!W?"upper":D?"lower":S?"upper":null,"lower"===F?h={placement:"inner",color:y,depth:"section"}:"upper"===F&&(c={placement:"inner",color:U,depth:"section"})}if(F){let l="lower"===F?r:t,o="lower"===F?n:r,s="lower"===F?B:K,d=H(),u=k(l,"lower"===F?"top":"bottom"),f=p(y,U),w=null!==u&&u===d.color||f,x=P();if(f&&(g.clash=!0),x){if(G="fransen",f){let e={...d,contrast:m(d.color)};"lower"===F?h=e:c=e}}else if(G)"durchblick"===R&&(g.explicit=!0);else if(R&&("durchblick"!==R||s))G=R,g.explicit=!0;else if("durchblick"===R)G="fransen",g.explicit=!0;else if(a===e)G=$,g.auto=!0;else{g.auto=!0;for(let e=0;e<2*v.length;e++){let t=v[(b+e)%v.length];if(t!==z&&(!w||C.includes(t))){G=t,b=b+e+1;break}}G=G??"strom"}if(f&&!x&&"polymer"===G?G="fransen":f&&!x&&G&&"durchblick"!==G&&"fransen"!==G&&!C.includes(G)&&(G="strom"),!x){let e="lower"===F?"top":"bottom",t=(0,i.Z)(`${l.id}:${e}`),n=l.edge?.sparks??o.edge?.sparks,a=void 0===n&&null!==G&&j.includes(G)&&M++%2==1,r=n??a,p=G,g=l.edge?.polymerTone??o.edge?.polymerTone,y={...d,style:p,seed:t,own:u,...r?{sparks:!0}:{},...a?{sparkRate:.5}:{},...N.includes(p)&&T++%2==1?{mirror:!0}:{},..."polymer"===p?{depth:"polymer",...g?{polymerTone:!0}:{}}:{},..."durchblick"===p&&s?{image:s}:{},...f?{contrast:m(d.color)}:{}};"lower"===F?h=y:c=y}z=G}c?s.bottom=c:delete s.bottom,h?d.top=h:delete d.top,f.set(t.id,s),f.set(r.id,d),g.drawer=F,g.style=G,w.push(g)}return{edges:f,seams:w}}e.s(["P",0,x,"m",0,function(e){var t,i;let n,a,r,l,o=U(e,null);if(o.seams.some(e=>e.style===$))return o;let s=(t=e,i=o.seams,n=new Map(t.map(e=>[e.id,e])),a=({seam:e})=>[n.get(e.upperId),n.get(e.lowerId)],(l=(r=i.map((e,t)=>({seam:e,index:t})).filter(e=>e.seam.auto&&!e.seam.clash&&(e=>{let[t,i]=a(e);return!t||!i||x(t,"bottom")!==x(i,"top")})(e))).find(e=>{let t=n.get(e.seam.upperId);if(t?.type==="hero"||t?.type==="masthead")return!0;let a=i.findIndex(e=>{let t=n.get(e.upperId);return t?.type==="hero"||t?.type==="masthead"});return a>=0&&e.index===a+1})??r.find(e=>{let[t,i]=a(e),n=t?x(t,"bottom"):null,r=i?x(i,"top"):null;return null!==n&&null!==r&&T.includes(n)&&M.includes(r)})??r.find(e=>a(e).some(e=>e?.type==="stats"))??r.find(e=>a(e).some(e=>z(e,["tint"])))??r.find(e=>a(e).some(e=>z(e,["tint","navy","primary","secondary"]))))?l.index:null);return null===s?o:U(e,s)}],989969)},399831,e=>{var t=e.i(136717),i=e.i(345712),n=e.i(125176);let a=new Set(["navy","navyDark","green"]),r={navy:"navy",navyDark:"navyDark",green:"secondary",tint:"tint",white:"white"},l=(e,t)=>n.A.includes(e)?e:t,o=e=>({from:l(e?.from,"navy"),to:l(e?.to,"navyDark"),direction:n.X.includes(e?.direction)?e?.direction:"down"}),s=e=>a.has(e),d={navy:i.G.palette.site.navy,navyDark:i.G.palette.footer.background,green:i.G.palette.site.green,tint:i.G.palette.site.tint,white:i.G.palette.default.white},c=i.G.palette.site.text,u=(e,t,i)=>{switch(e){case"down":return i;case"up":return 1-i;case"right":return t;case"left":return 1-t;default:return(t+i)/2}};function p(e){let i=(e=>{let t=new Set;for(let i=0;i<5;i++)for(let n=0;n<5;n++){let a=.03+.94*i/4,r=.42+.51*n/4;t.add(Math.round(1e3*u(e,a,r))/1e3)}return[...t].sort((e,t)=>e-t)})(e.direction).map(i=>(0,t.D)(d[e.from],d[e.to],i)),n=[e.from,e.to],a=(e,a)=>{let r=Math.min(...i.map(i=>(0,t.n)(e,i))),l=Math.min(4.5,...n.filter(a).map(i=>(0,t.n)(e,d[i])));return{worst:r,ok:r>=l,quote:r/l}},r=a("#ffffff",s),l=a(c,e=>!s(e)),o=r.ok||!l.ok&&r.quote>=l.quote,p="tint"===e.from||"tint"===e.to?"tint":"white";return o?{tone:"dark",readable:r.ok,contrast:r.worst}:{tone:p,readable:l.ok,contrast:l.worst}}e.s(["I",0,{down:"to bottom",up:"to top",right:"to right",left:"to left",diagonal:"to bottom right"},"o",0,function(e){let t=e.props;if(t?.surface===n.G)return o(t.surfaceGradient)},"x",0,o,"b",0,(e,t)=>r[((e,t)=>{switch(e.direction){case"down":case"diagonal":return"top"===t?e.from:e.to;case"up":return"top"===t?e.to:e.from;default:return(({from:e,to:t})=>s(e)!==s(t)?s(e)?e:t:"white"===e&&"white"!==t?t:e)(e)}})(e,t)],"l",0,p,"k",0,e=>p(e).tone])},125176,e=>{let t=e.i(854101).l,i=["white","tint","dark"],n="gradient",a=[...i,n],r=["grosswabe","randlos","dreiklang","band","stapel","magazin"],l="automatisch",o=[l,...r];e.s(["k",0,["seal","cycle","benchmark","certificate"],"z",0,["hero","video","imagefilm","mediaText","animationText","cardGrid","comparison","stepList","cardSlider","faq","cta","richText","stats","team","partnerLogos","newsTeaser","testimonial","specTable","masthead","contactForm","applicationForm"],"I",0,["medium","large"],"K",0,"medium","r",0,"cms.blocks.cta.headlineSizes","y",0,["all","top","right","bottom","left"],"x",0,{farbspiel:"polymer"},"_",0,["none","inner","outer"],"L",0,["fransen","verzahnung","pollen","schraege","strom","durchblick","bruchkante","polymer"],"A",0,["navy","navyDark","green","tint","white"],"m",0,"cms.blocks.surface.gradientColors","X",0,["down","up","right","left","diagonal"],"s",0,"cms.blocks.surface.gradientDirections","b",0,["rounded","hex"],"Z",0,t,"t",0,l,"l",0,r,"u",0,o,"n",0,"cms.blocks.mediaText.variants","v",0,["group"],"T",0,["lead"],"f",0,i,"V",0,a,"G",0,n,"$",0,"cms.blocks.surface.options"])},891567,e=>{let t={name:"plastship GmbH",street:"Auf der Lind 10",postalCode:"65529",locality:"Waldems",region:"Hessen",countryCode:"DE",geo:{lat:50.248828,lon:8.309024}};e.s(["Y",0,t,"_",0,{info:"info@plastship.com",team:"team@plastship.com"},"h",0,{central:{e164:"+4961265898010",national:"06126 58980-10",international:"+49 6126 58980-10"}},"F",0,"contact_click","W",0,function(e=t){return`${e.street}, ${e.postalCode} ${e.locality}`}])},974924,e=>{let t=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;e.s(["d",0,20,"x",0,function(e){return"string"==typeof e&&t.test(e)},"W",0,function(e){return e.trim().toLowerCase()}])},635647,e=>{var t=e.i(974924),i=e.i(891567),n=e.i(854101);let a=/^\+?[\d\s()./–-]+$/,r=e=>`${e.lat},${e.lon}`,l=e=>e.replace(/\s+/g," ").trim(),o=e=>Number(e.toFixed(6));function s(e){return!!e&&Number.isFinite(e.lat)&&Number.isFinite(e.lon)&&90>=Math.abs(e.lat)&&180>=Math.abs(e.lon)}e.s(["a",0,function(e){let t=l(e??"").toLowerCase();if(!t)return;let{street:n,postalCode:a}=i.Y;return t.includes(n.toLowerCase())&&t.includes(a)?{...i.Y.geo}:void 0},"c",0,function(e,i){let n="string"==typeof e?e.trim():"";if(!(0,t.x)(n))return null;let a=i?.trim();return a?`mailto:${n}?subject=${encodeURIComponent(a)}`:`mailto:${n}`},"n",0,function(e,t){if(!e)return null;let i=l(e.query),n=s(e.geo)?e.geo:void 0;if(!i&&!n)return null;if("string"==typeof t&&/iPhone|iPad|iPod|Macintosh/.test(t)){let e,t;return e=l(i),t=[],e&&t.push(`q=${encodeURIComponent(e)}`),n&&t.push(`ll=${r(n)}`),`https://maps.apple.com/?${t.join("&")}`}if("string"==typeof t&&/Android/i.test(t)){let e;return e=n?r(n):"0,0",`geo:${e}?q=${encodeURIComponent(l(i))}`}return null},"W",0,function(e,t){if(!e)return null;let i=l(e.query).slice(0,300),a=s(e.geo)?e.geo:void 0;if(!i&&!a)return null;let r=[];a&&r.push(`lat=${o(a.lat)}`,`lon=${o(a.lon)}`),i&&r.push(`q=${encodeURIComponent(i)}`);let d=`/map/?${r.join("&")}`;return t?(0,n.N)(d,t):d},"R",0,function(e){let t=l(e.get("q")??"").slice(0,300),i=e.get("lat"),n=e.get("lon"),a=null!==i&&""!==i.trim()?Number(i):0/0,r=null!==n&&""!==n.trim()?Number(n):0/0,d=s({lat:a,lon:r})?{lat:o(a),lon:o(r)}:void 0;return t||d?d?{query:t,geo:d}:{query:t}:null},"A",0,function(e){let t=function(e){let t;if("string"!=typeof e)return null;let i=e.trim();if(!i||!a.test(i))return null;let n=i.replace(/^(\+\d{1,3})\s*\(0\)/,"$1"),r=n.replace(/\D/g,"");if(n.startsWith("+"))t=`+${r}`;else if(r.startsWith("00"))t=`+${r.slice(2)}`;else{if(!r.startsWith("0"))return null;t=`+49${r.slice(1)}`}let l=t.length-1;return l<6||l>15||t.startsWith("+0")?null:t}(e);return t?`tel:${t}`:null}])}])})();