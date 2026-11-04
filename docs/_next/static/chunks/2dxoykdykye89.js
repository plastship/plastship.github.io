(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,[12812,e=>{var a=e.i(843476),t=e.i(271645),i=e.i(997053);let n=i.U.div.withConfig({displayName:"Altcha.styles__Slot",componentId:"sc-8715a897-0"})`
  min-height: ${"calc(1.5rem + 1.5rem + 2px)"};
`,l="altcha-widget",r=["focusin","pointerdown","keydown"];e.s(["f",0,({onSolved:i,resetKey:o,challengeUrl:s="/api/altcha/challenge/",auto:c="onsubmit",startImmediately:d=!1,dataTestId:p="altcha"})=>{let u=(0,t.useRef)(null),m=(0,t.useRef)(null),f="onfocus"===c,[h,g]=(0,t.useState)(null),x=null!==h,y=(0,t.useCallback)(()=>g(e=>e??Math.min(4,Math.max(1,((void 0)??("u"<typeof navigator?void 0:navigator.hardwareConcurrency))||2))),[]);(0,t.useEffect)(()=>{if(x)return;let e=f&&!d?m.current?.closest("form"):null;if(!e)return void y();for(let a of r)e.addEventListener(a,y,{capture:!0});return()=>{for(let a of r)e.removeEventListener(a,y,{capture:!0})}},[x,f,d,y]),(0,t.useEffect)(()=>{x&&e.A(53129)},[x]),(0,t.useEffect)(()=>{let e=u.current;if(!e)return;let a=e=>{let a=e.detail;a?.state==="verified"&&a.payload&&i(a.payload)};return e.addEventListener("statechange",a),()=>{e.removeEventListener("statechange",a)}},[i,o,x]);let b=(0,t.useMemo)(()=>JSON.stringify({hideFooter:!0,hideLogo:!0,...null!==h?{workers:h}:{}}),[h]);return f?(0,a.jsx)(n,{ref:m,"data-testid":`${p}-slot`,"data-started":x?"true":"false",children:x&&(0,a.jsx)(l,{ref:u,challenge:s,configuration:b,auto:"onload","data-testid":p})}):(0,a.jsx)(l,{ref:u,challenge:s,configuration:b,auto:c,"data-testid":p})}],12812)},969101,e=>{e.i(75146),e.s([])},644812,e=>{var a=e.i(843476),t=e.i(271645),i=e.i(618566),n=e.i(653145);e.i(36380);var l=e.i(285393),r=e.i(825969),o=e.i(12812);e.i(411206);var s=e.i(173972);e.i(969101);var c=e.i(75146),d=e.i(499911),p=e.i(898560),u=e.i(317573),m=e.i(813267),f=e.i(874142);e.i(821194);var h=e.i(99222),g=e.i(885895),x=e.i(900490),y=e.i(14431);e.i(311046);var b=e.i(355351),w=e.i(859146),v=e.i(854101),k=e.i(429147);let j=["recyclate_supply","material_flow","material_quality","digital_platforms","market_sales","other"],$={recyclate_supply:{key:"application.area.recyclate_supply",de:"Rezyklatversorgung & Distribution"},material_flow:{key:"application.area.material_flow",de:"Stoffstrommanagement & Werksentsorgung"},material_quality:{key:"application.area.material_quality",de:"Materialqualität & Analytik"},digital_platforms:{key:"application.area.digital_platforms",de:"Digitale Plattformen & Datenlösungen"},market_sales:{key:"application.area.market_sales",de:"Marktverständnis & Vertrieb"},other:{key:"application.area.other",de:"Sonstiges"}},_=["name","email","phone","area","message","profileUrl","consent"],F=/^\/[a-z0-9\-/]*$/i,C=/^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+.-]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9-]*\.)+[A-Za-z]{2,}$/,I=["name","email","phone","area","message","profileUrl","consent","locale","sourcePath"];var V=e.i(997053),T=e.i(345712),U=e.i(474704),A=e.i(547905);let z=V.U.section.withConfig({displayName:"ApplicationForm.styles__Root",componentId:"sc-2ca3a827-0"})`
  display: grid;
  grid-template-columns: repeat(${U.y.columns}, minmax(0, 1fr));
  column-gap: ${U.y.gutter};
  row-gap: ${U.y.stackGap};
  align-items: start;
  color: ${({theme:e})=>e.palette.site.text};
  font-family: ${({theme:e})=>e.font.secondaryFamily};

  > * {
    grid-column: span 8;
  }

  > * + * {
    grid-column: span 4;
  }

  @media only screen and (max-width: ${T.p.tabletlandscape}px) {
    > *,
    > * + * {
      grid-column: 1 / -1;
    }
  }
`,B=V.U.div.withConfig({displayName:"ApplicationForm.styles__Card",componentId:"sc-2ca3a827-1"})`
  box-sizing: border-box;
  min-width: 0;
  padding: ${({theme:e})=>e.margin.large};
  border: 1px solid ${({theme:e})=>e.palette.site.border};
  border-radius: 24px;
  background: ${({theme:e})=>e.palette.site.card};
  box-shadow: ${({theme:e})=>e.palette.site.shadow};

  @media only screen and (max-width: ${T.p.smartphonelandscape}px) {
    padding: ${({theme:e})=>e.padding.default};
  }
`,N=V.U.header.withConfig({displayName:"ApplicationForm.styles__Head",componentId:"sc-2ca3a827-2"})`
  margin-bottom: ${U.y.stackGap};
  /* globals.css gibt jedem header die Seitenfarbe — auf der Karte durchsichtig */
  background: transparent;
`,S=V.U.h2.withConfig({displayName:"ApplicationForm.styles__Headline",componentId:"sc-2ca3a827-3"})`
  margin: 0 0 ${({theme:e})=>e.margin.extrasmall};
  font-family: ${({theme:e})=>e.font.primaryFamily};
  font-size: 32px;
  line-height: 40px;
  font-weight: 700;
  text-transform: uppercase;
  color: ${({theme:e})=>e.palette.site.heading};

  @media only screen and (max-width: ${T.p.smartphonelandscape}px) {
    font-size: 24px;
    line-height: 32px;
  }
`,P=V.U.p.withConfig({displayName:"ApplicationForm.styles__Lead",componentId:"sc-2ca3a827-4"})`
  margin: 0;
  font-size: 16px;
  line-height: 26px;
`,D=V.U.form.withConfig({displayName:"ApplicationForm.styles__Form",componentId:"sc-2ca3a827-5"})`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.margin.default};
`,E=V.U.div.withConfig({displayName:"ApplicationForm.styles__Grid",componentId:"sc-2ca3a827-6"})`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({theme:e})=>e.margin.small} ${({theme:e})=>e.margin.default};

  @media only screen and (max-width: ${T.p.smartphonelandscape}px) {
    grid-template-columns: minmax(0, 1fr);
  }
`,q=V.U.div.withConfig({displayName:"ApplicationForm.styles__Field",componentId:"sc-2ca3a827-7"})`
  display: flex;
  flex-direction: column;
  min-width: 0;
  ${({$wide:e})=>e&&V.m`
      grid-column: 1 / -1;
    `}
`,M=V.U.span.withConfig({displayName:"ApplicationForm.styles__Hint",componentId:"sc-2ca3a827-8"})`
  margin-top: 0.25em;
  font-size: 12px;
  line-height: 16px;
  color: ${({theme:e})=>e.palette.site.muted};
`,R=V.U.div.withConfig({displayName:"ApplicationForm.styles__Consent",componentId:"sc-2ca3a827-9"})`
  display: flex;
  flex-direction: column;
  gap: 0.25em;
  font-size: 14px;
  line-height: 20px;

  && a {
    color: ${({theme:e})=>e.palette.site.blue};
    text-decoration: underline;
  }
`,L=V.U.div.withConfig({displayName:"ApplicationForm.styles__Trap",componentId:"sc-2ca3a827-10"})`
  position: absolute;
  left: -10000px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
`,W=V.U.div.withConfig({displayName:"ApplicationForm.styles__Footer",componentId:"sc-2ca3a827-11"})`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.margin.small};
`,Y=V.U.div.withConfig({displayName:"ApplicationForm.styles__SubmitRow",componentId:"sc-2ca3a827-12"})`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  gap: ${({theme:e})=>e.margin.small};
  /* #2229: Knopf nach der Fläche, auf der er steht (die Karte) */
  ${({$cta:e})=>(0,x.h)(e)}
`,K=V.U.div.withConfig({displayName:"ApplicationForm.styles__Banner",componentId:"sc-2ca3a827-13"})`
  box-sizing: border-box;
  padding: ${({theme:e})=>e.padding.small};
  border-radius: 12px;
  border: 1px solid ${({theme:e})=>e.palette.site.red};
  color: ${({theme:e})=>e.palette.site.heading};
  background: ${({theme:e})=>e.palette.site.card};
  font-size: 14px;
  line-height: 20px;
`,O=V.q`
  from { opacity: 0; transform: translateY(-6px); }
  to { opacity: 1; transform: translateY(0); }
`,H=V.U.div.withConfig({displayName:"ApplicationForm.styles__Success",componentId:"sc-2ca3a827-14"})`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({theme:e})=>e.margin.small};
  animation: ${O} 0.3s ease both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,Z=V.U.span.withConfig({displayName:"ApplicationForm.styles__SuccessIcon",componentId:"sc-2ca3a827-15"})`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  background: ${({theme:e})=>e.palette.site.green};
  color: #ffffff;
  ${A.p}

  svg {
    width: 28px;
    height: 28px;
  }
`,G="#ffffff",J=V.U.div.withConfig({displayName:"ApplicationForm.styles__AsideColumn",componentId:"sc-2ca3a827-16"})`
  position: sticky;
  top: 112px;
  min-width: 0;

  @media only screen and (max-width: ${T.p.tabletlandscape}px) {
    position: static;
  }
`,Q=V.U.div.withConfig({displayName:"ApplicationForm.styles__Wabe",componentId:"sc-2ca3a827-17"})`
  position: relative;
  isolation: isolate;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.margin.default};
  padding: ${({theme:e})=>e.margin.large};
  overflow: hidden;
  border-radius: 24px;
  background: ${({theme:e})=>e.palette.site.navy};
  color: ${G};

  @media only screen and (max-width: ${T.p.smartphonelandscape}px) {
    padding: ${({theme:e})=>e.padding.default};
  }
`,X=V.U.svg.withConfig({displayName:"ApplicationForm.styles__Decor",componentId:"sc-2ca3a827-18"})`
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;
  width: 70%;
  height: auto;
  pointer-events: none;
  color: ${G};
`,ee=V.U.h3.withConfig({displayName:"ApplicationForm.styles__WabeTitle",componentId:"sc-2ca3a827-19"})`
  margin: 0;
  font-family: ${({theme:e})=>e.font.primaryFamily};
  font-size: 20px;
  line-height: 28px;
  font-weight: 700;
  color: ${G};
`,ea=V.U.ol.withConfig({displayName:"ApplicationForm.styles__Benefits",componentId:"sc-2ca3a827-20"})`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.margin.small};
  margin: 0;
  padding: 0;
  list-style: none;
`,et=V.U.li.withConfig({displayName:"ApplicationForm.styles__Benefit",componentId:"sc-2ca3a827-21"})`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.margin.small};
  font-size: 15px;
  line-height: 22px;
`,ei=V.U.span.withConfig({displayName:"ApplicationForm.styles__BenefitHex",componentId:"sc-2ca3a827-22"})`
  display: flex;
  flex: none;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  font-family: ${({theme:e})=>e.font.primaryFamily};
  font-size: 16px;
  font-weight: 700;
  color: ${({theme:e})=>e.palette.site.navy};
  background: ${({theme:e})=>e.palette.site.green};
  ${A.p}
`,en=V.U.hr.withConfig({displayName:"ApplicationForm.styles__Divider",componentId:"sc-2ca3a827-23"})`
  width: 100%;
  margin: 0;
  border: 0;
  border-top: 1px solid color-mix(in srgb, ${G} 25%, transparent);
`,el=V.U.ul.withConfig({displayName:"ApplicationForm.styles__ContactList",componentId:"sc-2ca3a827-24"})`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.margin.small};
  margin: 0;
  padding: 0;
  list-style: none;
`,er=V.U.li.withConfig({displayName:"ApplicationForm.styles__ContactItem",componentId:"sc-2ca3a827-25"})`
  display: flex;
  gap: ${({theme:e})=>e.margin.extrasmall};
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
    color: ${G};
    text-decoration: none;
    overflow-wrap: anywhere;
  }

  && a:hover,
  && a:focus-visible {
    text-decoration: underline;
  }
`,eo={name:"",email:"",phone:"",area:"",message:"",profileUrl:"",consent:!1},es=(0,b.T)(240,160,7).map(e=>{let a=1-Math.hypot((240-e.cx)/240,e.cy/160)/1.2;return{cell:e,alpha:Math.round(.35*Math.max(0,a)*100)/100}}).filter(({alpha:e})=>e>=.04).map(({cell:e,alpha:a})=>({key:e.key,alpha:a,d:(0,w.e)((0,b.F)(e,0,0),(0,w.C)(e.size))}));function ec({headline:e,description:b,privacyHref:w="/privacy/",successTitle:V,successText:T,asideTitle:U,benefits:A,contactTitle:O,address:G,phone:ed,email:ep,locale:eu="de",onReport:em,dataTestId:ef="application-form"}){let{language:eh}=(0,g.N)(),{tr:eg}=(0,h.f)(eh),ex=(0,i.usePathname)()??"",ey=(0,t.useRef)(null),eb=(0,t.useRef)(null),ew=(0,t.useRef)(em);(0,t.useEffect)(()=>{ew.current=em});let{control:ev,handleSubmit:ek,reset:ej,setError:e$,clearErrors:e_}=(0,n.G)({defaultValues:eo}),[eF,eC]=(0,t.useState)(""),[eI,eV]=(0,t.useState)(null),[eT,eU]=(0,t.useState)("idle"),[eA,ez]=(0,t.useState)(""),[eB,eN]=(0,t.useState)(null),[eS,eP]=(0,t.useState)(0),eD=(0,t.useCallback)(async()=>{try{let e=await fetch("/api/contact-requests/token/",{credentials:"same-origin",cache:"no-store"});if(!e.ok)return"";let a=await e.json(),t="string"==typeof a.token?a.token:"";return ez(t),t}catch{return""}},[]);(0,t.useEffect)(()=>{eD()},[eD]),(0,t.useEffect)(()=>{let e=ey.current;if(!e||"u"<typeof IntersectionObserver)return void ew.current?.("view");let a=new IntersectionObserver(e=>{e.some(e=>e.isIntersecting)&&(ew.current?.("view"),a.disconnect())});return a.observe(e),()=>a.disconnect()},[]);let eE=(0,t.useCallback)(()=>{eN(null),eP(e=>e+1)},[]),eq=(0,t.useCallback)(e=>eN({payload:e,at:Date.now()}),[]),eM=(e,a)=>"consent"===e?eg("application.form.error.consent",{defaultValue:"Bitte stimme der Verarbeitung deiner Angaben zu."}):"required"===a?eg("application.form.error.required",{defaultValue:"Bitte ausfüllen."}):"tooShort"===a?eg("application.form.error.tooShort",{defaultValue:"Bitte schreib mindestens {{min}} Zeichen.",min:30}):eg("application.form.error.invalid",{defaultValue:"Bitte prüfe die Eingabe."}),eR=e=>`${ef}-${e}`,eL=e=>{let a=null;for(let t of _){let i=e[t];i&&(a??=t,e$(t,{type:i,message:eM(t,i)}))}if(!a)return;let t=eb.current?.querySelector(`[data-testid="${eR(a)}-root"]`);t?.querySelector("input, textarea, button, [tabindex]")?.focus()},eW=async e=>{var a;let t,i;if("submitting"===eT)return;eV(null),e_();let n=(a={...e,locale:eu,sourcePath:ex,token:eA,altcha:eB?.payload??"",website:eF},t=a,i=(0,k.Y)(t.profileUrl,300).replace(/\s/g,""),{name:(0,k.Y)(t.name,100),email:(0,k.U)(t.email,254),phone:(0,k.W)(t.phone,40),area:(0,k.Y)(t.area,40),message:(0,k.f)(t.message,4e3),profileUrl:i,consent:!0===t.consent,locale:(0,v.s)(t.locale)?t.locale:"de",sourcePath:(0,k.Y)(t.sourcePath,200),token:(0,k.Y)(t.token,200),altcha:(0,k.Y)(t.altcha,4e3),website:"string"==typeof t.website?t.website:""}),l=function(e){let{token:a,altcha:t,website:i,...n}=e;return n}(n);ej({name:l.name,email:l.email,phone:l.phone,area:l.area,message:l.message,profileUrl:l.profileUrl,consent:l.consent},{keepDefaultValues:!0});let r=function(e){let a,t={},i=(e,a)=>{t[e]||(t[e]=a)},n=(e,a,t)=>"string"==typeof a&&a.length<=t||(i(e,"invalid"),!1);Object.keys(e).some(e=>!I.includes(e))&&i("form","invalid");let l=e.name;"string"==typeof l&&l.length<1?i("name","required"):n("name",l,100);let r=e.email;"string"==typeof r&&r.length<1?i("email","required"):n("email",r,254)&&!C.test(r)&&i("email","invalid");let o=e.phone;n("phone",o,40)&&!(""===o||o.replace(/\D/g,"").length>=6)&&i("phone","invalid"),"string"==typeof(a=e.area)&&j.includes(a)||i("area","required"),n("message",e.message,4e3);let s=function(e){if("string"!=typeof e)return null;let a=e.trim().length;return 0===a?"required":a<30?"tooShort":null}(e.message);s&&i("message",s);let c=e.profileUrl;n("profileUrl",c,300)&&!function(e){if(""===e)return!0;if(!/^https?:\/\/[^\s]+$/i.test(e))return!1;try{let a=new URL(e);return("https:"===a.protocol||"http:"===a.protocol)&&a.hostname.includes(".")}catch{return!1}}(c)&&i("profileUrl","invalid"),!0!==e.consent&&i("consent","required"),(0,v.s)(e.locale)||i("locale","invalid");let d=e.sourcePath;return n("sourcePath",d,200)&&""!==d&&!F.test(d)&&i("sourcePath","invalid"),0===Object.keys(t).length?{ok:!0}:{ok:!1,errors:t}}(l);if(!r.ok)return void eL(r.errors);if(!eB||Date.now()-eB.at>48e4){eB&&eE(),eV("altcha_pending");return}let o=eA||await eD();eU("submitting"),ew.current?.("submit");try{let e=await fetch("/api/applications/",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify({...n,token:o})});if(e.ok){eU("success"),ej(eo),ew.current?.("success");return}let a=await e.json().catch(()=>({}));eE(),eU("idle"),ew.current?.("error"),429===e.status?eV("rate_limited"):"unavailable"===a.error?eV("unavailable"):"token_expired"===a.error||"token_invalid"===a.error?(await eD(),eV("token_expired")):"altcha_failed"===a.error?eV("altcha_failed"):"validation"===a.error&&a.fields?(eL(a.fields),eV("validation")):(eV("unknown"),(0,y.T)("application.submit-failed",{level:"warning",tags:{form:"application",grund:"status"},extra:{status:e.status,error:"string"==typeof a.error?a.error:null}}))}catch{eE(),eU("idle"),eV("network"),ew.current?.("error"),(0,y.T)("application.submit-failed",{level:"warning",tags:{form:"application",grund:"network"}})}},eY={rate_limited:eg("application.form.error.rateLimited",{defaultValue:"Zu viele Versuche in kurzer Zeit. Bitte versuch es später noch einmal."}),token_expired:eg("application.form.error.tokenExpired",{defaultValue:"Das Formular war zu lange geöffnet. Bitte sende es noch einmal."}),altcha_failed:eg("application.form.error.altchaFailed",{defaultValue:"Die Sicherheitsprüfung ist abgelaufen. Sie wird erneuert – bitte sende noch einmal."}),altcha_pending:eg("application.form.error.altchaPending",{defaultValue:"Die Sicherheitsprüfung läuft noch. Bitte sende in einem Moment noch einmal."}),validation:eg("application.form.error.validation",{defaultValue:"Bitte prüfe die markierten Felder."}),network:eg("application.form.error.network",{defaultValue:"Keine Verbindung. Bitte prüfe deine Internetverbindung."}),unavailable:eg("application.form.error.unavailable",{defaultValue:"Deine Bewerbung konnte gerade nicht übermittelt werden. Bitte versuch es später noch einmal."}),unknown:eg("application.form.error.unknown",{defaultValue:"Deine Bewerbung konnte nicht gesendet werden. Bitte versuch es noch einmal."})},eK=(0,t.useMemo)(()=>j.map(e=>({value:e,label:eg($[e].key,{defaultValue:$[e].de})})),[eg]),eO=A&&A.some(Boolean)?A.filter(Boolean):[eg("application.aside.benefit1",{defaultValue:"Ein kleines Team, in dem deine Arbeit sichtbar wirkt"}),eg("application.aside.benefit2",{defaultValue:"Kreislaufwirtschaft, die Material, Daten und Markt zusammen denkt"}),eg("application.aside.benefit3",{defaultValue:"Kurze Wege und Raum für eigene Ideen"})],eH=e=>`${e} *`,eZ=e=>`${e} ${eg("contact.form.optional",{defaultValue:"(optional)"})}`,eG=(0,x.g)("white","main"),eJ=ek(eW);return(0,a.jsxs)(z,{ref:ey,"data-testid":ef,"data-status":eT,"data-error":eI??void 0,"data-token":eA?"ready":"pending","data-altcha":eB?"solved":"pending",children:[(0,a.jsx)(B,{children:"success"===eT?(0,a.jsxs)(H,{role:"status","data-testid":`${ef}-success`,children:[(0,a.jsx)(Z,{"aria-hidden":"true",children:(0,a.jsx)(p.f,{})}),(0,a.jsx)(S,{children:V??eg("application.form.successTitle",{defaultValue:"Danke für deine Bewerbung!"})}),(0,a.jsx)(P,{children:T??eg("application.form.successText",{defaultValue:"Wir haben deine Nachricht erhalten, lesen sie in Ruhe und melden uns persönlich bei dir."})}),(0,a.jsx)(Y,{$cta:eG,children:(0,a.jsx)(l.f,{modifier:eG.modifier,onClick:()=>{eU("idle"),eE(),eD()},dataTestId:`${ef}-again`,children:eg("application.form.again",{defaultValue:"Weitere Bewerbung senden"})})})]}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(N,{children:[(0,a.jsx)(S,{"data-testid":`${ef}-headline`,children:e??eg("application.form.headline",{defaultValue:"Werde Teil des Teams"})}),(0,a.jsx)(P,{children:b??eg("application.form.description",{defaultValue:"Du willst die Kreislaufwirtschaft für Kunststoffe mitgestalten? Auch ohne offene Stelle freuen wir uns über deine Initiativbewerbung – erzähl uns, wer du bist und was dich antreibt."})})]}),(0,a.jsxs)(D,{ref:eb,noValidate:!0,onSubmit:eJ,"data-testid":`${ef}-form`,children:[(0,a.jsxs)(E,{children:[(0,a.jsx)(q,{children:(0,a.jsx)(c.f,{name:"name",control:ev,fieldType:"text",label:eH(eg("contact.form.name",{defaultValue:"Name"})),autoComplete:"name",onValueChange:()=>e_("name"),onEnter:eJ,dataTestId:eR("name")})}),(0,a.jsx)(q,{children:(0,a.jsx)(c.f,{name:"email",control:ev,fieldType:"email",label:eH(eg("contact.form.email",{defaultValue:"E-Mail"})),autoComplete:"email",onValueChange:()=>e_("email"),onEnter:eJ,dataTestId:eR("email")})}),(0,a.jsx)(q,{children:(0,a.jsx)(c.f,{name:"phone",control:ev,fieldType:"phone",label:eZ(eg("contact.form.phone",{defaultValue:"Telefon"})),autoComplete:"tel",onValueChange:()=>e_("phone"),onEnter:eJ,dataTestId:eR("phone")})}),(0,a.jsx)(q,{children:(0,a.jsx)(c.f,{name:"area",control:ev,fieldType:"picklist",options:eK,placeholder:eg("application.form.areaPlaceholder",{defaultValue:"Bitte wählen"}),label:eH(eg("application.form.area",{defaultValue:"Bereich"})),onValueChange:()=>e_("area"),dataTestId:eR("area")})}),(0,a.jsxs)(q,{$wide:!0,children:[(0,a.jsx)(c.f,{name:"message",control:ev,fieldType:"textarea",maxLength:4e3,label:eH(eg("application.form.message",{defaultValue:"Was möchtest du uns erzählen?"})),placeholder:eg("application.form.messagePlaceholder",{defaultValue:"Wer bist du, was kannst du, was suchst du?"}),onValueChange:()=>e_("message"),dataTestId:eR("message")}),(0,a.jsx)(M,{"data-testid":`${eR("message")}-hint`,children:eg("application.form.messageHint",{defaultValue:"Mindestens {{min}} Zeichen",min:30})})]}),(0,a.jsx)(q,{$wide:!0,children:(0,a.jsx)(c.f,{name:"profileUrl",control:ev,fieldType:"url",label:eZ(eg("application.form.profileUrl",{defaultValue:"Link zu Profil oder Portfolio"})),placeholder:"https://",onValueChange:()=>e_("profileUrl"),onEnter:eJ,dataTestId:eR("profileUrl")})}),(0,a.jsx)(q,{$wide:!0,children:(0,a.jsxs)(R,{children:[(0,a.jsx)(c.f,{name:"consent",control:ev,fieldType:"boolean",label:eH(eg("application.form.consent",{defaultValue:"Ich bin einverstanden, dass plastship meine Angaben zur Bearbeitung meiner Bewerbung verarbeitet."})),onValueChange:()=>e_("consent"),dataTestId:eR("consent")}),(0,a.jsxs)("span",{children:[eg("application.form.privacyHint",{defaultValue:"Mehr dazu in der"})," ",(0,a.jsx)("a",{href:w,"data-testid":`${ef}-privacy`,children:eg("application.form.privacyLink",{defaultValue:"Datenschutzerklärung"})})]})]})})]}),(0,a.jsxs)(L,{"aria-hidden":"true",children:[(0,a.jsx)("label",{htmlFor:`${ef}-website`,children:"Website"}),(0,a.jsx)("input",{id:`${ef}-website`,name:"website",type:"text",tabIndex:-1,autoComplete:"off",value:eF,onChange:e=>eC(e.target.value),"data-testid":`${ef}-trap`})]}),(0,a.jsxs)(W,{children:[eI&&(0,a.jsx)(K,{role:"alert","data-testid":`${ef}-error`,"data-error":eI,children:eY[eI]}),(0,a.jsx)(o.f,{challengeUrl:"/api/contact-requests/challenge/",auto:"onfocus",startImmediately:eS>0,onSolved:eq,dataTestId:`${ef}-altcha`},eS),(0,a.jsx)(Y,{$cta:eG,"data-cta-tone":eG.tone,"data-cta-fill":eG.fill,children:(0,a.jsx)(l.f,{buttonType:r.O.SUBMIT,modifier:eG.modifier,loading:"submitting"===eT,icon:(0,a.jsx)(d.f,{}),iconAlign:r.W.RIGHT,dataTestId:`${ef}-submit`,children:eg("application.form.submit",{defaultValue:"Bewerbung senden"})})})]})]})]})}),(0,a.jsx)(J,{"data-testid":`${ef}-aside-column`,children:(0,a.jsxs)(Q,{role:"complementary","aria-labelledby":`${ef}-aside-title`,"data-testid":`${ef}-aside`,children:[(0,a.jsx)(X,{viewBox:"0 0 240 160","aria-hidden":"true",focusable:"false","data-testid":`${ef}-decor`,children:es.map(({key:e,alpha:t,d:i})=>(0,a.jsx)("path",{d:i,fill:"currentColor",fillOpacity:t/3,stroke:"currentColor",strokeOpacity:t},e))}),(0,a.jsx)(ee,{id:`${ef}-aside-title`,children:U??eg("application.aside.title",{defaultValue:"Was dich erwartet"})}),(0,a.jsx)(ea,{"data-testid":`${ef}-benefits`,"data-count":eO.length,children:eO.map((e,t)=>(0,a.jsxs)(et,{"data-testid":`${ef}-benefit-${t}`,children:[(0,a.jsx)(ei,{"aria-hidden":"true",children:t+1}),(0,a.jsx)("span",{children:e})]},t))}),(G||ed||ep)&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(en,{}),(0,a.jsx)(ee,{children:O??eg("application.aside.contactTitle",{defaultValue:"Adresse und Kontakt"})}),(0,a.jsxs)(el,{"data-testid":`${ef}-contact`,children:[G&&(0,a.jsxs)(er,{"data-testid":`${ef}-address`,children:[(0,a.jsx)(m.f,{}),(0,a.jsx)(s.f,{kind:"map",value:G,place:"applicationForm",dataTestId:`${ef}-address-link`})]}),ed&&(0,a.jsxs)(er,{children:[(0,a.jsx)(f.f,{}),(0,a.jsx)(s.f,{kind:"tel",value:ed,place:"applicationForm",dataTestId:`${ef}-phone-link`})]}),ep&&(0,a.jsxs)(er,{children:[(0,a.jsx)(u.f,{}),(0,a.jsx)(s.f,{kind:"mail",value:ep,place:"applicationForm",dataTestId:`${ef}-email-link`})]})]})]})]})})]})}var ed=e.i(891567),ep=e.i(197908),eu=e.i(507924),em=e.i(755010);let ef=`${ed.Y.name}
${ed.Y.street}
${ed.Y.postalCode} ${ed.Y.locality}`;e.s(["ApplicationFormBlock",0,({block:e,locale:t,dataTestId:i})=>{let n=e.props,l=e=>e?(0,eu.u)(e,t):void 0,r=(0,em.l)("applicationForm");return(0,a.jsx)(em.A,{element:"applicationForm",fallback:null,children:(0,a.jsx)(ec,{headline:l(n.headline),description:l(n.description),privacyHref:(0,ep.J)(n.privacyHref),successTitle:l(n.successTitle),successText:l(n.successText),asideTitle:l(n.asideTitle),benefits:n.benefits?.map(e=>(0,eu.u)(e,t)),contactTitle:l(n.contactTitle),address:n.address||ef,phone:n.phone||ed.h.central.international,email:n.email||ed._.info,locale:t,onReport:r,dataTestId:`${i}-application`})})}],644812)},429147,e=>{let a=/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F-\u009F]/g,t=/[\u00AD\u180E\u200B-\u200F\u202A-\u202E\u2060-\u206F\uFEFF\uFFF9-\uFFFB]|\uDB40[\uDC00-\uDC7F]/g,i=/<\/?[a-z!?][^<>]*>/gi,n=/[<>]/g,l=(e,a)=>e.slice(0,2*a+64);function r(e){let a=e.length;for(;a>0&&(" "===e[a-1]||" "===e[a-1]);)a--;return e.slice(0,a)}let o=e=>e.normalize("NFKC").replace(/\r\n?/g,"\n").replace(a,"").replace(t,"").replace(i,"").replace(n,""),s=/^[=+\-@\s]+/;function c(e,a){return"string"!=typeof e?"":o(l(e,a)).replace(/\s+/g," ").trim().replace(s,"").slice(0,a)}e.s(["U",0,function(e,a){return"string"!=typeof e?"":o(l(e,a)).replace(/\s/g,"").toLowerCase().slice(0,a)},"Y",0,c,"f",0,function(e,a){return"string"!=typeof e?"":o(l(e,a)).replace(/\t/g," ").split("\n").map(r).join("\n").replace(/[ \u00A0]{2,}/g," ").replace(/\n{3,}/g,"\n\n").trim().replace(s,"").slice(0,a)},"W",0,function(e,a){return"string"!=typeof e?"":o(l(e,a)).slice(0,a).replace(/[^\d+()/\- ]/g,"").replace(/\s+/g," ").replace(/^[-\s]+/,"").trim()},"a",0,function(e,a){return c(e,a).replace(/[^\p{L}\p{N} -]/gu,"").trim().toUpperCase()}])}],779448,e=>{e.v(a=>Promise.all(["static/chunks/1z3my1vm83tjy.js","static/chunks/44bbm4lpwd-up.js"].map(a=>e.l(a))).then(()=>a(64010)))},135869,e=>{e.v(a=>Promise.all(["static/chunks/343o_k1zb8e2-.js"].map(a=>e.l(a))).then(()=>a(539032)))},385437,e=>{e.v(a=>Promise.all(["static/chunks/42663xu8u-kj1.js","static/chunks/2oq-uevcwhldh.js"].map(a=>e.l(a))).then(()=>a(830042)))},666916,function(e){e.n(e.i(644812))},319165,e=>{e.v(a=>Promise.all(["static/chunks/0-yy3og0c3xg4.js","static/chunks/0u6g_kbhw5562.js","static/chunks/29guo1tawdpj2.js"].map(a=>e.l(a))).then(()=>a(601212)))},707814,e=>{e.v(a=>Promise.all(["static/chunks/14c27xpd0zdqc.js","static/chunks/0u6g_kbhw5562.js","static/chunks/29guo1tawdpj2.js"].map(a=>e.l(a))).then(()=>a(729655)))},994547,e=>{e.v(a=>Promise.all(["static/chunks/2zo5i86dti6t1.js","static/chunks/0klazxs4io7u7.js","static/chunks/07tin9gz0yy65.js","static/chunks/2oq-uevcwhldh.js","static/chunks/22zu_zui3dpfo.css"].map(a=>e.l(a))).then(()=>a(893960)))},53129,e=>{e.v(a=>Promise.all(["static/chunks/388tfm-77u9j5.js"].map(a=>e.l(a))).then(()=>a(755268)))}]);