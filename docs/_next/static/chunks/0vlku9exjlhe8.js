(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,[562520,e=>{var t=e.i(997053);let i=t.U.span.withConfig({displayName:"InputLabel.styles__InfoSymbol",componentId:"sc-3af739ba-0"})`
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

  span:not(${i}),
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
`,r=t.U.span.withConfig({displayName:"InputLabel.styles__InfoPlaceholder",componentId:"sc-3af739ba-3"})`
  display: inline-block;
  width: 20px;
  height: 20px;
  margin: 0 0 0 10px;
  vertical-align: middle;
`,l=t.U.h1.withConfig({displayName:"InputLabel.styles__TooltipHeadline",componentId:"sc-3af739ba-4"})`
  color: ${e=>e.theme.palette.default.white};
  font-size: 0.85rem;
  font-weight: bold;
  margin-bottom: 10px;
`,s=t.U.div.withConfig({displayName:"InputLabel.styles__TooltipContent",componentId:"sc-3af739ba-5"})`
  max-width: 300px;
  text-align: left;
`,o=t.U.sup.withConfig({displayName:"InputLabel.styles__Sup",componentId:"sc-3af739ba-6"})``;e.s(["N",0,a,"u",0,r,"p",0,i,"F",0,n,"g",0,o,"Y",0,s,"v",0,l])},655171,e=>{var t=e.i(843476),i=e.i(271645),n=e.i(770703),a=e.i(562520);let r=(0,n.default)(()=>e.A(135869).then(e=>e.InputLabelInfo),{loadableGenerated:{modules:[539032]},loading:()=>(0,t.jsx)(a.u,{"aria-hidden":"true","data-testid":"InputLabel-info-loading"})}),l=i.default.forwardRef(function(e,i){let{children:n,className:l,infoTextTitle:s,infoTextContent:o,htmlFor:d,required:u=!1,$required:p,error:c=!1,$error:f,disabled:h=!1,$disabled:g,dataTestId:m}=e,b="string"==typeof s&&s.length>0&&"string"==typeof o&&o.length>0;return(0,t.jsxs)(a.F,{ref:i,className:l,htmlFor:d,$error:void 0!==f?f:"boolean"==typeof c?c:!!c,$required:void 0!==p?p:u,$disabled:void 0!==g?g:h,"data-testid":m||"InputLabel-root",children:[n,b&&(0,t.jsx)(r,{title:s,content:o}),u&&(0,t.jsx)(a.g,{children:"*"})]})});l.displayName="InputLabel",e.s(["f",0,l])},523853,e=>{var t=e.i(997053),i=e.i(655171);t.U.input.withConfig({displayName:"InputSwitch.styles__Input",componentId:"sc-d628574b-0"})`
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
`;(0,t.U)(i.f).withConfig({displayName:"InputSwitch.styles__StyledInputLabel",componentId:"sc-d628574b-3"})`
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
`,e.s(["k",0,n,"Z",0,a])},573236,920754,e=>{var t=e.i(843476),i=e.i(997053);let n=i.U.svg.withConfig({displayName:"IconArrowLeft.styles__Root",componentId:"sc-6d9f062c-0"})``,a=e=>(0,t.jsx)(n,{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",className:e.className,"data-testid":"icon-arrow-left-root",children:(0,t.jsx)("path",{d:"M10.6667 19L4 12M4 12L10.6667 5M4 12L20 12",stroke:e.strokeColor||"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})});e.s(["f",0,a],920754),e.s(["f",0,a],573236)},259808,e=>{var t=e.i(843476),i=e.i(271645),n=e.i(730235);let a=({name:e,label:a,hideLabel:r,value:l,fieldType:s="text",onChange:o,options:d,listMaxHeight:u,lookupObjectType:p,placeholder:c,disabled:f,dataTestId:h})=>{let g=h||`filter-field-${e}`,m=(0,i.useCallback)((e,t)=>{o(t)},[o]);return(0,t.jsx)(n.f,{fieldName:e,label:a,hideLabel:r,value:l,fieldType:s,isEditing:!f,isEditable:!f,readOnly:f,hideEditActions:!0,compact:!0,onChange:m,options:d,listMaxHeight:u,lookupObjectType:p,placeholder:c,dataTestId:g})};e.s(["L",0,a,"U",0,a])},418124,e=>{e.i(259808),e.s([])},59472,e=>{var t=e.i(843476),i=e.i(271645),n=e.i(696984),a=e.i(39039);e.i(418124);var r=e.i(259808);e.i(36380);var l=e.i(285393),s=e.i(825969),o=e.i(49958),d=e.i(912598),u=e.i(442560),p=e.i(613340),c=e.i(419261),f=e.i(206702),h=e.i(207848),g=e.i(997053),m=e.i(351754);let b=g.U.div.withConfig({displayName:"ViewAsControl.styles__Root",componentId:"sc-2d7590-0"})`
  position: relative;
  display: inline-flex;
  align-items: center;
`,w=g.U.button.withConfig({displayName:"ViewAsControl.styles__Trigger",componentId:"sc-2d7590-1"})`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  max-width: 240px;
  height: 32px;
  padding: 0 12px;
  border-radius: 16px;
  border: 1px solid ${({theme:e})=>e.palette.border.strong};
  background: ${({theme:e})=>e.palette.surface.subtle};
  color: ${({theme:e})=>e.palette.text.primary};
  font-size: 13px;
  font-weight: 600;
  white-space: nowrap;
  cursor: pointer;
  transition: 0.15s ease-in-out;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    border-color: ${({theme:e})=>e.palette.default.primary};
  }

  /* Aktive Vorschau: unübersehbar, damit sie niemand vergisst */
  ${({$active:e,theme:t})=>e&&g.m`
      background: ${t.palette.status.warning.bg};
      border-color: ${t.palette.status.warning.border};
      color: ${t.palette.status.warning.text};

      &:hover {
        border-color: ${t.palette.status.warning.text};
      }
    `}
`,y=g.U.span.withConfig({displayName:"ViewAsControl.styles__TriggerLabel",componentId:"sc-2d7590-2"})`
  overflow: hidden;
  text-overflow: ellipsis;
`,x=g.U.div.withConfig({displayName:"ViewAsControl.styles__Panel",componentId:"sc-2d7590-3"})`
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  width: 300px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  background: ${({theme:e})=>e.palette.default.white};
  border: 1px solid ${({theme:e})=>e.palette.border.default};
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
  z-index: ${m.f.dropdown};

  /* Der Header blendet jedes <label> aus (Header.styles.ts). Die Optionen der
     Mehrfachauswahl SIND Labels (InputMultiSelect OptionItem) — hier wieder
     einblenden; doppelte Klasse schlägt die Header-Regel. */
  && label {
    display: flex;
  }
`,v=g.U.p.withConfig({displayName:"ViewAsControl.styles__PanelTitle",componentId:"sc-2d7590-4"})`
  margin: 0;
  font-size: 14px;
  font-weight: 700;
  color: ${({theme:e})=>e.palette.text.primary};
`,k=g.U.div.withConfig({displayName:"ViewAsControl.styles__FieldGroup",componentId:"sc-2d7590-5"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,$=g.U.p.withConfig({displayName:"ViewAsControl.styles__FieldTitle",componentId:"sc-2d7590-6"})`
  margin: 0;
  font-size: 12px;
  font-weight: 600;
  color: ${({theme:e})=>e.palette.default.greyDark};
`,I=g.U.p.withConfig({displayName:"ViewAsControl.styles__Hint",componentId:"sc-2d7590-7"})`
  margin: 0;
  font-size: 12px;
  line-height: 1.4;
  color: ${({theme:e})=>e.palette.default.greyDark};
`,A=g.U.div.withConfig({displayName:"ViewAsControl.styles__Actions",componentId:"sc-2d7590-8"})`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 8px;
`,C=(f.J.length+1)*42,j=0;function _(e){return Array.isArray(e)?e.map(String):"string"==typeof e?e.split(";").filter(Boolean):[]}function T(e){return{role:e?.role??"",staffTags:e?[...e.staffTags]:[],modules:e?[...e.modules]:[]}}function N({dataTestId:e="view-as"}){let n=function(){let{data:e,update:t}=(0,o.useSession)(),n=(0,d.d)(),[a,r]=(0,i.useState)(!1),l=e?.user?.realRole??e?.user?.role;return{isRealAdmin:"admin"===l,active:e?.viewAs??null,switching:a,apply:(0,i.useCallback)(async e=>{r(!0);try{await t({viewAs:e}),n.clear(),window.location.href="/dashboard"}catch(e){throw r(!1),e}},[t,n])}}();return n.isRealAdmin?(0,t.jsx)(S,{dataTestId:e,...n}):null}function S({dataTestId:e,active:o,switching:d,apply:g}){let{tr:m}=(0,n.w)(),{addToast:N}=(0,a.d)(),[V,L]=(0,i.useState)(!1),[z,M]=(0,i.useState)(()=>T(o));(0,i.useEffect)(()=>{if(o)return(0,u.k)(()=>{let e=Date.now();e-j<5e3||(j=e,N("warning",m("viewAs.readOnlyToast",{defaultValue:"Vorschau ist schreibgeschützt — Änderungen werden nicht gespeichert."}),{persist:!1}))})},[o,N,m]),(0,i.useEffect)(()=>{if(!V)return;let e=e=>{"Escape"===e.key&&L(!1)};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)},[V]);let U=(0,i.useCallback)(e=>(0,h.k)(m,e),[m]),R=(0,i.useMemo)(()=>(0,h.r)(m,f.J),[m]),P=(0,f.r)(z.role),O=(0,i.useMemo)(()=>(0,c.R)(m,P),[m,P]),H=(0,i.useMemo)(()=>(0,p.z)(m),[m]),E=(0,f.d)(z),W=(0,f.Y)(z.role),D=o?[...o.staffTags.map(e=>(0,c.A)(m,e)),...o.modules.map(e=>(0,p.I)(m,e))]:[],K=o?`${m("viewAs.activeLabel",{defaultValue:"Vorschau"})}: ${[U(o.role),...D].join(" · ")}`:m("viewAs.trigger",{defaultValue:"Ansicht als …"});return(0,t.jsxs)(b,{"data-testid":e,children:[(0,t.jsx)(w,{type:"button",$active:null!==o,onClick:()=>{V||M(T(o)),L(!V)},"aria-expanded":V,"aria-label":m("viewAs.ariaLabel",{defaultValue:"Ansicht als andere Rolle"}),"data-testid":`${e}-trigger`,"data-active":o?"true":"false","data-view-as-role":o?.role??"",suppressHydrationWarning:!0,children:(0,t.jsx)(y,{suppressHydrationWarning:!0,children:K})}),V&&(0,t.jsxs)(x,{"data-testid":`${e}-panel`,children:[(0,t.jsx)(v,{suppressHydrationWarning:!0,children:m("viewAs.title",{defaultValue:"Ansicht als Rolle"})}),(0,t.jsxs)(k,{children:[(0,t.jsx)($,{suppressHydrationWarning:!0,children:m("viewAs.role",{defaultValue:"Rolle"})}),(0,t.jsx)(r.U,{name:"viewAsRole",hideLabel:!0,fieldType:"picklist",value:z.role,options:R,listMaxHeight:C,placeholder:m("viewAs.rolePlaceholder",{defaultValue:"Rolle wählen"}),onChange:e=>M(t=>({...t,role:String(e??"")})),dataTestId:`${e}-role`})]}),P.length>0&&(0,t.jsxs)(k,{children:[(0,t.jsx)($,{suppressHydrationWarning:!0,children:m("viewAs.staffTags",{defaultValue:"Staff-Tags"})}),(0,t.jsx)(r.U,{name:"viewAsStaffTags",hideLabel:!0,fieldType:"multipicklist",value:z.staffTags,options:O,onChange:e=>M(t=>({...t,staffTags:_(e)})),dataTestId:`${e}-tags`})]}),W&&(0,t.jsxs)(k,{children:[(0,t.jsx)($,{suppressHydrationWarning:!0,children:m("viewAs.modules",{defaultValue:"Module"})}),(0,t.jsx)(r.U,{name:"viewAsModules",hideLabel:!0,fieldType:"multipicklist",value:z.modules,options:H,onChange:e=>M(t=>({...t,modules:_(e)})),dataTestId:`${e}-modules`}),(0,t.jsx)(I,{"data-testid":`${e}-customer-hint`,suppressHydrationWarning:!0,children:m("viewAs.customerHint",{defaultValue:"Kundenrollen werden ohne eigene Identität gezeigt: Navigation und Seiten wie beim Kunden, aber keine Datensätze."})})]}),(0,t.jsx)(I,{"data-testid":`${e}-readonly-hint`,suppressHydrationWarning:!0,children:m("viewAs.readOnlyHint",{defaultValue:"Die Vorschau ist schreibgeschützt. Abmelden beendet sie ebenfalls."})}),(0,t.jsxs)(A,{children:[o&&(0,t.jsx)(l.f,{modifier:s.j.SECONDARY,disabled:d,onClick:()=>void g(null),dataTestId:`${e}-reset`,children:m("viewAs.reset",{defaultValue:"Zurück zu Admin"})}),(0,t.jsx)(l.f,{disabled:!E||d,loading:d,onClick:()=>E&&void g(E),dataTestId:`${e}-apply`,children:m("viewAs.apply",{defaultValue:"Anwenden"})})]})]})]})}e.s(["ViewAsControl",0,N,"default",0,N],59472)},196634,534210,e=>{function t(e,t){let i=e=>e*Math.PI/180,n=i(t.lat-e.lat),a=i(t.lng-e.lng),r=Math.sin(n/2)**2+Math.cos(i(e.lat))*Math.cos(i(t.lat))*Math.sin(a/2)**2;return 12742*Math.atan2(Math.sqrt(r),Math.sqrt(1-r))}let i=e=>Math.round(10*e)/10;function n(e){let i=0;for(let n=1;n<e.length;n++)i+=t(e[n-1],e[n]);return i}e.s(["_",0,t,"p",0,n,"e",0,i],534210);class a extends Error{status;constructor(e){super(`geo ${e}`),this.status=e,this.name="GeoClientError"}}let r=new Map;function l(e,t){let i=r.get(e);if(i)return i;let n=t().catch(t=>{throw r.delete(e),t});return r.size>=200&&r.delete(r.keys().next().value),r.set(e,n),n}async function s(e,t,i){let n=await fetch(`/api/geo/${e}/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t),signal:i});if(!n.ok)throw new a(n.status);return await n.json()}let o=!1;e.s(["z",0,function(e,t="car"){if(o)return Promise.reject(new a(503));let i={points:e.map(e=>({lat:e.lat,lng:e.lng})),mode:t};return l(`t:${JSON.stringify(i)}`,()=>s("route",i).then(e=>e.route).catch(e=>{throw e instanceof a&&503===e.status&&(o=!0),e}))},"w",0,function(e,t={}){let i={q:e.trim(),lang:t.lang,limit:t.limit,near:t.near};return l(`s:${JSON.stringify(i)}`,()=>s("search",i,t.signal).then(e=>e.places??[]))},"u",0,function(e){return{distanceKm:i(n(e)),durationMin:0,geometry:e.map(e=>[e.lng,e.lat]),source:"straight"}}],196634)},943962,e=>{var t=e.i(271645);e.s(["f",0,function(e,i){let n=(0,t.useRef)(null),a=(0,t.useRef)(e);return(0,t.useEffect)(()=>{a.current=e},[e]),(0,t.useEffect)(()=>()=>{n.current&&clearTimeout(n.current)},[]),(0,t.useCallback)((...e)=>{n.current&&clearTimeout(n.current),n.current=setTimeout(()=>{a.current(...e)},i)},[i])}])},206702,e=>{var t=e.i(427006);let i=t.r.filter(e=>"admin"!==e),n=[];function a(e){return"string"!=typeof e?n:t.A[e]??n}function r(e){return"string"==typeof e&&t.N.includes(e)}function l(e,t){if(void 0===e)return[];if(!Array.isArray(e))return null;let i=[];for(let n of e){if("string"!=typeof n||!t.includes(n))return null;i.includes(n)||i.push(n)}return i}e.s(["J",0,i,"Y",0,r,"d",0,function(e){if(!e||"object"!=typeof e||Array.isArray(e))return null;let{role:n,staffTags:s,modules:o}=e;if("string"!=typeof n||!i.includes(n))return null;let d=l(s,t.O),u=l(o,t.S);return d&&u?{role:n,staffTags:d.filter(e=>a(n).includes(e)),modules:r(n)?u:[]}:null},"r",0,a])},613340,e=>{var t=e.i(427006);let i={mmaterials:"Monitored Materials",plastrack:"Plastrack",plaspcf:"PlasPCF",ppwr:"PPWR",rigk:"RIGK",pricing:"Pricing"};function n(e,t){return e(`modules.${t}.name`,{defaultValue:i[t]??t})}e.s(["I",0,n,"z",0,function(e,i=t.S){return i.map(t=>({value:t,label:n(e,t)}))}])},419261,e=>{var t=e.i(427006);let i={management:"Geschäftsführung",finance:"Finanzen",sales:"Vertrieb",operations:"Operations",hr:"Personal",marketing:"Marketing",editor:"Redaktion",it:"IT",intern:"Praktikum",ineos:"INEOS"};function n(e){return`users.staffTags.tags.${e}.label`}function a(e){return i[e]??e}function r(e,t){return e(n(t),{defaultValue:a(t)})}e.s(["c",0,{management:"Alle Tag-Rechte",finance:"Finanzauswertungen, Abrechnungen und Rechnungen bearbeiten",sales:"Vertrieb: Opportunities, Bedarfe und Materialvorschläge bearbeiten",operations:"Aufträge, Standorte, Projekte und Musterversand bearbeiten",hr:"Staff-Tags anderer Staff-Konten pflegen sowie Zeit und Abwesenheit verwalten",marketing:"Benachrichtigungen verwalten",editor:"Öffentliche Seiten und Wiki redigieren",it:"Zeiterfassung vor dem Start (Vorab-Phase) und Zeit-Widgets auf dem Dashboard (admin)",intern:"Kennzeichnet ein Praktikumskonto; die Rechte bleiben vorerst die von Basis-Staff",ineos:"INEOS-Partner: Meine Auktionen und für INEOS freigegebene Wiki-Inhalte"},"m",0,i,"Y",0,a,"A",0,r,"R",0,function(e,i=t.O){return i.map(t=>({value:t,label:r(e,t)}))},"C",0,function(e=t.O){return e.map(e=>({value:e,label:a(e),labelKey:n(e)}))}])}],779448,e=>{e.v(t=>Promise.all(["static/chunks/1z3my1vm83tjy.js","static/chunks/44bbm4lpwd-up.js"].map(t=>e.l(t))).then(()=>t(64010)))},135869,e=>{e.v(t=>Promise.all(["static/chunks/343o_k1zb8e2-.js"].map(t=>e.l(t))).then(()=>t(539032)))},385437,e=>{e.v(t=>Promise.all(["static/chunks/0fawha54yd-sh.js"].map(t=>e.l(t))).then(()=>t(830042)))},710141,function(e){e.n(e.i(59472))},994547,e=>{e.v(t=>Promise.all(["static/chunks/2zo5i86dti6t1.js","static/chunks/07tin9gz0yy65.js","static/chunks/0klazxs4io7u7.js","static/chunks/22zu_zui3dpfo.css"].map(t=>e.l(t))).then(()=>t(893960)))}]);