(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,[538594,e=>{var t=e.i(843476),i=e.i(997053);let a=i.U.svg.withConfig({displayName:"IconDownload.styles__Root",componentId:"sc-985edd3b-0"})``;e.s(["f",0,e=>(0,t.jsx)(a,{className:e.className,"data-testid":"icon-download-root",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("path",{d:"M8.01562 15.784H5.21429C3.43908 15.784 2 14.5585 2 12.7614C2 10.9644 3.43908 9.50762 5.21429 9.50762C5.335 9.50762 5.45417 9.51436 5.57143 9.52748V9.50762H5.61564C5.58646 9.27074 5.57143 9.02942 5.57143 8.78455C5.57143 5.58983 8.1298 3 11.2857 3C13.4228 3 15.2859 4.1876 16.2661 5.94642C16.5056 5.91075 16.7507 5.89227 17 5.89227C19.7614 5.89227 22 8.15838 22 10.9538C22 13.5036 20.1374 15.3819 17.7143 15.7328H15.125M11.6429 9.86915V21M11.6429 21L9.10937 18.5008M11.6429 21L14.1094 18.5008",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})],538594)},481804,e=>{let t=e.i(538594).f;e.s(["f",0,t])},586531,682194,e=>{var t=e.i(843476),i=e.i(271645),a=e.i(325164);e.i(710788);var n=e.i(599858);e.i(352162);var o=e.i(808847),s=e.i(791777);e.i(311046);var r=e.i(650529),l=e.i(355351),d=e.i(481804);e.i(821194);var c=e.i(99222),p=e.i(666629),h=e.i(891567);let m={name:h.Y.name,street:h.Y.street,postalCode:h.Y.postalCode,city:h.Y.locality,country:"Germany",url:"https://plastship.com"};function u(e){return e.replace(/\\/g,"\\\\").replace(/,/g,"\\,").replace(/;/g,"\\;").replace(/\r\n|\r|\n/g,"\\n")}function f(e){let t=0;for(let i of e){let e=i.codePointAt(0)??0;t+=e<128?1:e<2048?2:e<65536?3:4}return t}function x(e){if(75>=f(e))return e;let t=[],i="",a=0,n=75;for(let o of e){let e=f(o);a+e>n&&(t.push(i),i="",a=0,n=74),i+=o,a+=e}return t.push(i),t.join(`\r
 `)}let g={ä:"ae",ö:"oe",ü:"ue",Ä:"Ae",Ö:"Oe",Ü:"Ue",ß:"ss"};var y=e.i(997053),b=e.i(706994);let w=y.U.article.withConfig({displayName:"TeamMemberCard.styles__Root",componentId:"sc-2c9d3046-0"})`
  position: relative;
  display: flex;
  flex-direction: column;
  /* globals.css gibt jedem article die Seitenfarbe; auf getönten Bändern
     stand die Karte sonst als weißes Rechteck hinter der Wabe */
  background: transparent;
  color: ${({theme:e})=>e.palette.site.text};
`,v=y.U.div.withConfig({displayName:"TeamMemberCard.styles__Photo",componentId:"sc-2c9d3046-1"})`
  position: relative;
  width: 100%;
  /* Höhe eines regelmäßigen Sechsecks der Breite (PHOTO_BOX_RATIO im Bauteil) */
  aspect-ratio: 866 / 1000;
  overflow: hidden;
  background: ${({theme:e})=>e.palette.site.tint};

  /* #1473: next/image mit width/height statt fill — füllt die Fläche per CSS */
  img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
  }

  /* Mit Maske zeigt die Kachelebene das Foto — Box und Bild darunter treten zurück */
  &[data-masked='true'] {
    background: transparent;

    img {
      visibility: hidden;
    }
  }
`,C=y.U.span.withConfig({displayName:"TeamMemberCard.styles__Initials",componentId:"sc-2c9d3046-2"})`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${({theme:e})=>e.font.primaryFamily};
  font-size: 40px;
  font-weight: 700;
  color: ${({theme:e})=>e.palette.site.blue};
`,$=y.U.div.withConfig({displayName:"TeamMemberCard.styles__TileLayer",componentId:"sc-2c9d3046-3"})`
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
`,j=y.q`
  0%, 100% { fill-opacity: 1; }
  50% { fill-opacity: ${1-2*r.H}; }
`,T=(0,y.U)(b.f).withConfig({displayName:"TeamMemberCard.styles__Tiles",componentId:"sc-2c9d3046-4"})`
  pointer-events: none;

  /* #1415/#1433: Hover gibt mehr Foto frei — die Deckung blendet weich */
  && path[data-full='true'],
  && path[data-rounded='true'] {
    transition: opacity 0.7s cubic-bezier(0.33, 1, 0.68, 1);
  }

  && [data-partial='true'] {
    animation-name: ${j};
  }

  @media (prefers-reduced-motion: reduce) {
    && path[data-full='true'],
    && path[data-rounded='true'] {
      transition: none;
      animation: none;
    }
  }
`,M=y.U.div.withConfig({displayName:"TeamMemberCard.styles__Body",componentId:"sc-2c9d3046-5"})`
  position: relative;
  z-index: 2;
  /* Der Text überlagert die untere Spitze des Sechsecks um 1,5 Kachelreihen */
  margin-top: ${-Math.round(1.5*l.V*l.E)}px;
  padding: 0 20px 8px;
  font-family: ${({theme:e})=>e.font.secondaryFamily};
  font-size: 16px;
  line-height: 24px;
  overflow-wrap: break-word;
`,k=y.U.h3.withConfig({displayName:"TeamMemberCard.styles__Name",componentId:"sc-2c9d3046-6"})`
  margin: 0 0 4px;
  font-family: ${({theme:e})=>e.font.secondaryFamily};
  font-size: 20px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0;
  text-transform: none;
  color: ${({theme:e})=>e.palette.site.heading};
`,_=y.U.p.withConfig({displayName:"TeamMemberCard.styles__Role",componentId:"sc-2c9d3046-7"})`
  margin: 0 0 4px;
  color: ${({theme:e})=>e.palette.site.text};
`,I=y.U.div.withConfig({displayName:"TeamMemberCard.styles__Phone",componentId:"sc-2c9d3046-8"})`
  color: ${({theme:e})=>e.palette.site.muted};

  a {
    color: inherit;
    text-decoration: none;
  }

  a:hover,
  a:focus-visible {
    text-decoration: underline;
  }
`,U=y.U.div.withConfig({displayName:"TeamMemberCard.styles__Email",componentId:"sc-2c9d3046-9"})`
  font-weight: 700;
  color: ${({theme:e})=>e.palette.site.blue};

  a {
    color: inherit;
    text-decoration: none;
  }

  a:hover,
  a:focus-visible {
    text-decoration: underline;
  }
`,N=y.U.button.withConfig({displayName:"TeamMemberCard.styles__VCardButton",componentId:"sc-2c9d3046-10"})`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin: 8px 0 0;
  padding: 4px 0;
  border: 0;
  background: none;
  cursor: pointer;
  font-family: ${({theme:e})=>e.font.secondaryFamily};
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  color: ${({theme:e})=>e.palette.site.blue};

  &:hover > span:last-child,
  &:focus-visible > span:last-child {
    text-decoration: underline;
  }

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.palette.site.blue};
    outline-offset: 2px;
    border-radius: 2px;
  }
`,R=y.U.span.withConfig({displayName:"TeamMemberCard.styles__VCardIcon",componentId:"sc-2c9d3046-11"})`
  display: inline-flex;
  flex: none;

  svg {
    width: 18px;
    height: 18px;
  }
`,B=y.U.span.withConfig({displayName:"TeamMemberCard.styles__VCardLabel",componentId:"sc-2c9d3046-12"})``;e.i(411206);var O=e.i(173972);e.i(635647);let L=[1,.2],z=(e,t)=>{let i=e/2,a=Math.min(2*i/Math.sqrt(3),t/2);return{cx:e/2,cy:t/2,a:i,b:a}},E=({cx:e,cy:t,a:i,b:a},n,o)=>{if(i<=0||a<=0)return 1/0;let s=Math.abs(n-e)/i;return Math.max(s,Math.abs(o-t)/a+s/2)},A=2/Math.sqrt(3);e.s(["f",0,e=>{let{name:h,jobTitle:f,photoUrl:y,phone:b,email:j,className:S,dataTestId:V="team-member-card"}=e,K=(0,i.useRef)(null),D=(0,i.useRef)(null),{stage:F,rects:P}=(0,s.Z)(K,D,"active",12),Y=F?.width??0,H=F?.height??0,G=Y>0?(0,l.L)(Y):0,W=`team-photo-${(0,i.useId)().replace(/:/g,"")}`,[q,J]=(0,i.useState)(!1),[X,Z]=(0,i.useState)(null),Q=y&&X?.url===y?X.src:null,ee=(0,i.useMemo)(()=>y?function(e,t,i,a,n=!1){if(e<=0||t<=0||i<=0)return[];let s=e*A,d=(0,l.T)(e,s,i),c=z(e,s),p=n?L:r.V,h=(0,o.A)(d,e=>!(1>=E(c,e.cx,e.cy)),p,(0,r.n)(.35*!n)),m=(0,o.A)(d,e=>a.some(t=>(0,l.D)(e,t)),p,n?(0,r.n)(0):void 0);return d.flatMap(t=>{if(t.x<0||t.y<0||t.x+t.size>e||t.y+t.size>s)return[];let i=(1-(h.get(t.key)??0))*(1-(m.get(t.key)??0));return[{...t,alpha:i>.005?Math.round(1e3*i)/1e3:0}]})}(Y,H,G,P,q):[],[y,Y,H,G,P,q]),et=(0,i.useMemo)(()=>(function(e,t,i=!1){if(t<=0)return[];let a=z(t,t*A),n=i?.2:.5;return e.map(e=>{let t,i=e.size/2,o=n*((t=Math.max(0,Math.min(1,(E(a,e.x+i,e.y+i)-.55)/(1-.55))))*t*(3-2*t));return{...e,alpha:o>.005?Math.round(1e3*o)/1e3:0}})})(ee,Y,q),[ee,Y,q]),ei=null!==Q&&ee.some(e=>e.alpha>0),{tr:ea}=(0,c.f)(),en=!!(b?.trim()||j?.trim());return(0,t.jsxs)(w,{className:S,"data-testid":V,"data-hovered":q?"true":"false",onMouseEnter:()=>J(!0),onMouseLeave:()=>J(!1),onFocus:()=>J(!0),onBlur:()=>J(!1),"data-hex-stage":"true","data-columns":G||void 0,children:[(0,t.jsx)(v,{"data-testid":`${V}-avatar`,"data-has-photo":y?"true":"false","data-masked":ei?"true":"false",children:y?(0,t.jsx)(a.default,{src:y,alt:h,width:616,height:Math.round(616*A),sizes:"(max-width: 639px) calc(100vw - 24px), (max-width: 899px) calc(50vw - 24px), (max-width: 1199px) calc(33.4vw - 24px), calc(25vw - 24px)",onLoad:e=>{let t=e.currentTarget;Z({url:y,src:t.currentSrc||t.src})},"data-testid":`${V}-photo`}):(0,t.jsx)(C,{"aria-hidden":"true",children:h.split(/\s+/).filter(Boolean).slice(0,2).map(e=>e[0]?.toUpperCase()??"").join("")})}),(0,t.jsx)($,{ref:K,"aria-hidden":"true",children:ei&&Q&&(0,t.jsxs)(T,{focusable:"false","data-testid":`${V}-tiles`,"data-tiles":ee.length,style:{"--edge-x":"0px","--edge-y":"0px","--edge-w":`${Y}px`,"--edge-h":`${H}px`},children:[(0,t.jsxs)("defs",{children:[(0,t.jsx)("mask",{id:W,maskUnits:"userSpaceOnUse",x:0,y:0,width:Y,height:H,children:(0,t.jsx)(n.f,{tiles:ee,color:"mask"})}),(0,t.jsx)("filter",{id:`${W}-blur`,x:"-10%",y:"-10%",width:"120%",height:"120%",children:(0,t.jsx)("feGaussianBlur",{stdDeviation:.04*Y})}),(0,t.jsxs)("linearGradient",{id:`${W}-fade-grad`,x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,t.jsx)("stop",{offset:"0",stopColor:"#fff",stopOpacity:"0"}),(0,t.jsx)("stop",{offset:.12,stopColor:"#fff",stopOpacity:"1"}),(0,t.jsx)("stop",{offset:.94,stopColor:"#fff",stopOpacity:"1"}),(0,t.jsx)("stop",{offset:"1",stopColor:"#fff",stopOpacity:"0"})]}),(0,t.jsx)("mask",{id:`${W}-fade`,maskUnits:"userSpaceOnUse",x:0,y:.14*Y,width:Y,height:Y,children:(0,t.jsx)("rect",{x:0,y:.14*Y,width:Y,height:Y,fill:`url(#${W}-fade-grad)`})})]}),(0,t.jsxs)("g",{mask:`url(#${W})`,"data-testid":`${V}-masked-photo`,children:[(0,t.jsx)("image",{href:Q,x:-(.15*Y),y:-(.1*Y),width:1.3*Y,height:Y*A+.2*Y,preserveAspectRatio:"xMidYMid slice",filter:`url(#${W}-blur)`,"data-testid":`${V}-photo-blur`}),(0,t.jsx)("image",{href:Q,x:0,y:.14*Y,width:Y,height:Y,preserveAspectRatio:"xMidYMin slice",mask:`url(#${W}-fade)`,"data-testid":`${V}-photo-sharp`}),(0,t.jsx)(n.f,{tiles:et,color:"primary",dataTestId:`${V}-tint`})]})]})}),(0,t.jsxs)(M,{ref:D,children:[(0,t.jsx)(k,{"data-testid":`${V}-name`,children:h}),(0,t.jsx)(_,{"data-testid":`${V}-title`,children:f}),b&&(0,t.jsx)(I,{children:(0,t.jsx)(O.f,{kind:"tel",value:b,place:"teamCard",dataTestId:`${V}-phone`})}),j&&(0,t.jsx)(U,{children:(0,t.jsx)(O.f,{kind:"mail",value:j,place:"teamCard",dataTestId:`${V}-email`})}),en&&(0,t.jsxs)(N,{type:"button",onClick:()=>{let e,t=function(e){let t=e.company??m,i=e.name.trim(),{given:a,family:n}=function(e){let t=e.trim().split(/\s+/).filter(Boolean);if(0===t.length)return{given:"",family:""};let i=t[t.length-1]??"";return{given:t.slice(0,-1).join(" "),family:i}}(i),o=e.jobTitle?.trim(),s=e.phone?.trim(),r=e.email?.trim(),l=["BEGIN:VCARD","VERSION:3.0"];l.push(`N:${u(n)};${u(a)};;;`),l.push(`FN:${u(i)}`),t.name&&l.push(`ORG:${u(t.name)}`),o&&l.push(`TITLE:${u(o)}`),s&&l.push(`TEL;TYPE=WORK,VOICE:${u(s)}`),r&&l.push(`EMAIL;TYPE=INTERNET,WORK:${u(r)}`);let d=["","",t.street,t.city,"",t.postalCode,t.country];return d.some(Boolean)&&l.push(`ADR;TYPE=WORK:${d.map(u).join(";")}`),t.url&&l.push(`URL:${t.url}`),l.push("END:VCARD"),l.map(x).join("\r\n")+"\r\n"}({name:h,jobTitle:f,phone:b,email:j});(0,p.f)(new Blob([t],{type:"text/vcard;charset=utf-8"}),(e=h.replace(/[äöüÄÖÜß]/g,e=>g[e]??e).normalize("NFKD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,""),`${e||"kontakt"}.vcf`))},"aria-label":ea("team.vcard.ariaLabel",{name:h,defaultValue:"Kontakt von {{name}} als vCard speichern"}),"data-testid":`${V}-vcard`,children:[(0,t.jsx)(R,{"aria-hidden":"true",children:(0,t.jsx)(d.f,{})}),(0,t.jsx)(B,{children:ea("team.vcard.download",{defaultValue:"Kontakt speichern"})})]})]})]})}],682194),e.s([],586531)},106668,e=>{var t=e.i(843476),i=e.i(997053);e.i(951693);var a=e.i(659188);e.i(586531);var n=e.i(682194),o=e.i(197908),s=e.i(507924);let r=i.U.div.withConfig({displayName:"TeamBlock__Root",componentId:"sc-17e2f2b1-0"})`
  display: flex;
  flex-direction: column;
  gap: 32px;
`,l=i.U.ul.withConfig({displayName:"TeamBlock__Grid",componentId:"sc-17e2f2b1-1"})`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 32px ${24}px;
  margin: 0;
  padding: 0;
  list-style: none;
`,d=e=>`calc((100% - ${(e-1)*24}px) / ${e})`,c=i.U.li.withConfig({displayName:"TeamBlock__Item",componentId:"sc-17e2f2b1-2"})`
  min-width: 0;
  flex: 0 0 100%;

  @media (min-width: 640px) {
    flex-basis: ${d(2)};
  }

  @media (min-width: 900px) {
    flex-basis: ${d(3)};
  }

  @media (min-width: 1200px) {
    flex-basis: ${d(4)};
  }
`;e.s(["TeamBlock",0,({block:e,locale:i,dataTestId:d,pageHeading:p})=>{let{headline:h,description:m,members:u}=e.props;return(0,t.jsxs)(r,{"data-testid":`${d}-grid`,"data-columns":4,children:[(0,t.jsx)(a.f,{headline:h?(0,s.u)(h,i):void 0,headingLevel:p?1:2,align:"center",description:m?(0,s.u)(m,i):void 0,dataTestId:`${d}-grid-header`}),(0,t.jsx)(l,{"data-testid":`${d}-grid-list`,"data-count":u.length,children:u.map((e,a)=>(0,t.jsx)(c,{"data-testid":`${d}-grid-item`,children:(0,t.jsx)(n.f,{name:e.name,jobTitle:(0,s.u)(e.jobTitle,i),photoUrl:(0,o.J)(e.photoUrl),phone:(0,o.J)(e.phone),email:(0,o.J)(e.email),dataTestId:`${d}-member-${a}`})},a))})]})}])},666629,e=>{e.s(["f",0,function(e,t){let i=window.URL.createObjectURL(e),a=document.createElement("a");a.href=i,a.download=t,document.body.appendChild(a),a.click(),window.URL.revokeObjectURL(i),document.body.removeChild(a)}])}],452967,function(e){e.n(e.i(106668))}]);