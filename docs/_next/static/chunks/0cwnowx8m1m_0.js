(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,391313,e=>{"use strict";var t=e.i(843476),a=e.i(271645),i=e.i(197754),s=e.i(538915);e.i(600639);var n=e.i(226129),l=e.i(997053),o=e.i(726029);let r=l.U.div.withConfig({displayName:"Frontpage.styles__Root",componentId:"sc-dcb3d040-0"})`
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
`;e.i(311046);var d=e.i(499881);let u=o.W,h=e=>{let t=e.dataset.pageHeroEdge;return t&&d.q.includes(t)?t:null},p=e=>{let t=h(e);return t?(0,d._)(t):u},f=e=>{let t=h(e);return t?(0,d.s)(t):0};var g=e.i(768227);let m=["data-bg","data-header-bg","data-header-tone","data-header-hex"];var v=e.i(885895),x=e.i(546843);let k=({children:e,className:o,footerEdge:d})=>{let h=(0,x.e)(d),k=(0,a.useRef)(null),b=(e=>{let[t,i]=(0,a.useState)(!0);return(0,a.useEffect)(()=>{let t=e.current,a=t?.querySelector("[data-page-hero]"),s=!!t&&!!a&&a.getBoundingClientRect().top-t.getBoundingClientRect().top<1;if(!t||!a||!s)return void i(!1);if("u"<typeof IntersectionObserver)return;let n=new Map,l=e=>{for(let t of e)n.set(t.target,t.isIntersecting);i([...n.values()].some(Boolean))},o=new Map;for(let e of((e,t)=>{let a=[t];for(let t of e.querySelectorAll("[data-page-hero-follow]")){let e=a[a.length-1].getBoundingClientRect().bottom;2>=Math.abs(t.getBoundingClientRect().top-e)&&a.push(t)}return a})(t,a)){let t=p(e),a=o.get(t)??new IntersectionObserver(l,{rootMargin:`-${t}px 0px 0px 0px`});o.set(t,a),a.observe(e)}return()=>o.forEach(e=>e.disconnect())},[e]),t})(k),{themeMode:j}=(0,v.N)(),{palette:w}=(0,l.i)(),y=((e,t,i,s)=>{let[n,l]=(0,a.useState)(()=>(0,g.y)(i));return(0,a.useEffect)(()=>{let a=e.current;if(!t||!a)return void l((0,g.y)(i));let n=0,o=()=>{n=0,l(((e,t,a)=>{if(!e)return(0,g.y)(t);let i=e.dataset.headerTone;if((0,g.P)(i))return i;let s=e.dataset.headerHex;if((0,g.q)(s))return(0,g.z)(s,a);let n=e.dataset.bg,l=(0,g.H)(n)?n:(0,g.H)(e.dataset.headerBg)?e.dataset.headerBg:null;return(0,g.l)(l??null,t,a)})(((e,t=u/2)=>{let a=null;for(let i of e.querySelectorAll("[data-header-bg], [data-header-tone], [data-header-hex], [data-bg]")){let e=i.getBoundingClientRect();e.top<=t&&e.bottom-f(i)>t&&(a=i)}return a})(a),i,s))},r=()=>{n||(n=requestAnimationFrame(o))};o(),window.addEventListener("scroll",r,{passive:!0}),window.addEventListener("resize",r);let c="u"<typeof MutationObserver?null:new MutationObserver(r);return c?.observe(a,{attributes:!0,attributeFilter:m,subtree:!0,childList:!0}),()=>{cancelAnimationFrame(n),window.removeEventListener("scroll",r),window.removeEventListener("resize",r),c?.disconnect()}},[e,t,i,s]),n})(k,b,j,w);return(0,t.jsxs)(r,{className:o,"data-testid":"frontpage-root","data-over-hero":b?"true":"false",children:[(0,t.jsx)(i.f,{navigation:!1,site:!0,overlay:!0,transparent:b,tone:y}),(0,t.jsx)(n.f,{}),(0,t.jsx)(c,{ref:k,$flushFooter:h.flush,children:e}),(0,t.jsx)(s.f,{edges:h.edges})]})};e.i(816017);var b=e.i(217997);e.i(677231);var j=e.i(302222);e.i(821194);var w=e.i(99222),y=e.i(507924),q=e.i(989969),S=e.i(284248);let C=l.U.div.withConfig({displayName:"StartPageView.styles__StartRoot",componentId:"sc-3d456179-0"})`
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
`;var _=e.i(618566),L=e.i(49958),H=e.i(616789),$=e.i(713347),z=e.i(510466),B=e.i(476999),I=e.i(681630),F=e.i(854101),E=e.i(351754);let R=l.U.div.withConfig({displayName:"SiteLocaleHint.styles__HintBar",componentId:"sc-f04b7de7-0"})`
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
`,A="plastship.siteLocaleHint.dismissed";function U(){let e=(0,_.usePathname)(),{status:i}=(0,L.useSession)(),{locale:s,missing:n}=(0,$.useSiteLocaleContext)(),{tr:l}=(0,w.f)(),o=(0,$.useLanguageCookieAtLoad)(),[r,c]=(0,a.useState)(null);if((0,a.useEffect)(()=>{"unauthenticated"!==i||(()=>{try{return"1"===window.sessionStorage.getItem(A)}catch{return!1}})()?c(null):c((0,I.w)({pathname:e,pathLocale:s,cookieLanguage:o,missingStart:e=>!!n[e]?.has("/")}))},[e,s,n,i,o]),!r)return null;let d=z.Z[(0,F.T)(r.locale)]?.native??r.locale;return(0,t.jsxs)(R,{"data-testid":"site-locale-hint","data-locale":r.locale,role:"note",children:[(0,t.jsx)("span",{children:l("cms.siteLocaleHint.text",{defaultValue:"Diese Seite gibt es auch auf {{language}}.",language:d})}),(0,t.jsx)(N,{href:r.href,hrefLang:r.locale,"data-testid":"site-locale-hint-link",onClick:()=>(0,B.q)(e??"/",I.L,{locale:r.locale}),children:l("cms.siteLocaleHint.link",{defaultValue:"Zur Fassung auf {{language}}",language:d})}),(0,t.jsx)(V,{type:"button","aria-label":l("cms.siteLocaleHint.close",{defaultValue:"Hinweis schließen"}),"data-testid":"site-locale-hint-close",onClick:()=>{try{window.sessionStorage.setItem(A,"1")}catch{}c(null)},children:(0,t.jsx)(H.f,{})})]})}e.s(["default",0,function({page:e,markdown:a,pageHeadingIds:i,preview:s=!1,previewLocale:n=null,source:l,structuredData:o}){let{language:r}=(0,v.N)(),{tr:c}=(0,w.f)(r),d=n??(0,y.g)(r);return(0,t.jsx)(S.R,{preview:n,children:(0,t.jsxs)(k,{footerEdge:(0,q.w)(e.blocks),children:[o&&(0,t.jsx)(b.f,{data:o}),(0,t.jsxs)(C,{"data-testid":"cms-page-root","data-slug":e.slug,"data-status":e.status,"data-preview":s?"true":"false","data-version":e.version?.id??"","data-preview-locale":n??"","data-source":l,"data-template":"frontpage",children:[s&&(0,t.jsx)(P,{"data-testid":"cms-preview-bar",role:"status",children:e.version?c("cms.preview.version",{defaultValue:"Vorschau: Version vom {{date}}",date:(0,y.H)(e.version.createdAt,d)}):c("cms.preview.draft",{defaultValue:"Vorschau: Entwurf, noch nicht veröffentlicht"})}),!s&&!n&&(0,t.jsx)(U,{}),(0,t.jsx)(j.f,{blocks:e.blocks,locale:d,title:(0,y.u)(e.title,d),markdown:a,pageHeadingIds:i})]})]})})}],391313)},207029,e=>{e.v(t=>Promise.all(["static/chunks/2ck35kk6udevc.js","static/chunks/2oq-uevcwhldh.js"].map(t=>e.l(t))).then(()=>t(975804)))},307446,e=>{e.v(t=>Promise.all(["static/chunks/1xwuyg3isd02r.js","static/chunks/1z9k6-mk4t9_g.js","static/chunks/418xdx7k7y4kc.js","static/chunks/22khcvznnl4iy.js","static/chunks/3h4paqtye6-p2.js"].map(t=>e.l(t))).then(()=>t(293601)))},315259,e=>{e.v(t=>Promise.all(["static/chunks/1v4bjzezh82r7.js","static/chunks/3d-tmv_n7alt6.js"].map(t=>e.l(t))).then(()=>t(718943)))},475226,e=>{e.v(t=>Promise.all(["static/chunks/0c3xqgvmotg6a.js"].map(t=>e.l(t))).then(()=>t(535566)))},773694,e=>{e.v(t=>Promise.all(["static/chunks/099_jvgq11ygm.js","static/chunks/0spqvttnlhm8k.js"].map(t=>e.l(t))).then(()=>t(567553)))},794345,e=>{e.v(t=>Promise.all(["static/chunks/0llqoclfynolx.js","static/chunks/0sozq8540ka5k.js"].map(t=>e.l(t))).then(()=>t(167495)))},485551,e=>{e.v(t=>Promise.all(["static/chunks/33ftjibo9gx1d.js","static/chunks/0v3cua2bpd-1u.js","static/chunks/2ngbqcoodi9v6.js"].map(t=>e.l(t))).then(()=>t(396374)))},81262,e=>{e.v(t=>Promise.all(["static/chunks/2wvrfmmuojuk6.js"].map(t=>e.l(t))).then(()=>t(121574)))},675425,e=>{e.v(t=>Promise.all(["static/chunks/10_ttk4g65vqg.js"].map(t=>e.l(t))).then(()=>t(452967)))},749344,e=>{e.v(t=>Promise.all(["static/chunks/2-n0tr0961tjz.js"].map(t=>e.l(t))).then(()=>t(347218)))},465624,e=>{e.v(t=>Promise.all(["static/chunks/2k72f-u2z0wbr.js"].map(t=>e.l(t))).then(()=>t(367999)))},460385,e=>{e.v(t=>Promise.all(["static/chunks/1-h4x15wuzj1l.js","static/chunks/2v3x4ctnlme_f.js","static/chunks/26u1lm69p4hbs.js","static/chunks/3h4paqtye6-p2.js","static/chunks/3obqb41wyv4ax.js","static/chunks/2oq-uevcwhldh.js"].map(t=>e.l(t))).then(()=>t(851724)))},767483,e=>{e.v(t=>Promise.all(["static/chunks/3ykrubod6w8ii.js","static/chunks/2aczwenenywb8.js","static/chunks/2-uxo2bcn21qb.js","static/chunks/17ii97gpladp2.js","static/chunks/3h4paqtye6-p2.js","static/chunks/3obqb41wyv4ax.js"].map(t=>e.l(t))).then(()=>t(806880)))}]);