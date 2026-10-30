(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,[994244,e=>{var t=e.i(997053);let i=t.m`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  white-space: nowrap;
  border: 0;
`;e.s(["m",0,()=>t.m`
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`,"p",0,i])},552830,692504,e=>{var t=e.i(843476),i=e.i(997053);let r=i.U.button.withConfig({displayName:"Burger.styles__Root",componentId:"sc-b55b8f76-0"})`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  gap: 5px;
  width: ${48}px;
  height: ${48}px;
  padding: 0;
  border: none;
  border-radius: 9999px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  background: linear-gradient(
    to bottom,
    ${({theme:e})=>e.palette.site.green},
    ${({theme:e})=>e.palette.site.greenDark}
  );

  &:hover,
  &:focus-visible {
    background: linear-gradient(
      to top,
      ${({theme:e})=>e.palette.site.green},
      ${({theme:e})=>e.palette.site.greenDark}
    );
  }

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.palette.site.text};
    outline-offset: 2px;
  }
`,n=i.U.span.withConfig({displayName:"Burger.styles__Line",componentId:"sc-b55b8f76-1"})`
  display: block;
  width: 18px;
  height: 2px;
  /* Fest weiß auf dem grünen Grund — invertiert im Dark Mode nicht */
  background-color: ${({theme:e})=>e.palette.text.onAccent};
  border-radius: 2px;
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }

  ${e=>e.$isOpen&&"top"===e.$position&&i.m`
      transform: translateY(7px) rotate(45deg);
    `}

  ${e=>e.$isOpen&&"middle"===e.$position&&i.m`
      opacity: 0;
    `}

  ${e=>e.$isOpen&&"bottom"===e.$position&&i.m`
      transform: translateY(-7px) rotate(-45deg);
    `}
`;e.i(821194);var a=e.i(99222);e.s(["f",0,e=>{let{isOpen:i=!1,onClick:s,controlsId:o,trigger:l=!0,autoFocusMarker:d=!1,dataTestId:c="mobile-menu-open"}=e,{tr:u}=(0,a.f)();return(0,t.jsxs)(r,{type:"button",className:e.className,"data-testid":c,"data-mobile-menu-trigger":l?"":void 0,"data-autofocus":d?"":void 0,"data-open":i?"true":"false",onClick:s,$isOpen:i,"aria-expanded":l?i:void 0,"aria-controls":l?o:void 0,"aria-haspopup":l?"dialog":void 0,"aria-label":i?u("header.menu.close",{defaultValue:"Close menu"}):u("header.menu.open",{defaultValue:"Open menu"}),children:[(0,t.jsx)(n,{$isOpen:i,$position:"top"}),(0,t.jsx)(n,{$isOpen:i,$position:"middle"}),(0,t.jsx)(n,{$isOpen:i,$position:"bottom"})]})}],552830),e.s(["h",0,1024,"x",0,"mobile_menu","X",0,"mobile-menu"],692504)},499911,436596,e=>{var t=e.i(843476),i=e.i(997053);let r=i.U.svg.withConfig({displayName:"IconArrowRight.styles__Root",componentId:"sc-a9169b31-0"})``,n=e=>(0,t.jsx)(r,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",className:e.className,"data-testid":"icon-arrow-right-root",children:(0,t.jsx)("path",{d:"M13.3333 5L20 12M20 12L13.3333 19M20 12L4 12",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})});e.s(["f",0,n],436596),e.s(["f",0,n],499911)},17523,932908,e=>{var t=e.i(843476),i=e.i(997053);let r=i.U.svg.withConfig({displayName:"IconChevronDown.styles__Root",componentId:"sc-1d387dbd-0"})``,n=e=>(0,t.jsx)(r,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",className:e.className,"data-testid":"icon-chevron-down-root",children:(0,t.jsx)("path",{d:"M6 9L12 15L18 9",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})});e.s(["f",0,n],932908),e.s(["f",0,n],17523)},959116,e=>{var t=e.i(843476),i=e.i(997053);let r=i.U.svg.withConfig({displayName:"IconClose.styles__Root",componentId:"sc-fb408cf8-0"})``;e.s(["f",0,e=>{let i=e.color??"currentColor";return(0,t.jsxs)(r,{...e,className:e.className,"data-testid":"icon-close-root",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[(0,t.jsx)("title",{children:"xmark"}),(0,t.jsxs)("g",{fill:i,strokeLinecap:"square",strokeLinejoin:"miter",strokeMiterlimit:10,children:[(0,t.jsx)("line",{x1:"19",y1:"19",x2:"5",y2:"5",fill:"none",stroke:i,strokeWidth:"2"}),(0,t.jsx)("line",{x1:"19",y1:"5",x2:"5",y2:"19",fill:"none",stroke:i,strokeWidth:"2"})]})]})}],959116)},616789,e=>{let t=e.i(959116).f;e.s(["f",0,t])},963645,e=>{var t=e.i(843476),i=e.i(997053);let r=i.U.svg.withConfig({displayName:"IconEmail.styles__Root",componentId:"sc-8da3560d-0"})``;e.s(["f",0,e=>(0,t.jsx)(r,{className:e.className,"data-testid":"icon-email-root",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("path",{d:"M4.6875 6.75L11.3596 11.5403C11.7449 11.8168 12.2551 11.8168 12.6404 11.5403L19.3125 6.75M5.25 19H18.75C19.9926 19 21 17.9553 21 16.6667V7.33333C21 6.04467 19.9926 5 18.75 5H5.25C4.00736 5 3 6.04467 3 7.33333V16.6667C3 17.9553 4.00736 19 5.25 19Z",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})],963645)},317573,e=>{let t=e.i(963645).f;e.s(["f",0,t])},215063,e=>{var t=e.i(843476),i=e.i(997053);let r=i.U.svg.withConfig({displayName:"IconPhone.styles__Root",componentId:"sc-35bded17-0"})``;e.s(["f",0,e=>(0,t.jsx)(r,{className:e.className,"data-testid":"icon-phone-root",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("path",{d:"M16.094 2.71582L21.5979 2.71582M21.5979 2.71582L21.6004 7.57935M21.5979 2.71582L15.3449 8.96885M20.4369 19.0225C20.4369 19.0225 19.2449 20.1932 18.9528 20.5364C18.477 21.0442 17.9164 21.284 17.1814 21.284C17.1108 21.284 17.0354 21.284 16.9647 21.2793C15.5655 21.1899 14.2652 20.6445 13.29 20.1791C10.6234 18.8908 8.28192 17.0619 6.33619 14.744C4.72966 12.8117 3.6555 11.0251 2.94411 9.10682C2.50596 7.93613 2.34578 7.02402 2.41645 6.16362C2.46356 5.61354 2.67557 5.15748 3.0666 4.76725L4.67313 3.16401C4.90398 2.94773 5.14896 2.83019 5.38923 2.83019C5.68604 2.83019 5.92631 3.00885 6.07707 3.1593C6.08178 3.16401 6.08649 3.16871 6.0912 3.17341C6.37859 3.4414 6.65184 3.71879 6.93922 4.01499C7.08527 4.16545 7.23603 4.3159 7.38679 4.47105L8.67295 5.75459C9.17234 6.25295 9.17234 6.71371 8.67295 7.21208C8.53633 7.34843 8.40441 7.48477 8.26779 7.61642C7.87204 8.02075 8.18292 7.71051 7.77305 8.07723C7.76363 8.08664 7.7542 8.09134 7.74949 8.10074C7.34433 8.50508 7.41971 8.90001 7.50451 9.168C7.50922 9.18211 7.51393 9.19621 7.51864 9.21032C7.85314 10.019 8.32426 10.7807 9.04037 11.6881L9.04508 11.6928C10.3454 13.2913 11.7163 14.5372 13.2286 15.4917C13.4218 15.6139 13.6197 15.7126 13.8081 15.8067C13.9777 15.8913 14.1379 15.9712 14.2745 16.0558C14.2934 16.0652 14.3122 16.0793 14.3311 16.0888C14.4912 16.1687 14.642 16.2063 14.7975 16.2063C15.1885 16.2063 15.4335 15.9618 15.5136 15.8819L16.437 14.9603C16.5972 14.8005 16.8516 14.6077 17.1484 14.6077C17.4405 14.6077 17.6808 14.7911 17.8269 14.9509C17.8316 14.9556 17.8316 14.9556 17.8363 14.9603L20.4322 17.5509C20.9174 18.0305 20.4369 19.0225 20.4369 19.0225Z",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})],215063)},247902,609946,646436,e=>{var t=e.i(843476),i=e.i(271645),r=e.i(130629),n=e.i(818579),a=e.i(83608),s=e.i(825969);e.i(315481);var o=e.i(10003),l=e.i(997053);let d=(0,l.U)(o.NavLink).withConfig({displayName:"LinkButton.styles__StyledLink",componentId:"sc-9fe03ebd-0"})`
  ${n.X}
  text-decoration: none;
  /* Browser-Vorgabe für fokussierte Links ist 1px Abstand — der Button hat keinen */
  outline-offset: 0;

  ${n.I}
  ${n.R}

  /*
   * Schriftfarbe der Variante halten: globale a- und a:hover-Regeln (0,1,1) schlagen eine
   * Klasse, deshalb die doppelte. Atom/Box färbt Links darin mit !important (#1519) —
   * dagegen gewinnt nur !important auf der höheren Spezifität.
   */
  &&,
  &&:hover {
    color: var(--button-fg) !important;
    text-decoration: none;
  }

  ${({$disabled:e})=>e?l.m`
          opacity: 0.5;
          cursor: not-allowed;
          pointer-events: none;
        `:l.m`
          /* Atom/Box blendet Links darin beim Hover ab (0,2,1) — ein Knopf bleibt deckend */
          &&:hover {
            opacity: 1;
          }
        `}
`;e.s(["f",0,d],609946),e.i(942673);var c=e.i(271409),u=e.i(138749),h=e.i(437992);let p=({children:e,href:o,modifier:l=s.j.PRIMARY,icon:p,iconAlign:f,loading:m=!1,disabled:g=!1,background:v,target:y,label:x,tooltip:b,isActive:w,color:_,onClick:k,className:C,dataTestId:$="link-button-root"})=>{let j=g||m,R=m&&(f||s.W.RIGHT),I=p&&!m&&f,q=p?i.default.cloneElement(p,{color:(0,a.U)(l)}):null;return(0,t.jsxs)(d,{href:o,className:C,"data-testid":$,"data-modifier":l,"aria-label":x,"aria-disabled":j||void 0,tabIndex:j?-1:void 0,...(0,h.a)(o,{target:y}),title:b,onClick:k,$modifier:l,$background:v,$icon:void 0!==p,$isActive:w,$color:_,$disabled:j,children:[(R||I)&&f===s.W.LEFT&&(0,t.jsx)(n.m,{children:m?(0,t.jsx)(r.f,{}):q}),(0,t.jsx)(n.p,{$background:v,children:e}),!x&&(0,t.jsx)(c.LinkPurpose,{text:(0,u.A)(e),href:o,dataTestId:`${$}-purpose`}),(R||I)&&f===s.W.RIGHT&&(0,t.jsx)(n.w,{children:m?(0,t.jsx)(r.f,{}):q}),m&&!f&&(0,t.jsx)(n.w,{children:(0,t.jsx)(r.f,{})})]})};e.s(["f",0,p],646436),e.s(["f",0,p],247902)},271409,138749,e=>{var t=e.i(843476);let i=new Set(["hier","hier klicken","klicken sie hier","hier entlang","mehr","mehr dazu","mehr erfahren","mehr infos","mehr informationen","weiter","weiterlesen","link","dieser link","zum link","here","click here","click this","go","learn more","more","more info","more information","read more","right here","start","this","this link"]),r="https://plastship.invalid",n={pdf:"PDF",doc:"DOC",docx:"DOCX",xls:"XLS",xlsx:"XLSX",csv:"CSV",zip:"ZIP",ppt:"PPT",pptx:"PPTX"};function a(e,t){let a;return""!==(a=e.replace(/\s+/g," ").trim().replace(/^[\s.,;:!?»«„“”"'()[\]…→>-]+|[\s.,;:!?»«„“”"'()[\]…→>-]+$/g,"").toLowerCase())&&i.has(a)?function(e){let t;if(!e)return null;let i=e.trim();if(""===i||i.startsWith("#")||/^(mailto|tel|javascript):/i.test(i))return null;try{t=new URL(i,r)}catch{return null}let a=t.pathname.split("/").filter(Boolean),s=a.length>0?decodeURIComponent(a[a.length-1]):"",o=/\.([a-z0-9]{2,5})$/i.exec(s)?.[1]?.toLowerCase(),l=o?n[o]:void 0,d=t.origin!==r&&!/(^|\.)plastship\.(com|de|org)$/i.test(t.hostname),c=t.hostname.replace(/^www\./i,""),u=[];l&&u.push(l),d?u.push(c):!l&&s&&u.push(s.replace(/\.[a-z0-9]{2,5}$/i,"").replace(/[-_]+/g," ").trim());let h=u.filter(Boolean).join(", ");return""===h?null:h}(t):null}e.s(["j",0,a,"A",0,function e(t){if(null==t||"boolean"==typeof t)return"";if("string"==typeof t||"number"==typeof t)return String(t);if(Array.isArray(t))return t.map(e).join("");if("object"==typeof t&&"props"in t){let i=t.props;return e(i?.children)}return""}],138749);var s=e.i(997053),o=e.i(994244);let l=s.U.span.withConfig({displayName:"LinkPurpose.styles__Hint",componentId:"sc-bae58da4-0"})`
  ${o.p}
`;e.s(["LinkPurpose",0,function({text:e,href:i,dataTestId:r="link-purpose"}){let n=a(e,i);return n?(0,t.jsx)(l,{"data-testid":r,children:` (${n})`}):null}],271409)},942673,e=>{e.i(271409),e.s([])},807897,e=>{var t=e.i(843476),i=e.i(997053);let r=i.U.div.withConfig({displayName:"LogoPlastship.styles__Root",componentId:"sc-5bc1dc9b-0"})``,n="0 0 414 100",a={wordmark:"M394.39 49.652h4.529c2.265 0 3.894-.54 4.889-1.621.995-1.083 1.492-2.592 1.492-4.532 0-.858-.128-1.64-.385-2.342a4.758 4.758 0 00-1.171-1.814c-.522-.506-1.184-.897-1.982-1.171-.797-.274-1.746-.413-2.843-.413h-4.529v11.893zm0 6.563v12.537h-8.698V31.247h13.227c2.641 0 4.91.313 6.805.938 1.898.627 3.458 1.49 4.686 2.588a10.077 10.077 0 012.714 3.887c.583 1.494.876 3.106.876 4.839 0 1.87-.301 3.587-.902 5.149a10.309 10.309 0 01-2.754 4.016c-1.234 1.115-2.801 1.985-4.696 2.613-1.896.626-4.138.938-6.729.938h-4.529zm-18.221 12.537h-8.749V31.247h8.749v37.505zm-18.272 0h-8.749V52.895h-15.234v15.857h-8.751V31.247h8.751v15.676h15.234V31.247h8.749v37.505zm-42.308-29.885c-.256.41-.526.72-.809.925-.282.207-.647.31-1.094.31-.394 0-.819-.124-1.275-.372-.454-.25-.968-.53-1.543-.84a12.768 12.768 0 00-1.969-.834c-.737-.25-1.578-.374-2.521-.374-1.631 0-2.845.347-3.641 1.042-.799.695-1.198 1.635-1.198 2.82 0 .755.24 1.38.722 1.879.479.498 1.11.926 1.891 1.286.78.36 1.672.69 2.676.99a66.14 66.14 0 013.074 1.006c1.047.369 2.073.802 3.076 1.3a10.246 10.246 0 012.678 1.905c.78.772 1.409 1.712 1.891 2.818.48 1.107.719 2.442.719 4.003 0 1.734-.3 3.355-.901 4.865a11.399 11.399 0 01-2.61 3.951c-1.142 1.125-2.549 2.008-4.221 2.651-1.673.645-3.573.967-5.7.967-1.168 0-2.355-.121-3.565-.361s-2.38-.58-3.513-1.017a20.498 20.498 0 01-3.192-1.557 13.53 13.53 0 01-2.597-2.008l2.573-4.067c.189-.31.453-.558.798-.747.343-.188.71-.284 1.105-.284.516 0 1.035.164 1.557.49.524.327 1.117.686 1.776 1.081.661.395 1.42.756 2.279 1.082.856.325 1.869.488 3.036.488 1.578 0 2.805-.346 3.68-1.042.875-.695 1.313-1.796 1.313-3.308 0-.875-.242-1.587-.722-2.137s-1.11-1.004-1.891-1.364a17.304 17.304 0 00-2.664-.952 77.238 77.238 0 01-3.061-.915 22.281 22.281 0 01-3.063-1.234 9.663 9.663 0 01-2.664-1.931c-.78-.798-1.411-1.794-1.891-2.986-.48-1.193-.721-2.665-.721-4.414 0-1.409.284-2.782.85-4.12a10.617 10.617 0 012.495-3.579c1.099-1.045 2.446-1.882 4.041-2.51 1.595-.625 3.423-.939 5.482-.939 1.149 0 2.268.091 3.358.271 1.088.18 2.123.447 3.101.798a17.06 17.06 0 012.74 1.26c.849.49 1.609 1.044 2.278 1.662l-2.163 4.041zm-27.07-7.62v6.898h-10.551v30.607h-8.699V38.145h-10.55v-6.898h29.8zm-36.801 7.62c-.256.41-.526.72-.81.925-.283.207-.647.31-1.093.31-.395 0-.821-.124-1.274-.372-.455-.25-.969-.53-1.545-.84a12.671 12.671 0 00-1.968-.834c-.739-.25-1.579-.374-2.521-.374-1.631 0-2.845.347-3.643 1.042-.797.695-1.197 1.635-1.197 2.82 0 .755.24 1.38.721 1.879.481.498 1.111.926 1.891 1.286s1.673.69 2.677.99c1.005.302 2.027.636 3.075 1.006 1.047.369 2.072.802 3.076 1.3a10.236 10.236 0 012.676 1.905c.78.772 1.411 1.712 1.891 2.818.48 1.107.72 2.442.72 4.003 0 1.734-.299 3.355-.9 4.865a11.401 11.401 0 01-2.611 3.951c-1.141 1.125-2.549 2.008-4.222 2.651-1.672.645-3.573.967-5.699.967a18.28 18.28 0 01-3.565-.361 21.24 21.24 0 01-3.512-1.017 20.41 20.41 0 01-3.192-1.557 13.577 13.577 0 01-2.599-2.008l2.575-4.067c.187-.31.453-.558.797-.747a2.275 2.275 0 011.106-.284c.515 0 1.033.164 1.557.49.524.327 1.115.686 1.776 1.081.66.395 1.419.756 2.277 1.082.857.325 1.871.488 3.037.488 1.579 0 2.805-.346 3.679-1.042.875-.695 1.314-1.796 1.314-3.308 0-.875-.241-1.587-.721-2.137s-1.111-1.004-1.891-1.364a17.38 17.38 0 00-2.664-.952 77.31 77.31 0 01-3.063-.915 22.37 22.37 0 01-3.062-1.234 9.678 9.678 0 01-2.664-1.931c-.781-.798-1.41-1.794-1.891-2.986-.48-1.193-.72-2.665-.72-4.414a10.637 10.637 0 013.345-7.699c1.099-1.045 2.446-1.882 4.04-2.51 1.596-.625 3.423-.939 5.482-.939 1.149 0 2.268.091 3.358.271a17.57 17.57 0 013.101.798c.978.352 1.89.772 2.741 1.26.849.49 1.607 1.044 2.279 1.662l-2.164 4.041zm-50.594 15.547h10.242l-3.448-10.27c-.223-.653-.485-1.42-.785-2.305a57.267 57.267 0 01-.887-2.87 52.36 52.36 0 01-.851 2.91 40.45 40.45 0 01-.823 2.316l-3.448 10.22zm24.086 14.338h-6.74c-.757 0-1.378-.176-1.866-.528a2.721 2.721 0 01-1.018-1.351l-2.212-6.539h-14.256l-2.215 6.539c-.171.48-.505.914-1.003 1.3-.498.386-1.107.58-1.827.58h-6.794l14.515-37.506h8.904l14.512 37.505zm-55.483-6.951h13.897v6.951H161.03V31.247h8.697V61.8zm-35.408-12.149h4.527c2.266 0 3.896-.54 4.89-1.621.995-1.083 1.493-2.592 1.493-4.532 0-.858-.128-1.64-.386-2.342a4.755 4.755 0 00-1.17-1.814c-.524-.506-1.185-.897-1.982-1.171-.799-.274-1.746-.413-2.845-.413h-4.527v11.893zm0 6.563v12.537h-8.699V31.247h13.226c2.643 0 4.911.313 6.807.938 1.896.627 3.458 1.49 4.685 2.588a10.09 10.09 0 012.715 3.887c.583 1.494.876 3.106.876 4.839 0 1.87-.301 3.587-.902 5.149a10.33 10.33 0 01-2.754 4.016c-1.236 1.115-2.801 1.985-4.696 2.613-1.896.626-4.138.938-6.731.938h-4.527z",markBlue:"M16.157 63.168V37.225a5.785 5.785 0 012.893-5.013l22.118-12.775a5.79 5.79 0 015.79 0l22.46 12.971 16.156-9.33L46.959.775a5.79 5.79 0 00-5.79 0L2.895 22.881A5.788 5.788 0 000 27.894V72.5l16.157-9.331z",markGreen:"M71.97 36.831v25.943a5.787 5.787 0 01-2.893 5.013l-22.12 12.775a5.781 5.781 0 01-5.788 0L18.71 67.59 2.552 76.921 41.17 99.224a5.78 5.78 0 005.788 0l38.275-22.106a5.788 5.788 0 002.895-5.013V27.5L71.97 36.831z"};e.s(["$",0,a,"s",0,{width:414,height:100},"A",0,n,"t",0,e=>{let{inverted:i,monochrome:s,className:o,...l}=e,d=i?"#fff":"#000";return(0,t.jsx)(r,{className:o,"data-testid":"logo-plastship-root","data-monochrome":s?"true":void 0,"data-inverted":i?"true":void 0,children:(0,t.jsxs)("svg",{viewBox:n,width:133,fill:"none",...l,children:[(0,t.jsx)("path",{fill:d,d:a.wordmark}),(0,t.jsx)("path",{fill:s?d:"#00416E",d:a.markBlue}),(0,t.jsx)("path",{fill:s?d:"#37BA24",d:a.markGreen})]})})}],807897)},946049,469775,346933,e=>{var t=e.i(843476),i=e.i(271645),r=e.i(174080),n=e.i(997053),a=e.i(351754);let s=n.q`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,o=n.q`
  from {
    opacity: 0;
    transform: translateY(-20px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`,l="32px",d="600px";function c(e){switch(e){case"small":return{width:"400px",minWidth:"0"};case"large":return{width:"80vw",minWidth:"0"};case"fullscreen":return{width:"95vw",minWidth:"0"};case"fit":return{width:"min-content",minWidth:`min(${d}, calc(100vw - ${l}))`};default:return{width:d,minWidth:"0"}}}let u=n.U.div.withConfig({displayName:"Modal.styles__Backdrop",componentId:"sc-75a77b26-0"})`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: ${({$placement:e})=>"top"===e?"flex-start":"center"};
  justify-content: center;
  padding-top: ${({$placement:e})=>"top"===e?"15vh":"0"};
  z-index: ${({$zIndex:e})=>e??a.f.overlay};
  opacity: ${e=>+!!e.$isOpen};
  visibility: ${e=>e.$isOpen?"visible":"hidden"};
  /* Während des Ausblendens keine Klicks mehr abfangen */
  pointer-events: ${({$isOpen:e})=>e?"auto":"none"};
  transition: opacity 0.2s ease-in-out, visibility 0.2s ease-in-out;
  animation: ${e=>e.$isOpen?n.m`${s} 0.2s ease-out`:"none"};
`,h=n.m`
  background: ${e=>e.theme.palette.default.white};
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  max-height: 90vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  animation: ${e=>e.$isOpen?n.m`${o} 0.25s ease-out`:"none"};

  width: ${({$size:e})=>c(e).width};
  min-width: ${({$size:e})=>c(e).minWidth};

  max-width: calc(100vw - ${l});

  @media (max-width: 768px) {
    width: calc(100vw - ${l});
    max-height: calc(100vh - 32px);
  }
`,p=n.m`
  width: 100%;
  display: flex;
  justify-content: center;
  pointer-events: none;

  > * {
    pointer-events: auto;
  }
`,f=n.U.div.withConfig({displayName:"Modal.styles__ModalContainer",componentId:"sc-75a77b26-1"})`
  /* Fokussiert wird der Container nur als Anker (tabIndex -1), nicht als Bedienelement */
  outline: none;
  ${({$variant:e})=>"bare"===e?p:h}
`,m=n.U.div.withConfig({displayName:"Modal.styles__Header",componentId:"sc-75a77b26-2"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  border-bottom: 1px solid ${e=>e.theme.palette.default.greyLight||"#e0e0e0"};
  flex-shrink: 0;
`,g=n.U.h2.withConfig({displayName:"Modal.styles__Title",componentId:"sc-75a77b26-3"})`
  margin: 0;
  font-size: 1.25rem;
  font-weight: 600;
  color: ${e=>e.theme.palette.default.black};
`,v=n.U.button.withConfig({displayName:"Modal.styles__CloseButton",componentId:"sc-75a77b26-4"})`
  width: 32px;
  height: 32px;
  border: none;
  background: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background-color 0.2s ease-in-out;
  color: ${e=>e.theme.palette.default.grey||"#666"};

  &:hover {
    background-color: ${e=>e.theme.palette.default.greyLight||"#f0f0f0"};
  }

  &:focus {
    outline: 2px solid ${e=>e.theme.palette.default.primary};
    outline-offset: 2px;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`,y=n.U.div.withConfig({displayName:"Modal.styles__Content",componentId:"sc-75a77b26-5"})`
  padding: 24px;
  overflow-y: auto;
  flex: 1;
`,x=n.U.div.withConfig({displayName:"Modal.styles__ModalSection",componentId:"sc-75a77b26-6"})`
  margin-bottom: 1.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`,b=n.U.ul.withConfig({displayName:"Modal.styles__ModalList",componentId:"sc-75a77b26-7"})`
  margin: 0.25rem 0 0;
  padding-left: 1.25rem;
  font-size: 0.8125rem;
  line-height: 1.6;
  color: ${({theme:e})=>e.palette.default.greyDark};
`;n.U.div.withConfig({displayName:"Modal.styles__ModalFlowSvg",componentId:"sc-75a77b26-8"})`
  width: 100%;
  overflow-x: auto;
  margin: 0.75rem 0 1rem;
  padding: 0.75rem;
  background: ${({theme:e})=>e.palette.default.greyLight};
  border-radius: 6px;

  svg {
    display: block;
    margin: 0 auto;
    max-width: 100%;
    height: auto;
  }
`,e.s(["Q",0,u,"q",0,v,"c",0,y,"i",0,m,"x",0,f,"a",0,b,"H",0,x,"Z",0,g],469775);var w=e.i(616789);function _(e,t,{onClose:r,closeOnEscape:n,mounted:a,lockScroll:s=!0}){let o=(0,i.useRef)({onClose:r,closeOnEscape:n});(0,i.useEffect)(()=>{o.current={onClose:r,closeOnEscape:n}},[r,n]),(0,i.useEffect)(()=>{if(!e)return;let t=document.activeElement;s&&(document.body.style.overflow="hidden");let i=e=>{o.current.closeOnEscape&&"Escape"===e.key&&o.current.onClose()};return document.addEventListener("keydown",i),()=>{s&&(document.body.style.overflow=""),document.removeEventListener("keydown",i),t instanceof HTMLElement&&t.focus({preventScroll:!0})}},[e,s]),(0,i.useEffect)(()=>{let i=t.current;!e||!a||!i||i.contains(document.activeElement)||(i.querySelector("[data-autofocus]")??i).focus({preventScroll:!0})},[e,a,t])}e.s(["f",0,_],346933),e.i(821194);var k=e.i(99222);e.s(["f",0,({isOpen:e,onClose:n,title:a,children:s,size:o="medium",variant:l="dialog",placement:d="center",zIndex:c,ariaLabel:h,closeOnBackdropClick:p=!0,closeOnEscape:x=!0,showCloseButton:b=!0,dataTestId:C="modal",className:$})=>{let{tr:j}=(0,k.f)(),[R,I]=(0,i.useState)(!1),q=(0,i.useRef)(null);(0,i.useEffect)(()=>{I(!0)},[]);let S=(0,i.useRef)(!1),L=(0,i.useCallback)(e=>{S.current=e.target===e.currentTarget},[]),O=(0,i.useCallback)(e=>{let t=S.current;S.current=!1,p&&t&&e.target===e.currentTarget&&n()},[p,n]);if(_(e,q,{onClose:n,closeOnEscape:x,mounted:R}),!R)return null;let M="dialog"===l&&(a||b),P=(0,t.jsx)(u,{$isOpen:e,$placement:d,$zIndex:c,onMouseDown:L,onClick:O,"data-testid":`${C}-backdrop`,"data-placement":d,"aria-hidden":!e,children:(0,t.jsxs)(f,{ref:q,$size:o,$isOpen:e,$variant:l,role:"dialog","aria-modal":"true","aria-labelledby":M&&a?`${C}-title`:void 0,"aria-label":M&&a?void 0:h,tabIndex:-1,className:$,"data-testid":`${C}-container`,"data-variant":l,"data-size":o,onClick:e=>e.stopPropagation(),children:[M&&(0,t.jsxs)(m,{"data-testid":`${C}-header`,children:[a&&(0,t.jsx)(g,{id:`${C}-title`,"data-testid":`${C}-title`,children:a}),b&&(0,t.jsx)(v,{onClick:n,"aria-label":j("common.closeModal",{defaultValue:"Close modal"}),"data-testid":`${C}-close-button`,children:(0,t.jsx)(w.f,{})})]}),"bare"===l?s:(0,t.jsx)(y,{"data-testid":`${C}-content`,children:s})]})});return(0,r.createPortal)(P,document.body)}],946049)},339806,e=>{e.i(946049),e.i(469775),e.s([])},858145,e=>{var t=e.i(997053);e.i(315481);var i=e.i(10003),r=e.i(351754),n=e.i(547905),a=e.i(552830),s=e.i(726029);let o=`@media only screen and (max-width: ${s.F-1}px)`,l=t.U.header.withConfig({displayName:"Header.styles__Root",componentId:"sc-8494ddd5-0"})`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  height: 56px;
  position: relative;
  z-index: 200;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.08);
  label {
    display: none;
  }

  @media only screen and (max-width: 1024px) {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    min-height: 56px;
    background: ${e=>e.theme.palette.default.white};
    will-change: transform, opacity;
  }

  /* #1211: Site-Header (öffentliche Seiten) wie auf plastship.com — 80 px,
     sticky auf jeder Breite, shadow-xl. Doppelklasse gegen die mobile Regel
     oben; das Overlay darunter setzt fixed darüber. */
  ${({$site:e,theme:i})=>e&&t.m`
      && {
        position: sticky;
        top: 0;
        height: ${s.W}px;
        min-height: ${s.W}px;
        gap: 16px;
        padding: 0 24px;
        background: ${i.palette.default.white};
        box-shadow: ${i.palette.site.shadowHover};
        will-change: auto;
      }

      ${s.X} {
        && {
          gap: 8px;
        }
      }
    `}

  /* Overlay (Frontpage): fest oben auf jeder Breite, der Inhalt läuft darunter.
     Doppelklasse, damit es die mobile Regel oben sicher übertrifft. */
  ${({$overlay:e,theme:i})=>e&&t.m`
      && {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        background: ${i.palette.default.white};
        transition:
          background-color 250ms ease,
          box-shadow 250ms ease;
      }
    `}

  /* Über dem Seiten-Hero: ohne Grund und Schatten, das Bild läuft durch */
  ${({$transparent:e})=>e&&t.m`
      && {
        background: transparent;
        box-shadow: none;
      }
    `}

  /* #1497, #2175: durchsichtig über einem Block die Schrift nach dessen Farbe
     (headerTone) — hell oder dunkel, in beiden Themes. Menü, Sprachwahl und
     Schalter lesen --header-fg nur an der obersten Ebene; Flyouts behalten
     ihre Farben. Mit Grund (gescrollt) ohne Variable: Theme-Default. */
  ${({$fg:e})=>e&&t.m`
      --header-fg: ${e};
    `}
`,d=t.U.nav.withConfig({displayName:"Header.styles__Nav",componentId:"sc-8494ddd5-1"})`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
  visibility: ${e=>e.$isLoading?"hidden":"visible"};

  @media only screen and (max-width: 1024px) {
    display: none;
  }
`,c=t.U.div.withConfig({displayName:"Header.styles__BurgerWrapper",componentId:"sc-8494ddd5-2"})`
  display: none;

  @media only screen and (max-width: 1024px) {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;t.U.button.withConfig({displayName:"Header.styles__SearchButton",componentId:"sc-8494ddd5-3"})`
  display: none;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  -webkit-tap-highlight-color: transparent;

  svg {
    width: 22px;
    height: 22px;

    path,
    rect,
    line,
    circle,
    polyline,
    polygon {
      stroke: ${e=>e.theme.palette.default.greyDark};
    }
  }

  &:active {
    opacity: 0.6;
  }
`;let u=t.U.div.withConfig({displayName:"Header.styles__Controls",componentId:"sc-8494ddd5-4"})`
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;
  flex: 1;
  min-width: 200px;
  max-width: 500px;
  margin: 0 1rem;
  visibility: ${e=>e.$isLoading?"hidden":"visible"};

  @media only screen and (max-width: 767px) {
    display: none;
  }
`,h=(0,n.F)(36),p=(0,n.F)(32,(0,n.X)(36,2)),f=(0,n.F)(30,(0,n.X)(36,3)),m=t.U.div.withConfig({displayName:"Header.styles__AvatarContainer",componentId:"sc-8494ddd5-5"})`
  position: relative;
  width: ${36}px;
  height: ${36}px;
  padding-bottom: 8px;
  margin-bottom: -8px;
`,g=t.U.div.withConfig({displayName:"Header.styles__AvatarWrapper",componentId:"sc-8494ddd5-6"})`
  cursor: pointer;
  position: relative;
  width: ${36}px;
  height: ${36}px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.15s ease-in-out;

  /* Hexagon outline - outer shape */
  &::before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: ${36}px;
    height: ${36}px;
    clip-path: ${h};
    background: ${e=>e.theme.palette.default.primary};
    opacity: ${e=>e.$isActive?1:.6};
    z-index: 0;
    transition: 0.15s ease-in-out;
  }

  /* Hexagon outline - inner cutout (creates outline effect) */
  &::after {
    position: absolute;
    content: '';
    top: ${2}px;
    left: ${2}px;
    width: ${32}px;
    height: ${32}px;
    clip-path: ${p};
    background: ${e=>e.$isActive?e.theme.palette.default.primary:e.theme.palette.default.white};
    opacity: ${e=>e.$isActive?.15:1};
    z-index: 0;
    transition: 0.15s ease-in-out;
  }

  &:hover {
    &::before {
      opacity: 1;
    }
    &::after {
      background: ${e=>e.theme.palette.default.primary};
      opacity: 0.15;
    }
  }
`,v=t.U.div.withConfig({displayName:"Header.styles__AvatarImage",componentId:"sc-8494ddd5-7"})`
  position: relative;
  width: ${30}px;
  height: ${30}px;
  clip-path: ${f};
  overflow: hidden;
  z-index: 1;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,y=t.U.div.withConfig({displayName:"Header.styles__AvatarFallback",componentId:"sc-8494ddd5-8"})`
  width: ${30}px;
  height: ${30}px;
  display: flex;
  align-items: center;
  justify-content: center;
  clip-path: ${f};
  background-color: ${e=>e.theme.palette.default.primary};
  color: ${e=>e.theme.palette.default.white};
  z-index: 1;

  svg {
    width: 18px;
    height: 18px;

    path,
    rect,
    line,
    circle,
    polyline,
    polygon {
      stroke: ${e=>e.theme.palette.default.white};
    }
  }
`,x=t.U.div.withConfig({displayName:"Header.styles__Dropdown",componentId:"sc-8494ddd5-9"})`
  position: absolute;
  top: 100%;
  right: 0;
  min-width: 180px;
  padding: 8px;
  background: ${({theme:e})=>e.palette.default.white};
  border: 1px solid ${({theme:e})=>e.palette.border.default};
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.14);
  z-index: ${r.f.dropdown};
`,b=t.m`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  box-sizing: border-box;
  padding: 9px 12px;
  border-radius: 6px;
  font-family: ${({theme:e})=>e.font.secondaryFamily};
  font-size: 13px;
  cursor: pointer;
  transition: background 0.15s ease;
`,w=t.U.div.withConfig({displayName:"Header.styles__DropdownHeader",componentId:"sc-8494ddd5-10"})`
  ${b}
  color: ${({theme:e})=>e.palette.text.primary};
  font-weight: 600;

  &:hover {
    background: ${({theme:e})=>e.palette.surface.subtle};
  }
`,_=t.U.div.withConfig({displayName:"Header.styles__DropdownItem",componentId:"sc-8494ddd5-11"})`
  ${b}
  color: ${({theme:e})=>e.palette.status.error.text};
  font-weight: 500;

  svg {
    width: 16px;
    height: 16px;
  }

  path,
  line,
  polyline {
    stroke: currentColor;
  }

  &:hover {
    background: ${({theme:e})=>e.palette.status.error.bg};
  }
`,k=t.U.div.withConfig({displayName:"Header.styles__NotificationBellWrapper",componentId:"sc-8494ddd5-12"})`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`,C=(0,t.U)(i.NavLink).withConfig({displayName:"Header.styles__LogoLink",componentId:"sc-8494ddd5-13"})`
  display: inline-flex;
  flex-shrink: 0;
  text-decoration: none;
  color: inherit;

  /* #1211: Logo wie auf plastship.com 166 × 40 */
  ${({$site:e})=>e&&t.m`
      svg {
        display: block;
        width: 166px;
        height: auto;
      }

      ${s.X} {
        svg {
          width: 133px;
        }
      }
    `}
`,$=t.U.div.withConfig({displayName:"Header.styles__GuestNavBar",componentId:"sc-8494ddd5-14"})`
  display: flex;
  flex: 1;
  justify-content: center;
  min-width: 0;

  ${o} {
    display: none;
  }
`,j=t.U.div.withConfig({displayName:"Header.styles__GuestActions",componentId:"sc-8494ddd5-15"})`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;

  ${s.X} {
    gap: 4px;
  }

  ${o} {
    display: none;
  }
`,R=(0,t.U)(a.f).withConfig({displayName:"Header.styles__GuestBurger",componentId:"sc-8494ddd5-16"})`
  /* Doppelklasse: schlägt display der Burger-Wurzel sicher */
  && {
    display: none;
  }

  ${o} {
    && {
      display: flex;
    }
  }
`;e.s(["E",0,m,"b",0,y,"Z",0,v,"N",0,g,"R",0,c,"P",0,u,"x",0,x,"t",0,w,"z",0,_,"v",0,j,"o",0,R,"T",0,$,"_",0,C,"w",0,d,"y",0,k,"F",0,l])},197754,949108,768227,e=>{var t=e.i(843476),i=e.i(271645),r=e.i(997053);e.i(821194);var n=e.i(99222),a=e.i(885895),s=e.i(713347),o=e.i(157067),l=e.i(693830),d=e.i(49958);function c(){let{data:e,status:t}=(0,d.useSession)(),i=(0,l.g)();return"unauthenticated"===t||"loading"===t&&!e&&!i}e.s(["f",0,c],949108);var u=e.i(375519),h=e.i(508650),p=e.i(858145),f=e.i(136717);let m=["primary","secondary","white","greyLight","tint","navy"],g="#212529",v=(e,t)=>"dark"===e?t.text.onAccent:g,y=e=>e===h.ThemeMode.DARK?"dark":"light",x=(e,t)=>(0,f.n)(v("dark",t),e)>(0,f.n)(g,e)?"dark":"light";e.s(["$",0,v,"y",0,y,"l",0,(e,t,i)=>e?x("tint"===e?i.site.tint:"navy"===e?i.site.navy:i.default[e],i):y(t),"z",0,x,"H",0,e=>"string"==typeof e&&m.includes(e),"P",0,e=>"light"===e||"dark"===e,"q",0,e=>"string"==typeof e&&/^#(?:[0-9a-f]{3}|[0-9a-f]{6})$/i.test(e)],768227);var b=e.i(424734),w=e.i(692504);e.i(558629);var _=e.i(845183);let k=r.U.svg.withConfig({displayName:"IconMoon.styles__Root",componentId:"sc-904208f6-0"})``,C=e=>(0,t.jsx)(k,{className:e.className,"data-testid":"icon-moon-root",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:(0,t.jsx)("path",{d:"M3 11.9232C3 17.4885 7.5372 22 13.1341 22C16.9486 22 20.2708 19.9045 22 16.8081C21.4246 16.909 20.8325 16.9616 20.228 16.9616C14.6311 16.9616 10.0939 12.4501 10.0939 6.88486C10.0939 5.11247 10.5541 3.44695 11.3621 2C6.61007 2.83329 3 6.95906 3 11.9232Z",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"square",fill:"none",strokeMiterlimit:"10",strokeLinejoin:"bevel"})}),$=r.U.svg.withConfig({displayName:"IconSun.styles__Root",componentId:"sc-c5b43764-0"})``,j=e=>(0,t.jsxs)($,{className:e.className,"data-testid":"icon-sun-root",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:[(0,t.jsx)("path",{d:"M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"square",fill:"none",strokeMiterlimit:"10"}),(0,t.jsx)("path",{d:"M12 1V3",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"square",fill:"none"}),(0,t.jsx)("path",{d:"M12 21V23",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"square",fill:"none"}),(0,t.jsx)("path",{d:"M23.005 11.995L21.005 11.995",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"square",fill:"none"}),(0,t.jsx)("path",{d:"M3.005 11.995L1.005 11.995",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"square",fill:"none"}),(0,t.jsx)("path",{d:"M4.2233 4.22534L5.63751 5.63956",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"square",fill:"none"}),(0,t.jsx)("path",{d:"M18.3654 18.3676L19.7796 19.7818",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"square",fill:"none"}),(0,t.jsx)("path",{d:"M19.7796 4.21826L18.3654 5.63248",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"square",fill:"none"}),(0,t.jsx)("path",{d:"M5.63751 18.3605L4.2233 19.7747",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"square",fill:"none"})]}),R=r.U.button.withConfig({displayName:"ThemeToggleButton.styles__Root",componentId:"sc-bd651b21-0"})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  padding: 0;
  margin: 0;
  border: none;
  border-radius: ${({theme:e})=>e.borderRadius.icon};
  background: transparent;
  color: ${({theme:e})=>`var(--header-fg, ${e.palette.text.secondary})`};
  cursor: pointer;
  transition:
    background 0.15s ease,
    color 0.15s ease;

  &:hover,
  &:focus-visible {
    background: ${({theme:e})=>e.palette.surface.subtle};
    color: ${({theme:e})=>e.palette.default.primary};
  }

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.palette.default.primary};
    outline-offset: 2px;
  }

  /* #2175: Standardgröße unserer Icons */
  svg {
    width: 24px;
    height: 24px;
  }
`,I=r.U.span.withConfig({displayName:"ThemeToggleButton.styles__IconSlot",componentId:"sc-bd651b21-1"})`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &[data-icon='sun'] {
    display: none;
  }

  :root[data-theme='dark'] &[data-icon='sun'] {
    display: inline-flex;
  }

  :root[data-theme='dark'] &[data-icon='moon'] {
    display: none;
  }
`,q=({value:e,onChange:i,ariaLabel:r,title:n,dataTestId:a="theme-toggle-button",className:s})=>{let o=e===h.ThemeMode.DARK;return(0,t.jsxs)(R,{type:"button",role:"switch","aria-checked":o,"aria-label":r,title:n,className:s,"data-testid":a,"data-mode":e,onClick:()=>i(o?h.ThemeMode.LIGHT:h.ThemeMode.DARK),children:[(0,t.jsx)(I,{"data-icon":"moon","data-testid":`${a}-icon-moon`,children:(0,t.jsx)(C,{})}),(0,t.jsx)(I,{"data-icon":"sun","data-testid":`${a}-icon-sun`,children:(0,t.jsx)(j,{})})]})};e.i(657782);var S=e.i(229132),L=e.i(247902),O=e.i(499911),M=e.i(825969);let P=(0,i.lazy)(()=>e.A(460385)),z=(0,t.jsx)(p.P,{$isLoading:!0,"data-testid":"header-app-placeholder"}),T=(0,i.forwardRef)((e,d)=>{let{className:f,overlay:m=!1,transparent:g=!1,site:x=!1,tone:k="light"}=e,C=(0,i.useRef)(null),{themeMode:$,setThemeMode:j,language:R,setLanguage:I}=(0,a.N)(),T=(0,r.i)(),{tr:E}=(0,n.f)(R),{isLeftSidebarOpen:U,toggleLeftSidebar:N}=(0,o.i)(),F=(0,s.useLanguageSwitcherLinks)();(0,i.useEffect)(()=>{if(m||x)return;let e=window.scrollY,t=0;if(U){let e=C.current;e&&(t=0,e.style.transform="translateY(0)",e.style.opacity="1")}let i=()=>{if(U)return;let i=C.current;if(!i)return;let r=window.scrollY,n=r-e,a=i.offsetHeight,s=(t=Math.min(Math.max(t+n,0),a))/a;i.style.transform=`translateY(-${t}px)`,i.style.opacity=`${1-s}`,e=r};return window.addEventListener("scroll",i,{passive:!0}),()=>window.removeEventListener("scroll",i)},[U,m,x]);let{isAuthenticated:Q,isSessionLoading:A}=(0,u.N)(),D=(0,l.g)()&&(Q||!x&&A),W=c(),B=$===h.ThemeMode.DARK,H=m&&g&&!U,V=H?k:y($);return(0,t.jsxs)(p.F,{className:f,ref:e=>{C.current=e,"function"==typeof d?d(e):d&&(d.current=e)},"data-testid":"header-root","data-overlay":m?"true":void 0,"data-transparent":m?H?"true":"false":void 0,"data-tone":m?V:void 0,"data-site":x?"true":void 0,"data-guest":W?"true":void 0,$overlay:m,$transparent:H,$fg:H?v(k,T.palette):void 0,$site:x,children:[(0,t.jsx)(p._,{href:Q?"/dashboard":"/",$site:x,"aria-label":Q?E("header.logo.dashboardAriaLabel",{defaultValue:"plastship – zum Dashboard"}):E("header.logo.ariaLabel",{defaultValue:"plastship – zur Startseite"}),"data-testid":"header-logo-link",children:(0,t.jsx)(b.f,{inverted:H?"dark"===k:B})}),W&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(p.T,{children:(0,t.jsx)(S.f,{variant:"bar",dataTestId:"header-public-nav"})}),(0,t.jsxs)(p.v,{children:[(0,t.jsx)(_.a,{value:R,onChange:I,links:F,ariaLabel:E("header.language.ariaLabel",{defaultValue:"Sprache wählen"}),searchPlaceholder:E("header.language.searchPlaceholder",{defaultValue:"Sprache suchen…"}),noResultsText:E("header.language.noResults",{defaultValue:"Keine Sprache gefunden"}),dataTestId:"header-language-switcher"}),(0,t.jsx)(q,{value:$,onChange:j,ariaLabel:E("profile.themeMode",{defaultValue:"Darstellung"}),title:B?E("profile.theme.light",{defaultValue:"Hell"}):E("profile.theme.dark",{defaultValue:"Dunkel"}),dataTestId:"header-theme-toggle"}),(0,t.jsx)(L.f,{href:"/login",modifier:M.j.PRIMARY,icon:(0,t.jsx)(O.f,{}),iconAlign:M.W.RIGHT,dataTestId:"header-login",children:E("header.login.label",{defaultValue:"Login"})})]}),(0,t.jsx)(p.o,{isOpen:U,onClick:N,controlsId:w.X})]}),!W&&(D?(0,t.jsx)(i.Suspense,{fallback:z,children:(0,t.jsx)(P,{})}):z)]})});T.displayName="Header",e.s(["f",0,T],197754)},380153,e=>{var t=e.i(271645);e.s(["f",0,e=>{let[i,r]=(0,t.useState)(!1);return(0,t.useEffect)(()=>{if("function"!=typeof window.matchMedia)return;let t=window.matchMedia(e),i=()=>r(t.matches);return i(),t.addEventListener("change",i),()=>t.removeEventListener("change",i)},[e]),i}])},375519,e=>{var t=e.i(49958);let i=(e,t)=>({isAuthenticated:"authenticated"===e||"loading"===e&&t,isSessionLoading:"loading"===e&&!t});e.s(["V",0,i,"N",0,function(){let{data:e,status:r}=(0,t.useSession)();return i(r,!!e)}])},476999,e=>{var t=e.i(271645),i=e.i(618566);let r="/api/usage/ingest/";function n(e,t,i){let n=JSON.stringify({route:e,event:t,...i?{props:i}:{}});try{if("u">typeof navigator&&"function"==typeof navigator.sendBeacon&&navigator.sendBeacon(r,new Blob([n],{type:"application/json"})))return;fetch(r,{method:"POST",headers:{"content-type":"application/json"},body:n,keepalive:!0,credentials:"same-origin"}).catch(()=>void 0)}catch{}}e.s(["q",0,n,"F",0,function(){let e=(0,i.usePathname)(),r=(0,t.useRef)(null);(0,t.useEffect)(()=>{if(e){if(null===r.current){r.current=e;return}if(r.current!==e){var t;n(e,"pageview",(t=r.current)?{from:t}:void 0),r.current=e}}},[e])}])},266027,869230,673664,427001,381384,254440,e=>{let t;var i=e.i(175555),r=e.i(273911),n=e.i(540143),a=e.i(286491),s=e.i(915823),o=e.i(793803),l=e.i(619273),d=e.i(180166),c=class extends s.f{constructor(e,t){super(),this.options=t,this.#e=e,this.#t=null,this.#i=(0,o.f)(),this.bindMethods(),this.setOptions(t)}#e;#r=void 0;#n=void 0;#a=void 0;#s;#o;#i;#t;#l;#d;#c;#u;#h;#p;#f=new Set;bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){1===this.listeners.size&&(this.#r.addObserver(this),u(this.#r,this.options)?this.#m():this.updateResult(),this.#g())}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return h(this.#r,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return h(this.#r,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,this.#v(),this.#y(),this.#r.removeObserver(this)}setOptions(e){let t=this.options,i=this.#r;if(this.options=this.#e.defaultQueryOptions(e),void 0!==this.options.enabled&&"boolean"!=typeof this.options.enabled&&"function"!=typeof this.options.enabled&&"boolean"!=typeof(0,l.F)(this.options.enabled,this.#r))throw Error("Expected enabled to be a boolean or a callback that returns a boolean");this.#x(),this.#r.setOptions(this.options),t._defaulted&&!(0,l.U)(this.options,t)&&this.#e.getQueryCache().notify({type:"observerOptionsUpdated",query:this.#r,observer:this});let r=this.hasListeners();r&&p(this.#r,i,this.options,t)&&this.#m(),this.updateResult(),r&&(this.#r!==i||(0,l.F)(this.options.enabled,this.#r)!==(0,l.F)(t.enabled,this.#r)||(0,l.H)(this.options.staleTime,this.#r)!==(0,l.H)(t.staleTime,this.#r))&&this.#b();let n=this.#w();r&&(this.#r!==i||(0,l.F)(this.options.enabled,this.#r)!==(0,l.F)(t.enabled,this.#r)||n!==this.#p)&&this.#_(n)}getOptimisticResult(e){var t,i;let r=this.#e.getQueryCache().build(this.#e,e),n=this.createResult(r,e);return t=this,i=n,(0,l.U)(t.getCurrentResult(),i)||(this.#a=n,this.#o=this.options,this.#s=this.#r.state),n}getCurrentResult(){return this.#a}trackResult(e,t){return new Proxy(e,{get:(e,i)=>(this.trackProp(i),t?.(i),"promise"===i&&(this.trackProp("data"),this.options.experimental_prefetchInRender||"pending"!==this.#i.status||this.#i.reject(Error("experimental_prefetchInRender feature flag is not enabled"))),Reflect.get(e,i))})}trackProp(e){this.#f.add(e)}getCurrentQuery(){return this.#r}refetch({...e}={}){return this.fetch({...e})}fetchOptimistic(e){let t=this.#e.defaultQueryOptions(e),i=this.#e.getQueryCache().build(this.#e,t);return i.fetch().then(()=>this.createResult(i,t))}fetch(e){return this.#m({...e,cancelRefetch:e.cancelRefetch??!0}).then(()=>(this.updateResult(),this.#a))}#m(e){this.#x();let t=this.#r.fetch(this.options,e);return e?.throwOnError||(t=t.catch(l.z)),t}#b(){this.#v();let e=(0,l.H)(this.options.staleTime,this.#r);if(r.f.isServer()||this.#a.isStale||!(0,l.u)(e))return;let t=(0,l.C)(this.#a.dataUpdatedAt,e);this.#u=d.U.setTimeout(()=>{this.#a.isStale||this.updateResult()},t+1)}#w(){return("function"==typeof this.options.refetchInterval?this.options.refetchInterval(this.#r):this.options.refetchInterval)??!1}#_(e){this.#y(),this.#p=e,!r.f.isServer()&&!1!==(0,l.F)(this.options.enabled,this.#r)&&(0,l.u)(this.#p)&&0!==this.#p&&(this.#h=d.U.setInterval(()=>{(this.options.refetchIntervalInBackground||i.f.isFocused())&&this.#m()},this.#p))}#g(){this.#b(),this.#_(this.#w())}#v(){void 0!==this.#u&&(d.U.clearTimeout(this.#u),this.#u=void 0)}#y(){void 0!==this.#h&&(d.U.clearInterval(this.#h),this.#h=void 0)}createResult(e,t){let i,r=this.#r,n=this.options,s=this.#a,d=this.#s,c=this.#o,h=e!==r?e.state:this.#n,{state:m}=e,g={...m},v=!1;if(t._optimisticResults){let i=this.hasListeners(),s=!i&&u(e,t),o=i&&p(e,r,t,n);(s||o)&&(g={...g,...(0,a.W)(m.data,e.options)}),"isRestoring"===t._optimisticResults&&(g.fetchStatus="idle")}let{error:y,errorUpdatedAt:x,status:b}=g;i=g.data;let w=!1;if(void 0!==t.placeholderData&&void 0===i&&"pending"===b){let e;s?.isPlaceholderData&&t.placeholderData===c?.placeholderData?(e=s.data,w=!0):e="function"==typeof t.placeholderData?t.placeholderData(this.#c?.state.data,this.#c):t.placeholderData,void 0!==e&&(b="success",i=(0,l.M)(s?.data,e,t),v=!0)}if(t.select&&void 0!==i&&!w)if(s&&i===d?.data&&t.select===this.#l)i=this.#d;else try{this.#l=t.select,i=t.select(i),i=(0,l.M)(s?.data,i,t),this.#d=i,this.#t=null}catch(e){this.#t=e}this.#t&&(y=this.#t,i=this.#d,x=Date.now(),b="error");let _="fetching"===g.fetchStatus,k="pending"===b,C="error"===b,$=k&&_,j=void 0!==i,R={status:b,fetchStatus:g.fetchStatus,isPending:k,isSuccess:"success"===b,isError:C,isInitialLoading:$,isLoading:$,data:i,dataUpdatedAt:g.dataUpdatedAt,error:y,errorUpdatedAt:x,failureCount:g.fetchFailureCount,failureReason:g.fetchFailureReason,errorUpdateCount:g.errorUpdateCount,isFetched:e.isFetched(),isFetchedAfterMount:g.dataUpdateCount>h.dataUpdateCount||g.errorUpdateCount>h.errorUpdateCount,isFetching:_,isRefetching:_&&!k,isLoadingError:C&&!j,isPaused:"paused"===g.fetchStatus,isPlaceholderData:v,isRefetchError:C&&j,isStale:f(e,t),refetch:this.refetch,promise:this.#i,isEnabled:!1!==(0,l.F)(t.enabled,e)};if(this.options.experimental_prefetchInRender){let t=void 0!==R.data,i="error"===R.status&&!t,n=e=>{i?e.reject(R.error):t&&e.resolve(R.data)},a=()=>{n(this.#i=R.promise=(0,o.f)())},s=this.#i;switch(s.status){case"pending":e.queryHash===r.queryHash&&n(s);break;case"fulfilled":(i||R.data!==s.value)&&a();break;case"rejected":i&&R.error===s.reason||a()}}return R}updateResult(){let e=this.#a,t=this.createResult(this.#r,this.options);if(this.#s=this.#r.state,this.#o=this.options,void 0!==this.#s.data&&(this.#c=this.#r),(0,l.U)(t,e))return;this.#a=t;let i=()=>{if(!e)return!0;let{notifyOnChangeProps:t}=this.options,i="function"==typeof t?t():t;if("all"===i||!i&&!this.#f.size)return!0;let r=new Set(i??this.#f);return this.options.throwOnError&&r.add("error"),Object.keys(this.#a).some(t=>this.#a[t]!==e[t]&&r.has(t))};this.#k({listeners:i()})}#x(){let e=this.#e.getQueryCache().build(this.#e,this.options);if(e===this.#r)return;let t=this.#r;this.#r=e,this.#n=e.state,this.hasListeners()&&(t?.removeObserver(this),e.addObserver(this))}onQueryUpdate(){this.updateResult(),this.hasListeners()&&this.#g()}#k(e){n.f.batch(()=>{e.listeners&&this.listeners.forEach(e=>{e(this.#a)}),this.#e.getQueryCache().notify({query:this.#r,type:"observerResultsUpdated"})})}};function u(e,t){return!1!==(0,l.F)(t.enabled,e)&&void 0===e.state.data&&("error"!==e.state.status||!1!==(0,l.F)(t.retryOnMount,e))||void 0!==e.state.data&&h(e,t,t.refetchOnMount)}function h(e,t,i){if(!1!==(0,l.F)(t.enabled,e)&&"static"!==(0,l.H)(t.staleTime,e)){let r="function"==typeof i?i(e):i;return"always"===r||!1!==r&&f(e,t)}return!1}function p(e,t,i,r){return(e!==t||!1===(0,l.F)(r.enabled,e))&&(!i.suspense||"error"!==e.state.status)&&f(e,i)}function f(e,t){return!1!==(0,l.F)(t.enabled,e)&&e.isStaleByTime((0,l.H)(t.staleTime,e))}e.s(["f",0,c],869230);var m=e.i(271645),g=e.i(912598);e.i(843476);var v=m.createContext((t=!1,{clearReset:()=>{t=!1},reset:()=>{t=!0},isReset:()=>t})),y=()=>m.useContext(v);e.s(["f",0,y],673664);var x=(e,t,i)=>{let r=i?.state.error&&"function"==typeof e.throwOnError?(0,l.Z)(e.throwOnError,[i.state.error,i]):e.throwOnError;(e.suspense||e.experimental_prefetchInRender||r)&&!t.isReset()&&(e.retryOnMount=!1)},b=e=>{m.useEffect(()=>{e.clearReset()},[e])},w=({result:e,errorResetBoundary:t,throwOnError:i,query:r,suspense:n})=>e.isError&&!t.isReset()&&!e.isFetching&&r&&(n&&void 0===e.data||(0,l.Z)(i,[e.error,r]));e.s(["l",0,x,"P",0,w,"E",0,b],427001);var _=m.createContext(!1),k=()=>m.useContext(_);_.Provider,e.s(["f",0,k],381384);var C=e=>{if(e.suspense){let t=e=>"static"===e?e:Math.max(e??1e3,1e3),i=e.staleTime;e.staleTime="function"==typeof i?(...e)=>t(i(...e)):t(i),"number"==typeof e.gcTime&&(e.gcTime=Math.max(e.gcTime,1e3))}},$=(e,t)=>e.isLoading&&e.isFetching&&!t,j=(e,t)=>e?.suspense&&t.isPending,R=(e,t,i)=>t.fetchOptimistic(e).catch(()=>{i.clearReset()});e.s(["p",0,C,"X",0,R,"Q",0,j,"t",0,$],254440),e.s(["f",0,function(e,t){return function(e,t,i){let a=k(),s=y(),o=(0,g.d)(i),d=o.defaultQueryOptions(e);o.getDefaultOptions().queries?._experimental_beforeQuery?.(d);let c=o.getQueryCache().get(d.queryHash),u=!1!==e.subscribed;d._optimisticResults=a?"isRestoring":u?"optimistic":void 0,C(d),x(d,s,c),b(s);let h=!o.getQueryCache().get(d.queryHash),[p]=m.useState(()=>new t(o,d)),f=p.getOptimisticResult(d),v=!a&&u;if(m.useSyncExternalStore(m.useCallback(e=>{let t=v?p.subscribe(n.f.batchCalls(e)):l.z;return p.updateResult(),t},[p,v]),()=>p.getCurrentResult(),()=>p.getCurrentResult()),m.useEffect(()=>{p.setOptions(d)},[d,p]),j(d,f))throw R(d,p,s);if(w({result:f,errorResetBoundary:s,throwOnError:d.throwOnError,query:c,suspense:d.suspense}))throw f.error;if(o.getDefaultOptions().queries?._experimental_afterQuery?.(d,f),d.experimental_prefetchInRender&&!r.f.isServer()&&$(f,a)){let e=h?R(d,p,s):c?.promise;e?.catch(l.z).finally(()=>{p.updateResult()})}return d.notifyOnChangeProps?f:p.trackResult(f)}(e,c,t)}],266027)},605500,(e,t,i)=>{e.i(247167),Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"Image",{enumerable:!0,get:function(){return x}});let r=e.r(555682),n=e.r(190809),a=e.r(843476),s=n._(e.r(271645)),o=r._(e.r(174080)),l=r._(e.r(325633)),d=e.r(908927),c=e.r(65856),u=e.r(49381),h=r._(e.r(1948)),p=e.r(818581);function f(e,t,i,r,n,a,s){let o=e?.src;e&&e["data-loaded-src"]!==o&&(e["data-loaded-src"]=o,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&n(!0),i?.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,n=!1;i.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>n,persist:()=>{},preventDefault:()=>{r=!0,t.preventDefault()},stopPropagation:()=>{n=!0,t.stopPropagation()}})}r?.current&&r.current(e)}}))}function m(e){return s.use?{fetchPriority:e}:{fetchpriority:e}}"u"<typeof window&&(globalThis.__NEXT_IMAGE_IMPORTED=!0);let g="u"<typeof window?s.useEffect:s.useLayoutEffect,v=(0,s.forwardRef)(({src:e,srcSet:t,sizes:i,height:r,width:n,decoding:o,className:l,style:d,fetchPriority:c,placeholder:u,loading:h,unoptimized:v,fill:y,onLoadRef:x,onLoadingCompleteRef:b,setBlurComplete:w,setShowAltText:_,sizesInput:k,onLoad:C,onError:$,...j},R)=>{let I=(0,s.useRef)(!1),q=(0,s.useRef)(null);g(()=>{let{current:e}=I,{current:t}=q;e||null===t||($&&(t.src=t.src),t.complete&&f(t,u,x,b,w,v,k),I.current=!0)},[e,u,x,b,$,v,k]);let S=(0,p.useMergedRef)(R,q);return(0,a.jsx)("img",{...j,...m(c),loading:h,width:n,height:r,decoding:o,"data-nimg":y?"fill":"1",className:l,style:d,sizes:i,srcSet:t,src:e,ref:S,onLoad:e=>{f(e.currentTarget,u,x,b,w,v,k)},onError:e=>{_(!0),"empty"!==u&&w(!0),$&&$(e)}})});function y({isAppRouter:e,imgAttributes:t}){let i={as:"image",imageSrcSet:t.srcSet,imageSizes:t.sizes,crossOrigin:t.crossOrigin,referrerPolicy:t.referrerPolicy,...m(t.fetchPriority)};return e&&o.default.preload?(o.default.preload(t.src,i),null):(0,a.jsx)(l.default,{children:(0,a.jsx)("link",{rel:"preload",href:t.srcSet?void 0:t.src,...i},"__nimg-"+t.src+t.srcSet+t.sizes)})}let x=(0,s.forwardRef)((e,t)=>{let i=(0,s.useContext)(c.RouterContext),r=(0,u.useImageConfig)(),{onLoad:n,onLoadingComplete:o}=e,l=(0,s.useRef)(n);(0,s.useEffect)(()=>{l.current=n},[n]);let p=(0,s.useRef)(o);(0,s.useEffect)(()=>{p.current=o},[o]);let[f,m]=(0,s.useState)(!1),[g,x]=(0,s.useState)(!1),{props:b,meta:w}=(0,d.getImgProps)(e,{defaultLoader:h.default,imgConf:r,blurComplete:f,showAltText:g});return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(v,{...b,unoptimized:w.unoptimized,placeholder:w.placeholder,fill:w.fill,onLoadRef:l,onLoadingCompleteRef:p,setBlurComplete:m,setShowAltText:x,sizesInput:e.sizes,ref:t}),w.preload?(0,a.jsx)(y,{isAppRouter:!i,imgAttributes:b}):null]})});("function"==typeof i.default||"object"==typeof i.default&&null!==i.default)&&void 0===i.default.__esModule&&(Object.defineProperty(i.default,"__esModule",{value:!0}),Object.assign(i.default,i),t.exports=i.default)},325164,e=>{var t=e.i(605500);e.s(["default",()=>t.Image])},49381,(e,t,i)=>{e.i(247167),Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"useImageConfig",{enumerable:!0,get:function(){return o}});let r=e.r(271645),n=e.r(987690),a=e.r(918556),s={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function o(){let e=(0,r.useContext)(a.ImageConfigContext);return(0,n.prepareImageConfig)(s,e)}("function"==typeof i.default||"object"==typeof i.default&&null!==i.default)&&void 0===i.default.__esModule&&(Object.defineProperty(i.default,"__esModule",{value:!0}),Object.assign(i.default,i),t.exports=i.default)},670965,(e,t,i)=>{function r(e,t){let i=e||75;return t?.qualities?.length?t.qualities.reduce((e,t)=>Math.abs(t-i)<Math.abs(e-i)?t:e,t.qualities[0]):i}Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"findClosestQuality",{enumerable:!0,get:function(){return r}})},908927,(e,t,i)=>{e.i(247167),Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"getImgProps",{enumerable:!0,get:function(){return l}});let r=e.r(543369),n=e.r(488143),a=["-moz-initial","fill","none","scale-down",void 0];function s(e){return void 0!==e.default}function o(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:0/0:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):0/0}function l({src:e,sizes:t,unoptimized:i=!1,priority:d=!1,preload:c=!1,loading:u,className:h,quality:p,width:f,height:m,fill:g=!1,style:v,overrideSrc:y,onLoad:x,onLoadingComplete:b,placeholder:w="empty",blurDataURL:_,fetchPriority:k,decoding:C="async",layout:$,objectFit:j,objectPosition:R,lazyBoundary:I,lazyRoot:q,...S},L){var O;let M,P,{imgConf:z,showAltText:T,blurComplete:E,defaultLoader:U}=L;if(void 0===U)throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");let N=S.loader||U;delete S.loader,delete S.srcSet;let F="__next_img_default"in N;if(F){if("custom"===z.loader)throw Error(`Image with src "${e}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`)}else{let e=N;N=t=>{let{config:i,...r}=t;return e(r)}}if($){"fill"===$&&(g=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[$];e&&(v={...v,...e});let i={responsive:"100vw",fill:"100vw"}[$];i&&!t&&(t=i)}let Q="",A=o(f),D=o(m);if((O=e)&&"object"==typeof O&&(s(O)||void 0!==O.src)){let t=s(e)?e.default:e;if(!t.src)throw Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(t)}`);if(!t.height||!t.width)throw Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(t)}`);if(M=t.blurWidth,P=t.blurHeight,_=_||t.blurDataURL,Q=t.src,!g)if(A||D){if(A&&!D){let e=A/t.width;D=Math.round(t.height*e)}else if(!A&&D){let e=D/t.height;A=Math.round(t.width*e)}}else A=t.width,D=t.height}let W=!d&&!c&&("lazy"===u||void 0===u);(!(e="string"==typeof e?e:Q)||e.startsWith("data:")||e.startsWith("blob:"))&&(i=!0,W=!1),z.unoptimized&&(i=!0),F&&!z.dangerouslyAllowSVG&&e.split("?",1)[0].endsWith(".svg")&&(i=!0);let B=o(p),H=Object.assign(g?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:j,objectPosition:R}:{},T?{}:{color:"transparent"},v),V=E||"empty"===w?null:"blur"===w?`url("data:image/svg+xml;charset=utf-8,${(0,n.getImageBlurSvg)({widthInt:A,heightInt:D,blurWidth:M,blurHeight:P,blurDataURL:_||"",objectFit:H.objectFit})}")`:`url("${w}")`,G=a.includes(H.objectFit)?"fill"===H.objectFit?"100% 100%":"cover":H.objectFit,X=V?{backgroundSize:G,backgroundPosition:H.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:V}:{},Y=function({config:e,src:t,unoptimized:i,width:n,quality:a,sizes:s,loader:o}){if(i){if(t.startsWith("/")&&!t.startsWith("//")){let e=(0,r.getDeploymentId)();if(t.includes("/_next/static/immutable")&&!(0,r.getAssetToken)())e=void 0;else if(e){let i=t.indexOf("?");if(-1!==i){let r=new URLSearchParams(t.slice(i+1));r.get("dpl")||(r.append("dpl",e),t=t.slice(0,i)+"?"+r.toString())}else t+=`?dpl=${e}`}}return{src:t,srcSet:void 0,sizes:void 0}}let{widths:l,kind:d}=function({deviceSizes:e,allSizes:t},i,r){if(r){let i=/(^|\s)(1?\d?\d)vw/g,n=[];for(let e;e=i.exec(r);)n.push(parseInt(e[2]));if(n.length){let i=.01*Math.min(...n);return{widths:t.filter(t=>t>=e[0]*i),kind:"w"}}return{widths:t,kind:"w"}}return"number"!=typeof i?{widths:e,kind:"w"}:{widths:[...new Set([i,2*i].map(e=>t.find(t=>t>=e)||t[t.length-1]))],kind:"x"}}(e,n,s),c=l.length-1;return{sizes:s||"w"!==d?s:"100vw",srcSet:l.map((i,r)=>`${o({config:e,src:t,quality:a,width:i})} ${"w"===d?i:r+1}${d}`).join(", "),src:o({config:e,src:t,quality:a,width:l[c]})}}({config:z,src:e,unoptimized:i,width:A,quality:B,sizes:t,loader:N}),K=W?"lazy":u;return{props:{...S,loading:K,fetchPriority:k,width:A,height:D,decoding:C,className:h,style:{...H,...X},sizes:Y.sizes,srcSet:Y.srcSet,src:y||Y.src},meta:{unoptimized:i,preload:c||d,placeholder:w,fill:g}}}},325633,(e,t,i)=>{e.i(247167),Object.defineProperty(i,"__esModule",{value:!0});var r={default:function(){return m},defaultHead:function(){return u}};for(var n in r)Object.defineProperty(i,n,{enumerable:!0,get:r[n]});let a=e.r(555682),s=e.r(190809),o=e.r(843476),l=s._(e.r(271645)),d=a._(e.r(898879)),c=e.r(742732);function u(){return[(0,o.jsx)("meta",{charSet:"utf-8"},"charset"),(0,o.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")]}function h(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===l.default.Fragment?e.concat(l.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}let p=["name","httpEquiv","charSet","itemProp"];function f(e){let t,i,r,n;return e.reduce(h,[]).reverse().concat(u().reverse()).filter((t=new Set,i=new Set,r=new Set,n={},e=>{let a=!0,s=!1;if(e.key&&"number"!=typeof e.key&&e.key.indexOf("$")>0){s=!0;let i=e.key.slice(e.key.indexOf("$")+1);t.has(i)?a=!1:t.add(i)}switch(e.type){case"title":case"base":i.has(e.type)?a=!1:i.add(e.type);break;case"meta":for(let t=0,i=p.length;t<i;t++){let i=p[t];if(e.props.hasOwnProperty(i))if("charSet"===i)r.has(i)?a=!1:r.add(i);else{let t=e.props[i],r=n[i]||new Set;("name"!==i||!s)&&r.has(t)?a=!1:(r.add(t),n[i]=r)}}}return a})).reverse().map((e,t)=>{let i=e.key||t;return l.default.cloneElement(e,{key:i})})}let m=function({children:e}){let t=(0,l.useContext)(c.HeadManagerContext);return(0,o.jsx)(d.default,{reduceComponentsToState:f,headManager:t,children:e})};("function"==typeof i.default||"object"==typeof i.default&&null!==i.default)&&void 0===i.default.__esModule&&(Object.defineProperty(i.default,"__esModule",{value:!0}),Object.assign(i.default,i),t.exports=i.default)},488143,(e,t,i)=>{function r({widthInt:e,heightInt:t,blurWidth:i,blurHeight:n,blurDataURL:a,objectFit:s}){let o=i?40*i:e,l=n?40*n:t,d=o&&l?`viewBox='0 0 ${o} ${l}'`:"";return`%3Csvg xmlns='http://www.w3.org/2000/svg' ${d}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${d?"none":"contain"===s?"xMidYMid":"cover"===s?"xMidYMid slice":"none"}' style='filter: url(%23b);' href='${a}'/%3E%3C/svg%3E`}Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},918556,(e,t,i)=>{e.i(247167),Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"ImageConfigContext",{enumerable:!0,get:function(){return a}});let r=e.r(555682)._(e.r(271645)),n=e.r(987690),a=r.default.createContext(n.imageConfigDefault)},987690,(e,t,i)=>{Object.defineProperty(i,"__esModule",{value:!0});var r={VALID_LOADERS:function(){return a},imageConfigDefault:function(){return d},prepareImageConfig:function(){return l}};for(var n in r)Object.defineProperty(i,n,{enumerable:!0,get:r[n]});let a=["default","imgix","cloudinary","akamai","custom"],s={},o=new WeakMap;function l(e,t){let i=e??s,r=t??s,n=o.get(i);if(n){let e=n.get(r);if(e)return e}let a=e||t||d,l=[...a.deviceSizes].sort((e,t)=>e-t),c=[...a.imageSizes],u={deviceSizes:l,imageSizes:c,allSizes:[...l,...c].sort((e,t)=>e-t),qualities:void 0===a.qualities?void 0:[...a.qualities].sort((e,t)=>e-t),path:a.path,loader:a.loader,dangerouslyAllowSVG:a.dangerouslyAllowSVG,unoptimized:a.unoptimized,domains:a.domains,remotePatterns:a.remotePatterns,localPatterns:"u"<typeof window&&void 0!==t?t.localPatterns:a.localPatterns,output:a.output};return n||(n=new WeakMap,o.set(i,n)),n.set(r,u),u}let d={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:14400,formats:["image/webp"],maximumDiskCacheSize:void 0,maximumRedirects:3,maximumResponseBody:5e7,dangerouslyAllowLocalIP:!1,dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"attachment",localPatterns:void 0,remotePatterns:[],qualities:[75],unoptimized:!1,customCacheHandler:!1}},1948,(e,t,i)=>{e.i(247167),Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"default",{enumerable:!0,get:function(){return s}});let r=e.r(670965),n=e.r(543369);function a({config:e,src:t,width:i,quality:s}){let o=(0,n.getDeploymentId)();if(t.startsWith("/")&&!t.startsWith("//"))if(t.includes("/_next/static/immutable")&&!(0,n.getAssetToken)())o=void 0;else{let e=t.indexOf("?");if(-1!==e){let i=new URLSearchParams(t.slice(e+1)),r=i.get("dpl");if(r){o=r,i.delete("dpl");let n=i.toString();t=t.slice(0,e)+(n?"?"+n:"")}}}if(t.startsWith("/")&&t.includes("?")&&e.localPatterns?.length===1&&"**"===e.localPatterns[0].pathname&&""===e.localPatterns[0].search)throw Error(`Image with src "${t}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`);let l=(0,r.findClosestQuality)(s,e);return`${e.path}?url=${encodeURIComponent(t)}&w=${i}&q=${l}${t.startsWith("/")&&o?`&dpl=${o}`:""}`}a.__next_img_default=!0;let s=a},65856,(e,t,i)=>{e.i(247167),Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"RouterContext",{enumerable:!0,get:function(){return r}});let r=(e.r(555682)._(e.r(271645))).default.createContext(null)},898879,(e,t,i)=>{Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"default",{enumerable:!0,get:function(){return o}});let r=e.r(271645),n="u"<typeof window,a=n?()=>{}:r.useLayoutEffect,s=n?()=>{}:r.useEffect;function o(e){let{headManager:t,reduceComponentsToState:i}=e;function o(){if(t&&t.mountedInstances){let e=r.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(i(e))}}return n&&(t?.mountedInstances?.add(e.children),o()),a(()=>(t?.mountedInstances?.add(e.children),()=>{t?.mountedInstances?.delete(e.children)})),a(()=>(t&&(t._pendingUpdate=o),()=>{t&&(t._pendingUpdate=o)})),s(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}}],772405,e=>{e.q("/_next/static/media/af.1pxy20vfsgof_.svg")},139575,e=>{e.q("/_next/static/media/am.1aiz170fyx9nc.svg")},603410,e=>{e.q("/_next/static/media/ar.1d-o0sx2msp7o.svg")},406163,e=>{e.q("/_next/static/media/az.3ydnaydfpxwzf.svg")},501209,e=>{e.q("/_next/static/media/be.2kyls0yvbg0ui.svg")},111385,e=>{e.q("/_next/static/media/bg.18qzd7kjrn-xw.svg")},773314,e=>{e.q("/_next/static/media/bn.2bwd5f-ynuims.svg")},846929,e=>{e.q("/_next/static/media/bs.3bcnhs2vjhuxr.svg")},305510,e=>{e.q("/_next/static/media/ca.31ufyo2r11wys.svg")},890460,e=>{e.q("/_next/static/media/cs.0jhcdil1dv9cb.svg")},142241,e=>{e.q("/_next/static/media/cy.22w3wqa3yyolz.svg")},659097,e=>{e.q("/_next/static/media/da.0jr0294h4sfnj.svg")},594661,e=>{e.q("/_next/static/media/de.382yhwb-cufgt.svg")},912325,e=>{e.q("/_next/static/media/el.2fy04rl96dsps.svg")},640537,e=>{e.q("/_next/static/media/en-GB.1e85bjg_5t8f0.svg")},171975,e=>{e.q("/_next/static/media/en-US.0i80fi4aa4liy.svg")},419568,e=>{e.q("/_next/static/media/es.3jwq6b1aedu03.svg")},22857,e=>{e.q("/_next/static/media/et.2vphvd7dupyoi.svg")},590149,e=>{e.q("/_next/static/media/eu.0268p2q9me4fv.svg")},722253,e=>{e.q("/_next/static/media/fa.25o1m1av7p56o.svg")},298860,e=>{e.q("/_next/static/media/fi.0icgbywumbgxs.svg")},669980,e=>{e.q("/_next/static/media/fr.2qtnmmkygkwo0.svg")},821828,e=>{e.q("/_next/static/media/ga.2in2hao5yrc75.svg")},72625,e=>{e.q("/_next/static/media/gl.1fi124p5xfx0e.svg")},337077,e=>{e.q("/_next/static/media/gu.23o1lp_ompvci.svg")},530098,e=>{e.q("/_next/static/media/ha.08p8tfb041qvh.svg")},434874,e=>{e.q("/_next/static/media/he.23_79c33ymfry.svg")},332811,e=>{e.q("/_next/static/media/hi.23o1lp_ompvci.svg")},229789,e=>{e.q("/_next/static/media/hr.04bys4huewk8_.svg")},357266,e=>{e.q("/_next/static/media/hu.2mgk5ohjcqwhf.svg")},151589,e=>{e.q("/_next/static/media/id.2p_bmmjx0hlmc.svg")},391382,e=>{e.q("/_next/static/media/ig.08p8tfb041qvh.svg")},741374,e=>{e.q("/_next/static/media/is.2im7rvbdjxgeo.svg")},817012,e=>{e.q("/_next/static/media/it.28jj5t2w1e8n9.svg")},698960,e=>{e.q("/_next/static/media/ja.07kbrn116x9rq.svg")},484530,e=>{e.q("/_next/static/media/kk.1mgsvosss8wkm.svg")},622814,e=>{e.q("/_next/static/media/ko.3nm9b2rm0e892.svg")},48927,e=>{e.q("/_next/static/media/lb.3yyrwyr23dg46.svg")},189122,e=>{e.q("/_next/static/media/lt.0dvkjcjv0ujf-.svg")},699756,e=>{e.q("/_next/static/media/lv.2rtcxxkt2iw2r.svg")},976290,e=>{e.q("/_next/static/media/mk.2gyoisr3ezc__.svg")},524714,e=>{e.q("/_next/static/media/mr.23o1lp_ompvci.svg")},881650,e=>{e.q("/_next/static/media/ms.2r-9xrwm_hib5.svg")},871302,e=>{e.q("/_next/static/media/mt.16_8tss0uvig-.svg")},655025,e=>{e.q("/_next/static/media/my.0ps2-wsd1e3ej.svg")},612042,e=>{e.q("/_next/static/media/ne.3eymdwb96xxqe.svg")},756882,e=>{e.q("/_next/static/media/nl.032d_gwegw-fa.svg")},20779,e=>{e.q("/_next/static/media/no.29b6jdvgi8o5y.svg")},554622,e=>{e.q("/_next/static/media/pa.23o1lp_ompvci.svg")},270903,e=>{e.q("/_next/static/media/pl.2n39rbxemzpae.svg")},734914,e=>{e.q("/_next/static/media/pt-BR.1lim59_m3v1o5.svg")},286034,e=>{e.q("/_next/static/media/pt-PT.30uq3q4ca_-ob.svg")},35032,e=>{e.q("/_next/static/media/ro.0mkw5mp9tsi4b.svg")},971513,e=>{e.q("/_next/static/media/ru.22ziysz1h6pbc.svg")},326412,e=>{e.q("/_next/static/media/sk.389yba_4ysbi9.svg")},825795,e=>{e.q("/_next/static/media/sl.2jikcjz1khewt.svg")},241927,e=>{e.q("/_next/static/media/sq.3s0ei9o1ve2al.svg")},85374,e=>{e.q("/_next/static/media/sr.3fp59pzcoe7zm.svg")},254501,e=>{e.q("/_next/static/media/sv.0x4bam4k37dur.svg")},814034,e=>{e.q("/_next/static/media/sw.3togoiu71nn3q.svg")},314097,e=>{e.q("/_next/static/media/ta.23o1lp_ompvci.svg")},402239,e=>{e.q("/_next/static/media/te.23o1lp_ompvci.svg")},515529,e=>{e.q("/_next/static/media/th.0ma-9fgy1_vj8.svg")},403521,e=>{e.q("/_next/static/media/tl.3azj0xmcy1tgi.svg")},621515,e=>{e.q("/_next/static/media/tr.29qgv6gtc7976.svg")},265020,e=>{e.q("/_next/static/media/uk.1guqasah1gjce.svg")},196285,e=>{e.q("/_next/static/media/ur.3o6tl1hm52y_f.svg")},348592,e=>{e.q("/_next/static/media/uz.44sh_x0fgp11k.svg")},907529,e=>{e.q("/_next/static/media/vi.0c164k5hbr83_.svg")},244534,e=>{e.q("/_next/static/media/yo.08p8tfb041qvh.svg")},680468,e=>{e.q("/_next/static/media/zh-CN.0xbthc_a9bbwn.svg")},210956,e=>{e.q("/_next/static/media/zh.0xbthc_a9bbwn.svg")},558221,e=>{e.q("/_next/static/media/zu.1pxy20vfsgof_.svg")}]);