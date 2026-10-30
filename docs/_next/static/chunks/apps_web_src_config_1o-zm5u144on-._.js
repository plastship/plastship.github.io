(()=>{"use strict";(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/apps/web/src/config/companyContact.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * #2054: Kontaktdaten der Firma — EINE Quelle für Telefon, E-Mail und
 * Anschrift. Footer, Kontaktseiten, RIGK-/Partnerseiten, Leistungs-CTAs und
 * die strukturierten Daten (`lib/seo/structuredData.ts`) lesen von hier; der
 * Wächter `tests/guards/company-contact-single-source.test.ts` hält feste
 * Nummern und die Anschrift aus allen anderen Dateien heraus.
 *
 * Reine Daten, React- und Server-frei. Links baut `lib/url/contactLinks.ts`,
 * die Anzeige `Atom/ContactLink`.
 *
 * Telefon: gespeichert in E.164 (Link `tel:+49…` ohne Leerzeichen), dazu die
 * Schreibweisen nach DIN 5008 — national für die Anzeige, international für
 * schema.org und Besucher aus dem Ausland. Weitere Durchwahlen kommen als
 * eigener Eintrag hinzu, erfunden wird keine.
 *
 * Nicht von hier gespeist (Bericht #2054): PDF-Vorlagen (`docker/pdf-service/
 * templates/partials/company.json`, eigener Dienst) und die Mailvorlagen
 * (`templates/email/footer.html`, Absender in `lib/email.ts`).
 */ __turbopack_context__.s([
    "COMPANY_ADDRESS",
    ()=>COMPANY_ADDRESS,
    "COMPANY_EMAILS",
    ()=>COMPANY_EMAILS,
    "COMPANY_PHONES",
    ()=>COMPANY_PHONES,
    "CONTACT_CLICK_EVENT",
    ()=>CONTACT_CLICK_EVENT,
    "CONTACT_LINK_KINDS",
    ()=>CONTACT_LINK_KINDS,
    "CONTACT_LINK_PLACES",
    ()=>CONTACT_LINK_PLACES,
    "addressOneLine",
    ()=>addressOneLine,
    "isContactLinkKind",
    ()=>isContactLinkKind,
    "isContactLinkPlace",
    ()=>isContactLinkPlace
]);
const COMPANY_PHONES = {
    /** Zentrale (Vertrieb, allgemeine Anfragen) */ central: {
        e164: '+4961265898010',
        national: '06126 58980-10',
        international: '+49 6126 58980-10'
    }
};
const COMPANY_EMAILS = {
    /** allgemeine Anfragen, Footer, Leistungs-CTAs */ info: 'info@plastship.com',
    /** Vertriebsteam (RIGK-Sales-Kanal) */ team: 'team@plastship.com'
};
const COMPANY_ADDRESS = {
    name: 'plastship GmbH',
    street: 'Auf der Lind 10',
    postalCode: '65529',
    locality: 'Waldems',
    region: 'Hessen',
    countryCode: 'DE',
    geo: {
        lat: 50.248828,
        lon: 8.309024
    }
};
function addressOneLine(address = COMPANY_ADDRESS) {
    return `${address.street}, ${address.postalCode} ${address.locality}`;
}
const CONTACT_LINK_KINDS = [
    'tel',
    'mail',
    'map'
];
const CONTACT_LINK_PLACES = [
    'footer',
    'contactForm',
    'teamCard',
    'accountCard',
    'rigk',
    'partnerProduct',
    'other'
];
const CONTACT_CLICK_EVENT = 'contact_click';
const isContactLinkKind = (value)=>typeof value === 'string' && CONTACT_LINK_KINDS.includes(value);
const isContactLinkPlace = (value)=>typeof value === 'string' && CONTACT_LINK_PLACES.includes(value);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/config/entityFields/Abrechnung.fields.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// CURATED — do not regenerate (--force) without re-applying the lean rules in LEAN-CURATION.md
/**
 * Entity Field Configuration: Abrechnung__c (lean staff/finance view)
 *
 * Curated against GitLab #200 §3.1. The generated config had only 15 fields; the
 * cross-check showed #200 references 19 more that exist in SF — all re-added:
 * Rechnungstyp, Kostenart, Rechnungssteller_Empf_nger, Vertrag, Kostenstelle,
 * Kontakt_bergabe, Sample_Sending, Duplicate_Of, Rechnungsbetrag_Bericht,
 * R_ckzahlung_RIGK, Belegdatum_MonatJahr, Datum_gezahlt, Zahlungsart, Notiz, and the
 * Prüfung/Freigabe block (Zu_pr_fen_durch, Gepr_ft_und_in_Ordnung, Freigabe,
 * Freigabe_f_r_Sandra, Sichtbar_f_r_Buchhaltung). 5 flat sections per #200's blocks.
 *
 * Dropped: Count_Files__c and the legacy/technical lists (Feedbacks, Histories,
 * RecordAccessGrants, Duplicates) — only Dateien remains.
 *
 * #507: accounting (Fakturierungsrolle) ist jetzt in allen Sektionen sichtbar.
 * accounting hat in DEFAULT_GLOBAL_PERMISSIONS view+create+edit=true auf
 * Abrechnung__c ("Primary object"), sah aber keine Sektion — die Detailseite war
 * leer. Der Server sendet accounting die Daten wegen view=true ohnehin (das
 * serverseitige Feld-Masking bleibt aktiv), das Freischalten der Sektionen
 * exponiert also nichts Neues, sondern rendert nur, was accounting bereits
 * erreichen darf. Verifiziert durch inline-edit-rbac + field-visibility (#507).
 */ __turbopack_context__.s([
    "AbrechnungFieldConfig",
    ()=>AbrechnungFieldConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$sfPicklist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/entityFields/sfPicklist.ts [app-client] (ecmascript)");
;
const AbrechnungFieldConfig = {
    entityType: 'Abrechnung__c',
    entityLabel: 'Abrechnung',
    headerFields: [
        'Name',
        'Auftrag__c',
        'Status_der_Abrechnung__c',
        'Account__c',
        'Rechnungsbetrag__c'
    ],
    sections: [
        {
            id: 'kopfdaten_kategorisierung',
            label: 'Kopfdaten & Kategorisierung',
            columns: 2,
            visibleForRoles: [
                'admin',
                'staff',
                'agent',
                'accounting'
            ],
            fields: [
                {
                    apiName: 'Name',
                    label: 'Abrechnung-Nr',
                    fieldType: 'text',
                    readOnly: true
                },
                {
                    apiName: 'Belegnummer__c',
                    label: 'Belegnummer',
                    fieldType: 'text'
                },
                {
                    apiName: 'Originalbeleg_Herkunft__c',
                    label: 'Originalbeleg Herkunft & Ablage',
                    fieldType: 'picklist',
                    picklistOptions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$sfPicklist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfPicklist"])()([
                        {
                            label: 'Post',
                            value: 'Post'
                        },
                        {
                            label: 'Elektronisch',
                            value: 'Elektronisch'
                        }
                    ])
                },
                {
                    // Modell v5 (AB 08.10.): bei Ausgang das Versanddatum — gesetzt heißt
                    // versendet, die Rechnung ist dann fest (Salesforce R2/R5); bei
                    // Eingang das Eingangsdatum. Der Versand aus dem Dokument-Menü setzt es.
                    apiName: 'Eingangsdatum_plastship__c',
                    label: 'Versanddatum (Ausgang) / Eingangsdatum (Eingang)',
                    fieldType: 'date',
                    helpText: 'Ausgang: gesetzt heißt versendet, die Rechnung ist dann fest (Betrag, Positionen, Preise). Eingang: Datum des Rechnungseingangs.'
                },
                {
                    apiName: 'Rechnungstyp__c',
                    label: 'Rechnungstyp',
                    fieldType: 'picklist',
                    picklistOptions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$sfPicklist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfPicklist"])()([
                        {
                            label: 'Eingang',
                            value: 'Eingang'
                        },
                        {
                            label: 'Ausgang',
                            value: 'Ausgang'
                        }
                    ])
                },
                {
                    apiName: 'Kategorie__c',
                    label: 'Kategorie',
                    fieldType: 'picklist',
                    picklistOptions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$sfPicklist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfPicklist"])()([
                        {
                            label: 'Rechnung',
                            value: 'Rechnung'
                        },
                        {
                            label: 'Prognose',
                            value: 'Prognose'
                        },
                        {
                            label: 'Vorkasse',
                            value: 'Vorkasse'
                        },
                        {
                            label: 'Rechnung Nachlass',
                            value: 'Rechnung Nachlass'
                        },
                        {
                            label: 'Gutschrift',
                            value: 'Gutschrift'
                        },
                        {
                            label: 'Kostenabgrenzung',
                            value: 'Kostenabgrenzung'
                        },
                        {
                            label: 'Stornorechnung',
                            value: 'Stornorechnung'
                        },
                        {
                            label: 'Stornierte Rechnung',
                            value: 'Stornierte Rechnung'
                        },
                        {
                            label: 'Rückstellungen für ausstehende Rechnungen',
                            value: 'Rückstellungen für ausstehende Rechnungen'
                        }
                    ])
                },
                {
                    apiName: 'Kostenart__c',
                    label: 'Kostenart',
                    fieldType: 'picklist',
                    picklistOptions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$sfPicklist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfPicklist"])()([
                        {
                            label: 'Kosten Materialeinkauf',
                            value: 'Kosten Materialeinkauf'
                        },
                        {
                            label: 'Umarbeitungskosten',
                            value: 'Umarbeitungskosten'
                        },
                        {
                            label: 'Transportkosten Lager Eingang',
                            value: 'Transportkosten_Lager_Eingang'
                        },
                        {
                            label: 'Transportkosten',
                            value: 'Transportkosten_Standard'
                        },
                        {
                            label: 'Lagerkosten',
                            value: 'Lagerkosten'
                        },
                        {
                            label: 'Kosten Ladungsträger',
                            value: 'Kosten Ladungsträger'
                        },
                        {
                            label: 'Beratungskosten',
                            value: 'Beratungskosten'
                        },
                        {
                            label: 'Materialanalyse',
                            value: 'Materialanalyse'
                        },
                        {
                            label: 'Gemeinkosten',
                            value: 'Gemeinkosten'
                        }
                    ])
                },
                {
                    apiName: 'Rechnungssteller_Empf_nger__c',
                    label: 'Rechnungssteller/-Empfänger',
                    fieldType: 'picklist',
                    picklistOptions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$sfPicklist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfPicklist"])()([
                        {
                            label: 'Kunde',
                            value: 'Kunde'
                        },
                        {
                            label: 'Lieferant',
                            value: 'Lieferant'
                        },
                        {
                            label: 'Transporteur',
                            value: 'Transporteur'
                        },
                        {
                            label: 'Sales Agent',
                            value: 'Sales Agent'
                        },
                        {
                            label: 'Externer Dienstleister',
                            value: 'Externer Dienstleister'
                        },
                        {
                            label: 'Allgemein',
                            value: 'Allgemein'
                        }
                    ])
                },
                {
                    apiName: 'Status_der_Abrechnung__c',
                    label: 'Status der Abrechnung',
                    fieldType: 'picklist',
                    picklistOptions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$sfPicklist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfPicklist"])()([
                        {
                            label: 'in Klärung',
                            value: 'in Klärung'
                        },
                        {
                            label: 'Storno',
                            value: 'Storno'
                        },
                        {
                            label: 'Entwurf',
                            value: 'Entwurf'
                        },
                        {
                            label: 'Vollständig dokumentiert',
                            value: 'Vollständig dokumentiert'
                        },
                        {
                            label: 'Gebucht',
                            value: 'Gebucht'
                        },
                        {
                            label: 'Bezahlt',
                            value: 'Bezahlt'
                        }
                    ])
                }
            ]
        },
        {
            id: 'verknuepfungen',
            label: 'Verknüpfungen',
            columns: 2,
            visibleForRoles: [
                'admin',
                'staff',
                'agent',
                'accounting'
            ],
            fields: [
                {
                    apiName: 'Auftrag__c',
                    label: 'Auftrag',
                    fieldType: 'lookup',
                    lookupObjectType: 'Order'
                },
                {
                    apiName: 'Account__c',
                    label: 'Account',
                    fieldType: 'lookup',
                    lookupObjectType: 'Account'
                },
                // Vertrag__c ist SF-seitig eine Formel (zeigt die Vertragsnummer) — kein Lookup
                {
                    apiName: 'Vertrag__c',
                    label: 'Vertrag',
                    fieldType: 'text',
                    readOnly: true
                },
                {
                    apiName: 'Kostenstelle__c',
                    label: 'Kostenstelle',
                    fieldType: 'lookup',
                    lookupObjectType: 'Kostenstelle_plastship__c'
                },
                {
                    apiName: 'Duplicate_Of__c',
                    label: 'Duplikat von',
                    fieldType: 'lookup',
                    lookupObjectType: 'Abrechnung__c'
                },
                {
                    apiName: 'Weiterbelastet_durch_Abrechnung__c',
                    label: 'Weiterbelastet durch Abrechnung',
                    fieldType: 'lookup',
                    lookupObjectType: 'Abrechnung__c'
                }
            ]
        },
        {
            id: 'betraege_steuern',
            label: 'Beträge & Steuern',
            columns: 2,
            visibleForRoles: [
                'admin',
                'staff',
                'agent',
                'accounting'
            ],
            fields: [
                {
                    apiName: 'Rechnungsbetrag__c',
                    label: 'Rechnungsbetrag netto',
                    fieldType: 'currency',
                    currencyCode: 'EUR'
                },
                {
                    apiName: 'Ust__c',
                    label: 'USt.',
                    fieldType: 'percent'
                },
                {
                    apiName: 'Rechnungsbetrag_brutto__c',
                    label: 'Rechnungsbetrag brutto',
                    fieldType: 'currency',
                    currencyCode: 'EUR',
                    readOnly: true
                },
                {
                    apiName: 'Rechnungsbetrag_Bericht__c',
                    label: 'Rechnungsbetrag (Bericht)',
                    fieldType: 'currency',
                    readOnly: true
                },
                // #850/#1183 Modell v5: SOLL aus den zugeordneten Auftragsprodukten
                // (Formel in Salesforce), Differenz zum eingetragenen Rechnungsbetrag.
                {
                    apiName: 'SOLL_Betrag__c',
                    label: 'SOLL-Betrag (Positionen)',
                    fieldType: 'currency',
                    currencyCode: 'EUR',
                    readOnly: true
                },
                {
                    apiName: 'Differenz_SOLL_IST__c',
                    label: 'Differenz SOLL/IST',
                    fieldType: 'currency',
                    currencyCode: 'EUR',
                    readOnly: true
                }
            ]
        },
        {
            // #850/#1183 Modell v5: Inhalt der Ausgangsrechnung. Rechnungstext nur
            // für freie Positionen (Pauschale, Fracht, Rabatt) — gefüllt heißt: keine
            // Auftragsprodukte, kein SOLL. Leistungsdatum als Text (Datum oder
            // Zeitraum), erscheint auf der Rechnung.
            id: 'rechnungsinhalt',
            label: 'Rechnungsinhalt',
            columns: 2,
            visibleForRoles: [
                'admin',
                'staff',
                'agent',
                'accounting'
            ],
            fields: [
                {
                    apiName: 'Leistungsdatum__c',
                    label: 'Leistungsdatum / -zeitraum',
                    fieldType: 'text'
                },
                {
                    apiName: 'Rechnungstext__c',
                    label: 'Rechnungstext (freie Position)',
                    fieldType: 'textarea'
                }
            ]
        },
        {
            id: 'termine_zahlung',
            label: 'Termine, Zahlung & Notizen',
            columns: 2,
            visibleForRoles: [
                'admin',
                'staff',
                'agent',
                'accounting'
            ],
            fields: [
                {
                    apiName: 'Belegdatum__c',
                    label: 'Belegdatum',
                    fieldType: 'date'
                },
                {
                    apiName: 'Belegdatum_MonatJahr__c',
                    label: 'Belegdatum (Monat/Jahr)',
                    fieldType: 'text',
                    readOnly: true
                },
                {
                    apiName: 'Zahlungsziel__c',
                    label: 'Zahlungsziel',
                    fieldType: 'date'
                },
                {
                    apiName: 'Datum_gezahlt__c',
                    label: 'Datum gezahlt',
                    fieldType: 'date'
                },
                {
                    apiName: 'Zahlungsart__c',
                    label: 'Zahlungsart',
                    fieldType: 'picklist',
                    picklistOptions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$sfPicklist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfPicklist"])()([
                        {
                            label: 'Bar',
                            value: 'Bar'
                        },
                        {
                            label: 'Lastschrift',
                            value: 'Lastschrift'
                        },
                        {
                            label: 'Rechnung / Überweisung',
                            value: 'Rechnung / Überweisung'
                        },
                        {
                            label: 'Paypal',
                            value: 'Paypal'
                        },
                        {
                            label: 'Kreditkarte',
                            value: 'Kreditkarte'
                        },
                        {
                            label: 'ec-Karte',
                            value: 'ec-Karte'
                        },
                        {
                            label: 'Andere',
                            value: 'Andere'
                        }
                    ])
                },
                {
                    apiName: 'Notiz__c',
                    label: 'Notiz',
                    fieldType: 'textarea'
                }
            ]
        },
        {
            // #792 (Milestone DATEV-Anbindung): Kontierung für den DATEV-Export.
            // Sachkonto = Lookup auf den Kontenplan (DATEV_Sachkonto__c, Name =
            // Kontonummer, Salesforce-Filter: nur aktive Konten), BU-Schlüssel als
            // Text. Beim Speichern füllt der Server beide Felder aus der
            // Kontierungsmatrix vor, wenn sie leer sind (lib/datev/kontierung.ts);
            // die Buchhaltung übersteuert hier. Gegenkonto folgt mit #791.
            id: 'buchung',
            label: 'Buchung (DATEV)',
            columns: 2,
            visibleForRoles: [
                'admin',
                'staff',
                'accounting'
            ],
            fields: [
                {
                    apiName: 'DATEV_Sachkonto__c',
                    label: 'Sachkonto',
                    fieldType: 'lookup',
                    lookupObjectType: 'DATEV_Sachkonto__c',
                    helpText: 'SKR03-Konto aus dem Kontenplan. Wird beim Speichern aus Rechnungstyp, Kostenart, USt-Satz und Land vorgeschlagen, solange Sachkonto und BU-Schlüssel leer sind.'
                },
                {
                    apiName: 'BU_Schluessel__c',
                    label: 'BU-Schlüssel',
                    fieldType: 'text',
                    helpText: 'DATEV-Buchungsschlüssel: 9 = 19 % Vorsteuer, 8 = 7 %, 94 = § 13b. Leer bei Automatikkonten.'
                }
            ]
        },
        {
            id: 'pruefung_freigabe',
            label: 'Prüfung & Freigabe',
            columns: 2,
            visibleForRoles: [
                'admin',
                'staff',
                'agent',
                'accounting'
            ],
            fields: [
                // #850/#1183 Modell v5: Formel in Salesforce, listet was zur Buchung
                // noch fehlt (Beleg, Betrag, Zahlungsziel, …). Leer = vollständig.
                {
                    apiName: 'Offene_Punkte__c',
                    label: 'Offene Punkte',
                    fieldType: 'textarea',
                    readOnly: true,
                    hideWhenEmpty: true
                },
                {
                    apiName: 'Zu_pr_fen_durch__c',
                    label: 'Zu prüfen durch',
                    fieldType: 'lookup',
                    lookupObjectType: 'User'
                },
                {
                    // #1767 (A8): wird nur über den Knopf „Freigeben" gesetzt (vier Augen,
                    // Route /api/invoice/[id]/freigeben); die Invoice-Route lehnt das Feld ab.
                    apiName: 'Gepr_ft_und_in_Ordnung__c',
                    label: 'Geprüft und in Ordnung',
                    fieldType: 'lookup',
                    lookupObjectType: 'User',
                    readOnly: true,
                    helpText: 'Wird über „Freigeben" gesetzt. Soll: eine andere Person als die, die angelegt oder zuletzt bearbeitet hat — sonst kommt ein Hinweis.'
                },
                {
                    apiName: 'Freigabe__c',
                    label: 'Freigabe',
                    fieldType: 'boolean',
                    readOnly: true
                },
                {
                    apiName: 'Freigabe_f_r_Sandra__c',
                    label: 'Freigabe für Sandra',
                    fieldType: 'text'
                },
                {
                    apiName: 'Sichtbar_f_r_Buchhaltung__c',
                    label: 'Sichtbar für Buchhaltung',
                    fieldType: 'boolean'
                }
            ]
        }
    ],
    relatedLists: [
        {
            // #1184 Modell v5: die zugeordneten Auftragsprodukte (SOLL der
            // Rechnung). Zuordnen und Umhängen passiert am Auftrag (Spalte
            // „Abrechnung" in der Auftragsprodukt-Liste); hier nur lesen.
            relationshipName: 'Abgerechnete_Positionen__r',
            label: 'Abgerechnete Positionen',
            fields: [
                'Id',
                'Produktcode__c',
                'Product2.Trade_Name__c',
                'Quantity',
                'Liefermenge__c',
                'UnitPrice',
                'Rechnungsbetrag__c',
                'Order.OrderNumber'
            ],
            relatedEntityType: 'OrderItem',
            maxRows: 20,
            // #1893: im Drawer der Abrechnung lesend sichtbar (Positionen je Beleg)
            showInPreview: true,
            previewFields: [
                'Product2.Trade_Name__c',
                'Liefermenge__c',
                'UnitPrice',
                'Rechnungsbetrag__c',
                'Order.OrderNumber'
            ],
            // AB-Klicktest 08.10.: nur bestehende Positionen anhängen und lösen (wie
            // Vertrag → Aufträge), nie neue anlegen — die Auftragsprodukte gibt es
            // schon. Der Picker zeigt nur Positionen des Auftrags der Abrechnung.
            showCreateButton: false,
            addExisting: {
                childLookupField: 'Abrechnung__c',
                unlinkable: true,
                filter: {
                    childField: 'OrderId',
                    parentField: 'Auftrag__c'
                }
            },
            visibleForRoles: [
                'admin',
                'staff',
                'accounting'
            ]
        },
        {
            // #484: Versand-Log — der Mail-Versand aus dem Dokument-Menü legt je
            // Sendung einen abgeschlossenen Task am Record an ("Allow Activities"
            // ist auf Abrechnung__c aktiviert, AB 2026-07-19).
            relationshipName: 'Tasks',
            label: 'Aktivitäten / Versand-Log',
            // #330/#202 §7: + Inhaber und Prioritaet
            fields: [
                'Id',
                'Subject',
                'Owner.Alias',
                'ActivityDate',
                'Status',
                'Priority',
                'Description'
            ],
            maxRows: 10,
            visibleForRoles: [
                'admin',
                'staff',
                'accounting'
            ]
        },
        {
            relationshipName: 'Feedbacks__r',
            label: 'Prozessfeedback',
            fields: [
                'Id',
                'Name',
                'CreatedDate',
                'Status__c',
                'Current_State_Evaluation__c',
                'Description__c'
            ],
            maxRows: 10,
            visibleForRoles: [
                'admin',
                'staff',
                'agent',
                'user',
                'rigk',
                'accounting'
            ]
        },
        {
            relationshipName: 'AttachedContentDocuments',
            label: 'Dateien',
            fields: [
                'Id',
                'Title'
            ],
            maxRows: 10,
            visibleForRoles: [
                'admin',
                'staff',
                'agent',
                'accounting'
            ]
        }
    ],
    systemFields: [
        'Id',
        'CreatedDate',
        'CreatedById',
        'LastModifiedDate',
        'LastModifiedById'
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/config/entityFields/Account.fields.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// CURATED — do not regenerate (--force) without re-applying the lean rules in LEAN-CURATION.md
/**
 * Entity Field Configuration: Account (lean staff view)
 *
 * Curated from the auto-generated FlexiPage export (84 fields / 21 sections) to the
 * working set the PM needs. Base set follows GitLab #200 §1.1; on PM request the
 * Verhältnisse (RIGK-System / ERDE / Pamira / Hannawald + RIGK-Gruppenkontakt),
 * Qualifizierung/Validierung, Rechnungsinformation fields and Product_Category were
 * added back so staff no longer has to open Salesforce. 7 sections are grouped into
 * 3 tabs (Stammdaten / Beziehung & Qualifizierung / Status).
 *
 * Still dropped (genuine noise): the Aktivitätsanalyse counts/dates, the
 * Lieferanten-/Kunden-Scores, ParentId, AccountSource, Charakteristik, etc.
 * Added back for #848: the Dienstleistungsmonitor section (14 relationship
 * booleans + 2 KISS numbers) — the booleans feed Count_Dienstleistungsmonitor
 * (Erstqualifiziert condition, #844).
 * Added back for #844 (qualification relevance): Billing-/ShippingState and the
 * Recherche section (Type, Datum letzte Internetrecherche, Main conversion
 * methods, Total annual production capacity, AnnualRevenue, NumberOfEmployees)
 * — these feed the Kontakt-/Recherche-Informationsrate formulas.
 *
 * Downstream roles (agent/user/rigk) untouched; handled in a later step.
 */ __turbopack_context__.s([
    "AccountFieldConfig",
    ()=>AccountFieldConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$sfPicklist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/entityFields/sfPicklist.ts [app-client] (ecmascript)");
;
const verhaeltnisOptions = [
    {
        label: '0 Offen',
        value: '0 Offen'
    },
    {
        label: '1 Im Aufbau',
        value: '1 Im Aufbau'
    },
    {
        label: '2 Kunde / kont. Beauftraugung',
        value: '2 Kunde / kont. Beauftraugung'
    },
    {
        label: '3 Enger Partner',
        value: '3 Enger Partner'
    },
    {
        label: '4 ROT',
        value: '4 ROT'
    }
];
const AccountFieldConfig = {
    entityType: 'Account',
    entityLabel: 'Account',
    headerFields: [
        'Name',
        'Industry__c',
        'Verh_ltnis__c',
        'OwnerId'
    ],
    sections: [
        {
            id: 'account__stammdaten',
            label: 'Account',
            columns: 2,
            fields: [
                {
                    apiName: 'Name',
                    label: 'Accountname',
                    fieldType: 'text',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent'
                    ]
                },
                {
                    apiName: 'Industry__c',
                    label: 'Industry',
                    fieldType: 'picklist',
                    picklistOptions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$sfPicklist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfPicklist"])()([
                        {
                            label: 'Waste sorting',
                            value: 'Waste sorting'
                        },
                        {
                            label: 'Waste provision',
                            value: 'Waste provision'
                        },
                        {
                            label: 'Recycling',
                            value: 'Recycling'
                        },
                        {
                            label: 'Compounding',
                            value: 'Compounding'
                        },
                        {
                            label: 'Trading',
                            value: 'Trading'
                        },
                        {
                            label: 'Plastics conversion',
                            value: 'Plastics conversion'
                        },
                        {
                            label: 'Virgin material production',
                            value: 'Virgin material production'
                        },
                        {
                            label: 'Agriculture',
                            value: 'Agriculture'
                        },
                        {
                            label: 'Chemicals',
                            value: 'Chemicals'
                        },
                        {
                            label: 'Communications',
                            value: 'Communications'
                        },
                        {
                            label: 'Consulting',
                            value: 'Consulting'
                        },
                        {
                            label: 'Cosmetics',
                            value: 'Cosmetics'
                        },
                        {
                            label: 'Education',
                            value: 'Education'
                        },
                        {
                            label: 'Electronics',
                            value: 'Electronics'
                        },
                        {
                            label: 'Finance',
                            value: 'Finance'
                        },
                        {
                            label: 'Food & Beverage',
                            value: 'Food & Beverage'
                        },
                        {
                            label: 'Government',
                            value: 'Government'
                        },
                        {
                            label: 'Insurance',
                            value: 'Insurance'
                        },
                        {
                            label: 'Machinery',
                            value: 'Machinery'
                        },
                        {
                            label: 'Media',
                            value: 'Media'
                        },
                        {
                            label: 'Not For Profit',
                            value: 'Not For Profit'
                        },
                        {
                            label: 'Other',
                            value: 'Other'
                        },
                        {
                            label: 'Retail',
                            value: 'Retail'
                        },
                        {
                            label: 'Telecommunications',
                            value: 'Telecommunications'
                        },
                        {
                            label: 'Transportation',
                            value: 'Transportation'
                        },
                        {
                            label: 'Additives',
                            value: 'Additives'
                        },
                        {
                            label: 'Automotive',
                            value: 'Automotive'
                        },
                        {
                            label: 'Household',
                            value: 'Household'
                        }
                    ]),
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent'
                    ]
                },
                {
                    apiName: 'Product_Category__c',
                    label: 'Product Category',
                    fieldType: 'multipicklist',
                    picklistOptions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$sfPicklist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfPicklist"])()([
                        {
                            label: 'Automotive',
                            value: 'Automotive'
                        },
                        {
                            label: 'Building & Construction',
                            value: 'Building & Construction'
                        },
                        {
                            label: 'Packaging: Food',
                            value: 'Packaging: Food'
                        },
                        {
                            label: 'Packaging: Industrial',
                            value: 'Packaging: Industrial'
                        },
                        {
                            label: 'Packaging: Rigid',
                            value: 'Packaging: Rigid'
                        },
                        {
                            label: 'Packaging: Flexible',
                            value: 'Packaging: Flexible'
                        },
                        {
                            label: 'Packaging: Cosmetics',
                            value: 'Packaging: Cosmetics'
                        },
                        {
                            label: 'Electrical & Electronics',
                            value: 'Electrical & Electronics'
                        },
                        {
                            label: 'Household & Consumer Goods',
                            value: 'Household & Consumer Goods'
                        },
                        {
                            label: 'Agriculture',
                            value: 'Agriculture'
                        },
                        {
                            label: 'Medical',
                            value: 'Medical'
                        },
                        {
                            label: 'Pipes & Tubes',
                            value: 'Pipes'
                        },
                        {
                            label: 'Wire & Cable',
                            value: 'Wire & Cable'
                        },
                        {
                            label: 'Fibers',
                            value: 'Fibers'
                        },
                        {
                            label: 'Specialty',
                            value: 'Specialty'
                        },
                        {
                            label: 'General / Other',
                            value: 'General / Other'
                        },
                        {
                            label: 'Films',
                            value: 'Films'
                        },
                        {
                            label: 'Furniture',
                            value: 'Furniture'
                        },
                        {
                            label: 'Waste (PCR)',
                            value: 'Waste (PCR)'
                        },
                        {
                            label: 'Waste (PIR)',
                            value: 'Waste (PIR)'
                        },
                        {
                            label: 'Regrind',
                            value: 'Regrind'
                        },
                        {
                            label: 'Agglomerates',
                            value: 'Agglomerates'
                        },
                        {
                            label: 'Re-granulates',
                            value: 'Re-granulates'
                        },
                        {
                            label: 'Compounds',
                            value: 'Compounds'
                        }
                    ]),
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent'
                    ]
                },
                {
                    apiName: 'OwnerId',
                    label: 'Inhaber-ID',
                    fieldType: 'lookup',
                    lookupObjectType: 'User',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent'
                    ]
                },
                {
                    apiName: 'Description',
                    label: 'Accountbeschreibung',
                    fieldType: 'textarea',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent'
                    ]
                }
            ]
        },
        {
            id: 'account__kontakt',
            label: 'Kontakt',
            columns: 2,
            fields: [
                {
                    apiName: 'Website',
                    fieldType: 'url',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent',
                        'user',
                        'rigk'
                    ]
                },
                {
                    apiName: 'Phone',
                    label: 'Accounttelefon',
                    fieldType: 'phone',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent',
                        'user',
                        'rigk'
                    ]
                },
                {
                    apiName: 'Account_E_Mail__c',
                    label: 'Account-E-Mail',
                    fieldType: 'email',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent',
                        'user',
                        'rigk'
                    ]
                },
                {
                    apiName: 'Ust_ID__c',
                    label: 'Ust. ID',
                    fieldType: 'text',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent',
                        'user',
                        'rigk'
                    ]
                }
            ]
        },
        {
            id: 'account__rechnungsinformation',
            label: 'Rechnungsinformation',
            columns: 2,
            fields: [
                {
                    apiName: 'E_Mailadresse_Rechnungen__c',
                    label: 'E-Mailadresse Rechnungen',
                    fieldType: 'email',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent'
                    ]
                },
                {
                    apiName: 'Besonderheiten_Rechnungsstellung__c',
                    label: 'Besonderheiten Rechnungsstellung',
                    fieldType: 'textarea',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent'
                    ]
                },
                {
                    apiName: 'Standardbedingung_Einkauf_von_Account__c',
                    label: 'Standardbedingung Einkauf von Account',
                    fieldType: 'text',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent'
                    ]
                },
                {
                    apiName: 'Standardbedingung_Verkauf_an_Account__c',
                    label: 'Standardbedingung Verkauf an Account',
                    fieldType: 'text',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent'
                    ]
                }
            ]
        },
        {
            id: 'account__anschriften',
            label: 'Anschriften',
            columns: 2,
            fields: [
                {
                    apiName: 'BillingStreet',
                    label: 'Rechnung: Straße',
                    fieldType: 'textarea',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent',
                        'user',
                        'rigk'
                    ]
                },
                {
                    apiName: 'BillingPostalCode',
                    label: 'Rechnung: PLZ',
                    fieldType: 'text',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent',
                        'user',
                        'rigk'
                    ]
                },
                {
                    apiName: 'BillingCity',
                    label: 'Rechnung: Stadt',
                    fieldType: 'text',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent',
                        'user',
                        'rigk'
                    ]
                },
                // #844: State-Felder zählen in die Kontakt-Informationsrate (13 Felder)
                {
                    apiName: 'BillingState',
                    label: 'Rechnung: Bundesland',
                    fieldType: 'text',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent',
                        'user',
                        'rigk'
                    ]
                },
                {
                    apiName: 'BillingCountry',
                    label: 'Rechnung: Land',
                    fieldType: 'text',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent',
                        'user',
                        'rigk'
                    ]
                },
                {
                    apiName: 'ShippingStreet',
                    label: 'Lieferung: Straße',
                    fieldType: 'textarea',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent',
                        'user',
                        'rigk'
                    ]
                },
                {
                    apiName: 'ShippingPostalCode',
                    label: 'Lieferung: PLZ',
                    fieldType: 'text',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent',
                        'user',
                        'rigk'
                    ]
                },
                {
                    apiName: 'ShippingCity',
                    label: 'Lieferung: Stadt',
                    fieldType: 'text',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent',
                        'user',
                        'rigk'
                    ]
                },
                {
                    apiName: 'ShippingState',
                    label: 'Lieferung: Bundesland',
                    fieldType: 'text',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent',
                        'user',
                        'rigk'
                    ]
                },
                {
                    apiName: 'ShippingCountry',
                    label: 'Lieferung: Land',
                    fieldType: 'text',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent',
                        'user',
                        'rigk'
                    ]
                }
            ]
        },
        {
            // #844: Ursprungsfelder der Recherche-Informationsrate (ISBLANK-Checks der
            // SF-Formel, ≥ 90 = Erstqualifiziert-Bedingung); Industry__c bleibt in
            // den Stammdaten und ist das siebte Formel-Feld
            id: 'account__recherche',
            label: 'Recherche',
            columns: 2,
            visibleForRoles: [
                'admin',
                'staff'
            ],
            fields: [
                {
                    apiName: 'Type',
                    label: 'Typ',
                    fieldType: 'picklist',
                    picklistOptions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$sfPicklist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfPicklist"])()([
                        {
                            label: 'Customer',
                            value: 'Customer'
                        },
                        {
                            label: 'Prospect',
                            value: 'Prospect'
                        },
                        {
                            label: 'Partner',
                            value: 'Partner'
                        },
                        {
                            label: 'Dienstleister',
                            value: 'Dienstleister'
                        },
                        {
                            label: 'Reseller',
                            value: 'Reseller'
                        },
                        {
                            label: 'Integrator',
                            value: 'Integrator'
                        },
                        {
                            label: 'Competitor',
                            value: 'Competitor'
                        },
                        {
                            label: 'Investor',
                            value: 'Investor'
                        },
                        {
                            label: 'Analyst',
                            value: 'Analyst'
                        },
                        {
                            label: 'Press',
                            value: 'Press'
                        },
                        {
                            label: 'Other',
                            value: 'Other'
                        }
                    ]),
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'Datum_letzte_Internetrecherche__c',
                    label: 'Datum letzte Internetrecherche',
                    fieldType: 'date',
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'Main_conversion_methods__c',
                    label: 'Main conversion methods',
                    fieldType: 'multipicklist',
                    picklistOptions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$sfPicklist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfPicklist"])()([
                        {
                            label: 'Grinding',
                            value: 'Grinding'
                        },
                        {
                            label: 'Extrusion',
                            value: 'Extrusion'
                        },
                        {
                            label: 'Injection Molding',
                            value: 'Injection Molding'
                        },
                        {
                            label: 'Agglomerating',
                            value: 'Agglomerating'
                        },
                        {
                            label: 'Baling',
                            value: 'Baling'
                        },
                        {
                            label: 'Blown Film Extrusion',
                            value: 'Blown Film Extrusion'
                        },
                        {
                            label: 'Cast Film Extrusion',
                            value: 'Cast Film Extrusion'
                        },
                        {
                            label: 'Washing',
                            value: 'Washing'
                        },
                        {
                            label: 'Others',
                            value: 'Others'
                        }
                    ]),
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'Total_annual_production_capacity__c',
                    label: 'Total annual production capacity',
                    fieldType: 'number',
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'AnnualRevenue',
                    label: 'Jahresumsatz',
                    fieldType: 'currency',
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'NumberOfEmployees',
                    label: 'Mitarbeiter',
                    fieldType: 'number',
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                }
            ]
        },
        {
            id: 'account__verhaeltnisse',
            label: 'Verhältnisse',
            columns: 2,
            visibleForRoles: [
                'admin',
                'staff'
            ],
            fields: [
                {
                    apiName: 'Verh_ltnis__c',
                    label: 'Verhältnis',
                    fieldType: 'picklist',
                    picklistOptions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$sfPicklist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfPicklist"])()(verhaeltnisOptions),
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'Ist_RIGK_Gruppenkontakt__c',
                    label: 'Ist RIGK Gruppenkontakt',
                    fieldType: 'boolean',
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'Verh_ltnis_RIGK_System__c',
                    label: 'Verhältnis RIGK System',
                    fieldType: 'picklist',
                    picklistOptions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$sfPicklist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfPicklist"])()(verhaeltnisOptions),
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'Verh_ltnis_ERDE__c',
                    label: 'Verhältnis ERDE',
                    fieldType: 'picklist',
                    picklistOptions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$sfPicklist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfPicklist"])()(verhaeltnisOptions),
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'Verh_ltnis_Pamira__c',
                    label: 'Verhältnis Pamira',
                    fieldType: 'picklist',
                    picklistOptions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$sfPicklist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfPicklist"])()(verhaeltnisOptions),
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'Verh_ltnis_Hannawald__c',
                    label: 'Verhältnis Hannawald',
                    fieldType: 'picklist',
                    picklistOptions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$sfPicklist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfPicklist"])()(verhaeltnisOptions),
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                }
            ]
        },
        {
            // #848: Geschäftsbeziehungs-Flags aus der SF-Flexipage (Sektion
            // „plastship-Dienstleistungsmonitor"); die 14 Checkboxen speisen
            // Count_Dienstleistungsmonitor__c (Erstqualifiziert-Bedingung > 0, #844)
            id: 'account__dienstleistungsmonitor',
            label: 'Dienstleistungsmonitor',
            columns: 2,
            visibleForRoles: [
                'admin',
                'staff'
            ],
            fields: [
                {
                    apiName: 'KISS_Kunde__c',
                    label: 'KISS-Kunde',
                    fieldType: 'boolean',
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'Kunde_Werksentsorgung__c',
                    label: 'Kunde Werksentsorgung',
                    fieldType: 'boolean',
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'Kunde_Materialeinkauf__c',
                    label: 'Kunde kauft Material / Buyer',
                    fieldType: 'boolean',
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'Transporteur__c',
                    label: 'Transporteur',
                    fieldType: 'boolean',
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'Kunde_Partnermodell__c',
                    label: 'Kunde Partnermodell',
                    fieldType: 'boolean',
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'Kunde_Zertifizierung__c',
                    label: 'Kunde Zertifizierung',
                    fieldType: 'boolean',
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'Dienstleister_Sonstige__c',
                    label: 'Dienstleister Sonstige',
                    fieldType: 'boolean',
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'Kooperationspartner__c',
                    label: 'Kooperationspartner',
                    fieldType: 'boolean',
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'Zugesagtes_KISS_Kontingent__c',
                    label: 'Zugesagtes KISS-Kontingent',
                    fieldType: 'number',
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'Anzahl_KISS_Pr_fungen_avisiert__c',
                    label: 'Anzahl KISS-Prüfungen avisiert',
                    fieldType: 'number',
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'Kunde_Materialpr_fung__c',
                    label: 'Kunde Materialprüfung',
                    fieldType: 'boolean',
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'Kunde_Materialverkauf__c',
                    label: 'Kunde verkauft Material / Seller',
                    fieldType: 'boolean',
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'Dienstleister_Lohn__c',
                    label: 'Dienstleister Lohn',
                    fieldType: 'boolean',
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'Kunde_Digitale_Services__c',
                    label: 'Kunde Digitale Services',
                    fieldType: 'boolean',
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'Kunde_Beratung__c',
                    label: 'Kunde Beratung',
                    fieldType: 'boolean',
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'Agent__c',
                    label: 'Agent',
                    fieldType: 'boolean',
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                }
            ]
        },
        {
            id: 'account__qualifizierung',
            label: 'Qualifizierung & Validierung',
            columns: 2,
            fields: [
                {
                    apiName: 'Kommentar_Domainpr_fung__c',
                    label: 'Kommentar Domainprüfung',
                    fieldType: 'text',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent',
                        'user',
                        'rigk'
                    ]
                },
                {
                    apiName: 'Erstqualifiziert__c',
                    label: 'Erstqualifiziert',
                    fieldType: 'boolean',
                    readOnly: true,
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent',
                        'user',
                        'rigk'
                    ]
                },
                {
                    apiName: 'Validiert__c',
                    label: 'Validiert',
                    fieldType: 'boolean',
                    readOnly: true,
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent',
                        'user',
                        'rigk'
                    ]
                },
                {
                    apiName: 'Vollqualifiziert__c',
                    label: 'Vollqualifiziert',
                    fieldType: 'boolean',
                    readOnly: true,
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent',
                        'user',
                        'rigk'
                    ]
                },
                // #844: Vollqualifiziert-Eingangsfelder (SF Text 255) — hier editierbar,
                // damit Staff die Qualifizierung direkt in der Sektion vervollständigt
                {
                    apiName: 'Standardvorgehen_Bemusterung__c',
                    label: 'Standardvorgehen Bemusterung',
                    fieldType: 'text',
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'Standard_Gesch_ftsablauf__c',
                    label: 'Standard-Geschäftsablauf',
                    fieldType: 'text',
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                }
            ]
        },
        {
            // #1657: Ergebnis der Unternehmensverifizierung. Geschrieben nur über
            // „Ergebnis am Account speichern" (/verification/<id>), daher readOnly.
            // Kundenrollen sehen die Felder nicht — sie bekommen über
            // /api/verification/account/<id>/status nur „verifiziert ja/nein".
            id: 'account__verifizierung',
            label: 'Verifizierung',
            columns: 2,
            visibleForRoles: [
                'admin',
                'staff'
            ],
            fields: [
                {
                    apiName: 'Verifizierungsstatus__c',
                    label: 'Verifizierungsstatus',
                    fieldType: 'picklist',
                    readOnly: true,
                    picklistOptions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$sfPicklist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfPicklist"])()([
                        {
                            label: 'Nicht geprüft',
                            value: 'Nicht geprüft'
                        },
                        {
                            label: 'Verifiziert',
                            value: 'Verifiziert'
                        },
                        {
                            label: 'Auffällig',
                            value: 'Auffällig'
                        },
                        {
                            label: 'Abgelehnt',
                            value: 'Abgelehnt'
                        }
                    ]),
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'Verifiziert_am__c',
                    label: 'Verifiziert am',
                    fieldType: 'date',
                    readOnly: true,
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'Verifizierungs_Score__c',
                    label: 'Verifizierungs-Score',
                    fieldType: 'number',
                    readOnly: true,
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'Verifiziert_von__c',
                    label: 'Verifiziert von',
                    fieldType: 'text',
                    readOnly: true,
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                }
            ]
        },
        {
            id: 'account__aktivitaet',
            label: 'Aktivität',
            columns: 2,
            fields: [
                {
                    apiName: 'LastActivityDate',
                    label: 'Letzte Aktivität',
                    fieldType: 'date',
                    readOnly: true,
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent'
                    ]
                },
                {
                    apiName: 'LastModifiedDate',
                    label: 'Zuletzt geändert',
                    fieldType: 'datetime',
                    readOnly: true,
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent'
                    ]
                },
                {
                    apiName: 'LastViewedDate',
                    label: 'Zuletzt angesehen',
                    fieldType: 'datetime',
                    readOnly: true,
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent'
                    ]
                }
            ]
        },
        {
            id: 'account__informationsstand',
            label: 'Informationsstand',
            columns: 2,
            defaultCollapsed: true,
            visibleForRoles: [
                'admin',
                'staff'
            ],
            fields: [
                {
                    apiName: 'TotalInformation_rate__c',
                    label: 'Gesamt-Informationsrate',
                    fieldType: 'number',
                    readOnly: true,
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'AccountInformation_rate__c',
                    label: 'Account-Informationsrate',
                    fieldType: 'number',
                    readOnly: true,
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'ResearchInformation_rate__c',
                    label: 'Recherche-Informationsrate',
                    fieldType: 'number',
                    readOnly: true,
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'InvoiceInformation_rate__c',
                    label: 'Rechnungs-Informationsrate',
                    fieldType: 'number',
                    readOnly: true,
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'ContactInformation_rate__c',
                    label: 'Kontakt-Informationsrate',
                    fieldType: 'number',
                    readOnly: true,
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'Count_Dienstleistungsmonitor__c',
                    label: 'Anzahl Dienstleistungsmonitor',
                    fieldType: 'number',
                    readOnly: true,
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'Count_Produktionsstandort__c',
                    label: 'Anzahl Produktionsstandorte',
                    fieldType: 'number',
                    readOnly: true,
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'Count_Audits__c',
                    label: 'Anzahl Audits',
                    fieldType: 'number',
                    readOnly: true,
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'Count_Certificates__c',
                    label: 'Anzahl Zertifikate',
                    fieldType: 'number',
                    readOnly: true,
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                }
            ]
        }
    ],
    tabGroups: [
        {
            id: 'stammdaten',
            label: 'Stammdaten',
            sectionIds: [
                'account__stammdaten',
                'account__kontakt',
                'account__rechnungsinformation',
                'account__anschriften',
                'account__recherche'
            ],
            isDefault: true
        },
        {
            id: 'beziehung_qualifizierung',
            label: 'Beziehung & Qualifizierung',
            sectionIds: [
                'account__verhaeltnisse',
                'account__dienstleistungsmonitor',
                'account__qualifizierung',
                'account__verifizierung'
            ]
        },
        {
            id: 'status',
            label: 'Status',
            sectionIds: [
                'account__aktivitaet',
                'account__informationsstand'
            ]
        }
    ],
    relatedLists: [
        {
            relationshipName: 'Status_Updates__r',
            label: 'Status Updates',
            fields: [
                'Id',
                'OwnerId',
                'Update_Type__c',
                'Meeting_DateTime__c',
                'CreatedById',
                'Body__c',
                'Next_Steps__c'
            ],
            maxRows: 10,
            visibleForRoles: [
                'admin',
                'staff',
                'agent',
                'user',
                'rigk'
            ],
            // #329: rigk ergänzt — der Share-Filter galt nur für 'user'; rigk hätte
            // sonst ALLE (auch interne) Status-Updates gesehen.
            whereClauseByRole: {
                user: 'Status_Update_is_Shared_with_Users__c = true',
                rigk: 'Status_Update_is_Shared_with_Users__c = true'
            }
        },
        {
            relationshipName: 'Contacts',
            label: 'Kontakte',
            fields: [
                'Id',
                'FirstName',
                'LastName',
                'Title',
                'Email',
                'Phone',
                'MobilePhone'
            ],
            maxRows: 10,
            visibleForRoles: [
                'admin',
                'staff',
                'agent',
                'user',
                'rigk'
            ]
        },
        {
            relationshipName: 'Bedarfe__r',
            label: 'Bedarfe',
            // #453 AB 2026-08-28: Monatsbedarf + Zielpreis direkt in der Zelle
            // pflegbar (Server-Allowlist bleibt rollenbewusst)
            fields: [
                'Id',
                'Name',
                'CreatedDate',
                'Bedarfsstatus__c',
                'Hauptpolymer__c',
                'Anwendung__c',
                'Materialkategorie__c',
                'Monatsbedarf_t__c',
                'Zielpreis__c'
            ],
            maxRows: 10,
            inlineEdit: true,
            visibleForRoles: [
                'admin',
                'staff',
                'agent',
                'user',
                'rigk'
            ]
        },
        {
            relationshipName: 'Produkte__r',
            label: 'Produkte',
            fields: [
                'Id',
                'Name',
                'ProductCode',
                'CreatedDate',
                'Main_polymer__c',
                'Materialkategorie__c'
            ],
            maxRows: 10,
            visibleForRoles: [
                'admin',
                'staff',
                'agent',
                'user',
                'rigk'
            ]
        },
        {
            relationshipName: 'Material_Proposals__r',
            label: 'Material Proposals (an diesen Account)',
            fields: [
                'Id',
                'Name',
                'Date__c',
                'Status__c',
                'Product__c',
                'Product_Code__c',
                'Purchasing_price_per_ton__c',
                'Sales_Price_per_ton__c',
                'Sample_Order_from_Supplier__c',
                'Sample_Sending_to_Account__c'
            ],
            maxRows: 10,
            visibleForRoles: [
                'admin',
                'staff',
                'agent',
                'user',
                'rigk'
            ]
        },
        {
            relationshipName: 'Material_Proposals1__r',
            label: 'Material Proposals (von diesem Supplier)',
            fields: [
                'Id',
                'Name',
                'Date__c',
                'Status__c',
                'Product__c',
                'Product_Code__c',
                'Purchasing_price_per_ton__c',
                'Sales_Price_per_ton__c',
                'Sample_Order_from_Supplier__c',
                'Sample_Sending_to_Account__c'
            ],
            maxRows: 10,
            visibleForRoles: [
                'admin',
                'staff',
                'agent',
                'user',
                'rigk'
            ]
        },
        {
            relationshipName: 'Angebotene_Lohndienstleistungen__r',
            label: 'Angebotene Lohndienstleistungen',
            fields: [
                'Id',
                'Name',
                'CreatedDate',
                'Dienstleistungskategorie__c',
                'Preis_pro_Tonne_standard__c',
                'Beschreibung__c'
            ],
            maxRows: 10,
            visibleForRoles: [
                'admin',
                'staff',
                'agent'
            ]
        },
        {
            relationshipName: 'Supplier_audits__r',
            label: 'Audits',
            fields: [
                'Id',
                'Name',
                'Audit_Type__c',
                'Audit_Direction__c',
                'Audit_result__c',
                'Date_of_visit__c',
                'Valid_to__c'
            ],
            maxRows: 10,
            visibleForRoles: [
                'admin',
                'staff',
                'agent',
                'user',
                'rigk'
            ]
        },
        {
            relationshipName: 'Unternehmenszertifikate__r',
            label: 'Unternehmenszertifikate',
            fields: [
                'Id',
                'Name',
                'Zertifikate__c',
                'G_ltig_von__c',
                'G_ltig_bis__c',
                'Notiz__c'
            ],
            maxRows: 10,
            visibleForRoles: [
                'admin',
                'staff',
                'agent',
                'user',
                'rigk'
            ]
        },
        {
            relationshipName: 'Orders',
            label: 'Aufträge (Kunde)',
            // #1809: Order.Name ist meist leer — OrderNumber ist der Titel
            fields: [
                'Id',
                'OrderNumber',
                'Status',
                'TotalAmount'
            ],
            maxRows: 10,
            visibleForRoles: [
                'admin',
                'staff',
                'agent',
                'user',
                'rigk'
            ]
        },
        {
            relationshipName: 'Auftr_ge__r',
            label: 'Aufträge (Lieferant)',
            // #1809: Order.Name ist meist leer — OrderNumber ist der Titel
            fields: [
                'Id',
                'OrderNumber',
                'Status',
                'TotalAmount'
            ],
            maxRows: 10,
            visibleForRoles: [
                'admin',
                'staff',
                'agent',
                'user',
                'rigk'
            ]
        },
        {
            relationshipName: 'Abrechnungen__r',
            label: 'Abrechnungen',
            fields: [
                'Id',
                'Name',
                'Belegnummer__c',
                'Rechnungstyp__c',
                'Belegdatum__c',
                'Rechnungsbetrag_Bericht__c'
            ],
            maxRows: 10,
            visibleForRoles: [
                'admin',
                'staff',
                'agent',
                'user',
                'rigk'
            ]
        },
        {
            relationshipName: 'Reklamationen__r',
            label: 'Reklamationen',
            fields: [
                'Id',
                'Name',
                'Ausl_sender_Auftrag__c',
                'Status__c',
                'St_rke__c',
                'Reklamation_betrifft__c'
            ],
            maxRows: 10,
            visibleForRoles: [
                'admin',
                'staff',
                'agent',
                'user',
                'rigk'
            ]
        },
        {
            relationshipName: 'Produktionsstandorte__r',
            label: 'Produktionsstandorte',
            fields: [
                'Id',
                'Name',
                'Strasse__c',
                'PLZ__c',
                'Ort__c',
                'Land__c',
                'Ist_plastship_Lager__c',
                'Lagermenge_Gesamt__c'
            ],
            maxRows: 10,
            visibleForRoles: [
                'admin',
                'staff',
                'agent',
                'user',
                'rigk'
            ]
        },
        {
            // #826: Aufgaben am Datensatz — Zeile öffnet die Aufgabe im Drawer
            relationshipName: 'Tasks',
            label: 'Aufgaben',
            fields: [
                'Id',
                'Subject',
                'Owner.Alias',
                'ActivityDate',
                'Status',
                'Priority'
            ],
            maxRows: 10,
            visibleForRoles: [
                'admin',
                'staff',
                'agent'
            ]
        },
        {
            relationshipName: 'Feedbacks__r',
            label: 'Prozessfeedback',
            fields: [
                'Id',
                'Name',
                'CreatedDate',
                'Status__c',
                'Current_State_Evaluation__c',
                'Description__c'
            ],
            maxRows: 10,
            visibleForRoles: [
                'admin',
                'staff',
                'agent',
                'user',
                'rigk'
            ]
        },
        {
            relationshipName: 'AttachedContentDocuments',
            label: 'Dateien',
            fields: [
                'Id',
                'Title'
            ],
            maxRows: 10,
            visibleForRoles: [
                'admin',
                'staff',
                'agent',
                'user',
                'rigk'
            ]
        }
    ],
    relatedListTabGroups: [
        {
            id: 'vertrieb',
            label: 'Vertrieb',
            relationshipNames: [
                'Status_Updates__r',
                'Contacts',
                'Bedarfe__r',
                'Produkte__r',
                'Material_Proposals__r',
                'Material_Proposals1__r',
                'Angebotene_Lohndienstleistungen__r'
            ],
            isDefault: true
        },
        {
            id: 'operations',
            label: 'Operations',
            relationshipNames: [
                'Produktionsstandorte__r',
                'Orders',
                'Auftr_ge__r',
                'Abrechnungen__r',
                'Reklamationen__r'
            ]
        },
        {
            id: 'qualitaet_dateien',
            label: 'Qualität & Dateien',
            relationshipNames: [
                'Supplier_audits__r',
                'Unternehmenszertifikate__r',
                'Feedbacks__r',
                'AttachedContentDocuments'
            ]
        }
    ],
    systemFields: [
        'Id',
        'CreatedDate',
        'CreatedById',
        'LastModifiedDate',
        'LastModifiedById',
        'OwnerId'
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/config/entityFields/AktuellerPreisUndVerfugbarkeit.fields.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// CURATED — do not regenerate (--force) without re-applying the lean rules in LEAN-CURATION.md
/**
 * Entity Field Configuration: Aktueller_Preis_und_Verf_gbarkeit__c
 *
 * Nachgezogen beim Abloesen von fieldMetadataRegistry: dies war das letzte
 * Objekt, fuer das GenericEntityForm noch auf die alte ENTITY_FORM_CONFIGS
 * zurueckfiel. Abschnitte und Pflichtfelder entsprechen genau der bisherigen
 * Rueckfallebene; Feldtypen und Labels stammen aus dem generierten
 * Salesforce-Typ (src/types/salesforce/Aktueller_Preis_und_Verf_gbarkeit__c.ts),
 * nicht aus einer Handkopie.
 */ __turbopack_context__.s([
    "AktuellerPreisUndVerfugbarkeitFieldConfig",
    ()=>AktuellerPreisUndVerfugbarkeitFieldConfig
]);
const AktuellerPreisUndVerfugbarkeitFieldConfig = {
    entityType: 'Aktueller_Preis_und_Verf_gbarkeit__c',
    entityLabel: 'Aktueller Preis und Verfügbarkeit',
    headerFields: [
        'Name',
        'Preis_pro_Tonne__c',
        'Tonnen__c'
    ],
    sections: [
        {
            id: 'preis',
            label: 'Preisinformationen',
            columns: 2,
            visibleForRoles: [
                'admin',
                'staff',
                'agent',
                'accounting'
            ],
            fields: [
                {
                    apiName: 'Preis_pro_Tonne__c',
                    label: 'Preis pro Tonne EXW',
                    fieldType: 'currency',
                    currencyCode: 'EUR'
                },
                {
                    apiName: 'Preis_pro_Tonne_DDP__c',
                    label: 'Preis pro Tonne DDP',
                    fieldType: 'currency',
                    currencyCode: 'EUR'
                },
                {
                    apiName: 'Tonnen__c',
                    label: 'Tonnen',
                    fieldType: 'number'
                }
            ]
        },
        {
            id: 'gueltigkeit',
            label: 'Gültigkeit',
            columns: 2,
            visibleForRoles: [
                'admin',
                'staff',
                'agent',
                'accounting'
            ],
            fields: [
                {
                    apiName: 'g_ltig_ab__c',
                    label: 'gültig ab',
                    fieldType: 'date'
                },
                {
                    apiName: 'g_ltig_bis__c',
                    label: 'gültig bis',
                    fieldType: 'date'
                },
                {
                    apiName: 'Turnus_in_Monaten__c',
                    label: 'Turnus in Monaten',
                    fieldType: 'number'
                }
            ]
        },
        {
            id: 'verknuepfungen',
            label: 'Verknüpfungen',
            columns: 2,
            visibleForRoles: [
                'admin',
                'staff',
                'agent',
                'accounting'
            ],
            fields: [
                {
                    apiName: 'Produkt__c',
                    label: 'Produkt',
                    fieldType: 'lookup',
                    lookupObjectType: 'Product2'
                },
                {
                    apiName: 'Bedarfe__c',
                    label: 'Bedarfe',
                    fieldType: 'lookup',
                    lookupObjectType: 'Bedarfe__c'
                },
                {
                    apiName: 'Material_Proposal__c',
                    label: 'Material Proposal',
                    fieldType: 'lookup',
                    lookupObjectType: 'Material_Proposal__c'
                }
            ]
        },
        {
            id: 'notizen',
            label: 'Notizen',
            columns: 1,
            visibleForRoles: [
                'admin',
                'staff',
                'agent',
                'accounting'
            ],
            fields: [
                {
                    apiName: 'Notiz__c',
                    label: 'Notiz',
                    fieldType: 'textarea'
                }
            ]
        }
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/config/entityFields/AuditProperty.fields.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// CURATED — do not regenerate (--force) without re-applying the lean rules in LEAN-CURATION.md
/**
 * Entity Field Configuration: AuditProperty__c (Prüfparameter, #331)
 *
 * Prüfergebnis-Erfassung an der Materialanalyse (6.900+ Bestandsdatensätze).
 * Rollentrennung nach #202 §21: Der Dienstleister (laboratory) darf NUR die
 * Ergebnis-Felder pflegen (Value__c, Test_parameter1/2__c, Text_Value__c) —
 * Definition (Typ, Standard) und Verknüpfungen sind für ihn read-only
 * (#329-Mechanik: rollen-getrennte Sections; der Server filtert PATCHes über
 * getUpdatableFields(role)).
 *
 * Formeln laut SF-Describe (Name__c, Name_kurz__c, Category_AuditPropertyType__c,
 * Berechnung_*) sind read-only; Materialanalyse__c ist create-only (#404,
 * readOnlyOnEdit). Name ist Auto-Nummer.
 */ __turbopack_context__.s([
    "AuditPropertyFieldConfig",
    ()=>AuditPropertyFieldConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$sfPicklist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/entityFields/sfPicklist.ts [app-client] (ecmascript)");
;
const AuditPropertyFieldConfig = {
    entityType: 'AuditProperty__c',
    entityLabel: 'Prüfparameter',
    headerFields: [
        'Name',
        'Name__c',
        'Category_AuditPropertyType__c'
    ],
    sections: [
        {
            id: 'definition',
            label: 'Prüf-Definition',
            columns: 2,
            visibleForRoles: [
                'admin',
                'staff',
                'agent'
            ],
            fields: [
                {
                    apiName: 'Name',
                    label: 'Prüfparameter-Nr.',
                    fieldType: 'text',
                    readOnly: true
                },
                {
                    apiName: 'Name__c',
                    label: 'Bezeichnung',
                    fieldType: 'text',
                    readOnly: true // Formel aus dem AuditPropertyType
                },
                {
                    apiName: 'Type__c',
                    label: 'Prüfparameter-Typ',
                    fieldType: 'lookup',
                    lookupObjectType: 'AuditPropertyType__c'
                },
                {
                    apiName: 'Category_AuditPropertyType__c',
                    label: 'Kategorie',
                    fieldType: 'text',
                    readOnly: true // Formel
                },
                {
                    apiName: 'Test_standard__c',
                    label: 'Prüfnorm',
                    fieldType: 'picklist',
                    picklistOptions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$sfPicklist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfPicklist"])()([
                        {
                            label: 'ISO 1133',
                            value: 'ISO 1133'
                        },
                        {
                            label: 'ISO 1183',
                            value: 'ISO 1183'
                        }
                    ])
                }
            ]
        },
        {
            // #202 §21: die vier Dienstleister-editierbaren Felder.
            id: 'ergebnis',
            label: 'Prüfergebnis',
            columns: 2,
            visibleForRoles: [
                'admin',
                'staff',
                'agent',
                'laboratory'
            ],
            fields: [
                {
                    apiName: 'Value__c',
                    label: 'Wert',
                    fieldType: 'number'
                },
                {
                    apiName: 'Test_parameter1__c',
                    label: 'Test-Parameter 1',
                    fieldType: 'text'
                },
                {
                    apiName: 'Test_parameter2__c',
                    label: 'Test-Parameter 2',
                    fieldType: 'text'
                },
                {
                    apiName: 'Text_Value__c',
                    label: 'Text-Ergebnis',
                    fieldType: 'textarea'
                }
            ]
        },
        {
            id: 'grenzwerte',
            label: 'Grenzwerte',
            columns: 2,
            visibleForRoles: [
                'admin',
                'staff',
                'agent'
            ],
            fields: [
                {
                    apiName: 'Value_min__c',
                    label: 'Wert min',
                    fieldType: 'number'
                },
                {
                    apiName: 'Value_max__c',
                    label: 'Wert max',
                    fieldType: 'number'
                }
            ]
        },
        {
            id: 'verknuepfungen',
            label: 'Verknüpfungen',
            columns: 2,
            visibleForRoles: [
                'admin',
                'staff',
                'agent'
            ],
            fields: [
                {
                    apiName: 'Materialanalyse__c',
                    label: 'Materialanalyse',
                    fieldType: 'lookup',
                    lookupObjectType: 'Materialanalyse__c',
                    readOnlyOnEdit: true // #404: createable, not updateable in SF
                },
                {
                    apiName: 'Monitored_Material__c',
                    label: 'Monitored Material',
                    fieldType: 'lookup',
                    lookupObjectType: 'Monitored_Material__c'
                }
            ]
        },
        // ── Dienstleister-Perspektive (#329-Muster): Definition & Kontext nur lesend ──
        {
            id: 'definition_laboratory',
            label: 'Prüf-Definition',
            columns: 2,
            visibleForRoles: [
                'laboratory'
            ],
            fields: [
                {
                    apiName: 'Name',
                    label: 'Prüfparameter-Nr.',
                    fieldType: 'text',
                    readOnly: true
                },
                {
                    apiName: 'Name__c',
                    label: 'Bezeichnung',
                    fieldType: 'text',
                    readOnly: true
                },
                {
                    apiName: 'Category_AuditPropertyType__c',
                    label: 'Kategorie',
                    fieldType: 'text',
                    readOnly: true
                },
                {
                    apiName: 'Test_standard__c',
                    label: 'Prüfnorm',
                    fieldType: 'text',
                    readOnly: true
                },
                {
                    apiName: 'Materialanalyse__c',
                    label: 'Materialanalyse',
                    fieldType: 'lookup',
                    lookupObjectType: 'Materialanalyse__c',
                    readOnly: true
                }
            ]
        }
    ],
    relatedLists: [
        {
            relationshipName: 'AttachedContentDocuments',
            label: 'Dateien',
            fields: [
                'Id',
                'Title'
            ],
            maxRows: 10,
            visibleForRoles: [
                'admin',
                'staff',
                'laboratory'
            ]
        }
    ],
    systemFields: [
        'Id',
        'CreatedDate',
        'CreatedById',
        'LastModifiedDate',
        'LastModifiedById'
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/config/entityFields/Bedarfe.fields.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// CURATED — do not regenerate (--force) without re-applying the lean rules in LEAN-CURATION.md
/**
 * Entity Field Configuration: Bedarfe__c (lean staff view)
 *
 * Curated against GitLab #200 §1.2 (Mini-Detail-Views). The material-spec block is
 * required for material matching but was missing from the FlexiPage-generated config
 * — re-added from Salesforce metadata and split into 'Materialprofil' (categorical)
 * and 'Physikalische Kennwerte' (numeric). The physical block is the complete Min/Max
 * set per property (MFR + Mittelwert, Dichte, Aschegehalt, Korngröße, Zugfestigkeit,
 * Zug-E-Modul, Bruchdehnung, Kerbschlagzähigkeit). The *_Text__c free-text shadow
 * fields are intentionally omitted (the picklist is the working field).
 *
 * Per PM: process lookups (Projekt/Kundenvorgang/Onboarding/Produktionsstandort),
 * the qualification flags and Sichtbar_f_r_Kunden__c are kept. Dropped: denormalised
 * account meta (Land/Inhaber/Verhältnis, Counts, First_* dates, Time_to_Action, Ist_Key_Account),
 * Risikobewertung and the legacy Opportunity__c lookup.
 *
 * Materialkategorie__c is a lookup to the Materialkategorie__c object, populated by
 * a Salesforce/Apex categorisation process — read-only for staff.
 *
 * Downstream roles (agent/user/rigk) untouched; handled in a later step.
 */ __turbopack_context__.s([
    "BedarfeFieldConfig",
    ()=>BedarfeFieldConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$sfPicklist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/entityFields/sfPicklist.ts [app-client] (ecmascript)");
;
const BedarfeFieldConfig = {
    entityType: 'Bedarfe__c',
    entityLabel: 'Bedarfe',
    headerFields: [
        'Name',
        'Bedarfsstatus__c',
        'Account__c',
        'Hauptpolymer__c'
    ],
    // #353: Bedarfsstatus ist intern (Kunde bekommt ihn nicht geliefert → zeigte "-").
    externalHeaderFields: [
        'Name',
        'Account__c',
        'Hauptpolymer__c'
    ],
    sections: [
        {
            id: 'bedarf',
            label: 'Bedarf',
            columns: 2,
            fields: [
                {
                    apiName: 'Name',
                    label: 'Bedarfe-Name',
                    fieldType: 'text',
                    required: true
                },
                {
                    // Customer-facing roles never see the picklist (#228 Phase 4a) —
                    // POST /api/salesforce/requirements back-fills 'Aktuell auf der Suche'.
                    apiName: 'Bedarfsstatus__c',
                    label: 'Bedarfsstatus',
                    fieldType: 'picklist',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent'
                    ],
                    picklistOptions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$sfPicklist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfPicklist"])()([
                        {
                            label: 'On hold',
                            value: 'On hold'
                        },
                        {
                            label: 'Recherchierter Bedarf',
                            value: 'Recherchierter Bedarf'
                        },
                        {
                            label: 'Bestätigter Bedarf',
                            value: 'Bestätigter Bedarf'
                        },
                        {
                            label: 'Aktuell auf der Suche',
                            value: 'Aktuell auf der Suche'
                        },
                        {
                            label: 'In Bearbeitung durch plastship',
                            value: 'In Bearbeitung durch plastship'
                        }
                    ])
                },
                {
                    // Customer-facing roles get this auto-prefilled from the server
                    // using their own Account; the form does not expose it (#228 Phase 4a).
                    apiName: 'Account__c',
                    label: 'Account',
                    fieldType: 'lookup',
                    lookupObjectType: 'Account',
                    required: true,
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent'
                    ]
                },
                {
                    apiName: 'OwnerId',
                    label: 'Inhaber',
                    fieldType: 'lookup',
                    lookupObjectType: 'User',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent'
                    ]
                },
                {
                    apiName: 'Beschreibung_Bedarf__c',
                    label: 'Beschreibung Bedarf',
                    fieldType: 'textarea'
                },
                {
                    apiName: 'Monatsbedarf_t__c',
                    label: 'Monatsbedarf (t)',
                    fieldType: 'number'
                },
                {
                    apiName: 'Zielpreis__c',
                    label: 'Zielpreis',
                    fieldType: 'currency',
                    currencyCode: 'EUR'
                },
                {
                    apiName: 'Mengenpotenzial_t_p_a__c',
                    label: 'Mengenpotenzial t p.a.',
                    fieldType: 'number'
                }
            ]
        },
        {
            id: 'qualifizierung_verknuepfung',
            label: 'Qualifizierung & Verknüpfung',
            columns: 2,
            visibleForRoles: [
                'admin',
                'staff',
                'agent'
            ],
            fields: [
                {
                    apiName: 'Im_Fokus__c',
                    label: 'Im Fokus',
                    fieldType: 'boolean'
                },
                {
                    apiName: 'Hohes_Potenzial__c',
                    label: 'Hohes Potenzial',
                    fieldType: 'boolean'
                },
                {
                    apiName: 'Hohes_Risiko__c',
                    label: 'Hohes Risiko',
                    fieldType: 'boolean'
                },
                {
                    apiName: 'Sichtbar_f_r_Kunden__c',
                    label: 'Sichtbar für Kunden',
                    fieldType: 'boolean'
                },
                {
                    apiName: 'Projekt__c',
                    label: 'Projekt',
                    fieldType: 'lookup',
                    lookupObjectType: 'Projekt__c'
                },
                {
                    apiName: 'Kundenvorgang__c',
                    label: 'Kundenvorgang',
                    fieldType: 'lookup',
                    lookupObjectType: 'Case'
                },
                {
                    apiName: 'Onboarding__c',
                    label: 'Onboarding',
                    fieldType: 'lookup',
                    lookupObjectType: 'Onboarding__c'
                },
                {
                    apiName: 'Produktionsstandort__c',
                    label: 'Produktionsstandort',
                    fieldType: 'lookup',
                    lookupObjectType: 'Produktionsstandort__c'
                }
            ]
        },
        {
            id: 'materialprofil',
            label: 'Materialprofil',
            columns: 2,
            fields: [
                {
                    apiName: 'Materialkategorie__c',
                    label: 'Materialkategorie',
                    fieldType: 'lookup',
                    lookupObjectType: 'Materialkategorie__c',
                    readOnly: true
                },
                {
                    apiName: 'Hauptpolymer__c',
                    label: 'Hauptpolymer',
                    fieldType: 'picklist',
                    picklistOptions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$sfPicklist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfPicklist"])()([
                        {
                            label: 'PE-HD',
                            value: 'PE-HD'
                        },
                        {
                            label: 'PE-HMW',
                            value: 'PE-HMW'
                        },
                        {
                            label: 'PE-LD',
                            value: 'PE-LD'
                        },
                        {
                            label: 'PE-LLD',
                            value: 'PE-LLD'
                        },
                        {
                            label: 'PE-MD',
                            value: 'PE-MD'
                        },
                        {
                            label: 'PE-UHMW',
                            value: 'PE-UHMW'
                        },
                        {
                            label: 'PE-X',
                            value: 'PE-X'
                        },
                        {
                            label: 'PP',
                            value: 'PP'
                        },
                        {
                            label: 'PP-C',
                            value: 'PP-C'
                        },
                        {
                            label: 'PP-H',
                            value: 'PP-H'
                        },
                        {
                            label: 'PP-BOPS',
                            value: 'PP-BOPS'
                        },
                        {
                            label: 'PS',
                            value: 'PS'
                        },
                        {
                            label: 'PS-E',
                            value: 'PS-E'
                        },
                        {
                            label: 'PS-I',
                            value: 'PS-I'
                        },
                        {
                            label: 'PET',
                            value: 'PET'
                        },
                        {
                            label: 'PET-A',
                            value: 'PET-A'
                        },
                        {
                            label: 'PET-C',
                            value: 'PET-C'
                        },
                        {
                            label: 'PET-G',
                            value: 'PET-G'
                        },
                        {
                            label: 'PVC',
                            value: 'PVC'
                        },
                        {
                            label: 'PVC-U',
                            value: 'PVC-U'
                        },
                        {
                            label: 'PVC-P',
                            value: 'PVC-P'
                        },
                        {
                            label: 'PA6',
                            value: 'PA6'
                        },
                        {
                            label: 'PA66',
                            value: 'PA66'
                        },
                        {
                            label: 'PA11',
                            value: 'PA11'
                        },
                        {
                            label: 'PA12',
                            value: 'PA12'
                        },
                        {
                            label: 'PC',
                            value: 'PC'
                        },
                        {
                            label: 'ABS',
                            value: 'ABS'
                        },
                        {
                            label: 'ASA',
                            value: 'ASA'
                        },
                        {
                            label: 'SAN',
                            value: 'SAN'
                        },
                        {
                            label: 'PBT',
                            value: 'PBT'
                        },
                        {
                            label: 'PMMA',
                            value: 'PMMA'
                        },
                        {
                            label: 'POM',
                            value: 'POM'
                        },
                        {
                            label: 'PPS',
                            value: 'PPS'
                        },
                        {
                            label: 'PUR',
                            value: 'PUR'
                        },
                        {
                            label: 'SBR',
                            value: 'SBR'
                        },
                        {
                            label: 'BR',
                            value: 'BR'
                        },
                        {
                            label: 'NBR',
                            value: 'NBR'
                        },
                        {
                            label: 'NR',
                            value: 'NR'
                        },
                        {
                            label: 'COC',
                            value: 'COC'
                        },
                        {
                            label: 'EVAC',
                            value: 'EVAC'
                        },
                        {
                            label: 'EVOH',
                            value: 'EVOH'
                        },
                        {
                            label: 'EPDM',
                            value: 'EPDM'
                        },
                        {
                            label: 'TPE',
                            value: 'TPE'
                        },
                        {
                            label: 'TPU',
                            value: 'TPU'
                        }
                    ])
                },
                {
                    apiName: 'Materialtyp__c',
                    label: 'Materialtyp',
                    fieldType: 'picklist',
                    picklistOptions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$sfPicklist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfPicklist"])()([
                        {
                            label: 'Ballenware',
                            value: 'Ballenware'
                        },
                        {
                            label: 'Mahlgut',
                            value: 'Mahlgut'
                        },
                        {
                            label: 'Regranulat',
                            value: 'Regranulat'
                        },
                        {
                            label: 'Compound',
                            value: 'Compound'
                        },
                        {
                            label: 'Neuware',
                            value: 'Neuware'
                        },
                        {
                            label: 'Masterbatch',
                            value: 'Masterbatch'
                        },
                        {
                            label: 'Wertstoff',
                            value: 'Wertstoff'
                        },
                        {
                            label: 'Agglomerat',
                            value: 'Agglomerat'
                        },
                        {
                            label: 'Flakes',
                            value: 'Flakes'
                        },
                        {
                            label: 'Rollenware',
                            value: 'Rollenware'
                        },
                        {
                            label: 'Rolle auf Palette',
                            value: 'Rolle auf Palette'
                        }
                    ])
                },
                {
                    // Restricted Picklist — per SF-describe abgeglichen (2026-07-07): nur
                    // diese 4 Werte aktiv; die alte 14er-Liste warf beim Speichern
                    // INVALID_OR_NULL_FOR_RESTRICTED_PICKLIST (vgl. Product2-Farbe).
                    apiName: 'Materialfarbe__c',
                    label: 'Materialfarbe',
                    fieldType: 'picklist',
                    picklistOptions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$sfPicklist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfPicklist"])()([
                        {
                            label: 'natur',
                            value: 'natur'
                        },
                        {
                            label: 'bunt-hell',
                            value: 'bunt-hell'
                        },
                        {
                            label: 'bunt-dunkel',
                            value: 'bunt-dunkel'
                        },
                        {
                            label: 'schwarz',
                            value: 'schwarz'
                        }
                    ])
                },
                {
                    apiName: 'Rezyklatdefinition__c',
                    label: 'Rezyklatdefinition',
                    fieldType: 'picklist',
                    picklistOptions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$sfPicklist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfPicklist"])()([
                        {
                            label: 'Post-consumer (PCR)',
                            value: 'Post-consumer (PCR)'
                        },
                        {
                            label: 'Pre-consumer (PIR)',
                            value: 'Pre-consumer (PIR)'
                        },
                        {
                            label: 'Pre- & post-consumer Mischung',
                            value: 'Pre- & post-consumer Mischung'
                        }
                    ])
                },
                {
                    apiName: 'Verarbeitungsverfahren__c',
                    label: 'Verarbeitungsverfahren',
                    fieldType: 'picklist',
                    picklistOptions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$sfPicklist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfPicklist"])()([
                        {
                            label: 'Extrusion',
                            value: 'Extrusion'
                        },
                        {
                            label: 'Blown Film Extrusion',
                            value: 'Blown Film Extrusion'
                        },
                        {
                            label: 'Cast Film Extrusion',
                            value: 'Cast Film Extrusion'
                        },
                        {
                            label: 'Injection Molding',
                            value: 'Injection Molding'
                        },
                        {
                            label: 'Others',
                            value: 'Others'
                        },
                        {
                            label: 'Baling',
                            value: 'Baling'
                        },
                        {
                            label: 'Agglomerating',
                            value: 'Agglomerating'
                        },
                        {
                            label: 'Grinding',
                            value: 'Grinding'
                        },
                        {
                            label: 'Washing',
                            value: 'Washing'
                        }
                    ])
                },
                {
                    // Restricted Picklist — per SF-describe abgeglichen (2026-07-07): die
                    // alte Liste enthielt nicht (mehr) existierende Werte ('Building and
                    // Construction', 'Electronic and electrical equipment', 'Others',
                    // 'Tubes' …) → INVALID_OR_NULL_FOR_RESTRICTED_PICKLIST beim Speichern.
                    apiName: 'Anwendung__c',
                    label: 'Anwendung',
                    fieldType: 'picklist',
                    picklistOptions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$sfPicklist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfPicklist"])()([
                        {
                            label: 'Automotive',
                            value: 'Automotive'
                        },
                        {
                            label: 'Building & Construction',
                            value: 'Building & Construction'
                        },
                        {
                            label: 'Packaging: Food',
                            value: 'Packaging: Food'
                        },
                        {
                            label: 'Packaging: Industrial',
                            value: 'Packaging: Industrial'
                        },
                        {
                            label: 'Packaging: Rigid',
                            value: 'Packaging: Rigid'
                        },
                        {
                            label: 'Packaging: Flexible',
                            value: 'Packaging: Flexible'
                        },
                        {
                            label: 'Packaging: Cosmetics',
                            value: 'Packaging: Cosmetics'
                        },
                        {
                            label: 'Electrical & Electronics',
                            value: 'Electrical & Electronics'
                        },
                        {
                            label: 'Household & Consumer Goods',
                            value: 'Household & Consumer Goods'
                        },
                        {
                            label: 'Agriculture',
                            value: 'Agriculture'
                        },
                        {
                            label: 'Medical',
                            value: 'Medical'
                        },
                        {
                            label: 'Pipes & Tubes',
                            value: 'Pipes'
                        },
                        {
                            label: 'Wire & Cable',
                            value: 'Wire & Cable'
                        },
                        {
                            label: 'Fibers',
                            value: 'Fibers'
                        },
                        {
                            label: 'Specialty',
                            value: 'Specialty'
                        },
                        {
                            label: 'General / Other',
                            value: 'General / Other'
                        },
                        {
                            label: 'Films',
                            value: 'Films'
                        },
                        {
                            label: 'Furniture',
                            value: 'Furniture'
                        },
                        {
                            label: 'Waste (PCR)',
                            value: 'Waste (PCR)'
                        },
                        {
                            label: 'Waste (PIR)',
                            value: 'Waste (PIR)'
                        },
                        {
                            label: 'Regrind',
                            value: 'Regrind'
                        },
                        {
                            label: 'Agglomerates',
                            value: 'Agglomerates'
                        },
                        {
                            label: 'Re-granulates',
                            value: 'Re-granulates'
                        },
                        {
                            label: 'Compounds',
                            value: 'Compounds'
                        }
                    ])
                },
                {
                    apiName: 'F_llstoff_Text__c',
                    label: 'Füllstoff',
                    fieldType: 'text'
                }
            ]
        },
        {
            id: 'physikalische_kennwerte',
            label: 'Physikalische Kennwerte',
            columns: 2,
            fields: [
                {
                    apiName: 'MFR_Min__c',
                    label: 'MFR Min',
                    fieldType: 'number'
                },
                {
                    apiName: 'MFR_Max__c',
                    label: 'MFR Max',
                    fieldType: 'number'
                },
                {
                    apiName: 'MFR_Mittelwert__c',
                    label: 'MFR Mittelwert',
                    fieldType: 'number'
                },
                {
                    apiName: 'MFR_Temp__c',
                    label: 'MFR Temp',
                    fieldType: 'text'
                },
                {
                    apiName: 'MFR_kg__c',
                    label: 'MFR kg',
                    fieldType: 'text'
                },
                {
                    apiName: 'Dichte_Min__c',
                    label: 'Dichte Min',
                    fieldType: 'number'
                },
                {
                    apiName: 'Dichte_Max__c',
                    label: 'Dichte Max',
                    fieldType: 'number'
                },
                {
                    apiName: 'Aschegehalt_Min__c',
                    label: 'Aschegehalt Min',
                    fieldType: 'number'
                },
                {
                    apiName: 'Aschegehalt_Max__c',
                    label: 'Aschegehalt Max',
                    fieldType: 'number'
                },
                {
                    apiName: 'Korngr_e_mm_Min__c',
                    label: 'Korngröße mm Min',
                    fieldType: 'number'
                },
                {
                    apiName: 'Korngr_e_mm_Max__c',
                    label: 'Korngröße mm Max',
                    fieldType: 'number'
                },
                {
                    apiName: 'Zugfestigkeit_Min__c',
                    label: 'Zugfestigkeit Min',
                    fieldType: 'number'
                },
                {
                    apiName: 'Zugfestigkeit_Max__c',
                    label: 'Zugfestigkeit Max',
                    fieldType: 'number'
                },
                {
                    apiName: 'Zug_E_Modul_Min__c',
                    label: 'Zug E-Modul Min',
                    fieldType: 'number'
                },
                {
                    apiName: 'Zug_E_Modul_Max__c',
                    label: 'Zug E-Modul Max',
                    fieldType: 'number'
                },
                {
                    apiName: 'Bruchdehnung_Min__c',
                    label: 'Bruchdehnung Min',
                    fieldType: 'number'
                },
                {
                    apiName: 'Bruchdehnung_Max__c',
                    label: 'Bruchdehnung Max',
                    fieldType: 'number'
                },
                {
                    apiName: 'Kerbschlagzaehigkeit_Min__c',
                    label: 'Kerbschlagzähigkeit Min',
                    fieldType: 'number'
                },
                {
                    apiName: 'Kerbschlagzaehigkeit_Max__c',
                    label: 'Kerbschlagzähigkeit Max',
                    fieldType: 'number'
                }
            ]
        },
        {
            id: 'status_aktivitaet',
            label: 'Status & Aktivität',
            columns: 2,
            visibleForRoles: [
                'admin',
                'staff',
                'agent'
            ],
            fields: [
                {
                    apiName: 'Count_Material_Proposal__c',
                    label: 'Anzahl Material Proposals',
                    fieldType: 'number',
                    readOnly: true
                },
                {
                    apiName: 'LastActivityDate',
                    label: 'Letzte Aktivität',
                    fieldType: 'date',
                    readOnly: true
                },
                {
                    apiName: 'LastModifiedDate',
                    label: 'Zuletzt geändert',
                    fieldType: 'datetime',
                    readOnly: true
                },
                {
                    apiName: 'LastViewedDate',
                    label: 'Zuletzt angesehen',
                    fieldType: 'datetime',
                    readOnly: true
                }
            ]
        }
    ],
    relatedLists: [
        {
            relationshipName: 'Status_Updates__r',
            label: 'Status Updates',
            fields: [
                'Id',
                'Owner.Alias',
                'Update_Type__c',
                'Meeting_DateTime__c',
                'CreatedById',
                'Body__c',
                'Next_Steps__c'
            ],
            maxRows: 10,
            visibleForRoles: [
                'admin',
                'staff',
                'agent'
            ]
        },
        {
            relationshipName: 'Material_Proposals__r',
            label: 'Material Proposals',
            // #329: staff-Variante — enthält Einkaufspreis, daher NICHT für Externe
            // (die bekommen die schlanke Kunden-Variante darunter).
            fields: [
                'Id',
                'Name',
                'Date__c',
                'Status__c',
                'Product__c',
                'Product_Code__c',
                'Purchasing_price_per_ton__c',
                'Sales_Price_per_ton__c',
                'Sample_Order_from_Supplier__c',
                'Sample_Sending_to_Account__c'
            ],
            maxRows: 10,
            visibleForRoles: [
                'admin',
                'staff',
                'agent'
            ]
        },
        {
            // #329 Welle A: Kunden-Variante ohne Einkaufspreis/Lieferanten-Bezug.
            // Disjunkte Rollen zur staff-Variante oben (Subquery-Builder filtert
            // pro Rolle, sonst doppelte Subquery).
            relationshipName: 'Material_Proposals__r',
            label: 'Material Proposals',
            fields: [
                'Id',
                'Name',
                'Date__c',
                'Status__c',
                'Product__c',
                'Sales_Price_per_ton__c'
            ],
            maxRows: 10,
            visibleForRoles: [
                'user',
                'rigk'
            ]
        },
        {
            relationshipName: 'Aktuelle_Preise_und_Verf_gbarkeiten__r',
            label: 'Aktuelle Preise & Verfügbarkeiten',
            fields: [
                'Id',
                'Name',
                'Owner.Alias',
                'g_ltig_ab__c',
                'Preis_pro_Tonne__c',
                'Preis_pro_Tonne_DDP__c',
                'Tonnen__c'
            ],
            maxRows: 5,
            sortField: 'g_ltig_ab__c',
            sortOrder: 'desc',
            visibleForRoles: [
                'admin',
                'staff'
            ]
        },
        {
            // #826: Aufgaben am Datensatz — Zeile öffnet die Aufgabe im Drawer
            relationshipName: 'Tasks',
            label: 'Aufgaben',
            fields: [
                'Id',
                'Subject',
                'Owner.Alias',
                'ActivityDate',
                'Status',
                'Priority'
            ],
            maxRows: 10,
            visibleForRoles: [
                'admin',
                'staff',
                'agent'
            ]
        },
        {
            relationshipName: 'Feedbacks__r',
            label: 'Prozessfeedback',
            // #329: konservativ intern (CAPA-Kommunikation).
            fields: [
                'Id',
                'Name',
                'CreatedDate',
                'Status__c',
                'Current_State_Evaluation__c',
                'Description__c'
            ],
            maxRows: 10,
            visibleForRoles: [
                'admin',
                'staff',
                'agent'
            ]
        },
        {
            relationshipName: 'AttachedContentDocuments',
            label: 'Dateien',
            fields: [
                'Id',
                'Title'
            ],
            maxRows: 10,
            visibleForRoles: [
                'admin',
                'staff'
            ]
        }
    ],
    // #330: > 4 Listen -> fachliche Tab-Gruppen (LEAN-CURATION.md)
    relatedListTabGroups: [
        {
            id: 'vertrieb',
            label: 'Vertrieb',
            relationshipNames: [
                'Material_Proposals__r',
                'Aktuelle_Preise_und_Verf_gbarkeiten__r'
            ],
            isDefault: true
        },
        {
            id: 'aktivitaet',
            label: 'Aktivität & Dateien',
            relationshipNames: [
                'Status_Updates__r',
                'Feedbacks__r',
                'AttachedContentDocuments'
            ]
        }
    ],
    systemFields: [
        'Id',
        'CreatedDate',
        'CreatedById',
        'LastModifiedDate',
        'LastModifiedById',
        'OwnerId'
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/config/entityFields/Case.fields.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// CURATED — do not regenerate (--force) without re-applying the lean rules in LEAN-CURATION.md
/**
 * Entity Field Configuration: Case (lean staff view)
 *
 * Curated against GitLab #200 §4.1: 4 flat sections, the case working fields plus
 * the missing IsEscalated (cross-checked against SF). Per PM: drop the whole
 * monitoring/check block (Reaction/Processing Time, First_Touched, Count_*, Check*
 * flags, Case_Related__c), plus Reason, Lieferant_Produkt__c, SuppliedPhone and the
 * System-info section. The legacy Opportunity__c lookup + Opportunities list are
 * removed (Opportunity is being retired). Description is read-only (inbound text);
 * Description_of_Actions_taken / Comments are the editable working notes.
 *
 * Downstream roles (agent/user/rigk) untouched; handled in a later step.
 *
 * #1722: the website contact form now creates a Case, so SuppliedName/Email/Company/Phone
 * (incl. SuppliedPhone, dropped above) are shown again, read-only, for admin + staff.
 */ __turbopack_context__.s([
    "CaseFieldConfig",
    ()=>CaseFieldConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$sfPicklist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/entityFields/sfPicklist.ts [app-client] (ecmascript)");
;
const CaseFieldConfig = {
    entityType: 'Case',
    entityLabel: 'Case',
    headerFields: [
        'CaseNumber',
        'Subject',
        'Status',
        'Priority',
        'AccountId'
    ],
    sections: [
        {
            id: 'kopfdaten_qualifizierung',
            label: 'Kopfdaten & Qualifizierung',
            columns: 2,
            visibleForRoles: [
                'admin',
                'staff',
                'agent'
            ],
            fields: [
                {
                    apiName: 'CaseNumber',
                    label: 'Kundenvorgangs-Nr.',
                    fieldType: 'text',
                    readOnly: true,
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent',
                        'user',
                        'rigk'
                    ]
                },
                {
                    apiName: 'Subject',
                    label: 'Thema',
                    fieldType: 'text',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent',
                        'user',
                        'rigk'
                    ]
                },
                {
                    apiName: 'Status',
                    fieldType: 'picklist',
                    picklistOptions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$sfPicklist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfPicklist"])()([
                        {
                            label: 'On Hold',
                            value: 'On Hold'
                        },
                        {
                            label: 'Escalated',
                            value: 'Escalated'
                        },
                        {
                            label: 'New',
                            value: 'New'
                        },
                        {
                            label: 'In Progress',
                            value: 'In Progress'
                        },
                        {
                            label: 'Waiting for Customer',
                            value: 'Waiting for Customer'
                        },
                        {
                            label: 'Merged',
                            value: 'Merged'
                        },
                        {
                            label: 'Response Received',
                            value: 'Response Received'
                        },
                        {
                            label: 'No Action',
                            value: 'No Action'
                        },
                        {
                            label: 'Rejected',
                            value: 'Rejected'
                        },
                        {
                            label: 'Closed',
                            value: 'Closed'
                        }
                    ]),
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent',
                        'user',
                        'rigk'
                    ]
                },
                {
                    apiName: 'Priority',
                    label: 'Priorität',
                    fieldType: 'picklist',
                    picklistOptions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$sfPicklist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfPicklist"])()([
                        {
                            label: 'High',
                            value: 'High'
                        },
                        {
                            label: 'Medium',
                            value: 'Medium'
                        },
                        {
                            label: 'Low',
                            value: 'Low'
                        }
                    ]),
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent'
                    ]
                },
                {
                    apiName: 'Type',
                    label: 'Kundenvorgangstyp',
                    fieldType: 'picklist',
                    picklistOptions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$sfPicklist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfPicklist"])()([
                        {
                            label: 'Platform General request',
                            value: 'Platform General request'
                        },
                        {
                            label: 'Platform Material request',
                            value: 'Platform Material request'
                        },
                        {
                            label: 'Platform Showroom request',
                            value: 'Platform Showroom request'
                        },
                        {
                            label: 'Platform Partner Request',
                            value: 'Platform Partner Request'
                        },
                        {
                            label: 'Platform New user created',
                            value: 'Platform New user created'
                        },
                        {
                            label: 'Platform Material or offer created',
                            value: 'Platform Material or offer created'
                        },
                        {
                            label: 'Platform Requirement created',
                            value: 'Platform Requirement created'
                        },
                        {
                            label: 'EMail Support request',
                            value: 'EMail Support request'
                        },
                        {
                            label: 'EMail Cooperation request',
                            value: 'EMail Cooperation request'
                        },
                        {
                            label: 'EMail Material supply or offer to plastship',
                            value: 'EMail Material supply or offer to plastship'
                        },
                        {
                            label: 'EMail Material request, demand or requirements',
                            value: 'EMail Material request, demand or requirements'
                        },
                        {
                            label: 'EMail Sales or Material Proposal related',
                            value: 'EMail Sales or Material Proposal related'
                        },
                        {
                            label: 'EMail Operative or order related',
                            value: 'EMail Operative or order related'
                        },
                        {
                            label: 'EMail Claim Management related',
                            value: 'EMail Claim Management related'
                        },
                        {
                            label: 'EMail Invoicing related',
                            value: 'EMail Invoicing related'
                        },
                        {
                            label: 'EMail Sample Sending related',
                            value: 'EMail Sample Sending related'
                        },
                        {
                            label: 'EMail Benchmark or Material Testing related',
                            value: 'EMail Benchmark or Material Testing related'
                        },
                        {
                            label: 'EMail Recyclability and Auditing related',
                            value: 'EMail Recyclability and Auditing related'
                        },
                        {
                            label: 'EMail Digital Services related',
                            value: 'EMail Digital Services related'
                        },
                        {
                            label: 'EMail Other (please describe)',
                            value: 'EMail Other (please describe)'
                        },
                        {
                            label: 'Problem',
                            value: 'Problem'
                        },
                        {
                            label: 'Feature Request',
                            value: 'Feature Request'
                        }
                    ]),
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent',
                        'user',
                        'rigk'
                    ]
                },
                {
                    apiName: 'Origin',
                    label: 'Kundenvorgangsursprung',
                    fieldType: 'picklist',
                    picklistOptions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$sfPicklist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfPicklist"])()([
                        {
                            label: 'Email',
                            value: 'Email'
                        },
                        {
                            label: 'Phone',
                            value: 'Phone'
                        },
                        {
                            label: 'Web',
                            value: 'Web'
                        },
                        {
                            label: 'Info',
                            value: 'Info'
                        },
                        {
                            label: 'Accounting',
                            value: 'Accounting'
                        },
                        {
                            label: 'Dispo',
                            value: 'Dispo'
                        }
                    ]),
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'OwnerId',
                    label: 'Inhaber',
                    fieldType: 'lookup',
                    lookupObjectType: 'User',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent',
                        'user',
                        'rigk'
                    ]
                },
                {
                    apiName: 'Wiedervorlage__c',
                    label: 'Wiedervorlage',
                    fieldType: 'date',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent'
                    ]
                },
                {
                    apiName: 'Case_Qualified__c',
                    label: 'Case-Qualified',
                    fieldType: 'boolean',
                    readOnly: true,
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent'
                    ]
                },
                {
                    apiName: 'Case_Researched__c',
                    label: 'Case Researched',
                    fieldType: 'boolean',
                    readOnly: true,
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent'
                    ]
                },
                {
                    apiName: 'Case_Complete__c',
                    label: 'Case Complete',
                    fieldType: 'boolean',
                    readOnly: true,
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent'
                    ]
                }
            ]
        },
        {
            id: 'kontakt_account',
            label: 'Kontakt & Account',
            columns: 2,
            visibleForRoles: [
                'admin',
                'staff',
                'agent'
            ],
            fields: [
                {
                    apiName: 'AccountId',
                    label: 'Account',
                    fieldType: 'lookup',
                    lookupObjectType: 'Account',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent'
                    ]
                },
                {
                    apiName: 'ContactId',
                    label: 'Kontakt',
                    fieldType: 'lookup',
                    lookupObjectType: 'Contact',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent'
                    ]
                },
                {
                    apiName: 'ContactEmail',
                    label: 'Kontakt-E-Mail',
                    fieldType: 'email',
                    readOnly: true,
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'ContactPhone',
                    label: 'Kontakt-Tel.',
                    fieldType: 'phone',
                    readOnly: true,
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'SuppliedName',
                    label: 'Name (Web)',
                    fieldType: 'text',
                    readOnly: true,
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'SuppliedEmail',
                    label: 'E-Mail-Adresse (Web)',
                    fieldType: 'email',
                    readOnly: true,
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'SuppliedCompany',
                    label: 'Firma (Web)',
                    fieldType: 'text',
                    readOnly: true,
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'SuppliedPhone',
                    label: 'Telefon (Web)',
                    fieldType: 'phone',
                    readOnly: true,
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                }
            ]
        },
        {
            id: 'eskalation_verknuepfungen',
            label: 'Eskalation & Verknüpfungen',
            columns: 2,
            visibleForRoles: [
                'admin',
                'staff',
                'agent'
            ],
            fields: [
                {
                    apiName: 'IsEscalated',
                    label: 'Eskaliert',
                    fieldType: 'boolean',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent'
                    ]
                },
                {
                    apiName: 'ParentId',
                    label: 'Übergeordneter Vorgang',
                    fieldType: 'lookup',
                    lookupObjectType: 'Case',
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'Auftrag__c',
                    label: 'Auftrag',
                    fieldType: 'lookup',
                    lookupObjectType: 'Order',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent'
                    ]
                },
                {
                    apiName: 'Abrechnung__c',
                    label: 'Abrechnung',
                    fieldType: 'lookup',
                    lookupObjectType: 'Abrechnung__c',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent'
                    ]
                },
                {
                    apiName: 'Onboarding__c',
                    label: 'Onboarding',
                    fieldType: 'lookup',
                    lookupObjectType: 'Onboarding__c',
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'Opportunity__c',
                    label: 'Opportunity',
                    fieldType: 'lookup',
                    lookupObjectType: 'Opportunity',
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'Bedarfe__c',
                    label: 'Bedarf',
                    fieldType: 'lookup',
                    lookupObjectType: 'Bedarfe__c',
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'Produkt__c',
                    label: 'Produkt',
                    fieldType: 'lookup',
                    lookupObjectType: 'Product2',
                    // #1419: der Lookup löst die Id zu Produktname + Lieferant auf —
                    // nur intern (maskRecordFields liefert Kunden die Id ohnehin nicht)
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                }
            ]
        },
        {
            id: 'inhalt_abschluss',
            label: 'Inhalt & Abschluss',
            columns: 2,
            visibleForRoles: [
                'admin',
                'staff',
                'agent'
            ],
            fields: [
                {
                    // #329 Welle A: der Kunde sieht den Text seines eigenen Vorgangs (read-only)
                    apiName: 'Description',
                    label: 'Beschreibung',
                    fieldType: 'textarea',
                    readOnly: true,
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent',
                        'user',
                        'rigk'
                    ]
                },
                {
                    apiName: 'Description_of_Actions_taken__c',
                    label: 'Durchgeführte Maßnahmen',
                    fieldType: 'textarea',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent'
                    ]
                },
                {
                    apiName: 'Comments',
                    label: 'Interne Kommentare',
                    fieldType: 'textarea',
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'ClosedDate',
                    label: 'Schlusstermin',
                    fieldType: 'datetime',
                    readOnly: true,
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                }
            ]
        },
        // ── #329 Welle A: Kundensicht auf den eigenen Vorgang (user/rigk) ────────
        // Keine Perspektiven — schlichte Kunden-Feldliste. Staff-Sektionen oben sind
        // auf admin/staff/agent gegated; interne Qualifizierung/Verknüpfungen/
        // Maßnahmen/Kommentare bleiben draußen (PM 2026-07-03).
        {
            id: 'ext_uebersicht',
            label: 'Übersicht',
            columns: 2,
            visibleForRoles: [
                'user',
                'rigk'
            ],
            fields: [
                {
                    apiName: 'CaseNumber',
                    label: 'Vorgangs-Nr.',
                    fieldType: 'text',
                    readOnly: true
                },
                {
                    apiName: 'Subject',
                    label: 'Thema',
                    fieldType: 'text',
                    readOnly: true
                },
                {
                    apiName: 'Type',
                    label: 'Typ',
                    fieldType: 'text',
                    readOnly: true
                },
                {
                    apiName: 'Status',
                    label: 'Status',
                    fieldType: 'text',
                    readOnly: true
                },
                // #1419: kein Produkt__c in der Kundensicht — der Lookup löste die Id
                // zu Produktname + Lieferant auf (maskRecordFields liefert sie nicht mehr)
                {
                    apiName: 'CreatedDate',
                    label: 'Erstellt',
                    fieldType: 'datetime',
                    readOnly: true
                },
                {
                    apiName: 'OwnerId',
                    label: 'Ansprechpartner',
                    fieldType: 'lookup',
                    lookupObjectType: 'User',
                    readOnly: true
                }
            ]
        },
        {
            id: 'ext_inhalt',
            label: 'Inhalt',
            columns: 1,
            visibleForRoles: [
                'user',
                'rigk'
            ],
            fields: [
                {
                    apiName: 'Description',
                    label: 'Beschreibung',
                    fieldType: 'textarea',
                    readOnly: true
                }
            ]
        }
    ],
    // #346: Kunden-Create ist minimal — nur Thema + Beschreibung (editierbar).
    // Type/Status/Priority/Origin sowie Account/Kontakt werden serverseitig aus
    // dem userContext back-gefüllt (POST /api/salesforce/cases). Staff/admin/agent
    // nutzen weiterhin die vollständigen Detail-`sections` im Create.
    createSections: [
        {
            id: 'create_kundenvorgang',
            label: 'Kundenvorgang',
            columns: 1,
            visibleForRoles: [
                'user',
                'rigk'
            ],
            fields: [
                {
                    apiName: 'Subject',
                    label: 'Thema',
                    fieldType: 'text',
                    required: true
                },
                {
                    apiName: 'Description',
                    label: 'Beschreibung',
                    fieldType: 'textarea',
                    required: true
                }
            ]
        }
    ],
    relatedLists: [
        {
            relationshipName: 'Onboardings__r',
            label: 'Onboardings',
            fields: [
                'Id',
                'Name',
                'CreatedDate',
                'Onboarding_durchgef_hrt__c',
                'Onboarding_Ergebnis__c'
            ],
            maxRows: 10,
            visibleForRoles: [
                'admin',
                'staff'
            ]
        },
        {
            relationshipName: 'Bedarfe__r',
            label: 'Bedarfe',
            fields: [
                'Id',
                'Name',
                'Bedarfsstatus__c',
                'Hauptpolymer__c',
                'Materialkategorie__c'
            ],
            maxRows: 10,
            // #453/#417 AB 2026-08-28: Case ist der Prozess-Hub — bestehende
            // Datensaetze dem Vorgang zuordnen ist der Normalfall
            addExisting: {
                childLookupField: 'Kundenvorgang__c',
                unlinkable: true
            },
            visibleForRoles: [
                'admin',
                'staff',
                'agent'
            ]
        },
        {
            relationshipName: 'Material_Proposals__r',
            label: 'Material Proposals',
            // #330/#202 §4: Spaltenset wie an Account
            fields: [
                'Id',
                'Name',
                'Date__c',
                'Status__c',
                'Product__c',
                'Product_Code__c',
                'Purchasing_price_per_ton__c',
                'Sales_Price_per_ton__c',
                'Sample_Order_from_Supplier__c',
                'Sample_Sending_to_Account__c'
            ],
            maxRows: 10,
            visibleForRoles: [
                'admin',
                'staff',
                'agent'
            ]
        },
        // #1751 (AB 2026-10-07): Related List „Produkte“ (Produkte__r über
        // Product2.Kundenvorgang__c) bewusst ausgeblendet. Sie zeigt die
        // Gegenrichtung zum tragenden Lookup Produkt__c oben und wirkte wie eine
        // zweite, nicht synchronisierte Produkt-Zuordnung. Das Feld Produkt__c und
        // der Lookup Kundenvorgang im Produkt-Formular bleiben unangetastet.
        {
            relationshipName: 'Kontakt_bergaben__r',
            label: 'Kontakt-Übergaben',
            // #453 AB 2026-08-28: Menge direkt in der Zelle pflegbar; Betrag netto
            // ist SF-Formel und bleibt automatisch Anzeige
            fields: [
                'Id',
                'Name',
                'Menge_t_Anzahl__c',
                'Betrag_netto__c',
                'CreatedDate',
                'Owner.Alias'
            ],
            maxRows: 10,
            inlineEdit: true,
            visibleForRoles: [
                'admin',
                'staff'
            ]
        },
        {
            relationshipName: 'Projekte__r',
            label: 'Projekte',
            fields: [
                'Id',
                'Name',
                'Status__c',
                'Projekttyp__c',
                'Projektpriorit_t__c',
                'CreatedDate',
                'Owner.Alias'
            ],
            maxRows: 10,
            addExisting: {
                childLookupField: 'Kundenvorgang__c',
                unlinkable: true
            },
            visibleForRoles: [
                'admin',
                'staff',
                'agent'
            ]
        },
        {
            // #826: Aufgaben am Datensatz — Zeile öffnet die Aufgabe im Drawer
            relationshipName: 'Tasks',
            label: 'Aufgaben',
            fields: [
                'Id',
                'Subject',
                'Owner.Alias',
                'ActivityDate',
                'Status',
                'Priority'
            ],
            maxRows: 10,
            visibleForRoles: [
                'admin',
                'staff',
                'agent'
            ]
        },
        {
            relationshipName: 'Feedbacks__r',
            label: 'Prozessfeedback',
            // #329: konservativ intern (CAPA-Kommunikation).
            fields: [
                'Id',
                'Name',
                'CreatedDate',
                'Status__c',
                'Current_State_Evaluation__c',
                'Description__c'
            ],
            maxRows: 10,
            visibleForRoles: [
                'admin',
                'staff',
                'agent'
            ]
        },
        {
            relationshipName: 'AttachedContentDocuments',
            label: 'Dateien',
            fields: [
                'Id',
                'Title'
            ],
            maxRows: 10,
            visibleForRoles: [
                'admin',
                'staff',
                'agent'
            ]
        }
    ],
    relatedListTabGroups: [
        {
            id: 'vertrieb_vorgaenge',
            label: 'Vertrieb & Vorgänge',
            relationshipNames: [
                'Onboardings__r',
                'Bedarfe__r',
                'Material_Proposals__r',
                'Projekte__r',
                'Kontakt_bergaben__r'
            ],
            isDefault: true
        },
        {
            id: 'feedback_dateien',
            label: 'Feedback & Dateien',
            relationshipNames: [
                'Feedbacks__r',
                'AttachedContentDocuments'
            ]
        }
    ],
    systemFields: [
        'Id',
        'CreatedDate',
        'CreatedById',
        'LastModifiedDate',
        'LastModifiedById',
        'OwnerId'
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/config/entityFields/Contact.fields.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// CURATED — do not regenerate (--force) without re-applying the lean rules in LEAN-CURATION.md
/**
 * Entity Field Configuration: Contact (lean staff view)
 *
 * Not in #200 — curated from the existing config + workflow context. The contact
 * description lives in the Kontakt (Stammdaten) section.
 *
 * Dropped per PM: the postal address (maintained on the Account, not per contact),
 * Sales-Kooperation + the Bedarf lookup, the Plattform-Zugang block (Module_* +
 * Passwort — managed by the user via the platform), the System-info section, and the
 * technical CSCRM_Firmen_ID__c / plastship_Hash__c fields. Legacy Opportunities/
 * Quotes/CampaignMembers lists removed. Prozessfeedback (Feedbacks__r) kept.
 *
 * Downstream roles (agent/user/rigk) untouched; handled in a later step.
 */ __turbopack_context__.s([
    "ContactFieldConfig",
    ()=>ContactFieldConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$sfPicklist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/entityFields/sfPicklist.ts [app-client] (ecmascript)");
;
const ContactFieldConfig = {
    entityType: 'Contact',
    entityLabel: 'Contact',
    headerFields: [
        'Name',
        'Title',
        'AccountId',
        'Email',
        'Phone'
    ],
    sections: [
        {
            id: 'kontakt',
            label: 'Kontakt',
            columns: 2,
            fields: [
                {
                    // Nachgezogen beim Abloesen des fieldMetadataRegistry: das
                    // Inline-Kontaktformular (RelatedObjectsSection, Account -> Kontakt)
                    // zog die Anrede-Auswahl bisher aus der Registry.
                    // #1810: Anrede, Vorname, Nachname in dieser Reihenfolge.
                    apiName: 'Salutation',
                    label: 'Anrede',
                    fieldType: 'picklist',
                    picklistOptions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$sfPicklist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfPicklist"])()([
                        {
                            value: 'Mr.',
                            label: 'Herr'
                        },
                        {
                            value: 'Ms.',
                            label: 'Frau'
                        },
                        {
                            value: 'Mrs.',
                            label: 'Frau (verheiratet)'
                        },
                        {
                            value: 'Dr.',
                            label: 'Dr.'
                        },
                        {
                            value: 'Prof.',
                            label: 'Prof.'
                        }
                    ]),
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent'
                    ]
                },
                // #1810: ohne diese Felder ließ sich kein Kontakt anlegen (LastName-Pflicht griff nur für sichtbare Felder)
                {
                    apiName: 'FirstName',
                    label: 'Vorname',
                    fieldType: 'text',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent'
                    ]
                },
                {
                    apiName: 'LastName',
                    label: 'Nachname',
                    fieldType: 'text',
                    required: true,
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent'
                    ]
                },
                {
                    apiName: 'Name',
                    label: 'Vollständiger Name',
                    fieldType: 'text',
                    readOnly: true,
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent'
                    ]
                },
                {
                    apiName: 'AccountId',
                    label: 'Account',
                    fieldType: 'lookup',
                    lookupObjectType: 'Account',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent'
                    ]
                },
                {
                    apiName: 'Title',
                    label: 'Position',
                    fieldType: 'text',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent'
                    ]
                },
                {
                    apiName: 'Department',
                    label: 'Abteilung',
                    fieldType: 'text',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent'
                    ]
                },
                {
                    apiName: 'Email',
                    label: 'E-Mail',
                    fieldType: 'email',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent'
                    ]
                },
                {
                    apiName: 'Phone',
                    label: 'Tel. geschäftlich',
                    fieldType: 'phone',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent'
                    ]
                },
                {
                    apiName: 'MobilePhone',
                    label: 'Mobiltelefon',
                    fieldType: 'phone',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent'
                    ]
                },
                {
                    apiName: 'OtherPhone',
                    label: 'Weitere Tel-Nr.',
                    fieldType: 'phone',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent'
                    ]
                },
                {
                    apiName: 'DoNotCall',
                    label: 'Nicht anrufen',
                    fieldType: 'boolean',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent'
                    ]
                },
                {
                    apiName: 'Sprache__c',
                    label: 'Sprache',
                    fieldType: 'text',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent'
                    ]
                },
                {
                    apiName: 'OwnerId',
                    label: 'Inhaber',
                    fieldType: 'lookup',
                    lookupObjectType: 'User',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent'
                    ]
                },
                {
                    apiName: 'ReportsToId',
                    label: 'Vorgesetzter',
                    fieldType: 'lookup',
                    lookupObjectType: 'Contact',
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'Description',
                    label: 'Kontaktbeschreibung',
                    fieldType: 'textarea',
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                }
            ]
        },
        {
            id: 'vertrieb_herkunft',
            label: 'Vertrieb & Herkunft',
            columns: 2,
            visibleForRoles: [
                'admin',
                'staff'
            ],
            fields: [
                {
                    apiName: 'LeadSource',
                    label: 'Lead-Quelle',
                    fieldType: 'picklist',
                    picklistOptions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$sfPicklist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfPicklist"])()([
                        {
                            label: 'RIGK',
                            value: 'RIGK'
                        },
                        {
                            label: 'PRSE 2025',
                            value: 'PRSE 2025'
                        },
                        {
                            label: 'Fachpack 2024',
                            value: 'Fachpack 2024'
                        },
                        {
                            label: 'IFAT2024',
                            value: 'IFAT2024'
                        },
                        {
                            label: 'PRSE 2023',
                            value: 'PRSE 2023'
                        },
                        {
                            label: 'PRC2023',
                            value: 'PRC2023'
                        },
                        {
                            label: 'Advertisement',
                            value: 'Advertisement'
                        },
                        {
                            label: 'Customer Event',
                            value: 'Customer Event'
                        },
                        {
                            label: 'Employee Referral',
                            value: 'Employee Referral'
                        },
                        {
                            label: 'External Referral',
                            value: 'External Referral'
                        },
                        {
                            label: 'Google AdWords',
                            value: 'Google AdWords'
                        },
                        {
                            label: 'Other',
                            value: 'Other'
                        },
                        {
                            label: 'Partner',
                            value: 'Partner'
                        },
                        {
                            label: 'Purchased List',
                            value: 'Purchased List'
                        },
                        {
                            label: 'Trade Show',
                            value: 'Trade Show'
                        },
                        {
                            label: 'Webinar',
                            value: 'Webinar'
                        },
                        {
                            label: 'Website',
                            value: 'Website'
                        },
                        {
                            label: 'BKV2023',
                            value: 'BKV2023'
                        },
                        {
                            label: 'Fakuma 2024',
                            value: 'Fakuma 2024'
                        },
                        {
                            label: 'Verband TecPart',
                            value: 'Verband TecPart'
                        },
                        {
                            label: 'Verband PRE',
                            value: 'Verband PRE'
                        },
                        {
                            label: 'Verband bvse',
                            value: 'Verband bvse'
                        },
                        {
                            label: 'Verband IK',
                            value: 'Verband IK'
                        },
                        {
                            label: 'E-Mail',
                            value: 'E-Mail'
                        }
                    ])
                },
                {
                    apiName: 'Accountquelle_Kampagne__c',
                    label: 'Accountquelle Kampagne',
                    fieldType: 'picklist',
                    picklistOptions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$sfPicklist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfPicklist"])()([
                        {
                            label: 'K 2026',
                            value: 'K 2026'
                        },
                        {
                            label: 'PRSE 2025',
                            value: 'PRSE 2025'
                        },
                        {
                            label: 'Fachpack 2024',
                            value: 'Fachpack 2024'
                        },
                        {
                            label: 'PRC2023',
                            value: 'PRC2023'
                        },
                        {
                            label: 'PRSE 2023',
                            value: 'PRSE 2023'
                        },
                        {
                            label: 'Schäumen von Kunststoffrezyklaten SKZ',
                            value: 'Schäumen von Kunststoffrezyklaten SKZ'
                        },
                        {
                            label: 'FAKUMA2023',
                            value: 'FAKUMA2023'
                        },
                        {
                            label: 'BKV2023',
                            value: 'BKV2023'
                        },
                        {
                            label: 'Agritechnica2023',
                            value: 'Agritechnica2023'
                        },
                        {
                            label: 'PRSE 2024',
                            value: 'PRSE 2024'
                        },
                        {
                            label: 'Fakuma 2024',
                            value: 'Fakuma 2024'
                        },
                        {
                            label: 'Verband TecPart',
                            value: 'Verband TecPart'
                        },
                        {
                            label: 'Verband PRE',
                            value: 'Verband PRE'
                        },
                        {
                            label: 'Verband bvse',
                            value: 'Verband bvse'
                        },
                        {
                            label: 'Verband IK',
                            value: 'Verband IK'
                        },
                        {
                            label: 'E-Mail',
                            value: 'E-Mail'
                        }
                    ])
                },
                {
                    apiName: 'Onboarding__c',
                    label: 'Onboarding',
                    fieldType: 'lookup',
                    lookupObjectType: 'Onboarding__c'
                },
                {
                    apiName: 'Is_Registered__c',
                    label: 'Is Registered',
                    fieldType: 'boolean'
                },
                {
                    apiName: 'plastship_Deeplink__c',
                    label: 'plastship Deeplink',
                    fieldType: 'text'
                },
                {
                    apiName: 'LastCURequestDate',
                    label: 'Letzte Kontaktpflegeanfrage',
                    fieldType: 'datetime',
                    readOnly: true
                }
            ]
        }
    ],
    relatedLists: [
        {
            relationshipName: 'Material_Proposals__r',
            label: 'Material Proposals (Account-Kontakt)',
            fields: [
                'Id',
                'Name',
                'Status__c',
                'Date__c',
                'Product_Code__c'
            ],
            maxRows: 10,
            visibleForRoles: [
                'admin',
                'staff'
            ]
        },
        {
            relationshipName: 'Material_Proposals1__r',
            label: 'Material Proposals (Supplier-Kontakt)',
            fields: [
                'Id',
                'Name',
                'Status__c',
                'Date__c',
                'Product_Code__c'
            ],
            maxRows: 10,
            visibleForRoles: [
                'admin',
                'staff'
            ]
        },
        {
            relationshipName: 'Material_Proposals2__r',
            label: 'Material Proposals (Carrier-Kontakt)',
            fields: [
                'Id',
                'Name',
                'Status__c',
                'Date__c',
                'Product_Code__c'
            ],
            maxRows: 10,
            visibleForRoles: [
                'admin',
                'staff'
            ]
        },
        {
            relationshipName: 'Onboardings__r',
            label: 'Onboardings',
            fields: [
                'Id',
                'Name',
                'CreatedDate',
                'Onboarding_durchgef_hrt__c',
                'Onboarding_Ergebnis__c'
            ],
            maxRows: 10,
            visibleForRoles: [
                'admin',
                'staff'
            ]
        },
        {
            relationshipName: 'Status_Updates__r',
            label: 'Status Updates',
            fields: [
                'Id',
                'OwnerId',
                'Update_Type__c',
                'Meeting_DateTime__c',
                'CreatedById',
                'Body__c',
                'Next_Steps__c'
            ],
            maxRows: 10,
            visibleForRoles: [
                'admin',
                'staff',
                'agent'
            ]
        },
        {
            relationshipName: 'Cases',
            label: 'Cases',
            fields: [
                'Id',
                'CaseNumber',
                'Subject',
                'Status',
                'CreatedDate'
            ],
            maxRows: 10,
            visibleForRoles: [
                'admin',
                'staff',
                'agent'
            ]
        },
        {
            relationshipName: 'Feedbacks__r',
            label: 'Prozessfeedback',
            fields: [
                'Id',
                'Name',
                'CreatedDate',
                'Status__c',
                'Current_State_Evaluation__c',
                'Description__c'
            ],
            maxRows: 10,
            visibleForRoles: [
                'admin',
                'staff',
                'agent',
                'user',
                'rigk'
            ]
        },
        {
            relationshipName: 'AttachedContentDocuments',
            label: 'Dateien',
            fields: [
                'Id',
                'Title'
            ],
            maxRows: 10,
            visibleForRoles: [
                'admin',
                'staff'
            ]
        }
    ],
    relatedListTabGroups: [
        {
            id: 'vertrieb',
            label: 'Vertrieb',
            relationshipNames: [
                'Material_Proposals__r',
                'Material_Proposals1__r',
                'Material_Proposals2__r',
                'Onboardings__r'
            ],
            isDefault: true
        },
        {
            id: 'aktivitaet_dateien',
            label: 'Aktivität & Dateien',
            relationshipNames: [
                'Status_Updates__r',
                'Cases',
                'AttachedContentDocuments',
                'Feedbacks__r'
            ]
        }
    ],
    systemFields: [
        'Id',
        'CreatedDate',
        'CreatedById',
        'LastModifiedDate',
        'LastModifiedById',
        'OwnerId'
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/config/entityFields/Contract.fields.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// CURATED — do not regenerate (--force) without re-applying the lean rules in LEAN-CURATION.md
/**
 * Entity Field Configuration: Contract (Vertrag, #449)
 *
 * AB-Vorgabe (2026-07-17): Der Wert des Vertrags liegt im AUFTRAGS-Management —
 * die Related List „Aufträge" (Order.ContractId, inkl. Zuordnen/Lösen über die
 * #417-Mechanik) ist das Herzstück, die Vertragsfelder bleiben bewusst schlank.
 * Vollsicht über den Admin-Felder-Tab (#328).
 *
 * Standard-Objekt: ContractNumber ist Auto-Nummer (der Datensatz-Name),
 * ActivatedDate/ActivatedById setzt Salesforce bei Aktivierung. OwnerId ist
 * bewusst editierbar (Besitzerwechsel, #459-Mechanik in getUpdatableFields).
 */ __turbopack_context__.s([
    "ContractFieldConfig",
    ()=>ContractFieldConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$sfPicklist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/entityFields/sfPicklist.ts [app-client] (ecmascript)");
;
const ContractFieldConfig = {
    entityType: 'Contract',
    entityLabel: 'Vertrag',
    headerFields: [
        'ContractNumber',
        'Status',
        'AccountId'
    ],
    sections: [
        {
            id: 'vertragsdaten',
            label: 'Vertragsdaten',
            columns: 2,
            visibleForRoles: [
                'admin',
                'staff',
                'agent'
            ],
            fields: [
                {
                    apiName: 'ContractNumber',
                    label: 'Vertragsnummer',
                    fieldType: 'text',
                    readOnly: true
                },
                {
                    apiName: 'Status',
                    label: 'Status',
                    fieldType: 'picklist',
                    picklistOptions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$sfPicklist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfPicklist"])()([
                        {
                            label: 'Draft',
                            value: 'Draft'
                        },
                        {
                            label: 'In Approval Process',
                            value: 'In Approval Process'
                        },
                        {
                            label: 'Activated',
                            value: 'Activated'
                        },
                        // #907: SF-Werte fürs Beenden/Stornieren statt Löschen (kein Delete in der App)
                        {
                            label: 'Completed',
                            value: 'Completed'
                        },
                        {
                            label: 'Cancelled',
                            value: 'Cancelled'
                        }
                    ])
                },
                {
                    apiName: 'AccountId',
                    label: 'Account',
                    fieldType: 'lookup',
                    lookupObjectType: 'Account'
                },
                {
                    apiName: 'StartDate',
                    label: 'Vertragsbeginn',
                    fieldType: 'date'
                },
                {
                    apiName: 'ContractTerm',
                    label: 'Laufzeit (Monate)',
                    fieldType: 'number'
                },
                // EndDate ist in Salesforce abgeleitet (StartDate + ContractTerm) und
                // dort weder updateable noch createable — editierbar gestellt würde
                // jeder Speicherversuch am SF-Feldfehler scheitern.
                {
                    apiName: 'EndDate',
                    label: 'Vertragsende',
                    fieldType: 'date',
                    readOnly: true
                },
                {
                    apiName: 'OwnerId',
                    label: 'Inhaber',
                    fieldType: 'lookup',
                    lookupObjectType: 'User'
                },
                {
                    apiName: 'ActivatedDate',
                    label: 'Aktiviert am',
                    fieldType: 'datetime',
                    readOnly: true
                },
                {
                    // #842: Projektangaben des Vertrags — Lookup pflegbar, der Typ ist
                    // eine SF-Formel (folgt der Zuordnung) und bleibt Anzeige.
                    apiName: 'Projektzuordnung__c',
                    label: 'Projektzuordnung',
                    fieldType: 'lookup',
                    lookupObjectType: 'Projekt__c',
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    // #1804: Vertrag aus Material Proposal — Herkunft sichtbar und pflegbar
                    apiName: 'Material_Proposal__c',
                    label: 'Material Proposal',
                    fieldType: 'lookup',
                    lookupObjectType: 'Material_Proposal__c',
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'Projektzuordnung_Typ__c',
                    label: 'Projektzuordnung Typ',
                    fieldType: 'text',
                    readOnly: true,
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'Description',
                    label: 'Beschreibung',
                    fieldType: 'textarea'
                }
            ]
        },
        {
            // #463: Alle dokumentrelevanten Vertragsfelder für Staff pflegbar
            // (AB-Vorgabe 2026-07-17); Formeln/Summen read-only zur Kontrolle.
            id: 'dokumente',
            label: 'Dokumente',
            columns: 2,
            visibleForRoles: [
                'admin',
                'staff'
            ],
            fields: [
                {
                    apiName: 'Produkt__c',
                    label: 'Produkt (für Dokumente)',
                    fieldType: 'lookup',
                    lookupObjectType: 'Product2'
                },
                {
                    apiName: 'Agreed_quantity__c',
                    label: 'Vereinbarte Menge (t)',
                    fieldType: 'number'
                },
                {
                    apiName: 'Bestellnummer_Kunde_Sammelbest__c',
                    label: 'Bestellnummer Kunde (Sammelbest.)',
                    fieldType: 'text'
                }
            ]
        },
        {
            id: 'summen',
            label: 'Summen (aus Aufträgen)',
            columns: 2,
            visibleForRoles: [
                'admin',
                'staff',
                'accounting'
            ],
            fields: [
                {
                    apiName: 'Total_Netto_Einkauf__c',
                    label: 'Total Netto Einkauf',
                    fieldType: 'currency',
                    currencyCode: 'EUR',
                    readOnly: true
                },
                {
                    apiName: 'Total_Steuer_Einkauf__c',
                    label: 'Total Steuer Einkauf',
                    fieldType: 'currency',
                    currencyCode: 'EUR',
                    readOnly: true
                },
                {
                    apiName: 'Total_Brutto_Einkauf__c',
                    label: 'Total Brutto Einkauf',
                    fieldType: 'currency',
                    currencyCode: 'EUR',
                    readOnly: true
                },
                {
                    apiName: 'Total_Netto_Verkauf__c',
                    label: 'Total Netto Verkauf',
                    fieldType: 'currency',
                    currencyCode: 'EUR',
                    readOnly: true
                },
                {
                    apiName: 'Total_Steuer_Verkauf__c',
                    label: 'Total Steuer Verkauf',
                    fieldType: 'currency',
                    currencyCode: 'EUR',
                    readOnly: true
                },
                {
                    apiName: 'Total_Brutto_Verkauf__c',
                    label: 'Total Brutto Verkauf',
                    fieldType: 'currency',
                    currencyCode: 'EUR',
                    readOnly: true
                }
            ]
        }
    ],
    relatedLists: [
        {
            // Herzstück (#449): Aufträge des Vertrags managen — zuordnen, lösen,
            // öffnen. childLookupField = Order.ContractId.
            relationshipName: 'Orders',
            label: 'Aufträge',
            // Spaltenwunsch AB 2026-07-17; inlineEdit greift nur auf Feldern in
            // getUpdatableFields(Order, Rolle) — Formeln/Rollups bleiben Anzeige.
            fields: [
                'Id',
                'OrderNumber',
                'Status',
                'Auftragsrichtung__c',
                'Datum_Abholung_NEU__c',
                'Datum_tats_Anlieferung_NEU__c',
                // Menge = Quantity__c (AB 2026-07-17); Liefermenge__c ist eine andere
                // Formel und stand bei Bestandsaufträgen auf 0.
                'Quantity__c',
                'Transporteur_Preis_NEU__c',
                'Einkaufspreis_Gesamt__c',
                'TotalAmount'
            ],
            inlineEdit: true,
            maxRows: 50,
            addExisting: {
                childLookupField: 'ContractId',
                unlinkable: true
            },
            visibleForRoles: [
                'admin',
                'staff',
                'agent'
            ]
        }
    ],
    systemFields: [
        'Id',
        'CreatedDate',
        'CreatedById',
        'LastModifiedDate',
        'LastModifiedById',
        'OwnerId'
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/config/entityFields/Kontaktbergaben.fields.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// CURATED — do not regenerate (--force) without re-applying the lean rules in LEAN-CURATION.md
/**
 * Entity Field Configuration: Kontakt_Übergaben__c (lean staff view)
 *
 * Not in #200 — already lean. Drop the System field section (-> systemFields, with
 * OwnerId) and the legacy Feedbacks related list.
 */ __turbopack_context__.s([
    "KontaktbergabenFieldConfig",
    ()=>KontaktbergabenFieldConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$sfPicklist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/entityFields/sfPicklist.ts [app-client] (ecmascript)");
;
const KontaktbergabenFieldConfig = {
    entityType: 'Kontakt_Übergaben__c',
    entityLabel: 'Kontakt Übergaben',
    headerFields: [
        'Name',
        'Status__c',
        'Account_bergeben__c',
        'Datum_bergabe__c'
    ],
    sections: [
        {
            id: 'grunddaten',
            label: 'Grunddaten',
            fields: [
                {
                    apiName: 'Name',
                    label: 'Kontaktübergabe-Name',
                    fieldType: 'text',
                    required: true
                },
                {
                    apiName: 'OwnerId',
                    label: 'Inhaber',
                    fieldType: 'lookup',
                    lookupObjectType: 'User'
                },
                {
                    apiName: 'Status__c',
                    label: 'Status',
                    fieldType: 'picklist',
                    picklistOptions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$sfPicklist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfPicklist"])()([
                        {
                            label: 'Offen',
                            value: 'Offen'
                        },
                        {
                            label: 'Übergeben, Follow-Up',
                            value: 'Übergeben, Follow-Up'
                        },
                        {
                            label: 'Rechnung stellen',
                            value: 'Rechnung stellen'
                        },
                        {
                            label: 'Abgeschlossen',
                            value: 'Abgeschlossen'
                        }
                    ])
                },
                {
                    apiName: 'Datum_bergabe__c',
                    label: 'Datum Übergabe',
                    fieldType: 'date'
                },
                {
                    apiName: 'bergabe_per_Nachweis__c',
                    label: 'Übergabe per Nachweis',
                    fieldType: 'picklist',
                    picklistOptions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$sfPicklist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfPicklist"])()([
                        {
                            label: 'E-Mail',
                            value: 'E-Mail'
                        },
                        {
                            label: 'Telefon',
                            value: 'Telefon'
                        },
                        {
                            label: 'Dokument',
                            value: 'Dokument'
                        },
                        {
                            label: 'Persönlich',
                            value: 'Persönlich'
                        },
                        {
                            label: 'Andere',
                            value: 'Andere'
                        },
                        {
                            label: 'Altkontakt',
                            value: 'Altkontakt'
                        }
                    ])
                },
                {
                    apiName: 'Ziel_bergabe__c',
                    label: 'Ziel Übergabe',
                    fieldType: 'picklist',
                    picklistOptions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$sfPicklist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfPicklist"])()([
                        {
                            label: 'Consulting',
                            value: 'Consulting'
                        },
                        {
                            label: 'Zertifizierung / Auditierung',
                            value: 'Zertifizierung / Auditierung'
                        },
                        {
                            label: 'Laboranalyse',
                            value: 'Laboranalyse'
                        },
                        {
                            label: 'Verkauf Maschine',
                            value: 'Verkauf Maschine'
                        },
                        {
                            label: 'Materialbelieferung',
                            value: 'Material'
                        },
                        {
                            label: 'Andere',
                            value: 'Andere'
                        },
                        {
                            label: 'Entsorger-Circle',
                            value: 'Entsorger-Circle'
                        }
                    ])
                }
            ]
        },
        {
            id: 'uebergabe',
            label: 'Übergabe',
            fields: [
                {
                    apiName: 'Account_bergeben__c',
                    label: 'Account übergeben',
                    fieldType: 'lookup',
                    lookupObjectType: 'Account'
                },
                {
                    apiName: 'Kontakt_bergeben__c',
                    label: 'Kontakt übergeben',
                    fieldType: 'lookup',
                    lookupObjectType: 'Contact'
                },
                {
                    apiName: 'Account_empf_nger__c',
                    label: 'Account Empfänger',
                    fieldType: 'lookup',
                    lookupObjectType: 'Account'
                },
                {
                    apiName: 'Kontakt_Empf_nger__c',
                    label: 'Kontakt Empfänger',
                    fieldType: 'lookup',
                    lookupObjectType: 'Contact'
                }
            ]
        },
        {
            id: 'abrechnung',
            label: 'Abrechnung',
            fields: [
                {
                    apiName: 'Wiederkehrend__c',
                    label: 'Wiederkehrend',
                    fieldType: 'boolean'
                },
                {
                    apiName: 'Abrechenbar__c',
                    label: 'Abrechenbar',
                    fieldType: 'boolean'
                },
                {
                    apiName: 'Menge_t_Anzahl__c',
                    label: 'Menge (t) / Anzahl',
                    fieldType: 'number'
                },
                {
                    apiName: 'Rate_pro_t_pro_Anzahl__c',
                    label: 'Rate pro t / pro Anzahl',
                    fieldType: 'currency',
                    currencyCode: 'EUR'
                },
                {
                    apiName: 'Betrag_netto__c',
                    label: 'Betrag netto',
                    fieldType: 'currency',
                    currencyCode: 'EUR',
                    readOnly: true // #404: formula field — not client-writable
                },
                {
                    apiName: 'Gesamtwert_Empf_nger_kalkulativ__c',
                    label: 'Gesamtwert Empfänger kalkulativ',
                    fieldType: 'currency',
                    currencyCode: 'EUR',
                    readOnly: true
                }
            ]
        },
        {
            id: 'verknuepfungen',
            label: 'Verknüpfungen',
            fields: [
                {
                    apiName: 'Abrechnung__c',
                    label: 'Abrechnung',
                    fieldType: 'lookup',
                    lookupObjectType: 'Abrechnung__c'
                },
                {
                    apiName: 'Onboarding__c',
                    label: 'Onboarding',
                    fieldType: 'lookup',
                    lookupObjectType: 'Onboarding__c'
                },
                {
                    apiName: 'Kundenvorgang__c',
                    label: 'Kundenvorgang',
                    fieldType: 'lookup',
                    lookupObjectType: 'Case'
                }
            ]
        }
    ],
    relatedLists: [
        {
            relationshipName: 'Abrechnungen__r',
            label: 'Abrechnungen',
            fields: [
                'Id',
                'Name',
                'Belegnummer__c',
                'Rechnungstyp__c',
                'Belegdatum__c'
            ],
            maxRows: 10,
            visibleForRoles: [
                'admin',
                'staff'
            ]
        },
        {
            relationshipName: 'Feedbacks__r',
            label: 'Prozessfeedback',
            fields: [
                'Id',
                'Name',
                'CreatedDate',
                'Status__c',
                'Current_State_Evaluation__c',
                'Description__c'
            ],
            maxRows: 10,
            visibleForRoles: [
                'admin',
                'staff',
                'agent',
                'user',
                'rigk'
            ]
        },
        {
            relationshipName: 'AttachedContentDocuments',
            label: 'Dateien',
            fields: [
                'Id',
                'Title'
            ],
            maxRows: 10,
            visibleForRoles: [
                'admin',
                'staff'
            ]
        }
    ],
    systemFields: [
        'Id',
        'CreatedDate',
        'CreatedById',
        'LastModifiedDate',
        'LastModifiedById',
        'OwnerId'
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/config/entityFields/Kostenstelle.fields.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// CURATED — do not regenerate (--force) without re-applying the lean rules in LEAN-CURATION.md
/**
 * Entity Field Configuration: Kostenstelle_plastship__c (Kostenstelle, #325)
 * Mini-Stammdaten-Objekt — Lookup-Ziel von Auftrag/Abrechnung, bewusst ohne Related Lists.
 */ __turbopack_context__.s([
    "KostenstelleFieldConfig",
    ()=>KostenstelleFieldConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$sfPicklist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/entityFields/sfPicklist.ts [app-client] (ecmascript)");
;
const KostenstelleFieldConfig = {
    entityType: 'Kostenstelle_plastship__c',
    entityLabel: 'Kostenstelle',
    headerFields: [
        'Name',
        'Nummer_Kostenstelle__c',
        'Kostenstellentyp__c'
    ],
    sections: [
        {
            id: 'kostenstelle',
            label: 'Kostenstelle',
            columns: 2,
            visibleForRoles: [
                'admin',
                'staff',
                'accounting'
            ],
            fields: [
                {
                    apiName: 'Name',
                    label: 'Name',
                    fieldType: 'text'
                },
                {
                    apiName: 'Nummer_Kostenstelle__c',
                    label: 'Nummer',
                    fieldType: 'text'
                },
                {
                    apiName: 'Kostenstellentyp__c',
                    label: 'Kostenstellentyp',
                    fieldType: 'picklist',
                    picklistOptions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$sfPicklist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfPicklist"])()([
                        {
                            label: 'Profit-Center',
                            value: 'Profit-Center'
                        },
                        {
                            label: 'Ausgaben-Controlling',
                            value: 'Ausgaben-Controlling'
                        }
                    ])
                },
                {
                    apiName: 'OwnerId',
                    label: 'Inhaber',
                    fieldType: 'lookup',
                    lookupObjectType: 'User'
                }
            ]
        }
    ],
    systemFields: [
        'Id',
        'CreatedDate',
        'CreatedById',
        'LastModifiedDate',
        'LastModifiedById',
        'OwnerId'
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/config/entityFields/Lohn__c.fields.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// CURATED — do not regenerate (--force) without re-applying the lean rules in LEAN-CURATION.md
/**
 * Entity Field Configuration: Lohn__c (Angebotene Lohndienstleistungen)
 *
 * Hand-authored — no Salesforce FlexiPage exists for Lohn__c. Field list
 * mirrors apps/web/src/types/salesforce/Lohn__c.ts. Used by the RIGK
 * Create/Edit flow on /rigk/[id] (issue #224).
 */ __turbopack_context__.s([
    "LohnFieldConfig",
    ()=>LohnFieldConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$sfPicklist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/entityFields/sfPicklist.ts [app-client] (ecmascript)");
;
const LohnFieldConfig = {
    entityType: 'Lohn__c',
    entityLabel: 'Lohndienstleistung',
    headerFields: [
        'Name',
        'Account__c',
        'Dienstleistungskategorie__c',
        'Preis_pro_Tonne_standard__c'
    ],
    sections: [
        {
            id: 'lohn',
            label: 'Lohndienstleistung',
            fields: [
                {
                    apiName: 'Name',
                    label: 'Lohn-Name',
                    fieldType: 'text',
                    required: true
                },
                {
                    apiName: 'Dienstleistungskategorie__c',
                    label: 'Dienstleistungskategorie',
                    fieldType: 'picklist',
                    picklistOptions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$sfPicklist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfPicklist"])()([
                        {
                            label: 'Verpressen',
                            value: 'Verpressen'
                        },
                        {
                            label: 'Sortieren',
                            value: 'Sotieren'
                        },
                        {
                            label: 'Vermahlen',
                            value: 'Vermahlen'
                        },
                        {
                            label: 'Waschen',
                            value: 'Waschen'
                        },
                        {
                            label: 'Trocknen',
                            value: 'Trocknen'
                        },
                        {
                            label: 'Granulieren',
                            value: 'Granulieren'
                        },
                        {
                            label: 'Agglomerieren',
                            value: 'Agglomerieren'
                        },
                        {
                            label: 'Compoundieren',
                            value: 'Compoundieren'
                        },
                        {
                            label: 'Lagern',
                            value: 'Lagern'
                        },
                        {
                            label: 'Homogenisieren',
                            value: 'Homogenisieren'
                        },
                        {
                            label: 'Umfüllen / Verpacken',
                            value: 'Umfüllen / Verpacken'
                        }
                    ])
                },
                {
                    apiName: 'Preis_pro_Tonne_standard__c',
                    label: 'Preis pro Tonne (Standard)',
                    fieldType: 'number'
                },
                {
                    apiName: 'Beschreibung__c',
                    label: 'Beschreibung',
                    fieldType: 'textarea'
                },
                {
                    // #359-Follow-up: für rigk ausgeblendet — die Modul-Route
                    // (/rigk/accounts/[id]/lohn) erzwingt Account__c aus der URL
                    // („never trust client body"), das Formular braucht das Feld nicht.
                    // required greift nur auf sichtbaren Feldern (#346).
                    apiName: 'Account__c',
                    label: 'Account',
                    fieldType: 'lookup',
                    lookupObjectType: 'Account',
                    required: true,
                    readOnlyOnEdit: true,
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent'
                    ]
                }
            ]
        }
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/config/entityFields/MaterialProposal.fields.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// CURATED — do not regenerate (--force) without re-applying the lean rules in LEAN-CURATION.md
/**
 * Entity Field Configuration: Material_Proposal__c (lean staff view)
 *
 * Curated against GitLab #200 §1.4 (Mini-Detail-Views). Cross-checked against the
 * Salesforce type: Status__c (the central MP status, 13-value picklist) and
 * LastActivityDate/LastViewedDate were missing from the FlexiPage-generated config
 * and are re-added. #200's Delivery_Terms_Order__c does not exist on the object and
 * is omitted.
 *
 * Per PM: keep contact lookups (Account/Supplier/Carrier — the MP workflow is
 * email-driven to these), the computed Total_* prices and Carrier_Note__c. Drop the
 * AI-proposal fields, the mirrored Import_* / Producer / Relation / Standard-Terms product
 * fields, sample status text fields and Monthly_availability/Available_Sample. The
 * legacy free-text Feedback__c is dropped too — sample feedback is captured via
 * Feedback_Date__c + Negative_Feedback_Reason_Category__c, deviations as CAPA in
 * Prozessfeedback__c.
 *
 * Downstream roles (agent/user/rigk) untouched; handled in a later step.
 */ __turbopack_context__.s([
    "MaterialProposalFieldConfig",
    ()=>MaterialProposalFieldConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$sfPicklist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/entityFields/sfPicklist.ts [app-client] (ecmascript)");
;
const MaterialProposalFieldConfig = {
    entityType: 'Material_Proposal__c',
    entityLabel: 'Material Proposal',
    headerFields: [
        'Status__c',
        'Account__c',
        'Supplier__c',
        'Product_Code__c',
        'Margin_per_ton__c'
    ],
    // #353: Kunden-Header ohne Marge/Supplier/Account — MP-Nr., Status, Produktcode reichen.
    externalHeaderFields: [
        'Name',
        'Status__c',
        'Product_Code__c'
    ],
    sections: [
        {
            id: 'status_verknuepfung',
            label: 'Status & Verknüpfung',
            columns: 2,
            fields: [
                {
                    apiName: 'Status__c',
                    label: 'Status',
                    fieldType: 'picklist',
                    picklistOptions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$sfPicklist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfPicklist"])()([
                        {
                            label: 'Platform request',
                            value: 'Platform request'
                        },
                        {
                            label: 'In preparation',
                            value: 'In preparation'
                        },
                        {
                            label: 'Requirement confirmed',
                            value: 'Requirement confirmed'
                        },
                        {
                            label: 'Availability and buying price confirmed',
                            value: 'Availability and buying price confirmed'
                        },
                        {
                            label: 'Transport price requested',
                            value: 'Transport price requested'
                        },
                        {
                            label: 'Offer communicated',
                            value: 'Offer communicated'
                        },
                        {
                            label: 'Initial feedback received',
                            value: 'Initial feedback received'
                        },
                        {
                            label: 'Sample ordered from supplier',
                            value: 'Sample ordered from supplier'
                        },
                        {
                            label: 'Sample sent to customer',
                            value: 'Sample sent to customer'
                        },
                        {
                            label: 'Approved',
                            value: 'Approved'
                        },
                        {
                            label: 'Standard Template',
                            value: 'Standard Template'
                        },
                        {
                            label: 'Rejected',
                            value: 'Rejected'
                        },
                        {
                            label: 'Duplicate',
                            value: 'Duplicate'
                        }
                    ]),
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent'
                    ]
                },
                {
                    apiName: 'Date__c',
                    label: 'Date',
                    fieldType: 'date',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent'
                    ]
                },
                {
                    apiName: 'Follow_Up_Date__c',
                    label: 'Follow-Up Date',
                    fieldType: 'date',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent'
                    ]
                },
                {
                    apiName: 'Account__c',
                    label: 'Account',
                    fieldType: 'lookup',
                    lookupObjectType: 'Account',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent'
                    ]
                },
                {
                    apiName: 'OwnerId',
                    label: 'Inhaber',
                    fieldType: 'lookup',
                    lookupObjectType: 'User',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent'
                    ]
                },
                {
                    apiName: 'Account_Contact__c',
                    label: 'Account Contact',
                    fieldType: 'lookup',
                    lookupObjectType: 'Contact',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent'
                    ]
                },
                {
                    apiName: 'F_r_Bedarf__c',
                    label: 'Für Bedarf',
                    fieldType: 'lookup',
                    lookupObjectType: 'Bedarfe__c',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent'
                    ]
                },
                {
                    apiName: 'Projekt__c',
                    label: 'Projekt',
                    fieldType: 'lookup',
                    lookupObjectType: 'Projekt__c',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent'
                    ]
                },
                {
                    apiName: 'Kundenvorgang__c',
                    label: 'Kundenvorgang',
                    fieldType: 'lookup',
                    lookupObjectType: 'Case',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent'
                    ]
                }
            ]
        },
        {
            id: 'produkt_lieferant',
            label: 'Produkt & Lieferant',
            columns: 2,
            fields: [
                {
                    apiName: 'Product__c',
                    label: 'Product',
                    fieldType: 'lookup',
                    lookupObjectType: 'Product2',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent'
                    ]
                },
                {
                    apiName: 'Product_Code__c',
                    label: 'Product Code',
                    fieldType: 'text',
                    readOnly: true,
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent'
                    ]
                },
                {
                    apiName: 'Product_Category__c',
                    label: 'Product Category',
                    fieldType: 'text',
                    readOnly: true,
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent'
                    ]
                },
                {
                    apiName: 'Supplier__c',
                    label: 'Supplier',
                    fieldType: 'lookup',
                    lookupObjectType: 'Account',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent'
                    ]
                },
                {
                    apiName: 'Supplier_Contact__c',
                    label: 'Supplier Contact',
                    fieldType: 'lookup',
                    lookupObjectType: 'Contact',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent'
                    ]
                },
                {
                    apiName: 'Loading_Location__c',
                    label: 'Loading Location',
                    fieldType: 'lookup',
                    lookupObjectType: 'Produktionsstandort__c',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent'
                    ]
                }
            ]
        },
        {
            id: 'transport',
            label: 'Transport',
            columns: 2,
            fields: [
                {
                    apiName: 'Carrier__c',
                    label: 'Carrier',
                    fieldType: 'lookup',
                    lookupObjectType: 'Account',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent'
                    ]
                },
                {
                    apiName: 'Carrier_Contact__c',
                    label: 'Carrier Contact',
                    fieldType: 'lookup',
                    lookupObjectType: 'Contact',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent'
                    ]
                },
                {
                    apiName: 'Delivery_Location__c',
                    label: 'Delivery Location',
                    fieldType: 'lookup',
                    lookupObjectType: 'Produktionsstandort__c',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent'
                    ]
                },
                {
                    apiName: 'Delivery_Terms_Offer__c',
                    label: 'Delivery Terms Offer',
                    fieldType: 'picklist',
                    picklistOptions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$sfPicklist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfPicklist"])()([
                        {
                            label: 'EXW – Ex Works (ab Werk)',
                            value: 'EXW – Ex Works (ab Werk)'
                        },
                        {
                            label: 'FCA – Free Carrier (frei Frachtführer)',
                            value: 'FCA – Free Carrier (frei Frachtführer)'
                        },
                        {
                            label: 'CPT – Carriage Paid To (frachtfrei)',
                            value: 'CPT – Carriage Paid To (frachtfrei)'
                        },
                        {
                            label: 'CIP – Carriage and Insurance Paid to (frachtfrei versichert)',
                            value: 'CIP – Carriage and Insurance Paid to (frachtfrei versichert)'
                        },
                        {
                            label: 'DAP – Delivered At Place (geliefert benannter Ort)',
                            value: 'DAP – Delivered At Place (geliefert benannter Ort)'
                        },
                        {
                            label: 'DPU – Delivered at Place Unloaded (geliefert benannter Ort entladen)',
                            value: 'DPU – Delivered at Place Unloaded (geliefert benannter Ort entladen)'
                        },
                        {
                            label: 'DDP – Delivered Duty Paid (geliefert verzollt)',
                            value: 'DDP – Delivered Duty Paid (geliefert verzollt)'
                        },
                        {
                            label: 'FAS – Free Alongside Ship (frei längsseite Schiff)',
                            value: 'FAS – Free Alongside Ship (frei längsseite Schiff)'
                        },
                        {
                            label: 'FOB – Free On Board (frei an Bord)',
                            value: 'FOB – Free On Board (frei an Bord)'
                        },
                        {
                            label: 'CFR – Cost and Freight (Kosten und Fracht)',
                            value: 'CFR – Cost and Freight (Kosten und Fracht)'
                        },
                        {
                            label: 'CIF – Cost, Insurance and Freight (Kosten, Versicherung und Fracht)',
                            value: 'CIF – Cost, Insurance and Freight (Kosten, Versicherung und Fracht)'
                        }
                    ]),
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent'
                    ]
                },
                {
                    apiName: 'Carrier_Note__c',
                    label: 'Carrier Note',
                    fieldType: 'textarea',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent'
                    ]
                }
            ]
        },
        {
            id: 'konditionen_marge',
            label: 'Konditionen & Marge',
            columns: 2,
            fields: [
                {
                    apiName: 'Purchasing_price_per_ton__c',
                    label: 'Purchasing price per ton',
                    fieldType: 'currency',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent'
                    ]
                },
                {
                    apiName: 'Transport_Price_per_ton__c',
                    label: 'Transport Price per ton',
                    fieldType: 'currency',
                    readOnly: true,
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent'
                    ]
                },
                {
                    apiName: 'Total_Transport_Price__c',
                    label: 'Total Transport Price',
                    fieldType: 'currency',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent'
                    ]
                },
                {
                    apiName: 'Total_Purchasing_Price__c',
                    label: 'Total Purchasing Price',
                    fieldType: 'currency',
                    readOnly: true,
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent'
                    ]
                },
                {
                    apiName: 'Margin_per_ton__c',
                    label: 'Margin per ton',
                    fieldType: 'currency',
                    readOnly: true,
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent'
                    ]
                },
                {
                    apiName: 'Total_margin__c',
                    label: 'Total margin',
                    fieldType: 'currency',
                    readOnly: true,
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent'
                    ]
                },
                {
                    apiName: 'Sales_Price_per_ton__c',
                    label: 'Sales Price per ton',
                    fieldType: 'currency',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent'
                    ]
                },
                {
                    apiName: 'Total_Sales_Price__c',
                    label: 'Total Sales Price',
                    fieldType: 'currency',
                    readOnly: true,
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent'
                    ]
                },
                {
                    apiName: 'Tonnage_per_truck__c',
                    label: 'Tonnage per truck',
                    fieldType: 'number',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent'
                    ]
                },
                {
                    apiName: 'Amount_monthly_t_offered__c',
                    label: 'Amount monthly (t) offered',
                    fieldType: 'number',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent'
                    ]
                }
            ]
        },
        {
            id: 'bemusterung_feedback',
            label: 'Bemusterung & Feedback',
            columns: 2,
            fields: [
                {
                    // Mustermenge — Quelle der Musterlieferschein-Positionen und der
                    // Inline-Edit-Spalte in den SS-Related-Lists; muss für Staff
                    // pflegbar sein.
                    apiName: 'Sample_Size_in_kg__c',
                    label: 'Mustermenge (kg)',
                    fieldType: 'number',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent'
                    ]
                },
                {
                    apiName: 'Sample_Order_from_Supplier__c',
                    label: 'Sample Order from Supplier',
                    fieldType: 'lookup',
                    lookupObjectType: 'Sample_Sending__c',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent'
                    ]
                },
                {
                    apiName: 'Sample_Sending_to_Account__c',
                    label: 'Sample Sending to Account',
                    fieldType: 'lookup',
                    lookupObjectType: 'Sample_Sending__c',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent'
                    ]
                },
                {
                    apiName: 'Feedback_Date__c',
                    label: 'Feedback Date',
                    fieldType: 'date',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent'
                    ]
                },
                {
                    apiName: 'Negative_Feedback_Reason_Category__c',
                    label: '(Negative) Feedback Reason Category',
                    fieldType: 'picklist',
                    picklistOptions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$sfPicklist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfPicklist"])()([
                        {
                            label: 'Contamination in polymer composition',
                            value: 'Contamination in polymer composition'
                        },
                        {
                            label: 'Contamination with non-plastics',
                            value: 'Contamination with non-plastics'
                        },
                        {
                            label: 'Grain size or form',
                            value: 'Grain size or form'
                        },
                        {
                            label: 'Mechanical non-fit',
                            value: 'Mechanical non-fit'
                        },
                        {
                            label: 'MFR too high',
                            value: 'MFR too high'
                        },
                        {
                            label: 'MFR too low',
                            value: 'MFR too low'
                        },
                        {
                            label: 'Missing quality assurance',
                            value: 'Missing quality assurance'
                        },
                        {
                            label: 'Optical Quality',
                            value: 'Optical Quality'
                        },
                        {
                            label: 'Packaging',
                            value: 'Packaging'
                        },
                        {
                            label: 'Price',
                            value: 'Price'
                        },
                        {
                            label: 'Quality fluctuation',
                            value: 'Quality fluctuation'
                        },
                        {
                            label: 'Smell',
                            value: 'Smell'
                        },
                        {
                            label: 'Unexpected material behavior',
                            value: 'Unexpected material behavior'
                        },
                        {
                            label: 'Other (explain)',
                            value: 'Other (explain)'
                        }
                    ]),
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent'
                    ]
                }
            ]
        },
        {
            id: 'aktivitaet',
            label: 'Aktivität',
            columns: 2,
            visibleForRoles: [
                'admin',
                'staff',
                'agent'
            ],
            fields: [
                {
                    apiName: 'LastActivityDate',
                    label: 'Letzte Aktivität',
                    fieldType: 'date',
                    readOnly: true
                },
                {
                    apiName: 'LastModifiedDate',
                    label: 'Zuletzt geändert',
                    fieldType: 'datetime',
                    readOnly: true
                },
                {
                    apiName: 'LastViewedDate',
                    label: 'Zuletzt angesehen',
                    fieldType: 'datetime',
                    readOnly: true
                }
            ]
        },
        // ── #329 Welle A: Externe Perspektiven-Sets (user/rigk) ─────────────────
        // Der Server maskt Felder je Beziehung (recordVisibilityRules); diese
        // Sektionen spiegeln genau diese Sets in die UI. Ohne Perspektiven-Tag =
        // Minimal-Set (sehen alle Externen, auch im Grant-Fall). Staff-Sicht oben
        // bleibt unverändert (visibleForRoles ohne user/rigk).
        {
            id: 'ext_uebersicht',
            label: 'Übersicht',
            columns: 2,
            visibleForRoles: [
                'user',
                'rigk'
            ],
            fields: [
                {
                    apiName: 'Product_Code__c',
                    label: 'Produktcode',
                    fieldType: 'text',
                    readOnly: true
                },
                {
                    apiName: 'Product_Category__c',
                    label: 'Produktkategorie',
                    fieldType: 'text',
                    readOnly: true
                }
            ]
        },
        {
            id: 'ext_angebot',
            label: 'Ihr Angebot',
            columns: 2,
            visibleForRoles: [
                'user',
                'rigk'
            ],
            visibleForPerspectives: [
                'customer'
            ],
            fields: [
                {
                    apiName: 'Amount_monthly_t_offered__c',
                    label: 'Angebotene Menge/Monat (t)',
                    fieldType: 'number',
                    readOnly: true
                },
                {
                    apiName: 'Sales_Price_per_ton__c',
                    label: 'Preis pro Tonne',
                    fieldType: 'currency',
                    currencyCode: 'EUR',
                    readOnly: true
                },
                {
                    apiName: 'Delivery_Terms_Offer__c',
                    label: 'Lieferbedingungen',
                    fieldType: 'text',
                    readOnly: true
                },
                {
                    apiName: 'Delivery_Location__c',
                    label: 'Lieferort',
                    fieldType: 'lookup',
                    lookupObjectType: 'Produktionsstandort__c',
                    readOnly: true
                },
                {
                    apiName: 'Carrier__c',
                    label: 'Spediteur',
                    fieldType: 'lookup',
                    lookupObjectType: 'Account',
                    readOnly: true
                },
                {
                    apiName: 'Tonnage_per_truck__c',
                    label: 'Tonnage pro LKW',
                    fieldType: 'number',
                    readOnly: true
                }
            ]
        },
        {
            id: 'ext_bemusterung',
            label: 'Bemusterung',
            columns: 2,
            visibleForRoles: [
                'user',
                'rigk'
            ],
            visibleForPerspectives: [
                'customer'
            ],
            fields: [
                {
                    apiName: 'Sample_Sending_to_Account__c',
                    label: 'Musterversand',
                    fieldType: 'lookup',
                    lookupObjectType: 'Sample_Sending__c',
                    readOnly: true
                },
                {
                    apiName: 'Feedback_Date__c',
                    label: 'Feedback-Datum',
                    fieldType: 'date',
                    readOnly: true
                },
                {
                    apiName: 'Negative_Feedback_Reason_Category__c',
                    label: 'Feedback-Grund (negativ)',
                    fieldType: 'text',
                    readOnly: true
                }
            ]
        },
        {
            id: 'ext_ware',
            label: 'Ihre Ware',
            columns: 2,
            visibleForRoles: [
                'user',
                'rigk'
            ],
            visibleForPerspectives: [
                'supplier'
            ],
            fields: [
                {
                    apiName: 'Product__c',
                    label: 'Produkt',
                    fieldType: 'lookup',
                    lookupObjectType: 'Product2',
                    readOnly: true
                },
                {
                    apiName: 'Monthly_availability_in_t__c',
                    label: 'Monatl. Verfügbarkeit (t)',
                    fieldType: 'number',
                    readOnly: true
                },
                {
                    apiName: 'Purchasing_price_per_ton__c',
                    label: 'Preis pro Tonne',
                    fieldType: 'currency',
                    currencyCode: 'EUR',
                    readOnly: true
                },
                {
                    apiName: 'Standard_Business_Terms_Supplier__c',
                    label: 'Geschäftsbedingungen',
                    fieldType: 'text',
                    readOnly: true
                },
                {
                    apiName: 'Loading_Location__c',
                    label: 'Ladestelle',
                    fieldType: 'lookup',
                    lookupObjectType: 'Produktionsstandort__c',
                    readOnly: true
                }
            ]
        },
        {
            id: 'ext_muster_lieferant',
            label: 'Bemusterung',
            columns: 2,
            visibleForRoles: [
                'user',
                'rigk'
            ],
            visibleForPerspectives: [
                'supplier'
            ],
            fields: [
                {
                    apiName: 'Available_Sample_plastship_kg__c',
                    label: 'Muster verfügbar (kg)',
                    fieldType: 'number',
                    readOnly: true
                },
                {
                    apiName: 'Sample_Order_from_Supplier__c',
                    label: 'Musterbestellung',
                    fieldType: 'lookup',
                    lookupObjectType: 'Sample_Sending__c',
                    readOnly: true
                },
                {
                    apiName: 'Sample_Order_from_Supplier_Status__c',
                    label: 'Status Musterbestellung',
                    fieldType: 'text',
                    readOnly: true
                }
            ]
        },
        {
            id: 'ext_transport',
            label: 'Transport',
            columns: 2,
            visibleForRoles: [
                'user',
                'rigk'
            ],
            visibleForPerspectives: [
                'carrier'
            ],
            fields: [
                {
                    apiName: 'Tonnage_per_truck__c',
                    label: 'Tonnage pro LKW',
                    fieldType: 'number',
                    readOnly: true
                },
                {
                    apiName: 'Loading_Location__c',
                    label: 'Ladestelle',
                    fieldType: 'lookup',
                    lookupObjectType: 'Produktionsstandort__c',
                    readOnly: true
                },
                {
                    apiName: 'Delivery_Location__c',
                    label: 'Lieferort',
                    fieldType: 'lookup',
                    lookupObjectType: 'Produktionsstandort__c',
                    readOnly: true
                },
                {
                    // #353: SF-Formelfeld (updateable=false) — read-only. Der Carrier
                    // trägt den Gesamtpreis unten ein, der Pro-Tonne-Wert wird berechnet.
                    apiName: 'Transport_Price_per_ton__c',
                    label: 'Transportpreis pro Tonne',
                    fieldType: 'currency',
                    currencyCode: 'EUR',
                    readOnly: true
                },
                {
                    // #353: das eigentlich schreibbare Transportpreis-Feld auf MP (PM 2026-07-04).
                    apiName: 'Total_Transport_Price__c',
                    label: 'Transportpreis gesamt',
                    fieldType: 'currency',
                    currencyCode: 'EUR'
                },
                {
                    apiName: 'Carrier_Note__c',
                    label: 'Notiz',
                    fieldType: 'textarea'
                }
            ]
        }
    ],
    // #329: Perspektiven-Verdrahtung — steuert Client-Sektionen UND die server-
    // seitige Schreib-Allowlist. Nur der Spediteur darf schreiben (Preis + Notiz).
    perspectives: {
        lookups: {
            customer: 'Account_Contact__c',
            supplier: 'Supplier_Contact__c',
            carrier: 'Carrier_Contact__c'
        },
        updatable: {
            // #353: Transport_Price_per_ton__c ist ein Formelfeld → nicht schreibbar;
            // der Carrier schreibt den Gesamtpreis (Total_Transport_Price__c) + Notiz.
            carrier: [
                'Total_Transport_Price__c',
                'Carrier_Note__c'
            ]
        }
    },
    tabGroups: [
        {
            id: 'deal',
            label: 'Deal',
            sectionIds: [
                'status_verknuepfung',
                'produkt_lieferant',
                'transport',
                'konditionen_marge'
            ],
            isDefault: true
        },
        {
            id: 'bemusterung_verlauf',
            label: 'Bemusterung & Verlauf',
            sectionIds: [
                'bemusterung_feedback',
                'aktivitaet'
            ]
        }
    ],
    relatedLists: [
        {
            relationshipName: 'Status_Updates__r',
            label: 'Status Updates',
            fields: [
                'Id',
                'OwnerId',
                'Update_Type__c',
                'Meeting_DateTime__c',
                'CreatedById',
                'Body__c',
                'Next_Steps__c'
            ],
            maxRows: 10,
            visibleForRoles: [
                'admin',
                'staff',
                'agent'
            ]
        },
        {
            relationshipName: 'Aktuelle_Preise_und_Verf_gbarkeiten__r',
            label: 'Aktuelle Preise & Verfügbarkeiten',
            fields: [
                'Id',
                'Name',
                'Owner.Alias',
                'g_ltig_ab__c',
                'Preis_pro_Tonne__c',
                'Preis_pro_Tonne_DDP__c',
                'Tonnen__c'
            ],
            maxRows: 5,
            sortField: 'g_ltig_ab__c',
            sortOrder: 'desc',
            visibleForRoles: [
                'admin',
                'staff'
            ]
        },
        {
            // #826: Aufgaben am Datensatz — Zeile öffnet die Aufgabe im Drawer
            relationshipName: 'Tasks',
            label: 'Aufgaben',
            fields: [
                'Id',
                'Subject',
                'Owner.Alias',
                'ActivityDate',
                'Status',
                'Priority'
            ],
            maxRows: 10,
            visibleForRoles: [
                'admin',
                'staff',
                'agent'
            ]
        },
        {
            relationshipName: 'Feedbacks__r',
            label: 'Prozessfeedback',
            // #329: konservativ intern (CAPA-Kommunikation).
            fields: [
                'Id',
                'Name',
                'CreatedDate',
                'Status__c',
                'Current_State_Evaluation__c',
                'Description__c'
            ],
            maxRows: 10,
            visibleForRoles: [
                'admin',
                'staff',
                'agent'
            ]
        },
        {
            relationshipName: 'AttachedContentDocuments',
            label: 'Dateien',
            // #329: konservativ intern — Anhänge können interne Dokumente sein.
            fields: [
                'Id',
                'Title'
            ],
            maxRows: 10,
            visibleForRoles: [
                'admin',
                'staff',
                'agent'
            ]
        }
    ],
    systemFields: [
        'Id',
        'CreatedDate',
        'CreatedById',
        'LastModifiedDate',
        'LastModifiedById',
        'OwnerId'
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/config/entityFields/Materialanalyse.fields.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// CURATED — do not regenerate (--force) without re-applying the lean rules in LEAN-CURATION.md
/**
 * Entity Field Configuration: Materialanalyse__c (lean staff/lab view)
 *
 * Curated against GitLab #200 §6.1. Cross-check added the fields #200 lists that
 * were missing from the generated config: Polymer__c / Produkt_ID__c (formula, ro),
 * Monitored_Material_Created/Last_Changed (ro), Auftragsnummer_plastship__c,
 * Betrag_Kosten_Analyse__c, Batchnummer__c, Zeitpunkt_Musterentnahme__c and
 * Sichtbar_f_r_Dienstleister__c (formula, ro). 4 flat sections.
 *
 * Dropped: the legacy Feedbacks list and the duplicate Audit_Parameters__r list
 * (AuditProperties__r = AuditProperty__c is the one #200 references).
 *
 * Lab-facing object → fields visible for admin/staff/laboratory.
 */ __turbopack_context__.s([
    "MaterialanalyseFieldConfig",
    ()=>MaterialanalyseFieldConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$sfPicklist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/entityFields/sfPicklist.ts [app-client] (ecmascript)");
;
const MaterialanalyseFieldConfig = {
    entityType: 'Materialanalyse__c',
    entityLabel: 'Materialanalyse',
    headerFields: [
        'Name',
        'Status__c',
        'Analysetyp__c',
        'Datum_Auftrag__c',
        'Dienstleister__c'
    ],
    sections: [
        {
            id: 'identifikation',
            label: 'Identifikation',
            columns: 2,
            visibleForRoles: [
                'admin',
                'staff',
                'laboratory'
            ],
            fields: [
                {
                    apiName: 'Name',
                    label: 'Materialanalyse-Name',
                    fieldType: 'text',
                    readOnly: true
                },
                {
                    apiName: 'Status__c',
                    label: 'Status',
                    fieldType: 'picklist',
                    picklistOptions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$sfPicklist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfPicklist"])()([
                        {
                            label: 'Offen',
                            value: 'Offen'
                        },
                        {
                            label: 'Beauftragt',
                            value: 'Beauftragt'
                        },
                        {
                            label: 'Übergeben (plastship an DL)',
                            value: 'Übergeben (plastship an DL)'
                        },
                        {
                            label: 'Received',
                            value: 'Received'
                        },
                        {
                            label: 'in Arbeit',
                            value: 'in Arbeit'
                        },
                        {
                            label: 'On hold',
                            value: 'On hold'
                        },
                        {
                            label: 'Abgeschlossen (Dienstleister)',
                            value: 'Abgeschlossen (Dienstleister)'
                        },
                        {
                            label: 'QC ok (plastship)',
                            value: 'QC ok (plastship)'
                        },
                        {
                            label: 'Veröffentlicht (plastship)',
                            value: 'Veröffentlicht (plastship)'
                        },
                        {
                            label: 'Nachpflegen (plastship)',
                            value: 'Nachpflegen'
                        }
                    ])
                },
                {
                    apiName: 'Analysetyp__c',
                    label: 'Analysetyp',
                    fieldType: 'picklist',
                    picklistOptions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$sfPicklist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfPicklist"])()([
                        {
                            label: 'KISS Benchmark-Analyse',
                            value: 'Benchmark_Analyse'
                        },
                        {
                            label: 'KISS Benchmark-Analyse Prio 1',
                            value: 'KISS Benchmark Prio 1'
                        },
                        {
                            label: 'Benchmark Kundenauftrag',
                            value: 'Benchmark Kundenauftrag'
                        },
                        {
                            label: 'Laboranalyse ext. Dienstleister',
                            value: 'GlobalLaboranalyse_ext_Dienstleister'
                        },
                        {
                            label: 'Laboranalyse Lieferant',
                            value: 'Laboranalyse_Lieferant'
                        },
                        {
                            label: 'Laboranalyse Kunde',
                            value: 'Laboranalyse Kunde'
                        },
                        {
                            label: 'Prüfdaten TDS Lieferant',
                            value: 'Prüfdaten TDS Lieferant'
                        }
                    ])
                },
                {
                    apiName: 'Datensatztyp__c',
                    label: 'Einordnung Datensatz',
                    fieldType: 'picklist',
                    picklistOptions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$sfPicklist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfPicklist"])()([
                        {
                            label: 'Globale Analyse',
                            value: 'Globale Analyse'
                        },
                        {
                            label: 'Batchanalyse',
                            value: 'Batchanalyse'
                        }
                    ])
                },
                {
                    apiName: 'OwnerId',
                    label: 'Inhaber',
                    fieldType: 'lookup',
                    lookupObjectType: 'User'
                },
                {
                    apiName: 'Datum_Auftrag__c',
                    label: 'Datum Auftrag',
                    fieldType: 'date'
                },
                {
                    apiName: 'Analysezeitpunkt__c',
                    label: 'Analysezeitpunkt',
                    fieldType: 'datetime'
                },
                {
                    apiName: 'Ergebnis_ben_tigt_bis__c',
                    label: 'Ergebnis benötigt bis',
                    fieldType: 'datetime'
                },
                {
                    apiName: 'Sichtbar_f_r_Dienstleister__c',
                    label: 'Sichtbar für Dienstleister',
                    fieldType: 'boolean',
                    readOnly: true
                }
            ]
        },
        {
            id: 'verknuepfungen_probe',
            label: 'Verknüpfungen & Probe',
            columns: 2,
            visibleForRoles: [
                'admin',
                'staff',
                'laboratory'
            ],
            fields: [
                {
                    apiName: 'Material_ID__c',
                    label: 'Material (Produkt)',
                    fieldType: 'lookup',
                    lookupObjectType: 'Product2'
                },
                {
                    apiName: 'Polymer__c',
                    label: 'Polymer',
                    fieldType: 'text',
                    readOnly: true
                },
                {
                    apiName: 'Produkt_ID__c',
                    label: 'Produkt-ID',
                    fieldType: 'text',
                    readOnly: true
                },
                // Menge der Analyse-Probe — Quelle der Menge-Spalte auf dem
                // Musterlieferschein (Analyse); muss für Staff pflegbar sein.
                {
                    apiName: 'Materialmenge_Analyse__c',
                    label: 'Materialmenge (kg)',
                    fieldType: 'number'
                },
                {
                    apiName: 'Monitored_Material__c',
                    label: 'Monitored Material',
                    fieldType: 'lookup',
                    lookupObjectType: 'Monitored_Material__c'
                },
                {
                    apiName: 'Monitored_Material_Created__c',
                    label: 'Monitored Material erstellt',
                    fieldType: 'datetime',
                    readOnly: true
                },
                {
                    apiName: 'Monitored_Material_Last_Changed__c',
                    label: 'Monitored Material geändert',
                    fieldType: 'datetime',
                    readOnly: true
                },
                {
                    apiName: 'Sample_Sending__c',
                    label: 'Sample Sending',
                    fieldType: 'lookup',
                    lookupObjectType: 'Sample_Sending__c'
                },
                {
                    apiName: 'Auftragsnummer_plastship__c',
                    label: 'Auftragsnummer plastship',
                    fieldType: 'text'
                },
                {
                    apiName: 'Dienstleister__c',
                    label: 'Dienstleister',
                    fieldType: 'lookup',
                    lookupObjectType: 'Account'
                },
                {
                    apiName: 'Batchnummer__c',
                    label: 'Batchnummer',
                    fieldType: 'text'
                },
                {
                    apiName: 'Zeitpunkt_Musterentnahme__c',
                    label: 'Zeitpunkt Musterentnahme',
                    fieldType: 'datetime'
                }
            ]
        },
        {
            id: 'qualitaet_ergebnis',
            label: 'Qualität & Ergebnis',
            columns: 2,
            visibleForRoles: [
                'admin',
                'staff',
                'laboratory'
            ],
            fields: [
                {
                    apiName: 'Kategorie_f_r_Qualit_tseinsch_tzung__c',
                    label: 'Kategorie für Qualitätseinschätzung',
                    fieldType: 'multipicklist',
                    picklistOptions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$sfPicklist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfPicklist"])()([
                        {
                            label: 'Mechanische Eigenschaften',
                            value: 'Mechanische Eigenschaften'
                        },
                        {
                            label: 'Physikalische Eigenschaften',
                            value: 'Physikalische Eigenschaften'
                        },
                        {
                            label: 'Rheologische Eigenschaften',
                            value: 'Rheologische Eigenschaften'
                        },
                        {
                            label: 'Optische Qualität',
                            value: 'Optische Qualität'
                        },
                        {
                            label: 'Materialzusammensetzung',
                            value: 'Materialzusammensetzung'
                        },
                        {
                            label: 'Geruch',
                            value: 'Geruch'
                        }
                    ])
                },
                {
                    apiName: 'Optical_Recyclate_Share__c',
                    label: 'Optical Recyclate Share',
                    fieldType: 'percent'
                },
                {
                    apiName: 'Optical_Temperature_Category__c',
                    label: 'Optical Temperature Category',
                    fieldType: 'picklist',
                    picklistOptions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$sfPicklist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfPicklist"])()([
                        {
                            label: 'warm',
                            value: 'warm'
                        },
                        {
                            label: 'cold',
                            value: 'cold'
                        }
                    ])
                },
                {
                    apiName: 'Ergebnis__c',
                    label: 'Ergebnis',
                    fieldType: 'textarea'
                },
                {
                    apiName: 'Notiz_Beschreibung__c',
                    label: 'Notiz / Beschreibung',
                    fieldType: 'textarea'
                }
            ]
        },
        {
            id: 'kosten_abrechnung',
            label: 'Kosten & Abrechnung',
            columns: 2,
            visibleForRoles: [
                'admin',
                'staff',
                'laboratory'
            ],
            fields: [
                {
                    apiName: 'Betrag_Kosten_Analyse__c',
                    label: 'Betrag Kosten Analyse',
                    fieldType: 'currency',
                    currencyCode: 'EUR'
                },
                {
                    apiName: 'Invoice_Number__c',
                    label: 'Invoice Number',
                    fieldType: 'text'
                },
                {
                    apiName: 'Invoiced__c',
                    label: 'Invoiced',
                    fieldType: 'boolean'
                },
                {
                    apiName: 'PO_Number__c',
                    label: 'PO Number',
                    fieldType: 'text'
                }
            ]
        }
    ],
    relatedLists: [
        {
            relationshipName: 'AuditProperties__r',
            label: 'Prüfparameter',
            // Bezeichnung (Name__c) als erste Spalte = Zeilen-Link; die Auto-Nummer
            // (Name) steht auf der Detailseite und entfiele sonst als Doppel-"Name".
            fields: [
                'Id',
                'Name__c',
                'Category_AuditPropertyType__c',
                'Value__c',
                'Test_parameter1__c',
                'Test_parameter2__c',
                'Text_Value__c',
                'CreatedDate'
            ],
            maxRows: 20,
            // #331: Zeilen-Navigation zur neuen Detailseite + Create-Button
            // (Anlage nur admin/staff — Gate via objectPermissions, #202 §21).
            relatedEntityType: 'AuditProperty',
            // #323/#479: Wert/Parameter/Text direkt in der Tabelle pflegbar
            // (Formeln wie Name__c/Kategorie bleiben automatisch Anzeige).
            // Kein addExisting: Materialanalyse__c ist SF-seitig nicht updateable (#404).
            inlineEdit: true,
            visibleForRoles: [
                'admin',
                'staff',
                'laboratory'
            ]
        },
        {
            relationshipName: 'Feedbacks__r',
            label: 'Prozessfeedback',
            fields: [
                'Id',
                'Name',
                'CreatedDate',
                'Status__c',
                'Current_State_Evaluation__c',
                'Description__c'
            ],
            maxRows: 10,
            visibleForRoles: [
                'admin',
                'staff',
                'agent',
                'user',
                'rigk'
            ]
        },
        {
            relationshipName: 'AttachedContentDocuments',
            label: 'Dateien',
            fields: [
                'Id',
                'Title'
            ],
            maxRows: 10,
            visibleForRoles: [
                'admin',
                'staff',
                'laboratory'
            ]
        }
    ],
    systemFields: [
        'Id',
        'CreatedDate',
        'CreatedById',
        'LastModifiedDate',
        'LastModifiedById',
        'OwnerId'
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/config/entityFields/MonitoredMaterial.fields.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// CURATED — do not regenerate (--force) without re-applying the lean rules in LEAN-CURATION.md
/**
 * Entity Field Configuration: Monitored_Material__c (lean staff/lab view)
 *
 * Special case: the fields are real quality test data, not noise — kept in full
 * (per PM) and only reorganised into tab groups (Stammdaten / Prüfdaten / Qualität &
 * Optik / Compliance / Markt & Abschluss). Compliance groups Schwermetalle + CO2/PCF.
 * All sections expanded by default (per PM). The legacy Feedbacks related list is dropped.
 */ __turbopack_context__.s([
    "MonitoredMaterialFieldConfig",
    ()=>MonitoredMaterialFieldConfig
]);
const MonitoredMaterialFieldConfig = {
    entityType: 'Monitored_Material__c',
    entityLabel: 'Monitored Material',
    headerFields: [
        'Name',
        'Kunde__c',
        'Account_Produkt__c',
        'Kontakt_Kunde__c',
        'Produkt__c'
    ],
    sections: [
        {
            id: 'meta',
            label: 'Meta',
            fields: [
                {
                    apiName: 'Name',
                    label: 'Monitored Material-Name',
                    fieldType: 'text',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent',
                        'user',
                        'rigk'
                    ]
                },
                {
                    apiName: 'Datum_Report__c',
                    label: 'Datum Report',
                    fieldType: 'date',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent',
                        'user',
                        'rigk'
                    ]
                },
                {
                    apiName: 'Kunde__c',
                    label: 'Kunde',
                    fieldType: 'lookup',
                    lookupObjectType: 'Account',
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'Kontakt_Kunde__c',
                    label: 'Kontakt Kunde',
                    fieldType: 'lookup',
                    lookupObjectType: 'Contact',
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'Ersteller__c',
                    label: 'Ersteller',
                    fieldType: 'lookup',
                    lookupObjectType: 'User',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent',
                        'user',
                        'rigk'
                    ]
                },
                {
                    apiName: 'OwnerId',
                    label: 'Inhaber',
                    fieldType: 'lookup',
                    lookupObjectType: 'User',
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'Auftrag__c',
                    label: 'Auftrag',
                    fieldType: 'lookup',
                    lookupObjectType: 'Order',
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'Report_Individuelle_Nummer__c',
                    label: 'Report Individuelle Nummer',
                    fieldType: 'text',
                    readOnly: true,
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'Assessment_11_Sampling__c',
                    label: 'Assessment 11 Sampling',
                    fieldType: 'text',
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'Assessment_13_Quality__c',
                    label: 'Assessment 13 Quality',
                    fieldType: 'text',
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                }
            ]
        },
        {
            id: 'materialhintergrund',
            label: 'Materialhintergrund',
            fields: [
                {
                    apiName: 'Produkt__c',
                    label: 'Produkt',
                    fieldType: 'lookup',
                    lookupObjectType: 'Product2',
                    // #1419: der Lookup löst die Id zu Produktname + Lieferant auf —
                    // nur intern (maskRecordFields liefert Kunden die Id ohnehin nicht)
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'Account_Produkt__c',
                    label: 'Account Produkt',
                    fieldType: 'text',
                    readOnly: true,
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'Produktbeschreibung_DE__c',
                    label: 'Produktbeschreibung DE',
                    fieldType: 'text',
                    readOnly: true,
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'Recycled_Content__c',
                    label: 'Rezyklatgehalt (%)',
                    fieldType: 'number',
                    // SF-Formelfeld (aus Produkt__r.Recycled_Content__c) - nie editierbar
                    readOnly: true,
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent',
                        'user',
                        'rigk'
                    ]
                },
                {
                    apiName: 'Hauptpolymer__c',
                    label: 'Hauptpolymer',
                    fieldType: 'text',
                    readOnly: true,
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent',
                        'user',
                        'rigk'
                    ]
                },
                {
                    apiName: 'Form__c',
                    label: 'Form',
                    fieldType: 'text',
                    readOnly: true,
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent',
                        'user',
                        'rigk'
                    ]
                },
                {
                    apiName: 'Rezyklatdefinition__c',
                    label: 'Rezyklatdefinition',
                    fieldType: 'text',
                    readOnly: true,
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent',
                        'user',
                        'rigk'
                    ]
                },
                {
                    apiName: 'Farbe__c',
                    label: 'Farbe',
                    fieldType: 'text',
                    readOnly: true,
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent',
                        'user',
                        'rigk'
                    ]
                },
                {
                    apiName: 'Filter_size_my__c',
                    label: 'Filter size (my)',
                    fieldType: 'number',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent',
                        'user',
                        'rigk'
                    ]
                },
                {
                    apiName: 'Abfallfraktion__c',
                    label: 'Abfallfraktion',
                    fieldType: 'text',
                    readOnly: true,
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent',
                        'user',
                        'rigk'
                    ]
                },
                {
                    apiName: 'Abfallfraktion_Zuordnung_Typ__c',
                    label: 'Abfallfraktion Zuordnung Typ',
                    fieldType: 'text',
                    readOnly: true,
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent',
                        'user',
                        'rigk'
                    ]
                },
                {
                    apiName: 'Abfallfraktion_Kunststoff__c',
                    label: 'Abfallfraktion Kunststoff',
                    fieldType: 'text',
                    readOnly: true,
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent',
                        'user',
                        'rigk'
                    ]
                },
                {
                    apiName: 'Abfallfraktion_Herkunft__c',
                    label: 'Abfallfraktion Herkunft',
                    fieldType: 'text',
                    readOnly: true,
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent',
                        'user',
                        'rigk'
                    ]
                },
                {
                    apiName: 'Abfallfraktion_Typische_Kontamination__c',
                    label: 'Abfallfraktion Typische Kontamination',
                    fieldType: 'text',
                    readOnly: true,
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent',
                        'user',
                        'rigk'
                    ]
                },
                {
                    apiName: 'Abfallfraktion_Zuordn_Rezyklatdefinition__c',
                    label: 'Abfallfraktion Zuordn Rezyklatdefinition',
                    fieldType: 'text',
                    readOnly: true,
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent',
                        'user',
                        'rigk'
                    ]
                },
                {
                    apiName: 'EWC__c',
                    label: 'EWC',
                    fieldType: 'text',
                    readOnly: true,
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent',
                        'user',
                        'rigk'
                    ]
                },
                {
                    apiName: 'Assessment_1_General__c',
                    label: 'Assessment 1 General',
                    fieldType: 'text',
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                }
            ]
        },
        {
            id: 'standardpr_fungen',
            label: 'Standardprüfungen',
            fields: [
                {
                    apiName: 'Beschreibung_Analysen_Standard__c',
                    label: 'Beschreibung Analysen Standard',
                    fieldType: 'textarea',
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'MFR_Test_Standard_ISO_1133__c',
                    label: 'MFR - Test Standard: ISO 1133',
                    fieldType: 'number',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent',
                        'user',
                        'rigk'
                    ]
                },
                {
                    apiName: 'MFR_Temp__c',
                    label: 'MFR Temp',
                    fieldType: 'number',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent',
                        'user',
                        'rigk'
                    ]
                },
                {
                    apiName: 'MFR_kg__c',
                    label: 'MFR kg',
                    fieldType: 'number',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent',
                        'user',
                        'rigk'
                    ]
                },
                {
                    apiName: 'MVR_Test_Standard_ISO_1133__c',
                    label: 'MVR - Test Standard: ISO 1133',
                    fieldType: 'number',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent',
                        'user',
                        'rigk'
                    ]
                },
                {
                    apiName: 'Dichte_Test_Standard_ISO_1183__c',
                    label: 'Dichte - Test Standard: ISO 1183',
                    fieldType: 'number',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent',
                        'user',
                        'rigk'
                    ]
                },
                {
                    apiName: 'Sch_ttdichte__c',
                    label: 'Schüttdichte',
                    fieldType: 'number',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent',
                        'user',
                        'rigk'
                    ]
                },
                {
                    apiName: 'Oberfl_chenfeuchte_Test_Standard_IS__c',
                    label: 'Oberflächenfeuchte - Test Standard: IS',
                    fieldType: 'percent',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent',
                        'user',
                        'rigk'
                    ]
                },
                {
                    apiName: 'Aschegehalt_Test_Standard_ISO_3451__c',
                    label: 'Aschegehalt - Test Standard: ISO 3451',
                    fieldType: 'percent',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent',
                        'user',
                        'rigk'
                    ]
                },
                {
                    apiName: 'Assessment_2_Parameters__c',
                    label: 'Assessment 2 Parameters',
                    fieldType: 'text',
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                }
            ]
        },
        {
            id: 'folientests',
            label: 'Folientests',
            fields: [
                {
                    apiName: 'Beschreibung_Analysen_Folie__c',
                    label: 'Beschreibung Analysen Folie',
                    fieldType: 'textarea',
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'Kraft_an_Streckgrenze_Folie__c',
                    label: 'Kraft an Streckgrenze Folie (N)',
                    fieldType: 'number',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent',
                        'user',
                        'rigk'
                    ]
                },
                {
                    apiName: 'Kraft_bei_Bruch_N__c',
                    label: 'Kraft bei Bruch Folie (N)',
                    fieldType: 'number',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent',
                        'user',
                        'rigk'
                    ]
                },
                {
                    apiName: 'Dehnung_an_der_Streckgrenze_Folie__c',
                    label: 'Dehnung an der Streckgrenze Folie (%)',
                    fieldType: 'percent',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent',
                        'user',
                        'rigk'
                    ]
                },
                {
                    apiName: 'Dehnung_bei_Bruch_Folie__c',
                    label: 'Dehnung bei Bruch Folie',
                    fieldType: 'percent',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent',
                        'user',
                        'rigk'
                    ]
                },
                {
                    apiName: 'Abweichung_Dehnung_bei_Bruch_Folie__c',
                    label: 'Abweichung Dehnung bei Bruch Folie +/-',
                    fieldType: 'percent',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent',
                        'user',
                        'rigk'
                    ]
                },
                {
                    apiName: 'Dart_Drop_50g__c',
                    label: 'Dart Drop 50g',
                    fieldType: 'number',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent',
                        'user',
                        'rigk'
                    ]
                },
                {
                    apiName: 'Assessment_3_Mechanical__c',
                    label: 'Assessment 3 Mechanical',
                    fieldType: 'text',
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                }
            ]
        },
        {
            id: 'mechanische_eigenschaften',
            label: 'Mechanische Eigenschaften',
            fields: [
                {
                    apiName: 'Bruchdehnung__c',
                    label: 'Bruchdehnung',
                    fieldType: 'number',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent',
                        'user',
                        'rigk'
                    ]
                },
                {
                    apiName: 'Bruchdehnung_Text__c',
                    label: 'Bruchdehnung Text',
                    fieldType: 'text',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent',
                        'user',
                        'rigk'
                    ]
                },
                {
                    apiName: 'Kerbschlagz_higkeit_Charpy__c',
                    label: 'Kerbschlagzähigkeit Charpy',
                    fieldType: 'number',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent',
                        'user',
                        'rigk'
                    ]
                },
                {
                    apiName: 'Kerbschlagz_higkeit_Charpy_Text__c',
                    label: 'Kerbschlagzähigkeit Charpy Text',
                    fieldType: 'text',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent',
                        'user',
                        'rigk'
                    ]
                },
                {
                    apiName: 'Zug_E_Modul__c',
                    label: 'Zug-E-Modul',
                    fieldType: 'number',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent',
                        'user',
                        'rigk'
                    ]
                },
                {
                    apiName: 'Zug_E_Modul_Text__c',
                    label: 'Zug-E-Modul Text',
                    fieldType: 'text',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent',
                        'user',
                        'rigk'
                    ]
                },
                {
                    apiName: 'Zugfestigkeit__c',
                    label: 'Zugfestigkeit',
                    fieldType: 'number',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent',
                        'user',
                        'rigk'
                    ]
                },
                {
                    apiName: 'Zugfestigkeit_Text__c',
                    label: 'Zugfestigkeit Text',
                    fieldType: 'text',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent',
                        'user',
                        'rigk'
                    ]
                }
            ]
        },
        {
            id: 'geruch',
            label: 'Geruch',
            fields: [
                {
                    apiName: 'Beschreibung_Analysen_Geruch__c',
                    label: 'Beschreibung Analysen Geruch',
                    fieldType: 'textarea',
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'Geruchsbewertung_Sensor_0__c',
                    label: 'Geruchsbewertung Sensor 0',
                    fieldType: 'number',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent',
                        'user',
                        'rigk'
                    ]
                },
                {
                    apiName: 'Geruchsbewertung_Sensor_1__c',
                    label: 'Geruchsbewertung Sensor 1',
                    fieldType: 'number',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent',
                        'user',
                        'rigk'
                    ]
                },
                {
                    apiName: 'Geruchsbewertung_Sensor_2__c',
                    label: 'Geruchsbewertung Sensor 2',
                    fieldType: 'number',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent',
                        'user',
                        'rigk'
                    ]
                },
                {
                    apiName: 'Geruchsbewertung_Sensor_3__c',
                    label: 'Geruchsbewertung Sensor 3',
                    fieldType: 'number',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent',
                        'user',
                        'rigk'
                    ]
                },
                {
                    apiName: 'Geruchsbewertung_Durchschnitt__c',
                    label: 'Geruchsbewertung Durchschnitt',
                    fieldType: 'number',
                    readOnly: true,
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent',
                        'user',
                        'rigk'
                    ]
                },
                {
                    apiName: 'Geruchsbewertung_Skala_allgemein__c',
                    label: 'Geruchsbewertung Skala allgemein',
                    fieldType: 'number',
                    readOnly: true,
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent',
                        'user',
                        'rigk'
                    ]
                },
                {
                    apiName: 'Geruchsbewertung_Skala_REHAU__c',
                    label: 'Geruchsbewertung Skala REHAU',
                    fieldType: 'number',
                    readOnly: true,
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent',
                        'user',
                        'rigk'
                    ]
                },
                {
                    apiName: 'Rang_Geruch__c',
                    label: 'Rang Geruch',
                    fieldType: 'number',
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'Anzahl_Datens_tze_Geruch__c',
                    label: 'Anzahl Datensätze Geruch',
                    fieldType: 'number',
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'Assessment_4_Odour__c',
                    label: 'Assessment 4 Odour',
                    fieldType: 'text',
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                }
            ]
        },
        {
            id: 'polymeranteile',
            label: 'Polymeranteile',
            fields: [
                {
                    apiName: 'Beschreibung_Analysen_Polymeranteile__c',
                    label: 'Beschreibung Analysen Polymeranteile',
                    fieldType: 'textarea',
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'Polymer_1__c',
                    label: 'Polymer 1',
                    fieldType: 'textarea',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent',
                        'user',
                        'rigk'
                    ]
                },
                {
                    apiName: 'Polymer_2__c',
                    label: 'Polymer 2',
                    fieldType: 'textarea',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent',
                        'user',
                        'rigk'
                    ]
                },
                {
                    apiName: 'Polymer_3__c',
                    label: 'Polymer 3',
                    fieldType: 'textarea',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent',
                        'user',
                        'rigk'
                    ]
                },
                {
                    apiName: 'Polymer_Assessment__c',
                    label: 'Polymer Assessment',
                    fieldType: 'textarea',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent',
                        'user',
                        'rigk'
                    ]
                },
                {
                    apiName: 'Assessment_5_Polymers__c',
                    label: 'Assessment 5 Polymers',
                    fieldType: 'text',
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                }
            ]
        },
        {
            id: 'schwermetalle',
            label: 'Schwermetalle',
            fields: [
                {
                    apiName: 'Beschreibung_Analysen_Schwermetalle__c',
                    label: 'Beschreibung Analysen Schwermetalle',
                    fieldType: 'textarea',
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'Blei_Pb_in_ppm__c',
                    label: 'Blei (Pb) in ppm',
                    fieldType: 'number',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent',
                        'user',
                        'rigk'
                    ]
                },
                {
                    apiName: 'Cadmium_Cd_in_ppm__c',
                    label: 'Cadmium (Cd) in ppm',
                    fieldType: 'number',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent',
                        'user',
                        'rigk'
                    ]
                },
                {
                    apiName: 'Quecksilber_Hg_in_ppm__c',
                    label: 'Quecksilber (Hg) in ppm',
                    fieldType: 'number',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent',
                        'user',
                        'rigk'
                    ]
                },
                {
                    apiName: 'Chrom_Cr_gesamt_in_ppm__c',
                    label: 'Chrom (Cr) gesamt in ppm',
                    fieldType: 'number',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent',
                        'user',
                        'rigk'
                    ]
                },
                {
                    apiName: 'Summe_Schwermetalle__c',
                    label: 'Summe Schwermetalle',
                    fieldType: 'number',
                    readOnly: true,
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent',
                        'user',
                        'rigk'
                    ]
                },
                {
                    apiName: 'Schwermetallgrenzen__c',
                    label: 'Schwermetallgrenzen',
                    fieldType: 'text',
                    readOnly: true,
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent',
                        'user',
                        'rigk'
                    ]
                },
                {
                    apiName: 'Brom_Br__c',
                    label: 'Brom (Br)',
                    fieldType: 'number',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent',
                        'user',
                        'rigk'
                    ]
                },
                {
                    apiName: 'Assessment_6_HeavyM__c',
                    label: 'Assessment 6 HeavyM',
                    fieldType: 'text',
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                }
            ]
        },
        {
            id: 'optische_qualit_t',
            label: 'Optische Qualität',
            fields: [
                {
                    apiName: 'Beschreibung_Analysen_Optische_Qualit_t__c',
                    label: 'Beschreibung Analysen Optische Qualität',
                    fieldType: 'textarea',
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'Optical_Temperature_Category__c',
                    label: 'Optical Temperature Category',
                    fieldType: 'text',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent',
                        'user',
                        'rigk'
                    ]
                },
                {
                    apiName: 'Optical_Recyclate_Share__c',
                    label: 'Optical Recyclate Share',
                    fieldType: 'percent',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent',
                        'user',
                        'rigk'
                    ]
                },
                {
                    apiName: 'Cat_1_Defects_m_0_05mm__c',
                    label: 'Cat. 1 Defects/m² <0,05mm²',
                    fieldType: 'number',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent',
                        'user',
                        'rigk'
                    ]
                },
                {
                    apiName: 'Cat_1_Defects_Reference_12_500__c',
                    label: 'Cat. 1 Defects Reference <12.500',
                    fieldType: 'text',
                    readOnly: true,
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent',
                        'user',
                        'rigk'
                    ]
                },
                {
                    apiName: 'Cat_2_Defects_m_0_05_0_1mm__c',
                    label: 'Cat. 2 Defects/m² 0,05-0,1mm²',
                    fieldType: 'number',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent',
                        'user',
                        'rigk'
                    ]
                },
                {
                    apiName: 'Cat_2_Defects_Reference_800__c',
                    label: 'Cat. 2 Defects Reference <800',
                    fieldType: 'text',
                    readOnly: true,
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent',
                        'user',
                        'rigk'
                    ]
                },
                {
                    apiName: 'Cat_3_Defects_m_0_1_0_3mm__c',
                    label: 'Cat. 3 Defects/m² 0.1-0.3mm²',
                    fieldType: 'number',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent',
                        'user',
                        'rigk'
                    ]
                },
                {
                    apiName: 'Cat_3_Defects_Reference_300__c',
                    label: 'Cat. 3 Defects Reference <300',
                    fieldType: 'text',
                    readOnly: true,
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent',
                        'user',
                        'rigk'
                    ]
                },
                {
                    apiName: 'Cat_4_Defects_m_0_3_0_5mm__c',
                    label: 'Cat. 4 Defects/m² 0.3-0.5mm²',
                    fieldType: 'number',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent',
                        'user',
                        'rigk'
                    ]
                },
                {
                    apiName: 'Cat_4_Defects_Reference_200__c',
                    label: 'Cat. 4 Defects Reference <200',
                    fieldType: 'text',
                    readOnly: true,
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent',
                        'user',
                        'rigk'
                    ]
                },
                {
                    apiName: 'Cat_5_Defects_m_0_5_1_0mm__c',
                    label: 'Cat. 5 Defects/m² 0.5-1.0mm²',
                    fieldType: 'number',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent',
                        'user',
                        'rigk'
                    ]
                },
                {
                    apiName: 'Cat_5_Defects_Reference_200__c',
                    label: 'Cat. 5 Defects Reference <200',
                    fieldType: 'text',
                    readOnly: true,
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent',
                        'user',
                        'rigk'
                    ]
                },
                {
                    apiName: 'Cat_6_Defects_m_1_0mm__c',
                    label: 'Cat. 6 Defects/m² >1.0mm²',
                    fieldType: 'number',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent',
                        'user',
                        'rigk'
                    ]
                },
                {
                    apiName: 'Cat_6_Defects_Reference_0__c',
                    label: 'Cat. 6 Defects Reference <=0',
                    fieldType: 'text',
                    readOnly: true,
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent',
                        'user',
                        'rigk'
                    ]
                },
                {
                    apiName: 'Summe_Defekte__c',
                    label: 'Summe Defekte',
                    fieldType: 'number',
                    readOnly: true,
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent',
                        'user',
                        'rigk'
                    ]
                },
                {
                    apiName: 'Summe_Defekte_klein__c',
                    label: 'Summe Defekte "klein"',
                    fieldType: 'number',
                    readOnly: true,
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent',
                        'user',
                        'rigk'
                    ]
                },
                {
                    apiName: 'Summe_Defekte_gro__c',
                    label: 'Summe Defekte "groß"',
                    fieldType: 'number',
                    readOnly: true,
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent',
                        'user',
                        'rigk'
                    ]
                },
                {
                    apiName: 'Avg_Opacity__c',
                    label: 'Avg. Opacity',
                    fieldType: 'percent',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent',
                        'user',
                        'rigk'
                    ]
                },
                {
                    apiName: 'Avg_Thickness_my__c',
                    label: 'Avg. Thickness (my)',
                    fieldType: 'number',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent',
                        'user',
                        'rigk'
                    ]
                },
                {
                    apiName: 'Quality_Grade__c',
                    label: 'Quality Grade',
                    fieldType: 'number',
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'Rang_Summe_Defekte_Report_Datum__c',
                    label: 'Rang Summe Defekte Report Datum',
                    fieldType: 'number',
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'Rang_Summe_Defekte_klein_Report_Datum__c',
                    label: 'Rang Summe Defekte klein Report Datum',
                    fieldType: 'number',
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'Rang_Summe_Defekte_gro_Report_Datum__c',
                    label: 'Rang Summe Defekte groß Report Datum',
                    fieldType: 'number',
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'Anzahl_Datens_tze_Optische_Qualit_t__c',
                    label: 'Anzahl Datensätze Optische Qualität',
                    fieldType: 'number',
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'Assessment_7_Optical__c',
                    label: 'Assessment 7 Optical',
                    fieldType: 'text',
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                }
            ]
        },
        {
            id: 'co2___product_carbon_footprint',
            label: 'CO2 / Product Carbon Footprint',
            fields: [
                {
                    apiName: 'Beschreibung_CO2e__c',
                    label: 'Beschreibung CO2e',
                    fieldType: 'textarea',
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'Product_Carbon_Footprint_kg_CO2_eq__c',
                    label: 'Product Carbon Footprint (kg CO2-eq.)',
                    fieldType: 'number',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent',
                        'user',
                        'rigk'
                    ]
                },
                {
                    apiName: 'PCF_Virgin_Material_kg_CO2_eq__c',
                    label: 'PCF Virgin Material (kg CO2-eq.)',
                    fieldType: 'number',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent',
                        'user',
                        'rigk'
                    ]
                },
                {
                    apiName: 'Potential_CO2e_savings__c',
                    label: 'Potential CO2e savings',
                    fieldType: 'percent',
                    readOnly: true,
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent',
                        'user',
                        'rigk'
                    ]
                },
                {
                    apiName: 'Assessment_8_CO2__c',
                    label: 'Assessment 8 CO2',
                    fieldType: 'text',
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                }
            ]
        },
        {
            id: 'equivalency__market_potential__recommendations_in_market',
            label: 'Equivalency, market potential, Recommendations in market',
            fields: [
                {
                    apiName: 'Equivalency_and_market__c',
                    label: 'Equivalency and market',
                    fieldType: 'textarea',
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'Assessment_9_Market__c',
                    label: 'Assessment 9 Market',
                    fieldType: 'text',
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                }
            ]
        },
        {
            id: 'tds_check_up',
            label: 'TDS check-up',
            fields: [
                {
                    apiName: 'TDS_check_up__c',
                    label: 'TDS check-up',
                    fieldType: 'textarea',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent',
                        'user',
                        'rigk'
                    ]
                },
                {
                    apiName: 'DIN_SPEC_91446__c',
                    label: 'DIN SPEC 91446',
                    fieldType: 'textarea',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent',
                        'user',
                        'rigk'
                    ]
                },
                {
                    apiName: 'PRE_documents__c',
                    label: 'PRE documents',
                    fieldType: 'textarea',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent',
                        'user',
                        'rigk'
                    ]
                },
                {
                    apiName: 'Assessment_10_TDS__c',
                    label: 'Assessment 10 TDS',
                    fieldType: 'text',
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                }
            ]
        },
        {
            id: 'final_remarks',
            label: 'Final remarks',
            fields: [
                {
                    apiName: 'Final_remarks__c',
                    label: 'Final remarks',
                    fieldType: 'textarea',
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'Assessment_12_Final__c',
                    label: 'Assessment 12 Final',
                    fieldType: 'text',
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                }
            ]
        }
    ],
    tabGroups: [
        {
            id: 'stammdaten',
            label: 'Stammdaten',
            sectionIds: [
                'meta',
                'materialhintergrund'
            ],
            isDefault: true
        },
        {
            id: 'pruefdaten',
            label: 'Prüfdaten',
            sectionIds: [
                'standardpr_fungen',
                'folientests',
                'mechanische_eigenschaften',
                'geruch',
                'polymeranteile'
            ]
        },
        {
            id: 'qualitaet_optik',
            label: 'Qualität & Optik',
            sectionIds: [
                'optische_qualit_t'
            ]
        },
        {
            id: 'compliance',
            label: 'Compliance',
            sectionIds: [
                'schwermetalle',
                'co2___product_carbon_footprint'
            ]
        },
        {
            id: 'markt_abschluss',
            label: 'Markt & Abschluss',
            sectionIds: [
                'equivalency__market_potential__recommendations_in_market',
                'tds_check_up',
                'final_remarks'
            ]
        }
    ],
    relatedLists: [
        {
            relationshipName: 'Feedbacks__r',
            label: 'Prozessfeedback',
            fields: [
                'Id',
                'Name',
                'CreatedDate',
                'Status__c',
                'Current_State_Evaluation__c',
                'Description__c'
            ],
            maxRows: 10,
            visibleForRoles: [
                'admin',
                'staff',
                'agent',
                'user',
                'rigk'
            ]
        },
        {
            relationshipName: 'AttachedContentDocuments',
            label: 'Dateien',
            fields: [
                'Id',
                'Title'
            ],
            maxRows: 10,
            visibleForRoles: [
                'admin',
                'staff',
                'agent',
                'user',
                'rigk'
            ]
        },
        {
            relationshipName: 'Materialanalysen__r',
            label: 'Materialanalysen',
            fields: [
                'Id',
                'Name',
                'Status__c',
                'CreatedDate',
                'LastModifiedDate',
                'Kategorie_f_r_Qualit_tseinsch_tzung__c',
                'Analysetyp__c',
                'Polymer__c',
                'Produkt_ID__c'
            ],
            maxRows: 10,
            visibleForRoles: [
                'admin',
                'staff',
                'agent',
                'user',
                'rigk'
            ]
        },
        {
            relationshipName: 'AuditProperties__r',
            label: 'Prüfparameter',
            fields: [
                'Id',
                'Name',
                'AuditPropertyTypeAuswahl__c',
                'Test_parameter1__c',
                'Test_parameter2__c',
                'Value__c',
                'Value_min__c',
                'Value_max__c',
                'Text_Value__c',
                'Category_AuditPropertyType__c'
            ],
            maxRows: 10,
            visibleForRoles: [
                'admin',
                'staff',
                'agent',
                'user',
                'rigk'
            ]
        }
    ],
    systemFields: [
        'Id',
        'CreatedDate',
        'CreatedById',
        'LastModifiedDate',
        'LastModifiedById',
        'OwnerId'
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/config/entityFields/Notification.fields.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// CURATED — do not regenerate (--force) without re-applying the lean rules in LEAN-CURATION.md
/**
 * Notification Entity Field Configuration
 *
 * Postgres entity (non-Salesforce) — uses the same FlexiPage-style
 * config format as Salesforce entities so it can be rendered by
 * GenericEntityForm and displayed in EntityDetailLayout.
 *
 * API: POST /api/notifications  (create)
 *      GET  /api/notifications/admin/:id  (detail)
 */ __turbopack_context__.s([
    "NotificationFieldConfig",
    ()=>NotificationFieldConfig
]);
const NotificationFieldConfig = {
    entityType: 'Notification',
    entityLabel: 'Benachrichtigung',
    entityLabelKey: 'notificationMgmt.pageTitle',
    headerFields: [
        'titleDefault',
        'type',
        'audience'
    ],
    sections: [
        {
            id: 'grunddaten',
            label: 'Grunddaten',
            fields: [
                {
                    apiName: 'type',
                    label: 'Typ',
                    labelKey: 'notificationMgmt.create.typeLabel',
                    fieldType: 'picklist',
                    required: true,
                    picklistOptions: [
                        {
                            label: 'Info',
                            value: 'info',
                            isDefault: true,
                            isActive: true
                        },
                        {
                            label: 'Erfolg',
                            value: 'success',
                            isActive: true
                        },
                        {
                            label: 'Warnung',
                            value: 'warning',
                            isActive: true
                        },
                        {
                            label: 'Fehler',
                            value: 'error',
                            isActive: true
                        }
                    ]
                },
                {
                    apiName: 'titleDefault',
                    label: 'Titel',
                    labelKey: 'notificationMgmt.create.titleLabel',
                    fieldType: 'text',
                    required: true,
                    placeholder: 'Titel der Benachrichtigung'
                },
                {
                    apiName: 'messageDefault',
                    label: 'Nachricht',
                    labelKey: 'notificationMgmt.create.messageLabel',
                    fieldType: 'markdown',
                    placeholder: 'Optionale Nachricht (Markdown wird unterstützt)'
                }
            ]
        },
        {
            id: 'zielgruppe',
            label: 'Zielgruppe',
            fields: [
                {
                    apiName: 'audience',
                    label: 'Zielgruppe',
                    labelKey: 'notificationMgmt.create.audienceLabel',
                    fieldType: 'audience',
                    required: true
                }
            ]
        },
        {
            id: 'optionen',
            label: 'Optionen',
            fields: [
                {
                    apiName: 'link',
                    label: 'Link (optional)',
                    labelKey: 'notificationMgmt.create.linkLabel',
                    fieldType: 'url',
                    placeholder: '/pfad/zur/seite'
                }
            ]
        },
        {
            id: 'system',
            label: 'System',
            fields: [
                {
                    apiName: 'createdAt',
                    label: 'Erstellt am',
                    fieldType: 'datetime',
                    readOnly: true
                },
                {
                    apiName: 'createdBy',
                    label: 'Erstellt von',
                    labelKey: 'notificationMgmt.list.createdBy',
                    fieldType: 'text',
                    readOnly: true
                }
            ]
        }
    ],
    systemFields: [
        'createdAt',
        'createdBy'
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/config/entityFields/Onboarding.fields.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// CURATED — do not regenerate (--force) without re-applying the lean rules in LEAN-CURATION.md
/**
 * Entity Field Configuration: Onboarding__c (lean staff view)
 *
 * Not in #200 — already lean. Curation: drop the System field section (rendered via
 * systemFields), keep OwnerId in Grunddaten, drop the legacy Feedbacks list.
 * Cross-check: no SF fields missing.
 */ __turbopack_context__.s([
    "OnboardingFieldConfig",
    ()=>OnboardingFieldConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$sfPicklist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/entityFields/sfPicklist.ts [app-client] (ecmascript)");
;
const OnboardingFieldConfig = {
    entityType: 'Onboarding__c',
    entityLabel: 'Onboarding',
    headerFields: [
        'Name',
        'Account__c',
        'Onboarding_Ergebnis__c',
        'Zeitpunkt_des_Onboardings__c'
    ],
    sections: [
        {
            id: 'grunddaten',
            label: 'Grunddaten',
            columns: 2,
            fields: [
                {
                    apiName: 'Name',
                    label: 'Onboarding-Name',
                    fieldType: 'text',
                    required: true
                },
                {
                    apiName: 'Account__c',
                    label: 'Account',
                    fieldType: 'lookup',
                    lookupObjectType: 'Account',
                    required: true
                },
                {
                    apiName: 'Kontakt__c',
                    label: 'Kontakt',
                    fieldType: 'lookup',
                    lookupObjectType: 'Contact'
                },
                {
                    apiName: 'OwnerId',
                    label: 'Inhaber',
                    fieldType: 'lookup',
                    lookupObjectType: 'User'
                },
                {
                    apiName: 'Medium__c',
                    label: 'Medium',
                    fieldType: 'picklist',
                    picklistOptions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$sfPicklist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfPicklist"])()([
                        {
                            label: 'E-Mail',
                            value: 'E-Mail'
                        },
                        {
                            label: 'Telefonat',
                            value: 'Telefonat'
                        },
                        {
                            label: 'Messe / Veranstaltung',
                            value: 'Messe / Veranstaltung'
                        },
                        {
                            label: 'Persönlich',
                            value: 'Persönlich'
                        },
                        {
                            label: 'Sonstige (bitte erläutern)',
                            value: 'Sonstige (bitte erläutern)'
                        }
                    ])
                },
                {
                    apiName: 'Zeitpunkt_des_Onboardings__c',
                    label: 'Zeitpunkt des Onboardings',
                    fieldType: 'datetime'
                }
            ]
        },
        {
            id: 'ergebnis',
            label: 'Ergebnis',
            columns: 2,
            fields: [
                {
                    apiName: 'Onboarding_durchgef_hrt__c',
                    label: 'Onboarding durchgeführt',
                    fieldType: 'boolean'
                },
                {
                    apiName: 'Onboarding_Ergebnis__c',
                    label: 'Onboarding-Ergebnis',
                    fieldType: 'picklist',
                    picklistOptions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$sfPicklist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfPicklist"])()([
                        {
                            label: 'Zusammenarbeit sehr empfohlen',
                            value: 'Zusammenarbeit sehr empfohlen'
                        },
                        {
                            label: 'Zusammenarbeit empfohlen',
                            value: 'Zusammenarbeit empfohlen'
                        },
                        {
                            label: 'Kontakt halten',
                            value: 'Kontakt halten'
                        },
                        {
                            label: 'Zusammenarbeit fraglich',
                            value: 'Zusammenarbeit fraglich'
                        },
                        {
                            label: 'Zusammenarbeit nicht empfohlen',
                            value: 'Zusammenarbeit nicht empfohlen'
                        },
                        {
                            label: 'Abgelehnt',
                            value: 'Abgelehnt'
                        }
                    ])
                }
            ]
        },
        {
            id: 'verknuepfungen',
            label: 'Verknüpfungen',
            columns: 2,
            fields: [
                {
                    apiName: 'Produkt__c',
                    label: 'Produkt',
                    fieldType: 'lookup',
                    lookupObjectType: 'Product2'
                },
                {
                    apiName: 'Bedarfe__c',
                    label: 'Bedarf',
                    fieldType: 'lookup',
                    lookupObjectType: 'Bedarfe__c'
                },
                {
                    apiName: 'Kundenvorgang__c',
                    label: 'Kundenvorgang',
                    fieldType: 'lookup',
                    lookupObjectType: 'Case'
                },
                {
                    apiName: 'Kontakt_bergabe__c',
                    label: 'Kontaktübergabe',
                    fieldType: 'lookup',
                    lookupObjectType: 'Kontakt_bergaben__c'
                }
            ]
        },
        {
            id: 'notizen',
            label: 'Notizen',
            columns: 1,
            fields: [
                {
                    apiName: 'Gespr_chsprotokoll__c',
                    label: 'Gesprächsprotokoll',
                    fieldType: 'textarea'
                },
                {
                    apiName: 'Master_Checklist_Onboarding__c',
                    label: 'Master-Checkliste Onboarding',
                    fieldType: 'textarea'
                }
            ]
        }
    ],
    relatedLists: [
        {
            relationshipName: 'Feedbacks__r',
            label: 'Prozessfeedback',
            fields: [
                'Id',
                'Name',
                'CreatedDate',
                'Status__c',
                'Current_State_Evaluation__c',
                'Description__c'
            ],
            maxRows: 10,
            visibleForRoles: [
                'admin',
                'staff',
                'agent',
                'user',
                'rigk'
            ]
        },
        {
            relationshipName: 'AttachedContentDocuments',
            label: 'Dateien',
            fields: [
                'Id',
                'Title'
            ],
            maxRows: 10,
            visibleForRoles: [
                'admin',
                'staff'
            ]
        }
    ],
    systemFields: [
        'Id',
        'CreatedDate',
        'CreatedById',
        'LastModifiedDate',
        'LastModifiedById',
        'OwnerId'
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/config/entityFields/Opportunity.fields.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Entity Field Configuration: Opportunity
 * Auto-generated from FlexiPage metadata
 * Generated on: 2026-02-17T09:46:41.024Z
 */ __turbopack_context__.s([
    "OpportunityFieldConfig",
    ()=>OpportunityFieldConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$sfPicklist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/entityFields/sfPicklist.ts [app-client] (ecmascript)");
;
const OpportunityFieldConfig = {
    entityType: 'Opportunity',
    entityLabel: 'Opportunity',
    headerFields: [
        'Name',
        'AccountId',
        'CloseDate',
        'Amount',
        'OwnerId'
    ],
    sections: [
        {
            id: 'quote__transportation',
            label: 'Transportation',
            fields: [
                {
                    apiName: 'Loading_Address__c',
                    label: 'Loading Address',
                    fieldType: 'lookup',
                    lookupObjectType: 'Account',
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'Produktionsstandort__c',
                    label: 'Produktionsstandort',
                    fieldType: 'lookup',
                    lookupObjectType: 'Produktionsstandort__c',
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'Loading_Site__c',
                    label: 'Loading Site',
                    fieldType: 'text',
                    readOnly: true,
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'Loading_Times__c',
                    label: 'Loading Times',
                    fieldType: 'text',
                    readOnly: true,
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'Materialtyp_Transportanfrage__c',
                    label: 'Materialtyp Transportanfrage',
                    fieldType: 'picklist',
                    picklistOptions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$sfPicklist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfPicklist"])()([
                        {
                            label: 'Ballenware',
                            value: 'Ballenware'
                        },
                        {
                            label: 'Mahlgut',
                            value: 'Mahlgut'
                        },
                        {
                            label: 'Regranulat',
                            value: 'Regranulat'
                        },
                        {
                            label: 'Compound',
                            value: 'Compound'
                        },
                        {
                            label: 'Neuware',
                            value: 'Neuware'
                        },
                        {
                            label: 'Masterbatch',
                            value: 'Masterbatch'
                        },
                        {
                            label: 'Wertstoff',
                            value: 'Wertstoff'
                        },
                        {
                            label: 'Agglomerat',
                            value: 'Agglomerat'
                        },
                        {
                            label: 'Flakes',
                            value: 'Flakes'
                        },
                        {
                            label: 'Rollenware',
                            value: 'Rollenware'
                        },
                        {
                            label: 'Rolle auf Palette',
                            value: 'Rolle auf Palette'
                        }
                    ]),
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'Verpackung__c',
                    label: 'Verpackung',
                    fieldType: 'picklist',
                    picklistOptions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$sfPicklist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfPicklist"])()([
                        {
                            label: 'BigBags auf Einwegpalette',
                            value: 'BigBags auf Einwegpalette'
                        },
                        {
                            label: 'BigBags auf Einwegpalette inkl. Hauben',
                            value: 'BigBags auf Einwegpalette inkl. Hauben'
                        },
                        {
                            label: 'BigBags auf Europalette',
                            value: 'BigBags auf Europalette'
                        },
                        {
                            label: 'BigBags auf Europalette inkl. Hauben',
                            value: 'BigBags auf Europalette inkl. Hauben'
                        },
                        {
                            label: 'Oktabins',
                            value: 'Oktabins'
                        },
                        {
                            label: 'Silofahrzeug',
                            value: 'Silofahrzeug'
                        },
                        {
                            label: 'Kartons',
                            value: 'Kartons'
                        },
                        {
                            label: '25kg-Säcke auf Einwegpalette',
                            value: '25kg-Säcken auf Einwegpalette'
                        },
                        {
                            label: 'lose Schüttung',
                            value: 'loser Schüttung'
                        },
                        {
                            label: 'in Ballen',
                            value: 'in Ballen'
                        },
                        // #1802: ohne Stretchfolie, zusätzlich zu „gestretcht"
                        {
                            label: 'auf Einwegpalette',
                            value: 'auf Einwegpalette'
                        },
                        {
                            label: 'auf Einwegpalette gestretcht',
                            value: 'auf Einwegpalette gestretcht'
                        },
                        {
                            label: 'in Kunststoffboxen',
                            value: 'in Kunststoffboxen'
                        },
                        {
                            label: 'in Gitterboxen',
                            value: 'in Gitterboxen'
                        }
                    ]),
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'Account_Delivery_Address__c',
                    label: 'Account Delivery Address',
                    fieldType: 'lookup',
                    lookupObjectType: 'Account',
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'Produktion_Delivery__c',
                    label: 'Produktion Delivery',
                    fieldType: 'lookup',
                    lookupObjectType: 'Produktionsstandort__c',
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'Delivery_Site__c',
                    label: 'Delivery Site',
                    fieldType: 'text',
                    readOnly: true,
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'Delivery_Times__c',
                    label: 'Delivery Times',
                    fieldType: 'text',
                    readOnly: true,
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'Incoterms_2020__c',
                    label: 'Incoterms 2020',
                    fieldType: 'picklist',
                    picklistOptions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$sfPicklist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfPicklist"])()([
                        {
                            label: 'EXW – Ex Works (ab Werk)',
                            value: 'EXW – Ex Works (ab Werk)'
                        },
                        {
                            label: 'FCA – Free Carrier (frei Frachtführer)',
                            value: 'FCA – Free Carrier (frei Frachtführer)'
                        },
                        {
                            label: 'CPT – Carriage Paid To (frachtfrei)',
                            value: 'CPT – Carriage Paid To (frachtfrei)'
                        },
                        {
                            label: 'CIP – Carriage and Insurance Paid to (frachtfrei versichert)',
                            value: 'CIP – Carriage and Insurance Paid to (frachtfrei versichert)'
                        },
                        {
                            label: 'DAP – Delivered At Place (geliefert benannter Ort)',
                            value: 'DAP – Delivered At Place (geliefert benannter Ort)'
                        },
                        {
                            label: 'DPU – Delivered at Place Unloaded (geliefert benannter Ort entladen)',
                            value: 'DPU – Delivered at Place Unloaded (geliefert benannter Ort entladen)'
                        },
                        {
                            label: 'DDP – Delivered Duty Paid (geliefert verzollt)',
                            value: 'DDP – Delivered Duty Paid (geliefert verzollt)'
                        },
                        {
                            label: 'FAS – Free Alongside Ship (frei längsseite Schiff)',
                            value: 'FAS – Free Alongside Ship (frei längsseite Schiff)'
                        },
                        {
                            label: 'FOB – Free On Board (frei an Bord)',
                            value: 'FOB – Free On Board (frei an Bord)'
                        },
                        {
                            label: 'CFR – Cost and Freight (Kosten und Fracht)',
                            value: 'CFR – Cost and Freight (Kosten und Fracht)'
                        },
                        {
                            label: 'CIF – Cost, Insurance and Freight (Kosten, Versicherung und Fracht)',
                            value: 'CIF – Cost, Insurance and Freight (Kosten, Versicherung und Fracht)'
                        }
                    ]),
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                }
            ]
        },
        {
            id: 'quote__calculation',
            label: 'Calculation',
            fields: [
                {
                    apiName: 'Gesamtmarge__c',
                    label: 'Gesamtmarge',
                    fieldType: 'currency',
                    readOnly: true,
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'Kalkulationsmenge__c',
                    label: 'Kalkulationsmenge',
                    fieldType: 'number',
                    readOnly: true,
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'Gesamt_Einkaufspreis__c',
                    label: 'Gesamt-Einkaufspreis',
                    fieldType: 'currency',
                    readOnly: true,
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'Auslagen_Agent_Gesamt__c',
                    label: 'Auslagen Agent Gesamt',
                    fieldType: 'currency',
                    readOnly: true,
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'Transportpreisangebot__c',
                    label: 'Transportpreisangebot',
                    fieldType: 'currency',
                    readOnly: true,
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'Summe_Gesamtpreis__c',
                    label: 'Summe Gesamtpreis',
                    fieldType: 'currency',
                    readOnly: true,
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'Marge_pro_t__c',
                    label: 'Marge pro t',
                    fieldType: 'currency',
                    readOnly: true,
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'Tonne__c',
                    label: 'Tonne',
                    fieldType: 'number',
                    readOnly: true,
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'Einkaufspreis_pro_t__c',
                    label: 'Einkaufspreis pro t',
                    fieldType: 'currency',
                    readOnly: true,
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'Auslagen_pro_t_Agent__c',
                    label: 'Auslagen pro t Agent',
                    fieldType: 'currency',
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'Transportpreis_pro_t__c',
                    label: 'Transportpreis pro t',
                    fieldType: 'currency',
                    readOnly: true,
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'Erl_s_pro_t__c',
                    label: 'Erlös pro t',
                    fieldType: 'currency',
                    readOnly: true,
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                }
            ]
        },
        {
            id: 'history__historie_bearbeitung',
            label: 'Historie Bearbeitung',
            fields: [
                {
                    apiName: 'Tage_letzte_Aktivit_t__c',
                    label: 'Tage letzte Aktivität',
                    fieldType: 'number',
                    readOnly: true,
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'Ergebnis_Tage_letztes_Update__c',
                    label: 'Ergebnis Tage letztes Update',
                    fieldType: 'number',
                    readOnly: true,
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'Tage_zuletzt_ge_ndert_am__c',
                    label: 'Tage zuletzt geändert am',
                    fieldType: 'number',
                    readOnly: true,
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'Wiedervorlage__c',
                    label: 'Wiedervorlage',
                    fieldType: 'boolean',
                    readOnly: true,
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                }
            ]
        },
        {
            id: 'opportunity_information',
            label: 'Opportunity Information',
            fields: [
                {
                    apiName: 'AccountId',
                    label: 'Account-ID',
                    fieldType: 'lookup',
                    lookupObjectType: 'Account',
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'OwnerId',
                    label: 'Inhaber-ID',
                    fieldType: 'lookup',
                    lookupObjectType: 'User',
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'Name',
                    fieldType: 'text',
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'Duplicate_Of__c',
                    label: 'Duplicate Of',
                    fieldType: 'lookup',
                    lookupObjectType: 'Opportunity',
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'Amount',
                    label: 'Betrag',
                    fieldType: 'currency',
                    currencyCode: 'EUR',
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'CloseDate',
                    label: 'Schlusstermin',
                    fieldType: 'date',
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'StageName',
                    label: 'Phase',
                    fieldType: 'picklist',
                    picklistOptions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$sfPicklist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfPicklist"])()([
                        {
                            label: 'Qualification',
                            value: 'Qualification'
                        },
                        {
                            label: 'Needs Analysis',
                            value: 'Needs Analysis'
                        },
                        {
                            label: 'Proposal',
                            value: 'Proposal'
                        },
                        {
                            label: 'Negotiation',
                            value: 'Negotiation'
                        },
                        {
                            label: 'Closed Won',
                            value: 'Closed Won'
                        },
                        {
                            label: 'Closed Lost',
                            value: 'Closed Lost'
                        }
                    ]),
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'Loss_Reason__c',
                    label: 'Loss Reason',
                    fieldType: 'picklist',
                    picklistOptions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$sfPicklist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfPicklist"])()([
                        {
                            label: 'Quality',
                            value: 'Quality'
                        },
                        {
                            label: 'Price',
                            value: 'Price'
                        },
                        {
                            label: 'No Decision / Non-Responsive',
                            value: 'No Decision / Non-Responsive'
                        },
                        {
                            label: 'Duplicate',
                            value: 'Duplicate'
                        },
                        {
                            label: 'Lost to Competitor',
                            value: 'Lost to Competitor'
                        },
                        {
                            label: 'No Budget / Lost Funding',
                            value: 'No Budget / Lost Funding'
                        },
                        {
                            label: 'Other',
                            value: 'Other'
                        },
                        {
                            label: 'Keine Kapazität',
                            value: 'Keine Kapazität'
                        },
                        {
                            label: 'Lager voll',
                            value: 'Lager voll'
                        },
                        {
                            label: 'Anlage nicht bereit',
                            value: 'Anlage nicht bereit'
                        },
                        {
                            label: 'Bestehender Kontakt',
                            value: 'Bestehender Kontakt'
                        },
                        {
                            label: 'Changed Buying Price',
                            value: 'Changed Buying Price'
                        }
                    ]),
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'Probability',
                    label: 'Wahrscheinlichkeit (%)',
                    fieldType: 'percent',
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'ForecastCategoryName',
                    label: 'Prognosekategorie',
                    fieldType: 'picklist',
                    picklistOptions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$sfPicklist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfPicklist"])()([
                        {
                            label: 'Omitted',
                            value: 'Omitted'
                        },
                        {
                            label: 'Pipeline',
                            value: 'Pipeline'
                        },
                        {
                            label: 'Best Case',
                            value: 'Best Case'
                        },
                        {
                            label: 'Commit',
                            value: 'Commit'
                        },
                        {
                            label: 'Closed',
                            value: 'Closed'
                        }
                    ]),
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'NextStep',
                    label: 'Nächster Schritt',
                    fieldType: 'text',
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'Prio__c',
                    label: 'Prio',
                    fieldType: 'picklist',
                    picklistOptions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$sfPicklist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfPicklist"])()([
                        {
                            label: 'A+',
                            value: 'A+'
                        },
                        {
                            label: 'A',
                            value: 'A'
                        },
                        {
                            label: 'B',
                            value: 'B'
                        },
                        {
                            label: 'C',
                            value: 'C'
                        }
                    ]),
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                }
            ]
        },
        {
            id: 'description_information',
            label: 'Description Information',
            fields: [
                {
                    apiName: 'Benutzer__c',
                    label: 'Benutzer',
                    fieldType: 'lookup',
                    lookupObjectType: 'User',
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'Kundenvorgang__c',
                    label: 'Kundenvorgang',
                    fieldType: 'lookup',
                    lookupObjectType: 'Case',
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'Projekt__c',
                    label: 'Projekt',
                    fieldType: 'lookup',
                    lookupObjectType: 'Projekt__c',
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'CampaignId',
                    label: 'Kampagnen-ID',
                    fieldType: 'lookup',
                    lookupObjectType: 'Campaign',
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'Type',
                    label: 'Opportunity-Typ',
                    fieldType: 'picklist',
                    picklistOptions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$sfPicklist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfPicklist"])()([
                        {
                            label: 'Existing Business',
                            value: 'Existing Business'
                        },
                        {
                            label: 'New Business',
                            value: 'New Business'
                        },
                        {
                            label: 'gezielte Materialvermarktung',
                            value: 'gezielte Materialvermarktung'
                        },
                        {
                            label: 'gezielte Materialversorgung',
                            value: 'gezielte Materialversorgung'
                        },
                        {
                            label: 'Kooperation / Projekt',
                            value: 'Kooperation / Projekt'
                        },
                        {
                            label: 'Partner',
                            value: 'Partner'
                        },
                        {
                            label: '3S-Sales',
                            value: '3S-Sales'
                        }
                    ]),
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'LeadSource',
                    label: 'Lead-Quelle',
                    fieldType: 'picklist',
                    picklistOptions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$sfPicklist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfPicklist"])()([
                        {
                            label: 'RIGK',
                            value: 'RIGK'
                        },
                        {
                            label: 'PRSE 2025',
                            value: 'PRSE 2025'
                        },
                        {
                            label: 'Fachpack 2024',
                            value: 'Fachpack 2024'
                        },
                        {
                            label: 'IFAT2024',
                            value: 'IFAT2024'
                        },
                        {
                            label: 'PRSE 2023',
                            value: 'PRSE 2023'
                        },
                        {
                            label: 'PRC2023',
                            value: 'PRC2023'
                        },
                        {
                            label: 'Advertisement',
                            value: 'Advertisement'
                        },
                        {
                            label: 'Customer Event',
                            value: 'Customer Event'
                        },
                        {
                            label: 'Employee Referral',
                            value: 'Employee Referral'
                        },
                        {
                            label: 'External Referral',
                            value: 'External Referral'
                        },
                        {
                            label: 'Google AdWords',
                            value: 'Google AdWords'
                        },
                        {
                            label: 'Other',
                            value: 'Other'
                        },
                        {
                            label: 'Partner',
                            value: 'Partner'
                        },
                        {
                            label: 'Purchased List',
                            value: 'Purchased List'
                        },
                        {
                            label: 'Trade Show',
                            value: 'Trade Show'
                        },
                        {
                            label: 'Webinar',
                            value: 'Webinar'
                        },
                        {
                            label: 'Website',
                            value: 'Website'
                        },
                        {
                            label: 'BKV2023',
                            value: 'BKV2023'
                        },
                        {
                            label: 'Fakuma 2024',
                            value: 'Fakuma 2024'
                        },
                        {
                            label: 'Verband TecPart',
                            value: 'Verband TecPart'
                        },
                        {
                            label: 'Verband PRE',
                            value: 'Verband PRE'
                        },
                        {
                            label: 'Verband bvse',
                            value: 'Verband bvse'
                        },
                        {
                            label: 'Verband IK',
                            value: 'Verband IK'
                        },
                        {
                            label: 'E-Mail',
                            value: 'E-Mail'
                        }
                    ]),
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'Description',
                    label: 'Beschreibung',
                    fieldType: 'textarea',
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'ContractId',
                    label: 'Vertrags-ID',
                    fieldType: 'lookup',
                    lookupObjectType: 'Contract',
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'SyncedQuoteId',
                    label: 'Angebots-ID',
                    fieldType: 'lookup',
                    lookupObjectType: 'Quote',
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                }
            ]
        },
        {
            id: 'system_information',
            label: 'System Information',
            fields: [
                {
                    apiName: 'CreatedById',
                    label: 'Ersteller-ID',
                    fieldType: 'lookup',
                    readOnly: true,
                    lookupObjectType: 'User',
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'LastModifiedById',
                    label: 'ID für "Zuletzt geändert von"',
                    fieldType: 'lookup',
                    readOnly: true,
                    lookupObjectType: 'User',
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                }
            ]
        }
    ],
    tabGroups: [
        {
            id: 'quote',
            label: 'Quote',
            sectionIds: [
                'quote__transportation',
                'quote__calculation'
            ],
            isDefault: true
        },
        {
            id: 'history',
            label: 'History',
            sectionIds: [
                'history__historie_bearbeitung'
            ]
        }
    ],
    // #330 Minimal-Aufraeumen (Legacy-Entity, bewusst KEINE Voll-Kuration —
    // LEAN-CURATION.md): kaputte Auto-Labels gefixt, Listen ohne sichtbare
    // Spalten (nur Id) und Histories/Notes gedroppt. AttachedContentDocuments
    // bleibt als Datenquelle (wird im Render ohnehin gefiltert).
    relatedLists: [
        {
            relationshipName: 'AttachedContentDocuments',
            label: 'Dateien',
            fields: [
                'Id',
                'Title'
            ],
            maxRows: 10,
            visibleForRoles: [
                'admin',
                'staff',
                'agent'
            ]
        },
        {
            relationshipName: 'OpportunityLineItems',
            label: 'Positionen',
            fields: [
                'Id',
                'Name'
            ],
            maxRows: 20,
            visibleForRoles: [
                'admin',
                'staff',
                'agent'
            ]
        },
        {
            relationshipName: 'Kundenvorg_nge__r',
            label: 'Kundenvorgänge',
            fields: [
                'Id',
                'CaseNumber'
            ],
            maxRows: 10,
            visibleForRoles: [
                'admin',
                'staff',
                'agent'
            ]
        },
        {
            relationshipName: 'Quotes',
            label: 'Angebote',
            fields: [
                'Id',
                'Name'
            ],
            maxRows: 10,
            visibleForRoles: [
                'admin',
                'staff',
                'agent'
            ]
        },
        {
            relationshipName: 'Opportunity_Transportpreise__r',
            label: 'Transportpreise',
            fields: [
                'Id',
                'Name'
            ],
            maxRows: 10,
            visibleForRoles: [
                'admin',
                'staff'
            ]
        },
        {
            relationshipName: 'Mengenstaffeln_Einkauf__r',
            label: 'Mengenstaffeln Einkauf',
            fields: [
                'Id',
                'Name'
            ],
            maxRows: 10,
            visibleForRoles: [
                'admin',
                'staff'
            ],
            // #1248: a0p steht jetzt in der Präfix-Registry — ohne diese Sperre
            // bekäme die befüllte Liste einen Anlegen-Knopf ohne Formular.
            showCreateButton: false
        },
        {
            relationshipName: 'Aktuelle_Preise_und_Verf_gbarkeiten__r',
            label: 'Aktuelle Preise & Verfügbarkeiten',
            fields: [
                'Id',
                'Name'
            ],
            maxRows: 10,
            visibleForRoles: [
                'admin',
                'staff'
            ]
        },
        {
            relationshipName: 'Sample_Sendings__r',
            label: 'Musterversände',
            fields: [
                'Id',
                'Name',
                'Produkt__c',
                'Load_from__c',
                'Deliver_to__c',
                'Amount_in_kg__c',
                'Status__c'
            ],
            maxRows: 10,
            visibleForRoles: [
                'admin',
                'staff'
            ]
        },
        {
            relationshipName: 'Sample_Feedbacks__r',
            label: 'Musterfeedbacks',
            fields: [
                'Id',
                'Name',
                'Status__c',
                'Produkt__c',
                'Sample_Size_kg__c',
                'Versanddatum__c',
                'Feedback_Date__c',
                'Reason_Category__c'
            ],
            maxRows: 10,
            visibleForRoles: [
                'admin',
                'staff'
            ]
        }
    ],
    relatedListTabGroups: [
        {
            id: 'deal',
            label: 'Deal',
            relationshipNames: [
                'OpportunityLineItems',
                'Quotes',
                'Opportunity_Transportpreise__r',
                'Mengenstaffeln_Einkauf__r',
                'Aktuelle_Preise_und_Verf_gbarkeiten__r'
            ],
            isDefault: true
        },
        {
            id: 'logistics',
            label: 'Logistik',
            relationshipNames: [
                'Sample_Sendings__r',
                'Sample_Feedbacks__r',
                'Kundenvorg_nge__r'
            ]
        },
        {
            id: 'system',
            label: 'System',
            relationshipNames: [
                'AttachedContentDocuments'
            ]
        }
    ],
    systemFields: [
        'Id',
        'CreatedDate',
        'CreatedById',
        'LastModifiedDate',
        'LastModifiedById',
        'OwnerId'
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/config/entityFields/Order.fields.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// CURATED — do not regenerate (--force) without re-applying the lean rules in LEAN-CURATION.md
/**
 * Entity Field Configuration: Order (lean staff / Operations view)
 *
 * Segmented to mirror Andreas' working Orders1 FlexiPage, in 5 tabs:
 *   Auftragsdaten · Parteien (Lieferant/Kunde/Transporteur) ·
 *   Lieferung (Transport + Wiegescheine vorher/nachher) · Dokumente ·
 *   Kalkulation & Abrechnung.
 *
 * Transport uses the NEW fields only (Transporteur_NEU__c, Datum_*_NEU__c) — the
 * superseded non-NEU text fields are intentionally not shown. Marge_2_Gesamt__c is
 * the SF field labelled "Marge SOLL"; "DB plastship" is the separate DB_plastship__c.
 * Vertrag (ContractId, #449), Kostenstelle (Kostenstelle__c) und Reklamation
 * (Reklamation__c) sind als App-Objekte integriert (#325) — editierbare Lookups.
 *
 * Read-only roll-up/formula fields are marked best-effort (FlexiPage metadata does not
 * encode read-only) — verify editability on staging. Legacy Opportunity/Angebot,
 * packaging counts, document-template (Vorlage_*) fields and gross/tax sub-amounts are
 * left out — except the Vorlage_* fields the documents print and staff maintain
 * (Transportart, Mindestladegewicht AB/Bestellung, #1652; Verpackung AB/Bestellung als
 * Freitext und Lieferdatum_Text__c, #1802). Downstream roles (agent/user/rigk) untouched; handled in a later step.
 */ __turbopack_context__.s([
    "OrderFieldConfig",
    ()=>OrderFieldConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$sfPicklist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/entityFields/sfPicklist.ts [app-client] (ecmascript)");
;
const INCOTERM_OPTIONS = [
    {
        label: 'EXW – Ex Works (ab Werk)',
        value: 'EXW – Ex Works (ab Werk)'
    },
    {
        label: 'FCA – Free Carrier (frei Frachtführer)',
        value: 'FCA – Free Carrier (frei Frachtführer)'
    },
    {
        label: 'CPT – Carriage Paid To (frachtfrei)',
        value: 'CPT – Carriage Paid To (frachtfrei)'
    },
    {
        label: 'CIP – Carriage and Insurance Paid to (frachtfrei versichert)',
        value: 'CIP – Carriage and Insurance Paid to (frachtfrei versichert)'
    },
    {
        label: 'DAP – Delivered At Place (geliefert benannter Ort)',
        value: 'DAP – Delivered At Place (geliefert benannter Ort)'
    },
    {
        label: 'DPU – Delivered at Place Unloaded (geliefert benannter Ort entladen)',
        value: 'DPU – Delivered at Place Unloaded (geliefert benannter Ort entladen)'
    },
    {
        label: 'DDP – Delivered Duty Paid (geliefert verzollt)',
        value: 'DDP – Delivered Duty Paid (geliefert verzollt)'
    },
    {
        label: 'FAS – Free Alongside Ship (frei längsseite Schiff)',
        value: 'FAS – Free Alongside Ship (frei längsseite Schiff)'
    },
    {
        label: 'FOB – Free On Board (frei an Bord)',
        value: 'FOB – Free On Board (frei an Bord)'
    },
    {
        label: 'CFR – Cost and Freight (Kosten und Fracht)',
        value: 'CFR – Cost and Freight (Kosten und Fracht)'
    },
    {
        label: 'CIF – Cost, Insurance and Freight (Kosten, Versicherung und Fracht)',
        value: 'CIF – Cost, Insurance and Freight (Kosten, Versicherung und Fracht)'
    }
];
const ZUSATZ_OPTIONS = [
    {
        label: 'Reverse Charge',
        value: 'Reverse Charge'
    },
    {
        label: 'Steuerschuldnerschaft des Leistungsempfängers nach §13b UstG (Reverse-Charge-Verfahren).',
        value: 'Steuerschuldnerschaft des Leistungsempfängers nach §13b UstG (Reverse-Charge-Verfahren).'
    }
];
const OrderFieldConfig = {
    entityType: 'Order',
    entityLabel: 'Order',
    headerFields: [
        'OrderNumber',
        'Status',
        'AccountId',
        'Lieferant__c',
        'Rechnungen_pr_fen__c'
    ],
    // #353: Kunden-Header ohne interne Bezüge (Account/Lieferant/Rechnungen prüfen).
    externalHeaderFields: [
        'OrderNumber',
        'Status'
    ],
    sections: [
        {
            // Completeness indicators for the two mandatory child records (Auftragsprodukte
            // + Abrechnungen). Read-only roll-ups so staff immediately see whether the
            // required positions/invoices exist; created via the related lists below.
            id: 'positionen_abrechnung_status',
            label: 'Positionen & Abrechnung',
            columns: 2,
            // #329: Staff-Sicht — Externe (user/rigk) bekommen eigene Perspektiven-Sektionen unten
            visibleForRoles: [
                'admin',
                'staff',
                'agent'
            ],
            fields: [
                {
                    apiName: 'Anzahl_Auftragsprodukte__c',
                    label: 'Anzahl Auftragsprodukte',
                    fieldType: 'number',
                    readOnly: true
                },
                {
                    apiName: 'Anzahl_Abrechnungen__c',
                    label: 'Anzahl Abrechnungen',
                    fieldType: 'number',
                    readOnly: true
                },
                {
                    apiName: 'Alle_Abrechnungen_erstellt__c',
                    label: 'Alle Abrechnungen erstellt',
                    fieldType: 'boolean',
                    readOnly: true
                },
                // #850/#1183 Modell v5: Fakturierungsstatus (Formel) und Positionen
                // offen (Rollup) kommen aus Salesforce; das Kästchen mit Grund ist der
                // Entscheid „keine Ausgangsrechnung nötig" (Grund in SF Pflicht, R3).
                {
                    apiName: 'Fakturierungsstatus__c',
                    label: 'Fakturierungsstatus',
                    fieldType: 'text',
                    readOnly: true
                },
                {
                    apiName: 'Positionen_offen__c',
                    label: 'Positionen offen (nicht abgerechnet)',
                    fieldType: 'number',
                    readOnly: true
                },
                {
                    apiName: 'Keine_Ausgangsrechnung_n_tig__c',
                    label: 'Keine Ausgangsrechnung nötig',
                    fieldType: 'boolean'
                },
                {
                    apiName: 'Keine_Ausgangsrechnung_Grund__c',
                    label: 'Grund (keine Ausgangsrechnung)',
                    fieldType: 'text'
                },
                {
                    apiName: 'Processing_Status__c',
                    label: 'Bearbeitungsstatus',
                    fieldType: 'text',
                    readOnly: true
                },
                {
                    apiName: 'Processing_Status_percent__c',
                    label: 'Bearbeitung %',
                    fieldType: 'number',
                    readOnly: true
                }
            ]
        },
        {
            id: 'auftragsdaten',
            label: 'Auftragsdaten',
            columns: 2,
            visibleForRoles: [
                'admin',
                'staff',
                'agent'
            ],
            fields: [
                {
                    apiName: 'Buchungsstatus__c',
                    label: 'Buchungsstatus',
                    fieldType: 'text',
                    readOnly: true
                },
                {
                    apiName: 'Status',
                    label: 'Status',
                    fieldType: 'picklist',
                    required: true,
                    picklistOptions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$sfPicklist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfPicklist"])()([
                        {
                            label: 'Draft',
                            value: 'Draft'
                        },
                        {
                            label: 'Storno',
                            value: 'Storno'
                        },
                        {
                            label: 'Reklamation',
                            value: 'Reklamation'
                        },
                        {
                            label: 'PLASTRACK Filled',
                            value: 'PLASTRACK Filled'
                        },
                        {
                            label: 'Bestellung erhalten',
                            value: 'Bestellung erhalten'
                        },
                        {
                            label: 'Bestellung an Lieferanten versandt',
                            value: 'Bestellung an Lieferanten versandt'
                        },
                        {
                            label: 'Auftrag durch Lieferant bestätigt',
                            value: 'Auftrag durch Lieferant bestätigt'
                        },
                        {
                            label: 'Auftragsbestätigung an Kunden versandt',
                            value: 'Auftragsbestätigung an Kunden versandt'
                        },
                        {
                            label: 'Transport beauftragen',
                            value: 'Transport beauftragen'
                        },
                        {
                            label: 'Transport beauftragt',
                            value: 'Transport beauftragt'
                        },
                        {
                            label: 'Anlieferung erfolgt',
                            value: 'Anlieferung erfolgt'
                        },
                        {
                            label: 'Informationen einpflegen',
                            value: 'Informationen einpflegen'
                        },
                        {
                            label: 'Betrag erhalten',
                            value: 'Betrag erhalten'
                        },
                        {
                            label: 'Abgeschlossen',
                            value: 'Abgeschlossen'
                        }
                    ])
                },
                {
                    apiName: 'Type',
                    label: 'Auftragstyp',
                    fieldType: 'picklist',
                    required: true,
                    picklistOptions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$sfPicklist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfPicklist"])()([
                        {
                            label: 'Warentransport',
                            value: 'Warentransport'
                        },
                        {
                            label: 'Abfalltransport',
                            value: 'Abfalltransport'
                        },
                        {
                            label: 'Provisionsabrechnung',
                            value: 'Provisionsabrechnung'
                        },
                        {
                            label: 'Materialanalyse',
                            value: 'Materialanalyse'
                        },
                        {
                            label: 'Consulting',
                            value: 'Consulting'
                        },
                        {
                            label: 'Dienstleistung',
                            value: 'Dienstleistung'
                        },
                        {
                            label: 'Materialentwicklung',
                            value: 'Materialentwicklung'
                        },
                        {
                            label: 'Lagermenge',
                            value: 'Lagermenge'
                        },
                        {
                            label: 'Monitoring',
                            value: 'Monitoring'
                        },
                        {
                            label: 'PLASTRACK',
                            value: 'PLASTRACK'
                        }
                    ])
                },
                {
                    apiName: 'Auftragsrichtung__c',
                    label: 'Auftragsrichtung',
                    fieldType: 'picklist',
                    picklistOptions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$sfPicklist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfPicklist"])()([
                        {
                            label: 'Umlagerung',
                            value: 'Umlagerung'
                        },
                        {
                            label: 'Lagereingang',
                            value: 'Lagereingang'
                        },
                        {
                            label: 'Lagerausgang',
                            value: 'Lagerausgang'
                        },
                        {
                            label: 'Direkt',
                            value: 'Direkt'
                        },
                        {
                            label: 'Produktion',
                            value: 'Produktion'
                        }
                    ])
                },
                {
                    apiName: 'ActivatedDate',
                    label: 'Aktivierungsdatum',
                    fieldType: 'datetime',
                    readOnly: true
                },
                {
                    apiName: 'ActivatedById',
                    label: 'Aktiviert durch',
                    fieldType: 'lookup',
                    lookupObjectType: 'User',
                    readOnly: true
                },
                {
                    apiName: 'EffectiveDate',
                    label: 'Startdatum',
                    fieldType: 'date',
                    required: true
                },
                {
                    apiName: 'OrderNumber',
                    label: 'Auftragsnummer',
                    fieldType: 'text',
                    readOnly: true
                },
                {
                    apiName: 'RIGK_Disponummer__c',
                    label: 'Externe Referenznummer',
                    fieldType: 'text'
                },
                {
                    apiName: 'Referenznummer_plastship__c',
                    label: 'Referenznummer plastship',
                    fieldType: 'text'
                },
                {
                    apiName: 'Marge_2_Gesamt__c',
                    label: 'Marge SOLL',
                    fieldType: 'currency',
                    currencyCode: 'EUR',
                    readOnly: true
                },
                {
                    // #449: Contract ist jetzt App-Objekt (Config + searchDisplayConfig +
                    // Route) — der Vertrag ist am Auftrag per Lookup pflegbar.
                    apiName: 'ContractId',
                    label: 'Vertrag',
                    fieldType: 'lookup',
                    lookupObjectType: 'Contract',
                    // #1808: Vertrag ist kundengebunden — nur Verträge des gewählten
                    // Accounts wählbar, Account-Wechsel leert ihn
                    dependsOn: {
                        field: 'AccountId',
                        matchField: 'AccountId'
                    }
                },
                {
                    apiName: 'Projekttyp_aus_Vertrag__c',
                    label: 'Projekttyp (aus Vertrag)',
                    fieldType: 'text',
                    readOnly: true
                },
                {
                    apiName: 'Kostenstelle__c',
                    label: 'Kostenstelle',
                    fieldType: 'lookup',
                    lookupObjectType: 'Kostenstelle_plastship__c'
                },
                {
                    apiName: 'Projekt__c',
                    label: 'Projekt',
                    fieldType: 'lookup',
                    lookupObjectType: 'Projekt__c'
                },
                {
                    apiName: 'Material_Proposal__c',
                    label: 'Material Proposal',
                    fieldType: 'lookup',
                    lookupObjectType: 'Material_Proposal__c'
                },
                {
                    apiName: 'Reklamation__c',
                    label: 'Reklamation',
                    fieldType: 'lookup',
                    lookupObjectType: 'Reklamation__c'
                },
                {
                    apiName: 'OwnerId',
                    label: 'Inhaber',
                    fieldType: 'lookup',
                    lookupObjectType: 'User'
                },
                // Editierbar für admin/staff — dient auf der Auftragsbestätigung als
                // Kontakt (zuverlässig änderbar, anders als der Owner; s. #459).
                {
                    apiName: 'CompanyAuthorizedById',
                    label: 'Firmenautorisierung von',
                    fieldType: 'lookup',
                    lookupObjectType: 'User'
                },
                {
                    apiName: 'CreatedById',
                    label: 'Erstellt von',
                    fieldType: 'lookup',
                    lookupObjectType: 'User',
                    readOnly: true
                },
                {
                    apiName: 'LastModifiedById',
                    label: 'Zuletzt geändert von',
                    fieldType: 'lookup',
                    lookupObjectType: 'User',
                    readOnly: true
                }
            ]
        },
        {
            id: 'lieferant',
            label: 'Lieferant',
            columns: 2,
            visibleForRoles: [
                'admin',
                'staff',
                'agent'
            ],
            fields: [
                {
                    apiName: 'Lieferant__c',
                    label: 'Lieferant',
                    fieldType: 'lookup',
                    lookupObjectType: 'Account'
                },
                {
                    apiName: 'Produktionsstandort__c',
                    label: 'Ladestelle (Produktionsstandort)',
                    fieldType: 'lookup',
                    lookupObjectType: 'Produktionsstandort__c'
                },
                // #1647: Standort-Name (Lookup oben) + Adresse (SF-Formel) nebeneinander
                {
                    apiName: 'Loading_Site__c',
                    label: 'Ladestelle (Adresse)',
                    fieldType: 'text',
                    readOnly: true
                },
                {
                    apiName: 'Incoterm_Einkauf__c',
                    label: 'Incoterm Einkauf',
                    fieldType: 'picklist',
                    picklistOptions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$sfPicklist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfPicklist"])()(INCOTERM_OPTIONS)
                },
                {
                    apiName: 'Zust_ndiger_Kontakt_Lieferant__c',
                    label: 'Zuständiger Kontakt Lieferant',
                    fieldType: 'lookup',
                    lookupObjectType: 'Contact'
                },
                {
                    apiName: 'Ansprechpartner_Transport_Ladestelle__c',
                    label: 'Ansprechpartner Transport Ladestelle',
                    fieldType: 'lookup',
                    lookupObjectType: 'Contact'
                }
            ]
        },
        {
            id: 'kunde',
            label: 'Kunde',
            columns: 2,
            visibleForRoles: [
                'admin',
                'staff',
                'agent'
            ],
            fields: [
                {
                    apiName: 'AccountId',
                    label: 'Account',
                    fieldType: 'lookup',
                    lookupObjectType: 'Account',
                    required: true
                },
                {
                    apiName: 'Produktion_Delivery__c',
                    label: 'Lieferstelle (Produktion)',
                    fieldType: 'lookup',
                    lookupObjectType: 'Produktionsstandort__c'
                },
                // #1647: Standort-Name (Lookup oben) + Adresse (SF-Formel) nebeneinander
                {
                    apiName: 'Delivery_Site__c',
                    label: 'Lieferstelle (Adresse)',
                    fieldType: 'text',
                    readOnly: true
                },
                {
                    apiName: 'PoNumber',
                    label: 'Bestellnummer',
                    fieldType: 'text'
                },
                {
                    apiName: 'Incoterm__c',
                    label: 'Incoterm Verkauf',
                    fieldType: 'picklist',
                    picklistOptions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$sfPicklist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfPicklist"])()(INCOTERM_OPTIONS)
                },
                {
                    apiName: 'CustomerAuthorizedById',
                    label: 'Kunde autorisiert von',
                    fieldType: 'lookup',
                    lookupObjectType: 'Contact'
                },
                {
                    apiName: 'Ansprechpartner_Transport_Lieferstelle__c',
                    label: 'Ansprechpartner Transport Lieferstelle',
                    fieldType: 'lookup',
                    lookupObjectType: 'Contact'
                }
            ]
        },
        {
            id: 'transporteur',
            label: 'Transporteur',
            columns: 2,
            visibleForRoles: [
                'admin',
                'staff',
                'agent'
            ],
            fields: [
                {
                    apiName: 'Transporteur_NEU__c',
                    label: 'Transporteur',
                    fieldType: 'lookup',
                    lookupObjectType: 'Account'
                },
                {
                    apiName: 'Transporteur_Ansprechpartner_NEU__c',
                    label: 'Transporteur Ansprechpartner',
                    fieldType: 'lookup',
                    lookupObjectType: 'Contact'
                },
                // Transportpreis__c is a read-only SF field (INVALID_FIELD_FOR_INSERT_UPDATE).
                {
                    apiName: 'Transportpreis__c',
                    label: 'Transporteur Preis',
                    fieldType: 'currency',
                    currencyCode: 'EUR',
                    readOnly: true
                },
                // #463: das editierbare Preisfeld — bisher nur für die Spediteur-
                // Perspektive freigeschaltet, Staff pflegt es aber selbst (u. a.
                // inline in der Aufträge-Liste am Vertrag).
                {
                    apiName: 'Transporteur_Preis_NEU__c',
                    label: 'Transporteur Preis NEU',
                    fieldType: 'currency',
                    currencyCode: 'EUR'
                },
                {
                    apiName: 'Truck_Nr__c',
                    label: 'Truck Nr.',
                    fieldType: 'text'
                }
            ]
        },
        {
            id: 'transport',
            label: 'Transport',
            columns: 2,
            visibleForRoles: [
                'admin',
                'staff',
                'agent'
            ],
            fields: [
                {
                    apiName: 'Datum_Abholung_NEU__c',
                    label: 'Datum Abholung',
                    fieldType: 'date'
                },
                {
                    apiName: 'Datum_ETA_NEU__c',
                    label: 'ETA',
                    fieldType: 'date'
                },
                {
                    apiName: 'Datum_tats_Anlieferung_NEU__c',
                    label: 'Tats. Anlieferung',
                    fieldType: 'date'
                },
                {
                    apiName: 'Quantity__c',
                    label: 'Menge',
                    fieldType: 'number',
                    readOnly: true
                },
                // Auf den Dokumenten als „Transportart" ausgewiesen — muss für
                // admin/staff pflegbar sein.
                {
                    apiName: 'Vorlage_Bestellung_Transportart__c',
                    label: 'Transportart',
                    fieldType: 'text'
                }
            ]
        },
        {
            // "vorher" — supplier weighing note
            id: 'wiegescheine_lieferant',
            label: 'Wiegescheine Lieferant',
            columns: 2,
            visibleForRoles: [
                'admin',
                'staff',
                'agent'
            ],
            fields: [
                {
                    apiName: 'Wiegeschein_Lieferant_t__c',
                    label: 'Wiegeschein Lieferant (t)',
                    fieldType: 'number'
                },
                {
                    apiName: 'Wiegeschein_Lieferant_Nr__c',
                    label: 'Wiegeschein Lieferant Nr.',
                    fieldType: 'text'
                },
                {
                    apiName: 'Check_Datum_Lieferung__c',
                    label: 'Check Datum Lieferung',
                    fieldType: 'text',
                    readOnly: true
                },
                {
                    apiName: 'Liefermenge__c',
                    label: 'Liefermenge',
                    fieldType: 'number',
                    readOnly: true
                }
            ]
        },
        {
            // "nachher" — customer weighing note
            id: 'wiegescheine_kunde',
            label: 'Wiegescheine Kunde',
            columns: 2,
            visibleForRoles: [
                'admin',
                'staff',
                'agent'
            ],
            fields: [
                {
                    apiName: 'Wiegeschein_Kunde_t__c',
                    label: 'Wiegeschein Kunde (t)',
                    fieldType: 'number'
                },
                {
                    apiName: 'Wiegeschein_Kunde_Nr__c',
                    label: 'Wiegeschein Kunde Nr.',
                    fieldType: 'text'
                },
                {
                    apiName: 'Tats_chliche_Liefermenge__c',
                    label: 'Tatsächliche Liefermenge',
                    fieldType: 'number',
                    readOnly: true
                }
            ]
        },
        {
            id: 'vorbereitung_dokumente',
            label: 'Vorbereitung Dokumente',
            columns: 2,
            visibleForRoles: [
                'admin',
                'staff',
                'agent'
            ],
            fields: [
                {
                    apiName: 'Produkt__c',
                    label: 'Produkt für Labels',
                    fieldType: 'lookup',
                    lookupObjectType: 'Product2'
                },
                {
                    apiName: 'AVV_Nummer__c',
                    label: 'AVV-Nummer',
                    fieldType: 'text'
                },
                {
                    apiName: 'AVV_Nummer_Anzeige__c',
                    label: 'AVV-Nummer Anzeige',
                    fieldType: 'text',
                    readOnly: true
                },
                {
                    apiName: 'Vorlage_Labels_Materialnummer_Kunde__c',
                    label: 'Labels: Materialnummer Kunde',
                    fieldType: 'text'
                },
                // #1652: Mindestladegewicht je Dokument — die Auftragsbestätigung (und
                // Lade-/Lieferschein, Transportauftrag) druckt das AB-Feld, die
                // Bestellung an den Lieferanten ihr eigenes. Vorher nur in Salesforce.
                {
                    apiName: 'Vorlage_AB_Mindestladegew__c',
                    label: 'Mindestladegewicht (AB)',
                    fieldType: 'text'
                },
                {
                    apiName: 'Vorlage_Bestellung_Mindestladegewicht__c',
                    label: 'Mindestladegewicht (Bestellung)',
                    fieldType: 'text'
                },
                // Zentrale Produktbeschreibung — primäre Quelle für ALLE Order-Dokumente
                // (vor Vorlage_Bestellung_Produktbeschr__c/Description); muss für
                // admin/staff pflegbar sein.
                {
                    apiName: 'Vorlage_Labels_Produktbeschreibung__c',
                    label: 'Produktbeschreibung',
                    fieldType: 'textarea'
                },
                {
                    apiName: 'Verpackung__c',
                    label: 'Verpackung',
                    fieldType: 'picklist',
                    picklistOptions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$sfPicklist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfPicklist"])()([
                        {
                            label: 'BigBags auf Einwegpalette',
                            value: 'BigBags auf Einwegpalette'
                        },
                        {
                            label: 'BigBags auf Einwegpalette inkl. Hauben',
                            value: 'BigBags auf Einwegpalette inkl. Hauben'
                        },
                        {
                            label: 'BigBags auf Europalette',
                            value: 'BigBags auf Europalette'
                        },
                        {
                            label: 'BigBags auf Europalette inkl. Hauben',
                            value: 'BigBags auf Europalette inkl. Hauben'
                        },
                        {
                            label: 'Oktabins',
                            value: 'Oktabins'
                        },
                        {
                            label: 'Silofahrzeug',
                            value: 'Silofahrzeug'
                        },
                        {
                            label: 'Kartons',
                            value: 'Kartons'
                        },
                        {
                            label: '25kg-Säcke auf Einwegpalette',
                            value: '25kg-Säcken auf Einwegpalette'
                        },
                        {
                            label: 'lose Schüttung',
                            value: 'loser Schüttung'
                        },
                        {
                            label: 'in Ballen',
                            value: 'in Ballen'
                        },
                        // #1802: ohne Stretchfolie, zusätzlich zu „gestretcht"
                        {
                            label: 'auf Einwegpalette',
                            value: 'auf Einwegpalette'
                        },
                        {
                            label: 'auf Einwegpalette gestretcht',
                            value: 'auf Einwegpalette gestretcht'
                        },
                        {
                            label: 'in Kunststoffboxen',
                            value: 'in Kunststoffboxen'
                        },
                        {
                            label: 'in Gitterboxen',
                            value: 'in Gitterboxen'
                        }
                    ])
                },
                // #1802: Freitext-Fallbacks der Dokumente — die Templates drucken sie nur,
                // wenn die Picklist bzw. das ETA-Datum leer ist.
                {
                    apiName: 'Vorlage_AB_Verpackung__c',
                    label: 'Verpackung AB (Freitext)',
                    fieldType: 'text',
                    helpText: 'Wird auf AB und Lieferschein gedruckt, wenn „Verpackung“ leer ist.'
                },
                {
                    apiName: 'Vorlage_Bestellung_Verpackung__c',
                    label: 'Verpackung Bestellung (Freitext)',
                    fieldType: 'text',
                    helpText: 'Wird auf Bestellung, Ladeschein und Packliste gedruckt, wenn „Verpackung“ leer ist.'
                },
                {
                    apiName: 'Lieferdatum_Text__c',
                    label: 'Lieferdatum (Text)',
                    fieldType: 'text',
                    helpText: 'Erscheint auf AB, Lieferschein und Rechnung, wenn kein ETA-Datum gesetzt ist.'
                },
                {
                    apiName: 'Verpackung_bersetzung_EN_del__c',
                    label: 'Verpackung Übersetzung (EN)',
                    fieldType: 'text',
                    readOnly: true
                },
                {
                    apiName: 'Ust_Einkauf__c',
                    label: 'USt. (%) Einkauf',
                    fieldType: 'percent'
                },
                {
                    apiName: 'Ust__c',
                    label: 'USt. (%)',
                    fieldType: 'percent'
                },
                {
                    apiName: 'Zusatz_Bestellung__c',
                    label: 'Zusatz Bestellung',
                    fieldType: 'picklist',
                    picklistOptions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$sfPicklist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfPicklist"])()(ZUSATZ_OPTIONS)
                },
                {
                    apiName: 'Zusatz_Rechnung__c',
                    label: 'Zusatz Rechnung',
                    fieldType: 'picklist',
                    picklistOptions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$sfPicklist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfPicklist"])()(ZUSATZ_OPTIONS)
                },
                {
                    apiName: 'Anweisungen_Transporteur_Ladestelle__c',
                    label: 'Anweisungen Ladestelle',
                    fieldType: 'textarea'
                },
                {
                    apiName: 'Anweisungen_Transporteur_Entladestelle__c',
                    label: 'Anweisungen Entladestelle',
                    fieldType: 'textarea'
                },
                {
                    apiName: 'Anweisungen_Transporteur_Dispo__c',
                    label: 'Anweisungen Dispo',
                    fieldType: 'textarea'
                }
            ]
        },
        {
            id: 'dokumentencheck',
            label: 'Dokumentencheck',
            columns: 2,
            visibleForRoles: [
                'admin',
                'staff',
                'agent'
            ],
            fields: [
                {
                    apiName: 'Document_Order_attached__c',
                    label: 'Kundenbestellung',
                    fieldType: 'boolean'
                },
                {
                    apiName: 'Document_Order_Confirmation_attached__c',
                    label: 'Auftragsbestätigung',
                    fieldType: 'boolean'
                },
                {
                    apiName: 'Document_Order_to_Supplier_attached__c',
                    label: 'Bestellung an Lieferant',
                    fieldType: 'boolean'
                },
                {
                    apiName: 'Document_Transport_Order_attached__c',
                    label: 'Transportauftrag',
                    fieldType: 'boolean'
                },
                {
                    apiName: 'Document_Pickup_Note_attached__c',
                    label: 'Ladeschein',
                    fieldType: 'boolean'
                },
                {
                    apiName: 'Document_Delivery_Note_attached__c',
                    label: 'Lieferschein',
                    fieldType: 'boolean'
                },
                {
                    apiName: 'Document_Weighing_Note_Supplier_attached__c',
                    label: 'Wiegeschein Lieferant',
                    fieldType: 'boolean'
                },
                {
                    apiName: 'Document_Weighing_Note_Customer_attached__c',
                    label: 'Wiegeschein Kunde',
                    fieldType: 'boolean'
                }
            ]
        },
        {
            id: 'vorkalkulation',
            label: 'Vorkalkulation',
            columns: 2,
            visibleForRoles: [
                'admin',
                'staff',
                'agent'
            ],
            fields: [
                // Calculation roll-ups from the order items — read-only except the agent
                // expenses per ton, which is the only manually-entered field here.
                {
                    apiName: 'Einkaufspreis_pro_t__c',
                    label: 'Einkaufspreis pro t',
                    fieldType: 'currency',
                    currencyCode: 'EUR',
                    readOnly: true
                },
                {
                    apiName: 'Transportpreis_pro_Tonne__c',
                    label: 'Transportpreis pro Tonne',
                    fieldType: 'currency',
                    currencyCode: 'EUR',
                    readOnly: true
                },
                {
                    apiName: 'Auslagen_pro_t_Agent__c',
                    label: 'Auslagen pro t Agent',
                    fieldType: 'currency',
                    currencyCode: 'EUR'
                },
                {
                    apiName: 'Verkaufspreis_pro_t__c',
                    label: 'Verkaufspreis pro t',
                    fieldType: 'currency',
                    currencyCode: 'EUR',
                    readOnly: true
                },
                {
                    apiName: 'Marge_pro_t__c',
                    label: 'Marge pro t',
                    fieldType: 'currency',
                    currencyCode: 'EUR',
                    readOnly: true
                },
                {
                    apiName: 'Einkaufspreis_Gesamt__c',
                    label: 'Einkaufspreis Gesamt',
                    fieldType: 'currency',
                    currencyCode: 'EUR',
                    readOnly: true
                },
                {
                    apiName: 'Transportpreis__c',
                    label: 'Transportpreis',
                    fieldType: 'currency',
                    currencyCode: 'EUR',
                    readOnly: true
                },
                {
                    apiName: 'Auslagen_Agent__c',
                    label: 'Auslagen Agent',
                    fieldType: 'currency',
                    currencyCode: 'EUR',
                    readOnly: true
                },
                {
                    apiName: 'TotalAmount',
                    label: 'Auftragsbetrag',
                    fieldType: 'currency',
                    currencyCode: 'EUR',
                    readOnly: true
                },
                {
                    apiName: 'Gesamtmarge__c',
                    label: 'Gesamtmarge',
                    fieldType: 'currency',
                    currencyCode: 'EUR',
                    readOnly: true
                }
            ]
        },
        {
            id: 'abrechnung',
            label: 'Abrechnung',
            columns: 2,
            visibleForRoles: [
                'admin',
                'staff',
                'agent'
            ],
            fields: [
                {
                    apiName: 'Zielbetrag_Kunde__c',
                    label: 'Zielbetrag Kunde',
                    fieldType: 'currency',
                    currencyCode: 'EUR',
                    readOnly: true
                },
                {
                    apiName: 'Zielbetrag_Lieferant__c',
                    label: 'Zielbetrag Lieferant',
                    fieldType: 'currency',
                    currencyCode: 'EUR',
                    readOnly: true
                },
                {
                    apiName: 'Offener_Betrag_von_Kunde__c',
                    label: 'Offener Betrag von Kunde',
                    fieldType: 'currency',
                    currencyCode: 'EUR',
                    readOnly: true
                },
                {
                    apiName: 'Offener_Betrag_an_Lieferant__c',
                    label: 'Offener Betrag an Lieferant',
                    fieldType: 'currency',
                    currencyCode: 'EUR',
                    readOnly: true
                },
                {
                    apiName: 'Offener_Betrag_an_Sales_Agent__c',
                    label: 'Offener Betrag an Sales Agent',
                    fieldType: 'currency',
                    currencyCode: 'EUR',
                    readOnly: true
                },
                {
                    apiName: 'Offener_Betrag_an_Transporteur__c',
                    label: 'Offener Betrag an Transporteur',
                    fieldType: 'currency',
                    currencyCode: 'EUR',
                    readOnly: true
                },
                {
                    apiName: 'Buchungsmenge_Lager__c',
                    label: 'Buchungsmenge Lager',
                    fieldType: 'number',
                    readOnly: true
                },
                {
                    apiName: 'DB_plastship__c',
                    label: 'DB plastship',
                    fieldType: 'currency',
                    currencyCode: 'EUR',
                    readOnly: true
                },
                {
                    apiName: 'Abrechnung_Betrag__c',
                    label: 'Abrechnung Betrag',
                    fieldType: 'currency',
                    currencyCode: 'EUR',
                    readOnly: true
                },
                {
                    apiName: 'Betrag_Ausgangsrechnungen_Kunde__c',
                    label: 'Ausgangsrechnungen Kunde',
                    fieldType: 'currency',
                    currencyCode: 'EUR',
                    readOnly: true
                },
                {
                    apiName: 'Betrag_Eingangsrechnungen_Lieferant__c',
                    label: 'Eingangsrechnungen Lieferant',
                    fieldType: 'currency',
                    currencyCode: 'EUR',
                    readOnly: true
                },
                {
                    apiName: 'Betrag_Eingangsrechnungen_Sales_Agent__c',
                    label: 'Eingangsrechnungen Sales Agent',
                    fieldType: 'currency',
                    currencyCode: 'EUR',
                    readOnly: true
                },
                {
                    apiName: 'Betrag_Eingangsrechnungen_Sonstige__c',
                    label: 'Eingangsrechnungen Sonstige',
                    fieldType: 'currency',
                    currencyCode: 'EUR',
                    readOnly: true
                },
                {
                    apiName: 'Betrag_Eingangsrechnungen_Transporteur__c',
                    label: 'Eingangsrechnungen Transporteur',
                    fieldType: 'currency',
                    currencyCode: 'EUR',
                    readOnly: true
                },
                {
                    apiName: 'Betrag_Vorkasse_gezahlt__c',
                    label: 'Vorkasse gezahlt',
                    fieldType: 'currency',
                    currencyCode: 'EUR',
                    readOnly: true
                }
            ]
        },
        // ── #329 Welle A: Externe Perspektiven-Sets (user/rigk) ─────────────────
        // Der Server maskt Felder je Beziehung (recordVisibilityRules); diese
        // Sektionen spiegeln die Sets in die UI. Ohne Perspektiven-Tag = Minimal-Set
        // (alle Externen, auch Grant-Fall). Staff-Sicht oben unverändert.
        {
            id: 'ext_uebersicht',
            label: 'Übersicht',
            columns: 2,
            visibleForRoles: [
                'user',
                'rigk'
            ],
            fields: [
                {
                    apiName: 'Produkt__c',
                    label: 'Produkt',
                    fieldType: 'lookup',
                    lookupObjectType: 'Product2',
                    readOnly: true
                },
                {
                    apiName: 'Quantity__c',
                    label: 'Menge (t)',
                    fieldType: 'number',
                    readOnly: true
                }
            ]
        },
        {
            id: 'ext_bestellung',
            label: 'Ihre Bestellung',
            columns: 2,
            visibleForRoles: [
                'user',
                'rigk'
            ],
            visibleForPerspectives: [
                'customer'
            ],
            fields: [
                {
                    apiName: 'PoNumber',
                    label: 'PO-Nummer',
                    fieldType: 'text',
                    readOnly: true
                },
                {
                    apiName: 'Incoterm__c',
                    label: 'Incoterm',
                    fieldType: 'text',
                    readOnly: true
                },
                {
                    apiName: 'Verkaufspreis_pro_t__c',
                    label: 'Preis pro Tonne',
                    fieldType: 'currency',
                    currencyCode: 'EUR',
                    readOnly: true
                },
                {
                    apiName: 'TotalAmount',
                    label: 'Gesamtbetrag',
                    fieldType: 'currency',
                    currencyCode: 'EUR',
                    readOnly: true
                },
                {
                    apiName: 'Ust__c',
                    label: 'USt. (%)',
                    fieldType: 'number',
                    readOnly: true
                },
                {
                    apiName: 'Verpackung__c',
                    label: 'Verpackung',
                    fieldType: 'text',
                    readOnly: true
                },
                {
                    apiName: 'AVV_Nummer_Anzeige__c',
                    label: 'AVV-Nummer',
                    fieldType: 'text',
                    readOnly: true
                }
            ]
        },
        {
            id: 'ext_lieferung',
            label: 'Lieferung',
            columns: 2,
            visibleForRoles: [
                'user',
                'rigk'
            ],
            visibleForPerspectives: [
                'customer'
            ],
            fields: [
                {
                    apiName: 'Produktion_Delivery__c',
                    label: 'Lieferwerk',
                    fieldType: 'lookup',
                    lookupObjectType: 'Produktionsstandort__c',
                    readOnly: true
                },
                // #1647: Adresse zum Standort-Namen (customerInformation)
                {
                    apiName: 'Delivery_Site__c',
                    label: 'Lieferstelle (Adresse)',
                    fieldType: 'text',
                    readOnly: true
                },
                {
                    apiName: 'Datum_ETA_NEU__c',
                    label: 'ETA',
                    fieldType: 'date',
                    readOnly: true
                },
                {
                    apiName: 'Datum_tats_Anlieferung_NEU__c',
                    label: 'Tatsächliche Anlieferung',
                    fieldType: 'date',
                    readOnly: true
                },
                {
                    apiName: 'Liefermenge__c',
                    label: 'Liefermenge (t)',
                    fieldType: 'number',
                    readOnly: true
                },
                {
                    apiName: 'Tats_chliche_Liefermenge__c',
                    label: 'Tatsächliche Liefermenge (t)',
                    fieldType: 'number',
                    readOnly: true
                },
                {
                    apiName: 'Transporteur_NEU__c',
                    label: 'Spediteur',
                    fieldType: 'lookup',
                    lookupObjectType: 'Account',
                    readOnly: true
                },
                {
                    apiName: 'Truck_Nr__c',
                    label: 'LKW-Nr.',
                    fieldType: 'text',
                    readOnly: true
                }
            ]
        },
        {
            id: 'ext_wiegeschein_kunde',
            label: 'Ihr Wiegeschein',
            columns: 2,
            visibleForRoles: [
                'user',
                'rigk'
            ],
            visibleForPerspectives: [
                'customer'
            ],
            fields: [
                {
                    apiName: 'Wiegeschein_Kunde_t__c',
                    label: 'Wiegeschein Menge (t)',
                    fieldType: 'number'
                },
                {
                    apiName: 'Wiegeschein_Kunde_Nr__c',
                    label: 'Wiegeschein-Nr.',
                    fieldType: 'text'
                }
            ]
        },
        {
            id: 'ext_abholung',
            label: 'Abholung',
            columns: 2,
            visibleForRoles: [
                'user',
                'rigk'
            ],
            visibleForPerspectives: [
                'supplier'
            ],
            fields: [
                {
                    apiName: 'Produktionsstandort__c',
                    label: 'Ladestelle',
                    fieldType: 'lookup',
                    lookupObjectType: 'Produktionsstandort__c',
                    readOnly: true
                },
                // #1647: Adresse zum Standort-Namen (supplierInformation)
                {
                    apiName: 'Loading_Site__c',
                    label: 'Ladestelle (Adresse)',
                    fieldType: 'text',
                    readOnly: true
                },
                {
                    apiName: 'Incoterm_Einkauf__c',
                    label: 'Incoterm',
                    fieldType: 'text',
                    readOnly: true
                },
                {
                    apiName: 'Datum_Abholung_NEU__c',
                    label: 'Abholdatum',
                    fieldType: 'date',
                    readOnly: true
                },
                {
                    apiName: 'Transporteur_NEU__c',
                    label: 'Spediteur',
                    fieldType: 'lookup',
                    lookupObjectType: 'Account',
                    readOnly: true
                },
                {
                    apiName: 'Verpackung__c',
                    label: 'Verpackung',
                    fieldType: 'text',
                    readOnly: true
                },
                {
                    apiName: 'AVV_Nummer_Anzeige__c',
                    label: 'AVV-Nummer',
                    fieldType: 'text',
                    readOnly: true
                },
                {
                    apiName: 'Ust_Einkauf__c',
                    label: 'USt. (%)',
                    fieldType: 'number',
                    readOnly: true
                }
            ]
        },
        {
            id: 'ext_preise_lieferant',
            label: 'Ihre Konditionen',
            columns: 2,
            visibleForRoles: [
                'user',
                'rigk'
            ],
            visibleForPerspectives: [
                'supplier'
            ],
            // #353 (PM 2026-07-04): "Preis pro Tonne" raus — nur Gesamtbetrag bleibt.
            fields: [
                {
                    apiName: 'Einkaufspreis_Gesamt__c',
                    label: 'Gesamtbetrag',
                    fieldType: 'currency',
                    currencyCode: 'EUR',
                    readOnly: true
                }
            ]
        },
        {
            id: 'ext_wiegeschein_lieferant',
            label: 'Ihr Wiegeschein',
            columns: 2,
            visibleForRoles: [
                'user',
                'rigk'
            ],
            visibleForPerspectives: [
                'supplier'
            ],
            fields: [
                {
                    apiName: 'Wiegeschein_Lieferant_t__c',
                    label: 'Wiegeschein Menge (t)',
                    fieldType: 'number'
                },
                {
                    apiName: 'Wiegeschein_Lieferant_Nr__c',
                    label: 'Wiegeschein-Nr.',
                    fieldType: 'text'
                }
            ]
        },
        {
            id: 'ext_transport',
            label: 'Transport',
            columns: 2,
            visibleForRoles: [
                'user',
                'rigk'
            ],
            visibleForPerspectives: [
                'carrier'
            ],
            fields: [
                {
                    apiName: 'Produktionsstandort__c',
                    label: 'Ladestelle',
                    fieldType: 'lookup',
                    lookupObjectType: 'Produktionsstandort__c',
                    readOnly: true
                },
                {
                    apiName: 'Produktion_Delivery__c',
                    label: 'Lieferstelle',
                    fieldType: 'lookup',
                    lookupObjectType: 'Produktionsstandort__c',
                    readOnly: true
                },
                {
                    apiName: 'Datum_Abholung_NEU__c',
                    label: 'Abholdatum',
                    fieldType: 'date',
                    readOnly: true
                },
                {
                    apiName: 'Datum_ETA_NEU__c',
                    label: 'ETA',
                    fieldType: 'date',
                    readOnly: true
                },
                {
                    apiName: 'Truck_Nr__c',
                    label: 'LKW-Nr.',
                    fieldType: 'text',
                    readOnly: true
                },
                {
                    apiName: 'Anweisungen_Transporteur_Dispo__c',
                    label: 'Anweisungen Dispo',
                    fieldType: 'textarea',
                    readOnly: true
                },
                // #353: der Spediteur soll auch Verpackung + AVV-Nummer sehen.
                {
                    apiName: 'Verpackung__c',
                    label: 'Verpackung',
                    fieldType: 'text',
                    readOnly: true
                },
                {
                    apiName: 'AVV_Nummer_Anzeige__c',
                    label: 'AVV-Nummer',
                    fieldType: 'text',
                    readOnly: true
                },
                {
                    apiName: 'Transporteur_Preis_NEU__c',
                    label: 'Transportpreis',
                    fieldType: 'currency',
                    currencyCode: 'EUR'
                }
            ]
        }
    ],
    // #329: Perspektiven-Verdrahtung — Kunde wird über mehrere Kontakte erkannt
    // (Rechnungs-/Liefer-Kontakt, Freigeber, AP Lieferstelle). Schreibrechte:
    // die Parteien tragen ihre eigenen Wiegescheine ein, der Spediteur seinen Preis.
    perspectives: {
        lookups: {
            customer: [
                'Ansprechpartner_Transport_Lieferstelle__c',
                'BillToContactId',
                'ShipToContactId',
                'CustomerAuthorizedById'
            ],
            supplier: [
                'Ansprechpartner_Transport_Ladestelle__c',
                'Zust_ndiger_Kontakt_Lieferant__c'
            ],
            carrier: [
                'Transporteur_Ansprechpartner_NEU__c'
            ]
        },
        updatable: {
            customer: [
                'Wiegeschein_Kunde_t__c',
                'Wiegeschein_Kunde_Nr__c'
            ],
            supplier: [
                'Wiegeschein_Lieferant_t__c',
                'Wiegeschein_Lieferant_Nr__c'
            ],
            carrier: [
                'Transporteur_Preis_NEU__c'
            ]
        }
    },
    tabGroups: [
        {
            id: 'tab_auftragsdaten',
            label: 'Auftragsdaten',
            sectionIds: [
                'positionen_abrechnung_status',
                'auftragsdaten'
            ],
            isDefault: true
        },
        {
            id: 'parteien',
            label: 'Parteien',
            sectionIds: [
                'lieferant',
                'kunde',
                'transporteur'
            ]
        },
        {
            id: 'lieferung',
            label: 'Lieferung',
            sectionIds: [
                'transport',
                'wiegescheine_lieferant',
                'wiegescheine_kunde'
            ]
        },
        {
            id: 'dokumente',
            label: 'Dokumente',
            sectionIds: [
                'vorbereitung_dokumente',
                'dokumentencheck'
            ]
        },
        {
            id: 'kalkulation_abrechnung',
            label: 'Kalkulation & Abrechnung',
            sectionIds: [
                'vorkalkulation',
                'abrechnung'
            ]
        }
    ],
    relatedLists: [
        {
            relationshipName: 'OrderItems',
            label: 'Auftragsprodukte',
            // Columns per GitLab #202 §12 (Related-List spec).
            // #329: staff-Variante — enthält Preise, daher NICHT für Externe (die
            // bekommen die schlanke Kunden-Variante darunter).
            fields: [
                'Id',
                'Produktcode__c',
                // Handelsname des Produkts (wie in der Kunden-Variante darunter)
                'Product2.Trade_Name__c',
                'Quantity',
                'Einkaufspreis_pro_t__c',
                'UnitPrice',
                'TotalPrice',
                'Batchnummer__c',
                // #1184 Modell v5: Zuordnung zur Ausgangsrechnung, inline als Lookup
                // (Suche auf die Kunden-Abrechnungen dieses Auftrags, dependsOn OrderId).
                'Abrechnung__c'
            ],
            // #447: fürs „Auftrag duplizieren" (Positionen mitkopieren) mitladen,
            // ohne die kuratierten #202-Spalten zu verwässern. #1184: OrderId für
            // den abhängigen Lookup der Spalte „Abrechnung".
            hiddenFields: [
                'Product2Id',
                'Description',
                'OrderId'
            ],
            maxRows: 20,
            // #323: Pilot Inline-Edit — Menge/Preise/Batch direkt in der Tabelle
            // (editierbar bleibt nur, was getUpdatableFields(OrderItem, Rolle) hergibt;
            // TotalPrice ist Formel und bleibt automatisch Anzeige).
            inlineEdit: true,
            visibleForRoles: [
                'admin',
                'staff',
                'agent'
            ]
        },
        {
            // #329 Welle A (PM 2026-07-03): ALLE Beteiligten müssen sehen, was
            // geliefert wurde — Produktcode, Handelsname, Menge. Keine Preise,
            // keine Detail-View nötig. Disjunkte Rollen zur staff-Variante oben
            // (der Subquery-Builder filtert pro Rolle, sonst doppelte Subquery).
            relationshipName: 'OrderItems',
            label: 'Auftragsprodukte',
            fields: [
                'Id',
                'Produktcode__c',
                'Product2.Trade_Name__c',
                'Quantity'
            ],
            maxRows: 20,
            visibleForRoles: [
                'user',
                'rigk'
            ]
        },
        {
            relationshipName: 'Abrechnungen__r',
            label: 'Abrechnungen',
            // Columns per GitLab #202 §13 (Related-List spec).
            // #329: intern — Belege laufen für Kunden über den Rechnungsweg.
            fields: [
                'Id',
                'Name',
                'Belegnummer__c',
                'Rechnungstyp__c',
                'Rechnungsbetrag__c'
            ],
            maxRows: 10,
            // #323: Pilot Inline-Edit
            inlineEdit: true,
            visibleForRoles: [
                'admin',
                'staff',
                'agent'
            ]
        },
        {
            relationshipName: 'Status_Updates__r',
            label: 'Status Updates',
            fields: [
                'Id',
                'OwnerId',
                'Update_Type__c',
                'Meeting_DateTime__c',
                'CreatedById',
                'Body__c',
                'Next_Steps__c'
            ],
            maxRows: 10,
            visibleForRoles: [
                'admin',
                'staff',
                'agent',
                'user',
                'rigk'
            ],
            // #329: rigk ergänzt — der Share-Filter galt nur für 'user'; rigk hätte
            // sonst ALLE (auch interne) Status-Updates gesehen.
            whereClauseByRole: {
                user: 'Status_Update_is_Shared_with_Users__c = true',
                rigk: 'Status_Update_is_Shared_with_Users__c = true'
            }
        },
        {
            // #826: Aufgaben am Datensatz — Zeile öffnet die Aufgabe im Drawer
            relationshipName: 'Tasks',
            label: 'Aufgaben',
            fields: [
                'Id',
                'Subject',
                'Owner.Alias',
                'ActivityDate',
                'Status',
                'Priority'
            ],
            maxRows: 10,
            visibleForRoles: [
                'admin',
                'staff',
                'agent'
            ]
        },
        {
            relationshipName: 'Feedbacks__r',
            label: 'Prozessfeedback',
            // #329: konservativ intern (CAPA-Kommunikation) — Freigabe für Kunden
            // ist eine PM-Entscheidung, nicht Default.
            fields: [
                'Id',
                'Name',
                'CreatedDate',
                'Status__c',
                'Current_State_Evaluation__c',
                'Description__c'
            ],
            maxRows: 10,
            visibleForRoles: [
                'admin',
                'staff',
                'agent'
            ]
        },
        {
            relationshipName: 'AttachedContentDocuments',
            label: 'Dateien',
            // #329: konservativ intern — Anhänge können interne Dokumente sein.
            fields: [
                'Id',
                'Title'
            ],
            maxRows: 10,
            visibleForRoles: [
                'admin',
                'staff',
                'agent'
            ]
        }
    ],
    relatedListTabGroups: [
        {
            // The two mandatory child records every order needs — kept together in the
            // default tab so both are visible at once with their create buttons.
            id: 'positionen_abrechnung',
            label: 'Positionen & Abrechnung',
            relationshipNames: [
                'OrderItems',
                'Abrechnungen__r'
            ],
            isDefault: true
        },
        {
            id: 'verlauf_dateien',
            label: 'Verlauf & Dateien',
            relationshipNames: [
                'Status_Updates__r',
                'Feedbacks__r',
                'AttachedContentDocuments'
            ]
        }
    ],
    systemFields: [
        'Id',
        'CreatedDate',
        'CreatedById',
        'LastModifiedDate',
        'LastModifiedById',
        'OwnerId'
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/config/entityFields/OrderItem.fields.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// CURATED — do not regenerate (--force) without re-applying the lean rules in LEAN-CURATION.md
/**
 * Entity Field Configuration: OrderItem (Auftragsprodukt)
 *
 * Per PM: show ALL Auftragsprodukt fields, but well-structured (like
 * MonitoredMaterial/Product2 — organize, don't trim). Editability mirrors the SF
 * FlexiPage (yellow pencil = editable): Quantity, UnitPrice, Liefermenge__c,
 * Gebuchte_Menge__c, Einkaufspreis_pro_t__c, Typ__c, Batchnummer__c,
 * Verbrauchte_Menge_Batch__c, Aktueller_Standort__c, Description are editable; the
 * rest are read-only formulas/roll-ups. Product/Order stay read-only (set at creation
 * via the order/[id]/items endpoint, not reassigned here). ServiceDate/EndDate are not
 * on the FlexiPage and are dropped.
 *
 * Aktueller_Standort__c is shown as editable text for now (its target location object
 * is not integrated as a lookup); Name_Aktueller_Standort__c shows the resolved name.
 * Related lists (Preise & Verfügbarkeiten, Waren-Lagerbewegungen, Materialflüsse) are
 * pending — some target objects are not in the app yet.
 */ __turbopack_context__.s([
    "OrderItemFieldConfig",
    ()=>OrderItemFieldConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$sfPicklist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/entityFields/sfPicklist.ts [app-client] (ecmascript)");
;
const ROLES = [
    'admin',
    'staff'
];
const OrderItemFieldConfig = {
    entityType: 'OrderItem',
    entityLabel: 'Order Item',
    headerFields: [
        'OrderItemNumber',
        'OrderId',
        'Product2Id',
        'Quantity',
        'TotalPrice'
    ],
    sections: [
        {
            id: 'zuordnung',
            label: 'Zuordnung',
            columns: 2,
            fields: [
                {
                    apiName: 'OrderItemNumber',
                    label: 'Auftragsproduktnummer',
                    fieldType: 'text',
                    readOnly: true,
                    visibleForRoles: ROLES
                },
                {
                    apiName: 'OrderId',
                    label: 'Auftrag',
                    fieldType: 'lookup',
                    lookupObjectType: 'Order',
                    readOnly: true,
                    visibleForRoles: ROLES
                },
                {
                    apiName: 'Auftragsnummer_Name__c',
                    label: 'Auftragsnummer',
                    fieldType: 'text',
                    readOnly: true,
                    visibleForRoles: ROLES
                },
                // #463: createbar, danach fix — reines readOnly versteckte den Lookup
                // auch im Create-Formular, der Insert ging ohne Produkt raus und die
                // PricebookEntry-Auflösung der API (#447) kam nie zum Zug.
                {
                    apiName: 'Product2Id',
                    label: 'Produkt',
                    fieldType: 'lookup',
                    lookupObjectType: 'Product2',
                    readOnlyOnEdit: true,
                    required: true,
                    visibleForRoles: ROLES
                },
                {
                    apiName: 'Produktcode__c',
                    label: 'Produktcode',
                    fieldType: 'text',
                    readOnly: true,
                    visibleForRoles: ROLES
                },
                // #850/#1183 Modell v5: Zuordnung zur Ausgangsrechnung. Der Lookup ist in
                // Salesforce auf denselben Auftrag und Rolle „Kunde" gefiltert; dependsOn
                // bildet den Auftragsbezug in der App ab, die Regel R5 (zugeordnete
                // Position fest) kommt als Salesforce-Meldung zurück.
                {
                    apiName: 'Abrechnung__c',
                    label: 'Abrechnung (Ausgangsrechnung)',
                    fieldType: 'lookup',
                    lookupObjectType: 'Abrechnung__c',
                    dependsOn: {
                        field: 'OrderId',
                        matchField: 'Auftrag__c'
                    },
                    visibleForRoles: ROLES
                },
                {
                    apiName: 'Offen_zu_fakturieren__c',
                    label: 'Offen zu fakturieren',
                    fieldType: 'number',
                    readOnly: true,
                    visibleForRoles: ROLES
                }
            ]
        },
        {
            id: 'mengen',
            label: 'Mengen',
            columns: 2,
            fields: [
                {
                    apiName: 'Quantity',
                    label: 'Menge',
                    fieldType: 'number',
                    visibleForRoles: ROLES
                },
                {
                    apiName: 'Liefermenge__c',
                    label: 'Tatsächliche Liefermenge',
                    fieldType: 'number',
                    visibleForRoles: ROLES
                }
            ]
        },
        {
            id: 'preise',
            label: 'Preise',
            columns: 2,
            fields: [
                // Stückpreis (Verkauf) next to Einkaufspreis pro t for direct comparison.
                {
                    apiName: 'UnitPrice',
                    label: 'Stückpreis',
                    fieldType: 'currency',
                    currencyCode: 'EUR',
                    visibleForRoles: ROLES
                },
                {
                    apiName: 'Einkaufspreis_pro_t__c',
                    label: 'Einkaufspreis pro t',
                    fieldType: 'currency',
                    currencyCode: 'EUR',
                    visibleForRoles: ROLES
                },
                {
                    apiName: 'ListPrice',
                    label: 'Listenpreis',
                    fieldType: 'currency',
                    currencyCode: 'EUR',
                    readOnly: true,
                    visibleForRoles: ROLES
                },
                {
                    apiName: 'TotalPrice',
                    label: 'Gesamtpreis',
                    fieldType: 'currency',
                    currencyCode: 'EUR',
                    readOnly: true,
                    visibleForRoles: ROLES
                },
                {
                    apiName: 'Einkaufspreis_Gesamt__c',
                    label: 'Einkaufspreis Kalkulation',
                    fieldType: 'currency',
                    currencyCode: 'EUR',
                    readOnly: true,
                    visibleForRoles: ROLES
                },
                {
                    apiName: 'Einkaufspreis_Real__c',
                    label: 'Einkaufspreis Real',
                    fieldType: 'currency',
                    currencyCode: 'EUR',
                    readOnly: true,
                    visibleForRoles: ROLES
                },
                {
                    apiName: 'Rechnungsbetrag__c',
                    label: 'Rechnungsbetrag',
                    fieldType: 'currency',
                    currencyCode: 'EUR',
                    readOnly: true,
                    visibleForRoles: ROLES
                }
            ]
        },
        {
            id: 'lager_standort',
            label: 'Lager & Standort',
            columns: 2,
            fields: [
                {
                    apiName: 'Buchungsmenge_Auftragsprodukt__c',
                    label: 'Buchungsmenge Lager',
                    fieldType: 'number',
                    readOnly: true,
                    visibleForRoles: ROLES
                },
                {
                    apiName: 'Gebuchte_Menge__c',
                    label: 'Gebuchte Menge',
                    fieldType: 'number',
                    visibleForRoles: ROLES
                },
                {
                    apiName: 'Restmenge_verf_gbar__c',
                    label: 'Restmenge verfügbar',
                    fieldType: 'number',
                    readOnly: true,
                    visibleForRoles: ROLES
                },
                {
                    apiName: 'Standort__c',
                    label: 'Standort',
                    fieldType: 'text',
                    readOnly: true,
                    visibleForRoles: ROLES
                },
                {
                    apiName: 'Aktueller_Standort__c',
                    label: 'Aktueller Standort',
                    fieldType: 'text',
                    visibleForRoles: ROLES
                },
                {
                    apiName: 'Name_Aktueller_Standort__c',
                    label: 'Name Aktueller Standort',
                    fieldType: 'text',
                    readOnly: true,
                    visibleForRoles: ROLES
                }
            ]
        },
        {
            id: 'lohn_batch',
            label: 'Lohn & Batch',
            columns: 2,
            fields: [
                {
                    apiName: 'Typ__c',
                    label: 'Typ',
                    fieldType: 'picklist',
                    picklistOptions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$sfPicklist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfPicklist"])()([
                        {
                            label: 'Output (Herstellung)',
                            value: 'Output (Herstellung)'
                        },
                        {
                            label: 'Input (Verbrauch)',
                            value: 'Input (Verbrauch)'
                        }
                    ]),
                    visibleForRoles: ROLES
                },
                {
                    apiName: 'Batchnummer__c',
                    label: 'Batchnummer',
                    fieldType: 'text',
                    visibleForRoles: ROLES
                },
                {
                    apiName: 'Verbrauchte_Menge_Batch__c',
                    label: 'Verbrauchte Menge (Batch)',
                    fieldType: 'number',
                    visibleForRoles: ROLES
                },
                {
                    apiName: 'Herstellungsmenge_Lohn__c',
                    label: 'Herstellungsmenge Lohn',
                    fieldType: 'number',
                    readOnly: true,
                    visibleForRoles: ROLES
                },
                {
                    apiName: 'Inputmenge_Lohn__c',
                    label: 'Inputmenge Lohn',
                    fieldType: 'number',
                    readOnly: true,
                    visibleForRoles: ROLES
                }
            ]
        },
        {
            id: 'beschreibung',
            label: 'Beschreibung',
            columns: 1,
            fields: [
                {
                    apiName: 'Description',
                    label: 'Beschreibung des Belegpostens',
                    fieldType: 'textarea',
                    visibleForRoles: ROLES
                }
            ]
        }
    ],
    tabGroups: [
        {
            id: 'mengen_preise_tab',
            label: 'Mengen & Preise',
            sectionIds: [
                'zuordnung',
                'mengen',
                'preise'
            ],
            isDefault: true
        },
        {
            id: 'lager_lohn_tab',
            label: 'Lager, Lohn & Batch',
            sectionIds: [
                'lager_standort',
                'lohn_batch',
                'beschreibung'
            ]
        }
    ],
    systemFields: [
        'Id',
        'CreatedDate',
        'CreatedById',
        'LastModifiedDate',
        'LastModifiedById'
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/config/entityFields/Product2.fields.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// CURATED — do not regenerate (--force) without re-applying the lean rules in LEAN-CURATION.md
/**
 * Entity Field Configuration: Product2 (lean staff view)
 *
 * Special case: the Material/Mechanical-Data fields are real material specs that the
 * customer-facing marketplace product view + the SimilarMaterials fit calculator
 * consume (see TECH_SPECS in ProductMarketplaceView.tsx) — kept in full. Curation:
 * add the missing #200 §1.3 fields (Materialkategorie, Filler/Foreign/Contaminants
 * text, Abweichende_Laborwerte, Datum_letzter_Labortest, Count_Material_Proposal),
 * organise the field sections into tabs, drop the System field section and the legacy
 * Opportunities/Sample_Feedbacks/Feedbacks related lists.
 */ __turbopack_context__.s([
    "Product2FieldConfig",
    ()=>Product2FieldConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$sfPicklist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/entityFields/sfPicklist.ts [app-client] (ecmascript)");
;
const Product2FieldConfig = {
    entityType: 'Product2',
    entityLabel: 'Product2',
    // #1059: Produktcode beim Anlegen mit „letzter Code + 1" vorbelegen
    createDefaultsEndpoint: '/salesforce/product/next-code',
    headerFields: [
        'ProductCode',
        'Name',
        'Main_polymer__c',
        'Sales_Intent__c',
        'Account__c'
    ],
    // #358 (PM 2026-07-06): Kunden laden ihre Datenblätter am eigenen Produkt hoch —
    // blendet die „Anhänge"-Sektion (RelatedFiles mit Upload) für Customer-Rollen ein.
    externalAttachments: true,
    sections: [
        {
            id: 'angebotsqualifizierung',
            label: 'Angebotsqualifizierung',
            fields: [
                {
                    apiName: 'Name',
                    label: 'Produktname',
                    fieldType: 'text',
                    required: true
                },
                {
                    // #358: Produktcode im Detail read-only (SF-/staff-vergeben).
                    // #1059: beim Anlegen editierbar und mit „letzter Code + 1"
                    // vorbelegt (createDefaultsEndpoint) — readOnlyOnEdit statt readOnly.
                    apiName: 'ProductCode',
                    label: 'Produktcode',
                    fieldType: 'text',
                    readOnlyOnEdit: true
                },
                {
                    // #358: Kunden bekommen den Account server-seitig back-gefüllt (eigener
                    // Account) und dürfen ihn nicht umhängen — nur intern editierbar.
                    apiName: 'Account__c',
                    label: 'Account',
                    fieldType: 'lookup',
                    lookupObjectType: 'Account',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent'
                    ]
                },
                {
                    // Product2 has no OwnerId — responsibility follows the linked Account's
                    // owner (read-only formula). Reassign via the Account lookup above.
                    apiName: 'Accountinhaber__c',
                    label: 'Zuständig (Account-Inhaber)',
                    fieldType: 'text',
                    readOnly: true,
                    // #1419: verrät den Lieferanten — nur intern (maskRecordFields streicht es ohnehin)
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'Produktionsstandort__c',
                    label: 'Produktionsstandort',
                    fieldType: 'lookup',
                    lookupObjectType: 'Produktionsstandort__c',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent'
                    ]
                },
                {
                    // #358: Marktplatz-Sichtbarkeit bleibt staff-gesteuert.
                    apiName: 'Sales_Intent__c',
                    label: 'Sales Intent',
                    fieldType: 'picklist',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent'
                    ],
                    picklistOptions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$sfPicklist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfPicklist"])()([
                        {
                            label: 'Deactivated',
                            value: 'Deactivated'
                        },
                        {
                            label: 'Salesforce only',
                            value: 'Salesforce only'
                        },
                        {
                            label: 'Platform invisible',
                            value: 'Platform invisible'
                        },
                        {
                            label: 'Platform visible',
                            value: 'Platform visible'
                        },
                        {
                            label: 'Proposal Pool',
                            value: 'Proposal Pool'
                        },
                        {
                            label: 'Top Recyclates',
                            value: 'Top Recyclates'
                        },
                        {
                            label: 'Active Push',
                            value: 'Active Push'
                        },
                        {
                            label: 'Distribution',
                            value: 'Distribution'
                        }
                    ])
                },
                {
                    apiName: 'Im_Fokus__c',
                    label: 'Im Fokus',
                    fieldType: 'boolean',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent'
                    ]
                },
                {
                    apiName: 'Hohes_Potenzial__c',
                    label: 'Hohes Potenzial',
                    fieldType: 'boolean',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent'
                    ]
                },
                {
                    apiName: 'Hohes_Risiko__c',
                    label: 'Hohes Risiko',
                    fieldType: 'boolean',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent'
                    ]
                },
                {
                    apiName: 'Risikobewertung__c',
                    label: 'Risikobewertung',
                    fieldType: 'text',
                    readOnly: true,
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent'
                    ]
                },
                {
                    // #831: Vertriebs-/Account-Kontext — alle drei sind SF-Formeln
                    // (folgen dem verknüpften Account) und bleiben reine Anzeige.
                    apiName: 'Verh_ltnis_Account__c',
                    label: 'Verhältnis Account',
                    fieldType: 'text',
                    readOnly: true,
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'Ist_Key_Account__c',
                    label: 'Ist Key Account',
                    fieldType: 'boolean',
                    readOnly: true,
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'Time_to_Action__c',
                    label: 'Time to Action',
                    fieldType: 'number',
                    readOnly: true,
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'IsActive',
                    label: 'Aktiv',
                    fieldType: 'boolean'
                }
            ]
        },
        {
            id: 'material_info',
            label: 'Material Info',
            fields: [
                {
                    apiName: 'Main_polymer__c',
                    label: 'Hauptpolymer',
                    fieldType: 'picklist',
                    picklistOptions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$sfPicklist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfPicklist"])()([
                        {
                            label: 'PE-HD',
                            value: 'PE-HD'
                        },
                        {
                            label: 'PE-HMW',
                            value: 'PE-HMW'
                        },
                        {
                            label: 'PE-LD',
                            value: 'PE-LD'
                        },
                        {
                            label: 'PE-LLD',
                            value: 'PE-LLD'
                        },
                        {
                            label: 'PE-MD',
                            value: 'PE-MD'
                        },
                        {
                            label: 'PE-UHMW',
                            value: 'PE-UHMW'
                        },
                        {
                            label: 'PE-X',
                            value: 'PE-X'
                        },
                        {
                            label: 'PP',
                            value: 'PP'
                        },
                        {
                            label: 'PP-C',
                            value: 'PP-C'
                        },
                        {
                            label: 'PP-H',
                            value: 'PP-H'
                        },
                        {
                            label: 'PP-BOPS',
                            value: 'PP-BOPS'
                        },
                        {
                            label: 'PS',
                            value: 'PS'
                        },
                        {
                            label: 'PS-E',
                            value: 'PS-E'
                        },
                        {
                            label: 'PS-I',
                            value: 'PS-I'
                        },
                        {
                            label: 'PET',
                            value: 'PET'
                        },
                        {
                            label: 'PET-A',
                            value: 'PET-A'
                        },
                        {
                            label: 'PET-C',
                            value: 'PET-C'
                        },
                        {
                            label: 'PET-G',
                            value: 'PET-G'
                        },
                        {
                            label: 'PVC',
                            value: 'PVC'
                        },
                        {
                            label: 'PVC-U',
                            value: 'PVC-U'
                        },
                        {
                            label: 'PVC-P',
                            value: 'PVC-P'
                        },
                        {
                            label: 'PA6',
                            value: 'PA6'
                        },
                        {
                            label: 'PA66',
                            value: 'PA66'
                        },
                        {
                            label: 'PA11',
                            value: 'PA11'
                        },
                        {
                            label: 'PA12',
                            value: 'PA12'
                        },
                        {
                            label: 'PC',
                            value: 'PC'
                        },
                        {
                            label: 'ABS',
                            value: 'ABS'
                        },
                        {
                            label: 'ASA',
                            value: 'ASA'
                        },
                        {
                            label: 'SAN',
                            value: 'SAN'
                        },
                        {
                            label: 'PBT',
                            value: 'PBT'
                        },
                        {
                            label: 'PMMA',
                            value: 'PMMA'
                        },
                        {
                            label: 'POM',
                            value: 'POM'
                        },
                        {
                            label: 'PPS',
                            value: 'PPS'
                        },
                        {
                            label: 'PUR',
                            value: 'PUR'
                        },
                        {
                            label: 'SBR',
                            value: 'SBR'
                        },
                        {
                            label: 'BR',
                            value: 'BR'
                        },
                        {
                            label: 'NBR',
                            value: 'NBR'
                        },
                        {
                            label: 'NR',
                            value: 'NR'
                        },
                        {
                            label: 'COC',
                            value: 'COC'
                        },
                        {
                            label: 'EVAC',
                            value: 'EVAC'
                        },
                        {
                            label: 'EVOH',
                            value: 'EVOH'
                        },
                        {
                            label: 'EPDM',
                            value: 'EPDM'
                        },
                        {
                            label: 'TPE',
                            value: 'TPE'
                        },
                        {
                            label: 'TPU',
                            value: 'TPU'
                        }
                    ])
                },
                {
                    apiName: 'Material_type__c',
                    label: 'Materialtyp',
                    fieldType: 'picklist',
                    picklistOptions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$sfPicklist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfPicklist"])()([
                        {
                            label: 'Ballenware',
                            value: 'Ballenware'
                        },
                        {
                            label: 'Mahlgut',
                            value: 'Mahlgut'
                        },
                        {
                            label: 'Regranulat',
                            value: 'Regranulat'
                        },
                        {
                            label: 'Compound',
                            value: 'Compound'
                        },
                        {
                            label: 'Neuware',
                            value: 'Neuware'
                        },
                        {
                            label: 'Masterbatch',
                            value: 'Masterbatch'
                        },
                        {
                            label: 'Wertstoff',
                            value: 'Wertstoff'
                        },
                        {
                            label: 'Agglomerat',
                            value: 'Agglomerat'
                        },
                        {
                            label: 'Flakes',
                            value: 'Flakes'
                        },
                        {
                            label: 'Rollenware',
                            value: 'Rollenware'
                        },
                        {
                            label: 'Rolle auf Palette',
                            value: 'Rolle auf Palette'
                        }
                    ])
                },
                {
                    // Restricted Picklist — Liste per SF-describe abgeglichen (2026-07-07):
                    // nur diese 4 Werte sind aktiv; die alte 14er-Liste (transparent/
                    // transluzent/weiß/…) warf INVALID_OR_NULL_FOR_RESTRICTED_PICKLIST.
                    apiName: 'Material_colour__c',
                    label: 'Materialfarbe',
                    fieldType: 'picklist',
                    picklistOptions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$sfPicklist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfPicklist"])()([
                        {
                            label: 'natur',
                            value: 'natur'
                        },
                        {
                            label: 'bunt-hell',
                            value: 'bunt-hell'
                        },
                        {
                            label: 'bunt-dunkel',
                            value: 'bunt-dunkel'
                        },
                        {
                            label: 'schwarz',
                            value: 'schwarz'
                        }
                    ])
                },
                {
                    apiName: 'Rezyklatdefinition__c',
                    label: 'Rezyklatdefinition',
                    fieldType: 'picklist',
                    picklistOptions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$sfPicklist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfPicklist"])()([
                        {
                            label: 'Post-consumer (PCR)',
                            value: 'Post-consumer (PCR)'
                        },
                        {
                            label: 'Pre-consumer (PIR)',
                            value: 'Pre-consumer (PIR)'
                        },
                        {
                            label: 'Pre- & post-consumer Mischung',
                            value: 'Pre- & post-consumer Mischung'
                        }
                    ])
                },
                {
                    apiName: 'Verarbeitungsverfahren__c',
                    label: 'Verarbeitungsverfahren',
                    fieldType: 'picklist',
                    picklistOptions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$sfPicklist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfPicklist"])()([
                        {
                            label: 'Spritzguss',
                            value: 'Spritzguss'
                        },
                        {
                            label: 'Blasfolienextrusion',
                            value: 'Blasfolienextrusion'
                        },
                        {
                            label: 'Extrusion',
                            value: 'Extrusion'
                        },
                        {
                            label: 'Blasformen',
                            value: 'Blasformen'
                        },
                        {
                            label: 'Sonstige',
                            value: 'Sonstige'
                        }
                    ])
                },
                {
                    // #358 (PM 2026-07-06): Produktfamilie braucht der Kunde nicht.
                    apiName: 'Family',
                    label: 'Produktfamilie',
                    fieldType: 'picklist',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent'
                    ],
                    picklistOptions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$sfPicklist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfPicklist"])()([
                        {
                            label: 'None',
                            value: 'None'
                        },
                        {
                            label: 'Materialanalyse',
                            value: 'Materialanalyse'
                        },
                        {
                            label: 'Dienstleistung',
                            value: 'Dienstleistung'
                        }
                    ])
                },
                {
                    apiName: 'Trade_Name__c',
                    label: 'Trade Name',
                    fieldType: 'text'
                },
                {
                    // PM 2026-07-07: für Kundenrollen raus — SF-gepflegter Sync-Wert.
                    // Rollen-Gate statt hiddenInCreate, damit er auch im EDIT-Modal
                    // nicht wieder auftaucht.
                    apiName: 'Product_Name__c',
                    label: 'Produktname Sync',
                    fieldType: 'text',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent'
                    ]
                },
                {
                    apiName: 'Product_Description__c',
                    label: 'Product Description EN',
                    fieldType: 'textarea'
                },
                {
                    apiName: 'Description',
                    label: 'Produktbeschreibung',
                    fieldType: 'textarea'
                },
                {
                    apiName: 'Materialkategorie__c',
                    label: 'Materialkategorie',
                    fieldType: 'lookup',
                    lookupObjectType: 'Materialkategorie__c',
                    readOnly: true
                },
                {
                    // #831: Ausgangsmaterial-Verweis (Lookup auf ein anderes Produkt).
                    apiName: 'Basismaterial__c',
                    label: 'Basismaterial',
                    fieldType: 'lookup',
                    lookupObjectType: 'Product2',
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'Filler_Material_Text__c',
                    label: 'Füllstoff',
                    fieldType: 'text'
                },
                {
                    apiName: 'Foreign_Polymers_Text__c',
                    label: 'Fremdpolymere',
                    fieldType: 'text'
                },
                {
                    apiName: 'Contaminants_Text__c',
                    label: 'Kontaminationen',
                    fieldType: 'text'
                },
                {
                    apiName: 'Import_Main_Polymer__c',
                    label: 'Import Hauptpolymer',
                    fieldType: 'text',
                    readOnly: true
                },
                {
                    apiName: 'Import_Material_Type__c',
                    label: 'Import Materialtyp',
                    fieldType: 'text',
                    readOnly: true
                },
                // #358 (PM 2026-07-06): aus „Abwicklung" hierher — für Kunden relevanter Teil.
                {
                    apiName: 'Recycled_Content__c',
                    label: 'Recycled Content (%)',
                    fieldType: 'percent'
                },
                {
                    // SF-Field-Level-Security: für den Integrations-User nicht schreibbar
                    // (INVALID_FIELD_FOR_INSERT_UPDATE, PM-Test 2026-07-07) — app-weit nur
                    // Anzeige. Falls Schreiben gewünscht: FLS in SF öffnen, dann readOnly weg.
                    apiName: 'AVV_Nummer__c',
                    label: 'AVV-Nummer',
                    fieldType: 'text',
                    readOnly: true
                }
            ]
        },
        {
            // #831/#799: Abfallfraktions-Zuordnung des Produkts — der Lookup ist
            // pflegbar, die Abfallfraktion_*-Felder sind SF-Formeln (spiegeln den
            // verknüpften Datensatz) und bleiben Anzeige. Über die Zuordnung wird
            // auch die AVV-Nummer am Auftrag befüllbar (#799-Kette).
            id: 'abfallfraktion',
            label: 'Abfallfraktion',
            visibleForRoles: [
                'admin',
                'staff'
            ],
            fields: [
                {
                    apiName: 'Abfallfraktionen__c',
                    label: 'Abfallfraktion',
                    fieldType: 'lookup',
                    lookupObjectType: 'Abfallfraktionen__c'
                },
                {
                    // Scope-Ergänzung AB 27.08. (#831/#712): neues PROD-Feld,
                    // Checkbox, Standard Nein — staff/admin pflegbar.
                    apiName: 'Abfalleigenschaft__c',
                    label: 'Abfalleigenschaft',
                    fieldType: 'boolean'
                },
                {
                    apiName: 'Abfallfraktion_Zuordnung_Typ__c',
                    label: 'Abfallfraktion Zuordnung Typ',
                    fieldType: 'text',
                    readOnly: true
                },
                {
                    apiName: 'Abfallfraktion_Kunststoff__c',
                    label: 'Abfallfraktion Kunststoff',
                    fieldType: 'text',
                    readOnly: true
                },
                {
                    apiName: 'Abfallfraktion_Herkunft__c',
                    label: 'Abfallfraktion Herkunft',
                    fieldType: 'text',
                    readOnly: true
                },
                {
                    apiName: 'Abfallfraktion_Typische_Kontamination__c',
                    label: 'Abfallfraktion Typische Kontamination',
                    fieldType: 'text',
                    readOnly: true
                },
                {
                    apiName: 'Abfallfraktion_Zurdn_Rezyklatdefinition__c',
                    label: 'Abfallfraktion Zurdn Rezyklatdefinition',
                    fieldType: 'text',
                    readOnly: true
                }
            ]
        },
        {
            id: 'abwicklung',
            label: 'Relevant für Abwicklung',
            fields: [
                // #358 (PM 2026-07-06): Verpackungs-/Muster-/Lager-Felder braucht der Kunde
                // nicht (bisher nur Freitext) — nur intern.
                {
                    apiName: 'Standard_Packaging__c',
                    label: 'Standardverpackung',
                    fieldType: 'text',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent'
                    ]
                },
                {
                    apiName: 'Packaging_Unit_Weight_in_kg__c',
                    label: 'Verpackungseinheit Gewicht (kg)',
                    fieldType: 'number',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent'
                    ]
                },
                {
                    apiName: 'Tonnage_per_truck__c',
                    label: 'Tonnage pro LKW',
                    fieldType: 'number'
                },
                {
                    apiName: 'Yearly_capacity_in_t__c',
                    label: 'Jahreskapazität (t)',
                    fieldType: 'number'
                },
                {
                    apiName: 'Amount_monthly__c',
                    label: 'Monatliche Menge',
                    fieldType: 'number'
                },
                {
                    apiName: 'Mustermenge_kg__c',
                    label: 'Mustermenge (kg)',
                    fieldType: 'number',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent'
                    ]
                },
                {
                    apiName: 'Platform_Price__c',
                    label: 'Plattformpreis',
                    fieldType: 'currency',
                    currencyCode: 'EUR'
                },
                {
                    apiName: 'Lagerort__c',
                    label: 'Lagerort Muster',
                    fieldType: 'text',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent'
                    ]
                }
            ]
        },
        {
            id: 'mechanical_data',
            label: 'Mechanische & physikalische Kennwerte',
            // The marketplace product detail page renders all of these in the
            // "Technische Daten" tab (see TECH_SPECS in ProductMarketplaceView.tsx);
            // SimilarMaterials feeds the numeric subset into the fit-assessment
            // calculator. Keep this list aligned with that table so the SOQL
            // SELECT covers everything the UI tries to display.
            fields: [
                // Flow / rheology
                {
                    apiName: 'MFR_Test_Standard_ISO_1133__c',
                    label: 'MFR (ISO 1133)',
                    fieldType: 'number'
                },
                {
                    apiName: 'MFR_Min__c',
                    label: 'MFR Min',
                    fieldType: 'number'
                },
                {
                    apiName: 'MFR_Temp__c',
                    label: 'MFR Temperatur',
                    fieldType: 'text'
                },
                {
                    apiName: 'MFR_kg__c',
                    label: 'MFR Belastung',
                    fieldType: 'text'
                },
                {
                    apiName: 'MVR_Test_Standard_ISO_1133__c',
                    label: 'MVR (ISO 1133)',
                    fieldType: 'number'
                },
                {
                    apiName: 'MVR_Min__c',
                    label: 'MVR Min',
                    fieldType: 'number'
                },
                // Density & ash
                {
                    apiName: 'Dichte_Test_Standard_ISO_1183__c',
                    label: 'Dichte (ISO 1183)',
                    fieldType: 'number'
                },
                {
                    apiName: 'Dichte_Min__c',
                    label: 'Dichte Min',
                    fieldType: 'number'
                },
                {
                    apiName: 'Aschegehalt_Test_Standard_ISO_3451__c',
                    label: 'Aschegehalt (ISO 3451)',
                    fieldType: 'number'
                },
                {
                    apiName: 'Aschegehalt_Min__c',
                    label: 'Aschegehalt Min',
                    fieldType: 'number'
                },
                // Tensile
                {
                    apiName: 'Zug_E_Modul__c',
                    label: 'Zug-E-Modul',
                    fieldType: 'number'
                },
                {
                    apiName: 'Zug_E_Modul_Min__c',
                    label: 'Zug-E-Modul Min',
                    fieldType: 'number'
                },
                {
                    apiName: 'Zugfestigkeit__c',
                    label: 'Zugfestigkeit',
                    fieldType: 'number'
                },
                {
                    apiName: 'Zugfestigkeit_Min__c',
                    label: 'Zugfestigkeit Min',
                    fieldType: 'number'
                },
                {
                    apiName: 'Zugdehnung__c',
                    label: 'Zugdehnung',
                    fieldType: 'number'
                },
                {
                    apiName: 'Zugdehnung_Min__c',
                    label: 'Zugdehnung Min',
                    fieldType: 'number'
                },
                {
                    apiName: 'Zugspannung_an_der_Streckgrenze_MPa__c',
                    label: 'Zugspannung Streckgrenze',
                    fieldType: 'number'
                },
                {
                    apiName: 'Zugspannung_an_der_Streckgrenze_Min__c',
                    label: 'Zugspannung Streckgrenze Min',
                    fieldType: 'number'
                },
                {
                    apiName: 'Bruchdehnung__c',
                    label: 'Bruchdehnung',
                    fieldType: 'number'
                },
                {
                    apiName: 'Bruchdehnung_Min__c',
                    label: 'Bruchdehnung Min',
                    fieldType: 'number'
                },
                {
                    apiName: 'Bruchspannung__c',
                    label: 'Bruchspannung',
                    fieldType: 'number'
                },
                {
                    apiName: 'Bruchspannung_Min__c',
                    label: 'Bruchspannung Min',
                    fieldType: 'number'
                },
                // Impact
                {
                    apiName: 'Kerbschlagz_higkeit_Charpy__c',
                    label: 'Kerbschlagzähigkeit Charpy',
                    fieldType: 'number'
                },
                {
                    apiName: 'Kerbschlagzaehigkeit_Min__c',
                    label: 'Kerbschlagzähigkeit Charpy Min',
                    fieldType: 'number'
                },
                {
                    apiName: 'Kerbschlagz_higkeit_Izod__c',
                    label: 'Kerbschlagzähigkeit Izod',
                    fieldType: 'number'
                },
                {
                    apiName: 'Kerbschlagz_higkeit_Izod_Min__c',
                    label: 'Kerbschlagzähigkeit Izod Min',
                    fieldType: 'number'
                },
                // Bulk / particle
                {
                    apiName: 'Sch_ttdichte__c',
                    label: 'Schüttdichte',
                    fieldType: 'number'
                },
                {
                    apiName: 'Sch_ttdichte_Min__c',
                    label: 'Schüttdichte Min',
                    fieldType: 'number'
                },
                {
                    apiName: 'Korngr_e_mm__c',
                    label: 'Korngröße',
                    fieldType: 'number'
                },
                {
                    apiName: 'Korngr_e_mm_Min__c',
                    label: 'Korngröße Min',
                    fieldType: 'number'
                },
                {
                    apiName: 'Filter_size_my__c',
                    label: 'Filtergröße',
                    fieldType: 'number'
                },
                // Surface moisture
                {
                    apiName: 'Oberfl_chenfeuchte__c',
                    label: 'Oberflächenfeuchte',
                    fieldType: 'number'
                },
                {
                    apiName: 'Oberfl_chenfeuchte_Min__c',
                    label: 'Oberflächenfeuchte Min',
                    fieldType: 'number'
                },
                {
                    // PM 2026-07-07: Labor-Felder für Kundenrollen raus (Rollen-Gate
                    // statt hiddenInCreate — gilt damit auch im Edit-Modal).
                    apiName: 'Abweichende_Laborwerte_gefunden__c',
                    label: 'Abweichende Laborwerte gefunden',
                    fieldType: 'boolean',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent'
                    ]
                },
                {
                    apiName: 'Datum_letzter_Labortest__c',
                    label: 'Datum letzter Labortest',
                    fieldType: 'date',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent'
                    ]
                },
                {
                    // #831: Sprungmarke zur jüngsten Materialanalyse (Lookup, pflegbar).
                    apiName: 'Link_zur_letzten_Analyse__c',
                    label: 'Link zur letzten Analyse',
                    fieldType: 'lookup',
                    lookupObjectType: 'Materialanalyse__c',
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                }
            ]
        },
        {
            id: 'zertifizierungen',
            label: 'Zertifizierungen',
            fields: [
                {
                    apiName: 'REACH_Confirmation__c',
                    label: 'REACH-Confirmation',
                    fieldType: 'boolean'
                },
                {
                    apiName: 'FDA_Approval__c',
                    label: 'FDA Approval',
                    fieldType: 'boolean'
                },
                {
                    apiName: 'SVHC_Approval__c',
                    label: 'SVHC Approval',
                    fieldType: 'boolean'
                },
                {
                    apiName: 'UN_Approval__c',
                    label: 'UN Approval',
                    fieldType: 'boolean'
                },
                {
                    apiName: 'Cosmetics_Approval_Rinse_Off__c',
                    label: 'Cosmetics Approval Rinse Off',
                    fieldType: 'boolean'
                },
                {
                    apiName: 'Cosmetics_Approval_Leave_On__c',
                    label: 'Cosmetics Approval Leave On',
                    fieldType: 'boolean'
                }
            ]
        },
        {
            id: 'dokumentencheck',
            label: 'Dokumentencheck',
            visibleForRoles: [
                'admin',
                'staff',
                'agent'
            ],
            fields: [
                {
                    apiName: 'Document_Original_TDS_attached__c',
                    label: 'Original TDS',
                    fieldType: 'boolean'
                },
                {
                    apiName: 'Document_plastship_TDS_attached__c',
                    label: 'plastship TDS',
                    fieldType: 'boolean'
                },
                {
                    apiName: 'Document_Original_MSDS_attached__c',
                    label: 'Original MSDS',
                    fieldType: 'boolean'
                },
                {
                    apiName: 'Document_plastship_MSDS_attached__c',
                    label: 'plastship MSDS',
                    fieldType: 'boolean'
                },
                {
                    apiName: 'Document_Additional_Analysis_attached__c',
                    label: 'Zusätzliche Analyse',
                    fieldType: 'boolean'
                },
                {
                    apiName: 'Pictures_attached__c',
                    label: 'Bilder',
                    fieldType: 'boolean'
                }
            ]
        },
        {
            id: 'verknuepfungen',
            label: 'Verknüpfungen',
            visibleForRoles: [
                'admin',
                'staff',
                'agent'
            ],
            fields: [
                {
                    apiName: 'Projekt__c',
                    label: 'Projekt',
                    fieldType: 'lookup',
                    lookupObjectType: 'Projekt__c'
                },
                {
                    apiName: 'Kundenvorgang__c',
                    label: 'Kundenvorgang',
                    fieldType: 'lookup',
                    lookupObjectType: 'Case'
                },
                {
                    apiName: 'Onboarding__c',
                    label: 'Onboarding',
                    fieldType: 'lookup',
                    lookupObjectType: 'Onboarding__c'
                },
                {
                    apiName: 'Count_Material_Proposal__c',
                    label: 'Anzahl Material Proposals',
                    fieldType: 'number',
                    readOnly: true
                }
            ]
        },
        {
            id: 'uebersetzung',
            label: 'Übersetzung',
            visibleForRoles: [
                'admin',
                'staff',
                'agent'
            ],
            fields: [
                {
                    apiName: 'Product_Name_EN__c',
                    label: 'Product Name EN',
                    fieldType: 'text'
                },
                {
                    apiName: 'Produktname_Dokumente__c',
                    label: 'Produktname Dokumente',
                    fieldType: 'text'
                }
            ]
        }
    ],
    tabGroups: [
        {
            // #358 (PM 2026-07-06): Stammdaten + Material in einem Tab zusammengeführt.
            id: 'stammdaten_material',
            label: 'Stammdaten & Material',
            sectionIds: [
                'angebotsqualifizierung',
                'verknuepfungen',
                'material_info',
                'abfallfraktion',
                'abwicklung'
            ],
            isDefault: true
        },
        {
            id: 'technische_daten',
            label: 'Technische Daten',
            sectionIds: [
                'mechanical_data'
            ]
        },
        {
            id: 'zertifikate_dokumente',
            label: 'Zertifikate & Dokumente',
            sectionIds: [
                'zertifizierungen',
                'dokumentencheck',
                'uebersetzung'
            ]
        }
    ],
    relatedLists: [
        {
            relationshipName: 'Kundenvorg_nge__r',
            label: 'Kundenvorgänge',
            fields: [
                'Id',
                'CaseNumber',
                'Subject',
                'Status',
                'CreatedDate'
            ],
            maxRows: 10,
            visibleForRoles: [
                'admin',
                'staff'
            ]
        },
        {
            relationshipName: 'Sample_Sendings__r',
            label: 'Sample Sendings',
            fields: [
                'Id',
                'Name',
                'Datum_Versand__c',
                'Amount_in_kg__c',
                'Carrier__c',
                'Load_from__c',
                'Deliver_to__c'
            ],
            maxRows: 10,
            visibleForRoles: [
                'admin',
                'staff'
            ]
        },
        {
            relationshipName: 'Projekte__r',
            label: 'Projekte',
            fields: [
                'Id',
                'Name',
                'CreatedDate',
                'Status__c',
                'Projekttyp__c',
                'OwnerId',
                'Hauptlieferant__c',
                'Hauptkunde__c',
                'Lohndienstleister__c'
            ],
            maxRows: 10,
            visibleForRoles: [
                'admin',
                'staff'
            ]
        },
        {
            relationshipName: 'Material_Proposals__r',
            label: 'Material Proposals',
            // #330/#202 §4: Spaltenset wie an Account (Product__c entfaellt — am
            // Produkt selbst redundant)
            fields: [
                'Id',
                'Name',
                'Date__c',
                'Status__c',
                'Product_Code__c',
                'Purchasing_price_per_ton__c',
                'Sales_Price_per_ton__c',
                'Sample_Order_from_Supplier__c',
                'Sample_Sending_to_Account__c'
            ],
            maxRows: 10,
            visibleForRoles: [
                'admin',
                'staff'
            ]
        },
        {
            relationshipName: 'Auftr_ge__r',
            label: 'Aufträge',
            fields: [
                'Id',
                'OrderNumber',
                'Status',
                'TotalAmount',
                'EffectiveDate'
            ],
            maxRows: 10,
            visibleForRoles: [
                'admin',
                'staff'
            ]
        },
        {
            // Customer-facing marketplace falls back to the linked MM's catalog +
            // technical specs when the Product2 record itself is sparse (common
            // for Inserate that share a number with a fully-analysed MM, e.g.
            // Product 3232 → MM 3232 a10aa000004gEPFAA2). The MM's own RBAC still
            // applies — field masking on the child records strips anything the
            // role can't see; we only widen the relationship-list visibility.
            relationshipName: 'Monitored_Materials__r',
            label: 'Monitored Materials',
            // #330/#202 §9: sichtbare Spalten = Spec + Kern-Identifikation. Die
            // Katalog-/Technik-Felder bleiben als hiddenFields GELADEN — der
            // Marketplace-Fallback (Stammdaten/Technische Daten/SimilarMaterials)
            // liest sie aus der Subquery, sie gehoeren nur nicht in die Tabelle.
            fields: [
                'Id',
                'Name',
                'Datum_Report__c',
                'Hauptpolymer__c',
                'Quality_Grade__c',
                'Summe_Defekte__c',
                'Geruchsbewertung_Skala_allgemein__c',
                'Polymer_Assessment__c'
            ],
            hiddenFields: [
                // Catalog tier (used to fill empty Product2 Stammdaten rows)
                'Form__c',
                'Farbe__c',
                'Rezyklatdefinition__c',
                // Technical specs feeding "Technische Daten" + SimilarMaterials
                'MFR_Test_Standard_ISO_1133__c',
                'Dichte_Test_Standard_ISO_1183__c',
                'Zug_E_Modul__c',
                'Zugfestigkeit__c',
                'Kerbschlagz_higkeit_Charpy__c',
                'Bruchdehnung__c'
            ],
            maxRows: 5,
            // #453/#417 AB 2026-08-28: MM-Verknuepfung lief bisher nur per SF/Skript
            // (Nachpflege-Welle). Gate canEditChildObject blendet den Button fuer
            // Rollen ohne MM-Edit-Recht aus — die breite View-Rollenliste bleibt.
            addExisting: {
                childLookupField: 'Produkt__c',
                unlinkable: true
            },
            visibleForRoles: [
                'admin',
                'staff',
                'user',
                'rigk',
                'agent',
                'advisor'
            ]
        },
        {
            relationshipName: 'Materialanalysen__r',
            label: 'Materialanalysen',
            fields: [
                'Id',
                'Name',
                'Status__c',
                'Analysetyp__c',
                'Datum_Auftrag__c'
            ],
            maxRows: 10,
            visibleForRoles: [
                'admin',
                'staff'
            ]
        },
        {
            relationshipName: 'Status_Updates__r',
            label: 'Status Updates',
            fields: [
                'Id',
                'Name',
                'Owner.Alias',
                'CreatedDate',
                'CreatedById',
                'Update_Type__c',
                'Meeting_DateTime__c',
                'Title__c',
                'Body__c',
                'Next_Steps__c'
            ],
            maxRows: 10,
            visibleForRoles: [
                'admin',
                'staff'
            ]
        },
        {
            // #826: Aufgaben am Datensatz — Zeile öffnet die Aufgabe im Drawer
            relationshipName: 'Tasks',
            label: 'Aufgaben',
            fields: [
                'Id',
                'Subject',
                'Owner.Alias',
                'ActivityDate',
                'Status',
                'Priority'
            ],
            maxRows: 10,
            visibleForRoles: [
                'admin',
                'staff',
                'agent'
            ]
        },
        {
            relationshipName: 'Feedbacks__r',
            label: 'Prozessfeedback',
            fields: [
                'Id',
                'Name',
                'CreatedDate',
                'Status__c',
                'Current_State_Evaluation__c',
                'Description__c'
            ],
            maxRows: 10,
            // #358 (PM 2026-07-06): Prozessfeedback (CAPA) ist nichts für Kunden.
            visibleForRoles: [
                'admin',
                'staff',
                'agent'
            ]
        },
        {
            relationshipName: 'AttachedContentDocuments',
            label: 'Dateien',
            fields: [
                'Id',
                'Title'
            ],
            maxRows: 10,
            visibleForRoles: [
                'admin',
                'staff'
            ]
        },
        {
            relationshipName: 'Aktuelle_Preise_und_Verf_gbarkeiten__r',
            label: 'Aktuelle Preise & Verfügbarkeiten',
            // #330/#202 §5: Inhaber + Spec-Sortierung (letzte Preise zuerst)
            fields: [
                'Id',
                'Name',
                'Owner.Alias',
                'g_ltig_ab__c',
                'Preis_pro_Tonne__c',
                'Preis_pro_Tonne_DDP__c',
                'Tonnen__c'
            ],
            sortField: 'g_ltig_ab__c',
            sortOrder: 'desc',
            maxRows: 10,
            visibleForRoles: [
                'admin',
                'staff'
            ]
        },
        {
            relationshipName: 'Product_Views__r',
            label: 'Product Views',
            fields: [
                'Id',
                'Date_Time__c',
                'Viewer_Company__c'
            ],
            maxRows: 10,
            visibleForRoles: [
                'admin',
                'staff'
            ]
        }
    ],
    relatedListTabGroups: [
        {
            id: 'sales',
            label: 'Sales',
            relationshipNames: [
                'Material_Proposals__r',
                'Aktuelle_Preise_und_Verf_gbarkeiten__r',
                'Projekte__r',
                'Product_Views__r'
            ],
            isDefault: true
        },
        {
            id: 'operations',
            label: 'Operations',
            relationshipNames: [
                'Auftr_ge__r',
                'Sample_Sendings__r',
                'Kundenvorg_nge__r'
            ]
        },
        {
            id: 'quality',
            label: 'Quality',
            relationshipNames: [
                'Monitored_Materials__r',
                'Materialanalysen__r',
                'Feedbacks__r'
            ]
        },
        {
            id: 'verlauf_dateien',
            label: 'Verlauf & Dateien',
            relationshipNames: [
                'Status_Updates__r',
                'AttachedContentDocuments'
            ]
        }
    ],
    systemFields: [
        'Id',
        'CreatedDate',
        'CreatedById',
        'LastModifiedDate',
        'LastModifiedById'
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/config/entityFields/Produktionsstandort.fields.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// CURATED — do not regenerate (--force) without re-applying the lean rules in LEAN-CURATION.md
/**
 * Entity Field Configuration: Produktionsstandort__c (lean staff view)
 *
 * Curated against GitLab #200 §7.1. Cross-check added the geo coordinates
 * PStandort_lat__c / PStandort_long__c. Drop the System field section
 * (-> systemFields); add the Dateien related list. 3 flat sections.
 */ __turbopack_context__.s([
    "ProduktionsstandortFieldConfig",
    ()=>ProduktionsstandortFieldConfig
]);
const ProduktionsstandortFieldConfig = {
    entityType: 'Produktionsstandort__c',
    entityLabel: 'Produktionsstandort',
    headerFields: [
        'Name',
        'Account__c',
        'Ist_plastship_Lager__c',
        'Ort__c'
    ],
    sections: [
        {
            id: 'standort',
            label: 'Standort',
            columns: 2,
            fields: [
                {
                    apiName: 'Name',
                    label: 'Standort-Name',
                    fieldType: 'text',
                    required: true
                },
                {
                    apiName: 'Account__c',
                    label: 'Account',
                    fieldType: 'lookup',
                    lookupObjectType: 'Account',
                    required: true,
                    readOnlyOnEdit: true // #404: createable, not updateable in SF
                },
                {
                    apiName: 'Ist_plastship_Lager__c',
                    label: 'Ist plastship-Lager',
                    fieldType: 'boolean'
                },
                {
                    apiName: 'Strasse__c',
                    label: 'Straße',
                    fieldType: 'text'
                },
                {
                    apiName: 'Strasse_Nummer__c',
                    label: 'Hausnummer',
                    fieldType: 'text'
                },
                {
                    apiName: 'PLZ__c',
                    label: 'PLZ',
                    fieldType: 'text'
                },
                {
                    apiName: 'Ort__c',
                    label: 'Ort',
                    fieldType: 'text'
                },
                {
                    apiName: 'Land__c',
                    label: 'Land',
                    fieldType: 'text'
                },
                {
                    apiName: 'PStandort_lat__c',
                    label: 'Breitengrad',
                    fieldType: 'text'
                },
                {
                    apiName: 'PStandort_long__c',
                    label: 'Längengrad',
                    fieldType: 'text'
                }
            ]
        },
        {
            id: 'lager_kosten',
            label: 'Lager & Kosten',
            columns: 2,
            fields: [
                {
                    apiName: 'Lagerkapazit_t_zugesagt__c',
                    label: 'Lagerkapazität zugesagt',
                    fieldType: 'number'
                },
                {
                    apiName: 'Lagermenge_Gesamt__c',
                    label: 'Lagermenge Gesamt',
                    fieldType: 'number',
                    readOnly: true
                },
                {
                    apiName: 'Anzahl_WL_Eintr_ge__c',
                    label: 'Anzahl WL-Einträge',
                    fieldType: 'number',
                    readOnly: true
                },
                {
                    apiName: 'Kosten_pro_Stellplatz_pro_Monat__c',
                    label: 'Kosten pro Stellplatz / Monat',
                    fieldType: 'currency',
                    currencyCode: 'EUR'
                },
                {
                    apiName: 'Kosten_Ein_Auslagerung_pauschal__c',
                    label: 'Kosten Ein-/Auslagerung pauschal',
                    fieldType: 'currency',
                    currencyCode: 'EUR'
                },
                {
                    apiName: 'Aktuelle_Monatskosten_Bestand__c',
                    label: 'Aktuelle Monatskosten Bestand',
                    fieldType: 'currency',
                    currencyCode: 'EUR',
                    readOnly: true
                }
            ]
        },
        {
            id: 'kontakt_logistik',
            label: 'Kontakt & Logistik',
            columns: 2,
            fields: [
                {
                    apiName: 'Verantwortlicher_Lieferung__c',
                    label: 'Verantwortlicher Lieferung',
                    fieldType: 'lookup',
                    lookupObjectType: 'Contact'
                },
                {
                    apiName: 'Delivery_Times__c',
                    label: 'Lieferzeiten',
                    fieldType: 'textarea'
                },
                {
                    apiName: 'Ust_ID__c',
                    label: 'USt-ID',
                    fieldType: 'text'
                }
            ]
        }
    ],
    relatedLists: [
        {
            relationshipName: 'Warenlager__r',
            label: 'Warenlager',
            fields: [
                'Id',
                'Name',
                'Produktcode__c',
                'Produktname__c',
                'Aktueller_Bestand__c',
                'Verf_gbare_Menge_t__c',
                'Meldebestand__c'
            ],
            maxRows: 10,
            visibleForRoles: [
                'admin',
                'staff',
                'agent'
            ],
            // #1248: a0h steht jetzt in der Präfix-Registry — ohne diese Sperre
            // bekäme die befüllte Liste einen Anlegen-Knopf ohne Formular.
            showCreateButton: false
        },
        {
            relationshipName: 'AttachedContentDocuments',
            label: 'Dateien',
            fields: [
                'Id',
                'Title'
            ],
            maxRows: 10,
            visibleForRoles: [
                'admin',
                'staff',
                'agent'
            ]
        }
    ],
    systemFields: [
        'Id',
        'CreatedDate',
        'CreatedById',
        'LastModifiedDate',
        'LastModifiedById'
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/config/entityFields/Projekt.fields.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// CURATED — do not regenerate (--force) without re-applying the lean rules in LEAN-CURATION.md
/**
 * Entity Field Configuration: Projekt__c (lean staff view)
 *
 * Not covered by GitLab #200 — curated from the existing config + workflow context.
 * Cross-check against SF surfaced two single lookups missing from the config,
 * Produkt__c and Bedarfe__c (the project's central product / requirement when a
 * project revolves around a specific case) — added in "Kunden & Lieferanten".
 *
 * Dropped: the System field section (rendered via systemFields), Duplicate_Of__c,
 * and the legacy Feedbacks / Opportunities related lists + RecordAccessGrants.
 *
 * #359: rigk-Sicht kuratiert — Kernfelder (Name/Typ/Status/Priorität/Inhaber)
 * ungegated, interne Qualifizierung + Verknüpfungen/Details staff-only;
 * createSections für Kundenrollen; Related-Lists: Milestones/MPs/Verträge
 * (ohne DB-Betrag) für rigk read-only, Status-Updates via Timeline-Aside.
 */ __turbopack_context__.s([
    "ProjektFieldConfig",
    ()=>ProjektFieldConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$sfPicklist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/entityFields/sfPicklist.ts [app-client] (ecmascript)");
;
const ProjektFieldConfig = {
    entityType: 'Projekt__c',
    entityLabel: 'Projekt',
    headerFields: [
        'Name',
        'Projekttyp__c',
        'Status__c',
        'Projektpriorit_t__c',
        'OwnerId'
    ],
    sections: [
        {
            id: 'projektqualifizierung',
            label: 'Projektqualifizierung',
            columns: 2,
            fields: [
                {
                    apiName: 'Name',
                    label: 'Projekt-Name',
                    fieldType: 'text',
                    required: true
                },
                {
                    apiName: 'Projekttyp__c',
                    label: 'Projekttyp',
                    fieldType: 'picklist',
                    required: true,
                    picklistOptions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$sfPicklist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfPicklist"])()([
                        {
                            label: 'Entwicklung Stoffstrom',
                            value: 'Entwicklung Stoffstrom'
                        },
                        {
                            label: 'Materialvermarktung',
                            value: 'Materialvermarktung'
                        },
                        {
                            label: 'Materialbeschaffung',
                            value: 'Materialbeschaffung'
                        },
                        {
                            label: 'Kooperationsprojekt',
                            value: 'Kooperationsprojekt'
                        },
                        {
                            label: 'Beratung',
                            value: 'Beratung'
                        },
                        {
                            label: 'Vermarktung & Beschaffung',
                            value: 'Vermarktung & Beschaffung'
                        },
                        {
                            label: 'Additive',
                            value: 'Additive'
                        },
                        {
                            label: 'Maschinen / Technologie',
                            value: 'Maschinen / Technologie'
                        },
                        {
                            label: 'Materialanalyse',
                            value: 'Materialanalyse'
                        },
                        {
                            label: 'Closed-Loop',
                            value: 'Closed-Loop'
                        },
                        {
                            label: 'Werksentsorgung',
                            value: 'Werksentsorgung'
                        }
                    ])
                },
                {
                    apiName: 'Status__c',
                    label: 'Status',
                    fieldType: 'picklist',
                    required: true,
                    picklistOptions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$sfPicklist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfPicklist"])()([
                        {
                            label: 'Aktiv',
                            value: 'Aktiv'
                        },
                        {
                            label: 'Inaktiv',
                            value: 'Inaktiv'
                        },
                        {
                            label: 'Pausiert',
                            value: 'Pausiert'
                        }
                    ])
                },
                {
                    apiName: 'Projektpriorit_t__c',
                    label: 'Projektpriorität',
                    fieldType: 'picklist',
                    picklistOptions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$sfPicklist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfPicklist"])()([
                        {
                            label: 'A+',
                            value: 'A+'
                        },
                        {
                            label: 'A',
                            value: 'A'
                        },
                        {
                            label: 'B',
                            value: 'B'
                        },
                        {
                            label: 'C',
                            value: 'C'
                        },
                        {
                            label: 'D',
                            value: 'D'
                        }
                    ])
                },
                {
                    apiName: 'OwnerId',
                    label: 'Inhaber',
                    fieldType: 'lookup',
                    lookupObjectType: 'User'
                },
                // #359: interne Qualifizierung (Fokus/Termine/Bewertung/Industry) bleibt
                // intern — rigk sieht die PM-bestätigte Kernliste (Name/Typ/Status/
                // Priorität/Inhaber) oben ungegated.
                {
                    apiName: 'IST_Fokusprojekt__c',
                    label: 'IST Fokusprojekt',
                    fieldType: 'boolean',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent'
                    ],
                    readOnly: true // #404: formula field — not client-writable
                },
                {
                    apiName: 'Fokusprojekt_bis__c',
                    label: 'Fokusprojekt bis',
                    fieldType: 'date',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent'
                    ]
                },
                {
                    apiName: 'Projektdeadline__c',
                    label: 'Projektdeadline',
                    fieldType: 'date',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent'
                    ]
                },
                {
                    apiName: 'Projektwiedervorlage__c',
                    label: 'Projektwiedervorlage',
                    fieldType: 'date',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent'
                    ]
                },
                {
                    apiName: 'Potenzialabsch_tzung__c',
                    label: 'Potenzialabschätzung',
                    fieldType: 'picklist',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent'
                    ],
                    picklistOptions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$sfPicklist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfPicklist"])()([
                        {
                            label: 'Extrem hoch',
                            value: 'Extrem hoch'
                        },
                        {
                            label: 'Hoch',
                            value: 'Hoch'
                        },
                        {
                            label: 'Mittel',
                            value: 'Mittel'
                        },
                        {
                            label: 'Niedrig',
                            value: 'Niedrig'
                        },
                        {
                            label: 'Extrem niedrig',
                            value: 'Extrem niedrig'
                        }
                    ])
                },
                {
                    apiName: 'Risikoabsch_tzung__c',
                    label: 'Risikoabschätzung',
                    fieldType: 'picklist',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent'
                    ],
                    picklistOptions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$sfPicklist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfPicklist"])()([
                        {
                            label: 'Extrem hoch',
                            value: 'Extrem hoch'
                        },
                        {
                            label: 'Hoch',
                            value: 'Hoch'
                        },
                        {
                            label: 'Mittelmäßig',
                            value: 'Mittelmäßig'
                        },
                        {
                            label: 'Niedrig',
                            value: 'Niedrig'
                        },
                        {
                            label: 'Extrem niedrig',
                            value: 'Extrem niedrig'
                        }
                    ])
                },
                {
                    apiName: 'Begr_ndung_der_Bewertung__c',
                    label: 'Begründung der Bewertung',
                    fieldType: 'textarea',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent'
                    ]
                },
                {
                    apiName: 'Industry__c',
                    label: 'Industry',
                    fieldType: 'picklist',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent'
                    ],
                    picklistOptions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$sfPicklist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfPicklist"])()([
                        {
                            label: 'Waste sorting',
                            value: 'Waste sorting'
                        },
                        {
                            label: 'Waste provision',
                            value: 'Waste provision'
                        },
                        {
                            label: 'Recycling',
                            value: 'Recycling'
                        },
                        {
                            label: 'Compounding',
                            value: 'Compounding'
                        },
                        {
                            label: 'Trading',
                            value: 'Trading'
                        },
                        {
                            label: 'Plastics conversion',
                            value: 'Plastics conversion'
                        },
                        {
                            label: 'Virgin material production',
                            value: 'Virgin material production'
                        },
                        {
                            label: 'Agriculture',
                            value: 'Agriculture'
                        },
                        {
                            label: 'Chemicals',
                            value: 'Chemicals'
                        },
                        {
                            label: 'Communications',
                            value: 'Communications'
                        },
                        {
                            label: 'Consulting',
                            value: 'Consulting'
                        },
                        {
                            label: 'Cosmetics',
                            value: 'Cosmetics'
                        },
                        {
                            label: 'Education',
                            value: 'Education'
                        },
                        {
                            label: 'Electronics',
                            value: 'Electronics'
                        },
                        {
                            label: 'Finance',
                            value: 'Finance'
                        },
                        {
                            label: 'Food & Beverage',
                            value: 'Food & Beverage'
                        },
                        {
                            label: 'Government',
                            value: 'Government'
                        },
                        {
                            label: 'Insurance',
                            value: 'Insurance'
                        },
                        {
                            label: 'Machinery',
                            value: 'Machinery'
                        },
                        {
                            label: 'Media',
                            value: 'Media'
                        },
                        {
                            label: 'Not For Profit',
                            value: 'Not For Profit'
                        },
                        {
                            label: 'Other',
                            value: 'Other'
                        },
                        {
                            label: 'Retail',
                            value: 'Retail'
                        },
                        {
                            label: 'Telecommunications',
                            value: 'Telecommunications'
                        },
                        {
                            label: 'Transportation',
                            value: 'Transportation'
                        },
                        {
                            label: 'Additives',
                            value: 'Additives'
                        },
                        {
                            label: 'Automotive',
                            value: 'Automotive'
                        },
                        {
                            label: 'Household',
                            value: 'Household'
                        }
                    ])
                }
            ]
        },
        {
            id: 'kunden_lieferanten',
            label: 'Kunden & Lieferanten',
            columns: 2,
            // #359: die Account-/Prozess-Verknüpfungen pflegt staff; rigk arbeitet
            // account-scoped über das RIGK-Modul (Verknüpfung wird dort back-gefüllt).
            visibleForRoles: [
                'admin',
                'staff',
                'agent'
            ],
            fields: [
                {
                    apiName: 'Hauptkunde__c',
                    label: 'Hauptkunde',
                    fieldType: 'lookup',
                    lookupObjectType: 'Account'
                },
                {
                    apiName: 'Hauptlieferant__c',
                    label: 'Hauptlieferant',
                    fieldType: 'lookup',
                    lookupObjectType: 'Account'
                },
                {
                    apiName: 'Lohndienstleister__c',
                    label: 'Lohndienstleister',
                    fieldType: 'lookup',
                    lookupObjectType: 'Account'
                },
                {
                    apiName: 'Kundenvorgang__c',
                    label: 'Kundenvorgang',
                    fieldType: 'lookup',
                    lookupObjectType: 'Case'
                },
                {
                    apiName: 'Loading_Site__c',
                    label: 'Ladestelle',
                    fieldType: 'lookup',
                    lookupObjectType: 'Produktionsstandort__c'
                },
                {
                    apiName: 'Emptying_Site__c',
                    label: 'Entladestelle',
                    fieldType: 'lookup',
                    lookupObjectType: 'Produktionsstandort__c'
                },
                {
                    apiName: 'Produkt__c',
                    label: 'Produkt (Hauptbezug)',
                    fieldType: 'lookup',
                    lookupObjectType: 'Product2'
                },
                {
                    apiName: 'Bedarfe__c',
                    label: 'Bedarf (Hauptbezug)',
                    fieldType: 'lookup',
                    lookupObjectType: 'Bedarfe__c'
                }
            ]
        },
        {
            id: 'details',
            label: 'Details',
            columns: 2,
            visibleForRoles: [
                'admin',
                'staff',
                'agent'
            ],
            fields: [
                {
                    // Restricted Picklist — per SF-describe abgeglichen (2026-07-07),
                    // gleiche Drift wie Bedarfe.Anwendung__c (alte Werte wie 'Building
                    // and Construction'/'Others'/'Tubes' existieren nicht mehr).
                    apiName: 'Anwendungsgebiet__c',
                    label: 'Anwendungsgebiet',
                    fieldType: 'picklist',
                    picklistOptions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$sfPicklist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfPicklist"])()([
                        {
                            label: 'Automotive',
                            value: 'Automotive'
                        },
                        {
                            label: 'Building & Construction',
                            value: 'Building & Construction'
                        },
                        {
                            label: 'Packaging: Food',
                            value: 'Packaging: Food'
                        },
                        {
                            label: 'Packaging: Industrial',
                            value: 'Packaging: Industrial'
                        },
                        {
                            label: 'Packaging: Rigid',
                            value: 'Packaging: Rigid'
                        },
                        {
                            label: 'Packaging: Flexible',
                            value: 'Packaging: Flexible'
                        },
                        {
                            label: 'Packaging: Cosmetics',
                            value: 'Packaging: Cosmetics'
                        },
                        {
                            label: 'Electrical & Electronics',
                            value: 'Electrical & Electronics'
                        },
                        {
                            label: 'Household & Consumer Goods',
                            value: 'Household & Consumer Goods'
                        },
                        {
                            label: 'Agriculture',
                            value: 'Agriculture'
                        },
                        {
                            label: 'Medical',
                            value: 'Medical'
                        },
                        {
                            label: 'Pipes & Tubes',
                            value: 'Pipes'
                        },
                        {
                            label: 'Wire & Cable',
                            value: 'Wire & Cable'
                        },
                        {
                            label: 'Fibers',
                            value: 'Fibers'
                        },
                        {
                            label: 'Specialty',
                            value: 'Specialty'
                        },
                        {
                            label: 'General / Other',
                            value: 'General / Other'
                        },
                        {
                            label: 'Films',
                            value: 'Films'
                        },
                        {
                            label: 'Furniture',
                            value: 'Furniture'
                        },
                        {
                            label: 'Waste (PCR)',
                            value: 'Waste (PCR)'
                        },
                        {
                            label: 'Waste (PIR)',
                            value: 'Waste (PIR)'
                        },
                        {
                            label: 'Regrind',
                            value: 'Regrind'
                        },
                        {
                            label: 'Agglomerates',
                            value: 'Agglomerates'
                        },
                        {
                            label: 'Re-granulates',
                            value: 'Re-granulates'
                        },
                        {
                            label: 'Compounds',
                            value: 'Compounds'
                        }
                    ])
                },
                {
                    apiName: 'Beschreibung__c',
                    label: 'Beschreibung',
                    fieldType: 'textarea'
                },
                {
                    apiName: 'Angebotstext__c',
                    label: 'Angebotstext',
                    fieldType: 'textarea'
                }
            ]
        }
    ],
    // #359: Create-Override für Kundenrollen (#346-Mechanik) — rigk legt Projekte
    // über das RIGK-Modul an (Account-Verknüpfung wird server-seitig back-gefüllt),
    // die Maske führt nur die PM-bestätigte Kernliste.
    createSections: [
        {
            id: 'projekt_create',
            label: 'Projekt',
            columns: 2,
            fields: [
                {
                    apiName: 'Name',
                    label: 'Projekt-Name',
                    fieldType: 'text',
                    required: true
                },
                {
                    apiName: 'Projekttyp__c',
                    label: 'Projekttyp',
                    fieldType: 'picklist',
                    picklistOptions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$sfPicklist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfPicklist"])()([
                        {
                            label: 'Entwicklung Stoffstrom',
                            value: 'Entwicklung Stoffstrom'
                        },
                        {
                            label: 'Materialvermarktung',
                            value: 'Materialvermarktung'
                        },
                        {
                            label: 'Materialbeschaffung',
                            value: 'Materialbeschaffung'
                        },
                        {
                            label: 'Kooperationsprojekt',
                            value: 'Kooperationsprojekt'
                        },
                        {
                            label: 'Beratung',
                            value: 'Beratung'
                        },
                        {
                            label: 'Vermarktung & Beschaffung',
                            value: 'Vermarktung & Beschaffung'
                        },
                        {
                            label: 'Additive',
                            value: 'Additive'
                        },
                        {
                            label: 'Maschinen / Technologie',
                            value: 'Maschinen / Technologie'
                        },
                        {
                            label: 'Materialanalyse',
                            value: 'Materialanalyse'
                        },
                        {
                            label: 'Closed-Loop',
                            value: 'Closed-Loop'
                        },
                        {
                            label: 'Werksentsorgung',
                            value: 'Werksentsorgung'
                        }
                    ])
                },
                {
                    apiName: 'Status__c',
                    label: 'Status',
                    fieldType: 'picklist',
                    required: true,
                    picklistOptions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$sfPicklist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfPicklist"])()([
                        {
                            label: 'Aktiv',
                            value: 'Aktiv'
                        },
                        {
                            label: 'Inaktiv',
                            value: 'Inaktiv'
                        },
                        {
                            label: 'Pausiert',
                            value: 'Pausiert'
                        }
                    ])
                },
                {
                    apiName: 'Projektpriorit_t__c',
                    label: 'Projektpriorität',
                    fieldType: 'picklist',
                    picklistOptions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$sfPicklist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfPicklist"])()([
                        {
                            label: 'A+',
                            value: 'A+'
                        },
                        {
                            label: 'A',
                            value: 'A'
                        },
                        {
                            label: 'B',
                            value: 'B'
                        },
                        {
                            label: 'C',
                            value: 'C'
                        },
                        {
                            label: 'D',
                            value: 'D'
                        }
                    ])
                }
            ]
        }
    ],
    relatedLists: [
        {
            // #359: rigk sieht Milestones read-only (Related-List-Tabellen sind für
            // Kundenrollen ohnehin create-los, EntityDetailLayout hideCreateButton).
            relationshipName: 'Projektmilestones__r',
            label: 'Projektmilestones',
            fields: [
                'Id',
                'Name',
                'Ziel__c',
                'Zust_ndig__c',
                'Deadline__c',
                'Datum_Abschluss__c',
                'Kommentar__c'
            ],
            maxRows: 10,
            visibleForRoles: [
                'admin',
                'staff',
                'agent',
                'rigk'
            ]
        },
        {
            relationshipName: 'Bedarfe__r',
            label: 'Bedarfe',
            fields: [
                'Id',
                'Name',
                'Account__c',
                'Bedarfsstatus__c',
                'Hauptpolymer__c',
                'Materialtyp__c'
            ],
            maxRows: 10,
            visibleForRoles: [
                'admin',
                'staff',
                'agent'
            ]
        },
        {
            relationshipName: 'Produkte__r',
            label: 'Produkte',
            fields: [
                'Id',
                'Name',
                'ProductCode',
                'Account__c',
                'Main_polymer__c',
                'Material_type__c'
            ],
            maxRows: 10,
            visibleForRoles: [
                'admin',
                'staff',
                'agent'
            ]
        },
        {
            relationshipName: 'Material_Proposals__r',
            label: 'Material Proposals',
            // #359: rigk read-only mit dabei — Feldliste ist preis-frei (kein
            // Einkaufs-/Verkaufspreis), daher keine eigene Kunden-Variante nötig.
            fields: [
                'Id',
                'Name',
                'Product_Code__c',
                'Date__c',
                'Status__c',
                'Account__c'
            ],
            maxRows: 10,
            // #453/#417 AB 2026-08-28: Projekt-Zuordnung ist fast immer nachtraeglich
            addExisting: {
                childLookupField: 'Projekt__c',
                unlinkable: true
            },
            visibleForRoles: [
                'admin',
                'staff',
                'agent',
                'rigk'
            ]
        },
        {
            relationshipName: 'Sample_Sendings__r',
            label: 'Sample Sendings',
            fields: [
                'Id',
                'Name',
                'Status__c',
                'Deliver_to__c'
            ],
            maxRows: 10,
            visibleForRoles: [
                'admin',
                'staff',
                'agent'
            ]
        },
        {
            relationshipName: 'Auftr_ge__r',
            label: 'Aufträge',
            // #1809: Order.Name ist meist leer — OrderNumber ist der Titel
            fields: [
                'Id',
                'OrderNumber',
                'Status',
                'TotalAmount',
                'DB_plastship__c'
            ],
            maxRows: 10,
            // #453/#417 AB 2026-08-28: bestehende Auftraege dem Projekt zuordnen
            addExisting: {
                childLookupField: 'Projekt__c',
                unlinkable: true
            },
            visibleForRoles: [
                'admin',
                'staff'
            ]
        },
        {
            relationshipName: 'Vertr_ge__r',
            label: 'Verträge',
            fields: [
                'Id',
                'Name',
                'Anzahl_Autr_ge__c',
                'Status',
                'StartDate',
                'EndDate',
                'Betrag_DB__c'
            ],
            maxRows: 10,
            visibleForRoles: [
                'admin',
                'staff',
                'agent'
            ]
        },
        {
            // #359: rigk-Variante ohne Betrag_DB__c (Deckungsbeitrag ist intern).
            // Disjunkte Rollen zur staff-Variante oben (Subquery-Builder filtert
            // pro Rolle, sonst doppelte Subquery — Muster wie Bedarfe→MP, #329).
            relationshipName: 'Vertr_ge__r',
            label: 'Verträge',
            fields: [
                'Id',
                'Name',
                'Anzahl_Autr_ge__c',
                'Status',
                'StartDate',
                'EndDate'
            ],
            maxRows: 10,
            visibleForRoles: [
                'rigk'
            ]
        },
        {
            relationshipName: 'Status_Updates__r',
            label: 'Status Updates',
            fields: [
                'Id',
                'OwnerId',
                'Update_Type__c',
                'Meeting_DateTime__c',
                'CreatedById',
                'Body__c',
                'Next_Steps__c'
            ],
            maxRows: 10,
            visibleForRoles: [
                'admin',
                'staff',
                'agent'
            ]
        },
        {
            // #826: Aufgaben am Datensatz — Zeile öffnet die Aufgabe im Drawer
            relationshipName: 'Tasks',
            label: 'Aufgaben',
            fields: [
                'Id',
                'Subject',
                'Owner.Alias',
                'ActivityDate',
                'Status',
                'Priority'
            ],
            maxRows: 10,
            visibleForRoles: [
                'admin',
                'staff',
                'agent'
            ]
        },
        {
            relationshipName: 'Feedbacks__r',
            label: 'Prozessfeedback',
            fields: [
                'Id',
                'Name',
                'CreatedDate',
                'Status__c',
                'Current_State_Evaluation__c',
                'Description__c'
            ],
            maxRows: 10,
            // #359 (PM): Prozessfeedback (CAPA) ist nichts für Kundenrollen —
            // rigk sieht am Projekt nur Milestones/MPs/Verträge (+ Status-Updates
            // via Timeline-Aside).
            visibleForRoles: [
                'admin',
                'staff',
                'agent'
            ]
        },
        {
            relationshipName: 'AttachedContentDocuments',
            label: 'Dateien',
            fields: [
                'Id',
                'Title'
            ],
            maxRows: 10,
            visibleForRoles: [
                'admin',
                'staff',
                'agent'
            ]
        }
    ],
    relatedListTabGroups: [
        {
            id: 'projekt',
            label: 'Projekt',
            relationshipNames: [
                'Projektmilestones__r',
                'Bedarfe__r',
                'Produkte__r',
                'Material_Proposals__r',
                'Sample_Sendings__r',
                'Auftr_ge__r',
                'Vertr_ge__r'
            ],
            isDefault: true
        },
        {
            id: 'aktivitaet_dateien',
            label: 'Aktivität & Dateien',
            relationshipNames: [
                'Status_Updates__r',
                'AttachedContentDocuments',
                'Feedbacks__r'
            ]
        }
    ],
    systemFields: [
        'Id',
        'CreatedDate',
        'CreatedById',
        'LastModifiedDate',
        'LastModifiedById',
        'OwnerId'
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/config/entityFields/Prozessfeedback.fields.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Entity Field Configuration: Prozessfeedback__c (#384)
 * Abweichungen/Verbesserungen (CAPA, ISO 9001 §10). Fields derived from
 * src/types/salesforce/Prozessfeedback__c.ts; Feldauswahl kuratiert nach
 * NCR-01/CAPA-01 (Kurationsstand mit AB abstimmbar).
 */ __turbopack_context__.s([
    "ProzessfeedbackFieldConfig",
    ()=>ProzessfeedbackFieldConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$sfPicklist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/entityFields/sfPicklist.ts [app-client] (ecmascript)");
;
const ProzessfeedbackFieldConfig = {
    entityType: 'Prozessfeedback__c',
    entityLabel: 'Prozessfeedback',
    headerFields: [
        'Name'
    ],
    sections: [
        {
            id: 'grunddaten',
            label: 'Grunddaten',
            fields: [
                {
                    apiName: 'Name',
                    label: 'Feedback-Name',
                    fieldType: 'text',
                    readOnly: true // auto-number — not client-writable
                },
                {
                    apiName: 'Feedback_Origin__c',
                    label: 'Feedback-Ursprung',
                    fieldType: 'picklist',
                    picklistOptions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$sfPicklist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfPicklist"])()([
                        {
                            label: 'Kunde',
                            value: 'Kunde'
                        },
                        {
                            label: 'User',
                            value: 'User'
                        },
                        {
                            label: 'Mitarbeiter',
                            value: 'Mitarbeiter'
                        },
                        {
                            label: 'Kundenbefragung',
                            value: 'Kundenbefragung'
                        },
                        {
                            label: 'Management-Review-Maßnahme',
                            value: 'Management‑Review‑Maßnahme'
                        },
                        {
                            label: 'Project Evaluation',
                            value: 'Project Evaluation'
                        },
                        {
                            label: 'Externes Audit',
                            value: 'Externes Audit'
                        }
                    ])
                },
                {
                    apiName: 'Feedback_Related_To__c',
                    label: 'Feedback betrifft',
                    fieldType: 'picklist',
                    picklistOptions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$sfPicklist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfPicklist"])()([
                        {
                            label: 'New Business Idea',
                            value: 'New Business Idea'
                        },
                        {
                            label: 'Process Evaluation / Improvement Potential',
                            value: 'Process Evaluation / Improvement Potential'
                        },
                        {
                            label: 'Automation Potential / Technical Improvement',
                            value: 'Automation Potential / Technical Improvement'
                        },
                        {
                            label: 'Communication Quality',
                            value: 'Communication Quality'
                        },
                        {
                            label: 'Service Quality',
                            value: 'Service Quality'
                        },
                        {
                            label: 'Delivery Quality',
                            value: 'Delivery Quality'
                        },
                        {
                            label: 'Data Update Needed',
                            value: 'Data Update Needed'
                        }
                    ])
                },
                {
                    apiName: 'Current_State_Evaluation__c',
                    label: 'Bewertung Ist-Zustand',
                    fieldType: 'picklist',
                    picklistOptions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$sfPicklist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfPicklist"])()([
                        {
                            label: 'Best Practice',
                            value: 'Best Practice'
                        },
                        {
                            label: 'Exceeds Expectations',
                            value: 'Exceeds Expectations'
                        },
                        {
                            label: 'Meets Expectations',
                            value: 'Meets Expectations'
                        },
                        {
                            label: 'Needs Improvement',
                            value: 'Needs Improvement'
                        },
                        {
                            label: 'Failing / Not Fit for Purpose',
                            value: 'Failing / Not Fit for Purpose'
                        }
                    ])
                },
                {
                    apiName: 'Status__c',
                    label: 'Status',
                    fieldType: 'picklist',
                    picklistOptions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$sfPicklist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfPicklist"])()([
                        {
                            label: 'in Erstellung',
                            value: 'in Erstellung'
                        },
                        {
                            label: 'Ursachenanalyse erwartet',
                            value: 'Ursachenanalyse erwartet'
                        },
                        {
                            label: 'Evaluierung und Implementierung erwartet',
                            value: 'Evaluierung und Implementierung erwartet'
                        },
                        {
                            label: 'Umsetzung weitere Maßnahmen erwartet',
                            value: 'Umsetzung weitere Maßnahmen erwartet'
                        },
                        {
                            label: 'Nacharbeit Ursachenanalyse erwartet',
                            value: 'Nacharbeit Ursachenanalyse erwartet'
                        },
                        {
                            label: 'Nacharbeit Evaluierung und Implementierung erwartet',
                            value: 'Nacharbeit Evaluierung und Implementierung erwartet'
                        },
                        {
                            label: 'Nacharbeit weitere Maßnahmen erwartet',
                            value: 'Nacharbeit weitere Maßnahmen erwartet'
                        },
                        {
                            label: 'Abgeschlossen',
                            value: 'Abgeschlossen'
                        },
                        {
                            label: 'Abgebrochen / keine Abweichung',
                            value: 'Abgebrochen / keine Abweichung'
                        }
                    ])
                },
                {
                    apiName: 'Description__c',
                    label: 'Beschreibung',
                    fieldType: 'textarea'
                }
            ]
        },
        {
            id: 'ursachenanalyse',
            label: 'Ursachenanalyse',
            fields: [
                {
                    apiName: 'X5_Why__c',
                    label: '5 Why',
                    fieldType: 'textarea'
                },
                {
                    apiName: 'Core_Reason__c',
                    label: 'Kernursache',
                    fieldType: 'textarea'
                },
                {
                    apiName: 'Zust_ndig_f_r_Ursachenanalyse__c',
                    label: 'Zuständig für Ursachenanalyse',
                    fieldType: 'lookup',
                    lookupObjectType: 'User'
                },
                {
                    apiName: 'Ursachenanalyse_durchgef_hrt__c',
                    label: 'Ursachenanalyse durchgeführt',
                    fieldType: 'boolean'
                },
                {
                    apiName: 'Gleiche_Ursache_wie__c',
                    label: 'Gleiche Ursache wie',
                    fieldType: 'lookup',
                    lookupObjectType: 'Prozessfeedback__c'
                },
                {
                    apiName: 'Gleiche_L_sung_wie__c',
                    label: 'Gleiche Lösung wie',
                    fieldType: 'lookup',
                    lookupObjectType: 'Prozessfeedback__c'
                }
            ]
        },
        {
            id: 'bewertung-umsetzung',
            label: 'Bewertung & Umsetzung (Admin)',
            fields: [
                {
                    apiName: 'Evaluation_of_Impact_by_Admin__c',
                    label: 'Bewertung Impact',
                    fieldType: 'picklist',
                    picklistOptions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$sfPicklist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfPicklist"])()([
                        {
                            label: 'High',
                            value: 'High'
                        },
                        // SF-Picklist trägt den Tippfehler 'MIddle' als API-Wert
                        {
                            label: 'Middle',
                            value: 'MIddle'
                        },
                        {
                            label: 'Low',
                            value: 'Low'
                        }
                    ])
                },
                {
                    apiName: 'Evaluation_of_Effort_by_Admin__c',
                    label: 'Bewertung Aufwand',
                    fieldType: 'picklist',
                    picklistOptions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$sfPicklist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfPicklist"])()([
                        {
                            label: 'High',
                            value: 'High'
                        },
                        {
                            label: 'Middle',
                            value: 'Middle'
                        },
                        {
                            label: 'Low',
                            value: 'Low'
                        }
                    ])
                },
                {
                    apiName: 'Implementation_Priority_Set__c',
                    label: 'Umsetzungs-Priorität',
                    fieldType: 'picklist',
                    picklistOptions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$sfPicklist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfPicklist"])()([
                        {
                            label: 'High',
                            value: 'High'
                        },
                        {
                            label: 'Middle',
                            value: 'Middle'
                        },
                        {
                            label: 'Low',
                            value: 'Low'
                        }
                    ])
                },
                {
                    apiName: 'Implementation_Type__c',
                    label: 'Umsetzungs-Typ',
                    fieldType: 'picklist',
                    picklistOptions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$sfPicklist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfPicklist"])()([
                        {
                            label: 'Salesforce Function Update',
                            value: 'Salesforce Function Update'
                        },
                        {
                            label: 'Platform Function Update',
                            value: 'Platform Function Update'
                        },
                        {
                            label: 'QM Document Update',
                            value: 'QM Document Update'
                        },
                        {
                            label: 'Subsequent performance by employees',
                            value: 'Subsequent performance by employees'
                        },
                        {
                            label: 'No Action needed',
                            value: 'No Action needed'
                        },
                        {
                            label: 'Other',
                            value: 'Other'
                        }
                    ])
                },
                {
                    apiName: 'Implementation_Deadline_Set_by_Admin__c',
                    label: 'Umsetzungs-Deadline',
                    fieldType: 'date'
                },
                {
                    apiName: 'Dscription_of_Implementation__c',
                    label: 'Beschreibung der Umsetzung',
                    fieldType: 'textarea'
                },
                {
                    apiName: 'Ready_for_Implementation__c',
                    label: 'Bereit zur Umsetzung',
                    fieldType: 'boolean'
                },
                {
                    apiName: 'Implementation_Success_Date__c',
                    label: 'Umsetzung erfolgreich am',
                    fieldType: 'date'
                }
            ]
        },
        {
            id: 'massnahmen',
            label: 'Weitere Maßnahmen',
            fields: [
                {
                    apiName: 'Further_Measures__c',
                    label: 'Weitere Maßnahmen',
                    fieldType: 'textarea'
                },
                {
                    apiName: 'Further_Measures_Expected_by__c',
                    label: 'Erwartet von',
                    fieldType: 'text'
                },
                {
                    apiName: 'Further_Measures_Deadline__c',
                    label: 'Maßnahmen-Deadline',
                    fieldType: 'date'
                },
                {
                    apiName: 'Further_Measures_Success_Date__c',
                    label: 'Maßnahmen erfolgreich am',
                    fieldType: 'date'
                },
                {
                    apiName: 'Further_Measures_Success_Category__c',
                    label: 'Maßnahmen-Ergebnis',
                    fieldType: 'picklist',
                    picklistOptions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$sfPicklist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfPicklist"])()([
                        {
                            label: 'Exceeds Expectations',
                            value: 'Exceeds Expectations'
                        },
                        {
                            label: 'Meets Expectations',
                            value: 'Meets Expectations'
                        },
                        {
                            label: 'Needs Improvement',
                            value: 'Needs Improvement'
                        },
                        {
                            label: 'Failed',
                            value: 'Failed'
                        }
                    ])
                }
            ]
        },
        {
            id: 'beziehungen',
            label: 'Beziehungen',
            fields: [
                {
                    apiName: 'Account__c',
                    label: 'Account',
                    fieldType: 'lookup',
                    lookupObjectType: 'Account'
                },
                {
                    apiName: 'Kontakt__c',
                    label: 'Kontakt',
                    fieldType: 'lookup',
                    lookupObjectType: 'Contact'
                },
                {
                    apiName: 'Kundenvorgang__c',
                    label: 'Kundenvorgang',
                    fieldType: 'lookup',
                    lookupObjectType: 'Case'
                },
                {
                    apiName: 'Auftrag__c',
                    label: 'Auftrag',
                    fieldType: 'lookup',
                    lookupObjectType: 'Order'
                },
                {
                    apiName: 'Abrechnung__c',
                    label: 'Abrechnung',
                    fieldType: 'lookup',
                    lookupObjectType: 'Abrechnung__c'
                },
                {
                    apiName: 'Projekt__c',
                    label: 'Projekt',
                    fieldType: 'lookup',
                    lookupObjectType: 'Projekt__c'
                },
                {
                    apiName: 'Bedarfe__c',
                    label: 'Bedarf',
                    fieldType: 'lookup',
                    lookupObjectType: 'Bedarfe__c'
                },
                {
                    apiName: 'Material_Proposal__c',
                    label: 'Material Proposal',
                    fieldType: 'lookup',
                    lookupObjectType: 'Material_Proposal__c'
                },
                {
                    apiName: 'Monitored_Material__c',
                    label: 'Monitored Material',
                    fieldType: 'lookup',
                    lookupObjectType: 'Monitored_Material__c'
                },
                {
                    apiName: 'Materialanalyse__c',
                    label: 'Materialanalyse',
                    fieldType: 'lookup',
                    lookupObjectType: 'Materialanalyse__c'
                },
                {
                    apiName: 'Produkt__c',
                    label: 'Produkt',
                    fieldType: 'lookup',
                    lookupObjectType: 'Product2'
                },
                {
                    apiName: 'Sample_Sending__c',
                    label: 'Musterversand',
                    fieldType: 'lookup',
                    lookupObjectType: 'Sample_Sending__c'
                },
                {
                    apiName: 'Kontakt_bergabe__c',
                    label: 'Kontaktübergabe',
                    fieldType: 'lookup',
                    lookupObjectType: 'Kontakt_bergaben__c'
                },
                {
                    apiName: 'Onboarding__c',
                    label: 'Onboarding',
                    fieldType: 'lookup',
                    lookupObjectType: 'Onboarding__c'
                },
                {
                    apiName: 'Reklamation__c',
                    label: 'Reklamation',
                    fieldType: 'lookup',
                    lookupObjectType: 'Reklamation__c'
                },
                {
                    apiName: 'Audit__c',
                    label: 'Audit',
                    fieldType: 'lookup',
                    // #495: Salesforce schreibt das Objekt 'Supplier_audit__c', die App
                    // führt es durchgehend als 'Supplier_Audit__c'. SOQL ist
                    // case-insensitiv, die Membership-Prüfungen in JS sind es nicht —
                    // mit der SF-Schreibweise lief der Lookup in ein 403.
                    lookupObjectType: 'Supplier_Audit__c'
                },
                {
                    apiName: 'Vertrag__c',
                    label: 'Vertrag',
                    fieldType: 'lookup',
                    lookupObjectType: 'Contract'
                }
            ]
        },
        {
            id: 'system',
            label: 'System',
            fields: [
                {
                    apiName: 'OwnerId',
                    label: 'Inhaber',
                    fieldType: 'lookup',
                    lookupObjectType: 'User'
                },
                {
                    apiName: 'CreatedById',
                    label: 'Ersteller',
                    fieldType: 'lookup',
                    readOnly: true,
                    lookupObjectType: 'User'
                },
                {
                    apiName: 'CreatedDate',
                    label: 'Erstelldatum',
                    fieldType: 'datetime',
                    readOnly: true
                },
                {
                    apiName: 'LastModifiedById',
                    label: 'Zuletzt geändert von',
                    fieldType: 'lookup',
                    readOnly: true,
                    lookupObjectType: 'User'
                },
                {
                    apiName: 'LastModifiedDate',
                    label: 'Zuletzt geändert am',
                    fieldType: 'datetime',
                    readOnly: true
                }
            ]
        }
    ],
    relatedLists: [],
    systemFields: [
        'Id',
        'CreatedDate',
        'CreatedById',
        'LastModifiedDate',
        'LastModifiedById'
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/config/entityFields/RecyclateCompatibility.fields.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// CURATED — do not regenerate (--force) without re-applying the lean rules in LEAN-CURATION.md
/**
 * Entity Field Configuration: RecyclateCompatibility (lean staff view)
 * Configuration for Recyclate Compatibility detail pages (Postgres entity).
 */ __turbopack_context__.s([
    "RecyclateCompatibilityFieldConfig",
    ()=>RecyclateCompatibilityFieldConfig
]);
const RecyclateCompatibilityFieldConfig = {
    entityType: 'RecyclateCompatibility',
    entityLabel: 'Recyclate Compatibility',
    headerFields: [
        'material1',
        'material2',
        'compatibility'
    ],
    sections: [
        {
            id: 'compatibility_info',
            label: 'Compatibility Information',
            fields: [
                {
                    apiName: 'material1',
                    label: 'Material 1',
                    fieldType: 'text',
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'material2',
                    label: 'Material 2',
                    fieldType: 'text',
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'compatibility',
                    label: 'Compatibility Score',
                    fieldType: 'percent',
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                }
            ]
        },
        {
            id: 'system_information',
            label: 'System Information',
            fields: [
                {
                    apiName: 'createdAt',
                    label: 'Created At',
                    fieldType: 'datetime',
                    readOnly: true,
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'updatedAt',
                    label: 'Updated At',
                    fieldType: 'datetime',
                    readOnly: true,
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                }
            ]
        }
    ],
    systemFields: [
        'id',
        'createdAt',
        'updatedAt'
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/config/entityFields/RecyclateGrade.fields.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// CURATED — do not regenerate (--force) without re-applying the lean rules in LEAN-CURATION.md
/**
 * Entity Field Configuration: RecyclateGrade (lean staff view)
 * Recyclate Grade detail pages (Postgres entity). Material-property sections
 * grouped into tabs.
 */ __turbopack_context__.s([
    "RecyclateGradeFieldConfig",
    ()=>RecyclateGradeFieldConfig
]);
const RecyclateGradeFieldConfig = {
    entityType: 'RecyclateGrade',
    entityLabel: 'Recyclate Grade',
    headerFields: [
        'gradeName',
        'polymer',
        'sector',
        'recyclatePotential'
    ],
    sections: [
        {
            id: 'basic_info',
            label: 'Basic Information',
            fields: [
                {
                    apiName: 'gradeName',
                    label: 'Grade Name',
                    fieldType: 'text',
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'polymer',
                    label: 'Polymer',
                    fieldType: 'text',
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'recyclatePotential',
                    label: 'Recyclate Potential',
                    fieldType: 'number',
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'justification',
                    label: 'Justification',
                    fieldType: 'textarea',
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                }
            ]
        },
        {
            id: 'hierarchy',
            label: 'Application Hierarchy',
            fields: [
                {
                    apiName: 'sector',
                    label: 'Sector',
                    fieldType: 'text',
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'subcategory',
                    label: 'Subcategory',
                    fieldType: 'text',
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'specificApplication',
                    label: 'Specific Application',
                    fieldType: 'text',
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                }
            ]
        },
        {
            id: 'flow_properties',
            label: 'Flow Properties',
            fields: [
                {
                    apiName: 'mfr',
                    label: 'MFR (g/10 min)',
                    fieldType: 'number',
                    decimalPlaces: 2,
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'density',
                    label: 'Density (g/cm³)',
                    fieldType: 'number',
                    decimalPlaces: 3,
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                }
            ]
        },
        {
            id: 'mechanical_properties',
            label: 'Mechanical Properties',
            fields: [
                {
                    apiName: 'modulus',
                    label: 'Modulus (MPa)',
                    fieldType: 'number',
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'tensileStrengthYield',
                    label: 'Tensile Strength Yield (MPa)',
                    fieldType: 'number',
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'tensileStrengthBreak',
                    label: 'Tensile Strength Break (MPa)',
                    fieldType: 'number',
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'elongation',
                    label: 'Elongation (%)',
                    fieldType: 'number',
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'charpyImpact',
                    label: 'Charpy Impact (kJ/m²)',
                    fieldType: 'number',
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'ductileBrittleTransition',
                    label: 'Ductile/Brittle Transition (°C)',
                    fieldType: 'number',
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                }
            ]
        },
        {
            id: 'thermal_properties',
            label: 'Thermal Properties',
            fields: [
                {
                    apiName: 'hdt',
                    label: 'HDT (°C)',
                    fieldType: 'number',
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'vicat',
                    label: 'Vicat (°C)',
                    fieldType: 'number',
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                }
            ]
        },
        {
            id: 'optical_properties',
            label: 'Optical Properties',
            fields: [
                {
                    apiName: 'haze1mm',
                    label: 'Haze at 1mm (%)',
                    fieldType: 'number',
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                }
            ]
        },
        {
            id: 'notes',
            label: 'Additional Information',
            fields: [
                {
                    apiName: 'notes',
                    label: 'Notes',
                    fieldType: 'textarea',
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                }
            ]
        },
        {
            id: 'system_information',
            label: 'System Information',
            fields: [
                {
                    apiName: 'createdAt',
                    label: 'Created At',
                    fieldType: 'datetime',
                    readOnly: true,
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'updatedAt',
                    label: 'Updated At',
                    fieldType: 'datetime',
                    readOnly: true,
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                }
            ]
        }
    ],
    tabGroups: [
        {
            id: 'stammdaten',
            label: 'Stammdaten',
            sectionIds: [
                'basic_info',
                'hierarchy'
            ],
            isDefault: true
        },
        {
            id: 'eigenschaften',
            label: 'Eigenschaften',
            sectionIds: [
                'flow_properties',
                'mechanical_properties',
                'thermal_properties',
                'optical_properties'
            ]
        },
        {
            id: 'notizen_system',
            label: 'Notizen & System',
            sectionIds: [
                'notes',
                'system_information'
            ]
        }
    ],
    systemFields: [
        'id',
        'createdAt',
        'updatedAt'
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/config/entityFields/Reklamation.fields.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Entity Field Configuration: Reklamation__c
 * Fields derived from src/types/salesforce/Reklamation__c.ts (#321).
 */ __turbopack_context__.s([
    "ReklamationFieldConfig",
    ()=>ReklamationFieldConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$sfPicklist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/entityFields/sfPicklist.ts [app-client] (ecmascript)");
;
const ReklamationFieldConfig = {
    entityType: 'Reklamation__c',
    entityLabel: 'Reklamation',
    headerFields: [
        'Name'
    ],
    sections: [
        {
            id: 'grunddaten',
            label: 'Grunddaten',
            fields: [
                {
                    apiName: 'Name',
                    label: 'Reklamation-Name',
                    fieldType: 'text',
                    readOnly: true // #404: auto-number Name — not client-writable
                },
                {
                    apiName: 'St_rke__c',
                    label: 'Stärke',
                    fieldType: 'picklist',
                    picklistOptions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$sfPicklist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfPicklist"])()([
                        {
                            label: 'Hinweis',
                            value: 'Hinweis'
                        },
                        {
                            label: 'Beschwerde',
                            value: 'Beschwerde'
                        },
                        {
                            label: 'Reklamation',
                            value: 'Reklamation'
                        },
                        {
                            label: 'Eskalation',
                            value: 'Eskalation'
                        }
                    ])
                },
                {
                    apiName: 'Reklamation_betrifft__c',
                    label: 'Reklamation betrifft',
                    fieldType: 'picklist',
                    picklistOptions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$sfPicklist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfPicklist"])()([
                        {
                            label: 'Abwicklung allgemein',
                            value: 'Abwicklung allgemein'
                        },
                        {
                            label: 'Dokumente',
                            value: 'Dokumente'
                        },
                        {
                            label: 'Verpackungsqualität',
                            value: 'Verpackungsqualität'
                        },
                        {
                            label: 'Ladungssicherung',
                            value: 'Ladungssicherung'
                        },
                        {
                            label: 'Pünktlichkeit',
                            value: 'Pünktlichkeit'
                        },
                        {
                            label: 'Verhalten Logistikdienstleister',
                            value: 'Verhalten Logistikdienstleister'
                        },
                        {
                            label: 'Materialzusammensetzung',
                            value: 'Materialzusammensetzung'
                        },
                        {
                            label: 'Ladegewicht',
                            value: 'Ladegewicht'
                        },
                        {
                            label: 'Feuchtigkeit',
                            value: 'Feuchtigkeit'
                        }
                    ])
                },
                {
                    apiName: 'Status__c',
                    label: 'Status',
                    fieldType: 'picklist',
                    picklistOptions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$sfPicklist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfPicklist"])()([
                        {
                            label: 'Beschwerde erhalten',
                            value: 'Beschwerde erhalten'
                        },
                        {
                            label: 'Gespräch mit Kunden angesetzt',
                            value: 'Gespräch mit Kunden angesetzt'
                        },
                        {
                            label: 'Beschwerde dokumentiert',
                            value: 'Beschwerde dokumentiert'
                        },
                        {
                            label: 'Lösungsvorschlag erarbeitet',
                            value: 'Lösungsvorschlag erarbeitet'
                        },
                        {
                            label: 'Lösungsvorschlag akzeptiert',
                            value: 'Lösungsvorschlag akzeptiert'
                        },
                        {
                            label: 'Maßnahmen zur zuk. Verhinderung getroffen',
                            value: 'Maßnahmen zur zuk. Verhinderung getroffen'
                        },
                        {
                            label: 'Maßnahmen an Kunden kommuniziert',
                            value: 'Maßnahmen an Kunden kommuniziert'
                        },
                        {
                            label: 'Lösung umgesetzt',
                            value: 'Lösung umgesetzt'
                        },
                        {
                            label: 'Report an Kunden gesendet',
                            value: 'Report an Kunden gesendet'
                        },
                        {
                            label: 'Abgeschlossen',
                            value: 'Abgeschlossen'
                        }
                    ])
                },
                {
                    apiName: 'Zeitpunkt_der_Reklamation__c',
                    label: 'Zeitpunkt der Reklamation',
                    fieldType: 'datetime'
                },
                {
                    apiName: 'Kundenreferenznummer__c',
                    label: 'Kundenreferenznummer',
                    fieldType: 'text'
                }
            ]
        },
        {
            id: 'loesung',
            label: 'Lösung',
            fields: [
                {
                    apiName: 'L_sung__c',
                    label: 'Lösung',
                    fieldType: 'picklist',
                    picklistOptions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$sfPicklist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfPicklist"])()([
                        {
                            label: 'Nacherfüllung durch plastship',
                            value: 'Nacherfüllung durch plastship'
                        },
                        {
                            label: 'Nacherfüllung durch Kunde und Berechnung an plastship',
                            value: 'Nacherfüllung durch Kunde und Berechnung an plastship'
                        },
                        {
                            label: 'Minderung des Kaufpreises',
                            value: 'Minderung des Kaufpreises'
                        },
                        {
                            label: 'Rücktritt vom Vertrag und Rückabwicklung',
                            value: 'Rücktritt vom Vertrag und Rückabwicklung'
                        },
                        {
                            label: 'Schadensersatz',
                            value: 'Schadensersatz'
                        },
                        {
                            label: 'Diskussion / Beweisanforderung',
                            value: 'Diskussion / Beweisanforderung'
                        },
                        {
                            label: 'Nachprüfung Labor',
                            value: 'Nachprüfung Labor'
                        },
                        {
                            label: 'Ablehnung',
                            value: 'Ablehnung'
                        }
                    ])
                },
                {
                    apiName: 'Beschreibung_der_L_sung__c',
                    label: 'Beschreibung der Lösung',
                    fieldType: 'textarea'
                },
                {
                    apiName: 'Beschreibung_der_umgesetzten_Ma_nahmen__c',
                    label: 'Beschreibung der umgesetzten Maßnahmen',
                    fieldType: 'textarea'
                },
                {
                    apiName: 'Entstandene_Kosten__c',
                    label: 'Entstandene Kosten',
                    fieldType: 'currency',
                    currencyCode: 'EUR'
                }
            ]
        },
        {
            id: 'verantwortung',
            label: 'Verantwortung',
            fields: [
                {
                    apiName: 'Hauptverantwortlich_f_r_Reklamation__c',
                    label: 'Hauptverantwortlich für Reklamation',
                    fieldType: 'lookup',
                    lookupObjectType: 'User'
                },
                {
                    apiName: 'Begr_ndung_Verantwortlichkeit__c',
                    label: 'Begründung Verantwortlichkeit',
                    fieldType: 'textarea'
                },
                {
                    apiName: 'Zeitpunkt_Leistungserbringung__c',
                    label: 'Zeitpunkt Leistungserbringung',
                    fieldType: 'datetime'
                }
            ]
        },
        {
            id: 'beziehungen',
            label: 'Beziehungen',
            fields: [
                {
                    apiName: 'Account__c',
                    label: 'Account',
                    fieldType: 'lookup',
                    lookupObjectType: 'Account'
                },
                {
                    apiName: 'Kontakt__c',
                    label: 'Kontakt',
                    fieldType: 'lookup',
                    lookupObjectType: 'Contact'
                },
                {
                    apiName: 'Ausl_sender_Kundenvorgang__c',
                    label: 'Auslösender Kundenvorgang',
                    fieldType: 'lookup',
                    lookupObjectType: 'Case'
                },
                {
                    apiName: 'Ausl_sender_Auftrag__c',
                    label: 'Auslösender Auftrag',
                    fieldType: 'lookup',
                    lookupObjectType: 'Order'
                },
                {
                    apiName: 'Auftrag_Ruckabwicklung__c',
                    label: 'Auftrag Rückabwicklung',
                    fieldType: 'lookup',
                    lookupObjectType: 'Order'
                }
            ]
        },
        {
            id: 'system',
            label: 'System',
            fields: [
                {
                    apiName: 'OwnerId',
                    label: 'Inhaber',
                    fieldType: 'lookup',
                    lookupObjectType: 'User'
                },
                {
                    apiName: 'CreatedById',
                    label: 'Ersteller',
                    fieldType: 'lookup',
                    readOnly: true,
                    lookupObjectType: 'User'
                },
                {
                    apiName: 'CreatedDate',
                    label: 'Erstelldatum',
                    fieldType: 'datetime',
                    readOnly: true
                },
                {
                    apiName: 'LastModifiedById',
                    label: 'Zuletzt geändert von',
                    fieldType: 'lookup',
                    readOnly: true,
                    lookupObjectType: 'User'
                },
                {
                    apiName: 'LastModifiedDate',
                    label: 'Zuletzt geändert am',
                    fieldType: 'datetime',
                    readOnly: true
                }
            ]
        }
    ],
    relatedLists: [],
    systemFields: [
        'Id',
        'CreatedDate',
        'CreatedById',
        'LastModifiedDate',
        'LastModifiedById'
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/config/entityFields/SampleFeedback.fields.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Entity Field Configuration: Sample_Feedback__c
 * Auto-generated from FlexiPage metadata
 * Generated on: 2026-02-17T09:46:41.029Z
 */ __turbopack_context__.s([
    "SampleFeedbackFieldConfig",
    ()=>SampleFeedbackFieldConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$sfPicklist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/entityFields/sfPicklist.ts [app-client] (ecmascript)");
;
const SampleFeedbackFieldConfig = {
    entityType: 'Sample_Feedback__c',
    entityLabel: 'Sample Feedback',
    headerFields: [
        'Name'
    ],
    sections: [
        {
            id: 'grunddaten',
            label: 'Grunddaten',
            fields: [
                {
                    apiName: 'Name',
                    label: 'Sample Feedback-Name',
                    fieldType: 'text',
                    readOnly: true // #404: auto-number Name — not client-writable
                },
                {
                    apiName: 'Status__c',
                    label: 'Status',
                    fieldType: 'picklist',
                    picklistOptions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$sfPicklist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfPicklist"])()([
                        {
                            label: 'Draft',
                            value: 'Draft'
                        },
                        {
                            label: 'To send',
                            value: 'To send'
                        },
                        {
                            label: 'Sent',
                            value: 'Sent'
                        },
                        {
                            label: 'Received by Customer',
                            value: 'Received by Customer'
                        },
                        {
                            label: 'Feedback positive',
                            value: 'Feedback positive'
                        },
                        {
                            label: 'Feedback negative',
                            value: 'Feedback negative'
                        }
                    ])
                },
                {
                    apiName: 'Sample_Sending__c',
                    label: 'Sample Sending',
                    fieldType: 'lookup',
                    lookupObjectType: 'Sample_Sending__c',
                    required: true
                },
                {
                    apiName: 'Account__c',
                    label: 'Account',
                    fieldType: 'lookup',
                    lookupObjectType: 'Account',
                    readOnlyOnEdit: true // #404: createable, not updateable in SF
                },
                {
                    apiName: 'Produkt__c',
                    label: 'Produkt',
                    fieldType: 'lookup',
                    lookupObjectType: 'Product2'
                },
                {
                    apiName: 'Produzent__c',
                    label: 'Produzent',
                    fieldType: 'text',
                    readOnly: true // #404: formula field — not client-writable
                }
            ]
        },
        {
            id: 'feedback',
            label: 'Feedback',
            fields: [
                {
                    apiName: 'Feedback_Date__c',
                    label: 'Feedback-Datum',
                    fieldType: 'date'
                },
                {
                    apiName: 'Reason_Category__c',
                    label: 'Reason Category',
                    fieldType: 'picklist',
                    picklistOptions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$sfPicklist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfPicklist"])()([
                        {
                            label: 'Contamination in polymer composition',
                            value: 'Contamination in polymer composition'
                        },
                        {
                            label: 'Contamination with non-plastics',
                            value: 'Contamination with non-plastics'
                        },
                        {
                            label: 'Grain size or form',
                            value: 'Grain size or form'
                        },
                        {
                            label: 'Mechanical non-fit',
                            value: 'Mechanical non-fit'
                        },
                        {
                            label: 'MFR too high',
                            value: 'MFR too high'
                        },
                        {
                            label: 'MFR too low',
                            value: 'MFR too low'
                        },
                        {
                            label: 'Missing quality assurance',
                            value: 'Missing quality assurance'
                        },
                        {
                            label: 'Optical Quality',
                            value: 'Optical Quality'
                        },
                        {
                            label: 'Other (explain)',
                            value: 'Other (explain)'
                        },
                        {
                            label: 'Packaging',
                            value: 'Packaging'
                        },
                        {
                            label: 'Price',
                            value: 'Price'
                        },
                        {
                            label: 'Quality fluctuation',
                            value: 'Quality fluctuation'
                        },
                        {
                            label: 'Smell',
                            value: 'Smell'
                        },
                        {
                            label: 'Unexpected material behavior',
                            value: 'Unexpected material behavior'
                        }
                    ])
                },
                {
                    apiName: 'Anwendungsgebiet__c',
                    label: 'Anwendungsgebiet',
                    fieldType: 'picklist',
                    picklistOptions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$sfPicklist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfPicklist"])()([
                        {
                            label: 'FMCG Non-Food Verpackung',
                            value: 'FMCG Non-Food Verpackung'
                        },
                        {
                            label: 'Automobil',
                            value: 'Automobil'
                        },
                        {
                            label: 'Fasern',
                            value: 'Fasern'
                        },
                        {
                            label: 'Medizinprodukte',
                            value: 'Medizinprodukte'
                        },
                        {
                            label: 'Haushaltsprodukte',
                            value: 'Haushaltsprodukte'
                        },
                        {
                            label: 'Agrarfolien',
                            value: 'Agrarfolien'
                        },
                        {
                            label: 'Freizeit- und Sportprodukte',
                            value: 'Freizeit- und Sportprodukte'
                        },
                        {
                            label: 'Maschinenbau',
                            value: 'Maschinenbau'
                        },
                        {
                            label: 'Industrielle Folien',
                            value: 'Industrielle Folien'
                        },
                        {
                            label: 'Bekleidung',
                            value: 'Bekleidung'
                        },
                        {
                            label: 'elektrische Geräte',
                            value: 'elektrische Geräte'
                        },
                        {
                            label: 'Elektronik',
                            value: 'Elektronik'
                        },
                        {
                            label: 'Möbel',
                            value: 'Möbel'
                        },
                        {
                            label: 'Rohre',
                            value: 'Rohre'
                        },
                        {
                            label: 'Platten',
                            value: 'Platten'
                        },
                        {
                            label: 'FMCG Food Verpackung',
                            value: 'FMCG Food Verpackung'
                        },
                        {
                            label: 'Bauindustrie',
                            value: 'Bauindustrie'
                        }
                    ])
                },
                {
                    apiName: 'Reason__c',
                    label: 'Begründung',
                    fieldType: 'textarea'
                },
                {
                    apiName: 'Notes__c',
                    label: 'Notizen',
                    fieldType: 'textarea'
                }
            ]
        },
        {
            id: 'versand',
            label: 'Versand',
            fields: [
                {
                    apiName: 'Sample_Size_kg__c',
                    label: 'Sample Size (kg)',
                    fieldType: 'number'
                },
                {
                    apiName: 'Versanddatum__c',
                    label: 'Versanddatum',
                    fieldType: 'date'
                },
                {
                    apiName: 'Beschreibung_f_r_Versand__c',
                    label: 'Beschreibung für Versand',
                    fieldType: 'textarea'
                },
                {
                    apiName: 'Produktcode__c',
                    label: 'Produktcode',
                    fieldType: 'text',
                    readOnly: true
                }
            ]
        },
        {
            id: 'kosten',
            label: 'Kosten',
            fields: [
                {
                    apiName: 'Materialkosten_Gesamt__c',
                    label: 'Materialkosten Gesamt',
                    fieldType: 'currency',
                    currencyCode: 'EUR'
                },
                {
                    apiName: 'Lieferkosten_Gesamt__c',
                    label: 'Lieferkosten Gesamt',
                    fieldType: 'currency',
                    currencyCode: 'EUR'
                },
                {
                    apiName: 'Rechnungsbetrag_Material__c',
                    label: 'Rechnungsbetrag Material',
                    fieldType: 'currency',
                    currencyCode: 'EUR'
                },
                {
                    apiName: 'Rechnungsbetrag_Lieferung__c',
                    label: 'Rechnungsbetrag Lieferung',
                    fieldType: 'currency',
                    currencyCode: 'EUR'
                }
            ]
        },
        {
            id: 'verknuepfungen',
            label: 'Verknüpfungen',
            fields: [
                {
                    apiName: 'Opportunity__c',
                    label: 'Opportunity',
                    fieldType: 'lookup',
                    lookupObjectType: 'Opportunity'
                }
            ]
        },
        {
            id: 'system',
            label: 'System',
            fields: [
                {
                    apiName: 'CreatedById',
                    label: 'Ersteller',
                    fieldType: 'lookup',
                    readOnly: true,
                    lookupObjectType: 'User'
                },
                {
                    apiName: 'CreatedDate',
                    label: 'Erstelldatum',
                    fieldType: 'datetime',
                    readOnly: true
                },
                {
                    apiName: 'LastModifiedById',
                    label: 'Zuletzt geändert von',
                    fieldType: 'lookup',
                    readOnly: true,
                    lookupObjectType: 'User'
                },
                {
                    apiName: 'LastModifiedDate',
                    label: 'Zuletzt geändert am',
                    fieldType: 'datetime',
                    readOnly: true
                }
            ]
        }
    ],
    // #330 Minimal-Aufraeumen (Legacy-Entity, keine Voll-Kuration): Analysen-Liste
    // mit Basis-Spalten statt Id/Name, Dateien-Label statt Auto-Artefakt.
    relatedLists: [
        {
            relationshipName: 'Materialanalysen__r',
            label: 'Materialanalysen',
            fields: [
                'Id',
                'Name',
                'Status__c',
                'Analysetyp__c',
                'CreatedDate'
            ],
            maxRows: 10,
            visibleForRoles: [
                'admin',
                'staff'
            ]
        },
        {
            relationshipName: 'AttachedContentDocuments',
            label: 'Dateien',
            fields: [
                'Id',
                'Title'
            ],
            maxRows: 10,
            visibleForRoles: [
                'admin',
                'staff'
            ]
        }
    ],
    systemFields: [
        'Id',
        'CreatedDate',
        'CreatedById',
        'LastModifiedDate',
        'LastModifiedById'
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/config/entityFields/SampleSending.fields.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// CURATED — do not regenerate (--force) without re-applying the lean rules in LEAN-CURATION.md
/**
 * Entity Field Configuration: Sample_Sending__c (lean staff view)
 *
 * Curated against GitLab #200 §5.1 (Sample Sending Mini-Detail-View). Cross-check
 * added the missing Delivery_Produktion_Land__c (formula, read-only). The legacy
 * Opportunity__c and Angebot__c lookups are dropped (Opportunity is being retired).
 * Formula fields (Loading_Site / Delivery_Site / Delivery_Produktion_Land /
 * Carrier_E_Mail / Carrier_Phone / Gesamtkosten / Name / Auftrags_ID_Lieferschein)
 * are read-only.
 *
 * Dropped: the System field section (-> systemFields) and the legacy related lists
 * Feedbacks, Sample_Feedbacks, Opportunity_Transportpreise, RecordAccessGrants,
 * Abrechnungen (the Abrechnung__c lookup covers it). No Status_Updates relationship
 * exists on this object.
 *
 * Downstream roles (agent/user/rigk) untouched; handled in a later step.
 */ __turbopack_context__.s([
    "SampleSendingFieldConfig",
    ()=>SampleSendingFieldConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$sfPicklist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/entityFields/sfPicklist.ts [app-client] (ecmascript)");
;
const SampleSendingFieldConfig = {
    entityType: 'Sample_Sending__c',
    entityLabel: 'Sample Sending',
    headerFields: [
        'Name',
        'Typ__c',
        'Status__c',
        'Datum_Versand__c'
    ],
    sections: [
        {
            id: 'kopfdaten_identifikation',
            label: 'Kopfdaten & Identifikation',
            columns: 2,
            visibleForRoles: [
                'admin',
                'staff',
                'agent'
            ],
            fields: [
                {
                    apiName: 'Name',
                    label: 'Sample Sending-Name',
                    fieldType: 'text',
                    readOnly: true
                },
                {
                    apiName: 'OwnerId',
                    label: 'Inhaber',
                    fieldType: 'lookup',
                    lookupObjectType: 'User'
                },
                {
                    apiName: 'Auftrags_ID_Lieferschein__c',
                    label: 'Auftrags-ID Lieferschein',
                    fieldType: 'text',
                    readOnly: true
                },
                {
                    apiName: 'Typ__c',
                    label: 'Typ',
                    fieldType: 'picklist',
                    picklistOptions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$sfPicklist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfPicklist"])()([
                        {
                            label: 'Order',
                            value: 'Order'
                        },
                        {
                            label: 'Sending',
                            value: 'Sending'
                        },
                        {
                            label: 'Direct',
                            value: 'Direct'
                        }
                    ])
                },
                {
                    apiName: 'Status__c',
                    label: 'Status',
                    fieldType: 'picklist',
                    picklistOptions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$sfPicklist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfPicklist"])()([
                        {
                            label: 'Draft',
                            value: 'Draft'
                        },
                        {
                            label: 'Ready',
                            value: 'Ready'
                        },
                        {
                            label: 'Ordered',
                            value: 'Ordered'
                        },
                        {
                            label: 'Sent',
                            value: 'Sent'
                        },
                        {
                            label: 'Received',
                            value: 'Received'
                        }
                    ])
                },
                {
                    apiName: 'Datum_Bestellung__c',
                    label: 'Datum Bestellung',
                    fieldType: 'date'
                },
                {
                    apiName: 'Datum_Versand__c',
                    label: 'Datum Versand',
                    fieldType: 'date'
                }
            ]
        },
        {
            id: 'verknuepfungen',
            label: 'Verknüpfungen',
            columns: 2,
            visibleForRoles: [
                'admin',
                'staff',
                'agent'
            ],
            fields: [
                {
                    apiName: 'Projekt__c',
                    label: 'Projekt',
                    fieldType: 'lookup',
                    lookupObjectType: 'Projekt__c'
                },
                {
                    apiName: 'Produkt__c',
                    label: 'Produkt',
                    fieldType: 'lookup',
                    lookupObjectType: 'Product2'
                },
                // #917: Materialien__c (SF-Lookup auf OpportunityLineItem, Legacy) bewusst
                // nicht mehr kuratiert — als Freitext gesendet gab es MALFORMED_ID (PO 08.09.).
                {
                    apiName: 'Abrechnung__c',
                    label: 'Abrechnung',
                    fieldType: 'lookup',
                    lookupObjectType: 'Abrechnung__c'
                },
                {
                    apiName: 'Notiz_Referenz_plastship_ID__c',
                    label: 'Notiz / Referenz / plastship ID',
                    fieldType: 'text'
                }
            ]
        },
        {
            id: 'herkunft',
            label: 'Herkunft (Ladestelle)',
            columns: 2,
            visibleForRoles: [
                'admin',
                'staff',
                'agent'
            ],
            fields: [
                {
                    apiName: 'Load_from__c',
                    label: 'Laden von',
                    fieldType: 'lookup',
                    lookupObjectType: 'Account'
                },
                {
                    apiName: 'Loading_Produktion__c',
                    label: 'Ladestelle Produktion',
                    fieldType: 'lookup',
                    lookupObjectType: 'Produktionsstandort__c',
                    // #917: SF-Lookup-Filter Produktionsstandort__c.Account__c = Load_from__c
                    dependsOn: {
                        field: 'Load_from__c',
                        matchField: 'Account__c'
                    }
                },
                {
                    apiName: 'Loading_Site__c',
                    label: 'Ladestelle',
                    fieldType: 'text',
                    readOnly: true
                }
            ]
        },
        {
            id: 'ziel',
            label: 'Ziel (Lieferstelle)',
            columns: 2,
            visibleForRoles: [
                'admin',
                'staff',
                'agent'
            ],
            fields: [
                {
                    apiName: 'Deliver_to__c',
                    label: 'Liefern an',
                    fieldType: 'lookup',
                    lookupObjectType: 'Account'
                },
                {
                    apiName: 'Delivery_Produktion__c',
                    label: 'Lieferstelle Produktion',
                    fieldType: 'lookup',
                    lookupObjectType: 'Produktionsstandort__c',
                    // #917: SF-Lookup-Filter Produktionsstandort__c.Account__c = Deliver_to__c
                    dependsOn: {
                        field: 'Deliver_to__c',
                        matchField: 'Account__c'
                    }
                },
                {
                    apiName: 'Delivery_Site__c',
                    label: 'Lieferstelle',
                    fieldType: 'text',
                    readOnly: true
                },
                {
                    apiName: 'Delivery_Produktion_Land__c',
                    label: 'Lieferstelle Land',
                    fieldType: 'text',
                    readOnly: true
                },
                {
                    apiName: 'Kontakt_Anlieferung__c',
                    label: 'Kontakt Anlieferung',
                    fieldType: 'lookup',
                    lookupObjectType: 'Contact'
                }
            ]
        },
        {
            id: 'transporteur',
            label: 'Transporteur',
            columns: 2,
            visibleForRoles: [
                'admin',
                'staff',
                'agent'
            ],
            fields: [
                {
                    apiName: 'Carrier__c',
                    label: 'Carrier',
                    fieldType: 'lookup',
                    lookupObjectType: 'Account'
                },
                {
                    apiName: 'Carrier_Contact__c',
                    label: 'Carrier-Kontakt',
                    fieldType: 'lookup',
                    lookupObjectType: 'Contact',
                    // #917: SF-Lookup-Filter Contact.AccountId = Carrier__c
                    dependsOn: {
                        field: 'Carrier__c',
                        matchField: 'AccountId'
                    }
                },
                {
                    apiName: 'Carrier_E_Mail__c',
                    label: 'Carrier E-Mail',
                    fieldType: 'email',
                    readOnly: true
                },
                {
                    apiName: 'Carrier_Phone__c',
                    label: 'Carrier Telefon',
                    fieldType: 'phone',
                    readOnly: true
                },
                {
                    apiName: 'Transportkosten__c',
                    label: 'Transportkosten',
                    fieldType: 'currency',
                    currencyCode: 'EUR'
                }
            ]
        },
        {
            id: 'menge_verpackung',
            label: 'Menge & Verpackung',
            columns: 2,
            visibleForRoles: [
                'admin',
                'staff',
                'agent'
            ],
            fields: [
                {
                    apiName: 'Amount_in_kg__c',
                    label: 'Menge (kg)',
                    fieldType: 'number'
                },
                {
                    apiName: 'Anzahl_BigBags__c',
                    label: 'Anzahl BigBags',
                    fieldType: 'number'
                },
                {
                    apiName: 'Anzahl_Paletten_Holz__c',
                    label: 'Anzahl Paletten Holz',
                    fieldType: 'number'
                },
                {
                    apiName: 'Anzahl_Verpackung_Beutel__c',
                    label: 'Anzahl Beutel',
                    fieldType: 'number'
                },
                {
                    apiName: 'Anzahl_Verpackung_Kartons__c',
                    label: 'Anzahl Kartons',
                    fieldType: 'number'
                },
                {
                    apiName: 'Sonst_kg_Verpackung_Kunststoff__c',
                    label: 'Sonst. kg Verpackung Kunststoff',
                    fieldType: 'number'
                }
            ]
        },
        {
            id: 'kosten_abrechnung',
            label: 'Kosten & Abrechnung',
            columns: 2,
            visibleForRoles: [
                'admin',
                'staff',
                'agent'
            ],
            fields: [
                {
                    apiName: 'Materialkosten__c',
                    label: 'Materialkosten',
                    fieldType: 'currency',
                    currencyCode: 'EUR'
                },
                {
                    apiName: 'Gesamtkosten__c',
                    label: 'Gesamtkosten',
                    fieldType: 'currency',
                    currencyCode: 'EUR',
                    readOnly: true
                },
                {
                    apiName: 'Invoice_to_Customer__c',
                    label: 'Rechnung an Kunden',
                    fieldType: 'boolean'
                }
            ]
        },
        // ── #329 Welle A: Externe Perspektiven-Sets (user/rigk) ─────────────────
        // Empfänger via Kontakt Anlieferung, Absender via Ladestellen-Account
        // (kein Kontaktfeld am Record). KEINE Spediteur-Perspektive (PM-Entscheid).
        // Kosten bleiben intern. Verpackungszähler nur sichtbar, wenn befüllt.
        {
            id: 'ext_uebersicht',
            label: 'Übersicht',
            columns: 2,
            visibleForRoles: [
                'user',
                'rigk'
            ],
            fields: [
                {
                    apiName: 'Typ__c',
                    label: 'Typ',
                    fieldType: 'text',
                    readOnly: true
                },
                {
                    apiName: 'Produkt__c',
                    label: 'Produkt',
                    fieldType: 'lookup',
                    lookupObjectType: 'Product2',
                    readOnly: true
                }
            ]
        },
        {
            id: 'ext_lieferung',
            label: 'Ihre Lieferung',
            columns: 2,
            visibleForRoles: [
                'user',
                'rigk'
            ],
            visibleForPerspectives: [
                'customer'
            ],
            fields: [
                {
                    apiName: 'Deliver_to__c',
                    label: 'Empfänger',
                    fieldType: 'lookup',
                    lookupObjectType: 'Account',
                    readOnly: true
                },
                {
                    apiName: 'Delivery_Produktion__c',
                    label: 'Lieferwerk',
                    fieldType: 'lookup',
                    lookupObjectType: 'Produktionsstandort__c',
                    readOnly: true
                },
                {
                    apiName: 'Delivery_Site__c',
                    label: 'Lieferstelle',
                    fieldType: 'text',
                    readOnly: true
                },
                {
                    apiName: 'Delivery_Produktion_Land__c',
                    label: 'Land',
                    fieldType: 'text',
                    readOnly: true
                },
                {
                    apiName: 'Auftrags_ID_Lieferschein__c',
                    label: 'Lieferschein-/Auftrags-ID',
                    fieldType: 'text',
                    readOnly: true
                },
                {
                    apiName: 'Carrier__c',
                    label: 'Spediteur',
                    fieldType: 'lookup',
                    lookupObjectType: 'Account',
                    readOnly: true
                }
            ]
        },
        {
            id: 'ext_abholung',
            label: 'Ihre Sendung',
            columns: 2,
            visibleForRoles: [
                'user',
                'rigk'
            ],
            visibleForPerspectives: [
                'supplier'
            ],
            fields: [
                {
                    apiName: 'Load_from__c',
                    label: 'Absender',
                    fieldType: 'lookup',
                    lookupObjectType: 'Account',
                    readOnly: true
                },
                {
                    apiName: 'Loading_Produktion__c',
                    label: 'Ladewerk',
                    fieldType: 'lookup',
                    lookupObjectType: 'Produktionsstandort__c',
                    readOnly: true
                },
                {
                    apiName: 'Loading_Site__c',
                    label: 'Ladestelle',
                    fieldType: 'text',
                    readOnly: true
                },
                {
                    apiName: 'Carrier__c',
                    label: 'Spediteur',
                    fieldType: 'lookup',
                    lookupObjectType: 'Account',
                    readOnly: true
                }
            ]
        },
        {
            id: 'ext_menge',
            label: 'Menge & Verpackung',
            columns: 2,
            visibleForRoles: [
                'user',
                'rigk'
            ],
            visibleForPerspectives: [
                'customer',
                'supplier'
            ],
            fields: [
                {
                    apiName: 'Amount_in_kg__c',
                    label: 'Menge (kg)',
                    fieldType: 'number',
                    readOnly: true
                },
                {
                    apiName: 'Anzahl_BigBags__c',
                    label: 'BigBags',
                    fieldType: 'number',
                    readOnly: true,
                    hideWhenEmpty: true
                },
                {
                    apiName: 'Anzahl_Paletten_Holz__c',
                    label: 'Paletten (Holz)',
                    fieldType: 'number',
                    readOnly: true,
                    hideWhenEmpty: true
                },
                {
                    apiName: 'Anzahl_Verpackung_Beutel__c',
                    label: 'Beutel',
                    fieldType: 'number',
                    readOnly: true,
                    hideWhenEmpty: true
                },
                {
                    apiName: 'Anzahl_Verpackung_Kartons__c',
                    label: 'Kartons',
                    fieldType: 'number',
                    readOnly: true,
                    hideWhenEmpty: true
                },
                {
                    apiName: 'Sonst_kg_Verpackung_Kunststoff__c',
                    label: 'Sonst. Verpackung Kunststoff (kg)',
                    fieldType: 'number',
                    readOnly: true,
                    hideWhenEmpty: true
                }
            ]
        }
    ],
    // #329: Perspektiven-Verdrahtung — Empfänger über Kontakt, Absender über
    // Account (kein Kontaktfeld vorhanden). Niemand schreibt (kein updatable).
    perspectives: {
        lookups: {
            customer: 'Kontakt_Anlieferung__c'
        },
        accountLookups: {
            supplier: 'Load_from__c'
        }
    },
    tabGroups: [
        {
            id: 'sendung',
            label: 'Sendung',
            sectionIds: [
                'kopfdaten_identifikation',
                'verknuepfungen',
                'menge_verpackung'
            ],
            isDefault: true
        },
        {
            id: 'logistik',
            label: 'Logistik',
            sectionIds: [
                'herkunft',
                'ziel',
                'transporteur'
            ]
        },
        {
            id: 'kosten',
            label: 'Kosten',
            sectionIds: [
                'kosten_abrechnung'
            ]
        }
    ],
    // #329: alle Listen konservativ intern — Lieferanten-/Analyse-/CAPA-Bezüge;
    // Kunden-Freigabe einzelner Listen ist eine PM-Entscheidung, nicht Default.
    relatedLists: [
        {
            relationshipName: 'Material_Proposals__r',
            label: 'Material Proposals (Musterbestellung)',
            // #418: Produktcode/-Name + Muster-kg für die Material-Auflistung in den Mail-Vorlagen
            fields: [
                'Id',
                'Name',
                'Date__c',
                'Status__c',
                'Supplier__c',
                'Product__c',
                'Product__r.Name',
                'Product__r.ProductCode',
                'Sample_Size_in_kg__c'
            ],
            // Lookup-Auflösung: Supplier als Account-Name, Produkt als Trade Name
            // (lookupDisplayFromRow liest die Traversals aus der Zeile).
            hiddenFields: [
                'Supplier__r.Name',
                'Product__r.Trade_Name__c'
            ],
            maxRows: 10,
            // #323 MR-2: Lookup-Pilot — Status (Picklist), Datum, kg (number) und
            // die Lookups Supplier/Product direkt in der Tabelle pflegbar.
            inlineEdit: true,
            // #417: bestehende MPs als Musterbestellung zuordnen/lösen
            addExisting: {
                childLookupField: 'Sample_Order_from_Supplier__c',
                unlinkable: true
            },
            visibleForRoles: [
                'admin',
                'staff',
                'agent'
            ]
        },
        {
            relationshipName: 'Material_Proposals1__r',
            label: 'Material Proposals (Musterversand)',
            // #418: Produktcode/-Name + Muster-kg für die Material-Auflistung in den Mail-Vorlagen
            fields: [
                'Id',
                'Name',
                'Date__c',
                'Status__c',
                'Account__c',
                'Product__c',
                'Product__r.Name',
                'Product__r.ProductCode',
                'Sample_Size_in_kg__c'
            ],
            // Lookup-Auflösung: Account-Name + Produkt-Trade-Name (wie Musterbestellung)
            hiddenFields: [
                'Account__r.Name',
                'Product__r.Trade_Name__c'
            ],
            maxRows: 10,
            // Mustermenge (kg) & Co. direkt in der Tabelle pflegbar — Feld muss dazu
            // in getUpdatableFields(Material_Proposal__c, Rolle) liegen (MP-Config).
            inlineEdit: true,
            // #417: bestehende MPs als Musterversand zuordnen/lösen
            addExisting: {
                childLookupField: 'Sample_Sending_to_Account__c',
                unlinkable: true
            },
            visibleForRoles: [
                'admin',
                'staff',
                'agent'
            ]
        },
        {
            relationshipName: 'Materialanalysen__r',
            label: 'Materialanalysen',
            fields: [
                'Id',
                'Name',
                'Material_ID__c',
                'Produkt_ID__c',
                'Materialmenge_Analyse__c',
                'Notiz_Beschreibung__c'
            ],
            // Lookup-Auflösung: Material als Trade Name (Fallback Produktname)
            hiddenFields: [
                'Material_ID__r.Trade_Name__c',
                'Material_ID__r.Name'
            ],
            maxRows: 10,
            // Materialmenge & Co. direkt in der Tabelle pflegbar (wie Musterversand)
            inlineEdit: true,
            // #417: bestehende Materialanalysen dem SS zuordnen/lösen (AB-Review
            // 2026-07-13: SS→MA läuft über Zuordnung Bestehender, nicht Anlegen-aus)
            addExisting: {
                childLookupField: 'Sample_Sending__c',
                unlinkable: true
            },
            visibleForRoles: [
                'admin',
                'staff',
                'agent'
            ]
        },
        {
            relationshipName: 'Feedbacks__r',
            label: 'Prozessfeedback',
            fields: [
                'Id',
                'Name',
                'CreatedDate',
                'Status__c',
                'Current_State_Evaluation__c',
                'Description__c'
            ],
            maxRows: 10,
            visibleForRoles: [
                'admin',
                'staff',
                'agent'
            ]
        },
        {
            relationshipName: 'AttachedContentDocuments',
            label: 'Dateien',
            fields: [
                'Id',
                'Title'
            ],
            maxRows: 10,
            visibleForRoles: [
                'admin',
                'staff',
                'agent'
            ]
        }
    ],
    // #330: > 4 Listen -> fachliche Tab-Gruppen (LEAN-CURATION.md)
    relatedListTabGroups: [
        {
            id: 'muster',
            label: 'Muster & Analysen',
            relationshipNames: [
                'Material_Proposals__r',
                'Material_Proposals1__r',
                'Materialanalysen__r'
            ],
            isDefault: true
        },
        {
            id: 'aktivitaet',
            label: 'Aktivität & Dateien',
            relationshipNames: [
                'Feedbacks__r',
                'AttachedContentDocuments'
            ]
        }
    ],
    systemFields: [
        'Id',
        'CreatedDate',
        'CreatedById',
        'LastModifiedDate',
        'LastModifiedById',
        'OwnerId'
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/config/entityFields/SupplierAudit.fields.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// CURATED — do not regenerate (--force) without re-applying the lean rules in LEAN-CURATION.md
/**
 * Entity Field Configuration: Supplier_Audit__c (lean staff view)
 *
 * Not in #200 — already lean. Drop the System field section and the legacy Feedbacks
 * related list.
 */ __turbopack_context__.s([
    "SupplierAuditFieldConfig",
    ()=>SupplierAuditFieldConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$sfPicklist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/entityFields/sfPicklist.ts [app-client] (ecmascript)");
;
const SupplierAuditFieldConfig = {
    entityType: 'Supplier_Audit__c',
    entityLabel: 'Supplier Audit',
    headerFields: [
        'Name',
        'Account__c',
        'Audit_result__c',
        'Date_of_visit__c'
    ],
    sections: [
        {
            id: 'details',
            label: 'Details',
            fields: [
                {
                    apiName: 'Name',
                    label: 'Audit-Name',
                    fieldType: 'text',
                    required: true
                },
                {
                    // #369: für Kundenrollen ausgeblendet — die RIGK-Modul-Route
                    // erzwingt Account__c aus der URL (Back-fill), das Formular braucht
                    // das Feld nicht. required greift nur auf sichtbaren Feldern (#346).
                    apiName: 'Account__c',
                    label: 'Account',
                    fieldType: 'lookup',
                    lookupObjectType: 'Account',
                    required: true,
                    readOnlyOnEdit: true,
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent'
                    ]
                },
                {
                    // #369-Follow-up (PM 2026-07-07): für rigk nicht wichtig — zudem sind
                    // Produktionsstandorte/Kontakte für rigk nicht suchbar (kein view auf
                    // die Lookup-Ziele), das Feld wäre nur ein toter Picker.
                    apiName: 'Produktionsstandort__c',
                    label: 'Produktionsstandort',
                    fieldType: 'lookup',
                    lookupObjectType: 'Produktionsstandort__c',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent'
                    ]
                },
                {
                    apiName: 'Audit_Contact__c',
                    label: 'Audit-Kontakt',
                    fieldType: 'lookup',
                    lookupObjectType: 'Contact',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent'
                    ]
                },
                {
                    // #836: Supplier_Audit__c hat keinen Owner (Master-Detail unter
                    // Account) — der Ersteller zeigt, wer das Audit verantwortet.
                    apiName: 'CreatedById',
                    label: 'Erstellt von',
                    fieldType: 'lookup',
                    lookupObjectType: 'User',
                    readOnly: true,
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent'
                    ]
                },
                {
                    apiName: 'Audit_Type__c',
                    label: 'Audit-Typ',
                    fieldType: 'picklist',
                    picklistOptions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$sfPicklist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfPicklist"])()([
                        {
                            label: 'Visit Report',
                            value: 'Visit Report'
                        },
                        {
                            label: 'Supplier Evaluation',
                            value: 'Supplier Evaluation'
                        },
                        {
                            label: 'Long-term Supplier Declaration',
                            value: 'Long-term Supplier Declaration'
                        },
                        {
                            label: 'Other (please descibe)',
                            value: 'Other (please descibe)'
                        }
                    ])
                },
                {
                    apiName: 'Audit_Direction__c',
                    label: 'Audit-Richtung',
                    fieldType: 'picklist',
                    picklistOptions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$sfPicklist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfPicklist"])()([
                        {
                            label: 'Audit by Customer',
                            value: 'Audit by Customer'
                        },
                        {
                            label: 'Audit by plastship',
                            value: 'Audit by plastship'
                        },
                        {
                            label: 'Audit by Third Party (name)',
                            value: 'Audit by Third Party (name)'
                        }
                    ])
                },
                {
                    apiName: 'Audit_result__c',
                    label: 'Audit-Ergebnis',
                    fieldType: 'picklist',
                    picklistOptions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$sfPicklist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfPicklist"])()([
                        {
                            label: 'Approved Supplier',
                            value: 'Approved Supplier'
                        },
                        {
                            label: 'Approved for Quality Assurance',
                            value: 'Approved for Quality Assurance'
                        },
                        {
                            label: 'Approved Recyclate Origin',
                            value: 'Approved Recyclate Origin'
                        },
                        {
                            label: 'Rejected',
                            value: 'Rejected'
                        },
                        {
                            label: 'Further Cooperation',
                            value: 'Further Cooperation'
                        },
                        {
                            label: 'Qualified Customer',
                            value: 'Qualified Customer'
                        }
                    ])
                },
                {
                    apiName: 'Date_of_visit__c',
                    label: 'Besuchsdatum',
                    fieldType: 'date'
                },
                {
                    apiName: 'Valid_to__c',
                    label: 'Gültig bis',
                    fieldType: 'date'
                }
            ]
        },
        {
            id: 'bericht',
            label: 'Bericht',
            fields: [
                {
                    apiName: 'Audit_report__c',
                    label: 'Audit-Bericht',
                    fieldType: 'textarea'
                },
                {
                    apiName: 'Master_Checkliste_Audits__c',
                    label: 'Master-Checkliste',
                    fieldType: 'textarea'
                }
            ]
        }
    ],
    relatedLists: [
        {
            relationshipName: 'Feedbacks__r',
            label: 'Prozessfeedback',
            fields: [
                'Id',
                'Name',
                'CreatedDate',
                'Status__c',
                'Current_State_Evaluation__c',
                'Description__c'
            ],
            maxRows: 10,
            // #369 (PM-Linie aus #358/#359): Prozessfeedback (CAPA) ist intern —
            // nichts für Kundenrollen.
            visibleForRoles: [
                'admin',
                'staff',
                'agent'
            ]
        },
        {
            relationshipName: 'AttachedContentDocuments',
            label: 'Dateien',
            fields: [
                'Id',
                'Title'
            ],
            maxRows: 10,
            visibleForRoles: [
                'admin',
                'staff',
                'agent',
                'user',
                'rigk'
            ]
        }
    ],
    systemFields: [
        'Id',
        'CreatedDate',
        'CreatedById',
        'LastModifiedDate',
        'LastModifiedById'
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/config/entityFields/Task.fields.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// CURATED — do not regenerate (--force) without re-applying the lean rules in LEAN-CURATION.md
/**
 * Entity Field Configuration: Task (lean staff view)
 *
 * Not in #200 — already lean. Drop the System field section (-> systemFields).
 */ __turbopack_context__.s([
    "TaskFieldConfig",
    ()=>TaskFieldConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$sfPicklist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/entityFields/sfPicklist.ts [app-client] (ecmascript)");
;
const TaskFieldConfig = {
    entityType: 'Task',
    entityLabel: 'Task',
    headerFields: [
        'Subject',
        'Status',
        'OwnerId',
        'Priority',
        'ActivityDate'
    ],
    sections: [
        {
            id: 'grunddaten',
            label: 'Grunddaten',
            fields: [
                {
                    apiName: 'Subject',
                    label: 'Thema',
                    fieldType: 'text',
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'Status',
                    fieldType: 'picklist',
                    picklistOptions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$sfPicklist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfPicklist"])()([
                        {
                            label: 'Open',
                            value: 'Open'
                        },
                        {
                            label: 'Completed',
                            value: 'Completed'
                        },
                        {
                            label: 'Not Started',
                            value: 'Not Started'
                        }
                    ]),
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'Priority',
                    label: 'Priorität',
                    fieldType: 'picklist',
                    picklistOptions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$sfPicklist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfPicklist"])()([
                        {
                            label: 'High',
                            value: 'High'
                        },
                        {
                            label: 'Normal',
                            value: 'Normal'
                        }
                    ]),
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    // #991: Typ-Dropdown (SF-Picklist Task.Type)
                    apiName: 'Type',
                    label: 'Typ',
                    fieldType: 'picklist',
                    picklistOptions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$sfPicklist$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sfPicklist"])()([
                        {
                            label: 'Call',
                            value: 'Call'
                        },
                        {
                            label: 'Meeting',
                            value: 'Meeting'
                        },
                        {
                            label: 'Write E-Mail to Contact',
                            value: 'Write E-Mail to Contact'
                        },
                        {
                            label: 'Check Data Status',
                            value: 'Check Data Status'
                        },
                        {
                            label: 'Update Data',
                            value: 'Update Data'
                        },
                        {
                            label: 'Create Material Proposal',
                            value: 'Create Material Proposal'
                        },
                        {
                            label: 'Create Sample Sending',
                            value: 'Create Sample Sending'
                        },
                        {
                            label: 'Create Material Analysis',
                            value: 'Create Material Analysis'
                        },
                        {
                            label: 'Create Requirement',
                            value: 'Create Requirement'
                        },
                        {
                            label: 'Create Product',
                            value: 'Create Product'
                        },
                        {
                            label: 'Create Invoice',
                            value: 'Create Invoice'
                        },
                        {
                            label: 'Create Onboarding',
                            value: 'Create Onboarding'
                        },
                        {
                            label: 'Create Account',
                            value: 'Create Account'
                        },
                        {
                            label: 'Create Contact',
                            value: 'Create Contact'
                        },
                        {
                            label: 'Create Contact Handover',
                            value: 'Create Contact Handover'
                        },
                        {
                            label: 'Forward Task to',
                            value: 'Forward Task to'
                        },
                        {
                            label: 'Reassign Task to',
                            value: 'Reassign Task to'
                        },
                        {
                            label: 'Close Case',
                            value: 'Close Case'
                        },
                        {
                            label: 'Create',
                            value: 'Create'
                        },
                        {
                            label: 'Other',
                            value: 'Other'
                        }
                    ]),
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'ActivityDate',
                    label: 'Fälligkeitsdatum',
                    fieldType: 'date',
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'OwnerId',
                    label: 'Zugeordnet zu',
                    fieldType: 'lookup',
                    lookupObjectType: 'User',
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    apiName: 'WhoId',
                    label: 'Kontakt',
                    fieldType: 'lookup',
                    lookupObjectType: 'Contact',
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                },
                {
                    // WhatId is a polymorphic SF lookup (Account/Opportunity/custom objects).
                    // Pinned to a single object here as an interim; proper polymorphic support
                    // (dynamic target type + multi-object picker) is tracked in GitLab #335.
                    apiName: 'WhatId',
                    label: 'Bezug zu',
                    fieldType: 'lookup',
                    lookupObjectType: 'Abfallfraktionen__c',
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                }
            ]
        },
        {
            id: 'beschreibung',
            label: 'Beschreibung',
            fields: [
                {
                    apiName: 'Description',
                    label: 'Beschreibung',
                    fieldType: 'textarea',
                    visibleForRoles: [
                        'admin',
                        'staff'
                    ]
                }
            ]
        }
    ],
    relatedLists: [
        {
            relationshipName: 'AttachedContentDocuments',
            label: 'Dateien',
            fields: [
                'Id',
                'Title'
            ],
            maxRows: 10,
            visibleForRoles: [
                'admin',
                'staff'
            ]
        }
    ],
    systemFields: [
        'Id',
        'CreatedDate',
        'CreatedById',
        'LastModifiedDate',
        'LastModifiedById',
        'OwnerId'
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/config/entityFields/TravelExpense.fields.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// CURATED — do not regenerate (--force) without re-applying the lean rules in LEAN-CURATION.md
/**
 * Entity Field Configuration: TravelExpense
 * Postgres TravelExpense entity detail page configuration
 *
 * API: GET  /api/travel-expenses/:id  (detail)
 *      PUT  /api/travel-expenses/:id  (update)
 */ __turbopack_context__.s([
    "TravelExpenseFieldConfig",
    ()=>TravelExpenseFieldConfig
]);
const TravelExpenseFieldConfig = {
    entityType: 'TravelExpense',
    entityLabel: 'Reisekostenabrechnung',
    headerFields: [
        'title',
        'status',
        'startDate',
        'endDate',
        'totalAmount'
    ],
    sections: [
        {
            id: 'basic',
            label: 'Basisinformationen',
            fields: [
                {
                    apiName: 'title',
                    label: 'Titel',
                    fieldType: 'text',
                    required: true
                },
                {
                    apiName: 'description',
                    label: 'Beschreibung',
                    fieldType: 'textarea'
                },
                {
                    apiName: 'startDate',
                    label: 'Startdatum',
                    fieldType: 'date',
                    required: true
                },
                {
                    apiName: 'endDate',
                    label: 'Enddatum',
                    fieldType: 'date',
                    required: true
                },
                {
                    apiName: 'status',
                    label: 'Status',
                    fieldType: 'picklist',
                    picklistOptions: [
                        {
                            label: 'Entwurf',
                            value: 'draft'
                        },
                        {
                            label: 'Eingereicht',
                            value: 'submitted'
                        },
                        {
                            label: 'Genehmigt',
                            value: 'approved'
                        },
                        {
                            label: 'Abgelehnt',
                            value: 'rejected'
                        },
                        {
                            label: 'Bezahlt',
                            value: 'paid'
                        }
                    ]
                },
                {
                    apiName: 'totalAmount',
                    label: 'Gesamtbetrag',
                    fieldType: 'currency',
                    readOnly: true,
                    currencyCode: 'EUR'
                },
                {
                    apiName: 'currency',
                    label: 'Währung',
                    fieldType: 'picklist',
                    picklistOptions: [
                        {
                            label: 'EUR',
                            value: 'EUR'
                        },
                        {
                            label: 'USD',
                            value: 'USD'
                        },
                        {
                            label: 'GBP',
                            value: 'GBP'
                        }
                    ]
                },
                {
                    apiName: 'reimbursementStatus',
                    label: 'Erstattungsstatus',
                    fieldType: 'picklist',
                    picklistOptions: [
                        {
                            label: 'Ausstehend',
                            value: 'pending'
                        },
                        {
                            label: 'Teilweise',
                            value: 'partial'
                        },
                        {
                            label: 'Vollständig',
                            value: 'complete'
                        }
                    ]
                }
            ]
        },
        {
            id: 'system',
            label: 'System',
            fields: [
                {
                    apiName: 'submittedAt',
                    label: 'Eingereicht am',
                    fieldType: 'datetime',
                    readOnly: true
                },
                {
                    apiName: 'approvedAt',
                    label: 'Genehmigt am',
                    fieldType: 'datetime',
                    readOnly: true
                },
                {
                    apiName: 'createdAt',
                    label: 'Erstellt am',
                    fieldType: 'datetime',
                    readOnly: true
                },
                {
                    apiName: 'updatedAt',
                    label: 'Zuletzt geändert am',
                    fieldType: 'datetime',
                    readOnly: true
                }
            ]
        }
    ],
    tabGroups: [
        {
            id: 'stammdaten',
            label: 'Stammdaten',
            sectionIds: [
                'basic'
            ],
            isDefault: true
        },
        {
            id: 'system',
            label: 'System',
            sectionIds: [
                'system'
            ]
        }
    ],
    systemFields: [
        'id',
        'createdAt',
        'updatedAt'
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/config/entityFields/Unternehmenszertifikat.fields.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// CURATED — do not regenerate (--force) without re-applying the lean rules in LEAN-CURATION.md
/**
 * Entity Field Configuration: Unternehmenszertifikat__c (lean staff view)
 *
 * Not in #200 — already lean. Drop the System field section (-> systemFields).
 *
 * NOTE: the Zertifikate__c lookup ("Zertifikate") points at an un-integrated
 * catalog object (no searchDisplayConfig / objectPermissions / detail route) —
 * so the field currently shows a raw ID and cannot be picked. Tracked in
 * GitLab #333 (integrate Zertifikate__c as a lookup + detail object).
 */ __turbopack_context__.s([
    "UnternehmenszertifikatFieldConfig",
    ()=>UnternehmenszertifikatFieldConfig
]);
const UnternehmenszertifikatFieldConfig = {
    entityType: 'Unternehmenszertifikat__c',
    entityLabel: 'Unternehmenszertifikat',
    headerFields: [
        'Name',
        'Account__c',
        'Zertifikate__c',
        'G_ltig_bis__c'
    ],
    // #353: der Kunde lädt hier seine Zertifikatsdatei hoch → Anhänge-Sektion
    // behalten (statt der redundanten "Dateien"-Related-List, die für Externe raus).
    externalAttachments: true,
    sections: [
        {
            id: 'grunddaten',
            label: 'Grunddaten',
            fields: [
                {
                    // #353: Systemvergebener Name (Auto-Nummer, z.B. UZ-0021) — nicht
                    // editierbar; die Kopfzeile zeigt ihn ohnehin.
                    apiName: 'Name',
                    label: 'Zertifikat-Name',
                    fieldType: 'text',
                    readOnly: true
                },
                {
                    // GitLab #228 Phase 4b: customer-facing roles never pick their own
                    // Account — the create endpoint back-fills it from userContext.
                    apiName: 'Account__c',
                    label: 'Account',
                    fieldType: 'lookup',
                    lookupObjectType: 'Account',
                    required: true,
                    readOnlyOnEdit: true,
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent'
                    ]
                },
                {
                    apiName: 'Zertifikate__c',
                    label: 'Zertifikate',
                    fieldType: 'lookup',
                    lookupObjectType: 'Zertifikate__c'
                },
                {
                    // #329 Welle A: für Kunden ausgeblendet — Produktionsstandorte sind
                    // ihnen (noch) nicht sichtbar/wählbar (kaputter Picker + kein
                    // Account-Scope). Kundenansicht der Standorte folgt als eigenes
                    // Feature; dann kann das Feld für user/rigk zurück.
                    apiName: 'Betrifft_Standort__c',
                    label: 'Betrifft Standort',
                    fieldType: 'lookup',
                    lookupObjectType: 'Produktionsstandort__c',
                    visibleForRoles: [
                        'admin',
                        'staff',
                        'agent'
                    ]
                }
            ]
        },
        {
            id: 'gueltigkeit',
            label: 'Gültigkeit',
            fields: [
                {
                    apiName: 'G_ltig_von__c',
                    label: 'Gültig von',
                    fieldType: 'date'
                },
                {
                    apiName: 'G_ltig_bis__c',
                    label: 'Gültig bis',
                    fieldType: 'date'
                }
            ]
        },
        {
            id: 'notizen',
            label: 'Notizen',
            fields: [
                {
                    apiName: 'Notiz__c',
                    label: 'Notiz',
                    fieldType: 'textarea'
                }
            ]
        }
    ],
    // Kunden-Create: Account server-seitig back-gefüllt (#228 Phase 4b), Name ist
    // Auto-Nummer. #362: das Zertifikate-Lookup ist SF-seitig PFLICHT (Katalog-
    // Objekt Zertifikate__c) — ohne Auswahl schlug jeder Kunden-Create mit
    // REQUIRED_FIELD_MISSING fehl; der Katalog ist dafür jetzt als Lookup-Ziel
    // integriert (Union/Permissions/searchDisplayConfig). Die Zertifikatsdatei
    // lädt der Kunde im Anhänge-Schritt bzw. auf der Detailseite hoch.
    createSections: [
        {
            id: 'create_zertifikat',
            label: 'Zertifikat',
            columns: 2,
            visibleForRoles: [
                'user',
                'rigk'
            ],
            fields: [
                {
                    apiName: 'Zertifikate__c',
                    label: 'Zertifikat',
                    fieldType: 'lookup',
                    lookupObjectType: 'Zertifikate__c',
                    required: true
                },
                {
                    apiName: 'G_ltig_von__c',
                    label: 'Gültig von',
                    fieldType: 'date'
                },
                {
                    apiName: 'G_ltig_bis__c',
                    label: 'Gültig bis',
                    fieldType: 'date'
                },
                {
                    apiName: 'Notiz__c',
                    label: 'Notiz',
                    fieldType: 'textarea'
                }
            ]
        }
    ],
    relatedLists: [
        {
            relationshipName: 'AttachedContentDocuments',
            label: 'Dateien',
            fields: [
                'Id',
                'Title'
            ],
            maxRows: 10,
            // #353: für Externe raus — die "Anhänge"-Sektion (externalAttachments)
            // deckt den Datei-Upload/-Blick ab; die Related-List wäre redundant.
            visibleForRoles: [
                'admin',
                'staff',
                'agent'
            ]
        }
    ],
    systemFields: [
        'Id',
        'CreatedDate',
        'CreatedById',
        'LastModifiedDate',
        'LastModifiedById'
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/config/entityFields/User.fields.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// CURATED — do not regenerate (--force) without re-applying the lean rules in LEAN-CURATION.md
/**
 * Entity Field Configuration: User
 * Postgres User entity detail page configuration
 *
 * API: GET  /api/plastship/users/:id  (detail)
 *      PUT  /api/plastship/users/:id  (update)
 */ __turbopack_context__.s([
    "UserFieldConfig",
    ()=>UserFieldConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$usage$2f$roleLabel$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/usage/roleLabel.ts [app-client] (ecmascript)");
;
const UserFieldConfig = {
    entityType: 'User',
    entityLabel: 'Benutzer',
    headerFields: [
        'name',
        'email',
        'role',
        'isActive'
    ],
    sections: [
        {
            id: 'details',
            label: 'Details',
            fields: [
                {
                    apiName: 'name',
                    label: 'Vollständiger Name',
                    fieldType: 'text',
                    readOnly: true
                },
                {
                    apiName: 'firstName',
                    label: 'Vorname',
                    fieldType: 'text'
                },
                {
                    apiName: 'lastName',
                    label: 'Nachname',
                    fieldType: 'text'
                },
                {
                    apiName: 'email',
                    label: 'E-Mail',
                    fieldType: 'email',
                    required: true,
                    readOnly: true
                },
                {
                    apiName: 'role',
                    label: 'Rolle',
                    fieldType: 'picklist',
                    // #1869: alle Rollen aus ROLES (vorher ohne advisor und rigk), Namen aus
                    // der zentralen Quelle (usage.role.*)
                    picklistOptions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$usage$2f$roleLabel$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rollenOptionenMitSchluessel"])(),
                    visibleForRoles: [
                        'admin'
                    ]
                },
                {
                    apiName: 'isActive',
                    label: 'Aktiv',
                    fieldType: 'boolean'
                },
                {
                    apiName: 'image',
                    label: 'Profilbild',
                    fieldType: 'url',
                    // #1714: gesetzt nur über den Upload auf der eigenen Profilseite
                    readOnly: true
                }
            ]
        },
        {
            id: 'company',
            label: 'Unternehmen',
            fields: [
                {
                    apiName: 'companyName',
                    label: 'Firmenname',
                    fieldType: 'text'
                },
                {
                    apiName: 'title',
                    label: 'Position',
                    fieldType: 'text'
                },
                {
                    apiName: 'department',
                    label: 'Abteilung',
                    fieldType: 'text'
                },
                {
                    apiName: 'division',
                    label: 'Unternehmensbereich',
                    fieldType: 'text'
                }
            ]
        },
        {
            id: 'contact',
            label: 'Kontakt',
            fields: [
                {
                    apiName: 'phone',
                    label: 'Telefon',
                    fieldType: 'phone'
                },
                {
                    apiName: 'mobilePhone',
                    label: 'Mobiltelefon',
                    fieldType: 'phone'
                },
                {
                    apiName: 'fax',
                    label: 'Fax',
                    fieldType: 'phone'
                },
                {
                    apiName: 'website',
                    label: 'Website',
                    fieldType: 'url'
                }
            ]
        },
        {
            id: 'address',
            label: 'Adresse',
            fields: [
                {
                    apiName: 'street',
                    label: 'Straße',
                    fieldType: 'text'
                },
                {
                    apiName: 'city',
                    label: 'Stadt',
                    fieldType: 'text'
                },
                {
                    apiName: 'state',
                    label: 'Bundesland',
                    fieldType: 'text'
                },
                {
                    apiName: 'postalCode',
                    label: 'Postleitzahl',
                    fieldType: 'text'
                },
                {
                    apiName: 'country',
                    label: 'Land',
                    fieldType: 'text'
                }
            ]
        },
        {
            id: 'preferences',
            label: 'Einstellungen',
            fields: [
                {
                    apiName: 'language',
                    label: 'Sprache',
                    fieldType: 'picklist',
                    picklistOptions: [
                        {
                            label: 'Deutsch',
                            value: 'de'
                        },
                        {
                            label: 'English (US)',
                            value: 'en-US'
                        },
                        {
                            label: 'English (GB)',
                            value: 'en-GB'
                        }
                    ]
                },
                {
                    apiName: 'themeMode',
                    label: 'Theme',
                    fieldType: 'picklist',
                    picklistOptions: [
                        {
                            label: 'Light',
                            value: 'light'
                        },
                        {
                            label: 'Dark',
                            value: 'dark'
                        }
                    ]
                },
                {
                    apiName: 'newsletter',
                    label: 'Newsletter',
                    fieldType: 'boolean'
                }
            ]
        },
        {
            id: 'system',
            label: 'System',
            fields: [
                {
                    apiName: 'emailVerified',
                    label: 'E-Mail verifiziert',
                    fieldType: 'datetime',
                    readOnly: true
                },
                {
                    apiName: 'createdAt',
                    label: 'Erstellt am',
                    fieldType: 'datetime',
                    readOnly: true
                },
                {
                    apiName: 'updatedAt',
                    label: 'Zuletzt geändert am',
                    fieldType: 'datetime',
                    readOnly: true
                }
            ]
        }
    ],
    tabGroups: [
        {
            id: 'stammdaten',
            label: 'Stammdaten',
            sectionIds: [
                'details',
                'company'
            ],
            isDefault: true
        },
        {
            id: 'kontakt',
            label: 'Kontakt & Adresse',
            sectionIds: [
                'contact',
                'address'
            ]
        },
        {
            id: 'einstellungen',
            label: 'Einstellungen',
            sectionIds: [
                'preferences',
                'system'
            ]
        }
    ],
    systemFields: [
        'id',
        'createdAt',
        'updatedAt'
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/config/entityFields/Zertifikate.fields.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// CURATED — do not regenerate (--force) without re-applying the lean rules in LEAN-CURATION.md
/**
 * Entity Field Configuration: Zertifikate__c (Zertifikats-Katalog, #333)
 *
 * Reines Nachschlage-Objekt: laut SF-Describe trägt es nur Name + Systemfelder
 * (17 Katalogeinträge, Prefix a0m). Wert der Detailseite ist die Related List
 * der Unternehmenszertifikate, die den Eintrag verwenden
 * (Unternehmenszertifikate__r ← Unternehmenszertifikat__c.Zertifikate__c).
 * Pflege (Name) nur admin/staff — Kundenrollen sehen den Katalog nur über
 * das Lookup (#362).
 */ __turbopack_context__.s([
    "ZertifikateFieldConfig",
    ()=>ZertifikateFieldConfig
]);
const ZertifikateFieldConfig = {
    entityType: 'Zertifikate__c',
    entityLabel: 'Zertifikat (Katalog)',
    headerFields: [
        'Name'
    ],
    sections: [
        {
            id: 'katalog',
            label: 'Katalog-Eintrag',
            columns: 2,
            visibleForRoles: [
                'admin',
                'staff',
                'agent'
            ],
            fields: [
                {
                    apiName: 'Name',
                    label: 'Zertifikat',
                    fieldType: 'text',
                    required: true
                },
                {
                    apiName: 'OwnerId',
                    label: 'Inhaber',
                    fieldType: 'lookup',
                    lookupObjectType: 'User'
                }
            ]
        }
    ],
    relatedLists: [
        {
            relationshipName: 'Unternehmenszertifikate__r',
            label: 'Unternehmenszertifikate',
            // Spalten analog #202-Prinzip: wer nutzt den Katalogeintrag, mit
            // Gültigkeit auf einen Blick.
            fields: [
                'Id',
                'Name',
                'Account__c',
                'G_ltig_von__c',
                'G_ltig_bis__c'
            ],
            maxRows: 20,
            relatedEntityType: 'CompanyCertificate',
            visibleForRoles: [
                'admin',
                'staff',
                'agent'
            ]
        },
        {
            relationshipName: 'AttachedContentDocuments',
            label: 'Dateien',
            fields: [
                'Id',
                'Title'
            ],
            maxRows: 10,
            visibleForRoles: [
                'admin',
                'staff'
            ]
        }
    ],
    systemFields: [
        'Id',
        'CreatedDate',
        'CreatedById',
        'LastModifiedDate',
        'LastModifiedById'
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/config/entityFields/dependsOn.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * #917: Helfer für abhängige Lookups (FieldConfig.dependsOn).
 *
 * Aus dem aktuellen Datensatz/Formularstand wird der Filter für die
 * Lookup-Suche abgeleitet: `{ field: matchField, value: <Wert des steuernden
 * Felds> }`. Ist das steuernde Feld leer, gibt es keinen Filter — das
 * abhängige Feld wird dann gesperrt (Formular) bzw. ungefiltert angezeigt
 * (Detail, Bestandswerte).
 */ __turbopack_context__.s([
    "getDependsOnLookupFilter",
    ()=>getDependsOnLookupFilter,
    "lookupFilterQuery",
    ()=>lookupFilterQuery
]);
function getDependsOnLookupFilter(field, values) {
    const dep = field.dependsOn;
    if (!dep || !values) return undefined;
    const controlling = values[dep.field];
    if (typeof controlling !== 'string' || controlling.trim() === '') return undefined;
    return {
        field: dep.matchField,
        value: controlling
    };
}
function lookupFilterQuery(filter) {
    if (!filter) return '';
    return `&filterField=${encodeURIComponent(filter.field)}&filterValue=${encodeURIComponent(filter.value)}`;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/config/entityFields/entityFieldI18n.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ENTITY_TEXT_PREFIX",
    ()=>ENTITY_TEXT_PREFIX,
    "collectEntityTexts",
    ()=>collectEntityTexts,
    "entityTextKey",
    ()=>entityTextKey,
    "localizeEntityFieldConfig",
    ()=>localizeEntityFieldConfig,
    "localizeField",
    ()=>localizeField,
    "localizePicklistOptions",
    ()=>localizePicklistOptions,
    "localizeRelatedList",
    ()=>localizeRelatedList,
    "localizeSection",
    ()=>localizeSection,
    "localizeTabGroup",
    ()=>localizeTabGroup,
    "translateEntityText",
    ()=>translateEntityText,
    "translateFieldLabel",
    ()=>translateFieldLabel
]);
/**
 * Texte der Feld-Configs in der Sprache des Nutzers (#1626)
 *
 * Die `*.fields.ts` führen ihre Anzeigetexte als lesbare Strings. Übersetzt
 * werden sie über einen Schlüssel, der aus dem Text selbst abgeleitet ist —
 * `entityFields.<Kurzform>_<Hash>` — mit dem Text als `defaultValue`:
 *
 * - niemand pflegt 2000 `labelKey` von Hand,
 * - derselbe Text hat überall dieselbe Übersetzung,
 * - ein geänderter Text bekommt automatisch einen neuen Schlüssel, eine
 *   veraltete Übersetzung kann also nicht stehen bleiben.
 *
 * Braucht ein Text je Kontext eine andere Übersetzung, hat ein explizites
 * `labelKey` an Feld, Sektion oder Related List Vorrang.
 *
 * Reine Funktionen ohne React — auch aus Tests und Skripten nutzbar. Der Hook
 * dazu liegt in `app/hooks/useEntityText.ts`.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$fieldLabels$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/entityFields/fieldLabels.ts [app-client] (ecmascript)");
;
const ENTITY_TEXT_PREFIX = 'entityFields.';
const UMLAUTE = {
    ä: 'ae',
    ö: 'oe',
    ü: 'ue',
    Ä: 'Ae',
    Ö: 'Oe',
    Ü: 'Ue',
    ß: 'ss'
};
/** FNV-1a, 32 Bit — klein, deterministisch, im Browser wie in Node gleich. */ const hash = (text)=>{
    let h = 0x811c9dc5;
    for(let i = 0; i < text.length; i++){
        h ^= text.charCodeAt(i);
        h = Math.imul(h, 0x01000193);
    }
    return (h >>> 0).toString(16).padStart(8, '0');
};
const entityTextKey = (text)=>{
    const kurzform = text.replace(/[äöüÄÖÜß]/g, (zeichen)=>UMLAUTE[zeichen]).replace(/[^A-Za-z0-9]+/g, '_').replace(/^_+|_+$/g, '').slice(0, 40);
    return `${ENTITY_TEXT_PREFIX}${kurzform ? `${kurzform}_` : ''}${hash(text)}`;
};
const translateEntityText = (tr, text, key)=>text ? tr(key ?? entityTextKey(text), {
        defaultValue: text
    }) : text;
const translateFieldLabel = (tr, apiName)=>translateEntityText(tr, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$fieldLabels$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFieldLabel"])(apiName));
const localizePicklistOptions = (options, tr)=>options.map((option)=>({
            ...option,
            label: translateEntityText(tr, option.label, option.labelKey)
        }));
const localizeField = (field, tr)=>({
        ...field,
        label: translateEntityText(tr, field.label ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$fieldLabels$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFieldLabel"])(field.apiName), field.labelKey),
        ...field.helpText ? {
            helpText: translateEntityText(tr, field.helpText)
        } : {},
        ...field.placeholder ? {
            placeholder: translateEntityText(tr, field.placeholder)
        } : {},
        ...field.picklistOptions ? {
            picklistOptions: localizePicklistOptions(field.picklistOptions, tr)
        } : {}
    });
const localizeSection = (section, tr)=>({
        ...section,
        label: translateEntityText(tr, section.label, section.labelKey),
        fields: section.fields.map((field)=>localizeField(field, tr))
    });
const localizeRelatedList = (relatedList, tr)=>({
        ...relatedList,
        label: translateEntityText(tr, relatedList.label, relatedList.labelKey)
    });
const localizeTabGroup = (group, tr)=>({
        ...group,
        label: translateEntityText(tr, group.label)
    });
const localizeEntityFieldConfig = (config, tr)=>({
        ...config,
        entityLabel: translateEntityText(tr, config.entityLabel, config.entityLabelKey),
        sections: config.sections.map((section)=>localizeSection(section, tr)),
        ...config.createSections ? {
            createSections: config.createSections.map((section)=>localizeSection(section, tr))
        } : {},
        ...config.tabGroups ? {
            tabGroups: config.tabGroups.map((group)=>localizeTabGroup(group, tr))
        } : {},
        ...config.relatedLists ? {
            relatedLists: config.relatedLists.map((list)=>localizeRelatedList(list, tr))
        } : {},
        ...config.relatedListTabGroups ? {
            relatedListTabGroups: config.relatedListTabGroups.map((group)=>localizeTabGroup(group, tr))
        } : {}
    });
const collectEntityTexts = (configs, /** Texte aus weiteren Quellen, die über denselben Schlüssel übersetzt werden */ extraTexts = [])=>{
    const texts = new Map();
    const explicitKeys = new Map();
    const collisions = [];
    const add = (text, key)=>{
        if (!text) return;
        if (key) {
            explicitKeys.set(key, text);
            return;
        }
        const derived = entityTextKey(text);
        const bekannt = texts.get(derived);
        if (bekannt !== undefined && bekannt !== text) collisions.push([
            bekannt,
            text
        ]);
        texts.set(derived, text);
    };
    const addApiNames = (apiNames)=>apiNames?.forEach((apiName)=>add((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$fieldLabels$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFieldLabel"])(apiName)));
    const addSections = (sections)=>sections?.forEach((section)=>{
            add(section.label, section.labelKey);
            section.fields.forEach((field)=>{
                add(field.label ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$fieldLabels$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFieldLabel"])(field.apiName), field.labelKey);
                add(field.helpText);
                add(field.placeholder);
                field.picklistOptions?.forEach((option)=>add(option.label, option.labelKey));
            });
        });
    for (const config of Object.values(configs)){
        add(config.entityLabel, config.entityLabelKey);
        addSections(config.sections);
        addSections(config.createSections);
        config.tabGroups?.forEach((group)=>add(group.label));
        config.relatedListTabGroups?.forEach((group)=>add(group.label));
        config.relatedLists?.forEach((list)=>{
            add(list.label, list.labelKey);
            addApiNames(list.fields);
            addApiNames(list.hiddenFields);
        });
        addApiNames(config.headerFields);
        addApiNames(config.systemFields);
    }
    Object.values(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$fieldLabels$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FIELD_LABELS"]).forEach((label)=>add(label));
    extraTexts.forEach((text)=>add(text));
    return {
        texts,
        explicitKeys,
        collisions
    };
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/config/entityFields/fieldLabels.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Field Label Mappings
 *
 * Maps Salesforce API names to correct German/English labels.
 * Fixes issues where umlauts were lost in API name encoding (ä→a, ö→o, ü→u, ß→ss).
 *
 * Usage:
 *   import { getFieldLabel } from '@/config/entityFields/fieldLabels'
 *   const label = getFieldLabel('Verh_ltnis__c') // Returns "Verhältnis"
 */ /**
 * Mapping of API names to corrected labels
 * Key: Salesforce API name
 * Value: Correct German/English label
 */ __turbopack_context__.s([
    "FIELD_LABELS",
    ()=>FIELD_LABELS,
    "getFieldLabel",
    ()=>getFieldLabel,
    "hasCustomLabel",
    ()=>hasCustomLabel
]);
const FIELD_LABELS = {
    // ===== Account Fields =====
    Verh_ltnis__c: 'Verhältnis',
    Standard_Gesch_ftsablauf__c: 'Standard Geschäftsablauf',
    Anzahl_KISS_Pr_fungen_avisiert__c: 'Anzahl KISS-Prüfungen avisiert',
    Kunde_Materialpr_fung__c: 'Kunde Materialprüfung',
    Ma_nahmen__c: 'Maßnahmen',
    Ust_ID__c: 'USt-ID',
    // ===== Order Fields =====
    Zust_ndiger_Kontakt_Lieferant__c: 'Zuständiger Kontakt Lieferant',
    Zust_ndiger_Kontakt_Kunde__c: 'Zuständiger Kontakt Kunde',
    Vorlage_AB_Stra_e__c: 'Vorlage AB Straße',
    Hinweis_Auftragsbest_tigung__c: 'Hinweis Auftragsbestätigung',
    Verpackung_bersetzung_EN_del__c: 'Verpackung Übersetzung EN',
    Tats_chliche_Liefermenge__c: 'Tatsächliche Liefermenge',
    Tats_chliches_Abholdatum__c: 'Tatsächliches Abholdatum',
    Tats_chliches_Lieferdatum__c: 'Tatsächliches Lieferdatum',
    AVV_Nummer_Anzeige__c: 'AVV-Nummer Anzeige',
    Voralge_Dispo_Transp_PLZ_Text__c: 'Vorlage Dispo Transport PLZ Text',
    // ===== Materialanalyse Fields =====
    Ergebnis_ben_tigt_bis__c: 'Ergebnis benötigt bis',
    Kategorie_f_r_Qualit_tseinsch_tzung__c: 'Kategorie für Qualitätseinschätzung',
    // ===== MonitoredMaterial Fields =====
    Sch_ttdichte__c: 'Schüttdichte',
    Beschreibung_Analysen_Optische_Qualit_t__c: 'Beschreibung Analysen Optische Qualität',
    Anzahl_Datens_tze_Optische_Qualit_t__c: 'Anzahl Datensätze Optische Qualität',
    Anzahl_Datens_tze_Geruch__c: 'Anzahl Datensätze Geruch',
    Gesamtqualit_t__c: 'Gesamtqualität',
    Optische_Qualit_t__c: 'Optische Qualität',
    Mechanische_Qualit_t__c: 'Mechanische Qualität',
    Polymerqualit_t__c: 'Polymerqualität',
    Geruchsqualit_t__c: 'Geruchsqualität',
    Summe_Defekte_gro__c: 'Summe Defekte groß',
    Oberfl_chenfeuchte_Test_Standard_IS__c: 'Oberflächenfeuchte Test Standard ISO',
    Kerbschlagz_higkeit_Charpy__c: 'Kerbschlagzähigkeit Charpy',
    // ===== Project Fields =====
    Projektpriorit_t__c: 'Projektpriorität',
    Risikoabsch_tzung__c: 'Risikoabschätzung',
    Potenzialabsch_tzung__c: 'Potenzialabschätzung',
    // ===== Bedarfe Fields =====
    Jahresmengenbest_tigung__c: 'Jahresmengenbestätigung',
    // ===== SupplierAudit Fields =====
    Begr_ndung_der_Bewertung__c: 'Begründung der Bewertung',
    // ===== Common abbreviation expansions =====
    PLZ__c: 'PLZ (Postleitzahl)',
    AVV_Nummer__c: 'AVV-Nummer',
    MFR_kg__c: 'MFR (kg)',
    MVR__c: 'MVR (Melt Volume Rate)',
    TDS_check_up__c: 'TDS Check-up',
    PCF_Virgin_Material_kg_CO2_eq__c: 'PCF Virgin Material (kg CO₂ eq)',
    Product_Carbon_Footprint_kg_CO2_eq__c: 'Product Carbon Footprint (kg CO₂ eq)',
    Potential_CO2e_savings__c: 'Potenzial CO₂e Einsparung',
    // ===== Document attachment fields =====
    Document_Order_attached__c: 'Bestellung angehängt',
    Document_Order_Confirmation_attached__c: 'Auftragsbestätigung angehängt',
    Document_Order_to_Supplier_attached__c: 'Bestellung an Lieferant angehängt',
    Document_Transport_Order_attached__c: 'Transportauftrag angehängt',
    Document_Pickup_Note_attached__c: 'Abholschein angehängt',
    Document_Delivery_Note_attached__c: 'Lieferschein angehängt',
    Document_CoA_attached__c: 'CoA angehängt',
    Document_Annex_VII_attached__c: 'Anlage VII angehängt',
    Document_Weighing_Note_Supplier_attached__c: 'Wiegeschein Lieferant angehängt',
    Document_Weighing_Note_Customer_attached__c: 'Wiegeschein Kunde angehängt',
    Document_CMR_attached__c: 'CMR angehängt',
    Document_Original_TDS_attached__c: 'Original TDS angehängt',
    Document_plastship_TDS_attached__c: 'plastship TDS angehängt',
    Document_Original_MSDS_attached__c: 'Original MSDS angehängt',
    Document_plastship_MSDS_attached__c: 'plastship MSDS angehängt',
    Document_Additional_Analysis_attached__c: 'Zusätzliche Analyse angehängt',
    // ===== Rate/Percentage fields =====
    TotalInformation_rate__c: 'Gesamtinformationen (%)',
    AccountInformation_rate__c: 'Account-Informationen (%)',
    ContactInformation_rate__c: 'Kontakt-Informationen (%)',
    AdditionalInformation_rate__c: 'Zusätzliche Informationen (%)',
    InvoiceInformation_rate__c: 'Rechnungsinformationen (%)',
    ResearchInformation_rate__c: 'Recherche-Informationen (%)',
    Processing_Status_percent__c: 'Bearbeitungsstatus (%)',
    MP_Progress_percent__c: 'MP Fortschritt (%)',
    // ===== SampleSending Fields =====
    Versandart_Muster__c: 'Versandart Muster',
    Empf_nger_Account__c: 'Empfänger Account',
    Sichtbar_f_r_Kunden__c: 'Sichtbar für Kunden',
    // ===== Product Fields =====
    F_llstoff_Text__c: 'Füllstoff Text',
    Hauptpolymer__c: 'Hauptpolymer',
    Materialform__c: 'Materialform',
    Recyclatdefinition__c: 'Rezyklat-Definition',
    // ===== Produktionsstandort Fields =====
    Stra_e__c: 'Straße',
    Stra_e_Nummer__c: 'Straßen-Nummer'
};
function getFieldLabel(apiName) {
    // Check for explicit mapping first
    if (FIELD_LABELS[apiName]) {
        return FIELD_LABELS[apiName];
    }
    // Auto-format: remove __c, replace underscores, add spaces between camelCase
    return apiName.replace(/__c$/, '').replace(/__r$/, '').replace(/_/g, ' ').replace(/([a-z])([A-Z])/g, '$1 $2').trim();
}
function hasCustomLabel(apiName) {
    return apiName in FIELD_LABELS;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/config/entityFields/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "entityFieldConfigs",
    ()=>entityFieldConfigs,
    "getEntityFieldConfig",
    ()=>getEntityFieldConfig
]);
/**
 * Entity Field Configurations Index
 * Auto-generated - do not edit manually
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/entityFields/types.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$useEntityFieldConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/entityFields/useEntityFieldConfig.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$Abrechnung$2e$fields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/entityFields/Abrechnung.fields.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$Account$2e$fields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/entityFields/Account.fields.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$Bedarfe$2e$fields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/entityFields/Bedarfe.fields.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$Case$2e$fields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/entityFields/Case.fields.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$Contact$2e$fields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/entityFields/Contact.fields.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$Contract$2e$fields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/entityFields/Contract.fields.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$Kostenstelle$2e$fields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/entityFields/Kostenstelle.fields.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$AktuellerPreisUndVerfugbarkeit$2e$fields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/entityFields/AktuellerPreisUndVerfugbarkeit.fields.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$Kontaktbergaben$2e$fields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/entityFields/Kontaktbergaben.fields.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$MaterialProposal$2e$fields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/entityFields/MaterialProposal.fields.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$Materialanalyse$2e$fields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/entityFields/Materialanalyse.fields.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$MonitoredMaterial$2e$fields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/entityFields/MonitoredMaterial.fields.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$Onboarding$2e$fields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/entityFields/Onboarding.fields.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$Opportunity$2e$fields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/entityFields/Opportunity.fields.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$OrderItem$2e$fields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/entityFields/OrderItem.fields.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$Order$2e$fields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/entityFields/Order.fields.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$Lohn_$5f$c$2e$fields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/entityFields/Lohn__c.fields.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$Product2$2e$fields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/entityFields/Product2.fields.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$Produktionsstandort$2e$fields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/entityFields/Produktionsstandort.fields.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$Projekt$2e$fields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/entityFields/Projekt.fields.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$SampleFeedback$2e$fields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/entityFields/SampleFeedback.fields.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$SampleSending$2e$fields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/entityFields/SampleSending.fields.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$SupplierAudit$2e$fields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/entityFields/SupplierAudit.fields.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$Task$2e$fields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/entityFields/Task.fields.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$Unternehmenszertifikat$2e$fields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/entityFields/Unternehmenszertifikat.fields.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$Zertifikate$2e$fields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/entityFields/Zertifikate.fields.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$User$2e$fields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/entityFields/User.fields.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$RecyclateGrade$2e$fields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/entityFields/RecyclateGrade.fields.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$RecyclateCompatibility$2e$fields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/entityFields/RecyclateCompatibility.fields.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$Notification$2e$fields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/entityFields/Notification.fields.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$TravelExpense$2e$fields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/entityFields/TravelExpense.fields.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$Prozessfeedback$2e$fields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/entityFields/Prozessfeedback.fields.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$Reklamation$2e$fields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/entityFields/Reklamation.fields.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$AuditProperty$2e$fields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/entityFields/AuditProperty.fields.ts [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const entityFieldConfigs = {
    Abrechnung__c: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$Abrechnung$2e$fields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AbrechnungFieldConfig"],
    Account: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$Account$2e$fields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccountFieldConfig"],
    Bedarfe__c: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$Bedarfe$2e$fields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BedarfeFieldConfig"],
    Case: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$Case$2e$fields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CaseFieldConfig"],
    Contact: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$Contact$2e$fields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContactFieldConfig"],
    // #449: Verträge (Standard-Objekt)
    Contract: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$Contract$2e$fields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContractFieldConfig"],
    // #325: Kostenstelle
    Kostenstelle_plastship__c: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$Kostenstelle$2e$fields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KostenstelleFieldConfig"],
    Aktueller_Preis_und_Verf_gbarkeit__c: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$AktuellerPreisUndVerfugbarkeit$2e$fields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AktuellerPreisUndVerfugbarkeitFieldConfig"],
    Kontakt_Übergaben__c: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$Kontaktbergaben$2e$fields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KontaktbergabenFieldConfig"],
    // #330: SF verschluckt den Umlaut — das echte Objekt heißt Kontakt_bergaben__c.
    // Die Detail-Route schlägt mit dem SF-Namen nach; ohne diesen Alias fand sie
    // keine Config und die Seite hatte GAR KEINE Related Lists (analog Supplier_audit__c).
    Kontakt_bergaben__c: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$Kontaktbergaben$2e$fields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KontaktbergabenFieldConfig"],
    Material_Proposal__c: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$MaterialProposal$2e$fields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MaterialProposalFieldConfig"],
    Materialanalyse__c: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$Materialanalyse$2e$fields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MaterialanalyseFieldConfig"],
    Monitored_Material__c: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$MonitoredMaterial$2e$fields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MonitoredMaterialFieldConfig"],
    Onboarding__c: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$Onboarding$2e$fields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OnboardingFieldConfig"],
    Opportunity: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$Opportunity$2e$fields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OpportunityFieldConfig"],
    OrderItem: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$OrderItem$2e$fields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrderItemFieldConfig"],
    Order: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$Order$2e$fields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrderFieldConfig"],
    Lohn__c: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$Lohn_$5f$c$2e$fields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LohnFieldConfig"],
    Product2: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$Product2$2e$fields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Product2FieldConfig"],
    Produktionsstandort__c: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$Produktionsstandort$2e$fields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProduktionsstandortFieldConfig"],
    Projekt__c: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$Projekt$2e$fields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProjektFieldConfig"],
    // #384: Prozessfeedback/CAPA
    Prozessfeedback__c: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$Prozessfeedback$2e$fields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProzessfeedbackFieldConfig"],
    Reklamation__c: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$Reklamation$2e$fields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReklamationFieldConfig"],
    Sample_Feedback__c: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$SampleFeedback$2e$fields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SampleFeedbackFieldConfig"],
    Sample_Sending__c: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$SampleSending$2e$fields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SampleSendingFieldConfig"],
    Supplier_Audit__c: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$SupplierAudit$2e$fields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SupplierAuditFieldConfig"],
    Task: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$Task$2e$fields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TaskFieldConfig"],
    Unternehmenszertifikat__c: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$Unternehmenszertifikat$2e$fields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UnternehmenszertifikatFieldConfig"],
    // #333: Zertifikats-Katalog (reines Nachschlage-Objekt)
    Zertifikate__c: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$Zertifikate$2e$fields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZertifikateFieldConfig"],
    // #331: Prüfparameter
    AuditProperty__c: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$AuditProperty$2e$fields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuditPropertyFieldConfig"],
    User: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$User$2e$fields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserFieldConfig"],
    RecyclateGrade: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$RecyclateGrade$2e$fields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RecyclateGradeFieldConfig"],
    RecyclateCompatibility: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$RecyclateCompatibility$2e$fields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RecyclateCompatibilityFieldConfig"],
    Notification: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$Notification$2e$fields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NotificationFieldConfig"],
    TravelExpense: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$TravelExpense$2e$fields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TravelExpenseFieldConfig"]
};
function getEntityFieldConfig(entityType) {
    return entityFieldConfigs[entityType];
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/config/entityFields/preview.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Drawer-Feldlisten (#200): kuratierte Auswahl + Gruppierung je Objekt für den
 * Side-Drawer (EntityPreviewPanel). Nur Feldnamen — Metadaten (Typ/Picklist/
 * Lookup/Währung) löst der Drawer zur Renderzeit aus der EntityFieldConfig auf;
 * was nicht in getUpdatableFields steht (Formeln, Rollups), rendert read-only.
 */ __turbopack_context__.s([
    "PREVIEW_FIELD_CONFIGS",
    ()=>PREVIEW_FIELD_CONFIGS,
    "getPreviewSections",
    ()=>getPreviewSections
]);
const PREVIEW_FIELD_CONFIGS = {
    Order: [
        {
            id: 'kopfdaten',
            label: 'Kopfdaten & Status',
            fields: [
                'Referenznummer_plastship__c',
                'Owner_Name__c',
                'Auftragsrichtung__c',
                'Status',
                // #1811: Vertrag (Lookup, klickbar) — Auftrag aus Vertrags-/Projektlisten einordnen
                'ContractId',
                // #1183 Modell v5 — AB-Klicktest 08.10.: Entscheid direkt unter dem Status
                'Fakturierungsstatus__c',
                'Keine_Ausgangsrechnung_n_tig__c',
                'Keine_Ausgangsrechnung_Grund__c',
                'Type',
                'RIGK_Disponummer__c',
                'PoNumber'
            ]
        },
        {
            id: 'parteien',
            label: 'Relevante Parteien & Kontakte',
            fields: [
                'AccountId',
                'CustomerAuthorizedById',
                'Produktion_Delivery__c',
                // #1647: Adresse direkt unter dem Standort-Namen
                'Delivery_Site__c',
                'Ansprechpartner_Transport_Lieferstelle__c',
                'Lieferant__c',
                'Zust_ndiger_Kontakt_Lieferant__c',
                'Produktionsstandort__c',
                'Loading_Site__c',
                'Ansprechpartner_Transport_Ladestelle__c',
                'Transporteur_NEU__c',
                'Transporteur_Ansprechpartner_NEU__c'
            ]
        },
        {
            id: 'auftragsdetails',
            label: 'Auftragsdetails & Vorgaben',
            fields: [
                'Verpackung__c',
                'Vorlage_Bestellung_Transportart__c',
                // #1652: Mindestladegewicht (AB / Bestellung)
                'Vorlage_AB_Mindestladegew__c',
                'Vorlage_Bestellung_Mindestladegewicht__c',
                'AVV_Nummer__c',
                'Incoterm__c',
                'Incoterm_Einkauf__c'
            ]
        },
        {
            id: 'termine',
            label: 'Termine & Logistik',
            fields: [
                // #1811: Startdatum
                'EffectiveDate',
                'Datum_Abholung_NEU__c',
                'Datum_ETA_NEU__c',
                'Datum_tats_Anlieferung_NEU__c',
                'Truck_Nr__c',
                'Anweisungen_Transporteur_Ladestelle__c',
                'Anweisungen_Transporteur_Entladestelle__c',
                'Transportpreis__c'
            ]
        },
        {
            id: 'mengen',
            label: 'Mengen & Abrechnungsvorbereitung',
            fields: [
                'TotalAmount',
                'Gesamtmarge__c',
                'Liefermenge__c',
                'Tats_chliche_Liefermenge__c',
                'Rechnungen_pr_fen__c',
                // #1183 Modell v5
                'Positionen_offen__c',
                'Betrag_Ausgangsrechnungen_Kunde__c',
                'Betrag_Eingangsrechnungen_Lieferant__c',
                'Betrag_Eingangsrechnungen_Sales_Agent__c',
                'Betrag_Eingangsrechnungen_Sonstige__c',
                'Betrag_Eingangsrechnungen_Transporteur__c',
                'Betrag_Rechnung_Nachlass_Kunde__c',
                'Betrag_Rechnung_Nachlass_Lieferant__c',
                'Betrag_Vorkasse_gezahlt__c'
            ]
        },
        {
            id: 'dokumente',
            label: 'Dokumenten-Tracking',
            fields: [
                'Document_Order_attached__c',
                'Document_Transport_Order_attached__c',
                'Document_Delivery_Note_attached__c',
                'Document_Weighing_Note_Supplier_attached__c',
                'Document_Weighing_Note_Customer_attached__c'
            ]
        }
    ],
    Account: [
        {
            id: 'stammdaten',
            label: 'Stammdaten',
            fields: [
                'OwnerId',
                'Name',
                'Industry',
                'Verh_ltnis__c',
                'Description',
                'LastModifiedDate',
                'LastActivityDate',
                'LastViewedDate'
            ]
        },
        {
            id: 'raten',
            label: 'Informationsraten',
            fields: [
                'TotalInformation_rate__c',
                'AccountInformation_rate__c',
                'ResearchInformation_rate__c',
                'InvoiceInformation_rate__c',
                'ContactInformation_rate__c'
            ]
        },
        {
            id: 'zaehler',
            label: 'Zähler',
            fields: [
                'Count_Dienstleistungsmonitor__c',
                'Count_Produktionsstandort__c',
                'Count_Audits__c',
                'Count_Certificates__c'
            ]
        },
        {
            // #848: Geschäftsbeziehungs-Flags — fürs schnelle Einordnen eines
            // Accounts auch im Drawer sichtbar (Reihenfolge wie Detail-Sektion)
            id: 'dienstleistungsmonitor',
            label: 'Dienstleistungsmonitor',
            fields: [
                'KISS_Kunde__c',
                'Kunde_Werksentsorgung__c',
                'Kunde_Materialeinkauf__c',
                'Transporteur__c',
                'Kunde_Partnermodell__c',
                'Kunde_Zertifizierung__c',
                'Dienstleister_Sonstige__c',
                'Kooperationspartner__c',
                'Zugesagtes_KISS_Kontingent__c',
                'Anzahl_KISS_Pr_fungen_avisiert__c',
                'Kunde_Materialpr_fung__c',
                'Kunde_Materialverkauf__c',
                'Dienstleister_Lohn__c',
                'Kunde_Digitale_Services__c',
                'Kunde_Beratung__c',
                'Agent__c'
            ]
        }
    ],
    Bedarfe__c: [
        {
            id: 'kopfdaten',
            label: 'Kopfdaten',
            fields: [
                'OwnerId',
                'Name',
                'Beschreibung_Bedarf__c',
                'Account__c',
                'Bedarfsstatus__c',
                'Count_Material_Proposal__c',
                'Projekt__c',
                'Monatsbedarf_t__c',
                'Zielpreis__c'
            ]
        },
        {
            id: 'material',
            label: 'Material',
            fields: [
                'Materialkategorie__c',
                'Hauptpolymer__c',
                'Materialtyp__c',
                'Materialfarbe__c',
                'Anwendung__c',
                'F_llstoff_Text__c'
            ]
        },
        {
            id: 'kennwerte',
            label: 'Kennwerte',
            fields: [
                'MFR_Min__c',
                'MFR_Max__c',
                'MFR_Temp__c',
                'MFR_kg__c',
                'Dichte_Min__c',
                'Dichte_Max__c',
                'Aschegehalt_Max__c',
                'Korngr_e_mm_Max__c',
                'Kerbschlagzaehigkeit_Min__c',
                'Zug_E_Modul_Min__c'
            ]
        },
        {
            id: 'aktivitaet',
            label: 'Aktivität',
            fields: [
                'LastModifiedDate',
                'LastActivityDate',
                'LastViewedDate'
            ]
        }
    ],
    Product2: [
        {
            id: 'kopfdaten',
            label: 'Kopfdaten',
            // Spec nennt OwnerId — Product2 hat SF-seitig keinen Owner.
            // #1575: Sales Intent ganz oben; Sichtbarkeit (nur intern) kommt aus
            // visibleForRoles in Product2.fields.ts, der Drawer filtert danach.
            fields: [
                'Sales_Intent__c',
                'ProductCode',
                'Name',
                'Trade_Name__c',
                'Materialkategorie__c',
                'Platform_Price__c',
                'Amount_monthly__c',
                'Tonnage_per_truck__c'
            ]
        },
        {
            id: 'material',
            label: 'Material',
            fields: [
                'Main_polymer__c',
                'Material_type__c',
                'Rezyklatdefinition__c',
                'Material_colour__c',
                'Filler_Material_Text__c',
                'Foreign_Polymers_Text__c',
                'Contaminants_Text__c',
                'Standard_Packaging__c'
            ]
        },
        {
            // #831/#799: Abfallfraktion direkt im Drawer pflegbar (Lookup) — erst
            // damit wird die AVV-Nummer am Auftrag befüllbar (#799-Kette).
            id: 'abfallfraktion',
            label: 'Abfallfraktion',
            fields: [
                'Abfallfraktionen__c',
                'Abfallfraktion_Zuordnung_Typ__c',
                'Abfallfraktion_Kunststoff__c',
                'Abfallfraktion_Herkunft__c'
            ]
        },
        {
            id: 'kennwerte',
            label: 'Kennwerte & Labor',
            fields: [
                'MFR_Min__c',
                'MFR_Test_Standard_ISO_1133__c',
                'MFR_Temp__c',
                'MFR_kg__c',
                'Dichte_Min__c',
                'Dichte_Test_Standard_ISO_1183__c',
                'Aschegehalt_Min__c',
                'Aschegehalt_Test_Standard_ISO_3451__c',
                'Korngr_e_mm_Min__c',
                'Korngr_e_mm__c',
                'Kerbschlagzaehigkeit_Min__c',
                'Kerbschlagz_higkeit_Charpy__c',
                'Zug_E_Modul_Min__c',
                'Zug_E_Modul__c',
                'Abweichende_Laborwerte_gefunden__c',
                'Datum_letzter_Labortest__c'
            ]
        },
        {
            id: 'verknuepfungen',
            label: 'Verknüpfungen',
            fields: [
                'Account__c',
                'Produktionsstandort__c',
                'Projekt__c',
                'Count_Material_Proposal__c',
                'LastModifiedDate',
                'LastViewedDate'
            ]
        }
    ],
    Material_Proposal__c: [
        {
            id: 'kopfdaten',
            label: 'Kopfdaten & Status',
            fields: [
                'OwnerId',
                'Date__c',
                'Follow_Up_Date__c',
                'Status__c',
                'Projekt__c',
                'F_r_Bedarf__c'
            ]
        },
        {
            id: 'produkt',
            label: 'Produkt & Parteien',
            fields: [
                'Product__c',
                'Product_Code__c',
                'Product_Category__c',
                'Supplier__c',
                'Loading_Location__c',
                'Carrier__c',
                'Account__c',
                'Delivery_Location__c',
                // Spec nennt auch Delivery_Terms_Order__c — existiert im Objekt nicht
                'Delivery_Terms_Offer__c'
            ]
        },
        {
            id: 'preise',
            label: 'Preise & Mengen',
            fields: [
                'Purchasing_price_per_ton__c',
                'Transport_Price_per_ton__c',
                'Total_Transport_Price__c',
                'Margin_per_ton__c',
                'Sales_Price_per_ton__c',
                'Tonnage_per_truck__c',
                'Amount_monthly_t_offered__c'
            ]
        },
        {
            id: 'muster',
            label: 'Muster & Feedback',
            fields: [
                'Sample_Order_from_Supplier__c',
                'Sample_Sending_to_Account__c',
                'Feedback_Date__c',
                'Negative_Feedback_Reason_Category__c',
                'Feedback__c'
            ]
        },
        {
            id: 'aktivitaet',
            label: 'Aktivität',
            fields: [
                'LastModifiedDate',
                'LastActivityDate',
                'LastViewedDate'
            ]
        }
    ],
    Abrechnung__c: [
        {
            id: 'kopfdaten',
            label: 'Kopfdaten & Kategorisierung',
            fields: [
                'Name',
                'Belegnummer__c',
                'Originalbeleg_Herkunft__c',
                'Eingangsdatum_plastship__c',
                'Rechnungstyp__c',
                'Kategorie__c',
                'Kostenart__c',
                'Rechnungssteller_Empf_nger__c',
                'Status_der_Abrechnung__c'
            ]
        },
        {
            id: 'verknuepfungen',
            label: 'Verknüpfungen',
            fields: [
                'Auftrag__c',
                'Account__c',
                'Vertrag__c',
                'Kostenstelle__c',
                'Kontakt_bergabe__c',
                'Sample_Sending__c',
                'Duplicate_Of__c',
                'Weiterbelastet_durch_Abrechnung__c'
            ]
        },
        {
            id: 'betraege',
            label: 'Beträge & Steuern',
            fields: [
                'Rechnungsbetrag__c',
                'Ust__c',
                'Rechnungsbetrag_brutto__c',
                'Rechnungsbetrag_Bericht__c',
                'R_ckzahlung_RIGK__c',
                // #1183 Modell v5
                'SOLL_Betrag__c',
                'Differenz_SOLL_IST__c'
            ]
        },
        {
            // #1183 Modell v5
            id: 'rechnungsinhalt',
            label: 'Rechnungsinhalt',
            fields: [
                'Leistungsdatum__c',
                'Rechnungstext__c'
            ]
        },
        {
            id: 'termine',
            label: 'Termine, Zahlung & Notizen',
            fields: [
                'Belegdatum__c',
                'Belegdatum_MonatJahr__c',
                'Zahlungsziel__c',
                'Datum_gezahlt__c',
                'Zahlungsart__c',
                'Notiz__c'
            ]
        },
        {
            id: 'freigabe',
            label: 'Prüfung & Freigabe',
            fields: [
                // #1183 Modell v5
                'Offene_Punkte__c',
                'Zu_pr_fen_durch__c',
                'Gepr_ft_und_in_Ordnung__c',
                'Freigabe__c',
                'Freigabe_f_r_Sandra__c',
                'Sichtbar_f_r_Buchhaltung__c'
            ]
        }
    ],
    Sample_Sending__c: [
        {
            id: 'kopfdaten',
            label: 'Kopfdaten & Identifikation',
            fields: [
                'Name',
                'Auftrags_ID_Lieferschein__c',
                'Typ__c',
                'Status__c',
                'OwnerId',
                'Datum_Bestellung__c',
                'Datum_Versand__c'
            ]
        },
        {
            id: 'verknuepfungen',
            label: 'Verknüpfungen',
            fields: [
                'Projekt__c',
                'Produkt__c',
                'Opportunity__c',
                'Angebot__c',
                'Abrechnung__c'
            ]
        },
        {
            id: 'herkunft',
            label: 'Herkunft (Ladestelle)',
            fields: [
                'Load_from__c',
                'Loading_Produktion__c',
                'Loading_Site__c'
            ]
        },
        {
            id: 'ziel',
            label: 'Ziel (Lieferstelle)',
            fields: [
                'Deliver_to__c',
                'Delivery_Produktion__c',
                'Delivery_Site__c',
                'Delivery_Produktion_Land__c',
                'Kontakt_Anlieferung__c'
            ]
        },
        {
            id: 'transporteur',
            label: 'Transporteur',
            fields: [
                'Carrier__c',
                'Carrier_Contact__c',
                'Carrier_E_Mail__c',
                'Carrier_Phone__c',
                'Transportkosten__c'
            ]
        },
        {
            id: 'menge',
            label: 'Menge & Verpackung',
            fields: [
                'Amount_in_kg__c',
                'Anzahl_BigBags__c',
                'Anzahl_Paletten_Holz__c',
                'Anzahl_Verpackung_Beutel__c',
                'Anzahl_Verpackung_Kartons__c',
                'Sonst_kg_Verpackung_Kunststoff__c'
            ]
        },
        {
            id: 'kosten',
            label: 'Kosten & Abrechnung',
            fields: [
                'Materialkosten__c',
                'Gesamtkosten__c',
                'Invoice_to_Customer__c'
            ]
        },
        {
            id: 'referenz',
            label: 'Referenz',
            fields: [
                'Notiz_Referenz_plastship_ID__c'
            ]
        }
    ],
    Materialanalyse__c: [
        {
            id: 'kopfdaten',
            label: 'Kopfdaten & Identifikation',
            fields: [
                'Name',
                'Analysetyp__c',
                'Datensatztyp__c',
                'Status__c',
                'OwnerId',
                'Datum_Auftrag__c',
                'Analysezeitpunkt__c',
                'Ergebnis_ben_tigt_bis__c'
            ]
        },
        {
            id: 'verknuepfungen',
            label: 'Verknüpfungen',
            fields: [
                'Material_ID__c',
                'Polymer__c',
                'Produkt_ID__c',
                'Monitored_Material__c',
                'Monitored_Material_Created__c',
                'Monitored_Material_Last_Changed__c',
                'Sample_Sending__c',
                'Auftragsnummer_plastship__c',
                'Dienstleister__c'
            ]
        },
        {
            id: 'qualitaet',
            label: 'Qualitäts-Kategorien & Optik',
            fields: [
                'Kategorie_f_r_Qualit_tseinsch_tzung__c',
                'Optical_Recyclate_Share__c',
                'Optical_Temperature_Category__c'
            ]
        },
        {
            id: 'kosten',
            label: 'Kosten & Abrechnung',
            fields: [
                'Betrag_Kosten_Analyse__c',
                'Invoice_Number__c',
                'Invoiced__c',
                'PO_Number__c'
            ]
        },
        {
            id: 'proben',
            label: 'Proben-Informationen',
            fields: [
                'Batchnummer__c',
                'Zeitpunkt_Musterentnahme__c'
            ]
        },
        {
            id: 'ergebnis',
            label: 'Ergebnis & Notizen',
            fields: [
                'Ergebnis__c',
                'Notiz_Beschreibung__c'
            ]
        },
        {
            id: 'sichtbarkeit',
            label: 'Sichtbarkeit & Steuerung',
            fields: [
                'Sichtbar_f_r_Dienstleister__c'
            ]
        }
    ],
    Produktionsstandort__c: [
        {
            id: 'standort',
            label: 'Kopfdaten & Standort',
            fields: [
                'Name',
                'Account__c',
                'Ist_plastship_Lager__c',
                'Ort__c',
                'PLZ__c',
                'Land__c',
                'Strasse__c',
                'Strasse_Nummer__c',
                'PStandort_lat__c',
                'PStandort_long__c'
            ]
        },
        {
            id: 'lager',
            label: 'Lagerkapazität & Kosten',
            fields: [
                'Lagerkapazit_t_zugesagt__c',
                'Lagermenge_Gesamt__c',
                'Anzahl_WL_Eintr_ge__c',
                'Kosten_pro_Stellplatz_pro_Monat__c',
                'Kosten_Ein_Auslagerung_pauschal__c',
                'Aktuelle_Monatskosten_Bestand__c'
            ]
        },
        {
            id: 'kontakt',
            label: 'Kontakt & Logistik',
            fields: [
                'Verantwortlicher_Lieferung__c',
                'Delivery_Times__c',
                'Ust_ID__c'
            ]
        }
    ],
    Case: [
        {
            id: 'kopfdaten',
            label: 'Kopfdaten & Qualifizierung',
            fields: [
                'CaseNumber',
                'Subject',
                'Status',
                'Priority',
                'Type',
                'Origin',
                'OwnerId',
                'Wiedervorlage__c',
                'Case_Qualified__c',
                'Case_Complete__c',
                'Case_Researched__c'
            ]
        },
        {
            id: 'kontakt',
            label: 'Kontakt & Account',
            fields: [
                'AccountId',
                'ContactId',
                'ContactEmail',
                'ContactPhone',
                'SuppliedEmail',
                'SuppliedName',
                'SuppliedCompany'
            ]
        },
        {
            id: 'eskalation',
            label: 'Eskalation & übergeordneter Vorgang',
            fields: [
                'IsEscalated',
                'ParentId'
            ]
        },
        {
            id: 'verknuepfungen',
            label: 'Verknüpfungen zu Kernobjekten',
            fields: [
                'Auftrag__c',
                'Abrechnung__c',
                'Onboarding__c',
                'Opportunity__c',
                'Bedarfe__c',
                'Produkt__c'
            ]
        },
        {
            id: 'inhalt',
            label: 'Inhalt & Abschluss',
            fields: [
                'Description',
                'Description_of_Actions_taken__c',
                'Comments',
                'ClosedDate'
            ]
        }
    ]
};
function getPreviewSections(sfObjectApiName) {
    return PREVIEW_FIELD_CONFIGS[sfObjectApiName];
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/config/entityFields/qualificationFields.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * #844 Feld-Markierung „Qualifizierungsrelevant": kuratierte Liste der Felder,
 * die auf die Qualifizierungsstufen eines Objekts einzahlen — inklusive der
 * Bedingung je Feld, damit die UI gegen den Ist-Wert prüfen kann, was für den
 * Aufstieg in der Kaskade noch fehlt. Quelle sind die Salesforce-Formeln der
 * Stufen-Felder (dokumentiert in #712 + Tooling-API):
 *
 * - Erstqualifiziert__c = AND(ResearchInformation_rate__c >= 90,
 *   ContactInformation_rate__c > 50, TotalInformation_rate__c > 50,
 *   Count_Dienstleistungsmonitor__c > 0)
 * - Validiert__c = AND(Erstqualifiziert__c, Verh_ltnis__c ∈ {1, 2, 3},
 *   Count_Audits__c > 0, Count_Certificates__c > 0)
 * - Vollqualifiziert__c = AND(Standardvorgehen_Bemusterung__c,
 *   Standard_Gesch_ftsablauf__c, InvoiceInformation_rate__c > 90,
 *   ContactInformation_rate__c > 50, Count_Produktionsstandort__c > 0)
 *
 * Die Raten sind selbst ISBLANK-Zähler über URSPRUNGSFELDER — auch diese sind
 * markiert, denn dort gibt der Mitarbeiter tatsächlich etwas ein:
 * - Recherche-Rate (/7, ≥ 90 → alle nötig): Datum letzte Internetrecherche,
 *   Industry, Type, Main conversion methods, Total annual production capacity,
 *   AnnualRevenue, NumberOfEmployees
 * - Kontakt-Rate (/13, > 50 → mind. 7): Website, Phone, Account-E-Mail,
 *   Billing-/Shipping-Adresse (je Street/City/State/PostalCode/Country)
 * - Rechnungs-Rate (/5, > 90 → alle nötig): Ust-ID, E-Mailadresse Rechnungen,
 *   Besonderheiten Rechnungsstellung, Standardbedingung Einkauf/Verkauf
 * Ein Ursprungsfeld gilt als erfüllt, wenn es gefüllt ist ODER die Raten-
 * Schwelle bereits erreicht ist (kräftig = konkreter offener Hebel).
 * Analog die 14 Dienstleistungsmonitor-Checkboxen (#848): sie speisen
 * Count_Dienstleistungsmonitor__c (Summe der IF-Checks) — kräftig nur,
 * solange noch kein einziges Häkchen gesetzt ist; die 2 KISS-Zahlenfelder
 * zählen nicht in die Formel und sind nicht markiert.
 * Die AccountInformation_rate (Name/AccountSource/Verhältnis/Owner/Parent)
 * zählt nur indirekt über die Gesamt-Rate und ist bewusst nicht markiert.
 *
 * Markiert ist jedes Feld, das in einer Stufen-/Raten-Formel als EINGANG
 * vorkommt (Erstqualifiziert__c damit auch — es ist Zutat der Validiert-
 * Formel); die reinen Ergebnisfelder (Validiert__c, Vollqualifiziert__c)
 * tragen keinen Marker. Die Berechnung der Stufen selbst bleibt in
 * Salesforce — `isMet` spiegelt die Formel-Bedingung nur für die Anzeige.
 *
 * EINE Quelle, zwei Verbraucher (vgl. #421): die Feld-Badges in Detail-View +
 * Side-Drawer UND die Account-Indikator-Regel („Aufträge anhängig, aber nicht
 * vollqualifiziert") leiten sich aus dieser Liste ab.
 * Erweiterbar je Entity (Start: Account, später z. B. Produkt-Qualifizierung).
 */ __turbopack_context__.s([
    "formatQualificationCriteria",
    ()=>formatQualificationCriteria,
    "getQualificationFields",
    ()=>getQualificationFields,
    "hasUnmetQualificationCriterion",
    ()=>hasUnmetQualificationCriterion
]);
const gt = (min)=>(value)=>typeof value === 'number' && value > min;
const gte = (min)=>(value)=>typeof value === 'number' && value >= min;
const isTrue = (value)=>value === true;
const notBlank = (value)=>value != null && String(value).trim() !== '';
const oneOf = (...allowed)=>(value)=>typeof value === 'string' && allowed.includes(value);
/**
 * Kriterium für ein Raten-Ursprungsfeld: erfüllt, wenn das Feld gefüllt ist
 * ODER die Rate ihre Stufen-Schwelle schon erreicht hat — kräftig markiert
 * bleibt nur der konkrete offene Hebel.
 */ const rateSource = (stage, requirement, rateField, rateMet)=>({
        stage,
        requirement,
        isMet: (value, record)=>notBlank(value) || rateMet(record?.[rateField])
    });
const RESEARCH_SOURCE_FIELDS = [
    'Datum_letzte_Internetrecherche__c',
    'Industry__c',
    'Type',
    'Main_conversion_methods__c',
    'Total_annual_production_capacity__c',
    'AnnualRevenue',
    'NumberOfEmployees'
];
const CONTACT_SOURCE_FIELDS = [
    'Website',
    'Phone',
    'Account_E_Mail__c',
    'BillingStreet',
    'BillingCity',
    'BillingState',
    'BillingPostalCode',
    'BillingCountry',
    'ShippingStreet',
    'ShippingCity',
    'ShippingState',
    'ShippingPostalCode',
    'ShippingCountry'
];
const INVOICE_SOURCE_FIELDS = [
    'Ust_ID__c',
    'E_Mailadresse_Rechnungen__c',
    'Besonderheiten_Rechnungsstellung__c',
    'Standardbedingung_Einkauf_von_Account__c',
    'Standardbedingung_Verkauf_an_Account__c'
];
/** #848: die 14 Checkboxen, die Count_Dienstleistungsmonitor__c summiert. */ const MONITOR_FLAG_FIELDS = [
    'KISS_Kunde__c',
    'Kunde_Werksentsorgung__c',
    'Kunde_Materialeinkauf__c',
    'Transporteur__c',
    'Kunde_Partnermodell__c',
    'Kunde_Zertifizierung__c',
    'Dienstleister_Sonstige__c',
    'Kooperationspartner__c',
    'Kunde_Materialpr_fung__c',
    'Kunde_Materialverkauf__c',
    'Dienstleister_Lohn__c',
    'Kunde_Digitale_Services__c',
    'Kunde_Beratung__c',
    'Agent__c'
];
const researchSource = ()=>[
        rateSource('Erstqualifiziert', 'zahlt auf Recherche-Rate ein, ≥ 90', 'ResearchInformation_rate__c', gte(90))
    ];
const contactSource = ()=>[
        rateSource('Erstqualifiziert', 'zahlt auf Kontakt-Rate ein, > 50', 'ContactInformation_rate__c', gt(50)),
        rateSource('Vollqualifiziert', 'zahlt auf Kontakt-Rate ein, > 50', 'ContactInformation_rate__c', gt(50))
    ];
const invoiceSource = ()=>[
        rateSource('Vollqualifiziert', 'zahlt auf Rechnungs-Rate ein, > 90', 'InvoiceInformation_rate__c', gt(90))
    ];
// Checkbox-Variante von rateSource: „gefüllt" heißt hier angehakt
const monitorFlagSource = ()=>[
        {
            stage: 'Erstqualifiziert',
            requirement: 'zahlt auf Dienstleistungsmonitor ein, > 0',
            isMet: (value, record)=>value === true || gt(0)(record?.['Count_Dienstleistungsmonitor__c'])
        }
    ];
const fieldsWith = (apiNames, criteria)=>Object.fromEntries(apiNames.map((apiName)=>[
            apiName,
            criteria()
        ]));
/** Je Entity: Feld-API-Name → Kriterien (Stufe + Bedingung), zu denen das Feld zählt. */ const QUALIFICATION_FIELDS = {
    Account: {
        // Formel-Eingänge der Stufen selbst
        ResearchInformation_rate__c: [
            {
                stage: 'Erstqualifiziert',
                requirement: '≥ 90',
                isMet: gte(90)
            }
        ],
        ContactInformation_rate__c: [
            {
                stage: 'Erstqualifiziert',
                requirement: '> 50',
                isMet: gt(50)
            },
            {
                stage: 'Vollqualifiziert',
                requirement: '> 50',
                isMet: gt(50)
            }
        ],
        TotalInformation_rate__c: [
            {
                stage: 'Erstqualifiziert',
                requirement: '> 50',
                isMet: gt(50)
            }
        ],
        Count_Dienstleistungsmonitor__c: [
            {
                stage: 'Erstqualifiziert',
                requirement: '> 0',
                isMet: gt(0)
            }
        ],
        Erstqualifiziert__c: [
            {
                stage: 'Validiert',
                requirement: 'erfüllt',
                isMet: isTrue
            }
        ],
        // SF-Formel akzeptiert genau die Stufen 1–3; „0 Offen" und „4 ROT" zählen nicht
        Verh_ltnis__c: [
            {
                stage: 'Validiert',
                requirement: 'Stufe 1–3 gesetzt',
                isMet: oneOf('1 Im Aufbau', '2 Kunde / kont. Beauftraugung', '3 Enger Partner')
            }
        ],
        Count_Audits__c: [
            {
                stage: 'Validiert',
                requirement: '> 0',
                isMet: gt(0)
            }
        ],
        Count_Certificates__c: [
            {
                stage: 'Validiert',
                requirement: '> 0',
                isMet: gt(0)
            }
        ],
        Standardvorgehen_Bemusterung__c: [
            {
                stage: 'Vollqualifiziert',
                requirement: 'nicht leer',
                isMet: notBlank
            }
        ],
        Standard_Gesch_ftsablauf__c: [
            {
                stage: 'Vollqualifiziert',
                requirement: 'nicht leer',
                isMet: notBlank
            }
        ],
        InvoiceInformation_rate__c: [
            {
                stage: 'Vollqualifiziert',
                requirement: '> 90',
                isMet: gt(90)
            }
        ],
        Count_Produktionsstandort__c: [
            {
                stage: 'Vollqualifiziert',
                requirement: '> 0',
                isMet: gt(0)
            }
        ],
        // Ursprungsfelder der Raten (dort gibt der Mitarbeiter tatsächlich etwas ein)
        ...fieldsWith(RESEARCH_SOURCE_FIELDS, researchSource),
        ...fieldsWith(CONTACT_SOURCE_FIELDS, contactSource),
        ...fieldsWith(INVOICE_SOURCE_FIELDS, invoiceSource),
        ...fieldsWith(MONITOR_FLAG_FIELDS, monitorFlagSource)
    }
};
const EMPTY_MAP = new Map();
const qualificationFieldMaps = new Map(Object.entries(QUALIFICATION_FIELDS).map(([entityType, fields])=>[
        entityType,
        new Map(Object.entries(fields))
    ]));
function getQualificationFields(entityType) {
    return qualificationFieldMaps.get(entityType) ?? EMPTY_MAP;
}
function formatQualificationCriteria(criteria, value, record, /** #1626: Stufe und Bedingung in der Sprache des Nutzers */ translate = (text)=>text) {
    return criteria.map((c)=>`${c.isMet(value, record) ? '✓' : '✗'} ${translate(c.stage)} (${translate(c.requirement)})`).join('\n');
}
function hasUnmetQualificationCriterion(criteria, value, record) {
    return criteria.some((c)=>!c.isMet(value, record));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/config/entityFields/sfPicklist.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Picklist-Optionen an die generierten Salesforce-Typen binden (#1621)
 *
 * `generateSalesforceTypes.ts` schreibt jeden aktiven Picklist-Wert als
 * Literal-Union ins Interface des Objekts (`types/salesforce/<Objekt>.ts`).
 * `sfPicklist` prüft die Optionen einer Feld-Config gegen genau diese Union:
 *
 * - ein Wert, den Salesforce nicht führt, bricht `tsc` am Wert selbst,
 * - ein Wert, der in der Config fehlt, bricht `tsc` mit
 *   `fehlendeSalesforceWerte: '<Wert>'`.
 *
 * Usage:
 *   picklistOptions: sfPicklist<Order, 'Auftragsrichtung__c'>()([
 *     { label: 'Umlagerung', value: 'Umlagerung' },
 *     ...
 *   ])
 *
 * Die Labels bleiben Handarbeit — die Typen kennen nur Werte. Nach
 * `npm run sf:generate-types` zeigt `tsc`, welche Config nachzuziehen ist.
 */ __turbopack_context__.s([
    "isSfBoundPicklist",
    ()=>isSfBoundPicklist,
    "sfPicklist",
    ()=>sfPicklist,
    "sfPicklistSubset",
    ()=>sfPicklistSubset
]);
// Merkt sich, welche Optionslisten über den Helper entstanden sind — der
// Wächter (sfPicklistBinding.test.ts) erkennt daran Handkopien.
const gebundeneListen = new WeakSet();
const binden = (options)=>{
    const liste = options.map((option)=>({
            ...option
        }));
    gebundeneListen.add(liste);
    return liste;
};
const sfPicklist = ()=>(options)=>binden(options);
const sfPicklistSubset = ()=>(options)=>binden(options);
const isSfBoundPicklist = (options)=>options !== undefined && gebundeneListen.has(options);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/config/entityFields/types.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Entity Field Configuration Types
 *
 * Defines the structure for entity field configurations that replace
 * FlexiPage metadata for rendering detail pages.
 *
 * Key concepts:
 * - Each entity has one config file defining ALL fields
 * - Field visibility per role is preserved from FlexiPage variants
 * - RBAC information categories work alongside role visibility
 * - Related lists are included in the same config
 */ __turbopack_context__.s([]);
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/config/entityFields/useEntityFieldConfig.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getFieldConfig",
    ()=>getFieldConfig,
    "getFilteredEntityConfig",
    ()=>getFilteredEntityConfig,
    "getVisibleFieldsForRole",
    ()=>getVisibleFieldsForRole,
    "isConfigFieldVisibleForRole",
    ()=>isConfigFieldVisibleForRole,
    "isFieldVisible",
    ()=>isFieldVisible,
    "useEntityFieldConfig",
    ()=>useEntityFieldConfig
]);
/**
 * Hook for accessing entity field configurations with RBAC filtering
 *
 * This hook provides:
 * - Entity field configuration lookup
 * - Field visibility filtering based on user role
 * - Section filtering based on role visibility
 * - Combined visibility logic (config + RBAC information categories)
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$rbac$2f$permissions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/rbac/permissions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$rbac$2f$perspectives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/rbac/perspectives.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/config/entityFields/index.ts [app-client] (ecmascript) <locals>");
var _s = __turbopack_context__.k.signature();
;
;
;
;
/**
 * Check if a role can see a field based on visibleForRoles
 */ function isFieldVisibleForRole(field, role) {
    // If visibleForRoles is not defined, field is visible to all
    if (!field.visibleForRoles || field.visibleForRoles.length === 0) {
        return true;
    }
    return field.visibleForRoles.includes(role);
}
/**
 * Check if a role can see a section based on visibleForRoles
 */ function isSectionVisibleForRole(section, role) {
    // If visibleForRoles is not defined, section is visible to all
    if (!section.visibleForRoles || section.visibleForRoles.length === 0) {
        return true;
    }
    return section.visibleForRoles.includes(role);
}
function isConfigFieldVisibleForRole(config, apiName, role) {
    let found = false;
    for (const section of config?.sections ?? []){
        for (const field of section.fields ?? []){
            if (field.apiName !== apiName) continue;
            found = true;
            const sectionOk = role !== undefined ? isSectionVisibleForRole(section, role) : !section.visibleForRoles || section.visibleForRoles.length === 0;
            const fieldOk = role !== undefined ? isFieldVisibleForRole(field, role) : !field.visibleForRoles || field.visibleForRoles.length === 0;
            if (sectionOk && fieldOk) return true;
        }
    }
    return !found;
}
/**
 * Check if a role can see a related list based on visibleForRoles
 */ function isRelatedListVisibleForRole(relatedList, role) {
    // If visibleForRoles is not defined, related list is visible to all
    if (!relatedList.visibleForRoles || relatedList.visibleForRoles.length === 0) {
        return true;
    }
    return relatedList.visibleForRoles.includes(role);
}
function getFilteredEntityConfig(entityType, userContext, recordData) {
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getEntityFieldConfig"])(entityType);
    if (!config) {
        return null;
    }
    const { role } = userContext;
    // Get RBAC visible fields if we have record data
    let rbacVisibleFields = null;
    if (recordData && 'Id' in recordData) {
        try {
            // Cast entityType to SObject for RBAC check
            rbacVisibleFields = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$rbac$2f$permissions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getVisibleFields"])(userContext, entityType, recordData);
        } catch  {
            // If RBAC check fails, don't filter by RBAC
            rbacVisibleFields = null;
        }
    }
    // #329: perspective filtering for multi-party deal objects. Only external
    // roles are filtered; the matched perspectives derive from the record's
    // contact lookups vs. the viewer's contactId. Display-only — record access
    // and field masking remain server-side (see lib/rbac/perspectives.ts).
    const perspectiveFiltering = !!config.perspectives && __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$rbac$2f$perspectives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PERSPECTIVE_FILTERED_ROLES"].has(role);
    const matchedPerspectives = perspectiveFiltering ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$rbac$2f$perspectives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolvePerspectives"])(recordData, {
        contactId: userContext.contactId,
        accountId: userContext.accountId
    }, config.perspectives) : [];
    const filteredSections = [];
    const visibleFieldNames = [];
    for (const section of config.sections){
        // Check if section is visible for role
        if (!isSectionVisibleForRole(section, role)) {
            continue;
        }
        // #329: perspective-tagged sections only render for matching viewers;
        // untagged sections are the minimal set (also the grant-case fallback).
        if (perspectiveFiltering && section.visibleForPerspectives && !section.visibleForPerspectives.some((p)=>matchedPerspectives.includes(p))) {
            continue;
        }
        // Filter fields within the section
        const visibleFields = section.fields.filter((field)=>{
            // Check role-based visibility from config
            if (!isFieldVisibleForRole(field, role)) {
                return false;
            }
            // Check RBAC visibility if we have record data
            if (rbacVisibleFields !== null && !rbacVisibleFields.includes(field.apiName)) {
                return false;
            }
            return true;
        });
        // Only include section if it has visible fields
        if (visibleFields.length > 0) {
            filteredSections.push({
                ...section,
                fields: visibleFields
            });
            // Collect visible field names
            visibleFields.forEach((f)=>{
                if (!visibleFieldNames.includes(f.apiName)) {
                    visibleFieldNames.push(f.apiName);
                }
            });
        }
    }
    // Filter related lists
    const filteredRelatedLists = (config.relatedLists || []).filter((rl)=>isRelatedListVisibleForRole(rl, role));
    // Filter tab groups: only keep sectionIds that survived filtering,
    // and remove tab groups where all sections were filtered out
    const survivingSectionIds = new Set(filteredSections.map((s)=>s.id));
    const filteredTabGroups = (config.tabGroups || []).map((tg)=>({
            ...tg,
            sectionIds: tg.sectionIds.filter((id)=>survivingSectionIds.has(id))
        })).filter((tg)=>tg.sectionIds.length > 0);
    return {
        entityType: config.entityType,
        entityLabel: config.entityLabel,
        sections: filteredSections,
        tabGroups: filteredTabGroups,
        relatedLists: filteredRelatedLists,
        systemFields: config.systemFields || [],
        visibleFieldNames,
        originalConfig: config
    };
}
function useEntityFieldConfig(entityType, userContext, recordData) {
    _s();
    const filteredConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useEntityFieldConfig.useMemo[filteredConfig]": ()=>{
            if (!userContext) {
                return null;
            }
            return getFilteredEntityConfig(entityType, userContext, recordData);
        }
    }["useEntityFieldConfig.useMemo[filteredConfig]"], [
        entityType,
        userContext,
        recordData
    ]);
    return {
        /** Filtered configuration, or null if not found */ config: filteredConfig,
        /** Filtered sections with visible fields */ sections: filteredConfig?.sections || [],
        /** Tab groups for organizing sections into tabs */ tabGroups: filteredConfig?.tabGroups || [],
        /** Filtered related lists */ relatedLists: filteredConfig?.relatedLists || [],
        /** Related list tab groups for organizing related lists into tabs */ relatedListTabGroups: filteredConfig?.originalConfig?.relatedListTabGroups || [],
        /** All visible field names */ visibleFields: filteredConfig?.visibleFieldNames || [],
        /** System fields */ systemFields: filteredConfig?.systemFields || [],
        /** Original unfiltered config */ originalConfig: filteredConfig?.originalConfig || null,
        /** Whether config was found */ hasConfig: filteredConfig !== null
    };
}
_s(useEntityFieldConfig, "z+ZOpsKXbhhZfefciAR+yfBuXeY=");
function getVisibleFieldsForRole(entityType, role) {
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getEntityFieldConfig"])(entityType);
    if (!config) {
        return [];
    }
    const visibleFields = [];
    for (const section of config.sections){
        if (!isSectionVisibleForRole(section, role)) {
            continue;
        }
        for (const field of section.fields){
            if (isFieldVisibleForRole(field, role) && !visibleFields.includes(field.apiName)) {
                visibleFields.push(field.apiName);
            }
        }
    }
    return visibleFields;
}
function getFieldConfig(entityType, fieldApiName) {
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getEntityFieldConfig"])(entityType);
    if (!config) {
        return null;
    }
    for (const section of config.sections){
        const field = section.fields.find((f)=>f.apiName === fieldApiName);
        if (field) {
            return field;
        }
    }
    return null;
}
function isFieldVisible(entityType, fieldApiName, role) {
    const fieldConfig = getFieldConfig(entityType, fieldApiName);
    if (!fieldConfig) {
        return false;
    }
    return isFieldVisibleForRole(fieldConfig, role);
}
const __TURBOPACK__default__export__ = useEntityFieldConfig;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/config/salesforceObjects.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FILE_OBJECTS",
    ()=>FILE_OBJECTS,
    "SF_KEY_PREFIXES",
    ()=>SF_KEY_PREFIXES,
    "SF_OBJECT_DISPLAY_NAMES",
    ()=>SF_OBJECT_DISPLAY_NAMES,
    "SF_OBJECT_ROUTES",
    ()=>SF_OBJECT_ROUTES,
    "getDetailPathForObject",
    ()=>getDetailPathForObject,
    "getObjectTypeFromId",
    ()=>getObjectTypeFromId,
    "getRecordDetailUrl",
    ()=>getRecordDetailUrl
]);
/**
 * Salesforce Object Configuration
 *
 * Maps Salesforce object API names to their key prefixes and application routes.
 * Used for navigating to record detail pages and validating IDs.
 *
 * IMPORTANT: Routes must match NavigationPaths in src/config/routes.tsx
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$helper$2f$entityHelpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/helper/entityHelpers.ts [app-client] (ecmascript) <locals>");
;
const FILE_OBJECTS = [
    'Account',
    'Contact',
    'User',
    'Opportunity',
    'Campaign',
    'Case',
    'Order',
    'Contract',
    'Lead',
    'Task',
    'Event',
    // Custom Objects
    'Projekt__c',
    'Material_Proposal__c',
    'Sample_Sending__c',
    'Sample_Feedback__c',
    'Materialanalyse__c',
    'Produktionsstandort__c',
    'Monitored_Material__c',
    'Onboarding__c',
    'Abrechnung__c',
    'Bedarfe__c',
    'Reklamation__c',
    // RBAC-Resource-Schreibweise (sf_prefixes.txt: Supplier_audit__c); vorher
    // stand hier die kleine Schreibweise, die hasObjectAccess nie fand.
    'Supplier_Audit__c',
    'Kontakt_bergaben__c',
    'Unternehmenszertifikat__c',
    // #1546 (optionaler Teil): Prozessfeedback/CAPA trägt Belege (Fotos,
    // Prüfberichte, PIA-Anhänge). Präfix a1E, RBAC-Resource Prozessfeedback__c.
    'Prozessfeedback__c'
];
const FILE_OBJECT_SET = new Set(FILE_OBJECTS);
const SF_KEY_PREFIXES = Object.fromEntries(_c1 = Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$helper$2f$entityHelpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ENTITY_TYPE_MAPPINGS"]).filter(([, sObject])=>FILE_OBJECT_SET.has(sObject)).map(_c = ([prefix, sObject])=>[
        sObject,
        prefix
    ]));
_c2 = SF_KEY_PREFIXES;
const SF_OBJECT_ROUTES = {
    // Standard objects (from NavigationPaths)
    Account: '/accounts',
    Contact: '/contacts',
    Order: '/orders',
    OrderItem: '/orderitems',
    Case: '/cases',
    Opportunity: '/opportunities',
    Task: '/tasks',
    User: '/users',
    Product2: '/products',
    // Custom objects (German API names from Salesforce)
    Auftrag__c: '/orders',
    Kundenvorgang__c: '/cases',
    Projekt__c: '/projects',
    Material_Proposal__c: '/material-proposals',
    Sample_Sending__c: '/sample-sendings',
    Sample_Feedback__c: '/sample-feedbacks',
    Materialanalyse__c: '/material-analyses',
    Produktionsstandort__c: '/production-sites',
    Monitored_Material__c: '/monitored-materials',
    Onboarding__c: '/onboardings',
    Abrechnung__c: '/invoices',
    Bedarfe__c: '/requirements',
    Supplier_audit__c: '/supplier-audits',
    Kontakt_bergaben__c: '/contact-handovers',
    Unternehmenszertifikat__c: '/company-certificates',
    // Reklamation__c: keine Liste und keine Detailseite in der App (#1755 Review) —
    // ohne Eintrag zeigen Verweise nur Text statt auf /complaints (404) zu führen
    // #449: Verträge
    Contract: '/contracts',
    // #325: Kostenstellen
    Kostenstelle_plastship__c: '/cost-centers',
    // #1761: Lohndienstleistungen
    Lohn__c: '/toll-services',
    // #1760: Prüfparameter
    AuditProperty__c: '/audit-properties',
    // #1759: Zertifikats-Katalog
    Zertifikate__c: '/certificates'
};
/**
 * Alte deutsche Objektnamen, deren Datensätze auf einem Standardobjekt liegen.
 */ const DETAIL_ALIASES = {
    Auftrag__c: 'Order',
    Kundenvorgang__c: 'Case'
};
/** ENTITY_URLS ohne Rücksicht auf Groß-/Kleinschreibung (Supplier_audit__c ↔ Supplier_Audit__c). */ const DETAIL_PATHS_LOWER = new Map(Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$helper$2f$entityHelpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ENTITY_URLS"]).map(([objekt, pfad])=>[
        objekt.toLowerCase(),
        pfad
    ]));
function getDetailPathForObject(objectType) {
    const objekt = DETAIL_ALIASES[objectType] ?? objectType;
    return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$helper$2f$entityHelpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ENTITY_URLS"][objekt] ?? DETAIL_PATHS_LOWER.get(objekt.toLowerCase());
}
function getRecordDetailUrl(objectType, recordId) {
    if (!objectType || !recordId) return null;
    const detail = getDetailPathForObject(objectType);
    if (detail) return `${detail}/${recordId}`;
    return SF_OBJECT_ROUTES[objectType] ?? null;
}
function getObjectTypeFromId(recordId) {
    const objectType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$helper$2f$entityHelpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getEntityTypeFromId"])(recordId);
    return objectType && FILE_OBJECT_SET.has(objectType) ? objectType : null;
}
const SF_OBJECT_DISPLAY_NAMES = {
    // Standard objects
    Account: 'Account',
    Contact: 'Contact',
    Order: 'Order',
    OrderItem: 'Order Item',
    Case: 'Case',
    Opportunity: 'Opportunity',
    Lead: 'Lead',
    Campaign: 'Campaign',
    Contract: 'Contract',
    Task: 'Task',
    Event: 'Event',
    User: 'User',
    Product2: 'Product',
    // German custom objects
    Auftrag__c: 'Order',
    Kundenvorgang__c: 'Case',
    Projekt__c: 'Project',
    Material_Proposal__c: 'Material Proposal',
    Sample_Sending__c: 'Sample Sending',
    Sample_Feedback__c: 'Sample Feedback',
    Materialanalyse__c: 'Material Analysis',
    Produktionsstandort__c: 'Production Site',
    Monitored_Material__c: 'Monitored Material',
    Onboarding__c: 'Onboarding',
    Abrechnung__c: 'Invoice',
    Bedarfe__c: 'Requirement',
    Reklamation__c: 'Complaint',
    Supplier_audit__c: 'Supplier Audit',
    Kontakt_bergaben__c: 'Contact Handover',
    Unternehmenszertifikat__c: 'Company Certificate'
};
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "SF_KEY_PREFIXES$Object.fromEntries$Object.entries(ENTITY_TYPE_MAPPINGS)\n    .filter(([, sObject]) => FILE_OBJECT_SET.has(sObject))\n    .map");
__turbopack_context__.k.register(_c1, "SF_KEY_PREFIXES$Object.fromEntries");
__turbopack_context__.k.register(_c2, "SF_KEY_PREFIXES");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/config/securityContact.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * #2160: Meldeweg für Sicherheitslücken — EINE Quelle für die Adresse.
 *
 * Die Adresse ist öffentlich (security.txt nach RFC 9116, #2141) und zugleich
 * Kontakt für technische Rückfragen; es lesen Andreas Bastian und Moritz
 * Limbach. Sie ist der Rückfall des Firmenpostfachs `dev` in
 * `lib/mail/companyMailboxes.ts`, wenn `MAILBOX_DEV_ADDRESS` in der Umgebung
 * nicht gesetzt ist. `public/.well-known/security.txt` (#2141) und dessen
 * Jest lesen dieselbe Konstante.
 *
 * Reine Daten, React- und Server-frei.
 */ __turbopack_context__.s([
    "SECURITY_CONTACT_ADDRESS",
    ()=>SECURITY_CONTACT_ADDRESS
]);
const SECURITY_CONTACT_ADDRESS = 'dev@plastship.com';
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);})()

//# sourceMappingURL=apps_web_src_config_1o-zm5u144on-._.js.map