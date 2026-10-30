(()=>{"use strict";(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
"[project]/apps/web/src/config/mobileMenu.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * #2029: Ein mobiles Menü für ausgeloggt und eingeloggt (`Organism/MobileMenuShell`).
 *
 * Nutzungsmessung: `mobile_menu` mit genau zwei festen Kennungen — `mode`
 * (Zustand des Menüs) und `action` (Öffnen oder Wechsel auf eine Seite aus dem
 * Menü). Das Ziel einer Navigation steht schon im folgenden Seitenaufruf
 * (`pageview` mit `from`), deshalb hier kein Pfad.
 */ __turbopack_context__.s([
    "APP_MOBILE_MAX_WIDTH_PX",
    ()=>APP_MOBILE_MAX_WIDTH_PX,
    "MOBILE_MENU_ACTIONS",
    ()=>MOBILE_MENU_ACTIONS,
    "MOBILE_MENU_EVENT",
    ()=>MOBILE_MENU_EVENT,
    "MOBILE_MENU_ID",
    ()=>MOBILE_MENU_ID,
    "MOBILE_MENU_MODES",
    ()=>MOBILE_MENU_MODES,
    "isMobileMenuAction",
    ()=>isMobileMenuAction,
    "isMobileMenuMode",
    ()=>isMobileMenuMode
]);
const MOBILE_MENU_MODES = [
    'guest',
    'app'
];
const MOBILE_MENU_ACTIONS = [
    'open',
    'navigate'
];
const MOBILE_MENU_EVENT = 'mobile_menu';
const isMobileMenuMode = (value)=>typeof value === 'string' && MOBILE_MENU_MODES.includes(value);
const isMobileMenuAction = (value)=>typeof value === 'string' && MOBILE_MENU_ACTIONS.includes(value);
const APP_MOBILE_MAX_WIDTH_PX = 1024;
const MOBILE_MENU_ID = 'mobile-menu';
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/config/navAccess.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ADVISOR_NAV_RESOURCES",
    ()=>ADVISOR_NAV_RESOURCES,
    "MIN_GRUPPEN_KINDER",
    ()=>MIN_GRUPPEN_KINDER,
    "STAFF_NAV_RESOURCES",
    ()=>STAFF_NAV_RESOURCES,
    "aktiveUnterseite",
    ()=>aktiveUnterseite,
    "hatNavRechte",
    ()=>hatNavRechte,
    "istElternAktiv",
    ()=>istElternAktiv,
    "istNavItemSichtbar",
    ()=>istNavItemSichtbar,
    "istNavItemSichtbarFuer",
    ()=>istNavItemSichtbarFuer,
    "istTrenner",
    ()=>istTrenner,
    "navPfad",
    ()=>navPfad,
    "navSlug",
    ()=>navSlug,
    "normalisiereTrenner",
    ()=>normalisiereTrenner,
    "sichtbareUnterseiten",
    ()=>sichtbareUnterseiten
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$rbac$2f$permissions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/rbac/permissions.ts [app-client] (ecmascript)");
;
const ADVISOR_NAV_RESOURCES = [
    'dashboard',
    'Product2',
    'Monitored_Material__c',
    'Materialanalyse__c'
];
const STAFF_NAV_RESOURCES = [
    // Kern-Objekte (MUSS)
    'Case',
    'Task',
    'Account',
    'Contact',
    'Supplier_Audit__c',
    'Produktionsstandort__c',
    'Unternehmenszertifikat__c',
    'Projekt__c',
    'Bedarfe__c',
    'Material_Proposal__c',
    'Materialanalyse__c',
    'Product2',
    'Order',
    'OrderItem',
    'Abrechnung__c',
    'Contract',
    'Kontakt_bergaben__c',
    'Onboarding__c',
    // PO 31.08.: Musterversand gehört doch ins erste Release
    'Sample_Sending__c',
    // Bereiche
    'dashboard',
    // #1330: internes Wiki — Anleitungen für alle Mitarbeiter
    'wiki',
    // #1853: Zeit & Abwesenheit — sichtbar nur, wo hasObjectAccess den Bereich
    // öffnet (Vorab-Phase: staff mit Tag intern; Modus all: alle staff)
    'working-hours',
    'absences',
    // AB-Ergänzung 28.08.: staff verwaltet Kunden-User (Rollen-Vergabe
    // admin/staff bleibt admin-only — Schranke in userFieldPolicy)
    'user-management',
    // Funktionscheck 27.08.: Verifizierung REIN (key-lose externe Checks
    // melden sich als „nicht konfiguriert")
    'verification-module',
    // Modul-Navs — sichtbar nur, wenn das jeweilige Modul aktiv ist
    'Monitored_Material__c',
    'pricing',
    'rigk-module',
    'plastrack'
];
function istNavItemSichtbar(role, resource, itemRoles, userContext) {
    if (!resource) return true;
    if (role === 'advisor') {
        return ADVISOR_NAV_RESOURCES.includes(resource);
    }
    // #843: staff sieht nur das SOLL-Set — die Allowlist schränkt ein, das
    // Ressourcenrecht (inkl. Modul-Kopplung) entscheidet danach wie gehabt.
    // Ausnahme: Ressourcen, die erst ein Staff-Tag öffnet (Basis-Rolle: kein
    // view, mit Kontext: view — z. B. Finance über den finance-Tag), bleiben
    // für die getaggten Mitarbeiter sichtbar; das SOLL beschreibt die Basis.
    if (role === 'staff' && !STAFF_NAV_RESOURCES.includes(resource)) {
        // Basis = Rollendefinition (Matrix). Bewusst nicht hasObjectAccess({ role: 'staff' }):
        // für die Ressourcen Zeit & Abwesenheit gibt der Browser ohne Snapshot immer false
        // (R86, Schalter TIME_AREA_AUDIENCE) — die Ressourcen sähen sonst „tag-freigeschaltet“ aus.
        // Für alle anderen Ressourcen ist das dasselbe Ergebnis (ohne Module und Tags = Matrix).
        const basisSichtbar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$rbac$2f$permissions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getGlobalPermissions"])().staff?.[resource]?.view === true;
        const mitKontextSichtbar = userContext ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$rbac$2f$permissions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasObjectAccess"])(userContext, resource, 'view') : basisSichtbar;
        const tagFreigeschaltet = mitKontextSichtbar && !basisSichtbar;
        if (!tagFreigeschaltet) return false;
    }
    // #358: eine explizite Rollen-Allowlist am Punkt gilt ZUSAETZLICH zum
    // Ressourcenrecht — sie kann nur einschraenken, nie erweitern.
    const effectiveRole = userContext?.role ?? role;
    if (itemRoles && !itemRoles.includes(effectiveRole)) {
        return false;
    }
    return userContext ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$rbac$2f$permissions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasObjectAccess"])(userContext, resource, 'view') : (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$rbac$2f$permissions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasObjectAccess"])({
        role
    }, resource, 'view');
}
function istNavItemSichtbarFuer(userContext, resource, itemRoles) {
    if (!userContext?.role) return false;
    return istNavItemSichtbar(userContext.role, resource, itemRoles, userContext);
}
function hatNavRechte(userContext, rechte) {
    if (!rechte || rechte.length === 0) return true;
    if (!userContext) return false;
    return rechte.every((recht)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$rbac$2f$permissions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasObjectAccess"])(userContext, recht.resource, recht.aktion));
}
const MIN_GRUPPEN_KINDER = 2;
function sichtbareUnterseiten(role, subPages, userContext) {
    // #1887: ohne Rolle keine Unterseiten (fail-closed)
    if (!subPages || !role) return [];
    return subPages.filter((page)=>(!page.roles || page.roles.includes(role)) && hatNavRechte(userContext, page.rechte));
}
const ohneSchraegstrich = (p)=>p.replace(/\/$/, '');
function navPfad(href) {
    return ohneSchraegstrich(href.split('?')[0] ?? '');
}
/** Query-Parameter einer Unterseite (leer, wenn der Eintrag keine Query trägt). */ function navQuery(href) {
    return Array.from(new URLSearchParams(href.split('?')[1] ?? '').entries());
}
function aktiveUnterseite(pfad, kinder, suche) {
    const aktuell = ohneSchraegstrich(pfad);
    for (const kind of kinder){
        const query = navQuery(kind.href);
        if (query.length === 0 || navPfad(kind.href) !== aktuell) continue;
        if (suche && query.every(([name, wert])=>suche(name) === wert)) return kind.href;
    }
    let treffer;
    let laenge = -1;
    for (const kind of kinder){
        if (navQuery(kind.href).length > 0) continue;
        const ziel = navPfad(kind.href);
        if (ziel === aktuell) return kind.href;
        if (ziel && aktuell.startsWith(`${ziel}/`) && ziel.length > laenge) {
            treffer = kind.href;
            laenge = ziel.length;
        }
    }
    return treffer;
}
/** Liegt `pfad` an einer Segmentgrenze unter `basis`? /auctions/inflow unter /auctions ja, /auctionsx nein. */ function liegtUnter(pfad, basis) {
    const ziel = ohneSchraegstrich(basis);
    return ziel !== '' && ohneSchraegstrich(pfad).startsWith(`${ziel}/`);
}
function istElternAktiv(pfad, href, kinder, suche) {
    if (ohneSchraegstrich(pfad) === ohneSchraegstrich(href)) return true;
    return liegtUnter(pfad, href) && aktiveUnterseite(pfad, kinder, suche) === undefined;
}
function navSlug(href) {
    const basis = navPfad(href).replace(/^\//, '').replace(/\//g, '-');
    const view = new URLSearchParams(href.split('?')[1] ?? '').get('view');
    return view ? `${basis}-${view}` : basis;
}
function istTrenner(item) {
    return item.nameKey === ' ' && !item.href && !item.icon;
}
function normalisiereTrenner(items) {
    const ergebnis = [];
    for (const item of items){
        if (istTrenner(item)) {
            const letzter = ergebnis[ergebnis.length - 1];
            if (!letzter || istTrenner(letzter)) continue;
        }
        ergebnis.push(item);
    }
    while(ergebnis.length > 0 && istTrenner(ergebnis[ergebnis.length - 1]))ergebnis.pop();
    return ergebnis;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/config/routes.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CATEGORY_COLORS",
    ()=>CATEGORY_COLORS,
    "NavigationPaths",
    ()=>NavigationPaths,
    "auctionsAdminProviderPath",
    ()=>auctionsAdminProviderPath,
    "auctionsDetailPath",
    ()=>auctionsDetailPath,
    "auctionsInvitePath",
    ()=>auctionsInvitePath,
    "auctionsProviderPath",
    ()=>auctionsProviderPath,
    "auctionsTermsPath",
    ()=>auctionsTermsPath,
    "auctionsWidgetPath",
    ()=>auctionsWidgetPath,
    "myAuctionsDetailPath",
    ()=>myAuctionsDetailPath,
    "navItemsBase",
    ()=>navItemsBase,
    "useNavItems",
    ()=>useNavItems
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconAccount$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconAccount/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/colors.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconCms$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconCms/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconBillboard$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconBillboard/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconBookBookmark$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconBookBookmark/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconCase$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconCase/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconKanban$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconKanban/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconRelation$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconRelation/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconRelation$2f$IconRelation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__IconRelation__as__default$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconRelation/IconRelation.tsx [app-client] (ecmascript) <export IconRelation as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconContact$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconContact/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/ClientTranslation.tsx [app-client] (ecmascript) <export useClientSafeTranslation as useClientTranslation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconContactHandover$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconContactHandover/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconInvoice$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconInvoice/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconOnboarding$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconOnboarding/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconOpportunity$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconOpportunity/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconOpportunityLineItem$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconOpportunityLineItem/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconOrderItem$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconOrderItem/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconRequirement$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconRequirement/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconSampleFeedback$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconSampleFeedback/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconProzessfeedback$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconProzessfeedback/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconEuro$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconEuro/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconAuction$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconAuction/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconLohn$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconLohn/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconMatrix$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconMatrix/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconMatrix$2f$IconMatrix$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconMatrix/IconMatrix.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconSampleSending$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconSampleSending/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconTask$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconTask/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconUsers$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconUsers/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconProduct$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconProduct/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconMonitoredMaterial$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconMonitoredMaterial/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconProject$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconProject/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconMaterialAnalysis$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconMaterialAnalysis/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconOrder$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconOrder/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconCompanyCertificate$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconCompanyCertificate/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconProductionSite$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconProductionSite/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconSupplierAudit$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconSupplierAudit/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconConnection$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconConnection/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconRecyclateQualityGrade$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconRecyclateQualityGrade/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconAccessManagement$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconAccessManagement/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconPlastrack$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconPlastrack/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconRIGK$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconRIGK/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconRIGK$2f$IconRIGK$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconRIGK/IconRIGK.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconDocument$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconDocument/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconPresentationChart$2f$IconPresentationChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconPresentationChart/IconPresentationChart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconAdmin$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconAdmin/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconTokens$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconTokens/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconHome$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconHome/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconFinance$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconFinance/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconFinance$2f$IconFinance$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconFinance/IconFinance.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconChartBarTrendUp$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconChartBarTrendUp/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconStockPrice$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconStockPrice/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconStockPrice$2f$IconStockPrice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconStockPrice/IconStockPrice.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconSentry$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconSentry/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconSentry$2f$IconSentry$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconSentry/IconSentry.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconWindowAnalytics$2f$IconWindowAnalytics$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconWindowAnalytics/IconWindowAnalytics.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconVerification$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconVerification/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconBell$2f$IconBell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconBell/IconBell.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconCreditCard$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconCreditCard/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconWorkingHours$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconWorkingHours/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconVacation$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconVacation/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconAI$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconAI/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconRbac$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconRbac/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconShield$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconShield/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconGit$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconGit/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconDatabase$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconDatabase/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconLanguage$2f$IconLanguage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconLanguage/IconLanguage.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconCubeAxis$2f$IconCubeAxis$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconCubeAxis/IconCubeAxis.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconMailing$2f$IconMailing$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconMailing/IconMailing.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconRunner$2f$IconRunner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconRunner/IconRunner.tsx [app-client] (ecmascript)");
// ROLES und FINANCE_WORKFLOW_ROLES sind die RBAC-Quelle (#338); permissions.ts
// leitet `Role` davon ab. #1074 nutzt beide für die Rollen-Gates der Unterseiten.
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$rbac$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/rbac/constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$finance$2f$eingangsbelegeZugriff$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/finance/eingangsbelegeZugriff.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$navAccess$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/navAccess.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useUserContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/useUserContext.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
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
var NavigationPaths = /*#__PURE__*/ function(NavigationPaths) {
    // List Routes
    NavigationPaths["ACCOUNTS"] = "/accounts";
    NavigationPaths["CASES"] = "/cases";
    NavigationPaths["COMPANY_CERTIFICATES"] = "/company-certificates";
    NavigationPaths["CONTACT_HANDOVERS"] = "/contact-handovers";
    NavigationPaths["CONTACTS"] = "/contacts";
    NavigationPaths["CONTRACTS"] = "/contracts";
    NavigationPaths["INVOICES"] = "/invoices";
    NavigationPaths["MATERIAL_ANALYSES"] = "/material-analyses";
    NavigationPaths["MONITORED_MATERIALS"] = "/monitored-materials";
    NavigationPaths["MONITORED_MATERIALS_MINE"] = "/monitored-materials/mine";
    NavigationPaths["MONITORED_MATERIALS_ANALYTICS"] = "/monitored-materials/analytics";
    NavigationPaths["MONITORED_MATERIALS_METHODOLOGY"] = "/monitored-materials/methodology";
    NavigationPaths["MONITORED_MATERIALS_DATASET_STATISTICS"] = "/monitored-materials/dataset-statistics";
    NavigationPaths["MONITORED_MATERIALS_QUALITY_RANKINGS"] = "/monitored-materials/quality-rankings";
    NavigationPaths["MONITORED_MATERIALS_QUALITY_CORRELATIONS"] = "/monitored-materials/quality-correlations";
    NavigationPaths["MONITORED_MATERIALS_APPLICATION_MATRIX"] = "/monitored-materials/application-matrix";
    NavigationPaths["MONITORED_MATERIALS_SPEC_PROFILES"] = "/monitored-materials/spec-profiles";
    NavigationPaths["MONITORED_MATERIALS_SPEC_CRITERIA"] = "/monitored-materials/spec-criteria";
    NavigationPaths["MONITORED_MATERIALS_DATA_QUALITY"] = "/monitored-materials/data-quality";
    NavigationPaths["MONITORED_MATERIALS_NORM_CHECK"] = "/monitored-materials/norm-check";
    NavigationPaths["ONBOARDINGS"] = "/onboardings";
    NavigationPaths["OPPORTUNITIES"] = "/opportunities";
    NavigationPaths["MATERIAL_PROPOSALS"] = "/material-proposals";
    NavigationPaths["ORDER_ITEMS"] = "/orderitems";
    NavigationPaths["ORDERS"] = "/orders";
    NavigationPaths["PRODUCTION_SITES"] = "/production-sites";
    NavigationPaths["PRODUCTS"] = "/products";
    NavigationPaths["PRODUCTS_SEARCH"] = "/products/search";
    NavigationPaths["PRODUCTS_MINE"] = "/products/mine";
    NavigationPaths["PROJECTS"] = "/projects";
    NavigationPaths["REQUIREMENTS"] = "/requirements";
    NavigationPaths["SAMPLE_FEEDBACKS"] = "/sample-feedbacks";
    // #1753: Prozessfeedback (CAPA), admin-only
    NavigationPaths["PROCESS_FEEDBACKS"] = "/process-feedbacks";
    // #1762: Kostenstellen, admin-only
    NavigationPaths["COST_CENTERS"] = "/cost-centers";
    // #1761: Lohndienstleistungen, admin-only
    NavigationPaths["TOLL_SERVICES"] = "/toll-services";
    // #1760: Prüfparameter, admin-only
    NavigationPaths["AUDIT_PROPERTIES"] = "/audit-properties";
    // #1759: Zertifikats-Katalog, admin-only
    NavigationPaths["CERTIFICATES"] = "/certificates";
    NavigationPaths["SAMPLE_SENDINGS"] = "/sample-sendings";
    NavigationPaths["SUPPLIER_AUDITS"] = "/supplier-audits";
    NavigationPaths["TASKS"] = "/tasks";
    NavigationPaths["USERS"] = "/users";
    NavigationPaths["DATABASE"] = "/database";
    NavigationPaths["RECYCLATE_GRADES"] = "/recyclate-grades";
    NavigationPaths["RECYCLATE_COMPATIBILITIES"] = "/recyclate-compatibilities";
    NavigationPaths["DOCUMENTS"] = "/documents";
    NavigationPaths["RIGK"] = "/rigk";
    NavigationPaths["RIGK_LIST"] = "/rigk/list";
    NavigationPaths["RIGK_MAP"] = "/rigk/map";
    NavigationPaths["RIGK_CONTACTS"] = "/rigk/contacts";
    // Feature Routes
    NavigationPaths["VERIFICATION"] = "/verification";
    NavigationPaths["ACCESS_MANAGEMENT"] = "/access-management";
    NavigationPaths["ACCESS_MANAGEMENT_USERS"] = "/access-management/users";
    NavigationPaths["ACCESS_MANAGEMENT_GRANTS"] = "/access-management/grants";
    NavigationPaths["ACCESS_MANAGEMENT_ACTIVITY"] = "/access-management/activity";
    NavigationPaths["PLASTRACK"] = "/plastrack";
    NavigationPaths["PLASTRACK_OVERVIEW"] = "/plastrack/overview";
    NavigationPaths["PLASTRACK_SCANS"] = "/plastrack/scans";
    NavigationPaths["PLASTRACK_BOXES"] = "/plastrack/boxes";
    NavigationPaths["PLASTRACK_MAP"] = "/plastrack/map";
    NavigationPaths["ADMIN"] = "/admin";
    NavigationPaths["NOTIFICATION_MANAGEMENT"] = "/notification-management";
    // #1158: Redaktion der öffentlichen Seiten
    NavigationPaths["CMS"] = "/cms";
    NavigationPaths["CMS_PAGES"] = "/cms/pages";
    NavigationPaths["CMS_MEDIA"] = "/cms/media";
    // #1330: Kategorien der Medienbibliothek
    NavigationPaths["CMS_MEDIA_CATEGORIES"] = "/cms/media-categories";
    NavigationPaths["CMS_NEWS"] = "/cms/news";
    NavigationPaths["CMS_CATEGORIES"] = "/cms/categories";
    NavigationPaths["CMS_PARTNERS"] = "/cms/partners";
    NavigationPaths["CMS_PRODUCTS"] = "/cms/products";
    NavigationPaths["CMS_REDIRECTS"] = "/cms/redirects";
    NavigationPaths["CMS_NAVIGATION"] = "/cms/navigation";
    // #2082: Übersetzungen der Redaktion (Matrix) und Sprachstand der Website (#2090, umgezogen)
    NavigationPaths["CMS_TRANSLATIONS"] = "/cms/translations";
    NavigationPaths["CMS_TRANSLATIONS_LANGUAGES"] = "/cms/translations/languages";
    NavigationPaths["CMS_WIKI"] = "/cms/wiki";
    // #1593: Freigabe-Anfragen der Redaktion
    NavigationPaths["CMS_REVIEWS"] = "/cms/reviews";
    // #1352: Kategorien des Wikis
    NavigationPaths["CMS_WIKI_CATEGORIES"] = "/cms/wiki-categories";
    // #1330: internes Wiki (lesen: admin und staff)
    NavigationPaths["WIKI"] = "/wiki";
    // #1856: Platzhalter INflow — admin und partner mit Tag ineos
    NavigationPaths["MY_AUCTIONS"] = "/my-auctions";
    // #1881: Unterseiten von /my-auctions (Bereichsnavigation im PageHead)
    NavigationPaths["MY_AUCTIONS_NEU"] = "/my-auctions/neu";
    NavigationPaths["MY_AUCTIONS_POOL"] = "/my-auctions/pool";
    NavigationPaths["MY_AUCTIONS_AUSWERTUNG"] = "/my-auctions/auswertung";
    NavigationPaths["MY_AUCTIONS_ANBINDUNG"] = "/my-auctions/anbindung";
    NavigationPaths["MY_AUCTIONS_PROTOKOLL"] = "/my-auctions/protokoll";
    NavigationPaths["MY_AUCTIONS_EINSTELLUNGEN"] = "/my-auctions/einstellungen";
    // #1889: Auktionshaus — Bieter-Seite (erweiterter Pool), Unterseiten und
    // Betreiber-Sicht; Anbieterseiten liegen dynamisch unter /auctions/[slug]
    NavigationPaths["AUCTIONS"] = "/auctions";
    NavigationPaths["AUCTIONS_BEOBACHTET"] = "/auctions/beobachtet";
    NavigationPaths["AUCTIONS_HISTORIE"] = "/auctions/historie";
    NavigationPaths["AUCTIONS_ADMIN"] = "/auctions/admin";
    NavigationPaths["PIA_MANAGEMENT"] = "/pia-management";
    NavigationPaths["PIA_MANAGEMENT_TOOLS"] = "/pia-management/tools";
    NavigationPaths["PIA_MANAGEMENT_REVERT"] = "/pia-management/revert";
    NavigationPaths["PIA_MANAGEMENT_AUDIT"] = "/pia-management/audit";
    NavigationPaths["RBAC_MANAGEMENT"] = "/rbac-management";
    NavigationPaths["RBAC_MANAGEMENT_PERMISSIONS"] = "/rbac-management/permissions";
    NavigationPaths["RBAC_MANAGEMENT_RECORD_VISIBILITY"] = "/rbac-management/record-visibility";
    NavigationPaths["RBAC_MANAGEMENT_FIELD_VISIBILITY"] = "/rbac-management/field-visibility";
    NavigationPaths["RBAC_MANAGEMENT_STAFF_TAGS"] = "/rbac-management/staff-tags";
    NavigationPaths["TOKENS"] = "/tokens";
    NavigationPaths["SECURITY"] = "/security";
    NavigationPaths["GIT"] = "/git";
    NavigationPaths["GIT_PIPELINES"] = "/git/pipelines";
    NavigationPaths["GIT_RUNNERS"] = "/git/runners";
    NavigationPaths["GIT_MILESTONES"] = "/git/milestones";
    NavigationPaths["TRANSLATION_MANAGEMENT"] = "/translation-management";
    NavigationPaths["TRANSLATION_MANAGEMENT_BROWSE"] = "/translation-management/browse";
    NavigationPaths["TRANSLATION_MANAGEMENT_LANGUAGES"] = "/translation-management/languages";
    NavigationPaths["TRANSLATION_MANAGEMENT_DOMAINS"] = "/translation-management/domains";
    NavigationPaths["TRANSLATION_MANAGEMENT_MATRIX"] = "/translation-management/matrix";
    NavigationPaths["TRANSLATION_MANAGEMENT_BULK"] = "/translation-management/bulk";
    NavigationPaths["TRANSLATION_MANAGEMENT_OVERRIDES"] = "/translation-management/overrides";
    // #1757
    NavigationPaths["TRANSLATION_MANAGEMENT_MISSING"] = "/translation-management/missing";
    NavigationPaths["SENTRY"] = "/sentry";
    NavigationPaths["SENTRY_ISSUES"] = "/sentry/issues";
    NavigationPaths["SENTRY_PERFORMANCE"] = "/sentry/performance";
    NavigationPaths["SENTRY_RELEASES"] = "/sentry/releases";
    NavigationPaths["SENTRY_ALERTS"] = "/sentry/alerts";
    NavigationPaths["SENTRY_LOGS"] = "/sentry/logs";
    NavigationPaths["SENTRY_METRICS"] = "/sentry/metrics";
    NavigationPaths["USAGE"] = "/usage";
    // #1682: Mailvorlagen, Signatur, Kampagnen (admin); #1864: Unterseiten statt Tabs
    NavigationPaths["MAILING"] = "/mailing";
    NavigationPaths["MAILING_SIGNATUR"] = "/mailing/signatur";
    NavigationPaths["MAILING_KAMPAGNEN"] = "/mailing/kampagnen";
    NavigationPaths["MAILING_POSTFAECHER"] = "/mailing/postfaecher";
    // #1844: Job-System (Schalter, Jetzt ausführen, Lauf-Protokoll) — admin
    NavigationPaths["JOBS"] = "/jobs";
    NavigationPaths["MATERIAL_VISION"] = "/3drender";
    NavigationPaths["MATERIAL_VISION_DATA"] = "/3drender/data";
    NavigationPaths["THUMBNAILS"] = "/thumbnails";
    NavigationPaths["STOCKMARKET"] = "/stockmarket";
    NavigationPaths["STOCKMARKET_PRICES"] = "/stockmarket/prices";
    NavigationPaths["STOCKMARKET_PRICE_MOVEMENTS"] = "/stockmarket/price-movements";
    NavigationPaths["DASHBOARD"] = "/dashboard";
    NavigationPaths["FINANCE"] = "/finance";
    NavigationPaths["FINANCE_INVOICING"] = "/finance/invoicing";
    NavigationPaths["FINANCE_SUBSCRIPTIONS"] = "/finance/subscriptions";
    NavigationPaths["FINANCE_FORECAST"] = "/finance/forecast";
    NavigationPaths["OPERATIONS"] = "/operations";
    NavigationPaths["OPERATIONS_WORKFLOW"] = "/operations/workflow";
    NavigationPaths["SALES"] = "/sales";
    NavigationPaths["WEEKLY"] = "/weekly";
    NavigationPaths["PROFILE_TRAVELEXPENSES"] = "/profile/travelexpenses";
    NavigationPaths["WORKING_HOURS"] = "/working-hours";
    NavigationPaths["ABSENCES"] = "/absences";
    // Single Routes
    NavigationPaths["ACCOUNT"] = "/account/:id";
    NavigationPaths["CASE"] = "/case/:id";
    NavigationPaths["COMPANY_CERTIFICATE"] = "/company-certificate/:id";
    NavigationPaths["CONTACT_HANDOVER"] = "/contact-handover/:id";
    NavigationPaths["CONTACT"] = "/contact/:id";
    NavigationPaths["INVOICE"] = "/invoice/:id";
    NavigationPaths["MATERIAL_ANALYSIS"] = "/material-analysis/:id";
    NavigationPaths["MONITORED_MATERIAL"] = "/monitored-material/:id";
    NavigationPaths["ONBOARDING"] = "/onboarding/:id";
    NavigationPaths["OPPORTUNITY"] = "/opportunity/:id";
    NavigationPaths["MATERIAL_PROPOSAL"] = "/material-proposal/:id";
    NavigationPaths["ORDER_ITEM"] = "/orderitem/:id";
    NavigationPaths["ORDER"] = "/order/:id";
    NavigationPaths["PRODUCTION_SITE"] = "/production-site/:id";
    NavigationPaths["PRODUCT"] = "/product/:id";
    NavigationPaths["PROJECT"] = "/project/:id";
    NavigationPaths["REQUIREMENT"] = "/requirement/:id";
    NavigationPaths["SAMPLE_FEEDBACK"] = "/sample-feedback/:id";
    NavigationPaths["SAMPLE_SENDING"] = "/sample-sending/:id";
    NavigationPaths["SUPPLIER_AUDIT"] = "/supplier-audit/:id";
    NavigationPaths["TASK"] = "/task/:id";
    NavigationPaths["USER"] = "/user/:id";
    NavigationPaths["RIGK_ACCOUNT"] = "/rigk/:id";
    // Create Routes
    NavigationPaths["ACCOUNT_CREATE"] = "/account/create";
    NavigationPaths["CASE_CREATE"] = "/case/create";
    NavigationPaths["COMPANY_CERTIFICATE_CREATE"] = "/company-certificate/create";
    NavigationPaths["CONTACT_HANDOVER_CREATE"] = "/contact-handover/create";
    NavigationPaths["CONTACT_CREATE"] = "/contact/create";
    NavigationPaths["INVOICE_CREATE"] = "/invoice/create";
    NavigationPaths["MATERIAL_ANALYSIS_CREATE"] = "/material-analysis/create";
    NavigationPaths["MONITORED_MATERIAL_CREATE"] = "/monitored-material/create";
    NavigationPaths["ONBOARDING_CREATE"] = "/onboarding/create";
    NavigationPaths["OPPORTUNITY_CREATE"] = "/opportunity/create";
    NavigationPaths["MATERIAL_PROPOSAL_CREATE"] = "/material-proposal/create";
    NavigationPaths["ORDER_ITEM_CREATE"] = "/orderitem/create";
    NavigationPaths["ORDER_CREATE"] = "/order/create";
    NavigationPaths["PRODUCTION_SITE_CREATE"] = "/production-site/create";
    NavigationPaths["PRODUCT_CREATE"] = "/product/create";
    NavigationPaths["PROJECT_CREATE"] = "/project/create";
    NavigationPaths["REQUIREMENT_CREATE"] = "/requirement/create";
    NavigationPaths["SAMPLE_FEEDBACK_CREATE"] = "/sample-feedback/create";
    NavigationPaths["SAMPLE_SENDING_CREATE"] = "/sample-sending/create";
    NavigationPaths["SUPPLIER_AUDIT_CREATE"] = "/supplier-audit/create";
    NavigationPaths["TASK_CREATE"] = "/task/create";
    NavigationPaths["USER_CREATE"] = "/user/create";
    return NavigationPaths;
}({});
// #1066: Eine Kategorie = eine Nav-Gruppe (#871) = eine Farbe. Die Farbwerte
// sind die bisherigen; nur die Zuordnung folgt jetzt den Gruppen 0–10 + Admin.
// Drift-Guard: tests/config/navOrder.test.ts (eine Kategorie je Gruppe,
// kein doppelter Farbwert). QuickWheel nutzt acht dieser Farben als Palette.
/**
 * #1889: dynamische Routen der Auktionsbereiche — keine Einträge in der
 * Seitenleiste, nur über Links erreichbar. Segmente werden URL-kodiert.
 */ const seg = (wert)=>encodeURIComponent(wert);
const myAuctionsDetailPath = (id)=>`${"/my-auctions"}/${seg(id)}`;
const auctionsProviderPath = (slug)=>`${"/auctions"}/${seg(slug)}`;
const auctionsDetailPath = (slug, id)=>`${auctionsProviderPath(slug)}/${seg(id)}`;
const auctionsTermsPath = (slug)=>`${auctionsProviderPath(slug)}/bedingungen`;
const auctionsInvitePath = (token)=>`${"/auctions"}/einladung/${seg(token)}`;
const auctionsWidgetPath = (slug)=>`${"/auctions"}/widget/${seg(slug)}`;
const auctionsAdminProviderPath = (slug)=>`${"/auctions/admin"}/${seg(slug)}`;
const CATEGORY_COLORS = {
    dashboards: '#FCD34D',
    core: '#4DA3FF',
    accounts: '#5DE8D2',
    suppliers: '#FF8A75',
    materials: '#5CD94E',
    monitoring: '#67E8F9',
    projects: '#B97AFF',
    samples: '#FFBA4D',
    orders: '#FFCD00',
    invoices: '#FF6EB4',
    modules: '#E879F9',
    auctions: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].AUCTION,
    admin: '#C0CADD' // Admin-Block
};
// #1074: Rollen-Gates der Unterseiten spiegeln die Modul-PageHeads.
// Monitored Materials (MonitoredMaterialsSidebarButtons.tsx): Kundenrollen
// (user/rigk) sehen Meine Materialien, Spezifikationen, Analytics, Methodik;
// vier Seiten nur intern, drei weitere nur admin/staff (#783).
// Aus ROLES abgeleitet statt handgetippt, damit eine neue interne Rolle die
// Seiten automatisch sieht. #1855: partner ist extern (ohne SF-Zugriff) — raus.
const MM_INTERNE_ROLLEN = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$rbac$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ROLES"].filter(_c = (r)=>r !== 'user' && r !== 'rigk' && r !== 'partner');
_c1 = MM_INTERNE_ROLLEN;
const MM_ADMIN_STAFF = [
    'admin',
    'staff'
];
const navItemsBase = [
    // Gruppe 0: Dashboard
    {
        nameKey: 'nav.dashboard',
        href: "/dashboard",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconHome$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/apps/web/src/config/routes.tsx",
            lineNumber: 377,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        resource: 'dashboard',
        category: 'dashboards'
    },
    {
        nameKey: ' ',
        href: undefined,
        icon: undefined
    },
    // Gruppe 1: Fälle, Aufgaben
    {
        nameKey: 'nav.cases',
        href: "/cases",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconCase$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/apps/web/src/config/routes.tsx",
            lineNumber: 392,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        resource: 'Case',
        category: 'core'
    },
    {
        nameKey: 'nav.tasks',
        href: "/tasks",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconTask$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/apps/web/src/config/routes.tsx",
            lineNumber: 399,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        resource: 'Task',
        category: 'core'
    },
    {
        nameKey: ' ',
        href: undefined,
        icon: undefined
    },
    // Gruppe 2: Konten, Kontakte, Kontaktübergaben, Onboardings, Benutzer
    {
        nameKey: 'nav.accounts',
        href: "/accounts",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconAccount$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/apps/web/src/config/routes.tsx",
            lineNumber: 414,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        resource: 'Account',
        category: 'accounts'
    },
    {
        nameKey: 'nav.contacts',
        href: "/contacts",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconContact$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/apps/web/src/config/routes.tsx",
            lineNumber: 421,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        resource: 'Contact',
        category: 'accounts'
    },
    {
        nameKey: 'nav.contact_handovers',
        href: "/contact-handovers",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconContactHandover$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/apps/web/src/config/routes.tsx",
            lineNumber: 428,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        resource: 'Kontakt_bergaben__c',
        category: 'accounts'
    },
    {
        nameKey: 'nav.onboardings',
        href: "/onboardings",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconOnboarding$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/apps/web/src/config/routes.tsx",
            lineNumber: 435,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        resource: 'Onboarding__c',
        category: 'accounts'
    },
    {
        // #843: user-management gehört staff (Kunden-User-Verwaltung) — deshalb
        // bei den Konten, nicht im Admin-Block.
        nameKey: 'nav.users',
        href: "/users",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconUsers$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/apps/web/src/config/routes.tsx",
            lineNumber: 444,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        resource: 'user-management',
        category: 'accounts'
    },
    {
        nameKey: ' ',
        href: undefined,
        icon: undefined
    },
    // Gruppe 3: Produktionsstandorte, Verifizierung, Lieferantenaudits, Unternehmenszertifikate
    {
        nameKey: 'nav.productionSites',
        href: "/production-sites",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconProductionSite$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/apps/web/src/config/routes.tsx",
            lineNumber: 459,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        resource: 'Produktionsstandort__c',
        category: 'suppliers'
    },
    {
        nameKey: 'nav.verification',
        href: "/verification",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconVerification$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/apps/web/src/config/routes.tsx",
            lineNumber: 466,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        resource: 'verification-module',
        category: 'suppliers'
    },
    {
        nameKey: 'nav.supplierAudits',
        href: "/supplier-audits",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconSupplierAudit$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/apps/web/src/config/routes.tsx",
            lineNumber: 473,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        resource: 'Supplier_Audit__c',
        category: 'suppliers'
    },
    {
        nameKey: 'nav.companyCertificates',
        href: "/company-certificates",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconCompanyCertificate$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/apps/web/src/config/routes.tsx",
            lineNumber: 480,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        resource: 'Unternehmenszertifikat__c',
        category: 'suppliers'
    },
    {
        nameKey: ' ',
        href: undefined,
        icon: undefined
    },
    // Gruppe 4: Produkte, Anforderungen, Materialanalysen
    {
        nameKey: 'nav.products',
        href: "/products",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconProduct$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/apps/web/src/config/routes.tsx",
            lineNumber: 495,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        resource: 'Product2',
        category: 'materials'
    },
    {
        // #358: customer roles manage their OWN products (CRU) here, separate from
        // the marketplace catalogue that nav.products opens for them.
        nameKey: 'nav.myProducts',
        href: "/products/mine",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconProduct$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/apps/web/src/config/routes.tsx",
            lineNumber: 504,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        resource: 'Product2',
        roles: [
            'user',
            'rigk'
        ],
        category: 'materials'
    },
    {
        nameKey: 'nav.requirements',
        href: "/requirements",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconRequirement$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/apps/web/src/config/routes.tsx",
            lineNumber: 512,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        resource: 'Bedarfe__c',
        category: 'materials'
    },
    {
        nameKey: 'nav.materialAnalyses',
        href: "/material-analyses",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconMaterialAnalysis$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/apps/web/src/config/routes.tsx",
            lineNumber: 519,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        resource: 'Materialanalyse__c',
        category: 'materials'
    },
    {
        nameKey: ' ',
        href: undefined,
        icon: undefined
    },
    // Gruppe 5: Monitored Materials
    {
        nameKey: 'nav.monitoredMaterials',
        href: "/monitored-materials",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconMonitoredMaterial$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/apps/web/src/config/routes.tsx",
            lineNumber: 534,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        resource: 'Monitored_Material__c',
        category: 'monitoring',
        subPages: [
            {
                nameKey: 'nav.sub.monitoredMaterials.mine',
                nameDefault: 'Meine Materialien',
                href: "/monitored-materials/mine",
                roles: [
                    'user',
                    'rigk'
                ]
            },
            {
                nameKey: 'nav.sub.monitoredMaterials.specProfiles',
                href: "/monitored-materials/spec-profiles"
            },
            {
                nameKey: 'nav.sub.monitoredMaterials.analytics',
                href: "/monitored-materials/analytics"
            },
            {
                nameKey: 'nav.sub.monitoredMaterials.methodology',
                href: "/monitored-materials/methodology"
            },
            {
                nameKey: 'nav.sub.monitoredMaterials.datasetStatistics',
                href: "/monitored-materials/dataset-statistics",
                roles: MM_INTERNE_ROLLEN
            },
            {
                nameKey: 'nav.sub.monitoredMaterials.qualityRankings',
                href: "/monitored-materials/quality-rankings",
                roles: MM_INTERNE_ROLLEN
            },
            {
                nameKey: 'nav.sub.monitoredMaterials.qualityCorrelations',
                href: "/monitored-materials/quality-correlations",
                roles: MM_INTERNE_ROLLEN
            },
            {
                nameKey: 'nav.sub.monitoredMaterials.applicationMatrix',
                href: "/monitored-materials/application-matrix",
                roles: MM_INTERNE_ROLLEN
            },
            {
                nameKey: 'nav.sub.monitoredMaterials.specCriteria',
                href: "/monitored-materials/spec-criteria",
                roles: MM_ADMIN_STAFF
            },
            {
                nameKey: 'nav.sub.monitoredMaterials.dataQuality',
                href: "/monitored-materials/data-quality",
                roles: MM_ADMIN_STAFF
            },
            {
                nameKey: 'nav.sub.monitoredMaterials.normCheck',
                href: "/monitored-materials/norm-check",
                roles: MM_ADMIN_STAFF
            }
        ]
    },
    {
        nameKey: ' ',
        href: undefined,
        icon: undefined
    },
    // Gruppe 6: Projekte
    {
        // #359-Follow-up (PM 2026-07-06): Projektübersicht auch für rigk in der
        // Side-Navi — die Liste ist server-seitig record-gescoped (rigk sieht nur
        // via Hauptkunde/Hauptlieferant/Lohndienstleister verknüpfte bzw. eigene
        // Projekte) und feld-maskiert. Kein roles-Gate nötig.
        nameKey: 'nav.projects',
        href: "/projects",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconProject$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/apps/web/src/config/routes.tsx",
            lineNumber: 608,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        resource: 'Projekt__c',
        category: 'projects'
    },
    {
        nameKey: ' ',
        href: undefined,
        icon: undefined
    },
    // Gruppe 7: Materialvorschläge, Probenversand
    {
        nameKey: 'nav.materialProposals',
        href: "/material-proposals",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconOpportunityLineItem$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/apps/web/src/config/routes.tsx",
            lineNumber: 623,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        resource: 'Material_Proposal__c',
        category: 'samples'
    },
    {
        nameKey: 'nav.sample_sendings',
        href: "/sample-sendings",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconSampleSending$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/apps/web/src/config/routes.tsx",
            lineNumber: 630,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        resource: 'Sample_Sending__c',
        category: 'samples'
    },
    {
        nameKey: ' ',
        href: undefined,
        icon: undefined
    },
    // Gruppe 8: Contracts, Bestellungen, Bestellpositionen
    {
        // #449: Verträge — bündeln die Aufträge eines Kunden
        nameKey: 'nav.contracts',
        href: "/contracts",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconDocument$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/apps/web/src/config/routes.tsx",
            lineNumber: 646,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        resource: 'Contract',
        category: 'orders'
    },
    {
        nameKey: 'nav.orders',
        href: "/orders",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconOrder$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/apps/web/src/config/routes.tsx",
            lineNumber: 653,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        resource: 'Order',
        category: 'orders'
    },
    {
        nameKey: 'nav.order_items',
        href: "/orderitems",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconOrderItem$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/apps/web/src/config/routes.tsx",
            lineNumber: 660,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        resource: 'OrderItem',
        category: 'orders'
    },
    {
        nameKey: ' ',
        href: undefined,
        icon: undefined
    },
    // Gruppe 9: Rechnungen
    {
        nameKey: 'nav.invoices',
        href: "/invoices",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconInvoice$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/apps/web/src/config/routes.tsx",
            lineNumber: 675,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        resource: 'Abrechnung__c',
        category: 'invoices'
    },
    {
        nameKey: ' ',
        href: undefined,
        icon: undefined
    },
    // Gruppe 10: alle weiteren Module und Dashboards (bisherige Reihenfolge)
    {
        nameKey: 'nav.sample_feedbacks',
        href: "/sample-feedbacks",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconSampleFeedback$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/apps/web/src/config/routes.tsx",
            lineNumber: 690,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        resource: 'Sample_Feedback__c',
        category: 'modules'
    },
    {
        // #1753: Prozessfeedback (CAPA) — Liste nur für admin (Seite: Ressource
        // 'admin' wie /usage); staff behält Detailseite und Anlage.
        nameKey: 'nav.prozessfeedbacks',
        nameDefault: 'Prozessfeedback',
        href: "/process-feedbacks",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconProzessfeedback$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/apps/web/src/config/routes.tsx",
            lineNumber: 700,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        resource: 'Prozessfeedback__c',
        category: 'modules',
        roles: [
            'admin'
        ]
    },
    {
        // #1759: Zertifikats-Katalog — Liste nur für admin (Seite: Ressource 'admin'
        // wie /usage), die Detailseite bleibt mit dem Objektrecht erreichbar.
        nameKey: 'nav.certificates',
        nameDefault: 'Zertifikate',
        href: "/certificates",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconCompanyCertificate$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/apps/web/src/config/routes.tsx",
            lineNumber: 711,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        resource: 'Zertifikate__c',
        category: 'modules',
        roles: [
            'admin'
        ]
    },
    {
        // #1760: Prüfparameter — Liste nur für admin (Seite: Ressource 'admin'
        // wie /usage), die Detailseite bleibt mit dem Objektrecht erreichbar.
        nameKey: 'nav.auditProperties',
        nameDefault: 'Prüfparameter',
        href: "/audit-properties",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconMatrix$2f$IconMatrix$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconMatrix"], {}, void 0, false, {
            fileName: "[project]/apps/web/src/config/routes.tsx",
            lineNumber: 722,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        resource: 'AuditProperty__c',
        category: 'modules',
        roles: [
            'admin'
        ]
    },
    {
        // #1761: Lohndienstleistungen — Liste nur für admin (Seite: Ressource 'admin'
        // wie /usage), die Detailseite bleibt mit dem Objektrecht erreichbar.
        nameKey: 'nav.tollServices',
        nameDefault: 'Lohndienstleistungen',
        href: "/toll-services",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconLohn$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/apps/web/src/config/routes.tsx",
            lineNumber: 733,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        resource: 'Lohn__c',
        category: 'modules',
        roles: [
            'admin'
        ]
    },
    {
        // #1762: Kostenstellen — Liste nur für admin (Seite: Ressource 'admin'
        // wie /usage), die Detailseite bleibt mit dem Objektrecht erreichbar.
        nameKey: 'nav.costCenters',
        nameDefault: 'Kostenstellen',
        href: "/cost-centers",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconEuro$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {}, void 0, false, {
            fileName: "[project]/apps/web/src/config/routes.tsx",
            lineNumber: 744,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        resource: 'Kostenstelle_plastship__c',
        category: 'modules',
        roles: [
            'admin'
        ]
    },
    {
        nameKey: 'nav.opportunities',
        href: "/opportunities",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconOpportunity$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/apps/web/src/config/routes.tsx",
            lineNumber: 752,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        resource: 'Opportunity',
        category: 'modules'
    },
    {
        nameKey: 'nav.recyclateGrades',
        href: "/recyclate-grades",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconRecyclateQualityGrade$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/apps/web/src/config/routes.tsx",
            lineNumber: 759,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        resource: 'recyclate-grade',
        category: 'modules'
    },
    {
        nameKey: 'nav.recyclateCompatibilities',
        href: "/recyclate-compatibilities",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconConnection$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/apps/web/src/config/routes.tsx",
            lineNumber: 766,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        resource: 'recyclate-compatibility',
        category: 'modules'
    },
    {
        nameKey: 'nav.plastrack',
        href: "/plastrack",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconPlastrack$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {}, void 0, false, {
            fileName: "[project]/apps/web/src/config/routes.tsx",
            lineNumber: 773,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        resource: 'plastrack',
        category: 'modules',
        subPages: [
            {
                nameKey: 'nav.sub.plastrack.overview',
                href: "/plastrack/overview"
            },
            {
                nameKey: 'nav.sub.plastrack.scans',
                href: "/plastrack/scans"
            },
            {
                nameKey: 'nav.sub.plastrack.boxes',
                href: "/plastrack/boxes"
            },
            {
                nameKey: 'nav.sub.plastrack.map',
                href: "/plastrack/map"
            }
        ]
    },
    {
        nameKey: 'nav.rigk',
        href: "/rigk",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconRIGK$2f$IconRIGK$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconRIGK"], {}, void 0, false, {
            fileName: "[project]/apps/web/src/config/routes.tsx",
            lineNumber: 786,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        resource: 'rigk-module',
        category: 'modules',
        subPages: [
            {
                nameKey: 'nav.sub.rigk.list',
                href: "/rigk/list"
            },
            {
                nameKey: 'nav.sub.rigk.map',
                href: "/rigk/map"
            },
            {
                nameKey: 'nav.sub.rigk.contacts',
                href: "/rigk/contacts"
            }
        ]
    },
    {
        nameKey: 'nav.stockmarket',
        href: "/stockmarket",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconStockPrice$2f$IconStockPrice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconStockPrice"], {}, void 0, false, {
            fileName: "[project]/apps/web/src/config/routes.tsx",
            lineNumber: 798,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        resource: 'pricing',
        category: 'modules',
        subPages: [
            {
                nameKey: 'nav.sub.stockmarket.prices',
                href: "/stockmarket/prices"
            },
            // #1656: nur interne Rollen (Seite prüft dieselbe Regel)
            {
                nameKey: 'nav.sub.stockmarket.priceMovements',
                href: "/stockmarket/price-movements",
                roles: [
                    'admin',
                    'staff'
                ]
            }
        ]
    },
    {
        nameKey: 'nav.weekly',
        href: "/weekly",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconPresentationChart$2f$IconPresentationChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconPresentationChart"], {}, void 0, false, {
            fileName: "[project]/apps/web/src/config/routes.tsx",
            lineNumber: 814,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        resource: 'User',
        category: 'modules'
    },
    {
        nameKey: 'nav.finance',
        href: "/finance",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconFinance$2f$IconFinance$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconFinance"], {}, void 0, false, {
            fileName: "[project]/apps/web/src/config/routes.tsx",
            lineNumber: 821,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        resource: 'Finance',
        category: 'modules',
        // #1876: die Sidebar ist die eine Quelle der Finance-Einstiege (Arbeitsplatz
        // in Prozessfolge, #198/#828): Ausgangsrechnungen, dann die Pill-Ansichten
        // der Abrechnungsliste mit Ansicht und Seite wie die Kacheln der Startseite,
        // zuletzt die Auswertungen. „Abrechnungen" selbst ist der Nav-Punkt unter
        // Objekte (Regel #1074: kein Kind ist zugleich Nav-Punkt).
        subPages: [
            {
                nameKey: 'nav.sub.finance.ausgangsrechnungen',
                href: "/finance/invoicing",
                roles: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$rbac$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FINANCE_WORKFLOW_ROLES"]
            },
            {
                nameKey: 'nav.sub.finance.eingangBearbeiten',
                nameDefault: 'Eingang bearbeiten',
                href: `${"/invoices"}?view=invoice-eingang-bearbeiten&Rechnungstyp__c=Eingang`,
                roles: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$rbac$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FINANCE_WORKFLOW_ROLES"]
            },
            // #1928: Beleg-Arbeitsplatz (#1878) — Sichtbarkeit wie der Seiten-Guard
            // (admin, staff mit Tag finance; accounting ohne Case-Recht sieht ihn nicht)
            {
                nameKey: 'nav.sub.finance.eingangsbelege',
                nameDefault: 'Eingangsbelege',
                href: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$finance$2f$eingangsbelegeZugriff$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EINGANGSBELEGE_PFAD"],
                roles: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$finance$2f$eingangsbelegeZugriff$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EINGANGSBELEGE_ROLLEN"],
                rechte: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$finance$2f$eingangsbelegeZugriff$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EINGANGSBELEGE_RECHTE"]
            },
            {
                nameKey: 'nav.sub.finance.freizugeben',
                nameDefault: 'Freizugeben',
                href: `${"/invoices"}?view=invoice-freizugeben`,
                roles: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$rbac$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FINANCE_WORKFLOW_ROLES"]
            },
            {
                nameKey: 'nav.sub.finance.zuBuchen',
                nameDefault: 'Zu buchen',
                href: `${"/invoices"}?view=invoice-zu-buchen`,
                roles: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$rbac$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FINANCE_WORKFLOW_ROLES"]
            },
            {
                nameKey: 'nav.sub.finance.faellig',
                nameDefault: 'Fällig',
                href: `${"/invoices"}?view=invoice-payment-overdue&Rechnungstyp__c=Ausgang`,
                roles: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$rbac$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FINANCE_WORKFLOW_ROLES"]
            },
            {
                nameKey: 'nav.sub.finance.forecast',
                href: "/finance/forecast"
            },
            {
                nameKey: 'nav.sub.finance.subscriptions',
                href: "/finance/subscriptions"
            }
        ]
    },
    {
        nameKey: 'nav.operations',
        href: "/operations",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconKanban$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/apps/web/src/config/routes.tsx",
            lineNumber: 875,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        resource: 'operations',
        category: 'modules'
    },
    {
        nameKey: 'nav.workflow',
        href: "/operations/workflow",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconRelation$2f$IconRelation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__IconRelation__as__default$3e$__["default"], {}, void 0, false, {
            fileName: "[project]/apps/web/src/config/routes.tsx",
            lineNumber: 882,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        resource: 'operations',
        category: 'modules'
    },
    {
        nameKey: 'nav.sales',
        href: "/sales",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconChartBarTrendUp$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/apps/web/src/config/routes.tsx",
            lineNumber: 889,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        resource: 'sales',
        category: 'modules'
    },
    {
        nameKey: 'nav.documents',
        href: "/documents",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconDocument$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/apps/web/src/config/routes.tsx",
            lineNumber: 896,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        resource: 'documents',
        category: 'modules'
    },
    {
        nameKey: 'nav.workingHours',
        href: "/working-hours",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconWorkingHours$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/apps/web/src/config/routes.tsx",
            lineNumber: 903,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        resource: 'working-hours',
        category: 'modules'
    },
    {
        nameKey: 'nav.absences',
        href: "/absences",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconVacation$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/apps/web/src/config/routes.tsx",
            lineNumber: 910,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        resource: 'absences',
        category: 'modules'
    },
    {
        nameKey: 'nav.travelExpenses',
        href: "/profile/travelexpenses",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconCreditCard$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/apps/web/src/config/routes.tsx",
            lineNumber: 917,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        resource: 'travel-expenses',
        category: 'modules'
    },
    {
        // #1330: Wiki — Anleitungen. Ressource `wiki` + Rollenliste; #1507: alle
        // Rollen, jede sieht nur die für sie freigegebenen Einträge.
        nameKey: 'nav.wiki',
        nameDefault: 'Wiki',
        href: "/wiki",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconBookBookmark$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/apps/web/src/config/routes.tsx",
            lineNumber: 927,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        resource: 'wiki',
        category: 'modules',
        roles: [
            ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$rbac$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WIKI_ROLES"]
        ]
    },
    {
        // #1158/#1160: Redaktion der öffentlichen Seiten als Hauptmenüpunkt im
        // Modul-Block über dem Admin-Block — Ressource `cms`: nur admin und Staff
        // mit Tag editor (#1154) sehen ihn.
        nameKey: 'nav.cms',
        nameDefault: 'Redaktion',
        href: "/cms",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconCms$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/apps/web/src/config/routes.tsx",
            lineNumber: 939,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        resource: 'cms',
        category: 'modules',
        subPages: [
            {
                nameKey: 'nav.sub.cms.pages',
                nameDefault: 'Seiten',
                href: "/cms/pages"
            },
            // #1593: mit Zähler der offenen Anfragen an mich
            {
                nameKey: 'nav.sub.cms.reviews',
                nameDefault: 'Freigaben',
                href: "/cms/reviews",
                badge: 'cms-reviews'
            },
            {
                nameKey: 'nav.sub.cms.media',
                nameDefault: 'Medien',
                href: "/cms/media"
            },
            {
                nameKey: 'nav.sub.cms.mediaCategories',
                nameDefault: 'Medienkategorien',
                href: "/cms/media-categories"
            },
            {
                nameKey: 'nav.sub.cms.news',
                nameDefault: 'News',
                href: "/cms/news"
            },
            {
                nameKey: 'nav.sub.cms.categories',
                nameDefault: 'Kategorien',
                href: "/cms/categories"
            },
            {
                nameKey: 'nav.sub.cms.partners',
                nameDefault: 'Partner',
                href: "/cms/partners"
            },
            {
                nameKey: 'nav.sub.cms.products',
                nameDefault: 'Showroom-Produkte',
                href: "/cms/products"
            },
            {
                nameKey: 'nav.sub.cms.redirects',
                nameDefault: 'Weiterleitungen',
                href: "/cms/redirects"
            },
            {
                nameKey: 'nav.sub.cms.wiki',
                nameDefault: 'Wiki',
                href: "/cms/wiki"
            },
            {
                nameKey: 'nav.sub.cms.wikiCategories',
                nameDefault: 'Wiki-Kategorien',
                href: "/cms/wiki-categories"
            },
            {
                nameKey: 'nav.sub.cms.navigation',
                nameDefault: 'Navigation',
                href: "/cms/navigation"
            },
            // #2082: Übersetzungsstand aller Inhalte, Sammel-Übersetzung, Sprachstand
            {
                nameKey: 'nav.sub.cms.translations',
                nameDefault: 'Übersetzungen',
                href: "/cms/translations"
            }
        ]
    },
    {
        nameKey: ' ',
        href: undefined,
        icon: undefined
    },
    // #1889: Auktions-Block — eigene Gruppe und Farbe (Kategorie `auctions`)
    // zwischen Modul- und Admin-Block. #1911: zwei Hauptpunkte direkt
    // untereinander, jeder selbst seine Übersicht (Muster „Redaktion"), die
    // Kinder sind nur echte Unterseiten.
    {
        // Ressource `auctions`: admin und partner, partner nur mit Tag ineos
        // (Tag-Gate in tagGates.ts). Kinder ohne `roles` sähe jeder mit Zugriff
        // auf den Elternpunkt — deshalb trägt jedes Kind seine Rollen ausdrücklich.
        // partner sieht kein Kind und bekommt den Punkt flach.
        nameKey: 'nav.auctions',
        nameDefault: 'Auktionen',
        href: "/auctions",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconAuction$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {}, void 0, false, {
            fileName: "[project]/apps/web/src/config/routes.tsx",
            lineNumber: 1016,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        resource: 'auctions',
        category: 'auctions',
        roles: [
            'admin',
            'partner'
        ],
        subPages: [
            {
                nameKey: 'nav.sub.auctions.watched',
                nameDefault: 'Beobachtet',
                href: "/auctions/beobachtet",
                roles: [
                    'admin'
                ]
            },
            {
                nameKey: 'nav.sub.auctions.history',
                nameDefault: 'Historie',
                href: "/auctions/historie",
                roles: [
                    'admin'
                ]
            },
            {
                nameKey: 'nav.sub.auctions.operator',
                nameDefault: 'Betreiber',
                href: "/auctions/admin",
                roles: [
                    'admin'
                ]
            }
        ]
    },
    {
        // #1856/#1911: Meine Auktionen (Anbieterseite, Platzhalter INflow) —
        // Ressource `my-auctions`: admin und partner, partner nur mit Tag ineos
        // (Tag-Gate in tagGates.ts). Kinder = Unterseiten der PageHead-Navigation
        // von /my-auctions; „Charge anlegen" (/my-auctions/neu) ist eine Aktion und
        // bleibt im PageHead. Rollen je Kind ausdrücklich (siehe oben).
        nameKey: 'nav.myAuctions',
        nameDefault: 'Meine Auktionen',
        href: "/my-auctions",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconBillboard$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {}, void 0, false, {
            fileName: "[project]/apps/web/src/config/routes.tsx",
            lineNumber: 1050,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        resource: 'my-auctions',
        category: 'auctions',
        roles: [
            'admin',
            'partner'
        ],
        subPages: [
            {
                nameKey: 'nav.sub.myAuctions.pool',
                nameDefault: 'Auktionspool',
                href: "/my-auctions/pool",
                roles: [
                    'admin',
                    'partner'
                ]
            },
            {
                nameKey: 'nav.sub.myAuctions.analytics',
                nameDefault: 'Auswertung',
                href: "/my-auctions/auswertung",
                roles: [
                    'admin',
                    'partner'
                ]
            },
            {
                nameKey: 'nav.sub.myAuctions.connection',
                nameDefault: 'Anbindung',
                href: "/my-auctions/anbindung",
                roles: [
                    'admin',
                    'partner'
                ]
            },
            {
                nameKey: 'nav.sub.myAuctions.log',
                nameDefault: 'Protokoll',
                href: "/my-auctions/protokoll",
                roles: [
                    'admin',
                    'partner'
                ]
            },
            {
                nameKey: 'nav.sub.myAuctions.settings',
                nameDefault: 'Einstellungen',
                href: "/my-auctions/einstellungen",
                roles: [
                    'admin',
                    'partner'
                ]
            }
        ]
    },
    {
        nameKey: ' ',
        href: undefined,
        icon: undefined
    },
    // Admin-Block (Reihenfolge unverändert, ohne nav.users → Gruppe 2)
    {
        nameKey: 'nav.admin',
        href: "/admin",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconAdmin$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/apps/web/src/config/routes.tsx",
            lineNumber: 1098,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        resource: 'admin',
        category: 'admin'
    },
    {
        nameKey: 'nav.accessManagement',
        href: "/access-management",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconAccessManagement$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/apps/web/src/config/routes.tsx",
            lineNumber: 1105,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        resource: 'access-management',
        category: 'admin',
        subPages: [
            {
                nameKey: 'nav.sub.accessManagement.users',
                href: "/access-management/users"
            },
            {
                nameKey: 'nav.sub.accessManagement.grants',
                href: "/access-management/grants"
            },
            {
                nameKey: 'nav.sub.accessManagement.activity',
                href: "/access-management/activity"
            }
        ]
    },
    {
        nameKey: 'nav.piaManagement',
        href: "/pia-management",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconAI$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/apps/web/src/config/routes.tsx",
            lineNumber: 1123,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        resource: 'pia-management',
        category: 'admin',
        subPages: [
            {
                nameKey: 'nav.sub.piaManagement.tools',
                href: "/pia-management/tools"
            },
            {
                nameKey: 'nav.sub.piaManagement.revert',
                href: "/pia-management/revert"
            },
            {
                nameKey: 'nav.sub.piaManagement.audit',
                href: "/pia-management/audit"
            }
        ]
    },
    {
        nameKey: 'nav.rbacManagement',
        href: "/rbac-management",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconRbac$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/apps/web/src/config/routes.tsx",
            lineNumber: 1135,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        resource: 'admin',
        category: 'admin',
        subPages: [
            {
                nameKey: 'nav.sub.rbacManagement.permissions',
                href: "/rbac-management/permissions"
            },
            {
                nameKey: 'nav.sub.rbacManagement.recordVisibility',
                href: "/rbac-management/record-visibility"
            },
            {
                nameKey: 'nav.sub.rbacManagement.fieldVisibility',
                href: "/rbac-management/field-visibility"
            },
            {
                nameKey: 'nav.sub.rbacManagement.staffTags',
                href: "/rbac-management/staff-tags"
            }
        ]
    },
    {
        nameKey: 'nav.database',
        href: "/database",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconDatabase$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/apps/web/src/config/routes.tsx",
            lineNumber: 1160,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        resource: 'admin',
        category: 'admin'
    },
    {
        // #520: Azure-Token-Verbrauch. `resource: 'admin'` haelt den Eintrag aus
        // der Navigation aller anderen Rollen heraus; das eigentliche Gate sitzt
        // aber serverseitig in der Route und auf der Seite selbst — ein
        // ausgeblendeter Link ist kein Zugriffsschutz.
        nameKey: 'nav.tokens',
        href: "/tokens",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconTokens$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/apps/web/src/config/routes.tsx",
            lineNumber: 1171,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        resource: 'admin',
        category: 'admin'
    },
    {
        // #243 Phase B10: admin-only Security page — audit log + known
        // devices + active sessions. Gated via the 'admin' resource so
        // it follows the same RBAC path as the other admin tools.
        nameKey: 'nav.security',
        href: "/security",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconShield$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {}, void 0, false, {
            fileName: "[project]/apps/web/src/config/routes.tsx",
            lineNumber: 1181,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        resource: 'admin',
        category: 'admin'
    },
    {
        nameKey: 'nav.notificationManagement',
        href: "/notification-management",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconBell$2f$IconBell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconBell"], {}, void 0, false, {
            fileName: "[project]/apps/web/src/config/routes.tsx",
            lineNumber: 1188,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        resource: 'notification-management',
        category: 'admin'
    },
    {
        nameKey: 'nav.git',
        href: "/git",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconGit$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/apps/web/src/config/routes.tsx",
            lineNumber: 1195,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        // #843: Git-Board bleibt admin-only — user-management gehört jetzt auch
        // staff (Kunden-User-Verwaltung), Seite + APIs gaten auf 'admin'.
        resource: 'admin',
        category: 'admin',
        subPages: [
            {
                nameKey: 'nav.sub.git.pipelines',
                href: "/git/pipelines"
            },
            {
                nameKey: 'nav.sub.git.runners',
                href: "/git/runners"
            },
            {
                nameKey: 'nav.sub.git.milestones',
                href: "/git/milestones"
            }
        ]
    },
    {
        nameKey: 'nav.translationManagement',
        href: "/translation-management",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconLanguage$2f$IconLanguage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconLanguage"], {}, void 0, false, {
            fileName: "[project]/apps/web/src/config/routes.tsx",
            lineNumber: 1209,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        resource: 'admin',
        category: 'admin',
        subPages: [
            {
                nameKey: 'nav.sub.translationManagement.browse',
                href: "/translation-management/browse"
            },
            {
                nameKey: 'nav.sub.translationManagement.languages',
                href: "/translation-management/languages"
            },
            {
                nameKey: 'nav.sub.translationManagement.domains',
                href: "/translation-management/domains"
            },
            {
                nameKey: 'nav.sub.translationManagement.matrix',
                href: "/translation-management/matrix"
            },
            {
                nameKey: 'nav.sub.translationManagement.bulk',
                href: "/translation-management/bulk"
            },
            {
                nameKey: 'nav.sub.translationManagement.overrides',
                href: "/translation-management/overrides"
            },
            {
                nameKey: 'nav.sub.translationManagement.missing',
                href: "/translation-management/missing"
            }
        ]
    },
    {
        nameKey: 'nav.sentry',
        href: "/sentry",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconSentry$2f$IconSentry$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconSentry"], {}, void 0, false, {
            fileName: "[project]/apps/web/src/config/routes.tsx",
            lineNumber: 1246,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        resource: 'admin',
        category: 'admin',
        subPages: [
            {
                nameKey: 'nav.sub.sentry.issues',
                href: "/sentry/issues"
            },
            {
                nameKey: 'nav.sub.sentry.performance',
                href: "/sentry/performance"
            },
            {
                nameKey: 'nav.sub.sentry.releases',
                href: "/sentry/releases"
            },
            {
                nameKey: 'nav.sub.sentry.alerts',
                href: "/sentry/alerts"
            },
            {
                nameKey: 'nav.sub.sentry.logs',
                href: "/sentry/logs"
            },
            {
                nameKey: 'nav.sub.sentry.metrics',
                href: "/sentry/metrics"
            }
        ]
    },
    {
        // #1051: Nutzungsanalyse (#1045) — admin-only wie Sentry und Git.
        nameKey: 'nav.usage',
        href: "/usage",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconWindowAnalytics$2f$IconWindowAnalytics$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconWindowAnalytics"], {}, void 0, false, {
            fileName: "[project]/apps/web/src/config/routes.tsx",
            lineNumber: 1262,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        resource: 'admin',
        category: 'admin'
    },
    {
        // #1682: Mailvorlagen (Vorschau), Signatur, Kampagnen — nur admin.
        // #1864: Vorlagen ist /mailing selbst (Wächter navOrder: Unterseite ≠ Elternpfad).
        nameKey: 'nav.mailing',
        nameDefault: 'Mailing',
        href: "/mailing",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconMailing$2f$IconMailing$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconMailing"], {}, void 0, false, {
            fileName: "[project]/apps/web/src/config/routes.tsx",
            lineNumber: 1272,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        resource: 'mailing',
        category: 'admin',
        roles: [
            'admin'
        ],
        subPages: [
            {
                nameKey: 'nav.sub.mailing.signature',
                href: "/mailing/signatur"
            },
            {
                nameKey: 'nav.sub.mailing.campaigns',
                href: "/mailing/kampagnen"
            },
            // #1892: Firmenpostfächer (staff mit it/finance erreicht die Seite per Link)
            {
                nameKey: 'nav.sub.mailing.mailboxes',
                href: "/mailing/postfaecher"
            }
        ]
    },
    {
        // #1844: zeitgesteuerte Abläufe (Job-System) — nur admin.
        nameKey: 'nav.jobs',
        nameDefault: 'Jobs',
        href: "/jobs",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconRunner$2f$IconRunner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconRunner"], {}, void 0, false, {
            fileName: "[project]/apps/web/src/config/routes.tsx",
            lineNumber: 1288,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        resource: 'jobs',
        category: 'admin',
        roles: [
            'admin'
        ]
    },
    {
        nameKey: 'nav.3dRenderer',
        href: "/3drender",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconCubeAxis$2f$IconCubeAxis$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconCubeAxis"], {}, void 0, false, {
            fileName: "[project]/apps/web/src/config/routes.tsx",
            lineNumber: 1296,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        resource: 'admin',
        category: 'admin',
        subPages: [
            {
                nameKey: 'nav.sub.materialVision.data',
                href: "/3drender/data"
            },
            {
                nameKey: 'nav.sub.materialVision.thumbnails',
                href: "/thumbnails"
            }
        ]
    }
];
const useNavItems = ()=>{
    _s();
    // #1887: allein der Nutzerkontext entscheidet (wirksame Rolle inkl.
    // Vorschau, Tags, Module, Rechte-Snapshot). Solange er fehlt, ist die Liste
    // leer — fail-closed statt Rolle `user` oder Rolle ohne Tags.
    // #1887: Startkontext (Server-Startwert bis zum Bootstrap) — damit stimmt
    // die Navigation schon im Server-HTML.
    const { userContext: kontext, startContext } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useUserContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserContext"])();
    const userContext = startContext ?? kontext;
    // Get the translation function for the current language
    const { tr } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"])();
    if (!userContext) return [];
    // #514: Die Sichtbarkeitsregel liegt jetzt in config/navAccess.ts — als
    // reines Modul ohne React, damit die E2E-Navigationstests sie IMPORTIEREN
    // koennen, statt eine handgepflegte Kopie zu fuehren.
    // #1898: Trenner passieren den Filter, danach fasst normalisiereTrenner die
    // Trenner ausgeblendeter Gruppen zusammen (keine am Rand, nie zwei in Folge).
    // #1887: Sichtbarkeit allein aus dem Nutzerkontext (fail-closed).
    const sichtbar = navItemsBase.filter((item)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$navAccess$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["istTrenner"])(item) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$navAccess$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["istNavItemSichtbarFuer"])(userContext, item.resource, item.roles));
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$navAccess$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalisiereTrenner"])(sichtbar).map((item)=>{
        const translatedName = tr(item.nameKey, {
            defaultValue: item.nameDefault ?? item.nameKey
        });
        return {
            ...item,
            name: translatedName
        };
    });
};
_s(useNavItems, "IFR99CwJ8qKYgRl3BGhXSSQxcoQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useUserContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserContext"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"]
    ];
});
var _c, _c1;
__turbopack_context__.k.register(_c, "MM_INTERNE_ROLLEN$ROLES.filter");
__turbopack_context__.k.register(_c1, "MM_INTERNE_ROLLEN");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);})()

//# sourceMappingURL=apps_web_src_config_0eobu0-f7hj2b._.js.map