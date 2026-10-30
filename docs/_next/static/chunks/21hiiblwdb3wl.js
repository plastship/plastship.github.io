(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,372480,e=>{var t=e.i(843476),i=e.i(997053);let n=i.U.svg.withConfig({displayName:"IconMailSend.styles__Root",componentId:"sc-505d54d1-0"})``;e.s(["f",0,e=>(0,t.jsxs)(n,{className:e.className,"data-testid":"icon-mail-send-root",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,t.jsx)("path",{d:"M2 5V7L12 12L22 7V5",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"square"}),(0,t.jsx)("path",{d:"M21.457 18H22L14 18",stroke:"currentColor",strokeWidth:"2",strokeMiterlimit:"10",strokeLinecap:"square"}),(0,t.jsx)("path",{d:"M18.5 21.5L22 18L18.5 14.5",stroke:"currentColor",strokeWidth:"2",strokeMiterlimit:"10",strokeLinecap:"square"}),(0,t.jsx)("path",{d:"M23 14.7607L21 12.7607V5H3V19H11V21H1V3H23V14.7607Z",fill:"currentColor",stroke:"none"})]})],372480)},807751,e=>{var t=e.i(843476),i=e.i(271645),n=e.i(49958),a=e.i(644546),l=e.i(204580);e.i(805885);var r=e.i(535004),o=e.i(840637);e.i(339806);var s=e.i(946049),d=e.i(929842),c=e.i(501496),u=e.i(666629),p=e.i(218595);e.i(721007);var f=e.i(252456),m=e.i(481804);e.i(663569);var h=e.i(30436);e.i(867428);var g=e.i(793300);e.i(662459);var y=e.i(227853),x=e.i(2975),b=e.i(301097),w=e.i(555508);e.i(821194);var v=e.i(99222),$=e.i(650942),C=e.i(997053);let k=C.U.section.withConfig({displayName:"AttachmentPreviewList.styles__Root",componentId:"sc-b50cfbe0-0"})`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,j=C.U.h4.withConfig({displayName:"AttachmentPreviewList.styles__Heading",componentId:"sc-b50cfbe0-1"})`
  margin: 0;
  font-size: 0.875rem;
  font-weight: 600;
  color: ${({theme:e})=>e.palette.default.black};
`,I=C.U.ul.withConfig({displayName:"AttachmentPreviewList.styles__List",componentId:"sc-b50cfbe0-2"})`
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
  margin: 0;
  padding: 0;
  list-style: none;
`,_=C.U.li.withConfig({displayName:"AttachmentPreviewList.styles__Row",componentId:"sc-b50cfbe0-3"})`
  display: flex;
  align-items: center;
  gap: 0.625rem;
  padding: 0.375rem 0.5rem;
  border-radius: 6px;
  background-color: ${({theme:e})=>e.palette.default.greyLight};
`,E=C.U.div.withConfig({displayName:"AttachmentPreviewList.styles__Info",componentId:"sc-b50cfbe0-4"})`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
`,L=C.U.span.withConfig({displayName:"AttachmentPreviewList.styles__Name",componentId:"sc-b50cfbe0-5"})`
  font-size: 0.8125rem;
  font-weight: 600;
  color: ${({theme:e})=>e.palette.default.black};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,M=C.U.span.withConfig({displayName:"AttachmentPreviewList.styles__Meta",componentId:"sc-b50cfbe0-6"})`
  font-size: 0.75rem;
  color: ${({theme:e})=>e.palette.default.secondary};
`,V=C.U.div.withConfig({displayName:"AttachmentPreviewList.styles__RowActions",componentId:"sc-b50cfbe0-7"})`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  flex-shrink: 0;
`,T=`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 6px;
  cursor: pointer;
  box-sizing: border-box;
  text-decoration: none;

  svg {
    width: 1rem;
    height: 1rem;
  }
`,F=C.U.button.withConfig({displayName:"AttachmentPreviewList.styles__ActionButton",componentId:"sc-b50cfbe0-8"})`
  ${T}
  border: 1px solid ${({theme:e})=>e.palette.default.primary};
  background-color: transparent;
  color: ${({theme:e})=>e.palette.default.primary};

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.palette.default.primary};
    outline-offset: 1px;
  }
`,D=C.U.a.withConfig({displayName:"AttachmentPreviewList.styles__ActionLink",componentId:"sc-b50cfbe0-9"})`
  && {
    ${T}
    border: 1px solid ${({theme:e})=>e.palette.default.grey};
    color: ${({theme:e})=>e.palette.default.primary};
  }
`,N=C.U.p.withConfig({displayName:"AttachmentPreviewList.styles__Hint",componentId:"sc-b50cfbe0-10"})`
  margin: 0;
  font-size: 0.75rem;
  color: ${({theme:e})=>e.palette.default.secondary};
`,A=({recordId:e,title:n,viewerLayer:a="dialog",dataTestId:r="attachment-preview-list"})=>{let{tr:o}=(0,v.f)(),s=(0,w.f)(),{data:d,isLoading:c,error:u}=(0,b.h)(e),p=(0,i.useMemo)(()=>(d?.data??[]).filter(e=>!!e.downloadUrl),[d]),f=(0,i.useMemo)(()=>(0,x.f)(p),[p]),[C,T]=(0,i.useState)(null),A=n??o("relatedFiles.title",{defaultValue:"Anhänge"}),S=e=>{let t=f.findIndex(t=>t.id===e);t>=0&&T(t)};return(0,t.jsxs)(k,{"data-testid":r,"data-count":p.length,children:[(0,t.jsx)(j,{children:A}),c?(0,t.jsx)(g.f,{}):u?(0,t.jsx)(N,{"data-testid":`${r}-error`,children:o("relatedFiles.loadError",{defaultValue:"Fehler beim Laden der Dateien."})}):0===p.length?(0,t.jsx)(N,{"data-testid":`${r}-empty`,children:o("relatedFiles.empty",{defaultValue:"Keine Anhänge vorhanden."})}):(0,t.jsx)(I,{children:p.map((e,i)=>{let n=f[i],a=(0,$.q)(e.fileExtension),d=o("relatedFiles.previewLabel",{defaultValue:"Vorschau von {{title}} öffnen",title:e.title});return(0,t.jsxs)(_,{"data-testid":`${r}-item-${e.id}`,"data-kind":a??"none",children:[(0,t.jsx)(h.f,{name:n.name,extension:e.fileExtension,kind:a,imageUrl:n.previewUrl,onClick:()=>S(e.id),ariaLabel:d,dataTestId:`${r}-thumb-${e.id}`}),(0,t.jsxs)(E,{children:[(0,t.jsx)(L,{title:n.name,children:n.name}),(0,t.jsxs)(M,{children:[s.fileSize(e.contentSize)," • ",s.date(e.lastModifiedDate)]})]}),(0,t.jsxs)(V,{children:[a&&(0,t.jsx)(F,{type:"button",onClick:()=>S(e.id),"aria-label":d,title:o("relatedFiles.preview",{defaultValue:"Vorschau"}),"data-testid":`${r}-preview-${e.id}`,children:(0,t.jsx)(l.f,{})}),(0,t.jsx)(D,{href:e.downloadUrl,"aria-label":o("relatedFiles.downloadLabel",{defaultValue:"{{title}} herunterladen",title:e.title}),title:o("relatedFiles.download",{defaultValue:"Herunterladen"}),"data-testid":`${r}-download-${e.id}`,children:(0,t.jsx)(m.f,{})})]})]},e.id)})}),null!==C&&f.length>0&&(0,t.jsx)(y.f,{items:f,index:C,onIndexChange:T,onClose:()=>T(null),layer:a,dataTestId:`${r}-viewer`})]})};var S=e.i(620959),S=S,U=e.i(49486),R=e.i(293655),P=e.i(145896),z=e.i(134118),H=e.i(118410);let B=C.U.button.withConfig({displayName:"EntityDocumentMenu.styles__MenuButton",componentId:"sc-e454bc5d-0"})`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 14px;
  border: 1px solid ${H.h.GREY_LIGHT};
  border-radius: 6px;
  background: ${H.h.WHITE};
  color: ${H.h.BLACK};
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.15s;

  &:hover {
    background: ${H.h.GREY_LIGHT};
    border-color: ${H.h.GREY};
  }

  svg {
    width: 16px;
    height: 16px;
  }
`,O=C.U.div.withConfig({displayName:"EntityDocumentMenu.styles__ModalContent",componentId:"sc-e454bc5d-1"})`
  background: ${H.h.WHITE};
  border-radius: 12px;
  padding: 24px;
  width: 460px;
  max-width: calc(100vw - 32px);
  max-height: calc(100vh - 64px);
  overflow-y: auto;
`,G=C.U.div.withConfig({displayName:"EntityDocumentMenu.styles__DocRow",componentId:"sc-e454bc5d-2"})`
  display: flex;
  align-items: center;
  /* #1651: mit den Vorschau-Knöpfen passen DE+EN nicht immer in eine Zeile */
  flex-wrap: wrap;
  gap: 8px;
  padding: 8px 10px;
  border-radius: 6px;
  transition: background 0.15s;

  &:hover {
    background: ${H.h.GREY_LIGHT};
  }
`,K=C.U.div.withConfig({displayName:"EntityDocumentMenu.styles__DocInfo",componentId:"sc-e454bc5d-3"})`
  flex: 1 1 140px;
  min-width: 0;
`,Y=C.U.div.withConfig({displayName:"EntityDocumentMenu.styles__DocLabel",componentId:"sc-e454bc5d-4"})`
  font-size: 13px;
  font-weight: 500;
  color: ${H.h.BLACK};
`,W=C.U.span.withConfig({displayName:"EntityDocumentMenu.styles__DocRecipient",componentId:"sc-e454bc5d-5"})`
  font-size: 11px;
  color: ${H.h.GREY_DARK};
  margin-left: 6px;
`,q=C.U.button.withConfig({displayName:"EntityDocumentMenu.styles__LangButton",componentId:"sc-e454bc5d-6"})`
  padding: 4px 10px;
  border: 1px solid ${H.h.GREY_LIGHT};
  border-radius: 4px;
  background: ${H.h.WHITE};
  font-size: 11px;
  font-weight: 600;
  color: ${H.h.PRIMARY};
  cursor: ${({$loading:e})=>e?"wait":"pointer"};
  opacity: ${({$loading:e})=>e?.6:1};
  transition: all 0.15s;
  min-width: 36px;
  text-align: center;

  /* #1651: Auge der Vorschau-Knöpfe */
  svg {
    width: 12px;
    height: 12px;
    vertical-align: middle;
  }

  &:hover:not(:disabled) {
    background: ${H.h.PRIMARY};
    color: ${H.h.WHITE};
    border-color: ${H.h.PRIMARY};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.4;
  }
`,J=C.U.hr.withConfig({displayName:"EntityDocumentMenu.styles__Divider",componentId:"sc-e454bc5d-7"})`
  border: none;
  border-top: 1px solid ${H.h.GREY_LIGHT};
  margin: 8px 0;
`,Q=C.U.div.withConfig({displayName:"EntityDocumentMenu.styles__DesignToggle",componentId:"sc-e454bc5d-8"})`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 10px;
`,Z=C.U.span.withConfig({displayName:"EntityDocumentMenu.styles__DesignToggleLabel",componentId:"sc-e454bc5d-9"})`
  font-size: 11px;
  font-weight: 600;
  color: ${H.h.GREY_DARK};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-right: 4px;
`,X=C.U.button.withConfig({displayName:"EntityDocumentMenu.styles__DesignToggleButton",componentId:"sc-e454bc5d-10"})`
  padding: 4px 12px;
  border: 1px solid ${H.h.GREY_LIGHT};
  border-radius: 999px;
  background: ${H.h.WHITE};
  color: ${H.h.BLACK};
  font-size: 11px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.15s;

  &:hover {
    border-color: ${H.h.PRIMARY};
  }

  &[data-active='true'] {
    background: ${H.h.PRIMARY};
    border-color: ${H.h.PRIMARY};
    color: ${H.h.WHITE};
  }
`,ee=C.U.button.withConfig({displayName:"EntityDocumentMenu.styles__CueBadge",componentId:"sc-e454bc5d-11"})`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  margin-left: 8px;
  padding: 1px 8px;
  border-radius: 999px;
  font-size: 10px;
  font-weight: 600;
  cursor: ${({$complete:e})=>e?"default":"pointer"};
  border: 1px solid ${({theme:e,$complete:t})=>t?e.palette.status.success.border:e.palette.status.warning.border};
  background: ${({theme:e,$complete:t})=>t?e.palette.status.success.bg:e.palette.status.warning.bg};
  color: ${({theme:e,$complete:t})=>t?e.palette.status.success.text:e.palette.status.warning.text};
`,et=C.U.button.withConfig({displayName:"EntityDocumentMenu.styles__CueFieldButton",componentId:"sc-e454bc5d-12"})`
  border: none;
  background: transparent;
  padding: 0;
  margin-right: 6px;
  font: inherit;
  cursor: pointer;
  color: inherit;
  text-decoration: underline dotted;

  &:hover {
    text-decoration: underline;
  }
`,ei=C.U.ul.withConfig({displayName:"EntityDocumentMenu.styles__MissingList",componentId:"sc-e454bc5d-13"})`
  margin: 4px 0 8px;
  padding: 6px 10px 6px 26px;
  border-radius: 6px;
  background: ${({theme:e})=>e.palette.status.warning.bg};
  font-size: 11px;
  color: ${({theme:e})=>e.palette.status.warning.text};

  li {
    margin: 2px 0;
  }

  li strong {
    white-space: nowrap;
  }
`;var en=e.i(887880),ea=e.i(821175),el=e.i(223972);e.s(["f",0,({entityType:e,entityId:m,entityName:h,record:g,variant:x="button",dataTestId:b="entity-documents-btn"})=>{let{data:w}=(0,n.useSession)(),$=(0,P.V)(),{tr:C,i18n:k}=(0,v.f)(),j=(k?.language??"de").startsWith("de"),[I,_]=(0,i.useState)(!1),[E,L]=(0,i.useState)(null),[M,V]=(0,i.useState)(null),[T,F]=(0,i.useState)(null),[D,N]=(0,i.useState)("minimal"),{quickOpen:H}=(0,en.f)(),[er,eo]=(0,i.useState)(null),es=(0,i.useRef)(new Map),ed=(0,z.J)(e),ec=(0,i.useMemo)(()=>h??(ed?(0,z.l)(ed,g,m):null)??(0,R.L)(e),[h,ed,g,m,e]),eu=(0,i.useCallback)((e,t)=>{let i=`${ed.pdfBasePath}/${m}/pdf?type=${e}&lang=${t}`;return"minimal"===D?`${i}&design=minimal`:i},[ed,m,D]),ep=(0,i.useCallback)((e,t)=>{let i=eu(e,t),n=es.current.get(i);if(n)return n;let a=(0,U.f)(i);return es.current.set(i,a),a.catch(()=>es.current.delete(i)),a},[eu]),ef=(0,i.useCallback)(async(e,t)=>{let i=`${e}-${t}`;if(!E){L(i);try{let{blob:i,filename:n}=await (0,c.j)(eu(e,t),`${e}.pdf`);(0,u.f)(i,n),p.c.success(C("documents.menu.pdfCreated",{defaultValue:"PDF erstellt: {{type}}",type:e}))}catch(e){console.error("[EntityDocumentMenu] Download error:",e),p.c.error(C("documents.menu.downloadFailed",{defaultValue:"PDF-Download fehlgeschlagen"}))}finally{L(null)}}},[m,E,eu,C]),em=(0,i.useCallback)(async(e,t)=>{let i=`${e}-${t}-sf`;if(!E){L(i);try{let{data:i}=await c.k.get(`${eu(e,t)}&save=sf`);i.success?p.c.success(C("documents.menu.savedToSf",{defaultValue:"In Salesforce gespeichert: {{title}}",title:i.title??e})):p.c.error(C("documents.menu.saveFailed",{defaultValue:"Speichern fehlgeschlagen: {{error}}",error:i.error?(0,ea.f)(C,i.error):"unknown"}))}catch(e){console.error("[EntityDocumentMenu] SF save error:",e),p.c.error(C("documents.menu.saveToSfFailed",{defaultValue:"Speichern in Salesforce fehlgeschlagen"}))}finally{L(null)}}},[E,eu,C]),eh=(0,i.useCallback)((e,t)=>{let i=g?e.recipientFields.map(e=>e.split(".").reduce((e,t)=>e&&"object"==typeof e?e[t]:void 0,g)).filter(e=>"string"==typeof e&&e.includes("@")):[];V({doc:e,lang:t,recipients:i}),_(!1)},[g]),eg=(0,i.useCallback)(async(e,t)=>{let i=es.current.get(eu(e.type,t)),n=i?await i.catch(()=>void 0):void 0;eo(null),eh(e,t),n&&V(e=>e?{...e,preview:n}:e)},[eh,eu]),ey=(0,i.useCallback)(async(e,t)=>{let i=es.current.get(eu(e,t)),n=i?await i.catch(()=>void 0):void 0;n?(0,u.f)(n.blob,n.filename??`${e}.pdf`):await ef(e,t)},[ef,eu]),ex=(0,i.useMemo)(()=>{if(!M)return null;let{doc:t,lang:i,recipients:n}=M,a=(0,el.l)(i),l=a?t.labelDe:t.labelEn,r=`${l}: ${ec}`,o=a?`Sehr geehrte Damen und Herren,

anbei senden wir Ihnen: ${l} zu ${ec}.

Mit freundlichen Gr\xfc\xdfen`:`Dear partner,

please find attached the ${l} for ${ec}.

Kind regards`;return{entityType:l,entityId:m,entityName:ec,pdfApiPath:eu(t.type,i),defaultFilename:M.preview?.filename??`${t.type}-${ec}.pdf`,previewToken:M.preview?.token??void 0,previewBlob:M.preview?.blob,defaultRecipients:n,defaultSubject:r,defaultBody:o,templateEntityType:e}},[M,m,e,ec,eu]),eb=(0,i.useMemo)(()=>er&&ed?ed.types.filter(e=>(0,el.V)(e,er.lang)):[],[er,ed]),ew=(0,i.useMemo)(()=>eb.map(e=>{let t=er?.lang??el.b;return{id:`${e.type}-${(0,el.O)(t)}`,name:`${j?e.labelDe:e.labelEn} (${(0,el.O)(t).toUpperCase()})`,kind:"pdf",loadData:()=>ep(e.type,t).then(e=>e.blob),onDownload:()=>void ey(e.type,t)}}),[eb,er,j,ep,ey]);if(w?.user?.role!==void 0&&!(0,z.A)(e,w.user.role)||!ed||0===ed.types.length)return null;let ev=!!w?.user?.role&&(0,z.e)(e,w.user.role),e$=C("documents.menu.title",{defaultValue:"Dokumente"}),eC=C("documents.menu.headline",{defaultValue:"Dokumente: {{name}}",name:ec});return(0,t.jsxs)(t.Fragment,{children:["icon"===x?(0,t.jsx)(r._,{onClick:()=>_(!0),icon:(0,t.jsx)(a.f,{}),tooltip:e$,ariaLabel:e$,color:o.f.INFO,dataTestId:b}):(0,t.jsxs)(B,{type:"button",onClick:()=>_(!0),"data-testid":b,children:[(0,t.jsx)(a.f,{}),e$]}),(0,t.jsx)(s.f,{isOpen:I,onClose:()=>_(!1),variant:"bare",ariaLabel:eC,dataTestId:"entity-documents-overlay",children:(0,t.jsxs)(O,{children:[(0,t.jsx)(d.K,{importance:d.D.h3,children:eC}),(0,t.jsxs)(Q,{"data-testid":"doc-design-toggle",children:[(0,t.jsx)(Z,{children:C("documents.menu.design",{defaultValue:"Design"})}),(0,t.jsx)(X,{type:"button","data-active":"current"===D,onClick:()=>N("current"),"data-testid":"doc-design-current",children:C("documents.menu.designStandard",{defaultValue:"Standard"})}),(0,t.jsx)(X,{type:"button","data-active":"minimal"===D,onClick:()=>N("minimal"),"data-testid":"doc-design-minimal",children:C("documents.menu.designMinimal",{defaultValue:"Minimal"})})]}),(0,t.jsx)(J,{}),ed.types.map(n=>{let a=(0,z.W)(n,g),r=(0,z.j)(n,g,({position:e,ident:t,fields:i})=>C("documents.menu.rowMissing",{defaultValue:"Position {{position}}{{ident}}: {{fields}} fehlt",position:e,ident:t,fields:i.map(e=>$.text(e)).join(", ")})),o=r?r.emptyList?1:r.rowMessages.length:0,s=a.length+o,d=ev&&((n.contentFields?.length??0)>0||!!n.rowsSource),c=n.supportsMail&&(ev||0===n.recipientFields.length),u=$.text(n.recipient),f=n.rowsSource?$.text(n.rowsSource.label):"";return(0,t.jsxs)(i.default.Fragment,{children:[(0,t.jsxs)(G,{"data-testid":`doc-row-${n.type}`,children:[(0,t.jsx)(K,{children:(0,t.jsxs)(Y,{children:[j?n.labelDe:n.labelEn,(0,t.jsx)(W,{children:u}),d&&(0,t.jsx)(ee,{type:"button",$complete:0===s,onClick:()=>s>0&&F(T===n.type?null:n.type),title:0===s?C("documents.menu.allFieldsFilled",{defaultValue:"Alle Inhaltsfelder befüllt"}):C("documents.menu.showMissingFields",{defaultValue:"Fehlende Felder anzeigen"}),"data-testid":`doc-cue-${n.type}`,children:0===s?C("documents.menu.complete",{defaultValue:"✓ vollständig"}):C("documents.menu.issues",{defaultValue:"⚠ {{count}} Hinweise",count:s})})]})}),el.F.filter(e=>(0,el.V)(n,e)).map(e=>{let a=(0,el.O)(e),r=a.toUpperCase(),o=(0,el.T)(e),s=`${n.type}-${e}`,d=`${s}-sf`;return(0,t.jsxs)(i.default.Fragment,{children:[(0,t.jsx)(q,{onClick:()=>{var t;let i;return t=n.type,void((i=ed.types.filter(t=>(0,el.V)(t,e)).findIndex(e=>e.type===t))>=0&&eo({lang:e,index:i}))},disabled:!!E,"data-testid":`doc-${n.type}-${a}-preview`,title:C("documents.menu.previewIn",{defaultValue:"Vorschau ({{language}})",language:o}),"aria-label":C("documents.menu.previewIn",{defaultValue:"Vorschau ({{language}})",language:o}),children:(0,t.jsx)(l.f,{})}),(0,t.jsx)(q,{$loading:E===s,onClick:()=>ef(n.type,e),disabled:!!E,"data-testid":`doc-${n.type}-${a}`,title:C("documents.menu.downloadIn",{defaultValue:"Download PDF ({{language}})",language:o}),children:E===s?"...":r}),(0,t.jsx)(q,{$loading:E===d,onClick:()=>em(n.type,e),disabled:!!E,"data-testid":`doc-${n.type}-${a}-sf`,title:C("documents.menu.saveToSfIn",{defaultValue:"In Salesforce speichern ({{language}})",language:o}),children:E===d?"...":`☁ ${r}`}),c&&(0,t.jsxs)(q,{onClick:()=>eh(n,e),disabled:!!E,"data-testid":`doc-${n.type}-${a}-mail`,title:C("documents.menu.mailIn",{defaultValue:"Per E-Mail senden ({{language}}) → {{recipient}}",language:o,recipient:u}),children:["✉ ",r]})]},e)})]}),T===n.type&&s>0&&(0,t.jsxs)(ei,{"data-testid":`doc-cue-${n.type}-list`,children:[r?.emptyList&&n.rowsSource&&(0,t.jsxs)("li",{"data-testid":`doc-cue-${n.type}-no-rows`,children:[(0,t.jsxs)("strong",{children:[f,":"]})," ",C("documents.menu.noRows",{defaultValue:"keine Einträge verknüpft — das Dokument hätte keine Positionen"})]}),r?.rowMessages.map(e=>(0,t.jsxs)("li",{children:[(0,t.jsxs)("strong",{children:[f,":"]})," ",e]},e)),(0,z.t)(e,a,$.text).map(e=>(0,t.jsxs)("li",{children:[(0,t.jsxs)("strong",{children:[e.objectLabel,":"]})," ",e.items.map(e=>(0,t.jsx)(et,{type:"button",onClick:()=>(e=>{let t=e.split("."),i=t[t.length-1];if(1===t.length){H(m,g??{},i),_(!1);return}let n=t[0],a=n.endsWith("__r")?n.replace(/__r$/,"__c"):`${n}Id`,l=g?.[a];"string"==typeof l&&l?(H(l,g?.[n]??{},2===t.length?i:void 0),_(!1)):p.c.error(C("documents.menu.emptyLookup",{defaultValue:"Verknüpfung ist leer — bitte zuerst das Lookup-Feld füllen"}))})(e.path),"data-testid":`doc-cue-jump-${n.type}-${e.path.replace(/\./g,"-")}`,children:e.label},e.path))]},e.objectLabel))]})]},n.type)}),I&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(J,{}),(0,t.jsx)(A,{recordId:m,viewerLayer:"dialog",dataTestId:"doc-attachments"})]})]})}),er&&ew.length>0&&(0,t.jsx)(y.f,{items:ew,index:er.index,onIndexChange:e=>eo(t=>t?{...t,index:e}:t),onClose:()=>eo(null),layer:"dialog",renderActions:e=>{let i=eb.find(t=>er&&`${t.type}-${(0,el.O)(er.lang)}`===e.id);if(!i||!er)return null;let n=i.supportsMail&&(ev||0===i.recipientFields.length),a=C("documents.menu.saveToSfShort",{defaultValue:"In Salesforce ablegen"}),l=C("documents.menu.mailShort",{defaultValue:"Per E-Mail senden"});return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(S.O,{type:"button",onClick:()=>em(i.type,er.lang),disabled:!!E,"aria-label":a,title:a,"data-testid":"doc-viewer-save-sf",children:"☁"}),n&&(0,t.jsx)(S.O,{type:"button",onClick:()=>void eg(i,er.lang),"aria-label":l,title:l,"data-testid":"doc-viewer-mail",children:"✉"})]})},dataTestId:"doc-viewer"}),ex&&(0,t.jsx)(f.f,{isOpen:!!M,onClose:()=>V(null),...ex})]})}],807751)},622379,818250,e=>{var t=e.i(843476),i=e.i(271645),n=e.i(49958),a=e.i(372480);e.i(805885);var l=e.i(535004),r=e.i(840637);e.i(821194);var o=e.i(99222),s=e.i(328174);e.i(721007);var d=e.i(252456),c=e.i(997053);let u=c.U.button.withConfig({displayName:"MailTemplateAction.styles__TriggerButton",componentId:"sc-5a6981cd-0"})`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 14px;
  border: 1px solid ${({theme:e})=>e.palette.border.default};
  border-radius: 6px;
  background: ${({theme:e})=>e.palette.default.white};
  color: ${({theme:e})=>e.palette.text.primary};
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.15s;

  &:hover {
    background: ${({theme:e})=>e.palette.surface.subtle};
  }

  svg {
    width: 16px;
    height: 16px;
  }
`,p=new Set(["user","rigk"]),f=({entityType:e,entityId:c,record:f,entityName:m,variant:h="button",dataTestId:g="mail-template-btn"})=>{let{tr:y}=(0,o.f)(),{data:x}=(0,n.useSession)(),[b,w]=(0,i.useState)(!1),v=x?.user?.role!==void 0&&p.has(x.user.role),$=(0,s.Y)(e);if(v||!f||0===$.length)return null;let C=y("mailTemplates.modalTitle",{defaultValue:"Mail-Vorlagen"}),k=m||"string"==typeof f.Name&&f.Name||"string"==typeof f.OrderNumber&&f.OrderNumber||c;return(0,t.jsxs)(t.Fragment,{children:["icon"===h?(0,t.jsx)(l._,{onClick:()=>w(!0),icon:(0,t.jsx)(a.f,{}),tooltip:C,ariaLabel:C,color:r.f.INFO,dataTestId:g}):(0,t.jsxs)(u,{type:"button",onClick:()=>w(!0),"data-testid":g,children:[(0,t.jsx)(a.f,{}),C]}),(0,t.jsx)(d.f,{isOpen:b,onClose:()=>w(!1),entityType:e,templateEntityType:e,entityId:c,entityName:k,initialTemplateId:$[0].id})]})};var m=e.i(807751),h=e.i(464862);let g=c.U.svg.withConfig({displayName:"IconFileCopies.styles__Root",componentId:"sc-1e85f106-0"})``,y=e=>(0,t.jsxs)(g,{className:e.className,"data-testid":"icon-file-copies-root",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,t.jsx)("path",{d:"M10.5 8H19.5C20.3284 8 21 8.67157 21 9.5V20.5C21 21.3284 20.3284 22 19.5 22H10.5C9.67157 22 9 21.3284 9 20.5V9.5C9 8.67157 9.67157 8 10.5 8Z",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"square",strokeLinejoin:"miter",strokeMiterlimit:"10"}),(0,t.jsx)("path",{d:"M15 4V3.5C15 2.67157 14.3284 2 13.5 2L4.5 2C3.67157 2 3 2.67157 3 3.5L3 14.5C3 15.3284 3.67157 16 4.5 16H5",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"square",strokeLinejoin:"miter",strokeMiterlimit:"10"})]});e.i(339806);var x=e.i(946049),b=e.i(929842),w=e.i(145896),v=e.i(894113),$=e.i(24024),C=e.i(626331),k=e.i(882109),j=e.i(408797),I=e.i(787766),_=e.i(223963),E=e.i(216579),L=e.i(501496),M=e.i(218595),V=e.i(912598),T=e.i(844771),F=e.i(393194),D=e.i(251604),N=e.i(730235),A=e.i(118410);let S=c.U.div.withConfig({displayName:"CreateEntityMenu.styles__MenuContent",componentId:"sc-f96dc3d0-0"})`
  background: ${A.h.WHITE};
  border-radius: 12px;
  padding: 24px;
  width: 380px;
  max-width: calc(100vw - 32px);
  max-height: calc(100vh - 64px);
  overflow-y: auto;
`,U=c.U.button.withConfig({displayName:"CreateEntityMenu.styles__MenuItem",componentId:"sc-f96dc3d0-1"})`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  box-sizing: border-box;
  padding: 10px 12px;
  border: none;
  border-radius: 6px;
  background: transparent;
  color: ${A.h.BLACK};
  font-size: 13px;
  font-weight: 500;
  text-align: left;
  cursor: pointer;
  transition: background 0.15s;

  &:hover:not(:disabled) {
    background: ${A.h.GREY_LIGHT};
  }

  &:disabled {
    cursor: wait;
    opacity: 0.5;
  }

  svg {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
  }
`,R=c.U.hr.withConfig({displayName:"CreateEntityMenu.styles__MenuDivider",componentId:"sc-f96dc3d0-2"})`
  border: none;
  border-top: 1px solid ${A.h.GREY_LIGHT};
  margin: 8px 0;
`,P=c.U.div.withConfig({displayName:"CreateEntityMenu.styles__BatchRow",componentId:"sc-f96dc3d0-3"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  box-sizing: border-box;
  width: 100%;
  padding: 4px 12px 8px;
`,z=c.U.div.withConfig({displayName:"CreateEntityMenu.styles__BatchActions",componentId:"sc-f96dc3d0-4"})`
  display: flex;
  justify-content: flex-end;
`,H=c.U.button.withConfig({displayName:"CreateEntityMenu.styles__BatchConfirmButton",componentId:"sc-f96dc3d0-5"})`
  padding: 8px 14px;
  border: none;
  border-radius: 6px;
  background: ${A.h.BLACK};
  color: ${A.h.WHITE};
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`,B=new Set(["user","rigk"]),O=({entityType:e,entityId:n,record:a,showCreateNew:s=!0,dataTestId:d})=>{let{tr:c}=(0,o.f)(),u=(0,w.V)(),{userContext:p}=(0,$.f)(),{openCreateModal:f}=(0,v.E)(),m=(0,V.d)(),[g,A]=(0,i.useState)(!1),[O,G]=(0,i.useState)(null),[K,Y]=(0,i.useState)(null),[W,q]=(0,i.useState)(0),J=I.y[e]??e,Q=u.text(_.p[J]??J),Z=(0,T.K)(e),X=p?.role,ee=!X||B.has(X),et=!!(n&&a),ei=(0,i.useMemo)(()=>{let e=[];if(s&&p&&(0,_.s)(J)){let i=(0,j.f)(J);(!i||(0,k.A)(p,i,"create"))&&e.push({key:"new",group:"new",label:`${c("createFrom.new",{defaultValue:"Neu anlegen"})}: ${Q}`,icon:(0,t.jsx)(h.f,{}),targetEntityType:J})}if(Z&&et&&!ee)for(let i of(Z.duplicate&&(0,_.s)(Z.sourceEntityType)&&(0,C.f)(p,Z.sourceEntityType)&&e.push({key:"duplicate",group:"duplicate",label:c("createFrom.duplicate",{defaultValue:"Duplizieren"}),icon:(0,t.jsx)(y,{}),targetEntityType:Z.sourceEntityType,buildValues:e=>(0,T.J)(Z,e),needsAllRelated:!!Z.duplicate.relatedObjectsSeed?.fromRelationship}),Z.targets))(0,_.s)(i.targetEntityType)&&(0,C.f)(p,i.targetEntityType)&&e.push({key:i.id,group:"target",label:u.text(i.label),icon:(0,E.H)(i.targetEntityType),targetEntityType:i.targetEntityType,buildValues:e=>(0,T._)(i,e),writeBack:i.writeBack,warnUnless:i.warnUnless,needsAllRelated:!!i.relatedObjectsSeed?.fromRelationship});return e},[s,J,Q,p,Z,et,ee,c,u]),en=!!(Z?.duplicate?.batch&&et&&!ee&&(0,_.s)(Z.sourceEntityType));if(0===ei.length)return null;let ea=async e=>{if(!O){if(!e.buildValues){f({entityType:e.targetEntityType}),A(!1);return}if(Z&&n){G(e.key);try{let t=e.needsAllRelated?"?relatedListLimit=200&relatedListOrderBy=CreatedDate%20ASC":"",i=await L.k.get(`/salesforce/${Z.entityPath}/${n}/${t}`),a=i.data?.data;if(!a)throw Error("empty record response");let l=e.warnUnless;l&&a[l.field]!==l.value&&M.c.warning(u.text(l.message)),f({entityType:e.targetEntityType,initialValues:e.buildValues(a),title:e.label,onSuccess:e.writeBack?t=>{L.k.patch(`/salesforce/${Z.entityPath}/${n}/`,{[e.writeBack.sourceField]:t}).then(()=>M.c.success(c("createFrom.sourceLinked",{defaultValue:"Quelldatensatz verknüpft"}))).catch(e=>{console.error("[CreateEntityMenu] write-back failed:",e),M.c.error(c("createFrom.sourceLinkFailed",{defaultValue:"Angelegt, aber die Verknüpfung am Quelldatensatz ist fehlgeschlagen"}))})}:void 0}),A(!1)}catch(e){console.error("[CreateEntityMenu] source fetch failed:",e),M.c.error(c("createFrom.loadFailed",{defaultValue:"Datensatz konnte nicht geladen werden"}))}finally{G(null)}}}},el=async e=>{if(!O&&Z?.duplicate&&n){G("duplicate-batch"),q(0);try{let t=Z.duplicate.relatedObjectsSeed?.fromRelationship?"?relatedListLimit=200&relatedListOrderBy=CreatedDate%20ASC":"",i=await L.k.get(`/salesforce/${Z.entityPath}/${n}/${t}`),a=i.data?.data;if(!a)throw Error("empty record response");let{_relatedObjects:l,...r}=(0,T.J)(Z,a,{batch:!0}),o=D.G[Z.sourceEntityType]??Z.entityPath,s=(0,F.f)(Z.sourceEntityType)?.relatedObjects??[],d=0;try{for(let t=0;t<e;t++){let e=await L.k.post(`/salesforce/${o}/`,r),t=e.data?.id;if(!t)throw Error("create returned no id");for(let[e,i]of Object.entries(l??{})){let n=s.find(t=>t.entityType===e);if(!n)continue;let a=D.G[e]??e.toLowerCase();for(let e of i){let i=Object.fromEntries(Object.entries(e).filter(([e])=>!e.startsWith("_")));await L.k.post(`/salesforce/${a}/`,{...i,[n.parentField]:t})}}d++,q(d)}M.c.success(c("createFrom.copiesCreated",{defaultValue:"{{count}} Kopien angelegt",count:d})),Y(null),A(!1)}catch(t){console.error("[CreateEntityMenu] batch create failed:",t),M.c.error(c("createFrom.copiesAborted",{defaultValue:"Abbruch: {{created}} von {{total}} Kopien angelegt",created:d,total:e}))}d>0&&m.invalidateQueries()}catch(e){console.error("[CreateEntityMenu] source fetch failed:",e),M.c.error(c("createFrom.loadFailed",{defaultValue:"Datensatz konnte nicht geladen werden"}))}finally{G(null),q(0)}}},er=c("createFrom.menuTitle",{defaultValue:"Anlegen"}),eo=1===ei.length?ei[0]:null,es=eo?eo.label:er,ed=d??`create-${J.toLowerCase()}-btn`,ec=c("createFrom.duplicateMultiple",{defaultValue:"Mehrfach duplizieren …"});return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l._,{onClick:()=>{eo&&!en?ea(eo):A(!0)},icon:(0,t.jsx)(h.f,{}),tooltip:es,ariaLabel:es,color:r.f.PLUS,dataTestId:ed}),(0,t.jsx)(x.f,{isOpen:g,onClose:()=>A(!1),variant:"bare",ariaLabel:er,dataTestId:"create-from-overlay",children:(0,t.jsxs)(S,{children:[(0,t.jsx)(b.K,{importance:b.D.h3,children:er}),(0,t.jsx)(R,{}),ei.map((e,n)=>{let a=ei[n-1],l=void 0!==a&&a.group!==e.group;return(0,t.jsxs)(i.default.Fragment,{children:[l&&(0,t.jsx)(R,{}),(0,t.jsxs)(U,{type:"button",onClick:()=>void ea(e),disabled:!!O,"data-testid":`create-from-item-${e.key}`,"data-group":e.group,children:[e.icon,O===e.key?c("createFrom.loading",{defaultValue:"Lade Datensatz …"}):e.label]})]},e.key)}),en&&(0,t.jsxs)(U,{type:"button",onClick:()=>Y(e=>null===e?5:null),disabled:!!O,"data-testid":"create-from-item-duplicate-batch","data-group":"duplicate",children:[(0,t.jsx)(y,{}),ec]}),en&&null!==K&&(0,t.jsxs)(P,{children:[(0,t.jsx)(N.f,{fieldName:"batchCount",label:c("createFrom.copyCount",{defaultValue:"Anzahl Kopien"}),fieldType:"number",value:K,isEditing:!0,hideEditActions:!0,onChange:(e,t)=>{let i=Number(t);Y(Number.isFinite(i)?Math.floor(i):0)},dataTestId:"create-from-batch-count"}),(0,t.jsx)(z,{children:(0,t.jsx)(H,{type:"button",onClick:()=>void el(K),disabled:!!O||K<1||K>25,"data-testid":"create-from-batch-confirm",children:"duplicate-batch"===O?c("createFrom.copiesProgress",{defaultValue:"Lege an … {{done}}/{{total}}",done:W,total:K}):c("createFrom.createCopies",{defaultValue:"{{count}} Kopien anlegen",count:K})})})]})]})})]})};var G=e.i(759684);e.s(["f",0,({entityType:e,entityId:i,record:n,entityName:a,showCreate:l,testIdPrefix:r="",children:o})=>{let s=I.y[e]??e,d=I.F[s]??e,c=l??G.E[s]?.hasCreate??!1;return(0,t.jsxs)(t.Fragment,{children:[o,i&&(0,t.jsx)(f,{entityType:d,entityId:i,entityName:a,record:n,variant:"icon",dataTestId:`${r}mail-template-btn`}),i&&(0,t.jsx)(m.f,{entityType:d,entityId:i,entityName:a,record:n,variant:"icon",dataTestId:`${r}entity-documents-btn`}),(0,t.jsx)(O,{entityType:s,entityId:i,record:n,showCreateNew:c,dataTestId:`${r}create-${s.toLowerCase()}-btn`})]})}],818250),e.s([],622379)}])})();