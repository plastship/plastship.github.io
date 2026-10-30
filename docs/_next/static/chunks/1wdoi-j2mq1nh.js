(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,562520,e=>{var t=e.i(997053);let r=t.U.span.withConfig({displayName:"InputLabel.styles__InfoSymbol",componentId:"sc-3af739ba-0"})`
  align-items: center;
  background-color: ${e=>e.theme.palette.default.black};
  border-radius: 100%;
  color: ${e=>e.theme.palette.default.white};
  display: inline-flex;
  font-weight: bolder;
  height: 20px;
  justify-content: center;
  width: 20px;
`,n=t.U.label.withConfig({displayName:"InputLabel.styles__Root",componentId:"sc-3af739ba-1"})`
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  letter-spacing: inherit;
  cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
  width: 100%;
  color: ${e=>e.$error?e.theme.palette.default.error:e.theme.palette.default.black};
  margin-bottom: ${e=>e.theme.margin.small};
  user-select: none;
  display: block;

  span:not(${r}),
  a {
    display: inline-block;
  }
`,a=t.U.button.withConfig({displayName:"InputLabel.styles__InfoButton",componentId:"sc-3af739ba-2"})`
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin: 0 0 0 10px;
  outline: none;
  padding: 0;
`,l=t.U.span.withConfig({displayName:"InputLabel.styles__InfoPlaceholder",componentId:"sc-3af739ba-3"})`
  display: inline-block;
  width: 20px;
  height: 20px;
  margin: 0 0 0 10px;
  vertical-align: middle;
`,i=t.U.h1.withConfig({displayName:"InputLabel.styles__TooltipHeadline",componentId:"sc-3af739ba-4"})`
  color: ${e=>e.theme.palette.default.white};
  font-size: 0.85rem;
  font-weight: bold;
  margin-bottom: 10px;
`,o=t.U.div.withConfig({displayName:"InputLabel.styles__TooltipContent",componentId:"sc-3af739ba-5"})`
  max-width: 300px;
  text-align: left;
`,s=t.U.sup.withConfig({displayName:"InputLabel.styles__Sup",componentId:"sc-3af739ba-6"})``;e.s(["N",0,a,"u",0,l,"p",0,r,"F",0,n,"g",0,s,"Y",0,o,"v",0,i])},655171,e=>{var t=e.i(843476),r=e.i(271645),n=e.i(770703),a=e.i(562520);let l=(0,n.default)(()=>e.A(135869).then(e=>e.InputLabelInfo),{loadableGenerated:{modules:[539032]},loading:()=>(0,t.jsx)(a.u,{"aria-hidden":"true","data-testid":"InputLabel-info-loading"})}),i=r.default.forwardRef(function(e,r){let{children:n,className:i,infoTextTitle:o,infoTextContent:s,htmlFor:u,required:c=!1,$required:d,error:f=!1,$error:_,disabled:g=!1,$disabled:p,dataTestId:h}=e,b="string"==typeof o&&o.length>0&&"string"==typeof s&&s.length>0;return(0,t.jsxs)(a.F,{ref:r,className:i,htmlFor:u,$error:void 0!==_?_:"boolean"==typeof f?f:!!f,$required:void 0!==d?d:c,$disabled:void 0!==p?p:g,"data-testid":h||"InputLabel-root",children:[n,b&&(0,t.jsx)(l,{title:o,content:s}),c&&(0,t.jsx)(a.g,{children:"*"})]})});i.displayName="InputLabel",e.s(["f",0,i])},523853,e=>{var t=e.i(997053),r=e.i(655171);t.U.input.withConfig({displayName:"InputSwitch.styles__Input",componentId:"sc-d628574b-0"})`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  opacity: 0;
  width: 2.4375rem;
  height: 1.75rem;
  margin: 0;
  padding: 0;
  position: absolute;
  border: none;
  outline: none;
  cursor: pointer;
  top: 0;
  left: 0;
  z-index: 20;
`;let n=t.U.span.withConfig({displayName:"InputSwitch.styles__Slider",componentId:"sc-d628574b-1"})`
  position: absolute;
  top: 3px;
  left: 3px;
  background: ${e=>e.theme.palette.default.primary};
  border-radius: 0.5rem;
  width: 18px;
  height: 18px;
  transition: 0.4s;
  display: flex;
  align-items: center;
  justify-content: center;

  &::after {
    content: '';
    display: block;
  }

  ${e=>!e.$checked&&`
    &::after {
      width: 8px;
      height: 8px;
      border: 2px solid ${e.theme.palette.default.white};
      border-radius: 50%;
    }
  `}

  ${e=>e.$checked&&`
    transform: translateX(24px);
    background: ${e.theme.palette.default.white};
    &::after {
      width: 2px;
      height: 10px;
      background: ${e.theme.palette.default.primary};
      border-radius: 1px;
    }
  `}

  ${e=>e.$disabled&&`
    opacity: 0.5;
    cursor: not-allowed;
  `}

  ${e=>e.$error&&`
    background: ${e.theme.palette.default.error};
  `}
`,a=t.U.div.withConfig({displayName:"InputSwitch.styles__Switch",componentId:"sc-d628574b-2"})`
  min-width: 3rem;
  width: 3rem;
  height: 1.5rem;
  border-radius: 0.75rem;
  background: ${e=>e.theme.palette.default.white};
  position: relative;
  margin-right: ${e=>e.theme.margin.small};
  border: 0.0625rem solid
    ${e=>e.$error?e.theme.palette.default.error:e.theme.palette.default.primary};
  z-index: 10;
  position: relative;
  cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
  opacity: ${e=>e.$disabled?.5:1};

  ${e=>e.$checked&&`
    background: ${e.theme.palette.default.primary};
  `}
`;(0,t.U)(r.f).withConfig({displayName:"InputSwitch.styles__StyledInputLabel",componentId:"sc-d628574b-3"})`
  margin: 0;
  color: ${({$error:e,theme:t})=>e?t.palette.default.error:t.palette.default.black};
  opacity: ${({$disabled:e})=>e?.5:1};
`,t.U.div.withConfig({displayName:"InputSwitch.styles__LabelInputWrapper",componentId:"sc-d628574b-4"})`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`,t.U.div.withConfig({displayName:"InputSwitch.styles__Root",componentId:"sc-d628574b-5"})`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: ${e=>e.theme.margin.default};
`,e.s(["k",0,n,"Z",0,a])},929842,619249,e=>{e.s(["K",()=>u,"D",()=>s],929842),e.s(["W",()=>o,"B",()=>l],619249);var t,r=e.i(843476),n=e.i(997053);let a=n.m`
  word-wrap: break-word;
  width: 100%;
  margin-bottom: ${({theme:e})=>e.margin.default};
  font-family: ${({theme:e})=>e.font.primaryFamily};
  text-transform: uppercase;
  word-wrap: break-word;
`,l=(e,t="desktop")=>n.m`
  ${({theme:r})=>{let a=r.font.headline[(e=>{switch(e){case s.h1:return"one";case s.h2:return"two";case s.h3:return"three";case s.h4:return"four";case s.h5:return"five";default:return"one"}})(e)][t];return n.m`
      font-size: ${a.fontSize};
      line-height: ${a.lineHeight};
      font-weight: ${a.fontWeight};
      letter-spacing: ${a.letterSpacing};
    `}}
`,i=n.m`
  ${a}
  ${({$styleLevel:e})=>l(e,"mobile")}

  @media screen and (min-width: ${({theme:e})=>e.device.mobile}) {
    ${({$styleLevel:e})=>l(e,"desktop")}
  }
`,o=n.U.h1.withConfig({displayName:"Headline.styles__StyledHeadline",componentId:"sc-aba532a1-0"})`
  ${i}
`;var s=((t={})[t.h1=1]="h1",t[t.h2=2]="h2",t[t.h3=3]="h3",t[t.h4=4]="h4",t[t.h5=5]="h5",t);let u=e=>{let{children:t,className:n,importance:a,renderAs:l,dataTestId:i}=e;return(0,r.jsx)(o,{as:(e=>{switch(e){case 1:default:return"h1";case 2:return"h2";case 3:return"h3";case 4:return"h4";case 5:return"h5"}})(a),$styleLevel:l||a,className:n,"data-testid":i||"Headline-root",children:t})}},699779,e=>{let t=e.i(929842).K;e.s(["f",0,t])},573236,920754,e=>{var t=e.i(843476),r=e.i(997053);let n=r.U.svg.withConfig({displayName:"IconArrowLeft.styles__Root",componentId:"sc-6d9f062c-0"})``,a=e=>(0,t.jsx)(n,{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",className:e.className,"data-testid":"icon-arrow-left-root",children:(0,t.jsx)("path",{d:"M10.6667 19L4 12M4 12L10.6667 5M4 12L20 12",stroke:e.strokeColor||"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})});e.s(["f",0,a],920754),e.s(["f",0,a],573236)},898560,e=>{let t=e.i(201927).f;e.s(["f",0,t])},3338,e=>{var t=e.i(843476),r=e.i(997053);let n=r.U.svg.withConfig({displayName:"IconStar.styles__Root",componentId:"sc-ca25a9a4-0"})``;e.s(["f",0,e=>(0,t.jsx)(n,{className:e.className,"data-testid":"icon-star-root",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("polygon",{points:"12 2.245 15.039 8.403 21.836 9.39 16.918 14.185 18.079 20.954 12 17.759 5.921 20.954 7.082 14.185 2.164 9.39 8.961 8.403 12 2.245",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"square",strokeLinejoin:"miter",strokeMiterlimit:"10"})})],3338)},680743,e=>{e.s(["Z",()=>c,"A",()=>u],680743);var t,r=e.i(843476),n=e.i(997053),a=e.i(994244);let l=(e,t)=>e.palette.status[(e=>{switch(e){case u.INFO:return"info";case u.WARNING:return"warning";case u.SUCCESS:return"success";case u.ERROR:return"error";case u.NEUTRAL:default:return"neutral"}})(t)],i=n.m`
  align-items: center;
  gap: 6px;
  border-radius: 8px;
  display: inline-flex;
  font-family: ${e=>e.theme.font.primaryFamily};
  justify-content: center;
  padding: 4px 8px;
  font-size: 12px;
  font-weight: 600;
  text-align: center;
  margin: 0 4px 4px 0;
  border: 1px solid ${e=>l(e.theme,e.$modifier).border};
  ${(0,a.m)()}
  background-color: ${e=>e.$backgroundColor||l(e.theme,e.$modifier).bg};
  color: ${e=>e.$color||l(e.theme,e.$modifier).text};
  cursor: ${e=>e.$clickable?"pointer":"default"};
`,o=n.U.span.withConfig({displayName:"Pill.styles__Root",componentId:"sc-96750d3f-0"})`
  ${i}
`,s=n.U.button.withConfig({displayName:"Pill.styles__RootButton",componentId:"sc-96750d3f-1"})`
  ${i}
  appearance: none;
  line-height: inherit;
  transition:
    border-color 0.15s ease,
    background-color 0.15s ease;

  &:hover {
    border-color: ${e=>e.theme.palette.default.primary};
  }

  &:focus-visible {
    outline: 2px solid ${e=>e.theme.palette.default.primary};
    outline-offset: 1px;
  }
`;var u=((t={}).NEUTRAL="neutral",t.INFO="info",t.WARNING="warning",t.SUCCESS="success",t.ERROR="error",t);let c=e=>{let{onClick:t,children:n,modifier:a,color:l,backgroundColor:i,dataTestId:u="pill-root",pressed:c,count:d,state:f,title:_,className:g}=e,p=t?()=>t("string"==typeof n?n:""):void 0,h={className:g,title:_,"data-testid":u,"data-count":d,"data-state":f,$modifier:a,$color:l,$backgroundColor:i,$clickable:!!t};return void 0!==c?(0,r.jsx)(s,{type:"button","aria-pressed":c,"data-selected":c?"true":"false",onClick:p,...h,children:n}):(0,r.jsx)(o,{onClick:p,...h,children:n})}},830762,e=>{var t=e.i(997053);let r=t.q`
  0% { box-shadow: 0 0 0 0 rgba(185, 28, 28, 0.45); }
  70% { box-shadow: 0 0 0 5px rgba(185, 28, 28, 0); }
  100% { box-shadow: 0 0 0 0 rgba(185, 28, 28, 0); }
`,n=t.U.span.withConfig({displayName:"AttentionBadge.styles__Root",componentId:"sc-a78e8119-0"})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
`,a={dringend:"#dc2626",warnung:"#f59e0b",info:"#3b82f6"},l=t.U.span.withConfig({displayName:"AttentionBadge.styles__Dot",componentId:"sc-a78e8119-1"})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: ${({$level:e})=>a[e]};
  color: #ffffff;
  font-size: 10px;
  font-weight: 700;
  line-height: 1;
  cursor: default;
  user-select: none;

  ${({$pulse:e})=>e&&t.m`
      animation: ${r} 2s infinite;
    `}
`,i=t.U.span.withConfig({displayName:"AttentionBadge.styles__InheritedDot",componentId:"sc-a78e8119-2"})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  box-sizing: border-box;
  border: 2px solid ${({$level:e})=>a[e]};
  background-color: transparent;
  color: ${({$level:e})=>a[e]};
  font-size: 9px;
  font-weight: 700;
  line-height: 1;
  cursor: default;
  user-select: none;
`;e.s(["R",0,l,"W",0,i,"F",0,n])},113466,295735,e=>{var t=e.i(843476),r=e.i(271645),n=e.i(49958),a=e.i(830762);e.i(849871);var l=e.i(352706);e.i(821194);var i=e.i(99222),o=e.i(245904);let s=new Set(["user","rigk"]);e.s(["f",0,({entityType:e,record:u,detailData:c,className:d,dataTestId:f})=>{let{data:_}=(0,n.useSession)(),{tr:g}=(0,i.f)(),[p,h]=(0,r.useState)(!1),b=(0,r.useRef)(null),m=_?.user?.role;if(m&&s.has(m))return null;let y=(0,o.u)(e,u),k=(0,o.A)(c??u);if(0===y.length&&0===k.length)return null;let S=[...y.map(e=>g(e.labelKey,{defaultValue:e.defaultLabel})),...k.map(e=>`${g("indicators.inheritedPrefix",{defaultValue:"Untergeordnet"})}: ${e.count}\xd7 ${g(e.labelKey,{defaultValue:e.defaultLabel})}`)],A=f??(y.length>0?`attention-badge-${y[0].rule}`:`attention-badge-inherited-${k[0].rule}`);return(0,t.jsxs)(a.F,{ref:b,className:d,onMouseEnter:()=>h(!0),onMouseLeave:()=>h(!1),"data-testid":A,children:[y.length>0&&(0,t.jsx)(a.R,{$level:y[0].level,$pulse:"dringend"===y[0].level,children:"!"}),k.length>0&&(0,t.jsx)(a.W,{$level:k[0].level,"data-testid":`${A}-inherited`,children:"!"}),(0,t.jsx)(l.f,{content:S.join("\n"),isVisible:p,position:"bottom",anchorRef:b})]})}],295735),e.s([],113466)},196634,534210,e=>{function t(e,t){let r=e=>e*Math.PI/180,n=r(t.lat-e.lat),a=r(t.lng-e.lng),l=Math.sin(n/2)**2+Math.cos(r(e.lat))*Math.cos(r(t.lat))*Math.sin(a/2)**2;return 12742*Math.atan2(Math.sqrt(l),Math.sqrt(1-l))}let r=e=>Math.round(10*e)/10;function n(e){let r=0;for(let n=1;n<e.length;n++)r+=t(e[n-1],e[n]);return r}e.s(["_",0,t,"p",0,n,"e",0,r],534210);class a extends Error{status;constructor(e){super(`geo ${e}`),this.status=e,this.name="GeoClientError"}}let l=new Map;function i(e,t){let r=l.get(e);if(r)return r;let n=t().catch(t=>{throw l.delete(e),t});return l.size>=200&&l.delete(l.keys().next().value),l.set(e,n),n}async function o(e,t,r){let n=await fetch(`/api/geo/${e}/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t),signal:r});if(!n.ok)throw new a(n.status);return await n.json()}let s=!1;e.s(["z",0,function(e,t="car"){if(s)return Promise.reject(new a(503));let r={points:e.map(e=>({lat:e.lat,lng:e.lng})),mode:t};return i(`t:${JSON.stringify(r)}`,()=>o("route",r).then(e=>e.route).catch(e=>{throw e instanceof a&&503===e.status&&(s=!0),e}))},"w",0,function(e,t={}){let r={q:e.trim(),lang:t.lang,limit:t.limit,near:t.near};return i(`s:${JSON.stringify(r)}`,()=>o("search",r,t.signal).then(e=>e.places??[]))},"u",0,function(e){return{distanceKm:r(n(e)),durationMin:0,geometry:e.map(e=>[e.lng,e.lat]),source:"straight"}}],196634)},943962,e=>{var t=e.i(271645);e.s(["f",0,function(e,r){let n=(0,t.useRef)(null),a=(0,t.useRef)(e);return(0,t.useEffect)(()=>{a.current=e},[e]),(0,t.useEffect)(()=>()=>{n.current&&clearTimeout(n.current)},[]),(0,t.useCallback)((...e)=>{n.current&&clearTimeout(n.current),n.current=setTimeout(()=>{a.current(...e)},r)},[r])}])},555508,e=>{e.i(821194);var t=e.i(99222),r=e.i(929666);e.s(["f",0,function(){let{i18n:e}=(0,t.f)();return(0,r.j)(e?.language)}])},863297,e=>{var t=e.i(266027),r=e.i(954616),n=e.i(912598),a=e.i(501496);let l={staleTime:6e4,retry:3,retryDelay:e=>Math.min(1e3*2**e,3e4),refetchOnWindowFocus:!1},i=(e,t,r)=>{let n=[e];return t&&n.push(t),r&&n.push(...r),n},o=e=>"create"===e,s=(e,t)=>!o(t)&&(e?.enabled!==void 0?e.enabled:!!t),u=(e,t)=>{let r=e?.response?.status;throw 403!==r&&404!==r&&console.error(`Error in ${t} operation:`,e),e},c=e=>{let t={"/salesforce/material-analyses":"/salesforce/material-analysis","/salesforce/audit-properties":"/salesforce/audit-property","/salesforce/material-proposals":"/salesforce/material-proposals","/salesforce/contact-handovers":"/salesforce/contact-handover","/salesforce/sample-feedbacks":"/salesforce/sample-feedback","/salesforce/sample-sendings":"/salesforce/sample-sending","/salesforce/monitored-materials":"/salesforce/monitored-material","/salesforce/opportunities":"/salesforce/opportunity","/salesforce/opportunitylineitems":"/salesforce/opportunitylineitems","/salesforce/recyclate-compatibilities":"/salesforce/recyclate-compatibility","/monitored-materials-recyclate":"/monitored-materials-recyclate","/rigk/accounts":"/rigk/accounts","/rigk/contacts":"/rigk/contacts","/rigk/status-updates":"/rigk/status-updates","/plastrack/scans":"/plastrack/scan","/plastrack/boxes":"/plastrack/box","/plastship/users":"/plastship/users"};return t[e]?t[e]:e.replace(/s\/$/,"/").replace(/s$/,"")};function d(e,r,n){let o={...l,...n?.customQueryOptions},s=n?.customErrorHandler||(t=>u(t,e));return{useList:n=>{let{pagination:l={page:1,pageSize:25},sort:u={field:"createdAt",order:"DESC"},queryParams:c={},enabled:d=!0,initialData:f}=n||{};return(0,t.f)({queryKey:i(e,void 0,[l,u,c]),queryFn:async()=>{try{let e=new URLSearchParams;l&&(e.set("page",l.page.toString()),e.set("pageSize",l.pageSize.toString())),u&&(e.set("sortField",u.field),e.set("sortOrder",u.order)),Object.entries(c).forEach(([t,r])=>{void 0!==r&&e.set(t,r.toString())});let t=r.endsWith("/")?r:`${r}/`;return(await a.k.get(`${t}?${e}`)).data}catch(e){throw s(e),e}},...o,enabled:d,initialData:f})}}}e.s(["C",0,{SALESFORCE_ACCOUNT:"salesforce-account",SALESFORCE_CASE:"salesforce-case",SALESFORCE_CONTACT:"salesforce-contact",SALESFORCE_TASK:"salesforce-task",SALESFORCE_ORDER:"salesforce-order",SALESFORCE_OPPORTUNITY:"salesforce-opportunity",SALESFORCE_PRODUCT:"salesforce-product",SALESFORCE_PROJECT:"salesforce-project",SALESFORCE_INVOICE:"salesforce-invoice",SALESFORCE_REQUIREMENT:"salesforce-requirement",SALESFORCE_MATERIAL_ANALYSIS:"salesforce-material-analysis",SALESFORCE_MATERIAL_PROPOSAL:"salesforce-material-proposal",SALESFORCE_MONITORED_MATERIAL:"salesforce-monitored-material",SALESFORCE_ONBOARDING:"salesforce-onboarding",SALESFORCE_CONTACT_HANDOVER:"salesforce-contact-handover",SALESFORCE_SAMPLE_FEEDBACK:"salesforce-sample-feedback",SALESFORCE_SAMPLE_SENDING:"salesforce-sample-sending",SALESFORCE_USER:"salesforce-user",SALESFORCE_ORDER_ITEM:"salesforce-orderitem",SALESFORCE_OPPORTUNITY_LINE_ITEM:"salesforce-opportunitylineitem",SALESFORCE_SUPPLIER_AUDIT:"salesforce-supplier-audit",SALESFORCE_PRODUCTION_SITE:"salesforce-production-site",SALESFORCE_COMPANY_CERTIFICATE:"salesforce-company-certificate",SALESFORCE_CONTRACT:"salesforce-contract",SALESFORCE_COST_CENTER:"salesforce-cost-center",SALESFORCE_CERTIFICATE:"salesforce-certificate",SALESFORCE_AUDIT_PROPERTY:"salesforce-audit-property",SALESFORCE_PROZESSFEEDBACK:"salesforce-prozessfeedback",SALESFORCE_RECYCLATE_GRADE:"salesforce-recyclate-grade",SALESFORCE_RECYCLATE_COMPATIBILITY:"salesforce-recyclate-compatibility",PLASTRACK_SCAN:"plastrack-scan",PLASTRACK_BOX:"plastrack-box",PLASTSHIP_USER:"plastship-user",PLASTSHIP_USER_PROFILE:"plastship-user-profile",PLASTSHIP_USERS:"plastship-users",RIGK_ACCOUNT:"rigk-account",RIGK_CONTACT:"rigk-contact",RIGK_STATUS_UPDATE:"rigk-status-update",NOTIFICATION:"notification",MARKET_PRICE:"market-price",PRICE_MOVEMENT:"price-movement"},"W",0,function(e,o,f){let _,g;return{...(_={...l,...f?.customQueryOptions},g=f?.customErrorHandler||(t=>u(t,e)),{useSingle:(r,n)=>(0,t.f)({queryKey:i(e,r),queryFn:async()=>{try{let e=c(o);return(await a.k.get(`${e.replace(/\/$/,"")}/${encodeURIComponent(r)}/`)).data}catch(e){throw g(e),e}},..._,enabled:s(n,r)}),useCreate:()=>{let t=(0,n.d)();return(0,r.f)({mutationFn:async e=>{try{return(await a.k.post(o,e)).data}catch(e){throw g(e),e}},onSuccess:()=>{t.invalidateQueries({queryKey:[e]})}})},useUpdate:()=>{let t=(0,n.d)();return(0,r.f)({mutationFn:async({id:e,data:t})=>{try{let r=c(o);return(await a.k.put(`${r.replace(/\/$/,"")}/${encodeURIComponent(e)}/`,t)).data}catch(e){throw g(e),e}},onSuccess:(r,{id:n})=>{t.invalidateQueries({queryKey:i(e,n)}),t.invalidateQueries({queryKey:[e]})}})}}),...d(e,o,f)}},"A",0,d,"j",0,function(e,o,d){let f,_,g,p;return{...(f={...l,...d?.customQueryOptions},_=d?.customErrorHandler||(t=>u(t,e)),{useSingle:(r,n)=>(0,t.f)({queryKey:i(e,r),queryFn:async()=>{try{let e=c(o);return(await a.k.get(`${e.replace(/\/$/,"")}/${encodeURIComponent(r)}/`)).data}catch(e){throw _(e),e}},...f,enabled:s(n,r)}),useCreate:()=>{let t=(0,n.d)();return(0,r.f)({mutationFn:async e=>{try{return(await a.k.post(o,e)).data}catch(e){throw _(e),e}},onSuccess:()=>{t.invalidateQueries({queryKey:[e]})}})},useUpdate:()=>{let t=(0,n.d)();return(0,r.f)({mutationFn:async({id:e,data:t})=>{try{let r=c(o);return(await a.k.patch(`${r.replace(/\/$/,"")}/${e}/`,t)).data}catch(e){throw _(e),e}},onSuccess:(r,{id:n})=>{t.invalidateQueries({queryKey:i(e,n)}),t.invalidateQueries({queryKey:[e]})}})}}),...(g={...l,...d?.customQueryOptions},p=d?.customErrorHandler||(t=>u(t,e)),{useList:r=>{let{pagination:n={page:1,pageSize:25},sort:l={field:"LastModifiedDate",order:"DESC"},queryParams:s={},enabled:u=!0,initialData:c}=r||{};return(0,t.f)({queryKey:i(e,void 0,[n,l,s]),queryFn:async()=>{try{if(!n||!l)throw Error("Missing required parameters");return(await a.k.get(o,{params:{page:n.page,pageSize:n.pageSize,sortField:l.field,sortOrder:l.order,...s}})).data}catch(e){throw p(e),e}},...g,enabled:u,initialData:c})}})}},"n",0,o])},245904,e=>{var t=e.i(247167),r=e.i(174761),n=e.i(293655),a=e.i(149696);let l=e=>`(${e.map(e=>`'${e.replace(/'/g,"\\'")}'`).join(",")})`,i=new Set(["Web","Email","Dispo","Accounting"]),o={[r.a.BestellungErhalten]:3,[r.a.TransportBeauftragen]:2,[r.a.InformationenEinpflegen]:7},s=e=>{if("string"!=typeof e||!e)return null;let t=Date.parse(e);return Number.isNaN(t)?null:(Date.now()-t)/864e5},u=e=>{let t=s(e);return null!==t&&t>0},c=e=>"string"==typeof e?e:"",d=new Set([r.a.Abgeschlossen,...r.k]),f=r.r.indexOf(r.a.AnlieferungErfolgt),_=new Set(["Closed","Merged","No Action","Rejected"]),g=new Set(["Approved","Rejected"]),p=new Set(["Approved","Rejected","Duplicate","Standard Template"]),h=new Set(["Bezahlt","Gebucht","Storno"]),b=new Set(["Inaktiv","Abgeschlossen"]),m=r.r.slice(0,f),y=r.r.slice(f),k=r.r.slice(0,r.r.indexOf(r.a.TransportBeauftragt)),S=`IsClosed = false AND Status NOT IN ${l([..._])}`,A=/^\d{4}-\d{2}-\d{2}$/.test(t.default.env.NEXT_PUBLIC_FAKTURIERUNG_STICHTAG??"")?t.default.env.NEXT_PUBLIC_FAKTURIERUNG_STICHTAG:"2026-10-01",v=e=>"number"==typeof e?e:0,w=e=>c(e.EffectiveDate).slice(0,10)>=A,L=["Stornorechnung","Stornierte Rechnung"],E=`Status__c NOT IN ${l([...g])}`,N=["Deactivated","Salesforce only","Platform invisible","Platform visible","Proposal Pool","Top Recyclates","Active Push","Distribution"],O=N.indexOf("Proposal Pool"),R=e=>{let t=s(e);return null===t?null:24*t*60},I=e=>{let t=s(e);return null===t?null:t>0?"expired":t>-30?"dueSoon":null},C={Case:[{rule:"case-followup-overdue",soql:`${S} AND Wiedervorlage__c < TODAY`,level:"dringend",labelKey:"indicators.rules.caseFollowUpOverdue",defaultLabel:"Wiedervorlage überfällig",check:e=>!(!0===e.IsClosed||_.has(c(e.Status)))&&u(e.Wiedervorlage__c)},{rule:"case-waiting-customer",soql:"Status = 'Waiting for Customer' AND LastModifiedDate < LAST_N_DAYS:14",level:"warnung",labelKey:"indicators.rules.caseWaitingCustomer",defaultLabel:"Kunde antwortet nicht (> 14 Tage) — erinnern",check:e=>{if("Waiting for Customer"!==c(e.Status))return!1;let t=s(e.LastModifiedDate);return null!==t&&t>14}},{rule:"case-kpi-overdue",soql:e=>`${S} AND First_Touched__c = null AND CreatedDate < ${new Date(e.now.getTime()-18e5).toISOString()}`,level:"dringend",labelKey:"indicators.rules.caseKpiOverdue",defaultLabel:"Über dem KPI-Ziel (30 Min. ohne Erstreaktion)",check:e=>{if(!0===e.IsClosed||_.has(c(e.Status))||e.First_Touched__c)return!1;let t=R(e.CreatedDate);return null!==t&&t>30}},{rule:"case-new-untouched",level:"dringend",labelKey:"indicators.rules.caseNewUntouched",defaultLabel:"Neuer Case ohne Erstreaktion",check:e=>{if(!i.has(c(e.Origin))||"New"!==c(e.Status)||e.First_Touched__c)return!1;let t=R(e.CreatedDate);return null!==t&&t<=30}},{rule:"case-stale",soql:`${S} AND LastModifiedDate < LAST_N_DAYS:7`,level:"warnung",labelKey:"indicators.rules.caseStale",defaultLabel:"Seit über 7 Tagen ohne Update",check:e=>{if(!0===e.IsClosed||_.has(c(e.Status)))return!1;let t=s(e.LastModifiedDate);return null!==t&&t>7}},{rule:"case-no-contact",soql:`${S} AND ContactId = null`,level:"info",labelKey:"indicators.rules.caseNoContact",defaultLabel:"Kein Ansprechpartner hinterlegt",check:e=>!(!0===e.IsClosed||_.has(c(e.Status)))&&(null===e.ContactId||""===e.ContactId)},{rule:"case-origin-dispo",soql:"Origin = 'Dispo'",labelKey:"indicators.rules.caseOriginDispo",defaultLabel:"Dispo",check:e=>"Dispo"===c(e.Origin)},{rule:"case-origin-accounting",soql:"Origin = 'Accounting'",labelKey:"indicators.rules.caseOriginAccounting",defaultLabel:"Accounting",check:e=>"Accounting"===c(e.Origin)}],Order:[{rule:"order-eta-overdue",soql:`Status IN ${l(m)} AND Datum_ETA_NEU__c < TODAY`,level:"dringend",labelKey:"indicators.rules.orderEtaOverdue",defaultLabel:"Liefertermin (ETA) überschritten",check:e=>{let t=c(e.Status);if(!t||d.has(t))return!1;let n=r.r.indexOf(t);return(!(n>=f)||-1===n)&&u(e.Datum_ETA_NEU__c)}},{rule:"order-fakturierung-offen",soql:`Fakturierungsstatus__c = 'Offen' AND Status IN ${l(y)} AND EffectiveDate >= ${A}`,level:"warnung",labelKey:"indicators.rules.orderFakturierungOffen",defaultLabel:"Fakturierung offen",check:e=>"Offen"===c(e.Fakturierungsstatus__c)&&y.includes(c(e.Status))&&w(e)},{rule:"order-eingang-erwartet",soql:`(Offener_Betrag_an_Lieferant__c > 0 OR Offener_Betrag_an_Transporteur__c > 0) AND Status IN ${l(y)} AND EffectiveDate >= ${A}`,level:"warnung",labelKey:"indicators.rules.orderEingangErwartet",defaultLabel:"Eingangsrechnung erwartet",check:e=>(v(e.Offener_Betrag_an_Lieferant__c)>0||v(e.Offener_Betrag_an_Transporteur__c)>0)&&y.includes(c(e.Status))&&w(e)},{rule:"order-keine-rechnung-noetig",soql:"Keine_Ausgangsrechnung_n_tig__c = true",labelKey:"indicators.rules.orderKeineRechnungNoetig",defaultLabel:"Keine Rechnung nötig",check:e=>!0===e.Keine_Ausgangsrechnung_n_tig__c},{rule:"order-pickup-overdue",soql:`Status IN ${l(k)} AND Datum_Abholung_NEU__c < TODAY`,level:"dringend",labelKey:"indicators.rules.orderPickupOverdue",defaultLabel:"Abholtermin überschritten — Transport nicht beauftragt",check:e=>{let t=c(e.Status);if(!t||d.has(t))return!1;let n=r.r.indexOf(t),a=r.r.indexOf(r.a.TransportBeauftragt);return -1!==n&&!(n>=a)&&u(e.Datum_Abholung_NEU__c)}},{rule:"order-step-stalled",soql:Object.entries(o).map(([e,t])=>`(Status = '${(0,a.L)(e)}' AND LastModifiedDate < LAST_N_DAYS:${t})`).join(" OR "),level:"warnung",labelKey:"indicators.rules.orderStepStalled",defaultLabel:"Hängt im Prozessschritt",check:e=>{let t=o[c(e.Status)];if(void 0===t)return!1;let r=s(e.LastModifiedDate);return null!==r&&r>t}},{rule:"order-in-progress",soql:`Status IN ${l(k)}`,level:"info",labelKey:"indicators.rules.orderInProgress",defaultLabel:"In Bearbeitung — nächster Prozessschritt offen",check:e=>{let t=r.r.indexOf(c(e.Status));return -1!==t&&t<r.r.indexOf(r.a.TransportBeauftragt)}}],Sample_Sending__c:[{rule:"ss-ordered-no-delivery",level:"warnung",labelKey:"indicators.rules.sampleSendingOrderedNoDelivery",defaultLabel:"Bestellt, seit über 14 Tagen nicht versendet — nachhaken",check:e=>{if("Ordered"!==c(e.Status__c))return!1;let t=s(e.Datum_Bestellung__c);return null!==t&&t>14}},{rule:"ss-not-sent",level:"info",labelKey:"indicators.rules.sampleSendingNotSent",defaultLabel:"Versand noch nicht beauftragt",check:e=>["Draft","Ready"].includes(c(e.Status__c))},{rule:"ss-sent-no-feedback",level:"warnung",labelKey:"indicators.rules.sampleSendingNoFeedback",defaultLabel:"Versendet, seit über 14 Tagen kein Eingang bestätigt",check:e=>{if("Sent"!==c(e.Status__c))return!1;let t=s(e.Datum_Versand__c);return null!==t&&t>14}}],Material_Proposal__c:[{rule:"mp-no-action",soql:`Status__c IN ${l(["Offer communicated","Sample sent to customer"])} AND LastModifiedDate < LAST_N_DAYS:14`,level:"warnung",labelKey:"indicators.rules.materialProposalNoAction",defaultLabel:"Keine Aktion seit über 14 Tagen nach Angebot/Muster",check:e=>{if(!["Offer communicated","Sample sent to customer"].includes(c(e.Status__c)))return!1;let t=s(e.LastModifiedDate);return null!==t&&t>14}},{rule:"mp-no-product",soql:`${E} AND Product__c = null`,level:"warnung",labelKey:"indicators.rules.materialProposalNoProduct",defaultLabel:"Produkt fehlt",check:e=>!g.has(c(e.Status__c))&&(null===e.Product__c||""===e.Product__c)},{rule:"mp-followup-overdue",soql:`MP_Follow_Up_Overdue__c = true AND ${E}`,level:"warnung",labelKey:"indicators.rules.materialProposalFollowUpOverdue",defaultLabel:"Follow-up fällig/überfällig",check:e=>!0===e.MP_Follow_Up_Overdue__c&&!g.has(c(e.Status__c))},{rule:"mp-prep-stalled",soql:`Status__c IN ${l(["Platform request","In preparation"])} AND LastModifiedDate < LAST_N_DAYS:14`,level:"warnung",labelKey:"indicators.rules.materialProposalPrepStalled",defaultLabel:"In Vorbereitung ohne Bewegung (> 14 Tage)",check:e=>{if(!["Platform request","In preparation"].includes(c(e.Status__c)))return!1;let t=s(e.LastModifiedDate);return null!==t&&t>14}},{rule:"mp-no-followup",soql:`Status__c NOT IN ${l([...p])} AND Follow_Up_Date__c = null`,level:"warnung",labelKey:"indicators.rules.materialProposalNoFollowUp",defaultLabel:"Kein Follow-up-Datum gesetzt",check:e=>!p.has(c(e.Status__c))&&null===e.Follow_Up_Date__c}],Contact:[{rule:"contact-email-bounced",level:"warnung",labelKey:"indicators.rules.contactEmailBounced",defaultLabel:"E-Mail unzustellbar — Kontaktdaten korrigieren",check:e=>!0===e.IsEmailBounced}],Onboarding__c:[{rule:"onboarding-pending",level:"warnung",labelKey:"indicators.rules.onboardingPending",defaultLabel:"Onboarding nicht durchgeführt",check:e=>{if(!1!==e.Onboarding_durchgef_hrt__c)return!1;if(e.Zeitpunkt_des_Onboardings__c)return u(e.Zeitpunkt_des_Onboardings__c);let t=s(e.CreatedDate);return null!==t&&t>14}}],Account:[{rule:"account-unqualified",soql:"Vollqualifiziert__c = false AND (Count_Auftr_ge_Kunde__c > 0 OR Count_Auftr_ge_Lieferant__c > 0)",level:"warnung",labelKey:"indicators.rules.accountUnqualified",defaultLabel:"Aufträge vorhanden, Account nicht vollqualifiziert",check:e=>{if(!1!==e.Vollqualifiziert__c)return!1;let t=e.Count_Auftr_ge_Kunde__c,r=e.Count_Auftr_ge_Lieferant__c;return"number"==typeof t&&t>0||"number"==typeof r&&r>0}},{rule:"account-dormant",soql:"(Verh_ltnis__c LIKE '2%' OR Verh_ltnis__c LIKE '3%') AND LastModifiedDate < LAST_N_DAYS:180",level:"info",labelKey:"indicators.rules.accountDormant",defaultLabel:"Kunde/Partner ohne Kontakt seit über 180 Tagen",check:e=>{let t=c(e.Verh_ltnis__c);if(!t.startsWith("2")&&!t.startsWith("3"))return!1;let r=s(e.LastModifiedDate);return null!==r&&r>180}}],Supplier_Audit__c:[{rule:"audit-expired",level:"dringend",labelKey:"indicators.rules.auditExpired",defaultLabel:"Audit nicht mehr gültig",check:e=>"expired"===I(e.Valid_to__c)},{rule:"audit-due-soon",level:"warnung",labelKey:"indicators.rules.auditDueSoon",defaultLabel:"Audit wird fällig (Gültigkeit endet in < 30 Tagen)",check:e=>"dueSoon"===I(e.Valid_to__c)}],Unternehmenszertifikat__c:[{rule:"certificate-expired",level:"dringend",labelKey:"indicators.rules.certificateExpired",defaultLabel:"Zertifikat abgelaufen",check:e=>"expired"===I(e.G_ltig_bis__c)},{rule:"certificate-due-soon",level:"warnung",labelKey:"indicators.rules.certificateDueSoon",defaultLabel:"Zertifikat läuft ab (in < 30 Tagen)",check:e=>"dueSoon"===I(e.G_ltig_bis__c)}],Projekt__c:[{rule:"project-focus-overdue",level:"dringend",labelKey:"indicators.rules.projectFocusOverdue",defaultLabel:"Fokusprojekt über der Deadline",check:e=>!b.has(c(e.Status__c))&&!0===e.IST_Fokusprojekt__c&&u(e.Projektdeadline__c)},{rule:"project-deadline-overdue",level:"warnung",labelKey:"indicators.rules.projectDeadlineOverdue",defaultLabel:"Projektdeadline überschritten",check:e=>!b.has(c(e.Status__c))&&!0!==e.IST_Fokusprojekt__c&&u(e.Projektdeadline__c)},{rule:"project-focus-window-expired",level:"warnung",labelKey:"indicators.rules.projectFocusWindowExpired",defaultLabel:"Fokus-Zeitraum abgelaufen — verlängern oder Fokus nehmen",check:e=>!b.has(c(e.Status__c))&&!0===e.IST_Fokusprojekt__c&&u(e.Fokusprojekt_bis__c)},{rule:"project-followup-due",level:"info",labelKey:"indicators.rules.projectFollowUpDue",defaultLabel:"Projektwiedervorlage fällig",check:e=>!b.has(c(e.Status__c))&&u(e.Projektwiedervorlage__c)}],Bedarfe__c:[{rule:"requirement-unworked",level:"warnung",labelKey:"indicators.rules.requirementUnworked",defaultLabel:"Kein Monatsbedarf oder kein Material Proposal angebunden",check:e=>{let t=c(e.Bedarfsstatus__c);if(!t||"On hold"===t)return!1;let r=e.Monatsbedarf_t__c,n=e.Count_Material_Proposal__c;return null===r||0===r||"number"==typeof n&&0===n}},{rule:"requirement-stale",level:"warnung",labelKey:"indicators.rules.requirementStale",defaultLabel:"Aktiver Bedarf ohne Bewegung (> 30 Tage)",check:e=>{if(!["Bestätigter Bedarf","Aktuell auf der Suche"].includes(c(e.Bedarfsstatus__c)))return!1;let t=s(e.LastModifiedDate);return null!==t&&t>30}},{rule:"requirement-no-assessment",level:"info",labelKey:"indicators.rules.requirementNoAssessment",defaultLabel:"Keine Potenzial-/Risikobewertung",check:e=>{let t=c(e.Bedarfsstatus__c);return!!t&&"On hold"!==t&&null===e.Risikobewertung__c}},{rule:"requirement-new-undecided",level:"info",labelKey:"indicators.rules.requirementNewUndecided",defaultLabel:"Neu, ohne Entscheidung (kein MP, kein Projekt, nicht in Bearbeitung)",check:e=>{let t=s(e.CreatedDate);if(null===t||t>30||["In Bearbeitung durch plastship","On hold"].includes(c(e.Bedarfsstatus__c)))return!1;let r=e.Count_Material_Proposal__c;return(null===r||0===r)&&null===e.Projekt__c}}],Monitored_Material__c:[{rule:"mm-report-outdated",level:"warnung",labelKey:"indicators.rules.mmReportOutdated",defaultLabel:"Report älter als 1 Jahr",check:e=>{let t=s(e.Datum_Report__c);return null!==t&&t>365}}],Materialanalyse__c:[{rule:"ma-results-overdue",level:"dringend",labelKey:"indicators.rules.maResultsOverdue",defaultLabel:"Ergebnis benötigt bis überschritten — keine Werte erfasst",check:e=>u(e.Ergebnis_ben_tigt_bis__c)&&0===e.Audit_Property_Value_Count__c},{rule:"ma-no-properties",level:"warnung",labelKey:"indicators.rules.maNoProperties",defaultLabel:"Keine Prüfparameter angelegt",check:e=>0===e.Audit_Property_Count__c}],Product2:[{rule:"product-visible-incomplete",level:"warnung",labelKey:"indicators.rules.productVisibleIncomplete",defaultLabel:"Auf der Plattform sichtbar, aber Preis oder Menge fehlt",check:e=>{if(N.indexOf(c(e.Sales_Intent__c))<N.indexOf("Platform visible"))return!1;let t=null===e.Platform_Price__c,r=null===e.Amount_monthly__c||0===e.Amount_monthly__c;return t||r}},{rule:"product-pool-unworked",level:"warnung",labelKey:"indicators.rules.productPoolUnworked",defaultLabel:"Im Proposal Pool, aber kein Material Proposal oder keine Bewertung",check:e=>{if(N.indexOf(c(e.Sales_Intent__c))<O)return!1;let t=e.Count_Material_Proposal__c,r=null===e.Risikobewertung__c;return"number"==typeof t&&0===t||r}},{rule:"product-premium-no-tradename",level:"info",labelKey:"indicators.rules.productPremiumNoTradeName",defaultLabel:"Premium-Vermarktung ohne Trade Name",check:e=>!(N.indexOf(c(e.Sales_Intent__c))<N.indexOf("Top Recyclates"))&&(null===e.Trade_Name__c||""===e.Trade_Name__c)},{rule:"product-new-undecided",level:"info",labelKey:"indicators.rules.productNewUndecided",defaultLabel:"Neu, ohne Entscheidung (kein MP, kein Projekt, keine Vermarktungsstufe)",check:e=>{let t=s(e.CreatedDate);if(null===t||t>30||N.indexOf(c(e.Sales_Intent__c))>=O)return!1;let r=e.Count_Material_Proposal__c;return(null===r||0===r)&&null===e.Projekt__c}}],Abrechnung__c:[{rule:"invoice-payment-overdue",soql:`Status_der_Abrechnung__c NOT IN ${l([...h])} AND Datum_gezahlt__c = null AND Zahlungsziel__c < TODAY`,level:"dringend",labelKey:"indicators.rules.invoicePaymentOverdue",defaultLabel:"Zahlungsziel überschritten — Zahlung offen",check:e=>!h.has(c(e.Status_der_Abrechnung__c))&&!e.Datum_gezahlt__c&&u(e.Zahlungsziel__c)},{rule:"invoice-eingang-bearbeiten",soql:`Rechnungstyp__c = 'Eingang' AND Offene_Punkte__c != null AND Status_der_Abrechnung__c NOT IN ${l([...h])}`,level:"warnung",labelKey:"indicators.rules.invoiceEingangBearbeiten",defaultLabel:"Eingang bearbeiten — offene Punkte",check:e=>"Eingang"===c(e.Rechnungstyp__c)&&""!==c(e.Offene_Punkte__c)&&!h.has(c(e.Status_der_Abrechnung__c))},{rule:"invoice-rueckstellung-empfohlen",soql:"Rechnungstyp__c = 'Eingang' AND Kategorie__c = 'Prognose' AND CreatedDate < LAST_N_DAYS:14",level:"warnung",labelKey:"indicators.rules.invoiceRueckstellungEmpfohlen",defaultLabel:"Rückstellung empfohlen (Prognose älter als 14 Tage)",check:e=>{if("Eingang"!==c(e.Rechnungstyp__c)||"Prognose"!==c(e.Kategorie__c))return!1;let t=s(e.CreatedDate);return null!==t&&t>14}},{rule:"invoice-soll-ist",soql:"Rechnungstyp__c = 'Ausgang' AND Differenz_SOLL_IST__c != null AND Differenz_SOLL_IST__c != 0",level:"info",labelKey:"indicators.rules.invoiceSollIst",defaultLabel:"SOLL/IST weicht ab",check:e=>"Ausgang"===c(e.Rechnungstyp__c)&&"number"==typeof e.Differenz_SOLL_IST__c&&0!==e.Differenz_SOLL_IST__c},{rule:"invoice-rechnung-erstellen",soql:"Rechnungstyp__c = 'Ausgang' AND Belegnummer__c = null AND Kategorie__c != 'Stornierte Rechnung'",labelKey:"indicators.rules.invoiceRechnungErstellen",defaultLabel:"Rechnung erstellen",check:e=>"Ausgang"===c(e.Rechnungstyp__c)&&""===c(e.Belegnummer__c)&&"Stornierte Rechnung"!==c(e.Kategorie__c)},{rule:"invoice-erstellt-nicht-versendet",soql:`Rechnungstyp__c = 'Ausgang' AND Belegnummer__c != null AND Eingangsdatum_plastship__c = null AND Kategorie__c NOT IN ${l(L)}`,labelKey:"indicators.rules.invoiceErstelltNichtVersendet",defaultLabel:"Erstellt, nicht versendet",check:e=>"Ausgang"===c(e.Rechnungstyp__c)&&""!==c(e.Belegnummer__c)&&!e.Eingangsdatum_plastship__c&&!L.includes(c(e.Kategorie__c))},{rule:"invoice-versendet",soql:"Rechnungstyp__c = 'Ausgang' AND Eingangsdatum_plastship__c != null",labelKey:"indicators.rules.invoiceVersendet",defaultLabel:"Versendet",check:e=>"Ausgang"===c(e.Rechnungstyp__c)&&!!e.Eingangsdatum_plastship__c},{rule:"invoice-rueckstellungen",soql:"Kategorie__c = 'Rückstellungen für ausstehende Rechnungen'",labelKey:"indicators.rules.invoiceRueckstellungen",defaultLabel:"Rückstellungen",check:e=>"Rückstellungen für ausstehende Rechnungen"===c(e.Kategorie__c)},{rule:"invoice-freizugeben",soql:"Status_der_Abrechnung__c = 'Vollständig dokumentiert' AND Freigabe__c = false",labelKey:"indicators.rules.invoiceFreizugeben",defaultLabel:"Freizugeben",check:e=>"Vollständig dokumentiert"===c(e.Status_der_Abrechnung__c)&&!0!==e.Freigabe__c},{rule:"invoice-zu-buchen",soql:"Status_der_Abrechnung__c = 'Vollständig dokumentiert' AND Freigabe__c = true",labelKey:"indicators.rules.invoiceZuBuchen",defaultLabel:"Zu buchen",check:e=>"Vollständig dokumentiert"===c(e.Status_der_Abrechnung__c)&&!0===e.Freigabe__c},{rule:"invoice-von-mir-zu-pruefen",soql:e=>(0,a.i)(e.userId)?`Zu_pr_fen_durch__c = '${e.userId}' AND Gepr_ft_und_in_Ordnung__c = null`:null,labelKey:"indicators.rules.invoiceVonMirZuPruefen",defaultLabel:"Von mir zu prüfen"}],OrderItem:[{rule:"orderitem-offen",soql:"Offen_zu_fakturieren__c = 1",labelKey:"indicators.rules.orderItemOffen",defaultLabel:"Offen zu fakturieren",check:e=>1===e.Offen_zu_fakturieren__c},{rule:"orderitem-abgerechnet",soql:"Abrechnung__c != null AND Abrechnung__r.Kategorie__c != 'Stornierte Rechnung'",labelKey:"indicators.rules.orderItemAbgerechnet",defaultLabel:"Abgerechnet",check:e=>!!e.Abrechnung__c&&e.Abrechnung__r?.Kategorie__c!=="Stornierte Rechnung"},{rule:"orderitem-ohne-betrag",soql:"Abrechnung__c = null AND (UnitPrice = null OR UnitPrice = 0)",labelKey:"indicators.rules.orderItemOhneBetrag",defaultLabel:"Ohne Betrag",check:e=>!e.Abrechnung__c&&(null===e.UnitPrice||void 0===e.UnitPrice||0===e.UnitPrice)},{rule:"orderitem-stornierte-abrechnung",soql:"Abrechnung__r.Kategorie__c = 'Stornierte Rechnung'",level:"warnung",labelKey:"indicators.rules.orderItemStornierteAbrechnung",defaultLabel:"An stornierter Abrechnung",check:e=>e.Abrechnung__r?.Kategorie__c==="Stornierte Rechnung"}]},T={Auftrag__c:"Order",Bedarf__c:"Bedarfe__c"},P={dringend:0,warnung:1,info:2};function D(e,t){if(!e||!t)return[];let r=C[T[e]??e];return r?r.filter(e=>{if(!e.level||!e.check)return!1;try{return e.check(t)}catch{return!1}}).map(({rule:e,level:t,labelKey:r,defaultLabel:n})=>({rule:e,level:t,labelKey:r,defaultLabel:n})).sort((e,t)=>P[e.level]-P[t.level]):[]}e.s(["u",0,D,"A",0,function(e){if(!e)return[];let t=new Map;for(let r of Object.values(e)){let e=r?.records;if(Array.isArray(e))for(let r of e){if(!r||"object"!=typeof r)continue;let e=(0,n.K)("string"==typeof r.Id?r.Id:void 0);if(e)for(let a of D(e,r)){if("info"===a.level)continue;let r=t.get(a.rule);r?r.count+=1:t.set(a.rule,{...a,count:1,entityLabel:(0,n.L)(T[e]??e)})}}}return[...t.values()].sort((e,t)=>P[e.level]-P[t.level])},"H",0,function(e){return e?C[T[e]??e]??[]:[]},"M",0,function(e){return!!e&&(T[e]??e)in C}])},174761,e=>{var t,r=((t={}).Entwurf="Draft",t.BestellungErhalten="Bestellung erhalten",t.AnLieferantVersandt="Bestellung an Lieferanten versandt",t.VomLieferantBestaetigt="Auftrag durch Lieferant bestätigt",t.AbAnKundenVersandt="Auftragsbestätigung an Kunden versandt",t.TransportBeauftragen="Transport beauftragen",t.TransportBeauftragt="Transport beauftragt",t.AnlieferungErfolgt="Anlieferung erfolgt",t.InformationenEinpflegen="Informationen einpflegen",t.BetragErhalten="Betrag erhalten",t.Abgeschlossen="Abgeschlossen",t.Storno="Storno",t.Reklamation="Reklamation",t.PlastrackBefuellt="PLASTRACK Filled",t);Object.values(r),e.s(["r",0,["Draft","Bestellung erhalten","Bestellung an Lieferanten versandt","Auftrag durch Lieferant bestätigt","Auftragsbestätigung an Kunden versandt","Transport beauftragen","Transport beauftragt","Anlieferung erfolgt","Informationen einpflegen","Betrag erhalten","Abgeschlossen"],"k",0,["Storno","Reklamation","PLASTRACK Filled"],"B",0,[{key:"Draft",label:"Entwurf"},{key:"Bestellung erhalten",label:"Bestellung erhalten"},{key:"Bestellung an Lieferanten versandt",label:"An Lieferant versandt"},{key:"Auftrag durch Lieferant bestätigt",label:"Bestätigt"},{key:"Auftragsbestätigung an Kunden versandt",label:"AB versandt"},{key:"Transport beauftragen",label:"Transport beauftragen"},{key:"Transport beauftragt",label:"Transport beauftragt"},{key:"Anlieferung erfolgt",label:"Anlieferung erfolgt"},{key:"Informationen einpflegen",label:"Infos einpflegen"},{key:"Betrag erhalten",label:"Betrag erhalten"},{key:"Abgeschlossen",label:"Abgeschlossen"},{key:"Storno",label:"Storno"},{key:"Reklamation",label:"Reklamation"},{key:"PLASTRACK Filled",label:"PLASTRACK Filled"}],"a",()=>r])},430055,175007,e=>{var t=e.i(765691),r=e.i(174761);let n=[{key:"Offen",label:"Offen"},{key:"Beauftragt",label:"Beauftragt"},{key:"Übergeben (plastship an DL)",label:"Übergeben"},{key:"in Arbeit",label:"In Arbeit"},{key:"On hold",label:"On Hold"},{key:"Abgeschlossen (Dienstleister)",label:"Abgeschlossen (DL)"},{key:"QC ok (plastship)",label:"QC OK"},{key:"Veröffentlicht (plastship)",label:"Veröffentlicht"}];e.s(["f",0,n],175007);let a=[{key:"New",label:"New"},{key:"In Progress",label:"In Progress"},{key:"Waiting for Customer",label:"Waiting for Customer"},{key:"Response Received",label:"Response Received"},{key:"On Hold",label:"On Hold"},{key:"Escalated",label:"Escalated"},{key:"Merged",label:"Merged"},{key:"No Action",label:"No Action"},{key:"Rejected",label:"Rejected"},{key:"Closed",label:"Closed"}],l=[{key:"Platform request",label:"Platform request"},{key:"In preparation",label:"In preparation"},{key:"Requirement confirmed",label:"Requirement confirmed"},{key:"Availability and buying price confirmed",label:"Availability confirmed"},{key:"Transport price requested",label:"Transport requested"},{key:"Offer communicated",label:"Offer communicated"},{key:"Initial feedback received",label:"Feedback received"},{key:"Sample ordered from supplier",label:"Sample ordered"},{key:"Sample sent to customer",label:"Sample sent"},{key:"Approved",label:"Approved"},{key:"Rejected",label:"Rejected"}],i=[{key:"Draft",label:"Draft"},{key:"Ready",label:"Ready"},{key:"Ordered",label:"Ordered"},{key:"Sent",label:"Sent"},{key:"Received",label:"Received"}],o=[{key:"Entwurf",label:"Entwurf"},{key:"in Klärung",label:"In Klärung"},{key:"Vollständig dokumentiert",label:"Vollständig dokumentiert"},{key:"Gebucht",label:"Gebucht"},{key:"Bezahlt",label:"Bezahlt"},{key:"Storno",label:"Storno"}],s=[{key:"Qualification",label:"Qualification"},{key:"Needs Analysis",label:"Needs Analysis"},{key:"Proposal",label:"Proposal"},{key:"Negotiation",label:"Negotiation"},{key:"Closed Won",label:"Closed Won"},{key:"Closed Lost",label:"Closed Lost"}],u=[{entityType:t.f.Task,apiName:"Task",field:"Status",entityPath:"task",columns:[{key:"Not Started",label:"Not Started"},{key:"Open",label:"Open"},{key:"Completed",label:"Completed"}]},{entityType:t.f.Case,apiName:"Case",field:"Status",entityPath:"case",columns:a},{entityType:t.f.Order,apiName:"Order",aliases:["Auftrag__c"],field:"Status",entityPath:"order",columns:r.B},{entityType:t.f.MaterialProposal,apiName:"Material_Proposal__c",field:"Status__c",entityPath:"material-proposals",columns:l},{entityType:t.f.SampleSending,apiName:"Sample_Sending__c",field:"Status__c",entityPath:"sample-sending",columns:i},{entityType:t.f.MaterialAnalysis,apiName:"Materialanalyse__c",field:"Status__c",entityPath:"material-analysis",columns:n},{entityType:t.f.Opportunity,apiName:"Opportunity",field:"StageName",entityPath:"opportunity",columns:s},{entityType:t.f.Invoice,apiName:"Abrechnung__c",field:"Status_der_Abrechnung__c",entityPath:"invoice",columns:o}];function c(e){return u.find(t=>t.entityType===e||t.apiName===e||t.aliases?.includes(e))}e.s(["q",0,a,"m",0,o,"k",0,l,"i",0,s,"d",0,i,"Q",0,c,"o",0,function(e){let t=c(e);return t?t.columns.map(e=>({value:e.key,label:e.label})):[]}],430055)}])})();