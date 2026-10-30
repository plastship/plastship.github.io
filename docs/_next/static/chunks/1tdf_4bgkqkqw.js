(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,920403,e=>{"use strict";var t=e.i(843476),a=e.i(271645),n=e.i(174080),i=e.i(49958),r=e.i(696984),s=e.i(823402),o=e.i(315295),l=e.i(616789);let d=a.default.memo(({isOpen:e,onClick:a,avatarSrc:n})=>{let{tr:i}=(0,r.w)();return(0,t.jsx)(o.K,{$isOpen:e,onClick:a,"aria-label":i(e?"pia.actions.close":"pia.title"),"data-testid":"pia-toggle-button",children:e?(0,t.jsx)(o.U,{"data-testid":"pia-toggle-close-icon",children:(0,t.jsx)(l.f,{})}):(0,t.jsx)(o.Z,{src:n,alt:"PIA",width:48,height:48})})});d.displayName="PiaToggleButton";var c=e.i(997053);let p=c.q`
  0%, 80%, 100% { opacity: 0.3; transform: scale(0.8); }
  40% { opacity: 1; transform: scale(1); }
`,u=c.U.div.withConfig({displayName:"PiaChatBubble.styles__Bubble",componentId:"sc-f8a029ad-0"})`
  max-width: 85%;
  padding: ${({theme:e})=>e.padding.small};
  border-radius: ${({theme:e})=>e.borderRadius.box};
  word-wrap: break-word;
  white-space: normal;
  line-height: 1.5;
  font-size: 14px;
  font-family: ${({theme:e})=>e.font.secondaryFamily};

  background: ${({theme:e,$isOwn:t})=>t?e.palette.default.primary:e.palette.default.greyLight};
  color: ${({theme:e,$isOwn:t})=>t?e.palette.default.white:e.palette.default.black};

  align-self: ${({$isOwn:e})=>e?"flex-end":"flex-start"};

  /* Directional border radius */
  border-bottom-right-radius: ${({$isOwn:e})=>e?"4px":void 0};
  border-bottom-left-radius: ${({$isOwn:e})=>e?void 0:"4px"};

  /* Links in PIA messages */
  a {
    color: ${({theme:e,$isOwn:t})=>t?e.palette.default.white:e.palette.default.primary};
    text-decoration: underline;
  }

  /* Override markdown renderer img to prevent tracking pixels */
  img {
    display: none !important;
  }

  /* Consistent spacing for all markdown elements inside chat bubbles.
     Use theme.margin.small (1rem) as the standard block spacing,
     and theme.margin.extrasmall (0.5rem) for list items. */
  p, h1, h2, h3, h4, h5, h6 {
    margin-bottom: ${({theme:e})=>e.margin.small};
    max-width: 100%;
  }

  ul, ol {
    margin-bottom: ${({theme:e})=>e.margin.small};
    max-width: 100%;
  }

  li {
    margin-bottom: ${({theme:e})=>e.margin.extrasmall};
  }

  blockquote {
    margin-bottom: ${({theme:e})=>e.margin.small};
  }

  /* Remove bottom margin from the last element to avoid double spacing with bubble padding */
  > *:last-child {
    margin-bottom: 0;

    > *:last-child {
      margin-bottom: 0;
    }
  }
`,f=c.U.div.withConfig({displayName:"PiaChatBubble.styles__TypingIndicator",componentId:"sc-f8a029ad-1"})`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 0;
`,g=c.U.span.withConfig({displayName:"PiaChatBubble.styles__Dot",componentId:"sc-f8a029ad-2"})`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${({theme:e})=>e.palette.default.greyDark};
  animation: ${p} 1.4s infinite ease-in-out;
  animation-delay: ${({$delay:e})=>e}s;
`;e.i(384768);var h=e.i(960291),m=e.i(305926);let x=a.default.memo(({content:e,isOwn:a,isStreaming:n=!1})=>{let i=n&&!e;return(0,t.jsx)(u,{$isOwn:a,"data-testid":a?"pia-chat-bubble-own":"pia-chat-bubble",children:i?(0,t.jsxs)(f,{"data-testid":"pia-chat-typing",children:[(0,t.jsx)(g,{$delay:0}),(0,t.jsx)(g,{$delay:.2}),(0,t.jsx)(g,{$delay:.4})]}):a?e:(0,t.jsx)(h.B,{content:e,mode:m.b.block})})});x.displayName="PiaChatBubble";let b=c.q`
  from { opacity: 0; transform: translateY(-4px); }
  to { opacity: 1; transform: translateY(0); }
`,y=c.q`
  to { transform: rotate(360deg); }
`,k=c.U.div.withConfig({displayName:"PiaToolTrace.styles__TraceContainer",componentId:"sc-50c4a359-0"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 8px;
  max-width: 85%;
  align-self: flex-start;
`,v=c.U.div.withConfig({displayName:"PiaToolTrace.styles__TraceItem",componentId:"sc-50c4a359-1"})`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 4px 10px;
  border-radius: ${({theme:e})=>e.borderRadius.box};
  background: ${({theme:e})=>e.palette.default.greyLight};
  border-left: 3px solid
    ${({theme:e,$success:t})=>t?e.palette.default.success:e.palette.default.error};
  font-size: 12px;
  font-family: ${({theme:e})=>e.font.secondaryFamily};
  color: ${({theme:e})=>e.palette.default.greyDark};
  animation: ${b} 0.2s ease-out;
  line-height: 1.4;
`,w=c.U.span.withConfig({displayName:"PiaToolTrace.styles__TraceIcon",componentId:"sc-50c4a359-2"})`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 16px;
  height: 16px;
  font-size: 10px;
  color: ${({theme:e,$success:t})=>t?e.palette.default.success:e.palette.default.error};
`,C=c.U.span.withConfig({displayName:"PiaToolTrace.styles__TraceName",componentId:"sc-50c4a359-3"})`
  font-weight: 600;
  color: ${({theme:e})=>e.palette.default.black};
`,A=c.U.span.withConfig({displayName:"PiaToolTrace.styles__TraceSummary",componentId:"sc-50c4a359-4"})`
  color: ${({theme:e})=>e.palette.default.greyDark};
`,I=c.U.span.withConfig({displayName:"PiaToolTrace.styles__TraceSpinner",componentId:"sc-50c4a359-5"})`
  display: inline-block;
  width: 12px;
  height: 12px;
  border: 2px solid ${({theme:e})=>e.palette.default.grey};
  border-top-color: ${({theme:e})=>e.palette.default.primary};
  border-radius: 50%;
  animation: ${y} 0.8s linear infinite;
  flex-shrink: 0;
`,$=c.U.div.withConfig({displayName:"PiaToolTrace.styles__TracePending",componentId:"sc-50c4a359-6"})`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 4px 10px;
  border-radius: ${({theme:e})=>e.borderRadius.box};
  background: ${({theme:e})=>e.palette.default.greyLight};
  border-left: 3px solid ${({theme:e})=>e.palette.default.grey};
  font-size: 12px;
  font-family: ${({theme:e})=>e.font.secondaryFamily};
  color: ${({theme:e})=>e.palette.default.greyDark};
  animation: ${b} 0.2s ease-out;
  line-height: 1.4;
`;e.i(821194);var P=e.i(99222),S=e.i(44353);let j={searchAccounts:"Accounts suchen",getAccountDetails:"Account Details",searchContacts:"Kontakte suchen",getContactDetails:"Kontakt Details",searchCases:"Cases suchen",getCaseDetails:"Case Details",searchOrders:"Bestellungen suchen",searchProducts:"Produkte suchen",searchMaterialProposals:"Materialangebote suchen",searchRequirements:"Bedarfe suchen"},_=a.default.memo(({traces:e,isStreaming:a=!1})=>{let{tr:n}=(0,P.f)();return e.length||a?(0,t.jsxs)(k,{"data-testid":"pia-tool-trace",children:[e.map((e,a)=>(0,t.jsxs)(v,{$success:e.success,"data-testid":"pia-tool-trace-item",children:[(0,t.jsx)(w,{$success:e.success,children:e.success?"✓":"✗"}),(0,t.jsx)(C,{children:j[e.toolName]?n(`pia.trace.tool.${e.toolName}`,{defaultValue:j[e.toolName]}):e.toolName}),(0,t.jsx)(A,{children:(0,S.A)(n,e.summary)})]},`${e.toolName}-${e.round}-${a}`)),a&&e.length>0&&!e[e.length-1]&&(0,t.jsxs)($,{"data-testid":"pia-tool-trace-pending",children:[(0,t.jsx)(I,{}),(0,t.jsx)(A,{children:n("pia.trace.running",{defaultValue:"Tool wird ausgefuehrt..."})})]})]}):null});_.displayName="PiaToolTrace";let T=c.q`
  from { opacity: 0; transform: translateY(-4px); }
  to { opacity: 1; transform: translateY(0); }
`,M=c.q`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.6; }
`,B=c.U.div.withConfig({displayName:"PiaToolApproval.styles__ApprovalContainer",componentId:"sc-ded01bff-0"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 8px;
  max-width: 85%;
  align-self: flex-start;
  animation: ${T} 0.3s ease-out;
`,N=c.U.div.withConfig({displayName:"PiaToolApproval.styles__ApprovalHeader",componentId:"sc-ded01bff-1"})`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 10px;
  border-radius: ${({theme:e})=>e.borderRadius.box};
  background: ${({theme:e})=>e.palette.default.greyLight};
  border-left: 3px solid ${({theme:e})=>e.palette.default.primary};
  font-size: 12px;
  font-family: ${({theme:e})=>e.font.secondaryFamily};
  font-weight: 600;
  color: ${({theme:e})=>e.palette.default.black};
  line-height: 1.4;
`,z=c.U.span.withConfig({displayName:"PiaToolApproval.styles__ApprovalIcon",componentId:"sc-ded01bff-2"})`
  display: flex;
  align-items: center;
  font-size: 14px;
  flex-shrink: 0;
`,D=c.U.label.withConfig({displayName:"PiaToolApproval.styles__ApprovalItem",componentId:"sc-ded01bff-3"})`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  padding: 8px 10px;
  border-radius: ${({theme:e})=>e.borderRadius.box};
  background: ${({theme:e})=>e.palette.default.white};
  border: 1px solid
    ${({theme:e,$checked:t})=>t?e.palette.default.primary:e.palette.default.grey};
  cursor: pointer;
  transition: border-color 0.15s ease;

  &:hover {
    border-color: ${({theme:e})=>e.palette.default.primary};
  }
`,U=c.U.input.withConfig({displayName:"PiaToolApproval.styles__Checkbox",componentId:"sc-ded01bff-4"})`
  margin-top: 2px;
  flex-shrink: 0;
  accent-color: ${({theme:e})=>e.palette.default.primary};
`,V=c.U.div.withConfig({displayName:"PiaToolApproval.styles__ItemContent",componentId:"sc-ded01bff-5"})`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
  min-width: 0;
`,E=c.U.span.withConfig({displayName:"PiaToolApproval.styles__ItemName",componentId:"sc-ded01bff-6"})`
  font-size: 12px;
  font-weight: 600;
  font-family: ${({theme:e})=>e.font.secondaryFamily};
  color: ${({theme:e})=>e.palette.default.black};
`,R=c.U.div.withConfig({displayName:"PiaToolApproval.styles__ItemPreview",componentId:"sc-ded01bff-7"})`
  font-size: 11px;
  font-family: ${({theme:e})=>e.font.secondaryFamily};
  color: ${({theme:e})=>e.palette.default.greyDark};
  line-height: 1.4;
  white-space: pre-wrap;
  word-break: break-word;
`,F=c.U.span.withConfig({displayName:"PiaToolApproval.styles__ItemBadge",componentId:"sc-ded01bff-8"})`
  display: inline-flex;
  align-items: center;
  padding: 1px 6px;
  border-radius: 3px;
  font-size: 9px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  background: ${({$type:e})=>"sf"===e?"#e3f2fd":"#f3e5f5"};
  color: ${({$type:e})=>"sf"===e?"#1565c0":"#7b1fa2"};
`,W=c.U.div.withConfig({displayName:"PiaToolApproval.styles__ButtonRow",componentId:"sc-ded01bff-9"})`
  display: flex;
  gap: 8px;
  margin-top: 4px;
`,K=c.U.button.withConfig({displayName:"PiaToolApproval.styles__ApproveButton",componentId:"sc-ded01bff-10"})`
  flex: 1;
  padding: 6px 12px;
  border: none;
  border-radius: ${({theme:e})=>e.borderRadius.box};
  background: ${({theme:e})=>e.palette.default.primary};
  color: ${({theme:e})=>e.palette.default.white};
  font-size: 12px;
  font-weight: 600;
  font-family: ${({theme:e})=>e.font.secondaryFamily};
  cursor: pointer;
  transition: opacity 0.15s ease;

  &:hover:not(:disabled) {
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,L=c.U.button.withConfig({displayName:"PiaToolApproval.styles__RejectButton",componentId:"sc-ded01bff-11"})`
  padding: 6px 12px;
  border: 1px solid ${({theme:e})=>e.palette.default.error};
  border-radius: ${({theme:e})=>e.borderRadius.box};
  background: transparent;
  color: ${({theme:e})=>e.palette.default.error};
  font-size: 12px;
  font-weight: 600;
  font-family: ${({theme:e})=>e.font.secondaryFamily};
  cursor: pointer;
  transition: all 0.15s ease;

  &:hover:not(:disabled) {
    background: ${({theme:e})=>e.palette.default.error};
    color: ${({theme:e})=>e.palette.default.white};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,O=c.U.span.withConfig({displayName:"PiaToolApproval.styles__ExpiryTimer",componentId:"sc-ded01bff-12"})`
  font-size: 10px;
  font-family: ${({theme:e})=>e.font.secondaryFamily};
  color: ${({theme:e,$urgent:t})=>t?e.palette.default.error:e.palette.default.greyDark};
  animation: ${({$urgent:e})=>e?M:"none"} 1.5s ease-in-out infinite;
`,H=c.U.div.withConfig({displayName:"PiaToolApproval.styles__StatusMessage",componentId:"sc-ded01bff-13"})`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 10px;
  border-radius: ${({theme:e})=>e.borderRadius.box};
  background: ${({theme:e})=>e.palette.default.greyLight};
  border-left: 3px solid
    ${({theme:e,$type:t})=>"success"===t?e.palette.default.success:"error"===t?e.palette.default.error:e.palette.default.grey};
  font-size: 12px;
  font-family: ${({theme:e})=>e.font.secondaryFamily};
  color: ${({theme:e})=>e.palette.default.greyDark};
  animation: ${T} 0.2s ease-out;
`,Z=a.default.memo(({pendingToolCalls:e,onApproval:n,status:i,statusMessage:r})=>{let{tr:s}=(0,P.f)(),[o,l]=(0,a.useState)(()=>new Set(e.map(e=>e.pendingId))),[d,c]=(0,a.useState)(!1),[p,u]=(0,a.useState)(()=>e.length?Math.max(0,Math.floor((new Date(e[0].expiresAt).getTime()-Date.now())/1e3)):0);(0,a.useEffect)(()=>{if(i||p<=0)return;let e=setInterval(()=>{u(t=>{let a=t-1;return a<=0?(clearInterval(e),0):a})},1e3);return()=>clearInterval(e)},[i,p]),(0,a.useEffect)(()=>{0!==p||i||d||n(e.map(e=>({pendingId:e.pendingId,approved:!1})))},[p,i,d,e,n]);let f=(0,a.useCallback)(e=>{l(t=>{let a=new Set(t);return a.has(e)?a.delete(e):a.add(e),a})},[]),g=(0,a.useCallback)(async()=>{c(!0);try{let t=e.map(e=>({pendingId:e.pendingId,approved:o.has(e.pendingId)}));await n(t)}finally{c(!1)}},[e,o,n]),h=(0,a.useCallback)(async()=>{c(!0);try{await n(e.map(e=>({pendingId:e.pendingId,approved:!1})))}finally{c(!1)}},[e,n]);if("expired"===i)return(0,t.jsx)(B,{"data-testid":"pia-tool-approval-expired",children:(0,t.jsx)(H,{$type:"expired",children:s("pia.approval.expired",{defaultValue:"Aktion abgelaufen"})})});if("approved"===i||"rejected"===i)return(0,t.jsx)(B,{"data-testid":"pia-tool-approval-done",children:(0,t.jsx)(H,{$type:"approved"===i?"success":"error",children:r||("approved"===i?s("pia.approval.approved",{defaultValue:"Aktionen ausgeführt"}):s("pia.approval.rejected",{defaultValue:"Aktionen abgelehnt"}))})});if("error"===i)return(0,t.jsx)(B,{"data-testid":"pia-tool-approval-error",children:(0,t.jsx)(H,{$type:"error",children:r||s("pia.approval.error",{defaultValue:"Fehler bei der Ausfuhrung"})})});let m=Math.floor(p/60),x=p%60,b=`${m}:${x.toString().padStart(2,"0")}`,y=p<60,k=o.size;return(0,t.jsxs)(B,{"data-testid":"pia-tool-approval",children:[(0,t.jsxs)(N,{children:[(0,t.jsx)(z,{children:"⚠"}),s("pia.approval.title",{defaultValue:"Aktionen bestatigen"}),(0,t.jsx)(O,{$urgent:y,children:b})]}),e.map(e=>(0,t.jsxs)(D,{$checked:o.has(e.pendingId),"data-testid":"pia-tool-approval-item",children:[(0,t.jsx)(U,{type:"checkbox",checked:o.has(e.pendingId),onChange:()=>f(e.pendingId),disabled:d,"data-testid":"pia-tool-approval-checkbox"}),(0,t.jsxs)(V,{children:[(0,t.jsxs)(E,{children:[e.displayName," ",(0,t.jsx)(F,{$type:e.isSalesforceWrite?"sf":"pg",children:e.isSalesforceWrite?"Salesforce":s("pia.approval.internal",{defaultValue:"Intern"})})]}),(0,t.jsx)(R,{children:(0,S.w)(s,e.preview)})]})]},e.pendingId)),(0,t.jsxs)(W,{children:[(0,t.jsx)(K,{onClick:g,disabled:d||0===k,"data-testid":"pia-tool-approval-confirm",children:d?s("pia.approval.running",{defaultValue:"Wird ausgeführt..."}):s("pia.approval.confirmSelection",{defaultValue:"Auswahl bestatigen ({{checked}}/{{total}})",checked:k,total:e.length})}),(0,t.jsx)(L,{onClick:h,disabled:d,"data-testid":"pia-tool-approval-reject",children:s("pia.approval.reject",{defaultValue:"Ablehnen"})})]})]})});Z.displayName="PiaToolApproval";var q=e.i(547905);let G=c.U.div.withConfig({displayName:"PiaChatMessage.styles__MessageRow",componentId:"sc-2fc4eb57-0"})`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  flex-direction: ${({$isOwn:e})=>e?"row-reverse":"row"};
  margin-bottom: 12px;
`,Y=c.U.div.withConfig({displayName:"PiaChatMessage.styles__AvatarWrapper",componentId:"sc-2fc4eb57-1"})`
  width: 32px;
  height: 32px;
  /* #1781: Personenbild als Wabe wie überall */
  ${q.q}
  overflow: hidden;
  flex-shrink: 0;
`,J=c.U.img.withConfig({displayName:"PiaChatMessage.styles__PiaAvatar",componentId:"sc-2fc4eb57-2"})`
  width: 32px;
  height: 32px;
  object-fit: cover;
`,Q=c.U.div.withConfig({displayName:"PiaChatMessage.styles__ContentWrapper",componentId:"sc-2fc4eb57-3"})`
  display: flex;
  flex-direction: column;
  align-items: ${({$isOwn:e})=>e?"flex-end":"flex-start"};
  max-width: calc(100% - 44px);
`,X=c.U.div.withConfig({displayName:"PiaChatMessage.styles__TimestampRow",componentId:"sc-2fc4eb57-4"})`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 4px;
  flex-direction: ${({$isOwn:e})=>e?"row-reverse":"row"};
`,ee=c.U.span.withConfig({displayName:"PiaChatMessage.styles__Timestamp",componentId:"sc-2fc4eb57-5"})`
  font-size: 11px;
  color: ${({theme:e})=>e.palette.default.greyDark};
  padding: 0 4px;
`,et=c.U.span.withConfig({displayName:"PiaChatMessage.styles__ModelBadge",componentId:"sc-2fc4eb57-6"})`
  font-size: 10px;
  color: ${({theme:e})=>e.palette.default.grey};
  padding: 1px 6px;
  border-radius: 8px;
  background: ${({theme:e})=>e.palette.default.greyLight};
  font-family: ${({theme:e})=>e.font.secondaryFamily};
  white-space: nowrap;
`;var ea=e.i(555508);let en=a.default.memo(({message:e,avatarSrc:n})=>{var i;let r,o,l,d="user"===e.role,{handleToolApproval:c}=(0,s.G)(),p=(0,ea.f)(),[u,f]=(0,a.useState)(0);(0,a.useEffect)(()=>{if(Date.now()-e.timestamp.getTime()>864e5)return;let t=setInterval(()=>f(e=>e+1),3e4);return()=>clearInterval(t)},[e.timestamp]);let g=(i=e.timestamp,l=Math.floor((o=Math.floor((r=Math.floor((new Date().getTime()-i.getTime())/1e3))/60))/60),r<60?p.relative(0,"second"):o<60?p.relative(-o,"minute",{numeric:"always",style:"short"}):l<24?p.relative(-l,"hour",{numeric:"always",style:"short"}):p.time(i)),h=(0,a.useCallback)(async t=>{await c(e.id,t)},[c,e.id]);return(0,t.jsxs)(G,{$isOwn:d,"data-testid":"pia-chat-message",children:[!d&&(0,t.jsx)(Y,{children:(0,t.jsx)(J,{src:n,alt:"PIA",width:32,height:32})}),(0,t.jsxs)(Q,{$isOwn:d,children:[!d&&e.toolTraces&&e.toolTraces.length>0&&(0,t.jsx)(_,{traces:e.toolTraces,isStreaming:e.isStreaming}),(0,t.jsx)(x,{content:e.displayContent??e.content,isOwn:d,isStreaming:e.isStreaming}),!d&&e.approval&&(0,t.jsx)(Z,{pendingToolCalls:e.approval.pendingToolCalls,conversationId:e.approval.conversationId,onApproval:h,status:"pending"===e.approval.status?void 0:e.approval.status,statusMessage:e.approval.statusMessage}),!e.isStreaming&&(0,t.jsxs)(X,{$isOwn:d,children:[(0,t.jsx)(ee,{children:g}),!d&&e.model&&(0,t.jsx)(et,{"data-testid":"pia-message-model-badge",children:e.model})]})]})]})});en.displayName="PiaChatMessage";var ei=e.i(499911),er=e.i(154799);let es=c.U.div.withConfig({displayName:"PiaChatInput.styles__InputContainer",componentId:"sc-fbebf1c2-0"})`
  display: flex;
  align-items: flex-end;
  gap: 0.5rem;
  padding: ${({theme:e})=>e.padding.small};
  border-top: 1px solid ${({theme:e})=>e.palette.default.grey};
  background: ${({theme:e})=>e.palette.default.white};
`,eo=c.U.textarea.withConfig({displayName:"PiaChatInput.styles__TextInput",componentId:"sc-fbebf1c2-1"})`
  flex: 1;
  border: 1px solid ${({theme:e})=>e.palette.default.grey};
  border-radius: ${({theme:e})=>e.borderRadius.input};
  padding: 0.5rem 0.75rem;
  resize: none;
  min-height: 40px;
  max-height: 120px;
  font-family: ${({theme:e})=>e.font.secondaryFamily};
  font-size: 0.875rem;
  line-height: 1.4;
  outline: none;
  transition: border-color 0.2s ease;

  &:focus {
    border-color: ${({theme:e})=>e.palette.default.primary};
  }

  &::placeholder {
    color: ${({theme:e})=>e.palette.default.greyDark};
  }

  &:disabled {
    background: ${({theme:e})=>e.palette.default.greyLight};
    cursor: not-allowed;
  }
`,el=c.U.button.withConfig({displayName:"PiaChatInput.styles__SendButton",componentId:"sc-fbebf1c2-2"})`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: ${({theme:e})=>e.borderRadius.box};
  background: ${({theme:e,$hasContent:t})=>t?e.palette.default.secondary:e.palette.default.grey};
  color: ${({theme:e})=>e.palette.default.white};
  cursor: ${({$hasContent:e})=>e?"pointer":"not-allowed"};
  transition:
    background-color 0.2s ease,
    transform 0.1s ease;
  flex-shrink: 0;

  &:hover:not(:disabled) {
    opacity: ${({$hasContent:e})=>e?.9:1};
  }

  &:active:not(:disabled) {
    transform: scale(0.95);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`,ed=c.U.span.withConfig({displayName:"PiaChatInput.styles__CharCounter",componentId:"sc-fbebf1c2-3"})`
  font-size: 11px;
  color: ${({theme:e,$isWarning:t})=>t?e.palette.default.error:e.palette.default.greyDark};
  text-align: right;
  padding: 0 4px;
  position: absolute;
  bottom: 2px;
  right: 52px;
`,ec=c.U.div.withConfig({displayName:"PiaChatInput.styles__InputWrapper",componentId:"sc-fbebf1c2-4"})`
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
`,ep=a.default.memo(({onSend:e,disabled:n=!1})=>{let{tr:i}=(0,r.w)(),[s,o]=(0,a.useState)(""),l=(0,a.useRef)(null),d=(0,a.useCallback)(()=>{let t=s.trim();t&&!n&&t.length<=er.t&&(e(t),o(""),l.current&&(l.current.style.height="auto"))},[s,n,e]),c=(0,a.useCallback)(e=>{"Enter"!==e.key||e.shiftKey||(e.preventDefault(),d())},[d]),p=(0,a.useCallback)(e=>{o(e.target.value);let t=e.target;t.style.height="auto",t.style.height=`${Math.min(t.scrollHeight,120)}px`},[]),u=s.trim().length>0,f=s.length,g=f>er.t;return(0,t.jsxs)(es,{"data-testid":"pia-chat-input-bar",children:[(0,t.jsxs)(ec,{children:[(0,t.jsx)(eo,{ref:l,value:s,onChange:p,onKeyDown:c,placeholder:i(n?"pia.input.thinking":"pia.input.placeholder"),disabled:n,rows:1,"data-testid":"pia-chat-input"}),f>=3500&&(0,t.jsxs)(ed,{$isWarning:g,children:[f,"/",er.t]})]}),(0,t.jsx)(el,{onClick:d,disabled:n||!u||g,$hasContent:u&&!g,"data-testid":"pia-chat-send-button","aria-label":i("pia.input.send"),children:(0,t.jsx)(ei.f,{})})]})});ep.displayName="PiaChatInput";let eu=e.i(400324).f,ef=c.U.svg.withConfig({displayName:"IconMicrophone.styles__Root",componentId:"sc-1f4590a-0"})``,eg=e=>(0,t.jsxs)(ef,{className:e.className,"data-testid":"icon-microphone-root",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,t.jsx)("title",{children:"microphone"}),(0,t.jsxs)("g",{strokeLinecap:"round",strokeLinejoin:"round",children:[(0,t.jsx)("path",{d:"M12 1C10.3431 1 9 2.34315 9 4V12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12V4C15 2.34315 13.6569 1 12 1Z",stroke:"currentColor",strokeWidth:"2",fill:"none"}),(0,t.jsx)("path",{d:"M19 10V12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12V10",stroke:"currentColor",strokeWidth:"2",fill:"none"}),(0,t.jsx)("path",{d:"M12 19V23",stroke:"currentColor",strokeWidth:"2",fill:"none"}),(0,t.jsx)("path",{d:"M8 23H16",stroke:"currentColor",strokeWidth:"2",fill:"none"})]})]});var eh=e.i(48574),em=e.i(241209);let ex=e=>e.trim().startsWith("|");var eb=e.i(674781);e.i(894113);var ey=e.i(765691);let ek={DEFAULT:[{id:"sop-default-tasks",label:"Offene Aufgaben",description:"Zeige meine offenen Aufgaben",prompt:`Zeige mir meine offenen Aufgaben:
1. Suche alle offenen Cases (searchCases, Status=New, limit=5)
2. Fasse die Ergebnisse \xfcbersichtlich zusammen: Betreff, Status, Priorit\xe4t.
3. Gib eine Empfehlung, welche Aufgaben als erstes bearbeitet werden sollten.`},{id:"sop-default-cases",label:"Offene Cases",description:"Überblick über aktuelle Cases",prompt:`Gib mir einen \xdcberblick \xfcber aktuelle Cases:
1. Suche alle offenen Cases (searchCases, Status=New, limit=10)
2. Sortiere nach Priorit\xe4t und erstelle eine \xfcbersichtliche Zusammenfassung.
3. Zeige f\xfcr jeden Case: Betreff, Account-Name, Status und Erstelldatum.`},{id:"sop-default-meeting",label:"Meeting Follow-up",description:"Aufgaben und Cases aus Meeting-Notizen erstellen",prompt:`Ich m\xf6chte aus Meeting-Notizen Aufgaben erstellen. Bitte hilf mir dabei:
1. Frage mich nach den Meeting-Notizen (Teilnehmer, besprochene Themen, offene Punkte).
2. Schlage f\xfcr jeden offenen Punkt eine Aufgabe vor (createTask) mit Betreff, Beschreibung und F\xe4lligkeitsdatum.
3. Falls ein Thema einen Case erfordert, schlage die Erstellung vor (createCase).
4. Fasse die vorgeschlagenen Aktionen zusammen und warte auf meine Best\xe4tigung.`}],[ey.f.Account]:[{id:"sop-account-overview",label:"Account-Überblick",description:"Vollständiger Überblick über diesen Account",prompt:`Erstelle einen \xdcberblick f\xfcr diesen Account:
1. Hole die Account-Details (getAccountDetails)
2. Suche alle offenen Cases f\xfcr diesen Account (searchCases, Status=New)
3. Suche die letzten 5 Bestellungen (searchOrders, limit=5)
4. Suche die Kontakte (searchContacts)
5. Fasse die Ergebnisse \xfcbersichtlich zusammen:
   - Offene Themen und Cases
   - Letzte Bestellungen und deren Status
   - Hauptansprechpartner`},{id:"sop-account-activity",label:"Letzte Aktivitäten",description:"Kürzliche Cases und Bestellungen für diesen Account",prompt:`Zeige die letzten Aktivit\xe4ten f\xfcr diesen Account:
1. Suche die letzten 5 Cases f\xfcr diesen Account (searchCases, limit=5)
2. Suche die letzten 5 Bestellungen f\xfcr diesen Account (searchOrders, limit=5)
3. Erstelle eine Zeitleiste der Aktivit\xe4ten, sortiert nach Datum.
4. Hebe offene oder kritische Punkte hervor.`},{id:"sop-account-loesen",label:"Mit PIA lösen",description:"Beziehung analysieren und konkrete nächste Schritte vorschlagen",prompt:`Analysiere den aktuellen Account (ID: {{entityId}}) und schlage n\xe4chste Schritte vor:
1. Verschaffe dir in EINER Runde ein Bild: getAccountDetails, offene Cases (searchCases mit AccountId), offene Aufgaben (searchTasks mit WhatId), laufende Vorg\xe4nge (searchMaterialProposals und searchOrders mit AccountId).
2. Bestimme daraus die Lage (Beziehung, offene Punkte, Auff\xe4lligkeiten) und die vollst\xe4ndige Ma\xdfnahmenliste.
3. Merke die Ma\xdfnahmen direkt vor — eine Folgeaufgabe (createTask, WhatId = Account) oder einen Case f\xfcr ein offenes Thema (createCase mit AccountId) — die Freigabe-Karte ist die Best\xe4tigung.`},{id:"sop-account-kommunikation",label:"Kommunikation vorbereiten",description:"Was fehlt am Account? Checkliste und Anfrage-Mail an den Ansprechpartner",prompt:`Bereite die n\xe4chste Kommunikation zum Account (ID: {{entityId}}) vor — du schl\xe4gst vor, versendet wird von Hand:
1. Stand erfassen: getAccountDetails, Kontakte (searchContacts mit AccountId) und offene Aufgaben (searchTasks mit WhatId) gemeinsam abfragen.
2. Checkliste: Was fehlt zum Zielbild (Branche, Kontaktdaten, Website, Rechnungsinformationen, Ansprechpartner, Zertifikate, Produktionsstandorte)?
3. Vorschlag, strukturiert: Adressat (Haupt-Ansprechpartner, Kanal), Thema, "Warum jetzt", Betreff, Mail-Text in der Sprache des Accounts (sachlich, Sie-Form), der genau die fehlenden Angaben abfragt, Wiedervorlage in 7 Tagen.
4. Aufgabe f\xfcr die Wiedervorlage vormerken (createTask, WhatId = Account): "R\xfcckmeldung pr\xfcfen".`}],[ey.f.Case]:[{id:"sop-case-status",label:"Fall-Status prüfen",description:"Details und Status dieses Cases anzeigen",prompt:`Pr\xfcfe den Status dieses Cases:
1. Hole die Case-Details (getCaseDetails)
2. Fasse den aktuellen Status zusammen: Betreff, Status, Priorit\xe4t, Erstellt-Datum, Zugewiesener Benutzer.
3. Wenn der Case offen ist, schlage n\xe4chste Schritte vor.
4. Wenn der Case eskaliert ist, zeige die Dringlichkeit an.`},{id:"sop-case-escalate",label:"Eskalation vorbereiten",description:"Task für Case-Eskalation erstellen",prompt:`Bereite eine Eskalation f\xfcr diesen Case vor:
1. Hole die Case-Details (getCaseDetails)
2. Fasse das Problem und den bisherigen Verlauf zusammen.
3. Erstelle eine Eskalations-Aufgabe (createTask) mit:
   - Betreff: "Eskalation: [Case-Betreff]"
   - Priorit\xe4t: High
   - Beschreibung: Zusammenfassung des Problems und bisheriger Ma\xdfnahmen
4. Warte auf meine Best\xe4tigung bevor die Aufgabe erstellt wird.`}],[ey.f.Contact]:[{id:"sop-contact-overview",label:"Kontakt-Überblick",description:"Details und zugehörige Daten dieses Kontakts",prompt:`Erstelle einen \xdcberblick f\xfcr diesen Kontakt:
1. Hole die Kontakt-Details (getContactDetails)
2. Suche offene Cases f\xfcr den zugeh\xf6rigen Account (searchCases)
3. Suche Bestellungen f\xfcr den zugeh\xf6rigen Account (searchOrders, limit=5)
4. Fasse die Ergebnisse zusammen:
   - Kontaktdaten und Rolle
   - Offene Cases beim zugeh\xf6rigen Account
   - Letzte Bestellungen`}],[ey.f.Order]:[{id:"sop-order-status",label:"Bestellstatus prüfen",description:"Status und Details dieser Bestellung",prompt:`Pr\xfcfe den Status dieser Bestellung:
1. Suche die Bestelldetails (searchOrders)
2. Hole die Account-Details des zugeh\xf6rigen Accounts (getAccountDetails)
3. Fasse zusammen: Bestellnummer, Status, Account, Bestelldatum.
4. Bei offenen Bestellungen: Schlage n\xe4chste Schritte vor.`},{id:"sop-order-pruefen",label:"Auftrag prüfen (Vollbild)",description:"Positionen, Abrechnungen und Aufgaben prüfen, Lücken benennen",prompt:`Pr\xfcfe den Auftrag (ID: {{entityId}}) im Vollbild:
1. In EINER Runde holen: getOrderDetails, Positionen (searchOrderItems mit OrderId), Abrechnungen (searchInvoices mit AuftragId), offene Aufgaben (searchTasks mit WhatId).
2. Auftragsprodukte: Steht die Menge noch auf der 20-t-Standardliefermenge oder weicht sie von der tats\xe4chlichen Liefermenge ab? Dann sind auch die Zielbetr\xe4ge unzuverl\xe4ssig — benennen.
3. Abrechnungen gegen Zielbetrag Kunde/Lieferant halten; fehlende Kernfelder (Vertrag, Kundenbestellnummer, Liefertermine, Transporteur) benennen.
4. Fasse die Lage kompakt: fehlende Kernfelder, Mengen-/Betragsauff\xe4lligkeiten, offene Aufgaben. Ein laufender Auftrag ist naturgem\xe4\xdf unvollst\xe4ndig — offene Punkte sind Arbeitsstand: daf\xfcr h\xf6chstens EINE Aufgabe (createTask, WhatId = Auftrag) mit Frist vormerken.`},{id:"sop-order-kommunikation",label:"Kommunikation vorbereiten",description:"Bestellung, Auftragsbestätigung, Transport, Nachhaken — mit Mail-Text",prompt:`Bereite die n\xe4chste Kommunikation zum Auftrag (ID: {{entityId}}) vor — du schl\xe4gst vor, versendet wird von Hand:
1. Stand erfassen: getOrderDetails, Positionen (searchOrderItems mit OrderId), Ansprechpartner (searchContacts mit AccountId des Kunden) und offene Aufgaben (searchTasks mit WhatId) gemeinsam abfragen.
2. Befund je Phase: Bestellung an den Lieferanten offen? Auftragsbest\xe4tigung an den Kunden offen? Transport zu beauftragen? Best\xe4tigung oder Liefertermin seit mehr als 3 Werktagen ausstehend → nachhaken.
3. Vorschlag, strukturiert: Adressat (Lieferant, Kunde oder Transporteur — Rolle + Person, Kanal), Thema, "Warum jetzt", Dringlichkeit, Betreff, Mail-Text in der Sprache des Kontakts (sachlich, Sie-Form, mit Auftragsnummer, Produkt, Menge und Termin), n\xe4chste Wiedervorlage. Bei zwei sinnvollen Optionen (z. B. nachhaken beim Lieferanten ODER Kunden \xfcber Verzug informieren) beide nennen, die dringendere zuerst.
4. Aufgabe f\xfcr die Wiedervorlage vormerken (createTask, WhatId = Auftrag).`}],[ey.f.Contract]:[{id:"sop-contract-auswerten",label:"Vertrag prüfen & auswerten",description:"Konvention und Zuordnung prüfen, Aufträge und Beträge zusammenfassen",prompt:`Pr\xfcfe den Vertrag (ID: {{entityId}}) und werte ihn aus:
1. Vertrag lesen (getContractDetails): Entspricht der Name der Konvention Abholort–Produkt-ID–Lieferort–Zeitraum? Ist ein Projekt zugeordnet? L\xfccken benennen.
2. Auftr\xe4ge des Vertrags holen (searchOrders mit AccountId des Vertrags, Auftragsnummern gegen die Vertragszuordnung pr\xfcfen) und je Auftrag die Abrechnungen (searchInvoices mit AuftragId).
3. Kompakt zusammenfassen: Anzahl Auftr\xe4ge, Volumen, offene Betr\xe4ge — Auff\xe4lligkeiten benennen (Auftr\xe4ge ohne Abrechnung).
4. Reine Auswertung — eine Aufgabe (createTask, WhatId = Vertrag) nur, wenn etwas offensichtlich fehlt. Felder in Klartext nennen, keine API-Namen.`}],[ey.f.Invoice]:[{id:"sop-invoice-pruefen",label:"Abrechnung prüfen",description:"Menge und Beträge gegen die Auftrags-Zielwerte prüfen, Empfehlung geben",prompt:`Pr\xfcfe die Abrechnung (ID: {{entityId}}) gegen den Auftrag — die FREIGABE bleibt beim Menschen, du gibst eine Empfehlung:
1. Abrechnungs-Details holen (getAbrechnungDetails) und den verkn\xfcpften Auftrag (getOrderDetails) samt Positionen (searchOrderItems mit OrderId) — alle Abfragen gemeinsam absetzen, sobald die Auftrags-ID bekannt ist.
2. MENGEN-GATE ZUERST: Steht die Auftragsmenge noch auf der 20-t-Standardliefermenge oder weicht sie von der tats\xe4chlichen Liefermenge ab? Dann warne: "Zielbetr\xe4ge basieren wom\xf6glich auf der Standardmenge — erst Menge korrigieren, dann Betr\xe4ge pr\xfcfen."
3. Betragspr\xfcfung je Typ: Rechnungstyp Ausgang → Rechnungsbetrag gegen Zielbetrag Kunde. Eingang mit Kostenart Materialeinkauf → gegen Zielbetrag Lieferant. Eingang mit Transportkosten → gegen den Transporteur-Preis am Auftrag.
4. Ergebnis in Klartext: Betr\xe4ge soll/ist, Zahlungsziel, Kontierung — Empfehlung "freigabef\xe4hig" oder die konkreten Abweichungen. F\xfcr die n\xf6tigen Korrekturen EINE Aufgabe vormerken (createTask, WhatId = Abrechnung) — nicht nur im Text vorschlagen.`}],[ey.f.Requirement]:[{id:"sop-requirement-decken",label:"Bedarf decken (Matching)",description:"Spezifikation prüfen, beste Produkte finden, nächsten Schritt vorschlagen",prompt:`Decke den Bedarf (ID: {{entityId}}):
1. Bedarf lesen (getBedarfDetails) und Spezifikations-L\xfccken benennen (Materialkategorie, Hauptpolymer, Anwendung, Monatsbedarf, Zielpreis).
2. Matching: searchProducts mit den Kennwerten (Polymer, Typ, Farbe) — nenne die besten bis zu 5 Kandidaten MIT Begr\xfcndung (was passt, was weicht ab); neuere Produkte (hohe Produktcodes) zuerst, Jahreskapazit\xe4t gegen die angefragte Menge halten.
3. Pr\xfcfe mit searchMaterialProposals (AccountId des Bedarfs), ob es schon ein Material Proposal gibt.
4. F\xfcr den klarsten Kandidaten eine Aufgabe vormerken (createTask, WhatId = Bedarf): "Material Proposal anlegen: <Produkt> f\xfcr <Kunde>" mit Wiedervorlage-Frist.`}],[ey.f.Product]:[{id:"sop-product-vermarkten",label:"Produkt vermarkten",description:"Stammdaten prüfen, passende Bedarfe finden, Angebot anstoßen",prompt:`Vermarkte das Produkt (ID: {{entityId}}):
1. Produkt lesen (getProductDetails) und Stammdaten pr\xfcfen: Produktcode, Hauptpolymer, Materialtyp, Farbkategorie, Preis, Menge — L\xfccken benennen.
2. Passende Bedarfe suchen (searchRequirements mit dem Polymer/Materialtyp als Suchtext) und die besten Treffer MIT Begr\xfcndung nennen (Anwendung, Menge, Zielpreis vs. unser Preis).
3. F\xfcr den klarsten Treffer eine Aufgabe vormerken (createTask, WhatId = Produkt): "Material Proposal anlegen f\xfcr <Bedarf/Kunde>" mit den Eckdaten f\xfcr die Angebots-Mail im Text.`}],[ey.f.MaterialProposal]:[{id:"sop-mp-pflegen",label:"MP pflegen",description:"Status und Kernfelder prüfen, Lücken benennen",prompt:`Pflege das Material Proposal (ID: {{entityId}}) auf sein Zielbild:
1. Details holen (getMaterialProposalDetails) und vorhandene Bemusterungen (searchSampleSendings mit ProduktId des MP) gemeinsam abfragen. ZUERST der Status: Passt er zum tats\xe4chlichen Stand des Vorgangs?
2. Verkn\xfcpfungen pr\xfcfen: Supplier, Account, Produkt, Bedarf, Ansprechpartner — fehlende benennen.
3. Kernfelder pr\xfcfen: EK/VK und Marge, Incoterm, Mindestmenge, G\xfcltigkeit/Wiedervorlage.
4. Kurz zusammenfassen: was ist belastbar, was fehlt noch bis zur Angebotsreife — und f\xfcr die L\xfccken EINE Aufgabe (createTask, WhatId = MP) mit Frist vormerken, wer was liefern muss.`},{id:"sop-mp-kommunikation",label:"Kommunikation vorbereiten",description:"Wen kontaktiere ich wozu? Nachhaken, Feedback einholen, Zusage — mit Mail-Text",prompt:`Bereite die n\xe4chste Kommunikation zum Material Proposal (ID: {{entityId}}) vor — du schl\xe4gst vor, versendet wird von Hand:
1. Stand erfassen: getMaterialProposalDetails, Ansprechpartner (searchContacts mit AccountId), Bemusterungen (searchSampleSendings mit ProduktId) und offene Aufgaben (searchTasks mit WhatId) gemeinsam abfragen.
2. Befund: Was steht aus — R\xfcckmeldung zum Angebot (letzter Kontakt \xe4lter als 14 Tage?), Feedback zur Bemusterung, Zusage-Kommunikation?
3. Vorschlag, strukturiert: Adressat (Rolle + Person, Kanal), Thema, "Warum jetzt" (konkreter Befund), Dringlichkeit, Betreff, Mail-Text in der Sprache des Kontakts (sachlich, Sie-Form, mit MP-Bezeichnung und Eckdaten), n\xe4chste Wiedervorlage.
4. Aufgabe f\xfcr die Wiedervorlage vormerken (createTask, WhatId = MP, F\xe4lligkeit = Wiedervorlage).`}],[ey.f.SampleSending]:[{id:"sop-samplesending-fuehren",label:"Bemusterung führen",description:"Stand prüfen, Statuskette und nächsten Schritt benennen",prompt:`F\xfchre die Bemusterung (ID: {{entityId}}) weiter:
1. Sending lesen (getSampleSendingDetails) und das zugeh\xf6rige Material Proposal suchen (searchMaterialProposals mit AccountId des Sendings) — das MP ist die Quelle f\xfcr fehlende Angaben (Menge, Produkt, Kontakt Anlieferung, Carrier).
2. L\xfccken im Sending benennen, die aus dem MP f\xfcllbar w\xe4ren; was weder im Sending noch im MP steht, beim Nutzer erfragen — nie raten.
3. Statuskette pr\xfcfen (Draft → Ready → Ordered → Sent → Received) und den n\xe4chsten f\xe4lligen Schritt benennen.
4. Aufgabe f\xfcr den n\xe4chsten realen Handgriff vormerken (createTask, WhatId = Sending): Versand, Tracking, Wareneingang oder "Feedback erfragen und am MP dokumentieren".`},{id:"sop-samplesending-kommunikation",label:"Kommunikation vorbereiten",description:"Versandbestätigung, Feedback nachhaken, Tracking — mit Mail-Text",prompt:`Bereite die n\xe4chste Kommunikation zur Bemusterung (ID: {{entityId}}) vor — du schl\xe4gst vor, versendet wird von Hand:
1. Stand erfassen: getSampleSendingDetails, Ansprechpartner (searchContacts mit AccountId) und offene Aufgaben (searchTasks mit WhatId) gemeinsam abfragen.
2. Befund: Versendet ohne Best\xe4tigung? Versand \xe4lter als 14 Tage ohne Feedback? Tracking offen?
3. Vorschlag, strukturiert: Adressat (Empf\xe4nger des Musters bzw. Versender, Kanal), Thema, "Warum jetzt", Dringlichkeit, Betreff, Mail-Text in der Sprache des Kontakts (sachlich, Sie-Form, mit Musterbezeichnung, Versanddatum und konkreter Bitte), n\xe4chste Wiedervorlage.
4. Aufgabe f\xfcr die Wiedervorlage vormerken (createTask, WhatId = Sending).`}]},ev=c.U.div.withConfig({displayName:"PiaSopButtons.styles__SopContainer",componentId:"sc-b854fdf8-0"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  max-width: 340px;
  margin-top: 16px;
`,ew=c.U.button.withConfig({displayName:"PiaSopButtons.styles__SopCard",componentId:"sc-b854fdf8-1"})`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
  padding: 10px 14px;
  border: 1px solid ${({theme:e})=>e.palette.default.grey};
  border-radius: 8px;
  background: ${({theme:e})=>e.palette.default.greyLight};
  cursor: pointer;
  text-align: left;
  transition:
    border-color 0.15s ease,
    background-color 0.15s ease,
    box-shadow 0.15s ease;
  font-family: ${({theme:e})=>e.font.secondaryFamily};

  &:hover {
    border-color: ${({theme:e})=>e.palette.default.primary};
    background: ${({theme:e})=>e.palette.default.white};
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  }

  &:active {
    transform: scale(0.98);
  }
`,eC=c.U.span.withConfig({displayName:"PiaSopButtons.styles__SopLabel",componentId:"sc-b854fdf8-2"})`
  font-size: 13px;
  font-weight: 600;
  color: ${({theme:e})=>e.palette.default.black};
  line-height: 1.3;
`,eA=c.U.span.withConfig({displayName:"PiaSopButtons.styles__SopDescription",componentId:"sc-b854fdf8-3"})`
  font-size: 11px;
  color: ${({theme:e})=>e.palette.default.greyDark};
  line-height: 1.3;
`,eI=({onSend:e})=>{let{data:a}=(0,i.useSession)(),{pageIdentity:n}=(0,eb.s)(),r=a?.user?.role,s=n.entityType,o=n.entityId??"",l=(!s?ek.DEFAULT||[]:ek[s]||ek.DEFAULT||[]).filter(e=>!e.roles||0===e.roles.length||!!r&&e.roles.includes(r));return 0===l.length?null:(0,t.jsx)(ev,{"data-testid":"pia-sop-container",children:l.map(a=>(0,t.jsxs)(ew,{onClick:()=>e(a.prompt.replaceAll("{{entityId}}",o),a.label),"data-testid":`pia-sop-button-${a.id}`,type:"button",children:[(0,t.jsx)(eC,{children:a.label}),(0,t.jsx)(eA,{children:a.description})]},a.id))})};var e$=e.i(370891),eP=e.i(253375),eS=e.i(821175);let ej=[{match:/^Stream interrupted$/,key:"pia.error.streamInterrupted"},{match:/^Response timed out$/,key:"pia.error.responseTimeout"},{match:/^Request timed out\. Please try again\.$/,key:"pia.error.requestTimeout"},{match:/^PIA is having trouble right now\. Please try again\.$/,key:"pia.error.trouble"},{match:/^PIA is very busy right now\. Please try again in a moment\.$/,key:"pia.error.busy"},{match:/^No response stream$/,key:"pia.error.noStream"},{match:/^The selected model "(?<model>.*)" is not available\. Please try a different model\.$/,key:"pia.error.modelNotAvailable"},{match:/^The selected model "(?<model>.*)" could not process the request\. Please try a different model\.$/,key:"pia.error.modelCannotProcess"}];function e_(e,t){for(let{match:a,key:n}of ej){let i=a.exec(e);if(i){let a=i.groups?.model;return t(n,{defaultValue:e,...void 0!==a?{model:a}:{}})}}return(0,eS.f)(t,e)}var eT=e.i(351754);let eM=c.q`
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`,eB=c.U.div.withConfig({displayName:"PiaChat.styles__ChatPanel",componentId:"sc-c8451361-0"})`
  position: fixed;
  bottom: 96px;
  right: 24px;
  z-index: 998;
  width: 45vw;
  height: 70vh;
  background: ${({theme:e})=>e.palette.default.white};
  border-radius: ${({theme:e})=>e.borderRadius.box};
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  opacity: ${({$isOpen:e})=>+!!e};
  visibility: ${({$isOpen:e})=>e?"visible":"hidden"};
  transform: ${({$isOpen:e})=>e?"translateY(0) scale(1)":"translateY(20px) scale(0.95)"};
  transition:
    opacity 0.2s ease,
    visibility 0.2s ease,
    transform 0.2s ease;
  ${({$isOpen:e})=>e&&c.m`
      animation: ${eM} 0.25s ease-out;
    `}

  @media (max-width: 768px) {
    width: 100vw;
    height: 100vh;
    bottom: 0;
    right: 0;
    border-radius: 0;
  }
`,eN=c.U.div.withConfig({displayName:"PiaChat.styles__Header",componentId:"sc-c8451361-1"})`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  background: ${({theme:e})=>e.palette.default.primary};
  color: ${({theme:e})=>e.palette.default.white};
  flex-shrink: 0;
`,ez=c.U.img.withConfig({displayName:"PiaChat.styles__HeaderAvatar",componentId:"sc-c8451361-2"})`
  width: 36px;
  height: 36px;
  /* #1781: Personenbild als Wabe wie überall */
  ${q.q}
  object-fit: cover;
`,eD=c.U.div.withConfig({displayName:"PiaChat.styles__HeaderInfo",componentId:"sc-c8451361-3"})`
  flex: 1;
  min-width: 0;
`,eU=c.U.h3.withConfig({displayName:"PiaChat.styles__HeaderTitle",componentId:"sc-c8451361-4"})`
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  font-family: ${({theme:e})=>e.font.primaryFamily};
  color: ${({theme:e})=>e.palette.default.white};
`,eV=c.U.span.withConfig({displayName:"PiaChat.styles__HeaderSubtitle",componentId:"sc-c8451361-5"})`
  font-size: 12px;
  opacity: 0.8;
  font-family: ${({theme:e})=>e.font.secondaryFamily};
`,eE=c.U.div.withConfig({displayName:"PiaChat.styles__HeaderActions",componentId:"sc-c8451361-6"})`
  display: flex;
  align-items: center;
  gap: 4px;
`,eR=c.U.button.withConfig({displayName:"PiaChat.styles__HeaderButton",componentId:"sc-c8451361-7"})`
  width: 32px;
  height: 32px;
  border: none;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.palette.default.white};
  transition: background-color 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  svg {
    width: 16px;
    height: 16px;
  }
`,eF=c.U.div.withConfig({displayName:"PiaChat.styles__MessageList",componentId:"sc-c8451361-8"})`
  flex: 1;
  overflow-y: auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  scroll-behavior: smooth;

  /* Scrollbar styling */
  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({theme:e})=>e.palette.default.grey};
    border-radius: 2px;
  }
`,eW=c.U.div.withConfig({displayName:"PiaChat.styles__ErrorBanner",componentId:"sc-c8451361-9"})`
  padding: 8px 16px;
  background: ${({theme:e})=>e.palette.default.error};
  color: ${({theme:e})=>e.palette.default.white};
  font-size: 13px;
  text-align: center;
  flex-shrink: 0;
`,eK=c.U.div.withConfig({displayName:"PiaChat.styles__RateLimitInfo",componentId:"sc-c8451361-10"})`
  padding: 4px 16px;
  background: ${({theme:e})=>e.palette.default.greyLight};
  color: ${({theme:e})=>e.palette.default.greyDark};
  font-size: 11px;
  text-align: center;
  flex-shrink: 0;
`,eL=c.U.div.withConfig({displayName:"PiaChat.styles__AiDisclosure",componentId:"sc-c8451361-11"})`
  padding: ${({theme:e})=>e.padding.extrasmall} ${({theme:e})=>e.padding.default};
  background: ${({theme:e})=>e.palette.default.greyLight};
  color: ${({theme:e})=>e.palette.default.greyDark};
  flex-shrink: 0;
`,eO=c.U.div.withConfig({displayName:"PiaChat.styles__EmptyState",componentId:"sc-c8451361-12"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding: 32px;
  text-align: center;
`,eH=c.U.img.withConfig({displayName:"PiaChat.styles__EmptyAvatar",componentId:"sc-c8451361-13"})`
  width: 80px;
  height: 80px;
  /* #1781: Personenbild als Wabe wie überall */
  ${q.q}
  object-fit: cover;
  margin-bottom: 16px;
  opacity: 0.9;
`,eZ=c.U.p.withConfig({displayName:"PiaChat.styles__EmptyText",componentId:"sc-c8451361-14"})`
  font-size: 14px;
  color: ${({theme:e})=>e.palette.default.greyDark};
  line-height: 1.5;
  margin: 0;
  font-family: ${({theme:e})=>e.font.secondaryFamily};
`,eq=c.U.div.withConfig({displayName:"PiaChat.styles__ModelSelectorWrapper",componentId:"sc-c8451361-15"})`
  position: relative;
  flex-shrink: 0;
`,eG=c.U.button.withConfig({displayName:"PiaChat.styles__ModelSelectorButton",componentId:"sc-c8451361-16"})`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 3px 8px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  cursor: pointer;
  color: ${({theme:e})=>e.palette.default.white};
  font-size: 11px;
  font-family: ${({theme:e})=>e.font.secondaryFamily};
  white-space: nowrap;
  transition: background-color 0.15s ease;
  line-height: 1.3;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  svg {
    width: 10px;
    height: 10px;
    opacity: 0.7;
  }
`,eY=c.U.div.withConfig({displayName:"PiaChat.styles__ModelDropdown",componentId:"sc-c8451361-17"})`
  position: absolute;
  top: calc(100% + 6px);
  right: 0;
  z-index: ${eT.f.overlay};
  min-width: 200px;
  background: ${({theme:e})=>e.palette.default.white};
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  overflow: hidden;
`,eJ=c.U.button.withConfig({displayName:"PiaChat.styles__ModelOption",componentId:"sc-c8451361-18"})`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding: 8px 12px;
  border: none;
  background: ${({$active:e})=>e?"rgba(0, 0, 0, 0.05)":"transparent"};
  cursor: pointer;
  text-align: left;
  transition: background-color 0.15s ease;
  font-family: ${({theme:e})=>e.font.secondaryFamily};

  &:hover {
    background: rgba(0, 0, 0, 0.08);
  }

  &:not(:last-child) {
    border-bottom: 1px solid ${({theme:e})=>e.palette.default.greyLight};
  }
`,eQ=c.U.span.withConfig({displayName:"PiaChat.styles__ModelOptionLabel",componentId:"sc-c8451361-19"})`
  font-size: 13px;
  font-weight: ${({$active:e})=>e?600:400};
  color: ${({theme:e})=>e.palette.default.black};
`,eX=c.U.span.withConfig({displayName:"PiaChat.styles__ModelOptionDefault",componentId:"sc-c8451361-20"})`
  font-weight: 400;
  color: ${({theme:e})=>e.palette.default.greyDark};
`,e0=c.U.span.withConfig({displayName:"PiaChat.styles__ModelOptionDescription",componentId:"sc-c8451361-21"})`
  font-size: 11px;
  color: ${({theme:e})=>e.palette.default.greyDark};
  margin-top: 1px;
`,e1=c.U.div.withConfig({displayName:"PiaChat.styles__VoiceBar",componentId:"sc-c8451361-22"})`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border-top: 1px solid ${({theme:e})=>e.palette.default.greyLight};
  background: ${({theme:e})=>e.palette.default.greyLight};
`,e4=c.U.button.withConfig({displayName:"PiaChat.styles__VoiceMicButton",componentId:"sc-c8451361-23"})`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  border: none;
  border-radius: 18px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  user-select: none;
  touch-action: none;
  color: ${({theme:e})=>e.palette.default.white};
  background: ${({theme:e,$recording:t})=>t?e.palette.default.error:e.palette.default.primary};

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  svg {
    width: 16px;
    height: 16px;
  }
`,e2=c.U.button.withConfig({displayName:"PiaChat.styles__VoiceStopButton",componentId:"sc-c8451361-24"})`
  padding: 8px 12px;
  border-radius: 18px;
  border: 1px solid ${({theme:e})=>e.palette.default.grey};
  background: ${({theme:e})=>e.palette.default.white};
  color: ${({theme:e})=>e.palette.default.black};
  font-size: 13px;
  cursor: pointer;
`,e5=c.U.span.withConfig({displayName:"PiaChat.styles__VoiceHint",componentId:"sc-c8451361-25"})`
  margin-left: auto;
  font-size: 11px;
  color: ${({theme:e,$error:t})=>t?e.palette.default.error:e.palette.default.greyDark};
`,e3=c.q`
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.4; transform: scale(0.8); }
`,e6=c.U.span.withConfig({displayName:"PiaChat.styles__RecordingDot",componentId:"sc-c8451361-26"})`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${({theme:e})=>e.palette.default.white};
  animation: ${e3} 1s ease-in-out infinite;
`;var e8=e.i(145896);e.s(["PiaChat",0,()=>{var e,o;let c,[p,u]=(0,a.useState)(!1),{data:f}=(0,i.useSession)(),{tr:g}=(0,r.w)(),h=(0,e8.V)(),{isOpen:m,messages:x,isStreaming:b,error:y,rateLimitInfo:k,availableModels:v,voiceEnabled:w,selectedModel:C,defaultModel:A,defaultModelLabel:I,modelsLoading:$,toggleChat:P,closeChat:S,sendMessage:j,clearHistory:_,setSelectedModel:T}=(0,s.G)(),M=f?.user?.piaAvatar,B=eP.v.find(e=>e.value===M)?.image||eP.v[0].image,[N,z]=(0,a.useState)(!1),D=(0,a.useRef)(null),U=(0,a.useRef)(null),[V,E]=(0,a.useState)(!1),R=function(e){let[t,n]=(0,a.useState)(!1),[i,r]=(0,a.useState)(!1),[s,o]=(0,a.useState)(!1),[l,d]=(0,a.useState)(null),c=(0,a.useCallback)(()=>d(null),[]),p=(0,a.useRef)(null),u=(0,a.useRef)({q:[],play:0,active:!1}),f=(0,a.useCallback)(()=>{let e=u.current;try{e.audio?.pause()}catch{}e.q.forEach(e=>e.url&&URL.revokeObjectURL(e.url)),u.current={q:[],play:0,active:!1},o(!1)},[]);function g(){let e=u.current;if(e.active)return;let t=e.q[e.play];for(;t&&t.ready&&!t.url;)e.play++,t=e.q[e.play];if(!t||!t.ready)return;e.play++,e.active=!0,o(!0);let a=new Audio(t.url);e.audio=a;let n=()=>{try{URL.revokeObjectURL(t.url)}catch{}e.active=!1,e.audio=void 0,e.play>=e.q.length&&o(!1),g()};a.onended=n,a.onerror=()=>{console.warn("[PIA Voice] Audio-Wiedergabe fehlgeschlagen",a.error),d((0,em.j)("pia.voice.error.playback",{defaultValue:"Vorlesen fehlgeschlagen (Wiedergabe)"})),n()},a.play().catch(e=>{console.warn("[PIA Voice] audio.play() abgelehnt (Autoplay/CSP?)",e),d((0,em.j)("pia.voice.error.playbackBlocked",{defaultValue:"Wiedergabe blockiert — bitte einmal in die Seite klicken und erneut versuchen"})),n()})}let h=(0,a.useCallback)(e=>{let t=e.trim();if(!t)return;let a=u.current,n=a.q.length;a.q.push({ready:!1}),fetch("/api/pia/tts/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:t})}).then(e=>e.ok?e.blob():Promise.reject(Error(`tts ${e.status}`))).then(e=>{a.q[n]={ready:!0,url:URL.createObjectURL(e)},g()}).catch(e=>{console.warn("[PIA Voice] TTS-Abruf fehlgeschlagen",e),d((0,em.j)("pia.voice.error.ttsUnavailable",{defaultValue:"Vorlesen nicht möglich (Sprachdienst antwortet nicht)"})),a.q[n]={ready:!0},g()})},[]);return{recording:t,transcribing:i,speaking:s,startRecording:(0,a.useCallback)(async()=>{if(!p.current){f();try{let e,t,a=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:!0,noiseSuppression:!0,autoGainControl:!0,channelCount:1}}),i=window.AudioContext||window.webkitAudioContext;try{e=new i({sampleRate:16e3})}catch{e=new i}let r=e.createMediaStreamSource(a),s=[];try{await e.audioWorklet.addModule("/pia-pcm-worklet.js");let a=new AudioWorkletNode(e,"pia-pcm-capture",{numberOfInputs:1,numberOfOutputs:1,channelCount:1});a.port.onmessage=e=>{s.push(e.data)},t=a}catch(n){console.warn("[PIA Voice] AudioWorklet nicht verfügbar, Fallback ScriptProcessor",n);let a=e.createScriptProcessor(4096,1,1);a.onaudioprocess=e=>{s.push(new Float32Array(e.inputBuffer.getChannelData(0)))},t=a}r.connect(t),t.connect(e.destination),p.current={ctx:e,stream:a,proc:t,src:r,chunks:s},n(!0)}catch(t){console.warn("[PIA Voice] Mikrofon-Zugriff fehlgeschlagen",t);let e=t instanceof DOMException?t.name:"";d("NotAllowedError"===e?(0,em.j)("pia.voice.error.micDenied",{defaultValue:"Mikrofon-Zugriff verweigert — bitte im Browser für diese Seite erlauben"}):"NotFoundError"===e?(0,em.j)("pia.voice.error.micNotFound",{defaultValue:"Kein Mikrofon gefunden"}):"u">typeof navigator&&navigator.mediaDevices?(0,em.j)("pia.voice.error.micFailed",{defaultValue:"Mikrofon konnte nicht gestartet werden"}):(0,em.j)("pia.voice.error.micInsecure",{defaultValue:"Mikrofon nur über HTTPS oder localhost verfügbar"})),n(!1)}}},[f]),stopRecording:(0,a.useCallback)(async()=>{let t=p.current;if(!t)return;n(!1);try{"port"in t.proc&&(t.proc.port.onmessage=null),t.proc.disconnect(),t.src.disconnect(),t.stream.getTracks().forEach(e=>e.stop())}catch{}let a=function(e,t){let a=e.reduce((e,t)=>e+t.length,0);if(!a)return null;let n=new Float32Array(a),i=0;for(let t of e)n.set(t,i),i+=t.length;let r=t/16e3,s=Math.max(1,Math.floor(n.length/r)),o=new Int16Array(s);for(let e=0;e<s;e++){let t=Math.floor(e*r),a=Math.max(t+1,Math.min(n.length,Math.floor((e+1)*r))),i=0;for(let e=t;e<a;e++)i+=n[e];let s=Math.max(-1,Math.min(1,i/(a-t)));o[e]=s<0?32768*s:32767*s}let l=2*o.length,d=new ArrayBuffer(44),c=new DataView(d),p=(e,t)=>{for(let a=0;a<t.length;a++)c.setUint8(e+a,t.charCodeAt(a))};return p(0,"RIFF"),c.setUint32(4,36+l,!0),p(8,"WAVE"),p(12,"fmt "),c.setUint32(16,16,!0),c.setUint16(20,1,!0),c.setUint16(22,1,!0),c.setUint32(24,16e3,!0),c.setUint32(28,32e3,!0),c.setUint16(32,2,!0),c.setUint16(34,16,!0),p(36,"data"),c.setUint32(40,l,!0),new Blob([d,o.buffer],{type:"audio/wav"})}(t.chunks,t.ctx.sampleRate);try{await t.ctx.close()}catch{}if(p.current=null,a){r(!0);try{let t=await fetch("/api/pia/stt/",{method:"POST",headers:{"Content-Type":"audio/wav"},body:a}),n=await t.json().catch(()=>null),i=(n?.text||"").trim();t.ok?i?(d(null),e(i)):d((0,em.j)("pia.voice.error.nothingRecognised",{defaultValue:"Nichts erkannt — bitte noch einmal sprechen"})):d((0,em.j)("pia.voice.error.sttFailed",{defaultValue:"Spracherkennung fehlgeschlagen (Status {{status}})",status:t.status}))}catch(e){console.warn("[PIA Voice] STT fehlgeschlagen",e),d((0,em.j)("pia.voice.error.sttUnavailable",{defaultValue:"Spracherkennung nicht erreichbar"}))}finally{r(!1)}}},[e]),speak:h,stopSpeaking:f,error:l,clearError:c}}(j),F=(0,a.useRef)({id:null,consumed:0,done:!1}),W=(0,a.useRef)(null);(0,a.useEffect)(()=>{if(!V||0===x.length)return;let e=x[x.length-1];if("assistant"!==e.role||W.current===e.id||(F.current.id!==e.id&&(F.current={id:e.id,consumed:0,done:!1}),F.current.done))return;if(e.approval?.status==="pending"){F.current.done=!0,R.speak(g("pia.voice.approvalAnnounce",{defaultValue:"Ich habe Aktionen vorgemerkt — bitte bestätige sie auf der Karte."}));return}let t=!e.isStreaming&&!b,{segments:a,consumed:n}=function(e,t,a){let n=e.slice(t);if(!n)return{segments:[],consumed:t};let i=n.split(/\n\s*\n/),r=a?i:i.slice(0,-1),s=[],o="",l=0,d=()=>{o.trim()&&s.push(o),o=""};for(let e=0;e<r.length;e++){let t=r[e],a=t.split("\n");a.length>0&&a.every(e=>""===e.trim()||ex(e))?o=o?`${o}

${t}`:t:(d(),t.trim()&&s.push(t))}if(a)d(),l=n.length;else{let e=i[i.length-1],t=n.length-e.length;if(o){let e=n.indexOf(o);l=e>-1?e:t,o=""}else l=t}return{segments:s,consumed:t+l}}(e.content,F.current.consumed,t);for(let e of a)R.speak(e);F.current.consumed=n,t&&(F.current.done=!0)},[V,b,x]),(0,a.useEffect)(()=>{m||R.stopSpeaking()},[m]),(0,a.useEffect)(()=>{u(!0)},[]),e=[x],(0,a.useEffect)(()=>{U.current&&U.current.scrollTo({top:U.current.scrollHeight,behavior:"smooth"})},e),c=(0,a.useCallback)(e=>{"Escape"===e.key&&S()},[S]),(0,a.useEffect)(()=>{if(m)return document.addEventListener("keydown",c),()=>document.removeEventListener("keydown",c)},[m,c]),(0,a.useEffect)(()=>{if(!N)return;let e=e=>{D.current&&!D.current.contains(e.target)&&z(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[N]);let K=v.find(e=>e.id===C)?.label||(C&&C===A?I:null)||C||"...",L=g("pia.model.defaultBadge",{defaultValue:"Default"});if(!p)return null;let O=!!(o=f?.user?.role)&&er.J.has(o);if(!f?.user||!O)return null;let H=x.length>0,Z=(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(eB,{$isOpen:m,"data-testid":"pia-chat-panel",role:"dialog","aria-label":g("pia.title"),children:[(0,t.jsxs)(eN,{"data-testid":"pia-chat-header",children:[(0,t.jsx)(ez,{src:B,alt:"PIA",width:36,height:36}),(0,t.jsxs)(eD,{children:[(0,t.jsx)(eU,{children:g("pia.title")}),(0,t.jsx)(eV,{children:g("pia.subtitle")}),(0,t.jsx)(e$.f,{kind:"assistant",compact:!0,dataTestId:"pia-ai-label"})]}),!$&&v.length>1&&(0,t.jsxs)(eq,{ref:D,"data-testid":"pia-model-selector",children:[(0,t.jsxs)(eG,{onClick:()=>z(e=>!e),title:g("pia.model.select"),"data-testid":"pia-model-selector-button","data-model":C??"",children:[K,(0,t.jsx)("svg",{viewBox:"0 0 10 6",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("path",{d:"M1 1L5 5L9 1",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]}),N&&(0,t.jsx)(eY,{"data-testid":"pia-model-dropdown",children:v.map(e=>{let a=e.id===C,n=e.id===A;return(0,t.jsxs)(eJ,{$active:a,onClick:()=>{T(e.id),z(!1)},"data-testid":`pia-model-option-${e.id}`,"data-active":a?"true":"false","data-default":n?"true":"false",children:[(0,t.jsxs)(eQ,{$active:a,children:[e.label,n?(0,t.jsxs)(eX,{"data-testid":`pia-model-default-badge-${e.id}`,children:[" · ",L]}):null]}),(0,t.jsx)(e0,{children:h.text(e.description)})]},e.id)})})]}),(0,t.jsxs)(eE,{children:[w&&(0,t.jsx)(eR,{onClick:()=>{E(e=>(e?R.stopSpeaking():W.current=x[x.length-1]?.id??null,!e))},"aria-label":g("pia.voice.toggle",{defaultValue:"Voice-Modus"}),"aria-pressed":V,"data-testid":"pia-voice-toggle",title:V?g("pia.voice.off",{defaultValue:"Voice-Modus aus"}):g("pia.voice.on",{defaultValue:"Voice-Modus an (Sprechen & Vorlesen)"}),style:V?{opacity:1}:{opacity:.55},children:(0,t.jsx)(eh.f,{})}),H&&(0,t.jsx)(eR,{onClick:_,"aria-label":g("pia.actions.clearHistory"),"data-testid":"pia-chat-clear-button",title:g("pia.actions.clearHistory"),children:(0,t.jsx)(eu,{})}),(0,t.jsx)(eR,{onClick:S,"aria-label":g("pia.actions.close"),"data-testid":"pia-chat-close-button",children:(0,t.jsx)(l.f,{color:"#ffffff"})})]})]}),(0,t.jsx)(eL,{children:(0,t.jsx)(e$.f,{kind:"assistant",dataTestId:"pia-ai-disclosure"})}),y&&(0,t.jsx)(eW,{"data-testid":"pia-chat-error",children:function(e,t){switch(e.code){case"generic":default:return t("pia.error.generic");case"offline":return t("pia.error.offline");case"rate_limit_daily":return t("pia.error.rateLimit.daily");case"rate_limit_minute":return e.params?.seconds!=null?t("pia.error.rateLimit.minute",e.params):e_(e.message,t);case"rate_limit_concurrent":return t("pia.error.concurrent",{defaultValue:e.message});case"model_not_found":case"stream_interrupted":return e_(e.message,t);case"no_response":return t("pia.error.noResponse",{defaultValue:e.message})}}(y,g)}),k&&k.remainingDaily<=20&&(0,t.jsx)(eK,{"data-testid":"pia-chat-rate-limit",children:g("pia.rateLimit.remaining",{count:k.remainingDaily})}),(0,t.jsx)(eF,{ref:U,"data-testid":"pia-chat-message-list",children:H?x.map(e=>(0,t.jsx)(en,{message:e,avatarSrc:B},e.id)):(0,t.jsxs)(eO,{children:[(0,t.jsx)(eH,{src:B,alt:"PIA",width:80,height:80}),(0,t.jsx)(eZ,{children:g("pia.greeting")}),(0,t.jsx)(eI,{onSend:j})]})}),w&&V&&(0,t.jsxs)(e1,{"data-testid":"pia-voice-bar",children:[(0,t.jsxs)(e4,{type:"button",$recording:R.recording,disabled:b||R.transcribing,onClick:()=>R.recording?void R.stopRecording():void R.startRecording(),"data-testid":"pia-voice-mic",title:R.recording?g("pia.voice.stopRec",{defaultValue:"Aufnahme beenden und senden"}):g("pia.voice.startRec",{defaultValue:"Aufnahme starten"}),children:[R.recording?(0,t.jsx)(e6,{}):(0,t.jsx)(eg,{}),R.recording?g("pia.voice.recording",{defaultValue:"Aufnahme läuft — klicken zum Senden"}):R.transcribing?g("pia.voice.transcribing",{defaultValue:"Erkenne …"}):g("pia.voice.speak",{defaultValue:"Sprechen"})]}),R.speaking&&(0,t.jsx)(e2,{type:"button",onClick:R.stopSpeaking,"data-testid":"pia-voice-stop",title:g("pia.voice.stop",{defaultValue:"Vorlesen stoppen"}),children:"⏹"}),(0,t.jsx)(e$.f,{kind:"voice",compact:!0,dataTestId:"pia-voice-ai-label"}),(0,t.jsx)(e5,{$error:!!R.error,"data-testid":"pia-voice-hint",children:R.error??g("pia.voice.hint",{defaultValue:"Antworten werden vorgelesen"})})]}),(0,t.jsx)(ep,{onSend:j,disabled:b})]}),(0,t.jsx)(d,{isOpen:m,onClick:P,avatarSrc:B})]});return(0,n.createPortal)(Z,document.body)}],920403)},69075,function(e){e.n(e.i(920403))}]);