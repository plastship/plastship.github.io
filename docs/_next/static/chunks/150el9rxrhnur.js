(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,315295,e=>{"use strict";var t=e.i(997053),o=e.i(547905);let i=t.q`
  0% { filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.15)) drop-shadow(0 0 0 rgba(55, 186, 36, 0.5)); }
  70% { filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.15)) drop-shadow(0 0 12px rgba(55, 186, 36, 0)); }
  100% { filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.15)) drop-shadow(0 0 0 rgba(55, 186, 36, 0)); }
`,a=t.m`
  position: fixed;
  bottom: 24px;
  z-index: 998;
  width: 56px;
  height: 56px;
  border: none;
  background: none;
  color: ${({theme:e})=>e.palette.text.onLight};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  isolation: isolate;
  filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.15));
  transition:
    transform 0.2s ease,
    filter 0.2s ease;
  padding: 0;

  /* #1749: weiße Fläche, Symbol in festem Dunkelblau (text.onLight) — hell wie dunkel;
     das helle Dark-Primär #60A0E8 erreicht auf Weiß nur 2,7 : 1 */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: -1;
    background: ${({theme:e})=>e.palette.surface.floating};
    ${o.p}
  }

  &::after {
    content: '';
    position: absolute;
    inset: -4px;
    z-index: -2;
    background: ${({theme:e})=>e.palette.default.secondary};
    opacity: 0;
    ${o.p}
  }

  &:hover {
    transform: scale(1.08);
    filter: drop-shadow(0 6px 20px rgba(0, 0, 0, 0.2));
  }

  &:active {
    transform: scale(0.95);
  }

  &:focus-visible {
    outline: none;
  }

  &:focus-visible::after {
    opacity: 1;
  }
`,n=t.U.button.withConfig({displayName:"PiaToggleButton.styles__ToggleButton",componentId:"sc-c0d6ac9c-0"})`
  ${a}
  right: 24px;

  /* Pulse animation when chat is closed (attention grabber, 3 pulses then stops) */
  ${({$isOpen:e})=>!e&&t.m`
      animation: ${i} 2s 3;
    `}
`,s=t.U.img.withConfig({displayName:"PiaToggleButton.styles__AvatarImage",componentId:"sc-c0d6ac9c-1"})`
  width: 48px;
  height: 48px;
  ${o.p}
  object-fit: cover;
  pointer-events: none;
`,r=t.U.span.withConfig({displayName:"PiaToggleButton.styles__CloseIcon",componentId:"sc-c0d6ac9c-2"})`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.palette.text.onLight};
`;e.s(["Z",0,s,"U",0,r,"K",0,n,"u",0,a])},581496,e=>{"use strict";var t=e.i(843476),o=e.i(271645),i=e.i(174080),a=e.i(696984),n=e.i(882109),s=e.i(24024),r=e.i(993510),c=e.i(246601),l=e.i(997053),d=e.i(315295);let p=l.U.button.withConfig({displayName:"ProzessfeedbackLauncher.styles__LauncherButton",componentId:"sc-37da0306-0"})`
  /* #1781: Wabe wie der PIA-Knopf */
  ${d.u}
  right: 96px;

  svg {
    width: 28px;
    height: 28px;
  }
`;e.s(["ProzessfeedbackLauncher",0,function(){let{tr:e}=(0,a.w)(),{userContext:l}=(0,s.f)(),d=(0,r.f)(),[u,f]=(0,o.useState)(!1);return((0,o.useEffect)(()=>{f(!0)},[]),u&&l&&(0,n.A)(l,"Prozessfeedback__c","create"))?(0,i.createPortal)((0,t.jsx)(p,{onClick:d,"aria-label":e("quickWheel.actions.prozessfeedback",{defaultValue:"Prozessfeedback"}),title:e("quickWheel.actions.prozessfeedback",{defaultValue:"Prozessfeedback"}),"data-testid":"prozessfeedback-launcher",children:(0,t.jsx)(c.f,{})}),document.body):null}],581496)},354094,function(e){e.n(e.i(581496))}]);