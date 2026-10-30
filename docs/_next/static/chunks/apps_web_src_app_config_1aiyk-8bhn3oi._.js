(()=>{"use strict";(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/apps/web/src/app/config/createFormConfig.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ENTITY_FORM_CONFIGS",
    ()=>ENTITY_FORM_CONFIGS,
    "getEntityFormConfig",
    ()=>getEntityFormConfig
]);
/**
 * Anlage-Formulare: Abschnitte, Pflichtfelder und Folge-Objekte.
 *
 * Dieser Teil stand frueher in fieldMetadataRegistry.ts und ist mit deren
 * eigentlichem Inhalt (Feld-Metadaten) nur zufaellig verwandt: er beschreibt
 * den Aufbau der ANLAGE-Assistenten, nicht die Darstellung einzelner Felder.
 * Er benutzt deshalb auch andere Schluessel — die Friendly-Namen des
 * EntityType-Enums statt der Salesforce-API-Namen.
 *
 * KEINE Rueckfallebene mehr: die Abschnitte kamen frueher von hier, wenn ein
 * Objekt keine fieldconfig hatte. Das betraf zuletzt genau einen von 22
 * Eintraegen — dafuer gibt es jetzt AktuellerPreisUndVerfugbarkeit.fields.ts,
 * und das Feld `sections` ist ersatzlos entfallen. Die Abschnitte kommen
 * ausschliesslich aus entityFieldConfigs.
 *
 * Was bleibt, ist Assistenten-Wissen ohne zweite Quelle: `requiredFields`,
 * `hiddenInCreate` und `relatedObjects` (drei Eintraege, fuer CreateEntityMenu).
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/config/entityTypes.ts [app-client] (ecmascript)");
;
const ENTITY_FORM_CONFIGS = {
    Account: {
        requiredFields: [
            'Name'
        ],
        hiddenInCreate: [
            'Id',
            'CreatedDate',
            'LastModifiedDate',
            'SystemModstamp',
            'OwnerId',
            'PhotoUrl'
        ],
        allowFileUpload: true,
        relatedObjects: [
            {
                entityType: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Contact,
                label: 'Kontakt',
                labelPlural: 'Kontakte',
                parentField: 'AccountId',
                fields: [
                    'Salutation',
                    'FirstName',
                    'LastName',
                    'Email',
                    'Phone'
                ]
            }
        ]
    },
    Contact: {
        requiredFields: [
            'LastName'
        ],
        hiddenInCreate: [
            'Id',
            'CreatedDate',
            'LastModifiedDate',
            'SystemModstamp',
            'OwnerId',
            'PhotoUrl'
        ],
        allowFileUpload: true
    },
    Opportunity: {
        requiredFields: [
            'Name',
            'StageName',
            'CloseDate',
            'AccountId'
        ],
        hiddenInCreate: [
            'Id',
            'CreatedDate',
            'LastModifiedDate',
            'IsClosed',
            'IsWon',
            'ExpectedRevenue',
            'ForecastCategory',
            'OwnerId'
        ],
        allowFileUpload: true
    },
    Case: {
        requiredFields: [
            'Subject',
            'Type',
            'Status',
            'Priority',
            'Origin'
        ],
        hiddenInCreate: [
            'Id',
            'CaseNumber',
            'CreatedDate',
            'LastModifiedDate',
            'IsClosed',
            'ClosedDate',
            'OwnerId'
        ],
        allowFileUpload: true
    },
    Task: {
        // #991: Inhaber ist immer der Anleger (Route erzwingt OwnerId), Bezug (WhatId)
        // kommt aus dem Kontext (PARENT_FIELD_MAP) — beides nicht im Formular.
        requiredFields: [
            'Subject',
            'Status',
            'Priority',
            'Type',
            'ActivityDate'
        ],
        hiddenInCreate: [
            'Id',
            'CreatedDate',
            'LastModifiedDate',
            'IsClosed',
            'CompletedDateTime',
            'IsRecurrence',
            'OwnerId',
            'WhatId'
        ],
        createDefaults: {
            Status: 'Not Started',
            Priority: 'Normal'
        }
    },
    Order: {
        requiredFields: [
            'Type',
            'Status',
            'AccountId',
            'EffectiveDate'
        ],
        hiddenInCreate: [
            'Id',
            'OrderNumber',
            'CreatedDate',
            'LastModifiedDate',
            'TotalAmount',
            'ActivatedDate',
            'OwnerId'
        ],
        allowFileUpload: true,
        relatedObjects: [
            {
                entityType: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].OrderItem,
                label: 'Auftragsposition',
                labelPlural: 'Auftragspositionen',
                parentField: 'OrderId',
                fields: [
                    'Product2Id',
                    'Quantity',
                    'UnitPrice',
                    'Einkaufspreis_pro_t__c',
                    'Description'
                ],
                // #1803: ohne Menge/Preis lehnt SF die Position ab (REQUIRED_FIELD_MISSING)
                requiredFields: [
                    'Product2Id',
                    'Quantity',
                    'UnitPrice'
                ]
            }
        ]
    },
    // #907: Verträge in der App anlegen — SF verlangt nur AccountId; Status/
    // StartDate sind fachlich Pflicht, Vertragsnummer/Ende/Aktivierung sind SF-seitig.
    Contract: {
        requiredFields: [
            'AccountId',
            'Status',
            'StartDate'
        ],
        hiddenInCreate: [
            'Id',
            'ContractNumber',
            'EndDate',
            'ActivatedDate',
            'OwnerId',
            'Projektzuordnung_Typ__c'
        ]
    },
    OrderItem: {
        // #2071: OrderId ist in der Feld-Config read-only (kommt aus dem Auftrag als
        // Eltern-Kontext, PARENT_FIELD_MAP) — als Pflichtfeld hier wirkungslos.
        requiredFields: [
            'Quantity',
            'UnitPrice'
        ],
        hiddenInCreate: [
            'Id',
            'CreatedDate',
            'LastModifiedDate',
            'TotalPrice',
            'ListPrice'
        ]
    },
    Project: {
        requiredFields: [
            'Name',
            'Projekttyp__c',
            'Status__c'
        ],
        hiddenInCreate: [
            'Id',
            'CreatedDate',
            'LastModifiedDate',
            'OwnerId'
        ]
    },
    Invoice: {
        // #2071: Name ist Auto-Nummer (read-only in der Feld-Config), kein Pflichtfeld
        requiredFields: [],
        hiddenInCreate: [
            'Id',
            'CreatedDate',
            'LastModifiedDate',
            'OwnerId'
        ]
    },
    MaterialAnalysis: {
        // #2071: Name ist Auto-Nummer (read-only in der Feld-Config), kein Pflichtfeld
        requiredFields: [],
        hiddenInCreate: [
            'Id',
            'CreatedDate',
            'LastModifiedDate',
            'OwnerId'
        ]
    },
    MaterialProposal: {
        requiredFields: [
            'Name'
        ],
        hiddenInCreate: [
            'Id',
            'CreatedDate',
            'LastModifiedDate',
            'OwnerId'
        ]
    },
    MonitoredMaterial: {
        requiredFields: [
            'Name'
        ],
        hiddenInCreate: [
            'Id',
            'CreatedDate',
            'LastModifiedDate',
            'OwnerId'
        ]
    },
    Requirement: {
        requiredFields: [
            'Name'
        ],
        hiddenInCreate: [
            'Id',
            'CreatedDate',
            'LastModifiedDate',
            'OwnerId'
        ]
    },
    SampleFeedback: {
        // #2071: Name ist Auto-Nummer (read-only in der Feld-Config, #404)
        requiredFields: [
            'Sample_Sending__c'
        ],
        hiddenInCreate: [
            'Id',
            'CreatedDate',
            'LastModifiedDate',
            'OwnerId'
        ]
    },
    SampleSending: {
        // #2071: Name ist Auto-Nummer (read-only in der Feld-Config)
        requiredFields: [
            'Account__c'
        ],
        hiddenInCreate: [
            'Id',
            'CreatedDate',
            'LastModifiedDate',
            'OwnerId'
        ],
        allowFileUpload: true,
        relatedObjects: [
            {
                entityType: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].SampleFeedback,
                label: 'Feedback',
                labelPlural: 'Feedbacks',
                parentField: 'Sample_Sending__c',
                fields: [
                    'Name',
                    'Status__c',
                    'Feedback_Date__c'
                ]
            }
        ]
    },
    Onboarding: {
        requiredFields: [
            'Name',
            'Account__c'
        ],
        hiddenInCreate: [
            'Id',
            'CreatedDate',
            'LastModifiedDate',
            'OwnerId'
        ]
    },
    ContactHandover: {
        requiredFields: [
            'Name',
            'Contact__c'
        ],
        hiddenInCreate: [
            'Id',
            'CreatedDate',
            'LastModifiedDate',
            'OwnerId'
        ]
    },
    Product: {
        requiredFields: [
            'Name'
        ],
        // #1059: Salesforce legt Produkte inaktiv an, die Liste zeigt standardmaessig
        // nur aktive — neue Produkte waeren sonst unsichtbar.
        createDefaults: {
            IsActive: true
        },
        // #358 (PM 2026-07-06): im Create-Form raus — Produktname Sync (SF-gepflegt)
        // + Labor-Felder (werden nicht bei der Anlage gesetzt).
        hiddenInCreate: [
            'Id',
            'CreatedDate',
            'LastModifiedDate',
            'Product_Name__c',
            'Abweichende_Laborwerte_gefunden__c',
            'Datum_letzter_Labortest__c'
        ]
    },
    AktuellerPreisUndVerfugbarkeit: {
        requiredFields: [
            'Preis_pro_Tonne__c',
            'Tonnen__c'
        ],
        hiddenInCreate: [
            'Id',
            'CreatedDate',
            'LastModifiedDate',
            'OwnerId'
        ]
    },
    User: {
        // #2071: Anlegen nur über den UserCreateDialog (createVia 'dialog'); email
        // ist in der Feld-Config read-only. Bleibt für Bearbeiten/Anzeige.
        requiredFields: [
            'firstName',
            'lastName'
        ],
        hiddenInCreate: [
            'id',
            'name',
            'createdAt',
            'updatedAt',
            'emailVerified'
        ]
    },
    TravelExpense: {
        requiredFields: [
            'title',
            'startDate',
            'endDate'
        ],
        hiddenInCreate: [
            'id',
            'totalAmount',
            'reimbursementStatus',
            'submittedAt',
            'approvedAt',
            'createdAt',
            'updatedAt'
        ]
    },
    // #1173: wie Salesforce — die Validierungsregel Reklamation_braucht_Status
    // (aktiv seit 17.09.2026) lehnt jede Reklamation ohne Status ab. Pflichtfeld
    // im Formular, damit der Hinweis vor dem Absenden kommt; bewusst OHNE
    // Vorbelegung, denn Status__c hat in Salesforce keinen Standardwert.
    Reklamation: {
        requiredFields: [
            'Status__c'
        ],
        hiddenInCreate: []
    },
    // #384: Prozessfeedback/CAPA — Create bewusst schlank (Ursprung, Betrifft,
    // Bewertung, Beschreibung + Kontext-Lookup); Analyse-/Admin-/Maßnahmen-Felder
    // werden erst am Datensatz gepflegt (Sections kommen aus der FlexiPage-Config).
    Prozessfeedback: {
        requiredFields: [
            'Description__c'
        ],
        hiddenInCreate: [
            'Id',
            'CreatedDate',
            'LastModifiedDate',
            'SystemModstamp',
            'OwnerId',
            'Status__c',
            'X5_Why__c',
            'Core_Reason__c',
            'Zust_ndig_f_r_Ursachenanalyse__c',
            'Ursachenanalyse_durchgef_hrt__c',
            'Gleiche_Ursache_wie__c',
            'Gleiche_L_sung_wie__c',
            'Evaluation_of_Impact_by_Admin__c',
            'Evaluation_of_Effort_by_Admin__c',
            'Implementation_Priority_Set__c',
            'Implementation_Type__c',
            'Implementation_Deadline_Set_by_Admin__c',
            'Dscription_of_Implementation__c',
            'Ready_for_Implementation__c',
            'Implementation_Success_Date__c',
            'Further_Measures__c',
            'Further_Measures_Expected_by__c',
            'Further_Measures_Deadline__c',
            'Further_Measures_Success_Date__c',
            'Further_Measures_Success_Category__c'
        ]
    }
};
function getEntityFormConfig(entityType) {
    return ENTITY_FORM_CONFIGS[entityType];
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/config/entityFormRegistry.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ENTITY_CREATE_VIA",
    ()=>ENTITY_CREATE_VIA,
    "ENTITY_DISPLAY_NAMES",
    ()=>ENTITY_DISPLAY_NAMES,
    "PARENT_FIELD_MAP",
    ()=>PARENT_FIELD_MAP,
    "allowsGenericCreate",
    ()=>allowsGenericCreate,
    "getCreateVia",
    ()=>getCreateVia
]);
'use client';
const PARENT_FIELD_MAP = {
    Contact: {
        Account: 'AccountId'
    },
    Opportunity: {
        Account: 'AccountId',
        Contact: 'ContactId'
    },
    Case: {
        Account: 'AccountId',
        Contact: 'ContactId'
    },
    Task: {
        Account: 'WhatId',
        Contact: 'WhoId',
        Opportunity: 'WhatId',
        Case: 'WhatId',
        // #826/#991: Aufgabe aus dem Kontext der Kern-Objekte (Bezug = WhatId)
        Order: 'WhatId',
        Project: 'WhatId',
        Invoice: 'WhatId',
        MaterialProposal: 'WhatId',
        Requirement: 'WhatId',
        Product: 'WhatId',
        SampleSending: 'WhatId',
        Contract: 'WhatId'
    },
    Order: {
        Account: 'AccountId',
        Opportunity: 'OpportunityId',
        // #1805: „Neu" in der Related List „Aufträge" am Vertrag belegt ihn vor
        Contract: 'ContractId'
    },
    OrderItem: {
        Order: 'OrderId'
    },
    Project: {
        // Projekt__c hat KEIN Account__c — die Account-Verknüpfung läuft über
        // Hauptkunde/Hauptlieferant/Lohndienstleister. Default beim Create aus
        // Account-Kontext: Hauptkunde (#359; der alte Wert 'Account__c' warf
        // INVALID_FIELD beim Projekt-Anlegen im RIGK-Modul).
        Account: 'Hauptkunde__c'
    },
    Invoice: {
        // #469: waren 'Abnehmer__c' und 'Order__c' — beide Felder gibt es auf
        // Abrechnung__c nicht (per describe gegen die Org geprueft). Der
        // Create-Prefill aus einem Account- oder Auftrags-Kontext schrieb damit
        // ins Leere.
        Account: 'Account__c',
        Order: 'Auftrag__c'
    },
    SampleSending: {
        // #469: hier standen 'Account__c' und 'Contact__c' — beide Felder gibt es
        // auf Sample_Sending__c nicht. Das Objekt hat MEHRERE Account-Lookups mit
        // unterschiedlicher Bedeutung (Deliver_to__c, Load_from__c, Carrier__c);
        // welcher der fachliche Primaer-Elternteil ist, kann der Code nicht
        // entscheiden. Entscheidung ML (2026-07-27): der Kunde ist der EMPFAENGER,
        // also die Lieferadresse.
        Account: 'Deliver_to__c',
        // Passend dazu der Kontakt an der Anlieferung — nicht Carrier_Contact__c,
        // das ist der Spediteur.
        Contact: 'Kontakt_Anlieferung__c'
    },
    SampleFeedback: {
        SampleSending: 'Sample_Sending__c'
    },
    MaterialAnalysis: {
        // #469: 'Account__c' existiert nicht. Der einzige Account-Lookup an
        // Materialanalyse__c ist Dienstleister__c.
        Account: 'Dienstleister__c'
    },
    MaterialProposal: {
        // #469: 'Abnehmer__c' existiert nicht; der Kunde haengt an Account__c
        // (Supplier__c waere der Lieferant).
        Account: 'Account__c',
        // #1799: aus dem Kundenvorgang heraus angelegt → Vorgang vorbelegt
        Case: 'Kundenvorgang__c'
    },
    MonitoredMaterial: {
        // #469: 'Lieferant__c' existiert nicht. Der einzige Account-Lookup an
        // Monitored_Material__c ist Kunde__c.
        Account: 'Kunde__c'
    },
    Requirement: {
        Account: 'Account__c'
    },
    SupplierAudit: {
        Account: 'Account__c'
    },
    CompanyCertificate: {
        Account: 'Account__c'
    },
    ProductionSite: {
        Account: 'Account__c'
    },
    Onboarding: {
        Account: 'Account__c',
        // #1799: aus dem Kundenvorgang heraus angelegt → Vorgang vorbelegt
        Case: 'Kundenvorgang__c'
    },
    AktuellerPreisUndVerfugbarkeit: {
        MonitoredMaterial: 'Produkt__c',
        MaterialProposal: 'Material_Proposal__c',
        Requirement: 'Bedarfe__c',
        Opportunity: 'Opportunity__c',
        Order: 'Auftrag__c'
    },
    // Product (Product2) and Lohn (Lohn__c) are created against an Account__c
    // lookup in the RIGK Create/Edit flow on /rigk/account/{id} (issue #224).
    // Requirement (Bedarfe__c) already has its Account mapping at line 65.
    Product: {
        Account: 'Account__c'
    },
    Lohn: {
        Account: 'Account__c'
    },
    // Reklamation (Reklamation__c) is created from the Reklamationen__r related
    // list on an Account (Account__c) or a Case (Auslösender Kundenvorgang).
    Reklamation: {
        Account: 'Account__c',
        Contact: 'Kontakt__c',
        Case: 'Ausl_sender_Kundenvorgang__c'
    },
    // #384: Prozessfeedback__c trägt Lookups auf praktisch alle Kern-Objekte —
    // die QuickWheel-Aktion befüllt den passenden Lookup aus dem Seitenkontext.
    Prozessfeedback: {
        Account: 'Account__c',
        Contact: 'Kontakt__c',
        Case: 'Kundenvorgang__c',
        Order: 'Auftrag__c',
        Invoice: 'Abrechnung__c',
        Project: 'Projekt__c',
        Requirement: 'Bedarfe__c',
        MaterialProposal: 'Material_Proposal__c',
        MonitoredMaterial: 'Monitored_Material__c',
        MaterialAnalysis: 'Materialanalyse__c',
        Product: 'Produkt__c',
        SampleSending: 'Sample_Sending__c',
        ContactHandover: 'Kontakt_bergabe__c',
        Onboarding: 'Onboarding__c',
        Reklamation: 'Reklamation__c',
        SupplierAudit: 'Audit__c'
    }
};
const ENTITY_DISPLAY_NAMES = {
    Account: 'Account',
    Contact: 'Kontakt',
    Opportunity: 'Opportunity',
    Case: 'Kundenvorgang',
    Task: 'Aufgabe',
    Order: 'Auftrag',
    OrderItem: 'Auftragsposition',
    // #449
    Contract: 'Vertrag',
    // #325
    CostCenter: 'Kostenstelle',
    Project: 'Projekt',
    Invoice: 'Rechnung',
    MaterialAnalysis: 'Materialanalyse',
    MaterialProposal: 'Materialvorschlag',
    MonitoredMaterial: 'Überwachtes Material',
    Requirement: 'Bedarf',
    SampleFeedback: 'Musterfeedback',
    SampleSending: 'Musterversand',
    SupplierAudit: 'Lieferantenaudit',
    Onboarding: 'Onboarding',
    ContactHandover: 'Kontaktübergabe',
    CompanyCertificate: 'Firmenzertifikat',
    // #333: Zertifikats-Katalog
    Certificate: 'Zertifikat (Katalog)',
    AuditProperty: 'Prüfparameter',
    ProductionSite: 'Produktionsstätte',
    Product: 'Produkt',
    Lohn: 'Lohndienstleistung',
    AktuellerPreisUndVerfugbarkeit: 'Aktueller Preis',
    Reklamation: 'Reklamation',
    Prozessfeedback: 'Prozessfeedback',
    Notification: 'Benachrichtigung',
    User: 'Benutzer',
    TravelExpense: 'Reisekostenabrechnung'
};
const ENTITY_CREATE_VIA = {
    User: 'dialog'
};
function getCreateVia(entityType) {
    if (!entityType) return 'generic';
    return ENTITY_CREATE_VIA[entityType] ?? 'generic';
}
function allowsGenericCreate(entityType) {
    return getCreateVia(entityType) === 'generic';
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/config/entityIconMap.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NavigationIcons",
    ()=>NavigationIcons,
    "getIconForEntityType",
    ()=>getIconForEntityType
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/config/entityTypes.ts [app-client] (ecmascript)");
// Icons for entity types
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconAccount$2f$IconAccount$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconAccount/IconAccount.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconContact$2f$IconContact$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconContact/IconContact.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconOpportunity$2f$IconOpportunity$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconOpportunity/IconOpportunity.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconCase$2f$IconCase$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconCase/IconCase.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconReklamation$2f$IconReklamation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconReklamation/IconReklamation.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconTask$2f$IconTask$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconTask/IconTask.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconOrder$2f$IconOrder$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconOrder/IconOrder.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconOrderItem$2f$IconOrderItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconOrderItem/IconOrderItem.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconProject$2f$IconProject$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconProject/IconProject.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconInvoice$2f$IconInvoice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconInvoice/IconInvoice.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconMaterialAnalysis$2f$IconMaterialAnalysis$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconMaterialAnalysis/IconMaterialAnalysis.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconMonitoredMaterial$2f$IconMonitoredMaterial$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconMonitoredMaterial/IconMonitoredMaterial.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconMaterialProposal$2f$IconMaterialProposal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconMaterialProposal/IconMaterialProposal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconRequirement$2f$IconRequirement$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconRequirement/IconRequirement.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconSampleFeedback$2f$IconSampleFeedback$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconSampleFeedback/IconSampleFeedback.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconProzessfeedback$2f$IconProzessfeedback$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconProzessfeedback/IconProzessfeedback.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconSampleSending$2f$IconSampleSending$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconSampleSending/IconSampleSending.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconSupplierAudit$2f$IconSupplierAudit$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconSupplierAudit/IconSupplierAudit.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconOnboarding$2f$IconOnboarding$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconOnboarding/IconOnboarding.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconContactHandover$2f$IconContactHandover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconContactHandover/IconContactHandover.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconCompanyCertificate$2f$IconCompanyCertificate$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconCompanyCertificate/IconCompanyCertificate.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconDocument$2f$IconDocument$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconDocument/IconDocument.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconProductionSite$2f$IconProductionSite$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconProductionSite/IconProductionSite.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconProduct$2f$IconProduct$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconProduct/IconProduct.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconLohn$2f$IconLohn$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconLohn/IconLohn.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconPlus$2f$IconPlus$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconPlus/IconPlus.tsx [app-client] (ecmascript)");
// Navigation icons
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconHome$2f$IconHome$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconHome/IconHome.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconSearch$2f$IconSearch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconSearch/IconSearch.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconAnalytics$2f$IconAnalytics$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconAnalytics/IconAnalytics.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconSettings$2f$IconSettings$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconSettings/IconSettings.tsx [app-client] (ecmascript)");
'use client';
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
/**
 * Maps EntityType to its corresponding icon component
 */ const ENTITY_ICON_MAP = {
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Account]: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconAccount$2f$IconAccount$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconAccount"], {}, void 0, false, {
        fileName: "[project]/apps/web/src/app/config/entityIconMap.tsx",
        lineNumber: 44,
        columnNumber: 25
    }, ("TURBOPACK compile-time value", void 0)),
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Contact]: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconContact$2f$IconContact$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconContact"], {}, void 0, false, {
        fileName: "[project]/apps/web/src/app/config/entityIconMap.tsx",
        lineNumber: 45,
        columnNumber: 25
    }, ("TURBOPACK compile-time value", void 0)),
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Opportunity]: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconOpportunity$2f$IconOpportunity$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconOpportunity"], {}, void 0, false, {
        fileName: "[project]/apps/web/src/app/config/entityIconMap.tsx",
        lineNumber: 46,
        columnNumber: 29
    }, ("TURBOPACK compile-time value", void 0)),
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Case]: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconCase$2f$IconCase$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconCase"], {}, void 0, false, {
        fileName: "[project]/apps/web/src/app/config/entityIconMap.tsx",
        lineNumber: 47,
        columnNumber: 22
    }, ("TURBOPACK compile-time value", void 0)),
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Reklamation]: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconReklamation$2f$IconReklamation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconReklamation"], {}, void 0, false, {
        fileName: "[project]/apps/web/src/app/config/entityIconMap.tsx",
        lineNumber: 48,
        columnNumber: 29
    }, ("TURBOPACK compile-time value", void 0)),
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Task]: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconTask$2f$IconTask$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconTask"], {}, void 0, false, {
        fileName: "[project]/apps/web/src/app/config/entityIconMap.tsx",
        lineNumber: 49,
        columnNumber: 22
    }, ("TURBOPACK compile-time value", void 0)),
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Order]: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconOrder$2f$IconOrder$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconOrder"], {}, void 0, false, {
        fileName: "[project]/apps/web/src/app/config/entityIconMap.tsx",
        lineNumber: 50,
        columnNumber: 23
    }, ("TURBOPACK compile-time value", void 0)),
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].OrderItem]: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconOrderItem$2f$IconOrderItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconOrderItem"], {}, void 0, false, {
        fileName: "[project]/apps/web/src/app/config/entityIconMap.tsx",
        lineNumber: 51,
        columnNumber: 27
    }, ("TURBOPACK compile-time value", void 0)),
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Project]: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconProject$2f$IconProject$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconProject"], {}, void 0, false, {
        fileName: "[project]/apps/web/src/app/config/entityIconMap.tsx",
        lineNumber: 52,
        columnNumber: 25
    }, ("TURBOPACK compile-time value", void 0)),
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Invoice]: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconInvoice$2f$IconInvoice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconInvoice"], {}, void 0, false, {
        fileName: "[project]/apps/web/src/app/config/entityIconMap.tsx",
        lineNumber: 53,
        columnNumber: 25
    }, ("TURBOPACK compile-time value", void 0)),
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].MaterialAnalysis]: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconMaterialAnalysis$2f$IconMaterialAnalysis$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconMaterialAnalysis"], {}, void 0, false, {
        fileName: "[project]/apps/web/src/app/config/entityIconMap.tsx",
        lineNumber: 54,
        columnNumber: 34
    }, ("TURBOPACK compile-time value", void 0)),
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].MaterialProposal]: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconMaterialProposal$2f$IconMaterialProposal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconMaterialProposal"], {}, void 0, false, {
        fileName: "[project]/apps/web/src/app/config/entityIconMap.tsx",
        lineNumber: 55,
        columnNumber: 34
    }, ("TURBOPACK compile-time value", void 0)),
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].MonitoredMaterial]: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconMonitoredMaterial$2f$IconMonitoredMaterial$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconMonitoredMaterial"], {}, void 0, false, {
        fileName: "[project]/apps/web/src/app/config/entityIconMap.tsx",
        lineNumber: 56,
        columnNumber: 35
    }, ("TURBOPACK compile-time value", void 0)),
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Requirement]: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconRequirement$2f$IconRequirement$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconRequirement"], {}, void 0, false, {
        fileName: "[project]/apps/web/src/app/config/entityIconMap.tsx",
        lineNumber: 57,
        columnNumber: 29
    }, ("TURBOPACK compile-time value", void 0)),
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].SampleFeedback]: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconSampleFeedback$2f$IconSampleFeedback$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconSampleFeedback"], {}, void 0, false, {
        fileName: "[project]/apps/web/src/app/config/entityIconMap.tsx",
        lineNumber: 58,
        columnNumber: 32
    }, ("TURBOPACK compile-time value", void 0)),
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].SampleSending]: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconSampleSending$2f$IconSampleSending$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconSampleSending"], {}, void 0, false, {
        fileName: "[project]/apps/web/src/app/config/entityIconMap.tsx",
        lineNumber: 59,
        columnNumber: 31
    }, ("TURBOPACK compile-time value", void 0)),
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].SupplierAudit]: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconSupplierAudit$2f$IconSupplierAudit$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconSupplierAudit"], {}, void 0, false, {
        fileName: "[project]/apps/web/src/app/config/entityIconMap.tsx",
        lineNumber: 60,
        columnNumber: 31
    }, ("TURBOPACK compile-time value", void 0)),
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Onboarding]: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconOnboarding$2f$IconOnboarding$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconOnboarding"], {}, void 0, false, {
        fileName: "[project]/apps/web/src/app/config/entityIconMap.tsx",
        lineNumber: 61,
        columnNumber: 28
    }, ("TURBOPACK compile-time value", void 0)),
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].ContactHandover]: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconContactHandover$2f$IconContactHandover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconContactHandover"], {}, void 0, false, {
        fileName: "[project]/apps/web/src/app/config/entityIconMap.tsx",
        lineNumber: 62,
        columnNumber: 33
    }, ("TURBOPACK compile-time value", void 0)),
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].CompanyCertificate]: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconCompanyCertificate$2f$IconCompanyCertificate$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconCompanyCertificate"], {}, void 0, false, {
        fileName: "[project]/apps/web/src/app/config/entityIconMap.tsx",
        lineNumber: 63,
        columnNumber: 36
    }, ("TURBOPACK compile-time value", void 0)),
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Contract]: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconDocument$2f$IconDocument$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconDocument"], {}, void 0, false, {
        fileName: "[project]/apps/web/src/app/config/entityIconMap.tsx",
        lineNumber: 64,
        columnNumber: 26
    }, ("TURBOPACK compile-time value", void 0)),
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].ProductionSite]: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconProductionSite$2f$IconProductionSite$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconProductionSite"], {}, void 0, false, {
        fileName: "[project]/apps/web/src/app/config/entityIconMap.tsx",
        lineNumber: 65,
        columnNumber: 32
    }, ("TURBOPACK compile-time value", void 0)),
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Product]: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconProduct$2f$IconProduct$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconProduct"], {}, void 0, false, {
        fileName: "[project]/apps/web/src/app/config/entityIconMap.tsx",
        lineNumber: 66,
        columnNumber: 25
    }, ("TURBOPACK compile-time value", void 0)),
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Lohn]: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconLohn$2f$IconLohn$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconLohn"], {}, void 0, false, {
        fileName: "[project]/apps/web/src/app/config/entityIconMap.tsx",
        lineNumber: 67,
        columnNumber: 22
    }, ("TURBOPACK compile-time value", void 0)),
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].AktuellerPreisUndVerfugbarkeit]: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconInvoice$2f$IconInvoice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconInvoice"], {}, void 0, false, {
        fileName: "[project]/apps/web/src/app/config/entityIconMap.tsx",
        lineNumber: 68,
        columnNumber: 48
    }, ("TURBOPACK compile-time value", void 0)),
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Prozessfeedback]: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconProzessfeedback$2f$IconProzessfeedback$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconProzessfeedback"], {}, void 0, false, {
        fileName: "[project]/apps/web/src/app/config/entityIconMap.tsx",
        lineNumber: 69,
        columnNumber: 33
    }, ("TURBOPACK compile-time value", void 0))
};
function getIconForEntityType(entityType) {
    return ENTITY_ICON_MAP[entityType] || /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconPlus$2f$IconPlus$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconPlus"], {}, void 0, false, {
        fileName: "[project]/apps/web/src/app/config/entityIconMap.tsx",
        lineNumber: 77,
        columnNumber: 41
    }, this);
}
const NavigationIcons = {
    Home: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconHome$2f$IconHome$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconHome"], {}, void 0, false, {
        fileName: "[project]/apps/web/src/app/config/entityIconMap.tsx",
        lineNumber: 82,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0)),
    Search: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconSearch$2f$IconSearch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconSearch"], {}, void 0, false, {
        fileName: "[project]/apps/web/src/app/config/entityIconMap.tsx",
        lineNumber: 83,
        columnNumber: 11
    }, ("TURBOPACK compile-time value", void 0)),
    Tasks: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconTask$2f$IconTask$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconTask"], {}, void 0, false, {
        fileName: "[project]/apps/web/src/app/config/entityIconMap.tsx",
        lineNumber: 84,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0)),
    Cases: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconCase$2f$IconCase$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconCase"], {}, void 0, false, {
        fileName: "[project]/apps/web/src/app/config/entityIconMap.tsx",
        lineNumber: 85,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0)),
    Accounts: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconAccount$2f$IconAccount$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconAccount"], {}, void 0, false, {
        fileName: "[project]/apps/web/src/app/config/entityIconMap.tsx",
        lineNumber: 86,
        columnNumber: 13
    }, ("TURBOPACK compile-time value", void 0)),
    Contacts: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconContact$2f$IconContact$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconContact"], {}, void 0, false, {
        fileName: "[project]/apps/web/src/app/config/entityIconMap.tsx",
        lineNumber: 87,
        columnNumber: 13
    }, ("TURBOPACK compile-time value", void 0)),
    Opportunities: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconOpportunity$2f$IconOpportunity$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconOpportunity"], {}, void 0, false, {
        fileName: "[project]/apps/web/src/app/config/entityIconMap.tsx",
        lineNumber: 88,
        columnNumber: 18
    }, ("TURBOPACK compile-time value", void 0)),
    Orders: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconOrder$2f$IconOrder$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconOrder"], {}, void 0, false, {
        fileName: "[project]/apps/web/src/app/config/entityIconMap.tsx",
        lineNumber: 89,
        columnNumber: 11
    }, ("TURBOPACK compile-time value", void 0)),
    Analytics: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconAnalytics$2f$IconAnalytics$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconAnalytics"], {}, void 0, false, {
        fileName: "[project]/apps/web/src/app/config/entityIconMap.tsx",
        lineNumber: 90,
        columnNumber: 14
    }, ("TURBOPACK compile-time value", void 0)),
    Settings: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconSettings$2f$IconSettings$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconSettings"], {}, void 0, false, {
        fileName: "[project]/apps/web/src/app/config/entityIconMap.tsx",
        lineNumber: 91,
        columnNumber: 13
    }, ("TURBOPACK compile-time value", void 0))
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/config/entityToResourceMap.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Mapping from EntityType enum values to RBAC Resource (Salesforce API names)
 *
 * EntityType uses friendly names like 'Invoice', 'MaterialProposal'
 * RBAC Resources use Salesforce API names like 'Invoice__c', 'Material_Proposal__c'
 */ __turbopack_context__.s([
    "ENTITY_TO_RESOURCE_MAP",
    ()=>ENTITY_TO_RESOURCE_MAP,
    "getResourceForEntityType",
    ()=>getResourceForEntityType
]);
const ENTITY_TO_RESOURCE_MAP = {
    // Standard Salesforce objects (names match)
    Account: 'Account',
    Contact: 'Contact',
    Case: 'Case',
    Task: 'Task',
    Order: 'Order',
    OrderItem: 'OrderItem',
    Opportunity: 'Opportunity',
    // Custom objects with __c suffix or different names
    Project: 'Projekt__c',
    // #514: Zeigte frueher auf 'Invoice__c' bzw. 'Requirement__c' — Ressourcen,
    // zu denen es KEIN Salesforce-Objekt gibt (weder in field-index.json noch in
    // sf_prefixes.txt). Die Server-Routen gaten laengst auf die echten Objekte
    // (requirements/route.ts:23 prueft 'Bedarfe__c'), die Oberflaeche fragte ueber
    // diese Map dagegen den Phantom-Eintrag — mit ABWEICHENDEN Rechten:
    // Requirement__c erlaubte accounting das Anlegen, Bedarfe__c nicht.
    Invoice: 'Abrechnung__c',
    MaterialAnalysis: 'Materialanalyse__c',
    MaterialProposal: 'Material_Proposal__c',
    MonitoredMaterial: 'Monitored_Material__c',
    Requirement: 'Bedarfe__c',
    SampleFeedback: 'Sample_Feedback__c',
    SampleSending: 'Sample_Sending__c',
    SupplierAudit: 'Supplier_Audit__c',
    Onboarding: 'Onboarding__c',
    ContactHandover: 'Kontakt_bergaben__c',
    // The entity field config / detail layout use the umlaut form 'Kontakt_Übergaben__c'
    // as the entityType, while the RBAC Resource (and objectPermissions) key the
    // umlaut-stripped SF API name. Alias it so getResourceForEntityType resolves the
    // detail-page entityType and access isn't denied. See EntityDetailLayout hasAccess.
    Kontakt_Übergaben__c: 'Kontakt_bergaben__c',
    CompanyCertificate: 'Unternehmenszertifikat__c',
    // #449: Standard-Objekt — EntityType == SF-API-Name
    Contract: 'Contract',
    // #325: Kostenstelle
    CostCenter: 'Kostenstelle_plastship__c',
    // #333: Zertifikats-Katalog
    Certificate: 'Zertifikate__c',
    // #331: Prüfparameter
    AuditProperty: 'AuditProperty__c',
    ProductionSite: 'Produktionsstandort__c',
    Product: 'Product2',
    // #384: Prozessfeedback/CAPA
    Prozessfeedback: 'Prozessfeedback__c',
    // Postgres entities (non-Salesforce)
    Notification: 'notification-management',
    User: 'user-management',
    // #2085: ohne Eintrag prüfte EntityDetailLayout den Rohstring, den die Matrix nicht
    // kennt — nur der frühere admin-Durchgriff ließ diese Detailseiten offen, staff sah
    // „kein Zugriff“. Wächter: tests/rbac/entityDetailResource2085.test.ts
    TravelExpense: 'travel-expenses',
    RecyclateGrade: 'recyclate-grade',
    RecyclateCompatibility: 'recyclate-compatibility',
    // #1154: CMS-Entities der öffentlichen Seiten teilen sich EINE Ressource `cms`
    // (Redaktion = admin/staff); Feinheiten je Entity gibt es nicht.
    CmsPage: 'cms',
    CmsPageVersion: 'cms',
    CmsMedia: 'cms',
    CmsNewsArticle: 'cms',
    CmsNewsCategory: 'cms',
    CmsMediaCategory: 'cms',
    CmsPartner: 'cms',
    CmsPartnerProduct: 'cms',
    CmsRedirect: 'cms',
    CmsNavigation: 'cms',
    // #1330: Wiki-Einträge PFLEGT die Redaktion (`cms`); gelesen wird über die Ressource `wiki`
    CmsWikiArticle: 'cms'
};
function getResourceForEntityType(entityType) {
    return ENTITY_TO_RESOURCE_MAP[entityType];
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/config/entityTypes.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Entity Types Enum
 *
 * Centralized enum for all supported entity types in the application.
 * Use this enum instead of string literals for type safety and consistency.
 */ __turbopack_context__.s([
    "EntityType",
    ()=>EntityType
]);
var EntityType = /*#__PURE__*/ function(EntityType) {
    EntityType["Account"] = "Account";
    EntityType["Contact"] = "Contact";
    EntityType["Opportunity"] = "Opportunity";
    EntityType["Case"] = "Case";
    EntityType["Task"] = "Task";
    EntityType["Order"] = "Order";
    EntityType["OrderItem"] = "OrderItem";
    EntityType["Project"] = "Project";
    EntityType["Invoice"] = "Invoice";
    EntityType["MaterialAnalysis"] = "MaterialAnalysis";
    EntityType["MaterialProposal"] = "MaterialProposal";
    EntityType["MonitoredMaterial"] = "MonitoredMaterial";
    EntityType["Requirement"] = "Requirement";
    EntityType["SampleFeedback"] = "SampleFeedback";
    EntityType["SampleSending"] = "SampleSending";
    EntityType["SupplierAudit"] = "SupplierAudit";
    EntityType["Onboarding"] = "Onboarding";
    EntityType["ContactHandover"] = "ContactHandover";
    EntityType["CompanyCertificate"] = "CompanyCertificate";
    /** #449: Verträge (Standard-Objekt Contract) — Auftrags-Management am Vertrag */ EntityType["Contract"] = "Contract";
    /** #325: Kostenstelle (Kostenstelle_plastship__c) — Lookup-Ziel von Auftrag/Abrechnung */ EntityType["CostCenter"] = "CostCenter";
    /** #333: Zertifikats-Katalog (Zertifikate__c) — bewusst NICHT CompanyCertificate */ EntityType["Certificate"] = "Certificate";
    /** #331: Prüfparameter (AuditProperty__c) an der Materialanalyse */ EntityType["AuditProperty"] = "AuditProperty";
    EntityType["ProductionSite"] = "ProductionSite";
    EntityType["Product"] = "Product";
    EntityType["Lohn"] = "Lohn";
    EntityType["AktuellerPreisUndVerfugbarkeit"] = "AktuellerPreisUndVerfugbarkeit";
    EntityType["Reklamation"] = "Reklamation";
    /** #384: Prozessfeedback/CAPA (Prozessfeedback__c) — überall anlegbar */ EntityType["Prozessfeedback"] = "Prozessfeedback";
    // Postgres entities (non-Salesforce)
    EntityType["Notification"] = "Notification";
    EntityType["User"] = "User";
    EntityType["TravelExpense"] = "TravelExpense";
    return EntityType;
}({});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/config/headerNavigation.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HEADER_NAV_ITEMS",
    ()=>HEADER_NAV_ITEMS,
    "headerHrefs",
    ()=>headerHrefs
]);
const HEADER_NAV_ITEMS = [
    {
        label: {
            de: 'Rezyklatversorgung',
            en: 'Recyclate supply'
        },
        href: '/procurement',
        children: [
            {
                label: {
                    de: 'End-to-End-Versorgung',
                    en: 'End-to-end supply'
                },
                href: '/end-to-end-supply'
            },
            {
                label: {
                    de: 'Digitale Plattform & Materialsuche',
                    en: 'Digital platform & material sourcing'
                },
                href: '/material-search'
            },
            {
                label: {
                    de: 'Top-Rezyklate',
                    en: 'Top Recyclates'
                },
                href: '/top-recyclates'
            }
        ]
    },
    {
        label: {
            de: 'Materialqualität',
            en: 'Material quality'
        },
        href: '/material-quality',
        children: [
            // plastship.com/monitored-materials — in der App die öffentliche Seite dazu (#1205)
            {
                label: {
                    de: 'plastship Monitored Materials'
                },
                href: '/recyclate-performance'
            },
            // #1563: die Bewertungslogik dazu (plastship.com/plastship-monitored-material-system) —
            // vorher nur über die Sitemap erreichbar
            {
                label: {
                    de: 'Qualitätsbewertung von Rezyklaten',
                    en: 'Quality assessment of recyclates'
                },
                href: '/monitored-material-system'
            },
            {
                label: {
                    de: 'Whitepaper'
                },
                href: '/whitepaper'
            },
            {
                label: {
                    de: 'Labordienstleistungen & Materialanalysen',
                    en: 'Laboratory services & material analysis'
                },
                href: '/laboratory-services'
            }
        ]
    },
    {
        label: {
            de: 'Recycling as a Service'
        },
        href: '/waste-disposal'
    },
    {
        label: {
            de: 'Community'
        },
        href: '/partners',
        children: [
            {
                label: {
                    de: 'Entsorger Circle'
                },
                href: '/recycler-circle'
            },
            {
                label: {
                    de: 'Strategiemix in der Kunststoffindustrie',
                    en: 'Strategic Mix in the Plastics Industry'
                },
                href: '/strategy-mix'
            }
        ]
    },
    {
        label: {
            de: 'Aktuelles',
            en: 'News'
        },
        href: '/news',
        children: [
            {
                label: {
                    de: 'KISS – KI-gestützte Optimierung von Kunststoffkreisläufen',
                    en: 'KISS – AI-Driven Optimisation of Plastic Recycling Loops'
                },
                href: '/benchmark'
            },
            {
                label: {
                    de: 'plastship Story',
                    en: 'plastship story'
                },
                href: '/story'
            },
            {
                label: {
                    de: 'Branchen-Umfrage',
                    en: 'Industry survey'
                },
                href: '/industry-survey'
            }
        ]
    },
    {
        label: {
            de: 'Über uns',
            en: 'About us'
        },
        href: '/about',
        children: [
            {
                label: {
                    de: 'Team'
                },
                href: '/team'
            },
            {
                label: {
                    de: 'Kontakt',
                    en: 'Contact'
                },
                href: '/contact-us'
            }
        ]
    }
];
function headerHrefs(items = HEADER_NAV_ITEMS) {
    const alle = items.flatMap((item)=>[
            item.href,
            ...(item.children ?? []).map((kind)=>kind.href)
        ]);
    return [
        ...new Set(alle)
    ];
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/config/quickWheelActionRegistry.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CHILDREN_BY_PARENT",
    ()=>CHILDREN_BY_PARENT,
    "DEFAULT_ACTION_PATHS",
    ()=>DEFAULT_ACTION_PATHS,
    "getDefaultNavigationActions",
    ()=>getDefaultNavigationActions,
    "getEntitySpecificActions",
    ()=>getEntitySpecificActions,
    "getRelatedRecordActions",
    ()=>getRelatedRecordActions,
    "shouldShowDefaultActions",
    ()=>shouldShowDefaultActions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/config/entityTypes.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityFormRegistry$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/config/entityFormRegistry.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$create$2d$from$2f$createFromRegistry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/create-from/createFromRegistry.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityIconMap$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/config/entityIconMap.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$routes$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/routes.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$helper$2f$entityHelpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/helper/entityHelpers.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$entityFieldI18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/entityFields/entityFieldI18n.ts [app-client] (ecmascript)");
// Icons for entity-specific actions
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconCheck$2f$IconCheck$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconCheck/IconCheck.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconClose$2f$IconClose$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconClose/IconClose.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconContact$2f$IconContact$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconContact/IconContact.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconAccount$2f$IconAccount$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconAccount/IconAccount.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconTask$2f$IconTask$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconTask/IconTask.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconEmail$2f$IconEmail$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconEmail/IconEmail.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconPhone$2f$IconPhone$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconPhone/IconPhone.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconFire$2f$IconFire$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconFire/IconFire.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconPause$2f$IconPause$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconPause/IconPause.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconCalendar$2f$IconCalendar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconCalendar/IconCalendar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconSampleSending$2f$IconSampleSending$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconSampleSending/IconSampleSending.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconSampleFeedback$2f$IconSampleFeedback$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconSampleFeedback/IconSampleFeedback.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconCorrelation$2f$IconCorrelation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconCorrelation/IconCorrelation.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconAttachment$2f$IconAttachment$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconAttachment/IconAttachment.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconSearch$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconSearch/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$url$2f$externalLink$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/url/externalLink.ts [app-client] (ecmascript)");
'use client';
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
/**
 * Derive children entities for each parent from PARENT_FIELD_MAP
 * PARENT_FIELD_MAP is: Child -> { Parent -> fieldName }
 * We need: Parent -> Children[]
 */ function deriveChildrenByParent() {
    const childrenByParent = {};
    // Iterate over PARENT_FIELD_MAP entries
    for (const [childType, parentMap] of Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityFormRegistry$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PARENT_FIELD_MAP"])){
        if (!parentMap) continue;
        for (const parentType of Object.keys(parentMap)){
            const parent = parentType;
            const child = childType;
            const children = childrenByParent[parent] ?? [];
            children.push(child);
            childrenByParent[parent] = children;
        }
    }
    return childrenByParent;
}
const CHILDREN_BY_PARENT = deriveChildrenByParent();
function prefill(values) {
    const result = {};
    for (const [field, value] of Object.entries(values)){
        if (value !== undefined && value !== null && value !== '') result[field] = value;
    }
    return result;
}
/**
 * #2074: Vorbelegung aus der „Anlegen aus"-Registry (#415) — dieselben
 * Mappings wie das Anlegen-Menü, keine zweite Liste. Deren Drift-Wächter
 * hält die Zielfelder an der Feld-Config.
 */ function prefillFromRegistry(sourceApiName, targetId, sourceRecord) {
    const target = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$create$2d$from$2f$createFromRegistry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CREATE_FROM_REGISTRY"][sourceApiName]?.targets.find((t)=>t.id === targetId);
    if (!target || !sourceRecord) return {};
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$create$2d$from$2f$createFromRegistry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildInitialValues"])(target, sourceRecord);
}
/**
 * #2071/#2074: Anlege-Aktionen nur für Objekte mit generischem Anlege-Weg.
 * `openCreateModal` weist die übrigen zwar ab — das Rad soll sie aber gar
 * nicht erst anbieten (sonst ein Knopf ohne Wirkung).
 */ function isOfferable(action) {
    if (action.actionType !== 'create' || !action.entityType) return true;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityFormRegistry$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["allowsGenericCreate"])(action.entityType);
}
function getRelatedRecordActions(parentType, parentId, openCreateModal, /** Übersetzt die Objektnamen (#1637); ohne `tr` bleibt der Registry-Text stehen. */ tr) {
    const children = CHILDREN_BY_PARENT[parentType] || [];
    // Limit to 8 actions for the wheel
    const limitedChildren = children.slice(0, 8);
    return limitedChildren.filter(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityFormRegistry$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["allowsGenericCreate"]).map((childType)=>({
            id: `create-${childType.toLowerCase()}`,
            label: tr ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$entityFieldI18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["translateEntityText"])(tr, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityFormRegistry$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENTITY_DISPLAY_NAMES"][childType] || childType) : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityFormRegistry$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENTITY_DISPLAY_NAMES"][childType] || childType,
            icon: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityIconMap$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getIconForEntityType"])(childType),
            entityType: childType,
            actionType: 'create',
            onClick: ()=>openCreateModal({
                    entityType: childType,
                    parentEntityType: parentType,
                    parentEntityId: parentId
                })
        }));
}
function getDefaultNavigationActions(router, tr) {
    return [
        {
            id: 'home',
            label: tr('quickWheel.actions.home'),
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityIconMap$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavigationIcons"].Home,
            onClick: ()=>router.push('/')
        },
        {
            id: 'search',
            label: tr('quickWheel.actions.search'),
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityIconMap$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavigationIcons"].Search,
            onClick: ()=>router.push('/search')
        },
        {
            id: 'tasks',
            label: tr('quickWheel.actions.tasks'),
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityIconMap$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavigationIcons"].Tasks,
            onClick: ()=>router.push(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$routes$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavigationPaths"].TASKS)
        },
        {
            id: 'cases',
            label: tr('quickWheel.actions.cases'),
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityIconMap$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavigationIcons"].Cases,
            onClick: ()=>router.push(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$routes$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavigationPaths"].CASES)
        },
        {
            id: 'accounts',
            label: tr('quickWheel.actions.accounts'),
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityIconMap$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavigationIcons"].Accounts,
            onClick: ()=>router.push(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$routes$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavigationPaths"].ACCOUNTS)
        },
        {
            id: 'opportunities',
            label: tr('quickWheel.actions.opportunities'),
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityIconMap$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavigationIcons"].Opportunities,
            onClick: ()=>router.push(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$routes$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavigationPaths"].OPPORTUNITIES)
        },
        {
            id: 'orders',
            label: tr('quickWheel.actions.orders'),
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityIconMap$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavigationIcons"].Orders,
            onClick: ()=>router.push(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$routes$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavigationPaths"].ORDERS)
        }
    ];
}
const DEFAULT_ACTION_PATHS = [
    '/',
    '/search',
    '/tasks',
    '/cases',
    '/accounts',
    '/contacts',
    '/opportunities',
    '/orders',
    '/admin'
];
function shouldShowDefaultActions(pathname) {
    // Check exact matches first
    if (DEFAULT_ACTION_PATHS.includes(pathname)) {
        return true;
    }
    // Check if it's a list page (not a detail page with ID)
    const pathParts = pathname.split('/').filter(Boolean);
    // List pages have 1 segment (e.g., /tasks, /cases)
    // Detail pages have 2+ segments (e.g., /case/123)
    if (pathParts.length === 1) {
        return true;
    }
    return false;
}
function getEntitySpecificActions(entityType, entityId, entityData, callbacks) {
    return buildEntitySpecificActions(entityType, entityId, entityData, callbacks).filter(isOfferable);
}
function buildEntitySpecificActions(entityType, entityId, entityData, callbacks) {
    const { router, tr, onStatusChange, onFileUpload, openCreateModal } = callbacks;
    switch(entityType){
        // Standard Objects
        case __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Account:
            return getAccountActions(entityId, entityData, router, tr);
        case __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Contact:
            return getContactActions(entityId, entityData, router, tr, openCreateModal);
        case __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Opportunity:
            return getOpportunityActions(entityId, entityData, router, tr, onStatusChange);
        case __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Case:
            return getCaseActions(entityId, entityData, router, tr, onStatusChange);
        case __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Task:
            return getTaskActions(entityId, entityData, router, tr, onStatusChange, openCreateModal);
        case __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Order:
            // #341: kein onStatusChange mehr — der Auftrag hat keine Statusaktion.
            return getOrderActions(entityId, entityData, router, tr, onFileUpload);
        // Custom Objects - Billing & Sales
        case __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Invoice:
            return getInvoiceActions(entityId, entityData, router, tr, onStatusChange, onFileUpload);
        case __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Project:
            return getProjectActions(entityId, entityData, router, tr, onStatusChange, onFileUpload);
        // Custom Objects - Materials
        case __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].MaterialProposal:
            return getMaterialProposalActions(entityId, entityData, router, tr, onStatusChange, openCreateModal);
        case __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].MaterialAnalysis:
            return getMaterialAnalysisActions(entityId, entityData, router, tr, onFileUpload);
        case __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].MonitoredMaterial:
            return getMonitoredMaterialActions(entityId, entityData, router, tr, openCreateModal);
        case __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Requirement:
            return getRequirementActions(entityId, entityData, router, tr, onStatusChange, onFileUpload, openCreateModal);
        // Custom Objects - Samples
        case __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].SampleSending:
            return getSampleSendingActions(entityId, entityData, router, tr, onStatusChange, openCreateModal, onFileUpload);
        case __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].SampleFeedback:
            return getSampleFeedbackActions(entityId, entityData, router, tr, onStatusChange);
        // Custom Objects - Onboarding & Workflow
        case __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Onboarding:
            return getOnboardingActions(entityId, entityData, router, tr);
        default:
            return [];
    }
}
// ============================================================================
// ACCOUNT ACTIONS
// ============================================================================
function getAccountActions(accountId, data, router, tr) {
    const actions = [];
    // Navigate to related lists
    actions.push({
        id: 'view-contacts',
        label: tr('quickWheel.actions.contacts'),
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconContact$2f$IconContact$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconContact"], {}, void 0, false, {
            fileName: "[project]/apps/web/src/app/config/quickWheelActionRegistry.tsx",
            lineNumber: 390,
            columnNumber: 11
        }, this),
        actionType: 'navigate',
        onClick: ()=>router.push(`/contacts?accountId=${accountId}`)
    });
    actions.push({
        id: 'view-opportunities',
        label: tr('quickWheel.actions.opportunities'),
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityIconMap$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavigationIcons"].Opportunities,
        actionType: 'navigate',
        onClick: ()=>router.push(`/opportunities?accountId=${accountId}`)
    });
    actions.push({
        id: 'view-cases',
        label: tr('quickWheel.actions.cases'),
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityIconMap$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavigationIcons"].Cases,
        actionType: 'navigate',
        onClick: ()=>router.push(`/cases?accountId=${accountId}`)
    });
    actions.push({
        id: 'view-orders',
        label: tr('quickWheel.actions.orders'),
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityIconMap$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavigationIcons"].Orders,
        actionType: 'navigate',
        onClick: ()=>router.push(`/orders?accountId=${accountId}`)
    });
    // Email action if primary contact email exists
    const email = data?.Email__c;
    if (email) {
        actions.push({
            id: 'send-email',
            label: tr('quickWheel.actions.email'),
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconEmail$2f$IconEmail$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconEmail"], {}, void 0, false, {
                fileName: "[project]/apps/web/src/app/config/quickWheelActionRegistry.tsx",
                lineNumber: 425,
                columnNumber: 13
            }, this),
            actionType: 'navigate',
            onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$url$2f$externalLink$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["openInNewTab"])(`mailto:${email}`)
        });
    }
    return actions;
}
// ============================================================================
// CONTACT ACTIONS
// ============================================================================
function getContactActions(contactId, data, router, tr, openCreateModal) {
    const actions = [];
    // View parent Account
    const accountId = data?.AccountId;
    if (accountId) {
        actions.push({
            id: 'view-account',
            label: tr('quickWheel.actions.account'),
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconAccount$2f$IconAccount$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconAccount"], {}, void 0, false, {
                fileName: "[project]/apps/web/src/app/config/quickWheelActionRegistry.tsx",
                lineNumber: 452,
                columnNumber: 13
            }, this),
            actionType: 'navigate',
            onClick: ()=>router.push(`/account/${accountId}`)
        });
    }
    // Phone action
    const phone = data?.Phone;
    if (phone) {
        actions.push({
            id: 'call-contact',
            label: tr('quickWheel.actions.call'),
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconPhone$2f$IconPhone$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconPhone"], {}, void 0, false, {
                fileName: "[project]/apps/web/src/app/config/quickWheelActionRegistry.tsx",
                lineNumber: 464,
                columnNumber: 13
            }, this),
            actionType: 'navigate',
            onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$url$2f$externalLink$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["openInNewTab"])(`tel:${phone}`)
        });
    }
    // Email action
    const email = data?.Email;
    if (email) {
        actions.push({
            id: 'send-email',
            label: tr('quickWheel.actions.email'),
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconEmail$2f$IconEmail$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconEmail"], {}, void 0, false, {
                fileName: "[project]/apps/web/src/app/config/quickWheelActionRegistry.tsx",
                lineNumber: 476,
                columnNumber: 13
            }, this),
            actionType: 'navigate',
            onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$url$2f$externalLink$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["openInNewTab"])(`mailto:${email}`)
        });
    }
    // Log Activity (create Task)
    if (openCreateModal) {
        actions.push({
            id: 'log-activity',
            label: tr('quickWheel.actions.logActivity'),
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconTask$2f$IconTask$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconTask"], {}, void 0, false, {
                fileName: "[project]/apps/web/src/app/config/quickWheelActionRegistry.tsx",
                lineNumber: 487,
                columnNumber: 13
            }, this),
            actionType: 'create',
            entityType: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Task,
            onClick: ()=>openCreateModal({
                    entityType: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Task,
                    initialValues: prefill({
                        WhoId: contactId,
                        WhatId: accountId
                    })
                })
        });
    }
    return actions;
}
// ============================================================================
// OPPORTUNITY ACTIONS
// ============================================================================
function getOpportunityActions(_oppId, data, router, tr, onStatusChange) {
    const actions = [];
    // View Account
    const accountId = data?.AccountId;
    if (accountId) {
        actions.push({
            id: 'view-account',
            label: tr('quickWheel.actions.account'),
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconAccount$2f$IconAccount$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconAccount"], {}, void 0, false, {
                fileName: "[project]/apps/web/src/app/config/quickWheelActionRegistry.tsx",
                lineNumber: 522,
                columnNumber: 13
            }, this),
            actionType: 'navigate',
            onClick: ()=>router.push(`/account/${accountId}`)
        });
    }
    // View Contact
    const contactId = data?.ContactId;
    if (contactId) {
        actions.push({
            id: 'view-contact',
            label: tr('quickWheel.actions.contact'),
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconContact$2f$IconContact$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconContact"], {}, void 0, false, {
                fileName: "[project]/apps/web/src/app/config/quickWheelActionRegistry.tsx",
                lineNumber: 534,
                columnNumber: 13
            }, this),
            actionType: 'navigate',
            onClick: ()=>router.push(`/contact/${contactId}`)
        });
    }
    // Stage change actions - API handles RBAC
    const currentStage = data?.StageName;
    if (onStatusChange && currentStage !== 'Closed Won' && currentStage !== 'Closed Lost') {
        actions.push({
            id: 'mark-won',
            label: tr('quickWheel.actions.won'),
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconCheck$2f$IconCheck$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconCheck"], {}, void 0, false, {
                fileName: "[project]/apps/web/src/app/config/quickWheelActionRegistry.tsx",
                lineNumber: 546,
                columnNumber: 13
            }, this),
            onClick: ()=>onStatusChange('Closed Won')
        });
        actions.push({
            id: 'mark-lost',
            label: tr('quickWheel.actions.lost'),
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconClose$2f$IconClose$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconClose"], {}, void 0, false, {
                fileName: "[project]/apps/web/src/app/config/quickWheelActionRegistry.tsx",
                lineNumber: 553,
                columnNumber: 13
            }, this),
            onClick: ()=>onStatusChange('Closed Lost')
        });
    }
    return actions;
}
// ============================================================================
// CASE ACTIONS
// ============================================================================
function getCaseActions(_caseId, data, router, tr, onStatusChange) {
    const actions = [];
    // View Account
    const accountId = data?.AccountId;
    if (accountId) {
        actions.push({
            id: 'view-account',
            label: tr('quickWheel.actions.account'),
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconAccount$2f$IconAccount$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconAccount"], {}, void 0, false, {
                fileName: "[project]/apps/web/src/app/config/quickWheelActionRegistry.tsx",
                lineNumber: 579,
                columnNumber: 13
            }, this),
            actionType: 'navigate',
            onClick: ()=>router.push(`/account/${accountId}`)
        });
    }
    // View Contact
    const contactId = data?.ContactId;
    if (contactId) {
        actions.push({
            id: 'view-contact',
            label: tr('quickWheel.actions.contact'),
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconContact$2f$IconContact$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconContact"], {}, void 0, false, {
                fileName: "[project]/apps/web/src/app/config/quickWheelActionRegistry.tsx",
                lineNumber: 591,
                columnNumber: 13
            }, this),
            actionType: 'navigate',
            onClick: ()=>router.push(`/contact/${contactId}`)
        });
    }
    // Status change actions - API handles RBAC
    const currentStatus = data?.Status;
    if (onStatusChange) {
        if (currentStatus !== 'Closed') {
            actions.push({
                id: 'resolve-case',
                label: tr('quickWheel.actions.resolve'),
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconCheck$2f$IconCheck$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconCheck"], {}, void 0, false, {
                    fileName: "[project]/apps/web/src/app/config/quickWheelActionRegistry.tsx",
                    lineNumber: 604,
                    columnNumber: 15
                }, this),
                onClick: ()=>onStatusChange('Closed')
            });
        }
        if (currentStatus !== 'Escalated') {
            actions.push({
                id: 'escalate-case',
                label: tr('quickWheel.actions.escalate'),
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconFire$2f$IconFire$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconFire"], {}, void 0, false, {
                    fileName: "[project]/apps/web/src/app/config/quickWheelActionRegistry.tsx",
                    lineNumber: 613,
                    columnNumber: 15
                }, this),
                onClick: ()=>onStatusChange('Escalated')
            });
        }
    }
    return actions;
}
// ============================================================================
// TASK ACTIONS
// ============================================================================
function getTaskActions(_taskId, taskData, router, tr, onStatusChange, openCreateModal) {
    const actions = [];
    // Complete Task - API handles RBAC
    const currentStatus = taskData?.Status;
    if (currentStatus !== 'Completed' && onStatusChange) {
        actions.push({
            id: 'complete-task',
            label: tr('quickWheel.actions.complete'),
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconCheck$2f$IconCheck$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconCheck"], {}, void 0, false, {
                fileName: "[project]/apps/web/src/app/config/quickWheelActionRegistry.tsx",
                lineNumber: 641,
                columnNumber: 13
            }, this),
            onClick: ()=>onStatusChange('Completed')
        });
    }
    // View Contact (WhoId)
    const whoId = taskData?.WhoId;
    if (whoId) {
        const contactUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$helper$2f$entityHelpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getUrlFromId"])(whoId);
        if (contactUrl) {
            actions.push({
                id: 'view-contact',
                label: tr('quickWheel.actions.contact'),
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconContact$2f$IconContact$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconContact"], {}, void 0, false, {
                    fileName: "[project]/apps/web/src/app/config/quickWheelActionRegistry.tsx",
                    lineNumber: 654,
                    columnNumber: 15
                }, this),
                actionType: 'navigate',
                onClick: ()=>router.push(contactUrl)
            });
        }
    }
    // View Related (WhatId)
    const whatId = taskData?.WhatId;
    if (whatId) {
        const relatedUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$helper$2f$entityHelpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getUrlFromId"])(whatId);
        if (relatedUrl) {
            actions.push({
                id: 'view-related',
                label: tr('quickWheel.actions.related'),
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconAccount$2f$IconAccount$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconAccount"], {}, void 0, false, {
                    fileName: "[project]/apps/web/src/app/config/quickWheelActionRegistry.tsx",
                    lineNumber: 669,
                    columnNumber: 15
                }, this),
                actionType: 'navigate',
                onClick: ()=>router.push(relatedUrl)
            });
        }
    }
    // Create Follow-up (requires create permission)
    if (openCreateModal) {
        actions.push({
            id: 'create-followup',
            label: tr('quickWheel.actions.followUp'),
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconTask$2f$IconTask$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconTask"], {}, void 0, false, {
                fileName: "[project]/apps/web/src/app/config/quickWheelActionRegistry.tsx",
                lineNumber: 681,
                columnNumber: 13
            }, this),
            actionType: 'create',
            entityType: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Task,
            onClick: ()=>openCreateModal({
                    entityType: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Task,
                    initialValues: prefill({
                        WhoId: whoId,
                        WhatId: whatId,
                        Subject: `Follow-up: ${taskData?.Subject || 'Task'}`
                    })
                })
        });
    }
    // Reschedule - focuses on date field for inline edit
    actions.push({
        id: 'reschedule',
        label: tr('quickWheel.actions.reschedule'),
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconCalendar$2f$IconCalendar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconCalendar"], {}, void 0, false, {
            fileName: "[project]/apps/web/src/app/config/quickWheelActionRegistry.tsx",
            lineNumber: 700,
            columnNumber: 11
        }, this),
        onClick: ()=>{
            const dateField = document.querySelector('[data-field-name="ActivityDate"]');
            if (dateField) {
                dateField.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
                const editableElement = dateField.querySelector('[data-editable]');
                if (editableElement) editableElement.click();
            }
        }
    });
    return actions;
}
// ============================================================================
// ORDER ACTIONS
// ============================================================================
function getOrderActions(_orderId, data, router, tr, onFileUpload) {
    const actions = [];
    // View Account
    const accountId = data?.AccountId;
    if (accountId) {
        actions.push({
            id: 'view-account',
            label: tr('quickWheel.actions.account'),
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconAccount$2f$IconAccount$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconAccount"], {}, void 0, false, {
                fileName: "[project]/apps/web/src/app/config/quickWheelActionRegistry.tsx",
                lineNumber: 732,
                columnNumber: 13
            }, this),
            actionType: 'navigate',
            onClick: ()=>router.push(`/account/${accountId}`)
        });
    }
    // View Opportunity
    const oppId = data?.OpportunityId;
    if (oppId) {
        actions.push({
            id: 'view-opportunity',
            label: tr('quickWheel.actions.opportunity'),
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityIconMap$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavigationIcons"].Opportunities,
            actionType: 'navigate',
            onClick: ()=>router.push(`/opportunity/${oppId}`)
        });
    }
    // Upload document (Purchase Order, Confirmation)
    if (onFileUpload) {
        actions.push({
            id: 'upload-file',
            label: tr('quickWheel.actions.upload'),
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconAttachment$2f$IconAttachment$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconAttachment"], {}, void 0, false, {
                fileName: "[project]/apps/web/src/app/config/quickWheelActionRegistry.tsx",
                lineNumber: 755,
                columnNumber: 13
            }, this),
            onClick: onFileUpload
        });
    }
    // #341: Der "Aktivieren"-Knopf ist ersatzlos entfallen.
    //
    // Er schrieb 'Activated' nach Order.Status — den Wert aus dem
    // Standard-Salesforce-Auftragsmodell (Draft | Activated). Diese Org hat die
    // Auswahlliste aber durch einen eigenen Ablauf ersetzt: Draft, Bestellung
    // erhalten, Bestellung an Lieferanten versandt, Auftrag durch Lieferant
    // bestaetigt, … , Abgeschlossen (14 Werte, siehe types/salesforce/Order.ts).
    // 'Activated' kommt darin nicht vor, der PATCH scheiterte also immer — und
    // weil die Sichtbarkeitsbedingung `!== 'Activated'` nie falsch werden konnte,
    // stand der Knopf ausnahmslos an jedem Auftrag.
    //
    // Ein Ersatzwert waere geraten: "aktivieren" hat in diesem Ablauf keine
    // Entsprechung. 'Bestellung erhalten' etwa bezeichnet den Eingang der
    // Kundenbestellung, nicht eine Aktivierung — den Knopf darauf zu legen
    // hiesse, stillschweigend einen fachlichen Schritt auszuloesen, den niemand
    // angefordert hat. Der Auftragsstatus bleibt ueber das Kanban-Board
    // (OrdersKanban, statusRegistry) und die Detailseite aenderbar.
    return actions;
}
// ============================================================================
// INVOICE ACTIONS
// ============================================================================
function getInvoiceActions(_invoiceId, data, router, tr, onStatusChange, onFileUpload) {
    const actions = [];
    // View Order
    const orderId = data?.Order__c;
    if (orderId) {
        actions.push({
            id: 'view-order',
            label: tr('quickWheel.actions.order'),
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityIconMap$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavigationIcons"].Orders,
            actionType: 'navigate',
            onClick: ()=>router.push(`/order/${orderId}`)
        });
    }
    // View Account (Abnehmer) — #2074: das Feld heißt Account__c, Abnehmer__c
    // gibt es weder an Abrechnung noch am Material Proposal.
    const accountId = data?.Account__c;
    if (accountId) {
        actions.push({
            id: 'view-account',
            label: tr('quickWheel.actions.account'),
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconAccount$2f$IconAccount$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconAccount"], {}, void 0, false, {
                fileName: "[project]/apps/web/src/app/config/quickWheelActionRegistry.tsx",
                lineNumber: 813,
                columnNumber: 13
            }, this),
            actionType: 'navigate',
            onClick: ()=>router.push(`/account/${accountId}`)
        });
    }
    // Upload document (Invoice, Payment Receipt)
    if (onFileUpload) {
        actions.push({
            id: 'upload-file',
            label: tr('quickWheel.actions.upload'),
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconAttachment$2f$IconAttachment$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconAttachment"], {}, void 0, false, {
                fileName: "[project]/apps/web/src/app/config/quickWheelActionRegistry.tsx",
                lineNumber: 824,
                columnNumber: 13
            }, this),
            onClick: onFileUpload
        });
    }
    // Mark as Paid — #341: Abrechnung__c hat weder `Bezahlt__c` noch `Status__c`.
    // Beides wurde hier gelesen bzw. geschrieben; der Merker stand nie auf true,
    // also erschien die Aktion immer, und ihr Schreibvorgang scheiterte mit 400.
    // Kanonisch ist `Status_der_Abrechnung__c` mit dem Wert 'Bezahlt'
    // (lib/status/statusRegistry.ts → INVOICE_STATUS_COLUMNS).
    const invoiceStatus = data?.Status_der_Abrechnung__c;
    if (onStatusChange && invoiceStatus !== 'Bezahlt') {
        actions.push({
            id: 'mark-paid',
            label: tr('quickWheel.actions.paid'),
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconCheck$2f$IconCheck$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconCheck"], {}, void 0, false, {
                fileName: "[project]/apps/web/src/app/config/quickWheelActionRegistry.tsx",
                lineNumber: 839,
                columnNumber: 13
            }, this),
            onClick: ()=>onStatusChange('Bezahlt')
        });
    }
    return actions;
}
// ============================================================================
// PROJECT ACTIONS
// ============================================================================
function getProjectActions(projectId, data, router, tr, onStatusChange, onFileUpload) {
    const actions = [];
    // View Account
    const accountId = data?.Account__c;
    if (accountId) {
        actions.push({
            id: 'view-account',
            label: tr('quickWheel.actions.account'),
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconAccount$2f$IconAccount$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconAccount"], {}, void 0, false, {
                fileName: "[project]/apps/web/src/app/config/quickWheelActionRegistry.tsx",
                lineNumber: 866,
                columnNumber: 13
            }, this),
            actionType: 'navigate',
            onClick: ()=>router.push(`/account/${accountId}`)
        });
    }
    // Upload project document
    if (onFileUpload) {
        actions.push({
            id: 'upload-file',
            label: tr('quickWheel.actions.upload'),
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconAttachment$2f$IconAttachment$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconAttachment"], {}, void 0, false, {
                fileName: "[project]/apps/web/src/app/config/quickWheelActionRegistry.tsx",
                lineNumber: 877,
                columnNumber: 13
            }, this),
            onClick: onFileUpload
        });
    }
    // Project status actions
    //
    // #341: hier standen 'Completed' und 'On Hold' — beide gibt es auf
    // Projekt__c.Status__c nicht. Das Feld kennt genau drei Werte
    // (Aktiv | Inaktiv | Pausiert), die PATCHes scheiterten also immer.
    // 'Completed' -> 'Inaktiv' (einen Abschluss-Status hat das Objekt nicht),
    // 'On Hold'   -> 'Pausiert'.
    const currentStatus = data?.Status__c;
    if (onStatusChange) {
        if (currentStatus !== 'Inaktiv') {
            actions.push({
                id: 'complete-project',
                label: tr('quickWheel.actions.complete'),
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconCheck$2f$IconCheck$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconCheck"], {}, void 0, false, {
                    fileName: "[project]/apps/web/src/app/config/quickWheelActionRegistry.tsx",
                    lineNumber: 895,
                    columnNumber: 15
                }, this),
                onClick: ()=>onStatusChange('Inaktiv')
            });
        }
        if (currentStatus !== 'Pausiert') {
            actions.push({
                id: 'hold-project',
                label: tr('quickWheel.actions.hold'),
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconPause$2f$IconPause$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconPause"], {}, void 0, false, {
                    fileName: "[project]/apps/web/src/app/config/quickWheelActionRegistry.tsx",
                    lineNumber: 903,
                    columnNumber: 15
                }, this),
                onClick: ()=>onStatusChange('Pausiert')
            });
        }
    }
    // View Timeline/Analytics
    actions.push({
        id: 'view-timeline',
        label: tr('quickWheel.actions.timeline'),
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconCalendar$2f$IconCalendar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconCalendar"], {}, void 0, false, {
            fileName: "[project]/apps/web/src/app/config/quickWheelActionRegistry.tsx",
            lineNumber: 913,
            columnNumber: 11
        }, this),
        actionType: 'navigate',
        onClick: ()=>router.push(`/project/${projectId}/timeline`)
    });
    return actions;
}
// ============================================================================
// MATERIAL PROPOSAL ACTIONS
// ============================================================================
function getMaterialProposalActions(_proposalId, data, router, tr, onStatusChange, openCreateModal) {
    const actions = [];
    // View Account (Abnehmer) — #2074: das Feld heißt Account__c, Abnehmer__c
    // gibt es weder an Abrechnung noch am Material Proposal.
    const accountId = data?.Account__c;
    if (accountId) {
        actions.push({
            id: 'view-account',
            label: tr('quickWheel.actions.account'),
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconAccount$2f$IconAccount$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconAccount"], {}, void 0, false, {
                fileName: "[project]/apps/web/src/app/config/quickWheelActionRegistry.tsx",
                lineNumber: 941,
                columnNumber: 13
            }, this),
            onClick: ()=>router.push(`/account/${accountId}`)
        });
    }
    // Status actions
    const currentStatus = data?.Status__c;
    if (onStatusChange) {
        if (currentStatus !== 'Accepted') {
            actions.push({
                id: 'accept-proposal',
                label: tr('quickWheel.actions.accept'),
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconCheck$2f$IconCheck$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconCheck"], {}, void 0, false, {
                    fileName: "[project]/apps/web/src/app/config/quickWheelActionRegistry.tsx",
                    lineNumber: 953,
                    columnNumber: 15
                }, this),
                onClick: ()=>onStatusChange('Approved')
            });
        }
        if (currentStatus !== 'Rejected') {
            actions.push({
                id: 'reject-proposal',
                label: tr('quickWheel.actions.reject'),
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconClose$2f$IconClose$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconClose"], {}, void 0, false, {
                    fileName: "[project]/apps/web/src/app/config/quickWheelActionRegistry.tsx",
                    lineNumber: 961,
                    columnNumber: 15
                }, this),
                onClick: ()=>onStatusChange('Rejected')
            });
        }
    }
    // Create Sample Sending from Proposal
    if (openCreateModal) {
        actions.push({
            id: 'create-sample',
            label: tr('quickWheel.actions.sample'),
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconSampleSending$2f$IconSampleSending$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconSampleSending"], {}, void 0, false, {
                fileName: "[project]/apps/web/src/app/config/quickWheelActionRegistry.tsx",
                lineNumber: 972,
                columnNumber: 13
            }, this),
            actionType: 'create',
            entityType: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].SampleSending,
            onClick: ()=>// #2074: Account__c/Material_Proposal__c gibt es am Sample Sending
                // nicht — Vorbelegung wie „Musterversand anlegen" im Anlegen-Menü.
                openCreateModal({
                    entityType: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].SampleSending,
                    initialValues: prefillFromRegistry('Material_Proposal__c', 'ss-musterversand', data)
                })
        });
    }
    return actions;
}
// ============================================================================
// MATERIAL ANALYSIS ACTIONS
// ============================================================================
function getMaterialAnalysisActions(analysisId, data, router, tr, onFileUpload) {
    const actions = [];
    // View Account
    const accountId = data?.Account__c;
    if (accountId) {
        actions.push({
            id: 'view-account',
            label: tr('quickWheel.actions.account'),
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconAccount$2f$IconAccount$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconAccount"], {}, void 0, false, {
                fileName: "[project]/apps/web/src/app/config/quickWheelActionRegistry.tsx",
                lineNumber: 1006,
                columnNumber: 13
            }, this),
            actionType: 'navigate',
            onClick: ()=>router.push(`/account/${accountId}`)
        });
    }
    // Upload lab report, certificate
    if (onFileUpload) {
        actions.push({
            id: 'upload-file',
            label: tr('quickWheel.actions.upload'),
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconAttachment$2f$IconAttachment$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconAttachment"], {}, void 0, false, {
                fileName: "[project]/apps/web/src/app/config/quickWheelActionRegistry.tsx",
                lineNumber: 1017,
                columnNumber: 13
            }, this),
            onClick: onFileUpload
        });
    }
    // View Analytics
    actions.push({
        id: 'view-analytics',
        label: tr('quickWheel.actions.analytics'),
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityIconMap$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavigationIcons"].Analytics,
        actionType: 'navigate',
        onClick: ()=>router.push(`/material-analysis/${analysisId}/analytics`)
    });
    return actions;
}
// ============================================================================
// MONITORED MATERIAL ACTIONS
// ============================================================================
function getMonitoredMaterialActions(materialId, data, router, tr, openCreateModal) {
    const actions = [];
    // View Supplier (Lieferant)
    const supplierId = data?.Lieferant__c;
    if (supplierId) {
        actions.push({
            id: 'view-supplier',
            label: tr('quickWheel.actions.supplier'),
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconAccount$2f$IconAccount$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconAccount"], {}, void 0, false, {
                fileName: "[project]/apps/web/src/app/config/quickWheelActionRegistry.tsx",
                lineNumber: 1052,
                columnNumber: 13
            }, this),
            onClick: ()=>router.push(`/account/${supplierId}`)
        });
    }
    // Add Pricing Entry (#119)
    if (openCreateModal) {
        actions.push({
            id: 'add-pricing',
            label: tr('quickWheel.actions.price'),
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityIconMap$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavigationIcons"].Orders,
            actionType: 'create',
            entityType: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].AktuellerPreisUndVerfugbarkeit,
            onClick: ()=>openCreateModal({
                    entityType: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].AktuellerPreisUndVerfugbarkeit,
                    // #2074: das überwachte Material trägt den Produkt-Lookup als Produkt__c
                    initialValues: prefill({
                        Produkt__c: data?.Produkt__c
                    })
                })
        });
        // Create Material Proposal (#158)
        actions.push({
            id: 'create-proposal',
            label: tr('quickWheel.actions.proposal'),
            icon: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityIconMap$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getIconForEntityType"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].MaterialProposal),
            actionType: 'create',
            entityType: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].MaterialProposal,
            onClick: ()=>openCreateModal({
                    entityType: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].MaterialProposal,
                    // #2074: Polymer/Form/Farbe gibt es am MP nicht — es modelliert das
                    // Material über den Produkt-Lookup.
                    initialValues: prefill({
                        Product__c: data?.Produkt__c
                    })
                })
        });
    }
    // Quick Update (#137) - triggers inline edit
    actions.push({
        id: 'update-material',
        label: tr('quickWheel.actions.update'),
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconCalendar$2f$IconCalendar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconCalendar"], {}, void 0, false, {
            fileName: "[project]/apps/web/src/app/config/quickWheelActionRegistry.tsx",
            lineNumber: 1098,
            columnNumber: 11
        }, this),
        onClick: ()=>{
            // Focus on inline edit for key fields
            const field = document.querySelector('[data-field-name="Lagerort__c"]') || document.querySelector('[data-field-name="Menge_Lager__c"]') || document.querySelector('[data-field-name="Price__c"]');
            if (field) {
                field.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
                const editable = field.querySelector('[data-editable]');
                if (editable) editable.click();
            }
        }
    });
    // View Analytics
    actions.push({
        id: 'view-analytics',
        label: tr('quickWheel.actions.analytics'),
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityIconMap$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavigationIcons"].Analytics,
        onClick: ()=>router.push(`/monitored-material/${materialId}/analytics`)
    });
    // Quality Correlations
    actions.push({
        id: 'quality-correlations',
        label: tr('quickWheel.actions.quality'),
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconCorrelation$2f$IconCorrelation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconCorrelation"], {}, void 0, false, {
            fileName: "[project]/apps/web/src/app/config/quickWheelActionRegistry.tsx",
            lineNumber: 1125,
            columnNumber: 11
        }, this),
        onClick: ()=>router.push('/quality-correlations')
    });
    return actions;
}
// ============================================================================
// REQUIREMENT ACTIONS
// ============================================================================
function getRequirementActions(reqId, data, router, tr, _onStatusChange, onFileUpload, openCreateModal) {
    const actions = [];
    // View Account
    const accountId = data?.Account__c;
    if (accountId) {
        actions.push({
            id: 'view-account',
            label: tr('quickWheel.actions.account'),
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconAccount$2f$IconAccount$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconAccount"], {}, void 0, false, {
                fileName: "[project]/apps/web/src/app/config/quickWheelActionRegistry.tsx",
                lineNumber: 1152,
                columnNumber: 13
            }, this),
            actionType: 'navigate',
            onClick: ()=>router.push(`/account/${accountId}`)
        });
    }
    // Create Material Proposal (#158)
    if (openCreateModal) {
        actions.push({
            id: 'create-proposal',
            label: tr('quickWheel.actions.proposal'),
            icon: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityIconMap$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getIconForEntityType"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].MaterialProposal),
            actionType: 'create',
            entityType: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].MaterialProposal,
            onClick: ()=>openCreateModal({
                    entityType: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].MaterialProposal,
                    // #2074: Abnehmer__c/Bedarfe__c/Polymer__c/… gibt es am MP nicht —
                    // Vorbelegung wie „Material Proposal anlegen" im Anlegen-Menü
                    // (F_r_Bedarf__c ← Id, Account__c, Projekt, Kundenvorgang, Menge, Zielpreis).
                    initialValues: {
                        ...prefill({
                            F_r_Bedarf__c: reqId
                        }),
                        ...prefillFromRegistry('Bedarfe__c', 'material-proposal', data)
                    }
                })
        });
    }
    // Upload specification documents
    if (onFileUpload) {
        actions.push({
            id: 'upload-file',
            label: tr('quickWheel.actions.upload'),
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconAttachment$2f$IconAttachment$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconAttachment"], {}, void 0, false, {
                fileName: "[project]/apps/web/src/app/config/quickWheelActionRegistry.tsx",
                lineNumber: 1185,
                columnNumber: 13
            }, this),
            onClick: onFileUpload
        });
    }
    // No status quick-action: Bedarfe__c has no Status__c field and Bedarfsstatus__c
    // has no "fulfilled" value, so the old fulfill-requirement action wrote a
    // non-existent field and always failed (400). Status is edited inline instead.
    // Find matching materials
    actions.push({
        id: 'find-materials',
        label: tr('quickWheel.actions.materials'),
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconSearch$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/apps/web/src/app/config/quickWheelActionRegistry.tsx",
            lineNumber: 1198,
            columnNumber: 11
        }, this),
        actionType: 'navigate',
        onClick: ()=>router.push(`/monitored-materials?requirementId=${reqId}`)
    });
    return actions;
}
// ============================================================================
// SAMPLE SENDING ACTIONS
// ============================================================================
function getSampleSendingActions(sampleId, data, router, tr, onStatusChange, openCreateModal, onFileUpload) {
    const actions = [];
    // View Account
    const accountId = data?.Account__c;
    if (accountId) {
        actions.push({
            id: 'view-account',
            label: tr('quickWheel.actions.account'),
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconAccount$2f$IconAccount$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconAccount"], {}, void 0, false, {
                fileName: "[project]/apps/web/src/app/config/quickWheelActionRegistry.tsx",
                lineNumber: 1226,
                columnNumber: 13
            }, this),
            actionType: 'navigate',
            onClick: ()=>router.push(`/account/${accountId}`)
        });
    }
    // View Contact
    const contactId = data?.Contact__c;
    if (contactId) {
        actions.push({
            id: 'view-contact',
            label: tr('quickWheel.actions.contact'),
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconContact$2f$IconContact$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconContact"], {}, void 0, false, {
                fileName: "[project]/apps/web/src/app/config/quickWheelActionRegistry.tsx",
                lineNumber: 1238,
                columnNumber: 13
            }, this),
            actionType: 'navigate',
            onClick: ()=>router.push(`/contact/${contactId}`)
        });
    }
    // Upload shipping docs, packing lists
    if (onFileUpload) {
        actions.push({
            id: 'upload-file',
            label: tr('quickWheel.actions.upload'),
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconAttachment$2f$IconAttachment$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconAttachment"], {}, void 0, false, {
                fileName: "[project]/apps/web/src/app/config/quickWheelActionRegistry.tsx",
                lineNumber: 1249,
                columnNumber: 13
            }, this),
            onClick: onFileUpload
        });
    }
    // Status - Mark as Delivered
    const currentStatus = data?.Status__c;
    if (onStatusChange && currentStatus !== 'Delivered') {
        actions.push({
            id: 'mark-delivered',
            label: tr('quickWheel.actions.delivered'),
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconCheck$2f$IconCheck$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconCheck"], {}, void 0, false, {
                fileName: "[project]/apps/web/src/app/config/quickWheelActionRegistry.tsx",
                lineNumber: 1260,
                columnNumber: 13
            }, this),
            onClick: ()=>onStatusChange('Received')
        });
    }
    // Request Feedback
    if (openCreateModal) {
        actions.push({
            id: 'request-feedback',
            label: tr('quickWheel.actions.feedback'),
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconSampleFeedback$2f$IconSampleFeedback$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconSampleFeedback"], {}, void 0, false, {
                fileName: "[project]/apps/web/src/app/config/quickWheelActionRegistry.tsx",
                lineNumber: 1270,
                columnNumber: 13
            }, this),
            actionType: 'create',
            entityType: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].SampleFeedback,
            onClick: ()=>openCreateModal({
                    entityType: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].SampleFeedback,
                    initialValues: prefill({
                        Sample_Sending__c: sampleId
                    })
                })
        });
    }
    return actions;
}
// ============================================================================
// SAMPLE FEEDBACK ACTIONS
// ============================================================================
function getSampleFeedbackActions(_feedbackId, data, router, tr, onStatusChange) {
    const actions = [];
    // View Sample Sending
    const sampleId = data?.Sample_Sending__c;
    if (sampleId) {
        actions.push({
            id: 'view-sample',
            label: tr('quickWheel.actions.sample'),
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconSampleSending$2f$IconSampleSending$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconSampleSending"], {}, void 0, false, {
                fileName: "[project]/apps/web/src/app/config/quickWheelActionRegistry.tsx",
                lineNumber: 1304,
                columnNumber: 13
            }, this),
            onClick: ()=>router.push(`/sample-sending/${sampleId}`)
        });
    }
    // Status actions
    const currentStatus = data?.Status__c;
    if (onStatusChange) {
        if (currentStatus !== 'Submitted') {
            actions.push({
                id: 'submit-feedback',
                label: tr('quickWheel.actions.submit'),
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconCheck$2f$IconCheck$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconCheck"], {}, void 0, false, {
                    fileName: "[project]/apps/web/src/app/config/quickWheelActionRegistry.tsx",
                    lineNumber: 1316,
                    columnNumber: 15
                }, this),
                onClick: ()=>onStatusChange('Sent')
            });
        }
    }
    return actions;
}
// ============================================================================
// ONBOARDING ACTIONS
// ============================================================================
function getOnboardingActions(_onboardingId, data, router, tr) {
    const actions = [];
    // View Case
    const caseId = data?.Case__c;
    if (caseId) {
        actions.push({
            id: 'view-case',
            label: tr('quickWheel.actions.case'),
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityIconMap$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavigationIcons"].Cases,
            onClick: ()=>router.push(`/case/${caseId}`)
        });
    }
    // View Account
    const accountId = data?.Account__c;
    if (accountId) {
        actions.push({
            id: 'view-account',
            label: tr('quickWheel.actions.account'),
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconAccount$2f$IconAccount$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconAccount"], {}, void 0, false, {
                fileName: "[project]/apps/web/src/app/config/quickWheelActionRegistry.tsx",
                lineNumber: 1353,
                columnNumber: 13
            }, this),
            onClick: ()=>router.push(`/account/${accountId}`)
        });
    }
    // Keine Statusaktion (#341): Onboarding__c hat kein Statusfeld — weder
    // `Stage__c` (hier gelesen) noch `Status__c` (in OnboardingContent
    // geschrieben) existiert auf dem Objekt. Die Aktionen "abschliessen"/
    // "pausieren" erschienen deshalb immer und scheiterten immer mit 400. Ein
    // Ersatzfeld wird nicht geraten: `Onboarding_durchgef_hrt__c` (Checkbox) und
    // `Onboarding_Ergebnis__c` (Ergebnis-Picklist) sind keine Statusfelder, ihre
    // Belegung ist eine fachliche Entscheidung (offener Teil von #341 AC-1).
    return actions;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);})()

//# sourceMappingURL=apps_web_src_app_config_1aiyk-8bhn3oi._.js.map