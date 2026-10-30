(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,593736,e=>{var t=e.i(843476),i=e.i(997053);let a=i.U.svg.withConfig({displayName:"IconPlay.styles__Root",componentId:"sc-2afb8061-0"})``;e.s(["f",0,e=>{let i=e.color??"currentColor";return(0,t.jsxs)(a,{className:e.className,"data-testid":"icon-play-root",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:[(0,t.jsx)("title",{children:"media-play"}),(0,t.jsx)("g",{fill:i,children:(0,t.jsx)("path",{d:"M6 4V20L20 12L6 4Z",stroke:i,strokeWidth:"2",strokeLinecap:"square",fill:"none"})})]})}],593736)},604892,e=>{var t=e.i(843476),i=e.i(997053);let a=i.U.svg.withConfig({displayName:"IconStop.styles__Root",componentId:"sc-a874f867-0"})``;e.s(["f",0,e=>{let i=e.color??"currentColor";return(0,t.jsxs)(a,{className:e.className,"data-testid":"icon-stop-root",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:[(0,t.jsx)("title",{children:"media-stop"}),(0,t.jsx)("g",{fill:i,children:(0,t.jsx)("path",{d:"M20 4H4V20H20V4Z",stroke:i,strokeWidth:"2",strokeLinecap:"square",fill:"none"})})]})}],604892)},960291,305926,201357,e=>{var t,i=e.i(843476),a=e.i(918789),n=e.i(997053),r=((t={}).block="block",t.inline="inline",t);let o=n.m`
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
`,s=n.m`
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
`,l=n.U.div.withConfig({displayName:"MarkdownRenderer.styles__TableScroll",componentId:"sc-e731612a-0"})`
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

  ${e=>"block"===e.$mode?o:s}
`;e.s(["n",0,d,"b",()=>r,"F",0,c,"a",0,l],305926);var u=e.i(929842),p=e.i(703089);let f=n.U.ol.withConfig({displayName:"OrderedList.styles__Root",componentId:"sc-d33153d1-0"})`
  margin-bottom: ${e=>e.theme.margin.default};
  max-width: 40rem;
  list-style-type: none;
  li::before {
    content: counter(list-item-counter) '. ';
  }
`,m=e=>{let{children:t}=e;return(0,i.jsx)(f,{className:e.className,"data-testid":"ordered-list-root",children:t})};var h=e.i(271645);let g=n.U.ul.withConfig({displayName:"UnorderedList.styles__Root",componentId:"sc-54b80dbe-0"})`
  margin-bottom: ${e=>e.theme.margin.default};
  max-width: 40rem;
  list-style-type: ${e=>e.$icon?"none":"disc"};
  padding-left: ${e=>e.$icon?"0":"1.5em"};
`,x=e=>{let{children:t,icon:a,dataTestId:n}=e,r=a?h.default.Children.map(t,e=>h.default.isValidElement(e)?h.default.cloneElement(e,{icon:a}):e):t;return(0,i.jsx)(g,{className:e.className,$icon:a?"true":void 0,"data-testid":n||"unordered-list-root",children:r})};var y=e.i(852590),b=e.i(559173);let w=n.U.li.withConfig({displayName:"ListItem.styles__Root",componentId:"sc-c8445b7d-0"})`
  margin-bottom: ${e=>e.theme.margin.small};
  position: relative;
  padding-left: ${e=>"true"===e.hasicon?"28px":"0"};
  ${(0,b.$)(p.g.body)}
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
`;let v=e=>{let{children:t,icon:a,dataTestId:n}=e,r=void 0!==e.icon&&null!==e.icon;return(0,i.jsxs)(w,{className:e.className,"data-testid":n??"list-item-root",hasicon:r.toString(),children:[r&&(0,i.jsx)(k,{children:a}),t]})},$=n.U.blockquote.withConfig({displayName:"Blockqoute.styles__Root",componentId:"sc-c7e2eb3-0"})`
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
`,j=e=>{let{children:t,className:a}=e;return(0,i.jsx)($,{className:a,"data-testid":"blockqoute-root",children:t})},C=n.U.hr.withConfig({displayName:"HorizontalRule.styles__Root",componentId:"sc-27e0583-0"})`
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
`,I=e=>(0,i.jsx)(C,{className:e.className,"data-testid":"horizontal-rule-root"}),N=n.U.a.withConfig({displayName:"InlineLink.styles__Root",componentId:"sc-68a2fdb5-0"})`
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
`;var _=e.i(437992);let S=e=>{let{children:t,href:a,target:n,rel:r,dataTestId:o,className:s}=e,l=(0,_.a)(a,{target:n,rel:r});return(0,i.jsx)(N,{href:a,...l,className:s,"data-testid":o||"inline-link-root",children:t})},R="'SF Mono', 'Monaco', 'Menlo', 'Consolas', monospace",T=n.U.code.withConfig({displayName:"CodeBlock.styles__InlineCode",componentId:"sc-82b3b1ee-0"})`
  font-family: ${R};
  font-size: 0.875em;
  /* aus dem Theme — fest #f1f3f5/#d63384 war im Dunkelmodus ein heller Fleck im dunklen Text */
  background-color: ${e=>e.theme.palette.code.background};
  color: ${e=>e.theme.palette.code.text};
  padding: 1px 6px;
  border-radius: 3px;
  word-break: break-word;
`,E=n.U.pre.withConfig({displayName:"CodeBlock.styles__Pre",componentId:"sc-82b3b1ee-1"})`
  margin: 0 0 ${e=>e.theme.margin.default} 0;
  padding: 12px 16px;
  /* #1886: aus dem Theme — fest #f8f9fa war im Dunkelmodus hell unter hellem Text */
  background-color: ${e=>e.theme.palette.surface.subtle};
  border-radius: 6px;
  overflow-x: auto;
  -webkit-font-smoothing: antialiased;
`,U=n.U.code.withConfig({displayName:"CodeBlock.styles__BlockCode",componentId:"sc-82b3b1ee-2"})`
  font-family: ${R};
  font-size: 13px;
  line-height: 1.6;
  color: ${e=>e.theme.palette.default.black};
  background-color: transparent;
  padding: 0;
`,z=e=>{let{children:t,inline:a=!1,dataTestId:n,className:r}=e;return a?(0,i.jsx)(T,{className:r,"data-testid":n||"code-inline-root",children:t}):(0,i.jsx)(E,{className:r,"data-testid":n||"code-block-root",children:(0,i.jsx)(U,{children:t})})};e.s(["f",0,z],201357);var M=e.i(193233);let A=e=>function({src:t,alt:a}){let n="string"==typeof t?t:void 0,r=n&&e?e(n):{src:n};return(0,i.jsx)(d,{src:r.src,width:r.width,height:r.height,alt:a??"",loading:"lazy","data-testid":"markdown-image","data-sized":r.width&&r.height?"true":"false"})},L={h1:({children:e})=>(0,i.jsx)(u.K,{importance:u.D.h1,children:e}),h2:({children:e})=>(0,i.jsx)(u.K,{importance:u.D.h2,children:e}),h3:({children:e})=>(0,i.jsx)(u.K,{importance:u.D.h3,children:e}),h4:({children:e})=>(0,i.jsx)(u.K,{importance:u.D.h4,children:e}),h5:({children:e})=>(0,i.jsx)(u.K,{importance:u.D.h5,children:e}),p:({children:e})=>(0,i.jsx)(p.p,{variant:p.g.body,children:e}),ul:({children:e,className:t})=>(0,i.jsx)(x,{className:t,children:e}),ol:({children:e})=>(0,i.jsx)(m,{children:e}),li:({children:e,className:t})=>(0,i.jsx)(v,{className:t,children:e}),blockquote:({children:e})=>(0,i.jsx)(j,{children:e}),hr:()=>(0,i.jsx)(I,{}),a:({href:e,children:t})=>(0,i.jsx)(S,{href:e||"#",target:"_blank",children:t}),table:({children:e})=>(0,i.jsx)(l,{"data-testid":"markdown-table",children:(0,i.jsx)("table",{children:e})}),img:A(),code:({children:e,className:t})=>(0,i.jsx)(z,{inline:!t,children:e}),pre:({children:e})=>(0,i.jsx)(i.Fragment,{children:e})},V=new WeakMap,H=new WeakMap,P={},F={h1:({children:e})=>(0,i.jsx)("span",{children:e}),h2:({children:e})=>(0,i.jsx)("span",{children:e}),h3:({children:e})=>(0,i.jsx)("span",{children:e}),h4:({children:e})=>(0,i.jsx)("span",{children:e}),h5:({children:e})=>(0,i.jsx)("span",{children:e}),p:({children:e})=>(0,i.jsx)("span",{children:e}),ul:({children:e})=>(0,i.jsx)("span",{children:e}),ol:({children:e})=>(0,i.jsx)("span",{children:e}),li:({children:e})=>(0,i.jsxs)("span",{children:[e," "]}),blockquote:({children:e})=>(0,i.jsx)("span",{children:e}),hr:()=>(0,i.jsx)("span",{children:" — "}),a:({href:e,children:t})=>(0,i.jsx)(S,{href:e||"#",children:t}),code:({children:e})=>(0,i.jsx)(z,{inline:!0,children:e}),pre:({children:e})=>(0,i.jsx)("span",{children:e})},W=[M.f],D=({content:e,mode:t=r.block,dataTestId:n="markdown-renderer-root",className:o,remarkPlugins:s,resolveImage:l,renderCodeBlock:d})=>{if(!e)return(0,i.jsx)(c,{$mode:t,"data-testid":n,className:o});let u=t===r.block?function(e,t){let a=L;if(e){let t=V.get(e);t||(t={...L,img:A(e)},V.set(e,t)),a=t}if(!t)return a;let n=e??P,r=H.get(n);r||(r=new WeakMap,H.set(n,r));let o=r.get(t);!o&&(o={...a,code:function({children:e,className:a}){let n=a?/(?:^|\s)language-([\w-]+)/.exec(a)?.[1]:void 0;if(n){let a=t(n,String(e??""));if(null!=a)return(0,i.jsx)(i.Fragment,{children:a})}return(0,i.jsx)(z,{inline:!a,children:e})}},r.set(t,o));return o}(l,d):F;return(0,i.jsx)(c,{$mode:t,"data-testid":n,className:o,children:(0,i.jsx)(a.f,{components:u,remarkPlugins:s,rehypePlugins:W,children:e})})};e.s(["B",0,D,"U",0,D],960291)},949375,768394,371743,e=>{var t=e.i(843476),i=e.i(997053);let a=i.U.div.withConfig({displayName:"NotificationItem.styles__Root",componentId:"sc-9f7f86ba-0"})`
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
`,r=i.U.div.withConfig({displayName:"NotificationItem.styles__ContentWrapper",componentId:"sc-9f7f86ba-2"})`
  flex: 1;
  min-width: 0;
`,o=i.U.div.withConfig({displayName:"NotificationItem.styles__Title",componentId:"sc-9f7f86ba-3"})`
  font-family: ${e=>e.theme.font.secondaryFamily};
  font-size: 14px;
  line-height: 20px;
  font-weight: ${e=>e.$isRead?"normal":"bold"};
  color: ${({theme:e})=>e.palette.text.primary};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,s=i.U.div.withConfig({displayName:"NotificationItem.styles__MessageWrapper",componentId:"sc-9f7f86ba-4"})`
  font-size: 12px;
  line-height: 18px;
  color: ${({theme:e})=>e.palette.text.secondary};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-top: 2px;
`,l=i.U.div.withConfig({displayName:"NotificationItem.styles__TimeStamp",componentId:"sc-9f7f86ba-5"})`
  font-family: ${e=>e.theme.font.secondaryFamily};
  font-size: 11px;
  line-height: 16px;
  color: ${({theme:e})=>e.palette.text.muted};
  margin-top: 4px;
`;e.i(821194);var d=e.i(99222),c=e.i(555508),u=e.i(137927),p=e.i(912381),f=e.i(960291),m=e.i(305926);e.s(["f",0,({notification:e,onClick:i,dataTestId:h="notification-item-root",className:g})=>{let x=function(e){let{tr:t}=(0,d.f)(),i=(0,c.f)(),a=new Date,n=new Date(e),r=Math.floor((a.getTime()-n.getTime())/1e3),o=Math.floor(r/60),s=Math.floor(o/60),l=Math.floor(s/24);return r<60?t("notifications.time.justNow"):o<60?t("notifications.time.minutesAgo",{count:o}):s<24?t("notifications.time.hoursAgo",{count:s}):l<7?t("notifications.time.daysAgo",{count:l}):i.dateWith(n,{})}(e.createdAt),{title:y,message:b}=function(e){let{tr:t,i18n:i}=(0,d.f)();return(0,u.P)(e,t,i?.language??"de",e=>(0,p.m)(t,e))}(e);return(0,t.jsxs)(a,{className:g,"data-testid":h,$isRead:e.isRead,onClick:()=>{i(e)},children:[!e.isRead&&(0,t.jsx)(n,{"data-testid":"notification-unread-dot"}),(0,t.jsxs)(r,{children:[(0,t.jsx)(o,{$isRead:e.isRead,"data-testid":"notification-title",children:y}),b&&(0,t.jsx)(s,{children:(0,t.jsx)(f.B,{content:b,mode:m.b.inline,dataTestId:"notification-message"})}),(0,t.jsx)(l,{"data-testid":"notification-timestamp",children:x})]})]})}],768394),e.s([],949375);let h=/[\u0000-\u001F\u007F\\]/,g="https://app.invalid";e.s(["f",0,function(e){let t,i;if("string"!=typeof e)return null;let a=e.trim();if(!a.startsWith("/")||a.startsWith("//")||h.test(a))return null;try{t=decodeURIComponent(a)}catch{return null}if(t.startsWith("//")||h.test(t))return null;try{i=new URL(a,g)}catch{return null}return i.origin!==g||i.pathname.startsWith("//")?null:i.pathname+i.search+i.hash}],371743)},851724,e=>{let t;var i=e.i(843476),a=e.i(770703),n=e.i(271645),r=e.i(618566),o=e.i(325164),s=e.i(475352),l=e.i(49958),d=e.i(501496);e.i(821194);var c=e.i(99222),u=e.i(885895),p=e.i(157067),f=e.i(786743),m=e.i(858145),h=e.i(138837),g=e.i(805885),x=e.i(535004);e.i(535016);var y=e.i(866757),b=e.i(635228),w=e.i(646684),k=e.i(317573),v=e.i(635769),$=e.i(26819),j=e.i(727827),C=e.i(552830),I=e.i(692504),N=e.i(497734),_=e.i(997053);let S=_.U.span.withConfig({displayName:"Badge.styles__Root",componentId:"sc-88b77c61-0"})`
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
`,R=({count:e,maxCount:t=99,dataTestId:a="badge-root",className:n})=>{if(e<=0)return null;let r=e>t?`${t}+`:String(e);return(0,i.jsx)(S,{className:n,"data-testid":a,$isLarge:r.length>2,children:r})};e.i(949375);var T=e.i(768394),E=e.i(371743),U=e.i(351754);let z=_.U.div.withConfig({displayName:"NotificationPanel.styles__Root",componentId:"sc-3f2c7219-0"})`
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
  z-index: ${U.f.overlay};
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
`,M=_.U.div.withConfig({displayName:"NotificationPanel.styles__PanelHeader",componentId:"sc-3f2c7219-1"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border-bottom: 1px solid ${({theme:e})=>e.palette.border.default};
`,A=_.U.h3.withConfig({displayName:"NotificationPanel.styles__PanelTitle",componentId:"sc-3f2c7219-2"})`
  font-family: ${e=>e.theme.font.primaryFamily};
  font-size: 16px;
  font-weight: bold;
  color: ${({theme:e})=>e.palette.text.primary};
  margin: 0;
`,L=_.U.button.withConfig({displayName:"NotificationPanel.styles__MarkAllReadButton",componentId:"sc-3f2c7219-3"})`
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
`,V=_.U.div.withConfig({displayName:"NotificationPanel.styles__PanelBody",componentId:"sc-3f2c7219-4"})`
  flex: 1;
  overflow-y: auto;
  max-height: 400px;
`,H=_.U.div.withConfig({displayName:"NotificationPanel.styles__PanelFooter",componentId:"sc-3f2c7219-5"})`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 16px;
  border-top: 1px solid ${({theme:e})=>e.palette.border.default};
`,P=_.U.button.withConfig({displayName:"NotificationPanel.styles__ViewAllLink",componentId:"sc-3f2c7219-6"})`
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
`,F=_.U.div.withConfig({displayName:"NotificationPanel.styles__EmptyState",componentId:"sc-3f2c7219-7"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 16px;
  gap: 12px;
`,W=_.U.p.withConfig({displayName:"NotificationPanel.styles__EmptyStateText",componentId:"sc-3f2c7219-8"})`
  font-family: ${e=>e.theme.font.secondaryFamily};
  font-size: 14px;
  color: ${({theme:e})=>e.palette.text.muted};
  margin: 0;
`,D=({isOpen:e,onClose:t,dataTestId:a="notification-panel-root",className:o})=>{let{tr:s}=(0,c.f)(),l=(0,_.i)(),d=(0,r.useRouter)(),u=(0,n.useRef)(null),{notifications:p,isLoading:m,markAsRead:h,markAllAsRead:g,loadNotifications:x}=(0,f.I)();if((0,n.useEffect)(()=>{e&&x()},[e,x]),(0,n.useEffect)(()=>{if(!e)return;let i=e=>{u.current&&!u.current.contains(e.target)&&(e.target.closest('[data-testid="header-notifications-button"]')||t())},a=setTimeout(()=>{document.addEventListener("mousedown",i)},0);return()=>{clearTimeout(a),document.removeEventListener("mousedown",i)}},[e,t]),!e)return null;let y=async e=>{e.isRead||await h(e.id);let i=(0,E.f)(e.link);i&&d.push(i),t()},b=async()=>{await g()},w=p.filter(e=>!e.isRead);return(0,i.jsxs)(z,{ref:u,"data-testid":a,className:o,children:[(0,i.jsxs)(M,{"data-testid":"notification-panel-header",children:[(0,i.jsx)(A,{children:s("notifications.title",{defaultValue:"Notifications"})}),w.length>0&&(0,i.jsx)(L,{onClick:b,"data-testid":"notification-mark-all-read",type:"button",children:s("notifications.markAllRead",{defaultValue:"Mark all as read"})})]}),(0,i.jsx)(V,{"data-testid":"notification-panel-body",children:m&&0===p.length?(0,i.jsx)(F,{"data-testid":"notification-loading",children:(0,i.jsx)(W,{children:s("notifications.loading",{defaultValue:"Loading..."})})}):0===p.length?(0,i.jsxs)(F,{"data-testid":"notification-empty",children:[(0,i.jsx)(N.f,{color:l.palette.default.grey}),(0,i.jsx)(W,{children:s("notifications.empty",{defaultValue:"No notifications"})})]}):p.map(e=>(0,i.jsx)(T.f,{notification:e,onClick:y,dataTestId:`notification-item-${e.id}`},e.id))}),(0,i.jsx)(H,{"data-testid":"notification-panel-footer",children:(0,i.jsx)(P,{onClick:()=>{d.push("/notifications"),t()},"data-testid":"notification-view-all",type:"button",children:s("notifications.viewAll",{defaultValue:"View all notifications"})})})]})};var B=e.i(696984),q=e.i(593736),K=e.i(227319),O=e.i(604892);e.i(849871);var Z=e.i(352706),G=e.i(253286),X=e.i(547905);let Y=(0,X.F)(36),J=(0,X.F)(32,(0,X.X)(36,2)),Q=_.U.div.withConfig({displayName:"HeaderWorkingHoursButton.styles__Group",componentId:"sc-b85a051-0"})`
  display: inline-flex;
  align-items: center;
  gap: 4px;
`,ee=_.U.div.withConfig({displayName:"HeaderWorkingHoursButton.styles__Wrapper",componentId:"sc-b85a051-1"})`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${36}px;
  height: ${36}px;
  touch-action: manipulation;
  user-select: none;
`,et=_.q`
  0%, 100% { transform: scale(1); }
  50%      { transform: scale(1.06); }
`,ei=_.U.button.withConfig({displayName:"HeaderWorkingHoursButton.styles__Button",componentId:"sc-b85a051-2"})`
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

  ${({$tone:e})=>"running"===e&&_.m`
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
    clip-path: ${J};
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

  ${({$size:e,$tone:t,theme:i})=>"small"===e&&_.m`
      transform: scale(0.8);
      ${"stop"===t&&_.m`
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
`,ea=_.U.svg.withConfig({displayName:"HeaderWorkingHoursButton.styles__HoldRing",componentId:"sc-b85a051-3"})`
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
`,en=_.U.span.withConfig({displayName:"HeaderWorkingHoursButton.styles__ElapsedBadge",componentId:"sc-b85a051-4"})`
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
`,er=({dataTestId:e="working-hours-timer"})=>{let{tr:t}=(0,B.w)(),{state:a,pending:r,elapsedMs:o,postEvent:s}=(0,G.Y)(),[l,d]=(0,n.useState)(0),[c,u]=(0,n.useState)(!1),[p,f]=(0,n.useState)(!1),m=(0,n.useRef)(null),h=(0,n.useRef)(null),g=(0,n.useRef)(null),x=(0,n.useRef)(!1),y=(0,n.useRef)(!1),b=(0,n.useCallback)(()=>{null!==h.current&&(window.clearInterval(h.current),h.current=null),m.current=null,d(0),u(!1)},[]),w=(0,n.useCallback)(e=>{r||0!==e.button||(x.current=!0,y.current=!1,"idle"!==a.status&&(m.current=performance.now(),u(!0),h.current=window.setInterval(()=>{if(null===m.current)return;let e=Math.min(1,(performance.now()-m.current)/3e3);d(e),e>=1&&!y.current&&(y.current=!0,null!==h.current&&(window.clearInterval(h.current),h.current=null))},50)))},[r,a.status]),k=(0,n.useCallback)(()=>{if(!x.current)return;x.current=!1;let e=y.current;b(),e?s("stop"):"running"===a.status?s("pause"):s("play")},[b,s,a.status]),v=(0,n.useCallback)(()=>{x.current&&(x.current=!1,y.current=!1,b())},[b]),$=(0,n.useCallback)(e=>{" "!==e.key&&"Enter"!==e.key||(e.preventDefault(),r||("running"===a.status?s("pause"):s("play")))},[r,s,a.status]);(0,n.useEffect)(()=>()=>b(),[b]);let j=c&&l>=1,C=j?"stop":a.status,I=j?O.f:"running"===a.status?K.f:q.f,N=j?t("workingHoursTimer.releaseToStop",{defaultValue:"Loslassen zum Stoppen"}):"running"===a.status?t("workingHoursTimer.runningTooltip",{defaultValue:"Pause (halten zum Stoppen)"}):"paused"===a.status?t("workingHoursTimer.pausedTooltip",{defaultValue:"Fortsetzen (halten zum Stoppen)"}):t("workingHoursTimer.idleTooltip",{defaultValue:"Arbeitszeit starten"}),_=j?t("workingHoursTimer.aria.stop",{defaultValue:"Arbeitszeit-Timer stoppen"}):"running"===a.status?t("workingHoursTimer.aria.pause",{defaultValue:"Arbeitszeit-Timer pausieren"}):"paused"===a.status?t("workingHoursTimer.aria.resume",{defaultValue:"Arbeitszeit-Timer fortsetzen"}):t("workingHoursTimer.aria.start",{defaultValue:"Arbeitszeit-Timer starten"}),S=t("workingHoursTimer.aria.stop",{defaultValue:"Arbeitszeit-Timer stoppen"}),R="idle"===a.status?null:(0,G.x)(o);return(0,i.jsxs)(Q,{"data-testid":`${e}-group`,"data-state":a.status,children:[(0,i.jsxs)(ee,{ref:g,children:[(0,i.jsx)(ei,{type:"button",$tone:C,$isHolding:c,"aria-disabled":r||void 0,onPointerDown:w,onPointerUp:k,onPointerLeave:v,onPointerCancel:v,onKeyDown:$,onMouseEnter:()=>f(!0),onMouseLeave:()=>{f(!1),v()},"aria-label":_,"data-testid":`${e}-button`,"data-state":a.status,children:(0,i.jsx)(I,{})}),c&&(0,i.jsx)(ea,{$progress:l,viewBox:"0 0 44 44",children:(0,i.jsx)("circle",{cx:"22",cy:"22",r:"20"})}),R&&(0,i.jsx)(en,{children:R}),(0,i.jsx)(Z.f,{content:N,isVisible:p&&!c,position:"bottom",anchorRef:g})]}),"idle"!==a.status&&(0,i.jsx)(ei,{type:"button",$tone:"stop",$isHolding:!1,$size:"small","aria-disabled":r||void 0,onClick:()=>{r||s("stop")},"aria-label":S,title:S,"data-testid":`${e}-stop`,children:(0,i.jsx)(O.f,{})})]})};var eo=e.i(627056),es=e.i(858350),el=e.i(375519),ed=e.i(164223);let ec=(0,a.default)(()=>e.A(446694),{loadableGenerated:{modules:[710141]},ssr:!1});function eu(){let{language:e,isHydrated:a}=(0,u.N)(),{tr:_}=(0,c.f)(e),{isLeftSidebarOpen:S,toggleLeftSidebar:T}=(0,p.i)(),{data:E,status:U}=(0,l.useSession)(),{isAuthenticated:z,isSessionLoading:M}=(0,el.V)(U,!!E),A=z&&(E?.user?.realRole??E?.user?.role)==="admin",[L,V]=n.default.useState(!1),[H,P]=(0,n.useState)(!1),[F,W]=(0,n.useState)(!1),[B,q]=(0,n.useState)(""),[K,O]=(0,n.useState)([]),{label:Z}=(0,es.f)(),G=Z(null).text,X=(0,n.useMemo)(()=>K.map(e=>({...e,label:(0,ed.f)(e.label)??G})),[K,G]),[Y,J]=(0,n.useState)(!1),Q=n.default.useRef(null),ee=n.default.useRef(null),et=n.default.useRef(null),ei=(0,r.useRouter)(),ea=(0,r.usePathname)(),en=(0,eo.f)(),{outlookLinked:eu,isStaffOrAdmin:ep}=(0,j.f)(),{unreadCount:ef}=(0,f.I)(),{userImage:em}=(0,b.E)(E?.user?.image??void 0,{enabled:!!E});(0,n.useEffect)(()=>{em&&!F&&(t=em)},[em,F]);let eh=em&&!F?em:t,eg=(0,n.useRef)(E?.user?.image);(0,n.useEffect)(()=>{E?.user?.image!==eg.current&&(eg.current=E?.user?.image,W(!1))},[E?.user?.image]),(0,n.useEffect)(()=>{q(new URLSearchParams(window.location.search).get("q")??""),O([]),V(!1)},[ea]),(0,n.useEffect)(()=>{let e=e=>{Q.current&&!Q.current.contains(e.target)&&ee.current&&!ee.current.contains(e.target)&&V(!1)};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[]);let ex=(0,n.useCallback)(e=>{(et.current&&clearTimeout(et.current),e.length<2)?O([]):et.current=setTimeout(async()=>{J(!0);try{let t=await d.k.get(`/search/suggestions?q=${encodeURIComponent(e)}`);O(t.data.suggestions||[])}catch{O([])}finally{J(!1)}},300)},[]),ey=(0,n.useCallback)(e=>{e.trim().length>=2&&(O([]),ei.push(`/search?q=${encodeURIComponent(e.trim())}`))},[ei]),eb=(0,n.useCallback)(e=>{O([]),e.value.startsWith("/")?ei.push(e.value):ei.push(`/search?q=${encodeURIComponent(e.label)}`)},[ei]),ew=async e=>{e.preventDefault(),await (0,l.signOut)({redirect:!1}),ei.push("/login")};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(m.P,{$isLoading:M,children:(0,i.jsx)(y.f,{placeholder:a?_("search.placeholder"):"Suche...",value:B,onChange:q,onSearch:ex,onSubmit:ey,suggestions:X,onSuggestionSelect:eb,loadingSuggestions:Y,noResultsText:a?_("search.noResults",{defaultValue:"Keine Ergebnisse"}):"Keine Ergebnisse",variant:"compact",showClearButton:!0,minChars:2,noMargin:!0,dataTestId:"header-search"})}),(0,i.jsxs)(m.R,{children:[A&&(0,i.jsx)(ec,{dataTestId:"view-as-mobile"}),(0,i.jsx)(C.f,{isOpen:S,onClick:T,controlsId:I.X})]}),(0,i.jsx)(m.w,{$isLoading:M,children:(z||M)&&(0,i.jsxs)(i.Fragment,{children:[A&&(0,i.jsx)(ec,{dataTestId:"view-as"}),en&&(0,i.jsx)(er,{}),ep&&eu&&(0,i.jsx)(g.f,{onClick:()=>ei.push("/mail"),icon:(0,i.jsx)(k.f,{}),tooltip:_("header.mail.tooltip",{defaultValue:"Mail"}),ariaLabel:_("header.mail.ariaLabel",{defaultValue:"Mail page"}),color:x.Z.microsoft,isActive:ea?.startsWith("/mail")}),ep&&eu&&(0,i.jsx)(g.f,{onClick:()=>ei.push("/chat"),icon:(0,i.jsx)(v.f,{}),tooltip:_("header.messages.tooltip",{defaultValue:"Messages"}),ariaLabel:_("header.messages.ariaLabel",{defaultValue:"Messages"}),color:x.Z.microsoft,isActive:ea?.startsWith("/chat")}),ep&&eu&&(0,i.jsx)(g.f,{onClick:()=>ei.push("/calendar"),icon:(0,i.jsx)($.f,{}),tooltip:_("header.calendar.tooltip",{defaultValue:"Calendar"}),ariaLabel:_("header.calendar.ariaLabel",{defaultValue:"Calendar"}),color:x.Z.microsoft,isActive:ea?.startsWith("/calendar")}),(0,i.jsxs)(m.y,{children:[(0,i.jsx)(g.f,{onClick:()=>P(e=>!e),icon:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(N.f,{}),(0,i.jsx)(R,{count:ef,dataTestId:"header-notifications-badge"})]}),tooltip:_("header.notifications.tooltip",{defaultValue:"Notifications"}),ariaLabel:_("header.notifications.ariaLabel",{defaultValue:"Notifications"}),color:x.Z.primary,isActive:H||ea?.startsWith("/notifications"),dataTestId:"header-notifications-button"}),(0,i.jsx)(D,{isOpen:H,onClose:()=>P(!1),dataTestId:"header-notification-panel"})]}),(0,i.jsxs)(m.E,{ref:ee,onMouseEnter:()=>V(!0),onMouseLeave:()=>V(!1),children:[(0,i.jsx)(m.N,{$isActive:ea?.startsWith("/profile"),onClick:()=>ei.push("/profile"),"aria-label":_("header.profile",{defaultValue:"User profile"}),title:E?.user?.name||_("header.profile",{defaultValue:"Profile"}),"data-testid":"header-avatar",children:(()=>eh?"string"==typeof eh&&(eh.includes("force.com")||(0,s.f)(eh))?(0,i.jsx)(m.Z,{children:(0,i.jsx)("img",{src:eh,alt:E?.user?.name||"User",onError:()=>W(!0)})}):(0,i.jsx)(m.Z,{children:(0,i.jsx)(o.default,{src:eh||"",alt:E?.user?.name||"User",fill:!0,sizes:"40px",priority:!0,style:{objectFit:"cover"},unoptimized:"string"==typeof eh&&eh.includes("ui-avatars.com")||"string"==typeof eh&&eh.includes("stickees.com")||"string"==typeof eh&&eh.includes("external")||"string"==typeof eh&&!eh.startsWith("/"),onError:()=>{W(!0)}})}):(0,i.jsx)(m.b,{children:(0,i.jsx)(h.f,{})}))()}),L&&(0,i.jsxs)(m.x,{ref:Q,children:[(0,i.jsx)(m.t,{onClick:()=>ei.push("/profile"),children:_("header.profile")}),(0,i.jsxs)(m.z,{"data-testid":"logout-button",onClick:()=>ew(new MouseEvent("click")),children:[(0,i.jsx)(w.f,{}),(0,i.jsx)("span",{children:_("header.logout")})]})]})]})]})})]})}e.s(["HeaderAppControls",0,eu,"default",0,eu],851724)},786743,e=>{var t=e.i(843476),i=e.i(271645),a=e.i(49958),n=e.i(14431),r=e.i(501496),o=e.i(218595),s=e.i(49323),l=e.i(597826),d=e.i(889397);let c=(0,i.createContext)(void 0);e.s(["V",0,function({children:e}){let{data:u}=(0,a.useSession)(),p=(0,d.f)(),[f,m]=(0,i.useState)([]),[h,g]=(0,i.useState)(0),[x,y]=(0,i.useState)(!1),b=(0,i.useRef)(null),w=(0,i.useRef)(null),k=(0,i.useRef)(0),v=(0,i.useRef)(()=>{}),$=(0,i.useRef)(!1),j=(0,l.j)(),C=j.data?.unreadCount,I=j.isError||j.isSuccess&&null==C,N=(0,i.useCallback)(async()=>{$.current=!0;try{y(!0);let e=await r.k.get("/notifications/?limit=20");m(e.data.data||[])}catch{$.current=!1}finally{y(!1)}},[]),_=(0,i.useCallback)(async()=>{$.current||await N()},[N]),S=(0,i.useCallback)(async()=>{try{let e=await r.k.get("/notifications/unread-count");g(e.data.data?.count||0)}catch{}},[]),R=(0,i.useCallback)(async()=>{await Promise.all([N(),S()])},[N,S]),T=(0,i.useCallback)(async e=>{try{await r.k.patch(`/notifications/${e}/read`),m(t=>t.map(t=>t.id===e?{...t,isRead:!0,readAt:new Date().toISOString()}:t)),g(e=>Math.max(0,e-1))}catch{}},[]),E=(0,i.useCallback)(async()=>{try{await r.k.patch("/notifications/read-all"),m(e=>e.map(e=>({...e,isRead:!0,readAt:new Date().toISOString()}))),g(0)}catch{}},[]),U=(0,i.useCallback)(()=>{b.current&&b.current.close();let e=new EventSource("/api/notifications/events/");b.current=e,e.onopen=()=>{k.current=0},e.onmessage=e=>{try{let t=JSON.parse(e.data);if("notification"===t.type){let e=t.payload;m(t=>[e,...t.slice(0,19)]),g(e=>e+1)}else"unread_count"===t.type&&g(t.payload.count)}catch{}},e.onerror=()=>{e.close(),b.current=null,k.current++,n.v({category:"sse",message:`SSE notification connection lost (reconnect #${k.current})`,level:"warning"}),3===k.current&&n.T("SSE notification connection failing repeatedly",{level:"warning",tags:{component:"notifications",reconnectCount:String(k.current)}}),k.current>6||(w.current=setTimeout(()=>{v.current()},Math.min(5e3*2**(k.current-1),6e4)))}},[]);return v.current=U,(0,i.useEffect)(()=>{"number"==typeof C&&g(C)},[C]),(0,i.useEffect)(()=>{I&&S()},[I,S]),(0,i.useEffect)(()=>((0,o.V)(p),()=>(0,o.V)(!1)),[p]),(0,i.useEffect)(()=>(p&&u&&!(0,s.f)()&&U(),()=>{b.current&&(b.current.close(),b.current=null),w.current&&(clearTimeout(w.current),w.current=null)}),[p,u,U]),(0,t.jsx)(c.Provider,{value:{notifications:f,unreadCount:h,isLoading:x,markAsRead:T,markAllAsRead:E,refreshNotifications:R,loadNotifications:_},children:e})},"I",0,function(){let e=(0,i.useContext)(c);if(void 0===e)throw Error("useNotifications must be used within a NotificationProvider");return e}])},253286,627056,e=>{var t=e.i(843476),i=e.i(271645),a=e.i(770703),n=e.i(191476),r=e.i(501496),o=e.i(218595),s=e.i(49323),l=e.i(696984),d=e.i(597826),c=e.i(889397),u=e.i(24024),p=e.i(882109);function f(){let e=(0,c.f)(),{userContext:t}=(0,u.f)();return!!e&&!!t&&(0,p.A)(t,"working-hours","create")}e.s(["f",0,f],627056);let m=(0,a.default)(()=>e.A(752786).then(e=>e.WorkingHoursTimerDialogs),{loadableGenerated:{modules:[837828]},ssr:!1}),h={status:"idle",sessionId:null,startedAt:null,lastEventAt:null,pausedMs:0,pausedSince:null},g=(0,i.createContext)(void 0);function x(e){if("idle"===e.status||!e.startedAt)return 0;let t=new Date(e.startedAt).getTime(),i=Date.now(),a=i-t-e.pausedMs;return"paused"===e.status&&e.pausedSince&&(a-=i-new Date(e.pausedSince).getTime()),a<0?0:a}function y(e){if("idle"===e.status)return 0;let t=e.pausedMs;return"paused"===e.status&&e.pausedSince&&(t+=Date.now()-new Date(e.pausedSince).getTime()),t<0?0:t}e.s(["M",0,function({children:e}){let{tr:a}=(0,l.w)(),c=f(),[u,p]=(0,i.useState)(h),[b,w]=(0,i.useState)([]),[k,v]=(0,i.useState)(!1),[$,j]=(0,i.useState)(!1),[C,I]=(0,i.useState)(0),[N,_]=(0,i.useState)(0),[S,R]=(0,i.useState)(null),T=(0,i.useRef)(null);T.current=S;let[E,U]=(0,i.useState)(null),z=(0,i.useRef)(!1),M=(0,i.useRef)(null),A=(0,i.useRef)(null),L=(0,i.useRef)(0),V=(0,d.j)(),H=V.data?.timer,P=V.dataUpdatedAt,F=V.isError,W=(0,i.useRef)(!1),D=(0,i.useCallback)(async()=>{if(!(!c||(0,s.f)()))try{let{events:e,...t}=(await r.k.get("/plastship/working-hours/timer/active/")).data.data??h;p(t),w(e??[])}catch{}finally{v(!0)}},[c]);(0,i.useEffect)(()=>{if(!c||(0,s.f)())return;L.current=0;let e=()=>{M.current&&M.current.close();let t=new EventSource("/api/plastship/working-hours/timer/stream/");M.current=t,t.onopen=()=>{L.current=0},t.onmessage=e=>{try{let t=JSON.parse(e.data);"state-change"===t.type&&t.payload&&(p(t.payload.state),w(t.payload.events??[]),"idle"===t.payload.state.status&&R(null))}catch{}},t.onerror=()=>{if(t.close(),M.current=null,A.current&&clearTimeout(A.current),L.current>=6)return;let i=Math.min(3e3*2**L.current,6e4);L.current+=1,A.current=setTimeout(e,i)}};return e(),()=>{A.current&&clearTimeout(A.current),M.current?.close(),M.current=null}},[c]),(0,i.useEffect)(()=>{if("u"<typeof document)return;let e=()=>{"visible"===document.visibilityState&&D()};return document.addEventListener("visibilitychange",e),()=>document.removeEventListener("visibilitychange",e)},[D]),(0,i.useEffect)(()=>{if(!c||(0,s.f)()){W.current=!1,p(h),w([]),v(!0);return}if(!W.current&&0!==P){if(W.current=!0,H){let{events:e,...t}=H;p(t),w(e??[])}v(!0)}},[c,P]),(0,i.useEffect)(()=>{c&&F&&D()},[c,F,D]),(0,i.useEffect)(()=>{if(I(x(u)),_(y(u)),"idle"===u.status)return;let e=window.setInterval(()=>{I(x(u)),_(y(u))},1e3);return()=>window.clearInterval(e)},[u]);let B=(0,i.useCallback)(async(e,t)=>{if(z.current)return{createdEntryIds:[]};z.current=!0,j(!0);let i="u">typeof crypto&&"randomUUID"in crypto?crypto.randomUUID():`${Date.now()}-${Math.random().toString(36).slice(2)}`;try{let n=await r.k.post("/plastship/working-hours/timer/events/",{type:e,clientId:i,..."stop"===e&&t?.actualEnd?{actualEnd:t.actualEnd}:{},..."stop"===e&&t?.discard?{discard:!0}:{}});p(n.data.data.state),w(n.data.data.events??[]),R(null),U(null);let s=n.data.data.createdEntryIds??[];return"stop"===e&&s.length>0?o.c.success(a("workingHoursTimer.saved",{defaultValue:"Arbeitszeit gespeichert"}),{context:{entityType:"WorkingHoursEntry",entityId:s[0],action:a("notifications.action.created",{defaultValue:"Erstellt"})}}):"stop"!==e||t?.discard||o.c.info(a("workingHoursTimer.tooShort",{defaultValue:"Unter einer Minute – kein Eintrag angelegt"})),{createdEntryIds:s}}catch(i){let e=(0,n.f)(i)?i.response?.data:void 0,t=e?.code??"error";return e?.state&&p(e.state),"forgotten"===t&&e?.startedAt?R({code:"forgotten",startedAt:e.startedAt}):"conflict"===t?R({code:"conflict",issues:e?.issues??[],proposed:e?.proposed??[]}):T.current||(U(t),o.c.error(a("workingHoursTimer.error",{defaultValue:"Timer-Aktion fehlgeschlagen"}))),{createdEntryIds:[],error:t}}finally{z.current=!1,j(!1)}},[a]),q=(0,i.useCallback)(()=>R(null),[]),K=(0,i.useMemo)(()=>({enabled:c,state:u,events:b,isHydrated:k,pending:$,elapsedMs:C,breakMs:N,postEvent:B,problem:S,clearProblem:q,lastError:E,refresh:D}),[c,u,b,k,$,C,N,B,S,q,E,D]);return(0,t.jsxs)(g.Provider,{value:K,children:[e,S&&(0,t.jsx)(m,{})]})},"x",0,function(e){if(e<=0)return"00:00";let t=Math.floor(e/1e3),i=Math.floor(t/3600),a=Math.floor(t%3600/60),n=t%60,r=e=>e.toString().padStart(2,"0");return i>0?`${i}:${r(a)}:${r(n)}`:`${r(a)}:${r(n)}`},"Y",0,function(){let e=(0,i.useContext)(g);if(!e)throw Error("useWorkingHoursTimer must be used within WorkingHoursTimerProvider");return e}],253286)},555508,e=>{e.i(821194);var t=e.i(99222),i=e.i(929666);e.s(["f",0,function(){let{i18n:e}=(0,t.f)();return(0,i.j)(e?.language)}])},635228,e=>{var t=e.i(266027),i=e.i(954616),a=e.i(912598),n=e.i(501496),r=e.i(597826);e.s(["i",0,e=>(0,t.f)({queryKey:["rigk-map-accounts",e?.limit,e?.filters],queryFn:async()=>(await n.k.get("/rigk/accounts/map",{params:{limit:e?.limit||1e3,...e?.filters}})).data,staleTime:12e4,retry:3,enabled:e?.enabled!==!1}),"$",0,(e,i)=>(0,t.f)({queryKey:["salesforce-map-accounts",e],queryFn:async()=>(await n.k.get("/salesforce/accounts/map",{params:e})).data,staleTime:12e4,retry:3,enabled:!i?.skip&&i?.enabled!==!1,refetchInterval:i?.refetchInterval}),"q",0,()=>{let e=(0,a.d)(),t=(0,r.x)();return(0,i.f)({mutationFn:async e=>(await n.k.put("/plastship/user/profile",e)).data.user,onSuccess:i=>{e.invalidateQueries({queryKey:["user-profile"]}),t(e=>({...e,profile:{...e.profile,...i}}))}})},"E",0,(e,t)=>{let i=(0,r.j)(),a=t?.enabled??!0;return{userImage:(a?i.data?.profile?.image:void 0)||e,isLoading:a&&i.isLoading,error:i.error??void 0}},"y",0,e=>(0,t.f)({queryKey:["user-profile"],queryFn:async()=>(await n.k.get("/plastship/user/profile")).data,staleTime:6e4,retry:3,enabled:e?.enabled})])},193233,e=>{var t=e.i(437992);let i=e=>"element"===e.type,a=e=>Array.isArray(e)?e.map(String):"string"==typeof e?e.split(/\s+/).filter(Boolean):[];e.s(["f",0,function(){return e=>{let n=e=>{for(let r of e)if(i(r)){if("a"===r.tagName){let e=r.properties.href;if("string"==typeof e&&(0,t.b)(e)){let e=a(r.properties.rel);for(let i of t.Z.split(" "))e.some(e=>e.toLowerCase()===i)||e.push(i);r.properties.rel=e,r.properties.target="_blank",r.properties.referrerPolicy=t.T}}n(r.children)}};n(e.children)}}])},918274,e=>{let t="(?:[a-z0-9]{10,40}|[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})";RegExp(`^${t}$`),e.s(["Y",0,1048576,"p",0,["image/jpeg","image/png","image/webp"],"k",0,512,"I",0,t])},475352,e=>{var t=e.i(918274);let i=RegExp(`^\\/api\\/profile-picture\\/${t.I}\\/(\\?v=\\d+)?$`);e.s(["f",0,function(e){return"string"==typeof e&&i.test(e)}])},191476,e=>{let{Axios:t,AxiosError:i,CanceledError:a,isCancel:n,CancelToken:r,VERSION:o,all:s,Cancel:l,isAxiosError:d,spread:c,toFormData:u,AxiosHeaders:p,HttpStatusCode:f,formToJSON:m,getAdapter:h,mergeConfig:g,create:x}=e.i(581949).f;e.s(["f",0,d])}])})();