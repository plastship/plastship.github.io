(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,569584,e=>{"use strict";var t=e.i(843476),a=e.i(271645);e.i(315481);var i=e.i(10003),n=e.i(997053),r=e.i(912598),l=e.i(954616);e.i(821194);var s=e.i(99222),_=e.i(858350),d=e.i(145896),o=e.i(862078),c=e.i(164223);e.i(849871);var u=e.i(352706);e.i(113466);var p=e.i(295735),f=e.i(266027),g=e.i(501496),m=e.i(218595),h=e.i(137927);e.i(699779);var y=e.i(929842),b=e.i(703089);e.i(898674);var v=e.i(645433);e.i(339806);var k=e.i(946049);e.i(36380);var w=e.i(285393),x=e.i(825969);e.i(418124);var P=e.i(259808);e.i(805885);var T=e.i(535004),I=e.i(840637);e.i(101316);var S=e.i(139418),A=e.i(727578),j=e.i(197152),C=e.i(616789),D=e.i(894113),N=e.i(765691),M=e.i(787766),K=e.i(223963),L=e.i(591720),E=e.i(996252);e.i(622379);var V=e.i(818250),F=e.i(555508);e.i(340133);var O=e.i(252869),z=e.i(430055),$=e.i(468312),B=e.i(251604),R=e.i(354477);e.i(170123);var U=e.i(730235),q=e.i(882109),Z=e.i(408797),Q=e.i(24024),H=e.i(887880),G=e.i(378844),W=e.i(970700),J=e.i(149696),Y=e.i(409643);let X={Order:[{id:"kopfdaten",label:"Kopfdaten & Status",fields:["Referenznummer_plastship__c","Owner_Name__c","Auftragsrichtung__c","Status","ContractId","Fakturierungsstatus__c","Keine_Ausgangsrechnung_n_tig__c","Keine_Ausgangsrechnung_Grund__c","Type","RIGK_Disponummer__c","PoNumber"]},{id:"parteien",label:"Relevante Parteien & Kontakte",fields:["AccountId","CustomerAuthorizedById","Produktion_Delivery__c","Delivery_Site__c","Ansprechpartner_Transport_Lieferstelle__c","Lieferant__c","Zust_ndiger_Kontakt_Lieferant__c","Produktionsstandort__c","Loading_Site__c","Ansprechpartner_Transport_Ladestelle__c","Transporteur_NEU__c","Transporteur_Ansprechpartner_NEU__c"]},{id:"auftragsdetails",label:"Auftragsdetails & Vorgaben",fields:["Verpackung__c","Vorlage_Bestellung_Transportart__c","Vorlage_AB_Mindestladegew__c","Vorlage_Bestellung_Mindestladegewicht__c","AVV_Nummer__c","Incoterm__c","Incoterm_Einkauf__c"]},{id:"termine",label:"Termine & Logistik",fields:["EffectiveDate","Datum_Abholung_NEU__c","Datum_ETA_NEU__c","Datum_tats_Anlieferung_NEU__c","Truck_Nr__c","Anweisungen_Transporteur_Ladestelle__c","Anweisungen_Transporteur_Entladestelle__c","Transportpreis__c"]},{id:"mengen",label:"Mengen & Abrechnungsvorbereitung",fields:["TotalAmount","Gesamtmarge__c","Liefermenge__c","Tats_chliche_Liefermenge__c","Rechnungen_pr_fen__c","Positionen_offen__c","Betrag_Ausgangsrechnungen_Kunde__c","Betrag_Eingangsrechnungen_Lieferant__c","Betrag_Eingangsrechnungen_Sales_Agent__c","Betrag_Eingangsrechnungen_Sonstige__c","Betrag_Eingangsrechnungen_Transporteur__c","Betrag_Rechnung_Nachlass_Kunde__c","Betrag_Rechnung_Nachlass_Lieferant__c","Betrag_Vorkasse_gezahlt__c"]},{id:"dokumente",label:"Dokumenten-Tracking",fields:["Document_Order_attached__c","Document_Transport_Order_attached__c","Document_Delivery_Note_attached__c","Document_Weighing_Note_Supplier_attached__c","Document_Weighing_Note_Customer_attached__c"]}],Account:[{id:"stammdaten",label:"Stammdaten",fields:["OwnerId","Name","Industry","Verh_ltnis__c","Description","LastModifiedDate","LastActivityDate","LastViewedDate"]},{id:"raten",label:"Informationsraten",fields:["TotalInformation_rate__c","AccountInformation_rate__c","ResearchInformation_rate__c","InvoiceInformation_rate__c","ContactInformation_rate__c"]},{id:"zaehler",label:"Zähler",fields:["Count_Dienstleistungsmonitor__c","Count_Produktionsstandort__c","Count_Audits__c","Count_Certificates__c"]},{id:"dienstleistungsmonitor",label:"Dienstleistungsmonitor",fields:["KISS_Kunde__c","Kunde_Werksentsorgung__c","Kunde_Materialeinkauf__c","Transporteur__c","Kunde_Partnermodell__c","Kunde_Zertifizierung__c","Dienstleister_Sonstige__c","Kooperationspartner__c","Zugesagtes_KISS_Kontingent__c","Anzahl_KISS_Pr_fungen_avisiert__c","Kunde_Materialpr_fung__c","Kunde_Materialverkauf__c","Dienstleister_Lohn__c","Kunde_Digitale_Services__c","Kunde_Beratung__c","Agent__c"]}],Bedarfe__c:[{id:"kopfdaten",label:"Kopfdaten",fields:["OwnerId","Name","Beschreibung_Bedarf__c","Account__c","Bedarfsstatus__c","Count_Material_Proposal__c","Projekt__c","Monatsbedarf_t__c","Zielpreis__c"]},{id:"material",label:"Material",fields:["Materialkategorie__c","Hauptpolymer__c","Materialtyp__c","Materialfarbe__c","Anwendung__c","F_llstoff_Text__c"]},{id:"kennwerte",label:"Kennwerte",fields:["MFR_Min__c","MFR_Max__c","MFR_Temp__c","MFR_kg__c","Dichte_Min__c","Dichte_Max__c","Aschegehalt_Max__c","Korngr_e_mm_Max__c","Kerbschlagzaehigkeit_Min__c","Zug_E_Modul_Min__c"]},{id:"aktivitaet",label:"Aktivität",fields:["LastModifiedDate","LastActivityDate","LastViewedDate"]}],Product2:[{id:"kopfdaten",label:"Kopfdaten",fields:["Sales_Intent__c","ProductCode","Name","Trade_Name__c","Materialkategorie__c","Platform_Price__c","Amount_monthly__c","Tonnage_per_truck__c"]},{id:"material",label:"Material",fields:["Main_polymer__c","Material_type__c","Rezyklatdefinition__c","Material_colour__c","Filler_Material_Text__c","Foreign_Polymers_Text__c","Contaminants_Text__c","Standard_Packaging__c"]},{id:"abfallfraktion",label:"Abfallfraktion",fields:["Abfallfraktionen__c","Abfallfraktion_Zuordnung_Typ__c","Abfallfraktion_Kunststoff__c","Abfallfraktion_Herkunft__c"]},{id:"kennwerte",label:"Kennwerte & Labor",fields:["MFR_Min__c","MFR_Test_Standard_ISO_1133__c","MFR_Temp__c","MFR_kg__c","Dichte_Min__c","Dichte_Test_Standard_ISO_1183__c","Aschegehalt_Min__c","Aschegehalt_Test_Standard_ISO_3451__c","Korngr_e_mm_Min__c","Korngr_e_mm__c","Kerbschlagzaehigkeit_Min__c","Kerbschlagz_higkeit_Charpy__c","Zug_E_Modul_Min__c","Zug_E_Modul__c","Abweichende_Laborwerte_gefunden__c","Datum_letzter_Labortest__c"]},{id:"verknuepfungen",label:"Verknüpfungen",fields:["Account__c","Produktionsstandort__c","Projekt__c","Count_Material_Proposal__c","LastModifiedDate","LastViewedDate"]}],Material_Proposal__c:[{id:"kopfdaten",label:"Kopfdaten & Status",fields:["OwnerId","Date__c","Follow_Up_Date__c","Status__c","Projekt__c","F_r_Bedarf__c"]},{id:"produkt",label:"Produkt & Parteien",fields:["Product__c","Product_Code__c","Product_Category__c","Supplier__c","Loading_Location__c","Carrier__c","Account__c","Delivery_Location__c","Delivery_Terms_Offer__c"]},{id:"preise",label:"Preise & Mengen",fields:["Purchasing_price_per_ton__c","Transport_Price_per_ton__c","Total_Transport_Price__c","Margin_per_ton__c","Sales_Price_per_ton__c","Tonnage_per_truck__c","Amount_monthly_t_offered__c"]},{id:"muster",label:"Muster & Feedback",fields:["Sample_Order_from_Supplier__c","Sample_Sending_to_Account__c","Feedback_Date__c","Negative_Feedback_Reason_Category__c","Feedback__c"]},{id:"aktivitaet",label:"Aktivität",fields:["LastModifiedDate","LastActivityDate","LastViewedDate"]}],Abrechnung__c:[{id:"kopfdaten",label:"Kopfdaten & Kategorisierung",fields:["Name","Belegnummer__c","Originalbeleg_Herkunft__c","Eingangsdatum_plastship__c","Rechnungstyp__c","Kategorie__c","Kostenart__c","Rechnungssteller_Empf_nger__c","Status_der_Abrechnung__c"]},{id:"verknuepfungen",label:"Verknüpfungen",fields:["Auftrag__c","Account__c","Vertrag__c","Kostenstelle__c","Kontakt_bergabe__c","Sample_Sending__c","Duplicate_Of__c","Weiterbelastet_durch_Abrechnung__c"]},{id:"betraege",label:"Beträge & Steuern",fields:["Rechnungsbetrag__c","Ust__c","Rechnungsbetrag_brutto__c","Rechnungsbetrag_Bericht__c","R_ckzahlung_RIGK__c","SOLL_Betrag__c","Differenz_SOLL_IST__c"]},{id:"rechnungsinhalt",label:"Rechnungsinhalt",fields:["Leistungsdatum__c","Rechnungstext__c"]},{id:"termine",label:"Termine, Zahlung & Notizen",fields:["Belegdatum__c","Belegdatum_MonatJahr__c","Zahlungsziel__c","Datum_gezahlt__c","Zahlungsart__c","Notiz__c"]},{id:"freigabe",label:"Prüfung & Freigabe",fields:["Offene_Punkte__c","Zu_pr_fen_durch__c","Gepr_ft_und_in_Ordnung__c","Freigabe__c","Freigabe_f_r_Sandra__c","Sichtbar_f_r_Buchhaltung__c"]}],Sample_Sending__c:[{id:"kopfdaten",label:"Kopfdaten & Identifikation",fields:["Name","Auftrags_ID_Lieferschein__c","Typ__c","Status__c","OwnerId","Datum_Bestellung__c","Datum_Versand__c"]},{id:"verknuepfungen",label:"Verknüpfungen",fields:["Projekt__c","Produkt__c","Opportunity__c","Angebot__c","Abrechnung__c"]},{id:"herkunft",label:"Herkunft (Ladestelle)",fields:["Load_from__c","Loading_Produktion__c","Loading_Site__c"]},{id:"ziel",label:"Ziel (Lieferstelle)",fields:["Deliver_to__c","Delivery_Produktion__c","Delivery_Site__c","Delivery_Produktion_Land__c","Kontakt_Anlieferung__c"]},{id:"transporteur",label:"Transporteur",fields:["Carrier__c","Carrier_Contact__c","Carrier_E_Mail__c","Carrier_Phone__c","Transportkosten__c"]},{id:"menge",label:"Menge & Verpackung",fields:["Amount_in_kg__c","Anzahl_BigBags__c","Anzahl_Paletten_Holz__c","Anzahl_Verpackung_Beutel__c","Anzahl_Verpackung_Kartons__c","Sonst_kg_Verpackung_Kunststoff__c"]},{id:"kosten",label:"Kosten & Abrechnung",fields:["Materialkosten__c","Gesamtkosten__c","Invoice_to_Customer__c"]},{id:"referenz",label:"Referenz",fields:["Notiz_Referenz_plastship_ID__c"]}],Materialanalyse__c:[{id:"kopfdaten",label:"Kopfdaten & Identifikation",fields:["Name","Analysetyp__c","Datensatztyp__c","Status__c","OwnerId","Datum_Auftrag__c","Analysezeitpunkt__c","Ergebnis_ben_tigt_bis__c"]},{id:"verknuepfungen",label:"Verknüpfungen",fields:["Material_ID__c","Polymer__c","Produkt_ID__c","Monitored_Material__c","Monitored_Material_Created__c","Monitored_Material_Last_Changed__c","Sample_Sending__c","Auftragsnummer_plastship__c","Dienstleister__c"]},{id:"qualitaet",label:"Qualitäts-Kategorien & Optik",fields:["Kategorie_f_r_Qualit_tseinsch_tzung__c","Optical_Recyclate_Share__c","Optical_Temperature_Category__c"]},{id:"kosten",label:"Kosten & Abrechnung",fields:["Betrag_Kosten_Analyse__c","Invoice_Number__c","Invoiced__c","PO_Number__c"]},{id:"proben",label:"Proben-Informationen",fields:["Batchnummer__c","Zeitpunkt_Musterentnahme__c"]},{id:"ergebnis",label:"Ergebnis & Notizen",fields:["Ergebnis__c","Notiz_Beschreibung__c"]},{id:"sichtbarkeit",label:"Sichtbarkeit & Steuerung",fields:["Sichtbar_f_r_Dienstleister__c"]}],Produktionsstandort__c:[{id:"standort",label:"Kopfdaten & Standort",fields:["Name","Account__c","Ist_plastship_Lager__c","Ort__c","PLZ__c","Land__c","Strasse__c","Strasse_Nummer__c","PStandort_lat__c","PStandort_long__c"]},{id:"lager",label:"Lagerkapazität & Kosten",fields:["Lagerkapazit_t_zugesagt__c","Lagermenge_Gesamt__c","Anzahl_WL_Eintr_ge__c","Kosten_pro_Stellplatz_pro_Monat__c","Kosten_Ein_Auslagerung_pauschal__c","Aktuelle_Monatskosten_Bestand__c"]},{id:"kontakt",label:"Kontakt & Logistik",fields:["Verantwortlicher_Lieferung__c","Delivery_Times__c","Ust_ID__c"]}],Case:[{id:"kopfdaten",label:"Kopfdaten & Qualifizierung",fields:["CaseNumber","Subject","Status","Priority","Type","Origin","OwnerId","Wiedervorlage__c","Case_Qualified__c","Case_Complete__c","Case_Researched__c"]},{id:"kontakt",label:"Kontakt & Account",fields:["AccountId","ContactId","ContactEmail","ContactPhone","SuppliedEmail","SuppliedName","SuppliedCompany"]},{id:"eskalation",label:"Eskalation & übergeordneter Vorgang",fields:["IsEscalated","ParentId"]},{id:"verknuepfungen",label:"Verknüpfungen zu Kernobjekten",fields:["Auftrag__c","Abrechnung__c","Onboarding__c","Opportunity__c","Bedarfe__c","Produkt__c"]},{id:"inhalt",label:"Inhalt & Abschluss",fields:["Description","Description_of_Actions_taken__c","Comments","ClosedDate"]}]};var ee=e.i(572143),et=e.i(484233);e.i(913622);var ea=e.i(221622),ei=e.i(456340);let en=n.U.div.withConfig({displayName:"EntityPreviewFields.styles__FieldRow",componentId:"sc-92dc89b8-0"})`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 6px 0;
  gap: 12px;
  border-bottom: 1px solid ${e=>e.theme.palette.default.greyLight};

  &:last-child {
    border-bottom: none;
  }
`,er=n.U.div.withConfig({displayName:"EntityPreviewFields.styles__HighlightFieldBox",componentId:"sc-92dc89b8-1"})`
  margin: 8px 0 12px;
  padding: 10px 12px;
  border-radius: 8px;
  border: 1px solid ${({theme:e})=>e.palette.status.warning.text};
  background: ${({theme:e})=>e.palette.status.warning.bg};
`,el=n.U.button.withConfig({displayName:"EntityPreviewFields.styles__SectionHeader",componentId:"sc-92dc89b8-2"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border: none;
  background: transparent;
  /* #1748: <button> nimmt sonst die Browserfarbe (schwarz) statt der Textfarbe der Seitenleiste */
  color: inherit;
  padding: 10px 0 4px;
  cursor: pointer;
  text-align: left;
`,es=n.U.span.withConfig({displayName:"EntityPreviewFields.styles__SectionChevron",componentId:"sc-92dc89b8-3"})`
  display: inline-flex;
  transition: transform 0.15s ease;
  transform: rotate(${({$collapsed:e})=>e?"-90deg":"0deg"});
  color: ${({theme:e})=>e.palette.default.greyDark};
  font-size: 11px;
`,e_=n.U.div.withConfig({displayName:"EntityPreviewFields.styles__SectionBody",componentId:"sc-92dc89b8-4"})`
  margin-bottom: 4px;
`,ed={Auftrag__c:[{key:"OrderNumber",label:"Nummer"},{key:"Status",label:"Status"},{key:"Type",label:"Typ"},{key:"EffectiveDate",label:"Datum",format:"date"},{key:"TotalAmount",label:"Betrag",format:"currency"}],Supplier_audit__c:[{key:"Name",label:"Name"},{key:"Status__c",label:"Status"},{key:"CreatedDate",label:"Erstellt",format:"date"}]};function eo({entityType:e,entityId:i,entityPath:n,record:l,highlightField:_}){let{tr:o}=(0,s.f)(),c=(0,F.f)(),u=(0,d.V)(),p=(0,r.d)(),{userContext:h}=(0,Q.f)(),{quickOpen:v}=(0,H.f)(),k=M.y[e],w=(k?B.$[k]:void 0)??n,{data:x}=(0,f.f)({queryKey:["preview-record",e,i],enabled:!!w,queryFn:async()=>{let e=await g.k.get(`/salesforce/${w}/${i}/`);return e.data?.data??e.data??{}}}),P=(0,a.useMemo)(()=>({...l,...x??{}}),[l,x]),T=X[e],I=(0,a.useMemo)(()=>{if(T||!h)return;let t=(0,ee.G)(e,h,P);if(!t)return;let a=t.sections.map(e=>({id:e.id,label:u.text(e.label,e.labelKey),fields:e.fields.map(e=>e.apiName)})).filter(e=>e.fields.length>0);return a.length>0?a:void 0},[T,e,h,P,u]),S=h?.role,A=(0,a.useMemo)(()=>{if(!T)return;let t=(0,R.Z)(e);return T.map(e=>({...e,label:u.text(e.label),fields:e.fields.filter(e=>(0,ee.o)(t,e,S))})).filter(e=>e.fields.length>0)},[T,e,S,u])??I,j=t=>{let a=function(e,t){for(let a of(0,R.Z)(e)?.sections??[])for(let e of a.fields??[])if(e.apiName===t)return e}(e,t);return a?u.field(a):void 0},C=(0,a.useMemo)(()=>h?(0,R.a)(e,h.role):[],[e,h]),[D,N]=(0,a.useState)(null),K=(0,a.useCallback)(async(t,a)=>{try{await g.k.patch(`/salesforce/${w}/${i}/`,{[t]:a}),N(null),m.c.success(o("common.saveSuccess",{defaultValue:"Gespeichert"})),p.invalidateQueries({queryKey:["preview-record",e,i]}),k&&p.invalidateQueries({queryKey:[B.t[k]]}),p.invalidateQueries({queryKey:["dashboard"]})}catch(e){console.error("[EntityPreviewFields] field save failed:",e),m.c.error(o("common.saveError",{defaultValue:"Speichern fehlgeschlagen"}))}},[w,i,e,p,k,o]),L=(0,z.Q)(e),E=L?(0,Z.f)(L.entityType):void 0,V=!!L&&!!h&&!!E&&(0,q.A)(h,E,"edit")&&(0,R.a)(L.apiName,h.role).includes(L.field),ec=(0,a.useCallback)(async t=>{L&&(await (0,$.f)({entityPath:L.entityPath,id:i,data:{[L.field]:t}}),p.invalidateQueries({queryKey:[B.t[L.entityType]]}),p.invalidateQueries({queryKey:["preview-record",e,i]}),p.invalidateQueries({queryKey:["dashboard"]}),m.c.success(o("quickStatus.updateSuccess",{defaultValue:"Status aktualisiert"})))},[L,i,e,p,o]),[eu,ep]=(0,a.useState)(!1),ef=_?j(_):void 0,eg=!!_&&!!h&&C.includes(_),em=P[_??""],eh=eu&&"Vorlage_Labels_Produktbeschreibung__c"===_&&(null==em||""===em)?P.Produkt__r?.Trade_Name__c:void 0,[ey,eb]=(0,a.useState)(new Set),ev=(a,n)=>(0,t.jsxs)(en,{children:[(0,t.jsx)(b.p,{variant:b.g.caption,children:n}),(0,t.jsx)(O.f,{entityType:e,value:"string"==typeof P[a]?P[a]:null,onStatusChange:ec,dataTestId:`preview-quick-status-${a}`},i)]},a),{qualificationFields:ek}=(0,et.I)(e),ew=!(0,et.M)(h?.role),ex=e=>{let a=(e=>{if(V&&L&&e===L.field)return ev(e,j(e)?.label??u.fieldLabel(e));let a=j(e),i=P[e],n=a?.fieldType??("boolean"==typeof i?"boolean":(0,J.n)(i)?"lookup":"number"==typeof i?/Betrag|Amount|Preis|[Mm]arge/.test(e)?"currency":"number":"string"==typeof i&&/^\d{4}-\d{2}-\d{2}/.test(i)?i.length>10?"datetime":"date":"text"),r=C.includes(e),l="lookup"===n,s=l&&"string"==typeof i&&i?(0,G.f)(P,e):void 0,_=l&&"string"==typeof i&&(0,W.f)(i)?i:void 0;return(0,t.jsx)(U.f,{compact:!0,fieldName:e,label:a?.label??u.fieldLabel(e),fieldType:n,value:i,isEditing:D===e,isEditable:r,readOnly:!r,onStartEdit:()=>N(e),onConfirm:K,onCancel:()=>N(null),options:a?.picklistOptions,lookupObjectType:a?.lookupObjectType,lookupFilter:a?(0,Y.d)(a,P):void 0,initialLookupDisplay:s?.name,onLabelClick:_?()=>v(_,s?.related):void 0,currencyCode:a?.currencyCode,dataTestId:`preview-field-${e}`},e)})(e),i=ew?ek.get(e):void 0;return i?(0,t.jsxs)(ei.O,{"data-testid":`preview-qualification-${e}`,children:[(0,t.jsx)(ea.f,{fieldName:e,qualification:{criteria:i,value:P[e],record:P},testIdPrefix:"preview-"}),a]},e):a},eP=ed[e]||[{key:"Name",label:"Name"}];return(0,t.jsxs)(t.Fragment,{children:[_&&(0,t.jsxs)(er,{"data-testid":"preview-highlight-field",children:[(0,t.jsx)(y.K,{importance:y.D.h5,children:o("entityPreview.missingField",{defaultValue:"Fehlendes Dokument-Feld"})}),(0,t.jsx)(U.f,{fieldName:_,label:ef?.label??u.fieldLabel(_),fieldType:ef?.fieldType??"text",value:eh??P[_],isEditing:eu,isEditable:eg,readOnly:!eg,onStartEdit:()=>ep(!0),onConfirm:async(e,t)=>{await K(e,t),ep(!1)},onCancel:()=>ep(!1),options:ef?.picklistOptions,lookupObjectType:ef?.lookupObjectType,currencyCode:ef?.currencyCode,dataTestId:"preview-highlight-editable"})]}),A?A.map(e=>{let i=ey.has(e.id);return(0,t.jsxs)(a.default.Fragment,{children:[(0,t.jsxs)(el,{type:"button",onClick:()=>{let t;return t=e.id,eb(e=>{let a=new Set(e);return a.has(t)?a.delete(t):a.add(t),a})},"data-testid":`preview-section-${e.id}`,children:[(0,t.jsx)(y.K,{importance:y.D.h5,children:e.label}),(0,t.jsx)(es,{$collapsed:i,children:"▼"})]}),!i&&(0,t.jsx)(e_,{children:e.fields.map(ex)})]},e.id)}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(y.K,{importance:y.D.h5,dataTestId:"preview-details-headline",children:o("entityPreview.details",{defaultValue:"Details"})}),eP.map(e=>{var a,i,n;let r=o(`entityPreview.legacyField.${e.key}`,{defaultValue:e.label});return V&&L&&e.key===L.field?ev(e.key,r):(0,t.jsxs)(en,{children:[(0,t.jsx)(b.p,{variant:b.g.caption,children:r}),(0,t.jsx)(b.p,{variant:b.g.body,children:(a=P[e.key],i=e.format,n={yes:o("common.yes",{defaultValue:"Ja"}),no:o("common.no",{defaultValue:"Nein"})},null==a||""===a?"—":"date"===i&&"string"==typeof a?c.dateWith(a,{day:"2-digit",month:"2-digit",year:"numeric"}):"currency"===i&&"number"==typeof a?c.currency(a,{minimumFractionDigits:0,maximumFractionDigits:2}):"boolean"===i?a?n.yes:n.no:String(a))})]},e.key)})]})]})}var ec=e.i(293655);e.i(481940);var eu=e.i(914602);let ep=n.U.div.withConfig({displayName:"PreviewRelatedLists.styles__Root",componentId:"sc-daef3568-0"})`
  margin-top: 1rem;
  min-width: 0;

  & > * {
    margin-bottom: 1rem;
  }

  table {
    font-size: 0.85rem;
  }
`;function ef({entityType:e,entityId:i,entityPath:n,record:r}){let{userContext:l}=(0,Q.f)(),s=M.y[e],_=(s?B.$[s]:void 0)??n,{data:o}=(0,f.f)({queryKey:["preview-record",e,i],enabled:!!_,queryFn:async()=>{let e=await g.k.get(`/salesforce/${_}/${i}/`);return e.data?.data??e.data??{}}}),c=(0,a.useMemo)(()=>({...r,...o??{}}),[r,o]),{relatedLists:u}=(0,d.e)(e,l??{role:"user"},c),p=(0,a.useMemo)(()=>l?u.filter(e=>e.showInPreview):[],[u,l]);return 0===p.length?null:(0,t.jsx)(ep,{"data-testid":"preview-related-lists",children:p.map(a=>{let n=(e=>{let t=c[e.relationshipName];if(t&&"object"==typeof t&&"records"in t){let e=t.records;return Array.isArray(e)?e:[]}return Array.isArray(t)?t:[]})(a),r=n.length>0?String(n[0].Id??""):"",l=(r?(0,ec.K)(r):void 0)??a.relatedEntityType??(0,ec.u)(a.relationshipName)??null,s={...a,fields:a.previewFields??a.fields,inlineEdit:!1,showCreateButton:!1};return delete s.addExisting,(0,t.jsx)(eu.f,{config:s,records:n,entityId:i,entityType:e,relatedEntityType:l,hideCreateButton:!0,parentRecord:c,dataTestId:`preview-related-${a.relationshipName}`},a.relationshipName)})})}var eg=e.i(464862);e.i(418368);var em=e.i(371733),eh=e.i(510965);let ey=n.U.div.withConfig({displayName:"PreviewTasks.styles__TasksHeader",componentId:"sc-8ed1c43d-0"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 4px;
`,eb=n.U.div.withConfig({displayName:"PreviewTasks.styles__TaskList",componentId:"sc-8ed1c43d-1"})`
  display: flex;
  flex-direction: column;
  border: 1px solid ${e=>e.theme.palette.default.greyLight};
  border-radius: 6px;
  margin-bottom: 16px;
  box-sizing: border-box;
`,ev=n.U.div.withConfig({displayName:"PreviewTasks.styles__TaskRow",componentId:"sc-8ed1c43d-2"})`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 6px 10px;
  min-width: 0;

  & + & {
    border-top: 1px solid ${e=>e.theme.palette.default.greyLight};
  }
`,ek=n.U.div.withConfig({displayName:"PreviewTasks.styles__DoneField",componentId:"sc-8ed1c43d-3"})`
  flex: 0 0 auto;

  & > div {
    width: auto;
    padding: 0;
  }

  ${eh.H} + span {
    display: none;
  }
`,ew=n.U.div.withConfig({displayName:"PreviewTasks.styles__TaskMain",componentId:"sc-8ed1c43d-4"})`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
`,ex=n.U.span.withConfig({displayName:"PreviewTasks.styles__TaskSubject",componentId:"sc-8ed1c43d-5"})`
  font-size: 13px;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,eP=n.U.span.withConfig({displayName:"PreviewTasks.styles__TaskMeta",componentId:"sc-8ed1c43d-6"})`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
  color: ${e=>e.theme.palette.default.greyDark};
`,eT=n.U.span.withConfig({displayName:"PreviewTasks.styles__DueTag",componentId:"sc-8ed1c43d-7"})`
  font-size: 11px;
  font-weight: ${e=>e.$overdue?600:400};
  color: ${e=>e.$overdue?e.theme.palette.status.error.text:"inherit"};
`,eI=n.U.div.withConfig({displayName:"PreviewTasks.styles__TaskEmpty",componentId:"sc-8ed1c43d-8"})`
  padding: 8px 10px;
  font-size: 12px;
  color: ${e=>e.theme.palette.default.greyDark};
`,eS=n.U.div.withConfig({displayName:"PreviewTasks.styles__TaskMore",componentId:"sc-8ed1c43d-9"})`
  padding: 6px 10px;
  font-size: 11px;
  color: ${e=>e.theme.palette.default.greyDark};
  border-top: 1px solid ${e=>e.theme.palette.default.greyLight};
`,eA=e=>e?Date.parse(e):1/0;function ej({entityId:e,onCreateTask:i,canComplete:n=!0,showOwner:_=!0}){let{tr:d}=(0,s.f)(),o=(0,r.d)(),{data:c,isLoading:u}=(0,f.f)({queryKey:["preview-tasks",e],enabled:!!e,staleTime:3e4,queryFn:async()=>(await g.k.get(`/salesforce/record/${e}/tasks/`)).data.data??[]}),p=(0,a.useMemo)(()=>(c??[]).filter(e=>!e.IsClosed&&"Completed"!==e.Status).sort((e,t)=>eA(e.ActivityDate)-eA(t.ActivityDate)),[c]),h=p.slice(0,5),b=(0,l.f)({mutationFn:async e=>{await g.k.patch(`/salesforce/task/${e}/`,{Status:"Completed"})},onSuccess:()=>{m.c.success(d("entityPreview.tasks.completed",{defaultValue:"Aufgabe erledigt"})),o.invalidateQueries({queryKey:["preview-tasks",e]}),o.invalidateQueries({queryKey:["dashboard"]}),o.invalidateQueries({queryKey:["salesforce-task"]})},onError:e=>{m.c.error(e.message||d("entityPreview.tasks.error",{defaultValue:"Aufgabe konnte nicht erledigt werden"}))}});return(0,t.jsxs)("div",{"data-testid":"preview-tasks","data-count":p.length,children:[(0,t.jsxs)(ey,{children:[(0,t.jsxs)(y.K,{importance:y.D.h5,dataTestId:"preview-tasks-headline",children:[d("entityPreview.tasks.title",{defaultValue:"Aufgaben"}),p.length>0?` (${p.length})`:""]}),i&&(0,t.jsx)(T._,{onClick:i,icon:(0,t.jsx)(eg.f,{}),tooltip:d("entityPreview.quickTask",{defaultValue:"Aufgabe erstellen"}),ariaLabel:d("entityPreview.quickTask",{defaultValue:"Aufgabe erstellen"}),color:I.f.PLUS,dataTestId:"preview-tasks-create"})]}),(0,t.jsxs)(eb,{children:[h.map(e=>(0,t.jsxs)(ev,{"data-testid":`preview-task-${e.Id}`,children:[n&&(0,t.jsx)(ek,{children:(0,t.jsx)(U.f,{fieldName:`done-${e.Id}`,label:d("entityPreview.tasks.done",{defaultValue:"Erledigt"}),hideLabel:!0,hideEditActions:!0,compact:!0,fieldType:"boolean",value:!1,isEditing:!0,isEditable:!0,onChange:(t,a)=>{!0!==a||b.isPending||b.mutate(e.Id)},dataTestId:`preview-task-done-${e.Id}`})}),(0,t.jsxs)(ew,{children:[(0,t.jsx)(ex,{title:e.Subject??"",children:e.Subject||"—"}),(0,t.jsxs)(eP,{children:[_&&e.OwnerId&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(v.f,{userId:e.OwnerId,name:e.Owner?.Name??void 0,size:18}),(0,t.jsx)("span",{"data-testid":`preview-task-owner-${e.Id}`,children:e.Owner?.Name??"—"})]}),(0,t.jsx)(eT,{$overdue:(e=>{if(!e)return!1;let t=new Date;return t.setHours(0,0,0,0),Date.parse(e)<t.getTime()})(e.ActivityDate),"data-testid":`preview-task-due-${e.Id}`,children:e.ActivityDate?(0,t.jsx)(em.S,{value:e.ActivityDate}):d("entityPreview.tasks.noDate",{defaultValue:"ohne Termin"})})]})]})]},e.Id)),!u&&0===p.length&&(0,t.jsx)(eI,{"data-testid":"preview-tasks-empty",children:d("entityPreview.tasks.empty",{defaultValue:"Keine offenen Aufgaben"})}),p.length>5&&(0,t.jsx)(eS,{"data-testid":"preview-tasks-more",children:d("entityPreview.tasks.more",{defaultValue:"+ {{n}} weitere in der Related List",n:p.length-5})})]})]})}var eC=e.i(720024);let eD={Case:"nav.cases",Order:"nav.orders",Bedarfe__c:"nav.requirements",Material_Proposal__c:"nav.materialProposals",Materialanalyse__c:"nav.materialAnalyses",Abrechnung__c:"nav.invoices",Sample_Sending__c:"nav.sampleSendings",Produktionsstandort__c:"nav.productionSites",Product2:"nav.products",Opportunity:"nav.opportunities",Account:"nav.accounts",Contact:"nav.contacts",Task:"nav.tasks",Projekt__c:"nav.projects",Onboarding__c:"nav.onboardings",Monitored_Material__c:"nav.monitoredMaterials",Sample_Feedback__c:"nav.sampleFeedbacks",Supplier_audit__c:"nav.supplierAudits",Kontakt_bergaben__c:"nav.contactHandovers",Unternehmenszertifikat__c:"nav.companyCertificates"},eN=n.U.div.withConfig({displayName:"EntityPreviewPanel__Panel",componentId:"sc-362acad2-0"})`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-width: 400px;
`,eM=n.U.div.withConfig({displayName:"EntityPreviewPanel__PanelHeader",componentId:"sc-362acad2-1"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  border-bottom: 1px solid ${e=>e.theme.palette.default.greyLight};
  background: linear-gradient(to left, #001a2c, #00416e);
  color: #ffffff;
`,eK=n.U.div.withConfig({displayName:"EntityPreviewPanel__HeaderLeft",componentId:"sc-362acad2-2"})`
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 0;
  flex: 1;
`,eL=(0,n.U)(i.NavLink).withConfig({displayName:"EntityPreviewPanel__EntityTypeLink",componentId:"sc-362acad2-3"})`
  display: block;
  font-size: 11px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.7);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  text-decoration: none;
  margin-bottom: 2px;

  &:hover {
    color: #ffffff;
    text-decoration: underline;
  }
`,eE=(0,n.U)(i.NavLink).withConfig({displayName:"EntityPreviewPanel__EntityNameLink",componentId:"sc-362acad2-4"})`
  display: block;
  font-size: 15px;
  font-weight: 600;
  color: #ffffff;
  word-break: break-word;
  overflow-wrap: break-word;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    color: #ffffff;
  }
`,eV=n.U.span.withConfig({displayName:"EntityPreviewPanel__EntityNameText",componentId:"sc-362acad2-5"})`
  display: block;
  font-size: 15px;
  font-weight: 600;
  color: #ffffff;
  word-break: break-word;
  overflow-wrap: break-word;
`,eF=n.U.span.withConfig({displayName:"EntityPreviewPanel__EntityTypeText",componentId:"sc-362acad2-6"})`
  display: block;
  font-size: 11px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.7);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 2px;
`,eO=n.U.div.withConfig({displayName:"EntityPreviewPanel__HeaderActions",componentId:"sc-362acad2-7"})`
  display: flex;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;
`,ez=n.U.div.withConfig({displayName:"EntityPreviewPanel__PanelBody",componentId:"sc-362acad2-8"})`
  flex: 1;
  overflow-y: auto;
  padding: 16px;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`,e$=n.U.div.withConfig({displayName:"EntityPreviewPanel__OwnerRow",componentId:"sc-362acad2-9"})`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 0;
`,eB=n.U.div.withConfig({displayName:"EntityPreviewPanel__FormGroup",componentId:"sc-362acad2-10"})`
  margin-bottom: 12px;
`,eR=n.U.textarea.withConfig({displayName:"EntityPreviewPanel__FormTextarea",componentId:"sc-362acad2-11"})`
  width: 100%;
  padding: 8px 10px;
  font-size: 13px;
  font-family: inherit;
  border: 1px solid ${e=>e.theme.palette.default.greyLight};
  border-radius: 4px;
  outline: none;
  box-sizing: border-box;
  resize: vertical;

  &:focus {
    border-color: ${e=>e.theme.palette.default.primary};
  }
`,eU=n.U.div.withConfig({displayName:"EntityPreviewPanel__ModalActions",componentId:"sc-362acad2-12"})`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 16px;
`;function eq(e){return(0,c.f)(e.Belegnummer__c,e.Name,e.Subject,e.CaseNumber,e.OrderNumber,e.OrderItemNumber,e.ContractNumber)}let eZ=({url:e,tooltip:i})=>{let{tr:n}=(0,s.f)(),r=(0,a.useRef)(null),[l,_]=(0,a.useState)(!1);return(0,t.jsx)("div",{ref:r,onMouseEnter:()=>_(!0),onMouseLeave:()=>_(!1),style:{marginBottom:"12px",position:"relative",width:"100%",aspectRatio:"4 / 3",backgroundImage:`url("${e}")`,backgroundSize:"cover",backgroundPosition:"center",backgroundColor:"#EEF1F4",borderRadius:"12px"},role:"img","aria-label":n("entityPreview.materialAria",{defaultValue:"Material"}),children:(0,t.jsx)(u.f,{content:i,isVisible:l,position:"bottom",anchorRef:r})})},eQ=({materialId:e,thumbnailUrl:a,tooltipReal:i,tooltipFallback:n})=>{let{data:r}=(0,f.f)({queryKey:["mm-cover-single",e],queryFn:async()=>e?(await g.k.get(`/material-vision/covers?materialIds=${encodeURIComponent(e)}`)).data:{covers:{}},enabled:!!e,staleTime:3e5}),l=e?r?.covers?.[e]:void 0;return l?(0,t.jsx)(eZ,{url:l.imageUrl,tooltip:l.imageTitle||i}):(0,t.jsx)(eZ,{url:a,tooltip:n})};e.s(["default",0,function({data:e,onClose:i}){var n;let c,{tr:u}=(0,s.f)(),f=(0,d.V)(),{label:F}=(0,_.f)(),O=(0,r.d)(),{entityType:z,entityId:$,entityPath:B,record:U,highlightField:Z}=e,[H,G]=(0,a.useState)(!1),[W,J]=(0,a.useState)("team"),[Y,X]=(0,a.useState)(""),et=F(eq(U)),ea=et.text,ei=U.OwnerId,en=U.Owner?.Name,er=eD[z],el=er?u(er):f.text((0,o.b)(z)?.entityLabel??z),es=L.V[z]||(B?`/${B}`:void 0),e_=B?`/${B}/${$}`:void 0,{openCreateModal:ed}=(0,D.E)(),ec=M.y[z],{userContext:eu}=(0,Q.f)(),ep=eu&&(0,q.A)(eu,"Task","view")?{view:!0,complete:(0,q.A)(eu,"Task","edit"),create:(0,q.A)(eu,"Task","create"),owner:(0,ee.o)((0,R.Z)("Task"),"OwnerId",eu.role)}:{view:!1,complete:!1,create:!1,owner:!1},eg=ep.create&&!!(ec&&K.j.Task?.[ec]),em=(0,a.useCallback)(()=>{ec&&ed({entityType:N.f.Task,parentEntityType:ec,parentEntityId:$,onSuccess:()=>{m.c.success(u("entityPreview.taskCreated",{defaultValue:"Aufgabe erstellt"})),O.invalidateQueries({queryKey:["preview-tasks",$]}),O.invalidateQueries({queryKey:["dashboard"]})}})},[ed,ec,$,O,u]),eh=(0,l.f)({mutationFn:async()=>{let e=Y.trim(),t=e?`${el}: ${ea}

${e}`:`${el}: ${ea}`,a={};(0,h.$)(a,`${h.D}~p.record`,ea),(0,h.$)(a,`${h.T}~p.entity`,el),(0,h.$)(a,`${h.T}~p.record`,ea),e&&(a[`${h.T}~p.note`]=e),await g.k.post("/notifications",{type:"info",titleKey:"notifications.shared.title",titleDefault:`${ea} wurde geteilt`,messageKey:e?"notifications.shared.messageWithNote":"notifications.shared.message",messageDefault:t,params:a,...e_?{link:e_}:{},audience:W})},onSuccess:()=>{m.c.success(u("entityPreview.shared",{defaultValue:"Mit Team geteilt"})),X(""),G(!1)},onError:e=>{m.c.error(e.message||u("entityPreview.shareError",{defaultValue:"Fehler beim Teilen"}))}});return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(eN,{"data-testid":"entity-preview-panel",children:[(0,t.jsxs)(eM,{children:[(0,t.jsxs)(eK,{children:[(0,t.jsxs)("div",{children:[(n=eu?.role,es&&("admin"!==(0,E.x)(es)||"admin"===n))?(0,t.jsx)(eL,{href:es,"data-testid":"preview-entity-type-link",children:el}):(0,t.jsx)(eF,{"data-testid":"preview-entity-type-text",children:el}),e_?(0,t.jsx)(eE,{href:e_,title:ea,"data-unnamed":et.unnamed||void 0,children:ea}):(0,t.jsx)(eV,{title:ea,"data-testid":"entity-preview-name-nolink","data-unnamed":et.unnamed||void 0,children:ea})]}),(0,t.jsx)(p.f,{entityType:z,record:U,detailData:U})]}),(0,t.jsxs)(eO,{children:[eg&&(0,t.jsx)(T._,{onClick:em,icon:(0,t.jsx)(A.f,{}),tooltip:u("entityPreview.quickTask",{defaultValue:"Aufgabe erstellen"}),ariaLabel:u("entityPreview.quickTask",{defaultValue:"Aufgabe erstellen"}),color:I.f.PLUS,dataTestId:"preview-action-task"}),(0,t.jsx)(T._,{onClick:()=>G(!0),icon:(0,t.jsx)(j.f,{}),tooltip:u("entityPreview.shareToTeam",{defaultValue:"Mit Team teilen"}),ariaLabel:u("entityPreview.shareToTeam",{defaultValue:"Mit Team teilen"}),color:I.f.INFO,dataTestId:"preview-action-share"}),(0,t.jsx)(V.f,{entityType:z,entityId:$,record:U,showCreate:!1,testIdPrefix:"preview-"}),(0,t.jsx)(T._,{onClick:i,icon:(0,t.jsx)(C.f,{}),tooltip:u("entityPreview.close",{defaultValue:"Schliessen"}),ariaLabel:u("entityPreview.close",{defaultValue:"Schliessen"}),color:I.f.DELETE,dataTestId:"entity-preview-close"})]})]}),(0,t.jsxs)(ez,{children:[ep.view&&(0,t.jsx)(ej,{entityId:$,onCreateTask:eg?em:void 0,canComplete:ep.complete,showOwner:ep.owner}),"Monitored_Material__c"===z&&(c=(0,eC.o)({farbe:U.Farbe__c?String(U.Farbe__c):null,form:U.Form__c?String(U.Form__c):null,defekte:U.Summe_Defekte__c?Number(U.Summe_Defekte__c):null,opacity:U.Avg_Opacity__c?Number(U.Avg_Opacity__c):null,materialId:$,seed:$,width:536,height:400}),(0,t.jsx)(eQ,{materialId:$||void 0,thumbnailUrl:c,tooltipReal:u("entityPreview.materialPhoto",{defaultValue:"Material photo"}),tooltipFallback:u("material3d.tooltip",{defaultValue:"3D-Darstellung des Materials"})})),ei&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(y.K,{importance:y.D.h5,dataTestId:"preview-owner-headline",children:u("entityPreview.owner",{defaultValue:"Verantwortlich"})}),(0,t.jsxs)(e$,{children:[(0,t.jsx)(v.f,{userId:ei,name:en,size:28}),(0,t.jsx)(b.p,{variant:b.g.body,children:en||"—"})]})]}),(0,t.jsx)(eo,{entityType:z,entityId:$,entityPath:B,record:U,highlightField:Z}),(0,t.jsx)(ef,{entityType:z,entityId:$,entityPath:B,record:U}),(0,t.jsx)(y.K,{importance:y.D.h5,dataTestId:"preview-system-headline",children:u("entityPreview.systemInfo",{defaultValue:"Systeminformationen"})}),(0,t.jsx)(S.f,{entityData:U,compact:!0})]})]}),(0,t.jsxs)(k.f,{isOpen:H,onClose:()=>G(!1),title:u("entityPreview.shareToTeam",{defaultValue:"Mit Team teilen"}),size:"small",dataTestId:"share-modal",children:[(0,t.jsxs)(b.p,{variant:b.g.caption,children:[el,": ",(0,t.jsx)("span",{"data-unnamed":et.unnamed||void 0,children:ea})]}),(0,t.jsxs)(eB,{children:[(0,t.jsx)(b.p,{variant:b.g.caption,children:u("entityPreview.shareAudience",{defaultValue:"Empfaenger"})}),(0,t.jsx)(P.L,{name:"shareAudience",hideLabel:!0,value:W,fieldType:"picklist",options:[{value:"team",label:u("entityPreview.shareTeam",{defaultValue:"Team (Staff und Admin)"})},{value:"role:admin",label:u("entityPreview.shareAdminsOnly",{defaultValue:"Nur Admins"})}],onChange:e=>J(String(e)),dataTestId:"share-audience"})]}),(0,t.jsxs)(eB,{children:[(0,t.jsx)(b.p,{variant:b.g.caption,children:u("entityPreview.shareMessage",{defaultValue:"Nachricht (optional)"})}),(0,t.jsx)(eR,{value:Y,onChange:e=>X(e.target.value),placeholder:u("entityPreview.shareMessagePlaceholder",{defaultValue:"z.B. Bitte mal anschauen..."}),rows:3,"data-testid":"share-message"})]}),(0,t.jsxs)(eU,{children:[(0,t.jsx)(w.f,{modifier:x.j.SECONDARY,onClick:()=>G(!1),dataTestId:"share-modal-cancel",children:u("entityPreview.cancel",{defaultValue:"Abbrechen"})}),(0,t.jsx)(w.f,{modifier:x.j.PRIMARY,onClick:()=>eh.mutate(),loading:eh.isPending,disabled:eh.isPending,dataTestId:"share-modal-submit",children:u("entityPreview.share",{defaultValue:"Teilen"})})]})]})]})},"getPreviewRecordName",0,eq],569584)},330260,function(e){e.n(e.i(569584))}]);