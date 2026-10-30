(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,[125166,155423,e=>{e.s(["j",()=>f,"F",()=>b],125166),e.s(["x",()=>g,"W",()=>m,"F",()=>h],155423);var t,r=e.i(843476),a=e.i(997053),o=e.i(136717),n=e.i(10059),i=e.i(547905);let s=(e,t)=>{let r=(0,o.p)(e);return a.m`
    background: ${e};
    border: 0.0625rem solid ${e};
    color: ${r?"white":"black"};
    a {
      color: ${r?"white":"inherit"} !important;
      text-decoration: underline;
      &:hover {
        opacity: 0.8;
      }
    }
    ${m} {
      background: ${t??e};
      border: 0.4375rem solid ${t??"white"};
      svg {
        path,
        circle,
        rect {
          stroke: ${r?"white":"black"};
        }
      }
    }
  `},c=e=>a.m`
    ${t=>s(t.theme.palette.default.white,e)}
  `,l=e=>{let{background:t,backgroundIcon:r}=e;if((0,o.J)(t))return a.m`
      background: ${t};
      border: 0.0625rem solid ${t};
      color: ${(0,o.p)(t)?"white":"black"};
      a {
        color: ${(0,o.p)(t)?"white":"black"};
      }
      ${m} {
        background: ${t};
        border: 0.4375rem solid white;
        svg {
          path,
          circle,
          rect {
            stroke: ${(0,o.p)(t)?"white":"black"};
          }
        }
      }
    `;switch(t){case b.BLACK:return a.m`
    ${e=>s(e.theme.palette.default.black,r)}
  `;case b.WHITE:return c(r);case b.GREYLIGHT:return a.m`
    ${e=>s(e.theme.palette.default.greyLight,r)}
  `;case b.GREY:return a.m`
    ${e=>s(e.theme.palette.default.grey,r)}
  `;case b.GREYDARK:return a.m`
    ${e=>s(e.theme.palette.default.greyDark,r)}
  `;case b.PRIMARY:return a.m`
    ${e=>s(e.theme.palette.default.primary,r)}
  `;case b.SECONDARY:return a.m`
    ${e=>s(e.theme.palette.default.secondary,r)}
  `;case b.TERTIARY:return a.m`
    ${e=>s(e.theme.palette.default.tertiary,r)}
  `;case b.ERROR:return a.m`
    ${e=>s(e.theme.palette.default.error,r)}
    box-shadow: none;
  `;case b.WARNING:return a.m`
    ${e=>s(e.theme.palette.default.warning,r)}
    box-shadow: none;
  `;case b.SUCCESS:return a.m`
    ${e=>s(e.theme.palette.default.success,r)}
    box-shadow: none;
  `;case b.TRANSPARENT:return a.m`
    background: transparent;
    border: none;
    color: ${e=>e.theme.palette.default.black};
    box-shadow: none;
    ${m} {
      background: ${e=>e.theme.palette.default.primary};
      border: 0.4375rem solid ${e=>e.theme.palette.default.white};
      svg {
        path,
        circle,
        rect {
          stroke: ${e=>(0,o.p)(e.theme.palette.default.primary)?"white":"black"};
        }
      }
    }
  `;default:return c(r)}},d="3rem",u="2rem",h=a.U.div.withConfig({displayName:"Box.styles__Root",componentId:"sc-d40c8c4-0"})`
  display: flex;
  flex-direction: column;
  width: calc(100% - 4rem);
  padding: ${d} ${u} ${d} ${u};
  max-width: 100%;
  margin: ${e=>e.$icon?e.theme.margin.default:0} 0
    ${e=>e.theme.margin.large} 0;
  border-radius: ${"8px"};
  transition: box-shadow 0.15s ease-in-out;
  box-shadow: 0rem 0rem 1.875rem 0rem rgba(151, 151, 151, 0.15);
  ${({$edges:e})=>(0,i.n)(e)}
  ${e=>l({background:e.$background,backgroundIcon:e.backgroundIcon})}

  /* Link styles based on background */
  a {
    color: ${e=>{let t=e.$background;if((0,o.J)(t))return(0,o.p)(t)?"white":"inherit";switch(t){case b.PRIMARY:case b.SECONDARY:case b.BLACK:case b.GREYDARK:return"white";default:return"inherit"}}};
    text-decoration: underline;
    &:hover {
      opacity: 0.8;
    }
  }

  ${n.f} {
    @media (min-width: ${e=>e.theme.device.tablet}) {
      width: 100%;
      height: auto;
      max-width: 100%;
    }
  }
  &::before {
    position: absolute;
    top: 0;
    left: 0;
    content: '';
    height: 100%;
    width: 100%;
    border-radius: 8px;
    background: ${e=>e.$background};
    opacity: 0.85;
    display: ${e=>e.backgroundImage&&e.backgroundTransparency?"block":"none"};
    z-index: 10;
  }
`,m=a.U.div.withConfig({displayName:"Box.styles__Icon",componentId:"sc-d40c8c4-1"})`
  position: absolute;
  top: -2rem;
  left: 1.5rem;
  z-index: 30;
  ${e=>l({background:e.$background,backgroundIcon:e.backgroundIcon})}
  background: none;
  border-radius: 8px;
  padding: 0.3825rem 1.125rem;
  border: 0.1875rem solid white;
  display: flex;
  justify-content: center;
  align-items: center;
`,g=a.U.div.withConfig({displayName:"Box.styles__Children",componentId:"sc-d40c8c4-2"})`
  position: relative;
  z-index: 20;
  height: 100%;
  display: flex;
  flex-direction: column;
`;e.i(710788);var k=e.i(363451);e.i(311046);var p=e.i(499881),b=((t={}).PRIMARY="primary",t.SECONDARY="secondary",t.TERTIARY="tertiary",t.WHITE="white",t.BLACK="black",t.GREYLIGHT="greyLight",t.GREY="grey",t.GREYDARK="greyDark",t.ERROR="error",t.WARNING="warning",t.SUCCESS="success",t.TRANSPARENT="transparent",t);let f=e=>{let{children:t,dataTestId:a,background:o,backgroundIcon:n,icon:i,backgroundImage:s,backgroundImageOffset:c,backgroundTransparency:l,onClick:d,edges:u}=e,b=(0,p.N)(u);return(0,r.jsxs)(h,{className:e.className,"data-testid":a||"box-root",$edges:b?u:void 0,$background:o||"white",backgroundIcon:n,$icon:i,backgroundImage:s,backgroundImageOffset:c,backgroundTransparency:l,onClick:()=>void(d&&d()),style:{backgroundImage:e.backgroundImage?`url(${e.backgroundImage})`:void 0,backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center center"},children:[b&&u&&(0,r.jsx)(k.f,{edges:u,dataTestId:`${a??"box-root"}-edge`}),i&&(0,r.jsx)(m,{$background:o||"white",children:i}),(0,r.jsx)(g,{children:t})]})}},13365,273004,e=>{var t=e.i(843476),r=e.i(997053);let a=r.U.svg.withConfig({displayName:"IconRecycle.styles__Root",componentId:"sc-64905e4d-0"})``,o=e=>(0,t.jsxs)(a,{className:e.className,"data-testid":"icon-recycle-root",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:[(0,t.jsx)("title",{children:"recycle"}),(0,t.jsxs)("g",{fill:"currentColor",strokeLinecap:"square",strokeLinejoin:"miter",strokeMiterlimit:"10",children:[(0,t.jsx)("path",{d:"M20.1467 15L22.1465 18.5044C22.5269 19.171 22.0455 20 21.278 20H12H12.55",stroke:"currentColor",strokeWidth:"2",fill:"none"}),(0,t.jsx)("path",{d:"M6.29511 11.1887L6.40852 11L1.91049 18.4849C1.50995 19.1514 1.99002 20 2.76762 20H7",stroke:"currentColor",strokeWidth:"2",fill:"none"}),(0,t.jsx)("path",{d:"M16.6755 10.4375L17 11L15.6535 8.66551L12.675 3.50177C12.2902 2.83463 11.3273 2.83463 10.9425 3.50177L9 6.8695",stroke:"currentColor",strokeWidth:"2",fill:"none"}),(0,t.jsx)("path",{d:"M3.32578 11.8787L6.22354 11.1022L6.99998 14",stroke:"currentColor",strokeWidth:"2",fill:"none"}),(0,t.jsx)("path",{d:"M17.7765 8.10224L17 11L14.1022 10.2235",stroke:"currentColor",strokeWidth:"2",fill:"none"}),(0,t.jsx)("path",{d:"M14.1213 22.1213L12 20L14.1213 17.8787",stroke:"currentColor",strokeWidth:"2",fill:"none"})]})]});e.s(["f",0,o],273004),e.s(["f",0,o],13365)},837009,e=>{e.s(["f",0,[{id:"proven",name:"Proven",color:"#CD7F32"},{id:"plus",name:"Plus",color:"#C0C0C0"},{id:"premium",name:"Premium",color:"#D3AF37"}]])},941408,e=>{let t=e=>e<=0?0:e>=1?1:e,r=(e,t)=>1-3*t+3*e,a=(e,t)=>3*t-6*e,o=(e,t,o)=>((r(t,o)*e+a(t,o))*e+3*t)*e,n=(e,t,o)=>3*r(t,o)*e*e+2*a(t,o)*e+3*t,i=(e,r,a,i)=>e===r&&a===i?t:t=>t<=0?0:t>=1?1:o((t=>{let r=t;for(let i=0;i<6;i+=1){let i=n(r,e,a);if(i<.001)break;if((r-=(o(r,e,a)-t)/i)<=0)return 0;if(r>=1)return 1}if(1e-5>Math.abs(o(r,e,a)-t))return r;let i=0,s=1;for(let n=0;n<24;n+=1)o(r=(i+s)/2,e,a)<t?i=r:s=r;return r})(t),r,i),s=i(.2,.8,.2,1),c=i(.65,0,.35,1),l=i(.42,0,1,1),d=i(.25,.1,.25,1),u=i(0,0,.58,1),h=i(.42,0,.58,1);e.s(["D",0,l,"G",0,h,"w",0,u,"m",0,s,"T",0,c,"O",0,d,"Y",0,t,"j",0,(e,t=256)=>{let r=new Float32Array(t+1);for(let a=0;a<=t;a+=1)r[a]=e(a/t);return r},"b",0,(e,r)=>{let a=e.length-1,o=t(r)*a,n=Math.floor(o);if(n>=a)return e[a];let i=o-n;return e[n]*(1-i)+e[n+1]*i}])}],641719,e=>{e.v(t=>Promise.all(["static/chunks/0z90ght4od9k2.js","static/chunks/0xdtoai3u3tsh.js","static/chunks/34ueaqm6fy480.js","static/chunks/1u6u5f6sjavzf.js","static/chunks/1q474mcush0w6.js"].map(t=>e.l(t))).then(()=>t(164522)))},626580,e=>{e.v(t=>Promise.all(["static/chunks/31vowgjgr0nvz.js","static/chunks/34ueaqm6fy480.js","static/chunks/1u6u5f6sjavzf.js"].map(t=>e.l(t))).then(()=>t(770329)))},887280,e=>{e.v(t=>Promise.all(["static/chunks/1gemcftz-44wt.js","static/chunks/34ueaqm6fy480.js","static/chunks/1u6u5f6sjavzf.js"].map(t=>e.l(t))).then(()=>t(272700)))}]);