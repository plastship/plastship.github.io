(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,370891,114009,e=>{var t=e.i(843476),i=e.i(495835);e.i(821194);var a=e.i(99222);let n={assistant:{key:"ai.label.assistant",defaultValue:"KI-Assistent: Antworten werden von einer KI erzeugt und können Fehler enthalten."},voice:{key:"ai.label.voice",defaultValue:"KI-Sprachfunktion: Ihre Sprache wird per KI in Text umgewandelt, Antworten liest eine synthetische Stimme vor."},machineTranslation:{key:"ai.label.machineTranslation",defaultValue:"Diese Fassung wurde mit KI maschinell übersetzt."},analysis:{key:"ai.label.analysis",defaultValue:"KI-Analyse"},machineUiTranslation:{key:"ai.label.machineUiTranslation",defaultValue:"Die Oberfläche ist in dieser Sprache teilweise maschinell übersetzt."}},l={key:"ai.label.badge",defaultValue:"KI"},o={key:"ai.label.original",defaultValue:"Zur deutschen Originalfassung"};e.s(["Z",0,l,"N",0,o,"l",0,n,"O",0,function(e){return!!(e&&(e.aiAnalyzedAt||e.aiModel))},"m",0,function(e,t){return!!t?.includes(e)}],114009);var r=e.i(178446),s=e.i(997053);let d=s.U.span.withConfig({displayName:"AiLabel.styles__Root",componentId:"sc-107ca0c3-0"})`
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
`,h=s.U.span.withConfig({displayName:"AiLabel.styles__Text",componentId:"sc-107ca0c3-2"})``,m=s.U.a.withConfig({displayName:"AiLabel.styles__OriginalLink",componentId:"sc-107ca0c3-3"})`
  color: inherit;
  text-decoration: underline;
`;e.s(["f",0,({kind:e,dataTestId:s,compact:p=!1,originalHref:f,className:u})=>{let{tr:g}=(0,a.f)(),b=g(n[e].key,{defaultValue:n[e].defaultValue});return(0,t.jsxs)(d,{className:u,"data-testid":s??`ai-label-${e}`,"data-kind":e,role:"note",title:p?b:void 0,"aria-label":p?b:void 0,children:[(0,t.jsxs)(c,{"data-testid":`${s??`ai-label-${e}`}-badge`,children:[(0,t.jsx)(i.f,{}),g(l.key,{defaultValue:l.defaultValue})]}),!p&&(0,t.jsx)(h,{children:b}),f&&(0,t.jsx)(m,{href:(0,r.f)(f),hrefLang:"de","data-testid":`${s??`ai-label-${e}`}-original`,children:g(o.key,{defaultValue:o.defaultValue})})]})}],370891)},929842,619249,e=>{e.s(["K",()=>d,"D",()=>s],929842),e.s(["W",()=>r,"B",()=>l],619249);var t,i=e.i(843476),a=e.i(997053);let n=a.m`
  word-wrap: break-word;
  width: 100%;
  margin-bottom: ${({theme:e})=>e.margin.default};
  font-family: ${({theme:e})=>e.font.primaryFamily};
  text-transform: uppercase;
  word-wrap: break-word;
`,l=(e,t="desktop")=>a.m`
  ${({theme:i})=>{let n=i.font.headline[(e=>{switch(e){case s.h1:return"one";case s.h2:return"two";case s.h3:return"three";case s.h4:return"four";case s.h5:return"five";default:return"one"}})(e)][t];return a.m`
      font-size: ${n.fontSize};
      line-height: ${n.lineHeight};
      font-weight: ${n.fontWeight};
      letter-spacing: ${n.letterSpacing};
    `}}
`,o=a.m`
  ${n}
  ${({$styleLevel:e})=>l(e,"mobile")}

  @media screen and (min-width: ${({theme:e})=>e.device.mobile}) {
    ${({$styleLevel:e})=>l(e,"desktop")}
  }
`,r=a.U.h1.withConfig({displayName:"Headline.styles__StyledHeadline",componentId:"sc-aba532a1-0"})`
  ${o}
`;var s=((t={})[t.h1=1]="h1",t[t.h2=2]="h2",t[t.h3=3]="h3",t[t.h4=4]="h4",t[t.h5=5]="h5",t);let d=e=>{let{children:t,className:a,importance:n,renderAs:l,dataTestId:o}=e;return(0,i.jsx)(r,{as:(e=>{switch(e){case 1:default:return"h1";case 2:return"h2";case 3:return"h3";case 4:return"h4";case 5:return"h5"}})(n),$styleLevel:l||n,className:a,"data-testid":o||"Headline-root",children:t})}},400324,e=>{var t=e.i(843476),i=e.i(997053);let a=i.U.svg.withConfig({displayName:"IconDelete.styles__Root",componentId:"sc-5dafb3ce-0"})``;e.s(["f",0,e=>(0,t.jsx)(a,{className:e.className,"data-testid":"icon-delete-root",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("path",{d:"M4 6.17647H20M10 16.7647V10.4118M14 16.7647V10.4118M16 21H8C6.89543 21 6 20.0519 6 18.8824V7.23529C6 6.65052 6.44772 6.17647 7 6.17647H17C17.5523 6.17647 18 6.65052 18 7.23529V18.8824C18 20.0519 17.1046 21 16 21ZM10 6.17647H14C14.5523 6.17647 15 5.70242 15 5.11765V4.05882C15 3.47405 14.5523 3 14 3H10C9.44772 3 9 3.47405 9 4.05882V5.11765C9 5.70242 9.44772 6.17647 10 6.17647Z",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})],400324)},495835,e=>{let t=e.i(890603).f;e.s(["f",0,t])},48574,e=>{var t=e.i(843476),i=e.i(997053);let a=i.U.svg.withConfig({displayName:"IconVolume.styles__Root",componentId:"sc-e7c1eb72-0"})``;e.s(["f",0,e=>(0,t.jsxs)(a,{className:e.className,"data-testid":"icon-volume-root",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,t.jsx)("title",{children:"volume-up"}),(0,t.jsxs)("g",{strokeLinecap:"square",strokeLinejoin:"miter",strokeMiterlimit:"10",children:[(0,t.jsx)("path",{d:"M14 21L8 16H4C2.89543 16 2 15.1046 2 14V10C2 8.89543 2.89543 8 4 8H8L14 3V21Z",stroke:"currentColor",strokeWidth:"2",fill:"none"}),(0,t.jsx)("path",{d:"M17.5355 8.46448C18.4403 9.3693 19 10.6193 19 12C19 13.3807 18.4403 14.6307 17.5355 15.5355",stroke:"currentColor",strokeWidth:"2",fill:"none"}),(0,t.jsx)("path",{d:"M20.364 5.63605C21.9926 7.26473 23 9.51473 23 12C23 14.4853 21.9926 16.7353 20.364 18.364",stroke:"currentColor",strokeWidth:"2",fill:"none"})]})]})],48574)},960291,305926,201357,e=>{var t,i=e.i(843476),a=e.i(918789),n=e.i(997053),l=((t={}).block="block",t.inline="inline",t);let o=n.m`
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
`,r=n.m`
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

  ${e=>"block"===e.$mode?o:r}
`;e.s(["n",0,d,"b",()=>l,"F",0,c,"a",0,s],305926);var h=e.i(929842),m=e.i(703089);let p=n.U.ol.withConfig({displayName:"OrderedList.styles__Root",componentId:"sc-d33153d1-0"})`
  margin-bottom: ${e=>e.theme.margin.default};
  max-width: 40rem;
  list-style-type: none;
  li::before {
    content: counter(list-item-counter) '. ';
  }
`,f=e=>{let{children:t}=e;return(0,i.jsx)(p,{className:e.className,"data-testid":"ordered-list-root",children:t})};var u=e.i(271645);let g=n.U.ul.withConfig({displayName:"UnorderedList.styles__Root",componentId:"sc-54b80dbe-0"})`
  margin-bottom: ${e=>e.theme.margin.default};
  max-width: 40rem;
  list-style-type: ${e=>e.$icon?"none":"disc"};
  padding-left: ${e=>e.$icon?"0":"1.5em"};
`,b=e=>{let{children:t,icon:a,dataTestId:n}=e,l=a?u.default.Children.map(t,e=>u.default.isValidElement(e)?u.default.cloneElement(e,{icon:a}):e):t;return(0,i.jsx)(g,{className:e.className,$icon:a?"true":void 0,"data-testid":n||"unordered-list-root",children:l})};var x=e.i(852590),y=e.i(559173);let w=n.U.li.withConfig({displayName:"ListItem.styles__Root",componentId:"sc-c8445b7d-0"})`
  margin-bottom: ${e=>e.theme.margin.small};
  position: relative;
  padding-left: ${e=>"true"===e.hasicon?"28px":"0"};
  ${(0,y.$)(m.g.body)}
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
`;(0,n.U)(x.f).withConfig({displayName:"ListItem.styles__StyledText",componentId:"sc-c8445b7d-2"})`
  margin: 0;
`;let $=e=>{let{children:t,icon:a,dataTestId:n}=e,l=void 0!==e.icon&&null!==e.icon;return(0,i.jsxs)(w,{className:e.className,"data-testid":n??"list-item-root",hasicon:l.toString(),children:[l&&(0,i.jsx)(k,{children:a}),t]})},v=n.U.blockquote.withConfig({displayName:"Blockqoute.styles__Root",componentId:"sc-c7e2eb3-0"})`
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
`,j=e=>{let{children:t,className:a}=e;return(0,i.jsx)(v,{className:a,"data-testid":"blockqoute-root",children:t})},C=n.U.hr.withConfig({displayName:"HorizontalRule.styles__Root",componentId:"sc-27e0583-0"})`
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
`,_=e=>(0,i.jsx)(C,{className:e.className,"data-testid":"horizontal-rule-root"}),N=n.U.a.withConfig({displayName:"InlineLink.styles__Root",componentId:"sc-68a2fdb5-0"})`
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
`;var I=e.i(437992);let U=e=>{let{children:t,href:a,target:n,rel:l,dataTestId:o,className:r}=e,s=(0,I.a)(a,{target:n,rel:l});return(0,i.jsx)(N,{href:a,...s,className:r,"data-testid":o||"inline-link-root",children:t})},z="'SF Mono', 'Monaco', 'Menlo', 'Consolas', monospace",L=n.U.code.withConfig({displayName:"CodeBlock.styles__InlineCode",componentId:"sc-82b3b1ee-0"})`
  font-family: ${z};
  font-size: 0.875em;
  /* aus dem Theme — fest #f1f3f5/#d63384 war im Dunkelmodus ein heller Fleck im dunklen Text */
  background-color: ${e=>e.theme.palette.code.background};
  color: ${e=>e.theme.palette.code.text};
  padding: 1px 6px;
  border-radius: 3px;
  word-break: break-word;
`,S=n.U.pre.withConfig({displayName:"CodeBlock.styles__Pre",componentId:"sc-82b3b1ee-1"})`
  margin: 0 0 ${e=>e.theme.margin.default} 0;
  padding: 12px 16px;
  /* #1886: aus dem Theme — fest #f8f9fa war im Dunkelmodus hell unter hellem Text */
  background-color: ${e=>e.theme.palette.surface.subtle};
  border-radius: 6px;
  overflow-x: auto;
  -webkit-font-smoothing: antialiased;
`,V=n.U.code.withConfig({displayName:"CodeBlock.styles__BlockCode",componentId:"sc-82b3b1ee-2"})`
  font-family: ${z};
  font-size: 13px;
  line-height: 1.6;
  color: ${e=>e.theme.palette.default.black};
  background-color: transparent;
  padding: 0;
`,M=e=>{let{children:t,inline:a=!1,dataTestId:n,className:l}=e;return a?(0,i.jsx)(L,{className:l,"data-testid":n||"code-inline-root",children:t}):(0,i.jsx)(S,{className:l,"data-testid":n||"code-block-root",children:(0,i.jsx)(V,{children:t})})};e.s(["f",0,M],201357);var T=e.i(193233);let A=e=>function({src:t,alt:a}){let n="string"==typeof t?t:void 0,l=n&&e?e(n):{src:n};return(0,i.jsx)(d,{src:l.src,width:l.width,height:l.height,alt:a??"",loading:"lazy","data-testid":"markdown-image","data-sized":l.width&&l.height?"true":"false"})},B={h1:({children:e})=>(0,i.jsx)(h.K,{importance:h.D.h1,children:e}),h2:({children:e})=>(0,i.jsx)(h.K,{importance:h.D.h2,children:e}),h3:({children:e})=>(0,i.jsx)(h.K,{importance:h.D.h3,children:e}),h4:({children:e})=>(0,i.jsx)(h.K,{importance:h.D.h4,children:e}),h5:({children:e})=>(0,i.jsx)(h.K,{importance:h.D.h5,children:e}),p:({children:e})=>(0,i.jsx)(m.p,{variant:m.g.body,children:e}),ul:({children:e,className:t})=>(0,i.jsx)(b,{className:t,children:e}),ol:({children:e})=>(0,i.jsx)(f,{children:e}),li:({children:e,className:t})=>(0,i.jsx)($,{className:t,children:e}),blockquote:({children:e})=>(0,i.jsx)(j,{children:e}),hr:()=>(0,i.jsx)(_,{}),a:({href:e,children:t})=>(0,i.jsx)(U,{href:e||"#",target:"_blank",children:t}),table:({children:e})=>(0,i.jsx)(s,{"data-testid":"markdown-table",children:(0,i.jsx)("table",{children:e})}),img:A(),code:({children:e,className:t})=>(0,i.jsx)(M,{inline:!t,children:e}),pre:({children:e})=>(0,i.jsx)(i.Fragment,{children:e})},K=new WeakMap,H=new WeakMap,P={},R={h1:({children:e})=>(0,i.jsx)("span",{children:e}),h2:({children:e})=>(0,i.jsx)("span",{children:e}),h3:({children:e})=>(0,i.jsx)("span",{children:e}),h4:({children:e})=>(0,i.jsx)("span",{children:e}),h5:({children:e})=>(0,i.jsx)("span",{children:e}),p:({children:e})=>(0,i.jsx)("span",{children:e}),ul:({children:e})=>(0,i.jsx)("span",{children:e}),ol:({children:e})=>(0,i.jsx)("span",{children:e}),li:({children:e})=>(0,i.jsxs)("span",{children:[e," "]}),blockquote:({children:e})=>(0,i.jsx)("span",{children:e}),hr:()=>(0,i.jsx)("span",{children:" — "}),a:({href:e,children:t})=>(0,i.jsx)(U,{href:e||"#",children:t}),code:({children:e})=>(0,i.jsx)(M,{inline:!0,children:e}),pre:({children:e})=>(0,i.jsx)("span",{children:e})},F=[T.f],W=({content:e,mode:t=l.block,dataTestId:n="markdown-renderer-root",className:o,remarkPlugins:r,resolveImage:s,renderCodeBlock:d})=>{if(!e)return(0,i.jsx)(c,{$mode:t,"data-testid":n,className:o});let h=t===l.block?function(e,t){let a=B;if(e){let t=K.get(e);t||(t={...B,img:A(e)},K.set(e,t)),a=t}if(!t)return a;let n=e??P,l=H.get(n);l||(l=new WeakMap,H.set(n,l));let o=l.get(t);!o&&(o={...a,code:function({children:e,className:a}){let n=a?/(?:^|\s)language-([\w-]+)/.exec(a)?.[1]:void 0;if(n){let a=t(n,String(e??""));if(null!=a)return(0,i.jsx)(i.Fragment,{children:a})}return(0,i.jsx)(M,{inline:!a,children:e})}},l.set(t,o));return o}(s,d):R;return(0,i.jsx)(c,{$mode:t,"data-testid":n,className:o,children:(0,i.jsx)(a.f,{components:h,remarkPlugins:r,rehypePlugins:F,children:e})})};e.s(["B",0,W,"U",0,W],960291)},384768,e=>{e.i(960291).B,e.s([])},315295,e=>{var t=e.i(997053),i=e.i(547905);let a=t.q`
  0% { filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.15)) drop-shadow(0 0 0 rgba(55, 186, 36, 0.5)); }
  70% { filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.15)) drop-shadow(0 0 12px rgba(55, 186, 36, 0)); }
  100% { filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.15)) drop-shadow(0 0 0 rgba(55, 186, 36, 0)); }
`,n=t.m`
  position: fixed;
  bottom: 24px;
  z-index: 998;
  width: 56px;
  height: 56px;
  border: none;
  background: none;
  color: ${({theme:e})=>e.palette.text.onLight};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  isolation: isolate;
  filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.15));
  transition:
    transform 0.2s ease,
    filter 0.2s ease;
  padding: 0;

  /* #1749: weiße Fläche, Symbol in festem Dunkelblau (text.onLight) — hell wie dunkel;
     das helle Dark-Primär #60A0E8 erreicht auf Weiß nur 2,7 : 1 */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: -1;
    background: ${({theme:e})=>e.palette.surface.floating};
    ${i.p}
  }

  &::after {
    content: '';
    position: absolute;
    inset: -4px;
    z-index: -2;
    background: ${({theme:e})=>e.palette.default.secondary};
    opacity: 0;
    ${i.p}
  }

  &:hover {
    transform: scale(1.08);
    filter: drop-shadow(0 6px 20px rgba(0, 0, 0, 0.2));
  }

  &:active {
    transform: scale(0.95);
  }

  &:focus-visible {
    outline: none;
  }

  &:focus-visible::after {
    opacity: 1;
  }
`,l=t.U.button.withConfig({displayName:"PiaToggleButton.styles__ToggleButton",componentId:"sc-c0d6ac9c-0"})`
  ${n}
  right: 24px;

  /* Pulse animation when chat is closed (attention grabber, 3 pulses then stops) */
  ${({$isOpen:e})=>!e&&t.m`
      animation: ${a} 2s 3;
    `}
`,o=t.U.img.withConfig({displayName:"PiaToggleButton.styles__AvatarImage",componentId:"sc-c0d6ac9c-1"})`
  width: 48px;
  height: 48px;
  ${i.p}
  object-fit: cover;
  pointer-events: none;
`,r=t.U.span.withConfig({displayName:"PiaToggleButton.styles__CloseIcon",componentId:"sc-c0d6ac9c-2"})`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.palette.text.onLight};
`;e.s(["Z",0,o,"U",0,r,"K",0,l,"u",0,n])},852590,e=>{let t=e.i(703089).p;e.s(["f",0,t])},555508,e=>{e.i(821194);var t=e.i(99222),i=e.i(929666);e.s(["f",0,function(){let{i18n:e}=(0,t.f)();return(0,i.j)(e?.language)}])},193233,e=>{var t=e.i(437992);let i=e=>"element"===e.type,a=e=>Array.isArray(e)?e.map(String):"string"==typeof e?e.split(/\s+/).filter(Boolean):[];e.s(["f",0,function(){return e=>{let n=e=>{for(let l of e)if(i(l)){if("a"===l.tagName){let e=l.properties.href;if("string"==typeof e&&(0,t.b)(e)){let e=a(l.properties.rel);for(let i of t.Z.split(" "))e.some(e=>e.toLowerCase()===i)||e.push(i);l.properties.rel=e,l.properties.target="_blank",l.properties.referrerPolicy=t.T}}n(l.children)}};n(e.children)}}])},178446,e=>{e.s(["f",0,function(e){if(!e.startsWith("/")||e.startsWith("//"))return e;let t=e.search(/[?#]/),i=-1===t?e:e.slice(0,t),a=-1===t?"":e.slice(t);return`${i.endsWith("/")||i.slice(i.lastIndexOf("/")+1).includes(".")?i:`${i}/`}${a}`}])},253375,332480,e=>{var t=e.i(510466);let i=["de","en-GB"],a=[{value:"",label:"Automatisch"},...i.map(e=>({value:e,label:t.Z[e]?.native??e}))];e.s(["P",0,a,"a",0,"","C",0,function(e,a=i){if("string"!=typeof e)return null;let n=e.trim();if(""===n)return null;let l=(0,t.Q)(n)?n:(0,t.z)(n),o=/^de\b|^deutsch$|^german$/i.test(n);return((0,t.Q)(n)||"de"!==l||o)&&a.includes(l)?l:null}],332480),e.s(["v",0,[{value:"plasticwoman",label:"Plastic Woman",image:"/images/pia/plasticwoman.webp"},{value:"plasticman",label:"Plastic Man",image:"/images/pia/plasticman.webp"},{value:"plastikbot",label:"Plastik Bot",image:"/images/pia/plastikbot.webp"}],"S",0,[{value:"professional",label:"Professionell",description:"Sachlich und detailliert"},{value:"casual",label:"Locker",description:"Freundlich und umgangssprachlich"},{value:"concise",label:"Kurz & knapp",description:"Nur die wichtigsten Fakten"}]],253375)}])})();