(()=>{"use strict";(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/apps/web/src/app/assets/theme/colors.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Plastship Color Palette
 *
 * This file contains the color palette used across the Plastship application.
 * Use these color constants instead of hardcoding hex values to ensure consistency.
 */ /**
 * Main color palette for the Plastship application
 */ __turbopack_context__.s([
    "CHART_DARK_COLOR_MAP",
    ()=>CHART_DARK_COLOR_MAP,
    "ChartColors",
    ()=>ChartColors,
    "PlastshipChartSchemes",
    ()=>PlastshipChartSchemes,
    "PlastshipColors",
    ()=>PlastshipColors,
    "chartColorForMode",
    ()=>chartColorForMode,
    "getAlphaColor",
    ()=>getAlphaColor,
    "getColor",
    ()=>getColor
]);
const PlastshipColors = {
    // Primary colors
    PRIMARY: '#00416E',
    SECONDARY: '#37BA24',
    // Neutral colors
    WHITE: '#FFFFFF',
    BLACK: '#000000',
    GREY_LIGHT: '#F8F8F8',
    GREY: '#D8D8D8',
    GREY_DARK: '#687074',
    // Status colors
    ERROR: '#DC0000',
    SUCCESS: '#37BA24',
    INFO: '#00416E',
    WARNING: '#FFCD00',
    // Button colors
    BUTTON_PRIMARY_BG: '#292929',
    BUTTON_PRIMARY_TEXT: '#FFFFFF',
    BUTTON_SECONDARY_BG: '#EFCD00',
    BUTTON_SECONDARY_TEXT: '#292929',
    BUTTON_TERTIARY_BORDER: '#292929',
    BUTTON_DANGER_BG: '#E22F2F',
    // Background colors
    HEADER_BG: '#F1FCFF',
    FOOTER_BG: '#1F2937',
    // Link colors
    LINK_PRIMARY: '#8A2163',
    // Additional UI colors (matched with CATEGORY_COLORS in routes.tsx)
    TEAL: '#5DE8D2',
    ORANGE: '#FF8A75',
    CORAL: '#FFBA4D',
    PURPLE: '#B97AFF',
    // Traffic light colors (field completeness)
    TRAFFIC_GREEN: '#22C55E',
    TRAFFIC_YELLOW: '#EAB308',
    TRAFFIC_RED: '#EF4444',
    TRAFFIC_GREY: '#D1D5DB',
    // #1889: Kategorie „auctions" der Seitenleiste (matched with CATEGORY_COLORS
    // in routes.tsx) — derselbe Wert wie TRAFFIC_RED, eine Quelle
    AUCTION: '#EF4444',
    // Brand colors
    MICROSOFT: '#4DA3FF'
};
const ChartColors = {
    COLOR_1: '#e8c1a0',
    COLOR_2: '#f47560',
    COLOR_3: '#f1e15b',
    COLOR_4: '#e8a838',
    COLOR_5: '#61cdbb',
    COLOR_6: '#97e3d5',
    COLOR_7: '#b5cf6b',
    COLOR_8: '#d6e685',
    COLOR_9: '#a6d854',
    COLOR_10: '#8dd1e1'
};
const PlastshipChartSchemes = {
    // Custom color scheme based on Plastship brand colors
    plastship: [
        PlastshipColors.PRIMARY,
        PlastshipColors.SECONDARY,
        PlastshipColors.WARNING,
        PlastshipColors.LINK_PRIMARY,
        PlastshipColors.BUTTON_PRIMARY_BG,
        PlastshipColors.BUTTON_SECONDARY_BG,
        PlastshipColors.GREY_DARK,
        PlastshipColors.INFO,
        PlastshipColors.SUCCESS,
        PlastshipColors.ERROR
    ],
    // #1313: kategoriale Reihen — acht Farbtoene in fester Reihenfolge, benachbarte
    // Reihen auch bei Rot-Gruen-Schwaeche unterscheidbar. Das Schema `plastship`
    // eignet sich dafuer nicht: von seinen zehn Eintraegen sind nur sieben
    // verschieden (PRIMARY = INFO, SECONDARY = SUCCESS, WARNING ≈ BUTTON_SECONDARY_BG),
    // ab der achten Reihe tragen zwei Reihen dieselbe Farbe. Reihenfolge nicht
    // umstellen — sie ist Teil der Unterscheidbarkeit.
    categorical: [
        '#2a78d6',
        '#eb6834',
        '#1baf7a',
        '#eda100',
        '#e87ba4',
        '#008300',
        '#4a3aa7',
        '#e34948'
    ],
    // Status color scheme
    status: [
        PlastshipColors.SUCCESS,
        PlastshipColors.INFO,
        PlastshipColors.WARNING,
        PlastshipColors.ERROR
    ],
    // Nivo default color scheme
    nivo: [
        ChartColors.COLOR_1,
        ChartColors.COLOR_2,
        ChartColors.COLOR_3,
        ChartColors.COLOR_4,
        ChartColors.COLOR_5,
        ChartColors.COLOR_6,
        ChartColors.COLOR_7,
        ChartColors.COLOR_8,
        ChartColors.COLOR_9,
        ChartColors.COLOR_10
    ]
};
const getColor = (color)=>{
    return PlastshipColors[color];
};
const getAlphaColor = (color, alpha)=>{
    // Convert hex to rgba
    const hex = color.replace('#', '');
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};
const CHART_DARK_COLOR_MAP = {
    '#00416e': '#60A0E8',
    '#292929': '#BDC3C7',
    '#000000': '#E5E7EB',
    '#687074': '#9CA3AF',
    '#889396': '#9CA3AF',
    '#8a2163': '#D38AB1',
    '#4a3aa7': '#8F84E8',
    '#008300': '#3FBF3F' // categorical[5]
};
const chartColorForMode = (color, dark)=>dark ? CHART_DARK_COLOR_MAP[color.toLowerCase()] ?? color : color;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/assets/theme/mixins.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "userSelectNone",
    ()=>userSelectNone,
    "visuallyHidden",
    ()=>visuallyHidden
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
;
const userSelectNone = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;
const visuallyHidden = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  white-space: nowrap;
  border: 0;
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
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
"[project]/apps/web/src/app/config/entityNavigation.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ENTITY_NAVIGATION_CONFIGS",
    ()=>ENTITY_NAVIGATION_CONFIGS,
    "useEntityAnalyticsSidebarButtons",
    ()=>useEntityAnalyticsSidebarButtons,
    "useEntityListSidebarButtons",
    ()=>useEntityListSidebarButtons
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$ModalContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/context/ModalContext.tsx [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/config/entityTypes.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/ClientTranslation.tsx [app-client] (ecmascript) <export useClientSafeTranslation as useClientTranslation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$iconButtonColors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/config/iconButtonColors.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityFormRegistry$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/config/entityFormRegistry.tsx [app-client] (ecmascript)");
// Icon imports
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconList$2f$IconList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconList/IconList.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconAnalytics$2f$IconAnalytics$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconAnalytics/IconAnalytics.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconPlus$2f$IconPlus$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconPlus/IconPlus.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconTable$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconTable/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconKanban$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconKanban/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconInfo$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconInfo/index.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
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
const ENTITY_NAVIGATION_CONFIGS = {
    Account: {
        entityType: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Account,
        listPath: '/accounts',
        analyticsPath: '/accounts/analytics',
        hasCreate: true,
        hasPdfDownload: false,
        translationPrefix: 'accounts'
    },
    Contact: {
        entityType: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Contact,
        listPath: '/contacts',
        analyticsPath: '/contacts/analytics',
        hasCreate: true,
        hasPdfDownload: false,
        translationPrefix: 'contacts'
    },
    Opportunity: {
        entityType: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Opportunity,
        listPath: '/opportunities',
        analyticsPath: '/opportunities/analytics',
        hasCreate: true,
        hasPdfDownload: false,
        translationPrefix: 'opportunities',
        hasKanban: true
    },
    Case: {
        entityType: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Case,
        listPath: '/cases',
        analyticsPath: '/cases/analytics',
        hasCreate: true,
        hasPdfDownload: false,
        translationPrefix: 'cases',
        hasKanban: true
    },
    Task: {
        entityType: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Task,
        listPath: '/tasks',
        analyticsPath: '/tasks/analytics',
        hasCreate: true,
        hasPdfDownload: false,
        translationPrefix: 'tasks',
        hasKanban: true
    },
    Order: {
        entityType: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Order,
        listPath: '/orders',
        analyticsPath: '/orders/analytics',
        hasCreate: true,
        hasPdfDownload: true,
        translationPrefix: 'orders',
        hasKanban: true
    },
    OrderItem: {
        entityType: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].OrderItem,
        listPath: '/orderitems',
        analyticsPath: '/orderitems/analytics',
        hasCreate: true,
        hasPdfDownload: false,
        translationPrefix: 'orderitems'
    },
    Project: {
        entityType: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Project,
        listPath: '/projects',
        analyticsPath: '/projects/analytics',
        hasCreate: true,
        hasPdfDownload: true,
        translationPrefix: 'projects',
        hasKanban: true
    },
    Invoice: {
        entityType: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Invoice,
        listPath: '/invoices',
        analyticsPath: '/invoices/analytics',
        hasCreate: true,
        hasPdfDownload: true,
        translationPrefix: 'invoices',
        hasKanban: true
    },
    MaterialAnalysis: {
        entityType: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].MaterialAnalysis,
        listPath: '/material-analyses',
        analyticsPath: '/material-analyses/analytics',
        hasCreate: true,
        hasPdfDownload: true,
        translationPrefix: 'materialAnalyses',
        hasKanban: true
    },
    MaterialProposal: {
        entityType: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].MaterialProposal,
        listPath: '/material-proposals',
        analyticsPath: '/material-proposals/analytics',
        hasCreate: true,
        hasPdfDownload: false,
        translationPrefix: 'materialProposals',
        hasKanban: true,
        defaultView: 'kanban'
    },
    MonitoredMaterial: {
        entityType: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].MonitoredMaterial,
        listPath: '/monitored-materials',
        analyticsPath: '/monitored-materials/analytics',
        hasCreate: true,
        hasPdfDownload: false,
        translationPrefix: 'monitoredMaterials'
    },
    Requirement: {
        entityType: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Requirement,
        listPath: '/requirements',
        analyticsPath: '/requirements/analytics',
        hasCreate: true,
        hasPdfDownload: false,
        translationPrefix: 'requirements'
    },
    SampleFeedback: {
        entityType: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].SampleFeedback,
        listPath: '/sample-feedbacks',
        analyticsPath: '/sample-feedbacks/analytics',
        hasCreate: true,
        hasPdfDownload: false,
        translationPrefix: 'sampleFeedbacks',
        hasKanban: true
    },
    // #1753: admin-only Liste; Anlage wie im QuickWheel über das Create-Modal
    Prozessfeedback: {
        entityType: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Prozessfeedback,
        listPath: '/process-feedbacks',
        hasCreate: true,
        hasPdfDownload: false,
        translationPrefix: 'prozessfeedbacks'
    },
    // #1762: admin-only Liste ohne Anlage (Detailseite bleibt für die Objektrechte)
    CostCenter: {
        entityType: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].CostCenter,
        listPath: '/cost-centers',
        hasCreate: false,
        hasPdfDownload: false,
        translationPrefix: 'costCenters'
    },
    // #1761: admin-only Liste ohne Anlage (Detailseite bleibt für die Objektrechte)
    Lohn: {
        entityType: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Lohn,
        listPath: '/toll-services',
        hasCreate: false,
        hasPdfDownload: false,
        translationPrefix: 'tollServices'
    },
    // #1760: admin-only Liste ohne Anlage (Detailseite bleibt für die Objektrechte)
    AuditProperty: {
        entityType: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].AuditProperty,
        listPath: '/audit-properties',
        hasCreate: false,
        hasPdfDownload: false,
        translationPrefix: 'auditProperties'
    },
    // #1759: admin-only Liste ohne Anlage (Detailseite bleibt für die Objektrechte)
    Certificate: {
        entityType: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Certificate,
        listPath: '/certificates',
        hasCreate: false,
        hasPdfDownload: false,
        translationPrefix: 'certificates'
    },
    SampleSending: {
        entityType: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].SampleSending,
        listPath: '/sample-sendings',
        analyticsPath: '/sample-sendings/analytics',
        hasCreate: true,
        hasPdfDownload: false,
        translationPrefix: 'sampleSendings',
        hasKanban: true
    },
    SupplierAudit: {
        entityType: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].SupplierAudit,
        listPath: '/supplier-audits',
        hasCreate: true,
        hasPdfDownload: true,
        translationPrefix: 'supplierAudits'
    },
    Onboarding: {
        entityType: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Onboarding,
        listPath: '/onboardings',
        analyticsPath: '/onboardings/analytics',
        hasCreate: true,
        hasPdfDownload: false,
        translationPrefix: 'onboardings',
        hasKanban: true
    },
    ContactHandover: {
        entityType: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].ContactHandover,
        listPath: '/contact-handovers',
        analyticsPath: '/contact-handovers/analytics',
        hasCreate: true,
        hasPdfDownload: false,
        translationPrefix: 'contactHandovers',
        hasKanban: true
    },
    CompanyCertificate: {
        entityType: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].CompanyCertificate,
        listPath: '/company-certificates',
        hasCreate: true,
        hasPdfDownload: false,
        translationPrefix: 'companyCertificates'
    },
    // #449: Verträge — Anlage weiterhin in Salesforce, Fokus Auftrags-Management
    Contract: {
        entityType: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Contract,
        listPath: '/contracts',
        hasCreate: true,
        hasPdfDownload: false,
        translationPrefix: 'contracts'
    },
    ProductionSite: {
        entityType: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].ProductionSite,
        listPath: '/production-sites',
        hasCreate: true,
        hasPdfDownload: false,
        translationPrefix: 'productionSites',
        hasKanban: true
    },
    Product: {
        entityType: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Product,
        listPath: '/products',
        analyticsPath: '/products/analytics',
        hasCreate: true,
        hasPdfDownload: false,
        translationPrefix: 'products'
    },
    RecyclateGrade: {
        entityType: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Account,
        listPath: '/recyclate-grades',
        hasCreate: false,
        hasPdfDownload: false,
        translationPrefix: 'recyclateGrades'
    },
    RecyclateCompatibility: {
        entityType: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Account,
        listPath: '/recyclate-compatibilities',
        hasCreate: false,
        hasPdfDownload: false,
        translationPrefix: 'recyclateCompatibilities'
    },
    User: {
        entityType: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].User,
        listPath: '/users',
        analyticsPath: '/users/analytics',
        hasCreate: true,
        hasPdfDownload: false,
        translationPrefix: 'users'
    },
    // Postgres entities
    Notification: {
        entityType: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Notification,
        listPath: '/notification-management',
        hasCreate: true,
        hasPdfDownload: false,
        translationPrefix: 'notificationMgmt'
    }
};
function useEntityListSidebarButtons(entityType, options = {}) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { openCreateModal } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$ModalContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useModal"])();
    const { tr } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"])();
    const config = ENTITY_NAVIGATION_CONFIGS[entityType];
    if (!config) {
        console.warn(`No navigation config found for entity type: ${entityType}`);
        return [];
    }
    // Objektspezifischer Schlüssel zuerst, sonst der gemeinsame `common.*` —
    // die meisten Objekte haben keine eigenen Texte für diese Knöpfe.
    const navText = (suffix, defaultValue)=>tr(`${config.translationPrefix}.${suffix}`, {
            defaultValue: tr(`common.${suffix}`, {
                defaultValue
            })
        });
    const { viewMode, onViewModeChange, processInfoContent, showCreate = config.hasCreate, showAnalytics = !!config.analyticsPath, showProcessInfo = true, showTableKanban = !!config.hasKanban } = options;
    const buttons = [];
    // Table toggle button
    if (showTableKanban && onViewModeChange) {
        buttons.push({
            label: navText('view.table', 'Table'),
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconTable$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/apps/web/src/app/config/entityNavigation.tsx",
                lineNumber: 406,
                columnNumber: 13
            }, this),
            onClick: ()=>onViewModeChange('table'),
            color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$iconButtonColors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StandardIconColors"].INFO,
            tooltip: navText('view.table.tooltip', 'Table view'),
            isActive: viewMode === 'table'
        });
        // Kanban toggle button
        buttons.push({
            label: navText('view.kanban', 'Kanban'),
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconKanban$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/apps/web/src/app/config/entityNavigation.tsx",
                lineNumber: 416,
                columnNumber: 13
            }, this),
            onClick: ()=>onViewModeChange('kanban'),
            color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$iconButtonColors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StandardIconColors"].INFO,
            tooltip: navText('view.kanban.tooltip', 'Kanban view'),
            isActive: viewMode === 'kanban'
        });
    }
    // Analytics button
    if (showAnalytics && config.analyticsPath) {
        buttons.push({
            label: navText('analytics.label', 'Analytics'),
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconAnalytics$2f$IconAnalytics$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconAnalytics"], {}, void 0, false, {
                fileName: "[project]/apps/web/src/app/config/entityNavigation.tsx",
                lineNumber: 428,
                columnNumber: 13
            }, this),
            color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$iconButtonColors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StandardIconColors"].ANALYTICS,
            tooltip: navText('analytics.tooltip', 'View analytics'),
            onClick: ()=>router.push(config.analyticsPath),
            path: config.analyticsPath
        });
    }
    // Process info button
    if (showProcessInfo) {
        buttons.push({
            label: navText('processInfo.label', 'Process Info'),
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconInfo$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/apps/web/src/app/config/entityNavigation.tsx",
                lineNumber: 440,
                columnNumber: 13
            }, this),
            content: processInfoContent,
            color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$iconButtonColors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StandardIconColors"].INFO
        });
    }
    // Create button — #2071: nur mit generischem Anlege-Weg oder eigenem createPath.
    // Objekte mit eigenem Dialog (createVia 'dialog', z. B. User) setzen ihren
    // Knopf selbst (UsersContent → UserCreateDialog).
    if (showCreate && config.hasCreate && (config.createPath || (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityFormRegistry$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["allowsGenericCreate"])(config.entityType))) {
        if (config.createPath) {
            // Navigate to create page (e.g., Users)
            buttons.push({
                label: navText('create.label', 'Create'),
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconPlus$2f$IconPlus$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconPlus"], {}, void 0, false, {
                    fileName: "[project]/apps/web/src/app/config/entityNavigation.tsx",
                    lineNumber: 458,
                    columnNumber: 15
                }, this),
                color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$iconButtonColors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StandardIconColors"].PLUS,
                tooltip: navText('create.tooltip', 'Create new'),
                onClick: ()=>router.push(config.createPath),
                path: config.createPath
            });
        } else {
            // Open create modal (standard behavior)
            buttons.push({
                label: navText('create.label', 'Create'),
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconPlus$2f$IconPlus$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconPlus"], {}, void 0, false, {
                    fileName: "[project]/apps/web/src/app/config/entityNavigation.tsx",
                    lineNumber: 468,
                    columnNumber: 15
                }, this),
                color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$iconButtonColors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StandardIconColors"].PLUS,
                tooltip: navText('create.tooltip', 'Create new'),
                onClick: ()=>openCreateModal({
                        entityType: config.entityType
                    }),
                modalEntityType: config.entityType
            });
        }
    }
    return buttons;
}
_s(useEntityListSidebarButtons, "lvABjb1deXSi4VJHZ+ZUBpokuZw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$ModalContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useModal"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"]
    ];
});
function useEntityAnalyticsSidebarButtons(entityType) {
    _s1();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { tr } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"])();
    const config = ENTITY_NAVIGATION_CONFIGS[entityType];
    if (!config) {
        console.warn(`No navigation config found for entity type: ${entityType}`);
        return [];
    }
    // Objektspezifischer Schlüssel zuerst, sonst der gemeinsame `common.*` —
    // die meisten Objekte haben keine eigenen Texte für diese Knöpfe.
    const navText = (suffix, defaultValue)=>tr(`${config.translationPrefix}.${suffix}`, {
            defaultValue: tr(`common.${suffix}`, {
                defaultValue
            })
        });
    return [
        {
            label: navText('backToList.label', 'Back to list'),
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconList$2f$IconList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconList"], {}, void 0, false, {
                fileName: "[project]/apps/web/src/app/config/entityNavigation.tsx",
                lineNumber: 514,
                columnNumber: 13
            }, this),
            color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$iconButtonColors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StandardIconColors"].LIST,
            tooltip: navText('backToList.tooltip', 'Return to list'),
            onClick: ()=>router.push(config.listPath)
        }
    ];
}
_s1(useEntityAnalyticsSidebarButtons, "ZYAidAl7U5zOC1J3ZbZj5mV1w38=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"]
    ];
});
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
"[project]/apps/web/src/app/config/iconButtonColors.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StandardIconColors",
    ()=>StandardIconColors,
    "getStandardIconColor",
    ()=>getStandardIconColor
]);
/**
 * Standardized Icon Button Colors
 *
 * This file defines the consistent color scheme for icon buttons across the application.
 * Each icon type is mapped to a specific color to ensure visual consistency.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$IconButton$2f$IconButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/IconButton/IconButton.tsx [app-client] (ecmascript)");
;
const StandardIconColors = {
    // Navigation icons
    LIST: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$IconButton$2f$IconButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconButtonColors"].linkPrimary,
    ANALYTICS: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$IconButton$2f$IconButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconButtonColors"].warning,
    CHART_BAR: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$IconButton$2f$IconButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconButtonColors"].primary,
    // Action icons
    PLUS: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$IconButton$2f$IconButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconButtonColors"].orange,
    REFRESH: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$IconButton$2f$IconButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconButtonColors"].secondary,
    DOWNLOAD: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$IconButton$2f$IconButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconButtonColors"].secondary,
    // Information icons
    INFO: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$IconButton$2f$IconButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconButtonColors"].teal,
    GAUGE: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$IconButton$2f$IconButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconButtonColors"].success,
    SUCCESS: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$IconButton$2f$IconButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconButtonColors"].success,
    // Specialized icons
    PODIUM: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$IconButton$2f$IconButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconButtonColors"].warning,
    CORRELATION: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$IconButton$2f$IconButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconButtonColors"].coral,
    EDIT: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$IconButton$2f$IconButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconButtonColors"].warning,
    DELETE: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$IconButton$2f$IconButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconButtonColors"].error,
    SAVE: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$IconButton$2f$IconButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconButtonColors"].secondary,
    CANCEL: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$IconButton$2f$IconButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconButtonColors"].primary // Blue - Cancel actions
};
const getStandardIconColor = (iconType)=>{
    return StandardIconColors[iconType];
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/config/lookupFields.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Salesforce Lookup Fields Registry
 *
 * Maps lookup field API names to their target object types.
 * Used to determine which object type to query for InputAutocompleteLookup components.
 *
 * Reference: sf_prefixes.txt
 */ __turbopack_context__.s([
    "CUSTOM_LOOKUP_FIELDS",
    ()=>CUSTOM_LOOKUP_FIELDS,
    "ENTITY_LOOKUP_OVERRIDES",
    ()=>ENTITY_LOOKUP_OVERRIDES,
    "ENTITY_TYPE_TO_SF_OBJECT",
    ()=>ENTITY_TYPE_TO_SF_OBJECT,
    "SF_OBJECT_TO_ENTITY_TYPE",
    ()=>SF_OBJECT_TO_ENTITY_TYPE,
    "STANDARD_LOOKUP_FIELDS",
    ()=>STANDARD_LOOKUP_FIELDS,
    "getLookupDisplayField",
    ()=>getLookupDisplayField,
    "getLookupObjectType",
    ()=>getLookupObjectType,
    "getLookupSearchFields",
    ()=>getLookupSearchFields,
    "isLookupField",
    ()=>isLookupField
]);
const STANDARD_LOOKUP_FIELDS = {
    // User lookups
    OwnerId: 'User',
    CreatedById: 'User',
    LastModifiedById: 'User',
    AssignedToId: 'User',
    ManagerId: 'User',
    // Standard object lookups
    AccountId: 'Account',
    ContactId: 'Contact',
    OpportunityId: 'Opportunity',
    CaseId: 'Case',
    OrderId: 'Order',
    ProductId: 'Product2',
    Product2Id: 'Product2',
    ContractId: 'Contract',
    LeadId: 'Lead',
    CampaignId: 'Campaign',
    // Relationship lookups
    ParentId: 'Account',
    ReportsToId: 'Contact',
    // Polymorphic lookups (return null, need special handling)
    WhatId: null,
    WhoId: null
};
const CUSTOM_LOOKUP_FIELDS = {
    // Account references
    Account__c: 'Account',
    Abnehmer__c: 'Account',
    Supplier__c: 'Account',
    Lieferant__c: 'Account',
    // Contact references
    Hauptansprechpartner__c: 'Contact',
    Contact__c: 'Contact',
    Ansprechpartner__c: 'Contact',
    // Product references
    Product__c: 'Product2',
    Produkt__c: 'Product2',
    // Order references
    Auftrag__c: 'Order',
    Order__c: 'Order',
    // Custom object references
    Sample_Sending__c: 'Sample_Sending__c',
    Projekt__c: 'Projekt__c',
    Materialanalyse__c: 'Materialanalyse__c',
    Monitored_Material__c: 'Monitored_Material__c',
    Supplier_audit__c: 'Supplier_audit__c',
    Produktionsstandort__c: 'Produktionsstandort__c',
    Unternehmenszertifikat__c: 'Unternehmenszertifikat__c',
    Onboarding__c: 'Onboarding__c',
    Kontakt_bergaben__c: 'Kontakt_bergaben__c',
    Bedarfe__c: 'Bedarfe__c',
    Abrechnung__c: 'Abrechnung__c'
};
const ENTITY_LOOKUP_OVERRIDES = {
    Contact: {
        AccountId: 'Account',
        ReportsToId: 'Contact'
    },
    Case: {
        AccountId: 'Account',
        ContactId: 'Contact',
        ParentId: 'Case' // Parent case
    },
    Task: {
        WhatId: null,
        WhoId: null // Polymorphic - Contact, Lead
    },
    OrderItem: {
        OrderId: 'Order',
        Product2Id: 'Product2',
        PricebookEntryId: 'PricebookEntry'
    }
};
const ENTITY_TYPE_TO_SF_OBJECT = {
    // #907: Contract ist Create-Ziel (Liste + Anlegen-aus) — ohne Mapping fände
    // GenericEntityForm/createFromRegistry die Feld-Config nicht.
    Contract: 'Contract',
    Account: 'Account',
    Contact: 'Contact',
    Opportunity: 'Opportunity',
    Case: 'Case',
    Task: 'Task',
    Order: 'Order',
    OrderItem: 'OrderItem',
    Project: 'Projekt__c',
    // CostCenter stand in ENTITY_CREATE_API_MAP, aber ohne dieses Mapping loeste
    // das Anlege-/Bearbeiten-Formular auf 'CostCenter' auf — die fieldconfig heisst
    // aber 'Kostenstelle_plastship__c', also erschien "Keine Formkonfiguration".
    // Fehlerklasse #359 (Lohn). Vor dem ersten UI-Einstieg geschlossen.
    CostCenter: 'Kostenstelle_plastship__c',
    Invoice: 'Abrechnung__c',
    MaterialAnalysis: 'Materialanalyse__c',
    // #415: war fälschlich 'Bedarfe__c' — dadurch renderte das MP-Create-/Edit-
    // Formular die Bedarfe-Sections, obwohl die API Material_Proposal__c schreibt.
    // Einziger Verwender ist GenericEntityForm.getFlexiPageSections.
    MaterialProposal: 'Material_Proposal__c',
    MonitoredMaterial: 'Monitored_Material__c',
    Requirement: 'Bedarfe__c',
    SampleFeedback: 'Sample_Feedback__c',
    SampleSending: 'Sample_Sending__c',
    // #369: Casing-Fix — Config-Registry/RBAC verwenden 'Supplier_Audit__c'
    // (großes A); mit dem kleingeschriebenen Wert fand GenericEntityForm keine
    // Formkonfiguration (JS-Lookup ist case-sensitiv, gleiche Klasse wie Lohn).
    SupplierAudit: 'Supplier_Audit__c',
    Onboarding: 'Onboarding__c',
    ContactHandover: 'Kontakt_bergaben__c',
    CompanyCertificate: 'Unternehmenszertifikat__c',
    // #333: Zertifikats-Katalog
    Certificate: 'Zertifikate__c',
    // #331: Prüfparameter
    AuditProperty: 'AuditProperty__c',
    ProductionSite: 'Produktionsstandort__c',
    Product: 'Product2',
    // #359-Follow-up: fehlte — dadurch fand GenericEntityForm für den Lohn-
    // Create/Edit-Modal (RIGK-Modul) weder FlexiPage- noch Form-Config
    // („Keine Formkonfiguration für Lohn gefunden") — für alle Rollen.
    Lohn: 'Lohn__c',
    Reklamation: 'Reklamation__c',
    // #469: fehlte ganz — damit war der Typ aus keiner Richtung aufloesbar.
    AktuellerPreisUndVerfugbarkeit: 'Aktueller_Preis_und_Verf_gbarkeit__c',
    // #384: Prozessfeedback/CAPA
    Prozessfeedback: 'Prozessfeedback__c',
    // Postgres entities (non-Salesforce)
    Notification: 'Notification',
    User: 'User',
    TravelExpense: 'TravelExpense'
};
const SF_OBJECT_TO_ENTITY_TYPE = {
    Account: 'Account',
    Contact: 'Contact',
    Opportunity: 'Opportunity',
    Case: 'Case',
    Task: 'Task',
    Order: 'Order',
    OrderItem: 'OrderItem',
    // #325/#449: Contract ist App-Objekt
    Contract: 'Contract',
    Projekt__c: 'Project',
    Abrechnung__c: 'Invoice',
    Materialanalyse__c: 'MaterialAnalysis',
    // #469: lieferte 'MaterialProposal' — das ist Material_Proposal__c.
    // Bedarfe__c ist die Rueckrichtung von Requirement.
    Bedarfe__c: 'Requirement',
    // #446: MP-Detail-Views übergeben den SF-API-Namen — Key fehlte bisher.
    Material_Proposal__c: 'MaterialProposal',
    Monitored_Material__c: 'MonitoredMaterial',
    Sample_Feedback__c: 'SampleFeedback',
    Sample_Sending__c: 'SampleSending',
    Supplier_audit__c: 'SupplierAudit',
    // #369: kanonisches Casing zusätzlich (RBAC/Routen nutzen großes A;
    // der generierte SF-Typ heißt Supplier_audit__c — beide Alias-Keys bleiben).
    Supplier_Audit__c: 'SupplierAudit',
    Onboarding__c: 'Onboarding',
    Kontakt_bergaben__c: 'ContactHandover',
    Unternehmenszertifikat__c: 'CompanyCertificate',
    // #333: Zertifikats-Katalog
    Zertifikate__c: 'Certificate',
    // #331: Prüfparameter
    AuditProperty__c: 'AuditProperty',
    Produktionsstandort__c: 'ProductionSite',
    Product2: 'Product',
    Reklamation__c: 'Reklamation',
    // #384: Prozessfeedback/CAPA
    Prozessfeedback__c: 'Prozessfeedback',
    // Registry-Review I-2: seit #1248 in der Präfix-Registry (a0t) bzw. als
    // Kind-Liste befüllt — ohne Eintrag lief der Create-Knopf ins Leere.
    Aktueller_Preis_und_Verf_gbarkeit__c: 'AktuellerPreisUndVerfugbarkeit',
    Lohn__c: 'Lohn',
    User: 'User',
    // Postgres entities (non-Salesforce)
    Notification: 'Notification'
};
function getLookupObjectType(fieldName, entityType) {
    // Check entity-specific overrides first
    if (entityType) {
        const overrides = ENTITY_LOOKUP_OVERRIDES[entityType];
        if (overrides && fieldName in overrides) {
            return overrides[fieldName];
        }
    }
    // Check standard lookups
    if (fieldName in STANDARD_LOOKUP_FIELDS) {
        return STANDARD_LOOKUP_FIELDS[fieldName];
    }
    // Check custom lookups
    if (fieldName in CUSTOM_LOOKUP_FIELDS) {
        return CUSTOM_LOOKUP_FIELDS[fieldName];
    }
    // Check if field ends with Id and might be a lookup
    if (fieldName.endsWith('Id') && !fieldName.endsWith('__c')) {
        // Extract the object name from the field (e.g., AccountId -> Account)
        const objectName = fieldName.slice(0, -2);
        // This is a heuristic - the field might not be a lookup
        return objectName;
    }
    // Check if field ends with __c and might be a lookup to a custom object
    if (fieldName.endsWith('__c')) {
        // Could be a custom lookup, but we can't determine target without metadata
        return null;
    }
    return null;
}
function isLookupField(fieldName, entityType) {
    // Check entity-specific overrides
    if (entityType) {
        const overrides = ENTITY_LOOKUP_OVERRIDES[entityType];
        if (overrides && fieldName in overrides) {
            return true;
        }
    }
    // Check standard and custom lookup registries
    if (fieldName in STANDARD_LOOKUP_FIELDS || fieldName in CUSTOM_LOOKUP_FIELDS) {
        return true;
    }
    // Heuristic: fields ending with Id (except __c custom fields) are often lookups
    if (fieldName.endsWith('Id') && !fieldName.endsWith('__c')) {
        return true;
    }
    return false;
}
function getLookupDisplayField(objectType) {
    const displayFields = {
        Account: 'Name',
        Contact: 'Name',
        User: 'Name',
        Opportunity: 'Name',
        Case: 'CaseNumber',
        Order: 'OrderNumber',
        Product2: 'Name',
        Lead: 'Name',
        Campaign: 'Name',
        Contract: 'Name',
        // Custom objects typically use Name
        default: 'Name'
    };
    return displayFields[objectType] || displayFields.default;
}
function getLookupSearchFields(objectType) {
    const searchFields = {
        Account: [
            'Name',
            'BillingCity',
            'Website'
        ],
        Contact: [
            'Name',
            'Email',
            'Title'
        ],
        User: [
            'Name',
            'Email',
            'Username'
        ],
        Opportunity: [
            'Name',
            'StageName'
        ],
        Case: [
            'CaseNumber',
            'Subject'
        ],
        Order: [
            'OrderNumber'
        ],
        Product2: [
            'Name',
            'ProductCode'
        ],
        Lead: [
            'Name',
            'Email',
            'Company'
        ],
        default: [
            'Name'
        ]
    };
    return searchFields[objectType] || searchFields.default;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/config/teamAvatars.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_AVATAR",
    ()=>DEFAULT_AVATAR,
    "getTeamAvatar",
    ()=>getTeamAvatar,
    "teamAvatarEntries",
    ()=>teamAvatarEntries
]);
/**
 * Team-Porträts (`/public/team/`), zugeordnet per E-Mail.
 *
 * #1249 (M-27): Früher lief die Zuordnung zusätzlich über hartcodierte
 * Produktions-Salesforce-User-Ids (`TEAM_AVATARS`, `EMAIL_TO_USER_ID`). Wer im
 * Team ist und welche Salesforce-Id er hat, steht jetzt in der Nutzertabelle
 * (`lib/team/getTeamMembers.ts`, Client: `useTeam`). Hier bleibt nur, welches
 * Porträt zu welcher E-Mail gehört; ohne Porträt greift `User.image`.
 */ const EMAIL_AVATARS = {
    'bastian@plastship.com': '/team/Andi_hoch.png',
    'conigliaro@plastship.com': '/team/Emilio_hoch.png',
    'cechol@plastship.com': '/team/Louisa_hoch.png',
    'gregor@plastship.com': '/team/Monika_hoch.png',
    'dambeck@plastship.com': '/team/Moritz_hoch.png',
    'limbach@plastship.com': '/team/MoritzLhoch.png',
    // M-27: 'pigot@plastship.com' zeigte hier das Porträt einer anderen Person — entfällt.
    'mirco@plastship.com': '/team/Mirco_hoch.png'
};
const DEFAULT_AVATAR = '';
function getTeamAvatar(arg) {
    const email = arg?.email?.toLowerCase().trim();
    if (!email) return DEFAULT_AVATAR;
    return EMAIL_AVATARS[email] || DEFAULT_AVATAR;
}
function teamAvatarEntries() {
    return Object.entries(EMAIL_AVATARS);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/context/ModalContext.tsx [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ModalProvider",
    ()=>ModalProvider,
    "useModal",
    ()=>useModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/config/entityTypes.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityFormRegistry$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/config/entityFormRegistry.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const ModalContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function ModalProvider({ children }) {
    _s();
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        isOpen: false,
        config: null
    });
    const openCreateModal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ModalProvider.useCallback[openCreateModal]": (config)=>{
            // #2071: Objekte mit eigenem Anlege-Weg (createVia 'dialog'/'none') nie ins
            // generische Formular — deren Routen-Vertrag kennt es nicht. Zentral hier,
            // damit auch künftige Einstiege abgefangen werden.
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityFormRegistry$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["allowsGenericCreate"])(config.entityType)) {
                console.warn(`[ModalContext] generic create refused for ${config.entityType} (createVia != generic)`);
                return;
            }
            setState({
                isOpen: true,
                config: {
                    ...config,
                    mode: 'create'
                }
            });
        }
    }["ModalProvider.useCallback[openCreateModal]"], []);
    const openEditModal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ModalProvider.useCallback[openEditModal]": (config)=>{
            setState({
                isOpen: true,
                config: {
                    ...config,
                    mode: 'edit'
                }
            });
        }
    }["ModalProvider.useCallback[openEditModal]"], []);
    const closeModal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ModalProvider.useCallback[closeModal]": ()=>{
            setState({
                "ModalProvider.useCallback[closeModal]": (prev)=>({
                        ...prev,
                        isOpen: false
                    })
            }["ModalProvider.useCallback[closeModal]"]);
            // Delay clearing config to allow for close animation
            setTimeout({
                "ModalProvider.useCallback[closeModal]": ()=>{
                    setState({
                        isOpen: false,
                        config: null
                    });
                }
            }["ModalProvider.useCallback[closeModal]"], 200);
        }
    }["ModalProvider.useCallback[closeModal]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ModalContext.Provider, {
        value: {
            isOpen: state.isOpen,
            config: state.config,
            openCreateModal,
            openEditModal,
            closeModal
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/context/ModalContext.tsx",
        lineNumber: 94,
        columnNumber: 5
    }, this);
}
_s(ModalProvider, "OQcNrBfknORYW8TlJOmmYkTiLic=");
_c = ModalProvider;
function useModal() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ModalContext);
    if (context === undefined) {
        throw new Error('useModal must be used within a ModalProvider');
    }
    return context;
}
_s1(useModal, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "ModalProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/context/UserContextContext.tsx [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UserContextProvider",
    ()=>UserContextProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useShellBootstrap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/useShellBootstrap.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/ClientTranslation.tsx [app-client] (ecmascript) <export useClientSafeTranslation as useClientTranslation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$userContextValue$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/context/userContextValue.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$userContextSeed$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/context/userContextSeed.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
const UserContextProvider = ({ children, initialUserContext = null })=>{
    _s();
    const { data: session, status } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const bootstrap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useShellBootstrap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useShellBootstrap"])();
    const { tr } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"])();
    const userContext = bootstrap.data?.userContext ?? null;
    // #1887: Server-Startwert nur für die Navigation (startContext), solange er
    // zur Sitzung passt (userContextSeed.ts). `userContext`/`loading` bleiben
    // beim Bootstrap: Seiten, die darauf warten (EntityListPage mountet die
    // Tabelle erst danach, Listen-Einstellungen #1812 lesen dann den
    // Browser-Speicher), rendern weiter nie beim Server-Render oder Hydrieren.
    const seed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$userContextSeed$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["seedGilt"])(initialUserContext, status, session?.user) ? initialUserContext : null;
    const startContext = userContext ?? seed;
    const unauthenticated = status === 'unauthenticated';
    // isLoading (= pending UND fetching), nicht isPending: bei deaktivierter
    // Query (Storybook) bliebe isPending sonst für immer true.
    const loading = status === 'loading' || !unauthenticated && bootstrap.isLoading;
    const error = unauthenticated ? tr('common.userContext.loginRequired', {
        defaultValue: 'Please log in to view this page'
    }) : bootstrap.isError ? tr('common.userContext.loadError', {
        defaultValue: 'Failed to load user permissions'
    }) : null;
    const contextValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "UserContextProvider.useMemo[contextValue]": ()=>({
                userContext,
                startContext,
                loading,
                error
            })
    }["UserContextProvider.useMemo[contextValue]"], [
        userContext,
        startContext,
        loading,
        error
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$userContextValue$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserContextContext"].Provider, {
        value: contextValue,
        children: children
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/context/UserContextContext.tsx",
        lineNumber: 62,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
_s(UserContextProvider, "1vBmoSms/BzfR6Kn9lHNgqaD0r4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useShellBootstrap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useShellBootstrap"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"]
    ];
});
_c = UserContextProvider;
var _c;
__turbopack_context__.k.register(_c, "UserContextProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/context/userContextSeed.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "seedGilt",
    ()=>seedGilt
]);
function seedGilt(seed, status, sessionUser) {
    if (!seed) return false;
    if (status === 'unauthenticated') return false;
    if (status === 'loading') return true;
    return !!sessionUser?.email && sessionUser.email === seed.email && !!sessionUser.role && sessionUser.role === seed.role;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/context/userContextValue.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UserContextContext",
    ()=>UserContextContext,
    "useSharedUserContext",
    ()=>useSharedUserContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
const UserContextContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({
    userContext: null,
    loading: true,
    error: null
});
const useSharedUserContext = ()=>{
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(UserContextContext);
};
_s(useSharedUserContext, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/helper/entityIcons.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Entity icon mappings for Salesforce entity types
 * Shared across components that display entity icons
 */ __turbopack_context__.s([
    "ENTITY_ICONS",
    ()=>ENTITY_ICONS,
    "getEntityIcon",
    ()=>getEntityIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconAccount$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconAccount/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconContact$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconContact/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconOpportunity$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconOpportunity/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconCase$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconCase/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconTask$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconTask/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconOrder$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconOrder/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconProduct$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconProduct/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconProject$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconProject/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconInvoice$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconInvoice/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconOwner$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconOwner/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconMonitoredMaterial$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconMonitoredMaterial/index.ts [app-client] (ecmascript)");
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
const ENTITY_ICONS = {
    // Standard entities
    Account: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconAccount$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/apps/web/src/app/helper/entityIcons.tsx",
        lineNumber: 23,
        columnNumber: 12
    }, ("TURBOPACK compile-time value", void 0)),
    Contact: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconContact$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/apps/web/src/app/helper/entityIcons.tsx",
        lineNumber: 24,
        columnNumber: 12
    }, ("TURBOPACK compile-time value", void 0)),
    Opportunity: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconOpportunity$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/apps/web/src/app/helper/entityIcons.tsx",
        lineNumber: 25,
        columnNumber: 16
    }, ("TURBOPACK compile-time value", void 0)),
    Case: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconCase$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/apps/web/src/app/helper/entityIcons.tsx",
        lineNumber: 26,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0)),
    Task: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconTask$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/apps/web/src/app/helper/entityIcons.tsx",
        lineNumber: 27,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0)),
    Order: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconOrder$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/apps/web/src/app/helper/entityIcons.tsx",
        lineNumber: 28,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0)),
    OrderItem: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconOrder$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/apps/web/src/app/helper/entityIcons.tsx",
        lineNumber: 29,
        columnNumber: 14
    }, ("TURBOPACK compile-time value", void 0)),
    User: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconOwner$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/apps/web/src/app/helper/entityIcons.tsx",
        lineNumber: 30,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0)),
    // Product (both names)
    Product: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconProduct$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/apps/web/src/app/helper/entityIcons.tsx",
        lineNumber: 33,
        columnNumber: 12
    }, ("TURBOPACK compile-time value", void 0)),
    Product2: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconProduct$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/apps/web/src/app/helper/entityIcons.tsx",
        lineNumber: 34,
        columnNumber: 13
    }, ("TURBOPACK compile-time value", void 0)),
    // Project (both names)
    Project: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconProject$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/apps/web/src/app/helper/entityIcons.tsx",
        lineNumber: 37,
        columnNumber: 12
    }, ("TURBOPACK compile-time value", void 0)),
    Projekt__c: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconProject$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/apps/web/src/app/helper/entityIcons.tsx",
        lineNumber: 38,
        columnNumber: 15
    }, ("TURBOPACK compile-time value", void 0)),
    // Invoice (both names)
    Invoice: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconInvoice$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/apps/web/src/app/helper/entityIcons.tsx",
        lineNumber: 41,
        columnNumber: 12
    }, ("TURBOPACK compile-time value", void 0)),
    Abrechnung__c: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconInvoice$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/apps/web/src/app/helper/entityIcons.tsx",
        lineNumber: 42,
        columnNumber: 18
    }, ("TURBOPACK compile-time value", void 0)),
    // Monitored Material (both names)
    MonitoredMaterial: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconMonitoredMaterial$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/apps/web/src/app/helper/entityIcons.tsx",
        lineNumber: 45,
        columnNumber: 22
    }, ("TURBOPACK compile-time value", void 0)),
    Monitored_Material__c: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconMonitoredMaterial$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/apps/web/src/app/helper/entityIcons.tsx",
        lineNumber: 46,
        columnNumber: 26
    }, ("TURBOPACK compile-time value", void 0))
};
function getEntityIcon(entityType) {
    if (!entityType) return undefined;
    return ENTITY_ICONS[entityType];
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/helper/fileTypeIcon.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fileTypeIcon",
    ()=>fileTypeIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconAttachment$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconAttachment/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconFilePdf$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconFilePdf/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconFileXlsx$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconFileXlsx/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconFileXlsx$2f$IconFileXlsx$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconFileXlsx/IconFileXlsx.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconFileDocx$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconFileDocx/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconFileDocx$2f$IconFileDocx$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconFileDocx/IconFileDocx.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconFileZip$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconFileZip/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconFileZip$2f$IconFileZip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconFileZip/IconFileZip.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconImageBinary$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconImageBinary/index.ts [app-client] (ecmascript) <locals>");
;
;
;
;
;
;
;
function fileTypeIcon(name, contentType) {
    const ext = (name ?? '').toLowerCase().split('.').pop() ?? '';
    const typ = (contentType ?? '').toLowerCase();
    if (typ.includes('pdf') || ext === 'pdf') return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconFilePdf$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/apps/web/src/app/helper/fileTypeIcon.tsx",
        lineNumber: 16,
        columnNumber: 52
    }, this);
    if (typ.startsWith('image/') || [
        'png',
        'jpg',
        'jpeg',
        'gif',
        'webp',
        'svg'
    ].includes(ext)) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconImageBinary$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {}, void 0, false, {
        fileName: "[project]/apps/web/src/app/helper/fileTypeIcon.tsx",
        lineNumber: 18,
        columnNumber: 12
    }, this);
    if (typ.includes('spreadsheet') || typ.includes('excel') || [
        'xls',
        'xlsx',
        'csv'
    ].includes(ext)) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconFileXlsx$2f$IconFileXlsx$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconFileXlsx"], {}, void 0, false, {
        fileName: "[project]/apps/web/src/app/helper/fileTypeIcon.tsx",
        lineNumber: 20,
        columnNumber: 12
    }, this);
    if (typ.includes('word') || typ.includes('document') || [
        'doc',
        'docx'
    ].includes(ext)) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconFileDocx$2f$IconFileDocx$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconFileDocx"], {}, void 0, false, {
        fileName: "[project]/apps/web/src/app/helper/fileTypeIcon.tsx",
        lineNumber: 22,
        columnNumber: 12
    }, this);
    if (typ.includes('zip') || typ.includes('compressed') || [
        'zip',
        '7z',
        'rar'
    ].includes(ext)) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconFileZip$2f$IconFileZip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconFileZip"], {}, void 0, false, {
        fileName: "[project]/apps/web/src/app/helper/fileTypeIcon.tsx",
        lineNumber: 24,
        columnNumber: 12
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconAttachment$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/apps/web/src/app/helper/fileTypeIcon.tsx",
        lineNumber: 25,
        columnNumber: 10
    }, this);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/helper/humanizeFieldName.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "humanizeFieldName",
    ()=>humanizeFieldName
]);
/**
 * Convert a Salesforce API field name into a readable column label.
 *
 * Salesforce escapes umlauts in API names as underscores (Verh_ltnis = Verhältnis),
 * so naive humanising produces "Verh Ltnis". This helper fixes the common escaped
 * fragments, maps a few standard fields to nicer German labels, then falls back to
 * generic title-casing.
 */ const STANDARD_LABELS = {
    Name: 'Name',
    OwnerId: 'Inhaber',
    CreatedById: 'Erstellt von',
    CreatedDate: 'Erstellt',
    LastModifiedById: 'Geändert von',
    LastModifiedDate: 'Geändert',
    OrderNumber: 'Auftragsnr.',
    OrderItemNumber: 'Position',
    CaseNumber: 'Vorgangsnr.',
    TotalAmount: 'Betrag',
    UnitPrice: 'Einzelpreis',
    TotalPrice: 'Gesamtpreis',
    Quantity: 'Menge',
    Email: 'E-Mail',
    Phone: 'Telefon',
    MobilePhone: 'Mobil',
    Title: 'Position',
    FirstName: 'Vorname',
    LastName: 'Nachname',
    Status: 'Status',
    Type: 'Typ',
    Product2Id: 'Produkt',
    ProductCode: 'Produktcode',
    StartDate: 'Startdatum',
    EndDate: 'Enddatum'
};
/** Escaped-umlaut fragments → readable form (order matters; longest first). */ const UMLAUT_FIXES = [
    [
        /Verh_ltnis/g,
        'Verhältnis'
    ],
    [
        /Ausl_sender/g,
        'Auslösender'
    ],
    [
        /Empf_nger/g,
        'Empfänger'
    ],
    [
        /Gespr_chsprotokoll/g,
        'Gesprächsprotokoll'
    ],
    [
        /Pr_fung/g,
        'Prüfung'
    ],
    [
        /Gr_e/g,
        'größe'
    ],
    [
        /G_ltig/g,
        'Gültig'
    ],
    [
        /g_ltig/g,
        'gültig'
    ],
    [
        /St_rke/g,
        'Stärke'
    ],
    [
        /zust_ndig/gi,
        'zuständig'
    ],
    [
        /f_r/g,
        'für'
    ]
];
function humanizeFieldName(apiName) {
    // For dotted relationship paths (parent.child) use the child segment.
    const raw = apiName.includes('.') ? apiName.split('.').pop() : apiName;
    if (STANDARD_LABELS[raw]) return STANDARD_LABELS[raw];
    let label = raw.replace(/__r$/, '').replace(/__c$/, '');
    for (const [pattern, replacement] of UMLAUT_FIXES){
        label = label.replace(pattern, replacement);
    }
    label = label.replace(/Id$/, '').replace(/_/g, ' ').replace(/([a-z])([A-Z])/g, '$1 $2').trim().replace(/\s+/g, ' ');
    // Capitalise the first letter only (keep existing casing of the rest, e.g. 'MFR').
    return label.charAt(0).toUpperCase() + label.slice(1);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/helper/isTypingContext.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createTypingContextTracker",
    ()=>createTypingContextTracker,
    "hasOpenModal",
    ()=>hasOpenModal,
    "isTypingContext",
    ()=>isTypingContext
]);
/**
 * Robust predicate for "is the user currently typing text".
 *
 * Used by global single-key shortcuts (QuickWheel 'q', SearchOverlay 's') to
 * decide whether to intercept a bare-letter keypress. A naive
 * `document.activeElement` check misses several real-world cases that have
 * caused regressions in this app:
 *
 *   1. Portaled menus / autocompletes — option lists rendered into
 *      `document.body` are not DOM descendants of their combobox, so
 *      `element.closest('[role="combobox"]')` returns null.
 *   2. `react-select` / Headless-UI listboxes — focus stays on a wrapper and
 *      selection is announced via `aria-activedescendant` on a hidden input.
 *   3. Modal autofocus race — between modal mount and input focus there is a
 *      tick where `activeElement` is the modal wrapper button.
 *   4. Native form controls inside an overlay attached to body.
 *   5. Rich-text editors that briefly move focus to a toolbar button.
 *
 * The synchronous `isTypingContext` covers cases 1-2 by walking the focus
 * chain *and* checking aria-activedescendant. The tracker version
 * (`createTypingContextTracker`) covers cases 3-5 by remembering the most
 * recent typing-capable focus target via document-level focusin/focusout —
 * which fires for portaled elements too.
 */ const TEXT_INPUT_SELECTOR = [
    'input:not([type="button"]):not([type="submit"]):not([type="reset"]):not([type="checkbox"]):not([type="radio"]):not([type="file"]):not([type="image"]):not([type="range"]):not([type="color"])',
    'textarea',
    'select',
    '[contenteditable="true"]',
    '[contenteditable=""]',
    '[role="textbox"]',
    '[role="searchbox"]',
    '[role="combobox"]',
    '[role="listbox"]',
    '[role="spinbutton"]'
].join(',');
const isElement = (node)=>typeof Element !== 'undefined' && node instanceof Element;
function isTypingContext(element) {
    if (!isElement(element)) return false;
    // Direct match or ancestor match via closest()
    if (element.closest(TEXT_INPUT_SELECTOR)) return true;
    // Virtual focus pattern (react-select, Headless UI, Downshift)
    let cursor = element;
    while(cursor){
        if (cursor.hasAttribute('aria-activedescendant')) return true;
        cursor = cursor.parentElement;
    }
    return false;
}
function createTypingContextTracker() {
    // Seed from current activeElement so the very first keypress is correct
    // even before any focusin event has fired.
    let typing = isTypingContext(typeof document !== 'undefined' ? document.activeElement : null);
    const handleFocusIn = (event)=>{
        typing = isTypingContext(event.target);
    };
    // On focusout, only clear the flag if focus is NOT moving to another typing
    // context. relatedTarget is the element receiving focus next.
    const handleFocusOut = (event)=>{
        const next = event.relatedTarget;
        if (!isTypingContext(next)) {
            typing = false;
        }
    };
    if (typeof document !== 'undefined') {
        document.addEventListener('focusin', handleFocusIn, true);
        document.addEventListener('focusout', handleFocusOut, true);
    }
    return {
        get: ()=>typing,
        dispose: ()=>{
            if (typeof document !== 'undefined') {
                document.removeEventListener('focusin', handleFocusIn, true);
                document.removeEventListener('focusout', handleFocusOut, true);
            }
        }
    };
}
function hasOpenModal() {
    if (typeof document === 'undefined') return false;
    const candidates = document.querySelectorAll('[role="dialog"][aria-modal="true"], dialog[open]');
    for (const candidate of candidates){
        let cursor = candidate;
        let hidden = false;
        while(cursor){
            if (cursor.getAttribute('aria-hidden') === 'true') {
                hidden = true;
                break;
            }
            cursor = cursor.parentElement;
        }
        if (!hidden) return true;
    }
    return false;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/helper/maps/geoClient.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * #2135/#2136: Browser-Seite der eigenen Geodienste. Alle Anfragen gehen an
 * die App (/api/geo/*), nie an einen fremden Dienst. POST, damit Suchtexte
 * und Koordinaten nicht in URL-Protokollen stehen.
 *
 * Kleiner Zwischenspeicher je Seite: dieselbe Suche bzw. Strecke wird nicht
 * doppelt angefragt (Tippen, erneutes Rendern, gleiche Strecken in PlasTrack).
 */ __turbopack_context__.s([
    "GeoClientError",
    ()=>GeoClientError,
    "fetchRoute",
    ()=>fetchRoute,
    "leereGeoSpeicher",
    ()=>leereGeoSpeicher,
    "reversePlace",
    ()=>reversePlace,
    "searchPlaces",
    ()=>searchPlaces,
    "straightRoute",
    ()=>straightRoute
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$geo$2f$haversine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/geo/haversine.ts [app-client] (ecmascript)");
;
class GeoClientError extends Error {
    status;
    constructor(status){
        super(`geo ${status}`), this.status = status;
        this.name = 'GeoClientError';
    }
}
const MAX_EINTRAEGE = 200;
const speicher = new Map();
function merken(schluessel, laden) {
    const vorhanden = speicher.get(schluessel);
    if (vorhanden) return vorhanden;
    const p = laden().catch((fehler)=>{
        // Fehler nicht festhalten — der nächste Versuch fragt neu
        speicher.delete(schluessel);
        throw fehler;
    });
    if (speicher.size >= MAX_EINTRAEGE) speicher.delete(speicher.keys().next().value);
    speicher.set(schluessel, p);
    return p;
}
function leereGeoSpeicher() {
    speicher.clear();
    routingAus = false;
}
async function post(pfad, body, signal) {
    const res = await fetch(`/api/geo/${pfad}/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body),
        signal
    });
    if (!res.ok) throw new GeoClientError(res.status);
    return await res.json();
}
function searchPlaces(q, opts = {}) {
    const text = q.trim();
    const body = {
        q: text,
        lang: opts.lang,
        limit: opts.limit,
        near: opts.near
    };
    return merken(`s:${JSON.stringify(body)}`, ()=>post('search', body, opts.signal).then((r)=>r.places ?? []));
}
function reversePlace(point, lang) {
    const body = {
        point,
        lang
    };
    return merken(`r:${JSON.stringify(body)}`, ()=>post('reverse', body).then((r)=>r.place ?? null));
}
/**
 * #2152: Antwortet die Route einmal mit 503 (Routing-Dienst nicht da —
 * Valhalla ist optional und vorerst aus), fragt diese Seite nicht weiter nach:
 * jeder weitere Aufruf scheitert sofort, der Aufrufer rechnet Luftlinie.
 */ let routingAus = false;
function fetchRoute(points, mode = 'car') {
    if (routingAus) return Promise.reject(new GeoClientError(503));
    const body = {
        points: points.map((p)=>({
                lat: p.lat,
                lng: p.lng
            })),
        mode
    };
    return merken(`t:${JSON.stringify(body)}`, ()=>post('route', body).then((r)=>r.route).catch((fehler)=>{
            if (fehler instanceof GeoClientError && fehler.status === 503) routingAus = true;
            throw fehler;
        }));
}
function straightRoute(points) {
    return {
        distanceKm: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$geo$2f$haversine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rundeKm"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$geo$2f$haversine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pfadKm"])(points)),
        durationMin: 0,
        geometry: points.map((p)=>[
                p.lng,
                p.lat
            ]),
        source: 'straight'
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/helper/resolveLookupDisplay.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Anzeige-Name eines Lookup-Werts aus dem bereits geladenen Parent-Record
 * auflösen (`X__c` → `X__r.Name`, `XId` → `X.Name`) — spart den
 * /salesforce/lookup-Fetch und liefert den Related-Record für Quicklinks mit.
 */ __turbopack_context__.s([
    "resolveLookupDisplay",
    ()=>resolveLookupDisplay
]);
function resolveLookupDisplay(record, fieldName) {
    for (const nameField of [
        fieldName.replace('Id', ''),
        fieldName.replace('__c', '__r')
    ]){
        const related = record[nameField];
        // Objekte ohne Name-Feld: Nummer als Bezeichner (Order/Case/Contract)
        const display = related?.Name ?? related?.OrderNumber ?? related?.CaseNumber ?? related?.ContractNumber;
        if (display !== undefined && display !== null && display !== '') {
            return {
                name: String(display),
                related
            };
        }
    }
    return {};
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/helper/statusPills.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ACCOUNT_SOURCE_PILL",
    ()=>ACCOUNT_SOURCE_PILL,
    "AUCTION_STATUS_PILL",
    ()=>AUCTION_STATUS_PILL,
    "CASE_STATUS_PILL",
    ()=>CASE_STATUS_PILL,
    "CASE_TYPE_PILL",
    ()=>CASE_TYPE_PILL,
    "CMS_STATUS_PILL",
    ()=>CMS_STATUS_PILL,
    "CONTACT_HANDOVER_STATUS_PILL",
    ()=>CONTACT_HANDOVER_STATUS_PILL,
    "INVOICE_CATEGORY_PILL",
    ()=>INVOICE_CATEGORY_PILL,
    "INVOICE_STATUS_PILL",
    ()=>INVOICE_STATUS_PILL,
    "INVOICE_TYPE_PILL",
    ()=>INVOICE_TYPE_PILL,
    "MARKET_PRICE_CATEGORY_PILL",
    ()=>MARKET_PRICE_CATEGORY_PILL,
    "MATERIAL_ANALYSIS_STATUS_PILL",
    ()=>MATERIAL_ANALYSIS_STATUS_PILL,
    "MATERIAL_PROPOSAL_STATUS_PILL",
    ()=>MATERIAL_PROPOSAL_STATUS_PILL,
    "NOTIFICATION_TYPE_PILL",
    ()=>NOTIFICATION_TYPE_PILL,
    "OPPORTUNITY_STAGE_PILL",
    ()=>OPPORTUNITY_STAGE_PILL,
    "OPPORTUNITY_TYPE_PILL",
    ()=>OPPORTUNITY_TYPE_PILL,
    "ORDER_STATUS_PILL",
    ()=>ORDER_STATUS_PILL,
    "ORDER_TYPE_PILL",
    ()=>ORDER_TYPE_PILL,
    "PILL_MAP_REGISTRY",
    ()=>PILL_MAP_REGISTRY,
    "PILL_RESOLVER_REGISTRY",
    ()=>PILL_RESOLVER_REGISTRY,
    "PLASTSHIP_BOX_STATUS_PILL",
    ()=>PLASTSHIP_BOX_STATUS_PILL,
    "PLASTSHIP_SCAN_STATUS_PILL",
    ()=>PLASTSHIP_SCAN_STATUS_PILL,
    "PLASTSHIP_SCAN_TYPE_PILL",
    ()=>PLASTSHIP_SCAN_TYPE_PILL,
    "PRIORITY_PILL",
    ()=>PRIORITY_PILL,
    "PROJECT_STATUS_PILL",
    ()=>PROJECT_STATUS_PILL,
    "PROZESSFEEDBACK_STATUS_PILL",
    ()=>PROZESSFEEDBACK_STATUS_PILL,
    "REQUIREMENT_MATERIAL_TYPE_PILL",
    ()=>REQUIREMENT_MATERIAL_TYPE_PILL,
    "REQUIREMENT_STATUS_PILL",
    ()=>REQUIREMENT_STATUS_PILL,
    "RIGK_UPDATE_TYPE_PILL",
    ()=>RIGK_UPDATE_TYPE_PILL,
    "SAMPLE_FEEDBACK_REASON_PILL",
    ()=>SAMPLE_FEEDBACK_REASON_PILL,
    "SAMPLE_FEEDBACK_STATUS_PILL",
    ()=>SAMPLE_FEEDBACK_STATUS_PILL,
    "SAMPLE_SENDING_STATUS_PILL",
    ()=>SAMPLE_SENDING_STATUS_PILL,
    "SAMPLE_SENDING_TYPE_PILL",
    ()=>SAMPLE_SENDING_TYPE_PILL,
    "TASK_STATUS_PILL",
    ()=>TASK_STATUS_PILL,
    "TRAVEL_EXPENSE_REIMBURSEMENT_PILL",
    ()=>TRAVEL_EXPENSE_REIMBURSEMENT_PILL,
    "TRAVEL_EXPENSE_STATUS_PILL",
    ()=>TRAVEL_EXPENSE_STATUS_PILL,
    "USER_ROLE_PILL",
    ()=>USER_ROLE_PILL,
    "WORKING_HOURS_STATUS_PILL",
    ()=>WORKING_HOURS_STATUS_PILL,
    "getActiveStatusPill",
    ()=>getActiveStatusPill,
    "getPillModifier",
    ()=>getPillModifier,
    "getRigkRelationLevelPill",
    ()=>getRigkRelationLevelPill,
    "resolvePillModifier",
    ()=>resolvePillModifier
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Pill/Pill.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$orders$2f$orderStatusConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/orders/orderStatusConfig.ts [app-client] (ecmascript)");
;
;
const getPillModifier = (map, value, fallback = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].NEUTRAL)=>{
    if (!value) return fallback;
    if (Object.prototype.hasOwnProperty.call(map, value)) return map[value];
    const lower = value.trim().toLowerCase();
    for (const key of Object.keys(map)){
        if (key.toLowerCase() === lower) return map[key];
    }
    return fallback;
};
const getActiveStatusPill = (isActive)=>isActive ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].SUCCESS : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].ERROR;
const PRIORITY_PILL = {
    High: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].ERROR,
    Medium: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].WARNING,
    Normal: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].WARNING,
    Low: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].SUCCESS
};
const CASE_STATUS_PILL = {
    New: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].INFO,
    'In Progress': __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].WARNING,
    'Waiting for Customer': __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].WARNING,
    'Response Received': __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].INFO,
    'On Hold': __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].NEUTRAL,
    Escalated: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].ERROR,
    Merged: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].NEUTRAL,
    'No Action': __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].NEUTRAL,
    Rejected: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].ERROR,
    Closed: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].SUCCESS
};
const CASE_TYPE_PILL = {
    Problem: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].ERROR,
    'Feature Request': __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].INFO,
    'Platform Material request': __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].WARNING,
    'Platform Material or offer created': __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].SUCCESS
};
const TASK_STATUS_PILL = {
    'Not Started': __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].INFO,
    'In Progress': __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].WARNING,
    Completed: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].SUCCESS
};
const ORDER_STATUS_PILL = {
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$orders$2f$orderStatusConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrderStatus"].Entwurf]: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].NEUTRAL,
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$orders$2f$orderStatusConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrderStatus"].BestellungErhalten]: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].NEUTRAL,
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$orders$2f$orderStatusConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrderStatus"].AnLieferantVersandt]: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].WARNING,
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$orders$2f$orderStatusConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrderStatus"].VomLieferantBestaetigt]: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].SUCCESS,
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$orders$2f$orderStatusConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrderStatus"].AbAnKundenVersandt]: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].SUCCESS,
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$orders$2f$orderStatusConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrderStatus"].TransportBeauftragen]: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].WARNING,
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$orders$2f$orderStatusConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrderStatus"].TransportBeauftragt]: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].WARNING,
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$orders$2f$orderStatusConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrderStatus"].AnlieferungErfolgt]: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].INFO,
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$orders$2f$orderStatusConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrderStatus"].InformationenEinpflegen]: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].INFO,
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$orders$2f$orderStatusConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrderStatus"].BetragErhalten]: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].INFO,
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$orders$2f$orderStatusConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrderStatus"].Abgeschlossen]: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].SUCCESS,
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$orders$2f$orderStatusConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrderStatus"].Storno]: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].ERROR,
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$orders$2f$orderStatusConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrderStatus"].Reklamation]: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].ERROR,
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$orders$2f$orderStatusConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrderStatus"].PlastrackBefuellt]: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].INFO
};
const ORDER_TYPE_PILL = {
    warentransport: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].INFO,
    abfalltransport: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].WARNING,
    provisionsabrechnung: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].SUCCESS,
    materialanalyse: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].INFO,
    consulting: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].NEUTRAL,
    dienstleistung: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].NEUTRAL,
    materialentwicklung: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].NEUTRAL,
    lagermenge: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].INFO
};
const INVOICE_STATUS_PILL = {
    bezahlt: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].SUCCESS,
    gebucht: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].INFO,
    'vollständig dokumentiert': __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].WARNING,
    storno: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].ERROR
};
const INVOICE_TYPE_PILL = {
    ausgang: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].SUCCESS,
    eingang: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].INFO
};
const INVOICE_CATEGORY_PILL = {
    rechnung: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].INFO,
    gutschrift: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].WARNING,
    storno: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].ERROR
};
const SAMPLE_SENDING_STATUS_PILL = {
    Draft: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].NEUTRAL,
    Ready: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].WARNING,
    Ordered: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].INFO,
    Sent: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].SUCCESS,
    Received: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].SUCCESS
};
const SAMPLE_SENDING_TYPE_PILL = {
    Order: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].INFO,
    Sending: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].SUCCESS,
    Direct: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].WARNING
};
const OPPORTUNITY_STAGE_PILL = {
    Qualification: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].INFO,
    'Needs Analysis': __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].WARNING,
    Proposal: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].WARNING,
    Negotiation: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].WARNING,
    'Closed Won': __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].SUCCESS,
    'Closed Lost': __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].ERROR
};
const OPPORTUNITY_TYPE_PILL = {
    'New Business': __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].SUCCESS,
    'Existing Business': __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].INFO,
    'gezielte Materialvermarktung': __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].WARNING,
    'gezielte Materialversorgung': __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].WARNING,
    'Kooperation / Projekt': __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].INFO,
    Partner: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].NEUTRAL,
    '3S-Sales': __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].SUCCESS
};
const CONTACT_HANDOVER_STATUS_PILL = {
    abgeschlossen: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].SUCCESS,
    übergeben: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].INFO,
    offen: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].ERROR,
    'follow-up': __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].WARNING,
    'rechnung stellen': __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].INFO
};
const MATERIAL_ANALYSIS_STATUS_PILL = {
    Offen: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].NEUTRAL,
    Beauftragt: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].WARNING,
    'Übergeben (plastship an DL)': __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].INFO,
    'in Arbeit': __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].SUCCESS,
    'On hold': __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].ERROR,
    'Abgeschlossen (Dienstleister)': __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].INFO,
    'QC ok (plastship)': __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].SUCCESS,
    'Veröffentlicht (plastship)': __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].INFO
};
const MATERIAL_PROPOSAL_STATUS_PILL = {
    'Platform request': __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].INFO,
    'In preparation': __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].INFO,
    'Requirement confirmed': __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].WARNING,
    'Availability and buying price confirmed': __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].WARNING,
    'Transport price requested': __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].WARNING,
    'Offer communicated': __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].WARNING,
    'Initial feedback received': __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].WARNING,
    'Sample ordered from supplier': __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].INFO,
    'Sample sent to customer': __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].INFO,
    Approved: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].SUCCESS,
    Rejected: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].ERROR
};
const SAMPLE_FEEDBACK_STATUS_PILL = {
    Draft: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].NEUTRAL,
    'To send': __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].WARNING,
    Sent: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].INFO,
    'Received by Customer': __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].SUCCESS,
    'Feedback positive': __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].SUCCESS,
    'Feedback negative': __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].ERROR
};
const PROZESSFEEDBACK_STATUS_PILL = {
    'in Erstellung': __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].NEUTRAL,
    'Ursachenanalyse erwartet': __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].INFO,
    'Evaluierung und Implementierung erwartet': __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].INFO,
    'Umsetzung weitere Maßnahmen erwartet': __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].INFO,
    'Nacharbeit Ursachenanalyse erwartet': __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].WARNING,
    'Nacharbeit Evaluierung und Implementierung erwartet': __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].WARNING,
    'Nacharbeit weitere Maßnahmen erwartet': __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].WARNING,
    Abgeschlossen: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].SUCCESS,
    'Abgebrochen / keine Abweichung': __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].NEUTRAL
};
const SAMPLE_FEEDBACK_REASON_PILL = {
    'Contamination in polymer composition': __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].ERROR,
    'Contamination with non-plastics': __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].ERROR,
    'Quality fluctuation': __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].WARNING,
    'Missing quality assurance': __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].WARNING,
    Price: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].INFO,
    'Optical Quality': __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].SUCCESS
};
const REQUIREMENT_STATUS_PILL = {
    Aktiv: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].SUCCESS,
    'Bestätigter Bedarf': __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].SUCCESS,
    'In Bearbeitung': __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].WARNING,
    'Recherchierter Bedarf': __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].WARNING,
    Abgeschlossen: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].INFO,
    'On hold': __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].NEUTRAL,
    Storniert: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].ERROR
};
const REQUIREMENT_MATERIAL_TYPE_PILL = {
    Regranulat: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].SUCCESS,
    Compound: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].INFO,
    Flakes: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].WARNING,
    Mahlgut: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].NEUTRAL
};
const PLASTSHIP_BOX_STATUS_PILL = {
    Full: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].SUCCESS,
    Empty: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].INFO,
    'In Transit': __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].WARNING
};
const AUCTION_STATUS_PILL = {
    draft: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].NEUTRAL,
    planned: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].INFO,
    live: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].SUCCESS,
    ended: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].NEUTRAL,
    canceled: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].ERROR
};
const PLASTSHIP_SCAN_STATUS_PILL = {
    Processed: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].SUCCESS,
    Voided: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].ERROR
};
const PLASTSHIP_SCAN_TYPE_PILL = {
    Fill: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].SUCCESS,
    Empty: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].INFO
};
const PROJECT_STATUS_PILL = {
    active: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].SUCCESS,
    aktiv: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].SUCCESS,
    pending: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].WARNING,
    wartend: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].WARNING,
    closed: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].NEUTRAL,
    geschlossen: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].NEUTRAL
};
const NOTIFICATION_TYPE_PILL = {
    info: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].INFO,
    success: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].SUCCESS,
    warning: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].WARNING,
    error: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].ERROR
};
const CMS_STATUS_PILL = {
    draft: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].WARNING,
    published: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].SUCCESS
};
const TRAVEL_EXPENSE_STATUS_PILL = {
    approved: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].SUCCESS,
    submitted: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].INFO,
    rejected: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].ERROR,
    paid: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].SUCCESS,
    draft: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].NEUTRAL
};
const TRAVEL_EXPENSE_REIMBURSEMENT_PILL = {
    complete: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].SUCCESS,
    partial: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].WARNING,
    pending: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].NEUTRAL
};
const USER_ROLE_PILL = {
    admin: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].ERROR,
    staff: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].NEUTRAL,
    agent: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].NEUTRAL,
    user: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].INFO,
    accounting: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].NEUTRAL,
    laboratory: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].NEUTRAL,
    advisor: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].NEUTRAL,
    rigk: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].INFO,
    partner: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].NEUTRAL
};
const WORKING_HOURS_STATUS_PILL = {
    approved: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].SUCCESS,
    submitted: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].INFO,
    rejected: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].ERROR
};
const RIGK_UPDATE_TYPE_PILL = {
    Status: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].INFO,
    Meeting: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].SUCCESS,
    Entscheidung: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].WARNING,
    'To-do': __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].NEUTRAL,
    Info: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].INFO
};
const ACCOUNT_SOURCE_PILL = {
    'Fachpack 2024': __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].INFO,
    IFAT2024: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].INFO,
    'PRSE 2023': __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].INFO,
    PRC2023: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].INFO,
    'Fakuma 2024': __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].INFO,
    Advertisement: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].WARNING,
    'Google AdWords': __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].WARNING,
    Website: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].SUCCESS,
    Webinar: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].SUCCESS,
    Partner: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].INFO,
    'External Referral': __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].INFO,
    'Employee Referral': __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].INFO,
    'Verband TecPart': __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].ERROR,
    'Verband PRE': __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].ERROR,
    'Verband bvse': __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].ERROR,
    'Verband IK': __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].ERROR
};
const MARKET_PRICE_CATEGORY_PILL = {
    virgin: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].INFO,
    recyclate: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].SUCCESS
};
const getRigkRelationLevelPill = (relation)=>{
    if (!relation || relation === '-') return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].NEUTRAL;
    switch(relation.charAt(0)){
        case '0':
            return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].NEUTRAL;
        case '1':
            return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].INFO;
        case '2':
            return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].SUCCESS;
        case '3':
            return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].WARNING;
        case '4':
            return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].ERROR;
        default:
            return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].NEUTRAL;
    }
};
const PILL_MAP_REGISTRY = {
    priority: PRIORITY_PILL,
    'account.source': ACCOUNT_SOURCE_PILL,
    'case.status': CASE_STATUS_PILL,
    'case.type': CASE_TYPE_PILL,
    'contactHandover.status': CONTACT_HANDOVER_STATUS_PILL,
    'invoice.category': INVOICE_CATEGORY_PILL,
    'invoice.status': INVOICE_STATUS_PILL,
    'invoice.type': INVOICE_TYPE_PILL,
    'marketPrice.category': MARKET_PRICE_CATEGORY_PILL,
    'materialAnalysis.status': MATERIAL_ANALYSIS_STATUS_PILL,
    'materialProposal.status': MATERIAL_PROPOSAL_STATUS_PILL,
    'notification.type': NOTIFICATION_TYPE_PILL,
    'cms.status': CMS_STATUS_PILL,
    'opportunity.stage': OPPORTUNITY_STAGE_PILL,
    'opportunity.type': OPPORTUNITY_TYPE_PILL,
    'order.status': ORDER_STATUS_PILL,
    'order.type': ORDER_TYPE_PILL,
    'auction.status': AUCTION_STATUS_PILL,
    'plastshipBox.status': PLASTSHIP_BOX_STATUS_PILL,
    'plastshipScan.scanType': PLASTSHIP_SCAN_TYPE_PILL,
    'plastshipScan.status': PLASTSHIP_SCAN_STATUS_PILL,
    'project.status': PROJECT_STATUS_PILL,
    'requirement.materialType': REQUIREMENT_MATERIAL_TYPE_PILL,
    'requirement.status': REQUIREMENT_STATUS_PILL,
    'rigk.updateType': RIGK_UPDATE_TYPE_PILL,
    'sampleFeedback.reason': SAMPLE_FEEDBACK_REASON_PILL,
    'prozessfeedback.status': PROZESSFEEDBACK_STATUS_PILL,
    'sampleFeedback.status': SAMPLE_FEEDBACK_STATUS_PILL,
    'sampleSending.status': SAMPLE_SENDING_STATUS_PILL,
    'sampleSending.type': SAMPLE_SENDING_TYPE_PILL,
    'task.status': TASK_STATUS_PILL,
    'travelExpense.reimbursement': TRAVEL_EXPENSE_REIMBURSEMENT_PILL,
    'travelExpense.status': TRAVEL_EXPENSE_STATUS_PILL,
    'user.role': USER_ROLE_PILL,
    'workingHours.status': WORKING_HOURS_STATUS_PILL
};
const PILL_RESOLVER_REGISTRY = {
    'rigk.relationLevel': getRigkRelationLevelPill
};
const resolvePillModifier = (mapName, value, fallback = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Pill$2f$Pill$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PillTypes"].NEUTRAL)=>getPillModifier(PILL_MAP_REGISTRY[mapName], value, fallback);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/helper/statusTone.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Shared status-tone helpers for detail views and related lists.
 *
 * Maps Salesforce status / relationship picklist values to one of the
 * design-system status tones (palette.status) so they can be rendered as
 * coloured chips consistently across the app.
 */ __turbopack_context__.s([
    "getStatusTone",
    ()=>getStatusTone,
    "isStatusField",
    ()=>isStatusField
]);
/** Field API names that should be rendered as a coloured status chip. */ const STATUS_FIELD_PATTERN = /(^|_)(Status|Bedarfsstatus|Verh_ltnis|StageName|Phase)/i;
const isStatusField = (fieldName)=>STATUS_FIELD_PATTERN.test(fieldName);
const getStatusTone = (value)=>{
    const v = value.toLowerCase();
    if (/(approved|abgeschlossen|best[äa]tigt|enger partner|aktiv|received|sent|betrag erhalten|standard template|erfolgreich)/.test(v)) return 'success';
    if (/(rejected|storno|reklamation|abgelehnt|duplicate|4 rot|\brot\b|inaktiv|negativ)/.test(v)) return 'error';
    if (/(on hold|hold|pausiert|0 offen|^offen|draft|entwurf|wiedervorlage|warten)/.test(v)) return 'warning';
    if (/(in preparation|in bearbeitung|aufbau|requested|requirement confirmed|transport|versand|in arbeit|recherch)/.test(v)) return 'info';
    return 'neutral';
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/lib/apiErrorText.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Fehlermeldungen der API in der Sprache des Nutzers (#1626)
 *
 * Die Routen antworten mit festen Sätzen (`{ error: 'Forbidden' }`,
 * `apiErrorResponse(404, …, 'User not found')`), meist englisch, teils
 * deutsch. Der Server kennt die Sprache des Nutzers nicht; übersetzt wird
 * deshalb im Client, über einen Schlüssel, der aus dem Text selbst abgeleitet
 * ist — `apiErrors.<Kurzform>_<Hash>` — mit dem Text als `defaultValue`
 * (wie `entityTextKey` für die Feld-Configs):
 *
 * - Antworten, Statuscodes und Tests, die auf Server-Meldungen prüfen,
 *   bleiben unverändert,
 * - eine Meldung ohne Seed-Eintrag (dynamisch, mit Id oder Name darin) kommt
 *   unverändert zurück,
 * - ein geänderter Text bekommt automatisch einen neuen Schlüssel.
 *
 * Welche Meldungen es gibt, sammelt `tests/lib/helpers/collectApiErrorMessages`;
 * der Wächter `tests/lib/apiErrorTexts.test.ts` prüft, dass jede im Seed steht.
 *
 * Reine Funktionen ohne React — auch aus Tests und Skripten nutzbar.
 */ /** Signatur von `tr` / `trCurrentLanguage`, auf das Nötige reduziert. */ __turbopack_context__.s([
    "API_ERROR_PREFIX",
    ()=>API_ERROR_PREFIX,
    "apiErrorKey",
    ()=>apiErrorKey,
    "translateApiMessage",
    ()=>translateApiMessage
]);
const API_ERROR_PREFIX = 'apiErrors.';
const UMLAUTE = {
    ä: 'ae',
    ö: 'oe',
    ü: 'ue',
    Ä: 'Ae',
    Ö: 'Oe',
    Ü: 'Ue',
    ß: 'ss'
};
/** FNV-1a, 32 Bit — im Browser wie in Node gleich. */ const hash = (text)=>{
    let h = 0x811c9dc5;
    for(let i = 0; i < text.length; i++){
        h ^= text.charCodeAt(i);
        h = Math.imul(h, 0x01000193);
    }
    return (h >>> 0).toString(16).padStart(8, '0');
};
const apiErrorKey = (message)=>{
    const kurzform = message.replace(/[äöüÄÖÜß]/g, (zeichen)=>UMLAUTE[zeichen] ?? zeichen).replace(/[^A-Za-z0-9]+/g, '_').replace(/^_+|_+$/g, '').slice(0, 40);
    return `${API_ERROR_PREFIX}${kurzform ? `${kurzform}_` : ''}${hash(message)}`;
};
const translateApiMessage = (tr, message)=>message ? tr(apiErrorKey(message), {
        defaultValue: message
    }) : message;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/lib/axios.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "api",
    ()=>api,
    "apiDownloadBlob",
    ()=>apiDownloadBlob,
    "fingerprintPath",
    ()=>fingerprintPath,
    "getApiErrorMessage",
    ()=>getApiErrorMessage,
    "requestIdOf",
    ()=>requestIdOf
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
// #1494: über die Brücke — das SDK lädt erst nach dem ersten Rendern
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$sentry$2f$browser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/sentry/browser.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/lib/logger.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$requestId$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/lib/requestId.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$contentDisposition$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/lib/contentDisposition.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$previewReadOnly$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/lib/previewReadOnly.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$currentLanguageTr$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/lib/currentLanguageTr.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$apiErrorText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/lib/apiErrorText.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$utils$2f$salesforceErrorText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/utils/salesforceErrorText.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$entityFieldI18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/entityFields/entityFieldI18n.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$api$2f$rejectionSummary$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/api/rejectionSummary.ts [app-client] (ecmascript)");
// #1478: in apiCapture.ts, damit providers.tsx axios nicht mitlädt
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$apiCapture$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/lib/apiCapture.ts [app-client] (ecmascript)");
// #1478: in blobDownload.ts, damit öffentliche Blöcke (TeamMemberCard) axios nicht mitladen
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$blobDownload$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/lib/blobDownload.ts [app-client] (ecmascript)");
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
 * Zustandswechsel, keine Defekte: 401/403 (Abmeldung, Widerruf, Rolle ohne
 * Recht), 404 (Datensatz weg). Werden weder geloggt noch gemeldet.
 */ const EXPECTED_STATUS = new Set([
    401,
    403,
    404
]);
const ID_SEGMENT = /^([a-zA-Z0-9]{15}|[a-zA-Z0-9]{18}|[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}|c[a-z0-9]{24}|\d+)$/;
function fingerprintPath(url) {
    if (!url) return '(unknown)';
    const pfad = url.split('?')[0].split('#')[0].replace(/\/+$/, '');
    return pfad.split('/').map((seg)=>ID_SEGMENT.test(seg) ? ':id' : seg).join('/');
}
function requestIdOf(error) {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isAxiosError(error)) return undefined;
    const fromResponse = error.response?.headers?.[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$requestId$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["REQUEST_ID_HEADER"]];
    if (typeof fromResponse === 'string' && fromResponse) return fromResponse;
    const sent = error.config?.headers?.[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$requestId$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["REQUEST_ID_HEADER"]];
    return typeof sent === 'string' && sent ? sent : undefined;
}
// Helper to check if we're in a test environment
const isTestEnvironment = ("TURBOPACK compile-time value", "development") === 'test';
const api = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: '/api'
});
// Add request interceptor
api.interceptors.request.use((config)=>{
    // Ensure trailing slash on all API URLs to prevent 308 redirects (trailingSlash: true in next.config.js)
    if (config.url) {
        // Split URL into path and query string
        const [path, query] = config.url.split('?');
        if (path && !path.endsWith('/')) {
            config.url = query ? `${path}/?${query}` : `${path}/`;
        }
    }
    // #1136: jede Anfrage bekommt eine ID; der Server übernimmt sie
    // (getRequestId) und schreibt sie in Log, Sentry-Tag und Antwort-Header.
    if (!config.headers.has(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$requestId$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["REQUEST_ID_HEADER"])) {
        config.headers.set(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$requestId$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["REQUEST_ID_HEADER"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$requestId$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateRequestId"])());
    }
    if ("TURBOPACK compile-time truthy", 1) {
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].info('HTTP request initiated', (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])('axios-client', 'request', {
            metadata: {
                requestId: config.headers.get(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$requestId$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["REQUEST_ID_HEADER"]),
                method: config.method?.toUpperCase(),
                url: config.url,
                baseURL: config.baseURL,
                hasData: !!config.data,
                dataSize: config.data ? JSON.stringify(config.data).length : 0
            }
        }));
    }
    return config;
}, (error)=>{
    if ("TURBOPACK compile-time truthy", 1) {
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].error('HTTP request setup failed', (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])('axios-client', 'request-error'), error);
    }
    return Promise.reject(error);
});
// Add response interceptor
api.interceptors.response.use((response)=>{
    if ("TURBOPACK compile-time truthy", 1) {
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].info('HTTP response received', (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])('axios-client', 'response', {
            metadata: {
                status: response.status,
                statusText: response.statusText,
                url: response.config.url,
                hasData: !!response.data,
                dataSize: response.data ? JSON.stringify(response.data).length : 0
            }
        }));
    }
    return response;
}, (error)=>{
    // 404 (not found) and 403 (RBAC denied for this role) are expected outcomes for
    // data requests — not errors worth logging. A 403 just means the session's role
    // lacks `can_view` on the resource (e.g. a `user` hitting a monitored-materials
    // widget); the caller handles the empty/denied state.
    // Canceled requests are expected, not errors: the debounced lookup search in
    // EditableField aborts the previous in-flight request on every keystroke via an
    // AbortController, which rejects with a CanceledError (no response, so it would
    // otherwise slip past the status filter below and log loudly).
    const isCanceled = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isCancel(error) || error.code === 'ERR_CANCELED';
    const status = error.response?.status;
    // #1194: gesperrter Schreibversuch in der Rollen-Vorschau — die Kopfleiste
    // erklaert es dem admin (sonst saehe er nur „Speichern fehlgeschlagen").
    if (error.response?.data?.code === 'PREVIEW_READ_ONLY') {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$previewReadOnly$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["announcePreviewReadOnly"])();
    }
    const requestId = requestIdOf(error);
    const apiError = error;
    apiError.requestId = requestId;
    if (!isCanceled && !(status !== undefined && EXPECTED_STATUS.has(status))) {
        const method = (error.config?.method ?? 'get').toUpperCase();
        const path = fingerprintPath(error.config?.url);
        const serverBody = error.response?.data;
        if ("TURBOPACK compile-time truthy", 1) {
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].warn('HTTP response error', (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])('axios-client', 'response-error', {
                requestId,
                statusCode: status,
                metadata: {
                    method,
                    url: error.config?.url,
                    message: error.message
                }
            }));
        }
        // #1137: EIN Capture je Fehler, hier — auch für die axios-Aufrufe ohne
        // react-query, die vorher an der globalen Erfassung vorbeiliefen.
        // Fingerprint je Methode/Pfad/Status, damit Sentry nicht alles unter
        // „Request failed with status code 500" zusammenwirft.
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$sentry$2f$browser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["captureException"](error, {
            tags: {
                source: 'axios',
                requestId: requestId ?? 'none',
                http_status: status !== undefined ? String(status) : 'network',
                http_method: method
            },
            extra: {
                url: error.config?.url,
                serverError: typeof serverBody?.error === 'string' ? serverBody.error : undefined,
                serverCode: typeof serverBody?.code === 'string' ? serverBody.code : undefined,
                // #2075: beanstandete Feldnamen (nie Werte) — vorher sah Sentry bei
                // `validation` nicht, welches Feld der Server ablehnte.
                serverFields: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$api$2f$rejectionSummary$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["summarizeRejection"])(serverBody).fields
            },
            fingerprint: [
                'axios',
                method,
                path,
                status !== undefined ? String(status) : 'network'
            ]
        });
        apiError.sentryCaptured = true;
    }
    return Promise.reject(error);
});
/** Redigierte 5xx-Texte des Servers (#281/#1135) — nichts für den Toast. */ const GENERIC_SERVER_MESSAGES = new Set([
    'Internal server error',
    'Upstream service error'
]);
/**
 * #1636: Salesforce-Ablehnung in der Sprache des Nutzers. Der Server schickt
 * sie strukturiert (`salesforce`, bei withApiMiddleware unter `details`);
 * daraus wird die Meldung mit der aktuellen Sprache neu gebaut. Feld-Labels
 * laufen wie überall über die Entity-Texte. `null`, wenn nichts Passendes da
 * ist oder die Übersetzung scheitert — dann gilt die deutsche Server-Meldung.
 */ function translatedSalesforceMessage(data) {
    if (!data || typeof data !== 'object') return null;
    const body = data;
    const rejection = body.salesforce ?? body.details?.salesforce;
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$utils$2f$salesforceErrorText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSalesforceRejection"])(rejection)) return null;
    try {
        const message = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$utils$2f$salesforceErrorText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["translateSalesforceRejection"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$currentLanguageTr$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trCurrentLanguage"], {
            text: (label)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$entityFieldI18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["translateEntityText"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$currentLanguageTr$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trCurrentLanguage"], label)
        }, rejection);
        return message.trim() ? message : null;
    } catch  {
        return null;
    }
}
function getApiErrorMessage(error, fallback) {
    const data = error?.response?.data;
    const translated = translatedSalesforceMessage(data);
    if (translated) return translated;
    const message = data?.message ?? data?.error;
    if (typeof message === 'string' && message.trim() && !GENERIC_SERVER_MESSAGES.has(message)) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$apiErrorText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["translateApiMessage"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$currentLanguageTr$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trCurrentLanguage"], message);
    }
    return fallback;
}
async function apiDownloadBlob(url, defaultFilename = 'download.pdf', config) {
    const response = await api.get(url, {
        ...config,
        responseType: 'blob'
    });
    const blob = response.data;
    // #1166: filename*= (RFC 5987, Umlaute) hat Vorrang vor dem ASCII-filename=
    const contentDisposition = response.headers?.['content-disposition'];
    const filename = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$contentDisposition$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fileNameFromContentDisposition"])(contentDisposition) ?? defaultFilename;
    return {
        blob,
        filename
    };
}
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/lib/blobDownload.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Trigger a browser file download from a Blob.
 *
 * #1478: eigene Datei ohne HTTP-Client — lib/axios.ts re-exportiert sie; wer
 * nur herunterlädt (TeamMemberCard auf öffentlichen Seiten), lädt axios nicht.
 */ __turbopack_context__.s([
    "triggerBlobDownload",
    ()=>triggerBlobDownload
]);
function triggerBlobDownload(blob, filename) {
    const blobUrl = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = blobUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    window.URL.revokeObjectURL(blobUrl);
    document.body.removeChild(link);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/lib/contentDisposition.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "contentDisposition",
    ()=>contentDisposition,
    "fileNameFromContentDisposition",
    ()=>fileNameFromContentDisposition,
    "joinFileName",
    ()=>joinFileName,
    "pdfFilename",
    ()=>pdfFilename,
    "sanitizeFileName",
    ()=>sanitizeFileName,
    "toAsciiFileName",
    ()=>toAsciiFileName
]);
/**
 * Content-Disposition für Datei-Downloads (#1166).
 *
 * Lädt der Browser eine Datei per Link oder Navigation (kein `download`-Attribut,
 * kein Blob), nimmt er den Dateinamen AUSSCHLIESSLICH aus diesem Header. Fehlt
 * er, speichert er unter dem letzten URL-Segment — ohne Endung. Windows zeigt so
 * eine Datei nur als „Datei" ohne Programmzuordnung an.
 *
 * Der Header trägt immer eine ASCII-Variante (`filename=`) für alte Clients und,
 * sobald Umlaute oder andere Nicht-ASCII-Zeichen vorkommen, zusätzlich die
 * RFC-5987-Variante (`filename*=UTF-8''…`), die moderne Browser bevorzugen.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$helper$2f$entityHelpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/helper/entityHelpers.ts [app-client] (ecmascript) <locals>");
;
const CONTROL_AND_PATH_CHARS = /[\u0000-\u001f\u007f/\\]/g;
const NON_ASCII = /[^\u0020-\u007e]/g;
const QUOTE_OR_BACKSLASH = /["\\]/g;
const TRANSLITERATIONS = {
    ä: 'ae',
    ö: 'oe',
    ü: 'ue',
    Ä: 'Ae',
    Ö: 'Oe',
    Ü: 'Ue',
    ß: 'ss'
};
function sanitizeFileName(name, fallback = 'download') {
    const cleaned = (name ?? '').replace(CONTROL_AND_PATH_CHARS, '_').trim();
    return cleaned || fallback;
}
function joinFileName(title, extension, fallback = 'download') {
    const base = sanitizeFileName(title, fallback);
    const ext = (extension ?? '').trim().replace(/^\.+/, '');
    if (!ext) return base;
    return base.toLowerCase().endsWith(`.${ext.toLowerCase()}`) ? base : `${base}.${ext}`;
}
function toAsciiFileName(name) {
    return name.replace(/[äöüÄÖÜß]/g, (char)=>TRANSLITERATIONS[char] ?? '_').replace(NON_ASCII, '_').replace(QUOTE_OR_BACKSLASH, '_');
}
/** Prozent-Kodierung nach RFC 5987 (encodeURIComponent lässt `'()*` unkodiert). */ function encodeRfc5987(value) {
    return encodeURIComponent(value).replace(/['()*]/g, (char)=>`%${char.charCodeAt(0).toString(16).toUpperCase()}`);
}
function contentDisposition(fileName, type = 'attachment') {
    const safe = sanitizeFileName(fileName);
    const ascii = toAsciiFileName(safe);
    const header = `${type}; filename="${ascii}"`;
    return ascii === safe ? header : `${header}; filename*=UTF-8''${encodeRfc5987(safe)}`;
}
/**
 * #1246 (M-08/M-09): Präfix je Objekttyp für Versand-/Download-Dateinamen —
 * klein/deutsch, wo die Objektbezeichnung das hergibt. Nur die Ausnahmen, die
 * `getEntityLabel` nicht deutsch liefert (`Abrechnung__c` → „Invoice",
 * `Order` → „Order"), stehen hier explizit.
 */ const PDF_FILENAME_PREFIXES = {
    Abrechnung__c: 'rechnung',
    Order: 'auftrag'
};
/** Sonderzeichen (inkl. Leerzeichen) zu `-`, Mehrfach-/Rand-Bindestriche weg. */ function toFileNameSlugPart(value) {
    return value.replace(/[^a-zA-Z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}
function pdfFilename(entityType, name) {
    const label = PDF_FILENAME_PREFIXES[entityType] ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$helper$2f$entityHelpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getEntityLabel"])(entityType);
    const prefix = toFileNameSlugPart(label.toLowerCase());
    // Artefakte-Review M-9: erst transliterieren (ü → ue), dann slugifizieren —
    // sonst wird „Müller GmbH" zu „M-ller-GmbH".
    const cleanedName = toFileNameSlugPart(toAsciiFileName(sanitizeFileName(name, '')));
    return cleanedName ? `${prefix}-${cleanedName}.pdf` : `${prefix}.pdf`;
}
function fileNameFromContentDisposition(header) {
    if (!header) return null;
    const extended = header.match(/filename\*=(?:UTF-8|utf-8)''([^;\s]+)/);
    if (extended?.[1]) {
        try {
            return sanitizeFileName(decodeURIComponent(extended[1]));
        } catch  {
        // kaputte Prozent-Kodierung → auf filename= zurückfallen
        }
    }
    const plain = header.match(/filename="([^"]*)"|filename=([^;\s]+)/);
    const value = plain?.[1] ?? plain?.[2];
    return value ? sanitizeFileName(value) : null;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/lib/generatedPdfPreview.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fetchGeneratedPdfPreview",
    ()=>fetchGeneratedPdfPreview
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/lib/axios.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$contentDisposition$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/lib/contentDisposition.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$pdf$2f$pdfPreviewHeader$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/pdf/pdfPreviewHeader.ts [app-client] (ecmascript)");
'use client';
;
;
;
async function fetchGeneratedPdfPreview(pdfApiPath) {
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["api"].post('/entity-pdf/preview', {
        pdfApiPath
    }, {
        responseType: 'blob'
    });
    const headers = response.headers ?? {};
    return {
        blob: response.data,
        token: headers[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$pdf$2f$pdfPreviewHeader$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PDF_PREVIEW_TOKEN_HEADER"].toLowerCase()] ?? null,
        filename: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$contentDisposition$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fileNameFromContentDisposition"])(headers['content-disposition'])
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/lib/logger.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LogLevel",
    ()=>LogLevel,
    "createContext",
    ()=>createContext,
    "createRequestContext",
    ()=>createRequestContext,
    "default",
    ()=>__TURBOPACK__default__export__,
    "logger",
    ()=>logger,
    "measurePerformance",
    ()=>measurePerformance
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
// #1494: über die Brücke — logger landet über lib/axios auch im Browser, wo das
// SDK erst nach dem ersten Rendern lädt (auf dem Server reicht sie direkt weiter)
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$sentry$2f$browser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/sentry/browser.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$logScrub$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/logScrub.ts [app-client] (ecmascript)");
;
;
var LogLevel = /*#__PURE__*/ function(LogLevel) {
    LogLevel[LogLevel["ERROR"] = 0] = "ERROR";
    LogLevel[LogLevel["WARN"] = 1] = "WARN";
    LogLevel[LogLevel["INFO"] = 2] = "INFO";
    LogLevel[LogLevel["DEBUG"] = 3] = "DEBUG";
    LogLevel[LogLevel["TRACE"] = 4] = "TRACE";
    return LogLevel;
}({});
class ApplicationLogger {
    logLevel;
    isDevelopment;
    constructor(){
        this.logLevel = this.getLogLevel();
        this.isDevelopment = ("TURBOPACK compile-time value", "development") === 'development';
    }
    getLogLevel() {
        const level = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env['LOG_LEVEL']?.toLowerCase() || 'info';
        switch(level){
            case 'error':
                return 0;
            case 'warn':
                return 1;
            case 'info':
                return 2;
            case 'debug':
                return 3;
            case 'trace':
                return 4;
            default:
                return 2;
        }
    }
    shouldLog(level) {
        return level <= this.logLevel;
    }
    formatLogEntry(level, message, context, error) {
        // #1678: Geheimnisse stehen in keiner Logzeile — auch nicht in Nachricht,
        // URL oder Fehlertext. Das ist das Netz für alle Aufrufer (lib/logScrub.ts).
        const entry = {
            timestamp: new Date().toISOString(),
            level: LogLevel[level],
            message: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$logScrub$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scrubLogString"])(message),
            context: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$logScrub$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scrubLogValue"])({
                ...context,
                component: context.component,
                action: context.action
            })
        };
        if (error) {
            entry.error = {
                name: error.name,
                message: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$logScrub$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scrubLogString"])(error.message),
                stack: this.isDevelopment ? error.stack : undefined,
                code: 'code' in error ? error.code : undefined
            };
        }
        return entry;
    }
    outputLog(entry) {
        const logString = JSON.stringify(entry, null, this.isDevelopment ? 2 : 0);
        // Console output with colors in development
        if (this.isDevelopment) {
            const coloredLevel = this.getColoredLevel(entry.level);
            console.log(`[${entry.timestamp}] ${coloredLevel}: ${entry.message}`);
            if (entry.context.duration) {
                console.log(`  Duration: ${entry.context.duration}ms`);
            }
            if (entry.error) {
                console.error(`  Error: ${entry.error.message}`);
                if (entry.error.stack) {
                    console.error(`  Stack: ${entry.error.stack}`);
                }
            }
            if (entry.context.metadata) {
                console.log(`  Metadata:`, entry.context.metadata);
            }
        } else {
            // Production: structured JSON output
            switch(entry.level){
                case 'ERROR':
                    console.error(logString);
                    break;
                case 'WARN':
                    console.warn(logString);
                    break;
                default:
                    console.log(logString);
            }
        }
    }
    getColoredLevel(level) {
        switch(level){
            case 'ERROR':
                return '\x1b[31mERROR\x1b[0m' // Red
                ;
            case 'WARN':
                return '\x1b[33mWARN\x1b[0m' // Yellow
                ;
            case 'INFO':
                return '\x1b[36mINFO\x1b[0m' // Cyan
                ;
            case 'DEBUG':
                return '\x1b[90mDEBUG\x1b[0m' // Gray
                ;
            case 'TRACE':
                return '\x1b[35mTRACE\x1b[0m' // Magenta
                ;
            default:
                return level;
        }
    }
    log(level, message, context, error) {
        if (!this.shouldLog(level)) return;
        const entry = this.formatLogEntry(level, message, context, error);
        this.outputLog(entry);
    }
    // Public logging methods
    error(message, context, error) {
        this.log(0, message, context, error);
        // Forward to Sentry for centralized error tracking
        if (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$sentry$2f$browser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["captureException"](error, {
                tags: {
                    component: context.component,
                    action: context.action
                },
                extra: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$logScrub$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scrubLogValue"])({
                    message,
                    ...context.metadata
                })
            });
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$sentry$2f$browser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["captureMessage"]((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$logScrub$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scrubLogString"])(message), {
                level: 'error',
                tags: {
                    component: context.component,
                    action: context.action
                },
                extra: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$logScrub$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scrubLogValue"])(context.metadata)
            });
        }
    }
    /**
   * #2075: ERROR-Zeile ohne eigene Sentry-Meldung — für 5xx, die eine Route
   * selbst beantwortet (und selbst meldet, z. B. Kontaktformular abgeschaltet).
   * Sonst gäbe es je Antwort eine zweite Sentry-Meldung aus der Middleware.
   */ errorLogOnly(message, context) {
        this.log(0, message, context);
    }
    warn(message, context) {
        this.log(1, message, context);
        // Add as Sentry breadcrumb for context on future errors
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$sentry$2f$browser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addBreadcrumb"]({
            category: context.component,
            message: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$logScrub$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scrubLogString"])(`[${context.action}] ${message}`),
            level: 'warning'
        });
    }
    info(message, context) {
        this.log(2, message, context);
    }
    debug(message, context) {
        this.log(3, message, context);
    }
    trace(message, context) {
        this.log(4, message, context);
    }
    // Performance logging helper
    performanceLog(message, context, startTime, level = 2) {
        const duration = Date.now() - startTime;
        this.log(level, message, {
            ...context,
            duration
        });
    }
    // API request logging helper
    apiRequest(message, context, request) {
        const requestContext = {
            ...context,
            method: request?.method,
            url: request?.url,
            userAgent: request?.headers.get('user-agent') || undefined,
            ip: request?.headers.get('x-forwarded-for') || request?.headers.get('x-real-ip') || undefined
        };
        this.info(message, requestContext);
    }
    // API response logging helper
    apiResponse(message, context, statusCode, duration) {
        const responseContext = {
            ...context,
            statusCode,
            duration
        };
        // 4xx sind erwartete Zustände (abgelaufene Session, fehlendes Recht, Token-
        // Ablehnung am Webhook) und keine Defekte: INFO, damit ein gehämmerter
        // Endpunkt nicht je Anfrage eine Warnung erzeugt (#1008, #1141). 5xx bleibt ERROR.
        const level = statusCode >= 500 ? 0 : 2;
        this.log(level, message, responseContext);
    }
    // Database query logging helper
    dbQuery(query, context, duration, rowCount) {
        const dbContext = {
            ...context,
            duration,
            metadata: {
                query: query.substring(0, 200) + (query.length > 200 ? '...' : ''),
                rowCount
            }
        };
        this.debug('Database query executed', dbContext);
    }
    // Salesforce API logging helper
    salesforceAPI(operation, context, duration, recordCount, error) {
        const sfContext = {
            ...context,
            duration,
            metadata: {
                operation,
                recordCount
            }
        };
        if (error) {
            this.error(`Salesforce API error: ${operation}`, sfContext, error);
        } else {
            this.info(`Salesforce API success: ${operation}`, sfContext);
        }
    }
}
const logger = new ApplicationLogger();
const createContext = (component, action, additional = {})=>({
        component,
        action,
        ...additional
    });
const createRequestContext = (component, action, request, additional = {})=>({
        component,
        action,
        method: request?.method,
        url: request?.url,
        userAgent: request?.headers.get('user-agent') || undefined,
        ip: request?.headers.get('x-forwarded-for') || request?.headers.get('x-real-ip') || undefined,
        ...additional
    });
const measurePerformance = (fn, message, context)=>{
    const startTime = Date.now();
    const result = fn();
    if (result instanceof Promise) {
        return result.then((value)=>{
            logger.performanceLog(message, context, startTime);
            return value;
        }).catch((error)=>{
            logger.performanceLog(`${message} (failed)`, context, startTime, 0);
            throw error;
        });
    } else {
        logger.performanceLog(message, context, startTime);
        return Promise.resolve(result);
    }
};
const __TURBOPACK__default__export__ = logger;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/lib/pdfjs.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PDFJS_HARDENED_OPTIONS",
    ()=>PDFJS_HARDENED_OPTIONS,
    "loadPdfjs",
    ()=>loadPdfjs
]);
var __TURBOPACK__import$2e$meta__ = {
    get url () {
        return __turbopack_context__.F("apps/web/src/app/lib/pdfjs.ts");
    },
    env: {
        DEV: true,
        PROD: false,
        MODE: "development",
        BASE_URL: "/",
        SSR: false
    },
    get turbopackHot () {
        return __turbopack_context__.m.hot;
    }
};
'use client';
const PDFJS_HARDENED_OPTIONS = {
    enableXfa: false,
    disableAutoFetch: true,
    disableStream: true,
    disableRange: true
};
let pdfjsPromise = null;
function loadPdfjs() {
    if (!pdfjsPromise) {
        pdfjsPromise = __turbopack_context__.A("[project]/node_modules/pdfjs-dist/build/pdf.mjs [app-client] (ecmascript, async loader)").then((pdfjs)=>{
            // Der Bundler legt die Worker-Datei unter /_next/static ab (gleiche Origin, kein blob:).
            const worker = pdfjs.PDFWorker.create({
                port: __turbopack_context__.r("[project]/node_modules/pdfjs-dist/build/pdf.worker.min.mjs [app-client] (ecmascript, worker loader)")(Worker, {
                    type: 'module'
                })
            });
            return {
                getDocument: (source)=>pdfjs.getDocument({
                        ...source,
                        ...PDFJS_HARDENED_OPTIONS,
                        worker
                    })
            };
        }).catch((error)=>{
            // Nächster Versuch lädt neu (z. B. nach einem Chunk-Fehler im Deploy)
            pdfjsPromise = null;
            throw error;
        });
    }
    return pdfjsPromise;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/lib/previewReadOnly.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * #1194 — Brücke vom axios-Interceptor zur Oberfläche: eine Schreibanfrage
 * wurde während der Rollen-Vorschau gesperrt (403 PREVIEW_READ_ONLY).
 *
 * axios.ts kennt keinen React-Kontext; es meldet per Fenster-Ereignis, die
 * Kopfleiste (ViewAsControl) zeigt daraufhin einen Hinweis.
 */ __turbopack_context__.s([
    "PREVIEW_READ_ONLY_EVENT",
    ()=>PREVIEW_READ_ONLY_EVENT,
    "announcePreviewReadOnly",
    ()=>announcePreviewReadOnly,
    "subscribePreviewReadOnly",
    ()=>subscribePreviewReadOnly
]);
const PREVIEW_READ_ONLY_EVENT = 'plastship:preview-read-only';
function announcePreviewReadOnly() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    window.dispatchEvent(new Event(PREVIEW_READ_ONLY_EVENT));
}
function subscribePreviewReadOnly(listener) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    window.addEventListener(PREVIEW_READ_ONLY_EVENT, listener);
    return ()=>window.removeEventListener(PREVIEW_READ_ONLY_EVENT, listener);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/lib/requestId.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "REQUEST_ID_HEADER",
    ()=>REQUEST_ID_HEADER,
    "generateRequestId",
    ()=>generateRequestId,
    "getRequestId",
    ()=>getRequestId,
    "isValidRequestId",
    ()=>isValidRequestId
]);
const REQUEST_ID_HEADER = 'x-request-id';
const generateRequestId = ()=>{
    const timestamp = Date.now().toString(36);
    const random = Math.random().toString(36).substring(2, 9);
    return `req_${timestamp}_${random}`;
};
/** Nur unser eigenes Format wird übernommen — fremde Werte könnten Logs vergiften. */ const REQUEST_ID_PATTERN = /^req_[a-z0-9]{6,16}_[a-z0-9]{4,12}$/;
const isValidRequestId = (value)=>typeof value === 'string' && REQUEST_ID_PATTERN.test(value);
const getRequestId = (request)=>{
    const existingId = request.headers?.get?.(REQUEST_ID_HEADER) ?? null;
    return isValidRequestId(existingId) ? existingId : generateRequestId();
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/lib/runtimeEnv.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Runtime environment helpers.
 *
 * `isStorybookRuntime()` lets app providers detect when they are mounted inside
 * the Storybook preview frame so they can skip live side effects — opening
 * EventSource/SSE connections, polling endpoints — that make no sense in
 * Storybook. The Storybook preview (apps/web/.storybook/preview.tsx) sets the
 * `__PLASTSHIP_STORYBOOK__` window flag at module-eval time, before any story
 * mounts, so the flag is reliably present by the time provider effects run.
 *
 * In the real Next.js app the flag is never set, so this always returns false
 * and provider behaviour is unchanged.
 */ __turbopack_context__.s([
    "isStorybookRuntime",
    ()=>isStorybookRuntime
]);
function isStorybookRuntime() {
    return ("TURBOPACK compile-time value", "object") !== 'undefined' && window.__PLASTSHIP_STORYBOOK__ === true;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/utils/avatars.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Local avatar generator — no external API calls.
 * Generates SVG initials avatars as data URIs.
 */ __turbopack_context__.s([
    "generateAvatarUrl",
    ()=>generateAvatarUrl,
    "getAvatarByRole",
    ()=>getAvatarByRole
]);
/**
 * Generate a deterministic background color from a seed string.
 */ function seedToColor(seed) {
    let hash = 0;
    for(let i = 0; i < seed.length; i++){
        hash = seed.charCodeAt(i) + ((hash << 5) - hash);
    }
    const hue = Math.abs(hash) % 360;
    return `hsl(${hue}, 45%, 50%)`;
}
/**
 * Extract initials from a name or email.
 */ function getInitials(seed) {
    const cleaned = seed.replace(/@.*$/, '').trim();
    const parts = cleaned.split(/[\s._-]+/).filter(Boolean);
    if (parts.length >= 2) {
        return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
    }
    return cleaned.substring(0, 2).toUpperCase();
}
function generateAvatarUrl(seed, options = {}) {
    const { backgroundColor, size = 200 } = options;
    const initials = getInitials(seed);
    const bgColor = backgroundColor ? backgroundColor.startsWith('#') ? backgroundColor : `#${backgroundColor}` : seedToColor(seed);
    const fontSize = size * 0.4;
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}"><rect width="${size}" height="${size}" fill="${bgColor}" rx="${size * 0.1}"/><text x="50%" y="50%" dy=".1em" fill="#fff" font-family="system-ui,sans-serif" font-size="${fontSize}" font-weight="600" text-anchor="middle" dominant-baseline="central">${initials}</text></svg>`;
    return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}
function getAvatarByRole(name, role) {
    const colorMap = {
        admin: '0066cc',
        staff: '22c55e',
        agent: 'f59e0b',
        user: '8b5cf6'
    };
    return generateAvatarUrl(name, {
        backgroundColor: colorMap[role] || '6b7280'
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/utils/htmlPolicyReport.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "reportHtmlPolicyRemovals",
    ()=>reportHtmlPolicyRemovals
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$sentry$2f$browser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/sentry/browser.ts [app-client] (ecmascript)");
;
function reportHtmlPolicyRemovals(removed, mode) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$sentry$2f$browser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addBreadcrumb"])({
        category: 'security.html-policy',
        level: 'info',
        // fester Code, kein Satz — keine Übersetzung nötig (apiErrorTexts-Wächter)
        message: 'html-policy-removed',
        data: {
            mode,
            ...removed
        }
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/utils/salesforceErrorText.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * #1636: Texte der Salesforce-Ablehnungen in der Sprache des Nutzers.
 *
 * Der Server kennt die Sprache des Nutzers nicht. Er schickt deshalb neben der
 * deutschen `message` (Logs, ältere Clients) eine strukturierte Beschreibung
 * (`salesforce`: Fehlercode, Feld-API-Namen, Feld-Labels der Entity-Config,
 * Objekt). Daraus setzt der Client die Meldung mit seinem `tr` neu zusammen —
 * und der Server mit einem `tr`, das nur den deutschen `defaultValue` füllt.
 * So gibt es jeden Satz genau einmal.
 *
 * Reine Funktionen ohne Server-Abhängigkeiten: wird von `salesforceErrors.ts`
 * (Server) und `lib/axios.ts` (Client) genutzt.
 *
 * Nicht übersetzbar: Texte, die Salesforce selbst liefert (Validierungsregeln,
 * Apex addError, Trigger-Meldungen, Details wie bei MALFORMED_ID) — sie sind in
 * der Org geschrieben und gehen unverändert durch.
 */ /** Signatur von `tr`, auf das Nötige reduziert. */ __turbopack_context__.s([
    "SALESFORCE_ERROR_TEXTS",
    ()=>SALESFORCE_ERROR_TEXTS,
    "defaultValueTr",
    ()=>defaultValueTr,
    "identityEntityText",
    ()=>identityEntityText,
    "isSalesforceRejection",
    ()=>isSalesforceRejection,
    "salesforceErrorTextId",
    ()=>salesforceErrorTextId,
    "salesforceRejectedTitle",
    ()=>salesforceRejectedTitle,
    "translateSalesforceError",
    ()=>translateSalesforceError,
    "translateSalesforceRejection",
    ()=>translateSalesforceRejection
]);
const SALESFORCE_ERROR_TEXTS = {
    fieldLabel: {
        key: 'salesforceErrors.fieldLabel',
        de: '„{{label}}"'
    },
    requiredFieldMissing: {
        key: 'salesforceErrors.requiredFieldMissing',
        de: 'Pflichtfeld fehlt: {{fields}}.'
    },
    requiredFieldMissingGeneric: {
        key: 'salesforceErrors.requiredFieldMissingGeneric',
        de: 'Ein Pflichtfeld fehlt.'
    },
    lookupFilter: {
        key: 'salesforceErrors.lookupFilter',
        de: '{{fields}}: Der gewählte Wert erfüllt die Auswahlkriterien nicht (Lookup-Filter in Salesforce).'
    },
    lookupFilterGeneric: {
        key: 'salesforceErrors.lookupFilterGeneric',
        de: 'Ein gewählter Wert erfüllt die Auswahlkriterien nicht (Lookup-Filter in Salesforce).'
    },
    readOnlyField: {
        key: 'salesforceErrors.readOnlyField',
        de: '{{fields}} kann an diesem Datensatz nicht (mehr) geändert werden — in Salesforce schreibgeschützt (Formel/Rollup, feste Verknüpfung oder nach Aktivierung gesperrt).'
    },
    readOnlyFieldGeneric: {
        key: 'salesforceErrors.readOnlyFieldGeneric',
        de: 'Ein Feld ist in Salesforce schreibgeschützt und kann nicht geändert werden.'
    },
    malformedId: {
        key: 'salesforceErrors.malformedId',
        de: '{{fields}}: Der Wert ist kein gültiger Datensatzbezug ({{detail}}).'
    },
    malformedIdGeneric: {
        key: 'salesforceErrors.malformedIdGeneric',
        de: 'Ungültiger Datensatzbezug: {{detail}}'
    },
    restrictedPicklist: {
        key: 'salesforceErrors.restrictedPicklist',
        de: '{{fields}}: Der Wert ist in der Auswahlliste nicht zulässig.'
    },
    restrictedPicklistGeneric: {
        key: 'salesforceErrors.restrictedPicklistGeneric',
        de: 'Ein Wert ist in der Auswahlliste nicht zulässig.'
    },
    stringTooLong: {
        key: 'salesforceErrors.stringTooLong',
        de: '{{fields}}: Der Text ist zu lang.'
    },
    stringTooLongGeneric: {
        key: 'salesforceErrors.stringTooLongGeneric',
        de: 'Ein Text ist zu lang.'
    },
    duplicateValue: {
        key: 'salesforceErrors.duplicateValue',
        de: 'Doppelter Wert: {{detail}}'
    },
    entityLocked: {
        key: 'salesforceErrors.entityLocked',
        de: 'Der Datensatz ist in Salesforce gesperrt (z. B. laufender Genehmigungsprozess).'
    },
    insufficientAccess: {
        key: 'salesforceErrors.insufficientAccess',
        de: 'Keine Schreibberechtigung in Salesforce: {{detail}}'
    },
    notFound: {
        key: 'salesforceErrors.notFound',
        de: 'Der Datensatz wurde in Salesforce nicht gefunden.'
    },
    withFields: {
        key: 'salesforceErrors.withFields',
        de: '{{fields}}: {{detail}}'
    },
    rejected: {
        key: 'salesforceErrors.rejected',
        de: 'Salesforce hat die Änderung abgelehnt'
    }
};
/** Satz je SF-Fehlercode: [mit Feldern, ohne Felder]. `null` = SF-Text durchreichen. */ const CODE_TEXTS = {
    REQUIRED_FIELD_MISSING: [
        'requiredFieldMissing',
        'requiredFieldMissingGeneric'
    ],
    // Validierungsregel oder Apex addError: der Text ist vom Admin für den
    // Nutzer geschrieben — unverändert durchreichen (in der Org, nicht im Code).
    FIELD_CUSTOM_VALIDATION_EXCEPTION: null,
    // #917: SF nennt das Feld nur in fields[], die message ist generisch.
    FIELD_FILTER_VALIDATION_EXCEPTION: [
        'lookupFilter',
        'lookupFilterGeneric'
    ],
    // #349/#326: Master-Detail ohne Reparenting, Formel/Rollup, nach
    // Aktivierung gesperrte Felder (z. B. ContractId am aktivierten Auftrag).
    INVALID_FIELD_FOR_INSERT_UPDATE: [
        'readOnlyField',
        'readOnlyFieldGeneric'
    ],
    MALFORMED_ID: [
        'malformedId',
        'malformedIdGeneric'
    ],
    INVALID_OR_NULL_FOR_RESTRICTED_PICKLIST: [
        'restrictedPicklist',
        'restrictedPicklistGeneric'
    ],
    STRING_TOO_LONG: [
        'stringTooLong',
        'stringTooLongGeneric'
    ],
    DUPLICATE_VALUE: [
        'duplicateValue',
        'duplicateValue'
    ],
    DUPLICATES_DETECTED: [
        'duplicateValue',
        'duplicateValue'
    ],
    ENTITY_IS_LOCKED: [
        'entityLocked',
        'entityLocked'
    ],
    INSUFFICIENT_ACCESS_OR_READONLY: [
        'insufficientAccess',
        'insufficientAccess'
    ],
    INSUFFICIENT_ACCESS_ON_CROSS_REFERENCE_ENTITY: [
        'insufficientAccess',
        'insufficientAccess'
    ],
    NOT_FOUND: [
        'notFound',
        'notFound'
    ]
};
function salesforceErrorTextId(error) {
    const hasFields = (error.fields?.length ?? 0) > 0;
    const texts = CODE_TEXTS[error.errorCode];
    if (texts === null) return null;
    if (texts === undefined) return hasFields ? 'withFields' : null;
    return hasFields ? texts[0] : texts[1];
}
const text = (tr, id, values = {})=>tr(SALESFORCE_ERROR_TEXTS[id].key, {
        defaultValue: SALESFORCE_ERROR_TEXTS[id].de,
        ...values
    });
/** Felder als Liste übersetzter Labels in Anführungszeichen. */ function fieldList(tr, entityText, error) {
    return (error.fields ?? []).map((apiName, i)=>text(tr, 'fieldLabel', {
            label: entityText.text(error.fieldLabels?.[i] ?? apiName)
        })).join(', ');
}
function translateSalesforceError(tr, entityText, error) {
    const id = salesforceErrorTextId(error);
    if (!id) return error.message;
    // #1184: Eine im Nachschlagefilter hinterlegte Fehlermeldung (Salesforce,
    // Feld „Fehlermeldung" am Filter) ist der bessere Satz — nur Salesforce'
    // Standardtext wird durch den eigenen ersetzt.
    if (error.errorCode === 'FIELD_FILTER_VALIDATION_EXCEPTION' && !istStandardFilterText(error.message)) {
        const fields = fieldList(tr, entityText, error);
        return fields ? `${fields}: ${error.message}` : error.message;
    }
    return text(tr, id, {
        fields: fieldList(tr, entityText, error),
        detail: error.message
    });
}
/** Salesforce-Standardtexte des Nachschlagefilters (de/en), ohne eigene Meldung. */ const STANDARD_FILTER_TEXTE = [
    'value does not exist or does not match filter criteria',
    'wert ist nicht vorhanden oder entspricht nicht den filterkriterien',
    'wert ist nicht vorhanden'
];
function istStandardFilterText(message) {
    const m = (message ?? '').trim().toLowerCase().replace(/\.$/, '');
    return m === '' || STANDARD_FILTER_TEXTE.some((s)=>m.startsWith(s));
}
function translateSalesforceRejection(tr, entityText, rejection) {
    if (rejection.status === 404) return text(tr, 'notFound');
    const messages = rejection.errors.map((e)=>translateSalesforceError(tr, entityText, e)).filter(Boolean);
    return messages.length > 0 ? messages.join(' ') : rejection.fallbackMessage ?? '';
}
const salesforceRejectedTitle = (tr)=>text(tr, 'rejected');
const defaultValueTr = (key, options)=>{
    let result = options?.defaultValue ?? key;
    for (const [name, value] of Object.entries(options ?? {})){
        if (name === 'defaultValue' || value === undefined) continue;
        result = result.replace(new RegExp(`\\{\\{${name}\\}\\}`, 'g'), ()=>String(value));
    }
    return result;
};
const identityEntityText = {
    text: (label)=>label
};
function isSalesforceRejection(value) {
    if (!value || typeof value !== 'object') return false;
    const v = value;
    return typeof v.status === 'number' && Array.isArray(v.errors) && v.errors.every((e)=>!!e && typeof e === 'object' && typeof e.errorCode === 'string' && typeof e.message === 'string');
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/utils/soqlSanitizer.ts [app-client] (ecmascript) <export isValidSalesforceId as isSalesforceId>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isSalesforceId",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$utils$2f$soqlSanitizer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidSalesforceId"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$utils$2f$soqlSanitizer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/utils/soqlSanitizer.ts [app-client] (ecmascript)");
}),
]);})()

//# sourceMappingURL=apps_web_src_app_1vs168cqjhpqe._.js.map