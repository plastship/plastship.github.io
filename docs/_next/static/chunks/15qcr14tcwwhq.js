(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,[601833,e=>{var t=e.i(843476),a=e.i(271645);e.i(339806);var i=e.i(946049),r=e.i(548217),o=e.i(218595),n=e.i(997053);let l=n.U.form.withConfig({displayName:"BugReportModal.styles__Form",componentId:"sc-4e04fa39-0"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,s=n.U.div.withConfig({displayName:"BugReportModal.styles__FormGroup",componentId:"sc-4e04fa39-1"})`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,d=n.U.label.withConfig({displayName:"BugReportModal.styles__Label",componentId:"sc-4e04fa39-2"})`
  font-size: 0.875rem;
  font-weight: 600;
  color: ${({theme:e})=>e.palette.default.black};
`,u=n.U.input.withConfig({displayName:"BugReportModal.styles__Input",componentId:"sc-4e04fa39-3"})`
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
`,c=n.U.textarea.withConfig({displayName:"BugReportModal.styles__Textarea",componentId:"sc-4e04fa39-4"})`
  padding: 8px 12px;
  border: 1px solid ${({theme:e})=>e.palette.default.grey};
  border-radius: 6px;
  font-size: 0.875rem;
  font-family: monospace;
  color: ${({theme:e})=>e.palette.default.black};
  background: ${({theme:e})=>e.palette.default.white};
  outline: none;
  resize: vertical;
  min-height: 240px;
  transition: border-color 0.2s;

  &:focus {
    border-color: ${({theme:e})=>e.palette.default.primary};
  }
`,p=n.U.div.withConfig({displayName:"BugReportModal.styles__ButtonRow",componentId:"sc-4e04fa39-5"})`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 8px;
`,g=n.U.div.withConfig({displayName:"BugReportModal.styles__InfoLine",componentId:"sc-4e04fa39-6"})`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 12px;
  border-radius: 6px;
  background: ${({theme:e})=>e.palette.default.greyLight};
  font-size: 0.75rem;
  color: ${({theme:e})=>e.palette.default.greyDark};
  overflow: hidden;

  span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  strong {
    flex-shrink: 0;
    color: ${({theme:e})=>e.palette.default.black};
  }
`,f=n.U.div.withConfig({displayName:"BugReportModal.styles__InfoGrid",componentId:"sc-4e04fa39-7"})`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`,h=n.U.button.withConfig({displayName:"BugReportModal.styles__Button",componentId:"sc-4e04fa39-8"})`
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
`;var b=e.i(462294);e.i(821194);var m=e.i(99222),y=e.i(437992);e.s(["BugReportModal",0,({isOpen:e,onClose:n})=>{let{tr:w}=(0,m.f)(),x=r.w.bug,[v,k]=(0,a.useState)(x.title),[R,$]=(0,a.useState)(""),[j,B]=(0,a.useState)(!1),[C,S]=(0,a.useState)(null);(0,a.useEffect)(()=>{if(e){var t;let e={url:window.location.href,viewport:`${window.innerWidth} x ${window.innerHeight}`,screen:`${window.screen.width} x ${window.screen.height}`,dpr:`${window.devicePixelRatio}`,colorScheme:window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light",language:navigator.language,online:navigator.onLine?"yes":"no"};k(x.title),$((t=x.description,t.replace("- Browser:\n- OS:\n- Version:",`- Browser: ${"u">typeof navigator?navigator.userAgent:""}
- OS:
- Version:
- Page: ${e.url}
- Viewport: ${e.viewport}
- Screen: ${e.screen}
- DPR: ${e.dpr}
- Color Scheme: ${e.colorScheme}
- Language: ${e.language}
- Online: ${e.online}`))),S(e)}},[e,x]);let V=(0,a.useCallback)(async t=>{if(t.preventDefault(),!e)return;let a=v.trim();if(a){B(!0);try{let e=await (0,b.L)({title:a,description:R,labels:x.labels,milestone_id:30}),t={entityType:"User",entityId:"self",entityName:`Bug #${e.issue.iid}`,action:w("notifications.action.bugReportCreated",{defaultValue:"Bug Report erstellt"})};o.c.success(w("quickWheel.bugReport.created",{defaultValue:"Bug #{{iid}} created",iid:e.issue.iid}),{onClick:()=>{e.issue.webUrl&&(0,y.i)(e.issue.webUrl)},context:t}),window.dispatchEvent(new CustomEvent("gitlab-issue-created")),k(x.title),$(""),n()}catch(t){let e={entityType:"User",entityId:"self",action:w("notifications.action.bugReportFailed",{defaultValue:"Bug Report fehlgeschlagen"})};o.c.error(t instanceof Error?t.message:w("quickWheel.bugReport.createError",{defaultValue:"Failed to create bug report"}),{context:e})}finally{B(!1)}}},[e,v,R,x,n,w]);return(0,t.jsx)(i.f,{isOpen:e,onClose:n,title:w("quickWheel.actions.reportBug",{defaultValue:"Report Bug"}),size:"large",dataTestId:"bug-report-modal",children:(0,t.jsxs)(l,{onSubmit:V,"data-testid":"bug-report-form",children:[(0,t.jsxs)(s,{children:[(0,t.jsx)(d,{htmlFor:"bug-title",children:w("quickWheel.bugReport.title",{defaultValue:"Title"})}),(0,t.jsx)(u,{id:"bug-title",type:"text",value:v,onChange:e=>k(e.target.value),placeholder:w("quickWheel.bugReport.titlePlaceholder",{defaultValue:"[Bug] Describe the bug..."}),required:!0,"data-testid":"bug-report-title"})]}),(0,t.jsxs)(g,{"data-testid":"bug-report-url",children:[(0,t.jsx)("strong",{children:w("quickWheel.bugReport.page",{defaultValue:"Page:"})}),(0,t.jsx)("span",{children:C?.url})]}),(0,t.jsxs)(f,{children:[(0,t.jsxs)(g,{"data-testid":"bug-report-viewport",children:[(0,t.jsx)("strong",{children:w("quickWheel.bugReport.viewport",{defaultValue:"Viewport:"})}),(0,t.jsx)("span",{children:C?.viewport})]}),(0,t.jsxs)(g,{"data-testid":"bug-report-screen",children:[(0,t.jsx)("strong",{children:w("quickWheel.bugReport.screen",{defaultValue:"Screen:"})}),(0,t.jsx)("span",{children:C?.screen})]}),(0,t.jsxs)(g,{"data-testid":"bug-report-dpr",children:[(0,t.jsx)("strong",{children:"DPR:"}),(0,t.jsx)("span",{children:C?.dpr})]}),(0,t.jsxs)(g,{"data-testid":"bug-report-theme",children:[(0,t.jsx)("strong",{children:w("quickWheel.bugReport.theme",{defaultValue:"Theme:"})}),(0,t.jsx)("span",{children:C?.colorScheme})]})]}),(0,t.jsxs)(s,{children:[(0,t.jsx)(d,{htmlFor:"bug-description",children:w("quickWheel.bugReport.description",{defaultValue:"Description"})}),(0,t.jsx)(c,{id:"bug-description",value:R,onChange:e=>$(e.target.value),"data-testid":"bug-report-description"})]}),(0,t.jsxs)(p,{children:[(0,t.jsx)(h,{type:"button",$variant:"secondary",onClick:n,disabled:j,children:w("common.cancel",{defaultValue:"Cancel"})}),(0,t.jsx)(h,{type:"submit",$variant:"primary",disabled:j||!v.trim(),"data-testid":"bug-report-submit",children:j?w("common.submitting",{defaultValue:"Submitting..."}):w("quickWheel.bugReport.submit",{defaultValue:"Submit Bug"})})]})]})})}],601833)},462294,e=>{var t=e.i(501496);async function a(e){return(await t.k.get("/gitlab/issues",{params:e})).data}async function i(){return(await t.k.get("/gitlab/labels")).data}async function r(e){return(await t.k.get("/gitlab/milestones",{params:e})).data}async function o(){return(await t.k.get("/gitlab/members")).data}async function n(){return(await t.k.get("/gitlab/runners")).data}async function l(e){return(await t.k.post("/gitlab/issues/",e)).data}async function s(e,a){return(await t.k.patch(`/gitlab/issues/${e}/`,a)).data}async function d(e){return(await t.k.post("/gitlab/milestones/",e)).data}async function u(){return(await t.k.get("/gitlab")).data}async function c(){return(await t.k.get("/server-health")).data}e.s(["L",0,l,"t",0,d,"F",0,u,"J",0,a,"p",0,i,"R",0,o,"e",0,r,"M",0,n,"b",0,c,"i",0,s])},548217,e=>{let t={bug:{label:"Bug Report",icon:"🐛",title:"[Bug] ",description:`## Description
Describe the bug clearly and concisely.

## Steps to Reproduce
1. Go to '...'
2. Click on '...'
3. Scroll down to '...'
4. See error

## Expected Behavior
What should happen?

## Actual Behavior
What actually happens?

## Environment
- Browser:
- OS:
- Version:

## Screenshots
If applicable, add screenshots.`,labels:["bug"]},feature:{label:"Feature Request",icon:"✨",title:"[Feature] ",description:`## Summary
Brief description of the feature.

## Motivation
Why is this feature needed? What problem does it solve?

## Proposed Solution
Describe how you envision this feature working.

## Alternatives Considered
Any alternative solutions you've considered.

## Additional Context
Add any other context, mockups, or screenshots.`,labels:["enhancement"]},task:{label:"Task",icon:"📋",title:"",description:`## Objective
What needs to be done?

## Acceptance Criteria
- [ ] Criterion 1
- [ ] Criterion 2
- [ ] Criterion 3

## Notes
Any additional information.`,labels:[]},documentation:{label:"Documentation",icon:"📚",title:"[Docs] ",description:`## What needs to be documented?
Describe the documentation need.

## Location
Where should this documentation be added/updated?

## Content
Outline of what should be covered.`,labels:["documentation"]},empty:{label:"Blank Issue",icon:"📝",title:"",description:"",labels:[]}};e.s(["w",0,t,"l",0,function(){return Object.keys(t)}])}],124382,function(e){e.n(e.i(601833))}]);