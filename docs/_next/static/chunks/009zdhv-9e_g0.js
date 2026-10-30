(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,457651,e=>{"use strict";var t=e.i(843476),i=e.i(271645),o=e.i(174080),r=e.i(997053),n=e.i(351754);let a=r.q`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,s=r.U.div.withConfig({displayName:"TourHighlight.styles__Root",componentId:"sc-66dacb4b-0"})`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: ${n.f.tour};
  pointer-events: ${({$isOpen:e})=>e?"auto":"none"};
  opacity: ${({$isOpen:e})=>+!!e};
  visibility: ${({$isOpen:e})=>e?"visible":"hidden"};
  transition:
    opacity 0.3s ease-in-out,
    visibility 0.3s ease-in-out;
  animation: ${({$isOpen:e})=>e?a:"none"} 0.3s ease-out;
`,l=r.U.svg.withConfig({displayName:"TourHighlight.styles__SvgOverlay",componentId:"sc-66dacb4b-1"})`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`,d=r.U.rect.withConfig({displayName:"TourHighlight.styles__MaskRect",componentId:"sc-66dacb4b-2"})`
  transition:
    x 0.3s ease-in-out,
    y 0.3s ease-in-out,
    width 0.3s ease-in-out,
    height 0.3s ease-in-out,
    rx 0.3s ease-in-out,
    ry 0.3s ease-in-out;
`,c=10,p=8,u=({targetRect:e,padding:r=c,rounded:n=p,isOpen:a,onMaskClick:u,dataTestId:h="tour-highlight",className:f})=>{let[m,g]=(0,i.useState)(!1),[w,y]=(0,i.useState)({width:0,height:0});(0,i.useEffect)(()=>{g(!0),y({width:window.innerWidth,height:window.innerHeight});let e=()=>{y({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]);let x=(0,i.useCallback)(e=>{e.stopPropagation(),u?.()},[u]);if(!m||!a)return null;let{width:b,height:$}=w,v=`tour-highlight-mask-${h}`,k=e?{x:e.left-r,y:e.top-r,width:e.width+2*r,height:e.height+2*r}:null,C=(0,t.jsx)(s,{$isOpen:a,className:f,"data-testid":h,children:(0,t.jsxs)(l,{"data-testid":`${h}-svg`,onClick:x,role:"presentation",children:[(0,t.jsx)("defs",{children:(0,t.jsxs)("mask",{id:v,children:[(0,t.jsx)("rect",{x:"0",y:"0",width:"100%",height:"100%",fill:"white"}),k&&(0,t.jsx)(d,{x:k.x,y:k.y,width:Math.max(0,k.width),height:Math.max(0,k.height),rx:n,ry:n,fill:"black","data-testid":`${h}-cutout`})]})}),(0,t.jsx)("rect",{x:"0",y:"0",width:b,height:$,fill:"rgba(0, 0, 0, 0.5)",mask:`url(#${v})`,"data-testid":`${h}-overlay`})]})});return(0,o.createPortal)(C,document.body)},h=r.q`
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,f=r.U.div.withConfig({displayName:"TourTooltip.styles__Root",componentId:"sc-f3c8be8f-0"})`
  position: fixed;
  top: ${({$top:e})=>e}px;
  left: ${({$left:e})=>e}px;
  max-width: ${({$maxWidth:e})=>e}px;
  z-index: ${n.f.tourTooltip};
  opacity: ${({$isOpen:e})=>+!!e};
  visibility: ${({$isOpen:e})=>e?"visible":"hidden"};
  transition:
    top 0.3s ease-in-out,
    left 0.3s ease-in-out,
    opacity 0.2s ease-in-out,
    visibility 0.2s ease-in-out;
  animation: ${({$isOpen:e})=>e?h:"none"} 0.3s ease-out;
`,m=r.U.div.withConfig({displayName:"TourTooltip.styles__Content",componentId:"sc-f3c8be8f-1"})`
  background: ${({theme:e})=>e.palette.default.white};
  border-radius: ${({theme:e})=>e.borderRadius.box};
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  padding: ${({theme:e})=>e.padding.default};
  font-family: ${({theme:e})=>e.font.primaryFamily};
  color: ${({theme:e})=>e.palette.default.black};
  position: relative;
`,g=r.U.div.withConfig({displayName:"TourTooltip.styles__Arrow",componentId:"sc-f3c8be8f-2"})`
  position: absolute;
  width: 0;
  height: 0;
  border-style: solid;

  ${({$position:e,$arrowSize:t})=>((e,t)=>{switch(e){case"bottom":return r.m`
        top: -${t}px;
        border-width: 0 ${t}px ${t}px ${t}px;
        border-color: transparent transparent ${({theme:e})=>e.palette.default.white}
          transparent;
      `;case"top":return r.m`
        bottom: -${t}px;
        border-width: ${t}px ${t}px 0 ${t}px;
        border-color: ${({theme:e})=>e.palette.default.white} transparent transparent
          transparent;
      `;case"right":return r.m`
        left: -${t}px;
        border-width: ${t}px ${t}px ${t}px 0;
        border-color: transparent ${({theme:e})=>e.palette.default.white} transparent
          transparent;
      `;case"left":return r.m`
        right: -${t}px;
        border-width: ${t}px 0 ${t}px ${t}px;
        border-color: transparent transparent transparent
          ${({theme:e})=>e.palette.default.white};
      `;default:return""}})(e,t)}

  ${({$position:e,$offset:t})=>"top"===e||"bottom"===e?r.m`
        left: ${t}px;
      `:r.m`
      top: ${t}px;
    `}
`,w=10,y=380,x=({targetRect:e,position:r="bottom",children:n,isOpen:a,arrowSize:s=w,maxWidth:l=y,dataTestId:d="tour-tooltip",className:c})=>{let[p,u]=(0,i.useState)(!1),[h,x]=(0,i.useState)({top:0,left:0}),[b,$]=(0,i.useState)(r),[v,k]=(0,i.useState)(0),C=(0,i.useRef)(null);(0,i.useEffect)(()=>{u(!0)},[]);let j=(0,i.useCallback)(()=>{if(!e||!C.current)return;let t=C.current.getBoundingClientRect(),i=s+8,o=0,n=0,a=r,l=t.width/2-s,d={bottom:{top:e.top+e.height+i,left:e.left+e.width/2-t.width/2},top:{top:e.top-t.height-i,left:e.left+e.width/2-t.width/2},right:{top:e.top+e.height/2-t.height/2,left:e.left+e.width+i},left:{top:e.top+e.height/2-t.height/2,left:e.left-t.width-i},center:{top:window.innerHeight/2-t.height/2,left:window.innerWidth/2-t.width/2}},c=d[r];if(o=c.top,n=c.left,"bottom"===r&&o+t.height>window.innerHeight-16?(a="top",o=d.top.top,n=d.top.left):"top"===r&&o<16?(a="bottom",o=d.bottom.top,n=d.bottom.left):"right"===r&&n+t.width>window.innerWidth-16?(a="left",o=d.left.top,n=d.left.left):"left"===r&&n<16&&(a="right",o=d.right.top,n=d.right.left),n<16){let e=16-n;n=16,("top"===a||"bottom"===a)&&(l=Math.max(s,l-e))}if(n+t.width>window.innerWidth-16){let e=n+t.width-(window.innerWidth-16);n=window.innerWidth-16-t.width,("top"===a||"bottom"===a)&&(l=Math.min(t.width-3*s,l+e))}x({top:o=Math.max(16,Math.min(o,window.innerHeight-t.height-16)),left:n}),$(a),k(l)},[e,r,s]);if((0,i.useEffect)(()=>{a&&e&&requestAnimationFrame(j)},[a,e,j]),(0,i.useEffect)(()=>{if(!a)return;let e=()=>requestAnimationFrame(j);return window.addEventListener("resize",e),window.addEventListener("scroll",e,!0),()=>{window.removeEventListener("resize",e),window.removeEventListener("scroll",e,!0)}},[a,j]),!p||!a)return null;let _="center"!==b&&null!==e,T=(0,t.jsx)(f,{$isOpen:a,$top:h.top,$left:h.left,$maxWidth:l,className:c,"data-testid":d,children:(0,t.jsxs)(m,{ref:C,"data-testid":`${d}-content`,children:[_&&(0,t.jsx)(g,{$position:b,$arrowSize:s,$offset:v,"data-testid":`${d}-arrow`}),n]})});return(0,o.createPortal)(T,document.body)},b=r.U.span.withConfig({displayName:"TourBadge.styles__Root",componentId:"sc-5b292160-0"})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.125rem 0.5rem;
  border-radius: 1rem;
  background: ${({theme:e})=>e.palette.default.primary};
  color: ${({theme:e})=>e.palette.default.white};
  font-family: ${({theme:e})=>e.font.secondaryFamily};
  font-size: 12px;
  font-weight: 600;
  line-height: 18px;
  white-space: nowrap;
  user-select: none;
`,$=({current:e,total:i,dataTestId:o="tour-badge",className:r})=>{if(i<=0)return null;let n=Math.max(1,Math.min(e,i));return(0,t.jsxs)(b,{className:r,"data-testid":o,children:[n," / ",i]})},v=r.U.div.withConfig({displayName:"TourProgress.styles__Root",componentId:"sc-ecdae52b-0"})`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
`,k=r.U.div.withConfig({displayName:"TourProgress.styles__DotsContainer",componentId:"sc-ecdae52b-1"})`
  display: flex;
  gap: 0.375rem;
  justify-content: center;
  align-items: center;
`,C=r.U.button.withConfig({displayName:"TourProgress.styles__Dot",componentId:"sc-ecdae52b-2"})`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: none;
  padding: 0;
  cursor: pointer;
  transition:
    background 0.2s ease-in-out,
    transform 0.2s ease-in-out;

  ${({$isActive:e,$isCompleted:t,theme:i})=>e?r.m`
        background: ${i.palette.default.primary};
        transform: scale(1.3);
      `:t?r.m`
        background: ${i.palette.default.primary};
        opacity: 0.5;
      `:r.m`
      background: ${i.palette.default.grey};
    `}

  &:hover {
    transform: scale(1.4);
  }

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.palette.default.primary};
    outline-offset: 2px;
  }
`,j=r.U.div.withConfig({displayName:"TourProgress.styles__BarContainer",componentId:"sc-ecdae52b-3"})`
  width: 100%;
  height: 3px;
  background: ${({theme:e})=>e.palette.default.grey};
  border-radius: 2px;
  overflow: hidden;
`,_=r.U.div.withConfig({displayName:"TourProgress.styles__BarFill",componentId:"sc-ecdae52b-4"})`
  height: 100%;
  width: ${({$progress:e})=>e}%;
  background: ${({theme:e})=>e.palette.default.primary};
  border-radius: 2px;
  transition: width 0.3s ease-in-out;
`,T=({current:e,total:i,onDotClick:o,showDots:r=!0,showBar:n=!0,dataTestId:a="tour-progress",className:s})=>{if(i<=0)return null;let l=Math.max(0,Math.min(e,i-1)),d=(l+1)/i*100;return(0,t.jsxs)(v,{className:s,"data-testid":a,children:[r&&(0,t.jsx)(k,{"data-testid":`${a}-dots`,children:Array.from({length:i},(e,r)=>(0,t.jsx)(C,{$isActive:r===l,$isCompleted:r<l,onClick:()=>o?.(r),"aria-label":`Step ${r+1} of ${i}`,"aria-current":r===l?"step":void 0,"data-testid":`${a}-dot-${r}`},r))}),n&&(0,t.jsx)(j,{"data-testid":`${a}-bar`,children:(0,t.jsx)(_,{$progress:d,role:"progressbar","aria-valuenow":l+1,"aria-valuemin":1,"aria-valuemax":i,"data-testid":`${a}-bar-fill`})})]})},S=r.U.div.withConfig({displayName:"TourStep.styles__StepContainer",componentId:"sc-8d29aee6-0"})`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.margin.small};
  min-width: 280px;
  max-width: 100%;
`,N=r.U.div.withConfig({displayName:"TourStep.styles__StepHeader",componentId:"sc-8d29aee6-1"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.margin.small};
`,I=r.U.h4.withConfig({displayName:"TourStep.styles__StepTitle",componentId:"sc-8d29aee6-2"})`
  font-family: ${({theme:e})=>e.font.primaryFamily};
  font-size: 20px;
  font-weight: 700;
  line-height: 26px;
  color: ${({theme:e})=>e.palette.default.black};
  margin: 0;
`,E=r.U.div.withConfig({displayName:"TourStep.styles__StepContent",componentId:"sc-8d29aee6-3"})`
  font-family: ${({theme:e})=>e.font.secondaryFamily};
  font-size: 14px;
  line-height: 22px;
  color: ${({theme:e})=>e.palette.default.greyDark};
  margin: 0;
`,U=r.U.button.withConfig({displayName:"TourStep.styles__CloseButton",componentId:"sc-8d29aee6-4"})`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border: none;
  border-radius: 50%;
  background: transparent;
  color: ${({theme:e})=>e.palette.default.greyDark};
  cursor: pointer;
  padding: 0;
  flex-shrink: 0;
  transition:
    background 0.2s ease-in-out,
    color 0.2s ease-in-out;

  &:hover {
    background: ${({theme:e})=>e.palette.default.greyLight};
    color: ${({theme:e})=>e.palette.default.black};
  }

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.palette.default.primary};
    outline-offset: 2px;
  }

  svg {
    width: 16px;
    height: 16px;
  }
`,R=r.U.div.withConfig({displayName:"TourStep.styles__NavigationContainer",componentId:"sc-8d29aee6-5"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.margin.small};
  margin-top: ${({theme:e})=>e.margin.extrasmall};
`,L=r.U.div.withConfig({displayName:"TourStep.styles__NavigationLeft",componentId:"sc-8d29aee6-6"})`
  flex-shrink: 0;
`,z=r.U.div.withConfig({displayName:"TourStep.styles__NavigationRight",componentId:"sc-8d29aee6-7"})`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.margin.extrasmall};
`,M=r.U.button.withConfig({displayName:"TourStep.styles__NavButton",componentId:"sc-8d29aee6-8"})`
  font-family: ${({theme:e})=>e.font.primaryFamily};
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  border: none;
  border-radius: ${({theme:e})=>e.borderRadius.input};
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition:
    background 0.2s ease-in-out,
    color 0.2s ease-in-out;

  ${({$variant:e,theme:t})=>{switch(e){case"primary":return`
          background: ${t.palette.default.primary};
          color: ${t.palette.default.white};
          &:hover { opacity: 0.9; }
        `;case"secondary":return`
          background: ${t.palette.default.greyLight};
          color: ${t.palette.default.black};
          &:hover { background: ${t.palette.default.grey}; }
        `;case"skip":return`
          background: transparent;
          color: ${t.palette.default.greyDark};
          padding: 0.5rem 0.5rem;
          &:hover { color: ${t.palette.default.black}; }
        `}}}

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.palette.default.primary};
    outline-offset: 2px;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;e.i(821194);var B=e.i(99222);let D=()=>(0,t.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[(0,t.jsx)("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),(0,t.jsx)("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}),F=({step:e,current:o,total:r,title:n,content:a,onNext:s,onPrev:l,onSkip:d,onClose:c,onDotClick:p,isFirst:u,isLast:h,targetRect:f,dataTestId:m="tour-step",className:g})=>{let{tr:w}=(0,B.f)(),y=(0,i.useCallback)(e=>{switch(e.key){case"ArrowRight":case"Enter":e.preventDefault(),h?c():s();break;case"ArrowLeft":e.preventDefault(),u||l();break;case"Escape":e.preventDefault(),c()}},[u,h,s,l,c]);return(0,i.useEffect)(()=>(document.addEventListener("keydown",y),()=>document.removeEventListener("keydown",y)),[y]),(0,t.jsx)(x,{targetRect:f,position:e.position||"bottom",isOpen:!0,dataTestId:`${m}-tooltip`,className:g,children:(0,t.jsxs)(S,{"data-testid":m,children:[(0,t.jsxs)(N,{"data-testid":`${m}-header`,children:[(0,t.jsx)($,{current:o+1,total:r,dataTestId:`${m}-badge`}),(0,t.jsx)(U,{onClick:c,"aria-label":w("common.tour.close",{defaultValue:"Close tour"}),"data-testid":`${m}-close`,children:(0,t.jsx)(D,{})})]}),(0,t.jsx)(I,{"data-testid":`${m}-title`,children:n}),(0,t.jsx)(E,{"data-testid":`${m}-content`,children:a}),(0,t.jsx)(T,{current:o,total:r,onDotClick:p,showDots:r<=12,showBar:!0,dataTestId:`${m}-progress`}),(0,t.jsxs)(R,{"data-testid":`${m}-navigation`,children:[(0,t.jsx)(L,{children:(0,t.jsx)(M,{$variant:"skip",onClick:d,"data-testid":`${m}-skip`,children:w("common.tour.skip",{defaultValue:"Skip"})})}),(0,t.jsxs)(z,{children:[!u&&(0,t.jsx)(M,{$variant:"secondary",onClick:l,"data-testid":`${m}-prev`,children:w("common.back",{defaultValue:"Back"})}),(0,t.jsx)(M,{$variant:"primary",onClick:h?c:s,"data-testid":`${m}-next`,children:h?w("common.tour.done",{defaultValue:"Done"}):w("common.tour.next",{defaultValue:"Next"})})]})]})]})})};e.s(["TourOverlay",0,({tour:e,currentStep:o,isOpen:r,onNext:n,onPrev:a,onSkip:s,onClose:l,onDotClick:d,t:c,dataTestId:p="tour-overlay"})=>{let[h,f]=(0,i.useState)(null),[m,g]=(0,i.useState)(!1),w=(0,i.useRef)(""),y=(0,i.useRef)(null),x=e.steps[o],b=(0,i.useCallback)((e,t=e)=>{if(c){let i=c(e);return i!==e?i:t}return t},[c]),$=(0,i.useCallback)(()=>{if(!x?.selector){f(null),g(!0);return}let e=document.querySelector(x.selector);if(e){let t=e.getBoundingClientRect();f({top:t.top,left:t.left,width:t.width,height:t.height}),g(!0)}else f(null),g(!0)},[x?.selector]),v=(0,i.useCallback)(()=>{if(!x?.selector)return void g(!0);let e=document.querySelector(x.selector);if(e)e.scrollIntoView({behavior:"smooth",block:"center"}),setTimeout(()=>{$()},300);else if(x.waitForSelector){let e=new MutationObserver(()=>{let t=document.querySelector(x.selector);t&&(e.disconnect(),t.scrollIntoView({behavior:"smooth",block:"center"}),setTimeout($,300))});e.observe(document.body,{childList:!0,subtree:!0}),setTimeout(()=>{e.disconnect(),g(!0)},5e3)}else g(!0)},[x?.selector,x?.waitForSelector,$]);if((0,i.useEffect)(()=>(r&&(w.current=document.body.style.overflow,document.body.style.overflow="hidden"),()=>{document.body.style.overflow=w.current}),[r]),(0,i.useEffect)(()=>{if(!r||!x?.selector)return;let e=document.querySelector(x.selector);if(e)return y.current&&y.current.disconnect(),y.current=new ResizeObserver(()=>{$()}),y.current.observe(e),()=>{y.current?.disconnect()}},[r,x?.selector,$]),(0,i.useEffect)(()=>{r&&(g(!1),v())},[r,o,v]),(0,i.useEffect)(()=>{if(!r)return;let e=()=>$();return window.addEventListener("resize",e),window.addEventListener("scroll",e,!0),()=>{window.removeEventListener("resize",e),window.removeEventListener("scroll",e,!0)}},[r,$]),(0,i.useEffect)(()=>{r&&m&&x?.action&&x.action()},[r,m,o,x?.action,x]),!r||!x)return null;let k=b(x.titleKey,x.titleKey.split(".").pop()||""),C=b(x.contentKey,x.contentKey.split(".").pop()||"");return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(u,{targetRect:h,isOpen:r&&m,onMaskClick:l,dataTestId:`${p}-highlight`}),m&&(0,t.jsx)(F,{step:x,current:o,total:e.steps.length,title:k,content:C,onNext:n,onPrev:a,onSkip:s,onClose:l,onDotClick:d,isFirst:0===o,isLast:o===e.steps.length-1,targetRect:h,dataTestId:`${p}-step`})]})}],457651)},95124,function(e){e.n(e.i(457651))}]);