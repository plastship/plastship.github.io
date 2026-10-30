(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,[364117,e=>{var t=e.i(843476),r=e.i(271645),a=e.i(653145),i=e.i(510665),o=e.i(997053),n=e.i(655171);let s=o.U.div.withConfig({displayName:"InputFile.styles__Root",componentId:"sc-6e216138-0"})`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100%;
  margin-bottom: ${e=>e.$noMargin?"0":e.theme.margin.default};
`,l=(0,o.U)(n.f).withConfig({displayName:"InputFile.styles__StyledInputLabel",componentId:"sc-6e216138-1"})`
  color: ${({error:e,theme:t})=>e?t.palette.default.error:t.palette.default.black};
  opacity: ${({disabled:e})=>e?.5:1};
`,c=o.U.div.withConfig({displayName:"InputFile.styles__DropzoneContainer",componentId:"sc-6e216138-2"})`
  /* border-box: ohne das ist das Feld um Innenabstand und Rahmen breiter als
     seine Spalte und überlappt, was daneben steht (Medienbibliothek, #1330). */
  box-sizing: border-box;
  width: 100%;
  padding: ${({theme:e})=>e.padding.large};
  border: 2px dashed
    ${({$error:e,$isDragActive:t,theme:r})=>e?r.palette.default.error:t?r.palette.default.primary:r.palette.default.greyDark};
  border-radius: ${({theme:e})=>e.borderRadius.input};
  background-color: ${({$disabled:e,$isDragActive:t,theme:r})=>e?r.palette.default.grey:t?r.palette.default.primary+"10":r.palette.default.white};
  cursor: ${({$disabled:e})=>e?"not-allowed":"pointer"};
  transition: all 0.2s ease-in-out;
  opacity: ${({$disabled:e})=>e?.5:1};

  &:hover {
    border-color: ${({$error:e,$disabled:t,theme:r})=>t?r.palette.default.greyDark:e?r.palette.default.error:r.palette.default.primary};
    background-color: ${({$disabled:e,theme:t})=>e?t.palette.default.grey:t.palette.default.primary+"05"};
  }
`,d=o.U.div.withConfig({displayName:"InputFile.styles__DropzoneContent",componentId:"sc-6e216138-3"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({theme:e})=>e.margin.small};
  text-align: center;

  p {
    margin: 0;
    color: ${({theme:e})=>e.palette.default.greyDark};
    font-size: 0.875rem;
  }
`,p=o.U.div.withConfig({displayName:"InputFile.styles__UploadIconWrapper",componentId:"sc-6e216138-4"})`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${({theme:e})=>e.margin.small};

  svg {
    width: 48px;
    height: 48px;
  }
`,u=o.U.span.withConfig({displayName:"InputFile.styles__HelperText",componentId:"sc-6e216138-5"})`
  font-size: 0.75rem;
  color: ${({theme:e})=>e.palette.default.greyDark};
  font-style: italic;
`,f=o.U.ul.withConfig({displayName:"InputFile.styles__FileList",componentId:"sc-6e216138-6"})`
  list-style: none;
  padding: 0;
  margin: ${({theme:e})=>e.margin.small} 0 0 0;
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.margin.small};
`,m=o.U.li.withConfig({displayName:"InputFile.styles__FileItem",componentId:"sc-6e216138-7"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({theme:e})=>e.padding.small};
  background-color: ${({theme:e})=>e.palette.default.greyLight};
  border-radius: ${({theme:e})=>e.borderRadius.box};
  font-size: 0.875rem;

  span {
    color: ${({theme:e})=>e.palette.default.black};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`,h=o.U.button.withConfig({displayName:"InputFile.styles__RemoveButton",componentId:"sc-6e216138-8"})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  color: ${({theme:e})=>e.palette.default.error};
  cursor: pointer;
  padding: 0.25rem;
  line-height: 1;
  transition: opacity 0.2s;

  svg {
    display: block;
    width: 0.875rem;
    height: 0.875rem;
  }

  /* IconClose hardcodes its stroke color via attribute — retint to the
     button's error color (CSS wins over presentation attributes). */
  svg line {
    stroke: currentColor;
  }

  &:hover {
    opacity: 0.7;
  }
`;var g=e.i(982993),y=e.i(927625),b=e.i(616789),S=e.i(696984);function w({currentValue:e,emit:a,label:o,error:n,errorText:E,disabled:C,required:x,forId:I,dataTestId:_,className:k,infoTextTitle:$,infoTextContent:R,accept:A,maxSize:v=0xa00000,maxFiles:L=1,multiple:O=!1,helperText:F,noMargin:T}){let{tr:N}=(0,S.w)(),j=_||"input-file",U=(0,r.useMemo)(()=>Array.isArray(e)?e:e?[e]:[],[e]),M=(0,r.useCallback)(e=>{a(O?[...U,...e].slice(0,L):e.slice(0,L))},[a,U,O,L]),{getRootProps:P,getInputProps:z,isDragActive:D}=(0,i.f)({onDrop:M,accept:A,maxSize:v,maxFiles:L,multiple:O,disabled:C});return(0,t.jsxs)(s,{className:k,$noMargin:!!T,"data-testid":`${j}-root`,children:[o&&(0,t.jsx)(l,{error:!!n,disabled:!!C,required:x,htmlFor:I,"data-testid":`${j}-label`,infoTextTitle:$,infoTextContent:R,children:o}),(0,t.jsxs)(c,{...P(),$error:!!n,$disabled:!!C,$isDragActive:D,"data-testid":`${j}-dropzone`,children:[(0,t.jsx)("input",{...z(),id:I,"data-testid":`${j}-input`}),(0,t.jsxs)(d,{children:[(0,t.jsx)(p,{children:(0,t.jsx)(y.f,{})}),D?(0,t.jsx)("p",{children:N("form.inputFile.dropActive",{defaultValue:"Dateien hier ablegen..."})}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("p",{children:O?N("form.inputFile.dropzoneHintMultiple",{defaultValue:"Dateien hierher ziehen oder klicken zum Auswählen"}):N("form.inputFile.dropzoneHint",{defaultValue:"Datei hierher ziehen oder klicken zum Auswählen"})}),F&&(0,t.jsx)(u,{children:F})]})]})]}),U.length>0&&(0,t.jsx)(f,{"data-testid":`${j}-file-list`,children:U.map((e,r)=>(0,t.jsxs)(m,{"data-testid":`${j}-file-item-${r}`,children:[(0,t.jsxs)("span",{children:[e.name," (",(e=>{if(0===e)return"0 Bytes";let t=Math.floor(Math.log(e)/Math.log(1024));return Math.round(e/Math.pow(1024,t)*100)/100+" "+["Bytes","KB","MB","GB"][t]})(e.size),")"]}),!C&&(0,t.jsx)(h,{onClick:()=>{a(U.filter((e,t)=>t!==r))},type:"button","aria-label":N("form.inputFile.removeFile",{defaultValue:"Datei entfernen"}),"data-testid":`${j}-remove-${r}`,children:(0,t.jsx)(b.f,{})})]},`${e.name}-${r}`))}),n&&E&&(0,t.jsx)(g.f,{dataTestId:`${j}-error`,children:E})]})}e.s(["InputFile",0,function({name:e,control:r,value:i,onChange:o,error:n,errorText:s,multiple:l=!1,...c}){return r&&e?(0,t.jsx)(a.e,{name:e,control:r,render:({field:e,fieldState:r})=>(0,t.jsx)(w,{...c,multiple:l,currentValue:e.value,emit:t=>{e.onChange(l?t:t[0]||null),o?.(t)},error:n||r.error,errorText:s||r.error?.message})}):(0,t.jsx)(w,{...c,multiple:l,currentValue:i??null,emit:e=>o?.(e),error:n,errorText:s})}],364117)},562520,e=>{var t=e.i(997053);let r=t.U.span.withConfig({displayName:"InputLabel.styles__InfoSymbol",componentId:"sc-3af739ba-0"})`
  align-items: center;
  background-color: ${e=>e.theme.palette.default.black};
  border-radius: 100%;
  color: ${e=>e.theme.palette.default.white};
  display: inline-flex;
  font-weight: bolder;
  height: 20px;
  justify-content: center;
  width: 20px;
`,a=t.U.label.withConfig({displayName:"InputLabel.styles__Root",componentId:"sc-3af739ba-1"})`
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
`,i=t.U.button.withConfig({displayName:"InputLabel.styles__InfoButton",componentId:"sc-3af739ba-2"})`
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin: 0 0 0 10px;
  outline: none;
  padding: 0;
`,o=t.U.span.withConfig({displayName:"InputLabel.styles__InfoPlaceholder",componentId:"sc-3af739ba-3"})`
  display: inline-block;
  width: 20px;
  height: 20px;
  margin: 0 0 0 10px;
  vertical-align: middle;
`,n=t.U.h1.withConfig({displayName:"InputLabel.styles__TooltipHeadline",componentId:"sc-3af739ba-4"})`
  color: ${e=>e.theme.palette.default.white};
  font-size: 0.85rem;
  font-weight: bold;
  margin-bottom: 10px;
`,s=t.U.div.withConfig({displayName:"InputLabel.styles__TooltipContent",componentId:"sc-3af739ba-5"})`
  max-width: 300px;
  text-align: left;
`,l=t.U.sup.withConfig({displayName:"InputLabel.styles__Sup",componentId:"sc-3af739ba-6"})``;e.s(["N",0,i,"u",0,o,"p",0,r,"F",0,a,"g",0,l,"Y",0,s,"v",0,n])},655171,e=>{var t=e.i(843476),r=e.i(271645),a=e.i(770703),i=e.i(562520);let o=(0,a.default)(()=>e.A(135869).then(e=>e.InputLabelInfo),{loadableGenerated:{modules:[539032]},loading:()=>(0,t.jsx)(i.u,{"aria-hidden":"true","data-testid":"InputLabel-info-loading"})}),n=r.default.forwardRef(function(e,r){let{children:a,className:n,infoTextTitle:s,infoTextContent:l,htmlFor:c,required:d=!1,$required:p,error:u=!1,$error:f,disabled:m=!1,$disabled:h,dataTestId:g}=e,y="string"==typeof s&&s.length>0&&"string"==typeof l&&l.length>0;return(0,t.jsxs)(i.F,{ref:r,className:n,htmlFor:c,$error:void 0!==f?f:"boolean"==typeof u?u:!!u,$required:void 0!==p?p:d,$disabled:void 0!==h?h:m,"data-testid":g||"InputLabel-root",children:[a,y&&(0,t.jsx)(o,{title:s,content:l}),d&&(0,t.jsx)(i.g,{children:"*"})]})});n.displayName="InputLabel",e.s(["f",0,n])},523853,e=>{var t=e.i(997053),r=e.i(655171);t.U.input.withConfig({displayName:"InputSwitch.styles__Input",componentId:"sc-d628574b-0"})`
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
`;let a=t.U.span.withConfig({displayName:"InputSwitch.styles__Slider",componentId:"sc-d628574b-1"})`
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
`,i=t.U.div.withConfig({displayName:"InputSwitch.styles__Switch",componentId:"sc-d628574b-2"})`
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
`,e.s(["k",0,a,"Z",0,i])},573236,920754,e=>{var t=e.i(843476),r=e.i(997053);let a=r.U.svg.withConfig({displayName:"IconArrowLeft.styles__Root",componentId:"sc-6d9f062c-0"})``,i=e=>(0,t.jsx)(a,{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",className:e.className,"data-testid":"icon-arrow-left-root",children:(0,t.jsx)("path",{d:"M10.6667 19L4 12M4 12L10.6667 5M4 12L20 12",stroke:e.strokeColor||"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})});e.s(["f",0,i],920754),e.s(["f",0,i],573236)},898560,e=>{let t=e.i(201927).f;e.s(["f",0,t])},3338,e=>{var t=e.i(843476),r=e.i(997053);let a=r.U.svg.withConfig({displayName:"IconStar.styles__Root",componentId:"sc-ca25a9a4-0"})``;e.s(["f",0,e=>(0,t.jsx)(a,{className:e.className,"data-testid":"icon-star-root",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("polygon",{points:"12 2.245 15.039 8.403 21.836 9.39 16.918 14.185 18.079 20.954 12 17.759 5.921 20.954 7.082 14.185 2.164 9.39 8.961 8.403 12 2.245",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"square",strokeLinejoin:"miter",strokeMiterlimit:"10"})})],3338)},599067,e=>{var t=e.i(843476),r=e.i(997053);let a=r.U.svg.withConfig({displayName:"IconTrash.styles__Root",componentId:"sc-fb808e75-0"})``;e.s(["f",0,e=>(0,t.jsx)(a,{className:e.className,"data-testid":"icon-trash-root",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:(0,t.jsxs)("g",{fill:"currentColor",strokeLinecap:"square",strokeLinejoin:"miter",strokeMiterlimit:"10",children:[(0,t.jsx)("path",{d:"m18.73,10h.02s-.42,10.083-.42,10.083c-.045,1.071-.926,1.917-1.998,1.917H7.668c-1.072,0-1.954-.845-1.998-1.917l-.42-10.083h.02",fill:"none",stroke:"currentColor",strokeWidth:"2"}),(0,t.jsx)("line",{x1:"3",y1:"6",x2:"21",y2:"6",fill:"none",stroke:"currentColor",strokeWidth:"2"}),(0,t.jsx)("path",{d:"m9,6V2h6v4",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"butt"}),(0,t.jsx)("line",{x1:"10",y1:"17",x2:"10",y2:"12",fill:"none",stroke:"currentColor",strokeWidth:"2"}),(0,t.jsx)("line",{x1:"14",y1:"17",x2:"14",y2:"12",fill:"none",stroke:"currentColor",strokeWidth:"2"})]})})],599067)},541138,e=>{let t=e.i(599067).f;e.s(["f",0,t])},75146,e=>{var t=e.i(843476),r=e.i(653145),a=e.i(997053),i=e.i(730235),o=e.i(982993),n=e.i(696984);let s=a.U.div.withConfig({displayName:"FormEditableField__FieldWrapper",componentId:"sc-91e4a8d6-0"})`
  display: flex;
  flex-direction: column;
  width: 100%;
`,l=(0,a.U)(o.f).withConfig({displayName:"FormEditableField__StyledErrorText",componentId:"sc-91e4a8d6-1"})`
  && {
    font-size: 0.75rem;
    margin-top: 0.25rem;
  }
`;e.s(["f",0,function({name:e,control:a,label:o,fieldType:c,options:d,lookupObjectType:p,lookupFilter:u,lookupStaticOptions:f,required:m,disabled:h,placeholder:g,helperText:y,dataTestId:b,currencySymbol:S,currencyCode:w,errorText:E,multipicklistSeparator:C,accept:x,maxFiles:I,multiple:_,maxSize:k,otpLength:$,sliderMin:R,sliderMax:A,sliderStep:v,sliderUnit:L,ratingMax:O,tagsSeparator:F,onEnter:T,onValueChange:N,autoComplete:j,maxLength:U,dataAutofocus:M}){let{tr:P}=(0,n.w)(),z=b||`form-editable-field-${String(e)}`,D=P("form.formEditableField.requiredField",{defaultValue:"{label} ist ein Pflichtfeld"}).replace("{label}",o);return(0,t.jsx)(r.e,{name:e,control:a,rules:m?{required:D}:void 0,render:({field:r,fieldState:a})=>{let n=m?`${o} *`:o,b=`${z}-error-msg`,P=a.error;return(0,t.jsxs)(s,{"data-testid":`${z}-root`,"data-invalid":P?"true":"false","data-error-code":P?.type,children:[(0,t.jsx)(i.f,{fieldName:String(e),label:n,value:r.value,fieldType:c,isEditing:!0,isEditable:!h,readOnly:h,hideEditActions:!0,onChange:(e,t)=>{r.onChange(t),N?.(t)},options:d,lookupObjectType:p,lookupFilter:u,lookupStaticOptions:f,placeholder:g,helperText:y,hasError:!!a.error,dataTestId:z,currencySymbol:S,currencyCode:w,multipicklistSeparator:C,accept:x,maxFiles:I,multiple:_,maxSize:k,otpLength:$,sliderMin:R,sliderMax:A,sliderStep:v,sliderUnit:L,ratingMax:O,tagsSeparator:F,onEnterKey:T,autoComplete:j,maxLength:U,ariaInvalid:!!P,ariaDescribedBy:P?b:void 0,dataAutofocus:M,compact:!0}),P&&(0,t.jsx)(l,{dataTestId:`${z}-error`,id:b,children:E||P.message||D})]})}})}])},969101,e=>{e.i(75146),e.s([])},196634,534210,e=>{function t(e,t){let r=e=>e*Math.PI/180,a=r(t.lat-e.lat),i=r(t.lng-e.lng),o=Math.sin(a/2)**2+Math.cos(r(e.lat))*Math.cos(r(t.lat))*Math.sin(i/2)**2;return 12742*Math.atan2(Math.sqrt(o),Math.sqrt(1-o))}let r=e=>Math.round(10*e)/10;function a(e){let r=0;for(let a=1;a<e.length;a++)r+=t(e[a-1],e[a]);return r}e.s(["_",0,t,"p",0,a,"e",0,r],534210);class i extends Error{status;constructor(e){super(`geo ${e}`),this.status=e,this.name="GeoClientError"}}let o=new Map;function n(e,t){let r=o.get(e);if(r)return r;let a=t().catch(t=>{throw o.delete(e),t});return o.size>=200&&o.delete(o.keys().next().value),o.set(e,a),a}async function s(e,t,r){let a=await fetch(`/api/geo/${e}/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t),signal:r});if(!a.ok)throw new i(a.status);return await a.json()}let l=!1;e.s(["z",0,function(e,t="car"){if(l)return Promise.reject(new i(503));let r={points:e.map(e=>({lat:e.lat,lng:e.lng})),mode:t};return n(`t:${JSON.stringify(r)}`,()=>s("route",r).then(e=>e.route).catch(e=>{throw e instanceof i&&503===e.status&&(l=!0),e}))},"w",0,function(e,t={}){let r={q:e.trim(),lang:t.lang,limit:t.limit,near:t.near};return n(`s:${JSON.stringify(r)}`,()=>s("search",r,t.signal).then(e=>e.places??[]))},"u",0,function(e){return{distanceKm:r(a(e)),durationMin:0,geometry:e.map(e=>[e.lng,e.lat]),source:"straight"}}],196634)},943962,e=>{var t=e.i(271645);e.s(["f",0,function(e,r){let a=(0,t.useRef)(null),i=(0,t.useRef)(e);return(0,t.useEffect)(()=>{i.current=e},[e]),(0,t.useEffect)(()=>()=>{a.current&&clearTimeout(a.current)},[]),(0,t.useCallback)((...e)=>{a.current&&clearTimeout(a.current),a.current=setTimeout(()=>{i.current(...e)},r)},[r])}])},555508,e=>{e.i(821194);var t=e.i(99222),r=e.i(929666);e.s(["f",0,function(){let{i18n:e}=(0,t.f)();return(0,r.j)(e?.language)}])},863297,e=>{var t=e.i(266027),r=e.i(954616),a=e.i(912598),i=e.i(501496);let o={staleTime:6e4,retry:3,retryDelay:e=>Math.min(1e3*2**e,3e4),refetchOnWindowFocus:!1},n=(e,t,r)=>{let a=[e];return t&&a.push(t),r&&a.push(...r),a},s=e=>"create"===e,l=(e,t)=>!s(t)&&(e?.enabled!==void 0?e.enabled:!!t),c=(e,t)=>{let r=e?.response?.status;throw 403!==r&&404!==r&&console.error(`Error in ${t} operation:`,e),e},d=e=>{let t={"/salesforce/material-analyses":"/salesforce/material-analysis","/salesforce/audit-properties":"/salesforce/audit-property","/salesforce/material-proposals":"/salesforce/material-proposals","/salesforce/contact-handovers":"/salesforce/contact-handover","/salesforce/sample-feedbacks":"/salesforce/sample-feedback","/salesforce/sample-sendings":"/salesforce/sample-sending","/salesforce/monitored-materials":"/salesforce/monitored-material","/salesforce/opportunities":"/salesforce/opportunity","/salesforce/opportunitylineitems":"/salesforce/opportunitylineitems","/salesforce/recyclate-compatibilities":"/salesforce/recyclate-compatibility","/monitored-materials-recyclate":"/monitored-materials-recyclate","/rigk/accounts":"/rigk/accounts","/rigk/contacts":"/rigk/contacts","/rigk/status-updates":"/rigk/status-updates","/plastrack/scans":"/plastrack/scan","/plastrack/boxes":"/plastrack/box","/plastship/users":"/plastship/users"};return t[e]?t[e]:e.replace(/s\/$/,"/").replace(/s$/,"")};function p(e,r,a){let s={...o,...a?.customQueryOptions},l=a?.customErrorHandler||(t=>c(t,e));return{useList:a=>{let{pagination:o={page:1,pageSize:25},sort:c={field:"createdAt",order:"DESC"},queryParams:d={},enabled:p=!0,initialData:u}=a||{};return(0,t.f)({queryKey:n(e,void 0,[o,c,d]),queryFn:async()=>{try{let e=new URLSearchParams;o&&(e.set("page",o.page.toString()),e.set("pageSize",o.pageSize.toString())),c&&(e.set("sortField",c.field),e.set("sortOrder",c.order)),Object.entries(d).forEach(([t,r])=>{void 0!==r&&e.set(t,r.toString())});let t=r.endsWith("/")?r:`${r}/`;return(await i.k.get(`${t}?${e}`)).data}catch(e){throw l(e),e}},...s,enabled:p,initialData:u})}}}e.s(["C",0,{SALESFORCE_ACCOUNT:"salesforce-account",SALESFORCE_CASE:"salesforce-case",SALESFORCE_CONTACT:"salesforce-contact",SALESFORCE_TASK:"salesforce-task",SALESFORCE_ORDER:"salesforce-order",SALESFORCE_OPPORTUNITY:"salesforce-opportunity",SALESFORCE_PRODUCT:"salesforce-product",SALESFORCE_PROJECT:"salesforce-project",SALESFORCE_INVOICE:"salesforce-invoice",SALESFORCE_REQUIREMENT:"salesforce-requirement",SALESFORCE_MATERIAL_ANALYSIS:"salesforce-material-analysis",SALESFORCE_MATERIAL_PROPOSAL:"salesforce-material-proposal",SALESFORCE_MONITORED_MATERIAL:"salesforce-monitored-material",SALESFORCE_ONBOARDING:"salesforce-onboarding",SALESFORCE_CONTACT_HANDOVER:"salesforce-contact-handover",SALESFORCE_SAMPLE_FEEDBACK:"salesforce-sample-feedback",SALESFORCE_SAMPLE_SENDING:"salesforce-sample-sending",SALESFORCE_USER:"salesforce-user",SALESFORCE_ORDER_ITEM:"salesforce-orderitem",SALESFORCE_OPPORTUNITY_LINE_ITEM:"salesforce-opportunitylineitem",SALESFORCE_SUPPLIER_AUDIT:"salesforce-supplier-audit",SALESFORCE_PRODUCTION_SITE:"salesforce-production-site",SALESFORCE_COMPANY_CERTIFICATE:"salesforce-company-certificate",SALESFORCE_CONTRACT:"salesforce-contract",SALESFORCE_COST_CENTER:"salesforce-cost-center",SALESFORCE_CERTIFICATE:"salesforce-certificate",SALESFORCE_AUDIT_PROPERTY:"salesforce-audit-property",SALESFORCE_PROZESSFEEDBACK:"salesforce-prozessfeedback",SALESFORCE_RECYCLATE_GRADE:"salesforce-recyclate-grade",SALESFORCE_RECYCLATE_COMPATIBILITY:"salesforce-recyclate-compatibility",PLASTRACK_SCAN:"plastrack-scan",PLASTRACK_BOX:"plastrack-box",PLASTSHIP_USER:"plastship-user",PLASTSHIP_USER_PROFILE:"plastship-user-profile",PLASTSHIP_USERS:"plastship-users",RIGK_ACCOUNT:"rigk-account",RIGK_CONTACT:"rigk-contact",RIGK_STATUS_UPDATE:"rigk-status-update",NOTIFICATION:"notification",MARKET_PRICE:"market-price",PRICE_MOVEMENT:"price-movement"},"W",0,function(e,s,u){let f,m;return{...(f={...o,...u?.customQueryOptions},m=u?.customErrorHandler||(t=>c(t,e)),{useSingle:(r,a)=>(0,t.f)({queryKey:n(e,r),queryFn:async()=>{try{let e=d(s);return(await i.k.get(`${e.replace(/\/$/,"")}/${encodeURIComponent(r)}/`)).data}catch(e){throw m(e),e}},...f,enabled:l(a,r)}),useCreate:()=>{let t=(0,a.d)();return(0,r.f)({mutationFn:async e=>{try{return(await i.k.post(s,e)).data}catch(e){throw m(e),e}},onSuccess:()=>{t.invalidateQueries({queryKey:[e]})}})},useUpdate:()=>{let t=(0,a.d)();return(0,r.f)({mutationFn:async({id:e,data:t})=>{try{let r=d(s);return(await i.k.put(`${r.replace(/\/$/,"")}/${encodeURIComponent(e)}/`,t)).data}catch(e){throw m(e),e}},onSuccess:(r,{id:a})=>{t.invalidateQueries({queryKey:n(e,a)}),t.invalidateQueries({queryKey:[e]})}})}}),...p(e,s,u)}},"A",0,p,"j",0,function(e,s,p){let u,f,m,h;return{...(u={...o,...p?.customQueryOptions},f=p?.customErrorHandler||(t=>c(t,e)),{useSingle:(r,a)=>(0,t.f)({queryKey:n(e,r),queryFn:async()=>{try{let e=d(s);return(await i.k.get(`${e.replace(/\/$/,"")}/${encodeURIComponent(r)}/`)).data}catch(e){throw f(e),e}},...u,enabled:l(a,r)}),useCreate:()=>{let t=(0,a.d)();return(0,r.f)({mutationFn:async e=>{try{return(await i.k.post(s,e)).data}catch(e){throw f(e),e}},onSuccess:()=>{t.invalidateQueries({queryKey:[e]})}})},useUpdate:()=>{let t=(0,a.d)();return(0,r.f)({mutationFn:async({id:e,data:t})=>{try{let r=d(s);return(await i.k.patch(`${r.replace(/\/$/,"")}/${e}/`,t)).data}catch(e){throw f(e),e}},onSuccess:(r,{id:a})=>{t.invalidateQueries({queryKey:n(e,a)}),t.invalidateQueries({queryKey:[e]})}})}}),...(m={...o,...p?.customQueryOptions},h=p?.customErrorHandler||(t=>c(t,e)),{useList:r=>{let{pagination:a={page:1,pageSize:25},sort:o={field:"LastModifiedDate",order:"DESC"},queryParams:l={},enabled:c=!0,initialData:d}=r||{};return(0,t.f)({queryKey:n(e,void 0,[a,o,l]),queryFn:async()=>{try{if(!a||!o)throw Error("Missing required parameters");return(await i.k.get(s,{params:{page:a.page,pageSize:a.pageSize,sortField:o.field,sortOrder:o.order,...l}})).data}catch(e){throw h(e),e}},...m,enabled:c,initialData:d})}})}},"n",0,s])}],779448,e=>{e.v(t=>Promise.all(["static/chunks/3iomfily-yqw1.js"].map(t=>e.l(t))).then(()=>t(64010)))},135869,e=>{e.v(t=>Promise.all(["static/chunks/343o_k1zb8e2-.js"].map(t=>e.l(t))).then(()=>t(539032)))},385437,e=>{e.v(t=>Promise.all(["static/chunks/1ytmtbwug6d9_.js","static/chunks/2oq-uevcwhldh.js"].map(t=>e.l(t))).then(()=>t(830042)))},994547,e=>{e.v(t=>Promise.all(["static/chunks/2zo5i86dti6t1.js","static/chunks/0klazxs4io7u7.js","static/chunks/07tin9gz0yy65.js","static/chunks/2oq-uevcwhldh.js","static/chunks/22zu_zui3dpfo.css"].map(t=>e.l(t))).then(()=>t(893960)))}]);