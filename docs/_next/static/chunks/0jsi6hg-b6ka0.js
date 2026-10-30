(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,370891,114009,e=>{var t=e.i(843476),i=e.i(495835);e.i(821194);var a=e.i(99222);let n={assistant:{key:"ai.label.assistant",defaultValue:"KI-Assistent: Antworten werden von einer KI erzeugt und können Fehler enthalten."},voice:{key:"ai.label.voice",defaultValue:"KI-Sprachfunktion: Ihre Sprache wird per KI in Text umgewandelt, Antworten liest eine synthetische Stimme vor."},machineTranslation:{key:"ai.label.machineTranslation",defaultValue:"Diese Fassung wurde mit KI maschinell übersetzt."},analysis:{key:"ai.label.analysis",defaultValue:"KI-Analyse"},machineUiTranslation:{key:"ai.label.machineUiTranslation",defaultValue:"Die Oberfläche ist in dieser Sprache teilweise maschinell übersetzt."}},s={key:"ai.label.badge",defaultValue:"KI"},l={key:"ai.label.original",defaultValue:"Zur deutschen Originalfassung"};e.s(["Z",0,s,"N",0,l,"l",0,n,"O",0,function(e){return!!(e&&(e.aiAnalyzedAt||e.aiModel))},"m",0,function(e,t){return!!t?.includes(e)}],114009);var o=e.i(178446),r=e.i(997053);let d=r.U.span.withConfig({displayName:"AiLabel.styles__Root",componentId:"sc-107ca0c3-0"})`
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  gap: ${({theme:e})=>e.margin.extrasmall};
  font-family: ${({theme:e})=>e.font.secondaryFamily};
  font-size: ${({theme:e})=>e.font.text.caption.desktop.fontSize};
  line-height: ${({theme:e})=>e.font.text.caption.desktop.lineHeight};
  color: inherit;
`,c=r.U.span.withConfig({displayName:"AiLabel.styles__Badge",componentId:"sc-107ca0c3-1"})`
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
`,p=r.U.span.withConfig({displayName:"AiLabel.styles__Text",componentId:"sc-107ca0c3-2"})``,h=r.U.a.withConfig({displayName:"AiLabel.styles__OriginalLink",componentId:"sc-107ca0c3-3"})`
  color: inherit;
  text-decoration: underline;
`;e.s(["f",0,({kind:e,dataTestId:r,compact:f=!1,originalHref:m,className:g})=>{let{tr:x}=(0,a.f)(),u=x(n[e].key,{defaultValue:n[e].defaultValue});return(0,t.jsxs)(d,{className:g,"data-testid":r??`ai-label-${e}`,"data-kind":e,role:"note",title:f?u:void 0,"aria-label":f?u:void 0,children:[(0,t.jsxs)(c,{"data-testid":`${r??`ai-label-${e}`}-badge`,children:[(0,t.jsx)(i.f,{}),x(s.key,{defaultValue:s.defaultValue})]}),!f&&(0,t.jsx)(p,{children:u}),m&&(0,t.jsx)(h,{href:(0,o.f)(m),hrefLang:"de","data-testid":`${r??`ai-label-${e}`}-original`,children:x(l.key,{defaultValue:l.defaultValue})})]})}],370891)},411206,173972,e=>{var t=e.i(843476),i=e.i(271645),a=e.i(618566);e.i(821194);var n=e.i(99222),s=e.i(476999),l=e.i(14431),o=e.i(713347),r=e.i(635647),d=e.i(891567),c=e.i(997053);let p=c.m`
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
`,h=c.U.a.withConfig({displayName:"ContactLink.styles__Link",componentId:"sc-41592123-0"})`
  ${p}
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
`,f=c.U.span.withConfig({displayName:"ContactLink.styles__Plain",componentId:"sc-41592123-1"})`
  ${p}
`,m={tel:{key:"contactLink.aria.tel",fallback:"Anrufen: {{value}}"},mail:{key:"contactLink.aria.mail",fallback:"E-Mail schreiben an {{value}}"},map:{key:"contactLink.aria.map",fallback:"Auf der Karte zeigen: {{value}}"}};e.s(["f",0,({kind:e,value:c,place:p,geo:g,subject:x,icon:u,children:y,dataTestId:w,className:b})=>{let{tr:v}=(0,n.f)(),$=(0,a.usePathname)(),k="string"==typeof c?c.trim():"",j=(0,o.useSiteLocale)(),C="tel"===e?(0,r.A)(k):"mail"===e?(0,r.c)(k,x):(0,r.W)({query:k,geo:g},j),_=(0,i.useCallback)(()=>{(0,s.q)($||"/",d.F,{kind:e,place:p}),l.v({category:"contact",message:d.F,data:{kind:e,place:p}})},[$,e,p]),I=w??`contact-link-${e}`,N=(0,t.jsxs)(t.Fragment,{children:[u,y??k]});if(!k)return null;if(!C)return(0,t.jsx)(f,{className:b,"data-testid":I,"data-kind":e,"data-linked":"false",children:N});let U=k.replace(/\s*\n\s*/g,", ");return(0,t.jsx)(h,{className:b,href:C,onClick:_,"aria-label":v(m[e].key,{value:U,defaultValue:m[e].fallback}),"data-testid":I,"data-kind":e,"data-linked":"true",children:N})}],173972),e.s([],411206)},813267,e=>{var t=e.i(843476),i=e.i(997053);let a=i.U.svg.withConfig({displayName:"IconLocation.styles__Root",componentId:"sc-d4764d0b-0"})``;e.s(["f",0,e=>(0,t.jsxs)(a,{className:e.className,"data-testid":"icon-location-root",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:[(0,t.jsx)("path",{d:"M4.5 9.75768C4.5 15.5 12 22 12 22C12 22 19.5 15.5 19.5 9.75768C19.5 4.81181 15.6559 2 12 2C8.34409 2 4.5 4.81181 4.5 9.75768Z",stroke:"currentColor",strokeWidth:"2",strokeLinejoin:"round"}),(0,t.jsx)("circle",{cx:"12",cy:"9.5",r:"2.5",stroke:"currentColor",strokeWidth:"2"})]})],813267)},874142,e=>{let t=e.i(215063).f;e.s(["f",0,t])},318341,864648,e=>{var t=e.i(843476),i=e.i(370891),a=e.i(114009),n=e.i(997053);let s=n.U.div.withConfig({displayName:"CmsAiNotices.styles__Root",componentId:"sc-99743ee3-0"})`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.margin.extrasmall};
  margin-bottom: ${({theme:e})=>e.margin.small};
`;e.s(["f",0,({locale:e,language:n,machineLocales:l,machineUiLocales:o,originalHref:r,testIdPrefix:d})=>{let c=(0,a.m)(e,l),p=!!o?.includes(n);return c||p?(0,t.jsxs)(s,{"data-testid":`${d}-ai-notices`,children:[c&&(0,t.jsx)(i.f,{kind:"machineTranslation",dataTestId:`${d}-ai-label`,originalHref:r}),p&&(0,t.jsx)(i.f,{kind:"machineUiTranslation",dataTestId:`${d}-ai-label-ui`,compact:!0})]}):null}],864648),e.s([],318341)},624813,775175,e=>{var t=e.i(843476),i=e.i(325164);e.i(429307);var a=e.i(159255),n=e.i(997053),s=e.i(726029),l=e.i(547905);let o=n.U.article.withConfig({displayName:"NewsCard.styles__Root",componentId:"sc-2d756514-0"})`
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
`,r=n.U.div.withConfig({displayName:"NewsCard.styles__ImageWrapper",componentId:"sc-2d756514-1"})`
  position: relative;
  width: 100%;
  aspect-ratio: 704 / 396;
  overflow: hidden;
  border-radius: 12px 12px 0 0;
  background: ${({theme:e})=>e.palette.site.tint};

  img {
    object-fit: cover;
  }
`,d=n.U.span.withConfig({displayName:"NewsCard.styles__DateBadge",componentId:"sc-2d756514-2"})`
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
  ${l.p}
  background: ${({theme:e})=>e.palette.site.blueDark};
  color: ${({theme:e})=>e.palette.text.onAccent};
  font-family: ${({theme:e})=>e.font.primaryFamily};
  pointer-events: none;
`,c=n.U.span.withConfig({displayName:"NewsCard.styles__DateBadgeDay",componentId:"sc-2d756514-3"})`
  font-size: 20px;
  font-weight: 700;
  line-height: 1;
`,p=n.U.span.withConfig({displayName:"NewsCard.styles__DateBadgeMonth",componentId:"sc-2d756514-4"})`
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
`,f=n.U.h3.withConfig({displayName:"NewsCard.styles__Title",componentId:"sc-2d756514-6"})`
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
`,m=n.U.div.withConfig({displayName:"NewsCard.styles__Meta",componentId:"sc-2d756514-7"})`
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
`,g=n.U.ul.withConfig({displayName:"NewsCard.styles__Tags",componentId:"sc-2d756514-8"})`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 0;
  padding: 0;
  list-style: none;
`,x=n.U.li.withConfig({displayName:"NewsCard.styles__Tag",componentId:"sc-2d756514-9"})`
  ${s.M}
`;e.s(["f",0,e=>{let{headline:n,href:s,imageUrl:l,imageAlt:u,date:y,dateBadge:w,subtitle:b,description:v,tags:$=[],imageSizes:k="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw",className:j,dataTestId:C="news-card"}=e;return(0,t.jsxs)(o,{className:j,"data-testid":C,"data-linked":s?"true":"false",children:[l&&(0,t.jsxs)(r,{"data-testid":`${C}-image-wrapper`,"data-card-image":"",children:[(0,t.jsx)(i.default,{src:l,alt:u||n,fill:!0,sizes:k,"data-testid":`${C}-image`}),w&&(0,t.jsxs)(d,{"aria-hidden":"true","data-testid":`${C}-date-badge`,"data-day":w.day,"data-month":w.month,children:[(0,t.jsx)(c,{children:w.day}),(0,t.jsx)(p,{children:w.month})]})]}),(0,t.jsxs)(h,{children:[(0,t.jsx)(f,{"data-testid":`${C}-headline`,children:s?(0,t.jsx)(a.f,{href:s,stretched:!0,dataTestId:`${C}-link`,children:n}):n}),(y||b||v)&&(0,t.jsxs)(m,{"data-testid":`${C}-meta`,children:[(y||b)&&(0,t.jsxs)("p",{children:[y&&(0,t.jsx)("span",{"data-testid":`${C}-date`,children:y}),y&&b&&" · ",b&&(0,t.jsx)("strong",{"data-testid":`${C}-subtitle`,children:b})]}),v&&(0,t.jsx)("p",{"data-testid":`${C}-description`,children:v})]}),$.length>0&&(0,t.jsx)(g,{"data-testid":`${C}-tags`,children:$.map((e,i)=>(0,t.jsx)(x,{"data-testid":`${C}-tag-${i}`,children:e},`${e}-${i}`))})]})]})}],775175),e.s([],624813)},538915,226129,600639,546843,e=>{var t=e.i(843476),i=e.i(997053);e.i(315481);var a=e.i(10003),n=e.i(547905),s=e.i(136717);let l=e=>(0,s.L)(e.palette.footer.backgroundEnd),o=e=>(0,s.p)(e.palette.footer.backgroundEnd),r=(e,t)=>o(e)?`rgba(255, 255, 255, ${t})`:`rgba(33, 37, 41, ${t})`,d=i.U.footer.withConfig({displayName:"Footer.styles__Root",componentId:"sc-809a1aba-0"})`
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
  ${({$edges:e})=>(0,n.n)(e)}
  ${({$edges:e})=>(0,n.o)("top","1rem",e)}

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
`,c=i.U.div.withConfig({displayName:"Footer.styles__BottomBar",componentId:"sc-809a1aba-1"})`
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
`,p=i.U.span.withConfig({displayName:"Footer.styles__Copyright",componentId:"sc-809a1aba-2"})`
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
`,f=i.U.button.withConfig({displayName:"Footer.styles__FooterMetaButton",componentId:"sc-809a1aba-4"})`
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
`,m=(0,i.U)(a.NavLink).withConfig({displayName:"Footer.styles__FooterLink",componentId:"sc-809a1aba-5"})`
  color: inherit;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`,g=(0,i.U)(a.NavLink).withConfig({displayName:"Footer.styles__LogoLink",componentId:"sc-809a1aba-6"})`
  display: inline-block;
  text-decoration: none;
`,x=i.U.div.withConfig({displayName:"Footer.styles__FooterSection",componentId:"sc-809a1aba-7"})`
  margin-bottom: 20px;
`,u=i.U.ul.withConfig({displayName:"Footer.styles__ContactList",componentId:"sc-809a1aba-8"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 0;
  padding: 0;
  list-style: none;
`,y=i.U.li.withConfig({displayName:"Footer.styles__ContactItem",componentId:"sc-809a1aba-9"})`
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
`,w=i.U.h2.withConfig({displayName:"Footer.styles__FooterSectionTitle",componentId:"sc-809a1aba-10"})`
  && {
    color: ${({theme:e})=>l(e)};
  }
  font-size: 1rem;
  font-weight: 700;
  margin: 0 0 16px;
  text-transform: uppercase;
`,b=i.U.nav.withConfig({displayName:"Footer.styles__FooterLinks",componentId:"sc-809a1aba-11"})`
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
`;var v=e.i(424734),$=e.i(650868),k=e.i(224906);e.i(821194);var j=e.i(99222),C=e.i(722216),_=e.i(507924),I=e.i(284248),N=e.i(891567);let U=[{titleKey:"footer.sections.links",links:[{href:"/team",labelKey:"footer.team"},{href:"/faq",labelKey:"footer.faq"},{href:"/about",labelKey:"footer.about"},{href:"/news",labelKey:"footer.latest"},{href:"/contact-us",labelKey:"footer.contactForm"},{href:"/services",labelKey:"footer.services"}]}],F={titleKey:"footer.contact",email:N._.info,phone:N.h.central,address:N.Y},S=[{href:"/agb",labelKey:"footer.terms"},{href:"/imprint",labelKey:"footer.imprint"},{href:"/privacy",labelKey:"footer.privacy"},{href:"/email-disclaimer",labelKey:"footer.emailDisclaimer"},{href:"/accessibility",labelKey:"footer.accessibility"}];e.i(411206);var T=e.i(173972),z=e.i(317573),K=e.i(757658),L=e.i(874142),A=e.i(813267);e.i(710788);var V=e.i(363451);e.i(311046);var H=e.i(499881);let R={top:{placement:"inner",color:"white"}};e.s(["f",0,e=>{let a=e.edges??R,{tr:n}=(0,j.f)(),s=(0,i.i)(),{footer:l}=(0,C.f)(),r=(0,I.C)();return(0,t.jsxs)(d,{className:e.className,"data-testid":"footer-root",$edges:a,children:[(0,H.N)(a)&&(0,t.jsx)(V.f,{edges:a,dataTestId:"footer-root-edge"}),(0,t.jsxs)($.f,{children:[(0,t.jsx)(k.f,{xs:12,md:3,lg:2,children:(0,t.jsx)(g,{href:"/","aria-label":n("footer.logo.ariaLabel",{defaultValue:"plastship – zur Startseite"}),"data-testid":"footer-logo-link",children:(0,t.jsx)(v.f,{inverted:!s?.palette?.footer||o(s),monochrome:!0})})}),(0,t.jsx)(t.Fragment,{children:l.length>0?l.map((e,i)=>(0,t.jsx)(k.f,{xs:12,sm:6,md:4,children:(0,t.jsxs)(x,{"data-testid":`footer-cms-section-${i}`,"data-count":e.children?.length??0,children:[(0,t.jsx)(w,{"data-testid":`footer-cms-section-${i}-title`,children:(0,_.u)(e.label,r)}),(0,t.jsx)(b,{children:(e.children??[]).map((e,a)=>(0,t.jsx)(m,{href:e.href,"data-testid":`footer-cms-section-${i}-link-${a}`,children:(0,_.u)(e.label,r)},`${e.href}-${a}`))})]})},`${e.href}-${i}`)):U.map((e,i)=>(0,t.jsx)(k.f,{xs:12,sm:6,md:4,children:(0,t.jsxs)(x,{"data-testid":`footer-section-${i}`,"data-count":e.links.length,children:[(0,t.jsx)(w,{"data-testid":`footer-section-${i}-title`,children:n(e.titleKey)}),(0,t.jsx)(b,{children:e.links.map(e=>(0,t.jsx)(m,{href:e.href,"data-testid":`footer-link-${e.href.replace(/^\//,"").replace(/\//g,"-")}`,children:n(e.labelKey)},e.href))})]})},e.titleKey))}),(0,t.jsx)(k.f,{xs:12,sm:6,md:5,lg:4,children:(0,t.jsxs)(x,{"data-testid":"footer-contact",children:[(0,t.jsx)(w,{"data-testid":"footer-contact-title",children:n(F.titleKey)}),(0,t.jsxs)(u,{children:[(0,t.jsx)(y,{children:(0,t.jsx)(T.f,{kind:"mail",value:F.email,place:"footer",icon:(0,t.jsx)(z.f,{}),dataTestId:"footer-contact-email"})}),(0,t.jsx)(y,{children:(0,t.jsx)(T.f,{kind:"tel",value:F.phone.e164,place:"footer",icon:(0,t.jsx)(L.f,{}),dataTestId:"footer-contact-phone",children:F.phone.international})}),(0,t.jsx)(y,{children:(0,t.jsx)(T.f,{kind:"map",value:`${F.address.name}, ${(0,N.W)(F.address)}`,geo:F.address.geo,place:"footer",icon:(0,t.jsx)(A.f,{}),dataTestId:"footer-contact-address",children:(0,N.W)(F.address)})})]})]})})]}),(0,t.jsx)($.f,{children:(0,t.jsx)(k.f,{xs:12,children:(0,t.jsxs)(c,{children:[(0,t.jsx)(p,{"data-testid":"footer-copyright",children:"© plastship GmbH"}),(0,t.jsxs)(h,{"data-testid":"footer-meta","data-count":S.length,children:[S.map(e=>(0,t.jsx)(m,{href:e.href,"data-testid":`footer-meta-${e.href.replace(/^\//,"")}`,children:n(e.labelKey)},e.href)),(0,t.jsx)(f,{type:"button",onClick:K.e,"data-testid":"footer-cookie-settings",children:n("footer.cookieSettings",{defaultValue:"Cookie-Einstellungen"})})]})]})})})]})}],538915);var D=e.i(271645),W=e.i(247902),B=e.i(825969),M=e.i(499911);e.i(657782);var O=e.i(229132);e.i(730026);var E=e.i(262076),P=e.i(184914),q=e.i(157067),Z=e.i(885895),G=e.i(693830),Y=e.i(949108),Q=e.i(49958),J=e.i(726029);let X=(0,D.lazy)(()=>e.A(767483));e.s(["f",0,()=>{let e=(0,Y.f)(),{status:i}=(0,Q.useSession)(),a=(0,G.g)(),{isLeftSidebarOpen:n,closeLeftSidebar:s}=(0,q.i)(),{language:l}=(0,Z.N)(),{tr:o}=(0,j.f)(l);return e?(0,t.jsx)(P.f,{isOpen:n,onClose:s,mode:"guest",maxWidthPx:J.F-1,barHeightPx:J.W,footerAction:(0,t.jsx)(W.f,{href:"/login",modifier:B.j.PRIMARY,icon:(0,t.jsx)(M.f,{}),iconAlign:B.W.RIGHT,dataTestId:"mobile-menu-item-login",children:o("header.login.label",{defaultValue:"Login"})}),children:(0,t.jsx)(E.f,{"data-testid":"mobile-menu-section-public",children:(0,t.jsx)(O.f,{variant:"stacked",dataTestId:"mobile-menu-item-public"})})}):"authenticated"===i&&a?(0,t.jsx)(D.Suspense,{fallback:null,children:(0,t.jsx)(X,{barHeightPx:J.W})}):null}],226129),e.s([],600639),e.s(["p",0,{top:{placement:"inner",color:"white",depth:"section"}},"q",0,"navy","e",0,function(e){return e&&"white"!==e?{edges:{top:{placement:"inner",color:e}},flush:!0}:{edges:void 0,flush:!1}}],546843)},584391,e=>{var t=e.i(843476),i=e.i(997053),a=e.i(726029);let n=i.U.div.withConfig({displayName:"Default.styles__Root",componentId:"sc-6c8f238f-0"})`
  --page-header-offset: ${a.W}px;
  ${a.u}
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-x: clip;
`,s=i.U.main.withConfig({displayName:"Default.styles__Main",componentId:"sc-6c8f238f-1"})`
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
`;var l=e.i(197754),o=e.i(538915);e.i(600639);var r=e.i(226129),d=e.i(729950),c=e.i(546843);e.s(["Default",0,e=>{let{children:i,inverted:a,paddingTop:p=!0,footerEdge:h}=e,f=(0,c.e)(h);return(0,d.H)()?(0,t.jsx)(t.Fragment,{children:i}):(0,t.jsxs)(n,{className:e.className,"data-testid":"default-root",children:[(0,t.jsx)(l.f,{navigation:!1,inverted:a,site:!0}),(0,t.jsx)(r.f,{}),(0,t.jsx)(s,{$paddingTop:p,$flushFooter:f.flush,children:i}),(0,t.jsx)(o.f,{inverted:a,edges:f.edges})]})}],584391)},33180,e=>{let t=e.i(584391).Default;e.s(["f",0,t])},816017,217997,e=>{var t=e.i(843476);e.i(507924);var i=e.i(891567);i.Y.name,i.h.central.international,i._.info,i.Y;let a=String.fromCharCode(8232),n=String.fromCharCode(8233);e.s(["f",0,function({data:e}){return(0,t.jsx)("script",{type:"application/ld+json","data-testid":"structured-data",dangerouslySetInnerHTML:{__html:JSON.stringify(e).replace(/</g,"\\u003c").replace(/>/g,"\\u003e").replace(/&/g,"\\u0026").split(a).join("\\u2028").split(n).join("\\u2029")}})}],217997),e.s([],816017)},327196,e=>{var t=e.i(843476);e.i(821194);var i=e.i(99222),a=e.i(507924),n=e.i(177231);e.s(["f",0,function({categories:e,locale:s,activeSlug:l,dataTestId:o="news-category-nav"}){let{tr:r}=(0,i.f)();return 0===e.length?null:(0,t.jsx)("nav",{"aria-label":r("news.categories",{defaultValue:"Kategorien"}),"data-testid":o,children:(0,t.jsx)(n.a,{children:e.map(e=>{let i=e.slug===l;return(0,t.jsx)("li",{children:(0,t.jsxs)(n.p,{href:`/news/category/${e.slug}`,$active:i,"aria-current":i?"page":void 0,"data-active":i?"true":"false","data-count":e.count,"data-testid":`${o}-${e.slug}`,children:[(0,t.jsx)("span",{children:(0,a.u)(e.label,s)}),(0,t.jsx)(n.W,{"aria-hidden":"true",children:e.count})]})},e.slug)})})})}])},800035,177231,385914,e=>{var t=e.i(843476);e.i(114178);var i=e.i(861133),a=e.i(997053);e.i(315481);var n=e.i(10003),s=e.i(726029);let l="640px",o="768px",r="1024px",d=a.U.header.withConfig({displayName:"newsSite.styles__Head",componentId:"sc-be9d79fd-0"})`
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

  @media (min-width: ${l}) {
    font-size: 48px;
    line-height: 1.1;
  }

  @media (min-width: ${r}) {
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

  @media (min-width: ${o}) {
    font-size: 24px;
    line-height: 32px;
  }

  p {
    margin: 0;
  }
`,f=a.U.ul.withConfig({displayName:"newsSite.styles__TagList",componentId:"sc-be9d79fd-4"})`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 0;
  padding: 0;
  list-style: none;
`,m=a.U.li.withConfig({displayName:"newsSite.styles__TagItem",componentId:"sc-be9d79fd-5"})`
  ${s.M}
`,g=a.U.section.withConfig({displayName:"newsSite.styles__Section",componentId:"sc-be9d79fd-6"})`
  display: flex;
  flex-direction: column;
  gap: 32px;
  min-width: 0;
  padding-block: 48px;

  @media (min-width: ${l}) {
    padding-block: 64px;
  }

  @media (min-width: ${o}) {
    padding-block: 80px;
  }
`,x=(0,a.U)(g).withConfig({displayName:"newsSite.styles__ListSection",componentId:"sc-be9d79fd-7"})`
  padding-top: 16px;

  @media (min-width: ${o}) {
    padding-top: 24px;
  }
`,u=a.U.div.withConfig({displayName:"newsSite.styles__More",componentId:"sc-be9d79fd-8"})`
  text-align: center;

  @media (min-width: ${o}) {
    margin-top: 32px;
  }
`,y=a.U.p.withConfig({displayName:"newsSite.styles__Empty",componentId:"sc-be9d79fd-9"})`
  margin: 0;
  font-family: ${({theme:e})=>e.font.secondaryFamily};
  font-size: 16px;
  line-height: 28px;
  color: ${({theme:e})=>e.palette.site.muted};
`,w=a.U.ul.withConfig({displayName:"newsSite.styles__Grid",componentId:"sc-be9d79fd-10"})`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 16px;
  margin: 0;
  padding: 0;
  list-style: none;

  @media (min-width: ${l}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: ${o}) {
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }
`,b=a.U.li.withConfig({displayName:"newsSite.styles__GridItem",componentId:"sc-be9d79fd-11"})`
  min-width: 0;

  @media (min-width: ${l}) {
    grid-column: span ${({$gross:e})=>e?2:1};
  }

  @media (min-width: ${o}) {
    grid-column: span 3;
  }

  @media (min-width: ${r}) {
    grid-column: span ${({$gross:e})=>e?3:2};
  }
`,v=a.U.ul.withConfig({displayName:"newsSite.styles__ChipList",componentId:"sc-be9d79fd-12"})`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 0;
  padding: 0;
  list-style: none;
`,$=a.m`
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

  ${({$active:e})=>e&&$}
`,j=a.U.span.withConfig({displayName:"newsSite.styles__ChipCount",componentId:"sc-be9d79fd-14"})`
  font-weight: 400;
  opacity: 0.75;
`,C=a.U.figure.withConfig({displayName:"newsSite.styles__Figure",componentId:"sc-be9d79fd-15"})`
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
`,_=a.U.div.withConfig({displayName:"newsSite.styles__BodyColumn",componentId:"sc-be9d79fd-16"})`
  max-width: ${s.z};
  min-width: 0;
`;e.s(["R",0,_,"p",0,k,"W",0,j,"a",0,v,"e",0,y,"q",0,C,"z",0,w,"C",0,b,"E",0,c,"n",0,d,"U",0,p,"Q",0,h,"I",0,x,"V",0,u,"Z",0,g,"s",0,m,"t",0,f],177231),e.s(["f",0,function({dataTestId:e,headline:a,lead:n,breadcrumb:s,kicker:l,children:o}){return(0,t.jsxs)(d,{"data-testid":`${e}-head`,children:[s&&s.length>0&&(0,t.jsx)(i.f,{items:s,dataTestId:`${e}-breadcrumb`}),l,(0,t.jsx)(c,{"data-testid":`${e}-title`,children:a}),n&&(0,t.jsx)(h,{"data-testid":`${e}-lead`,children:(0,t.jsx)("p",{children:n})}),o]})}],800035),e.i(624813);var I=e.i(775175),N=e.i(507924);e.s(["f",0,function({articles:e,locale:i,dataTestId:a,large:n=0,showCategory:s=!1,cardTestId:l}){return(0,t.jsx)(w,{"data-testid":a,"data-count":e.length,children:e.map((e,o)=>{let r=o<n;return(0,t.jsx)(b,{$gross:r,"data-size":r?"large":"small","data-slug":e.slug,"data-testid":`${a}-item`,children:(0,t.jsx)(I.f,{headline:(0,N.u)(e.title,i),href:`/news/${e.slug}`,imageUrl:e.imageUrl??void 0,imageAlt:(0,N.u)(e.imageAlt,i)||void 0,imageSizes:r?"(max-width: 768px) 100vw, 50vw":"(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw",date:(0,N.H)(e.publishedAt,i)||void 0,subtitle:s&&e.category?(0,N.u)(e.category.label,i):void 0,description:(0,N.u)(e.excerpt,i)||void 0,tags:e.tags,dataTestId:l?l(e.slug):`${a}-card-${e.slug}`})},e.slug)})})}],385914)},602085,e=>{var t=e.i(843476),i=e.i(885895);e.i(318341);var a=e.i(864648);e.i(821194);var n=e.i(99222),s=e.i(507924),l=e.i(284248);e.i(816017);var o=e.i(217997),r=e.i(152186),d=e.i(856337),c=e.i(33180);e.i(177607);var p=e.i(422180),h=e.i(800035),f=e.i(327196),m=e.i(385914),g=e.i(177231),x=e.i(997053),u=e.i(994244);let y=x.U.div.withConfig({displayName:"NewsCategoryContent.styles__CategoryRoot",componentId:"sc-d0536dee-0"})``,w=x.U.h2.withConfig({displayName:"NewsCategoryContent.styles__ListHeadline",componentId:"sc-d0536dee-1"})`
  ${u.p}
`;var b=e.i(546843);e.s(["default",0,function({category:e,articles:x,categories:u=[],structuredData:v,machineLocales:$,machineUiLocales:k}){let{language:j}=(0,i.N)(),{tr:C}=(0,n.f)(j),_=(0,l.C)(),I=(0,s.u)(e.label,_);return(0,t.jsxs)(c.f,{footerEdge:b.q,children:[v&&(0,t.jsx)(o.f,{data:v}),(0,t.jsxs)(y,{"data-testid":"news-category-root","data-slug":e.slug,"data-count":x.length,children:[(0,t.jsx)(r.f,{children:(0,t.jsxs)(d.f,{xs:12,children:[(0,t.jsx)(h.f,{dataTestId:"news-category",headline:I,breadcrumb:[{label:C("newsCategory.breadcrumb.news"),href:"/news"},{label:I}],children:(0,t.jsx)(f.f,{categories:u,locale:_,activeSlug:e.slug})}),(0,t.jsx)(a.f,{locale:_,language:j,machineLocales:$,machineUiLocales:k,originalHref:`/news/category/${e.slug}`,testIdPrefix:"news-category"}),(0,t.jsxs)(g.I,{"data-testid":"news-category-list","data-count":x.length,"aria-labelledby":"news-category-list-headline",children:[(0,t.jsx)(w,{id:"news-category-list-headline","data-testid":"news-category-list-headline",children:C("newsCategory.list.headline",{defaultValue:"Beiträge in {{category}}",category:I})}),x.length>0?(0,t.jsx)(m.f,{articles:x,locale:_,dataTestId:"news-category-grid",cardTestId:e=>`news-category-card-${e}`}):(0,t.jsx)(g.e,{"data-testid":"news-category-empty",children:C("news.empty",{defaultValue:"Noch keine Beiträge veröffentlicht."})})]})]})}),(0,t.jsx)(p.f,{headline:C("newsCategory.cta.headline"),buttonText:C("newsCategory.cta.button"),buttonHref:"/news",dataTestId:"news-category-cta",edges:b.p})]})]})}],602085)},178446,e=>{e.s(["f",0,function(e){if(!e.startsWith("/")||e.startsWith("//"))return e;let t=e.search(/[?#]/),i=-1===t?e:e.slice(0,t),a=-1===t?"":e.slice(t);return`${i.endsWith("/")||i.slice(i.lastIndexOf("/")+1).includes(".")?i:`${i}/`}${a}`}])}])})();