(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,[12812,e=>{var t=e.i(843476),a=e.i(271645),i=e.i(997053);let n=i.U.div.withConfig({displayName:"Altcha.styles__Slot",componentId:"sc-8715a897-0"})`
  min-height: ${"calc(1.5rem + 1.5rem + 2px)"};
`,o="altcha-widget",r=["focusin","pointerdown","keydown"];e.s(["f",0,({onSolved:i,resetKey:l,challengeUrl:s="/api/altcha/challenge/",auto:d="onsubmit",startImmediately:c=!1,dataTestId:p="altcha"})=>{let m=(0,a.useRef)(null),u=(0,a.useRef)(null),h="onfocus"===d,[f,g]=(0,a.useState)(null),x=null!==f,y=(0,a.useCallback)(()=>g(e=>e??Math.min(4,Math.max(1,((void 0)??("u"<typeof navigator?void 0:navigator.hardwareConcurrency))||2))),[]);(0,a.useEffect)(()=>{if(x)return;let e=h&&!c?u.current?.closest("form"):null;if(!e)return void y();for(let t of r)e.addEventListener(t,y,{capture:!0});return()=>{for(let t of r)e.removeEventListener(t,y,{capture:!0})}},[x,h,c,y]),(0,a.useEffect)(()=>{x&&e.A(53129)},[x]),(0,a.useEffect)(()=>{let e=m.current;if(!e)return;let t=e=>{let t=e.detail;t?.state==="verified"&&t.payload&&i(t.payload)};return e.addEventListener("statechange",t),()=>{e.removeEventListener("statechange",t)}},[i,l,x]);let b=(0,a.useMemo)(()=>JSON.stringify({hideFooter:!0,hideLogo:!0,...null!==f?{workers:f}:{}}),[f]);return h?(0,t.jsx)(n,{ref:u,"data-testid":`${p}-slot`,"data-started":x?"true":"false",children:x&&(0,t.jsx)(o,{ref:m,challenge:s,configuration:b,auto:"onload","data-testid":p})}):(0,t.jsx)(o,{ref:m,challenge:s,configuration:b,auto:d,"data-testid":p})}],12812)},26819,e=>{var t=e.i(843476),a=e.i(997053);let i=a.U.svg.withConfig({displayName:"IconCalendar.styles__Root",componentId:"sc-31b25be0-0"})``;e.s(["f",0,e=>{let a=e.strokeColor||"currentColor";return(0,t.jsx)(i,{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",className:e.className,"data-testid":"icon-calendar-root",children:(0,t.jsxs)("g",{fill:a,strokeLinejoin:"miter",strokeLinecap:"butt",children:[(0,t.jsx)("line",{x1:"2",y1:"9",x2:"22",y2:"9",fill:"none",stroke:a,strokeMiterlimit:"10",strokeWidth:"2"}),(0,t.jsx)("line",{x1:"7",y1:"1",x2:"7",y2:"4",fill:"none",stroke:a,strokeLinecap:"square",strokeMiterlimit:"10",strokeWidth:"2"}),(0,t.jsx)("line",{x1:"17",y1:"1",x2:"17",y2:"4",fill:"none",stroke:a,strokeLinecap:"square",strokeMiterlimit:"10",strokeWidth:"2"}),(0,t.jsx)("rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",ry:"2",fill:"none",stroke:a,strokeLinecap:"square",strokeMiterlimit:"10",strokeWidth:"2"})]})})}],26819)},923441,e=>{let t=e.i(26819).f;e.s(["f",0,t])},538594,e=>{var t=e.i(843476),a=e.i(997053);let i=a.U.svg.withConfig({displayName:"IconDownload.styles__Root",componentId:"sc-985edd3b-0"})``;e.s(["f",0,e=>(0,t.jsx)(i,{className:e.className,"data-testid":"icon-download-root",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("path",{d:"M8.01562 15.784H5.21429C3.43908 15.784 2 14.5585 2 12.7614C2 10.9644 3.43908 9.50762 5.21429 9.50762C5.335 9.50762 5.45417 9.51436 5.57143 9.52748V9.50762H5.61564C5.58646 9.27074 5.57143 9.02942 5.57143 8.78455C5.57143 5.58983 8.1298 3 11.2857 3C13.4228 3 15.2859 4.1876 16.2661 5.94642C16.5056 5.91075 16.7507 5.89227 17 5.89227C19.7614 5.89227 22 8.15838 22 10.9538C22 13.5036 20.1374 15.3819 17.7143 15.7328H15.125M11.6429 9.86915V21M11.6429 21L9.10937 18.5008M11.6429 21L14.1094 18.5008",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})],538594)},481804,e=>{let t=e.i(538594).f;e.s(["f",0,t])},586531,682194,e=>{var t=e.i(843476),a=e.i(271645),i=e.i(325164);e.i(710788);var n=e.i(599858);e.i(352162);var o=e.i(808847),r=e.i(791777),l=e.i(468864);e.i(407030);var s=e.i(382445);e.i(311046);var d=e.i(355351),c=e.i(356127),p=e.i(627430),m=e.i(650529),u=e.i(587076),h=e.i(481804);e.i(821194);var f=e.i(99222),g=e.i(666629),x=e.i(891567);let y={name:x.Y.name,street:x.Y.street,postalCode:x.Y.postalCode,city:x.Y.locality,country:"Germany",url:"https://plastship.com"};function b(e){return e.replace(/\\/g,"\\\\").replace(/,/g,"\\,").replace(/;/g,"\\;").replace(/\r\n|\r|\n/g,"\\n")}function v(e){let t=0;for(let a of e){let e=a.codePointAt(0)??0;t+=e<128?1:e<2048?2:e<65536?3:4}return t}function w(e){if(75>=v(e))return e;let t=[],a="",i=0,n=75;for(let o of e){let e=v(o);i+e>n&&(t.push(a),a="",i=0,n=74),a+=o,i+=e}return t.push(a),t.join(`\r
 `)}let C={ä:"ae",ö:"oe",ü:"ue",Ä:"Ae",Ö:"Oe",Ü:"Ue",ß:"ss"};var $=e.i(997053),j=e.i(706994);let k=$.U.article.withConfig({displayName:"TeamMemberCard.styles__Root",componentId:"sc-2c9d3046-0"})`
  /* #2242: Kantenlänge der Kacheln (Bandgitter) — Maß der Namensplakette */
  --tile: ${({$tile:e})=>e}px;
  position: relative;
  display: flex;
  flex-direction: column;
  /* globals.css gibt jedem article die Seitenfarbe; auf getönten Bändern
     stand die Karte sonst als weißes Rechteck hinter der Wabe */
  background: transparent;
  color: ${({theme:e})=>e.palette.site.text};
`,_=$.U.div.withConfig({displayName:"TeamMemberCard.styles__Photo",componentId:"sc-2c9d3046-1"})`
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
`,F=$.U.span.withConfig({displayName:"TeamMemberCard.styles__Initials",componentId:"sc-2c9d3046-2"})`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${({theme:e})=>e.font.primaryFamily};
  font-size: 40px;
  font-weight: 700;
  color: ${({theme:e})=>e.palette.site.blue};
`,I=$.U.div.withConfig({displayName:"TeamMemberCard.styles__TileLayer",componentId:"sc-2c9d3046-3"})`
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
`,N=$.q`
  0%, 100% { fill-opacity: 1; }
  50% { fill-opacity: ${1-2*m.H}; }
`,M=(0,$.U)(j.f).withConfig({displayName:"TeamMemberCard.styles__Tiles",componentId:"sc-2c9d3046-4"})`
  pointer-events: none;

  /* #1415/#1433: Hover gibt mehr Foto frei — die Deckung blendet weich */
  && path[data-full='true'],
  && path[data-rounded='true'] {
    transition: opacity 0.7s cubic-bezier(0.33, 1, 0.68, 1);
  }

  && [data-partial='true'] {
    animation-name: ${N};
  }

  @media (prefers-reduced-motion: reduce) {
    && path[data-full='true'],
    && path[data-rounded='true'] {
      transition: none;
      animation: none;
    }
  }
`,U=$.U.div.withConfig({displayName:"TeamMemberCard.styles__Body",componentId:"sc-2c9d3046-5"})`
  position: relative;
  z-index: 2;
  margin-top: calc(-${1} * var(--tile, ${d.E}px));
  padding: 0 20px 8px;
  font-family: ${({theme:e})=>e.font.secondaryFamily};
  font-size: 16px;
  line-height: 24px;
  overflow-wrap: break-word;
`,T=$.U.h3.withConfig({displayName:"TeamMemberCard.styles__Name",componentId:"sc-2c9d3046-6"})`
  margin: 0 0 4px;
  font-family: ${({theme:e})=>e.font.secondaryFamily};
  font-size: 20px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0;
  text-transform: none;
  color: ${({theme:e})=>e.palette.site.heading};
`,V=$.U.p.withConfig({displayName:"TeamMemberCard.styles__Role",componentId:"sc-2c9d3046-7"})`
  margin: 0 0 4px;
  color: ${({theme:e})=>e.palette.site.text};
`,z=$.U.div.withConfig({displayName:"TeamMemberCard.styles__Phone",componentId:"sc-2c9d3046-8"})`
  color: ${({theme:e})=>e.palette.site.muted};

  a {
    color: inherit;
    text-decoration: none;
  }

  a:hover,
  a:focus-visible {
    text-decoration: underline;
  }
`,S=$.U.div.withConfig({displayName:"TeamMemberCard.styles__Email",componentId:"sc-2c9d3046-9"})`
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
`,L=$.U.button.withConfig({displayName:"TeamMemberCard.styles__VCardButton",componentId:"sc-2c9d3046-10"})`
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
`,A=$.U.span.withConfig({displayName:"TeamMemberCard.styles__VCardIcon",componentId:"sc-2c9d3046-11"})`
  display: inline-flex;
  flex: none;

  svg {
    width: 18px;
    height: 18px;
  }
`,R=$.U.span.withConfig({displayName:"TeamMemberCard.styles__VCardLabel",componentId:"sc-2c9d3046-12"})``;e.i(411206);var E=e.i(173972);e.i(635647);let B=[1,.5],O=B.length,W=[200,400],D=[.5,.25],Y=2/Math.sqrt(3),q=(e,t)=>`${e}:${t}`,P=({row:e,col:t})=>{let a=Math.abs(e)%2==1,i=a?t-1:t,n=a?t:t+1;return[q(e,t-1),q(e,t+1),q(e-1,i),q(e-1,n),q(e+1,i),q(e+1,n)]},K=(e,t,a)=>{let i=new Map(e.map(e=>[q(e.row,e.col),e])),n=new Map,o=e.filter(t);o.forEach(e=>n.set(e.key,0));for(let e=1;e<=a&&o.length>0;e+=1){let t=[];for(let a of o)for(let o of P(a)){let a=i.get(o);!a||n.has(a.key)||(n.set(a.key,e),t.push(a))}o=t}return n},H=(e,t,a)=>a&&a.width>0?a.columns?a.width/a.columns:(0,c.l)(a.width).size:t>0?e/t:0;function Z(e,t,a,i,n=1,r){let l,s,p=H(e,a,r);if(e<=0||t<=0||p<=0)return[];let u=e*Y,h=function(e,t,a,i,n){if(e<=0||t<=0)return[];if(!n)return a<=0?[]:(0,d.g)(e,t,a,{left:-i,top:-i,right:e+i,bottom:t+i});if(n.width<=0||n.height<=0)return[];let o=n.columns??(0,c.l)(n.width).columns,{offsetX:r,offsetY:l}=n;return(0,d.g)(n.width,n.height,o,{left:r-i,top:l-i,right:r+e+i,bottom:l+t+i}).map(e=>({...e,x:e.x-r,y:e.y-l,cx:e.cx-r,cy:e.cy-l}))}(e,u,a,(n+B.length+1)*p,r),f=(s=Math.min(2*(l=e/2)/Math.sqrt(3),u/2),{cx:e/2,cy:u/2,a:l,b:s}),g=K(h,e=>1>=(({cx:e,cy:t,a,b:i},n,o)=>{if(a<=0||i<=0)return 1/0;let r=Math.abs(n-e)/a;return Math.max(r,Math.abs(o-t)/i+r/2)})(f,e.cx,e.cy),1/0),x=K(h,e=>(g.get(e.key)??1/0)>n,B.length),y=(0,m.n)(.35),b=h.filter(t=>t.x>=0&&t.y>=0&&t.x+t.size<=e&&t.y+t.size<=u),v=(0,o.A)(b,e=>i.some(t=>(0,d.D)(e,t)),B);return b.map(e=>{let t=x.get(e.key),a=(1-(void 0===t?0:(0,m.U)(e,t,B,y)))*(1-(v.get(e.key)??0));return{key:e.key,row:e.row,col:e.col,x:e.x,y:e.y,size:e.size,ring:g.get(e.key)??1/0,edge:t??1/0,alpha:a>.005?Math.round(1e3*a)/1e3:0}})}function G(e,t,a,i,n=!0,o=e.map(e=>e.ring??0)){let r=e.flatMap((e,a)=>Math.abs(e.alpha-(t[a]?.alpha??e.alpha))>.005?[o[a]]:[]).filter(Number.isFinite),l=r.length>0?Math.min(...r):0,s=r.length>0?Math.max(...r):0;return e.map((e,r)=>{let d=t[r]??e,{ring:c,edge:m,...u}="hover"===a?d:e;if(!n||.005>=Math.abs(e.alpha-d.alpha))return u;let h=Number.isFinite(o[r])?o[r]:s,[f,g]=W;return{...u,transition:{delay:Math.round(("hover"===a?h-l:s-h)*70+50*(0,p.T)(i,e.row,e.col,2)),duration:Math.round(f+(0,p.T)(i,e.row,e.col,1)*(g-f))}}})}function J(e,t=!1){let a=t?.4:1;return e.map(e=>{let t=(e.edge>=1?D[e.edge-1]??0:0)*a;return{...e,alpha:t>.005?Math.round(1e3*t)/1e3:0}})}e.s(["f",0,e=>{let{name:o,jobTitle:c,photoUrl:m,phone:x,email:v,className:$,dataTestId:j="team-member-card",lattice:N}=e,B=(0,a.useRef)(null),W=(0,a.useRef)(null),D=(0,l.f)(W,(0,s.J)()??void 0),q=(0,a.useMemo)(()=>N??(D.width>0&&D.height>0?D:void 0),[N,D]),P=(0,a.useRef)(null),{stage:K,rects:X}=(0,r.Z)(B,P,"active",12),Q=K?.width??0,ee=K?.height??0,et=Q>0?(0,d.L)(Q):0,ea=H(Q,et,q)||d.E,ei=`team-photo-${(0,a.useId)().replace(/:/g,"")}`,[en,eo]=(0,a.useState)(!1),[er,el]=(0,a.useState)(!1),es=en||er,ed=(0,u.f)(),ec=(0,a.useMemo)(()=>(0,p.Z)(`team:${o}`),[o]),ep=(0,a.useCallback)(()=>{("function"!=typeof window.matchMedia||window.matchMedia("(hover: hover) and (pointer: fine)").matches)&&eo(!0)},[]),[em,eu]=(0,a.useState)(null),eh=m&&em?.url===m?em.src:null,ef=(0,a.useMemo)(()=>m?Z(Q,ee,et,X,1,q):[],[m,Q,ee,et,X,q]),eg=(0,a.useMemo)(()=>m?Z(Q,ee,et,X,2,q):[],[m,Q,ee,et,X,q]),ex=es?"hover":"rest",ey=!ed,eb=(0,a.useMemo)(()=>G(ef,eg,ex,ec,ey),[ef,eg,ex,ec,ey]),ev=(0,a.useMemo)(()=>{let e=ef.map(e=>e.ring);return G(J(ef,!1),J(eg,!0),ex,ec,ey,e)},[ef,eg,ex,ec,ey]),ew=null!==eh&&eb.some(e=>e.alpha>0),{tr:eC}=(0,f.f)(),e$=!!(x?.trim()||v?.trim());return(0,t.jsxs)(k,{className:$,$tile:ea,"data-testid":j,"data-tile":Math.round(100*ea)/100,"data-plaque-overlap":Math.round(100*ea)/100,"data-hovered":es?"true":"false",onMouseEnter:ep,onMouseLeave:()=>eo(!1),onFocus:()=>el(!0),onBlur:e=>{let t=e.relatedTarget;t instanceof Node&&e.currentTarget.contains(t)||el(!1)},"data-hex-stage":"true","data-columns":et||void 0,children:[(0,t.jsx)(_,{ref:W,"data-testid":`${j}-avatar`,"data-has-photo":m?"true":"false","data-masked":ew?"true":"false",children:m?(0,t.jsx)(i.default,{src:m,alt:o,width:616,height:Math.round(616*Y),sizes:"(max-width: 639px) calc(100vw - 24px), (max-width: 899px) calc(50vw - 24px), (max-width: 1199px) calc(33.4vw - 24px), calc(25vw - 24px)",onLoad:e=>{let t=e.currentTarget;eu({url:m,src:t.currentSrc||t.src})},"data-testid":`${j}-photo`}):(0,t.jsx)(F,{"aria-hidden":"true",children:o.split(/\s+/).filter(Boolean).slice(0,2).map(e=>e[0]?.toUpperCase()??"").join("")})}),(0,t.jsx)(I,{ref:B,"aria-hidden":"true",children:ew&&eh&&(0,t.jsxs)(M,{focusable:"false","data-testid":`${j}-tiles`,"data-tiles":eb.length,"data-rings":es?2:1,"data-edge-rings":O,"data-lattice":q?"band":"own","data-tile-size":eb[0]?Math.round(100*eb[0].size)/100:void 0,"data-motion":ey?"blend":"reduce",style:{"--edge-x":"0px","--edge-y":"0px","--edge-w":`${Q}px`,"--edge-h":`${ee}px`},children:[(0,t.jsxs)("defs",{children:[(0,t.jsx)("mask",{id:ei,maskUnits:"userSpaceOnUse",x:0,y:0,width:Q,height:ee,children:(0,t.jsx)(n.f,{tiles:eb,color:"mask"})}),(0,t.jsx)("filter",{id:`${ei}-blur`,x:"-10%",y:"-10%",width:"120%",height:"120%",children:(0,t.jsx)("feGaussianBlur",{stdDeviation:.04*Q})}),(0,t.jsxs)("linearGradient",{id:`${ei}-fade-grad`,x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,t.jsx)("stop",{offset:"0",stopColor:"#fff",stopOpacity:"0"}),(0,t.jsx)("stop",{offset:.12,stopColor:"#fff",stopOpacity:"1"}),(0,t.jsx)("stop",{offset:.94,stopColor:"#fff",stopOpacity:"1"}),(0,t.jsx)("stop",{offset:"1",stopColor:"#fff",stopOpacity:"0"})]}),(0,t.jsx)("mask",{id:`${ei}-fade`,maskUnits:"userSpaceOnUse",x:0,y:.14*Q,width:Q,height:Q,children:(0,t.jsx)("rect",{x:0,y:.14*Q,width:Q,height:Q,fill:`url(#${ei}-fade-grad)`})})]}),(0,t.jsxs)("g",{mask:`url(#${ei})`,"data-testid":`${j}-masked-photo`,children:[(0,t.jsx)("image",{href:eh,x:-(.15*Q),y:-(.1*Q),width:1.3*Q,height:Q*Y+.2*Q,preserveAspectRatio:"xMidYMid slice",filter:`url(#${ei}-blur)`,"data-testid":`${j}-photo-blur`}),(0,t.jsx)("image",{href:eh,x:0,y:.14*Q,width:Q,height:Q,preserveAspectRatio:"xMidYMin slice",mask:`url(#${ei}-fade)`,"data-testid":`${j}-photo-sharp`}),(0,t.jsx)(n.f,{tiles:ev,color:"primary",dataTestId:`${j}-tint`})]})]})}),(0,t.jsxs)(U,{ref:P,"data-testid":`${j}-body`,children:[(0,t.jsx)(T,{"data-testid":`${j}-name`,children:o}),(0,t.jsx)(V,{"data-testid":`${j}-title`,children:c}),x&&(0,t.jsx)(z,{children:(0,t.jsx)(E.f,{kind:"tel",value:x,place:"teamCard",dataTestId:`${j}-phone`})}),v&&(0,t.jsx)(S,{children:(0,t.jsx)(E.f,{kind:"mail",value:v,place:"teamCard",dataTestId:`${j}-email`})}),e$&&(0,t.jsxs)(L,{type:"button",onClick:()=>{let e,t=function(e){let t=e.company??y,a=e.name.trim(),{given:i,family:n}=function(e){let t=e.trim().split(/\s+/).filter(Boolean);if(0===t.length)return{given:"",family:""};let a=t[t.length-1]??"";return{given:t.slice(0,-1).join(" "),family:a}}(a),o=e.jobTitle?.trim(),r=e.phone?.trim(),l=e.email?.trim(),s=["BEGIN:VCARD","VERSION:3.0"];s.push(`N:${b(n)};${b(i)};;;`),s.push(`FN:${b(a)}`),t.name&&s.push(`ORG:${b(t.name)}`),o&&s.push(`TITLE:${b(o)}`),r&&s.push(`TEL;TYPE=WORK,VOICE:${b(r)}`),l&&s.push(`EMAIL;TYPE=INTERNET,WORK:${b(l)}`);let d=["","",t.street,t.city,"",t.postalCode,t.country];return d.some(Boolean)&&s.push(`ADR;TYPE=WORK:${d.map(b).join(";")}`),t.url&&s.push(`URL:${t.url}`),s.push("END:VCARD"),s.map(w).join("\r\n")+"\r\n"}({name:o,jobTitle:c,phone:x,email:v});(0,g.f)(new Blob([t],{type:"text/vcard;charset=utf-8"}),(e=o.replace(/[äöüÄÖÜß]/g,e=>C[e]??e).normalize("NFKD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,""),`${e||"kontakt"}.vcf`))},"aria-label":eC("team.vcard.ariaLabel",{name:o,defaultValue:"Kontakt von {{name}} als vCard speichern"}),"data-testid":`${j}-vcard`,children:[(0,t.jsx)(A,{"aria-hidden":"true",children:(0,t.jsx)(h.f,{})}),(0,t.jsx)(R,{children:eC("team.vcard.download",{defaultValue:"Kontakt speichern"})})]})]})]})}],682194),e.s([],586531)},817246,e=>{var t=e.i(843476),a=e.i(271645),i=e.i(997053),n=e.i(618566);e.i(36380);var o=e.i(285393),r=e.i(825969),l=e.i(12812);e.i(945304);var s=e.i(977194),d=e.i(499911),c=e.i(898560),p=e.i(317573),m=e.i(813267);e.i(411206);var u=e.i(173972),h=e.i(874142),f=e.i(923441);e.i(821194);var g=e.i(99222),x=e.i(885895),y=e.i(738278),b=e.i(429147);let v=["partnership","press","career","other"],w=/^\/[a-z0-9\-/]*$/i,C=/^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+.-]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9-]*\.)+[A-Za-z]{2,}$/,$=["topic","name","company","email","phone","message","details","locale","sourcePath"],j=["material","materialForm","volume","application","postalCode"],k=(e,t)=>"string"==typeof t&&e.includes(t);var _=e.i(345712),F=e.i(474704);let I=i.m`
  outline: none;
  box-shadow: 0 0 0 3px ${({theme:e})=>e.palette.site.tint};
  border-color: ${({theme:e})=>e.palette.site.blue};
`,N=i.U.section.withConfig({displayName:"ContactForm.styles__Root",componentId:"sc-6ea461e7-0"})`
  display: grid;
  grid-template-columns: repeat(${F.y.columns}, minmax(0, 1fr));
  column-gap: ${F.y.gutter};
  row-gap: ${F.y.stackGap};
  align-items: start;
  color: ${({theme:e})=>e.palette.site.text};
  font-family: ${({theme:e})=>e.font.secondaryFamily};

  > * {
    grid-column: span 8;
  }

  > * + * {
    grid-column: span 4;
  }

  @media only screen and (max-width: ${_.p.tabletportrait}px) {
    > *,
    > * + * {
      grid-column: 1 / -1;
    }
  }
`,M=i.U.div.withConfig({displayName:"ContactForm.styles__Card",componentId:"sc-6ea461e7-1"})`
  box-sizing: border-box;
  padding: ${({theme:e})=>e.margin.large};
  border: 1px solid ${({theme:e})=>e.palette.site.border};
  border-radius: 24px;
  background: ${({theme:e})=>e.palette.site.card};
  box-shadow: ${({theme:e})=>e.palette.site.shadow};

  @media only screen and (max-width: ${_.p.smartphonelandscape}px) {
    padding: ${({theme:e})=>e.padding.default};
  }
`,U=i.U.header.withConfig({displayName:"ContactForm.styles__Head",componentId:"sc-6ea461e7-2"})`
  margin-bottom: ${F.y.stackGap};
  /* globals.css gibt jedem header die Seitenfarbe: auf der weißen Karte im Dunkelmodus eine dunkle Box */
  background: transparent;
`,T=i.U.h2.withConfig({displayName:"ContactForm.styles__Headline",componentId:"sc-6ea461e7-3"})`
  margin: 0 0 12px;
  font-family: ${({theme:e})=>e.font.primaryFamily};
  font-size: 32px;
  line-height: 40px;
  font-weight: 700;
  text-transform: uppercase;
  color: ${({theme:e})=>e.palette.site.heading};

  @media only screen and (max-width: ${_.p.smartphonelandscape}px) {
    font-size: 24px;
    line-height: 32px;
  }
`,V=i.U.p.withConfig({displayName:"ContactForm.styles__Lead",componentId:"sc-6ea461e7-4"})`
  margin: 0;
  font-size: 16px;
  line-height: 26px;
`,z=i.U.form.withConfig({displayName:"ContactForm.styles__Form",componentId:"sc-6ea461e7-5"})`
  display: flex;
  flex-direction: column;
  gap: 32px;
`,S=i.U.fieldset.withConfig({displayName:"ContactForm.styles__Fieldset",componentId:"sc-6ea461e7-6"})`
  margin: 0;
  padding: 0;
  border: 0;
  min-width: 0;
`,L=i.U.legend.withConfig({displayName:"ContactForm.styles__Legend",componentId:"sc-6ea461e7-7"})`
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
`,A=i.U.span.withConfig({displayName:"ContactForm.styles__Step",componentId:"sc-6ea461e7-8"})`
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
`,R=i.U.div.withConfig({displayName:"ContactForm.styles__Topics",componentId:"sc-6ea461e7-9"})`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;

  > * {
    flex: 1 1 ${160}px;
    min-width: 0;
  }
`,E=i.U.label.withConfig({displayName:"ContactForm.styles__TopicCard",componentId:"sc-6ea461e7-10"})`
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
    ${I}
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
`,B=i.U.span.withConfig({displayName:"ContactForm.styles__TopicTitle",componentId:"sc-6ea461e7-11"})`
  font-size: 16px;
  line-height: 22px;
  font-weight: 700;
  color: ${({theme:e})=>e.palette.site.heading};
`,O=i.U.span.withConfig({displayName:"ContactForm.styles__TopicHint",componentId:"sc-6ea461e7-12"})`
  font-size: 13px;
  line-height: 18px;
  color: ${({theme:e})=>e.palette.site.muted};
`,W=i.U.span.withConfig({displayName:"ContactForm.styles__TopicCheck",componentId:"sc-6ea461e7-13"})`
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
`,D=i.q`
  from { opacity: 0; transform: translateY(-6px); }
  to { opacity: 1; transform: translateY(0); }
`,Y=i.U.div.withConfig({displayName:"ContactForm.styles__Details",componentId:"sc-6ea461e7-14"})`
  margin-top: 20px;
  padding: 20px;
  border-radius: 16px;
  background: ${({theme:e})=>e.palette.site.tint};
  animation: ${D} 0.25s ease both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,q=i.U.div.withConfig({displayName:"ContactForm.styles__Grid",componentId:"sc-6ea461e7-15"})`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px 20px;

  @media only screen and (max-width: ${_.p.smartphonelandscape}px) {
    grid-template-columns: minmax(0, 1fr);
  }
`,P=i.U.div.withConfig({displayName:"ContactForm.styles__Field",componentId:"sc-6ea461e7-16"})`
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 0;
  ${({$wide:e})=>e&&i.m`
      grid-column: 1 / -1;
    `}
`,K=i.U.label.withConfig({displayName:"ContactForm.styles__Label",componentId:"sc-6ea461e7-17"})`
  font-size: 14px;
  line-height: 20px;
  font-weight: 700;
  color: ${({theme:e})=>e.palette.site.heading};
`,H=i.U.span.withConfig({displayName:"ContactForm.styles__GroupLabel",componentId:"sc-6ea461e7-18"})`
  font-size: 14px;
  line-height: 20px;
  font-weight: 700;
  color: ${({theme:e})=>e.palette.site.heading};
`,Z=i.U.span.withConfig({displayName:"ContactForm.styles__Required",componentId:"sc-6ea461e7-19"})`
  margin-left: 2px;
  color: ${({theme:e})=>e.palette.site.red};
`,G=i.U.span.withConfig({displayName:"ContactForm.styles__Optional",componentId:"sc-6ea461e7-20"})`
  margin-left: 6px;
  font-weight: 400;
  color: ${({theme:e})=>e.palette.site.muted};
`,J=i.m`
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
    ${I}
  }

  &[aria-invalid='true'] {
    border-color: ${({theme:e})=>e.palette.site.red};
  }
`,X=i.U.input.withConfig({displayName:"ContactForm.styles__Input",componentId:"sc-6ea461e7-21"})`
  ${J}
  min-height: 48px;
`,Q=i.U.select.withConfig({displayName:"ContactForm.styles__Select",componentId:"sc-6ea461e7-22"})`
  ${J}
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
`,ee=i.U.textarea.withConfig({displayName:"ContactForm.styles__Textarea",componentId:"sc-6ea461e7-23"})`
  ${J}
  min-height: 160px;
  resize: vertical;
`,et=i.U.span.withConfig({displayName:"ContactForm.styles__Counter",componentId:"sc-6ea461e7-24"})`
  align-self: flex-end;
  font-size: 12px;
  line-height: 16px;
  color: ${({theme:e})=>e.palette.site.muted};
`,ea=i.U.div.withConfig({displayName:"ContactForm.styles__Chips",componentId:"sc-6ea461e7-25"})`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,ei=i.U.label.withConfig({displayName:"ContactForm.styles__Chip",componentId:"sc-6ea461e7-26"})`
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
    ${I}
  }

  input {
    position: absolute;
    opacity: 0;
    width: 1px;
    height: 1px;
    margin: 0;
    pointer-events: none;
  }
`,en=i.U.span.withConfig({displayName:"ContactForm.styles__FieldError",componentId:"sc-6ea461e7-27"})`
  font-size: 13px;
  line-height: 18px;
  color: ${({theme:e})=>e.palette.site.red};
`,eo=i.U.div.withConfig({displayName:"ContactForm.styles__Trap",componentId:"sc-6ea461e7-28"})`
  position: absolute;
  left: -10000px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
`,er=i.U.div.withConfig({displayName:"ContactForm.styles__Footer",componentId:"sc-6ea461e7-29"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,el=i.U.div.withConfig({displayName:"ContactForm.styles__SubmitRow",componentId:"sc-6ea461e7-30"})`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`,es=i.U.p.withConfig({displayName:"ContactForm.styles__Privacy",componentId:"sc-6ea461e7-31"})`
  margin: 0;
  font-size: 13px;
  line-height: 20px;
  color: ${({theme:e})=>e.palette.site.muted};

  && a {
    color: ${({theme:e})=>e.palette.site.blue};
    text-decoration: underline;
  }
`,ed=i.U.div.withConfig({displayName:"ContactForm.styles__Banner",componentId:"sc-6ea461e7-32"})`
  box-sizing: border-box;
  padding: 14px 16px;
  border-radius: 12px;
  border: 1px solid ${({theme:e})=>e.palette.site.red};
  color: ${({theme:e})=>e.palette.site.heading};
  background: ${({theme:e})=>e.palette.site.card};
  font-size: 14px;
  line-height: 20px;
`,ec=i.U.div.withConfig({displayName:"ContactForm.styles__Success",componentId:"sc-6ea461e7-33"})`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  padding: 16px 0;
  animation: ${D} 0.3s ease both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,ep=i.U.span.withConfig({displayName:"ContactForm.styles__SuccessIcon",componentId:"sc-6ea461e7-34"})`
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
`,em=i.U.div.withConfig({displayName:"ContactForm.styles__AsideColumn",componentId:"sc-6ea461e7-35"})`
  position: sticky;
  top: 112px;
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.margin.default};

  @media only screen and (max-width: ${_.p.tabletportrait}px) {
    position: static;
  }
`,eu=i.U.aside.withConfig({displayName:"ContactForm.styles__Aside",componentId:"sc-6ea461e7-36"})`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 32px;
  border-radius: 24px;
  background: ${({theme:e})=>e.palette.site.navy};
  color: ${"#ffffff"};
`,eh=i.U.h3.withConfig({displayName:"ContactForm.styles__AsideTitle",componentId:"sc-6ea461e7-37"})`
  margin: 0;
  font-family: ${({theme:e})=>e.font.primaryFamily};
  font-size: 20px;
  line-height: 28px;
  font-weight: 700;
  color: #ffffff;
`,ef=i.U.ul.withConfig({displayName:"ContactForm.styles__AsideList",componentId:"sc-6ea461e7-38"})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 0;
  padding: 0;
  list-style: none;
`,eg=i.U.div.withConfig({displayName:"ContactForm.styles__AsideContact",componentId:"sc-6ea461e7-39"})`
  width: 100%;
  max-width: 20rem;
  margin: 0 auto;
`,ex=i.U.li.withConfig({displayName:"ContactForm.styles__AsideItem",componentId:"sc-6ea461e7-40"})`
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
`,ey={topic:"",name:"",company:"",email:"",phone:"",message:"",details:{}},eb=["topic","name","email","company","phone","message"];function ev({topics:e,headline:i,description:_,privacyHref:F="/privacy/",successTitle:I,successText:D,aside:J,locale:ew="de",defaultTopic:eC,defaultMaterial:e$,onReport:ej,dataTestId:ek="contact-form"}){let{language:e_}=(0,x.N)(),{tr:eF}=(0,g.f)(e_),eI=(0,n.usePathname)()??"",eN=(0,a.useId)().replace(/:/g,""),eM=(0,a.useRef)(null),eU=(0,a.useRef)(null),eT=(0,a.useRef)(ej);(0,a.useEffect)(()=>{eT.current=ej});let eV=(0,a.useMemo)(()=>{let t=(e??[]).filter((e,t,a)=>y.p.includes(e)&&a.indexOf(e)===t);return t.length>0?t:[...y.p]},[e]),ez=(0,a.useMemo)(()=>{let e,t;return e=eC&&eV.includes(eC)?eC:"",t=e$&&y.C.includes(e$)?e$:void 0,{...ey,topic:e,details:t?{material:t}:{}}},[eV,eC,e$]),[eS,eL]=(0,a.useState)(ez),[eA,eR]=(0,a.useState)(""),[eE,eB]=(0,a.useState)({}),[eO,eW]=(0,a.useState)(null),[eD,eY]=(0,a.useState)("idle"),[eq,eP]=(0,a.useState)(""),[eK,eH]=(0,a.useState)(null),[eZ,eG]=(0,a.useState)(0),eJ=(0,a.useCallback)(async()=>{try{let e=await fetch("/api/contact-requests/token/",{credentials:"same-origin",cache:"no-store"});if(!e.ok)return"";let t=await e.json(),a="string"==typeof t.token?t.token:"";return eP(a),a}catch{return""}},[]);(0,a.useEffect)(()=>{eJ()},[eJ]);let[eX,eQ]=(0,a.useState)(!1);(0,a.useEffect)(()=>{let e=(0,y.N)(window.location.search,eV);e&&(eL(t=>t.topic&&t.topic!==ez.topic?t:{...t,topic:e}),eQ(!0))},[eV,ez.topic]),(0,a.useEffect)(()=>{let e=eU.current;if(!e||"u"<typeof IntersectionObserver)return void eT.current?.("view");let t=new IntersectionObserver(e=>{e.some(e=>e.isIntersecting)&&(eT.current?.("view"),t.disconnect())});return t.observe(e),()=>t.disconnect()},[]);let e0=(0,a.useCallback)(()=>{eH(null),eG(e=>e+1)},[]),e1=(0,a.useCallback)(e=>eH({payload:e,at:Date.now()}),[]),e2=(e,t)=>{eL(a=>({...a,[e]:t})),eB(t=>{if(!t[e])return t;let{[e]:a,...i}=t;return i})},e4=(e,t)=>eL(a=>({...a,details:{...a.details,[e]:t}})),e6=eV.includes(eS.topic)?y.i[eS.topic]:null,e5=e=>{let t=eb.find(t=>e[t]);if(!t)return;let a=eM.current?.querySelector(`[data-field="${t}"]`);a?.focus()},e7=async e=>{var t;let a,i,n,o,r,l;if(e.preventDefault(),"submitting"===eD)return;eW(null);let s=(t={...eS,locale:ew,sourcePath:eI,token:eq,altcha:eK?.payload??"",website:eA},i=(a=t).details&&"object"==typeof a.details?a.details:{},n=(0,b.Y)(a.topic,40),o=(0,y.g)(n)?y.i[n].details:[],r={},(l=(e,t)=>{o.includes(e)&&t&&(r[e]=t)})("material",(0,b.Y)(i.material,20)),l("materialForm",(0,b.Y)(i.materialForm,30)),l("volume",(0,b.Y)(i.volume,20)),l("application",(0,b.Y)(i.application,200)),l("postalCode",(0,b.a)(i.postalCode,12)),{topic:n,name:(0,b.Y)(a.name,100),company:(0,b.Y)(a.company,150),email:(0,b.U)(a.email,254),phone:(0,b.W)(a.phone,40),message:(0,b.f)(a.message,4e3),details:r,locale:"en"===a.locale?"en":"de",sourcePath:(0,b.Y)(a.sourcePath,200),token:(0,b.Y)(a.token,200),altcha:(0,b.Y)(a.altcha,4e3),website:"string"==typeof a.website?a.website:""}),d=function(e){let{token:t,altcha:a,website:i,...n}=e;return n}(s);eL({topic:d.topic,name:d.name,company:d.company,email:d.email,phone:d.phone,message:d.message,details:d.details});let c=function(e){let t={},a=(e,a)=>{t[e]||(t[e]=a)},i=(e,t,i)=>"string"==typeof t&&t.length<=i||(a(e,"invalid"),!1);Object.keys(e).some(e=>!$.includes(e))&&a("form","invalid"),k(y.p,e.topic)||a("topic","required");let n=e.name;"string"==typeof n&&n.length<1?a("name","required"):i("name",n,100),i("company",e.company,150);let o=e.email;"string"==typeof o&&o.length<1?a("email","required"):i("email",o,254)&&!C.test(o)&&a("email","invalid");let r=e.phone;i("phone",r,40)&&!(""===r||r.replace(/\D/g,"").length>=6)&&a("phone","invalid"),i("message",e.message,4e3);let l=function(e,t){if(!(0,y.g)(e)||!v.includes(e)||"string"!=typeof t)return null;let a=t.trim().length;return 0===a?"required":a<10?"tooShort":null}(e.topic,e.message);l&&a("message",l);let s=e.details;if(!s||"object"!=typeof s||Array.isArray(s))a("details","invalid");else{Object.keys(s).some(e=>!j.includes(e))&&a("details","invalid");let e=e=>{let t=s[e]??"";return"string"==typeof t&&""===t?void 0:t},t=(t,i)=>{let n=e(t);void 0===n||k(i,n)||a(`details.${t}`,"invalid")},n=(t,a)=>{let n=e(t);void 0!==n&&i(`details.${t}`,n,a)};t("material",y.C),t("materialForm",y.h),t("volume",y.O),n("application",200),n("postalCode",12)}k(["de","en"],e.locale)||a("locale","invalid");let d=e.sourcePath;return i("sourcePath",d,200)&&""!==d&&!w.test(d)&&a("sourcePath","invalid"),0===Object.keys(t).length?{ok:!0}:{ok:!1,errors:t}}(d);if(!c.ok){eB(c.errors),e5(c.errors);return}if(eB({}),!eK||Date.now()-eK.at>48e4){eK&&e0(),eW("altcha_pending");return}let p=eq||await eJ();eY("submitting"),eT.current?.("submit");try{let e=await fetch("/api/contact-requests/",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify({...s,token:p})});if(e.ok){eY("success"),eL(ez),eT.current?.("success");return}let t=await e.json().catch(()=>({}));eT.current?.("error"),e0(),eY("idle"),429===e.status?eW("rate_limited"):"unavailable"===t.error?eW("unavailable"):"token_expired"===t.error||"token_invalid"===t.error?(await eJ(),eW("token_expired")):"altcha_failed"===t.error?eW("altcha_failed"):"validation"===t.error&&t.fields?(eB(t.fields),eW("validation"),e5(t.fields)):eW("unknown")}catch{eT.current?.("error"),e0(),eY("idle"),eW("network")}},e3={rate_limited:eF("contact.form.error.rateLimited",{defaultValue:"Zu viele Anfragen in kurzer Zeit. Bitte versuchen Sie es später erneut."}),token_expired:eF("contact.form.error.tokenExpired",{defaultValue:"Das Formular war zu lange geöffnet. Bitte senden Sie es erneut."}),altcha_failed:eF("contact.form.error.altchaFailed",{defaultValue:"Die Sicherheitsprüfung ist abgelaufen. Sie wird erneuert — bitte senden Sie erneut."}),altcha_pending:eF("contact.form.error.altchaPending",{defaultValue:"Die Sicherheitsprüfung läuft noch. Bitte senden Sie in einem Moment erneut."}),validation:eF("contact.form.error.validation",{defaultValue:"Bitte prüfen Sie die markierten Felder."}),network:eF("contact.form.error.network",{defaultValue:"Keine Verbindung. Bitte prüfen Sie Ihre Internetverbindung."}),unavailable:eF("contact.form.error.unavailable",{defaultValue:"Die Anfrage konnte gerade nicht übermittelt werden. Bitte versuchen Sie es später erneut."}),unknown:eF("contact.form.error.unknown",{defaultValue:"Die Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es erneut."})},e9={regrind:eF("contact.materialForm.regrind",{defaultValue:y.W.materialForm.regrind}),regranulate:eF("contact.materialForm.regranulate",{defaultValue:y.W.materialForm.regranulate}),bales:eF("contact.materialForm.bales",{defaultValue:y.W.materialForm.bales}),production_waste:eF("contact.materialForm.production_waste",{defaultValue:y.W.materialForm.production_waste}),post_consumer:eF("contact.materialForm.post_consumer",{defaultValue:y.W.materialForm.post_consumer}),other:eF("contact.materialForm.other",{defaultValue:y.W.materialForm.other})},e8={lt1:eF("contact.volume.lt1",{defaultValue:y.W.volume.lt1}),"1to10":eF("contact.volume.1to10",{defaultValue:y.W.volume["1to10"]}),"10to50":eF("contact.volume.10to50",{defaultValue:y.W.volume["10to50"]}),"50to200":eF("contact.volume.50to200",{defaultValue:y.W.volume["50to200"]}),gt200:eF("contact.volume.gt200",{defaultValue:y.W.volume.gt200})},te=v.includes(eS.topic),tt=(0,t.jsx)(G,{children:eF("contact.form.optional",{defaultValue:"(optional)"})}),ta=(0,t.jsx)(Z,{"aria-hidden":"true",children:"*"}),ti=eF("contact.form.select",{defaultValue:"Bitte wählen"}),tn=e=>({id:`${eN}-${e}`,"data-field":e,"data-testid":`${ek}-${e}`,"aria-invalid":eE[e]?"true":void 0,"aria-describedby":eE[e]?`${eN}-${e}-error`:void 0}),to=e=>eE[e]?(0,t.jsx)(en,{id:`${eN}-${e}-error`,"data-testid":`${ek}-${e}-error`,"data-error":eE[e],children:(e=>{if(e)return"required"===e?eF("contact.form.error.required",{defaultValue:"Bitte ausfüllen."}):"tooShort"===e?eF("contact.form.error.tooShort",{defaultValue:"Mindestens 10 Zeichen."}):eF("contact.form.error.invalid",{defaultValue:"Bitte prüfen Sie die Eingabe."})})(eE[e])}):null,tr=!!(J&&(J.phone||J.email||J.address||J.hours)),tl=!!(tr||J?.contact);return(0,t.jsxs)(N,{ref:eU,"data-testid":ek,"data-status":eD,"data-topic":eS.topic||void 0,"data-preselected":eX?"true":"false","data-error":eO??void 0,"data-token":eq?"ready":"pending","data-altcha":eK?"solved":"pending",children:[(0,t.jsx)(M,{children:"success"===eD?(0,t.jsxs)(ec,{role:"status","data-testid":`${ek}-success`,children:[(0,t.jsx)(ep,{"aria-hidden":"true",children:(0,t.jsx)(c.f,{})}),(0,t.jsx)(T,{children:I??eF("contact.form.successTitle",{defaultValue:"Vielen Dank für Ihre Anfrage!"})}),(0,t.jsx)(V,{children:D??eF("contact.form.successText",{defaultValue:"Wir haben Ihre Nachricht erhalten und melden uns in der Regel innerhalb von zwei Werktagen."})}),(0,t.jsx)(o.f,{modifier:r.j.SECONDARY,onClick:()=>{eY("idle"),e0(),eJ()},dataTestId:`${ek}-again`,children:eF("contact.form.again",{defaultValue:"Weitere Anfrage senden"})})]}):(0,t.jsxs)(t.Fragment,{children:[(i||_)&&(0,t.jsxs)(U,{children:[i&&(0,t.jsx)(T,{children:i}),_&&(0,t.jsx)(V,{children:_})]}),(0,t.jsxs)(z,{ref:eM,noValidate:!0,onSubmit:e7,"data-testid":`${ek}-form`,children:[(0,t.jsxs)(S,{role:"radiogroup","aria-required":"true","aria-invalid":eE.topic?"true":void 0,"aria-describedby":eE.topic?`${eN}-topic-error`:void 0,"data-testid":`${ek}-topics`,children:[(0,t.jsxs)(L,{children:[(0,t.jsx)(A,{"aria-hidden":"true",children:"1"}),(0,t.jsxs)("span",{children:[eF("contact.form.topicLegend",{defaultValue:"Worum geht es?"}),ta]})]}),(0,t.jsx)(R,{"data-testid":`${ek}-topic-grid`,"data-count":eV.length,children:eV.map((e,a)=>{let i=y.i[e],n=eS.topic===e;return(0,t.jsxs)(E,{"data-selected":n?"true":"false","data-testid":`${ek}-topic-${e}`,children:[(0,t.jsx)("input",{type:"radio",name:`${eN}-topic`,value:e,checked:n,onChange:()=>e2("topic",e),"data-field":0===a?"topic":void 0}),(0,t.jsx)(s.c,{name:i.icon,tone:n?"green":"blue"}),(0,t.jsx)(B,{children:eF(i.labelKey,{defaultValue:i.labelDefault})}),(0,t.jsx)(O,{children:eF(i.hintKey,{defaultValue:i.hintDefault})}),(0,t.jsx)(W,{"aria-hidden":"true",children:(0,t.jsx)(c.f,{})})]},e)})}),to("topic"),e6&&e6.details.length>0&&(0,t.jsx)(Y,{"data-testid":`${ek}-details`,children:(0,t.jsxs)(q,{children:[e6.details.includes("material")&&(0,t.jsxs)(P,{children:[(0,t.jsxs)(K,{htmlFor:`${eN}-material`,children:[eF("contact.form.material",{defaultValue:"Kunststoff"}),tt]}),(0,t.jsxs)(Q,{id:`${eN}-material`,value:eS.details.material??"",onChange:e=>e4("material",e.target.value),"data-testid":`${ek}-material`,children:[(0,t.jsx)("option",{value:"",children:ti}),y.C.map(e=>(0,t.jsx)("option",{value:e,children:"mixed"===e?eF("contact.material.mixed",{defaultValue:y.W.material.mixed}):"other"===e?eF("contact.material.other",{defaultValue:y.W.material.other}):e},e))]})]}),e6.details.includes("materialForm")&&(0,t.jsxs)(P,{children:[(0,t.jsxs)(K,{htmlFor:`${eN}-materialForm`,children:[eF("contact.form.materialForm",{defaultValue:"Form"}),tt]}),(0,t.jsxs)(Q,{id:`${eN}-materialForm`,value:eS.details.materialForm??"",onChange:e=>e4("materialForm",e.target.value),"data-testid":`${ek}-materialForm`,children:[(0,t.jsx)("option",{value:"",children:ti}),y.h.map(e=>(0,t.jsx)("option",{value:e,children:e9[e]},e))]})]}),e6.details.includes("volume")&&(0,t.jsxs)(P,{$wide:!0,role:"radiogroup","aria-labelledby":`${eN}-volume-label`,children:[(0,t.jsxs)(H,{id:`${eN}-volume-label`,children:[eF("contact.form.volume",{defaultValue:"Menge pro Monat"}),tt]}),(0,t.jsx)(ea,{"data-testid":`${ek}-volume`,children:y.O.map(e=>(0,t.jsxs)(ei,{"data-selected":eS.details.volume===e?"true":"false","data-testid":`${ek}-volume-${e}`,children:[(0,t.jsx)("input",{type:"radio",name:`${eN}-volume`,value:e,checked:eS.details.volume===e,onChange:()=>e4("volume",e)}),e8[e]]},e))})]}),e6.details.includes("application")&&(0,t.jsxs)(P,{$wide:!0,children:[(0,t.jsxs)(K,{htmlFor:`${eN}-application`,children:[eF("contact.form.application",{defaultValue:"Anwendung / Einsatzzweck"}),tt]}),(0,t.jsx)(X,{id:`${eN}-application`,value:eS.details.application??"",maxLength:200,onChange:e=>e4("application",e.target.value),"data-testid":`${ek}-application`})]}),e6.details.includes("postalCode")&&(0,t.jsxs)(P,{children:[(0,t.jsxs)(K,{htmlFor:`${eN}-postalCode`,children:[eF("contact.form.postalCode",{defaultValue:"PLZ des Standorts"}),tt]}),(0,t.jsx)(X,{id:`${eN}-postalCode`,value:eS.details.postalCode??"",maxLength:12,autoComplete:"postal-code",inputMode:"text",onChange:e=>e4("postalCode",e.target.value),"data-testid":`${ek}-postalCode`})]})]})},e6.key)]}),(0,t.jsxs)(S,{children:[(0,t.jsxs)(L,{children:[(0,t.jsx)(A,{"aria-hidden":"true",children:"2"}),(0,t.jsx)("span",{children:eF("contact.form.contactLegend",{defaultValue:"Ihre Kontaktdaten"})})]}),(0,t.jsxs)(q,{children:[(0,t.jsxs)(P,{children:[(0,t.jsxs)(K,{htmlFor:`${eN}-name`,children:[eF("contact.form.name",{defaultValue:"Name"}),ta]}),(0,t.jsx)(X,{...tn("name"),value:eS.name,maxLength:100,autoComplete:"name",required:!0,onChange:e=>e2("name",e.target.value)}),to("name")]}),(0,t.jsxs)(P,{children:[(0,t.jsxs)(K,{htmlFor:`${eN}-email`,children:[eF("contact.form.email",{defaultValue:"E-Mail"}),ta]}),(0,t.jsx)(X,{...tn("email"),type:"email",value:eS.email,maxLength:254,autoComplete:"email",inputMode:"email",required:!0,onChange:e=>e2("email",e.target.value)}),to("email")]}),(0,t.jsxs)(P,{children:[(0,t.jsxs)(K,{htmlFor:`${eN}-company`,children:[eF("contact.form.company",{defaultValue:"Firma"}),tt]}),(0,t.jsx)(X,{...tn("company"),value:eS.company,maxLength:150,autoComplete:"organization",onChange:e=>e2("company",e.target.value)}),to("company")]}),(0,t.jsxs)(P,{children:[(0,t.jsxs)(K,{htmlFor:`${eN}-phone`,children:[eF("contact.form.phone",{defaultValue:"Telefon"}),tt]}),(0,t.jsx)(X,{...tn("phone"),type:"tel",value:eS.phone,maxLength:40,autoComplete:"tel",inputMode:"tel",onChange:e=>e2("phone",e.target.value)}),to("phone")]}),(0,t.jsxs)(P,{$wide:!0,children:[(0,t.jsxs)(K,{htmlFor:`${eN}-message`,children:[eF("contact.form.message",{defaultValue:"Ihre Nachricht"}),te?ta:tt]}),(0,t.jsx)(ee,{...tn("message"),"aria-required":te?"true":void 0,value:eS.message,maxLength:4e3,onChange:e=>e2("message",e.target.value)}),(0,t.jsxs)(et,{"aria-live":"polite","data-testid":`${ek}-message-count`,children:[eS.message.length," / ",4e3]}),to("message")]})]})]}),(0,t.jsxs)(eo,{"aria-hidden":"true",children:[(0,t.jsx)("label",{htmlFor:`${eN}-website`,children:"Website"}),(0,t.jsx)("input",{id:`${eN}-website`,name:"website",type:"text",tabIndex:-1,autoComplete:"off",value:eA,onChange:e=>eR(e.target.value),"data-testid":`${ek}-trap`})]}),(0,t.jsxs)(er,{children:[eO&&(0,t.jsx)(ed,{role:"alert","data-testid":`${ek}-error`,"data-error":eO,children:e3[eO]}),(0,t.jsx)(l.f,{challengeUrl:"/api/contact-requests/challenge/",auto:"onfocus",startImmediately:eZ>0,onSolved:e1,dataTestId:`${ek}-altcha`},eZ),(0,t.jsxs)(el,{children:[(0,t.jsxs)(es,{children:[eF("contact.form.privacy",{defaultValue:"Wir verwenden Ihre Angaben nur, um Ihre Anfrage zu beantworten."})," ",(0,t.jsx)("a",{href:F,"data-testid":`${ek}-privacy`,children:eF("contact.form.privacyLink",{defaultValue:"Datenschutzerklärung"})})]}),(0,t.jsx)(o.f,{buttonType:r.O.SUBMIT,modifier:r.j.PRIMARY,loading:"submitting"===eD,icon:(0,t.jsx)(d.f,{}),iconAlign:r.W.RIGHT,dataTestId:`${ek}-submit`,children:eF("contact.form.submit",{defaultValue:"Anfrage senden"})})]})]})]})]})}),tl&&J&&(0,t.jsxs)(em,{"data-testid":`${ek}-aside-column`,children:[J.contact&&(0,t.jsx)(eg,{"data-testid":`${ek}-aside-contact`,children:J.contact}),tr&&(0,t.jsxs)(eu,{"data-testid":`${ek}-aside`,children:[J.title&&(0,t.jsx)(eh,{children:J.title}),(0,t.jsxs)(ef,{children:[J.phone&&(0,t.jsxs)(ex,{children:[(0,t.jsx)(h.f,{}),(0,t.jsx)(u.f,{kind:"tel",value:J.phone,place:"contactForm",dataTestId:`${ek}-aside-phone`})]}),J.email&&(0,t.jsxs)(ex,{children:[(0,t.jsx)(p.f,{}),(0,t.jsx)(u.f,{kind:"mail",value:J.email,place:"contactForm",dataTestId:`${ek}-aside-email`})]}),J.address&&(0,t.jsxs)(ex,{"data-testid":`${ek}-aside-address`,children:[(0,t.jsx)(m.f,{}),(0,t.jsx)(u.f,{kind:"map",value:J.address,place:"contactForm",dataTestId:`${ek}-aside-address-link`})]}),J.hours&&(0,t.jsxs)(ex,{"data-testid":`${ek}-aside-hours`,children:[(0,t.jsx)(f.f,{}),(0,t.jsx)("span",{children:J.hours})]})]})]})]})]})}e.i(586531);var ew=e.i(682194),eC=e.i(197908),e$=e.i(507924),ej=e.i(755010);let ek=i.U.div.withConfig({displayName:"ContactFormBlock__Kachel",componentId:"sc-2e246f30-0"})`
  width: 100%;
`;e.s(["ContactFormBlock",0,({block:e,locale:i,dataTestId:n})=>{let o=e.props,r=e=>e?(0,e$.u)(e,i):void 0,l=(0,ej.l)("contactMember"),s=(0,ej.l)("contactForm"),d=(0,a.useCallback)(e=>{"mouse"===e.pointerType&&l("hover")},[l]),c=(0,a.useCallback)(e=>{e.target?.closest("a, button")&&l("cta")},[l]),p=o.contact,m=p?(0,t.jsx)(ej.A,{element:"contactMember",fallback:null,children:(0,t.jsx)(ek,{onPointerEnter:d,onClick:c,children:(0,t.jsx)(ew.f,{name:p.name,jobTitle:(0,e$.u)(p.jobTitle,i),photoUrl:(0,eC.J)(p.photoUrl),phone:(0,eC.J)(p.phone),email:(0,eC.J)(p.email),dataTestId:`${n}-contact-member`})})}):void 0;return(0,t.jsx)(ev,{topics:o.topics,defaultTopic:o.defaultTopic,defaultMaterial:o.defaultMaterial,onReport:s,headline:r(o.headline),description:r(o.description),privacyHref:(0,eC.J)(o.privacyHref),successTitle:r(o.successTitle),successText:r(o.successText),aside:{title:r(o.asideTitle),phone:(0,eC.J)(o.phone),email:(0,eC.J)(o.email),address:r(o.address),hours:r(o.hours),contact:m},locale:"en"===i?"en":"de",dataTestId:`${n}-contact-form`})}],817246)},666629,e=>{e.s(["f",0,function(e,t){let a=window.URL.createObjectURL(e),i=document.createElement("a");i.href=a,i.download=t,document.body.appendChild(i),i.click(),window.URL.revokeObjectURL(a),document.body.removeChild(i)}])},429147,e=>{let t=/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F-\u009F]/g,a=/[\u00AD\u180E\u200B-\u200F\u202A-\u202E\u2060-\u206F\uFEFF\uFFF9-\uFFFB]|\uDB40[\uDC00-\uDC7F]/g,i=/<\/?[a-z!?][^<>]*>/gi,n=/[<>]/g,o=(e,t)=>e.slice(0,2*t+64);function r(e){let t=e.length;for(;t>0&&(" "===e[t-1]||" "===e[t-1]);)t--;return e.slice(0,t)}let l=e=>e.normalize("NFKC").replace(/\r\n?/g,"\n").replace(t,"").replace(a,"").replace(i,"").replace(n,""),s=/^[=+\-@\s]+/;function d(e,t){return"string"!=typeof e?"":l(o(e,t)).replace(/\s+/g," ").trim().replace(s,"").slice(0,t)}e.s(["U",0,function(e,t){return"string"!=typeof e?"":l(o(e,t)).replace(/\s/g,"").toLowerCase().slice(0,t)},"Y",0,d,"f",0,function(e,t){return"string"!=typeof e?"":l(o(e,t)).replace(/\t/g," ").split("\n").map(r).join("\n").replace(/[ \u00A0]{2,}/g," ").replace(/\n{3,}/g,"\n\n").trim().replace(s,"").slice(0,t)},"W",0,function(e,t){return"string"!=typeof e?"":l(o(e,t)).slice(0,t).replace(/[^\d+()/\- ]/g,"").replace(/\s+/g," ").replace(/^[-\s]+/,"").trim()},"a",0,function(e,t){return d(e,t).replace(/[^\p{L}\p{N} -]/gu,"").trim().toUpperCase()}])}],567553,function(e){e.n(e.i(817246))}]);