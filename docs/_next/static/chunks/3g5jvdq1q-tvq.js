(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,898674,645433,e=>{var t=e.i(843476),a=e.i(325164),r=e.i(475352);let i={"bastian@plastship.com":"/team/Andi_hoch.png","conigliaro@plastship.com":"/team/Emilio_hoch.png","cechol@plastship.com":"/team/Louisa_hoch.png","gregor@plastship.com":"/team/Monika_hoch.png","dambeck@plastship.com":"/team/Moritz_hoch.png","limbach@plastship.com":"/team/MoritzLhoch.png","mirco@plastship.com":"/team/Mirco_hoch.png"};var n=e.i(336881),l=e.i(227757),o=e.i(997053),s=e.i(547905);let d=o.U.div.withConfig({displayName:"Avatar.styles__AvatarContainer",componentId:"sc-7884edb1-0"})`
  width: ${({$size:e})=>e}px;
  height: ${({$size:e})=>e}px;
  min-width: ${({$size:e})=>e}px;
  min-height: ${({$size:e})=>e}px;
  /* #1781/#1871: Personenbild als regelmäßige Wabe (portraitHexagonMask, mittig im Quadrat) */
  ${s.q}
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,c=(0,o.U)(d).withConfig({displayName:"Avatar.styles__ImageWrapper",componentId:"sc-7884edb1-1"})`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,p=(0,o.U)(d).withConfig({displayName:"Avatar.styles__InitialsWrapper",componentId:"sc-7884edb1-2"})`
  background: ${({theme:e})=>e.palette.default.primary};
  color: ${({theme:e})=>e.palette.default.white};
  font-weight: 600;
  font-size: ${({$size:e})=>Math.max(10,e/2.5)}px;
  text-transform: uppercase;
`;e.i(821194);var u=e.i(99222);e.s(["f",0,({userId:e,email:o,name:s,imageUrl:d,size:m=40,alt:h,className:A,useGeneratedFallback:g=!1,generatedOptions:f,dataTestId:b="avatar"})=>{var N;let R,{tr:y}=(0,u.f)(),{bySalesforceId:w,byEmail:S}=(0,n.f)({enabled:!d&&!!(e||o)}),x=d?null:e&&w(e)?.image||o&&(S(o)?.image||(N={email:o},(R=N?.email?.toLowerCase().trim())&&i[R]||""))||null,C=null;d?C=d:x?C=x:g&&s&&(C=(0,l.f)(s,f));let I=h||s||y("common.userAvatar",{defaultValue:"User avatar"});if(C){let e=C.startsWith("/")&&!(0,r.f)(C);return(0,t.jsx)(c,{$size:m,className:A,"data-testid":b,"data-avatar-source":"image",children:e?(0,t.jsx)(a.default,{src:C,alt:I,width:m,height:m,style:{objectFit:"cover"}}):(0,t.jsx)("img",{src:C,alt:I})})}if(s){let e;return(0,t.jsx)(p,{$size:m,className:A,"data-testid":b,"data-avatar-source":"initials",children:(e=s.trim().split(" ")).length>=2?`${e[0][0]}${e[e.length-1][0]}`:s.substring(0,2)})}return(0,t.jsx)(p,{$size:m,className:A,"data-testid":b,"data-avatar-source":"placeholder",children:"?"})}],645433),e.s([],898674)},418368,371733,e=>{var t=e.i(843476),a=e.i(635647),r=e.i(680743);e.i(821194);var i=e.i(99222),n=e.i(852028),l=e.i(669593),o=e.i(555508),s=e.i(145896),d=e.i(650033),c=e.i(997053);let p=c.U.span.withConfig({displayName:"TableCells.styles__PillList",componentId:"sc-c16bc39c-0"})`
  display: inline-flex;
  flex-wrap: wrap;
  gap: 4px;
`,u=c.U.span.withConfig({displayName:"TableCells.styles__MutedText",componentId:"sc-c16bc39c-1"})`
  color: ${({theme:e})=>e.palette.text.secondary};
  font-size: 0.75rem;
`,m=c.U.div.withConfig({displayName:"TableCells.styles__MaterialThumbFrame",componentId:"sc-c16bc39c-2"})`
  margin: -8px;
  aspect-ratio: 1 / 1;
  min-height: 65px;
  height: 100%;
  border-radius: 6px;
  overflow: hidden;
`,h=c.U.img.withConfig({displayName:"TableCells.styles__MaterialThumbImg",componentId:"sc-c16bc39c-3"})`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`,A=c.U.span.withConfig({displayName:"TableCells.styles__SiteCellStack",componentId:"sc-c16bc39c-4"})`
  display: inline-flex;
  flex-direction: column;
  gap: 2px;
`,g=c.U.span.withConfig({displayName:"TableCells.styles__SiteName",componentId:"sc-c16bc39c-5"})`
  font-weight: 600;
`;e.s(["F",0,({value:e,name:r,dataTestId:i})=>{let l=i?`${i}-name`:"address-cell-site-name",o=e?(0,a.W)({query:String(e)}):null;if(!e)return r?(0,t.jsx)(g,{"data-testid":l,children:r}):(0,t.jsx)(t.Fragment,{children:"-"});let s=String(e),d=s.split(",").map(e=>e.trim()),c=d.length>=2?`${d[d.length-2]}, ${d[d.length-1]}`:s,p=(0,t.jsx)(n.r,{href:o??"#",target:"_blank",rel:"noopener noreferrer","data-testid":i,children:c});return r?(0,t.jsxs)(A,{children:[(0,t.jsx)(g,{"data-testid":l,children:r}),p]}):p},"D",0,({value:e})=>{let{tr:a}=(0,i.f)();return null==e?(0,t.jsx)(t.Fragment,{children:"-"}):(0,t.jsx)(t.Fragment,{children:e?a("common.yes",{defaultValue:"Ja"}):a("common.no",{defaultValue:"Nein"})})},"$",0,({value:e,trueLabel:a,trueLabelKey:n,falseLabel:l,falseLabelKey:o,dataTestId:s})=>{let{tr:d}=(0,i.f)(),c=e?n?d(n,{defaultValue:a}):a:o?d(o,{defaultValue:l}):l;return(0,t.jsx)(r.Z,{modifier:e?r.A.SUCCESS:r.A.ERROR,dataTestId:s,children:c})},"l",0,({value:e})=>(0,t.jsx)(t.Fragment,{children:null==e||""===e?"0":String(e)}),"e",0,({value:e,options:a})=>{let r=(0,o.f)();return(0,t.jsx)(t.Fragment,{children:r.currency(e,a??{})})},"S",0,({value:e})=>{let a=(0,o.f)();return(0,t.jsx)(t.Fragment,{children:(0,l.V)(e,a.locale)})},"o",0,({value:e})=>{let a=(0,o.f)();return(0,t.jsx)(t.Fragment,{children:(0,l.o)(e,a.locale)})},"R",0,({href:e,label:a,suffix:r="",dataTestId:i,unnamed:l})=>{if(!a)return(0,t.jsx)(t.Fragment,{children:"-"});let o=`${a}${r}`;return e?(0,t.jsx)(n.r,{href:e,"data-testid":i,"data-unnamed":l||void 0,children:o}):(0,t.jsx)("span",{"data-testid":i,"data-unnamed":l||void 0,children:o})},"J",0,({src:e,title:a,alt:r="",dataTestId:i})=>(0,t.jsx)(m,{title:a,"data-testid":i,children:(0,t.jsx)(h,{src:e,alt:r,loading:"lazy",decoding:"async","data-testid":i?`${i}-img`:void 0})}),"c",0,({value:e,separator:a=";",map:i,fallbackModifier:n=r.A.NEUTRAL,dataTestId:l})=>{let o=(0,s.V)(),c=(e??"").split(a).map(e=>e.trim()).filter(Boolean);return 0===c.length?(0,t.jsx)(t.Fragment,{children:"-"}):(0,t.jsx)(p,{"data-testid":l,children:c.map(e=>(0,t.jsx)(r.Z,{modifier:i?(0,d.K)(d.R[i],e,n):n,children:o.text(e)},e))})},"v",0,({children:e,dataTestId:a})=>(0,t.jsx)(u,{"data-testid":a,children:null==e||""===e?"-":e}),"s",0,({value:e,options:a})=>{let r=(0,o.f)();return(0,t.jsx)(t.Fragment,{children:r.percent(e,a??{})})},"n",0,({value:e,map:a,resolver:i,fallbackModifier:n=r.A.NEUTRAL,overrideModifier:l,label:o,dataTestId:s})=>{if(!e)return(0,t.jsx)(t.Fragment,{children:"-"});let c=l??(i?d.V[i](e):a?(0,d.K)(d.R[a],e,n):n);return(0,t.jsx)(r.Z,{modifier:c,dataTestId:s,children:o??e})},"K",0,({recordId:e,label:a,href:r,objectLabel:i,dataTestId:l})=>a&&e?r?(0,t.jsxs)(n.r,{href:r,"data-testid":l,"data-object-label":i||void 0,children:[a,i&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("br",{}),(0,t.jsx)("br",{})," ",i]})]}):(0,t.jsx)("span",{"data-testid":l,children:a}):(0,t.jsx)(t.Fragment,{children:"-"}),"T",0,({text:e,pillLabel:a,pillModifier:i,dataTestId:n})=>(0,t.jsxs)(p,{"data-testid":n,children:[e,(0,t.jsx)(r.Z,{modifier:i,children:a})]})],371733),e.s([],418368)},852028,e=>{var t=e.i(994244),a=e.i(703089);e.i(315481);var r=e.i(10003),i=e.i(997053);let n="@container responsive-table (min-width: 1024px)",l="@container responsive-table (max-width: 479px)",o=({$inverted:e,theme:t})=>e?"rgba(255, 255, 255, 0.25)":t.palette.border.default,s=({$inverted:e,theme:t})=>e?"rgba(255, 255, 255, 0.12)":t.palette.surface.muted,d=({$inverted:e,theme:t})=>e?t.palette.default.white:t.palette.text.primary,c=({$inverted:e,theme:t})=>e?"transparent":t.palette.default.white,p=({$inverted:e,theme:t})=>e?"rgba(255, 255, 255, 0.08)":t.palette.surface.subtle,u=i.U.div.withConfig({displayName:"ResponsiveTable.styles__Root",componentId:"sc-2e5a9576-0"})`
  container-type: inline-size;
  container-name: responsive-table;
  display: block;
  width: 100%;
  min-width: 0;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  /* Platz für den Karten-Schatten, den overflow-x sonst abschneidet */
  padding-bottom: 4px;
`,m=i.U.table.withConfig({displayName:"ResponsiveTable.styles__StyledTable",componentId:"sc-2e5a9576-1"})`
  /* Karten-Modus: Tabelle als Block, damit tbody ein Grid werden darf */
  display: block;
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  font-size: 14px;
  line-height: 1.45;
  color: ${d};
  background: transparent;

  ${n} {
    display: table;
    table-layout: auto;
    min-width: 100%;
    border: 1px solid ${o};
    border-radius: ${e=>e.theme.borderRadius.box};
    overflow: hidden;
    background: ${e=>e.$inverted?e.theme.palette.default.primary:e.theme.palette.default.white};
  }
`,h=i.U.thead.withConfig({displayName:"ResponsiveTable.styles__StyledThead",componentId:"sc-2e5a9576-2"})`
  display: block;

  /* Karten-Modus: Kopfzeile bleibt im DOM (Screenreader), aber außerhalb des Bildes */
  tr {
    position: absolute;
    left: -9999px;
  }

  ${n} {
    display: table-header-group;
    background: ${s};

    tr {
      position: static;
    }
  }
`,A=i.U.tbody.withConfig({displayName:"ResponsiveTable.styles__StyledTbody",componentId:"sc-2e5a9576-3"})`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 12px;
  width: 100%;

  ${"@container responsive-table (min-width: 640px)"} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  ${n} {
    display: table-row-group;
  }
`,g=i.U.tr.withConfig({displayName:"ResponsiveTable.styles__StyledTr",componentId:"sc-2e5a9576-4"})`
  /* Karte */
  display: block;
  min-width: 0;
  border: 1px solid ${o};
  border-radius: ${e=>e.theme.borderRadius.box};
  background: ${c};
  box-shadow: ${e=>e.theme.boxShadow};
  color: ${d};
  overflow: hidden;
  transition:
    background-color 0.15s ease,
    border-color 0.15s ease,
    box-shadow 0.15s ease;

  ${({$clickable:e,theme:t})=>e&&i.m`
      cursor: pointer;

      &:hover {
        border-color: ${t.palette.default.primary};
        box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.08);
      }
    `}

  ${n} {
    display: table-row;
    border: none;
    border-radius: 0;
    box-shadow: none;
    background: transparent;
    overflow: visible;

    ${({$clickable:e})=>e&&i.m`
        &:hover {
          box-shadow: none;
          background: ${p};
        }
      `}
  }
`,f=i.U.th.withConfig({displayName:"ResponsiveTable.styles__StyledTh",componentId:"sc-2e5a9576-5"})`
  display: none;
  text-align: left;
  font-size: 13px;
  font-weight: 600;
  line-height: 1.3;
  color: ${({$inverted:e,theme:t})=>e?t.palette.default.white:t.palette.text.secondary};
  white-space: nowrap;
  vertical-align: middle;
  ${(0,t.m)()}

  &[data-sortable='true'] {
    cursor: pointer;
    transition: color 0.15s ease;

    &:hover {
      color: ${d};
    }
  }

  /* Sortier-Pfeil: klein, in der Primärfarbe, mit festem Platz, damit der
     Kopf beim Sortierwechsel nicht springt */
  &::after {
    content: '';
    display: inline-block;
    width: 0.75em;
    margin-left: 0.35em;
    font-size: 9px;
    line-height: 1;
    vertical-align: middle;
    color: ${e=>e.$inverted?e.theme.palette.default.white:e.theme.palette.default.primary};
  }

  &[data-sortable='true'][data-sorted='none']:hover::after {
    content: '▼';
    opacity: 0.35;
  }

  &[data-sorted='asc']::after {
    content: '▲';
  }

  &[data-sorted='desc']::after {
    content: '▼';
  }

  &[data-sticky='true'] {
    position: sticky;
    left: 0;
    z-index: 2;
    background: ${s};
  }

  ${n} {
    display: table-cell;
    padding: 10px 12px;
    border-bottom: 1px solid ${({$inverted:e,theme:t})=>e?"rgba(255, 255, 255, 0.4)":t.palette.border.strong};
    width: var(--column-width, auto);
    min-width: var(--column-width, 0);
    max-width: var(--column-width, none);
  }
`,b=i.U.span.withConfig({displayName:"ResponsiveTable.styles__HeaderContent",componentId:"sc-2e5a9576-6"})`
  display: inline-flex;
  align-items: center;
`,N=i.U.div.withConfig({displayName:"ResponsiveTable.styles__TdBefore",componentId:"sc-2e5a9576-7"})`
  /* Karten-Label */
  display: flex;
  align-items: flex-start;
  min-width: 0;
  padding: 8px 12px;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.4;
  letter-spacing: 0.01em;
  color: ${({$inverted:e,theme:t})=>e?"rgba(255, 255, 255, 0.8)":t.palette.text.muted};
  background: ${({$inverted:e,theme:t})=>e?"rgba(255, 255, 255, 0.08)":t.palette.surface.subtle};
  border-right: 1px solid ${o};
  overflow-wrap: anywhere;
  hyphens: auto;

  ${l} {
    padding: 8px 12px 0;
    background: transparent;
    border-right: none;
  }

  ${n} {
    display: none;
  }
`,R=i.U.div.withConfig({displayName:"ResponsiveTable.styles__CellContent",componentId:"sc-2e5a9576-8"})`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 4px 6px;
  min-width: 0;
  padding: 8px 12px;
  color: ${d};
  overflow-wrap: anywhere;

  a {
    min-width: 0;
    max-width: 100%;
    overflow-wrap: anywhere;
    color: ${e=>e.$inverted?e.theme.palette.default.white:e.theme.palette.link.primary};
  }

  ${l} {
    padding: 4px 12px 10px;
  }

  ${n} {
    padding: 0;
    /* Lange Texte umbrechen statt die Spalte endlos zu verbreitern */
    max-width: 24rem;

    /* Nur an Wortgrenzen umbrechen: overflow-wrap anywhere / word-break
       break-word würden die Mindestbreite der Spalte auf ein Zeichen
       schrumpfen lassen — genau die „Deuts chlan d"-Brüche von vorher.
       overflow-wrap break-word bricht erst, wenn ein Wort wirklich nicht in
       die Zelle passt. */
    &,
    && * {
      overflow-wrap: break-word;
      word-break: normal;
      hyphens: manual;
    }
  }
`;(0,i.U)(a.p).withConfig({displayName:"ResponsiveTable.styles__StyledTableText",componentId:"sc-2e5a9576-9"})`
  word-break: break-word;
  overflow-wrap: break-word;
  max-width: 100%;
  min-width: 0;
  margin: 0;
`;let y=(0,i.U)(r.NavLink).withConfig({displayName:"ResponsiveTable.styles__StyledTableLink",componentId:"sc-2e5a9576-10"})`
  margin: 0;
  color: ${e=>e.theme.palette.link.primary};
`,w=i.U.td.withConfig({displayName:"ResponsiveTable.styles__StyledTd",componentId:"sc-2e5a9576-11"})`
  /* Karte: Label | Wert */
  display: grid;
  grid-template-columns: minmax(7rem, 36%) minmax(0, 1fr);
  align-items: stretch;
  padding: 0;
  border-bottom: 1px solid ${o};
  text-align: left;
  color: ${d};

  &:last-child {
    border-bottom: none;
  }

  ${l} {
    grid-template-columns: minmax(0, 1fr);
  }

  &[data-sticky='true'] {
    position: sticky;
    left: 0;
    z-index: 1;
    background: ${c};
  }

  ${n} {
    display: table-cell;
    padding: 9px 12px;
    vertical-align: middle;
    width: var(--column-width, auto);
    min-width: var(--column-width, 0);
    max-width: var(--column-width, none);
    border-bottom: 1px solid ${o};
    white-space: normal;
    overflow-wrap: normal;

    a {
      display: inline;
      white-space: normal;
      word-break: normal;
      overflow-wrap: break-word;
      max-width: 100%;
    }

    tr:last-child > & {
      border-bottom: none;
    }
  }
`,S=i.U.div.withConfig({displayName:"ResponsiveTable.styles__EmptyState",componentId:"sc-2e5a9576-12"})`
  padding: 2.5rem 1rem;
  text-align: center;
  font-size: 14px;
  color: ${e=>e.theme.palette.text.muted};
  border: 1px dashed ${e=>e.theme.palette.border.strong};
  border-radius: ${e=>e.theme.borderRadius.box};
`,x=i.U.div.withConfig({displayName:"ResponsiveTable.styles__StyledCounterColumn",componentId:"sc-2e5a9576-13"})`
  /* This is a global style that will be applied to the table */
  /* Target the first column in the table header */
  & ~ div th:first-child {
    text-align: center;
    background-color: ${e=>e.theme.palette.default.primary};
    color: white;
    font-weight: 600;
    padding: 8px 8px;
    span {
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
    }
  }

  /* Target the first column in the table body */
  & ~ div td:first-child {
    width: 100%;
    text-align: center;
    background-color: ${e=>e.theme.palette.default.primary};
    color: white;
    font-weight: 600;
    padding: 0;
    justify-content: center;
    align-items: center;
    font-size: 12px;
  }

  /* Target the content inside the first column */
  & ~ div td:first-child div:last-child {
    background-color: ${e=>e.theme.palette.default.primary};
    color: white;
    text-align: center;
    font-weight: 600;
    border-radius: 4px;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  @container responsive-table (min-width: 1024px) {
    & ~ div th:first-child {
      width: 20px;
      background-color: ${e=>e.theme.palette.default.primary};
    }
    & ~ div td:first-child {
      background-color: ${e=>e.theme.palette.default.primary};
      width: 100%;
      height: 100%;
    }
  }
`;e.s(["j",0,R,"k",0,S,"l",0,b,"F",0,u,"O",0,x,"P",0,m,"r",0,y,"m",0,A,"U",0,w,"L",0,f,"z",0,h,"K",0,g,"s",0,N])},650033,e=>{var t=e.i(680743),a=e.i(174761);let r=(e,a,r=t.A.NEUTRAL)=>{if(!a)return r;if(Object.prototype.hasOwnProperty.call(e,a))return e[a];let i=a.trim().toLowerCase();for(let t of Object.keys(e))if(t.toLowerCase()===i)return e[t];return r},i={High:t.A.ERROR,Medium:t.A.WARNING,Normal:t.A.WARNING,Low:t.A.SUCCESS},n={New:t.A.INFO,"In Progress":t.A.WARNING,"Waiting for Customer":t.A.WARNING,"Response Received":t.A.INFO,"On Hold":t.A.NEUTRAL,Escalated:t.A.ERROR,Merged:t.A.NEUTRAL,"No Action":t.A.NEUTRAL,Rejected:t.A.ERROR,Closed:t.A.SUCCESS},l={Problem:t.A.ERROR,"Feature Request":t.A.INFO,"Platform Material request":t.A.WARNING,"Platform Material or offer created":t.A.SUCCESS},o={"Not Started":t.A.INFO,"In Progress":t.A.WARNING,Completed:t.A.SUCCESS},s={[a.a.Entwurf]:t.A.NEUTRAL,[a.a.BestellungErhalten]:t.A.NEUTRAL,[a.a.AnLieferantVersandt]:t.A.WARNING,[a.a.VomLieferantBestaetigt]:t.A.SUCCESS,[a.a.AbAnKundenVersandt]:t.A.SUCCESS,[a.a.TransportBeauftragen]:t.A.WARNING,[a.a.TransportBeauftragt]:t.A.WARNING,[a.a.AnlieferungErfolgt]:t.A.INFO,[a.a.InformationenEinpflegen]:t.A.INFO,[a.a.BetragErhalten]:t.A.INFO,[a.a.Abgeschlossen]:t.A.SUCCESS,[a.a.Storno]:t.A.ERROR,[a.a.Reklamation]:t.A.ERROR,[a.a.PlastrackBefuellt]:t.A.INFO},d={warentransport:t.A.INFO,abfalltransport:t.A.WARNING,provisionsabrechnung:t.A.SUCCESS,materialanalyse:t.A.INFO,consulting:t.A.NEUTRAL,dienstleistung:t.A.NEUTRAL,materialentwicklung:t.A.NEUTRAL,lagermenge:t.A.INFO},c={bezahlt:t.A.SUCCESS,gebucht:t.A.INFO,"vollständig dokumentiert":t.A.WARNING,storno:t.A.ERROR},p={ausgang:t.A.SUCCESS,eingang:t.A.INFO},u={rechnung:t.A.INFO,gutschrift:t.A.WARNING,storno:t.A.ERROR},m={Draft:t.A.NEUTRAL,Ready:t.A.WARNING,Ordered:t.A.INFO,Sent:t.A.SUCCESS,Received:t.A.SUCCESS},h={Order:t.A.INFO,Sending:t.A.SUCCESS,Direct:t.A.WARNING},A={Qualification:t.A.INFO,"Needs Analysis":t.A.WARNING,Proposal:t.A.WARNING,Negotiation:t.A.WARNING,"Closed Won":t.A.SUCCESS,"Closed Lost":t.A.ERROR},g={"New Business":t.A.SUCCESS,"Existing Business":t.A.INFO,"gezielte Materialvermarktung":t.A.WARNING,"gezielte Materialversorgung":t.A.WARNING,"Kooperation / Projekt":t.A.INFO,Partner:t.A.NEUTRAL,"3S-Sales":t.A.SUCCESS},f={abgeschlossen:t.A.SUCCESS,übergeben:t.A.INFO,offen:t.A.ERROR,"follow-up":t.A.WARNING,"rechnung stellen":t.A.INFO},b={Offen:t.A.NEUTRAL,Beauftragt:t.A.WARNING,"Übergeben (plastship an DL)":t.A.INFO,"in Arbeit":t.A.SUCCESS,"On hold":t.A.ERROR,"Abgeschlossen (Dienstleister)":t.A.INFO,"QC ok (plastship)":t.A.SUCCESS,"Veröffentlicht (plastship)":t.A.INFO},N={"Platform request":t.A.INFO,"In preparation":t.A.INFO,"Requirement confirmed":t.A.WARNING,"Availability and buying price confirmed":t.A.WARNING,"Transport price requested":t.A.WARNING,"Offer communicated":t.A.WARNING,"Initial feedback received":t.A.WARNING,"Sample ordered from supplier":t.A.INFO,"Sample sent to customer":t.A.INFO,Approved:t.A.SUCCESS,Rejected:t.A.ERROR},R={Draft:t.A.NEUTRAL,"To send":t.A.WARNING,Sent:t.A.INFO,"Received by Customer":t.A.SUCCESS,"Feedback positive":t.A.SUCCESS,"Feedback negative":t.A.ERROR},y={"in Erstellung":t.A.NEUTRAL,"Ursachenanalyse erwartet":t.A.INFO,"Evaluierung und Implementierung erwartet":t.A.INFO,"Umsetzung weitere Maßnahmen erwartet":t.A.INFO,"Nacharbeit Ursachenanalyse erwartet":t.A.WARNING,"Nacharbeit Evaluierung und Implementierung erwartet":t.A.WARNING,"Nacharbeit weitere Maßnahmen erwartet":t.A.WARNING,Abgeschlossen:t.A.SUCCESS,"Abgebrochen / keine Abweichung":t.A.NEUTRAL},w={"Contamination in polymer composition":t.A.ERROR,"Contamination with non-plastics":t.A.ERROR,"Quality fluctuation":t.A.WARNING,"Missing quality assurance":t.A.WARNING,Price:t.A.INFO,"Optical Quality":t.A.SUCCESS},S={Aktiv:t.A.SUCCESS,"Bestätigter Bedarf":t.A.SUCCESS,"In Bearbeitung":t.A.WARNING,"Recherchierter Bedarf":t.A.WARNING,Abgeschlossen:t.A.INFO,"On hold":t.A.NEUTRAL,Storniert:t.A.ERROR},x={Regranulat:t.A.SUCCESS,Compound:t.A.INFO,Flakes:t.A.WARNING,Mahlgut:t.A.NEUTRAL},C={Full:t.A.SUCCESS,Empty:t.A.INFO,"In Transit":t.A.WARNING},I={draft:t.A.NEUTRAL,planned:t.A.INFO,live:t.A.SUCCESS,ended:t.A.NEUTRAL,canceled:t.A.ERROR},v={Processed:t.A.SUCCESS,Voided:t.A.ERROR},E={Fill:t.A.SUCCESS,Empty:t.A.INFO},$={active:t.A.SUCCESS,aktiv:t.A.SUCCESS,pending:t.A.WARNING,wartend:t.A.WARNING,closed:t.A.NEUTRAL,geschlossen:t.A.NEUTRAL},U={info:t.A.INFO,success:t.A.SUCCESS,warning:t.A.WARNING,error:t.A.ERROR},O={draft:t.A.WARNING,published:t.A.SUCCESS},T={approved:t.A.SUCCESS,submitted:t.A.INFO,rejected:t.A.ERROR,paid:t.A.SUCCESS,draft:t.A.NEUTRAL},F={complete:t.A.SUCCESS,partial:t.A.WARNING,pending:t.A.NEUTRAL},k={admin:t.A.ERROR,staff:t.A.NEUTRAL,agent:t.A.NEUTRAL,user:t.A.INFO,accounting:t.A.NEUTRAL,laboratory:t.A.NEUTRAL,advisor:t.A.NEUTRAL,rigk:t.A.INFO,partner:t.A.NEUTRAL},W={approved:t.A.SUCCESS,submitted:t.A.INFO,rejected:t.A.ERROR},j={Status:t.A.INFO,Meeting:t.A.SUCCESS,Entscheidung:t.A.WARNING,"To-do":t.A.NEUTRAL,Info:t.A.INFO},L={priority:i,"account.source":{"Fachpack 2024":t.A.INFO,IFAT2024:t.A.INFO,"PRSE 2023":t.A.INFO,PRC2023:t.A.INFO,"Fakuma 2024":t.A.INFO,Advertisement:t.A.WARNING,"Google AdWords":t.A.WARNING,Website:t.A.SUCCESS,Webinar:t.A.SUCCESS,Partner:t.A.INFO,"External Referral":t.A.INFO,"Employee Referral":t.A.INFO,"Verband TecPart":t.A.ERROR,"Verband PRE":t.A.ERROR,"Verband bvse":t.A.ERROR,"Verband IK":t.A.ERROR},"case.status":n,"case.type":l,"contactHandover.status":f,"invoice.category":u,"invoice.status":c,"invoice.type":p,"marketPrice.category":{virgin:t.A.INFO,recyclate:t.A.SUCCESS},"materialAnalysis.status":b,"materialProposal.status":N,"notification.type":U,"cms.status":O,"opportunity.stage":A,"opportunity.type":g,"order.status":s,"order.type":d,"auction.status":I,"plastshipBox.status":C,"plastshipScan.scanType":E,"plastshipScan.status":v,"project.status":$,"requirement.materialType":x,"requirement.status":S,"rigk.updateType":j,"sampleFeedback.reason":w,"prozessfeedback.status":y,"sampleFeedback.status":R,"sampleSending.status":m,"sampleSending.type":h,"task.status":o,"travelExpense.reimbursement":F,"travelExpense.status":T,"user.role":k,"workingHours.status":W};e.s(["R",0,L,"V",0,{"rigk.relationLevel":e=>{if(!e||"-"===e)return t.A.NEUTRAL;switch(e.charAt(0)){case"0":default:return t.A.NEUTRAL;case"1":return t.A.INFO;case"2":return t.A.SUCCESS;case"3":return t.A.WARNING;case"4":return t.A.ERROR}}},"l",0,j,"W",0,F,"F",0,T,"K",0,r,"Y",0,(e,a,i=t.A.NEUTRAL)=>r(L[e],a,i)])},336881,945199,e=>{var t=e.i(271645),a=e.i(266027),r=e.i(501496),i=e.i(24024),n=e.i(427006),l=e.i(206702),o=e.i(149696);function s(e,t){let a=(0,o.X)(t);if(a)return e.find(e=>e.salesforceId===a)}function d(e,t){let a=t?.trim().toLowerCase();if(a)return e.find(e=>e.email?.toLowerCase()===a)}n.r.filter(e=>!(0,l.Y)(e)&&!n.I.includes(e)),e.s(["T",0,d,"B",0,s],945199);let c=[];e.s(["f",0,function(e){let{userContext:n}=(0,i.f)(),l=(0,a.f)({queryKey:["team"],queryFn:async()=>(await r.k.get("/plastship/team/")).data,staleTime:36e5,refetchOnWindowFocus:!1,retry:1,enabled:!!n&&(e?.enabled??!0)}),o=l.data??c,p=(0,t.useCallback)(e=>s(o,e),[o]),u=(0,t.useCallback)(e=>d(o,e),[o]);return{members:o,isLoading:l.isLoading,bySalesforceId:p,byEmail:u}}],336881)},227757,e=>{e.s(["f",0,function(e,t={}){let a,r,{backgroundColor:i,size:n=200}=t,l=(r=(a=e.replace(/@.*$/,"").trim()).split(/[\s._-]+/).filter(Boolean)).length>=2?`${r[0][0]}${r[r.length-1][0]}`.toUpperCase():a.substring(0,2).toUpperCase(),o=i?i.startsWith("#")?i:`#${i}`:function(e){let t=0;for(let a=0;a<e.length;a++)t=e.charCodeAt(a)+((t<<5)-t);let a=Math.abs(t)%360;return`hsl(${a}, 45%, 50%)`}(e),s=`<svg xmlns="http://www.w3.org/2000/svg" width="${n}" height="${n}" viewBox="0 0 ${n} ${n}"><rect width="${n}" height="${n}" fill="${o}" rx="${.1*n}"/><text x="50%" y="50%" dy=".1em" fill="#fff" font-family="system-ui,sans-serif" font-size="${.4*n}" font-weight="600" text-anchor="middle" dominant-baseline="central">${l}</text></svg>`;return`data:image/svg+xml,${encodeURIComponent(s)}`}])},891567,e=>{let t={name:"plastship GmbH",street:"Auf der Lind 10",postalCode:"65529",locality:"Waldems",region:"Hessen",countryCode:"DE",geo:{lat:50.248828,lon:8.309024}};e.s(["Y",0,t,"_",0,{info:"info@plastship.com",team:"team@plastship.com"},"h",0,{central:{e164:"+4961265898010",national:"06126 58980-10",international:"+49 6126 58980-10"}},"F",0,"contact_click","W",0,function(e=t){return`${e.street}, ${e.postalCode} ${e.locality}`}])},206702,e=>{var t=e.i(427006);let a=t.r.filter(e=>"admin"!==e),r=[];function i(e){return"string"!=typeof e?r:t.A[e]??r}function n(e){return"string"==typeof e&&t.N.includes(e)}function l(e,t){if(void 0===e)return[];if(!Array.isArray(e))return null;let a=[];for(let r of e){if("string"!=typeof r||!t.includes(r))return null;a.includes(r)||a.push(r)}return a}e.s(["J",0,a,"Y",0,n,"d",0,function(e){if(!e||"object"!=typeof e||Array.isArray(e))return null;let{role:r,staffTags:o,modules:s}=e;if("string"!=typeof r||!a.includes(r))return null;let d=l(o,t.O),c=l(s,t.S);return d&&c?{role:r,staffTags:d.filter(e=>i(r).includes(e)),modules:n(r)?c:[]}:null},"r",0,i])},974924,e=>{let t=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;e.s(["d",0,20,"x",0,function(e){return"string"==typeof e&&t.test(e)},"W",0,function(e){return e.trim().toLowerCase()}])},918274,e=>{let t="(?:[a-z0-9]{10,40}|[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})";RegExp(`^${t}$`),e.s(["Y",0,1048576,"p",0,["image/jpeg","image/png","image/webp"],"k",0,512,"I",0,t])},475352,e=>{var t=e.i(918274);let a=RegExp(`^\\/api\\/profile-picture\\/${t.I}\\/(\\?v=\\d+)?$`);e.s(["f",0,function(e){return"string"==typeof e&&a.test(e)}])},635647,e=>{var t=e.i(974924),a=e.i(891567),r=e.i(854101);let i=/^\+?[\d\s()./–-]+$/,n=e=>`${e.lat},${e.lon}`,l=e=>e.replace(/\s+/g," ").trim(),o=e=>Number(e.toFixed(6));function s(e){return!!e&&Number.isFinite(e.lat)&&Number.isFinite(e.lon)&&90>=Math.abs(e.lat)&&180>=Math.abs(e.lon)}e.s(["a",0,function(e){let t=l(e??"").toLowerCase();if(!t)return;let{street:r,postalCode:i}=a.Y;return t.includes(r.toLowerCase())&&t.includes(i)?{...a.Y.geo}:void 0},"c",0,function(e,a){let r="string"==typeof e?e.trim():"";if(!(0,t.x)(r))return null;let i=a?.trim();return i?`mailto:${r}?subject=${encodeURIComponent(i)}`:`mailto:${r}`},"n",0,function(e,t){if(!e)return null;let a=l(e.query),r=s(e.geo)?e.geo:void 0;if(!a&&!r)return null;if("string"==typeof t&&/iPhone|iPad|iPod|Macintosh/.test(t)){let e,t;return e=l(a),t=[],e&&t.push(`q=${encodeURIComponent(e)}`),r&&t.push(`ll=${n(r)}`),`https://maps.apple.com/?${t.join("&")}`}if("string"==typeof t&&/Android/i.test(t)){let e;return e=r?n(r):"0,0",`geo:${e}?q=${encodeURIComponent(l(a))}`}return null},"W",0,function(e,t){if(!e)return null;let a=l(e.query).slice(0,300),i=s(e.geo)?e.geo:void 0;if(!a&&!i)return null;let n=[];i&&n.push(`lat=${o(i.lat)}`,`lon=${o(i.lon)}`),a&&n.push(`q=${encodeURIComponent(a)}`);let d=`/map/?${n.join("&")}`;return t?(0,r.N)(d,t):d},"R",0,function(e){let t=l(e.get("q")??"").slice(0,300),a=e.get("lat"),r=e.get("lon"),i=null!==a&&""!==a.trim()?Number(a):0/0,n=null!==r&&""!==r.trim()?Number(r):0/0,d=s({lat:i,lon:n})?{lat:o(i),lon:o(n)}:void 0;return t||d?d?{query:t,geo:d}:{query:t}:null},"A",0,function(e){let t=function(e){let t;if("string"!=typeof e)return null;let a=e.trim();if(!a||!i.test(a))return null;let r=a.replace(/^(\+\d{1,3})\s*\(0\)/,"$1"),n=r.replace(/\D/g,"");if(r.startsWith("+"))t=`+${n}`;else if(n.startsWith("00"))t=`+${n.slice(2)}`;else{if(!n.startsWith("0"))return null;t=`+49${n.slice(1)}`}let l=t.length-1;return l<6||l>15||t.startsWith("+0")?null:t}(e);return t?`tel:${t}`:null}])}])})();