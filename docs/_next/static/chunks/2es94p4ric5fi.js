(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,[640467,e=>{var t=e.i(843476),n=e.i(997053);let r=n.U.svg.withConfig({displayName:"IconFilePdf.styles__Root",componentId:"sc-86c5664b-0"})``;e.s(["f",0,e=>(0,t.jsxs)(r,{className:e.className,"data-testid":"icon-file-pdf-root",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:[(0,t.jsx)("title",{children:"file-pdf"}),(0,t.jsxs)("g",{fill:"currentColor",strokeLinecap:"square",strokeLinejoin:"miter",strokeMiterlimit:"10",children:[(0,t.jsx)("path",{d:"M4 9H11V2",stroke:"currentColor",strokeWidth:"2",fill:"none",strokeLinecap:"butt"}),(0,t.jsx)("path",{d:"M4 11V9.07843C4 8.54799 4.21071 8.03929 4.58579 7.66421L9.66421 2.58579C10.0393 2.21071 10.548 2 11.0784 2H18C19.1046 2 20 2.89543 20 4V11",stroke:"currentColor",strokeWidth:"2",fill:"none"}),(0,t.jsx)("path",{d:"M2 22V15H4.5C5.88071 15 7 16.1193 7 17.5V17.5C7 18.8807 5.88071 20 4.5 20H2.5",stroke:"currentColor",strokeWidth:"2",fill:"none"}),(0,t.jsx)("path",{d:"M10 15V22H11.5C13.433 22 15 20.433 15 18.5C15 16.567 13.433 15 11.5 15H10Z",stroke:"currentColor",strokeWidth:"2",fill:"none"}),(0,t.jsx)("path",{d:"M18 22L18 15H22M21 18.5H18.5",stroke:"currentColor",strokeWidth:"2",fill:"none"})]})]})],640467)},824329,652289,e=>{var t=e.i(843476),n=e.i(271645),r=e.i(730235);e.i(821194);var a=e.i(99222),i=e.i(501496),l=e.i(218595),s=e.i(974924),d=e.i(997053);let o=d.U.div.withConfig({displayName:"MailRecipientsField.styles__TagsContainer",componentId:"sc-79985046-0"})`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  padding: 4px 0;
`,u=d.U.span.withConfig({displayName:"MailRecipientsField.styles__Tag",componentId:"sc-79985046-1"})`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 2px 8px;
  border-radius: 12px;
  background: ${({theme:e})=>e.palette.default.primary};
  color: ${({theme:e})=>e.palette.default.white};
  font-size: 0.75rem;
  font-weight: 500;
`,c=d.U.button.withConfig({displayName:"MailRecipientsField.styles__TagRemove",componentId:"sc-79985046-2"})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 14px;
  height: 14px;
  border: none;
  background: none;
  color: inherit;
  cursor: pointer;
  padding: 0;
  font-size: 0.75rem;
  opacity: 0.8;

  &:hover {
    opacity: 1;
  }
`,m=d.U.input.withConfig({displayName:"MailRecipientsField.styles__Input",componentId:"sc-79985046-3"})`
  padding: 8px 12px;
  border: 1px solid ${({theme:e})=>e.palette.default.grey};
  border-radius: 6px;
  font-size: 0.875rem;
  color: ${({theme:e})=>e.palette.default.black};
  background: ${({theme:e})=>e.palette.default.white};
  outline: none;
  transition: border-color 0.2s;

  &:focus {
    border-color: ${({theme:e})=>e.palette.default.primary};
  }

  &::placeholder {
    color: ${({theme:e})=>e.palette.default.greyDark};
  }
`,f=d.U.span.withConfig({displayName:"MailRecipientsField.styles__ErrorText",componentId:"sc-79985046-4"})`
  font-size: 0.75rem;
  color: ${({theme:e})=>e.palette.default.error};
`;e.s(["f",0,({inputId:e,values:d,onChange:p,placeholder:h,reportErrors:g=!0,error:_,onInput:b,inputTestId:x,removeTestIdPrefix:y,contactTestId:k,contactFieldName:M,dataTestId:S})=>{let{tr:v}=(0,a.f)(),[w,j]=(0,n.useState)(""),[C,A]=(0,n.useState)(""),[P,N]=(0,n.useState)(0),z=(0,n.useRef)(d);z.current=d;let I=(0,n.useCallback)(e=>{let t=(0,s.W)(e);if(t){if(!(0,s.x)(t)){g&&A(v("mail.send.invalidAddress",{defaultValue:"Ungültige E-Mail-Adresse"}));return}if(d.includes(t)){g&&A(v("mail.send.duplicateRecipient",{defaultValue:"Empfänger bereits hinzugefügt"}));return}p([...d,t]),j(""),A("")}},[d,p,g,v]),D=(0,n.useCallback)(e=>p(d.filter(t=>t!==e)),[d,p]),V=(0,n.useCallback)(async e=>{if("string"==typeof e&&e)try{let t=await i.k.get(`/salesforce/contact/${e}/`),n=t.data?.data?.Email?.trim().toLowerCase();if(!n)return void l.c.error(v("mail.send.contactWithoutEmail",{defaultValue:"Der Kontakt hat keine E-Mail-Adresse"}));let r=z.current;r.includes(n)||p([...r,n]),A("")}catch{l.c.error(v("mail.send.contactLoadError",{defaultValue:"Kontakt konnte nicht geladen werden"}))}finally{N(e=>e+1)}},[p,v]),E=C||_;return(0,t.jsxs)(t.Fragment,{children:[d.length>0&&(0,t.jsx)(o,{"data-testid":S,children:d.map(e=>(0,t.jsxs)(u,{children:[e,(0,t.jsx)(c,{type:"button",onClick:()=>D(e),"aria-label":v("mail.composer.removeRecipient",{defaultValue:"{{address}} entfernen",address:e}),"data-testid":`${y}${e}`,children:"x"})]},e))}),(0,t.jsx)(m,{id:e,type:"email",value:w,onChange:e=>{j(e.target.value),A(""),b?.()},onKeyDown:e=>{("Tab"!==e.key||w.trim())&&("Enter"===e.key||","===e.key||"Tab"===e.key)&&(e.preventDefault(),I(w))},onBlur:()=>{w.trim()&&I(w)},placeholder:h,"aria-invalid":!!E||void 0,"data-testid":x}),(0,t.jsx)(r.f,{fieldName:M,label:v("mail.send.searchContact",{defaultValue:"Kontakt suchen"}),fieldType:"lookup",lookupObjectType:"Contact",value:"",isEditable:!0,isEditing:!0,hideEditActions:!0,compact:!0,placeholder:v("mail.send.searchContactPlaceholder",{defaultValue:"Name oder E-Mail des Kontakts"}),onChange:(e,t)=>void V(t),dataTestId:k},`${M}-${P}`),E&&(0,t.jsx)(f,{children:E})]})}],652289),e.s([],824329)},359480,e=>{var t=e.i(997053);let n=t.U.form.withConfig({displayName:"SendViaMailModal.styles__Form",componentId:"sc-3771e061-0"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,r=t.U.div.withConfig({displayName:"SendViaMailModal.styles__FormGroup",componentId:"sc-3771e061-1"})`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,a=t.U.label.withConfig({displayName:"SendViaMailModal.styles__Label",componentId:"sc-3771e061-2"})`
  font-size: 0.875rem;
  font-weight: 600;
  color: ${({theme:e})=>e.palette.default.black};
`,i=t.U.input.withConfig({displayName:"SendViaMailModal.styles__Input",componentId:"sc-3771e061-3"})`
  padding: 8px 12px;
  border: 1px solid ${({theme:e})=>e.palette.default.grey};
  border-radius: 6px;
  font-size: 0.875rem;
  color: ${({theme:e})=>e.palette.default.black};
  background: ${({theme:e})=>e.palette.default.white};
  outline: none;
  transition: border-color 0.2s;

  &:focus {
    border-color: ${({theme:e})=>e.palette.default.primary};
  }

  &::placeholder {
    color: ${({theme:e})=>e.palette.default.greyDark};
  }
`,l=t.U.textarea.withConfig({displayName:"SendViaMailModal.styles__Textarea",componentId:"sc-3771e061-4"})`
  padding: 8px 12px;
  border: 1px solid ${({theme:e})=>e.palette.default.grey};
  border-radius: 6px;
  font-size: 0.875rem;
  color: ${({theme:e})=>e.palette.default.black};
  background: ${({theme:e})=>e.palette.default.white};
  outline: none;
  resize: vertical;
  min-height: 100px;
  transition: border-color 0.2s;
  font-family: inherit;

  &:focus {
    border-color: ${({theme:e})=>e.palette.default.primary};
  }
`,s=t.U.div.withConfig({displayName:"SendViaMailModal.styles__ButtonRow",componentId:"sc-3771e061-5"})`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 8px;
`,d=t.U.button.withConfig({displayName:"SendViaMailModal.styles__Button",componentId:"sc-3771e061-6"})`
  padding: 8px 20px;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  border: 1px solid
    ${({theme:e,$variant:t})=>"primary"===t?e.palette.default.primary:e.palette.default.grey};
  background: ${({theme:e,$variant:t})=>"primary"===t?e.palette.default.primary:e.palette.default.white};
  color: ${({theme:e,$variant:t})=>"primary"===t?e.palette.default.white:e.palette.default.black};
  transition: opacity 0.2s;

  &:hover:not(:disabled) {
    opacity: 0.85;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,o=t.U.button.withConfig({displayName:"SendViaMailModal.styles__AttachmentBadge",componentId:"sc-3771e061-7"})`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding: 8px 12px;
  border: 1px solid transparent;
  border-radius: 6px;
  background: ${({theme:e})=>e.palette.default.greyLight};
  font-family: inherit;
  font-size: 0.8125rem;
  color: ${({theme:e})=>e.palette.default.black};
  text-align: left;
  cursor: pointer;

  &:hover {
    border-color: ${({theme:e})=>e.palette.default.primary};
  }

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.palette.default.primary};
    outline-offset: 1px;
  }

  svg {
    flex-shrink: 0;
    color: ${({theme:e})=>e.palette.default.error};
  }
`,u=t.U.span.withConfig({displayName:"SendViaMailModal.styles__AttachmentBadgeHint",componentId:"sc-3771e061-8"})`
  margin-left: auto;
  font-size: 0.75rem;
  color: ${({theme:e})=>e.palette.default.primary};
  white-space: nowrap;
`,c=t.U.ul.withConfig({displayName:"SendViaMailModal.styles__ExtraAttachmentList",componentId:"sc-3771e061-9"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin: 0;
  padding: 0;
  list-style: none;
  max-height: 220px;
  overflow-y: auto;
`,m=t.U.li.withConfig({displayName:"SendViaMailModal.styles__ExtraAttachmentRow",componentId:"sc-3771e061-10"})`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px 8px;
  border-radius: 6px;
  background: ${({theme:e})=>e.palette.default.greyLight};
  font-size: 0.8125rem;
  color: ${({theme:e})=>e.palette.default.black};

  input {
    flex-shrink: 0;
    margin: 0;
  }

  &[data-disabled='true'] {
    opacity: 0.55;
  }
`,f=t.U.label.withConfig({displayName:"SendViaMailModal.styles__ExtraAttachmentLabel",componentId:"sc-3771e061-11"})`
  display: flex;
  flex: 1;
  min-width: 0;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`,p=t.U.span.withConfig({displayName:"SendViaMailModal.styles__ExtraAttachmentName",componentId:"sc-3771e061-12"})`
  flex: 1;
  min-width: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,h=t.U.span.withConfig({displayName:"SendViaMailModal.styles__ExtraAttachmentSize",componentId:"sc-3771e061-13"})`
  flex-shrink: 0;
  font-size: 0.75rem;
  color: ${({theme:e})=>e.palette.default.secondary};
`,g=t.U.div.withConfig({displayName:"SendViaMailModal.styles__ConnectPrompt",componentId:"sc-3771e061-14"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 24px;
  text-align: center;
  color: ${({theme:e})=>e.palette.default.greyDark};
  font-size: 0.875rem;
`,_=t.U.p.withConfig({displayName:"SendViaMailModal.styles__MissingHint",componentId:"sc-3771e061-15"})`
  margin: 0;
  font-size: 0.8125rem;
  color: ${({theme:e})=>e.palette.default.error};
`,b=t.U.p.withConfig({displayName:"SendViaMailModal.styles__SignatureHint",componentId:"sc-3771e061-16"})`
  margin: 0;
  font-size: 0.8125rem;
  color: ${({theme:e})=>e.palette.default.greyDark};
`,x=t.U.p.withConfig({displayName:"SendViaMailModal.styles__SenderHint",componentId:"sc-3771e061-17"})`
  margin: 0;
  font-size: 0.8125rem;
  color: ${({theme:e})=>e.palette.text.secondary};
  overflow-wrap: anywhere;
`;e.s(["g",0,o,"N",0,u,"K",0,d,"A",0,s,"p",0,g,"M",0,f,"Q",0,c,"c",0,p,"m",0,m,"L",0,h,"n",0,n,"o",0,r,"e",0,i,"R",0,a,"G",0,_,"f",0,x,"_",0,b,"q",0,l])},721007,43255,49486,252456,e=>{var t=e.i(843476),n=e.i(271645),r=e.i(266027);e.i(339806);var a=e.i(946049),i=e.i(730235),l=e.i(640467),s=e.i(646145),d=e.i(218595),o=e.i(501496),u=e.i(727827);e.i(821194);var c=e.i(99222),m=e.i(145896),f=e.i(328174),p=e.i(972032),h=e.i(974924),g=e.i(333393);function _(e,t){if(!e||!t)return[];let n=e[(0,f.D)(t)];return Array.isArray(n)?n.filter(h.x):[]}g.O.dispo3.addressEnv[0],g.O.accounting.addressEnv[0],e.s(["f",0,_],43255),e.i(824329);var b=e.i(652289);e.i(10907);var x=e.i(179950),y=e.i(191476);e.i(663569);var k=e.i(30436);e.i(662459);var M=e.i(227853),S=e.i(2975),v=e.i(666629),w=e.i(860844);async function j(e){let t=await o.k.post("/entity-pdf/preview",{pdfApiPath:e},{responseType:"blob"}),n=t.headers??{};return{blob:t.data,token:n["x-pdf-preview-token"]??null,filename:(0,w.I)(n["content-disposition"])}}e.s(["f",0,j],49486);var C=e.i(301097),A=e.i(555508),P=e.i(149696),N=e.i(650942),z=e.i(359480),I=e.i(293655),D=e.i(787766),V=e.i(821175);e.s(["f",0,({isOpen:e,onClose:g,entityType:w,entityId:E,entityName:$,pdfApiPath:R,defaultFilename:T,defaultRecipients:L,defaultCc:H,defaultSubject:B,defaultBody:U,templateEntityType:G,initialTemplateId:F,previewToken:O,previewBlob:K})=>{let{tr:W}=(0,c.f)(),{revision:q}=(0,m.V)(),Z=(function(){let{tr:e}=(0,c.f)(),t=(0,m.V)();return(0,n.useCallback)(n=>{let r=D.F[n]??n;return e(`entityLabel.${r}`,{defaultValue:t.text((0,I.L)(r))})},[e,t])})()(w),[J,Q]=(0,n.useState)([]),[X,Y]=(0,n.useState)([]),[ee,et]=(0,n.useState)(!1),[en,er]=(0,n.useState)(""),[ea,ei]=(0,n.useState)(""),[el,es]=(0,n.useState)(""),[ed,eo]=(0,n.useState)([]),[eu,ec]=(0,n.useState)(!1),[em,ef]=(0,n.useState)(""),ep=(0,n.useRef)(!1),eh=(0,n.useRef)(!1),eg=(0,n.useRef)(!1),[e_,eb]=(0,n.useState)(0),ex=(0,A.f)(),[ey,ek]=(0,n.useState)(null),eM=(0,n.useRef)(null),[eS,ev]=(0,n.useState)(null),[ew,ej]=(0,n.useState)([]),eC=!!R&&(0,P.i)(E),{data:eA}=(0,C.h)(E,{enabled:e&&eC}),eP=(0,n.useMemo)(()=>(eA?.data??[]).filter(e=>!!e.downloadUrl),[eA]),{linked:eN,isLoading:ez}=(0,u.f)(),{data:eI,isError:eD}=(0,r.f)({queryKey:["mail-signature-preview"],queryFn:async()=>(await o.k.get("/mail/signature/")).data,enabled:e,staleTime:6e4}),{data:eV,isLoading:eE}=(0,r.f)({queryKey:["entity-pdf-sender"],queryFn:async()=>(await o.k.get("/entity-pdf/sender/")).data,enabled:e&&!!R,staleTime:3e5}),e$=!!R&&eV?.transport==="system",eR=e$&&!eV?.sender,{data:eT}=(0,r.f)({queryKey:["mail-default-cc"],queryFn:async()=>(await o.k.get("/mail/default-cc/")).data??{},enabled:e&&void 0===H,staleTime:3e5}),eL=(0,f.C)(G??w),eH=(0,n.useMemo)(()=>eL?.templates??[],[eL]),{data:eB}=(0,r.f)({queryKey:["mail-template-record",eL?.entityPath,E],queryFn:async()=>{let e=await o.k.get(`/salesforce/${eL?.entityPath}/${E}/`);return e.data?.data??{}},enabled:e&&!!eL&&eH.length>0&&!!E,staleTime:3e4}),eU=(0,n.useMemo)(()=>U??`${W("mail.send.defaultBodyIntro",{defaultValue:"Anbei sende ich Ihnen"})} ${Z} "${$}"${R?` ${W("mail.send.defaultBodyAsPdf",{defaultValue:"als PDF"})}`:""}.

${W("mail.send.regards",{defaultValue:"Mit freundlichen Grüßen"})}`,[U,Z,$,R,W,q]);(0,n.useEffect)(()=>{if(e){Q((L??[]).map(h.W).filter(h.x)),Y([]),et(!1),er(B??`${Z}: ${$}`),ei(eU),es(F??""),eo([]),ec(!1),ef(""),ep.current=!1,eh.current=!1,eg.current=!1,ev(null),ej([]);let e=void 0!==K?{blob:K,token:O??null,filename:T??null}:null;ek(e),eM.current=e?Promise.resolve(e):null,eb(e=>e+1)}},[e,Z,$,L,B,eU,F]);let eG=void 0===H?null:JSON.stringify(H);(0,n.useEffect)(()=>{let t;if(!e||eg.current)return;if(null!==eG)t=JSON.parse(eG).map(e=>e.trim().toLowerCase());else{if(!eT)return;t=_(eT,G??w)}eg.current=!0;let n=t.filter(h.x);0!==n.length&&(Y(e=>[...new Set([...n,...e])]),et(!0))},[e,eG,eT,G,w,e_]),(0,n.useEffect)(()=>{if(!e||!eB||eh.current||(eh.current=!0,J.length>0||(L??[]).length>0))return;let t=(0,f.u)(eL,eB);t.length>0&&Q(t)},[e,eB,J.length,L,eL]);let eF=(0,n.useCallback)(()=>{if(!R)return Promise.reject(Error("no attachment"));if(!eM.current){let e=j(R);eM.current=e,e.then(ek).catch(()=>{eM.current=null})}return eM.current},[R]),eO=(0,n.useMemo)(()=>(0,S.f)(eP),[eP]),eK=(0,n.useMemo)(()=>"pdf"===eS?[{id:"pdf",name:ey?.filename??T??"dokument.pdf",kind:"pdf",loadData:()=>eF().then(e=>e.blob),onDownload:()=>void eF().then(e=>(0,v.f)(e.blob,e.filename??T??"dokument.pdf"))}]:eO,[eS,ey,T,eF,eO]),eW=null===eS||"pdf"===eS?0:Math.max(0,eO.findIndex(e=>e.id===eS)),eq=(0,n.useMemo)(()=>eP.filter(e=>ew.includes(e.id)).reduce((e,t)=>e+t.contentSize,0),[eP,ew]),eZ=ey?.blob.size??0,eJ=(0,n.useCallback)(e=>{var t;let n;es(e),ep.current=!0;let r=eH.find(t=>t.id===e);if(!r){eo([]),ei(eU),er(B??`${Z}: ${$}`);return}let a=(0,f.U)(r,eB??{}),i=(n=(t=a.text).indexOf("\n\n"))<0?{subject:t,body:""}:{subject:t.slice(0,n),body:t.slice(n+2)};er(i.subject),ei(i.body),eo(a.missing)},[eH,eB,eU,B,Z,$]);(0,n.useEffect)(()=>{e&&!ep.current&&el&&eH.length>0&&eB&&eJ(el)},[e,el,eH.length,eB,eJ]);let eQ=async()=>{try{let e=eI?.text?`

${eI.text}`:"";await navigator.clipboard.writeText(`${en}

${ea}${e}`),d.c.success(W("mailTemplates.copied",{defaultValue:"Text kopiert"}))}catch{d.c.error(W("mailTemplates.copyError",{defaultValue:"Kopieren fehlgeschlagen — Text bitte manuell markieren"}))}},eX=async e=>{if(e.preventDefault(),0===J.length)return void ef(W("mail.send.recipientRequired",{defaultValue:"Mindestens ein Empfänger erforderlich"}));ec(!0);try{let e=(0,p.f)(ea);R?await o.k.post("/entity-pdf/send",{entityType:w,entityId:E,entityName:$,pdfApiPath:R,defaultFilename:T,previewToken:ey?.token??void 0,attachmentDocumentIds:ew.length>0?ew:void 0,channel:"mail",mail:{to:J,cc:X.length>0?X:void 0,subject:en,body:e,signature:!0}}):await o.k.post("/mail/send",{to:J,cc:X.length>0?X:void 0,subject:en,body:e,log:E?{entityId:E,entityType:G??w}:void 0,signature:!0});let t={entityType:w,entityId:E,entityName:$,action:R?W("notifications.action.pdfEmailSent",{defaultValue:"PDF per E-Mail gesendet"}):W("notifications.action.emailSent",{defaultValue:"E-Mail gesendet"})};d.c.success(`${W("mail.send.sentTo",{defaultValue:"E-Mail gesendet an"})} ${J.join(", ")}`,{context:t}),g()}catch(n){let e,t={entityType:w,entityId:E,entityName:$,action:W("notifications.action.emailSendFailed",{defaultValue:"E-Mail senden — Fehler"})};if((0,y.f)(n)&&n.response){let t=n.response.data;e=t?.message&&(0,V.f)(W,t.message)||W("mail.send.sendError",{defaultValue:"Fehler beim Senden"})}else e=n instanceof Error?n.message:W("mail.send.sendMailError",{defaultValue:"Fehler beim Senden der E-Mail"});d.c.error(e,{context:t})}finally{ec(!1)}},eY=!!R&&eE,e0=!e$&&!eY&&!ez&&!eN,e1=(0,n.useMemo)(()=>eH.map(e=>({label:e.title,value:e.id})),[eH]),e2=!!eI?.html,e7=eI?"ready":eD?"error":"loading";return e?(0,t.jsxs)(a.f,{isOpen:e,onClose:g,title:`${Z} ${W("mail.send.titleSuffix",{defaultValue:"per E-Mail senden"})}`,size:"fit",dataTestId:"send-via-mail-modal",closeOnBackdropClick:!1,children:[(0,t.jsxs)(z.n,{onSubmit:eX,"data-testid":"send-via-mail-form",children:[e0&&(0,t.jsxs)(z.p,{"data-testid":"mail-not-linked-hint",children:[(0,t.jsx)("p",{children:W("mail.send.notLinked",{defaultValue:"Um E-Mails zu senden, müssen Sie Ihr Microsoft-Konto verknüpfen. Vorlage und Text lassen sich trotzdem kopieren."})}),(0,t.jsx)(z.K,{$variant:"primary",type:"button",onClick:()=>{window.location.href="/api/auth/outlook"},"data-testid":"connect-outlook-btn",children:W("mail.send.connectOutlook",{defaultValue:"Microsoft-Konto verbinden"})})]}),R&&eV&&(0,t.jsx)(z.f,{"data-testid":"send-mail-sender","data-transport":eV.transport,"data-configured":"personal"===eV.transport||eV.sender?"true":"false","data-dry-run":eV.dryRun?"true":"false",children:"personal"===eV.transport?W("mail.send.senderPersonal",{defaultValue:"Absender: Ihr verknüpftes Microsoft-Konto"}):eV.sender?W("mail.send.senderSystem",{defaultValue:"Absender: {{name}} <{{address}}>, Antworten gehen an dieses Postfach",name:eV.sender.name,address:eV.sender.address}):W("mail.send.senderMissing",{defaultValue:"Der Absender für Belege ist in dieser Umgebung nicht konfiguriert."})}),eH.length>0&&(0,t.jsxs)(z.o,{children:[(0,t.jsx)(i.f,{fieldName:"mailTemplate",label:W("mail.send.template",{defaultValue:"Vorlage"}),fieldType:"picklist",value:el,isEditable:!0,isEditing:!0,hideEditActions:!0,compact:!0,options:e1,onChange:(e,t)=>eJ("string"==typeof t?t:""),dataTestId:"mail-template"}),ed.length>0&&(0,t.jsxs)(z.G,{"data-testid":"mail-template-missing-hint",children:[W("mailTemplates.missingHint",{defaultValue:"Fehlende Werte im Datensatz:"})," ",ed.join(", ")]})]}),(0,t.jsxs)(z.o,{children:[(0,t.jsx)(z.R,{htmlFor:"mail-to",children:W("mail.send.to",{defaultValue:"An"})}),(0,t.jsx)(b.f,{inputId:"mail-to",values:J,onChange:Q,error:em,onInput:()=>ef(""),placeholder:W("mail.send.toPlaceholder",{defaultValue:"E-Mail-Adresse eingeben und Enter drücken"}),inputTestId:"mail-to-input",removeTestIdPrefix:"remove-recipient-",contactTestId:"mail-to-contact",contactFieldName:"mailContactTo"}),!ee&&(0,t.jsx)(z.K,{type:"button",$variant:"secondary",onClick:()=>et(!0),style:{alignSelf:"flex-start",padding:"2px 8px",fontSize:"0.75rem"},"data-testid":"show-cc-btn",children:W("mail.send.addCc",{defaultValue:"CC hinzufügen"})})]}),ee&&(0,t.jsxs)(z.o,{children:[(0,t.jsx)(z.R,{htmlFor:"mail-cc",children:"CC"}),(0,t.jsx)(b.f,{inputId:"mail-cc",values:X,onChange:Y,reportErrors:!1,placeholder:W("mail.send.ccPlaceholder",{defaultValue:"CC E-Mail-Adresse"}),inputTestId:"mail-cc-input",removeTestIdPrefix:"remove-cc-",contactTestId:"mail-cc-contact",contactFieldName:"mailContactCc"})]}),(0,t.jsxs)(z.o,{children:[(0,t.jsx)(z.R,{htmlFor:"mail-subject",children:W("mail.send.subject",{defaultValue:"Betreff"})}),(0,t.jsx)(z.e,{id:"mail-subject",type:"text",value:en,onChange:e=>er(e.target.value),"data-testid":"mail-subject-input"})]}),(0,t.jsxs)(z.o,{children:[(0,t.jsx)(z.R,{htmlFor:"mail-body",children:W("mail.send.message",{defaultValue:"Nachricht"})}),(0,t.jsx)(z.q,{id:"mail-body",value:ea,onChange:e=>ei(e.target.value),"data-testid":"mail-body-input","data-has-signature":e2?"true":"false","data-template-id":el||void 0})]}),(0,t.jsxs)(z.o,{children:[(0,t.jsx)(z.R,{as:"span",children:W("mail.send.signature",{defaultValue:"Signatur"})}),eI?.html?(0,t.jsx)(x.f,{html:eI.html,paper:!0,title:W("mail.send.signaturePreview",{defaultValue:"Vorschau der Signatur"}),dataTestId:"mail-signature-preview",dataAttributes:{state:e7}}):(0,t.jsx)(z._,{"data-testid":"mail-signature-preview","data-state":e7,children:eD?W("mail.send.signatureError",{defaultValue:"Die Signatur konnte nicht geladen werden. Sie wird beim Senden trotzdem angehängt."}):W("mail.send.signatureLoading",{defaultValue:"Signatur wird geladen …"})})]}),R&&(0,t.jsxs)(z.o,{children:[(0,t.jsx)(z.R,{children:W("mail.send.attachment",{defaultValue:"Anhang"})}),(0,t.jsxs)(z.g,{type:"button",onClick:()=>ev("pdf"),"aria-label":W("mail.send.previewAttachment",{defaultValue:"Vorschau von {{name}} öffnen",name:T??""}),"data-testid":"mail-attachment-badge","data-previewed":ey?"true":"false",children:[(0,t.jsx)(l.f,{}),(0,t.jsx)("span",{children:ey?.filename??T}),(0,t.jsx)(z.N,{children:W("relatedFiles.preview",{defaultValue:"Vorschau"})})]})]}),eC&&eP.length>0&&(0,t.jsxs)(z.o,{"data-testid":"mail-extra-attachments",children:[(0,t.jsx)(z.R,{children:W("mail.send.extraAttachments",{defaultValue:"Weitere Anhänge aus dem Datensatz (max. {{size}} insgesamt)",size:ex.fileSize(3145728)})}),(0,t.jsx)(z.Q,{children:eP.map(e=>{let n=eO.find(t=>t.id===e.id),r=ew.includes(e.id),a=!r&&(eZ+eq+e.contentSize>3145728||ew.length>=10);return(0,t.jsxs)(z.m,{"data-testid":`mail-extra-attachment-${e.id}`,"data-selected":r?"true":"false","data-disabled":a?"true":"false",children:[(0,t.jsx)(k.f,{name:n?.name??e.title,extension:e.fileExtension,kind:(0,N.q)(e.fileExtension),imageUrl:n?.previewUrl,onClick:()=>ev(e.id),ariaLabel:W("mail.send.previewAttachment",{defaultValue:"Vorschau von {{name}} öffnen",name:n?.name??e.title}),dataTestId:`mail-extra-attachment-thumb-${e.id}`}),(0,t.jsxs)(z.M,{children:[(0,t.jsx)("input",{type:"checkbox",checked:r,disabled:a,onChange:()=>{let t;return t=e.id,ej(e=>e.includes(t)?e.filter(e=>e!==t):[...e,t])},"data-testid":`mail-extra-attachment-check-${e.id}`}),(0,t.jsx)(z.c,{title:n?.name,children:n?.name??e.title}),(0,t.jsx)(z.L,{children:ex.fileSize(e.contentSize)})]})]},e.id)})})]}),(0,t.jsxs)(z.A,{children:[(0,t.jsx)(z.K,{type:"button",$variant:"secondary",onClick:g,disabled:eu,"data-testid":"mail-cancel-btn",children:W("common.cancel",{defaultValue:"Abbrechen"})}),(0,t.jsx)(z.K,{type:"button",$variant:"secondary",onClick:eQ,"data-testid":"mail-copy-btn",children:W("mailTemplates.copy",{defaultValue:"Text kopieren"})}),(0,t.jsx)(z.K,{type:"submit",$variant:"primary",disabled:eu||0===J.length||e0||eY||eR,"data-testid":"mail-send-btn",children:eu?(0,t.jsx)(s.f,{}):W("mail.send.send",{defaultValue:"Senden"})})]})]}),null!==eS&&eK.length>0&&(0,t.jsx)(M.f,{items:eK,index:eW,onIndexChange:e=>ev(eK[e]?.id??null),onClose:()=>ev(null),layer:"dialog",dataTestId:"mail-attachment-viewer"})]}):null}],252456),e.s([],721007)},666629,e=>{e.s(["f",0,function(e,t){let n=window.URL.createObjectURL(e),r=document.createElement("a");r.href=n,r.download=t,document.body.appendChild(r),r.click(),window.URL.revokeObjectURL(n),document.body.removeChild(r)}])},328174,e=>{var t=e.i(669593);let n={Order:"Order",Auftrag__c:"Order",Invoice:"Abrechnung__c",MaterialProposal:"Material_Proposal__c",SampleSending:"Sample_Sending__c",MaterialAnalysis:"Materialanalyse__c"},r={Abrechnung__c:{apiName:"Abrechnung__c",entityPath:"invoice",templates:[{id:"invoice-zahlungserinnerung-text",title:"Zahlungserinnerung (ohne Dokument)",subject:"Zahlungserinnerung zur Rechnung {Belegnummer__c}",body:`Sehr geehrte Damen und Herren,

zu unserer Rechnung {Belegnummer__c} vom {Belegdatum__c} \xfcber {Rechnungsbetrag_brutto__c|eur} (f\xe4llig am {Zahlungsziel__c}) konnten wir bisher keinen Zahlungseingang feststellen. Wir bitten um umgehende \xdcberweisung des Betrags unter Angabe der Rechnungsnummer.

Sollte die Zahlung bereits erfolgt sein, betrachten Sie diese Nachricht bitte als gegenstandslos.

Mit freundlichen Gr\xfc\xdfen
plastship GmbH`},{id:"invoice-rueckfrage",title:"Rückfrage zur Rechnung",subject:"Rückfrage zur Rechnung {Belegnummer__c}",body:`Sehr geehrte Damen und Herren,

zu unserer Rechnung {Belegnummer__c} vom {Belegdatum__c} \xfcber {Rechnungsbetrag_brutto__c|eur} haben wir eine R\xfcckfrage:

[R\xfcckfrage hier eintragen]

Vielen Dank f\xfcr eine kurze R\xfcckmeldung.

Mit freundlichen Gr\xfc\xdfen
plastship GmbH`},{id:"invoice-zahlungseingang",title:"Zahlungseingang bestätigt",subject:"Zahlungseingang zur Rechnung {Belegnummer__c}",body:`Sehr geehrte Damen und Herren,

vielen Dank – der Betrag von {Rechnungsbetrag_brutto__c|eur} zu unserer Rechnung {Belegnummer__c} ist bei uns eingegangen. Die Rechnung ist damit ausgeglichen.

Mit freundlichen Gr\xfc\xdfen
plastship GmbH`}],recipientPaths:["Account__r.E_Mailadresse_Rechnungen__c","Account__r.Account_E_Mail__c"]},Order:{apiName:"Order",entityPath:"order",templates:[{id:"order-confirmation",title:"Auftragsbestätigung an Kunden",subject:"Auftragsbestätigung {OrderNumber}",body:`Sehr geehrte Damen und Herren,

hiermit best\xe4tigen wir Ihren Auftrag {OrderNumber} vom {EffectiveDate}.

Die Auftragsbest\xe4tigung mit allen Details finden Sie im Anhang. Bitte pr\xfcfen Sie die Angaben und melden Sie sich bei R\xfcckfragen gerne bei uns.

Mit freundlichen Gr\xfc\xdfen
plastship GmbH`},{id:"order-delivery-note-customer",title:"Lieferschein an Kunden",subject:"Lieferschein zu Auftrag {OrderNumber}",body:`Sehr geehrte Damen und Herren,

anbei erhalten Sie den Lieferschein zu Ihrem Auftrag {OrderNumber}.

Bitte pr\xfcfen Sie die Lieferung bei Erhalt und best\xe4tigen Sie uns kurz den Wareneingang. Bei Abweichungen melden Sie sich bitte umgehend.

Mit freundlichen Gr\xfc\xdfen
plastship GmbH`},{id:"order-purchase-supplier",title:"Bestellung an Lieferanten",subject:"Bestellung zu Auftrag {OrderNumber}",body:`Sehr geehrte Damen und Herren,

anbei erhalten Sie unsere Bestellung zu Auftrag {OrderNumber}.

Bitte best\xe4tigen Sie uns den Auftrag sowie den voraussichtlichen Bereitstellungstermin.

Mit freundlichen Gr\xfc\xdfen
plastship GmbH`},{id:"order-loading-note-supplier",title:"Ladeschein an Lieferanten",subject:"Ladeschein zu Auftrag {OrderNumber}",body:`Sehr geehrte Damen und Herren,

anbei der Ladeschein zu Auftrag {OrderNumber}.

Bitte halten Sie die Ware zum vereinbarten Termin zur Abholung bereit und geben Sie den Ladeschein dem Fahrer mit.

Mit freundlichen Gr\xfc\xdfen
plastship GmbH`},{id:"order-transport-request-carrier",title:"Transportanfrage an Spediteur (mit Adressen)",subject:"Transportanfrage zu Auftrag {OrderNumber}",body:`Sehr geehrte Damen und Herren,

f\xfcr folgenden Transport bitten wir um Ihr Angebot:

Ladestelle: {@adresse:Produktionsstandort__r}
Lieferstelle: {@adresse:Produktion_Delivery__r}
Menge: {Quantity__c} t
Abholung ab: {Datum_Abholung_NEU__c}

Bitte teilen Sie uns Ihren Transportpreis sowie den fr\xfchestm\xf6glichen Abholtermin mit.

Mit freundlichen Gr\xfc\xdfen
plastship GmbH`},{id:"order-transport-docs-carrier",title:"Transportunterlagen an Transporteur",subject:"Transportauftrag zu {OrderNumber}",body:`Sehr geehrte Damen und Herren,

anbei erhalten Sie die Unterlagen zum Transport f\xfcr Auftrag {OrderNumber}: Transportauftrag, Ladeschein und Lieferschein.

Bitte best\xe4tigen Sie uns die \xdcbernahme des Transports und melden Sie sich bei R\xfcckfragen zu Ladestelle oder Termin.

Mit freundlichen Gr\xfc\xdfen
plastship GmbH`},{id:"order-invoice-reminder",title:"Erinnerung fehlende Eingangsrechnung (Lieferant)",subject:"Fehlende Rechnung zu Auftrag {OrderNumber}",body:`Sehr geehrte Damen und Herren,

zu unserem Auftrag {OrderNumber} vom {EffectiveDate} liegt uns bisher keine Rechnung vor.

Bitte senden Sie uns die Rechnung zeitnah zu, damit wir die Abrechnung abschlie\xdfen k\xf6nnen.

Mit freundlichen Gr\xfc\xdfen
plastship GmbH`}]},Material_Proposal__c:{apiName:"Material_Proposal__c",entityPath:"material-proposals",templates:[{id:"mp-transport-request-carrier",title:"Transportpreis-Anfrage an Spediteur (mit Adressen)",subject:"Transportpreis-Anfrage {Name}",body:`Sehr geehrte Damen und Herren,

f\xfcr eine geplante Lieferung bitten wir um Ihren Transportpreis:

Ladeort: {@adresse:Loading_Location__r}
Lieferort: {@adresse:Delivery_Location__r}
Menge: {Tonnage_per_truck__c} t je Komplettladung
Material: {Product__r.Main_polymer__c??Import_Main_Polymer__c} – {Product_Description__c??Product__r.Product_Description__c??Product__r.Name}

Bitte nennen Sie uns Ihren Preis je Tonne bzw. je Komplettladung sowie die aktuelle Verf\xfcgbarkeit.

Mit freundlichen Gr\xfc\xdfen
plastship GmbH`},{id:"mp-offer",title:"Angebot kommunizieren",subject:"Materialangebot {Product_Code__c??Product__r.ProductCode} – {Product_Description__c??Product__r.Product_Description__c??Product__r.Name}",body:`Sehr geehrte Damen und Herren,

gerne bieten wir Ihnen folgendes Material an, das auf Ihre Spezifikationen passen k\xf6nnte:

{Product_Code__c??Product__r.ProductCode} – {Product_Description__c??Product__r.Product_Description__c??Product__r.Name}
Hauptpolymer: {Product__r.Main_polymer__c??Import_Main_Polymer__c}
Materialtyp: {Product__r.Material_type__c}
Rezyklatdefinition: {Product__r.Rezyklatdefinition__c}
Produktbeschreibung: {Product__r.Product_Description__c??Product__r.Description}

Lieferort: {@adresse:Delivery_Location__r}
Lieferbedingungen: {Delivery_Terms_Offer__c}
Preis: {Sales_Price_per_ton__c} €/t
Tonnage je LKW: {Tonnage_per_truck__c} t
Verf\xfcgbare Menge: {Amount_monthly_t_offered__c} t/Monat

Bei Interesse organisieren wir Ihnen gerne kurzfristig ein Muster.

Wir freuen uns auf Ihre R\xfcckmeldung.

Mit freundlichen Gr\xfc\xdfen
plastship GmbH`},{id:"mp-sample-followup",title:"Nachfassen nach Musterversand",subject:"Ihr Muster {Product_Code__c??Product__r.ProductCode} – {Product_Description__c??Product__r.Product_Description__c??Product__r.Name}",body:`Sehr geehrte Damen und Herren,

vor einiger Zeit haben wir Ihnen ein Muster zu folgendem Material zukommen lassen:

{Product_Code__c??Product__r.ProductCode} – {Product_Description__c??Product__r.Product_Description__c??Product__r.Name} ({Product__r.Main_polymer__c??Import_Main_Polymer__c})

Konnten Sie das Material bereits pr\xfcfen? Gerne stellen wir Ihnen weitere Informationen oder zus\xe4tzliche Mustermengen bereit.

Mit freundlichen Gr\xfc\xdfen
plastship GmbH`}]},Sample_Sending__c:{apiName:"Sample_Sending__c",entityPath:"sample-sending",templates:[{id:"ss-order-supplier",title:"Musterbestellung an Lieferanten",subject:"Musterbestellung — Sample Sending Nr. {Name}",body:`Sehr geehrte Damen und Herren,

wir bestellen hiermit Muster zu folgenden Materialien (Sample Sending Nr. {Name}):

{#Material_Proposals__r??Material_Proposals1__r: Product__r.ProductCode | Product__r.Name | Sample_Size_in_kg__c#kg}

Bitte stellen Sie die Muster zum Versand bereit und teilen Sie uns den voraussichtlichen Versandtermin mit.

Mit freundlichen Gr\xfc\xdfen
plastship GmbH`},{id:"ss-shipping-notice",title:"Versandavis an Empfänger",subject:"Mustersendung Nr. {Name} — Versandankündigung",body:`Sehr geehrte Damen und Herren,

Ihre Mustersendung Nr. {Name} wurde versendet und ist in K\xfcrze bei Ihnen: {@adresse:Delivery_Produktion__r}.

Enthaltene Muster:
{#Material_Proposals1__r??Material_Proposals__r: Product__r.ProductCode | Product__r.Name | Sample_Size_in_kg__c#kg}

Bitte geben Sie uns kurz Bescheid, sobald die Sendung eingetroffen ist. Wir freuen uns anschlie\xdfend auf Ihr Feedback zur Materialpr\xfcfung.

Mit freundlichen Gr\xfc\xdfen
plastship GmbH`},{id:"ss-feedback-request",title:"Feedback zum Muster anfragen",subject:"Ihr Feedback zu Mustersendung Nr. {Name}",body:`Sehr geehrte Damen und Herren,

Sie haben von uns die Mustersendung Nr. {Name} mit folgenden Materialien erhalten:

{#Material_Proposals1__r??Material_Proposals__r: Product__r.ProductCode | Product__r.Name | Sample_Size_in_kg__c#kg}

Konnten Sie die Materialien bereits testen? \xdcber eine kurze R\xfcckmeldung zu Ihren Ergebnissen je Material w\xfcrden wir uns sehr freuen — sie hilft uns, Ihnen passende Folgemengen anzubieten.

Mit freundlichen Gr\xfc\xdfen
plastship GmbH`}]},Case:{apiName:"Case",entityPath:"case",templates:[{id:"case-received",title:"Eingangsbestätigung Anfrage",subject:"Ihre Anfrage {CaseNumber}",body:`Sehr geehrte Damen und Herren,

vielen Dank f\xfcr Ihre Anfrage „{Subject}". Wir haben sie unter der Nummer {CaseNumber} aufgenommen und melden uns schnellstm\xf6glich mit einer R\xfcckmeldung.

Mit freundlichen Gr\xfc\xdfen
plastship GmbH`},{id:"case-waiting-customer",title:"Rückfrage an Kunden (Warten auf Antwort)",subject:"Rückfrage zu Ihrer Anfrage {CaseNumber}",body:`Sehr geehrte Damen und Herren,

zu Ihrer Anfrage „{Subject}" ({CaseNumber}) ben\xf6tigen wir noch eine Information von Ihnen, um fortfahren zu k\xf6nnen.

[HIER: konkrete R\xfcckfrage einf\xfcgen]

Vielen Dank vorab f\xfcr Ihre R\xfcckmeldung.

Mit freundlichen Gr\xfc\xdfen
plastship GmbH`}]},Materialanalyse__c:{apiName:"Materialanalyse__c",entityPath:"material-analysis",templates:[{id:"ma-assign-lab",title:"Analyse-Beauftragung an Dienstleister",subject:"Analyse-Beauftragung {Name}",body:`Sehr geehrte Damen und Herren,

hiermit beauftragen wir Sie mit der Materialanalyse {Name}.

Material: {Material_ID__r.Name}
Analysetyp: {Analysetyp__c}

Das Muster geht Ihnen in K\xfcrze zu bzw. liegt Ihnen bereits vor. Bitte tragen Sie die Ergebnisse direkt in unserem System ein und aktualisieren Sie dort den Status der Analyse.

Mit freundlichen Gr\xfc\xdfen
plastship GmbH`}]}};function a(e){return n[e]??e}function i(e){return r[a(e)]}let l=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;function s(e,t){return t.split(".").reduce((e,t)=>{if(e&&"object"==typeof e)return e[t]},e)}function d(e,n){if("eur"===n||"zahl"===n){let t="number"==typeof e?e:Number("string"==typeof e?e.trim():0/0);if(Number.isFinite(t))return"eur"===n?new Intl.NumberFormat("de-DE",{style:"currency",currency:"EUR"}).format(t):new Intl.NumberFormat("de-DE",{maximumFractionDigits:2}).format(t)}if("string"==typeof e&&/^\d{4}-\d{2}-\d{2}/.test(e)){let n=new Date(e);if(!Number.isNaN(n.getTime()))return(0,t.C)(n)}return String(e)}let o=/\{#([A-Za-z0-9_?]+)\s*:\s*([^}]+)\}/g,u=/\{@adresse:([A-Za-z0-9_.]+)\}/g,c=/\{([A-Za-z0-9_.?]+)(?:\|(eur|zahl))?\}/g;function m(e,t){for(let n of t.split("??")){let t=s(e,n.trim());if(null!=t&&""!==t)return t}}function f(e,t){let n=e[t];return Array.isArray(n)?n:n&&"object"==typeof n&&Array.isArray(n.records)?n.records:[]}e.s(["J",0,r,"C",0,i,"Y",0,function(e){return i(e)?.templates??[]},"u",0,function(e,t){if(!e?.recipientPaths?.length||!t)return[];let n=new Set,r=[];for(let a of e.recipientPaths){let e=s(t,a);if("string"!=typeof e)continue;let i=e.trim().toLowerCase();!l.test(i)||n.has(i)||(n.add(i),r.push(i))}return r},"U",0,function(e,t){let n=[],r=e=>(n.includes(e)||n.push(e),`[FEHLT: ${e}]`),a=e=>{let n;return n=e.replace(o,(e,n,a)=>{let i=n.split("??").map(e=>e.trim()),l=i.find(e=>f(t,e).length>0)??i[0],s=f(t,l);if(0===s.length)return r(l);let o=a.split("|").map(e=>e.trim());return s.map((e,t)=>{let n=o.map(t=>{let[n,r]=t.split("#"),a=m(e,n.trim());if(void 0===a)return null;let i=d(a);return r?`${i} ${r.trim()}`:i}).filter(e=>null!==e);return`${t+1}. ${n.length>0?n.join(" – "):r(`${l}.${o[0]}`)}`}).join("\n")}).replace(u,(e,n)=>{let a,i,l,d=s(t,n);return d&&"object"==typeof d?(i=[(a=e=>{let t=d[e];return null==t?"":String(t).trim()})("Strasse__c"),a("Strasse_Nummer__c")].filter(Boolean).join(" "),l=[a("PLZ__c"),a("Ort__c")].filter(Boolean).join(" "),[a("Name"),i,l,a("Land__c")].filter(Boolean).join(", ")||r(`${n}.Name`)):r(n)}),n.replace(c,(e,n,a)=>{let i=m(t,n);return void 0===i?r(n.split("??")[0].trim()):d(i,a)})},i=a(e.subject),l=a(e.body);return{text:`${i}

${l}`,missing:n}},"D",0,a])},333393,e=>{e.s(["O",0,{info:{purposes:["inbound-cases"],addressEnv:["MAILBOX_INFO_ADDRESS"],issues:[1598,1733]},accounting:{purposes:["inbound-cases","sender-documents","default-cc"],addressEnv:["MAIL_DEFAULT_CC_ACCOUNTING"],issues:[1733,1807,1888]},dispo3:{purposes:["inbound-cases","default-cc"],addressEnv:["MAIL_DEFAULT_CC_DISPO"],issues:[1733,1807]},noreply:{purposes:["system-sender"],addressEnv:["SMTP_FROM","EMAIL_FROM"],issues:[]},dev:{purposes:["security-contact"],addressEnv:["MAILBOX_DEV_ADDRESS"],issues:[2141]}},"b",0,["info","accounting","dispo3","noreply","dev"]],333393)},972032,e=>{let t=e.i(588348).default;var n=e.i(345712);t.name,t.street,t.postcode,t.city,t.country,t.web;let r=e=>e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"),a=/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g,i=n.G.palette,l={navy:i.default.primary,green:i.default.secondary,greyDark:i.default.greyDark,text:i.text.primary,textSecondary:i.text.secondary};l.text,l.greyDark,l.navy,l.navy,l.textSecondary,l.text,l.textSecondary,l.text,l.navy,e.s(["f",0,function(e,t){let n=t?` style="${r(t)}"`:"",i=[],l=0;for(let t of e.matchAll(a))i.push(r(e.slice(l,t.index))),i.push(`<a href="${r(t[2])}"${n}>${r(t[1])}</a>`),l=(t.index??0)+t[0].length;return i.push(r(e.slice(l))),i.join("").replace(/\r?\n/g,"<br/>")}],972032)}],588348,(e,t,n)=>{t.exports={name:"plastship GmbH",street:"Auf der Lind 10",postcode:"65529",city:"Waldems",country:"Deutschland",countryCode:"DE",phone:"+49 6126 – 58 980 10",email:"info@plastship.com",web:"www.plastship.com",webUrl:"https://www.plastship.com",ustId:"DE319452749",seat:"Waldems",hrb:"HRB 30484",registerCourt:"Registergericht Wiesbaden",gf:"Andreas Bastian, Markus Dambeck",bank:"DB Privat- und Firmenkundenbank",iban:"DE74 5107 0024 0036 8613 00",bic:"DEUTDEDB510",disclaimerUrl:"https://plastship.com/email-disclaimer/",dataProtectionUrl:"https://plastship.com/privacy/"}}]);