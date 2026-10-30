(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,535016,677473,513338,866757,e=>{var t=e.i(843476),i=e.i(271645),n=e.i(997053);e.i(882006);var r=e.i(596804),a=e.i(387506);let o=n.U.div.withConfig({displayName:"InputSearch.styles__Root",componentId:"sc-cc666282-0"})`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: ${e=>e.$noMargin?"0":e.theme.margin.default};
  position: relative;

  ${e=>"compact"===e.$variant&&n.m`
      margin-bottom: 0;
    `}
`,s=n.U.div.withConfig({displayName:"InputSearch.styles__InputWrapper",componentId:"sc-cc666282-1"})`
  position: relative;
  display: flex;
  align-items: center;
  z-index: 1;

  ${e=>"overlay"===e.$variant&&n.m`
      flex: 1;
    `}
`,l=n.U.button.withConfig({displayName:"InputSearch.styles__SearchIconWrapper",componentId:"sc-cc666282-2"})`
  position: absolute;
  left: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.5;
  z-index: 1;
  background: none;
  border: none;
  padding: 0.25rem;
  margin: 0;
  cursor: pointer;
  transition: opacity 0.15s ease-in-out;

  &:hover {
    opacity: 1;
  }

  svg {
    width: 1rem;
    height: 1rem;
  }

  ${e=>"compact"===e.$variant&&n.m`
      left: 0.5rem;
      svg {
        width: 0.875rem;
        height: 0.875rem;
      }
    `}

  ${e=>"overlay"===e.$variant&&n.m`
      left: 1rem;
      svg {
        width: 1.25rem;
        height: 1.25rem;
      }
    `}
`,c=n.U.input.withConfig({displayName:"InputSearch.styles__StyledInput",componentId:"sc-cc666282-3"})`
  ${(0,r.B)()}
  padding-left: 2.5rem;
  padding-right: 2.5rem;

  ${e=>"compact"===e.$variant&&n.m`
      padding: 0.375rem 2rem 0.375rem 2rem;
      font-size: 0.8125rem;
      /* the legacy InputStyles mixin set the body line-height underneath —
         re-assert it so the Header search keeps its exact height */
      line-height: ${e.theme.font.text.body.mobile.lineHeight};
      min-width: 180px;

      @media (min-width: 768px) {
        min-width: 240px;
      }
    `}

  ${e=>"overlay"===e.$variant&&n.m`
      padding: 1rem 3rem 1rem 3rem;
      font-size: 1.125rem;
      /* see compact: preserve the legacy mixin line-height for exact height */
      line-height: ${e.theme.font.text.body.mobile.lineHeight};
      border-radius: ${e.theme.borderRadius.box};
    `}
`,d=n.U.div.withConfig({displayName:"InputSearch.styles__LoadingIndicator",componentId:"sc-cc666282-4"})`
  position: absolute;
  right: 0.75rem;
  top: 50%;
  transform: translateY(-50%);

  ${e=>"compact"===e.$variant&&n.m`
      right: 0.5rem;
    `}

  ${e=>"overlay"===e.$variant&&n.m`
      right: 1rem;
    `}
`,u=n.U.button.withConfig({displayName:"InputSearch.styles__ClearButton",componentId:"sc-cc666282-5"})`
  position: absolute;
  right: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.25rem;
  opacity: 0.5;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 1;
  }

  svg {
    width: 1rem;
    height: 1rem;
  }

  ${e=>"compact"===e.$variant&&n.m`
      right: 0.5rem;
      svg {
        width: 0.875rem;
        height: 0.875rem;
      }
    `}

  ${e=>"overlay"===e.$variant&&n.m`
      right: 1rem;
      svg {
        width: 1.25rem;
        height: 1.25rem;
      }
    `}
`,h=(0,n.U)(a.i).withConfig({displayName:"InputSearch.styles__DropdownList",componentId:"sc-cc666282-6"})`
  ${e=>"overlay"===e.$variant&&n.m`
      border-radius: ${e.theme.borderRadius.box};
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
    `}
`;e.i(867428);var p=e.i(793300);e.i(805885);var m=e.i(535004),g=e.i(696986),f=e.i(616789);let _=n.U.mark.withConfig({displayName:"HighlightedText.styles__Mark",componentId:"sc-3036a15-0"})`
  background-color: ${({theme:e})=>e.palette.status.warning.bg};
  color: ${({theme:e})=>e.palette.status.warning.text};
  padding: 0 0.1em;
  border-radius: 2px;
`,b=({text:e,term:n,dataTestId:r})=>{let a=function(e,t){if(!e)return[];let i=t.trim();if(!i)return[{text:e,match:!1}];let n=RegExp(i.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),"gi"),r=[],a=0;for(let t of e.matchAll(n)){let i=t.index??0;i>a&&r.push({text:e.slice(a,i),match:!1}),r.push({text:e.slice(i,i+t[0].length),match:!0}),a=i+t[0].length}return a<e.length&&r.push({text:e.slice(a),match:!1}),r}(e,n??"");return(0,t.jsx)("span",{"data-testid":r,children:a.map((e,n)=>e.match?(0,t.jsx)(_,{"data-testid":r?`${r}-match`:void 0,children:e.text},n):(0,t.jsx)(i.default.Fragment,{children:e.text},n))})};e.s(["f",0,b],677473),e.s([],513338);var y=e.i(696984);e.s(["f",0,function({placeholder:e,value:n,defaultValue:r="",onChange:_,onSearch:x,onSubmit:$,onClear:v,suggestions:w=[],onSuggestionSelect:k,loadingSuggestions:C=!1,highlightMatches:L=!1,minChars:S=2,noResultsText:R,disabled:A=!1,variant:I="default",showSubmitButton:j=!1,showClearButton:z=!0,autoFocus:M=!1,noMargin:O=!1,dataTestId:N,entityType:D}){let{tr:E}=(0,y.w)(),T=e??E("form.inputSearch.placeholder",{defaultValue:"Suchen..."}),V=R??E("form.inputSearch.noResults",{defaultValue:"Keine Ergebnisse gefunden"}),P=E("form.inputSearch.search",{defaultValue:"Suchen"}),U=void 0!==n,[B,K]=(0,i.useState)(r),W=U?n:B,[G,q]=(0,i.useState)(!1),[F,H]=(0,i.useState)(-1),Z=(0,i.useRef)(null),Y=(0,i.useRef)(null),Q=(0,i.useRef)(!1);(0,i.useEffect)(()=>{if(!M||!Z.current)return;let e=setTimeout(()=>{Z.current?.focus()},50);return()=>clearTimeout(e)},[M]),(0,i.useEffect)(()=>{Q.current&&w.length>0&&q(!0)},[w]);let X=D?w.filter(e=>e.entityType===D):w,J=(0,i.useCallback)(e=>{U||K(e),_?.(e)},[U,_]),ee=(0,i.useCallback)(e=>{let t=e.target.value;J(t),H(-1),t.length>=S?(q(!0),x?.(t)):q(!1)},[S,x,J]),et=(0,i.useCallback)(e=>{J(e.label),q(!1),H(-1),k?.(e)},[k,J]),ei=(0,i.useCallback)(()=>{W.trim().length>=S&&(q(!1),$?.(W.trim()))},[W,S,$]),en=(0,i.useCallback)(()=>{J(""),q(!1),H(-1),v?.(),Z.current?.focus()},[v,J]),er=(0,i.useCallback)(()=>{Q.current=!0,X.length>0&&q(!0)},[X.length]),ea=(0,i.useCallback)(()=>{Q.current=!1,setTimeout(()=>q(!1),200)},[]),eo=(0,i.useCallback)(e=>{if("Enter"===e.key){e.preventDefault(),F>=0&&F<X.length?et(X[F]):ei();return}if("Escape"===e.key){e.preventDefault(),q(!1),H(-1);return}if(!G){"ArrowDown"===e.key&&X.length>0&&(q(!0),H(0),e.preventDefault());return}switch(e.key){case"ArrowDown":e.preventDefault(),H(e=>e<X.length-1?e+1:e);break;case"ArrowUp":e.preventDefault(),H(e=>e>0?e-1:0)}},[G,X,F,et,ei]);(0,i.useEffect)(()=>{if(F>=0&&Y.current){let e=Y.current.children[F];e&&e.scrollIntoView({block:"nearest"})}},[F]);let es=!!(x||k),el=G&&!A&&es&&(X.length>0||W.length>=S),ec=G&&!A&&es&&!C&&0===X.length&&W.length>=S,ed=W.length>0;return(0,t.jsx)(o,{$noMargin:O,$variant:I,"data-testid":N,children:(0,t.jsxs)(s,{$variant:I,children:[(0,t.jsx)(l,{type:"button",$variant:I,onClick:ei,disabled:A||W.length<S,"aria-label":P,"data-testid":N?`${N}-search-btn`:void 0,children:(0,t.jsx)(g.f,{})}),(0,t.jsx)(c,{ref:Z,type:"text",value:W,onChange:ee,onFocus:er,onBlur:ea,onKeyDown:eo,placeholder:T,disabled:A,$variant:I,$hasValue:ed,autoComplete:"off","aria-autocomplete":"list","aria-expanded":el,"data-testid":N?`${N}-input`:void 0}),C&&(0,t.jsx)(d,{$variant:I,children:(0,t.jsx)(p.f,{size:"small"})}),z&&ed&&!C&&(0,t.jsx)(u,{type:"button",onClick:en,$variant:I,"data-testid":N?`${N}-clear`:void 0,children:(0,t.jsx)(f.f,{})}),j&&(0,t.jsx)(m._,{icon:(0,t.jsx)(g.f,{}),onClick:ei,isDisabled:A||W.length<S,color:m.Z.primary,tooltip:P,ariaLabel:P,dataTestId:N?`${N}-submit`:void 0}),(0,t.jsx)(h,{ref:Y,$visible:el&&(X.length>0||ec),$variant:I,role:"listbox","data-testid":N?`${N}-dropdown`:void 0,children:ec?(0,t.jsx)(a.O,{children:V}):X.map((e,i)=>(0,t.jsxs)(a.z,{$active:i===F,role:"option","aria-selected":i===F,onMouseDown:()=>et(e),onMouseEnter:()=>H(i),"data-testid":N?`${N}-option-${i}`:void 0,children:[(0,t.jsx)(a.u,{children:L?(0,t.jsx)(b,{text:e.label,term:W,dataTestId:N?`${N}-option-${i}-label`:void 0}):e.label}),e.secondaryLabel&&(0,t.jsx)(a.N,{children:L?(0,t.jsx)(b,{text:e.secondaryLabel,term:W}):e.secondaryLabel})]},e.value))})]})})}],866757),e.s([],535016)},882006,387506,594339,596804,e=>{var t=e.i(997053),i=e.i(351754);let n=t.m`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: ${i.f.popover};
  max-height: 18.75rem;
  overflow-y: auto;
  margin: 0.25rem 0 0 0;
  padding: 0;
  background: ${({theme:e})=>e.palette.default.white};
  border-radius: ${({theme:e})=>e.borderRadius.input};
  outline: 1px solid ${({theme:e})=>e.palette.default.grey};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  list-style: none;
`,r=t.m`
  cursor: pointer;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  font-weight: 300;
  line-height: 1.5rem;
  transition: all 200ms ease-in-out;
  border-bottom: 1px solid ${({theme:e})=>e.palette.default.greyLight};

  &:last-child {
    border-bottom: none;
  }
`,a=t.U.ul.withConfig({displayName:"dropdownStyles__DropdownList",componentId:"sc-9bb914e4-0"})`
  ${n}
  display: ${({$visible:e})=>!1===e?"none":"block"};
`,o=t.U.li.withConfig({displayName:"dropdownStyles__DropdownItem",componentId:"sc-9bb914e4-1"})`
  ${r}
  color: ${({$active:e,theme:t})=>e?t.palette.default.white:t.palette.default.black};
  background: ${({$active:e,theme:t})=>e?t.palette.default.primary:t.palette.default.white};

  &:hover {
    color: ${({theme:e})=>e.palette.default.black};
    background: ${({theme:e})=>e.palette.default.greyLight};
  }
`,s=t.U.div.withConfig({displayName:"dropdownStyles__DropdownItemPrimary",componentId:"sc-9bb914e4-2"})`
  font-weight: 500;
  color: inherit;
`,l=t.U.div.withConfig({displayName:"dropdownStyles__DropdownItemSecondary",componentId:"sc-9bb914e4-3"})`
  font-size: 0.75rem;
  color: ${({theme:e})=>e.palette.default.greyDark};
  margin-top: 0.125rem;
`,c=t.m`
  padding: 0.75rem;
  color: ${({theme:e})=>e.palette.default.greyDark};
  font-size: 0.875rem;
  text-align: center;
`,d=t.U.div.withConfig({displayName:"dropdownStyles__NoResults",componentId:"sc-9bb914e4-4"})`
  ${c}
`;e.s(["z",0,o,"u",0,s,"N",0,l,"i",0,a,"O",0,d,"f",0,n,"o",0,c],387506);let u=t.U.div.withConfig({displayName:"adornment__AdornedInputWrapper",componentId:"sc-cf83c0e4-0"})`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`,h=t.U.span.withConfig({displayName:"adornment__InputAdornment",componentId:"sc-cf83c0e4-1"})`
  position: absolute;
  ${({$position:e})=>"start"===e?"left":"right"}: 0.5rem;
  top: 50%;
  transform: translateY(-50%);
  font-size: 0.9rem;
  color: ${({theme:e})=>e.palette.default.greyDark};
  font-weight: 500;
  pointer-events: none;
`;e.s(["h",0,u,"f",0,h,"d",0,"1.75rem"],594339),e.s([],882006);let p=e=>t.m`
  border-color: ${({theme:t})=>e?t.palette.default.error:t.palette.default.primary};
  box-shadow: 0 0 0 0.2rem
    ${({theme:t})=>(e?t.palette.default.error:t.palette.default.primary)+"40"};
`;e.s(["a",0,p,"B",0,e=>t.m`
  box-sizing: border-box;
  width: 100%;
  min-height: 38px;
  padding: 0.375rem 0.5rem;
  font-family: inherit;
  font-size: 0.9rem;
  color: ${({theme:e})=>e.palette.default.black};
  background-color: ${({theme:e})=>e.palette.default.white};
  border: 1px solid
    ${({theme:t})=>e?.error?t.palette.default.error:t.palette.default.grey};
  border-radius: ${({theme:e})=>e.borderRadius.input};
  outline: none;
  color-scheme: light;

  &::placeholder {
    color: ${({theme:e})=>e.palette.default.greyDark};
    opacity: 0.7;
  }

  &:focus {
    ${p(e?.error)}
  }

  &:disabled {
    background-color: ${({theme:e})=>e.palette.default.greyLight};
    cursor: not-allowed;
  }
`],596804)},497734,e=>{var t=e.i(843476),i=e.i(997053);let n=i.U.svg.withConfig({displayName:"IconBell.styles__Root",componentId:"sc-e765de69-0"})``;e.s(["f",0,e=>{let i=e.color??"currentColor";return(0,t.jsxs)(n,{className:e.className,"data-testid":"icon-bell-root",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[(0,t.jsx)("title",{children:"bell-2"}),(0,t.jsxs)("g",{fill:i,strokeLinecap:"square",strokeLinejoin:"miter",strokeMiterlimit:10,children:[(0,t.jsx)("path",{d:"M14.45 14C14.4828 14.1616 14.5 14.3288 14.5 14.5C14.5 15.8807 13.3807 17 12 17C10.6193 17 9.5 15.8807 9.5 14.5C9.5 14.3288 9.51722 14.1616 9.55001 14",stroke:i,strokeWidth:"2",fill:"none",strokeLinecap:"butt"}),(0,t.jsx)("path",{d:"M4 15.3564L4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10V15.3564",stroke:i,strokeWidth:"2",fill:"none",strokeLinecap:"butt"}),(0,t.jsx)("path",{d:"M8 10C8 7.79086 9.79086 6 12 6",stroke:i,strokeWidth:"2",fill:"none"}),(0,t.jsx)("path",{d:"M12 21C17.5228 21 22 19.433 22 17.5C22 15.567 17.5228 14 12 14C6.47715 14 2 15.567 2 17.5C2 19.433 6.47715 21 12 21Z",stroke:i,strokeWidth:"2",fill:"none"})]})]})}],497734)},26819,e=>{var t=e.i(843476),i=e.i(997053);let n=i.U.svg.withConfig({displayName:"IconCalendar.styles__Root",componentId:"sc-31b25be0-0"})``;e.s(["f",0,e=>{let i=e.strokeColor||"currentColor";return(0,t.jsx)(n,{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",className:e.className,"data-testid":"icon-calendar-root",children:(0,t.jsxs)("g",{fill:i,strokeLinejoin:"miter",strokeLinecap:"butt",children:[(0,t.jsx)("line",{x1:"2",y1:"9",x2:"22",y2:"9",fill:"none",stroke:i,strokeMiterlimit:"10",strokeWidth:"2"}),(0,t.jsx)("line",{x1:"7",y1:"1",x2:"7",y2:"4",fill:"none",stroke:i,strokeLinecap:"square",strokeMiterlimit:"10",strokeWidth:"2"}),(0,t.jsx)("line",{x1:"17",y1:"1",x2:"17",y2:"4",fill:"none",stroke:i,strokeLinecap:"square",strokeMiterlimit:"10",strokeWidth:"2"}),(0,t.jsx)("rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",ry:"2",fill:"none",stroke:i,strokeLinecap:"square",strokeMiterlimit:"10",strokeWidth:"2"})]})})}],26819)},646684,e=>{var t=e.i(843476),i=e.i(997053);let n=i.U.svg.withConfig({displayName:"IconLogout.styles__Root",componentId:"sc-19897c63-0"})``;e.s(["f",0,e=>(0,t.jsx)(n,{className:e.className,"data-testid":"icon-logout-root",xmlns:"http://www.w3.org/2000/svg",height:"24",width:"24",viewBox:"0 0 24 24",children:(0,t.jsxs)("g",{strokeLinecap:"square",strokeMiterlimit:"10",fill:"currentColor",strokeLinejoin:"miter",children:[(0,t.jsx)("path",{d:"M9 5L5 5C3.89543 5 3 5.89543 3 7L3 19C3 20.1046 3.89543 21 5 21L17 21C18.1046 21 19 20.1046 19 19L19 15",stroke:"currentColor",strokeWidth:"2",fill:"none"}),(0,t.jsx)("path",{d:"M12 12L21 3L20.6972 3.30285",stroke:"currentColor",strokeWidth:"2",fill:"none"}),(0,t.jsx)("path",{d:"M14 3L21 3L21 10",stroke:"currentColor",strokeWidth:"2",fill:"none"})]})})],646684)},635769,e=>{var t=e.i(843476),i=e.i(997053);let n=i.U.svg.withConfig({displayName:"IconMessages.styles__Root",componentId:"sc-41db6883-0"})``;e.s(["f",0,e=>(0,t.jsxs)(n,{className:e.className,"data-testid":"icon-messages-root",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,t.jsx)("path",{d:"M16 2H4C2.895 2 2 2.895 2 4V12C2 13.105 2.895 14 4 14H5V19L12 14H16C17.105 14 18 13.105 18 12V4C18 2.895 17.105 2 16 2Z",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"square",strokeLinejoin:"miter"}),(0,t.jsx)("path",{d:"M22 7V16C22 17.105 21.105 18 20 18H19V22L14 18H12",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"square",strokeLinejoin:"miter"})]})],635769)},138837,e=>{var t=e.i(843476),i=e.i(997053);let n=i.U.svg.withConfig({displayName:"IconUser.styles__Root",componentId:"sc-9eb1797d-0"})``;e.s(["f",0,e=>(0,t.jsx)(n,{className:e.className,"data-testid":"icon-user-root",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("path",{d:"M3.2373 19.5C4.56272 17.2892 7.46759 15.7762 11.9996 15.7762C16.5316 15.7762 19.4364 17.2892 20.7619 19.5M15.5996 8.1C15.5996 10.0882 13.9878 11.7 11.9996 11.7C10.0114 11.7 8.39958 10.0882 8.39958 8.1C8.39958 6.11177 10.0114 4.5 11.9996 4.5C13.9878 4.5 15.5996 6.11177 15.5996 8.1Z",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})})],138837)},559173,e=>{e.s(["p",()=>a,"$",()=>n]);var t=e.i(997053),i=e.i(703089);let n=(e=i.g.body)=>t.m`
    font-family: ${e=>e.theme.font.secondaryFamily};
    font-size: ${t=>t.theme.font.text[e].mobile.fontSize};
    line-height: ${t=>t.theme.font.text[e].mobile.lineHeight};
    font-weight: ${t=>t.theme.font.text[e].mobile.fontWeight};
    letter-spacing: ${t=>t.theme.font.text[e].mobile.letterSpacing};
    -webkit-font-smoothing: antialiased;
    word-wrap: break-word;

    a {
      text-decoration: underline;
      &:link,
      &:active,
      &:visited {
        color: ${e=>e.theme.palette.link.primary};
      }
    }

    b,
    strong {
      font-weight: bold;
    }

    @media screen and (min-width: ${e=>e.theme.device.mobile}) {
      font-size: ${t=>t.theme.font.text[e].desktop.fontSize};
      line-height: ${t=>t.theme.font.text[e].desktop.lineHeight};
      font-weight: ${t=>t.theme.font.text[e].desktop.fontWeight};
      letter-spacing: ${t=>t.theme.font.text[e].desktop.letterSpacing};
    }
  `,r=t.m`
  margin-bottom: ${e=>e.$variant===i.g.caption?0:e.theme.margin.default};
  max-width: 700px;
  ${e=>n(e.$variant)}
`,a=t.U.p.withConfig({displayName:"Text.styles__Text",componentId:"sc-18bfeccb-0"})`
  ${r}
`},703089,e=>{e.s(["p",()=>a,"g",()=>r]);var t,i=e.i(843476),n=e.i(559173),r=((t={}).bodybig="bodybig",t.body="body",t.bodysmall="bodysmall",t.button="button",t.caption="caption",t.navigation="navigation",t);let a=({children:e,dataTestId:t="text-root",variant:r,className:a})=>(0,i.jsx)(n.p,{"data-testid":t,className:a,$variant:r,children:e})},535004,e=>{var t,i=e.i(843476),n=e.i(271645),r=e.i(997053),a=e.i(547905),o=e.i(136717);let s={small:{outer:28,inner:24,inset:2,iconScale:.55},medium:{outer:36,inner:32,inset:2,iconScale:.8},large:{outer:48,inner:44,inset:2,iconScale:1}},l=(e,t)=>t?(0,o.J)(t)?(0,o.L)(t):e.palette.text.onAccent:e.palette.default.white,c=r.U.div.withConfig({displayName:"IconButton.styles__TooltipWrapper",componentId:"sc-9416e081-0"})`
  position: relative;
  display: inline-flex;
`,d=r.U.button.withConfig({displayName:"IconButton.styles__Root",componentId:"sc-9416e081-1"})`
  width: ${e=>s[e.$size||"medium"].outer}px;
  height: ${e=>s[e.$size||"medium"].outer}px;
  min-width: ${e=>s[e.$size||"medium"].outer}px;
  min-height: ${e=>s[e.$size||"medium"].outer}px;
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

  /* All children get position and z-index */
  & > * {
    position: relative;
    z-index: 1;
  }

  /* SVG icons - use block display and scale by size */
  & > svg {
    flex-shrink: 0;
    display: block;
    transform: scale(${e=>s[e.$size||"medium"].iconScale});
  }

  /* Icon components (non-SVG) and text spans, but not tooltip */
  & > :not(svg):not([data-testid='tooltip-root']) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Icon color: black by default */
  path,
  rect,
  line,
  circle,
  polyline,
  polygon {
    stroke: ${e=>e.theme.palette.default.black};
  }

  /* Hexagon outline - outer shape */
  &::before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: ${e=>s[e.$size||"medium"].outer}px;
    height: ${e=>s[e.$size||"medium"].outer}px;
    clip-path: ${e=>{let t;return t=e.$size||"medium",(0,a.F)(s[t].outer)}};
    background: ${e=>e.color||e.theme.palette.default.greyDark};
    opacity: 0.6;
    z-index: 0;
    transition: 0.15s ease-in-out;
  }

  /* Hexagon outline - inner cutout (creates outline effect) */
  &::after {
    position: absolute;
    content: '';
    top: ${e=>s[e.$size||"medium"].inset}px;
    left: ${e=>s[e.$size||"medium"].inset}px;
    width: ${e=>s[e.$size||"medium"].inner}px;
    height: ${e=>s[e.$size||"medium"].inner}px;
    clip-path: ${e=>(e=>{let{outer:t,inner:i,inset:n}=s[e];return(0,a.F)(i,(0,a.X)(t,n))})(e.$size||"medium")};
    background: ${e=>e.theme.palette.default.white};
    z-index: 0;
    transition: 0.15s ease-in-out;
  }

  /* Text label for children, exclude tooltip */
  & > span:not([data-testid='tooltip-root']) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Apply the same hover styles for active state — Farben siehe fillTextColor */
  ${e=>e.$isActive&&`
    color: ${l(e.theme,e.color)};
    path,
    rect,
    line,
    circle,
    polyline,
    polygon {
      stroke: ${l(e.theme,e.color)};
    }
    &::before {
      opacity: 1;
      background: ${e.theme.palette.default.white};
    }
    &::after {
      background: ${e.color||e.theme.palette.default.primary};
      opacity: 1;
    }
  `}

  /* #1863: Gesperrter Knopf (natives disabled) sieht gesperrt aus — Sechseck
     und Icon gedaempft, kein Zeiger, kein Hover-Effekt. Der Tooltip am
     TooltipWrapper bleibt und nennt den Grund. */
  &:disabled {
    cursor: not-allowed;
    opacity: 0.35;
    pointer-events: none;
  }

  &:hover {
    color: ${e=>l(e.theme,e.color)};
    path,
    rect,
    line,
    circle,
    polyline,
    polygon {
      stroke: ${e=>l(e.theme,e.color)};
    }
    &::before {
      opacity: 1;
      background: ${e=>e.theme.palette.default.white};
    }
    &::after {
      background: ${e=>e.color||e.theme.palette.default.primary};
      opacity: 1;
    }
  }
`;var u=e.i(118410);e.i(849871);var h=e.i(352706);let p={primary:u.h.PRIMARY,secondary:u.h.SECONDARY,white:u.h.WHITE,greyLight:u.h.GREY_LIGHT,grey:u.h.GREY,greyDark:u.h.GREY_DARK,black:u.h.BLACK,error:u.h.ERROR,success:u.h.SUCCESS,info:u.h.INFO,warning:u.h.WARNING,linkPrimary:u.h.LINK_PRIMARY,buttonPrimaryBg:u.h.BUTTON_PRIMARY_BG,buttonSecondaryBg:u.h.BUTTON_SECONDARY_BG,teal:u.h.TEAL,orange:u.h.ORANGE,coral:u.h.CORAL,purple:u.h.PURPLE,microsoft:u.h.MICROSOFT};var m=((t={}).LEFT="left",t.RIGHT="right",t);e.s(["V",()=>m,"_",0,e=>{let{icon:t,onClick:r,tooltip:a,tooltipPosition:o="bottom",ariaLabel:s,color:l,style:u,isDisabled:p,isActive:m,forceTooltip:g,iconAlign:f,children:_,dataTestId:b,dataState:y,size:x}=e,[$,v]=(0,n.useState)(!1);(0,n.useEffect)(()=>{v(!0)},[]);let[w,k]=(0,n.useState)(!1),C=(0,n.useRef)(null);return(0,i.jsxs)(c,{ref:C,onMouseEnter:()=>k(!0),onMouseLeave:()=>k(!1),children:[(0,i.jsxs)(d,{type:"button",onClick:r,className:e.className,"data-testid":b||"icon-button-root","data-state":y,"data-shape":"rounded-hex","data-disabled":p?"true":void 0,"aria-label":$?s||a:"",color:l,style:u,$isDisabled:p,$isActive:m,$hasChildren:!!_,$size:x,disabled:p,children:["left"===f&&t,_&&(0,i.jsx)("span",{children:_}),(!f||"right"===f)&&t]}),$&&a&&(0,i.jsx)(h.f,{content:a,isVisible:g||w&&!m,position:o,backgroundColor:l,anchorRef:C})]})},"Z",0,p],535004)},805885,e=>{let t=e.i(535004)._;e.s(["f",0,t])},867428,793300,e=>{var t=e.i(843476),i=e.i(997053);let n=i.q`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,r=i.U.div.withConfig({displayName:"LoadingSpinner.styles__LoadingContainer",componentId:"sc-ec6f4daf-0"})`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${e=>e.$padding||"2rem"};
  min-height: ${e=>e.$fullHeight?"100%":"auto"};
`,a=i.U.p.withConfig({displayName:"LoadingSpinner.styles__LoadingMessage",componentId:"sc-ec6f4daf-1"})`
  margin-top: 1rem;
  font-size: 0.875rem;
  color: ${e=>e.theme.palette.default.greyDark};
  text-align: center;
`,o=i.U.div.withConfig({displayName:"LoadingSpinner.styles__SpinnerWrapper",componentId:"sc-ec6f4daf-2"})`
  display: flex;
  align-items: center;
  justify-content: center;

  ${e=>e.$useLogo&&i.m`
      animation: ${n} 3s ease-in-out infinite;
      animation-delay: 0.5s;
      /* Hardware acceleration for smooth animation */
      will-change: transform;
      transform: translateZ(0);
      backface-visibility: hidden;
      perspective: 1000px;
    `}

  svg {
    width: ${e=>{switch(e.$size){case"small":return"16px";case"large":return e.$useLogo?"100px":"48px";default:return"24px"}}};
    height: ${e=>{switch(e.$size){case"small":return"16px";case"large":return e.$useLogo?"112px":"48px";default:return"24px"}}};
  }
`;var s=e.i(646145);let l=i.U.div.withConfig({displayName:"LogoPlastshipNoText.styles__Root",componentId:"sc-af92995f-0"})``,c=e=>{let{className:i,width:n=89,height:r=100,...a}=e;return(0,t.jsx)(l,{className:i,"data-testid":"logo-plastship-no-text-root",children:(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:n,height:r,viewBox:"0 0 89 100",fill:"none",shapeRendering:"geometricPrecision",...a,children:[(0,t.jsxs)("g",{clipPath:"url(#clip0_2_2)",children:[(0,t.jsx)("path",{d:"M16.157 63.1687V37.2257C16.1565 36.2097 16.4236 35.2114 16.9315 34.3314C17.4394 33.4514 18.17 32.7206 19.05 32.2127L41.168 19.4377C42.0482 18.9295 43.0466 18.662 44.063 18.662C45.0794 18.662 46.0778 18.9295 46.958 19.4377L69.418 32.4087L85.574 23.0787L46.959 0.775713C46.0788 0.267534 45.0804 0 44.064 0C43.0476 0 42.0492 0.267534 41.169 0.775713L2.895 22.8817C2.01486 23.3896 1.28395 24.1203 0.775767 25.0003C0.267579 25.8803 2.32196e-05 26.8785 0 27.8947L0 72.5007L16.157 63.1687Z",fill:"#00416E"}),(0,t.jsx)("path",{d:"M71.9698 36.831V62.774C71.97 63.79 71.7028 64.7882 71.195 65.6682C70.6872 66.5481 69.9566 67.2789 69.0768 67.787L46.9568 80.562C46.0771 81.0707 45.0789 81.3385 44.0628 81.3385C43.0466 81.3385 42.0484 81.0707 41.1688 80.562L18.7098 67.59L2.55176 76.921L41.1698 99.224C42.0494 99.7328 43.0476 100.001 44.0638 100.001C45.0799 100.001 46.0781 99.7328 46.9578 99.224L85.2328 77.118C86.1129 76.6101 86.8438 75.8794 87.352 74.9994C87.8602 74.1194 88.1277 73.1212 88.1278 72.105V27.5L71.9698 36.831Z",fill:"#37BA24"})]}),(0,t.jsx)("defs",{children:(0,t.jsx)("clipPath",{id:"clip0_2_2",children:(0,t.jsx)("rect",{width:"89",height:"100.001",fill:"white"})})})]})})};e.s(["f",0,({message:e,size:i="medium",inverted:n=!1,padding:l="2rem",fullHeight:d=!1,dataTestId:u="loading-spinner",className:h})=>(0,t.jsxs)(r,{$padding:l,$fullHeight:d,className:h,"data-testid":u,children:[(0,t.jsx)(o,{$size:i,$useLogo:"large"===i,children:"large"===i?(0,t.jsx)(c,{width:100,height:112}):(0,t.jsx)(s.f,{inverted:n})}),e&&(0,t.jsx)(a,{"data-testid":`${u}-message`,children:e})]})],793300),e.s([],867428)},849871,352706,e=>{var t=e.i(843476),i=e.i(271645),n=e.i(174080),r=e.i(997053),a=e.i(136717);let o=r.U.span.withConfig({displayName:"Tooltip.styles__Root",componentId:"sc-3975a79f-0"})`
  position: ${e=>e.$fixed?"fixed":"absolute"};
  white-space: pre-line;
  padding: 8px 12px;
  background: ${e=>e.$backgroundColor||e.theme.palette.default.primary};
  color: ${e=>{var t,i,n;return t=e.theme,i=e.$backgroundColor,(n=e.$textColor)?n:i?(0,a.J)(i)?(0,a.L)(i):t.palette.text.onAccent:t.palette.default.white}};
  border-radius: 4px;
  font-size: 16px;
  font-family: ${e=>e.theme.font.secondaryFamily};
  line-height: 24px;
  opacity: ${e=>+!!e.$isVisible};
  visibility: ${e=>e.$isVisible?"visible":"hidden"};
  transition:
    opacity 0.2s ease-in-out,
    visibility 0.2s ease-in-out;
  z-index: ${e=>e.$fixed?9999:100};
  pointer-events: ${e=>e.$interactive?"auto":"none"};

  /* Position variants with dynamic offset adjustments */
  ${e=>{if(e.$fixed)return`
        top: ${e.$top||0}px;
        left: ${e.$left||0}px;
      `;let t=e.$offsetX||0,i=e.$offsetY||0;switch(e.$position){case"top":return`
          bottom: 100%;
          left: 50%;
          transform: translateX(calc(-50% + ${t}px)) translateY(${i}px);
          margin-bottom: 8px;
        `;case"bottom":default:return`
          top: 100%;
          left: 50%;
          transform: translateX(calc(-50% + ${t}px)) translateY(${i}px);
          margin-top: 8px;
        `;case"left":return`
          right: 100%;
          top: 50%;
          transform: translateY(calc(-50% + ${i}px)) translateX(${t}px);
          margin-right: 8px;
        `;case"right":return`
          left: 100%;
          top: 50%;
          transform: translateY(calc(-50% + ${i}px)) translateX(${t}px);
          margin-left: 8px;
        `}}}
`;e.s(["f",0,e=>{let{content:r,isVisible:a=!1,position:s="bottom",backgroundColor:l,textColor:c,anchorRef:d,interactive:u=!1,onMouseEnter:h,onMouseLeave:p,align:m="center",dataTestId:g="tooltip-root"}=e,f=(0,i.useRef)(null),[_,b]=(0,i.useState)(s),[y,x]=(0,i.useState)({x:0,y:0}),[$,v]=(0,i.useState)({top:0,left:0}),[w,k]=(0,i.useState)(!1),[C,L]=(0,i.useState)(!1);(0,i.useEffect)(()=>{L(!0)},[]);let S=!!d,R="string"==typeof r?r:"node";if((0,i.useEffect)(()=>{if(!a||!f.current){b(s),x({x:0,y:0}),k(!1);return}requestAnimationFrame(()=>{if(f.current)if(S&&d?.current){let e=d.current,t=f.current,i=e.getBoundingClientRect(),n=t.getBoundingClientRect(),r=n.width,a=n.height,o=window.innerWidth,l=window.innerHeight,c=0,u=0;switch(s){case"top":c=i.top-a-8,u=i.left+i.width/2-r/2;break;case"bottom":c=i.bottom+8,u=i.left+i.width/2-r/2;break;case"left":c="start"===m?i.top:i.top+i.height/2-a/2,u=i.left-r-8;break;case"right":c="start"===m?i.top:i.top+i.height/2-a/2,u=i.right+8}u+r>o-8&&(u=o-r-8),u<8&&(u=8),c+a>l-8&&"bottom"===s&&(c=i.top-a-8),c<8&&"top"===s&&(c=i.bottom+8),c+a>l-8&&(c=Math.max(8,l-a-8)),v({top:c,left:u}),k(!0)}else{let e=f.current.getBoundingClientRect(),t=window.innerWidth,i=window.innerHeight,n=s,r=0,a=0;e.right>t&&("bottom"===s||"top"===s?r=t-e.right-8:"right"===s&&(n="left")),e.left<0&&("bottom"===s||"top"===s?r=-e.left+8:"left"===s&&(n="right")),e.bottom>i&&("bottom"===s?n="top":("left"===s||"right"===s)&&(a=i-e.bottom-8)),e.top<0&&("top"===s?n="bottom":("left"===s||"right"===s)&&(a=-e.top+8)),b(n),x({x:r,y:a}),k(!0)}})},[a,s,m,R,S,d,C]),!r)return(0,t.jsx)(t.Fragment,{});if(S){let i=(0,t.jsx)(o,{ref:f,className:e.className,$isVisible:a&&w,$position:s,$backgroundColor:l,$textColor:c,$fixed:!0,$top:$.top,$left:$.left,$interactive:u,as:u?"div":"span",style:{top:$.top,left:$.left},onMouseEnter:u?h:void 0,onMouseLeave:u?p:void 0,"data-testid":g,"data-visible":a?"true":"false","data-interactive":u?"true":"false",children:r});return C&&"u">typeof document?(0,n.createPortal)(i,document.body):(0,t.jsx)(t.Fragment,{})}return(0,t.jsx)(o,{ref:f,className:e.className,$isVisible:a&&w,$position:_,$backgroundColor:l,$textColor:c,$offsetX:y.x,$offsetY:y.y,$interactive:u,onMouseEnter:u?h:void 0,onMouseLeave:u?p:void 0,"data-testid":g,"data-visible":a?"true":"false","data-interactive":u?"true":"false",children:r})}],352706),e.s([],849871)},225120,e=>{var t=e.i(271645);let i=(0,t.createContext)({userContext:null,loading:!0,error:null});e.s(["p",0,i,"U",0,()=>(0,t.useContext)(i)])},727827,e=>{var t=e.i(271645),i=e.i(49958),n=e.i(501496),r=e.i(24024),a=e.i(597826);e.s(["f",0,function(){let{status:e}=(0,i.useSession)(),{userContext:o}=(0,r.f)(),s=o?.role==="admin",l=o?.role==="admin"||o?.role==="staff",c=(0,a.j)(),d=(0,a.x)(),u=(0,t.useCallback)(async()=>{try{let e=(await n.k.get("/auth/outlook/status")).data;return d(t=>({...t,outlook:e})),e}catch(e){console.error("[useOutlookStatus] Outlook-Status konnte nicht neu geladen werden:",e);return}},[d]),h=c.data?.outlook??null,p=h?.linked??!1;return{status:h,linked:p,email:h?.email??null,mailWrite:h?.mailWrite??!1,outlookLinked:p,isStaffOrAdmin:l,isAdmin:s,isAuthenticated:"authenticated"===e,isLoading:c.isLoading,refetch:u}}])},858350,164223,e=>{var t=e.i(271645);e.i(821194);var i=e.i(99222);function n(...e){for(let t of e)if("string"==typeof t&&""!==t.trim())return t;return null}e.s(["f",0,n],164223),e.s(["f",0,function(){let{tr:e}=(0,i.f)();return{label:(0,t.useCallback)((...t)=>{let i=n(...t);return null!==i?{text:i,unnamed:!1}:{text:e("common.unnamedRecord",{defaultValue:"Unnamed"}),unnamed:!0}},[e])}}],858350)},889397,e=>{var t=e.i(49958),i=e.i(648799);e.s(["f",0,function(){let{data:e,status:n}=(0,t.useSession)();return"authenticated"===n&&(0,i.f)(e?.user)}])},597826,e=>{var t=e.i(271645),i=e.i(266027),n=e.i(912598),r=e.i(49958),a=e.i(501496),o=e.i(49323),s=e.i(889397);let l=["me","bootstrap"];e.s(["j",0,function(){let{data:e}=(0,r.useSession)(),t=e?.user?.email??null,n=(0,s.f)();return(0,i.f)({queryKey:[...l,t],queryFn:async()=>(await a.k.get("/me/bootstrap/")).data,enabled:n&&!(0,o.f)(),staleTime:1/0,refetchOnWindowFocus:!1})},"x",0,function(){let e=(0,n.d)();return(0,t.useCallback)(t=>{e.getQueriesData({queryKey:l}).some(([,e])=>void 0!==e)?e.setQueriesData({queryKey:l},e=>e?t(e):e):e.invalidateQueries({queryKey:l})},[e])}])},24024,306960,e=>{var t=e.i(843476),i=e.i(271645),n=e.i(49958),r=e.i(597826);e.i(821194);var a=e.i(99222),o=e.i(225120);e.s(["f",0,({children:e,initialUserContext:s=null})=>{var l;let{data:c,status:d}=(0,n.useSession)(),u=(0,r.j)(),{tr:h}=(0,a.f)(),p=u.data?.userContext??null,m=(l=c?.user,s&&"unauthenticated"!==d&&("loading"===d||l?.email&&l.email===s.email&&l.role&&l.role===s.role))?s:null,g=p??m,f="unauthenticated"===d,_="loading"===d||!f&&u.isLoading,b=f?h("common.userContext.loginRequired",{defaultValue:"Please log in to view this page"}):u.isError?h("common.userContext.loadError",{defaultValue:"Failed to load user permissions"}):null,y=(0,i.useMemo)(()=>({userContext:p,startContext:g,loading:_,error:b}),[p,g,_,b]);return(0,t.jsx)(o.p.Provider,{value:y,children:e})}],306960),e.s(["f",0,function(){return(0,o.U)()}],24024)},821175,e=>{let t={ä:"ae",ö:"oe",ü:"ue",Ä:"Ae",Ö:"Oe",Ü:"Ue",ß:"ss"};e.s(["f",0,(e,i)=>{let n;return i?e((n=i.replace(/[äöüÄÖÜß]/g,e=>t[e]??e).replace(/[^A-Za-z0-9]+/g,"_").replace(/^_+|_+$/g,"").slice(0,40),`apiErrors.${n?`${n}_`:""}${(e=>{let t=0x811c9dc5;for(let i=0;i<e.length;i++)t^=e.charCodeAt(i),t=Math.imul(t,0x1000193);return(t>>>0).toString(16).padStart(8,"0")})(i)}`),{defaultValue:i}):i}])},750295,e=>{var t,i=e.i(247167),n=e.i(14431),r=e.i(541731),a=((t={})[t.ERROR=0]="ERROR",t[t.WARN=1]="WARN",t[t.INFO=2]="INFO",t[t.DEBUG=3]="DEBUG",t[t.TRACE=4]="TRACE",t);let o=new class{logLevel;isDevelopment;constructor(){this.logLevel=this.getLogLevel(),this.isDevelopment=!1}getLogLevel(){switch(i.default.env.LOG_LEVEL?.toLowerCase()||"info"){case"error":return 0;case"warn":return 1;case"info":default:return 2;case"debug":return 3;case"trace":return 4}}shouldLog(e){return e<=this.logLevel}formatLogEntry(e,t,i,n){let o={timestamp:new Date().toISOString(),level:a[e],message:(0,r.A)(t),context:(0,r.O)({...i,component:i.component,action:i.action})};return n&&(o.error={name:n.name,message:(0,r.A)(n.message),stack:this.isDevelopment?n.stack:void 0,code:"code"in n?n.code:void 0}),o}outputLog(e){let t=JSON.stringify(e,null,2*!!this.isDevelopment);if(this.isDevelopment){let t=this.getColoredLevel(e.level);console.log(`[${e.timestamp}] ${t}: ${e.message}`),e.context.duration&&console.log(`  Duration: ${e.context.duration}ms`),e.error&&(console.error(`  Error: ${e.error.message}`),e.error.stack&&console.error(`  Stack: ${e.error.stack}`)),e.context.metadata&&console.log("  Metadata:",e.context.metadata)}else switch(e.level){case"ERROR":console.error(t);break;case"WARN":console.warn(t);break;default:console.log(t)}}getColoredLevel(e){switch(e){case"ERROR":return"\x1b[31mERROR\x1b[0m";case"WARN":return"\x1b[33mWARN\x1b[0m";case"INFO":return"\x1b[36mINFO\x1b[0m";case"DEBUG":return"\x1b[90mDEBUG\x1b[0m";case"TRACE":return"\x1b[35mTRACE\x1b[0m";default:return e}}log(e,t,i,n){if(!this.shouldLog(e))return;let r=this.formatLogEntry(e,t,i,n);this.outputLog(r)}error(e,t,i){this.log(0,e,t,i),i?n.y(i,{tags:{component:t.component,action:t.action},extra:(0,r.O)({message:e,...t.metadata})}):n.T((0,r.A)(e),{level:"error",tags:{component:t.component,action:t.action},extra:(0,r.O)(t.metadata)})}errorLogOnly(e,t){this.log(0,e,t)}warn(e,t){this.log(1,e,t),n.v({category:t.component,message:(0,r.A)(`[${t.action}] ${e}`),level:"warning"})}info(e,t){this.log(2,e,t)}debug(e,t){this.log(3,e,t)}trace(e,t){this.log(4,e,t)}performanceLog(e,t,i,n=2){let r=Date.now()-i;this.log(n,e,{...t,duration:r})}apiRequest(e,t,i){let n={...t,method:i?.method,url:i?.url,userAgent:i?.headers.get("user-agent")||void 0,ip:i?.headers.get("x-forwarded-for")||i?.headers.get("x-real-ip")||void 0};this.info(e,n)}apiResponse(e,t,i,n){let r={...t,statusCode:i,duration:n};this.log(i>=500?0:2,e,r)}dbQuery(e,t,i,n){let r={...t,duration:i,metadata:{query:e.substring(0,200)+(e.length>200?"...":""),rowCount:n}};this.debug("Database query executed",r)}salesforceAPI(e,t,i,n,r){let a={...t,duration:i,metadata:{operation:e,recordCount:n}};r?this.error(`Salesforce API error: ${e}`,a,r):this.info(`Salesforce API success: ${e}`,a)}};e.s(["e",0,(e,t,i={})=>({component:e,action:t,...i}),"y",0,o])},442560,e=>{let t="plastship:preview-read-only";e.s(["A",0,function(){window.dispatchEvent(new Event(t))},"k",0,function(e){return window.addEventListener(t,e),()=>window.removeEventListener(t,e)}])},49323,e=>{e.s(["f",0,function(){return!0===window.__PLASTSHIP_STORYBOOK__}])},912381,19900,e=>{let t={Verh_ltnis__c:"Verhältnis",Standard_Gesch_ftsablauf__c:"Standard Geschäftsablauf",Anzahl_KISS_Pr_fungen_avisiert__c:"Anzahl KISS-Prüfungen avisiert",Kunde_Materialpr_fung__c:"Kunde Materialprüfung",Ma_nahmen__c:"Maßnahmen",Ust_ID__c:"USt-ID",Zust_ndiger_Kontakt_Lieferant__c:"Zuständiger Kontakt Lieferant",Zust_ndiger_Kontakt_Kunde__c:"Zuständiger Kontakt Kunde",Vorlage_AB_Stra_e__c:"Vorlage AB Straße",Hinweis_Auftragsbest_tigung__c:"Hinweis Auftragsbestätigung",Verpackung_bersetzung_EN_del__c:"Verpackung Übersetzung EN",Tats_chliche_Liefermenge__c:"Tatsächliche Liefermenge",Tats_chliches_Abholdatum__c:"Tatsächliches Abholdatum",Tats_chliches_Lieferdatum__c:"Tatsächliches Lieferdatum",AVV_Nummer_Anzeige__c:"AVV-Nummer Anzeige",Voralge_Dispo_Transp_PLZ_Text__c:"Vorlage Dispo Transport PLZ Text",Ergebnis_ben_tigt_bis__c:"Ergebnis benötigt bis",Kategorie_f_r_Qualit_tseinsch_tzung__c:"Kategorie für Qualitätseinschätzung",Sch_ttdichte__c:"Schüttdichte",Beschreibung_Analysen_Optische_Qualit_t__c:"Beschreibung Analysen Optische Qualität",Anzahl_Datens_tze_Optische_Qualit_t__c:"Anzahl Datensätze Optische Qualität",Anzahl_Datens_tze_Geruch__c:"Anzahl Datensätze Geruch",Gesamtqualit_t__c:"Gesamtqualität",Optische_Qualit_t__c:"Optische Qualität",Mechanische_Qualit_t__c:"Mechanische Qualität",Polymerqualit_t__c:"Polymerqualität",Geruchsqualit_t__c:"Geruchsqualität",Summe_Defekte_gro__c:"Summe Defekte groß",Oberfl_chenfeuchte_Test_Standard_IS__c:"Oberflächenfeuchte Test Standard ISO",Kerbschlagz_higkeit_Charpy__c:"Kerbschlagzähigkeit Charpy",Projektpriorit_t__c:"Projektpriorität",Risikoabsch_tzung__c:"Risikoabschätzung",Potenzialabsch_tzung__c:"Potenzialabschätzung",Jahresmengenbest_tigung__c:"Jahresmengenbestätigung",Begr_ndung_der_Bewertung__c:"Begründung der Bewertung",PLZ__c:"PLZ (Postleitzahl)",AVV_Nummer__c:"AVV-Nummer",MFR_kg__c:"MFR (kg)",MVR__c:"MVR (Melt Volume Rate)",TDS_check_up__c:"TDS Check-up",PCF_Virgin_Material_kg_CO2_eq__c:"PCF Virgin Material (kg CO₂ eq)",Product_Carbon_Footprint_kg_CO2_eq__c:"Product Carbon Footprint (kg CO₂ eq)",Potential_CO2e_savings__c:"Potenzial CO₂e Einsparung",Document_Order_attached__c:"Bestellung angehängt",Document_Order_Confirmation_attached__c:"Auftragsbestätigung angehängt",Document_Order_to_Supplier_attached__c:"Bestellung an Lieferant angehängt",Document_Transport_Order_attached__c:"Transportauftrag angehängt",Document_Pickup_Note_attached__c:"Abholschein angehängt",Document_Delivery_Note_attached__c:"Lieferschein angehängt",Document_CoA_attached__c:"CoA angehängt",Document_Annex_VII_attached__c:"Anlage VII angehängt",Document_Weighing_Note_Supplier_attached__c:"Wiegeschein Lieferant angehängt",Document_Weighing_Note_Customer_attached__c:"Wiegeschein Kunde angehängt",Document_CMR_attached__c:"CMR angehängt",Document_Original_TDS_attached__c:"Original TDS angehängt",Document_plastship_TDS_attached__c:"plastship TDS angehängt",Document_Original_MSDS_attached__c:"Original MSDS angehängt",Document_plastship_MSDS_attached__c:"plastship MSDS angehängt",Document_Additional_Analysis_attached__c:"Zusätzliche Analyse angehängt",TotalInformation_rate__c:"Gesamtinformationen (%)",AccountInformation_rate__c:"Account-Informationen (%)",ContactInformation_rate__c:"Kontakt-Informationen (%)",AdditionalInformation_rate__c:"Zusätzliche Informationen (%)",InvoiceInformation_rate__c:"Rechnungsinformationen (%)",ResearchInformation_rate__c:"Recherche-Informationen (%)",Processing_Status_percent__c:"Bearbeitungsstatus (%)",MP_Progress_percent__c:"MP Fortschritt (%)",Versandart_Muster__c:"Versandart Muster",Empf_nger_Account__c:"Empfänger Account",Sichtbar_f_r_Kunden__c:"Sichtbar für Kunden",F_llstoff_Text__c:"Füllstoff Text",Hauptpolymer__c:"Hauptpolymer",Materialform__c:"Materialform",Recyclatdefinition__c:"Rezyklat-Definition",Stra_e__c:"Straße",Stra_e_Nummer__c:"Straßen-Nummer"};function i(e){return t[e]?t[e]:e.replace(/__c$/,"").replace(/__r$/,"").replace(/_/g," ").replace(/([a-z])([A-Z])/g,"$1 $2").trim()}e.s(["U",0,t,"V",0,i],19900);let n={ä:"ae",ö:"oe",ü:"ue",Ä:"Ae",Ö:"Oe",Ü:"Ue",ß:"ss"},r=(e,t,i)=>{let r;return t?e(i??(r=t.replace(/[äöüÄÖÜß]/g,e=>n[e]).replace(/[^A-Za-z0-9]+/g,"_").replace(/^_+|_+$/g,"").slice(0,40),`entityFields.${r?`${r}_`:""}${(e=>{let t=0x811c9dc5;for(let i=0;i<e.length;i++)t^=e.charCodeAt(i),t=Math.imul(t,0x1000193);return(t>>>0).toString(16).padStart(8,"0")})(t)}`),{defaultValue:t}):t},a=(e,t)=>e.map(e=>({...e,label:r(t,e.label,e.labelKey)})),o=(e,t)=>({...e,label:r(t,e.label??i(e.apiName),e.labelKey),...e.helpText?{helpText:r(t,e.helpText)}:{},...e.placeholder?{placeholder:r(t,e.placeholder)}:{},...e.picklistOptions?{picklistOptions:a(e.picklistOptions,t)}:{}}),s=(e,t)=>({...e,label:r(t,e.label,e.labelKey),fields:e.fields.map(e=>o(e,t))}),l=(e,t)=>({...e,label:r(t,e.label,e.labelKey)}),c=(e,t)=>({...e,label:r(t,e.label)});e.s(["H",0,(e,t)=>({...e,entityLabel:r(t,e.entityLabel,e.entityLabelKey),sections:e.sections.map(e=>s(e,t)),...e.createSections?{createSections:e.createSections.map(e=>s(e,t))}:{},...e.tabGroups?{tabGroups:e.tabGroups.map(e=>c(e,t))}:{},...e.relatedLists?{relatedLists:e.relatedLists.map(e=>l(e,t))}:{},...e.relatedListTabGroups?{relatedListTabGroups:e.relatedListTabGroups.map(e=>c(e,t))}:{}}),"B",0,o,"i",0,a,"f",0,l,"p",0,s,"j",0,c,"m",0,r,"L",0,(e,t)=>r(e,i(t))],912381)},541731,e=>{let t="[entfernt]",i=new Set(["password","passwort","passwd","passphrase","pwd","secret","token","authorization","cookie","totp","otp","credential","credentials","apikey","signature","nonce","hmac"]),n=new Set(["status","state","required","enabled","policy","type","count","length","expires","expiry","at","in","id","ids","name","names","label","field","fields","error","errors","reason","valid","strength","source","usage","limit","hint","changed","set","age","ttl","consent","header"]);function r(e){let t=e.replace(/([a-z0-9])([A-Z])/g,"$1 $2").toLowerCase().split(/[^a-z0-9]+/).filter(Boolean);if(0===t.length||n.has(t[t.length-1]))return!1;for(let e=0;e<t.length;e++)if(i.has(t[e])||"key"===t[e]&&e>0&&["api","private","access","signing"].includes(t[e-1]))return!0;return!1}let a=/pass|pwd|secret|token|authoriz|cookie|otp|credential|key|signature|nonce|hmac/i,o=/"([A-Za-z0-9_.\- ]{1,60})"(\s*:\s*)"((?:[^"\\]|\\.)*)("|$)/g,s=/"([A-Za-z0-9_.\- ]{1,60})"(\s*:\s*)(-?[0-9][0-9.eE+-]*)/g,l=/\\"([A-Za-z0-9_.\- ]{1,60})\\"(\s*:\s*)\\"((?:(?!\\").)*)(\\"|$)/g,c=/(^|[?&;#\s])([A-Za-z0-9_.\-[\]]{1,60})=([^&#;\s"'<>]*)/g,d=/\b(authorization|proxy-authorization|cookie|set-cookie)(\s*[:=]\s*)([^\r\n"']+)/gi;function u(e){return 0!==e.length&&a.test(e)?e.replace(l,(e,i,n,a,o)=>a.length>0&&r(i)?`\\"${i}\\"${n}\\"${t}${o}`:e).replace(o,(e,i,n,a,o)=>a.length>0&&r(i)?`"${i}"${n}"${t}${o}`:e).replace(s,(e,i,n)=>r(i)?`"${i}"${n}"${t}"`:e).replace(c,(e,i,n,a)=>a.length>0&&r(n)?`${i}${n}=${t}`:e).replace(d,(e,i,n)=>`${i}${n}${t}`):e}e.s(["v",0,r,"A",0,u,"O",0,function(e){return function e(i,n,a){if("string"==typeof i)return u(i);if(null===i||"object"!=typeof i||i instanceof Date||i instanceof Error||a.has(i)||n>=8)return i;if(a.add(i),Array.isArray(i))return i.map(t=>e(t,n+1,a));let o={};for(let[l,c]of Object.entries(i)){var s;r(l)&&("string"==typeof(s=c)?s.length>0:"number"==typeof s||"bigint"==typeof s||(Array.isArray(s)?s.length>0:"object"==typeof s&&null!==s))?o[l]=t:o[l]=e(c,n+1,a)}return o}(e,0,new WeakSet)}])},954616,e=>{var t=e.i(271645),i=e.i(114272),n=e.i(540143),r=e.i(915823),a=e.i(619273),o=class extends r.f{#e;#t=void 0;#i;#n;constructor(e,t){super(),this.#e=e,this.setOptions(t),this.bindMethods(),this.#r()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(e){let t=this.options;this.options=this.#e.defaultMutationOptions(e),(0,a.U)(this.options,t)||this.#e.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.#i,observer:this}),t?.mutationKey&&this.options.mutationKey&&(0,a.q)(t.mutationKey)!==(0,a.q)(this.options.mutationKey)?this.reset():this.#i?.state.status==="pending"&&this.#i.setOptions(this.options)}onUnsubscribe(){this.hasListeners()||this.#i?.removeObserver(this)}onMutationUpdate(e){this.#r(),this.#a(e)}getCurrentResult(){return this.#t}reset(){this.#i?.removeObserver(this),this.#i=void 0,this.#r(),this.#a()}mutate(e,t){return this.#n=t,this.#i?.removeObserver(this),this.#i=this.#e.getMutationCache().build(this.#e,this.options),this.#i.addObserver(this),this.#i.execute(e)}#r(){let e=this.#i?.state??(0,i.r)();this.#t={...e,isPending:"pending"===e.status,isSuccess:"success"===e.status,isError:"error"===e.status,isIdle:"idle"===e.status,mutate:this.mutate,reset:this.reset}}#a(e){n.f.batch(()=>{if(this.#n&&this.hasListeners()){let t=this.#t.variables,i=this.#t.context,n={client:this.#e,meta:this.options.meta,mutationKey:this.options.mutationKey};if(e?.type==="success"){try{this.#n.onSuccess?.(e.data,t,i,n)}catch(e){Promise.reject(e)}try{this.#n.onSettled?.(e.data,null,t,i,n)}catch(e){Promise.reject(e)}}else if(e?.type==="error"){try{this.#n.onError?.(e.error,t,i,n)}catch(e){Promise.reject(e)}try{this.#n.onSettled?.(void 0,e.error,t,i,n)}catch(e){Promise.reject(e)}}}this.listeners.forEach(e=>{e(this.#t)})})}},s=e.i(912598);e.s(["f",0,function(e,i){let r=(0,s.d)(i),[l]=t.useState(()=>new o(r,e));t.useEffect(()=>{l.setOptions(e)},[l,e]);let c=t.useSyncExternalStore(t.useCallback(e=>l.subscribe(n.f.batchCalls(e)),[l]),()=>l.getCurrentResult(),()=>l.getCurrentResult()),d=t.useCallback((e,t)=>{l.mutate(e,t).catch(a.z)},[l]);if(c.error&&(0,a.Z)(l.options.throwOnError,[c.error]))throw c.error;return{...c,mutate:d,mutateAsync:c.mutate}}],954616)}])})();