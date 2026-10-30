(()=>{"use strict";(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/apps/web/src/lib/a11y/linkPurpose.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "describeLinkTarget",
    ()=>describeLinkTarget,
    "isNonDescriptiveLinkText",
    ()=>isNonDescriptiveLinkText,
    "linkPurposeHint",
    ()=>linkPurposeHint,
    "normalizeLinkText",
    ()=>normalizeLinkText,
    "textOfChildren",
    ()=>textOfChildren
]);
/**
 * #2131: Zweck eines Links mit nichtssagendem Text („hier“, „here“, „Learn
 * more“). Solche Texte kommen auf der öffentlichen Seite aus dem CMS (Fließtext
 * und Knopf-Beschriftungen der Redaktion); geändert werden sie dort. Bis dahin
 * hängt der Renderer einen nur für Screenreader sichtbaren Zusatz an, der das
 * Ziel nennt (Atom `LinkPurpose`) — er steht im `innerText` des Links und damit
 * auch in dem, was Suchmaschinen und Lighthouse (`link-text`) lesen.
 *
 * Rein, ohne React und ohne Browser-API: läuft im Server-Renderer des
 * Fließtexts (SiteMarkdownContent) genauso wie im Browser.
 */ /**
 * Nichtssagende Linktexte, Deutsch und Englisch, kleingeschrieben. Abgeleitet
 * aus der Liste von Lighthouse (`link-text`, Sprachen de und en) plus den
 * Varianten, die die Redaktion nutzt.
 */ const NICHTSSAGEND = new Set([
    // Deutsch
    'hier',
    'hier klicken',
    'klicken sie hier',
    'hier entlang',
    'mehr',
    'mehr dazu',
    'mehr erfahren',
    'mehr infos',
    'mehr informationen',
    'weiter',
    'weiterlesen',
    'link',
    'dieser link',
    'zum link',
    // Englisch
    'here',
    'click here',
    'click this',
    'go',
    'learn more',
    'more',
    'more info',
    'more information',
    'read more',
    'right here',
    'start',
    'this',
    'this link'
]);
function normalizeLinkText(text) {
    return text.replace(/\s+/g, ' ').trim().replace(/^[\s.,;:!?»«„“”"'()[\]…→>-]+|[\s.,;:!?»«„“”"'()[\]…→>-]+$/g, '').toLowerCase();
}
function isNonDescriptiveLinkText(text) {
    const norm = normalizeLinkText(text);
    return norm !== '' && NICHTSSAGEND.has(norm);
}
function textOfChildren(children) {
    if (children === null || children === undefined || typeof children === 'boolean') return '';
    if (typeof children === 'string' || typeof children === 'number') return String(children);
    if (Array.isArray(children)) return children.map(textOfChildren).join('');
    if (typeof children === 'object' && 'props' in children) {
        const props = children.props;
        return textOfChildren(props?.children);
    }
    return '';
}
/** Basis für relative Ziele — nur zum Zerlegen, der Host erscheint nie im Zusatz */ const BASIS = 'https://plastship.invalid';
/** Dateiendungen, die als Art des Ziels genannt werden */ const DATEIARTEN = {
    pdf: 'PDF',
    doc: 'DOC',
    docx: 'DOCX',
    xls: 'XLS',
    xlsx: 'XLSX',
    csv: 'CSV',
    zip: 'ZIP',
    ppt: 'PPT',
    pptx: 'PPTX'
};
function describeLinkTarget(href) {
    if (!href) return null;
    const ziel = href.trim();
    if (ziel === '' || ziel.startsWith('#') || /^(mailto|tel|javascript):/i.test(ziel)) return null;
    let url;
    try {
        url = new URL(ziel, BASIS);
    } catch  {
        return null;
    }
    const teile = url.pathname.split('/').filter(Boolean);
    const letzter = teile.length > 0 ? decodeURIComponent(teile[teile.length - 1]) : '';
    const endung = /\.([a-z0-9]{2,5})$/i.exec(letzter)?.[1]?.toLowerCase();
    const dateiart = endung ? DATEIARTEN[endung] : undefined;
    const extern = url.origin !== BASIS && !/(^|\.)plastship\.(com|de|org)$/i.test(url.hostname);
    const host = url.hostname.replace(/^www\./i, '');
    const teileText = [];
    if (dateiart) teileText.push(dateiart);
    if (extern) {
        teileText.push(host);
    } else if (!dateiart && letzter) {
        teileText.push(letzter.replace(/\.[a-z0-9]{2,5}$/i, '').replace(/[-_]+/g, ' ').trim());
    }
    const text = teileText.filter(Boolean).join(', ');
    return text === '' ? null : text;
}
function linkPurposeHint(text, href) {
    if (!isNonDescriptiveLinkText(text)) return null;
    return describeLinkTarget(href);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/api/rejectionSummary.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * #2075: Was an einer abgewiesenen Anfrage ins Log und nach Sentry darf —
 * Fehlercode und Namen der beanstandeten Felder. Nie Werte, nie Meldungstexte,
 * nie der Body (Regel #1678): aus dem Antwort-Body werden nur Bezeichner
 * übernommen, die wie ein Code bzw. ein Feldname aussehen; alles andere fällt weg.
 *
 * Gelesen werden die Formen, die unsere Routen schicken:
 *   - `{ code, fields }` (z. B. POST /api/plastship/users, #2071)
 *   - `{ code, details: { fields | missing } }` (apiErrorResponse, validateRequiredParams)
 *   - `{ code, details: { errors: [{ fields }] } }` (Salesforce-Ablehnung, #912)
 */ __turbopack_context__.s([
    "MAX_LOGGED_FIELDS",
    ()=>MAX_LOGGED_FIELDS,
    "summarizeRejectedResponse",
    ()=>summarizeRejectedResponse,
    "summarizeRejection",
    ()=>summarizeRejection
]);
/** Fehlercodes: `validation`, `UPSTREAM_REJECTED`, `email-exists` … */ const CODE_PATTERN = /^[A-Za-z][A-Za-z0-9_.:-]{0,63}$/;
/** Feldnamen: `email`, `Account__c`, `address.city` — kein Leerzeichen, kein Wert. */ const FIELD_PATTERN = /^[A-Za-z_][A-Za-z0-9_.]{0,79}$/;
const MAX_LOGGED_FIELDS = 20;
function asRecord(value) {
    return value && typeof value === 'object' && !Array.isArray(value) ? value : null;
}
function fieldNames(value) {
    if (!Array.isArray(value)) return [];
    return value.filter((v)=>typeof v === 'string' && FIELD_PATTERN.test(v));
}
function summarizeRejection(body) {
    const root = asRecord(body);
    if (!root) return {
        fields: []
    };
    const code = typeof root['code'] === 'string' && CODE_PATTERN.test(root['code']) ? root['code'] : undefined;
    const details = asRecord(root['details']);
    const collected = [
        ...fieldNames(root['fields']),
        ...fieldNames(details?.['fields']),
        ...fieldNames(details?.['missing'])
    ];
    const errors = details?.['errors'];
    if (Array.isArray(errors)) {
        for (const entry of errors)collected.push(...fieldNames(asRecord(entry)?.['fields']));
    }
    const fields = Array.from(new Set(collected)).slice(0, MAX_LOGGED_FIELDS);
    return code ? {
        code,
        fields
    } : {
        fields
    };
}
async function summarizeRejectedResponse(response) {
    try {
        const type = response.headers?.get?.('content-type') ?? '';
        if (!type.includes('application/json')) return {
            fields: []
        };
        return summarizeRejection(await response.clone().json());
    } catch  {
        return {
            fields: []
        };
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/cms/cmsReviewTypes.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CMS_REVIEWS_PAGE_PATH",
    ()=>CMS_REVIEWS_PAGE_PATH,
    "CMS_REVIEW_EDITOR_PATHS",
    ()=>CMS_REVIEW_EDITOR_PATHS,
    "CMS_REVIEW_ENTITY_TYPES",
    ()=>CMS_REVIEW_ENTITY_TYPES,
    "CMS_REVIEW_ERROR_CODES",
    ()=>CMS_REVIEW_ERROR_CODES,
    "CMS_REVIEW_MARKS_MAX_IDS",
    ()=>CMS_REVIEW_MARKS_MAX_IDS,
    "CMS_REVIEW_NOTE_MAX",
    ()=>CMS_REVIEW_NOTE_MAX,
    "CMS_REVIEW_NOTIFY_NOTE_MAX",
    ()=>CMS_REVIEW_NOTIFY_NOTE_MAX,
    "CMS_REVIEW_NOTIFY_TITLE_MAX",
    ()=>CMS_REVIEW_NOTIFY_TITLE_MAX,
    "CMS_REVIEW_SCOPES",
    ()=>CMS_REVIEW_SCOPES,
    "CMS_REVIEW_STATUSES",
    ()=>CMS_REVIEW_STATUSES,
    "CMS_REVIEW_STATUS_FILTERS",
    ()=>CMS_REVIEW_STATUS_FILTERS,
    "CMS_REVIEW_WITHDRAWN_REASONS",
    ()=>CMS_REVIEW_WITHDRAWN_REASONS,
    "cmsReviewCreateSchema",
    ()=>cmsReviewCreateSchema,
    "cmsReviewDecideSchema",
    ()=>cmsReviewDecideSchema,
    "cmsReviewEditorPath",
    ()=>cmsReviewEditorPath
]);
/**
 * #1593 Freigabe-Anfragen der Redaktion — gemeinsame Typen und Konstanten für
 * Dienst (lib/cms/cmsReview.ts), Routen und Oberfläche. Ohne Serverabhängigkeiten.
 */ // #1539: im Browser ohne Eval-Probe — vor dem ersten Schema
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$security$2f$zodJitless$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/security/zodJitless.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-client] (ecmascript) <export * as z .string>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-client] (ecmascript) <export * as z .object>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$enum$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-client] (ecmascript) <export * as z .enum>");
;
;
const CMS_REVIEW_ENTITY_TYPES = [
    'page',
    'news',
    'wiki'
];
const CMS_REVIEW_STATUSES = [
    'open',
    'approved',
    'returned',
    'withdrawn'
];
const CMS_REVIEW_NOTE_MAX = 1000;
const CMS_REVIEW_NOTIFY_NOTE_MAX = 120;
const CMS_REVIEW_NOTIFY_TITLE_MAX = 120;
const CMS_REVIEW_MARKS_MAX_IDS = 100;
const CMS_REVIEW_WITHDRAWN_REASONS = [
    'requester',
    'entityDeleted',
    'admin'
];
const CMS_REVIEW_SCOPES = [
    'mine',
    'requested',
    'entity',
    'all'
];
const CMS_REVIEW_STATUS_FILTERS = [
    ...CMS_REVIEW_STATUSES,
    'done'
];
const CMS_REVIEWS_PAGE_PATH = '/cms/reviews';
const CMS_REVIEW_EDITOR_PATHS = {
    page: '/cms/pages',
    news: '/cms/news',
    wiki: '/cms/wiki'
};
function cmsReviewEditorPath(entityType, entityId, reviewId) {
    const basis = `${CMS_REVIEW_EDITOR_PATHS[entityType]}/${encodeURIComponent(entityId)}`;
    return reviewId ? `${basis}?review=${encodeURIComponent(reviewId)}` : basis;
}
const CMS_REVIEW_ERROR_CODES = [
    'notFound',
    'ownRequest',
    'reviewerNotEligible',
    'reviewerCannotSee',
    'alreadyOpen',
    'notReviewer',
    'notRequester',
    'notOpen',
    'noteRequired',
    'noteTooLong',
    'adminOnly'
];
const notiz = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().trim().max(CMS_REVIEW_NOTE_MAX);
const cmsReviewCreateSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
    entityType: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$enum$3e$__["z"].enum(CMS_REVIEW_ENTITY_TYPES),
    entityId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().min(1).max(64),
    reviewerId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$string$3e$__["z"].string().min(1).max(64),
    note: notiz.optional().nullable()
}).strict();
const cmsReviewDecideSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$object$3e$__["z"].object({
    decision: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$enum$3e$__["z"].enum([
        'approved',
        'returned'
    ]),
    note: notiz.optional().nullable()
}).strict();
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/create-from/createFromRegistry.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CREATE_FROM_REGISTRY",
    ()=>CREATE_FROM_REGISTRY,
    "buildDuplicateValues",
    ()=>buildDuplicateValues,
    "buildInitialValues",
    ()=>buildInitialValues,
    "buildLiveFillValues",
    ()=>buildLiveFillValues,
    "getCreateFromConfig",
    ()=>getCreateFromConfig,
    "getLiveFillCandidates",
    ()=>getLiveFillCandidates
]);
/**
 * „Anlegen aus"-Registry (#415) — Duplizieren + Cross-Objekt-Vorbefüllung.
 *
 * EIN generischer Mechanismus + deklarative Config je Objekt (kein Copy-Paste):
 * Die Action-Komponente (#447) liest hier, welche Ziel-Objekte sich aus einem
 * Quell-Datensatz anlegen lassen und welche Felder dabei vorbefüllt werden.
 * Die Werte laufen über die vorhandene Create-Pipeline
 * (openCreateModal({ initialValues }) → EntityModal → GenericEntityForm) —
 * an der Pipeline selbst ist nichts geändert.
 *
 * Richtungs-Regel: Vorbefüllung funktioniert nur, wenn das NEUE (Ziel-)Objekt
 * die Felder trägt. Rückrichtungen ohne Ziel-Lookup (z. B. MP aus Order)
 * stehen bewusst nicht in der Registry. Sonderfall MP→Sample Sending: das SS
 * hat keinen MP-Lookup — stattdessen wird nach dem Speichern das passende
 * MP-Feld per `writeBack` verknüpft (Musterbestellung/Musterversand).
 *
 * WICHTIG: Der volle Quell-Datensatz muss vor dem Öffnen des Modals geladen
 * sein (Drawer-Records sind schlank; GenericEntityForm merged initialValues
 * nur beim Mount) — die Komponente lädt ihn über `entityPath` selbst nach.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/config/entityTypes.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$rbac$2f$updatableFields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/rbac/updatableFields.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$createFormConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/config/createFormConfig.ts [app-client] (ecmascript)");
;
;
;
/** EntityType-Enum-Werte + Legacy-Aliase → SF-API-Namen (wie mailTemplateRegistry). */ const ENTITY_ALIASES = {
    Order: 'Order',
    Auftrag__c: 'Order',
    MaterialProposal: 'Material_Proposal__c',
    Invoice: 'Abrechnung__c',
    SampleSending: 'Sample_Sending__c',
    Requirement: 'Bedarfe__c',
    Project: 'Projekt__c',
    Product: 'Product2'
};
const CREATE_FROM_REGISTRY = {
    Material_Proposal__c: {
        apiName: 'Material_Proposal__c',
        sourceEntityType: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].MaterialProposal,
        entityPath: 'material-proposals',
        // Status resettet auf den Create-Default; die Auto-Nr. (Name) ist readOnly
        // und fällt schon über getCreateableFields raus.
        duplicate: {
            excludeFields: [
                'Status__c'
            ]
        },
        targets: [
            {
                // #1804: MP → Vertrag → Auftrag durchgängig; Vertrag vor Auftrag im Menü
                id: 'contract',
                targetEntityType: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Contract,
                label: 'Vertrag anlegen',
                fieldMap: [
                    {
                        to: 'Material_Proposal__c',
                        from: 'Id'
                    },
                    {
                        to: 'AccountId',
                        from: 'Account__c'
                    },
                    {
                        to: 'Produkt__c',
                        from: 'Product__c'
                    },
                    {
                        to: 'Projektzuordnung__c',
                        from: 'Projekt__c'
                    }
                ]
            },
            {
                id: 'order',
                targetEntityType: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Order,
                label: 'Auftrag anlegen',
                // MP-Preise laufen bewusst NICHT auf den Order-Header — dort sind sie
                // readOnly-Rollups aus den OrderItems.
                fieldMap: [
                    {
                        to: 'Material_Proposal__c',
                        from: 'Id'
                    },
                    {
                        to: 'AccountId',
                        from: 'Account__c'
                    },
                    {
                        to: 'Lieferant__c',
                        from: 'Supplier__c'
                    },
                    {
                        to: 'Zust_ndiger_Kontakt_Lieferant__c',
                        from: 'Supplier_Contact__c'
                    },
                    {
                        to: 'Produktionsstandort__c',
                        from: 'Loading_Location__c'
                    },
                    {
                        to: 'Produktion_Delivery__c',
                        from: 'Delivery_Location__c'
                    },
                    {
                        to: 'Transporteur_NEU__c',
                        from: 'Carrier__c'
                    },
                    {
                        to: 'Transporteur_Ansprechpartner_NEU__c',
                        from: 'Carrier_Contact__c'
                    },
                    {
                        to: 'Produkt__c',
                        from: 'Product__c'
                    },
                    {
                        to: 'Incoterm__c',
                        from: 'Delivery_Terms_Offer__c'
                    },
                    {
                        to: 'Projekt__c',
                        from: 'Projekt__c'
                    },
                    {
                        to: 'CustomerAuthorizedById',
                        from: 'Account_Contact__c'
                    }
                ],
                // #447: Auftragsprodukte gehören zu JEDEM Auftrag — die MP-Preise
                // landen hier (Order-Header-Preise sind readOnly-Rollups).
                relatedObjectsSeed: {
                    relatedEntityType: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].OrderItem,
                    fieldMap: [
                        {
                            to: 'Product2Id',
                            from: 'Product__c'
                        },
                        {
                            to: '_Product2Id_label',
                            from: 'Product__r.Name'
                        },
                        {
                            to: 'UnitPrice',
                            from: 'Sales_Price_per_ton__c'
                        },
                        {
                            to: 'Einkaufspreis_pro_t__c',
                            from: 'Purchasing_price_per_ton__c'
                        },
                        {
                            to: 'Quantity',
                            from: 'Tonnage_per_truck__c'
                        }
                    ]
                }
            },
            {
                id: 'ss-musterbestellung',
                targetEntityType: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].SampleSending,
                label: 'Musterbestellung anlegen',
                // Lieferant → plastship; das MP trägt die SS-Lookups, daher Write-back.
                fieldMap: [
                    {
                        to: 'Typ__c',
                        value: 'Order'
                    },
                    {
                        to: 'Load_from__c',
                        from: 'Supplier__c'
                    },
                    {
                        to: 'Loading_Produktion__c',
                        from: 'Loading_Location__c'
                    },
                    {
                        to: 'Produkt__c',
                        from: 'Product__c'
                    },
                    {
                        to: 'Carrier__c',
                        from: 'Carrier__c'
                    },
                    {
                        to: 'Carrier_Contact__c',
                        from: 'Carrier_Contact__c'
                    },
                    {
                        to: 'Projekt__c',
                        from: 'Projekt__c'
                    }
                ],
                writeBack: {
                    sourceField: 'Sample_Order_from_Supplier__c'
                }
            },
            {
                id: 'ss-musterversand',
                targetEntityType: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].SampleSending,
                label: 'Musterversand anlegen',
                // plastship → Kunde. Transportfelder bewusst NICHT vom MP übernommen
                // (AB-Review: Muster gehen per Paketdienst, nicht mit dem MP-Carrier;
                // DPD-Vorbelegung braucht eine env-stabile Account-Referenz → offen).
                fieldMap: [
                    {
                        to: 'Typ__c',
                        value: 'Sending'
                    },
                    {
                        to: 'Deliver_to__c',
                        from: 'Account__c'
                    },
                    {
                        to: 'Delivery_Produktion__c',
                        from: 'Delivery_Location__c'
                    },
                    {
                        to: 'Kontakt_Anlieferung__c',
                        from: 'Account_Contact__c'
                    },
                    {
                        to: 'Load_from__c',
                        from: 'Supplier__c'
                    },
                    {
                        to: 'Produkt__c',
                        from: 'Product__c'
                    },
                    {
                        to: 'Projekt__c',
                        from: 'Projekt__c'
                    }
                ],
                writeBack: {
                    sourceField: 'Sample_Sending_to_Account__c'
                }
            }
        ]
    },
    Order: {
        apiName: 'Order',
        sourceEntityType: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Order,
        entityPath: 'order',
        duplicate: {
            // #464 (AB 2026-07-18): ausführungsspezifische Angaben werden NICHT
            // kopiert — Truck-Nr., Bestellnummer (PoNumber), Wiegescheine und der
            // Dokumentencheck gehören zur einzelnen Lieferung, nicht zur Vorlage.
            // Abrechnungen werden ohnehin nie mitkopiert (kein Seed), die
            // Auftragsprodukte sehr wohl (relatedObjectsSeed unten).
            excludeFields: [
                'Status',
                'Truck_Nr__c',
                'PoNumber',
                'Wiegeschein_Kunde_t__c',
                'Wiegeschein_Kunde_Nr__c',
                'Wiegeschein_Lieferant_t__c',
                'Wiegeschein_Lieferant_Nr__c',
                'Document_Order_attached__c',
                'Document_Order_Confirmation_attached__c',
                'Document_Order_to_Supplier_attached__c',
                'Document_Transport_Order_attached__c',
                'Document_Pickup_Note_attached__c',
                'Document_Delivery_Note_attached__c',
                'Document_Weighing_Note_Supplier_attached__c',
                'Document_Weighing_Note_Customer_attached__c'
            ],
            // #1808: Vertrag wird mitkopiert (Folgeauftrag ist der Normalfall); Kundenwechsel leert ihn über dependsOn an Order.ContractId
            batch: true,
            createDefaults: {
                Status: 'Draft'
            },
            // #447: Positionen der Quelle mitkopieren (ohne Batchnummer — neue Charge).
            relatedObjectsSeed: {
                relatedEntityType: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].OrderItem,
                fromRelationship: 'OrderItems',
                copyFields: [
                    'Product2Id',
                    {
                        from: 'Produktcode__c',
                        to: '_Product2Id_label'
                    },
                    'Quantity',
                    'UnitPrice',
                    'Einkaufspreis_pro_t__c',
                    'Description'
                ]
            }
        },
        targets: [
            {
                id: 'invoice',
                targetEntityType: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Invoice,
                label: 'Abrechnung anlegen',
                // Rechnungstyp__c bewusst leer (Eingang/Ausgang nicht ableitbar);
                // Rechnungsbetrag ist ein editierbarer Vorschlag aus dem Auftragswert.
                fieldMap: [
                    {
                        to: 'Auftrag__c',
                        from: 'Id'
                    },
                    {
                        to: 'Account__c',
                        from: 'AccountId'
                    },
                    {
                        to: 'Ust__c',
                        from: 'Ust__c'
                    },
                    {
                        to: 'Kostenstelle__c',
                        from: 'Kostenstelle__c'
                    },
                    {
                        to: 'Rechnungsbetrag__c',
                        from: 'TotalAmount'
                    }
                ]
            },
            {
                id: 'reklamation',
                targetEntityType: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Reklamation,
                label: 'Reklamation anlegen',
                // #450 Welle 2
                fieldMap: [
                    {
                        to: 'Ausl_sender_Auftrag__c',
                        from: 'Id'
                    },
                    {
                        to: 'Account__c',
                        from: 'AccountId'
                    },
                    {
                        to: 'Kontakt__c',
                        from: 'CustomerAuthorizedById'
                    }
                ],
                // #1443: der Auftrag trägt das Gegenstück (Order.Reklamation__c) —
                // nach dem Speichern auf die neue Reklamation zeigen lassen.
                writeBack: {
                    sourceField: 'Reklamation__c'
                }
            }
        ]
    },
    Contract: {
        apiName: 'Contract',
        sourceEntityType: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Contract,
        entityPath: 'contract',
        targets: [
            {
                // #1805: Auftrag zum Vertrag — nur aktivierte Verträge nimmt Salesforce an
                id: 'order',
                targetEntityType: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Order,
                label: 'Auftrag anlegen',
                fieldMap: [
                    {
                        to: 'ContractId',
                        from: 'Id'
                    },
                    {
                        to: 'AccountId',
                        from: 'AccountId'
                    },
                    {
                        to: 'Produkt__c',
                        from: 'Produkt__c'
                    },
                    {
                        to: 'Material_Proposal__c',
                        from: 'Material_Proposal__c'
                    },
                    {
                        to: 'Projekt__c',
                        from: 'Projektzuordnung__c'
                    }
                ],
                warnUnless: {
                    field: 'Status',
                    value: 'Activated',
                    message: 'Der Vertrag ist noch nicht aktiviert — Salesforce lehnt den Auftrag bis zur Aktivierung ab.'
                }
            }
        ]
    },
    Abrechnung__c: {
        apiName: 'Abrechnung__c',
        sourceEntityType: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Invoice,
        entityPath: 'invoice',
        // Duplicate_Of__c ist das zweckgebaute SF-Feld für genau diesen Fall.
        duplicate: {
            excludeFields: [
                'Status_der_Abrechnung__c',
                'Belegnummer__c'
            ],
            extraMappings: [
                {
                    to: 'Duplicate_Of__c',
                    from: 'Id'
                }
            ]
        },
        targets: []
    },
    Bedarfe__c: {
        apiName: 'Bedarfe__c',
        sourceEntityType: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Requirement,
        entityPath: 'requirement',
        targets: [
            {
                id: 'material-proposal',
                targetEntityType: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].MaterialProposal,
                label: 'Material Proposal anlegen',
                // Materialprofil-Picklists sind nicht mappbar — das MP modelliert
                // Material über den Product-Lookup.
                fieldMap: [
                    {
                        to: 'F_r_Bedarf__c',
                        from: 'Id'
                    },
                    {
                        to: 'Account__c',
                        from: 'Account__c'
                    },
                    {
                        to: 'Projekt__c',
                        from: 'Projekt__c'
                    },
                    {
                        to: 'Kundenvorgang__c',
                        from: 'Kundenvorgang__c'
                    },
                    {
                        to: 'Amount_monthly_t_offered__c',
                        from: 'Monatsbedarf_t__c'
                    },
                    {
                        to: 'Sales_Price_per_ton__c',
                        from: 'Zielpreis__c'
                    }
                ]
            }
        ]
    },
    // Sample Sending hat bewusst KEINEN Eintrag: SS→Materialanalyse/→MP ist
    // eine Zuordnung BESTEHENDER Datensätze (mehrere je SS) und läuft über
    // „Hinzufügen zu" (#417), nicht über Anlegen-aus (AB-Review 2026-07-13).
    //
    // #450 Welle 2: Case als Lead-artiger Einstieg — aus dem Kundenvorgang die
    // Folge-Objekte anlegen; die Case-Lookups werden per Write-back verknüpft.
    Case: {
        apiName: 'Case',
        sourceEntityType: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Case,
        entityPath: 'case',
        targets: [
            {
                id: 'account',
                targetEntityType: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Account,
                label: 'Account anlegen',
                // Account trägt keine Lookups — nichts vorzubefüllen, aber der neue
                // Account wird am Case verknüpft.
                fieldMap: [],
                writeBack: {
                    sourceField: 'AccountId'
                }
            },
            {
                id: 'contact',
                targetEntityType: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Contact,
                label: 'Kontakt anlegen',
                fieldMap: [
                    {
                        to: 'AccountId',
                        from: 'AccountId'
                    }
                ],
                writeBack: {
                    sourceField: 'ContactId'
                }
            },
            {
                id: 'requirement',
                targetEntityType: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Requirement,
                label: 'Bedarf anlegen',
                fieldMap: [
                    {
                        to: 'Account__c',
                        from: 'AccountId'
                    },
                    {
                        to: 'Kundenvorgang__c',
                        from: 'Id'
                    }
                ],
                writeBack: {
                    sourceField: 'Bedarfe__c'
                }
            },
            {
                id: 'product',
                targetEntityType: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Product,
                label: 'Produkt anlegen',
                fieldMap: [
                    {
                        to: 'Account__c',
                        from: 'AccountId'
                    }
                ],
                writeBack: {
                    sourceField: 'Produkt__c'
                }
            },
            {
                id: 'onboarding',
                targetEntityType: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Onboarding,
                label: 'Onboarding anlegen',
                fieldMap: [
                    {
                        to: 'Kundenvorgang__c',
                        from: 'Id'
                    },
                    {
                        to: 'Account__c',
                        from: 'AccountId'
                    },
                    {
                        to: 'Kontakt__c',
                        from: 'ContactId'
                    }
                ],
                writeBack: {
                    sourceField: 'Onboarding__c'
                }
            },
            {
                id: 'contact-handover',
                targetEntityType: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].ContactHandover,
                label: 'Kontaktübergabe anlegen',
                // Kein Write-back — die Kontaktübergabe trägt den Case-Lookup selbst.
                fieldMap: [
                    {
                        to: 'Kundenvorgang__c',
                        from: 'Id'
                    },
                    {
                        to: 'Account_bergeben__c',
                        from: 'AccountId'
                    },
                    {
                        to: 'Kontakt_bergeben__c',
                        from: 'ContactId'
                    }
                ]
            },
            {
                id: 'material-proposal',
                targetEntityType: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].MaterialProposal,
                label: 'Material Proposal anlegen',
                // #1784: Kein Write-back — das MP trägt den Case-Lookup selbst
                // (Kundenvorgang__c). Bedarf/Produkt nur, wenn am Case schon gesetzt.
                fieldMap: [
                    {
                        to: 'Kundenvorgang__c',
                        from: 'Id'
                    },
                    {
                        to: 'Account__c',
                        from: 'AccountId'
                    },
                    {
                        to: 'Account_Contact__c',
                        from: 'ContactId'
                    },
                    {
                        to: 'F_r_Bedarf__c',
                        from: 'Bedarfe__c'
                    },
                    {
                        to: 'Product__c',
                        from: 'Produkt__c'
                    }
                ]
            }
        ]
    },
    // #450 Welle 2
    Projekt__c: {
        apiName: 'Projekt__c',
        sourceEntityType: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Project,
        entityPath: 'project',
        targets: [
            {
                // #907: Vertrag aus dem Projekt — Projektzuordnung (#842) + Hauptkunde vorbelegt
                id: 'contract',
                targetEntityType: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Contract,
                label: 'Vertrag anlegen',
                fieldMap: [
                    {
                        to: 'Projektzuordnung__c',
                        from: 'Id'
                    },
                    {
                        to: 'AccountId',
                        from: 'Hauptkunde__c'
                    }
                ]
            },
            {
                id: 'material-proposal',
                targetEntityType: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].MaterialProposal,
                label: 'Material Proposal anlegen',
                fieldMap: [
                    {
                        to: 'Projekt__c',
                        from: 'Id'
                    },
                    {
                        to: 'Account__c',
                        from: 'Hauptkunde__c'
                    },
                    {
                        to: 'Supplier__c',
                        from: 'Hauptlieferant__c'
                    },
                    {
                        to: 'Product__c',
                        from: 'Produkt__c'
                    },
                    {
                        to: 'F_r_Bedarf__c',
                        from: 'Bedarfe__c'
                    }
                ]
            },
            {
                id: 'sample-sending',
                targetEntityType: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].SampleSending,
                label: 'Sample Sending anlegen',
                // Richtung (Bestellung/Versand) offen — nur die eindeutigen Bezüge.
                fieldMap: [
                    {
                        to: 'Projekt__c',
                        from: 'Id'
                    },
                    {
                        to: 'Produkt__c',
                        from: 'Produkt__c'
                    },
                    {
                        to: 'Loading_Produktion__c',
                        from: 'Loading_Site__c'
                    }
                ]
            }
        ]
    },
    // #450 Welle 2: der Produkt-Account ist der Produzent/Lieferant.
    Product2: {
        apiName: 'Product2',
        sourceEntityType: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Product,
        entityPath: 'product',
        targets: [
            {
                id: 'material-proposal',
                targetEntityType: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].MaterialProposal,
                label: 'Material Proposal anlegen',
                fieldMap: [
                    {
                        to: 'Product__c',
                        from: 'Id'
                    },
                    {
                        to: 'Supplier__c',
                        from: 'Account__c'
                    },
                    {
                        to: 'Loading_Location__c',
                        from: 'Produktionsstandort__c'
                    }
                ]
            },
            {
                id: 'material-analysis',
                targetEntityType: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].MaterialAnalysis,
                label: 'Materialanalyse anlegen',
                fieldMap: [
                    {
                        to: 'Material_ID__c',
                        from: 'Id'
                    }
                ]
            }
        ]
    },
    Account: {
        apiName: 'Account',
        sourceEntityType: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Account,
        entityPath: 'account',
        // PO-Priorisierung: Account-Management-Objekte zuerst, dann Lohn/Produkt/Bedarf.
        targets: [
            {
                id: 'supplier-audit',
                targetEntityType: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].SupplierAudit,
                label: 'Supplier Audit anlegen',
                fieldMap: [
                    {
                        to: 'Account__c',
                        from: 'Id'
                    }
                ]
            },
            {
                id: 'company-certificate',
                targetEntityType: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].CompanyCertificate,
                label: 'Unternehmenszertifikat anlegen',
                fieldMap: [
                    {
                        to: 'Account__c',
                        from: 'Id'
                    }
                ]
            },
            {
                // #907: Vertrag zum Account — Account vorbelegt
                id: 'contract',
                targetEntityType: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Contract,
                label: 'Vertrag anlegen',
                fieldMap: [
                    {
                        to: 'AccountId',
                        from: 'Id'
                    }
                ]
            },
            {
                id: 'production-site',
                targetEntityType: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].ProductionSite,
                label: 'Produktionsstandort anlegen',
                // #450 Welle 2
                fieldMap: [
                    {
                        to: 'Account__c',
                        from: 'Id'
                    }
                ]
            },
            {
                id: 'lohn',
                targetEntityType: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Lohn,
                label: 'Lohn anlegen',
                fieldMap: [
                    {
                        to: 'Account__c',
                        from: 'Id'
                    }
                ]
            },
            {
                id: 'product',
                targetEntityType: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Product,
                label: 'Produkt anlegen',
                fieldMap: [
                    {
                        to: 'Account__c',
                        from: 'Id'
                    }
                ]
            },
            {
                id: 'requirement',
                targetEntityType: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Requirement,
                label: 'Bedarf anlegen',
                fieldMap: [
                    {
                        to: 'Account__c',
                        from: 'Id'
                    }
                ]
            }
        ]
    }
};
function getCreateFromConfig(entityTypeOrApiName) {
    const apiName = ENTITY_ALIASES[entityTypeOrApiName] ?? entityTypeOrApiName;
    return CREATE_FROM_REGISTRY[apiName];
}
/** Wert aus dem Quell-Record auflösen, inkl. Lookup-Traversal ('X__r.Name'). */ function resolveSourceValue(record, path) {
    return path.split('.').reduce((current, segment)=>{
        if (current && typeof current === 'object') {
            return current[segment];
        }
        return undefined;
    }, record);
}
/** true für Werte, die NICHT vorbefüllt werden (SF-Create verträgt kein null). */ function isEmptyValue(value) {
    return value === undefined || value === null || value === '';
}
function buildInitialValues(target, sourceRecord) {
    return {
        ...applyMappings(target.fieldMap, sourceRecord),
        ...buildRelatedObjectsSeed(target.relatedObjectsSeed, sourceRecord)
    };
}
/**
 * `_relatedObjects`-Seed für den Verknüpfungs-Wizard-Schritt bauen (#447).
 * Leere Positionen werden verworfen; ohne Positionen bleibt der Key weg
 * (GenericEntityForm behält dann sein leeres Default).
 */ function buildRelatedObjectsSeed(seed, sourceRecord) {
    if (!seed) return {};
    let rows = [];
    if (seed.fieldMap) {
        rows = [
            applyMappings(seed.fieldMap, sourceRecord)
        ];
    } else if (seed.fromRelationship) {
        const relationship = sourceRecord[seed.fromRelationship];
        const children = Array.isArray(relationship) ? relationship : relationship?.records ?? [];
        rows = children.map((child)=>{
            const row = {};
            for (const field of seed.copyFields ?? []){
                const from = typeof field === 'string' ? field : field.from;
                const to = typeof field === 'string' ? field : field.to;
                if (!isEmptyValue(child[from])) row[to] = child[from];
            }
            return row;
        });
    }
    rows = rows.filter((row)=>Object.keys(row).length > 0);
    if (rows.length === 0) return {};
    return {
        _relatedObjects: {
            [seed.relatedEntityType]: rows
        }
    };
}
function applyMappings(mappings, sourceRecord) {
    const values = {};
    for (const mapping of mappings){
        const value = mapping.from !== undefined ? resolveSourceValue(sourceRecord, mapping.from) : mapping.value;
        if (!isEmptyValue(value)) {
            values[mapping.to] = value;
        }
    }
    return values;
}
function getLiveFillCandidates(formEntityType) {
    const candidates = [];
    const seen = new Set();
    for (const config of Object.values(CREATE_FROM_REGISTRY)){
        for (const target of config.targets){
            if (target.targetEntityType !== formEntityType) continue;
            const backLink = target.fieldMap.find((mapping)=>mapping.from === 'Id');
            if (!backLink) continue;
            const rest = target.fieldMap.filter((mapping)=>mapping !== backLink);
            if (rest.length === 0 && !target.relatedObjectsSeed) continue;
            // Erst-Treffer gewinnt — der Drift-Guard hält die Paare eindeutig.
            if (seen.has(backLink.to)) continue;
            seen.add(backLink.to);
            candidates.push({
                lookupField: backLink.to,
                entityPath: config.entityPath,
                fieldMap: rest,
                relatedObjectsSeed: target.relatedObjectsSeed
            });
        }
    }
    return candidates;
}
function buildLiveFillValues(candidate, sourceRecord) {
    return {
        ...applyMappings(candidate.fieldMap, sourceRecord),
        ...buildRelatedObjectsSeed(candidate.relatedObjectsSeed, sourceRecord)
    };
}
function buildDuplicateValues(config, sourceRecord, options = {}) {
    if (!config.duplicate) return {};
    const hiddenInCreate = new Set((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$createFormConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEntityFormConfig"])(config.sourceEntityType)?.hiddenInCreate ?? []);
    const excluded = new Set([
        ...config.duplicate.excludeFields,
        ...options.batch ? [] : config.duplicate.formOnlyExcludeFields ?? []
    ]);
    const values = {};
    for (const apiName of (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$rbac$2f$updatableFields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCreateableFields"])(config.apiName)){
        if (hiddenInCreate.has(apiName) || excluded.has(apiName)) continue;
        const value = sourceRecord[apiName];
        if (!isEmptyValue(value)) {
            values[apiName] = value;
        }
    }
    return {
        ...values,
        ...config.duplicate.createDefaults ?? {},
        ...applyMappings(config.duplicate.extraMappings ?? [], sourceRecord),
        ...buildRelatedObjectsSeed(config.duplicate.relatedObjectsSeed, sourceRecord)
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/finance/eingangsbelegeZugriff.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EINGANGSBELEGE_PFAD",
    ()=>EINGANGSBELEGE_PFAD,
    "EINGANGSBELEGE_RECHTE",
    ()=>EINGANGSBELEGE_RECHTE,
    "EINGANGSBELEGE_ROLLEN",
    ()=>EINGANGSBELEGE_ROLLEN,
    "darfEingangsbelegeOeffnen",
    ()=>darfEingangsbelegeOeffnen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$rbac$2f$permissions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/rbac/permissions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$rbac$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/rbac/constants.ts [app-client] (ecmascript)");
;
;
const EINGANGSBELEGE_PFAD = '/finance/eingangsbelege';
const EINGANGSBELEGE_ROLLEN = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$rbac$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FINANCE_WORKFLOW_ROLES"];
const EINGANGSBELEGE_RECHTE = [
    {
        resource: 'Case',
        aktion: 'edit'
    },
    {
        resource: 'Abrechnung__c',
        aktion: 'edit'
    }
];
function darfEingangsbelegeOeffnen(userContext) {
    if (!userContext) return false;
    if (!EINGANGSBELEGE_ROLLEN.includes(userContext.role)) return false;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$rbac$2f$permissions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasObjectAccess"])(userContext, 'Finance', 'view') && EINGANGSBELEGE_RECHTE.every((recht)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$rbac$2f$permissions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasObjectAccess"])(userContext, recht.resource, recht.aktion));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/i18n/i18nText.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * #1626: Anzeigetext, den der Server baut, als Schlüssel + Platzhalter.
 *
 * Server-Module, die Sätze für die Oberfläche zusammensetzen (Sentry-Regeln,
 * Bewertungs-Hinweise …), liefern neben dem deutschen Satz ein `I18nText`.
 * Der Client übersetzt es mit seinem `tr` in der Sprache des Lesers; der
 * deutsche Satz bleibt für bestehende Abnehmer. Platzhalter dürfen selbst
 * `I18nText` sein (z. B. „1 Tag“ in „mehr als 20 Ereignisse in 1 Tag“) — sie
 * werden zuerst aufgelöst.
 *
 * Rein, ohne React und ohne Next: läuft auf Server und Client.
 */ __turbopack_context__.s([
    "defaultValueTr",
    ()=>defaultValueTr,
    "germanText",
    ()=>germanText,
    "i18nText",
    ()=>i18nText,
    "resolveI18nText",
    ()=>resolveI18nText
]);
function i18nText(key, defaultValue, params) {
    return params ? {
        key,
        defaultValue,
        params
    } : {
        key,
        defaultValue
    };
}
const defaultValueTr = (key, options)=>{
    let text = typeof options?.defaultValue === 'string' ? options.defaultValue : key;
    for (const [name, wert] of Object.entries(options ?? {})){
        if (name === 'defaultValue' || wert === undefined) continue;
        text = text.replace(new RegExp(`\\{\\{${name}\\}\\}`, 'g'), ()=>String(wert));
    }
    return text;
};
function isI18nText(v) {
    return !!v && typeof v === 'object' && typeof v.key === 'string' && typeof v.defaultValue === 'string';
}
function resolveI18nText(tr, t) {
    if (typeof t === 'string') return t;
    const params = {};
    for (const [name, wert] of Object.entries(t.params ?? {})){
        params[name] = isI18nText(wert) ? resolveI18nText(tr, wert) : wert;
    }
    try {
        return tr(t.key, {
            ...params,
            defaultValue: t.defaultValue
        });
    } catch  {
        return defaultValueTr(t.key, {
            ...params,
            defaultValue: t.defaultValue
        });
    }
}
function germanText(t) {
    return resolveI18nText(defaultValueTr, t);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/logScrub.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * #1678: Geheimnisse gehören in kein Log.
 *
 * Passwörter, Tokens und Schlüssel stehen nie im Klartext in einer Logzeile —
 * und auch nicht maskiert in ihrer Länge: Sternchen je Zeichen verraten, wie
 * lang ein Passwort ist. Ersetzt wird immer durch denselben festen Platzhalter.
 *
 * Zwei Stellen nutzen das:
 * - der Logger (app/lib/logger.ts) für JEDE Zeile: Nachricht, Kontext,
 *   Metadaten, Fehlertext. Das ist das Netz für alle Aufrufer.
 * - die API-Schicht (app/lib/apiMiddleware.ts) für die Vorschau des
 *   Anfrage-Bodys: geschwärzt wird VOR dem Kürzen, sonst bliebe ein
 *   abgeschnittenes Passwort ohne schließendes Anführungszeichen stehen.
 *
 * Rein und ohne Server-Importe — der Logger läuft auch im Browser.
 */ /** Der eine Platzhalter. Feste Länge, kein Bezug zum ersetzten Wert. */ __turbopack_context__.s([
    "LOG_REDACTED",
    ()=>LOG_REDACTED,
    "describeRequestBodyForLog",
    ()=>describeRequestBodyForLog,
    "hasSecretLogKey",
    ()=>hasSecretLogKey,
    "isSecretLogKey",
    ()=>isSecretLogKey,
    "scrubLogString",
    ()=>scrubLogString,
    "scrubLogValue",
    ()=>scrubLogValue
]);
const LOG_REDACTED = '[entfernt]';
/** Wörter im Feldnamen, die ein Geheimnis ankündigen. */ const SECRET_WORDS = new Set([
    'password',
    'passwort',
    'passwd',
    'passphrase',
    'pwd',
    'secret',
    'token',
    'authorization',
    'cookie',
    'totp',
    'otp',
    'credential',
    'credentials',
    'apikey',
    // #1916: Auktions-Schnittstelle — Signatur, Nonce und HMAC eines Aufrufs
    // (`X-Plastship-Signature`, `X-Plastship-Nonce`) sind so geheim wie der Schlüssel
    'signature',
    'nonce',
    'hmac'
]);
/**
 * Letztes Wort des Feldnamens, das aus dem Geheimnis einen bloßen Zustand
 * macht: `passwordStatus`, `tokenCount`, `mustChangePassword…At`. Solche
 * Felder beschreiben das Geheimnis, sie tragen es nicht.
 */ const HARMLESS_LAST_WORDS = new Set([
    'status',
    'state',
    'required',
    'enabled',
    'policy',
    'type',
    'count',
    'length',
    'expires',
    'expiry',
    'at',
    'in',
    'id',
    'ids',
    'name',
    'names',
    'label',
    'field',
    'fields',
    'error',
    'errors',
    'reason',
    'valid',
    'strength',
    'source',
    'usage',
    'limit',
    'hint',
    'changed',
    'set',
    'age',
    'ttl',
    'consent',
    'header'
]);
/** Feldname in Wörter: `newPassword`, `api_key`, `x-pdf-service-token`. */ function words(key) {
    return key.replace(/([a-z0-9])([A-Z])/g, '$1 $2').toLowerCase().split(/[^a-z0-9]+/).filter(Boolean);
}
function isSecretLogKey(key) {
    const w = words(key);
    if (w.length === 0) return false;
    if (HARMLESS_LAST_WORDS.has(w[w.length - 1])) return false;
    for(let i = 0; i < w.length; i++){
        if (SECRET_WORDS.has(w[i])) return true;
        // api key, private key, access key, secret key
        if (w[i] === 'key' && i > 0 && [
            'api',
            'private',
            'access',
            'signing'
        ].includes(w[i - 1])) {
            return true;
        }
    }
    return false;
}
/** Billige Vorprüfung, bevor die teureren Muster laufen. */ const MAYBE_SECRET = /pass|pwd|secret|token|authoriz|cookie|otp|credential|key|signature|nonce|hmac/i;
/** JSON-Paar mit Textwert: `"key":"wert"` — auch am Ende abgeschnitten. */ const JSON_PAIR = /"([A-Za-z0-9_.\- ]{1,60})"(\s*:\s*)"((?:[^"\\]|\\.)*)("|$)/g;
/** JSON-Paar mit Zahl: `"otp":123456`. */ const JSON_NUMBER_PAIR = /"([A-Za-z0-9_.\- ]{1,60})"(\s*:\s*)(-?[0-9][0-9.eE+-]*)/g;
/**
 * Dasselbe eine Ebene tiefer: JSON, das selbst als Text in JSON steht
 * (`\"key\":\"wert\"`), z. B. ein Body in einem Metadatenfeld.
 */ const ESCAPED_JSON_PAIR = /\\"([A-Za-z0-9_.\- ]{1,60})\\"(\s*:\s*)\\"((?:(?!\\").)*)(\\"|$)/g;
/** Formular- und Query-Paare: `password=wert`, `?token=wert&…`. */ const FORM_PAIR = /(^|[?&;#\s])([A-Za-z0-9_.\-[\]]{1,60})=([^&#;\s"'<>]*)/g;
/** Kopfzeilen im Fließtext. */ const AUTH_HEADER = /\b(authorization|proxy-authorization|cookie|set-cookie)(\s*[:=]\s*)([^\r\n"']+)/gi;
function scrubLogString(text) {
    if (text.length === 0 || !MAYBE_SECRET.test(text)) return text;
    return text.replace(ESCAPED_JSON_PAIR, (match, key, sep, value, end)=>value.length > 0 && isSecretLogKey(key) ? `\\"${key}\\"${sep}\\"${LOG_REDACTED}${end}` : match).replace(JSON_PAIR, (match, key, sep, value, end)=>value.length > 0 && isSecretLogKey(key) ? `"${key}"${sep}"${LOG_REDACTED}${end}` : match).replace(JSON_NUMBER_PAIR, (match, key, sep)=>isSecretLogKey(key) ? `"${key}"${sep}"${LOG_REDACTED}"` : match).replace(FORM_PAIR, (match, lead, key, value)=>value.length > 0 && isSecretLogKey(key) ? `${lead}${key}=${LOG_REDACTED}` : match).replace(AUTH_HEADER, (_match, name, sep)=>`${name}${sep}${LOG_REDACTED}`);
}
const MAX_DEPTH = 8;
function scrub(value, depth, seen) {
    if (typeof value === 'string') return scrubLogString(value);
    if (value === null || typeof value !== 'object') return value;
    if (value instanceof Date || value instanceof Error) return value;
    if (seen.has(value) || depth >= MAX_DEPTH) return value;
    seen.add(value);
    if (Array.isArray(value)) return value.map((item)=>scrub(item, depth + 1, seen));
    const out = {};
    for (const [key, inner] of Object.entries(value)){
        if (isSecretLogKey(key) && isSecretValue(inner)) {
            out[key] = LOG_REDACTED;
        } else {
            out[key] = scrub(inner, depth + 1, seen);
        }
    }
    return out;
}
/** Unter einem Geheimnis-Feld wird alles ersetzt, was ein Wert sein kann — Schalter und Leeres bleiben. */ function isSecretValue(value) {
    if (typeof value === 'string') return value.length > 0;
    if (typeof value === 'number' || typeof value === 'bigint') return true;
    if (Array.isArray(value)) return value.length > 0;
    return typeof value === 'object' && value !== null;
}
function scrubLogValue(value) {
    return scrub(value, 0, new WeakSet());
}
function hasSecretLogKey(value, depth = 0) {
    if (value === null || typeof value !== 'object' || depth >= MAX_DEPTH) return false;
    if (Array.isArray(value)) return value.some((item)=>hasSecretLogKey(item, depth + 1));
    return Object.entries(value).some(([key, inner])=>isSecretLogKey(key) && isSecretValue(inner) || hasSecretLogKey(inner, depth + 1));
}
const PREVIEW_LENGTH = 500;
/** Größere Bodys (Uploads) werden nicht zerlegt — sie bekommen nie eine Vorschau. */ const MAX_PARSE_LENGTH = 256 * 1024;
function describeRequestBodyForLog(body, contentType) {
    const type = (contentType ?? '').split(';')[0].trim().toLowerCase();
    // Auch ohne passenden Content-Type: was sich als JSON lesen lässt, ist JSON.
    const looksLikeJson = type.includes('json') || /^\s*[[{]/.test(body);
    if (looksLikeJson && body.length <= MAX_PARSE_LENGTH) {
        try {
            const parsed = JSON.parse(body);
            const secret = hasSecretLogKey(parsed);
            const preview = JSON.stringify(scrubLogValue(parsed)).substring(0, PREVIEW_LENGTH);
            return secret ? {
                hasRequestBody: true,
                requestBodyPreview: preview,
                requestBodyRedacted: true
            } : {
                hasRequestBody: true,
                requestBodySize: body.length,
                requestBodyPreview: preview
            };
        } catch  {
        // kein gültiges JSON — wie jeder andere Body: kein Inhalt
        }
    }
    if (type === 'application/x-www-form-urlencoded') {
        const secret = [
            ...new URLSearchParams(body).keys()
        ].some(isSecretLogKey);
        return secret ? {
            hasRequestBody: true,
            requestBodyType: type,
            requestBodyRedacted: true
        } : {
            hasRequestBody: true,
            requestBodySize: body.length,
            requestBodyType: type
        };
    }
    // Unbekannte Form: steckt ein Geheimnis-Wort darin, bleibt auch die Größe weg.
    return MAYBE_SECRET.test(body.substring(0, MAX_PARSE_LENGTH)) && scrubLogString(body.substring(0, MAX_PARSE_LENGTH)) !== body.substring(0, MAX_PARSE_LENGTH) ? {
        hasRequestBody: true,
        requestBodyType: type || 'unbekannt',
        requestBodyRedacted: true
    } : {
        hasRequestBody: true,
        requestBodySize: body.length,
        requestBodyType: type || 'unbekannt'
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/rbac/constants.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * RBAC taxonomy — single source of truth (#338).
 *
 * These runtime `as const` arrays are the ONE place the RBAC domain vocabulary is
 * declared. The union types in permissions.ts are DERIVED from them
 * (`type X = (typeof ARRAY)[number]`), the Zod schemas in validation.ts validate
 * against them, and the admin UI screens iterate them. Previously the same lists
 * were hand-copied into each admin screen and drifted (PermissionsWidget's stale
 * 13-entry UI-resource list, RbacRecordVisibility's 5-entry modules list missing
 * `pricing`, and validation's SOBJECTS missing `Reklamation__c`), silently
 * breaking admin config or showing wrong resources. Add a member here once and
 * type + validation + every screen stay in lockstep.
 *
 * Dependency-free on purpose (no Prisma/server imports) so client components can
 * import it directly.
 */ /** User roles. Derived type: {@link Role} in permissions.ts. */ __turbopack_context__.s([
    "ADMIN_ONLY_SOBJECTS",
    ()=>ADMIN_ONLY_SOBJECTS,
    "CONTENT_ONLY_ROLES",
    ()=>CONTENT_ONLY_ROLES,
    "FINANCE_WORKFLOW_ROLES",
    ()=>FINANCE_WORKFLOW_ROLES,
    "INFORMATION_CATEGORIES",
    ()=>INFORMATION_CATEGORIES,
    "INTERNAL_MEDIA_ROLES",
    ()=>INTERNAL_MEDIA_ROLES,
    "MODULES",
    ()=>MODULES,
    "OUTLOOK_ROLES",
    ()=>OUTLOOK_ROLES,
    "RECORD_SCOPED_ROLES",
    ()=>RECORD_SCOPED_ROLES,
    "RESOURCES",
    ()=>RESOURCES,
    "ROLES",
    ()=>ROLES,
    "SOBJECTS",
    ()=>SOBJECTS,
    "STAFF_TAGS",
    ()=>STAFF_TAGS,
    "TAGS_BY_ROLE",
    ()=>TAGS_BY_ROLE,
    "UI_RESOURCES",
    ()=>UI_RESOURCES,
    "VISIBILITY_MECHANISMS",
    ()=>VISIBILITY_MECHANISMS,
    "WIKI_ROLES",
    ()=>WIKI_ROLES,
    "isOutlookRole",
    ()=>isOutlookRole
]);
const ROLES = [
    'admin',
    'staff',
    'agent',
    'user',
    'accounting',
    'laboratory',
    'advisor',
    'rigk',
    // #1855: Partner (zuerst INEOS, Meilenstein INflow) — extern, ohne jeden
    // Salesforce-Zugriff: nur Dashboard, Profil, Wiki (/my-auctions mit Pool-Rolle, #1927).
    'partner'
];
const RECORD_SCOPED_ROLES = [
    'agent',
    'user',
    'rigk',
    'laboratory',
    'advisor'
];
const CONTENT_ONLY_ROLES = [
    'partner'
];
const FINANCE_WORKFLOW_ROLES = [
    'admin',
    'staff',
    'accounting'
];
const WIKI_ROLES = ROLES;
const INTERNAL_MEDIA_ROLES = [
    'admin',
    'staff'
];
const OUTLOOK_ROLES = [
    'admin',
    'staff'
];
function isOutlookRole(role) {
    return typeof role === 'string' && OUTLOOK_ROLES.includes(role);
}
const STAFF_TAGS = [
    'management',
    'finance',
    'sales',
    'operations',
    // #950: 'quality' und 'logistics' entfernt — beide vergaben ausschliesslich
    // Rechte, die Basis-Staff ohnehin hat, waren also wirkungslos. Der Waechter
    // staff-tags-nicht-redundant.test.ts haelt den Zustand.
    // #1589: 'hr' ist zurueck, diesmal mit eigenem Recht: nur Staff mit hr (oder
    // management) pflegt die Staff-Tags anderer Staff-Konten (Ressource
    // `staff-tags`). Das alte hr (#950 entfernt) gab nur, was Basis-Staff schon hatte.
    // #1576: Personalverantwortung — zusätzlich Bereichsverwaltung Zeit & Abwesenheit
    // (Ressource `time-admin`, wie admin). Wirkt außerdem über die
    // Wiki-Freigabe (visibleStaffTags).
    'hr',
    'marketing',
    // #1154: Redaktion der öffentlichen Seiten (/cms). Basis-Staff hat auf `cms`
    // nichts; nur admin und Staff mit diesem Tag sehen und nutzen die Redaktion.
    'editor',
    // #1592: IT — vergibt keine Rechte, schaltet nur Ansichten frei (Zeit-Widgets
    // auf dem Dashboard; Bereich Zeit & Abwesenheit in der Vorab-Phase). Wirkt nur
    // an einem admin-Konto (TIME_AREA_TAG_BY_ROLE, #1853) — staff mit nur it
    // bekommt den Bereich in der Vorab-Phase nicht.
    'it',
    // #1662: Praktikum — Kennzeichen für Praktikantenkonten (Rolle staff). Vergibt
    // keine Matrix-Rechte: die Rechte bleiben Basis-Staff.
    // #1853: öffnet einem staff-Konto den Bereich Zeit & Abwesenheit in der
    // Vorab-Phase (TIME_AREA_TAG_BY_ROLE in lib/rbac/timeAreaGate.ts); an einem
    // admin-Konto wirkungslos. Wird wörtlich am Konto gelesen — nicht über
    // management (Vereinigung aller Tags) und nicht über hasStaffTag für admin.
    'intern',
    // #1855: INEOS-Partner — Kennzeichen an Konten der Rolle partner (TAGS_BY_ROLE),
    // vergibt keine Rechte. Öffnet /auctions (tagGates.ts) und Wiki-Inhalte, die
    // für ineos freigegeben sind. Für staff/admin nicht wählbar.
    'ineos'
];
/**
 * #1855: welche Rolle welche Tags tragen darf — eine Quelle für Endpunkt
 * (PUT users/[id]/staff-tags), Anlage (accountCreatePolicy), Rollenwechsel,
 * Tag-Karte und Rollen-Vorschau. Rollen ohne Eintrag tragen keine Tags.
 * Abhängigkeitsfrei hier statt in staffTagPolicy.ts, weil die Rollen-Vorschau
 * (viewAs.ts, Edge) sie braucht; staffTagPolicy.ts reicht sie weiter.
 */ const PARTNER_TAGS = [
    'ineos'
];
const INTERNAL_TAGS = STAFF_TAGS.filter(_c = (tag)=>!PARTNER_TAGS.includes(tag));
_c1 = INTERNAL_TAGS;
const TAGS_BY_ROLE = {
    admin: INTERNAL_TAGS,
    staff: INTERNAL_TAGS,
    partner: PARTNER_TAGS
};
const SOBJECTS = [
    'Case',
    'Task',
    'Event',
    'Contact',
    'Account',
    'Produktionsstandort__c',
    'Projekt__c',
    'Bedarfe__c',
    'Lohn__c',
    'Product2',
    'Material_Proposal__c',
    'Sample_Sending__c',
    'Sample_Feedback__c',
    'Requirement__c',
    'Order',
    'OrderItem',
    // #449: Verträge (Standard-Objekt) — Auftrags-Management am Vertrag
    'Contract',
    'Kostenstelle_plastship__c',
    // #792: Kontenplan DATEV (Lookup-Ziel Abrechnung__c.DATEV_Sachkonto__c)
    'DATEV_Sachkonto__c',
    // #831: Lookup-Ziel für Product2.Abfallfraktionen__c (keine eigene Seite)
    'Abfallfraktionen__c',
    'Abrechnung__c',
    'Invoice__c',
    'Monitored_Material__c',
    'Materialanalyse__c',
    'Onboarding__c',
    'Kontakt_bergaben__c',
    'Supplier_Audit__c',
    'Unternehmenszertifikat__c',
    // #362/#333: Zertifikats-Katalog (Lookup-Ziel von Unternehmenszertifikat__c.Zertifikate__c)
    'Zertifikate__c',
    // #331: Prüfparameter an der Materialanalyse + sein Typ-Katalog (Lookup-Ziel)
    'AuditProperty__c',
    'AuditPropertyType__c',
    'RecordAccessGrant__c',
    'Probe__c',
    'Probeversand__c',
    'Opportunity',
    'User',
    'Aktueller_Preis_und_Verf_gbarkeit__c',
    'Reklamation__c',
    // #384: Prozessfeedback/CAPA — überall anlegbar (admin/staff)
    'Prozessfeedback__c',
    // #495: reine Lookup-Ziele. Beide werden an der Opportunity als editierbares
    // Lookup gerendert (CampaignId, SyncedQuoteId, jeweils admin/staff), waren
    // aber nirgends registriert — die Suche im Autocomplete lief in ein 403 und
    // zeigte still ein leeres Dropdown. Ohne eigene Detailseite (detailPath ''),
    // sie tauchen deshalb nicht in der globalen Suche auf.
    'Campaign',
    'Quote'
];
const ADMIN_ONLY_SOBJECTS = [
    'Abfallqualit_t__c',
    'Agreement__c',
    'Agreement_Templates__c',
    'Asset',
    'Audit_Parameter__c',
    'Audit_ParameterType__c',
    'Beziehung__c',
    'Bonus__c',
    'Bonus_Ausschuettung__c',
    'CampaignMember',
    'cloudworx_Console__c',
    'ContentVersion',
    'EmailMessage',
    'Facilities_and_Capabilities__c',
    'Idea',
    'Inventarliste__c',
    'Knowledge__c',
    'Laboratory_Equipment__c',
    'Lead',
    'Location',
    'Material_qualification_process__c',
    'Material_Segment__c',
    'Mengenstaffel_Einkauf__c',
    'Muster_Lagerbewegung__c',
    'Musterlager__c',
    'News__c',
    'Opportunity_Transportpreis__c',
    'OpportunityContactRole',
    'OpportunityLineItem',
    'PEintrag__c',
    'Polymere__c',
    'Pricebook2',
    'PricebookEntry',
    'QuickText',
    'QuoteLineItem',
    'ServiceResource',
    'Solution',
    'Textvorlagen_Dokumente__c',
    'Transportpreis__c',
    'Waren_Lagerbewegung__c',
    'Warenlager__c',
    'WorkOrder',
    'WorkOrderLineItem',
    'Zus_tzliche_Produkte__c'
];
const UI_RESOURCES = [
    'dashboard',
    'profile',
    'user-management',
    'recyclate-grade',
    'recyclate-compatibility',
    'documents',
    'rigk-module',
    'Finance',
    'access-management',
    'plastrack',
    'admin',
    'operations',
    'sales',
    'travel-expenses',
    'working-hours',
    'absences',
    'verification-module',
    'notification-management',
    'pia-management',
    'pricing',
    // #1154: Redaktion der öffentlichen Seiten (/cms, /api/cms/*) — admin und staff
    'cms',
    // #1330: Wiki (/wiki, /api/wiki/*) — lesen. Bewusst getrennt von `cms`: die
    // Redaktion braucht das Tag editor. #1507: jede Rolle, sichtbar ist nur, was
    // ein Admin für sie freigegeben hat.
    'wiki',
    // #1589: Staff-Tags anderer Staff-Konten pflegen (PUT /api/plastship/users/[id]/staff-tags)
    // — admin und Staff mit Tag hr; Basis-Staff und alle anderen Rollen nichts
    'staff-tags',
    // #1576: Bereichsverwaltung Zeit & Abwesenheit (Team, Teamkalender, Freigaben,
    // Einstellungen, Verwaltungs-Widgets) — admin und Staff mit Tag hr
    'time-admin',
    // #1682: Admin-Seite /mailing (Vorlagen, Signatur, Rundbrief)
    'mailing',
    // #1856/#1927: /my-auctions — admin und partner mit Pool-Rolle provider_admin (Scope-Gate, tagGates.ts)
    'my-auctions',
    // #1889: /auctions (Übersicht des Auktionshauses) — admin und partner mit Tag ineos (tagGates.ts)
    'auctions',
    // #1889: alle weiteren Auktionsseiten im Gerüst (Beobachtet, Historie, Anbieterseiten,
    // Detail, Bedingungen, Einladung, Widget, Betreiber-Sicht) — nur admin
    'auctions-admin',
    // #1844: Admin-Seite /jobs (Job-System: Schalter, Jetzt ausführen, Lauf-Protokoll)
    'jobs'
];
const RESOURCES = [
    ...SOBJECTS,
    ...ADMIN_ONLY_SOBJECTS,
    ...UI_RESOURCES
];
const VISIBILITY_MECHANISMS = [
    'lookup',
    'ownership',
    'recordAccessGrant',
    'module',
    // #331: Kind-Objekte ohne eigenen Owner/Account-Lookup erben den
    // Record-Zugriff vom Parent-Record (z.B. AuditProperty__c → Materialanalyse__c)
    'parentRecord'
];
const INFORMATION_CATEGORIES = [
    'supplierInformation',
    'customerInformation',
    'transportInformation',
    'buyingInformation',
    'sellingInformation',
    'earnings',
    'statistics',
    'rigkRelationships',
    // #329: carrier-only Transport-Preise (Preis/t + Notiz) — bewusst getrennt
    // von transportInformation, die auch Kunde+Lieferant erhalten.
    'transportPricing'
];
const MODULES = [
    'mmaterials',
    'plastrack',
    'plaspcf',
    'ppwr',
    'rigk',
    'pricing'
];
var _c, _c1;
__turbopack_context__.k.register(_c, "INTERNAL_TAGS$STAFF_TAGS.filter");
__turbopack_context__.k.register(_c1, "INTERNAL_TAGS");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/rbac/contextAccess.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "kontextDarf",
    ()=>kontextDarf,
    "rolleErlaubt",
    ()=>rolleErlaubt
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$rbac$2f$permissions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/rbac/permissions.ts [app-client] (ecmascript)");
;
function kontextDarf(userContext, resource, action) {
    if (!userContext?.role || !resource) return false;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$rbac$2f$permissions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasObjectAccess"])(userContext, resource, action);
}
function rolleErlaubt(role, erlaubt) {
    return !!role && erlaubt.includes(role);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/rbac/permissions.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ACCOUNTING_VISIBLE_FIELDS",
    ()=>ACCOUNTING_VISIBLE_FIELDS,
    "ALL_STAFF_TAGS",
    ()=>ALL_STAFF_TAGS,
    "ANALYTICS_ROLES",
    ()=>ANALYTICS_ROLES,
    "DEFAULT_ALWAYS_VISIBLE_FIELDS",
    ()=>DEFAULT_ALWAYS_VISIBLE_FIELDS,
    "DEFAULT_FIELD_DEFINITIONS",
    ()=>DEFAULT_FIELD_DEFINITIONS,
    "DEFAULT_GLOBAL_PERMISSIONS",
    ()=>DEFAULT_GLOBAL_PERMISSIONS,
    "DEFAULT_OBJECT_VISIBILITY_CONFIG",
    ()=>DEFAULT_OBJECT_VISIBILITY_CONFIG,
    "DEFAULT_RECORD_VISIBILITY_RULES",
    ()=>DEFAULT_RECORD_VISIBILITY_RULES,
    "DEFAULT_STAFF_TAG_PERMISSIONS",
    ()=>DEFAULT_STAFF_TAG_PERMISSIONS,
    "GRANTABLE_SOBJECTS",
    ()=>GRANTABLE_SOBJECTS,
    "MM_HIDDEN_ID_FIELDS",
    ()=>MM_HIDDEN_ID_FIELDS,
    "MM_HIDDEN_NAMES_PRODUCT_FIELDS",
    ()=>MM_HIDDEN_NAMES_PRODUCT_FIELDS,
    "MM_HIDDEN_NAME_FIELDS",
    ()=>MM_HIDDEN_NAME_FIELDS,
    "alwaysVisibleFields",
    ()=>alwaysVisibleFields,
    "buildLookupConditions",
    ()=>buildLookupConditions,
    "canAccessInformationCategory",
    ()=>canAccessInformationCategory,
    "default",
    ()=>__TURBOPACK__default__export__,
    "fieldDefinitions",
    ()=>fieldDefinitions,
    "flexpageConfig",
    ()=>flexpageConfig,
    "getAccessibleInformationCategories",
    ()=>getAccessibleInformationCategories,
    "getAccessibleObjects",
    ()=>getAccessibleObjects,
    "getAlwaysVisibleFields",
    ()=>getAlwaysVisibleFields,
    "getFieldDefinitions",
    ()=>getFieldDefinitions,
    "getFlexpage",
    ()=>getFlexpage,
    "getGlobalPermissions",
    ()=>getGlobalPermissions,
    "getObjectVisibilityConfig",
    ()=>getObjectVisibilityConfig,
    "getRecordVisibilityRules",
    ()=>getRecordVisibilityRules,
    "getSalesforceLayoutMapping",
    ()=>getSalesforceLayoutMapping,
    "getSearchConfigs",
    ()=>getSearchConfigs,
    "getSearchDisplayConfig",
    ()=>getSearchDisplayConfig,
    "getSearchableObjects",
    ()=>getSearchableObjects,
    "getStaffTagPermissions",
    ()=>getStaffTagPermissions,
    "getVisibleFields",
    ()=>getVisibleFields,
    "globalPermissions",
    ()=>globalPermissions,
    "hasAnalyticsAccess",
    ()=>hasAnalyticsAccess,
    "hasObjectAccess",
    ()=>hasObjectAccess,
    "hasPermission",
    ()=>hasPermission,
    "hasRecordAccess",
    ()=>hasRecordAccess,
    "hasStaffTag",
    ()=>hasStaffTag,
    "hidesMonitoredMaterialNames",
    ()=>hidesMonitoredMaterialNames,
    "isContentOnlyRole",
    ()=>isContentOnlyRole,
    "isInternalStaff",
    ()=>isInternalStaff,
    "isRecordOwner",
    ()=>isRecordOwner,
    "moduleConfig",
    ()=>moduleConfig,
    "objectVisibilityConfig",
    ()=>objectVisibilityConfig,
    "recordVisibilityRules",
    ()=>recordVisibilityRules,
    "requiresRecordLevelFiltering",
    ()=>requiresRecordLevelFiltering,
    "resolveStaffTags",
    ()=>resolveStaffTags,
    "searchDisplayConfig",
    ()=>searchDisplayConfig,
    "seesMonitoredMaterialNames",
    ()=>seesMonitoredMaterialNames,
    "staffTagPermissions",
    ()=>staffTagPermissions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * Comprehensive Permission System for plastship
 *
 * This file defines the complete permission logic including:
 * - Global object-level permissions (can role access this object type?)
 * - Record-level visibility rules (can role see this specific record?)
 * - Field-level visibility (which fields are visible based on information categories?)
 * - Flexpage mappings (which UI layout to use?)
 * - Module-based access (mmaterials, plastrack, plaspcf)
 *
 * ARCHITECTURE (#364): This file is the single source of truth. Permissions
 * are versioned code — the DEFAULT_* constants below ARE the effective
 * configuration. There is no DB overlay and no runtime cache; changes go
 * through code review + deploy. /rbac-management renders these constants
 * read-only.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$rbac$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/rbac/constants.ts [app-client] (ecmascript)");
// Reines String-/Regex-Modul ohne eigene Imports — zieht nichts Serverseitiges
// nach, permissions.ts bleibt clientseitig importierbar.
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$utils$2f$soqlSanitizer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/utils/soqlSanitizer.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$rbac$2f$productVisibility$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/rbac/productVisibility.ts [app-client] (ecmascript)");
// #1576 (R86): abhängigkeitsfrei, auch im Browser importierbar
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$rbac$2f$timeAreaGate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/rbac/timeAreaGate.ts [app-client] (ecmascript)");
// #1856: abhängigkeitsfrei — Ressourcen, die für eine Rolle zusätzlich ein Tag verlangen
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$rbac$2f$tagGates$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/rbac/tagGates.ts [app-client] (ecmascript)");
// #1494: über die Brücke — RouteGuard bringt dieses Modul in den Browser, wo das
// SDK erst nach dem ersten Rendern lädt (auf dem Server reicht sie direkt weiter)
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$sentry$2f$browser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/sentry/browser.ts [app-client] (ecmascript)");
;
;
;
;
;
;
const ALL_STAFF_TAGS = [
    ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$rbac$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STAFF_TAGS"]
];
/**
 * #2085: Matrix-Zeilen für ADMIN_ONLY_SOBJECTS — alle Aktionen gleich.
 */ function adminOnlyObjectRows(granted) {
    return Object.fromEntries(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$rbac$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ADMIN_ONLY_SOBJECTS"].map((object)=>[
            object,
            {
                view: granted,
                create: granted,
                edit: granted,
                delete: granted
            }
        ]));
}
const DEFAULT_GLOBAL_PERMISSIONS = {
    admin: {
        // UI Resources
        dashboard: {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        profile: {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        'user-management': {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        'recyclate-grade': {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        'recyclate-compatibility': {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        documents: {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        'rigk-module': {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        Finance: {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        'access-management': {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        plastrack: {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        admin: {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        operations: {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        sales: {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        'travel-expenses': {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        'working-hours': {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        absences: {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        'verification-module': {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        'notification-management': {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        'pia-management': {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        pricing: {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        // #1154: Redaktion der öffentlichen Seiten (/cms) — admin und Staff mit Tag editor (#1154)
        cms: {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        // #1330: internes Wiki (/wiki), gepflegt über `cms`. #1507: jede Rolle darf
        // hinein, sieht aber nur die für sie freigegebenen Einträge (wikiVisibility.ts)
        wiki: {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        // #1435: Anfragen aus dem Kontaktformular — admin und staff; löschen (DSGVO) nur admin.
        // create bleibt für admin an (Invariante create ⊇ edit, Layer-4-Test) — es gibt keine
        // Route, die anlegt: Anfragen entstehen nur über das öffentliche Kontaktformular.
        // #1589: Staff-Tags pflegen (Widget auf /user/[id], eigener Endpunkt)
        'staff-tags': {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        // #1576: Bereichsverwaltung Zeit & Abwesenheit — admin und Staff mit Tag hr
        'time-admin': {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        // #1682: Admin-Seite /mailing — nur admin
        mailing: {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        // #1856/#1927: /my-auctions — admin und partner (partner nur mit Pool-Rolle provider_admin, Scope-Gate tagGates.ts)
        'my-auctions': {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        // #1889: /auctions — admin und partner (partner nur mit Tag ineos, tagGates.ts)
        auctions: {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        // #1889: weitere Auktionsseiten im Gerüst — nur admin
        'auctions-admin': {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        // #1844: Admin-Seite /jobs — nur admin
        jobs: {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        // Salesforce Objects
        // NOTE: DELETE is disabled for ALL Salesforce objects for every role except
        // admin (security policy; #1650 Abrechnung__c als Ausnahme für staff/accounting).
        // Records should be soft-deleted via IsDeleted flag, not hard-deleted.
        // #2085: admin trägt hier delete, weil er es bisher über den Durchgriff in
        // hasObjectAccess hatte — die Matrix bildet das jetzt ab.
        Case: {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        Task: {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        Event: {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        Contact: {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        Account: {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        Produktionsstandort__c: {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        Projekt__c: {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        Bedarfe__c: {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        Lohn__c: {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        Product2: {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        Material_Proposal__c: {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        Sample_Sending__c: {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        Sample_Feedback__c: {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        Requirement__c: {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        Order: {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        Contract: {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        Kostenstelle_plastship__c: {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        DATEV_Sachkonto__c: {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        Abfallfraktionen__c: {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        OrderItem: {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        Abrechnung__c: {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        Invoice__c: {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        Monitored_Material__c: {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        Materialanalyse__c: {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        Onboarding__c: {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        Kontakt_bergaben__c: {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        Supplier_Audit__c: {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        Unternehmenszertifikat__c: {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        Zertifikate__c: {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        AuditProperty__c: {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        AuditPropertyType__c: {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        RecordAccessGrant__c: {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        Probe__c: {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        Probeversand__c: {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        Opportunity: {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        User: {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        Aktueller_Preis_und_Verf_gbarkeit__c: {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        Reklamation__c: {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        // #384: Prozessfeedback/CAPA — intern (admin/staff), kein Delete (QM-Nachvollziehbarkeit)
        Prozessfeedback__c: {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        // #495: reine Lookup-Ziele an der Opportunity (CampaignId, SyncedQuoteId).
        // Nur view — angelegt/gepflegt werden sie in Salesforce.
        Campaign: {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        Quote: {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        // #2085: nicht integrierte SF-Objekte (constants.ts ADMIN_ONLY_SOBJECTS) — nur admin, wie bisher über den Durchgriff
        ...adminOnlyObjectRows(true)
    },
    // NOTE: clevel role was removed and absorbed into staff + 'management' tag;
    // die verbliebenen Konten sind seit #950 migriert.
    // Use staffTagPermissions below for tag-based permission overrides.
    staff: {
        dashboard: {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        profile: {
            view: true,
            create: false,
            edit: true,
            delete: false
        },
        // #843 (AB 28.08.): staff verwaltet Kunden-User (anlegen/einladen,
        // deaktivieren, Module zuschalten). Interne Accounts und die Vergabe
        // von admin/staff bleiben admin-only — Schranke in userFieldPolicy;
        // die Admin-Tools (GitLab-Seiten, /admin, Demos) hängen seit #843 an
        // der 'admin'-Resource, nicht mehr an user-management.
        'user-management': {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        'recyclate-grade': {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        'recyclate-compatibility': {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        documents: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        'rigk-module': {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        Finance: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        'access-management': {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        plastrack: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        admin: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        operations: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        sales: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        'travel-expenses': {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        'working-hours': {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        absences: {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        'verification-module': {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        'notification-management': {
            view: true,
            create: true,
            edit: false,
            delete: false
        },
        'pia-management': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        pricing: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #1154: Redaktion der öffentlichen Seiten (/cms) — admin und Staff mit Tag editor (#1154)
        cms: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #1330: internes Wiki (/wiki), gepflegt über `cms`. #1507: jede Rolle darf
        // hinein, sieht aber nur die für sie freigegebenen Einträge (wikiVisibility.ts)
        wiki: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        // #1435: Anfragen aus dem Kontaktformular — admin und staff; löschen (DSGVO) nur admin
        // #1589: Basis-Staff pflegt keine Staff-Tags — das gibt erst das Tag hr
        // (sonst könnte sich jeder Staff über ein Kollegenkonto Rechte verschaffen)
        'staff-tags': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #1576: Bereichsverwaltung Zeit & Abwesenheit — admin und Staff mit Tag hr
        'time-admin': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #1682: Admin-Seite /mailing — nur admin
        mailing: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #1856/#1927: /my-auctions — admin und partner (partner nur mit Pool-Rolle provider_admin, Scope-Gate tagGates.ts)
        'my-auctions': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #1889: /auctions — admin und partner (partner nur mit Tag ineos, tagGates.ts)
        auctions: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #1889: weitere Auktionsseiten im Gerüst — nur admin
        'auctions-admin': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #1844: Admin-Seite /jobs — nur admin
        jobs: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Case: {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        Task: {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        Event: {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        Contact: {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        Account: {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        Produktionsstandort__c: {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        Projekt__c: {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        Bedarfe__c: {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        Lohn__c: {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        // #447 (AB-Review): staff legt Produkte im Alltag an (Anlegen aus Account) —
        // create war das einzige fehlende Recht neben view/edit.
        Product2: {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        Material_Proposal__c: {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        Sample_Sending__c: {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        Sample_Feedback__c: {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        Requirement__c: {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        Order: {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        Contract: {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        Kostenstelle_plastship__c: {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        DATEV_Sachkonto__c: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        Abfallfraktionen__c: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        OrderItem: {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        Abrechnung__c: {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        Invoice__c: {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        Monitored_Material__c: {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        Materialanalyse__c: {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        Onboarding__c: {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        Kontakt_bergaben__c: {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        Supplier_Audit__c: {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        Unternehmenszertifikat__c: {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        Zertifikate__c: {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        AuditProperty__c: {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        AuditPropertyType__c: {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        RecordAccessGrant__c: {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        Probe__c: {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        Probeversand__c: {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        Opportunity: {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        User: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        Aktueller_Preis_und_Verf_gbarkeit__c: {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        Reklamation__c: {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        // #384: Prozessfeedback/CAPA — intern (admin/staff), kein Delete (QM-Nachvollziehbarkeit)
        Prozessfeedback__c: {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        // #495: reine Lookup-Ziele an der Opportunity (CampaignId, SyncedQuoteId).
        // Nur view — angelegt/gepflegt werden sie in Salesforce.
        Campaign: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        Quote: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        // #2085: nicht integrierte SF-Objekte (constants.ts ADMIN_ONLY_SOBJECTS) — kein Zugriff
        ...adminOnlyObjectRows(false)
    },
    // accounting: Invoices + minimal context (orders, accounts, contacts)
    accounting: {
        dashboard: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        profile: {
            view: true,
            create: false,
            edit: true,
            delete: false
        },
        'user-management': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        'recyclate-grade': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        'recyclate-compatibility': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        documents: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        'rigk-module': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #483: Buchhaltung arbeitet in der Ausgangsrechnungen-Ansicht (/finance/*)
        Finance: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        'access-management': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        plastrack: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        admin: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        operations: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        sales: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        'travel-expenses': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        'working-hours': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        absences: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        'verification-module': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        'notification-management': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        'pia-management': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        pricing: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #1154: Redaktion der öffentlichen Seiten (/cms) — admin und Staff mit Tag editor (#1154)
        cms: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #1330: internes Wiki (/wiki), gepflegt über `cms`. #1507: jede Rolle darf
        // hinein, sieht aber nur die für sie freigegebenen Einträge (wikiVisibility.ts)
        wiki: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        // #1435: Anfragen aus dem Kontaktformular — admin und staff; löschen (DSGVO) nur admin
        // #1589: Staff-Tags pflegen — nur admin und Staff mit Tag hr
        'staff-tags': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #1576: Bereichsverwaltung Zeit & Abwesenheit — admin und Staff mit Tag hr
        'time-admin': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #1682: Admin-Seite /mailing — nur admin
        mailing: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #1856/#1927: /my-auctions — admin und partner (partner nur mit Pool-Rolle provider_admin, Scope-Gate tagGates.ts)
        'my-auctions': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #1889: /auctions — admin und partner (partner nur mit Tag ineos, tagGates.ts)
        auctions: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #1889: weitere Auktionsseiten im Gerüst — nur admin
        'auctions-admin': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #1844: Admin-Seite /jobs — nur admin
        jobs: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Case: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Task: {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        Event: {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        Contact: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        Account: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        Produktionsstandort__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Projekt__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Bedarfe__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Lohn__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Product2: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Material_Proposal__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Sample_Sending__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Sample_Feedback__c: {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        Requirement__c: {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        Order: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        Contract: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        Kostenstelle_plastship__c: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        DATEV_Sachkonto__c: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        Abfallfraktionen__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        OrderItem: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        Abrechnung__c: {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        Invoice__c: {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        Monitored_Material__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Materialanalyse__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Onboarding__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Kontakt_bergaben__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Supplier_Audit__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Unternehmenszertifikat__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Zertifikate__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        AuditProperty__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        AuditPropertyType__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        RecordAccessGrant__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Probe__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Probeversand__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Opportunity: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        User: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Aktueller_Preis_und_Verf_gbarkeit__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Reklamation__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Prozessfeedback__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #495: reine Lookup-Ziele, nur admin/staff
        Campaign: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Quote: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #2085: nicht integrierte SF-Objekte (constants.ts ADMIN_ONLY_SOBJECTS) — kein Zugriff
        ...adminOnlyObjectRows(false)
    },
    // laboratory: Material analysis when related via Dienstleister__c
    laboratory: {
        dashboard: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        profile: {
            view: true,
            create: false,
            edit: true,
            delete: false
        },
        'user-management': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        'recyclate-grade': {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        'recyclate-compatibility': {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        documents: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        'rigk-module': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Finance: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        'access-management': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        plastrack: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        admin: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        operations: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        sales: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        'travel-expenses': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        'working-hours': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        absences: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        'verification-module': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        'notification-management': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        'pia-management': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        pricing: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #1154: Redaktion der öffentlichen Seiten (/cms) — admin und Staff mit Tag editor (#1154)
        cms: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #1330: internes Wiki (/wiki), gepflegt über `cms`. #1507: jede Rolle darf
        // hinein, sieht aber nur die für sie freigegebenen Einträge (wikiVisibility.ts)
        wiki: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        // #1435: Anfragen aus dem Kontaktformular — admin und staff; löschen (DSGVO) nur admin
        // #1589: Staff-Tags pflegen — nur admin und Staff mit Tag hr
        'staff-tags': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #1576: Bereichsverwaltung Zeit & Abwesenheit — admin und Staff mit Tag hr
        'time-admin': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #1682: Admin-Seite /mailing — nur admin
        mailing: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #1856/#1927: /my-auctions — admin und partner (partner nur mit Pool-Rolle provider_admin, Scope-Gate tagGates.ts)
        'my-auctions': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #1889: /auctions — admin und partner (partner nur mit Tag ineos, tagGates.ts)
        auctions: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #1889: weitere Auktionsseiten im Gerüst — nur admin
        'auctions-admin': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #1844: Admin-Seite /jobs — nur admin
        jobs: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #514: laboratory sieht keine Cases. Vorher stand hier view/create/edit
        // auf true, ohne dass es eine Sichtbarkeitsregel fuer Case gaebe — die
        // Rolle ist record-gefiltert, der Listenfilter lieferte also dauerhaft
        // eine leere Liste, waehrend die Detailseite per Direkt-URL erreichbar
        // blieb (hasObjectAccess winkt bei view: true vorher durch).
        // Produktentscheidung ML 2026-08-01: kein Case-Zugriff.
        Case: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Task: {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        Event: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Contact: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        Account: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        Produktionsstandort__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Projekt__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Bedarfe__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Lohn__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Product2: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Material_Proposal__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Sample_Sending__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Sample_Feedback__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Requirement__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Order: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Contract: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Kostenstelle_plastship__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        DATEV_Sachkonto__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Abfallfraktionen__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        OrderItem: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Abrechnung__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Invoice__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Monitored_Material__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Materialanalyse__c: {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        Onboarding__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Kontakt_bergaben__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Supplier_Audit__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Unternehmenszertifikat__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Zertifikate__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        AuditProperty__c: {
            view: true,
            create: false,
            edit: true,
            delete: false
        },
        AuditPropertyType__c: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        RecordAccessGrant__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Probe__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Probeversand__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Opportunity: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        User: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Aktueller_Preis_und_Verf_gbarkeit__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Reklamation__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Prozessfeedback__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #495: reine Lookup-Ziele, nur admin/staff
        Campaign: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Quote: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #2085: nicht integrierte SF-Objekte (constants.ts ADMIN_ONLY_SOBJECTS) — kein Zugriff
        ...adminOnlyObjectRows(false)
    },
    // agent: View access with record-level filtering (OwnerId OR RecordAccessGrant)
    agent: {
        dashboard: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        profile: {
            view: true,
            create: false,
            edit: true,
            delete: false
        },
        'user-management': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        'recyclate-grade': {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        'recyclate-compatibility': {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        documents: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        'rigk-module': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Finance: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        'access-management': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        plastrack: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        admin: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        operations: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        sales: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        'travel-expenses': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        'working-hours': {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        absences: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        'verification-module': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        'notification-management': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        'pia-management': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        pricing: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #1154: Redaktion der öffentlichen Seiten (/cms) — admin und Staff mit Tag editor (#1154)
        cms: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #1330: internes Wiki (/wiki), gepflegt über `cms`. #1507: jede Rolle darf
        // hinein, sieht aber nur die für sie freigegebenen Einträge (wikiVisibility.ts)
        wiki: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        // #1435: Anfragen aus dem Kontaktformular — admin und staff; löschen (DSGVO) nur admin
        // #1589: Staff-Tags pflegen — nur admin und Staff mit Tag hr
        'staff-tags': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #1576: Bereichsverwaltung Zeit & Abwesenheit — admin und Staff mit Tag hr
        'time-admin': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #1682: Admin-Seite /mailing — nur admin
        mailing: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #1856/#1927: /my-auctions — admin und partner (partner nur mit Pool-Rolle provider_admin, Scope-Gate tagGates.ts)
        'my-auctions': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #1889: /auctions — admin und partner (partner nur mit Tag ineos, tagGates.ts)
        auctions: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #1889: weitere Auktionsseiten im Gerüst — nur admin
        'auctions-admin': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #1844: Admin-Seite /jobs — nur admin
        jobs: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Case: {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        Task: {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        Event: {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        Contact: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        Account: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Produktionsstandort__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Projekt__c: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        Bedarfe__c: {
            view: true,
            create: true,
            edit: false,
            delete: false
        },
        Lohn__c: {
            view: true,
            create: true,
            edit: false,
            delete: false
        },
        Product2: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        Material_Proposal__c: {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        Sample_Sending__c: {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        Sample_Feedback__c: {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        Requirement__c: {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        Order: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        Contract: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        Kostenstelle_plastship__c: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        DATEV_Sachkonto__c: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        Abfallfraktionen__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        OrderItem: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Abrechnung__c: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        Invoice__c: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        Monitored_Material__c: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        Materialanalyse__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Onboarding__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Kontakt_bergaben__c: {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        Supplier_Audit__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Unternehmenszertifikat__c: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        Zertifikate__c: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        AuditProperty__c: {
            view: true,
            create: false,
            edit: true,
            delete: false
        },
        AuditPropertyType__c: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        RecordAccessGrant__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Probe__c: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        Probeversand__c: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        Opportunity: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        User: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Aktueller_Preis_und_Verf_gbarkeit__c: {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        Reklamation__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Prozessfeedback__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #495: reine Lookup-Ziele, nur admin/staff
        Campaign: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Quote: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #2085: nicht integrierte SF-Objekte (constants.ts ADMIN_ONLY_SOBJECTS) — kein Zugriff
        ...adminOnlyObjectRows(false)
    },
    // user: View access with record-level filtering (OwnerId OR RecordAccessGrant)
    user: {
        dashboard: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        profile: {
            view: true,
            create: false,
            edit: true,
            delete: false
        },
        'user-management': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        'recyclate-grade': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        'recyclate-compatibility': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        documents: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        'rigk-module': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Finance: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        'access-management': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        plastrack: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        admin: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        operations: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        sales: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        'travel-expenses': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        'working-hours': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        absences: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        'verification-module': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        'notification-management': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        'pia-management': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        pricing: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #1154: Redaktion der öffentlichen Seiten (/cms) — admin und Staff mit Tag editor (#1154)
        cms: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #1330: internes Wiki (/wiki), gepflegt über `cms`. #1507: jede Rolle darf
        // hinein, sieht aber nur die für sie freigegebenen Einträge (wikiVisibility.ts)
        wiki: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        // #1435: Anfragen aus dem Kontaktformular — admin und staff; löschen (DSGVO) nur admin
        // #1589: Staff-Tags pflegen — nur admin und Staff mit Tag hr
        'staff-tags': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #1576: Bereichsverwaltung Zeit & Abwesenheit — admin und Staff mit Tag hr
        'time-admin': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #1682: Admin-Seite /mailing — nur admin
        mailing: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #1856/#1927: /my-auctions — admin und partner (partner nur mit Pool-Rolle provider_admin, Scope-Gate tagGates.ts)
        'my-auctions': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #1889: /auctions — admin und partner (partner nur mit Tag ineos, tagGates.ts)
        auctions: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #1889: weitere Auktionsseiten im Gerüst — nur admin
        'auctions-admin': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #1844: Admin-Seite /jobs — nur admin
        jobs: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Case: {
            view: true,
            create: true,
            edit: false,
            delete: false
        },
        Task: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Event: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        Contact: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Account: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Produktionsstandort__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Projekt__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Bedarfe__c: {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        Lohn__c: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        Product2: {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        Material_Proposal__c: {
            view: true,
            create: false,
            edit: true,
            delete: false
        },
        Sample_Sending__c: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        Sample_Feedback__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Requirement__c: {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        Order: {
            view: true,
            create: false,
            edit: true,
            delete: false
        },
        Contract: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Kostenstelle_plastship__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        DATEV_Sachkonto__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Abfallfraktionen__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        OrderItem: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Abrechnung__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Invoice__c: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        Monitored_Material__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Materialanalyse__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Onboarding__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Kontakt_bergaben__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Supplier_Audit__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Unternehmenszertifikat__c: {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        Zertifikate__c: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        AuditProperty__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        AuditPropertyType__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        RecordAccessGrant__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Probe__c: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        Probeversand__c: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        Opportunity: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        User: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Aktueller_Preis_und_Verf_gbarkeit__c: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        Reklamation__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Prozessfeedback__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #495: reine Lookup-Ziele, nur admin/staff
        Campaign: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Quote: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #2085: nicht integrierte SF-Objekte (constants.ts ADMIN_ONLY_SOBJECTS) — kein Zugriff
        ...adminOnlyObjectRows(false)
    },
    // advisor: Advisory board (Beirat) - read-only KPI dashboard + limited entity browsing
    advisor: {
        dashboard: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        profile: {
            view: true,
            create: false,
            edit: true,
            delete: false
        },
        'user-management': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        'recyclate-grade': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        'recyclate-compatibility': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        documents: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        'rigk-module': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Finance: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        'access-management': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        plastrack: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        admin: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        operations: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        sales: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        'travel-expenses': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        'working-hours': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        absences: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        'verification-module': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        'notification-management': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        'pia-management': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        pricing: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #1154: Redaktion der öffentlichen Seiten (/cms) — admin und Staff mit Tag editor (#1154)
        cms: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #1330: internes Wiki (/wiki), gepflegt über `cms`. #1507: jede Rolle darf
        // hinein, sieht aber nur die für sie freigegebenen Einträge (wikiVisibility.ts)
        wiki: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        // #1435: Anfragen aus dem Kontaktformular — admin und staff; löschen (DSGVO) nur admin
        // #1589: Staff-Tags pflegen — nur admin und Staff mit Tag hr
        'staff-tags': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #1576: Bereichsverwaltung Zeit & Abwesenheit — admin und Staff mit Tag hr
        'time-admin': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #1682: Admin-Seite /mailing — nur admin
        mailing: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #1856/#1927: /my-auctions — admin und partner (partner nur mit Pool-Rolle provider_admin, Scope-Gate tagGates.ts)
        'my-auctions': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #1889: /auctions — admin und partner (partner nur mit Tag ineos, tagGates.ts)
        auctions: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #1889: weitere Auktionsseiten im Gerüst — nur admin
        'auctions-admin': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #1844: Admin-Seite /jobs — nur admin
        jobs: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Case: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        Task: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        Event: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Contact: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        Account: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        Produktionsstandort__c: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        Projekt__c: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        Bedarfe__c: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        Lohn__c: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        Product2: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        Material_Proposal__c: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        Sample_Sending__c: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        Sample_Feedback__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Requirement__c: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        Order: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        Contract: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        Kostenstelle_plastship__c: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        DATEV_Sachkonto__c: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        Abfallfraktionen__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        OrderItem: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Abrechnung__c: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        Invoice__c: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        Monitored_Material__c: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        Materialanalyse__c: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        Onboarding__c: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        Kontakt_bergaben__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Supplier_Audit__c: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        Unternehmenszertifikat__c: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        Zertifikate__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        AuditProperty__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        AuditPropertyType__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        RecordAccessGrant__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Probe__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Probeversand__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Opportunity: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        User: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Aktueller_Preis_und_Verf_gbarkeit__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Reklamation__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Prozessfeedback__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #495: reine Lookup-Ziele, nur admin/staff
        Campaign: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Quote: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #2085: nicht integrierte SF-Objekte (constants.ts ADMIN_ONLY_SOBJECTS) — kein Zugriff
        ...adminOnlyObjectRows(false)
    },
    // rigk: mechanical clone of 'user' — same baseline access; the extra read on
    // Account Verh_ltnis_RIGK_System__c / Pamira__c / Hannawald__c / ERDE__c is
    // wired via a new 'rigkRelationships' InformationCategory + record-visibility rule.
    rigk: {
        dashboard: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        profile: {
            view: true,
            create: false,
            edit: true,
            delete: false
        },
        'user-management': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        'recyclate-grade': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        'recyclate-compatibility': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        documents: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        'rigk-module': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Finance: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        'access-management': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        plastrack: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        admin: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        operations: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        sales: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        'travel-expenses': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        'working-hours': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        absences: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        'verification-module': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        'notification-management': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        'pia-management': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        pricing: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #1154: Redaktion der öffentlichen Seiten (/cms) — admin und Staff mit Tag editor (#1154)
        cms: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #1330: internes Wiki (/wiki), gepflegt über `cms`. #1507: jede Rolle darf
        // hinein, sieht aber nur die für sie freigegebenen Einträge (wikiVisibility.ts)
        wiki: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        // #1435: Anfragen aus dem Kontaktformular — admin und staff; löschen (DSGVO) nur admin
        // #1589: Staff-Tags pflegen — nur admin und Staff mit Tag hr
        'staff-tags': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #1576: Bereichsverwaltung Zeit & Abwesenheit — admin und Staff mit Tag hr
        'time-admin': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #1682: Admin-Seite /mailing — nur admin
        mailing: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #1856/#1927: /my-auctions — admin und partner (partner nur mit Pool-Rolle provider_admin, Scope-Gate tagGates.ts)
        'my-auctions': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #1889: /auctions — admin und partner (partner nur mit Tag ineos, tagGates.ts)
        auctions: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #1889: weitere Auktionsseiten im Gerüst — nur admin
        'auctions-admin': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #1844: Admin-Seite /jobs — nur admin
        jobs: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Case: {
            view: true,
            create: true,
            edit: false,
            delete: false
        },
        Task: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Event: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        Contact: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Account: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Produktionsstandort__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Projekt__c: {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        Bedarfe__c: {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        Lohn__c: {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        Product2: {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        Material_Proposal__c: {
            view: true,
            create: false,
            edit: true,
            delete: false
        },
        Sample_Sending__c: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        Sample_Feedback__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Requirement__c: {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        Order: {
            view: true,
            create: false,
            edit: true,
            delete: false
        },
        Contract: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Kostenstelle_plastship__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        DATEV_Sachkonto__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Abfallfraktionen__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        OrderItem: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Abrechnung__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Invoice__c: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        Monitored_Material__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Materialanalyse__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Onboarding__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Kontakt_bergaben__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Supplier_Audit__c: {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        Unternehmenszertifikat__c: {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        Zertifikate__c: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        AuditProperty__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        AuditPropertyType__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        RecordAccessGrant__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Probe__c: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        Probeversand__c: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        Opportunity: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        User: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Aktueller_Preis_und_Verf_gbarkeit__c: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        Reklamation__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Prozessfeedback__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #495: reine Lookup-Ziele, nur admin/staff
        Campaign: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Quote: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #2085: nicht integrierte SF-Objekte (constants.ts ADMIN_ONLY_SOBJECTS) — kein Zugriff
        ...adminOnlyObjectRows(false)
    },
    // #1855 partner: extern, ohne jeden Salesforce-Zugriff. Sieht Dashboard,
    // eigenes Profil und das Wiki (nur die für partner freigegebenen Einträge,
    // wikiVisibility.ts). Keine Record-Regeln (appliesTo unverändert), nicht
    // record-scoped, aber CONTENT_ONLY_ROLES (nicht intern).
    partner: {
        dashboard: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        profile: {
            view: true,
            create: false,
            edit: true,
            delete: false
        },
        'user-management': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        'recyclate-grade': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        'recyclate-compatibility': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        documents: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        'rigk-module': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Finance: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        'access-management': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        plastrack: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        admin: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        operations: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        sales: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        'travel-expenses': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        'working-hours': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        absences: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        'verification-module': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        'notification-management': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        'pia-management': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        pricing: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #1154: Redaktion der öffentlichen Seiten (/cms) — admin und Staff mit Tag editor (#1154)
        cms: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #1330: internes Wiki (/wiki), gepflegt über `cms`. #1507: jede Rolle darf
        // hinein, sieht aber nur die für sie freigegebenen Einträge (wikiVisibility.ts)
        wiki: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        // #1435: Anfragen aus dem Kontaktformular — admin und staff; löschen (DSGVO) nur admin
        // #1589: Staff-Tags pflegen — nur admin und Staff mit Tag hr
        'staff-tags': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #1576: Bereichsverwaltung Zeit & Abwesenheit — admin und Staff mit Tag hr
        'time-admin': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #1682: Admin-Seite /mailing — nur admin
        mailing: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #1844: Admin-Seite /jobs — nur admin
        jobs: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #1856/#1927: /my-auctions — admin und partner (partner nur mit Pool-Rolle provider_admin, Scope-Gate tagGates.ts)
        'my-auctions': {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        // #1889: /auctions — admin und partner (partner nur mit Tag ineos, tagGates.ts)
        auctions: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        // #1889: weitere Auktionsseiten im Gerüst — nur admin
        'auctions-admin': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Case: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Task: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Event: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Contact: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Account: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Produktionsstandort__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Projekt__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Bedarfe__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Lohn__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Product2: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Material_Proposal__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Sample_Sending__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Sample_Feedback__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Requirement__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Order: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Contract: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Kostenstelle_plastship__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        DATEV_Sachkonto__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Abfallfraktionen__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        OrderItem: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Abrechnung__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Invoice__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Monitored_Material__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Materialanalyse__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Onboarding__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Kontakt_bergaben__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Supplier_Audit__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Unternehmenszertifikat__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Zertifikate__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        AuditProperty__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        AuditPropertyType__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        RecordAccessGrant__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Probe__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Probeversand__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Opportunity: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        User: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Aktueller_Preis_und_Verf_gbarkeit__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Reklamation__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Prozessfeedback__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #495: reine Lookup-Ziele, nur admin/staff
        Campaign: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Quote: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #2085: nicht integrierte SF-Objekte (constants.ts ADMIN_ONLY_SOBJECTS) — kein Zugriff
        ...adminOnlyObjectRows(false)
    }
};
function getGlobalPermissions() {
    return DEFAULT_GLOBAL_PERMISSIONS;
}
const globalPermissions = DEFAULT_GLOBAL_PERMISSIONS;
const DEFAULT_STAFF_TAG_PERMISSIONS = {
    // management: Resolved dynamically via resolveStaffTags() -- gets union of ALL other tags
    management: {},
    finance: {
        Finance: {
            view: true,
            create: true,
            edit: true
        },
        // Finance staff get enhanced financial object access
        Abrechnung__c: {
            view: true,
            create: true,
            edit: true
        },
        Invoice__c: {
            view: true,
            create: true,
            edit: true
        },
        Order: {
            view: true,
            create: true,
            edit: true
        } // Financial context for orders
    },
    sales: {
        sales: {
            view: true,
            create: true,
            edit: true
        },
        Opportunity: {
            view: true,
            create: true,
            edit: true
        },
        Bedarfe__c: {
            view: true,
            create: true,
            edit: true
        },
        Lohn__c: {
            view: true,
            create: true,
            edit: true
        },
        Material_Proposal__c: {
            view: true,
            create: true,
            edit: true
        },
        Kontakt_bergaben__c: {
            view: true,
            create: true,
            edit: true
        }
    },
    operations: {
        operations: {
            view: true,
            create: true,
            edit: true
        },
        Order: {
            view: true,
            create: true,
            edit: true
        },
        OrderItem: {
            view: true,
            create: true,
            edit: true
        },
        Produktionsstandort__c: {
            view: true,
            create: true,
            edit: true
        },
        Sample_Sending__c: {
            view: true,
            create: true,
            edit: true
        },
        Projekt__c: {
            view: true,
            create: true,
            edit: true
        }
    },
    // #1154: Redaktion der öffentlichen Seiten (/cms) — neben admin die einzige Quelle
    // für cms. management vereinigt alle Tags und schließt editor damit ein.
    editor: {
        cms: {
            view: true,
            create: true,
            edit: true,
            delete: true
        }
    },
    // #1589: hr pflegt die Staff-Tags ANDERER Staff-Konten (eigenes Konto sperrt
    // staffTagPolicy.canEditStaffTags). management schließt hr über die Vereinigung ein.
    // #1660: dasselbe Recht lässt Staff-Konten anlegen (accountCreatePolicy); hr und
    // management selbst vergibt nur ein Admin (ADMIN_ONLY_STAFF_TAGS).
    // #1576: dazu die Bereichsverwaltung Zeit & Abwesenheit — neben admin die einzige
    // Quelle für time-admin.
    hr: {
        'staff-tags': {
            view: true,
            edit: true
        },
        'time-admin': {
            view: true,
            create: true,
            edit: true,
            delete: true
        }
    },
    marketing: {
        'notification-management': {
            view: true,
            create: true,
            edit: true,
            delete: true
        }
    },
    // #1592: it vergibt keine Rechte — nur Sichtbarkeit (dashboardRegistry `staffTag`)
    it: {},
    // #1662: intern (Praktikum) ist bisher nur ein Kennzeichen — keine Zusatzrechte,
    // keine Einschränkung. Ein Praktikantenkonto hat die Rechte von Basis-Staff.
    intern: {},
    // #1855: ineos hängt an partner-Konten (TAGS_BY_ROLE) und vergibt keine Rechte.
    // Es öffnet nur Sichtbarkeit: /auctions (tagGates.ts) und Wiki-Freigaben;
    // /my-auctions hängt seit #1927 an der Pool-Mitgliedschaft, nicht am Tag.
    ineos: {}
};
function getStaffTagPermissions() {
    return DEFAULT_STAFF_TAG_PERMISSIONS;
}
const staffTagPermissions = DEFAULT_STAFF_TAG_PERMISSIONS;
const DEFAULT_OBJECT_VISIBILITY_CONFIG = {
    // Lookup-based visibility (uses fields from 2standardvisibility.txt)
    Case: {
        mechanism: 'lookup',
        appliesTo: [
            'agent',
            'user',
            'rigk'
        ],
        lookupRules: [
            {
                lookupField: 'ContactId',
                matchType: 'contact',
                appliesTo: [
                    'agent',
                    'user',
                    'rigk'
                ],
                grants: {
                    showRecord: true,
                    informationCategories: [
                        'customerInformation',
                        'statistics'
                    ]
                }
            }
        ]
    },
    Task: {
        mechanism: 'lookup',
        appliesTo: [
            'agent',
            'user',
            'rigk'
        ],
        lookupRules: [
            {
                lookupField: 'WhoId',
                matchType: 'contact',
                appliesTo: [
                    'agent',
                    'user',
                    'rigk'
                ],
                grants: {
                    showRecord: true,
                    informationCategories: []
                }
            }
        ]
    },
    // RecordAccessGrant-only visibility (no OwnerId access)
    Contact: {
        mechanism: 'recordAccessGrant',
        appliesTo: [
            'agent'
        ]
    },
    Account: {
        mechanism: 'recordAccessGrant',
        appliesTo: [
            'agent'
        ]
    },
    Produktionsstandort__c: {
        mechanism: 'recordAccessGrant',
        appliesTo: [
            'agent'
        ]
    },
    // Ownership-based visibility (OwnerId OR RecordAccessGrant)
    Projekt__c: {
        mechanism: 'ownership',
        appliesTo: [
            'agent',
            'user',
            'rigk'
        ]
    },
    Bedarfe__c: {
        mechanism: 'ownership',
        appliesTo: [
            'agent',
            'user',
            'rigk'
        ]
    },
    Lohn__c: {
        mechanism: 'ownership',
        appliesTo: [
            'agent',
            'user',
            'rigk'
        ]
    },
    Product2: {
        mechanism: 'ownership',
        appliesTo: [
            'agent',
            'user',
            'rigk',
            'advisor'
        ]
    },
    Material_Proposal__c: {
        mechanism: 'ownership',
        appliesTo: [
            'agent',
            'user',
            'rigk'
        ]
    },
    Sample_Sending__c: {
        mechanism: 'ownership',
        appliesTo: [
            'agent',
            'user',
            'rigk'
        ]
    },
    // #271: these were previously unconfigured, so hasRecordAccess fell through to
    // the default-allow branch — a record-filtered role could read another tenant's
    // records by id. All three are owned by their creator (the entity routes set
    // OwnerId = userContext.userId on create), so ownership scoping applies.
    Sample_Feedback__c: {
        mechanism: 'ownership',
        appliesTo: [
            'agent',
            'user',
            'rigk',
            'laboratory',
            'advisor'
        ]
    },
    Requirement__c: {
        mechanism: 'ownership',
        appliesTo: [
            'agent',
            'user',
            'rigk'
        ]
    },
    Aktueller_Preis_und_Verf_gbarkeit__c: {
        mechanism: 'ownership',
        appliesTo: [
            'agent',
            'user',
            'rigk'
        ]
    },
    Order: {
        mechanism: 'ownership',
        appliesTo: [
            'agent',
            'user',
            'rigk'
        ]
    },
    Abrechnung__c: {
        mechanism: 'ownership',
        appliesTo: [
            'agent',
            'user',
            'rigk'
        ]
    },
    Invoice__c: {
        mechanism: 'ownership',
        appliesTo: [
            'agent',
            'user',
            'rigk'
        ]
    },
    Kontakt_bergaben__c: {
        mechanism: 'ownership',
        appliesTo: [
            'agent'
        ]
    },
    Supplier_Audit__c: {
        mechanism: 'ownership',
        appliesTo: [
            'agent',
            'user',
            'rigk'
        ]
    },
    Unternehmenszertifikat__c: {
        mechanism: 'ownership',
        appliesTo: [
            'agent',
            'user',
            'rigk'
        ]
    },
    // Module-based visibility
    Monitored_Material__c: {
        mechanism: 'module',
        appliesTo: [
            'agent',
            'user',
            'rigk',
            'advisor'
        ],
        moduleRequired: 'mmaterials'
    },
    // Laboratory-specific (also ownership-based)
    // #331: agent ergänzt — Materialanalyse ist für agent objekt-seitig unsichtbar
    // (view: false), aber AuditProperty__c erbt seinen Record-Zugriff vom Parent
    // (parentRecord unten). Ohne agent hier fiele die Parent-Prüfung für agents
    // in den Default-Allow-Zweig und der Scope wäre wirkungslos.
    Materialanalyse__c: {
        mechanism: 'ownership',
        appliesTo: [
            'laboratory',
            'advisor',
            'agent'
        ]
    },
    // #331: Prüfparameter haben weder OwnerId noch eigenen Account-Lookup —
    // Record-Zugriff wird vom Materialanalyse-Parent geerbt (laboratory:
    // Dienstleister__c-Match, agent: OwnerId/Grants auf der Analyse). Ohne
    // diesen Eintrag fiel hasRecordAccess in den Default-Allow-Zweig
    // (#271-Bugklasse): laboratory/agent konnten JEDEN der 6.900+ Bestands-
    // datensätze per Id lesen und beschreiben (cross-tenant IDOR).
    AuditProperty__c: {
        mechanism: 'parentRecord',
        appliesTo: [
            'laboratory',
            'agent'
        ],
        parentObject: 'Materialanalyse__c',
        parentLookupField: 'Materialanalyse__c'
    },
    // #496: Contract fehlte hier komplett — hasRecordAccess fiel in den
    // Default-Allow-Zweig (#271-Bugklasse) und buildRecordFilter auf
    // 'Id != null'. Jede Rolle mit Contract-view erreichte damit JEDEN Vertrag
    // der Org, inklusive der Orders-Related-List mit Einkaufspreisen und dem
    // Download der Vertrags-PDF.
    //
    // Warum childRecord und nicht lookup/ownership/recordAccessGrant:
    //  - Contract trägt keinen Bearbeiter-Kontakt. Die einzige Contact-Referenz
    //    im Objekt ist CustomerSignedId — der Unterzeichner, nicht der
    //    Bearbeiter. Die 7 Kontakt-Lookups, über die agent seine Aufträge sieht,
    //    sind am Vertrag nicht abbildbar.
    //  - AccountId ist der Vertragspartner, nicht der Bearbeiter. Eine
    //    matchType-'account'-Regel würde zusätzlich hasParentAccountGrant und
    //    den accountLookupFields-Zweig scharfschalten: jeder BESTEHENDE
    //    Account-Grant gäbe rückwirkend Vertragszugriff.
    //  - OwnerId ist immer ein interner SF-User (Anlage in Salesforce oder
    //    seit #907 durch Staff/Admin in der App); buildRecordFilter emittiert
    //    OwnerId ohnehin nirgends.
    //
    // Die Sichtbarkeit erbt sich stattdessen vom KIND: wer einen Auftrag des
    // Vertrags sehen darf, darf den Vertrag sehen. Das ist nicht quer zum
    // Order-Scoping — es IST das Order-Scoping, und es entspricht dem, wofür
    // #449 den Vertrag gebaut hat (die Related List „Aufträge" ist das
    // Herzstück). Nebeneffekt: das Feld „Vertrag" am Auftrag kann nie ins Leere
    // zeigen, denn wer den Auftrag sieht, sieht per Konstruktion dessen Vertrag.
    //
    // appliesTo listet ALLE record-gefilterten Rollen — auch die mit
    // view: false, damit ein späteres view: true nicht wieder in den
    // Default-Allow fällt (Lehre aus #271/#331).
    Contract: {
        mechanism: 'childRecord',
        appliesTo: [
            'agent',
            'user',
            'rigk',
            'laboratory',
            'advisor'
        ],
        childObject: 'Order',
        childLookupField: 'ContractId'
    }
};
function getObjectVisibilityConfig() {
    return DEFAULT_OBJECT_VISIBILITY_CONFIG;
}
const objectVisibilityConfig = DEFAULT_OBJECT_VISIBILITY_CONFIG;
const DEFAULT_RECORD_VISIBILITY_RULES = {
    // #495: reine Lookup-Ziele (Opportunity.CampaignId / SyncedQuoteId).
    // Nur admin/staff haben view — die sind ohnehin nicht record-gefiltert.
    Campaign: [],
    Quote: [],
    // #449/#496: intern — am Objekt gibt es kein Kontakt-Lookup, über das sich
    // scopen ließe. Leer heißt hier NICHT „alles sichtbar": der Record-Scope
    // steht in DEFAULT_OBJECT_VISIBILITY_CONFIG.Contract (childRecord).
    // Bewusst leer, damit hasParentAccountGrant und der accountLookupFields-
    // Zweig von buildRecordFilter für Contract strukturell tot bleiben — sonst
    // gäbe jeder bestehende Account-Grant rückwirkend Vertragszugriff.
    Contract: [],
    // #325: intern — keine kundenseitige Sichtbarkeit
    Kostenstelle_plastship__c: [],
    // #792: intern — Kontenplan nur admin/staff/accounting
    DATEV_Sachkonto__c: [],
    // #831: intern (nur admin/staff sehen das Objekt)
    Abfallfraktionen__c: [],
    Case: [
        {
            lookupField: 'ContactId',
            matchType: 'contact',
            appliesTo: [
                'agent',
                'user',
                'rigk'
            ],
            grants: {
                showRecord: true,
                informationCategories: [
                    'customerInformation',
                    'statistics'
                ]
            }
        }
    ],
    Task: [
        {
            lookupField: 'WhoId',
            matchType: 'contact',
            appliesTo: [
                'agent',
                'user',
                'rigk'
            ],
            grants: {
                showRecord: true,
                informationCategories: []
            }
        }
    ],
    Event: [
        {
            lookupField: 'WhoId',
            matchType: 'contact',
            appliesTo: [
                'agent',
                'user',
                'rigk'
            ],
            grants: {
                showRecord: true,
                informationCategories: []
            }
        }
    ],
    Contact: [
        {
            lookupField: 'Id',
            matchType: 'contact',
            appliesTo: [
                'agent',
                'user',
                'rigk'
            ],
            grants: {
                showRecord: true,
                informationCategories: [
                    'customerInformation'
                ]
            }
        },
        {
            lookupField: 'AccountId',
            matchType: 'account',
            appliesTo: [
                'agent',
                'user',
                'rigk'
            ],
            grants: {
                showRecord: true,
                informationCategories: [
                    'customerInformation'
                ]
            }
        }
    ],
    Account: [
        {
            lookupField: 'Id',
            matchType: 'account',
            appliesTo: [
                'agent',
                'user',
                'rigk'
            ],
            grants: {
                showRecord: true,
                informationCategories: [
                    'customerInformation'
                ]
            }
        },
        {
            // RIGK-only: unlock the four Verh_ltnis_RIGK_System / Pamira / Hannawald / ERDE
            // fields on the same Account record. The previous rule already grants
            // customerInformation; this one adds rigkRelationships on top for rigk role only.
            lookupField: 'Id',
            matchType: 'account',
            appliesTo: [
                'rigk'
            ],
            grants: {
                showRecord: true,
                informationCategories: [
                    'rigkRelationships'
                ]
            }
        }
    ],
    Produktionsstandort__c: [
        {
            lookupField: 'Verantwortlicher_Lieferung__c',
            matchType: 'contact',
            appliesTo: [
                'agent',
                'user',
                'rigk'
            ],
            grants: {
                showRecord: true,
                informationCategories: [
                    'transportInformation',
                    'statistics'
                ]
            }
        }
    ],
    Projekt__c: [
        {
            lookupField: 'Hauptlieferant__c',
            matchType: 'account',
            appliesTo: [
                'agent',
                'user',
                'rigk'
            ],
            grants: {
                showRecord: true,
                informationCategories: [
                    'supplierInformation'
                ]
            }
        },
        {
            lookupField: 'Hauptkunde__c',
            matchType: 'account',
            appliesTo: [
                'agent',
                'user',
                'rigk'
            ],
            grants: {
                showRecord: true,
                informationCategories: [
                    'customerInformation'
                ]
            }
        },
        {
            lookupField: 'Lohndienstleister__c',
            matchType: 'account',
            appliesTo: [
                'agent',
                'user',
                'rigk'
            ],
            grants: {
                showRecord: true,
                informationCategories: [
                    'sellingInformation'
                ]
            }
        }
    ],
    Bedarfe__c: [
        {
            lookupField: 'Account__c',
            matchType: 'account',
            appliesTo: [
                'agent',
                'user',
                'rigk'
            ],
            grants: {
                showRecord: true,
                informationCategories: [
                    'customerInformation',
                    'statistics'
                ]
            }
        }
    ],
    Lohn__c: [
        {
            lookupField: 'Account__c',
            matchType: 'account',
            appliesTo: [
                'agent',
                'user',
                'rigk'
            ],
            grants: {
                showRecord: true,
                informationCategories: [
                    'customerInformation',
                    'statistics'
                ]
            }
        }
    ],
    Product2: [
        {
            // #358: auf dem EIGENEN Produkt (Account__c = eigener Account) bekommt der
            // Kunde die pflegbaren Produktfelder (customerInformation) — Marktplatz-
            // Produkte anderer bleiben auf die alwaysVisible-Katalogfelder beschränkt.
            // showRecord ist für den Marktplatz ohnehin via hasRecordAccess-Bypass true;
            // hier zählt nur die Kategorie-Freigabe für die Feld-Sichtbarkeit.
            lookupField: 'Account__c',
            matchType: 'account',
            appliesTo: [
                'agent',
                'user',
                'rigk'
            ],
            grants: {
                showRecord: true,
                informationCategories: [
                    'customerInformation'
                ]
            }
        }
    ],
    Material_Proposal__c: [
        {
            lookupField: 'Carrier_Contact__c',
            matchType: 'contact',
            appliesTo: [
                'agent',
                'user',
                'rigk'
            ],
            grants: {
                showRecord: true,
                // #329: transportPricing (Preis/t + Carrier-Notiz) NUR hier — Kunde und
                // Lieferant bekommen transportInformation, aber nicht die Preise.
                informationCategories: [
                    'transportInformation',
                    'transportPricing'
                ]
            }
        },
        {
            lookupField: 'Account_Contact__c',
            matchType: 'contact',
            appliesTo: [
                'agent',
                'user',
                'rigk'
            ],
            grants: {
                showRecord: true,
                informationCategories: [
                    'customerInformation',
                    'transportInformation',
                    'sellingInformation',
                    'statistics'
                ]
            }
        },
        {
            lookupField: 'Supplier_Contact__c',
            matchType: 'contact',
            appliesTo: [
                'agent',
                'user',
                'rigk'
            ],
            grants: {
                showRecord: true,
                informationCategories: [
                    'supplierInformation',
                    'transportInformation',
                    'buyingInformation',
                    'statistics'
                ]
            }
        }
    ],
    Sample_Sending__c: [
        {
            lookupField: 'Kontakt_Anlieferung__c',
            matchType: 'contact',
            appliesTo: [
                'agent',
                'user',
                'rigk'
            ],
            grants: {
                showRecord: true,
                informationCategories: [
                    'customerInformation',
                    'transportInformation'
                ]
            }
        },
        {
            // #329 Welle A (PM 2026-07-03): der ABSENDER hat kein Kontaktfeld am
            // Record — Erkennung über den Ladestellen-Account (Account-Match).
            // Keine Spediteur-Perspektive bei Mustern (PM-Entscheid).
            lookupField: 'Load_from__c',
            matchType: 'account',
            appliesTo: [
                'agent',
                'user',
                'rigk'
            ],
            grants: {
                showRecord: true,
                informationCategories: [
                    'supplierInformation',
                    'transportInformation'
                ]
            }
        }
    ],
    Sample_Feedback__c: [
        {
            // #271 GAP: Sample_Feedback__c has no OwnerId field in Salesforce, so the
            // `ownership` mechanism's OwnerId === userId check can never match. Scope
            // both the list (buildRecordFilter -> `Account__c = '<accountId>'`) and the
            // detail check (hasRecordAccess 'ownership' falls through to
            // matchesRecordVisibilityRule) by the Account lookup instead. Mirrors the
            // Abrechnung__c / Bedarfe__c account-scoping pattern. Account__c is already
            // part of the fetched baseFields, so list and detail stay in agreement.
            lookupField: 'Account__c',
            matchType: 'account',
            appliesTo: [
                'agent',
                'user',
                'rigk'
            ],
            grants: {
                showRecord: true,
                informationCategories: [
                    'customerInformation'
                ]
            }
        }
    ],
    Requirement__c: [
        {
            lookupField: 'Contact__c',
            matchType: 'contact',
            appliesTo: [
                'agent',
                'user',
                'rigk'
            ],
            grants: {
                showRecord: true,
                informationCategories: [
                    'customerInformation'
                ]
            }
        }
    ],
    Order: [
        {
            lookupField: 'Ansprechpartner_Transport_Lieferstelle__c',
            matchType: 'contact',
            appliesTo: [
                'agent',
                'user',
                'rigk'
            ],
            grants: {
                showRecord: true,
                informationCategories: [
                    'customerInformation',
                    'transportInformation',
                    'sellingInformation',
                    'statistics'
                ]
            }
        },
        {
            lookupField: 'BillToContactId',
            matchType: 'contact',
            appliesTo: [
                'agent',
                'user',
                'rigk'
            ],
            grants: {
                showRecord: true,
                informationCategories: [
                    'customerInformation',
                    'transportInformation',
                    'sellingInformation',
                    'statistics'
                ]
            }
        },
        {
            lookupField: 'ShipToContactId',
            matchType: 'contact',
            appliesTo: [
                'agent',
                'user',
                'rigk'
            ],
            grants: {
                showRecord: true,
                informationCategories: [
                    'customerInformation',
                    'transportInformation',
                    'sellingInformation',
                    'statistics'
                ]
            }
        },
        {
            lookupField: 'CustomerAuthorizedById',
            matchType: 'contact',
            appliesTo: [
                'agent',
                'user',
                'rigk'
            ],
            grants: {
                showRecord: true,
                informationCategories: [
                    'customerInformation',
                    'transportInformation',
                    'sellingInformation',
                    'statistics'
                ]
            }
        },
        {
            lookupField: 'Ansprechpartner_Transport_Ladestelle__c',
            matchType: 'contact',
            appliesTo: [
                'agent',
                'user',
                'rigk'
            ],
            grants: {
                showRecord: true,
                informationCategories: [
                    'supplierInformation',
                    'transportInformation',
                    'buyingInformation',
                    'statistics'
                ]
            }
        },
        {
            lookupField: 'Zust_ndiger_Kontakt_Lieferant__c',
            matchType: 'contact',
            appliesTo: [
                'agent',
                'user',
                'rigk'
            ],
            grants: {
                showRecord: true,
                informationCategories: [
                    'supplierInformation',
                    'transportInformation',
                    'buyingInformation',
                    'statistics'
                ]
            }
        },
        {
            // #329 Welle A (PM 2026-07-03): Spediteur-Perspektive auf Auftragsebene —
            // vorher konnte ein Transporteur-Kontakt eine Order gar nicht sehen.
            // transportPricing (Transporteur_Preis_NEU__c) NUR hier, analog MP.
            lookupField: 'Transporteur_Ansprechpartner_NEU__c',
            matchType: 'contact',
            appliesTo: [
                'agent',
                'user',
                'rigk'
            ],
            grants: {
                showRecord: true,
                informationCategories: [
                    'transportInformation',
                    'transportPricing'
                ]
            }
        }
    ],
    OrderItem: [],
    Abrechnung__c: [
        {
            lookupField: 'Account__c',
            matchType: 'account',
            appliesTo: [
                'agent',
                'user',
                'rigk'
            ],
            grants: {
                showRecord: true,
                informationCategories: [
                    'earnings'
                ]
            }
        }
    ],
    Invoice__c: [
        {
            lookupField: 'Account__c',
            matchType: 'account',
            appliesTo: [
                'agent',
                'user',
                'rigk'
            ],
            grants: {
                showRecord: true,
                informationCategories: [
                    'earnings'
                ]
            }
        }
    ],
    Monitored_Material__c: [
        {
            lookupField: 'Kunde__c',
            matchType: 'account',
            appliesTo: [
                'agent',
                'user',
                'rigk'
            ],
            grants: {
                showRecord: true,
                informationCategories: [
                    'customerInformation'
                ]
            }
        },
        {
            lookupField: 'Kontakt_Kunde__c',
            matchType: 'contact',
            appliesTo: [
                'agent',
                'user',
                'rigk'
            ],
            grants: {
                showRecord: true,
                informationCategories: [
                    'customerInformation'
                ]
            }
        }
    ],
    Materialanalyse__c: [
        {
            lookupField: 'Dienstleister__c',
            matchType: 'account',
            appliesTo: [
                'laboratory'
            ],
            grants: {
                showRecord: true,
                informationCategories: []
            }
        }
    ],
    Onboarding__c: [],
    Kontakt_bergaben__c: [
        {
            lookupField: 'Kontakt_Empf_nger__c',
            matchType: 'contact',
            appliesTo: [
                'agent'
            ],
            grants: {
                showRecord: true,
                informationCategories: []
            }
        },
        {
            lookupField: 'Kontakt_bergeben__c',
            matchType: 'contact',
            appliesTo: [
                'agent'
            ],
            grants: {
                showRecord: true,
                informationCategories: []
            }
        }
    ],
    Supplier_Audit__c: [
        {
            lookupField: 'Audit_Contact__c',
            matchType: 'contact',
            appliesTo: [
                'agent',
                'user',
                'rigk'
            ],
            grants: {
                showRecord: true,
                // #369: vorher leer — ein kontakt-gematchtes Audit lieferte nur
                // Id/Name/CreatedDate (leere Slots).
                informationCategories: [
                    'customerInformation'
                ]
            }
        },
        {
            // #369: Account-Match analog Bedarfe/Lohn/Zertifikate — rigk sieht die
            // Audits des eigenen Accounts; das RIGK-Modul listet zusätzlich pro
            // Gruppen-Account (gated Route).
            lookupField: 'Account__c',
            matchType: 'account',
            appliesTo: [
                'agent',
                'user',
                'rigk'
            ],
            grants: {
                showRecord: true,
                informationCategories: [
                    'customerInformation'
                ]
            }
        }
    ],
    Unternehmenszertifikat__c: [
        {
            lookupField: 'Account__c',
            matchType: 'account',
            appliesTo: [
                'agent',
                'user',
                'rigk'
            ],
            grants: {
                showRecord: true,
                // #329 Welle A: der Kunde sieht sein eigenes Zertifikat inhaltlich
                // (vorher leer — Record sichtbar, aber keine Kategorie gewährt).
                informationCategories: [
                    'customerInformation'
                ]
            }
        }
    ],
    RecordAccessGrant__c: [
        {
            lookupField: 'ContactId__c',
            matchType: 'contact',
            appliesTo: [
                'agent',
                'user',
                'rigk'
            ],
            grants: {
                showRecord: true,
                informationCategories: []
            }
        }
    ],
    Probe__c: [
        {
            lookupField: 'ContactId__c',
            matchType: 'contact',
            appliesTo: [
                'agent',
                'user',
                'rigk'
            ],
            grants: {
                showRecord: true,
                informationCategories: []
            }
        }
    ],
    Probeversand__c: [
        {
            lookupField: 'ContactId__c',
            matchType: 'contact',
            appliesTo: [
                'agent',
                'user',
                'rigk'
            ],
            grants: {
                showRecord: true,
                informationCategories: []
            }
        }
    ],
    Opportunity: [
        {
            lookupField: 'AccountId',
            matchType: 'account',
            appliesTo: [
                'agent',
                'user',
                'rigk'
            ],
            grants: {
                showRecord: true,
                informationCategories: [
                    'customerInformation'
                ]
            }
        }
    ],
    User: [],
    Aktueller_Preis_und_Verf_gbarkeit__c: [],
    Reklamation__c: [],
    Prozessfeedback__c: [],
    // #362: Zertifikats-Katalog — globale Stammdaten (Lookup-Ziel), kein Record-Scoping.
    Zertifikate__c: [],
    // #331: Prüfparameter — Sichtbarkeit läuft über objectPermissions (interne Objekte)
    AuditProperty__c: [],
    AuditPropertyType__c: []
};
function getRecordVisibilityRules() {
    return DEFAULT_RECORD_VISIBILITY_RULES;
}
const recordVisibilityRules = DEFAULT_RECORD_VISIBILITY_RULES;
const DEFAULT_FIELD_DEFINITIONS = {
    // #495: reine Lookup-Ziele (Opportunity.CampaignId / SyncedQuoteId).
    Campaign: {},
    Quote: {},
    // #449
    Contract: {},
    // #325
    Kostenstelle_plastship__c: {},
    // #792
    DATEV_Sachkonto__c: {},
    // #831
    Abfallfraktionen__c: {},
    Case: {
        supplierInformation: [
            'Lieferant_Produkt__c'
        ],
        // #329 Welle A: der Kunde sieht seinen eigenen Vorgang inkl. Typ, Produkt
        // und dem Anfragetext (Description war schon hier, wurde aber von der Config
        // nicht für user/rigk gezeigt).
        // #1419: Produkt__c raus — die Id löste sich zum Produktnamen samt
        // Lieferant auf; maskRecordFields entfernt auch Produkt__r.
        customerInformation: [
            'ContactId',
            'AccountId',
            'Description',
            'Type'
        ],
        statistics: [
            'CheckAccount__c',
            'CheckContact__c',
            'CheckProduct__c',
            'CheckTypeSet__c',
            'CreatedDate',
            'ClosedDate',
            'Reaction_Time__c',
            'Processing_Time__c',
            'First_Touched__c',
            'Count_Onboardings__c',
            'Count_Requirements__c',
            'Count_MaterialProposals__c',
            'Count_ContactForwarding__c',
            'Count_Opportunities__c',
            'Count_Claim__c'
        ]
    },
    Task: {},
    Event: {},
    Probe__c: {},
    Probeversand__c: {},
    Contact: {},
    Account: {
        customerInformation: [
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
            'Agent__c',
            'ParentId',
            'AccountSource',
            'Charakteristik__c',
            'Verh_ltnis__c',
            'Ist_Key_Account__c'
        ],
        rigkRelationships: [
            // Only the 'rigk' role gets read access to these — wired via record-visibility rule
            'Verh_ltnis_RIGK_System__c',
            'Verh_ltnis_Pamira__c',
            'Verh_ltnis_Hannawald__c',
            'Verh_ltnis_ERDE__c'
        ],
        buyingInformation: [
            'Standardbedingung_Einkauf_von_Account__c'
        ],
        sellingInformation: [
            'E_Mailadresse_Rechnungen__c',
            'Besonderheiten_Rechnungsstellung__c',
            'Standardbedingung_Verkauf_an_Account__c',
            'Standardvorgehen_Bemusterung__c'
        ],
        statistics: [
            'AdditionalInformation_rate__c',
            'ContactInformation_rate__c',
            'InvoiceInformation_rate__c',
            'ResearchInformation_rate__c',
            'AccountInformation_rate__c',
            'TotalInformation_rate__c',
            'Count_Produktionsstandort__c',
            'Count_Audits__c',
            'Count_Certificates__c',
            'Count_Dienstleistungsmonitor__c',
            'Count_Reklamation_Verantwortlich__c',
            'Count_Reklamation_Kunde__c',
            'Count_Auftr_ge_Lieferant__c',
            'Count_Auftr_ge_Kunde__c',
            'Count_Abrechnungen_Eingang__c',
            'Count_Abrechnungen_Ausgang__c',
            'Datum_letzte_ReklamationV__c',
            'Datum_letzter_Auftrag_Lieferant__c',
            'Datum_letzter_Auftrag_Kunde__c',
            'Datum_letzte_Abrechnung__c',
            'Datum_letzte_Aktivit_t_Operations__c',
            'Lieferanten_Score__c',
            'Kunden_Score__c',
            'Ma_nahmen__c'
        ]
    },
    Produktionsstandort__c: {
        transportInformation: [
            'Verantwortlicher_Lieferung__c'
        ],
        statistics: [
            'plastship_Deeplink__c',
            'Anzahl_WL_Eintr_ge__c',
            'Ist_plastship_Lager__c',
            'Kosten_pro_Stellplatz_pro_Monat__c',
            'Kosten_Ein_Auslagerung_pauschal__c',
            'Lagermenge_Gesamt__c',
            'Aktuelle_Monatskosten_Bestand__c'
        ]
    },
    Projekt__c: {
        supplierInformation: [
            'Hauptlieferant__c'
        ],
        customerInformation: [
            'Hauptkunde__c'
        ],
        sellingInformation: [
            'Lohndienstleister__c'
        ]
    },
    Bedarfe__c: {
        // #329 Welle A: die komplette Kunden-Feldliste (vom PM bestätigt, 2026-07-02) —
        // das Materialprofil, das der Kunde selbst pflegt. Ohne diese Einträge lieferte
        // der Server Kunden auf ihren EIGENEN Bedarfen nur Name/Status (leere Slots).
        // Intern bleiben (bewusst NICHT hier): Bedarfsstatus__c, OwnerId-Details,
        // Qualifizierungs-Flags (Im_Fokus/Hohes_Potenzial/Hohes_Risiko/Sichtbar_f_r_Kunden),
        // Projekt-/Vorgangs-/Onboarding-Verknüpfungen.
        customerInformation: [
            'Account__c',
            'Land_Account__c',
            'Produktionsstandort__c',
            'Beschreibung_Bedarf__c',
            'Monatsbedarf_t__c',
            'Zielpreis__c',
            'Mengenpotenzial_t_p_a__c',
            'Materialkategorie__c',
            'Hauptpolymer__c',
            'Materialtyp__c',
            'Materialfarbe__c',
            'Rezyklatdefinition__c',
            'Verarbeitungsverfahren__c',
            'Anwendung__c',
            'F_llstoff_Text__c',
            'MFR_Min__c',
            'MFR_Max__c',
            'MFR_Mittelwert__c',
            'MFR_Temp__c',
            'MFR_kg__c',
            'Dichte_Min__c',
            'Dichte_Max__c',
            'Aschegehalt_Min__c',
            'Aschegehalt_Max__c',
            'Korngr_e_mm_Min__c',
            'Korngr_e_mm_Max__c',
            'Zugfestigkeit_Min__c',
            'Zugfestigkeit_Max__c',
            'Zug_E_Modul_Min__c',
            'Zug_E_Modul_Max__c',
            'Bruchdehnung_Min__c',
            'Bruchdehnung_Max__c',
            'Kerbschlagzaehigkeit_Min__c',
            'Kerbschlagzaehigkeit_Max__c'
        ],
        statistics: [
            'Count_Projects__c',
            'Count_Material_Proposal__c',
            'Time_to_Action__c',
            'First_Project_Created__c',
            'First_Material_Proposal_Created__c'
        ]
    },
    Lohn__c: {
        // #329 Welle A: der Kunde sieht die zu seinem Account gehörende
        // Lohndienstleistung inhaltlich (Kategorie/Preis/Beschreibung waren nie
        // geliefert — Katalogpflege bleibt Staff, daher view-only).
        // #404: Land_Account__c/Produktionsstandort__c und die komplette statistics-
        // Kategorie waren ein Copy-Paste aus dem Bedarfe__c-Block darüber. Auf Lohn__c
        // existieren diese Felder nicht — describe (teilkopie UND Produktion) liefert
        // 15 Felder, Tooling-API FieldDefinition als Systemadministrator 17 (inkl.
        // System-Pseudofelder). Keines davon ist dabei; also entfernt statt gepinnt.
        customerInformation: [
            'Account__c',
            'Dienstleistungskategorie__c',
            'Preis_pro_Tonne_standard__c',
            'Beschreibung__c'
        ]
    },
    Product2: {
        // #358: Felder, die der Kunde auf dem EIGENEN Produkt sieht/pflegt (Account-
        // Match schaltet diese Kategorie frei). Katalog-/Tech-Felder (Polymer, Farbe,
        // MFR, Dichte …) sind bereits in alwaysVisibleFields.Product2 und müssen hier
        // nicht wiederholt werden. Bewusst NICHT hier (bleibt intern, staff-gepflegt):
        // Sales_Intent__c, Im_Fokus/Hohes_Potenzial/Hohes_Risiko, Risikobewertung,
        // Accountinhaber, Dokumentencheck-Flags, Verknüpfungen (Projekt/Case/Onboarding).
        customerInformation: [
            'Account__c',
            'Produktionsstandort__c',
            // Stammdaten/Material (Text-/Kategorie-Ergänzungen zu den alwaysVisible-Katalogfeldern)
            'Product_Description__c',
            'Materialkategorie__c',
            'Filler_Material_Text__c',
            'Foreign_Polymers_Text__c',
            'Contaminants_Text__c',
            // Abwicklung / kaufmännisch (#358 PM 2026-07-06: Verpackung/Muster/Lager raus)
            'Tonnage_per_truck__c',
            'Yearly_capacity_in_t__c',
            'AVV_Nummer__c',
            'Recycled_Content__c',
            // Zertifizierungen (Selbstauskunft des Herstellers)
            'REACH_Confirmation__c',
            'FDA_Approval__c',
            'SVHC_Approval__c',
            'UN_Approval__c',
            'Cosmetics_Approval_Rinse_Off__c',
            'Cosmetics_Approval_Leave_On__c'
        ]
    },
    Material_Proposal__c: {
        supplierInformation: [
            'Product__c',
            'Producer_in_Product_Account__c',
            'Monthly_availability_in_t__c',
            'Supplier__c',
            'Supplier_Contact__c',
            'Relation_to_Supplier__c',
            'Standard_Business_Terms_Supplier__c',
            'Available_Sample_plastship_kg__c',
            'Sample_Order_from_Supplier__c',
            'Sample_Order_from_Supplier_Status__c',
            'Loading_Location__c'
        ],
        customerInformation: [
            'Account__c',
            'Account_Contact__c',
            'Relation_to_Customer__c',
            'Standard_Business_Terms_Customer__c',
            'Standard_Sampling_Process_Customer__c',
            'Delivery_Location__c',
            // #329: der Kunde sieht den Status seines Musterversands
            'Sample_Sending_to_Account__c'
        ],
        // #329 Welle A: Lade-/Lieferort zusätzlich in transport — der Spediteur
        // (nur transportInformation) braucht Von/Nach; Kunde/Lieferant hatten die
        // Orte über ihre eigenen Kategorien ohnehin schon.
        transportInformation: [
            'Tonnage_per_truck__c',
            'Carrier__c',
            'Carrier_Contact__c',
            'Loading_Location__c',
            'Delivery_Location__c'
        ],
        buyingInformation: [
            'Purchasing_price_per_ton__c',
            'Total_Purchasing_Price__c'
        ],
        sellingInformation: [
            'Sales_Price_per_ton__c',
            'Total_Sales_Price__c',
            'Delivery_Terms_Offer__c',
            // #329: die angebotene Menge gehört zum Angebot an den Kunden
            'Amount_monthly_t_offered__c'
        ],
        // #329: Transportpreis + Notiz NUR für den Spediteur (eigene schmale
        // Kategorie, der Carrier-Regel zugeordnet) — bewusst NICHT in
        // transportInformation (Kunde+Lieferant) und getrennt von den Margen
        // (earnings bleibt intern).
        transportPricing: [
            'Transport_Price_per_ton__c',
            'Total_Transport_Price__c',
            'Carrier_Note__c'
        ],
        earnings: [
            'Transport_Price_per_ton__c',
            'Total_Transport_Price__c',
            'Margin_per_ton__c',
            'Total_margin__c'
        ],
        statistics: [
            'Feedback_Date__c',
            'Feedback__c',
            'Negative_Feedback_Reason_Category__c'
        ]
    },
    Sample_Sending__c: {
        supplierInformation: [
            'Load_from__c',
            'Loading_Produktion__c',
            'Loading_Site__c'
        ],
        customerInformation: [
            'Deliver_to__c',
            'Delivery_Produktion__c',
            'Delivery_Site__c',
            'Kontakt_Anlieferung__c',
            // #329: Land + Lieferschein-Referenz für den Empfänger
            'Delivery_Produktion_Land__c',
            'Auftrags_ID_Lieferschein__c'
        ],
        // #329: Transportkosten__c ENTFERNT (PM 2026-07-03: keine Spediteur-
        // Perspektive bei Mustern; Kosten bleiben intern — der Empfänger soll sie
        // nicht sehen). Menge + Verpackung dafür rein: Empfänger UND Absender
        // brauchen sie (annehmen/verladen); Verpackungszähler zeigen sich in der
        // UI nur, wenn befüllt (hideWhenEmpty).
        transportInformation: [
            'Carrier__c',
            'Carrier_Contact__c',
            'Carrier_E_Mail__c',
            'Carrier_Phone__c',
            'Amount_in_kg__c',
            'Anzahl_BigBags__c',
            'Anzahl_Paletten_Holz__c',
            'Anzahl_Verpackung_Beutel__c',
            'Anzahl_Verpackung_Kartons__c',
            'Sonst_kg_Verpackung_Kunststoff__c'
        ]
    },
    Sample_Feedback__c: {},
    Requirement__c: {
        customerInformation: [
            'Account__c',
            'Contact__c',
            'Status__c',
            'Priority__c',
            'Type__c'
        ]
    },
    Order: {
        supplierInformation: [
            'Lieferant__c',
            'Produktionsstandort__c',
            // #1647: Adresse der Ladestelle zum Standort-Namen
            'Loading_Site__c',
            'Incoterm_Einkauf__c',
            'Zust_ndiger_Kontakt_Lieferant__c',
            'Ansprechpartner_Transport_Ladestelle__c'
        ],
        customerInformation: [
            'CompanyAuthorizedById',
            'AccountId',
            'Produktion_Delivery__c',
            // #1647: Adresse der Lieferstelle zum Standort-Namen
            'Delivery_Site__c',
            'PoNumber',
            'Incoterm__c',
            'Ansprechpartner_Transport_Lieferstelle__c'
        ],
        // #329: NEU-Felder nachgezogen (die Kategorien standen noch auf dem alten
        // Transportblock → Externe bekamen leere Alt-Felder statt echter Daten)
        // + Von/Nach/Termine/AVV/Verpackung, damit die Spediteur-Sicht die Strecke
        // kennt (transport geht an alle drei Parteien).
        transportInformation: [
            'Transportpreis_Nachschlagen__c',
            'Truck_Nr__c',
            'Transporteur__c',
            'Transporteur_Ansprechpartner__c',
            'Transporteur_AP_Telefon__c',
            'Transporteur_AP_EMail__c',
            'Anweisungen_Transporteur_Dispo__c',
            'Transporteur_NEU__c',
            'Transporteur_Ansprechpartner_NEU__c',
            'Produktionsstandort__c',
            'Produktion_Delivery__c',
            'Datum_Abholung_NEU__c',
            'Datum_ETA_NEU__c',
            'AVV_Nummer_Anzeige__c',
            'Verpackung__c'
        ],
        buyingInformation: [
            'Wiegeschein_Lieferant_t__c',
            'Wiegeschein_Lieferant_Nr__c',
            'Einkaufspreis_pro_t__c',
            'Einkaufspreis_Gesamt__c',
            'Datum_Abholung__c',
            'Anweisungen_Transporteur_Ladestelle__c',
            // #329: NEU-Abholdatum + USt Einkauf für die Lieferanten-Sicht
            'Datum_Abholung_NEU__c',
            'Ust_Einkauf__c'
        ],
        sellingInformation: [
            'Wiegeschein_Kunde_t__c',
            'Wiegeschein_Kunde_Nr__c',
            'Liefermenge__c',
            'Vorlage_Labels_Materialnummer_Kunde__c',
            'Verkaufspreis_pro_t__c',
            'TotalAmount',
            'ETA__c',
            'Anweisungen_Transporteur_Entladestelle__c',
            // #329: NEU-Liefertermine, tatsächliche Menge + USt für die Kunden-Sicht
            'Datum_ETA_NEU__c',
            'Datum_tats_Anlieferung_NEU__c',
            'Tats_chliche_Liefermenge__c',
            'Ust__c'
        ],
        // #329: Transportpreis (NEU) NUR für den Spediteur — getrennt von den
        // internen Margen/Alt-Preisfeldern in earnings (bleiben unangetastet).
        transportPricing: [
            'Transporteur_Preis_NEU__c'
        ],
        earnings: [
            'Kostenstelle__c',
            'Marge_2_Gesamt__c',
            'Transporteur_AP_EMail__c',
            'Transportpreis_pro_Tonne__c',
            'Transportpreis__c',
            'Auslagen_pro_t_Agent__c',
            'Auslagen_Agent__c',
            'Marge_pro_t__c',
            'Gesamtmarge__c',
            'Zielbetrag_Kunde__c',
            'Zielbetrag_Lieferant__c',
            'Offener_Betrag_von_Kunde__c',
            'Offener_Betrag_an_Lieferant__c',
            'Offener_Betrag_an_Sales_Agent__c',
            'Offener_Betrag_an_Transporteur__c',
            'DB_plastship__c',
            'Abrechnung_Betrag__c',
            'Betrag_Ausgangsrechnungen_Kunde__c',
            'Betrag_Eingangsrechnungen_Lieferant__c',
            'Betrag_Eingangsrechnungen_Sales_Agent__c',
            'Betrag_Eingangsrechnungen_Sonstige__c',
            'Betrag_Eingangsrechnungen_Transporteur__c',
            'Betrag_Vorkasse_gezahlt__c'
        ],
        statistics: [
            'Anzahl_Auftragsprodukte__c',
            'Anzahl_Abrechnungen__c',
            'Anzahl_Abrechnungen_Kategorie_Rechnung__c',
            'Hat_Datum_Lieferung__c',
            'Datum_letzte_Abrechnung__c',
            'Datum_letzte_Reklamation__c'
        ]
    },
    OrderItem: {},
    Abrechnung__c: {
        earnings: [
            'Rechnungsbetrag__c',
            'Ust__c',
            'Rechnungsbetrag_brutto__c',
            'Eingangsdatum_plastship__c',
            'Originalbeleg_Herkunft__c',
            'Status_der_Abrechnung__c'
        ]
    },
    Invoice__c: {
        earnings: [
            'Amount__c',
            'Tax_Amount__c',
            'Total_Amount__c',
            'Invoice_Date__c',
            'Due_Date__c',
            'Status__c'
        ]
    },
    Monitored_Material__c: {
        supplierInformation: [
            'Account_Produkt__c',
            'Produktbeschreibung_DE__c'
        ],
        customerInformation: [
            'Recycled_Content__c',
            'Kunde__c',
            'Kontakt_Kunde__c',
            'Auftrag__c',
            'Assessment_11_Sampling__c',
            'Assessment_13_Quality__c',
            'Report_Individuelle_Nummer__c',
            'Assessment_1_General__c',
            'Beschreibung_Analysen_Standard__c',
            'Assessment_2_Parameters__c',
            'Beschreibung_Analysen_Folie__c',
            'Assessment_3_Mechanical__c',
            'Beschreibung_Analysen_Geruch__c',
            'Assessment_4_Odour__c',
            'Beschreibung_Analysen_Polymeranteile__c',
            'Assessment_5_Polymers__c',
            'Beschreibung_Analysen_Schwermetalle__c',
            'Assessment_6_HeavyM__c',
            'Beschreibung_Analysen_Optische_Qualit_t__c',
            'Assessment_7_Optical__c',
            'Beschreibung_CO2e__c',
            'Assessment_8_CO2__c',
            'Equivalency_and_market__c',
            'Assessment_9_Market__c',
            'Assessment_10_TDS__c',
            'Final_remarks__c',
            'Assessment_12_Final__c'
        ],
        statistics: [
            'LastModifiedDate',
            'Hauptpolymer__c',
            'Form__c',
            'Datum_Report__c',
            'Quality_Grade__c',
            'Rezyklatdefinition__c',
            'Farbe__c',
            'Abfallfraktion__c',
            // Relationship fields
            'Kunde__r',
            'Ersteller__c',
            'LastModifiedBy'
        ]
    },
    Materialanalyse__c: {},
    Onboarding__c: {},
    Kontakt_bergaben__c: {},
    Supplier_Audit__c: {
        // #369: die Audit-Feldliste (PM: Audits sind fachlich für die Zusammenarbeit
        // in der Gruppe gedacht) — ohne diese Einträge lieferte der Server auf
        // gematchten Audits nur Id/Name/CreatedDate. Produktionsstandort__c und
        // Audit_Contact__c bewusst NICHT (PM 2026-07-07: für rigk unwichtig, und
        // die Lookup-Ziele sind für rigk nicht suchbar).
        customerInformation: [
            'Account__c',
            'Audit_Type__c',
            'Audit_Direction__c',
            'Audit_result__c',
            'Date_of_visit__c',
            'Valid_to__c',
            'Audit_report__c',
            'Master_Checkliste_Audits__c'
        ]
    },
    Unternehmenszertifikat__c: {
        // #329 Welle A: der Kunde sieht sein eigenes registriertes Zertifikat.
        // Betrifft_Standort__c bewusst NICHT hier — Produktionsstandorte sind für
        // Kunden (noch) nicht sichtbar; Kundenansicht folgt als eigenes Feature.
        // #353: Account__c ergänzt — sonst zeigt der Kopf "-" (Feld war maskiert),
        // obwohl der Kunde die Zuordnung zu seinem eigenen Account sehen soll.
        customerInformation: [
            'Account__c',
            'Zertifikate__c',
            'G_ltig_von__c',
            'G_ltig_bis__c',
            'Notiz__c'
        ]
    },
    RecordAccessGrant__c: {},
    Zertifikate__c: {},
    AuditProperty__c: {},
    AuditPropertyType__c: {},
    Opportunity: {},
    User: {},
    Aktueller_Preis_und_Verf_gbarkeit__c: {},
    Reklamation__c: {},
    Prozessfeedback__c: {} // No specific field categories defined
};
function getFieldDefinitions() {
    return DEFAULT_FIELD_DEFINITIONS;
}
const fieldDefinitions = DEFAULT_FIELD_DEFINITIONS;
const DEFAULT_ALWAYS_VISIBLE_FIELDS = {
    // #495: reine Lookup-Ziele (Opportunity.CampaignId / SyncedQuoteId).
    Campaign: [
        'Id',
        'Name'
    ],
    Quote: [
        'Id',
        'Name',
        'QuoteNumber'
    ],
    // #449
    Contract: [
        'Id',
        'ContractNumber',
        'Status',
        'StartDate',
        'EndDate',
        'OwnerId',
        'CreatedDate',
        'LastModifiedDate'
    ],
    // #325
    Kostenstelle_plastship__c: [
        'Id',
        'Name',
        'Nummer_Kostenstelle__c',
        'Kostenstellentyp__c',
        'OwnerId',
        'CreatedDate',
        'LastModifiedDate'
    ],
    // #792: Kontenplan — Name = Kontonummer, Bezeichnung, Typ, aktiv
    DATEV_Sachkonto__c: [
        'Id',
        'Name',
        'Kontonummer__c',
        'Bezeichnung__c',
        'Typ__c',
        'Aktiv__c',
        'CreatedDate',
        'LastModifiedDate'
    ],
    // #831
    Abfallfraktionen__c: [
        'Id',
        'Name',
        'AVV_Nummer__c',
        'CreatedDate',
        'LastModifiedDate'
    ],
    Case: [
        'Id',
        'CaseNumber',
        'Subject',
        'Status',
        'OwnerId',
        'CreatedDate',
        'LastModifiedDate'
    ],
    Task: [
        'Id',
        'Subject',
        'Status',
        'Priority',
        'ActivityDate',
        'OwnerId',
        'CreatedDate'
    ],
    Event: [
        'Id',
        'Subject',
        'StartDateTime',
        'EndDateTime'
    ],
    Probe__c: [
        'Id',
        'Name'
    ],
    Probeversand__c: [
        'Id',
        'Name'
    ],
    Contact: [
        'Id',
        'Name',
        'Email',
        'Phone',
        'Title',
        'AccountId',
        'OwnerId'
    ],
    Account: [
        'Id',
        'Name',
        'Type',
        'Industry',
        'OwnerId',
        'CreatedDate'
    ],
    Produktionsstandort__c: [
        'Id',
        'Name',
        'CreatedDate'
    ],
    // #359: Typ/Status/Priorität identifizieren das Projekt — auch in der Minimal-
    // Sicht soll klar sein, worum es geht (analog Material Proposal/#329). Das
    // generische 'Status' existiert auf Projekt__c nicht (Feld heißt Status__c).
    Projekt__c: [
        'Id',
        'Name',
        'Status__c',
        'Projekttyp__c',
        'Projektpriorit_t__c',
        'OwnerId',
        'CreatedDate'
    ],
    Bedarfe__c: [
        'Id',
        'Name',
        'OwnerId',
        'CreatedDate'
    ],
    Lohn__c: [
        'Id',
        'Name',
        'OwnerId',
        'CreatedDate'
    ],
    // Product2 is the public marketplace catalogue. Anyone with view access
    // (admin/staff natively, customer roles via the marketplace bypass and
    // Sales_Intent__c filter) needs the catalog attributes — Product_Name_Sync,
    // polymer, type, colour, trade name, monthly amount, platform price — to
    // render /products/ and /products/search/. Customer-private linkages like
    // Account__c (supplier company), Material_ID__c, etc. stay gated.
    Product2: [
        'Id',
        'Name',
        'ProductCode',
        'IsActive',
        'OwnerId',
        'CreatedDate',
        'LastModifiedDate',
        // Display name — the formatted "1922-PP-schwarz" Salesforce keeps in sync
        'Product_Name__c',
        // Catalog attributes shown in the table + cards
        'Material_type__c',
        'Main_polymer__c',
        'Material_colour__c',
        'Trade_Name__c',
        'Description',
        'Family',
        'Amount_monthly__c',
        'Platform_Price__c',
        // Picklists driving filters / search
        'Rezyklatdefinition__c',
        'Verarbeitungsverfahren__c',
        'Ziel_Anwendung__c',
        // #1772: Katalog-Stammdaten als Lookup (Spalten Materialkategorie /
        // Abfallfraktionen der Produktliste). Ihre Namen kamen bisher über das
        // ungefilterte __r-Objekt; seit #1772 braucht __r den sichtbaren
        // Fremdschlüssel. Keine kundenbezogene Information.
        'Materialkategorie__c',
        'Abfallfraktionen__c',
        // Marketplace-visibility gate (we filter on it server-side, but it's
        // useful for the UI to know the value when admin/staff inspect the row)
        'Sales_Intent__c',
        // Technical datasheet fields rendered in the "Technische Daten" tab on
        // the marketplace product detail page and consumed by the SimilarMaterials
        // / fit-assessment calculator. These are catalog specs (same tier as
        // polymer/colour) — they never contain customer-private information.
        'MFR_Test_Standard_ISO_1133__c',
        'MFR_Min__c',
        'MFR_Temp__c',
        'MFR_kg__c',
        'MVR_Test_Standard_ISO_1133__c',
        'MVR_Min__c',
        'Dichte_Test_Standard_ISO_1183__c',
        'Dichte_Min__c',
        'Aschegehalt_Test_Standard_ISO_3451__c',
        'Aschegehalt_Min__c',
        'Zug_E_Modul__c',
        'Zug_E_Modul_Min__c',
        'Zugfestigkeit__c',
        'Zugfestigkeit_Min__c',
        'Zugdehnung__c',
        'Zugdehnung_Min__c',
        'Zugspannung_an_der_Streckgrenze_MPa__c',
        'Zugspannung_an_der_Streckgrenze_Min__c',
        'Bruchdehnung__c',
        'Bruchdehnung_Min__c',
        'Bruchspannung__c',
        'Bruchspannung_Min__c',
        'Kerbschlagz_higkeit_Charpy__c',
        'Kerbschlagzaehigkeit_Min__c',
        'Kerbschlagz_higkeit_Izod__c',
        'Kerbschlagz_higkeit_Izod_Min__c',
        'Sch_ttdichte__c',
        'Sch_ttdichte_Min__c',
        'Korngr_e_mm__c',
        'Korngr_e_mm_Min__c',
        'Filter_size_my__c',
        'Oberfl_chenfeuchte__c',
        'Oberfl_chenfeuchte_Min__c'
    ],
    // #329: Produktcode/-kategorie identifizieren den Deal — auch in der
    // Minimal-/Grant-Sicht soll klar sein, worum es geht.
    Material_Proposal__c: [
        'Id',
        'Name',
        'Status__c',
        'OwnerId',
        'CreatedDate',
        'Product_Code__c',
        'Product_Category__c'
    ],
    // #329: Typ + Produkt identifizieren die Sendung auch in der Minimal-/Grant-Sicht.
    Sample_Sending__c: [
        'Id',
        'Name',
        'Status__c',
        'Datum_Versand__c',
        'OwnerId',
        'CreatedDate',
        'Typ__c',
        'Produkt__c'
    ],
    Sample_Feedback__c: [
        'Id',
        'Name',
        'Status__c',
        'CreatedDate'
    ],
    Requirement__c: [
        'Id',
        'Name',
        'Status__c',
        'Priority__c',
        'OwnerId',
        'CreatedDate'
    ],
    // #329: Produkt + Menge identifizieren den Auftrag — auch in der Minimal-/
    // Grant-Sicht soll klar sein, worum es geht (analog Material Proposal).
    Order: [
        'Id',
        'OrderNumber',
        'Status',
        'EffectiveDate',
        'OwnerId',
        'CreatedDate',
        'Produkt__c',
        'Quantity__c'
    ],
    OrderItem: [
        'Id',
        'OrderId',
        'Product2Id',
        'Quantity',
        'UnitPrice',
        'TotalPrice'
    ],
    Abrechnung__c: [
        'Id',
        'Name',
        'Status_der_Abrechnung__c',
        'CreatedDate'
    ],
    Invoice__c: [
        'Id',
        'Name',
        'Status__c',
        'Invoice_Number__c',
        'OwnerId',
        'CreatedDate'
    ],
    // Monitored_Material__c is the public marketplace catalog. Anyone with view
    // access (admin/staff natively, customer roles via the mmaterials module
    // bypass) needs the catalog attributes — polymer, form, color, quality
    // grade, report metadata — to render the MM list. Customer-private fields
    // (Kunde__c, Kontakt_Kunde__c, Account_Produkt__c) are *not* in this list
    // and stay gated by mmaterials hideNames + information categories.
    Monitored_Material__c: [
        'Id',
        'Name',
        'OwnerId',
        'CreatedDate',
        'LastModifiedDate',
        // Display lookup — interne Rollen sehen ohnehin alles; für alle anderen
        // entfernt getVisibleFields die Id wieder (#1419, MM_HIDDEN_ID_FIELDS).
        'Produkt__c',
        // Catalog attributes shown in every MM row
        'Hauptpolymer__c',
        'Form__c',
        'Farbe__c',
        'Avg_Opacity__c',
        'Summe_Defekte__c',
        'Rezyklatdefinition__c',
        'Quality_Grade__c',
        'Recycled_Content__c',
        // Report metadata
        'Datum_Report__c',
        'Report_Individuelle_Nummer__c',
        // High-level assessment text rendered in the assessment columns
        'Assessment_1_General__c',
        'Assessment_2_Parameters__c'
    ],
    Materialanalyse__c: [
        'Id',
        'Name',
        'Status__c',
        'OwnerId',
        'CreatedDate'
    ],
    Onboarding__c: [
        'Id',
        'Name',
        'OwnerId',
        'CreatedDate'
    ],
    Kontakt_bergaben__c: [
        'Id',
        'Name',
        'OwnerId',
        'CreatedDate'
    ],
    Supplier_Audit__c: [
        'Id',
        'Name',
        'CreatedDate'
    ],
    // #370: die Kern-Felder mitliefern — die Detailseite eines GRUPPEN-Zertifikats
    // ist für rigk über den Gruppen-Bypass erreichbar, aber die Kategorie-Grants
    // matchen nur den EIGENEN Account → ohne diese Einträge zeigte die Seite
    // leere Slots. Zugriff bleibt über hasRecordAccess gegated; die Felder sind
    // das, was das Zertifikat ausmacht (kein Internes).
    Unternehmenszertifikat__c: [
        'Id',
        'Name',
        'CreatedDate',
        'Account__c',
        'Zertifikate__c',
        'G_ltig_von__c',
        'G_ltig_bis__c',
        'Notiz__c'
    ],
    // #362: Katalog-Einträge bestehen im Kern aus dem Namen.
    Zertifikate__c: [
        'Id',
        'Name',
        'CreatedDate'
    ],
    // #331: analog #370 (Unternehmenszertifikat__c) — AuditProperty__c hat keine
    // Kategorie-Grants, daher müssen die Fachfelder hier stehen. Ohne sie maskte
    // Layer 3 für laboratory/agent ALLE Ergebnis-/Definitionsfelder weg: die
    // Detailseite renderte leere Slots, der "Zur Materialanalyse"-Button fehlte
    // (Materialanalyse__c gestrippt) und ein Save überschrieb blind vorhandene
    // Werte. Zugriff bleibt über hasRecordAccess (parentRecord-Scoping) gegated;
    // welche Felder eine Rolle SIEHT/EDITIERT, steuern die Sections der
    // Feld-Config (AuditProperty.fields.ts, #202 §21).
    AuditProperty__c: [
        'Id',
        'Name',
        'Name__c',
        'CreatedDate',
        'LastModifiedDate',
        'Type__c',
        'Category_AuditPropertyType__c',
        'Test_standard__c',
        'Value__c',
        'Value_min__c',
        'Value_max__c',
        'Test_parameter1__c',
        'Test_parameter2__c',
        'Text_Value__c',
        'Materialanalyse__c',
        'Monitored_Material__c'
    ],
    AuditPropertyType__c: [
        'Id',
        'Name'
    ],
    RecordAccessGrant__c: [
        'Id',
        'Name',
        'AccessGrantedFor__c',
        'Show_Record__c',
        'OwnerId',
        'CreatedDate'
    ],
    Opportunity: [
        'Id',
        'Name',
        'StageName',
        'Amount',
        'CloseDate',
        'AccountId',
        'OwnerId',
        'CreatedDate'
    ],
    User: [
        'Id',
        'Name',
        'Username',
        'Email',
        'IsActive',
        'UserType',
        'CreatedDate',
        'LastModifiedDate'
    ],
    Reklamation__c: [
        'Id',
        'Name',
        'CreatedDate',
        'LastModifiedDate'
    ],
    Prozessfeedback__c: [
        'Id',
        'Name',
        'CreatedDate',
        'LastModifiedDate'
    ],
    Aktueller_Preis_und_Verf_gbarkeit__c: [
        'Id',
        'Name',
        'Preis_pro_Tonne__c',
        'Tonnen__c',
        'g_ltig_ab__c',
        'g_ltig_bis__c',
        'CreatedDate'
    ]
};
function getAlwaysVisibleFields() {
    return DEFAULT_ALWAYS_VISIBLE_FIELDS;
}
const alwaysVisibleFields = DEFAULT_ALWAYS_VISIBLE_FIELDS;
const ACCOUNTING_VISIBLE_FIELDS = {
    Order: [
        ...DEFAULT_FIELD_DEFINITIONS.Order.customerInformation ?? [],
        ...DEFAULT_FIELD_DEFINITIONS.Order.transportInformation ?? [],
        ...DEFAULT_FIELD_DEFINITIONS.Order.sellingInformation ?? [],
        ...DEFAULT_FIELD_DEFINITIONS.Order.statistics ?? [],
        'Type',
        'Auftragsrichtung__c',
        'ContractId',
        'Projekt__c',
        'Lieferant__c',
        'Lieferdatum_Text__c',
        'Zusatz_Rechnung__c',
        'Zahlungsbedingung_Kunde__c',
        'Zahlungsziel_Ausgangsrechnung__c',
        'Zahlungsziel_Eingangsrechnung_Lieferant__c',
        'Zahlungsziel_Transportrechnung__c',
        'Einkaufsbedingung_Abrechnung_Lieferant__c',
        'Ust_Einkauf__c',
        'Wiegeschein_Lieferant_t__c',
        'Wiegeschein_Lieferant_Nr__c',
        'Datum_Abholung__c',
        'Kostenstelle__c',
        'Transportpreis__c',
        'Transportpreis_pro_Tonne__c',
        'Transporteur_Preis_NEU__c',
        'Zielbetrag_Kunde__c',
        'Zielbetrag_Lieferant__c',
        'Offener_Betrag_von_Kunde__c',
        'Offener_Betrag_an_Lieferant__c',
        'Offener_Betrag_an_Sales_Agent__c',
        'Offener_Betrag_an_Transporteur__c',
        'Abrechnung_Betrag__c',
        'Betrag_Ausgangsrechnungen_Kunde__c',
        'Betrag_Eingangsrechnungen_Lieferant__c',
        'Betrag_Eingangsrechnungen_Sales_Agent__c',
        'Betrag_Eingangsrechnungen_Sonstige__c',
        'Betrag_Eingangsrechnungen_Transporteur__c',
        'Betrag_Rechnung_Nachlass_Kunde__c',
        'Betrag_Rechnung_Nachlass_Lieferant__c',
        'Betrag_Vorkasse_gezahlt__c',
        'Anzahl_Prognosen__c',
        'Rechnungen_pr_fen__c',
        'Alle_Abrechnungen_erstellt__c'
    ],
    Account: [
        ...DEFAULT_FIELD_DEFINITIONS.Account.buyingInformation ?? [],
        ...DEFAULT_FIELD_DEFINITIONS.Account.sellingInformation ?? [],
        ...DEFAULT_FIELD_DEFINITIONS.Account.statistics ?? [],
        'Kundennummer__c',
        'Ust_ID__c',
        'Leitweg_ID__c',
        'Account_E_Mail__c',
        'Phone',
        'Website',
        'BillingStreet',
        'BillingPostalCode',
        'BillingCity',
        'BillingState',
        'BillingCountry'
    ]
};
const flexpageConfig = {
    // #495: reine Lookup-Ziele (Opportunity.CampaignId / SyncedQuoteId).
    Campaign: {},
    Quote: {},
    // #449
    Contract: {},
    // #325
    Kostenstelle_plastship__c: {},
    // #792
    DATEV_Sachkonto__c: {},
    // #831
    Abfallfraktionen__c: {},
    Case: {
        admin: 'CaseDefault_Record_Page',
        staff: 'CaseDefault_Record_Page',
        agent: 'CaseDefault_Record_Page_Agent',
        user: 'CaseDefault_Record_Page_User',
        rigk: 'CaseDefault_Record_Page_User'
    },
    Contact: {
        admin: 'Contact_Record_Page_Three_Column',
        staff: 'Contact_Record_Page_Three_Column',
        agent: 'Contact_Record_Page_Three_Column_Agent',
        user: 'Contact_Record_Page_Three_Column_Agent',
        rigk: 'Contact_Record_Page_Three_Column_Agent'
    },
    Account: {
        admin: 'Account_Record_Page_Three_Column',
        staff: 'Account_Record_Page_Three_Column',
        agent: 'Account_Record_Page_Agent',
        user: 'Account_Record_Page_User',
        rigk: 'Account_Record_Page_User'
    },
    Produktionsstandort__c: {
        admin: 'Produktionsstandort',
        staff: 'Produktionsstandort',
        agent: 'Produktionsstandort_Agent',
        user: 'Produktionsstandort_Agent',
        rigk: 'Produktionsstandort_Agent'
    },
    Projekt__c: {
        admin: 'Projekt_bersicht1',
        staff: 'Projekt_bersicht1',
        agent: 'Projekt_bersicht1_Agent'
    },
    Bedarfe__c: {
        admin: 'Bedarfe',
        staff: 'Bedarfe',
        agent: 'Bedarfe_Agent',
        user: 'Bedarfe_User',
        rigk: 'Bedarfe_User'
    },
    Lohn__c: {
        admin: 'Bedarfe',
        staff: 'Bedarfe',
        agent: 'Bedarfe_Agent',
        user: 'Bedarfe_User',
        rigk: 'Bedarfe_User'
    },
    Order: {
        admin: 'Orders1',
        staff: 'Orders1',
        agent: 'Orders1_Agent',
        user: 'Orders1_User',
        rigk: 'Orders1_User'
    },
    Abrechnung__c: {
        admin: 'Abrechnung',
        staff: 'Abrechnung',
        accounting: 'Abrechnung',
        agent: 'Abrechnung_Agent',
        user: 'Abrechnung_User',
        rigk: 'Abrechnung_User'
    },
    Invoice__c: {
        admin: 'Invoice',
        staff: 'Invoice',
        accounting: 'Invoice',
        agent: 'Invoice_Agent',
        user: 'Invoice_User',
        rigk: 'Invoice_User'
    },
    Product2: {
        admin: 'Produkt',
        staff: 'Produkt'
    },
    Monitored_Material__c: {
        admin: 'Monitored_Materials',
        staff: 'Monitored_Materials',
        user: 'Monitored_Materials_User',
        rigk: 'Monitored_Materials_User'
    },
    Materialanalyse__c: {
        admin: 'Materialanalyse',
        staff: 'Materialanalyse',
        laboratory: 'Materialanalyse_Laboratory'
    },
    Material_Proposal__c: {
        admin: 'Material_Proposal',
        staff: 'Material_Proposal',
        agent: 'Material_Proposal_Agent',
        user: 'Material_Proposal_User',
        rigk: 'Material_Proposal_User'
    },
    Sample_Sending__c: {
        admin: 'Sample_Sendings',
        staff: 'Sample_Sendings',
        agent: 'Sample_Sendings_Agent',
        user: 'Sample_Sendings_User',
        rigk: 'Sample_Sendings_User'
    },
    Sample_Feedback__c: {
        admin: 'Sample_Feedback',
        staff: 'Sample_Feedback'
    },
    Requirement__c: {
        admin: 'Requirement',
        staff: 'Requirement',
        agent: 'Requirement_Agent',
        user: 'Requirement_User',
        rigk: 'Requirement_User'
    },
    Supplier_Audit__c: {
        admin: 'Supplier_audit',
        staff: 'Supplier_audit',
        user: 'Supplier_audit_User',
        rigk: 'Supplier_audit_User'
    },
    Unternehmenszertifikat__c: {
        admin: 'Unternehmenszertifikat',
        staff: 'Unternehmenszertifikat'
    },
    Zertifikate__c: {},
    // #331
    AuditProperty__c: {},
    AuditPropertyType__c: {},
    RecordAccessGrant__c: {},
    Task: {},
    Event: {},
    Probe__c: {},
    Probeversand__c: {},
    OrderItem: {
        admin: 'OrderItem_Record_Page',
        staff: 'OrderItem_Record_Page',
        accounting: 'OrderItem_Record_Page'
    },
    Onboarding__c: {},
    Kontakt_bergaben__c: {},
    Opportunity: {},
    User: {},
    Aktueller_Preis_und_Verf_gbarkeit__c: {},
    Reklamation__c: {},
    Prozessfeedback__c: {}
};
const MM_HIDDEN_NAME_FIELDS = [
    'Account_Produkt__c',
    'Kunde__c',
    'Kontakt_Kunde__c'
];
const MM_HIDDEN_NAMES_PRODUCT_FIELDS = [
    'Material_colour__c'
];
function seesMonitoredMaterialNames(userContext) {
    return [
        'admin',
        'staff',
        'laboratory'
    ].includes(userContext.role);
}
function hidesMonitoredMaterialNames(userContext, object) {
    return object === 'Monitored_Material__c' && !seesMonitoredMaterialNames(userContext);
}
const MM_HIDDEN_ID_FIELDS = [
    'Produkt__c'
];
const moduleConfig = {
    mmaterials: {
        objects: [
            'Monitored_Material__c'
        ],
        hideNames: true // Hide account/contact names for basic module users
    },
    ppwr: {
        objects: [
            'Account',
            'Unternehmenszertifikat__c',
            'Supplier_Audit__c',
            'Produktionsstandort__c',
            'Order'
        ],
        hideNames: false // Show full information for PPWR compliance monitoring
    },
    plastrack: {
        objects: [] // Future: Tracking system objects
    },
    plaspcf: {
        objects: [] // Future: CO2 evaluation objects
    },
    rigk: {
        // Page access comes via MODULE_RESOURCE_MAP['rigk'] = ['rigk-module']
        // (below). The dedicated /api/rigk/accounts/** routes do their own
        // explicit `userContext.modules?.includes('rigk')` check and apply
        // `Ist_RIGK_Gruppenkontakt__c = true` filtering at the SOQL layer, so
        // we don't grant blanket Account view here — that would break the
        // documented "Requires ppwr module" gate on the global /accounts page
        // and let any agent+rigk user open the unfiltered Accounts list.
        objects: [],
        hideNames: false
    },
    pricing: {
        objects: [] // Stockmarket & pricing — UI access only, no SF objects
    }
};
function resolveStaffTags(tags) {
    if (tags.includes('management')) {
        return ALL_STAFF_TAGS;
    }
    return tags;
}
function hasStaffTag(userContext, tag) {
    if (userContext.role === 'admin') return true;
    if (userContext.role !== 'staff') return false;
    if (!userContext.staffTags || userContext.staffTags.length === 0) return false;
    const effectiveTags = resolveStaffTags(userContext.staffTags);
    return effectiveTags.includes(tag);
}
function isInternalStaff(role) {
    return role === 'admin' || role === 'staff';
}
function hasObjectAccess(userContext, object, action) {
    // #1576 (R86): Bereich Zeit & Abwesenheit bis zum Start versteckt — #1592/#1853:
    // nur admin mit Tag `it` und staff mit Tag `intern` (TIME_AREA_TAG_BY_ROLE).
    // Gilt auch für admin (bis #2085 deshalb vor dem admin-Durchgriff).
    // Server: der Schalter TIME_AREA_AUDIENCE gilt auch für Aufrufer, die einen
    // Kontext ohne Snapshot bauen. Browser: die Variable ist dort unbekannt —
    // allein der Snapshot aus getUserContext trägt den Schalter zum Client;
    // ohne Snapshot also kein Zugriff (kein Rückfall auf Matrix und Tags, der
    // den Schalter umginge).
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$rbac$2f$timeAreaGate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTimeAreaResource"])(object)) {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        else {
            return userContext.permissions?.[object]?.[action] === true;
        }
    }
    // #1856/#1889: Tag-Gate (z. B. /auctions: partner nur mit Tag ineos) — Server und
    // Browser, mit und ohne Snapshot; das Tag zählt wörtlich. admin hat kein Gate.
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$rbac$2f$tagGates$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["passesTagGate"])(userContext.role, userContext.staffTags, object)) return false;
    // #1927: Scope-Gate (/my-auctions: partner nur mit Pool-Rolle provider_admin).
    // Die Mitgliedschaft kennt nur getUserContext (Datenbank) — allein der
    // Snapshot trägt sie, ohne Snapshot kein Zugriff (fail closed).
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$rbac$2f$tagGates$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isScopeGated"])(userContext.role, object)) return userContext.permissions?.[object]?.[action] === true;
    // #2085: kein admin-Durchgriff mehr — admin antwortet wie jede Rolle aus
    // Snapshot bzw. Matrix (DEFAULT_GLOBAL_PERMISSIONS.admin trägt alles).
    // Prefer the resolved permissions snapshot (built at session creation
    // from DB overrides + staff-tag merges). Both server and client see the
    // same authoritative view this way.
    const snapshot = userContext.permissions?.[object];
    if (snapshot) {
        if (snapshot[action]) return true;
    } else {
        // Fallback: legacy callers that build UserContext without a snapshot.
        const rolePerms = globalPermissions[userContext.role];
        const objectPerms = rolePerms?.[object];
        if (objectPerms?.[action]) return true;
        // For staff role: tag-based permissions (additive on top of base staff)
        if (userContext.role === 'staff' && userContext.staffTags && userContext.staffTags.length > 0) {
            const effectiveTags = resolveStaffTags(userContext.staffTags);
            for (const tag of effectiveTags){
                const tagPerms = staffTagPermissions[tag];
                if (tagPerms?.[object]?.[action]) return true;
            }
        }
    }
    // Module-to-UI-resource mapping (modules that unlock page access)
    // NOTE: recyclate-grade is intentionally NOT here even though the
    // mmaterials fit-score feature reads it. Adding it would also surface
    // the top-level "Recyclate Grades" nav item to user-role customers,
    // which violates issue #216 SOLL. The /salesforce/recyclate-grades
    // endpoint instead accepts either recyclate-grade view OR
    // Monitored_Material__c view so mmaterials customers still get the
    // data needed for the embedded fit assessment without seeing a new
    // nav entry.
    const MODULE_RESOURCE_MAP = {
        mmaterials: [
            'Monitored_Material__c'
        ],
        pricing: [
            'pricing'
        ],
        rigk: [
            'rigk-module'
        ],
        plastrack: [
            'plastrack'
        ]
    };
    // Check module-based access (additive)
    // #1855: nie für Rollen ohne Salesforce-Daten (partner) — nicht record-scoped,
    // ein Modul gäbe ihnen sonst den ungefilterten Bestand.
    if (userContext.modules && userContext.modules.length > 0 && !isContentOnlyRole(userContext.role)) {
        for (const userModule of userContext.modules){
            // Check module → UI resource mapping
            const mappedResources = MODULE_RESOURCE_MAP[userModule];
            if (mappedResources?.includes(object) && action === 'view') return true;
            // Check module → Salesforce object mapping
            const moduleConf = moduleConfig[userModule];
            if (moduleConf && moduleConf.objects.includes(object)) {
                if (action === 'view') return true;
            }
        }
    }
    return false;
}
/**
 * Check if a user has access to a specific record
 *
 * For admin, staff, accounting: Always returns true (if object access granted)
 * For agent, user, laboratory: Checks record visibility based on mechanism:
 *   - lookup: Via lookup fields (Case, Task)
 *   - ownership: Via OwnerId OR RecordAccessGrant (Postgres)
 *   - recordAccessGrant: ONLY via RecordAccessGrant (Contact, Account, Produktionsstandort)
 *   - module: Via enabled module (Monitored_Material)
 *
 * @param userContext - User information (must include pgUserId for grant checks)
 * @param object - Object type
 * @param record - Record data
 * @returns Promise<boolean> indicating if user has access to this record
 */ function matchesRecordVisibilityRule(userContext, object, record) {
    const rules = recordVisibilityRules[object];
    if (!rules || rules.length === 0) return false;
    for (const rule of rules){
        if (!rule.appliesTo.includes(userContext.role)) continue;
        if (!rule.grants?.showRecord) continue;
        const fieldValue = record[rule.lookupField];
        if (!fieldValue) continue;
        if (rule.matchType === 'contact' && fieldValue === userContext.contactId) {
            return true;
        }
        if (rule.matchType === 'account' && fieldValue === userContext.accountId) {
            return true;
        }
    }
    return false;
}
function isRecordOwner(userContext, ownerId) {
    return typeof userContext.userId === 'string' && userContext.userId !== '' && typeof ownerId === 'string' && ownerId === userContext.userId;
}
async function hasRecordAccess(userContext, object, record) {
    // Rollen ohne Record-Filterung sehen jeden Datensatz — dieselbe Bedingung,
    // mit der buildRecordFilter 'Id != null' zurueckgibt. Frueher stand hier nur
    // ['admin','staff']; accounting kam trotzdem durch, weil es in KEINEM
    // appliesTo steht und deshalb in den Default-Allow weiter unten fiel. Seit
    // dieser Zweig zumacht, muss die Rolle hier stehen, sonst waere das Detail
    // strenger als die Liste (accounting sieht in der Liste jeden Auftrag).
    if (!requiresRecordLevelFiltering(userContext.role)) {
        return true;
    }
    // #1419: Marktplatz-Katalog — Kunden öffnen nur GELISTETE Produkte
    // (Sales_Intent__c, dieselbe Bedingung wie buildRecordFilter). Vorher stand
    // hier ein bedingungsloses `return true`; jede Product2-Id ließ sich damit
    // samt Name und Lieferant auflösen. user/agent/rigk sehen jedes gelistete
    // Produkt; die übrigen record-gefilterten Rollen (advisor) behalten ihre
    // Eigentums-/Grant-Regel ZUSÄTZLICH zur Listung.
    if (object === 'Product2') {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$rbac$2f$productVisibility$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["customerMayOpenProduct"])(record, userContext)) return false;
        if (userContext.role === 'user' || userContext.role === 'agent' || userContext.role === 'rigk') {
            return true;
        }
    }
    // Get visibility configuration for this object
    const visibilityConfig = objectVisibilityConfig[object];
    // Kein Eintrag, oder die Rolle steht nicht in appliesTo. Hier stand ein
    // bedingungsloses `return true` ("default to visible, for backwards
    // compatibility"). Der Listenfilter entscheidet an genau dieser Stelle
    // UMGEKEHRT: ohne passende Regel liefert buildRecordFilter
    // "Id = '000000000000000000'", also null Treffer. Damit war jeder fremde
    // Datensatz per Id vollstaendig lesbar, waehrend die Liste ihn verschwieg —
    // gemessen fuer advisor und laboratory auf Account (Detail 200 mit vollem
    // Datensatz, Liste 200 mit 0 Zeilen), in Summe 30 Rolle/Objekt-Paare.
    //
    // Das ist die Bugklasse #271 (Contact), #331 (AuditProperty) und #496
    // (Contract) — dort jeweils fuer EIN Objekt geschlossen, nie als Regel. Der
    // childRecord-Zweig weiter unten umgeht diesen Default-Allow seit #496
    // ausdruecklich (siehe Kommentar dort); mit dieser Aenderung ist das nicht
    // mehr noetig, weil die Wurzel zu ist.
    //
    // Die Entscheidung faellt jetzt aus DERSELBEN Quelle wie der Listenfilter.
    if (!visibilityConfig || !visibilityConfig.appliesTo.includes(userContext.role)) {
        const rules = recordVisibilityRules[object];
        // Objekt ohne jede Regel: buildRecordFilter gibt 'Id != null' zurueck, die
        // Liste zeigt alles. Das Detail zieht mit — waere es hier strenger als die
        // Liste, wuerden Datensaetze auftauchen, die sich nicht oeffnen lassen.
        if (!rules || rules.length === 0) {
            return true;
        }
        // Spiegelt buildRecordFilter fuer diesen Zweig: Regeltreffer ODER direkter
        // Grant ODER weitergereichter Account-Grant. Kein Treffer heisst kein
        // Zugriff — deckungsgleich mit dem "Id = '000000000000000000'" der Liste.
        if (matchesRecordVisibilityRule(userContext, object, record)) {
            return true;
        }
        if (await hasRecordAccessGrant(userContext, object, record.Id)) {
            return true;
        }
        return hasParentAccountGrant(userContext, object, record);
    }
    // Check visibility based on mechanism
    switch(visibilityConfig.mechanism){
        case 'lookup':
            // Check lookup fields (Case, Task). If the user owns the lookup,
            // they get access via the standard contact/account match. Otherwise,
            // fall through to RecordAccessGrant so admin-created grants on Case
            // (via /access-management/grants/) are honored. Without this fallback,
            // grants for Case are silently ignored (GitLab #228 Phase 1a).
            const lookupRules = visibilityConfig.lookupRules || [];
            for (const rule of lookupRules){
                if (!rule.appliesTo.includes(userContext.role)) continue;
                const fieldValue = record[rule.lookupField];
                if (!fieldValue) continue;
                if (rule.matchType === 'contact' && fieldValue === userContext.contactId) {
                    return true;
                } else if (rule.matchType === 'account' && fieldValue === userContext.accountId) {
                    return true;
                }
            }
            if (await hasRecordAccessGrant(userContext, object, record.Id)) {
                return true;
            }
            // Phase 1e: propagate a parent-Account grant (e.g. Case child of a
            // granted Account should be reachable via the parent grant).
            return hasParentAccountGrant(userContext, object, record);
        case 'ownership':
            // Check OwnerId OR RecordAccessGrant
            if (isRecordOwner(userContext, record.OwnerId)) {
                return true;
            }
            // Mirror buildRecordFilter: also accept records reachable via the
            // lookup-based recordVisibilityRules (e.g. Sample_Sending__c via
            // Kontakt_Anlieferung__c, Abrechnung__c via Account__c). Without
            // this, the list endpoint includes the record but the detail/PDF
            // endpoint 403s — list and detail must agree.
            if (matchesRecordVisibilityRule(userContext, object, record)) {
                return true;
            }
            // Check if RecordAccessGrant exists in Postgres for this record
            if (await hasRecordAccessGrant(userContext, object, record.Id)) {
                return true;
            }
            // GitLab #228 Phase 1e: propagate a parent Account grant down to its
            // child records (Unternehmenszertifikate, Bedarfe/Anforderungen, etc.)
            // so a user granted access to AccountX can drill into child records
            // belonging to AccountX without needing a per-row grant.
            if (await hasParentAccountGrant(userContext, object, record)) {
                return true;
            }
            // #370: RIGK-Modul-Nutzer arbeiten mit den Records der GRUPPEN-Accounts
            // (Bedarfe/Lohn/Produkte/Projekte/Audits/Zertifikate). Ohne diesen
            // Fallback konnten sie staff-angelegte Gruppen-Records zwar in den
            // Modul-Listen sehen, aber weder öffnen noch editieren, und kamen nicht
            // an deren Anhänge (Datei-Download prüft hasRecordAccess).
            return hasRigkGroupAccess(userContext, object, record);
        case 'recordAccessGrant':
            // ONLY via RecordAccessGrant (Contact, Account, Produktionsstandort)
            return hasRecordAccessGrant(userContext, object, record.Id);
        case 'parentRecord':
            {
                // #331: Kind-Objekte ohne eigenen Owner/Account-Lookup (AuditProperty__c)
                // erben den Record-Zugriff vom Parent-Record. Der Parent wird server-
                // seitig nachgeladen — dynamic import wie bei hasRigkGroupAccess, damit
                // die Salesforce-Utils nicht ins Client-Bundle geraten (permissions.ts
                // wird auch client-seitig importiert).
                const { parentObject, parentLookupField } = visibilityConfig;
                if (!parentObject || !parentLookupField) return false;
                const parentId = record[parentLookupField];
                if (!parentId) {
                    // Waise (kein Parent gesetzt): für record-gefilterte Rollen nur per
                    // direktem Grant erreichbar — fail closed.
                    return hasRecordAccessGrant(userContext, object, record.Id);
                }
                try {
                    const { getSalesforceRecord } = await __turbopack_context__.A("[project]/apps/web/src/app/utils/salesforce.ts [app-client] (ecmascript, async loader)");
                    const parent = await getSalesforceRecord(parentObject, parentId);
                    return hasRecordAccess(userContext, parentObject, {
                        ...parent,
                        Id: parentId
                    });
                } catch (error) {
                    console.error(`[hasRecordAccess] parentRecord check failed for ${object} → ${parentObject} ${parentId}:`, error);
                    // #1029: fail closed ist richtig — aber ein Zugriff, der wegen eines
                    // SF-Fehlers verweigert wird, sieht fuer den Nutzer wie "kein Recht" aus.
                    // #1233 (M-11): keine Record-Id in extra — object/parentObject reichen
                    // fuer die Diagnose, die Id selbst geht Sentry nichts an.
                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$sentry$2f$browser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["captureException"](error, {
                        tags: {
                            component: 'rbac',
                            anlass: 'parent-record-check',
                            fail_closed: 'true'
                        },
                        extra: {
                            object,
                            parentObject
                        }
                    });
                    return false;
                }
            }
        case 'childRecord':
            {
                // #496: Spiegelbild von parentRecord — der Zugriff erbt sich vom KIND
                // (Contract ← Order.ContractId). Sichtbar, wenn mindestens ein Kind
                // sichtbar ist.
                //
                // Das Prädikat kommt aus DERSELBEN Quelle wie der Listenfilter
                // (buildLookupConditions + Grants), damit Liste und Detail nicht
                // auseinanderlaufen können.
                //
                // Bewusst KEIN rekursiver hasRecordAccess(child): für Rollen außerhalb
                // von objectVisibilityConfig[childObject].appliesTo — heute laboratory
                // und advisor bei Order — liefert der den Default-Allow und wäre damit
                // weiter als die Liste. Genau die Divergenz, die dieser Fix schließt.
                const { childObject, childLookupField } = visibilityConfig;
                if (!childObject || !childLookupField || childObject === object) return false;
                if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$utils$2f$soqlSanitizer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidSalesforceId"])(record.Id)) return false;
                const { conditions, accountLookupFields } = buildLookupConditions(userContext, childObject);
                const grantedChildIds = await getGrantedRecordIds(userContext, childObject);
                if (grantedChildIds.length > 0) {
                    conditions.push(`Id IN (${grantedChildIds.map((id)=>`'${id}'`).join(', ')})`);
                }
                // Spiegelt die Account-Grant-Weitergabe aus buildRecordFilter. Für Order
                // heute inert (keine matchType-'account'-Regel) — steht hier, damit es
                // das auch bleibt, falls jemand eine ergänzt.
                if (accountLookupFields.length > 0) {
                    const grantedAccountIds = await getGrantedRecordIds(userContext, 'Account');
                    if (grantedAccountIds.length > 0) {
                        const list = grantedAccountIds.map((id)=>`'${id}'`).join(', ');
                        for (const field of accountLookupFields)conditions.push(`${field} IN (${list})`);
                    }
                }
                // Keine Bedingung = kein Kind erreichbar. Fail closed, deckungsgleich mit
                // dem "Id = '000000000000000000'" des Listenfilters.
                if (conditions.length === 0) return false;
                try {
                    const { executeSalesforceQuery } = await __turbopack_context__.A("[project]/apps/web/src/app/utils/salesforce.ts [app-client] (ecmascript, async loader)");
                    const result = await executeSalesforceQuery(`SELECT Id FROM ${childObject} ` + `WHERE ${childLookupField} = '${record.Id}' AND (${conditions.join(' OR ')}) LIMIT 1`);
                    return (result.records?.length ?? 0) > 0;
                } catch (error) {
                    console.error(`[hasRecordAccess] childRecord check failed for ${object} → ${childObject} ${record.Id}:`, error);
                    // #1233 (M-11): keine Record-Id in extra.
                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$sentry$2f$browser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["captureException"](error, {
                        tags: {
                            component: 'rbac',
                            anlass: 'child-record-check',
                            fail_closed: 'true'
                        },
                        extra: {
                            object,
                            childObject
                        }
                    });
                    return false;
                }
            }
        case 'module':
            // Check if user has required module
            const moduleRequired = visibilityConfig.moduleRequired;
            if (moduleRequired && userContext.modules?.includes(moduleRequired)) {
                // For module-based, also check OwnerId OR RecordAccessGrant if specified
                if (isRecordOwner(userContext, record.OwnerId)) {
                    return true;
                }
                // Check Postgres RecordAccessGrant
                const hasGrant = await hasRecordAccessGrant(userContext, object, record.Id);
                if (hasGrant) return true;
                // If no owner matching, module alone grants access
                return true;
            }
            return false;
        default:
            return false;
    }
}
function buildLookupConditions(userContext, object) {
    const conditions = [];
    const accountLookupFields = [];
    for (const rule of recordVisibilityRules[object] ?? []){
        if (!rule.appliesTo.includes(userContext.role)) continue;
        if (rule.matchType === 'contact' && userContext.contactId) {
            conditions.push(`${rule.lookupField} = '${userContext.contactId}'`);
        } else if (rule.matchType === 'account' && userContext.accountId) {
            conditions.push(`${rule.lookupField} = '${userContext.accountId}'`);
            accountLookupFields.push(rule.lookupField);
        } else if (rule.matchType === 'account') {
            accountLookupFields.push(rule.lookupField);
        }
    }
    return {
        conditions,
        accountLookupFields
    };
}
/**
 * #496: Die Record-Ids, für die dieser User einen Grant auf `object` hat.
 *
 * Gegenstück zu hasRecordAccessGrant (Einzelprüfung) für die Fälle, in denen
 * eine Menge gebraucht wird. Liest prisma über globalThis aus demselben Grund
 * wie dort — permissions.ts wird auch clientseitig importiert.
 */ async function getGrantedRecordIds(userContext, object) {
    // #1194: in der Rollen-Vorschau keine Grants — sie gehoeren dem Admin
    if (!userContext.pgUserId || userContext.viewAs) return [];
    const prisma = globalThis.prisma;
    if (!prisma) {
        console.warn('[getGrantedRecordIds] globalThis.prisma not initialized');
        return [];
    }
    try {
        const grants = await prisma.recordAccessGrant.findMany({
            where: {
                userId: userContext.pgUserId,
                targetSObject: object,
                showRecord: true
            },
            select: {
                targetRecordId: true
            }
        });
        return grants.map((g)=>g.targetRecordId).filter(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$utils$2f$soqlSanitizer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidSalesforceId"]);
    } catch (error) {
        console.error(`[getGrantedRecordIds] query failed for ${object}:`, error);
        // #1029: leere Liste bei DB-Fehler = alle Datensaetze weg, ohne Signal.
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$sentry$2f$browser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["captureException"](error, {
            tags: {
                component: 'rbac',
                anlass: 'granted-record-ids',
                fail_closed: 'true'
            },
            extra: {
                object
            }
        });
        return [];
    }
}
const GRANTABLE_SOBJECTS = [
    'Account',
    'Contact',
    'Case',
    'Order',
    'Abrechnung__c',
    'Invoice__c',
    'Bedarfe__c',
    'Material_Proposal__c',
    'Product2',
    'Projekt__c',
    'Sample_Sending__c',
    'Produktionsstandort__c',
    'Supplier_Audit__c',
    'Unternehmenszertifikat__c',
    'Kontakt_bergaben__c',
    'Monitored_Material__c'
];
async function hasRecordAccessGrant(userContext, object, recordId) {
    // Need Postgres user ID to query grants.
    // #319: this early-return was silent, making a session without pgUserId
    // indistinguishable from a missing grant row when diagnosing the
    // deployed-env grant denials — log it.
    // #1194: in der Rollen-Vorschau still verweigern — die Grants gehoeren dem Admin.
    if (userContext.viewAs) return false;
    if (!userContext.pgUserId) {
        // #1233 (M-11): weder E-Mail noch Record-Id ins Log — object/role reichen
        // fuer die Diagnose (console.warn laeuft ueber consoleLoggingIntegration
        // in Sentry-Logs).
        console.warn(`[RecordAccessGrant] deny: session has no pgUserId (role=${userContext.role}, object=${object})`);
        return false;
    }
    if (!GRANTABLE_SOBJECTS.includes(object)) return false;
    const targetSObject = object;
    try {
        // Server-only prisma access via globalThis.prisma. prisma.ts stashes its
        // singleton on `global.prisma` on first load (apps/web/src/lib/prisma.ts:7).
        // Reading it via globalThis avoids any static module reference, so neither
        // Webpack nor Turbopack drags prisma → pg into the client bundle (which
        // would trip the `import 'server-only'` guard). instrumentation.ts kicks
        // off the initial load so the global is populated before this runs.
        const prisma = globalThis.prisma;
        if (!prisma) {
            console.warn('[checkRecordAccessGrant] globalThis.prisma not initialized');
            return false;
        }
        // M-04: exakter DB-Vergleich verfehlt den Grant, wenn targetRecordId
        // (gespeichert) und recordId (übergeben) unterschiedlich lang (15 vs. 18)
        // sind. sameSalesforceId gleicht beide Formen auf 18 Stellen ab, deshalb
        // hier per findMany + JS-Vergleich statt eines DB-seitigen Exaktfilters.
        const candidates = await prisma.recordAccessGrant.findMany({
            where: {
                userId: userContext.pgUserId,
                targetSObject,
                showRecord: true
            },
            select: {
                id: true,
                targetRecordId: true
            }
        });
        const grant = candidates.find((c)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$utils$2f$soqlSanitizer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sameSalesforceId"])(c.targetRecordId, recordId)) ?? null;
        if (grant === null && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.RBAC_GRANT_DEBUG === '1') {
            // #319: the deployed-env grant denials could not be pinpointed because
            // the deny path logged nothing. Debug-only (RBAC_GRANT_DEBUG=1, dev) —
            // grant misses are normal control flow in list filtering, so this would
            // flood elsewhere. The per-user count discriminates the failure modes:
            // count>0 with no exact match = key mismatch (targetRecordId/showRecord),
            // count=0 = the grant row is genuinely absent for this userId (wrong key
            // at write time / different DB).
            console.warn(`[RecordAccessGrant] deny: no grant match (pgUserId=${userContext.pgUserId}, targetSObject=${targetSObject}, recordId=${recordId}, userGrantsForObject=${candidates.length})`);
        }
        return grant !== null;
    } catch (error) {
        console.error('Error checking RecordAccessGrant:', error);
        // #1233 (M-11): keine Record-Id in extra.
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$sentry$2f$browser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["captureException"](error, {
            tags: {
                component: 'rbac',
                anlass: 'record-access-grant',
                fail_closed: 'true'
            },
            extra: {
                object
            }
        });
        return false;
    }
}
/**
 * Check whether a record is reachable via a parent-Account grant.
 *
 * Many child objects (Unternehmenszertifikat__c, Bedarfe__c, Lohn__c, …)
 * declare an `Account__c` (matchType `account`) lookup in `recordVisibilityRules`.
 * The standard rule lets a user see records whose Account is their OWN company
 * (matched against userContext.accountId). This helper additionally lets a user
 * see a child record when they hold an Account-level RecordAccessGrant on the
 * Account the child belongs to — i.e. the per-Account grant propagates down to
 * the child's detail endpoint without needing per-row grants.
 *
 * Returns false unless the object has at least one matchType=`account` rule
 * AND the user holds an Account grant on the looked-up Account ID.
 */ async function hasParentAccountGrant(userContext, object, record) {
    if (!userContext.pgUserId) return false;
    const rules = recordVisibilityRules[object];
    if (!rules || rules.length === 0) return false;
    for (const rule of rules){
        if (rule.matchType !== 'account') continue;
        if (!rule.appliesTo.includes(userContext.role)) continue;
        if (!rule.grants?.showRecord) continue;
        const parentAccountId = record[rule.lookupField];
        if (!parentAccountId) continue;
        if (parentAccountId === userContext.accountId) return true // own company
        ;
        if (await hasRecordAccessGrant(userContext, 'Account', parentAccountId)) {
            return true;
        }
    }
    return false;
}
/**
 * #370: Objekte, die das RIGK-Modul pro Gruppen-Account verwaltet, mit den
 * Account-Lookups, über die die Gruppenzugehörigkeit geprüft wird. Bewusst
 * eine strikte Allowlist — andere account-verknüpfte Objekte (z.B. Invoice__c)
 * bekommen KEINEN Gruppen-Bypass.
 */ const RIGK_GROUP_MANAGED_OBJECTS = {
    Bedarfe__c: [
        'Account__c'
    ],
    Lohn__c: [
        'Account__c'
    ],
    Product2: [
        'Account__c'
    ],
    Supplier_Audit__c: [
        'Account__c'
    ],
    Unternehmenszertifikat__c: [
        'Account__c'
    ],
    Projekt__c: [
        'Hauptkunde__c',
        'Hauptlieferant__c',
        'Lohndienstleister__c'
    ]
};
/**
 * #370: Record-Zugriff für RIGK-Modul-Nutzer auf Records der Gruppen-Accounts
 * (Ist_RIGK_Gruppenkontakt__c). Nur für die Allowlist oben; der SOQL-Check
 * läuft ausschließlich server-seitig — daher dynamic import, damit die
 * Salesforce-Utils nicht ins Client-Bundle geraten (permissions.ts wird auch
 * client-seitig importiert).
 */ async function hasRigkGroupAccess(userContext, object, record) {
    if (!userContext.modules?.includes('rigk')) return false;
    const accountFields = RIGK_GROUP_MANAGED_OBJECTS[object];
    if (!accountFields) return false;
    const { assertRigkGroupAccount } = await __turbopack_context__.A("[project]/apps/web/src/lib/rbac/rigkAccountGate.ts [app-client] (ecmascript, async loader)");
    for (const field of accountFields){
        const accountId = record[field];
        if (typeof accountId === 'string' && accountId) {
            const gate = await assertRigkGroupAccount(accountId);
            if (gate.ok) return true;
        }
    }
    return false;
}
function getAccessibleInformationCategories(userContext, object, record) {
    // Admin, staff see all categories (no field-level filtering)
    if ([
        'admin',
        'staff'
    ].includes(userContext.role)) {
        const allCategories = [
            'supplierInformation',
            'customerInformation',
            'transportInformation',
            'buyingInformation',
            'sellingInformation',
            'earnings',
            'statistics',
            'rigkRelationships',
            'transportPricing'
        ];
        return allCategories;
    }
    const categories = new Set();
    // Get visibility rules for this object
    const rules = recordVisibilityRules[object];
    if (!rules) return [];
    // Check each rule
    for (const rule of rules){
        if (!rule.appliesTo.includes(userContext.role)) {
            continue;
        }
        const fieldValue = record[rule.lookupField];
        if (!fieldValue) continue;
        let matches = false;
        if (rule.matchType === 'contact') {
            matches = fieldValue === userContext.contactId;
        } else if (rule.matchType === 'account') {
            matches = fieldValue === userContext.accountId;
        }
        if (matches) {
            // Add granted categories
            rule.grants.informationCategories.forEach((cat)=>categories.add(cat));
        }
    }
    return Array.from(categories);
}
function getVisibleFields(userContext, object, record) {
    // Admin, staff see ALL fields - no filtering needed
    // This is consistent with hasRecordAccess() and getAccessibleInformationCategories()
    // which also grant full access to these privileged roles
    if ([
        'admin',
        'staff'
    ].includes(userContext.role)) {
        return Object.keys(record);
    }
    // Laboratory has full field access to Monitored_Material__c since they perform the tests
    if (userContext.role === 'laboratory' && object === 'Monitored_Material__c') {
        return Object.keys(record);
    }
    // #1180: Buchhaltung arbeitet auf der Abrechnung — alle Felder
    if (userContext.role === 'accounting' && object === 'Abrechnung__c') {
        return Object.keys(record);
    }
    const visibleFields = new Set();
    if (userContext.role === 'accounting') {
        ;
        (ACCOUNTING_VISIBLE_FIELDS[object] ?? []).forEach((field)=>visibleFields.add(field));
    }
    // Always add always-visible fields (includes OwnerId)
    const alwaysFields = alwaysVisibleFields[object] || [];
    alwaysFields.forEach((field)=>visibleFields.add(field));
    // Get accessible information categories
    const categories = getAccessibleInformationCategories(userContext, object, record);
    // Add fields from accessible categories
    const fieldDefs = fieldDefinitions[object] || {};
    categories.forEach((category)=>{
        const fields = fieldDefs[category] || [];
        fields.forEach((field)=>visibleFields.add(field));
    });
    // Handle module-specific restrictions
    if (hidesMonitoredMaterialNames(userContext, object)) {
        // Remove name fields for mmaterials module (#1417: eine Liste, auch für maskRecordFields)
        MM_HIDDEN_NAME_FIELDS.forEach((field)=>visibleFields.delete(field));
        // #1419: auch die Produkt-Id — sie löst sich zum Produktnamen auf
        MM_HIDDEN_ID_FIELDS.forEach((field)=>visibleFields.delete(field));
    }
    // #1419: den Lieferanten eines Produkts sieht nur admin/staff — auch nicht
    // auf dem eigenen Produkt (customerInformation führt Account__c für #358).
    if (object === 'Product2' && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$rbac$2f$productVisibility$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["seesProductSupplier"])(userContext)) {
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$rbac$2f$productVisibility$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PRODUCT_SUPPLIER_FIELDS"].forEach((field)=>visibleFields.delete(field));
    }
    return Array.from(visibleFields);
}
function getSalesforceLayoutMapping(role, object) {
    const objectConfig = flexpageConfig[object];
    if (!objectConfig) return null;
    return objectConfig[role] || null;
}
const getFlexpage = getSalesforceLayoutMapping;
function canAccessInformationCategory(userContext, object, category, record) {
    const categories = getAccessibleInformationCategories(userContext, object, record);
    return categories.includes(category);
}
function getAccessibleObjects(role, action = 'view') {
    const rolePerms = globalPermissions[role];
    if (!rolePerms) return [];
    const objects = [];
    for (const [resource, perms] of Object.entries(rolePerms)){
        // Filter out UI resources, only return SObjects
        if (![
            'dashboard',
            'profile',
            'user-management'
        ].includes(resource)) {
            if (perms[action]) {
                objects.push(resource);
            }
        }
    }
    return objects;
}
function requiresRecordLevelFiltering(role) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$rbac$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RECORD_SCOPED_ROLES"].includes(role);
}
function isContentOnlyRole(role) {
    return typeof role === 'string' && __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$rbac$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTENT_ONLY_ROLES"].includes(role);
}
const ANALYTICS_ROLES = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$rbac$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ROLES"].filter(_c = (role)=>!requiresRecordLevelFiltering(role) && !isContentOnlyRole(role));
_c1 = ANALYTICS_ROLES;
function hasAnalyticsAccess(userContext, resource) {
    if (requiresRecordLevelFiltering(userContext.role)) return false;
    if (isContentOnlyRole(userContext.role)) return false;
    return hasObjectAccess(userContext, resource, 'view');
}
function hasPermission(role, resource, action) {
    return hasObjectAccess({
        role
    }, resource, action);
}
const searchDisplayConfig = {
    // Standard Objects
    Case: {
        detailPath: '/case',
        displayName: 'Case',
        nameField: 'CaseNumber',
        searchFields: [
            'CaseNumber',
            'Subject',
            'Status',
            'Priority'
        ]
    },
    Task: {
        detailPath: '/task',
        displayName: 'Task',
        nameField: 'Subject',
        searchFields: [
            'Subject',
            'Status',
            'Priority'
        ],
        // #495: war bisher nur in der Apex-Klasse hartkodiert
        searchMode: 'soql'
    },
    Event: {
        // #486: '' statt '/event' — die Route gibt es nicht. Die Suggestions-Route
        // baut ihren Link als `${detailPath}/${id}`, das war also ein 404 mit
        // Ansage. Leer heißt: nur Lookup-Ziel, raus aus globaler Suche und
        // Suggestions (getSearchableObjects filtert darauf). Sobald es eine
        // Detailseite gibt, hier wieder eintragen — der Drift-Guard erzwingt, dass
        // sie dann auch existiert.
        detailPath: '',
        displayName: 'Event',
        nameField: 'Subject',
        searchFields: [
            'Subject',
            'Location'
        ],
        searchMode: 'soql'
    },
    Account: {
        detailPath: '/account',
        displayName: 'Account',
        nameField: 'Name',
        searchFields: [
            'Name',
            'Type',
            'Industry',
            'BillingCity',
            'Phone'
        ]
    },
    Contact: {
        detailPath: '/contact',
        displayName: 'Contact',
        nameField: 'Name',
        searchFields: [
            'Name',
            'Email',
            'Title',
            'Phone'
        ]
    },
    Opportunity: {
        detailPath: '/opportunity',
        displayName: 'Opportunity',
        nameField: 'Name',
        searchFields: [
            'Name',
            'StageName',
            'Amount',
            'CloseDate'
        ]
    },
    Order: {
        detailPath: '/order',
        displayName: 'Order',
        nameField: 'OrderNumber',
        searchFields: [
            'OrderNumber',
            'Status',
            'EffectiveDate'
        ]
    },
    OrderItem: {
        detailPath: '/orderitem',
        displayName: 'Order Item',
        nameField: 'OrderItemNumber',
        // #495: Quantity und UnitPrice sind Zahlenfelder und mussten hier raus.
        // OrderItem gehört zu den SOQL-only-Objekten der Apex-Klasse, dort wird
        // über ALLE searchFields ein `feld LIKE '%term%'` gebaut — SOQL erlaubt
        // LIKE nur auf Text/Id. Die Query warf deshalb bei JEDER Suche eine
        // QueryException, die still gefangen wurde: OrderItem lieferte konstant
        // null Treffer. Produktcode__c ist textuell und das, wonach tatsächlich
        // gesucht wird.
        searchFields: [
            'OrderItemNumber',
            'Produktcode__c'
        ],
        searchMode: 'soql'
    },
    Product2: {
        detailPath: '/product',
        displayName: 'Product',
        nameField: 'Name',
        searchFields: [
            'Name',
            'ProductCode',
            'Family'
        ]
    },
    User: {
        detailPath: '/user',
        displayName: 'User',
        nameField: 'Name',
        searchFields: [
            'Name',
            'Email',
            'Title',
            'Department'
        ]
    },
    // Custom Objects
    Projekt__c: {
        detailPath: '/project',
        displayName: 'Project',
        nameField: 'Name',
        searchFields: [
            'Name'
        ]
    },
    Bedarfe__c: {
        detailPath: '/requirement',
        displayName: 'Requirement',
        nameField: 'Name',
        // #486: Business-Felder aus PlastshipListController.buildSearchCondition
        // uebernommen. Sie machen NICHT auffindbar — SOSL laeuft `IN ALL FIELDS`
        // und matcht diese Werte laengst (gegen die Org nachgemessen). Sie
        // bestimmen, was im secondaryLabel steht: bisher stand dort nichts, ein
        // Treffer auf eine Belegnummer sah aus wie ein Treffer aus dem Nichts.
        // Die _Text__c sind Formelfelder auf die Picklists — dieselben, ueber die
        // auch die Listensuche geht.
        searchFields: [
            'Name',
            'Materialtyp_Text__c',
            'Hauptpolymer_Text__c'
        ]
    },
    // #334: war eine Copy-Paste-Altlast (detailPath '/requirement', Anzeige
    // 'Requirement') — Suchtreffer für Lohndienstleistungen führten auf die
    // falsche Seite. Jetzt echte Detailseite.
    Lohn__c: {
        detailPath: '/toll-service',
        displayName: 'Lohndienstleistung',
        nameField: 'Name',
        searchFields: [
            'Name',
            'Dienstleistungskategorie__c'
        ]
    },
    Material_Proposal__c: {
        detailPath: '/material-proposal',
        displayName: 'Material Proposal',
        nameField: 'Name',
        // #417-Picker/Suche: Produktcode mitsuchen, Account im Treffer zeigen
        // #486: Produktbeschreibung dazu — hier zaehlt sie doppelt, weil das
        // Objekt ueber den likeSearchFallback laeuft und die Felder dort in ein
        // `LIKE '%%term%%'` gegossen werden. Die Listensuche nutzt sie genauso.
        searchFields: [
            'Name',
            'Product_Code__c',
            'Product_Description__c'
        ],
        lookupSecondaryFields: [
            'Account__r.Name'
        ],
        likeSearchFallback: true // Product_Code__c ist Formel → nicht SOSL-suchbar
    },
    Monitored_Material__c: {
        detailPath: '/monitored-material',
        displayName: 'Monitored Material',
        nameField: 'Name',
        // #486: Business-Felder aus PlastshipListController.buildSearchCondition
        // uebernommen. Sie machen NICHT auffindbar — SOSL laeuft `IN ALL FIELDS`
        // und matcht diese Werte laengst (gegen die Org nachgemessen). Sie
        // bestimmen, was im secondaryLabel steht: bisher stand dort nichts, ein
        // Treffer auf eine Belegnummer sah aus wie ein Treffer aus dem Nichts.
        searchFields: [
            'Name',
            'Report_Individuelle_Nummer__c',
            'Hauptpolymer__c'
        ]
    },
    Materialanalyse__c: {
        detailPath: '/material-analysis',
        displayName: 'Material Analysis',
        nameField: 'Name',
        // #417-Picker/Suche: Produktcode mitsuchen, Dienstleister im Treffer zeigen
        // #486: Batchnummer dazu — die DoD nennt sie ausdruecklich, und ueber den
        // likeSearchFallback wird sie damit auch matchbar, nicht nur sichtbar.
        searchFields: [
            'Name',
            'Produkt_ID__c',
            'Batchnummer__c'
        ],
        lookupSecondaryFields: [
            'Dienstleister__r.Name'
        ],
        likeSearchFallback: true // Produkt_ID__c ist Formel → nicht SOSL-suchbar
    },
    Sample_Sending__c: {
        detailPath: '/sample-sending',
        displayName: 'Sample Sending',
        nameField: 'Name',
        // #486: Business-Felder aus PlastshipListController.buildSearchCondition
        // uebernommen. Sie machen NICHT auffindbar — SOSL laeuft `IN ALL FIELDS`
        // und matcht diese Werte laengst (gegen die Org nachgemessen). Sie
        // bestimmen, was im secondaryLabel steht: bisher stand dort nichts, ein
        // Treffer auf eine Belegnummer sah aus wie ein Treffer aus dem Nichts.
        searchFields: [
            'Name',
            'Loading_Site__c',
            'Delivery_Site__c'
        ]
    },
    Sample_Feedback__c: {
        detailPath: '/sample-feedback',
        displayName: 'Sample Feedback',
        nameField: 'Name',
        // #486: Business-Felder aus PlastshipListController.buildSearchCondition
        // uebernommen. Sie machen NICHT auffindbar — SOSL laeuft `IN ALL FIELDS`
        // und matcht diese Werte laengst (gegen die Org nachgemessen). Sie
        // bestimmen, was im secondaryLabel steht: bisher stand dort nichts, ein
        // Treffer auf eine Belegnummer sah aus wie ein Treffer aus dem Nichts.
        searchFields: [
            'Name',
            'Produktcode__c'
        ]
    },
    Supplier_Audit__c: {
        detailPath: '/supplier-audit',
        displayName: 'Supplier Audit',
        nameField: 'Name',
        searchFields: [
            'Name'
        ]
    },
    Produktionsstandort__c: {
        detailPath: '/production-site',
        displayName: 'Production Site',
        nameField: 'Name',
        // #486: Business-Felder aus PlastshipListController.buildSearchCondition
        // uebernommen. Sie machen NICHT auffindbar — SOSL laeuft `IN ALL FIELDS`
        // und matcht diese Werte laengst (gegen die Org nachgemessen). Sie
        // bestimmen, was im secondaryLabel steht: bisher stand dort nichts, ein
        // Treffer auf eine Belegnummer sah aus wie ein Treffer aus dem Nichts.
        searchFields: [
            'Name',
            'Ort__c',
            'Land__c'
        ]
    },
    Unternehmenszertifikat__c: {
        detailPath: '/company-certificate',
        displayName: 'Company Certificate',
        nameField: 'Name',
        searchFields: [
            'Name'
        ]
    },
    // #449: Verträge — macht ContractId-Lookup am Auftrag suchbar (Vertragsnummer)
    Contract: {
        detailPath: '/contract',
        displayName: 'Contract',
        nameField: 'ContractNumber',
        searchFields: [
            'ContractNumber'
        ]
    },
    Kostenstelle_plastship__c: {
        detailPath: '/cost-center',
        displayName: 'Kostenstelle',
        nameField: 'Name',
        searchFields: [
            'Name',
            'Nummer_Kostenstelle__c'
        ],
        likeSearchFallback: true // Objekt hat keinen SF-Suchindex — SOSL wirft "does not support search"
    },
    DATEV_Sachkonto__c: {
        // #792: Kontenplan ist reines Lookup-Ziel (AB 19.09./08.10.2026) — keine
        // Detailseite; der Name trägt die Kontonummer, die Bezeichnung erscheint als
        // Zusatz im Suchtreffer.
        detailPath: '',
        displayName: 'DATEV-Sachkonto',
        nameField: 'Name',
        searchFields: [
            'Name',
            'Kontonummer__c',
            'Bezeichnung__c'
        ],
        likeSearchFallback: true // Objekt ohne SF-Suchindex (wie Kostenstelle)
    },
    Abfallfraktionen__c: {
        // #831/#799: Lookup-Ziel für Product2.Abfallfraktionen__c — das Objekt
        // hat keine eigene App-Seite (Stammdatenpflege bleibt in SF).
        detailPath: '',
        displayName: 'Abfallfraktion',
        nameField: 'Name',
        searchFields: [
            'Name',
            'AVV_Nummer__c'
        ]
    },
    Reklamation__c: {
        // #486: '/claim' existiert nicht (auch '/complaints' aus
        // config/salesforceObjects.ts nicht — die Entität hat bis heute keine
        // Seite). Siehe Kommentar bei Event.
        detailPath: '',
        displayName: 'Reklamation',
        nameField: 'Name',
        searchFields: [
            'Name'
        ]
    },
    // #362: Zertifikats-Katalog — macht das Pflicht-Lookup in der Create-Maske suchbar.
    // #333: Detailseite existiert jetzt (Katalog-Eintrag + verwendende Zertifikate).
    Zertifikate__c: {
        detailPath: '/certificate',
        displayName: 'Zertifikat',
        nameField: 'Name',
        searchFields: [
            'Name'
        ]
    },
    // #331: Prüfparameter (Name ist Auto-Nr.; sprechende Bezeichnung = Formel Name__c)
    AuditProperty__c: {
        detailPath: '/audit-property',
        displayName: 'Prüfparameter',
        nameField: 'Name__c',
        searchFields: [
            'Name',
            'Name__c'
        ]
    },
    // #331: Typ-Katalog — macht das Type__c-Lookup in der Create-Maske suchbar.
    AuditPropertyType__c: {
        detailPath: '',
        displayName: 'Prüfparameter-Typ',
        nameField: 'Name',
        searchFields: [
            'Name'
        ]
    },
    Kontakt_bergaben__c: {
        detailPath: '/contact-handover',
        displayName: 'Contact Handover',
        nameField: 'Name',
        searchFields: [
            'Name'
        ]
    },
    Onboarding__c: {
        detailPath: '/onboarding',
        displayName: 'Onboarding',
        nameField: 'Name',
        searchFields: [
            'Name'
        ]
    },
    Abrechnung__c: {
        detailPath: '/invoice',
        displayName: 'Invoice',
        nameField: 'Name',
        // #486: Business-Felder aus PlastshipListController.buildSearchCondition
        // uebernommen. Sie machen NICHT auffindbar — SOSL laeuft `IN ALL FIELDS`
        // und matcht diese Werte laengst (gegen die Org nachgemessen). Sie
        // bestimmen, was im secondaryLabel steht: bisher stand dort nichts, ein
        // Treffer auf eine Belegnummer sah aus wie ein Treffer aus dem Nichts.
        searchFields: [
            'Name',
            'Belegnummer__c'
        ],
        // #1806: Belegnummer I-<Jahr><lfd> — Teilstring (z. B. 2026102) trifft per SOSL nicht (nur Token-Anfang)
        likeSearchFallback: true
    },
    // Note: Invoice__c removed from search - object doesn't exist in teilkopie sandbox
    RecordAccessGrant__c: {
        // #486: '/access-grant' existiert nicht. Grants werden unter
        // /access-management/grants verwaltet — das ist eine Liste, keine
        // Detailseite je Datensatz. Siehe Kommentar bei Event.
        detailPath: '',
        displayName: 'Access Grant',
        nameField: 'Name',
        searchFields: [
            'Name'
        ]
    },
    // Note: Probe__c, Probeversand__c, Requirement__c removed from search - objects don't exist in teilkopie sandbox
    Aktueller_Preis_und_Verf_gbarkeit__c: {
        // #486: '/price-availability' existiert nicht. Siehe Kommentar bei Event.
        detailPath: '',
        displayName: 'Price & Availability',
        nameField: 'Name',
        searchFields: [
            'Name'
        ]
    },
    // #495: Prozessfeedback stand in SOBJECTS, hatte aber keine Suchkonfiguration
    // — die beiden Selbstbezüge (übergeordnetes/verknüpftes Feedback) liefen
    // deshalb in ein 400 „Unsupported object type" und zeigten ein leeres
    // Dropdown ohne Hinweis.
    Prozessfeedback__c: {
        detailPath: '/process-feedback',
        displayName: 'Prozessfeedback',
        nameField: 'Name',
        searchFields: [
            'Name'
        ]
    },
    // #495: reine Lookup-Ziele — detailPath '' hält sie aus globaler Suche und
    // Suggestions heraus (getSearchableObjects filtert darauf), das Autocomplete
    // liest searchDisplayConfig dagegen direkt.
    Campaign: {
        detailPath: '',
        displayName: 'Kampagne',
        nameField: 'Name',
        searchFields: [
            'Name'
        ]
    },
    Quote: {
        detailPath: '',
        displayName: 'Angebot',
        nameField: 'Name',
        searchFields: [
            'Name',
            'QuoteNumber'
        ]
    }
};
function getSearchableObjects(role) {
    const accessible = getAccessibleObjects(role, 'view');
    // #331: Objekte ohne eigene Detailseite (detailPath '') sind reine
    // Lookup-Ziele (die Create-Maske sucht direkt über /api/salesforce/lookup,
    // das searchDisplayConfig[objectType] selbst liest). In der globalen Suche
    // und den Suggestions würden sie tote Links erzeugen: die Suggestions-Route
    // baut value = `${detailPath}/${id}` → '/a0a…' → 404, die Suchseite
    // rendert nicht-klickbare Zeilen.
    return accessible.filter((obj)=>{
        const config = searchDisplayConfig[obj];
        return config !== undefined && config.detailPath !== '';
    });
}
function getSearchConfigs(objects) {
    return objects.map((obj)=>{
        const config = searchDisplayConfig[obj];
        if (!config) return null;
        return {
            objectType: obj,
            nameField: config.nameField,
            searchFields: config.searchFields,
            // #495: nur setzen, wenn konfiguriert — sonst entscheidet weiterhin die
            // Default-Liste der Apex-Klasse.
            ...config.searchMode ? {
                searchMode: config.searchMode
            } : {}
        };
    }).filter((c)=>c !== null);
}
function getSearchDisplayConfig(object) {
    return searchDisplayConfig[object];
}
// ============================================================================
// EXPORT ALL
// ============================================================================
/**
 * All permission functions and data collected for default export
 */ const permissionsExport = {
    // Data (aliases of the DEFAULT_* constants)
    globalPermissions,
    staffTagPermissions,
    ALL_STAFF_TAGS,
    recordVisibilityRules,
    fieldDefinitions,
    alwaysVisibleFields,
    flexpageConfig,
    moduleConfig,
    searchDisplayConfig,
    // Code-defined configuration (single source of truth, #364)
    DEFAULT_GLOBAL_PERMISSIONS,
    DEFAULT_STAFF_TAG_PERMISSIONS,
    DEFAULT_OBJECT_VISIBILITY_CONFIG,
    DEFAULT_RECORD_VISIBILITY_RULES,
    DEFAULT_FIELD_DEFINITIONS,
    DEFAULT_ALWAYS_VISIBLE_FIELDS,
    // Getters (return the code-defined configuration)
    getGlobalPermissions,
    getStaffTagPermissions,
    getObjectVisibilityConfig,
    getRecordVisibilityRules,
    getFieldDefinitions,
    getAlwaysVisibleFields,
    // Functions
    hasObjectAccess,
    hasRecordAccess,
    resolveStaffTags,
    hasStaffTag,
    isInternalStaff,
    getAccessibleInformationCategories,
    getVisibleFields,
    getSalesforceLayoutMapping,
    getFlexpage,
    canAccessInformationCategory,
    getAccessibleObjects,
    requiresRecordLevelFiltering,
    hasPermission,
    getSearchableObjects,
    getSearchConfigs,
    getSearchDisplayConfig
};
const __TURBOPACK__default__export__ = permissionsExport;
var _c, _c1;
__turbopack_context__.k.register(_c, "ANALYTICS_ROLES$ROLES.filter");
__turbopack_context__.k.register(_c1, "ANALYTICS_ROLES");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/rbac/perspectives.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Perspective resolution for multi-party deal objects (#329 Welle A).
 *
 * Objects like Material_Proposal__c (and later Order / Sample_Sending__c) have
 * three external parties — customer, supplier, carrier — wired via contact
 * lookups on the record. The SERVER already masks fields per relationship
 * (recordVisibilityRules → information categories). This module mirrors that
 * model so that:
 *  - the detail layout renders only the section set(s) matching the viewer's
 *    relationship (no empty-dash sections of the other party), and
 *  - update routes restrict writes to the fields a perspective may edit.
 *
 * Security note: perspective resolution is NOT an access-control boundary on
 * the client — record access and field masking stay server-side. On the
 * client the resolver only decides what to DISPLAY, and it can only match a
 * perspective whose lookup field the masking actually delivered. On the
 * server (write path) the resolver runs against the unmasked record.
 */ __turbopack_context__.s([
    "PERSPECTIVE_FILTERED_ROLES",
    ()=>PERSPECTIVE_FILTERED_ROLES,
    "getPerspectiveUpdatableFields",
    ()=>getPerspectiveUpdatableFields,
    "resolvePerspectives",
    ()=>resolvePerspectives
]);
const PERSPECTIVE_FILTERED_ROLES = new Set([
    'user',
    'rigk',
    'agent'
]);
function matchLookups(record, id, lookups, into) {
    if (!id || !lookups) return;
    for (const [perspective, fieldOrFields] of Object.entries(lookups)){
        const fields = Array.isArray(fieldOrFields) ? fieldOrFields : [
            fieldOrFields
        ];
        if (fields.some((field)=>field && record[field] === id)) {
            into.add(perspective);
        }
    }
}
function resolvePerspectives(record, viewer, perspectives) {
    if (!record) return [];
    const matched = new Set();
    matchLookups(record, viewer.contactId, perspectives.lookups, matched);
    matchLookups(record, viewer.accountId, perspectives.accountLookups, matched);
    return Array.from(matched);
}
function getPerspectiveUpdatableFields(perspectives, role, record, viewer) {
    if (!perspectives) return null;
    if (!PERSPECTIVE_FILTERED_ROLES.has(role)) return null;
    const matched = resolvePerspectives(record, viewer, perspectives);
    const fields = new Set();
    for (const p of matched){
        for (const f of perspectives.updatable?.[p] ?? [])fields.add(f);
    }
    return Array.from(fields);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/rbac/productVisibility.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OWN_PRODUCTS_ALWAYS_VISIBLE",
    ()=>OWN_PRODUCTS_ALWAYS_VISIBLE,
    "PRODUCT_SUPPLIER_FIELDS",
    ()=>PRODUCT_SUPPLIER_FIELDS,
    "buildCustomerProductCondition",
    ()=>buildCustomerProductCondition,
    "customerMayOpenProduct",
    ()=>customerMayOpenProduct,
    "isMarketplaceListed",
    ()=>isMarketplaceListed,
    "isProductSupplierKey",
    ()=>isProductSupplierKey,
    "seesProductSupplier",
    ()=>seesProductSupplier,
    "stripProductSupplier",
    ()=>stripProductSupplier
]);
/**
 * #1419: Welche Produkte (Product2) ein Kunde öffnen darf und was er von ihnen
 * sieht. EINE Quelle für Detail, Lookup, Suche, Related-Record und Listen —
 * vorher hatte die Kundenrolle einen bedingungslosen Marktplatz-Bypass
 * (`hasRecordAccess` → true, `buildRecordFilter` → `Id != null`), womit sich
 * jede Product2-Id samt Name und Lieferant auflösen ließ.
 *
 * PO-Entscheid:
 *  1. Kunden öffnen nur Produkte, die laut Sales_Intent__c im Marktplatz
 *     gelistet sind (dieselbe Wertemenge wie der Marktplatz-Filter #209).
 *     Alles andere ist für sie „nicht gefunden".
 *  2. Der Lieferant ist für Kunden an KEINEM Produkt sichtbar.
 *
 * Bewusst ohne Import aus permissions.ts (die importiert diese Datei).
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$sales$2d$intent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/sales-intent.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$utils$2f$soqlSanitizer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/utils/soqlSanitizer.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$rbac$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/rbac/constants.ts [app-client] (ecmascript)");
;
;
;
const OWN_PRODUCTS_ALWAYS_VISIBLE = false;
const PRODUCT_SUPPLIER_FIELDS = [
    'Account__c',
    'Accountinhaber__c',
    'Verh_ltnis_Account__c',
    'Ist_Key_Account__c'
];
function isRecordScoped(role) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$rbac$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RECORD_SCOPED_ROLES"].includes(role);
}
function seesProductSupplier(userContext) {
    return userContext.role === 'admin' || userContext.role === 'staff';
}
function isMarketplaceListed(salesIntent) {
    if (salesIntent == null || salesIntent === '') return true;
    return !__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$sales$2d$intent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HIDDEN_SALES_INTENTS"].includes(salesIntent);
}
function customerMayOpenProduct(product, userContext) {
    if (!isRecordScoped(userContext.role)) return true;
    if (!product) return false;
    if ('Sales_Intent__c' in product && isMarketplaceListed(product.Sales_Intent__c)) return true;
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return false;
}
function buildCustomerProductCondition(userContext, fieldPrefix = '') {
    if (!isRecordScoped(userContext.role)) return null;
    const listed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$sales$2d$intent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildMarketplaceVisibilityCondition"])(`${fieldPrefix}Sales_Intent__c`);
    if (OWN_PRODUCTS_ALWAYS_VISIBLE && (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$utils$2f$soqlSanitizer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidSalesforceId"])(userContext.accountId)) //TURBOPACK unreachable
    ;
    return listed;
}
function stripProductSupplier(product) {
    const out = {};
    for (const [key, value] of Object.entries(product)){
        if (isProductSupplierKey(key)) continue;
        out[key] = value;
    }
    return out;
}
function isProductSupplierKey(key) {
    if (PRODUCT_SUPPLIER_FIELDS.includes(key)) return true;
    if (key.endsWith('__r')) return PRODUCT_SUPPLIER_FIELDS.includes(`${key.slice(0, -3)}__c`);
    return false;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/rbac/tagGates.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * #1856: Ressourcen, die für bestimmte Rollen zusätzlich ein Tag am Konto
 * verlangen — Muster wie timeAreaGate.ts, eine Quelle für hasObjectAccess
 * (Server und Browser) und den Rechte-Snapshot (permissionSnapshot.ts).
 *
 * #1889: `/auctions` (Übersicht des Auktionshauses, Überpunkt „Auktionen" in
 * der Seitenleiste): admin ohne Gate, partner nur mit Tag `ineos`. Das Tag
 * wird WÖRTLICH gelesen — ohne management-Auflösung (die betrifft nur staff)
 * und ohne admin-Durchgriff (admin hat hier gar kein Gate). Rollen ohne
 * Eintrag im Gate entscheidet die Rechte-Matrix allein. Alle weiteren
 * Auktionsseiten hängen an `auctions-admin` (nur admin, ohne Gate).
 *
 * #1927: `/my-auctions` hängt nicht mehr am Tag `ineos`, sondern an der
 * Pool-Mitgliedschaft (Konzept §8): SCOPE_GATED_RESOURCES unten. Das Tag
 * `ineos` bleibt nur Kennzeichen am Konto.
 *
 * Abhängigkeitsfrei, damit permissions.ts und permissionSnapshot.ts es ohne
 * Zirkelbezug importieren und der Browser es mitnehmen kann.
 */ __turbopack_context__.s([
    "SCOPE_GATED_RESOURCES",
    ()=>SCOPE_GATED_RESOURCES,
    "TAG_GATED_RESOURCES",
    ()=>TAG_GATED_RESOURCES,
    "closeScopeGates",
    ()=>closeScopeGates,
    "closeTagGates",
    ()=>closeTagGates,
    "isScopeGated",
    ()=>isScopeGated,
    "isTagGatedResource",
    ()=>isTagGatedResource,
    "passesTagGate",
    ()=>passesTagGate,
    "requiredTagFor",
    ()=>requiredTagFor
]);
const TAG_GATED_RESOURCES = {
    auctions: {
        partner: 'ineos'
    }
};
function isTagGatedResource(resource) {
    return Object.prototype.hasOwnProperty.call(TAG_GATED_RESOURCES, resource);
}
function requiredTagFor(role, resource) {
    if (!isTagGatedResource(resource)) return null;
    const gate = TAG_GATED_RESOURCES[resource];
    return gate[role] ?? null;
}
function passesTagGate(role, staffTags, resource) {
    const tag = requiredTagFor(role, resource);
    if (tag === null) return true;
    return Array.isArray(staffTags) && staffTags.includes(tag);
}
const ZU = {
    view: false,
    create: false,
    edit: false,
    delete: false
};
function closeTagGates(role, staffTags, permissions) {
    const ziel = {
        ...permissions
    };
    for (const resource of Object.keys(TAG_GATED_RESOURCES)){
        if (!passesTagGate(role, staffTags, resource)) ziel[resource] = {
            ...ZU
        };
    }
    return ziel;
}
const SCOPE_GATED_RESOURCES = {
    'my-auctions': [
        'partner'
    ]
};
function isScopeGated(role, resource) {
    if (!Object.prototype.hasOwnProperty.call(SCOPE_GATED_RESOURCES, resource)) return false;
    const rollen = SCOPE_GATED_RESOURCES[resource];
    return rollen.includes(role);
}
function closeScopeGates(role, open, permissions) {
    const ziel = {
        ...permissions
    };
    for (const resource of Object.keys(SCOPE_GATED_RESOURCES)){
        if (isScopeGated(role, resource) && open[resource] !== true) ziel[resource] = {
            ...ZU
        };
    }
    return ziel;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/rbac/timeAreaGate.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * #1576 (R86) Schalter des Bereichs Zeit & Abwesenheit bis zum Start.
 *
 * Der Bereich ist fertig, wird aber versteckt ausgeliefert. `TIME_AREA_AUDIENCE`
 * entscheidet, wer ihn sieht:
 * - `all`: wie in den Rollendefinitionen (Rechte-Matrix, Tag `hr`, `management`
 *   schließt `hr` ein).
 * - alles andere (fehlt, leer, unbekannt) = `admin` (Vorab-Phase): rollenabhängig
 *   nach `TIME_AREA_TAG_BY_ROLE` — genau admin mit Tag `it` (#1592, „nur IT soll
 *   Zeiten tracken können") und staff mit Tag `intern` (#1853, Praktikum). staff
 *   mit nur `it`, admin mit nur `intern`, alle anderen Rollen und Konten ohne Tag
 *   bleiben draußen. Der Modusname bleibt `admin`, damit Umgebungen und
 *   Wiki-Logik unverändert gelten.
 *
 * Rolle und Tags sind die wirksamen des Kontexts: In der Rollen-Vorschau
 * („Ansicht als", #1194) liefert getUserContext Vorschaurolle UND Vorschau-Tags —
 * „Ansicht als staff mit intern" öffnet den Bereich also wie ein echtes
 * Praktikumskonto, „Ansicht als staff" ohne Tag nicht.
 *
 * Der Schalter greift an der Quelle — im Rechte-Snapshot (`getUserContext`) und
 * in `hasObjectAccess` — und nur für die drei Ressourcen des Bereichs. Matrix,
 * Tag-Logik und Routen bleiben unverändert; der Schalter legt sich darüber.
 *
 * Abhängigkeitsfrei, damit permissions.ts und apiPermissions.ts ihn ohne
 * Zirkelbezug importieren. Der Browser kennt die Variable nicht: dorthin trägt
 * nur der Snapshot den Schalter (siehe hasObjectAccess).
 */ __turbopack_context__.s([
    "TIME_AREA_RESOURCES",
    ()=>TIME_AREA_RESOURCES,
    "TIME_AREA_TAG_BY_ROLE",
    ()=>TIME_AREA_TAG_BY_ROLE,
    "closeTimeArea",
    ()=>closeTimeArea,
    "isTimeAreaResource",
    ()=>isTimeAreaResource,
    "opensTimeArea",
    ()=>opensTimeArea,
    "timeAreaAudience",
    ()=>timeAreaAudience
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const TIME_AREA_RESOURCES = [
    'working-hours',
    'absences',
    'time-admin'
];
const TIME_AREA_TAG_BY_ROLE = {
    admin: 'it',
    staff: 'intern'
};
function opensTimeArea(role, staffTags) {
    if (!role || !Object.prototype.hasOwnProperty.call(TIME_AREA_TAG_BY_ROLE, role)) return false;
    const tag = TIME_AREA_TAG_BY_ROLE[role];
    return Array.isArray(staffTags) && staffTags.includes(tag);
}
function isTimeAreaResource(resource) {
    return TIME_AREA_RESOURCES.includes(resource);
}
function timeAreaAudience() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.TIME_AREA_AUDIENCE === 'all' ? 'all' : 'admin';
}
const ZU = {
    view: false,
    create: false,
    edit: false,
    delete: false
};
function closeTimeArea(permissions) {
    const ziel = {
        ...permissions
    };
    for (const resource of TIME_AREA_RESOURCES)ziel[resource] = {
        ...ZU
    };
    return ziel;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/rbac/updatableFields.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UPDATABLE_FIELDS_DENYLIST",
    ()=>UPDATABLE_FIELDS_DENYLIST,
    "getConfigForApiName",
    ()=>getConfigForApiName,
    "getCreateableFields",
    ()=>getCreateableFields,
    "getUpdatableFields",
    ()=>getUpdatableFields
]);
/**
 * Updatable-field allowlist helper (issue #270 — Salesforce record-update mass-assignment).
 *
 * Derives the set of client-updatable fields for an entity from its
 * EntityFieldConfig (the same configs that drive the detail-page UI), then
 * strips a conservative denylist of never-client-updatable / system / cross-object
 * fields. The result is intended to be passed as `updatableFields` to the entity
 * API factory's update handler so that the request body is filtered to known,
 * UI-editable fields instead of being written wholesale to Salesforce.
 *
 * Pure module: no I/O beyond an optional console.warn when an entityType has no
 * config (so the factory can safely fall back to its current behavior).
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/config/entityFields/index.ts [app-client] (ecmascript) <locals>");
;
const UPDATABLE_FIELDS_DENYLIST = [
    'Id',
    'OwnerId',
    'CreatedById',
    'CreatedDate',
    'LastModifiedById',
    'LastModifiedDate',
    'SystemModstamp',
    'IsDeleted'
];
const DENYLIST_SET = new Set(UPDATABLE_FIELDS_DENYLIST);
/**
 * Lookup of EntityFieldConfig keyed by the config's own `entityType` property.
 * Note: this keys by config.entityType (not by the registry key), which is the
 * canonical Salesforce object API name carried inside each config.
 */ const configByEntityType = (()=>{
    const map = {};
    for (const config of Object.values(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["entityFieldConfigs"])){
        if (config && typeof config.entityType === 'string') {
            map[config.entityType] = config;
        }
    }
    // Alias: the contact-handover route (and Salesforce) use the ASCII API name
    // 'Kontakt_bergaben__c', but the generated config carries the umlaut form
    // 'Kontakt_Übergaben__c'. Map the canonical API name to that config so #270
    // field-filtering engages for contact-handover instead of the empty fallback.
    const uebergaben = map['Kontakt_Übergaben__c'];
    if (uebergaben && !map['Kontakt_bergaben__c']) {
        map['Kontakt_bergaben__c'] = uebergaben;
    }
    return map;
})();
/**
 * True when a field must be excluded from the updatable allowlist:
 * - explicitly denylisted system/audit field
 * - relationship traversal (`...__r`)
 * - cross-object dotted path (`Parent.Field`)
 */ function isDeniedField(apiName) {
    if (DENYLIST_SET.has(apiName)) return true;
    if (apiName.endsWith('__r')) return true;
    if (apiName.includes('.')) return true;
    return false;
}
function getConfigForApiName(entityType) {
    return configByEntityType[entityType];
}
/** True when a config entry (section or field) is visible for the given role. */ function visibleForRole(entry, role) {
    return !entry.visibleForRoles || entry.visibleForRoles.includes(role);
}
function getCreateableFields(entityType) {
    const config = configByEntityType[entityType];
    if (!config) {
        console.warn(`[getCreateableFields] No EntityFieldConfig found for entityType "${entityType}". ` + 'Returning empty list.');
        return [];
    }
    const collected = new Set();
    for (const section of config.sections ?? []){
        for (const field of section.fields ?? []){
            if (field?.readOnly) continue;
            const apiName = field?.apiName;
            if (typeof apiName === 'string' && !isDeniedField(apiName)) {
                collected.add(apiName);
            }
        }
    }
    return Array.from(collected);
}
function getUpdatableFields(entityType, role) {
    const config = configByEntityType[entityType];
    if (!config) {
        console.warn(`[getUpdatableFields] No EntityFieldConfig found for entityType "${entityType}". ` + 'Returning empty allowlist; caller should fall back to existing behavior.');
        return [];
    }
    const collected = new Set();
    // #404: die Update-Allowlist wird ausschließlich aus `sections` abgeleitet.
    // headerFields sind eine reine Darstellungs-Sache (Highlight-Card) und tragen
    // weder readOnly- noch Rollen-Metadaten. Jedes editierbare Header-Feld ist
    // zusätzlich in einer Section deklariert (über alle Configs geprüft), der
    // Header-Loop fügte daher nichts hinzu außer header-only Read-only-Feldern wie
    // der Order-Formel Rechnungen_pr_fen__c — die SF mit
    // INVALID_FIELD_FOR_INSERT_UPDATE ablehnt (#326/#329). Der Rollen-Pfad hat
    // headerFields aus genau diesem Grund schon immer übersprungen; beide Pfade
    // sind jetzt konsistent. Ein header-only Feld, das editierbar sein soll, muss
    // in einer Section deklariert werden.
    for (const section of config.sections ?? []){
        if (role && !visibleForRole(section, role)) continue;
        for (const field of section.fields ?? []){
            if (role && !visibleForRole(field, role)) continue;
            // #329: read-only fields (formulas, rollups, display-only lookups) are
            // never client-writable — excluding them keeps them out of the allowlist
            // (and avoids the SF INVALID_FIELD_FOR_INSERT_UPDATE 500s, cf. #326).
            // #404: `readOnlyOnEdit` fields are createable but not updateable, so they
            // are excluded from the update allowlist too (create uses createSections).
            if (field?.readOnly || field?.readOnlyOnEdit) continue;
            const apiName = field?.apiName;
            // OwnerId steht in der globalen Denylist (#270) — führt ein Entity-Config
            // das Feld aber AUSDRÜCKLICH als editierbares Sektions-Feld, ist der
            // Besitzerwechsel eine bewusste Konfig-Entscheidung und erlaubt (#459:
            // 'Owner-Wechsel schlägt fehl' — die Denylist überstimmte das Config).
            if (typeof apiName === 'string' && (apiName === 'OwnerId' || !isDeniedField(apiName))) {
                collected.add(apiName);
            }
        }
    }
    return Array.from(collected);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/records/recordLabel.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * #1238 (M-14…M-20): der Anzeige-Name eines Datensatzes — nie eine Id als
 * Namensersatz. Liefert den ersten nicht-leeren String der Kandidaten
 * (z. B. `Owner?.Name`, `record.Name`), sonst `null`.
 */ __turbopack_context__.s([
    "recordLabel",
    ()=>recordLabel
]);
function recordLabel(...candidates) {
    for (const candidate of candidates){
        if (typeof candidate === 'string' && candidate.trim() !== '') return candidate;
    }
    return null;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/routing/appFrame.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FRAMELESS_PREFIXES",
    ()=>FRAMELESS_PREFIXES,
    "usesAppFrame",
    ()=>usesAppFrame
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$auth$2f$routeProtection$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/auth/routeProtection.ts [app-client] (ecmascript)");
;
const FRAMELESS_PREFIXES = [
    // Pflicht-Passwortwechsel: Site-Kopf (Default), keine Navigation
    '/password-change',
    // #1889: Einbettungsansicht, bewusst ohne Rahmen
    '/auctions/widget'
];
function normalisiere(pathname) {
    const ohneQuery = pathname.split(/[?#]/)[0] || '/';
    return ohneQuery.length > 1 && ohneQuery.endsWith('/') ? ohneQuery.slice(0, -1) : ohneQuery;
}
function usesAppFrame(pathname) {
    if (!pathname) return false;
    const pfad = normalisiere(pathname);
    if (FRAMELESS_PREFIXES.some((p)=>pfad === p || pfad.startsWith(`${p}/`))) return false;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$auth$2f$routeProtection$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAppRoute"])(pfad) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$auth$2f$routeProtection$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPublicRoute"])(pfad);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/sales-intent.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HIDDEN_SALES_INTENTS",
    ()=>HIDDEN_SALES_INTENTS,
    "buildMarketplaceVisibilityCondition",
    ()=>buildMarketplaceVisibilityCondition,
    "isCommerciallyActive",
    ()=>isCommerciallyActive
]);
/**
 * #771/#209: eine Quelle für die Marktplatz-/Verkaufs-Semantik von
 * Product2.Sales_Intent__c.
 *
 * - Produktkatalog (#209): Werte in HIDDEN_SALES_INTENTS sind für
 *   Kundenrollen unsichtbar; null gilt als sichtbar.
 * - Monitored Materials (#771): „Kommerziell aktiv" wird aus dem verknüpften
 *   Produkt ABGELEITET (PO-Entscheid 30.08.2026: kein eigenes SF-Feld am MM,
 *   Pflege läuft über das Produkt/Kanban). Gleiche Wertemenge, gleiche
 *   null-Parität wie der Marktplatz-Filter.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$utils$2f$soqlSanitizer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/utils/soqlSanitizer.ts [app-client] (ecmascript)");
;
const HIDDEN_SALES_INTENTS = [
    'Deactivated',
    'Salesforce only',
    'Platform invisible'
];
function buildMarketplaceVisibilityCondition(fieldPath = 'Sales_Intent__c') {
    const list = HIDDEN_SALES_INTENTS.map((v)=>`'${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$utils$2f$soqlSanitizer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sanitizeForSOQL"])(v)}'`).join(', ');
    return `(${fieldPath} = null OR ${fieldPath} NOT IN (${list}))`;
}
function isCommerciallyActive(salesIntent, hasProduct) {
    if (!hasProduct) return null;
    if (salesIntent == null || salesIntent === '') return true;
    return !HIDDEN_SALES_INTENTS.includes(salesIntent);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/security/zodJitless.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$config$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-client] (ecmascript) <export * as z .config>");
;
/*
 * zod ohne Laufzeit-Kompilierung im Browser (#1539). zod prüft sonst beim
 * ersten Objekt-Schema mit `new Function('')`, ob es Prüfcode erzeugen darf.
 * Unter einer Content-Security-Policy ohne 'unsafe-eval' wird der Versuch
 * abgefangen, aber trotzdem als Verstoß gemeldet — auf /contact-us/ landete
 * so bei jedem Aufruf ein CSP-Bericht in Sentry. Mit `jitless` entfällt die
 * Probe; die Schemas prüfen dann interpretiert, was bei Formularen nicht
 * messbar ist. Auf dem Server bleibt die Kompilierung an.
 *
 * Als Seiteneffekt importieren, bevor ein Schema im Browser prüft:
 * `import '@/lib/security/zodJitless'`.
 */ if ("TURBOPACK compile-time truthy", 1) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z__$2e$config$3e$__["z"].config({
    jitless: true
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/usage/roleLabel.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "rollenLabel",
    ()=>rollenLabel,
    "rollenLabelKey",
    ()=>rollenLabelKey,
    "rollenLabelVorgabe",
    ()=>rollenLabelVorgabe,
    "rollenOptionen",
    ()=>rollenOptionen,
    "rollenOptionenMitSchluessel",
    ()=>rollenOptionenMitSchluessel,
    "rollenSerienNamen",
    ()=>rollenSerienNamen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$rbac$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/rbac/constants.ts [app-client] (ecmascript)");
;
/**
 * #1049: Anzeigename einer Rolle in der Nutzungsanalyse. Uebersetzungen
 * liegen in der DB (Schluessel usage.role.<rolle>); bis sie gepflegt sind,
 * gilt der deutsche Vorgabewert. "other" ist die Kleingruppen-Sammelrolle.
 *
 * #1869: die Schluessel usage.role.<rolle> sind die vollstaendig gepflegte
 * Benennung aller Rollen — Auswahllisten (Zielgruppe, PIA-Werkzeuge,
 * Feld-Vorschau, Ansicht als) nehmen sie ueber {@link rollenOptionen}. Der
 * Record-Typ erzwingt einen Eintrag je Rolle aus ROLES.
 */ const VORGABEN = {
    admin: 'Admin',
    staff: 'Mitarbeiter',
    agent: 'Agent',
    user: 'Kunde',
    accounting: 'Buchhaltung',
    laboratory: 'Labor',
    advisor: 'Beirat',
    rigk: 'RIGK',
    // #1855
    partner: 'Partner',
    // #1142: oeffentliche Seiten ohne Konto, nur mit Einwilligung gezaehlt
    anonymous: 'Anonym (öffentlich)',
    other: 'Sonstige (< Mindestgruppe)'
};
function rollenLabelKey(rolle) {
    return `usage.role.${rolle}`;
}
function rollenLabelVorgabe(rolle) {
    return VORGABEN[rolle] ?? rolle.charAt(0).toUpperCase() + rolle.slice(1);
}
function rollenLabel(tr, rolle) {
    return tr(rollenLabelKey(rolle), {
        defaultValue: rollenLabelVorgabe(rolle)
    });
}
function rollenOptionen(tr, rollen = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$rbac$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ROLES"]) {
    return rollen.map((rolle)=>({
            value: rolle,
            label: rollenLabel(tr, rolle)
        }));
}
function rollenOptionenMitSchluessel(rollen = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$rbac$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ROLES"]) {
    return rollen.map((rolle)=>({
            value: rolle,
            label: rollenLabelVorgabe(rolle),
            labelKey: rollenLabelKey(rolle)
        }));
}
function rollenSerienNamen(tr) {
    return Object.fromEntries(Object.keys(VORGABEN).map((rolle)=>[
            rolle,
            rollenLabel(tr, rolle)
        ]));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);})()

//# sourceMappingURL=apps_web_src_lib_17ll-ldt8t6-7._.js.map