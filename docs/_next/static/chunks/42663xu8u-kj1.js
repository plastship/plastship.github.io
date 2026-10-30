(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,[964255,e=>{e.S([960291,"MarkdownRenderer,B,default,U",0,305926,"MarkdownRendererMode,b"])},960291,305926,201357,e=>{var t,i=e.i(843476),n=e.i(918789),o=e.i(997053),l=((t={}).block="block",t.inline="inline",t);let a=o.m`
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
`,r=o.m`
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
`,s=o.U.div.withConfig({displayName:"MarkdownRenderer.styles__TableScroll",componentId:"sc-e731612a-0"})`
  max-width: 100%;
  overflow-x: auto;
  margin: 0 0 8px 0;

  table {
    margin: 0;
  }
`,d=o.U.img.withConfig({displayName:"MarkdownRenderer.styles__MarkdownImage",componentId:"sc-e731612a-1"})`
  max-width: 100%;
  height: auto;
`,c=o.U.div.withConfig({displayName:"MarkdownRenderer.styles__Root",componentId:"sc-e731612a-2"})`
  font-family: ${e=>e.theme.font.secondaryFamily};
  font-size: 14px;
  color: ${e=>e.theme.palette.default.black};
  -webkit-font-smoothing: antialiased;
  word-wrap: break-word;

  ${e=>"block"===e.$mode?a:r}
`;e.s(["n",0,d,"b",()=>l,"F",0,c,"a",0,s],305926);var m=e.i(929842),h=e.i(703089);let p=o.U.ol.withConfig({displayName:"OrderedList.styles__Root",componentId:"sc-d33153d1-0"})`
  margin-bottom: ${e=>e.theme.margin.default};
  max-width: 40rem;
  list-style-type: none;
  li::before {
    content: counter(list-item-counter) '. ';
  }
`,f=e=>{let{children:t}=e;return(0,i.jsx)(p,{className:e.className,"data-testid":"ordered-list-root",children:t})};var g=e.i(271645);let u=o.U.ul.withConfig({displayName:"UnorderedList.styles__Root",componentId:"sc-54b80dbe-0"})`
  margin-bottom: ${e=>e.theme.margin.default};
  max-width: 40rem;
  list-style-type: ${e=>e.$icon?"none":"disc"};
  padding-left: ${e=>e.$icon?"0":"1.5em"};
`,b=e=>{let{children:t,icon:n,dataTestId:o}=e,l=n?g.default.Children.map(t,e=>g.default.isValidElement(e)?g.default.cloneElement(e,{icon:n}):e):t;return(0,i.jsx)(u,{className:e.className,$icon:n?"true":void 0,"data-testid":o||"unordered-list-root",children:l})};var x=e.i(852590),y=e.i(559173);let k=o.U.li.withConfig({displayName:"ListItem.styles__Root",componentId:"sc-c8445b7d-0"})`
  margin-bottom: ${e=>e.theme.margin.small};
  position: relative;
  padding-left: ${e=>"true"===e.hasicon?"28px":"0"};
  ${(0,y.$)(h.g.body)}
  text-decoration: none;
  counter-increment: list-item-counter;
  text-align: left;
  p {
    margin: 0;
  }
`,w=o.U.div.withConfig({displayName:"ListItem.styles__Icon",componentId:"sc-c8445b7d-1"})`
  position: absolute;
  left: 2px;
  top: 0;
`;(0,o.U)(x.f).withConfig({displayName:"ListItem.styles__StyledText",componentId:"sc-c8445b7d-2"})`
  margin: 0;
`;let j=e=>{let{children:t,icon:n,dataTestId:o}=e,l=void 0!==e.icon&&null!==e.icon;return(0,i.jsxs)(k,{className:e.className,"data-testid":o??"list-item-root",hasicon:l.toString(),children:[l&&(0,i.jsx)(w,{children:n}),t]})},$=o.U.blockquote.withConfig({displayName:"Blockqoute.styles__Root",componentId:"sc-c7e2eb3-0"})`
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
`,v=e=>{let{children:t,className:n}=e;return(0,i.jsx)($,{className:n,"data-testid":"blockqoute-root",children:t})},N=o.U.hr.withConfig({displayName:"HorizontalRule.styles__Root",componentId:"sc-27e0583-0"})`
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
`,_=e=>(0,i.jsx)(N,{className:e.className,"data-testid":"horizontal-rule-root"}),C=o.U.a.withConfig({displayName:"InlineLink.styles__Root",componentId:"sc-68a2fdb5-0"})`
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
`;var I=e.i(437992);let U=e=>{let{children:t,href:n,target:o,rel:l,dataTestId:a,className:r}=e,s=(0,I.a)(n,{target:o,rel:l});return(0,i.jsx)(C,{href:n,...s,className:r,"data-testid":a||"inline-link-root",children:t})},z="'SF Mono', 'Monaco', 'Menlo', 'Consolas', monospace",R=o.U.code.withConfig({displayName:"CodeBlock.styles__InlineCode",componentId:"sc-82b3b1ee-0"})`
  font-family: ${z};
  font-size: 0.875em;
  /* aus dem Theme — fest #f1f3f5/#d63384 war im Dunkelmodus ein heller Fleck im dunklen Text */
  background-color: ${e=>e.theme.palette.code.background};
  color: ${e=>e.theme.palette.code.text};
  padding: 1px 6px;
  border-radius: 3px;
  word-break: break-word;
`,M=o.U.pre.withConfig({displayName:"CodeBlock.styles__Pre",componentId:"sc-82b3b1ee-1"})`
  margin: 0 0 ${e=>e.theme.margin.default} 0;
  padding: 12px 16px;
  /* #1886: aus dem Theme — fest #f8f9fa war im Dunkelmodus hell unter hellem Text */
  background-color: ${e=>e.theme.palette.surface.subtle};
  border-radius: 6px;
  overflow-x: auto;
  -webkit-font-smoothing: antialiased;
`,S=o.U.code.withConfig({displayName:"CodeBlock.styles__BlockCode",componentId:"sc-82b3b1ee-2"})`
  font-family: ${z};
  font-size: 13px;
  line-height: 1.6;
  color: ${e=>e.theme.palette.default.black};
  background-color: transparent;
  padding: 0;
`,T=e=>{let{children:t,inline:n=!1,dataTestId:o,className:l}=e;return n?(0,i.jsx)(R,{className:l,"data-testid":o||"code-inline-root",children:t}):(0,i.jsx)(M,{className:l,"data-testid":o||"code-block-root",children:(0,i.jsx)(S,{children:t})})};e.s(["f",0,T],201357);var B=e.i(193233);let K=e=>function({src:t,alt:n}){let o="string"==typeof t?t:void 0,l=o&&e?e(o):{src:o};return(0,i.jsx)(d,{src:l.src,width:l.width,height:l.height,alt:n??"",loading:"lazy","data-testid":"markdown-image","data-sized":l.width&&l.height?"true":"false"})},L={h1:({children:e})=>(0,i.jsx)(m.K,{importance:m.D.h1,children:e}),h2:({children:e})=>(0,i.jsx)(m.K,{importance:m.D.h2,children:e}),h3:({children:e})=>(0,i.jsx)(m.K,{importance:m.D.h3,children:e}),h4:({children:e})=>(0,i.jsx)(m.K,{importance:m.D.h4,children:e}),h5:({children:e})=>(0,i.jsx)(m.K,{importance:m.D.h5,children:e}),p:({children:e})=>(0,i.jsx)(h.p,{variant:h.g.body,children:e}),ul:({children:e,className:t})=>(0,i.jsx)(b,{className:t,children:e}),ol:({children:e})=>(0,i.jsx)(f,{children:e}),li:({children:e,className:t})=>(0,i.jsx)(j,{className:t,children:e}),blockquote:({children:e})=>(0,i.jsx)(v,{children:e}),hr:()=>(0,i.jsx)(_,{}),a:({href:e,children:t})=>(0,i.jsx)(U,{href:e||"#",target:"_blank",children:t}),table:({children:e})=>(0,i.jsx)(s,{"data-testid":"markdown-table",children:(0,i.jsx)("table",{children:e})}),img:K(),code:({children:e,className:t})=>(0,i.jsx)(T,{inline:!t,children:e}),pre:({children:e})=>(0,i.jsx)(i.Fragment,{children:e})},A=new WeakMap,D=new WeakMap,F={},q={h1:({children:e})=>(0,i.jsx)("span",{children:e}),h2:({children:e})=>(0,i.jsx)("span",{children:e}),h3:({children:e})=>(0,i.jsx)("span",{children:e}),h4:({children:e})=>(0,i.jsx)("span",{children:e}),h5:({children:e})=>(0,i.jsx)("span",{children:e}),p:({children:e})=>(0,i.jsx)("span",{children:e}),ul:({children:e})=>(0,i.jsx)("span",{children:e}),ol:({children:e})=>(0,i.jsx)("span",{children:e}),li:({children:e})=>(0,i.jsxs)("span",{children:[e," "]}),blockquote:({children:e})=>(0,i.jsx)("span",{children:e}),hr:()=>(0,i.jsx)("span",{children:" — "}),a:({href:e,children:t})=>(0,i.jsx)(U,{href:e||"#",children:t}),code:({children:e})=>(0,i.jsx)(T,{inline:!0,children:e}),pre:({children:e})=>(0,i.jsx)("span",{children:e})},P=[B.f],H=({content:e,mode:t=l.block,dataTestId:o="markdown-renderer-root",className:a,remarkPlugins:r,resolveImage:s,renderCodeBlock:d})=>{if(!e)return(0,i.jsx)(c,{$mode:t,"data-testid":o,className:a});let m=t===l.block?function(e,t){let n=L;if(e){let t=A.get(e);t||(t={...L,img:K(e)},A.set(e,t)),n=t}if(!t)return n;let o=e??F,l=D.get(o);l||(l=new WeakMap,D.set(o,l));let a=l.get(t);!a&&(a={...n,code:function({children:e,className:n}){let o=n?/(?:^|\s)language-([\w-]+)/.exec(n)?.[1]:void 0;if(o){let n=t(o,String(e??""));if(null!=n)return(0,i.jsx)(i.Fragment,{children:n})}return(0,i.jsx)(T,{inline:!n,children:e})}},l.set(t,a));return a}(s,d):q;return(0,i.jsx)(c,{$mode:t,"data-testid":o,className:a,children:(0,i.jsx)(n.f,{components:m,remarkPlugins:r,rehypePlugins:P,children:e})})};e.s(["B",0,H,"U",0,H],960291)},852590,e=>{let t=e.i(703089).p;e.s(["f",0,t])},193233,e=>{var t=e.i(437992);let i=e=>"element"===e.type,n=e=>Array.isArray(e)?e.map(String):"string"==typeof e?e.split(/\s+/).filter(Boolean):[];e.s(["f",0,function(){return e=>{let o=e=>{for(let l of e)if(i(l)){if("a"===l.tagName){let e=l.properties.href;if("string"==typeof e&&(0,t.b)(e)){let e=n(l.properties.rel);for(let i of t.Z.split(" "))e.some(e=>e.toLowerCase()===i)||e.push(i);l.properties.rel=e,l.properties.target="_blank",l.properties.referrerPolicy=t.T}}o(l.children)}};o(e.children)}}])}],830042,function(e){e.n(e.i(964255))}]);