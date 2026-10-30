(()=>{"use strict";(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
"[project]/apps/web/src/lib/auth/viewAs.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VIEW_AS_ROLES",
    ()=>VIEW_AS_ROLES,
    "activeViewAs",
    ()=>activeViewAs,
    "applyViewAsToSessionUser",
    ()=>applyViewAsToSessionUser,
    "effectiveRole",
    ()=>effectiveRole,
    "effectiveStaffTags",
    ()=>effectiveStaffTags,
    "isRecordScopedRole",
    ()=>isRecordScopedRole,
    "nextViewAsClaim",
    ()=>nextViewAsClaim,
    "parseViewAs",
    ()=>parseViewAs,
    "viewAsTagsFor",
    ()=>viewAsTagsFor
]);
/**
 * #1194 — Rollen-Vorschau „Ansicht als" für admin.
 *
 * Ein admin wählt in der Kopfleiste eine Rolle (mit Staff-Tags oder Modulen)
 * und sieht die Anwendung so, wie diese Rolle sie sieht. Die Wahl liegt als
 * Claim `viewAs` im Sitzungs-JWT; gesetzt wird er über NextAuth `update()`.
 *
 * Die Rolle existiert dreifach, deshalb wirkt der Claim an drei Stellen:
 *   - Session-Callback  → `session.user.role` (26 Client-Dateien lesen sie direkt)
 *   - getUserContext()  → APIs, Seiten-Guards, Dashboard, Client-Kontext; dort
 *                         gewinnt sonst die frisch gelesene DB-Rolle (#275)
 *   - Middleware        → Admin- und Redaktions-Präfixe (liest das rohe JWT)
 *
 * Sicherheitskern: Rollen sind KEINE Kette (staff → accounting ist kein
 * Abstieg). Nur admin ist Obermenge aller Rollen; nur für admin ist die
 * Vorschau eine reine Rechteminderung. Darum:
 *   - angenommen wird der Claim nur bei DB-Rolle admin (`nextViewAsClaim`),
 *   - angewendet nur bei echter Rolle admin (`activeViewAs`, getUserContext),
 *   - die Werte sind auf die Vokabulare aus constants.ts begrenzt.
 *
 * Bei Kundenrollen (Record-Filterung) wird die Identität geleert: mit den Ids
 * des Admins blieben Listen leer, Ownership-Prüfungen öffneten aber dessen
 * eigene Datensätze. Geleert zeigt die Vorschau die Hülle exakt, Daten keine.
 *
 * Edge-tauglich: importiert nur die abhängigkeitsfreien RBAC-Konstanten.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$rbac$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/rbac/constants.ts [app-client] (ecmascript)");
;
const VIEW_AS_ROLES = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$rbac$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ROLES"].filter(_c = (role)=>role !== 'admin');
_c1 = VIEW_AS_ROLES;
const KEINE_TAGS = [];
function viewAsTagsFor(role) {
    if (typeof role !== 'string') return KEINE_TAGS;
    return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$rbac$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TAGS_BY_ROLE"][role] ?? KEINE_TAGS;
}
function isRecordScopedRole(role) {
    return typeof role === 'string' && __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$rbac$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RECORD_SCOPED_ROLES"].includes(role);
}
/** `undefined` → leer; alles, was keine Liste bekannter Werte ist → null (ablehnen). */ function bekannteWerte(value, erlaubt) {
    if (value === undefined) return [];
    if (!Array.isArray(value)) return null;
    const liste = [];
    for (const eintrag of value){
        if (typeof eintrag !== 'string' || !erlaubt.includes(eintrag)) return null;
        if (!liste.includes(eintrag)) liste.push(eintrag);
    }
    return liste;
}
function parseViewAs(input) {
    if (!input || typeof input !== 'object' || Array.isArray(input)) return null;
    const { role, staffTags, modules } = input;
    if (typeof role !== 'string' || !VIEW_AS_ROLES.includes(role)) return null;
    const tags = bekannteWerte(staffTags, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$rbac$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STAFF_TAGS"]);
    const modulListe = bekannteWerte(modules, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$rbac$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MODULES"]);
    if (!tags || !modulListe) return null;
    return {
        role: role,
        staffTags: tags.filter((tag)=>viewAsTagsFor(role).includes(tag)),
        modules: isRecordScopedRole(role) ? modulListe : []
    };
}
function nextViewAsClaim(args) {
    if (args.dbRole !== 'admin') return undefined;
    const { payload } = args;
    if (payload && typeof payload === 'object' && 'viewAs' in payload) {
        return parseViewAs(payload.viewAs) ?? undefined;
    }
    return parseViewAs(args.current) ?? undefined;
}
function activeViewAs(token) {
    if (!token || token.role !== 'admin') return null;
    return parseViewAs(token.viewAs);
}
function effectiveRole(token) {
    const viewAs = activeViewAs(token);
    if (viewAs) return viewAs.role;
    return typeof token?.role === 'string' ? token.role : undefined;
}
function effectiveStaffTags(token) {
    const viewAs = activeViewAs(token);
    if (viewAs) return viewAs.staffTags;
    return Array.isArray(token?.staffTags) ? token.staffTags : [];
}
function applyViewAsToSessionUser(user, token) {
    user.realRole = typeof token?.role === 'string' ? token.role : undefined;
    const viewAs = activeViewAs(token);
    if (!viewAs) return null;
    user.role = viewAs.role;
    user.staffTags = viewAs.staffTags;
    if (isRecordScopedRole(viewAs.role)) {
        user.salesforceId = null;
        user.salesforceContactId = undefined;
        user.salesforceAccountId = undefined;
    }
    return viewAs;
}
var _c, _c1;
__turbopack_context__.k.register(_c, "VIEW_AS_ROLES$ROLES.filter");
__turbopack_context__.k.register(_c1, "VIEW_AS_ROLES");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/company.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "COMPANY",
    ()=>COMPANY
]);
/**
 * Plastship company constants — Next.js-side view on the ONE source
 * `docker/pdf-service/templates/partials/company.json` (#1018).
 *
 * The JSON lives next to the PDF-service partials because that service is a
 * separate Node project with its own image (it copies `templates/`); the web
 * build bundles the file at CI build time, so the prebuilt image needs no
 * runtime access. Consumers: PDF footers (document-base.js), verification
 * report, ZUGFeRD invoice XML, PDF metadata and the mail signature.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$docker$2f$pdf$2d$service$2f$templates$2f$partials$2f$company$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/docker/pdf-service/templates/partials/company.json.[json].cjs [app-client] (ecmascript)");
;
const COMPANY = __TURBOPACK__imported__module__$5b$project$5d2f$docker$2f$pdf$2d$service$2f$templates$2f$partials$2f$company$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
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
"[project]/apps/web/src/lib/documents/documentRegistry.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DOCUMENT_OBJECT_GRANTS",
    ()=>DOCUMENT_OBJECT_GRANTS,
    "DOCUMENT_REGISTRY",
    ()=>DOCUMENT_REGISTRY,
    "ROLES_WITH_DOCUMENTS",
    ()=>ROLES_WITH_DOCUMENTS,
    "canRoleGenerateDocuments",
    ()=>canRoleGenerateDocuments,
    "getDocumentApiNameForPdfPath",
    ()=>getDocumentApiNameForPdfPath,
    "getDocumentConfig",
    ()=>getDocumentConfig,
    "getDocumentContentFields",
    ()=>getDocumentContentFields,
    "getDocumentRecipientFields",
    ()=>getDocumentRecipientFields,
    "getDocumentRowIssues",
    ()=>getDocumentRowIssues,
    "getDocumentType",
    ()=>getDocumentType,
    "getMissingContentFields",
    ()=>getMissingContentFields,
    "groupMissingContentFields",
    ()=>groupMissingContentFields,
    "hasFullDocumentFieldVisibility",
    ()=>hasFullDocumentFieldVisibility,
    "mergeDocumentFieldsIntoSelect",
    ()=>mergeDocumentFieldsIntoSelect,
    "resolveDocumentEntityName",
    ()=>resolveDocumentEntityName
]);
/**
 * Dokument-Registry (#422) — EINE Quelle für die Dokumenterstellung je Objekt.
 *
 * Löst die Doppel-Pflege des Order-Musters ab (OrderDocumentMenu.DOCUMENT_TYPES
 * ↔ TEMPLATE_MAP der PDF-Route): Die generische EntityDocumentMenu-Komponente
 * liest hier, welche Dokumente ein Objekt hat (Label/Empfänger/EN-Variante),
 * und die PDF-Route liest hier, welches Puppeteer-Template zu einem
 * `?type=`-Parameter gehört. Neue Objekte kommen rein per Config-Eintrag —
 * ohne Komponenten- oder Routen-Änderung (Rollout MP/SS/Invoice in MR-2/3).
 *
 * Muster wie mailTemplateRegistry (#418) / createFromRegistry (#415):
 * Keys = SF-API-Namen, ENTITY_ALIASES übersetzen EntityType-Enum-Werte und
 * Legacy-Aliase.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/config/entityFields/index.ts [app-client] (ecmascript) <locals>");
;
const ROLES_WITH_DOCUMENTS = new Set([
    'admin',
    'staff'
]);
const DOCUMENT_OBJECT_GRANTS = {
    accounting: [
        'Abrechnung__c'
    ]
};
/** EntityType-Enum-Werte + Legacy-Aliase → SF-API-Namen (wie mailTemplateRegistry). */ const ENTITY_ALIASES = {
    Order: 'Order',
    Auftrag__c: 'Order',
    MaterialProposal: 'Material_Proposal__c',
    SampleSending: 'Sample_Sending__c',
    Invoice: 'Abrechnung__c',
    Product: 'Product2',
    MaterialAnalysis: 'Materialanalyse__c'
};
const DOCUMENT_REGISTRY = {
    // #463: Vertrags-Dokumente — Positionen sind die AUFTRÄGE des Vertrags.
    Contract: {
        apiName: 'Contract',
        pdfBasePath: '/contract',
        nameFields: [
            'ContractNumber'
        ],
        // #463: Contract hat (anders als Order) keinen Eintrag in
        // DEFAULT_OBJECT_VISIBILITY_CONFIG — hasRecordAccess fällt auf `true`
        // zurück, jede Rolle mit Contract-view erreicht damit JEDEN Vertrag.
        // Bis die Record-Sichtbarkeit für Contract steht, bleiben die
        // Vertrags-Dokumente intern.
        internalOnly: true,
        types: [
            {
                // Soll-Vorlage: „SammelBestellung Vorlage.docx" (#464-Anhang, AB 2026-07-17).
                // Empfänger = Lieferant des HAUPTAUFTRAGS (letzter Auftrag; künftig
                // Hauptauftrag_Dokumente__c-Lookup) — Opportunity ist Legacy.
                type: 'sammelbestellung',
                labelDe: 'Sammelbestellung',
                labelEn: 'Collective Purchase Order',
                templateDe: 'sammelbestellung',
                templateEn: 'collective-purchase-order',
                recipient: 'Lieferant',
                // Contract trägt keine Empfänger-Mailfelder — Mail ohne Vorbelegung
                recipientFields: [],
                hasEnglish: true,
                supportsMail: true,
                contentFields: [
                    'Agreed_quantity__c',
                    'ContractNumber',
                    // Lebende Quellen (Opportunity ist Legacy): Produkt-Lookup + Formel am Vertrag
                    'Produkt__r.Trade_Name__c',
                    'Steuer_Einkauf_aus_Auftrag__c',
                    'Total_Brutto_Einkauf__c',
                    'Total_Netto_Einkauf__c',
                    'Total_Steuer_Einkauf__c'
                ]
            },
            {
                // Soll-Vorlage: „Collective Order Confirmation Template.docx" (#464-Anhang).
                type: 'sammel-auftragsbestaetigung',
                labelDe: 'Sammel-Auftragsbestätigung',
                labelEn: 'Collective Order Confirmation',
                templateDe: 'sammel-auftragsbestaetigung',
                templateEn: 'collective-order-confirmation',
                recipient: 'Kunde',
                recipientFields: [],
                hasEnglish: true,
                supportsMail: true,
                contentFields: [
                    'Account.Name',
                    'Account.BillingStreet',
                    'Account.BillingPostalCode',
                    'Account.BillingCity',
                    'Account.BillingCountry',
                    'Agreed_quantity__c',
                    'Bestellnummer_Kunde_Sammelbest__c',
                    'ContractNumber',
                    // Lebende Quellen (Opportunity ist Legacy)
                    'Produkt__r.Trade_Name__c',
                    'Account.Standardbedingung_Verkauf_an_Account__c',
                    'Steuer_Verkauf_aus_Auftrag__c',
                    'Total_Brutto_Verkauf__c',
                    'Total_Netto_Verkauf__c',
                    'Total_Steuer_Verkauf__c'
                ]
            },
            {
                // Vertrags-Variante des Transportauftrags (AB 2026-07-17): Kopf/
                // Konditionen/Standorte aus dem Hauptauftrag, Ladung = alle Aufträge.
                type: 'sammel-transportauftrag',
                labelDe: 'Sammel-Transportauftrag',
                labelEn: 'Collective Transport Order',
                templateDe: 'sammel-transportauftrag',
                templateEn: 'collective-transport-order',
                recipient: 'Transporteur',
                recipientFields: [],
                hasEnglish: true,
                supportsMail: true,
                contentFields: [
                    'Agreed_quantity__c',
                    'ContractNumber',
                    'Produkt__r.Trade_Name__c'
                ]
            }
        ]
    },
    Order: {
        apiName: 'Order',
        pdfBasePath: '/order',
        nameFields: [
            'OrderNumber'
        ],
        types: [
            {
                type: 'order-summary',
                labelDe: 'Auftragsübersicht',
                labelEn: 'Order Summary',
                templateDe: 'order-summary',
                templateEn: 'order-summary',
                recipient: 'Intern',
                recipientFields: [],
                hasEnglish: false,
                supportsMail: false
            },
            {
                type: 'auftragsbestaetigung',
                labelDe: 'Auftragsbestätigung',
                labelEn: 'Order Confirmation',
                templateDe: 'auftragsbestaetigung',
                templateEn: 'order-confirmation',
                recipient: 'Kunde',
                // #196: Kunde (Vorlagen-AB-Adresse + Lieferort-Ansprechpartner)
                recipientFields: [
                    'Vorlage_AB_ps_EMail__c',
                    'Lieferort_AP_EMail__c'
                ],
                hasEnglish: true,
                supportsMail: true,
                rowsSource: {
                    relationshipName: 'OrderItems',
                    label: 'Auftragsprodukte',
                    rowLabelPath: 'Produktcode__c',
                    requiredFields: [
                        {
                            path: 'Product2.Trade_Name__c',
                            label: 'Trade Name'
                        }
                    ]
                },
                contentFields: [
                    // Cue-Audit 2026-07-17: vom Template gelesene Primaerfelder
                    'Referenznummer_plastship__c',
                    'Verpackung__c',
                    'AVV_Nummer__c',
                    'Account.Name',
                    // Lebende Kunden-Relation (statt Flow-Textfelder Vorlage_AB_*)
                    'Account.BillingStreet',
                    'Account.BillingPostalCode',
                    'Account.BillingCity',
                    'Account.BillingCountry',
                    'Account.Ust_ID__c',
                    // Zahlungsbedingungen = Verkaufsbedingung des Kunden-Accounts (AB)
                    'Account.Standardbedingung_Verkauf_an_Account__c',
                    // Kontakt = Firmenautorisierung (User, editierbar) — s. #459
                    'CompanyAuthorizedBy.Name',
                    'CompanyAuthorizedBy.Email',
                    'CompanyAuthorizedBy.Phone',
                    'CustomerAuthorizedBy.FirstName',
                    'CustomerAuthorizedBy.LastName',
                    'Incoterm__c',
                    'Datum_ETA_NEU__c',
                    'OrderNumber',
                    'PoNumber',
                    // Lieferort = zusammengesetzte Adresse des Lieferstandorts (AB)
                    // #1647: Standort-Name als eigene Zeile über der Adresse
                    'Produktion_Delivery__r.Name',
                    'Produktion_Delivery__r.Account__r.Name',
                    'Produktion_Delivery__r.Land__c',
                    'Produktion_Delivery__r.Ort__c',
                    'Produktion_Delivery__r.PLZ__c',
                    'Produktion_Delivery__r.Strasse__c',
                    'Produktion_Delivery__r.Strasse_Nummer__c',
                    'Rechnungsbetrag_Steuer__c',
                    'Rechnungsbetrag_brutto__c',
                    'TotalAmount',
                    'Ust__c',
                    'Vorlage_AB_Mindestladegew__c',
                    // Formelfeld: DE-Dropdown Verpackung automatisch als EN-Text
                    'Verpackung_bersetzung_EN_del__c',
                    'Vorlage_Bestellung_Transportart__c',
                    'Vorlage_Labels_Produktbeschreibung__c',
                    'Zusatz_Rechnung__c'
                ]
            },
            {
                type: 'bestellung',
                labelDe: 'Bestellung',
                labelEn: 'Purchase Order',
                templateDe: 'bestellung',
                templateEn: 'purchase-order',
                recipient: 'Lieferant',
                // #837: lebende Quelle (Kontakt des Lieferanten) zuerst; das
                // Flow-Altfeld bleibt Fallback für Bestands-Aufträge
                recipientFields: [
                    'Zust_ndiger_Kontakt_Lieferant__r.Email',
                    'Vorlage_Bestellung_ps_EMail__c',
                    'Ladestelle_AP_EMail__c'
                ],
                hasEnglish: true,
                supportsMail: true,
                rowsSource: {
                    relationshipName: 'OrderItems',
                    label: 'Auftragsprodukte',
                    rowLabelPath: 'Produktcode__c',
                    requiredFields: [
                        {
                            path: 'Product2.Trade_Name__c',
                            label: 'Trade Name'
                        }
                    ]
                },
                contentFields: [
                    // Cue-Audit 2026-07-17: vom Template gelesene Primaerfelder
                    'Referenznummer_plastship__c',
                    'CompanyAuthorizedBy.Name',
                    'CompanyAuthorizedBy.Email',
                    'CompanyAuthorizedBy.Phone',
                    'AVV_Nummer__c',
                    // #837: nur das gepflegte Datum cuen — Text-/Alt-Feld sind stille
                    // Druck-Fallbacks für Bestands-Aufträge
                    'Datum_Abholung_NEU__c',
                    'Einkaufsbetrag_brutto__c',
                    'Einkaufsbetrag_steuer__c',
                    'Einkaufspreis_Gesamt__c',
                    'Incoterm_Einkauf__c',
                    'Lieferant__r.BillingCity',
                    'Lieferant__r.BillingCountry',
                    'Lieferant__r.BillingPostalCode',
                    'Lieferant__r.BillingStreet',
                    'Lieferant__r.Name',
                    'Lieferant__r.Standardbedingung_Einkauf_von_Account__c',
                    'Lieferant__r.Ust_ID__c',
                    'OrderNumber',
                    // #1647: Standort-Name als eigene Zeile über der Adresse
                    'Produktionsstandort__r.Name',
                    'Produktionsstandort__r.Account__r.Name',
                    'Produktionsstandort__r.Land__c',
                    'Produktionsstandort__r.Ort__c',
                    'Produktionsstandort__r.PLZ__c',
                    'Produktionsstandort__r.Strasse_Nummer__c',
                    'Produktionsstandort__r.Strasse__c',
                    'Quantity__c',
                    'Ust_Einkauf__c',
                    // #1652: das Mindestladegewicht der Bestellung (eigenes Auftragsfeld,
                    // in der App pflegbar) — vorher druckte die Vorlage Quantity__c
                    'Vorlage_Bestellung_Mindestladegewicht__c',
                    'Verpackung__c',
                    // EN-Template (purchase-order) bevorzugt den englischen
                    // Verpackungstext — ohne SELECT blieb er still ungenutzt.
                    'Verpackung_EN_del__c',
                    'Verpackung_bersetzung_EN_del__c',
                    'Vorlage_Bestellung_Transportart__c',
                    'Vorlage_Labels_Produktbeschreibung__c',
                    'Zusatz_Bestellung__c',
                    'Zust_ndiger_Kontakt_Lieferant__r.FirstName',
                    'Zust_ndiger_Kontakt_Lieferant__r.LastName'
                ]
            },
            {
                type: 'lieferschein',
                labelDe: 'Lieferschein',
                labelEn: 'Delivery Note',
                templateDe: 'lieferschein',
                templateEn: 'delivery-note',
                recipient: 'Kunde',
                recipientFields: [
                    'Lieferort_AP_EMail__c',
                    'Transporteur_AP_EMail__c'
                ],
                hasEnglish: true,
                supportsMail: true,
                rowsSource: {
                    relationshipName: 'OrderItems',
                    label: 'Auftragsprodukte',
                    rowLabelPath: 'Produktcode__c',
                    requiredFields: [
                        {
                            path: 'Product2.Trade_Name__c',
                            label: 'Trade Name'
                        }
                    ]
                },
                contentFields: [
                    // Cue-Audit 2026-07-17: vom Template gelesene Primaerfelder
                    'Referenznummer_plastship__c',
                    'Verpackung__c',
                    'CompanyAuthorizedBy.Name',
                    'CompanyAuthorizedBy.Email',
                    'CompanyAuthorizedBy.Phone',
                    'AVV_Nummer__c',
                    'Account.Name',
                    // Lebende Kunden-Relation (statt Flow-Textfelder Vorlage_AB_*)
                    'Account.BillingStreet',
                    'Account.BillingPostalCode',
                    'Account.BillingCity',
                    'Account.BillingCountry',
                    'Account.Ust_ID__c',
                    'Ansprechpartner_Transport_Lieferstelle__r.Email',
                    'Ansprechpartner_Transport_Lieferstelle__r.Name',
                    'Ansprechpartner_Transport_Lieferstelle__r.Phone',
                    'Anweisungen_Transporteur_Entladestelle__c',
                    'CustomerAuthorizedBy.FirstName',
                    'CustomerAuthorizedBy.LastName',
                    'Datum_ETA_NEU__c',
                    'OrderNumber',
                    'PoNumber',
                    // #1647: Standort-Name als eigene Zeile über der Adresse
                    'Produktion_Delivery__r.Name',
                    'Produktion_Delivery__r.Account__r.Name',
                    'Produktion_Delivery__r.Delivery_Times__c',
                    'Produktion_Delivery__r.Land__c',
                    'Produktion_Delivery__r.Ort__c',
                    'Produktion_Delivery__r.PLZ__c',
                    'Produktion_Delivery__r.Strasse_Nummer__c',
                    'Produktion_Delivery__r.Strasse__c',
                    'Transporteur_Ansprechpartner_NEU__r.Email',
                    'Transporteur_Ansprechpartner_NEU__r.FirstName',
                    'Transporteur_Ansprechpartner_NEU__r.LastName',
                    'Transporteur_Ansprechpartner_NEU__r.Phone',
                    'Transporteur_NEU__r.BillingCity',
                    'Transporteur_NEU__r.BillingCountry',
                    'Transporteur_NEU__r.BillingPostalCode',
                    'Transporteur_NEU__r.BillingStreet',
                    'Transporteur_NEU__r.Name',
                    'Truck_Nr_Lieferort_Text__c',
                    'Vorlage_AB_Mindestladegew__c',
                    // Formelfeld: DE-Dropdown Verpackung automatisch als EN-Text
                    'Verpackung_bersetzung_EN_del__c',
                    'Vorlage_Bestellung_Transportart__c',
                    'Vorlage_Labels_Produktbeschreibung__c'
                ]
            },
            {
                type: 'ladeschein',
                labelDe: 'Ladeschein',
                labelEn: 'Loading Note',
                templateDe: 'ladeschein',
                templateEn: 'loading-note',
                recipient: 'Lieferant',
                recipientFields: [
                    'Ladestelle_AP_EMail__c',
                    'Transporteur_AP_EMail__c'
                ],
                hasEnglish: true,
                supportsMail: true,
                rowsSource: {
                    relationshipName: 'OrderItems',
                    label: 'Auftragsprodukte',
                    rowLabelPath: 'Produktcode__c',
                    requiredFields: [
                        {
                            path: 'Product2.Trade_Name__c',
                            label: 'Trade Name'
                        }
                    ]
                },
                contentFields: [
                    // Cue-Audit 2026-07-17: vom Template gelesene Primaerfelder
                    'Referenznummer_plastship__c',
                    'Verpackung__c',
                    'CompanyAuthorizedBy.Name',
                    'CompanyAuthorizedBy.Email',
                    'CompanyAuthorizedBy.Phone',
                    'Lieferant__r.BillingStreet',
                    'Lieferant__r.BillingPostalCode',
                    'Lieferant__r.BillingCity',
                    'Lieferant__r.BillingCountry',
                    'Vorlage_Labels_Produktbeschreibung__c',
                    'AVV_Nummer__c',
                    'Ansprechpartner_Transport_Ladestelle__r.Email',
                    'Ansprechpartner_Transport_Ladestelle__r.Name',
                    'Ansprechpartner_Transport_Ladestelle__r.Phone',
                    'Anweisungen_Transporteur_Ladestelle__c',
                    'Datum_Abholung_NEU__c',
                    'Lieferant__r.Name',
                    'OrderNumber',
                    // #1647: Standort-Name als eigene Zeile über der Adresse
                    'Produktionsstandort__r.Name',
                    'Produktionsstandort__r.Account__r.Name',
                    'Produktionsstandort__r.Delivery_Times__c',
                    'Produktionsstandort__r.Land__c',
                    'Produktionsstandort__r.Ort__c',
                    'Produktionsstandort__r.PLZ__c',
                    'Produktionsstandort__r.Strasse_Nummer__c',
                    'Produktionsstandort__r.Strasse__c',
                    'Transporteur_Ansprechpartner_NEU__r.Email',
                    'Transporteur_Ansprechpartner_NEU__r.FirstName',
                    'Transporteur_Ansprechpartner_NEU__r.LastName',
                    'Transporteur_Ansprechpartner_NEU__r.Phone',
                    'Transporteur_NEU__r.BillingCity',
                    'Transporteur_NEU__r.BillingCountry',
                    'Transporteur_NEU__r.BillingPostalCode',
                    'Transporteur_NEU__r.BillingStreet',
                    'Transporteur_NEU__r.Name',
                    'Truck_Nr_Ladestelle_Text__c',
                    'Vorlage_AB_Mindestladegew__c',
                    // #837: Flow-Textfelder (Adresse/Produktbeschr/USt) durch lebende
                    // Quellen ersetzt (Lieferant__r.Billing* + Produktbeschreibung
                    // stehen bereits oben); Transportart ist seit b15295a7 selbst
                    // editierbar und bleibt.
                    'Lieferant__r.Ust_ID__c',
                    'Vorlage_Bestellung_Transportart__c',
                    'Verpackung_bersetzung_EN_del__c',
                    'Zust_ndiger_Kontakt_Lieferant__r.FirstName',
                    'Zust_ndiger_Kontakt_Lieferant__r.LastName'
                ]
            },
            {
                type: 'transportauftrag',
                labelDe: 'Transportauftrag',
                labelEn: 'Transport Order',
                templateDe: 'transportauftrag',
                templateEn: 'transport-order',
                recipient: 'Transporteur',
                recipientFields: [
                    'Transporteur_AP_EMail__c'
                ],
                hasEnglish: true,
                supportsMail: true,
                rowsSource: {
                    relationshipName: 'OrderItems',
                    label: 'Auftragsprodukte',
                    rowLabelPath: 'Produktcode__c',
                    requiredFields: [
                        {
                            path: 'Product2.Trade_Name__c',
                            label: 'Trade Name'
                        }
                    ]
                },
                contentFields: [
                    // Cue-Audit 2026-07-17: vom Template gelesene Primaerfelder
                    'Referenznummer_plastship__c',
                    'CompanyAuthorizedBy.Name',
                    'CompanyAuthorizedBy.Email',
                    'CompanyAuthorizedBy.Phone',
                    'AVV_Nummer__c',
                    'Ansprechpartner_Transport_Ladestelle__r.Email',
                    'Ansprechpartner_Transport_Ladestelle__r.Name',
                    'Ansprechpartner_Transport_Ladestelle__r.Phone',
                    'Ansprechpartner_Transport_Lieferstelle__r.Email',
                    'Ansprechpartner_Transport_Lieferstelle__r.Name',
                    'Ansprechpartner_Transport_Lieferstelle__r.Phone',
                    'Anweisungen_Transporteur_Entladestelle__c',
                    'Anweisungen_Transporteur_Ladestelle__c',
                    'Datum_Abholung_NEU__c',
                    'Datum_ETA_NEU__c',
                    'OrderNumber',
                    // #1647: Standort-Name als eigene Zeile über der Adresse
                    'Produktion_Delivery__r.Name',
                    'Produktion_Delivery__r.Account__r.Name',
                    'Produktion_Delivery__r.Delivery_Times__c',
                    'Produktion_Delivery__r.Land__c',
                    'Produktion_Delivery__r.Ort__c',
                    'Produktion_Delivery__r.PLZ__c',
                    'Produktion_Delivery__r.Strasse_Nummer__c',
                    'Produktion_Delivery__r.Strasse__c',
                    // #1647: Standort-Name als eigene Zeile über der Adresse
                    'Produktionsstandort__r.Name',
                    'Produktionsstandort__r.Account__r.Name',
                    'Produktionsstandort__r.Delivery_Times__c',
                    'Produktionsstandort__r.Land__c',
                    'Produktionsstandort__r.Ort__c',
                    'Produktionsstandort__r.PLZ__c',
                    'Produktionsstandort__r.Strasse_Nummer__c',
                    'Produktionsstandort__r.Strasse__c',
                    'Transporteur_Ansprechpartner_NEU__r.FirstName',
                    'Transporteur_Ansprechpartner_NEU__r.LastName',
                    'Transporteur_NEU__r.BillingCity',
                    'Transporteur_NEU__r.BillingCountry',
                    'Transporteur_NEU__r.BillingPostalCode',
                    'Transporteur_NEU__r.BillingStreet',
                    'Transporteur_NEU__r.Name',
                    'Transporteur_NEU__r.Standardbedingung_Einkauf_von_Account__c',
                    'Transporteur_NEU__r.Ust_ID__c',
                    // Editierbarer Transporteur-Preis; Transportpreis__c = Formel-Fallback
                    'Transporteur_Preis_NEU__c',
                    'Transportpreis__c',
                    'Verpackung__c',
                    // EN-Template (transport-order) bevorzugt den englischen
                    // Verpackungstext — ohne SELECT blieb er still ungenutzt.
                    'Verpackung_EN_del__c',
                    'Verpackung_bersetzung_EN_del__c',
                    'Vorlage_AB_Mindestladegew__c',
                    'Vorlage_Bestellung_Transportart__c',
                    'Vorlage_Labels_Produktbeschreibung__c'
                ]
            },
            {
                type: 'transportlieferschein',
                labelDe: 'Transportlieferschein',
                labelEn: 'Transport Delivery Note',
                templateDe: 'transportlieferschein',
                // Fix gegenüber der alten TEMPLATE_MAP: die Datei heißt
                // transport-delivery-note-en.js — der alte Eintrag zeigte ins Leere,
                // der EN-Transportlieferschein war dadurch defekt.
                templateEn: 'transport-delivery-note-en',
                recipient: 'Transporteur',
                recipientFields: [
                    'Transporteur_AP_EMail__c'
                ],
                hasEnglish: true,
                supportsMail: true,
                rowsSource: {
                    relationshipName: 'OrderItems',
                    label: 'Auftragsprodukte',
                    rowLabelPath: 'Produktcode__c',
                    requiredFields: [
                        {
                            path: 'Product2.Trade_Name__c',
                            label: 'Trade Name'
                        }
                    ]
                },
                // Carrier-Kopie des Lieferscheins — gleiche Soll-Vorlage (#196)
                contentFields: [
                    // Cue-Audit 2026-07-17: vom Template gelesene Primaerfelder
                    'Referenznummer_plastship__c',
                    'Verpackung__c',
                    'CompanyAuthorizedBy.Name',
                    'CompanyAuthorizedBy.Email',
                    'CompanyAuthorizedBy.Phone',
                    'AVV_Nummer__c',
                    'Account.Name',
                    'Ansprechpartner_Transport_Lieferstelle__r.Email',
                    'Ansprechpartner_Transport_Lieferstelle__r.Name',
                    'Ansprechpartner_Transport_Lieferstelle__r.Phone',
                    'Anweisungen_Transporteur_Entladestelle__c',
                    'CustomerAuthorizedBy.FirstName',
                    'CustomerAuthorizedBy.LastName',
                    'Datum_ETA_NEU__c',
                    'OrderNumber',
                    'PoNumber',
                    // #1647: Standort-Name als eigene Zeile über der Adresse
                    'Produktion_Delivery__r.Name',
                    'Produktion_Delivery__r.Account__r.Name',
                    'Produktion_Delivery__r.Delivery_Times__c',
                    'Produktion_Delivery__r.Land__c',
                    'Produktion_Delivery__r.Ort__c',
                    'Produktion_Delivery__r.PLZ__c',
                    'Produktion_Delivery__r.Strasse_Nummer__c',
                    'Produktion_Delivery__r.Strasse__c',
                    'Transporteur_Ansprechpartner_NEU__r.Email',
                    'Transporteur_Ansprechpartner_NEU__r.FirstName',
                    'Transporteur_Ansprechpartner_NEU__r.LastName',
                    'Transporteur_Ansprechpartner_NEU__r.Phone',
                    'Transporteur_NEU__r.BillingCity',
                    'Transporteur_NEU__r.BillingCountry',
                    'Transporteur_NEU__r.BillingPostalCode',
                    'Transporteur_NEU__r.BillingStreet',
                    'Transporteur_NEU__r.Name',
                    'Truck_Nr_Lieferort_Text__c',
                    // EN-Template (transport-delivery-note-en) fällt auf den englischen
                    // Verpackungstext zurück — ohne SELECT blieb er still ungenutzt.
                    'Verpackung_EN_del__c',
                    'Verpackung_bersetzung_EN_del__c',
                    'Vorlage_AB_Mindestladegew__c',
                    // Formelfeld: DE-Dropdown Verpackung automatisch als EN-Text
                    'Verpackung_bersetzung_EN_del__c',
                    'Vorlage_Bestellung_Transportart__c',
                    'Vorlage_Labels_Produktbeschreibung__c'
                ]
            }
        ]
    },
    // #422 MR-3: Musterlieferscheine aus den Original-Vorlagen (docx, #196-Ordner)
    // — zwei Varianten je nachdem, ob der Versand aus Material Proposals
    // (Musterversand-Liste) oder aus Materialanalysen bestückt wird.
    Sample_Sending__c: {
        apiName: 'Sample_Sending__c',
        pdfBasePath: '/sample-sending',
        nameFields: [
            'Name'
        ],
        types: [
            {
                type: 'muster-lieferschein-mp',
                labelDe: 'Musterlieferschein (Material Proposal)',
                labelEn: 'Sample Delivery Note (Material Proposal)',
                templateDe: 'muster-lieferschein-mp',
                templateEn: 'sample-delivery-note-mp',
                recipient: 'Kunde',
                recipientFields: [
                    'Kontakt_Anlieferung__r.Email'
                ],
                hasEnglish: true,
                supportsMail: true,
                rowsSource: {
                    relationshipName: 'Material_Proposals1__r',
                    label: 'Material Proposals (Musterversand)',
                    // Detail-Subquery laedt Product__r.ProductCode (nicht Product_Code__c)
                    rowLabelPath: 'Product__r.ProductCode',
                    requiredFields: [
                        {
                            path: 'Product__r.Trade_Name__c',
                            label: 'Trade Name'
                        }
                    ],
                    // #1801: ohne MP-Zeilen druckt das Template das Produkt des Musterversands
                    fallbackField: 'Produkt__c'
                },
                contentFields: [
                    'Auftrags_ID_Lieferschein__c',
                    'Carrier__r.Name',
                    'Delivery_Produktion__r.Account__r.Name',
                    'Delivery_Produktion__r.Strasse__c',
                    'Delivery_Produktion__r.Strasse_Nummer__c',
                    'Delivery_Produktion__r.PLZ__c',
                    'Delivery_Produktion__r.Ort__c',
                    'Delivery_Produktion__r.Land__c',
                    'Kontakt_Anlieferung__r.Salutation',
                    'Kontakt_Anlieferung__r.FirstName',
                    'Kontakt_Anlieferung__r.LastName'
                ]
            },
            {
                type: 'muster-lieferschein-analyse',
                labelDe: 'Musterlieferschein (Analyse)',
                labelEn: 'Sample Delivery Note (Analysis)',
                templateDe: 'muster-lieferschein-analyse',
                templateEn: 'sample-delivery-note-analysis',
                recipient: 'Dienstleister',
                recipientFields: [
                    'Kontakt_Anlieferung__r.Email'
                ],
                hasEnglish: true,
                supportsMail: true,
                rowsSource: {
                    relationshipName: 'Materialanalysen__r',
                    label: 'Materialanalysen',
                    rowLabelPath: 'Produkt_ID__c',
                    requiredFields: [
                        {
                            path: 'Material_ID__r.Trade_Name__c',
                            label: 'Trade Name'
                        }
                    ],
                    // #1801: ohne Analyse-Zeilen druckt das Template das Produkt des Musterversands
                    fallbackField: 'Produkt__c'
                },
                contentFields: [
                    'Auftrags_ID_Lieferschein__c',
                    'Carrier__r.Name',
                    'Delivery_Produktion__r.Account__r.Name',
                    'Delivery_Produktion__r.Strasse__c',
                    'Delivery_Produktion__r.Strasse_Nummer__c',
                    'Delivery_Produktion__r.PLZ__c',
                    'Delivery_Produktion__r.Ort__c',
                    'Delivery_Produktion__r.Land__c',
                    'Kontakt_Anlieferung__r.Salutation',
                    'Kontakt_Anlieferung__r.FirstName',
                    'Kontakt_Anlieferung__r.LastName'
                ]
            }
        ]
    },
    // #301: Produkt-Dokumente — TDS (bestehendes product-Template) + das
    // 150×100-Drucklabel aus der Original-Vorlage (Vorlage_150x100_Label…docx).
    Product2: {
        apiName: 'Product2',
        pdfBasePath: '/product',
        nameFields: [
            'ProductCode',
            'Name'
        ],
        types: [
            {
                type: 'tds',
                labelDe: 'Produktdatenblatt (TDS)',
                labelEn: 'Technical Data Sheet',
                templateDe: 'product',
                templateEn: 'product',
                recipient: 'Kunde',
                recipientFields: [],
                hasEnglish: true,
                supportsMail: true,
                // #478: TDS nach PDF-Referenz — Kennwerte inkl. Prüfnormen,
                // Rezyklat-Details, Labortest-Status
                contentFields: [
                    'Trade_Name__c',
                    'Main_polymer__c',
                    'Material_type__c',
                    'Material_colour__c',
                    'Rezyklatdefinition__c',
                    'Verarbeitungsverfahren__c',
                    'Standard_Packaging__c',
                    'Amount_monthly__c',
                    'Abfallfraktion_Herkunft__c',
                    'Foreign_Polymers_Text__c',
                    'Contaminants_Text__c',
                    'Filler_Material_Text__c',
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
                    'Zugfestigkeit__c',
                    'Bruchdehnung__c',
                    'Zug_E_Modul__c',
                    'Kerbschlagz_higkeit_Charpy__c',
                    'Kerbschlagzaehigkeit_Min__c',
                    'Kerbschlagz_higkeit_Izod_Min__c',
                    'Bruchspannung_Min__c',
                    'Zugspannung_an_der_Streckgrenze_Min__c',
                    'Zugdehnung_Min__c',
                    'Shore_A_Min__c',
                    'Shore_D_Min__c',
                    'Sch_ttdichte_Min__c',
                    'Oberfl_chenfeuchte_Min__c',
                    'Vicat_Erweichungstemperatur_Min__c',
                    'Vicat_B_Erweichungstemperatur_Min__c',
                    'W_rmeformbest_ndigkeitstemp_HDT_Min__c',
                    'MVR_Min__c',
                    'Viskosit_tszahl_Min__c',
                    'Datum_letzter_Labortest__c',
                    'Abweichende_Laborwerte_gefunden__c',
                    'Mustermenge_kg__c',
                    'Recycled_Content__c',
                    'REACH_Confirmation__c',
                    'FDA_Approval__c',
                    'SVHC_Approval__c',
                    'UN_Approval__c',
                    'Cosmetics_Approval_Rinse_Off__c',
                    'Cosmetics_Approval_Leave_On__c',
                    'Document_plastship_MSDS_attached__c',
                    'Document_Original_MSDS_attached__c'
                ]
            },
            {
                type: 'drucklabel',
                labelDe: 'Drucklabel (150×100)',
                labelEn: 'Print Label (150×100)',
                templateDe: 'product-label',
                recipient: 'Intern',
                recipientFields: [],
                hasEnglish: false,
                supportsMail: false,
                contentFields: [
                    'ProductCode',
                    'Trade_Name__c',
                    'Main_polymer__c',
                    'Material_type__c',
                    'Material_colour__c',
                    'Rezyklatdefinition__c',
                    'Abfallfraktion_Herkunft__c'
                ]
            }
        ]
    },
    // #456: Ausgangsrechnung (ZUGFeRD) an der Abrechnung — Belegnummer bleibt
    // bewusst außerhalb der contentFields (wird bei der ersten PDF-Erstellung
    // automatisch vergeben und stünde sonst dauerhaft als "fehlend" im Cue).
    Abrechnung__c: {
        apiName: 'Abrechnung__c',
        pdfBasePath: '/invoice',
        nameFields: [
            'Belegnummer__c',
            'Name'
        ],
        types: [
            {
                type: 'rechnung',
                labelDe: 'Rechnung (ZUGFeRD)',
                labelEn: 'Invoice (ZUGFeRD)',
                templateDe: 'invoice',
                // #456: EIN Template, Sprache über ?lang= (Muster wie TDS/product)
                templateEn: 'invoice',
                recipient: 'Kunde',
                recipientFields: [
                    'Account__r.E_Mailadresse_Rechnungen__c',
                    'Account__r.Account_E_Mail__c'
                ],
                hasEnglish: true,
                supportsMail: true,
                contentFields: [
                    'Account__r.Name',
                    'Account__r.BillingStreet',
                    'Account__r.BillingCity',
                    'Account__r.BillingPostalCode',
                    'Account__r.BillingCountry',
                    // #456: Pflichtangaben + kundenbezogene Texte der Rechnung
                    'Account__r.Ust_ID__c',
                    'Account__r.Kundennummer__c',
                    // #518: entscheidet ueber Profil (XRechnung vs. Factur-X BASIC) und
                    // fuellt BT-10. Ohne dieses Traversal ist das Feld zur Laufzeit
                    // undefined und jede B2G-Rechnung fiele still auf B2B zurueck.
                    'Account__r.Leitweg_ID__c',
                    // #518: elektronische Adresse des Kaeufers (PEPPOL-EN16931-R010).
                    'Account__r.E_Mailadresse_Rechnungen__c',
                    'Account__r.Standardbedingung_Verkauf_an_Account__c',
                    'Account__r.Besonderheiten_Rechnungsstellung__c',
                    'Auftrag__r.OrderNumber',
                    'Auftrag__r.PoNumber',
                    'Auftrag__r.ETA__c',
                    'Auftrag__r.Lieferdatum_Text__c',
                    'Auftrag__r.Zusatz_Rechnung__c',
                    'Belegdatum__c',
                    'Rechnungsbetrag__c',
                    'Rechnungsbetrag_brutto__c',
                    'Ust__c',
                    'Zahlungsart__c',
                    'Zahlungsziel__c'
                ]
            },
            {
                // #1601: Zahlungserinnerung zu einer fälligen Ausgangsrechnung — voller
                // Bruttobetrag, neutraler Text, Originalrechnung hängt die Mail-Route
                // als zweite Datei an (AB 08.10.2026). Kein Mahnwesen.
                type: 'zahlungserinnerung',
                labelDe: 'Zahlungserinnerung',
                labelEn: 'Payment reminder',
                templateDe: 'zahlungserinnerung',
                templateEn: 'zahlungserinnerung',
                recipient: 'Kunde',
                recipientFields: [
                    'Account__r.E_Mailadresse_Rechnungen__c',
                    'Account__r.Account_E_Mail__c'
                ],
                hasEnglish: true,
                supportsMail: true,
                contentFields: [
                    'Account__r.Name',
                    'Account__r.BillingStreet',
                    'Account__r.BillingCity',
                    'Account__r.BillingPostalCode',
                    'Account__r.BillingCountry',
                    'Account__r.Kundennummer__c',
                    'Account__r.E_Mailadresse_Rechnungen__c',
                    'Auftrag__r.OrderNumber',
                    'Belegnummer__c',
                    'Belegdatum__c',
                    'Rechnungsbetrag__c',
                    'Rechnungsbetrag_brutto__c',
                    'Ust__c',
                    'Zahlungsziel__c'
                ]
            }
        ]
    },
    // #479: Laborreport an der Materialanalyse — der Dokumenttyp hängt bewusst
    // an der MA (nicht am Produkt): "aus der verknüpften Analyse wählen" ist
    // damit implizit, man generiert dort, wo man die Analyse geöffnet hat.
    // Die Messwert-Tabelle (AuditProperties) lädt die PDF-Route per Extra-Query.
    Materialanalyse__c: {
        apiName: 'Materialanalyse__c',
        pdfBasePath: '/material-analysis',
        nameFields: [
            'Name'
        ],
        types: [
            {
                type: 'laborreport',
                labelDe: 'Laborreport',
                labelEn: 'Laboratory Report',
                templateDe: 'laborreport',
                recipient: 'Kunde',
                recipientFields: [],
                hasEnglish: false,
                supportsMail: true,
                contentFields: [
                    'Analysetyp__c',
                    'Analysezeitpunkt__c',
                    'Batchnummer__c',
                    'Dienstleister__r.Name',
                    'Monitored_Material__r.Name',
                    'Status__c'
                ]
            }
        ]
    }
};
function getDocumentConfig(entityTypeOrApiName) {
    const apiName = ENTITY_ALIASES[entityTypeOrApiName] ?? entityTypeOrApiName;
    return DOCUMENT_REGISTRY[apiName];
}
function canRoleGenerateDocuments(entityTypeOrApiName, role) {
    if (!ROLES_WITH_DOCUMENTS.has(role)) {
        // #1888: Einzelfreigabe je Objekt (volle Feldsichtbarkeit vorausgesetzt)
        const apiName = getDocumentConfig(entityTypeOrApiName)?.apiName;
        const grants = Object.prototype.hasOwnProperty.call(DOCUMENT_OBJECT_GRANTS, role) ? DOCUMENT_OBJECT_GRANTS[role] : undefined;
        return !!apiName && !!grants && grants.includes(apiName);
    }
    // internalOnly bleibt bestehen, obwohl es die Allowlist derzeit nicht weiter
    // einschränkt: sobald eine Rolle die Feldsichtbarkeit bekommt und in
    // ROLES_WITH_DOCUMENTS aufgenommen wird, muss Contract trotzdem draußen
    // bleiben — dort fehlt die Record-Sichtbarkeit (#496), nicht die Felder.
    if (getDocumentConfig(entityTypeOrApiName)?.internalOnly) {
        return role === 'admin' || role === 'staff';
    }
    return true;
}
function hasFullDocumentFieldVisibility(entityTypeOrApiName, role) {
    if (role === 'admin' || role === 'staff') return true;
    return canRoleGenerateDocuments(entityTypeOrApiName, role);
}
function getDocumentApiNameForPdfPath(pdfApiPath) {
    const slug = pdfApiPath.split('?')[0].split('/')[1];
    if (!slug) return undefined;
    return Object.values(DOCUMENT_REGISTRY).find((config)=>config.pdfBasePath === `/${slug}`)?.apiName;
}
function getDocumentType(entityTypeOrApiName, type) {
    return getDocumentConfig(entityTypeOrApiName)?.types.find((t)=>t.type === type);
}
function getDocumentRecipientFields(entityTypeOrApiName) {
    const config = getDocumentConfig(entityTypeOrApiName);
    if (!config) return [];
    return [
        ...new Set(config.types.flatMap((t)=>t.recipientFields))
    ];
}
function getDocumentContentFields(entityTypeOrApiName) {
    const config = getDocumentConfig(entityTypeOrApiName);
    if (!config) return [];
    return [
        ...new Set(config.types.flatMap((t)=>t.contentFields ?? []))
    ];
}
function getMissingContentFields(doc, record) {
    if (!doc.contentFields || doc.contentFields.length === 0) return [];
    if (!record) return doc.contentFields;
    return doc.contentFields.filter((path)=>{
        const value = path.split('.').reduce((node, seg)=>{
            if (node && typeof node === 'object') return node[seg];
            return undefined;
        }, record);
        return value === undefined || value === null || value === '';
    });
}
function getDocumentRowIssues(doc, record, /**
   * #1637: Meldung je Zeile in der Sprache des Nutzers — das Dokument-Menü
   * übersetzt Text und Feld-Labels; ohne Angabe bleibt der deutsche Text.
   */ formatRowMessage = ({ position, ident, fields })=>`Position ${position}${ident}: ${fields.join(', ')} fehlt`) {
    const src = doc.rowsSource;
    if (!src) return null;
    const resolve = (node, path)=>path.split('.').reduce((acc, seg)=>{
            if (acc && typeof acc === 'object') return acc[seg];
            return undefined;
        }, node);
    const raw = record ? record[src.relationshipName] : undefined;
    const rows = Array.isArray(raw) ? raw : raw?.records ?? [];
    if (rows.length === 0) {
        // #1801: Ersatz-Position am Parent gesetzt → das Dokument hat eine Zeile
        const fallback = src.fallbackField && record ? record[src.fallbackField] : undefined;
        const hasFallback = fallback !== undefined && fallback !== null && fallback !== '';
        return {
            emptyList: !hasFallback,
            rowMessages: []
        };
    }
    const rowMessages = [];
    rows.forEach((row, i)=>{
        const missing = src.requiredFields.filter((f)=>{
            const value = resolve(row, f.path);
            return value === undefined || value === null || value === '';
        }).map((f)=>f.label);
        if (missing.length > 0) {
            const rowLabel = resolve(row, src.rowLabelPath);
            const ident = typeof rowLabel === 'string' && rowLabel ? ` (${rowLabel})` : '';
            rowMessages.push(formatRowMessage({
                position: i + 1,
                ident,
                fields: missing
            }));
        }
    });
    return {
        emptyList: false,
        rowMessages
    };
}
function mergeDocumentFieldsIntoSelect(baseFields, entityTypeOrApiName) {
    const registryFields = [
        ...getDocumentRecipientFields(entityTypeOrApiName),
        ...getDocumentContentFields(entityTypeOrApiName)
    ];
    if (registryFields.length === 0) return baseFields;
    const seen = new Set(baseFields.split(',').map((f)=>f.trim().toLowerCase()).filter(Boolean));
    const additions = registryFields.filter((field)=>{
        const key = field.toLowerCase();
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
    });
    return additions.length > 0 ? `${baseFields}, ${additions.join(', ')}` : baseFields;
}
function entityLabelFor(sfApiName) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["entityFieldConfigs"][sfApiName]?.entityLabel ?? sfApiName;
}
/** FieldConfig eines Feldes im Config finden (Sections-Duplikate: erster Treffer mit Label). */ function fieldConfigFor(sfApiName, fieldApiName) {
    for (const section of __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["entityFieldConfigs"][sfApiName]?.sections ?? []){
        for (const field of section.fields ?? []){
            if (field.apiName === fieldApiName) return field;
        }
    }
    return undefined;
}
function humanize(apiName) {
    return apiName.replace(/__c$|__r$/i, '').replace(/_/g, ' ').trim();
}
/** Relationship-Segment ('X__r' oder Standard wie 'Account') → { label, targetApiName }. */ function resolveRelationSegment(sfApiName, segment) {
    const candidates = segment.endsWith('__r') ? [
        segment.replace(/__r$/, '__c')
    ] : [
        `${segment}Id`,
        `${segment}__c`,
        segment
    ];
    for (const fieldName of candidates){
        const field = fieldConfigFor(sfApiName, fieldName);
        if (field) {
            return {
                label: field.label ?? humanize(segment),
                target: field.lookupObjectType
            };
        }
    }
    return {
        label: humanize(segment)
    };
}
function groupMissingContentFields(entityTypeOrApiName, missingPaths, /**
   * #1626: Objekt- und Feld-Labels in der Sprache des Nutzers (Client übergibt
   * `useEntityText().text`); ohne Angabe bleiben die Config-Texte.
   */ translate = (text)=>text) {
    const apiName = ENTITY_ALIASES[entityTypeOrApiName] ?? entityTypeOrApiName;
    const objectLabelOf = (sfApiName)=>translate(entityLabelFor(sfApiName));
    const groups = new Map();
    for (const path of missingPaths){
        const segments = path.split('.');
        const fieldSegment = segments.pop();
        let objectLabel = objectLabelOf(apiName);
        let currentApiName = apiName;
        if (segments.length > 0) {
            const hopLabels = [];
            for (const segment of segments){
                const hop = currentApiName ? resolveRelationSegment(currentApiName, segment) : {
                    label: humanize(segment)
                };
                hopLabels.push(translate(hop.label));
                currentApiName = hop.target;
            }
            objectLabel = hopLabels.join(' → ');
            // Zielobjekt nur ergänzen, wenn der Lookup-Label es nicht schon nennt
            // (z. B. 'Ladestelle (Produktionsstandort)')
            if (currentApiName) {
                const targetLabel = objectLabelOf(currentApiName);
                if (!objectLabel.toLowerCase().includes(targetLabel.toLowerCase())) {
                    objectLabel += ` (${targetLabel})`;
                }
            }
        }
        const fieldLabel = translate((currentApiName ? fieldConfigFor(currentApiName, fieldSegment)?.label : undefined) ?? humanize(fieldSegment));
        const list = groups.get(objectLabel) ?? [];
        list.push({
            label: fieldLabel,
            path
        });
        groups.set(objectLabel, list);
    }
    // Datensatz-eigene Felder zuerst, dann verknüpfte Objekte alphabetisch
    const own = objectLabelOf(apiName);
    return [
        ...groups.entries()
    ].sort(([a], [b])=>a === own ? -1 : b === own ? 1 : a.localeCompare(b)).map(([objectLabel, items])=>({
            objectLabel,
            fields: items.map((i)=>i.label),
            items
        }));
}
function resolveDocumentEntityName(config, record, entityId) {
    for (const field of config.nameFields){
        const value = record?.[field];
        if (typeof value === 'string' && value.length > 0) return value;
    }
    return null;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/documents/fieldOriginIndicators.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getCustomerSharedFields",
    ()=>getCustomerSharedFields,
    "getDocumentRelevantFields",
    ()=>getDocumentRelevantFields
]);
/**
 * Feld-Herkunfts-Markierung (#465): Aus welchen Quellen speist sich ein Feld
 * einer Detail-View?
 *
 * - BLAU (dokumentrelevant): Feld steckt in den `contentFields` der
 *   Dokument-Registry des Objekts (#422 — eine Quelle, keine Doppel-Pflege).
 * - GRÜN (kundengeteilt): Feld ist in der Entity-Feld-Config für die
 *   Kundenrolle `user` sichtbar (Sektions- + Feld-Ebene).
 *
 * Beide Funktionen sind pure Ableitungen aus statischen Configs — Ergebnisse
 * können im Konsumenten per useMemo(entityType) gecacht werden.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$documents$2f$documentRegistry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/documents/documentRegistry.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/config/entityFields/index.ts [app-client] (ecmascript) <locals>");
;
;
/**
 * Wurzel eines contentFields-Pfads auf den Config-Feldnamen der Detail-View
 * mappen: `Produkt__r.Trade_Name__c` → `Produkt__c`, `Account.Name` →
 * `AccountId`, `Agreed_quantity__c` → sich selbst.
 */ function rootToConfigField(path) {
    const root = path.split('.')[0];
    if (root.endsWith('__r')) return root.replace(/__r$/, '__c');
    if (path.includes('.')) {
        // Standard-Relationship (Account, CustomerSigned, Owner …) → Lookup-Feld
        return root.endsWith('Id') ? root : `${root}Id`;
    }
    return root;
}
function getDocumentRelevantFields(entityType) {
    const fields = new Set();
    for (const path of (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$documents$2f$documentRegistry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocumentContentFields"])(entityType)){
        fields.add(rootToConfigField(path));
    }
    return fields;
}
function getCustomerSharedFields(entityType) {
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getEntityFieldConfig"])(entityType);
    const fields = new Set();
    if (!config) return fields;
    for (const section of config.sections){
        if (section.visibleForRoles && !section.visibleForRoles.includes('user')) continue;
        for (const field of section.fields){
            if (field.visibleForRoles && !field.visibleForRoles.includes('user')) continue;
            fields.add(field.apiName);
        }
    }
    return fields;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/files/filePreview.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * #1149: Welche Dateien die App selbst anzeigen darf (Vorschau) und mit
 * welchem Content-Type die Download-Routen sie dann ausliefern.
 *
 * Eine Quelle für Server (Inline-Modus der Download-Routen) und Client
 * (Viewer, Vorschaubilder). Bewusst eine kurze Allowlist:
 * - PDF — rendert der Viewer per pdf.js auf ein Canvas (kein Frame, also
 *   keine Freigabe in frame-ancestors/X-Frame-Options nötig).
 * - Rasterbilder — `<img>`.
 * - **Kein SVG**: Inline auf derselben Origin geöffnet, führt der Browser
 *   darin enthaltenes Skript aus. Bleibt `attachment`.
 * Alles andere (Office, Text, HTML …) bleibt `attachment`, auch wenn der
 * Aufrufer `disposition=inline` verlangt.
 */ __turbopack_context__.s([
    "INLINE_DISPOSITION_PARAM",
    ()=>INLINE_DISPOSITION_PARAM,
    "INLINE_DISPOSITION_VALUE",
    ()=>INLINE_DISPOSITION_VALUE,
    "extensionForContentType",
    ()=>extensionForContentType,
    "extensionOfFileName",
    ()=>extensionOfFileName,
    "inlineContentTypeForExtension",
    ()=>inlineContentTypeForExtension,
    "isInlineDispositionRequested",
    ()=>isInlineDispositionRequested,
    "previewKindForExtension",
    ()=>previewKindForExtension,
    "withInlineDisposition",
    ()=>withInlineDisposition
]);
/** Endung (klein, ohne Punkt) → Content-Type, mit dem die Route inline ausliefert */ const INLINE_CONTENT_TYPES = {
    pdf: {
        kind: 'pdf',
        contentType: 'application/pdf'
    },
    png: {
        kind: 'image',
        contentType: 'image/png'
    },
    jpg: {
        kind: 'image',
        contentType: 'image/jpeg'
    },
    jpeg: {
        kind: 'image',
        contentType: 'image/jpeg'
    },
    gif: {
        kind: 'image',
        contentType: 'image/gif'
    },
    webp: {
        kind: 'image',
        contentType: 'image/webp'
    }
};
/** Content-Type (Mail-Anhänge kennen nur ihn) → Endung der Allowlist */ const CONTENT_TYPE_EXTENSIONS = {
    'application/pdf': 'pdf',
    'image/png': 'png',
    'image/jpeg': 'jpg',
    'image/jpg': 'jpg',
    'image/gif': 'gif',
    'image/webp': 'webp'
};
const INLINE_DISPOSITION_PARAM = 'disposition';
const INLINE_DISPOSITION_VALUE = 'inline';
function normalizeExtension(extension) {
    return (extension ?? '').trim().replace(/^\.+/, '').toLowerCase();
}
function extensionOfFileName(fileName) {
    const name = (fileName ?? '').trim();
    const dot = name.lastIndexOf('.');
    return dot > 0 ? normalizeExtension(name.slice(dot + 1)) : '';
}
function previewKindForExtension(extension) {
    return INLINE_CONTENT_TYPES[normalizeExtension(extension)]?.kind ?? null;
}
function inlineContentTypeForExtension(extension) {
    return INLINE_CONTENT_TYPES[normalizeExtension(extension)]?.contentType ?? null;
}
function extensionForContentType(contentType) {
    const base = (contentType ?? '').split(';')[0].trim().toLowerCase();
    return CONTENT_TYPE_EXTENSIONS[base] ?? '';
}
function isInlineDispositionRequested(searchParams) {
    return searchParams?.get(INLINE_DISPOSITION_PARAM) === INLINE_DISPOSITION_VALUE;
}
function withInlineDisposition(url) {
    const queryStart = url.indexOf('?');
    const path = queryStart < 0 ? url : url.slice(0, queryStart);
    const query = queryStart < 0 ? '' : url.slice(queryStart + 1);
    const slashedPath = path.endsWith('/') ? path : `${path}/`;
    const inline = `${INLINE_DISPOSITION_PARAM}=${INLINE_DISPOSITION_VALUE}`;
    return `${slashedPath}?${query ? `${query}&` : ''}${inline}`;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/geo/haversine.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "flugStrecke",
    ()=>flugStrecke,
    "haversineKm",
    ()=>haversineKm,
    "pfadKm",
    ()=>pfadKm,
    "rundeKm",
    ()=>rundeKm
]);
const ERDRADIUS_KM = 6371;
function haversineKm(a, b) {
    const rad = (g)=>g * Math.PI / 180;
    const dLat = rad(b.lat - a.lat);
    const dLng = rad(b.lng - a.lng);
    const h = Math.sin(dLat / 2) ** 2 + Math.cos(rad(a.lat)) * Math.cos(rad(b.lat)) * Math.sin(dLng / 2) ** 2;
    return ERDRADIUS_KM * 2 * Math.atan2(Math.sqrt(h), Math.sqrt(1 - h));
}
const rundeKm = (km)=>Math.round(km * 10) / 10;
function pfadKm(punkte) {
    let summe = 0;
    for(let i = 1; i < punkte.length; i++)summe += haversineKm(punkte[i - 1], punkte[i]);
    return summe;
}
function flugStrecke(punkte) {
    const km = pfadKm(punkte);
    return {
        distanceKm: rundeKm(km),
        durationMin: Math.round(km / 800 * 60 + 30)
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/geo/types.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * #2135/#2136: Geodienste ohne Google — gemeinsame Typen für Server (lib/geo,
 * /api/geo/*) und Browser (app/helper/geo).
 */ __turbopack_context__.s([
    "GEO_LIMITS",
    ()=>GEO_LIMITS,
    "GEO_ROUTE_MODES",
    ()=>GEO_ROUTE_MODES,
    "isGeoRouteMode",
    ()=>isGeoRouteMode
]);
const GEO_ROUTE_MODES = [
    'car',
    'train',
    'bus',
    'walk',
    'plane'
];
function isGeoRouteMode(value) {
    return typeof value === 'string' && GEO_ROUTE_MODES.includes(value);
}
const GEO_LIMITS = {
    queryMin: 2,
    queryMax: 200,
    resultsMax: 8,
    routePointsMax: 5
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/indicators/indicatorRegistry.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ACCOUNT_DORMANT_DAYS",
    ()=>ACCOUNT_DORMANT_DAYS,
    "CASE_KPI_MINUTES",
    ()=>CASE_KPI_MINUTES,
    "CASE_NEW_UNTOUCHED_ORIGINS",
    ()=>CASE_NEW_UNTOUCHED_ORIGINS,
    "CASE_STALE_DAYS",
    ()=>CASE_STALE_DAYS,
    "CASE_WAITING_CUSTOMER_DAYS",
    ()=>CASE_WAITING_CUSTOMER_DAYS,
    "FAKTURIERUNG_STICHTAG",
    ()=>FAKTURIERUNG_STICHTAG,
    "FAKTURIERUNG_STICHTAG_STANDARD",
    ()=>FAKTURIERUNG_STICHTAG_STANDARD,
    "INDICATOR_REQUIRED_FIELDS",
    ()=>INDICATOR_REQUIRED_FIELDS,
    "LIST_INHERITANCE",
    ()=>LIST_INHERITANCE,
    "MATERIAL_PROPOSAL_PREP_DAYS",
    ()=>MATERIAL_PROPOSAL_PREP_DAYS,
    "MATERIAL_PROPOSAL_STALE_DAYS",
    ()=>MATERIAL_PROPOSAL_STALE_DAYS,
    "MM_REPORT_MAX_AGE_DAYS",
    ()=>MM_REPORT_MAX_AGE_DAYS,
    "NEW_UNDECIDED_DAYS",
    ()=>NEW_UNDECIDED_DAYS,
    "ONBOARDING_PENDING_DAYS",
    ()=>ONBOARDING_PENDING_DAYS,
    "ORDER_STEP_MAX_DAYS",
    ()=>ORDER_STEP_MAX_DAYS,
    "REQUIREMENT_STALE_DAYS",
    ()=>REQUIREMENT_STALE_DAYS,
    "RUECKSTELLUNG_EMPFOHLEN_DAYS",
    ()=>RUECKSTELLUNG_EMPFOHLEN_DAYS,
    "SAMPLE_SENDING_FEEDBACK_DAYS",
    ()=>SAMPLE_SENDING_FEEDBACK_DAYS,
    "SAMPLE_SENDING_ORDERED_DAYS",
    ()=>SAMPLE_SENDING_ORDERED_DAYS,
    "VALIDITY_DUE_SOON_DAYS",
    ()=>VALIDITY_DUE_SOON_DAYS,
    "getHighestLevel",
    ()=>getHighestLevel,
    "getIndicators",
    ()=>getIndicators,
    "getInheritedIndicators",
    ()=>getInheritedIndicators,
    "getRegistryRules",
    ()=>getRegistryRules,
    "hasIndicatorRules",
    ()=>hasIndicatorRules
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * Aufmerksamkeits-Indikator-Registry (#419/#421).
 *
 * Je Objekt benannte Regeln als REINE Prädikate auf bereits geladenen
 * Record-Daten (Rollups, Statusfelder, Zeitstempel) — bewusst keine
 * Nachlade-Calls in Listen. Maskierte/fehlende Felder lassen eine Regel
 * still nicht feuern (kein False-Positive durch RBAC-Masking).
 *
 * Anzeige: EIN Renderer (Molecule/AttentionBadge) auf Tabellenzeile,
 * Kanban-Karte und Drawer-Kopf — identische Optik überall (#421).
 * Die Levels sind zugleich der Rot/Gold-Hook für die Farbsprache (#454).
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$orders$2f$orderStatusConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/orders/orderStatusConfig.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$helper$2f$entityHelpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/helper/entityHelpers.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$utils$2f$soqlSanitizer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/utils/soqlSanitizer.ts [app-client] (ecmascript)");
;
;
;
/** SOQL-Liste aus Werten: ('a','b'). Hochkommata im Wert werden escaped. */ const inList = (values)=>`(${values.map((v)=>`'${v.replace(/'/g, "\\'")}'`).join(',')})`;
const CASE_STALE_DAYS = 7;
const CASE_KPI_MINUTES = 30;
const CASE_NEW_UNTOUCHED_ORIGINS = new Set([
    'Web',
    'Email',
    'Dispo',
    'Accounting'
]);
const CASE_WAITING_CUSTOMER_DAYS = 14;
const SAMPLE_SENDING_FEEDBACK_DAYS = 14;
const SAMPLE_SENDING_ORDERED_DAYS = 14;
const MATERIAL_PROPOSAL_STALE_DAYS = 14;
const MATERIAL_PROPOSAL_PREP_DAYS = 14;
const VALIDITY_DUE_SOON_DAYS = 30;
const MM_REPORT_MAX_AGE_DAYS = 365;
const REQUIREMENT_STALE_DAYS = 30;
const NEW_UNDECIDED_DAYS = 30;
const ONBOARDING_PENDING_DAYS = 14;
const ACCOUNT_DORMANT_DAYS = 180;
const RUECKSTELLUNG_EMPFOHLEN_DAYS = 14;
const ORDER_STEP_MAX_DAYS = {
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$orders$2f$orderStatusConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrderStatus"].BestellungErhalten]: 3,
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$orders$2f$orderStatusConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrderStatus"].TransportBeauftragen]: 2,
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$orders$2f$orderStatusConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrderStatus"].InformationenEinpflegen]: 7
};
// ── Helfer ───────────────────────────────────────────────────────────────────
const daysSince = (value)=>{
    if (typeof value !== 'string' || !value) return null;
    const ts = Date.parse(value);
    if (Number.isNaN(ts)) return null;
    return (Date.now() - ts) / (1000 * 60 * 60 * 24);
};
const isPastDate = (value)=>{
    const days = daysSince(value);
    return days !== null && days > 0;
};
const str = (value)=>typeof value === 'string' ? value : '';
// Order: "erledigt/nicht mehr im Ablauf" = Abgeschlossen + Ausnahme-Status
const ORDER_DONE_STATUSES = new Set([
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$orders$2f$orderStatusConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrderStatus"].Abgeschlossen,
    ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$orders$2f$orderStatusConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ORDER_STATUS_AUSNAHMEN"]
]);
// Abrechnungs-Check greift erst ab Anlieferung (vorher ist "keine Abrechnung"
// der Normalzustand) — Vergleich über die Ablauf-Position (#419 Teilscope 1).
const ORDER_INVOICING_INDEX = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$orders$2f$orderStatusConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ORDER_STATUS_ABLAUF"].indexOf(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$orders$2f$orderStatusConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrderStatus"].AnlieferungErfolgt);
const CASE_FINAL_STATUSES = new Set([
    'Closed',
    'Merged',
    'No Action',
    'Rejected'
]);
const MP_FINAL_STATUSES = new Set([
    'Approved',
    'Rejected'
]);
// MP ohne Vertriebsarbeit mehr: Endzustaende + Vorlagen/Dubletten
const MP_CLOSED_STATUSES = new Set([
    'Approved',
    'Rejected',
    'Duplicate',
    'Standard Template'
]);
// Abrechnung: bezahlt/gebucht/storniert — kein offenes Zahlungsziel mehr
const INVOICE_SETTLED_STATUSES = new Set([
    'Bezahlt',
    'Gebucht',
    'Storno'
]);
const PROJECT_INACTIVE_STATUSES = new Set([
    'Inaktiv',
    'Abgeschlossen'
]);
// #847: Bausteine der SOQL-Fragmente (dieselben Mengen wie in den Prädikaten)
const ORDER_BEFORE_INVOICING = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$orders$2f$orderStatusConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ORDER_STATUS_ABLAUF"].slice(0, ORDER_INVOICING_INDEX);
const ORDER_FROM_INVOICING = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$orders$2f$orderStatusConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ORDER_STATUS_ABLAUF"].slice(ORDER_INVOICING_INDEX);
_c = ORDER_FROM_INVOICING;
const ORDER_BEFORE_TRANSPORT = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$orders$2f$orderStatusConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ORDER_STATUS_ABLAUF"].slice(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$orders$2f$orderStatusConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ORDER_STATUS_ABLAUF"].indexOf(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$orders$2f$orderStatusConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrderStatus"].TransportBeauftragt));
const CASE_OPEN_SOQL = `IsClosed = false AND Status NOT IN ${inList([
    ...CASE_FINAL_STATUSES
])}`;
const FAKTURIERUNG_STICHTAG_STANDARD = '2026-10-01';
const FAKTURIERUNG_STICHTAG = /^\d{4}-\d{2}-\d{2}$/.test(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_FAKTURIERUNG_STICHTAG ?? '') ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_FAKTURIERUNG_STICHTAG : FAKTURIERUNG_STICHTAG_STANDARD;
const num = (value)=>typeof value === 'number' ? value : 0;
const abStichtag = (record)=>str(record.EffectiveDate).slice(0, 10) >= FAKTURIERUNG_STICHTAG;
const INVOICE_STORNO_KATEGORIEN = [
    'Stornorechnung',
    'Stornierte Rechnung'
];
const MP_NOT_FINAL_SOQL = `Status__c NOT IN ${inList([
    ...MP_FINAL_STATUSES
])}`;
// Sales-Intent-Rangfolge (Product2): "Proposal Pool und höher" ist vermarktungsaktiv
const SALES_INTENT_ORDER = [
    'Deactivated',
    'Salesforce only',
    'Platform invisible',
    'Platform visible',
    'Proposal Pool',
    'Top Recyclates',
    'Active Push',
    'Distribution'
];
const SALES_INTENT_ACTIVE_MIN = SALES_INTENT_ORDER.indexOf('Proposal Pool');
const minutesSince = (value)=>{
    const days = daysSince(value);
    return days === null ? null : days * 24 * 60;
};
/** Ablauf-Prüfung für Gültigkeitsdaten (Audits/Zertifikate). */ const expiryState = (value)=>{
    const days = daysSince(value);
    if (days === null) return null;
    if (days > 0) return 'expired';
    if (days > -VALIDITY_DUE_SOON_DAYS) return 'dueSoon';
    return null;
};
// ── Regeln je Objekt (Key = SF-API-Name) ─────────────────────────────────────
const REGISTRY = {
    Case: [
        {
            // Regelsatz v2 (AB): Wiedervorlage ist DER Handlungs-Trigger
            rule: 'case-followup-overdue',
            soql: `${CASE_OPEN_SOQL} AND Wiedervorlage__c < TODAY`,
            level: 'dringend',
            labelKey: 'indicators.rules.caseFollowUpOverdue',
            defaultLabel: 'Wiedervorlage überfällig',
            check: (record)=>{
                if (record.IsClosed === true) return false;
                if (CASE_FINAL_STATUSES.has(str(record.Status))) return false;
                return isPastDate(record.Wiedervorlage__c);
            }
        },
        {
            // Regelsatz v2: Kunde antwortet nicht -> erinnern
            rule: 'case-waiting-customer',
            soql: `Status = 'Waiting for Customer' AND LastModifiedDate < LAST_N_DAYS:${CASE_WAITING_CUSTOMER_DAYS}`,
            level: 'warnung',
            labelKey: 'indicators.rules.caseWaitingCustomer',
            defaultLabel: `Kunde antwortet nicht (> ${CASE_WAITING_CUSTOMER_DAYS} Tage) — erinnern`,
            check: (record)=>{
                if (str(record.Status) !== 'Waiting for Customer') return false;
                const days = daysSince(record.LastModifiedDate);
                return days !== null && days > CASE_WAITING_CUSTOMER_DAYS;
            }
        },
        {
            // PO-Katalog: KPI-SLA-01 — Erstreaktion binnen 30 Minuten
            rule: 'case-kpi-overdue',
            soql: (ctx)=>`${CASE_OPEN_SOQL} AND First_Touched__c = null AND CreatedDate < ${new Date(ctx.now.getTime() - CASE_KPI_MINUTES * 60 * 1000).toISOString()}`,
            level: 'dringend',
            labelKey: 'indicators.rules.caseKpiOverdue',
            defaultLabel: `Über dem KPI-Ziel (${CASE_KPI_MINUTES} Min. ohne Erstreaktion)`,
            check: (record)=>{
                if (record.IsClosed === true) return false;
                if (CASE_FINAL_STATUSES.has(str(record.Status))) return false;
                if (record.First_Touched__c) return false;
                const minutes = minutesSince(record.CreatedDate);
                return minutes !== null && minutes > CASE_KPI_MINUTES;
            }
        },
        {
            // #1722/#1733: neue Cases aus Kontaktformular (Web) und Postfach (Email)
            // sofort sichtbar — nicht erst nach CASE_KPI_MINUTES (Moritz 07.10.:
            // „aufm Dashboard taucht ein neues Case direkt auf"). Nur bis
            // CASE_KPI_MINUTES; danach übernimmt case-kpi-overdue (keine Doppelung).
            rule: 'case-new-untouched',
            level: 'dringend',
            labelKey: 'indicators.rules.caseNewUntouched',
            defaultLabel: 'Neuer Case ohne Erstreaktion',
            check: (record)=>{
                if (!CASE_NEW_UNTOUCHED_ORIGINS.has(str(record.Origin))) return false;
                if (str(record.Status) !== 'New') return false;
                if (record.First_Touched__c) return false;
                const minutes = minutesSince(record.CreatedDate);
                return minutes !== null && minutes <= CASE_KPI_MINUTES;
            }
        },
        {
            rule: 'case-stale',
            soql: `${CASE_OPEN_SOQL} AND LastModifiedDate < LAST_N_DAYS:${CASE_STALE_DAYS}`,
            level: 'warnung',
            labelKey: 'indicators.rules.caseStale',
            defaultLabel: `Seit über ${CASE_STALE_DAYS} Tagen ohne Update`,
            check: (record)=>{
                if (record.IsClosed === true) return false;
                if (CASE_FINAL_STATUSES.has(str(record.Status))) return false;
                const days = daysSince(record.LastModifiedDate);
                return days !== null && days > CASE_STALE_DAYS;
            }
        },
        {
            rule: 'case-no-contact',
            soql: `${CASE_OPEN_SOQL} AND ContactId = null`,
            level: 'info',
            labelKey: 'indicators.rules.caseNoContact',
            defaultLabel: 'Kein Ansprechpartner hinterlegt',
            check: (record)=>{
                if (record.IsClosed === true) return false;
                if (CASE_FINAL_STATUSES.has(str(record.Status))) return false;
                // Nur feuern, wenn das Feld wirklich geladen und leer ist —
                // `undefined` kann RBAC-Maskierung sein.
                return record.ContactId === null || record.ContactId === '';
            }
        },
        // ── #1816: Buckets der Funktionspostfächer (Origin je Routing-Adresse) ──
        {
            rule: 'case-origin-dispo',
            soql: `Origin = 'Dispo'`,
            labelKey: 'indicators.rules.caseOriginDispo',
            defaultLabel: 'Dispo',
            check: (record)=>str(record.Origin) === 'Dispo'
        },
        {
            rule: 'case-origin-accounting',
            soql: `Origin = 'Accounting'`,
            labelKey: 'indicators.rules.caseOriginAccounting',
            defaultLabel: 'Accounting',
            check: (record)=>str(record.Origin) === 'Accounting'
        }
    ],
    Order: [
        {
            rule: 'order-eta-overdue',
            soql: `Status IN ${inList(ORDER_BEFORE_INVOICING)} AND Datum_ETA_NEU__c < TODAY`,
            level: 'dringend',
            labelKey: 'indicators.rules.orderEtaOverdue',
            defaultLabel: 'Liefertermin (ETA) überschritten',
            check: (record)=>{
                const status = str(record.Status);
                if (!status || ORDER_DONE_STATUSES.has(status)) return false;
                // Überfällig erst, wenn die Anlieferung noch aussteht
                const ablaufIndex = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$orders$2f$orderStatusConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ORDER_STATUS_ABLAUF"].indexOf(status);
                if (ablaufIndex >= ORDER_INVOICING_INDEX && ablaufIndex !== -1) return false;
                return isPastDate(record.Datum_ETA_NEU__c);
            }
        },
        {
            // #828 Modell v5 (ersetzt order-no-invoice): der Auftrag hat ab Anlieferung
            // noch Positionen ohne Ausgangsrechnung — Fakturierungsstatus aus Salesforce.
            rule: 'order-fakturierung-offen',
            soql: `Fakturierungsstatus__c = 'Offen' AND Status IN ${inList(ORDER_FROM_INVOICING)} AND EffectiveDate >= ${FAKTURIERUNG_STICHTAG}`,
            level: 'warnung',
            labelKey: 'indicators.rules.orderFakturierungOffen',
            defaultLabel: 'Fakturierung offen',
            check: (record)=>str(record.Fakturierungsstatus__c) === 'Offen' && ORDER_FROM_INVOICING.includes(str(record.Status)) && abStichtag(record)
        },
        {
            // #828 Regel E1: es ist noch Geld an Lieferant oder Transporteur offen,
            // die Eingangsrechnung fehlt also (vorhandene Formeln am Auftrag).
            rule: 'order-eingang-erwartet',
            soql: `(Offener_Betrag_an_Lieferant__c > 0 OR Offener_Betrag_an_Transporteur__c > 0) AND Status IN ${inList(ORDER_FROM_INVOICING)} AND EffectiveDate >= ${FAKTURIERUNG_STICHTAG}`,
            level: 'warnung',
            labelKey: 'indicators.rules.orderEingangErwartet',
            defaultLabel: 'Eingangsrechnung erwartet',
            check: (record)=>(num(record.Offener_Betrag_an_Lieferant__c) > 0 || num(record.Offener_Betrag_an_Transporteur__c) > 0) && ORDER_FROM_INVOICING.includes(str(record.Status)) && abStichtag(record)
        },
        {
            // #828: reine Ansicht (kein Badge) — Entscheid „keine Ausgangsrechnung nötig"
            rule: 'order-keine-rechnung-noetig',
            soql: `Keine_Ausgangsrechnung_n_tig__c = true`,
            labelKey: 'indicators.rules.orderKeineRechnungNoetig',
            defaultLabel: 'Keine Rechnung nötig',
            check: (record)=>record.Keine_Ausgangsrechnung_n_tig__c === true
        },
        {
            // Regelsatz v2: Abholtermin gerissen, Transport noch nicht beauftragt
            rule: 'order-pickup-overdue',
            soql: `Status IN ${inList(ORDER_BEFORE_TRANSPORT)} AND Datum_Abholung_NEU__c < TODAY`,
            level: 'dringend',
            labelKey: 'indicators.rules.orderPickupOverdue',
            defaultLabel: 'Abholtermin überschritten — Transport nicht beauftragt',
            check: (record)=>{
                const status = str(record.Status);
                if (!status || ORDER_DONE_STATUSES.has(status)) return false;
                const ablaufIndex = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$orders$2f$orderStatusConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ORDER_STATUS_ABLAUF"].indexOf(status);
                const transportIndex = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$orders$2f$orderStatusConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ORDER_STATUS_ABLAUF"].indexOf(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$orders$2f$orderStatusConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrderStatus"].TransportBeauftragt);
                if (ablaufIndex === -1 || ablaufIndex >= transportIndex) return false;
                return isPastDate(record.Datum_Abholung_NEU__c);
            }
        },
        {
            // Regelsatz v2: haengt im Prozessschritt (status-spezifische Schwellen)
            rule: 'order-step-stalled',
            soql: Object.entries(ORDER_STEP_MAX_DAYS).map(([status, days])=>`(Status = '${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$utils$2f$soqlSanitizer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sanitizeForSOQL"])(status)}' AND LastModifiedDate < LAST_N_DAYS:${days})`).join(' OR '),
            level: 'warnung',
            labelKey: 'indicators.rules.orderStepStalled',
            defaultLabel: 'Hängt im Prozessschritt',
            check: (record)=>{
                const maxDays = ORDER_STEP_MAX_DAYS[str(record.Status)];
                if (maxDays === undefined) return false;
                const days = daysSince(record.LastModifiedDate);
                return days !== null && days > maxDays;
            }
        },
        {
            // PO-Katalog: "fast immer aktiv" — alle Schritte vor Transport beauftragt
            rule: 'order-in-progress',
            soql: `Status IN ${inList(ORDER_BEFORE_TRANSPORT)}`,
            level: 'info',
            labelKey: 'indicators.rules.orderInProgress',
            defaultLabel: 'In Bearbeitung — nächster Prozessschritt offen',
            check: (record)=>{
                const ablaufIndex = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$orders$2f$orderStatusConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ORDER_STATUS_ABLAUF"].indexOf(str(record.Status));
                return ablaufIndex !== -1 && ablaufIndex < __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$orders$2f$orderStatusConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ORDER_STATUS_ABLAUF"].indexOf(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$orders$2f$orderStatusConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrderStatus"].TransportBeauftragt);
            }
        }
    ],
    Sample_Sending__c: [
        {
            // Regelsatz v2: Lieferant liefert nicht -> nachhaken
            rule: 'ss-ordered-no-delivery',
            level: 'warnung',
            labelKey: 'indicators.rules.sampleSendingOrderedNoDelivery',
            defaultLabel: `Bestellt, seit über ${SAMPLE_SENDING_ORDERED_DAYS} Tagen nicht versendet — nachhaken`,
            check: (record)=>{
                if (str(record.Status__c) !== 'Ordered') return false;
                const days = daysSince(record.Datum_Bestellung__c);
                return days !== null && days > SAMPLE_SENDING_ORDERED_DAYS;
            }
        },
        {
            // PO-Katalog: solange nicht ordered / sent / received
            rule: 'ss-not-sent',
            level: 'info',
            labelKey: 'indicators.rules.sampleSendingNotSent',
            defaultLabel: 'Versand noch nicht beauftragt',
            check: (record)=>[
                    'Draft',
                    'Ready'
                ].includes(str(record.Status__c))
        },
        {
            rule: 'ss-sent-no-feedback',
            level: 'warnung',
            labelKey: 'indicators.rules.sampleSendingNoFeedback',
            defaultLabel: `Versendet, seit über ${SAMPLE_SENDING_FEEDBACK_DAYS} Tagen kein Eingang bestätigt`,
            check: (record)=>{
                if (str(record.Status__c) !== 'Sent') return false;
                const days = daysSince(record.Datum_Versand__c);
                return days !== null && days > SAMPLE_SENDING_FEEDBACK_DAYS;
            }
        }
    ],
    Material_Proposal__c: [
        {
            // PO-Katalog: keine Aktion nach Offer Communicated / Sample Sent
            rule: 'mp-no-action',
            soql: `Status__c IN ${inList([
                'Offer communicated',
                'Sample sent to customer'
            ])} AND LastModifiedDate < LAST_N_DAYS:${MATERIAL_PROPOSAL_STALE_DAYS}`,
            level: 'warnung',
            labelKey: 'indicators.rules.materialProposalNoAction',
            defaultLabel: `Keine Aktion seit über ${MATERIAL_PROPOSAL_STALE_DAYS} Tagen nach Angebot/Muster`,
            check: (record)=>{
                const status = str(record.Status__c);
                if (![
                    'Offer communicated',
                    'Sample sent to customer'
                ].includes(status)) return false;
                const days = daysSince(record.LastModifiedDate);
                return days !== null && days > MATERIAL_PROPOSAL_STALE_DAYS;
            }
        },
        {
            rule: 'mp-no-product',
            soql: `${MP_NOT_FINAL_SOQL} AND Product__c = null`,
            level: 'warnung',
            labelKey: 'indicators.rules.materialProposalNoProduct',
            defaultLabel: 'Produkt fehlt',
            check: (record)=>{
                if (MP_FINAL_STATUSES.has(str(record.Status__c))) return false;
                // null = explizit leer; undefined kann Maskierung sein
                return record.Product__c === null || record.Product__c === '';
            }
        },
        {
            // SF-Formel MP_Follow_Up_Overdue__c rechnet die Faelligkeit selbst.
            // AB-Review 2026-08-29: bei Approved/Rejected kein Badge mehr, auch
            // wenn die Formel noch true liefert (Follow-up ist dann gegenstandslos).
            rule: 'mp-followup-overdue',
            soql: `MP_Follow_Up_Overdue__c = true AND ${MP_NOT_FINAL_SOQL}`,
            level: 'warnung',
            labelKey: 'indicators.rules.materialProposalFollowUpOverdue',
            defaultLabel: 'Follow-up fällig/überfällig',
            check: (record)=>record.MP_Follow_Up_Overdue__c === true && !MP_FINAL_STATUSES.has(str(record.Status__c))
        },
        {
            // Regelsatz v2: haengt in der Vorbereitung
            rule: 'mp-prep-stalled',
            soql: `Status__c IN ${inList([
                'Platform request',
                'In preparation'
            ])} AND LastModifiedDate < LAST_N_DAYS:${MATERIAL_PROPOSAL_PREP_DAYS}`,
            level: 'warnung',
            labelKey: 'indicators.rules.materialProposalPrepStalled',
            defaultLabel: `In Vorbereitung ohne Bewegung (> ${MATERIAL_PROPOSAL_PREP_DAYS} Tage)`,
            check: (record)=>{
                if (![
                    'Platform request',
                    'In preparation'
                ].includes(str(record.Status__c))) return false;
                const days = daysSince(record.LastModifiedDate);
                return days !== null && days > MATERIAL_PROPOSAL_PREP_DAYS;
            }
        },
        {
            // Sichtung (#1283): jedes offene MP braucht einen Termin
            rule: 'mp-no-followup',
            soql: `Status__c NOT IN ${inList([
                ...MP_CLOSED_STATUSES
            ])} AND Follow_Up_Date__c = null`,
            level: 'warnung',
            labelKey: 'indicators.rules.materialProposalNoFollowUp',
            defaultLabel: 'Kein Follow-up-Datum gesetzt',
            check: (record)=>!MP_CLOSED_STATUSES.has(str(record.Status__c)) && record.Follow_Up_Date__c === null
        }
    ],
    Contact: [
        {
            // Regelsatz v2 (fuellt die offene Kontakt-Zeile des PO-Katalogs)
            rule: 'contact-email-bounced',
            level: 'warnung',
            labelKey: 'indicators.rules.contactEmailBounced',
            defaultLabel: 'E-Mail unzustellbar — Kontaktdaten korrigieren',
            check: (record)=>record.IsEmailBounced === true
        }
    ],
    Onboarding__c: [
        {
            // Regelsatz v2: Onboarding nicht durchgefuehrt (Termin verstrichen
            // oder ohne Termin zu lange offen)
            rule: 'onboarding-pending',
            level: 'warnung',
            labelKey: 'indicators.rules.onboardingPending',
            defaultLabel: 'Onboarding nicht durchgeführt',
            check: (record)=>{
                if (record.Onboarding_durchgef_hrt__c !== false) return false;
                if (record.Zeitpunkt_des_Onboardings__c) {
                    return isPastDate(record.Zeitpunkt_des_Onboardings__c);
                }
                const days = daysSince(record.CreatedDate);
                return days !== null && days > ONBOARDING_PENDING_DAYS;
            }
        }
    ],
    Account: [
        {
            // PO-Katalog: Auftraege anhaengig, aber nicht vollqualifiziert (#712/#844)
            rule: 'account-unqualified',
            soql: `Vollqualifiziert__c = false AND (Count_Auftr_ge_Kunde__c > 0 OR Count_Auftr_ge_Lieferant__c > 0)`,
            level: 'warnung',
            labelKey: 'indicators.rules.accountUnqualified',
            defaultLabel: 'Aufträge vorhanden, Account nicht vollqualifiziert',
            check: (record)=>{
                if (record.Vollqualifiziert__c !== false) return false;
                const kunde = record.Count_Auftr_ge_Kunde__c;
                const lieferant = record.Count_Auftr_ge_Lieferant__c;
                return typeof kunde === 'number' && kunde > 0 || typeof lieferant === 'number' && lieferant > 0;
            }
        },
        {
            // Regelsatz v2: aktiver Kunde/Partner ohne jede Bewegung
            rule: 'account-dormant',
            soql: `(Verh_ltnis__c LIKE '2%' OR Verh_ltnis__c LIKE '3%') AND LastModifiedDate < LAST_N_DAYS:${ACCOUNT_DORMANT_DAYS}`,
            level: 'info',
            labelKey: 'indicators.rules.accountDormant',
            defaultLabel: `Kunde/Partner ohne Kontakt seit über ${ACCOUNT_DORMANT_DAYS} Tagen`,
            check: (record)=>{
                const verhaeltnis = str(record.Verh_ltnis__c);
                if (!verhaeltnis.startsWith('2') && !verhaeltnis.startsWith('3')) return false;
                const days = daysSince(record.LastModifiedDate);
                return days !== null && days > ACCOUNT_DORMANT_DAYS;
            }
        }
    ],
    Supplier_Audit__c: [
        {
            rule: 'audit-expired',
            level: 'dringend',
            labelKey: 'indicators.rules.auditExpired',
            defaultLabel: 'Audit nicht mehr gültig',
            check: (record)=>expiryState(record.Valid_to__c) === 'expired'
        },
        {
            rule: 'audit-due-soon',
            level: 'warnung',
            labelKey: 'indicators.rules.auditDueSoon',
            defaultLabel: `Audit wird fällig (Gültigkeit endet in < ${VALIDITY_DUE_SOON_DAYS} Tagen)`,
            check: (record)=>expiryState(record.Valid_to__c) === 'dueSoon'
        }
    ],
    Unternehmenszertifikat__c: [
        {
            rule: 'certificate-expired',
            level: 'dringend',
            labelKey: 'indicators.rules.certificateExpired',
            defaultLabel: 'Zertifikat abgelaufen',
            check: (record)=>expiryState(record.G_ltig_bis__c) === 'expired'
        },
        {
            rule: 'certificate-due-soon',
            level: 'warnung',
            labelKey: 'indicators.rules.certificateDueSoon',
            defaultLabel: `Zertifikat läuft ab (in < ${VALIDITY_DUE_SOON_DAYS} Tagen)`,
            check: (record)=>expiryState(record.G_ltig_bis__c) === 'dueSoon'
        }
    ],
    Projekt__c: [
        {
            rule: 'project-focus-overdue',
            level: 'dringend',
            labelKey: 'indicators.rules.projectFocusOverdue',
            defaultLabel: 'Fokusprojekt über der Deadline',
            check: (record)=>{
                if (PROJECT_INACTIVE_STATUSES.has(str(record.Status__c))) return false;
                return record.IST_Fokusprojekt__c === true && isPastDate(record.Projektdeadline__c);
            }
        },
        {
            rule: 'project-deadline-overdue',
            level: 'warnung',
            labelKey: 'indicators.rules.projectDeadlineOverdue',
            defaultLabel: 'Projektdeadline überschritten',
            check: (record)=>{
                if (PROJECT_INACTIVE_STATUSES.has(str(record.Status__c))) return false;
                return record.IST_Fokusprojekt__c !== true && isPastDate(record.Projektdeadline__c);
            }
        },
        {
            // Regelsatz v2: Fokus-Zeitraum abgelaufen -> verlaengern oder Fokus nehmen
            rule: 'project-focus-window-expired',
            level: 'warnung',
            labelKey: 'indicators.rules.projectFocusWindowExpired',
            defaultLabel: 'Fokus-Zeitraum abgelaufen — verlängern oder Fokus nehmen',
            check: (record)=>{
                if (PROJECT_INACTIVE_STATUSES.has(str(record.Status__c))) return false;
                return record.IST_Fokusprojekt__c === true && isPastDate(record.Fokusprojekt_bis__c);
            }
        },
        {
            rule: 'project-followup-due',
            level: 'info',
            labelKey: 'indicators.rules.projectFollowUpDue',
            defaultLabel: 'Projektwiedervorlage fällig',
            check: (record)=>{
                if (PROJECT_INACTIVE_STATUSES.has(str(record.Status__c))) return false;
                return isPastDate(record.Projektwiedervorlage__c);
            }
        }
    ],
    Bedarfe__c: [
        {
            // PO-Katalog (AB: nach erstem Rollout kalibrieren)
            rule: 'requirement-unworked',
            level: 'warnung',
            labelKey: 'indicators.rules.requirementUnworked',
            defaultLabel: 'Kein Monatsbedarf oder kein Material Proposal angebunden',
            check: (record)=>{
                const status = str(record.Bedarfsstatus__c);
                if (!status || status === 'On hold') return false;
                const monatsbedarf = record.Monatsbedarf_t__c;
                const mpCount = record.Count_Material_Proposal__c;
                const keinBedarf = monatsbedarf === null || monatsbedarf === 0;
                const keinMp = typeof mpCount === 'number' && mpCount === 0;
                return keinBedarf || keinMp;
            }
        },
        {
            // Regelsatz v2: aktiver Bedarf eingeschlafen
            rule: 'requirement-stale',
            level: 'warnung',
            labelKey: 'indicators.rules.requirementStale',
            defaultLabel: `Aktiver Bedarf ohne Bewegung (> ${REQUIREMENT_STALE_DAYS} Tage)`,
            check: (record)=>{
                if (![
                    'Bestätigter Bedarf',
                    'Aktuell auf der Suche'
                ].includes(str(record.Bedarfsstatus__c))) {
                    return false;
                }
                const days = daysSince(record.LastModifiedDate);
                return days !== null && days > REQUIREMENT_STALE_DAYS;
            }
        },
        {
            rule: 'requirement-no-assessment',
            level: 'info',
            labelKey: 'indicators.rules.requirementNoAssessment',
            defaultLabel: 'Keine Potenzial-/Risikobewertung',
            check: (record)=>{
                const status = str(record.Bedarfsstatus__c);
                if (!status || status === 'On hold') return false;
                return record.Risikobewertung__c === null;
            }
        },
        {
            // Sichtung (#1283): neuer Bedarf, an dem noch niemand entschieden hat
            rule: 'requirement-new-undecided',
            level: 'info',
            labelKey: 'indicators.rules.requirementNewUndecided',
            defaultLabel: 'Neu, ohne Entscheidung (kein MP, kein Projekt, nicht in Bearbeitung)',
            check: (record)=>{
                const days = daysSince(record.CreatedDate);
                if (days === null || days > NEW_UNDECIDED_DAYS) return false;
                if ([
                    'In Bearbeitung durch plastship',
                    'On hold'
                ].includes(str(record.Bedarfsstatus__c))) {
                    return false;
                }
                // Count_Material_Proposal__c ist ein einfaches Zahlenfeld (kein Rollup): bei
                // frisch angelegten Datensätzen null, nicht 0 — beides heißt „kein MP“.
                const mpCount = record.Count_Material_Proposal__c;
                return (mpCount === null || mpCount === 0) && record.Projekt__c === null;
            }
        }
    ],
    Monitored_Material__c: [
        {
            rule: 'mm-report-outdated',
            level: 'warnung',
            labelKey: 'indicators.rules.mmReportOutdated',
            defaultLabel: 'Report älter als 1 Jahr',
            check: (record)=>{
                const days = daysSince(record.Datum_Report__c);
                return days !== null && days > MM_REPORT_MAX_AGE_DAYS;
            }
        }
    ],
    Materialanalyse__c: [
        {
            rule: 'ma-results-overdue',
            level: 'dringend',
            labelKey: 'indicators.rules.maResultsOverdue',
            defaultLabel: 'Ergebnis benötigt bis überschritten — keine Werte erfasst',
            check: (record)=>isPastDate(record.Ergebnis_ben_tigt_bis__c) && record.Audit_Property_Value_Count__c === 0
        },
        {
            rule: 'ma-no-properties',
            level: 'warnung',
            labelKey: 'indicators.rules.maNoProperties',
            defaultLabel: 'Keine Prüfparameter angelegt',
            check: (record)=>record.Audit_Property_Count__c === 0
        }
    ],
    // Regelsatz v2 (AB): Sales-Intent-Staffel — je hoeher die Vermarktungsstufe,
    // desto mehr Pflichtangaben. Rangfolge siehe SALES_INTENT_ORDER.
    Product2: [
        {
            // ab "Platform visible": sichtbares Inserat braucht Preis + Menge
            rule: 'product-visible-incomplete',
            level: 'warnung',
            labelKey: 'indicators.rules.productVisibleIncomplete',
            defaultLabel: 'Auf der Plattform sichtbar, aber Preis oder Menge fehlt',
            check: (record)=>{
                const rank = SALES_INTENT_ORDER.indexOf(str(record.Sales_Intent__c));
                if (rank < SALES_INTENT_ORDER.indexOf('Platform visible')) return false;
                const keinPreis = record.Platform_Price__c === null;
                const keineMenge = record.Amount_monthly__c === null || record.Amount_monthly__c === 0;
                return keinPreis || keineMenge;
            }
        },
        {
            // ab "Proposal Pool": Vertriebsarbeit muss laufen (MP + Bewertung)
            rule: 'product-pool-unworked',
            level: 'warnung',
            labelKey: 'indicators.rules.productPoolUnworked',
            defaultLabel: 'Im Proposal Pool, aber kein Material Proposal oder keine Bewertung',
            check: (record)=>{
                const rank = SALES_INTENT_ORDER.indexOf(str(record.Sales_Intent__c));
                if (rank < SALES_INTENT_ACTIVE_MIN) return false;
                const mpCount = record.Count_Material_Proposal__c;
                const keinMp = typeof mpCount === 'number' && mpCount === 0;
                const keineBewertung = record.Risikobewertung__c === null;
                return keinMp || keineBewertung;
            }
        },
        {
            // ab "Top Recyclates": Premium-Listing ohne Handelsnamen
            rule: 'product-premium-no-tradename',
            level: 'info',
            labelKey: 'indicators.rules.productPremiumNoTradeName',
            defaultLabel: 'Premium-Vermarktung ohne Trade Name',
            check: (record)=>{
                const rank = SALES_INTENT_ORDER.indexOf(str(record.Sales_Intent__c));
                if (rank < SALES_INTENT_ORDER.indexOf('Top Recyclates')) return false;
                return record.Trade_Name__c === null || record.Trade_Name__c === '';
            }
        },
        {
            // Sichtung (#1283): neues Produkt ohne Vermarktungsentscheidung
            rule: 'product-new-undecided',
            level: 'info',
            labelKey: 'indicators.rules.productNewUndecided',
            defaultLabel: 'Neu, ohne Entscheidung (kein MP, kein Projekt, keine Vermarktungsstufe)',
            check: (record)=>{
                const days = daysSince(record.CreatedDate);
                if (days === null || days > NEW_UNDECIDED_DAYS) return false;
                if (SALES_INTENT_ORDER.indexOf(str(record.Sales_Intent__c)) >= SALES_INTENT_ACTIVE_MIN) {
                    return false;
                }
                // Count_Material_Proposal__c ist ein einfaches Zahlenfeld (kein Rollup): bei
                // frisch angelegten Datensätzen null, nicht 0 — beides heißt „kein MP“.
                const mpCount = record.Count_Material_Proposal__c;
                return (mpCount === null || mpCount === 0) && record.Projekt__c === null;
            }
        }
    ],
    Abrechnung__c: [
        {
            // Regelsatz v2: Zahlungsziel gerissen — Eingang: wir muessen zahlen,
            // Ausgang: Kunde mahnen
            rule: 'invoice-payment-overdue',
            soql: `Status_der_Abrechnung__c NOT IN ${inList([
                ...INVOICE_SETTLED_STATUSES
            ])} AND Datum_gezahlt__c = null AND Zahlungsziel__c < TODAY`,
            level: 'dringend',
            labelKey: 'indicators.rules.invoicePaymentOverdue',
            defaultLabel: 'Zahlungsziel überschritten — Zahlung offen',
            check: (record)=>{
                // PO 07.09.2026: „Gebucht" heißt bei plastship bezahlt
                if (INVOICE_SETTLED_STATUSES.has(str(record.Status_der_Abrechnung__c))) return false;
                if (record.Datum_gezahlt__c) return false;
                return isPastDate(record.Zahlungsziel__c);
            }
        },
        {
            // #828 Modell v5 (ersetzt invoice-no-document): Eingangs-Abrechnung mit
            // offenen Punkten (Formel in Salesforce: Beleg, Betrag, Zahlungsziel, …).
            rule: 'invoice-eingang-bearbeiten',
            soql: `Rechnungstyp__c = 'Eingang' AND Offene_Punkte__c != null AND Status_der_Abrechnung__c NOT IN ${inList([
                ...INVOICE_SETTLED_STATUSES
            ])}`,
            level: 'warnung',
            labelKey: 'indicators.rules.invoiceEingangBearbeiten',
            defaultLabel: 'Eingang bearbeiten — offene Punkte',
            check: (record)=>str(record.Rechnungstyp__c) === 'Eingang' && str(record.Offene_Punkte__c) !== '' && !INVOICE_SETTLED_STATUSES.has(str(record.Status_der_Abrechnung__c))
        },
        {
            // #828 (ersetzt invoice-provisional): Prognose älter als zwei Wochen —
            // Rückstellung bilden oder Rechnung einfordern.
            rule: 'invoice-rueckstellung-empfohlen',
            soql: `Rechnungstyp__c = 'Eingang' AND Kategorie__c = 'Prognose' AND CreatedDate < LAST_N_DAYS:${RUECKSTELLUNG_EMPFOHLEN_DAYS}`,
            level: 'warnung',
            labelKey: 'indicators.rules.invoiceRueckstellungEmpfohlen',
            defaultLabel: `Rückstellung empfohlen (Prognose älter als ${RUECKSTELLUNG_EMPFOHLEN_DAYS} Tage)`,
            check: (record)=>{
                if (str(record.Rechnungstyp__c) !== 'Eingang' || str(record.Kategorie__c) !== 'Prognose') {
                    return false;
                }
                const days = daysSince(record.CreatedDate);
                return days !== null && days > RUECKSTELLUNG_EMPFOHLEN_DAYS;
            }
        },
        {
            // #828: SOLL aus den Positionen weicht vom Rechnungsbetrag ab
            // AB-Klicktest 08.10.: nur Ausgang — Eingangsrechnungen hängen oft an
            // einem Sammel-/Dummy-Auftrag, dort sagt die Differenz nichts.
            rule: 'invoice-soll-ist',
            soql: `Rechnungstyp__c = 'Ausgang' AND Differenz_SOLL_IST__c != null AND Differenz_SOLL_IST__c != 0`,
            level: 'info',
            labelKey: 'indicators.rules.invoiceSollIst',
            defaultLabel: 'SOLL/IST weicht ab',
            check: (record)=>str(record.Rechnungstyp__c) === 'Ausgang' && typeof record.Differenz_SOLL_IST__c === 'number' && record.Differenz_SOLL_IST__c !== 0
        },
        // ── #828: reine Ansichten (Pills ohne Badge) ─────────────────────────────
        {
            // #1893: Tab „Noch nicht fakturiert" der Ausgangsrechnungen-Seite und
            // Kachel „Rechnung erstellen" (F0): Ausgangs-Abrechnung ohne Belegnummer.
            // Eine stornierte Rechnung war schon fakturiert und gehört nicht dazu.
            rule: 'invoice-rechnung-erstellen',
            soql: `Rechnungstyp__c = 'Ausgang' AND Belegnummer__c = null AND Kategorie__c != 'Stornierte Rechnung'`,
            labelKey: 'indicators.rules.invoiceRechnungErstellen',
            defaultLabel: 'Rechnung erstellen',
            check: (record)=>str(record.Rechnungstyp__c) === 'Ausgang' && str(record.Belegnummer__c) === '' && str(record.Kategorie__c) !== 'Stornierte Rechnung'
        },
        {
            rule: 'invoice-erstellt-nicht-versendet',
            soql: `Rechnungstyp__c = 'Ausgang' AND Belegnummer__c != null AND Eingangsdatum_plastship__c = null AND Kategorie__c NOT IN ${inList(INVOICE_STORNO_KATEGORIEN)}`,
            labelKey: 'indicators.rules.invoiceErstelltNichtVersendet',
            defaultLabel: 'Erstellt, nicht versendet',
            check: (record)=>str(record.Rechnungstyp__c) === 'Ausgang' && str(record.Belegnummer__c) !== '' && !record.Eingangsdatum_plastship__c && !INVOICE_STORNO_KATEGORIEN.includes(str(record.Kategorie__c))
        },
        {
            rule: 'invoice-versendet',
            soql: `Rechnungstyp__c = 'Ausgang' AND Eingangsdatum_plastship__c != null`,
            labelKey: 'indicators.rules.invoiceVersendet',
            defaultLabel: 'Versendet',
            check: (record)=>str(record.Rechnungstyp__c) === 'Ausgang' && !!record.Eingangsdatum_plastship__c
        },
        {
            rule: 'invoice-rueckstellungen',
            soql: `Kategorie__c = 'Rückstellungen für ausstehende Rechnungen'`,
            labelKey: 'indicators.rules.invoiceRueckstellungen',
            defaultLabel: 'Rückstellungen',
            check: (record)=>str(record.Kategorie__c) === 'Rückstellungen für ausstehende Rechnungen'
        },
        {
            rule: 'invoice-freizugeben',
            soql: `Status_der_Abrechnung__c = 'Vollständig dokumentiert' AND Freigabe__c = false`,
            labelKey: 'indicators.rules.invoiceFreizugeben',
            defaultLabel: 'Freizugeben',
            check: (record)=>str(record.Status_der_Abrechnung__c) === 'Vollständig dokumentiert' && record.Freigabe__c !== true
        },
        {
            rule: 'invoice-zu-buchen',
            soql: `Status_der_Abrechnung__c = 'Vollständig dokumentiert' AND Freigabe__c = true`,
            labelKey: 'indicators.rules.invoiceZuBuchen',
            defaultLabel: 'Zu buchen',
            check: (record)=>str(record.Status_der_Abrechnung__c) === 'Vollständig dokumentiert' && record.Freigabe__c === true
        },
        {
            // An die Sitzung gebunden: nur serverseitig (kein check, kein Badge).
            rule: 'invoice-von-mir-zu-pruefen',
            soql: (ctx)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$utils$2f$soqlSanitizer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidSalesforceId"])(ctx.userId) ? `Zu_pr_fen_durch__c = '${ctx.userId}' AND Gepr_ft_und_in_Ordnung__c = null` : null,
            labelKey: 'indicators.rules.invoiceVonMirZuPruefen',
            defaultLabel: 'Von mir zu prüfen'
        }
    ],
    OrderItem: [
        // ── #828 (AB-Klicktest 08.10.): Ansichten der Positionsliste ───────────
        {
            rule: 'orderitem-offen',
            soql: `Offen_zu_fakturieren__c = 1`,
            labelKey: 'indicators.rules.orderItemOffen',
            defaultLabel: 'Offen zu fakturieren',
            check: (record)=>record.Offen_zu_fakturieren__c === 1
        },
        {
            rule: 'orderitem-abgerechnet',
            soql: `Abrechnung__c != null AND Abrechnung__r.Kategorie__c != 'Stornierte Rechnung'`,
            labelKey: 'indicators.rules.orderItemAbgerechnet',
            defaultLabel: 'Abgerechnet',
            check: (record)=>!!record.Abrechnung__c && record.Abrechnung__r?.Kategorie__c !== 'Stornierte Rechnung'
        },
        {
            // Position ohne Betrag: zählt in Salesforce nicht als offen (Formel), muss
            // aber jemand ansehen — Preis fehlt oder bewusst 0.
            rule: 'orderitem-ohne-betrag',
            soql: `Abrechnung__c = null AND (UnitPrice = null OR UnitPrice = 0)`,
            labelKey: 'indicators.rules.orderItemOhneBetrag',
            defaultLabel: 'Ohne Betrag',
            check: (record)=>!record.Abrechnung__c && (record.UnitPrice === null || record.UnitPrice === undefined || record.UnitPrice === 0)
        },
        {
            // #828: Position hängt noch an einer stornierten Abrechnung (in Salesforce
            // von Hand umhängen; die App-Storno-Route gibt Positionen selbst frei).
            rule: 'orderitem-stornierte-abrechnung',
            soql: `Abrechnung__r.Kategorie__c = 'Stornierte Rechnung'`,
            level: 'warnung',
            labelKey: 'indicators.rules.orderItemStornierteAbrechnung',
            defaultLabel: 'An stornierter Abrechnung',
            check: (record)=>record.Abrechnung__r?.Kategorie__c === 'Stornierte Rechnung'
        }
    ]
};
// Aliase, unter denen dieselben Objekte in der App adressiert werden
// (Muster statusRegistry: OrdersTable/Drawer nutzen teils 'Auftrag__c';
// das Id-Praefix-Mapping liefert je nach Stand noch die Alt-Namen).
const ALIASES = {
    Auftrag__c: 'Order',
    Bedarf__c: 'Bedarfe__c'
};
const LEVEL_ORDER = {
    dringend: 0,
    warnung: 1,
    info: 2
};
function getIndicators(entityType, record) {
    if (!entityType || !record) return [];
    const rules = REGISTRY[ALIASES[entityType] ?? entityType];
    if (!rules) return [];
    return rules.filter((rule)=>{
        // #847: Regeln ohne Stufe sind reine Ansichten — kein Badge
        if (!rule.level || !rule.check) return false;
        try {
            return rule.check(record);
        } catch  {
            return false;
        }
    }).map(({ rule, level, labelKey, defaultLabel })=>({
            rule,
            level,
            labelKey,
            defaultLabel
        })).sort((a, b)=>LEVEL_ORDER[a.level] - LEVEL_ORDER[b.level]);
}
function getRegistryRules(entityType) {
    if (!entityType) return [];
    return REGISTRY[ALIASES[entityType] ?? entityType] ?? [];
}
function getHighestLevel(indicators) {
    return indicators.length > 0 ? indicators[0].level : null;
}
function hasIndicatorRules(entityType) {
    if (!entityType) return false;
    return (ALIASES[entityType] ?? entityType) in REGISTRY;
}
function getInheritedIndicators(record) {
    if (!record) return [];
    const byRule = new Map();
    for (const value of Object.values(record)){
        const records = value?.records;
        if (!Array.isArray(records)) continue;
        for (const child of records){
            if (!child || typeof child !== 'object') continue;
            const childRecord = child;
            const childType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$helper$2f$entityHelpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getEntityTypeFromId"])(typeof childRecord.Id === 'string' ? childRecord.Id : undefined);
            if (!childType) continue;
            for (const indicator of getIndicators(childType, childRecord)){
                // Nur warnung/dringend vererben — die info-Stufe ("in Bearbeitung")
                // wuerde sonst praktisch jeden Eltern-Datensatz dauerhaft markieren.
                if (indicator.level === 'info') continue;
                const existing = byRule.get(indicator.rule);
                if (existing) {
                    existing.count += 1;
                } else {
                    byRule.set(indicator.rule, {
                        ...indicator,
                        count: 1,
                        entityLabel: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$helper$2f$entityHelpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getEntityLabel"])(ALIASES[childType] ?? childType)
                    });
                }
            }
        }
    }
    return [
        ...byRule.values()
    ].sort((a, b)=>LEVEL_ORDER[a.level] - LEVEL_ORDER[b.level]);
}
const LIST_INHERITANCE = {
    Order: [
        {
            childObject: 'Abrechnung__c',
            parentField: 'Auftrag__c',
            relationshipKey: 'Abrechnungen__r'
        }
    ],
    Contract: [
        {
            childObject: 'Order',
            parentField: 'ContractId',
            relationshipKey: 'Orders'
        }
    ],
    Projekt__c: [
        {
            childObject: 'Order',
            parentField: 'Projekt__c',
            relationshipKey: 'Auftr_ge__r'
        }
    ],
    // AB 2026-08-29: Account gezielt ueber Gueltigkeits-Fristen (Audit/
    // Zertifikat abgelaufen = Requalifizierung anstossen). Cases/Auftraege/
    // Bedarfe bewusst NICHT — das wuerde fast jede Account-Zeile beringen.
    Account: [
        {
            childObject: 'Supplier_Audit__c',
            parentField: 'Account__c',
            relationshipKey: 'Supplier_audits__r'
        },
        {
            childObject: 'Unternehmenszertifikat__c',
            parentField: 'Account__c',
            relationshipKey: 'Unternehmenszertifikate__r'
        }
    ]
};
const INDICATOR_REQUIRED_FIELDS = {
    Case: [
        'Status',
        'IsClosed',
        'ContactId',
        'LastModifiedDate',
        'CreatedDate',
        'First_Touched__c',
        'Wiedervorlage__c',
        'Origin'
    ],
    Order: [
        'Status',
        'LastModifiedDate',
        'Datum_ETA_NEU__c',
        'Datum_Abholung_NEU__c',
        'Anzahl_Abrechnungen__c',
        // #828 Modell v5
        'EffectiveDate',
        'Fakturierungsstatus__c',
        'Offener_Betrag_an_Lieferant__c',
        'Offener_Betrag_an_Transporteur__c',
        'Keine_Ausgangsrechnung_n_tig__c'
    ],
    // OrderItem bewusst nicht: die Positionsliste lädt Abrechnung__r selbst nach
    // (orderitems-Route); Related Lists und das Aufmerksamkeits-Widget (#870,
    // ATTENTION_OBJECTS) nehmen das Objekt erst mit einem eigenen Scan auf.
    Sample_Sending__c: [
        'Status__c',
        'Datum_Versand__c',
        'Datum_Bestellung__c'
    ],
    Material_Proposal__c: [
        'Status__c',
        'LastModifiedDate',
        'Product__c',
        'MP_Follow_Up_Overdue__c',
        'Follow_Up_Date__c'
    ],
    Account: [
        'Vollqualifiziert__c',
        'Count_Auftr_ge_Kunde__c',
        'Count_Auftr_ge_Lieferant__c',
        'Verh_ltnis__c',
        'LastModifiedDate'
    ],
    Contact: [
        'IsEmailBounced'
    ],
    Onboarding__c: [
        'Onboarding_durchgef_hrt__c',
        'Zeitpunkt_des_Onboardings__c',
        'CreatedDate'
    ],
    Supplier_Audit__c: [
        'Valid_to__c'
    ],
    Unternehmenszertifikat__c: [
        'G_ltig_bis__c'
    ],
    Projekt__c: [
        'Status__c',
        'IST_Fokusprojekt__c',
        'Fokusprojekt_bis__c',
        'Projektdeadline__c',
        'Projektwiedervorlage__c'
    ],
    Bedarfe__c: [
        'Bedarfsstatus__c',
        'Monatsbedarf_t__c',
        'Count_Material_Proposal__c',
        'Risikobewertung__c',
        'LastModifiedDate',
        'CreatedDate',
        'Projekt__c'
    ],
    Monitored_Material__c: [
        'Datum_Report__c'
    ],
    Materialanalyse__c: [
        'Ergebnis_ben_tigt_bis__c',
        'Audit_Property_Count__c',
        'Audit_Property_Value_Count__c'
    ],
    Product2: [
        'Sales_Intent__c',
        'Count_Material_Proposal__c',
        'Platform_Price__c',
        'Amount_monthly__c',
        'Risikobewertung__c',
        'Trade_Name__c',
        'CreatedDate',
        'Projekt__c'
    ],
    Abrechnung__c: [
        'Kategorie__c',
        'Status_der_Abrechnung__c',
        'Count_Files__c',
        'Zahlungsziel__c',
        'Datum_gezahlt__c',
        // #828 Modell v5 (Dashboard-Scan und Related Lists)
        'Rechnungstyp__c',
        'Offene_Punkte__c',
        'Differenz_SOLL_IST__c',
        'Belegnummer__c',
        'Eingangsdatum_plastship__c',
        'Freigabe__c',
        'CreatedDate'
    ]
};
var _c;
__turbopack_context__.k.register(_c, "ORDER_FROM_INVOICING");
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
"[project]/apps/web/src/lib/mail-templates/mailTemplateRegistry.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MAIL_TEMPLATE_REGISTRY",
    ()=>MAIL_TEMPLATE_REGISTRY,
    "getMailEntityConfig",
    ()=>getMailEntityConfig,
    "getMailTemplates",
    ()=>getMailTemplates,
    "recipientsFromRecord",
    ()=>recipientsFromRecord,
    "renderMailTemplate",
    ()=>renderMailTemplate,
    "resolveMailEntityApiName",
    ()=>resolveMailEntityApiName
]);
/**
 * Mail-Copy-Templates (#418) — Kopiervorlagen je Objekt.
 *
 * Bewusst OHNE Versand-Anbindung (E-Mail-Flows #248 bleibt geparkt): Der User
 * wählt eine Vorlage, bekommt den mit Datensatz-Werten befüllten Text und
 * kopiert ihn in sein Mail-Programm.
 *
 * Standardisierung: EIN Renderer + deklarative Template-Registry je SF-Objekt.
 * Platzhalter-Syntax:
 *  - `{Feld}` oder mit Lookup-Traversal `{Account.Name}` / `{Product__r.Name}`
 *  - Fallback-Kette `{FeldA??FeldB??FeldC}` — erster nicht-leerer Wert gewinnt
 *  - Adress-Baustein `{@adresse:Lookup__r}` — setzt Name, Straße+Nr, PLZ Ort,
 *    Land des Produktionsstandorts aus den VERFÜGBAREN Feldern zusammen
 *  - Listen-Block `{#RelA??RelB: FeldA | FeldB#kg | ...}` — rendert je
 *    Subquery-Record eine nummerierte Zeile (Felder mit " – " verbunden;
 *    `#einheit` hängt eine Einheit an; `??` = erste Relationship mit
 *    Datensätzen gewinnt (z. B. SS-Musterbestellung vs. -Musterversand)
 * Fehlende Werte werden deutlich als `[FEHLT: …]` markiert statt still leer
 * gelassen (Akzeptanzkriterium #418).
 *
 * WICHTIG: Das Modal lädt den VOLLEN Datensatz selbst über `entityPath`
 * (Detail-API) — Drawer-/Board-Records enthalten nur Listenfelder (AB-Befund
 * 2026-07-09: alle Platzhalter [FEHLT], weil der Kanban-Record schlank ist).
 *
 * Die Texte sind PO-Entwürfe (AB) — Feinschliff pro Vorlage im Review.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$helper$2f$formatDate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/helper/formatDate.ts [app-client] (ecmascript)");
;
/**
 * EntityType-Enum-Werte und Legacy-Bezeichner → SF-API-Namen (Detail-Views
 * und Drawer-Aufrufer nutzen gemischte Formen; die OrdersTable öffnet den
 * Drawer z. B. mit 'Auftrag__c').
 */ const ENTITY_ALIASES = {
    Order: 'Order',
    Auftrag__c: 'Order',
    Invoice: 'Abrechnung__c',
    MaterialProposal: 'Material_Proposal__c',
    SampleSending: 'Sample_Sending__c',
    MaterialAnalysis: 'Materialanalyse__c'
};
// Versand-Zuordnung je Empfänger gemäß Order-Dokumente-Spec (#196):
// Auftragsbestätigung + Lieferschein an Kunde; Bestellung + Ladeschein an
// Lieferant; Ladeschein/Lieferschein/Transportauftrag an Transporteur.
const ORDER_TEMPLATES = [
    {
        id: 'order-confirmation',
        title: 'Auftragsbestätigung an Kunden',
        subject: 'Auftragsbestätigung {OrderNumber}',
        body: `Sehr geehrte Damen und Herren,

hiermit bestätigen wir Ihren Auftrag {OrderNumber} vom {EffectiveDate}.

Die Auftragsbestätigung mit allen Details finden Sie im Anhang. Bitte prüfen Sie die Angaben und melden Sie sich bei Rückfragen gerne bei uns.

Mit freundlichen Grüßen
plastship GmbH`
    },
    {
        id: 'order-delivery-note-customer',
        title: 'Lieferschein an Kunden',
        subject: 'Lieferschein zu Auftrag {OrderNumber}',
        body: `Sehr geehrte Damen und Herren,

anbei erhalten Sie den Lieferschein zu Ihrem Auftrag {OrderNumber}.

Bitte prüfen Sie die Lieferung bei Erhalt und bestätigen Sie uns kurz den Wareneingang. Bei Abweichungen melden Sie sich bitte umgehend.

Mit freundlichen Grüßen
plastship GmbH`
    },
    {
        id: 'order-purchase-supplier',
        title: 'Bestellung an Lieferanten',
        subject: 'Bestellung zu Auftrag {OrderNumber}',
        body: `Sehr geehrte Damen und Herren,

anbei erhalten Sie unsere Bestellung zu Auftrag {OrderNumber}.

Bitte bestätigen Sie uns den Auftrag sowie den voraussichtlichen Bereitstellungstermin.

Mit freundlichen Grüßen
plastship GmbH`
    },
    {
        id: 'order-loading-note-supplier',
        title: 'Ladeschein an Lieferanten',
        subject: 'Ladeschein zu Auftrag {OrderNumber}',
        body: `Sehr geehrte Damen und Herren,

anbei der Ladeschein zu Auftrag {OrderNumber}.

Bitte halten Sie die Ware zum vereinbarten Termin zur Abholung bereit und geben Sie den Ladeschein dem Fahrer mit.

Mit freundlichen Grüßen
plastship GmbH`
    },
    {
        id: 'order-transport-request-carrier',
        title: 'Transportanfrage an Spediteur (mit Adressen)',
        subject: 'Transportanfrage zu Auftrag {OrderNumber}',
        body: `Sehr geehrte Damen und Herren,

für folgenden Transport bitten wir um Ihr Angebot:

Ladestelle: {@adresse:Produktionsstandort__r}
Lieferstelle: {@adresse:Produktion_Delivery__r}
Menge: {Quantity__c} t
Abholung ab: {Datum_Abholung_NEU__c}

Bitte teilen Sie uns Ihren Transportpreis sowie den frühestmöglichen Abholtermin mit.

Mit freundlichen Grüßen
plastship GmbH`
    },
    {
        id: 'order-transport-docs-carrier',
        title: 'Transportunterlagen an Transporteur',
        subject: 'Transportauftrag zu {OrderNumber}',
        body: `Sehr geehrte Damen und Herren,

anbei erhalten Sie die Unterlagen zum Transport für Auftrag {OrderNumber}: Transportauftrag, Ladeschein und Lieferschein.

Bitte bestätigen Sie uns die Übernahme des Transports und melden Sie sich bei Rückfragen zu Ladestelle oder Termin.

Mit freundlichen Grüßen
plastship GmbH`
    },
    {
        id: 'order-invoice-reminder',
        title: 'Erinnerung fehlende Eingangsrechnung (Lieferant)',
        subject: 'Fehlende Rechnung zu Auftrag {OrderNumber}',
        body: `Sehr geehrte Damen und Herren,

zu unserem Auftrag {OrderNumber} vom {EffectiveDate} liegt uns bisher keine Rechnung vor.

Bitte senden Sie uns die Rechnung zeitnah zu, damit wir die Abrechnung abschließen können.

Mit freundlichen Grüßen
plastship GmbH`
    }
];
// Material-Block nach AB-Vorgabe: Produktcode + Beschreibung statt App-URLs;
// Materialdaten aus Product2 (Traversal), Konditionen aus dem MP.
const MATERIAL_PROPOSAL_TEMPLATES = [
    {
        // MP-Status 'Transport price requested' — Preisanfrage VOR Angebotsabgabe
        id: 'mp-transport-request-carrier',
        title: 'Transportpreis-Anfrage an Spediteur (mit Adressen)',
        subject: 'Transportpreis-Anfrage {Name}',
        body: `Sehr geehrte Damen und Herren,

für eine geplante Lieferung bitten wir um Ihren Transportpreis:

Ladeort: {@adresse:Loading_Location__r}
Lieferort: {@adresse:Delivery_Location__r}
Menge: {Tonnage_per_truck__c} t je Komplettladung
Material: {Product__r.Main_polymer__c??Import_Main_Polymer__c} – {Product_Description__c??Product__r.Product_Description__c??Product__r.Name}

Bitte nennen Sie uns Ihren Preis je Tonne bzw. je Komplettladung sowie die aktuelle Verfügbarkeit.

Mit freundlichen Grüßen
plastship GmbH`
    },
    {
        id: 'mp-offer',
        title: 'Angebot kommunizieren',
        subject: 'Materialangebot {Product_Code__c??Product__r.ProductCode} – {Product_Description__c??Product__r.Product_Description__c??Product__r.Name}',
        body: `Sehr geehrte Damen und Herren,

gerne bieten wir Ihnen folgendes Material an, das auf Ihre Spezifikationen passen könnte:

{Product_Code__c??Product__r.ProductCode} – {Product_Description__c??Product__r.Product_Description__c??Product__r.Name}
Hauptpolymer: {Product__r.Main_polymer__c??Import_Main_Polymer__c}
Materialtyp: {Product__r.Material_type__c}
Rezyklatdefinition: {Product__r.Rezyklatdefinition__c}
Produktbeschreibung: {Product__r.Product_Description__c??Product__r.Description}

Lieferort: {@adresse:Delivery_Location__r}
Lieferbedingungen: {Delivery_Terms_Offer__c}
Preis: {Sales_Price_per_ton__c} €/t
Tonnage je LKW: {Tonnage_per_truck__c} t
Verfügbare Menge: {Amount_monthly_t_offered__c} t/Monat

Bei Interesse organisieren wir Ihnen gerne kurzfristig ein Muster.

Wir freuen uns auf Ihre Rückmeldung.

Mit freundlichen Grüßen
plastship GmbH`
    },
    {
        id: 'mp-sample-followup',
        title: 'Nachfassen nach Musterversand',
        subject: 'Ihr Muster {Product_Code__c??Product__r.ProductCode} – {Product_Description__c??Product__r.Product_Description__c??Product__r.Name}',
        body: `Sehr geehrte Damen und Herren,

vor einiger Zeit haben wir Ihnen ein Muster zu folgendem Material zukommen lassen:

{Product_Code__c??Product__r.ProductCode} – {Product_Description__c??Product__r.Product_Description__c??Product__r.Name} ({Product__r.Main_polymer__c??Import_Main_Polymer__c})

Konnten Sie das Material bereits prüfen? Gerne stellen wir Ihnen weitere Informationen oder zusätzliche Mustermengen bereit.

Mit freundlichen Grüßen
plastship GmbH`
    }
];
// Auflistung der Muster-Inhalte aus der Related List (AB-Vorgabe): das Modal
// lädt den vollen Datensatz inkl. Subqueries; Product__r.Name kommt über die
// erweiterte Related-List-Config in SampleSending.fields.ts.
const SAMPLE_SENDING_TEMPLATES = [
    {
        id: 'ss-order-supplier',
        title: 'Musterbestellung an Lieferanten',
        subject: 'Musterbestellung — Sample Sending Nr. {Name}',
        body: `Sehr geehrte Damen und Herren,

wir bestellen hiermit Muster zu folgenden Materialien (Sample Sending Nr. {Name}):

{#Material_Proposals__r??Material_Proposals1__r: Product__r.ProductCode | Product__r.Name | Sample_Size_in_kg__c#kg}

Bitte stellen Sie die Muster zum Versand bereit und teilen Sie uns den voraussichtlichen Versandtermin mit.

Mit freundlichen Grüßen
plastship GmbH`
    },
    {
        id: 'ss-shipping-notice',
        title: 'Versandavis an Empfänger',
        subject: 'Mustersendung Nr. {Name} — Versandankündigung',
        body: `Sehr geehrte Damen und Herren,

Ihre Mustersendung Nr. {Name} wurde versendet und ist in Kürze bei Ihnen: {@adresse:Delivery_Produktion__r}.

Enthaltene Muster:
{#Material_Proposals1__r??Material_Proposals__r: Product__r.ProductCode | Product__r.Name | Sample_Size_in_kg__c#kg}

Bitte geben Sie uns kurz Bescheid, sobald die Sendung eingetroffen ist. Wir freuen uns anschließend auf Ihr Feedback zur Materialprüfung.

Mit freundlichen Grüßen
plastship GmbH`
    },
    {
        id: 'ss-feedback-request',
        title: 'Feedback zum Muster anfragen',
        subject: 'Ihr Feedback zu Mustersendung Nr. {Name}',
        body: `Sehr geehrte Damen und Herren,

Sie haben von uns die Mustersendung Nr. {Name} mit folgenden Materialien erhalten:

{#Material_Proposals1__r??Material_Proposals__r: Product__r.ProductCode | Product__r.Name | Sample_Size_in_kg__c#kg}

Konnten Sie die Materialien bereits testen? Über eine kurze Rückmeldung zu Ihren Ergebnissen je Material würden wir uns sehr freuen — sie hilft uns, Ihnen passende Folgemengen anzubieten.

Mit freundlichen Grüßen
plastship GmbH`
    }
];
// Kommunikationspunkte aus der Case-Workflow-Spec (#199).
const CASE_TEMPLATES = [
    {
        id: 'case-received',
        title: 'Eingangsbestätigung Anfrage',
        subject: 'Ihre Anfrage {CaseNumber}',
        body: `Sehr geehrte Damen und Herren,

vielen Dank für Ihre Anfrage „{Subject}". Wir haben sie unter der Nummer {CaseNumber} aufgenommen und melden uns schnellstmöglich mit einer Rückmeldung.

Mit freundlichen Grüßen
plastship GmbH`
    },
    {
        id: 'case-waiting-customer',
        title: 'Rückfrage an Kunden (Warten auf Antwort)',
        subject: 'Rückfrage zu Ihrer Anfrage {CaseNumber}',
        body: `Sehr geehrte Damen und Herren,

zu Ihrer Anfrage „{Subject}" ({CaseNumber}) benötigen wir noch eine Information von Ihnen, um fortfahren zu können.

[HIER: konkrete Rückfrage einfügen]

Vielen Dank vorab für Ihre Rückmeldung.

Mit freundlichen Grüßen
plastship GmbH`
    }
];
// Materialanalyse-Workflow (#203): lesbarer Materialname statt SF-ID.
const MATERIAL_ANALYSIS_TEMPLATES = [
    {
        id: 'ma-assign-lab',
        title: 'Analyse-Beauftragung an Dienstleister',
        subject: 'Analyse-Beauftragung {Name}',
        body: `Sehr geehrte Damen und Herren,

hiermit beauftragen wir Sie mit der Materialanalyse {Name}.

Material: {Material_ID__r.Name}
Analysetyp: {Analysetyp__c}

Das Muster geht Ihnen in Kürze zu bzw. liegt Ihnen bereits vor. Bitte tragen Sie die Ergebnisse direkt in unserem System ein und aktualisieren Sie dort den Status der Analyse.

Mit freundlichen Grüßen
plastship GmbH`
    }
];
// #1789: Kurze Mails der Buchhaltung an den Kunden ohne Dokument — aus der
// Abrechnung (Detail, Drawer) und aus der Pill „Fällig". Die Erinnerung MIT
// PDF bleibt die Dokument-Aktion (#1601); die Mahnstufe ist die Zahl der
// Versand-Logs „Zahlungserinnerung versendet" + „E-Mail versendet", kein Feld.
// Beträge über `|eur` (de-DE), Daten formatiert der Renderer selbst.
const ABRECHNUNG_TEMPLATES = [
    {
        id: 'invoice-zahlungserinnerung-text',
        title: 'Zahlungserinnerung (ohne Dokument)',
        subject: 'Zahlungserinnerung zur Rechnung {Belegnummer__c}',
        body: `Sehr geehrte Damen und Herren,

zu unserer Rechnung {Belegnummer__c} vom {Belegdatum__c} über {Rechnungsbetrag_brutto__c|eur} (fällig am {Zahlungsziel__c}) konnten wir bisher keinen Zahlungseingang feststellen. Wir bitten um umgehende Überweisung des Betrags unter Angabe der Rechnungsnummer.

Sollte die Zahlung bereits erfolgt sein, betrachten Sie diese Nachricht bitte als gegenstandslos.

Mit freundlichen Grüßen
plastship GmbH`
    },
    {
        id: 'invoice-rueckfrage',
        title: 'Rückfrage zur Rechnung',
        subject: 'Rückfrage zur Rechnung {Belegnummer__c}',
        body: `Sehr geehrte Damen und Herren,

zu unserer Rechnung {Belegnummer__c} vom {Belegdatum__c} über {Rechnungsbetrag_brutto__c|eur} haben wir eine Rückfrage:

[Rückfrage hier eintragen]

Vielen Dank für eine kurze Rückmeldung.

Mit freundlichen Grüßen
plastship GmbH`
    },
    {
        id: 'invoice-zahlungseingang',
        title: 'Zahlungseingang bestätigt',
        subject: 'Zahlungseingang zur Rechnung {Belegnummer__c}',
        body: `Sehr geehrte Damen und Herren,

vielen Dank – der Betrag von {Rechnungsbetrag_brutto__c|eur} zu unserer Rechnung {Belegnummer__c} ist bei uns eingegangen. Die Rechnung ist damit ausgeglichen.

Mit freundlichen Grüßen
plastship GmbH`
    }
];
const MAIL_TEMPLATE_REGISTRY = {
    Abrechnung__c: {
        apiName: 'Abrechnung__c',
        entityPath: 'invoice',
        templates: ABRECHNUNG_TEMPLATES,
        recipientPaths: [
            'Account__r.E_Mailadresse_Rechnungen__c',
            'Account__r.Account_E_Mail__c'
        ]
    },
    Order: {
        apiName: 'Order',
        entityPath: 'order',
        templates: ORDER_TEMPLATES
    },
    Material_Proposal__c: {
        apiName: 'Material_Proposal__c',
        entityPath: 'material-proposals',
        templates: MATERIAL_PROPOSAL_TEMPLATES
    },
    Sample_Sending__c: {
        apiName: 'Sample_Sending__c',
        entityPath: 'sample-sending',
        templates: SAMPLE_SENDING_TEMPLATES
    },
    Case: {
        apiName: 'Case',
        entityPath: 'case',
        templates: CASE_TEMPLATES
    },
    Materialanalyse__c: {
        apiName: 'Materialanalyse__c',
        entityPath: 'material-analysis',
        templates: MATERIAL_ANALYSIS_TEMPLATES
    }
};
function resolveMailEntityApiName(entityTypeOrApiName) {
    return ENTITY_ALIASES[entityTypeOrApiName] ?? entityTypeOrApiName;
}
function getMailEntityConfig(entityTypeOrApiName) {
    return MAIL_TEMPLATE_REGISTRY[resolveMailEntityApiName(entityTypeOrApiName)];
}
function getMailTemplates(entityTypeOrApiName) {
    return getMailEntityConfig(entityTypeOrApiName)?.templates ?? [];
}
const MAIL_ADDRESS = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
function recipientsFromRecord(config, record) {
    if (!config?.recipientPaths?.length || !record) return [];
    const gesehen = new Set();
    const result = [];
    for (const path of config.recipientPaths){
        const value = resolvePlaceholder(record, path);
        if (typeof value !== 'string') continue;
        const mail = value.trim().toLowerCase();
        if (!MAIL_ADDRESS.test(mail) || gesehen.has(mail)) continue;
        gesehen.add(mail);
        result.push(mail);
    }
    return result;
}
/** Wert aus dem Record auflösen, inkl. Lookup-Traversal ('Account.Name'). */ function resolvePlaceholder(record, path) {
    return path.split('.').reduce((current, segment)=>{
        if (current && typeof current === 'object') {
            return current[segment];
        }
        return undefined;
    }, record);
}
/**
 * ISO-Datumsstrings für Mails als de-DE formatieren, alles andere als String.
 * #1789: `format` 'eur' → „1.234,56 €", 'zahl' → „1.234,5" (Zahlen und
 * numerische Strings; sonst unverändert).
 */ function formatPlaceholderValue(value, format) {
    if (format === 'eur' || format === 'zahl') {
        const zahl = typeof value === 'number' ? value : Number(typeof value === 'string' ? value.trim() : NaN);
        if (Number.isFinite(zahl)) {
            return format === 'eur' ? new Intl.NumberFormat('de-DE', {
                style: 'currency',
                currency: 'EUR'
            }).format(zahl) : new Intl.NumberFormat('de-DE', {
                maximumFractionDigits: 2
            }).format(zahl);
        }
    }
    if (typeof value === 'string' && /^\d{4}-\d{2}-\d{2}/.test(value)) {
        const date = new Date(value);
        if (!Number.isNaN(date.getTime())) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$helper$2f$formatDate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDate"])(date);
        }
    }
    return String(value);
}
const LIST_BLOCK_PATTERN = /\{#([A-Za-z0-9_?]+)\s*:\s*([^}]+)\}/g;
const ADDRESS_PATTERN = /\{@adresse:([A-Za-z0-9_.]+)\}/g;
// #1789: optionales Format `{Feld|eur}` (Betrag de-DE mit €) oder `{Feld|zahl}`
const PLACEHOLDER_PATTERN = /\{([A-Za-z0-9_.?]+)(?:\|(eur|zahl))?\}/g;
/** Fallback-Kette 'A??B??C' auflösen — erster nicht-leerer Wert gewinnt. */ function resolveChain(record, chainSpec) {
    for (const path of chainSpec.split('??')){
        const value = resolvePlaceholder(record, path.trim());
        if (value !== undefined && value !== null && value !== '') return value;
    }
    return undefined;
}
/**
 * Adresse aus den verfügbaren Produktionsstandort-Feldern zusammensetzen:
 * Name, Straße + Hausnummer, PLZ Ort, Land — fehlende Teile werden einfach
 * weggelassen (AB-Vorgabe: „vollständig zusammenziehen aus den verfügbaren
 * Datenfeldern").
 */ function composeAddress(base) {
    const part = (key)=>{
        const value = base[key];
        return value === undefined || value === null ? '' : String(value).trim();
    };
    const street = [
        part('Strasse__c'),
        part('Strasse_Nummer__c')
    ].filter(Boolean).join(' ');
    const city = [
        part('PLZ__c'),
        part('Ort__c')
    ].filter(Boolean).join(' ');
    return [
        part('Name'),
        street,
        city,
        part('Land__c')
    ].filter(Boolean).join(', ');
}
/** Subquery-Records aus dem SF-Shape ({records: [...]}) oder Array holen. */ function getRelatedRecords(record, relationship) {
    const value = record[relationship];
    if (Array.isArray(value)) return value;
    if (value && typeof value === 'object' && Array.isArray(value.records)) {
        return value.records;
    }
    return [];
}
function renderMailTemplate(template, record) {
    const missing = [];
    const markMissing = (path)=>{
        if (!missing.includes(path)) missing.push(path);
        return `[FEHLT: ${path}]`;
    };
    const fillPlaceholders = (input, source)=>input.replace(PLACEHOLDER_PATTERN, (_match, chainSpec, format)=>{
            const value = resolveChain(source, chainSpec);
            if (value === undefined) {
                return markMissing(chainSpec.split('??')[0].trim());
            }
            return formatPlaceholderValue(value, format);
        });
    const fill = (input)=>{
        // 1) Listen-Blöcke: {#Relationship__r: FeldA | FeldB#kg} → nummerierte Zeilen
        const withLists = input.replace(LIST_BLOCK_PATTERN, (_match, relationshipChain, fieldSpec)=>{
            // '??'-Kette: erste Relationship MIT Datensätzen gewinnt („je nachdem",
            // z. B. Musterbestellung vs. Musterversand am Sample Sending)
            const relationships = relationshipChain.split('??').map((part)=>part.trim());
            const relationship = relationships.find((rel)=>getRelatedRecords(record, rel).length > 0) ?? relationships[0];
            const items = getRelatedRecords(record, relationship);
            if (items.length === 0) {
                return markMissing(relationship);
            }
            const fieldSpecs = fieldSpec.split('|').map((part)=>part.trim());
            return items.map((item, index)=>{
                const parts = fieldSpecs.map((spec)=>{
                    const [chain, unit] = spec.split('#');
                    const value = resolveChain(item, chain.trim());
                    if (value === undefined) return null;
                    const formatted = formatPlaceholderValue(value);
                    return unit ? `${formatted} ${unit.trim()}` : formatted;
                }).filter((part)=>part !== null);
                return `${index + 1}. ${parts.length > 0 ? parts.join(' – ') : markMissing(`${relationship}.${fieldSpecs[0]}`)}`;
            }).join('\n');
        });
        // 2) Adress-Bausteine: {@adresse:Lookup__r}
        const withAddresses = withLists.replace(ADDRESS_PATTERN, (_match, basePath)=>{
            const base = resolvePlaceholder(record, basePath);
            if (!base || typeof base !== 'object') {
                return markMissing(basePath);
            }
            const address = composeAddress(base);
            return address || markMissing(`${basePath}.Name`);
        });
        // 3) Einfache Platzhalter (inkl. Fallback-Ketten)
        return fillPlaceholders(withAddresses, record);
    };
    const subject = fill(template.subject);
    const body = fill(template.body);
    return {
        text: `${subject}\n\n${body}`,
        missing
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/mail/address.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * #964: Prüfung von Mail-Adressen — eine Quelle für die Empfänger-Felder
 * (SendViaMailModal, MailComposeModal) und die Mail-Routen. Rein, ohne
 * Server-Importe.
 */ /** Gleiche Prüfung wie die Empfänger-Eingabe im Versand-Modal (#1807). */ __turbopack_context__.s([
    "MAIL_ADDRESS_PATTERN",
    ()=>MAIL_ADDRESS_PATTERN,
    "MAX_MAIL_RECIPIENTS",
    ()=>MAX_MAIL_RECIPIENTS,
    "isMailAddress",
    ()=>isMailAddress,
    "normalizeMailAddress",
    ()=>normalizeMailAddress
]);
const MAIL_ADDRESS_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_MAIL_RECIPIENTS = 20;
function isMailAddress(value) {
    return typeof value === 'string' && MAIL_ADDRESS_PATTERN.test(value);
}
function normalizeMailAddress(value) {
    return value.trim().toLowerCase();
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/mail/companyMailboxes.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "COMPANY_MAILBOXES",
    ()=>COMPANY_MAILBOXES,
    "COMPANY_MAILBOX_IDS",
    ()=>COMPANY_MAILBOX_IDS,
    "DEFAULT_SYSTEM_SENDER",
    ()=>DEFAULT_SYSTEM_SENDER,
    "INVOICE_MAIL_FROM_ENV",
    ()=>INVOICE_MAIL_FROM_ENV,
    "INVOICE_MAIL_TRANSPORT_ENV",
    ()=>INVOICE_MAIL_TRANSPORT_ENV,
    "MAILBOX_DEFAULT_ADDRESS",
    ()=>MAILBOX_DEFAULT_ADDRESS,
    "MAILBOX_LISTENER_DRY_RUN_ENV",
    ()=>MAILBOX_LISTENER_DRY_RUN_ENV,
    "MAILBOX_LISTENER_ENV",
    ()=>MAILBOX_LISTENER_ENV,
    "MAILBOX_PURPOSES",
    ()=>MAILBOX_PURPOSES,
    "MAILBOX_PURPOSE_AVAILABLE",
    ()=>MAILBOX_PURPOSE_AVAILABLE,
    "SMTP_REQUIRED_ENV",
    ()=>SMTP_REQUIRED_ENV,
    "deriveMailboxStatus",
    ()=>deriveMailboxStatus,
    "deriveMailboxStatuses",
    ()=>deriveMailboxStatuses,
    "extractMailAddress",
    ()=>extractMailAddress,
    "listenerEntries",
    ()=>listenerEntries,
    "resolveMailboxAddress",
    ()=>resolveMailboxAddress,
    "systemSenderFrom",
    ()=>systemSenderFrom
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * #1892: die Firmenpostfächer der Plattform — EINE typisierte Liste mit Zweck
 * und Adressquelle. Seite /mailing/postfaecher, Standard-CC (#1807) und der
 * Systemabsender (`lib/email.ts`) lesen dieselbe Liste; der Lauscher (#1733)
 * und der Belegversand (#1888) sollen sie ebenfalls lesen, sobald es sie gibt.
 *
 * Adressen stehen NICHT im Code: sie kommen je Umgebung aus Variablen
 * (GitLab-CI → env-Template → Container). Auf local/dev/stage stehen dort
 * Testpostfächer, auf live die echten Adressen. Ausnahmen sind die Rückfälle in
 * {@link MAILBOX_DEFAULT_ADDRESS}: der Standardwert des Systemabsenders, den
 * `lib/email.ts` schon immer hatte, und der öffentliche Meldeweg Sicherheit
 * (#2160, steht ohnehin in security.txt).
 *
 * Rein und ohne Server-Importe (die Umgebung wird hineingereicht), damit Tests,
 * Route und Middleware dieselbe Quelle lesen.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$mail$2f$address$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/mail/address.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$securityContact$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/securityContact.ts [app-client] (ecmascript)");
;
;
const MAILBOX_PURPOSES = [
    'inbound-cases',
    'sender-documents',
    'system-sender',
    'default-cc',
    'security-contact'
];
const COMPANY_MAILBOX_IDS = [
    'info',
    'accounting',
    'dispo3',
    'noreply',
    'dev'
];
const DEFAULT_SYSTEM_SENDER = '"plastship GmbH" <noreply@plastship.com>';
const COMPANY_MAILBOXES = {
    info: {
        purposes: [
            'inbound-cases'
        ],
        addressEnv: [
            'MAILBOX_INFO_ADDRESS'
        ],
        issues: [
            1598,
            1733
        ]
    },
    accounting: {
        purposes: [
            'inbound-cases',
            'sender-documents',
            'default-cc'
        ],
        addressEnv: [
            'MAIL_DEFAULT_CC_ACCOUNTING'
        ],
        issues: [
            1733,
            1807,
            1888
        ]
    },
    dispo3: {
        purposes: [
            'inbound-cases',
            'default-cc'
        ],
        addressEnv: [
            'MAIL_DEFAULT_CC_DISPO'
        ],
        issues: [
            1733,
            1807
        ]
    },
    noreply: {
        purposes: [
            'system-sender'
        ],
        addressEnv: [
            'SMTP_FROM',
            'EMAIL_FROM'
        ],
        issues: []
    },
    // #2160: Meldeweg Sicherheit (security.txt, #2141) und technische Rückfragen
    dev: {
        purposes: [
            'security-contact'
        ],
        addressEnv: [
            'MAILBOX_DEV_ADDRESS'
        ],
        issues: [
            2141
        ]
    }
};
const MAILBOX_PURPOSE_AVAILABLE = {
    'inbound-cases': false,
    // #1888: Belegversand aus dem Buchhaltungspostfach (lib/mail/invoiceSender.ts)
    'sender-documents': true,
    'system-sender': true,
    'default-cc': true,
    // #2160: nur Anzeige der Adresse, kein Weg dahinter
    'security-contact': true
};
const MAILBOX_DEFAULT_ADDRESS = {
    noreply: DEFAULT_SYSTEM_SENDER,
    dev: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$securityContact$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SECURITY_CONTACT_ADDRESS"]
};
const MAILBOX_LISTENER_ENV = 'MAILBOX_CASE_LISTENER';
const MAILBOX_LISTENER_DRY_RUN_ENV = 'MAILBOX_CASE_DRY_RUN';
const INVOICE_MAIL_FROM_ENV = 'INVOICE_MAIL_FROM';
const INVOICE_MAIL_TRANSPORT_ENV = 'INVOICE_MAIL_TRANSPORT';
const SMTP_REQUIRED_ENV = [
    'SMTP_HOST',
    'SMTP_USER',
    'SMTP_PASS'
];
/** Erste Variable der Kette mit Inhalt — roher Wert (getrimmt) oder null. */ function firstSet(env, keys) {
    for (const key of keys){
        const value = env[key]?.trim();
        if (value) return value;
    }
    return null;
}
function extractMailAddress(raw) {
    if (!raw) return null;
    const angle = raw.match(/<([^<>]+)>/);
    const candidates = angle ? [
        angle[1]
    ] : raw.split(/[,;]/);
    for (const candidate of candidates){
        const address = candidate.trim().toLowerCase();
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$mail$2f$address$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMailAddress"])(address)) return address;
    }
    return null;
}
function systemSenderFrom(env = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env) {
    return env[COMPANY_MAILBOXES.noreply.addressEnv[0]] || env[COMPANY_MAILBOXES.noreply.addressEnv[1]] || DEFAULT_SYSTEM_SENDER;
}
function resolveMailboxAddress(id, env = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env) {
    const keys = COMPANY_MAILBOXES[id].addressEnv;
    for (const key of keys){
        const address = extractMailAddress(env[key]?.trim());
        if (address) return {
            address,
            source: 'env',
            envKey: key
        };
    }
    const fallback = extractMailAddress(MAILBOX_DEFAULT_ADDRESS[id]);
    if (fallback) return {
        address: fallback,
        source: 'default',
        envKey: null
    };
    return {
        address: null,
        source: 'missing',
        envKey: null
    };
}
const TRUTHY = new Set([
    '1',
    'true',
    'yes',
    'on',
    'ja'
]);
function isTruthy(raw) {
    return TRUTHY.has((raw ?? '').trim().toLowerCase());
}
function listenerEntries(env = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env) {
    const raw = env[MAILBOX_LISTENER_ENV] ?? '';
    return new Set(raw.split(/[,;\s]+/).map((part)=>part.trim().toLowerCase()).filter(Boolean));
}
function listenerStatus(id, address, env) {
    const entries = listenerEntries(env);
    const active = entries.has(id) || address !== null && entries.has(address);
    const state = !active ? 'off' : isTruthy(env[MAILBOX_LISTENER_DRY_RUN_ENV]) ? 'dry-run' : 'on';
    return {
        state,
        available: MAILBOX_PURPOSE_AVAILABLE['inbound-cases'],
        lastFetchAt: null,
        errorCount: null
    };
}
function sendingStatus(purposes, address, env) {
    const smtp = SMTP_REQUIRED_ENV.every((key)=>Boolean(env[key]?.trim()));
    if (purposes.includes('system-sender')) {
        return {
            state: smtp && address ? 'configured' : 'not-configured',
            verified: false
        };
    }
    // sender-documents (#1888): Rückweg `personal` → der Firmenweg ist aus
    if (!MAILBOX_PURPOSE_AVAILABLE['sender-documents'] || env[INVOICE_MAIL_TRANSPORT_ENV]?.trim().toLowerCase() === 'personal') {
        return {
            state: 'planned',
            verified: false
        };
    }
    const sender = extractMailAddress(env[INVOICE_MAIL_FROM_ENV]?.trim()) ?? address;
    return {
        state: smtp && sender ? 'configured' : 'not-configured',
        verified: false
    };
}
function deriveMailboxStatus(id, env = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env) {
    const definition = COMPANY_MAILBOXES[id];
    const purposes = definition.purposes;
    const { address, source, envKey } = resolveMailboxAddress(id, env);
    const sends = purposes.includes('system-sender') || purposes.includes('sender-documents');
    return {
        id,
        purposes: [
            ...purposes
        ],
        address,
        addressSource: source,
        addressEnv: envKey,
        listener: purposes.includes('inbound-cases') ? listenerStatus(id, address, env) : null,
        sending: sends ? sendingStatus(purposes, address, env) : null,
        defaultCcConfigured: purposes.includes('default-cc') ? source === 'env' : null,
        issues: [
            ...definition.issues
        ]
    };
}
function deriveMailboxStatuses(ids, env = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env) {
    return COMPANY_MAILBOX_IDS.filter((id)=>ids.includes(id)).map((id)=>deriveMailboxStatus(id, env));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/mail/defaultCc.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_CC_ENV_KEYS",
    ()=>DEFAULT_CC_ENV_KEYS,
    "DEFAULT_CC_OBJECTS",
    ()=>DEFAULT_CC_OBJECTS,
    "defaultCcFor",
    ()=>defaultCcFor,
    "isValidCcList",
    ()=>isValidCcList,
    "readDefaultCcFromEnv",
    ()=>readDefaultCcFromEnv
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$mail$2d$templates$2f$mailTemplateRegistry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/mail-templates/mailTemplateRegistry.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$mail$2f$address$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/mail/address.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$mail$2f$companyMailboxes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/mail/companyMailboxes.ts [app-client] (ecmascript)");
;
;
;
const DEFAULT_CC_OBJECTS = {
    Order: 'dispo',
    Sample_Sending__c: 'dispo',
    Abrechnung__c: 'accounting'
};
const DEFAULT_CC_ENV_KEYS = {
    dispo: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$mail$2f$companyMailboxes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMPANY_MAILBOXES"].dispo3.addressEnv[0],
    accounting: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$mail$2f$companyMailboxes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMPANY_MAILBOXES"].accounting.addressEnv[0]
};
;
function isValidCcList(value) {
    return Array.isArray(value) && value.every(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$mail$2f$address$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMailAddress"]);
}
/** Kommagetrennte Liste → getrimmte, kleingeschriebene, gültige, eindeutige Adressen. */ function parseAddresses(raw) {
    if (!raw) return [];
    const addresses = raw.split(/[,;]/).map((part)=>part.trim().toLowerCase()).filter((part)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$mail$2f$address$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMailAddress"])(part));
    return [
        ...new Set(addresses)
    ];
}
function readDefaultCcFromEnv(env = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env) {
    const result = {};
    for (const [objectName, mailbox] of Object.entries(DEFAULT_CC_OBJECTS)){
        const addresses = parseAddresses(env[DEFAULT_CC_ENV_KEYS[mailbox]]);
        if (addresses.length > 0) result[objectName] = addresses;
    }
    return result;
}
function defaultCcFor(map, objectName) {
    if (!map || !objectName) return [];
    const addresses = map[(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$mail$2d$templates$2f$mailTemplateRegistry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveMailEntityApiName"])(objectName)];
    return Array.isArray(addresses) ? addresses.filter(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$mail$2f$address$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMailAddress"]) : [];
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/mail/mailAttachmentLimits.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * #1651: Grenzen für Anhänge beim Mailversand aus dem Versand-Modal
 * (/api/entity-pdf/send) — Server prüft, Client zeigt sie vorab an.
 */ /** Höchstens so viele zusätzliche Anhänge (neben dem erzeugten PDF) je Mail */ __turbopack_context__.s([
    "MAX_EXTRA_MAIL_ATTACHMENTS",
    ()=>MAX_EXTRA_MAIL_ATTACHMENTS,
    "MAX_MAIL_ATTACHMENT_BYTES",
    ()=>MAX_MAIL_ATTACHMENT_BYTES
]);
const MAX_EXTRA_MAIL_ATTACHMENTS = 10;
const MAX_MAIL_ATTACHMENT_BYTES = 3 * 1024 * 1024;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/mail/signature.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_PERSONAL_TEMPLATE",
    ()=>DEFAULT_PERSONAL_TEMPLATE,
    "EXCHANGE_DISCLAIMER_MAX_LENGTH",
    ()=>EXCHANGE_DISCLAIMER_MAX_LENGTH,
    "EXCHANGE_TOKENS",
    ()=>EXCHANGE_TOKENS,
    "SIGNATURE_CAMPAIGN_NAME_MAX",
    ()=>SIGNATURE_CAMPAIGN_NAME_MAX,
    "SIGNATURE_COLORS",
    ()=>SIGNATURE_COLORS,
    "SIGNATURE_GREETING_MAX_LENGTH",
    ()=>SIGNATURE_GREETING_MAX_LENGTH,
    "SIGNATURE_GREETING_MAX_LINES",
    ()=>SIGNATURE_GREETING_MAX_LINES,
    "SIGNATURE_PLACEHOLDERS",
    ()=>SIGNATURE_PLACEHOLDERS,
    "SIGNATURE_TEMPLATE_MAX_LENGTH",
    ()=>SIGNATURE_TEMPLATE_MAX_LENGTH,
    "SIGNATURE_TEMPLATE_MAX_LINES",
    ()=>SIGNATURE_TEMPLATE_MAX_LINES,
    "appendSignature",
    ()=>appendSignature,
    "bodyToHtml",
    ()=>bodyToHtml,
    "buildCompanyBlock",
    ()=>buildCompanyBlock,
    "buildPersonalBlock",
    ()=>buildPersonalBlock,
    "buildSignatureHtml",
    ()=>buildSignatureHtml,
    "buildSignaturePlainText",
    ()=>buildSignaturePlainText,
    "buildSignatureText",
    ()=>buildSignatureText,
    "effectiveTemplate",
    ()=>effectiveTemplate,
    "findActiveCampaign",
    ()=>findActiveCampaign,
    "greetingLines",
    ()=>greetingLines,
    "isCampaignActive",
    ()=>isCampaignActive,
    "isPlainEmail",
    ()=>isPlainEmail,
    "markdownLinksToPlain",
    ()=>markdownLinksToPlain,
    "renderExchangeSignature",
    ()=>renderExchangeSignature,
    "renderSignature",
    ()=>renderSignature,
    "safeSignatureHref",
    ()=>safeSignatureHref,
    "validatePersonalTemplate",
    ()=>validatePersonalTemplate
]);
/**
 * #1018: Mail-Signatur aus Profil + Firmen-Block (eine Quelle: company.json).
 * Format wie die heutige Outlook-Signatur; leere Profilfelder lassen ihre
 * Zeile weg, der Firmen-Block steht immer.
 *
 * #1658: Die Signatur steht nicht mehr im editierbaren Textfeld. Der Server
 * hängt sie beim Versand als HTML an (`buildSignatureHtml`, Bilder als
 * CID-Anhänge aus lib/mailSignature); das Versand-Modal zeigt dieselbe
 * Fassung als Vorschau. `buildSignaturePlainText` ist die Klartext-Fassung
 * (Kopieren, Vorschau). Reine Funktionen — Client und Server nutzen sie.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$company$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/company.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/theme.ts [app-client] (ecmascript)");
;
;
const has = (v)=>typeof v === 'string' && v.trim() !== '';
const SIGNATURE_PLACEHOLDERS = [
    'name',
    'firstName',
    'lastName',
    'title',
    'companyName',
    'street',
    'postalCode',
    'city',
    'country',
    'phone',
    'mobilePhone',
    'email',
    'web'
];
const DEFAULT_PERSONAL_TEMPLATE = [
    '{{name}}',
    '{{title}}',
    '{{companyName}}',
    '{{street}}',
    '{{postalCode}} {{city}}',
    '{{country}}',
    'Tel.: {{phone}}',
    'Mobil: {{mobilePhone}}',
    'E-Mail: {{email}}',
    'Web: {{web}}'
].join('\n');
const SIGNATURE_TEMPLATE_MAX_LENGTH = 2000;
const SIGNATURE_TEMPLATE_MAX_LINES = 30;
const PLACEHOLDER_PATTERN = /\{\{\s*([A-Za-z]+)\s*\}\}/g;
const isPlaceholder = (value)=>SIGNATURE_PLACEHOLDERS.includes(value);
function validatePersonalTemplate(template) {
    if (template.length > SIGNATURE_TEMPLATE_MAX_LENGTH) {
        return {
            code: 'too_long',
            max: SIGNATURE_TEMPLATE_MAX_LENGTH
        };
    }
    if (template.split(/\r?\n/).length > SIGNATURE_TEMPLATE_MAX_LINES) {
        return {
            code: 'too_many_lines',
            max: SIGNATURE_TEMPLATE_MAX_LINES
        };
    }
    const unknown = new Set();
    for (const m of template.matchAll(PLACEHOLDER_PATTERN)){
        if (!isPlaceholder(m[1])) unknown.add(m[1]);
    }
    return unknown.size > 0 ? {
        code: 'unknown_placeholder',
        placeholders: [
            ...unknown
        ]
    } : null;
}
function effectiveTemplate(template) {
    return has(template) ? template : DEFAULT_PERSONAL_TEMPLATE;
}
/** Werte der Platzhalter aus dem Profil, mit den Rückfällen aus company.json. */ function profileValues(profile) {
    const fullName = [
        profile.firstName,
        profile.lastName
    ].filter(has).join(' ') || profile.name || '';
    const cityFromProfile = has(profile.city);
    return {
        name: fullName.trim(),
        firstName: profile.firstName?.trim() ?? '',
        lastName: profile.lastName?.trim() ?? '',
        title: profile.title?.trim() ?? '',
        companyName: has(profile.companyName) ? profile.companyName.trim() : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$company$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMPANY"].name,
        street: has(profile.street) ? profile.street.trim() : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$company$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMPANY"].street,
        // Postleitzahl und Ort gehören zusammen: ohne Ort im Profil beide aus company.json
        postalCode: cityFromProfile ? profile.postalCode?.trim() ?? '' : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$company$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMPANY"].postcode,
        city: cityFromProfile ? profile.city?.trim() ?? '' : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$company$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMPANY"].city,
        country: has(profile.country) ? profile.country.trim() : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$company$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMPANY"].country,
        phone: profile.phone?.trim() ?? '',
        mobilePhone: profile.mobilePhone?.trim() ?? '',
        email: profile.email?.trim() ?? '',
        web: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$company$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMPANY"].web
    };
}
const EXCHANGE_TOKENS = {
    name: '%%DisplayName%%',
    firstName: '%%FirstName%%',
    lastName: '%%LastName%%',
    title: '%%Title%%',
    companyName: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$company$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMPANY"].name,
    street: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$company$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMPANY"].street,
    postalCode: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$company$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMPANY"].postcode,
    city: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$company$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMPANY"].city,
    country: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$company$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMPANY"].country,
    phone: '%%Phone%%',
    mobilePhone: '%%MobilePhone%%',
    email: '%%WindowsEmailAddress%%',
    web: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$company$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMPANY"].web
};
const NAME_PLACEHOLDERS = [
    'name',
    'firstName',
    'lastName'
];
const CONTACT_LINE = /^([^{}:]{1,40}):\s*(.*)$/;
function fill(line, values) {
    const used = [];
    let anyValue = false;
    const text = line.replace(PLACEHOLDER_PATTERN, (_m, key)=>{
        used.push(key);
        const value = isPlaceholder(key) ? values[key] : '';
        if (value !== '') anyValue = true;
        return value;
    });
    return {
        text: text.replace(/[ \t]+/g, ' ').trim(),
        used,
        empty: used.length > 0 && !anyValue
    };
}
/**
 * #1683: Vorlage → Einträge. Eine Zeile, deren Platzhalter alle leer sind,
 * fällt weg (wie bisher „Tel.“ ohne Nummer); leere Zeilen ebenso. Die Art
 * (und damit das Aussehen im HTML) folgt dem ersten Platzhalter der Zeile;
 * `Label: {{…}}` wird eine Kontaktzeile, `{{email}}` ein mailto-Link,
 * `{{web}}` ein Link auf die Firmenseite.
 */ function buildPersonalEntries(profile, template = DEFAULT_PERSONAL_TEMPLATE, values = profileValues(profile)) {
    const entries = [];
    for (const line of template.split(/\r?\n/)){
        const contact = CONTACT_LINE.exec(line.trim());
        if (contact && /\{\{/.test(contact[2])) {
            const filled = fill(contact[2], values);
            if (filled.empty || filled.text === '') continue;
            const only = contact[2].trim().replace(PLACEHOLDER_PATTERN, (_m, k)=>`#${k}#`);
            const entry = {
                kind: 'contact',
                label: contact[1].trim(),
                value: filled.text
            };
            // #1985: mailto nur für eine schlichte Adresse (keine ?bcc=…, kein Schema-Trick)
            if (only === '#email#' && isPlainEmail(filled.text)) entry.href = `mailto:${filled.text}`;
            if (only === '#web#') {
                entry.href = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$company$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMPANY"].webUrl;
                entry.markdown = true;
            }
            entries.push(entry);
            continue;
        }
        const filled = fill(line, values);
        if (filled.empty || filled.text === '') continue;
        const first = filled.used[0];
        const kind = first && NAME_PLACEHOLDERS.includes(first) ? 'name' : first === 'title' ? 'title' : first === 'companyName' ? 'company' : 'address';
        entries.push({
            kind,
            value: filled.text
        });
    }
    return entries;
}
function entryLines(entries) {
    return entries.map((entry)=>{
        if (entry.kind !== 'contact') return entry.value;
        // Nur Web steht als Markdown-Link; E-Mail bleibt im Klartext wie bisher
        return entry.markdown && entry.href ? `${entry.label}: [${entry.value}](${entry.href})` : `${entry.label}: ${entry.value}`;
    });
}
function buildPersonalBlock(profile, template = DEFAULT_PERSONAL_TEMPLATE) {
    return entryLines(buildPersonalEntries(profile, template));
}
function buildCompanyBlock() {
    return [
        `[E-Mail-Disclaimer](${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$company$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMPANY"].disclaimerUrl}), [Data Security](${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$company$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMPANY"].dataProtectionUrl})`,
        `Geschäftsführer: ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$company$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMPANY"].gf}`,
        `Sitz der Gesellschaft: ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$company$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMPANY"].seat}, ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$company$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMPANY"].registerCourt}, ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$company$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMPANY"].hrb}`
    ];
}
function buildSignatureText(profile, template = DEFAULT_PERSONAL_TEMPLATE, greeting = []) {
    const campaign = greeting.length > 0 ? [
        '',
        ...greeting
    ] : [];
    return [
        ...buildPersonalBlock(profile, template),
        ...campaign,
        '',
        ...buildCompanyBlock()
    ].join('\n');
}
function appendSignature(body, profile) {
    const trimmed = body.replace(/\s+$/, '');
    return `${trimmed}\n\n${buildSignatureText(profile)}`;
}
const escapeHtml = (s)=>s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
/** #1985: schlichte Mailadresse — Voraussetzung für einen mailto-Link. */ const PLAIN_EMAIL = /^[A-Za-z0-9._%+-]{1,64}@[A-Za-z0-9.-]{1,253}\.[A-Za-z]{2,63}$/;
/** Exchange-Platzhalter der Transportregel (#1683), z. B. %%WindowsEmailAddress%%. */ const EXCHANGE_TOKEN = /^%%[A-Za-z]+%%$/;
const isPlainEmail = (value)=>PLAIN_EMAIL.test(value.trim()) || EXCHANGE_TOKEN.test(value.trim());
function safeSignatureHref(value) {
    if (!value) return null;
    const raw = value.trim();
    if (raw.toLowerCase().startsWith('mailto:')) return isPlainEmail(raw.slice(7)) ? raw : null;
    try {
        const url = new URL(raw);
        return url.protocol === 'https:' ? url.href : null;
    } catch  {
        return null;
    }
}
const MARKDOWN_LINK = /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g;
function bodyToHtml(text, linkStyle) {
    const styleAttr = linkStyle ? ` style="${escapeHtml(linkStyle)}"` : '';
    const parts = [];
    let last = 0;
    for (const m of text.matchAll(MARKDOWN_LINK)){
        parts.push(escapeHtml(text.slice(last, m.index)));
        parts.push(`<a href="${escapeHtml(m[2])}"${styleAttr}>${escapeHtml(m[1])}</a>`);
        last = (m.index ?? 0) + m[0].length;
    }
    parts.push(escapeHtml(text.slice(last)));
    return parts.join('').replace(/\r?\n/g, '<br/>');
}
function markdownLinksToPlain(text) {
    return text.replace(MARKDOWN_LINK, (_m, label, url)=>`${label} <${url}>`);
}
function buildSignaturePlainText(profile) {
    return markdownLinksToPlain(buildSignatureText(profile));
}
/**
 * #1866: Farben des Corporate Designs aus dem Theme (eine Quelle), nicht
 * abgetippt. Navy für Name, Links und Trennlinie, Grün als Akzentkante.
 */ const palette = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["themePlastship"].palette;
const SIGNATURE_COLORS = {
    navy: palette.default.primary,
    green: palette.default.secondary,
    greyDark: palette.default.greyDark,
    text: palette.text.primary,
    textSecondary: palette.text.secondary
};
/**
 * Schriftstapel: Roboto wie in der App, sonst Arial. Inline-CSS, weil
 * Mailprogramme kein <style> zuverlässig lesen.
 */ const FONT = "font-family:'Roboto',Arial,Helvetica,sans-serif;";
const TEXT_STYLE = `${FONT}font-size:13px;line-height:1.5;color:${SIGNATURE_COLORS.text};`;
const SMALL_STYLE = `${FONT}font-size:11px;line-height:1.45;color:${SIGNATURE_COLORS.greyDark};`;
const LINK_STYLE = `color:${SIGNATURE_COLORS.navy};text-decoration:none;`;
const NAME_STYLE = `font-weight:700;font-size:15px;color:${SIGNATURE_COLORS.navy};`;
const TITLE_STYLE = `color:${SIGNATURE_COLORS.textSecondary};`;
const COMPANY_STYLE = `font-weight:700;color:${SIGNATURE_COLORS.text};`;
const LABEL_STYLE = `color:${SIGNATURE_COLORS.textSecondary};`;
const VALUE_STYLE = `color:${SIGNATURE_COLORS.text};`;
/** Breite der Trennlinie = Bannerbreite, damit Linie und Banner bündig enden. */ const DIVIDER_WIDTH = 560;
/** #1683: Banner der Kampagne in der Exchange-Regel — so breit wie die Linie. */ const SIGNATURE_BANNER_WIDTH = DIVIDER_WIDTH;
/** #1683: Grußzeile der Kampagne — Navy, etwas größer als der Fließtext. */ const GREETING_STYLE = `font-size:14px;line-height:1.5;color:${SIGNATURE_COLORS.navy};`;
/** #1866: Eine Zeile des persönlichen Blocks als HTML (alle Texte maskiert). */ function personalEntryHtml(entry) {
    const value = escapeHtml(entry.value);
    switch(entry.kind){
        case 'name':
            return `<span style="${NAME_STYLE}">${value}</span>`;
        case 'title':
            return `<span style="${TITLE_STYLE}">${value}</span>`;
        case 'company':
            return `<span style="${COMPANY_STYLE}">${value}</span>`;
        case 'address':
            return `<span style="${VALUE_STYLE}">${value}</span>`;
        case 'contact':
            {
                const href = safeSignatureHref(entry.href);
                const shown = href ? `<a href="${escapeHtml(href)}" style="${LINK_STYLE}">${value}</a>` : `<span style="${VALUE_STYLE}">${value}</span>`;
                return `<span style="${LABEL_STYLE}">${escapeHtml(entry.label)}:</span> ${shown}`;
            }
    }
}
function imgTag(image, extraStyle = '') {
    const width = Math.round(image.width);
    // #1683: Höhe 0 = unbekannt (Bild per URL in der Exchange-Regel) → automatisch
    const height = Math.round(image.height);
    const heightAttr = height > 0 ? ` height="${height}"` : '';
    const heightStyle = height > 0 ? `${height}px` : 'auto';
    return `<img src="${escapeHtml(image.src)}" width="${width}"${heightAttr} ` + `alt="${escapeHtml(image.alt)}" ` + `style="display:block;border:0;text-decoration:none;` + `width:${width}px;height:${heightStyle};${extraStyle}"/>`;
}
/**
 * #1683: Bausteine des HTML; eine Funktion für App-Mails und Exchange-Export.
 * #1985 (Signatur-Parität): nur Tags, Attribute und Stile, die die
 * HTML-Richtlinie (lib/security/htmlPolicy.ts, Modus `own`) unverändert
 * durchlässt — kein data-*, kein outline; `role="presentation"` an den
 * Layout-Tabellen lässt sie zu (Bildschirmleser in Outlook). Sonst sähe die Vorschau
 * (sanitisiert) anders aus als die gesendete Mail (roh). Wächter:
 * src/tests/lib/mailSignature/parity.test.ts.
 */ function composeSignatureHtml(entries, images, campaign) {
    const personalHtml = entries.map(personalEntryHtml).join('<br/>');
    const companyHtml = buildCompanyBlock().map((line)=>bodyToHtml(line, LINK_STYLE)).join('<br/>');
    const profileCell = images.profile ? `<td style="vertical-align:top;padding:0 16px 0 0;">${imgTag(images.profile)}</td>` : '';
    const parts = [
        `<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">` + `<tr>${profileCell}<td style="vertical-align:top;${TEXT_STYLE}border-left:3px solid ${SIGNATURE_COLORS.green};padding-left:14px;">${personalHtml}</td></tr>` + `</table>`
    ];
    if (images.logo) {
        parts.push(`<div style="padding:12px 0 0 0;">${imgTag(images.logo)}</div>`);
    }
    // #1683: Kampagne zwischen Persönlich-Block (samt Logo) und Pflichtangaben
    if (campaign && (campaign.greeting.length > 0 || campaign.banner)) {
        const greetingHtml = campaign.greeting.map((line)=>escapeHtml(line)).join('<br/>');
        const banner = campaign.banner ? bannerHtml(campaign.banner) : '';
        parts.push(`<div style="padding:12px 0 0 0;${TEXT_STYLE}">` + (greetingHtml ? `<div style="${GREETING_STYLE}">${greetingHtml}</div>` : '') + banner + `</div>`);
    }
    // #1866: Navy-Trennlinie wie in den PDF-Vorlagen, darunter die Pflichtangaben
    parts.push(// Tabelle statt div: Outlook Desktop (Word) hält nur so die feste Breite ein
    `<div style="padding:12px 0 0 0;">` + `<table role="presentation" width="${DIVIDER_WIDTH}" cellpadding="0" cellspacing="0" border="0" ` + `style="width:${DIVIDER_WIDTH}px;max-width:100%;border-collapse:collapse;"><tr>` + `<td style="border-top:2px solid ${SIGNATURE_COLORS.navy};font-size:0;line-height:0;">&nbsp;</td></tr></table></div>`, `<div style="padding:8px 0 0 0;${SMALL_STYLE}">${companyHtml}</div>`);
    for (const banner of images.banners ?? []){
        parts.push(`<div style="padding:12px 0 0 0;">${bannerHtml(banner, false)}</div>`);
    }
    return `<div style="${TEXT_STYLE}"><br/>${parts.join('')}</div>`;
}
function bannerHtml(banner, wrap = true) {
    const img = imgTag(banner, 'max-width:100%;');
    const bannerHref = safeSignatureHref(banner.href);
    const linked = bannerHref ? `<a href="${escapeHtml(bannerHref)}">${img}</a>` : img;
    return wrap ? `<div style="padding:8px 0 0 0;">${linked}</div>` : linked;
}
function buildSignatureHtml(profile, images = {}) {
    return composeSignatureHtml(buildPersonalEntries(profile), images, null);
}
const SIGNATURE_GREETING_MAX_LINES = 3;
const SIGNATURE_GREETING_MAX_LENGTH = 600;
const SIGNATURE_CAMPAIGN_NAME_MAX = 120;
const toTime = (value)=>value instanceof Date ? value.getTime() : new Date(value).getTime();
function isCampaignActive(campaign, now) {
    if (!campaign.enabled) return false;
    const start = toTime(campaign.startsAt);
    const end = toTime(campaign.endsAt);
    const t = now.getTime();
    return Number.isFinite(start) && Number.isFinite(end) && start <= t && t < end;
}
function findActiveCampaign(campaigns, now) {
    let winner = null;
    for (const campaign of campaigns){
        if (!isCampaignActive(campaign, now)) continue;
        if (!winner || toTime(campaign.startsAt) > toTime(winner.startsAt)) winner = campaign;
    }
    return winner;
}
function greetingLines(greeting) {
    if (!greeting) return [];
    return greeting.split(/\r?\n/).map((line)=>line.replace(/[\u0000-\u001f\u007f]/g, ' ').trim()).filter((line)=>line !== '').slice(0, SIGNATURE_GREETING_MAX_LINES);
}
function renderSignature(profile, settings, campaigns, now, images = {}) {
    const template = effectiveTemplate(settings?.personalTemplate);
    const campaign = findActiveCampaign(campaigns, now);
    const greeting = greetingLines(campaign?.greeting);
    const { campaignBanner, ...rest } = images;
    const html = composeSignatureHtml(buildPersonalEntries(profile, template), rest, campaign ? {
        greeting,
        banner: campaignBanner ?? null
    } : null);
    const text = markdownLinksToPlain(buildSignatureText(profile, template, greeting));
    return {
        text,
        html,
        campaignId: campaign?.id ?? null
    };
}
const EXCHANGE_DISCLAIMER_MAX_LENGTH = 5000;
function renderExchangeSignature({ settings, campaign, logo }) {
    const template = effectiveTemplate(settings?.personalTemplate);
    const entries = buildPersonalEntries({}, template, {
        ...EXCHANGE_TOKENS
    });
    const banner = campaign?.bannerUrl ? {
        src: campaign.bannerUrl,
        width: SIGNATURE_BANNER_WIDTH,
        height: 0,
        alt: campaign.name,
        href: campaign.bannerHref ?? null
    } : null;
    const html = composeSignatureHtml(entries, {
        logo: logo ?? null
    }, campaign ? {
        greeting: greetingLines(campaign.greeting),
        banner
    } : null);
    return {
        html,
        length: html.length,
        maxLength: EXCHANGE_DISCLAIMER_MAX_LENGTH,
        withinLimit: html.length <= EXCHANGE_DISCLAIMER_MAX_LENGTH
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/material-analysis/statusConfig.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Canonical Material Analysis Kanban status configuration.
 *
 * SINGLE SOURCE OF TRUTH (#341) for the MaterialAnalysesKanban board columns and
 * the Status filter options. Both the `statusColumns` used to render the board
 * and the `Status__c` filter option list in `MaterialAnalysesKanban.tsx` MUST
 * derive from this array so they can never drift apart.
 *
 * The two lists were already synchronized here (no drift) — this module simply
 * deduplicates them into one source per #341.
 *
 * Do not inline copies of this list in components; import it from here.
 */ __turbopack_context__.s([
    "MATERIAL_ANALYSIS_STATUS_COLUMNS",
    ()=>MATERIAL_ANALYSIS_STATUS_COLUMNS
]);
const MATERIAL_ANALYSIS_STATUS_COLUMNS = [
    {
        key: 'Offen',
        label: 'Offen'
    },
    {
        key: 'Beauftragt',
        label: 'Beauftragt'
    },
    {
        key: 'Übergeben (plastship an DL)',
        label: 'Übergeben'
    },
    {
        key: 'in Arbeit',
        label: 'In Arbeit'
    },
    {
        key: 'On hold',
        label: 'On Hold'
    },
    {
        key: 'Abgeschlossen (Dienstleister)',
        label: 'Abgeschlossen (DL)'
    },
    {
        key: 'QC ok (plastship)',
        label: 'QC OK'
    },
    {
        key: 'Veröffentlicht (plastship)',
        label: 'Veröffentlicht'
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/material-vision/flake-presets.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Flake presets — the canonical archetype library for material rendering.
 *
 * One predefined flake/pellet archetype per AI shape category
 * (`PRIMARY_SHAPE_VALUES`), derived from our material-vision data: the three
 * fully-analyzed production materials (MM 3232 / 2619 / 2686, see
 * RenderDemoContent), the GPT-4o calibration examples (ai-vision.ts) and the
 * form/parameter tables in analysis-context.md.
 *
 * Consumed by BOTH render paths:
 *  - 3D: Material3DRenderer (geometry type, scale range, parameter defaults)
 *  - 2D: /api/material-thumbnail (particle silhouette + size band)
 *
 * IMPORTANT: this module must stay client-safe — pure data and pure functions,
 * no runtime imports (it is imported from API routes AND 'use client'
 * components). The enums below are the single source of truth; ai-vision.ts
 * re-exports them for the analysis pipeline.
 *
 * All exported objects are deep-frozen module-level constants. This is load-
 * bearing: Material3DRenderer's `flakes` useMemo compares `renderingParams`
 * by identity, so handing out fresh objects per call would regenerate every
 * particle on every render.
 */ // ─── Enums (single source of truth for AI output validation + rendering) ────
/** German production-form categories (Salesforce `form` field domain). */ __turbopack_context__.s([
    "FLAKE_PRESETS",
    ()=>FLAKE_PRESETS,
    "FORM_MATCHERS",
    ()=>FORM_MATCHERS,
    "FORM_VALUES",
    ()=>FORM_VALUES,
    "PRIMARY_SHAPE_VALUES",
    ()=>PRIMARY_SHAPE_VALUES,
    "SHAPE_TO_FORM",
    ()=>SHAPE_TO_FORM,
    "isPrimaryShape",
    ()=>isPrimaryShape,
    "resolveFlakePreset",
    ()=>resolveFlakePreset
]);
const FORM_VALUES = [
    'Flakes',
    'Regranulat',
    'Mahlgut',
    'Agglomerat',
    'Linsen',
    'Compound',
    'Neuware',
    'Ballenware'
];
const PRIMARY_SHAPE_VALUES = [
    'irregular_flakes',
    'uniform_pellets',
    'lens_pellets',
    'angular_chunks',
    'lumpy_agglomerate',
    'blocky_bales',
    'cylindrical_pellets',
    'elongated_shards',
    'flat_chips',
    'rounded_granules',
    'powder'
];
const SHAPE_TO_FORM = Object.freeze({
    irregular_flakes: 'Flakes',
    flat_chips: 'Flakes',
    uniform_pellets: 'Regranulat',
    cylindrical_pellets: 'Regranulat',
    lens_pellets: 'Linsen',
    rounded_granules: 'Regranulat',
    angular_chunks: 'Mahlgut',
    elongated_shards: 'Mahlgut',
    lumpy_agglomerate: 'Agglomerat',
    blocky_bales: 'Ballenware',
    powder: 'Mahlgut'
});
const SHAPE_SET = new Set(PRIMARY_SHAPE_VALUES);
function isPrimaryShape(value) {
    return typeof value === 'string' && SHAPE_SET.has(value);
}
const FORM_MATCHERS = Object.freeze([
    [
        'linsen',
        'lens_pellets'
    ],
    // The English spellings and the shape words below are not hypothetical: of
    // the 760 records that carry a Form__c at all, 388 used to match nothing and
    // fell through to the 2D default circle — 'Zylinder' 176, 'Lens shaped' 98,
    // 'Kugeln' 72, 'Cylindrical' 31, 'Spherical' 11.
    [
        'lens',
        'lens_pellets'
    ],
    [
        'zylinder',
        'cylindrical_pellets'
    ],
    [
        'cylindrical',
        'cylindrical_pellets'
    ],
    [
        'kugel',
        'uniform_pellets'
    ],
    [
        'spherical',
        'uniform_pellets'
    ],
    [
        'granulat',
        'uniform_pellets'
    ],
    [
        're-granulate',
        'uniform_pellets'
    ],
    [
        'compound',
        'uniform_pellets'
    ],
    [
        'masterbatch',
        'uniform_pellets'
    ],
    [
        'neuware',
        'uniform_pellets'
    ],
    [
        'flake',
        'irregular_flakes'
    ],
    [
        'ballen',
        'blocky_bales'
    ],
    [
        'mahlgut',
        'angular_chunks'
    ],
    [
        'agglomerat',
        'lumpy_agglomerate'
    ],
    [
        'pulver',
        'powder'
    ],
    [
        'powder',
        'powder'
    ],
    [
        'staub',
        'powder'
    ],
    [
        'rolle',
        'flat_chips'
    ],
    [
        'folie',
        'flat_chips'
    ],
    [
        'wertstoff',
        'angular_chunks'
    ]
]);
/**
 * Numeric sources:
 * - uniform_pellets / irregular_flakes / angular_chunks: verbatim from the
 *   real production analyses MM 3232 / 2619 / 2686 (RenderDemoContent).
 * - cylindrical_pellets / lens_pellets: GPT-4o calibration examples 1 and 3.
 * - Remaining archetypes: "Typical Rendering Params by Material" and the form
 *   physics table in analysis-context.md.
 * - thumb2d bands for granulat/agglomerat/ballen and the 2D fallback preset
 *   (rounded_granules) replicate the legacy getParticleShape ladder exactly
 *   so existing production thumbnails stay unchanged.
 */ const PRESET_DEFS = {
    uniform_pellets: {
        labelDe: 'Regranulat-Pellets',
        descriptionDe: 'Gleichmäßige, linsenförmig gerundete Pellets mit glatter, wachsiger Oberfläche — typisches Regranulat.',
        form: 'Regranulat',
        geometry3d: 'sphere',
        geometryVariants: 1,
        rendering3d: {
            roughness: 0.2,
            metalness: 0,
            clearcoat: 0.5,
            clearcoatRoughness: 0.15,
            transmission: 0.35,
            ior: 1.5,
            opacity: 0.85,
            particleSizeVariance: 0.05,
            particleShapeVariance: 0.05,
            colorVariance: 0.08,
            flatness: 0.4,
            particleSizeRangeMm: [
                2,
                3
            ],
            particleShape: 'uniform_pellets',
            aspectRatioLW: 1.1,
            aspectRatioHW: 0.6,
            edgeRoundness: 0.95,
            shapeRegularity: 0.95,
            sizeDistribution: 'uniform',
            sizeMedianMm: 2.5,
            sizeClasses: {
                fine_pct: 0,
                small_pct: 100,
                medium_pct: 0,
                large_pct: 0,
                oversize_pct: 0
            },
            finesPresent: false,
            realDishDiameterMm: 160,
            colorPattern: 'uniform_each_particle_one_color'
        },
        thumb2d: {
            type: 'circle',
            minSize: 15,
            maxSize: 29,
            flatness: 1.0,
            edgeRoundness: 0.95
        },
        materialTypes: [
            'Regranulat',
            'Compound',
            'Neuware',
            'Masterbatch'
        ]
    },
    cylindrical_pellets: {
        labelDe: 'Zylinder-Granulat',
        descriptionDe: 'Stranggranulat: kurze Zylinder mit flachen Schnittkappen, sehr einheitlich — frisch extrudiertes Granulat.',
        form: 'Regranulat',
        geometry3d: 'cylinder',
        geometryVariants: 1,
        rendering3d: {
            roughness: 0.26,
            metalness: 0,
            clearcoat: 0.48,
            clearcoatRoughness: 0.18,
            transmission: 0,
            ior: 1.49,
            opacity: 1,
            particleSizeVariance: 0.1,
            particleShapeVariance: 0.08,
            colorVariance: 0.1,
            flatness: 0.05,
            particleSizeRangeMm: [
                2,
                5
            ],
            particleShape: 'cylindrical_pellets',
            aspectRatioLW: 1.1,
            aspectRatioHW: 0.8,
            edgeRoundness: 0.9,
            shapeRegularity: 0.95,
            sizeDistribution: 'uniform',
            sizeMedianMm: 3,
            sizeClasses: {
                fine_pct: 0,
                small_pct: 90,
                medium_pct: 10,
                large_pct: 0,
                oversize_pct: 0
            },
            finesPresent: false,
            realDishDiameterMm: 160,
            colorPattern: 'uniform_each_particle_one_color'
        },
        thumb2d: {
            type: 'rect',
            minSize: 15,
            maxSize: 27,
            flatness: 0.75,
            edgeRoundness: 0.9
        },
        materialTypes: [
            'Regranulat'
        ]
    },
    lens_pellets: {
        labelDe: 'Linsen',
        descriptionDe: 'Bikonvexe, linsenförmige Pellets mit stark gerundeten Kanten und glänzender Oberfläche.',
        form: 'Linsen',
        geometry3d: 'sphere',
        geometryVariants: 1,
        rendering3d: {
            roughness: 0.18,
            metalness: 0,
            clearcoat: 0.65,
            clearcoatRoughness: 0.12,
            transmission: 0.2,
            ior: 1.51,
            opacity: 0.85,
            particleSizeVariance: 0.08,
            particleShapeVariance: 0.06,
            colorVariance: 0.06,
            flatness: 0.55,
            particleSizeRangeMm: [
                2.5,
                4
            ],
            particleShape: 'lens_pellets',
            aspectRatioLW: 1.0,
            aspectRatioHW: 0.45,
            edgeRoundness: 0.95,
            shapeRegularity: 0.92,
            sizeDistribution: 'uniform',
            sizeMedianMm: 3,
            sizeClasses: {
                fine_pct: 0,
                small_pct: 95,
                medium_pct: 5,
                large_pct: 0,
                oversize_pct: 0
            },
            finesPresent: false,
            realDishDiameterMm: 160,
            colorPattern: 'uniform_each_particle_one_color'
        },
        thumb2d: {
            type: 'circle',
            minSize: 16,
            maxSize: 24,
            flatness: 1.0,
            edgeRoundness: 0.95
        },
        materialTypes: []
    },
    rounded_granules: {
        labelDe: 'Rundgranulat',
        descriptionDe: 'Rundliche, leicht unregelmäßige Körner mit matter Oberfläche — Virgin-/Neuware-Granulat.',
        form: 'Regranulat',
        geometry3d: 'icosahedron',
        geometryVariants: 1,
        rendering3d: {
            roughness: 0.35,
            metalness: 0,
            clearcoat: 0.3,
            clearcoatRoughness: 0.25,
            transmission: 0,
            ior: 1.51,
            opacity: 1,
            particleSizeVariance: 0.15,
            particleShapeVariance: 0.12,
            colorVariance: 0.1,
            flatness: 0.1,
            particleSizeRangeMm: [
                2,
                4
            ],
            particleShape: 'rounded_granules',
            aspectRatioLW: 1.0,
            aspectRatioHW: 0.9,
            edgeRoundness: 0.85,
            shapeRegularity: 0.8,
            sizeDistribution: 'uniform',
            sizeMedianMm: 3,
            sizeClasses: {
                fine_pct: 0,
                small_pct: 85,
                medium_pct: 15,
                large_pct: 0,
                oversize_pct: 0
            },
            finesPresent: false,
            realDishDiameterMm: 160,
            colorPattern: 'uniform_each_particle_one_color'
        },
        // 2D fallback preset: replicates the legacy default branch (circle 19–37)
        // byte-identically so unknown forms keep today's thumbnails.
        thumb2d: {
            type: 'circle',
            minSize: 19,
            maxSize: 37,
            flatness: 1.0,
            edgeRoundness: 0.85
        },
        materialTypes: []
    },
    irregular_flakes: {
        labelDe: 'Flakes (unregelmäßig)',
        descriptionDe: 'Dünne, flach geschredderte Flakes mit scharfen, kantigen Rändern und stark streuender Größe.',
        form: 'Flakes',
        geometry3d: 'shard',
        geometryVariants: 5,
        rendering3d: {
            roughness: 0.25,
            metalness: 0,
            clearcoat: 0.4,
            clearcoatRoughness: 0.15,
            transmission: 0,
            ior: 1.5,
            opacity: 1,
            particleSizeVariance: 0.6,
            particleShapeVariance: 0.7,
            colorVariance: 0.3,
            flatness: 0.9,
            particleSizeRangeMm: [
                5,
                25
            ],
            particleShape: 'irregular_flakes',
            aspectRatioLW: 3.0,
            aspectRatioHW: 0.1,
            edgeRoundness: 0.15,
            shapeRegularity: 0.35,
            sizeDistribution: 'wide_spread',
            sizeMedianMm: 12,
            sizeClasses: {
                fine_pct: 3,
                small_pct: 20,
                medium_pct: 50,
                large_pct: 25,
                oversize_pct: 2
            },
            finesPresent: true,
            realDishDiameterMm: 160,
            colorPattern: 'uniform_each_particle_one_color'
        },
        thumb2d: {
            type: 'polygon',
            minSize: 21,
            maxSize: 45,
            flatness: 0.35,
            edgeRoundness: 0.15,
            sides: 6,
            irregularity: 0.35
        },
        materialTypes: [
            'Flakes'
        ]
    },
    flat_chips: {
        labelDe: 'Flache Chips',
        descriptionDe: 'Flache, teils transparente Chips mit gerundeten Kanten — z. B. PET-Flakes oder Folienschnitt.',
        form: 'Flakes',
        geometry3d: 'chip',
        geometryVariants: 5,
        rendering3d: {
            roughness: 0.3,
            metalness: 0,
            clearcoat: 0.5,
            clearcoatRoughness: 0.2,
            transmission: 0.6,
            ior: 1.57,
            opacity: 0.6,
            particleSizeVariance: 0.3,
            particleShapeVariance: 0.25,
            colorVariance: 0.1,
            flatness: 0.85,
            particleSizeRangeMm: [
                4,
                12
            ],
            particleShape: 'flat_chips',
            aspectRatioLW: 1.6,
            aspectRatioHW: 0.08,
            edgeRoundness: 0.4,
            shapeRegularity: 0.6,
            sizeDistribution: 'normal',
            sizeMedianMm: 8,
            sizeClasses: {
                fine_pct: 2,
                small_pct: 30,
                medium_pct: 55,
                large_pct: 13,
                oversize_pct: 0
            },
            finesPresent: false,
            realDishDiameterMm: 160,
            colorPattern: 'uniform_each_particle_one_color'
        },
        thumb2d: {
            type: 'polygon',
            minSize: 18,
            maxSize: 34,
            flatness: 0.5,
            edgeRoundness: 0.4,
            sides: 5,
            irregularity: 0.15
        },
        materialTypes: [
            'Rollenware',
            'Rolle auf Palette'
        ]
    },
    elongated_shards: {
        labelDe: 'Längliche Splitter',
        descriptionDe: 'Lange, schmale Bruchsplitter mit scharfen Kanten — spröde Polymere wie PS/ABS nach dem Schreddern.',
        form: 'Mahlgut',
        geometry3d: 'shard',
        geometryVariants: 5,
        rendering3d: {
            roughness: 0.45,
            metalness: 0,
            clearcoat: 0.15,
            clearcoatRoughness: 0.3,
            transmission: 0,
            ior: 1.59,
            opacity: 1,
            particleSizeVariance: 0.5,
            particleShapeVariance: 0.55,
            colorVariance: 0.2,
            flatness: 0.65,
            particleSizeRangeMm: [
                6,
                22
            ],
            particleShape: 'elongated_shards',
            aspectRatioLW: 3.5,
            aspectRatioHW: 0.35,
            edgeRoundness: 0.2,
            shapeRegularity: 0.3,
            sizeDistribution: 'wide_spread',
            sizeMedianMm: 12,
            sizeClasses: {
                fine_pct: 3,
                small_pct: 25,
                medium_pct: 45,
                large_pct: 25,
                oversize_pct: 2
            },
            finesPresent: true,
            realDishDiameterMm: 160,
            colorPattern: 'uniform_each_particle_one_color'
        },
        thumb2d: {
            type: 'polygon',
            minSize: 20,
            maxSize: 42,
            flatness: 0.3,
            edgeRoundness: 0.2,
            sides: 6,
            irregularity: 0.4
        },
        materialTypes: []
    },
    angular_chunks: {
        labelDe: 'Kantige Bruchstücke',
        descriptionDe: 'Kompakte, kantige Bruchstücke mit teils angeschmolzenen Rändern — klassisches Mahlgut.',
        form: 'Mahlgut',
        geometry3d: 'dodecahedron',
        geometryVariants: 1,
        rendering3d: {
            roughness: 0.5,
            metalness: 0,
            clearcoat: 0.15,
            clearcoatRoughness: 0.3,
            transmission: 0,
            ior: 1.49,
            opacity: 1,
            particleSizeVariance: 0.5,
            particleShapeVariance: 0.6,
            colorVariance: 0.25,
            flatness: 0.4,
            particleSizeRangeMm: [
                5,
                20
            ],
            particleShape: 'angular_chunks',
            aspectRatioLW: 1.5,
            aspectRatioHW: 0.5,
            edgeRoundness: 0.6,
            shapeRegularity: 0.4,
            sizeDistribution: 'wide_spread',
            sizeMedianMm: 10,
            sizeClasses: {
                fine_pct: 2,
                small_pct: 25,
                medium_pct: 55,
                large_pct: 18,
                oversize_pct: 0
            },
            finesPresent: false,
            realDishDiameterMm: 160,
            colorPattern: 'uniform_each_particle_one_color'
        },
        thumb2d: {
            type: 'polygon',
            minSize: 17,
            maxSize: 37,
            flatness: 0.7,
            edgeRoundness: 0.6,
            sides: 7,
            irregularity: 0.25
        },
        materialTypes: [
            'Mahlgut',
            'Wertstoff'
        ]
    },
    lumpy_agglomerate: {
        labelDe: 'Agglomerat-Klumpen',
        descriptionDe: 'Unregelmäßige, verschmolzene Klumpen mit rauer, poriger Oberfläche — agglomerierte Folien.',
        form: 'Agglomerat',
        geometry3d: 'lump',
        geometryVariants: 5,
        rendering3d: {
            roughness: 0.8,
            metalness: 0,
            clearcoat: 0,
            clearcoatRoughness: 0.4,
            transmission: 0,
            ior: 1.51,
            opacity: 1,
            particleSizeVariance: 0.45,
            particleShapeVariance: 0.5,
            colorVariance: 0.2,
            flatness: 0.3,
            particleSizeRangeMm: [
                4,
                15
            ],
            particleShape: 'lumpy_agglomerate',
            aspectRatioLW: 1.3,
            aspectRatioHW: 0.7,
            edgeRoundness: 0.5,
            shapeRegularity: 0.2,
            sizeDistribution: 'skewed_large',
            sizeMedianMm: 8,
            sizeClasses: {
                fine_pct: 2,
                small_pct: 20,
                medium_pct: 45,
                large_pct: 28,
                oversize_pct: 5
            },
            finesPresent: false,
            realDishDiameterMm: 160,
            colorPattern: 'uniform_each_particle_one_color'
        },
        thumb2d: {
            type: 'ellipse',
            minSize: 29,
            maxSize: 53,
            flatness: 0.8,
            edgeRoundness: 0.5
        },
        materialTypes: [
            'Agglomerat'
        ]
    },
    blocky_bales: {
        labelDe: 'Ballen',
        descriptionDe: 'Große, gepresste quaderförmige Ballen mit scharfen Presskanten.',
        form: 'Ballenware',
        geometry3d: 'box',
        geometryVariants: 1,
        rendering3d: {
            roughness: 0.7,
            metalness: 0,
            clearcoat: 0,
            clearcoatRoughness: 0.5,
            transmission: 0,
            ior: 1.51,
            opacity: 1,
            particleSizeVariance: 0.35,
            particleShapeVariance: 0.3,
            colorVariance: 0.35,
            flatness: 0.2,
            particleSizeRangeMm: [
                20,
                45
            ],
            particleShape: 'blocky_bales',
            aspectRatioLW: 1.4,
            aspectRatioHW: 0.8,
            edgeRoundness: 0.1,
            shapeRegularity: 0.5,
            sizeDistribution: 'normal',
            sizeMedianMm: 30,
            sizeClasses: {
                fine_pct: 0,
                small_pct: 5,
                medium_pct: 30,
                large_pct: 45,
                oversize_pct: 20
            },
            finesPresent: false,
            realDishDiameterMm: 400,
            colorPattern: 'uniform_each_particle_one_color'
        },
        thumb2d: {
            type: 'rect',
            minSize: 35,
            maxSize: 60,
            flatness: 0.7,
            edgeRoundness: 0.1
        },
        materialTypes: [
            'Ballenware'
        ]
    },
    powder: {
        labelDe: 'Pulver',
        descriptionDe: 'Sehr feines Pulver mit staubigem, mattem Erscheinungsbild — Feinstanteil unter 1 mm.',
        form: 'Mahlgut',
        geometry3d: 'icosahedron',
        geometryVariants: 1,
        rendering3d: {
            roughness: 0.9,
            metalness: 0,
            clearcoat: 0,
            clearcoatRoughness: 0.6,
            transmission: 0,
            ior: 1.54,
            opacity: 1,
            particleSizeVariance: 0.4,
            particleShapeVariance: 0.3,
            colorVariance: 0.05,
            flatness: 0.2,
            particleSizeRangeMm: [
                0.3,
                0.9
            ],
            particleShape: 'powder',
            aspectRatioLW: 1.0,
            aspectRatioHW: 0.8,
            edgeRoundness: 0.7,
            shapeRegularity: 0.6,
            sizeDistribution: 'skewed_small',
            sizeMedianMm: 0.5,
            sizeClasses: {
                fine_pct: 70,
                small_pct: 25,
                medium_pct: 5,
                large_pct: 0,
                oversize_pct: 0
            },
            finesPresent: true,
            realDishDiameterMm: 60,
            colorPattern: 'uniform_each_particle_one_color'
        },
        thumb2d: {
            type: 'circle',
            minSize: 3,
            maxSize: 7,
            flatness: 1.0,
            edgeRoundness: 0.7,
            maxCount: 900
        },
        materialTypes: []
    }
};
// ─── Assembly + deep freeze ─────────────────────────────────────────────────
function deepFreeze(value) {
    if (value && typeof value === 'object' && !Object.isFrozen(value)) {
        Object.freeze(value);
        for (const nested of Object.values(value)){
            deepFreeze(nested);
        }
    }
    return value;
}
function buildPresets() {
    const presets = {};
    for (const key of PRIMARY_SHAPE_VALUES){
        const { materialTypes, ...def } = PRESET_DEFS[key];
        presets[key] = {
            key,
            ...def,
            match: {
                formSubstrings: FORM_MATCHERS.filter(([, k])=>k === key).map(([s])=>s),
                materialTypes
            }
        };
    }
    return deepFreeze(presets);
}
const FLAKE_PRESETS = buildPresets();
function resolveFlakePreset(input, fallbackKey) {
    if (isPrimaryShape(input.particleShape)) {
        return FLAKE_PRESETS[input.particleShape];
    }
    const form = input.form?.toLowerCase();
    if (form) {
        for (const [substring, key] of FORM_MATCHERS){
            if (form.includes(substring)) return FLAKE_PRESETS[key];
        }
    }
    return FLAKE_PRESETS[fallbackKey];
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/material-vision/material-appearance.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "COLOR_MAP",
    ()=>COLOR_MAP,
    "CONTAMINATION_COLORS",
    ()=>CONTAMINATION_COLORS,
    "DEFAULT_MIXED_COLORS",
    ()=>DEFAULT_MIXED_COLORS,
    "FINISH_BY_SHEEN",
    ()=>FINISH_BY_SHEEN,
    "MM_TO_SCENE_BASE",
    ()=>MM_TO_SCENE_BASE,
    "NEUTRAL_COLORS",
    ()=>NEUTRAL_COLORS,
    "buildMaterialThumbUrl",
    ()=>buildMaterialThumbUrl,
    "buildRenderingParams",
    ()=>buildRenderingParams,
    "dishDiameterMmFor",
    ()=>dishDiameterMmFor,
    "finishFromTransparency",
    ()=>finishFromTransparency,
    "mmToSceneFor",
    ()=>mmToSceneFor,
    "paletteFromFarbe",
    ()=>paletteFromFarbe,
    "parseFarbeTokens",
    ()=>parseFarbeTokens,
    "readAiBackgroundHexes",
    ()=>readAiBackgroundHexes,
    "readAnalysisGeometry",
    ()=>readAnalysisGeometry,
    "readAnalysisPalette",
    ()=>readAnalysisPalette,
    "resolveMaterialAppearance",
    ()=>resolveMaterialAppearance,
    "rulerStepsMmFor",
    ()=>rulerStepsMmFor,
    "sanitizeHexList",
    ()=>sanitizeHexList,
    "subtractBackgroundColors",
    ()=>subtractBackgroundColors,
    "weightedPalette",
    ()=>weightedPalette
]);
/**
 * Material appearance — the single source of truth for what a material looks
 * like, shared by every path that draws one (#997).
 *
 * Before this module the two render paths drifted apart: COLOR_MAP and
 * parseFarbeTokens existed twice (in /api/material-thumbnail and in
 * Material3DRenderer), and eight callers each built the thumbnail URL inline
 * with a different subset of parameters — so the same material could arrive at
 * a different colour and a different grain shape depending on which page you
 * happened to be looking at.
 *
 * Everything here is pure data and pure functions: the module is imported from
 * API routes AND from 'use client' components, so it must stay runtime-free.
 * The archetype library it builds on lives in ./flake-presets.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$material$2d$vision$2f$flake$2d$presets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/material-vision/flake-presets.ts [app-client] (ecmascript)");
;
const COLOR_MAP = Object.freeze({
    // German primary
    rot: [
        '#E53935',
        '#C62828',
        '#EF5350'
    ],
    blau: [
        '#1E88E5',
        '#1565C0',
        '#42A5F5'
    ],
    'grün': [
        '#43A047',
        '#2E7D32',
        '#66BB6A'
    ],
    gruen: [
        '#43A047',
        '#2E7D32',
        '#66BB6A'
    ],
    gelb: [
        '#FDD835',
        '#F9A825',
        '#FFEE58'
    ],
    orange: [
        '#FB8C00',
        '#EF6C00',
        '#FFA726'
    ],
    braun: [
        '#795548',
        '#5D4037',
        '#8D6E63'
    ],
    // German neutrals
    'weiß': [
        '#FAFAFA',
        '#F5F5F5',
        '#FFFFFF'
    ],
    weiss: [
        '#FAFAFA',
        '#F5F5F5',
        '#FFFFFF'
    ],
    schwarz: [
        '#212121',
        '#424242',
        '#616161'
    ],
    grau: [
        '#9E9E9E',
        '#757575',
        '#BDBDBD'
    ],
    // German special
    natur: [
        '#D7CCC8',
        '#BCAAA4',
        '#EFEBE9'
    ],
    transparent: [
        '#E0E0E0',
        '#EEEEEE',
        '#F5F5F5'
    ],
    transluzent: [
        '#CFD8DC',
        '#ECEFF1',
        '#E0E0E0'
    ],
    bunt: [
        '#E53935',
        '#1E88E5',
        '#43A047',
        '#FDD835',
        '#FB8C00',
        '#8E24AA'
    ],
    'bunt-hell': [
        '#EF9A9A',
        '#90CAF9',
        '#A5D6A7',
        '#FFF59D',
        '#FFCC80',
        '#CE93D8'
    ],
    'bunt-dunkel': [
        '#C62828',
        '#1565C0',
        '#2E7D32',
        '#F57F17',
        '#E65100',
        '#6A1B9A'
    ],
    // English
    red: [
        '#E53935',
        '#C62828',
        '#EF5350'
    ],
    blue: [
        '#1E88E5',
        '#1565C0',
        '#42A5F5'
    ],
    green: [
        '#43A047',
        '#2E7D32',
        '#66BB6A'
    ],
    yellow: [
        '#FDD835',
        '#F9A825',
        '#FFEE58'
    ],
    brown: [
        '#795548',
        '#5D4037',
        '#8D6E63'
    ],
    white: [
        '#FAFAFA',
        '#F5F5F5',
        '#FFFFFF'
    ],
    black: [
        '#212121',
        '#424242',
        '#616161'
    ],
    grey: [
        '#9E9E9E',
        '#757575',
        '#BDBDBD'
    ],
    gray: [
        '#9E9E9E',
        '#757575',
        '#BDBDBD'
    ],
    natural: [
        '#D7CCC8',
        '#BCAAA4',
        '#EFEBE9'
    ],
    translucent: [
        '#CFD8DC',
        '#ECEFF1',
        '#E0E0E0'
    ],
    mixed: [
        '#E53935',
        '#1E88E5',
        '#43A047',
        '#FDD835',
        '#FB8C00',
        '#8E24AA'
    ]
});
const CONTAMINATION_COLORS = Object.freeze([
    '#795548',
    '#5D4037',
    '#4E342E',
    '#3E2723',
    '#8D6E63'
]);
const NEUTRAL_COLORS = Object.freeze([
    '#9E9E9E',
    '#757575',
    '#BDBDBD'
]);
const DEFAULT_MIXED_COLORS = Object.freeze([
    '#E53935',
    '#1E88E5',
    '#43A047',
    '#FDD835',
    '#FB8C00',
    '#8E24AA',
    '#FFFFFF',
    '#212121',
    '#00ACC1',
    '#EC407A'
]);
const HEX_RE = /^#[0-9a-fA-F]{6}$/;
function sanitizeHexList(values) {
    if (!values) return [];
    return values.map((v)=>typeof v === 'string' ? v.trim() : '').filter((v)=>HEX_RE.test(v));
}
function parseFarbeTokens(farbe) {
    const trimmed = farbe.trim();
    if (trimmed.startsWith('[')) {
        try {
            return JSON.parse(trimmed).map((s)=>s.toLowerCase().trim()).filter(Boolean);
        } catch  {
        // Not valid JSON after all — fall through to the separator split.
        }
    }
    return trimmed.toLowerCase().split(/[,;]+/).map((s)=>s.trim()).filter(Boolean);
}
function paletteFromFarbe(farbe, fallback = NEUTRAL_COLORS) {
    if (!farbe) return [
        ...fallback
    ];
    const tokens = parseFarbeTokens(farbe);
    const colors = [];
    for (const token of tokens){
        const direct = COLOR_MAP[token];
        if (direct) {
            colors.push(...direct);
            continue;
        }
        // Partial match, so "bunt-hell" still resolves inside "bunt, bunt-hell".
        for (const [key, mapped] of Object.entries(COLOR_MAP)){
            if (token.includes(key) || key.includes(token)) {
                colors.push(...mapped);
                break;
            }
        }
    }
    return colors.length > 0 ? [
        ...new Set(colors)
    ] : [
        ...fallback
    ];
}
// ─── Background colours ─────────────────────────────────────────────────────
/**
 * Distance below which two hex values count as the same colour (#1003).
 *
 * Squared Euclidean distance in RGB. 40 per channel is roughly the gap between
 * two shades a person would call "the same blue" — wide enough that the AI's
 * one reported mat hex catches the several cluster centres the pixel pass
 * split that mat into, narrow enough that a genuinely blue material sitting on
 * a blue mat keeps its own colour.
 */ const BACKGROUND_MATCH_DISTANCE = 40 * 40 * 3;
/**
 * Second arm: same hue family as a CHROMATIC background (#1004-Auswertung).
 *
 * Measured against the manual corrections people actually made: the colours
 * they switched off sit a median of 139 RGB units from the AI's named
 * background — widening the distance to reach them (293) would delete half of
 * every palette. In HUE they sit 18–24° away. They are the highlights and
 * shadows of the same mat: a blue mat named `#2c4f8a` (hue 218°, sat 52%)
 * leaves `#b7b8c4` (hue 235°, sat 10%) on its lit edges, which is 184 units
 * away in RGB and obviously the same surface to a person.
 *
 * The saturation condition is what keeps this from eating real material: a
 * highlight or shadow of a surface is never MORE saturated than the surface
 * itself, while a material with a colour of its own usually is. Without that
 * condition, blue flakes on a blue mat would lose their colour.
 */ const BACKGROUND_HUE_TOL = 25;
/** Below this a colour has no reliable hue — same threshold the mask uses. */ const BACKGROUND_SAT_MIN = 18;
function rgbToHueSat(rgb) {
    const [r, g, b] = rgb.map((v)=>v / 255);
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const l = (max + min) / 2;
    if (max === min) return {
        hue: 0,
        sat: 0
    };
    const d = max - min;
    const sat = (l > 0.5 ? d / (2 - max - min) : d / (max + min)) * 100;
    let hue;
    if (max === r) hue = ((g - b) / d + (g < b ? 6 : 0)) * 60;
    else if (max === g) hue = ((b - r) / d + 2) * 60;
    else hue = ((r - g) / d + 4) * 60;
    return {
        hue,
        sat
    };
}
function hueDistance(a, b) {
    const d = Math.abs(a - b) % 360;
    return Math.min(d, 360 - d);
}
function hexToRgb(hex) {
    if (!HEX_RE.test(hex)) return null;
    return [
        parseInt(hex.slice(1, 3), 16),
        parseInt(hex.slice(3, 5), 16),
        parseInt(hex.slice(5, 7), 16)
    ];
}
function readAiBackgroundHexes(aiFeatures) {
    if (!aiFeatures || typeof aiFeatures !== 'object') return [];
    const bg = aiFeatures.background;
    if (!bg || bg.present !== true) return [];
    return sanitizeHexList(Array.isArray(bg.hexes) ? bg.hexes : []);
}
function subtractBackgroundColors(palette, backgroundHexes) {
    const bg = sanitizeHexList(backgroundHexes).map(hexToRgb).filter((c)=>c !== null);
    if (bg.length === 0) return [
        ...palette
    ];
    const kept = palette.filter((hex)=>{
        const rgb = hexToRgb(hex);
        if (!rgb) return true;
        const own = rgbToHueSat(rgb);
        return !bg.some((b)=>{
            const dr = rgb[0] - b[0];
            const dg = rgb[1] - b[1];
            const db = rgb[2] - b[2];
            if (dr * dr + dg * dg + db * db <= BACKGROUND_MATCH_DISTANCE) return true;
            // Deliberately only the chromatic case. Two near-greys cannot be told
            // apart by colour alone — a grey granulate on a white sheet looks
            // exactly like the sheet — and here, unlike in the pixel mask, there is
            // no texture or border evidence to decide it. Those stay for the manual
            // switch (#1004); guessing would revive the very bug #998 fixed.
            const theirs = rgbToHueSat(b);
            if (theirs.sat < BACKGROUND_SAT_MIN) return false;
            if (own.sat > theirs.sat) return false;
            return hueDistance(own.hue, theirs.hue) <= BACKGROUND_HUE_TOL;
        });
    });
    // A background that claims the entire palette is far more likely to be a
    // wrong answer than a photo with no material in it. Measured over 841
    // analysed records: where the model answered with a broad scene rather than
    // a surface — `industrial_environment`, `outdoor_environment`, or several
    // types at once — its hexes are generic greys and browns that match the
    // material as readily as the background. Keeping the measured palette is
    // then better than falling back to the colour name, which throws away a real
    // reading of the photo on the strength of a guess.
    //
    // Same principle as BG_MIN_FOREGROUND in the pixel mask: a separation that
    // removes everything has not separated anything.
    return kept.length > 0 ? kept : [
        ...palette
    ];
}
function readAnalysisPalette(aiFeatures) {
    if (!aiFeatures || typeof aiFeatures !== 'object') return [];
    const f = aiFeatures;
    const pick = (source)=>{
        if (!Array.isArray(source)) return [];
        return sanitizeHexList(source.map((entry)=>entry && typeof entry === 'object' ? String(entry.hex ?? '') : ''));
    };
    const pixelAnalysis = f.pixelAnalysis || {};
    const color = f.color || {};
    const fromPixel = pick(f.dominantColors);
    if (fromPixel.length > 0) return fromPixel;
    const fromMerged = pick(pixelAnalysis.dominantColors);
    if (fromMerged.length > 0) return fromMerged;
    return pick(color.dominantColors);
}
function resolveMaterialAppearance(input, fallbackShape, fallbackColors = NEUTRAL_COLORS) {
    const preset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$material$2d$vision$2f$flake$2d$presets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveFlakePreset"])({
        particleShape: input.particleShape,
        form: input.form
    }, fallbackShape);
    const disabled = new Set(sanitizeHexList(input.disabledColors).map((c)=>c.toLowerCase()));
    const keep = (colors)=>colors.filter((c)=>!disabled.has(c.toLowerCase()));
    const removed = [];
    const measured = sanitizeHexList(input.analysedColors);
    // Background first, then the manual switch-off: a colour dropped as
    // background should be reported as background even if it was also disabled
    // by hand, because that is the reason a person needs to see.
    const withoutBackground = subtractBackgroundColors(measured, input.backgroundColors || []);
    for (const hex of measured){
        if (!withoutBackground.includes(hex)) removed.push({
            hex,
            reason: 'background'
        });
        else if (disabled.has(hex.toLowerCase())) removed.push({
            hex,
            reason: 'disabled'
        });
    }
    const analysed = keep(withoutBackground);
    if (analysed.length > 0) {
        return {
            preset,
            colors: analysed,
            colorSource: 'analysis',
            removed
        };
    }
    const named = keep(paletteFromFarbe(input.farbe, []));
    if (named.length > 0) {
        return {
            preset,
            colors: named,
            colorSource: 'farbe',
            removed
        };
    }
    return {
        preset,
        colors: [
            ...fallbackColors
        ],
        colorSource: 'fallback',
        removed
    };
}
function definedNum(v) {
    return typeof v === 'number' && Number.isFinite(v) ? v : undefined;
}
function readAnalysisGeometry(aiFeatures) {
    const f = aiFeatures || {};
    const shape = f.shape || {};
    const size = f.size || {};
    const aspect = shape.aspectRatio || {};
    const color = f.color || {};
    const surface = f.surface || {};
    const rangeRaw = size.rangeMm;
    const sizeRangeMm = Array.isArray(rangeRaw) && rangeRaw.length === 2 && definedNum(rangeRaw[0]) !== undefined && definedNum(rangeRaw[1]) !== undefined ? [
        rangeRaw[0],
        rangeRaw[1]
    ] : undefined;
    return {
        aspectRatioLW: definedNum(aspect.lengthToWidth),
        aspectRatioHW: definedNum(aspect.heightToWidth),
        edgeRoundness: definedNum(shape.edgeRoundness),
        shapeRegularity: definedNum(shape.shapeRegularity),
        sizeRangeMm,
        sizeMedianMm: definedNum(size.medianMm),
        sizeDistribution: typeof size.distribution === 'string' ? size.distribution : undefined,
        sizeClasses: size.sizeClasses && typeof size.sizeClasses === 'object' ? size.sizeClasses : undefined,
        finesPresent: typeof size.finesPresent === 'boolean' ? size.finesPresent : undefined,
        sheenType: typeof color.sheenType === 'string' ? color.sheenType : undefined,
        surfaceTransparency: definedNum(surface.transparency),
        suggestedRenderingParams: f.suggestedRenderingParams && typeof f.suggestedRenderingParams === 'object' ? f.suggestedRenderingParams : undefined
    };
}
const FINISH_BY_SHEEN = {
    matte: {
        roughness: 0.75,
        clearcoat: 0,
        clearcoatRoughness: 0.6,
        metalness: 0
    },
    satin: {
        roughness: 0.5,
        clearcoat: 0.15,
        clearcoatRoughness: 0.4,
        metalness: 0
    },
    glossy: {
        roughness: 0.18,
        clearcoat: 0.6,
        clearcoatRoughness: 0.08,
        metalness: 0
    },
    waxy: {
        roughness: 0.55,
        clearcoat: 0.1,
        clearcoatRoughness: 0.5,
        metalness: 0
    },
    metallic_sheen: {
        roughness: 0.35,
        clearcoat: 0.2,
        clearcoatRoughness: 0.2,
        metalness: 0.4
    }
};
function finishFromTransparency(transparency) {
    const t = Math.max(0, Math.min(1, transparency));
    return {
        transmission: Math.round(t * 0.8 * 100) / 100,
        opacity: Math.round((1 - t * 0.4) * 100) / 100
    };
}
function buildRenderingParams(shape, geometry) {
    const srp = geometry.suggestedRenderingParams ?? {};
    const overrides = {
        particleShape: shape,
        aspectRatioLW: geometry.aspectRatioLW,
        aspectRatioHW: geometry.aspectRatioHW,
        edgeRoundness: geometry.edgeRoundness,
        shapeRegularity: geometry.shapeRegularity,
        particleSizeRangeMm: geometry.sizeRangeMm,
        sizeMedianMm: geometry.sizeMedianMm,
        sizeDistribution: geometry.sizeDistribution,
        sizeClasses: geometry.sizeClasses,
        finesPresent: geometry.finesPresent,
        roughness: definedNum(srp.roughness),
        metalness: definedNum(srp.metalness),
        clearcoat: definedNum(srp.clearcoat),
        clearcoatRoughness: definedNum(srp.clearcoatRoughness),
        transmission: definedNum(srp.transmission),
        ior: definedNum(srp.ior),
        flatness: definedNum(srp.flatness),
        opacity: definedNum(srp.opacity),
        colorVariance: definedNum(srp.colorVariance),
        particleSizeVariance: definedNum(srp.particleSizeVariance),
        particleShapeVariance: definedNum(srp.particleShapeVariance)
    };
    const defined = Object.fromEntries(Object.entries(overrides).filter(([, v])=>v !== undefined));
    const finish = geometry.sheenType ? FINISH_BY_SHEEN[geometry.sheenType] : undefined;
    const translucency = geometry.surfaceTransparency !== undefined ? finishFromTransparency(geometry.surfaceTransparency) : undefined;
    return {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$material$2d$vision$2f$flake$2d$presets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FLAKE_PRESETS"][shape].rendering3d,
        ...defined,
        ...finish,
        ...translucency
    };
}
// ─── Scene framing from particle size (#1031) ───────────────────────────────
//
// The 3D scene was tuned on a 100–160 mm dish holding 2–5 mm pellets. A
// material's measured size range replaces the archetype's (#997), and the
// dish never followed: a 125 mm chip or a 400 mm bale was dropped into a dish
// smaller than itself, and 0.5 mm powder vanished in one built for pellets.
// These two functions are the whole of that decision, so the renderer and the
// tests agree on it.
/**
 * Largest particle is at most this share of the dish diameter. Six is what the
 * hand-tuned presets sit at (25 mm flakes in a 160 mm dish); at a fifth, ten
 * chips filled the whole view, at an eighth the flake preset itself widened.
 */ const DISH_FITS_LARGEST = 6;
/**
 * Typical particle is at most this share of the dish diameter. Flakes spread
 * from 5 to 25 mm, so the largest-particle rule alone leaves them a heap; chips
 * measured 100–150 mm all sit near the top, and at a sixth of the dish a dozen
 * slabs filled the view.
 */ const DISH_HOLDS_TYPICAL = 12;
/** Typical particle is at least this share of the dish diameter — the pellet presets sit at 1/53 to 1/64. */ const DISH_SHOWS_TYPICAL = 70;
/** The scene keeps the dish within this band of "virtual millimetres" so the camera, near/far planes and gravity keep working. */ const SCENE_DISH_MM_MIN = 50;
const SCENE_DISH_MM_MAX = 200;
const MM_TO_SCENE_BASE = 0.15;
function dishDiameterMmFor(rp) {
    const base = rp.realDishDiameterMm ?? 100;
    const range = rp.particleSizeRangeMm;
    if (!range) return base;
    const [min, max] = range;
    const median = rp.sizeMedianMm ?? (min + max) / 2;
    const fitsLargest = Math.max(max * DISH_FITS_LARGEST, median * DISH_HOLDS_TYPICAL);
    const showsTypical = median * DISH_SHOWS_TYPICAL;
    return Math.round(Math.min(Math.max(base, fitsLargest), Math.max(fitsLargest, showsTypical)));
}
function mmToSceneFor(dishMm) {
    const clamped = Math.min(SCENE_DISH_MM_MAX, Math.max(SCENE_DISH_MM_MIN, dishMm));
    return MM_TO_SCENE_BASE * (clamped / dishMm);
}
function rulerStepsMmFor(radiusMm) {
    const target = radiusMm / 6;
    const magnitude = Math.pow(10, Math.floor(Math.log10(target)));
    const candidates = [
        1,
        2,
        5,
        10
    ].map((m)=>m * magnitude);
    const major = candidates.reduce((best, c)=>Math.abs(c - target) < Math.abs(best - target) ? c : best, candidates[0]);
    return {
        major,
        mid: major / 2,
        minor: major / 5
    };
}
function weightedPalette(colors) {
    return colors.flatMap((c)=>Array(Math.max(1, Math.round(c.pct / 5))).fill(c.hex));
}
function buildMaterialThumbUrl(input) {
    const params = new URLSearchParams();
    if (input.farbe) params.set('farbe', input.farbe);
    if (input.form) params.set('form', input.form);
    if (input.shape) params.set('shape', input.shape);
    // Zero is a value, not a blank: a material measured at no defects is not the
    // same as one that was never measured, and the MM list view pins that
    // distinction in its tests.
    if (typeof input.defekte === 'number' && Number.isFinite(input.defekte)) {
        params.set('defekte', String(input.defekte));
    }
    if (input.opacity != null && input.opacity > 0) {
        params.set('opacity', String(input.opacity <= 1 ? input.opacity * 100 : input.opacity));
    }
    if (input.productId) params.set('productId', input.productId);
    else if (input.materialId) params.set('materialId', input.materialId);
    const colors = sanitizeHexList(input.colors);
    if (colors.length > 0) params.set('colors', colors.join(','));
    const disabled = sanitizeHexList(input.disabledColors);
    if (disabled.length > 0) params.set('disabledColors', disabled.join(','));
    params.set('seed', input.seed);
    params.set('w', String(input.width));
    params.set('h', String(input.height));
    if (input.version) params.set('_v', String(input.version));
    // #1490: mit Schraegstrich — ohne antwortet Caddy mit 301 (@api_without_slash),
    // und die erste Anfrage zaehlt gegen die Seiten-Zone statt die Bilder-Zone.
    return `/api/material-thumbnail/?${params.toString()}`;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/orders/orderStatusConfig.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Canonical Order Kanban status configuration.
 *
 * SINGLE SOURCE OF TRUTH (#341) for the Orders Kanban board columns and the
 * Status filter options. Both the `statusColumns` used to render the board and
 * the `Status` filter option list in `OrdersKanban.tsx` MUST derive from this
 * array so they can never drift apart again.
 *
 * Do not inline copies of this list in components; import it from here.
 */ __turbopack_context__.s([
    "ORDER_INVOICING_STATUS",
    ()=>ORDER_INVOICING_STATUS,
    "ORDER_STATUS_ABLAUF",
    ()=>ORDER_STATUS_ABLAUF,
    "ORDER_STATUS_AUSNAHMEN",
    ()=>ORDER_STATUS_AUSNAHMEN,
    "ORDER_STATUS_COLUMNS",
    ()=>ORDER_STATUS_COLUMNS,
    "OrderStatus",
    ()=>OrderStatus,
    "istOrderStatus",
    ()=>istOrderStatus
]);
var OrderStatus = /*#__PURE__*/ function(OrderStatus) {
    // --- Ablauf, in dieser Reihenfolge -------------------------------------
    OrderStatus["Entwurf"] = "Draft";
    OrderStatus["BestellungErhalten"] = "Bestellung erhalten";
    OrderStatus["AnLieferantVersandt"] = "Bestellung an Lieferanten versandt";
    OrderStatus["VomLieferantBestaetigt"] = "Auftrag durch Lieferant bestätigt";
    OrderStatus["AbAnKundenVersandt"] = "Auftragsbestätigung an Kunden versandt";
    OrderStatus["TransportBeauftragen"] = "Transport beauftragen";
    OrderStatus["TransportBeauftragt"] = "Transport beauftragt";
    OrderStatus["AnlieferungErfolgt"] = "Anlieferung erfolgt";
    OrderStatus["InformationenEinpflegen"] = "Informationen einpflegen";
    OrderStatus["BetragErhalten"] = "Betrag erhalten";
    OrderStatus["Abgeschlossen"] = "Abgeschlossen";
    // --- Ausnahmezustaende, kein Schritt im Ablauf --------------------------
    OrderStatus["Storno"] = "Storno";
    OrderStatus["Reklamation"] = "Reklamation";
    OrderStatus["PlastrackBefuellt"] = "PLASTRACK Filled";
    return OrderStatus;
}({});
// ---------------------------------------------------------------------------
// Zwei Zusicherungen zur Uebersetzungszeit. Sie kosten zur Laufzeit nichts und
// machen aus einer Salesforce-Auswahllistenaenderung einen Build-Fehler statt
// eines stillen 400 im Betrieb.
// ---------------------------------------------------------------------------
/** (1) Jeder Enum-Wert ist ein echter SF-Wert — kein erfundener Status. */ const _enumWerteSindSalesforceWerte = Object.values(OrderStatus);
void _enumWerteSindSalesforceWerte;
const _keinSalesforceWertFehlt = true;
void _keinSalesforceWertFehlt;
const ORDER_STATUS_ABLAUF = [
    "Draft",
    "Bestellung erhalten",
    "Bestellung an Lieferanten versandt",
    "Auftrag durch Lieferant bestätigt",
    "Auftragsbestätigung an Kunden versandt",
    "Transport beauftragen",
    "Transport beauftragt",
    "Anlieferung erfolgt",
    "Informationen einpflegen",
    "Betrag erhalten",
    "Abgeschlossen"
];
const ORDER_STATUS_AUSNAHMEN = [
    "Storno",
    "Reklamation",
    "PLASTRACK Filled"
];
function istOrderStatus(wert) {
    return typeof wert === 'string' && Object.values(OrderStatus).includes(wert);
}
const ORDER_INVOICING_STATUS = "Anlieferung erfolgt";
const ORDER_STATUS_COLUMNS = [
    {
        key: "Draft",
        label: 'Entwurf'
    },
    {
        key: "Bestellung erhalten",
        label: 'Bestellung erhalten'
    },
    {
        key: "Bestellung an Lieferanten versandt",
        label: 'An Lieferant versandt'
    },
    {
        key: "Auftrag durch Lieferant bestätigt",
        label: 'Bestätigt'
    },
    {
        key: "Auftragsbestätigung an Kunden versandt",
        label: 'AB versandt'
    },
    {
        key: "Transport beauftragen",
        label: 'Transport beauftragen'
    },
    {
        key: "Transport beauftragt",
        label: 'Transport beauftragt'
    },
    {
        key: "Anlieferung erfolgt",
        label: 'Anlieferung erfolgt'
    },
    {
        key: "Informationen einpflegen",
        label: 'Infos einpflegen'
    },
    {
        key: "Betrag erhalten",
        label: 'Betrag erhalten'
    },
    {
        key: "Abgeschlossen",
        label: 'Abgeschlossen'
    },
    {
        key: "Storno",
        label: 'Storno'
    },
    {
        key: "Reklamation",
        label: 'Reklamation'
    },
    {
        key: "PLASTRACK Filled",
        label: 'PLASTRACK Filled'
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/pdf/documentLanguages.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_DOCUMENT_LANGUAGE",
    ()=>DEFAULT_DOCUMENT_LANGUAGE,
    "DOCUMENT_OFFERED_LANGUAGES",
    ()=>DOCUMENT_OFFERED_LANGUAGES,
    "documentLanguageLabel",
    ()=>documentLanguageLabel,
    "documentLanguageSlug",
    ()=>documentLanguageSlug,
    "documentSupportsLanguage",
    ()=>documentSupportsLanguage,
    "isGermanDocumentLanguage",
    ()=>isGermanDocumentLanguage,
    "offeredDocumentLanguageFor",
    ()=>offeredDocumentLanguageFor,
    "resolveDocumentLanguage",
    ()=>resolveDocumentLanguage
]);
/**
 * #2088: Sprachen der Dokument-PDFs — eine Quelle.
 *
 * Die PDF-Routen nehmen jede Sprache aus `languages` (app/i18n/settings) an;
 * die Texte kommen aus dem Translation-Management (lib/pdf/documentTexts.ts),
 * mit Rückfall Sprache → en-GB → de. Angeboten werden im Dokumentmenü vorerst
 * nur die Sprachen hier (Owner-Entscheidung 24.10.2026): Sobald die übrigen
 * Sprachen per Stapel-Übersetzung gefüllt sind, wird nur diese Liste erweitert.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$settings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/settings.ts [app-client] (ecmascript)");
;
const DOCUMENT_OFFERED_LANGUAGES = [
    'de',
    'en-GB'
];
const DEFAULT_DOCUMENT_LANGUAGE = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$settings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fallbackLng"];
function resolveDocumentLanguage(raw, fallback = DEFAULT_DOCUMENT_LANGUAGE) {
    if (typeof raw !== 'string' || raw.trim() === '') return fallback;
    const wert = raw.trim();
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$settings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidLanguage"])(wert)) return wert;
    const normalisiert = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$settings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeLanguageCode"])(wert);
    // normalizeLanguageCode fällt bei Unbekanntem auf de — dann gilt `fallback`
    return normalisiert === __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$settings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fallbackLng"] && !/^de\b|^deutsch$|^german$/i.test(wert) ? fallback : normalisiert;
}
function isGermanDocumentLanguage(language) {
    return /^de\b/i.test(language);
}
function documentSupportsLanguage(doc, language) {
    return isGermanDocumentLanguage(language) || doc.hasEnglish;
}
function offeredDocumentLanguageFor(uiLanguage) {
    const sprache = resolveDocumentLanguage(uiLanguage);
    const angeboten = DOCUMENT_OFFERED_LANGUAGES;
    if (angeboten.includes(sprache)) return sprache;
    const basis = sprache.split('-')[0];
    return angeboten.find((lang)=>lang.split('-')[0] === basis) ?? DEFAULT_DOCUMENT_LANGUAGE;
}
function documentLanguageSlug(language) {
    const basis = language.split('-')[0];
    const gleicheBasis = DOCUMENT_OFFERED_LANGUAGES.filter((lang)=>lang.split('-')[0] === basis);
    return gleicheBasis.length > 1 ? language.toLowerCase() : basis;
}
function documentLanguageLabel(language) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$settings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localeInfo"][language]?.native ?? language;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/pdf/pdfPreviewHeader.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * #1651: Antwort-Header der Vorschau-Route (/api/entity-pdf/preview) mit dem
 * Token, das der Versand (/api/entity-pdf/send, `previewToken`) wiederverwendet.
 * Eigene Datei, weil Server (Route) und Client (Versand-Modal) ihn lesen.
 */ __turbopack_context__.s([
    "PDF_PREVIEW_TOKEN_HEADER",
    ()=>PDF_PREVIEW_TOKEN_HEADER
]);
const PDF_PREVIEW_TOKEN_HEADER = 'X-Pdf-Preview-Token';
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/profilePictures/limits.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Grenzen der Profilbilder (#1714). Ohne Node-Abhängigkeiten — auch der
 * Browser (Zuschnitt-Dialog) importiert sie.
 */ /** Höchstgröße des hochgeladenen (bereits zugeschnittenen) Bildes: 1 MB. */ __turbopack_context__.s([
    "PROFILE_PICTURE_MAX_BYTES",
    ()=>PROFILE_PICTURE_MAX_BYTES,
    "PROFILE_PICTURE_MAX_INPUT_PIXELS",
    ()=>PROFILE_PICTURE_MAX_INPUT_PIXELS,
    "PROFILE_PICTURE_MIME",
    ()=>PROFILE_PICTURE_MIME,
    "PROFILE_PICTURE_SIZE",
    ()=>PROFILE_PICTURE_SIZE,
    "PROFILE_PICTURE_USER_ID",
    ()=>PROFILE_PICTURE_USER_ID,
    "PROFILE_PICTURE_USER_ID_SOURCE",
    ()=>PROFILE_PICTURE_USER_ID_SOURCE
]);
const PROFILE_PICTURE_MAX_BYTES = 1_048_576;
const PROFILE_PICTURE_MIME = [
    'image/jpeg',
    'image/png',
    'image/webp'
];
const PROFILE_PICTURE_MAX_INPUT_PIXELS = 40_000_000;
const PROFILE_PICTURE_SIZE = 512;
const PROFILE_PICTURE_USER_ID_SOURCE = '(?:[a-z0-9]{10,40}|[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})';
const PROFILE_PICTURE_USER_ID = new RegExp(`^${PROFILE_PICTURE_USER_ID_SOURCE}$`);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/profilePictures/url.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isProfilePictureUrl",
    ()=>isProfilePictureUrl,
    "profilePictureUrl",
    ()=>profilePictureUrl
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$profilePictures$2f$limits$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/profilePictures/limits.ts [app-client] (ecmascript)");
;
/**
 * Serve-Pfad der Profilbilder (#1714). Ohne Node-Abhängigkeiten — Client und
 * Server nutzen ihn. `User.image` trägt nur noch genau diese Form.
 */ const PREFIX = '/api/profile-picture/';
const URL_PATTERN = new RegExp(`^\\/api\\/profile-picture\\/${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$profilePictures$2f$limits$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PROFILE_PICTURE_USER_ID_SOURCE"]}\\/(\\?v=\\d+)?$`);
function profilePictureUrl(userId, version) {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$profilePictures$2f$limits$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PROFILE_PICTURE_USER_ID"].test(userId)) throw new Error('Profilbild: ungültige userId');
    return `${PREFIX}${userId}/?v=${Math.floor(version)}`;
}
function isProfilePictureUrl(url) {
    return typeof url === 'string' && URL_PATTERN.test(url);
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
"[project]/apps/web/src/lib/rbac/recordIdVisibility.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "canSeeRecordIds",
    ()=>canSeeRecordIds
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$auth$2f$viewAs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/auth/viewAs.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$rbac$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/rbac/constants.ts [app-client] (ecmascript)");
;
;
function canSeeRecordIds(role) {
    return typeof role === 'string' && role !== '' && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$auth$2f$viewAs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRecordScopedRole"])(role) && !__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$rbac$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTENT_ONLY_ROLES"].includes(role);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/rbac/relatedEntityCreateAccess.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Related-list "Create" button — RBAC gate.
 *
 * The create button on an entity detail related list (RelatedListTable) used to
 * render purely on entity-type resolution, with no permission check — so an
 * under-permissioned role saw the button and only got a 403 when it submitted.
 * This helper closes that gap on the client: the button is shown only when the
 * viewer actually has `create` on the target object, mirroring the exact
 * `hasObjectAccess(ctx, <key>, 'create')` guard each create endpoint enforces.
 *
 * `relatedEntityType` reaches RelatedListTable in two shapes (see
 * EntityDetailLayout.getRelatedListData):
 *   - non-empty list → a raw Salesforce object name from getEntityTypeFromId()
 *     (ENTITY_TYPE_MAPPINGS), e.g. 'Bedarf__c', 'Kontakt_Übergaben__c'.
 *   - empty list     → a friendly EntityType from RELATIONSHIP_TO_ENTITY,
 *     e.g. 'Requirement', 'ContactHandover'.
 * The map below covers both shapes and points them at the authoritative RBAC
 * Resource key used by the matching /api/salesforce/* create endpoint.
 *
 * Fail-open by design: an unknown type, or a not-yet-loaded user context,
 * returns `true` (show). The server endpoint still enforces create permission,
 * so this can only *hide* buttons we are certain the user cannot use — it never
 * suppresses a button whose mapping we don't know, avoiding new regressions.
 */ __turbopack_context__.s([
    "canShowRelatedCreateButton",
    ()=>canShowRelatedCreateButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$rbac$2f$permissions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/rbac/permissions.ts [app-client] (ecmascript)");
;
const RELATED_ENTITY_TYPE_TO_RBAC_RESOURCE = {
    // Friendly EntityType names (empty-list resolution via RELATIONSHIP_TO_ENTITY)
    Account: 'Account',
    Contact: 'Contact',
    Opportunity: 'Opportunity',
    Case: 'Case',
    Task: 'Task',
    Order: 'Order',
    OrderItem: 'OrderItem',
    Project: 'Projekt__c',
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
    CompanyCertificate: 'Unternehmenszertifikat__c',
    ProductionSite: 'Produktionsstandort__c',
    Product: 'Product2',
    // #907: Verträge werden in der App angelegt — Related-List-Button nur mit Create-Recht
    Contract: 'Contract',
    // #331: Prüfparameter (Create-Button nur admin/staff via objectPermissions)
    AuditProperty: 'AuditProperty__c',
    Lohn: 'Lohn__c',
    AktuellerPreisUndVerfugbarkeit: 'Aktueller_Preis_und_Verf_gbarkeit__c',
    Reklamation: 'Reklamation__c',
    // #384: Prozessfeedback/CAPA
    Prozessfeedback: 'Prozessfeedback__c',
    // Raw Salesforce object names (non-empty-list resolution via getEntityTypeFromId)
    // — only those whose raw name differs from, or must be pinned alongside, the
    // friendly key above. Values are the RBAC Resource the endpoint guards on.
    Bedarf__c: 'Bedarfe__c',
    'Kontakt_Übergaben__c': 'Kontakt_bergaben__c',
    // #330: ENTITY_TYPE_MAPPINGS liefert jetzt die kanonischen Namen (a0K/a0U-Fix)
    Bedarfe__c: 'Bedarfe__c',
    Kontakt_bergaben__c: 'Kontakt_bergaben__c',
    Reklamation__c: 'Reklamation__c',
    Prozessfeedback__c: 'Prozessfeedback__c',
    Projekt__c: 'Projekt__c',
    Abrechnung__c: 'Abrechnung__c',
    Materialanalyse__c: 'Materialanalyse__c',
    Material_Proposal__c: 'Material_Proposal__c',
    Monitored_Material__c: 'Monitored_Material__c',
    Sample_Feedback__c: 'Sample_Feedback__c',
    Sample_Sending__c: 'Sample_Sending__c',
    Supplier_Audit__c: 'Supplier_Audit__c',
    Onboarding__c: 'Onboarding__c',
    Unternehmenszertifikat__c: 'Unternehmenszertifikat__c',
    Produktionsstandort__c: 'Produktionsstandort__c',
    Product2: 'Product2'
};
function canShowRelatedCreateButton(userContext, relatedEntityType) {
    if (!relatedEntityType) return false;
    if (!userContext) return true // context still loading — don't flicker-hide
    ;
    const resource = RELATED_ENTITY_TYPE_TO_RBAC_RESOURCE[relatedEntityType];
    if (!resource) return true // unmapped/uncreatable type — leave enforcement to the server
    ;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$rbac$2f$permissions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasObjectAccess"])(userContext, resource, 'create');
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
"[project]/apps/web/src/lib/security/htmlPolicy.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HTML_POLICY_ALLOWED_ATTRS",
    ()=>HTML_POLICY_ALLOWED_ATTRS,
    "HTML_POLICY_ALLOWED_STYLE_PROPS",
    ()=>HTML_POLICY_ALLOWED_STYLE_PROPS,
    "HTML_POLICY_ALLOWED_TAGS",
    ()=>HTML_POLICY_ALLOWED_TAGS,
    "HTML_POLICY_CONFIG",
    ()=>HTML_POLICY_CONFIG,
    "HTML_POLICY_FORBIDDEN_TAGS",
    ()=>HTML_POLICY_FORBIDDEN_TAGS,
    "HTML_POLICY_MAX_DATA_IMAGE_CHARS",
    ()=>HTML_POLICY_MAX_DATA_IMAGE_CHARS,
    "HTML_POLICY_MAX_DEPTH",
    ()=>HTML_POLICY_MAX_DEPTH,
    "HTML_POLICY_MAX_MARKUP_CHARS",
    ()=>HTML_POLICY_MAX_MARKUP_CHARS,
    "HTML_POLICY_MAX_NBSP_RUN",
    ()=>HTML_POLICY_MAX_NBSP_RUN,
    "HTML_POLICY_MAX_NODES",
    ()=>HTML_POLICY_MAX_NODES,
    "HTML_POLICY_MAX_TOTAL_CHARS",
    ()=>HTML_POLICY_MAX_TOTAL_CHARS,
    "HTML_POLICY_ROLE_ELEMENTS",
    ()=>HTML_POLICY_ROLE_ELEMENTS,
    "emptyRemovals",
    ()=>emptyRemovals,
    "filterStyle",
    ()=>filterStyle,
    "safeHref",
    ()=>safeHref,
    "safeImageSrc",
    ()=>safeImageSrc,
    "sanitizeTrustedHtml",
    ()=>sanitizeTrustedHtml
]);
/**
 * #1985: DIE eine HTML-Richtlinie der App (Enterprise/Production).
 *
 * Seit Frames verboten sind (#1985), wird HTML inline gerendert — der Frame war eine
 * Isolationsgrenze (eigener Origin, sandbox). Diese Richtlinie ersetzt sie mit
 * Tiefenstaffelung:
 *  - Tag- und Attribut-Allowlist (keine Blocklist als Hauptmechanismus), ohne
 *    svg/math/template/noscript/style/Formulare/Medien und ohne id/name/class
 *    (DOM-Clobbering, Kaperung von App-Styles), target, srcset, data-* und aria-*.
 *  - `style` nur über eine Property-Allowlist mit Wertgrammatik: kein url(),
 *    expression(), var(), keine Positionierung, kein Overlay, kein !important,
 *    keine CSS-Escapes.
 *  - URLs per `new URL()`: href nur https/mailto/tel; src nur
 *    data:image/(png|jpeg|gif|webp);base64 mit Größenlimit und die
 *    same-origin-Proxys; https-Bilder nur im Modus `mail` mit ausdrücklicher
 *    Freigabe je Nachricht.
 *  - Links bekommen rel/target GESETZT, nicht übernommen.
 *  - bidi- und Zero-Width-Zeichen raus (Link-Spoofing), Eingabe- und
 *    DOM-Grenzen gegen DoS.
 *
 * Isomorph: kein `window` auf Modulebene. Im Browser nimmt sie das globale
 * window, auf dem Server übergibt der Aufrufer ein (jsdom-)Window. Jeder Aufruf
 * bekommt eine eigene DOMPurify-Instanz — keine globalen Hooks, die sich
 * gegenseitig überschreiben.
 *
 * Zähler entfernter Teile (nie Inhalte) gehen an `report` — die Aufrufer im
 * Browser hängen daran einen Sentry-Breadcrumb (#1678: nie Inhalte loggen).
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$dompurify$2f$dist$2f$purify$2e$es$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/dompurify/dist/purify.es.mjs [app-client] (ecmascript)");
;
const HTML_POLICY_MAX_MARKUP_CHARS = 1_000_000;
const HTML_POLICY_MAX_TOTAL_CHARS = 8_000_000;
const HTML_POLICY_MAX_DATA_IMAGE_CHARS = 2_800_000;
const HTML_POLICY_MAX_NODES = 20_000;
const HTML_POLICY_MAX_DEPTH = 64;
const HTML_POLICY_MAX_NBSP_RUN = 20;
const MAX_STYLE_CHARS = 2_000;
const MAX_STYLE_VALUE_CHARS = 200;
const MAX_DIMENSION = 4_000;
const HTML_POLICY_ALLOWED_TAGS = [
    'a',
    'abbr',
    'b',
    'blockquote',
    'br',
    'caption',
    'center',
    'cite',
    'code',
    'col',
    'colgroup',
    'dd',
    'div',
    'dl',
    'dt',
    'em',
    'font',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'hr',
    'i',
    'img',
    'li',
    'ol',
    'p',
    'pre',
    'q',
    's',
    'small',
    'span',
    'strong',
    'sub',
    'sup',
    'table',
    'tbody',
    'td',
    'tfoot',
    'th',
    'thead',
    'tr',
    'u',
    'ul'
];
const HTML_POLICY_FORBIDDEN_TAGS = [
    'script',
    'style',
    'svg',
    'math',
    'template',
    'noscript',
    'link',
    'meta',
    'base',
    'form',
    'input',
    'textarea',
    'select',
    'option',
    'button',
    'label',
    'fieldset',
    'iframe',
    'frame',
    'frameset',
    'object',
    'embed',
    'applet',
    'video',
    'audio',
    'source',
    'track',
    'picture',
    'slot',
    'portal',
    'canvas',
    'dialog',
    'title'
];
/** Container, deren Inhalt mit ihnen verschwindet. */ const FORBID_CONTENTS = [
    'script',
    'style',
    'svg',
    'math',
    'template',
    'noscript',
    'iframe',
    'frame',
    'frameset',
    'object',
    'embed',
    'applet',
    'textarea',
    'select',
    'option',
    'title',
    'xmp',
    'noembed',
    'noframes',
    'plaintext'
];
const HTML_POLICY_ALLOWED_ATTRS = [
    'href',
    'src',
    'alt',
    'title',
    'width',
    'height',
    'style',
    'colspan',
    'rowspan',
    'cellpadding',
    'cellspacing',
    'border',
    'align',
    'valign',
    'bgcolor',
    'color',
    'face',
    'size',
    'dir',
    'lang',
    'role'
];
const HTML_POLICY_ROLE_ELEMENTS = new Set([
    'TABLE',
    'THEAD',
    'TBODY',
    'TFOOT',
    'TR',
    'TD',
    'TH'
]);
const HTML_POLICY_ALLOWED_STYLE_PROPS = new Set([
    'color',
    'background-color',
    'font-family',
    'font-size',
    'font-weight',
    'font-style',
    'line-height',
    'text-align',
    'text-decoration',
    'letter-spacing',
    'margin',
    'margin-top',
    'margin-right',
    'margin-bottom',
    'margin-left',
    'padding',
    'padding-top',
    'padding-right',
    'padding-bottom',
    'padding-left',
    'border',
    'border-top',
    'border-right',
    'border-bottom',
    'border-left',
    'border-width',
    'border-style',
    'border-color',
    'border-radius',
    'border-top-width',
    'border-right-width',
    'border-bottom-width',
    'border-left-width',
    'border-top-style',
    'border-right-style',
    'border-bottom-style',
    'border-left-style',
    'border-top-color',
    'border-right-color',
    'border-bottom-color',
    'border-left-color',
    'width',
    'height',
    'max-width',
    'vertical-align',
    'white-space',
    'display',
    'border-collapse',
    'border-spacing'
]);
const DISPLAY_VALUES = new Set([
    'block',
    'inline',
    'inline-block',
    'none',
    'table',
    'inline-table',
    'table-row',
    'table-cell',
    'table-row-group',
    'table-header-group',
    'table-footer-group',
    'table-column',
    'table-column-group',
    'table-caption'
]);
/** Same-origin-Bildquellen (CID-Proxy des Postfachs, Graph-Bilder im Chat). */ const SAME_ORIGIN_IMAGE_PREFIXES = [
    '/api/mail/inline-image?',
    '/api/chat/proxy-image?'
];
const DATA_IMAGE = /^data:image\/(?:png|jpeg|gif|webp);base64,[a-z0-9+/=\s]+$/i;
const DATA_IMAGE_PAYLOAD = /data:image\/[a-z]+;base64,[a-z0-9+/=\s]+/gi;
/** bidi-Steuerzeichen und unsichtbare Zeichen (Link-Spoofing). */ const INVISIBLE_CHARS = /[\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u2069\uFEFF]/g;
const NBSP_RUN = new RegExp(` {${HTML_POLICY_MAX_NBSP_RUN + 1},}`, 'g');
/** URI-Regex für DOMPurify selbst (zweites Netz hinter dem Hook). */ const ALLOWED_URI_REGEXP = /^(?:https:|mailto:|tel:|data:image\/(?:png|jpeg|gif|webp);base64,|\/api\/(?:mail\/inline-image|chat\/proxy-image)\?)/i;
function safeHref(value) {
    const raw = value.replace(INVISIBLE_CHARS, '').trim();
    if (!raw || raw.length > 2048) return null;
    let url;
    try {
        url = new URL(raw);
    } catch  {
        return null // relativ, protokoll-relativ (//evil) oder kaputt
        ;
    }
    if (url.protocol === 'https:') return url.href;
    if (url.protocol === 'mailto:' || url.protocol === 'tel:') return raw;
    return null;
}
function safeImageSrc(value, allowHttps) {
    const raw = value.trim();
    if (!raw) return null;
    if (raw.toLowerCase().startsWith('data:')) {
        if (raw.length > HTML_POLICY_MAX_DATA_IMAGE_CHARS) return null;
        return DATA_IMAGE.test(raw) ? raw : null;
    }
    if (SAME_ORIGIN_IMAGE_PREFIXES.some((prefix)=>raw.startsWith(prefix))) {
        // kein Pfad-Trick (../, \, //) hinter dem Präfix
        return /[\\]|\.\.|\/\//.test(raw.slice(1)) ? null : raw;
    }
    if (!allowHttps) return null;
    try {
        const url = new URL(raw);
        return url.protocol === 'https:' ? url.href : null;
    } catch  {
        return null;
    }
}
const NUMBER_UNIT = /^-?(?:\d+|\d*\.\d+)(?:px|em|rem|%|pt|ex|ch)?$/;
const HEX_COLOR = /^#(?:[0-9a-f]{3}|[0-9a-f]{4}|[0-9a-f]{6}|[0-9a-f]{8})$/;
const KEYWORD = /^[a-z][a-z-]{0,29}$/;
const QUOTED_FONT = /^(?:"[a-z0-9 -]{1,40}"|'[a-z0-9 -]{1,40}')$/;
const COLOR_FUNCTION = /\b(?:rgba?|hsla?)\(\s*[\d.%\s,/]{1,60}\)/g;
/** Schlüsselwörter, die nie als Wert durchgehen (auch ohne Klammer). */ const FORBIDDEN_VALUE_WORDS = new Set([
    'expression',
    'behavior',
    'binding',
    'javascript',
    'vbscript',
    'import',
    'url',
    'fixed',
    'sticky',
    'absolute'
]);
function validStyleValue(prop, value) {
    if (!value || value.length > MAX_STYLE_VALUE_CHARS) return false;
    if (prop === 'display') return DISPLAY_VALUES.has(value);
    // Farbfunktionen vorab durch einen neutralen Platzhalter ersetzen — danach
    // darf keine Klammer mehr übrig sein (url(, var(, attr(, image-set( …).
    const flat = value.replace(COLOR_FUNCTION, '#000');
    if (/[()]/.test(flat)) return false;
    const tokens = flat.split(/[\s,/]+/).filter(Boolean);
    if (!tokens.length) return false;
    return tokens.every((token)=>{
        if (NUMBER_UNIT.test(token) || HEX_COLOR.test(token) || QUOTED_FONT.test(token)) return true;
        return KEYWORD.test(token) && !FORBIDDEN_VALUE_WORDS.has(token);
    });
}
function filterStyle(style) {
    const raw = style.trim();
    if (!raw) return {
        style: '',
        dropped: 0
    };
    // Escapes (\75rl(), Kommentare, Markup, at-Regeln, !important: alles verwerfen
    if (raw.length > MAX_STYLE_CHARS || /[\\<>@{}]|\/\*|!\s*important/i.test(raw)) {
        return {
            style: '',
            dropped: Math.max(1, raw.split(';').filter((s)=>s.trim()).length)
        };
    }
    const kept = [];
    let dropped = 0;
    for (const declaration of raw.split(';')){
        if (!declaration.trim()) continue;
        const colon = declaration.indexOf(':');
        if (colon < 1) {
            dropped++;
            continue;
        }
        const prop = declaration.slice(0, colon).trim().toLowerCase();
        const value = declaration.slice(colon + 1).trim().toLowerCase();
        if (HTML_POLICY_ALLOWED_STYLE_PROPS.has(prop) && validStyleValue(prop, value)) {
            kept.push(`${prop}:${value}`);
        } else {
            dropped++;
        }
    }
    return {
        style: kept.join(';'),
        dropped
    };
}
const DIMENSION = /^\d{1,4}(?:%|px)?$/;
const SMALL_INT = /^\d{1,3}$/;
const COLOR_ATTR = /^(?:#[0-9a-f]{3}(?:[0-9a-f]{3})?|[a-z]{3,20})$/i;
const ALIGN = /^(?:left|right|center|justify|top|middle|bottom|baseline)$/i;
const DIR = /^(?:ltr|rtl|auto)$/i;
const LANG = /^[a-z]{2,3}(?:-[a-z0-9]{2,8})?$/i;
const FACE = /^[a-z0-9 ,'"-]{1,100}$/i;
const FONT_SIZE = /^[+-]?[1-7]$/;
/** Prüft die übrigen Attribute; null = entfernen. */ function safePlainAttr(name, value) {
    const v = value.trim();
    switch(name){
        case 'width':
        case 'height':
            {
                if (!DIMENSION.test(v)) return null;
                return parseInt(v, 10) <= MAX_DIMENSION ? v : null;
            }
        case 'colspan':
        case 'rowspan':
        case 'cellpadding':
        case 'cellspacing':
        case 'border':
            return SMALL_INT.test(v) && parseInt(v, 10) <= 100 ? v : null;
        case 'bgcolor':
        case 'color':
            return COLOR_ATTR.test(v) ? v : null;
        case 'align':
        case 'valign':
            return ALIGN.test(v) ? v.toLowerCase() : null;
        case 'dir':
            return DIR.test(v) ? v.toLowerCase() : null;
        case 'lang':
            return LANG.test(v) ? v : null;
        case 'face':
            return FACE.test(v) ? v : null;
        case 'size':
            return FONT_SIZE.test(v) ? v : null;
        case 'alt':
        case 'title':
            return value.replace(INVISIBLE_CHARS, '').slice(0, 500);
        default:
            return null;
    }
}
function emptyRemovals() {
    return {
        elements: 0,
        attributes: 0,
        styles: 0,
        urls: 0,
        chars: 0,
        limits: 0
    };
}
/** Werte, die der Hook an Links mit gültigem href SETZT (afterSanitizeAttributes). */ const POLICY_LINK_TARGET = '_blank';
const POLICY_LINK_REL = 'noopener noreferrer nofollow';
/**
 * #1985 (Signatur-Parität): target/rel an einem Link, die genau die Werte der
 * Richtlinie tragen, sind kein Fund — DOMPurify entfernt sie, der Hook setzt
 * sie identisch wieder. Sonst meldete der zweite Durchlauf (Browser nach
 * Server) bei jeder Vorschau mit Links Entfernungen, obwohl nichts anders ist.
 * Andere Werte (z. B. target="_top") zählen weiter.
 */ function isPolicyLinkAttr(attribute, from) {
    if (!attribute || from?.nodeName !== 'A') return false;
    return attribute.name === 'target' && attribute.value === POLICY_LINK_TARGET || attribute.name === 'rel' && attribute.value === POLICY_LINK_REL;
}
const hasRemovals = (r)=>r.elements + r.attributes + r.styles + r.urls + r.chars + r.limits > 0;
const HTML_POLICY_CONFIG = {
    ALLOWED_TAGS: [
        ...HTML_POLICY_ALLOWED_TAGS
    ],
    ALLOWED_ATTR: [
        ...HTML_POLICY_ALLOWED_ATTRS
    ],
    FORBID_TAGS: [
        ...HTML_POLICY_FORBIDDEN_TAGS
    ],
    FORBID_ATTR: [
        'id',
        'name',
        'class',
        'target',
        'srcset',
        'sizes',
        'ping',
        'download',
        'usemap',
        'formaction',
        'xmlns'
    ],
    FORBID_CONTENTS,
    ALLOW_DATA_ATTR: false,
    ALLOW_ARIA_ATTR: false,
    ALLOW_UNKNOWN_PROTOCOLS: false,
    ALLOWED_URI_REGEXP,
    // Keine URL-Attribute: DOMPurify prüft sonst JEDEN Wert gegen
    // ALLOWED_URI_REGEXP (die streng ist) und verwürfe width="96". Ihre Werte
    // prüft der Hook gegen eine eigene Grammatik (safePlainAttr); href/src
    // stehen bewusst NICHT hier.
    ADD_URI_SAFE_ATTR: [
        'width',
        'height',
        'colspan',
        'rowspan',
        'cellpadding',
        'cellspacing',
        'border',
        'align',
        'valign',
        'bgcolor',
        'color',
        'face',
        'size',
        'dir',
        'lang',
        'role'
    ],
    SAFE_FOR_TEMPLATES: true,
    SANITIZE_DOM: true,
    SANITIZE_NAMED_PROPS: true,
    KEEP_CONTENT: true,
    WHOLE_DOCUMENT: false,
    RETURN_DOM_FRAGMENT: true,
    ALLOW_SELF_CLOSE_IN_ATTR: false
};
function resolveWindow(win) {
    if (win) return win;
    if ("TURBOPACK compile-time truthy", 1) return window;
    //TURBOPACK unreachable
    ;
}
function sanitizeTrustedHtml(html, mode, options = {}) {
    const removed = emptyRemovals();
    const finish = (out)=>{
        if (hasRemovals(removed) && options.report) {
            try {
                options.report({
                    ...removed
                }, mode);
            } catch  {
            // Melden darf das Rendern nie verhindern
            }
        }
        return out;
    };
    if (typeof html !== 'string' || !html) return '';
    const markupChars = html.replace(DATA_IMAGE_PAYLOAD, 'data:').length;
    // Tag-Zahl grob vorab: mehr Tags als erlaubte Knoten → gar nicht erst parsen
    // (DOMPurify über zehntausende Knoten kostet Sekunden — DoS).
    const tagCount = html.match(/<[a-z!/?]/gi)?.length ?? 0;
    if (markupChars > HTML_POLICY_MAX_MARKUP_CHARS || html.length > HTML_POLICY_MAX_TOTAL_CHARS || tagCount > HTML_POLICY_MAX_NODES) {
        removed.limits++;
        return finish('');
    }
    const win = resolveWindow(options.window);
    const purify = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$dompurify$2f$dist$2f$purify$2e$es$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(win);
    const allowHttps = mode === 'mail' && options.allowExternalImages === true;
    const dropImages = new Set();
    const blockedImages = new Set();
    purify.addHook('uponSanitizeAttribute', (node, data)=>{
        const name = data.attrName;
        if (!HTML_POLICY_ALLOWED_ATTRS.includes(name)) return; // DOMPurify entfernt es selbst
        let next;
        if (name === 'style') {
            const { style, dropped } = filterStyle(data.attrValue);
            removed.styles += dropped;
            next = style || null;
        } else if (name === 'href') {
            next = node.nodeName === 'A' ? safeHref(data.attrValue) : null;
            if (!next) removed.urls++;
        } else if (name === 'src') {
            let src = data.attrValue;
            if (node.nodeName !== 'IMG') src = null;
            else if (options.rewriteImageSrc) src = options.rewriteImageSrc(data.attrValue, node);
            if (src === 'drop') {
                dropImages.add(node);
                next = null;
            } else {
                next = src === null ? null : safeImageSrc(src, allowHttps);
                if (!next) {
                    removed.urls++;
                    blockedImages.add(node);
                }
            }
        } else if (name === 'role') {
            next = HTML_POLICY_ROLE_ELEMENTS.has(node.nodeName) && data.attrValue.trim().toLowerCase() === 'presentation' ? 'presentation' : null;
            if (next === null) removed.attributes++;
        } else {
            next = safePlainAttr(name, data.attrValue);
            if (next === null) removed.attributes++;
        }
        if (next === null) {
            data.keepAttr = false;
        } else {
            data.attrValue = next;
        }
    });
    purify.addHook('afterSanitizeAttributes', (node)=>{
        if (node.nodeName === 'A') {
            // gesetzt, nicht übernommen — und nur bei gültigem Ziel
            if (node.hasAttribute('href')) {
                node.setAttribute('target', POLICY_LINK_TARGET);
                node.setAttribute('rel', POLICY_LINK_REL);
            } else {
                node.removeAttribute('target');
                node.removeAttribute('rel');
            }
        }
        if (node.nodeName === 'IMG' && blockedImages.has(node) && !node.hasAttribute('src')) {
            if (options.blockedImageAlt) node.setAttribute('alt', options.blockedImageAlt);
        }
    });
    const fragment = purify.sanitize(html, HTML_POLICY_CONFIG);
    // DOMPurify.removed: entfernte Elemente und Attribute (nur gezählt)
    // Das BODY des Parse-Containers steht bei RETURN_DOM_FRAGMENT immer in der
    // Liste (body ist nicht erlaubt) — kein Fund, sonst meldete jede Vorschau.
    for (const entry of purify.removed){
        if (entry && 'element' in entry && entry.element) {
            if (entry.element.nodeName !== 'BODY') removed.elements++;
        } else if (entry && 'attribute' in entry && !isPolicyLinkAttr(entry.attribute, entry.from)) {
            removed.attributes++;
        }
    }
    // Nachlauf: Bilder fallen lassen, Grenzen, unsichtbare Zeichen, nbsp-Fluten
    const doc = fragment.ownerDocument;
    for (const img of dropImages){
        img.parentNode?.removeChild(img);
        removed.elements++;
    }
    let count = 0;
    const walk = (parent, depth)=>{
        let child = parent.firstChild;
        while(child){
            const next = child.nextSibling;
            count++;
            if (count > HTML_POLICY_MAX_NODES || depth > HTML_POLICY_MAX_DEPTH) {
                parent.removeChild(child);
                removed.limits++;
            } else if (child.nodeType === 3) {
                const text = child.nodeValue ?? '';
                const clean = text.replace(INVISIBLE_CHARS, '').replace(NBSP_RUN, ' '.repeat(HTML_POLICY_MAX_NBSP_RUN));
                if (clean !== text) {
                    removed.chars += text.length - clean.length;
                    child.nodeValue = clean;
                }
            } else if (child.nodeType === 1) {
                walk(child, depth + 1);
            } else {
                parent.removeChild(child); // Kommentare u. Ä.
            }
            child = next;
        }
    };
    walk(fragment, 1);
    const holder = doc.createElement('div');
    holder.appendChild(fragment);
    return finish(holder.innerHTML);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/status/statusRegistry.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CASE_STATUS_COLUMNS",
    ()=>CASE_STATUS_COLUMNS,
    "INVOICE_STATUS_COLUMNS",
    ()=>INVOICE_STATUS_COLUMNS,
    "MATERIAL_PROPOSAL_STATUS_COLUMNS",
    ()=>MATERIAL_PROPOSAL_STATUS_COLUMNS,
    "OPPORTUNITY_STAGE_COLUMNS",
    ()=>OPPORTUNITY_STAGE_COLUMNS,
    "SAMPLE_SENDING_STATUS_COLUMNS",
    ()=>SAMPLE_SENDING_STATUS_COLUMNS,
    "STATUS_REGISTRY",
    ()=>STATUS_REGISTRY,
    "TASK_STATUS_COLUMNS",
    ()=>TASK_STATUS_COLUMNS,
    "getStatusConfig",
    ()=>getStatusConfig,
    "getStatusFieldOptions",
    ()=>getStatusFieldOptions
]);
/**
 * Central status registry — THE single source of truth (#420) for the status
 * value lists of all status-kanban entities.
 *
 * Extends the #341 pattern (orderStatusConfig, material-analysis/statusConfig)
 * to every entity that has a status kanban board. Consumers:
 *  - the kanban boards' `statusColumns` and status filter options
 *  - the inline-edit picklist options in `config/entityFields`
 *  - the quick-status dropdown (detail header + preview panel, #420 MR B)
 *
 * Before this module the lists drifted per entity (Case: 10 kanban columns vs.
 * 4 inline-edit options vs. 7 filter options; Material_Proposal__c and
 * Sample_Sending__c inline-edit even offered TASK status values). The kanban
 * columns are the canonical values — they are exercised in production via
 * drag & drop; Salesforce validation remains the backstop.
 *
 * Do not inline copies of these lists in components; import them from here.
 * The drift guard in `src/tests/status/statusRegistry.test.ts` enforces
 * consistency with ENTITY_SINGLE_API_MAP, getUpdatableFields and the
 * entityFields picklist options.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/config/entityTypes.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$orders$2f$orderStatusConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/orders/orderStatusConfig.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$material$2d$analysis$2f$statusConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/material-analysis/statusConfig.ts [app-client] (ecmascript)");
;
;
;
const CASE_STATUS_COLUMNS = [
    {
        key: 'New',
        label: 'New'
    },
    {
        key: 'In Progress',
        label: 'In Progress'
    },
    {
        key: 'Waiting for Customer',
        label: 'Waiting for Customer'
    },
    {
        key: 'Response Received',
        label: 'Response Received'
    },
    {
        key: 'On Hold',
        label: 'On Hold'
    },
    {
        key: 'Escalated',
        label: 'Escalated'
    },
    {
        key: 'Merged',
        label: 'Merged'
    },
    {
        key: 'No Action',
        label: 'No Action'
    },
    {
        key: 'Rejected',
        label: 'Rejected'
    },
    {
        key: 'Closed',
        label: 'Closed'
    }
];
const MATERIAL_PROPOSAL_STATUS_COLUMNS = [
    {
        key: 'Platform request',
        label: 'Platform request'
    },
    {
        key: 'In preparation',
        label: 'In preparation'
    },
    {
        key: 'Requirement confirmed',
        label: 'Requirement confirmed'
    },
    {
        key: 'Availability and buying price confirmed',
        label: 'Availability confirmed'
    },
    {
        key: 'Transport price requested',
        label: 'Transport requested'
    },
    {
        key: 'Offer communicated',
        label: 'Offer communicated'
    },
    {
        key: 'Initial feedback received',
        label: 'Feedback received'
    },
    {
        key: 'Sample ordered from supplier',
        label: 'Sample ordered'
    },
    {
        key: 'Sample sent to customer',
        label: 'Sample sent'
    },
    {
        key: 'Approved',
        label: 'Approved'
    },
    {
        key: 'Rejected',
        label: 'Rejected'
    }
];
const SAMPLE_SENDING_STATUS_COLUMNS = [
    {
        key: 'Draft',
        label: 'Draft'
    },
    {
        key: 'Ready',
        label: 'Ready'
    },
    {
        key: 'Ordered',
        label: 'Ordered'
    },
    {
        key: 'Sent',
        label: 'Sent'
    },
    {
        key: 'Received',
        label: 'Received'
    }
];
const INVOICE_STATUS_COLUMNS = [
    {
        key: 'Entwurf',
        label: 'Entwurf'
    },
    {
        key: 'in Klärung',
        label: 'In Klärung'
    },
    {
        key: 'Vollständig dokumentiert',
        label: 'Vollständig dokumentiert'
    },
    {
        key: 'Gebucht',
        label: 'Gebucht'
    },
    {
        key: 'Bezahlt',
        label: 'Bezahlt'
    },
    {
        key: 'Storno',
        label: 'Storno'
    }
];
const OPPORTUNITY_STAGE_COLUMNS = [
    {
        key: 'Qualification',
        label: 'Qualification'
    },
    {
        key: 'Needs Analysis',
        label: 'Needs Analysis'
    },
    {
        key: 'Proposal',
        label: 'Proposal'
    },
    {
        key: 'Negotiation',
        label: 'Negotiation'
    },
    {
        key: 'Closed Won',
        label: 'Closed Won'
    },
    {
        key: 'Closed Lost',
        label: 'Closed Lost'
    }
];
const TASK_STATUS_COLUMNS = [
    {
        key: 'Not Started',
        label: 'Not Started'
    },
    {
        key: 'Open',
        label: 'Open'
    },
    {
        key: 'Completed',
        label: 'Completed'
    }
];
const STATUS_REGISTRY = [
    {
        entityType: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Task,
        apiName: 'Task',
        field: 'Status',
        entityPath: 'task',
        columns: TASK_STATUS_COLUMNS
    },
    {
        entityType: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Case,
        apiName: 'Case',
        field: 'Status',
        entityPath: 'case',
        columns: CASE_STATUS_COLUMNS
    },
    {
        entityType: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Order,
        apiName: 'Order',
        // OrdersTable öffnet den Drawer mit useEntityPreview('Auftrag__c', …)
        aliases: [
            'Auftrag__c'
        ],
        field: 'Status',
        entityPath: 'order',
        columns: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$orders$2f$orderStatusConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ORDER_STATUS_COLUMNS"]
    },
    {
        entityType: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].MaterialProposal,
        apiName: 'Material_Proposal__c',
        field: 'Status__c',
        entityPath: 'material-proposals',
        columns: MATERIAL_PROPOSAL_STATUS_COLUMNS
    },
    {
        entityType: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].SampleSending,
        apiName: 'Sample_Sending__c',
        field: 'Status__c',
        entityPath: 'sample-sending',
        columns: SAMPLE_SENDING_STATUS_COLUMNS
    },
    {
        entityType: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].MaterialAnalysis,
        apiName: 'Materialanalyse__c',
        field: 'Status__c',
        entityPath: 'material-analysis',
        columns: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$material$2d$analysis$2f$statusConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MATERIAL_ANALYSIS_STATUS_COLUMNS"]
    },
    {
        entityType: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Opportunity,
        apiName: 'Opportunity',
        field: 'StageName',
        entityPath: 'opportunity',
        columns: OPPORTUNITY_STAGE_COLUMNS
    },
    {
        entityType: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Invoice,
        apiName: 'Abrechnung__c',
        field: 'Status_der_Abrechnung__c',
        entityPath: 'invoice',
        columns: INVOICE_STATUS_COLUMNS
    }
];
function getStatusConfig(entityTypeOrApiName) {
    return STATUS_REGISTRY.find((entry)=>entry.entityType === entityTypeOrApiName || entry.apiName === entityTypeOrApiName || entry.aliases?.includes(entityTypeOrApiName));
}
function getStatusFieldOptions(entityTypeOrApiName) {
    const config = getStatusConfig(entityTypeOrApiName);
    return config ? config.columns.map((c)=>({
            value: c.key,
            label: c.label
        })) : [];
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/team/team.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TEAM_ROLES",
    ()=>TEAM_ROLES,
    "findTeamMemberByEmail",
    ()=>findTeamMemberByEmail,
    "findTeamMemberBySalesforceId",
    ()=>findTeamMemberBySalesforceId,
    "isTeamRole",
    ()=>isTeamRole
]);
/**
 * #1249 (M-27): Wer zum Team gehört, steht in der Nutzertabelle — nicht mehr in
 * hartcodierten Salesforce-User-Ids in vier Config-Dateien. Neue Mitarbeitende
 * erscheinen damit automatisch (Owner-Filter, Avatare, absence.io-Auswertungen).
 *
 * Dieses Modul ist abhängigkeitsfrei bis auf die RBAC-Konstanten und damit auch
 * im Client nutzbar; die Datenbankabfrage liegt in `getTeamMembers.ts`.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$rbac$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/rbac/constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$auth$2f$viewAs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/auth/viewAs.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$utils$2f$soqlSanitizer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/utils/soqlSanitizer.ts [app-client] (ecmascript)");
;
;
;
const TEAM_ROLES = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$rbac$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ROLES"].filter(_c = (role)=>!(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$auth$2f$viewAs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRecordScopedRole"])(role) && !__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$rbac$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTENT_ONLY_ROLES"].includes(role));
_c1 = TEAM_ROLES;
function isTeamRole(role) {
    return typeof role === 'string' && TEAM_ROLES.includes(role);
}
function findTeamMemberBySalesforceId(members, salesforceId) {
    const id18 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$utils$2f$soqlSanitizer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toSalesforceId18"])(salesforceId);
    if (!id18) return undefined;
    return members.find((member)=>member.salesforceId === id18);
}
function findTeamMemberByEmail(members, email) {
    const gesucht = email?.trim().toLowerCase();
    if (!gesucht) return undefined;
    return members.find((member)=>member.email?.toLowerCase() === gesucht);
}
var _c, _c1;
__turbopack_context__.k.register(_c, "TEAM_ROLES$ROLES.filter");
__turbopack_context__.k.register(_c1, "TEAM_ROLES");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/url/contactLinks.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MAP_PAGE_PATH",
    ()=>MAP_PAGE_PATH,
    "MAP_QUERY_MAX",
    ()=>MAP_QUERY_MAX,
    "androidGeoHref",
    ()=>androidGeoHref,
    "appleMapsHref",
    ()=>appleMapsHref,
    "isAndroidPlatform",
    ()=>isAndroidPlatform,
    "isApplePlatform",
    ()=>isApplePlatform,
    "isValidGeo",
    ()=>isValidGeo,
    "knownGeoFor",
    ()=>knownGeoFor,
    "mailtoHref",
    ()=>mailtoHref,
    "mapAppHref",
    ()=>mapAppHref,
    "mapPageHref",
    ()=>mapPageHref,
    "parseMapPageParams",
    ()=>parseMapPageParams,
    "phoneToE164",
    ()=>phoneToE164,
    "telHref",
    ()=>telHref
]);
/**
 * #2054: Linkziele für Telefon, E-Mail und Anschrift — rein, ohne React. Die
 * Firmenwerte kommen aus `config/companyContact.ts`; Werte aus
 * Redaktionsdaten (CMS-Kontaktkarte, Teamkarten, Konten) werden hier
 * erkannt: passt ein Wert nicht zum Muster, gibt es kein Linkziel und die
 * Anzeige bleibt Text.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$mail$2f$address$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/mail/address.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$companyContact$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/companyContact.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$i18n$2f$siteLocales$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/i18n/siteLocales.ts [app-client] (ecmascript)");
;
;
;
/** Zeichen, die eine geschriebene Telefonnummer enthalten darf */ const PHONE_TEXT = /^\+?[\d\s()./–-]+$/;
/** E.164: höchstens 15 Ziffern; unter 6 Ziffern ist es keine Rufnummer */ const MIN_DIGITS = 6;
const MAX_DIGITS = 15;
/** Ländervorwahl für national geschriebene Nummern (`06126 …`) */ const DEFAULT_COUNTRY_CODE = '49';
function phoneToE164(text) {
    if (typeof text !== 'string') return null;
    const roh = text.trim();
    if (!roh || !PHONE_TEXT.test(roh)) return null;
    const ohneNull = roh.replace(/^(\+\d{1,3})\s*\(0\)/, '$1');
    const ziffern = ohneNull.replace(/\D/g, '');
    let e164;
    if (ohneNull.startsWith('+')) e164 = `+${ziffern}`;
    else if (ziffern.startsWith('00')) e164 = `+${ziffern.slice(2)}`;
    else if (ziffern.startsWith('0')) e164 = `+${DEFAULT_COUNTRY_CODE}${ziffern.slice(1)}`;
    else return null;
    const anzahl = e164.length - 1;
    if (anzahl < MIN_DIGITS || anzahl > MAX_DIGITS || e164.startsWith('+0')) return null;
    return e164;
}
function telHref(phone) {
    const e164 = phoneToE164(phone);
    return e164 ? `tel:${e164}` : null;
}
function mailtoHref(address, subject) {
    const adresse = typeof address === 'string' ? address.trim() : '';
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$mail$2f$address$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMailAddress"])(adresse)) return null;
    const betreff = subject?.trim();
    return betreff ? `mailto:${adresse}?subject=${encodeURIComponent(betreff)}` : `mailto:${adresse}`;
}
const koordinaten = (geo)=>`${geo.lat},${geo.lon}`;
const einzeilig = (query)=>query.replace(/\s+/g, ' ').trim();
const MAP_PAGE_PATH = '/map/';
const MAP_QUERY_MAX = 300;
/** Nachkommastellen der Koordinaten im Link (6 ≈ 10 cm) */ const GEO_STELLEN = 6;
const runde = (wert)=>Number(wert.toFixed(GEO_STELLEN));
function isValidGeo(geo) {
    return !!geo && Number.isFinite(geo.lat) && Number.isFinite(geo.lon) && Math.abs(geo.lat) <= 90 && Math.abs(geo.lon) <= 180;
}
function mapPageHref(target, locale) {
    if (!target) return null;
    const text = einzeilig(target.query).slice(0, MAP_QUERY_MAX);
    const geo = isValidGeo(target.geo) ? target.geo : undefined;
    if (!text && !geo) return null;
    // Von Hand kodiert (encodeURIComponent, Leerzeichen %20): URLSearchParams
    // schreibt je Umgebung `+` oder `%20` — der Link soll überall gleich sein.
    const teile = [];
    if (geo) teile.push(`lat=${runde(geo.lat)}`, `lon=${runde(geo.lon)}`);
    if (text) teile.push(`q=${encodeURIComponent(text)}`);
    const pfad = `${MAP_PAGE_PATH}?${teile.join('&')}`;
    return locale ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$i18n$2f$siteLocales$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localizePath"])(pfad, locale) : pfad;
}
function parseMapPageParams(params) {
    const query = einzeilig(params.get('q') ?? '').slice(0, MAP_QUERY_MAX);
    const latRoh = params.get('lat');
    const lonRoh = params.get('lon');
    const lat = latRoh !== null && latRoh.trim() !== '' ? Number(latRoh) : NaN;
    const lon = lonRoh !== null && lonRoh.trim() !== '' ? Number(lonRoh) : NaN;
    const geo = isValidGeo({
        lat,
        lon
    }) ? {
        lat: runde(lat),
        lon: runde(lon)
    } : undefined;
    if (!query && !geo) return null;
    return geo ? {
        query,
        geo
    } : {
        query
    };
}
function knownGeoFor(query) {
    const text = einzeilig(query ?? '').toLowerCase();
    if (!text) return undefined;
    const { street, postalCode } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$companyContact$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMPANY_ADDRESS"];
    return text.includes(street.toLowerCase()) && text.includes(postalCode) ? {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$companyContact$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMPANY_ADDRESS"].geo
    } : undefined;
}
function androidGeoHref(query, geo) {
    const ziel = geo ? koordinaten(geo) : '0,0';
    return `geo:${ziel}?q=${encodeURIComponent(einzeilig(query))}`;
}
function appleMapsHref(query, geo) {
    const text = einzeilig(query);
    const teile = [];
    if (text) teile.push(`q=${encodeURIComponent(text)}`);
    if (geo) teile.push(`ll=${koordinaten(geo)}`);
    return `https://maps.apple.com/?${teile.join('&')}`;
}
function isApplePlatform(userAgent) {
    return typeof userAgent === 'string' && /iPhone|iPad|iPod|Macintosh/.test(userAgent);
}
function isAndroidPlatform(userAgent) {
    return typeof userAgent === 'string' && /Android/i.test(userAgent);
}
function mapAppHref(target, userAgent) {
    if (!target) return null;
    const text = einzeilig(target.query);
    const geo = isValidGeo(target.geo) ? target.geo : undefined;
    if (!text && !geo) return null;
    if (isApplePlatform(userAgent)) return appleMapsHref(text, geo);
    if (isAndroidPlatform(userAgent)) return androidGeoHref(text, geo);
    return null;
}
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

//# sourceMappingURL=apps_web_src_lib_0831i7x6h1176._.js.map