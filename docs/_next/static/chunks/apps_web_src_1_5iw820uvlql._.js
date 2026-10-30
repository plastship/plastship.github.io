(()=>{"use strict";(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/apps/web/src/config/cmsBlocks/markdownSlots.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cmsMarkdownKey",
    ()=>cmsMarkdownKey,
    "cmsMarkdownOf",
    ()=>cmsMarkdownOf,
    "pickCmsMarkdown",
    ()=>pickCmsMarkdown,
    "pickForLocale",
    ()=>pickForLocale
]);
function cmsMarkdownKey(blockId, field, index) {
    return index === undefined ? `${blockId}:${field}` : `${blockId}:${field}:${index}`;
}
function pickForLocale(werte, locale) {
    if (!werte) return undefined;
    if (locale in werte) return werte[locale];
    const erster = Object.keys(werte)[0];
    return erster === undefined ? undefined : werte[erster];
}
function pickCmsMarkdown(slot, locale) {
    return pickForLocale(slot, locale);
}
function cmsMarkdownOf(slots, locale, blockId, field, index) {
    if (!slots) return undefined;
    return pickCmsMarkdown(slots[cmsMarkdownKey(blockId, field, index)], locale);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
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
"[project]/apps/web/src/lib/ai/aiLabel.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * #2141 (Art. 50 KI-Verordnung, Entscheidung Moritz): EINE Regel, wann die
 * Oberfläche eine KI-Kennzeichnung zeigt — abgeleitet aus den Daten, nie je
 * Seite fest verdrahtet. Gezeigt wird sie von Atom/AiLabel.
 *
 *   assistant           Chat mit PIA: Hinweis, dass man mit einer KI spricht (Art. 50 Abs. 1)
 *   voice               Sprachein-/-ausgabe von PIA: synthetische Stimme, KI-Spracherkennung
 *   machineTranslation  Inhalt in dieser Sprache ist eine Maschinenübersetzung
 *                       (cms_translation_state.status = 'machine'), mit Link auf das Original
 *   analysis            von einer KI erzeugte Bildanalyse (Materialbilder, aiAnalyzedAt gesetzt)
 *   machineUiTranslation  Oberfläche in dieser Sprache teilweise maschinell übersetzt
 *                       (#2147: translations.updated_by ai-bulk/ai-suggest, lib/i18n/machineUiTranslations)
 *
 * Ohne Alias-Importe, damit Server, Client und Jest dieselbe Datei laden.
 */ __turbopack_context__.s([
    "AI_LABEL_BADGE",
    ()=>AI_LABEL_BADGE,
    "AI_LABEL_KINDS",
    ()=>AI_LABEL_KINDS,
    "AI_LABEL_ORIGINAL",
    ()=>AI_LABEL_ORIGINAL,
    "AI_LABEL_TEXT",
    ()=>AI_LABEL_TEXT,
    "isAiAnalysis",
    ()=>isAiAnalysis,
    "machineTranslatedLocales",
    ()=>machineTranslatedLocales,
    "showsMachineTranslation",
    ()=>showsMachineTranslation
]);
const AI_LABEL_KINDS = [
    'assistant',
    'voice',
    'machineTranslation',
    'analysis',
    'machineUiTranslation'
];
const AI_LABEL_TEXT = {
    assistant: {
        key: 'ai.label.assistant',
        defaultValue: 'KI-Assistent: Antworten werden von einer KI erzeugt und können Fehler enthalten.'
    },
    voice: {
        key: 'ai.label.voice',
        defaultValue: 'KI-Sprachfunktion: Ihre Sprache wird per KI in Text umgewandelt, Antworten liest eine synthetische Stimme vor.'
    },
    machineTranslation: {
        key: 'ai.label.machineTranslation',
        defaultValue: 'Diese Fassung wurde mit KI maschinell übersetzt.'
    },
    analysis: {
        key: 'ai.label.analysis',
        defaultValue: 'KI-Analyse'
    },
    machineUiTranslation: {
        key: 'ai.label.machineUiTranslation',
        defaultValue: 'Die Oberfläche ist in dieser Sprache teilweise maschinell übersetzt.'
    }
};
const AI_LABEL_BADGE = {
    key: 'ai.label.badge',
    defaultValue: 'KI'
};
const AI_LABEL_ORIGINAL = {
    key: 'ai.label.original',
    defaultValue: 'Zur deutschen Originalfassung'
};
function machineTranslatedLocales(states, hasText, sourceLocale) {
    const out = new Set();
    for (const s of states){
        if (s.status !== 'machine' || s.locale === sourceLocale) continue;
        if (hasText(s.fieldPath, s.locale)) out.add(s.locale);
    }
    return [
        ...out
    ].sort();
}
function showsMachineTranslation(locale, machineLocales) {
    return Boolean(machineLocales?.includes(locale));
}
function isAiAnalysis(record) {
    return Boolean(record && (record.aiAnalyzedAt || record.aiModel));
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
"[project]/apps/web/src/lib/motion/entrance.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Eintritts-Animationen (#2180): Zustand und Phasen der festen
 * Animationselemente im CMS (Siegel, Kreislauf) als reine Funktionen — ohne
 * Uhr, ohne React. Die Elemente spielen ihre Phasen als CSS-Animationen
 * (Verzögerung und Dauer aus der Phasentabelle); hier steht nur, WANN was
 * läuft und welcher Zustand gilt.
 *
 * Zustände (`data-state` am Element, E2E liest nur ihn):
 *   pending  Server und erster Render — Schlussbild, damit ohne JavaScript
 *            und vor der Hydration alles dasteht
 *   idle     im Browser, Bewegung erlaubt, noch nicht im Bild: Startpose
 *   running  im Bild gewesen, die Phasen laufen
 *   ready    alle Phasen fertig: Schlussbild, danach nur noch Ruhebewegung
 *   static   „Bewegung reduzieren" oder Datensparmodus: Schlussbild ohne
 *            jede Bewegung (Regel wie beim Imagefilm, #2027)
 */ __turbopack_context__.s([
    "allowsIdleMotion",
    ()=>allowsIdleMotion,
    "assertPhases",
    ()=>assertPhases,
    "entranceDuration",
    ()=>entranceDuration,
    "findPhase",
    ()=>findPhase,
    "phaseEnd",
    ()=>phaseEnd,
    "phaseProgress",
    ()=>phaseProgress,
    "phaseSlot",
    ()=>phaseSlot,
    "resolveEntranceState",
    ()=>resolveEntranceState
]);
function resolveEntranceState({ mounted, reducedMotion, saveData, seen, finished }) {
    if (!mounted) return 'pending';
    if (reducedMotion || saveData) return 'static';
    if (!seen) return 'idle';
    return finished ? 'ready' : 'running';
}
const allowsIdleMotion = (state)=>state === 'ready';
function phaseSlot(phase, index = 0) {
    const i = Math.max(0, Math.min(index, (phase.count ?? 1) - 1));
    return {
        delay: phase.start + i * (phase.stagger ?? 0),
        duration: phase.duration
    };
}
function phaseEnd(phase) {
    const { delay, duration } = phaseSlot(phase, (phase.count ?? 1) - 1);
    return delay + duration;
}
function entranceDuration(phases) {
    return phases.reduce((max, phase)=>Math.max(max, phaseEnd(phase)), 0);
}
function findPhase(phases, id) {
    const phase = phases.find((p)=>p.id === id);
    if (!phase) throw new Error(`Phase "${id}" fehlt`);
    return phase;
}
function phaseProgress(phase, ms, index = 0) {
    const { delay, duration } = phaseSlot(phase, index);
    if (duration <= 0) return ms >= delay ? 1 : 0;
    return Math.max(0, Math.min(1, (ms - delay) / duration));
}
function assertPhases(phases) {
    const ids = new Set();
    for (const p of phases){
        if (ids.has(p.id)) throw new Error(`Phase "${p.id}" doppelt`);
        ids.add(p.id);
        for (const wert of [
            p.start,
            p.duration,
            p.stagger ?? 0,
            p.count ?? 1
        ]){
            if (!Number.isFinite(wert) || wert < 0) throw new Error(`Phase "${p.id}": ungültige Zeit ${wert}`);
        }
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/seo/structuredData.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_ARTICLE_IMAGE",
    ()=>DEFAULT_ARTICLE_IMAGE,
    "PLASTSHIP_ORGANIZATION",
    ()=>PLASTSHIP_ORGANIZATION,
    "articleJsonLd",
    ()=>articleJsonLd,
    "assetUrl",
    ()=>assetUrl,
    "brandJsonLd",
    ()=>brandJsonLd,
    "breadcrumbNode",
    ()=>breadcrumbNode,
    "categoryJsonLd",
    ()=>categoryJsonLd,
    "cmsPageJsonLd",
    ()=>cmsPageJsonLd,
    "newsOverviewJsonLd",
    ()=>newsOverviewJsonLd,
    "organizationId",
    ()=>organizationId,
    "organizationNode",
    ()=>organizationNode,
    "pageUrl",
    ()=>pageUrl,
    "productJsonLd",
    ()=>productJsonLd,
    "serializeJsonLd",
    ()=>serializeJsonLd,
    "siteBaseUrl",
    ()=>siteBaseUrl,
    "startPageJsonLd",
    ()=>startPageJsonLd,
    "webSiteId",
    ()=>webSiteId,
    "webSiteNode",
    ()=>webSiteNode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * #1564: strukturierte Daten (JSON-LD, schema.org) der öffentlichen Seiten — an
 * einer Stelle, React-frei und ohne Datenbank, damit jeder Typ einzeln testbar
 * ist. Die Seiten (page.tsx, Server) bauen die Daten, die Ansichten geben sie
 * über `components/Utility/JsonLd` als `<script type="application/ld+json">`
 * im Server-HTML aus.
 *
 * Vorbild ist die alte Seite (Craft/SEOmatic): Organization, WebSite und auf
 * jeder Unterseite BreadcrumbList; Artikel zusätzlich als NewsArticle. Die
 * Brotkrumen nennen dieselben Stufen wie die sichtbaren der Seiten, dazu vorn
 * die Startseite.
 *
 * Die Sprache ist ein Parameter: heute liefern alle Seiten Deutsch, die
 * englischen Pfade (`/en/…`) kommen mit eigenem Paket — dann reicht
 * `locale: 'en'` und das passende `pfadPraefix`.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$url$2f$trailingSlash$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/url/trailingSlash.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$localize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/cmsBlocks/localize.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$companyContact$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/companyContact.ts [app-client] (ecmascript)");
;
;
;
const text = (wert, locale)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$localize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cmsText"])(wert, locale);
function siteBaseUrl() {
    const basis = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env['NEXTAUTH_URL'] || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env['NEXT_PUBLIC_SITE_URL'] || 'https://plastship.com';
    return basis.replace(/\/+$/, '');
}
function pageUrl(base, pfad) {
    if (/^https?:\/\//.test(pfad)) return pfad;
    const mitAnfang = pfad.startsWith('/') ? pfad : `/${pfad}`;
    return `${base}${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$url$2f$trailingSlash$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ensureTrailingSlash"])(mitAnfang)}`;
}
function assetUrl(base, adresse) {
    if (/^https?:\/\//.test(adresse)) return adresse;
    return `${base}${adresse.startsWith('/') ? '' : '/'}${adresse}`;
}
const PLASTSHIP_ORGANIZATION = {
    name: 'Plastship',
    legalName: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$companyContact$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMPANY_ADDRESS"].name,
    telephone: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$companyContact$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMPANY_PHONES"].central.international,
    email: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$companyContact$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMPANY_EMAILS"].info,
    address: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$companyContact$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMPANY_ADDRESS"],
    /** Quadratisch, 512 px — Google verlangt mindestens 112 × 112 px. */ logo: {
        path: '/favicon/android-chrome-512x512.png',
        width: 512,
        height: 512
    }
};
const DEFAULT_ARTICLE_IMAGE = '/images/og-default.jpg';
/** Texte der Brotkrumen-Stufen, die keine Seite der Redaktion sind. */ const STUFEN = {
    de: {
        start: 'Start',
        news: 'Neuigkeiten',
        partners: 'Partner'
    },
    en: {
        start: 'Home',
        news: 'News',
        partners: 'Partners'
    }
};
const organizationId = (base)=>`${base}/#organization`;
const webSiteId = (base)=>`${base}/#website`;
const dokument = (...knoten)=>({
        '@context': 'https://schema.org',
        '@graph': knoten
    });
function organizationNode(base) {
    const o = PLASTSHIP_ORGANIZATION;
    return {
        '@type': 'Organization',
        '@id': organizationId(base),
        name: o.name,
        legalName: o.legalName,
        url: `${base}/`,
        logo: {
            '@type': 'ImageObject',
            url: assetUrl(base, o.logo.path),
            width: o.logo.width,
            height: o.logo.height
        },
        email: o.email,
        telephone: o.telephone,
        // #2054: Anschrift und Koordinaten aus derselben Quelle wie Footer und Kartenlink
        address: {
            '@type': 'PostalAddress',
            streetAddress: o.address.street,
            postalCode: o.address.postalCode,
            addressLocality: o.address.locality,
            addressRegion: o.address.region,
            addressCountry: o.address.countryCode
        },
        location: {
            '@type': 'Place',
            geo: {
                '@type': 'GeoCoordinates',
                latitude: o.address.geo.lat,
                longitude: o.address.geo.lon
            }
        },
        contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'customer service',
            telephone: o.telephone,
            email: o.email
        }
    };
}
function webSiteNode(base, locale) {
    return {
        '@type': 'WebSite',
        '@id': webSiteId(base),
        url: `${base}/`,
        name: PLASTSHIP_ORGANIZATION.name,
        inLanguage: locale,
        publisher: {
            '@id': organizationId(base)
        }
    };
}
function breadcrumbNode(base, stufen) {
    return {
        '@type': 'BreadcrumbList',
        itemListElement: stufen.map((stufe, index)=>({
                '@type': 'ListItem',
                position: index + 1,
                name: stufe.name,
                item: pageUrl(base, stufe.pfad)
            }))
    };
}
const mitPraefix = (praefix, pfad)=>praefix ? `${praefix}${pfad}` : pfad;
const startStufe = ({ locale, pfadPraefix })=>({
        name: STUFEN[locale].start,
        pfad: mitPraefix(pfadPraefix, '/')
    });
const newsStufe = ({ locale, pfadPraefix })=>({
        name: STUFEN[locale].news,
        pfad: mitPraefix(pfadPraefix, '/news/')
    });
const partnerStufe = ({ locale, pfadPraefix })=>({
        name: STUFEN[locale].partners,
        pfad: mitPraefix(pfadPraefix, '/partners/')
    });
function startPageJsonLd(basis) {
    return dokument(organizationNode(basis.base), webSiteNode(basis.base, basis.locale));
}
function cmsPageJsonLd(basis) {
    if (basis.pfad === '/') return startPageJsonLd(basis);
    return dokument(breadcrumbNode(basis.base, [
        startStufe(basis),
        {
            name: text(basis.titel, basis.locale),
            pfad: mitPraefix(basis.pfadPraefix, basis.pfad)
        }
    ]));
}
function articleJsonLd(basis) {
    const { base, locale, artikel } = basis;
    const pfad = mitPraefix(basis.pfadPraefix, `/news/${artikel.slug}/`);
    const url = pageUrl(base, pfad);
    const titel = text(artikel.title, locale);
    const kategorie = artikel.category;
    const herausgeber = {
        '@type': 'Organization',
        '@id': organizationId(base),
        name: PLASTSHIP_ORGANIZATION.name,
        url: `${base}/`,
        logo: {
            '@type': 'ImageObject',
            url: assetUrl(base, PLASTSHIP_ORGANIZATION.logo.path)
        }
    };
    const anreisser = text(artikel.excerpt, locale);
    const artikelKnoten = {
        '@type': 'NewsArticle',
        headline: titel,
        ...anreisser ? {
            description: anreisser
        } : {},
        // Ohne Veröffentlichungsdatum (ältere Importe) zählt die letzte Änderung
        datePublished: artikel.publishedAt ?? artikel.updatedAt,
        dateModified: artikel.updatedAt,
        image: [
            assetUrl(base, artikel.imageUrl ?? DEFAULT_ARTICLE_IMAGE)
        ],
        inLanguage: locale,
        author: herausgeber,
        publisher: herausgeber,
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': url
        },
        url,
        ...kategorie ? {
            articleSection: text(kategorie.label, locale)
        } : {},
        ...artikel.tags.length ? {
            keywords: artikel.tags.join(', ')
        } : {}
    };
    return dokument(breadcrumbNode(base, [
        startStufe(basis),
        newsStufe(basis),
        ...kategorie ? [
            {
                name: text(kategorie.label, locale),
                pfad: mitPraefix(basis.pfadPraefix, `/news/category/${kategorie.slug}/`)
            }
        ] : [],
        {
            name: titel,
            pfad
        }
    ]), artikelKnoten);
}
function newsOverviewJsonLd(basis) {
    return dokument(breadcrumbNode(basis.base, [
        startStufe(basis),
        newsStufe(basis)
    ]));
}
function categoryJsonLd(basis) {
    const { kategorie } = basis;
    return dokument(breadcrumbNode(basis.base, [
        startStufe(basis),
        newsStufe(basis),
        {
            name: text(kategorie.label, basis.locale),
            pfad: mitPraefix(basis.pfadPraefix, `/news/category/${kategorie.slug}/`)
        }
    ]));
}
function brandJsonLd(basis) {
    const { marke } = basis;
    return dokument(breadcrumbNode(basis.base, [
        startStufe(basis),
        partnerStufe(basis),
        {
            name: marke.name,
            pfad: mitPraefix(basis.pfadPraefix, `/partners/${marke.slug}/`)
        }
    ]));
}
function productJsonLd(basis) {
    const { produkt } = basis;
    const marke = mitPraefix(basis.pfadPraefix, `/partners/${produkt.partner.slug}/`);
    return dokument(breadcrumbNode(basis.base, [
        startStufe(basis),
        partnerStufe(basis),
        {
            name: produkt.partner.name,
            pfad: marke
        },
        {
            name: text(produkt.title, basis.locale),
            pfad: `${marke}${produkt.slug}/`
        }
    ]));
}
// Als Zeichencode statt Literal: ein rohes U+2028 im Quelltext beendet für
// manche Werkzeuge die Zeile
const ZEILENTRENNER = String.fromCharCode(0x2028);
const ABSATZTRENNER = String.fromCharCode(0x2029);
function serializeJsonLd(daten) {
    return JSON.stringify(daten).replace(/</g, '\\u003c').replace(/>/g, '\\u003e').replace(/&/g, '\\u0026').split(ZEILENTRENNER).join('\\u2028').split(ABSATZTRENNER).join('\\u2029');
}
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
"[project]/apps/web/src/lib/url/trailingSlash.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ensureTrailingSlash",
    ()=>ensureTrailingSlash,
    "ensureTrailingSlashHref",
    ()=>ensureTrailingSlashHref
]);
/**
 * #1475: next.config hat `trailingSlash: true`; ein Redirect-Ziel ohne
 * Schluss-Slash kostet einen zweiten 308. Middleware-Ziele laufen darüber.
 *
 * Edge-sicher (kein Node-Import): läuft in der Middleware.
 */ /** Letztes Segment mit Punkt = Datei (`/favicon.ico`), die bekommt keinen Slash. */ function istDatei(pathname) {
    const letztes = pathname.slice(pathname.lastIndexOf('/') + 1);
    return letztes.includes('.');
}
function ensureTrailingSlash(pathname) {
    if (pathname.endsWith('/') || istDatei(pathname)) return pathname;
    return `${pathname}/`;
}
function ensureTrailingSlashHref(href) {
    if (!href.startsWith('/') || href.startsWith('//')) return href;
    const ende = href.search(/[?#]/);
    const pfad = ende === -1 ? href : href.slice(0, ende);
    const rest = ende === -1 ? '' : href.slice(ende);
    return `${ensureTrailingSlash(pfad)}${rest}`;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);})()

//# sourceMappingURL=apps_web_src_1_5iw820uvlql._.js.map