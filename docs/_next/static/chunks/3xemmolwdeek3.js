(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,[538594,e=>{var t=e.i(843476),i=e.i(997053);let a=i.U.svg.withConfig({displayName:"IconDownload.styles__Root",componentId:"sc-985edd3b-0"})``;e.s(["f",0,e=>(0,t.jsx)(a,{className:e.className,"data-testid":"icon-download-root",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("path",{d:"M8.01562 15.784H5.21429C3.43908 15.784 2 14.5585 2 12.7614C2 10.9644 3.43908 9.50762 5.21429 9.50762C5.335 9.50762 5.45417 9.51436 5.57143 9.52748V9.50762H5.61564C5.58646 9.27074 5.57143 9.02942 5.57143 8.78455C5.57143 5.58983 8.1298 3 11.2857 3C13.4228 3 15.2859 4.1876 16.2661 5.94642C16.5056 5.91075 16.7507 5.89227 17 5.89227C19.7614 5.89227 22 8.15838 22 10.9538C22 13.5036 20.1374 15.3819 17.7143 15.7328H15.125M11.6429 9.86915V21M11.6429 21L9.10937 18.5008M11.6429 21L14.1094 18.5008",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})],538594)},481804,e=>{let t=e.i(538594).f;e.s(["f",0,t])},586531,682194,e=>{var t=e.i(843476),i=e.i(271645),a=e.i(325164);e.i(710788);var n=e.i(599858);e.i(352162);var o=e.i(808847),r=e.i(791777),s=e.i(468864);e.i(407030);var l=e.i(382445);e.i(311046);var d=e.i(355351),c=e.i(356127),p=e.i(627430),h=e.i(650529),m=e.i(587076),u=e.i(481804);e.i(821194);var f=e.i(99222),g=e.i(666629),x=e.i(891567);let y={name:x.Y.name,street:x.Y.street,postalCode:x.Y.postalCode,city:x.Y.locality,country:"Germany",url:"https://plastship.com"};function w(e){return e.replace(/\\/g,"\\\\").replace(/,/g,"\\,").replace(/;/g,"\\;").replace(/\r\n|\r|\n/g,"\\n")}function b(e){let t=0;for(let i of e){let e=i.codePointAt(0)??0;t+=e<128?1:e<2048?2:e<65536?3:4}return t}function v(e){if(75>=b(e))return e;let t=[],i="",a=0,n=75;for(let o of e){let e=b(o);a+e>n&&(t.push(i),i="",a=0,n=74),i+=o,a+=e}return t.push(i),t.join(`\r
 `)}let $={ä:"ae",ö:"oe",ü:"ue",Ä:"Ae",Ö:"Oe",Ü:"Ue",ß:"ss"};var C=e.i(997053),j=e.i(706994);let M=C.U.article.withConfig({displayName:"TeamMemberCard.styles__Root",componentId:"sc-2c9d3046-0"})`
  /* #2242: Kantenlänge der Kacheln (Bandgitter) — Maß der Namensplakette */
  --tile: ${({$tile:e})=>e}px;
  position: relative;
  display: flex;
  flex-direction: column;
  /* globals.css gibt jedem article die Seitenfarbe; auf getönten Bändern
     stand die Karte sonst als weißes Rechteck hinter der Wabe */
  background: transparent;
  color: ${({theme:e})=>e.palette.site.text};
`,k=C.U.div.withConfig({displayName:"TeamMemberCard.styles__Photo",componentId:"sc-2c9d3046-1"})`
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
`,T=C.U.span.withConfig({displayName:"TeamMemberCard.styles__Initials",componentId:"sc-2c9d3046-2"})`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${({theme:e})=>e.font.primaryFamily};
  font-size: 40px;
  font-weight: 700;
  color: ${({theme:e})=>e.palette.site.blue};
`,_=C.U.div.withConfig({displayName:"TeamMemberCard.styles__TileLayer",componentId:"sc-2c9d3046-3"})`
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
`,I=C.q`
  0%, 100% { fill-opacity: 1; }
  50% { fill-opacity: ${1-2*h.H}; }
`,N=(0,C.U)(j.f).withConfig({displayName:"TeamMemberCard.styles__Tiles",componentId:"sc-2c9d3046-4"})`
  pointer-events: none;

  /* #1415/#1433: Hover gibt mehr Foto frei — die Deckung blendet weich */
  && path[data-full='true'],
  && path[data-rounded='true'] {
    transition: opacity 0.7s cubic-bezier(0.33, 1, 0.68, 1);
  }

  && [data-partial='true'] {
    animation-name: ${I};
  }

  @media (prefers-reduced-motion: reduce) {
    && path[data-full='true'],
    && path[data-rounded='true'] {
      transition: none;
      animation: none;
    }
  }
`,U=C.U.div.withConfig({displayName:"TeamMemberCard.styles__Body",componentId:"sc-2c9d3046-5"})`
  position: relative;
  z-index: 2;
  margin-top: calc(-${1} * var(--tile, ${d.E}px));
  padding: 0 20px 8px;
  font-family: ${({theme:e})=>e.font.secondaryFamily};
  font-size: 16px;
  line-height: 24px;
  overflow-wrap: break-word;
`,R=C.U.h3.withConfig({displayName:"TeamMemberCard.styles__Name",componentId:"sc-2c9d3046-6"})`
  margin: 0 0 4px;
  font-family: ${({theme:e})=>e.font.secondaryFamily};
  font-size: 20px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0;
  text-transform: none;
  color: ${({theme:e})=>e.palette.site.heading};
`,B=C.U.p.withConfig({displayName:"TeamMemberCard.styles__Role",componentId:"sc-2c9d3046-7"})`
  margin: 0 0 4px;
  color: ${({theme:e})=>e.palette.site.text};
`,O=C.U.div.withConfig({displayName:"TeamMemberCard.styles__Phone",componentId:"sc-2c9d3046-8"})`
  color: ${({theme:e})=>e.palette.site.muted};

  a {
    color: inherit;
    text-decoration: none;
  }

  a:hover,
  a:focus-visible {
    text-decoration: underline;
  }
`,L=C.U.div.withConfig({displayName:"TeamMemberCard.styles__Email",componentId:"sc-2c9d3046-9"})`
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
`,z=C.U.button.withConfig({displayName:"TeamMemberCard.styles__VCardButton",componentId:"sc-2c9d3046-10"})`
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
`,E=C.U.span.withConfig({displayName:"TeamMemberCard.styles__VCardIcon",componentId:"sc-2c9d3046-11"})`
  display: inline-flex;
  flex: none;

  svg {
    width: 18px;
    height: 18px;
  }
`,A=C.U.span.withConfig({displayName:"TeamMemberCard.styles__VCardLabel",componentId:"sc-2c9d3046-12"})``;e.i(411206);var F=e.i(173972);e.i(635647);let K=[1,.5],S=K.length,V=[200,400],Y=[.5,.25],D=2/Math.sqrt(3),P=(e,t)=>`${e}:${t}`,G=({row:e,col:t})=>{let i=Math.abs(e)%2==1,a=i?t-1:t,n=i?t:t+1;return[P(e,t-1),P(e,t+1),P(e-1,a),P(e-1,n),P(e+1,a),P(e+1,n)]},H=(e,t,i)=>{let a=new Map(e.map(e=>[P(e.row,e.col),e])),n=new Map,o=e.filter(t);o.forEach(e=>n.set(e.key,0));for(let e=1;e<=i&&o.length>0;e+=1){let t=[];for(let i of o)for(let o of G(i)){let i=a.get(o);!i||n.has(i.key)||(n.set(i.key,e),t.push(i))}o=t}return n},W=(e,t,i)=>i&&i.width>0?i.columns?i.width/i.columns:(0,c.l)(i.width).size:t>0?e/t:0;function q(e,t,i,a,n=1,r){let s,l,p=W(e,i,r);if(e<=0||t<=0||p<=0)return[];let m=e*D,u=function(e,t,i,a,n){if(e<=0||t<=0)return[];if(!n)return i<=0?[]:(0,d.g)(e,t,i,{left:-a,top:-a,right:e+a,bottom:t+a});if(n.width<=0||n.height<=0)return[];let o=n.columns??(0,c.l)(n.width).columns,{offsetX:r,offsetY:s}=n;return(0,d.g)(n.width,n.height,o,{left:r-a,top:s-a,right:r+e+a,bottom:s+t+a}).map(e=>({...e,x:e.x-r,y:e.y-s,cx:e.cx-r,cy:e.cy-s}))}(e,m,i,(n+K.length+1)*p,r),f=(l=Math.min(2*(s=e/2)/Math.sqrt(3),m/2),{cx:e/2,cy:m/2,a:s,b:l}),g=H(u,e=>1>=(({cx:e,cy:t,a:i,b:a},n,o)=>{if(i<=0||a<=0)return 1/0;let r=Math.abs(n-e)/i;return Math.max(r,Math.abs(o-t)/a+r/2)})(f,e.cx,e.cy),1/0),x=H(u,e=>(g.get(e.key)??1/0)>n,K.length),y=(0,h.n)(.35),w=u.filter(t=>t.x>=0&&t.y>=0&&t.x+t.size<=e&&t.y+t.size<=m),b=(0,o.A)(w,e=>a.some(t=>(0,d.D)(e,t)),K);return w.map(e=>{let t=x.get(e.key),i=(1-(void 0===t?0:(0,h.U)(e,t,K,y)))*(1-(b.get(e.key)??0));return{key:e.key,row:e.row,col:e.col,x:e.x,y:e.y,size:e.size,ring:g.get(e.key)??1/0,edge:t??1/0,alpha:i>.005?Math.round(1e3*i)/1e3:0}})}function J(e,t,i,a,n=!0,o=e.map(e=>e.ring??0)){let r=e.flatMap((e,i)=>Math.abs(e.alpha-(t[i]?.alpha??e.alpha))>.005?[o[i]]:[]).filter(Number.isFinite),s=r.length>0?Math.min(...r):0,l=r.length>0?Math.max(...r):0;return e.map((e,r)=>{let d=t[r]??e,{ring:c,edge:h,...m}="hover"===i?d:e;if(!n||.005>=Math.abs(e.alpha-d.alpha))return m;let u=Number.isFinite(o[r])?o[r]:l,[f,g]=V;return{...m,transition:{delay:Math.round(("hover"===i?u-s:l-u)*70+50*(0,p.T)(a,e.row,e.col,2)),duration:Math.round(f+(0,p.T)(a,e.row,e.col,1)*(g-f))}}})}function X(e,t=!1){let i=t?.4:1;return e.map(e=>{let t=(e.edge>=1?Y[e.edge-1]??0:0)*i;return{...e,alpha:t>.005?Math.round(1e3*t)/1e3:0}})}e.s(["f",0,e=>{let{name:o,jobTitle:c,photoUrl:h,phone:x,email:b,className:C,dataTestId:j="team-member-card",lattice:I}=e,K=(0,i.useRef)(null),V=(0,i.useRef)(null),Y=(0,s.f)(V,(0,l.J)()??void 0),P=(0,i.useMemo)(()=>I??(Y.width>0&&Y.height>0?Y:void 0),[I,Y]),G=(0,i.useRef)(null),{stage:H,rects:Z}=(0,r.Z)(K,G,"active",12),Q=H?.width??0,ee=H?.height??0,et=Q>0?(0,d.L)(Q):0,ei=W(Q,et,P)||d.E,ea=`team-photo-${(0,i.useId)().replace(/:/g,"")}`,[en,eo]=(0,i.useState)(!1),[er,es]=(0,i.useState)(!1),el=en||er,ed=(0,m.f)(),ec=(0,i.useMemo)(()=>(0,p.Z)(`team:${o}`),[o]),ep=(0,i.useCallback)(()=>{("function"!=typeof window.matchMedia||window.matchMedia("(hover: hover) and (pointer: fine)").matches)&&eo(!0)},[]),[eh,em]=(0,i.useState)(null),eu=h&&eh?.url===h?eh.src:null,ef=(0,i.useMemo)(()=>h?q(Q,ee,et,Z,1,P):[],[h,Q,ee,et,Z,P]),eg=(0,i.useMemo)(()=>h?q(Q,ee,et,Z,2,P):[],[h,Q,ee,et,Z,P]),ex=el?"hover":"rest",ey=!ed,ew=(0,i.useMemo)(()=>J(ef,eg,ex,ec,ey),[ef,eg,ex,ec,ey]),eb=(0,i.useMemo)(()=>{let e=ef.map(e=>e.ring);return J(X(ef,!1),X(eg,!0),ex,ec,ey,e)},[ef,eg,ex,ec,ey]),ev=null!==eu&&ew.some(e=>e.alpha>0),{tr:e$}=(0,f.f)(),eC=!!(x?.trim()||b?.trim());return(0,t.jsxs)(M,{className:C,$tile:ei,"data-testid":j,"data-tile":Math.round(100*ei)/100,"data-plaque-overlap":Math.round(100*ei)/100,"data-hovered":el?"true":"false",onMouseEnter:ep,onMouseLeave:()=>eo(!1),onFocus:()=>es(!0),onBlur:e=>{let t=e.relatedTarget;t instanceof Node&&e.currentTarget.contains(t)||es(!1)},"data-hex-stage":"true","data-columns":et||void 0,children:[(0,t.jsx)(k,{ref:V,"data-testid":`${j}-avatar`,"data-has-photo":h?"true":"false","data-masked":ev?"true":"false",children:h?(0,t.jsx)(a.default,{src:h,alt:o,width:616,height:Math.round(616*D),sizes:"(max-width: 639px) calc(100vw - 24px), (max-width: 899px) calc(50vw - 24px), (max-width: 1199px) calc(33.4vw - 24px), calc(25vw - 24px)",onLoad:e=>{let t=e.currentTarget;em({url:h,src:t.currentSrc||t.src})},"data-testid":`${j}-photo`}):(0,t.jsx)(T,{"aria-hidden":"true",children:o.split(/\s+/).filter(Boolean).slice(0,2).map(e=>e[0]?.toUpperCase()??"").join("")})}),(0,t.jsx)(_,{ref:K,"aria-hidden":"true",children:ev&&eu&&(0,t.jsxs)(N,{focusable:"false","data-testid":`${j}-tiles`,"data-tiles":ew.length,"data-rings":el?2:1,"data-edge-rings":S,"data-lattice":P?"band":"own","data-tile-size":ew[0]?Math.round(100*ew[0].size)/100:void 0,"data-motion":ey?"blend":"reduce",style:{"--edge-x":"0px","--edge-y":"0px","--edge-w":`${Q}px`,"--edge-h":`${ee}px`},children:[(0,t.jsxs)("defs",{children:[(0,t.jsx)("mask",{id:ea,maskUnits:"userSpaceOnUse",x:0,y:0,width:Q,height:ee,children:(0,t.jsx)(n.f,{tiles:ew,color:"mask"})}),(0,t.jsx)("filter",{id:`${ea}-blur`,x:"-10%",y:"-10%",width:"120%",height:"120%",children:(0,t.jsx)("feGaussianBlur",{stdDeviation:.04*Q})}),(0,t.jsxs)("linearGradient",{id:`${ea}-fade-grad`,x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,t.jsx)("stop",{offset:"0",stopColor:"#fff",stopOpacity:"0"}),(0,t.jsx)("stop",{offset:.12,stopColor:"#fff",stopOpacity:"1"}),(0,t.jsx)("stop",{offset:.94,stopColor:"#fff",stopOpacity:"1"}),(0,t.jsx)("stop",{offset:"1",stopColor:"#fff",stopOpacity:"0"})]}),(0,t.jsx)("mask",{id:`${ea}-fade`,maskUnits:"userSpaceOnUse",x:0,y:.14*Q,width:Q,height:Q,children:(0,t.jsx)("rect",{x:0,y:.14*Q,width:Q,height:Q,fill:`url(#${ea}-fade-grad)`})})]}),(0,t.jsxs)("g",{mask:`url(#${ea})`,"data-testid":`${j}-masked-photo`,children:[(0,t.jsx)("image",{href:eu,x:-(.15*Q),y:-(.1*Q),width:1.3*Q,height:Q*D+.2*Q,preserveAspectRatio:"xMidYMid slice",filter:`url(#${ea}-blur)`,"data-testid":`${j}-photo-blur`}),(0,t.jsx)("image",{href:eu,x:0,y:.14*Q,width:Q,height:Q,preserveAspectRatio:"xMidYMin slice",mask:`url(#${ea}-fade)`,"data-testid":`${j}-photo-sharp`}),(0,t.jsx)(n.f,{tiles:eb,color:"primary",dataTestId:`${j}-tint`})]})]})}),(0,t.jsxs)(U,{ref:G,"data-testid":`${j}-body`,children:[(0,t.jsx)(R,{"data-testid":`${j}-name`,children:o}),(0,t.jsx)(B,{"data-testid":`${j}-title`,children:c}),x&&(0,t.jsx)(O,{children:(0,t.jsx)(F.f,{kind:"tel",value:x,place:"teamCard",dataTestId:`${j}-phone`})}),b&&(0,t.jsx)(L,{children:(0,t.jsx)(F.f,{kind:"mail",value:b,place:"teamCard",dataTestId:`${j}-email`})}),eC&&(0,t.jsxs)(z,{type:"button",onClick:()=>{let e,t=function(e){let t=e.company??y,i=e.name.trim(),{given:a,family:n}=function(e){let t=e.trim().split(/\s+/).filter(Boolean);if(0===t.length)return{given:"",family:""};let i=t[t.length-1]??"";return{given:t.slice(0,-1).join(" "),family:i}}(i),o=e.jobTitle?.trim(),r=e.phone?.trim(),s=e.email?.trim(),l=["BEGIN:VCARD","VERSION:3.0"];l.push(`N:${w(n)};${w(a)};;;`),l.push(`FN:${w(i)}`),t.name&&l.push(`ORG:${w(t.name)}`),o&&l.push(`TITLE:${w(o)}`),r&&l.push(`TEL;TYPE=WORK,VOICE:${w(r)}`),s&&l.push(`EMAIL;TYPE=INTERNET,WORK:${w(s)}`);let d=["","",t.street,t.city,"",t.postalCode,t.country];return d.some(Boolean)&&l.push(`ADR;TYPE=WORK:${d.map(w).join(";")}`),t.url&&l.push(`URL:${t.url}`),l.push("END:VCARD"),l.map(v).join("\r\n")+"\r\n"}({name:o,jobTitle:c,phone:x,email:b});(0,g.f)(new Blob([t],{type:"text/vcard;charset=utf-8"}),(e=o.replace(/[äöüÄÖÜß]/g,e=>$[e]??e).normalize("NFKD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,""),`${e||"kontakt"}.vcf`))},"aria-label":e$("team.vcard.ariaLabel",{name:o,defaultValue:"Kontakt von {{name}} als vCard speichern"}),"data-testid":`${j}-vcard`,children:[(0,t.jsx)(E,{"aria-hidden":"true",children:(0,t.jsx)(u.f,{})}),(0,t.jsx)(A,{children:e$("team.vcard.download",{defaultValue:"Kontakt speichern"})})]})]})]})}],682194),e.s([],586531)},106668,e=>{var t=e.i(843476),i=e.i(997053);e.i(951693);var a=e.i(659188);e.i(586531);var n=e.i(682194),o=e.i(197908),r=e.i(507924),s=e.i(474704);let l=i.U.div.withConfig({displayName:"TeamBlock__Root",componentId:"sc-17e2f2b1-0"})`
  display: flex;
  flex-direction: column;
  gap: ${s.y.stackGap};
`,d=s.y.gutter,c=i.U.ul.withConfig({displayName:"TeamBlock__Grid",componentId:"sc-17e2f2b1-1"})`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${s.y.stackGap} ${d};
  margin: 0;
  padding: 0;
  list-style: none;
`,p=e=>`calc((100% - ${e-1} * ${d}) / ${e})`,h=i.U.li.withConfig({displayName:"TeamBlock__Item",componentId:"sc-17e2f2b1-2"})`
  min-width: 0;
  flex: 0 0 100%;

  @media (min-width: 640px) {
    flex-basis: ${p(2)};
  }

  @media (min-width: 900px) {
    flex-basis: ${p(3)};
  }

  @media (min-width: 1200px) {
    flex-basis: ${p(4)};
  }
`;e.s(["TeamBlock",0,({block:e,locale:i,dataTestId:s,pageHeading:d})=>{let{headline:p,description:m,members:u}=e.props;return(0,t.jsxs)(l,{"data-testid":`${s}-grid`,"data-columns":4,children:[(0,t.jsx)(a.f,{headline:p?(0,r.u)(p,i):void 0,headingLevel:d?1:2,align:"center",description:m?(0,r.u)(m,i):void 0,dataTestId:`${s}-grid-header`}),(0,t.jsx)(c,{"data-testid":`${s}-grid-list`,"data-count":u.length,children:u.map((e,a)=>(0,t.jsx)(h,{"data-testid":`${s}-grid-item`,children:(0,t.jsx)(n.f,{name:e.name,jobTitle:(0,r.u)(e.jobTitle,i),photoUrl:(0,o.J)(e.photoUrl),phone:(0,o.J)(e.phone),email:(0,o.J)(e.email),dataTestId:`${s}-member-${a}`})},a))})]})}])},666629,e=>{e.s(["f",0,function(e,t){let i=window.URL.createObjectURL(e),a=document.createElement("a");a.href=i,a.download=t,document.body.appendChild(a),a.click(),window.URL.revokeObjectURL(i),document.body.removeChild(a)}])}],452967,function(e){e.n(e.i(106668))}]);