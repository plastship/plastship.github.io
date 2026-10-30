(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,[538594,e=>{var t=e.i(843476),i=e.i(997053);let r=i.U.svg.withConfig({displayName:"IconDownload.styles__Root",componentId:"sc-985edd3b-0"})``;e.s(["f",0,e=>(0,t.jsx)(r,{className:e.className,"data-testid":"icon-download-root",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("path",{d:"M8.01562 15.784H5.21429C3.43908 15.784 2 14.5585 2 12.7614C2 10.9644 3.43908 9.50762 5.21429 9.50762C5.335 9.50762 5.45417 9.51436 5.57143 9.52748V9.50762H5.61564C5.58646 9.27074 5.57143 9.02942 5.57143 8.78455C5.57143 5.58983 8.1298 3 11.2857 3C13.4228 3 15.2859 4.1876 16.2661 5.94642C16.5056 5.91075 16.7507 5.89227 17 5.89227C19.7614 5.89227 22 8.15838 22 10.9538C22 13.5036 20.1374 15.3819 17.7143 15.7328H15.125M11.6429 9.86915V21M11.6429 21L9.10937 18.5008M11.6429 21L14.1094 18.5008",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})],538594)},481804,e=>{let t=e.i(538594).f;e.s(["f",0,t])},681718,e=>{let t=e.i(640467).f;e.s(["f",0,t])},663569,30436,e=>{var t=e.i(843476),i=e.i(271645),r=e.i(978476),n=e.i(997053);let o={small:"2.5rem",medium:"3.5rem"},a=n.m`
  position: relative;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.125rem;
  width: ${({$size:e})=>o[e]};
  height: ${({$size:e})=>o[e]};
  flex-shrink: 0;
  padding: 0;
  overflow: hidden;
  border: 1px solid ${({theme:e})=>e.palette.default.greyLight};
  border-radius: 6px;
  background-color: ${({theme:e})=>e.palette.default.primary}12;
  color: ${({theme:e})=>e.palette.default.primary};
  font-family: inherit;
  box-sizing: border-box;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  svg {
    width: 1.125rem;
    height: 1.125rem;
  }
`,l=n.U.button.withConfig({displayName:"FileThumbnail.styles__ThumbButton",componentId:"sc-3f23192f-0"})`
  ${a}
  cursor: pointer;

  &:hover {
    border-color: ${({theme:e})=>e.palette.default.primary};
  }

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.palette.default.primary};
    outline-offset: 1px;
  }
`,s=n.U.span.withConfig({displayName:"FileThumbnail.styles__ThumbStatic",componentId:"sc-3f23192f-1"})`
  ${a}
`,d=n.U.span.withConfig({displayName:"FileThumbnail.styles__TypeLabel",componentId:"sc-3f23192f-2"})`
  font-size: 0.5625rem;
  font-weight: 700;
  line-height: 1;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
`;e.s(["f",0,({name:e,extension:n,kind:o,imageUrl:a,onClick:c,ariaLabel:u,size:p="small",dataTestId:f="file-thumbnail"})=>{let[h,m]=(0,i.useState)(!1),g="image"===o&&!!a&&!h,x=(n??"").replace(/^\.+/,"").slice(0,5),w=g?(0,t.jsx)("img",{src:a,alt:"",loading:"lazy",onError:()=>m(!0)}):(0,t.jsxs)(t.Fragment,{children:[(0,r.f)(e),x&&(0,t.jsx)(d,{children:x})]}),b={"data-testid":f,"data-kind":o??"none","data-thumbnail":g?"image":"tile"};return c?(0,t.jsx)(l,{type:"button",$size:p,onClick:c,"aria-label":u,...b,children:w}):(0,t.jsx)(s,{$size:p,"aria-hidden":"true",...b,children:w})}],30436),e.s([],663569)},662459,620959,227853,650942,e=>{var t=e.i(843476),i=e.i(271645),r=e.i(174080),n=e.i(573236),o=e.i(499911),a=e.i(616789),l=e.i(481804);e.i(867428);var s=e.i(793300),d=e.i(157067),c=e.i(346933),u=e.i(458668);e.i(821194);var p=e.i(99222),f=e.i(678839),h=e.i(997053),m=e.i(351754);let g=h.U.section.withConfig({displayName:"DocumentViewer.styles__Root",componentId:"sc-cb5db826-0"})`
  position: fixed;
  display: flex;
  flex-direction: row;

  /* Schmal: Seitenleiste (#1878) unter dem Dokument statt daneben */
  @media only screen and (max-width: 1024px) {
    flex-direction: column;
  }

  ${({$layer:e,$drawerOpen:t})=>"dialog"===e?h.m`
          inset: 0;
          z-index: ${m.f.overlayTop};
          padding: 1rem;
          background-color: rgba(0, 0, 0, 0.55);

          @media only screen and (max-width: 768px) {
            padding: 0;
          }
        `:h.m`
          top: 56px;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: ${m.f.viewer};

          /* Desktop: endet an der linken Kante des offenen Drawers (400px) */
          @media only screen and (min-width: 1024px) {
            right: ${t?"400px":"0"};
          }

          /* Mobil: über der BottomTabBar enden (wie der Drawer) */
          @media only screen and (max-width: 1024px) {
            bottom: calc(50px + env(safe-area-inset-bottom, 0px));
          }
        `}

  &:focus {
    outline: none;
  }
`,x=h.U.div.withConfig({displayName:"DocumentViewer.styles__Panel",componentId:"sc-cb5db826-1"})`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
  min-width: 0;
  background-color: ${({theme:e})=>e.palette.default.white};
  border-left: 1px solid ${({theme:e})=>e.palette.default.greyLight};
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.18);
  border-radius: ${({$layer:e})=>"dialog"===e?"8px":"0"};
  overflow: hidden;
`,w=h.U.aside.withConfig({displayName:"DocumentViewer.styles__SidePanel",componentId:"sc-cb5db826-2"})`
  display: flex;
  flex-direction: column;
  flex: 0 0 440px;
  width: 440px;
  min-height: 0;

  @media only screen and (min-width: 1280px) {
    flex-basis: 500px;
    width: 500px;
  }

  @media only screen and (min-width: 1600px) {
    flex-basis: 560px;
    width: 560px;
  }
  background-color: ${({theme:e})=>e.palette.default.white};
  border-left: 1px solid ${({theme:e})=>e.palette.default.greyLight};
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.18);
  border-radius: ${({$layer:e})=>"dialog"===e?"0 8px 8px 0":"0"};
  overflow: hidden;

  @media only screen and (max-width: 1024px) {
    flex: 0 0 auto;
    width: 100%;
    max-height: 48%;
    border-left: none;
    border-top: 1px solid ${({theme:e})=>e.palette.default.greyLight};
  }
`,b=h.U.header.withConfig({displayName:"DocumentViewer.styles__Header",componentId:"sc-cb5db826-3"})`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  border-bottom: 1px solid ${({theme:e})=>e.palette.default.greyLight};
  flex-shrink: 0;
  flex-wrap: wrap;
`,k=h.U.h2.withConfig({displayName:"DocumentViewer.styles__Title",componentId:"sc-cb5db826-4"})`
  flex: 1;
  min-width: 8rem;
  margin: 0;
  font-size: 0.9375rem;
  font-weight: 600;
  color: ${({theme:e})=>e.palette.default.black};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,y=h.U.span.withConfig({displayName:"DocumentViewer.styles__Counter",componentId:"sc-cb5db826-5"})`
  font-size: 0.8125rem;
  font-variant-numeric: tabular-nums;
  color: ${({theme:e})=>e.palette.default.secondary};
  white-space: nowrap;
`,_=h.U.div.withConfig({displayName:"DocumentViewer.styles__Actions",componentId:"sc-cb5db826-6"})`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  flex-wrap: wrap;
`,C=h.m`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.375rem;
  min-width: 2.25rem;
  height: 2.25rem;
  padding: 0 0.5rem;
  border: 1px solid ${({theme:e})=>e.palette.default.greyLight};
  border-radius: 6px;
  background-color: ${({theme:e})=>e.palette.default.white};
  color: ${({theme:e})=>e.palette.default.black};
  font-size: 0.8125rem;
  font-family: inherit;
  text-decoration: none;
  cursor: pointer;
  box-sizing: border-box;

  &:hover:not(:disabled) {
    border-color: ${({theme:e})=>e.palette.default.primary};
  }

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.palette.default.primary};
    outline-offset: 1px;
  }

  &:disabled {
    opacity: 0.4;
    cursor: default;
  }

  svg {
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;
  }
`,j=h.U.button.withConfig({displayName:"DocumentViewer.styles__ToolButton",componentId:"sc-cb5db826-7"})`
  ${C}
`,v=h.U.a.withConfig({displayName:"DocumentViewer.styles__ToolLink",componentId:"sc-cb5db826-8"})`
  && {
    ${C}
  }
`,V=h.U.div.withConfig({displayName:"DocumentViewer.styles__Body",componentId:"sc-cb5db826-9"})`
  position: relative;
  flex: 1;
  min-height: 0;
  overflow: auto;
  background-color: ${({theme:e})=>e.palette.default.greyLight};
`,$=h.U.div.withConfig({displayName:"DocumentViewer.styles__CenterState",componentId:"sc-cb5db826-10"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  min-height: 100%;
  padding: 2rem 1rem;
  box-sizing: border-box;
  text-align: center;
  font-size: 0.875rem;
  color: ${({theme:e})=>e.palette.default.secondary};
`,L=h.U.div.withConfig({displayName:"DocumentViewer.styles__PageList",componentId:"sc-cb5db826-11"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
`,M=h.U.div.withConfig({displayName:"DocumentViewer.styles__PageFrame",componentId:"sc-cb5db826-12"})`
  width: 100%;
  max-width: 960px;
  aspect-ratio: ${({$ratio:e})=>e};
  background-color: #ffffff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);

  canvas {
    display: block;
    width: 100%;
    height: 100%;
  }
`,U=h.U.div.withConfig({displayName:"DocumentViewer.styles__ImageFrame",componentId:"sc-cb5db826-13"})`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100%;
  padding: 0.75rem;
  box-sizing: border-box;

  img {
    max-width: 100%;
    max-height: calc(100vh - 10rem);
    object-fit: contain;
    background-color: #ffffff;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  }
`;e.s(["q",0,_,"F",0,V,"A",0,$,"o",0,y,"i",0,b,"B",0,U,"s",0,M,"H",0,L,"v",0,x,"G",0,g,"y",0,w,"Z",0,k,"O",0,j,"p",0,v],620959);let I=({data:e,onError:r,dataTestId:n})=>{let[o,a]=(0,i.useState)(null),[l,s]=(0,i.useState)([]),d=(0,i.useRef)(r);return((0,i.useEffect)(()=>{d.current=r},[r]),(0,i.useEffect)(()=>{let t=!1,i=null;return(0,f.f)().then(r=>{if(t)return null;let n=r.getDocument({data:new Uint8Array(e.slice(0))});return i=()=>n.destroy(),n.promise}).then(async e=>{if(!e||t)return;let i=[];for(let t=1;t<=e.numPages;t++){let r=(await e.getPage(t)).getViewport({scale:1});i.push({width:r.width,height:r.height})}t||(a(e),s(i))}).catch(e=>{t||d.current(e)}),()=>{t=!0,i&&i()}},[e]),o)?(0,t.jsx)(L,{"data-testid":`${n}-pages`,"data-page-count":l.length,children:l.map((e,i)=>(0,t.jsx)(P,{doc:o,pageNumber:i+1,size:e,dataTestId:`${n}-page-${i+1}`},i))}):null},P=({doc:e,pageNumber:r,size:n,dataTestId:o})=>{let a=(0,i.useRef)(null),l=(0,i.useRef)(null),[s,d]=(0,i.useState)(()=>"u"<typeof IntersectionObserver),[c,u]=(0,i.useState)(0),[p,f]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{let e=a.current;if(!e||"u"<typeof IntersectionObserver)return;let t=new IntersectionObserver(e=>{for(let t of e)d(t.isIntersecting)},{rootMargin:"100% 0px"});return t.observe(e),()=>t.disconnect()},[]),(0,i.useEffect)(()=>{let e=a.current;if(!e)return;let t=()=>u(Math.round(e.clientWidth));if(t(),"u"<typeof ResizeObserver)return;let i=new ResizeObserver(t);return i.observe(e),()=>i.disconnect()},[]),(0,i.useEffect)(()=>{let t=l.current;if(!t)return;if(!s){t.width=0,t.height=0,f(!1);return}let i=!1,o=null,a=(c||n.width)*Math.min(window.devicePixelRatio||1,2)/n.width;return e.getPage(r).then(e=>{if(i)return;let r=e.getViewport({scale:a});return t.width=Math.floor(r.width),t.height=Math.floor(r.height),(o=e.render({canvas:t,viewport:r})).promise}).then(()=>{i||f(!0)}).catch(()=>{}),()=>{i=!0,o?.cancel()}},[e,r,n.width,s,c]),(0,t.jsx)(M,{ref:a,$ratio:n.width/n.height,"data-testid":o,"data-rendered":p?"true":"false",children:(0,t.jsx)("canvas",{ref:l})})};async function N(e){if(e.loadData)return e.loadData();if(!e.previewUrl)throw Error("no preview source");let t=await fetch(e.previewUrl,{credentials:"same-origin"});if(!t.ok)throw Error(`preview request failed: ${t.status}`);return t.blob()}e.s(["f",0,({items:e,index:f,onIndexChange:h,onClose:m,layer:C="content",renderActions:L,renderHeaderActions:M,panel:P,emptyState:S,emptyTitle:D,dataTestId:H="document-viewer"})=>{let{tr:O}=(0,p.f)(),T=(0,d.m)(),z=(0,i.useRef)(null),[A,E]=(0,i.useState)(!1);(0,i.useEffect)(()=>{E(!0)},[]);let R=e.length,W=0===R?0:Math.min(Math.max(f,0),R-1),F=e[W],[q,B]=function(e){let[t,r]=(0,i.useState)({status:"loading"}),n=(0,i.useCallback)(()=>r({status:"error"}),[]);return(0,i.useEffect)(()=>{if(!e||!e.kind||!e.previewUrl&&!e.loadData)return void r({status:"none"});if("image"===e.kind&&e.previewUrl&&!e.loadData)return void r({status:"image",src:e.previewUrl});let t=!1,i=null;return r({status:"loading"}),N(e).then(async n=>{if(!t)if("pdf"===e.kind){let e=await n.arrayBuffer();t||r({status:"pdf",data:e})}else r({status:"image",src:i=URL.createObjectURL(n)})}).catch(()=>{t||r({status:"error"})}),()=>{t=!0,i&&URL.revokeObjectURL(i)}},[e?.id,e?.previewUrl,e?.kind]),[t,n]}(F),K=(0,i.useCallback)(()=>{R>1&&h((W-1+R)%R)},[R,W,h]),X=(0,i.useCallback)(()=>{R>1&&h((W+1)%R)},[R,W,h]);(0,c.f)(!0,z,{onClose:m,closeOnEscape:!1,mounted:A,lockScroll:!1});let Z=(0,i.useRef)({onClose:m,showPrevious:K,showNext:X,layer:C});if((0,i.useEffect)(()=>{Z.current={onClose:m,showPrevious:K,showNext:X,layer:C}},[m,K,X,C]),(0,i.useEffect)(()=>{let e=e=>{let t=Z.current;if("content"===t.layer&&(0,u.e)())return;let i=e.target instanceof Element?e.target:null;(0,u.v)(i)||e.altKey||e.ctrlKey||e.metaKey||("Escape"===e.key?("dialog"===t.layer&&e.stopPropagation(),e.preventDefault(),t.onClose()):"ArrowLeft"===e.key?(e.preventDefault(),t.showPrevious()):"ArrowRight"===e.key&&(e.preventDefault(),t.showNext()))};return window.addEventListener("keydown",e,!0),()=>window.removeEventListener("keydown",e,!0)},[]),!A||!F&&!S)return null;let Y=O("documentViewer.download",{defaultValue:"Herunterladen"}),G=O("documentViewer.counter",{defaultValue:"{{current}} / {{total}}",current:W+1,total:R});function J(e,i){return F?F.downloadUrl?(0,t.jsxs)(v,{href:F.downloadUrl,download:F.name,"aria-label":Y,title:Y,"data-testid":e,children:[(0,t.jsx)(l.f,{}),i&&Y]}):F.onDownload?(0,t.jsxs)(j,{type:"button",onClick:F.onDownload,"aria-label":Y,title:Y,"data-testid":e,children:[(0,t.jsx)(l.f,{}),i&&Y]}):null:null}let Q=(0,t.jsxs)(g,{ref:z,$layer:C,$drawerOpen:"content"===C&&!!T?.isRightSidebarOpen,role:"dialog","aria-modal":"dialog"===C?"true":"false","aria-labelledby":`${H}-title`,tabIndex:-1,"data-testid":H,"data-layer":C,"data-item-id":F?.id??"none","data-kind":F?.kind??"none","data-index":W,"data-count":R,"data-state":F?q.status:"empty","data-panel":P?"true":"false",children:[(0,t.jsxs)(x,{$layer:C,children:[(0,t.jsxs)(b,{children:[(0,t.jsx)(k,{id:`${H}-title`,title:F?.name??D??"","data-testid":`${H}-title`,children:F?.name??D??""}),R>1&&(0,t.jsx)(y,{"data-testid":`${H}-counter`,children:G}),(0,t.jsxs)(_,{children:[R>1&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(j,{type:"button",onClick:K,"aria-label":O("documentViewer.previous",{defaultValue:"Vorheriges Dokument"}),title:O("documentViewer.previous",{defaultValue:"Vorheriges Dokument"}),"data-testid":`${H}-prev`,children:(0,t.jsx)(n.f,{})}),(0,t.jsx)(j,{type:"button",onClick:X,"aria-label":O("documentViewer.next",{defaultValue:"Nächstes Dokument"}),title:O("documentViewer.next",{defaultValue:"Nächstes Dokument"}),"data-testid":`${H}-next`,children:(0,t.jsx)(o.f,{})})]}),F&&L?.(F),M?.(),J(`${H}-download`,!1),(0,t.jsx)(j,{type:"button",onClick:m,"aria-label":O("documentViewer.close",{defaultValue:"Vorschau schließen"}),title:O("documentViewer.close",{defaultValue:"Vorschau schließen"}),"data-testid":`${H}-close`,"data-autofocus":!0,children:(0,t.jsx)(a.f,{})})]})]}),(0,t.jsx)(V,{"data-testid":`${H}-body`,children:F?"loading"===q.status?(0,t.jsx)($,{"data-testid":`${H}-loading`,children:(0,t.jsx)(s.f,{})}):"pdf"===q.status?(0,t.jsx)(I,{data:q.data,onError:B,dataTestId:H},F.id):"image"===q.status?(0,t.jsx)(U,{"data-testid":`${H}-image`,children:(0,t.jsx)("img",{src:q.src,alt:F.name,onError:B})}):(0,t.jsxs)($,{"data-testid":"error"===q.status?`${H}-error`:`${H}-no-preview`,children:[(0,t.jsx)("span",{children:"error"===q.status?O("documentViewer.loadError",{defaultValue:"Die Vorschau konnte nicht geladen werden."}):O("documentViewer.noPreview",{defaultValue:"Für diese Datei gibt es keine Vorschau."})}),J(`${H}-fallback-download`,!0)]}):(0,t.jsx)($,{"data-testid":`${H}-empty`,children:S})})]}),P&&(0,t.jsx)(w,{$layer:C,"data-testid":`${H}-panel`,children:P})]});return(0,r.createPortal)(Q,document.body)}],227853),e.s([],662459);let S={pdf:{kind:"pdf",contentType:"application/pdf"},png:{kind:"image",contentType:"image/png"},jpg:{kind:"image",contentType:"image/jpeg"},jpeg:{kind:"image",contentType:"image/jpeg"},gif:{kind:"image",contentType:"image/gif"},webp:{kind:"image",contentType:"image/webp"}};function D(e){return(e??"").trim().replace(/^\.+/,"").toLowerCase()}e.s(["k",0,function(e){let t=(e??"").trim(),i=t.lastIndexOf(".");return i>0?D(t.slice(i+1)):""},"q",0,function(e){return S[D(e)]?.kind??null},"O",0,function(e){let t=e.indexOf("?"),i=t<0?e:e.slice(0,t),r=t<0?"":e.slice(t+1),n=i.endsWith("/")?i:`${i}/`;return`${n}?${r?`${r}&`:""}disposition=inline`}],650942)},2975,e=>{var t=e.i(860844),i=e.i(650942);e.s(["f",0,function(e){return e.filter(e=>!!e.downloadUrl).map(e=>{let r=(0,i.q)(e.fileExtension);return{id:e.id,name:(0,t.Y)(e.title,e.fileExtension),kind:r,previewUrl:r?(0,i.O)(e.downloadUrl):void 0,downloadUrl:e.downloadUrl}})}])},787766,e=>{e.s(["F",0,{Contract:"Contract",Account:"Account",Contact:"Contact",Opportunity:"Opportunity",Case:"Case",Task:"Task",Order:"Order",OrderItem:"OrderItem",Project:"Projekt__c",CostCenter:"Kostenstelle_plastship__c",Invoice:"Abrechnung__c",MaterialAnalysis:"Materialanalyse__c",MaterialProposal:"Material_Proposal__c",MonitoredMaterial:"Monitored_Material__c",Requirement:"Bedarfe__c",SampleFeedback:"Sample_Feedback__c",SampleSending:"Sample_Sending__c",SupplierAudit:"Supplier_Audit__c",Onboarding:"Onboarding__c",ContactHandover:"Kontakt_bergaben__c",CompanyCertificate:"Unternehmenszertifikat__c",Certificate:"Zertifikate__c",AuditProperty:"AuditProperty__c",ProductionSite:"Produktionsstandort__c",Product:"Product2",Lohn:"Lohn__c",Reklamation:"Reklamation__c",AktuellerPreisUndVerfugbarkeit:"Aktueller_Preis_und_Verf_gbarkeit__c",Prozessfeedback:"Prozessfeedback__c",Notification:"Notification",User:"User",TravelExpense:"TravelExpense"},"y",0,{Account:"Account",Contact:"Contact",Opportunity:"Opportunity",Case:"Case",Task:"Task",Order:"Order",OrderItem:"OrderItem",Contract:"Contract",Projekt__c:"Project",Abrechnung__c:"Invoice",Materialanalyse__c:"MaterialAnalysis",Bedarfe__c:"Requirement",Material_Proposal__c:"MaterialProposal",Monitored_Material__c:"MonitoredMaterial",Sample_Feedback__c:"SampleFeedback",Sample_Sending__c:"SampleSending",Supplier_audit__c:"SupplierAudit",Supplier_Audit__c:"SupplierAudit",Onboarding__c:"Onboarding",Kontakt_bergaben__c:"ContactHandover",Unternehmenszertifikat__c:"CompanyCertificate",Zertifikate__c:"Certificate",AuditProperty__c:"AuditProperty",Produktionsstandort__c:"ProductionSite",Product2:"Product",Reklamation__c:"Reklamation",Prozessfeedback__c:"Prozessfeedback",Aktueller_Preis_und_Verf_gbarkeit__c:"AktuellerPreisUndVerfugbarkeit",Lohn__c:"Lohn",User:"User",Notification:"Notification"}])},978476,305901,e=>{var t=e.i(843476);let i=e.i(513865).f;e.s(["f",0,i],305901);var r=e.i(681718),n=e.i(997053);let o=n.U.svg.withConfig({displayName:"IconFileXlsx.styles__Root",componentId:"sc-813469d0-0"})``,a=e=>(0,t.jsxs)(o,{className:e.className,"data-testid":"icon-file-xlsx-root",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:[(0,t.jsx)("title",{children:"file-xlsx"}),(0,t.jsxs)("g",{fill:"currentColor",strokeLinecap:"square",strokeLinejoin:"miter",strokeMiterlimit:"10",children:[(0,t.jsx)("path",{d:"M22.2407 21H22.2786L18.9613 15H19",stroke:"currentColor",strokeWidth:"2",fill:"none"}),(0,t.jsx)("path",{d:"M5 21H5.0379L1.7206 15H1.75927",stroke:"currentColor",strokeWidth:"2",fill:"none"}),(0,t.jsx)("path",{d:"M22.2114 15H22.2493L18.9613 21H19",stroke:"currentColor",strokeWidth:"2",fill:"none"}),(0,t.jsx)("path",{d:"M5 15H5.0379L1.74989 21H1.78856",stroke:"currentColor",strokeWidth:"2",fill:"none"}),(0,t.jsx)("path",{d:"M4 9H11V2",stroke:"currentColor",strokeWidth:"2",fill:"none",strokeLinecap:"butt"}),(0,t.jsx)("path",{d:"M4 11V9.07843C4 8.54799 4.21071 8.03929 4.58579 7.66421L9.66421 2.58579C10.0393 2.21071 10.548 2 11.0784 2H18C19.1046 2 20 2.89543 20 4V11",stroke:"currentColor",strokeWidth:"2",fill:"none"}),(0,t.jsx)("path",{d:"M8 15L8 21H10.5",stroke:"currentColor",strokeWidth:"2",fill:"none"}),(0,t.jsx)("path",{d:"M15.5 15H14C13.1716 15 12.5 15.6716 12.5 16.5V16.5C12.5 17.3284 13.1716 18 14 18H15C15.8284 18 16.5 18.6716 16.5 19.5V19.5C16.5 20.3284 15.8284 21 15 21H13.5",stroke:"currentColor",strokeWidth:"2",fill:"none"})]})]}),l=n.U.svg.withConfig({displayName:"IconFileDocx.styles__Root",componentId:"sc-4deae42c-0"})``,s=e=>(0,t.jsxs)(l,{className:e.className,"data-testid":"icon-file-docx-root",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:[(0,t.jsx)("title",{children:"file-docx"}),(0,t.jsxs)("g",{fill:"currentColor",strokeLinecap:"square",strokeLinejoin:"miter",strokeMiterlimit:"10",children:[(0,t.jsx)("path",{d:"M16 15.1556C15.7723 15.0547 15.5285 15 15.275 15C14.0186 15 13 16.3431 13 18C13 19.6569 14.0186 21 15.275 21C15.5285 21 15.7723 20.9453 16 20.8444",stroke:"currentColor",strokeWidth:"2",fill:"none"}),(0,t.jsx)("path",{d:"M1 15V21H1.5C3.15685 21 4.5 19.6569 4.5 18C4.5 16.3431 3.15685 15 1.5 15H1Z",stroke:"currentColor",strokeWidth:"2",fill:"none"}),(0,t.jsx)("path",{d:"M11 18C11 19.6569 9.99264 21 8.75 21C7.50736 21 6.5 19.6569 6.5 18C6.5 16.3431 7.50736 15 8.75 15C9.99264 15 11 16.3431 11 18Z",stroke:"currentColor",strokeWidth:"2",fill:"none",strokeLinecap:"butt"}),(0,t.jsx)("path",{d:"M22.2407 21H22.2786L18.9613 15H19",stroke:"currentColor",strokeWidth:"2",fill:"none"}),(0,t.jsx)("path",{d:"M22.2502 15H22.2881L19.0001 21H19.0387",stroke:"currentColor",strokeWidth:"2",fill:"none"}),(0,t.jsx)("path",{d:"M4 9H11V2",stroke:"currentColor",strokeWidth:"2",fill:"none",strokeLinecap:"butt"}),(0,t.jsx)("path",{d:"M4 11V9.07843C4 8.54799 4.21071 8.03929 4.58579 7.66421L9.66421 2.58579C10.0393 2.21071 10.548 2 11.0784 2H18C19.1046 2 20 2.89543 20 4V11",stroke:"currentColor",strokeWidth:"2",fill:"none"})]})]}),d=n.U.svg.withConfig({displayName:"IconFileZip.styles__Root",componentId:"sc-ae020515-0"})``,c=e=>(0,t.jsxs)(d,{className:e.className,"data-testid":"icon-file-zip-root",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:[(0,t.jsx)("title",{children:"file-zip"}),(0,t.jsxs)("g",{fill:"currentColor",strokeLinecap:"square",strokeLinejoin:"miter",strokeMiterlimit:"10",children:[(0,t.jsx)("path",{d:"M12 15V22",stroke:"currentColor",strokeWidth:"2",fill:"none"}),(0,t.jsx)("path",{d:"M16 22V15H18C19.3807 15 20.5 16.1193 20.5 17.5V17.5C20.5 18.8807 19.3807 20 18 20H16.5",stroke:"currentColor",strokeWidth:"2",fill:"none"}),(0,t.jsx)("path",{d:"M4 15H8V15.5L4 21.5V22H8",stroke:"currentColor",strokeWidth:"2",fill:"none"}),(0,t.jsx)("path",{d:"M4 9H11V2",stroke:"currentColor",strokeWidth:"2",fill:"none",strokeLinecap:"butt"}),(0,t.jsx)("path",{d:"M4 11V9.07843C4 8.54799 4.21071 8.03929 4.58579 7.66421L9.66421 2.58579C10.0393 2.21071 10.548 2 11.0784 2H18C19.1046 2 20 2.89543 20 4V11",stroke:"currentColor",strokeWidth:"2",fill:"none"})]})]});var u=e.i(759944);e.s(["f",0,function(e,n){let o=(e??"").toLowerCase().split(".").pop()??"",l=(n??"").toLowerCase();return l.includes("pdf")||"pdf"===o?(0,t.jsx)(r.f,{}):l.startsWith("image/")||["png","jpg","jpeg","gif","webp","svg"].includes(o)?(0,t.jsx)(u.f,{}):l.includes("spreadsheet")||l.includes("excel")||["xls","xlsx","csv"].includes(o)?(0,t.jsx)(a,{}):l.includes("word")||l.includes("document")||["doc","docx"].includes(o)?(0,t.jsx)(s,{}):l.includes("zip")||l.includes("compressed")||["zip","7z","rar"].includes(o)?(0,t.jsx)(c,{}):(0,t.jsx)(i,{})}],978476)},301097,e=>{var t=e.i(266027),i=e.i(501496);let r=e=>["salesforce-files",e];e.s(["L",0,r,"h",0,function(e,n={}){return(0,t.f)({queryKey:r(e),queryFn:async()=>(await i.k.get(`/salesforce/files?recordId=${e}`)).data,enabled:!!e&&(n.enabled??!0)})}])},678839,e=>{let t={enableXfa:!1,disableAutoFetch:!0,disableStream:!0,disableRange:!0},i=null;e.s(["f",0,function(){return i||(i=e.A(825834).then(i=>{let r=i.PDFWorker.create({port:e.r(112401)(Worker,{type:"module"})});return{getDocument:e=>i.getDocument({...e,...t,worker:r})}}).catch(e=>{throw i=null,e})),i}])},510914,e=>{e.s(["f",0,function(t,i){return(r,n)=>(function(t,i,r,n){let o="SharedWorker"===t.name,a=e.b,l=[r.map(t=>e.h("string"==typeof t?t:t.path,a)).reverse(),e.X,a],s=["NEXT_DEPLOYMENT_ID","NEXT_CLIENT_ASSET_SUFFIX"];for(let e=0;e<s.length;e++)l.push(globalThis[s[e]]);let d=new URL(e.h(i,a),location.origin),c=JSON.stringify(l);return o?d.searchParams.set("params",c):d.hash="#params="+encodeURIComponent(c),new t(d,n?{...n,type:void 0}:void 0)})(r,t,i,n)}])}],979463,e=>{e.q("/_next/static/media/pdf.worker.min.0zcq5mj7t-qsr.mjs")},112401,e=>{e.v(e.r(510914).f("static/chunks/turbopack-worker-1hrsqshz0gfey.js",["static/chunks/132-oyzsb8-kt.js","static/chunks/2vkgprx6b0jx-.js","static/chunks/turbopack-0y37p0b5yavnu.js","static/chunks/turbopack-2c3mg3r-05n1w.js"]))}]);