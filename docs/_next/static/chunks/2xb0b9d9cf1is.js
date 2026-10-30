(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,623226,31257,e=>{var t=e.i(843476),a=e.i(271645),i=e.i(997053);let l=i.U.button.withConfig({displayName:"CreateEntityButton.styles__Root",componentId:"sc-4d2da934-0"})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: none;
  cursor: pointer;
  padding: 0;
  border-radius: 50%;
  transition: all 0.15s ease-in-out;

  width: ${e=>"small"===e.$size?"24px":"32px"};
  height: ${e=>"small"===e.$size?"24px":"32px"};

  color: ${e=>e.theme.palette.default.grey||"#666"};

  &:hover {
    background-color: ${e=>e.theme.palette.default.secondary||"#37BA24"};
    color: ${e=>e.theme.palette.default.white||"#fff"};

    svg path,
    svg line,
    svg circle {
      stroke: ${e=>e.theme.palette.default.white||"#fff"};
    }
  }

  &:focus {
    outline: 2px solid ${e=>e.theme.palette.default.primary||"#00416E"};
    outline-offset: 2px;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  svg {
    width: ${e=>"small"===e.$size?"16px":"20px"};
    height: ${e=>"small"===e.$size?"16px":"20px"};
  }
`,r=i.U.div.withConfig({displayName:"CreateEntityButton.styles__TooltipWrapper",componentId:"sc-4d2da934-1"})`
  position: relative;
  display: inline-flex;
`;var n=e.i(464862);e.i(849871);var s=e.i(352706),o=e.i(894113),d=e.i(223963);e.i(821194);var c=e.i(99222),u=e.i(145896);e.s(["f",0,({entityType:e,parentEntityId:i,parentEntityType:p,tooltip:f,onSuccess:m,size:y="small",initialValues:g,disabled:h=!1,dataTestId:b="create-entity-button",className:_})=>{let{openCreateModal:x}=(0,o.E)(),{tr:k}=(0,c.f)(),w=(0,u.V)(),[$,v]=(0,a.useState)(!1),C=w.text(d.p[e]||e),I=f||k("relatedLists.createTooltip",{defaultValue:"Create {{label}}",label:C});return(0,d.s)(e)?(0,t.jsxs)(r,{onMouseEnter:()=>v(!0),onMouseLeave:()=>v(!1),children:[(0,t.jsx)(l,{type:"button",onClick:()=>{h||x({entityType:e,parentEntityId:i,parentEntityType:p,initialValues:g,onSuccess:m})},disabled:h,$size:y,className:_,"data-testid":b,"aria-label":I,children:(0,t.jsx)(n.f,{})}),(0,t.jsx)(s.f,{content:I,isVisible:$&&!h,position:"bottom"})]}):null}],31257),e.s([],623226)},340133,586915,252869,e=>{var t=e.i(843476),a=e.i(271645);e.i(418124);var i=e.i(259808),l=e.i(430055);let r=/(^|_)(Status|Bedarfsstatus|Verh_ltnis|StageName|Phase)/i,n=e=>{let t=e.toLowerCase();return/(approved|abgeschlossen|best[äa]tigt|enger partner|aktiv|received|sent|betrag erhalten|standard template|erfolgreich)/.test(t)?"success":/(rejected|storno|reklamation|abgelehnt|duplicate|4 rot|\brot\b|inaktiv|negativ)/.test(t)?"error":/(on hold|hold|pausiert|0 offen|^offen|draft|entwurf|wiedervorlage|warten)/.test(t)?"warning":/(in preparation|in bearbeitung|aufbau|requested|requirement confirmed|transport|versand|in arbeit|recherch)/.test(t)?"info":"neutral"};e.s(["x",0,n,"Z",0,e=>r.test(e)],586915);var s=e.i(218595),o=e.i(501496);e.i(359788);var d=e.i(653222);e.i(821194);var c=e.i(99222),u=e.i(145896),p=e.i(997053);let f=p.U.div.withConfig({displayName:"QuickStatusField.styles__Root",componentId:"sc-f1d09a91-0"})`
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  min-width: 0;
`,m=p.U.span.withConfig({displayName:"QuickStatusField.styles__ToneDot",componentId:"sc-f1d09a91-1"})`
  flex-shrink: 0;
  width: 0.625rem;
  height: 0.625rem;
  border-radius: 50%;
  background: ${({theme:e,$tone:t})=>e.palette.status[t].text};
  border: 1px solid ${({theme:e,$tone:t})=>e.palette.status[t].border};
`;e.s(["f",0,({entityType:e,value:r,onStatusChange:p,disabled:y,dataTestId:g,className:h})=>{let{tr:b}=(0,c.f)(),_=(0,u.V)(),[x,k]=(0,a.useState)(null),[w,$]=(0,a.useState)(!1);(0,a.useEffect)(()=>{k(null)},[r]);let v=(0,l.Q)(e),C=(0,a.useCallback)(async e=>{if("string"==typeof e&&""!==e&&!w&&e!==(x??r??null)){k(e),$(!0);try{await p(e)}catch(i){k(null);let e=b("quickStatus.updateError",{defaultValue:"Status konnte nicht geändert werden"}),a=(0,o.d)(i,"");s.c.error(a?(0,t.jsx)(d.T,{title:e,message:a}):e,{persistTitleKey:"quickStatus.updateError",persistTitleDefault:e,...a?{persistMessageDefault:a}:{}})}finally{$(!1)}}},[w,x,r,p,b]);if(!v)return null;let I=x??r??"",L=g||`quick-status-${v.field}`,N=_.options(v.columns.map(e=>({value:e.key,label:e.label})));return(0,t.jsxs)(f,{className:h,"data-testid":`${L}-root`,"data-value":String(I),children:[(0,t.jsx)(m,{$tone:n(I),"data-testid":`${L}-tone`,"aria-hidden":"true"}),(0,t.jsx)(i.L,{name:v.field,hideLabel:!0,value:I,fieldType:"picklist",onChange:C,options:N,disabled:y||w,dataTestId:L},String(I))]})}],252869),e.s([],340133)},481940,914602,e=>{var t=e.i(843476),a=e.i(271645),i=e.i(912598),l=e.i(293655),r=e.i(970700),n=e.i(969956),s=e.i(852606);e.i(113466);var o=e.i(295735),d=e.i(245904),c=e.i(586915);e.i(623226);var u=e.i(31257);e.i(454138);var p=e.i(893551),f=e.i(929842);e.i(170123);var m=e.i(730235),y=e.i(787766),g=e.i(409643),h=e.i(251604),b=e.i(354477),_=e.i(882109),x=e.i(501496),k=e.i(218595);e.i(821194);var w=e.i(99222),$=e.i(555508),v=e.i(145896),C=e.i(24024),I=e.i(858350),L=e.i(887880),N=e.i(626331);e.i(315481);var T=e.i(10003),j=e.i(997053);let S=j.U.div.withConfig({displayName:"RelatedListTable.styles__Root",componentId:"sc-4ed05743-0"})`
  padding: 1rem;
  background-color: ${({theme:e})=>e.palette.default.white};
  border-radius: ${({theme:e})=>e.borderRadius.box};
  border: 1px solid ${({theme:e})=>e.palette.border.default};
`,R=j.U.div.withConfig({displayName:"RelatedListTable.styles__Header",componentId:"sc-4ed05743-1"})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid ${({theme:e})=>e.palette.border.default};
`,V=j.U.h4.withConfig({displayName:"RelatedListTable.styles__Title",componentId:"sc-4ed05743-2"})`
  margin: 0;
  font-size: 0.95rem;
  font-weight: 600;
  color: ${({theme:e})=>e.palette.text.primary};
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,M=j.U.span.withConfig({displayName:"RelatedListTable.styles__IconWrapper",componentId:"sc-4ed05743-3"})`
  display: inline-flex;
  align-items: center;
`,U=j.U.div.withConfig({displayName:"RelatedListTable.styles__HeaderRight",componentId:"sc-4ed05743-4"})`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`,E=j.U.span.withConfig({displayName:"RelatedListTable.styles__RecordCount",componentId:"sc-4ed05743-5"})`
  font-size: 0.8rem;
  color: ${({theme:e})=>e.palette.text.muted};
`,P=j.U.div.withConfig({displayName:"RelatedListTable.styles__TableWrapper",componentId:"sc-4ed05743-6"})`
  overflow-x: auto;
`,z=j.U.table.withConfig({displayName:"RelatedListTable.styles__Table",componentId:"sc-4ed05743-7"})`
  width: 100%;
  border-collapse: collapse;
  font-size: 0.85rem;
`,A=j.U.thead.withConfig({displayName:"RelatedListTable.styles__TableHead",componentId:"sc-4ed05743-8"})`
  tr {
    background-color: ${({theme:e})=>e.palette.surface.subtle};
  }
`,D=j.U.th.withConfig({displayName:"RelatedListTable.styles__TableHeadCell",componentId:"sc-4ed05743-9"})`
  padding: 0.4rem 0.75rem;
  text-align: left;
  font-weight: 600;
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: ${({theme:e})=>e.palette.text.muted};
  border-bottom: 1px solid ${({theme:e})=>e.palette.border.strong};
  white-space: nowrap;
`,O=(0,j.U)(D).withConfig({displayName:"RelatedListTable.styles__TableHeadCellActions",componentId:"sc-4ed05743-10"})`
  text-align: right;
  width: 90px;
`,B=j.U.tbody.withConfig({displayName:"RelatedListTable.styles__TableBody",componentId:"sc-4ed05743-11"})``,F=j.U.tr.withConfig({displayName:"RelatedListTable.styles__TableRow",componentId:"sc-4ed05743-12"})`
  border-bottom: 1px solid ${({theme:e})=>e.palette.border.default};
  background-color: ${({theme:e,$even:t})=>t?e.palette.default.white:e.palette.surface.subtle};

  &:hover {
    background-color: ${({theme:e})=>e.palette.surface.muted};
  }

  &:last-child {
    border-bottom: none;
  }
`,H=j.U.td.withConfig({displayName:"RelatedListTable.styles__TableCell",componentId:"sc-4ed05743-13"})`
  padding: 0.45rem 0.75rem;
  color: ${({theme:e})=>e.palette.text.primary};
  vertical-align: middle;
`,K=j.U.td.withConfig({displayName:"RelatedListTable.styles__TableCellActions",componentId:"sc-4ed05743-14"})`
  padding: 0.45rem 0.75rem;
  text-align: right;
  white-space: nowrap;
`,W=(0,j.U)(T.NavLink).withConfig({displayName:"RelatedListTable.styles__CellLink",componentId:"sc-4ed05743-15"})`
  color: ${({theme:e})=>e.palette.default.primary};
  text-decoration: none;
  font-weight: 600;

  &:hover {
    text-decoration: underline;
  }
`,G=j.U.button.withConfig({displayName:"RelatedListTable.styles__CellQuickOpenButton",componentId:"sc-4ed05743-16"})`
  border: none;
  background: transparent;
  padding: 0;
  font: inherit;
  cursor: pointer;
  color: ${({theme:e})=>e.palette.default.primary};
  font-weight: 600;
  text-align: left;

  &:hover {
    text-decoration: underline;
  }
`,q=(0,j.U)(T.NavLink).withConfig({displayName:"RelatedListTable.styles__ViewLink",componentId:"sc-4ed05743-17"})`
  color: ${({theme:e})=>e.palette.text.muted};
  text-decoration: none;
  font-size: 0.8rem;

  &:hover {
    color: ${({theme:e})=>e.palette.default.primary};
  }
`,Z=j.U.span.withConfig({displayName:"RelatedListTable.styles__MutedCell",componentId:"sc-4ed05743-18"})`
  color: ${({theme:e})=>e.palette.text.muted};
`,Q=j.U.span.withConfig({displayName:"RelatedListTable.styles__StatusChip",componentId:"sc-4ed05743-19"})`
  display: inline-flex;
  align-items: center;
  padding: 0.05rem 0.45rem;
  border-radius: 999px;
  font-size: 0.72rem;
  font-weight: 600;
  white-space: nowrap;
  background: ${({theme:e,$tone:t})=>e.palette.status[t].bg};
  color: ${({theme:e,$tone:t})=>e.palette.status[t].text};
  border: 1px solid ${({theme:e,$tone:t})=>e.palette.status[t].border};
`;j.U.div.withConfig({displayName:"RelatedListTable.styles__EmptyState",componentId:"sc-4ed05743-20"})`
  padding: 1.5rem;
  background-color: ${({theme:e})=>e.palette.surface.subtle};
  border-radius: ${({theme:e})=>e.borderRadius.input};
  text-align: center;
`,j.U.p.withConfig({displayName:"RelatedListTable.styles__EmptyStateText",componentId:"sc-4ed05743-21"})`
  font-size: 0.85rem;
  color: ${({theme:e})=>e.palette.text.muted};
  margin: 0;
`;let Y=j.U.div.withConfig({displayName:"RelatedListTable.styles__LoadErrorBox",componentId:"sc-4ed05743-22"})`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1rem 1.5rem;
  background: ${({theme:e})=>e.palette.status.error.bg};
  border: 1px solid ${({theme:e})=>e.palette.status.error.border};
  border-radius: ${({theme:e})=>e.borderRadius.input};
`,J=j.U.p.withConfig({displayName:"RelatedListTable.styles__LoadErrorText",componentId:"sc-4ed05743-23"})`
  margin: 0;
  font-size: 0.85rem;
  color: ${({theme:e})=>e.palette.status.error.text};
`,X=j.U.button.withConfig({displayName:"RelatedListTable.styles__RetryButton",componentId:"sc-4ed05743-24"})`
  padding: 0.3rem 0.75rem;
  font-size: 0.8rem;
  font-weight: 600;
  color: ${({theme:e})=>e.palette.status.error.text};
  background: transparent;
  border: 1px solid ${({theme:e})=>e.palette.status.error.border};
  border-radius: ${({theme:e})=>e.borderRadius.input};
  cursor: pointer;

  &:hover {
    background: ${({theme:e})=>e.palette.default.white};
  }
`,ee=j.U.div.withConfig({displayName:"RelatedListTable.styles__InlineEditCell",componentId:"sc-4ed05743-25"})`
  min-width: 7rem;

  /* Anzeige-Modus des EditableField kompakt halten */
  > div {
    margin: 0;
  }
`,et=j.U.button.withConfig({displayName:"RelatedListTable.styles__HeaderActionButton",componentId:"sc-4ed05743-26"})`
  padding: 0.3rem 0.75rem;
  font-size: 0.8rem;
  font-weight: 600;
  color: ${({theme:e})=>e.palette.default.primary};
  background: transparent;
  border: 1px solid ${({theme:e})=>e.palette.default.grey};
  border-radius: ${({theme:e})=>e.borderRadius.input};
  cursor: pointer;

  &:hover {
    background: ${({theme:e})=>e.palette.surface.subtle};
  }
`,ea=j.U.div.withConfig({displayName:"RelatedListTable.styles__PickerContent",componentId:"sc-4ed05743-27"})`
  background: ${({theme:e})=>e.palette.default.white};
  border-radius: 12px;
  padding: 24px;
  width: 480px;
  max-width: calc(100vw - 32px);
  /* Platz fürs Autocomplete-Dropdown, das im Content aufklappt (kein Portal) */
  min-height: 320px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,ei=j.U.button.withConfig({displayName:"RelatedListTable.styles__UnlinkButton",componentId:"sc-4ed05743-28"})`
  margin-left: 0.5rem;
  padding: 0.15rem 0.5rem;
  font-size: 0.72rem;
  color: ${({theme:e})=>e.palette.status.error.text};
  background: transparent;
  border: 1px solid ${({theme:e})=>e.palette.status.error.border};
  border-radius: ${({theme:e})=>e.borderRadius.input};
  cursor: pointer;

  &:disabled {
    cursor: wait;
    opacity: 0.5;
  }

  &:hover:not(:disabled) {
    background: ${({theme:e})=>e.palette.status.error.bg};
  }
`;e.i(339806);var el=e.i(946049),er=e.i(351754),en=e.i(821175),es=e.i(223963);let eo=/(price|amount|betrag|marge|preis|kosten|transportpreis|rechnungsbetrag|_pro_t|tonnage|\bdb_)/i,ed=new Set(["text","number","date","datetime","currency","percent","picklist","textarea","boolean","lookup"]),ec=e=>null==e||""===e;e.s(["f",0,({config:e,records:T,entityId:j,entityType:eu,relatedEntityType:ep,hideCreateButton:ef,loadError:em,onRetry:ey,dataTestId:eg,parentRecord:eh})=>{let{label:eb,fields:e_,maxRows:ex=10}=e,{tr:ek}=(0,w.f)(),ew=(0,$.f)(),e$=(0,v.V)(),{userContext:ev}=(0,C.f)(),{label:eC}=(0,I.f)(),{quickOpen:eI}=(0,L.f)(),eL=(0,i.d)(),eN=ep?n.f[ep]:null,eT=e_.filter(e=>"Id"!==e),ej=ep?y.y[ep]??ep:null,eS=ej?y.F[ej]??ej:"",eR=(0,N.f)(ev,ej),eV=(0,d.M)(eS),eM=!!ev&&!!eS&&(0,_.A)(ev,eS,"edit"),eU=!0===e.inlineEdit&&!!ep&&eM,eE=(0,a.useMemo)(()=>{let e=new Map;if(!eU)return e;let t=(0,b.Z)(eS);for(let a of t?.sections??[])for(let t of a.fields??[]){let a=e.get(t.apiName);a&&(!a.readOnly||t.readOnly)||e.set(t.apiName,e$.field(t))}return e},[eU,eS,e$]),eP=(0,a.useMemo)(()=>eU?new Set((0,b.a)(eS,ev?.role)):new Set,[eU,eS,ev?.role]),ez=(0,a.useMemo)(()=>{let e=new Map,t=eS?(0,b.Z)(eS):null;for(let a of t?.sections??[])for(let t of a.fields??[])t.label&&!e.has(t.apiName)&&e.set(t.apiName,e$.text(t.label,t.labelKey));return e},[eS,e$]),eA=(0,a.useMemo)(()=>{let e=new Map,t=eS?(0,b.Z)(eS):null;for(let a of t?.sections??[])for(let t of a.fields??[])!t.picklistOptions?.length||e.has(t.apiName)||e.set(t.apiName,new Map(e$.options(t.picklistOptions).map(e=>[e.value,e.label])));return e},[eS,e$]),eD=(0,a.useMemo)(()=>({yes:ek("common.yes",{defaultValue:"Ja"}),no:ek("common.no",{defaultValue:"Nein"}),picklistLabel:(e,t)=>eA.get(e)?.get(t),fmt:ew}),[ek,e$.revision,eA,ew]),eO=(0,a.useCallback)(e=>{let t=ez.get(e);if(t)return t;if(e.includes(".")){let t=e.split(".")[0],a=t.endsWith("__r")?t.replace(/__r$/,"__c"):`${t}Id`,i=ez.get(a);if(i)return i}return e$.text((0,s.f)(e))},[ez,e$]),[eB,eF]=(0,a.useState)(null),[eH,eK]=(0,a.useState)(null),eW=e.addExisting,eG=(0,a.useMemo)(()=>eW&&ep&&ev?new Set((0,b.a)(eS,ev.role)):new Set,[eW,ep,ev,eS]),eq=(0,a.useMemo)(()=>{let e=eW?.filter;if(!e)return;let t=eh?.[e.parentField];return"string"==typeof t&&t?{field:e.childField,value:t}:null},[eW,eh]),eZ=!!eW&&eM&&eG.has(eW.childLookupField)&&!ef&&null!==eq,eQ=!!eW&&eM&&eG.has(eW.childLookupField)&&!ef&&!0===eW.unlinkable,[eY,eJ]=(0,a.useState)(!1),[eX,e0]=(0,a.useState)(!1),e1=(0,a.useCallback)(()=>{let e=y.y[eu]??eu;for(let t of[h.t[e],ej?h.t[ej]:void 0])t&&eL.invalidateQueries({queryKey:[t]})},[eu,ej,eL]),e2=(0,a.useCallback)(async(e,t)=>{if(eW&&ej&&!eX){e0(!0);try{let a=h.$[ej];if(!a)throw Error(`no API path for entity type ${ej}`);await x.k.patch(`/salesforce/${a}/${e}/`,{[eW.childLookupField]:t}),e1(),k.c.success(t?ek("relatedLists.linked",{defaultValue:"Datensatz verknüpft"}):ek("relatedLists.unlinked",{defaultValue:"Verknüpfung gelöst"})),eJ(!1)}catch(t){console.error("[RelatedListTable] link/unlink failed:",t);let e=t?.response?.data?.message;k.c.error(e&&(0,en.f)(ek,e)||ek("relatedLists.linkFailed",{defaultValue:"Verknüpfen fehlgeschlagen"}))}finally{e0(!1)}}},[eW,ej,eX,e1,ek]),e4=(0,a.useCallback)(async(e,t,a)=>{eK(`${e}:${t}`);try{let i=ej?h.$[ej]:void 0;if(!i)throw Error(`no API path for entity type ${ep}`);await x.k.patch(`/salesforce/${i}/${e}/`,{[t]:a});let l=y.y[eu]??eu;for(let e of[h.t[l],ej?h.t[ej]:void 0])e&&eL.invalidateQueries({queryKey:[e]});eF(null)}catch(t){console.error("[RelatedListTable] inline save failed:",t);let e=t?.response?.data?.message;k.c.error(e&&(0,en.f)(ek,e)||ek("relatedLists.inlineSaveFailed",{defaultValue:"Speichern fehlgeschlagen"}))}finally{eK(null)}},[ep,ej,eu,eL,ek]);return(0,t.jsxs)(S,{"data-testid":eg||`related-list-${e.relationshipName}`,children:[(0,t.jsxs)(R,{children:[(0,t.jsxs)(V,{children:[eN&&(0,t.jsx)(M,{children:eN}),eb||ek("relatedLists.defaultTitle",{defaultValue:"Related List"})]}),(0,t.jsxs)(U,{children:[(0,t.jsx)(E,{children:em?ek("relatedLists.loadError",{defaultValue:"Laden fehlgeschlagen"}):T.length>0?ek("relatedLists.recordCount",{count:T.length,defaultValue:1===T.length?"{{count}} record":"{{count}} records"}):ek("relatedLists.noRecords",{defaultValue:"No records"})}),eZ&&!em&&(0,t.jsx)(et,{type:"button",onClick:()=>eJ(!0),"data-testid":`related-list-add-existing-${e.relationshipName}`,children:ek("relatedLists.addExisting",{defaultValue:"Hinzufügen"})}),ej&&!1!==e.showCreateButton&&eR&&!ef&&(0,es.s)(ej)&&(0,t.jsx)(u.f,{entityType:ej,parentEntityId:j,parentEntityType:eu,size:"small",tooltip:ek("relatedLists.createTooltip",{defaultValue:"Create {{label}}",label:eb}),dataTestId:`create-${e.relationshipName.toLowerCase()}-button`,onSuccess:e1})]})]}),em?(0,t.jsxs)(Y,{"data-testid":`related-list-error-${e.relationshipName}`,children:[(0,t.jsx)(J,{children:ek("relatedLists.loadErrorHint",{defaultValue:"Diese Liste konnte nicht geladen werden."})}),ey&&(0,t.jsx)(X,{type:"button",onClick:ey,"data-testid":`related-list-retry-${e.relationshipName}`,children:ek("relatedLists.retry",{defaultValue:"Erneut versuchen"})})]}):T.length>0?(0,t.jsx)(P,{children:(0,t.jsxs)(z,{children:[(0,t.jsx)(A,{children:(0,t.jsxs)("tr",{children:[eV&&(0,t.jsx)(D,{style:{width:"24px"}}),eT.map((e,a)=>(0,t.jsx)(D,{children:eO(e)},`header-${a}-${e}`)),(0,t.jsx)(O,{children:ek("relatedLists.actionColumn",{defaultValue:"Aktion"})})]})}),(0,t.jsx)(B,{children:T.slice(0,ex).map((a,i)=>{let n=a.Id,s=n&&(0,r.f)(n)?(0,l.G)(n):null;return(0,t.jsxs)(F,{$even:i%2==0,"data-testid":`related-list-row-${e.relationshipName}-${i}`,children:[eV&&(0,t.jsx)(H,{children:(0,t.jsx)(o.f,{entityType:eS,record:a})}),eT.map((o,d)=>{let u=a[o];if(void 0===u&&o.includes(".")){let[e,t]=o.split(".");u=a[e]?.[t]}let p=0===d,f=`${n}:${o}`,y=!p&&!!n&&(e=>{if(!eU||e.includes(".")||e.startsWith("_")||!eP.has(e))return!1;let t=eE.get(e);return!!t&&ed.has(t.fieldType)})(o),h=eE.get(o);return(0,t.jsx)(H,{children:p&&s?(0,t.jsx)(G,{type:"button",onClick:()=>eI(n,a),"data-testid":`related-list-quickopen-${e.relationshipName}-${i}`,"data-field":o,"data-value":ec(u)?"":String(u),children:ec(u)?"–":String(u)}):y&&h?(0,t.jsx)(ee,{children:(0,t.jsx)(m.f,{fieldName:o,fieldType:h.fieldType,options:h.picklistOptions,lookupObjectType:h.lookupObjectType,lookupFilter:(0,g.d)(h,a),initialLookupDisplay:((e,t)=>{let a=t.endsWith("__c")?t.replace(/__c$/,"__r"):t.endsWith("Id")?t.slice(0,-2):null;if(!a)return;let i=e[a];return"string"==typeof i?.Trade_Name__c&&i.Trade_Name__c?i.Trade_Name__c:"string"==typeof i?.Name?i.Name:void 0})(a,o),value:u,isEditing:eB===f,isEditable:null===eH,onStartEdit:()=>eF(f),onConfirm:(e,t)=>void e4(n,e,t),onCancel:()=>eF(null),dataTestId:`related-list-cell-${e.relationshipName}-${i}-${o}`})}):((e,a,i,n,s)=>{if(ec(a))return(0,t.jsx)(Z,{children:"–"});if((0,c.Z)(e)&&"string"==typeof a)return(0,t.jsx)(Q,{$tone:(0,c.x)(a),children:n.picklistLabel(e,a)??a});if("boolean"==typeof a)return a?n.yes:n.no;if("string"==typeof a&&/^\d{4}-\d{2}-\d{2}/.test(a)){let e=new Date(a);if(!Number.isNaN(e.getTime()))return n.fmt.dateWith(e,{year:"numeric",month:"2-digit",day:"2-digit"})}if("number"==typeof a)return eo.test(e)?n.fmt.number(a,{style:"currency",currency:"EUR"}):n.fmt.number(a);if("string"==typeof a&&(0,r.f)(a)){let e=(0,l.G)(a);if(e)return(0,t.jsx)(W,{href:e,children:"↗"});let r=i(void 0);return(0,t.jsx)(Z,{"data-testid":s,"data-unnamed":r.unnamed||void 0,children:r.text})}return"string"==typeof a?n.picklistLabel(e,a)??a:String(a)})(o,u,eC,eD,`related-list-cell-${e.relationshipName}-${i}-${o}`)},`cell-${i}-${d}-${o}`)}),(0,t.jsxs)(K,{children:[s&&(0,t.jsxs)(q,{href:s,children:[ek("relatedLists.open",{defaultValue:"Öffnen"})," →"]}),eQ&&n&&(0,t.jsx)(ei,{type:"button",disabled:eX,onClick:()=>void e2(n,null),"data-testid":`related-list-unlink-${e.relationshipName}-${i}`,title:ek("relatedLists.unlink",{defaultValue:"Lösen"}),children:ek("relatedLists.unlink",{defaultValue:"Lösen"})})]})]},`row-${i}`)})})]})}):(0,t.jsx)(p.f,{size:"small",description:ek("relatedLists.empty",{defaultValue:"No {{label}} found",label:eb||ek("relatedLists.emptyFallbackLabel",{defaultValue:"related records"})})}),eZ&&(0,t.jsx)(el.f,{isOpen:eY,onClose:()=>eJ(!1),variant:"bare",ariaLabel:`${ek("relatedLists.addExisting",{defaultValue:"Hinzufügen"})}: ${eb}`,zIndex:er.f.overlayTop,dataTestId:`related-list-add-existing-overlay-${e.relationshipName}`,children:(0,t.jsxs)(ea,{children:[(0,t.jsxs)(f.K,{importance:f.D.h3,children:[ek("relatedLists.addExisting",{defaultValue:"Hinzufügen"}),": ",eb]}),(0,t.jsx)(m.f,{fieldName:eW.childLookupField,fieldType:"lookup",lookupObjectType:eS,lookupFilter:eq??void 0,hideLabel:!0,value:"",isEditing:eY,isEditable:!eX,onChange:(e,t)=>{"string"==typeof t&&t&&e2(t,j)},onConfirm:(e,t)=>{"string"==typeof t&&t&&e2(t,j)},onCancel:()=>eJ(!1),dataTestId:`related-list-add-existing-picker-${e.relationshipName}`})]})})]})}],914602),e.s([],481940)},101316,139418,e=>{var t=e.i(843476);e.i(821194);var a=e.i(99222),i=e.i(24024),l=e.i(858350),r=e.i(206702),n=e.i(427006);function s(e){return"string"==typeof e&&""!==e&&!(0,r.Y)(e)&&!n.I.includes(e)}var o=e.i(271645),d=e.i(997053);let c=d.U.span.withConfig({displayName:"RecordIdField.styles__Root",componentId:"sc-e4ceed7f-0"})`
  display: inline-flex;
  align-items: center;
  gap: 8px;
`,u=d.U.span.withConfig({displayName:"RecordIdField.styles__IdText",componentId:"sc-e4ceed7f-1"})`
  font-size: 0.6875rem;
  color: ${({theme:e})=>e.palette.default.greyDark};
  font-family: monospace;
  opacity: 0.7;
`,p=d.U.button.withConfig({displayName:"RecordIdField.styles__CopyButton",componentId:"sc-e4ceed7f-2"})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 2px 8px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  font-weight: 500;
  font-size: 0.6875rem;
  /* M11: Theme-Tokens statt fester Farben (Dark-Mode) */
  background-color: ${({theme:e})=>e.palette.site.blueDark};
  color: ${({theme:e})=>e.palette.default.white};
  transition: all 0.2s ease-in-out;

  &:hover {
    filter: brightness(0.85);
  }
`;async function f(e){try{if(navigator.clipboard?.writeText)return await navigator.clipboard.writeText(e),!0}catch{}try{let t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="fixed",t.style.opacity="0",document.body.appendChild(t),t.select();let a="function"==typeof document.execCommand&&document.execCommand("copy");return document.body.removeChild(t),!!a}catch{return!1}}let m=({recordId:e,dataTestId:l="record-id"})=>{let{userContext:r}=(0,i.f)(),{tr:n}=(0,a.f)(),[d,m]=(0,o.useState)(!1),y=(0,o.useRef)(null);if((0,o.useEffect)(()=>()=>{null!==y.current&&window.clearTimeout(y.current)},[]),!s(r?.role))return null;let g=async()=>{await f(e)&&(m(!0),null!==y.current&&window.clearTimeout(y.current),y.current=window.setTimeout(()=>m(!1),1500))};return(0,t.jsxs)(c,{"data-testid":`${l}-field`,children:[(0,t.jsx)(u,{"data-testid":`${l}-value`,"data-record-id":e,children:e}),(0,t.jsx)(p,{type:"button",onClick:()=>void g(),"data-testid":`${l}-copy`,"data-copied":d,children:d?n("recordId.copied",{defaultValue:"Copied"}):n("recordId.copy",{defaultValue:"Copy"})})]})};var y=e.i(555508);let g=d.U.div.withConfig({displayName:"SystemInformation.styles__Root",componentId:"sc-2b6aac2-0"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: ${({theme:e})=>e.margin.default};
`,h=d.U.div.withConfig({displayName:"SystemInformation.styles__SystemInfoGrid",componentId:"sc-2b6aac2-1"})`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 4px;
  width: 100%;
`,b=d.U.div.withConfig({displayName:"SystemInformation.styles__SystemInfoItem",componentId:"sc-2b6aac2-2"})`
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 6px 8px;
  margin-bottom: 4px;
  background: ${({theme:e})=>e.palette.default.greyLight};
  border-radius: ${({theme:e})=>e.borderRadius.box};
  border: 1px solid ${({theme:e})=>e.palette.default.secondary}30;
`,_=d.U.span.withConfig({displayName:"SystemInformation.styles__SystemInfoLabel",componentId:"sc-2b6aac2-3"})`
  font-size: ${({theme:e})=>e.font.text.caption.desktop.fontSize};
  font-weight: bold;
  color: ${({theme:e})=>e.palette.default.black};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  line-height: ${({theme:e})=>e.font.text.caption.desktop.lineHeight};
`,x=d.U.span.withConfig({displayName:"SystemInformation.styles__SystemInfoValue",componentId:"sc-2b6aac2-4"})`
  font-size: ${({theme:e})=>e.font.text.bodysmall.desktop.fontSize};
  font-weight: ${({theme:e})=>e.font.text.bodysmall.desktop.fontWeight};
  color: ${({theme:e})=>e.palette.default.black};
  word-break: break-word;
  font-family: ${({theme:e})=>e.font.secondaryFamily};
  line-height: ${({theme:e})=>e.font.text.bodysmall.desktop.lineHeight};
`,k=d.U.div.withConfig({displayName:"SystemInformation.styles__EmptyMessage",componentId:"sc-2b6aac2-5"})`
  padding: 2rem;
  text-align: center;
  color: ${({theme:e})=>e.palette.default.secondary};
  font-style: italic;
  font-size: ${({theme:e})=>e.font.text.body.mobile.fontSize};
  background-color: ${({theme:e})=>e.palette.default.primary}50;
  border-radius: 0.375rem;
  border: 1px dashed ${({theme:e})=>e.palette.default.secondary};
`;e.s(["f",0,({entityData:e,className:r,compact:n=!1})=>{let{tr:o}=(0,a.f)(),d=(0,y.f)(),{userContext:c}=(0,i.f)(),{label:u}=(0,l.f)();if(!e)return(0,t.jsx)(g,{className:r,"data-testid":"system-information-root",children:(0,t.jsx)(k,{"data-testid":"system-information-empty",children:o("systemInformation.noData",{defaultValue:"No system information available."})})});let p=u(e.Owner?.Name),f=u(e.CreatedBy?.Name),w=u(e.LastModifiedBy?.Name),$=[{key:"record-id",label:o("systemInformation.fields.recordId",{defaultValue:"Record ID"}),show:!!e.Id&&s(c?.role),render:()=>(0,t.jsx)(m,{recordId:e.Id,dataTestId:"system-info-value-record-id"})},{key:"owner",label:o("systemInformation.fields.owner",{defaultValue:"Owner"}),value:p.text,unnamed:p.unnamed,show:!!e.Owner?.Name||!!e.OwnerId},{key:"owner-email",label:o("systemInformation.fields.ownerEmail",{defaultValue:"Owner Email"}),value:e.Owner?.Email,show:!!e.Owner?.Email},{key:"created-by",label:o("systemInformation.fields.createdBy",{defaultValue:"Created By"}),value:f.text,unnamed:f.unnamed,show:!!e.CreatedBy?.Name||!!e.CreatedById},{key:"created-date",label:o("systemInformation.fields.createdDate",{defaultValue:"Created Date"}),value:d.dateTime(e.CreatedDate),show:!!e.CreatedDate},{key:"last-modified-by",label:o("systemInformation.fields.lastModifiedBy",{defaultValue:"Last Modified By"}),value:w.text,unnamed:w.unnamed,show:!!e.LastModifiedBy?.Name||!!e.LastModifiedById},{key:"last-modified-date",label:o("systemInformation.fields.lastModifiedDate",{defaultValue:"Last Modified Date"}),value:d.dateTime(e.LastModifiedDate),show:!!e.LastModifiedDate},{key:"system-modstamp",label:o("systemInformation.fields.systemModstamp",{defaultValue:"System Timestamp"}),value:d.dateTime(e.SystemModstamp),show:!!e.SystemModstamp},{key:"last-activity-date",label:o("systemInformation.fields.lastActivityDate",{defaultValue:"Last Activity"}),value:d.dateTime(e.LastActivityDate),show:!!e.LastActivityDate},{key:"last-viewed-date",label:o("systemInformation.fields.lastViewedDate",{defaultValue:"Last Viewed"}),value:d.dateTime(e.LastViewedDate),show:!!e.LastViewedDate},{key:"last-referenced-date",label:o("systemInformation.fields.lastReferencedDate",{defaultValue:"Last Referenced"}),value:d.dateTime(e.LastReferencedDate),show:!!e.LastReferencedDate},{key:"is-deleted",label:o("systemInformation.fields.isDeleted",{defaultValue:"Deleted"}),value:e.IsDeleted?o("common.yes",{defaultValue:"Yes"}):o("common.no",{defaultValue:"No"}),show:void 0!==e.IsDeleted}].filter(e=>e.show);return 0===$.length?(0,t.jsx)(g,{className:r,"data-testid":"system-information-root",children:(0,t.jsx)(k,{"data-testid":"system-information-empty",children:o("systemInformation.noData",{defaultValue:"No system information available."})})}):(0,t.jsx)(g,{className:r,"data-testid":"system-information-root",children:n?$.map(e=>(0,t.jsxs)(b,{"data-testid":`system-info-item-${e.key}`,children:[(0,t.jsx)(_,{"data-testid":`system-info-label-${e.key}`,children:e.label}),(0,t.jsx)(x,{"data-testid":`system-info-value-${e.key}`,"data-unnamed":e.unnamed?"true":void 0,children:e.render?.()??e.value??"-"})]},e.key)):(0,t.jsx)(h,{children:$.map(e=>(0,t.jsxs)(b,{"data-testid":`system-info-item-${e.key}`,children:[(0,t.jsx)(_,{"data-testid":`system-info-label-${e.key}`,children:e.label}),(0,t.jsx)(x,{"data-testid":`system-info-value-${e.key}`,"data-unnamed":e.unnamed?"true":void 0,children:e.render?.()??e.value??"-"})]},e.key))})})}],139418),e.s([],101316)},969956,e=>{var t=e.i(843476),a=e.i(489544),i=e.i(920592),l=e.i(599285),r=e.i(443018),n=e.i(599472),s=e.i(528311),o=e.i(146188),d=e.i(684726),c=e.i(118925),u=e.i(997053);let p=u.U.svg.withConfig({displayName:"IconOwner.styles__Root",componentId:"sc-b29a601a-0"})``;e.i(821194);var f=e.i(99222),m=e.i(838471);let y={Account:(0,t.jsx)(a.f,{}),Contact:(0,t.jsx)(i.f,{}),Opportunity:(0,t.jsx)(l.f,{}),Case:(0,t.jsx)(r.f,{}),Task:(0,t.jsx)(n.f,{}),Order:(0,t.jsx)(s.f,{}),OrderItem:(0,t.jsx)(s.f,{}),User:(0,t.jsx)(e=>{let{tr:a}=(0,f.f)();return(0,t.jsxs)(p,{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none","data-testid":"icon-owner-root",className:e.className,children:[(0,t.jsx)("title",{children:a("common.owner",{defaultValue:"Owner"})}),(0,t.jsxs)("g",{fill:"currentColor",strokeLinecap:"square",strokeLinejoin:"miter",strokeMiterlimit:"10",children:[(0,t.jsx)("path",{d:"M12 13C13.3807 13 14.5 11.8807 14.5 10.5C14.5 9.11929 13.3807 8 12 8C10.6193 8 9.5 9.11929 9.5 10.5C9.5 11.8807 10.6193 13 12 13Z",stroke:"currentColor",strokeWidth:"2",fill:"none"}),(0,t.jsx)("path",{d:"M17.4021 19.4018C16.4353 17.3897 14.3822 16 12 16C9.61787 16 7.56473 17.3897 6.5979 19.4018",stroke:"currentColor",strokeWidth:"2",fill:"none",strokeLinecap:"butt"}),(0,t.jsx)("path",{d:"M12 1.5L21.0933 6.75V17.25L12 22.5L2.90673 17.25V6.75L12 1.5Z",stroke:"currentColor",strokeWidth:"2",fill:"none",strokeLinecap:"butt"})]})]})},{}),Product:(0,t.jsx)(o.f,{}),Product2:(0,t.jsx)(o.f,{}),Project:(0,t.jsx)(d.f,{}),Projekt__c:(0,t.jsx)(d.f,{}),Invoice:(0,t.jsx)(c.f,{}),Abrechnung__c:(0,t.jsx)(c.f,{}),MonitoredMaterial:(0,t.jsx)(m.f,{}),Monitored_Material__c:(0,t.jsx)(m.f,{})};e.s(["f",0,y],969956)},852606,e=>{let t={Name:"Name",OwnerId:"Inhaber",CreatedById:"Erstellt von",CreatedDate:"Erstellt",LastModifiedById:"Geändert von",LastModifiedDate:"Geändert",OrderNumber:"Auftragsnr.",OrderItemNumber:"Position",CaseNumber:"Vorgangsnr.",TotalAmount:"Betrag",UnitPrice:"Einzelpreis",TotalPrice:"Gesamtpreis",Quantity:"Menge",Email:"E-Mail",Phone:"Telefon",MobilePhone:"Mobil",Title:"Position",FirstName:"Vorname",LastName:"Nachname",Status:"Status",Type:"Typ",Product2Id:"Produkt",ProductCode:"Produktcode",StartDate:"Startdatum",EndDate:"Enddatum"},a=[[/Verh_ltnis/g,"Verhältnis"],[/Ausl_sender/g,"Auslösender"],[/Empf_nger/g,"Empfänger"],[/Gespr_chsprotokoll/g,"Gesprächsprotokoll"],[/Pr_fung/g,"Prüfung"],[/Gr_e/g,"größe"],[/G_ltig/g,"Gültig"],[/g_ltig/g,"gültig"],[/St_rke/g,"Stärke"],[/zust_ndig/gi,"zuständig"],[/f_r/g,"für"]];e.s(["f",0,function(e){let i=e.includes(".")?e.split(".").pop():e;if(t[i])return t[i];let l=i.replace(/__r$/,"").replace(/__c$/,"");for(let[e,t]of a)l=l.replace(e,t);return(l=l.replace(/Id$/,"").replace(/_/g," ").replace(/([a-z])([A-Z])/g,"$1 $2").trim().replace(/\s+/g," ")).charAt(0).toUpperCase()+l.slice(1)}])},378844,e=>{e.s(["f",0,function(e,t){for(let a of[t.replace("Id",""),t.replace("__c","__r")]){let t=e[a],i=t?.Name??t?.OrderNumber??t?.CaseNumber??t?.ContractNumber;if(null!=i&&""!==i)return{name:String(i),related:t}}return{}}])},970700,e=>{var t=e.i(149696);e.s(["f",()=>t.i])},626331,e=>{var t=e.i(882109);let a={Account:"Account",Contact:"Contact",Opportunity:"Opportunity",Case:"Case",Task:"Task",Order:"Order",OrderItem:"OrderItem",Project:"Projekt__c",Invoice:"Abrechnung__c",MaterialAnalysis:"Materialanalyse__c",MaterialProposal:"Material_Proposal__c",MonitoredMaterial:"Monitored_Material__c",Requirement:"Bedarfe__c",SampleFeedback:"Sample_Feedback__c",SampleSending:"Sample_Sending__c",SupplierAudit:"Supplier_Audit__c",Onboarding:"Onboarding__c",ContactHandover:"Kontakt_bergaben__c",CompanyCertificate:"Unternehmenszertifikat__c",ProductionSite:"Produktionsstandort__c",Product:"Product2",Contract:"Contract",AuditProperty:"AuditProperty__c",Lohn:"Lohn__c",AktuellerPreisUndVerfugbarkeit:"Aktueller_Preis_und_Verf_gbarkeit__c",Reklamation:"Reklamation__c",Prozessfeedback:"Prozessfeedback__c",Bedarf__c:"Bedarfe__c",Kontakt_Übergaben__c:"Kontakt_bergaben__c",Bedarfe__c:"Bedarfe__c",Kontakt_bergaben__c:"Kontakt_bergaben__c",Reklamation__c:"Reklamation__c",Prozessfeedback__c:"Prozessfeedback__c",Projekt__c:"Projekt__c",Abrechnung__c:"Abrechnung__c",Materialanalyse__c:"Materialanalyse__c",Material_Proposal__c:"Material_Proposal__c",Monitored_Material__c:"Monitored_Material__c",Sample_Feedback__c:"Sample_Feedback__c",Sample_Sending__c:"Sample_Sending__c",Supplier_Audit__c:"Supplier_Audit__c",Onboarding__c:"Onboarding__c",Unternehmenszertifikat__c:"Unternehmenszertifikat__c",Produktionsstandort__c:"Produktionsstandort__c",Product2:"Product2"};e.s(["f",0,function(e,i){if(!i)return!1;if(!e)return!0;let l=a[i];return!l||(0,t.A)(e,l,"create")}])}])})();