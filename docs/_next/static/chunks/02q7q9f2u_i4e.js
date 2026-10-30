(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,95938,e=>{"use strict";var t=e.i(843476),i=e.i(271645),a=e.i(501496);e.i(339806);var r=e.i(946049),n=e.i(894113),l=e.i(997053),d=e.i(653145),o=e.i(218595);let s=l.U.div.withConfig({displayName:"FormStepper.styles__Root",componentId:"sc-19ad5eda-0"})`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({theme:e})=>e.padding.default} 0;
  width: 100%;
`,c=l.U.div.withConfig({displayName:"FormStepper.styles__StepsContainer",componentId:"sc-19ad5eda-1"})`
  display: flex;
  align-items: center;
  gap: 0;
  width: 100%;
  max-width: 600px;
`,p=l.U.div.withConfig({displayName:"FormStepper.styles__StepItem",componentId:"sc-19ad5eda-2"})`
  display: flex;
  align-items: center;
  flex: ${({$isLast:e})=>e?"0 0 auto":"1 1 auto"};
`,u=l.U.button.withConfig({displayName:"FormStepper.styles__StepCircle",componentId:"sc-19ad5eda-3"})`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  font-size: 0.875rem;
  font-weight: 600;
  border: 2px solid;
  transition: all 0.2s ease;
  flex-shrink: 0;
  cursor: ${({$clickable:e})=>e?"pointer":"default"};

  ${({$status:e,theme:t})=>{switch(e){case"completed":return l.m`
          background-color: ${t.palette.default.secondary};
          border-color: ${t.palette.default.secondary};
          color: ${t.palette.default.white};

          &:hover {
            background-color: ${t.palette.default.secondary};
            border-color: ${t.palette.default.secondary};
            opacity: 0.9;
          }
        `;case"active":return l.m`
          background-color: ${t.palette.default.primary};
          border-color: ${t.palette.default.primary};
          color: ${t.palette.default.white};
        `;default:return l.m`
          background-color: ${t.palette.default.white};
          border-color: ${t.palette.default.grey};
          color: ${t.palette.default.greyDark};
        `}}}

  &:disabled {
    cursor: default;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${({theme:e})=>e.palette.default.primary}40;
  }
`,f=l.U.div.withConfig({displayName:"FormStepper.styles__StepConnector",componentId:"sc-19ad5eda-4"})`
  flex: 1;
  height: 2px;
  margin: 0 ${({theme:e})=>e.margin.small};
  background-color: ${({$completed:e,theme:t})=>e?t.palette.default.secondary:t.palette.default.grey};
  transition: background-color 0.3s ease;
`,m=l.U.span.withConfig({displayName:"FormStepper.styles__StepLabel",componentId:"sc-19ad5eda-5"})`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-top: ${({theme:e})=>e.margin.small};
  font-size: 0.75rem;
  font-weight: ${({$status:e})=>"active"===e?"600":"400"};
  color: ${({$status:e,theme:t})=>{switch(e){case"completed":return t.palette.default.secondary;case"active":return t.palette.default.primary;default:return t.palette.default.greyDark}}};
  white-space: nowrap;
  text-align: center;
`,y=l.U.div.withConfig({displayName:"FormStepper.styles__StepWrapper",componentId:"sc-19ad5eda-6"})`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`,g=l.U.span.withConfig({displayName:"FormStepper.styles__OptionalBadge",componentId:"sc-19ad5eda-7"})`
  font-size: 0.625rem;
  color: ${({theme:e})=>e.palette.default.greyDark};
  margin-top: 0.125rem;
`;l.U.svg.withConfig({displayName:"FormStepper.styles__CheckIcon",componentId:"sc-19ad5eda-8"})`
  width: 16px;
  height: 16px;
  fill: currentColor;
`,e.i(821194);var h=e.i(99222);let b=({steps:e,currentStepIndex:i,onStepClick:a,allowNavigation:r=!0,dataTestId:n="form-stepper"})=>{let{tr:l}=(0,h.f)();return(0,t.jsx)(s,{"data-testid":n,children:(0,t.jsx)(c,{children:e.map((d,o)=>{let s=o===e.length-1,c=r&&o<i&&!!a;return(0,t.jsxs)(p,{$isLast:s,children:[(0,t.jsxs)(y,{children:[(0,t.jsx)(u,{$status:d.status,$clickable:c,onClick:()=>{r&&o<i&&a&&a(o)},disabled:!c,type:"button","aria-label":`${d.label}${"completed"===d.status?" (abgeschlossen)":"active"===d.status?" (aktuell)":""}`,"aria-current":"active"===d.status?"step":void 0,"data-testid":`${n}-step-${o}`,children:"completed"===d.status?(0,t.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",children:(0,t.jsx)("polyline",{points:"20 6 9 17 4 12"})}):o+1}),(0,t.jsxs)(m,{$status:d.status,children:[d.label,d.isOptional&&(0,t.jsxs)(g,{children:[" ",l("form.optional",{defaultValue:"(optional)"})]})]})]}),!s&&(0,t.jsx)(f,{$completed:o<i})]},d.id)})})})};e.i(969101);var x=e.i(75146);e.i(454138);var j=e.i(893551);e.i(36380);var F=e.i(285393),k=e.i(825969),$=e.i(541138),w=e.i(572143),I=e.i(555508),v=e.i(145896),O=e.i(787766);let C=l.U.div.withConfig({displayName:"RelatedObjectsSection.styles__Section",componentId:"sc-87cc08e7-0"})`
  padding: 1rem;
  background: ${({theme:e})=>e.palette.default.white};
  border-radius: 6px;
  border: 1px solid ${({theme:e})=>e.palette.default.grey};
`,_=l.U.div.withConfig({displayName:"RelatedObjectsSection.styles__SectionHeader",componentId:"sc-87cc08e7-1"})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid ${({theme:e})=>e.palette.default.grey};
`,S=l.U.h4.withConfig({displayName:"RelatedObjectsSection.styles__SectionTitle",componentId:"sc-87cc08e7-2"})`
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
  color: ${({theme:e})=>e.palette.default.black};
`,T=l.U.span.withConfig({displayName:"RelatedObjectsSection.styles__ItemCount",componentId:"sc-87cc08e7-3"})`
  font-size: 0.875rem;
  color: ${({theme:e})=>e.palette.default.greyDark};
  margin-left: 0.5rem;
`,N=l.U.div.withConfig({displayName:"RelatedObjectsSection.styles__ItemsList",componentId:"sc-87cc08e7-4"})`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1rem;
`,E=l.U.div.withConfig({displayName:"RelatedObjectsSection.styles__ItemCard",componentId:"sc-87cc08e7-5"})`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem;
  background: ${({theme:e})=>e.palette.default.greyLight};
  border-radius: 4px;
  border: 1px solid
    ${({theme:e,$invalid:t})=>t?e.palette.status.warning.border:e.palette.default.grey};
`,V=l.U.div.withConfig({displayName:"RelatedObjectsSection.styles__ItemBody",componentId:"sc-87cc08e7-6"})`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  min-width: 0;
`,R=l.U.div.withConfig({displayName:"RelatedObjectsSection.styles__RowEditFields",componentId:"sc-87cc08e7-7"})`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 0.75rem;
`,U=l.U.p.withConfig({displayName:"RelatedObjectsSection.styles__RequiredHint",componentId:"sc-87cc08e7-8"})`
  margin: 0;
  padding: 8px 12px;
  border-left: 3px solid ${({theme:e})=>e.palette.status.warning.border};
  background: ${({theme:e})=>e.palette.status.warning.bg};
  color: ${({theme:e})=>e.palette.status.warning.text};
  font-size: 13px;
`,M=l.U.div.withConfig({displayName:"RelatedObjectsSection.styles__ItemContent",componentId:"sc-87cc08e7-9"})`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 1rem;
`,P=l.U.span.withConfig({displayName:"RelatedObjectsSection.styles__ItemField",componentId:"sc-87cc08e7-10"})`
  font-size: 0.875rem;
  color: ${({theme:e})=>e.palette.default.greyDark};

  strong {
    color: ${({theme:e})=>e.palette.default.black};
  }
`,D=l.U.button.withConfig({displayName:"RelatedObjectsSection.styles__RemoveButton",componentId:"sc-87cc08e7-11"})`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.25rem;
  color: ${({theme:e})=>e.palette.default.error};
  opacity: 0.7;
  transition: opacity 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 1;
  }

  svg {
    width: 18px;
    height: 18px;
  }
`,A=l.U.div.withConfig({displayName:"RelatedObjectsSection.styles__AddFormContainer",componentId:"sc-87cc08e7-12"})`
  padding: 1rem;
  background: ${({theme:e})=>e.palette.default.greyLight};
  border-radius: 4px;
  border: 1px dashed ${({theme:e})=>e.palette.default.grey};
  margin-top: 0.5rem;
`,z=l.U.div.withConfig({displayName:"RelatedObjectsSection.styles__AddFormFields",componentId:"sc-87cc08e7-13"})`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 0.75rem;
  margin-bottom: 1rem;
`,L=l.U.div.withConfig({displayName:"RelatedObjectsSection.styles__AddFormActions",componentId:"sc-87cc08e7-14"})`
  display: flex;
  gap: 0.5rem;
  justify-content: flex-end;
`,q=l.U.p.withConfig({displayName:"RelatedObjectsSection.styles__PricebookHint",componentId:"sc-87cc08e7-15"})`
  margin: 0 0 12px;
  padding: 8px 12px;
  border-left: 3px solid ${({theme:e})=>e.palette.status.error.border};
  background: ${({theme:e})=>e.palette.status.error.bg};
  color: ${({theme:e})=>e.palette.status.error.text};
  font-size: 13px;
`;function B(e,t){return t&&0!==t.length?t.filter(t=>{var i;return null==(i=e?.[t])||("string"==typeof i?""===i.trim():"number"==typeof i&&Number.isNaN(i))}):[]}function G(e,t){return!!e&&!!t&&e.some(e=>{let i=t[e.entityType];return!!Array.isArray(i)&&i.some(t=>B(t,e.requiredFields).length>0)})}function W({config:e,control:r,dataTestId:n="related-objects-section"}){let{tr:l}=(0,h.f)(),o=(0,I.f)(),s=(0,v.V)(),c=O.F[e.entityType]||e.entityType,p=s.text(e.label),u=s.text(e.labelPlural),[f,m]=(0,i.useState)(!1),y=`_relatedObjects.${e.entityType}`,{fields:g,append:b,remove:G}=(0,d.v)({control:r,name:y}),Y=(0,d.h)({control:r,name:y}),[H,K]=(0,i.useState)(()=>new Set),Q=(0,d.G)({defaultValues:{}}),Z="OrderId"===e.parentField&&e.fields.includes("Product2Id"),J=Q.watch("Product2Id"),[X,ee]=(0,i.useState)("idle");(0,i.useEffect)(()=>{if(!Z||!J)return void ee("idle");let e=!1;return ee("checking"),a.k.get("/salesforce/pricebook-entries/",{params:{productId:J}}).then(t=>{e||ee(t.data?.hasEntry?"ok":"missing")}).catch(()=>{e||ee("ok")}),()=>{e=!0}},[Z,J]);let et=(Z?[...new Set((Y??[]).map(e=>e?.Product2Id).filter(e=>"string"==typeof e&&""!==e))]:[]).join(","),[ei,ea]=(0,i.useState)({});(0,i.useEffect)(()=>{if(!et)return;let e=!1;for(let t of et.split(","))a.k.get("/salesforce/pricebook-entries/",{params:{productId:t}}).then(i=>{if(e)return;let a=i.data?.hasEntry?"ok":"missing";ea(e=>e[t]===a?e:{...e,[t]:a})}).catch(()=>{});return()=>{e=!0}},[et]);let er=Q.handleSubmit(e=>{"missing"!==X&&"checking"!==X&&(b(e),Q.reset(),m(!1))}),en=!e.maxItems||g.length<e.maxItems;return(0,t.jsxs)(C,{"data-testid":n,children:[(0,t.jsxs)(_,{children:[(0,t.jsx)("div",{children:(0,t.jsxs)(S,{children:[u,(0,t.jsxs)(T,{children:["(",g.length,")"]})]})}),!f&&en&&(0,t.jsx)(F.f,{onClick:()=>m(!0),modifier:k.j.SECONDARY,dataTestId:`${n}-add-btn`,children:l("entityForm.relatedObjects.add",{defaultValue:"+ {{label}} hinzufügen",label:p})})]}),g.length>0?(0,t.jsx)(N,{children:g.map((i,a)=>{let d=Y?.[a]??i,u=B(d,e.requiredFields),f=u.length>0||H.has(i.id),m=d.Product2Id,g="string"==typeof m&&"missing"===ei[m],h=`${n}-item-${a}`;return(0,t.jsxs)(E,{"data-testid":h,"data-invalid":u.length>0?"true":"false","data-pricebook-missing":g?"true":"false",$invalid:u.length>0||g,children:[(0,t.jsxs)(V,{children:[(0,t.jsx)(M,{children:e.fields.slice(0,4).map(e=>(0,t.jsxs)(P,{children:[(0,t.jsxs)("strong",{children:[s.fieldLabel(e),":"]})," ",((e,t)=>{let i=e[`_${t}_label`];if("string"==typeof i&&""!==i)return i;let a=e[t];if(null==a||""===a)return"-";if("boolean"==typeof a)return a?l("common.yes",{defaultValue:"Ja"}):l("common.no",{defaultValue:"Nein"});let r=(0,w.a)(c,t)?.picklistOptions?.find(e=>e.value===a);return r?s.text(r.label):"number"==typeof a?o.number(a):String(a)})(d,e)]},e))}),f&&e.requiredFields&&e.requiredFields.length>0&&(0,t.jsx)(R,{"data-testid":`${h}-edit`,onFocusCapture:()=>{let e;return e=i.id,K(t=>t.has(e)?t:new Set(t).add(e))},children:e.requiredFields.map(e=>{let i=(0,w.a)(c,e),n=i?s.field(i):void 0;return(0,t.jsx)(x.f,{name:`${y}.${a}.${e}`,control:r,label:n?.label??s.fieldLabel(e),fieldType:n?.fieldType||"text",options:n?.picklistOptions,lookupObjectType:n?.lookupObjectType,required:!0,dataTestId:`${h}-${e}`},e)})}),u.length>0&&(0,t.jsx)(U,{role:"alert","data-testid":`${h}-required-missing`,children:l("entityForm.relatedObjects.requiredMissing",{defaultValue:"Diese {{label}} ist unvollständig — bitte {{fields}} ergänzen, sonst wird sie nicht angelegt.",label:p,fields:u.map(e=>s.fieldLabel(e)).join(", ")})}),g&&(0,t.jsx)(q,{role:"alert","data-testid":`${h}-pricebook-missing`,children:l("entityForm.relatedObjects.pricebookMissing",{defaultValue:"Dieses Produkt hat keinen aktiven Preisbucheintrag im Standard-Preisbuch — bitte in Salesforce anlegen, dann die Position erneut hinzufügen."})})]}),(0,t.jsx)(D,{type:"button",onClick:()=>G(a),title:l("entityForm.relatedObjects.remove",{defaultValue:"Entfernen"}),"data-testid":`${n}-remove-${a}`,children:(0,t.jsx)($.f,{})})]},i.id)})}):f?null:(0,t.jsx)(j.f,{size:"small",description:l("entityForm.relatedObjects.empty",{defaultValue:"Noch keine {{labelPlural}} hinzugefügt.",labelPlural:u}),dataTestId:`${n}-empty`}),f&&(0,t.jsx)(d.p,{...Q,children:(0,t.jsxs)(A,{"data-testid":`${n}-add-form`,children:[(0,t.jsx)(z,{children:e.fields.map(e=>{let i=(0,w.a)(c,e),a=i?s.field(i):void 0,r=a?.label??s.fieldLabel(e);return(0,t.jsx)(x.f,{name:e,control:Q.control,label:r,fieldType:a?.fieldType||"text",options:a?.picklistOptions,lookupObjectType:a?.lookupObjectType,dataTestId:`${n}-add-${e}`},e)})}),"missing"===X&&(0,t.jsx)(q,{role:"alert","data-testid":`${n}-pricebook-missing`,children:l("entityForm.relatedObjects.pricebookMissing",{defaultValue:"Dieses Produkt hat keinen aktiven Preisbucheintrag im Standard-Preisbuch — bitte in Salesforce anlegen, dann die Position erneut hinzufügen."})}),(0,t.jsxs)(L,{children:[(0,t.jsx)(F.f,{type:"button",onClick:()=>{Q.reset(),m(!1)},modifier:k.j.TERTIARY,dataTestId:`${n}-cancel-btn`,children:l("entityForm.actions.cancel",{defaultValue:"Abbrechen"})}),(0,t.jsx)(F.f,{type:"button",onClick:er,modifier:k.j.PRIMARY,dataTestId:`${n}-confirm-btn`,disabled:"missing"===X||"checking"===X,children:l("entityForm.relatedObjects.confirm",{defaultValue:"Hinzufügen"})})]})]})})]})}let Y=e.i(364117).InputFile;var H=e.i(393194);let K=new Set(["Id","CreatedDate","CreatedById","LastModifiedDate","LastModifiedById","SystemModstamp","IsDeleted","LastViewedDate","LastReferencedDate","LastActivityDate","MasterRecordId","PhotoUrl","SmallPhotoUrl","MediumPhotoUrl","FullPhotoUrl","BannerPhotoUrl","CaseNumber","OrderNumber","ContractNumber","InvoiceNumber","QuoteNumber"]),Q={Opportunity:["IsClosed","IsWon","HasOpenActivity","ExpectedRevenue"],Order:["TotalAmount","ActivatedDate"],OrderItem:["TotalPrice","ListPrice"],Case:["IsClosed"],Task:["IsClosed","IsRecurrence"],Invoice:["Total__c"]},Z=[/__f$/,/Formula/,/Rollup/];function J(e,t){if(K.has(t))return!0;let i=Q[e];if(i?.includes(t))return!0;for(let e of Z)if(e.test(t))return!0;return!1}var X=e.i(223963),ee=e.i(251604),et=e.i(862078),ei=e.i(409643),ea=e.i(844771),er=e.i(49958),en=e.i(484233);e.i(913622);var el=e.i(221622),ed=e.i(821054),eo=e.i(456340);let es=l.U.div.withConfig({displayName:"GenericEntityForm__FormContainer",componentId:"sc-6dbd7b3f-0"})`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-height: 70vh;
  overflow-y: auto;
  padding-right: 0.5rem;
`,ec=l.U.div.withConfig({displayName:"GenericEntityForm__StepperContainer",componentId:"sc-6dbd7b3f-1"})`
  padding-bottom: 1rem;
  border-bottom: 1px solid ${({theme:e})=>e.palette.border.default};
  margin-bottom: 0.5rem;
`,ep=l.U.div.withConfig({displayName:"GenericEntityForm__StepContent",componentId:"sc-6dbd7b3f-2"})`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  flex: 1;
`,eu=l.U.div.withConfig({displayName:"GenericEntityForm__Section",componentId:"sc-6dbd7b3f-3"})`
  padding: 1rem;
  background: ${({theme:e})=>e.palette.default.white};
  border-radius: 6px;
  border: 1px solid ${({theme:e})=>e.palette.border.default};
`,ef=l.U.h4.withConfig({displayName:"GenericEntityForm__SectionTitle",componentId:"sc-6dbd7b3f-4"})`
  margin: 0 0 1rem 0;
  font-size: 1rem;
  font-weight: 600;
  color: ${({theme:e})=>e.palette.text.primary};
  padding-bottom: 0.5rem;
  border-bottom: 1px solid ${({theme:e})=>e.palette.border.default};
`,em=l.U.div.withConfig({displayName:"GenericEntityForm__FieldGrid",componentId:"sc-6dbd7b3f-5"})`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,ey=l.U.div.withConfig({displayName:"GenericEntityForm__FormActions",componentId:"sc-6dbd7b3f-6"})`
  display: flex;
  gap: 0.75rem;
  justify-content: space-between;
  padding-top: 1rem;
  border-top: 1px solid ${({theme:e})=>e.palette.border.default};
  position: sticky;
  bottom: 0;
  background: ${({theme:e})=>e.palette.default.white};
  margin-top: auto;
`,eg=l.U.div.withConfig({displayName:"GenericEntityForm__ActionGroup",componentId:"sc-6dbd7b3f-7"})`
  display: flex;
  gap: 0.75rem;
`,eh=l.U.p.withConfig({displayName:"GenericEntityForm__ErrorMessage",componentId:"sc-6dbd7b3f-8"})`
  color: ${({theme:e})=>e.palette.default.error};
  margin-top: 0.5rem;
  font-size: 0.875rem;
`,eb=l.U.div.withConfig({displayName:"GenericEntityForm__NoConfigMessage",componentId:"sc-6dbd7b3f-9"})`
  padding: 2rem;
  text-align: center;
  color: ${({theme:e})=>e.palette.text.muted};
`,ex=l.U.p.withConfig({displayName:"GenericEntityForm__EmptyStateMessage",componentId:"sc-6dbd7b3f-10"})`
  color: ${({theme:e})=>e.palette.text.muted};
  font-size: 0.875rem;
  text-align: center;
  padding: 2rem;
  margin: 0;
`,ej=l.U.div.withConfig({displayName:"GenericEntityForm__ParentRelationshipBanner",componentId:"sc-6dbd7b3f-11"})`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  background: ${({theme:e})=>`${e.palette.default.secondary}15`};
  border: 1px solid ${({theme:e})=>`${e.palette.default.secondary}40`};
  border-radius: 6px;
  font-size: 0.875rem;
  color: ${({theme:e})=>e.palette.default.secondary};
  margin-bottom: 0.5rem;

  strong {
    font-weight: 600;
  }
`,eF=l.U.p.withConfig({displayName:"GenericEntityForm__RelatedIncompleteHint",componentId:"sc-6dbd7b3f-12"})`
  margin: 0;
  padding: 8px 12px;
  border-left: 3px solid ${({theme:e})=>e.palette.status.warning.border};
  background: ${({theme:e})=>e.palette.status.warning.bg};
  color: ${({theme:e})=>e.palette.status.warning.text};
  font-size: 13px;
`;function ek(e,t){return!e.visibleForRoles||0===e.visibleForRoles.length||!t||e.visibleForRoles.includes(t)}function e$(e,t){return!!(!e.visibleForRoles||0===e.visibleForRoles.length||!t||e.visibleForRoles.includes(t))||e.fields.some(e=>e.visibleForRoles?.includes(t))}function ew(e){return"reference"===e?"lookup":e}let eI=({entityType:e,entityId:r,mode:n,initialValues:l={},parentEntityType:s,parentEntityId:c,parentEntityName:p,apiPathOverride:u,onSuccess:f,onCancel:m,onDirtyChange:y,liveFillOnMount:g,dataTestId:j="generic-entity-form"})=>{let{tr:$}=(0,h.f)(),w=(0,v.V)(),[I,C]=(0,i.useState)(0),{data:_}=(0,er.useSession)(),S=_?.user?.role,T=(0,i.useMemo)(()=>O.F[e]||e,[e]),N=(0,en.I)(T),E=void 0!==S&&!(0,en.M)(S)&&N.hasAny,V=(0,i.useMemo)(()=>(0,H.f)(e),[e]),R=(0,i.useMemo)(()=>{let t,i,a=(t=O.F[e]||e,i=et.K[t],"create"===n&&("user"===S||"rigk"===S)&&i?.createSections&&i.createSections.length>0?i.createSections:i?.sections&&i.sections.length>0?i.sections:null);return a?a.map(w.section):null},[e,n,S,w]),U=null!==R,M=(0,i.useCallback)(e=>!!("create"===n&&V?.hiddenInCreate?.includes(e)),[n,V]),P=(0,i.useMemo)(()=>{let t={_files:[],_relatedObjects:{}};U&&R&&R.forEach(i=>{e$(i,S)&&i.fields.forEach(i=>{!ek(i,S)||M(i.apiName)||"create"===n&&i.readOnly||J(e,i.apiName)&&"create"===n||("boolean"===ew(i.fieldType)?t[i.apiName]=!1:t[i.apiName]="")})});let i="create"===n?V?.createDefaults??{}:{};return{...t,...i,...l}},[R,V,U,e,l,S,n,M]),D=(0,i.useMemo)(()=>{let t=new Set;return U&&R&&R.forEach(i=>{e$(i,S)&&i.fields.forEach(i=>{!ek(i,S)||M(i.apiName)||"view"!==n&&i.readOnly||"edit"===n&&i.readOnlyOnEdit||J(e,i.apiName)&&"view"!==n||t.add(i.apiName)})}),t},[U,R,S,n,e,M]),A=(0,i.useMemo)(()=>{let e={document:!1,shared:!1,qualification:!1};if(!E)return e;for(let t of D)N.documentRelevantFields.has(t)&&(e.document=!0),N.customerSharedFields.has(t)&&(e.shared=!0),N.qualificationFields.has(t)&&(e.qualification=!0);return e},[E,D,N]),z=(0,d.G)({defaultValues:P,mode:"onBlur"}),{control:L,handleSubmit:q,trigger:B,formState:{isSubmitting:K,dirtyFields:Q,isDirty:Z}}=z;(0,i.useEffect)(()=>{y?.(Z)},[Z,y]);let eI=(0,d.h)({control:L}),ev=(0,i.useMemo)(()=>(R??[]).flatMap(e=>e.fields.filter(e=>e.dependsOn)),[R]),eO=(0,i.useRef)({});(0,i.useEffect)(()=>{for(let e of ev){let t=e.dependsOn,i=eI[t.field],a=t.field in eO.current,r=eO.current[t.field];a&&!(null==r||""===r||Array.isArray(r)&&0===r.length)&&r!==i&&eI[e.apiName]&&z.setValue(e.apiName,"",{shouldDirty:!0}),eO.current[t.field]=i}},[ev,eI,z]);let eC=(0,i.useRef)(!1);(0,i.useEffect)(()=>{if("create"!==n||eC.current||0===ev.length)return;eC.current=!0;let e=l??{};(async()=>{for(let t of ev){let i=e[t.apiName],r=(0,ei.d)(t,e);if("string"==typeof i&&i&&r&&t.lookupObjectType)try{let e=await a.k.get(`/salesforce/lookup?objectType=${t.lookupObjectType}&q=${i}&limit=1${(0,ei.n)(r)}`);if(z.getValues(t.apiName)!==i)continue;e.data.records?.[0]?.matchesFilter===!1&&(z.setValue(t.apiName,"",{shouldDirty:!0}),o.c.warning($("entityForm.dependsOn.prefillCleared",{defaultValue:'„{{field}}" wurde geleert: der vorbefüllte Wert passt nicht zu „{{controllingField}}".',field:t.label||w.fieldLabel(t.apiName),controllingField:w.fieldLabel(t.dependsOn.field)})))}catch{}}})()},[n,ev,l,z,$,w]);let e_=(0,i.useMemo)(()=>"create"===n?et.K[O.F[e]||e]?.createDefaultsEndpoint:void 0,[n,e]),eS=(0,i.useRef)(!1);(0,i.useEffect)(()=>{e_&&!eS.current&&(eS.current=!0,(async()=>{try{let e=await a.k.get(e_);for(let[t,i]of Object.entries(e.data?.defaults??{})){if(!D.has(t))continue;let e=z.getValues(t);(null==e||""===e)&&z.setValue(t,i,{shouldDirty:!1})}}catch{}})())},[e_,D,z]);let eT=(0,i.useMemo)(()=>"create"===n?(0,ea.V)(e):[],[n,e]),eN=(0,i.useRef)({}),eE=(0,i.useRef)(!1);(0,i.useEffect)(()=>{if(0!==eT.length){if(!eE.current)for(let e of(eE.current=!0,eT)){if(g?.includes(e.lookupField))continue;let t=eI[e.lookupField];"string"==typeof t&&""!==t&&(eN.current[e.lookupField]=t)}for(let e of eT){let t=eI[e.lookupField];if("string"!=typeof t||""===t){delete eN.current[e.lookupField];continue}eN.current[e.lookupField]!==t&&(eN.current[e.lookupField]=t,(async()=>{try{let i=await a.k.get(`/salesforce/${e.entityPath}/${t}/`),r=i.data?.data;if(!r)return;let n=z.getValues();if(n[e.lookupField]!==t)return;let l=(0,ea.h)(e,r);for(let[e,t]of Object.entries(l)){if("_relatedObjects"===e){let e=n._relatedObjects??{};for(let[i,a]of Object.entries(t))0===(e[i]??[]).length&&z.setValue(`_relatedObjects.${i}`,a,{shouldDirty:!0});continue}let i=n[e];(null==i||""===i)&&z.setValue(e,t,{shouldDirty:!0})}}catch(i){eN.current[e.lookupField]===t&&delete eN.current[e.lookupField],console.warn("[GenericEntityForm] Live-Vorbefüllung fehlgeschlagen:",i)}})())}}},[eI,eT,z,g]);let eV=(0,i.useMemo)(()=>!(0===I&&V?.requiredFields)||V.requiredFields.filter(e=>D.has(e)).every(e=>{let t=eI[e];return null!=t&&""!==t&&("string"!=typeof t||""!==t.trim())}),[I,V?.requiredFields,eI,D]),eR=(0,i.useMemo)(()=>"create"===n&&G(V?.relatedObjects,eI._relatedObjects),[n,V?.relatedObjects,eI]),{create:eU,update:eM,isLoading:eP,error:eD,invalidateEntityList:eA,invalidateEntityRecord:ez}=(0,ee.Q)(e,{apiPathOverride:u}),eL=(0,i.useMemo)(()=>{if("create"===n){let e=V?.relatedObjects&&1===V.relatedObjects.length?w.text(V.relatedObjects[0].labelPlural):$("entityForm.steps.related",{defaultValue:"Verknüpfungen"});return[{id:"main",label:$("entityForm.steps.main",{defaultValue:"Basisdaten"}),status:I>0?"completed":"active"},{id:"related",label:e,status:I>1?"completed":1===I?"active":"pending",isOptional:!0},{id:"files",label:$("entityForm.steps.files",{defaultValue:"Anhänge"}),status:I>2?"completed":2===I?"active":"pending",isOptional:!0}]}return[{id:"main",label:$("entityForm.steps.main",{defaultValue:"Basisdaten"}),status:"active"}]},[V,I,n,$,w]),eq=eL.length>1,eB=I===eL.length-1,eG=eL[I],eW=(0,i.useCallback)(e=>V?.requiredFields?.includes(e)??!1,[V]),eY=(0,i.useCallback)(async()=>{(eG?.id!=="main"||await B(Array.from(D)))&&C(e=>Math.min(e+1,eL.length-1))},[eG,D,B,eL.length]),eH=(0,i.useCallback)(()=>{C(e=>Math.max(e-1,0))},[]),eK=(0,i.useCallback)(e=>{C(e)},[]),eQ=async(e,t)=>{for(let i of t){let t=new FormData;t.append("file",i),t.append("recordId",e),await a.k.post("/salesforce/files/upload/",t)}},eZ=async(e,t)=>{for(let[i,r]of Object.entries(t)){let t=V?.relatedObjects?.find(e=>e.entityType===i);if(!t||0===r.length)continue;let n=ee.G[i]??i.toLowerCase();for(let i of r){let r={...Object.fromEntries(Object.entries(i).filter(([e])=>!e.startsWith("_"))),[t.parentField]:e};await a.k.post(`/salesforce/${n}/`,r)}eA?.(i)}},eJ=async t=>{if(!("create"===n&&G(V?.relatedObjects,t._relatedObjects)))try{let i,{_files:l,_relatedObjects:d,...s}=t,c={};if(Object.entries(s).forEach(([e,t])=>{e.startsWith("_")||null==t||""===t||(c[e]=t)}),"create"===n)i=(await eU(c)).id;else if("edit"===n&&r){let e={};Object.keys(c).forEach(t=>{Q[t]&&(e[t]=c[t])}),Object.keys(e).length>0&&await eM({id:r,data:e}),i=r}else throw Error("No entity ID for update");if(l&&l.length>0&&await eQ(i,l),d&&Object.keys(d).length>0){try{await eZ(i,d)}catch(t){console.error("Related object creation error:",t),o.c.error($("entityForm.toast.relatedCreateFailed",{defaultValue:"Datensatz angelegt, aber eine Position konnte nicht gespeichert werden: {{error}} Bitte die Position am Datensatz nachtragen.",error:(0,a.d)(t,t instanceof Error?t.message:$("entityForm.toast.unknownError",{defaultValue:"Unbekannter Fehler"}))})),ez?.(e,i),f?.(i);return}ez?.(e,i)}f?.(i)}catch(t){console.error("Form submission error:",t);let e=t instanceof Error?t.message:$("entityForm.toast.unknownSaveError",{defaultValue:"Unbekannter Fehler beim Speichern"});o.c.error($("entityForm.toast.saveError",{defaultValue:"Fehler beim Speichern: {{error}}",error:(0,a.d)(t,e)}))}};return V||U?(0,t.jsx)(d.p,{...z,children:(0,t.jsx)("form",{onSubmit:q(eJ,e=>{let t=Object.keys(e).map(e=>{let t=R?.flatMap(e=>e.fields).find(t=>t.apiName===e);return t?.label||w.fieldLabel(e)||e}).join(", ");o.c.error(t?$("entityForm.toast.requiredFields",{defaultValue:"Bitte Pflichtfelder ausfüllen: {{fields}}",fields:t}):$("entityForm.toast.requiredFieldsAll",{defaultValue:"Bitte alle Pflichtfelder ausfüllen."}))}),children:(0,t.jsxs)(es,{"data-testid":j,children:[eq&&"create"===n&&(0,t.jsx)(ec,{children:(0,t.jsx)(b,{steps:eL,currentStepIndex:I,onStepClick:eK,allowNavigation:!0,dataTestId:`${j}-stepper`})}),"create"===n&&s&&c&&(0,t.jsxs)(ej,{"data-testid":`${j}-parent-banner`,children:[$("entityForm.parentBanner",{defaultValue:"Wird verknüpft mit:"})," ",(0,t.jsx)("strong",{children:w.text(X.p[s]||s)}),p&&(0,t.jsxs)(t.Fragment,{children:[" - ",p]}),(0,t.jsxs)("span",{style:{opacity:.7,fontSize:"0.8em",marginLeft:"0.5rem"},children:["(",c,")"]})]}),(0,t.jsx)(ep,{children:(()=>{switch(eG?.id){case"main":default:return U?(0,t.jsxs)(t.Fragment,{children:[(A.document||A.shared||A.qualification)&&(0,t.jsx)(ed.f,{document:A.document,shared:A.shared,qualification:A.qualification,dataTestId:`${j}-field-marker-legend`}),R.map(i=>{if(!e$(i,S))return null;let a=i.fields.filter(t=>!(!ek(t,S)||M(t.apiName)||"view"!==n&&t.readOnly||"edit"===n&&t.readOnlyOnEdit||J(e,t.apiName)&&"view"!==n));return 0===a.length?null:(0,t.jsxs)(eu,{"data-testid":`${j}-section-${i.id}`,children:[(0,t.jsx)(ef,{children:i.label}),(0,t.jsx)(em,{children:a.map(e=>{let i=ew(e.fieldType),a=eW(e.apiName)||!!e.required,r="view"===n,l=e.picklistOptions?.map(e=>({value:e.value,label:e.label})),d=e.lookupObjectType,o=(0,ei.d)(e,eI),s=!!e.dependsOn&&!o,c=s?$("entityForm.dependsOn.hint",{defaultValue:'Zuerst „{{field}}" wählen',field:w.fieldLabel(e.dependsOn.field)}):void 0,p=(0,t.jsx)(x.f,{name:e.apiName,control:L,label:e.label||w.fieldLabel(e.apiName),fieldType:i,options:l,lookupObjectType:d,lookupFilter:o,required:a,disabled:r||s,placeholder:e.placeholder,helperText:c??e.helpText,currencyCode:e.currencyCode,dataTestId:`${j}-field-${e.apiName}`},e.apiName),u=E&&N.documentRelevantFields.has(e.apiName),f=E&&N.customerSharedFields.has(e.apiName),m=E?N.qualificationFields.get(e.apiName):void 0;return u||f||m?(0,t.jsxs)(eo.O,{"data-testid":`${j}-field-marker-${e.apiName}`,children:[(0,t.jsx)(el.f,{fieldName:e.apiName,document:u,shared:f,qualification:m?{criteria:m,value:eI[e.apiName],record:eI}:void 0,testIdPrefix:`${j}-`}),p]},e.apiName):p})})]},i.id)})]}):null;case"related":return V?.relatedObjects&&V.relatedObjects.length>0?(0,t.jsx)(t.Fragment,{children:V.relatedObjects.map(i=>(0,t.jsx)(W,{config:i,control:L,parentEntityType:e,dataTestId:`${j}-related-${i.entityType}`},i.entityType))}):(0,t.jsxs)(eu,{children:[(0,t.jsx)(ef,{children:$("entityForm.steps.related",{defaultValue:"Verknüpfungen"})}),(0,t.jsx)(ex,{children:$("entityForm.related.empty",{defaultValue:"Für diesen Datensatztyp sind keine Verknüpfungen konfiguriert. Sie können diesen Schritt überspringen."})})]});case"files":return(0,t.jsxs)(eu,{children:[(0,t.jsx)(ef,{children:$("entityForm.steps.files",{defaultValue:"Anhänge"})}),(0,t.jsx)(Y,{name:"_files",control:L,forId:"entity-files",multiple:!0,maxFiles:10,helperText:$("entityForm.files.helper",{defaultValue:"Dateien werden nach dem Erstellen hochgeladen"}),dataTestId:`${j}-files`})]})}})()}),eR&&(0,t.jsx)(eF,{role:"alert","data-testid":`${j}-related-incomplete`,children:$("entityForm.relatedObjects.incomplete",{defaultValue:'Eine Position ist unvollständig — bitte im Schritt „{{step}}" ergänzen oder entfernen.',step:eL.find(e=>"related"===e.id)?.label??""})}),"view"!==n&&(0,t.jsxs)(ey,{children:[(0,t.jsx)(eg,{children:eq&&I>0&&(0,t.jsxs)(F.f,{type:"button",onClick:eH,modifier:k.j.SECONDARY,dataTestId:`${j}-back-btn`,children:["← ",$("entityForm.actions.back",{defaultValue:"Zurück"})]})}),(0,t.jsxs)(eg,{children:[m&&(0,t.jsx)(F.f,{type:"button",onClick:m,modifier:k.j.TERTIARY,dataTestId:`${j}-cancel-btn`,children:$("entityForm.actions.cancel",{defaultValue:"Abbrechen"})}),eq&&!eB?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(F.f,{type:"button",onClick:eY,disabled:!eV,modifier:k.j.PRIMARY,dataTestId:`${j}-next-btn`,children:[$("entityForm.actions.next",{defaultValue:"Weiter"})," →"]}),(0,t.jsx)(F.f,{buttonType:k.O.SUBMIT,disabled:!eV||eR||eP||K,modifier:k.j.SECONDARY,dataTestId:`${j}-create-btn`,children:eP||K?$("entityForm.actions.creating",{defaultValue:"Erstellen..."}):$("entityForm.actions.create",{defaultValue:"Erstellen"})})]}):(0,t.jsx)(F.f,{buttonType:k.O.SUBMIT,disabled:eR||eP||K,modifier:k.j.PRIMARY,dataTestId:`${j}-submit-btn`,children:eP||K?$("entityForm.actions.saving",{defaultValue:"Speichern..."}):"create"===n?$("entityForm.actions.create",{defaultValue:"Erstellen"}):$("entityForm.actions.save",{defaultValue:"Speichern"})})]})]}),eD&&(0,t.jsx)(eh,{"data-testid":`${j}-error`,children:$("entityForm.error",{defaultValue:"Fehler: {{message}}",message:eD.message})})]})})}):(0,t.jsx)(eb,{"data-testid":`${j}-no-config`,children:(0,t.jsx)("p",{children:$("entityForm.noConfig",{defaultValue:"Keine Formkonfiguration für {{entityType}} gefunden.",entityType:e})})})},ev=l.U.p.withConfig({displayName:"EntityModal.styles__DiscardText",componentId:"sc-e10d1181-0"})`
  margin: 0 0 16px;
  color: ${({theme:e})=>e.palette.default.black};
`,eO=l.U.div.withConfig({displayName:"EntityModal.styles__DiscardActions",componentId:"sc-e10d1181-1"})`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
`;e.s(["EntityModal",0,({dataTestId:e="entity-modal"})=>{let{isOpen:l,config:d,closeModal:o}=(0,n.E)(),{tr:s}=(0,h.f)(),c=(0,v.V)(),[p,u]=(0,i.useState)(null),[f,m]=(0,i.useState)(null),[y,g]=(0,i.useState)(!1),[b,x]=(0,i.useState)(!1),[j,$]=(0,i.useState)(!1);(0,i.useEffect)(()=>{l||(x(!1),$(!1))},[l]),(0,i.useEffect)(()=>{if(!l||!d?.parentEntityType||!d?.parentEntityId)return void u(null);let e=d.parentEntityType,t=d.parentEntityId;(async()=>{try{let i=ee.$[e]??e.toLowerCase(),r=await a.k.get(`/salesforce/${i}/${t}`),n=r.data.data?.Name||r.data.data?.Subject||r.data.data?.CaseNumber||null;u(n)}catch{}})()},[l,d?.parentEntityType,d?.parentEntityId]),(0,i.useEffect)(()=>{let e=d?.entityId;if(!l||!e){m(null),g(!1);return}let t=d?.apiPathOverride?`${d.apiPathOverride}/`:`/salesforce/${ee.$[d.entityType]}/${e}/`;g(!0),(async()=>{try{let e=await a.k.get(t);m(e.data.data??null)}catch{m(null)}finally{g(!1)}})()},[l,d?.entityId,d?.entityType,d?.apiPathOverride]);let w=(0,i.useMemo)(()=>{if(!d)return{};let e={...f,...d.initialValues};if(d.parentEntityId&&d.parentEntityType){let t=X.j[d.entityType];if(t){let i=t[d.parentEntityType];i&&(e[i]=d.parentEntityId)}}return e},[d,f]),I=(0,i.useMemo)(()=>{if(!d?.parentEntityId||!d.parentEntityType||d.entityId)return;let e=X.j[d.entityType]?.[d.parentEntityType];return e?[e]:void 0},[d]),O=(d?.mode??(d?.entityId?"edit":"create"))==="edit",C=(0,i.useMemo)(()=>{if(d?.title)return d.title;if(d?.entityType){let e=c.text(X.p[d.entityType]||d.entityType);return O?s("entityForm.modal.titleEdit",{defaultValue:"{{entity}} bearbeiten",entity:e}):s("entityForm.modal.titleCreate",{defaultValue:"{{entity}} erstellen",entity:e})}return O?s("common.edit",{defaultValue:"Bearbeiten"}):s("common.create",{defaultValue:"Erstellen"})},[d,O,s,c]),_=()=>{b?$(!0):o()};return d&&(O||(0,X.s)(d.entityType))?(0,t.jsxs)(r.f,{isOpen:l,onClose:_,title:C,size:"large",dataTestId:e,closeOnBackdropClick:!1,children:[(0,t.jsxs)(r.f,{isOpen:j,onClose:()=>$(!1),title:s("entityForm.modal.discardTitle",{defaultValue:"Änderungen verwerfen?"}),size:"small",closeOnBackdropClick:!1,dataTestId:`${e}-discard`,children:[(0,t.jsx)(ev,{children:s("entityForm.modal.discardText",{defaultValue:"Das Formular enthält ungespeicherte Eingaben. Beim Schließen gehen sie verloren."})}),(0,t.jsxs)(eO,{children:[(0,t.jsx)(F.f,{type:"button",modifier:k.j.TERTIARY,onClick:()=>$(!1),dataTestId:`${e}-discard-keep`,children:s("entityForm.modal.keepEditing",{defaultValue:"Weiter bearbeiten"})}),(0,t.jsx)(F.f,{type:"button",modifier:k.j.DANGER,onClick:()=>{$(!1),x(!1),o()},dataTestId:`${e}-discard-confirm`,children:s("entityForm.modal.discard",{defaultValue:"Verwerfen"})})]})]}),O&&y?(0,t.jsx)("div",{"data-testid":`${e}-edit-loading`,style:{padding:"24px 0"},children:s("entityForm.modal.loading",{defaultValue:"Lade Daten…"})}):(0,t.jsx)(eI,{entityType:d.entityType,entityId:d.entityId,mode:O?"edit":"create",initialValues:w,parentEntityType:d.parentEntityType,parentEntityId:d.parentEntityId,parentEntityName:p,apiPathOverride:d.apiPathOverride,isInModal:!0,onSuccess:e=>{x(!1),$(!1),d?.onSuccess?.(e),o()},onCancel:_,onDirtyChange:x,liveFillOnMount:I})]}):null}],95938)},777950,function(e){e.n(e.i(95938))}]);