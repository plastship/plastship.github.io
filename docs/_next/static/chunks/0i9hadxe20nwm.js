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
`,o=t.U.h1.withConfig({displayName:"InputLabel.styles__TooltipHeadline",componentId:"sc-3af739ba-4"})`
  color: ${e=>e.theme.palette.default.white};
  font-size: 0.85rem;
  font-weight: bold;
  margin-bottom: 10px;
`,s=t.U.div.withConfig({displayName:"InputLabel.styles__TooltipContent",componentId:"sc-3af739ba-5"})`
  max-width: 300px;
  text-align: left;
`,l=t.U.sup.withConfig({displayName:"InputLabel.styles__Sup",componentId:"sc-3af739ba-6"})``;e.s(["N",0,a,"u",0,r,"p",0,i,"F",0,n,"g",0,l,"Y",0,s,"v",0,o])},655171,e=>{var t=e.i(843476),i=e.i(271645),n=e.i(770703),a=e.i(562520);let r=(0,n.default)(()=>e.A(135869).then(e=>e.InputLabelInfo),{loadableGenerated:{modules:[539032]},loading:()=>(0,t.jsx)(a.u,{"aria-hidden":"true","data-testid":"InputLabel-info-loading"})}),o=i.default.forwardRef(function(e,i){let{children:n,className:o,infoTextTitle:s,infoTextContent:l,htmlFor:d,required:c=!1,$required:p,error:u=!1,$error:m,disabled:f=!1,$disabled:g,dataTestId:h}=e,y="string"==typeof s&&s.length>0&&"string"==typeof l&&l.length>0;return(0,t.jsxs)(a.F,{ref:i,className:o,htmlFor:d,$error:void 0!==m?m:"boolean"==typeof u?u:!!u,$required:void 0!==p?p:c,$disabled:void 0!==g?g:f,"data-testid":h||"InputLabel-root",children:[n,y&&(0,t.jsx)(r,{title:s,content:l}),c&&(0,t.jsx)(a.g,{children:"*"})]})});o.displayName="InputLabel",e.s(["f",0,o])},523853,e=>{var t=e.i(997053),i=e.i(655171);t.U.input.withConfig({displayName:"InputSwitch.styles__Input",componentId:"sc-d628574b-0"})`
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
`,e.s(["k",0,n,"Z",0,a])},573236,920754,e=>{var t=e.i(843476),i=e.i(997053);let n=i.U.svg.withConfig({displayName:"IconArrowLeft.styles__Root",componentId:"sc-6d9f062c-0"})``,a=e=>(0,t.jsx)(n,{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",className:e.className,"data-testid":"icon-arrow-left-root",children:(0,t.jsx)("path",{d:"M10.6667 19L4 12M4 12L10.6667 5M4 12L20 12",stroke:e.strokeColor||"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})});e.s(["f",0,a],920754),e.s(["f",0,a],573236)},75146,e=>{var t=e.i(843476),i=e.i(653145),n=e.i(997053),a=e.i(730235),r=e.i(982993),o=e.i(696984);let s=n.U.div.withConfig({displayName:"FormEditableField__FieldWrapper",componentId:"sc-91e4a8d6-0"})`
  display: flex;
  flex-direction: column;
  width: 100%;
`,l=(0,n.U)(r.f).withConfig({displayName:"FormEditableField__StyledErrorText",componentId:"sc-91e4a8d6-1"})`
  && {
    font-size: 0.75rem;
    margin-top: 0.25rem;
  }
`;e.s(["f",0,function({name:e,control:n,label:r,fieldType:d,options:c,lookupObjectType:p,lookupFilter:u,lookupStaticOptions:m,required:f,disabled:g,placeholder:h,helperText:y,dataTestId:w,currencySymbol:x,currencyCode:b,errorText:k,multipicklistSeparator:T,accept:I,maxFiles:_,multiple:v,maxSize:$,otpLength:C,sliderMin:j,sliderMax:N,sliderStep:U,sliderUnit:H,ratingMax:E,tagsSeparator:B,onEnter:z,onValueChange:S,autoComplete:W,maxLength:L,dataAutofocus:M}){let{tr:D}=(0,o.w)(),R=w||`form-editable-field-${String(e)}`,A=D("form.formEditableField.requiredField",{defaultValue:"{label} ist ein Pflichtfeld"}).replace("{label}",r);return(0,t.jsx)(i.e,{name:e,control:n,rules:f?{required:A}:void 0,render:({field:i,fieldState:n})=>{let o=f?`${r} *`:r,w=`${R}-error-msg`,D=n.error;return(0,t.jsxs)(s,{"data-testid":`${R}-root`,"data-invalid":D?"true":"false","data-error-code":D?.type,children:[(0,t.jsx)(a.f,{fieldName:String(e),label:o,value:i.value,fieldType:d,isEditing:!0,isEditable:!g,readOnly:g,hideEditActions:!0,onChange:(e,t)=>{i.onChange(t),S?.(t)},options:c,lookupObjectType:p,lookupFilter:u,lookupStaticOptions:m,placeholder:h,helperText:y,hasError:!!n.error,dataTestId:R,currencySymbol:x,currencyCode:b,multipicklistSeparator:T,accept:I,maxFiles:_,multiple:v,maxSize:$,otpLength:C,sliderMin:j,sliderMax:N,sliderStep:U,sliderUnit:H,ratingMax:E,tagsSeparator:B,onEnterKey:z,autoComplete:W,maxLength:L,ariaInvalid:!!D,ariaDescribedBy:D?w:void 0,dataAutofocus:M,compact:!0}),D&&(0,t.jsx)(l,{dataTestId:`${R}-error`,id:w,children:k||D.message||A})]})}})}])},969101,e=>{e.i(75146),e.s([])},482105,e=>{var t=e.i(997053);let i=t.q`
  0%, 100% { transform: scale(1); opacity: 1; }
  50%      { transform: scale(1.4); opacity: 0.4; }
`,n=t.U.div.withConfig({displayName:"WorkingHoursTimerBanner.styles__Root",componentId:"sc-7a4c7d98-0"})`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 12px 16px;
  margin-bottom: 16px;
  border-radius: 10px;
  border: 1px solid
    ${({theme:e,$tone:t})=>"running"===t?e.palette.status.success.border:e.palette.status.warning.border};
  background: ${({theme:e,$tone:t})=>"running"===t?e.palette.status.success.bg:e.palette.status.warning.bg};
  color: ${({theme:e,$tone:t})=>"running"===t?e.palette.status.success.text:e.palette.status.warning.text};
`,a=t.U.div.withConfig({displayName:"WorkingHoursTimerBanner.styles__TopRow",componentId:"sc-7a4c7d98-1"})`
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
`,r=t.U.ul.withConfig({displayName:"WorkingHoursTimerBanner.styles__EventLog",componentId:"sc-7a4c7d98-2"})`
  list-style: none;
  margin: 0;
  padding: 8px 0 0 0;
  border-top: 1px dashed ${({theme:e})=>e.palette.default.grey};
  display: flex;
  flex-direction: column;
  gap: 4px;
  max-height: 180px;
  overflow-y: auto;
`,o=t.U.li.withConfig({displayName:"WorkingHoursTimerBanner.styles__EventItem",componentId:"sc-7a4c7d98-3"})`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  font-variant-numeric: tabular-nums;
  color: ${({theme:e})=>e.palette.default.black};

  & svg {
    width: 14px;
    height: 14px;
    flex-shrink: 0;
  }
`,s=t.U.span.withConfig({displayName:"WorkingHoursTimerBanner.styles__EventTime",componentId:"sc-7a4c7d98-4"})`
  font-weight: 600;
  min-width: 64px;
`,l=t.U.span.withConfig({displayName:"WorkingHoursTimerBanner.styles__EventLabel",componentId:"sc-7a4c7d98-5"})`
  color: ${({theme:e})=>e.palette.default.greyDark};
`,d=t.U.span.withConfig({displayName:"WorkingHoursTimerBanner.styles__EventGap",componentId:"sc-7a4c7d98-6"})`
  margin-left: auto;
  font-size: 11px;
  color: ${({theme:e})=>e.palette.default.greyDark};
`,c=t.U.span.withConfig({displayName:"WorkingHoursTimerBanner.styles__Indicator",componentId:"sc-7a4c7d98-7"})`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({theme:e,$tone:t})=>"running"===t?e.palette.default.success:e.palette.default.warning};
  flex-shrink: 0;
  ${({$tone:e})=>"running"===e&&t.m`
      animation: ${i} 1.6s ease-in-out infinite;
    `}
`,p=t.U.span.withConfig({displayName:"WorkingHoursTimerBanner.styles__Label",componentId:"sc-7a4c7d98-8"})`
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.04em;
`,u=t.U.div.withConfig({displayName:"WorkingHoursTimerBanner.styles__Metrics",componentId:"sc-7a4c7d98-9"})`
  display: flex;
  gap: 20px;
  margin-left: auto;
`,m=t.U.div.withConfig({displayName:"WorkingHoursTimerBanner.styles__Metric",componentId:"sc-7a4c7d98-10"})`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 2px;
  opacity: ${({$active:e})=>e?1:.55};
  transition: opacity 0.15s ease;
`,f=t.U.span.withConfig({displayName:"WorkingHoursTimerBanner.styles__MetricValue",componentId:"sc-7a4c7d98-11"})`
  font-size: 22px;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
  line-height: 1;
  color: ${({theme:e})=>e.palette.default.black};
`,g=t.U.span.withConfig({displayName:"WorkingHoursTimerBanner.styles__MetricLabel",componentId:"sc-7a4c7d98-12"})`
  font-size: 10px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${({theme:e})=>e.palette.default.greyDark};
`,h=t.U.span.withConfig({displayName:"WorkingHoursTimerBanner.styles__Meta",componentId:"sc-7a4c7d98-13"})`
  font-size: 12px;
  color: ${({theme:e})=>e.palette.default.greyDark};
`,y=t.U.div.withConfig({displayName:"WorkingHoursTimerBanner.styles__Actions",componentId:"sc-7a4c7d98-14"})`
  display: flex;
  gap: 8px;
  align-items: center;
`,w=(0,t.U)(n).withConfig({displayName:"WorkingHoursTimerBanner.styles__IdleRoot",componentId:"sc-7a4c7d98-15"})`
  opacity: 0.6;
`,x=t.U.div.withConfig({displayName:"WorkingHoursTimerBanner.styles__ErrorLine",componentId:"sc-7a4c7d98-16"})`
  font-size: 12px;
  color: ${({theme:e})=>e.palette.default.error};
`,b=t.U.div.withConfig({displayName:"WorkingHoursTimerBanner.styles__DialogBody",componentId:"sc-7a4c7d98-17"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,k=t.U.p.withConfig({displayName:"WorkingHoursTimerBanner.styles__DialogText",componentId:"sc-7a4c7d98-18"})`
  margin: 0;
  font-size: 14px;
  line-height: 1.5;
  color: ${({theme:e})=>e.palette.default.black};
`,T=t.U.div.withConfig({displayName:"WorkingHoursTimerBanner.styles__DialogTexts",componentId:"sc-7a4c7d98-19"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,I=t.U.div.withConfig({displayName:"WorkingHoursTimerBanner.styles__DialogError",componentId:"sc-7a4c7d98-20"})`
  font-size: 13px;
  color: ${({theme:e})=>e.palette.default.error};
`,_=t.U.div.withConfig({displayName:"WorkingHoursTimerBanner.styles__DialogActions",componentId:"sc-7a4c7d98-21"})`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: flex-end;
`,v=t.U.ul.withConfig({displayName:"WorkingHoursTimerBanner.styles__ProposedList",componentId:"sc-7a4c7d98-22"})`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-variant-numeric: tabular-nums;
  font-size: 14px;
  color: ${({theme:e})=>e.palette.default.black};
`,$=t.U.li.withConfig({displayName:"WorkingHoursTimerBanner.styles__ProposedItem",componentId:"sc-7a4c7d98-23"})``;e.s(["q",0,y,"t",0,_,"K",0,b,"T",0,I,"H",0,k,"D",0,T,"b",0,x,"P",0,d,"I",0,o,"e",0,l,"V",0,r,"r",0,s,"s",0,w,"S",0,c,"Q",0,p,"X",0,h,"U",0,m,"h",0,g,"J",0,f,"R",0,u,"L",0,$,"M",0,v,"F",0,n,"f",0,a])},269254,e=>{var t=e.i(843476),i=e.i(271645),n=e.i(653145);e.i(339806);var a=e.i(946049);e.i(36380);var r=e.i(285393),o=e.i(825969);e.i(969101);var s=e.i(75146),l=e.i(696984),d=e.i(555508),c=e.i(253286),p=e.i(482105);let u={timeZone:"Europe/Berlin",day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"};e.s(["WorkingHoursTimerDialogs",0,function(){let{tr:e}=(0,l.w)(),m=(0,d.f)(),{problem:f,clearProblem:g,postEvent:h,pending:y}=(0,c.Y)(),[w,x]=(0,i.useState)(null),{control:b,handleSubmit:k}=(0,n.G)({defaultValues:{actualEnd:""}}),T=(0,n.h)({control:b,name:"actualEnd"}),I=()=>{x(null),g()},_=e=>x(e&&"forgotten"!==e&&"conflict"!==e?e:null),v=async()=>{_((await h("stop",{discard:!0})).error)},$=k(async e=>{_((await h("stop",{actualEnd:e.actualEnd})).error)}),C=f?.code==="conflict"?f.issues:[],j=C.includes("overlap"),N=C.find(e=>"overlap"!==e)??(j?null:"invalid"),U="invalidActualEnd"===w?e("workingHoursTimer.invalidActualEnd",{defaultValue:"Das Ende muss nach dem Start und nicht in der Zukunft liegen."}):w?e("workingHoursTimer.error",{defaultValue:"Timer-Aktion fehlgeschlagen"}):null,H=e("workingHoursTimer.discard",{defaultValue:"Sitzung verwerfen"}),E=e("workingHoursTimer.cancel",{defaultValue:"Abbrechen"});return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.f,{isOpen:f?.code==="forgotten",onClose:I,title:e("workingHoursTimer.forgotten.title",{defaultValue:"Timer vergessen?"}),dataTestId:"working-hours-timer-forgotten",size:"small",children:(0,t.jsxs)(p.K,{children:[(0,t.jsx)(p.H,{children:e("workingHoursTimer.forgotten.text",{defaultValue:"Der Timer läuft seit {{start}} Uhr. Wann hast du tatsächlich aufgehört? Es zählt die Zeit bis dahin.",start:f?.code==="forgotten"?m.dateWith(f.startedAt,u):""})}),(0,t.jsx)(s.f,{name:"actualEnd",control:b,fieldType:"datetime",required:!0,label:e("workingHoursTimer.forgotten.actualEnd",{defaultValue:"Tatsächliches Ende (Berliner Zeit)"}),dataTestId:"working-hours-timer-actual-end",onEnter:()=>void $()}),f?.code==="forgotten"&&U&&(0,t.jsx)(p.T,{role:"alert","data-testid":"working-hours-timer-forgotten-error","data-code":w??"",children:U}),(0,t.jsxs)(p.t,{children:[(0,t.jsx)(r.f,{modifier:o.j.PRIMARY,onClick:()=>void $(),disabled:y||!T,dataTestId:"working-hours-timer-forgotten-submit",children:e("workingHoursTimer.forgotten.submit",{defaultValue:"Bis dahin speichern"})}),(0,t.jsx)(r.f,{modifier:o.j.DANGER,onClick:()=>void v(),disabled:y,dataTestId:"working-hours-timer-forgotten-discard",children:H}),(0,t.jsx)(r.f,{modifier:o.j.TERTIARY,onClick:I,dataTestId:"working-hours-timer-forgotten-cancel",children:E})]})]})}),(0,t.jsx)(a.f,{isOpen:f?.code==="conflict",onClose:I,title:e("workingHoursTimer.conflict.title",{defaultValue:"Zeiten passen nicht"}),dataTestId:"working-hours-timer-conflict",size:"small",children:(0,t.jsxs)(p.K,{children:[(0,t.jsxs)(p.D,{"data-testid":"working-hours-timer-conflict-text","data-kind":N?"invalid":"overlap",children:[j&&(0,t.jsx)(p.H,{"data-testid":"working-hours-timer-conflict-cause","data-error-code":"overlap",children:N?e("workingHoursTimer.conflict.overlapCause",{defaultValue:"Die Zeiten überschneiden sich mit einem anderen Eintrag."}):e("workingHoursTimer.conflict.text",{defaultValue:"Diese Zeiten überschneiden sich mit einem anderen Eintrag. Der Timer läuft weiter. Korrigiere den anderen Eintrag und stoppe erneut, oder verwirf die Sitzung."})}),N&&(0,t.jsx)(p.H,{"data-testid":"working-hours-timer-conflict-cause","data-error-code":N,children:e("workingHoursTimer.conflict.invalidText",{defaultValue:"Diese Zeiten lassen sich so nicht als Eintrag erfassen. Der Timer läuft weiter. Verwirf die Sitzung und erfasse die Zeit von Hand."})})]}),f?.code==="conflict"&&(0,t.jsx)(p.M,{"data-testid":"working-hours-timer-conflict-proposed","data-issues":f.issues.join(","),children:f.proposed.map(i=>(0,t.jsx)(p.L,{"data-testid":"working-hours-timer-conflict-part","data-date":i.date,"data-start":i.startTime,"data-end":i.endTime,"data-break":i.breakMinutes,children:e("workingHoursTimer.conflict.part",{defaultValue:"{{date}}: {{start}}–{{end}}, Pause {{pause}} min",date:i.date,start:i.startTime,end:i.endTime,pause:i.breakMinutes})},`${i.date}-${i.startTime}`))}),f?.code==="conflict"&&U&&(0,t.jsx)(p.T,{role:"alert","data-testid":"working-hours-timer-conflict-error","data-code":w??"",children:U}),(0,t.jsxs)(p.t,{children:[(0,t.jsx)(r.f,{modifier:o.j.DANGER,onClick:()=>void v(),disabled:y,dataTestId:"working-hours-timer-conflict-discard",children:H}),(0,t.jsx)(r.f,{modifier:o.j.TERTIARY,onClick:I,dataTestId:"working-hours-timer-conflict-cancel",children:E})]})]})})]})}])},196634,534210,e=>{function t(e,t){let i=e=>e*Math.PI/180,n=i(t.lat-e.lat),a=i(t.lng-e.lng),r=Math.sin(n/2)**2+Math.cos(i(e.lat))*Math.cos(i(t.lat))*Math.sin(a/2)**2;return 12742*Math.atan2(Math.sqrt(r),Math.sqrt(1-r))}let i=e=>Math.round(10*e)/10;function n(e){let i=0;for(let n=1;n<e.length;n++)i+=t(e[n-1],e[n]);return i}e.s(["_",0,t,"p",0,n,"e",0,i],534210);class a extends Error{status;constructor(e){super(`geo ${e}`),this.status=e,this.name="GeoClientError"}}let r=new Map;function o(e,t){let i=r.get(e);if(i)return i;let n=t().catch(t=>{throw r.delete(e),t});return r.size>=200&&r.delete(r.keys().next().value),r.set(e,n),n}async function s(e,t,i){let n=await fetch(`/api/geo/${e}/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t),signal:i});if(!n.ok)throw new a(n.status);return await n.json()}let l=!1;e.s(["z",0,function(e,t="car"){if(l)return Promise.reject(new a(503));let i={points:e.map(e=>({lat:e.lat,lng:e.lng})),mode:t};return o(`t:${JSON.stringify(i)}`,()=>s("route",i).then(e=>e.route).catch(e=>{throw e instanceof a&&503===e.status&&(l=!0),e}))},"w",0,function(e,t={}){let i={q:e.trim(),lang:t.lang,limit:t.limit,near:t.near};return o(`s:${JSON.stringify(i)}`,()=>s("search",i,t.signal).then(e=>e.places??[]))},"u",0,function(e){return{distanceKm:i(n(e)),durationMin:0,geometry:e.map(e=>[e.lng,e.lat]),source:"straight"}}],196634)},943962,e=>{var t=e.i(271645);e.s(["f",0,function(e,i){let n=(0,t.useRef)(null),a=(0,t.useRef)(e);return(0,t.useEffect)(()=>{a.current=e},[e]),(0,t.useEffect)(()=>()=>{n.current&&clearTimeout(n.current)},[]),(0,t.useCallback)((...e)=>{n.current&&clearTimeout(n.current),n.current=setTimeout(()=>{a.current(...e)},i)},[i])}])}],779448,e=>{e.v(t=>Promise.all(["static/chunks/1z3my1vm83tjy.js","static/chunks/44bbm4lpwd-up.js"].map(t=>e.l(t))).then(()=>t(64010)))},135869,e=>{e.v(t=>Promise.all(["static/chunks/343o_k1zb8e2-.js"].map(t=>e.l(t))).then(()=>t(539032)))},385437,e=>{e.v(t=>Promise.all(["static/chunks/0fawha54yd-sh.js"].map(t=>e.l(t))).then(()=>t(830042)))},837828,function(e){e.n(e.i(269254))},994547,e=>{e.v(t=>Promise.all(["static/chunks/2zo5i86dti6t1.js","static/chunks/07tin9gz0yy65.js","static/chunks/0klazxs4io7u7.js","static/chunks/22zu_zui3dpfo.css"].map(t=>e.l(t))).then(()=>t(893960)))}]);