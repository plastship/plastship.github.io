(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,391313,e=>{"use strict";var t=e.i(843476),s=e.i(271645),a=e.i(197754),i=e.i(538915);e.i(600639);var n=e.i(226129),l=e.i(997053),o=e.i(726029);let r=l.U.div.withConfig({displayName:"Frontpage.styles__Root",componentId:"sc-dcb3d040-0"})`
  --page-header-offset: 0px;
  ${o.u}
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-x: hidden;
`,c=l.U.main.withConfig({displayName:"Frontpage.styles__Main",componentId:"sc-dcb3d040-1"})`
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-y: auto;
  /* Abstand vor dem Footer — entfällt, wenn die Seite mit einer Fläche endet
     und der Fuß direkt in sie übergeht (Befund 29.10., #2192) */
  padding-bottom: ${({$flushFooter:e})=>e?"0":"40px"};

  > *:not(:last-child) {
    margin-bottom: 40px;
  }
`;e.i(311046);var d=e.i(499881);let u=o.W,h=e=>{let t=e.dataset.pageHeroEdge;return t&&d.q.includes(t)?t:null},p=e=>{let t=h(e);return t?(0,d._)(t):u},f=e=>{let t=h(e);return t?(0,d.s)(t):0};var g=e.i(768227);let m=["data-bg","data-header-bg","data-header-tone","data-header-hex"];var v=e.i(885895),k=e.i(546843);let x=({children:e,className:o,footerEdge:d})=>{let h=(0,k.e)(d),x=(0,s.useRef)(null),j=(e=>{let[t,a]=(0,s.useState)(!0);return(0,s.useEffect)(()=>{let t=e.current,s=t?.querySelector("[data-page-hero]"),i=!!t&&!!s&&s.getBoundingClientRect().top-t.getBoundingClientRect().top<1;if(!t||!s||!i)return void a(!1);if("u"<typeof IntersectionObserver)return;let n=new Map,l=e=>{for(let t of e)n.set(t.target,t.isIntersecting);a([...n.values()].some(Boolean))},o=new Map;for(let e of((e,t)=>{let s=[t];for(let t of e.querySelectorAll("[data-page-hero-follow]")){let e=s[s.length-1].getBoundingClientRect().bottom;2>=Math.abs(t.getBoundingClientRect().top-e)&&s.push(t)}return s})(t,s)){let t=p(e),s=o.get(t)??new IntersectionObserver(l,{rootMargin:`-${t}px 0px 0px 0px`});o.set(t,s),s.observe(e)}return()=>o.forEach(e=>e.disconnect())},[e]),t})(x),{themeMode:b}=(0,v.N)(),{palette:y}=(0,l.i)(),w=((e,t,a,i)=>{let[n,l]=(0,s.useState)(()=>(0,g.y)(a));return(0,s.useEffect)(()=>{let s=e.current;if(!t||!s)return void l((0,g.y)(a));let n=0,o=()=>{n=0,l(((e,t,s)=>{if(!e)return(0,g.y)(t);let a=e.dataset.headerTone;if((0,g.P)(a))return a;let i=e.dataset.headerHex;if((0,g.q)(i))return(0,g.z)(i,s);let n=e.dataset.bg,l=(0,g.H)(n)?n:(0,g.H)(e.dataset.headerBg)?e.dataset.headerBg:null;return(0,g.l)(l??null,t,s)})(((e,t=u/2)=>{let s=null;for(let a of e.querySelectorAll("[data-header-bg], [data-header-tone], [data-header-hex], [data-bg]")){let e=a.getBoundingClientRect();e.top<=t&&e.bottom-f(a)>t&&(s=a)}return s})(s),a,i))},r=()=>{n||(n=requestAnimationFrame(o))};o(),window.addEventListener("scroll",r,{passive:!0}),window.addEventListener("resize",r);let c="u"<typeof MutationObserver?null:new MutationObserver(r);return c?.observe(s,{attributes:!0,attributeFilter:m,subtree:!0,childList:!0}),()=>{cancelAnimationFrame(n),window.removeEventListener("scroll",r),window.removeEventListener("resize",r),c?.disconnect()}},[e,t,a,i]),n})(x,j,b,y);return(0,t.jsxs)(r,{className:o,"data-testid":"frontpage-root","data-over-hero":j?"true":"false",children:[(0,t.jsx)(a.f,{navigation:!1,site:!0,overlay:!0,transparent:j,tone:w}),(0,t.jsx)(n.f,{}),(0,t.jsx)(c,{ref:x,$flushFooter:h.flush,children:e}),(0,t.jsx)(i.f,{edges:h.edges})]})};e.i(816017);var j=e.i(217997);e.i(677231);var b=e.i(655953);e.i(821194);var y=e.i(99222),w=e.i(507924),q=e.i(618322),_=e.i(284248);let S=l.U.div.withConfig({displayName:"StartPageView.styles__StartRoot",componentId:"sc-3d456179-0"})`
  display: contents;
`,P=l.U.div.withConfig({displayName:"StartPageView.styles__StartPreviewBar",componentId:"sc-3d456179-1"})`
  position: fixed;
  top: 56px;
  left: 0;
  right: 0;
  z-index: 150;
  padding: 8px 16px;
  text-align: center;
  font-family: ${({theme:e})=>e.font.secondaryFamily};
  font-size: 14px;
  font-weight: 600;
  color: ${({theme:e})=>e.palette.default.primary};
  background: ${({theme:e})=>e.palette.default.warning};
`;var C=e.i(618566),L=e.i(49958),H=e.i(616789),$=e.i(713347),z=e.i(510466),B=e.i(476999),I=e.i(681630),F=e.i(854101),E=e.i(351754);let R=l.U.div.withConfig({displayName:"SiteLocaleHint.styles__HintBar",componentId:"sc-f04b7de7-0"})`
  position: fixed;
  top: ${o.W}px;
  left: 0;
  right: 0;
  z-index: ${E.f.sticky};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({theme:e})=>e.margin.small};
  padding: ${({theme:e})=>e.padding.extrasmall} ${({theme:e})=>e.padding.small};
  font-family: ${({theme:e})=>e.font.secondaryFamily};
  font-size: 14px;
  color: ${({theme:e})=>e.palette.status.info.text};
  background: ${({theme:e})=>e.palette.status.info.bg};
  border-bottom: 1px solid ${({theme:e})=>e.palette.status.info.border};
`,N=l.U.a.withConfig({displayName:"SiteLocaleHint.styles__HintLink",componentId:"sc-f04b7de7-1"})`
  font-weight: 600;
  color: inherit;
  text-decoration: underline;

  &:focus-visible {
    outline: 2px solid currentColor;
    outline-offset: 2px;
  }
`,V=l.U.button.withConfig({displayName:"SiteLocaleHint.styles__HintClose",componentId:"sc-f04b7de7-2"})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  padding: 0;
  border: none;
  border-radius: 50%;
  background: transparent;
  color: inherit;
  cursor: pointer;

  svg {
    width: 14px;
    height: 14px;
  }

  &:hover,
  &:focus-visible {
    background: ${({theme:e})=>e.palette.surface.muted};
  }
`,A="plastship.siteLocaleHint.dismissed";function U(){let e=(0,C.usePathname)(),{status:a}=(0,L.useSession)(),{locale:i,missing:n}=(0,$.useSiteLocaleContext)(),{tr:l}=(0,y.f)(),o=(0,$.useLanguageCookieAtLoad)(),[r,c]=(0,s.useState)(null);if((0,s.useEffect)(()=>{"unauthenticated"!==a||(()=>{try{return"1"===window.sessionStorage.getItem(A)}catch{return!1}})()?c(null):c((0,I.w)({pathname:e,pathLocale:i,cookieLanguage:o,missingStart:e=>!!n[e]?.has("/")}))},[e,i,n,a,o]),!r)return null;let d=z.Z[(0,F.T)(r.locale)]?.native??r.locale;return(0,t.jsxs)(R,{"data-testid":"site-locale-hint","data-locale":r.locale,role:"note",children:[(0,t.jsx)("span",{children:l("cms.siteLocaleHint.text",{defaultValue:"Diese Seite gibt es auch auf {{language}}.",language:d})}),(0,t.jsx)(N,{href:r.href,hrefLang:r.locale,"data-testid":"site-locale-hint-link",onClick:()=>(0,B.q)(e??"/",I.L,{locale:r.locale}),children:l("cms.siteLocaleHint.link",{defaultValue:"Zur Fassung auf {{language}}",language:d})}),(0,t.jsx)(V,{type:"button","aria-label":l("cms.siteLocaleHint.close",{defaultValue:"Hinweis schließen"}),"data-testid":"site-locale-hint-close",onClick:()=>{try{window.sessionStorage.setItem(A,"1")}catch{}c(null)},children:(0,t.jsx)(H.f,{})})]})}e.s(["default",0,function({page:e,markdown:s,pageHeadingIds:a,preview:i=!1,previewLocale:n=null,source:l,structuredData:o,polymerLinks:r}){let{language:c}=(0,v.N)(),{tr:d}=(0,y.f)(c),u=n??(0,w.g)(c);return(0,t.jsx)(_.R,{preview:n,children:(0,t.jsxs)(x,{footerEdge:(0,q.S)(e.blocks),children:[o&&(0,t.jsx)(j.f,{data:o}),(0,t.jsxs)(S,{"data-testid":"cms-page-root","data-slug":e.slug,"data-status":e.status,"data-preview":i?"true":"false","data-version":e.version?.id??"","data-preview-locale":n??"","data-source":l,"data-template":"frontpage",children:[i&&(0,t.jsx)(P,{"data-testid":"cms-preview-bar",role:"status",children:e.version?d("cms.preview.version",{defaultValue:"Vorschau: Version vom {{date}}",date:(0,w.H)(e.version.createdAt,u)}):d("cms.preview.draft",{defaultValue:"Vorschau: Entwurf, noch nicht veröffentlicht"})}),!i&&!n&&(0,t.jsx)(U,{}),(0,t.jsx)(b.f,{blocks:e.blocks,locale:u,title:(0,w.u)(e.title,u),markdown:s,pageHeadingIds:a,polymerLinks:r})]})]})})}],391313)},207029,e=>{e.v(t=>Promise.all(["static/chunks/0id_vilfg64vk.js","static/chunks/2oq-uevcwhldh.js"].map(t=>e.l(t))).then(()=>t(975804)))},307446,e=>{e.v(t=>Promise.all(["static/chunks/1xwuyg3isd02r.js","static/chunks/1z9k6-mk4t9_g.js","static/chunks/418xdx7k7y4kc.js","static/chunks/22khcvznnl4iy.js","static/chunks/3h4paqtye6-p2.js"].map(t=>e.l(t))).then(()=>t(293601)))},315259,e=>{e.v(t=>Promise.all(["static/chunks/1v4bjzezh82r7.js","static/chunks/1-akk03mfjq2w.js"].map(t=>e.l(t))).then(()=>t(718943)))},956423,e=>{e.v(t=>Promise.all(["static/chunks/2dxoykdykye89.js","static/chunks/1z9k6-mk4t9_g.js","static/chunks/2uft5w7myapva.js","static/chunks/418xdx7k7y4kc.js","static/chunks/3h4paqtye6-p2.js","static/chunks/22khcvznnl4iy.js"].map(t=>e.l(t))).then(()=>t(666916)))},475226,e=>{e.v(t=>Promise.all(["static/chunks/0c3xqgvmotg6a.js"].map(t=>e.l(t))).then(()=>t(535566)))},773694,e=>{e.v(t=>Promise.all(["static/chunks/099_jvgq11ygm.js","static/chunks/20exj8n791s_5.js"].map(t=>e.l(t))).then(()=>t(567553)))},794345,e=>{e.v(t=>Promise.all(["static/chunks/0llqoclfynolx.js","static/chunks/2pcojr9for_ob.js"].map(t=>e.l(t))).then(()=>t(167495)))},485551,e=>{e.v(t=>Promise.all(["static/chunks/33ftjibo9gx1d.js","static/chunks/45758jpfqw7gs.js","static/chunks/2ngbqcoodi9v6.js"].map(t=>e.l(t))).then(()=>t(396374)))},81262,e=>{e.v(t=>Promise.all(["static/chunks/1kzor3j9r-s5v.js"].map(t=>e.l(t))).then(()=>t(121574)))},675425,e=>{e.v(t=>Promise.all(["static/chunks/3xemmolwdeek3.js"].map(t=>e.l(t))).then(()=>t(452967)))},749344,e=>{e.v(t=>Promise.all(["static/chunks/2-n0tr0961tjz.js"].map(t=>e.l(t))).then(()=>t(347218)))},465624,e=>{e.v(t=>Promise.all(["static/chunks/3-5jqpseewv-t.js"].map(t=>e.l(t))).then(()=>t(367999)))},460385,e=>{e.v(t=>Promise.all(["static/chunks/2ty5t5gn_xsof.js","static/chunks/2v3x4ctnlme_f.js","static/chunks/26u1lm69p4hbs.js","static/chunks/3h4paqtye6-p2.js","static/chunks/3obqb41wyv4ax.js","static/chunks/2oq-uevcwhldh.js"].map(t=>e.l(t))).then(()=>t(851724)))},767483,e=>{e.v(t=>Promise.all(["static/chunks/3ykrubod6w8ii.js","static/chunks/0nbfwvngp7p5k.js","static/chunks/2-uxo2bcn21qb.js","static/chunks/1w92blmhcw0-f.js","static/chunks/3h4paqtye6-p2.js","static/chunks/3obqb41wyv4ax.js"].map(t=>e.l(t))).then(()=>t(806880)))}]);