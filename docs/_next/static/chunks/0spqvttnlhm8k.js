(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,[12812,e=>{var t=e.i(843476),a=e.i(271645),i=e.i(997053);let n=i.U.div.withConfig({displayName:"Altcha.styles__Slot",componentId:"sc-8715a897-0"})`
  min-height: ${"calc(1.5rem + 1.5rem + 2px)"};
`,o="altcha-widget",r=["focusin","pointerdown","keydown"];e.s(["f",0,({onSolved:i,resetKey:l,challengeUrl:s="/api/altcha/challenge/",auto:d="onsubmit",startImmediately:c=!1,dataTestId:p="altcha"})=>{let m=(0,a.useRef)(null),u=(0,a.useRef)(null),h="onfocus"===d,[f,g]=(0,a.useState)(null),x=null!==f,y=(0,a.useCallback)(()=>g(e=>e??Math.min(4,Math.max(1,((void 0)??("u"<typeof navigator?void 0:navigator.hardwareConcurrency))||2))),[]);(0,a.useEffect)(()=>{if(x)return;let e=h&&!c?u.current?.closest("form"):null;if(!e)return void y();for(let t of r)e.addEventListener(t,y,{capture:!0});return()=>{for(let t of r)e.removeEventListener(t,y,{capture:!0})}},[x,h,c,y]),(0,a.useEffect)(()=>{x&&e.A(53129)},[x]),(0,a.useEffect)(()=>{let e=m.current;if(!e)return;let t=e=>{let t=e.detail;t?.state==="verified"&&t.payload&&i(t.payload)};return e.addEventListener("statechange",t),()=>{e.removeEventListener("statechange",t)}},[i,l,x]);let b=(0,a.useMemo)(()=>JSON.stringify({hideFooter:!0,hideLogo:!0,...null!==f?{workers:f}:{}}),[f]);return h?(0,t.jsx)(n,{ref:u,"data-testid":`${p}-slot`,"data-started":x?"true":"false",children:x&&(0,t.jsx)(o,{ref:m,challenge:s,configuration:b,auto:"onload","data-testid":p})}):(0,t.jsx)(o,{ref:m,challenge:s,configuration:b,auto:d,"data-testid":p})}],12812)},26819,e=>{var t=e.i(843476),a=e.i(997053);let i=a.U.svg.withConfig({displayName:"IconCalendar.styles__Root",componentId:"sc-31b25be0-0"})``;e.s(["f",0,e=>{let a=e.strokeColor||"currentColor";return(0,t.jsx)(i,{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",className:e.className,"data-testid":"icon-calendar-root",children:(0,t.jsxs)("g",{fill:a,strokeLinejoin:"miter",strokeLinecap:"butt",children:[(0,t.jsx)("line",{x1:"2",y1:"9",x2:"22",y2:"9",fill:"none",stroke:a,strokeMiterlimit:"10",strokeWidth:"2"}),(0,t.jsx)("line",{x1:"7",y1:"1",x2:"7",y2:"4",fill:"none",stroke:a,strokeLinecap:"square",strokeMiterlimit:"10",strokeWidth:"2"}),(0,t.jsx)("line",{x1:"17",y1:"1",x2:"17",y2:"4",fill:"none",stroke:a,strokeLinecap:"square",strokeMiterlimit:"10",strokeWidth:"2"}),(0,t.jsx)("rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",ry:"2",fill:"none",stroke:a,strokeLinecap:"square",strokeMiterlimit:"10",strokeWidth:"2"})]})})}],26819)},923441,e=>{let t=e.i(26819).f;e.s(["f",0,t])},538594,e=>{var t=e.i(843476),a=e.i(997053);let i=a.U.svg.withConfig({displayName:"IconDownload.styles__Root",componentId:"sc-985edd3b-0"})``;e.s(["f",0,e=>(0,t.jsx)(i,{className:e.className,"data-testid":"icon-download-root",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("path",{d:"M8.01562 15.784H5.21429C3.43908 15.784 2 14.5585 2 12.7614C2 10.9644 3.43908 9.50762 5.21429 9.50762C5.335 9.50762 5.45417 9.51436 5.57143 9.52748V9.50762H5.61564C5.58646 9.27074 5.57143 9.02942 5.57143 8.78455C5.57143 5.58983 8.1298 3 11.2857 3C13.4228 3 15.2859 4.1876 16.2661 5.94642C16.5056 5.91075 16.7507 5.89227 17 5.89227C19.7614 5.89227 22 8.15838 22 10.9538C22 13.5036 20.1374 15.3819 17.7143 15.7328H15.125M11.6429 9.86915V21M11.6429 21L9.10937 18.5008M11.6429 21L14.1094 18.5008",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})],538594)},481804,e=>{let t=e.i(538594).f;e.s(["f",0,t])},586531,682194,e=>{var t=e.i(843476),a=e.i(271645),i=e.i(325164);e.i(710788);var n=e.i(599858);e.i(352162);var o=e.i(808847),r=e.i(791777);e.i(311046);var l=e.i(650529),s=e.i(355351),d=e.i(481804);e.i(821194);var c=e.i(99222),p=e.i(666629),m=e.i(891567);let u={name:m.Y.name,street:m.Y.street,postalCode:m.Y.postalCode,city:m.Y.locality,country:"Germany",url:"https://plastship.com"};function h(e){return e.replace(/\\/g,"\\\\").replace(/,/g,"\\,").replace(/;/g,"\\;").replace(/\r\n|\r|\n/g,"\\n")}function f(e){let t=0;for(let a of e){let e=a.codePointAt(0)??0;t+=e<128?1:e<2048?2:e<65536?3:4}return t}function g(e){if(75>=f(e))return e;let t=[],a="",i=0,n=75;for(let o of e){let e=f(o);i+e>n&&(t.push(a),a="",i=0,n=74),a+=o,i+=e}return t.push(a),t.join(`\r
 `)}let x={ä:"ae",ö:"oe",ü:"ue",Ä:"Ae",Ö:"Oe",Ü:"Ue",ß:"ss"};var y=e.i(997053),b=e.i(706994);let v=y.U.article.withConfig({displayName:"TeamMemberCard.styles__Root",componentId:"sc-2c9d3046-0"})`
  position: relative;
  display: flex;
  flex-direction: column;
  /* globals.css gibt jedem article die Seitenfarbe; auf getönten Bändern
     stand die Karte sonst als weißes Rechteck hinter der Wabe */
  background: transparent;
  color: ${({theme:e})=>e.palette.site.text};
`,C=y.U.div.withConfig({displayName:"TeamMemberCard.styles__Photo",componentId:"sc-2c9d3046-1"})`
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
`,w=y.U.span.withConfig({displayName:"TeamMemberCard.styles__Initials",componentId:"sc-2c9d3046-2"})`
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
  50% { fill-opacity: ${1-2*l.H}; }
`,_=(0,y.U)(b.f).withConfig({displayName:"TeamMemberCard.styles__Tiles",componentId:"sc-2c9d3046-4"})`
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
`,k=y.U.div.withConfig({displayName:"TeamMemberCard.styles__Body",componentId:"sc-2c9d3046-5"})`
  position: relative;
  z-index: 2;
  /* Der Text überlagert die untere Spitze des Sechsecks um 1,5 Kachelreihen */
  margin-top: ${-Math.round(1.5*s.V*s.E)}px;
  padding: 0 20px 8px;
  font-family: ${({theme:e})=>e.font.secondaryFamily};
  font-size: 16px;
  line-height: 24px;
  overflow-wrap: break-word;
`,F=y.U.h3.withConfig({displayName:"TeamMemberCard.styles__Name",componentId:"sc-2c9d3046-6"})`
  margin: 0 0 4px;
  font-family: ${({theme:e})=>e.font.secondaryFamily};
  font-size: 20px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0;
  text-transform: none;
  color: ${({theme:e})=>e.palette.site.heading};
`,I=y.U.p.withConfig({displayName:"TeamMemberCard.styles__Role",componentId:"sc-2c9d3046-7"})`
  margin: 0 0 4px;
  color: ${({theme:e})=>e.palette.site.text};
`,N=y.U.div.withConfig({displayName:"TeamMemberCard.styles__Phone",componentId:"sc-2c9d3046-8"})`
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
`,T=y.U.button.withConfig({displayName:"TeamMemberCard.styles__VCardButton",componentId:"sc-2c9d3046-10"})`
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
`,V=y.U.span.withConfig({displayName:"TeamMemberCard.styles__VCardIcon",componentId:"sc-2c9d3046-11"})`
  display: inline-flex;
  flex: none;

  svg {
    width: 18px;
    height: 18px;
  }
`,M=y.U.span.withConfig({displayName:"TeamMemberCard.styles__VCardLabel",componentId:"sc-2c9d3046-12"})``;e.i(411206);var z=e.i(173972);e.i(635647);let S=[1,.2],L=(e,t)=>{let a=e/2,i=Math.min(2*a/Math.sqrt(3),t/2);return{cx:e/2,cy:t/2,a,b:i}},A=({cx:e,cy:t,a,b:i},n,o)=>{if(a<=0||i<=0)return 1/0;let r=Math.abs(n-e)/a;return Math.max(r,Math.abs(o-t)/i+r/2)},B=2/Math.sqrt(3);e.s(["f",0,e=>{let{name:m,jobTitle:f,photoUrl:y,phone:b,email:j,className:R,dataTestId:E="team-member-card"}=e,O=(0,a.useRef)(null),D=(0,a.useRef)(null),{stage:W,rects:P}=(0,r.Z)(O,D,"active",12),q=W?.width??0,K=W?.height??0,Y=q>0?(0,s.L)(q):0,H=`team-photo-${(0,a.useId)().replace(/:/g,"")}`,[Z,G]=(0,a.useState)(!1),[J,X]=(0,a.useState)(null),Q=y&&J?.url===y?J.src:null,ee=(0,a.useMemo)(()=>y?function(e,t,a,i,n=!1){if(e<=0||t<=0||a<=0)return[];let r=e*B,d=(0,s.T)(e,r,a),c=L(e,r),p=n?S:l.V,m=(0,o.A)(d,e=>!(1>=A(c,e.cx,e.cy)),p,(0,l.n)(.35*!n)),u=(0,o.A)(d,e=>i.some(t=>(0,s.D)(e,t)),p,n?(0,l.n)(0):void 0);return d.flatMap(t=>{if(t.x<0||t.y<0||t.x+t.size>e||t.y+t.size>r)return[];let a=(1-(m.get(t.key)??0))*(1-(u.get(t.key)??0));return[{...t,alpha:a>.005?Math.round(1e3*a)/1e3:0}]})}(q,K,Y,P,Z):[],[y,q,K,Y,P,Z]),et=(0,a.useMemo)(()=>(function(e,t,a=!1){if(t<=0)return[];let i=L(t,t*B),n=a?.2:.5;return e.map(e=>{let t,a=e.size/2,o=n*((t=Math.max(0,Math.min(1,(A(i,e.x+a,e.y+a)-.55)/(1-.55))))*t*(3-2*t));return{...e,alpha:o>.005?Math.round(1e3*o)/1e3:0}})})(ee,q,Z),[ee,q,Z]),ea=null!==Q&&ee.some(e=>e.alpha>0),{tr:ei}=(0,c.f)(),en=!!(b?.trim()||j?.trim());return(0,t.jsxs)(v,{className:R,"data-testid":E,"data-hovered":Z?"true":"false",onMouseEnter:()=>G(!0),onMouseLeave:()=>G(!1),onFocus:()=>G(!0),onBlur:()=>G(!1),"data-hex-stage":"true","data-columns":Y||void 0,children:[(0,t.jsx)(C,{"data-testid":`${E}-avatar`,"data-has-photo":y?"true":"false","data-masked":ea?"true":"false",children:y?(0,t.jsx)(i.default,{src:y,alt:m,width:616,height:Math.round(616*B),sizes:"(max-width: 639px) calc(100vw - 24px), (max-width: 899px) calc(50vw - 24px), (max-width: 1199px) calc(33.4vw - 24px), calc(25vw - 24px)",onLoad:e=>{let t=e.currentTarget;X({url:y,src:t.currentSrc||t.src})},"data-testid":`${E}-photo`}):(0,t.jsx)(w,{"aria-hidden":"true",children:m.split(/\s+/).filter(Boolean).slice(0,2).map(e=>e[0]?.toUpperCase()??"").join("")})}),(0,t.jsx)($,{ref:O,"aria-hidden":"true",children:ea&&Q&&(0,t.jsxs)(_,{focusable:"false","data-testid":`${E}-tiles`,"data-tiles":ee.length,style:{"--edge-x":"0px","--edge-y":"0px","--edge-w":`${q}px`,"--edge-h":`${K}px`},children:[(0,t.jsxs)("defs",{children:[(0,t.jsx)("mask",{id:H,maskUnits:"userSpaceOnUse",x:0,y:0,width:q,height:K,children:(0,t.jsx)(n.f,{tiles:ee,color:"mask"})}),(0,t.jsx)("filter",{id:`${H}-blur`,x:"-10%",y:"-10%",width:"120%",height:"120%",children:(0,t.jsx)("feGaussianBlur",{stdDeviation:.04*q})}),(0,t.jsxs)("linearGradient",{id:`${H}-fade-grad`,x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,t.jsx)("stop",{offset:"0",stopColor:"#fff",stopOpacity:"0"}),(0,t.jsx)("stop",{offset:.12,stopColor:"#fff",stopOpacity:"1"}),(0,t.jsx)("stop",{offset:.94,stopColor:"#fff",stopOpacity:"1"}),(0,t.jsx)("stop",{offset:"1",stopColor:"#fff",stopOpacity:"0"})]}),(0,t.jsx)("mask",{id:`${H}-fade`,maskUnits:"userSpaceOnUse",x:0,y:.14*q,width:q,height:q,children:(0,t.jsx)("rect",{x:0,y:.14*q,width:q,height:q,fill:`url(#${H}-fade-grad)`})})]}),(0,t.jsxs)("g",{mask:`url(#${H})`,"data-testid":`${E}-masked-photo`,children:[(0,t.jsx)("image",{href:Q,x:-(.15*q),y:-(.1*q),width:1.3*q,height:q*B+.2*q,preserveAspectRatio:"xMidYMid slice",filter:`url(#${H}-blur)`,"data-testid":`${E}-photo-blur`}),(0,t.jsx)("image",{href:Q,x:0,y:.14*q,width:q,height:q,preserveAspectRatio:"xMidYMin slice",mask:`url(#${H}-fade)`,"data-testid":`${E}-photo-sharp`}),(0,t.jsx)(n.f,{tiles:et,color:"primary",dataTestId:`${E}-tint`})]})]})}),(0,t.jsxs)(k,{ref:D,children:[(0,t.jsx)(F,{"data-testid":`${E}-name`,children:m}),(0,t.jsx)(I,{"data-testid":`${E}-title`,children:f}),b&&(0,t.jsx)(N,{children:(0,t.jsx)(z.f,{kind:"tel",value:b,place:"teamCard",dataTestId:`${E}-phone`})}),j&&(0,t.jsx)(U,{children:(0,t.jsx)(z.f,{kind:"mail",value:j,place:"teamCard",dataTestId:`${E}-email`})}),en&&(0,t.jsxs)(T,{type:"button",onClick:()=>{let e,t=function(e){let t=e.company??u,a=e.name.trim(),{given:i,family:n}=function(e){let t=e.trim().split(/\s+/).filter(Boolean);if(0===t.length)return{given:"",family:""};let a=t[t.length-1]??"";return{given:t.slice(0,-1).join(" "),family:a}}(a),o=e.jobTitle?.trim(),r=e.phone?.trim(),l=e.email?.trim(),s=["BEGIN:VCARD","VERSION:3.0"];s.push(`N:${h(n)};${h(i)};;;`),s.push(`FN:${h(a)}`),t.name&&s.push(`ORG:${h(t.name)}`),o&&s.push(`TITLE:${h(o)}`),r&&s.push(`TEL;TYPE=WORK,VOICE:${h(r)}`),l&&s.push(`EMAIL;TYPE=INTERNET,WORK:${h(l)}`);let d=["","",t.street,t.city,"",t.postalCode,t.country];return d.some(Boolean)&&s.push(`ADR;TYPE=WORK:${d.map(h).join(";")}`),t.url&&s.push(`URL:${t.url}`),s.push("END:VCARD"),s.map(g).join("\r\n")+"\r\n"}({name:m,jobTitle:f,phone:b,email:j});(0,p.f)(new Blob([t],{type:"text/vcard;charset=utf-8"}),(e=m.replace(/[äöüÄÖÜß]/g,e=>x[e]??e).normalize("NFKD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,""),`${e||"kontakt"}.vcf`))},"aria-label":ei("team.vcard.ariaLabel",{name:m,defaultValue:"Kontakt von {{name}} als vCard speichern"}),"data-testid":`${E}-vcard`,children:[(0,t.jsx)(V,{"aria-hidden":"true",children:(0,t.jsx)(d.f,{})}),(0,t.jsx)(M,{children:ei("team.vcard.download",{defaultValue:"Kontakt speichern"})})]})]})]})}],682194),e.s([],586531)},817246,e=>{var t=e.i(843476),a=e.i(271645),i=e.i(997053),n=e.i(618566);e.i(36380);var o=e.i(285393),r=e.i(825969),l=e.i(12812);e.i(945304);var s=e.i(977194),d=e.i(499911),c=e.i(898560),p=e.i(317573),m=e.i(813267);e.i(411206);var u=e.i(173972),h=e.i(874142),f=e.i(923441);e.i(821194);var g=e.i(99222),x=e.i(885895),y=e.i(738278);let b=/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F-\u009F]/g,v=/[\u00AD\u180E\u200B-\u200F\u202A-\u202E\u2060-\u206F\uFEFF\uFFF9-\uFFFB]|\uDB40[\uDC00-\uDC7F]/g,C=/<\/?[a-z!?][^<>]*>/gi,w=/[<>]/g,$=(e,t)=>e.slice(0,2*t+64);function j(e){let t=e.length;for(;t>0&&(" "===e[t-1]||" "===e[t-1]);)t--;return e.slice(0,t)}let _=e=>e.normalize("NFKC").replace(/\r\n?/g,"\n").replace(b,"").replace(v,"").replace(C,"").replace(w,""),k=/^[=+\-@\s]+/;function F(e,t){return"string"!=typeof e?"":_($(e,t)).replace(/\s+/g," ").trim().replace(k,"").slice(0,t)}let I=["partnership","press","career","other"],N=/^\/[a-z0-9\-/]*$/i,U=/^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+.-]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9-]*\.)+[A-Za-z]{2,}$/,T=["topic","name","company","email","phone","message","details","locale","sourcePath"],V=["material","materialForm","volume","application","postalCode"],M=(e,t)=>"string"==typeof t&&e.includes(t);var z=e.i(345712);let S=i.m`
  outline: none;
  box-shadow: 0 0 0 3px ${({theme:e})=>e.palette.site.tint};
  border-color: ${({theme:e})=>e.palette.site.blue};
`,L=i.U.section.withConfig({displayName:"ContactForm.styles__Root",componentId:"sc-6ea461e7-0"})`
  display: grid;
  grid-template-columns: minmax(0, 2fr) minmax(0, 1fr);
  gap: 32px;
  align-items: start;
  color: ${({theme:e})=>e.palette.site.text};
  font-family: ${({theme:e})=>e.font.secondaryFamily};

  @media only screen and (max-width: ${z.p.tabletportrait}px) {
    grid-template-columns: minmax(0, 1fr);
  }
`,A=i.U.div.withConfig({displayName:"ContactForm.styles__Card",componentId:"sc-6ea461e7-1"})`
  box-sizing: border-box;
  padding: 40px;
  border: 1px solid ${({theme:e})=>e.palette.site.border};
  border-radius: 24px;
  background: ${({theme:e})=>e.palette.site.card};
  box-shadow: ${({theme:e})=>e.palette.site.shadow};

  @media only screen and (max-width: ${z.p.smartphonelandscape}px) {
    padding: 24px 20px;
  }
`,B=i.U.header.withConfig({displayName:"ContactForm.styles__Head",componentId:"sc-6ea461e7-2"})`
  margin-bottom: 32px;
  /* globals.css gibt jedem header die Seitenfarbe: auf der weißen Karte im Dunkelmodus eine dunkle Box */
  background: transparent;
`,R=i.U.h2.withConfig({displayName:"ContactForm.styles__Headline",componentId:"sc-6ea461e7-3"})`
  margin: 0 0 12px;
  font-family: ${({theme:e})=>e.font.primaryFamily};
  font-size: 32px;
  line-height: 40px;
  font-weight: 700;
  text-transform: uppercase;
  color: ${({theme:e})=>e.palette.site.heading};

  @media only screen and (max-width: ${z.p.smartphonelandscape}px) {
    font-size: 24px;
    line-height: 32px;
  }
`,E=i.U.p.withConfig({displayName:"ContactForm.styles__Lead",componentId:"sc-6ea461e7-4"})`
  margin: 0;
  font-size: 16px;
  line-height: 26px;
`,O=i.U.form.withConfig({displayName:"ContactForm.styles__Form",componentId:"sc-6ea461e7-5"})`
  display: flex;
  flex-direction: column;
  gap: 32px;
`,D=i.U.fieldset.withConfig({displayName:"ContactForm.styles__Fieldset",componentId:"sc-6ea461e7-6"})`
  margin: 0;
  padding: 0;
  border: 0;
  min-width: 0;
`,W=i.U.legend.withConfig({displayName:"ContactForm.styles__Legend",componentId:"sc-6ea461e7-7"})`
  display: flex;
  align-items: baseline;
  gap: 12px;
  padding: 0;
  margin-bottom: 16px;
  font-family: ${({theme:e})=>e.font.primaryFamily};
  font-size: 18px;
  line-height: 26px;
  font-weight: 700;
  color: ${({theme:e})=>e.palette.site.heading};
`,P=i.U.span.withConfig({displayName:"ContactForm.styles__Step",componentId:"sc-6ea461e7-8"})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: none;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  font-size: 14px;
  line-height: 1;
  color: ${({theme:e})=>e.palette.site.card};
  background: ${({theme:e})=>e.palette.site.blue};
`,q=i.U.div.withConfig({displayName:"ContactForm.styles__Topics",componentId:"sc-6ea461e7-9"})`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;

  > * {
    flex: 1 1 ${160}px;
    min-width: 0;
  }
`,K=i.U.label.withConfig({displayName:"ContactForm.styles__TopicCard",componentId:"sc-6ea461e7-10"})`
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  padding: 16px;
  min-height: 132px;
  border: 2px solid ${({theme:e})=>e.palette.site.border};
  border-radius: 16px;
  background: ${({theme:e})=>e.palette.site.card};
  cursor: pointer;
  transition:
    border-color 0.2s ease,
    background-color 0.2s ease,
    box-shadow 0.2s ease,
    transform 0.2s ease;

  &:hover {
    border-color: ${({theme:e})=>e.palette.site.blue};
    box-shadow: ${({theme:e})=>e.palette.site.shadow};
    transform: translateY(-2px);
  }

  &[data-selected='true'] {
    border-color: ${({theme:e})=>e.palette.site.green};
    background: ${({theme:e})=>e.palette.site.greenTint};
  }

  &:has(input:focus-visible) {
    ${S}
  }

  input {
    position: absolute;
    opacity: 0;
    width: 1px;
    height: 1px;
    margin: 0;
    pointer-events: none;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &:hover {
      transform: none;
    }
  }
`,Y=i.U.span.withConfig({displayName:"ContactForm.styles__TopicTitle",componentId:"sc-6ea461e7-11"})`
  font-size: 16px;
  line-height: 22px;
  font-weight: 700;
  color: ${({theme:e})=>e.palette.site.heading};
`,H=i.U.span.withConfig({displayName:"ContactForm.styles__TopicHint",componentId:"sc-6ea461e7-12"})`
  font-size: 13px;
  line-height: 18px;
  color: ${({theme:e})=>e.palette.site.muted};
`,Z=i.U.span.withConfig({displayName:"ContactForm.styles__TopicCheck",componentId:"sc-6ea461e7-13"})`
  position: absolute;
  top: 12px;
  right: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: ${({theme:e})=>e.palette.site.green};
  color: #ffffff;
  opacity: 0;
  transform: scale(0.6);
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;

  svg {
    width: 14px;
    height: 14px;
  }

  [data-selected='true'] > & {
    opacity: 1;
    transform: scale(1);
  }
`,G=i.q`
  from { opacity: 0; transform: translateY(-6px); }
  to { opacity: 1; transform: translateY(0); }
`,J=i.U.div.withConfig({displayName:"ContactForm.styles__Details",componentId:"sc-6ea461e7-14"})`
  margin-top: 20px;
  padding: 20px;
  border-radius: 16px;
  background: ${({theme:e})=>e.palette.site.tint};
  animation: ${G} 0.25s ease both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,X=i.U.div.withConfig({displayName:"ContactForm.styles__Grid",componentId:"sc-6ea461e7-15"})`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px 20px;

  @media only screen and (max-width: ${z.p.smartphonelandscape}px) {
    grid-template-columns: minmax(0, 1fr);
  }
`,Q=i.U.div.withConfig({displayName:"ContactForm.styles__Field",componentId:"sc-6ea461e7-16"})`
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 0;
  ${({$wide:e})=>e&&i.m`
      grid-column: 1 / -1;
    `}
`,ee=i.U.label.withConfig({displayName:"ContactForm.styles__Label",componentId:"sc-6ea461e7-17"})`
  font-size: 14px;
  line-height: 20px;
  font-weight: 700;
  color: ${({theme:e})=>e.palette.site.heading};
`,et=i.U.span.withConfig({displayName:"ContactForm.styles__GroupLabel",componentId:"sc-6ea461e7-18"})`
  font-size: 14px;
  line-height: 20px;
  font-weight: 700;
  color: ${({theme:e})=>e.palette.site.heading};
`,ea=i.U.span.withConfig({displayName:"ContactForm.styles__Required",componentId:"sc-6ea461e7-19"})`
  margin-left: 2px;
  color: ${({theme:e})=>e.palette.site.red};
`,ei=i.U.span.withConfig({displayName:"ContactForm.styles__Optional",componentId:"sc-6ea461e7-20"})`
  margin-left: 6px;
  font-weight: 400;
  color: ${({theme:e})=>e.palette.site.muted};
`,en=i.m`
  box-sizing: border-box;
  width: 100%;
  padding: 12px 14px;
  border: 1px solid ${({theme:e})=>e.palette.site.border};
  border-radius: 12px;
  background: ${({theme:e})=>e.palette.site.card};
  color: ${({theme:e})=>e.palette.site.heading};
  font: inherit;
  font-size: 16px;
  line-height: 22px;
  transition:
    border-color 0.15s ease,
    box-shadow 0.15s ease;

  &::placeholder {
    color: ${({theme:e})=>e.palette.site.muted};
  }

  &:focus-visible {
    ${S}
  }

  &[aria-invalid='true'] {
    border-color: ${({theme:e})=>e.palette.site.red};
  }
`,eo=i.U.input.withConfig({displayName:"ContactForm.styles__Input",componentId:"sc-6ea461e7-21"})`
  ${en}
  min-height: 48px;
`,er=i.U.select.withConfig({displayName:"ContactForm.styles__Select",componentId:"sc-6ea461e7-22"})`
  ${en}
  min-height: 48px;
  appearance: none;
  padding-right: 40px;
  background-image:
    linear-gradient(45deg, transparent 50%, currentColor 50%),
    linear-gradient(135deg, currentColor 50%, transparent 50%);
  background-position:
    calc(100% - 20px) 50%,
    calc(100% - 14px) 50%;
  background-size: 6px 6px;
  background-repeat: no-repeat;
`,el=i.U.textarea.withConfig({displayName:"ContactForm.styles__Textarea",componentId:"sc-6ea461e7-23"})`
  ${en}
  min-height: 160px;
  resize: vertical;
`,es=i.U.span.withConfig({displayName:"ContactForm.styles__Counter",componentId:"sc-6ea461e7-24"})`
  align-self: flex-end;
  font-size: 12px;
  line-height: 16px;
  color: ${({theme:e})=>e.palette.site.muted};
`,ed=i.U.div.withConfig({displayName:"ContactForm.styles__Chips",componentId:"sc-6ea461e7-25"})`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,ec=i.U.label.withConfig({displayName:"ContactForm.styles__Chip",componentId:"sc-6ea461e7-26"})`
  position: relative;
  display: inline-flex;
  align-items: center;
  padding: 8px 14px;
  border: 1px solid ${({theme:e})=>e.palette.site.border};
  border-radius: 999px;
  background: ${({theme:e})=>e.palette.site.card};
  font-size: 14px;
  line-height: 20px;
  cursor: pointer;
  transition:
    border-color 0.15s ease,
    background-color 0.15s ease;

  &:hover {
    border-color: ${({theme:e})=>e.palette.site.blue};
  }

  &[data-selected='true'] {
    border-color: ${({theme:e})=>e.palette.site.blue};
    background: ${({theme:e})=>e.palette.site.blue};
    color: ${({theme:e})=>e.palette.site.card};
  }

  &:has(input:focus-visible) {
    ${S}
  }

  input {
    position: absolute;
    opacity: 0;
    width: 1px;
    height: 1px;
    margin: 0;
    pointer-events: none;
  }
`,ep=i.U.span.withConfig({displayName:"ContactForm.styles__FieldError",componentId:"sc-6ea461e7-27"})`
  font-size: 13px;
  line-height: 18px;
  color: ${({theme:e})=>e.palette.site.red};
`,em=i.U.div.withConfig({displayName:"ContactForm.styles__Trap",componentId:"sc-6ea461e7-28"})`
  position: absolute;
  left: -10000px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
`,eu=i.U.div.withConfig({displayName:"ContactForm.styles__Footer",componentId:"sc-6ea461e7-29"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,eh=i.U.div.withConfig({displayName:"ContactForm.styles__SubmitRow",componentId:"sc-6ea461e7-30"})`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`,ef=i.U.p.withConfig({displayName:"ContactForm.styles__Privacy",componentId:"sc-6ea461e7-31"})`
  margin: 0;
  font-size: 13px;
  line-height: 20px;
  color: ${({theme:e})=>e.palette.site.muted};

  && a {
    color: ${({theme:e})=>e.palette.site.blue};
    text-decoration: underline;
  }
`,eg=i.U.div.withConfig({displayName:"ContactForm.styles__Banner",componentId:"sc-6ea461e7-32"})`
  box-sizing: border-box;
  padding: 14px 16px;
  border-radius: 12px;
  border: 1px solid ${({theme:e})=>e.palette.site.red};
  color: ${({theme:e})=>e.palette.site.heading};
  background: ${({theme:e})=>e.palette.site.card};
  font-size: 14px;
  line-height: 20px;
`,ex=i.U.div.withConfig({displayName:"ContactForm.styles__Success",componentId:"sc-6ea461e7-33"})`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  padding: 16px 0;
  animation: ${G} 0.3s ease both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,ey=i.U.span.withConfig({displayName:"ContactForm.styles__SuccessIcon",componentId:"sc-6ea461e7-34"})`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: ${({theme:e})=>e.palette.site.greenTint};
  color: ${({theme:e})=>e.palette.site.green};

  svg {
    width: 28px;
    height: 28px;
  }
`,eb=i.U.div.withConfig({displayName:"ContactForm.styles__AsideColumn",componentId:"sc-6ea461e7-35"})`
  position: sticky;
  top: 112px;
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.margin.default};

  @media only screen and (max-width: ${z.p.tabletportrait}px) {
    position: static;
  }
`,ev=i.U.aside.withConfig({displayName:"ContactForm.styles__Aside",componentId:"sc-6ea461e7-36"})`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 32px;
  border-radius: 24px;
  background: ${({theme:e})=>e.palette.site.navy};
  color: ${"#ffffff"};
`,eC=i.U.h3.withConfig({displayName:"ContactForm.styles__AsideTitle",componentId:"sc-6ea461e7-37"})`
  margin: 0;
  font-family: ${({theme:e})=>e.font.primaryFamily};
  font-size: 20px;
  line-height: 28px;
  font-weight: 700;
  color: #ffffff;
`,ew=i.U.ul.withConfig({displayName:"ContactForm.styles__AsideList",componentId:"sc-6ea461e7-38"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 0;
  padding: 0;
  list-style: none;
`,e$=i.U.div.withConfig({displayName:"ContactForm.styles__AsideContact",componentId:"sc-6ea461e7-39"})`
  width: 100%;
  max-width: 20rem;
  margin: 0 auto;
`,ej=i.U.li.withConfig({displayName:"ContactForm.styles__AsideItem",componentId:"sc-6ea461e7-40"})`
  display: flex;
  gap: 12px;
  align-items: flex-start;
  font-size: 15px;
  line-height: 22px;
  white-space: pre-line;

  svg {
    flex: none;
    width: 20px;
    height: 20px;
    margin-top: 1px;
  }

  && a {
    color: #ffffff;
    text-decoration: none;
    overflow-wrap: anywhere;
  }

  && a:hover,
  && a:focus-visible {
    text-decoration: underline;
  }
`,e_={topic:"",name:"",company:"",email:"",phone:"",message:"",details:{}},ek=["topic","name","email","company","phone","message"];function eF({topics:e,headline:i,description:b,privacyHref:v="/privacy/",successTitle:C,successText:w,aside:z,locale:S="de",dataTestId:G="contact-form"}){let{language:en}=(0,x.N)(),{tr:eI}=(0,g.f)(en),eN=(0,n.usePathname)()??"",eU=(0,a.useId)().replace(/:/g,""),eT=(0,a.useRef)(null),eV=(0,a.useMemo)(()=>{let t=(e??[]).filter((e,t,a)=>y.p.includes(e)&&a.indexOf(e)===t);return t.length>0?t:[...y.p]},[e]),[eM,ez]=(0,a.useState)(e_),[eS,eL]=(0,a.useState)(""),[eA,eB]=(0,a.useState)({}),[eR,eE]=(0,a.useState)(null),[eO,eD]=(0,a.useState)("idle"),[eW,eP]=(0,a.useState)(""),[eq,eK]=(0,a.useState)(null),[eY,eH]=(0,a.useState)(0),eZ=(0,a.useCallback)(async()=>{try{let e=await fetch("/api/contact-requests/token/",{credentials:"same-origin",cache:"no-store"});if(!e.ok)return"";let t=await e.json(),a="string"==typeof t.token?t.token:"";return eP(a),a}catch{return""}},[]);(0,a.useEffect)(()=>{eZ()},[eZ]);let[eG,eJ]=(0,a.useState)(!1);(0,a.useEffect)(()=>{let e=(0,y.N)(window.location.search,eV);e&&(ez(t=>t.topic?t:{...t,topic:e}),eJ(!0))},[eV]);let eX=(0,a.useCallback)(()=>{eK(null),eH(e=>e+1)},[]),eQ=(0,a.useCallback)(e=>eK({payload:e,at:Date.now()}),[]),e0=(e,t)=>{ez(a=>({...a,[e]:t})),eB(t=>{if(!t[e])return t;let{[e]:a,...i}=t;return i})},e1=(e,t)=>ez(a=>({...a,details:{...a.details,[e]:t}})),e2=eV.includes(eM.topic)?y.i[eM.topic]:null,e4=e=>{let t=ek.find(t=>e[t]);if(!t)return;let a=eT.current?.querySelector(`[data-field="${t}"]`);a?.focus()},e6=async e=>{var t,a,i,n;let o,r,l,s,d,c;if(e.preventDefault(),"submitting"===eO)return;eE(null);let p=(t={...eM,locale:S,sourcePath:eN,token:eW,altcha:eq?.payload??"",website:eS},r=(o=t).details&&"object"==typeof o.details?o.details:{},l=F(o.topic,40),s=(0,y.g)(l)?y.i[l].details:[],d={},(c=(e,t)=>{s.includes(e)&&t&&(d[e]=t)})("material",F(r.material,20)),c("materialForm",F(r.materialForm,30)),c("volume",F(r.volume,20)),c("application",F(r.application,200)),c("postalCode",F(r.postalCode,12).replace(/[^\p{L}\p{N} -]/gu,"").trim().toUpperCase()),{topic:l,name:F(o.name,100),company:F(o.company,150),email:(a=o.email,"string"!=typeof a?"":_($(a,254)).replace(/\s/g,"").toLowerCase().slice(0,254)),phone:(i=o.phone,"string"!=typeof i?"":_($(i,40)).slice(0,40).replace(/[^\d+()/\- ]/g,"").replace(/\s+/g," ").replace(/^[-\s]+/,"").trim()),message:(n=o.message,"string"!=typeof n?"":_($(n,4e3)).replace(/\t/g," ").split("\n").map(j).join("\n").replace(/[ \u00A0]{2,}/g," ").replace(/\n{3,}/g,"\n\n").trim().replace(k,"").slice(0,4e3)),details:d,locale:"en"===o.locale?"en":"de",sourcePath:F(o.sourcePath,200),token:F(o.token,200),altcha:F(o.altcha,4e3),website:"string"==typeof o.website?o.website:""}),m=function(e){let{token:t,altcha:a,website:i,...n}=e;return n}(p);ez({topic:m.topic,name:m.name,company:m.company,email:m.email,phone:m.phone,message:m.message,details:m.details});let u=function(e){let t={},a=(e,a)=>{t[e]||(t[e]=a)},i=(e,t,i)=>"string"==typeof t&&t.length<=i||(a(e,"invalid"),!1);Object.keys(e).some(e=>!T.includes(e))&&a("form","invalid"),M(y.p,e.topic)||a("topic","required");let n=e.name;"string"==typeof n&&n.length<1?a("name","required"):i("name",n,100),i("company",e.company,150);let o=e.email;"string"==typeof o&&o.length<1?a("email","required"):i("email",o,254)&&!U.test(o)&&a("email","invalid");let r=e.phone;i("phone",r,40)&&!(""===r||r.replace(/\D/g,"").length>=6)&&a("phone","invalid"),i("message",e.message,4e3);let l=function(e,t){if(!(0,y.g)(e)||!I.includes(e)||"string"!=typeof t)return null;let a=t.trim().length;return 0===a?"required":a<10?"tooShort":null}(e.topic,e.message);l&&a("message",l);let s=e.details;if(!s||"object"!=typeof s||Array.isArray(s))a("details","invalid");else{Object.keys(s).some(e=>!V.includes(e))&&a("details","invalid");let e=e=>{let t=s[e]??"";return"string"==typeof t&&""===t?void 0:t},t=(t,i)=>{let n=e(t);void 0===n||M(i,n)||a(`details.${t}`,"invalid")},n=(t,a)=>{let n=e(t);void 0!==n&&i(`details.${t}`,n,a)};t("material",y.C),t("materialForm",y.h),t("volume",y.O),n("application",200),n("postalCode",12)}M(["de","en"],e.locale)||a("locale","invalid");let d=e.sourcePath;return i("sourcePath",d,200)&&""!==d&&!N.test(d)&&a("sourcePath","invalid"),0===Object.keys(t).length?{ok:!0}:{ok:!1,errors:t}}(m);if(!u.ok){eB(u.errors),e4(u.errors);return}if(eB({}),!eq||Date.now()-eq.at>48e4){eq&&eX(),eE("altcha_pending");return}let h=eW||await eZ();eD("submitting");try{let e=await fetch("/api/contact-requests/",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify({...p,token:h})});if(e.ok){eD("success"),ez(e_);return}let t=await e.json().catch(()=>({}));eX(),eD("idle"),429===e.status?eE("rate_limited"):"unavailable"===t.error?eE("unavailable"):"token_expired"===t.error||"token_invalid"===t.error?(await eZ(),eE("token_expired")):"altcha_failed"===t.error?eE("altcha_failed"):"validation"===t.error&&t.fields?(eB(t.fields),eE("validation"),e4(t.fields)):eE("unknown")}catch{eX(),eD("idle"),eE("network")}},e5={rate_limited:eI("contact.form.error.rateLimited",{defaultValue:"Zu viele Anfragen in kurzer Zeit. Bitte versuchen Sie es später erneut."}),token_expired:eI("contact.form.error.tokenExpired",{defaultValue:"Das Formular war zu lange geöffnet. Bitte senden Sie es erneut."}),altcha_failed:eI("contact.form.error.altchaFailed",{defaultValue:"Die Sicherheitsprüfung ist abgelaufen. Sie wird erneuert — bitte senden Sie erneut."}),altcha_pending:eI("contact.form.error.altchaPending",{defaultValue:"Die Sicherheitsprüfung läuft noch. Bitte senden Sie in einem Moment erneut."}),validation:eI("contact.form.error.validation",{defaultValue:"Bitte prüfen Sie die markierten Felder."}),network:eI("contact.form.error.network",{defaultValue:"Keine Verbindung. Bitte prüfen Sie Ihre Internetverbindung."}),unavailable:eI("contact.form.error.unavailable",{defaultValue:"Die Anfrage konnte gerade nicht übermittelt werden. Bitte versuchen Sie es später erneut."}),unknown:eI("contact.form.error.unknown",{defaultValue:"Die Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es erneut."})},e7={regrind:eI("contact.materialForm.regrind",{defaultValue:y.W.materialForm.regrind}),regranulate:eI("contact.materialForm.regranulate",{defaultValue:y.W.materialForm.regranulate}),bales:eI("contact.materialForm.bales",{defaultValue:y.W.materialForm.bales}),production_waste:eI("contact.materialForm.production_waste",{defaultValue:y.W.materialForm.production_waste}),post_consumer:eI("contact.materialForm.post_consumer",{defaultValue:y.W.materialForm.post_consumer}),other:eI("contact.materialForm.other",{defaultValue:y.W.materialForm.other})},e3={lt1:eI("contact.volume.lt1",{defaultValue:y.W.volume.lt1}),"1to10":eI("contact.volume.1to10",{defaultValue:y.W.volume["1to10"]}),"10to50":eI("contact.volume.10to50",{defaultValue:y.W.volume["10to50"]}),"50to200":eI("contact.volume.50to200",{defaultValue:y.W.volume["50to200"]}),gt200:eI("contact.volume.gt200",{defaultValue:y.W.volume.gt200})},e9=I.includes(eM.topic),e8=(0,t.jsx)(ei,{children:eI("contact.form.optional",{defaultValue:"(optional)"})}),te=(0,t.jsx)(ea,{"aria-hidden":"true",children:"*"}),tt=eI("contact.form.select",{defaultValue:"Bitte wählen"}),ta=e=>({id:`${eU}-${e}`,"data-field":e,"data-testid":`${G}-${e}`,"aria-invalid":eA[e]?"true":void 0,"aria-describedby":eA[e]?`${eU}-${e}-error`:void 0}),ti=e=>eA[e]?(0,t.jsx)(ep,{id:`${eU}-${e}-error`,"data-testid":`${G}-${e}-error`,"data-error":eA[e],children:(e=>{if(e)return"required"===e?eI("contact.form.error.required",{defaultValue:"Bitte ausfüllen."}):"tooShort"===e?eI("contact.form.error.tooShort",{defaultValue:"Mindestens 10 Zeichen."}):eI("contact.form.error.invalid",{defaultValue:"Bitte prüfen Sie die Eingabe."})})(eA[e])}):null,tn=!!(z&&(z.phone||z.email||z.address||z.hours)),to=!!(tn||z?.contact);return(0,t.jsxs)(L,{"data-testid":G,"data-status":eO,"data-topic":eM.topic||void 0,"data-preselected":eG?"true":"false","data-error":eR??void 0,"data-token":eW?"ready":"pending","data-altcha":eq?"solved":"pending",children:[(0,t.jsx)(A,{children:"success"===eO?(0,t.jsxs)(ex,{role:"status","data-testid":`${G}-success`,children:[(0,t.jsx)(ey,{"aria-hidden":"true",children:(0,t.jsx)(c.f,{})}),(0,t.jsx)(R,{children:C??eI("contact.form.successTitle",{defaultValue:"Vielen Dank für Ihre Anfrage!"})}),(0,t.jsx)(E,{children:w??eI("contact.form.successText",{defaultValue:"Wir haben Ihre Nachricht erhalten und melden uns in der Regel innerhalb von zwei Werktagen."})}),(0,t.jsx)(o.f,{modifier:r.j.SECONDARY,onClick:()=>{eD("idle"),eX(),eZ()},dataTestId:`${G}-again`,children:eI("contact.form.again",{defaultValue:"Weitere Anfrage senden"})})]}):(0,t.jsxs)(t.Fragment,{children:[(i||b)&&(0,t.jsxs)(B,{children:[i&&(0,t.jsx)(R,{children:i}),b&&(0,t.jsx)(E,{children:b})]}),(0,t.jsxs)(O,{ref:eT,noValidate:!0,onSubmit:e6,"data-testid":`${G}-form`,children:[(0,t.jsxs)(D,{role:"radiogroup","aria-required":"true","aria-invalid":eA.topic?"true":void 0,"aria-describedby":eA.topic?`${eU}-topic-error`:void 0,"data-testid":`${G}-topics`,children:[(0,t.jsxs)(W,{children:[(0,t.jsx)(P,{"aria-hidden":"true",children:"1"}),(0,t.jsxs)("span",{children:[eI("contact.form.topicLegend",{defaultValue:"Worum geht es?"}),te]})]}),(0,t.jsx)(q,{"data-testid":`${G}-topic-grid`,"data-count":eV.length,children:eV.map((e,a)=>{let i=y.i[e],n=eM.topic===e;return(0,t.jsxs)(K,{"data-selected":n?"true":"false","data-testid":`${G}-topic-${e}`,children:[(0,t.jsx)("input",{type:"radio",name:`${eU}-topic`,value:e,checked:n,onChange:()=>e0("topic",e),"data-field":0===a?"topic":void 0}),(0,t.jsx)(s.c,{name:i.icon,tone:n?"green":"blue"}),(0,t.jsx)(Y,{children:eI(i.labelKey,{defaultValue:i.labelDefault})}),(0,t.jsx)(H,{children:eI(i.hintKey,{defaultValue:i.hintDefault})}),(0,t.jsx)(Z,{"aria-hidden":"true",children:(0,t.jsx)(c.f,{})})]},e)})}),ti("topic"),e2&&e2.details.length>0&&(0,t.jsx)(J,{"data-testid":`${G}-details`,children:(0,t.jsxs)(X,{children:[e2.details.includes("material")&&(0,t.jsxs)(Q,{children:[(0,t.jsxs)(ee,{htmlFor:`${eU}-material`,children:[eI("contact.form.material",{defaultValue:"Kunststoff"}),e8]}),(0,t.jsxs)(er,{id:`${eU}-material`,value:eM.details.material??"",onChange:e=>e1("material",e.target.value),"data-testid":`${G}-material`,children:[(0,t.jsx)("option",{value:"",children:tt}),y.C.map(e=>(0,t.jsx)("option",{value:e,children:"mixed"===e?eI("contact.material.mixed",{defaultValue:y.W.material.mixed}):"other"===e?eI("contact.material.other",{defaultValue:y.W.material.other}):e},e))]})]}),e2.details.includes("materialForm")&&(0,t.jsxs)(Q,{children:[(0,t.jsxs)(ee,{htmlFor:`${eU}-materialForm`,children:[eI("contact.form.materialForm",{defaultValue:"Form"}),e8]}),(0,t.jsxs)(er,{id:`${eU}-materialForm`,value:eM.details.materialForm??"",onChange:e=>e1("materialForm",e.target.value),"data-testid":`${G}-materialForm`,children:[(0,t.jsx)("option",{value:"",children:tt}),y.h.map(e=>(0,t.jsx)("option",{value:e,children:e7[e]},e))]})]}),e2.details.includes("volume")&&(0,t.jsxs)(Q,{$wide:!0,role:"radiogroup","aria-labelledby":`${eU}-volume-label`,children:[(0,t.jsxs)(et,{id:`${eU}-volume-label`,children:[eI("contact.form.volume",{defaultValue:"Menge pro Monat"}),e8]}),(0,t.jsx)(ed,{"data-testid":`${G}-volume`,children:y.O.map(e=>(0,t.jsxs)(ec,{"data-selected":eM.details.volume===e?"true":"false","data-testid":`${G}-volume-${e}`,children:[(0,t.jsx)("input",{type:"radio",name:`${eU}-volume`,value:e,checked:eM.details.volume===e,onChange:()=>e1("volume",e)}),e3[e]]},e))})]}),e2.details.includes("application")&&(0,t.jsxs)(Q,{$wide:!0,children:[(0,t.jsxs)(ee,{htmlFor:`${eU}-application`,children:[eI("contact.form.application",{defaultValue:"Anwendung / Einsatzzweck"}),e8]}),(0,t.jsx)(eo,{id:`${eU}-application`,value:eM.details.application??"",maxLength:200,onChange:e=>e1("application",e.target.value),"data-testid":`${G}-application`})]}),e2.details.includes("postalCode")&&(0,t.jsxs)(Q,{children:[(0,t.jsxs)(ee,{htmlFor:`${eU}-postalCode`,children:[eI("contact.form.postalCode",{defaultValue:"PLZ des Standorts"}),e8]}),(0,t.jsx)(eo,{id:`${eU}-postalCode`,value:eM.details.postalCode??"",maxLength:12,autoComplete:"postal-code",inputMode:"text",onChange:e=>e1("postalCode",e.target.value),"data-testid":`${G}-postalCode`})]})]})},e2.key)]}),(0,t.jsxs)(D,{children:[(0,t.jsxs)(W,{children:[(0,t.jsx)(P,{"aria-hidden":"true",children:"2"}),(0,t.jsx)("span",{children:eI("contact.form.contactLegend",{defaultValue:"Ihre Kontaktdaten"})})]}),(0,t.jsxs)(X,{children:[(0,t.jsxs)(Q,{children:[(0,t.jsxs)(ee,{htmlFor:`${eU}-name`,children:[eI("contact.form.name",{defaultValue:"Name"}),te]}),(0,t.jsx)(eo,{...ta("name"),value:eM.name,maxLength:100,autoComplete:"name",required:!0,onChange:e=>e0("name",e.target.value)}),ti("name")]}),(0,t.jsxs)(Q,{children:[(0,t.jsxs)(ee,{htmlFor:`${eU}-email`,children:[eI("contact.form.email",{defaultValue:"E-Mail"}),te]}),(0,t.jsx)(eo,{...ta("email"),type:"email",value:eM.email,maxLength:254,autoComplete:"email",inputMode:"email",required:!0,onChange:e=>e0("email",e.target.value)}),ti("email")]}),(0,t.jsxs)(Q,{children:[(0,t.jsxs)(ee,{htmlFor:`${eU}-company`,children:[eI("contact.form.company",{defaultValue:"Firma"}),e8]}),(0,t.jsx)(eo,{...ta("company"),value:eM.company,maxLength:150,autoComplete:"organization",onChange:e=>e0("company",e.target.value)}),ti("company")]}),(0,t.jsxs)(Q,{children:[(0,t.jsxs)(ee,{htmlFor:`${eU}-phone`,children:[eI("contact.form.phone",{defaultValue:"Telefon"}),e8]}),(0,t.jsx)(eo,{...ta("phone"),type:"tel",value:eM.phone,maxLength:40,autoComplete:"tel",inputMode:"tel",onChange:e=>e0("phone",e.target.value)}),ti("phone")]}),(0,t.jsxs)(Q,{$wide:!0,children:[(0,t.jsxs)(ee,{htmlFor:`${eU}-message`,children:[eI("contact.form.message",{defaultValue:"Ihre Nachricht"}),e9?te:e8]}),(0,t.jsx)(el,{...ta("message"),"aria-required":e9?"true":void 0,value:eM.message,maxLength:4e3,onChange:e=>e0("message",e.target.value)}),(0,t.jsxs)(es,{"aria-live":"polite","data-testid":`${G}-message-count`,children:[eM.message.length," / ",4e3]}),ti("message")]})]})]}),(0,t.jsxs)(em,{"aria-hidden":"true",children:[(0,t.jsx)("label",{htmlFor:`${eU}-website`,children:"Website"}),(0,t.jsx)("input",{id:`${eU}-website`,name:"website",type:"text",tabIndex:-1,autoComplete:"off",value:eS,onChange:e=>eL(e.target.value),"data-testid":`${G}-trap`})]}),(0,t.jsxs)(eu,{children:[eR&&(0,t.jsx)(eg,{role:"alert","data-testid":`${G}-error`,"data-error":eR,children:e5[eR]}),(0,t.jsx)(l.f,{challengeUrl:"/api/contact-requests/challenge/",auto:"onfocus",startImmediately:eY>0,onSolved:eQ,dataTestId:`${G}-altcha`},eY),(0,t.jsxs)(eh,{children:[(0,t.jsxs)(ef,{children:[eI("contact.form.privacy",{defaultValue:"Wir verwenden Ihre Angaben nur, um Ihre Anfrage zu beantworten."})," ",(0,t.jsx)("a",{href:v,"data-testid":`${G}-privacy`,children:eI("contact.form.privacyLink",{defaultValue:"Datenschutzerklärung"})})]}),(0,t.jsx)(o.f,{buttonType:r.O.SUBMIT,modifier:r.j.PRIMARY,loading:"submitting"===eO,icon:(0,t.jsx)(d.f,{}),iconAlign:r.W.RIGHT,dataTestId:`${G}-submit`,children:eI("contact.form.submit",{defaultValue:"Anfrage senden"})})]})]})]})]})}),to&&z&&(0,t.jsxs)(eb,{"data-testid":`${G}-aside-column`,children:[z.contact&&(0,t.jsx)(e$,{"data-testid":`${G}-aside-contact`,children:z.contact}),tn&&(0,t.jsxs)(ev,{"data-testid":`${G}-aside`,children:[z.title&&(0,t.jsx)(eC,{children:z.title}),(0,t.jsxs)(ew,{children:[z.phone&&(0,t.jsxs)(ej,{children:[(0,t.jsx)(h.f,{}),(0,t.jsx)(u.f,{kind:"tel",value:z.phone,place:"contactForm",dataTestId:`${G}-aside-phone`})]}),z.email&&(0,t.jsxs)(ej,{children:[(0,t.jsx)(p.f,{}),(0,t.jsx)(u.f,{kind:"mail",value:z.email,place:"contactForm",dataTestId:`${G}-aside-email`})]}),z.address&&(0,t.jsxs)(ej,{"data-testid":`${G}-aside-address`,children:[(0,t.jsx)(m.f,{}),(0,t.jsx)(u.f,{kind:"map",value:z.address,place:"contactForm",dataTestId:`${G}-aside-address-link`})]}),z.hours&&(0,t.jsxs)(ej,{"data-testid":`${G}-aside-hours`,children:[(0,t.jsx)(f.f,{}),(0,t.jsx)("span",{children:z.hours})]})]})]})]})]})}e.i(586531);var eI=e.i(682194),eN=e.i(197908),eU=e.i(507924),eT=e.i(755010);let eV=i.U.div.withConfig({displayName:"ContactFormBlock__Kachel",componentId:"sc-2e246f30-0"})`
  width: 100%;
`;e.s(["ContactFormBlock",0,({block:e,locale:i,dataTestId:n})=>{let o=e.props,r=e=>e?(0,eU.u)(e,i):void 0,l=(0,eT.l)("contactMember"),s=(0,a.useCallback)(e=>{"mouse"===e.pointerType&&l("hover")},[l]),d=(0,a.useCallback)(e=>{e.target?.closest("a, button")&&l("cta")},[l]),c=o.contact,p=c?(0,t.jsx)(eT.A,{element:"contactMember",fallback:null,children:(0,t.jsx)(eV,{onPointerEnter:s,onClick:d,children:(0,t.jsx)(eI.f,{name:c.name,jobTitle:(0,eU.u)(c.jobTitle,i),photoUrl:(0,eN.J)(c.photoUrl),phone:(0,eN.J)(c.phone),email:(0,eN.J)(c.email),dataTestId:`${n}-contact-member`})})}):void 0;return(0,t.jsx)(eF,{topics:o.topics,headline:r(o.headline),description:r(o.description),privacyHref:(0,eN.J)(o.privacyHref),successTitle:r(o.successTitle),successText:r(o.successText),aside:{title:r(o.asideTitle),phone:(0,eN.J)(o.phone),email:(0,eN.J)(o.email),address:r(o.address),hours:r(o.hours),contact:p},locale:"en"===i?"en":"de",dataTestId:`${n}-contact-form`})}],817246)},666629,e=>{e.s(["f",0,function(e,t){let a=window.URL.createObjectURL(e),i=document.createElement("a");i.href=a,i.download=t,document.body.appendChild(i),i.click(),window.URL.revokeObjectURL(a),document.body.removeChild(i)}])}],567553,function(e){e.n(e.i(817246))}]);