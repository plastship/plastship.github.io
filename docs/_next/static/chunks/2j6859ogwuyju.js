(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,726029,e=>{var t=e.i(997053),r=e.i(547905);let n="640px",i="768px",a=["one","two","three","four","five"],o=e=>t.m`
  ${({theme:r})=>e.map(({ab:e,px:n})=>{let i=a.map(e=>r.font.headline[e].desktop).find(e=>parseFloat(e.fontSize)<n);return i?t.m`
        @media (${e}px <= width < ${r.device.mobile}) {
          font-size: ${i.fontSize};
          line-height: ${i.lineHeight};
        }
      `:""})}
`,s="@media only screen and (min-width: 1280px) and (max-width: 1439px)",l=(e,t)=>`var(--site-${e}, ${t})`;t.m`
  /* #2187 (Abnahme Moritz 29.10.): Außenluft auf das Theme-Maß — vorher
     48/64/128 px wie plastship.com, der Inhalt schwamm (128 px über der
     Überschrift, 32 px zur Karte). Jetzt eine Stufe kleiner aus der Skala:
     Telefon margin.large (32 px), ab md padding.large (64 px); zwei Blöcke
     stehen damit 128 px auseinander. */
  padding-block: ${({theme:e})=>e.margin.large};

  @media (min-width: ${i}) {
    padding-block: ${({theme:e})=>e.padding.large};
  }
`,t.m`
  padding-block: ${({theme:e})=>e.padding.default};

  @media (min-width: ${n}) {
    padding-block: ${({theme:e})=>e.margin.large};
  }

  @media (min-width: ${i}) {
    padding-block: ${({theme:e})=>e.padding.large};
  }
`;let u=t.m`
  margin: 0;
  font-family: ${({theme:e})=>e.font.primaryFamily};
  font-size: 30px;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: 0;
  text-transform: uppercase;
  color: ${({theme:e})=>l("heading",e.palette.site.heading)};
  /*
   * Die Quelle trennt nicht, läuft aber mit langen Versalwörtern über schmale
   * Spalten (Media-Text zweispaltig ab 768px). Trennen ja, doch erst ab zehn
   * Zeichen und mit je fünf davor und danach — kein „IN-DUSTRIE…" mehr.
   */
  hyphens: auto;
  hyphenate-limit-chars: 10 5 5;

  @media (min-width: ${n}) {
    font-size: 36px;
    line-height: 40px;
  }

  /* #2127: am Telefon eine Stufe kleiner (30 → 24 px, ab sm 36 → 32 px) */
  ${o([{ab:0,px:30},{ab:640,px:36}])}
`,c=t.m`
  margin: 0;
  font-family: ${({theme:e})=>e.font.primaryFamily};
  font-size: 18px;
  font-weight: 700;
  line-height: 1.25;
  letter-spacing: 0;
  text-transform: none;
  color: ${({theme:e})=>l("heading",e.palette.site.text)};

  @media (min-width: ${"1024px"}) {
    font-size: 20px;
  }
`,d=({theme:e})=>e.margin.default,f=({theme:e})=>e.margin.extrasmall,h=t.m`
  ul {
    list-style-type: none;
  }

  ul > li {
    position: relative;
    padding-left: 0;
  }

  ul > li::before {
    content: '';
    position: absolute;
    left: calc(-1 * ${d});
    top: 0.65em;
    top: calc(0.5lh - 0.25em);
    width: 0.5em;
    height: 0.5em;
    background: var(--site-accent, ${({theme:e})=>e.palette.site.green});
    ${r.p}
  }

  li ul > li::before {
    top: 0.6875em;
    top: calc(0.5lh - 0.1875em);
    width: 0.375em;
    height: 0.375em;
    opacity: 0.6;
  }
`,p=t.m`
  ul,
  ol {
    padding-left: ${d};
  }

  ol {
    list-style-type: decimal;
  }

  li {
    line-height: inherit;
  }

  li + li {
    margin-top: ${f};
  }

  li > ul,
  li > ol {
    margin-top: ${f};
  }

  ol > li::marker {
    font-weight: 700;
    color: ${({theme:e})=>l("text",e.palette.site.text)};
  }

  ${h}
`,m=t.m`
  font-family: ${({theme:e})=>e.font.secondaryFamily};
  font-size: 16px;
  line-height: 28px;
  color: ${({theme:e})=>l("text",e.palette.site.text)};

  p,
  ul,
  ol {
    margin: 0;
  }

  p + p,
  p + ul,
  ul + p,
  p + ol,
  ol + p {
    margin-top: 1.25em;
  }

  ${p}

  strong,
  b {
    font-weight: 700;
    color: inherit;
  }

  a {
    font-weight: 700;
    color: ${({theme:e})=>l("accent",e.palette.site.greenText)};
    text-decoration: none;

    /* Farbe ausdrücklich: die globale Regel a:hover (Markengrün) wiegt so viel wie die Regel oben */
    &:hover,
    &:focus-visible {
      color: ${({theme:e})=>l("accent",e.palette.site.greenText)};
      text-decoration: underline;
    }
  }
`,g=t.m`
  font-family: ${({theme:e})=>e.font.secondaryFamily};
  font-size: 16px;
  line-height: 24px;
  color: ${({theme:e})=>l("muted",e.palette.site.text)};
`,y=t.m`
  padding: 16px 8px;
`,b=t.m`
  display: block;
  width: 100%;
  height: auto;
  border-radius: 12px 12px 0 0;
  object-fit: cover;
`,x=t.m`
  display: inline-flex;
  align-items: center;
  padding: 4px 8px;
  border-radius: 8px;
  background: ${({theme:e})=>e.palette.site.tint};
  color: ${({theme:e})=>e.palette.site.blue};
  font-family: ${({theme:e})=>e.font.secondaryFamily};
  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
`,v=t.m`
  --button-primary-bg: ${({theme:e})=>e.palette.site.greenText};
  --button-primary-bg-hover: color-mix(
    in srgb,
    ${({theme:e})=>e.palette.site.greenText} 85%,
    #000000
  );
`,w=t.m`
  text-decoration: none;
  /* #1538: Zielfläche mindestens 24 px hoch. Der Link steht inline in der
     Überschrift — senkrechter Innenabstand vergrößert dort nur die Klickfläche,
     nicht die Zeile. */
  padding-block: 4px;

  /* Doppelte Klasse: die globalen Regeln a:hover und [data-theme='dark'] a wiegen mehr als eine */
  &&,
  &&:hover {
    color: inherit;
  }

  svg {
    display: inline-block;
    position: relative;
    top: -2px;
    margin-left: 4px;
    color: ${({theme:e})=>e.palette.site.blue};
    transition: transform 150ms ease;
  }

  &:hover svg,
  &:focus-visible svg {
    transform: translateX(4px);
  }
`,k=t.m`
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    z-index: 1;
    border-radius: 24px;
  }

  &:focus-visible {
    outline: none;
  }

  &:focus-visible::after {
    outline: 2px solid ${({theme:e})=>e.palette.default.primary};
    outline-offset: 2px;
  }
`,$=t.m`
  &:has(a[data-stretched='true']) {
    cursor: pointer;
  }

  &:hover a[data-stretched='true'] svg,
  &:focus-within a[data-stretched='true'] svg {
    transform: translateX(4px);
  }
`;e.s(["F",0,1280,"W",0,80,"z",0,"768px","X",0,s,"e",0,w,"O",0,(e=!1)=>t.m`
  position: relative;
  box-sizing: border-box;
  height: 100%;
  padding: 16px;
  border: 1px solid ${({theme:e})=>l("card-border",e.palette.site.border)};
  /* #1954: die Karte bleibt hell — Schriftfarben des Bands gelten in ihr nicht (initial = Rückfall greift) */
  --site-heading: initial;
  --site-text: initial;
  --site-muted: initial;
  --site-accent: initial;
  border-radius: 24px;
  background: ${({theme:e})=>e.palette.site.card};
  ${e&&t.m`
    box-shadow: ${({theme:e})=>e.palette.site.shadow};
    transition: box-shadow 150ms ease;

    &:hover,
    &:focus-within {
      box-shadow: ${({theme:e})=>e.palette.site.shadowHover};
    }
  `}
`,"H",0,y,"r",0,b,"S",0,u,"Z",0,c,"Y",0,h,"Q",0,$,"n",0,g,"A",0,o,"u",0,v,"b",0,m,"i",0,k,"M",0,x,"N",0,l])},786971,e=>{var t=e.i(843476);e.i(315481);var r=e.i(10003),n=e.i(997053);let i=(0,n.U)(r.NavLink).withConfig({displayName:"AppLink.styles__Root",componentId:"sc-4d47490-0"})`
  color: ${e=>e.theme.palette.link.primary};
  text-decoration: none;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  font-weight: 500;
  cursor: pointer;
  transition: opacity 0.15s ease;

  &:hover {
    text-decoration: underline;
    opacity: 0.8;
  }

  &:visited {
    color: ${e=>e.theme.palette.link.primary};
  }

  &:active {
    color: ${e=>e.theme.palette.link.primary};
  }
`;e.s(["f",0,e=>{let{children:r,href:n,dataTestId:a,className:o,dataUnnamed:s}=e,l=!!(s||e["data-unnamed"]);return(0,t.jsx)(i,{href:n,className:o,"data-testid":a||"app-link-root","data-unnamed":l?"true":void 0,children:r})}],786971)},818579,825969,e=>{var t,r,n,i=e.i(997053),a=((t={}).BUTTON="button",t.SUBMIT="submit",t.RESET="reset",t),o=((r={}).PRIMARY="primary",r.SECONDARY="secondary",r.TERTIARY="tertiary",r.DANGER="danger",r.WARNING="warning",r),s=((n={}).LEFT="left",n.RIGHT="right",n);e.s(["j",()=>o,"O",()=>a,"W",()=>s],825969);let l=i.m`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  box-sizing: border-box;
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  font-family: Arial, sans-serif;
  font-size: 13.3333px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: normal;
  text-transform: none;
  text-align: center;
  transition: all 0.2s ease-in-out;
`,u=i.m`
  ${({$modifier:e})=>{switch(e){case o.PRIMARY:return i.m`
          background-color: var(
            --button-primary-bg,
            ${({theme:e})=>e.palette.default.secondary}
          );
          color: ${({theme:e})=>e.palette.default.white};
          --button-fg: ${({theme:e})=>e.palette.default.white};
          &:hover:not(:disabled) {
            background-color: var(--button-primary-bg-hover, #2da01d);
          }
        `;case o.SECONDARY:return i.m`
          background-color: var(--button-secondary-bg, #003458);
          color: var(--button-secondary-fg, ${({theme:e})=>e.palette.text.onAccent});
          --button-fg: var(--button-secondary-fg, ${({theme:e})=>e.palette.text.onAccent});
          box-shadow: var(--button-secondary-ring, none);
          &:hover:not(:disabled) {
            background-color: var(--button-secondary-bg-hover, #002a47);
            color: var(
              --button-secondary-fg-hover,
              var(--button-secondary-fg, ${({theme:e})=>e.palette.text.onAccent})
            );
            --button-fg: var(
              --button-secondary-fg-hover,
              var(--button-secondary-fg, ${({theme:e})=>e.palette.text.onAccent})
            );
          }
        `;case o.TERTIARY:return i.m`
          background-color: transparent;
          color: ${({theme:e})=>e.palette.default.primary};
          --button-fg: ${({theme:e})=>e.palette.default.primary};
          &:hover:not(:disabled) {
            background-color: ${({theme:e})=>`${e.palette.default.primary}1A`};
          }
        `;case o.DANGER:return i.m`
          background-color: #e22f2f;
          color: ${({theme:e})=>e.palette.text.onAccent};
          --button-fg: ${({theme:e})=>e.palette.text.onAccent};
          &:hover:not(:disabled) {
            background-color: #c72727;
          }
        `;case o.WARNING:return i.m`
          background-color: ${({theme:e})=>e.palette.default.warning};
          color: #292929;
          --button-fg: #292929;
          &:hover:not(:disabled) {
            background-color: #e6b800;
          }
        `;default:return i.m`
          background-color: ${({theme:e})=>e.palette.default.secondary};
          color: ${({theme:e})=>e.palette.default.white};
          --button-fg: ${({theme:e})=>e.palette.default.white};
        `}}}
`,c=i.m`
  ${({$background:e})=>e&&i.m`
      background-color: ${e};
    `}

  ${({$color:e})=>e&&i.m`
      background-color: ${e};
    `}

  ${({$isActive:e,$color:t})=>e&&i.m`
      position: relative;
      background-color: ${t||"#003458"};
      opacity: 1;

      &::after {
        content: '';
        position: absolute;
        bottom: -4px;
        left: 50%;
        transform: translateX(-50%);
        width: 80%;
        height: 3px;
        background-color: ${t||"#003458"};
        border-radius: 2px;
      }
    `}
`,d=i.U.button.withConfig({displayName:"Button.styles__Root",componentId:"sc-1d3302a1-0"})`
  ${l}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${u}
  ${c}
`,f=i.U.span.withConfig({displayName:"Button.styles__Span",componentId:"sc-1d3302a1-1"})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: inherit;
`,h=i.U.span.withConfig({displayName:"Button.styles__IconLeft",componentId:"sc-1d3302a1-2"})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`,p=i.U.span.withConfig({displayName:"Button.styles__IconRight",componentId:"sc-1d3302a1-3"})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;e.s(["m",0,h,"w",0,p,"F",0,d,"p",0,f,"X",0,l,"I",0,u,"R",0,c],818579)},83608,130629,e=>{var t=e.i(843476),r=e.i(271645);let n=e.i(646145).f;e.s(["f",0,n],130629);var i=e.i(818579),a=e.i(136717),o=e.i(825969);let s=e=>{switch(e){case o.j.PRIMARY:return(0,a.p)("#37ba24")?"#ffffff":"#000000";case o.j.SECONDARY:return(0,a.p)("#003458")?"#ffffff":"#000000";case o.j.TERTIARY:return(0,a.p)("#ffffff")?"#ffffff":"#000000";case o.j.DANGER:return(0,a.p)("#e22f2f")?"#ffffff":"#000000";case o.j.WARNING:return(0,a.p)("#ffcd00")?"#ffffff":"#000000";default:return"#000000"}};e.s(["U",0,s,"V",0,({children:e,modifier:a=o.j.PRIMARY,buttonType:l=o.O.BUTTON,icon:u,iconAlign:c,loading:d=!1,disabled:f=!1,background:h,onClick:p,className:m,dataTestId:g="button-root",isActive:y,tooltip:b,color:x})=>{let v=d&&(c||o.W.RIGHT),w=u&&!d&&c,k=u?r.default.cloneElement(u,{color:s(a)}):null;return(0,t.jsxs)(i.F,{className:m,"data-testid":g,"data-modifier":a,disabled:f||d,type:l,$modifier:a,onClick:p,$background:h,$icon:void 0!==u,$isActive:y,$color:x,title:b,children:[(v||w)&&c===o.W.LEFT&&(0,t.jsx)(i.m,{children:d?(0,t.jsx)(n,{}):k}),(0,t.jsx)(i.p,{$background:h,children:e}),(v||w)&&c===o.W.RIGHT&&(0,t.jsx)(i.w,{children:d?(0,t.jsx)(n,{}):k}),d&&!c&&(0,t.jsx)(i.w,{children:(0,t.jsx)(n,{})})]})}],83608)},36380,285393,e=>{var t=e.i(83608);e.i(825969),e.s([],36380),e.s(["f",()=>t.V],285393)},646145,e=>{var t=e.i(843476),r=e.i(997053);let n=r.U.svg.withConfig({displayName:"IconLoadingSpinner.styles__Root",componentId:"sc-d3f00ce6-0"})`
  @keyframes spinner_YpZS {
    0% {
      stroke-dasharray: 0 150;
      stroke-dashoffset: 0;
    }
    47.5% {
      stroke-dasharray: 42 150;
      stroke-dashoffset: -16;
    }
    95%,
    100% {
      stroke-dasharray: 42 150;
      stroke-dashoffset: -59;
    }
  }
`,i=r.U.g.withConfig({displayName:"IconLoadingSpinner.styles__Spinner",componentId:"sc-d3f00ce6-1"})`
  transform-origin: center;
  animation: spinner 2s linear infinite;
  @keyframes spinner {
    100% {
      transform: rotate(360deg);
    }
  }
`,a=r.U.circle.withConfig({displayName:"IconLoadingSpinner.styles__Circle",componentId:"sc-d3f00ce6-2"})`
  stroke-linecap: round;
  animation: spinnercircle 1.5s ease-in-out infinite;
  @keyframes spinnercircle {
    0% {
      stroke-dasharray: 0 150;
      stroke-dashoffset: 0;
    }
    47.5% {
      stroke-dasharray: 42 150;
      stroke-dashoffset: -16;
    }
    95%,
    100% {
      stroke-dasharray: 42 150;
      stroke-dashoffset: -59;
    }
  }
`;e.s(["f",0,e=>{let{inverted:r=!1}=e;return(0,t.jsx)(n,{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",className:e.className,"data-testid":"icon-loading-spinner-root",children:(0,t.jsx)(i,{stroke:r?"#ffffff":"currentColor",children:(0,t.jsx)(a,{cx:"12",cy:"12",r:"9.5",fill:"none",strokeWidth:"3",stroke:r?"#ffffff":"currentColor"})})})}],646145)},10003,e=>{var t=e.i(843476),r=e.i(522016),n=e.i(271645),i=e.i(713347),a=e.i(93138),o=e.i(437992);let s=n.default.forwardRef(function({prefetch:e=!1,href:n,target:s,rel:l,referrerPolicy:u,...c},d){let{locale:f,missing:h}=(0,i.useSiteLocaleContext)(),p=f?h[f]:void 0,m="string"==typeof n?(0,a.l)(n,f,p):n&&"string"==typeof n.pathname?{...n,pathname:(0,a.l)(n.pathname,f,p)}:n,g=(0,o.a)("string"==typeof n?n:void 0,{target:s,rel:l,referrerPolicy:u});return(0,t.jsx)(r.default,{ref:d,prefetch:e,href:m,...g,...c})});e.s(["NavLink",0,s])},315481,e=>{e.i(10003),e.s([])},83053,e=>{var t=e.i(843476);e.i(36380);var r=e.i(285393),n=e.i(825969),i=e.i(997053),a=e.i(351754),o=e.i(726029),s=e.i(683168);let l=i.U.div.withConfig({displayName:"CookieBanner.styles__Root",componentId:"sc-2de89d67-0"})`
  ${o.u}
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: ${a.f.floating+1};
  max-height: 33vh;
  overflow-y: auto;
  box-sizing: border-box;
  padding: ${({theme:e})=>e.padding.extrasmall} ${({theme:e})=>e.padding.default};
  padding-bottom: calc(${({theme:e})=>e.padding.extrasmall} + env(safe-area-inset-bottom, 0px));
  background: ${({theme:e})=>e.palette.default.white};
  color: ${({theme:e})=>e.palette.default.black};
  border-top: 1px solid ${({theme:e})=>e.palette.default.grey};
  box-shadow: 0 -0.25rem 1rem rgba(0, 0, 0, 0.08);

  :root[data-theme='dark'] & {
    background: #1f2937;
    color: #ffffff;
    border-top-color: #4a5568;
  }

  /* #1473: Entscheidung steht schon im Cookie — Server-HTML des Banners nie zeigen */
  html[${s.j}] & {
    display: none;
  }

  @media (max-width: 800px) {
    padding-inline: ${({theme:e})=>e.padding.small};
  }
`,u=i.U.div.withConfig({displayName:"CookieBanner.styles__Inhalt",componentId:"sc-2de89d67-1"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.margin.small};
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: stretch;
    gap: ${({theme:e})=>e.margin.extrasmall};
  }
`,c=i.U.p.withConfig({displayName:"CookieBanner.styles__Texte",componentId:"sc-2de89d67-2"})`
  min-width: 0;
  flex: 1 1 auto;
  margin: 0;
  font-size: 0.8125rem;
  line-height: 1.4;
`,d=i.U.strong.withConfig({displayName:"CookieBanner.styles__Titel",componentId:"sc-2de89d67-3"})`
  font-weight: 600;
  margin-right: ${({theme:e})=>e.margin.extrasmall};
`,f=i.U.span.withConfig({displayName:"CookieBanner.styles__Text",componentId:"sc-2de89d67-4"})`
  a {
    color: ${({theme:e})=>e.palette.default.primary};
    text-decoration: underline;
  }

  :root[data-theme='dark'] & a {
    color: #93c5fd;
  }
`,h=i.U.div.withConfig({displayName:"CookieBanner.styles__Aktionen",componentId:"sc-2de89d67-5"})`
  display: flex;
  gap: ${({theme:e})=>e.margin.extrasmall};
  flex: 0 0 auto;

  > * {
    flex: 1 1 0;
    white-space: nowrap;
  }
`,p=n.j.PRIMARY;e.s(["CookieBanner",0,function({title:e,text:n,acceptAllLabel:i,necessaryOnlyLabel:a,onAcceptAll:o,onNecessaryOnly:s,dataTestId:m="cookie-banner"}){return(0,t.jsx)(l,{role:"dialog","aria-live":"polite","aria-label":"string"==typeof e?e:void 0,"data-testid":m,children:(0,t.jsxs)(u,{children:[(0,t.jsxs)(c,{children:[(0,t.jsx)(d,{"data-testid":`${m}-title`,children:e}),(0,t.jsx)(f,{"data-testid":`${m}-text`,children:n})]}),(0,t.jsxs)(h,{"data-testid":`${m}-actions`,"data-equal-weight":"true",children:[(0,t.jsx)(r.f,{modifier:p,onClick:s,dataTestId:`${m}-necessary`,children:a}),(0,t.jsx)(r.f,{modifier:p,onClick:o,dataTestId:`${m}-accept`,children:i})]})]})})}],83053)},928474,e=>{var t=e.i(843476),r=e.i(271645),n=e.i(786971);e.i(821194);var i=e.i(99222),a=e.i(83053),o=e.i(683168),s=e.i(757658);e.s(["CookieConsent",0,function(){let{tr:e}=(0,i.f)(),[l,u]=(0,r.useState)(!0);(0,r.useEffect)(()=>{u(null===(0,s.$)());let e=()=>u(!0);return window.addEventListener(o.r,e),()=>window.removeEventListener(o.r,e)},[]);let c=(0,r.useCallback)(e=>{(0,s.L)(e),u(!1)},[]);return l?(0,t.jsx)(a.CookieBanner,{title:e("cookieBanner.title",{defaultValue:"Cookies auf plastship"}),text:(0,t.jsxs)(t.Fragment,{children:[e("cookieBanner.consentText",{defaultValue:"Notwendige Cookies für Anmeldung, Sicherheit und Sprache. Mit „Alle akzeptieren“ zählen wir zusätzlich Seitenaufrufe anonym und messen Ladezeiten. Änderbar unter „Cookie-Einstellungen“."})," ",(0,t.jsx)(n.f,{href:"/privacy",dataTestId:"cookie-banner-privacy",children:e("cookieBanner.privacy",{defaultValue:"Datenschutzerklärung"})})]}),acceptAllLabel:e("cookieBanner.acceptAll",{defaultValue:"Alle akzeptieren"}),necessaryOnlyLabel:e("cookieBanner.necessaryOnly",{defaultValue:"Nur notwendige"}),onAcceptAll:()=>c("all"),onNecessaryOnly:()=>c("necessary")}):null}])},757658,e=>{var t=e.i(683168);e.s(["$",0,function(){if("u"<typeof document)return null;try{return(0,t.X)(document.cookie)}catch{return null}},"e",0,function(){document.documentElement.removeAttribute(t.j),window.dispatchEvent(new Event(t.r))},"L",0,function(e){if("u"<typeof document)return;let r="u">typeof location&&"https:"===location.protocol?"; Secure":"";document.cookie=`${t.$}=${e}; Max-Age=${t.E}; Path=/; SameSite=Lax${r}`}])},448717,e=>{var t=e.i(843476),r=e.i(271645),n=e.i(174080),i=e.i(39039),a=e.i(997053),o=e.i(351754);let s=a.U.div.withConfig({displayName:"ToastContainer.styles__Root",componentId:"sc-b5ecfd62-0"})`
  position: fixed;
  top: 16px;
  right: 16px;
  z-index: ${o.f.toast};
  display: flex;
  flex-direction: column;
  gap: 12px;
  pointer-events: none;

  > * {
    pointer-events: auto;
  }

  @media screen and (max-width: ${e=>e.theme.device.smartphone}) {
    top: 0;
    right: 0;
    left: 0;
    align-items: center;
    padding: 16px;
  }
`;var l=e.i(770703);let u=()=>e.A(426308).then(e=>e.Toast),c=(0,l.default)(u,{ssr:!1});e.s(["ToastContainer",0,({dataTestId:e="toast-container-root",className:a})=>{let{toasts:o,dismissToast:l}=(0,i.d)(),[d,f]=(0,r.useState)(new Set),[h,p]=(0,r.useState)(!1),m=(0,r.useRef)(new Map);(0,r.useEffect)(()=>{let e=window,t=()=>void u().catch(()=>void 0);if(e.requestIdleCallback&&e.cancelIdleCallback){let r=e.requestIdleCallback(t,{timeout:5e3});return()=>e.cancelIdleCallback?.(r)}let r=setTimeout(t,1500);return()=>clearTimeout(r)},[]),(0,r.useEffect)(()=>{p(!0);let e=m.current;return()=>{e.forEach(e=>clearTimeout(e)),e.clear()}},[]);let g=(0,r.useCallback)(e=>{f(t=>new Set(t).add(e));let t=setTimeout(()=>{f(t=>{let r=new Set(t);return r.delete(e),r}),l(e),m.current.delete(e)},300);m.current.set(e,t)},[l]);return h&&0!==o.length?(0,n.createPortal)((0,t.jsx)(s,{"data-testid":e,className:a,children:o.map(e=>(0,t.jsx)(c,{item:e,onClose:g,isExiting:d.has(e.id),dataTestId:`toast-item-${e.id}`},e.id))}),document.body):null}],448717)},720383,e=>{var t=e.i(843476),r=e.i(271645),n=e.i(696984);async function i(){let e=await fetch("/api/auth/csrf/",{credentials:"same-origin"});if(!e.ok)throw Error(`csrf ${e.status}`);let{csrfToken:t}=await e.json(),r=await fetch("/api/auth/session/",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify({csrfToken:t,data:{viewAs:null}})});if(!r.ok)throw Error(`session ${r.status}`)}var a=e.i(997053),o=e.i(351754);let s=a.U.div.withConfig({displayName:"ViewAsAnonymousBar.styles__Bar",componentId:"sc-7b7411fa-0"})`
  position: fixed;
  left: 50%;
  bottom: ${({theme:e})=>e.margin.small};
  transform: translateX(-50%);
  z-index: ${o.f.popover};
  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.margin.extrasmall};
  max-width: calc(100vw - 2 * ${({theme:e})=>e.margin.small});
  padding: ${({theme:e})=>e.padding.extrasmall};
  padding-left: ${({theme:e})=>e.padding.small};
  border-radius: ${({theme:e})=>e.borderRadius.button};
  border: 1px solid ${({theme:e})=>e.palette.status.warning.border};
  background: ${({theme:e})=>e.palette.status.warning.bg};
  color: ${({theme:e})=>e.palette.status.warning.text};
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.18);
  font-family: ${({theme:e})=>e.font.primaryFamily};
  font-size: 13px;
  font-weight: 600;
`,l=a.U.span.withConfig({displayName:"ViewAsAnonymousBar.styles__Label",componentId:"sc-7b7411fa-1"})`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,u=a.U.button.withConfig({displayName:"ViewAsAnonymousBar.styles__ExitButton",componentId:"sc-7b7411fa-2"})`
  flex-shrink: 0;
  height: 32px;
  padding: 0 ${({theme:e})=>e.padding.small};
  border-radius: ${({theme:e})=>e.borderRadius.button};
  border: 1px solid ${({theme:e})=>e.palette.status.warning.text};
  background: ${({theme:e})=>e.palette.status.warning.text};
  color: ${({theme:e})=>e.palette.status.warning.bg};
  font: inherit;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  &:disabled {
    cursor: progress;
    opacity: 0.7;
  }

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.palette.status.warning.text};
    outline-offset: 2px;
  }
`,c=a.U.span.withConfig({displayName:"ViewAsAnonymousBar.styles__ErrorText",componentId:"sc-7b7411fa-3"})`
  font-weight: 400;
`;e.s(["ViewAsAnonymousBar",0,function({dataTestId:e="view-as-anonymous-bar"}){let{tr:a}=(0,n.w)(),[o,d]=(0,r.useState)(!1),[f,h]=(0,r.useState)(!1),p=async()=>{d(!0),h(!1);try{await i(),window.location.reload()}catch{d(!1),h(!0)}};return(0,t.jsxs)(s,{role:"region","aria-label":a("viewAs.anonymousBar.ariaLabel",{defaultValue:"Vorschau: Ansicht als ausgeloggt"}),"data-testid":e,"data-view-as-chrome":"true",suppressHydrationWarning:!0,children:[(0,t.jsx)(l,{"data-testid":`${e}-label`,suppressHydrationWarning:!0,children:a("viewAs.anonymousBar.label",{defaultValue:"Ansicht als: Ausgeloggt"})}),f&&(0,t.jsx)(c,{role:"alert","data-testid":`${e}-error`,suppressHydrationWarning:!0,children:a("viewAs.anonymousBar.error",{defaultValue:"Fehlgeschlagen"})}),(0,t.jsx)(u,{type:"button",onClick:()=>void p(),disabled:o,"aria-busy":o,"data-testid":`${e}-exit`,suppressHydrationWarning:!0,children:a("viewAs.anonymousBar.exit",{defaultValue:"Zurück"})})]})}],720383)},693830,e=>{var t=e.i(271645);let r=(0,t.createContext)(!0);e.s(["I",0,r,"g",0,function(){return(0,t.useContext)(r)}])},112683,e=>{var t=e.i(843476),r=e.i(271645);let n=(0,r.createContext)(null);e.s(["CmsNavigationSeedProvider",0,function({seed:e,children:r}){return(0,t.jsx)(n.Provider,{value:e,children:r})},"useCmsNavigationSeed",0,function(){return(0,r.useContext)(n)}])},579215,e=>{var t=e.i(843476),r=e.i(770703),n=e.i(271645),i=e.i(618566),a=e.i(49958),o=e.i(996252),s=e.i(693830);function l(){return e.A(843957).then(e=>e.AppShellProviders)}function u({children:e}){let r=(0,i.usePathname)()??"/",{status:c}=(0,a.useSession)(),d=(0,o.G)(r),[f,h]=(0,n.useState)(null);"authenticated"===c&&null===f&&h(r);let p=!d||null!==f&&f!==r,[m,g]=(0,n.useState)(null);return((0,n.useEffect)(()=>{"authenticated"===c&&l().catch(()=>void 0)},[c]),(0,n.useEffect)(()=>{if(!p||m)return;let e=!0;return l().then(t=>{e&&g(()=>t)}),()=>{e=!1}},[p,m]),m)?(0,t.jsx)(m,{children:e}):d?(0,t.jsx)(s.I.Provider,{value:!1,children:e}):null}let c=(0,r.default)(()=>e.A(95998),{loadableGenerated:{modules:[385720]}});e.s(["ShellProviders",0,function({kind:e,children:r,initialUserContext:n=null}){return"app"===e?(0,t.jsx)(c,{initialUserContext:n,children:r}):(0,t.jsx)(u,{children:r})}],579215)},157067,e=>{var t=e.i(843476),r=e.i(271645);let n=(0,r.createContext)(void 0),i="plastship.sidebar.openGroups",a="plastship.sidebar.autoOpenPath";e.s(["$",0,function({children:e}){let[o,s]=(0,r.useState)(!1),[l,u]=(0,r.useState)(null),c=(0,r.useRef)(0),[d,f]=(0,r.useState)(()=>new Set),[h,p]=(0,r.useState)(!1),[m,g]=(0,r.useState)(null);(0,r.useEffect)(()=>{try{let e=window.localStorage.getItem(i),t=e?JSON.parse(e):null;Array.isArray(t)&&f(new Set(t.filter(e=>"string"==typeof e))),g(window.localStorage.getItem(a))}catch{}finally{p(!0)}},[]);let y=(0,r.useCallback)(e=>{try{window.localStorage.setItem(i,JSON.stringify(Array.from(e)))}catch{}},[]),b=(0,r.useCallback)(e=>{f(t=>{let r=new Set(t);return r.has(e)?r.delete(e):r.add(e),y(r),r})},[y]),x=(0,r.useCallback)(e=>{f(t=>{if(t.has(e))return t;let r=new Set(t);return r.add(e),y(r),r})},[y]),v=(0,r.useCallback)(e=>{g(e);try{window.localStorage.setItem(a,e)}catch{}},[]),w=(0,r.useCallback)(()=>s(!0),[]),k=(0,r.useCallback)(()=>s(!1),[]),$=(0,r.useCallback)(()=>s(e=>!e),[]),[C,S]=(0,r.useState)(!1),[j,A]=(0,r.useState)(null),I=(0,r.useCallback)(e=>{A(e),S(!0)},[]),E=(0,r.useCallback)(()=>{S(!1),setTimeout(()=>A(null),300)},[]);return(0,t.jsx)(n.Provider,{value:{isLeftSidebarOpen:o,openLeftSidebar:w,closeLeftSidebar:k,toggleLeftSidebar:$,leftSidebarContent:l,setLeftSidebarContent:u,leftSidebarScrollRef:c,openNavGroups:d,toggleNavGroup:b,openNavGroup:x,navGroupsHydrated:h,navAutoOpenPath:m,markNavAutoOpened:v,isRightSidebarOpen:C,openRightSidebar:I,closeRightSidebar:E,rightSidebarData:j},children:e})},"m",0,function(){return(0,r.useContext)(n)},"i",0,function(){let e=(0,r.useContext)(n);if(void 0===e)throw Error("useSidebar must be used within a SidebarProvider");return e}])},39039,e=>{var t=e.i(843476),r=e.i(271645),n=e.i(218595);let i=0,a=(0,r.createContext)(void 0);e.s(["N",0,function({children:e}){let[o,s]=(0,r.useState)([]),l=(0,r.useRef)(new Map),u=(0,r.useCallback)(e=>{let t=l.current.get(e);t&&(clearTimeout(t),l.current.delete(e)),s(t=>t.filter(t=>t.id!==e))},[]),c=(0,r.useCallback)(()=>{l.current.forEach(e=>clearTimeout(e)),l.current.clear(),s([])},[]),d=(0,r.useCallback)((e,t,r)=>{let n=(i+=1,`toast-${Date.now()}-${i}`),a=r?.autoClose!==void 0?r.autoClose:5e3,o={id:n,type:e,content:t,autoClose:a,onClick:r?.onClick,createdAt:Date.now()};if(s(e=>{let t=[o,...e];return t.length>5?(t.slice(5).forEach(e=>{let t=l.current.get(e.id);t&&(clearTimeout(t),l.current.delete(e.id))}),t.slice(0,5)):t}),!1!==a&&a>0){let e=setTimeout(()=>{u(n)},a);l.current.set(n,e)}return n},[u]);return(0,r.useEffect)(()=>((0,n.T)({addToast:d,dismissToast:u,dismissAll:c}),()=>{(0,n.T)(null)}),[d,u,c]),(0,r.useEffect)(()=>{let e=l.current;return()=>{e.forEach(e=>clearTimeout(e)),e.clear()}},[]),(0,t.jsx)(a.Provider,{value:{toasts:o,addToast:d,dismissToast:u,dismissAll:c},children:e})},"d",0,function(){let e=(0,r.useContext)(a);if(void 0===e)throw Error("useToast must be used within a ToastProvider");return e}])},241917,e=>{var t=e.i(843476),r=e.i(789359);e.s(["I18nSeed",0,function({seed:e,partial:n,children:i}){return(0,r.Y)(e,n),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("script",{id:"__i18n_seed__",type:"application/json","data-testid":"i18n-seed","data-scope":n?"public":void 0,"data-langs":Object.keys(e).join(",")}),i]})}])},142865,e=>{var t=e.i(843476),r=e.i(14431),n=e.i(997053),i=e.i(619273),a=e.i(286491),o=e.i(540143),s=e.i(915823),l=class extends s.f{constructor(e={}){super(),this.config=e,this.#e=new Map}#e;build(e,t,r){let n=t.queryKey,o=t.queryHash??(0,i.J)(n,t),s=this.get(o);return s||(s=new a.X({client:e,queryKey:n,queryHash:o,options:e.defaultQueryOptions(t),state:r,defaultOptions:e.getQueryDefaults(n)}),this.add(s)),s}add(e){this.#e.has(e.queryHash)||(this.#e.set(e.queryHash,e),this.notify({type:"added",query:e}))}remove(e){let t=this.#e.get(e.queryHash);t&&(e.destroy(),t===e&&this.#e.delete(e.queryHash),this.notify({type:"removed",query:e}))}clear(){o.f.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}get(e){return this.#e.get(e)}getAll(){return[...this.#e.values()]}find(e){let t={exact:!0,...e};return this.getAll().find(e=>(0,i.N)(t,e))}findAll(e={}){let t=this.getAll();return Object.keys(e).length>0?t.filter(t=>(0,i.N)(e,t)):t}notify(e){o.f.batch(()=>{this.listeners.forEach(t=>{t(e)})})}onFocus(){o.f.batch(()=>{this.getAll().forEach(e=>{e.onFocus()})})}onOnline(){o.f.batch(()=>{this.getAll().forEach(e=>{e.onOnline()})})}},u=e.i(114272),c=s,d=class extends c.f{constructor(e={}){super(),this.config=e,this.#t=new Set,this.#r=new Map,this.#n=0}#t;#r;#n;build(e,t,r){let n=new u.I({client:e,mutationCache:this,mutationId:++this.#n,options:e.defaultMutationOptions(t),state:r});return this.add(n),n}add(e){this.#t.add(e);let t=f(e);if("string"==typeof t){let r=this.#r.get(t);r?r.push(e):this.#r.set(t,[e])}this.notify({type:"added",mutation:e})}remove(e){if(this.#t.delete(e)){let t=f(e);if("string"==typeof t){let r=this.#r.get(t);if(r)if(r.length>1){let t=r.indexOf(e);-1!==t&&r.splice(t,1)}else r[0]===e&&this.#r.delete(t)}}this.notify({type:"removed",mutation:e})}canRun(e){let t=f(e);if("string"!=typeof t)return!0;{let r=this.#r.get(t),n=r?.find(e=>"pending"===e.state.status);return!n||n===e}}runNext(e){let t=f(e);if("string"!=typeof t)return Promise.resolve();{let r=this.#r.get(t)?.find(t=>t!==e&&t.state.isPaused);return r?.continue()??Promise.resolve()}}clear(){o.f.batch(()=>{this.#t.forEach(e=>{this.notify({type:"removed",mutation:e})}),this.#t.clear(),this.#r.clear()})}getAll(){return Array.from(this.#t)}find(e){let t={exact:!0,...e};return this.getAll().find(e=>(0,i.L)(t,e))}findAll(e={}){return this.getAll().filter(t=>(0,i.L)(e,t))}notify(e){o.f.batch(()=>{this.listeners.forEach(t=>{t(e)})})}resumePausedMutations(){let e=this.getAll().filter(e=>e.state.isPaused);return o.f.batch(()=>Promise.all(e.map(e=>e.continue().catch(i.z))))}};function f(e){return e.options.scope?.id}var h=e.i(175555),p=e.i(814448),m=class{#i;#a;#o;#s;#l;#u;#c;#d;constructor(e={}){this.#i=e.queryCache||new l,this.#a=e.mutationCache||new d,this.#o=e.defaultOptions||{},this.#s=new Map,this.#l=new Map,this.#u=0}mount(){this.#u++,1===this.#u&&(this.#c=h.f.subscribe(async e=>{e&&(await this.resumePausedMutations(),this.#i.onFocus())}),this.#d=p.f.subscribe(async e=>{e&&(await this.resumePausedMutations(),this.#i.onOnline())}))}unmount(){this.#u--,0===this.#u&&(this.#c?.(),this.#c=void 0,this.#d?.(),this.#d=void 0)}isFetching(e){return this.#i.findAll({...e,fetchStatus:"fetching"}).length}isMutating(e){return this.#a.findAll({...e,status:"pending"}).length}getQueryData(e){let t=this.defaultQueryOptions({queryKey:e});return this.#i.get(t.queryHash)?.state.data}ensureQueryData(e){let t=this.defaultQueryOptions(e),r=this.#i.build(this,t),n=r.state.data;return void 0===n?this.fetchQuery(e):(e.revalidateIfStale&&r.isStaleByTime((0,i.H)(t.staleTime,r))&&this.prefetchQuery(t),Promise.resolve(n))}getQueriesData(e){return this.#i.findAll(e).map(({queryKey:e,state:t})=>[e,t.data])}setQueryData(e,t,r){let n=this.defaultQueryOptions({queryKey:e}),a=this.#i.get(n.queryHash),o=a?.state.data,s=(0,i.b)(t,o);if(void 0!==s)return this.#i.build(this,n).setData(s,{...r,manual:!0})}setQueriesData(e,t,r){return o.f.batch(()=>this.#i.findAll(e).map(({queryKey:e})=>[e,this.setQueryData(e,t,r)]))}getQueryState(e){let t=this.defaultQueryOptions({queryKey:e});return this.#i.get(t.queryHash)?.state}removeQueries(e){let t=this.#i;o.f.batch(()=>{t.findAll(e).forEach(e=>{t.remove(e)})})}resetQueries(e,t){let r=this.#i;return o.f.batch(()=>(r.findAll(e).forEach(e=>{e.reset()}),this.refetchQueries({type:"active",...e},t)))}cancelQueries(e,t={}){let r={revert:!0,...t};return Promise.all(o.f.batch(()=>this.#i.findAll(e).map(e=>e.cancel(r)))).then(i.z).catch(i.z)}invalidateQueries(e,t={}){return o.f.batch(()=>(this.#i.findAll(e).forEach(e=>{e.invalidate()}),e?.refetchType==="none")?Promise.resolve():this.refetchQueries({...e,type:e?.refetchType??e?.type??"active"},t))}refetchQueries(e,t={}){let r={...t,cancelRefetch:t.cancelRefetch??!0};return Promise.all(o.f.batch(()=>this.#i.findAll(e).filter(e=>!e.isDisabled()&&!e.isStatic()).map(e=>{let t=e.fetch(void 0,r);return r.throwOnError||(t=t.catch(i.z)),"paused"===e.state.fetchStatus?Promise.resolve():t}))).then(i.z)}fetchQuery(e){let t=this.defaultQueryOptions(e);void 0===t.retry&&(t.retry=!1);let r=this.#i.build(this,t);return r.isStaleByTime((0,i.H)(t.staleTime,r))?r.fetch(t):Promise.resolve(r.state.data)}prefetchQuery(e){return this.fetchQuery(e).then(i.z).catch(i.z)}fetchInfiniteQuery(e){return e._type="infinite",this.fetchQuery(e)}prefetchInfiniteQuery(e){return this.fetchInfiniteQuery(e).then(i.z).catch(i.z)}ensureInfiniteQueryData(e){return e._type="infinite",this.ensureQueryData(e)}resumePausedMutations(){return p.f.isOnline()?this.#a.resumePausedMutations():Promise.resolve()}getQueryCache(){return this.#i}getMutationCache(){return this.#a}getDefaultOptions(){return this.#o}setDefaultOptions(e){this.#o=e}setQueryDefaults(e,t){this.#s.set((0,i.q)(e),{queryKey:e,defaultOptions:t})}getQueryDefaults(e){let t=[...this.#s.values()],r={};return t.forEach(t=>{(0,i.P)(e,t.queryKey)&&Object.assign(r,t.defaultOptions)}),r}setMutationDefaults(e,t){this.#l.set((0,i.q)(e),{mutationKey:e,defaultOptions:t})}getMutationDefaults(e){let t=[...this.#l.values()],r={};return t.forEach(t=>{(0,i.P)(e,t.mutationKey)&&Object.assign(r,t.defaultOptions)}),r}defaultQueryOptions(e){if(e._defaulted)return e;let t={...this.#o.queries,...this.getQueryDefaults(e.queryKey),...e,_defaulted:!0};return t.queryHash||(t.queryHash=(0,i.J)(t.queryKey,t)),void 0===t.refetchOnReconnect&&(t.refetchOnReconnect="always"!==t.networkMode),void 0===t.throwOnError&&(t.throwOnError=!!t.suspense),!t.networkMode&&t.persister&&(t.networkMode="offlineFirst"),t.queryFn===i.V&&(t.enabled=!1),t}defaultMutationOptions(e){return e?._defaulted?e:{...this.#o.mutations,...e?.mutationKey&&this.getMutationDefaults(e.mutationKey),...e,_defaulted:!0}}clear(){this.#i.clear(),this.#a.clear()}},g=e.i(912598),y=e.i(49958),b=e.i(157067),x=e.i(39039),v=e.i(271645);let w=(0,v.createContext)(null);function k({value:e,children:r}){return(0,t.jsx)(w.Provider,{value:e,children:r})}function $({children:e}){let{data:n}=(0,y.useSession)(),i=(0,v.useContext)(w);return v.default.useEffect(()=>{let e=n?.user;e?.id?(r.N({id:e.id}),r.z("user.role",e.realRole??e.role),r.z("view_as",n?.viewAs?.role)):i?.realUserId?(r.N({id:i.realUserId}),r.z("user.role","admin"),r.z("view_as","anonymous")):(r.N(null),r.z("user.role",void 0),r.z("view_as",void 0))},[n,i]),(0,t.jsx)(t.Fragment,{children:e})}var C=e.i(789359);function S(){let{status:e}=(0,y.useSession)();return(0,v.useEffect)(()=>{if("authenticated"!==e||!(0,C.x)("de"))return;let t=window;if(t.requestIdleCallback&&t.cancelIdleCallback){let e=t.requestIdleCallback(()=>(0,C.b)("de"),{timeout:3e3});return()=>t.cancelIdleCallback?.(e)}let r=setTimeout(()=>(0,C.b)("de"),1500);return()=>clearTimeout(r)},[e]),null}var j=e.i(885895);function A(e){return e?.sentryCaptured===!0}var I=v;class E extends I.default.Component{state={fehler:!1};static getDerivedStateFromError(){return{fehler:!0}}componentDidCatch(e,t){(0,r.i)(e,{componentStack:t.componentStack})}render(){return this.state.fehler?this.props.fallback:this.props.children}}e.i(821194);var T=e.i(99222);let O=new m({queryCache:new l({onError:(e,t)=>{if(A(e))return;let n=e instanceof Error?e.message:String(e);/\b40[13]\b|unauthorized|forbidden|abort/i.test(n)||r.y(e,{tags:{source:"react-query-query"},extra:{queryKey:JSON.stringify(t.queryKey).slice(0,200)}})}}),defaultOptions:{queries:{retry:2},mutations:{onError:e=>{A(e)||r.y(e,{tags:{source:"react-query-mutation"}})}}}});function _({children:e}){let{theme:r,themeMode:i}=(0,j.N)();return(0,t.jsx)(n.J,{theme:r,children:e})}function P(){let{tr:e}=(0,T.f)();return(0,t.jsx)("p",{children:e("common.errorOccurred",{defaultValue:"An error occurred"})})}e.s(["Providers",0,function({children:e,anonymousView:r=null}){return(0,t.jsx)(y.SessionProvider,{children:(0,t.jsx)(k,{value:r,children:(0,t.jsxs)(g.P,{client:O,children:[(0,t.jsx)(S,{}),(0,t.jsx)($,{children:(0,t.jsx)(j.f,{children:(0,t.jsx)(_,{children:(0,t.jsx)(b.$,{children:(0,t.jsx)(x.N,{children:(0,t.jsx)(E,{fallback:(0,t.jsx)(P,{}),children:e})})})})})})]})})})}],142865)},217841,e=>{var t=e.i(843476),r=e.i(271645),n=e.i(618566),i=e.i(997053);e.s(["default",0,function({children:e}){let[a]=(0,r.useState)(()=>new i.R);return(0,n.useServerInsertedHTML)(()=>{let e=a.getStyleElement();return a.instance.clearTag(),(0,t.jsx)(t.Fragment,{children:e})}),(0,t.jsx)(t.Fragment,{children:e})}])},683168,e=>{let t="plastship_consent";e.s(["$",0,t,"j",0,"data-consent","E",0,31536e3,"r",0,"plastship:consent-open","X",0,function(e){if(!e)return null;for(let n of e.split(";")){let[e,...i]=n.trim().split("=");if(e===t)try{var r;return r=decodeURIComponent(i.join("=")),"all"===r||"necessary"===r?r:null}catch{break}}return null},"A",0,function(e,t){return!Number.isFinite(e)||e<=0?0:"all"===t?Math.min(1,e):0}])},437992,e=>{let t=/(^|\.)plastship\.(com|de|org)$/i,r="noopener noreferrer",n="no-referrer";function i(e){let r;if("string"!=typeof e)return!1;let n=e.trim();if(!/^(https?:)?\/\//i.test(n))return!1;try{r=new URL(n,"https://plastship.invalid")}catch{return!1}return("http:"===r.protocol||"https:"===r.protocol)&&!t.test(r.hostname)}let a=/^(geo|maps|comgooglemaps):/i;function o(e){let t=(e??"").split(/\s+/).filter(Boolean);for(let e of r.split(" "))t.some(t=>t.toLowerCase()===e)||t.push(e);return t.join(" ")}e.s(["d",0,{target:"_blank",rel:r,referrerPolicy:n},"T",0,n,"Z",0,r,"a",0,function(e,t={}){let{target:r,rel:s,referrerPolicy:l}=t;if(i(e))return{target:r??"_blank",rel:o(s),referrerPolicy:n};let u={};return(void 0!==r&&(u.target=r),"string"==typeof e&&a.test(e.trim()))?(u.rel=o(s),u.referrerPolicy=n):("_blank"===r?u.rel=o(s):void 0!==s&&(u.rel=s),void 0!==l&&(u.referrerPolicy=l)),u},"b",0,i,"i",0,function(e){window.open(e,"_blank",i(e)?"noopener,noreferrer":"noopener")}])},522016,(e,t,r)=>{e.i(247167),Object.defineProperty(r,"__esModule",{value:!0});var n={default:function(){return y},useLinkStatus:function(){return x}};for(var i in n)Object.defineProperty(r,i,{enumerable:!0,get:n[i]});let a=e.r(190809),o=e.r(843476),s=a._(e.r(271645)),l=e.r(195057),u=e.r(8372),c=e.r(818581),d=e.r(718967),f=e.r(405550),h=e.r(388540),p=e.r(769688),m=e.r(573668),g=e.r(509396);function y(t){var r;let n,i,a,[y,x]=(0,s.useOptimistic)(p.IDLE_LINK_STATUS),v=(0,s.useRef)(null),{href:w,as:k,children:$,prefetch:C=null,passHref:S,replace:j,shallow:A,scroll:I,onClick:E,onMouseEnter:T,onTouchStart:O,legacyBehavior:_=!1,onNavigate:P,transitionTypes:N,ref:R,unstable_dynamicOnHover:q,...z}=t;n=$,_&&("string"==typeof n||"number"==typeof n)&&(n=(0,o.jsx)("a",{children:n}));let M=s.default.useContext(u.AppRouterContext),B=!1!==C,D=!1===C?"none":!0===C?"full":"auto",L="none"!==D?"auto"===D?g.FetchStrategy.PPR:g.FetchStrategy.Full:g.FetchStrategy.PPR,U="string"==typeof(r=k||w)?r:(0,l.formatUrl)(r);if(_){if(n?.$$typeof===Symbol.for("react.lazy"))throw Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag.");i=s.default.Children.only(n)}let F=_?i&&"object"==typeof i&&i.ref:R,Q,H=s.default.useCallback(e=>(null!==M&&(v.current=(0,p.mountLinkInstance)(e,U,M,L,B,x,Q)),()=>{v.current&&((0,p.unmountLinkForCurrentNavigation)(v.current),v.current=null),(0,p.unmountPrefetchableInstance)(e)}),[B,U,M,L,x,Q]),K={ref:(0,c.useMergedRef)(H,F),onClick(t){_||"function"!=typeof E||E(t),_&&i.props&&"function"==typeof i.props.onClick&&i.props.onClick(t),!M||t.defaultPrevented||function(t,r,n,i,a,o,s,l="none"){if("u">typeof window){let u,{nodeName:c}=t.currentTarget;if("A"===c.toUpperCase()&&((u=t.currentTarget.getAttribute("target"))&&"_self"!==u||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which)||t.currentTarget.hasAttribute("download"))return;if(!(0,m.isLocalURL)(r)){i&&(t.preventDefault(),location.replace(r));return}if(t.preventDefault(),o){let e=!1;if(o({preventDefault:()=>{e=!0}}),e)return}let{navigate:d}=e.r(132916);d(r,i?"replace":"push",!1===a?h.ScrollBehavior.NoScroll:h.ScrollBehavior.Default,n.current,s,l)}}(t,U,v,j,I,P,N,D)},onMouseEnter(e){_||"function"!=typeof T||T(e),_&&i.props&&"function"==typeof i.props.onMouseEnter&&i.props.onMouseEnter(e),M&&B&&(0,p.onNavigationIntent)(e.currentTarget,!0===q)},onTouchStart:function(e){_||"function"!=typeof O||O(e),_&&i.props&&"function"==typeof i.props.onTouchStart&&i.props.onTouchStart(e),M&&B&&(0,p.onNavigationIntent)(e.currentTarget,!0===q)}};return(0,d.isAbsoluteUrl)(U)?K.href=U:_&&!S&&("a"!==i.type||"href"in i.props)||(K.href=(0,f.addBasePath)(U)),a=_?s.default.cloneElement(i,K):(0,o.jsx)("a",{...z,...K,children:n}),(0,o.jsx)(b.Provider,{value:y,children:a})}let b=(0,s.createContext)(p.IDLE_LINK_STATUS),x=()=>(0,s.useContext)(b);("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},818581,(e,t,r)=>{Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"useMergedRef",{enumerable:!0,get:function(){return i}});let n=e.r(271645);function i(e,t){let r=(0,n.useRef)(null),i=(0,n.useRef)(null);return(0,n.useCallback)(n=>{if(null===n){let e=r.current;e&&(r.current=null,e());let t=i.current;t&&(i.current=null,t())}else e&&(r.current=a(e,n)),t&&(i.current=a(t,n))},[e,t])}function a(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},195057,(e,t,r)=>{e.i(247167),Object.defineProperty(r,"__esModule",{value:!0});var n={formatUrl:function(){return s},formatWithValidation:function(){return u},urlObjectKeys:function(){return l}};for(var i in n)Object.defineProperty(r,i,{enumerable:!0,get:n[i]});let a=e.r(190809)._(e.r(998183)),o=/https?|ftp|gopher|file/;function s(e){let{auth:t,hostname:r}=e,n=e.protocol||"",i=e.pathname||"",s=e.hash||"",l=e.query||"",u=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?u=t+e.host:r&&(u=t+(~r.indexOf(":")?`[${r}]`:r),e.port&&(u+=":"+e.port)),l&&"object"==typeof l&&(l=String(a.urlQueryToSearchParams(l)));let c=e.search||l&&`?${l}`||"";return n&&!n.endsWith(":")&&(n+=":"),e.slashes||(!n||o.test(n))&&!1!==u?(u="//"+(u||""),i&&"/"!==i[0]&&(i="/"+i)):u||(u=""),s&&"#"!==s[0]&&(s="#"+s),c&&"?"!==c[0]&&(c="?"+c),i=i.replace(/[?#]/g,encodeURIComponent),c=c.replace("#","%23"),`${n}${u}${i}${c}${s}`}let l=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function u(e){return s(e)}},573668,(e,t,r)=>{Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"isLocalURL",{enumerable:!0,get:function(){return a}});let n=e.r(718967),i=e.r(652817);function a(e){if(!(0,n.isAbsoluteUrl)(e))return!0;try{let t=(0,n.getLocationOrigin)(),r=new URL(e,t);return r.origin===t&&(0,i.hasBasePath)(r.pathname)}catch(e){return!1}}},718967,(e,t,r)=>{e.i(247167),Object.defineProperty(r,"__esModule",{value:!0});var n={DecodeError:function(){return y},MiddlewareNotFoundError:function(){return w},MissingStaticPage:function(){return v},NormalizeError:function(){return b},PageNotFoundError:function(){return x},SP:function(){return m},ST:function(){return g},WEB_VITALS:function(){return a},execOnce:function(){return o},getDisplayName:function(){return d},getLocationOrigin:function(){return u},getURL:function(){return c},isAbsoluteUrl:function(){return l},isResSent:function(){return f},loadGetInitialProps:function(){return p},normalizeRepeatedSlashes:function(){return h},stringifyError:function(){return k}};for(var i in n)Object.defineProperty(r,i,{enumerable:!0,get:n[i]});let a=["CLS","FCP","INP","LCP","TTFB"];function o(e){let t,r=!1;return(...n)=>(r||(r=!0,t=e(...n)),t)}let s=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,l=e=>{let t=e.charCodeAt(0);return!!(t>=65&&t<=90||t>=97&&t<=122)&&s.test(e)};function u(){let{protocol:e,hostname:t,port:r}=window.location;return`${e}//${t}${r?":"+r:""}`}function c(){let{href:e}=window.location,t=u();return e.substring(t.length)}function d(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function f(e){return e.finished||e.headersSent}function h(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?`?${t.slice(1).join("?")}`:"")}async function p(e,t){let r=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await p(t.Component,t.ctx)}:{};let n=await e.getInitialProps(t);if(r&&f(r))return n;if(!n)throw Error(`"${d(e)}.getInitialProps()" should resolve to an object. But found "${n}" instead.`);return n}let m="u">typeof performance,g=m&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class y extends Error{}class b extends Error{}class x extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message=`Cannot find module for page: ${e}`}}class v extends Error{constructor(e,t){super(),this.message=`Failed to load static file for page: ${e} ${t}`}}class w extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function k(e){return JSON.stringify({message:e.message,stack:e.stack})}}])})();