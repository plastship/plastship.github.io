(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,929842,619249,e=>{e.s(["K",()=>d,"D",()=>s],929842),e.s(["W",()=>l,"B",()=>o],619249);var t,i=e.i(843476),a=e.i(997053);let n=a.m`
  word-wrap: break-word;
  width: 100%;
  margin-bottom: ${({theme:e})=>e.margin.default};
  font-family: ${({theme:e})=>e.font.primaryFamily};
  text-transform: uppercase;
  word-wrap: break-word;
`,o=(e,t="desktop")=>a.m`
  ${({theme:i})=>{let n=i.font.headline[(e=>{switch(e){case s.h1:return"one";case s.h2:return"two";case s.h3:return"three";case s.h4:return"four";case s.h5:return"five";default:return"one"}})(e)][t];return a.m`
      font-size: ${n.fontSize};
      line-height: ${n.lineHeight};
      font-weight: ${n.fontWeight};
      letter-spacing: ${n.letterSpacing};
    `}}
`,r=a.m`
  ${n}
  ${({$styleLevel:e})=>o(e,"mobile")}

  @media screen and (min-width: ${({theme:e})=>e.device.mobile}) {
    ${({$styleLevel:e})=>o(e,"desktop")}
  }
`,l=a.U.h1.withConfig({displayName:"Headline.styles__StyledHeadline",componentId:"sc-aba532a1-0"})`
  ${r}
`;var s=((t={})[t.h1=1]="h1",t[t.h2=2]="h2",t[t.h3=3]="h3",t[t.h4=4]="h4",t[t.h5=5]="h5",t);let d=e=>{let{children:t,className:a,importance:n,renderAs:o,dataTestId:r}=e;return(0,i.jsx)(l,{as:(e=>{switch(e){case 1:default:return"h1";case 2:return"h2";case 3:return"h3";case 4:return"h4";case 5:return"h5"}})(n),$styleLevel:o||n,className:a,"data-testid":r||"Headline-root",children:t})}},593736,e=>{var t=e.i(843476),i=e.i(997053);let a=i.U.svg.withConfig({displayName:"IconPlay.styles__Root",componentId:"sc-2afb8061-0"})``;e.s(["f",0,e=>{let i=e.color??"currentColor";return(0,t.jsxs)(a,{className:e.className,"data-testid":"icon-play-root",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:[(0,t.jsx)("title",{children:"media-play"}),(0,t.jsx)("g",{fill:i,children:(0,t.jsx)("path",{d:"M6 4V20L20 12L6 4Z",stroke:i,strokeWidth:"2",strokeLinecap:"square",fill:"none"})})]})}],593736)},604892,e=>{var t=e.i(843476),i=e.i(997053);let a=i.U.svg.withConfig({displayName:"IconStop.styles__Root",componentId:"sc-a874f867-0"})``;e.s(["f",0,e=>{let i=e.color??"currentColor";return(0,t.jsxs)(a,{className:e.className,"data-testid":"icon-stop-root",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:[(0,t.jsx)("title",{children:"media-stop"}),(0,t.jsx)("g",{fill:i,children:(0,t.jsx)("path",{d:"M20 4H4V20H20V4Z",stroke:i,strokeWidth:"2",strokeLinecap:"square",fill:"none"})})]})}],604892)},960291,305926,201357,e=>{var t,i=e.i(843476),a=e.i(918789),n=e.i(997053),o=((t={}).block="block",t.inline="inline",t);let r=n.m`
  /* Minimal spacing overrides — all visual styling comes from Atom components */
  & > *:last-child {
    margin-bottom: 0;
  }

  strong {
    font-weight: 600;
  }

  em {
    font-style: italic;
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: 4px;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin: 0 0 8px 0;

    th,
    td {
      border: 1px solid ${e=>e.theme.palette.default.grey};
      padding: 6px 10px;
      text-align: left;
      font-size: 13px;
    }

    th {
      background-color: ${e=>e.theme.palette.default.greyLight};
      font-weight: 600;
    }
  }

  /* #1330: Aufgabenlisten aus remark-gfm — das Kästchen ersetzt den Aufzählungspunkt */
  .contains-task-list {
    list-style-type: none;
    padding-left: 0;
  }

  .task-list-item input[type='checkbox'] {
    margin: 0 8px 0 0;
    vertical-align: middle;
  }
`,l=n.m`
  display: inline;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  /* Strip all block-level rendering to inline */
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  blockquote,
  pre,
  ul,
  ol,
  li,
  hr,
  table {
    display: inline;
    margin: 0;
    padding: 0;
    border: none;
    background: none;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    text-transform: none;
  }

  strong {
    font-weight: 600;
  }

  em {
    font-style: italic;
  }

  /* Hide images in inline mode */
  img {
    display: none;
  }
`,s=n.U.div.withConfig({displayName:"MarkdownRenderer.styles__TableScroll",componentId:"sc-e731612a-0"})`
  max-width: 100%;
  overflow-x: auto;
  margin: 0 0 8px 0;

  table {
    margin: 0;
  }
`,d=n.U.img.withConfig({displayName:"MarkdownRenderer.styles__MarkdownImage",componentId:"sc-e731612a-1"})`
  max-width: 100%;
  height: auto;
`,c=n.U.div.withConfig({displayName:"MarkdownRenderer.styles__Root",componentId:"sc-e731612a-2"})`
  font-family: ${e=>e.theme.font.secondaryFamily};
  font-size: 14px;
  color: ${e=>e.theme.palette.default.black};
  -webkit-font-smoothing: antialiased;
  word-wrap: break-word;

  ${e=>"block"===e.$mode?r:l}
`;e.s(["n",0,d,"b",()=>o,"F",0,c,"a",0,s],305926);var p=e.i(929842),u=e.i(703089);let f=n.U.ol.withConfig({displayName:"OrderedList.styles__Root",componentId:"sc-d33153d1-0"})`
  margin-bottom: ${e=>e.theme.margin.default};
  max-width: 40rem;
  list-style-type: none;
  li::before {
    content: counter(list-item-counter) '. ';
  }
`,h=e=>{let{children:t}=e;return(0,i.jsx)(f,{className:e.className,"data-testid":"ordered-list-root",children:t})};var m=e.i(271645);let g=n.U.ul.withConfig({displayName:"UnorderedList.styles__Root",componentId:"sc-54b80dbe-0"})`
  margin-bottom: ${e=>e.theme.margin.default};
  max-width: 40rem;
  list-style-type: ${e=>e.$icon?"none":"disc"};
  padding-left: ${e=>e.$icon?"0":"1.5em"};
`,x=e=>{let{children:t,icon:a,dataTestId:n}=e,o=a?m.default.Children.map(t,e=>m.default.isValidElement(e)?m.default.cloneElement(e,{icon:a}):e):t;return(0,i.jsx)(g,{className:e.className,$icon:a?"true":void 0,"data-testid":n||"unordered-list-root",children:o})};var y=e.i(852590),b=e.i(559173);let w=n.U.li.withConfig({displayName:"ListItem.styles__Root",componentId:"sc-c8445b7d-0"})`
  margin-bottom: ${e=>e.theme.margin.small};
  position: relative;
  padding-left: ${e=>"true"===e.hasicon?"28px":"0"};
  ${(0,b.$)(u.g.body)}
  text-decoration: none;
  counter-increment: list-item-counter;
  text-align: left;
  p {
    margin: 0;
  }
`,k=n.U.div.withConfig({displayName:"ListItem.styles__Icon",componentId:"sc-c8445b7d-1"})`
  position: absolute;
  left: 2px;
  top: 0;
`;(0,n.U)(y.f).withConfig({displayName:"ListItem.styles__StyledText",componentId:"sc-c8445b7d-2"})`
  margin: 0;
`;let $=e=>{let{children:t,icon:a,dataTestId:n}=e,o=void 0!==e.icon&&null!==e.icon;return(0,i.jsxs)(w,{className:e.className,"data-testid":n??"list-item-root",hasicon:o.toString(),children:[o&&(0,i.jsx)(k,{children:a}),t]})},j=n.U.blockquote.withConfig({displayName:"Blockqoute.styles__Root",componentId:"sc-c7e2eb3-0"})`
  font-family: ${e=>e.theme.font.primaryFamily};
  font-size: ${e=>e.theme.font.text.body.mobile.fontSize};
  line-height: ${e=>e.theme.font.text.body.mobile.lineHeight};
  font-weight: 300;
  letter-spacing: ${e=>e.theme.font.text.body.mobile.letterSpacing};
  color: ${e=>e.theme.palette.default.black};
  -webkit-font-smoothing: antialiased;
  word-wrap: break-word;
  margin-bottom: ${e=>e.theme.margin.default};
  a {
    text-decoration: underline;
    &:link {
      color: ${e=>e.theme.palette.default.black};
    }
    &:active {
      color: ${e=>e.theme.palette.default.black};
    }
    &:visited {
      color: ${e=>e.theme.palette.default.black};
    }
  }
  b,
  strong {
    font-weight: 700;
  }
  @media screen and (min-width: ${e=>e.theme.device.mobile}) {
    font-size: ${e=>e.theme.font.text.body.desktop.fontSize};
    line-height: ${e=>e.theme.font.text.body.desktop.lineHeight};
    letter-spacing: ${e=>e.theme.font.text.body.desktop.letterSpacing};
  }
  border-left: 0.1875rem solid ${e=>e.theme.palette.default.primary};
  padding: ${e=>e.theme.padding.small};
`,v=e=>{let{children:t,className:a}=e;return(0,i.jsx)(j,{className:a,"data-testid":"blockqoute-root",children:t})},N=n.U.hr.withConfig({displayName:"HorizontalRule.styles__Root",componentId:"sc-27e0583-0"})`
  display: flex;
  width: 100%;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 0.0625rem solid ${e=>e.theme.palette.default.white};
  height: 0.0625rem;
  opacity: 0.3;
  background: none;
  padding: 0;
  margin: ${e=>e.theme.margin.large} 0 ${e=>e.theme.margin.large} 0;
`,C=e=>(0,i.jsx)(N,{className:e.className,"data-testid":"horizontal-rule-root"}),_=n.U.a.withConfig({displayName:"InlineLink.styles__Root",componentId:"sc-68a2fdb5-0"})`
  color: ${e=>e.theme.palette.link.primary};
  text-decoration: none;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
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
`;var I=e.i(437992);let R=e=>{let{children:t,href:a,target:n,rel:o,dataTestId:r,className:l}=e,s=(0,I.a)(a,{target:n,rel:o});return(0,i.jsx)(_,{href:a,...s,className:l,"data-testid":r||"inline-link-root",children:t})},U="'SF Mono', 'Monaco', 'Menlo', 'Consolas', monospace",T=n.U.code.withConfig({displayName:"CodeBlock.styles__InlineCode",componentId:"sc-82b3b1ee-0"})`
  font-family: ${U};
  font-size: 0.875em;
  /* aus dem Theme — fest #f1f3f5/#d63384 war im Dunkelmodus ein heller Fleck im dunklen Text */
  background-color: ${e=>e.theme.palette.code.background};
  color: ${e=>e.theme.palette.code.text};
  padding: 1px 6px;
  border-radius: 3px;
  word-break: break-word;
`,z=n.U.pre.withConfig({displayName:"CodeBlock.styles__Pre",componentId:"sc-82b3b1ee-1"})`
  margin: 0 0 ${e=>e.theme.margin.default} 0;
  padding: 12px 16px;
  /* #1886: aus dem Theme — fest #f8f9fa war im Dunkelmodus hell unter hellem Text */
  background-color: ${e=>e.theme.palette.surface.subtle};
  border-radius: 6px;
  overflow-x: auto;
  -webkit-font-smoothing: antialiased;
`,S=n.U.code.withConfig({displayName:"CodeBlock.styles__BlockCode",componentId:"sc-82b3b1ee-2"})`
  font-family: ${U};
  font-size: 13px;
  line-height: 1.6;
  color: ${e=>e.theme.palette.default.black};
  background-color: transparent;
  padding: 0;
`,L=e=>{let{children:t,inline:a=!1,dataTestId:n,className:o}=e;return a?(0,i.jsx)(T,{className:o,"data-testid":n||"code-inline-root",children:t}):(0,i.jsx)(z,{className:o,"data-testid":n||"code-block-root",children:(0,i.jsx)(S,{children:t})})};e.s(["f",0,L],201357);var H=e.i(193233);let M=e=>function({src:t,alt:a}){let n="string"==typeof t?t:void 0,o=n&&e?e(n):{src:n};return(0,i.jsx)(d,{src:o.src,width:o.width,height:o.height,alt:a??"",loading:"lazy","data-testid":"markdown-image","data-sized":o.width&&o.height?"true":"false"})},V={h1:({children:e})=>(0,i.jsx)(p.K,{importance:p.D.h1,children:e}),h2:({children:e})=>(0,i.jsx)(p.K,{importance:p.D.h2,children:e}),h3:({children:e})=>(0,i.jsx)(p.K,{importance:p.D.h3,children:e}),h4:({children:e})=>(0,i.jsx)(p.K,{importance:p.D.h4,children:e}),h5:({children:e})=>(0,i.jsx)(p.K,{importance:p.D.h5,children:e}),p:({children:e})=>(0,i.jsx)(u.p,{variant:u.g.body,children:e}),ul:({children:e,className:t})=>(0,i.jsx)(x,{className:t,children:e}),ol:({children:e})=>(0,i.jsx)(h,{children:e}),li:({children:e,className:t})=>(0,i.jsx)($,{className:t,children:e}),blockquote:({children:e})=>(0,i.jsx)(v,{children:e}),hr:()=>(0,i.jsx)(C,{}),a:({href:e,children:t})=>(0,i.jsx)(R,{href:e||"#",target:"_blank",children:t}),table:({children:e})=>(0,i.jsx)(s,{"data-testid":"markdown-table",children:(0,i.jsx)("table",{children:e})}),img:M(),code:({children:e,className:t})=>(0,i.jsx)(L,{inline:!t,children:e}),pre:({children:e})=>(0,i.jsx)(i.Fragment,{children:e})},F=new WeakMap,P=new WeakMap,E={},A={h1:({children:e})=>(0,i.jsx)("span",{children:e}),h2:({children:e})=>(0,i.jsx)("span",{children:e}),h3:({children:e})=>(0,i.jsx)("span",{children:e}),h4:({children:e})=>(0,i.jsx)("span",{children:e}),h5:({children:e})=>(0,i.jsx)("span",{children:e}),p:({children:e})=>(0,i.jsx)("span",{children:e}),ul:({children:e})=>(0,i.jsx)("span",{children:e}),ol:({children:e})=>(0,i.jsx)("span",{children:e}),li:({children:e})=>(0,i.jsxs)("span",{children:[e," "]}),blockquote:({children:e})=>(0,i.jsx)("span",{children:e}),hr:()=>(0,i.jsx)("span",{children:" — "}),a:({href:e,children:t})=>(0,i.jsx)(R,{href:e||"#",children:t}),code:({children:e})=>(0,i.jsx)(L,{inline:!0,children:e}),pre:({children:e})=>(0,i.jsx)("span",{children:e})},W=[H.f],B=({content:e,mode:t=o.block,dataTestId:n="markdown-renderer-root",className:r,remarkPlugins:l,resolveImage:s,renderCodeBlock:d})=>{if(!e)return(0,i.jsx)(c,{$mode:t,"data-testid":n,className:r});let p=t===o.block?function(e,t){let a=V;if(e){let t=F.get(e);t||(t={...V,img:M(e)},F.set(e,t)),a=t}if(!t)return a;let n=e??E,o=P.get(n);o||(o=new WeakMap,P.set(n,o));let r=o.get(t);!r&&(r={...a,code:function({children:e,className:a}){let n=a?/(?:^|\s)language-([\w-]+)/.exec(a)?.[1]:void 0;if(n){let a=t(n,String(e??""));if(null!=a)return(0,i.jsx)(i.Fragment,{children:a})}return(0,i.jsx)(L,{inline:!a,children:e})}},o.set(t,r));return r}(s,d):A;return(0,i.jsx)(c,{$mode:t,"data-testid":n,className:r,children:(0,i.jsx)(a.f,{components:p,remarkPlugins:l,rehypePlugins:W,children:e})})};e.s(["B",0,B,"U",0,B],960291)},852590,e=>{let t=e.i(703089).p;e.s(["f",0,t])},949375,768394,371743,e=>{var t=e.i(843476),i=e.i(997053);let a=i.U.div.withConfig({displayName:"NotificationItem.styles__Root",componentId:"sc-9f7f86ba-0"})`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 12px 16px;
  cursor: pointer;
  /* #392: ungelesen = Theme-Fläche statt festem Hellblau (im Dark Mode weiß auf weiß) */
  background-color: ${e=>e.$isRead?"transparent":e.theme.palette.surface.subtle};
  border-bottom: 1px solid ${({theme:e})=>e.palette.border.default};
  transition: background-color 0.15s ease;

  &:hover {
    background-color: ${e=>e.$isRead?e.theme.palette.surface.subtle:e.theme.palette.surface.muted};
  }

  &:last-child {
    border-bottom: none;
  }
`,n=i.U.div.withConfig({displayName:"NotificationItem.styles__UnreadDot",componentId:"sc-9f7f86ba-1"})`
  flex-shrink: 0;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${({theme:e})=>e.palette.default.primary};
  margin-top: 6px;
`,o=i.U.div.withConfig({displayName:"NotificationItem.styles__ContentWrapper",componentId:"sc-9f7f86ba-2"})`
  flex: 1;
  min-width: 0;
`,r=i.U.div.withConfig({displayName:"NotificationItem.styles__Title",componentId:"sc-9f7f86ba-3"})`
  font-family: ${e=>e.theme.font.secondaryFamily};
  font-size: 14px;
  line-height: 20px;
  font-weight: ${e=>e.$isRead?"normal":"bold"};
  color: ${({theme:e})=>e.palette.text.primary};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,l=i.U.div.withConfig({displayName:"NotificationItem.styles__MessageWrapper",componentId:"sc-9f7f86ba-4"})`
  font-size: 12px;
  line-height: 18px;
  color: ${({theme:e})=>e.palette.text.secondary};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-top: 2px;
`,s=i.U.div.withConfig({displayName:"NotificationItem.styles__TimeStamp",componentId:"sc-9f7f86ba-5"})`
  font-family: ${e=>e.theme.font.secondaryFamily};
  font-size: 11px;
  line-height: 16px;
  color: ${({theme:e})=>e.palette.text.muted};
  margin-top: 4px;
`;e.i(821194);var d=e.i(99222),c=e.i(555508),p=e.i(137927),u=e.i(912381),f=e.i(960291),h=e.i(305926);e.s(["f",0,({notification:e,onClick:i,dataTestId:m="notification-item-root",className:g})=>{let x=function(e){let{tr:t}=(0,d.f)(),i=(0,c.f)(),a=new Date,n=new Date(e),o=Math.floor((a.getTime()-n.getTime())/1e3),r=Math.floor(o/60),l=Math.floor(r/60),s=Math.floor(l/24);return o<60?t("notifications.time.justNow"):r<60?t("notifications.time.minutesAgo",{count:r}):l<24?t("notifications.time.hoursAgo",{count:l}):s<7?t("notifications.time.daysAgo",{count:s}):i.dateWith(n,{})}(e.createdAt),{title:y,message:b}=function(e){let{tr:t,i18n:i}=(0,d.f)();return(0,p.P)(e,t,i?.language??"de",e=>(0,u.m)(t,e))}(e);return(0,t.jsxs)(a,{className:g,"data-testid":m,$isRead:e.isRead,onClick:()=>{i(e)},children:[!e.isRead&&(0,t.jsx)(n,{"data-testid":"notification-unread-dot"}),(0,t.jsxs)(o,{children:[(0,t.jsx)(r,{$isRead:e.isRead,"data-testid":"notification-title",children:y}),b&&(0,t.jsx)(l,{children:(0,t.jsx)(f.B,{content:b,mode:h.b.inline,dataTestId:"notification-message"})}),(0,t.jsx)(s,{"data-testid":"notification-timestamp",children:x})]})]})}],768394),e.s([],949375);let m=/[\u0000-\u001F\u007F\\]/,g="https://app.invalid";e.s(["f",0,function(e){let t,i;if("string"!=typeof e)return null;let a=e.trim();if(!a.startsWith("/")||a.startsWith("//")||m.test(a))return null;try{t=decodeURIComponent(a)}catch{return null}if(t.startsWith("//")||m.test(t))return null;try{i=new URL(a,g)}catch{return null}return i.origin!==g||i.pathname.startsWith("//")?null:i.pathname+i.search+i.hash}],371743)},851724,e=>{let t;var i=e.i(843476),a=e.i(770703),n=e.i(271645),o=e.i(618566),r=e.i(325164),l=e.i(475352),s=e.i(49958),d=e.i(501496);e.i(821194);var c=e.i(99222),p=e.i(885895),u=e.i(157067),f=e.i(786743),h=e.i(858145),m=e.i(138837),g=e.i(805885),x=e.i(535004);e.i(535016);var y=e.i(866757),b=e.i(635228),w=e.i(646684),k=e.i(317573),$=e.i(635769),j=e.i(26819),v=e.i(727827),N=e.i(552830),C=e.i(692504),_=e.i(497734),I=e.i(997053);let R=I.U.span.withConfig({displayName:"Badge.styles__Root",componentId:"sc-88b77c61-0"})`
  position: absolute;
  top: -4px;
  right: -4px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 18px;
  height: 18px;
  padding: 0 ${e=>e.$isLarge?"5px":"0"};
  border-radius: 9px;
  background-color: ${({theme:e})=>e.palette.default.error};
  color: ${({theme:e})=>e.palette.default.white};
  font-family: ${e=>e.theme.font.secondaryFamily};
  font-size: 11px;
  font-weight: bold;
  line-height: 1;
  pointer-events: none;
`,U=({count:e,maxCount:t=99,dataTestId:a="badge-root",className:n})=>{if(e<=0)return null;let o=e>t?`${t}+`:String(e);return(0,i.jsx)(R,{className:n,"data-testid":a,$isLarge:o.length>2,children:o})};e.i(949375);var T=e.i(768394),z=e.i(371743),S=e.i(351754);let L=I.U.div.withConfig({displayName:"NotificationPanel.styles__Root",componentId:"sc-3f2c7219-0"})`
  position: absolute;
  top: 100%;
  right: 0;
  width: 360px;
  max-height: 520px;
  margin-top: 8px;
  background-color: ${({theme:e})=>e.palette.default.white};
  border: 1px solid ${({theme:e})=>e.palette.border.default};
  border-radius: ${e=>e.theme.borderRadius.box};
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  z-index: ${S.f.overlay};
  display: flex;
  flex-direction: column;
  overflow: hidden;

  @media screen and (max-width: ${e=>e.theme.device.smartphone}) {
    position: fixed;
    top: 60px;
    right: 8px;
    left: 8px;
    width: auto;
  }
`,H=I.U.div.withConfig({displayName:"NotificationPanel.styles__PanelHeader",componentId:"sc-3f2c7219-1"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border-bottom: 1px solid ${({theme:e})=>e.palette.border.default};
`,M=I.U.h3.withConfig({displayName:"NotificationPanel.styles__PanelTitle",componentId:"sc-3f2c7219-2"})`
  font-family: ${e=>e.theme.font.primaryFamily};
  font-size: 16px;
  font-weight: bold;
  color: ${({theme:e})=>e.palette.text.primary};
  margin: 0;
`,V=I.U.button.withConfig({displayName:"NotificationPanel.styles__MarkAllReadButton",componentId:"sc-3f2c7219-3"})`
  background: none;
  border: none;
  padding: 0;
  font-family: ${e=>e.theme.font.secondaryFamily};
  font-size: 12px;
  color: ${({theme:e})=>e.palette.default.primary};
  cursor: pointer;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`,F=I.U.div.withConfig({displayName:"NotificationPanel.styles__PanelBody",componentId:"sc-3f2c7219-4"})`
  flex: 1;
  overflow-y: auto;
  max-height: 400px;
`,P=I.U.div.withConfig({displayName:"NotificationPanel.styles__PanelFooter",componentId:"sc-3f2c7219-5"})`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 16px;
  border-top: 1px solid ${({theme:e})=>e.palette.border.default};
`,E=I.U.button.withConfig({displayName:"NotificationPanel.styles__ViewAllLink",componentId:"sc-3f2c7219-6"})`
  background: none;
  border: none;
  padding: 0;
  font-family: ${e=>e.theme.font.secondaryFamily};
  font-size: 13px;
  color: ${({theme:e})=>e.palette.default.primary};
  cursor: pointer;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`,A=I.U.div.withConfig({displayName:"NotificationPanel.styles__EmptyState",componentId:"sc-3f2c7219-7"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 16px;
  gap: 12px;
`,W=I.U.p.withConfig({displayName:"NotificationPanel.styles__EmptyStateText",componentId:"sc-3f2c7219-8"})`
  font-family: ${e=>e.theme.font.secondaryFamily};
  font-size: 14px;
  color: ${({theme:e})=>e.palette.text.muted};
  margin: 0;
`,B=({isOpen:e,onClose:t,dataTestId:a="notification-panel-root",className:r})=>{let{tr:l}=(0,c.f)(),s=(0,I.i)(),d=(0,o.useRouter)(),p=(0,n.useRef)(null),{notifications:u,isLoading:h,markAsRead:m,markAllAsRead:g,loadNotifications:x}=(0,f.I)();if((0,n.useEffect)(()=>{e&&x()},[e,x]),(0,n.useEffect)(()=>{if(!e)return;let i=e=>{p.current&&!p.current.contains(e.target)&&(e.target.closest('[data-testid="header-notifications-button"]')||t())},a=setTimeout(()=>{document.addEventListener("mousedown",i)},0);return()=>{clearTimeout(a),document.removeEventListener("mousedown",i)}},[e,t]),!e)return null;let y=async e=>{e.isRead||await m(e.id);let i=(0,z.f)(e.link);i&&d.push(i),t()},b=async()=>{await g()},w=u.filter(e=>!e.isRead);return(0,i.jsxs)(L,{ref:p,"data-testid":a,className:r,children:[(0,i.jsxs)(H,{"data-testid":"notification-panel-header",children:[(0,i.jsx)(M,{children:l("notifications.title",{defaultValue:"Notifications"})}),w.length>0&&(0,i.jsx)(V,{onClick:b,"data-testid":"notification-mark-all-read",type:"button",children:l("notifications.markAllRead",{defaultValue:"Mark all as read"})})]}),(0,i.jsx)(F,{"data-testid":"notification-panel-body",children:h&&0===u.length?(0,i.jsx)(A,{"data-testid":"notification-loading",children:(0,i.jsx)(W,{children:l("notifications.loading",{defaultValue:"Loading..."})})}):0===u.length?(0,i.jsxs)(A,{"data-testid":"notification-empty",children:[(0,i.jsx)(_.f,{color:s.palette.default.grey}),(0,i.jsx)(W,{children:l("notifications.empty",{defaultValue:"No notifications"})})]}):u.map(e=>(0,i.jsx)(T.f,{notification:e,onClick:y,dataTestId:`notification-item-${e.id}`},e.id))}),(0,i.jsx)(P,{"data-testid":"notification-panel-footer",children:(0,i.jsx)(E,{onClick:()=>{d.push("/notifications"),t()},"data-testid":"notification-view-all",type:"button",children:l("notifications.viewAll",{defaultValue:"View all notifications"})})})]})};var q=e.i(696984),D=e.i(593736),K=e.i(227319),Z=e.i(604892);e.i(849871);var O=e.i(352706),X=e.i(253286),G=e.i(547905);let Y=(0,G.F)(36),Q=(0,G.F)(32,(0,G.X)(36,2)),J=I.U.div.withConfig({displayName:"HeaderWorkingHoursButton.styles__Group",componentId:"sc-b85a051-0"})`
  display: inline-flex;
  align-items: center;
  gap: 4px;
`,ee=I.U.div.withConfig({displayName:"HeaderWorkingHoursButton.styles__Wrapper",componentId:"sc-b85a051-1"})`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${36}px;
  height: ${36}px;
  touch-action: manipulation;
  user-select: none;
`,et=I.q`
  0%, 100% { transform: scale(1); }
  50%      { transform: scale(1.06); }
`,ei=I.U.button.withConfig({displayName:"HeaderWorkingHoursButton.styles__Button",componentId:"sc-b85a051-2"})`
  width: ${36}px;
  height: ${36}px;
  flex-shrink: 0;
  padding: 0;
  margin: 0;
  border: none;
  outline: none;
  background: none;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.15s ease-in-out;
  -webkit-tap-highlight-color: transparent;

  ${({$tone:e})=>"running"===e&&I.m`
      animation: ${et} 2.4s ease-in-out infinite;
    `}

  & > * {
    position: relative;
    z-index: 1;
  }

  & > svg {
    flex-shrink: 0;
    display: block;
    transform: scale(0.8);
  }

  path,
  rect,
  line,
  circle,
  polyline,
  polygon {
    stroke: ${({theme:e})=>e.palette.default.black};
  }

  &::before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: ${36}px;
    height: ${36}px;
    clip-path: ${Y};
    background: ${({theme:e,$tone:t})=>"stop"===t?e.palette.default.error:"running"===t?e.palette.default.primary:"paused"===t?e.palette.default.warning:e.palette.default.greyDark};
    opacity: ${({$tone:e})=>"idle"===e?.6:1};
    z-index: 0;
    transition: 0.15s ease-in-out;
  }

  &::after {
    position: absolute;
    content: '';
    top: ${2}px;
    left: ${2}px;
    width: ${32}px;
    height: ${32}px;
    clip-path: ${Q};
    background: ${({theme:e,$tone:t,$isHolding:i})=>i?e.palette.default.error:"running"===t?e.palette.default.primary:"paused"===t?e.palette.default.warning:e.palette.default.white};
    z-index: 0;
    transition: 0.15s ease-in-out;
  }

  ${({$tone:e,$isHolding:t,theme:i})=>("running"===e||"paused"===e||t)&&`
    path, rect, line, circle, polyline, polygon {
      stroke: ${i.palette.default.white};
    }
  `}

  &:hover {
    path,
    rect,
    line,
    circle,
    polyline,
    polygon {
      stroke: ${({theme:e})=>e.palette.default.white};
    }
    &::before {
      opacity: 1;
    }
    &::after {
      background: ${({theme:e,$tone:t,$isHolding:i})=>i?e.palette.default.error:"idle"===t||"running"===t?e.palette.default.primary:"paused"===t?e.palette.default.warning:e.palette.default.primary};
    }
  }

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.palette.default.primary};
    outline-offset: 2px;
  }

  &:disabled,
  &[aria-disabled='true'] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  ${({$size:e,$tone:t,theme:i})=>"small"===e&&I.m`
      transform: scale(0.8);
      ${"stop"===t&&I.m`
        &::after {
          background: ${i.palette.default.error};
        }
        path,
        rect,
        line,
        circle,
        polyline,
        polygon {
          stroke: ${i.palette.default.white};
        }
      `}
    `}
`,ea=I.U.svg.withConfig({displayName:"HeaderWorkingHoursButton.styles__HoldRing",componentId:"sc-b85a051-3"})`
  position: absolute;
  inset: -4px;
  pointer-events: none;
  width: ${44}px;
  height: ${44}px;
  z-index: 2;
  transform: rotate(-90deg);

  & circle {
    fill: none;
    stroke: ${({theme:e})=>e.palette.default.error};
    stroke-width: 2;
    stroke-linecap: round;
    stroke-dasharray: ${({$progress:e})=>`${126*e} 126`};
    transition: stroke-dasharray 0.05s linear;
  }
`,en=I.U.span.withConfig({displayName:"HeaderWorkingHoursButton.styles__ElapsedBadge",componentId:"sc-b85a051-4"})`
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 9px;
  font-weight: 700;
  line-height: 1;
  padding: 2px 4px;
  border-radius: 4px;
  background: ${({theme:e})=>e.palette.default.black};
  color: ${({theme:e})=>e.palette.default.white};
  white-space: nowrap;
  pointer-events: none;
  z-index: 3;
`,eo=({dataTestId:e="working-hours-timer"})=>{let{tr:t}=(0,q.w)(),{state:a,pending:o,elapsedMs:r,postEvent:l}=(0,X.Y)(),[s,d]=(0,n.useState)(0),[c,p]=(0,n.useState)(!1),[u,f]=(0,n.useState)(!1),h=(0,n.useRef)(null),m=(0,n.useRef)(null),g=(0,n.useRef)(null),x=(0,n.useRef)(!1),y=(0,n.useRef)(!1),b=(0,n.useCallback)(()=>{null!==m.current&&(window.clearInterval(m.current),m.current=null),h.current=null,d(0),p(!1)},[]),w=(0,n.useCallback)(e=>{o||0!==e.button||(x.current=!0,y.current=!1,"idle"!==a.status&&(h.current=performance.now(),p(!0),m.current=window.setInterval(()=>{if(null===h.current)return;let e=Math.min(1,(performance.now()-h.current)/3e3);d(e),e>=1&&!y.current&&(y.current=!0,null!==m.current&&(window.clearInterval(m.current),m.current=null))},50)))},[o,a.status]),k=(0,n.useCallback)(()=>{if(!x.current)return;x.current=!1;let e=y.current;b(),e?l("stop"):"running"===a.status?l("pause"):l("play")},[b,l,a.status]),$=(0,n.useCallback)(()=>{x.current&&(x.current=!1,y.current=!1,b())},[b]),j=(0,n.useCallback)(e=>{" "!==e.key&&"Enter"!==e.key||(e.preventDefault(),o||("running"===a.status?l("pause"):l("play")))},[o,l,a.status]);(0,n.useEffect)(()=>()=>b(),[b]);let v=c&&s>=1,N=v?"stop":a.status,C=v?Z.f:"running"===a.status?K.f:D.f,_=v?t("workingHoursTimer.releaseToStop",{defaultValue:"Loslassen zum Stoppen"}):"running"===a.status?t("workingHoursTimer.runningTooltip",{defaultValue:"Pause (halten zum Stoppen)"}):"paused"===a.status?t("workingHoursTimer.pausedTooltip",{defaultValue:"Fortsetzen (halten zum Stoppen)"}):t("workingHoursTimer.idleTooltip",{defaultValue:"Arbeitszeit starten"}),I=v?t("workingHoursTimer.aria.stop",{defaultValue:"Arbeitszeit-Timer stoppen"}):"running"===a.status?t("workingHoursTimer.aria.pause",{defaultValue:"Arbeitszeit-Timer pausieren"}):"paused"===a.status?t("workingHoursTimer.aria.resume",{defaultValue:"Arbeitszeit-Timer fortsetzen"}):t("workingHoursTimer.aria.start",{defaultValue:"Arbeitszeit-Timer starten"}),R=t("workingHoursTimer.aria.stop",{defaultValue:"Arbeitszeit-Timer stoppen"}),U="idle"===a.status?null:(0,X.x)(r);return(0,i.jsxs)(J,{"data-testid":`${e}-group`,"data-state":a.status,children:[(0,i.jsxs)(ee,{ref:g,children:[(0,i.jsx)(ei,{type:"button",$tone:N,$isHolding:c,"aria-disabled":o||void 0,onPointerDown:w,onPointerUp:k,onPointerLeave:$,onPointerCancel:$,onKeyDown:j,onMouseEnter:()=>f(!0),onMouseLeave:()=>{f(!1),$()},"aria-label":I,"data-testid":`${e}-button`,"data-state":a.status,children:(0,i.jsx)(C,{})}),c&&(0,i.jsx)(ea,{$progress:s,viewBox:"0 0 44 44",children:(0,i.jsx)("circle",{cx:"22",cy:"22",r:"20"})}),U&&(0,i.jsx)(en,{children:U}),(0,i.jsx)(O.f,{content:_,isVisible:u&&!c,position:"bottom",anchorRef:g})]}),"idle"!==a.status&&(0,i.jsx)(ei,{type:"button",$tone:"stop",$isHolding:!1,$size:"small","aria-disabled":o||void 0,onClick:()=>{o||l("stop")},"aria-label":R,title:R,"data-testid":`${e}-stop`,children:(0,i.jsx)(Z.f,{})})]})};var er=e.i(627056),el=e.i(858350),es=e.i(375519),ed=e.i(164223);let ec=(0,a.default)(()=>e.A(446694),{loadableGenerated:{modules:[710141]},ssr:!1});function ep(){let{language:e,isHydrated:a}=(0,p.N)(),{tr:I}=(0,c.f)(e),{isLeftSidebarOpen:R,toggleLeftSidebar:T}=(0,u.i)(),{data:z,status:S}=(0,s.useSession)(),{isAuthenticated:L,isSessionLoading:H}=(0,es.V)(S,!!z),M=L&&(z?.user?.realRole??z?.user?.role)==="admin",[V,F]=n.default.useState(!1),[P,E]=(0,n.useState)(!1),[A,W]=(0,n.useState)(!1),[q,D]=(0,n.useState)(""),[K,Z]=(0,n.useState)([]),{label:O}=(0,el.f)(),X=O(null).text,G=(0,n.useMemo)(()=>K.map(e=>({...e,label:(0,ed.f)(e.label)??X})),[K,X]),[Y,Q]=(0,n.useState)(!1),J=n.default.useRef(null),ee=n.default.useRef(null),et=n.default.useRef(null),ei=(0,o.useRouter)(),ea=(0,o.usePathname)(),en=(0,er.f)(),{outlookLinked:ep,isStaffOrAdmin:eu}=(0,v.f)(),{unreadCount:ef}=(0,f.I)(),{userImage:eh}=(0,b.E)(z?.user?.image??void 0,{enabled:!!z});(0,n.useEffect)(()=>{eh&&!A&&(t=eh)},[eh,A]);let em=eh&&!A?eh:t,eg=(0,n.useRef)(z?.user?.image);(0,n.useEffect)(()=>{z?.user?.image!==eg.current&&(eg.current=z?.user?.image,W(!1))},[z?.user?.image]),(0,n.useEffect)(()=>{D(new URLSearchParams(window.location.search).get("q")??""),Z([]),F(!1)},[ea]),(0,n.useEffect)(()=>{let e=e=>{J.current&&!J.current.contains(e.target)&&ee.current&&!ee.current.contains(e.target)&&F(!1)};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[]);let ex=(0,n.useCallback)(e=>{(et.current&&clearTimeout(et.current),e.length<2)?Z([]):et.current=setTimeout(async()=>{Q(!0);try{let t=await d.k.get(`/search/suggestions?q=${encodeURIComponent(e)}`);Z(t.data.suggestions||[])}catch{Z([])}finally{Q(!1)}},300)},[]),ey=(0,n.useCallback)(e=>{e.trim().length>=2&&(Z([]),ei.push(`/search?q=${encodeURIComponent(e.trim())}`))},[ei]),eb=(0,n.useCallback)(e=>{Z([]),e.value.startsWith("/")?ei.push(e.value):ei.push(`/search?q=${encodeURIComponent(e.label)}`)},[ei]),ew=async e=>{e.preventDefault(),await (0,s.signOut)({redirect:!1}),ei.push("/login")};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(h.P,{$isLoading:H,children:(0,i.jsx)(y.f,{placeholder:a?I("search.placeholder"):"Suche...",value:q,onChange:D,onSearch:ex,onSubmit:ey,suggestions:G,onSuggestionSelect:eb,loadingSuggestions:Y,noResultsText:a?I("search.noResults",{defaultValue:"Keine Ergebnisse"}):"Keine Ergebnisse",variant:"compact",showClearButton:!0,minChars:2,noMargin:!0,dataTestId:"header-search"})}),(0,i.jsxs)(h.R,{children:[M&&(0,i.jsx)(ec,{dataTestId:"view-as-mobile"}),(0,i.jsx)(N.f,{isOpen:R,onClick:T,controlsId:C.X})]}),(0,i.jsx)(h.w,{$isLoading:H,children:(L||H)&&(0,i.jsxs)(i.Fragment,{children:[M&&(0,i.jsx)(ec,{dataTestId:"view-as"}),en&&(0,i.jsx)(eo,{}),eu&&ep&&(0,i.jsx)(g.f,{onClick:()=>ei.push("/mail"),icon:(0,i.jsx)(k.f,{}),tooltip:I("header.mail.tooltip",{defaultValue:"Mail"}),ariaLabel:I("header.mail.ariaLabel",{defaultValue:"Mail page"}),color:x.Z.microsoft,isActive:ea?.startsWith("/mail")}),eu&&ep&&(0,i.jsx)(g.f,{onClick:()=>ei.push("/chat"),icon:(0,i.jsx)($.f,{}),tooltip:I("header.messages.tooltip",{defaultValue:"Messages"}),ariaLabel:I("header.messages.ariaLabel",{defaultValue:"Messages"}),color:x.Z.microsoft,isActive:ea?.startsWith("/chat")}),eu&&ep&&(0,i.jsx)(g.f,{onClick:()=>ei.push("/calendar"),icon:(0,i.jsx)(j.f,{}),tooltip:I("header.calendar.tooltip",{defaultValue:"Calendar"}),ariaLabel:I("header.calendar.ariaLabel",{defaultValue:"Calendar"}),color:x.Z.microsoft,isActive:ea?.startsWith("/calendar")}),(0,i.jsxs)(h.y,{children:[(0,i.jsx)(g.f,{onClick:()=>E(e=>!e),icon:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(_.f,{}),(0,i.jsx)(U,{count:ef,dataTestId:"header-notifications-badge"})]}),tooltip:I("header.notifications.tooltip",{defaultValue:"Notifications"}),ariaLabel:I("header.notifications.ariaLabel",{defaultValue:"Notifications"}),color:x.Z.primary,isActive:P||ea?.startsWith("/notifications"),dataTestId:"header-notifications-button"}),(0,i.jsx)(B,{isOpen:P,onClose:()=>E(!1),dataTestId:"header-notification-panel"})]}),(0,i.jsxs)(h.E,{ref:ee,onMouseEnter:()=>F(!0),onMouseLeave:()=>F(!1),children:[(0,i.jsx)(h.N,{$isActive:ea?.startsWith("/profile"),onClick:()=>ei.push("/profile"),"aria-label":I("header.profile",{defaultValue:"User profile"}),title:z?.user?.name||I("header.profile",{defaultValue:"Profile"}),"data-testid":"header-avatar",children:(()=>em?"string"==typeof em&&(em.includes("force.com")||(0,l.f)(em))?(0,i.jsx)(h.Z,{children:(0,i.jsx)("img",{src:em,alt:z?.user?.name||"User",onError:()=>W(!0)})}):(0,i.jsx)(h.Z,{children:(0,i.jsx)(r.default,{src:em||"",alt:z?.user?.name||"User",fill:!0,sizes:"40px",priority:!0,style:{objectFit:"cover"},unoptimized:"string"==typeof em&&em.includes("ui-avatars.com")||"string"==typeof em&&em.includes("stickees.com")||"string"==typeof em&&em.includes("external")||"string"==typeof em&&!em.startsWith("/"),onError:()=>{W(!0)}})}):(0,i.jsx)(h.b,{children:(0,i.jsx)(m.f,{})}))()}),V&&(0,i.jsxs)(h.x,{ref:J,children:[(0,i.jsx)(h.t,{onClick:()=>ei.push("/profile"),children:I("header.profile")}),(0,i.jsxs)(h.z,{"data-testid":"logout-button",onClick:()=>ew(new MouseEvent("click")),children:[(0,i.jsx)(w.f,{}),(0,i.jsx)("span",{children:I("header.logout")})]})]})]})]})})]})}e.s(["HeaderAppControls",0,ep,"default",0,ep],851724)},555508,e=>{e.i(821194);var t=e.i(99222),i=e.i(929666);e.s(["f",0,function(){let{i18n:e}=(0,t.f)();return(0,i.j)(e?.language)}])},635228,e=>{var t=e.i(266027),i=e.i(954616),a=e.i(912598),n=e.i(501496),o=e.i(597826);e.s(["i",0,e=>(0,t.f)({queryKey:["rigk-map-accounts",e?.limit,e?.filters],queryFn:async()=>(await n.k.get("/rigk/accounts/map",{params:{limit:e?.limit||1e3,...e?.filters}})).data,staleTime:12e4,retry:3,enabled:e?.enabled!==!1}),"$",0,(e,i)=>(0,t.f)({queryKey:["salesforce-map-accounts",e],queryFn:async()=>(await n.k.get("/salesforce/accounts/map",{params:e})).data,staleTime:12e4,retry:3,enabled:!i?.skip&&i?.enabled!==!1,refetchInterval:i?.refetchInterval}),"q",0,()=>{let e=(0,a.d)(),t=(0,o.x)();return(0,i.f)({mutationFn:async e=>(await n.k.put("/plastship/user/profile",e)).data.user,onSuccess:i=>{e.invalidateQueries({queryKey:["user-profile"]}),t(e=>({...e,profile:{...e.profile,...i}}))}})},"E",0,(e,t)=>{let i=(0,o.j)(),a=t?.enabled??!0;return{userImage:(a?i.data?.profile?.image:void 0)||e,isLoading:a&&i.isLoading,error:i.error??void 0}},"y",0,e=>(0,t.f)({queryKey:["user-profile"],queryFn:async()=>(await n.k.get("/plastship/user/profile")).data,staleTime:6e4,retry:3,enabled:e?.enabled})])},193233,e=>{var t=e.i(437992);let i=e=>"element"===e.type,a=e=>Array.isArray(e)?e.map(String):"string"==typeof e?e.split(/\s+/).filter(Boolean):[];e.s(["f",0,function(){return e=>{let n=e=>{for(let o of e)if(i(o)){if("a"===o.tagName){let e=o.properties.href;if("string"==typeof e&&(0,t.b)(e)){let e=a(o.properties.rel);for(let i of t.Z.split(" "))e.some(e=>e.toLowerCase()===i)||e.push(i);o.properties.rel=e,o.properties.target="_blank",o.properties.referrerPolicy=t.T}}n(o.children)}};n(e.children)}}])},918274,e=>{let t="(?:[a-z0-9]{10,40}|[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})";RegExp(`^${t}$`),e.s(["Y",0,1048576,"p",0,["image/jpeg","image/png","image/webp"],"k",0,512,"I",0,t])},475352,e=>{var t=e.i(918274);let i=RegExp(`^\\/api\\/profile-picture\\/${t.I}\\/(\\?v=\\d+)?$`);e.s(["f",0,function(e){return"string"==typeof e&&i.test(e)}])}])})();