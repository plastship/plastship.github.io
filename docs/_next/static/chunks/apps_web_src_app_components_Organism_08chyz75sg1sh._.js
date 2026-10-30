(()=>{"use strict";(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/apps/web/src/app/components/Organism/BottomTabBar/BottomTabBar.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Backdrop",
    ()=>Backdrop,
    "MoreSheet",
    ()=>MoreSheet,
    "MoreSheetHandle",
    ()=>MoreSheetHandle,
    "MoreSheetItem",
    ()=>MoreSheetItem,
    "MoreSheetLabel",
    ()=>MoreSheetLabel,
    "Root",
    ()=>Root,
    "TabButton",
    ()=>TabButton,
    "TabLabel",
    ()=>TabLabel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$zIndex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/zIndex.ts [app-client] (ecmascript)");
'use client';
;
;
const Root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].nav.withConfig({
    displayName: "BottomTabBar.styles__Root",
    componentId: "sc-15a4b9e7-0"
})`
  display: none;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
  padding-bottom: env(safe-area-inset-bottom, 0px);
  background: ${(props)=>props.theme.palette.default.white};
  border-top: 1px solid ${(props)=>props.theme.palette.default.grey};
  z-index: ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$zIndex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Z_INDEX"].floating};
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  @media only screen and (max-width: 1024px) {
    display: flex;
  }
`;
const TabButton = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "BottomTabBar.styles__TabButton",
    componentId: "sc-15a4b9e7-1"
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  height: 100%;
  border: none;
  background: none;
  cursor: pointer;
  padding: 4px 0;
  gap: 2px;
  -webkit-tap-highlight-color: transparent;

  svg {
    width: 22px;
    height: 22px;

    path,
    rect,
    line,
    circle,
    polyline,
    polygon {
      stroke: ${(props)=>props.$isActive ? props.$color || props.theme.palette.default.primary : props.theme.palette.default.greyDark};
      transition: stroke 0.15s ease-in-out;
    }

    /* For icons using fill instead of stroke (like IconMore) */
    circle[fill] {
      fill: ${(props)=>props.$isActive ? props.$color || props.theme.palette.default.primary : props.theme.palette.default.greyDark};
      stroke: none;
      transition: fill 0.15s ease-in-out;
    }
  }
`;
const TabLabel = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "BottomTabBar.styles__TabLabel",
    componentId: "sc-15a4b9e7-2"
})`
  font-size: 10px;
  line-height: 1;
  color: ${(props)=>props.$isActive ? props.$color || props.theme.palette.default.primary : props.theme.palette.default.greyDark};
  transition: color 0.15s ease-in-out;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 64px;
`;
const Backdrop = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "BottomTabBar.styles__Backdrop",
    componentId: "sc-15a4b9e7-3"
})`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 999;
`;
const MoreSheet = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "BottomTabBar.styles__MoreSheet",
    componentId: "sc-15a4b9e7-4"
})`
  position: fixed;
  bottom: calc(50px + env(safe-area-inset-bottom, 0px));
  left: 0;
  right: 0;
  background: ${(props)=>props.theme.palette.default.white};
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.15);
  z-index: ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$zIndex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Z_INDEX"].floating + 1};
  padding: 16px 0 8px;
`;
const MoreSheetItem = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "BottomTabBar.styles__MoreSheetItem",
    componentId: "sc-15a4b9e7-5"
})`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  width: 100%;
  border: none;
  background: none;
  cursor: pointer;
  padding: 12px 20px;
  -webkit-tap-highlight-color: transparent;

  svg {
    width: 22px;
    height: 22px;

    path,
    rect,
    line,
    circle,
    polyline,
    polygon {
      stroke: ${(props)=>props.$isActive ? props.$color || props.theme.palette.default.primary : props.theme.palette.default.greyDark};
    }
  }

  &:active {
    background: ${(props)=>props.theme.palette.default.greyLight};
  }
`;
const MoreSheetLabel = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "BottomTabBar.styles__MoreSheetLabel",
    componentId: "sc-15a4b9e7-6"
})`
  font-size: 15px;
  color: ${(props)=>props.$isActive ? props.$color || props.theme.palette.default.primary : props.theme.palette.default.black};
`;
const MoreSheetHandle = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "BottomTabBar.styles__MoreSheetHandle",
    componentId: "sc-15a4b9e7-7"
})`
  width: 36px;
  height: 4px;
  border-radius: 2px;
  background: ${(props)=>props.theme.palette.default.grey};
  margin: 0 auto 12px;
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Organism/BottomTabBar/BottomTabBar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BottomTabBar",
    ()=>BottomTabBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/ClientTranslation.tsx [app-client] (ecmascript) <export useClientSafeTranslation as useClientTranslation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useEntityText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/useEntityText.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$UserPreferencesContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/context/UserPreferencesContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$QuickWheelContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/context/QuickWheelContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useUserContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/useUserContext.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$helper$2f$quickWheelAccess$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/helper/quickWheelAccess.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useOutlookStatus$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/useOutlookStatus.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/colors.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconSparkle$2f$IconSparkle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconSparkle/IconSparkle.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconFire$2f$IconFire$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconFire/IconFire.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconPlastrack$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconPlastrack/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconPlastrack$2f$IconPlastrack$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconPlastrack/IconPlastrack.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconQrCode$2f$IconQrCode$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconQrCode/IconQrCode.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconScan$2f$IconScan$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconScan/IconScan.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconProduct$2f$IconProduct$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconProduct/IconProduct.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconEmail$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconEmail/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconDocument$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconDocument/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconPresentationChart$2f$IconPresentationChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconPresentationChart/IconPresentationChart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconRIGK$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconRIGK/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconRIGK$2f$IconRIGK$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconRIGK/IconRIGK.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconMessages$2f$IconMessages$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconMessages/IconMessages.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconCalendar$2f$IconCalendar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconCalendar/IconCalendar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconMore$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconMore/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconMore$2f$IconMore$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconMore/IconMore.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconUser$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconUser/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconLogout$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconLogout/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$BottomTabBar$2f$BottomTabBar$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/BottomTabBar/BottomTabBar.styles.ts [app-client] (ecmascript)");
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
const MAX_DYNAMIC_SLOTS = 2;
const BottomTabBar = ()=>{
    _s();
    const [isMoreOpen, setIsMoreOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isPlastrackOpen, setIsPlastrackOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const { language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$UserPreferencesContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserPreferences"])();
    const { tr } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"])(language);
    // Zähler der nachgeladenen Übersetzungen (`tr` behält seine Identität)
    const { revision: trRevision } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useEntityText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEntityText"])();
    const { openWheel } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$QuickWheelContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuickWheel"])();
    const { userContext } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useUserContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserContext"])();
    const { outlookLinked, isStaffOrAdmin, isAuthenticated } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useOutlookStatus$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOutlookStatus"])();
    const modules = userContext?.modules || [];
    // Build dynamic tabs in priority order (matching Header.tsx logic)
    const dynamicTabs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "BottomTabBar.useMemo[dynamicTabs]": ()=>{
            if (!isAuthenticated) return [];
            const tabs = [];
            if (isStaffOrAdmin) {
                tabs.push({
                    id: 'operations',
                    label: tr('header.operations.tooltip', {
                        defaultValue: 'Operations'
                    }),
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconFire$2f$IconFire$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconFire"], {}, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Organism/BottomTabBar/BottomTabBar.tsx",
                        lineNumber: 77,
                        columnNumber: 15
                    }, ("TURBOPACK compile-time value", void 0)),
                    href: '/operations',
                    color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].ORANGE
                });
            }
            if (isStaffOrAdmin && outlookLinked) {
                tabs.push({
                    id: 'mail',
                    label: tr('header.mail.tooltip', {
                        defaultValue: 'Mail'
                    }),
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconEmail$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Organism/BottomTabBar/BottomTabBar.tsx",
                        lineNumber: 87,
                        columnNumber: 15
                    }, ("TURBOPACK compile-time value", void 0)),
                    href: '/mail',
                    color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].MICROSOFT
                });
            }
            if (isStaffOrAdmin) {
                tabs.push({
                    id: 'documents',
                    label: tr('header.documents.tooltip', {
                        defaultValue: 'Documents'
                    }),
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconDocument$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Organism/BottomTabBar/BottomTabBar.tsx",
                        lineNumber: 97,
                        columnNumber: 15
                    }, ("TURBOPACK compile-time value", void 0)),
                    href: '/documents',
                    color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].PRIMARY
                });
            }
            if (isStaffOrAdmin) {
                tabs.push({
                    id: 'weekly',
                    label: tr('header.weekly.tooltip', {
                        defaultValue: 'Weekly'
                    }),
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconPresentationChart$2f$IconPresentationChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconPresentationChart"], {}, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Organism/BottomTabBar/BottomTabBar.tsx",
                        lineNumber: 107,
                        columnNumber: 15
                    }, ("TURBOPACK compile-time value", void 0)),
                    href: '/weekly',
                    color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].PURPLE
                });
            }
            if (isStaffOrAdmin && outlookLinked) {
                tabs.push({
                    id: 'chat',
                    label: tr('header.messages.tooltip', {
                        defaultValue: 'Chat'
                    }),
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconMessages$2f$IconMessages$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconMessages"], {}, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Organism/BottomTabBar/BottomTabBar.tsx",
                        lineNumber: 117,
                        columnNumber: 15
                    }, ("TURBOPACK compile-time value", void 0)),
                    href: '/chat',
                    color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].MICROSOFT
                });
            }
            if (isStaffOrAdmin && outlookLinked) {
                tabs.push({
                    id: 'calendar',
                    label: tr('header.calendar.tooltip', {
                        defaultValue: 'Calendar'
                    }),
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconCalendar$2f$IconCalendar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconCalendar"], {}, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Organism/BottomTabBar/BottomTabBar.tsx",
                        lineNumber: 127,
                        columnNumber: 15
                    }, ("TURBOPACK compile-time value", void 0)),
                    href: '/calendar',
                    color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].MICROSOFT
                });
            }
            return tabs;
        // eslint-disable-next-line react-hooks/exhaustive-deps -- `tr` behält beim Nachladen seine Identität, der Zähler nicht
        }
    }["BottomTabBar.useMemo[dynamicTabs]"], [
        isAuthenticated,
        isStaffOrAdmin,
        outlookLinked,
        tr,
        trRevision
    ]);
    const hasPlastrackAccess = isAuthenticated && (isStaffOrAdmin || modules.includes('plastrack'));
    const hasRigkAccess = isAuthenticated && modules.includes('rigk');
    const isPlastrackActive = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "BottomTabBar.useMemo[isPlastrackActive]": ()=>{
            return pathname?.startsWith('/plastrack') || false;
        }
    }["BottomTabBar.useMemo[isPlastrackActive]"], [
        pathname
    ]);
    const hasOverflow = dynamicTabs.length > MAX_DYNAMIC_SLOTS;
    const visibleTabs = hasOverflow ? dynamicTabs.slice(0, MAX_DYNAMIC_SLOTS - 1) : dynamicTabs.slice(0, MAX_DYNAMIC_SLOTS);
    const overflowTabs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "BottomTabBar.useMemo[overflowTabs]": ()=>hasOverflow ? dynamicTabs.slice(MAX_DYNAMIC_SLOTS - 1) : []
    }["BottomTabBar.useMemo[overflowTabs]"], [
        hasOverflow,
        dynamicTabs
    ]);
    const closeAllSheets = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "BottomTabBar.useCallback[closeAllSheets]": ()=>{
            setIsMoreOpen(false);
            setIsPlastrackOpen(false);
        }
    }["BottomTabBar.useCallback[closeAllSheets]"], []);
    const handleTabClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "BottomTabBar.useCallback[handleTabClick]": (href)=>{
            closeAllSheets();
            router.push(href);
        }
    }["BottomTabBar.useCallback[handleTabClick]"], [
        router,
        closeAllSheets
    ]);
    const handleActionsClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "BottomTabBar.useCallback[handleActionsClick]": ()=>{
            closeAllSheets();
            openWheel('q');
        }
    }["BottomTabBar.useCallback[handleActionsClick]"], [
        openWheel,
        closeAllSheets
    ]);
    const handlePlastrackClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "BottomTabBar.useCallback[handlePlastrackClick]": ()=>{
            setIsMoreOpen(false);
            setIsPlastrackOpen({
                "BottomTabBar.useCallback[handlePlastrackClick]": (prev)=>!prev
            }["BottomTabBar.useCallback[handlePlastrackClick]"]);
        }
    }["BottomTabBar.useCallback[handlePlastrackClick]"], []);
    const handleMoreClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "BottomTabBar.useCallback[handleMoreClick]": ()=>{
            setIsPlastrackOpen(false);
            setIsMoreOpen({
                "BottomTabBar.useCallback[handleMoreClick]": (prev)=>!prev
            }["BottomTabBar.useCallback[handleMoreClick]"]);
        }
    }["BottomTabBar.useCallback[handleMoreClick]"], []);
    const handleBackdropClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "BottomTabBar.useCallback[handleBackdropClick]": ()=>{
            closeAllSheets();
        }
    }["BottomTabBar.useCallback[handleBackdropClick]"], [
        closeAllSheets
    ]);
    const handleLogout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "BottomTabBar.useCallback[handleLogout]": async ()=>{
            closeAllSheets();
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signOut"])({
                redirect: false
            });
            router.push('/login');
        }
    }["BottomTabBar.useCallback[handleLogout]"], [
        closeAllSheets,
        router
    ]);
    const isTabActive = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "BottomTabBar.useCallback[isTabActive]": (href)=>{
            return pathname?.startsWith(href) || false;
        }
    }["BottomTabBar.useCallback[isTabActive]"], [
        pathname
    ]);
    // Check if any overflow tab or profile is active (to highlight More button)
    const isMoreActive = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "BottomTabBar.useMemo[isMoreActive]": ()=>{
            return overflowTabs.some({
                "BottomTabBar.useMemo[isMoreActive]": (tab)=>pathname?.startsWith(tab.href)
            }["BottomTabBar.useMemo[isMoreActive]"]) || pathname?.startsWith('/profile') || false;
        }
    }["BottomTabBar.useMemo[isMoreActive]"], [
        overflowTabs,
        pathname
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            (isMoreOpen || isPlastrackOpen) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$BottomTabBar$2f$BottomTabBar$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Backdrop"], {
                onClick: handleBackdropClick,
                "data-testid": "bottom-tab-backdrop"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Organism/BottomTabBar/BottomTabBar.tsx",
                lineNumber: 204,
                columnNumber: 43
            }, ("TURBOPACK compile-time value", void 0)),
            isMoreOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$BottomTabBar$2f$BottomTabBar$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MoreSheet"], {
                "data-testid": "bottom-tab-more-sheet",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$BottomTabBar$2f$BottomTabBar$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MoreSheetHandle"], {}, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Organism/BottomTabBar/BottomTabBar.tsx",
                        lineNumber: 207,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    overflowTabs.map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$BottomTabBar$2f$BottomTabBar$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MoreSheetItem"], {
                            $isActive: isTabActive(tab.href),
                            $color: tab.color,
                            onClick: ()=>handleTabClick(tab.href),
                            "data-testid": `bottom-tab-more-${tab.id}`,
                            children: [
                                tab.icon,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$BottomTabBar$2f$BottomTabBar$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MoreSheetLabel"], {
                                    $isActive: isTabActive(tab.href),
                                    $color: tab.color,
                                    children: tab.label
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/components/Organism/BottomTabBar/BottomTabBar.tsx",
                                    lineNumber: 217,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, tab.id, true, {
                            fileName: "[project]/apps/web/src/app/components/Organism/BottomTabBar/BottomTabBar.tsx",
                            lineNumber: 209,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$BottomTabBar$2f$BottomTabBar$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MoreSheetItem"], {
                        $isActive: pathname?.startsWith('/profile') || false,
                        $color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].PRIMARY,
                        onClick: ()=>handleTabClick('/profile'),
                        "data-testid": "bottom-tab-more-profile",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconUser$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Organism/BottomTabBar/BottomTabBar.tsx",
                                lineNumber: 228,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$BottomTabBar$2f$BottomTabBar$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MoreSheetLabel"], {
                                $isActive: pathname?.startsWith('/profile') || false,
                                $color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].PRIMARY,
                                children: tr('header.profile', {
                                    defaultValue: 'Profile'
                                })
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Organism/BottomTabBar/BottomTabBar.tsx",
                                lineNumber: 229,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/app/components/Organism/BottomTabBar/BottomTabBar.tsx",
                        lineNumber: 222,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$BottomTabBar$2f$BottomTabBar$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MoreSheetItem"], {
                        onClick: handleLogout,
                        "data-testid": "bottom-tab-more-logout",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconLogout$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Organism/BottomTabBar/BottomTabBar.tsx",
                                lineNumber: 237,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$BottomTabBar$2f$BottomTabBar$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MoreSheetLabel"], {
                                children: tr('header.logout', {
                                    defaultValue: 'Logout'
                                })
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Organism/BottomTabBar/BottomTabBar.tsx",
                                lineNumber: 238,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/app/components/Organism/BottomTabBar/BottomTabBar.tsx",
                        lineNumber: 233,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/components/Organism/BottomTabBar/BottomTabBar.tsx",
                lineNumber: 206,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            isPlastrackOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$BottomTabBar$2f$BottomTabBar$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MoreSheet"], {
                "data-testid": "bottom-tab-plastrack-sheet",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$BottomTabBar$2f$BottomTabBar$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MoreSheetHandle"], {}, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Organism/BottomTabBar/BottomTabBar.tsx",
                        lineNumber: 246,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$BottomTabBar$2f$BottomTabBar$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MoreSheetItem"], {
                        $isActive: pathname === '/plastrack',
                        $color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].SECONDARY,
                        onClick: ()=>handleTabClick('/plastrack'),
                        "data-testid": "bottom-tab-plastrack-scan",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconQrCode$2f$IconQrCode$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconQrCode"], {}, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Organism/BottomTabBar/BottomTabBar.tsx",
                                lineNumber: 253,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$BottomTabBar$2f$BottomTabBar$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MoreSheetLabel"], {
                                $isActive: pathname === '/plastrack',
                                $color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].SECONDARY,
                                children: tr('plastrack.scan', {
                                    defaultValue: 'Scan QR Code'
                                })
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Organism/BottomTabBar/BottomTabBar.tsx",
                                lineNumber: 254,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/app/components/Organism/BottomTabBar/BottomTabBar.tsx",
                        lineNumber: 247,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$BottomTabBar$2f$BottomTabBar$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MoreSheetItem"], {
                        $isActive: pathname?.startsWith('/plastrack/scans') || false,
                        $color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].SECONDARY,
                        onClick: ()=>handleTabClick('/plastrack/scans'),
                        "data-testid": "bottom-tab-plastrack-scans",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconScan$2f$IconScan$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconScan"], {}, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Organism/BottomTabBar/BottomTabBar.tsx",
                                lineNumber: 264,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$BottomTabBar$2f$BottomTabBar$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MoreSheetLabel"], {
                                $isActive: pathname?.startsWith('/plastrack/scans') || false,
                                $color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].SECONDARY,
                                children: tr('plastrack.scans', {
                                    defaultValue: 'Scans'
                                })
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Organism/BottomTabBar/BottomTabBar.tsx",
                                lineNumber: 265,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/app/components/Organism/BottomTabBar/BottomTabBar.tsx",
                        lineNumber: 258,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$BottomTabBar$2f$BottomTabBar$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MoreSheetItem"], {
                        $isActive: pathname?.startsWith('/plastrack/boxes') || false,
                        $color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].SECONDARY,
                        onClick: ()=>handleTabClick('/plastrack/boxes'),
                        "data-testid": "bottom-tab-plastrack-boxes",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconProduct$2f$IconProduct$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconProduct"], {}, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Organism/BottomTabBar/BottomTabBar.tsx",
                                lineNumber: 275,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$BottomTabBar$2f$BottomTabBar$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MoreSheetLabel"], {
                                $isActive: pathname?.startsWith('/plastrack/boxes') || false,
                                $color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].SECONDARY,
                                children: tr('plastrack.boxes', {
                                    defaultValue: 'Boxes'
                                })
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Organism/BottomTabBar/BottomTabBar.tsx",
                                lineNumber: 276,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/app/components/Organism/BottomTabBar/BottomTabBar.tsx",
                        lineNumber: 269,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/components/Organism/BottomTabBar/BottomTabBar.tsx",
                lineNumber: 245,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$BottomTabBar$2f$BottomTabBar$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
                "data-testid": "bottom-tab-bar",
                children: [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$helper$2f$quickWheelAccess$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["canUseQuickWheel"])(userContext?.role) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$BottomTabBar$2f$BottomTabBar$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabButton"], {
                        onClick: handleActionsClick,
                        "data-testid": "bottom-tab-actions",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconSparkle$2f$IconSparkle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconSparkle"], {}, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Organism/BottomTabBar/BottomTabBar.tsx",
                                lineNumber: 289,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$BottomTabBar$2f$BottomTabBar$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabLabel"], {
                                suppressHydrationWarning: true,
                                children: tr('header.actions', {
                                    defaultValue: 'Actions'
                                })
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Organism/BottomTabBar/BottomTabBar.tsx",
                                lineNumber: 290,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/app/components/Organism/BottomTabBar/BottomTabBar.tsx",
                        lineNumber: 285,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    hasPlastrackAccess && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$BottomTabBar$2f$BottomTabBar$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabButton"], {
                        $isActive: isPlastrackActive || isPlastrackOpen,
                        $color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].SECONDARY,
                        onClick: handlePlastrackClick,
                        "data-testid": "bottom-tab-plastrack",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconPlastrack$2f$IconPlastrack$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconPlastrack"], {}, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Organism/BottomTabBar/BottomTabBar.tsx",
                                lineNumber: 304,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$BottomTabBar$2f$BottomTabBar$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabLabel"], {
                                $isActive: isPlastrackActive || isPlastrackOpen,
                                $color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].SECONDARY,
                                suppressHydrationWarning: true,
                                children: tr('header.plastrack.tooltip', {
                                    defaultValue: 'Plastrack'
                                })
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Organism/BottomTabBar/BottomTabBar.tsx",
                                lineNumber: 305,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/app/components/Organism/BottomTabBar/BottomTabBar.tsx",
                        lineNumber: 298,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    hasRigkAccess && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$BottomTabBar$2f$BottomTabBar$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabButton"], {
                        $isActive: isTabActive('/rigk'),
                        $color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].SUCCESS,
                        onClick: ()=>handleTabClick('/rigk'),
                        "data-testid": "bottom-tab-rigk",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconRIGK$2f$IconRIGK$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconRIGK"], {}, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Organism/BottomTabBar/BottomTabBar.tsx",
                                lineNumber: 319,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$BottomTabBar$2f$BottomTabBar$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabLabel"], {
                                $isActive: isTabActive('/rigk'),
                                $color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].SUCCESS,
                                suppressHydrationWarning: true,
                                children: tr('header.rigk.tooltip', {
                                    defaultValue: 'RIGK'
                                })
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Organism/BottomTabBar/BottomTabBar.tsx",
                                lineNumber: 320,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/app/components/Organism/BottomTabBar/BottomTabBar.tsx",
                        lineNumber: 313,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    visibleTabs.map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$BottomTabBar$2f$BottomTabBar$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabButton"], {
                            $isActive: isTabActive(tab.href),
                            $color: tab.color,
                            onClick: ()=>handleTabClick(tab.href),
                            "data-testid": `bottom-tab-${tab.id}`,
                            children: [
                                tab.icon,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$BottomTabBar$2f$BottomTabBar$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabLabel"], {
                                    $isActive: isTabActive(tab.href),
                                    $color: tab.color,
                                    suppressHydrationWarning: true,
                                    children: tab.label
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/components/Organism/BottomTabBar/BottomTabBar.tsx",
                                    lineNumber: 336,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, tab.id, true, {
                            fileName: "[project]/apps/web/src/app/components/Organism/BottomTabBar/BottomTabBar.tsx",
                            lineNumber: 328,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))),
                    isAuthenticated && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$BottomTabBar$2f$BottomTabBar$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabButton"], {
                        $isActive: isMoreActive || isMoreOpen,
                        $color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].PRIMARY,
                        onClick: handleMoreClick,
                        "data-testid": "bottom-tab-more",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconMore$2f$IconMore$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconMore"], {}, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Organism/BottomTabBar/BottomTabBar.tsx",
                                lineNumber: 350,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$BottomTabBar$2f$BottomTabBar$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabLabel"], {
                                $isActive: isMoreActive || isMoreOpen,
                                $color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].PRIMARY,
                                suppressHydrationWarning: true,
                                children: tr('header.more', {
                                    defaultValue: 'More'
                                })
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Organism/BottomTabBar/BottomTabBar.tsx",
                                lineNumber: 351,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/app/components/Organism/BottomTabBar/BottomTabBar.tsx",
                        lineNumber: 344,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/components/Organism/BottomTabBar/BottomTabBar.tsx",
                lineNumber: 282,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Organism/BottomTabBar/BottomTabBar.tsx",
        lineNumber: 203,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(BottomTabBar, "McrLuKJf6bDevCP5hh99Afh+nq0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$UserPreferencesContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserPreferences"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useEntityText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEntityText"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$QuickWheelContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuickWheel"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useUserContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserContext"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useOutlookStatus$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOutlookStatus"]
    ];
});
_c = BottomTabBar;
;
var _c;
__turbopack_context__.k.register(_c, "BottomTabBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Organism/BottomTabBar/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$BottomTabBar$2f$BottomTabBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/BottomTabBar/BottomTabBar.tsx [app-client] (ecmascript)");
;
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$BottomTabBar$2f$BottomTabBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BottomTabBar"];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Organism/Header/Header.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AvatarContainer",
    ()=>AvatarContainer,
    "AvatarFallback",
    ()=>AvatarFallback,
    "AvatarImage",
    ()=>AvatarImage,
    "AvatarWrapper",
    ()=>AvatarWrapper,
    "BurgerWrapper",
    ()=>BurgerWrapper,
    "Controls",
    ()=>Controls,
    "Dropdown",
    ()=>Dropdown,
    "DropdownHeader",
    ()=>DropdownHeader,
    "DropdownItem",
    ()=>DropdownItem,
    "GuestActions",
    ()=>GuestActions,
    "GuestBurger",
    ()=>GuestBurger,
    "GuestNavBar",
    ()=>GuestNavBar,
    "LogoLink",
    ()=>LogoLink,
    "Nav",
    ()=>Nav,
    "NotificationBellWrapper",
    ()=>NotificationBellWrapper,
    "Root",
    ()=>Root,
    "SearchButton",
    ()=>SearchButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$NavLink$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/NavLink/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$NavLink$2f$NavLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/NavLink/NavLink.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$zIndex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/zIndex.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$hex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/hex.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Burger$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Burger/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/site.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
const guestNarrow = `@media only screen and (max-width: ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GUEST_NAV_MIN_WIDTH_PX"] - 1}px)`;
const Root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].header.withConfig({
    displayName: "Header.styles__Root",
    componentId: "sc-8494ddd5-0"
})`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  height: 56px;
  position: relative;
  z-index: 200;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.08);
  label {
    display: none;
  }

  @media only screen and (max-width: 1024px) {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    min-height: 56px;
    background: ${(props)=>props.theme.palette.default.white};
    will-change: transform, opacity;
  }

  /* #1211: Site-Header (öffentliche Seiten) wie auf plastship.com — 80 px,
     sticky auf jeder Breite, shadow-xl. Doppelklasse gegen die mobile Regel
     oben; das Overlay darunter setzt fixed darüber. */
  ${({ $site, theme })=>$site && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
      && {
        position: sticky;
        top: 0;
        height: ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SITE_HEADER_HEIGHT_PX"]}px;
        min-height: ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SITE_HEADER_HEIGHT_PX"]}px;
        gap: 16px;
        padding: 0 24px;
        background: ${theme.palette.default.white};
        box-shadow: ${theme.palette.site.shadowHover};
        will-change: auto;
      }

      ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["guestNavCompact"]} {
        && {
          gap: 8px;
        }
      }
    `}

  /* Overlay (Frontpage): fest oben auf jeder Breite, der Inhalt läuft darunter.
     Doppelklasse, damit es die mobile Regel oben sicher übertrifft. */
  ${({ $overlay, theme })=>$overlay && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
      && {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        background: ${theme.palette.default.white};
        transition:
          background-color 250ms ease,
          box-shadow 250ms ease;
      }
    `}

  /* Über dem Seiten-Hero: ohne Grund und Schatten, das Bild läuft durch */
  ${({ $transparent })=>$transparent && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
      && {
        background: transparent;
        box-shadow: none;
      }
    `}

  /* #1497, #2175: durchsichtig über einem Block die Schrift nach dessen Farbe
     (headerTone) — hell oder dunkel, in beiden Themes. Menü, Sprachwahl und
     Schalter lesen --header-fg nur an der obersten Ebene; Flyouts behalten
     ihre Farben. Mit Grund (gescrollt) ohne Variable: Theme-Default. */
  ${({ $fg })=>$fg && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
      --header-fg: ${$fg};
    `}
`;
const Nav = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].nav.withConfig({
    displayName: "Header.styles__Nav",
    componentId: "sc-8494ddd5-1"
})`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
  visibility: ${(props)=>props.$isLoading ? 'hidden' : 'visible'};

  @media only screen and (max-width: 1024px) {
    display: none;
  }
`;
const BurgerWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Header.styles__BurgerWrapper",
    componentId: "sc-8494ddd5-2"
})`
  display: none;

  @media only screen and (max-width: 1024px) {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;
const SearchButton = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "Header.styles__SearchButton",
    componentId: "sc-8494ddd5-3"
})`
  display: none;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  -webkit-tap-highlight-color: transparent;

  svg {
    width: 22px;
    height: 22px;

    path,
    rect,
    line,
    circle,
    polyline,
    polygon {
      stroke: ${(props)=>props.theme.palette.default.greyDark};
    }
  }

  &:active {
    opacity: 0.6;
  }
`;
const Controls = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Header.styles__Controls",
    componentId: "sc-8494ddd5-4"
})`
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;
  flex: 1;
  min-width: 200px;
  max-width: 500px;
  margin: 0 1rem;
  visibility: ${(props)=>props.$isLoading ? 'hidden' : 'visible'};

  @media only screen and (max-width: 767px) {
    display: none;
  }
`;
// Avatar and dropdown styled components
/*
 * #1742: Kopf-Avatar als Sechseck mit runden Ecken wie im Logo. Rahmen,
 * Ring-Ausschnitt (2 px Abstand) und Bild (3 px Abstand) teilen sich diese
 * Maße mit ihren clip-paths; die inneren Formen runden konzentrisch zur
 * äußeren (concentricHexCornerRadius).
 */ const AVATAR_OUTER = 36;
const AVATAR_RING_INSET = 2;
const AVATAR_RING = AVATAR_OUTER - 2 * AVATAR_RING_INSET;
const AVATAR_IMAGE_INSET = 3;
const AVATAR_IMAGE = AVATAR_OUTER - 2 * AVATAR_IMAGE_INSET;
const AVATAR_OUTER_CLIP_PATH = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$hex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["roundedHexagonClipPath"])(AVATAR_OUTER);
_c = AVATAR_OUTER_CLIP_PATH;
const AVATAR_RING_CLIP_PATH = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$hex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["roundedHexagonClipPath"])(AVATAR_RING, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$hex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["concentricHexCornerRadius"])(AVATAR_OUTER, AVATAR_RING_INSET));
_c1 = AVATAR_RING_CLIP_PATH;
const AVATAR_IMAGE_CLIP_PATH = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$hex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["roundedHexagonClipPath"])(AVATAR_IMAGE, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$hex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["concentricHexCornerRadius"])(AVATAR_OUTER, AVATAR_IMAGE_INSET));
_c2 = AVATAR_IMAGE_CLIP_PATH;
const AvatarContainer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Header.styles__AvatarContainer",
    componentId: "sc-8494ddd5-5"
})`
  position: relative;
  width: ${AVATAR_OUTER}px;
  height: ${AVATAR_OUTER}px;
  padding-bottom: 8px;
  margin-bottom: -8px;
`;
const AvatarWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Header.styles__AvatarWrapper",
    componentId: "sc-8494ddd5-6"
})`
  cursor: pointer;
  position: relative;
  width: ${AVATAR_OUTER}px;
  height: ${AVATAR_OUTER}px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.15s ease-in-out;

  /* Hexagon outline - outer shape */
  &::before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: ${AVATAR_OUTER}px;
    height: ${AVATAR_OUTER}px;
    clip-path: ${AVATAR_OUTER_CLIP_PATH};
    background: ${(props)=>props.theme.palette.default.primary};
    opacity: ${(props)=>props.$isActive ? 1 : 0.6};
    z-index: 0;
    transition: 0.15s ease-in-out;
  }

  /* Hexagon outline - inner cutout (creates outline effect) */
  &::after {
    position: absolute;
    content: '';
    top: ${AVATAR_RING_INSET}px;
    left: ${AVATAR_RING_INSET}px;
    width: ${AVATAR_RING}px;
    height: ${AVATAR_RING}px;
    clip-path: ${AVATAR_RING_CLIP_PATH};
    background: ${(props)=>props.$isActive ? props.theme.palette.default.primary : props.theme.palette.default.white};
    opacity: ${(props)=>props.$isActive ? 0.15 : 1};
    z-index: 0;
    transition: 0.15s ease-in-out;
  }

  &:hover {
    &::before {
      opacity: 1;
    }
    &::after {
      background: ${(props)=>props.theme.palette.default.primary};
      opacity: 0.15;
    }
  }
`;
const AvatarImage = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Header.styles__AvatarImage",
    componentId: "sc-8494ddd5-7"
})`
  position: relative;
  width: ${AVATAR_IMAGE}px;
  height: ${AVATAR_IMAGE}px;
  clip-path: ${AVATAR_IMAGE_CLIP_PATH};
  overflow: hidden;
  z-index: 1;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const AvatarFallback = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Header.styles__AvatarFallback",
    componentId: "sc-8494ddd5-8"
})`
  width: ${AVATAR_IMAGE}px;
  height: ${AVATAR_IMAGE}px;
  display: flex;
  align-items: center;
  justify-content: center;
  clip-path: ${AVATAR_IMAGE_CLIP_PATH};
  background-color: ${(props)=>props.theme.palette.default.primary};
  color: ${(props)=>props.theme.palette.default.white};
  z-index: 1;

  svg {
    width: 18px;
    height: 18px;

    path,
    rect,
    line,
    circle,
    polyline,
    polygon {
      stroke: ${(props)=>props.theme.palette.default.white};
    }
  }
`;
const Dropdown = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Header.styles__Dropdown",
    componentId: "sc-8494ddd5-9"
})`
  position: absolute;
  top: 100%;
  right: 0;
  min-width: 180px;
  padding: 8px;
  background: ${({ theme })=>theme.palette.default.white};
  border: 1px solid ${({ theme })=>theme.palette.border.default};
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.14);
  z-index: ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$zIndex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Z_INDEX"].dropdown};
`;
const dropdownEntry = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  box-sizing: border-box;
  padding: 9px 12px;
  border-radius: 6px;
  font-family: ${({ theme })=>theme.font.secondaryFamily};
  font-size: 13px;
  cursor: pointer;
  transition: background 0.15s ease;
`;
const DropdownHeader = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Header.styles__DropdownHeader",
    componentId: "sc-8494ddd5-10"
})`
  ${dropdownEntry}
  color: ${({ theme })=>theme.palette.text.primary};
  font-weight: 600;

  &:hover {
    background: ${({ theme })=>theme.palette.surface.subtle};
  }
`;
const DropdownItem = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Header.styles__DropdownItem",
    componentId: "sc-8494ddd5-11"
})`
  ${dropdownEntry}
  color: ${({ theme })=>theme.palette.status.error.text};
  font-weight: 500;

  svg {
    width: 16px;
    height: 16px;
  }

  path,
  line,
  polyline {
    stroke: currentColor;
  }

  &:hover {
    background: ${({ theme })=>theme.palette.status.error.bg};
  }
`;
const NotificationBellWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Header.styles__NotificationBellWrapper",
    componentId: "sc-8494ddd5-12"
})`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const LogoLink = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$NavLink$2f$NavLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavLink"]).withConfig({
    displayName: "Header.styles__LogoLink",
    componentId: "sc-8494ddd5-13"
})`
  display: inline-flex;
  flex-shrink: 0;
  text-decoration: none;
  color: inherit;

  /* #1211: Logo wie auf plastship.com 166 × 40 */
  ${({ $site })=>$site && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
      svg {
        display: block;
        width: 166px;
        height: auto;
      }

      ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["guestNavCompact"]} {
        svg {
          width: 133px;
        }
      }
    `}
`;
const GuestNavBar = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Header.styles__GuestNavBar",
    componentId: "sc-8494ddd5-14"
})`
  display: flex;
  flex: 1;
  justify-content: center;
  min-width: 0;

  ${guestNarrow} {
    display: none;
  }
`;
const GuestActions = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Header.styles__GuestActions",
    componentId: "sc-8494ddd5-15"
})`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;

  ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["guestNavCompact"]} {
    gap: 4px;
  }

  ${guestNarrow} {
    display: none;
  }
`;
const GuestBurger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Burger$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]).withConfig({
    displayName: "Header.styles__GuestBurger",
    componentId: "sc-8494ddd5-16"
})`
  /* Doppelklasse: schlägt display der Burger-Wurzel sicher */
  && {
    display: none;
  }

  ${guestNarrow} {
    && {
      display: flex;
    }
  }
`;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "AVATAR_OUTER_CLIP_PATH");
__turbopack_context__.k.register(_c1, "AVATAR_RING_CLIP_PATH");
__turbopack_context__.k.register(_c2, "AVATAR_IMAGE_CLIP_PATH");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Organism/Header/Header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/ClientTranslation.tsx [app-client] (ecmascript) <export useClientSafeTranslation as useClientTranslation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$UserPreferencesContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/context/UserPreferencesContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$SiteLocaleContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/context/SiteLocaleContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$SidebarContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/context/SidebarContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$AppShellActiveContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/context/AppShellActiveContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useIsGuest$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/useIsGuest.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useSessionFlags$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/useSessionFlags.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$ThemeMode$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/ThemeMode.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$Header$2f$Header$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/Header/Header.styles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$Header$2f$headerTone$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/Header/headerTone.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Logos$2f$LogoPlastship$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Logos/LogoPlastship/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$mobileMenu$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/mobileMenu.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$LanguageSwitcher$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/LanguageSwitcher/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$LanguageSwitcher$2f$LanguageSwitcher$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/LanguageSwitcher/LanguageSwitcher.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$ThemeToggleButton$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/ThemeToggleButton/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$ThemeToggleButton$2f$ThemeToggleButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/ThemeToggleButton/ThemeToggleButton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PublicNav$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/PublicNav/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PublicNav$2f$PublicNav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/PublicNav/PublicNav.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$LinkButton$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/LinkButton/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconArrowRight$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconArrowRight/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Button$2f$Button$2e$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Button/Button.types.ts [app-client] (ecmascript)");
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
 * #1478: Suche, Glocke, Timer, Outlook und Avatar gibt es nur mit Konto — und
 * sie ziehen Notifications, Timer, Outlook-Status und Markdown mit. Als
 * eigener Chunk bekommen Besucher der öffentlichen Seiten davon nichts.
 * Während des Ladens steht der unsichtbare Platzhalter an ihrem Platz.
 */ const HeaderAppControls = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lazy"])(()=>__turbopack_context__.A("[project]/apps/web/src/app/components/Organism/Header/HeaderAppControls.tsx [app-client] (ecmascript, async loader)"));
_c = HeaderAppControls;
/**
 * #1924: React.lazy statt next/dynamic. Seit dem App-Rahmen im Root-Layout
 * (#1919) rendert der Kopf auf jeder App-Seite im Layout; Turbopack schreibt
 * für ein next/dynamic dort Chunk-Namen in die react-loadable-manifest der
 * Seite, die es nie ausgibt. Jede App-Seite lud deshalb drei
 * `<link rel="preload">` ins Leere (404 in der Konsole). React.lazy braucht
 * kein Manifest: der Server rendert die Steuerung mit, der Client lädt den
 * Chunk über den eigenen Import — eigener Chunk für Besucher bleibt (#1478).
 */ const appControlsPlaceholder = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$Header$2f$Header$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Controls"], {
    $isLoading: true,
    "data-testid": "header-app-placeholder"
}, void 0, false, {
    fileName: "[project]/apps/web/src/app/components/Organism/Header/Header.tsx",
    lineNumber: 41,
    columnNumber: 32
}, ("TURBOPACK compile-time value", void 0));
const Header = /*#__PURE__*/ _s((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c1 = _s((props, ref)=>{
    _s();
    const { className, overlay = false, transparent = false, site = false, tone = 'light' } = props;
    const headerElRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { themeMode, setThemeMode, language, setLanguage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$UserPreferencesContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserPreferences"])();
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const { tr } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"])(language);
    const { isLeftSidebarOpen, toggleLeftSidebar } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$SidebarContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSidebar"])();
    // #1561: auf Sprachseiten echte Links auf die andere Sprachfassung
    const sprachLinks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$SiteLocaleContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguageSwitcherLinks"])();
    // Scroll-linked header hide/show — slides and fades at scroll speed (mobile only)
    // When sidebar is open, header stays fully visible. Overlay- und Site-Header bleiben immer stehen.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            if (overlay || site) return;
            let lastScrollY = window.scrollY;
            let headerOffset = 0;
            if (isLeftSidebarOpen) {
                const el = headerElRef.current;
                if (el) {
                    headerOffset = 0;
                    el.style.transform = 'translateY(0)';
                    el.style.opacity = '1';
                }
            }
            const handleScroll = {
                "Header.useEffect.handleScroll": ()=>{
                    if (isLeftSidebarOpen) return;
                    const el = headerElRef.current;
                    if (!el) return;
                    const currentScrollY = window.scrollY;
                    const delta = currentScrollY - lastScrollY;
                    const headerHeight = el.offsetHeight;
                    // Accumulate offset clamped between 0 and headerHeight
                    headerOffset = Math.min(Math.max(headerOffset + delta, 0), headerHeight);
                    const progress = headerOffset / headerHeight;
                    el.style.transform = `translateY(-${headerOffset}px)`;
                    el.style.opacity = `${1 - progress}`;
                    lastScrollY = currentScrollY;
                }
            }["Header.useEffect.handleScroll"];
            window.addEventListener('scroll', handleScroll, {
                passive: true
            });
            return ({
                "Header.useEffect": ()=>window.removeEventListener('scroll', handleScroll)
            })["Header.useEffect"];
        }
    }["Header.useEffect"], [
        isLeftSidebarOpen,
        overlay,
        site
    ]);
    // #2175: eine Auffrischung der Sitzung (Theme-/Sprachwechsel) zählt als angemeldet
    const { isAuthenticated, isSessionLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useSessionFlags$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSessionFlags"])();
    // #1478: Die App-Bedienelemente brauchen die App-Shell-Provider
    // (Notifications, Timer, UserContext). Ohne sie (öffentliche Seite ohne
    // Sitzung, bis die Shell nachgeladen ist) nur der Platzhalter. Auf
    // öffentlichen Seiten (site) erst mit Sitzung — Besucher ohne Konto laden
    // sie nie; in der App wie bisher auch während die Sitzung lädt.
    const appShellActive = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$AppShellActiveContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppShellActive"])();
    const showAppControls = appShellActive && (isAuthenticated || !site && isSessionLoading);
    // #1211: Besucher ohne Konto bekommen den Kopf von plastship.com — Menü,
    // Sprache, Login-Pille, schmal ein grüner Burger; keine Suche (sie findet
    // ohne Konto nichts).
    // #1563: schon beim Server-Rendern, wenn kein Session-Cookie da ist — sonst
    // fehlten die Menü-Links im HTML, das Crawler sehen.
    const isGuest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useIsGuest$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsGuest"])();
    const inverted = themeMode === __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$ThemeMode$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeMode"].DARK;
    // Offenes Gast-Menü liegt unter dem Header: dann braucht er seinen Grund
    const seeThrough = overlay && transparent && !isLeftSidebarOpen;
    // #2175: durchsichtig gilt der Ton des Grunds (Frontpage misst ihn), mit Grund der Theme-Default
    const shownTone = seeThrough ? tone : (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$Header$2f$headerTone$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["headerToneDefault"])(themeMode);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$Header$2f$Header$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        className: className,
        ref: (node)=>{
            headerElRef.current = node;
            if (typeof ref === 'function') ref(node);
            else if (ref) ref.current = node;
        },
        "data-testid": 'header-root',
        "data-overlay": overlay ? 'true' : undefined,
        "data-transparent": overlay ? seeThrough ? 'true' : 'false' : undefined,
        "data-tone": overlay ? shownTone : undefined,
        "data-site": site ? 'true' : undefined,
        "data-guest": isGuest ? 'true' : undefined,
        $overlay: overlay,
        $transparent: seeThrough,
        $fg: seeThrough ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$Header$2f$headerTone$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["headerFg"])(tone, theme.palette) : undefined,
        $site: site,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$Header$2f$Header$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LogoLink"], {
                href: isAuthenticated ? '/dashboard' : '/',
                $site: site,
                "aria-label": isAuthenticated ? tr('header.logo.dashboardAriaLabel', {
                    defaultValue: 'plastship – zum Dashboard'
                }) : tr('header.logo.ariaLabel', {
                    defaultValue: 'plastship – zur Startseite'
                }),
                "data-testid": "header-logo-link",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Logos$2f$LogoPlastship$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    inverted: seeThrough ? tone === 'dark' : inverted
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Organism/Header/Header.tsx",
                    lineNumber: 170,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Organism/Header/Header.tsx",
                lineNumber: 159,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            isGuest && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$Header$2f$Header$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GuestNavBar"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PublicNav$2f$PublicNav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CmsPublicNav"], {
                            variant: "bar",
                            dataTestId: "header-public-nav"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Organism/Header/Header.tsx",
                            lineNumber: 177,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Organism/Header/Header.tsx",
                        lineNumber: 174,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$Header$2f$Header$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GuestActions"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$LanguageSwitcher$2f$LanguageSwitcher$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LanguageSwitcher"], {
                                value: language,
                                onChange: setLanguage,
                                links: sprachLinks,
                                ariaLabel: tr('header.language.ariaLabel', {
                                    defaultValue: 'Sprache wählen'
                                }),
                                searchPlaceholder: tr('header.language.searchPlaceholder', {
                                    defaultValue: 'Sprache suchen…'
                                }),
                                noResultsText: tr('header.language.noResults', {
                                    defaultValue: 'Keine Sprache gefunden'
                                }),
                                dataTestId: "header-language-switcher"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Organism/Header/Header.tsx",
                                lineNumber: 182,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$ThemeToggleButton$2f$ThemeToggleButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeToggleButton"], {
                                value: themeMode,
                                onChange: setThemeMode,
                                ariaLabel: tr('profile.themeMode', {
                                    defaultValue: 'Darstellung'
                                }),
                                title: inverted ? tr('profile.theme.light', {
                                    defaultValue: 'Hell'
                                }) : tr('profile.theme.dark', {
                                    defaultValue: 'Dunkel'
                                }),
                                dataTestId: "header-theme-toggle"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Organism/Header/Header.tsx",
                                lineNumber: 197,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$LinkButton$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/login",
                                modifier: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Button$2f$Button$2e$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ButtonModifier"].PRIMARY,
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconArrowRight$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/components/Organism/Header/Header.tsx",
                                    lineNumber: 211,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0)),
                                iconAlign: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Button$2f$Button$2e$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconAligns"].RIGHT,
                                dataTestId: "header-login",
                                children: tr('header.login.label', {
                                    defaultValue: 'Login'
                                })
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Organism/Header/Header.tsx",
                                lineNumber: 208,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/app/components/Organism/Header/Header.tsx",
                        lineNumber: 179,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$Header$2f$Header$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GuestBurger"], {
                        isOpen: isLeftSidebarOpen,
                        onClick: toggleLeftSidebar,
                        controlsId: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$mobileMenu$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOBILE_MENU_ID"]
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Organism/Header/Header.tsx",
                        lineNumber: 219,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/components/Organism/Header/Header.tsx",
                lineNumber: 173,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            !isGuest && (showAppControls ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
                fallback: appControlsPlaceholder,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HeaderAppControls, {}, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Organism/Header/Header.tsx",
                    lineNumber: 229,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Organism/Header/Header.tsx",
                lineNumber: 228,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0)) : // Ohne App-Shell (öffentliche Seite, Sitzung lädt): unsichtbarer Platzhalter
            appControlsPlaceholder)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Organism/Header/Header.tsx",
        lineNumber: 140,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
}, "IwIEl24oF7oajl1RHQkHraDo64A=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$UserPreferencesContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserPreferences"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$SidebarContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSidebar"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$SiteLocaleContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguageSwitcherLinks"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useSessionFlags$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSessionFlags"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$AppShellActiveContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppShellActive"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useIsGuest$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsGuest"]
    ];
})), "IwIEl24oF7oajl1RHQkHraDo64A=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$UserPreferencesContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserPreferences"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$SidebarContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSidebar"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$SiteLocaleContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguageSwitcherLinks"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useSessionFlags$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSessionFlags"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$AppShellActiveContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppShellActive"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useIsGuest$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsGuest"]
    ];
});
_c2 = Header;
Header.displayName = 'Header';
;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "HeaderAppControls");
__turbopack_context__.k.register(_c1, "Header$forwardRef");
__turbopack_context__.k.register(_c2, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Organism/Header/headerTone.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HEADER_BG_TOKENS",
    ()=>HEADER_BG_TOKENS,
    "HEADER_FG_DARK",
    ()=>HEADER_FG_DARK,
    "HEADER_TONES",
    ()=>HEADER_TONES,
    "headerBgHex",
    ()=>headerBgHex,
    "headerFg",
    ()=>headerFg,
    "headerToneDefault",
    ()=>headerToneDefault,
    "headerToneFor",
    ()=>headerToneFor,
    "headerToneForHex",
    ()=>headerToneForHex,
    "isHeaderBgToken",
    ()=>isHeaderBgToken,
    "isHeaderTone",
    ()=>isHeaderTone,
    "isHexColor",
    ()=>isHexColor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$ThemeMode$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/ThemeMode.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$helper$2f$color$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/helper/color.ts [app-client] (ecmascript)");
;
;
const HEADER_TONES = [
    'light',
    'dark'
];
const HEADER_BG_TOKENS = [
    'primary',
    'secondary',
    'white',
    'greyLight',
    'tint',
    'navy'
];
const isHeaderBgToken = (value)=>typeof value === 'string' && HEADER_BG_TOKENS.includes(value);
const isHeaderTone = (value)=>value === 'light' || value === 'dark';
const HEADER_FG_DARK = '#212529';
const headerFg = (tone, palette)=>tone === 'dark' ? palette.text.onAccent : HEADER_FG_DARK;
const headerBgHex = (token, palette)=>token === 'tint' ? palette.site.tint : token === 'navy' ? palette.site.navy : palette.default[token];
const headerToneDefault = (themeMode)=>themeMode === __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$ThemeMode$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeMode"].DARK ? 'dark' : 'light';
const headerToneFor = (token, themeMode, palette)=>token ? headerToneForHex(headerBgHex(token, palette), palette) : headerToneDefault(themeMode);
const isHexColor = (value)=>typeof value === 'string' && /^#(?:[0-9a-f]{3}|[0-9a-f]{6})$/i.test(value);
const headerToneForHex = (grund, palette)=>{
    const hell = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$helper$2f$color$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateContrast"])(headerFg('dark', palette), grund);
    const dunkel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$helper$2f$color$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateContrast"])(HEADER_FG_DARK, grund);
    return hell > dunkel ? 'dark' : 'light';
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Organism/Header/index.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$Header$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/Header/Header.tsx [app-client] (ecmascript)");
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$Header$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Header"];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Organism/MobileMenuShell/MobileMenuShell.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Bar",
    ()=>Bar,
    "Body",
    ()=>Body,
    "Footer",
    ()=>Footer,
    "FooterAction",
    ()=>FooterAction,
    "FooterLabel",
    ()=>FooterLabel,
    "FooterRow",
    ()=>FooterRow,
    "HomeLink",
    ()=>HomeLink,
    "MOBILE_MENU_PANEL_MAX_WIDTH_PX",
    ()=>MOBILE_MENU_PANEL_MAX_WIDTH_PX,
    "Panel",
    ()=>Panel,
    "Section",
    ()=>Section,
    "SectionTitle",
    ()=>SectionTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$NavLink$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/NavLink/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$NavLink$2f$NavLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/NavLink/NavLink.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/site.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$zIndex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/zIndex.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
const MOBILE_MENU_PANEL_MAX_WIDTH_PX = 420;
const hereinschieben = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframes"]`
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
`;
const Panel = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "MobileMenuShell.styles__Panel",
    componentId: "sc-93d97f09-0"
})`
  ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sitePrimaryButton"]}
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  max-width: ${MOBILE_MENU_PANEL_MAX_WIDTH_PX}px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overscroll-behavior: contain;
  background: ${({ theme })=>theme.palette.site.card};
  color: ${({ theme })=>theme.palette.site.text};
  box-shadow: ${({ theme })=>theme.palette.site.shadowHover};
  animation: ${hereinschieben} 0.25s ease-out;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;
const Bar = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "MobileMenuShell.styles__Bar",
    componentId: "sc-93d97f09-1"
})`
  position: sticky;
  top: 0;
  /* über den Einträgen: die Navigation der Seitenleiste trägt z-index 50 */
  z-index: ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$zIndex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Z_INDEX"].sticky};
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme })=>theme.margin.small};
  min-height: ${({ $height })=>$height}px;
  padding: 0 ${({ theme })=>theme.padding.default};
  background: ${({ theme })=>theme.palette.site.card};
  border-bottom: 1px solid ${({ theme })=>theme.palette.site.tint};
`;
const HomeLink = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$NavLink$2f$NavLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavLink"]).withConfig({
    displayName: "MobileMenuShell.styles__HomeLink",
    componentId: "sc-93d97f09-2"
})`
  display: inline-flex;
  flex-shrink: 0;
  text-decoration: none;
  color: inherit;

  svg {
    display: block;
    width: 133px;
    height: auto;
  }
`;
const Body = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "MobileMenuShell.styles__Body",
    componentId: "sc-93d97f09-3"
})`
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  gap: ${({ theme })=>theme.margin.small};
  padding: ${({ theme })=>theme.padding.small} 0;
`;
const Section = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].section.withConfig({
    displayName: "MobileMenuShell.styles__Section",
    componentId: "sc-93d97f09-4"
})`
  display: flex;
  flex-direction: column;
  /* globals.css färbt section mit --color-background — hier gilt die Fläche des Rahmens */
  background: transparent;
  color: inherit;

  & + & {
    border-top: 1px solid ${({ theme })=>theme.palette.site.tint};
    padding-top: ${({ theme })=>theme.padding.small};
  }
`;
const SectionTitle = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].h3.withConfig({
    displayName: "MobileMenuShell.styles__SectionTitle",
    componentId: "sc-93d97f09-5"
})`
  margin: 0 ${({ theme })=>theme.margin.default} ${({ theme })=>theme.margin.extrasmall};
  color: ${({ theme })=>theme.palette.site.muted};
  font-family: ${({ theme })=>theme.font.secondaryFamily};
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
`;
const Footer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "MobileMenuShell.styles__Footer",
    componentId: "sc-93d97f09-6"
})`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: ${({ theme })=>theme.margin.small};
  margin: 0 ${({ theme })=>theme.margin.default};
  padding: ${({ theme })=>theme.padding.default} 0
    calc(${({ theme })=>theme.padding.default} + env(safe-area-inset-bottom, 0px));
  border-top: 1px solid ${({ theme })=>theme.palette.site.tint};
`;
const FooterRow = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "MobileMenuShell.styles__FooterRow",
    componentId: "sc-93d97f09-7"
})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme })=>theme.margin.small};
`;
const FooterLabel = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "MobileMenuShell.styles__FooterLabel",
    componentId: "sc-93d97f09-8"
})`
  color: ${({ theme })=>theme.palette.site.text};
  font-family: ${({ theme })=>theme.font.secondaryFamily};
  font-size: 16px;
`;
const FooterAction = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "MobileMenuShell.styles__FooterAction",
    componentId: "sc-93d97f09-9"
})`
  display: flex;
  justify-content: center;
  padding-top: ${({ theme })=>theme.padding.extrasmall};
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Organism/MobileMenuShell/MobileMenuShell.styles.ts [app-client] (ecmascript) <export Section as MobileMenuSection>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MobileMenuSection",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$MobileMenuShell$2f$MobileMenuShell$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$MobileMenuShell$2f$MobileMenuShell$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/MobileMenuShell/MobileMenuShell.styles.ts [app-client] (ecmascript)");
}),
"[project]/apps/web/src/app/components/Organism/MobileMenuShell/MobileMenuShell.styles.ts [app-client] (ecmascript) <export SectionTitle as MobileMenuSectionTitle>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MobileMenuSectionTitle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$MobileMenuShell$2f$MobileMenuShell$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionTitle"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$MobileMenuShell$2f$MobileMenuShell$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/MobileMenuShell/MobileMenuShell.styles.ts [app-client] (ecmascript)");
}),
"[project]/apps/web/src/app/components/Organism/MobileMenuShell/MobileMenuShell.tsx [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MobileMenuShell",
    ()=>MobileMenuShell,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Modal$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Modal/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Modal$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Modal/Modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Burger$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Burger/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Logos$2f$LogoPlastship$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Logos/LogoPlastship/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$SegmentedToggle$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/SegmentedToggle/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$SegmentedToggle$2f$SegmentedToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/SegmentedToggle/SegmentedToggle.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$LanguageSwitcher$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/LanguageSwitcher/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$LanguageSwitcher$2f$LanguageSwitcher$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/LanguageSwitcher/LanguageSwitcher.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$UserPreferencesContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/context/UserPreferencesContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$SiteLocaleContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/context/SiteLocaleContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/ClientTranslation.tsx [app-client] (ecmascript) <export useClientSafeTranslation as useClientTranslation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useMediaQuery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/useMediaQuery.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useUsagePageview$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/useUsagePageview.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$ThemeMode$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/ThemeMode.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/site.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$zIndex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/zIndex.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$mobileMenu$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/mobileMenu.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$sentry$2f$browser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/sentry/browser.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$MobileMenuShell$2f$MobileMenuShell$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/MobileMenuShell/MobileMenuShell.styles.ts [app-client] (ecmascript)");
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
;
;
;
;
;
;
;
;
/** Fokussierbare Elemente innerhalb des Menüs (Fokusfalle) */ const FOKUSSIERBAR = 'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';
const sichtbar = (el)=>el.getClientRects().length > 0;
const MobileMenuShell = ({ isOpen, onClose, mode, maxWidthPx, barHeightPx = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SITE_HEADER_HEIGHT_PX"], children, footerAction })=>{
    _s();
    const schmal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useMediaQuery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMediaQuery"])(`(max-width: ${maxWidthPx}px)`);
    const aktiv = isOpen && schmal;
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const { language, setLanguage, themeMode, setThemeMode } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$UserPreferencesContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserPreferences"])();
    const { tr } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"])(language);
    // #1561: auf Sprachseiten echte Links auf die andere Sprachfassung
    const sprachLinks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$SiteLocaleContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguageSwitcherLinks"])();
    const panelRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const melde = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MobileMenuShell.useCallback[melde]": (action)=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useUsagePageview$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sendeNutzungsereignis"])(pathname || '/', __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$mobileMenu$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOBILE_MENU_EVENT"], {
                mode,
                action
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$sentry$2f$browser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addBreadcrumb"]({
                category: 'mobile-menu',
                message: action,
                data: {
                    mode
                }
            });
        }
    }["MobileMenuShell.useCallback[melde]"], [
        pathname,
        mode
    ]);
    // Öffnen melden; beim Schließen den Fokus auf den Burger, falls der Dialog
    // ihn nicht schon zurückgegeben hat (iOS fokussiert Knöpfe beim Tippen nicht).
    const warAktiv = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MobileMenuShell.useEffect": ()=>{
            if (aktiv && !warAktiv.current) melde('open');
            // Anfangsfokus auf Schließen. Der Modal-Hintergrund blendet `visibility`
            // per Transition ein — im ersten Frame ist er noch verborgen und der
            // Fokus des Dialogs greift nicht. Deshalb je Frame erneut, bis er sitzt.
            let frame = 0;
            if (aktiv && !warAktiv.current) {
                let versuche = 0;
                const setzeFokus = {
                    "MobileMenuShell.useEffect.setzeFokus": ()=>{
                        const panel = panelRef.current;
                        if (!panel || panel.contains(document.activeElement)) return;
                        panel.querySelector('[data-autofocus]')?.focus({
                            preventScroll: true
                        });
                        if (!panel.contains(document.activeElement) && versuche++ < 30) {
                            frame = requestAnimationFrame(setzeFokus);
                        }
                    }
                }["MobileMenuShell.useEffect.setzeFokus"];
                setzeFokus();
            }
            if (!aktiv && warAktiv.current) {
                const fokus = document.activeElement;
                if (!fokus || fokus === document.body) {
                    const burger = Array.from(document.querySelectorAll('[data-mobile-menu-trigger]')).find(sichtbar);
                    burger?.focus({
                        preventScroll: true
                    });
                }
            }
            warAktiv.current = aktiv;
            return ({
                "MobileMenuShell.useEffect": ()=>cancelAnimationFrame(frame)
            })["MobileMenuShell.useEffect"];
        // melde nur beim Wechsel des Zustands, nicht bei neuer Identität
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["MobileMenuShell.useEffect"], [
        aktiv
    ]);
    // Seitenwechsel schließt das Menü — nur wenn es wirklich offen ist (breit ist
    // `isOpen` eingeloggt die aufgeklappte Seitenleiste).
    const letzterPfad = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(pathname);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MobileMenuShell.useEffect": ()=>{
            if (letzterPfad.current === pathname) return;
            letzterPfad.current = pathname;
            if (aktiv) onClose();
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["MobileMenuShell.useEffect"], [
        pathname
    ]);
    // Klick auf einen Link im Menü: messen und schließen, auch wenn das Ziel die
    // aktuelle Seite ist (dann ändert sich der Pfad nicht).
    const beiKlick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MobileMenuShell.useCallback[beiKlick]": (event)=>{
            const ziel = event.target;
            if (!ziel?.closest('a[href]')) return;
            melde('navigate');
            onClose();
        }
    }["MobileMenuShell.useCallback[beiKlick]"], [
        melde,
        onClose
    ]);
    // Fokusfalle: Tab und Umschalt+Tab bleiben im Menü
    const beiTaste = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MobileMenuShell.useCallback[beiTaste]": (event)=>{
            if (event.key !== 'Tab' || !panelRef.current) return;
            const elemente = Array.from(panelRef.current.querySelectorAll(FOKUSSIERBAR)).filter(sichtbar);
            if (elemente.length === 0) return;
            const erstes = elemente[0];
            const letztes = elemente[elemente.length - 1];
            const aktuell = document.activeElement;
            if (event.shiftKey && (aktuell === erstes || !panelRef.current.contains(aktuell))) {
                event.preventDefault();
                letztes.focus();
            } else if (!event.shiftKey && (aktuell === letztes || !panelRef.current.contains(aktuell))) {
                event.preventDefault();
                erstes.focus();
            }
        }
    }["MobileMenuShell.useCallback[beiTaste]"], []);
    const titel = tr('header.menu.ariaLabel', {
        defaultValue: 'Menü'
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Modal$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
        isOpen: aktiv,
        onClose: onClose,
        variant: "bare",
        ariaLabel: titel,
        zIndex: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$zIndex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Z_INDEX"].overlay,
        dataTestId: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$mobileMenu$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOBILE_MENU_ID"],
        children: aktiv && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$MobileMenuShell$2f$MobileMenuShell$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Panel"], {
            ref: panelRef,
            id: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$mobileMenu$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOBILE_MENU_ID"],
            "data-testid": "mobile-menu-root",
            "data-mode": mode,
            onClickCapture: beiKlick,
            onKeyDown: beiTaste,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$MobileMenuShell$2f$MobileMenuShell$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                    $height: barHeightPx,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$MobileMenuShell$2f$MobileMenuShell$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HomeLink"], {
                            href: "/",
                            "aria-label": tr('header.logo.ariaLabel', {
                                defaultValue: 'plastship – zur Startseite'
                            }),
                            "data-testid": "mobile-menu-logo-link",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Logos$2f$LogoPlastship$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                inverted: themeMode === __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$ThemeMode$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeMode"].DARK
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Organism/MobileMenuShell/MobileMenuShell.tsx",
                                lineNumber: 204,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Organism/MobileMenuShell/MobileMenuShell.tsx",
                            lineNumber: 199,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Burger$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            isOpen: true,
                            trigger: false,
                            onClick: onClose,
                            dataTestId: "mobile-menu-close",
                            autoFocusMarker: true
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Organism/MobileMenuShell/MobileMenuShell.tsx",
                            lineNumber: 206,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/app/components/Organism/MobileMenuShell/MobileMenuShell.tsx",
                    lineNumber: 197,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$MobileMenuShell$2f$MobileMenuShell$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Body"], {
                    children: children
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Organism/MobileMenuShell/MobileMenuShell.tsx",
                    lineNumber: 214,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$MobileMenuShell$2f$MobileMenuShell$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Footer"], {
                    "data-testid": "mobile-menu-footer",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$MobileMenuShell$2f$MobileMenuShell$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FooterRow"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$MobileMenuShell$2f$MobileMenuShell$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FooterLabel"], {
                                    children: tr('profile.language', {
                                        defaultValue: 'Sprache'
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/components/Organism/MobileMenuShell/MobileMenuShell.tsx",
                                    lineNumber: 217,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$LanguageSwitcher$2f$LanguageSwitcher$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LanguageSwitcher"], {
                                    value: language,
                                    onChange: setLanguage,
                                    links: sprachLinks,
                                    ariaLabel: tr('header.language.ariaLabel', {
                                        defaultValue: 'Sprache wählen'
                                    }),
                                    searchPlaceholder: tr('header.language.searchPlaceholder', {
                                        defaultValue: 'Sprache suchen…'
                                    }),
                                    noResultsText: tr('header.language.noResults', {
                                        defaultValue: 'Keine Sprache gefunden'
                                    }),
                                    dataTestId: "mobile-menu-language"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/components/Organism/MobileMenuShell/MobileMenuShell.tsx",
                                    lineNumber: 218,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/app/components/Organism/MobileMenuShell/MobileMenuShell.tsx",
                            lineNumber: 216,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        mode === 'guest' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$MobileMenuShell$2f$MobileMenuShell$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FooterRow"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$MobileMenuShell$2f$MobileMenuShell$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FooterLabel"], {
                                    children: tr('profile.themeMode', {
                                        defaultValue: 'Darstellung'
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/components/Organism/MobileMenuShell/MobileMenuShell.tsx",
                                    lineNumber: 235,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$SegmentedToggle$2f$SegmentedToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SegmentedToggle"], {
                                    options: [
                                        {
                                            value: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$ThemeMode$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeMode"].LIGHT,
                                            label: tr('profile.theme.light', {
                                                defaultValue: 'Hell'
                                            })
                                        },
                                        {
                                            value: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$ThemeMode$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeMode"].DARK,
                                            label: tr('profile.theme.dark', {
                                                defaultValue: 'Dunkel'
                                            })
                                        }
                                    ],
                                    value: themeMode,
                                    onChange: setThemeMode,
                                    ariaLabel: tr('profile.themeMode', {
                                        defaultValue: 'Darstellung'
                                    }),
                                    dataTestId: "mobile-menu-theme"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/components/Organism/MobileMenuShell/MobileMenuShell.tsx",
                                    lineNumber: 236,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/app/components/Organism/MobileMenuShell/MobileMenuShell.tsx",
                            lineNumber: 234,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)),
                        footerAction && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$MobileMenuShell$2f$MobileMenuShell$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FooterAction"], {
                            children: footerAction
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Organism/MobileMenuShell/MobileMenuShell.tsx",
                            lineNumber: 254,
                            columnNumber: 30
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/app/components/Organism/MobileMenuShell/MobileMenuShell.tsx",
                    lineNumber: 215,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/src/app/components/Organism/MobileMenuShell/MobileMenuShell.tsx",
            lineNumber: 189,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Organism/MobileMenuShell/MobileMenuShell.tsx",
        lineNumber: 180,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(MobileMenuShell, "hvCcHRmFaltgoIIakuWEvTD3rNQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useMediaQuery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMediaQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$UserPreferencesContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserPreferences"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$SiteLocaleContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguageSwitcherLinks"]
    ];
});
_c = MobileMenuShell;
;
const __TURBOPACK__default__export__ = MobileMenuShell;
var _c;
__turbopack_context__.k.register(_c, "MobileMenuShell");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Organism/MobileMenuShell/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$MobileMenuShell$2f$MobileMenuShell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/MobileMenuShell/MobileMenuShell.tsx [app-client] (ecmascript) <locals>");
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Organism/SearchOverlay/SearchOverlay.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "KeyboardHint",
    ()=>KeyboardHint,
    "SearchContent",
    ()=>SearchContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
'use client';
;
const slideDown = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframes"]`
  from {
    opacity: 0;
    transform: translateY(-40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;
const SearchContent = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "SearchOverlay.styles__SearchContent",
    componentId: "sc-f0d9960d-0"
})`
  width: 100%;
  max-width: 600px;
  padding: 0 1rem;
  animation: ${(props)=>props.$isOpen ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
          ${slideDown} 0.2s ease-out
        ` : 'none'};
`;
const KeyboardHint = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "SearchOverlay.styles__KeyboardHint",
    componentId: "sc-f0d9960d-1"
})`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
  color: ${({ theme })=>theme.palette.default.white};
  font-size: 0.875rem;
  opacity: 0.8;

  kbd {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 24px;
    height: 24px;
    padding: 0 6px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 4px;
    font-family: ${({ theme })=>theme.font.secondaryFamily};
    font-size: 0.75rem;
    font-weight: 500;
  }
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Organism/SearchOverlay/SearchOverlay.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SearchOverlay",
    ()=>SearchOverlay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/lib/axios.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Modal$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Modal/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Modal$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Modal/Modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$InputSearch$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Form/InputSearch/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$InputSearch$2f$InputSearch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Form/InputSearch/InputSearch.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$OverlayContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/context/OverlayContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useRecordLabel$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/useRecordLabel.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useEntityText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/useEntityText.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$records$2f$recordLabel$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/records/recordLabel.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/ClientTranslation.tsx [app-client] (ecmascript) <export useClientSafeTranslation as useClientTranslation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$SearchOverlay$2f$SearchOverlay$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/SearchOverlay/SearchOverlay.styles.ts [app-client] (ecmascript)");
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
;
const SearchOverlay = ({ dataTestId = 'search-overlay' })=>{
    _s();
    const { tr } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { isOverlayOpen, closeOverlay } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$OverlayContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOverlay"])();
    const isOpen = isOverlayOpen(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$OverlayContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OVERLAY_IDS"].SEARCH);
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    // Roh gespeichert (`label: null` ohne Namen), der Platzhalter entsteht beim
    // Rendern — ein beim Laden gemerkter Text bliebe in der alten Sprache (M12).
    const [suggestions, setSuggestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [recent, setRecent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const debounceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { label: buildRecordLabel } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useRecordLabel$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRecordLabel"])();
    const unnamedPlaceholder = buildRecordLabel(null).text;
    // Objektname der Zweitzeile („Task", „Supplier Audit") kommt vom Server in
    // der Registry-Schreibweise — Datensatz-Texte ohne Schlüssel bleiben, wie sie sind.
    const entityText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useEntityText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEntityText"])();
    // Leere Eingabe -> Historie, sonst die Treffer. Gemerkt: InputSearch oeffnet
    // das Dropdown bei jeder neuen Vorschlags-Referenz wieder.
    const showMatches = searchTerm.trim().length >= 2;
    const suggestionOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SearchOverlay.useMemo[suggestionOptions]": ()=>(showMatches ? suggestions : recent).map({
                "SearchOverlay.useMemo[suggestionOptions]": (s)=>({
                        ...s,
                        label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$records$2f$recordLabel$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["recordLabel"])(s.label) ?? unnamedPlaceholder,
                        ...s.secondaryLabel ? {
                            secondaryLabel: entityText.text(s.secondaryLabel)
                        } : {}
                    })
            }["SearchOverlay.useMemo[suggestionOptions]"])
    }["SearchOverlay.useMemo[suggestionOptions]"], [
        showMatches,
        suggestions,
        recent,
        unnamedPlaceholder,
        entityText
    ]);
    // Reset state when overlay closes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SearchOverlay.useEffect": ()=>{
            if (!isOpen) {
                setSearchTerm('');
                setSuggestions([]);
            }
        }
    }["SearchOverlay.useEffect"], [
        isOpen
    ]);
    // #486: „Zuletzt angesehen" bei leerer Eingabe. Die UserActivity-Historie
    // wurde seit jeher geschrieben und nie gelesen — dabei sind die Datensaetze,
    // an denen jemand gerade arbeitet, fast immer die, die er als naechstes
    // sucht. Erst beim Oeffnen laden, nicht beim Mount: sonst zahlt jede Seite
    // die Abfrage, auch wenn die Palette nie aufgeht.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SearchOverlay.useEffect": ()=>{
            if (!isOpen) return;
            let cancelled = false;
            void ({
                "SearchOverlay.useEffect": async ()=>{
                    try {
                        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["api"].get('/user/recent-activity');
                        // #1240: die Route liefert `label: null` statt der Id — der
                        // uebersetzte Platzhalter entsteht beim Rendern (toView unten).
                        if (!cancelled) setRecent(response.data.suggestions || []);
                    } catch  {
                        // Komfortfunktion: faellt still auf „keine Eintraege" zurueck, die
                        // Suche selbst bleibt benutzbar.
                        if (!cancelled) setRecent([]);
                    }
                }
            })["SearchOverlay.useEffect"]();
            return ({
                "SearchOverlay.useEffect": ()=>{
                    cancelled = true;
                }
            })["SearchOverlay.useEffect"];
        }
    }["SearchOverlay.useEffect"], [
        isOpen,
        buildRecordLabel
    ]);
    // Search handler with debounce
    const handleSearch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SearchOverlay.useCallback[handleSearch]": (term)=>{
            setSearchTerm(term);
            // Clear previous debounce
            if (debounceRef.current) {
                clearTimeout(debounceRef.current);
            }
            if (term.length < 2) {
                setSuggestions([]);
                return;
            }
            // Debounce search
            debounceRef.current = setTimeout({
                "SearchOverlay.useCallback[handleSearch]": async ()=>{
                    setIsLoading(true);
                    try {
                        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["api"].get(`/search/suggestions?q=${encodeURIComponent(term)}`);
                        setSuggestions(response.data.suggestions || []);
                    } catch  {
                        // Silently fail - user can still search
                        setSuggestions([]);
                    } finally{
                        setIsLoading(false);
                    }
                }
            }["SearchOverlay.useCallback[handleSearch]"], 300);
        }
    }["SearchOverlay.useCallback[handleSearch]"], []);
    // Navigate to search results
    const handleSubmit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SearchOverlay.useCallback[handleSubmit]": (term)=>{
            if (term.trim().length >= 2) {
                closeOverlay();
                router.push(`/search?q=${encodeURIComponent(term.trim())}`);
            }
        }
    }["SearchOverlay.useCallback[handleSubmit]"], [
        closeOverlay,
        router
    ]);
    // Handle suggestion selection
    const handleSuggestionSelect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SearchOverlay.useCallback[handleSuggestionSelect]": (suggestion)=>{
            closeOverlay();
            // If suggestion.value looks like a URL/path, navigate there
            if (suggestion.value.startsWith('/')) {
                router.push(suggestion.value);
            } else {
                // Otherwise search for it
                router.push(`/search?q=${encodeURIComponent(suggestion.label)}`);
            }
        }
    }["SearchOverlay.useCallback[handleSuggestionSelect]"], [
        closeOverlay,
        router
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Modal$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
        isOpen: isOpen,
        onClose: closeOverlay,
        variant: "bare",
        placement: "top",
        ariaLabel: tr('search.headline', {
            defaultValue: 'Suche'
        }),
        dataTestId: dataTestId,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$SearchOverlay$2f$SearchOverlay$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SearchContent"], {
            $isOpen: isOpen,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$InputSearch$2f$InputSearch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputSearch"], {
                    placeholder: tr('search.placeholder', {
                        defaultValue: 'Suchen...'
                    }),
                    value: searchTerm,
                    onChange: setSearchTerm,
                    onSearch: handleSearch,
                    onSubmit: handleSubmit,
                    suggestions: suggestionOptions,
                    onSuggestionSelect: handleSuggestionSelect,
                    loadingSuggestions: isLoading,
                    // #486: Nur hier — im Filter-/Lookup-Einsatz desselben Atoms waere
                    // die Markierung nur Unruhe, in der globalen Suche erklaert sie den
                    // Treffer.
                    highlightMatches: true,
                    minChars: 2,
                    noResultsText: tr('search.overlay.noSuggestions', {
                        defaultValue: 'Keine Vorschläge'
                    }),
                    variant: "overlay",
                    showClearButton: true,
                    autoFocus: isOpen,
                    noMargin: true,
                    dataTestId: "search-overlay-input"
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Organism/SearchOverlay/SearchOverlay.tsx",
                    lineNumber: 162,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$SearchOverlay$2f$SearchOverlay$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KeyboardHint"], {
                    "data-testid": "keyboard-hint",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                            children: "Enter"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Organism/SearchOverlay/SearchOverlay.tsx",
                            lineNumber: 184,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        " ",
                        tr('search.overlay.hintSearch', {
                            defaultValue: 'zum Suchen'
                        }),
                        " ·",
                        ' ',
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                            children: "ESC"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Organism/SearchOverlay/SearchOverlay.tsx",
                            lineNumber: 185,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        " ",
                        tr('search.overlay.hintClose', {
                            defaultValue: 'zum Schließen'
                        }),
                        " ·",
                        ' ',
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                            children: "⌘K"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Organism/SearchOverlay/SearchOverlay.tsx",
                            lineNumber: 186,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        " /",
                        ' ',
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                            children: tr('search.overlay.ctrlK', {
                                defaultValue: 'Strg+K'
                            })
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Organism/SearchOverlay/SearchOverlay.tsx",
                            lineNumber: 187,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        ' ',
                        tr('search.overlay.hintOpen', {
                            defaultValue: 'zum Öffnen'
                        })
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/app/components/Organism/SearchOverlay/SearchOverlay.tsx",
                    lineNumber: 183,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/src/app/components/Organism/SearchOverlay/SearchOverlay.tsx",
            lineNumber: 161,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Organism/SearchOverlay/SearchOverlay.tsx",
        lineNumber: 153,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(SearchOverlay, "ZGCmMIdJIXDRJDTWf6uRjCn2kZ8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$OverlayContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOverlay"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useRecordLabel$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRecordLabel"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useEntityText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEntityText"]
    ];
});
_c = SearchOverlay;
;
var _c;
__turbopack_context__.k.register(_c, "SearchOverlay");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Organism/SearchOverlay/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$SearchOverlay$2f$SearchOverlay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/SearchOverlay/SearchOverlay.tsx [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Organism/SidebarNavigation/AppMobileMenu.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "APP_HEADER_HEIGHT_PX",
    ()=>APP_HEADER_HEIGHT_PX,
    "AppMobileMenu",
    ()=>AppMobileMenu,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$MobileMenuShell$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/MobileMenuShell/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$MobileMenuShell$2f$MobileMenuShell$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Section__as__MobileMenuSection$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/MobileMenuShell/MobileMenuShell.styles.ts [app-client] (ecmascript) <export Section as MobileMenuSection>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$MobileMenuShell$2f$MobileMenuShell$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__SectionTitle__as__MobileMenuSectionTitle$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/MobileMenuShell/MobileMenuShell.styles.ts [app-client] (ecmascript) <export SectionTitle as MobileMenuSectionTitle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$MobileMenuShell$2f$MobileMenuShell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/MobileMenuShell/MobileMenuShell.tsx [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PublicNav$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/PublicNav/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PublicNav$2f$PublicNav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/PublicNav/PublicNav.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$SidebarContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/context/SidebarContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$UserPreferencesContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/context/UserPreferencesContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/ClientTranslation.tsx [app-client] (ecmascript) <export useClientSafeTranslation as useClientTranslation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$mobileMenu$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/mobileMenu.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$SidebarNavigation$2f$SidebarNavigation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/SidebarNavigation/SidebarNavigation.tsx [app-client] (ecmascript)");
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
const APP_HEADER_HEIGHT_PX = 56;
const AppMobileMenu = ({ barHeightPx = APP_HEADER_HEIGHT_PX })=>{
    _s();
    const { isLeftSidebarOpen, closeLeftSidebar } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$SidebarContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSidebar"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])() ?? '/';
    const { language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$UserPreferencesContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserPreferences"])();
    const { tr } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"])(language);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$MobileMenuShell$2f$MobileMenuShell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["MobileMenuShell"], {
        isOpen: isLeftSidebarOpen,
        onClose: closeLeftSidebar,
        mode: "app",
        maxWidthPx: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$mobileMenu$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APP_MOBILE_MAX_WIDTH_PX"],
        barHeightPx: barHeightPx,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$MobileMenuShell$2f$MobileMenuShell$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Section__as__MobileMenuSection$3e$__["MobileMenuSection"], {
                "data-testid": "mobile-menu-section-app",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$SidebarNavigation$2f$SidebarNavigation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SidebarNavigation"], {
                    pathname: pathname,
                    isSidebarOpen: true,
                    variant: "mobile"
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Organism/SidebarNavigation/AppMobileMenu.tsx",
                    lineNumber: 50,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Organism/SidebarNavigation/AppMobileMenu.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$MobileMenuShell$2f$MobileMenuShell$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Section__as__MobileMenuSection$3e$__["MobileMenuSection"], {
                "data-testid": "mobile-menu-section-public",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$MobileMenuShell$2f$MobileMenuShell$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__SectionTitle__as__MobileMenuSectionTitle$3e$__["MobileMenuSectionTitle"], {
                        children: tr('header.menu.publicSection', {
                            defaultValue: 'Website'
                        })
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Organism/SidebarNavigation/AppMobileMenu.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PublicNav$2f$PublicNav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CmsPublicNav"], {
                        variant: "stacked",
                        dataTestId: "mobile-menu-item-public"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Organism/SidebarNavigation/AppMobileMenu.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/components/Organism/SidebarNavigation/AppMobileMenu.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Organism/SidebarNavigation/AppMobileMenu.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(AppMobileMenu, "9ovMqr6HxktLgJOUo/DnRE9BO7g=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$SidebarContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSidebar"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$UserPreferencesContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserPreferences"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"]
    ];
});
_c = AppMobileMenu;
const __TURBOPACK__default__export__ = AppMobileMenu;
var _c;
__turbopack_context__.k.register(_c, "AppMobileMenu");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Organism/SidebarNavigation/SidebarNavigation.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CollapseButton",
    ()=>CollapseButton,
    "Footer",
    ()=>Footer,
    "Nav",
    ()=>Nav,
    "NavCategory",
    ()=>NavCategory,
    "SkeletonIcon",
    ()=>SkeletonIcon,
    "SkeletonLabel",
    ()=>SkeletonLabel,
    "SkeletonRow",
    ()=>SkeletonRow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Text$2f$Text$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Text/Text.styles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Text$2f$Text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Text/Text.tsx [app-client] (ecmascript)");
// Tiefer Pfad wie in WithSidebar.styles: das Barrel zöge NavGroup.tsx in dieses Styles-Modul
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$NavGroup$2f$NavGroup$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/NavGroup/NavGroup.styles.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
/**
 * #2029: im mobilen Menü liegt die Navigation auf der Fläche des Rahmens
 * (`site.card`) statt auf dem Navy-Verlauf der Seitenleiste — Schrift und
 * Icons nehmen `site.text`; aktiv und überfahren bleibt die Kategorie-Farbe.
 * Seitliche Abstände aus der Theme-Skala wie die übrigen Menüeinträge.
 */ const mobileNav = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
  padding: 0 ${({ theme })=>theme.padding.small};
  gap: ${({ theme })=>theme.margin.small};

  ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$NavGroup$2f$NavGroup$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavLink"]}:not([data-active='true']):not(:hover) {
    color: ${({ theme })=>theme.palette.site.text};

    path,
    rect,
    circle,
    polyline {
      stroke: ${({ theme })=>theme.palette.site.text};

      &[fill]:not([fill='none']) {
        fill: ${({ theme })=>theme.palette.site.text};
      }
    }
  }

  ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$NavGroup$2f$NavGroup$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToggleButton"]} {
    color: ${({ theme })=>theme.palette.site.text};
  }

  /* Abstand Icon → Label wie in der aufgeklappten Seitenleiste (dort setzt ihn SidebarLeft) */
  ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$NavGroup$2f$NavGroup$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavLink"]} > span {
    margin-left: ${({ theme })=>theme.margin.extrasmall};
  }
`;
const Nav = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].nav.withConfig({
    displayName: "SidebarNavigation.styles__Nav",
    componentId: "sc-245e3d2f-0"
})`
  display: flex;
  flex-direction: column;
  /* #1904: ein fester Abstand zwischen den Kategorien (vorher Spacer, die auch
     für leere Kategorien stehen blieben und sich addierten) */
  gap: ${({ theme })=>theme.margin.default};
  z-index: 50;
  background: none;
  overflow: visible; /* Tooltips/Flyouts dürfen überstehen */
  padding-bottom: 8px;
  flex: 1;

  ${({ $mobile })=>$mobile && mobileNav}
`;
const NavCategory = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "SidebarNavigation.styles__NavCategory",
    componentId: "sc-245e3d2f-1"
})`
  display: flex;
  flex-direction: column;
  gap: ${({ theme })=>theme.margin.extrasmall};

  && > * {
    margin-top: 0;
    margin-bottom: 0;
  }
`;
const Footer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "SidebarNavigation.styles__Footer",
    componentId: "sc-245e3d2f-2"
})`
  position: sticky;
  bottom: 0;
  /* #1074: über Nav (z-index: 50) — sonst deckt gescrollter Listeninhalt den
     Collapse-Button ab (Playwright: <svg> aus <nav> fängt Klicks ab). */
  z-index: 60;
  padding: 6px 4px;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  background: linear-gradient(
    to right,
    ${({ theme })=>theme.palette.sidebar.gradientStart},
    ${({ theme })=>theme.palette.sidebar.gradientEnd}
  );
  display: flex;
  justify-content: ${(props)=>props.$open ? 'flex-start' : 'center'};

  @media only screen and (max-width: 1024px) {
    display: none;
  }
`;
const CollapseButton = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "SidebarNavigation.styles__CollapseButton",
    componentId: "sc-245e3d2f-3"
})`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  /* Feste Höhe: aufgeklappt gäbe sonst die Zeilenhöhe des Labels, eingeklappt
     nur das 20px-Icon die Höhe vor — der Button würde beim Toggle springen. */
  height: 36px;
  box-sizing: border-box;
  padding: ${(props)=>props.$open ? '0 12px' : '0'};
  border: 0;
  background: transparent;
  color: ${({ theme })=>theme.palette.sidebar.text};
  cursor: pointer;
  border-radius: 4px;
  font: inherit;
  ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Text$2f$Text$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTextStyles"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Text$2f$Text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextVariants"].navigation)}
  justify-content: ${(props)=>props.$open ? 'flex-start' : 'center'};

  &:hover {
    background-color: rgba(255, 255, 255, 0.12);
  }

  svg {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
  }

  path {
    stroke: currentColor;
  }
`;
const SkeletonRow = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "SidebarNavigation.styles__SkeletonRow",
    componentId: "sc-245e3d2f-4"
})`
  display: flex;
  align-items: center;
  gap: ${({ theme })=>theme.margin.extrasmall};
  padding: ${({ theme })=>theme.padding.extrasmall};
  opacity: 0.25;
`;
const SkeletonIcon = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "SidebarNavigation.styles__SkeletonIcon",
    componentId: "sc-245e3d2f-5"
})`
  flex: 0 0 auto;
  width: 24px;
  height: 24px;
  border-radius: ${({ theme })=>theme.borderRadius.icon};
  background: ${({ theme })=>theme.palette.sidebar.text};
`;
const SkeletonLabel = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "SidebarNavigation.styles__SkeletonLabel",
    componentId: "sc-245e3d2f-6"
})`
  flex: 1 1 auto;
  height: ${({ theme })=>theme.margin.small};
  border-radius: ${({ theme })=>theme.borderRadius.box};
  background: ${({ theme })=>theme.palette.sidebar.text};
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Organism/SidebarNavigation/SidebarNavigation.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SidebarNavigation",
    ()=>SidebarNavigation,
    "kategorienAus",
    ()=>kategorienAus
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$routes$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/routes.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$navAccess$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/navAccess.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/ClientTranslation.tsx [app-client] (ecmascript) <export useClientSafeTranslation as useClientTranslation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$UserPreferencesContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/context/UserPreferencesContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$SidebarContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/context/SidebarContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$Tooltip$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/Tooltip/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$Tooltip$2f$Tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/Tooltip/Tooltip.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$NavGroup$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/NavGroup/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$NavGroup$2f$NavGroup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/NavGroup/NavGroup.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$NavGroup$2f$NavGroup$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/NavGroup/NavGroup.styles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconSidebarHide$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconSidebarHide/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconSidebarShow$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconSidebarShow/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useUserContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/useUserContext.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useCmsReviews$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/useCmsReviews.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$rbac$2f$permissions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/rbac/permissions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$SidebarNavigation$2f$SidebarNavigation$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/SidebarNavigation/SidebarNavigation.styles.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
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
const normalize = (p)=>p.replace(/\/$/, '');
/** #1593: gibt es einen QueryClient? useQueryClient wirft ohne — der Hook wird trotzdem immer gerufen. */ function useHatQueryClient() {
    try {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
        return true;
    } catch  {
        return false;
    }
}
/** #1593: liest die offenen Freigaben an mich und meldet die Zahl nach oben. */ function CmsReviewCountSource({ onCount }) {
    _s();
    const { data } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useCmsReviews$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCmsReviewInboxCount"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CmsReviewCountSource.useEffect": ()=>{
            onCount(data);
        }
    }["CmsReviewCountSource.useEffect"], [
        data,
        onCount
    ]);
    return null;
}
_s(CmsReviewCountSource, "Qe1gq+OFOvVM5Ohuw+afrk9RZ0c=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useCmsReviews$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCmsReviewInboxCount"]
    ];
});
_c = CmsReviewCountSource;
function kategorienAus(items) {
    const abschnitte = [
        []
    ];
    for (const item of items){
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$navAccess$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["istTrenner"])(item)) abschnitte.push([]);
        else if (item.href) abschnitte[abschnitte.length - 1].push(item);
    }
    return abschnitte.filter((abschnitt)=>abschnitt.length > 0).map((abschnitt, index)=>({
            key: abschnitt[0].category ?? String(index),
            category: abschnitt[0].category,
            items: abschnitt
        }));
}
/** #1887: Zeilen des Platzhalters — feste Zahl, unabhängig von Rolle und Rechten. */ const SKELETON_ROWS = 6;
/**
 * #1887: Platzhalter, solange Rolle und Tags unbekannt sind. Nichts darin hängt
 * an der Rolle; die Zeilen haben die Höhe der Nav-Links, die Leiste ihre feste
 * Breite (SidebarLeft) — kein Layoutsprung beim Tausch gegen die echten Punkte.
 */ const NavSkeleton = ({ testId = 'nav-skeleton' })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-testid": testId,
        "aria-hidden": "true",
        children: Array.from({
            length: SKELETON_ROWS
        }, (_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$SidebarNavigation$2f$SidebarNavigation$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SkeletonRow"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$SidebarNavigation$2f$SidebarNavigation$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SkeletonIcon"], {}, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Organism/SidebarNavigation/SidebarNavigation.tsx",
                        lineNumber: 103,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$SidebarNavigation$2f$SidebarNavigation$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SkeletonLabel"], {}, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Organism/SidebarNavigation/SidebarNavigation.tsx",
                        lineNumber: 104,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, index, true, {
                fileName: "[project]/apps/web/src/app/components/Organism/SidebarNavigation/SidebarNavigation.tsx",
                lineNumber: 102,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)))
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Organism/SidebarNavigation/SidebarNavigation.tsx",
        lineNumber: 100,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c1 = NavSkeleton;
const NavigationContent = ({ pathname, language, isSidebarOpen, variant = 'sidebar' })=>{
    _s1();
    const mobil = variant === 'mobile';
    // #2029: eigene Testids im mobilen Menü — nie doppelt neben der Seitenleiste
    const idPrefix = mobil ? 'mobile-menu-item' : 'nav-link';
    const subIdPrefix = mobil ? 'mobile-menu-item-sub' : 'nav-sublink';
    const { tr } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"])(language);
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const { closeLeftSidebar, toggleLeftSidebar, openNavGroups, toggleNavGroup, openNavGroup, navGroupsHydrated, navAutoOpenPath, markNavAutoOpened } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$SidebarContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSidebar"])();
    const navItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$routes$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNavItems"])();
    const current = normalize(pathname);
    // #1876: Pill-Einstiege (z. B. /invoices?view=invoice-zu-buchen) sind nur bei
    // passender Query aktiv — die Query kommt aus der URL, der Pfad vom Aufrufer.
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const suche = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "NavigationContent.useCallback[suche]": (name)=>searchParams?.get(name) ?? null
    }["NavigationContent.useCallback[suche]"], [
        searchParams
    ]);
    // #1593: Zähler an Unterseiten — offene Freigaben an mich (nur wer cms.edit hat, fragt ab)
    const { userContext: kontext, startContext } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useUserContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserContext"])();
    // #1887: Startkontext (Server-Startwert bis zum Bootstrap) für die Navigation
    const userContext = startContext ?? kontext;
    // #1887: Rolle allein aus dem Nutzerkontext (wirksame Rolle inkl. Vorschau).
    // Ohne Kontext keine Rolle — Liste und Unterseiten bleiben leer (fail-closed).
    const role = userContext?.role ?? null;
    // Abfrage erst mit dem Bootstrap-Kontext (wie vor #1887), nicht schon mit dem Startwert
    const cmsRedaktion = kontext ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$rbac$2f$permissions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasObjectAccess"])(kontext, 'cms', 'edit') : false;
    // Abfrage nur, wo ein QueryClient da ist (Tests rendern die Leiste auch ohne)
    const queryClientDa = useHatQueryClient();
    const [offeneFreigaben, setOffeneFreigaben] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(undefined);
    const badges = {
        'cms-reviews': offeneFreigaben
    };
    const [hoveredItem, setHoveredItem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const linkRefsMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    const setLinkRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "NavigationContent.useCallback[setLinkRef]": (href, el)=>{
            if (el) linkRefsMap.current.set(href, el);
            else linkRefsMap.current.delete(href);
        }
    }["NavigationContent.useCallback[setLinkRef]"], []);
    const getLinkRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "NavigationContent.useCallback[getLinkRef]": (href)=>({
                current: linkRefsMap.current.get(href) || null
            })
    }["NavigationContent.useCallback[getLinkRef]"], []);
    const onNavigate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "NavigationContent.useCallback[onNavigate]": ()=>{
            if (window.innerWidth <= 1024) closeLeftSidebar();
        }
    }["NavigationContent.useCallback[onNavigate]"], [
        closeLeftSidebar
    ]);
    // Gruppen = Nav-Punkte mit ≥ MIN_GRUPPEN_KINDER sichtbaren Kindern.
    // Kein useMemo: useNavItems() liefert bei jedem Render ein neues Array, die
    // Dependency würde also ohnehin jedes Mal greifen — die Berechnung selbst
    // ist billig (einmal über die flache Nav-Liste). Der Auto-Open-Effekt unten
    // bleibt trotz der bei jedem Render neuen `groups`-Identität ein No-op nach
    // dem ersten Lauf je Route (navAutoOpenPath-Guard).
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const groups = new Map();
    for (const item of navItems){
        if (!item.href) continue;
        const kinder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$navAccess$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sichtbareUnterseiten"])(role, item.subPages, userContext);
        if (kinder.length >= __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$navAccess$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MIN_GRUPPEN_KINDER"]) groups.set(item.href, kinder);
    }
    // Auto-Open: Gruppe der aktiven Route — genau einmal je Route. Der Merker
    // im Context macht den Unterschied zwischen „Route neu betreten" (öffnen)
    // und „Nutzer hat hier gerade zugeklappt" (zu lassen, auch über Reloads);
    // ohne ihn spränge die Gruppe im selben Tick wieder auf. Spec §5.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NavigationContent.useEffect": ()=>{
            if (!navGroupsHydrated || groups.size === 0) return;
            if (navAutoOpenPath === current) return;
            markNavAutoOpened(current);
            for (const [href, kinder] of groups){
                // #1889: Kinder per Präfix; #1911: ebenso Pfade unter dem Überpunkt ohne
                // eigenes Kind (/auctions/inflow, /my-auctions/neu)
                const active = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$navAccess$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["istElternAktiv"])(current, href, kinder, suche) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$navAccess$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aktiveUnterseite"])(current, kinder, suche) !== undefined;
                if (active && !openNavGroups.has(href)) openNavGroup(href);
            }
        }
    }["NavigationContent.useEffect"], [
        current,
        suche,
        groups,
        openNavGroups,
        openNavGroup,
        navGroupsHydrated,
        navAutoOpenPath,
        markNavAutoOpened
    ]);
    /** Ein Nav-Punkt (Link oder Gruppe); ohne href nichts. */ const renderItem = (item)=>{
        if (!item.href) return null;
        const href = item.href;
        const label = item.nameKey ? tr(item.nameKey, {
            defaultValue: item.nameDefault ?? item.nameKey
        }) : item.name || '';
        const testId = item.resource ? `${idPrefix}-${item.resource.toLowerCase().replace(/[^a-z0-9]/g, '-')}` : undefined;
        const categoryColor = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$routes$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CATEGORY_COLORS"][item.category || ''] || 'transparent';
        const kinder = groups.get(href);
        // #1911: Elternzeile aktiv auch für Pfade unter dem Überpunkt ohne eigenes Kind
        const isActive = kinder ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$navAccess$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["istElternAktiv"])(current, href, kinder, suche) : current === normalize(href);
        if (kinder && testId) {
            const aktivesKind = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$navAccess$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aktiveUnterseite"])(current, kinder, suche);
            const kinderZeilen = kinder.map((k)=>({
                    href: k.href,
                    label: tr(k.nameKey, {
                        defaultValue: k.nameDefault ?? k.nameKey
                    }),
                    isActive: k.href === aktivesKind,
                    testId: `${subIdPrefix}-${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$navAccess$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navSlug"])(k.href)}`,
                    badge: k.badge ? badges[k.badge] : undefined
                }));
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$NavGroup$2f$NavGroup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavGroup"], {
                href: href,
                label: label,
                icon: item.icon,
                categoryColor: categoryColor,
                isActive: isActive,
                hasActiveChild: kinderZeilen.some((c)=>c.isActive),
                isOpen: openNavGroups.has(href),
                onToggle: ()=>toggleNavGroup(href),
                isSidebarOpen: isSidebarOpen,
                testId: testId,
                slug: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$navAccess$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navSlug"])(href),
                toggleLabel: tr('nav.toggleGroup', {
                    name: label
                }),
                onNavigate: onNavigate,
                children: kinderZeilen
            }, href, false, {
                fileName: "[project]/apps/web/src/app/components/Organism/SidebarNavigation/SidebarNavigation.tsx",
                lineNumber: 233,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$NavGroup$2f$NavGroup$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavLink"], {
            href: href,
            ref: (el)=>setLinkRef(href, el),
            $isActive: isActive,
            $categoryColor: categoryColor,
            "data-testid": testId,
            "data-active": isActive ? 'true' : 'false',
            onClick: onNavigate,
            onMouseEnter: ()=>setHoveredItem(href),
            onMouseLeave: ()=>setHoveredItem(null),
            children: [
                item.icon,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    suppressHydrationWarning: true,
                    children: label
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Organism/SidebarNavigation/SidebarNavigation.tsx",
                    lineNumber: 270,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                !isSidebarOpen && label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$Tooltip$2f$Tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                    content: label,
                    isVisible: hoveredItem === href,
                    position: "right",
                    anchorRef: getLinkRef(href),
                    backgroundColor: theme.palette.sidebar.flyout,
                    textColor: isActive ? categoryColor || theme.palette.default.secondary : theme.palette.sidebar.text
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Organism/SidebarNavigation/SidebarNavigation.tsx",
                    lineNumber: 272,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, href, true, {
            fileName: "[project]/apps/web/src/app/components/Organism/SidebarNavigation/SidebarNavigation.tsx",
            lineNumber: 255,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    };
    // #1904: Kategorien = Abschnitte zwischen den Spacern der Konfiguration. Nur
    // Kategorien mit sichtbaren Punkten werden gerendert — leere (für die Rolle
    // ausgeblendete) tragen weder Abstand noch Wrapper bei. Die Abstände kommen
    // allein aus dem Theme (Nav: zwischen, NavCategory: innerhalb).
    const kategorien = kategorienAus(navItems);
    const collapseLabel = isSidebarOpen ? tr('nav.collapse') : tr('nav.expand');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            cmsRedaktion && queryClientDa && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CmsReviewCountSource, {
                onCount: setOffeneFreigaben
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Organism/SidebarNavigation/SidebarNavigation.tsx",
                lineNumber: 299,
                columnNumber: 41
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$SidebarNavigation$2f$SidebarNavigation$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Nav"], {
                "data-testid": mobil ? 'mobile-menu-app-nav' : 'sidebar-nav',
                "data-nav-state": role ? 'ready' : 'loading',
                "aria-busy": !role,
                $mobile: mobil,
                children: [
                    !role && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavSkeleton, {
                        testId: mobil ? 'mobile-menu-nav-skeleton' : 'nav-skeleton'
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Organism/SidebarNavigation/SidebarNavigation.tsx",
                        lineNumber: 306,
                        columnNumber: 19
                    }, ("TURBOPACK compile-time value", void 0)),
                    kategorien.map((kategorie)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$SidebarNavigation$2f$SidebarNavigation$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavCategory"], {
                            "data-testid": `${mobil ? 'mobile-menu-category' : 'nav-category'}-${kategorie.key}`,
                            "data-category": kategorie.category,
                            children: kategorie.items.map(renderItem)
                        }, kategorie.key, false, {
                            fileName: "[project]/apps/web/src/app/components/Organism/SidebarNavigation/SidebarNavigation.tsx",
                            lineNumber: 308,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/components/Organism/SidebarNavigation/SidebarNavigation.tsx",
                lineNumber: 300,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            !mobil && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$SidebarNavigation$2f$SidebarNavigation$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Footer"], {
                $open: isSidebarOpen,
                onClick: (event)=>event.stopPropagation(),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$SidebarNavigation$2f$SidebarNavigation$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CollapseButton"], {
                    type: "button",
                    $open: isSidebarOpen,
                    onClick: toggleLeftSidebar,
                    title: collapseLabel,
                    "aria-label": collapseLabel,
                    "aria-expanded": isSidebarOpen,
                    "data-testid": "sidebar-collapse-button",
                    suppressHydrationWarning: true,
                    children: [
                        isSidebarOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconSidebarHide$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {}, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Organism/SidebarNavigation/SidebarNavigation.tsx",
                            lineNumber: 332,
                            columnNumber: 28
                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconSidebarShow$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {}, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Organism/SidebarNavigation/SidebarNavigation.tsx",
                            lineNumber: 332,
                            columnNumber: 50
                        }, ("TURBOPACK compile-time value", void 0)),
                        isSidebarOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            suppressHydrationWarning: true,
                            children: tr('nav.collapse')
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Organism/SidebarNavigation/SidebarNavigation.tsx",
                            lineNumber: 333,
                            columnNumber: 29
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/app/components/Organism/SidebarNavigation/SidebarNavigation.tsx",
                    lineNumber: 322,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Organism/SidebarNavigation/SidebarNavigation.tsx",
                lineNumber: 318,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Organism/SidebarNavigation/SidebarNavigation.tsx",
        lineNumber: 298,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(NavigationContent, "UizJ1wjGZXPDc5n5XJXArOMAWLc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$SidebarContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSidebar"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$routes$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNavItems"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useUserContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserContext"],
        useHatQueryClient
    ];
});
_c2 = NavigationContent;
const SidebarNavigation = ({ pathname, isSidebarOpen, variant })=>{
    _s2();
    const { language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$UserPreferencesContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserPreferences"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavigationContent, {
            pathname: pathname,
            language: language,
            isSidebarOpen: isSidebarOpen,
            variant: variant
        }, void 0, false, {
            fileName: "[project]/apps/web/src/app/components/Organism/SidebarNavigation/SidebarNavigation.tsx",
            lineNumber: 346,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, `navigation-${language}`, false, {
        fileName: "[project]/apps/web/src/app/components/Organism/SidebarNavigation/SidebarNavigation.tsx",
        lineNumber: 345,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s2(SidebarNavigation, "bnu8d4zKo7mp+7qxN1KFRpvzp6s=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$UserPreferencesContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserPreferences"]
    ];
});
_c3 = SidebarNavigation;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "CmsReviewCountSource");
__turbopack_context__.k.register(_c1, "NavSkeleton");
__turbopack_context__.k.register(_c2, "NavigationContent");
__turbopack_context__.k.register(_c3, "SidebarNavigation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Organism/SidebarNavigation/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$SidebarNavigation$2f$SidebarNavigation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/SidebarNavigation/SidebarNavigation.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$SidebarNavigation$2f$AppMobileMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/SidebarNavigation/AppMobileMenu.tsx [app-client] (ecmascript)");
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);})()

//# sourceMappingURL=apps_web_src_app_components_Organism_08chyz75sg1sh._.js.map