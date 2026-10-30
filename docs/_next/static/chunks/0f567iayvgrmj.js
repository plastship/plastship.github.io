(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,726029,e=>{var t=e.i(997053),r=e.i(547905);let n="640px",o="768px",a=["one","two","three","four","five"],i=e=>t.m`
  ${({theme:r})=>e.map(({ab:e,px:n})=>{let o=a.map(e=>r.font.headline[e].desktop).find(e=>parseFloat(e.fontSize)<n);return o?t.m`
        @media (${e}px <= width < ${r.device.mobile}) {
          font-size: ${o.fontSize};
          line-height: ${o.lineHeight};
        }
      `:""})}
`,l="@media only screen and (min-width: 1280px) and (max-width: 1439px)",s=(e,t)=>`var(--site-${e}, ${t})`,u=t.m`
  /* #2187 (Abnahme Moritz 29.10.): Außenluft auf das Theme-Maß — vorher
     48/64/128 px wie plastship.com, der Inhalt schwamm (128 px über der
     Überschrift, 32 px zur Karte). Jetzt eine Stufe kleiner aus der Skala:
     Telefon margin.large (32 px), ab md padding.large (64 px); zwei Blöcke
     stehen damit 128 px auseinander. */
  padding-block: ${({theme:e})=>e.margin.large};

  @media (min-width: ${o}) {
    padding-block: ${({theme:e})=>e.padding.large};
  }
`,c=t.m`
  padding-block: ${({theme:e})=>e.padding.default};

  @media (min-width: ${n}) {
    padding-block: ${({theme:e})=>e.margin.large};
  }

  @media (min-width: ${o}) {
    padding-block: ${({theme:e})=>e.padding.large};
  }
`,f=t.m`
  margin: 0;
  font-family: ${({theme:e})=>e.font.primaryFamily};
  font-size: 30px;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: 0;
  text-transform: uppercase;
  color: ${({theme:e})=>s("heading",e.palette.site.heading)};
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
  ${i([{ab:0,px:30},{ab:640,px:36}])}
`,d=t.m`
  margin: 0;
  font-family: ${({theme:e})=>e.font.primaryFamily};
  font-size: 18px;
  font-weight: 700;
  line-height: 1.25;
  letter-spacing: 0;
  text-transform: none;
  color: ${({theme:e})=>s("heading",e.palette.site.text)};

  @media (min-width: ${"1024px"}) {
    font-size: 20px;
  }
`,p=t.m`
  ul {
    list-style: none;
  }

  ul > li {
    position: relative;
  }

  ul > li::before {
    content: '';
    position: absolute;
    left: -1.25em;
    top: 0.65em;
    width: 0.5em;
    height: 0.5em;
    background: var(--site-accent, ${({theme:e})=>e.palette.site.green});
    ${r.p}
  }
`,h=t.m`
  font-family: ${({theme:e})=>e.font.secondaryFamily};
  font-size: 16px;
  line-height: 28px;
  color: ${({theme:e})=>s("text",e.palette.site.text)};

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

  ul,
  ol {
    padding-left: 1.25em;
  }

  li + li {
    margin-top: 0.25em;
  }

  ${p}

  strong,
  b {
    font-weight: 700;
    color: inherit;
  }

  a {
    font-weight: 700;
    color: ${({theme:e})=>s("accent",e.palette.site.greenText)};
    text-decoration: none;

    /* Farbe ausdrücklich: die globale Regel a:hover (Markengrün) wiegt so viel wie die Regel oben */
    &:hover,
    &:focus-visible {
      color: ${({theme:e})=>s("accent",e.palette.site.greenText)};
      text-decoration: underline;
    }
  }
`,g=t.m`
  font-family: ${({theme:e})=>e.font.secondaryFamily};
  font-size: 16px;
  line-height: 24px;
  color: ${({theme:e})=>s("muted",e.palette.site.text)};
`,m=t.m`
  padding: 16px 8px;
`,b=t.m`
  display: block;
  width: 100%;
  height: auto;
  border-radius: 12px 12px 0 0;
  object-fit: cover;
`,y=t.m`
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
`,x=t.m`
  --button-primary-bg: ${({theme:e})=>e.palette.site.greenText};
  --button-primary-bg-hover: color-mix(
    in srgb,
    ${({theme:e})=>e.palette.site.greenText} 85%,
    #000000
  );
`,v=t.m`
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
`,w=t.m`
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
`;e.s(["F",0,1280,"W",0,80,"z",0,"768px","X",0,l,"e",0,v,"O",0,(e=!1)=>t.m`
  position: relative;
  box-sizing: border-box;
  height: 100%;
  padding: 16px;
  border: 1px solid ${({theme:e})=>s("card-border",e.palette.site.border)};
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
`,"H",0,m,"r",0,b,"S",0,f,"Z",0,d,"Y",0,p,"Q",0,$,"n",0,g,"A",0,i,"u",0,x,"b",0,h,"a",0,u,"D",0,c,"i",0,w,"M",0,y,"N",0,s])},351754,e=>{e.s(["f",0,{base:1,sticky:100,viewer:150,dropdown:500,floating:900,overlay:1e3,overlayTop:1100,popover:1200,toast:2e3,tour:9e3,tourTooltip:9001}])},818579,825969,e=>{var t,r,n,o=e.i(997053),a=((t={}).BUTTON="button",t.SUBMIT="submit",t.RESET="reset",t),i=((r={}).PRIMARY="primary",r.SECONDARY="secondary",r.TERTIARY="tertiary",r.DANGER="danger",r.WARNING="warning",r),l=((n={}).LEFT="left",n.RIGHT="right",n);e.s(["j",()=>i,"O",()=>a,"W",()=>l],825969);let s=o.m`
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
`,u=o.m`
  ${({$modifier:e})=>{switch(e){case i.PRIMARY:return o.m`
          background-color: var(--button-primary-bg, ${({theme:e})=>e.palette.default.secondary});
          color: ${({theme:e})=>e.palette.default.white};
          --button-fg: ${({theme:e})=>e.palette.default.white};
          &:hover:not(:disabled) {
            background-color: var(--button-primary-bg-hover, #2da01d);
          }
        `;case i.SECONDARY:return o.m`
          background-color: #003458;
          color: ${({theme:e})=>e.palette.text.onAccent};
          --button-fg: ${({theme:e})=>e.palette.text.onAccent};
          &:hover:not(:disabled) {
            background-color: #002a47;
          }
        `;case i.TERTIARY:return o.m`
          background-color: transparent;
          color: ${({theme:e})=>e.palette.default.primary};
          --button-fg: ${({theme:e})=>e.palette.default.primary};
          &:hover:not(:disabled) {
            background-color: ${({theme:e})=>`${e.palette.default.primary}1A`};
          }
        `;case i.DANGER:return o.m`
          background-color: #e22f2f;
          color: ${({theme:e})=>e.palette.text.onAccent};
          --button-fg: ${({theme:e})=>e.palette.text.onAccent};
          &:hover:not(:disabled) {
            background-color: #c72727;
          }
        `;case i.WARNING:return o.m`
          background-color: ${({theme:e})=>e.palette.default.warning};
          color: #292929;
          --button-fg: #292929;
          &:hover:not(:disabled) {
            background-color: #e6b800;
          }
        `;default:return o.m`
          background-color: ${({theme:e})=>e.palette.default.secondary};
          color: ${({theme:e})=>e.palette.default.white};
          --button-fg: ${({theme:e})=>e.palette.default.white};
        `}}}
`,c=o.m`
  ${({$background:e})=>e&&o.m`
      background-color: ${e};
    `}

  ${({$color:e})=>e&&o.m`
      background-color: ${e};
    `}

  ${({$isActive:e,$color:t})=>e&&o.m`
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
`,f=o.U.button.withConfig({displayName:"Button.styles__Root",componentId:"sc-1d3302a1-0"})`
  ${s}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${u}
  ${c}
`,d=o.U.span.withConfig({displayName:"Button.styles__Span",componentId:"sc-1d3302a1-1"})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: inherit;
`,p=o.U.span.withConfig({displayName:"Button.styles__IconLeft",componentId:"sc-1d3302a1-2"})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`,h=o.U.span.withConfig({displayName:"Button.styles__IconRight",componentId:"sc-1d3302a1-3"})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;e.s(["m",0,p,"w",0,h,"F",0,f,"p",0,d,"X",0,s,"I",0,u,"R",0,c],818579)},83608,130629,e=>{var t=e.i(843476),r=e.i(271645);let n=e.i(646145).f;e.s(["f",0,n],130629);var o=e.i(818579),a=e.i(136717),i=e.i(825969);let l=e=>{switch(e){case i.j.PRIMARY:return(0,a.p)("#37ba24")?"#ffffff":"#000000";case i.j.SECONDARY:return(0,a.p)("#003458")?"#ffffff":"#000000";case i.j.TERTIARY:return(0,a.p)("#ffffff")?"#ffffff":"#000000";case i.j.DANGER:return(0,a.p)("#e22f2f")?"#ffffff":"#000000";case i.j.WARNING:return(0,a.p)("#ffcd00")?"#ffffff":"#000000";default:return"#000000"}};e.s(["U",0,l,"V",0,({children:e,modifier:a=i.j.PRIMARY,buttonType:s=i.O.BUTTON,icon:u,iconAlign:c,loading:f=!1,disabled:d=!1,background:p,onClick:h,className:g,dataTestId:m="button-root",isActive:b,tooltip:y,color:x})=>{let v=f&&(c||i.W.RIGHT),w=u&&!f&&c,$=u?r.default.cloneElement(u,{color:l(a)}):null;return(0,t.jsxs)(o.F,{className:g,"data-testid":m,"data-modifier":a,disabled:d||f,type:s,$modifier:a,onClick:h,$background:p,$icon:void 0!==u,$isActive:b,$color:x,title:y,children:[(v||w)&&c===i.W.LEFT&&(0,t.jsx)(o.m,{children:f?(0,t.jsx)(n,{}):$}),(0,t.jsx)(o.p,{$background:p,children:e}),(v||w)&&c===i.W.RIGHT&&(0,t.jsx)(o.w,{children:f?(0,t.jsx)(n,{}):$}),f&&!c&&(0,t.jsx)(o.w,{children:(0,t.jsx)(n,{})})]})}],83608)},646145,e=>{var t=e.i(843476),r=e.i(997053);let n=r.U.svg.withConfig({displayName:"IconLoadingSpinner.styles__Root",componentId:"sc-d3f00ce6-0"})`
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
`,o=r.U.g.withConfig({displayName:"IconLoadingSpinner.styles__Spinner",componentId:"sc-d3f00ce6-1"})`
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
`;e.s(["f",0,e=>{let{inverted:r=!1}=e;return(0,t.jsx)(n,{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",className:e.className,"data-testid":"icon-loading-spinner-root",children:(0,t.jsx)(o,{stroke:r?"#ffffff":"currentColor",children:(0,t.jsx)(a,{cx:"12",cy:"12",r:"9.5",fill:"none",strokeWidth:"3",stroke:r?"#ffffff":"currentColor"})})})}],646145)},10003,e=>{var t=e.i(843476),r=e.i(522016),n=e.i(271645),o=e.i(713347),a=e.i(93138),i=e.i(437992);let l=n.default.forwardRef(function({prefetch:e=!1,href:n,target:l,rel:s,referrerPolicy:u,...c},f){let{locale:d,missing:p}=(0,o.useSiteLocaleContext)(),h=d?p[d]:void 0,g="string"==typeof n?(0,a.l)(n,d,h):n&&"string"==typeof n.pathname?{...n,pathname:(0,a.l)(n.pathname,d,h)}:n,m=(0,i.a)("string"==typeof n?n:void 0,{target:l,rel:s,referrerPolicy:u});return(0,t.jsx)(r.default,{ref:f,prefetch:e,href:g,...m,...c})});e.s(["NavLink",0,l])},315481,e=>{e.i(10003),e.s([])},693830,e=>{var t=e.i(271645);let r=(0,t.createContext)(!0);e.s(["I",0,r,"g",0,function(){return(0,t.useContext)(r)}])},112683,e=>{var t=e.i(843476),r=e.i(271645);let n=(0,r.createContext)(null);e.s(["CmsNavigationSeedProvider",0,function({seed:e,children:r}){return(0,t.jsx)(n.Provider,{value:e,children:r})},"useCmsNavigationSeed",0,function(){return(0,r.useContext)(n)}])},157067,e=>{var t=e.i(843476),r=e.i(271645);let n=(0,r.createContext)(void 0),o="plastship.sidebar.openGroups",a="plastship.sidebar.autoOpenPath";e.s(["$",0,function({children:e}){let[i,l]=(0,r.useState)(!1),[s,u]=(0,r.useState)(null),c=(0,r.useRef)(0),[f,d]=(0,r.useState)(()=>new Set),[p,h]=(0,r.useState)(!1),[g,m]=(0,r.useState)(null);(0,r.useEffect)(()=>{try{let e=window.localStorage.getItem(o),t=e?JSON.parse(e):null;Array.isArray(t)&&d(new Set(t.filter(e=>"string"==typeof e))),m(window.localStorage.getItem(a))}catch{}finally{h(!0)}},[]);let b=(0,r.useCallback)(e=>{try{window.localStorage.setItem(o,JSON.stringify(Array.from(e)))}catch{}},[]),y=(0,r.useCallback)(e=>{d(t=>{let r=new Set(t);return r.has(e)?r.delete(e):r.add(e),b(r),r})},[b]),x=(0,r.useCallback)(e=>{d(t=>{if(t.has(e))return t;let r=new Set(t);return r.add(e),b(r),r})},[b]),v=(0,r.useCallback)(e=>{m(e);try{window.localStorage.setItem(a,e)}catch{}},[]),w=(0,r.useCallback)(()=>l(!0),[]),$=(0,r.useCallback)(()=>l(!1),[]),k=(0,r.useCallback)(()=>l(e=>!e),[]),[S,j]=(0,r.useState)(!1),[P,C]=(0,r.useState)(null),R=(0,r.useCallback)(e=>{C(e),j(!0)},[]),_=(0,r.useCallback)(()=>{j(!1),setTimeout(()=>C(null),300)},[]);return(0,t.jsx)(n.Provider,{value:{isLeftSidebarOpen:i,openLeftSidebar:w,closeLeftSidebar:$,toggleLeftSidebar:k,leftSidebarContent:s,setLeftSidebarContent:u,leftSidebarScrollRef:c,openNavGroups:f,toggleNavGroup:y,openNavGroup:x,navGroupsHydrated:p,navAutoOpenPath:g,markNavAutoOpened:v,isRightSidebarOpen:S,openRightSidebar:R,closeRightSidebar:_,rightSidebarData:P},children:e})},"m",0,function(){return(0,r.useContext)(n)},"i",0,function(){let e=(0,r.useContext)(n);if(void 0===e)throw Error("useSidebar must be used within a SidebarProvider");return e}])},136717,e=>{function t(e){return"#"+(0x1000000|(e[0]??0)<<16|(e[1]??0)<<8|(e[2]??0)).toString(16).slice(1).toUpperCase()}function r(e){return[parseInt(e.slice(1,3),16),parseInt(e.slice(3,5),16),parseInt(e.slice(5,7),16)]}function n(e){let t=(e[0]??0)/255,r=(e[1]??0)/255,n=(e[2]??0)/255;return .2126*(t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4))+.7152*(r<=.03928?r/12.92:Math.pow((r+.055)/1.055,2.4))+.0722*(n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4))}function o(e){return 9>a(e,"#000000")}function a(e,t){let o=r(e),a=r(t),i=n(o),l=n(a);return(Math.max(i,l)+.05)/(Math.min(i,l)+.05)}let i="#00416E";e.s(["n",0,a,"L",0,function(e){return o(e)?"#ffffff":"#212529"},"s",0,function(e,n=0,o=1,a){switch(e){case"error":return"#DC0000";case"warning":return"#FFCD00";case"success":return"#37BA24";case"info":return"#00416E";case"custom":return a||i;default:var l;let s,u,c;return l=o>1?n/(o-1):0,s=r(i),u=r("#37BA24"),c=Math.round((s[0]??0)+((u[0]??0)-(s[0]??0))*l),t([c,Math.round((s[1]??0)+((u[1]??0)-(s[1]??0))*l),Math.round((s[2]??0)+((u[2]??0)-(s[2]??0))*l)])}},"Y",0,r,"J",0,function(e){return/^#[0-9A-Fa-f]{6}$/.test(e)},"N",0,t,"p",0,o])},437992,e=>{let t=/(^|\.)plastship\.(com|de|org)$/i,r="noopener noreferrer",n="no-referrer";function o(e){let r;if("string"!=typeof e)return!1;let n=e.trim();if(!/^(https?:)?\/\//i.test(n))return!1;try{r=new URL(n,"https://plastship.invalid")}catch{return!1}return("http:"===r.protocol||"https:"===r.protocol)&&!t.test(r.hostname)}let a=/^(geo|maps|comgooglemaps):/i;function i(e){let t=(e??"").split(/\s+/).filter(Boolean);for(let e of r.split(" "))t.some(t=>t.toLowerCase()===e)||t.push(e);return t.join(" ")}e.s(["d",0,{target:"_blank",rel:r,referrerPolicy:n},"T",0,n,"Z",0,r,"a",0,function(e,t={}){let{target:r,rel:l,referrerPolicy:s}=t;if(o(e))return{target:r??"_blank",rel:i(l),referrerPolicy:n};let u={};return(void 0!==r&&(u.target=r),"string"==typeof e&&a.test(e.trim()))?(u.rel=i(l),u.referrerPolicy=n):("_blank"===r?u.rel=i(l):void 0!==l&&(u.rel=l),void 0!==s&&(u.referrerPolicy=s)),u},"b",0,o,"i",0,function(e){window.open(e,"_blank",o(e)?"noopener,noreferrer":"noopener")}])},522016,(e,t,r)=>{e.i(247167),Object.defineProperty(r,"__esModule",{value:!0});var n={default:function(){return b},useLinkStatus:function(){return x}};for(var o in n)Object.defineProperty(r,o,{enumerable:!0,get:n[o]});let a=e.r(190809),i=e.r(843476),l=a._(e.r(271645)),s=e.r(195057),u=e.r(8372),c=e.r(818581),f=e.r(718967),d=e.r(405550),p=e.r(388540),h=e.r(769688),g=e.r(573668),m=e.r(509396);function b(t){var r;let n,o,a,[b,x]=(0,l.useOptimistic)(h.IDLE_LINK_STATUS),v=(0,l.useRef)(null),{href:w,as:$,children:k,prefetch:S=null,passHref:j,replace:P,shallow:C,scroll:R,onClick:_,onMouseEnter:T,onTouchStart:I,legacyBehavior:A=!1,onNavigate:O,transitionTypes:N,ref:E,unstable_dynamicOnHover:M,...L}=t;n=k,A&&("string"==typeof n||"number"==typeof n)&&(n=(0,i.jsx)("a",{children:n}));let B=l.default.useContext(u.AppRouterContext),U=!1!==S,F=!1===S?"none":!0===S?"full":"auto",z="none"!==F?"auto"===F?m.FetchStrategy.PPR:m.FetchStrategy.Full:m.FetchStrategy.PPR,D="string"==typeof(r=$||w)?r:(0,s.formatUrl)(r);if(A){if(n?.$$typeof===Symbol.for("react.lazy"))throw Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag.");o=l.default.Children.only(n)}let G=A?o&&"object"==typeof o&&o.ref:E,W,K=l.default.useCallback(e=>(null!==B&&(v.current=(0,h.mountLinkInstance)(e,D,B,z,U,x,W)),()=>{v.current&&((0,h.unmountLinkForCurrentNavigation)(v.current),v.current=null),(0,h.unmountPrefetchableInstance)(e)}),[U,D,B,z,x,W]),Y={ref:(0,c.useMergedRef)(K,G),onClick(t){A||"function"!=typeof _||_(t),A&&o.props&&"function"==typeof o.props.onClick&&o.props.onClick(t),!B||t.defaultPrevented||function(t,r,n,o,a,i,l,s="none"){if("u">typeof window){let u,{nodeName:c}=t.currentTarget;if("A"===c.toUpperCase()&&((u=t.currentTarget.getAttribute("target"))&&"_self"!==u||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which)||t.currentTarget.hasAttribute("download"))return;if(!(0,g.isLocalURL)(r)){o&&(t.preventDefault(),location.replace(r));return}if(t.preventDefault(),i){let e=!1;if(i({preventDefault:()=>{e=!0}}),e)return}let{navigate:f}=e.r(132916);f(r,o?"replace":"push",!1===a?p.ScrollBehavior.NoScroll:p.ScrollBehavior.Default,n.current,l,s)}}(t,D,v,P,R,O,N,F)},onMouseEnter(e){A||"function"!=typeof T||T(e),A&&o.props&&"function"==typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),B&&U&&(0,h.onNavigationIntent)(e.currentTarget,!0===M)},onTouchStart:function(e){A||"function"!=typeof I||I(e),A&&o.props&&"function"==typeof o.props.onTouchStart&&o.props.onTouchStart(e),B&&U&&(0,h.onNavigationIntent)(e.currentTarget,!0===M)}};return(0,f.isAbsoluteUrl)(D)?Y.href=D:A&&!j&&("a"!==o.type||"href"in o.props)||(Y.href=(0,d.addBasePath)(D)),a=A?l.default.cloneElement(o,Y):(0,i.jsx)("a",{...L,...Y,children:n}),(0,i.jsx)(y.Provider,{value:b,children:a})}let y=(0,l.createContext)(h.IDLE_LINK_STATUS),x=()=>(0,l.useContext)(y);("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},818581,(e,t,r)=>{Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"useMergedRef",{enumerable:!0,get:function(){return o}});let n=e.r(271645);function o(e,t){let r=(0,n.useRef)(null),o=(0,n.useRef)(null);return(0,n.useCallback)(n=>{if(null===n){let e=r.current;e&&(r.current=null,e());let t=o.current;t&&(o.current=null,t())}else e&&(r.current=a(e,n)),t&&(o.current=a(t,n))},[e,t])}function a(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},90317,(e,t,r)=>{Object.defineProperty(r,"__esModule",{value:!0});var n={bindSnapshot:function(){return c},createAsyncLocalStorage:function(){return s},createSnapshot:function(){return f},getOrCreateGlobalAsyncLocalStorage:function(){return u}};for(var o in n)Object.defineProperty(r,o,{enumerable:!0,get:n[o]});let a=Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available");class i{disable(){throw a}getStore(){}run(){throw a}exit(){throw a}enterWith(){throw a}static bind(e){return e}}let l="u">typeof globalThis&&globalThis.AsyncLocalStorage;function s(){return l?new l:new i}function u(e){let t=Symbol.for(`@next/${e}@16.4.2`),r=globalThis;return r[t]??=s()}function c(e){return l?l.bind(e):i.bind(e)}function f(){return l?l.snapshot():function(e,...t){return e(...t)}}},242344,(e,t,r)=>{Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"workAsyncStorageInstance",{enumerable:!0,get:function(){return n}});let n=(0,e.r(90317).getOrCreateGlobalAsyncLocalStorage)("work-async-storage")},563599,(e,t,r)=>{Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"workAsyncStorage",{enumerable:!0,get:function(){return n.workAsyncStorageInstance}});let n=e.r(242344)},770703,(e,t,r)=>{Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return o}});let n=e.r(555682)._(e.r(869093));function o(e,t){let r={};"function"==typeof e&&(r.loader=e);let o={...r,...t};return(0,n.default)({...o,modules:o.loadableGenerated?.modules})}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},309885,(e,t,r)=>{function n(e){return e.split("/").map(e=>encodeURIComponent(e)).join("/")}Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"encodeURIPath",{enumerable:!0,get:function(){return n}})},667585,(e,t,r)=>{e.i(247167),Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"BailoutToCSRForNextDynamic",{enumerable:!0,get:function(){return i}}),e.r(271645),e.r(174080);let n=e.r(132061),o=e.r(349354),a="next/dynamic";function i({children:e}){if("u"<typeof window)throw new n.BailoutToCSRError(a);return e}o.createReactBrowserBailoutReason.bind(null,a)},869093,(e,t,r)=>{Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return u}});let n=e.r(843476),o=e.r(271645),a=e.r(667585),i=e.r(652157);function l(e){return{default:e&&"default"in e?e.default:e}}let s={loader:()=>Promise.resolve(l(()=>null)),loading:null,ssr:!0},u=function(e){let t={...s,...e},r=(0,o.lazy)(()=>t.loader().then(l)),u=t.loading;function c(e){let l=u?(0,n.jsx)(u,{isLoading:!0,pastDelay:!0,error:null}):null,s=!t.ssr||!!t.loading,c=s?o.Suspense:o.Fragment,f=t.ssr?(0,n.jsxs)(n.Fragment,{children:["u"<typeof window?(0,n.jsx)(i.PreloadChunks,{moduleIds:t.modules}):null,(0,n.jsx)(r,{...e})]}):(0,n.jsx)(a.BailoutToCSRForNextDynamic,{children:(0,n.jsx)(r,{...e})});return(0,n.jsx)(c,{...s?{fallback:l}:{},children:f})}return c.displayName="LoadableComponent",c}},652157,(e,t,r)=>{Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"PreloadChunks",{enumerable:!0,get:function(){return s}});let n=e.r(843476),o=e.r(174080),a=e.r(563599),i=e.r(309885),l=e.r(543369);function s({moduleIds:e}){if("u">typeof window)return null;let t=a.workAsyncStorage.getStore();if(void 0===t)return null;let r=[];if(t.reactLoadableManifest&&e){let n=t.reactLoadableManifest;for(let t of e){if(!n[t])continue;let e=n[t].files;r.push(...e)}}if(0===r.length)return null;let u=(0,l.getAssetTokenQuery)();return(0,n.jsx)(n.Fragment,{children:r.map(e=>{let r=`${t.assetPrefix}/_next/${(0,i.encodeURIPath)(e)}${u}`;return e.endsWith(".css")?(0,n.jsx)("link",{precedence:"dynamic",href:r,rel:"stylesheet",as:"style",nonce:t.nonce},e):((0,o.preload)(r,{as:"script",fetchPriority:"low",nonce:t.nonce}),null)})})}},349354,(e,t,r)=>{Object.defineProperty(r,"__esModule",{value:!0});var n={createReactBrowserBailoutReason:function(){return i},getReactBrowserBailoutReason:function(){return l},isNextBrowserBailoutError:function(){return s}};for(var o in n)Object.defineProperty(r,o,{enumerable:!0,get:n[o]});let a=Symbol.for("next.browser-bailout-reason");function i(e){return{$$typeof:a,reason:e}}function l(e){let t=e?.cause;return t?.$$typeof===a?t.reason:void 0}function s(e){return void 0!==l(e)}},195057,(e,t,r)=>{e.i(247167),Object.defineProperty(r,"__esModule",{value:!0});var n={formatUrl:function(){return l},formatWithValidation:function(){return u},urlObjectKeys:function(){return s}};for(var o in n)Object.defineProperty(r,o,{enumerable:!0,get:n[o]});let a=e.r(190809)._(e.r(998183)),i=/https?|ftp|gopher|file/;function l(e){let{auth:t,hostname:r}=e,n=e.protocol||"",o=e.pathname||"",l=e.hash||"",s=e.query||"",u=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?u=t+e.host:r&&(u=t+(~r.indexOf(":")?`[${r}]`:r),e.port&&(u+=":"+e.port)),s&&"object"==typeof s&&(s=String(a.urlQueryToSearchParams(s)));let c=e.search||s&&`?${s}`||"";return n&&!n.endsWith(":")&&(n+=":"),e.slashes||(!n||i.test(n))&&!1!==u?(u="//"+(u||""),o&&"/"!==o[0]&&(o="/"+o)):u||(u=""),l&&"#"!==l[0]&&(l="#"+l),c&&"?"!==c[0]&&(c="?"+c),o=o.replace(/[?#]/g,encodeURIComponent),c=c.replace("#","%23"),`${n}${u}${o}${c}${l}`}let s=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function u(e){return l(e)}},573668,(e,t,r)=>{Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"isLocalURL",{enumerable:!0,get:function(){return a}});let n=e.r(718967),o=e.r(652817);function a(e){if(!(0,n.isAbsoluteUrl)(e))return!0;try{let t=(0,n.getLocationOrigin)(),r=new URL(e,t);return r.origin===t&&(0,o.hasBasePath)(r.pathname)}catch(e){return!1}}},718967,(e,t,r)=>{e.i(247167),Object.defineProperty(r,"__esModule",{value:!0});var n={DecodeError:function(){return b},MiddlewareNotFoundError:function(){return w},MissingStaticPage:function(){return v},NormalizeError:function(){return y},PageNotFoundError:function(){return x},SP:function(){return g},ST:function(){return m},WEB_VITALS:function(){return a},execOnce:function(){return i},getDisplayName:function(){return f},getLocationOrigin:function(){return u},getURL:function(){return c},isAbsoluteUrl:function(){return s},isResSent:function(){return d},loadGetInitialProps:function(){return h},normalizeRepeatedSlashes:function(){return p},stringifyError:function(){return $}};for(var o in n)Object.defineProperty(r,o,{enumerable:!0,get:n[o]});let a=["CLS","FCP","INP","LCP","TTFB"];function i(e){let t,r=!1;return(...n)=>(r||(r=!0,t=e(...n)),t)}let l=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,s=e=>{let t=e.charCodeAt(0);return!!(t>=65&&t<=90||t>=97&&t<=122)&&l.test(e)};function u(){let{protocol:e,hostname:t,port:r}=window.location;return`${e}//${t}${r?":"+r:""}`}function c(){let{href:e}=window.location,t=u();return e.substring(t.length)}function f(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function d(e){return e.finished||e.headersSent}function p(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?`?${t.slice(1).join("?")}`:"")}async function h(e,t){let r=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await h(t.Component,t.ctx)}:{};let n=await e.getInitialProps(t);if(r&&d(r))return n;if(!n)throw Error(`"${f(e)}.getInitialProps()" should resolve to an object. But found "${n}" instead.`);return n}let g="u">typeof performance,m=g&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class b extends Error{}class y extends Error{}class x extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message=`Cannot find module for page: ${e}`}}class v extends Error{constructor(e,t){super(),this.message=`Failed to load static file for page: ${e} ${t}`}}class w extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function $(e){return JSON.stringify({message:e.message,stack:e.stack})}}])})();