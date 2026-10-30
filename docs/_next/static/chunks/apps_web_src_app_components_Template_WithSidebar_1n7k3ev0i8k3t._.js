(()=>{"use strict";(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/apps/web/src/app/components/Template/WithSidebar/AppShellChrome.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppShellChrome",
    ()=>AppShellChrome,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Template$2f$WithSidebar$2f$WithSidebar$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Template/WithSidebar/WithSidebar.styles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$Header$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/Header/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$SidebarContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/context/SidebarContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
// #1074: Die Navigation ist ein Organism (vorher als Client-Komponente hier im Template)
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$SidebarNavigation$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/SidebarNavigation/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$SidebarNavigation$2f$SidebarNavigation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/SidebarNavigation/SidebarNavigation.tsx [app-client] (ecmascript)");
// #2029: unter 1025 px das gemeinsame mobile Menü statt der Überlagerung der Seitenleiste
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$SidebarNavigation$2f$AppMobileMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/SidebarNavigation/AppMobileMenu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useMediaQuery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/useMediaQuery.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$mobileMenu$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/mobileMenu.ts [app-client] (ecmascript)");
// Lazy-loaded right sidebar panel
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
// QuickWheel imports
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$QuickWheel$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/QuickWheel/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$QuickWheel$2f$QuickWheel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/QuickWheel/QuickWheel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconSparkle$2f$IconSparkle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconSparkle/IconSparkle.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$QuickWheelActionsContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/context/QuickWheelActionsContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useUserContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/useUserContext.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$helper$2f$quickWheelAccess$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/helper/quickWheelAccess.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$OverlayContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/context/OverlayContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$SearchOverlay$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/SearchOverlay/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$SearchOverlay$2f$SearchOverlay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/SearchOverlay/SearchOverlay.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$BottomTabBar$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/BottomTabBar/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$BottomTabBar$2f$BottomTabBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/BottomTabBar/BottomTabBar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$helper$2f$isTypingContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/helper/isTypingContext.ts [app-client] (ecmascript)");
;
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
;
;
;
const EntityPreviewPanel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/apps/web/src/app/components/Organism/EntityPreviewPanel/EntityPreviewPanel.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/apps/web/src/app/components/Organism/EntityPreviewPanel/EntityPreviewPanel.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c = EntityPreviewPanel;
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
 * #1919: Das Seitengerüst der App — Kopf, linke Seitenleiste mit Navigation,
 * <main>, rechte Seitenleiste, QuickWheel, Suche, BottomTabBar und die
 * globalen Kürzel. Bis #1919 der Körper von WithSidebar.
 *
 * Im Betrieb rendert es AppShellFrame genau einmal (AppShellProviders), die
 * Seiten füllen nur <main>. Ohne Rahmen (Storybook, Komponententests,
 * Pfade außerhalb von lib/routing/appFrame.ts) rendert WithSidebar es direkt.
 * Alles hier muss deshalb auf usePathname reagieren statt auf einen Remount.
 */ const AppShellChrome = (props)=>{
    _s();
    const { children, inverted, paddingTop = false } = props;
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const { isLeftSidebarOpen, toggleLeftSidebar, isRightSidebarOpen, rightSidebarData, closeRightSidebar, leftSidebarScrollRef } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$SidebarContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSidebar"])();
    const sidebarLeftRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mainRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // #2029: schmal ist die Seitenleiste ausgeblendet und ihre Navigation steht im
    // mobilen Menü — dann hier nicht zusätzlich (keine doppelten Links/Testids).
    // Startet false: das Server-HTML trägt die Navigation wie bisher.
    const schmal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useMediaQuery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMediaQuery"])(`(max-width: ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$mobileMenu$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APP_MOBILE_MAX_WIDTH_PX"]}px)`);
    // Der Content scrollt im <Main>-Container (overflow-y: auto), nicht im
    // Fenster — Next setzt bei Navigation nur window zurück, und React
    // recycelt das Main-Element über Seitenwechsel. Ohne diesen Reset landet
    // jede neue Seite auf der Scroll-Position der vorherigen (AB-Befund
    // 28.08.: „lande immer am Ende der Liste").
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AppShellChrome.useEffect": ()=>{
            // Optional call: jsdom implementiert Element.scrollTo nicht (InputSelect-Präzedenz)
            mainRef.current?.scrollTo?.({
                top: 0
            });
        }
    }["AppShellChrome.useEffect"], [
        pathname
    ]);
    const { contextActions } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$QuickWheelActionsContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuickWheelActions"])();
    const { openOverlay } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$OverlayContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOverlay"])();
    const { userContext } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useUserContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserContext"])();
    // #367: QuickWheel (incl. its 'q' shortcut) only for admin/staff.
    const showQuickWheel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$helper$2f$quickWheelAccess$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["canUseQuickWheel"])(userContext?.role);
    // Restore sidebar scroll position on mount, save on scroll
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AppShellChrome.useEffect": ()=>{
            const el = sidebarLeftRef.current;
            if (!el) return;
            // Restore saved scroll position
            el.scrollTop = leftSidebarScrollRef.current;
            const handleScroll = {
                "AppShellChrome.useEffect.handleScroll": ()=>{
                    leftSidebarScrollRef.current = el.scrollTop;
                }
            }["AppShellChrome.useEffect.handleScroll"];
            el.addEventListener('scroll', handleScroll, {
                passive: true
            });
            return ({
                "AppShellChrome.useEffect": ()=>{
                    el.removeEventListener('scroll', handleScroll);
                }
            })["AppShellChrome.useEffect"];
        }
    }["AppShellChrome.useEffect"], [
        leftSidebarScrollRef
    ]);
    // 's' keybind for search overlay — uses the same shared predicate as
    // QuickWheel so the two global shortcuts can never disagree about
    // whether the user is currently typing.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AppShellChrome.useEffect": ()=>{
            const typingTracker = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$helper$2f$isTypingContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createTypingContextTracker"])();
            const handleKeyDown = {
                "AppShellChrome.useEffect.handleKeyDown": (event)=>{
                    // Guard against undefined event.key (e.g. IME composition events)
                    if (!event.key) return;
                    const key = event.key.toLowerCase();
                    // #486: Cmd/Ctrl+K ist das Such-Kuerzel, das Nutzer aus jeder anderen
                    // App mitbringen — und war ausgerechnet der einzige, der nicht ging,
                    // weil der Handler pauschal jede Taste mit Modifier verwarf. Der
                    // Vorbehalt gilt weiter fuer ALLE anderen Modifier-Kombinationen
                    // (Cmd+S speichern, Cmd+A markieren): nur dieses eine Kuerzel wird
                    // uebernommen, und Alt bleibt komplett unangetastet.
                    const isPaletteShortcut = key === 'k' && (event.ctrlKey || event.metaKey) && !event.altKey;
                    if (!isPaletteShortcut) {
                        if (event.ctrlKey || event.metaKey || event.altKey) return;
                        if (key !== 's') return;
                    }
                    // Beim Kuerzel mit Modifier ist der Tipp-Kontext egal: Cmd+K soll auch
                    // aus einem Eingabefeld heraus die Suche oeffnen, `s` natuerlich nicht.
                    if (!isPaletteShortcut && typingTracker.get() || (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$helper$2f$isTypingContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasOpenModal"])()) return;
                    event.preventDefault();
                    openOverlay(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$OverlayContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OVERLAY_IDS"].SEARCH);
                }
            }["AppShellChrome.useEffect.handleKeyDown"];
            document.addEventListener('keydown', handleKeyDown);
            return ({
                "AppShellChrome.useEffect": ()=>{
                    document.removeEventListener('keydown', handleKeyDown);
                    typingTracker.dispose();
                }
            })["AppShellChrome.useEffect"];
        }
    }["AppShellChrome.useEffect"], [
        openOverlay
    ]);
    // Handle sidebar click - toggle unless clicking a nav link
    const handleSidebarClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AppShellChrome.useCallback[handleSidebarClick]": (event)=>{
            const target = event.target;
            // Links navigieren, Buttons (Chevron, Collapse) haben eigene Handler —
            // beide dürfen den Hintergrund-Toggle nicht auslösen.
            if (target.closest('a') || target.closest('button')) return;
            toggleLeftSidebar();
        }
    }["AppShellChrome.useCallback[handleSidebarClick]"], [
        toggleLeftSidebar
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Template$2f$WithSidebar$2f$WithSidebar$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        className: props['className'],
        "data-testid": 'with-sidebar-root',
        "data-frame": props.framed ? 'app' : 'page',
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$Header$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                navigation: false,
                inverted: inverted
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Template/WithSidebar/AppShellChrome.tsx",
                lineNumber: 170,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Template$2f$WithSidebar$2f$WithSidebar$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MainWrapper"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Template$2f$WithSidebar$2f$WithSidebar$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SidebarLeft"], {
                        ref: sidebarLeftRef,
                        $isOpen: isLeftSidebarOpen,
                        onClick: handleSidebarClick,
                        "data-testid": "sidebar-left",
                        "data-open": isLeftSidebarOpen ? 'true' : 'false',
                        children: !schmal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$SidebarNavigation$2f$SidebarNavigation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SidebarNavigation"], {
                            pathname: pathname,
                            isSidebarOpen: isLeftSidebarOpen
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Template/WithSidebar/AppShellChrome.tsx",
                            lineNumber: 179,
                            columnNumber: 23
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Template/WithSidebar/AppShellChrome.tsx",
                        lineNumber: 172,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Template$2f$WithSidebar$2f$WithSidebar$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Main"], {
                        ref: mainRef,
                        $isOpen: isLeftSidebarOpen,
                        $isRightOpen: isRightSidebarOpen,
                        $paddingTop: paddingTop,
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Template/WithSidebar/AppShellChrome.tsx",
                        lineNumber: 181,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Template$2f$WithSidebar$2f$WithSidebar$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SidebarRight"], {
                        $isOpen: isRightSidebarOpen,
                        "data-testid": "sidebar-right",
                        children: isRightSidebarOpen && rightSidebarData && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EntityPreviewPanel, {
                            data: rightSidebarData,
                            onClose: closeRightSidebar
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Template/WithSidebar/AppShellChrome.tsx",
                            lineNumber: 191,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Template/WithSidebar/AppShellChrome.tsx",
                        lineNumber: 189,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/components/Template/WithSidebar/AppShellChrome.tsx",
                lineNumber: 171,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            showQuickWheel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$QuickWheel$2f$QuickWheel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QuickWheel"], {
                triggerKey: "q",
                actions: contextActions,
                centerElement: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconSparkle$2f$IconSparkle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconSparkle"], {}, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Template/WithSidebar/AppShellChrome.tsx",
                    lineNumber: 196,
                    columnNumber: 76
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Template/WithSidebar/AppShellChrome.tsx",
                lineNumber: 196,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$SidebarNavigation$2f$AppMobileMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppMobileMenu"], {}, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Template/WithSidebar/AppShellChrome.tsx",
                lineNumber: 198,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$SearchOverlay$2f$SearchOverlay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SearchOverlay"], {}, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Template/WithSidebar/AppShellChrome.tsx",
                lineNumber: 199,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$BottomTabBar$2f$BottomTabBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BottomTabBar"], {}, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Template/WithSidebar/AppShellChrome.tsx",
                lineNumber: 200,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Template/WithSidebar/AppShellChrome.tsx",
        lineNumber: 165,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(AppShellChrome, "GWNcf1sTqKyiQJYS+lzt5vejR4A=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$SidebarContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSidebar"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useMediaQuery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMediaQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$QuickWheelActionsContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuickWheelActions"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$OverlayContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOverlay"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useUserContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserContext"]
    ];
});
_c1 = AppShellChrome;
;
const __TURBOPACK__default__export__ = AppShellChrome;
var _c, _c1;
__turbopack_context__.k.register(_c, "EntityPreviewPanel");
__turbopack_context__.k.register(_c1, "AppShellChrome");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Template/WithSidebar/AppShellFrame.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppShellFrame",
    ()=>AppShellFrame,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$routing$2f$appFrame$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/routing/appFrame.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Template$2f$WithSidebar$2f$AppShellChrome$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Template/WithSidebar/AppShellChrome.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Template$2f$WithSidebar$2f$AppShellFrameContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Template/WithSidebar/AppShellFrameContext.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function AppShellFrame({ children }) {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const [inverted, setInverted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AppShellFrame.useMemo[value]": ()=>({
                setInverted
            })
    }["AppShellFrame.useMemo[value]"], []);
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$routing$2f$appFrame$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usesAppFrame"])(pathname)) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Template/WithSidebar/AppShellFrame.tsx",
        lineNumber: 30,
        columnNumber: 39
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Template$2f$WithSidebar$2f$AppShellFrameContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppShellFrameContext"].Provider, {
        value: value,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Template$2f$WithSidebar$2f$AppShellChrome$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppShellChrome"], {
            inverted: inverted,
            framed: true,
            children: children
        }, void 0, false, {
            fileName: "[project]/apps/web/src/app/components/Template/WithSidebar/AppShellFrame.tsx",
            lineNumber: 34,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Template/WithSidebar/AppShellFrame.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_s(AppShellFrame, "tVaitiroEu/4VHNTV3ErorV6Wko=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = AppShellFrame;
const __TURBOPACK__default__export__ = AppShellFrame;
var _c;
__turbopack_context__.k.register(_c, "AppShellFrame");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Template/WithSidebar/AppShellFrameContext.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppShellFrameContext",
    ()=>AppShellFrameContext,
    "useAppShellFrame",
    ()=>useAppShellFrame
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
const AppShellFrameContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function useAppShellFrame() {
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(AppShellFrameContext);
}
_s(useAppShellFrame, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Template/WithSidebar/WithSidebar.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Main",
    ()=>Main,
    "MainTopSpacer",
    ()=>MainTopSpacer,
    "MainWrapper",
    ()=>MainWrapper,
    "Root",
    ()=>Root,
    "SidebarLeft",
    ()=>SidebarLeft,
    "SidebarRight",
    ()=>SidebarRight
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
// #1074: Der Nav-Link lebt jetzt im Molekül NavGroup (vorher `StyledLink` hier).
// Bewusst der tiefe Pfad zur Styles-Datei, nicht der Barrel-Export: Das Barrel
// zöge `NavGroup.tsx` (und damit dessen React-Logik) in dieses reine
// Styles-Modul und erzeugte einen Zyklus.
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$NavGroup$2f$NavGroup$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/NavGroup/NavGroup.styles.ts [app-client] (ecmascript)");
'use client';
;
;
// Unified subtle shadow for all layout panels
const PANEL_SHADOW = '0 0 12px rgba(0, 0, 0, 0.08)';
// Hide scrollbar but keep scroll behavior
const hiddenScrollbar = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const Root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "WithSidebar.styles__Root",
    componentId: "sc-c0fa53b5-0"
})`
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  /* #1081: Mobil scrollt das Dokument (Header und BottomTabBar sind fixed,
     MainWrapper trägt dafür padding-top/-bottom). Mit 100vh + overflow hidden
     war die Seite unter 1024 px gar nicht scrollbar — und jedes fokussierte
     Element (z. B. das Seitengrößen-Feld der Pagination) zog den versteckten
     Überlauf ans Ende der Liste. */
  @media only screen and (max-width: 1024px) {
    height: auto;
    min-height: 100vh;
    overflow: visible;
  }
`;
const MainWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "WithSidebar.styles__MainWrapper",
    componentId: "sc-c0fa53b5-1"
})`
  flex: 1;
  display: flex;
  flex-direction: row;
  height: calc(100vh - 56px);
  overflow: hidden;
  position: relative;

  @media only screen and (max-width: 1024px) {
    flex-direction: column;
    padding-top: 56px;
    padding-bottom: calc(50px + env(safe-area-inset-bottom, 0px));
    height: auto;
    overflow: visible;
  }
`;
const SidebarLeft = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].aside.withConfig({
    displayName: "WithSidebar.styles__SidebarLeft",
    componentId: "sc-c0fa53b5-2"
})`
  /* #1074: ohne border-box ist das Element 100% + padding-top hoch; MainWrapper
     (overflow: hidden) schnitt dadurch den unteren Rand — den sticky Footer mit
     dem Collapse-Button — ab. Die mobile Variante nutzt fixed top/bottom und
     bleibt davon unberührt. */
  box-sizing: border-box;
  padding-top: 20px;
  display: flex;
  background: linear-gradient(
    to right,
    ${({ theme })=>theme.palette.sidebar.gradientStart},
    ${({ theme })=>theme.palette.sidebar.gradientEnd}
  );
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  position: relative;
  z-index: 60;
  box-shadow: ${PANEL_SHADOW};
  cursor: ${(props)=>props.$isOpen ? 'w-resize' : 'e-resize'};

  /* #2029: schmal keine Überlagerung mehr — die Navigation steht im mobilen
     Menü (AppMobileMenu im MobileMenuShell), die Leiste bleibt verborgen. */
  @media only screen and (max-width: 1024px) {
    display: none;
  }

  /* Desktop: toggle width — ab 1025 px, bei 1024 px gilt das mobile Menü (#2029) */
  @media only screen and (min-width: 1025px) {
    display: flex;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    ${hiddenScrollbar}
    width: ${(props)=>props.$isOpen ? '265px' : '50px'};
    transition: width 0.3s ease-in-out;
  }

  ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$NavGroup$2f$NavGroup$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavLink"]} {
    cursor: pointer;

    /* Style text labels, but not tooltips */
    span:not([data-testid='tooltip-root']) {
      display: ${(props)=>props.$isOpen ? 'flex' : 'none'};
      margin-left: 10px;
    }
  }
`;
const SidebarRight = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].aside.withConfig({
    displayName: "WithSidebar.styles__SidebarRight",
    componentId: "sc-c0fa53b5-3"
})`
  /* #1748: Theme-Fläche statt festem Weiß — im Dark Mode blieb die Vorschau sonst weiß */
  background-color: ${(props)=>props.theme.palette.default.white};
  border-left: 1px solid ${(props)=>props.theme.palette.default.greyLight};
  box-shadow: ${(props)=>props.$isOpen ? PANEL_SHADOW : 'none'};
  overflow-y: auto;
  overflow-x: hidden;
  transition:
    width 0.3s ease-in-out,
    min-width 0.3s ease-in-out;
  position: relative;
  z-index: 50;

  /* Desktop: integrated in flex row */
  @media only screen and (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: ${(props)=>props.$isOpen ? '400px' : '0'};
    min-width: ${(props)=>props.$isOpen ? '400px' : '0'};
  }

  /* Mobile: integrated in layout flow */
  @media only screen and (max-width: 1024px) {
    position: fixed;
    top: 56px;
    right: 0;
    bottom: calc(50px + env(safe-area-inset-bottom, 0px));
    width: ${(props)=>props.$isOpen ? '100%' : '0'};
    max-width: 400px;
    z-index: 200;
  }
`;
const Main = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].main.withConfig({
    displayName: "WithSidebar.styles__Main",
    componentId: "sc-c0fa53b5-4"
})`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-top: ${(props)=>props.$paddingTop !== false ? '80px' : '20px'};
  padding-bottom: 80px;
  position: relative;
  overflow-y: auto;
  ${hiddenScrollbar}
  box-shadow:
    inset 0 0 12px rgba(0, 0, 0, 0.08),
    ${(props)=>props.$isRightOpen ? 'inset 0 0 12px rgba(0, 0, 0, 0.08)' : 'inset 0 0 0 transparent'};

  /* Mobile: full width with default theme padding */
  @media only screen and (max-width: 1024px) {
    width: 100%;
    padding-top: ${(props)=>props.theme.padding.default};
  }

  /* Desktop: adjust width based on sidebar state (ab 1025 px wie SidebarLeft, #2029) */
  @media only screen and (min-width: 1025px) {
    width: ${(props)=>{
    const left = props.$isOpen ? 265 : 50;
    const right = props.$isRightOpen ? 400 : 0;
    return `calc(100% - ${left}px - ${right}px)`;
}};
    transition: width 0.3s ease-in-out;
  }
`;
const MainTopSpacer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "WithSidebar.styles__MainTopSpacer",
    componentId: "sc-c0fa53b5-5"
})`
  flex-shrink: 0;
  height: 60px;

  @media only screen and (max-width: 1024px) {
    display: none;
  }
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);})()

//# sourceMappingURL=apps_web_src_app_components_Template_WithSidebar_1n7k3ev0i8k3t._.js.map