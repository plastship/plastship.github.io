(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,411206,173972,e=>{var t=e.i(843476),a=e.i(271645),i=e.i(618566);e.i(821194);var n=e.i(99222),o=e.i(476999),s=e.i(14431),r=e.i(713347),l=e.i(635647),d=e.i(891567),c=e.i(997053);let f=c.m`
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
  ${f}
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
`,p=c.U.span.withConfig({displayName:"ContactLink.styles__Plain",componentId:"sc-41592123-1"})`
  ${f}
`,m={tel:{key:"contactLink.aria.tel",fallback:"Anrufen: {{value}}"},mail:{key:"contactLink.aria.mail",fallback:"E-Mail schreiben an {{value}}"},map:{key:"contactLink.aria.map",fallback:"Auf der Karte zeigen: {{value}}"}};e.s(["f",0,({kind:e,value:c,place:f,geo:g,subject:u,icon:x,children:b,dataTestId:y,className:w})=>{let{tr:v}=(0,n.f)(),$=(0,i.usePathname)(),k="string"==typeof c?c.trim():"",j=(0,r.useSiteLocale)(),C="tel"===e?(0,l.A)(k):"mail"===e?(0,l.c)(k,u):(0,l.W)({query:k,geo:g},j),_=(0,a.useCallback)(()=>{(0,o.q)($||"/",d.F,{kind:e,place:f}),s.v({category:"contact",message:d.F,data:{kind:e,place:f}})},[$,e,f]),N=y??`contact-link-${e}`,I=(0,t.jsxs)(t.Fragment,{children:[x,b??k]});if(!k)return null;if(!C)return(0,t.jsx)(p,{className:w,"data-testid":N,"data-kind":e,"data-linked":"false",children:I});let F=k.replace(/\s*\n\s*/g,", ");return(0,t.jsx)(h,{className:w,href:C,onClick:_,"aria-label":v(m[e].key,{value:F,defaultValue:m[e].fallback}),"data-testid":N,"data-kind":e,"data-linked":"true",children:I})}],173972),e.s([],411206)},813267,e=>{var t=e.i(843476),a=e.i(997053);let i=a.U.svg.withConfig({displayName:"IconLocation.styles__Root",componentId:"sc-d4764d0b-0"})``;e.s(["f",0,e=>(0,t.jsxs)(i,{className:e.className,"data-testid":"icon-location-root",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:[(0,t.jsx)("path",{d:"M4.5 9.75768C4.5 15.5 12 22 12 22C12 22 19.5 15.5 19.5 9.75768C19.5 4.81181 15.6559 2 12 2C8.34409 2 4.5 4.81181 4.5 9.75768Z",stroke:"currentColor",strokeWidth:"2",strokeLinejoin:"round"}),(0,t.jsx)("circle",{cx:"12",cy:"9.5",r:"2.5",stroke:"currentColor",strokeWidth:"2"})]})],813267)},874142,e=>{let t=e.i(215063).f;e.s(["f",0,t])},624813,775175,e=>{var t=e.i(843476),a=e.i(271645),i=e.i(325164);e.i(311046);var n=e.i(859146);e.i(429307);var o=e.i(159255),s=e.i(997053),r=e.i(474704),l=e.i(726029),d=e.i(547905);let c=s.m`
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
`,f=s.m`
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
`,h=s.U.article.withConfig({displayName:"NewsCard.styles__Root",componentId:"sc-2d756514-0"})`
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
  ${({$roomy:e,$frameless:t,theme:a})=>e&&!t&&s.m`
      padding: ${a.margin.default};

      @media (min-width: ${r.y.breakpoints.sm}) {
        padding: ${a.margin.large};
      }
    `}

  ${({$frameless:e})=>e&&f}
`,p=s.U.div.withConfig({displayName:"NewsCard.styles__ImageWrapper",componentId:"sc-2d756514-1"})`
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
`,m=s.U.svg.withConfig({displayName:"NewsCard.styles__Accent",componentId:"sc-2d756514-2"})`
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
`,g=s.U.span.withConfig({displayName:"NewsCard.styles__DateBadge",componentId:"sc-2d756514-3"})`
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
`,u=s.U.span.withConfig({displayName:"NewsCard.styles__DateBadgeDay",componentId:"sc-2d756514-4"})`
  font-size: 20px;
  font-weight: 700;
  line-height: 1;
`,x=s.U.span.withConfig({displayName:"NewsCard.styles__DateBadgeMonth",componentId:"sc-2d756514-5"})`
  margin-top: 2px;
  font-size: 11px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: 0.04em;
  text-transform: uppercase;
`,b=s.U.div.withConfig({displayName:"NewsCard.styles__ContentWrapper",componentId:"sc-2d756514-6"})`
  ${l.H}
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;

  /* #2229: Text bündig mit dem Bild, Luft darüber und zwischen den Zeilen aus der Skala */
  ${({$roomy:e,theme:t})=>e&&s.m`
      padding: ${t.margin.default} 0 0;
      gap: ${t.margin.extrasmall};
    `}
`,y=s.U.h3.withConfig({displayName:"NewsCard.styles__Title",componentId:"sc-2d756514-7"})`
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
  ${({$roomy:e,theme:t})=>e&&s.m`
      line-height: ${t.font.headline.five.desktop.lineHeight};

      @media (min-width: 640px) {
        font-size: ${t.font.headline.five.desktop.fontSize};
      }
    `}
`,w=s.U.div.withConfig({displayName:"NewsCard.styles__Meta",componentId:"sc-2d756514-8"})`
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
`,v=s.U.ul.withConfig({displayName:"NewsCard.styles__Tags",componentId:"sc-2d756514-9"})`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 0;
  padding: 0;
  list-style: none;
`,$=s.U.li.withConfig({displayName:"NewsCard.styles__Tag",componentId:"sc-2d756514-10"})`
  ${l.M}
`,k=(0,n.e)({x:1,y:1,width:46,height:46},(0,n.C)(46)),j=(0,n.e)({x:6,y:6,width:36,height:36},(0,n.C)(36));e.s(["f",0,e=>{let{headline:n,href:s,imageUrl:r,imageAlt:l,date:d,dateBadge:c,subtitle:f,description:C,tags:_=[],imageSizes:N="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw",roomy:I=!1,frameless:F=!1,className:U,dataTestId:z="news-card"}=e,[K,L]=(0,a.useState)(!1),T=(0,a.useCallback)(()=>{("function"!=typeof window.matchMedia||window.matchMedia("(hover: hover) and (pointer: fine)").matches)&&L(!0)},[]),S=(0,a.useCallback)(()=>L(!1),[]),A=(0,a.useCallback)(e=>{(e=>{try{return e.matches(":focus-visible")}catch{return!0}})(e.target)&&L(!0)},[]),D=(0,a.useCallback)(()=>L(!1),[]),M=F&&!!r,R=F&&!!s;return(0,t.jsxs)(h,{className:U,$roomy:I,$frameless:F,"data-testid":z,"data-linked":s?"true":"false","data-roomy":I?"true":void 0,"data-frameless":F?"true":void 0,"data-active":R?K?"true":"false":void 0,onMouseEnter:R?T:void 0,onMouseLeave:R?S:void 0,onFocus:R?A:void 0,onBlur:R?D:void 0,children:[r&&(0,t.jsxs)(p,{"data-testid":`${z}-image-wrapper`,"data-card-image":"",children:[(0,t.jsx)(i.default,{src:r,alt:l||n,fill:!0,sizes:N,"data-testid":`${z}-image`}),c&&(0,t.jsxs)(g,{"aria-hidden":"true","data-testid":`${z}-date-badge`,"data-day":c.day,"data-month":c.month,children:[(0,t.jsx)(u,{children:c.day}),(0,t.jsx)(x,{children:c.month})]}),M&&(0,t.jsxs)(m,{viewBox:"0 0 48 48","aria-hidden":"true",focusable:"false","data-testid":`${z}-accent`,children:[(0,t.jsx)("path",{"data-accent-body":"",d:j}),(0,t.jsx)("path",{"data-accent-ring":"",d:k,pathLength:1}),(0,t.jsx)("g",{transform:"translate(16 16)",children:(0,t.jsx)("path",{"data-accent-arrow":"",d:"M8.9 3.3a.9.9 0 0 1 1.3 0l4.1 4.1a.9.9 0 0 1 0 1.2l-4.1 4.1a.9.9 0 1 1-1.3-1.3l2.6-2.5H2.4a.9.9 0 1 1 0-1.8h9.1L8.9 4.6a.9.9 0 0 1 0-1.3Z"})})]})]}),(0,t.jsxs)(b,{$roomy:I,children:[(0,t.jsx)(y,{$roomy:I,"data-testid":`${z}-headline`,children:s?(0,t.jsx)(o.f,{href:s,stretched:!0,dataTestId:`${z}-link`,children:n}):n}),(d||f||C)&&(0,t.jsxs)(w,{"data-testid":`${z}-meta`,children:[(d||f)&&(0,t.jsxs)("p",{children:[d&&(0,t.jsx)("span",{"data-testid":`${z}-date`,children:d}),d&&f&&" · ",f&&(0,t.jsx)("strong",{"data-testid":`${z}-subtitle`,children:f})]}),C&&(0,t.jsx)("p",{"data-testid":`${z}-description`,children:C})]}),_.length>0&&(0,t.jsx)(v,{"data-testid":`${z}-tags`,children:_.map((e,a)=>(0,t.jsx)($,{"data-testid":`${z}-tag-${a}`,children:e},`${e}-${a}`))})]})]})}],775175),e.s([],624813)},538915,226129,600639,546843,e=>{var t=e.i(843476),a=e.i(997053);e.i(315481);var i=e.i(10003),n=e.i(547905),o=e.i(136717);let s=e=>(0,o.L)(e.palette.footer.backgroundEnd),r=e=>(0,o.p)(e.palette.footer.backgroundEnd),l=(e,t)=>r(e)?`rgba(255, 255, 255, ${t})`:`rgba(33, 37, 41, ${t})`;var d=e.i(474704),c=e.i(807897);let f=a.U.footer.withConfig({displayName:"Footer.styles__Root",componentId:"sc-809a1aba-0"})`
  width: 100%;
  /* #2164: Verlauf aus dem Theme, in beiden Modi dunkel; Schrift aus dem Kontrast (footerColors) */
  background: linear-gradient(
    to top,
    ${({theme:e})=>e.palette.footer.background},
    ${({theme:e})=>e.palette.footer.backgroundEnd}
  );
  color: ${({theme:e})=>s(e)};
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
    color: ${({theme:e})=>s(e)};
  }
`,h=a.U.div.withConfig({displayName:"Footer.styles__BottomBar",componentId:"sc-809a1aba-1"})`
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
      ${({theme:e})=>l(e,0)},
      ${({theme:e})=>l(e,.22)} 50%,
      ${({theme:e})=>l(e,0)}
    );
  }

  @media only screen and (max-width: 639px) {
    flex-direction: column-reverse;
    align-items: flex-start;
  }
`,p=a.U.span.withConfig({displayName:"Footer.styles__Copyright",componentId:"sc-809a1aba-2"})`
  white-space: nowrap;
`,m=a.U.nav.withConfig({displayName:"Footer.styles__NavMeta",componentId:"sc-809a1aba-3"})`
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
    color: ${({theme:e})=>s(e)};
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
`,g=a.U.button.withConfig({displayName:"Footer.styles__FooterMetaButton",componentId:"sc-809a1aba-4"})`
  padding: 0;
  border: 0;
  background: none;
  font: inherit;
  cursor: pointer;
  color: ${({theme:e})=>s(e)};
  text-decoration: none;

  &:hover,
  &:focus-visible {
    text-decoration: underline;
  }
`,u=(0,a.U)(i.NavLink).withConfig({displayName:"Footer.styles__FooterLink",componentId:"sc-809a1aba-5"})`
  color: inherit;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`,x=(c.s.height-c.m)/c.s.width*133,b=(0,a.U)(i.NavLink).withConfig({displayName:"Footer.styles__LogoLink",componentId:"sc-809a1aba-6"})`
  display: inline-block;
  /* gestapelt: Luft zur ersten Gruppe; unter der Grundlinie, verschiebt sie nicht */
  padding-bottom: ${({theme:e})=>e.margin.small};
  text-decoration: none;

  && svg {
    display: inline;
    width: ${133}px;
    height: auto;
    vertical-align: baseline;
    margin-bottom: ${-x}px;
  }
`,y=a.U.div.withConfig({displayName:"Footer.styles__FooterRow",componentId:"sc-809a1aba-7"})`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  /* gestapelt (Telefon): Abstand zwischen Logo und erster Gruppe */
  row-gap: ${({theme:e})=>e.margin.small};
  width: 100%;
  margin: 0 auto;
  ${d.K}

  /* Abstand Inhalt → Fußzeile (früher margin-bottom von Row und Col) */
  &:not(:last-child) {
    margin-bottom: ${({theme:e})=>e.margin.default};
  }
`,w=a.U.div.withConfig({displayName:"Footer.styles__FooterColumn",componentId:"sc-809a1aba-8"})`
  ${({$columns:e})=>(0,d.D)(e)}
`,v=a.U.div.withConfig({displayName:"Footer.styles__FooterSection",componentId:"sc-809a1aba-9"})`
  margin-bottom: 20px;
`,$=a.U.ul.withConfig({displayName:"Footer.styles__ContactList",componentId:"sc-809a1aba-10"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 0;
  padding: 0;
  list-style: none;
`,k=a.U.li.withConfig({displayName:"Footer.styles__ContactItem",componentId:"sc-809a1aba-11"})`
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
    color: ${({theme:e})=>s(e)};
  }

  && > a:hover {
    text-decoration: underline;
  }
`,j=a.U.h2.withConfig({displayName:"Footer.styles__FooterSectionTitle",componentId:"sc-809a1aba-12"})`
  && {
    color: ${({theme:e})=>s(e)};
  }
  font-size: 1rem;
  font-weight: 700;
  margin: 0 0 16px;
  text-transform: uppercase;
`,C=a.U.nav.withConfig({displayName:"Footer.styles__FooterLinks",componentId:"sc-809a1aba-13"})`
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
    color: ${({theme:e})=>s(e)};
  }

  && a:hover,
  && a:focus-visible {
    text-decoration: underline;
  }
`;var _=e.i(424734);e.i(821194);var N=e.i(99222),I=e.i(722216),F=e.i(507924),U=e.i(284248),z=e.i(891567);let K=[{titleKey:"footer.sections.links",links:[{href:"/team",labelKey:"footer.team"},{href:"/faq",labelKey:"footer.faq"},{href:"/about",labelKey:"footer.about"},{href:"/news",labelKey:"footer.latest"},{href:"/contact-us",labelKey:"footer.contactForm"},{href:"/services",labelKey:"footer.services"}]}],L={titleKey:"footer.contact",email:z._.info,phone:z.h.central,address:z.Y},T=[{href:"/agb",labelKey:"footer.terms"},{href:"/imprint",labelKey:"footer.imprint"},{href:"/privacy",labelKey:"footer.privacy"},{href:"/email-disclaimer",labelKey:"footer.emailDisclaimer"},{href:"/accessibility",labelKey:"footer.accessibility"}];e.i(411206);var S=e.i(173972),A=e.i(317573),D=e.i(757658),M=e.i(874142),R=e.i(813267);e.i(710788);var B=e.i(363451);e.i(311046);var H=e.i(499881);let W={logo:{xs:{span:12,offset:0},md:{span:3,offset:0},lg:{span:2,offset:0}},section:{xs:{span:12,offset:0},sm:{span:6,offset:0},md:{span:4,offset:0}},contact:{xs:{span:12,offset:0},sm:{span:6,offset:0},md:{span:5,offset:0},lg:{span:4,offset:0}},bottom:{xs:{span:12,offset:0}}},P=e=>({$columns:W[e],"data-columns":(0,d.m)(W[e])}),E={top:{placement:"inner",color:"white"}};e.s(["f",0,e=>{let i=e.edges??E,{tr:n}=(0,N.f)(),o=(0,a.i)(),{footer:s}=(0,I.f)(),l=(0,U.C)();return(0,t.jsxs)(f,{className:e.className,"data-testid":"footer-root","data-edge-contrast":i.top?.contrast??"",$edges:i,children:[(0,H.N)(i)&&(0,t.jsx)(B.f,{edges:i,dataTestId:"footer-root-edge"}),(0,t.jsxs)(y,{"data-testid":"footer-row","data-site-row":"true",children:[(0,t.jsx)(w,{"data-testid":"footer-logo-column",...P("logo"),children:(0,t.jsx)(b,{href:"/","aria-label":n("footer.logo.ariaLabel",{defaultValue:"plastship – zur Startseite"}),"data-testid":"footer-logo-link",children:(0,t.jsx)(_.f,{inverted:!o?.palette?.footer||r(o),monochrome:!0})})}),(0,t.jsx)(t.Fragment,{children:s.length>0?s.map((e,a)=>(0,t.jsx)(w,{...P("section"),children:(0,t.jsxs)(v,{"data-testid":`footer-cms-section-${a}`,"data-count":e.children?.length??0,children:[(0,t.jsx)(j,{"data-testid":`footer-cms-section-${a}-title`,children:(0,F.u)(e.label,l)}),(0,t.jsx)(C,{children:(e.children??[]).map((e,i)=>(0,t.jsx)(u,{href:e.href,"data-testid":`footer-cms-section-${a}-link-${i}`,children:(0,F.u)(e.label,l)},`${e.href}-${i}`))})]})},`${e.href}-${a}`)):K.map((e,a)=>(0,t.jsx)(w,{...P("section"),children:(0,t.jsxs)(v,{"data-testid":`footer-section-${a}`,"data-count":e.links.length,children:[(0,t.jsx)(j,{"data-testid":`footer-section-${a}-title`,children:n(e.titleKey)}),(0,t.jsx)(C,{children:e.links.map(e=>(0,t.jsx)(u,{href:e.href,"data-testid":`footer-link-${e.href.replace(/^\//,"").replace(/\//g,"-")}`,children:n(e.labelKey)},e.href))})]})},e.titleKey))}),(0,t.jsx)(w,{"data-testid":"footer-contact-column",...P("contact"),children:(0,t.jsxs)(v,{"data-testid":"footer-contact",children:[(0,t.jsx)(j,{"data-testid":"footer-contact-title",children:n(L.titleKey)}),(0,t.jsxs)($,{children:[(0,t.jsx)(k,{children:(0,t.jsx)(S.f,{kind:"mail",value:L.email,place:"footer",icon:(0,t.jsx)(A.f,{}),dataTestId:"footer-contact-email"})}),(0,t.jsx)(k,{children:(0,t.jsx)(S.f,{kind:"tel",value:L.phone.e164,place:"footer",icon:(0,t.jsx)(M.f,{}),dataTestId:"footer-contact-phone",children:L.phone.international})}),(0,t.jsx)(k,{children:(0,t.jsx)(S.f,{kind:"map",value:`${L.address.name}, ${(0,z.W)(L.address)}`,geo:L.address.geo,place:"footer",icon:(0,t.jsx)(R.f,{}),dataTestId:"footer-contact-address",children:(0,z.W)(L.address)})})]})]})})]}),(0,t.jsx)(y,{"data-testid":"footer-bottom-row","data-site-row":"true",children:(0,t.jsx)(w,{...P("bottom"),children:(0,t.jsxs)(h,{children:[(0,t.jsx)(p,{"data-testid":"footer-copyright",children:"© plastship GmbH"}),(0,t.jsxs)(m,{"data-testid":"footer-meta","data-count":T.length,children:[T.map(e=>(0,t.jsx)(u,{href:e.href,"data-testid":`footer-meta-${e.href.replace(/^\//,"")}`,children:n(e.labelKey)},e.href)),(0,t.jsx)(g,{type:"button",onClick:D.e,"data-testid":"footer-cookie-settings",children:n("footer.cookieSettings",{defaultValue:"Cookie-Einstellungen"})})]})]})})})]})}],538915);var G=e.i(271645),V=e.i(247902),q=e.i(825969),O=e.i(499911);e.i(657782);var Z=e.i(229132);e.i(730026);var Y=e.i(262076),Q=e.i(184914),J=e.i(157067),X=e.i(885895),ee=e.i(693830),et=e.i(949108),ea=e.i(49958),ei=e.i(726029);let en=(0,G.lazy)(()=>e.A(767483));e.s(["f",0,()=>{let e=(0,et.f)(),{status:a}=(0,ea.useSession)(),i=(0,ee.g)(),{isLeftSidebarOpen:n,closeLeftSidebar:o}=(0,J.i)(),{language:s}=(0,X.N)(),{tr:r}=(0,N.f)(s);return e?(0,t.jsx)(Q.f,{isOpen:n,onClose:o,mode:"guest",maxWidthPx:ei.F-1,barHeightPx:ei.W,footerAction:(0,t.jsx)(V.f,{href:"/login",modifier:q.j.PRIMARY,icon:(0,t.jsx)(O.f,{}),iconAlign:q.W.RIGHT,dataTestId:"mobile-menu-item-login",children:r("header.login.label",{defaultValue:"Login"})}),children:(0,t.jsx)(Y.f,{"data-testid":"mobile-menu-section-public",children:(0,t.jsx)(Z.f,{variant:"stacked",dataTestId:"mobile-menu-item-public"})})}):"authenticated"===a&&i?(0,t.jsx)(G.Suspense,{fallback:null,children:(0,t.jsx)(en,{barHeightPx:ei.W})}):null}],226129),e.s([],600639),e.s(["p",0,{top:{placement:"inner",color:"white",depth:"section"}},"q",0,"navy","e",0,function(e){return e&&"object"==typeof e?{edges:{top:e},flush:!0}:e&&"white"!==e?{edges:{top:{placement:"inner",color:e}},flush:!0}:{edges:void 0,flush:!1}}],546843)},584391,e=>{var t=e.i(843476),a=e.i(997053),i=e.i(726029);let n=a.U.div.withConfig({displayName:"Default.styles__Root",componentId:"sc-6c8f238f-0"})`
  --page-header-offset: ${i.W}px;
  ${i.u}
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-x: clip;
`,o=a.U.main.withConfig({displayName:"Default.styles__Main",componentId:"sc-6c8f238f-1"})`
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
`;var s=e.i(197754),r=e.i(538915);e.i(600639);var l=e.i(226129),d=e.i(729950),c=e.i(546843);e.s(["Default",0,e=>{let{children:a,inverted:i,paddingTop:f=!0,footerEdge:h}=e,p=(0,c.e)(h);return(0,d.H)()?(0,t.jsx)(t.Fragment,{children:a}):(0,t.jsxs)(n,{className:e.className,"data-testid":"default-root",children:[(0,t.jsx)(s.f,{navigation:!1,inverted:i,site:!0}),(0,t.jsx)(l.f,{}),(0,t.jsx)(o,{$paddingTop:f,$flushFooter:p.flush,children:a}),(0,t.jsx)(r.f,{inverted:i,edges:p.edges})]})}],584391)},33180,e=>{let t=e.i(584391).Default;e.s(["f",0,t])},816017,217997,e=>{var t=e.i(843476);e.i(507924);var a=e.i(891567);a.Y.name,a.h.central.international,a._.info,a.Y;let i=String.fromCharCode(8232),n=String.fromCharCode(8233);e.s(["f",0,function({data:e}){return(0,t.jsx)("script",{type:"application/ld+json","data-testid":"structured-data",dangerouslySetInnerHTML:{__html:JSON.stringify(e).replace(/</g,"\\u003c").replace(/>/g,"\\u003e").replace(/&/g,"\\u0026").split(i).join("\\u2028").split(n).join("\\u2029")}})}],217997),e.s([],816017)}])})();